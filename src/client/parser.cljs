(ns client.parser
  (:require [om.next :as om]))

(defmulti read om/dispatch)
(defmethod read :counts
  [{:keys [state query] :as env} key _]
  (let [st @state]
    {:value (om/db->tree query (get st key) st)}))
(defmethod read :default
  [{:keys [state] :as env} key _]
  (let [st @state]
    (if-let [value (get st key)]
      {:value value}
      {:value :not-found})))

(defmulti mutate om/dispatch)
(defmethod mutate 'increment!
  [{:keys [state] :as env} _ {:keys [id] :as params}]
  {:value {:keys [:counts]}
   :action #(swap! state update-in [:count/by-id id :value] inc)})
(defmethod mutate :default [] {:value :not-found})
