// Compiled by ClojureScript 0.0-3196 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__12802_SHARP_,p2__12803_SHARP_){
var and__4208__auto__ = p1__12802_SHARP_;
if(cljs.core.truth_(and__4208__auto__)){
return p2__12803_SHARP_;
} else {
return and__4208__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4220__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4220__auto__){
return or__4220__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__12805_SHARP_,p2__12804_SHARP_){
return [cljs.core.str(p2__12804_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__4220__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__4220__auto__){
return or__4220__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__4220__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__5115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5119__auto__,method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__12806){
var map__12807 = p__12806;
var map__12807__$1 = ((cljs.core.seq_QMARK_.call(null,map__12807))?cljs.core.apply.call(null,cljs.core.hash_map,map__12807):map__12807);
var file = cljs.core.get.call(null,map__12807__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__12808){
var map__12809 = p__12808;
var map__12809__$1 = ((cljs.core.seq_QMARK_.call(null,map__12809))?cljs.core.apply.call(null,cljs.core.hash_map,map__12809):map__12809);
var namespace = cljs.core.get.call(null,map__12809__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__5115__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5116__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5117__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5118__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5119__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5119__auto__,method_table__5115__auto__,prefer_table__5116__auto__,method_cache__5117__auto__,cached_hierarchy__5118__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e12810){if((e12810 instanceof Error)){
var e = e12810;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e12810;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(){
var G__12812 = arguments.length;
switch (G__12812) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__12814,callback){
var map__12816 = p__12814;
var map__12816__$1 = ((cljs.core.seq_QMARK_.call(null,map__12816))?cljs.core.apply.call(null,cljs.core.hash_map,map__12816):map__12816);
var file_msg = map__12816__$1;
var request_url = cljs.core.get.call(null,map__12816__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__12816,map__12816__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__12816,map__12816__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__12817){
var map__12819 = p__12817;
var map__12819__$1 = ((cljs.core.seq_QMARK_.call(null,map__12819))?cljs.core.apply.call(null,cljs.core.hash_map,map__12819):map__12819);
var file_msg = map__12819__$1;
var meta_data = cljs.core.get.call(null,map__12819__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__12819__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__4220__auto__ = meta_data;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__4208__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__4208__auto__){
var or__4220__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__4220__auto____$1)){
return or__4220__auto____$1;
} else {
var and__4208__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__4208__auto____$1){
var or__4220__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__4220__auto____$2){
return or__4220__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__4208__auto____$1;
}
}
}
} else {
return and__4208__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__12820,callback){
var map__12822 = p__12820;
var map__12822__$1 = ((cljs.core.seq_QMARK_.call(null,map__12822))?cljs.core.apply.call(null,cljs.core.hash_map,map__12822):map__12822);
var file_msg = map__12822__$1;
var namespace = cljs.core.get.call(null,map__12822__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__12822__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__7060__auto___12909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___12909,out){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___12909,out){
return (function (state_12891){
var state_val_12892 = (state_12891[(1)]);
if((state_val_12892 === (7))){
var inst_12875 = (state_12891[(7)]);
var inst_12881 = (state_12891[(2)]);
var inst_12882 = cljs.core.async.put_BANG_.call(null,out,inst_12881);
var inst_12871 = inst_12875;
var state_12891__$1 = (function (){var statearr_12893 = state_12891;
(statearr_12893[(8)] = inst_12882);

(statearr_12893[(9)] = inst_12871);

return statearr_12893;
})();
var statearr_12894_12910 = state_12891__$1;
(statearr_12894_12910[(2)] = null);

(statearr_12894_12910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (6))){
var inst_12887 = (state_12891[(2)]);
var state_12891__$1 = state_12891;
var statearr_12895_12911 = state_12891__$1;
(statearr_12895_12911[(2)] = inst_12887);

(statearr_12895_12911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (5))){
var inst_12885 = cljs.core.async.close_BANG_.call(null,out);
var state_12891__$1 = state_12891;
var statearr_12896_12912 = state_12891__$1;
(statearr_12896_12912[(2)] = inst_12885);

(statearr_12896_12912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (4))){
var inst_12874 = (state_12891[(10)]);
var inst_12879 = figwheel.client.file_reloading.reload_js_file.call(null,inst_12874);
var state_12891__$1 = state_12891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12891__$1,(7),inst_12879);
} else {
if((state_val_12892 === (3))){
var inst_12889 = (state_12891[(2)]);
var state_12891__$1 = state_12891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12891__$1,inst_12889);
} else {
if((state_val_12892 === (2))){
var inst_12874 = (state_12891[(10)]);
var inst_12871 = (state_12891[(9)]);
var inst_12874__$1 = cljs.core.nth.call(null,inst_12871,(0),null);
var inst_12875 = cljs.core.nthnext.call(null,inst_12871,(1));
var inst_12876 = (inst_12874__$1 == null);
var inst_12877 = cljs.core.not.call(null,inst_12876);
var state_12891__$1 = (function (){var statearr_12897 = state_12891;
(statearr_12897[(10)] = inst_12874__$1);

(statearr_12897[(7)] = inst_12875);

return statearr_12897;
})();
if(inst_12877){
var statearr_12898_12913 = state_12891__$1;
(statearr_12898_12913[(1)] = (4));

} else {
var statearr_12899_12914 = state_12891__$1;
(statearr_12899_12914[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12892 === (1))){
var inst_12869 = cljs.core.nth.call(null,files,(0),null);
var inst_12870 = cljs.core.nthnext.call(null,files,(1));
var inst_12871 = files;
var state_12891__$1 = (function (){var statearr_12900 = state_12891;
(statearr_12900[(11)] = inst_12870);

(statearr_12900[(9)] = inst_12871);

(statearr_12900[(12)] = inst_12869);

return statearr_12900;
})();
var statearr_12901_12915 = state_12891__$1;
(statearr_12901_12915[(2)] = null);

(statearr_12901_12915[(1)] = (2));


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
});})(c__7060__auto___12909,out))
;
return ((function (switch__6998__auto__,c__7060__auto___12909,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto____0 = (function (){
var statearr_12905 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12905[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto__);

(statearr_12905[(1)] = (1));

return statearr_12905;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto____1 = (function (state_12891){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_12891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e12906){if((e12906 instanceof Object)){
var ex__7002__auto__ = e12906;
var statearr_12907_12916 = state_12891;
(statearr_12907_12916[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12917 = state_12891;
state_12891 = G__12917;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto__ = function(state_12891){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto____1.call(this,state_12891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___12909,out))
})();
var state__7062__auto__ = (function (){var statearr_12908 = f__7061__auto__.call(null);
(statearr_12908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___12909);

return statearr_12908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___12909,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__12918,p__12919){
var map__12922 = p__12918;
var map__12922__$1 = ((cljs.core.seq_QMARK_.call(null,map__12922))?cljs.core.apply.call(null,cljs.core.hash_map,map__12922):map__12922);
var opts = map__12922__$1;
var url_rewriter = cljs.core.get.call(null,map__12922__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__12923 = p__12919;
var map__12923__$1 = ((cljs.core.seq_QMARK_.call(null,map__12923))?cljs.core.apply.call(null,cljs.core.hash_map,map__12923):map__12923);
var file_msg = map__12923__$1;
var file = cljs.core.get.call(null,map__12923__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__12924){
var map__12927 = p__12924;
var map__12927__$1 = ((cljs.core.seq_QMARK_.call(null,map__12927))?cljs.core.apply.call(null,cljs.core.hash_map,map__12927):map__12927);
var file = cljs.core.get.call(null,map__12927__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__12927__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__4208__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4208__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4208__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e12928){var e = e12928;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__12933,p__12934){
var map__13135 = p__12933;
var map__13135__$1 = ((cljs.core.seq_QMARK_.call(null,map__13135))?cljs.core.apply.call(null,cljs.core.hash_map,map__13135):map__13135);
var opts = map__13135__$1;
var load_unchanged_files = cljs.core.get.call(null,map__13135__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__13135__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__13135__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__13136 = p__12934;
var map__13136__$1 = ((cljs.core.seq_QMARK_.call(null,map__13136))?cljs.core.apply.call(null,cljs.core.hash_map,map__13136):map__13136);
var msg = map__13136__$1;
var files = cljs.core.get.call(null,map__13136__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (state_13260){
var state_val_13261 = (state_13260[(1)]);
if((state_val_13261 === (7))){
var inst_13150 = (state_13260[(7)]);
var inst_13148 = (state_13260[(8)]);
var inst_13149 = (state_13260[(9)]);
var inst_13147 = (state_13260[(10)]);
var inst_13155 = cljs.core._nth.call(null,inst_13148,inst_13150);
var inst_13156 = figwheel.client.file_reloading.eval_body.call(null,inst_13155);
var inst_13157 = (inst_13150 + (1));
var tmp13262 = inst_13148;
var tmp13263 = inst_13149;
var tmp13264 = inst_13147;
var inst_13147__$1 = tmp13264;
var inst_13148__$1 = tmp13262;
var inst_13149__$1 = tmp13263;
var inst_13150__$1 = inst_13157;
var state_13260__$1 = (function (){var statearr_13265 = state_13260;
(statearr_13265[(11)] = inst_13156);

(statearr_13265[(7)] = inst_13150__$1);

(statearr_13265[(8)] = inst_13148__$1);

(statearr_13265[(9)] = inst_13149__$1);

(statearr_13265[(10)] = inst_13147__$1);

return statearr_13265;
})();
var statearr_13266_13335 = state_13260__$1;
(statearr_13266_13335[(2)] = null);

(statearr_13266_13335[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (20))){
var inst_13192 = (state_13260[(12)]);
var inst_13199 = (state_13260[(13)]);
var inst_13196 = (state_13260[(14)]);
var inst_13197 = (state_13260[(15)]);
var inst_13193 = (state_13260[(16)]);
var inst_13202 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_13204 = (function (){var files_not_loaded = inst_13199;
var res = inst_13197;
var res_SINGLEQUOTE_ = inst_13196;
var files_SINGLEQUOTE_ = inst_13193;
var all_files = inst_13192;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13192,inst_13199,inst_13196,inst_13197,inst_13193,inst_13202,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (p__13203){
var map__13267 = p__13203;
var map__13267__$1 = ((cljs.core.seq_QMARK_.call(null,map__13267))?cljs.core.apply.call(null,cljs.core.hash_map,map__13267):map__13267);
var file = cljs.core.get.call(null,map__13267__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__13267__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13192,inst_13199,inst_13196,inst_13197,inst_13193,inst_13202,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var inst_13205 = cljs.core.map.call(null,inst_13204,inst_13197);
var inst_13206 = cljs.core.pr_str.call(null,inst_13205);
var inst_13207 = figwheel.client.utils.log.call(null,inst_13206);
var inst_13208 = (function (){var files_not_loaded = inst_13199;
var res = inst_13197;
var res_SINGLEQUOTE_ = inst_13196;
var files_SINGLEQUOTE_ = inst_13193;
var all_files = inst_13192;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13192,inst_13199,inst_13196,inst_13197,inst_13193,inst_13202,inst_13204,inst_13205,inst_13206,inst_13207,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13192,inst_13199,inst_13196,inst_13197,inst_13193,inst_13202,inst_13204,inst_13205,inst_13206,inst_13207,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var inst_13209 = setTimeout(inst_13208,(10));
var state_13260__$1 = (function (){var statearr_13268 = state_13260;
(statearr_13268[(17)] = inst_13202);

(statearr_13268[(18)] = inst_13207);

return statearr_13268;
})();
var statearr_13269_13336 = state_13260__$1;
(statearr_13269_13336[(2)] = inst_13209);

(statearr_13269_13336[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (27))){
var inst_13219 = (state_13260[(19)]);
var state_13260__$1 = state_13260;
var statearr_13270_13337 = state_13260__$1;
(statearr_13270_13337[(2)] = inst_13219);

(statearr_13270_13337[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (1))){
var inst_13139 = (state_13260[(20)]);
var inst_13137 = before_jsload.call(null,files);
var inst_13138 = (function (){return ((function (inst_13139,inst_13137,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (p1__12929_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12929_SHARP_);
});
;})(inst_13139,inst_13137,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var inst_13139__$1 = cljs.core.filter.call(null,inst_13138,files);
var inst_13140 = cljs.core.not_empty.call(null,inst_13139__$1);
var state_13260__$1 = (function (){var statearr_13271 = state_13260;
(statearr_13271[(20)] = inst_13139__$1);

(statearr_13271[(21)] = inst_13137);

return statearr_13271;
})();
if(cljs.core.truth_(inst_13140)){
var statearr_13272_13338 = state_13260__$1;
(statearr_13272_13338[(1)] = (2));

} else {
var statearr_13273_13339 = state_13260__$1;
(statearr_13273_13339[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (24))){
var state_13260__$1 = state_13260;
var statearr_13274_13340 = state_13260__$1;
(statearr_13274_13340[(2)] = null);

(statearr_13274_13340[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (4))){
var inst_13184 = (state_13260[(2)]);
var inst_13185 = (function (){return ((function (inst_13184,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (p1__12930_SHARP_){
var and__4208__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__12930_SHARP_);
if(cljs.core.truth_(and__4208__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__12930_SHARP_));
} else {
return and__4208__auto__;
}
});
;})(inst_13184,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var inst_13186 = cljs.core.filter.call(null,inst_13185,files);
var state_13260__$1 = (function (){var statearr_13275 = state_13260;
(statearr_13275[(22)] = inst_13184);

(statearr_13275[(23)] = inst_13186);

return statearr_13275;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_13276_13341 = state_13260__$1;
(statearr_13276_13341[(1)] = (16));

} else {
var statearr_13277_13342 = state_13260__$1;
(statearr_13277_13342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (15))){
var inst_13174 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
var statearr_13278_13343 = state_13260__$1;
(statearr_13278_13343[(2)] = inst_13174);

(statearr_13278_13343[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (21))){
var state_13260__$1 = state_13260;
var statearr_13279_13344 = state_13260__$1;
(statearr_13279_13344[(2)] = null);

(statearr_13279_13344[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (31))){
var inst_13227 = (state_13260[(24)]);
var inst_13237 = (state_13260[(2)]);
var inst_13238 = cljs.core.not_empty.call(null,inst_13227);
var state_13260__$1 = (function (){var statearr_13280 = state_13260;
(statearr_13280[(25)] = inst_13237);

return statearr_13280;
})();
if(cljs.core.truth_(inst_13238)){
var statearr_13281_13345 = state_13260__$1;
(statearr_13281_13345[(1)] = (32));

} else {
var statearr_13282_13346 = state_13260__$1;
(statearr_13282_13346[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (32))){
var inst_13227 = (state_13260[(24)]);
var inst_13240 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13227);
var inst_13241 = cljs.core.pr_str.call(null,inst_13240);
var inst_13242 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_13241)].join('');
var inst_13243 = figwheel.client.utils.log.call(null,inst_13242);
var state_13260__$1 = state_13260;
var statearr_13283_13347 = state_13260__$1;
(statearr_13283_13347[(2)] = inst_13243);

(statearr_13283_13347[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (33))){
var state_13260__$1 = state_13260;
var statearr_13284_13348 = state_13260__$1;
(statearr_13284_13348[(2)] = null);

(statearr_13284_13348[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (13))){
var inst_13160 = (state_13260[(26)]);
var inst_13164 = cljs.core.chunk_first.call(null,inst_13160);
var inst_13165 = cljs.core.chunk_rest.call(null,inst_13160);
var inst_13166 = cljs.core.count.call(null,inst_13164);
var inst_13147 = inst_13165;
var inst_13148 = inst_13164;
var inst_13149 = inst_13166;
var inst_13150 = (0);
var state_13260__$1 = (function (){var statearr_13285 = state_13260;
(statearr_13285[(7)] = inst_13150);

(statearr_13285[(8)] = inst_13148);

(statearr_13285[(9)] = inst_13149);

(statearr_13285[(10)] = inst_13147);

return statearr_13285;
})();
var statearr_13286_13349 = state_13260__$1;
(statearr_13286_13349[(2)] = null);

(statearr_13286_13349[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (22))){
var inst_13199 = (state_13260[(13)]);
var inst_13212 = (state_13260[(2)]);
var inst_13213 = cljs.core.not_empty.call(null,inst_13199);
var state_13260__$1 = (function (){var statearr_13287 = state_13260;
(statearr_13287[(27)] = inst_13212);

return statearr_13287;
})();
if(cljs.core.truth_(inst_13213)){
var statearr_13288_13350 = state_13260__$1;
(statearr_13288_13350[(1)] = (23));

} else {
var statearr_13289_13351 = state_13260__$1;
(statearr_13289_13351[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (36))){
var state_13260__$1 = state_13260;
var statearr_13290_13352 = state_13260__$1;
(statearr_13290_13352[(2)] = null);

(statearr_13290_13352[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (29))){
var inst_13228 = (state_13260[(28)]);
var inst_13231 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13228);
var inst_13232 = cljs.core.pr_str.call(null,inst_13231);
var inst_13233 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_13232)].join('');
var inst_13234 = figwheel.client.utils.log.call(null,inst_13233);
var state_13260__$1 = state_13260;
var statearr_13291_13353 = state_13260__$1;
(statearr_13291_13353[(2)] = inst_13234);

(statearr_13291_13353[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (6))){
var inst_13181 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
var statearr_13292_13354 = state_13260__$1;
(statearr_13292_13354[(2)] = inst_13181);

(statearr_13292_13354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (28))){
var inst_13228 = (state_13260[(28)]);
var inst_13225 = (state_13260[(2)]);
var inst_13226 = cljs.core.get.call(null,inst_13225,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_13227 = cljs.core.get.call(null,inst_13225,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_13228__$1 = cljs.core.get.call(null,inst_13225,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_13229 = cljs.core.not_empty.call(null,inst_13228__$1);
var state_13260__$1 = (function (){var statearr_13293 = state_13260;
(statearr_13293[(24)] = inst_13227);

(statearr_13293[(29)] = inst_13226);

(statearr_13293[(28)] = inst_13228__$1);

return statearr_13293;
})();
if(cljs.core.truth_(inst_13229)){
var statearr_13294_13355 = state_13260__$1;
(statearr_13294_13355[(1)] = (29));

} else {
var statearr_13295_13356 = state_13260__$1;
(statearr_13295_13356[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (25))){
var inst_13258 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13260__$1,inst_13258);
} else {
if((state_val_13261 === (34))){
var inst_13226 = (state_13260[(29)]);
var inst_13246 = (state_13260[(2)]);
var inst_13247 = cljs.core.not_empty.call(null,inst_13226);
var state_13260__$1 = (function (){var statearr_13296 = state_13260;
(statearr_13296[(30)] = inst_13246);

return statearr_13296;
})();
if(cljs.core.truth_(inst_13247)){
var statearr_13297_13357 = state_13260__$1;
(statearr_13297_13357[(1)] = (35));

} else {
var statearr_13298_13358 = state_13260__$1;
(statearr_13298_13358[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (17))){
var inst_13186 = (state_13260[(23)]);
var state_13260__$1 = state_13260;
var statearr_13299_13359 = state_13260__$1;
(statearr_13299_13359[(2)] = inst_13186);

(statearr_13299_13359[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (3))){
var state_13260__$1 = state_13260;
var statearr_13300_13360 = state_13260__$1;
(statearr_13300_13360[(2)] = null);

(statearr_13300_13360[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (12))){
var inst_13177 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
var statearr_13301_13361 = state_13260__$1;
(statearr_13301_13361[(2)] = inst_13177);

(statearr_13301_13361[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (2))){
var inst_13139 = (state_13260[(20)]);
var inst_13146 = cljs.core.seq.call(null,inst_13139);
var inst_13147 = inst_13146;
var inst_13148 = null;
var inst_13149 = (0);
var inst_13150 = (0);
var state_13260__$1 = (function (){var statearr_13302 = state_13260;
(statearr_13302[(7)] = inst_13150);

(statearr_13302[(8)] = inst_13148);

(statearr_13302[(9)] = inst_13149);

(statearr_13302[(10)] = inst_13147);

return statearr_13302;
})();
var statearr_13303_13362 = state_13260__$1;
(statearr_13303_13362[(2)] = null);

(statearr_13303_13362[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (23))){
var inst_13219 = (state_13260[(19)]);
var inst_13192 = (state_13260[(12)]);
var inst_13199 = (state_13260[(13)]);
var inst_13196 = (state_13260[(14)]);
var inst_13197 = (state_13260[(15)]);
var inst_13193 = (state_13260[(16)]);
var inst_13215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_13218 = (function (){var files_not_loaded = inst_13199;
var res = inst_13197;
var res_SINGLEQUOTE_ = inst_13196;
var files_SINGLEQUOTE_ = inst_13193;
var all_files = inst_13192;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13219,inst_13192,inst_13199,inst_13196,inst_13197,inst_13193,inst_13215,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (p__13217){
var map__13304 = p__13217;
var map__13304__$1 = ((cljs.core.seq_QMARK_.call(null,map__13304))?cljs.core.apply.call(null,cljs.core.hash_map,map__13304):map__13304);
var meta_data = cljs.core.get.call(null,map__13304__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13219,inst_13192,inst_13199,inst_13196,inst_13197,inst_13193,inst_13215,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var inst_13219__$1 = cljs.core.group_by.call(null,inst_13218,inst_13199);
var inst_13220 = cljs.core.seq_QMARK_.call(null,inst_13219__$1);
var state_13260__$1 = (function (){var statearr_13305 = state_13260;
(statearr_13305[(19)] = inst_13219__$1);

(statearr_13305[(31)] = inst_13215);

return statearr_13305;
})();
if(inst_13220){
var statearr_13306_13363 = state_13260__$1;
(statearr_13306_13363[(1)] = (26));

} else {
var statearr_13307_13364 = state_13260__$1;
(statearr_13307_13364[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (35))){
var inst_13226 = (state_13260[(29)]);
var inst_13249 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_13226);
var inst_13250 = cljs.core.pr_str.call(null,inst_13249);
var inst_13251 = [cljs.core.str("not required: "),cljs.core.str(inst_13250)].join('');
var inst_13252 = figwheel.client.utils.log.call(null,inst_13251);
var state_13260__$1 = state_13260;
var statearr_13308_13365 = state_13260__$1;
(statearr_13308_13365[(2)] = inst_13252);

(statearr_13308_13365[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (19))){
var inst_13192 = (state_13260[(12)]);
var inst_13196 = (state_13260[(14)]);
var inst_13197 = (state_13260[(15)]);
var inst_13193 = (state_13260[(16)]);
var inst_13196__$1 = (state_13260[(2)]);
var inst_13197__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_13196__$1);
var inst_13198 = (function (){var res = inst_13197__$1;
var res_SINGLEQUOTE_ = inst_13196__$1;
var files_SINGLEQUOTE_ = inst_13193;
var all_files = inst_13192;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13192,inst_13196,inst_13197,inst_13193,inst_13196__$1,inst_13197__$1,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (p1__12932_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__12932_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_13192,inst_13196,inst_13197,inst_13193,inst_13196__$1,inst_13197__$1,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var inst_13199 = cljs.core.filter.call(null,inst_13198,inst_13196__$1);
var inst_13200 = cljs.core.not_empty.call(null,inst_13197__$1);
var state_13260__$1 = (function (){var statearr_13309 = state_13260;
(statearr_13309[(13)] = inst_13199);

(statearr_13309[(14)] = inst_13196__$1);

(statearr_13309[(15)] = inst_13197__$1);

return statearr_13309;
})();
if(cljs.core.truth_(inst_13200)){
var statearr_13310_13366 = state_13260__$1;
(statearr_13310_13366[(1)] = (20));

} else {
var statearr_13311_13367 = state_13260__$1;
(statearr_13311_13367[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (11))){
var state_13260__$1 = state_13260;
var statearr_13312_13368 = state_13260__$1;
(statearr_13312_13368[(2)] = null);

(statearr_13312_13368[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (9))){
var inst_13179 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
var statearr_13313_13369 = state_13260__$1;
(statearr_13313_13369[(2)] = inst_13179);

(statearr_13313_13369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (5))){
var inst_13150 = (state_13260[(7)]);
var inst_13149 = (state_13260[(9)]);
var inst_13152 = (inst_13150 < inst_13149);
var inst_13153 = inst_13152;
var state_13260__$1 = state_13260;
if(cljs.core.truth_(inst_13153)){
var statearr_13314_13370 = state_13260__$1;
(statearr_13314_13370[(1)] = (7));

} else {
var statearr_13315_13371 = state_13260__$1;
(statearr_13315_13371[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (14))){
var inst_13160 = (state_13260[(26)]);
var inst_13169 = cljs.core.first.call(null,inst_13160);
var inst_13170 = figwheel.client.file_reloading.eval_body.call(null,inst_13169);
var inst_13171 = cljs.core.next.call(null,inst_13160);
var inst_13147 = inst_13171;
var inst_13148 = null;
var inst_13149 = (0);
var inst_13150 = (0);
var state_13260__$1 = (function (){var statearr_13316 = state_13260;
(statearr_13316[(7)] = inst_13150);

(statearr_13316[(8)] = inst_13148);

(statearr_13316[(9)] = inst_13149);

(statearr_13316[(10)] = inst_13147);

(statearr_13316[(32)] = inst_13170);

return statearr_13316;
})();
var statearr_13317_13372 = state_13260__$1;
(statearr_13317_13372[(2)] = null);

(statearr_13317_13372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (26))){
var inst_13219 = (state_13260[(19)]);
var inst_13222 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13219);
var state_13260__$1 = state_13260;
var statearr_13318_13373 = state_13260__$1;
(statearr_13318_13373[(2)] = inst_13222);

(statearr_13318_13373[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (16))){
var inst_13186 = (state_13260[(23)]);
var inst_13188 = (function (){var all_files = inst_13186;
return ((function (all_files,inst_13186,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function (p1__12931_SHARP_){
return cljs.core.update_in.call(null,p1__12931_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_13186,state_val_13261,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var inst_13189 = cljs.core.map.call(null,inst_13188,inst_13186);
var state_13260__$1 = state_13260;
var statearr_13319_13374 = state_13260__$1;
(statearr_13319_13374[(2)] = inst_13189);

(statearr_13319_13374[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (30))){
var state_13260__$1 = state_13260;
var statearr_13320_13375 = state_13260__$1;
(statearr_13320_13375[(2)] = null);

(statearr_13320_13375[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (10))){
var inst_13160 = (state_13260[(26)]);
var inst_13162 = cljs.core.chunked_seq_QMARK_.call(null,inst_13160);
var state_13260__$1 = state_13260;
if(inst_13162){
var statearr_13321_13376 = state_13260__$1;
(statearr_13321_13376[(1)] = (13));

} else {
var statearr_13322_13377 = state_13260__$1;
(statearr_13322_13377[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (18))){
var inst_13192 = (state_13260[(12)]);
var inst_13193 = (state_13260[(16)]);
var inst_13192__$1 = (state_13260[(2)]);
var inst_13193__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_13192__$1);
var inst_13194 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_13193__$1);
var state_13260__$1 = (function (){var statearr_13323 = state_13260;
(statearr_13323[(12)] = inst_13192__$1);

(statearr_13323[(16)] = inst_13193__$1);

return statearr_13323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13260__$1,(19),inst_13194);
} else {
if((state_val_13261 === (37))){
var inst_13255 = (state_13260[(2)]);
var state_13260__$1 = state_13260;
var statearr_13324_13378 = state_13260__$1;
(statearr_13324_13378[(2)] = inst_13255);

(statearr_13324_13378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13261 === (8))){
var inst_13160 = (state_13260[(26)]);
var inst_13147 = (state_13260[(10)]);
var inst_13160__$1 = cljs.core.seq.call(null,inst_13147);
var state_13260__$1 = (function (){var statearr_13325 = state_13260;
(statearr_13325[(26)] = inst_13160__$1);

return statearr_13325;
})();
if(inst_13160__$1){
var statearr_13326_13379 = state_13260__$1;
(statearr_13326_13379[(1)] = (10));

} else {
var statearr_13327_13380 = state_13260__$1;
(statearr_13327_13380[(1)] = (11));

}

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
}
}
}
});})(c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
;
return ((function (switch__6998__auto__,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto____0 = (function (){
var statearr_13331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13331[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto__);

(statearr_13331[(1)] = (1));

return statearr_13331;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto____1 = (function (state_13260){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13332){if((e13332 instanceof Object)){
var ex__7002__auto__ = e13332;
var statearr_13333_13381 = state_13260;
(statearr_13333_13381[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13382 = state_13260;
state_13260 = G__13382;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto__ = function(state_13260){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto____1.call(this,state_13260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
})();
var state__7062__auto__ = (function (){var statearr_13334 = f__7061__auto__.call(null);
(statearr_13334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_13334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__,map__13135,map__13135__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__13136,map__13136__$1,msg,files))
);

return c__7060__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__13385,link){
var map__13387 = p__13385;
var map__13387__$1 = ((cljs.core.seq_QMARK_.call(null,map__13387))?cljs.core.apply.call(null,cljs.core.hash_map,map__13387):map__13387);
var file = cljs.core.get.call(null,map__13387__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__13387,map__13387__$1,file){
return (function (p1__13383_SHARP_,p2__13384_SHARP_){
if(cljs.core._EQ_.call(null,p1__13383_SHARP_,p2__13384_SHARP_)){
return p1__13383_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__13387,map__13387__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__13391){
var map__13392 = p__13391;
var map__13392__$1 = ((cljs.core.seq_QMARK_.call(null,map__13392))?cljs.core.apply.call(null,cljs.core.hash_map,map__13392):map__13392);
var current_url_length = cljs.core.get.call(null,map__13392__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__13392__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__13388_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__13388_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(){
var G__13394 = arguments.length;
switch (G__13394) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__13396){
var map__13398 = p__13396;
var map__13398__$1 = ((cljs.core.seq_QMARK_.call(null,map__13398))?cljs.core.apply.call(null,cljs.core.hash_map,map__13398):map__13398);
var f_data = map__13398__$1;
var request_url = cljs.core.get.call(null,map__13398__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__13398__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__4220__auto__ = request_url;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__13399,files_msg){
var map__13421 = p__13399;
var map__13421__$1 = ((cljs.core.seq_QMARK_.call(null,map__13421))?cljs.core.apply.call(null,cljs.core.hash_map,map__13421):map__13421);
var opts = map__13421__$1;
var on_cssload = cljs.core.get.call(null,map__13421__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__13422_13442 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__13423_13443 = null;
var count__13424_13444 = (0);
var i__13425_13445 = (0);
while(true){
if((i__13425_13445 < count__13424_13444)){
var f_13446 = cljs.core._nth.call(null,chunk__13423_13443,i__13425_13445);
figwheel.client.file_reloading.reload_css_file.call(null,f_13446);

var G__13447 = seq__13422_13442;
var G__13448 = chunk__13423_13443;
var G__13449 = count__13424_13444;
var G__13450 = (i__13425_13445 + (1));
seq__13422_13442 = G__13447;
chunk__13423_13443 = G__13448;
count__13424_13444 = G__13449;
i__13425_13445 = G__13450;
continue;
} else {
var temp__4126__auto___13451 = cljs.core.seq.call(null,seq__13422_13442);
if(temp__4126__auto___13451){
var seq__13422_13452__$1 = temp__4126__auto___13451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13422_13452__$1)){
var c__5005__auto___13453 = cljs.core.chunk_first.call(null,seq__13422_13452__$1);
var G__13454 = cljs.core.chunk_rest.call(null,seq__13422_13452__$1);
var G__13455 = c__5005__auto___13453;
var G__13456 = cljs.core.count.call(null,c__5005__auto___13453);
var G__13457 = (0);
seq__13422_13442 = G__13454;
chunk__13423_13443 = G__13455;
count__13424_13444 = G__13456;
i__13425_13445 = G__13457;
continue;
} else {
var f_13458 = cljs.core.first.call(null,seq__13422_13452__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_13458);

var G__13459 = cljs.core.next.call(null,seq__13422_13452__$1);
var G__13460 = null;
var G__13461 = (0);
var G__13462 = (0);
seq__13422_13442 = G__13459;
chunk__13423_13443 = G__13460;
count__13424_13444 = G__13461;
i__13425_13445 = G__13462;
continue;
}
} else {
}
}
break;
}

var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__,map__13421,map__13421__$1,opts,on_cssload){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__,map__13421,map__13421__$1,opts,on_cssload){
return (function (state_13432){
var state_val_13433 = (state_13432[(1)]);
if((state_val_13433 === (2))){
var inst_13428 = (state_13432[(2)]);
var inst_13429 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_13430 = on_cssload.call(null,inst_13429);
var state_13432__$1 = (function (){var statearr_13434 = state_13432;
(statearr_13434[(7)] = inst_13428);

return statearr_13434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13432__$1,inst_13430);
} else {
if((state_val_13433 === (1))){
var inst_13426 = cljs.core.async.timeout.call(null,(100));
var state_13432__$1 = state_13432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13432__$1,(2),inst_13426);
} else {
return null;
}
}
});})(c__7060__auto__,map__13421,map__13421__$1,opts,on_cssload))
;
return ((function (switch__6998__auto__,c__7060__auto__,map__13421,map__13421__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto____0 = (function (){
var statearr_13438 = [null,null,null,null,null,null,null,null];
(statearr_13438[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto__);

(statearr_13438[(1)] = (1));

return statearr_13438;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto____1 = (function (state_13432){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13439){if((e13439 instanceof Object)){
var ex__7002__auto__ = e13439;
var statearr_13440_13463 = state_13432;
(statearr_13440_13463[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13464 = state_13432;
state_13432 = G__13464;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto__ = function(state_13432){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto____1.call(this,state_13432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__,map__13421,map__13421__$1,opts,on_cssload))
})();
var state__7062__auto__ = (function (){var statearr_13441 = f__7061__auto__.call(null);
(statearr_13441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_13441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__,map__13421,map__13421__$1,opts,on_cssload))
);

return c__7060__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map