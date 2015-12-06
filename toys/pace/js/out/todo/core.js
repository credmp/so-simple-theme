// Compiled by ClojureScript 0.0-3196 {}
goog.provide('todo.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('goog.string');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('cljsjs.react');
goog.require('goog.History');
goog.require('goog.events');
goog.require('goog.string.format');
if(typeof todo.core.pace !== 'undefined'){
} else {
todo.core.pace = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof todo.core.calcs !== 'undefined'){
} else {
todo.core.calcs = reagent.core.atom.call(null,(0));
}
todo.core.minutes_to_seconds = (function todo$core$minutes_to_seconds(minutes,seconds){
return (((60) * minutes) + seconds);
});
todo.core.inc_seconds = (function todo$core$inc_seconds(seconds,increase){
return (increase + seconds);
});
todo.core.calc_pace_in_ms = (function todo$core$calc_pace_in_ms(seconds){
return ((1000) / seconds);
});
todo.core.recalculate_chart = (function todo$core$recalculate_chart(minutes,seconds,distance){
var id = todo.core.calcs;
return cljs.core.swap_BANG_.call(null,todo.core.pace,cljs.core.assoc,new cljs.core.Keyword(null,"minutes","minutes",1319166394),parseFloat(minutes),new cljs.core.Keyword(null,"seconds","seconds",-445266194),parseFloat(seconds),new cljs.core.Keyword(null,"distance","distance",-1671893894),distance,new cljs.core.Keyword(null,"paceInMetersPerSecond","paceInMetersPerSecond",-206770944),todo.core.calc_pace_in_ms.call(null,todo.core.minutes_to_seconds.call(null,parseFloat(minutes),parseFloat(seconds))));
});
todo.core.pace_input = (function todo$core$pace_input(p__5649){
var map__5651 = p__5649;
var map__5651__$1 = ((cljs.core.seq_QMARK_.call(null,map__5651))?cljs.core.apply.call(null,cljs.core.hash_map,map__5651):map__5651);
var on_stop = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"on-stop","on-stop",1520114515));
var on_save = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"on-save","on-save",1618176266));
var seconds = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var minutes = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var distance = cljs.core.get.call(null,map__5651__$1,new cljs.core.Keyword(null,"distance","distance",-1671893894));
var minutes__$1 = reagent.core.atom.call(null,minutes);
var seconds__$1 = reagent.core.atom.call(null,seconds);
var distance__$1 = reagent.core.atom.call(null,distance);
var stop = ((function (minutes__$1,seconds__$1,distance__$1,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance){
return (function (){
if(cljs.core.truth_(on_stop)){
return on_stop.call(null);
} else {
return null;
}
});})(minutes__$1,seconds__$1,distance__$1,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance))
;
var save = ((function (minutes__$1,seconds__$1,distance__$1,stop,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance){
return (function (){
var m = clojure.string.trim.call(null,[cljs.core.str(cljs.core.deref.call(null,minutes__$1))].join(''));
var s = clojure.string.trim.call(null,[cljs.core.str(cljs.core.deref.call(null,seconds__$1))].join(''));
var d = clojure.string.trim.call(null,[cljs.core.str(cljs.core.deref.call(null,distance__$1))].join(''));
if(!(cljs.core.empty_QMARK_.call(null,s))){
return on_save.call(null,m,s,d);
} else {
return null;
}
});})(minutes__$1,seconds__$1,distance__$1,stop,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance))
;
return ((function (minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance){
return (function (props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-10.col-md-offset-1","div.col-md-10.col-md-offset-1",182935061),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.form-horizontal","form.form-horizontal",-1605711052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"i3",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,distance__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance){
return (function (p1__5646_SHARP_){
return cljs.core.reset_BANG_.call(null,distance__$1,p1__5646_SHARP_.target.value);
});})(minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance))
,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-addon","div.input-group-addon",-53315985),"distance in km"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"i1",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,minutes__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance){
return (function (p1__5647_SHARP_){
return cljs.core.reset_BANG_.call(null,minutes__$1,p1__5647_SHARP_.target.value);
});})(minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance))
,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-addon","div.input-group-addon",-53315985),"minutes"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"i2",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,seconds__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance){
return (function (p1__5648_SHARP_){
return cljs.core.reset_BANG_.call(null,seconds__$1,p1__5648_SHARP_.target.value);
});})(minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance))
,new cljs.core.Keyword(null,"size","size",1098693007),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-addon","div.input-group-addon",-53315985),"seconds"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.btn.btn-primary","input.btn.btn-primary",27919467),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"value","value",305978217),"Calculate",new cljs.core.Keyword(null,"on-click","on-click",1632826543),save], null)], null)], null)], null)], null);
});
;})(minutes__$1,seconds__$1,distance__$1,stop,save,map__5651,map__5651__$1,on_stop,on_save,seconds,minutes,distance))
});
todo.core.toHMS = (function todo$core$toHMS(timeInSeconds){
var round = Math.round(timeInSeconds);
var hours = Math.floor((timeInSeconds / (3600)));
var tISmins = cljs.core.mod.call(null,timeInSeconds,(3600));
var minutes = Math.floor((tISmins / (60)));
var tISsecs = cljs.core.mod.call(null,tISmins,(60));
var seconds = Math.floor(tISsecs);
return goog.string.format("%02f:%02f:%02f",hours,minutes,seconds);
});
todo.core.generic_pace_chart = (function todo$core$generic_pace_chart(paceMap){
var p = new cljs.core.Keyword(null,"paceInMetersPerSecond","paceInMetersPerSecond",-206770944).cljs$core$IFn$_invoke$arity$1(paceMap);
var d = ((1000) * new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(paceMap));
var m = new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(paceMap);
var s = new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(paceMap);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Generic pace chart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"pace"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(paceMap)," km"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"5 km"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"10 km"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"half"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),"full"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),(function (){var iter__4974__auto__ = ((function (p,d,m,s){
return (function todo$core$generic_pace_chart_$_iter__5660(s__5661){
return (new cljs.core.LazySeq(null,((function (p,d,m,s){
return (function (){
var s__5661__$1 = s__5661;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5661__$1);
if(temp__4126__auto__){
var s__5661__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5661__$2)){
var c__4972__auto__ = cljs.core.chunk_first.call(null,s__5661__$2);
var size__4973__auto__ = cljs.core.count.call(null,c__4972__auto__);
var b__5663 = cljs.core.chunk_buffer.call(null,size__4973__auto__);
if((function (){var i__5662 = (0);
while(true){
if((i__5662 < size__4973__auto__)){
var x = cljs.core._nth.call(null,c__4972__auto__,i__5662);
cljs.core.chunk_append.call(null,b__5663,(function (){var p1 = todo.core.calc_pace_in_ms.call(null,(todo.core.minutes_to_seconds.call(null,m,s) - x));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.warning","tr.warning",1947567935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((1000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,(d / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((5000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((10000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((21100) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((42200) / p1))], null)], null);
})());

var G__5668 = (i__5662 + (1));
i__5662 = G__5668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5663),todo$core$generic_pace_chart_$_iter__5660.call(null,cljs.core.chunk_rest.call(null,s__5661__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5663),null);
}
} else {
var x = cljs.core.first.call(null,s__5661__$2);
return cljs.core.cons.call(null,(function (){var p1 = todo.core.calc_pace_in_ms.call(null,(todo.core.minutes_to_seconds.call(null,m,s) - x));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.warning","tr.warning",1947567935),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((1000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,(d / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((5000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((10000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((21100) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((42200) / p1))], null)], null);
})(),todo$core$generic_pace_chart_$_iter__5660.call(null,cljs.core.rest.call(null,s__5661__$2)));
}
} else {
return null;
}
break;
}
});})(p,d,m,s))
,null,null));
});})(p,d,m,s))
;
return iter__4974__auto__.call(null,cljs.core.reverse.call(null,cljs.core.range.call(null,(1),(6))));
})(),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.info","tr.info",-1594504971),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((1000) / p))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,(d / p))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((5000) / p))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((10000) / p))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((21100) / p))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((42200) / p))], null)], null)], null),(function (){var iter__4974__auto__ = ((function (p,d,m,s){
return (function todo$core$generic_pace_chart_$_iter__5664(s__5665){
return (new cljs.core.LazySeq(null,((function (p,d,m,s){
return (function (){
var s__5665__$1 = s__5665;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__5665__$1);
if(temp__4126__auto__){
var s__5665__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__5665__$2)){
var c__4972__auto__ = cljs.core.chunk_first.call(null,s__5665__$2);
var size__4973__auto__ = cljs.core.count.call(null,c__4972__auto__);
var b__5667 = cljs.core.chunk_buffer.call(null,size__4973__auto__);
if((function (){var i__5666 = (0);
while(true){
if((i__5666 < size__4973__auto__)){
var x = cljs.core._nth.call(null,c__4972__auto__,i__5666);
cljs.core.chunk_append.call(null,b__5667,(function (){var p1 = todo.core.calc_pace_in_ms.call(null,(x + todo.core.minutes_to_seconds.call(null,m,s)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.success","tr.success",-815583958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((1000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,(d / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((5000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((10000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((21100) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((42200) / p1))], null)], null);
})());

var G__5669 = (i__5666 + (1));
i__5666 = G__5669;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5667),todo$core$generic_pace_chart_$_iter__5664.call(null,cljs.core.chunk_rest.call(null,s__5665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__5667),null);
}
} else {
var x = cljs.core.first.call(null,s__5665__$2);
return cljs.core.cons.call(null,(function (){var p1 = todo.core.calc_pace_in_ms.call(null,(x + todo.core.minutes_to_seconds.call(null,m,s)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr.success","tr.success",-815583958),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((1000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,(d / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((5000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((10000) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((21100) / p1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),todo.core.toHMS.call(null,((42200) / p1))], null)], null);
})(),todo$core$generic_pace_chart_$_iter__5664.call(null,cljs.core.rest.call(null,s__5665__$2)));
}
} else {
return null;
}
break;
}
});})(p,d,m,s))
,null,null));
});})(p,d,m,s))
;
return iter__4974__auto__.call(null,cljs.core.range.call(null,(1),(6)));
})()], null)], null)], null)], null);
});
todo.core.distance_at_pace = (function todo$core$distance_at_pace(distance,pace){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Distance at pace"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),distance], null),"km at a pace of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),todo.core.toHMS.call(null,((1000) / pace))], null),"/km will taken ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"b","b",1482224470),todo.core.toHMS.call(null,((distance * (1000)) / pace))], null)], null)], null)], null);
});
todo.core.home_page = (function todo$core$home_page(){
var p = new cljs.core.Keyword(null,"paceInMetersPerSecond","paceInMetersPerSecond",-206770944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo.core.pace));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Pace Chart"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Set your pace"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.pace_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"distance","distance",-1671893894),new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo.core.pace)),new cljs.core.Keyword(null,"minutes","minutes",1319166394),new cljs.core.Keyword(null,"minutes","minutes",1319166394).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo.core.pace)),new cljs.core.Keyword(null,"seconds","seconds",-445266194),new cljs.core.Keyword(null,"seconds","seconds",-445266194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo.core.pace)),new cljs.core.Keyword(null,"on-save","on-save",1618176266),todo.core.recalculate_chart], null)], null)], null)], null)], null)], null),(cljs.core.truth_(p)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Pace in Meters/Second"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),p], null)], null)], null),todo.core.distance_at_pace.call(null,new cljs.core.Keyword(null,"distance","distance",-1671893894).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo.core.pace)),new cljs.core.Keyword(null,"paceInMetersPerSecond","paceInMetersPerSecond",-206770944).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,todo.core.pace)))], null):null)], null),(cljs.core.truth_(p)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),todo.core.generic_pace_chart.call(null,cljs.core.deref.call(null,todo.core.pace))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/about"], null),"Read more about this toy"], null)], null)], null)], null);
});
todo.core.about_page = (function todo$core$about_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"About todo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"This is a small toy using ClojureScript / Reagent to dynamically create a pace chart"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"Check out the pace chart"], null)], null)], null);
});
todo.core.current_page = (function todo$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__5556__auto___5672 = (function (params__5557__auto__){
if(cljs.core.map_QMARK_.call(null,params__5557__auto__)){
var map__5670 = params__5557__auto__;
var map__5670__$1 = ((cljs.core.seq_QMARK_.call(null,map__5670))?cljs.core.apply.call(null,cljs.core.hash_map,map__5670):map__5670);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.home_page;},new cljs.core.Symbol("todo.core","home-page","todo.core/home-page",-1366651088,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/arjen/Development/Projects/todo/src/cljs/todo/core.cljs",16,7,158,158,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(todo.core.home_page)?todo.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__5557__auto__)){
var vec__5671 = params__5557__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.home_page;},new cljs.core.Symbol("todo.core","home-page","todo.core/home-page",-1366651088,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"/Users/arjen/Development/Projects/todo/src/cljs/todo/core.cljs",16,7,158,158,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(todo.core.home_page)?todo.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__5556__auto___5672);

var action__5556__auto___5675 = (function (params__5557__auto__){
if(cljs.core.map_QMARK_.call(null,params__5557__auto__)){
var map__5673 = params__5557__auto__;
var map__5673__$1 = ((cljs.core.seq_QMARK_.call(null,map__5673))?cljs.core.apply.call(null,cljs.core.hash_map,map__5673):map__5673);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.about_page;},new cljs.core.Symbol("todo.core","about-page","todo.core/about-page",-1031847072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/arjen/Development/Projects/todo/src/cljs/todo/core.cljs",17,7,188,188,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(todo.core.about_page)?todo.core.about_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__5557__auto__)){
var vec__5674 = params__5557__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return todo.core.about_page;},new cljs.core.Symbol("todo.core","about-page","todo.core/about-page",-1031847072,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"todo.core","todo.core",1003328583,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"/Users/arjen/Development/Projects/todo/src/cljs/todo/core.cljs",17,7,188,188,cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY)),null,(cljs.core.truth_(todo.core.about_page)?todo.core.about_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__5556__auto___5675);

todo.core.hook_browser_navigation_BANG_ = (function todo$core$hook_browser_navigation_BANG_(){
var G__5677 = (new goog.History());
goog.events.listen(G__5677,goog.history.EventType.NAVIGATE,((function (G__5677){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__5677))
);

G__5677.setEnabled(true);

return G__5677;
});
todo.core.mount_root = (function todo$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.core.current_page], null),document.getElementById("app"));
});
todo.core.init_BANG_ = (function todo$core$init_BANG_(){
todo.core.hook_browser_navigation_BANG_.call(null);

return todo.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map