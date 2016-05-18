(ns pong.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [pong.aframe-react :as a-vr]
            [pong.parser :refer [parser]]
            [pong.ui.scenes :refer [EmptyScene empty-scene]]
            [pong.ui.counters :refer [Counter counter]]
            [pong.ui.spheres :refer [CounterSphere counter-sphere]]
            [clojure.data.avl :as avl]
            [pong.systems :as sys]
            [pong.scripts :as script]
            [pong.utils :as pu]))

(defui App ;todo: change :entities to :scene and use (a-vr/from-data scene)
  static om/IQuery
  (query [this]
    [:entities
     {:counts (om/get-query Counter)}
     {:radius (om/get-query CounterSphere)}])
  Object
  (render [this]
    (let [{:keys [counts radius entities]} (om/props this)]
      (dom/div nil
        (apply dom/div #js{:style #js{:zIndex 1 :position "relative"}}
          (map counter counts))
        (dom/div nil
          (apply empty-scene (vals entities) (map counter-sphere radius)))))))

(def init-data
  {:components (pu/switch-path script/weirdom)
   :counts [{:id 0 :value 0}
            {:id 1 :value 0}
            {:id 2 :value 0}]
   :radius [{:id 0 :value 0 :mult 0.186}
            {:id 1 :value 0 :mult 0.186}
            {:id 2 :value 0 :mult 0.186}]})

(defonce app-state
  (atom (reduce-kv #(assoc %1 %2 %3) (avl/sorted-map) (om/tree->db App init-data true))))

(def reconciler
  (om/reconciler
    {:state app-state
     :parser parser}))

(om/add-root! reconciler App (gdom/getElement "app"))

(defonce rafid (atom nil))
(defn start-raf []
  (defn loop-sys []
    (reset! rafid (.requestAnimationFrame js/window loop-sys))
    (swap! app-state update :components sys/step-ecs 0.01666))
  (reset! rafid (.requestAnimationFrame js/window loop-sys)))
(defn end-raf [id] (.cancelAnimationFrame js/window id))
(end-raf @rafid)
(start-raf)
