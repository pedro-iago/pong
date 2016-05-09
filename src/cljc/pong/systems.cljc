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
(defn sys-fsm [st dt] ;compute mode of fsm, stepping to a new state
  (reduce
    #(let [fsm (peek %2) nv (compute (:mode fsm) (:params fsm) st)]
          (update-in %1 (pop %2) (:step fsm) nv dt))
    st (s/select FSM-COMPONENTS st)))

(defn step-ecs [ecs dt] ;todo: add other systems
  (-> ecs
      (sys-fsm dt)))

(defn step-dom [dom dt]
  (-> dom
      switch-path
      (step-ecs dt)
      switch-path))
