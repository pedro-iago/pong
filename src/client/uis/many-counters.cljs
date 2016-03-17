(ns client.uis.many-counters
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.uis.counter :as counter]))

(defui ui
  static om/IQuery
  (query [this]
    (om/get-query counter/ui)
    [{:counts (om/get-query counter/ui)}])
  Object
  (render [this]
    (let [{:keys [counts]} (om/props this)]
      (dom/div nil
        (counter/fc (counts 0))
        (counter/fc (counts 1))
        (counter/fc (counts 2))))))
(def fc (om/factory ui))
