(ns pong.components)

(let []
  (defn position
    ([x y z]
     (partial position x y z))
    ([x y z euid] ^{:ctype :position
                    :euid euid}
                   [x y z]))
  (defn rotation
    ([x y z]
     (partial rotation x y z))
    ([x y z euid] ^{:ctype :rotation
                    :euid euid}
                   [x y z]))
  (defn scale
    ([x y z]
     (partial scale x y z))
    ([x y z euid] ^{:ctype :scale
                    :euid euid}
                   [x y z]))
  (defn velocity
    ([x y z]
     (partial velocity x y z))
    ([x y z euid] ^{:ctype :velocity
                    :euid euid}
                   [x y z]))
  (defn geometry
    ([p r]
     (partial geometry p r))
    ([p r euid] ^{:ctype :geometry
                  :euid euid}
                 {:primitive p
                  :radius r}))
  (defn material
    ([c]
     (partial material c))
    ([c euid] ^{:ctype :material
                :euid euid}
               {:color c}))
  (defn sensor
    ([ty tr sq]
     (partial sensor ty tr sq))
    ([ty tr sq euid] ^{:ctype (keyword "sensor" (name ty))
                       :euid euid}
                      {:ident [ty euid]
                       :transform tr
                       :query sq}))
  (defn control
    ([ty tr sq]
     (partial control ty tr sq))
    ([ty tr sq euid] ^{:ctype (keyword "control" (name ty))
                       :euid euid}
                      {:ident [ty euid]
                       :transform tr
                       :query sq})))

(def carr
  (concat
    ((juxt
       (position 0 0 1)
       (rotation 0 0 0)
       (scale 1 1 1)
       (velocity 0 0.1 0)
       (geometry 'sphere 0.01)
       (material 0x231AFF)) :dot)
    ((juxt
       (position 1 0 0)
       (rotation 0 0 0)
       (scale 1 1 1)
       (velocity 0 0 0)
       (control :velocity "#(* 0.01 (- %2 %1))"
                [[:position :bob]
                 [:position :dot]])
       (geometry 'sphere 0.2)
       (material 0x231AFF)) :bob)))

(defn arr->db [arr]
  (merge
    {:components (reduce
                   #(conj %1 [(:ctype (meta %2)) (:euid (meta %2))])
                   [] arr)}
    (reduce
      #(assoc-in %1 [(:ctype (meta %2)) (:euid (meta %2))] %2)
      {} arr)))
(print (arr->db carr))

(defn get-entities [arr]
  (reduce-kv
    #(conj %1 (assoc %3 :euid %2))
    [] (reduce
         #(assoc-in %1 [(:euid (meta %2)) (:ctype (meta %2))] %2)
         {} arr)))
(print (get-entities carr))

(defn add "Add component and link at keys" [st c ks]
  (let [m (meta c)
        idn [(:ctype m) (:euid m)]]
    (assoc-in (reduce #(show %1 %2 idn) st ks) idn c)))
(defn delete "Delete component and links" [st idn]
  (update-in st [(first idn)] dissoc (second idn)))
(defn omit "Omit a link at key" [st k idn]
  (update-in st [k]
    #(filterv (fn [v] (not= v idn)) %)))
(defn show "Conj a link to key" [st k idn]
  (update-in st [k] conj idn))
