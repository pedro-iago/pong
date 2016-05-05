#?(:clj (do (require '[alembic.still :as $ :refer (distill lein)])
            (distill '[[net.mikera/core.matrix "0.51.0"]
                       [com.rpl/specter "0.10.0"]
                       [org.clojure/data.avl "0.0.13"]] :verbose false)))
;;             ($/load-project)))

(ns pong.systems
  (:require [com.rpl.specter :as s]
            #?(:clj [com.rpl.specter.macros :refer [defpath]])
            [com.rpl.specter.impl :refer [compiled-path? structure-path?]]
            [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl])
  #?(:cljs (:require-macros [com.rpl.specter.macros :refer [defpath]])))

;TODO: investigate PAMELA integration https://github.com/dollabs/pamela
;TODO: introduce children topology up to one level in om. (parser/scene job)

;paths namespace
#?(:clj (def ALL s/ALL) :cljs
    (defpath ALL [] ;todo: reader conditional (ALL can be s/ALL for clj)
      (select* [this structure next-fn]
        (doall (mapcat next-fn structure)))
      (transform* [this structure next-fn]
        (let [coerce-fn (if (map? structure)
                          #(into {} %)
                          identity)]
          (coerce-fn (mapv next-fn structure))))))
(def KEYS (s/comp-paths [s/ALL s/FIRST]))
(defpath subgroup [ns-key]
  (select* [this structure next-fn]
    (let [subgroup (avl/subrange structure >= (keyword ns-key "a") < (keyword ns-key "|"))]
      (next-fn (s/transform KEYS #(-> % name keyword) subgroup))))
  (transform* [this structure next-fn]
    (let [subgroup (avl/subrange structure >= (keyword ns-key "a") < (keyword ns-key "|"))
          newkeyed (s/transform KEYS #(-> % name keyword) subgroup)
          newgroup (next-fn newkeyed)]
      (merge (reduce dissoc structure (keys subgroup))
             (s/transform KEYS #(keyword ns-key (name %)) newgroup)))))
(def path? #(or (compiled-path? %) (and (coll? %) (some structure-path? %))))
(def KEY-VAL (s/comp-paths [ALL (s/collect-one s/FIRST) s/LAST]))
(def KEY1-KEY2-VAL (s/comp-paths [KEY-VAL KEY-VAL]))
(def PARAMS-PATHS (s/comp-paths (s/filterer path?)))
(def FSM-COMPONENTS (s/comp-paths [(subgroup "fsm") KEY1-KEY2-VAL]))
(def CHILDREN-POSITIONS (s/comp-paths [:position (s/filterer s/FIRST namespace) KEY-VAL]))
;todo use (split-key :|) for performance
;util namespace
(defn switch-path [dom] ;switches from/to dom and ecs
  (reduce-kv #(assoc %1 %2 (apply avl/sorted-map %3)) (avl/sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2))
            {} (s/select [KEY1-KEY2-VAL] dom))))
(defn compute [f params st] ;computes function with compiled params in state
  (apply f (s/transform PARAMS-PATHS (fn [pths] (s/select (apply s/multi-path pths) st)) params)))
;; (compute list [[:position :triangle/b] [:position :love] 0.4] (switch-path dom))
;; (compute reach [[:position :triangle/b] [:position :love] 0.4] (switch-path dom))
;; (compute mean [[:position (subgroup "triangle") (s/view vals)]] (switch-path dom))
;; (compute list [[:position (subgroup "triangle") (s/view vals)]] (switch-path dom))
;; (compute vector [[:love :position] [:fear :position]] dom)

;components namespace
(defn id [uid] uid) ;todo: make sure this is an uuid, use it for garbage collection
(defn position [x y z] [x y z])
(defn velocity [x y z] [x y z])
(defn geometry [prim r] {:primitive prim :radius r}) ;todo: case on primitive
(defn material [c] {:color c}) ;todo: other properties
(defn fsm ;todo: update sys-hybrid to sys-fsm
  ([pth] (fsm identity [pth])) ;todo: is memoize a good idea?
  ([md params] {:mode md :params (s/transform [s/ALL path?] s/comp-paths params)}))
;todo: create a macro that creates these fns, and rethink if step is really that general
;there are many modes of flow, many modes of jump, but what about steps of other types?
(def jump (comp #(assoc % :step "jump") fsm)) ;does a discrete jump (straight set)
(def flow (comp #(assoc % :step "flow") fsm)) ;does a continous flow (diff with time)

;math namespace
(defn reach [p q k] (->> p (mo/- q) (mo/* k))) ;todo take rate as parameter
(defn avoid [p q k] (as-> (mo/- p q) err (->> err m/magnitude-squared (mo// err) (mo/* k))))
(defn mean [mtx] (mo// (reduce mo/+ mtx) (count mtx)))

;todo: allow animations to be children here (no code here, just client)
;perharps what could differentiate one from another is the attribute component
;todo: put these in web workers if cljs (use servant)
;levels namespace ;todo: interactive it by modyfing a reset! with this
(def dom ;todo: make a b and c relative to triangle (children) control triangle instead
  (avl/sorted-map
    :love {:id :love
           :position [-1 1 1]
           :geometry (geometry "sphere" 0.5)
           :material (material "#fa2291")
           :fsm/position (flow reach [[:position :love] [:position :triangle] 1])}
    :fear {:id :fear
           :position [0 0 0]
           :geometry (geometry "sphere" 0.1)
           :material (material "#11f291")
           :fsm/position (flow avoid [[:position :fear] [:position :triangle] 10])}
    :triangle/a {:id :a
                 :position [0 0 3]
                 :geometry (geometry "sphere" 0.2)
                 :material (material "#c0c32d")
                 :fsm/position (flow [:velocity :triangle/a])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/a] [0 0 0] 0.4])}
    :triangle/b {:id :b
                 :position [0 3 0]
                 :geometry (geometry "sphere" 0.2)
                 :material (material "#c0c32d")
                 :fsm/position (flow [:velocity :triangle/b])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/b] [0 0 0] 0.4])}
    :triangle/c {:id :c
                 :position [3 0 0]
                 :geometry (geometry "sphere" 0.2)
                 :material (material "#c0c32d")
                 :fsm/position (flow [:velocity :triangle/c])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/c] [0 0 0] 0.4])}
    :triangle {:id :triangle
               :position [1 1 1]
               :geometry (geometry "sphere" 0.1)
               :material (material "#263aae")
               :fsm/position (flow [:velocity :triangle])
               :velocity [0 0 0]
               :fsm/velocity (flow reach [[:position :triangle] [:position :fear] 0.01])}))
;systems namespace
(defn sys-fsm [st dt] ;compute mode of fsm, stepping the state
  (reduce
    #(let [c (peek %2) nv (compute (:mode c) (:params c) st)]
          (update-in %1 (pop %2)
            (fn [v] (case (:step c)
                       "jump" nv
                       "flow" (-> nv (mo/* dt) (mo/+ v))))))
    st (s/select FSM-COMPONENTS st)))
(defn sys-ref-in [st] ;adds parents position (todo: rotate parents rotation)
  (s/transform CHILDREN-POSITIONS #(mo/- %2 (-> st :position (get (-> %1 namespace keyword)))) st))
(defn sys-ref-out [st] ;adds parents position (todo: rotate parents rotation)
  (s/transform CHILDREN-POSITIONS #(mo/+ %2 (-> st :position (get (-> %1 namespace keyword)))) st))
(defn step-ecs [ecs dt] ;todo: add other systems
  (-> ecs
      (sys-ref-in) ;some math is easier in local referential
      (sys-fsm dt) ;like the state machine logic. However, global has it's value too
      (sys-ref-out))) ;like for physics engines or rendering.
(defn step-dom [dom dt]
  (-> dom
      switch-path
      (step-ecs dt)
      switch-path))
(def app (atom (switch-path dom)))
(-> app (swap! step-ecs 0.1) :wdposition)
