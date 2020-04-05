(ns ^:figwheel-hooks prog-math.core
  (:require
    [goog.dom :as gdom]))

(def width 650)
(def height 650)
(def chart {:offset-x 20
            :offset-y 20
            :grid-offset-x -280 ;; pos right, neg left
            :grid-offset-y 130 ;; pos down, neg up
            :width    600
            :height   300
            :point-size 5})
(defn canvas []
  (gdom/getElement "myCanvas"))

(defn ctx []
  (.getContext (canvas) "2d"))

(defn clear-canvas []
  (.clearRect (ctx) 0 0 width height))

(defn draw-point [[x y] color]
  (let [size (:point-size chart)
        x-coord (- x (/ size 2))
        y-coord (- y (/ size 2))]
    (set! (.-fillStyle (ctx)) color)
    (.fillRect (ctx) x-coord y-coord size size)))

(def origin
  ;; calculated from width, height and offset of the chart
  [(+ (/ (:width chart) 2) (:offset-x chart) (:grid-offset-x chart))
   (+ (/ (:height chart) 2) (:offset-y chart) (:grid-offset-y chart))])

(def origin-x  (first origin))
(def origin-y (second origin))

(defn pad [[x y]]
  ;; adds spacing between points
  (let [padding (/ (:width chart) 200)]
    [(+ x (* x padding)) (+ y (* y padding))]))

(defn shift [[x y]]
  ;; shift point in relation to the grid's origin
  [(+ x (first origin))
   (- (second origin) y)])

(defn draw-grid-point
  ;; draw grid point allow to change color, default color to black
  ;; will accept vector or list
  ([point] (draw-grid-point point "black"))
  ([point color]
   (let [grid-point (shift (pad point))]
     (draw-point grid-point color))))

(defn x-axis []
  (let [y origin-y
        start (:offset-x chart)
        end (+ start (:width chart))]
    (.beginPath (ctx))
    (set! (.-lineWidth (ctx)) .2)
    (.moveTo (ctx) start y)
    (.lineTo (ctx) end y)
    (.stroke (ctx))))

(defn y-axis []
  (let [x origin-x
        start (:offset-y chart)
        end (+ start (:height chart))]
    (.beginPath (ctx))
    (set! (.-lineWidth (ctx)) .2)
    (.moveTo (ctx) x start)
    (.lineTo (ctx) x end)
    (.stroke (ctx))))

(defn draw-box []
  (set! (.-lineWidth (ctx)) 1)
  (.strokeRect (ctx) (:offset-x chart) (:offset-y chart) (:width chart) (:height chart)))

(defn draw-text [text]
  (set! (.-font (ctx)) "10px Arial")
  (.save (ctx))
  (.translate (ctx) 20 350)
  (.rotate (ctx) (* -45 (/ js/Math.PI 180)))
  (let [f (fn [count] (+ 0 (* count 20)))]
    (doseq [ctr (range (count text))]
      (.fillText (ctx) (nth text ctr) (f ctr) (f ctr))))
  (.restore (ctx)))

(clear-canvas)
(draw-text ["04/04/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020" "04/05/2020"])
;(draw-box)
(draw-grid-point [0 0] "blue")
(draw-grid-point [1 2])
(draw-grid-point [3 1])
(draw-grid-point [3 1])
(draw-grid-point [20 20])
(draw-grid-point [30 25])
(x-axis)
(y-axis)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
