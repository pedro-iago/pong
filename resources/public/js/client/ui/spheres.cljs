(ns client.ui.spheres
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]))

(defui RandomSphere
  Object
  (render [this]
    (a-vr/entity {:position (repeatedly 3 #(rand-int 5))
                  :geometry {:primitive "sphere" :radius (om/props this)}
                  :material {:color "#EF2D5E"}})))
(def random-sphere (om/factory RandomSphere))

(defui CounterSphere
  static om/Ident
  (ident [this props]
    [:count/by-id (:id props)])
  static om/IQuery
  (query [this]
    [:id :value])
  Object
  (render [this]
    (let [{:keys [value]} (om/props this)]
      (random-sphere (* 0.1 value)))))
(def counter-sphere (om/factory CounterSphere {:keyfn :id}))
