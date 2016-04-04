(defproject pong "0.0.2"
  :description "Pong game using AframeVR!"

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :dependencies [[org.clojure/clojure "1.8.0-RC5"]
                 [org.clojure/clojurescript "1.7.228"]
                 [com.datomic/datomic-free "0.9.5344"]
                 [bidi "1.25.0"]
                 [yada "1.1.2"]
                 [ring/ring "1.4.0"]
                 [com.cognitect/transit-clj "0.8.285"]
                 [com.cognitect/transit-cljs "0.8.237"]
                 [com.stuartsierra/component "0.3.1"]
                 [org.omcljs/om "1.0.0-alpha30"]
                 [figwheel-sidecar "0.5.0-2" :scope "test"]]

  :clean-targets ^{:protect false} ["resources/public/js"]

  :source-paths ["src/clj" "src/cljs" "src/cljc"]
  )


