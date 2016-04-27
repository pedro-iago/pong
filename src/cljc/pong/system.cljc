(require '[alembic.still :as $ :refer (distill lein)]) ;todo: remove this and use cljc
(distill '[[expectations "2.0.9"]
           [net.mikera/core.matrix "0.51.0"]
           [com.rpl/specter "0.10.0"]
           [org.clojure/core.match "0.3.0-alpha4"]
           [org.clojure/data.avl "0.0.13"]])
;; ($/load-project)

(require '[expectations :as e]
         '[com.rpl.specter :as s]
         '[com.rpl.specter.macros :refer [defpath]]
         '[clojure.core.matrix :as m]
         '[clojure.core.matrix.stats :as ms]
         '[clojure.core.matrix.operators :as mo]
         '[clojure.data.avl :as avl])

;TODO: investigate PAMELA integration https://github.com/dollabs/pamela
;SERVER-LOGIC todo: move it to cljc https://juxt.pro/blog/posts/course-notes-2.html
(defpath ALL [] ;todo: reader conditional (ALL can be s/ALL for clj)
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
(defn hybrid
  ([pth] (hybrid identity [pth]))
  ([md pths] {:mode md :params-path (map s/comp-paths pths)}))
(def jump hybrid) ;mode does a discrete jump (straight set)
(def flow hybrid) ;mode does a continous flow (diff with time)

;move this to the hybrid namespace
(defn reach [p q] (-> (mo/- q p) (mo/* 0.4))) ;todo take rate as parameter
(defn avoid [p q] (as-> (mo/- p q) err (->> err m/magnitude-squared (mo// err) (mo/* 4))))

(def dom
  {:e/a0 {:id :e/a0
          :position [1 0 0]
          :geometry (geometry "sphere" 0.5)
          :material (material "#fa2291")
          :flow/position (flow reach [[:position :e/a0] [:position :e/cb]])}
   :e/a1 {:id :e/a1
          :position [0 0 0]
          :geometry (geometry "sphere" 0.1)
          :material (material "#11f291")
          :flow/position (flow avoid [[:position :e/a1] [:position :e/cb]])}
   :e/b0 {:id :e/b0
          :position [-1 1 3]
          :geometry (geometry "sphere" 0.2)
          :material (material "#c0c32d")
          :flow/position (flow [:velocity :e/b0])
          :velocity [0 0 0.1]
          :flow/velocity (flow reach [[:position :e/b0] [:position :e/a1]])}
   :e/b1 {:id :e/b1
          :position [-1 3 1]
          :geometry (geometry "sphere" 0.2)
          :material (material "#c0c32d")
          :flow/position (flow [:velocity :e/b0])
          :velocity [0 0 0.1]
          :flow/velocity (flow reach [[:position :e/b0] [:position :e/a1]])}
   :e/b2 {:id :e/b2
          :position [-3 1 1]
          :geometry (geometry "sphere" 0.2)
          :material (material "#c0c32d")
          :flow/position (flow [:velocity :e/b0])
          :velocity [0 0 0.1]
          :flow/velocity (flow reach [[:position :e/b0] [:position :e/a1]])}
   :e/cb {:id :e/cb
          :position [-1.666 1.666 1.666]
          :jump/position (jump ms/mean [[:position
                                         (s/view #(vals (avl/subrange % >= :e/b0 <= :e/b2)))]])}})

(def KEY1-KEY2-VAL ;dom/ecs path
  (s/comp-paths [ALL (s/collect-one s/FIRST) s/LAST
                 ALL (s/collect-one s/FIRST) s/LAST]))
(defn switch-path [dom]
  (reduce-kv #(assoc %1 %2 (apply avl/sorted-map %3)) (avl/sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2))
            {} (s/select [KEY1-KEY2-VAL] dom))))

(defn sys-hybrid [st dt]
  (as->
    (s/transform
      KEY1-KEY2-VAL
      #(as-> (apply (:mode %3) (s/select (apply s/multi-path (:params-path %3)) st)) nv
             (case (namespace %1)
               "jump" nv
               "flow" (-> nv (mo/* dt) (mo/+ (->> %1 name keyword (get st) %2)))))
      (avl/subrange st > :|)) nst
    (apply merge-with merge st (map #(hash-map (-> % first name keyword) (peek %)) nst))))

(defn step-ecs [ecs dt]
  (-> ecs
      (sys-hybrid dt)))

(defn step-dom [dom dt]
  (merge dom
    (-> dom
        (avl/subrange >= :e/a < :e/|)
        switch-path
        (step-ecs dt)
        switch-path)))

;todo: reader conditional
(def app-state (atom (switch-path dom)))
(avl/subrange (swap! app-state step-ecs 0.01666) < :|)
