(ns pong.aframe-react
  (:require [clojure.string :as str]
            #?(:cljs [cljsjs.react])
            #?(:cljs [om.util :as util])
            #?(:cljs [cljs.analyzer :as analyser]))
  #?(:cljs (:require-macros [pong.aframe-react :as a-vr])))

(def tags
  ["entity"
   "animation"
   "scene"
   "event"
   "assets"
   "cubemap"
   "mixin"
   "node"
   "register-element"])

#?(:clj
    (do
      (defn ^:private gen-tag-inline-fn [tag] ;macros are fine, but they can't be passed around as fns
        `(defmacro ~(symbol tag) [opts# & children#]
           `(~'~(symbol "js" (str "React.createElement")) ~'~(str "a-" tag) (serialize ~opts#)
              ~@(clojure.core/map (fn [x#] `(om.util/force-children ~x#)) children#))))

      (defmacro ^:private gen-tags-inline-fns []
        `(do
           ~@(clojure.core/map gen-tag-inline-fn tags)))

      (gen-tags-inline-fns)

      (defn ^:private gen-tag-fn [tag] ;with fns, props could carry their type (bad for .cljc files)
        `(defn ~(symbol tag) [opts# & children#]
          (->> (cljs.core/map om.util/force-children children#)
               (cons (serialize opts#)) (cons ~(str "a-" tag))
               (cljs.core/into-array)
               (.apply ~(symbol "js" (str "React.createElement")) nil))))

      (defmacro ^:private gen-tags-fns []
        `(do
           ~@(clojure.core/map gen-tag-fn tags)))))

#?(:cljs
    (do
      (defn serialize "serializes cljs map into a-frame tag format" [props]
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

      (a-vr/gen-tags-fns)

      (defn el [tag opts & children] ;incredible! I've done the same thing 3 times!!!
        (->> (map util/force-children children)
             (cons (serialize opts)) (cons (str "a-" tag))
             (into-array) (.apply js/React.createElement nil)))

      ;todo: check wether (:type props) is one of tags?
      (defn from-data "turns cljs map into an element of tag :type (defaults to entity)" [ent]
        (let [childs (map from-data (-> ent :children vals)) props (dissoc ent :children)]
          (-> (:type props) (or "entity") (el props childs))))))
