#?(:clj (do (require '[alembic.still :as $ :refer (distill lein)])
            (distill '[[net.mikera/core.matrix "0.51.0"]
                       [com.rpl/specter "0.10.0"]
                       [org.clojure/data.avl "0.0.13"]] :verbose false)))
;;             ($/load-project)))

(ns pong.systems
  (:require [com.rpl.specter :as s]
            [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl]
            [pong.utils :refer [compute switch-path]]
            [pong.paths :refer [FSM-COMPONENTS subgroup]]))

;todo: investigate PAMELA integration https://github.com/dollabs/pamela
;todo: put these in web workers if cljs (use servant)
;todo: think of which other systems are good
;what about a system that refreshes a-frame js components with cljs components?
;this can be useful when some animation or event changes some property for example
;this system however needs to know about om.next and three.js in order to do that
;this is actually a valid idea since a web component can only change what is internal to it
;which is, it can't change the react props that describe it. only it's own state
;in order to refresh I could take advantage of the indexer somehow.

(defn sys-fsm [st dt] ;compute mode of fsm, stepping to a new state
  (reduce
    #(let [fsm (peek %2) nv (compute (:mode fsm) (:params fsm) st)]
          (update-in %1 (pop %2) (:step fsm) nv dt))
    st (s/select FSM-COMPONENTS st)))

(defn step-ecs [ecs dt] ;todo: add other systems, each with a worker
  (-> ecs
      (sys-fsm dt)))
