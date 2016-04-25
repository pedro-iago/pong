(require '[alembic.still :as $ :refer (distill lein)]) ;todo: remove this and use cljc
(distill '[[expectations "2.0.9"]
           [net.mikera/core.matrix "0.51.0"]
           [com.rpl/specter "0.9.2"]
           [org.clojure/core.match "0.3.0-alpha4"]
           [org.clojure/data.avl "0.0.13"]])

(require '[expectations :as e]
         '[com.rpl.specter :as s]
         '[clojure.core.matrix :as m]
         '[clojure.core.match :as mh])
(use 'clojure.core.matrix.operators
     'clojure.data.avl)

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
(def jump-flow hybrid) ;mode does a jump on the flow (switch flow)

;;I need a script/position component that orchestrates changes to jump/position and
;;flow/position, in a way that I can built it as such:
;;(let [p [:position :e/a0]
;;     q [:position :e/b0]
;;     all [:position s/ALL]]
;; (->  (sequence [p q]
;;        (flow - (* -0.4))
;;        (until distance (< 5))
;;        (flow - inverse (* 4))
;;        (until distance (> 5.5)))
;;      (doall (jump [p all] away))
;;      repeat))
;;away can be a much more complex logic that quickly places p away from all
;;because of the nature of doall, p can be flowing to q and at the same time
;;jumping away from overlapping any other object. somehow I need to shrink
;;sys-jump and sys-flow into sys-script. there is a difference between
;;(doall [p all] (flow orbit) (jump away)) and
;;(doall [p] (flow [heavy] orbit) (jump [all] away)) and
;;(doall (flow [p-moon heavy] orbit) (jump [p all] away))
;;the first is the equivalent to calling
;;(doall (flow [p all] orbit) (jump [p all] away))

;todo: (apply (:mode %3) (s/select (apply s/multi-path (:params-path %3)) st))
;I need to improve this such as values other than paths are applied directly!
;e.g. (defn reach [p q r] (-> (- q p) (* r))) => (flow [pth1 pth2 0.5] reach)

;move this to the hybrid namespace
(defn reach [p q] (-> (- q p) (* 0.4))) ;todo take rate as parameter
(defn avoid [p q] (as-> (- p q) err (->> err m/magnitude-squared (/ err) (* 4))))

(def dom
  {:e/a0 {:id :e/a0
          :position [1 0 0]
          :geometry (geometry "sphere" 0.5)
          :material (material 0xfa2291)
          :jump/position (jump m/abs [[:position :e/a0]])
          :flow/position (flow reach [[:position :e/a0] [:position :e/b0]])}
   :e/a1 {:id :e/a1
          :position [0 0 0]
          :geometry (geometry "sphere" 0.1)
          :material (material 0x11f291)
          :flow/position (flow avoid [[:position :e/a1] [:position :e/b0]])}
   :e/b0 {:id :e/b0
          :position [-1 1 5]
          :flow/position (flow [:velocity :e/b0])
          :velocity [0 0 0.1]
          :flow/velocity (flow reach [[:position :e/b0] [:position :e/a1]])}})

(def KEY1-KEY2-VAL ;dom/ecs path
  (s/comp-paths [s/ALL (s/collect-one s/FIRST) s/LAST
                 s/ALL (s/collect-one s/FIRST) s/LAST]))
(defn switch-path [dom]
  (reduce-kv #(assoc %1 %2 (apply sorted-map %3)) (sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2))
            {} (s/select [KEY1-KEY2-VAL] dom))))
(def ecs (switch-path dom))

(def NAME1-KEY2-VAL
  (s/comp-paths [s/ALL (s/transformed s/FIRST #(-> % name keyword)) (s/collect-one s/FIRST) s/LAST
                 s/ALL (s/collect-one s/FIRST) s/LAST]))
(defn sys-flow [st dt]
  (merge-with merge st
    (s/transform
      NAME1-KEY2-VAL
      #(-> (apply (:mode %3) (s/select (apply s/multi-path (:params-path %3)) st))
           (* dt) (+ (-> st %1 %2)))
      (subrange st >= :flow/a < :flow/|))))
(defn sys-jump [st dt]
  (merge-with merge st
    (s/transform
      NAME1-KEY2-VAL
      #(apply (:mode %3) (s/select (apply s/multi-path (:params-path %3)) st))
      (subrange st >= :jump/a < :jump/|))))

(defn loop-sys [st dt]
  (-> st
      (sys-flow dt)
      (sys-jump dt)))

(def atom-state (atom ecs))
(subrange (swap! atom-state loop-sys 0.0166) >= :position <= :velocity)
