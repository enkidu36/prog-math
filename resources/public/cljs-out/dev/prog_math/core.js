// Compiled by ClojureScript 1.10.520 {}
goog.provide('prog_math.core');
goog.require('cljs.core');
goog.require('goog.dom');
prog_math.core.width = (650);
prog_math.core.height = (650);
prog_math.core.chart = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(20),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(20),new cljs.core.Keyword(null,"grid-offset-x","grid-offset-x",-485148482),(-280),new cljs.core.Keyword(null,"grid-offset-y","grid-offset-y",-500823219),(130),new cljs.core.Keyword(null,"width","width",-384071477),(600),new cljs.core.Keyword(null,"height","height",1025178622),(300),new cljs.core.Keyword(null,"point-size","point-size",-2123819651),(5)], null);
prog_math.core.canvas = (function prog_math$core$canvas(){
return goog.dom.getElement("myCanvas");
});
prog_math.core.ctx = (function prog_math$core$ctx(){
return prog_math.core.canvas.call(null).getContext("2d");
});
prog_math.core.clear_canvas = (function prog_math$core$clear_canvas(){
return prog_math.core.ctx.call(null).clearRect((0),(0),prog_math.core.width,prog_math.core.height);
});
prog_math.core.draw_point = (function prog_math$core$draw_point(p__8666,color){
var vec__8667 = p__8666;
var x = cljs.core.nth.call(null,vec__8667,(0),null);
var y = cljs.core.nth.call(null,vec__8667,(1),null);
var size = new cljs.core.Keyword(null,"point-size","point-size",-2123819651).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart);
var x_coord = (x - (size / (2)));
var y_coord = (y - (size / (2)));
prog_math.core.ctx.call(null).fillStyle = color;

return prog_math.core.ctx.call(null).fillRect(x_coord,y_coord,size,size);
});
prog_math.core.origin = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart) / (2)) + new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart)) + new cljs.core.Keyword(null,"grid-offset-x","grid-offset-x",-485148482).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart)),(((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart) / (2)) + new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart)) + new cljs.core.Keyword(null,"grid-offset-y","grid-offset-y",-500823219).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart))], null);
prog_math.core.origin_x = cljs.core.first.call(null,prog_math.core.origin);
prog_math.core.origin_y = cljs.core.second.call(null,prog_math.core.origin);
prog_math.core.pad = (function prog_math$core$pad(p__8670){
var vec__8671 = p__8670;
var x = cljs.core.nth.call(null,vec__8671,(0),null);
var y = cljs.core.nth.call(null,vec__8671,(1),null);
var padding = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart) / (200));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (x * padding)),(y + (y * padding))], null);
});
prog_math.core.shift = (function prog_math$core$shift(p__8674){
var vec__8675 = p__8674;
var x = cljs.core.nth.call(null,vec__8675,(0),null);
var y = cljs.core.nth.call(null,vec__8675,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + cljs.core.first.call(null,prog_math.core.origin)),(cljs.core.second.call(null,prog_math.core.origin) - y)], null);
});
prog_math.core.draw_grid_point = (function prog_math$core$draw_grid_point(var_args){
var G__8679 = arguments.length;
switch (G__8679) {
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

prog_math.core.draw_grid_point.cljs$core$IFn$_invoke$arity$1 = (function (point){
return prog_math.core.draw_grid_point.call(null,point,"black");
});

prog_math.core.draw_grid_point.cljs$core$IFn$_invoke$arity$2 = (function (point,color){
var grid_point = prog_math.core.shift.call(null,prog_math.core.pad.call(null,point));
return prog_math.core.draw_point.call(null,grid_point,color);
});

prog_math.core.draw_grid_point.cljs$lang$maxFixedArity = 2;

prog_math.core.x_axis = (function prog_math$core$x_axis(){
var y = prog_math.core.origin_y;
var start = new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart);
var end = (start + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart));
prog_math.core.ctx.call(null).beginPath();

prog_math.core.ctx.call(null).lineWidth = .2;

prog_math.core.ctx.call(null).moveTo(start,y);

prog_math.core.ctx.call(null).lineTo(end,y);

return prog_math.core.ctx.call(null).stroke();
});
prog_math.core.y_axis = (function prog_math$core$y_axis(){
var x = prog_math.core.origin_x;
var start = new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart);
var end = (start + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart));
prog_math.core.ctx.call(null).beginPath();

prog_math.core.ctx.call(null).lineWidth = .2;

prog_math.core.ctx.call(null).moveTo(x,start);

prog_math.core.ctx.call(null).lineTo(x,end);

return prog_math.core.ctx.call(null).stroke();
});
prog_math.core.draw_box = (function prog_math$core$draw_box(){
prog_math.core.ctx.call(null).lineWidth = (1);

return prog_math.core.ctx.call(null).strokeRect(new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(prog_math.core.chart));
});
prog_math.core.draw_text = (function prog_math$core$draw_text(text){
prog_math.core.ctx.call(null).font = "10px Arial";

prog_math.core.ctx.call(null).save();

prog_math.core.ctx.call(null).translate((20),(350));

prog_math.core.ctx.call(null).rotate(((-45) * (Math.PI / (180))));

var f_8685 = (function (count){
return ((0) + (count * (20)));
});
var seq__8681_8686 = cljs.core.seq.call(null,cljs.core.range.call(null,cljs.core.count.call(null,text)));
var chunk__8682_8687 = null;
var count__8683_8688 = (0);
var i__8684_8689 = (0);
while(true){
if((i__8684_8689 < count__8683_8688)){
var ctr_8690 = cljs.core._nth.call(null,chunk__8682_8687,i__8684_8689);
prog_math.core.ctx.call(null).fillText(cljs.core.nth.call(null,text,ctr_8690),f_8685.call(null,ctr_8690),f_8685.call(null,ctr_8690));


var G__8691 = seq__8681_8686;
var G__8692 = chunk__8682_8687;
var G__8693 = count__8683_8688;
var G__8694 = (i__8684_8689 + (1));
seq__8681_8686 = G__8691;
chunk__8682_8687 = G__8692;
count__8683_8688 = G__8693;
i__8684_8689 = G__8694;
continue;
} else {
var temp__5457__auto___8695 = cljs.core.seq.call(null,seq__8681_8686);
if(temp__5457__auto___8695){
var seq__8681_8696__$1 = temp__5457__auto___8695;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8681_8696__$1)){
var c__4550__auto___8697 = cljs.core.chunk_first.call(null,seq__8681_8696__$1);
var G__8698 = cljs.core.chunk_rest.call(null,seq__8681_8696__$1);
var G__8699 = c__4550__auto___8697;
var G__8700 = cljs.core.count.call(null,c__4550__auto___8697);
var G__8701 = (0);
seq__8681_8686 = G__8698;
chunk__8682_8687 = G__8699;
count__8683_8688 = G__8700;
i__8684_8689 = G__8701;
continue;
} else {
var ctr_8702 = cljs.core.first.call(null,seq__8681_8696__$1);
prog_math.core.ctx.call(null).fillText(cljs.core.nth.call(null,text,ctr_8702),f_8685.call(null,ctr_8702),f_8685.call(null,ctr_8702));


var G__8703 = cljs.core.next.call(null,seq__8681_8696__$1);
var G__8704 = null;
var G__8705 = (0);
var G__8706 = (0);
seq__8681_8686 = G__8703;
chunk__8682_8687 = G__8704;
count__8683_8688 = G__8705;
i__8684_8689 = G__8706;
continue;
}
} else {
}
}
break;
}

return prog_math.core.ctx.call(null).restore();
});
prog_math.core.clear_canvas.call(null);
prog_math.core.draw_text.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, ["04/04/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020","04/05/2020"], null));
prog_math.core.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),"blue");
prog_math.core.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null));
prog_math.core.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null));
prog_math.core.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(1)], null));
prog_math.core.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(20),(20)], null));
prog_math.core.draw_grid_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(30),(25)], null));
prog_math.core.x_axis.call(null);
prog_math.core.y_axis.call(null);
prog_math.core.on_reload = (function prog_math$core$on_reload(){
return null;
});

//# sourceMappingURL=core.js.map
