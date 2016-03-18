(ns client.uis.sphere
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]))

(defui ui
  Object
  (render [this]
    (a-vr/entity {:position (repeatedly 3 #(rand-int 3)) :geometry {:primitive "sphere" :radius 0.7} :material {:color "#EF2D5E"}})))
(def fc (om/factory ui))
