(ns pong.ui.counters
  (:require [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

(defui Counter
  static om/Ident
  (ident [_ props]
    [:count/by-id (:id props)])
  static om/IQuery
  (query [_]
    [:id :value])
  Object
  (render [this]
    (let [{:keys [id value] :as props} (om/props this)]
      (dom/div nil
        (dom/span nil (str "Counter " id ": " value))
        (dom/button
          #js {:onClick
               (fn [e] (om/transact! this `[(~'increment! {:id ~id})]))}
          "Click me!")))))
(def counter (om/factory Counter {:keyfn :id}))


;; (defn add-in [cs v]
;;   (reduce-kv
;;     #(assoc %1 %2
;;       (update-in %3 [k]
;;         (fn [q] (+ v q))))
;;     {} cs))

;; #js {:onClick
;;      #(om/transact! this
;;        `[(~'add-in {:keys ~ :vec3})])}

;; (defui ScaleCounters
;;   static om/IQuery
;;   (query [_]
;;     '[[:scale _]])
;;   Object
;;   (render [this]
;;     (let [ses (om/props this)]

;;       )))



;; (fn [s k v]
;;   (update-in s [k] ))
