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
  (deftick jump [Y X dt] (peek X)) ;tick has the potential to be a protocol
  (deftick euler [Y X dt] (-> (peek X) (mo/* dt) (mo/+ (peek Y))))
  (deftick verlet [Y X dt] (...)) ;needs previous v too! datomic? om.next history?
  (deftick wait [Y X dt] (if (peek X) (...) (peek Y)));i can probably put a channel here
  (deftick low-pass [Y X dt] ())) ;i not only need Y and X, but also some coeficients! (cut-frequency
;in that sense, tick functions are very much like transducers, and computations like reducing functions?
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
;I wonder if datom is such a thing. it seems like datomic can be in my aspiration list
;adding it would add another query system (datalog), but i really like specter already.
;for now i guess the easiest solution is to mantain a vector of all the previous values the ecs had.
;but i need to think about how is this going to change my paths. I think what I would like is to have
;paths only refering to the current time and give systems the acess to previous point in time.
;that way tick functions could have all the previous computations and all the previous values, and
;decide upon that. and also there wouldn't be the overhead of having to specify from wich time on
;the path. different systems could be made by different tick functions, having Y and X in previous times.

;reach, avoid, mean, follow, sao funcoes de varias variaveis sem memoria (fn sinais calculam X).
;flow, jump, low-pass, verlet, euler, sao todos equacoes de diferenca entre dois sinais.
;(fn sistemas calculam Y = HX). eu quero poder compor funcoes de sistema assim como os transducers.
;eu tenho que pensar mais sobre o que significa caluclar Y = X2H2 = (X1H1)H2

;put computations on a math namespace?
(defn reach [p q k] (->> p (mo/- q) (mo/* k)))
(defn avoid [p q k] (as-> (mo/- p q) err (->> err m/magnitude-squared (mo// err) (mo/* k))))
(defn mean [mtx] (mo// (reduce mo/+ mtx) (count mtx)))
(defn follow [p q k1 k2] (mean (vector (reach p q k1) (avoid p q k2))))

;todo: delete this
(comment
  (require '[pong.scripts :refer [weirdom]]
           '[pong.utils :refer [switch-path compute]]
           '[pong.paths :refer [FSM-COMPONENTS]])
  (def ecs (switch-path weirdom))

  (compute reach (-> ecs :fsm/velocity :triangle :params) ecs)
  (compute reach [[1 1 1] [0 1 0] 0.1] ecs)
  (compute vector [[:position :triangle] [0 1 0] 0.1] ecs)
  (compute reach [[:position :triangle] [0 1 0] 0.1] ecs)
  (compute vector [[:position :triangle] [:position :fear] [:position :love]] ecs)

  ;; (transfer [[dt] [1 -1]] reach [[:position :triangle] [0 1 0] 0.1])
  ;; (state-var [[?]] ;do I need to query something for the state variables?
  ;;   reach  [[:position :triangle] [0 1 0] 0.1]
  ;;   vector [[:position :triangle] [:position :fear] [:position :love]]]
  ;;   vector [[:velocity :triangle] [:velocity :fear] [:velocity :love]])

  (defn jump [] #(%2 0))
  (defn euler [dt] #(+ (* dt (%2 0)) (%1 0)))
  (defn verlet [dt] #(+ (-> (%2 0) (* dt) (* dt))
                        (* 2 (%1 0)) (* -1 (%1 1))))
  ;todo: write a helper function that takes H and creates a system function.
  ;todo: see if I don't want to use a state variable approach.
  ;that would potentially increase complexity of "transfer" functions

  (def A [[0 0 0] [0 0 0] [0 0 0] [0 0 1] [0 0 1] [0 0 1]])
  (def P [[0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0] [0 0 0]])

  (defn sys-fsm [st dt] ;compute mode of fsm, stepping to a new state
    (reduce
      #(let [fsm (peek %2) nv (compute (:mode fsm) (:params fsm) st)]
            (update-in %1 (pop %2) (:step fsm) nv dt))
      st (s/select FSM-COMPONENTS st)))

  (-> ecs (sys-fsm 0.1) (get-in [:position :triangle])))
