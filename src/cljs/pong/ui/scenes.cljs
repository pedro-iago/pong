(ns pong.ui.scenes
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [pong.aframe-react :as a-vr]))

(defn to-a-vr [entity] ;todo: make this recusive (use datomic style :fear.camera/cursor)
  (a-vr/entity (dissoc entity :children)
               (map #(case (:type %)
                      "animation" (a-vr/animation %)
                      (a-vr/entity %))
                    (-> entity :children vals))))

;I should do more logic here, to ensure props is built correctly
;I need a function that takes the entities values and decides if they are children
;from who, decide they if they are animation, or mixins, or assets..
;i need a context-type, that decides which of these the map of components is
;todo: ask myself if any of this can be done by the parser
(defui EmptyScene
  Object
;;   (componentDidMount [this] ;todo: find out why keypress doesn't work with a-frame
;;     (.addEventListener (dom/node this) "keypress"
;;                        #(case (aget % "keyCode") 67
;;                           (om/transact! this '[toggle-camera!]))))
  (render [this]
    (apply a-vr/scene nil
      (a-vr/entity {:react-key "cam" :camera {:active false}
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
      (map to-a-vr (om/props this))
      (om/children this))))
(def empty-scene (om/factory EmptyScene))
