(ns pong.example ;TODO: make actual test for pong
  (:require [clojure.test.check :as tc]
            [clojure.test.check.generators :as gen]
            [clojure.test.check.properties :as prop]
            [clojure.core.matrix :as m]
            [clojure.core.matrix.operators :as mo]
            [clojure.data.avl :as avl])
  (:use midje.sweet))

;property check
(def prop-no-42
     (prop/for-all [v (gen/vector gen/int)]
                   (not (some #{42} v))))
(tc/quick-check 100 prop-no-42)

(fact "These vectors don't have 42"
  [13 13 13 43 10] =not=> (contains 42)
  (tc/quick-check 51 prop-no-42) => (contains {:result true}))
