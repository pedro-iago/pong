(defproject om-tutorial "0.1.0-SNAPSHOT"
  :description "My first Om program!"
  :plugins [[lein-npm "0.6.2"]]
  :npm {:root "resources/public/js"
        :dependencies [[aframe "0.2.0-rc1"]]}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.170"]
                 [org.omcljs/om "1.0.0-alpha22"]
                 [figwheel-sidecar "0.5.0-SNAPSHOT" :scope "test"]])
