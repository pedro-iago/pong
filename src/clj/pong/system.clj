(ns pong.system
  (:require [com.stuartsierra.component :as component]
            pong.server
            [pong.datomic :as pong]))

(defn dev-system [config-options]
  (let [{:keys [db-uri web-port]} config-options]
    (component/system-map
      :db (pong.datomic/new-database db-uri)
      :webserver
      (component/using
        (pong.server/dev-server web-port)
        {:datomic-connection :db}))))

(defn prod-system [config-options]
  (let [{:keys [db-uri]} config-options]
    (component/system-map
      :db (pong.datomic/new-database db-uri)
      :webserver
      (component/using
        (pong.server/prod-server)
        {:datomic-connection :db}))))

(comment
  (def sys
    (dev-system
      {:db-uri "datomic:mem://localhost:4334/todos"
       :web-port 8081}))

  (def sys' (component/start sys))

  (require '[datomic.api :as d])

  (def conn (d/connect "datomic:mem://localhost:4334/todos"))

  ;;  (def conn (-> sys' :db :connection))

  (def db (d/db conn))

  (pong/todos db
    [:db/id :todo/created :todo/title :todo/completed])
  )