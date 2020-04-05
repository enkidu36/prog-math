// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.user.src_BSLASH_prog_math_BSLASH_coreC0D3D9B');
goog.require('cljs.core');
goog.provide('prog_math.core');
goog.require('cljs.core');
goog.require('goog.dom');
.call(null,cljs.user.width = (650),cljs.user.height = (650),cljs.user.chart = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(20),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(20),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"padding","padding",1660304693),(40)], null),cljs.user.canvas = (function cljs$user$canvas(){
return gdom.getElement("myCanvas");
}),cljs.user.ctx = (function cljs$user$ctx(){
return cljs.user.canvas.call(null).getContext("2d");
}),cljs.user.clear_canvas = (function cljs$user$clear_canvas(){
return cljs.user.ctx.call(null).clearRect((0),(0),cljs.user.width,cljs.user.height);
}),cljs.user.draw_point = (function cljs$user$draw_point(x,y,color){
var size = (4);
var pad = (10);
var x_coord = (x - (size / (2)));
var y_coord = (y - (size / (2)));
cljs.user.ctx.call(null).fillStyle = color;

return cljs.user.ctx.call(null).fillRect(x_coord,y_coord,size,size);
}),cljs.user.chart_offset = (function cljs$user$chart_offset(axis){
if(cljs.core._EQ_.call(null,axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(cljs.user.chart);
} else {
return new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(cljs.user.chart);
}
}),cljs.user.chart_center = (function cljs$user$chart_center(axis){
if(cljs.core._EQ_.call(null,axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.user.chart) / (2));
} else {
return (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.user.chart) / (2));
}
}),cljs.user.pad = (function cljs$user$pad(p__14275){
var vec__14276 = p__14275;
var x = cljs.core.nth.call(null,vec__14276,(0),null);
var y = cljs.core.nth.call(null,vec__14276,(1),null);
var pad_x = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.user.chart) / (10));
var pad_y = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.user.chart) / (10));
console.log(["x:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad_x)," y:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pad_y)].join(''));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (x * pad_x)),((y * pad_y) - y)], null);
}),cljs.user.shift = (function cljs$user$shift(v,axis){
var center = cljs.user.chart_center.call(null,axis);
var offset = cljs.user.chart_offset.call(null,axis);
if(cljs.core._EQ_.call(null,axis,new cljs.core.Keyword(null,"x","x",2099068185))){
return ((v + center) + offset);
} else {
return ((offset + center) - v);
}
}),(function (){
cljs.user.draw_grid_point = (function cljs$user$draw_grid_point(var_args){
var G__14280 = arguments.length;
switch (G__14280) {
case 1:
return prog_math.core.draw_grid_point.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return prog_math.core.draw_grid_point.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.user.draw_grid_point.cljs$core$IFn$_invoke$arity$1 = (function (p__14281){
var vec__14282 = p__14281;
var x = cljs.core.nth.call(null,vec__14282,(0),null);
var y = cljs.core.nth.call(null,vec__14282,(1),null);
return cljs.user.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),"black");
});

cljs.user.draw_grid_point.cljs$core$IFn$_invoke$arity$2 = (function (p__14285,color){
var vec__14286 = p__14285;
var x = cljs.core.nth.call(null,vec__14286,(0),null);
var y = cljs.core.nth.call(null,vec__14286,(1),null);
var p = cljs.user.pad.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
return cljs.user.draw_point.call(null,cljs.user.shift.call(null,cljs.core.first.call(null,p),new cljs.core.Keyword(null,"x","x",2099068185)),cljs.user.shift.call(null,cljs.core.second.call(null,p),new cljs.core.Keyword(null,"y","y",-1757859776)),color);
});

cljs.user.draw_grid_point.cljs$lang$maxFixedArity = 2;

return null;
})()
,cljs.user.x_axis = (function cljs$user$x_axis(){
var y = cljs.user.shift.call(null,(0),new cljs.core.Keyword(null,"y","y",-1757859776));
var start = new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(cljs.user.chart);
var end = (start + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.user.chart));
cljs.user.ctx.call(null).beginPath();

cljs.user.ctx.call(null).lineWidth = .2;

cljs.user.ctx.call(null).moveTo(start,y);

cljs.user.ctx.call(null).lineTo(end,y);

return cljs.user.ctx.call(null).stroke();
}),cljs.user.y_axis = (function cljs$user$y_axis(){
var x = cljs.user.shift.call(null,(0),new cljs.core.Keyword(null,"x","x",2099068185));
var start = new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(cljs.user.chart);
var end = (start + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.user.chart));
cljs.user.ctx.call(null).beginPath();

cljs.user.ctx.call(null).lineWidth = .2;

cljs.user.ctx.call(null).moveTo(x,start);

cljs.user.ctx.call(null).lineTo(x,end);

return cljs.user.ctx.call(null).stroke();
}),cljs.user.draw_box = (function cljs$user$draw_box(){
cljs.user.ctx.call(null).lineWidth = (1);

return cljs.user.ctx.call(null).strokeRect(new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(cljs.user.chart),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(cljs.user.chart),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(cljs.user.chart),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.user.chart));
}),cljs.user.clear_canvas.call(null),cljs.user.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null)),cljs.user.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)),cljs.user.x_axis.call(null),cljs.user.y_axis.call(null),cljs.user.on_reload = (function cljs$user$on_reload(){
return null;
}));

//# sourceMappingURL=src_BSLASH_prog_math_BSLASH_coreC0D3D9B.js.map
