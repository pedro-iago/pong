(ns pong.core.desktop-launcher
    (:use pong.core)
    (:import [com.badlogic.gdx.backends.lwjgl LwjglApplication LwjglApplicationConfiguration]
             [org.lwjgl.input Keyboard])
    (:gen-class))

(defn run-game
    "Run the game and return the LWJGL instance"
    []
    (Keyboard/enableRepeatEvents true)
    (let [config (LwjglApplicationConfiguration.)]
        (doto config
            (-> .width (set! 600))
            (-> .height (set! 800))
            (-> .title (set! "Brute Pong"))
            (-> .resizable (set! false)))
        (LwjglApplication. pong config)))

(defn -main
    []
    (run-game))
