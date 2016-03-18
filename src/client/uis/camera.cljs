(ns client.uis.camera
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]))

(defui ui
  Object
  (render [this]
    (a-vr/entity nil
      (a-vr/entity (merge {:camera true :look-controls true :wasd-controls true} (om/props this))))))
(def fc (om/factory ui))
