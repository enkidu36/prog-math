(ns ^:figwheel-hooks prog-math.core
  (:require
    [goog.dom :as gdom]))

(def width 800)
(def height 800)
(def chart {:offset-x      20
            :offset-y      20
            :grid-offset-x 0                                ;; pos right, neg left
            :grid-offset-y 0                                ;; pos down, neg up
            :width         600
            :height        600
            :point-size    5})
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

(def origin-x (first origin))
(def origin-y (second origin))

(defn pad [[x y]]
  ;; adds spacing between points
  (let [padding (/ (:width chart) 13)]
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
    (js/console.log (str "y: " y))
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

(defn draw-points [points]
  (doseq [point points] (draw-grid-point point)))

(defn draw-line [a b]
  (let [p1 (shift (pad a))
        p2 (shift (pad b))]
    (.beginPath (ctx))
    (set! (.-lineWidth (ctx)) 1)
    (.moveTo (ctx) (first p1) (second p1))
    (.lineTo (ctx) (first p2) (second p2))
    (.stroke (ctx))))

(defn draw-lines [points]
  (loop [pts points]
    (let [[start end] pts]
    (if (= 1 (count pts))
      (draw-line start (first points))
      (do
        (draw-line start end)
        (recur (rest pts) ))))))

(def dino [[6 4] [3 1] [1 2] [-1 5] [-2 5]
           [-3 4] [-4 4] [-5 3] [-5 2] [-2 2]
           [-5 1] [-4 0] [-2 1] [-1 0] [0 -3]
           [-1 -4] [1 -4] [2 -3] [1 -2] [3 -1] [5 1]])

(clear-canvas)
(x-axis)
(y-axis)
(draw-lines dino)

;(draw-lines dino2)
;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
