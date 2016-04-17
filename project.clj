(defproject pong "0.0.2"
  :description "Pong game using AframeVR!"

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :dependencies [[org.clojure/clojure "1.8.0-RC5"]
                 [org.clojure/clojurescript "1.7.228"]

                 [aleph "0.4.1-beta3"]
                 [bidi "1.25.0"]
                 [yada "1.1.2"]

                 [org.clojure/core.async "0.2.374"]
                 [net.mikera/core.matrix "0.51.0"]
                 [com.rpl/specter "0.9.2"]
                 [org.clojure/data.avl "0.0.13"]

                 [figwheel-sidecar "0.5.0-2" :scope "test"]
                 [org.omcljs/om "1.0.0-alpha30"]]

  :profiles {:cljs-dev {}}

  :source-paths ["src" "src/clj" "src/cljs" "src/cljc" "script"]

  :test-paths ["test" "test/clj" "test/cljs" "test/cljc"])

;[com.datomic/datomic-free "0.9.5344"]

;[com.taoensso/sente "1.8.1"]
;[aleph "0.4.1-beta3"]
;[bidi "1.25.0"]
;[yada "1.1.2"]
;[http-kit "2.1.19"]
;[ring/ring "1.4.0"]
;[ring/ring-defaults "0.2.0"]

;[com.cognitect/transit-clj "0.8.285"]
;[com.cognitect/transit-cljs "0.8.237"]

;[com.stuartsierra/component "0.3.1"]
;[org.danielsz/system "0.1.1"]

;[reloaded.repl "0.2.1"]
