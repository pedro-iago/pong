(ns pong.utils
  (:require [com.rpl.specter :as s]
            [clojure.data.avl :as avl]
            [pong.paths :refer [PARAMS-PATHS KEY1-KEY2-VAL]]))

;todo: do this recursively (use datomic style :fear.camera/cursor)
(defn fold-children "moves values of namespaced keywords to [namespace :children]" [dom]
  (let [[top _ children] (avl/split-key :| dom)]
    (reduce-kv #(assoc-in %1 [(-> %2 namespace keyword) :children (-> %2 name keyword)] %3)
               top children)))

(defn switch-path "switches keypath order of a two-layer map" [dom]
  (reduce-kv #(assoc %1 %2 (apply avl/sorted-map %3)) (avl/sorted-map)
    (reduce #(update %1 (second %2) conj (peek %2) (first %2))
            {} (s/select [KEY1-KEY2-VAL] dom))))

(defn compute "computes function with parameters in state" [f params st]
  (apply f (s/transform PARAMS-PATHS #(s/select (apply s/multi-path %) st) params)))
