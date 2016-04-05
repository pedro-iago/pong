(ns ^{:doc "Input system"}
    pong.input
    (:use [play-clj.core])
    (:require [pong.paddle :as p])
    (:import [pong.component PlayerPaddle]))

(def speed 200)

(defn process-one-game-tick
    "Render all the things"
    [system delta]
    (when (key-pressed? :dpad-left)
        (p/move-paddle! system (* -1 speed) delta PlayerPaddle))
    (when (key-pressed? :dpad-right)
        (p/move-paddle! system speed delta PlayerPaddle))
    system)