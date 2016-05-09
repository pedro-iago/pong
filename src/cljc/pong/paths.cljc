(ns pong.paths
  (:require [com.rpl.specter :as s]
            #?(:clj [com.rpl.specter.macros :refer [defpath]])
            [com.rpl.specter.impl :refer [compiled-path? structure-path?]]
            [clojure.data.avl :as avl])
  #?(:cljs (:require-macros [com.rpl.specter.macros :refer [defpath]])))

(declare KEYS)
(defpath ^{:doc "navigates to a view of keywords namespaced by string"}
  subgroup [ns-key]
  (select* [this structure next-fn]
    (let [subgroup (avl/subrange structure >= (keyword ns-key "a") < (keyword ns-key "|"))]
      (next-fn (s/transform KEYS #(-> % name keyword) subgroup))))
  (transform* [this structure next-fn]
    (let [subgroup (avl/subrange structure >= (keyword ns-key "a") < (keyword ns-key "|"))
          newkeyed (s/transform KEYS #(-> % name keyword) subgroup)
          newgroup (next-fn newkeyed)]
      (merge (reduce dissoc structure (keys subgroup))
             (s/transform KEYS #(keyword ns-key (name %)) newgroup)))))

(defn path? "true if compiled path or coll with some structure of a path" [p]
  (or (compiled-path? p) (and (coll? p) (some structure-path? p))))
(def KEYS (s/comp-paths [s/ALL s/FIRST]))
(def KEY-VAL (s/comp-paths [s/ALL (s/collect-one s/FIRST) s/LAST]))
(def KEY1-KEY2-VAL (s/comp-paths [KEY-VAL KEY-VAL]))
(def PARAMS-PATHS (s/comp-paths (s/filterer path?)))
(def FSM-COMPONENTS (s/comp-paths [(subgroup "fsm") KEY1-KEY2-VAL]))
