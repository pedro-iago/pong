(ns pong.utils
  (:require [com.rpl.specter :as s]
            [clojure.string :as str]
            [clojure.data.avl :as avl]
            [pong.paths :refer [KEY-VAL PARAMS-PATHS KEY1-KEY2-VAL]]))

;todo: think if these can have bad performance
(defn keyed-dom "adds :id and :react-key with entities global and local keys, respectively" [dom]
  (s/transform KEY-VAL #(-> %2 (assoc :react-key (name %1)) (assoc :id (-> %1 str (subs 1)))) dom))

(defn fold-children "moves values of namespaced keywords to parent's :children" [dom]
  (let [[top _ children] (avl/split-key :| dom)]
    (reduce-kv #(assoc-in %1 (-> %2 namespace (str/split #"\.")
                               (as-> pops (map keyword pops)) (interleave (repeat :children))
                               (vec) (conj (-> %2 name keyword))) %3) top children)))

(defn switch-path "switches keypath order of a two-layer map" [dom]
  (reduce-kv #(assoc %1 %2 (apply avl/sorted-map %3)) (avl/sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2))
            {} (s/select [KEY1-KEY2-VAL] dom))))

(defn compute "computes function with parameters in state" [f params st]
  (apply f (s/transform PARAMS-PATHS #(s/select (apply s/multi-path %) st) params)))
