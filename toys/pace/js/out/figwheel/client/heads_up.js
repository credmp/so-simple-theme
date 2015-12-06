// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(){
var argseq__5260__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5260__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__12500_12508 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__12501_12509 = null;
var count__12502_12510 = (0);
var i__12503_12511 = (0);
while(true){
if((i__12503_12511 < count__12502_12510)){
var k_12512 = cljs.core._nth.call(null,chunk__12501_12509,i__12503_12511);
e.setAttribute(cljs.core.name.call(null,k_12512),cljs.core.get.call(null,attrs,k_12512));

var G__12513 = seq__12500_12508;
var G__12514 = chunk__12501_12509;
var G__12515 = count__12502_12510;
var G__12516 = (i__12503_12511 + (1));
seq__12500_12508 = G__12513;
chunk__12501_12509 = G__12514;
count__12502_12510 = G__12515;
i__12503_12511 = G__12516;
continue;
} else {
var temp__4126__auto___12517 = cljs.core.seq.call(null,seq__12500_12508);
if(temp__4126__auto___12517){
var seq__12500_12518__$1 = temp__4126__auto___12517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12500_12518__$1)){
var c__5005__auto___12519 = cljs.core.chunk_first.call(null,seq__12500_12518__$1);
var G__12520 = cljs.core.chunk_rest.call(null,seq__12500_12518__$1);
var G__12521 = c__5005__auto___12519;
var G__12522 = cljs.core.count.call(null,c__5005__auto___12519);
var G__12523 = (0);
seq__12500_12508 = G__12520;
chunk__12501_12509 = G__12521;
count__12502_12510 = G__12522;
i__12503_12511 = G__12523;
continue;
} else {
var k_12524 = cljs.core.first.call(null,seq__12500_12518__$1);
e.setAttribute(cljs.core.name.call(null,k_12524),cljs.core.get.call(null,attrs,k_12524));

var G__12525 = cljs.core.next.call(null,seq__12500_12518__$1);
var G__12526 = null;
var G__12527 = (0);
var G__12528 = (0);
seq__12500_12508 = G__12525;
chunk__12501_12509 = G__12526;
count__12502_12510 = G__12527;
i__12503_12511 = G__12528;
continue;
}
} else {
}
}
break;
}

var seq__12504_12529 = cljs.core.seq.call(null,children);
var chunk__12505_12530 = null;
var count__12506_12531 = (0);
var i__12507_12532 = (0);
while(true){
if((i__12507_12532 < count__12506_12531)){
var ch_12533 = cljs.core._nth.call(null,chunk__12505_12530,i__12507_12532);
e.appendChild(ch_12533);

var G__12534 = seq__12504_12529;
var G__12535 = chunk__12505_12530;
var G__12536 = count__12506_12531;
var G__12537 = (i__12507_12532 + (1));
seq__12504_12529 = G__12534;
chunk__12505_12530 = G__12535;
count__12506_12531 = G__12536;
i__12507_12532 = G__12537;
continue;
} else {
var temp__4126__auto___12538 = cljs.core.seq.call(null,seq__12504_12529);
if(temp__4126__auto___12538){
var seq__12504_12539__$1 = temp__4126__auto___12538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12504_12539__$1)){
var c__5005__auto___12540 = cljs.core.chunk_first.call(null,seq__12504_12539__$1);
var G__12541 = cljs.core.chunk_rest.call(null,seq__12504_12539__$1);
var G__12542 = c__5005__auto___12540;
var G__12543 = cljs.core.count.call(null,c__5005__auto___12540);
var G__12544 = (0);
seq__12504_12529 = G__12541;
chunk__12505_12530 = G__12542;
count__12506_12531 = G__12543;
i__12507_12532 = G__12544;
continue;
} else {
var ch_12545 = cljs.core.first.call(null,seq__12504_12539__$1);
e.appendChild(ch_12545);

var G__12546 = cljs.core.next.call(null,seq__12504_12539__$1);
var G__12547 = null;
var G__12548 = (0);
var G__12549 = (0);
seq__12504_12529 = G__12546;
chunk__12505_12530 = G__12547;
count__12506_12531 = G__12548;
i__12507_12532 = G__12549;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq12497){
var G__12498 = cljs.core.first.call(null,seq12497);
var seq12497__$1 = cljs.core.next.call(null,seq12497);
var G__12499 = cljs.core.first.call(null,seq12497__$1);
var seq12497__$2 = cljs.core.next.call(null,seq12497__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__12498,G__12499,seq12497__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__,hierarchy__5119__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__,hierarchy__5119__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5119__auto__,method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_12550 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_12550.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_12550.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_12550.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_12550);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__12551,st_map){
var map__12555 = p__12551;
var map__12555__$1 = ((cljs.core.seq_QMARK_.call(null,map__12555))?cljs.core.apply.call(null,cljs.core.hash_map,map__12555):map__12555);
var container_el = cljs.core.get.call(null,map__12555__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__12555,map__12555__$1,container_el){
return (function (p__12556){
var vec__12557 = p__12556;
var k = cljs.core.nth.call(null,vec__12557,(0),null);
var v = cljs.core.nth.call(null,vec__12557,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__12555,map__12555__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__12558,dom_str){
var map__12560 = p__12558;
var map__12560__$1 = ((cljs.core.seq_QMARK_.call(null,map__12560))?cljs.core.apply.call(null,cljs.core.hash_map,map__12560):map__12560);
var c = map__12560__$1;
var content_area_el = cljs.core.get.call(null,map__12560__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__12561){
var map__12563 = p__12561;
var map__12563__$1 = ((cljs.core.seq_QMARK_.call(null,map__12563))?cljs.core.apply.call(null,cljs.core.hash_map,map__12563):map__12563);
var content_area_el = cljs.core.get.call(null,map__12563__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__){
return (function (state_12605){
var state_val_12606 = (state_12605[(1)]);
if((state_val_12606 === (2))){
var inst_12590 = (state_12605[(7)]);
var inst_12599 = (state_12605[(2)]);
var inst_12600 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_12601 = ["auto"];
var inst_12602 = cljs.core.PersistentHashMap.fromArrays(inst_12600,inst_12601);
var inst_12603 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12590,inst_12602);
var state_12605__$1 = (function (){var statearr_12607 = state_12605;
(statearr_12607[(8)] = inst_12599);

return statearr_12607;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12605__$1,inst_12603);
} else {
if((state_val_12606 === (1))){
var inst_12590 = (state_12605[(7)]);
var inst_12590__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12591 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12592 = ["10px","10px","100%","68px","1.0"];
var inst_12593 = cljs.core.PersistentHashMap.fromArrays(inst_12591,inst_12592);
var inst_12594 = cljs.core.merge.call(null,inst_12593,style);
var inst_12595 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12590__$1,inst_12594);
var inst_12596 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12590__$1,msg);
var inst_12597 = cljs.core.async.timeout.call(null,(300));
var state_12605__$1 = (function (){var statearr_12608 = state_12605;
(statearr_12608[(9)] = inst_12595);

(statearr_12608[(7)] = inst_12590__$1);

(statearr_12608[(10)] = inst_12596);

return statearr_12608;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12605__$1,(2),inst_12597);
} else {
return null;
}
}
});})(c__7060__auto__))
;
return ((function (switch__6998__auto__,c__7060__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto____0 = (function (){
var statearr_12612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12612[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto__);

(statearr_12612[(1)] = (1));

return statearr_12612;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto____1 = (function (state_12605){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_12605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e12613){if((e12613 instanceof Object)){
var ex__7002__auto__ = e12613;
var statearr_12614_12616 = state_12605;
(statearr_12614_12616[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12617 = state_12605;
state_12605 = G__12617;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto__ = function(state_12605){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto____1.call(this,state_12605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__))
})();
var state__7062__auto__ = (function (){var statearr_12615 = f__7061__auto__.call(null);
(statearr_12615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_12615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__))
);

return c__7060__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__12619 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__12619,(0),null);
var ln = cljs.core.nth.call(null,vec__12619,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__12622 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__12622,(0),null);
var file_line = cljs.core.nth.call(null,vec__12622,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__12622,file_name,file_line){
return (function (p1__12620_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__12620_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__12622,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__12624 = figwheel.client.heads_up.ensure_container.call(null);
var map__12624__$1 = ((cljs.core.seq_QMARK_.call(null,map__12624))?cljs.core.apply.call(null,cljs.core.hash_map,map__12624):map__12624);
var content_area_el = cljs.core.get.call(null,map__12624__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__){
return (function (state_12671){
var state_val_12672 = (state_12671[(1)]);
if((state_val_12672 === (3))){
var inst_12654 = (state_12671[(7)]);
var inst_12668 = (state_12671[(2)]);
var inst_12669 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_12654,"");
var state_12671__$1 = (function (){var statearr_12673 = state_12671;
(statearr_12673[(8)] = inst_12668);

return statearr_12673;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12671__$1,inst_12669);
} else {
if((state_val_12672 === (2))){
var inst_12654 = (state_12671[(7)]);
var inst_12661 = (state_12671[(2)]);
var inst_12662 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_12663 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_12664 = cljs.core.PersistentHashMap.fromArrays(inst_12662,inst_12663);
var inst_12665 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12654,inst_12664);
var inst_12666 = cljs.core.async.timeout.call(null,(200));
var state_12671__$1 = (function (){var statearr_12674 = state_12671;
(statearr_12674[(9)] = inst_12661);

(statearr_12674[(10)] = inst_12665);

return statearr_12674;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12671__$1,(3),inst_12666);
} else {
if((state_val_12672 === (1))){
var inst_12654 = (state_12671[(7)]);
var inst_12654__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_12655 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_12656 = ["0.0"];
var inst_12657 = cljs.core.PersistentHashMap.fromArrays(inst_12655,inst_12656);
var inst_12658 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_12654__$1,inst_12657);
var inst_12659 = cljs.core.async.timeout.call(null,(300));
var state_12671__$1 = (function (){var statearr_12675 = state_12671;
(statearr_12675[(7)] = inst_12654__$1);

(statearr_12675[(11)] = inst_12658);

return statearr_12675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12671__$1,(2),inst_12659);
} else {
return null;
}
}
}
});})(c__7060__auto__))
;
return ((function (switch__6998__auto__,c__7060__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__6999__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__6999__auto____0 = (function (){
var statearr_12679 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12679[(0)] = figwheel$client$heads_up$clear_$_state_machine__6999__auto__);

(statearr_12679[(1)] = (1));

return statearr_12679;
});
var figwheel$client$heads_up$clear_$_state_machine__6999__auto____1 = (function (state_12671){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_12671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e12680){if((e12680 instanceof Object)){
var ex__7002__auto__ = e12680;
var statearr_12681_12683 = state_12671;
(statearr_12681_12683[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12684 = state_12671;
state_12671 = G__12684;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__6999__auto__ = function(state_12671){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__6999__auto____1.call(this,state_12671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__6999__auto____0;
figwheel$client$heads_up$clear_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__6999__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__))
})();
var state__7062__auto__ = (function (){var statearr_12682 = f__7061__auto__.call(null);
(statearr_12682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_12682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__))
);

return c__7060__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__){
return (function (state_12716){
var state_val_12717 = (state_12716[(1)]);
if((state_val_12717 === (4))){
var inst_12714 = (state_12716[(2)]);
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12716__$1,inst_12714);
} else {
if((state_val_12717 === (3))){
var inst_12711 = (state_12716[(2)]);
var inst_12712 = figwheel.client.heads_up.clear.call(null);
var state_12716__$1 = (function (){var statearr_12718 = state_12716;
(statearr_12718[(7)] = inst_12711);

return statearr_12718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12716__$1,(4),inst_12712);
} else {
if((state_val_12717 === (2))){
var inst_12708 = (state_12716[(2)]);
var inst_12709 = cljs.core.async.timeout.call(null,(400));
var state_12716__$1 = (function (){var statearr_12719 = state_12716;
(statearr_12719[(8)] = inst_12708);

return statearr_12719;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12716__$1,(3),inst_12709);
} else {
if((state_val_12717 === (1))){
var inst_12706 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_12716__$1 = state_12716;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12716__$1,(2),inst_12706);
} else {
return null;
}
}
}
}
});})(c__7060__auto__))
;
return ((function (switch__6998__auto__,c__7060__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto____0 = (function (){
var statearr_12723 = [null,null,null,null,null,null,null,null,null];
(statearr_12723[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto__);

(statearr_12723[(1)] = (1));

return statearr_12723;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto____1 = (function (state_12716){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_12716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e12724){if((e12724 instanceof Object)){
var ex__7002__auto__ = e12724;
var statearr_12725_12727 = state_12716;
(statearr_12725_12727[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12728 = state_12716;
state_12716 = G__12728;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto__ = function(state_12716){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto____1.call(this,state_12716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__))
})();
var state__7062__auto__ = (function (){var statearr_12726 = f__7061__auto__.call(null);
(statearr_12726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_12726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__))
);

return c__7060__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map