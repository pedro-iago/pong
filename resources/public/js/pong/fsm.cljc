(ns pong.fsm
  (:require [com.rpl.specter :as s]
            [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl]
            [pong.paths :refer [path?]]))

;todo: think if fsm has potential to be a record, and if deftick can be a protocol
;todo: this is the place for PAMELA integration, after all sys-fsm can easily change
;any component, other than the fsm components themselves. I would much rather receive
;a PAMELA model and use it as my entity but to which deegre is still shady to me...
(defn fsm "builts a finite-state-machine from function and its parameters"
  ([pth] (fsm identity [pth])) ;todo: is memoize a good idea?
  ([md params] {:mode (memoize md) :params (s/transform [s/ALL path?] s/comp-paths params)}))

(def ^{:doc "fsm: set to value on tick"} jump
  (comp #(assoc % :step (fn [v nv dt] nv)) fsm))
(def ^{:doc "fsm: set rate of change on tick (euler)"} flow
  (comp #(assoc % :step (fn [v nv dt] (-> nv (mo/* dt) (mo/+ v)))) fsm))

;todo: I want a deftick macro!
;todo: integration with datomic could be great for solving memory type systems
;for instance, the verlet integrator takes an aceleration value and infers the
;velocity from the current and previous position. such a thing could be easily
;handled by datomic. the question is how much would datomic screw up with my
;plain data model, if it does it at all. another point is that I would be forcing
;a datomic dependency inside my fsm namespace and thus systems namespace making
;it tricky to mantain a .cljc implementation, that is, if datomic is fat and bulky.
(comment ;todo: the input a tick-fn needs is still shady now, should be changed later
  (deftick jump [v nv dt] nv) ;tick has the potential to be a protocol
  (deftick flow [v vel dt] (-> vel (mo/* dt) (mo/+ v)))
  (deftick verlet [v acc dt] (...)) ;needs previous v too! datomic? om.next history?
  (deftick wait [v bool dt] (if bool (...) v))) ;i can probably put a channel here
;the good thing about these computations is that they work really well even outside script
;todo: maybe I can have that power too on the tick fns... but how/where? maybe core.async
;to integrate PAMELA observables and such? i have to take a deeper look on both tho
;perharps I want all the values on time, as a signal. then the tick function can decide
;how many of them it wants to use, acessing it by time. that way a tick like signal can
;be implemented, that is, if either input
;todo: consider having ticks as data records, implementing the protocol tick, to be called on sys-fsm
;then what other kind of protocols could be implemented? think if that is indeed useful
;I can have something like a vector of snapshots but then it could use a lot of memory
;another idea is to extend clojure data types with a protocol to get previous values
;I wonder if datom is such a thing

;put computations on a math namespace?
(defn reach [p q k] (->> p (mo/- q) (mo/* k)))
(defn avoid [p q k] (as-> (mo/- p q) err (->> err m/magnitude-squared (mo// err) (mo/* k))))
(defn mean [mtx] (mo// (reduce mo/+ mtx) (count mtx)))
(defn follow [p q k1 k2] (mean (vector (reach p q k1) (avoid p q k2))))