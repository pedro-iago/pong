(ns pong.parser
  (:require [om.next :as om]
            [clojure.data.avl :as avl]
            [com.rpl.specter :as s]))

(defn read [{:keys [state query] :as env} key params]
  (let [st @state]
    (case key
      (:entities)
      {:value
       (let [[top _ children] (->> st :entities (avl/split-key :|))]
        (reduce-kv ;rotine that puts chidren on a children key of its parent
          #(assoc-in %1 [(-> %2 namespace keyword) :children (-> %2 name keyword)] %3) top children))}
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
