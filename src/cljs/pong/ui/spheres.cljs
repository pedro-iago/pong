(ns pong.ui.spheres
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [pong.aframe-react :as a-vr]))

(defui RandomSphere
  Object
  (render [this]
    (a-vr/entity {:position (repeatedly 3 #(rand-int 1))
                  :geometry {:primitive 'sphere
                             :radius (-> this om/props :radius)}
                  :material {:color "#268299"}
                  :on-click (-> this om/props :on-click)}))) ;no more :on-click! now it's by a-vr/event!
(def random-sphere (om/factory RandomSphere))

(defui CounterSphere
  static om/Ident
  (ident [_ props]
    [:count/by-id (:id props)])
  static om/IQuery
  (query [_]
    [:id :value :mult])
  Object
  (render [this]
    (let [{:keys [id value mult]} (om/props this)]
      (random-sphere {:radius (* mult value)
                      :on-click #(om/transact! this `[(~'decrement! {:id ~id})])}))))
(def counter-sphere (om/factory CounterSphere {:keyfn :id}))
