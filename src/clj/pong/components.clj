(ns pong.components
  (:require [clojure.test :refer [is testing
                                  with-test deftest]]))

;component declarations
;todo: clean
(let []
  ;todo: parametrazing
  ;todo: transducer version
  (defn entities
    "Receives a flat earray under the key :entities
    and returns the corresponding components database" [earr]
    (def ent (vec (map
                    (let [last-euid (atom nil)]
                      #(if (keyword? %1)
                        (do
                          (reset! last-euid %1)
                          [:euid %1])
                        [(:type (meta %1)) @last-euid]))
                    (:entities earr))))
    (assoc
     (reduce-kv
       #(assoc-in %1 (get ent %2) %3)
       {} (:entities earr))
     :entities ent))
  ;todo: make a real uuid
  (defn euid [id] id)
  (defn position [x y z]
    ^{:type :position} [x y z])
  (defn velocity [x y z]
    ^{:type :velocity} [x y z])
  ;todo: finish other keys
  (defn geometry [p r]
    ^{:type :geometry} {:primitive p
                        :radius    r})
  (defn sensor [idn tr sq] ;idn links component
    ^{:type :sensor} {:ident      idn
                      :transducer tr
                      :stc-query  sq
                      :dyn-query  nil})
  (defn control [idn tr sq] ;query inputs tr
    ^{:type :control} {:ident      idn
                       :transducer tr
                       :stc-query  sq
                       :dyn-query  nil}))

;todo: clean
(comment
  "1st Solve both input and accumulated queries
  2nd Feed result to transducers and update the dyn-query
  NOTE: Both sensor and control can write to the atom through
  the accumulated query (output of transducer). The difference
  is just conceptual since sensors and controls can reffer to
  the same ident, but actually deal with different data.
  A sensor is for pull the same way a control is for push,
  or, a certain read of the sensor is solved from the remote
  and a certain mutation of the control is sent to the remote.
  The ident value tells exactly where to, or in other words,
  which other remote component, from the real world, this is
  associated to. For simmulation purposes it is enough to keep
  even this local, together with any other computed data in the
  process. However, this is done in a sensible manner, mimicking
  an actual control system or a sensor system (and transfers fn)
  The reducer fns of each transducer take values as inputs
  and accumulate queries each step, those queries can be fed
  again into the next input, if they were reads, or can mutate
  the atom, both of which happen in accordance with ident.
  In another words, anything an entity senses is of that entity
  and anything a entity controls is of that entity; which means
  they will either be child entities or its components.
  which rises the point of having a childs and parent
  components, just to indicate the relantionship
  between entities, using links(idents).
  the ident should be in the format [:type :euid]
  the :name value can't be recreated after parsing to db
  maybe that's a good reason to use it as metadata
  perharps it could be useful to append euid as metadata 2
  again, the tree is only for view and db is for processing
  interestly, animation and scene can be just another entities")

;todo: front-end distribution
(comment
  "it seems like it would be a good point for Scene
  to query [[entity/by-euid _]] and map the result to Entities
  then Entity could key itself with it's euid
  Entity wouldn't need an IQuery too, just an Ident")

;entities split by euid
(def earr
  {:entities [(euid :dot)
              (position 0 0 0)
              (velocity 0 0.01 0)

              (euid :bob)
              (position 2 0 -1)
              (velocity 0 0 0)
              (geometry 'sphere 0.5)]})

;components by type
(def cdb {:entities [[:euid :dot]
                     [:position :dot]
                     [:velocity :dot]
                     [:euid :bob]
                     [:position :bob]
                     [:velocity :bob]
                     [:geometry :bob]]
          :euid     {:dot :dot
                     :bob :bob}
          :position {:dot [0 0 0]
                     :bob [2 0 -1]}
          :velocity {:dot [0 0.01 0]
                     :bob [0 0 0]}
          :geometry {:bob {:primitive 'sphere
                           :radius    0.5}}})

;entities by id
(def edb {:entities       [[:entity/by-euid :dot]
                           [:entity/by-euid :bob]]
          :entity/by-euid {:dot {:euid     :dot
                                 :position [0 0 0]
                                 :velocity [0 0.01 0]}
                           :bob {:euid     :bob
                                 :position [2 0 -1]
                                 :velocity [0 0 0]
                                 :geometry {:primitive 'sphere
                                            :radius    0.5}}}})

;todo: filter nil idents
;todo: transducer version
(defn c->edb
  "Receives a database keyed by component types
  and returns the respective entity/by-id db" [db]
  (def ent-id
    (reduce
      #(assoc-in %1 (rseq %2) (get-in db %2))
      {} (:entities db)))
  {:entity/by-euid ent-id
   :entities       (reduce
                     #(conj %1 [:entity/by-euid %2])
                     [] (vec (keys ent-id)))})

;todo: test
(deftest layouts-test
  (testing "Single case"
    (is (= (entities earr) cdb) "earr->cdb")
    (is (= (c->edb cdb) edb) "cdb->edb")))

;todo: defspec for test.check