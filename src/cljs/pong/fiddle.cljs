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
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl]
            [pong.system :as sys]
            [cljs.core.async :as async])
  (:require-macros [com.rpl.specter.macros :refer [defpath]]
                   [cljs.core.async.macros :refer [go]]))

;helper functions
(defn reset-mult! [st mult]
  (reset! st
    (reduce #(assoc-in %1 [:count/by-id %2 :mult] mult)
      @st (range 0 (-> @st :count/by-id count)))))

;verify serialize fn
(parser {:state app-state} [:entities])
(-> @app-state :e/a0)
(-> @app-state :e/a0 a-vr/serialize)

;reset atom (copy uuid from log)
(comment
  (reset! app-state
    (om/from-history reconciler
      #uuid "1c8c979d-afc7-4f4f-a017-c30afabd543f")))
(reset! app-state (reduce-kv #(assoc %1 %2 %3) (avl/sorted-map) (om/tree->db App init-data true)))
(reset-mult! app-state 0.1)

;meta path
(let []
  (om/path (om/class->any reconciler CounterSphere))
  (om/path (om/class->any reconciler Counter)))

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

;system updates
(let []
  (defn loop-sys []
    (.requestAnimationFrame js/window loop-sys)
    (swap! app-state sys/step-dom 0.01666))
  (.requestAnimationFrame js/window loop-sys))
(-> app-state deref type)
(-> @app-state (avl/subrange >= :e/a < :e/|) sys/switch-path :position)
