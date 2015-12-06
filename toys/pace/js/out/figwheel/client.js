// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11848__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__11848 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11849__i = 0, G__11849__a = new Array(arguments.length -  0);
while (G__11849__i < G__11849__a.length) {G__11849__a[G__11849__i] = arguments[G__11849__i + 0]; ++G__11849__i;}
  args = new cljs.core.IndexedSeq(G__11849__a,0);
} 
return G__11848__delegate.call(this,args);};
G__11848.cljs$lang$maxFixedArity = 0;
G__11848.cljs$lang$applyTo = (function (arglist__11850){
var args = cljs.core.seq(arglist__11850);
return G__11848__delegate(args);
});
G__11848.cljs$core$IFn$_invoke$arity$variadic = G__11848__delegate;
return G__11848;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__11851){
var map__11853 = p__11851;
var map__11853__$1 = ((cljs.core.seq_QMARK_.call(null,map__11853))?cljs.core.apply.call(null,cljs.core.hash_map,map__11853):map__11853);
var class$ = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__11853__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4220__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4208__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4208__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4208__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__7060__auto___11982 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___11982,ch){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___11982,ch){
return (function (state_11956){
var state_val_11957 = (state_11956[(1)]);
if((state_val_11957 === (7))){
var inst_11952 = (state_11956[(2)]);
var state_11956__$1 = state_11956;
var statearr_11958_11983 = state_11956__$1;
(statearr_11958_11983[(2)] = inst_11952);

(statearr_11958_11983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (1))){
var state_11956__$1 = state_11956;
var statearr_11959_11984 = state_11956__$1;
(statearr_11959_11984[(2)] = null);

(statearr_11959_11984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (4))){
var inst_11920 = (state_11956[(7)]);
var inst_11920__$1 = (state_11956[(2)]);
var state_11956__$1 = (function (){var statearr_11960 = state_11956;
(statearr_11960[(7)] = inst_11920__$1);

return statearr_11960;
})();
if(cljs.core.truth_(inst_11920__$1)){
var statearr_11961_11985 = state_11956__$1;
(statearr_11961_11985[(1)] = (5));

} else {
var statearr_11962_11986 = state_11956__$1;
(statearr_11962_11986[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (13))){
var state_11956__$1 = state_11956;
var statearr_11963_11987 = state_11956__$1;
(statearr_11963_11987[(2)] = null);

(statearr_11963_11987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (6))){
var state_11956__$1 = state_11956;
var statearr_11964_11988 = state_11956__$1;
(statearr_11964_11988[(2)] = null);

(statearr_11964_11988[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (3))){
var inst_11954 = (state_11956[(2)]);
var state_11956__$1 = state_11956;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11956__$1,inst_11954);
} else {
if((state_val_11957 === (12))){
var inst_11927 = (state_11956[(8)]);
var inst_11940 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_11927);
var inst_11941 = cljs.core.first.call(null,inst_11940);
var inst_11942 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_11941);
var inst_11943 = console.warn("Figwheel: Not loading code with warnings - ",inst_11942);
var state_11956__$1 = state_11956;
var statearr_11965_11989 = state_11956__$1;
(statearr_11965_11989[(2)] = inst_11943);

(statearr_11965_11989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (2))){
var state_11956__$1 = state_11956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11956__$1,(4),ch);
} else {
if((state_val_11957 === (11))){
var inst_11936 = (state_11956[(2)]);
var state_11956__$1 = state_11956;
var statearr_11966_11990 = state_11956__$1;
(statearr_11966_11990[(2)] = inst_11936);

(statearr_11966_11990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (9))){
var inst_11926 = (state_11956[(9)]);
var inst_11938 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_11926,opts);
var state_11956__$1 = state_11956;
if(cljs.core.truth_(inst_11938)){
var statearr_11967_11991 = state_11956__$1;
(statearr_11967_11991[(1)] = (12));

} else {
var statearr_11968_11992 = state_11956__$1;
(statearr_11968_11992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (5))){
var inst_11926 = (state_11956[(9)]);
var inst_11920 = (state_11956[(7)]);
var inst_11922 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_11923 = (new cljs.core.PersistentArrayMap(null,2,inst_11922,null));
var inst_11924 = (new cljs.core.PersistentHashSet(null,inst_11923,null));
var inst_11925 = figwheel.client.focus_msgs.call(null,inst_11924,inst_11920);
var inst_11926__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_11925);
var inst_11927 = cljs.core.first.call(null,inst_11925);
var inst_11928 = figwheel.client.reload_file_state_QMARK_.call(null,inst_11926__$1,opts);
var state_11956__$1 = (function (){var statearr_11969 = state_11956;
(statearr_11969[(8)] = inst_11927);

(statearr_11969[(9)] = inst_11926__$1);

return statearr_11969;
})();
if(cljs.core.truth_(inst_11928)){
var statearr_11970_11993 = state_11956__$1;
(statearr_11970_11993[(1)] = (8));

} else {
var statearr_11971_11994 = state_11956__$1;
(statearr_11971_11994[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (14))){
var inst_11946 = (state_11956[(2)]);
var state_11956__$1 = state_11956;
var statearr_11972_11995 = state_11956__$1;
(statearr_11972_11995[(2)] = inst_11946);

(statearr_11972_11995[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (10))){
var inst_11948 = (state_11956[(2)]);
var state_11956__$1 = (function (){var statearr_11973 = state_11956;
(statearr_11973[(10)] = inst_11948);

return statearr_11973;
})();
var statearr_11974_11996 = state_11956__$1;
(statearr_11974_11996[(2)] = null);

(statearr_11974_11996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11957 === (8))){
var inst_11927 = (state_11956[(8)]);
var inst_11930 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_11931 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_11927);
var inst_11932 = cljs.core.async.timeout.call(null,(1000));
var inst_11933 = [inst_11931,inst_11932];
var inst_11934 = (new cljs.core.PersistentVector(null,2,(5),inst_11930,inst_11933,null));
var state_11956__$1 = state_11956;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11956__$1,(11),inst_11934);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7060__auto___11982,ch))
;
return ((function (switch__6998__auto__,c__7060__auto___11982,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__6999__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__6999__auto____0 = (function (){
var statearr_11978 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11978[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__6999__auto__);

(statearr_11978[(1)] = (1));

return statearr_11978;
});
var figwheel$client$file_reloader_plugin_$_state_machine__6999__auto____1 = (function (state_11956){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_11956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e11979){if((e11979 instanceof Object)){
var ex__7002__auto__ = e11979;
var statearr_11980_11997 = state_11956;
(statearr_11980_11997[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11979;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11998 = state_11956;
state_11956 = G__11998;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__6999__auto__ = function(state_11956){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__6999__auto____1.call(this,state_11956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__6999__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__6999__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___11982,ch))
})();
var state__7062__auto__ = (function (){var statearr_11981 = f__7061__auto__.call(null);
(statearr_11981[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___11982);

return statearr_11981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___11982,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__11999_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__11999_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_12008 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__12001_SHARP_,p2__12000_SHARP_){
return [cljs.core.str(p2__12000_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_12008){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_12006 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_12007 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_12006,_STAR_print_newline_STAR_12007,base_path_12008){
return (function() { 
var G__12009__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__12009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12010__i = 0, G__12010__a = new Array(arguments.length -  0);
while (G__12010__i < G__12010__a.length) {G__12010__a[G__12010__i] = arguments[G__12010__i + 0]; ++G__12010__i;}
  args = new cljs.core.IndexedSeq(G__12010__a,0);
} 
return G__12009__delegate.call(this,args);};
G__12009.cljs$lang$maxFixedArity = 0;
G__12009.cljs$lang$applyTo = (function (arglist__12011){
var args = cljs.core.seq(arglist__12011);
return G__12009__delegate(args);
});
G__12009.cljs$core$IFn$_invoke$arity$variadic = G__12009__delegate;
return G__12009;
})()
;})(_STAR_print_fn_STAR_12006,_STAR_print_newline_STAR_12007,base_path_12008))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12007;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12006;
}}catch (e12005){if((e12005 instanceof Error)){
var e = e12005;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_12008], null));
} else {
var e = e12005;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_12008))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__12012){
var map__12017 = p__12012;
var map__12017__$1 = ((cljs.core.seq_QMARK_.call(null,map__12017))?cljs.core.apply.call(null,cljs.core.hash_map,map__12017):map__12017);
var opts = map__12017__$1;
var build_id = cljs.core.get.call(null,map__12017__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__12017,map__12017__$1,opts,build_id){
return (function (p__12018){
var vec__12019 = p__12018;
var map__12020 = cljs.core.nth.call(null,vec__12019,(0),null);
var map__12020__$1 = ((cljs.core.seq_QMARK_.call(null,map__12020))?cljs.core.apply.call(null,cljs.core.hash_map,map__12020):map__12020);
var msg = map__12020__$1;
var msg_name = cljs.core.get.call(null,map__12020__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12019,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__12019,map__12020,map__12020__$1,msg,msg_name,_,map__12017,map__12017__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__12019,map__12020,map__12020__$1,msg,msg_name,_,map__12017,map__12017__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__12017,map__12017__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__12024){
var vec__12025 = p__12024;
var map__12026 = cljs.core.nth.call(null,vec__12025,(0),null);
var map__12026__$1 = ((cljs.core.seq_QMARK_.call(null,map__12026))?cljs.core.apply.call(null,cljs.core.hash_map,map__12026):map__12026);
var msg = map__12026__$1;
var msg_name = cljs.core.get.call(null,map__12026__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12025,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__12027){
var map__12035 = p__12027;
var map__12035__$1 = ((cljs.core.seq_QMARK_.call(null,map__12035))?cljs.core.apply.call(null,cljs.core.hash_map,map__12035):map__12035);
var on_compile_fail = cljs.core.get.call(null,map__12035__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__12035__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__12035,map__12035__$1,on_compile_fail,on_compile_warning){
return (function (p__12036){
var vec__12037 = p__12036;
var map__12038 = cljs.core.nth.call(null,vec__12037,(0),null);
var map__12038__$1 = ((cljs.core.seq_QMARK_.call(null,map__12038))?cljs.core.apply.call(null,cljs.core.hash_map,map__12038):map__12038);
var msg = map__12038__$1;
var msg_name = cljs.core.get.call(null,map__12038__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__12037,(1));
var pred__12039 = cljs.core._EQ_;
var expr__12040 = msg_name;
if(cljs.core.truth_(pred__12039.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__12040))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__12039.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__12040))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__12035,map__12035__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__,msg_hist,msg_names,msg){
return (function (state_12237){
var state_val_12238 = (state_12237[(1)]);
if((state_val_12238 === (7))){
var inst_12173 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12239_12280 = state_12237__$1;
(statearr_12239_12280[(2)] = inst_12173);

(statearr_12239_12280[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (20))){
var inst_12199 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12199)){
var statearr_12240_12281 = state_12237__$1;
(statearr_12240_12281[(1)] = (22));

} else {
var statearr_12241_12282 = state_12237__$1;
(statearr_12241_12282[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (27))){
var inst_12211 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12212 = figwheel.client.heads_up.display_warning.call(null,inst_12211);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(30),inst_12212);
} else {
if((state_val_12238 === (1))){
var inst_12161 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12161)){
var statearr_12242_12283 = state_12237__$1;
(statearr_12242_12283[(1)] = (2));

} else {
var statearr_12243_12284 = state_12237__$1;
(statearr_12243_12284[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (24))){
var inst_12227 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12244_12285 = state_12237__$1;
(statearr_12244_12285[(2)] = inst_12227);

(statearr_12244_12285[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (4))){
var inst_12235 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12237__$1,inst_12235);
} else {
if((state_val_12238 === (15))){
var inst_12188 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12189 = figwheel.client.format_messages.call(null,inst_12188);
var inst_12190 = figwheel.client.heads_up.display_error.call(null,inst_12189);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(18),inst_12190);
} else {
if((state_val_12238 === (21))){
var inst_12229 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12245_12286 = state_12237__$1;
(statearr_12245_12286[(2)] = inst_12229);

(statearr_12245_12286[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (31))){
var inst_12218 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(34),inst_12218);
} else {
if((state_val_12238 === (32))){
var state_12237__$1 = state_12237;
var statearr_12246_12287 = state_12237__$1;
(statearr_12246_12287[(2)] = null);

(statearr_12246_12287[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (33))){
var inst_12223 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12247_12288 = state_12237__$1;
(statearr_12247_12288[(2)] = inst_12223);

(statearr_12247_12288[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (13))){
var inst_12179 = (state_12237[(2)]);
var inst_12180 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12181 = figwheel.client.format_messages.call(null,inst_12180);
var inst_12182 = figwheel.client.heads_up.display_error.call(null,inst_12181);
var state_12237__$1 = (function (){var statearr_12248 = state_12237;
(statearr_12248[(7)] = inst_12179);

return statearr_12248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(14),inst_12182);
} else {
if((state_val_12238 === (22))){
var inst_12201 = figwheel.client.heads_up.clear.call(null);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(25),inst_12201);
} else {
if((state_val_12238 === (29))){
var inst_12225 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12249_12289 = state_12237__$1;
(statearr_12249_12289[(2)] = inst_12225);

(statearr_12249_12289[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (6))){
var inst_12169 = figwheel.client.heads_up.clear.call(null);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(9),inst_12169);
} else {
if((state_val_12238 === (28))){
var inst_12216 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12216)){
var statearr_12250_12290 = state_12237__$1;
(statearr_12250_12290[(1)] = (31));

} else {
var statearr_12251_12291 = state_12237__$1;
(statearr_12251_12291[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (25))){
var inst_12203 = (state_12237[(2)]);
var inst_12204 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12205 = figwheel.client.heads_up.display_warning.call(null,inst_12204);
var state_12237__$1 = (function (){var statearr_12252 = state_12237;
(statearr_12252[(8)] = inst_12203);

return statearr_12252;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(26),inst_12205);
} else {
if((state_val_12238 === (34))){
var inst_12220 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12253_12292 = state_12237__$1;
(statearr_12253_12292[(2)] = inst_12220);

(statearr_12253_12292[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (17))){
var inst_12231 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12254_12293 = state_12237__$1;
(statearr_12254_12293[(2)] = inst_12231);

(statearr_12254_12293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (3))){
var inst_12175 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12175)){
var statearr_12255_12294 = state_12237__$1;
(statearr_12255_12294[(1)] = (10));

} else {
var statearr_12256_12295 = state_12237__$1;
(statearr_12256_12295[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (12))){
var inst_12233 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12257_12296 = state_12237__$1;
(statearr_12257_12296[(2)] = inst_12233);

(statearr_12257_12296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (2))){
var inst_12163 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12163)){
var statearr_12258_12297 = state_12237__$1;
(statearr_12258_12297[(1)] = (5));

} else {
var statearr_12259_12298 = state_12237__$1;
(statearr_12259_12298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (23))){
var inst_12209 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12209)){
var statearr_12260_12299 = state_12237__$1;
(statearr_12260_12299[(1)] = (27));

} else {
var statearr_12261_12300 = state_12237__$1;
(statearr_12261_12300[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (19))){
var inst_12196 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_12197 = figwheel.client.heads_up.append_message.call(null,inst_12196);
var state_12237__$1 = state_12237;
var statearr_12262_12301 = state_12237__$1;
(statearr_12262_12301[(2)] = inst_12197);

(statearr_12262_12301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (11))){
var inst_12186 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12186)){
var statearr_12263_12302 = state_12237__$1;
(statearr_12263_12302[(1)] = (15));

} else {
var statearr_12264_12303 = state_12237__$1;
(statearr_12264_12303[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (9))){
var inst_12171 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12265_12304 = state_12237__$1;
(statearr_12265_12304[(2)] = inst_12171);

(statearr_12265_12304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (5))){
var inst_12165 = figwheel.client.heads_up.flash_loaded.call(null);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(8),inst_12165);
} else {
if((state_val_12238 === (14))){
var inst_12184 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12266_12305 = state_12237__$1;
(statearr_12266_12305[(2)] = inst_12184);

(statearr_12266_12305[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (26))){
var inst_12207 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12267_12306 = state_12237__$1;
(statearr_12267_12306[(2)] = inst_12207);

(statearr_12267_12306[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (16))){
var inst_12194 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_12237__$1 = state_12237;
if(cljs.core.truth_(inst_12194)){
var statearr_12268_12307 = state_12237__$1;
(statearr_12268_12307[(1)] = (19));

} else {
var statearr_12269_12308 = state_12237__$1;
(statearr_12269_12308[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (30))){
var inst_12214 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12270_12309 = state_12237__$1;
(statearr_12270_12309[(2)] = inst_12214);

(statearr_12270_12309[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (10))){
var inst_12177 = figwheel.client.heads_up.clear.call(null);
var state_12237__$1 = state_12237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12237__$1,(13),inst_12177);
} else {
if((state_val_12238 === (18))){
var inst_12192 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12271_12310 = state_12237__$1;
(statearr_12271_12310[(2)] = inst_12192);

(statearr_12271_12310[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12238 === (8))){
var inst_12167 = (state_12237[(2)]);
var state_12237__$1 = state_12237;
var statearr_12272_12311 = state_12237__$1;
(statearr_12272_12311[(2)] = inst_12167);

(statearr_12272_12311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7060__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__6998__auto__,c__7060__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto____0 = (function (){
var statearr_12276 = [null,null,null,null,null,null,null,null,null];
(statearr_12276[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto__);

(statearr_12276[(1)] = (1));

return statearr_12276;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto____1 = (function (state_12237){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_12237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e12277){if((e12277 instanceof Object)){
var ex__7002__auto__ = e12277;
var statearr_12278_12312 = state_12237;
(statearr_12278_12312[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12277;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12313 = state_12237;
state_12237 = G__12313;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto__ = function(state_12237){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto____1.call(this,state_12237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__,msg_hist,msg_names,msg))
})();
var state__7062__auto__ = (function (){var statearr_12279 = f__7061__auto__.call(null);
(statearr_12279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_12279;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__,msg_hist,msg_names,msg))
);

return c__7060__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7060__auto___12376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___12376,ch){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___12376,ch){
return (function (state_12359){
var state_val_12360 = (state_12359[(1)]);
if((state_val_12360 === (8))){
var inst_12351 = (state_12359[(2)]);
var state_12359__$1 = (function (){var statearr_12361 = state_12359;
(statearr_12361[(7)] = inst_12351);

return statearr_12361;
})();
var statearr_12362_12377 = state_12359__$1;
(statearr_12362_12377[(2)] = null);

(statearr_12362_12377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (7))){
var inst_12355 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
var statearr_12363_12378 = state_12359__$1;
(statearr_12363_12378[(2)] = inst_12355);

(statearr_12363_12378[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (6))){
var state_12359__$1 = state_12359;
var statearr_12364_12379 = state_12359__$1;
(statearr_12364_12379[(2)] = null);

(statearr_12364_12379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (5))){
var inst_12347 = (state_12359[(8)]);
var inst_12349 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_12347);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12359__$1,(8),inst_12349);
} else {
if((state_val_12360 === (4))){
var inst_12347 = (state_12359[(8)]);
var inst_12347__$1 = (state_12359[(2)]);
var state_12359__$1 = (function (){var statearr_12365 = state_12359;
(statearr_12365[(8)] = inst_12347__$1);

return statearr_12365;
})();
if(cljs.core.truth_(inst_12347__$1)){
var statearr_12366_12380 = state_12359__$1;
(statearr_12366_12380[(1)] = (5));

} else {
var statearr_12367_12381 = state_12359__$1;
(statearr_12367_12381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12360 === (3))){
var inst_12357 = (state_12359[(2)]);
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12359__$1,inst_12357);
} else {
if((state_val_12360 === (2))){
var state_12359__$1 = state_12359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12359__$1,(4),ch);
} else {
if((state_val_12360 === (1))){
var state_12359__$1 = state_12359;
var statearr_12368_12382 = state_12359__$1;
(statearr_12368_12382[(2)] = null);

(statearr_12368_12382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__7060__auto___12376,ch))
;
return ((function (switch__6998__auto__,c__7060__auto___12376,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__6999__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__6999__auto____0 = (function (){
var statearr_12372 = [null,null,null,null,null,null,null,null,null];
(statearr_12372[(0)] = figwheel$client$heads_up_plugin_$_state_machine__6999__auto__);

(statearr_12372[(1)] = (1));

return statearr_12372;
});
var figwheel$client$heads_up_plugin_$_state_machine__6999__auto____1 = (function (state_12359){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_12359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e12373){if((e12373 instanceof Object)){
var ex__7002__auto__ = e12373;
var statearr_12374_12383 = state_12359;
(statearr_12374_12383[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12373;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12384 = state_12359;
state_12359 = G__12384;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__6999__auto__ = function(state_12359){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__6999__auto____1.call(this,state_12359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__6999__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__6999__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___12376,ch))
})();
var state__7062__auto__ = (function (){var statearr_12375 = f__7061__auto__.call(null);
(statearr_12375[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___12376);

return statearr_12375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___12376,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__){
return (function (state_12405){
var state_val_12406 = (state_12405[(1)]);
if((state_val_12406 === (2))){
var inst_12402 = (state_12405[(2)]);
var inst_12403 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_12405__$1 = (function (){var statearr_12407 = state_12405;
(statearr_12407[(7)] = inst_12402);

return statearr_12407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12405__$1,inst_12403);
} else {
if((state_val_12406 === (1))){
var inst_12400 = cljs.core.async.timeout.call(null,(3000));
var state_12405__$1 = state_12405;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12405__$1,(2),inst_12400);
} else {
return null;
}
}
});})(c__7060__auto__))
;
return ((function (switch__6998__auto__,c__7060__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__6999__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__6999__auto____0 = (function (){
var statearr_12411 = [null,null,null,null,null,null,null,null];
(statearr_12411[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__6999__auto__);

(statearr_12411[(1)] = (1));

return statearr_12411;
});
var figwheel$client$enforce_project_plugin_$_state_machine__6999__auto____1 = (function (state_12405){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_12405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e12412){if((e12412 instanceof Object)){
var ex__7002__auto__ = e12412;
var statearr_12413_12415 = state_12405;
(statearr_12413_12415[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12416 = state_12405;
state_12405 = G__12416;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__6999__auto__ = function(state_12405){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__6999__auto____1.call(this,state_12405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__6999__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__6999__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__))
})();
var state__7062__auto__ = (function (){var statearr_12414 = f__7061__auto__.call(null);
(statearr_12414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_12414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__))
);

return c__7060__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__4208__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__4208__auto__)){
return ("CustomEvent" in window);
} else {
return and__4208__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj12420 = {"detail":url};
return obj12420;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__12421){
var map__12427 = p__12421;
var map__12427__$1 = ((cljs.core.seq_QMARK_.call(null,map__12427))?cljs.core.apply.call(null,cljs.core.hash_map,map__12427):map__12427);
var ed = map__12427__$1;
var exception_data = cljs.core.get.call(null,map__12427__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__12427__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__12428_12432 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__12429_12433 = null;
var count__12430_12434 = (0);
var i__12431_12435 = (0);
while(true){
if((i__12431_12435 < count__12430_12434)){
var msg_12436 = cljs.core._nth.call(null,chunk__12429_12433,i__12431_12435);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12436);

var G__12437 = seq__12428_12432;
var G__12438 = chunk__12429_12433;
var G__12439 = count__12430_12434;
var G__12440 = (i__12431_12435 + (1));
seq__12428_12432 = G__12437;
chunk__12429_12433 = G__12438;
count__12430_12434 = G__12439;
i__12431_12435 = G__12440;
continue;
} else {
var temp__4126__auto___12441 = cljs.core.seq.call(null,seq__12428_12432);
if(temp__4126__auto___12441){
var seq__12428_12442__$1 = temp__4126__auto___12441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12428_12442__$1)){
var c__5005__auto___12443 = cljs.core.chunk_first.call(null,seq__12428_12442__$1);
var G__12444 = cljs.core.chunk_rest.call(null,seq__12428_12442__$1);
var G__12445 = c__5005__auto___12443;
var G__12446 = cljs.core.count.call(null,c__5005__auto___12443);
var G__12447 = (0);
seq__12428_12432 = G__12444;
chunk__12429_12433 = G__12445;
count__12430_12434 = G__12446;
i__12431_12435 = G__12447;
continue;
} else {
var msg_12448 = cljs.core.first.call(null,seq__12428_12442__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_12448);

var G__12449 = cljs.core.next.call(null,seq__12428_12442__$1);
var G__12450 = null;
var G__12451 = (0);
var G__12452 = (0);
seq__12428_12432 = G__12449;
chunk__12429_12433 = G__12450;
count__12430_12434 = G__12451;
i__12431_12435 = G__12452;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__12453){
var map__12455 = p__12453;
var map__12455__$1 = ((cljs.core.seq_QMARK_.call(null,map__12455))?cljs.core.apply.call(null,cljs.core.hash_map,map__12455):map__12455);
var w = map__12455__$1;
var message = cljs.core.get.call(null,map__12455__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4208__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4208__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4208__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__12462 = cljs.core.seq.call(null,plugins);
var chunk__12463 = null;
var count__12464 = (0);
var i__12465 = (0);
while(true){
if((i__12465 < count__12464)){
var vec__12466 = cljs.core._nth.call(null,chunk__12463,i__12465);
var k = cljs.core.nth.call(null,vec__12466,(0),null);
var plugin = cljs.core.nth.call(null,vec__12466,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12468 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12462,chunk__12463,count__12464,i__12465,pl_12468,vec__12466,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_12468.call(null,msg_hist);
});})(seq__12462,chunk__12463,count__12464,i__12465,pl_12468,vec__12466,k,plugin))
);
} else {
}

var G__12469 = seq__12462;
var G__12470 = chunk__12463;
var G__12471 = count__12464;
var G__12472 = (i__12465 + (1));
seq__12462 = G__12469;
chunk__12463 = G__12470;
count__12464 = G__12471;
i__12465 = G__12472;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12462);
if(temp__4126__auto__){
var seq__12462__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12462__$1)){
var c__5005__auto__ = cljs.core.chunk_first.call(null,seq__12462__$1);
var G__12473 = cljs.core.chunk_rest.call(null,seq__12462__$1);
var G__12474 = c__5005__auto__;
var G__12475 = cljs.core.count.call(null,c__5005__auto__);
var G__12476 = (0);
seq__12462 = G__12473;
chunk__12463 = G__12474;
count__12464 = G__12475;
i__12465 = G__12476;
continue;
} else {
var vec__12467 = cljs.core.first.call(null,seq__12462__$1);
var k = cljs.core.nth.call(null,vec__12467,(0),null);
var plugin = cljs.core.nth.call(null,vec__12467,(1),null);
if(cljs.core.truth_(plugin)){
var pl_12477 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__12462,chunk__12463,count__12464,i__12465,pl_12477,vec__12467,k,plugin,seq__12462__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_12477.call(null,msg_hist);
});})(seq__12462,chunk__12463,count__12464,i__12465,pl_12477,vec__12467,k,plugin,seq__12462__$1,temp__4126__auto__))
);
} else {
}

var G__12478 = cljs.core.next.call(null,seq__12462__$1);
var G__12479 = null;
var G__12480 = (0);
var G__12481 = (0);
seq__12462 = G__12478;
chunk__12463 = G__12479;
count__12464 = G__12480;
i__12465 = G__12481;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(){
var G__12483 = arguments.length;
switch (G__12483) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(){
var argseq__5260__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5260__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__12486){
var map__12487 = p__12486;
var map__12487__$1 = ((cljs.core.seq_QMARK_.call(null,map__12487))?cljs.core.apply.call(null,cljs.core.hash_map,map__12487):map__12487);
var opts = map__12487__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq12485){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12485));
});

//# sourceMappingURL=client.js.map