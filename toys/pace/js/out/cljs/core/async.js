// Compiled by ClojureScript 0.0-3196 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t13515 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13515 = (function (f,fn_handler,meta13516){
this.f = f;
this.fn_handler = fn_handler;
this.meta13516 = meta13516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13515.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t13515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t13515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13517){
var self__ = this;
var _13517__$1 = this;
return self__.meta13516;
});

cljs.core.async.t13515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13517,meta13516__$1){
var self__ = this;
var _13517__$1 = this;
return (new cljs.core.async.t13515(self__.f,self__.fn_handler,meta13516__$1));
});

cljs.core.async.t13515.cljs$lang$type = true;

cljs.core.async.t13515.cljs$lang$ctorStr = "cljs.core.async/t13515";

cljs.core.async.t13515.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t13515");
});

cljs.core.async.__GT_t13515 = (function cljs$core$async$fn_handler_$___GT_t13515(f__$1,fn_handler__$1,meta13516){
return (new cljs.core.async.t13515(f__$1,fn_handler__$1,meta13516));
});

}

return (new cljs.core.async.t13515(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__13519 = buff;
if(G__13519){
var bit__4894__auto__ = null;
if(cljs.core.truth_((function (){var or__4220__auto__ = bit__4894__auto__;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return G__13519.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__13519.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13519);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13519);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__13521 = arguments.length;
switch (G__13521) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__13524 = arguments.length;
switch (G__13524) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13526 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13526);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13526,ret){
return (function (){
return fn1.call(null,val_13526);
});})(val_13526,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__13528 = arguments.length;
switch (G__13528) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5105__auto___13530 = n;
var x_13531 = (0);
while(true){
if((x_13531 < n__5105__auto___13530)){
(a[x_13531] = (0));

var G__13532 = (x_13531 + (1));
x_13531 = G__13532;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__13533 = (i + (1));
i = G__13533;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t13537 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13537 = (function (flag,alt_flag,meta13538){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13538 = meta13538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13537.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13537.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t13537.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t13537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13539){
var self__ = this;
var _13539__$1 = this;
return self__.meta13538;
});})(flag))
;

cljs.core.async.t13537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13539,meta13538__$1){
var self__ = this;
var _13539__$1 = this;
return (new cljs.core.async.t13537(self__.flag,self__.alt_flag,meta13538__$1));
});})(flag))
;

cljs.core.async.t13537.cljs$lang$type = true;

cljs.core.async.t13537.cljs$lang$ctorStr = "cljs.core.async/t13537";

cljs.core.async.t13537.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t13537");
});})(flag))
;

cljs.core.async.__GT_t13537 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t13537(flag__$1,alt_flag__$1,meta13538){
return (new cljs.core.async.t13537(flag__$1,alt_flag__$1,meta13538));
});})(flag))
;

}

return (new cljs.core.async.t13537(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t13543 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t13543 = (function (cb,flag,alt_handler,meta13544){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13544 = meta13544;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13543.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t13543.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t13543.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t13543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13545){
var self__ = this;
var _13545__$1 = this;
return self__.meta13544;
});

cljs.core.async.t13543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13545,meta13544__$1){
var self__ = this;
var _13545__$1 = this;
return (new cljs.core.async.t13543(self__.cb,self__.flag,self__.alt_handler,meta13544__$1));
});

cljs.core.async.t13543.cljs$lang$type = true;

cljs.core.async.t13543.cljs$lang$ctorStr = "cljs.core.async/t13543";

cljs.core.async.t13543.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t13543");
});

cljs.core.async.__GT_t13543 = (function cljs$core$async$alt_handler_$___GT_t13543(cb__$1,flag__$1,alt_handler__$1,meta13544){
return (new cljs.core.async.t13543(cb__$1,flag__$1,alt_handler__$1,meta13544));
});

}

return (new cljs.core.async.t13543(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13546_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13546_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13547_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13547_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4220__auto__ = wport;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return port;
}
})()], null));
} else {
var G__13548 = (i + (1));
i = G__13548;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4220__auto__ = ret;
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__4208__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4208__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4208__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5260__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5260__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13551){
var map__13552 = p__13551;
var map__13552__$1 = ((cljs.core.seq_QMARK_.call(null,map__13552))?cljs.core.apply.call(null,cljs.core.hash_map,map__13552):map__13552);
var opts = map__13552__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13549){
var G__13550 = cljs.core.first.call(null,seq13549);
var seq13549__$1 = cljs.core.next.call(null,seq13549);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13550,seq13549__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__13554 = arguments.length;
switch (G__13554) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7060__auto___13603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___13603){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___13603){
return (function (state_13578){
var state_val_13579 = (state_13578[(1)]);
if((state_val_13579 === (7))){
var inst_13574 = (state_13578[(2)]);
var state_13578__$1 = state_13578;
var statearr_13580_13604 = state_13578__$1;
(statearr_13580_13604[(2)] = inst_13574);

(statearr_13580_13604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (1))){
var state_13578__$1 = state_13578;
var statearr_13581_13605 = state_13578__$1;
(statearr_13581_13605[(2)] = null);

(statearr_13581_13605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (4))){
var inst_13557 = (state_13578[(7)]);
var inst_13557__$1 = (state_13578[(2)]);
var inst_13558 = (inst_13557__$1 == null);
var state_13578__$1 = (function (){var statearr_13582 = state_13578;
(statearr_13582[(7)] = inst_13557__$1);

return statearr_13582;
})();
if(cljs.core.truth_(inst_13558)){
var statearr_13583_13606 = state_13578__$1;
(statearr_13583_13606[(1)] = (5));

} else {
var statearr_13584_13607 = state_13578__$1;
(statearr_13584_13607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (13))){
var state_13578__$1 = state_13578;
var statearr_13585_13608 = state_13578__$1;
(statearr_13585_13608[(2)] = null);

(statearr_13585_13608[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (6))){
var inst_13557 = (state_13578[(7)]);
var state_13578__$1 = state_13578;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13578__$1,(11),to,inst_13557);
} else {
if((state_val_13579 === (3))){
var inst_13576 = (state_13578[(2)]);
var state_13578__$1 = state_13578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13578__$1,inst_13576);
} else {
if((state_val_13579 === (12))){
var state_13578__$1 = state_13578;
var statearr_13586_13609 = state_13578__$1;
(statearr_13586_13609[(2)] = null);

(statearr_13586_13609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (2))){
var state_13578__$1 = state_13578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13578__$1,(4),from);
} else {
if((state_val_13579 === (11))){
var inst_13567 = (state_13578[(2)]);
var state_13578__$1 = state_13578;
if(cljs.core.truth_(inst_13567)){
var statearr_13587_13610 = state_13578__$1;
(statearr_13587_13610[(1)] = (12));

} else {
var statearr_13588_13611 = state_13578__$1;
(statearr_13588_13611[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (9))){
var state_13578__$1 = state_13578;
var statearr_13589_13612 = state_13578__$1;
(statearr_13589_13612[(2)] = null);

(statearr_13589_13612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (5))){
var state_13578__$1 = state_13578;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13590_13613 = state_13578__$1;
(statearr_13590_13613[(1)] = (8));

} else {
var statearr_13591_13614 = state_13578__$1;
(statearr_13591_13614[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (14))){
var inst_13572 = (state_13578[(2)]);
var state_13578__$1 = state_13578;
var statearr_13592_13615 = state_13578__$1;
(statearr_13592_13615[(2)] = inst_13572);

(statearr_13592_13615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (10))){
var inst_13564 = (state_13578[(2)]);
var state_13578__$1 = state_13578;
var statearr_13593_13616 = state_13578__$1;
(statearr_13593_13616[(2)] = inst_13564);

(statearr_13593_13616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13579 === (8))){
var inst_13561 = cljs.core.async.close_BANG_.call(null,to);
var state_13578__$1 = state_13578;
var statearr_13594_13617 = state_13578__$1;
(statearr_13594_13617[(2)] = inst_13561);

(statearr_13594_13617[(1)] = (10));


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
});})(c__7060__auto___13603))
;
return ((function (switch__6998__auto__,c__7060__auto___13603){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_13598 = [null,null,null,null,null,null,null,null];
(statearr_13598[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_13598[(1)] = (1));

return statearr_13598;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_13578){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13599){if((e13599 instanceof Object)){
var ex__7002__auto__ = e13599;
var statearr_13600_13618 = state_13578;
(statearr_13600_13618[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13619 = state_13578;
state_13578 = G__13619;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_13578){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_13578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___13603))
})();
var state__7062__auto__ = (function (){var statearr_13601 = f__7061__auto__.call(null);
(statearr_13601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___13603);

return statearr_13601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___13603))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__13803){
var vec__13804 = p__13803;
var v = cljs.core.nth.call(null,vec__13804,(0),null);
var p = cljs.core.nth.call(null,vec__13804,(1),null);
var job = vec__13804;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7060__auto___13986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___13986,res,vec__13804,v,p,job,jobs,results){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___13986,res,vec__13804,v,p,job,jobs,results){
return (function (state_13809){
var state_val_13810 = (state_13809[(1)]);
if((state_val_13810 === (2))){
var inst_13806 = (state_13809[(2)]);
var inst_13807 = cljs.core.async.close_BANG_.call(null,res);
var state_13809__$1 = (function (){var statearr_13811 = state_13809;
(statearr_13811[(7)] = inst_13806);

return statearr_13811;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13809__$1,inst_13807);
} else {
if((state_val_13810 === (1))){
var state_13809__$1 = state_13809;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13809__$1,(2),res,v);
} else {
return null;
}
}
});})(c__7060__auto___13986,res,vec__13804,v,p,job,jobs,results))
;
return ((function (switch__6998__auto__,c__7060__auto___13986,res,vec__13804,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0 = (function (){
var statearr_13815 = [null,null,null,null,null,null,null,null];
(statearr_13815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__);

(statearr_13815[(1)] = (1));

return statearr_13815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1 = (function (state_13809){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13809);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13816){if((e13816 instanceof Object)){
var ex__7002__auto__ = e13816;
var statearr_13817_13987 = state_13809;
(statearr_13817_13987[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13809);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13988 = state_13809;
state_13809 = G__13988;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = function(state_13809){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1.call(this,state_13809);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___13986,res,vec__13804,v,p,job,jobs,results))
})();
var state__7062__auto__ = (function (){var statearr_13818 = f__7061__auto__.call(null);
(statearr_13818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___13986);

return statearr_13818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___13986,res,vec__13804,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13819){
var vec__13820 = p__13819;
var v = cljs.core.nth.call(null,vec__13820,(0),null);
var p = cljs.core.nth.call(null,vec__13820,(1),null);
var job = vec__13820;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5105__auto___13989 = n;
var __13990 = (0);
while(true){
if((__13990 < n__5105__auto___13989)){
var G__13821_13991 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13821_13991) {
case "async":
var c__7060__auto___13993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13990,c__7060__auto___13993,G__13821_13991,n__5105__auto___13989,jobs,results,process,async){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (__13990,c__7060__auto___13993,G__13821_13991,n__5105__auto___13989,jobs,results,process,async){
return (function (state_13834){
var state_val_13835 = (state_13834[(1)]);
if((state_val_13835 === (7))){
var inst_13830 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
var statearr_13836_13994 = state_13834__$1;
(statearr_13836_13994[(2)] = inst_13830);

(statearr_13836_13994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (6))){
var state_13834__$1 = state_13834;
var statearr_13837_13995 = state_13834__$1;
(statearr_13837_13995[(2)] = null);

(statearr_13837_13995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (5))){
var state_13834__$1 = state_13834;
var statearr_13838_13996 = state_13834__$1;
(statearr_13838_13996[(2)] = null);

(statearr_13838_13996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (4))){
var inst_13824 = (state_13834[(2)]);
var inst_13825 = async.call(null,inst_13824);
var state_13834__$1 = state_13834;
if(cljs.core.truth_(inst_13825)){
var statearr_13839_13997 = state_13834__$1;
(statearr_13839_13997[(1)] = (5));

} else {
var statearr_13840_13998 = state_13834__$1;
(statearr_13840_13998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13835 === (3))){
var inst_13832 = (state_13834[(2)]);
var state_13834__$1 = state_13834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13834__$1,inst_13832);
} else {
if((state_val_13835 === (2))){
var state_13834__$1 = state_13834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13834__$1,(4),jobs);
} else {
if((state_val_13835 === (1))){
var state_13834__$1 = state_13834;
var statearr_13841_13999 = state_13834__$1;
(statearr_13841_13999[(2)] = null);

(statearr_13841_13999[(1)] = (2));


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
});})(__13990,c__7060__auto___13993,G__13821_13991,n__5105__auto___13989,jobs,results,process,async))
;
return ((function (__13990,switch__6998__auto__,c__7060__auto___13993,G__13821_13991,n__5105__auto___13989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0 = (function (){
var statearr_13845 = [null,null,null,null,null,null,null];
(statearr_13845[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__);

(statearr_13845[(1)] = (1));

return statearr_13845;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1 = (function (state_13834){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13846){if((e13846 instanceof Object)){
var ex__7002__auto__ = e13846;
var statearr_13847_14000 = state_13834;
(statearr_13847_14000[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14001 = state_13834;
state_13834 = G__14001;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = function(state_13834){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1.call(this,state_13834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__;
})()
;})(__13990,switch__6998__auto__,c__7060__auto___13993,G__13821_13991,n__5105__auto___13989,jobs,results,process,async))
})();
var state__7062__auto__ = (function (){var statearr_13848 = f__7061__auto__.call(null);
(statearr_13848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___13993);

return statearr_13848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(__13990,c__7060__auto___13993,G__13821_13991,n__5105__auto___13989,jobs,results,process,async))
);


break;
case "compute":
var c__7060__auto___14002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13990,c__7060__auto___14002,G__13821_13991,n__5105__auto___13989,jobs,results,process,async){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (__13990,c__7060__auto___14002,G__13821_13991,n__5105__auto___13989,jobs,results,process,async){
return (function (state_13861){
var state_val_13862 = (state_13861[(1)]);
if((state_val_13862 === (7))){
var inst_13857 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
var statearr_13863_14003 = state_13861__$1;
(statearr_13863_14003[(2)] = inst_13857);

(statearr_13863_14003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (6))){
var state_13861__$1 = state_13861;
var statearr_13864_14004 = state_13861__$1;
(statearr_13864_14004[(2)] = null);

(statearr_13864_14004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (5))){
var state_13861__$1 = state_13861;
var statearr_13865_14005 = state_13861__$1;
(statearr_13865_14005[(2)] = null);

(statearr_13865_14005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (4))){
var inst_13851 = (state_13861[(2)]);
var inst_13852 = process.call(null,inst_13851);
var state_13861__$1 = state_13861;
if(cljs.core.truth_(inst_13852)){
var statearr_13866_14006 = state_13861__$1;
(statearr_13866_14006[(1)] = (5));

} else {
var statearr_13867_14007 = state_13861__$1;
(statearr_13867_14007[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13862 === (3))){
var inst_13859 = (state_13861[(2)]);
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13861__$1,inst_13859);
} else {
if((state_val_13862 === (2))){
var state_13861__$1 = state_13861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13861__$1,(4),jobs);
} else {
if((state_val_13862 === (1))){
var state_13861__$1 = state_13861;
var statearr_13868_14008 = state_13861__$1;
(statearr_13868_14008[(2)] = null);

(statearr_13868_14008[(1)] = (2));


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
});})(__13990,c__7060__auto___14002,G__13821_13991,n__5105__auto___13989,jobs,results,process,async))
;
return ((function (__13990,switch__6998__auto__,c__7060__auto___14002,G__13821_13991,n__5105__auto___13989,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0 = (function (){
var statearr_13872 = [null,null,null,null,null,null,null];
(statearr_13872[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__);

(statearr_13872[(1)] = (1));

return statearr_13872;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1 = (function (state_13861){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13873){if((e13873 instanceof Object)){
var ex__7002__auto__ = e13873;
var statearr_13874_14009 = state_13861;
(statearr_13874_14009[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14010 = state_13861;
state_13861 = G__14010;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = function(state_13861){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1.call(this,state_13861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__;
})()
;})(__13990,switch__6998__auto__,c__7060__auto___14002,G__13821_13991,n__5105__auto___13989,jobs,results,process,async))
})();
var state__7062__auto__ = (function (){var statearr_13875 = f__7061__auto__.call(null);
(statearr_13875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___14002);

return statearr_13875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(__13990,c__7060__auto___14002,G__13821_13991,n__5105__auto___13989,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14011 = (__13990 + (1));
__13990 = G__14011;
continue;
} else {
}
break;
}

var c__7060__auto___14012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___14012,jobs,results,process,async){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___14012,jobs,results,process,async){
return (function (state_13897){
var state_val_13898 = (state_13897[(1)]);
if((state_val_13898 === (9))){
var inst_13890 = (state_13897[(2)]);
var state_13897__$1 = (function (){var statearr_13899 = state_13897;
(statearr_13899[(7)] = inst_13890);

return statearr_13899;
})();
var statearr_13900_14013 = state_13897__$1;
(statearr_13900_14013[(2)] = null);

(statearr_13900_14013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13898 === (8))){
var inst_13883 = (state_13897[(8)]);
var inst_13888 = (state_13897[(2)]);
var state_13897__$1 = (function (){var statearr_13901 = state_13897;
(statearr_13901[(9)] = inst_13888);

return statearr_13901;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13897__$1,(9),results,inst_13883);
} else {
if((state_val_13898 === (7))){
var inst_13893 = (state_13897[(2)]);
var state_13897__$1 = state_13897;
var statearr_13902_14014 = state_13897__$1;
(statearr_13902_14014[(2)] = inst_13893);

(statearr_13902_14014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13898 === (6))){
var inst_13883 = (state_13897[(8)]);
var inst_13878 = (state_13897[(10)]);
var inst_13883__$1 = cljs.core.async.chan.call(null,(1));
var inst_13884 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13885 = [inst_13878,inst_13883__$1];
var inst_13886 = (new cljs.core.PersistentVector(null,2,(5),inst_13884,inst_13885,null));
var state_13897__$1 = (function (){var statearr_13903 = state_13897;
(statearr_13903[(8)] = inst_13883__$1);

return statearr_13903;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13897__$1,(8),jobs,inst_13886);
} else {
if((state_val_13898 === (5))){
var inst_13881 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13897__$1 = state_13897;
var statearr_13904_14015 = state_13897__$1;
(statearr_13904_14015[(2)] = inst_13881);

(statearr_13904_14015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13898 === (4))){
var inst_13878 = (state_13897[(10)]);
var inst_13878__$1 = (state_13897[(2)]);
var inst_13879 = (inst_13878__$1 == null);
var state_13897__$1 = (function (){var statearr_13905 = state_13897;
(statearr_13905[(10)] = inst_13878__$1);

return statearr_13905;
})();
if(cljs.core.truth_(inst_13879)){
var statearr_13906_14016 = state_13897__$1;
(statearr_13906_14016[(1)] = (5));

} else {
var statearr_13907_14017 = state_13897__$1;
(statearr_13907_14017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13898 === (3))){
var inst_13895 = (state_13897[(2)]);
var state_13897__$1 = state_13897;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13897__$1,inst_13895);
} else {
if((state_val_13898 === (2))){
var state_13897__$1 = state_13897;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13897__$1,(4),from);
} else {
if((state_val_13898 === (1))){
var state_13897__$1 = state_13897;
var statearr_13908_14018 = state_13897__$1;
(statearr_13908_14018[(2)] = null);

(statearr_13908_14018[(1)] = (2));


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
});})(c__7060__auto___14012,jobs,results,process,async))
;
return ((function (switch__6998__auto__,c__7060__auto___14012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0 = (function (){
var statearr_13912 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13912[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__);

(statearr_13912[(1)] = (1));

return statearr_13912;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1 = (function (state_13897){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13897);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13913){if((e13913 instanceof Object)){
var ex__7002__auto__ = e13913;
var statearr_13914_14019 = state_13897;
(statearr_13914_14019[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13897);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13913;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14020 = state_13897;
state_13897 = G__14020;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = function(state_13897){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1.call(this,state_13897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___14012,jobs,results,process,async))
})();
var state__7062__auto__ = (function (){var statearr_13915 = f__7061__auto__.call(null);
(statearr_13915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___14012);

return statearr_13915;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___14012,jobs,results,process,async))
);


var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__,jobs,results,process,async){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__,jobs,results,process,async){
return (function (state_13953){
var state_val_13954 = (state_13953[(1)]);
if((state_val_13954 === (7))){
var inst_13949 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13955_14021 = state_13953__$1;
(statearr_13955_14021[(2)] = inst_13949);

(statearr_13955_14021[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (20))){
var state_13953__$1 = state_13953;
var statearr_13956_14022 = state_13953__$1;
(statearr_13956_14022[(2)] = null);

(statearr_13956_14022[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (1))){
var state_13953__$1 = state_13953;
var statearr_13957_14023 = state_13953__$1;
(statearr_13957_14023[(2)] = null);

(statearr_13957_14023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (4))){
var inst_13918 = (state_13953[(7)]);
var inst_13918__$1 = (state_13953[(2)]);
var inst_13919 = (inst_13918__$1 == null);
var state_13953__$1 = (function (){var statearr_13958 = state_13953;
(statearr_13958[(7)] = inst_13918__$1);

return statearr_13958;
})();
if(cljs.core.truth_(inst_13919)){
var statearr_13959_14024 = state_13953__$1;
(statearr_13959_14024[(1)] = (5));

} else {
var statearr_13960_14025 = state_13953__$1;
(statearr_13960_14025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (15))){
var inst_13931 = (state_13953[(8)]);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13953__$1,(18),to,inst_13931);
} else {
if((state_val_13954 === (21))){
var inst_13944 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13961_14026 = state_13953__$1;
(statearr_13961_14026[(2)] = inst_13944);

(statearr_13961_14026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (13))){
var inst_13946 = (state_13953[(2)]);
var state_13953__$1 = (function (){var statearr_13962 = state_13953;
(statearr_13962[(9)] = inst_13946);

return statearr_13962;
})();
var statearr_13963_14027 = state_13953__$1;
(statearr_13963_14027[(2)] = null);

(statearr_13963_14027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (6))){
var inst_13918 = (state_13953[(7)]);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13953__$1,(11),inst_13918);
} else {
if((state_val_13954 === (17))){
var inst_13939 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
if(cljs.core.truth_(inst_13939)){
var statearr_13964_14028 = state_13953__$1;
(statearr_13964_14028[(1)] = (19));

} else {
var statearr_13965_14029 = state_13953__$1;
(statearr_13965_14029[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (3))){
var inst_13951 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13953__$1,inst_13951);
} else {
if((state_val_13954 === (12))){
var inst_13928 = (state_13953[(10)]);
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13953__$1,(14),inst_13928);
} else {
if((state_val_13954 === (2))){
var state_13953__$1 = state_13953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13953__$1,(4),results);
} else {
if((state_val_13954 === (19))){
var state_13953__$1 = state_13953;
var statearr_13966_14030 = state_13953__$1;
(statearr_13966_14030[(2)] = null);

(statearr_13966_14030[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (11))){
var inst_13928 = (state_13953[(2)]);
var state_13953__$1 = (function (){var statearr_13967 = state_13953;
(statearr_13967[(10)] = inst_13928);

return statearr_13967;
})();
var statearr_13968_14031 = state_13953__$1;
(statearr_13968_14031[(2)] = null);

(statearr_13968_14031[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (9))){
var state_13953__$1 = state_13953;
var statearr_13969_14032 = state_13953__$1;
(statearr_13969_14032[(2)] = null);

(statearr_13969_14032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (5))){
var state_13953__$1 = state_13953;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13970_14033 = state_13953__$1;
(statearr_13970_14033[(1)] = (8));

} else {
var statearr_13971_14034 = state_13953__$1;
(statearr_13971_14034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (14))){
var inst_13931 = (state_13953[(8)]);
var inst_13933 = (state_13953[(11)]);
var inst_13931__$1 = (state_13953[(2)]);
var inst_13932 = (inst_13931__$1 == null);
var inst_13933__$1 = cljs.core.not.call(null,inst_13932);
var state_13953__$1 = (function (){var statearr_13972 = state_13953;
(statearr_13972[(8)] = inst_13931__$1);

(statearr_13972[(11)] = inst_13933__$1);

return statearr_13972;
})();
if(inst_13933__$1){
var statearr_13973_14035 = state_13953__$1;
(statearr_13973_14035[(1)] = (15));

} else {
var statearr_13974_14036 = state_13953__$1;
(statearr_13974_14036[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (16))){
var inst_13933 = (state_13953[(11)]);
var state_13953__$1 = state_13953;
var statearr_13975_14037 = state_13953__$1;
(statearr_13975_14037[(2)] = inst_13933);

(statearr_13975_14037[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (10))){
var inst_13925 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13976_14038 = state_13953__$1;
(statearr_13976_14038[(2)] = inst_13925);

(statearr_13976_14038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (18))){
var inst_13936 = (state_13953[(2)]);
var state_13953__$1 = state_13953;
var statearr_13977_14039 = state_13953__$1;
(statearr_13977_14039[(2)] = inst_13936);

(statearr_13977_14039[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13954 === (8))){
var inst_13922 = cljs.core.async.close_BANG_.call(null,to);
var state_13953__$1 = state_13953;
var statearr_13978_14040 = state_13953__$1;
(statearr_13978_14040[(2)] = inst_13922);

(statearr_13978_14040[(1)] = (10));


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
});})(c__7060__auto__,jobs,results,process,async))
;
return ((function (switch__6998__auto__,c__7060__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0 = (function (){
var statearr_13982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__);

(statearr_13982[(1)] = (1));

return statearr_13982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1 = (function (state_13953){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_13953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e13983){if((e13983 instanceof Object)){
var ex__7002__auto__ = e13983;
var statearr_13984_14041 = state_13953;
(statearr_13984_14041[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14042 = state_13953;
state_13953 = G__14042;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__ = function(state_13953){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1.call(this,state_13953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__6999__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__,jobs,results,process,async))
})();
var state__7062__auto__ = (function (){var statearr_13985 = f__7061__auto__.call(null);
(statearr_13985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_13985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__,jobs,results,process,async))
);

return c__7060__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__14044 = arguments.length;
switch (G__14044) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__14047 = arguments.length;
switch (G__14047) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__14050 = arguments.length;
switch (G__14050) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7060__auto___14102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___14102,tc,fc){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___14102,tc,fc){
return (function (state_14076){
var state_val_14077 = (state_14076[(1)]);
if((state_val_14077 === (7))){
var inst_14072 = (state_14076[(2)]);
var state_14076__$1 = state_14076;
var statearr_14078_14103 = state_14076__$1;
(statearr_14078_14103[(2)] = inst_14072);

(statearr_14078_14103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (1))){
var state_14076__$1 = state_14076;
var statearr_14079_14104 = state_14076__$1;
(statearr_14079_14104[(2)] = null);

(statearr_14079_14104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (4))){
var inst_14053 = (state_14076[(7)]);
var inst_14053__$1 = (state_14076[(2)]);
var inst_14054 = (inst_14053__$1 == null);
var state_14076__$1 = (function (){var statearr_14080 = state_14076;
(statearr_14080[(7)] = inst_14053__$1);

return statearr_14080;
})();
if(cljs.core.truth_(inst_14054)){
var statearr_14081_14105 = state_14076__$1;
(statearr_14081_14105[(1)] = (5));

} else {
var statearr_14082_14106 = state_14076__$1;
(statearr_14082_14106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (13))){
var state_14076__$1 = state_14076;
var statearr_14083_14107 = state_14076__$1;
(statearr_14083_14107[(2)] = null);

(statearr_14083_14107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (6))){
var inst_14053 = (state_14076[(7)]);
var inst_14059 = p.call(null,inst_14053);
var state_14076__$1 = state_14076;
if(cljs.core.truth_(inst_14059)){
var statearr_14084_14108 = state_14076__$1;
(statearr_14084_14108[(1)] = (9));

} else {
var statearr_14085_14109 = state_14076__$1;
(statearr_14085_14109[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (3))){
var inst_14074 = (state_14076[(2)]);
var state_14076__$1 = state_14076;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14076__$1,inst_14074);
} else {
if((state_val_14077 === (12))){
var state_14076__$1 = state_14076;
var statearr_14086_14110 = state_14076__$1;
(statearr_14086_14110[(2)] = null);

(statearr_14086_14110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (2))){
var state_14076__$1 = state_14076;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14076__$1,(4),ch);
} else {
if((state_val_14077 === (11))){
var inst_14053 = (state_14076[(7)]);
var inst_14063 = (state_14076[(2)]);
var state_14076__$1 = state_14076;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14076__$1,(8),inst_14063,inst_14053);
} else {
if((state_val_14077 === (9))){
var state_14076__$1 = state_14076;
var statearr_14087_14111 = state_14076__$1;
(statearr_14087_14111[(2)] = tc);

(statearr_14087_14111[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (5))){
var inst_14056 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14057 = cljs.core.async.close_BANG_.call(null,fc);
var state_14076__$1 = (function (){var statearr_14088 = state_14076;
(statearr_14088[(8)] = inst_14056);

return statearr_14088;
})();
var statearr_14089_14112 = state_14076__$1;
(statearr_14089_14112[(2)] = inst_14057);

(statearr_14089_14112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (14))){
var inst_14070 = (state_14076[(2)]);
var state_14076__$1 = state_14076;
var statearr_14090_14113 = state_14076__$1;
(statearr_14090_14113[(2)] = inst_14070);

(statearr_14090_14113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (10))){
var state_14076__$1 = state_14076;
var statearr_14091_14114 = state_14076__$1;
(statearr_14091_14114[(2)] = fc);

(statearr_14091_14114[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14077 === (8))){
var inst_14065 = (state_14076[(2)]);
var state_14076__$1 = state_14076;
if(cljs.core.truth_(inst_14065)){
var statearr_14092_14115 = state_14076__$1;
(statearr_14092_14115[(1)] = (12));

} else {
var statearr_14093_14116 = state_14076__$1;
(statearr_14093_14116[(1)] = (13));

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
});})(c__7060__auto___14102,tc,fc))
;
return ((function (switch__6998__auto__,c__7060__auto___14102,tc,fc){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_14097 = [null,null,null,null,null,null,null,null,null];
(statearr_14097[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_14097[(1)] = (1));

return statearr_14097;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_14076){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_14076);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e14098){if((e14098 instanceof Object)){
var ex__7002__auto__ = e14098;
var statearr_14099_14117 = state_14076;
(statearr_14099_14117[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14076);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14118 = state_14076;
state_14076 = G__14118;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_14076){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_14076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___14102,tc,fc))
})();
var state__7062__auto__ = (function (){var statearr_14100 = f__7061__auto__.call(null);
(statearr_14100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___14102);

return statearr_14100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___14102,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__){
return (function (state_14165){
var state_val_14166 = (state_14165[(1)]);
if((state_val_14166 === (7))){
var inst_14161 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
var statearr_14167_14183 = state_14165__$1;
(statearr_14167_14183[(2)] = inst_14161);

(statearr_14167_14183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (6))){
var inst_14154 = (state_14165[(7)]);
var inst_14151 = (state_14165[(8)]);
var inst_14158 = f.call(null,inst_14151,inst_14154);
var inst_14151__$1 = inst_14158;
var state_14165__$1 = (function (){var statearr_14168 = state_14165;
(statearr_14168[(8)] = inst_14151__$1);

return statearr_14168;
})();
var statearr_14169_14184 = state_14165__$1;
(statearr_14169_14184[(2)] = null);

(statearr_14169_14184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (5))){
var inst_14151 = (state_14165[(8)]);
var state_14165__$1 = state_14165;
var statearr_14170_14185 = state_14165__$1;
(statearr_14170_14185[(2)] = inst_14151);

(statearr_14170_14185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (4))){
var inst_14154 = (state_14165[(7)]);
var inst_14154__$1 = (state_14165[(2)]);
var inst_14155 = (inst_14154__$1 == null);
var state_14165__$1 = (function (){var statearr_14171 = state_14165;
(statearr_14171[(7)] = inst_14154__$1);

return statearr_14171;
})();
if(cljs.core.truth_(inst_14155)){
var statearr_14172_14186 = state_14165__$1;
(statearr_14172_14186[(1)] = (5));

} else {
var statearr_14173_14187 = state_14165__$1;
(statearr_14173_14187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14166 === (3))){
var inst_14163 = (state_14165[(2)]);
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14165__$1,inst_14163);
} else {
if((state_val_14166 === (2))){
var state_14165__$1 = state_14165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14165__$1,(4),ch);
} else {
if((state_val_14166 === (1))){
var inst_14151 = init;
var state_14165__$1 = (function (){var statearr_14174 = state_14165;
(statearr_14174[(8)] = inst_14151);

return statearr_14174;
})();
var statearr_14175_14188 = state_14165__$1;
(statearr_14175_14188[(2)] = null);

(statearr_14175_14188[(1)] = (2));


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
});})(c__7060__auto__))
;
return ((function (switch__6998__auto__,c__7060__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__6999__auto__ = null;
var cljs$core$async$reduce_$_state_machine__6999__auto____0 = (function (){
var statearr_14179 = [null,null,null,null,null,null,null,null,null];
(statearr_14179[(0)] = cljs$core$async$reduce_$_state_machine__6999__auto__);

(statearr_14179[(1)] = (1));

return statearr_14179;
});
var cljs$core$async$reduce_$_state_machine__6999__auto____1 = (function (state_14165){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_14165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e14180){if((e14180 instanceof Object)){
var ex__7002__auto__ = e14180;
var statearr_14181_14189 = state_14165;
(statearr_14181_14189[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14190 = state_14165;
state_14165 = G__14190;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__6999__auto__ = function(state_14165){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__6999__auto____1.call(this,state_14165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__6999__auto____0;
cljs$core$async$reduce_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__6999__auto____1;
return cljs$core$async$reduce_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__))
})();
var state__7062__auto__ = (function (){var statearr_14182 = f__7061__auto__.call(null);
(statearr_14182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_14182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__))
);

return c__7060__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__14192 = arguments.length;
switch (G__14192) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__){
return (function (state_14217){
var state_val_14218 = (state_14217[(1)]);
if((state_val_14218 === (7))){
var inst_14199 = (state_14217[(2)]);
var state_14217__$1 = state_14217;
var statearr_14219_14243 = state_14217__$1;
(statearr_14219_14243[(2)] = inst_14199);

(statearr_14219_14243[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (1))){
var inst_14193 = cljs.core.seq.call(null,coll);
var inst_14194 = inst_14193;
var state_14217__$1 = (function (){var statearr_14220 = state_14217;
(statearr_14220[(7)] = inst_14194);

return statearr_14220;
})();
var statearr_14221_14244 = state_14217__$1;
(statearr_14221_14244[(2)] = null);

(statearr_14221_14244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (4))){
var inst_14194 = (state_14217[(7)]);
var inst_14197 = cljs.core.first.call(null,inst_14194);
var state_14217__$1 = state_14217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14217__$1,(7),ch,inst_14197);
} else {
if((state_val_14218 === (13))){
var inst_14211 = (state_14217[(2)]);
var state_14217__$1 = state_14217;
var statearr_14222_14245 = state_14217__$1;
(statearr_14222_14245[(2)] = inst_14211);

(statearr_14222_14245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (6))){
var inst_14202 = (state_14217[(2)]);
var state_14217__$1 = state_14217;
if(cljs.core.truth_(inst_14202)){
var statearr_14223_14246 = state_14217__$1;
(statearr_14223_14246[(1)] = (8));

} else {
var statearr_14224_14247 = state_14217__$1;
(statearr_14224_14247[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (3))){
var inst_14215 = (state_14217[(2)]);
var state_14217__$1 = state_14217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14217__$1,inst_14215);
} else {
if((state_val_14218 === (12))){
var state_14217__$1 = state_14217;
var statearr_14225_14248 = state_14217__$1;
(statearr_14225_14248[(2)] = null);

(statearr_14225_14248[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (2))){
var inst_14194 = (state_14217[(7)]);
var state_14217__$1 = state_14217;
if(cljs.core.truth_(inst_14194)){
var statearr_14226_14249 = state_14217__$1;
(statearr_14226_14249[(1)] = (4));

} else {
var statearr_14227_14250 = state_14217__$1;
(statearr_14227_14250[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (11))){
var inst_14208 = cljs.core.async.close_BANG_.call(null,ch);
var state_14217__$1 = state_14217;
var statearr_14228_14251 = state_14217__$1;
(statearr_14228_14251[(2)] = inst_14208);

(statearr_14228_14251[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (9))){
var state_14217__$1 = state_14217;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14229_14252 = state_14217__$1;
(statearr_14229_14252[(1)] = (11));

} else {
var statearr_14230_14253 = state_14217__$1;
(statearr_14230_14253[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (5))){
var inst_14194 = (state_14217[(7)]);
var state_14217__$1 = state_14217;
var statearr_14231_14254 = state_14217__$1;
(statearr_14231_14254[(2)] = inst_14194);

(statearr_14231_14254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (10))){
var inst_14213 = (state_14217[(2)]);
var state_14217__$1 = state_14217;
var statearr_14232_14255 = state_14217__$1;
(statearr_14232_14255[(2)] = inst_14213);

(statearr_14232_14255[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14218 === (8))){
var inst_14194 = (state_14217[(7)]);
var inst_14204 = cljs.core.next.call(null,inst_14194);
var inst_14194__$1 = inst_14204;
var state_14217__$1 = (function (){var statearr_14233 = state_14217;
(statearr_14233[(7)] = inst_14194__$1);

return statearr_14233;
})();
var statearr_14234_14256 = state_14217__$1;
(statearr_14234_14256[(2)] = null);

(statearr_14234_14256[(1)] = (2));


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
});})(c__7060__auto__))
;
return ((function (switch__6998__auto__,c__7060__auto__){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_14238 = [null,null,null,null,null,null,null,null];
(statearr_14238[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_14238[(1)] = (1));

return statearr_14238;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_14217){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_14217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e14239){if((e14239 instanceof Object)){
var ex__7002__auto__ = e14239;
var statearr_14240_14257 = state_14217;
(statearr_14240_14257[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14258 = state_14217;
state_14217 = G__14258;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_14217){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_14217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__))
})();
var state__7062__auto__ = (function (){var statearr_14241 = f__7061__auto__.call(null);
(statearr_14241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_14241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__))
);

return c__7060__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj14260 = {};
return obj14260;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4208__auto__ = _;
if(and__4208__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4856__auto__ = (((_ == null))?null:_);
return (function (){var or__4220__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj14262 = {};
return obj14262;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t14484 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14484 = (function (cs,ch,mult,meta14485){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14485 = meta14485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14484.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t14484.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t14484.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t14484.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t14484.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14484.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t14484.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14486){
var self__ = this;
var _14486__$1 = this;
return self__.meta14485;
});})(cs))
;

cljs.core.async.t14484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14486,meta14485__$1){
var self__ = this;
var _14486__$1 = this;
return (new cljs.core.async.t14484(self__.cs,self__.ch,self__.mult,meta14485__$1));
});})(cs))
;

cljs.core.async.t14484.cljs$lang$type = true;

cljs.core.async.t14484.cljs$lang$ctorStr = "cljs.core.async/t14484";

cljs.core.async.t14484.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14484");
});})(cs))
;

cljs.core.async.__GT_t14484 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t14484(cs__$1,ch__$1,mult__$1,meta14485){
return (new cljs.core.async.t14484(cs__$1,ch__$1,mult__$1,meta14485));
});})(cs))
;

}

return (new cljs.core.async.t14484(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7060__auto___14705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___14705,cs,m,dchan,dctr,done){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___14705,cs,m,dchan,dctr,done){
return (function (state_14617){
var state_val_14618 = (state_14617[(1)]);
if((state_val_14618 === (7))){
var inst_14613 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14619_14706 = state_14617__$1;
(statearr_14619_14706[(2)] = inst_14613);

(statearr_14619_14706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (20))){
var inst_14518 = (state_14617[(7)]);
var inst_14528 = cljs.core.first.call(null,inst_14518);
var inst_14529 = cljs.core.nth.call(null,inst_14528,(0),null);
var inst_14530 = cljs.core.nth.call(null,inst_14528,(1),null);
var state_14617__$1 = (function (){var statearr_14620 = state_14617;
(statearr_14620[(8)] = inst_14529);

return statearr_14620;
})();
if(cljs.core.truth_(inst_14530)){
var statearr_14621_14707 = state_14617__$1;
(statearr_14621_14707[(1)] = (22));

} else {
var statearr_14622_14708 = state_14617__$1;
(statearr_14622_14708[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (27))){
var inst_14565 = (state_14617[(9)]);
var inst_14560 = (state_14617[(10)]);
var inst_14558 = (state_14617[(11)]);
var inst_14489 = (state_14617[(12)]);
var inst_14565__$1 = cljs.core._nth.call(null,inst_14558,inst_14560);
var inst_14566 = cljs.core.async.put_BANG_.call(null,inst_14565__$1,inst_14489,done);
var state_14617__$1 = (function (){var statearr_14623 = state_14617;
(statearr_14623[(9)] = inst_14565__$1);

return statearr_14623;
})();
if(cljs.core.truth_(inst_14566)){
var statearr_14624_14709 = state_14617__$1;
(statearr_14624_14709[(1)] = (30));

} else {
var statearr_14625_14710 = state_14617__$1;
(statearr_14625_14710[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (1))){
var state_14617__$1 = state_14617;
var statearr_14626_14711 = state_14617__$1;
(statearr_14626_14711[(2)] = null);

(statearr_14626_14711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (24))){
var inst_14518 = (state_14617[(7)]);
var inst_14535 = (state_14617[(2)]);
var inst_14536 = cljs.core.next.call(null,inst_14518);
var inst_14498 = inst_14536;
var inst_14499 = null;
var inst_14500 = (0);
var inst_14501 = (0);
var state_14617__$1 = (function (){var statearr_14627 = state_14617;
(statearr_14627[(13)] = inst_14535);

(statearr_14627[(14)] = inst_14499);

(statearr_14627[(15)] = inst_14500);

(statearr_14627[(16)] = inst_14498);

(statearr_14627[(17)] = inst_14501);

return statearr_14627;
})();
var statearr_14628_14712 = state_14617__$1;
(statearr_14628_14712[(2)] = null);

(statearr_14628_14712[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (39))){
var state_14617__$1 = state_14617;
var statearr_14632_14713 = state_14617__$1;
(statearr_14632_14713[(2)] = null);

(statearr_14632_14713[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (4))){
var inst_14489 = (state_14617[(12)]);
var inst_14489__$1 = (state_14617[(2)]);
var inst_14490 = (inst_14489__$1 == null);
var state_14617__$1 = (function (){var statearr_14633 = state_14617;
(statearr_14633[(12)] = inst_14489__$1);

return statearr_14633;
})();
if(cljs.core.truth_(inst_14490)){
var statearr_14634_14714 = state_14617__$1;
(statearr_14634_14714[(1)] = (5));

} else {
var statearr_14635_14715 = state_14617__$1;
(statearr_14635_14715[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (15))){
var inst_14499 = (state_14617[(14)]);
var inst_14500 = (state_14617[(15)]);
var inst_14498 = (state_14617[(16)]);
var inst_14501 = (state_14617[(17)]);
var inst_14514 = (state_14617[(2)]);
var inst_14515 = (inst_14501 + (1));
var tmp14629 = inst_14499;
var tmp14630 = inst_14500;
var tmp14631 = inst_14498;
var inst_14498__$1 = tmp14631;
var inst_14499__$1 = tmp14629;
var inst_14500__$1 = tmp14630;
var inst_14501__$1 = inst_14515;
var state_14617__$1 = (function (){var statearr_14636 = state_14617;
(statearr_14636[(18)] = inst_14514);

(statearr_14636[(14)] = inst_14499__$1);

(statearr_14636[(15)] = inst_14500__$1);

(statearr_14636[(16)] = inst_14498__$1);

(statearr_14636[(17)] = inst_14501__$1);

return statearr_14636;
})();
var statearr_14637_14716 = state_14617__$1;
(statearr_14637_14716[(2)] = null);

(statearr_14637_14716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (21))){
var inst_14539 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14641_14717 = state_14617__$1;
(statearr_14641_14717[(2)] = inst_14539);

(statearr_14641_14717[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (31))){
var inst_14565 = (state_14617[(9)]);
var inst_14569 = done.call(null,null);
var inst_14570 = cljs.core.async.untap_STAR_.call(null,m,inst_14565);
var state_14617__$1 = (function (){var statearr_14642 = state_14617;
(statearr_14642[(19)] = inst_14569);

return statearr_14642;
})();
var statearr_14643_14718 = state_14617__$1;
(statearr_14643_14718[(2)] = inst_14570);

(statearr_14643_14718[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (32))){
var inst_14560 = (state_14617[(10)]);
var inst_14558 = (state_14617[(11)]);
var inst_14557 = (state_14617[(20)]);
var inst_14559 = (state_14617[(21)]);
var inst_14572 = (state_14617[(2)]);
var inst_14573 = (inst_14560 + (1));
var tmp14638 = inst_14558;
var tmp14639 = inst_14557;
var tmp14640 = inst_14559;
var inst_14557__$1 = tmp14639;
var inst_14558__$1 = tmp14638;
var inst_14559__$1 = tmp14640;
var inst_14560__$1 = inst_14573;
var state_14617__$1 = (function (){var statearr_14644 = state_14617;
(statearr_14644[(10)] = inst_14560__$1);

(statearr_14644[(11)] = inst_14558__$1);

(statearr_14644[(20)] = inst_14557__$1);

(statearr_14644[(21)] = inst_14559__$1);

(statearr_14644[(22)] = inst_14572);

return statearr_14644;
})();
var statearr_14645_14719 = state_14617__$1;
(statearr_14645_14719[(2)] = null);

(statearr_14645_14719[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (40))){
var inst_14585 = (state_14617[(23)]);
var inst_14589 = done.call(null,null);
var inst_14590 = cljs.core.async.untap_STAR_.call(null,m,inst_14585);
var state_14617__$1 = (function (){var statearr_14646 = state_14617;
(statearr_14646[(24)] = inst_14589);

return statearr_14646;
})();
var statearr_14647_14720 = state_14617__$1;
(statearr_14647_14720[(2)] = inst_14590);

(statearr_14647_14720[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (33))){
var inst_14576 = (state_14617[(25)]);
var inst_14578 = cljs.core.chunked_seq_QMARK_.call(null,inst_14576);
var state_14617__$1 = state_14617;
if(inst_14578){
var statearr_14648_14721 = state_14617__$1;
(statearr_14648_14721[(1)] = (36));

} else {
var statearr_14649_14722 = state_14617__$1;
(statearr_14649_14722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (13))){
var inst_14508 = (state_14617[(26)]);
var inst_14511 = cljs.core.async.close_BANG_.call(null,inst_14508);
var state_14617__$1 = state_14617;
var statearr_14650_14723 = state_14617__$1;
(statearr_14650_14723[(2)] = inst_14511);

(statearr_14650_14723[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (22))){
var inst_14529 = (state_14617[(8)]);
var inst_14532 = cljs.core.async.close_BANG_.call(null,inst_14529);
var state_14617__$1 = state_14617;
var statearr_14651_14724 = state_14617__$1;
(statearr_14651_14724[(2)] = inst_14532);

(statearr_14651_14724[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (36))){
var inst_14576 = (state_14617[(25)]);
var inst_14580 = cljs.core.chunk_first.call(null,inst_14576);
var inst_14581 = cljs.core.chunk_rest.call(null,inst_14576);
var inst_14582 = cljs.core.count.call(null,inst_14580);
var inst_14557 = inst_14581;
var inst_14558 = inst_14580;
var inst_14559 = inst_14582;
var inst_14560 = (0);
var state_14617__$1 = (function (){var statearr_14652 = state_14617;
(statearr_14652[(10)] = inst_14560);

(statearr_14652[(11)] = inst_14558);

(statearr_14652[(20)] = inst_14557);

(statearr_14652[(21)] = inst_14559);

return statearr_14652;
})();
var statearr_14653_14725 = state_14617__$1;
(statearr_14653_14725[(2)] = null);

(statearr_14653_14725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (41))){
var inst_14576 = (state_14617[(25)]);
var inst_14592 = (state_14617[(2)]);
var inst_14593 = cljs.core.next.call(null,inst_14576);
var inst_14557 = inst_14593;
var inst_14558 = null;
var inst_14559 = (0);
var inst_14560 = (0);
var state_14617__$1 = (function (){var statearr_14654 = state_14617;
(statearr_14654[(27)] = inst_14592);

(statearr_14654[(10)] = inst_14560);

(statearr_14654[(11)] = inst_14558);

(statearr_14654[(20)] = inst_14557);

(statearr_14654[(21)] = inst_14559);

return statearr_14654;
})();
var statearr_14655_14726 = state_14617__$1;
(statearr_14655_14726[(2)] = null);

(statearr_14655_14726[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (43))){
var state_14617__$1 = state_14617;
var statearr_14656_14727 = state_14617__$1;
(statearr_14656_14727[(2)] = null);

(statearr_14656_14727[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (29))){
var inst_14601 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14657_14728 = state_14617__$1;
(statearr_14657_14728[(2)] = inst_14601);

(statearr_14657_14728[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (44))){
var inst_14610 = (state_14617[(2)]);
var state_14617__$1 = (function (){var statearr_14658 = state_14617;
(statearr_14658[(28)] = inst_14610);

return statearr_14658;
})();
var statearr_14659_14729 = state_14617__$1;
(statearr_14659_14729[(2)] = null);

(statearr_14659_14729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (6))){
var inst_14549 = (state_14617[(29)]);
var inst_14548 = cljs.core.deref.call(null,cs);
var inst_14549__$1 = cljs.core.keys.call(null,inst_14548);
var inst_14550 = cljs.core.count.call(null,inst_14549__$1);
var inst_14551 = cljs.core.reset_BANG_.call(null,dctr,inst_14550);
var inst_14556 = cljs.core.seq.call(null,inst_14549__$1);
var inst_14557 = inst_14556;
var inst_14558 = null;
var inst_14559 = (0);
var inst_14560 = (0);
var state_14617__$1 = (function (){var statearr_14660 = state_14617;
(statearr_14660[(10)] = inst_14560);

(statearr_14660[(11)] = inst_14558);

(statearr_14660[(20)] = inst_14557);

(statearr_14660[(21)] = inst_14559);

(statearr_14660[(29)] = inst_14549__$1);

(statearr_14660[(30)] = inst_14551);

return statearr_14660;
})();
var statearr_14661_14730 = state_14617__$1;
(statearr_14661_14730[(2)] = null);

(statearr_14661_14730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (28))){
var inst_14557 = (state_14617[(20)]);
var inst_14576 = (state_14617[(25)]);
var inst_14576__$1 = cljs.core.seq.call(null,inst_14557);
var state_14617__$1 = (function (){var statearr_14662 = state_14617;
(statearr_14662[(25)] = inst_14576__$1);

return statearr_14662;
})();
if(inst_14576__$1){
var statearr_14663_14731 = state_14617__$1;
(statearr_14663_14731[(1)] = (33));

} else {
var statearr_14664_14732 = state_14617__$1;
(statearr_14664_14732[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (25))){
var inst_14560 = (state_14617[(10)]);
var inst_14559 = (state_14617[(21)]);
var inst_14562 = (inst_14560 < inst_14559);
var inst_14563 = inst_14562;
var state_14617__$1 = state_14617;
if(cljs.core.truth_(inst_14563)){
var statearr_14665_14733 = state_14617__$1;
(statearr_14665_14733[(1)] = (27));

} else {
var statearr_14666_14734 = state_14617__$1;
(statearr_14666_14734[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (34))){
var state_14617__$1 = state_14617;
var statearr_14667_14735 = state_14617__$1;
(statearr_14667_14735[(2)] = null);

(statearr_14667_14735[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (17))){
var state_14617__$1 = state_14617;
var statearr_14668_14736 = state_14617__$1;
(statearr_14668_14736[(2)] = null);

(statearr_14668_14736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (3))){
var inst_14615 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14617__$1,inst_14615);
} else {
if((state_val_14618 === (12))){
var inst_14544 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14669_14737 = state_14617__$1;
(statearr_14669_14737[(2)] = inst_14544);

(statearr_14669_14737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (2))){
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14617__$1,(4),ch);
} else {
if((state_val_14618 === (23))){
var state_14617__$1 = state_14617;
var statearr_14670_14738 = state_14617__$1;
(statearr_14670_14738[(2)] = null);

(statearr_14670_14738[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (35))){
var inst_14599 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14671_14739 = state_14617__$1;
(statearr_14671_14739[(2)] = inst_14599);

(statearr_14671_14739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (19))){
var inst_14518 = (state_14617[(7)]);
var inst_14522 = cljs.core.chunk_first.call(null,inst_14518);
var inst_14523 = cljs.core.chunk_rest.call(null,inst_14518);
var inst_14524 = cljs.core.count.call(null,inst_14522);
var inst_14498 = inst_14523;
var inst_14499 = inst_14522;
var inst_14500 = inst_14524;
var inst_14501 = (0);
var state_14617__$1 = (function (){var statearr_14672 = state_14617;
(statearr_14672[(14)] = inst_14499);

(statearr_14672[(15)] = inst_14500);

(statearr_14672[(16)] = inst_14498);

(statearr_14672[(17)] = inst_14501);

return statearr_14672;
})();
var statearr_14673_14740 = state_14617__$1;
(statearr_14673_14740[(2)] = null);

(statearr_14673_14740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (11))){
var inst_14518 = (state_14617[(7)]);
var inst_14498 = (state_14617[(16)]);
var inst_14518__$1 = cljs.core.seq.call(null,inst_14498);
var state_14617__$1 = (function (){var statearr_14674 = state_14617;
(statearr_14674[(7)] = inst_14518__$1);

return statearr_14674;
})();
if(inst_14518__$1){
var statearr_14675_14741 = state_14617__$1;
(statearr_14675_14741[(1)] = (16));

} else {
var statearr_14676_14742 = state_14617__$1;
(statearr_14676_14742[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (9))){
var inst_14546 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14677_14743 = state_14617__$1;
(statearr_14677_14743[(2)] = inst_14546);

(statearr_14677_14743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (5))){
var inst_14496 = cljs.core.deref.call(null,cs);
var inst_14497 = cljs.core.seq.call(null,inst_14496);
var inst_14498 = inst_14497;
var inst_14499 = null;
var inst_14500 = (0);
var inst_14501 = (0);
var state_14617__$1 = (function (){var statearr_14678 = state_14617;
(statearr_14678[(14)] = inst_14499);

(statearr_14678[(15)] = inst_14500);

(statearr_14678[(16)] = inst_14498);

(statearr_14678[(17)] = inst_14501);

return statearr_14678;
})();
var statearr_14679_14744 = state_14617__$1;
(statearr_14679_14744[(2)] = null);

(statearr_14679_14744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (14))){
var state_14617__$1 = state_14617;
var statearr_14680_14745 = state_14617__$1;
(statearr_14680_14745[(2)] = null);

(statearr_14680_14745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (45))){
var inst_14607 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14681_14746 = state_14617__$1;
(statearr_14681_14746[(2)] = inst_14607);

(statearr_14681_14746[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (26))){
var inst_14549 = (state_14617[(29)]);
var inst_14603 = (state_14617[(2)]);
var inst_14604 = cljs.core.seq.call(null,inst_14549);
var state_14617__$1 = (function (){var statearr_14682 = state_14617;
(statearr_14682[(31)] = inst_14603);

return statearr_14682;
})();
if(inst_14604){
var statearr_14683_14747 = state_14617__$1;
(statearr_14683_14747[(1)] = (42));

} else {
var statearr_14684_14748 = state_14617__$1;
(statearr_14684_14748[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (16))){
var inst_14518 = (state_14617[(7)]);
var inst_14520 = cljs.core.chunked_seq_QMARK_.call(null,inst_14518);
var state_14617__$1 = state_14617;
if(inst_14520){
var statearr_14685_14749 = state_14617__$1;
(statearr_14685_14749[(1)] = (19));

} else {
var statearr_14686_14750 = state_14617__$1;
(statearr_14686_14750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (38))){
var inst_14596 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14687_14751 = state_14617__$1;
(statearr_14687_14751[(2)] = inst_14596);

(statearr_14687_14751[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (30))){
var state_14617__$1 = state_14617;
var statearr_14688_14752 = state_14617__$1;
(statearr_14688_14752[(2)] = null);

(statearr_14688_14752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (10))){
var inst_14499 = (state_14617[(14)]);
var inst_14501 = (state_14617[(17)]);
var inst_14507 = cljs.core._nth.call(null,inst_14499,inst_14501);
var inst_14508 = cljs.core.nth.call(null,inst_14507,(0),null);
var inst_14509 = cljs.core.nth.call(null,inst_14507,(1),null);
var state_14617__$1 = (function (){var statearr_14689 = state_14617;
(statearr_14689[(26)] = inst_14508);

return statearr_14689;
})();
if(cljs.core.truth_(inst_14509)){
var statearr_14690_14753 = state_14617__$1;
(statearr_14690_14753[(1)] = (13));

} else {
var statearr_14691_14754 = state_14617__$1;
(statearr_14691_14754[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (18))){
var inst_14542 = (state_14617[(2)]);
var state_14617__$1 = state_14617;
var statearr_14692_14755 = state_14617__$1;
(statearr_14692_14755[(2)] = inst_14542);

(statearr_14692_14755[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (42))){
var state_14617__$1 = state_14617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14617__$1,(45),dchan);
} else {
if((state_val_14618 === (37))){
var inst_14489 = (state_14617[(12)]);
var inst_14576 = (state_14617[(25)]);
var inst_14585 = (state_14617[(23)]);
var inst_14585__$1 = cljs.core.first.call(null,inst_14576);
var inst_14586 = cljs.core.async.put_BANG_.call(null,inst_14585__$1,inst_14489,done);
var state_14617__$1 = (function (){var statearr_14693 = state_14617;
(statearr_14693[(23)] = inst_14585__$1);

return statearr_14693;
})();
if(cljs.core.truth_(inst_14586)){
var statearr_14694_14756 = state_14617__$1;
(statearr_14694_14756[(1)] = (39));

} else {
var statearr_14695_14757 = state_14617__$1;
(statearr_14695_14757[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14618 === (8))){
var inst_14500 = (state_14617[(15)]);
var inst_14501 = (state_14617[(17)]);
var inst_14503 = (inst_14501 < inst_14500);
var inst_14504 = inst_14503;
var state_14617__$1 = state_14617;
if(cljs.core.truth_(inst_14504)){
var statearr_14696_14758 = state_14617__$1;
(statearr_14696_14758[(1)] = (10));

} else {
var statearr_14697_14759 = state_14617__$1;
(statearr_14697_14759[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__7060__auto___14705,cs,m,dchan,dctr,done))
;
return ((function (switch__6998__auto__,c__7060__auto___14705,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__6999__auto__ = null;
var cljs$core$async$mult_$_state_machine__6999__auto____0 = (function (){
var statearr_14701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14701[(0)] = cljs$core$async$mult_$_state_machine__6999__auto__);

(statearr_14701[(1)] = (1));

return statearr_14701;
});
var cljs$core$async$mult_$_state_machine__6999__auto____1 = (function (state_14617){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_14617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e14702){if((e14702 instanceof Object)){
var ex__7002__auto__ = e14702;
var statearr_14703_14760 = state_14617;
(statearr_14703_14760[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14761 = state_14617;
state_14617 = G__14761;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__6999__auto__ = function(state_14617){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__6999__auto____1.call(this,state_14617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__6999__auto____0;
cljs$core$async$mult_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__6999__auto____1;
return cljs$core$async$mult_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___14705,cs,m,dchan,dctr,done))
})();
var state__7062__auto__ = (function (){var statearr_14704 = f__7061__auto__.call(null);
(statearr_14704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___14705);

return statearr_14704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___14705,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__14763 = arguments.length;
switch (G__14763) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj14766 = {};
return obj14766;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4208__auto__ = m;
if(and__4208__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4856__auto__ = (((m == null))?null:m);
return (function (){var or__4220__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5260__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5260__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14771){
var map__14772 = p__14771;
var map__14772__$1 = ((cljs.core.seq_QMARK_.call(null,map__14772))?cljs.core.apply.call(null,cljs.core.hash_map,map__14772):map__14772);
var opts = map__14772__$1;
var statearr_14773_14776 = state;
(statearr_14773_14776[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__14772,map__14772__$1,opts){
return (function (val){
var statearr_14774_14777 = state;
(statearr_14774_14777[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14772,map__14772__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_14775_14778 = state;
(statearr_14775_14778[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14767){
var G__14768 = cljs.core.first.call(null,seq14767);
var seq14767__$1 = cljs.core.next.call(null,seq14767);
var G__14769 = cljs.core.first.call(null,seq14767__$1);
var seq14767__$2 = cljs.core.next.call(null,seq14767__$1);
var G__14770 = cljs.core.first.call(null,seq14767__$2);
var seq14767__$3 = cljs.core.next.call(null,seq14767__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14768,G__14769,G__14770,seq14767__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t14898 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t14898 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14899){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta14899 = meta14899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14898.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t14898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t14898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14900){
var self__ = this;
var _14900__$1 = this;
return self__.meta14899;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14900,meta14899__$1){
var self__ = this;
var _14900__$1 = this;
return (new cljs.core.async.t14898(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14899__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t14898.cljs$lang$type = true;

cljs.core.async.t14898.cljs$lang$ctorStr = "cljs.core.async/t14898";

cljs.core.async.t14898.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t14898");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t14898 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t14898(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14899){
return (new cljs.core.async.t14898(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14899));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t14898(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7060__auto___15017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14970){
var state_val_14971 = (state_14970[(1)]);
if((state_val_14971 === (7))){
var inst_14914 = (state_14970[(7)]);
var inst_14919 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14914);
var state_14970__$1 = state_14970;
var statearr_14972_15018 = state_14970__$1;
(statearr_14972_15018[(2)] = inst_14919);

(statearr_14972_15018[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (20))){
var inst_14929 = (state_14970[(8)]);
var state_14970__$1 = state_14970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14970__$1,(23),out,inst_14929);
} else {
if((state_val_14971 === (1))){
var inst_14904 = (state_14970[(9)]);
var inst_14904__$1 = calc_state.call(null);
var inst_14905 = cljs.core.seq_QMARK_.call(null,inst_14904__$1);
var state_14970__$1 = (function (){var statearr_14973 = state_14970;
(statearr_14973[(9)] = inst_14904__$1);

return statearr_14973;
})();
if(inst_14905){
var statearr_14974_15019 = state_14970__$1;
(statearr_14974_15019[(1)] = (2));

} else {
var statearr_14975_15020 = state_14970__$1;
(statearr_14975_15020[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (24))){
var inst_14922 = (state_14970[(10)]);
var inst_14914 = inst_14922;
var state_14970__$1 = (function (){var statearr_14976 = state_14970;
(statearr_14976[(7)] = inst_14914);

return statearr_14976;
})();
var statearr_14977_15021 = state_14970__$1;
(statearr_14977_15021[(2)] = null);

(statearr_14977_15021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (4))){
var inst_14904 = (state_14970[(9)]);
var inst_14910 = (state_14970[(2)]);
var inst_14911 = cljs.core.get.call(null,inst_14910,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14912 = cljs.core.get.call(null,inst_14910,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14913 = cljs.core.get.call(null,inst_14910,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14914 = inst_14904;
var state_14970__$1 = (function (){var statearr_14978 = state_14970;
(statearr_14978[(11)] = inst_14911);

(statearr_14978[(12)] = inst_14913);

(statearr_14978[(7)] = inst_14914);

(statearr_14978[(13)] = inst_14912);

return statearr_14978;
})();
var statearr_14979_15022 = state_14970__$1;
(statearr_14979_15022[(2)] = null);

(statearr_14979_15022[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (15))){
var state_14970__$1 = state_14970;
var statearr_14980_15023 = state_14970__$1;
(statearr_14980_15023[(2)] = null);

(statearr_14980_15023[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (21))){
var inst_14922 = (state_14970[(10)]);
var inst_14914 = inst_14922;
var state_14970__$1 = (function (){var statearr_14981 = state_14970;
(statearr_14981[(7)] = inst_14914);

return statearr_14981;
})();
var statearr_14982_15024 = state_14970__$1;
(statearr_14982_15024[(2)] = null);

(statearr_14982_15024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (13))){
var inst_14966 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
var statearr_14983_15025 = state_14970__$1;
(statearr_14983_15025[(2)] = inst_14966);

(statearr_14983_15025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (22))){
var inst_14964 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
var statearr_14984_15026 = state_14970__$1;
(statearr_14984_15026[(2)] = inst_14964);

(statearr_14984_15026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (6))){
var inst_14968 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14970__$1,inst_14968);
} else {
if((state_val_14971 === (25))){
var state_14970__$1 = state_14970;
var statearr_14985_15027 = state_14970__$1;
(statearr_14985_15027[(2)] = null);

(statearr_14985_15027[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (17))){
var inst_14944 = (state_14970[(14)]);
var state_14970__$1 = state_14970;
var statearr_14986_15028 = state_14970__$1;
(statearr_14986_15028[(2)] = inst_14944);

(statearr_14986_15028[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (3))){
var inst_14904 = (state_14970[(9)]);
var state_14970__$1 = state_14970;
var statearr_14987_15029 = state_14970__$1;
(statearr_14987_15029[(2)] = inst_14904);

(statearr_14987_15029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (12))){
var inst_14925 = (state_14970[(15)]);
var inst_14944 = (state_14970[(14)]);
var inst_14930 = (state_14970[(16)]);
var inst_14944__$1 = inst_14925.call(null,inst_14930);
var state_14970__$1 = (function (){var statearr_14988 = state_14970;
(statearr_14988[(14)] = inst_14944__$1);

return statearr_14988;
})();
if(cljs.core.truth_(inst_14944__$1)){
var statearr_14989_15030 = state_14970__$1;
(statearr_14989_15030[(1)] = (17));

} else {
var statearr_14990_15031 = state_14970__$1;
(statearr_14990_15031[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (2))){
var inst_14904 = (state_14970[(9)]);
var inst_14907 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14904);
var state_14970__$1 = state_14970;
var statearr_14991_15032 = state_14970__$1;
(statearr_14991_15032[(2)] = inst_14907);

(statearr_14991_15032[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (23))){
var inst_14955 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
if(cljs.core.truth_(inst_14955)){
var statearr_14992_15033 = state_14970__$1;
(statearr_14992_15033[(1)] = (24));

} else {
var statearr_14993_15034 = state_14970__$1;
(statearr_14993_15034[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (19))){
var inst_14952 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
if(cljs.core.truth_(inst_14952)){
var statearr_14994_15035 = state_14970__$1;
(statearr_14994_15035[(1)] = (20));

} else {
var statearr_14995_15036 = state_14970__$1;
(statearr_14995_15036[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (11))){
var inst_14929 = (state_14970[(8)]);
var inst_14935 = (inst_14929 == null);
var state_14970__$1 = state_14970;
if(cljs.core.truth_(inst_14935)){
var statearr_14996_15037 = state_14970__$1;
(statearr_14996_15037[(1)] = (14));

} else {
var statearr_14997_15038 = state_14970__$1;
(statearr_14997_15038[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (9))){
var inst_14922 = (state_14970[(10)]);
var inst_14922__$1 = (state_14970[(2)]);
var inst_14923 = cljs.core.get.call(null,inst_14922__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14924 = cljs.core.get.call(null,inst_14922__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14925 = cljs.core.get.call(null,inst_14922__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_14970__$1 = (function (){var statearr_14998 = state_14970;
(statearr_14998[(15)] = inst_14925);

(statearr_14998[(17)] = inst_14924);

(statearr_14998[(10)] = inst_14922__$1);

return statearr_14998;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_14970__$1,(10),inst_14923);
} else {
if((state_val_14971 === (5))){
var inst_14914 = (state_14970[(7)]);
var inst_14917 = cljs.core.seq_QMARK_.call(null,inst_14914);
var state_14970__$1 = state_14970;
if(inst_14917){
var statearr_14999_15039 = state_14970__$1;
(statearr_14999_15039[(1)] = (7));

} else {
var statearr_15000_15040 = state_14970__$1;
(statearr_15000_15040[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (14))){
var inst_14930 = (state_14970[(16)]);
var inst_14937 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14930);
var state_14970__$1 = state_14970;
var statearr_15001_15041 = state_14970__$1;
(statearr_15001_15041[(2)] = inst_14937);

(statearr_15001_15041[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (26))){
var inst_14960 = (state_14970[(2)]);
var state_14970__$1 = state_14970;
var statearr_15002_15042 = state_14970__$1;
(statearr_15002_15042[(2)] = inst_14960);

(statearr_15002_15042[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (16))){
var inst_14940 = (state_14970[(2)]);
var inst_14941 = calc_state.call(null);
var inst_14914 = inst_14941;
var state_14970__$1 = (function (){var statearr_15003 = state_14970;
(statearr_15003[(18)] = inst_14940);

(statearr_15003[(7)] = inst_14914);

return statearr_15003;
})();
var statearr_15004_15043 = state_14970__$1;
(statearr_15004_15043[(2)] = null);

(statearr_15004_15043[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (10))){
var inst_14929 = (state_14970[(8)]);
var inst_14930 = (state_14970[(16)]);
var inst_14928 = (state_14970[(2)]);
var inst_14929__$1 = cljs.core.nth.call(null,inst_14928,(0),null);
var inst_14930__$1 = cljs.core.nth.call(null,inst_14928,(1),null);
var inst_14931 = (inst_14929__$1 == null);
var inst_14932 = cljs.core._EQ_.call(null,inst_14930__$1,change);
var inst_14933 = (inst_14931) || (inst_14932);
var state_14970__$1 = (function (){var statearr_15005 = state_14970;
(statearr_15005[(8)] = inst_14929__$1);

(statearr_15005[(16)] = inst_14930__$1);

return statearr_15005;
})();
if(cljs.core.truth_(inst_14933)){
var statearr_15006_15044 = state_14970__$1;
(statearr_15006_15044[(1)] = (11));

} else {
var statearr_15007_15045 = state_14970__$1;
(statearr_15007_15045[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (18))){
var inst_14925 = (state_14970[(15)]);
var inst_14924 = (state_14970[(17)]);
var inst_14930 = (state_14970[(16)]);
var inst_14947 = cljs.core.empty_QMARK_.call(null,inst_14925);
var inst_14948 = inst_14924.call(null,inst_14930);
var inst_14949 = cljs.core.not.call(null,inst_14948);
var inst_14950 = (inst_14947) && (inst_14949);
var state_14970__$1 = state_14970;
var statearr_15008_15046 = state_14970__$1;
(statearr_15008_15046[(2)] = inst_14950);

(statearr_15008_15046[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14971 === (8))){
var inst_14914 = (state_14970[(7)]);
var state_14970__$1 = state_14970;
var statearr_15009_15047 = state_14970__$1;
(statearr_15009_15047[(2)] = inst_14914);

(statearr_15009_15047[(1)] = (9));


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
});})(c__7060__auto___15017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__6998__auto__,c__7060__auto___15017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__6999__auto__ = null;
var cljs$core$async$mix_$_state_machine__6999__auto____0 = (function (){
var statearr_15013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15013[(0)] = cljs$core$async$mix_$_state_machine__6999__auto__);

(statearr_15013[(1)] = (1));

return statearr_15013;
});
var cljs$core$async$mix_$_state_machine__6999__auto____1 = (function (state_14970){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_14970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15014){if((e15014 instanceof Object)){
var ex__7002__auto__ = e15014;
var statearr_15015_15048 = state_14970;
(statearr_15015_15048[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15049 = state_14970;
state_14970 = G__15049;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__6999__auto__ = function(state_14970){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__6999__auto____1.call(this,state_14970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__6999__auto____0;
cljs$core$async$mix_$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__6999__auto____1;
return cljs$core$async$mix_$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7062__auto__ = (function (){var statearr_15016 = f__7061__auto__.call(null);
(statearr_15016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15017);

return statearr_15016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15017,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj15051 = {};
return obj15051;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__15053 = arguments.length;
switch (G__15053) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4208__auto__ = p;
if(and__4208__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4208__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4856__auto__ = (((p == null))?null:p);
return (function (){var or__4220__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4856__auto__)]);
if(or__4220__auto__){
return or__4220__auto__;
} else {
var or__4220__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4220__auto____$1){
return or__4220__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__15057 = arguments.length;
switch (G__15057) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4220__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4220__auto__)){
return or__4220__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4220__auto__,mults){
return (function (p1__15055_SHARP_){
if(cljs.core.truth_(p1__15055_SHARP_.call(null,topic))){
return p1__15055_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15055_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4220__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t15058 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15058 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,meta15059){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.meta15059 = meta15059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15058.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t15058.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t15058.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t15058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t15058.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t15058.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t15058.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t15058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15060){
var self__ = this;
var _15060__$1 = this;
return self__.meta15059;
});})(mults,ensure_mult))
;

cljs.core.async.t15058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15060,meta15059__$1){
var self__ = this;
var _15060__$1 = this;
return (new cljs.core.async.t15058(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,meta15059__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t15058.cljs$lang$type = true;

cljs.core.async.t15058.cljs$lang$ctorStr = "cljs.core.async/t15058";

cljs.core.async.t15058.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t15058");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t15058 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t15058(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15059){
return (new cljs.core.async.t15058(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,meta15059));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t15058(ensure_mult,mults,buf_fn,topic_fn,ch,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7060__auto___15181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15181,mults,ensure_mult,p){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15181,mults,ensure_mult,p){
return (function (state_15132){
var state_val_15133 = (state_15132[(1)]);
if((state_val_15133 === (7))){
var inst_15128 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
var statearr_15134_15182 = state_15132__$1;
(statearr_15134_15182[(2)] = inst_15128);

(statearr_15134_15182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (20))){
var state_15132__$1 = state_15132;
var statearr_15135_15183 = state_15132__$1;
(statearr_15135_15183[(2)] = null);

(statearr_15135_15183[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (1))){
var state_15132__$1 = state_15132;
var statearr_15136_15184 = state_15132__$1;
(statearr_15136_15184[(2)] = null);

(statearr_15136_15184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (24))){
var inst_15111 = (state_15132[(7)]);
var inst_15120 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15111);
var state_15132__$1 = state_15132;
var statearr_15137_15185 = state_15132__$1;
(statearr_15137_15185[(2)] = inst_15120);

(statearr_15137_15185[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (4))){
var inst_15063 = (state_15132[(8)]);
var inst_15063__$1 = (state_15132[(2)]);
var inst_15064 = (inst_15063__$1 == null);
var state_15132__$1 = (function (){var statearr_15138 = state_15132;
(statearr_15138[(8)] = inst_15063__$1);

return statearr_15138;
})();
if(cljs.core.truth_(inst_15064)){
var statearr_15139_15186 = state_15132__$1;
(statearr_15139_15186[(1)] = (5));

} else {
var statearr_15140_15187 = state_15132__$1;
(statearr_15140_15187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (15))){
var inst_15105 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
var statearr_15141_15188 = state_15132__$1;
(statearr_15141_15188[(2)] = inst_15105);

(statearr_15141_15188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (21))){
var inst_15125 = (state_15132[(2)]);
var state_15132__$1 = (function (){var statearr_15142 = state_15132;
(statearr_15142[(9)] = inst_15125);

return statearr_15142;
})();
var statearr_15143_15189 = state_15132__$1;
(statearr_15143_15189[(2)] = null);

(statearr_15143_15189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (13))){
var inst_15087 = (state_15132[(10)]);
var inst_15089 = cljs.core.chunked_seq_QMARK_.call(null,inst_15087);
var state_15132__$1 = state_15132;
if(inst_15089){
var statearr_15144_15190 = state_15132__$1;
(statearr_15144_15190[(1)] = (16));

} else {
var statearr_15145_15191 = state_15132__$1;
(statearr_15145_15191[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (22))){
var inst_15117 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
if(cljs.core.truth_(inst_15117)){
var statearr_15146_15192 = state_15132__$1;
(statearr_15146_15192[(1)] = (23));

} else {
var statearr_15147_15193 = state_15132__$1;
(statearr_15147_15193[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (6))){
var inst_15063 = (state_15132[(8)]);
var inst_15111 = (state_15132[(7)]);
var inst_15113 = (state_15132[(11)]);
var inst_15111__$1 = topic_fn.call(null,inst_15063);
var inst_15112 = cljs.core.deref.call(null,mults);
var inst_15113__$1 = cljs.core.get.call(null,inst_15112,inst_15111__$1);
var state_15132__$1 = (function (){var statearr_15148 = state_15132;
(statearr_15148[(7)] = inst_15111__$1);

(statearr_15148[(11)] = inst_15113__$1);

return statearr_15148;
})();
if(cljs.core.truth_(inst_15113__$1)){
var statearr_15149_15194 = state_15132__$1;
(statearr_15149_15194[(1)] = (19));

} else {
var statearr_15150_15195 = state_15132__$1;
(statearr_15150_15195[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (25))){
var inst_15122 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
var statearr_15151_15196 = state_15132__$1;
(statearr_15151_15196[(2)] = inst_15122);

(statearr_15151_15196[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (17))){
var inst_15087 = (state_15132[(10)]);
var inst_15096 = cljs.core.first.call(null,inst_15087);
var inst_15097 = cljs.core.async.muxch_STAR_.call(null,inst_15096);
var inst_15098 = cljs.core.async.close_BANG_.call(null,inst_15097);
var inst_15099 = cljs.core.next.call(null,inst_15087);
var inst_15073 = inst_15099;
var inst_15074 = null;
var inst_15075 = (0);
var inst_15076 = (0);
var state_15132__$1 = (function (){var statearr_15152 = state_15132;
(statearr_15152[(12)] = inst_15073);

(statearr_15152[(13)] = inst_15076);

(statearr_15152[(14)] = inst_15098);

(statearr_15152[(15)] = inst_15074);

(statearr_15152[(16)] = inst_15075);

return statearr_15152;
})();
var statearr_15153_15197 = state_15132__$1;
(statearr_15153_15197[(2)] = null);

(statearr_15153_15197[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (3))){
var inst_15130 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15132__$1,inst_15130);
} else {
if((state_val_15133 === (12))){
var inst_15107 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
var statearr_15154_15198 = state_15132__$1;
(statearr_15154_15198[(2)] = inst_15107);

(statearr_15154_15198[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (2))){
var state_15132__$1 = state_15132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15132__$1,(4),ch);
} else {
if((state_val_15133 === (23))){
var state_15132__$1 = state_15132;
var statearr_15155_15199 = state_15132__$1;
(statearr_15155_15199[(2)] = null);

(statearr_15155_15199[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (19))){
var inst_15063 = (state_15132[(8)]);
var inst_15113 = (state_15132[(11)]);
var inst_15115 = cljs.core.async.muxch_STAR_.call(null,inst_15113);
var state_15132__$1 = state_15132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15132__$1,(22),inst_15115,inst_15063);
} else {
if((state_val_15133 === (11))){
var inst_15087 = (state_15132[(10)]);
var inst_15073 = (state_15132[(12)]);
var inst_15087__$1 = cljs.core.seq.call(null,inst_15073);
var state_15132__$1 = (function (){var statearr_15156 = state_15132;
(statearr_15156[(10)] = inst_15087__$1);

return statearr_15156;
})();
if(inst_15087__$1){
var statearr_15157_15200 = state_15132__$1;
(statearr_15157_15200[(1)] = (13));

} else {
var statearr_15158_15201 = state_15132__$1;
(statearr_15158_15201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (9))){
var inst_15109 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
var statearr_15159_15202 = state_15132__$1;
(statearr_15159_15202[(2)] = inst_15109);

(statearr_15159_15202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (5))){
var inst_15070 = cljs.core.deref.call(null,mults);
var inst_15071 = cljs.core.vals.call(null,inst_15070);
var inst_15072 = cljs.core.seq.call(null,inst_15071);
var inst_15073 = inst_15072;
var inst_15074 = null;
var inst_15075 = (0);
var inst_15076 = (0);
var state_15132__$1 = (function (){var statearr_15160 = state_15132;
(statearr_15160[(12)] = inst_15073);

(statearr_15160[(13)] = inst_15076);

(statearr_15160[(15)] = inst_15074);

(statearr_15160[(16)] = inst_15075);

return statearr_15160;
})();
var statearr_15161_15203 = state_15132__$1;
(statearr_15161_15203[(2)] = null);

(statearr_15161_15203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (14))){
var state_15132__$1 = state_15132;
var statearr_15165_15204 = state_15132__$1;
(statearr_15165_15204[(2)] = null);

(statearr_15165_15204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (16))){
var inst_15087 = (state_15132[(10)]);
var inst_15091 = cljs.core.chunk_first.call(null,inst_15087);
var inst_15092 = cljs.core.chunk_rest.call(null,inst_15087);
var inst_15093 = cljs.core.count.call(null,inst_15091);
var inst_15073 = inst_15092;
var inst_15074 = inst_15091;
var inst_15075 = inst_15093;
var inst_15076 = (0);
var state_15132__$1 = (function (){var statearr_15166 = state_15132;
(statearr_15166[(12)] = inst_15073);

(statearr_15166[(13)] = inst_15076);

(statearr_15166[(15)] = inst_15074);

(statearr_15166[(16)] = inst_15075);

return statearr_15166;
})();
var statearr_15167_15205 = state_15132__$1;
(statearr_15167_15205[(2)] = null);

(statearr_15167_15205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (10))){
var inst_15073 = (state_15132[(12)]);
var inst_15076 = (state_15132[(13)]);
var inst_15074 = (state_15132[(15)]);
var inst_15075 = (state_15132[(16)]);
var inst_15081 = cljs.core._nth.call(null,inst_15074,inst_15076);
var inst_15082 = cljs.core.async.muxch_STAR_.call(null,inst_15081);
var inst_15083 = cljs.core.async.close_BANG_.call(null,inst_15082);
var inst_15084 = (inst_15076 + (1));
var tmp15162 = inst_15073;
var tmp15163 = inst_15074;
var tmp15164 = inst_15075;
var inst_15073__$1 = tmp15162;
var inst_15074__$1 = tmp15163;
var inst_15075__$1 = tmp15164;
var inst_15076__$1 = inst_15084;
var state_15132__$1 = (function (){var statearr_15168 = state_15132;
(statearr_15168[(12)] = inst_15073__$1);

(statearr_15168[(13)] = inst_15076__$1);

(statearr_15168[(17)] = inst_15083);

(statearr_15168[(15)] = inst_15074__$1);

(statearr_15168[(16)] = inst_15075__$1);

return statearr_15168;
})();
var statearr_15169_15206 = state_15132__$1;
(statearr_15169_15206[(2)] = null);

(statearr_15169_15206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (18))){
var inst_15102 = (state_15132[(2)]);
var state_15132__$1 = state_15132;
var statearr_15170_15207 = state_15132__$1;
(statearr_15170_15207[(2)] = inst_15102);

(statearr_15170_15207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15133 === (8))){
var inst_15076 = (state_15132[(13)]);
var inst_15075 = (state_15132[(16)]);
var inst_15078 = (inst_15076 < inst_15075);
var inst_15079 = inst_15078;
var state_15132__$1 = state_15132;
if(cljs.core.truth_(inst_15079)){
var statearr_15171_15208 = state_15132__$1;
(statearr_15171_15208[(1)] = (10));

} else {
var statearr_15172_15209 = state_15132__$1;
(statearr_15172_15209[(1)] = (11));

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
});})(c__7060__auto___15181,mults,ensure_mult,p))
;
return ((function (switch__6998__auto__,c__7060__auto___15181,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15176 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15176[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15176[(1)] = (1));

return statearr_15176;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15132){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15177){if((e15177 instanceof Object)){
var ex__7002__auto__ = e15177;
var statearr_15178_15210 = state_15132;
(statearr_15178_15210[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15132);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15211 = state_15132;
state_15132 = G__15211;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15132){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15181,mults,ensure_mult,p))
})();
var state__7062__auto__ = (function (){var statearr_15179 = f__7061__auto__.call(null);
(statearr_15179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15181);

return statearr_15179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15181,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__15213 = arguments.length;
switch (G__15213) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__15216 = arguments.length;
switch (G__15216) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__15219 = arguments.length;
switch (G__15219) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7060__auto___15289 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15258){
var state_val_15259 = (state_15258[(1)]);
if((state_val_15259 === (7))){
var state_15258__$1 = state_15258;
var statearr_15260_15290 = state_15258__$1;
(statearr_15260_15290[(2)] = null);

(statearr_15260_15290[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (1))){
var state_15258__$1 = state_15258;
var statearr_15261_15291 = state_15258__$1;
(statearr_15261_15291[(2)] = null);

(statearr_15261_15291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (4))){
var inst_15222 = (state_15258[(7)]);
var inst_15224 = (inst_15222 < cnt);
var state_15258__$1 = state_15258;
if(cljs.core.truth_(inst_15224)){
var statearr_15262_15292 = state_15258__$1;
(statearr_15262_15292[(1)] = (6));

} else {
var statearr_15263_15293 = state_15258__$1;
(statearr_15263_15293[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (15))){
var inst_15254 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
var statearr_15264_15294 = state_15258__$1;
(statearr_15264_15294[(2)] = inst_15254);

(statearr_15264_15294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (13))){
var inst_15247 = cljs.core.async.close_BANG_.call(null,out);
var state_15258__$1 = state_15258;
var statearr_15265_15295 = state_15258__$1;
(statearr_15265_15295[(2)] = inst_15247);

(statearr_15265_15295[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (6))){
var state_15258__$1 = state_15258;
var statearr_15266_15296 = state_15258__$1;
(statearr_15266_15296[(2)] = null);

(statearr_15266_15296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (3))){
var inst_15256 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15258__$1,inst_15256);
} else {
if((state_val_15259 === (12))){
var inst_15244 = (state_15258[(8)]);
var inst_15244__$1 = (state_15258[(2)]);
var inst_15245 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15244__$1);
var state_15258__$1 = (function (){var statearr_15267 = state_15258;
(statearr_15267[(8)] = inst_15244__$1);

return statearr_15267;
})();
if(cljs.core.truth_(inst_15245)){
var statearr_15268_15297 = state_15258__$1;
(statearr_15268_15297[(1)] = (13));

} else {
var statearr_15269_15298 = state_15258__$1;
(statearr_15269_15298[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (2))){
var inst_15221 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15222 = (0);
var state_15258__$1 = (function (){var statearr_15270 = state_15258;
(statearr_15270[(7)] = inst_15222);

(statearr_15270[(9)] = inst_15221);

return statearr_15270;
})();
var statearr_15271_15299 = state_15258__$1;
(statearr_15271_15299[(2)] = null);

(statearr_15271_15299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (11))){
var inst_15222 = (state_15258[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15258,(10),Object,null,(9));
var inst_15231 = chs__$1.call(null,inst_15222);
var inst_15232 = done.call(null,inst_15222);
var inst_15233 = cljs.core.async.take_BANG_.call(null,inst_15231,inst_15232);
var state_15258__$1 = state_15258;
var statearr_15272_15300 = state_15258__$1;
(statearr_15272_15300[(2)] = inst_15233);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15258__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (9))){
var inst_15222 = (state_15258[(7)]);
var inst_15235 = (state_15258[(2)]);
var inst_15236 = (inst_15222 + (1));
var inst_15222__$1 = inst_15236;
var state_15258__$1 = (function (){var statearr_15273 = state_15258;
(statearr_15273[(10)] = inst_15235);

(statearr_15273[(7)] = inst_15222__$1);

return statearr_15273;
})();
var statearr_15274_15301 = state_15258__$1;
(statearr_15274_15301[(2)] = null);

(statearr_15274_15301[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (5))){
var inst_15242 = (state_15258[(2)]);
var state_15258__$1 = (function (){var statearr_15275 = state_15258;
(statearr_15275[(11)] = inst_15242);

return statearr_15275;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15258__$1,(12),dchan);
} else {
if((state_val_15259 === (14))){
var inst_15244 = (state_15258[(8)]);
var inst_15249 = cljs.core.apply.call(null,f,inst_15244);
var state_15258__$1 = state_15258;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15258__$1,(16),out,inst_15249);
} else {
if((state_val_15259 === (16))){
var inst_15251 = (state_15258[(2)]);
var state_15258__$1 = (function (){var statearr_15276 = state_15258;
(statearr_15276[(12)] = inst_15251);

return statearr_15276;
})();
var statearr_15277_15302 = state_15258__$1;
(statearr_15277_15302[(2)] = null);

(statearr_15277_15302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (10))){
var inst_15226 = (state_15258[(2)]);
var inst_15227 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15258__$1 = (function (){var statearr_15278 = state_15258;
(statearr_15278[(13)] = inst_15226);

return statearr_15278;
})();
var statearr_15279_15303 = state_15258__$1;
(statearr_15279_15303[(2)] = inst_15227);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15258__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15259 === (8))){
var inst_15240 = (state_15258[(2)]);
var state_15258__$1 = state_15258;
var statearr_15280_15304 = state_15258__$1;
(statearr_15280_15304[(2)] = inst_15240);

(statearr_15280_15304[(1)] = (5));


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
});})(c__7060__auto___15289,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__6998__auto__,c__7060__auto___15289,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15284[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15284[(1)] = (1));

return statearr_15284;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15258){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15258);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15285){if((e15285 instanceof Object)){
var ex__7002__auto__ = e15285;
var statearr_15286_15305 = state_15258;
(statearr_15286_15305[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15258);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15306 = state_15258;
state_15258 = G__15306;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15258){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15258);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15289,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7062__auto__ = (function (){var statearr_15287 = f__7061__auto__.call(null);
(statearr_15287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15289);

return statearr_15287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15289,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__15309 = arguments.length;
switch (G__15309) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7060__auto___15364 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15364,out){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15364,out){
return (function (state_15339){
var state_val_15340 = (state_15339[(1)]);
if((state_val_15340 === (7))){
var inst_15319 = (state_15339[(7)]);
var inst_15318 = (state_15339[(8)]);
var inst_15318__$1 = (state_15339[(2)]);
var inst_15319__$1 = cljs.core.nth.call(null,inst_15318__$1,(0),null);
var inst_15320 = cljs.core.nth.call(null,inst_15318__$1,(1),null);
var inst_15321 = (inst_15319__$1 == null);
var state_15339__$1 = (function (){var statearr_15341 = state_15339;
(statearr_15341[(7)] = inst_15319__$1);

(statearr_15341[(8)] = inst_15318__$1);

(statearr_15341[(9)] = inst_15320);

return statearr_15341;
})();
if(cljs.core.truth_(inst_15321)){
var statearr_15342_15365 = state_15339__$1;
(statearr_15342_15365[(1)] = (8));

} else {
var statearr_15343_15366 = state_15339__$1;
(statearr_15343_15366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (1))){
var inst_15310 = cljs.core.vec.call(null,chs);
var inst_15311 = inst_15310;
var state_15339__$1 = (function (){var statearr_15344 = state_15339;
(statearr_15344[(10)] = inst_15311);

return statearr_15344;
})();
var statearr_15345_15367 = state_15339__$1;
(statearr_15345_15367[(2)] = null);

(statearr_15345_15367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (4))){
var inst_15311 = (state_15339[(10)]);
var state_15339__$1 = state_15339;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15339__$1,(7),inst_15311);
} else {
if((state_val_15340 === (6))){
var inst_15335 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
var statearr_15346_15368 = state_15339__$1;
(statearr_15346_15368[(2)] = inst_15335);

(statearr_15346_15368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (3))){
var inst_15337 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15339__$1,inst_15337);
} else {
if((state_val_15340 === (2))){
var inst_15311 = (state_15339[(10)]);
var inst_15313 = cljs.core.count.call(null,inst_15311);
var inst_15314 = (inst_15313 > (0));
var state_15339__$1 = state_15339;
if(cljs.core.truth_(inst_15314)){
var statearr_15348_15369 = state_15339__$1;
(statearr_15348_15369[(1)] = (4));

} else {
var statearr_15349_15370 = state_15339__$1;
(statearr_15349_15370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (11))){
var inst_15311 = (state_15339[(10)]);
var inst_15328 = (state_15339[(2)]);
var tmp15347 = inst_15311;
var inst_15311__$1 = tmp15347;
var state_15339__$1 = (function (){var statearr_15350 = state_15339;
(statearr_15350[(10)] = inst_15311__$1);

(statearr_15350[(11)] = inst_15328);

return statearr_15350;
})();
var statearr_15351_15371 = state_15339__$1;
(statearr_15351_15371[(2)] = null);

(statearr_15351_15371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (9))){
var inst_15319 = (state_15339[(7)]);
var state_15339__$1 = state_15339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15339__$1,(11),out,inst_15319);
} else {
if((state_val_15340 === (5))){
var inst_15333 = cljs.core.async.close_BANG_.call(null,out);
var state_15339__$1 = state_15339;
var statearr_15352_15372 = state_15339__$1;
(statearr_15352_15372[(2)] = inst_15333);

(statearr_15352_15372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (10))){
var inst_15331 = (state_15339[(2)]);
var state_15339__$1 = state_15339;
var statearr_15353_15373 = state_15339__$1;
(statearr_15353_15373[(2)] = inst_15331);

(statearr_15353_15373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15340 === (8))){
var inst_15311 = (state_15339[(10)]);
var inst_15319 = (state_15339[(7)]);
var inst_15318 = (state_15339[(8)]);
var inst_15320 = (state_15339[(9)]);
var inst_15323 = (function (){var c = inst_15320;
var v = inst_15319;
var vec__15316 = inst_15318;
var cs = inst_15311;
return ((function (c,v,vec__15316,cs,inst_15311,inst_15319,inst_15318,inst_15320,state_val_15340,c__7060__auto___15364,out){
return (function (p1__15307_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15307_SHARP_);
});
;})(c,v,vec__15316,cs,inst_15311,inst_15319,inst_15318,inst_15320,state_val_15340,c__7060__auto___15364,out))
})();
var inst_15324 = cljs.core.filterv.call(null,inst_15323,inst_15311);
var inst_15311__$1 = inst_15324;
var state_15339__$1 = (function (){var statearr_15354 = state_15339;
(statearr_15354[(10)] = inst_15311__$1);

return statearr_15354;
})();
var statearr_15355_15374 = state_15339__$1;
(statearr_15355_15374[(2)] = null);

(statearr_15355_15374[(1)] = (2));


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
});})(c__7060__auto___15364,out))
;
return ((function (switch__6998__auto__,c__7060__auto___15364,out){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15359 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15359[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15359[(1)] = (1));

return statearr_15359;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15339){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15360){if((e15360 instanceof Object)){
var ex__7002__auto__ = e15360;
var statearr_15361_15375 = state_15339;
(statearr_15361_15375[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15376 = state_15339;
state_15339 = G__15376;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15364,out))
})();
var state__7062__auto__ = (function (){var statearr_15362 = f__7061__auto__.call(null);
(statearr_15362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15364);

return statearr_15362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15364,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__15378 = arguments.length;
switch (G__15378) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7060__auto___15426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15426,out){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15426,out){
return (function (state_15402){
var state_val_15403 = (state_15402[(1)]);
if((state_val_15403 === (7))){
var inst_15384 = (state_15402[(7)]);
var inst_15384__$1 = (state_15402[(2)]);
var inst_15385 = (inst_15384__$1 == null);
var inst_15386 = cljs.core.not.call(null,inst_15385);
var state_15402__$1 = (function (){var statearr_15404 = state_15402;
(statearr_15404[(7)] = inst_15384__$1);

return statearr_15404;
})();
if(inst_15386){
var statearr_15405_15427 = state_15402__$1;
(statearr_15405_15427[(1)] = (8));

} else {
var statearr_15406_15428 = state_15402__$1;
(statearr_15406_15428[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (1))){
var inst_15379 = (0);
var state_15402__$1 = (function (){var statearr_15407 = state_15402;
(statearr_15407[(8)] = inst_15379);

return statearr_15407;
})();
var statearr_15408_15429 = state_15402__$1;
(statearr_15408_15429[(2)] = null);

(statearr_15408_15429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (4))){
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15402__$1,(7),ch);
} else {
if((state_val_15403 === (6))){
var inst_15397 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15409_15430 = state_15402__$1;
(statearr_15409_15430[(2)] = inst_15397);

(statearr_15409_15430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (3))){
var inst_15399 = (state_15402[(2)]);
var inst_15400 = cljs.core.async.close_BANG_.call(null,out);
var state_15402__$1 = (function (){var statearr_15410 = state_15402;
(statearr_15410[(9)] = inst_15399);

return statearr_15410;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15402__$1,inst_15400);
} else {
if((state_val_15403 === (2))){
var inst_15379 = (state_15402[(8)]);
var inst_15381 = (inst_15379 < n);
var state_15402__$1 = state_15402;
if(cljs.core.truth_(inst_15381)){
var statearr_15411_15431 = state_15402__$1;
(statearr_15411_15431[(1)] = (4));

} else {
var statearr_15412_15432 = state_15402__$1;
(statearr_15412_15432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (11))){
var inst_15379 = (state_15402[(8)]);
var inst_15389 = (state_15402[(2)]);
var inst_15390 = (inst_15379 + (1));
var inst_15379__$1 = inst_15390;
var state_15402__$1 = (function (){var statearr_15413 = state_15402;
(statearr_15413[(8)] = inst_15379__$1);

(statearr_15413[(10)] = inst_15389);

return statearr_15413;
})();
var statearr_15414_15433 = state_15402__$1;
(statearr_15414_15433[(2)] = null);

(statearr_15414_15433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (9))){
var state_15402__$1 = state_15402;
var statearr_15415_15434 = state_15402__$1;
(statearr_15415_15434[(2)] = null);

(statearr_15415_15434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (5))){
var state_15402__$1 = state_15402;
var statearr_15416_15435 = state_15402__$1;
(statearr_15416_15435[(2)] = null);

(statearr_15416_15435[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (10))){
var inst_15394 = (state_15402[(2)]);
var state_15402__$1 = state_15402;
var statearr_15417_15436 = state_15402__$1;
(statearr_15417_15436[(2)] = inst_15394);

(statearr_15417_15436[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15403 === (8))){
var inst_15384 = (state_15402[(7)]);
var state_15402__$1 = state_15402;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15402__$1,(11),out,inst_15384);
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
});})(c__7060__auto___15426,out))
;
return ((function (switch__6998__auto__,c__7060__auto___15426,out){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15421 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15421[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15421[(1)] = (1));

return statearr_15421;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15402){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15402);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15422){if((e15422 instanceof Object)){
var ex__7002__auto__ = e15422;
var statearr_15423_15437 = state_15402;
(statearr_15423_15437[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15402);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15422;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15438 = state_15402;
state_15402 = G__15438;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15402){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15402);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15426,out))
})();
var state__7062__auto__ = (function (){var statearr_15424 = f__7061__auto__.call(null);
(statearr_15424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15426);

return statearr_15424;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15426,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t15446 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15446 = (function (ch,f,map_LT_,meta15447){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15447 = meta15447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15446.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15446.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t15446.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15446.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t15449 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15449 = (function (fn1,_,meta15447,map_LT_,f,ch,meta15450){
this.fn1 = fn1;
this._ = _;
this.meta15447 = meta15447;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15450 = meta15450;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15449.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t15449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t15449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15439_SHARP_){
return f1.call(null,(((p1__15439_SHARP_ == null))?null:self__.f.call(null,p1__15439_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t15449.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15451){
var self__ = this;
var _15451__$1 = this;
return self__.meta15450;
});})(___$1))
;

cljs.core.async.t15449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15451,meta15450__$1){
var self__ = this;
var _15451__$1 = this;
return (new cljs.core.async.t15449(self__.fn1,self__._,self__.meta15447,self__.map_LT_,self__.f,self__.ch,meta15450__$1));
});})(___$1))
;

cljs.core.async.t15449.cljs$lang$type = true;

cljs.core.async.t15449.cljs$lang$ctorStr = "cljs.core.async/t15449";

cljs.core.async.t15449.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t15449");
});})(___$1))
;

cljs.core.async.__GT_t15449 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t15449(fn1__$1,___$2,meta15447__$1,map_LT___$1,f__$1,ch__$1,meta15450){
return (new cljs.core.async.t15449(fn1__$1,___$2,meta15447__$1,map_LT___$1,f__$1,ch__$1,meta15450));
});})(___$1))
;

}

return (new cljs.core.async.t15449(fn1,___$1,self__.meta15447,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4208__auto__ = ret;
if(cljs.core.truth_(and__4208__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4208__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t15446.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15446.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15446.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15448){
var self__ = this;
var _15448__$1 = this;
return self__.meta15447;
});

cljs.core.async.t15446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15448,meta15447__$1){
var self__ = this;
var _15448__$1 = this;
return (new cljs.core.async.t15446(self__.ch,self__.f,self__.map_LT_,meta15447__$1));
});

cljs.core.async.t15446.cljs$lang$type = true;

cljs.core.async.t15446.cljs$lang$ctorStr = "cljs.core.async/t15446";

cljs.core.async.t15446.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t15446");
});

cljs.core.async.__GT_t15446 = (function cljs$core$async$map_LT__$___GT_t15446(ch__$1,f__$1,map_LT___$1,meta15447){
return (new cljs.core.async.t15446(ch__$1,f__$1,map_LT___$1,meta15447));
});

}

return (new cljs.core.async.t15446(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t15455 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15455 = (function (ch,f,map_GT_,meta15456){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15456 = meta15456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15457){
var self__ = this;
var _15457__$1 = this;
return self__.meta15456;
});

cljs.core.async.t15455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15457,meta15456__$1){
var self__ = this;
var _15457__$1 = this;
return (new cljs.core.async.t15455(self__.ch,self__.f,self__.map_GT_,meta15456__$1));
});

cljs.core.async.t15455.cljs$lang$type = true;

cljs.core.async.t15455.cljs$lang$ctorStr = "cljs.core.async/t15455";

cljs.core.async.t15455.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t15455");
});

cljs.core.async.__GT_t15455 = (function cljs$core$async$map_GT__$___GT_t15455(ch__$1,f__$1,map_GT___$1,meta15456){
return (new cljs.core.async.t15455(ch__$1,f__$1,map_GT___$1,meta15456));
});

}

return (new cljs.core.async.t15455(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t15461 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t15461 = (function (ch,p,filter_GT_,meta15462){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15462 = meta15462;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15461.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t15461.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t15461.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t15461.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t15461.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t15461.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t15461.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t15461.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15463){
var self__ = this;
var _15463__$1 = this;
return self__.meta15462;
});

cljs.core.async.t15461.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15463,meta15462__$1){
var self__ = this;
var _15463__$1 = this;
return (new cljs.core.async.t15461(self__.ch,self__.p,self__.filter_GT_,meta15462__$1));
});

cljs.core.async.t15461.cljs$lang$type = true;

cljs.core.async.t15461.cljs$lang$ctorStr = "cljs.core.async/t15461";

cljs.core.async.t15461.cljs$lang$ctorPrWriter = (function (this__4799__auto__,writer__4800__auto__,opt__4801__auto__){
return cljs.core._write.call(null,writer__4800__auto__,"cljs.core.async/t15461");
});

cljs.core.async.__GT_t15461 = (function cljs$core$async$filter_GT__$___GT_t15461(ch__$1,p__$1,filter_GT___$1,meta15462){
return (new cljs.core.async.t15461(ch__$1,p__$1,filter_GT___$1,meta15462));
});

}

return (new cljs.core.async.t15461(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__15465 = arguments.length;
switch (G__15465) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7060__auto___15508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15508,out){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15508,out){
return (function (state_15486){
var state_val_15487 = (state_15486[(1)]);
if((state_val_15487 === (7))){
var inst_15482 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15488_15509 = state_15486__$1;
(statearr_15488_15509[(2)] = inst_15482);

(statearr_15488_15509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (1))){
var state_15486__$1 = state_15486;
var statearr_15489_15510 = state_15486__$1;
(statearr_15489_15510[(2)] = null);

(statearr_15489_15510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (4))){
var inst_15468 = (state_15486[(7)]);
var inst_15468__$1 = (state_15486[(2)]);
var inst_15469 = (inst_15468__$1 == null);
var state_15486__$1 = (function (){var statearr_15490 = state_15486;
(statearr_15490[(7)] = inst_15468__$1);

return statearr_15490;
})();
if(cljs.core.truth_(inst_15469)){
var statearr_15491_15511 = state_15486__$1;
(statearr_15491_15511[(1)] = (5));

} else {
var statearr_15492_15512 = state_15486__$1;
(statearr_15492_15512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (6))){
var inst_15468 = (state_15486[(7)]);
var inst_15473 = p.call(null,inst_15468);
var state_15486__$1 = state_15486;
if(cljs.core.truth_(inst_15473)){
var statearr_15493_15513 = state_15486__$1;
(statearr_15493_15513[(1)] = (8));

} else {
var statearr_15494_15514 = state_15486__$1;
(statearr_15494_15514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (3))){
var inst_15484 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15486__$1,inst_15484);
} else {
if((state_val_15487 === (2))){
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15486__$1,(4),ch);
} else {
if((state_val_15487 === (11))){
var inst_15476 = (state_15486[(2)]);
var state_15486__$1 = state_15486;
var statearr_15495_15515 = state_15486__$1;
(statearr_15495_15515[(2)] = inst_15476);

(statearr_15495_15515[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (9))){
var state_15486__$1 = state_15486;
var statearr_15496_15516 = state_15486__$1;
(statearr_15496_15516[(2)] = null);

(statearr_15496_15516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (5))){
var inst_15471 = cljs.core.async.close_BANG_.call(null,out);
var state_15486__$1 = state_15486;
var statearr_15497_15517 = state_15486__$1;
(statearr_15497_15517[(2)] = inst_15471);

(statearr_15497_15517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (10))){
var inst_15479 = (state_15486[(2)]);
var state_15486__$1 = (function (){var statearr_15498 = state_15486;
(statearr_15498[(8)] = inst_15479);

return statearr_15498;
})();
var statearr_15499_15518 = state_15486__$1;
(statearr_15499_15518[(2)] = null);

(statearr_15499_15518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15487 === (8))){
var inst_15468 = (state_15486[(7)]);
var state_15486__$1 = state_15486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15486__$1,(11),out,inst_15468);
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
});})(c__7060__auto___15508,out))
;
return ((function (switch__6998__auto__,c__7060__auto___15508,out){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15503 = [null,null,null,null,null,null,null,null,null];
(statearr_15503[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15503[(1)] = (1));

return statearr_15503;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15486){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15504){if((e15504 instanceof Object)){
var ex__7002__auto__ = e15504;
var statearr_15505_15519 = state_15486;
(statearr_15505_15519[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15504;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15520 = state_15486;
state_15486 = G__15520;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15508,out))
})();
var state__7062__auto__ = (function (){var statearr_15506 = f__7061__auto__.call(null);
(statearr_15506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15508);

return statearr_15506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15508,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__15522 = arguments.length;
switch (G__15522) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7060__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto__){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto__){
return (function (state_15689){
var state_val_15690 = (state_15689[(1)]);
if((state_val_15690 === (7))){
var inst_15685 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15691_15732 = state_15689__$1;
(statearr_15691_15732[(2)] = inst_15685);

(statearr_15691_15732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (20))){
var inst_15655 = (state_15689[(7)]);
var inst_15666 = (state_15689[(2)]);
var inst_15667 = cljs.core.next.call(null,inst_15655);
var inst_15641 = inst_15667;
var inst_15642 = null;
var inst_15643 = (0);
var inst_15644 = (0);
var state_15689__$1 = (function (){var statearr_15692 = state_15689;
(statearr_15692[(8)] = inst_15644);

(statearr_15692[(9)] = inst_15642);

(statearr_15692[(10)] = inst_15666);

(statearr_15692[(11)] = inst_15641);

(statearr_15692[(12)] = inst_15643);

return statearr_15692;
})();
var statearr_15693_15733 = state_15689__$1;
(statearr_15693_15733[(2)] = null);

(statearr_15693_15733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (1))){
var state_15689__$1 = state_15689;
var statearr_15694_15734 = state_15689__$1;
(statearr_15694_15734[(2)] = null);

(statearr_15694_15734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (4))){
var inst_15630 = (state_15689[(13)]);
var inst_15630__$1 = (state_15689[(2)]);
var inst_15631 = (inst_15630__$1 == null);
var state_15689__$1 = (function (){var statearr_15695 = state_15689;
(statearr_15695[(13)] = inst_15630__$1);

return statearr_15695;
})();
if(cljs.core.truth_(inst_15631)){
var statearr_15696_15735 = state_15689__$1;
(statearr_15696_15735[(1)] = (5));

} else {
var statearr_15697_15736 = state_15689__$1;
(statearr_15697_15736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (15))){
var state_15689__$1 = state_15689;
var statearr_15701_15737 = state_15689__$1;
(statearr_15701_15737[(2)] = null);

(statearr_15701_15737[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (21))){
var state_15689__$1 = state_15689;
var statearr_15702_15738 = state_15689__$1;
(statearr_15702_15738[(2)] = null);

(statearr_15702_15738[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (13))){
var inst_15644 = (state_15689[(8)]);
var inst_15642 = (state_15689[(9)]);
var inst_15641 = (state_15689[(11)]);
var inst_15643 = (state_15689[(12)]);
var inst_15651 = (state_15689[(2)]);
var inst_15652 = (inst_15644 + (1));
var tmp15698 = inst_15642;
var tmp15699 = inst_15641;
var tmp15700 = inst_15643;
var inst_15641__$1 = tmp15699;
var inst_15642__$1 = tmp15698;
var inst_15643__$1 = tmp15700;
var inst_15644__$1 = inst_15652;
var state_15689__$1 = (function (){var statearr_15703 = state_15689;
(statearr_15703[(8)] = inst_15644__$1);

(statearr_15703[(14)] = inst_15651);

(statearr_15703[(9)] = inst_15642__$1);

(statearr_15703[(11)] = inst_15641__$1);

(statearr_15703[(12)] = inst_15643__$1);

return statearr_15703;
})();
var statearr_15704_15739 = state_15689__$1;
(statearr_15704_15739[(2)] = null);

(statearr_15704_15739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (22))){
var state_15689__$1 = state_15689;
var statearr_15705_15740 = state_15689__$1;
(statearr_15705_15740[(2)] = null);

(statearr_15705_15740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (6))){
var inst_15630 = (state_15689[(13)]);
var inst_15639 = f.call(null,inst_15630);
var inst_15640 = cljs.core.seq.call(null,inst_15639);
var inst_15641 = inst_15640;
var inst_15642 = null;
var inst_15643 = (0);
var inst_15644 = (0);
var state_15689__$1 = (function (){var statearr_15706 = state_15689;
(statearr_15706[(8)] = inst_15644);

(statearr_15706[(9)] = inst_15642);

(statearr_15706[(11)] = inst_15641);

(statearr_15706[(12)] = inst_15643);

return statearr_15706;
})();
var statearr_15707_15741 = state_15689__$1;
(statearr_15707_15741[(2)] = null);

(statearr_15707_15741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (17))){
var inst_15655 = (state_15689[(7)]);
var inst_15659 = cljs.core.chunk_first.call(null,inst_15655);
var inst_15660 = cljs.core.chunk_rest.call(null,inst_15655);
var inst_15661 = cljs.core.count.call(null,inst_15659);
var inst_15641 = inst_15660;
var inst_15642 = inst_15659;
var inst_15643 = inst_15661;
var inst_15644 = (0);
var state_15689__$1 = (function (){var statearr_15708 = state_15689;
(statearr_15708[(8)] = inst_15644);

(statearr_15708[(9)] = inst_15642);

(statearr_15708[(11)] = inst_15641);

(statearr_15708[(12)] = inst_15643);

return statearr_15708;
})();
var statearr_15709_15742 = state_15689__$1;
(statearr_15709_15742[(2)] = null);

(statearr_15709_15742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (3))){
var inst_15687 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15689__$1,inst_15687);
} else {
if((state_val_15690 === (12))){
var inst_15675 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15710_15743 = state_15689__$1;
(statearr_15710_15743[(2)] = inst_15675);

(statearr_15710_15743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (2))){
var state_15689__$1 = state_15689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15689__$1,(4),in$);
} else {
if((state_val_15690 === (23))){
var inst_15683 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15711_15744 = state_15689__$1;
(statearr_15711_15744[(2)] = inst_15683);

(statearr_15711_15744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (19))){
var inst_15670 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15712_15745 = state_15689__$1;
(statearr_15712_15745[(2)] = inst_15670);

(statearr_15712_15745[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (11))){
var inst_15655 = (state_15689[(7)]);
var inst_15641 = (state_15689[(11)]);
var inst_15655__$1 = cljs.core.seq.call(null,inst_15641);
var state_15689__$1 = (function (){var statearr_15713 = state_15689;
(statearr_15713[(7)] = inst_15655__$1);

return statearr_15713;
})();
if(inst_15655__$1){
var statearr_15714_15746 = state_15689__$1;
(statearr_15714_15746[(1)] = (14));

} else {
var statearr_15715_15747 = state_15689__$1;
(statearr_15715_15747[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (9))){
var inst_15677 = (state_15689[(2)]);
var inst_15678 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15689__$1 = (function (){var statearr_15716 = state_15689;
(statearr_15716[(15)] = inst_15677);

return statearr_15716;
})();
if(cljs.core.truth_(inst_15678)){
var statearr_15717_15748 = state_15689__$1;
(statearr_15717_15748[(1)] = (21));

} else {
var statearr_15718_15749 = state_15689__$1;
(statearr_15718_15749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (5))){
var inst_15633 = cljs.core.async.close_BANG_.call(null,out);
var state_15689__$1 = state_15689;
var statearr_15719_15750 = state_15689__$1;
(statearr_15719_15750[(2)] = inst_15633);

(statearr_15719_15750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (14))){
var inst_15655 = (state_15689[(7)]);
var inst_15657 = cljs.core.chunked_seq_QMARK_.call(null,inst_15655);
var state_15689__$1 = state_15689;
if(inst_15657){
var statearr_15720_15751 = state_15689__$1;
(statearr_15720_15751[(1)] = (17));

} else {
var statearr_15721_15752 = state_15689__$1;
(statearr_15721_15752[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (16))){
var inst_15673 = (state_15689[(2)]);
var state_15689__$1 = state_15689;
var statearr_15722_15753 = state_15689__$1;
(statearr_15722_15753[(2)] = inst_15673);

(statearr_15722_15753[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15690 === (10))){
var inst_15644 = (state_15689[(8)]);
var inst_15642 = (state_15689[(9)]);
var inst_15649 = cljs.core._nth.call(null,inst_15642,inst_15644);
var state_15689__$1 = state_15689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15689__$1,(13),out,inst_15649);
} else {
if((state_val_15690 === (18))){
var inst_15655 = (state_15689[(7)]);
var inst_15664 = cljs.core.first.call(null,inst_15655);
var state_15689__$1 = state_15689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15689__$1,(20),out,inst_15664);
} else {
if((state_val_15690 === (8))){
var inst_15644 = (state_15689[(8)]);
var inst_15643 = (state_15689[(12)]);
var inst_15646 = (inst_15644 < inst_15643);
var inst_15647 = inst_15646;
var state_15689__$1 = state_15689;
if(cljs.core.truth_(inst_15647)){
var statearr_15723_15754 = state_15689__$1;
(statearr_15723_15754[(1)] = (10));

} else {
var statearr_15724_15755 = state_15689__$1;
(statearr_15724_15755[(1)] = (11));

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
});})(c__7060__auto__))
;
return ((function (switch__6998__auto__,c__7060__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__6999__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__6999__auto____0 = (function (){
var statearr_15728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15728[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__6999__auto__);

(statearr_15728[(1)] = (1));

return statearr_15728;
});
var cljs$core$async$mapcat_STAR__$_state_machine__6999__auto____1 = (function (state_15689){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15729){if((e15729 instanceof Object)){
var ex__7002__auto__ = e15729;
var statearr_15730_15756 = state_15689;
(statearr_15730_15756[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15757 = state_15689;
state_15689 = G__15757;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__6999__auto__ = function(state_15689){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__6999__auto____1.call(this,state_15689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__6999__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__6999__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto__))
})();
var state__7062__auto__ = (function (){var statearr_15731 = f__7061__auto__.call(null);
(statearr_15731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto__);

return statearr_15731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto__))
);

return c__7060__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__15759 = arguments.length;
switch (G__15759) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__15762 = arguments.length;
switch (G__15762) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__15765 = arguments.length;
switch (G__15765) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7060__auto___15815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15815,out){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15815,out){
return (function (state_15789){
var state_val_15790 = (state_15789[(1)]);
if((state_val_15790 === (7))){
var inst_15784 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15791_15816 = state_15789__$1;
(statearr_15791_15816[(2)] = inst_15784);

(statearr_15791_15816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (1))){
var inst_15766 = null;
var state_15789__$1 = (function (){var statearr_15792 = state_15789;
(statearr_15792[(7)] = inst_15766);

return statearr_15792;
})();
var statearr_15793_15817 = state_15789__$1;
(statearr_15793_15817[(2)] = null);

(statearr_15793_15817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (4))){
var inst_15769 = (state_15789[(8)]);
var inst_15769__$1 = (state_15789[(2)]);
var inst_15770 = (inst_15769__$1 == null);
var inst_15771 = cljs.core.not.call(null,inst_15770);
var state_15789__$1 = (function (){var statearr_15794 = state_15789;
(statearr_15794[(8)] = inst_15769__$1);

return statearr_15794;
})();
if(inst_15771){
var statearr_15795_15818 = state_15789__$1;
(statearr_15795_15818[(1)] = (5));

} else {
var statearr_15796_15819 = state_15789__$1;
(statearr_15796_15819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (6))){
var state_15789__$1 = state_15789;
var statearr_15797_15820 = state_15789__$1;
(statearr_15797_15820[(2)] = null);

(statearr_15797_15820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (3))){
var inst_15786 = (state_15789[(2)]);
var inst_15787 = cljs.core.async.close_BANG_.call(null,out);
var state_15789__$1 = (function (){var statearr_15798 = state_15789;
(statearr_15798[(9)] = inst_15786);

return statearr_15798;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15789__$1,inst_15787);
} else {
if((state_val_15790 === (2))){
var state_15789__$1 = state_15789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15789__$1,(4),ch);
} else {
if((state_val_15790 === (11))){
var inst_15769 = (state_15789[(8)]);
var inst_15778 = (state_15789[(2)]);
var inst_15766 = inst_15769;
var state_15789__$1 = (function (){var statearr_15799 = state_15789;
(statearr_15799[(7)] = inst_15766);

(statearr_15799[(10)] = inst_15778);

return statearr_15799;
})();
var statearr_15800_15821 = state_15789__$1;
(statearr_15800_15821[(2)] = null);

(statearr_15800_15821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (9))){
var inst_15769 = (state_15789[(8)]);
var state_15789__$1 = state_15789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15789__$1,(11),out,inst_15769);
} else {
if((state_val_15790 === (5))){
var inst_15766 = (state_15789[(7)]);
var inst_15769 = (state_15789[(8)]);
var inst_15773 = cljs.core._EQ_.call(null,inst_15769,inst_15766);
var state_15789__$1 = state_15789;
if(inst_15773){
var statearr_15802_15822 = state_15789__$1;
(statearr_15802_15822[(1)] = (8));

} else {
var statearr_15803_15823 = state_15789__$1;
(statearr_15803_15823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (10))){
var inst_15781 = (state_15789[(2)]);
var state_15789__$1 = state_15789;
var statearr_15804_15824 = state_15789__$1;
(statearr_15804_15824[(2)] = inst_15781);

(statearr_15804_15824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15790 === (8))){
var inst_15766 = (state_15789[(7)]);
var tmp15801 = inst_15766;
var inst_15766__$1 = tmp15801;
var state_15789__$1 = (function (){var statearr_15805 = state_15789;
(statearr_15805[(7)] = inst_15766__$1);

return statearr_15805;
})();
var statearr_15806_15825 = state_15789__$1;
(statearr_15806_15825[(2)] = null);

(statearr_15806_15825[(1)] = (2));


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
});})(c__7060__auto___15815,out))
;
return ((function (switch__6998__auto__,c__7060__auto___15815,out){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15810 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15810[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15810[(1)] = (1));

return statearr_15810;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15789){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15811){if((e15811 instanceof Object)){
var ex__7002__auto__ = e15811;
var statearr_15812_15826 = state_15789;
(statearr_15812_15826[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15827 = state_15789;
state_15789 = G__15827;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15815,out))
})();
var state__7062__auto__ = (function (){var statearr_15813 = f__7061__auto__.call(null);
(statearr_15813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15815);

return statearr_15813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15815,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__15829 = arguments.length;
switch (G__15829) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7060__auto___15898 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15898,out){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15898,out){
return (function (state_15867){
var state_val_15868 = (state_15867[(1)]);
if((state_val_15868 === (7))){
var inst_15863 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15869_15899 = state_15867__$1;
(statearr_15869_15899[(2)] = inst_15863);

(statearr_15869_15899[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (1))){
var inst_15830 = (new Array(n));
var inst_15831 = inst_15830;
var inst_15832 = (0);
var state_15867__$1 = (function (){var statearr_15870 = state_15867;
(statearr_15870[(7)] = inst_15831);

(statearr_15870[(8)] = inst_15832);

return statearr_15870;
})();
var statearr_15871_15900 = state_15867__$1;
(statearr_15871_15900[(2)] = null);

(statearr_15871_15900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (4))){
var inst_15835 = (state_15867[(9)]);
var inst_15835__$1 = (state_15867[(2)]);
var inst_15836 = (inst_15835__$1 == null);
var inst_15837 = cljs.core.not.call(null,inst_15836);
var state_15867__$1 = (function (){var statearr_15872 = state_15867;
(statearr_15872[(9)] = inst_15835__$1);

return statearr_15872;
})();
if(inst_15837){
var statearr_15873_15901 = state_15867__$1;
(statearr_15873_15901[(1)] = (5));

} else {
var statearr_15874_15902 = state_15867__$1;
(statearr_15874_15902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (15))){
var inst_15857 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15875_15903 = state_15867__$1;
(statearr_15875_15903[(2)] = inst_15857);

(statearr_15875_15903[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (13))){
var state_15867__$1 = state_15867;
var statearr_15876_15904 = state_15867__$1;
(statearr_15876_15904[(2)] = null);

(statearr_15876_15904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (6))){
var inst_15832 = (state_15867[(8)]);
var inst_15853 = (inst_15832 > (0));
var state_15867__$1 = state_15867;
if(cljs.core.truth_(inst_15853)){
var statearr_15877_15905 = state_15867__$1;
(statearr_15877_15905[(1)] = (12));

} else {
var statearr_15878_15906 = state_15867__$1;
(statearr_15878_15906[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (3))){
var inst_15865 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15867__$1,inst_15865);
} else {
if((state_val_15868 === (12))){
var inst_15831 = (state_15867[(7)]);
var inst_15855 = cljs.core.vec.call(null,inst_15831);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15867__$1,(15),out,inst_15855);
} else {
if((state_val_15868 === (2))){
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15867__$1,(4),ch);
} else {
if((state_val_15868 === (11))){
var inst_15847 = (state_15867[(2)]);
var inst_15848 = (new Array(n));
var inst_15831 = inst_15848;
var inst_15832 = (0);
var state_15867__$1 = (function (){var statearr_15879 = state_15867;
(statearr_15879[(7)] = inst_15831);

(statearr_15879[(10)] = inst_15847);

(statearr_15879[(8)] = inst_15832);

return statearr_15879;
})();
var statearr_15880_15907 = state_15867__$1;
(statearr_15880_15907[(2)] = null);

(statearr_15880_15907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (9))){
var inst_15831 = (state_15867[(7)]);
var inst_15845 = cljs.core.vec.call(null,inst_15831);
var state_15867__$1 = state_15867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15867__$1,(11),out,inst_15845);
} else {
if((state_val_15868 === (5))){
var inst_15831 = (state_15867[(7)]);
var inst_15835 = (state_15867[(9)]);
var inst_15840 = (state_15867[(11)]);
var inst_15832 = (state_15867[(8)]);
var inst_15839 = (inst_15831[inst_15832] = inst_15835);
var inst_15840__$1 = (inst_15832 + (1));
var inst_15841 = (inst_15840__$1 < n);
var state_15867__$1 = (function (){var statearr_15881 = state_15867;
(statearr_15881[(12)] = inst_15839);

(statearr_15881[(11)] = inst_15840__$1);

return statearr_15881;
})();
if(cljs.core.truth_(inst_15841)){
var statearr_15882_15908 = state_15867__$1;
(statearr_15882_15908[(1)] = (8));

} else {
var statearr_15883_15909 = state_15867__$1;
(statearr_15883_15909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (14))){
var inst_15860 = (state_15867[(2)]);
var inst_15861 = cljs.core.async.close_BANG_.call(null,out);
var state_15867__$1 = (function (){var statearr_15885 = state_15867;
(statearr_15885[(13)] = inst_15860);

return statearr_15885;
})();
var statearr_15886_15910 = state_15867__$1;
(statearr_15886_15910[(2)] = inst_15861);

(statearr_15886_15910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (10))){
var inst_15851 = (state_15867[(2)]);
var state_15867__$1 = state_15867;
var statearr_15887_15911 = state_15867__$1;
(statearr_15887_15911[(2)] = inst_15851);

(statearr_15887_15911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15868 === (8))){
var inst_15831 = (state_15867[(7)]);
var inst_15840 = (state_15867[(11)]);
var tmp15884 = inst_15831;
var inst_15831__$1 = tmp15884;
var inst_15832 = inst_15840;
var state_15867__$1 = (function (){var statearr_15888 = state_15867;
(statearr_15888[(7)] = inst_15831__$1);

(statearr_15888[(8)] = inst_15832);

return statearr_15888;
})();
var statearr_15889_15912 = state_15867__$1;
(statearr_15889_15912[(2)] = null);

(statearr_15889_15912[(1)] = (2));


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
});})(c__7060__auto___15898,out))
;
return ((function (switch__6998__auto__,c__7060__auto___15898,out){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15893[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15893[(1)] = (1));

return statearr_15893;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15867){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15894){if((e15894 instanceof Object)){
var ex__7002__auto__ = e15894;
var statearr_15895_15913 = state_15867;
(statearr_15895_15913[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15914 = state_15867;
state_15867 = G__15914;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15898,out))
})();
var state__7062__auto__ = (function (){var statearr_15896 = f__7061__auto__.call(null);
(statearr_15896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15898);

return statearr_15896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15898,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__15916 = arguments.length;
switch (G__15916) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7060__auto___15989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7060__auto___15989,out){
return (function (){
var f__7061__auto__ = (function (){var switch__6998__auto__ = ((function (c__7060__auto___15989,out){
return (function (state_15958){
var state_val_15959 = (state_15958[(1)]);
if((state_val_15959 === (7))){
var inst_15954 = (state_15958[(2)]);
var state_15958__$1 = state_15958;
var statearr_15960_15990 = state_15958__$1;
(statearr_15960_15990[(2)] = inst_15954);

(statearr_15960_15990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (1))){
var inst_15917 = [];
var inst_15918 = inst_15917;
var inst_15919 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_15958__$1 = (function (){var statearr_15961 = state_15958;
(statearr_15961[(7)] = inst_15919);

(statearr_15961[(8)] = inst_15918);

return statearr_15961;
})();
var statearr_15962_15991 = state_15958__$1;
(statearr_15962_15991[(2)] = null);

(statearr_15962_15991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (4))){
var inst_15922 = (state_15958[(9)]);
var inst_15922__$1 = (state_15958[(2)]);
var inst_15923 = (inst_15922__$1 == null);
var inst_15924 = cljs.core.not.call(null,inst_15923);
var state_15958__$1 = (function (){var statearr_15963 = state_15958;
(statearr_15963[(9)] = inst_15922__$1);

return statearr_15963;
})();
if(inst_15924){
var statearr_15964_15992 = state_15958__$1;
(statearr_15964_15992[(1)] = (5));

} else {
var statearr_15965_15993 = state_15958__$1;
(statearr_15965_15993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (15))){
var inst_15948 = (state_15958[(2)]);
var state_15958__$1 = state_15958;
var statearr_15966_15994 = state_15958__$1;
(statearr_15966_15994[(2)] = inst_15948);

(statearr_15966_15994[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (13))){
var state_15958__$1 = state_15958;
var statearr_15967_15995 = state_15958__$1;
(statearr_15967_15995[(2)] = null);

(statearr_15967_15995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (6))){
var inst_15918 = (state_15958[(8)]);
var inst_15943 = inst_15918.length;
var inst_15944 = (inst_15943 > (0));
var state_15958__$1 = state_15958;
if(cljs.core.truth_(inst_15944)){
var statearr_15968_15996 = state_15958__$1;
(statearr_15968_15996[(1)] = (12));

} else {
var statearr_15969_15997 = state_15958__$1;
(statearr_15969_15997[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (3))){
var inst_15956 = (state_15958[(2)]);
var state_15958__$1 = state_15958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15958__$1,inst_15956);
} else {
if((state_val_15959 === (12))){
var inst_15918 = (state_15958[(8)]);
var inst_15946 = cljs.core.vec.call(null,inst_15918);
var state_15958__$1 = state_15958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15958__$1,(15),out,inst_15946);
} else {
if((state_val_15959 === (2))){
var state_15958__$1 = state_15958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15958__$1,(4),ch);
} else {
if((state_val_15959 === (11))){
var inst_15922 = (state_15958[(9)]);
var inst_15926 = (state_15958[(10)]);
var inst_15936 = (state_15958[(2)]);
var inst_15937 = [];
var inst_15938 = inst_15937.push(inst_15922);
var inst_15918 = inst_15937;
var inst_15919 = inst_15926;
var state_15958__$1 = (function (){var statearr_15970 = state_15958;
(statearr_15970[(7)] = inst_15919);

(statearr_15970[(8)] = inst_15918);

(statearr_15970[(11)] = inst_15936);

(statearr_15970[(12)] = inst_15938);

return statearr_15970;
})();
var statearr_15971_15998 = state_15958__$1;
(statearr_15971_15998[(2)] = null);

(statearr_15971_15998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (9))){
var inst_15918 = (state_15958[(8)]);
var inst_15934 = cljs.core.vec.call(null,inst_15918);
var state_15958__$1 = state_15958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15958__$1,(11),out,inst_15934);
} else {
if((state_val_15959 === (5))){
var inst_15919 = (state_15958[(7)]);
var inst_15922 = (state_15958[(9)]);
var inst_15926 = (state_15958[(10)]);
var inst_15926__$1 = f.call(null,inst_15922);
var inst_15927 = cljs.core._EQ_.call(null,inst_15926__$1,inst_15919);
var inst_15928 = cljs.core.keyword_identical_QMARK_.call(null,inst_15919,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_15929 = (inst_15927) || (inst_15928);
var state_15958__$1 = (function (){var statearr_15972 = state_15958;
(statearr_15972[(10)] = inst_15926__$1);

return statearr_15972;
})();
if(cljs.core.truth_(inst_15929)){
var statearr_15973_15999 = state_15958__$1;
(statearr_15973_15999[(1)] = (8));

} else {
var statearr_15974_16000 = state_15958__$1;
(statearr_15974_16000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (14))){
var inst_15951 = (state_15958[(2)]);
var inst_15952 = cljs.core.async.close_BANG_.call(null,out);
var state_15958__$1 = (function (){var statearr_15976 = state_15958;
(statearr_15976[(13)] = inst_15951);

return statearr_15976;
})();
var statearr_15977_16001 = state_15958__$1;
(statearr_15977_16001[(2)] = inst_15952);

(statearr_15977_16001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (10))){
var inst_15941 = (state_15958[(2)]);
var state_15958__$1 = state_15958;
var statearr_15978_16002 = state_15958__$1;
(statearr_15978_16002[(2)] = inst_15941);

(statearr_15978_16002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15959 === (8))){
var inst_15918 = (state_15958[(8)]);
var inst_15922 = (state_15958[(9)]);
var inst_15926 = (state_15958[(10)]);
var inst_15931 = inst_15918.push(inst_15922);
var tmp15975 = inst_15918;
var inst_15918__$1 = tmp15975;
var inst_15919 = inst_15926;
var state_15958__$1 = (function (){var statearr_15979 = state_15958;
(statearr_15979[(7)] = inst_15919);

(statearr_15979[(8)] = inst_15918__$1);

(statearr_15979[(14)] = inst_15931);

return statearr_15979;
})();
var statearr_15980_16003 = state_15958__$1;
(statearr_15980_16003[(2)] = null);

(statearr_15980_16003[(1)] = (2));


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
});})(c__7060__auto___15989,out))
;
return ((function (switch__6998__auto__,c__7060__auto___15989,out){
return (function() {
var cljs$core$async$state_machine__6999__auto__ = null;
var cljs$core$async$state_machine__6999__auto____0 = (function (){
var statearr_15984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15984[(0)] = cljs$core$async$state_machine__6999__auto__);

(statearr_15984[(1)] = (1));

return statearr_15984;
});
var cljs$core$async$state_machine__6999__auto____1 = (function (state_15958){
while(true){
var ret_value__7000__auto__ = (function (){try{while(true){
var result__7001__auto__ = switch__6998__auto__.call(null,state_15958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7001__auto__;
}
break;
}
}catch (e15985){if((e15985 instanceof Object)){
var ex__7002__auto__ = e15985;
var statearr_15986_16004 = state_15958;
(statearr_15986_16004[(5)] = ex__7002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16005 = state_15958;
state_15958 = G__16005;
continue;
} else {
return ret_value__7000__auto__;
}
break;
}
});
cljs$core$async$state_machine__6999__auto__ = function(state_15958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__6999__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__6999__auto____1.call(this,state_15958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__6999__auto____0;
cljs$core$async$state_machine__6999__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__6999__auto____1;
return cljs$core$async$state_machine__6999__auto__;
})()
;})(switch__6998__auto__,c__7060__auto___15989,out))
})();
var state__7062__auto__ = (function (){var statearr_15987 = f__7061__auto__.call(null);
(statearr_15987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7060__auto___15989);

return statearr_15987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7062__auto__);
});})(c__7060__auto___15989,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map