(ns pong.scripts
  (:require [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl]
            [pong.fsm :refer [fsm jump flow reach follow avoid mean]]))

;todo: interactively change scenes (which is, merge scene and change root ns of all entities)
;todo: interactive-it by modyfing a reset! with this
(def ^{:doc "a weird string of spheres moving to eternal sadness"} weirdom
  (avl/sorted-map
    :love {:position [-1 1 1]
           :geometry {:primitive "sphere" :radius 0.4}
           :material {:color "#fa2291"}
           :fsm/position (flow reach [[:position :love] [:position :triangle] 1])}
    :fear {:position [0 0 0]
           :geometry {:primitive "sphere" :radius 0.1}
           :material {:color "#11f291"}
           :fsm/position (flow follow [[:position :fear] [:position :triangle] 0.5 1])}
    :fear/a {:position [0 0 1]
             :geometry {:primitive "sphere" :radius 0.05}
             :material {:color "#c2d816"}
             :fsm/position (flow follow [[:position :fear/a] [0 0 0] 4 0.1])}
    :fear/camera {:position [-1 -1 -1]
                  :camera {:active true}
                  :look-at "#fear"}
    :fear.camera/cursor {:cursor ""         ;todo: rethink where using string props is appropiate
                         :position [0 0 -1] ;aframe changes things without changing components!
                         :geometry "primitive: ring; radiusInner: 0.016; radiusOuter: 0.05;"
                         :material "color: orange; shader: flat;"}
    :fear.camera.cursor/clicked {:type "animation" :attribute "scale"
                                 :begin "click"
                                 :dur "150" :fill "backwards"
                                 :from "0.1 0.1 0.1" :to "1.2 1.2 1.2"}
    :triangle/a {:position [1 1 -2]
                 :geometry {:primitive "sphere" :radius 0.2}
                 :material {:color "#c0c32d"}
                 :fsm/position (flow [:velocity :triangle/a])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/a] [0 0 0] 0.4])}
    :triangle/b {:position [1 -2 1]
                 :geometry {:primitive "sphere" :radius 0.2}
                 :material {:color "#c0c32d"}
                 :fsm/position (flow [:velocity :triangle/b])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/b] [0 0 0] 0.4])}
    :triangle/c {:position [-2 1 1]
                 :geometry {:primitive "sphere" :radius 0.2}
                 :material {:color "#c0c32d"}
                 :fsm/position (flow [:velocity :triangle/c])
                 :velocity [0 0 0.1]
                 :fsm/velocity (flow reach [[:position :triangle/c] [0 0 0] 0.4])}
    :triangle/oscilate {:type "animation"
                        :attribute "geometry.radius"
                        :to 0.3
                        :direction "alternate"}
    :triangle/camera {:position [-1 0.5 -1]
                      :camera {:active false}
                      :look-controls ""}
    :triangle {:position [1 1 1]
               :geometry {:primitive "sphere" :radius 0.1}
               :material {:color "#263aae"}
               :fsm/position (flow [:velocity :triangle])
               :velocity [0 0 0]
               :fsm/velocity (flow reach [[:position :triangle] [:position :fear] 0.1])}))
