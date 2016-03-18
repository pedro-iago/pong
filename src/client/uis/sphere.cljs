(ns client.uis.sphere
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]))

(defui ui
  Object
  (render [this]
    (a-vr/entity {:position "0 1 -1" :geometry {:primitive 'sphere :radius 1} :material {:color "#EF2D5E"}})))
(def fc (om/factory ui))
