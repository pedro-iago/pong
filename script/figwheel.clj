(require
 '[figwheel-sidecar.repl-api :as ra])

(ra/start-figwheel!
  {:figwheel-options {} ;; <-- figwheel server config goes here
   :build-ids ["dev"]   ;; <-- a vector of build ids to start autobuilding
   :all-builds          ;; <-- supply your build configs here
   [{:id "dev"
     :figwheel true
     :source-paths ["src/cljs" "src/cljc"]
     :compiler {:main 'pong.core
                :asset-path "js"
                :output-to "resources/public/js/app.js"
                :output-dir "resources/public/js"
                :parallel-build true
                :compiler-stats true
                :pretty-print true
                :verbose true}}]})

;; Please note that when you stop the Figwheel Server http-kit throws
;; a java.util.concurrent.RejectedExecutionException, this is expected

;; (ra/cljs-repl)

;; (defn stop []
;;   (ra/stop-figwheel!))

;; lein with-profile +cljs-dev run -m clojure.main --init script/figwheel.clj -r
;; :cljs/quit
;; (stop)
