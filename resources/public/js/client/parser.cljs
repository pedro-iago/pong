(ns client.parser
  (:require [om.next :as om]))

(defn db->tree
  [{:keys [state query] :as env} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))

(defmulti read om/dispatch)
(defmethod read :counts [env key params] 
  (db->tree env key params))
(defmethod read :radius [env key params]
  (db->tree env key params))
(defmethod read :default
  [{:keys [state] :as env} key _]
  (let [st @state]
    (if-let [value (get st key)]
      {:value value}
      {:value :not-found})))

(defmulti mutate om/dispatch)
(defmethod mutate 'increment!
  [{:keys [state] :as env} _ {:keys [id] :as params}]
  {:value {:keys [:counts :radius]}
   :action #(swap! state update-in [:count/by-id id :value] inc)})
(defmethod mutate :default [] {:value :not-found})
