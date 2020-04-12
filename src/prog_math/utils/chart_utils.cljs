(ns prog-math.utils.chart-utils
  (:require
    [cljs-time.core :as t]
    [cljs-time.format :as f]))

(defn draw-box [ctx]
  (set! (.-lineWidth (ctx)) 1)
  (.strokeRect (ctx) (:offset-x chart) (:offset-y chart) (:width chart) (:height chart)))

(defn draw-labels [ctx list]
  (set! (.-font (ctx)) "10px Arial")
  (.save (ctx))
  (.translate (ctx) 20 350)
  (.rotate (ctx) (* -45 (/ js/Math.PI 180)))
  (doseq [itr (range (count list))]
    (let [x (+ 0 (* itr 20))
          y (+ 0 (* itr 20))
          label (nth list itr)]
      (.fillText (ctx) label x y)))
  (.restore (ctx)))

(def custom-formatter (f/formatter "MM/dd/yyyy"))
(defn get-date [add-day]
  (f/unparse custom-formatter (t/plus (t/now) (t/days add-day))))
(defn get-dates []
  (reduce (fn [x y] (if (= x 0) (conj [(get-date x)] (get-date y)) (conj x (get-date y)))) (range 20)))


