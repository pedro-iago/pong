(ns client.aframe-react
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]))
(enable-console-print!)

;serializes clojure maps into aframe style
(defn serialize [props]
  (reduce-kv
    #(cond
      (fn? %3) (assoc %1 %2 "function")
      (map? %3)
      (assoc %1 %2
        (str/join "; "
          (map (fn [[k v]] (str/join ": " [(name k) v])) %3)))
      (or (seq? %3) (vector? %3))
      (assoc %1 %2 (str/join " " %3))
      :else (assoc %1 %2 %3))
    {} props))

(defui Animation
  Object
  (componentDidMount [this]
    (let [el (dom/node this)
          {:keys [on-animation-end on-animation-start]
           :or {on-animation-end #() on-animation-start #()}} (om/props this)]
      (.addEventListener el "animationend" on-animation-end)
      (.addEventListener el "animationstart" on-animation-start)))
  (render [this]
    (html [:a-animation (serialize (om/props this)) nil])))
(def animation (om/factory Animation))

(defui Entity
  Object
  (componentDidMount [this]
    (let [el (dom/node this)
          {:keys [on-click on-loaded on-mouse-enter on-mouse-leave]
           :or {on-click #() on-loaded #() on-mouse-enter #() on-mouse-leave #()}}
          (om/props this)]
      (.addEventListener el "click" on-click)
      (.addEventListener el "loaded" on-loaded)
      (.addEventListener el "mouseenter" on-mouse-enter)
      (.addEventListener el "mouseleave" on-mouse-leave)))
  (render [this]
    (html (into [:a-entity (serialize (om/props this))] (om/children this)))))
(def entity (om/factory Entity))

(defui Scene
  Object
  (componentDidMount [this]
    (let [el (dom/node this)
          {:keys [on-enter-vr on-exit-vr on-loaded on-tick]
           :or {on-enter-vr #() on-exit-vr #() on-loaded #()}} (om/props this)]
      (.addEventListener el "enter-vr" on-enter-vr)
      (.addEventListener el "exit-vr" on-exit-vr)
      (.addEventListener el "loaded" on-loaded)
      (if (fn? on-tick)
        (.setTimeout js/window
          (.addBehavior #js{:el el :tick on-tick})))))
  (render [this]
    (html (into [:a-scene (serialize (om/props this))] (om/children this)))))
(def scene (om/factory Scene))
