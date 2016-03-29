(require
 '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {} ;; <-- figwheel server config goes here
   :build-ids ["dev"]   ;; <-- a vector of build ids to start autobuilding
   :all-builds          ;; <-- supply your build configs here
   [{:id "dev"
     :figwheel true
     :source-paths ["src" "script"]
     :compiler {:main 'client.core
                :asset-path "js"
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js"
                :verbose true}}]})

;; Please note that when you stop the Figwheel Server http-kit throws
;; a java.util.concurrent.RejectedExecutionException, this is expected

(ra/cljs-repl)

(defn stop []
  (ra/stop-figwheel!))

;; lein run -m clojure.main --init script/figwheel.clj -r
;; :cljs/quit
;; (stop)
