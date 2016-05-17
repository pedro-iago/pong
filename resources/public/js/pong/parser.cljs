(ns pong.parser
  (:require [om.next :as om]
            [clojure.data.avl :as avl]
            [com.rpl.specter :as s]
            [pong.utils :as pu]))

(defn read [{:keys [state query] :as env} key params]
  (let [st @state]
    (case key
      (:entities)
      {:value (-> st :components pu/switch-path pu/keyed-dom pu/fold-children)}
      (:counts :radius)
      {:value (om/db->tree query (get st key) st)}
      (if-let [value (get st key)]
        {:value value}
        {:value :not-found}))))

(defn mutate [{:keys [state query] :as env} key params]
  (let [st @state
        id (:id params)]
    (case (name key)
      "increment!"
      {:value {:keys [:counts :radius]}
       :action #(swap! state update-in [:count/by-id id :value] inc)}
      "decrement!"
      {:value  {:keys [:counts :radius]}
       :action #(swap! state update-in [:count/by-id id :value] dec)})))

(def parser (om/parser {:read read :mutate mutate}))
