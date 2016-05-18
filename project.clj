(defproject pong "0.0.2"
  :description "Pong game using AframeVR!"

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :dependencies [[org.clojure/clojure "1.8.0-RC5"]
                 [org.clojure/clojurescript "1.7.228"]

                 [aleph "0.4.1-beta3"]
                 [bidi "1.25.0"]
                 [yada "1.1.2"]

                 [net.mikera/core.matrix "0.51.0"]
                 [com.rpl/specter "0.10.0"]
                 [org.clojure/data.avl "0.0.13"]
                 [org.clojure/test.check "0.9.0"]
                 [midje "1.8.3"]

                 [figwheel-sidecar "0.5.0-2" :scope "test"]
                 [org.omcljs/om "1.0.0-alpha35"]]

  :plugins [[lein-midje "3.1.3"]
            [lein-cooper "1.2.2"]]

  :cooper {"FIGWHEEL" ["lein" "with-profile" "+cljs-dev" "run" "-m"
                         "clojure.main" "--init" "script/figwheel.clj" "-r"]
           "MIDJE" ["lein" "midje" ":autotest"]}

  :profiles {:cljs-dev {}}

  :source-paths ["src" "src/clj" "src/cljs" "src/cljc" "script"]

  :test-paths ["test" "test/clj" "test/cljs" "test/cljc"])
