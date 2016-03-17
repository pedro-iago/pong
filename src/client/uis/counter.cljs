(ns client.uis.counter
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui ui
  static om/Ident
  (ident [this props]
    [:count/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :value])
  Object
  (render [this]
    (let [{:keys [id value] :as props} (om/props this)]
      (dom/div nil
        (dom/span nil (str "Counter " id ": " value))
        (dom/button
          #js {:onClick
               (fn [e] (om/transact! this `[(~'increment! {:id ~id})]))}
          "Click me!")))))
(def fc (om/factory ui))
