(ns client.parser
  (:require [om.next :as om]))

(defn db->tree
  [{:keys [state query] :as env} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))

(defmulti readq (fn [_ key _] key))
(defmethod readq :counts [env key params]
  (db->tree env key params))
(defmethod readq :radius [env key params]
  (db->tree env key params))
(defmethod readq :default
  [{:keys [state] :as env} key _]
  (let [st @state]
    (if-let [value (get st key)]
      {:value value}
      {:value :not-found})))

(defmulti mutate (fn [_ key _] key))
(defmethod mutate 'increment!
  [{:keys [state] :as env} _ {:keys [id] :as params}]
  {:value {:keys [:counts :radius]}
   :action #(swap! state update-in [:count/by-id id :value] inc)})
(defmethod mutate 'decrement!
  [{:keys [state] :as env} _ {:keys [id] :as params}]
  {:value {:keys [:counts :radius]}
   :action #(swap! state update-in [:count/by-id id :value] dec)})
(defmethod mutate :default [] {:value :not-found})

(def parser (om/parser {:read readq :mutate mutate}))
