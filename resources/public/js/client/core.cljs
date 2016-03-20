(ns client.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]
            [client.parser :refer [parser]]
            [client.ui.counters :refer [Counter counter]]
            [client.ui.spheres :refer [CounterSphere counter-sphere]]))

(defui App
  static om/IQuery
  (query [this]
    [{:counts (om/get-query Counter)}
     {:radius (om/get-query CounterSphere)}])
  Object
  (render [this]
    (let [{:keys [counts radius]} (om/props this)]
      (dom/div nil
        (dom/div #js{:style #js{:zIndex 5 :position "relative"}}
          (counter (counts 0))
          (counter (counts 1))
          (counter (counts 2)))
        (dom/div nil
          (a-vr/scene nil
            (counter-sphere (radius 0))
            (counter-sphere (radius 1))
            (counter-sphere (radius 2))))))))

(def init-data {:counts [{:id 0 :value 0}
                         {:id 1 :value 0}
                         {:id 2 :value 2}]
                :radius [{:id 0 :value 0 :mult 0.186}
                         {:id 1 :value 0 :mult 0.186}
                         {:id 2 :value 2 :mult 0.186}]})
(defonce app-state (atom (om/tree->db App init-data true)))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser parser}))

(om/add-root! reconciler
  App (gdom/getElement "app"))
