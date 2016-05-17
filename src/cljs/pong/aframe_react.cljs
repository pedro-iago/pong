(ns pong.aframe-react
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [clojure.string :as str]))

;serializes clojure maps into aframe style
(defn serialize [props]
  (clj->js
    (reduce-kv
      #(as-> (subs (str %2) 1) str-key
        (cond
          (namespace %2) %1
          (fn? %3) %1
          (map? %3)
          (assoc %1 str-key
            (str/join "; "
              (map (fn [[k v]] (str/join ": " [(name k) v])) %3)))
          (or (seq? %3) (vector? %3))
          (assoc %1 str-key (str/join " " %3))
          :else (assoc %1 str-key %3)))
      {} props)))

;todo: add mixins and assets
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

;todo: what if this was a macro?
;todo: take a look at declarative events to make this possible
;a moto keeps coming back when dealing with a-frame: the less I aim it, the more I get
;which is, by supporting a-event I'll have any event at my will, while selecting events here
;only makes it overly specific and requires a ui component (ugly on React tools)
;by using a macro here I make things simpler and perharps faster
;I actually want to do something very similar to what om did to get their macros from react
;perharps the only thing I could miss is the :keyfn thing. but still I could add :react-key in
;the function to-a-vr at pong.ui.scenes.cljs, perharps just copying the value on :id (hacky)
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
(def entity (om/factory Entity))

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

(defn to-a-vr [ent] ;todo: generalize case statement to any type?
  (let [childs (map to-a-vr (-> ent :children vals)) props (dissoc ent :children)]
    (case (:type props)
          "scene" (apply scene props childs)
          "animation" (apply animation props childs)
          (apply entity props childs))))
