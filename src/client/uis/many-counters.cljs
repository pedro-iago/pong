(ns client.uis.many-counters
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]
            [client.uis.sphere :as sphere]
            [client.uis.counter :as counter]))

(defui ui
  static om/IQuery
  (query [this]
    [{:counts (om/get-query counter/ui)}])
  Object
  (render [this]
    (let [{:keys [counts]} (om/props this)]
      (dom/div nil
        (dom/div #js{:transform "translateZ(100)" :position "absolute" :z-index 1000}
          (counter/fc (counts 0))
          (counter/fc (counts 1))
          (counter/fc (counts 2)))
        (dom/div #js{:transform "translateZ(-100)"}
          (a-vr/scene nil
            (sphere/fc {:react-key 0})
            (sphere/fc {:react-key 1})
            (sphere/fc {:react-key 2})))))))
(def fc (om/factory ui))
