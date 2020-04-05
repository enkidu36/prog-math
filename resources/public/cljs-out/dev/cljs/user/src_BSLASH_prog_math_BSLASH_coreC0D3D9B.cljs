((ns ^:figwheel-hooks prog-math.core
  (:require
    [goog.dom :as gdom]))

(def width 650)
(def height 650)
(def chart {:offset-x 20
            :offset-y 20
            :width    600
            :height   300
            :padding  40})
(defn canvas []
  (gdom/getElement "myCanvas"))

(defn ctx []
  (.getContext (canvas) "2d"))

(defn clear-canvas []
  (.clearRect (ctx) 0 0 width height))

(defn draw-point [x y color]
  (let [size 4
        pad 10
        x-coord (- x (/ size 2))
        y-coord (- y (/ size 2))]
    (set! (.-fillStyle (ctx)) color)
    (.fillRect (ctx) x-coord y-coord size size)))

(defn chart-offset [axis]
  (if (= axis :x)
    (:offset-x chart)
    (:offset-y chart)))

(defn chart-center [axis]
  ;; get the center of the chart's width or height
  (if (= axis :x)
    (/ (:width chart) 2)
    (/ (:height chart) 2)))

(defn pad [[x y]]
  (let [pad-x (/ (:width chart) 10)
        pad-y (/ (:height chart) 10)]
    (js/console.log (str "x:" pad-x " y:" pad-y))
    [(+ x (* x pad-x)) (- (* y pad-y) y)]))

(defn shift [v axis]
  ;; shift value in relation to center of chart
  (let [center (chart-center axis)
        offset (chart-offset axis)]
    (if (= axis :x)
      (+ v center offset)
      (- (+ offset center) v))))

(defn draw-grid-point
  ;; draw grid point allow to change color, default color to black
  ;; will accept vector or list
  ([[x y]] (draw-grid-point [x y] "black"))
  ([[x y] color]
   (let [p (pad [x y])]
     (draw-point (shift (first p) :x) (shift (second p) :y) color))))

(defn x-axis []
  (let [y (shift 0 :y)
        start (:offset-x chart)
        end (+ start (:width chart))]
    (.beginPath (ctx))
    (set! (.-lineWidth (ctx)) .2)
    (.moveTo (ctx) start y)
    (.lineTo (ctx) end y)
    (.stroke (ctx))))

(defn y-axis []
  (let [x (shift 0 :x)
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

(clear-canvas)
;(draw-box)
(draw-grid-point [0 0])
(draw-grid-point [1 1])
(x-axis)
(y-axis)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
)