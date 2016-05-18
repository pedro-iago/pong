// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args37223 = [];
var len__19784__auto___37235 = arguments.length;
var i__19785__auto___37236 = (0);
while(true){
if((i__19785__auto___37236 < len__19784__auto___37235)){
args37223.push((arguments[i__19785__auto___37236]));

var G__37241 = (i__19785__auto___37236 + (1));
i__19785__auto___37236 = G__37241;
continue;
} else {
}
break;
}

var G__37228 = args37223.length;
switch (G__37228) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37223.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37231 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37231 = (function (f,blockable,meta37232){
this.f = f;
this.blockable = blockable;
this.meta37232 = meta37232;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37233,meta37232__$1){
var self__ = this;
var _37233__$1 = this;
return (new cljs.core.async.t_cljs$core$async37231(self__.f,self__.blockable,meta37232__$1));
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37233){
var self__ = this;
var _37233__$1 = this;
return self__.meta37232;
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37231.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37231.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37232","meta37232",1831741728,null)], null);
});

cljs.core.async.t_cljs$core$async37231.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37231.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37231";

cljs.core.async.t_cljs$core$async37231.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async37231");
});

cljs.core.async.__GT_t_cljs$core$async37231 = (function cljs$core$async$__GT_t_cljs$core$async37231(f__$1,blockable__$1,meta37232){
return (new cljs.core.async.t_cljs$core$async37231(f__$1,blockable__$1,meta37232));
});

}

return (new cljs.core.async.t_cljs$core$async37231(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args37267 = [];
var len__19784__auto___37275 = arguments.length;
var i__19785__auto___37277 = (0);
while(true){
if((i__19785__auto___37277 < len__19784__auto___37275)){
args37267.push((arguments[i__19785__auto___37277]));

var G__37279 = (i__19785__auto___37277 + (1));
i__19785__auto___37277 = G__37279;
continue;
} else {
}
break;
}

var G__37274 = args37267.length;
switch (G__37274) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37267.length)].join('')));

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
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args37288 = [];
var len__19784__auto___37296 = arguments.length;
var i__19785__auto___37297 = (0);
while(true){
if((i__19785__auto___37297 < len__19784__auto___37296)){
args37288.push((arguments[i__19785__auto___37297]));

var G__37298 = (i__19785__auto___37297 + (1));
i__19785__auto___37297 = G__37298;
continue;
} else {
}
break;
}

var G__37291 = args37288.length;
switch (G__37291) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37288.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
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
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args37306 = [];
var len__19784__auto___37312 = arguments.length;
var i__19785__auto___37313 = (0);
while(true){
if((i__19785__auto___37313 < len__19784__auto___37312)){
args37306.push((arguments[i__19785__auto___37313]));

var G__37314 = (i__19785__auto___37313 + (1));
i__19785__auto___37313 = G__37314;
continue;
} else {
}
break;
}

var G__37309 = args37306.length;
switch (G__37309) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37306.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37319 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37319);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37319,ret){
return (function (){
return fn1.call(null,val_37319);
});})(val_37319,ret))
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
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
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
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args37327 = [];
var len__19784__auto___37339 = arguments.length;
var i__19785__auto___37340 = (0);
while(true){
if((i__19785__auto___37340 < len__19784__auto___37339)){
args37327.push((arguments[i__19785__auto___37340]));

var G__37344 = (i__19785__auto___37340 + (1));
i__19785__auto___37340 = G__37344;
continue;
} else {
}
break;
}

var G__37332 = args37327.length;
switch (G__37332) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37327.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__19629__auto___37363 = n;
var x_37364 = (0);
while(true){
if((x_37364 < n__19629__auto___37363)){
(a[x_37364] = (0));

var G__37365 = (x_37364 + (1));
x_37364 = G__37365;
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

var G__37368 = (i + (1));
i = G__37368;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37376 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37376 = (function (alt_flag,flag,meta37377){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37377 = meta37377;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37378,meta37377__$1){
var self__ = this;
var _37378__$1 = this;
return (new cljs.core.async.t_cljs$core$async37376(self__.alt_flag,self__.flag,meta37377__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37378){
var self__ = this;
var _37378__$1 = this;
return self__.meta37377;
});})(flag))
;

cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37376.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37377","meta37377",-1449560583,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37376.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37376.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37376";

cljs.core.async.t_cljs$core$async37376.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async37376");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37376 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37376(alt_flag__$1,flag__$1,meta37377){
return (new cljs.core.async.t_cljs$core$async37376(alt_flag__$1,flag__$1,meta37377));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37376(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37399 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37399 = (function (alt_handler,flag,cb,meta37400){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37400 = meta37400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37401,meta37400__$1){
var self__ = this;
var _37401__$1 = this;
return (new cljs.core.async.t_cljs$core$async37399(self__.alt_handler,self__.flag,self__.cb,meta37400__$1));
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37401){
var self__ = this;
var _37401__$1 = this;
return self__.meta37400;
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37399.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37399.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37400","meta37400",-1680796556,null)], null);
});

cljs.core.async.t_cljs$core$async37399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37399";

cljs.core.async.t_cljs$core$async37399.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async37399");
});

cljs.core.async.__GT_t_cljs$core$async37399 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37399(alt_handler__$1,flag__$1,cb__$1,meta37400){
return (new cljs.core.async.t_cljs$core$async37399(alt_handler__$1,flag__$1,cb__$1,meta37400));
});

}

return (new cljs.core.async.t_cljs$core$async37399(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37420_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37420_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37421_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37421_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18726__auto__ = wport;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return port;
}
})()], null));
} else {
var G__37436 = (i + (1));
i = G__37436;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18726__auto__ = ret;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18714__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___37446 = arguments.length;
var i__19785__auto___37447 = (0);
while(true){
if((i__19785__auto___37447 < len__19784__auto___37446)){
args__19791__auto__.push((arguments[i__19785__auto___37447]));

var G__37450 = (i__19785__auto___37447 + (1));
i__19785__auto___37447 = G__37450;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37443){
var map__37444 = p__37443;
var map__37444__$1 = ((((!((map__37444 == null)))?((((map__37444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37444):map__37444);
var opts = map__37444__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37438){
var G__37439 = cljs.core.first.call(null,seq37438);
var seq37438__$1 = cljs.core.next.call(null,seq37438);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37439,seq37438__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args37455 = [];
var len__19784__auto___37537 = arguments.length;
var i__19785__auto___37538 = (0);
while(true){
if((i__19785__auto___37538 < len__19784__auto___37537)){
args37455.push((arguments[i__19785__auto___37538]));

var G__37539 = (i__19785__auto___37538 + (1));
i__19785__auto___37538 = G__37539;
continue;
} else {
}
break;
}

var G__37459 = args37455.length;
switch (G__37459) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37455.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37161__auto___37543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___37543){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___37543){
return (function (state_37500){
var state_val_37501 = (state_37500[(1)]);
if((state_val_37501 === (7))){
var inst_37494 = (state_37500[(2)]);
var state_37500__$1 = state_37500;
var statearr_37505_37544 = state_37500__$1;
(statearr_37505_37544[(2)] = inst_37494);

(statearr_37505_37544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (1))){
var state_37500__$1 = state_37500;
var statearr_37506_37546 = state_37500__$1;
(statearr_37506_37546[(2)] = null);

(statearr_37506_37546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (4))){
var inst_37471 = (state_37500[(7)]);
var inst_37471__$1 = (state_37500[(2)]);
var inst_37474 = (inst_37471__$1 == null);
var state_37500__$1 = (function (){var statearr_37509 = state_37500;
(statearr_37509[(7)] = inst_37471__$1);

return statearr_37509;
})();
if(cljs.core.truth_(inst_37474)){
var statearr_37510_37549 = state_37500__$1;
(statearr_37510_37549[(1)] = (5));

} else {
var statearr_37511_37552 = state_37500__$1;
(statearr_37511_37552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (13))){
var state_37500__$1 = state_37500;
var statearr_37514_37554 = state_37500__$1;
(statearr_37514_37554[(2)] = null);

(statearr_37514_37554[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (6))){
var inst_37471 = (state_37500[(7)]);
var state_37500__$1 = state_37500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37500__$1,(11),to,inst_37471);
} else {
if((state_val_37501 === (3))){
var inst_37497 = (state_37500[(2)]);
var state_37500__$1 = state_37500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37500__$1,inst_37497);
} else {
if((state_val_37501 === (12))){
var state_37500__$1 = state_37500;
var statearr_37516_37558 = state_37500__$1;
(statearr_37516_37558[(2)] = null);

(statearr_37516_37558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (2))){
var state_37500__$1 = state_37500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37500__$1,(4),from);
} else {
if((state_val_37501 === (11))){
var inst_37484 = (state_37500[(2)]);
var state_37500__$1 = state_37500;
if(cljs.core.truth_(inst_37484)){
var statearr_37519_37560 = state_37500__$1;
(statearr_37519_37560[(1)] = (12));

} else {
var statearr_37520_37561 = state_37500__$1;
(statearr_37520_37561[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (9))){
var state_37500__$1 = state_37500;
var statearr_37521_37562 = state_37500__$1;
(statearr_37521_37562[(2)] = null);

(statearr_37521_37562[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (5))){
var state_37500__$1 = state_37500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37522_37563 = state_37500__$1;
(statearr_37522_37563[(1)] = (8));

} else {
var statearr_37523_37565 = state_37500__$1;
(statearr_37523_37565[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (14))){
var inst_37492 = (state_37500[(2)]);
var state_37500__$1 = state_37500;
var statearr_37524_37567 = state_37500__$1;
(statearr_37524_37567[(2)] = inst_37492);

(statearr_37524_37567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (10))){
var inst_37481 = (state_37500[(2)]);
var state_37500__$1 = state_37500;
var statearr_37525_37570 = state_37500__$1;
(statearr_37525_37570[(2)] = inst_37481);

(statearr_37525_37570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37501 === (8))){
var inst_37478 = cljs.core.async.close_BANG_.call(null,to);
var state_37500__$1 = state_37500;
var statearr_37526_37572 = state_37500__$1;
(statearr_37526_37572[(2)] = inst_37478);

(statearr_37526_37572[(1)] = (10));


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
});})(c__37161__auto___37543))
;
return ((function (switch__35788__auto__,c__37161__auto___37543){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_37530 = [null,null,null,null,null,null,null,null];
(statearr_37530[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_37530[(1)] = (1));

return statearr_37530;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_37500){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_37500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e37531){if((e37531 instanceof Object)){
var ex__35792__auto__ = e37531;
var statearr_37533_37575 = state_37500;
(statearr_37533_37575[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37577 = state_37500;
state_37500 = G__37577;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_37500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_37500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___37543))
})();
var state__37163__auto__ = (function (){var statearr_37535 = f__37162__auto__.call(null);
(statearr_37535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___37543);

return statearr_37535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___37543))
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
return (function (p__37838){
var vec__37839 = p__37838;
var v = cljs.core.nth.call(null,vec__37839,(0),null);
var p = cljs.core.nth.call(null,vec__37839,(1),null);
var job = vec__37839;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37161__auto___38094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___38094,res,vec__37839,v,p,job,jobs,results){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___38094,res,vec__37839,v,p,job,jobs,results){
return (function (state_37845){
var state_val_37846 = (state_37845[(1)]);
if((state_val_37846 === (1))){
var state_37845__$1 = state_37845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37845__$1,(2),res,v);
} else {
if((state_val_37846 === (2))){
var inst_37842 = (state_37845[(2)]);
var inst_37843 = cljs.core.async.close_BANG_.call(null,res);
var state_37845__$1 = (function (){var statearr_37847 = state_37845;
(statearr_37847[(7)] = inst_37842);

return statearr_37847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37845__$1,inst_37843);
} else {
return null;
}
}
});})(c__37161__auto___38094,res,vec__37839,v,p,job,jobs,results))
;
return ((function (switch__35788__auto__,c__37161__auto___38094,res,vec__37839,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0 = (function (){
var statearr_37851 = [null,null,null,null,null,null,null,null];
(statearr_37851[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__);

(statearr_37851[(1)] = (1));

return statearr_37851;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1 = (function (state_37845){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_37845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e37852){if((e37852 instanceof Object)){
var ex__35792__auto__ = e37852;
var statearr_37853_38100 = state_37845;
(statearr_37853_38100[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38102 = state_37845;
state_37845 = G__38102;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = function(state_37845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1.call(this,state_37845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___38094,res,vec__37839,v,p,job,jobs,results))
})();
var state__37163__auto__ = (function (){var statearr_37854 = f__37162__auto__.call(null);
(statearr_37854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___38094);

return statearr_37854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___38094,res,vec__37839,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37868){
var vec__37869 = p__37868;
var v = cljs.core.nth.call(null,vec__37869,(0),null);
var p = cljs.core.nth.call(null,vec__37869,(1),null);
var job = vec__37869;
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
var n__19629__auto___38109 = n;
var __38110 = (0);
while(true){
if((__38110 < n__19629__auto___38109)){
var G__37870_38111 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37870_38111) {
case "compute":
var c__37161__auto___38113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38110,c__37161__auto___38113,G__37870_38111,n__19629__auto___38109,jobs,results,process,async){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (__38110,c__37161__auto___38113,G__37870_38111,n__19629__auto___38109,jobs,results,process,async){
return (function (state_37888){
var state_val_37889 = (state_37888[(1)]);
if((state_val_37889 === (1))){
var state_37888__$1 = state_37888;
var statearr_37891_38115 = state_37888__$1;
(statearr_37891_38115[(2)] = null);

(statearr_37891_38115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (2))){
var state_37888__$1 = state_37888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37888__$1,(4),jobs);
} else {
if((state_val_37889 === (3))){
var inst_37886 = (state_37888[(2)]);
var state_37888__$1 = state_37888;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37888__$1,inst_37886);
} else {
if((state_val_37889 === (4))){
var inst_37874 = (state_37888[(2)]);
var inst_37879 = process.call(null,inst_37874);
var state_37888__$1 = state_37888;
if(cljs.core.truth_(inst_37879)){
var statearr_37904_38119 = state_37888__$1;
(statearr_37904_38119[(1)] = (5));

} else {
var statearr_37905_38120 = state_37888__$1;
(statearr_37905_38120[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (5))){
var state_37888__$1 = state_37888;
var statearr_37907_38121 = state_37888__$1;
(statearr_37907_38121[(2)] = null);

(statearr_37907_38121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (6))){
var state_37888__$1 = state_37888;
var statearr_37908_38122 = state_37888__$1;
(statearr_37908_38122[(2)] = null);

(statearr_37908_38122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37889 === (7))){
var inst_37884 = (state_37888[(2)]);
var state_37888__$1 = state_37888;
var statearr_37909_38124 = state_37888__$1;
(statearr_37909_38124[(2)] = inst_37884);

(statearr_37909_38124[(1)] = (3));


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
});})(__38110,c__37161__auto___38113,G__37870_38111,n__19629__auto___38109,jobs,results,process,async))
;
return ((function (__38110,switch__35788__auto__,c__37161__auto___38113,G__37870_38111,n__19629__auto___38109,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0 = (function (){
var statearr_37913 = [null,null,null,null,null,null,null];
(statearr_37913[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__);

(statearr_37913[(1)] = (1));

return statearr_37913;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1 = (function (state_37888){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_37888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e37914){if((e37914 instanceof Object)){
var ex__35792__auto__ = e37914;
var statearr_37915_38126 = state_37888;
(statearr_37915_38126[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37914;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38127 = state_37888;
state_37888 = G__38127;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = function(state_37888){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1.call(this,state_37888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__;
})()
;})(__38110,switch__35788__auto__,c__37161__auto___38113,G__37870_38111,n__19629__auto___38109,jobs,results,process,async))
})();
var state__37163__auto__ = (function (){var statearr_37916 = f__37162__auto__.call(null);
(statearr_37916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___38113);

return statearr_37916;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(__38110,c__37161__auto___38113,G__37870_38111,n__19629__auto___38109,jobs,results,process,async))
);


break;
case "async":
var c__37161__auto___38129 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__38110,c__37161__auto___38129,G__37870_38111,n__19629__auto___38109,jobs,results,process,async){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (__38110,c__37161__auto___38129,G__37870_38111,n__19629__auto___38109,jobs,results,process,async){
return (function (state_37943){
var state_val_37944 = (state_37943[(1)]);
if((state_val_37944 === (1))){
var state_37943__$1 = state_37943;
var statearr_37946_38132 = state_37943__$1;
(statearr_37946_38132[(2)] = null);

(statearr_37946_38132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (2))){
var state_37943__$1 = state_37943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37943__$1,(4),jobs);
} else {
if((state_val_37944 === (3))){
var inst_37928 = (state_37943[(2)]);
var state_37943__$1 = state_37943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37943__$1,inst_37928);
} else {
if((state_val_37944 === (4))){
var inst_37920 = (state_37943[(2)]);
var inst_37921 = async.call(null,inst_37920);
var state_37943__$1 = state_37943;
if(cljs.core.truth_(inst_37921)){
var statearr_37947_38144 = state_37943__$1;
(statearr_37947_38144[(1)] = (5));

} else {
var statearr_37948_38145 = state_37943__$1;
(statearr_37948_38145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (5))){
var state_37943__$1 = state_37943;
var statearr_37949_38147 = state_37943__$1;
(statearr_37949_38147[(2)] = null);

(statearr_37949_38147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (6))){
var state_37943__$1 = state_37943;
var statearr_37950_38150 = state_37943__$1;
(statearr_37950_38150[(2)] = null);

(statearr_37950_38150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37944 === (7))){
var inst_37926 = (state_37943[(2)]);
var state_37943__$1 = state_37943;
var statearr_37952_38151 = state_37943__$1;
(statearr_37952_38151[(2)] = inst_37926);

(statearr_37952_38151[(1)] = (3));


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
});})(__38110,c__37161__auto___38129,G__37870_38111,n__19629__auto___38109,jobs,results,process,async))
;
return ((function (__38110,switch__35788__auto__,c__37161__auto___38129,G__37870_38111,n__19629__auto___38109,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0 = (function (){
var statearr_37959 = [null,null,null,null,null,null,null];
(statearr_37959[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__);

(statearr_37959[(1)] = (1));

return statearr_37959;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1 = (function (state_37943){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_37943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e37960){if((e37960 instanceof Object)){
var ex__35792__auto__ = e37960;
var statearr_37961_38155 = state_37943;
(statearr_37961_38155[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38160 = state_37943;
state_37943 = G__38160;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = function(state_37943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1.call(this,state_37943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__;
})()
;})(__38110,switch__35788__auto__,c__37161__auto___38129,G__37870_38111,n__19629__auto___38109,jobs,results,process,async))
})();
var state__37163__auto__ = (function (){var statearr_37962 = f__37162__auto__.call(null);
(statearr_37962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___38129);

return statearr_37962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(__38110,c__37161__auto___38129,G__37870_38111,n__19629__auto___38109,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__38163 = (__38110 + (1));
__38110 = G__38163;
continue;
} else {
}
break;
}

var c__37161__auto___38164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___38164,jobs,results,process,async){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___38164,jobs,results,process,async){
return (function (state_37985){
var state_val_37986 = (state_37985[(1)]);
if((state_val_37986 === (1))){
var state_37985__$1 = state_37985;
var statearr_37988_38172 = state_37985__$1;
(statearr_37988_38172[(2)] = null);

(statearr_37988_38172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (2))){
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37985__$1,(4),from);
} else {
if((state_val_37986 === (3))){
var inst_37983 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37985__$1,inst_37983);
} else {
if((state_val_37986 === (4))){
var inst_37965 = (state_37985[(7)]);
var inst_37965__$1 = (state_37985[(2)]);
var inst_37966 = (inst_37965__$1 == null);
var state_37985__$1 = (function (){var statearr_37990 = state_37985;
(statearr_37990[(7)] = inst_37965__$1);

return statearr_37990;
})();
if(cljs.core.truth_(inst_37966)){
var statearr_37991_38173 = state_37985__$1;
(statearr_37991_38173[(1)] = (5));

} else {
var statearr_37992_38176 = state_37985__$1;
(statearr_37992_38176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (5))){
var inst_37968 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37985__$1 = state_37985;
var statearr_37993_38178 = state_37985__$1;
(statearr_37993_38178[(2)] = inst_37968);

(statearr_37993_38178[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (6))){
var inst_37965 = (state_37985[(7)]);
var inst_37970 = (state_37985[(8)]);
var inst_37970__$1 = cljs.core.async.chan.call(null,(1));
var inst_37971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37972 = [inst_37965,inst_37970__$1];
var inst_37973 = (new cljs.core.PersistentVector(null,2,(5),inst_37971,inst_37972,null));
var state_37985__$1 = (function (){var statearr_37994 = state_37985;
(statearr_37994[(8)] = inst_37970__$1);

return statearr_37994;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37985__$1,(8),jobs,inst_37973);
} else {
if((state_val_37986 === (7))){
var inst_37981 = (state_37985[(2)]);
var state_37985__$1 = state_37985;
var statearr_37996_38179 = state_37985__$1;
(statearr_37996_38179[(2)] = inst_37981);

(statearr_37996_38179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37986 === (8))){
var inst_37970 = (state_37985[(8)]);
var inst_37975 = (state_37985[(2)]);
var state_37985__$1 = (function (){var statearr_37997 = state_37985;
(statearr_37997[(9)] = inst_37975);

return statearr_37997;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37985__$1,(9),results,inst_37970);
} else {
if((state_val_37986 === (9))){
var inst_37977 = (state_37985[(2)]);
var state_37985__$1 = (function (){var statearr_37998 = state_37985;
(statearr_37998[(10)] = inst_37977);

return statearr_37998;
})();
var statearr_37999_38180 = state_37985__$1;
(statearr_37999_38180[(2)] = null);

(statearr_37999_38180[(1)] = (2));


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
});})(c__37161__auto___38164,jobs,results,process,async))
;
return ((function (switch__35788__auto__,c__37161__auto___38164,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0 = (function (){
var statearr_38003 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38003[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__);

(statearr_38003[(1)] = (1));

return statearr_38003;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1 = (function (state_37985){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_37985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e38004){if((e38004 instanceof Object)){
var ex__35792__auto__ = e38004;
var statearr_38005_38181 = state_37985;
(statearr_38005_38181[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38004;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38182 = state_37985;
state_37985 = G__38182;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = function(state_37985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1.call(this,state_37985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___38164,jobs,results,process,async))
})();
var state__37163__auto__ = (function (){var statearr_38006 = f__37162__auto__.call(null);
(statearr_38006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___38164);

return statearr_38006;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___38164,jobs,results,process,async))
);


var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__,jobs,results,process,async){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__,jobs,results,process,async){
return (function (state_38047){
var state_val_38048 = (state_38047[(1)]);
if((state_val_38048 === (7))){
var inst_38043 = (state_38047[(2)]);
var state_38047__$1 = state_38047;
var statearr_38049_38183 = state_38047__$1;
(statearr_38049_38183[(2)] = inst_38043);

(statearr_38049_38183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (20))){
var state_38047__$1 = state_38047;
var statearr_38050_38184 = state_38047__$1;
(statearr_38050_38184[(2)] = null);

(statearr_38050_38184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (1))){
var state_38047__$1 = state_38047;
var statearr_38052_38185 = state_38047__$1;
(statearr_38052_38185[(2)] = null);

(statearr_38052_38185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (4))){
var inst_38009 = (state_38047[(7)]);
var inst_38009__$1 = (state_38047[(2)]);
var inst_38011 = (inst_38009__$1 == null);
var state_38047__$1 = (function (){var statearr_38054 = state_38047;
(statearr_38054[(7)] = inst_38009__$1);

return statearr_38054;
})();
if(cljs.core.truth_(inst_38011)){
var statearr_38055_38186 = state_38047__$1;
(statearr_38055_38186[(1)] = (5));

} else {
var statearr_38056_38188 = state_38047__$1;
(statearr_38056_38188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (15))){
var inst_38025 = (state_38047[(8)]);
var state_38047__$1 = state_38047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38047__$1,(18),to,inst_38025);
} else {
if((state_val_38048 === (21))){
var inst_38038 = (state_38047[(2)]);
var state_38047__$1 = state_38047;
var statearr_38057_38191 = state_38047__$1;
(statearr_38057_38191[(2)] = inst_38038);

(statearr_38057_38191[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (13))){
var inst_38040 = (state_38047[(2)]);
var state_38047__$1 = (function (){var statearr_38058 = state_38047;
(statearr_38058[(9)] = inst_38040);

return statearr_38058;
})();
var statearr_38059_38195 = state_38047__$1;
(statearr_38059_38195[(2)] = null);

(statearr_38059_38195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (6))){
var inst_38009 = (state_38047[(7)]);
var state_38047__$1 = state_38047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38047__$1,(11),inst_38009);
} else {
if((state_val_38048 === (17))){
var inst_38033 = (state_38047[(2)]);
var state_38047__$1 = state_38047;
if(cljs.core.truth_(inst_38033)){
var statearr_38061_38199 = state_38047__$1;
(statearr_38061_38199[(1)] = (19));

} else {
var statearr_38062_38200 = state_38047__$1;
(statearr_38062_38200[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (3))){
var inst_38045 = (state_38047[(2)]);
var state_38047__$1 = state_38047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38047__$1,inst_38045);
} else {
if((state_val_38048 === (12))){
var inst_38022 = (state_38047[(10)]);
var state_38047__$1 = state_38047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38047__$1,(14),inst_38022);
} else {
if((state_val_38048 === (2))){
var state_38047__$1 = state_38047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38047__$1,(4),results);
} else {
if((state_val_38048 === (19))){
var state_38047__$1 = state_38047;
var statearr_38064_38203 = state_38047__$1;
(statearr_38064_38203[(2)] = null);

(statearr_38064_38203[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (11))){
var inst_38022 = (state_38047[(2)]);
var state_38047__$1 = (function (){var statearr_38065 = state_38047;
(statearr_38065[(10)] = inst_38022);

return statearr_38065;
})();
var statearr_38066_38204 = state_38047__$1;
(statearr_38066_38204[(2)] = null);

(statearr_38066_38204[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (9))){
var state_38047__$1 = state_38047;
var statearr_38067_38207 = state_38047__$1;
(statearr_38067_38207[(2)] = null);

(statearr_38067_38207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (5))){
var state_38047__$1 = state_38047;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38068_38210 = state_38047__$1;
(statearr_38068_38210[(1)] = (8));

} else {
var statearr_38069_38211 = state_38047__$1;
(statearr_38069_38211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (14))){
var inst_38027 = (state_38047[(11)]);
var inst_38025 = (state_38047[(8)]);
var inst_38025__$1 = (state_38047[(2)]);
var inst_38026 = (inst_38025__$1 == null);
var inst_38027__$1 = cljs.core.not.call(null,inst_38026);
var state_38047__$1 = (function (){var statearr_38070 = state_38047;
(statearr_38070[(11)] = inst_38027__$1);

(statearr_38070[(8)] = inst_38025__$1);

return statearr_38070;
})();
if(inst_38027__$1){
var statearr_38071_38222 = state_38047__$1;
(statearr_38071_38222[(1)] = (15));

} else {
var statearr_38072_38223 = state_38047__$1;
(statearr_38072_38223[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (16))){
var inst_38027 = (state_38047[(11)]);
var state_38047__$1 = state_38047;
var statearr_38073_38224 = state_38047__$1;
(statearr_38073_38224[(2)] = inst_38027);

(statearr_38073_38224[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (10))){
var inst_38019 = (state_38047[(2)]);
var state_38047__$1 = state_38047;
var statearr_38074_38225 = state_38047__$1;
(statearr_38074_38225[(2)] = inst_38019);

(statearr_38074_38225[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (18))){
var inst_38030 = (state_38047[(2)]);
var state_38047__$1 = state_38047;
var statearr_38075_38229 = state_38047__$1;
(statearr_38075_38229[(2)] = inst_38030);

(statearr_38075_38229[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38048 === (8))){
var inst_38016 = cljs.core.async.close_BANG_.call(null,to);
var state_38047__$1 = state_38047;
var statearr_38076_38230 = state_38047__$1;
(statearr_38076_38230[(2)] = inst_38016);

(statearr_38076_38230[(1)] = (10));


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
});})(c__37161__auto__,jobs,results,process,async))
;
return ((function (switch__35788__auto__,c__37161__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0 = (function (){
var statearr_38083 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38083[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__);

(statearr_38083[(1)] = (1));

return statearr_38083;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1 = (function (state_38047){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_38047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e38084){if((e38084 instanceof Object)){
var ex__35792__auto__ = e38084;
var statearr_38085_38234 = state_38047;
(statearr_38085_38234[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38235 = state_38047;
state_38047 = G__38235;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__ = function(state_38047){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1.call(this,state_38047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35789__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__,jobs,results,process,async))
})();
var state__37163__auto__ = (function (){var statearr_38086 = f__37162__auto__.call(null);
(statearr_38086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_38086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__,jobs,results,process,async))
);

return c__37161__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args38240 = [];
var len__19784__auto___38243 = arguments.length;
var i__19785__auto___38244 = (0);
while(true){
if((i__19785__auto___38244 < len__19784__auto___38243)){
args38240.push((arguments[i__19785__auto___38244]));

var G__38246 = (i__19785__auto___38244 + (1));
i__19785__auto___38244 = G__38246;
continue;
} else {
}
break;
}

var G__38242 = args38240.length;
switch (G__38242) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38240.length)].join('')));

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
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args38254 = [];
var len__19784__auto___38257 = arguments.length;
var i__19785__auto___38258 = (0);
while(true){
if((i__19785__auto___38258 < len__19784__auto___38257)){
args38254.push((arguments[i__19785__auto___38258]));

var G__38259 = (i__19785__auto___38258 + (1));
i__19785__auto___38258 = G__38259;
continue;
} else {
}
break;
}

var G__38256 = args38254.length;
switch (G__38256) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38254.length)].join('')));

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
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args38264 = [];
var len__19784__auto___38327 = arguments.length;
var i__19785__auto___38328 = (0);
while(true){
if((i__19785__auto___38328 < len__19784__auto___38327)){
args38264.push((arguments[i__19785__auto___38328]));

var G__38329 = (i__19785__auto___38328 + (1));
i__19785__auto___38328 = G__38329;
continue;
} else {
}
break;
}

var G__38268 = args38264.length;
switch (G__38268) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38264.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37161__auto___38335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___38335,tc,fc){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___38335,tc,fc){
return (function (state_38296){
var state_val_38297 = (state_38296[(1)]);
if((state_val_38297 === (7))){
var inst_38292 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38298_38337 = state_38296__$1;
(statearr_38298_38337[(2)] = inst_38292);

(statearr_38298_38337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (1))){
var state_38296__$1 = state_38296;
var statearr_38299_38338 = state_38296__$1;
(statearr_38299_38338[(2)] = null);

(statearr_38299_38338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (4))){
var inst_38273 = (state_38296[(7)]);
var inst_38273__$1 = (state_38296[(2)]);
var inst_38274 = (inst_38273__$1 == null);
var state_38296__$1 = (function (){var statearr_38300 = state_38296;
(statearr_38300[(7)] = inst_38273__$1);

return statearr_38300;
})();
if(cljs.core.truth_(inst_38274)){
var statearr_38301_38339 = state_38296__$1;
(statearr_38301_38339[(1)] = (5));

} else {
var statearr_38302_38340 = state_38296__$1;
(statearr_38302_38340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (13))){
var state_38296__$1 = state_38296;
var statearr_38303_38341 = state_38296__$1;
(statearr_38303_38341[(2)] = null);

(statearr_38303_38341[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (6))){
var inst_38273 = (state_38296[(7)]);
var inst_38279 = p.call(null,inst_38273);
var state_38296__$1 = state_38296;
if(cljs.core.truth_(inst_38279)){
var statearr_38304_38342 = state_38296__$1;
(statearr_38304_38342[(1)] = (9));

} else {
var statearr_38305_38343 = state_38296__$1;
(statearr_38305_38343[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (3))){
var inst_38294 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38296__$1,inst_38294);
} else {
if((state_val_38297 === (12))){
var state_38296__$1 = state_38296;
var statearr_38306_38344 = state_38296__$1;
(statearr_38306_38344[(2)] = null);

(statearr_38306_38344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (2))){
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38296__$1,(4),ch);
} else {
if((state_val_38297 === (11))){
var inst_38273 = (state_38296[(7)]);
var inst_38283 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38296__$1,(8),inst_38283,inst_38273);
} else {
if((state_val_38297 === (9))){
var state_38296__$1 = state_38296;
var statearr_38307_38351 = state_38296__$1;
(statearr_38307_38351[(2)] = tc);

(statearr_38307_38351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (5))){
var inst_38276 = cljs.core.async.close_BANG_.call(null,tc);
var inst_38277 = cljs.core.async.close_BANG_.call(null,fc);
var state_38296__$1 = (function (){var statearr_38308 = state_38296;
(statearr_38308[(8)] = inst_38276);

return statearr_38308;
})();
var statearr_38309_38354 = state_38296__$1;
(statearr_38309_38354[(2)] = inst_38277);

(statearr_38309_38354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (14))){
var inst_38290 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
var statearr_38310_38355 = state_38296__$1;
(statearr_38310_38355[(2)] = inst_38290);

(statearr_38310_38355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (10))){
var state_38296__$1 = state_38296;
var statearr_38311_38356 = state_38296__$1;
(statearr_38311_38356[(2)] = fc);

(statearr_38311_38356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38297 === (8))){
var inst_38285 = (state_38296[(2)]);
var state_38296__$1 = state_38296;
if(cljs.core.truth_(inst_38285)){
var statearr_38312_38360 = state_38296__$1;
(statearr_38312_38360[(1)] = (12));

} else {
var statearr_38313_38361 = state_38296__$1;
(statearr_38313_38361[(1)] = (13));

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
});})(c__37161__auto___38335,tc,fc))
;
return ((function (switch__35788__auto__,c__37161__auto___38335,tc,fc){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_38317 = [null,null,null,null,null,null,null,null,null];
(statearr_38317[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_38317[(1)] = (1));

return statearr_38317;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_38296){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_38296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e38318){if((e38318 instanceof Object)){
var ex__35792__auto__ = e38318;
var statearr_38319_38363 = state_38296;
(statearr_38319_38363[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38318;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38364 = state_38296;
state_38296 = G__38364;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_38296){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_38296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___38335,tc,fc))
})();
var state__37163__auto__ = (function (){var statearr_38325 = f__37162__auto__.call(null);
(statearr_38325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___38335);

return statearr_38325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___38335,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_38441){
var state_val_38442 = (state_38441[(1)]);
if((state_val_38442 === (7))){
var inst_38437 = (state_38441[(2)]);
var state_38441__$1 = state_38441;
var statearr_38443_38470 = state_38441__$1;
(statearr_38443_38470[(2)] = inst_38437);

(statearr_38443_38470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (1))){
var inst_38417 = init;
var state_38441__$1 = (function (){var statearr_38444 = state_38441;
(statearr_38444[(7)] = inst_38417);

return statearr_38444;
})();
var statearr_38445_38471 = state_38441__$1;
(statearr_38445_38471[(2)] = null);

(statearr_38445_38471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (4))){
var inst_38420 = (state_38441[(8)]);
var inst_38420__$1 = (state_38441[(2)]);
var inst_38423 = (inst_38420__$1 == null);
var state_38441__$1 = (function (){var statearr_38446 = state_38441;
(statearr_38446[(8)] = inst_38420__$1);

return statearr_38446;
})();
if(cljs.core.truth_(inst_38423)){
var statearr_38447_38474 = state_38441__$1;
(statearr_38447_38474[(1)] = (5));

} else {
var statearr_38448_38475 = state_38441__$1;
(statearr_38448_38475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (6))){
var inst_38417 = (state_38441[(7)]);
var inst_38420 = (state_38441[(8)]);
var inst_38426 = (state_38441[(9)]);
var inst_38426__$1 = f.call(null,inst_38417,inst_38420);
var inst_38427 = cljs.core.reduced_QMARK_.call(null,inst_38426__$1);
var state_38441__$1 = (function (){var statearr_38449 = state_38441;
(statearr_38449[(9)] = inst_38426__$1);

return statearr_38449;
})();
if(inst_38427){
var statearr_38450_38479 = state_38441__$1;
(statearr_38450_38479[(1)] = (8));

} else {
var statearr_38451_38480 = state_38441__$1;
(statearr_38451_38480[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (3))){
var inst_38439 = (state_38441[(2)]);
var state_38441__$1 = state_38441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38441__$1,inst_38439);
} else {
if((state_val_38442 === (2))){
var state_38441__$1 = state_38441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38441__$1,(4),ch);
} else {
if((state_val_38442 === (9))){
var inst_38426 = (state_38441[(9)]);
var inst_38417 = inst_38426;
var state_38441__$1 = (function (){var statearr_38452 = state_38441;
(statearr_38452[(7)] = inst_38417);

return statearr_38452;
})();
var statearr_38453_38481 = state_38441__$1;
(statearr_38453_38481[(2)] = null);

(statearr_38453_38481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (5))){
var inst_38417 = (state_38441[(7)]);
var state_38441__$1 = state_38441;
var statearr_38457_38482 = state_38441__$1;
(statearr_38457_38482[(2)] = inst_38417);

(statearr_38457_38482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (10))){
var inst_38433 = (state_38441[(2)]);
var state_38441__$1 = state_38441;
var statearr_38458_38483 = state_38441__$1;
(statearr_38458_38483[(2)] = inst_38433);

(statearr_38458_38483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38442 === (8))){
var inst_38426 = (state_38441[(9)]);
var inst_38429 = cljs.core.deref.call(null,inst_38426);
var state_38441__$1 = state_38441;
var statearr_38459_38486 = state_38441__$1;
(statearr_38459_38486[(2)] = inst_38429);

(statearr_38459_38486[(1)] = (10));


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
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35789__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35789__auto____0 = (function (){
var statearr_38466 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38466[(0)] = cljs$core$async$reduce_$_state_machine__35789__auto__);

(statearr_38466[(1)] = (1));

return statearr_38466;
});
var cljs$core$async$reduce_$_state_machine__35789__auto____1 = (function (state_38441){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_38441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e38467){if((e38467 instanceof Object)){
var ex__35792__auto__ = e38467;
var statearr_38468_38489 = state_38441;
(statearr_38468_38489[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38491 = state_38441;
state_38441 = G__38491;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35789__auto__ = function(state_38441){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35789__auto____1.call(this,state_38441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35789__auto____0;
cljs$core$async$reduce_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35789__auto____1;
return cljs$core$async$reduce_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_38469 = f__37162__auto__.call(null);
(statearr_38469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_38469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args38492 = [];
var len__19784__auto___38551 = arguments.length;
var i__19785__auto___38553 = (0);
while(true){
if((i__19785__auto___38553 < len__19784__auto___38551)){
args38492.push((arguments[i__19785__auto___38553]));

var G__38555 = (i__19785__auto___38553 + (1));
i__19785__auto___38553 = G__38555;
continue;
} else {
}
break;
}

var G__38494 = args38492.length;
switch (G__38494) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38492.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_38519){
var state_val_38520 = (state_38519[(1)]);
if((state_val_38520 === (7))){
var inst_38501 = (state_38519[(2)]);
var state_38519__$1 = state_38519;
var statearr_38523_38560 = state_38519__$1;
(statearr_38523_38560[(2)] = inst_38501);

(statearr_38523_38560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (1))){
var inst_38495 = cljs.core.seq.call(null,coll);
var inst_38496 = inst_38495;
var state_38519__$1 = (function (){var statearr_38524 = state_38519;
(statearr_38524[(7)] = inst_38496);

return statearr_38524;
})();
var statearr_38525_38563 = state_38519__$1;
(statearr_38525_38563[(2)] = null);

(statearr_38525_38563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (4))){
var inst_38496 = (state_38519[(7)]);
var inst_38499 = cljs.core.first.call(null,inst_38496);
var state_38519__$1 = state_38519;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38519__$1,(7),ch,inst_38499);
} else {
if((state_val_38520 === (13))){
var inst_38513 = (state_38519[(2)]);
var state_38519__$1 = state_38519;
var statearr_38526_38566 = state_38519__$1;
(statearr_38526_38566[(2)] = inst_38513);

(statearr_38526_38566[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (6))){
var inst_38504 = (state_38519[(2)]);
var state_38519__$1 = state_38519;
if(cljs.core.truth_(inst_38504)){
var statearr_38527_38568 = state_38519__$1;
(statearr_38527_38568[(1)] = (8));

} else {
var statearr_38528_38569 = state_38519__$1;
(statearr_38528_38569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (3))){
var inst_38517 = (state_38519[(2)]);
var state_38519__$1 = state_38519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38519__$1,inst_38517);
} else {
if((state_val_38520 === (12))){
var state_38519__$1 = state_38519;
var statearr_38529_38577 = state_38519__$1;
(statearr_38529_38577[(2)] = null);

(statearr_38529_38577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (2))){
var inst_38496 = (state_38519[(7)]);
var state_38519__$1 = state_38519;
if(cljs.core.truth_(inst_38496)){
var statearr_38532_38582 = state_38519__$1;
(statearr_38532_38582[(1)] = (4));

} else {
var statearr_38533_38583 = state_38519__$1;
(statearr_38533_38583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (11))){
var inst_38510 = cljs.core.async.close_BANG_.call(null,ch);
var state_38519__$1 = state_38519;
var statearr_38534_38587 = state_38519__$1;
(statearr_38534_38587[(2)] = inst_38510);

(statearr_38534_38587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (9))){
var state_38519__$1 = state_38519;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38536_38590 = state_38519__$1;
(statearr_38536_38590[(1)] = (11));

} else {
var statearr_38537_38591 = state_38519__$1;
(statearr_38537_38591[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (5))){
var inst_38496 = (state_38519[(7)]);
var state_38519__$1 = state_38519;
var statearr_38538_38593 = state_38519__$1;
(statearr_38538_38593[(2)] = inst_38496);

(statearr_38538_38593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (10))){
var inst_38515 = (state_38519[(2)]);
var state_38519__$1 = state_38519;
var statearr_38539_38597 = state_38519__$1;
(statearr_38539_38597[(2)] = inst_38515);

(statearr_38539_38597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38520 === (8))){
var inst_38496 = (state_38519[(7)]);
var inst_38506 = cljs.core.next.call(null,inst_38496);
var inst_38496__$1 = inst_38506;
var state_38519__$1 = (function (){var statearr_38540 = state_38519;
(statearr_38540[(7)] = inst_38496__$1);

return statearr_38540;
})();
var statearr_38541_38601 = state_38519__$1;
(statearr_38541_38601[(2)] = null);

(statearr_38541_38601[(1)] = (2));


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
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_38545 = [null,null,null,null,null,null,null,null];
(statearr_38545[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_38545[(1)] = (1));

return statearr_38545;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_38519){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_38519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e38548){if((e38548 instanceof Object)){
var ex__35792__auto__ = e38548;
var statearr_38549_38604 = state_38519;
(statearr_38549_38604[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38548;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38605 = state_38519;
state_38519 = G__38605;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_38519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_38519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_38550 = f__37162__auto__.call(null);
(statearr_38550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_38550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19381__auto__ = (((_ == null))?null:_);
var m__19382__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,_);
} else {
var m__19382__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19382__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m,ch);
} else {
var m__19382__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m);
} else {
var m__19382__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async38908 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38908 = (function (mult,ch,cs,meta38909){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38909 = meta38909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38910,meta38909__$1){
var self__ = this;
var _38910__$1 = this;
return (new cljs.core.async.t_cljs$core$async38908(self__.mult,self__.ch,self__.cs,meta38909__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38910){
var self__ = this;
var _38910__$1 = this;
return self__.meta38909;
});})(cs))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38908.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38908.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38909","meta38909",1450003079,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38908.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38908.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38908";

cljs.core.async.t_cljs$core$async38908.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async38908");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38908 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38908(mult__$1,ch__$1,cs__$1,meta38909){
return (new cljs.core.async.t_cljs$core$async38908(mult__$1,ch__$1,cs__$1,meta38909));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38908(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37161__auto___39168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___39168,cs,m,dchan,dctr,done){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___39168,cs,m,dchan,dctr,done){
return (function (state_39050){
var state_val_39051 = (state_39050[(1)]);
if((state_val_39051 === (7))){
var inst_39046 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39052_39173 = state_39050__$1;
(statearr_39052_39173[(2)] = inst_39046);

(statearr_39052_39173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (20))){
var inst_38944 = (state_39050[(7)]);
var inst_38955 = cljs.core.first.call(null,inst_38944);
var inst_38956 = cljs.core.nth.call(null,inst_38955,(0),null);
var inst_38957 = cljs.core.nth.call(null,inst_38955,(1),null);
var state_39050__$1 = (function (){var statearr_39053 = state_39050;
(statearr_39053[(8)] = inst_38956);

return statearr_39053;
})();
if(cljs.core.truth_(inst_38957)){
var statearr_39054_39174 = state_39050__$1;
(statearr_39054_39174[(1)] = (22));

} else {
var statearr_39055_39175 = state_39050__$1;
(statearr_39055_39175[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (27))){
var inst_38915 = (state_39050[(9)]);
var inst_38994 = (state_39050[(10)]);
var inst_38987 = (state_39050[(11)]);
var inst_38989 = (state_39050[(12)]);
var inst_38994__$1 = cljs.core._nth.call(null,inst_38987,inst_38989);
var inst_38996 = cljs.core.async.put_BANG_.call(null,inst_38994__$1,inst_38915,done);
var state_39050__$1 = (function (){var statearr_39056 = state_39050;
(statearr_39056[(10)] = inst_38994__$1);

return statearr_39056;
})();
if(cljs.core.truth_(inst_38996)){
var statearr_39057_39180 = state_39050__$1;
(statearr_39057_39180[(1)] = (30));

} else {
var statearr_39058_39182 = state_39050__$1;
(statearr_39058_39182[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (1))){
var state_39050__$1 = state_39050;
var statearr_39059_39184 = state_39050__$1;
(statearr_39059_39184[(2)] = null);

(statearr_39059_39184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (24))){
var inst_38944 = (state_39050[(7)]);
var inst_38963 = (state_39050[(2)]);
var inst_38964 = cljs.core.next.call(null,inst_38944);
var inst_38924 = inst_38964;
var inst_38925 = null;
var inst_38926 = (0);
var inst_38927 = (0);
var state_39050__$1 = (function (){var statearr_39060 = state_39050;
(statearr_39060[(13)] = inst_38925);

(statearr_39060[(14)] = inst_38963);

(statearr_39060[(15)] = inst_38926);

(statearr_39060[(16)] = inst_38927);

(statearr_39060[(17)] = inst_38924);

return statearr_39060;
})();
var statearr_39061_39189 = state_39050__$1;
(statearr_39061_39189[(2)] = null);

(statearr_39061_39189[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (39))){
var state_39050__$1 = state_39050;
var statearr_39065_39190 = state_39050__$1;
(statearr_39065_39190[(2)] = null);

(statearr_39065_39190[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (4))){
var inst_38915 = (state_39050[(9)]);
var inst_38915__$1 = (state_39050[(2)]);
var inst_38916 = (inst_38915__$1 == null);
var state_39050__$1 = (function (){var statearr_39066 = state_39050;
(statearr_39066[(9)] = inst_38915__$1);

return statearr_39066;
})();
if(cljs.core.truth_(inst_38916)){
var statearr_39067_39191 = state_39050__$1;
(statearr_39067_39191[(1)] = (5));

} else {
var statearr_39068_39192 = state_39050__$1;
(statearr_39068_39192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (15))){
var inst_38925 = (state_39050[(13)]);
var inst_38926 = (state_39050[(15)]);
var inst_38927 = (state_39050[(16)]);
var inst_38924 = (state_39050[(17)]);
var inst_38940 = (state_39050[(2)]);
var inst_38941 = (inst_38927 + (1));
var tmp39062 = inst_38925;
var tmp39063 = inst_38926;
var tmp39064 = inst_38924;
var inst_38924__$1 = tmp39064;
var inst_38925__$1 = tmp39062;
var inst_38926__$1 = tmp39063;
var inst_38927__$1 = inst_38941;
var state_39050__$1 = (function (){var statearr_39069 = state_39050;
(statearr_39069[(13)] = inst_38925__$1);

(statearr_39069[(15)] = inst_38926__$1);

(statearr_39069[(18)] = inst_38940);

(statearr_39069[(16)] = inst_38927__$1);

(statearr_39069[(17)] = inst_38924__$1);

return statearr_39069;
})();
var statearr_39070_39199 = state_39050__$1;
(statearr_39070_39199[(2)] = null);

(statearr_39070_39199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (21))){
var inst_38967 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39074_39201 = state_39050__$1;
(statearr_39074_39201[(2)] = inst_38967);

(statearr_39074_39201[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (31))){
var inst_38994 = (state_39050[(10)]);
var inst_38999 = done.call(null,null);
var inst_39000 = cljs.core.async.untap_STAR_.call(null,m,inst_38994);
var state_39050__$1 = (function (){var statearr_39075 = state_39050;
(statearr_39075[(19)] = inst_38999);

return statearr_39075;
})();
var statearr_39076_39205 = state_39050__$1;
(statearr_39076_39205[(2)] = inst_39000);

(statearr_39076_39205[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (32))){
var inst_38988 = (state_39050[(20)]);
var inst_38986 = (state_39050[(21)]);
var inst_38987 = (state_39050[(11)]);
var inst_38989 = (state_39050[(12)]);
var inst_39003 = (state_39050[(2)]);
var inst_39004 = (inst_38989 + (1));
var tmp39071 = inst_38988;
var tmp39072 = inst_38986;
var tmp39073 = inst_38987;
var inst_38986__$1 = tmp39072;
var inst_38987__$1 = tmp39073;
var inst_38988__$1 = tmp39071;
var inst_38989__$1 = inst_39004;
var state_39050__$1 = (function (){var statearr_39077 = state_39050;
(statearr_39077[(20)] = inst_38988__$1);

(statearr_39077[(22)] = inst_39003);

(statearr_39077[(21)] = inst_38986__$1);

(statearr_39077[(11)] = inst_38987__$1);

(statearr_39077[(12)] = inst_38989__$1);

return statearr_39077;
})();
var statearr_39078_39206 = state_39050__$1;
(statearr_39078_39206[(2)] = null);

(statearr_39078_39206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (40))){
var inst_39017 = (state_39050[(23)]);
var inst_39021 = done.call(null,null);
var inst_39022 = cljs.core.async.untap_STAR_.call(null,m,inst_39017);
var state_39050__$1 = (function (){var statearr_39080 = state_39050;
(statearr_39080[(24)] = inst_39021);

return statearr_39080;
})();
var statearr_39081_39207 = state_39050__$1;
(statearr_39081_39207[(2)] = inst_39022);

(statearr_39081_39207[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (33))){
var inst_39007 = (state_39050[(25)]);
var inst_39009 = cljs.core.chunked_seq_QMARK_.call(null,inst_39007);
var state_39050__$1 = state_39050;
if(inst_39009){
var statearr_39083_39213 = state_39050__$1;
(statearr_39083_39213[(1)] = (36));

} else {
var statearr_39084_39215 = state_39050__$1;
(statearr_39084_39215[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (13))){
var inst_38934 = (state_39050[(26)]);
var inst_38937 = cljs.core.async.close_BANG_.call(null,inst_38934);
var state_39050__$1 = state_39050;
var statearr_39085_39216 = state_39050__$1;
(statearr_39085_39216[(2)] = inst_38937);

(statearr_39085_39216[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (22))){
var inst_38956 = (state_39050[(8)]);
var inst_38960 = cljs.core.async.close_BANG_.call(null,inst_38956);
var state_39050__$1 = state_39050;
var statearr_39087_39220 = state_39050__$1;
(statearr_39087_39220[(2)] = inst_38960);

(statearr_39087_39220[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (36))){
var inst_39007 = (state_39050[(25)]);
var inst_39011 = cljs.core.chunk_first.call(null,inst_39007);
var inst_39012 = cljs.core.chunk_rest.call(null,inst_39007);
var inst_39013 = cljs.core.count.call(null,inst_39011);
var inst_38986 = inst_39012;
var inst_38987 = inst_39011;
var inst_38988 = inst_39013;
var inst_38989 = (0);
var state_39050__$1 = (function (){var statearr_39088 = state_39050;
(statearr_39088[(20)] = inst_38988);

(statearr_39088[(21)] = inst_38986);

(statearr_39088[(11)] = inst_38987);

(statearr_39088[(12)] = inst_38989);

return statearr_39088;
})();
var statearr_39089_39222 = state_39050__$1;
(statearr_39089_39222[(2)] = null);

(statearr_39089_39222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (41))){
var inst_39007 = (state_39050[(25)]);
var inst_39024 = (state_39050[(2)]);
var inst_39025 = cljs.core.next.call(null,inst_39007);
var inst_38986 = inst_39025;
var inst_38987 = null;
var inst_38988 = (0);
var inst_38989 = (0);
var state_39050__$1 = (function (){var statearr_39092 = state_39050;
(statearr_39092[(20)] = inst_38988);

(statearr_39092[(21)] = inst_38986);

(statearr_39092[(11)] = inst_38987);

(statearr_39092[(12)] = inst_38989);

(statearr_39092[(27)] = inst_39024);

return statearr_39092;
})();
var statearr_39093_39223 = state_39050__$1;
(statearr_39093_39223[(2)] = null);

(statearr_39093_39223[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (43))){
var state_39050__$1 = state_39050;
var statearr_39095_39224 = state_39050__$1;
(statearr_39095_39224[(2)] = null);

(statearr_39095_39224[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (29))){
var inst_39033 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39096_39229 = state_39050__$1;
(statearr_39096_39229[(2)] = inst_39033);

(statearr_39096_39229[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (44))){
var inst_39043 = (state_39050[(2)]);
var state_39050__$1 = (function (){var statearr_39098 = state_39050;
(statearr_39098[(28)] = inst_39043);

return statearr_39098;
})();
var statearr_39099_39232 = state_39050__$1;
(statearr_39099_39232[(2)] = null);

(statearr_39099_39232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (6))){
var inst_38977 = (state_39050[(29)]);
var inst_38976 = cljs.core.deref.call(null,cs);
var inst_38977__$1 = cljs.core.keys.call(null,inst_38976);
var inst_38979 = cljs.core.count.call(null,inst_38977__$1);
var inst_38980 = cljs.core.reset_BANG_.call(null,dctr,inst_38979);
var inst_38985 = cljs.core.seq.call(null,inst_38977__$1);
var inst_38986 = inst_38985;
var inst_38987 = null;
var inst_38988 = (0);
var inst_38989 = (0);
var state_39050__$1 = (function (){var statearr_39100 = state_39050;
(statearr_39100[(30)] = inst_38980);

(statearr_39100[(20)] = inst_38988);

(statearr_39100[(21)] = inst_38986);

(statearr_39100[(29)] = inst_38977__$1);

(statearr_39100[(11)] = inst_38987);

(statearr_39100[(12)] = inst_38989);

return statearr_39100;
})();
var statearr_39101_39237 = state_39050__$1;
(statearr_39101_39237[(2)] = null);

(statearr_39101_39237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (28))){
var inst_38986 = (state_39050[(21)]);
var inst_39007 = (state_39050[(25)]);
var inst_39007__$1 = cljs.core.seq.call(null,inst_38986);
var state_39050__$1 = (function (){var statearr_39102 = state_39050;
(statearr_39102[(25)] = inst_39007__$1);

return statearr_39102;
})();
if(inst_39007__$1){
var statearr_39103_39238 = state_39050__$1;
(statearr_39103_39238[(1)] = (33));

} else {
var statearr_39104_39239 = state_39050__$1;
(statearr_39104_39239[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (25))){
var inst_38988 = (state_39050[(20)]);
var inst_38989 = (state_39050[(12)]);
var inst_38991 = (inst_38989 < inst_38988);
var inst_38992 = inst_38991;
var state_39050__$1 = state_39050;
if(cljs.core.truth_(inst_38992)){
var statearr_39108_39240 = state_39050__$1;
(statearr_39108_39240[(1)] = (27));

} else {
var statearr_39109_39241 = state_39050__$1;
(statearr_39109_39241[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (34))){
var state_39050__$1 = state_39050;
var statearr_39110_39242 = state_39050__$1;
(statearr_39110_39242[(2)] = null);

(statearr_39110_39242[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (17))){
var state_39050__$1 = state_39050;
var statearr_39111_39243 = state_39050__$1;
(statearr_39111_39243[(2)] = null);

(statearr_39111_39243[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (3))){
var inst_39048 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39050__$1,inst_39048);
} else {
if((state_val_39051 === (12))){
var inst_38972 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39112_39244 = state_39050__$1;
(statearr_39112_39244[(2)] = inst_38972);

(statearr_39112_39244[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (2))){
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39050__$1,(4),ch);
} else {
if((state_val_39051 === (23))){
var state_39050__$1 = state_39050;
var statearr_39115_39250 = state_39050__$1;
(statearr_39115_39250[(2)] = null);

(statearr_39115_39250[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (35))){
var inst_39031 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39117_39252 = state_39050__$1;
(statearr_39117_39252[(2)] = inst_39031);

(statearr_39117_39252[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (19))){
var inst_38944 = (state_39050[(7)]);
var inst_38949 = cljs.core.chunk_first.call(null,inst_38944);
var inst_38950 = cljs.core.chunk_rest.call(null,inst_38944);
var inst_38951 = cljs.core.count.call(null,inst_38949);
var inst_38924 = inst_38950;
var inst_38925 = inst_38949;
var inst_38926 = inst_38951;
var inst_38927 = (0);
var state_39050__$1 = (function (){var statearr_39119 = state_39050;
(statearr_39119[(13)] = inst_38925);

(statearr_39119[(15)] = inst_38926);

(statearr_39119[(16)] = inst_38927);

(statearr_39119[(17)] = inst_38924);

return statearr_39119;
})();
var statearr_39120_39257 = state_39050__$1;
(statearr_39120_39257[(2)] = null);

(statearr_39120_39257[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (11))){
var inst_38944 = (state_39050[(7)]);
var inst_38924 = (state_39050[(17)]);
var inst_38944__$1 = cljs.core.seq.call(null,inst_38924);
var state_39050__$1 = (function (){var statearr_39121 = state_39050;
(statearr_39121[(7)] = inst_38944__$1);

return statearr_39121;
})();
if(inst_38944__$1){
var statearr_39122_39258 = state_39050__$1;
(statearr_39122_39258[(1)] = (16));

} else {
var statearr_39123_39259 = state_39050__$1;
(statearr_39123_39259[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (9))){
var inst_38974 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39124_39260 = state_39050__$1;
(statearr_39124_39260[(2)] = inst_38974);

(statearr_39124_39260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (5))){
var inst_38922 = cljs.core.deref.call(null,cs);
var inst_38923 = cljs.core.seq.call(null,inst_38922);
var inst_38924 = inst_38923;
var inst_38925 = null;
var inst_38926 = (0);
var inst_38927 = (0);
var state_39050__$1 = (function (){var statearr_39125 = state_39050;
(statearr_39125[(13)] = inst_38925);

(statearr_39125[(15)] = inst_38926);

(statearr_39125[(16)] = inst_38927);

(statearr_39125[(17)] = inst_38924);

return statearr_39125;
})();
var statearr_39126_39265 = state_39050__$1;
(statearr_39126_39265[(2)] = null);

(statearr_39126_39265[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (14))){
var state_39050__$1 = state_39050;
var statearr_39127_39267 = state_39050__$1;
(statearr_39127_39267[(2)] = null);

(statearr_39127_39267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (45))){
var inst_39040 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39128_39269 = state_39050__$1;
(statearr_39128_39269[(2)] = inst_39040);

(statearr_39128_39269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (26))){
var inst_38977 = (state_39050[(29)]);
var inst_39035 = (state_39050[(2)]);
var inst_39037 = cljs.core.seq.call(null,inst_38977);
var state_39050__$1 = (function (){var statearr_39129 = state_39050;
(statearr_39129[(31)] = inst_39035);

return statearr_39129;
})();
if(inst_39037){
var statearr_39130_39273 = state_39050__$1;
(statearr_39130_39273[(1)] = (42));

} else {
var statearr_39131_39275 = state_39050__$1;
(statearr_39131_39275[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (16))){
var inst_38944 = (state_39050[(7)]);
var inst_38947 = cljs.core.chunked_seq_QMARK_.call(null,inst_38944);
var state_39050__$1 = state_39050;
if(inst_38947){
var statearr_39132_39276 = state_39050__$1;
(statearr_39132_39276[(1)] = (19));

} else {
var statearr_39133_39277 = state_39050__$1;
(statearr_39133_39277[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (38))){
var inst_39028 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39134_39278 = state_39050__$1;
(statearr_39134_39278[(2)] = inst_39028);

(statearr_39134_39278[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (30))){
var state_39050__$1 = state_39050;
var statearr_39135_39279 = state_39050__$1;
(statearr_39135_39279[(2)] = null);

(statearr_39135_39279[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (10))){
var inst_38925 = (state_39050[(13)]);
var inst_38927 = (state_39050[(16)]);
var inst_38933 = cljs.core._nth.call(null,inst_38925,inst_38927);
var inst_38934 = cljs.core.nth.call(null,inst_38933,(0),null);
var inst_38935 = cljs.core.nth.call(null,inst_38933,(1),null);
var state_39050__$1 = (function (){var statearr_39136 = state_39050;
(statearr_39136[(26)] = inst_38934);

return statearr_39136;
})();
if(cljs.core.truth_(inst_38935)){
var statearr_39137_39285 = state_39050__$1;
(statearr_39137_39285[(1)] = (13));

} else {
var statearr_39138_39286 = state_39050__$1;
(statearr_39138_39286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (18))){
var inst_38970 = (state_39050[(2)]);
var state_39050__$1 = state_39050;
var statearr_39139_39288 = state_39050__$1;
(statearr_39139_39288[(2)] = inst_38970);

(statearr_39139_39288[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (42))){
var state_39050__$1 = state_39050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39050__$1,(45),dchan);
} else {
if((state_val_39051 === (37))){
var inst_38915 = (state_39050[(9)]);
var inst_39017 = (state_39050[(23)]);
var inst_39007 = (state_39050[(25)]);
var inst_39017__$1 = cljs.core.first.call(null,inst_39007);
var inst_39018 = cljs.core.async.put_BANG_.call(null,inst_39017__$1,inst_38915,done);
var state_39050__$1 = (function (){var statearr_39140 = state_39050;
(statearr_39140[(23)] = inst_39017__$1);

return statearr_39140;
})();
if(cljs.core.truth_(inst_39018)){
var statearr_39141_39293 = state_39050__$1;
(statearr_39141_39293[(1)] = (39));

} else {
var statearr_39142_39294 = state_39050__$1;
(statearr_39142_39294[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39051 === (8))){
var inst_38926 = (state_39050[(15)]);
var inst_38927 = (state_39050[(16)]);
var inst_38929 = (inst_38927 < inst_38926);
var inst_38930 = inst_38929;
var state_39050__$1 = state_39050;
if(cljs.core.truth_(inst_38930)){
var statearr_39147_39295 = state_39050__$1;
(statearr_39147_39295[(1)] = (10));

} else {
var statearr_39148_39296 = state_39050__$1;
(statearr_39148_39296[(1)] = (11));

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
});})(c__37161__auto___39168,cs,m,dchan,dctr,done))
;
return ((function (switch__35788__auto__,c__37161__auto___39168,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35789__auto__ = null;
var cljs$core$async$mult_$_state_machine__35789__auto____0 = (function (){
var statearr_39154 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39154[(0)] = cljs$core$async$mult_$_state_machine__35789__auto__);

(statearr_39154[(1)] = (1));

return statearr_39154;
});
var cljs$core$async$mult_$_state_machine__35789__auto____1 = (function (state_39050){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_39050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e39155){if((e39155 instanceof Object)){
var ex__35792__auto__ = e39155;
var statearr_39156_39302 = state_39050;
(statearr_39156_39302[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39304 = state_39050;
state_39050 = G__39304;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35789__auto__ = function(state_39050){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35789__auto____1.call(this,state_39050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35789__auto____0;
cljs$core$async$mult_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35789__auto____1;
return cljs$core$async$mult_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___39168,cs,m,dchan,dctr,done))
})();
var state__37163__auto__ = (function (){var statearr_39157 = f__37162__auto__.call(null);
(statearr_39157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___39168);

return statearr_39157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___39168,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args39309 = [];
var len__19784__auto___39312 = arguments.length;
var i__19785__auto___39313 = (0);
while(true){
if((i__19785__auto___39313 < len__19784__auto___39312)){
args39309.push((arguments[i__19785__auto___39313]));

var G__39314 = (i__19785__auto___39313 + (1));
i__19785__auto___39313 = G__39314;
continue;
} else {
}
break;
}

var G__39311 = args39309.length;
switch (G__39311) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39309.length)].join('')));

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

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m,ch);
} else {
var m__19382__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m,ch);
} else {
var m__19382__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m);
} else {
var m__19382__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m,state_map);
} else {
var m__19382__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19381__auto__ = (((m == null))?null:m);
var m__19382__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,m,mode);
} else {
var m__19382__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___39377 = arguments.length;
var i__19785__auto___39378 = (0);
while(true){
if((i__19785__auto___39378 < len__19784__auto___39377)){
args__19791__auto__.push((arguments[i__19785__auto___39378]));

var G__39383 = (i__19785__auto___39378 + (1));
i__19785__auto___39378 = G__39383;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39365){
var map__39366 = p__39365;
var map__39366__$1 = ((((!((map__39366 == null)))?((((map__39366.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39366.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39366):map__39366);
var opts = map__39366__$1;
var statearr_39372_39387 = state;
(statearr_39372_39387[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39366,map__39366__$1,opts){
return (function (val){
var statearr_39373_39389 = state;
(statearr_39373_39389[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39366,map__39366__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39375_39390 = state;
(statearr_39375_39390[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39361){
var G__39362 = cljs.core.first.call(null,seq39361);
var seq39361__$1 = cljs.core.next.call(null,seq39361);
var G__39363 = cljs.core.first.call(null,seq39361__$1);
var seq39361__$2 = cljs.core.next.call(null,seq39361__$1);
var G__39364 = cljs.core.first.call(null,seq39361__$2);
var seq39361__$3 = cljs.core.next.call(null,seq39361__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39362,G__39363,G__39364,seq39361__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
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
if(typeof cljs.core.async.t_cljs$core$async39655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39655 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39656){
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
this.meta39656 = meta39656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39657,meta39656__$1){
var self__ = this;
var _39657__$1 = this;
return (new cljs.core.async.t_cljs$core$async39655(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39656__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39657){
var self__ = this;
var _39657__$1 = this;
return self__.meta39656;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39655.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39656","meta39656",1311854202,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39655";

cljs.core.async.t_cljs$core$async39655.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async39655");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39655 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39655(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39656){
return (new cljs.core.async.t_cljs$core$async39655(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39656));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39655(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37161__auto___39873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___39873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___39873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39763){
var state_val_39764 = (state_39763[(1)]);
if((state_val_39764 === (7))){
var inst_39678 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
var statearr_39766_39878 = state_39763__$1;
(statearr_39766_39878[(2)] = inst_39678);

(statearr_39766_39878[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (20))){
var inst_39690 = (state_39763[(7)]);
var state_39763__$1 = state_39763;
var statearr_39767_39879 = state_39763__$1;
(statearr_39767_39879[(2)] = inst_39690);

(statearr_39767_39879[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (27))){
var state_39763__$1 = state_39763;
var statearr_39769_39880 = state_39763__$1;
(statearr_39769_39880[(2)] = null);

(statearr_39769_39880[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (1))){
var inst_39664 = (state_39763[(8)]);
var inst_39664__$1 = calc_state.call(null);
var inst_39667 = (inst_39664__$1 == null);
var inst_39668 = cljs.core.not.call(null,inst_39667);
var state_39763__$1 = (function (){var statearr_39770 = state_39763;
(statearr_39770[(8)] = inst_39664__$1);

return statearr_39770;
})();
if(inst_39668){
var statearr_39771_39886 = state_39763__$1;
(statearr_39771_39886[(1)] = (2));

} else {
var statearr_39772_39891 = state_39763__$1;
(statearr_39772_39891[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (24))){
var inst_39722 = (state_39763[(9)]);
var inst_39714 = (state_39763[(10)]);
var inst_39736 = (state_39763[(11)]);
var inst_39736__$1 = inst_39714.call(null,inst_39722);
var state_39763__$1 = (function (){var statearr_39775 = state_39763;
(statearr_39775[(11)] = inst_39736__$1);

return statearr_39775;
})();
if(cljs.core.truth_(inst_39736__$1)){
var statearr_39776_39899 = state_39763__$1;
(statearr_39776_39899[(1)] = (29));

} else {
var statearr_39777_39900 = state_39763__$1;
(statearr_39777_39900[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (4))){
var inst_39681 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
if(cljs.core.truth_(inst_39681)){
var statearr_39780_39906 = state_39763__$1;
(statearr_39780_39906[(1)] = (8));

} else {
var statearr_39781_39907 = state_39763__$1;
(statearr_39781_39907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (15))){
var inst_39708 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
if(cljs.core.truth_(inst_39708)){
var statearr_39782_39908 = state_39763__$1;
(statearr_39782_39908[(1)] = (19));

} else {
var statearr_39783_39909 = state_39763__$1;
(statearr_39783_39909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (21))){
var inst_39713 = (state_39763[(12)]);
var inst_39713__$1 = (state_39763[(2)]);
var inst_39714 = cljs.core.get.call(null,inst_39713__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39715 = cljs.core.get.call(null,inst_39713__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39716 = cljs.core.get.call(null,inst_39713__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39763__$1 = (function (){var statearr_39784 = state_39763;
(statearr_39784[(10)] = inst_39714);

(statearr_39784[(12)] = inst_39713__$1);

(statearr_39784[(13)] = inst_39715);

return statearr_39784;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39763__$1,(22),inst_39716);
} else {
if((state_val_39764 === (31))){
var inst_39744 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
if(cljs.core.truth_(inst_39744)){
var statearr_39785_39916 = state_39763__$1;
(statearr_39785_39916[(1)] = (32));

} else {
var statearr_39786_39919 = state_39763__$1;
(statearr_39786_39919[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (32))){
var inst_39721 = (state_39763[(14)]);
var state_39763__$1 = state_39763;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39763__$1,(35),out,inst_39721);
} else {
if((state_val_39764 === (33))){
var inst_39713 = (state_39763[(12)]);
var inst_39690 = inst_39713;
var state_39763__$1 = (function (){var statearr_39787 = state_39763;
(statearr_39787[(7)] = inst_39690);

return statearr_39787;
})();
var statearr_39788_39922 = state_39763__$1;
(statearr_39788_39922[(2)] = null);

(statearr_39788_39922[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (13))){
var inst_39690 = (state_39763[(7)]);
var inst_39698 = inst_39690.cljs$lang$protocol_mask$partition0$;
var inst_39699 = (inst_39698 & (64));
var inst_39700 = inst_39690.cljs$core$ISeq$;
var inst_39701 = (inst_39699) || (inst_39700);
var state_39763__$1 = state_39763;
if(cljs.core.truth_(inst_39701)){
var statearr_39789_39927 = state_39763__$1;
(statearr_39789_39927[(1)] = (16));

} else {
var statearr_39790_39928 = state_39763__$1;
(statearr_39790_39928[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (22))){
var inst_39722 = (state_39763[(9)]);
var inst_39721 = (state_39763[(14)]);
var inst_39720 = (state_39763[(2)]);
var inst_39721__$1 = cljs.core.nth.call(null,inst_39720,(0),null);
var inst_39722__$1 = cljs.core.nth.call(null,inst_39720,(1),null);
var inst_39723 = (inst_39721__$1 == null);
var inst_39724 = cljs.core._EQ_.call(null,inst_39722__$1,change);
var inst_39725 = (inst_39723) || (inst_39724);
var state_39763__$1 = (function (){var statearr_39791 = state_39763;
(statearr_39791[(9)] = inst_39722__$1);

(statearr_39791[(14)] = inst_39721__$1);

return statearr_39791;
})();
if(cljs.core.truth_(inst_39725)){
var statearr_39792_39933 = state_39763__$1;
(statearr_39792_39933[(1)] = (23));

} else {
var statearr_39793_39935 = state_39763__$1;
(statearr_39793_39935[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (36))){
var inst_39713 = (state_39763[(12)]);
var inst_39690 = inst_39713;
var state_39763__$1 = (function (){var statearr_39794 = state_39763;
(statearr_39794[(7)] = inst_39690);

return statearr_39794;
})();
var statearr_39795_39937 = state_39763__$1;
(statearr_39795_39937[(2)] = null);

(statearr_39795_39937[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (29))){
var inst_39736 = (state_39763[(11)]);
var state_39763__$1 = state_39763;
var statearr_39796_39938 = state_39763__$1;
(statearr_39796_39938[(2)] = inst_39736);

(statearr_39796_39938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (6))){
var state_39763__$1 = state_39763;
var statearr_39797_39939 = state_39763__$1;
(statearr_39797_39939[(2)] = false);

(statearr_39797_39939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (28))){
var inst_39732 = (state_39763[(2)]);
var inst_39733 = calc_state.call(null);
var inst_39690 = inst_39733;
var state_39763__$1 = (function (){var statearr_39798 = state_39763;
(statearr_39798[(15)] = inst_39732);

(statearr_39798[(7)] = inst_39690);

return statearr_39798;
})();
var statearr_39799_39940 = state_39763__$1;
(statearr_39799_39940[(2)] = null);

(statearr_39799_39940[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (25))){
var inst_39758 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
var statearr_39800_39941 = state_39763__$1;
(statearr_39800_39941[(2)] = inst_39758);

(statearr_39800_39941[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (34))){
var inst_39756 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
var statearr_39801_39942 = state_39763__$1;
(statearr_39801_39942[(2)] = inst_39756);

(statearr_39801_39942[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (17))){
var state_39763__$1 = state_39763;
var statearr_39802_39943 = state_39763__$1;
(statearr_39802_39943[(2)] = false);

(statearr_39802_39943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (3))){
var state_39763__$1 = state_39763;
var statearr_39803_39944 = state_39763__$1;
(statearr_39803_39944[(2)] = false);

(statearr_39803_39944[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (12))){
var inst_39760 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39763__$1,inst_39760);
} else {
if((state_val_39764 === (2))){
var inst_39664 = (state_39763[(8)]);
var inst_39671 = inst_39664.cljs$lang$protocol_mask$partition0$;
var inst_39672 = (inst_39671 & (64));
var inst_39673 = inst_39664.cljs$core$ISeq$;
var inst_39674 = (inst_39672) || (inst_39673);
var state_39763__$1 = state_39763;
if(cljs.core.truth_(inst_39674)){
var statearr_39804_39948 = state_39763__$1;
(statearr_39804_39948[(1)] = (5));

} else {
var statearr_39805_39949 = state_39763__$1;
(statearr_39805_39949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (23))){
var inst_39721 = (state_39763[(14)]);
var inst_39727 = (inst_39721 == null);
var state_39763__$1 = state_39763;
if(cljs.core.truth_(inst_39727)){
var statearr_39806_39951 = state_39763__$1;
(statearr_39806_39951[(1)] = (26));

} else {
var statearr_39807_39953 = state_39763__$1;
(statearr_39807_39953[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (35))){
var inst_39747 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
if(cljs.core.truth_(inst_39747)){
var statearr_39808_39954 = state_39763__$1;
(statearr_39808_39954[(1)] = (36));

} else {
var statearr_39809_39956 = state_39763__$1;
(statearr_39809_39956[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (19))){
var inst_39690 = (state_39763[(7)]);
var inst_39710 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39690);
var state_39763__$1 = state_39763;
var statearr_39810_39957 = state_39763__$1;
(statearr_39810_39957[(2)] = inst_39710);

(statearr_39810_39957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (11))){
var inst_39690 = (state_39763[(7)]);
var inst_39694 = (inst_39690 == null);
var inst_39695 = cljs.core.not.call(null,inst_39694);
var state_39763__$1 = state_39763;
if(inst_39695){
var statearr_39811_39958 = state_39763__$1;
(statearr_39811_39958[(1)] = (13));

} else {
var statearr_39812_39959 = state_39763__$1;
(statearr_39812_39959[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (9))){
var inst_39664 = (state_39763[(8)]);
var state_39763__$1 = state_39763;
var statearr_39813_39963 = state_39763__$1;
(statearr_39813_39963[(2)] = inst_39664);

(statearr_39813_39963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (5))){
var state_39763__$1 = state_39763;
var statearr_39814_39965 = state_39763__$1;
(statearr_39814_39965[(2)] = true);

(statearr_39814_39965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (14))){
var state_39763__$1 = state_39763;
var statearr_39815_39966 = state_39763__$1;
(statearr_39815_39966[(2)] = false);

(statearr_39815_39966[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (26))){
var inst_39722 = (state_39763[(9)]);
var inst_39729 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39722);
var state_39763__$1 = state_39763;
var statearr_39816_39967 = state_39763__$1;
(statearr_39816_39967[(2)] = inst_39729);

(statearr_39816_39967[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (16))){
var state_39763__$1 = state_39763;
var statearr_39817_39968 = state_39763__$1;
(statearr_39817_39968[(2)] = true);

(statearr_39817_39968[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (38))){
var inst_39752 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
var statearr_39818_39969 = state_39763__$1;
(statearr_39818_39969[(2)] = inst_39752);

(statearr_39818_39969[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (30))){
var inst_39722 = (state_39763[(9)]);
var inst_39714 = (state_39763[(10)]);
var inst_39715 = (state_39763[(13)]);
var inst_39739 = cljs.core.empty_QMARK_.call(null,inst_39714);
var inst_39740 = inst_39715.call(null,inst_39722);
var inst_39741 = cljs.core.not.call(null,inst_39740);
var inst_39742 = (inst_39739) && (inst_39741);
var state_39763__$1 = state_39763;
var statearr_39819_39975 = state_39763__$1;
(statearr_39819_39975[(2)] = inst_39742);

(statearr_39819_39975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (10))){
var inst_39664 = (state_39763[(8)]);
var inst_39686 = (state_39763[(2)]);
var inst_39687 = cljs.core.get.call(null,inst_39686,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39688 = cljs.core.get.call(null,inst_39686,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39689 = cljs.core.get.call(null,inst_39686,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39690 = inst_39664;
var state_39763__$1 = (function (){var statearr_39820 = state_39763;
(statearr_39820[(16)] = inst_39688);

(statearr_39820[(7)] = inst_39690);

(statearr_39820[(17)] = inst_39687);

(statearr_39820[(18)] = inst_39689);

return statearr_39820;
})();
var statearr_39821_39981 = state_39763__$1;
(statearr_39821_39981[(2)] = null);

(statearr_39821_39981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (18))){
var inst_39705 = (state_39763[(2)]);
var state_39763__$1 = state_39763;
var statearr_39823_39982 = state_39763__$1;
(statearr_39823_39982[(2)] = inst_39705);

(statearr_39823_39982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (37))){
var state_39763__$1 = state_39763;
var statearr_39824_39983 = state_39763__$1;
(statearr_39824_39983[(2)] = null);

(statearr_39824_39983[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39764 === (8))){
var inst_39664 = (state_39763[(8)]);
var inst_39683 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39664);
var state_39763__$1 = state_39763;
var statearr_39825_39984 = state_39763__$1;
(statearr_39825_39984[(2)] = inst_39683);

(statearr_39825_39984[(1)] = (10));


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
});})(c__37161__auto___39873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35788__auto__,c__37161__auto___39873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35789__auto__ = null;
var cljs$core$async$mix_$_state_machine__35789__auto____0 = (function (){
var statearr_39831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39831[(0)] = cljs$core$async$mix_$_state_machine__35789__auto__);

(statearr_39831[(1)] = (1));

return statearr_39831;
});
var cljs$core$async$mix_$_state_machine__35789__auto____1 = (function (state_39763){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_39763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e39832){if((e39832 instanceof Object)){
var ex__35792__auto__ = e39832;
var statearr_39833_39987 = state_39763;
(statearr_39833_39987[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39989 = state_39763;
state_39763 = G__39989;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35789__auto__ = function(state_39763){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35789__auto____1.call(this,state_39763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35789__auto____0;
cljs$core$async$mix_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35789__auto____1;
return cljs$core$async$mix_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___39873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37163__auto__ = (function (){var statearr_39834 = f__37162__auto__.call(null);
(statearr_39834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___39873);

return statearr_39834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___39873,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
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

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19381__auto__ = (((p == null))?null:p);
var m__19382__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19382__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19381__auto__ = (((p == null))?null:p);
var m__19382__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,p,v,ch);
} else {
var m__19382__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args39994 = [];
var len__19784__auto___40007 = arguments.length;
var i__19785__auto___40008 = (0);
while(true){
if((i__19785__auto___40008 < len__19784__auto___40007)){
args39994.push((arguments[i__19785__auto___40008]));

var G__40009 = (i__19785__auto___40008 + (1));
i__19785__auto___40008 = G__40009;
continue;
} else {
}
break;
}

var G__40002 = args39994.length;
switch (G__40002) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39994.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19381__auto__ = (((p == null))?null:p);
var m__19382__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,p);
} else {
var m__19382__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19381__auto__ = (((p == null))?null:p);
var m__19382__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,p,v);
} else {
var m__19382__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args40012 = [];
var len__19784__auto___40137 = arguments.length;
var i__19785__auto___40138 = (0);
while(true){
if((i__19785__auto___40138 < len__19784__auto___40137)){
args40012.push((arguments[i__19785__auto___40138]));

var G__40139 = (i__19785__auto___40138 + (1));
i__19785__auto___40138 = G__40139;
continue;
} else {
}
break;
}

var G__40014 = args40012.length;
switch (G__40014) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40012.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18726__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18726__auto__,mults){
return (function (p1__40011_SHARP_){
if(cljs.core.truth_(p1__40011_SHARP_.call(null,topic))){
return p1__40011_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40011_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18726__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40015 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40016){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40016 = meta40016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40017,meta40016__$1){
var self__ = this;
var _40017__$1 = this;
return (new cljs.core.async.t_cljs$core$async40015(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40016__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40017){
var self__ = this;
var _40017__$1 = this;
return self__.meta40016;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40016","meta40016",-1424194421,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40015";

cljs.core.async.t_cljs$core$async40015.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40015");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40015 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40016){
return (new cljs.core.async.t_cljs$core$async40015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40016));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40015(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37161__auto___40148 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___40148,mults,ensure_mult,p){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___40148,mults,ensure_mult,p){
return (function (state_40089){
var state_val_40090 = (state_40089[(1)]);
if((state_val_40090 === (7))){
var inst_40085 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40091_40149 = state_40089__$1;
(statearr_40091_40149[(2)] = inst_40085);

(statearr_40091_40149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (20))){
var state_40089__$1 = state_40089;
var statearr_40092_40150 = state_40089__$1;
(statearr_40092_40150[(2)] = null);

(statearr_40092_40150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (1))){
var state_40089__$1 = state_40089;
var statearr_40093_40151 = state_40089__$1;
(statearr_40093_40151[(2)] = null);

(statearr_40093_40151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (24))){
var inst_40068 = (state_40089[(7)]);
var inst_40077 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40068);
var state_40089__$1 = state_40089;
var statearr_40094_40154 = state_40089__$1;
(statearr_40094_40154[(2)] = inst_40077);

(statearr_40094_40154[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (4))){
var inst_40020 = (state_40089[(8)]);
var inst_40020__$1 = (state_40089[(2)]);
var inst_40021 = (inst_40020__$1 == null);
var state_40089__$1 = (function (){var statearr_40095 = state_40089;
(statearr_40095[(8)] = inst_40020__$1);

return statearr_40095;
})();
if(cljs.core.truth_(inst_40021)){
var statearr_40096_40158 = state_40089__$1;
(statearr_40096_40158[(1)] = (5));

} else {
var statearr_40097_40160 = state_40089__$1;
(statearr_40097_40160[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (15))){
var inst_40062 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40098_40162 = state_40089__$1;
(statearr_40098_40162[(2)] = inst_40062);

(statearr_40098_40162[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (21))){
var inst_40082 = (state_40089[(2)]);
var state_40089__$1 = (function (){var statearr_40099 = state_40089;
(statearr_40099[(9)] = inst_40082);

return statearr_40099;
})();
var statearr_40100_40163 = state_40089__$1;
(statearr_40100_40163[(2)] = null);

(statearr_40100_40163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (13))){
var inst_40044 = (state_40089[(10)]);
var inst_40046 = cljs.core.chunked_seq_QMARK_.call(null,inst_40044);
var state_40089__$1 = state_40089;
if(inst_40046){
var statearr_40101_40169 = state_40089__$1;
(statearr_40101_40169[(1)] = (16));

} else {
var statearr_40102_40170 = state_40089__$1;
(statearr_40102_40170[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (22))){
var inst_40074 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
if(cljs.core.truth_(inst_40074)){
var statearr_40103_40172 = state_40089__$1;
(statearr_40103_40172[(1)] = (23));

} else {
var statearr_40104_40173 = state_40089__$1;
(statearr_40104_40173[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (6))){
var inst_40070 = (state_40089[(11)]);
var inst_40020 = (state_40089[(8)]);
var inst_40068 = (state_40089[(7)]);
var inst_40068__$1 = topic_fn.call(null,inst_40020);
var inst_40069 = cljs.core.deref.call(null,mults);
var inst_40070__$1 = cljs.core.get.call(null,inst_40069,inst_40068__$1);
var state_40089__$1 = (function (){var statearr_40105 = state_40089;
(statearr_40105[(11)] = inst_40070__$1);

(statearr_40105[(7)] = inst_40068__$1);

return statearr_40105;
})();
if(cljs.core.truth_(inst_40070__$1)){
var statearr_40106_40175 = state_40089__$1;
(statearr_40106_40175[(1)] = (19));

} else {
var statearr_40107_40176 = state_40089__$1;
(statearr_40107_40176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (25))){
var inst_40079 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40108_40179 = state_40089__$1;
(statearr_40108_40179[(2)] = inst_40079);

(statearr_40108_40179[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (17))){
var inst_40044 = (state_40089[(10)]);
var inst_40053 = cljs.core.first.call(null,inst_40044);
var inst_40054 = cljs.core.async.muxch_STAR_.call(null,inst_40053);
var inst_40055 = cljs.core.async.close_BANG_.call(null,inst_40054);
var inst_40056 = cljs.core.next.call(null,inst_40044);
var inst_40030 = inst_40056;
var inst_40031 = null;
var inst_40032 = (0);
var inst_40033 = (0);
var state_40089__$1 = (function (){var statearr_40109 = state_40089;
(statearr_40109[(12)] = inst_40030);

(statearr_40109[(13)] = inst_40031);

(statearr_40109[(14)] = inst_40032);

(statearr_40109[(15)] = inst_40033);

(statearr_40109[(16)] = inst_40055);

return statearr_40109;
})();
var statearr_40110_40182 = state_40089__$1;
(statearr_40110_40182[(2)] = null);

(statearr_40110_40182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (3))){
var inst_40087 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40089__$1,inst_40087);
} else {
if((state_val_40090 === (12))){
var inst_40064 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40111_40183 = state_40089__$1;
(statearr_40111_40183[(2)] = inst_40064);

(statearr_40111_40183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (2))){
var state_40089__$1 = state_40089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40089__$1,(4),ch);
} else {
if((state_val_40090 === (23))){
var state_40089__$1 = state_40089;
var statearr_40112_40184 = state_40089__$1;
(statearr_40112_40184[(2)] = null);

(statearr_40112_40184[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (19))){
var inst_40070 = (state_40089[(11)]);
var inst_40020 = (state_40089[(8)]);
var inst_40072 = cljs.core.async.muxch_STAR_.call(null,inst_40070);
var state_40089__$1 = state_40089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40089__$1,(22),inst_40072,inst_40020);
} else {
if((state_val_40090 === (11))){
var inst_40030 = (state_40089[(12)]);
var inst_40044 = (state_40089[(10)]);
var inst_40044__$1 = cljs.core.seq.call(null,inst_40030);
var state_40089__$1 = (function (){var statearr_40113 = state_40089;
(statearr_40113[(10)] = inst_40044__$1);

return statearr_40113;
})();
if(inst_40044__$1){
var statearr_40114_40192 = state_40089__$1;
(statearr_40114_40192[(1)] = (13));

} else {
var statearr_40115_40193 = state_40089__$1;
(statearr_40115_40193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (9))){
var inst_40066 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40116_40194 = state_40089__$1;
(statearr_40116_40194[(2)] = inst_40066);

(statearr_40116_40194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (5))){
var inst_40027 = cljs.core.deref.call(null,mults);
var inst_40028 = cljs.core.vals.call(null,inst_40027);
var inst_40029 = cljs.core.seq.call(null,inst_40028);
var inst_40030 = inst_40029;
var inst_40031 = null;
var inst_40032 = (0);
var inst_40033 = (0);
var state_40089__$1 = (function (){var statearr_40117 = state_40089;
(statearr_40117[(12)] = inst_40030);

(statearr_40117[(13)] = inst_40031);

(statearr_40117[(14)] = inst_40032);

(statearr_40117[(15)] = inst_40033);

return statearr_40117;
})();
var statearr_40118_40199 = state_40089__$1;
(statearr_40118_40199[(2)] = null);

(statearr_40118_40199[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (14))){
var state_40089__$1 = state_40089;
var statearr_40122_40200 = state_40089__$1;
(statearr_40122_40200[(2)] = null);

(statearr_40122_40200[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (16))){
var inst_40044 = (state_40089[(10)]);
var inst_40048 = cljs.core.chunk_first.call(null,inst_40044);
var inst_40049 = cljs.core.chunk_rest.call(null,inst_40044);
var inst_40050 = cljs.core.count.call(null,inst_40048);
var inst_40030 = inst_40049;
var inst_40031 = inst_40048;
var inst_40032 = inst_40050;
var inst_40033 = (0);
var state_40089__$1 = (function (){var statearr_40123 = state_40089;
(statearr_40123[(12)] = inst_40030);

(statearr_40123[(13)] = inst_40031);

(statearr_40123[(14)] = inst_40032);

(statearr_40123[(15)] = inst_40033);

return statearr_40123;
})();
var statearr_40124_40201 = state_40089__$1;
(statearr_40124_40201[(2)] = null);

(statearr_40124_40201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (10))){
var inst_40030 = (state_40089[(12)]);
var inst_40031 = (state_40089[(13)]);
var inst_40032 = (state_40089[(14)]);
var inst_40033 = (state_40089[(15)]);
var inst_40038 = cljs.core._nth.call(null,inst_40031,inst_40033);
var inst_40039 = cljs.core.async.muxch_STAR_.call(null,inst_40038);
var inst_40040 = cljs.core.async.close_BANG_.call(null,inst_40039);
var inst_40041 = (inst_40033 + (1));
var tmp40119 = inst_40030;
var tmp40120 = inst_40031;
var tmp40121 = inst_40032;
var inst_40030__$1 = tmp40119;
var inst_40031__$1 = tmp40120;
var inst_40032__$1 = tmp40121;
var inst_40033__$1 = inst_40041;
var state_40089__$1 = (function (){var statearr_40125 = state_40089;
(statearr_40125[(12)] = inst_40030__$1);

(statearr_40125[(13)] = inst_40031__$1);

(statearr_40125[(14)] = inst_40032__$1);

(statearr_40125[(15)] = inst_40033__$1);

(statearr_40125[(17)] = inst_40040);

return statearr_40125;
})();
var statearr_40126_40202 = state_40089__$1;
(statearr_40126_40202[(2)] = null);

(statearr_40126_40202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (18))){
var inst_40059 = (state_40089[(2)]);
var state_40089__$1 = state_40089;
var statearr_40127_40208 = state_40089__$1;
(statearr_40127_40208[(2)] = inst_40059);

(statearr_40127_40208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40090 === (8))){
var inst_40032 = (state_40089[(14)]);
var inst_40033 = (state_40089[(15)]);
var inst_40035 = (inst_40033 < inst_40032);
var inst_40036 = inst_40035;
var state_40089__$1 = state_40089;
if(cljs.core.truth_(inst_40036)){
var statearr_40128_40210 = state_40089__$1;
(statearr_40128_40210[(1)] = (10));

} else {
var statearr_40129_40211 = state_40089__$1;
(statearr_40129_40211[(1)] = (11));

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
});})(c__37161__auto___40148,mults,ensure_mult,p))
;
return ((function (switch__35788__auto__,c__37161__auto___40148,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_40133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40133[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_40133[(1)] = (1));

return statearr_40133;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_40089){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_40089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e40134){if((e40134 instanceof Object)){
var ex__35792__auto__ = e40134;
var statearr_40135_40217 = state_40089;
(statearr_40135_40217[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40218 = state_40089;
state_40089 = G__40218;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_40089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_40089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___40148,mults,ensure_mult,p))
})();
var state__37163__auto__ = (function (){var statearr_40136 = f__37162__auto__.call(null);
(statearr_40136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___40148);

return statearr_40136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___40148,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args40219 = [];
var len__19784__auto___40229 = arguments.length;
var i__19785__auto___40230 = (0);
while(true){
if((i__19785__auto___40230 < len__19784__auto___40229)){
args40219.push((arguments[i__19785__auto___40230]));

var G__40231 = (i__19785__auto___40230 + (1));
i__19785__auto___40230 = G__40231;
continue;
} else {
}
break;
}

var G__40227 = args40219.length;
switch (G__40227) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40219.length)].join('')));

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
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args40237 = [];
var len__19784__auto___40240 = arguments.length;
var i__19785__auto___40241 = (0);
while(true){
if((i__19785__auto___40241 < len__19784__auto___40240)){
args40237.push((arguments[i__19785__auto___40241]));

var G__40242 = (i__19785__auto___40241 + (1));
i__19785__auto___40241 = G__40242;
continue;
} else {
}
break;
}

var G__40239 = args40237.length;
switch (G__40239) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40237.length)].join('')));

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
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args40244 = [];
var len__19784__auto___40322 = arguments.length;
var i__19785__auto___40323 = (0);
while(true){
if((i__19785__auto___40323 < len__19784__auto___40322)){
args40244.push((arguments[i__19785__auto___40323]));

var G__40324 = (i__19785__auto___40323 + (1));
i__19785__auto___40323 = G__40324;
continue;
} else {
}
break;
}

var G__40246 = args40244.length;
switch (G__40246) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40244.length)].join('')));

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
var c__37161__auto___40326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___40326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___40326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40291){
var state_val_40293 = (state_40291[(1)]);
if((state_val_40293 === (7))){
var state_40291__$1 = state_40291;
var statearr_40294_40327 = state_40291__$1;
(statearr_40294_40327[(2)] = null);

(statearr_40294_40327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (1))){
var state_40291__$1 = state_40291;
var statearr_40295_40328 = state_40291__$1;
(statearr_40295_40328[(2)] = null);

(statearr_40295_40328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (4))){
var inst_40250 = (state_40291[(7)]);
var inst_40252 = (inst_40250 < cnt);
var state_40291__$1 = state_40291;
if(cljs.core.truth_(inst_40252)){
var statearr_40296_40329 = state_40291__$1;
(statearr_40296_40329[(1)] = (6));

} else {
var statearr_40297_40330 = state_40291__$1;
(statearr_40297_40330[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (15))){
var inst_40287 = (state_40291[(2)]);
var state_40291__$1 = state_40291;
var statearr_40298_40331 = state_40291__$1;
(statearr_40298_40331[(2)] = inst_40287);

(statearr_40298_40331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (13))){
var inst_40280 = cljs.core.async.close_BANG_.call(null,out);
var state_40291__$1 = state_40291;
var statearr_40299_40332 = state_40291__$1;
(statearr_40299_40332[(2)] = inst_40280);

(statearr_40299_40332[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (6))){
var state_40291__$1 = state_40291;
var statearr_40300_40333 = state_40291__$1;
(statearr_40300_40333[(2)] = null);

(statearr_40300_40333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (3))){
var inst_40289 = (state_40291[(2)]);
var state_40291__$1 = state_40291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40291__$1,inst_40289);
} else {
if((state_val_40293 === (12))){
var inst_40276 = (state_40291[(8)]);
var inst_40276__$1 = (state_40291[(2)]);
var inst_40277 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40276__$1);
var state_40291__$1 = (function (){var statearr_40301 = state_40291;
(statearr_40301[(8)] = inst_40276__$1);

return statearr_40301;
})();
if(cljs.core.truth_(inst_40277)){
var statearr_40302_40334 = state_40291__$1;
(statearr_40302_40334[(1)] = (13));

} else {
var statearr_40303_40335 = state_40291__$1;
(statearr_40303_40335[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (2))){
var inst_40249 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40250 = (0);
var state_40291__$1 = (function (){var statearr_40304 = state_40291;
(statearr_40304[(7)] = inst_40250);

(statearr_40304[(9)] = inst_40249);

return statearr_40304;
})();
var statearr_40305_40336 = state_40291__$1;
(statearr_40305_40336[(2)] = null);

(statearr_40305_40336[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (11))){
var inst_40250 = (state_40291[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40291,(10),Object,null,(9));
var inst_40263 = chs__$1.call(null,inst_40250);
var inst_40264 = done.call(null,inst_40250);
var inst_40265 = cljs.core.async.take_BANG_.call(null,inst_40263,inst_40264);
var state_40291__$1 = state_40291;
var statearr_40306_40337 = state_40291__$1;
(statearr_40306_40337[(2)] = inst_40265);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40291__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (9))){
var inst_40250 = (state_40291[(7)]);
var inst_40267 = (state_40291[(2)]);
var inst_40268 = (inst_40250 + (1));
var inst_40250__$1 = inst_40268;
var state_40291__$1 = (function (){var statearr_40307 = state_40291;
(statearr_40307[(7)] = inst_40250__$1);

(statearr_40307[(10)] = inst_40267);

return statearr_40307;
})();
var statearr_40308_40338 = state_40291__$1;
(statearr_40308_40338[(2)] = null);

(statearr_40308_40338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (5))){
var inst_40274 = (state_40291[(2)]);
var state_40291__$1 = (function (){var statearr_40309 = state_40291;
(statearr_40309[(11)] = inst_40274);

return statearr_40309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40291__$1,(12),dchan);
} else {
if((state_val_40293 === (14))){
var inst_40276 = (state_40291[(8)]);
var inst_40282 = cljs.core.apply.call(null,f,inst_40276);
var state_40291__$1 = state_40291;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40291__$1,(16),out,inst_40282);
} else {
if((state_val_40293 === (16))){
var inst_40284 = (state_40291[(2)]);
var state_40291__$1 = (function (){var statearr_40310 = state_40291;
(statearr_40310[(12)] = inst_40284);

return statearr_40310;
})();
var statearr_40311_40339 = state_40291__$1;
(statearr_40311_40339[(2)] = null);

(statearr_40311_40339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (10))){
var inst_40256 = (state_40291[(2)]);
var inst_40257 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40291__$1 = (function (){var statearr_40312 = state_40291;
(statearr_40312[(13)] = inst_40256);

return statearr_40312;
})();
var statearr_40313_40340 = state_40291__$1;
(statearr_40313_40340[(2)] = inst_40257);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40291__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40293 === (8))){
var inst_40272 = (state_40291[(2)]);
var state_40291__$1 = state_40291;
var statearr_40314_40341 = state_40291__$1;
(statearr_40314_40341[(2)] = inst_40272);

(statearr_40314_40341[(1)] = (5));


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
});})(c__37161__auto___40326,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35788__auto__,c__37161__auto___40326,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_40318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40318[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_40318[(1)] = (1));

return statearr_40318;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_40291){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_40291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e40319){if((e40319 instanceof Object)){
var ex__35792__auto__ = e40319;
var statearr_40320_40342 = state_40291;
(statearr_40320_40342[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40343 = state_40291;
state_40291 = G__40343;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_40291){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_40291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___40326,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37163__auto__ = (function (){var statearr_40321 = f__37162__auto__.call(null);
(statearr_40321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___40326);

return statearr_40321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___40326,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args40345 = [];
var len__19784__auto___40401 = arguments.length;
var i__19785__auto___40402 = (0);
while(true){
if((i__19785__auto___40402 < len__19784__auto___40401)){
args40345.push((arguments[i__19785__auto___40402]));

var G__40403 = (i__19785__auto___40402 + (1));
i__19785__auto___40402 = G__40403;
continue;
} else {
}
break;
}

var G__40347 = args40345.length;
switch (G__40347) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40345.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37161__auto___40405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___40405,out){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___40405,out){
return (function (state_40377){
var state_val_40378 = (state_40377[(1)]);
if((state_val_40378 === (7))){
var inst_40356 = (state_40377[(7)]);
var inst_40357 = (state_40377[(8)]);
var inst_40356__$1 = (state_40377[(2)]);
var inst_40357__$1 = cljs.core.nth.call(null,inst_40356__$1,(0),null);
var inst_40358 = cljs.core.nth.call(null,inst_40356__$1,(1),null);
var inst_40359 = (inst_40357__$1 == null);
var state_40377__$1 = (function (){var statearr_40379 = state_40377;
(statearr_40379[(9)] = inst_40358);

(statearr_40379[(7)] = inst_40356__$1);

(statearr_40379[(8)] = inst_40357__$1);

return statearr_40379;
})();
if(cljs.core.truth_(inst_40359)){
var statearr_40380_40406 = state_40377__$1;
(statearr_40380_40406[(1)] = (8));

} else {
var statearr_40381_40407 = state_40377__$1;
(statearr_40381_40407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (1))){
var inst_40348 = cljs.core.vec.call(null,chs);
var inst_40349 = inst_40348;
var state_40377__$1 = (function (){var statearr_40382 = state_40377;
(statearr_40382[(10)] = inst_40349);

return statearr_40382;
})();
var statearr_40383_40408 = state_40377__$1;
(statearr_40383_40408[(2)] = null);

(statearr_40383_40408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (4))){
var inst_40349 = (state_40377[(10)]);
var state_40377__$1 = state_40377;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40377__$1,(7),inst_40349);
} else {
if((state_val_40378 === (6))){
var inst_40373 = (state_40377[(2)]);
var state_40377__$1 = state_40377;
var statearr_40384_40409 = state_40377__$1;
(statearr_40384_40409[(2)] = inst_40373);

(statearr_40384_40409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (3))){
var inst_40375 = (state_40377[(2)]);
var state_40377__$1 = state_40377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40377__$1,inst_40375);
} else {
if((state_val_40378 === (2))){
var inst_40349 = (state_40377[(10)]);
var inst_40351 = cljs.core.count.call(null,inst_40349);
var inst_40352 = (inst_40351 > (0));
var state_40377__$1 = state_40377;
if(cljs.core.truth_(inst_40352)){
var statearr_40386_40410 = state_40377__$1;
(statearr_40386_40410[(1)] = (4));

} else {
var statearr_40387_40411 = state_40377__$1;
(statearr_40387_40411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (11))){
var inst_40349 = (state_40377[(10)]);
var inst_40366 = (state_40377[(2)]);
var tmp40385 = inst_40349;
var inst_40349__$1 = tmp40385;
var state_40377__$1 = (function (){var statearr_40388 = state_40377;
(statearr_40388[(10)] = inst_40349__$1);

(statearr_40388[(11)] = inst_40366);

return statearr_40388;
})();
var statearr_40389_40412 = state_40377__$1;
(statearr_40389_40412[(2)] = null);

(statearr_40389_40412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (9))){
var inst_40357 = (state_40377[(8)]);
var state_40377__$1 = state_40377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40377__$1,(11),out,inst_40357);
} else {
if((state_val_40378 === (5))){
var inst_40371 = cljs.core.async.close_BANG_.call(null,out);
var state_40377__$1 = state_40377;
var statearr_40390_40413 = state_40377__$1;
(statearr_40390_40413[(2)] = inst_40371);

(statearr_40390_40413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (10))){
var inst_40369 = (state_40377[(2)]);
var state_40377__$1 = state_40377;
var statearr_40391_40414 = state_40377__$1;
(statearr_40391_40414[(2)] = inst_40369);

(statearr_40391_40414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40378 === (8))){
var inst_40358 = (state_40377[(9)]);
var inst_40356 = (state_40377[(7)]);
var inst_40357 = (state_40377[(8)]);
var inst_40349 = (state_40377[(10)]);
var inst_40361 = (function (){var cs = inst_40349;
var vec__40354 = inst_40356;
var v = inst_40357;
var c = inst_40358;
return ((function (cs,vec__40354,v,c,inst_40358,inst_40356,inst_40357,inst_40349,state_val_40378,c__37161__auto___40405,out){
return (function (p1__40344_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40344_SHARP_);
});
;})(cs,vec__40354,v,c,inst_40358,inst_40356,inst_40357,inst_40349,state_val_40378,c__37161__auto___40405,out))
})();
var inst_40362 = cljs.core.filterv.call(null,inst_40361,inst_40349);
var inst_40349__$1 = inst_40362;
var state_40377__$1 = (function (){var statearr_40392 = state_40377;
(statearr_40392[(10)] = inst_40349__$1);

return statearr_40392;
})();
var statearr_40393_40415 = state_40377__$1;
(statearr_40393_40415[(2)] = null);

(statearr_40393_40415[(1)] = (2));


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
});})(c__37161__auto___40405,out))
;
return ((function (switch__35788__auto__,c__37161__auto___40405,out){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_40397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40397[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_40397[(1)] = (1));

return statearr_40397;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_40377){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_40377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e40398){if((e40398 instanceof Object)){
var ex__35792__auto__ = e40398;
var statearr_40399_40416 = state_40377;
(statearr_40399_40416[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40417 = state_40377;
state_40377 = G__40417;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_40377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_40377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___40405,out))
})();
var state__37163__auto__ = (function (){var statearr_40400 = f__37162__auto__.call(null);
(statearr_40400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___40405);

return statearr_40400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___40405,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args40418 = [];
var len__19784__auto___40467 = arguments.length;
var i__19785__auto___40468 = (0);
while(true){
if((i__19785__auto___40468 < len__19784__auto___40467)){
args40418.push((arguments[i__19785__auto___40468]));

var G__40469 = (i__19785__auto___40468 + (1));
i__19785__auto___40468 = G__40469;
continue;
} else {
}
break;
}

var G__40420 = args40418.length;
switch (G__40420) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40418.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37161__auto___40471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___40471,out){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___40471,out){
return (function (state_40444){
var state_val_40445 = (state_40444[(1)]);
if((state_val_40445 === (7))){
var inst_40426 = (state_40444[(7)]);
var inst_40426__$1 = (state_40444[(2)]);
var inst_40427 = (inst_40426__$1 == null);
var inst_40428 = cljs.core.not.call(null,inst_40427);
var state_40444__$1 = (function (){var statearr_40446 = state_40444;
(statearr_40446[(7)] = inst_40426__$1);

return statearr_40446;
})();
if(inst_40428){
var statearr_40447_40472 = state_40444__$1;
(statearr_40447_40472[(1)] = (8));

} else {
var statearr_40448_40473 = state_40444__$1;
(statearr_40448_40473[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (1))){
var inst_40421 = (0);
var state_40444__$1 = (function (){var statearr_40449 = state_40444;
(statearr_40449[(8)] = inst_40421);

return statearr_40449;
})();
var statearr_40450_40474 = state_40444__$1;
(statearr_40450_40474[(2)] = null);

(statearr_40450_40474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (4))){
var state_40444__$1 = state_40444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40444__$1,(7),ch);
} else {
if((state_val_40445 === (6))){
var inst_40439 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40451_40475 = state_40444__$1;
(statearr_40451_40475[(2)] = inst_40439);

(statearr_40451_40475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (3))){
var inst_40441 = (state_40444[(2)]);
var inst_40442 = cljs.core.async.close_BANG_.call(null,out);
var state_40444__$1 = (function (){var statearr_40452 = state_40444;
(statearr_40452[(9)] = inst_40441);

return statearr_40452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40444__$1,inst_40442);
} else {
if((state_val_40445 === (2))){
var inst_40421 = (state_40444[(8)]);
var inst_40423 = (inst_40421 < n);
var state_40444__$1 = state_40444;
if(cljs.core.truth_(inst_40423)){
var statearr_40453_40476 = state_40444__$1;
(statearr_40453_40476[(1)] = (4));

} else {
var statearr_40454_40477 = state_40444__$1;
(statearr_40454_40477[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (11))){
var inst_40421 = (state_40444[(8)]);
var inst_40431 = (state_40444[(2)]);
var inst_40432 = (inst_40421 + (1));
var inst_40421__$1 = inst_40432;
var state_40444__$1 = (function (){var statearr_40455 = state_40444;
(statearr_40455[(10)] = inst_40431);

(statearr_40455[(8)] = inst_40421__$1);

return statearr_40455;
})();
var statearr_40456_40478 = state_40444__$1;
(statearr_40456_40478[(2)] = null);

(statearr_40456_40478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (9))){
var state_40444__$1 = state_40444;
var statearr_40457_40479 = state_40444__$1;
(statearr_40457_40479[(2)] = null);

(statearr_40457_40479[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (5))){
var state_40444__$1 = state_40444;
var statearr_40458_40480 = state_40444__$1;
(statearr_40458_40480[(2)] = null);

(statearr_40458_40480[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (10))){
var inst_40436 = (state_40444[(2)]);
var state_40444__$1 = state_40444;
var statearr_40459_40481 = state_40444__$1;
(statearr_40459_40481[(2)] = inst_40436);

(statearr_40459_40481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40445 === (8))){
var inst_40426 = (state_40444[(7)]);
var state_40444__$1 = state_40444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40444__$1,(11),out,inst_40426);
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
});})(c__37161__auto___40471,out))
;
return ((function (switch__35788__auto__,c__37161__auto___40471,out){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_40463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40463[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_40463[(1)] = (1));

return statearr_40463;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_40444){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_40444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e40464){if((e40464 instanceof Object)){
var ex__35792__auto__ = e40464;
var statearr_40465_40499 = state_40444;
(statearr_40465_40499[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40500 = state_40444;
state_40444 = G__40500;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_40444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_40444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___40471,out))
})();
var state__37163__auto__ = (function (){var statearr_40466 = f__37162__auto__.call(null);
(statearr_40466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___40471);

return statearr_40466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___40471,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40518 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40518 = (function (map_LT_,f,ch,meta40519){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40519 = meta40519;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40520,meta40519__$1){
var self__ = this;
var _40520__$1 = this;
return (new cljs.core.async.t_cljs$core$async40518(self__.map_LT_,self__.f,self__.ch,meta40519__$1));
});

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40520){
var self__ = this;
var _40520__$1 = this;
return self__.meta40519;
});

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40529 = (function (map_LT_,f,ch,meta40519,_,fn1,meta40530){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40519 = meta40519;
this._ = _;
this.fn1 = fn1;
this.meta40530 = meta40530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40531,meta40530__$1){
var self__ = this;
var _40531__$1 = this;
return (new cljs.core.async.t_cljs$core$async40529(self__.map_LT_,self__.f,self__.ch,self__.meta40519,self__._,self__.fn1,meta40530__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40529.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40531){
var self__ = this;
var _40531__$1 = this;
return self__.meta40530;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40529.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40506_SHARP_){
return f1.call(null,(((p1__40506_SHARP_ == null))?null:self__.f.call(null,p1__40506_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40529.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40519","meta40519",-1511070876,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40518","cljs.core.async/t_cljs$core$async40518",1231560895,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40530","meta40530",-1435521226,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40529";

cljs.core.async.t_cljs$core$async40529.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40529");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40529 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40529(map_LT___$1,f__$1,ch__$1,meta40519__$1,___$2,fn1__$1,meta40530){
return (new cljs.core.async.t_cljs$core$async40529(map_LT___$1,f__$1,ch__$1,meta40519__$1,___$2,fn1__$1,meta40530));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40529(self__.map_LT_,self__.f,self__.ch,self__.meta40519,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18714__auto__ = ret;
if(cljs.core.truth_(and__18714__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18714__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40518.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40518.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40519","meta40519",-1511070876,null)], null);
});

cljs.core.async.t_cljs$core$async40518.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40518.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40518";

cljs.core.async.t_cljs$core$async40518.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40518");
});

cljs.core.async.__GT_t_cljs$core$async40518 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40518(map_LT___$1,f__$1,ch__$1,meta40519){
return (new cljs.core.async.t_cljs$core$async40518(map_LT___$1,f__$1,ch__$1,meta40519));
});

}

return (new cljs.core.async.t_cljs$core$async40518(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40627 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40627 = (function (map_GT_,f,ch,meta40628){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40628 = meta40628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40629,meta40628__$1){
var self__ = this;
var _40629__$1 = this;
return (new cljs.core.async.t_cljs$core$async40627(self__.map_GT_,self__.f,self__.ch,meta40628__$1));
});

cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40629){
var self__ = this;
var _40629__$1 = this;
return self__.meta40628;
});

cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40628","meta40628",1359759354,null)], null);
});

cljs.core.async.t_cljs$core$async40627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40627";

cljs.core.async.t_cljs$core$async40627.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40627");
});

cljs.core.async.__GT_t_cljs$core$async40627 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40627(map_GT___$1,f__$1,ch__$1,meta40628){
return (new cljs.core.async.t_cljs$core$async40627(map_GT___$1,f__$1,ch__$1,meta40628));
});

}

return (new cljs.core.async.t_cljs$core$async40627(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40682 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40682 = (function (filter_GT_,p,ch,meta40683){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40683 = meta40683;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40684,meta40683__$1){
var self__ = this;
var _40684__$1 = this;
return (new cljs.core.async.t_cljs$core$async40682(self__.filter_GT_,self__.p,self__.ch,meta40683__$1));
});

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40684){
var self__ = this;
var _40684__$1 = this;
return self__.meta40683;
});

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40682.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40682.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40683","meta40683",149966438,null)], null);
});

cljs.core.async.t_cljs$core$async40682.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40682.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40682";

cljs.core.async.t_cljs$core$async40682.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40682");
});

cljs.core.async.__GT_t_cljs$core$async40682 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40682(filter_GT___$1,p__$1,ch__$1,meta40683){
return (new cljs.core.async.t_cljs$core$async40682(filter_GT___$1,p__$1,ch__$1,meta40683));
});

}

return (new cljs.core.async.t_cljs$core$async40682(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args40712 = [];
var len__19784__auto___40795 = arguments.length;
var i__19785__auto___40796 = (0);
while(true){
if((i__19785__auto___40796 < len__19784__auto___40795)){
args40712.push((arguments[i__19785__auto___40796]));

var G__40798 = (i__19785__auto___40796 + (1));
i__19785__auto___40796 = G__40798;
continue;
} else {
}
break;
}

var G__40718 = args40712.length;
switch (G__40718) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40712.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37161__auto___40804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___40804,out){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___40804,out){
return (function (state_40747){
var state_val_40748 = (state_40747[(1)]);
if((state_val_40748 === (7))){
var inst_40743 = (state_40747[(2)]);
var state_40747__$1 = state_40747;
var statearr_40759_40807 = state_40747__$1;
(statearr_40759_40807[(2)] = inst_40743);

(statearr_40759_40807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (1))){
var state_40747__$1 = state_40747;
var statearr_40760_40808 = state_40747__$1;
(statearr_40760_40808[(2)] = null);

(statearr_40760_40808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (4))){
var inst_40729 = (state_40747[(7)]);
var inst_40729__$1 = (state_40747[(2)]);
var inst_40730 = (inst_40729__$1 == null);
var state_40747__$1 = (function (){var statearr_40762 = state_40747;
(statearr_40762[(7)] = inst_40729__$1);

return statearr_40762;
})();
if(cljs.core.truth_(inst_40730)){
var statearr_40764_40809 = state_40747__$1;
(statearr_40764_40809[(1)] = (5));

} else {
var statearr_40765_40810 = state_40747__$1;
(statearr_40765_40810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (6))){
var inst_40729 = (state_40747[(7)]);
var inst_40734 = p.call(null,inst_40729);
var state_40747__$1 = state_40747;
if(cljs.core.truth_(inst_40734)){
var statearr_40766_40811 = state_40747__$1;
(statearr_40766_40811[(1)] = (8));

} else {
var statearr_40768_40812 = state_40747__$1;
(statearr_40768_40812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (3))){
var inst_40745 = (state_40747[(2)]);
var state_40747__$1 = state_40747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40747__$1,inst_40745);
} else {
if((state_val_40748 === (2))){
var state_40747__$1 = state_40747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40747__$1,(4),ch);
} else {
if((state_val_40748 === (11))){
var inst_40737 = (state_40747[(2)]);
var state_40747__$1 = state_40747;
var statearr_40774_40813 = state_40747__$1;
(statearr_40774_40813[(2)] = inst_40737);

(statearr_40774_40813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (9))){
var state_40747__$1 = state_40747;
var statearr_40775_40814 = state_40747__$1;
(statearr_40775_40814[(2)] = null);

(statearr_40775_40814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (5))){
var inst_40732 = cljs.core.async.close_BANG_.call(null,out);
var state_40747__$1 = state_40747;
var statearr_40776_40815 = state_40747__$1;
(statearr_40776_40815[(2)] = inst_40732);

(statearr_40776_40815[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (10))){
var inst_40740 = (state_40747[(2)]);
var state_40747__$1 = (function (){var statearr_40777 = state_40747;
(statearr_40777[(8)] = inst_40740);

return statearr_40777;
})();
var statearr_40778_40816 = state_40747__$1;
(statearr_40778_40816[(2)] = null);

(statearr_40778_40816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40748 === (8))){
var inst_40729 = (state_40747[(7)]);
var state_40747__$1 = state_40747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40747__$1,(11),out,inst_40729);
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
});})(c__37161__auto___40804,out))
;
return ((function (switch__35788__auto__,c__37161__auto___40804,out){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_40782 = [null,null,null,null,null,null,null,null,null];
(statearr_40782[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_40782[(1)] = (1));

return statearr_40782;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_40747){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_40747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e40783){if((e40783 instanceof Object)){
var ex__35792__auto__ = e40783;
var statearr_40784_40817 = state_40747;
(statearr_40784_40817[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40822 = state_40747;
state_40747 = G__40822;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_40747){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_40747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___40804,out))
})();
var state__37163__auto__ = (function (){var statearr_40789 = f__37162__auto__.call(null);
(statearr_40789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___40804);

return statearr_40789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___40804,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40823 = [];
var len__19784__auto___40830 = arguments.length;
var i__19785__auto___40831 = (0);
while(true){
if((i__19785__auto___40831 < len__19784__auto___40830)){
args40823.push((arguments[i__19785__auto___40831]));

var G__40833 = (i__19785__auto___40831 + (1));
i__19785__auto___40831 = G__40833;
continue;
} else {
}
break;
}

var G__40827 = args40823.length;
switch (G__40827) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40823.length)].join('')));

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
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_41019){
var state_val_41020 = (state_41019[(1)]);
if((state_val_41020 === (7))){
var inst_41015 = (state_41019[(2)]);
var state_41019__$1 = state_41019;
var statearr_41021_41064 = state_41019__$1;
(statearr_41021_41064[(2)] = inst_41015);

(statearr_41021_41064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (20))){
var inst_40977 = (state_41019[(7)]);
var inst_40996 = (state_41019[(2)]);
var inst_40997 = cljs.core.next.call(null,inst_40977);
var inst_40960 = inst_40997;
var inst_40961 = null;
var inst_40962 = (0);
var inst_40963 = (0);
var state_41019__$1 = (function (){var statearr_41022 = state_41019;
(statearr_41022[(8)] = inst_40962);

(statearr_41022[(9)] = inst_40960);

(statearr_41022[(10)] = inst_40996);

(statearr_41022[(11)] = inst_40961);

(statearr_41022[(12)] = inst_40963);

return statearr_41022;
})();
var statearr_41023_41065 = state_41019__$1;
(statearr_41023_41065[(2)] = null);

(statearr_41023_41065[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (1))){
var state_41019__$1 = state_41019;
var statearr_41024_41066 = state_41019__$1;
(statearr_41024_41066[(2)] = null);

(statearr_41024_41066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (4))){
var inst_40949 = (state_41019[(13)]);
var inst_40949__$1 = (state_41019[(2)]);
var inst_40950 = (inst_40949__$1 == null);
var state_41019__$1 = (function (){var statearr_41025 = state_41019;
(statearr_41025[(13)] = inst_40949__$1);

return statearr_41025;
})();
if(cljs.core.truth_(inst_40950)){
var statearr_41026_41067 = state_41019__$1;
(statearr_41026_41067[(1)] = (5));

} else {
var statearr_41027_41068 = state_41019__$1;
(statearr_41027_41068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (15))){
var state_41019__$1 = state_41019;
var statearr_41031_41069 = state_41019__$1;
(statearr_41031_41069[(2)] = null);

(statearr_41031_41069[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (21))){
var state_41019__$1 = state_41019;
var statearr_41032_41070 = state_41019__$1;
(statearr_41032_41070[(2)] = null);

(statearr_41032_41070[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (13))){
var inst_40962 = (state_41019[(8)]);
var inst_40960 = (state_41019[(9)]);
var inst_40961 = (state_41019[(11)]);
var inst_40963 = (state_41019[(12)]);
var inst_40973 = (state_41019[(2)]);
var inst_40974 = (inst_40963 + (1));
var tmp41028 = inst_40962;
var tmp41029 = inst_40960;
var tmp41030 = inst_40961;
var inst_40960__$1 = tmp41029;
var inst_40961__$1 = tmp41030;
var inst_40962__$1 = tmp41028;
var inst_40963__$1 = inst_40974;
var state_41019__$1 = (function (){var statearr_41033 = state_41019;
(statearr_41033[(8)] = inst_40962__$1);

(statearr_41033[(9)] = inst_40960__$1);

(statearr_41033[(11)] = inst_40961__$1);

(statearr_41033[(14)] = inst_40973);

(statearr_41033[(12)] = inst_40963__$1);

return statearr_41033;
})();
var statearr_41034_41071 = state_41019__$1;
(statearr_41034_41071[(2)] = null);

(statearr_41034_41071[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (22))){
var state_41019__$1 = state_41019;
var statearr_41035_41072 = state_41019__$1;
(statearr_41035_41072[(2)] = null);

(statearr_41035_41072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (6))){
var inst_40949 = (state_41019[(13)]);
var inst_40958 = f.call(null,inst_40949);
var inst_40959 = cljs.core.seq.call(null,inst_40958);
var inst_40960 = inst_40959;
var inst_40961 = null;
var inst_40962 = (0);
var inst_40963 = (0);
var state_41019__$1 = (function (){var statearr_41036 = state_41019;
(statearr_41036[(8)] = inst_40962);

(statearr_41036[(9)] = inst_40960);

(statearr_41036[(11)] = inst_40961);

(statearr_41036[(12)] = inst_40963);

return statearr_41036;
})();
var statearr_41037_41073 = state_41019__$1;
(statearr_41037_41073[(2)] = null);

(statearr_41037_41073[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (17))){
var inst_40977 = (state_41019[(7)]);
var inst_40987 = cljs.core.chunk_first.call(null,inst_40977);
var inst_40989 = cljs.core.chunk_rest.call(null,inst_40977);
var inst_40990 = cljs.core.count.call(null,inst_40987);
var inst_40960 = inst_40989;
var inst_40961 = inst_40987;
var inst_40962 = inst_40990;
var inst_40963 = (0);
var state_41019__$1 = (function (){var statearr_41038 = state_41019;
(statearr_41038[(8)] = inst_40962);

(statearr_41038[(9)] = inst_40960);

(statearr_41038[(11)] = inst_40961);

(statearr_41038[(12)] = inst_40963);

return statearr_41038;
})();
var statearr_41039_41074 = state_41019__$1;
(statearr_41039_41074[(2)] = null);

(statearr_41039_41074[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (3))){
var inst_41017 = (state_41019[(2)]);
var state_41019__$1 = state_41019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41019__$1,inst_41017);
} else {
if((state_val_41020 === (12))){
var inst_41005 = (state_41019[(2)]);
var state_41019__$1 = state_41019;
var statearr_41040_41075 = state_41019__$1;
(statearr_41040_41075[(2)] = inst_41005);

(statearr_41040_41075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (2))){
var state_41019__$1 = state_41019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41019__$1,(4),in$);
} else {
if((state_val_41020 === (23))){
var inst_41013 = (state_41019[(2)]);
var state_41019__$1 = state_41019;
var statearr_41041_41076 = state_41019__$1;
(statearr_41041_41076[(2)] = inst_41013);

(statearr_41041_41076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (19))){
var inst_41000 = (state_41019[(2)]);
var state_41019__$1 = state_41019;
var statearr_41042_41077 = state_41019__$1;
(statearr_41042_41077[(2)] = inst_41000);

(statearr_41042_41077[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (11))){
var inst_40960 = (state_41019[(9)]);
var inst_40977 = (state_41019[(7)]);
var inst_40977__$1 = cljs.core.seq.call(null,inst_40960);
var state_41019__$1 = (function (){var statearr_41043 = state_41019;
(statearr_41043[(7)] = inst_40977__$1);

return statearr_41043;
})();
if(inst_40977__$1){
var statearr_41044_41078 = state_41019__$1;
(statearr_41044_41078[(1)] = (14));

} else {
var statearr_41045_41079 = state_41019__$1;
(statearr_41045_41079[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (9))){
var inst_41007 = (state_41019[(2)]);
var inst_41008 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41019__$1 = (function (){var statearr_41046 = state_41019;
(statearr_41046[(15)] = inst_41007);

return statearr_41046;
})();
if(cljs.core.truth_(inst_41008)){
var statearr_41047_41080 = state_41019__$1;
(statearr_41047_41080[(1)] = (21));

} else {
var statearr_41048_41081 = state_41019__$1;
(statearr_41048_41081[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (5))){
var inst_40952 = cljs.core.async.close_BANG_.call(null,out);
var state_41019__$1 = state_41019;
var statearr_41049_41082 = state_41019__$1;
(statearr_41049_41082[(2)] = inst_40952);

(statearr_41049_41082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (14))){
var inst_40977 = (state_41019[(7)]);
var inst_40985 = cljs.core.chunked_seq_QMARK_.call(null,inst_40977);
var state_41019__$1 = state_41019;
if(inst_40985){
var statearr_41050_41083 = state_41019__$1;
(statearr_41050_41083[(1)] = (17));

} else {
var statearr_41051_41084 = state_41019__$1;
(statearr_41051_41084[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (16))){
var inst_41003 = (state_41019[(2)]);
var state_41019__$1 = state_41019;
var statearr_41052_41085 = state_41019__$1;
(statearr_41052_41085[(2)] = inst_41003);

(statearr_41052_41085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41020 === (10))){
var inst_40961 = (state_41019[(11)]);
var inst_40963 = (state_41019[(12)]);
var inst_40971 = cljs.core._nth.call(null,inst_40961,inst_40963);
var state_41019__$1 = state_41019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41019__$1,(13),out,inst_40971);
} else {
if((state_val_41020 === (18))){
var inst_40977 = (state_41019[(7)]);
var inst_40994 = cljs.core.first.call(null,inst_40977);
var state_41019__$1 = state_41019;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41019__$1,(20),out,inst_40994);
} else {
if((state_val_41020 === (8))){
var inst_40962 = (state_41019[(8)]);
var inst_40963 = (state_41019[(12)]);
var inst_40965 = (inst_40963 < inst_40962);
var inst_40966 = inst_40965;
var state_41019__$1 = state_41019;
if(cljs.core.truth_(inst_40966)){
var statearr_41055_41086 = state_41019__$1;
(statearr_41055_41086[(1)] = (10));

} else {
var statearr_41056_41087 = state_41019__$1;
(statearr_41056_41087[(1)] = (11));

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
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35789__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35789__auto____0 = (function (){
var statearr_41060 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41060[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35789__auto__);

(statearr_41060[(1)] = (1));

return statearr_41060;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35789__auto____1 = (function (state_41019){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_41019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e41061){if((e41061 instanceof Object)){
var ex__35792__auto__ = e41061;
var statearr_41062_41088 = state_41019;
(statearr_41062_41088[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41089 = state_41019;
state_41019 = G__41089;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35789__auto__ = function(state_41019){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35789__auto____1.call(this,state_41019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35789__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35789__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_41063 = f__37162__auto__.call(null);
(statearr_41063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_41063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41090 = [];
var len__19784__auto___41094 = arguments.length;
var i__19785__auto___41095 = (0);
while(true){
if((i__19785__auto___41095 < len__19784__auto___41094)){
args41090.push((arguments[i__19785__auto___41095]));

var G__41096 = (i__19785__auto___41095 + (1));
i__19785__auto___41095 = G__41096;
continue;
} else {
}
break;
}

var G__41093 = args41090.length;
switch (G__41093) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41090.length)].join('')));

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
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args41099 = [];
var len__19784__auto___41103 = arguments.length;
var i__19785__auto___41104 = (0);
while(true){
if((i__19785__auto___41104 < len__19784__auto___41103)){
args41099.push((arguments[i__19785__auto___41104]));

var G__41105 = (i__19785__auto___41104 + (1));
i__19785__auto___41104 = G__41105;
continue;
} else {
}
break;
}

var G__41102 = args41099.length;
switch (G__41102) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41099.length)].join('')));

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
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args41107 = [];
var len__19784__auto___41158 = arguments.length;
var i__19785__auto___41159 = (0);
while(true){
if((i__19785__auto___41159 < len__19784__auto___41158)){
args41107.push((arguments[i__19785__auto___41159]));

var G__41160 = (i__19785__auto___41159 + (1));
i__19785__auto___41159 = G__41160;
continue;
} else {
}
break;
}

var G__41109 = args41107.length;
switch (G__41109) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41107.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37161__auto___41164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___41164,out){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___41164,out){
return (function (state_41133){
var state_val_41134 = (state_41133[(1)]);
if((state_val_41134 === (7))){
var inst_41128 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
var statearr_41135_41167 = state_41133__$1;
(statearr_41135_41167[(2)] = inst_41128);

(statearr_41135_41167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41134 === (1))){
var inst_41110 = null;
var state_41133__$1 = (function (){var statearr_41136 = state_41133;
(statearr_41136[(7)] = inst_41110);

return statearr_41136;
})();
var statearr_41137_41170 = state_41133__$1;
(statearr_41137_41170[(2)] = null);

(statearr_41137_41170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41134 === (4))){
var inst_41113 = (state_41133[(8)]);
var inst_41113__$1 = (state_41133[(2)]);
var inst_41114 = (inst_41113__$1 == null);
var inst_41115 = cljs.core.not.call(null,inst_41114);
var state_41133__$1 = (function (){var statearr_41138 = state_41133;
(statearr_41138[(8)] = inst_41113__$1);

return statearr_41138;
})();
if(inst_41115){
var statearr_41139_41175 = state_41133__$1;
(statearr_41139_41175[(1)] = (5));

} else {
var statearr_41140_41176 = state_41133__$1;
(statearr_41140_41176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41134 === (6))){
var state_41133__$1 = state_41133;
var statearr_41141_41177 = state_41133__$1;
(statearr_41141_41177[(2)] = null);

(statearr_41141_41177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41134 === (3))){
var inst_41130 = (state_41133[(2)]);
var inst_41131 = cljs.core.async.close_BANG_.call(null,out);
var state_41133__$1 = (function (){var statearr_41142 = state_41133;
(statearr_41142[(9)] = inst_41130);

return statearr_41142;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41133__$1,inst_41131);
} else {
if((state_val_41134 === (2))){
var state_41133__$1 = state_41133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41133__$1,(4),ch);
} else {
if((state_val_41134 === (11))){
var inst_41113 = (state_41133[(8)]);
var inst_41122 = (state_41133[(2)]);
var inst_41110 = inst_41113;
var state_41133__$1 = (function (){var statearr_41143 = state_41133;
(statearr_41143[(10)] = inst_41122);

(statearr_41143[(7)] = inst_41110);

return statearr_41143;
})();
var statearr_41144_41182 = state_41133__$1;
(statearr_41144_41182[(2)] = null);

(statearr_41144_41182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41134 === (9))){
var inst_41113 = (state_41133[(8)]);
var state_41133__$1 = state_41133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41133__$1,(11),out,inst_41113);
} else {
if((state_val_41134 === (5))){
var inst_41113 = (state_41133[(8)]);
var inst_41110 = (state_41133[(7)]);
var inst_41117 = cljs.core._EQ_.call(null,inst_41113,inst_41110);
var state_41133__$1 = state_41133;
if(inst_41117){
var statearr_41146_41183 = state_41133__$1;
(statearr_41146_41183[(1)] = (8));

} else {
var statearr_41147_41184 = state_41133__$1;
(statearr_41147_41184[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41134 === (10))){
var inst_41125 = (state_41133[(2)]);
var state_41133__$1 = state_41133;
var statearr_41148_41185 = state_41133__$1;
(statearr_41148_41185[(2)] = inst_41125);

(statearr_41148_41185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41134 === (8))){
var inst_41110 = (state_41133[(7)]);
var tmp41145 = inst_41110;
var inst_41110__$1 = tmp41145;
var state_41133__$1 = (function (){var statearr_41149 = state_41133;
(statearr_41149[(7)] = inst_41110__$1);

return statearr_41149;
})();
var statearr_41150_41186 = state_41133__$1;
(statearr_41150_41186[(2)] = null);

(statearr_41150_41186[(1)] = (2));


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
});})(c__37161__auto___41164,out))
;
return ((function (switch__35788__auto__,c__37161__auto___41164,out){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_41154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41154[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_41154[(1)] = (1));

return statearr_41154;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_41133){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_41133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e41155){if((e41155 instanceof Object)){
var ex__35792__auto__ = e41155;
var statearr_41156_41187 = state_41133;
(statearr_41156_41187[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41188 = state_41133;
state_41133 = G__41188;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_41133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_41133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___41164,out))
})();
var state__37163__auto__ = (function (){var statearr_41157 = f__37162__auto__.call(null);
(statearr_41157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___41164);

return statearr_41157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___41164,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41189 = [];
var len__19784__auto___41259 = arguments.length;
var i__19785__auto___41260 = (0);
while(true){
if((i__19785__auto___41260 < len__19784__auto___41259)){
args41189.push((arguments[i__19785__auto___41260]));

var G__41261 = (i__19785__auto___41260 + (1));
i__19785__auto___41260 = G__41261;
continue;
} else {
}
break;
}

var G__41191 = args41189.length;
switch (G__41191) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41189.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37161__auto___41265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___41265,out){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___41265,out){
return (function (state_41229){
var state_val_41230 = (state_41229[(1)]);
if((state_val_41230 === (7))){
var inst_41225 = (state_41229[(2)]);
var state_41229__$1 = state_41229;
var statearr_41231_41266 = state_41229__$1;
(statearr_41231_41266[(2)] = inst_41225);

(statearr_41231_41266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (1))){
var inst_41192 = (new Array(n));
var inst_41193 = inst_41192;
var inst_41194 = (0);
var state_41229__$1 = (function (){var statearr_41232 = state_41229;
(statearr_41232[(7)] = inst_41194);

(statearr_41232[(8)] = inst_41193);

return statearr_41232;
})();
var statearr_41233_41267 = state_41229__$1;
(statearr_41233_41267[(2)] = null);

(statearr_41233_41267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (4))){
var inst_41197 = (state_41229[(9)]);
var inst_41197__$1 = (state_41229[(2)]);
var inst_41198 = (inst_41197__$1 == null);
var inst_41199 = cljs.core.not.call(null,inst_41198);
var state_41229__$1 = (function (){var statearr_41234 = state_41229;
(statearr_41234[(9)] = inst_41197__$1);

return statearr_41234;
})();
if(inst_41199){
var statearr_41235_41268 = state_41229__$1;
(statearr_41235_41268[(1)] = (5));

} else {
var statearr_41236_41269 = state_41229__$1;
(statearr_41236_41269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (15))){
var inst_41219 = (state_41229[(2)]);
var state_41229__$1 = state_41229;
var statearr_41237_41270 = state_41229__$1;
(statearr_41237_41270[(2)] = inst_41219);

(statearr_41237_41270[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (13))){
var state_41229__$1 = state_41229;
var statearr_41238_41271 = state_41229__$1;
(statearr_41238_41271[(2)] = null);

(statearr_41238_41271[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (6))){
var inst_41194 = (state_41229[(7)]);
var inst_41215 = (inst_41194 > (0));
var state_41229__$1 = state_41229;
if(cljs.core.truth_(inst_41215)){
var statearr_41239_41272 = state_41229__$1;
(statearr_41239_41272[(1)] = (12));

} else {
var statearr_41240_41273 = state_41229__$1;
(statearr_41240_41273[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (3))){
var inst_41227 = (state_41229[(2)]);
var state_41229__$1 = state_41229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41229__$1,inst_41227);
} else {
if((state_val_41230 === (12))){
var inst_41193 = (state_41229[(8)]);
var inst_41217 = cljs.core.vec.call(null,inst_41193);
var state_41229__$1 = state_41229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41229__$1,(15),out,inst_41217);
} else {
if((state_val_41230 === (2))){
var state_41229__$1 = state_41229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41229__$1,(4),ch);
} else {
if((state_val_41230 === (11))){
var inst_41209 = (state_41229[(2)]);
var inst_41210 = (new Array(n));
var inst_41193 = inst_41210;
var inst_41194 = (0);
var state_41229__$1 = (function (){var statearr_41241 = state_41229;
(statearr_41241[(7)] = inst_41194);

(statearr_41241[(10)] = inst_41209);

(statearr_41241[(8)] = inst_41193);

return statearr_41241;
})();
var statearr_41242_41274 = state_41229__$1;
(statearr_41242_41274[(2)] = null);

(statearr_41242_41274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (9))){
var inst_41193 = (state_41229[(8)]);
var inst_41207 = cljs.core.vec.call(null,inst_41193);
var state_41229__$1 = state_41229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41229__$1,(11),out,inst_41207);
} else {
if((state_val_41230 === (5))){
var inst_41197 = (state_41229[(9)]);
var inst_41194 = (state_41229[(7)]);
var inst_41193 = (state_41229[(8)]);
var inst_41202 = (state_41229[(11)]);
var inst_41201 = (inst_41193[inst_41194] = inst_41197);
var inst_41202__$1 = (inst_41194 + (1));
var inst_41203 = (inst_41202__$1 < n);
var state_41229__$1 = (function (){var statearr_41243 = state_41229;
(statearr_41243[(12)] = inst_41201);

(statearr_41243[(11)] = inst_41202__$1);

return statearr_41243;
})();
if(cljs.core.truth_(inst_41203)){
var statearr_41244_41275 = state_41229__$1;
(statearr_41244_41275[(1)] = (8));

} else {
var statearr_41245_41276 = state_41229__$1;
(statearr_41245_41276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (14))){
var inst_41222 = (state_41229[(2)]);
var inst_41223 = cljs.core.async.close_BANG_.call(null,out);
var state_41229__$1 = (function (){var statearr_41247 = state_41229;
(statearr_41247[(13)] = inst_41222);

return statearr_41247;
})();
var statearr_41248_41277 = state_41229__$1;
(statearr_41248_41277[(2)] = inst_41223);

(statearr_41248_41277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (10))){
var inst_41213 = (state_41229[(2)]);
var state_41229__$1 = state_41229;
var statearr_41249_41278 = state_41229__$1;
(statearr_41249_41278[(2)] = inst_41213);

(statearr_41249_41278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41230 === (8))){
var inst_41193 = (state_41229[(8)]);
var inst_41202 = (state_41229[(11)]);
var tmp41246 = inst_41193;
var inst_41193__$1 = tmp41246;
var inst_41194 = inst_41202;
var state_41229__$1 = (function (){var statearr_41250 = state_41229;
(statearr_41250[(7)] = inst_41194);

(statearr_41250[(8)] = inst_41193__$1);

return statearr_41250;
})();
var statearr_41251_41279 = state_41229__$1;
(statearr_41251_41279[(2)] = null);

(statearr_41251_41279[(1)] = (2));


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
});})(c__37161__auto___41265,out))
;
return ((function (switch__35788__auto__,c__37161__auto___41265,out){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_41255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41255[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_41255[(1)] = (1));

return statearr_41255;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_41229){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_41229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e41256){if((e41256 instanceof Object)){
var ex__35792__auto__ = e41256;
var statearr_41257_41280 = state_41229;
(statearr_41257_41280[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41256;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41281 = state_41229;
state_41229 = G__41281;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_41229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_41229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___41265,out))
})();
var state__37163__auto__ = (function (){var statearr_41258 = f__37162__auto__.call(null);
(statearr_41258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___41265);

return statearr_41258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___41265,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41286 = [];
var len__19784__auto___41369 = arguments.length;
var i__19785__auto___41370 = (0);
while(true){
if((i__19785__auto___41370 < len__19784__auto___41369)){
args41286.push((arguments[i__19785__auto___41370]));

var G__41371 = (i__19785__auto___41370 + (1));
i__19785__auto___41370 = G__41371;
continue;
} else {
}
break;
}

var G__41292 = args41286.length;
switch (G__41292) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41286.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37161__auto___41373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___41373,out){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___41373,out){
return (function (state_41334){
var state_val_41339 = (state_41334[(1)]);
if((state_val_41339 === (7))){
var inst_41330 = (state_41334[(2)]);
var state_41334__$1 = state_41334;
var statearr_41340_41374 = state_41334__$1;
(statearr_41340_41374[(2)] = inst_41330);

(statearr_41340_41374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (1))){
var inst_41293 = [];
var inst_41294 = inst_41293;
var inst_41295 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41334__$1 = (function (){var statearr_41341 = state_41334;
(statearr_41341[(7)] = inst_41295);

(statearr_41341[(8)] = inst_41294);

return statearr_41341;
})();
var statearr_41342_41375 = state_41334__$1;
(statearr_41342_41375[(2)] = null);

(statearr_41342_41375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (4))){
var inst_41298 = (state_41334[(9)]);
var inst_41298__$1 = (state_41334[(2)]);
var inst_41299 = (inst_41298__$1 == null);
var inst_41300 = cljs.core.not.call(null,inst_41299);
var state_41334__$1 = (function (){var statearr_41343 = state_41334;
(statearr_41343[(9)] = inst_41298__$1);

return statearr_41343;
})();
if(inst_41300){
var statearr_41344_41377 = state_41334__$1;
(statearr_41344_41377[(1)] = (5));

} else {
var statearr_41345_41378 = state_41334__$1;
(statearr_41345_41378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (15))){
var inst_41324 = (state_41334[(2)]);
var state_41334__$1 = state_41334;
var statearr_41346_41380 = state_41334__$1;
(statearr_41346_41380[(2)] = inst_41324);

(statearr_41346_41380[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (13))){
var state_41334__$1 = state_41334;
var statearr_41347_41381 = state_41334__$1;
(statearr_41347_41381[(2)] = null);

(statearr_41347_41381[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (6))){
var inst_41294 = (state_41334[(8)]);
var inst_41319 = inst_41294.length;
var inst_41320 = (inst_41319 > (0));
var state_41334__$1 = state_41334;
if(cljs.core.truth_(inst_41320)){
var statearr_41348_41382 = state_41334__$1;
(statearr_41348_41382[(1)] = (12));

} else {
var statearr_41349_41383 = state_41334__$1;
(statearr_41349_41383[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (3))){
var inst_41332 = (state_41334[(2)]);
var state_41334__$1 = state_41334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41334__$1,inst_41332);
} else {
if((state_val_41339 === (12))){
var inst_41294 = (state_41334[(8)]);
var inst_41322 = cljs.core.vec.call(null,inst_41294);
var state_41334__$1 = state_41334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41334__$1,(15),out,inst_41322);
} else {
if((state_val_41339 === (2))){
var state_41334__$1 = state_41334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41334__$1,(4),ch);
} else {
if((state_val_41339 === (11))){
var inst_41298 = (state_41334[(9)]);
var inst_41302 = (state_41334[(10)]);
var inst_41312 = (state_41334[(2)]);
var inst_41313 = [];
var inst_41314 = inst_41313.push(inst_41298);
var inst_41294 = inst_41313;
var inst_41295 = inst_41302;
var state_41334__$1 = (function (){var statearr_41350 = state_41334;
(statearr_41350[(7)] = inst_41295);

(statearr_41350[(11)] = inst_41314);

(statearr_41350[(12)] = inst_41312);

(statearr_41350[(8)] = inst_41294);

return statearr_41350;
})();
var statearr_41351_41384 = state_41334__$1;
(statearr_41351_41384[(2)] = null);

(statearr_41351_41384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (9))){
var inst_41294 = (state_41334[(8)]);
var inst_41310 = cljs.core.vec.call(null,inst_41294);
var state_41334__$1 = state_41334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41334__$1,(11),out,inst_41310);
} else {
if((state_val_41339 === (5))){
var inst_41298 = (state_41334[(9)]);
var inst_41295 = (state_41334[(7)]);
var inst_41302 = (state_41334[(10)]);
var inst_41302__$1 = f.call(null,inst_41298);
var inst_41303 = cljs.core._EQ_.call(null,inst_41302__$1,inst_41295);
var inst_41304 = cljs.core.keyword_identical_QMARK_.call(null,inst_41295,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41305 = (inst_41303) || (inst_41304);
var state_41334__$1 = (function (){var statearr_41352 = state_41334;
(statearr_41352[(10)] = inst_41302__$1);

return statearr_41352;
})();
if(cljs.core.truth_(inst_41305)){
var statearr_41353_41385 = state_41334__$1;
(statearr_41353_41385[(1)] = (8));

} else {
var statearr_41354_41386 = state_41334__$1;
(statearr_41354_41386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (14))){
var inst_41327 = (state_41334[(2)]);
var inst_41328 = cljs.core.async.close_BANG_.call(null,out);
var state_41334__$1 = (function (){var statearr_41356 = state_41334;
(statearr_41356[(13)] = inst_41327);

return statearr_41356;
})();
var statearr_41357_41387 = state_41334__$1;
(statearr_41357_41387[(2)] = inst_41328);

(statearr_41357_41387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (10))){
var inst_41317 = (state_41334[(2)]);
var state_41334__$1 = state_41334;
var statearr_41358_41389 = state_41334__$1;
(statearr_41358_41389[(2)] = inst_41317);

(statearr_41358_41389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41339 === (8))){
var inst_41298 = (state_41334[(9)]);
var inst_41302 = (state_41334[(10)]);
var inst_41294 = (state_41334[(8)]);
var inst_41307 = inst_41294.push(inst_41298);
var tmp41355 = inst_41294;
var inst_41294__$1 = tmp41355;
var inst_41295 = inst_41302;
var state_41334__$1 = (function (){var statearr_41359 = state_41334;
(statearr_41359[(7)] = inst_41295);

(statearr_41359[(14)] = inst_41307);

(statearr_41359[(8)] = inst_41294__$1);

return statearr_41359;
})();
var statearr_41360_41391 = state_41334__$1;
(statearr_41360_41391[(2)] = null);

(statearr_41360_41391[(1)] = (2));


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
});})(c__37161__auto___41373,out))
;
return ((function (switch__35788__auto__,c__37161__auto___41373,out){
return (function() {
var cljs$core$async$state_machine__35789__auto__ = null;
var cljs$core$async$state_machine__35789__auto____0 = (function (){
var statearr_41364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41364[(0)] = cljs$core$async$state_machine__35789__auto__);

(statearr_41364[(1)] = (1));

return statearr_41364;
});
var cljs$core$async$state_machine__35789__auto____1 = (function (state_41334){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_41334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e41365){if((e41365 instanceof Object)){
var ex__35792__auto__ = e41365;
var statearr_41366_41392 = state_41334;
(statearr_41366_41392[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41393 = state_41334;
state_41334 = G__41393;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
cljs$core$async$state_machine__35789__auto__ = function(state_41334){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35789__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35789__auto____1.call(this,state_41334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35789__auto____0;
cljs$core$async$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35789__auto____1;
return cljs$core$async$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___41373,out))
})();
var state__37163__auto__ = (function (){var statearr_41368 = f__37162__auto__.call(null);
(statearr_41368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___41373);

return statearr_41368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___41373,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map