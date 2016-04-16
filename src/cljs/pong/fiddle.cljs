(ns pong.fiddle
  (:require [om.next :as om]
            [om.dom :as dom]
            [pong.core :refer [reconciler App app-state init-data]]
            [pong.parser :refer [parser]]
            [pong.aframe-react :as a-vr]
            [pong.ui.counters :refer [Counter counter]]
            [pong.ui.spheres :refer [RandomSphere
                                       CounterSphere counter-sphere]]
            [com.rpl.specter :as s]
            [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo])
  (:require-macros [com.rpl.specter.macros :refer [defpath]])
  (:use [clojure.data.avl :only [sorted-set sorted-map split-key split-at
                                 rank-of subrange nearest]]))

;helper functions
(defn reset-mult! [st mult]
  (reset! st
    (reduce #(assoc-in %1 [:count/by-id %2 :mult] mult)
      @st (range 0 (-> @st :count/by-id count)))))

;reset atom (copy uuid from log)
(comment
  (reset! app-state
    (om/from-history reconciler
      #uuid "666d611b-66d3-4c36-8a2a-6b257dfdeef2")))
(reset! app-state (om/tree->db App init-data true))
(reset-mult! app-state 0.2)

;increment!
(om/transact!
  (om/class->any reconciler App) '[(increment! {:id 0})])

;decrement!
(om/transact!
  (om/class->any reconciler App) '[(decrement! {:id 0})])

;runtime event listeners
(let [el (dom/node
           (om/class->any reconciler a-vr/Entity))]
  (.log js/console el)
  (.addEventListener el "click"
    (fn [] (.log js/console "Click!")))
  (aset el "onclick"
    (fn [] (.log js/console "On click!"))))

;SERVER-LOGIC todo: move it to cljc
(defpath ALL2 []
  (select* [this structure next-fn]
    (doall (mapcat next-fn structure)))
  (transform* [this structure next-fn]
    (let [coerce-fn (if (map? structure)
                      #(into {} %)
                      identity)]
      (coerce-fn (mapv next-fn structure)))))

(defn position [x y z] [x y z])
(defn velocity [x y z] [x y z])
(defn geometry [prim r] {:primitive prim :radius r}) ;todo: case on primitive
(defn material [c] {:color c}) ;todo: other properties
(defn ctrl [tr pth] {:transform tr :params-path pth}) ;transform updates the component
(defn src [cr pth] {:create cr :params-path pth}) ;todo: create appends an entity-map to dom
(defn sink [de pth] {:delete de :params-path pth}) ;todo: delete removes an entity-map from dom

(def dom
  {:e/a0 {:position [1 0 0]
          :velocity [1 1 0]
          :geometry (geometry "sphere" 0.5)
          :material (material 0xfa2291)
          :ctrl/velocity (ctrl (fn [p1 p2] (mo/* 0.4 (mo/- p1 p2)))
                           [[:position :e/b0] [:position :e/a0]])}
   :e/a1 {:position [0 0 0]
          :velocity [0 0 0]
          :geometry (geometry "sphere" 0.1)
          :material (material 0x11f291)
          :ctrl/velocity (ctrl (fn [p1 p2] (mo/* 4 (mo// (mo/- p2 p1) ;todo: reuse ctrl fns
                                                   (m/magnitude-squared (mo/- p2 p1)))))
                           [[:position :e/b0] [:position :e/a1]])}
   :e/b0 {:position [0 1 5]}})

(def KEY1-KEY2-VAL ;dom/ecs path
  (s/comp-paths [ALL2 (s/collect-one s/FIRST) s/LAST
                 ALL2 (s/collect-one s/FIRST) s/LAST]))
(defn switch-path [dom]
  (reduce-kv #(assoc %1 %2 (apply sorted-map %3)) (sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2)) {}
            (s/select
              [KEY1-KEY2-VAL ;todo: switch the params-paths?
               (s/transformed
                 [(s/selected? :params-path some?)
                  :params-path ALL2] s/comp-paths)] dom))))
(def ecs (switch-path dom))
(def dom-view (switch-path (subrange ecs < :zzz)))

(def KEY-VAL
  (s/comp-paths [ALL2 (s/collect-one s/FIRST) s/LAST]))
(defn sys-vel [st dt]
  (update st :position merge
    (s/transform
      KEY-VAL
      #(-> st :position %1 (mo/+ (mo/* %2 dt))) (:velocity st))))

(def NAME-VAL
  (s/comp-paths [ALL2 (s/transformed s/FIRST #(-> % name keyword))
                 (s/collect-one s/FIRST) s/LAST ALL2 s/LAST]))
(defn sys-ctrl [st dt]
  (merge-with merge st
    (s/transform
      NAME-VAL
      #(apply (:transform %2) (s/select (apply s/multi-path (:params-path %2)) st))
      (subrange st > :ctrl/a < :ctrl/zzz))))

(defn loop-sys [st dt]
  (-> st
      (sys-vel dt)
      (sys-ctrl dt)))

(def atom-state (atom ecs))
(subrange (swap! atom-state loop-sys 0.1) >= :position <= :velocity)
