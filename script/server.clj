(require '[pong.core :as pong])

(pong/dev-start)
(println (str "Started server on port " (:web-port pong/dev-config)))

(.addShutdownHook (Runtime/getRuntime)
  (Thread. #(do (pong/stop)
                (println "Server stopped"))))
;; lein trampoline run -m clojure.main script/server.clj