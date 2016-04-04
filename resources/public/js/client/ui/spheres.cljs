(ns client.ui.spheres
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]))

(defui RandomSphere
  Object
  (render [this]
    (a-vr/entity {:position (repeatedly 3 #(rand-int 2))
                  :geometry {:primitive 'sphere
                             :radius (-> this om/props :radius)}
                  :material {:color "#268299"}
                  :on-click (-> this om/props :on-click)})))
(def random-sphere (om/factory RandomSphere))

(defui CounterSphere
  static om/Ident
  (ident [this props]
    [:count/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :value :mult])
  Object
  (render [this]
    (let [{:keys [id value mult]} (om/props this)]
      (random-sphere {:radius (* mult value)
                      :on-click #(om/transact! this `[(~'decrement! {:id ~id})])}))))
(def counter-sphere (om/factory CounterSphere {:keyfn :id}))

;the multiplier should be part of the state
;that would allow for easy integration with scribble
;a simple change on the atom, by eval would do the job
;in other words, make the ui parametric, if you wanna scribble
