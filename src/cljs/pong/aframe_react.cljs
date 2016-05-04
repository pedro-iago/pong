(ns pong.aframe-react
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [com.rpl.specter :as s]
            [com.rpl.specter.impl :refer [compiled-path?]]
            [clojure.string :as str]))

(def MESS (s/walker (some-fn fn? compiled-path?)))
(defn get-name [obj]
  (cond
    (fn? obj) (-> obj (aget "name") (str/split "$") peek)
    (compiled-path? obj) '?path))
;serializes clojure maps into aframe style
(defn serialize [props]
  (clj->js
    (reduce-kv
      #(as-> (subs (str %2) 1) str-key
        (cond
          (fn? %3) %1
          (map? %3)
          (assoc %1 str-key
            (str/join "; "
              (map (fn [[k v]]
                       (str/join ": " [(name k) (s/transform MESS get-name v)])) %3)))
          (or (seq? %3) (vector? %3))
          (assoc %1 str-key (str/join " " %3))
          :else (assoc %1 str-key %3)))
      {} props)))

(defui Animation
  Object
  (componentDidMount [this]
    (let [el (dom/node this)
          {:keys [on-animation-end on-animation-start]
           :or {:on-animation-end #() :on-animation-start #()}} (om/props this)]
      (.addEventListener el "animationend" on-animation-end)
      (.addEventListener el "animationstart" on-animation-start)))
  (render [this]
    (.createElement js/React "a-animation"
      (serialize (om/props this)) nil)))
(def animation (om/factory Animation))

(defui Entity
  Object
  (componentDidMount [this]
    (let [el (dom/node this)
          {:keys [on-click on-loaded on-mouse-enter on-mouse-leave]
           :or {:on-click #() :on-loaded #() :on-mouse-enter #() :on-mouse-leave #()}}
          (om/props this)]
      (.addEventListener el "click" on-click)
      (.addEventListener el "loaded" on-loaded)
      (.addEventListener el "mouseenter" on-mouse-enter)
      (.addEventListener el "mouseleave" on-mouse-leave)))
  (render [this]
    (.createElement js/React "a-entity"
      (serialize (om/props this)) (om/children this))))
(def entity (om/factory Entity {:keyfn :id})) ;should have uuid as keyfn, put om/next query too

(defui Scene
  Object
  (componentDidMount [this]
    (let [el (dom/node this)
          {:keys [on-enter-vr on-exit-vr on-loaded on-tick]
           :or {:on-enter-vr #() :on-exit-vr #() :on-loaded #()}} (om/props this)]
      (.addEventListener el "enter-vr" on-enter-vr)
      (.addEventListener el "exit-vr" on-exit-vr)
      (.addEventListener el "loaded" on-loaded)
      (if (fn? on-tick)
        (.setTimeout js/window
          (.addBehavior #js{:el el :tick on-tick})))))
  (render [this]
    (.createElement js/React "a-scene"
      (serialize (om/props this)) (om/children this))))
(def scene (om/factory Scene))
