(ns pong.ui.scenes
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [pong.aframe-react :as a-vr]))

;I should do more logic here, to ensure props is built correctly
;I need a function that takes the entities values and decides if they are children
;from who, decide they if they are animation, or mixins, or assets..
;i need a context-type, that decides which of these the map of components is
;todo: ask myself if any of this can be done by the parser
(defui EmptyScene
  Object
  (render [this]
    (apply a-vr/scene nil
      (a-vr/entity {:react-key "cam" :camera ""
                    :look-controls ""
                    :position "0 2.2 4" :wasd-controls ""}
        (a-vr/entity {:react-key "cur" :cursor "" :position "0 0 -3"
                      :geometry "primitive: ring;
                      radiusInner: 0.016; radiusOuter: 0.05;"
                      :material "color: orange; shader: flat;"}
          (a-vr/animation {:react-key "anim" :attribute "scale"
                           :begin "click"
                           :dur "150" :fill "backwards"
                           :from "0.1 0.1 0.1" :to "2 2 2"})))
      (map a-vr/entity (om/props this))
      (om/children this))))
(def empty-scene (om/factory EmptyScene))
