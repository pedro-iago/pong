(ns pong.system
  (:require [com.rpl.specter :as s]
            [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl])
  (:require-macros [com.rpl.specter.macros :refer [defpath]]))

;SERVER-LOGIC todo: move it to cljc https://juxt.pro/blog/posts/course-notes-2.html
(defpath ALL []
  (select* [this structure next-fn]
    (doall (mapcat next-fn structure)))
  (transform* [this structure next-fn]
    (let [coerce-fn (if (map? structure)
                      #(into {} %)
                      identity)]
      (coerce-fn (mapv next-fn structure)))))

(defn id [uid] uid) ;todo: make sure this is an uuid, use it for garbage collection
(defn position [x y z] [x y z])
(defn velocity [x y z] [x y z])
(defn geometry [prim r] {:primitive prim :radius r}) ;todo: case on primitive
(defn material [c] {:color c}) ;todo: other properties
(defn ctrl [tr pth] {:transform tr :params-path pth}) ;transform updates the component
(defn src [cr pth] {:create cr :params-path pth}) ;todo: create appends an entity-map to dom
(defn sink [de pth] {:delete de :params-path pth}) ;todo: delete removes an entity-map from dom

(def dom
  (avl/sorted-map
   :e/a0 {:id :e/a0
          :position [1 0 0]
          :velocity [1 1 0]
          :geometry (geometry "sphere" 0.5)
          :material (material "#fa2291")
          :ctrl/velocity (ctrl (fn [p1 p2] (mo/* 2 (mo/- p1 p2)))
                           [[:position :e/b0] [:position :e/a0]])}
   :e/a1 {:id :e/a1
          :position [0 0 0]
          :velocity [0 0 0]
          :geometry (geometry "sphere" 0.1)
          :material (material "#11f291")
          :ctrl/velocity (ctrl (fn [p1 p2] (mo/* 4 (mo// (mo/- p2 p1) ;todo: reuse ctrl fns
                                                   (m/magnitude-squared (mo/- p2 p1)))))
                           [[:position :e/b0] [:position :e/a1]])}
   :e/b0 {:id :e/b0
          :position [0 5 -15]}))

(def KEY1-KEY2-VAL ;dom/ecs path todo: think about making symetric paths
  (s/comp-paths [ALL (s/collect-one s/FIRST) s/LAST
                 ALL (s/collect-one s/FIRST) s/LAST]))
(defn switch-path [dom]
  (reduce-kv #(assoc %1 %2 (apply avl/sorted-map %3)) (avl/sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2)) {}
            (s/select
              [KEY1-KEY2-VAL ;todo: switch the params-paths?
               (s/transformed
                 [(s/selected? :params-path some?)
                  :params-path ALL] s/comp-paths)] dom))))
(def ecs (switch-path dom))
(def dom-view (switch-path (avl/subrange ecs < :|)))

(def KEY-VAL
  (s/comp-paths [ALL (s/collect-one s/FIRST) s/LAST]))
(defn sys-vel [st dt]
  (update st :position merge
    (s/transform
      KEY-VAL
      #(-> st :position %1 (mo/+ (mo/* %2 dt))) (:velocity st))))

(def NAME-VAL
  (s/comp-paths [ALL (s/transformed s/FIRST #(-> % name keyword))
                 (s/collect-one s/FIRST) s/LAST ALL s/LAST]))
(defn sys-ctrl [st dt]
  (merge-with merge st
    (s/transform
      NAME-VAL
      #(apply (:transform %2) (s/select (apply s/multi-path (:params-path %2)) st))
      (avl/subrange st >= :ctrl/a < :ctrl/|))))

(defn step-ecs [ecs dt]
  (-> ecs
      (sys-vel dt)
      (sys-ctrl dt)))

(defn step-dom [dom dt]
  (merge dom
    (-> dom
        (avl/subrange >= :e/a < :e/|)
        switch-path
        (step-ecs dt)
        switch-path)))
