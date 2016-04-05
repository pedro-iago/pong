(ns pong.fiddle
  (:require [om.next :as om]
            [om.dom :as dom]
            [pong.core :refer [reconciler App app-state init-data]]
            [pong.parser :refer [parser]]
            [pong.aframe-react :as a-vr]
            [pong.ui.counters :refer [Counter counter]]
            [pong.ui.spheres :refer [RandomSphere
                                       CounterSphere counter-sphere]]))

;functions to eval
(defn reset-mult! [st mult]
  (reset! st
    (reduce #(assoc-in %1 [:count/by-id %2 :mult] mult)
      @st (range 0 (-> @st :count/by-id count)))))

;reset atom
(comment
  (reset! app-state
    (om/from-history reconciler
      #uuid "3ab45484-3b8c-4e86-b44c-d5ef214d54ed")))
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

