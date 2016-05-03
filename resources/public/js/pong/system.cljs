(ns pong.system
  (:require [com.rpl.specter :as s]
            [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl])
  (:require-macros [com.rpl.specter.macros :refer [defpath]]))

;TODO: investigate PAMELA integration https://github.com/dollabs/pamela
;SERVER-LOGIC todo: move it to cljc https://juxt.pro/blog/posts/course-notes-2.html
;TODO: introduce children topology up to one level in om. (parser/scene job)
(defpath ALL [] ;todo: reader conditional (ALL can be s/ALL for clj)
  (select* [this structure next-fn]
    (doall (mapcat next-fn structure)))
  (transform* [this structure next-fn]
    (let [coerce-fn (if (map? structure)
                      #(into {} %)
                      identity)]
      (coerce-fn (mapv next-fn structure)))))

(defpath subgroup [ns-key] ;I can use submap to select by keys
  (select* [this structure next-fn]
    (next-fn (avl/subrange structure >= (keyword ns-key 'a) < (keyword ns-key '|))))
  (transform* [this structure next-fn]
    (let [subgroup (avl/subrange structure >= (keyword ns-key 'a) < (keyword ns-key '|))
          newgroup (next-fn subgroup)]
      (merge (reduce dissoc structure (keys subgroup))
             newgroup))))

(defn id [uid] uid) ;todo: make sure this is an uuid, use it for garbage collection
(defn position [x y z] [x y z])
(defn velocity [x y z] [x y z])
(defn geometry [prim r] {:primitive prim :radius r}) ;todo: case on primitive
(defn material [c] {:color c}) ;todo: other properties
(defn fsm ;todo: update sys-hybrid to sys-fsm
  ([pth] (fsm identity [pth])) ;todo: is memoize a good idea?
  ([md pths] {:mode md :params-path (map s/comp-paths pths)}))
;todo: create a macro that creates these fns, and rethink if step is really that general
;there are many modes of flow, many modes of jump, but what about steps of other types?
(def jump (comp #(assoc % :step "jump") fsm)) ;does a discrete jump (straight set)
(def flow (comp #(assoc % :step "flow") fsm)) ;does a continous flow (diff with time)

;move this to the hybrid namespace
(defn reach [p q] (-> (mo/- q p) (mo/* 0.4))) ;todo take rate as parameter
(defn avoid [p q] (as-> (mo/- p q) err (->> err m/magnitude-squared (mo// err) (mo/* 4))))
(defn mean [mtx] (mo// (reduce mo/+ mtx) (count mtx)))

(def dom ;todo: make a b and c relative to triangle (children) control triangle instead
  (avl/sorted-map
    :love {:id :love
           :position [-1 1 1]
           :geometry (geometry "sphere" 0.5)
           :material (material "#fa2291")
           :fsm/position (flow reach [[:position :love] [:position :center]])}
    :fear {:id :fear
           :position [0 0 0]
           :geometry (geometry "sphere" 0.1)
           :material (material "#11f291")
           :fsm/position (flow avoid [[:position :fear] [:position :center]])}
    :triangle/a {:id :a
                 :position [-1 1 3]
                 :geometry (geometry "sphere" 0.2)
                 :material (material "#c0c32d")
                 :fsm/position (flow [:velocity :triangle/a])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/a] [:position :love]])}
    :triangle/b {:id :b
                 :position [-1 3 1]
                 :geometry (geometry "sphere" 0.2)
                 :material (material "#c0c32d")
                 :fsm/position (flow [:velocity :triangle/b])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/b] [:position :love]])}
    :triangle/c {:id :c
                 :position [-3 1 1]
                 :geometry (geometry "sphere" 0.2)
                 :material (material "#c0c32d")
                 :fsm/position (flow [:velocity :triangle/c])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/c] [:position :love]])}
;;     :triangle {:id :triangle ;todo: make relative entities a-frame
;;                :position [-1.666 1.666 1.666]
;;                :fsm/position (flow [:velocity :triangle])
;;                :velocity [0 0 0.1]
;;                :fsm/velocity (flow reach [[:position :triangle] [:position :love]])}
    :center {:id :center
             :position [-1.666 1.666 1.666]
             :fsm/position (jump mean [[:position (subgroup 'triangle) (s/view vals)]])}))

(def KEY-VAL (s/comp-paths [ALL (s/collect-one s/FIRST) s/LAST]))
(def KEY1-KEY2-VAL (s/comp-paths [KEY-VAL KEY-VAL]))
(def NAME-VAL
  (s/comp-paths [ALL (s/transformed s/FIRST #(-> % name keyword))
                 (s/collect-one s/FIRST) s/LAST]))
(def NAME1-KEY2-VAL (s/comp-paths [NAME-VAL KEY-VAL]))

(defn switch-path [dom]
  (reduce-kv #(assoc %1 %2 (apply avl/sorted-map %3)) (avl/sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2))
            {} (s/select [KEY1-KEY2-VAL] dom))))

(defn sys-fsm [st dt]
  (merge-with merge st
    (s/transform
      [(subgroup 'fsm) NAME1-KEY2-VAL]
      #(as-> (apply (:mode %3) (s/select (apply s/multi-path (:params-path %3)) st)) nv
             (case (:step %3)
               "jump" nv
               "flow" (-> nv (mo/* dt) (mo/+ (-> st %1 %2))))) st)))

(defn step-ecs [ecs dt]
  (-> ecs
      (sys-fsm dt)))

(defn step-dom [dom dt]
  (-> dom
    switch-path
    (step-ecs dt)
    switch-path))

(avl/split-key :| dom)
;; (-> dom (step-dom 0.1) (step-dom 0.1))
