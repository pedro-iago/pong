(ns client.uis.cursor
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [client.aframe-react :as a-vr]))

(defui ui
  Object
  (render [this]
    (let [props (om/props this)
          geo {:primitive 'ring :radiusInner 0.01 :radiusOuter 0.016}
          {:keys [color opacity] :or {:opacity 0.9 :shader 'flat :transparent true} :as mat} props]
      (a-vr/entity {:cursor props :geometry geo :material mat :position "0 0 -1"}))))
(def fc (om/factory ui))
