// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12743_12755 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12744_12756 = null;
var count__12745_12757 = (0);
var i__12746_12758 = (0);
while(true){
if((i__12746_12758 < count__12745_12757)){
var f_12759 = cljs.core._nth.call(null,chunk__12744_12756,i__12746_12758);
cljs.core.println.call(null,"  ",f_12759);

var G__12760 = seq__12743_12755;
var G__12761 = chunk__12744_12756;
var G__12762 = count__12745_12757;
var G__12763 = (i__12746_12758 + (1));
seq__12743_12755 = G__12760;
chunk__12744_12756 = G__12761;
count__12745_12757 = G__12762;
i__12746_12758 = G__12763;
continue;
} else {
var temp__4126__auto___12764 = cljs.core.seq.call(null,seq__12743_12755);
if(temp__4126__auto___12764){
var seq__12743_12765__$1 = temp__4126__auto___12764;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12743_12765__$1)){
var c__5005__auto___12766 = cljs.core.chunk_first.call(null,seq__12743_12765__$1);
var G__12767 = cljs.core.chunk_rest.call(null,seq__12743_12765__$1);
var G__12768 = c__5005__auto___12766;
var G__12769 = cljs.core.count.call(null,c__5005__auto___12766);
var G__12770 = (0);
seq__12743_12755 = G__12767;
chunk__12744_12756 = G__12768;
count__12745_12757 = G__12769;
i__12746_12758 = G__12770;
continue;
} else {
var f_12771 = cljs.core.first.call(null,seq__12743_12765__$1);
cljs.core.println.call(null,"  ",f_12771);

var G__12772 = cljs.core.next.call(null,seq__12743_12765__$1);
var G__12773 = null;
var G__12774 = (0);
var G__12775 = (0);
seq__12743_12755 = G__12772;
chunk__12744_12756 = G__12773;
count__12745_12757 = G__12774;
i__12746_12758 = G__12775;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__4220__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12747 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12748 = null;
var count__12749 = (0);
var i__12750 = (0);
while(true){
if((i__12750 < count__12749)){
var vec__12751 = cljs.core._nth.call(null,chunk__12748,i__12750);
var name = cljs.core.nth.call(null,vec__12751,(0),null);
var map__12752 = cljs.core.nth.call(null,vec__12751,(1),null);
var map__12752__$1 = ((cljs.core.seq_QMARK_.call(null,map__12752))?cljs.core.apply.call(null,cljs.core.hash_map,map__12752):map__12752);
var arglists = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12752__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12776 = seq__12747;
var G__12777 = chunk__12748;
var G__12778 = count__12749;
var G__12779 = (i__12750 + (1));
seq__12747 = G__12776;
chunk__12748 = G__12777;
count__12749 = G__12778;
i__12750 = G__12779;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__12747);
if(temp__4126__auto__){
var seq__12747__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12747__$1)){
var c__5005__auto__ = cljs.core.chunk_first.call(null,seq__12747__$1);
var G__12780 = cljs.core.chunk_rest.call(null,seq__12747__$1);
var G__12781 = c__5005__auto__;
var G__12782 = cljs.core.count.call(null,c__5005__auto__);
var G__12783 = (0);
seq__12747 = G__12780;
chunk__12748 = G__12781;
count__12749 = G__12782;
i__12750 = G__12783;
continue;
} else {
var vec__12753 = cljs.core.first.call(null,seq__12747__$1);
var name = cljs.core.nth.call(null,vec__12753,(0),null);
var map__12754 = cljs.core.nth.call(null,vec__12753,(1),null);
var map__12754__$1 = ((cljs.core.seq_QMARK_.call(null,map__12754))?cljs.core.apply.call(null,cljs.core.hash_map,map__12754):map__12754);
var arglists = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
var doc = cljs.core.get.call(null,map__12754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12784 = cljs.core.next.call(null,seq__12747__$1);
var G__12785 = null;
var G__12786 = (0);
var G__12787 = (0);
seq__12747 = G__12784;
chunk__12748 = G__12785;
count__12749 = G__12786;
i__12750 = G__12787;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map