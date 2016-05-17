(ns pong.aframe-react
  (:require [clojure.string :as str]
            #?(:cljs [cljsjs.react])
            #?(:cljs [om.util :as util]))
  #?(:cljs (:require-macros [pong.aframe-react :as a-vr])))

#?(:clj
    (do
      (def tags
        '[entity
          animation
          scene
          event])

      (defn ^:private gen-tags-inline-fn [tag]
        `(defmacro ~tag [opts# & children#]
           `(~'~(symbol "js" (str "React.createElement")) ~'~(str "a-" (name tag)) (serialize ~opts#)
              ~@(clojure.core/map (fn [x#] `(om.util/force-children ~x#)) children#))))

      (defmacro ^:private gen-tags-inline-fns []
        `(do
           ~@(clojure.core/map gen-tags-inline-fn tags)))

      (gen-tags-inline-fns)

      (defn ^:private gen-tags-fn [tag]
        `(defn ~tag [opts# & children#]
           (.apply ~(symbol "js" (str "React.createElement")) nil
             (cljs.core/into-array
               (conj (cljs.core/map om.util/force-children children#)
                     (serialize opts#) '~(str "a-" (name tag)))))))

      (defmacro ^:private gen-tags-fns []
        `(do
           ~@(clojure.core/map gen-tags-fn tags)))))

#?(:cljs
    (do
      (defn serialize "serializes cljs entity map into a-frame.js format" [props]
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

      (defn to-a-vr [ent] ;todo: generalize case statement to any type?
        (let [childs (map to-a-vr (-> ent :children vals)) props (dissoc ent :children)]
          (case (:type props)
                "scene" (apply scene props childs)
                "animation" (apply animation props childs)
                (apply entity props childs))))))
