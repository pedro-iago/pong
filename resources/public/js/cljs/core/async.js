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
var args38164 = [];
var len__19784__auto___38179 = arguments.length;
var i__19785__auto___38181 = (0);
while(true){
if((i__19785__auto___38181 < len__19784__auto___38179)){
args38164.push((arguments[i__19785__auto___38181]));

var G__38185 = (i__19785__auto___38181 + (1));
i__19785__auto___38181 = G__38185;
continue;
} else {
}
break;
}

var G__38167 = args38164.length;
switch (G__38167) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38164.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38168 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38168 = (function (f,blockable,meta38169){
this.f = f;
this.blockable = blockable;
this.meta38169 = meta38169;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38170,meta38169__$1){
var self__ = this;
var _38170__$1 = this;
return (new cljs.core.async.t_cljs$core$async38168(self__.f,self__.blockable,meta38169__$1));
});

cljs.core.async.t_cljs$core$async38168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38170){
var self__ = this;
var _38170__$1 = this;
return self__.meta38169;
});

cljs.core.async.t_cljs$core$async38168.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38168.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38168.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38168.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38168.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38169","meta38169",-175123433,null)], null);
});

cljs.core.async.t_cljs$core$async38168.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38168.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38168";

cljs.core.async.t_cljs$core$async38168.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async38168");
});

cljs.core.async.__GT_t_cljs$core$async38168 = (function cljs$core$async$__GT_t_cljs$core$async38168(f__$1,blockable__$1,meta38169){
return (new cljs.core.async.t_cljs$core$async38168(f__$1,blockable__$1,meta38169));
});

}

return (new cljs.core.async.t_cljs$core$async38168(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args38221 = [];
var len__19784__auto___38228 = arguments.length;
var i__19785__auto___38230 = (0);
while(true){
if((i__19785__auto___38230 < len__19784__auto___38228)){
args38221.push((arguments[i__19785__auto___38230]));

var G__38235 = (i__19785__auto___38230 + (1));
i__19785__auto___38230 = G__38235;
continue;
} else {
}
break;
}

var G__38226 = args38221.length;
switch (G__38226) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38221.length)].join('')));

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
var args38244 = [];
var len__19784__auto___38252 = arguments.length;
var i__19785__auto___38253 = (0);
while(true){
if((i__19785__auto___38253 < len__19784__auto___38252)){
args38244.push((arguments[i__19785__auto___38253]));

var G__38255 = (i__19785__auto___38253 + (1));
i__19785__auto___38253 = G__38255;
continue;
} else {
}
break;
}

var G__38248 = args38244.length;
switch (G__38248) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38244.length)].join('')));

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
var args38264 = [];
var len__19784__auto___38270 = arguments.length;
var i__19785__auto___38271 = (0);
while(true){
if((i__19785__auto___38271 < len__19784__auto___38270)){
args38264.push((arguments[i__19785__auto___38271]));

var G__38272 = (i__19785__auto___38271 + (1));
i__19785__auto___38271 = G__38272;
continue;
} else {
}
break;
}

var G__38268 = args38264.length;
switch (G__38268) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38264.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38277 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38277);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38277,ret){
return (function (){
return fn1.call(null,val_38277);
});})(val_38277,ret))
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
var args38284 = [];
var len__19784__auto___38296 = arguments.length;
var i__19785__auto___38298 = (0);
while(true){
if((i__19785__auto___38298 < len__19784__auto___38296)){
args38284.push((arguments[i__19785__auto___38298]));

var G__38299 = (i__19785__auto___38298 + (1));
i__19785__auto___38298 = G__38299;
continue;
} else {
}
break;
}

var G__38289 = args38284.length;
switch (G__38289) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38284.length)].join('')));

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
var n__19629__auto___38321 = n;
var x_38322 = (0);
while(true){
if((x_38322 < n__19629__auto___38321)){
(a[x_38322] = (0));

var G__38324 = (x_38322 + (1));
x_38322 = G__38324;
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

var G__38332 = (i + (1));
i = G__38332;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38344 = (function (alt_flag,flag,meta38345){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta38345 = meta38345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38346,meta38345__$1){
var self__ = this;
var _38346__$1 = this;
return (new cljs.core.async.t_cljs$core$async38344(self__.alt_flag,self__.flag,meta38345__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38346){
var self__ = this;
var _38346__$1 = this;
return self__.meta38345;
});})(flag))
;

cljs.core.async.t_cljs$core$async38344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38344.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38345","meta38345",-237694917,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38344";

cljs.core.async.t_cljs$core$async38344.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async38344");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async38344 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38344(alt_flag__$1,flag__$1,meta38345){
return (new cljs.core.async.t_cljs$core$async38344(alt_flag__$1,flag__$1,meta38345));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38344(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38384 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38384 = (function (alt_handler,flag,cb,meta38385){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta38385 = meta38385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38386,meta38385__$1){
var self__ = this;
var _38386__$1 = this;
return (new cljs.core.async.t_cljs$core$async38384(self__.alt_handler,self__.flag,self__.cb,meta38385__$1));
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38386){
var self__ = this;
var _38386__$1 = this;
return self__.meta38385;
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38384.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38385","meta38385",-2011934345,null)], null);
});

cljs.core.async.t_cljs$core$async38384.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38384";

cljs.core.async.t_cljs$core$async38384.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async38384");
});

cljs.core.async.__GT_t_cljs$core$async38384 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38384(alt_handler__$1,flag__$1,cb__$1,meta38385){
return (new cljs.core.async.t_cljs$core$async38384(alt_handler__$1,flag__$1,cb__$1,meta38385));
});

}

return (new cljs.core.async.t_cljs$core$async38384(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__38413_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38413_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38414_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38414_SHARP_,port], null));
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
var G__38434 = (i + (1));
i = G__38434;
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
var len__19784__auto___38453 = arguments.length;
var i__19785__auto___38454 = (0);
while(true){
if((i__19785__auto___38454 < len__19784__auto___38453)){
args__19791__auto__.push((arguments[i__19785__auto___38454]));

var G__38458 = (i__19785__auto___38454 + (1));
i__19785__auto___38454 = G__38458;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38449){
var map__38450 = p__38449;
var map__38450__$1 = ((((!((map__38450 == null)))?((((map__38450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38450):map__38450);
var opts = map__38450__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38443){
var G__38444 = cljs.core.first.call(null,seq38443);
var seq38443__$1 = cljs.core.next.call(null,seq38443);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38444,seq38443__$1);
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
var args38465 = [];
var len__19784__auto___38532 = arguments.length;
var i__19785__auto___38533 = (0);
while(true){
if((i__19785__auto___38533 < len__19784__auto___38532)){
args38465.push((arguments[i__19785__auto___38533]));

var G__38534 = (i__19785__auto___38533 + (1));
i__19785__auto___38533 = G__38534;
continue;
} else {
}
break;
}

var G__38469 = args38465.length;
switch (G__38469) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38465.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38071__auto___38536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___38536){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___38536){
return (function (state_38508){
var state_val_38509 = (state_38508[(1)]);
if((state_val_38509 === (7))){
var inst_38504 = (state_38508[(2)]);
var state_38508__$1 = state_38508;
var statearr_38510_38537 = state_38508__$1;
(statearr_38510_38537[(2)] = inst_38504);

(statearr_38510_38537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (1))){
var state_38508__$1 = state_38508;
var statearr_38511_38538 = state_38508__$1;
(statearr_38511_38538[(2)] = null);

(statearr_38511_38538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (4))){
var inst_38485 = (state_38508[(7)]);
var inst_38485__$1 = (state_38508[(2)]);
var inst_38488 = (inst_38485__$1 == null);
var state_38508__$1 = (function (){var statearr_38512 = state_38508;
(statearr_38512[(7)] = inst_38485__$1);

return statearr_38512;
})();
if(cljs.core.truth_(inst_38488)){
var statearr_38513_38539 = state_38508__$1;
(statearr_38513_38539[(1)] = (5));

} else {
var statearr_38514_38540 = state_38508__$1;
(statearr_38514_38540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (13))){
var state_38508__$1 = state_38508;
var statearr_38515_38541 = state_38508__$1;
(statearr_38515_38541[(2)] = null);

(statearr_38515_38541[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (6))){
var inst_38485 = (state_38508[(7)]);
var state_38508__$1 = state_38508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38508__$1,(11),to,inst_38485);
} else {
if((state_val_38509 === (3))){
var inst_38506 = (state_38508[(2)]);
var state_38508__$1 = state_38508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38508__$1,inst_38506);
} else {
if((state_val_38509 === (12))){
var state_38508__$1 = state_38508;
var statearr_38516_38542 = state_38508__$1;
(statearr_38516_38542[(2)] = null);

(statearr_38516_38542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (2))){
var state_38508__$1 = state_38508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38508__$1,(4),from);
} else {
if((state_val_38509 === (11))){
var inst_38497 = (state_38508[(2)]);
var state_38508__$1 = state_38508;
if(cljs.core.truth_(inst_38497)){
var statearr_38517_38543 = state_38508__$1;
(statearr_38517_38543[(1)] = (12));

} else {
var statearr_38518_38544 = state_38508__$1;
(statearr_38518_38544[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (9))){
var state_38508__$1 = state_38508;
var statearr_38519_38545 = state_38508__$1;
(statearr_38519_38545[(2)] = null);

(statearr_38519_38545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (5))){
var state_38508__$1 = state_38508;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38520_38546 = state_38508__$1;
(statearr_38520_38546[(1)] = (8));

} else {
var statearr_38521_38547 = state_38508__$1;
(statearr_38521_38547[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (14))){
var inst_38502 = (state_38508[(2)]);
var state_38508__$1 = state_38508;
var statearr_38522_38548 = state_38508__$1;
(statearr_38522_38548[(2)] = inst_38502);

(statearr_38522_38548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (10))){
var inst_38494 = (state_38508[(2)]);
var state_38508__$1 = state_38508;
var statearr_38523_38549 = state_38508__$1;
(statearr_38523_38549[(2)] = inst_38494);

(statearr_38523_38549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38509 === (8))){
var inst_38491 = cljs.core.async.close_BANG_.call(null,to);
var state_38508__$1 = state_38508;
var statearr_38524_38550 = state_38508__$1;
(statearr_38524_38550[(2)] = inst_38491);

(statearr_38524_38550[(1)] = (10));


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
});})(c__38071__auto___38536))
;
return ((function (switch__37506__auto__,c__38071__auto___38536){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_38528 = [null,null,null,null,null,null,null,null];
(statearr_38528[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_38528[(1)] = (1));

return statearr_38528;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_38508){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_38508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e38529){if((e38529 instanceof Object)){
var ex__37511__auto__ = e38529;
var statearr_38530_38551 = state_38508;
(statearr_38530_38551[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38552 = state_38508;
state_38508 = G__38552;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_38508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_38508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___38536))
})();
var state__38073__auto__ = (function (){var statearr_38531 = f__38072__auto__.call(null);
(statearr_38531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___38536);

return statearr_38531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___38536))
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
return (function (p__38792){
var vec__38793 = p__38792;
var v = cljs.core.nth.call(null,vec__38793,(0),null);
var p = cljs.core.nth.call(null,vec__38793,(1),null);
var job = vec__38793;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38071__auto___39009 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___39009,res,vec__38793,v,p,job,jobs,results){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___39009,res,vec__38793,v,p,job,jobs,results){
return (function (state_38798){
var state_val_38799 = (state_38798[(1)]);
if((state_val_38799 === (1))){
var state_38798__$1 = state_38798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38798__$1,(2),res,v);
} else {
if((state_val_38799 === (2))){
var inst_38795 = (state_38798[(2)]);
var inst_38796 = cljs.core.async.close_BANG_.call(null,res);
var state_38798__$1 = (function (){var statearr_38801 = state_38798;
(statearr_38801[(7)] = inst_38795);

return statearr_38801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38798__$1,inst_38796);
} else {
return null;
}
}
});})(c__38071__auto___39009,res,vec__38793,v,p,job,jobs,results))
;
return ((function (switch__37506__auto__,c__38071__auto___39009,res,vec__38793,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0 = (function (){
var statearr_38809 = [null,null,null,null,null,null,null,null];
(statearr_38809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__);

(statearr_38809[(1)] = (1));

return statearr_38809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1 = (function (state_38798){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_38798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e38810){if((e38810 instanceof Object)){
var ex__37511__auto__ = e38810;
var statearr_38811_39010 = state_38798;
(statearr_38811_39010[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39011 = state_38798;
state_38798 = G__39011;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = function(state_38798){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1.call(this,state_38798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___39009,res,vec__38793,v,p,job,jobs,results))
})();
var state__38073__auto__ = (function (){var statearr_38812 = f__38072__auto__.call(null);
(statearr_38812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___39009);

return statearr_38812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___39009,res,vec__38793,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__38818){
var vec__38819 = p__38818;
var v = cljs.core.nth.call(null,vec__38819,(0),null);
var p = cljs.core.nth.call(null,vec__38819,(1),null);
var job = vec__38819;
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
var n__19629__auto___39012 = n;
var __39013 = (0);
while(true){
if((__39013 < n__19629__auto___39012)){
var G__38822_39014 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__38822_39014) {
case "compute":
var c__38071__auto___39016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39013,c__38071__auto___39016,G__38822_39014,n__19629__auto___39012,jobs,results,process,async){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (__39013,c__38071__auto___39016,G__38822_39014,n__19629__auto___39012,jobs,results,process,async){
return (function (state_38837){
var state_val_38838 = (state_38837[(1)]);
if((state_val_38838 === (1))){
var state_38837__$1 = state_38837;
var statearr_38840_39017 = state_38837__$1;
(statearr_38840_39017[(2)] = null);

(statearr_38840_39017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (2))){
var state_38837__$1 = state_38837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38837__$1,(4),jobs);
} else {
if((state_val_38838 === (3))){
var inst_38835 = (state_38837[(2)]);
var state_38837__$1 = state_38837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38837__$1,inst_38835);
} else {
if((state_val_38838 === (4))){
var inst_38826 = (state_38837[(2)]);
var inst_38827 = process.call(null,inst_38826);
var state_38837__$1 = state_38837;
if(cljs.core.truth_(inst_38827)){
var statearr_38842_39018 = state_38837__$1;
(statearr_38842_39018[(1)] = (5));

} else {
var statearr_38843_39019 = state_38837__$1;
(statearr_38843_39019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (5))){
var state_38837__$1 = state_38837;
var statearr_38844_39020 = state_38837__$1;
(statearr_38844_39020[(2)] = null);

(statearr_38844_39020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (6))){
var state_38837__$1 = state_38837;
var statearr_38845_39021 = state_38837__$1;
(statearr_38845_39021[(2)] = null);

(statearr_38845_39021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38838 === (7))){
var inst_38833 = (state_38837[(2)]);
var state_38837__$1 = state_38837;
var statearr_38846_39022 = state_38837__$1;
(statearr_38846_39022[(2)] = inst_38833);

(statearr_38846_39022[(1)] = (3));


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
});})(__39013,c__38071__auto___39016,G__38822_39014,n__19629__auto___39012,jobs,results,process,async))
;
return ((function (__39013,switch__37506__auto__,c__38071__auto___39016,G__38822_39014,n__19629__auto___39012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0 = (function (){
var statearr_38856 = [null,null,null,null,null,null,null];
(statearr_38856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__);

(statearr_38856[(1)] = (1));

return statearr_38856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1 = (function (state_38837){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_38837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e38857){if((e38857 instanceof Object)){
var ex__37511__auto__ = e38857;
var statearr_38859_39023 = state_38837;
(statearr_38859_39023[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39024 = state_38837;
state_38837 = G__39024;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = function(state_38837){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1.call(this,state_38837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__;
})()
;})(__39013,switch__37506__auto__,c__38071__auto___39016,G__38822_39014,n__19629__auto___39012,jobs,results,process,async))
})();
var state__38073__auto__ = (function (){var statearr_38860 = f__38072__auto__.call(null);
(statearr_38860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___39016);

return statearr_38860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(__39013,c__38071__auto___39016,G__38822_39014,n__19629__auto___39012,jobs,results,process,async))
);


break;
case "async":
var c__38071__auto___39025 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39013,c__38071__auto___39025,G__38822_39014,n__19629__auto___39012,jobs,results,process,async){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (__39013,c__38071__auto___39025,G__38822_39014,n__19629__auto___39012,jobs,results,process,async){
return (function (state_38876){
var state_val_38877 = (state_38876[(1)]);
if((state_val_38877 === (1))){
var state_38876__$1 = state_38876;
var statearr_38879_39026 = state_38876__$1;
(statearr_38879_39026[(2)] = null);

(statearr_38879_39026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38877 === (2))){
var state_38876__$1 = state_38876;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38876__$1,(4),jobs);
} else {
if((state_val_38877 === (3))){
var inst_38873 = (state_38876[(2)]);
var state_38876__$1 = state_38876;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38876__$1,inst_38873);
} else {
if((state_val_38877 === (4))){
var inst_38865 = (state_38876[(2)]);
var inst_38866 = async.call(null,inst_38865);
var state_38876__$1 = state_38876;
if(cljs.core.truth_(inst_38866)){
var statearr_38880_39027 = state_38876__$1;
(statearr_38880_39027[(1)] = (5));

} else {
var statearr_38881_39028 = state_38876__$1;
(statearr_38881_39028[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38877 === (5))){
var state_38876__$1 = state_38876;
var statearr_38882_39029 = state_38876__$1;
(statearr_38882_39029[(2)] = null);

(statearr_38882_39029[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38877 === (6))){
var state_38876__$1 = state_38876;
var statearr_38883_39030 = state_38876__$1;
(statearr_38883_39030[(2)] = null);

(statearr_38883_39030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38877 === (7))){
var inst_38871 = (state_38876[(2)]);
var state_38876__$1 = state_38876;
var statearr_38884_39031 = state_38876__$1;
(statearr_38884_39031[(2)] = inst_38871);

(statearr_38884_39031[(1)] = (3));


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
});})(__39013,c__38071__auto___39025,G__38822_39014,n__19629__auto___39012,jobs,results,process,async))
;
return ((function (__39013,switch__37506__auto__,c__38071__auto___39025,G__38822_39014,n__19629__auto___39012,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0 = (function (){
var statearr_38889 = [null,null,null,null,null,null,null];
(statearr_38889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__);

(statearr_38889[(1)] = (1));

return statearr_38889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1 = (function (state_38876){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_38876);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e38890){if((e38890 instanceof Object)){
var ex__37511__auto__ = e38890;
var statearr_38892_39032 = state_38876;
(statearr_38892_39032[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38876);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39033 = state_38876;
state_38876 = G__39033;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = function(state_38876){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1.call(this,state_38876);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__;
})()
;})(__39013,switch__37506__auto__,c__38071__auto___39025,G__38822_39014,n__19629__auto___39012,jobs,results,process,async))
})();
var state__38073__auto__ = (function (){var statearr_38893 = f__38072__auto__.call(null);
(statearr_38893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___39025);

return statearr_38893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(__39013,c__38071__auto___39025,G__38822_39014,n__19629__auto___39012,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__39034 = (__39013 + (1));
__39013 = G__39034;
continue;
} else {
}
break;
}

var c__38071__auto___39035 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___39035,jobs,results,process,async){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___39035,jobs,results,process,async){
return (function (state_38916){
var state_val_38918 = (state_38916[(1)]);
if((state_val_38918 === (1))){
var state_38916__$1 = state_38916;
var statearr_38920_39036 = state_38916__$1;
(statearr_38920_39036[(2)] = null);

(statearr_38920_39036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (2))){
var state_38916__$1 = state_38916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38916__$1,(4),from);
} else {
if((state_val_38918 === (3))){
var inst_38914 = (state_38916[(2)]);
var state_38916__$1 = state_38916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38916__$1,inst_38914);
} else {
if((state_val_38918 === (4))){
var inst_38897 = (state_38916[(7)]);
var inst_38897__$1 = (state_38916[(2)]);
var inst_38898 = (inst_38897__$1 == null);
var state_38916__$1 = (function (){var statearr_38923 = state_38916;
(statearr_38923[(7)] = inst_38897__$1);

return statearr_38923;
})();
if(cljs.core.truth_(inst_38898)){
var statearr_38924_39037 = state_38916__$1;
(statearr_38924_39037[(1)] = (5));

} else {
var statearr_38925_39038 = state_38916__$1;
(statearr_38925_39038[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (5))){
var inst_38900 = cljs.core.async.close_BANG_.call(null,jobs);
var state_38916__$1 = state_38916;
var statearr_38926_39039 = state_38916__$1;
(statearr_38926_39039[(2)] = inst_38900);

(statearr_38926_39039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (6))){
var inst_38897 = (state_38916[(7)]);
var inst_38902 = (state_38916[(8)]);
var inst_38902__$1 = cljs.core.async.chan.call(null,(1));
var inst_38903 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38904 = [inst_38897,inst_38902__$1];
var inst_38905 = (new cljs.core.PersistentVector(null,2,(5),inst_38903,inst_38904,null));
var state_38916__$1 = (function (){var statearr_38927 = state_38916;
(statearr_38927[(8)] = inst_38902__$1);

return statearr_38927;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38916__$1,(8),jobs,inst_38905);
} else {
if((state_val_38918 === (7))){
var inst_38912 = (state_38916[(2)]);
var state_38916__$1 = state_38916;
var statearr_38928_39040 = state_38916__$1;
(statearr_38928_39040[(2)] = inst_38912);

(statearr_38928_39040[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38918 === (8))){
var inst_38902 = (state_38916[(8)]);
var inst_38907 = (state_38916[(2)]);
var state_38916__$1 = (function (){var statearr_38929 = state_38916;
(statearr_38929[(9)] = inst_38907);

return statearr_38929;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38916__$1,(9),results,inst_38902);
} else {
if((state_val_38918 === (9))){
var inst_38909 = (state_38916[(2)]);
var state_38916__$1 = (function (){var statearr_38930 = state_38916;
(statearr_38930[(10)] = inst_38909);

return statearr_38930;
})();
var statearr_38931_39041 = state_38916__$1;
(statearr_38931_39041[(2)] = null);

(statearr_38931_39041[(1)] = (2));


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
});})(c__38071__auto___39035,jobs,results,process,async))
;
return ((function (switch__37506__auto__,c__38071__auto___39035,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0 = (function (){
var statearr_38935 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38935[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__);

(statearr_38935[(1)] = (1));

return statearr_38935;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1 = (function (state_38916){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_38916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e38936){if((e38936 instanceof Object)){
var ex__37511__auto__ = e38936;
var statearr_38937_39042 = state_38916;
(statearr_38937_39042[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39043 = state_38916;
state_38916 = G__39043;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = function(state_38916){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1.call(this,state_38916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___39035,jobs,results,process,async))
})();
var state__38073__auto__ = (function (){var statearr_38938 = f__38072__auto__.call(null);
(statearr_38938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___39035);

return statearr_38938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___39035,jobs,results,process,async))
);


var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__,jobs,results,process,async){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__,jobs,results,process,async){
return (function (state_38976){
var state_val_38977 = (state_38976[(1)]);
if((state_val_38977 === (7))){
var inst_38972 = (state_38976[(2)]);
var state_38976__$1 = state_38976;
var statearr_38978_39044 = state_38976__$1;
(statearr_38978_39044[(2)] = inst_38972);

(statearr_38978_39044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (20))){
var state_38976__$1 = state_38976;
var statearr_38979_39045 = state_38976__$1;
(statearr_38979_39045[(2)] = null);

(statearr_38979_39045[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (1))){
var state_38976__$1 = state_38976;
var statearr_38980_39046 = state_38976__$1;
(statearr_38980_39046[(2)] = null);

(statearr_38980_39046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (4))){
var inst_38941 = (state_38976[(7)]);
var inst_38941__$1 = (state_38976[(2)]);
var inst_38942 = (inst_38941__$1 == null);
var state_38976__$1 = (function (){var statearr_38981 = state_38976;
(statearr_38981[(7)] = inst_38941__$1);

return statearr_38981;
})();
if(cljs.core.truth_(inst_38942)){
var statearr_38982_39047 = state_38976__$1;
(statearr_38982_39047[(1)] = (5));

} else {
var statearr_38983_39048 = state_38976__$1;
(statearr_38983_39048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (15))){
var inst_38954 = (state_38976[(8)]);
var state_38976__$1 = state_38976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38976__$1,(18),to,inst_38954);
} else {
if((state_val_38977 === (21))){
var inst_38967 = (state_38976[(2)]);
var state_38976__$1 = state_38976;
var statearr_38984_39049 = state_38976__$1;
(statearr_38984_39049[(2)] = inst_38967);

(statearr_38984_39049[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (13))){
var inst_38969 = (state_38976[(2)]);
var state_38976__$1 = (function (){var statearr_38985 = state_38976;
(statearr_38985[(9)] = inst_38969);

return statearr_38985;
})();
var statearr_38986_39050 = state_38976__$1;
(statearr_38986_39050[(2)] = null);

(statearr_38986_39050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (6))){
var inst_38941 = (state_38976[(7)]);
var state_38976__$1 = state_38976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38976__$1,(11),inst_38941);
} else {
if((state_val_38977 === (17))){
var inst_38962 = (state_38976[(2)]);
var state_38976__$1 = state_38976;
if(cljs.core.truth_(inst_38962)){
var statearr_38987_39051 = state_38976__$1;
(statearr_38987_39051[(1)] = (19));

} else {
var statearr_38988_39052 = state_38976__$1;
(statearr_38988_39052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (3))){
var inst_38974 = (state_38976[(2)]);
var state_38976__$1 = state_38976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38976__$1,inst_38974);
} else {
if((state_val_38977 === (12))){
var inst_38951 = (state_38976[(10)]);
var state_38976__$1 = state_38976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38976__$1,(14),inst_38951);
} else {
if((state_val_38977 === (2))){
var state_38976__$1 = state_38976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38976__$1,(4),results);
} else {
if((state_val_38977 === (19))){
var state_38976__$1 = state_38976;
var statearr_38989_39053 = state_38976__$1;
(statearr_38989_39053[(2)] = null);

(statearr_38989_39053[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (11))){
var inst_38951 = (state_38976[(2)]);
var state_38976__$1 = (function (){var statearr_38990 = state_38976;
(statearr_38990[(10)] = inst_38951);

return statearr_38990;
})();
var statearr_38991_39054 = state_38976__$1;
(statearr_38991_39054[(2)] = null);

(statearr_38991_39054[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (9))){
var state_38976__$1 = state_38976;
var statearr_38992_39055 = state_38976__$1;
(statearr_38992_39055[(2)] = null);

(statearr_38992_39055[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (5))){
var state_38976__$1 = state_38976;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38993_39056 = state_38976__$1;
(statearr_38993_39056[(1)] = (8));

} else {
var statearr_38994_39057 = state_38976__$1;
(statearr_38994_39057[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (14))){
var inst_38954 = (state_38976[(8)]);
var inst_38956 = (state_38976[(11)]);
var inst_38954__$1 = (state_38976[(2)]);
var inst_38955 = (inst_38954__$1 == null);
var inst_38956__$1 = cljs.core.not.call(null,inst_38955);
var state_38976__$1 = (function (){var statearr_38995 = state_38976;
(statearr_38995[(8)] = inst_38954__$1);

(statearr_38995[(11)] = inst_38956__$1);

return statearr_38995;
})();
if(inst_38956__$1){
var statearr_38996_39058 = state_38976__$1;
(statearr_38996_39058[(1)] = (15));

} else {
var statearr_38997_39059 = state_38976__$1;
(statearr_38997_39059[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (16))){
var inst_38956 = (state_38976[(11)]);
var state_38976__$1 = state_38976;
var statearr_38998_39060 = state_38976__$1;
(statearr_38998_39060[(2)] = inst_38956);

(statearr_38998_39060[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (10))){
var inst_38948 = (state_38976[(2)]);
var state_38976__$1 = state_38976;
var statearr_38999_39061 = state_38976__$1;
(statearr_38999_39061[(2)] = inst_38948);

(statearr_38999_39061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (18))){
var inst_38959 = (state_38976[(2)]);
var state_38976__$1 = state_38976;
var statearr_39000_39062 = state_38976__$1;
(statearr_39000_39062[(2)] = inst_38959);

(statearr_39000_39062[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38977 === (8))){
var inst_38945 = cljs.core.async.close_BANG_.call(null,to);
var state_38976__$1 = state_38976;
var statearr_39001_39063 = state_38976__$1;
(statearr_39001_39063[(2)] = inst_38945);

(statearr_39001_39063[(1)] = (10));


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
});})(c__38071__auto__,jobs,results,process,async))
;
return ((function (switch__37506__auto__,c__38071__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0 = (function (){
var statearr_39005 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39005[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__);

(statearr_39005[(1)] = (1));

return statearr_39005;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1 = (function (state_38976){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_38976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e39006){if((e39006 instanceof Object)){
var ex__37511__auto__ = e39006;
var statearr_39007_39067 = state_38976;
(statearr_39007_39067[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39073 = state_38976;
state_38976 = G__39073;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__ = function(state_38976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1.call(this,state_38976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37508__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__,jobs,results,process,async))
})();
var state__38073__auto__ = (function (){var statearr_39008 = f__38072__auto__.call(null);
(statearr_39008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_39008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__,jobs,results,process,async))
);

return c__38071__auto__;
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
var args39074 = [];
var len__19784__auto___39077 = arguments.length;
var i__19785__auto___39078 = (0);
while(true){
if((i__19785__auto___39078 < len__19784__auto___39077)){
args39074.push((arguments[i__19785__auto___39078]));

var G__39079 = (i__19785__auto___39078 + (1));
i__19785__auto___39078 = G__39079;
continue;
} else {
}
break;
}

var G__39076 = args39074.length;
switch (G__39076) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39074.length)].join('')));

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
var args39092 = [];
var len__19784__auto___39097 = arguments.length;
var i__19785__auto___39098 = (0);
while(true){
if((i__19785__auto___39098 < len__19784__auto___39097)){
args39092.push((arguments[i__19785__auto___39098]));

var G__39099 = (i__19785__auto___39098 + (1));
i__19785__auto___39098 = G__39099;
continue;
} else {
}
break;
}

var G__39096 = args39092.length;
switch (G__39096) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39092.length)].join('')));

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
var args39106 = [];
var len__19784__auto___39175 = arguments.length;
var i__19785__auto___39176 = (0);
while(true){
if((i__19785__auto___39176 < len__19784__auto___39175)){
args39106.push((arguments[i__19785__auto___39176]));

var G__39177 = (i__19785__auto___39176 + (1));
i__19785__auto___39176 = G__39177;
continue;
} else {
}
break;
}

var G__39108 = args39106.length;
switch (G__39108) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39106.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38071__auto___39179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___39179,tc,fc){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___39179,tc,fc){
return (function (state_39141){
var state_val_39142 = (state_39141[(1)]);
if((state_val_39142 === (7))){
var inst_39137 = (state_39141[(2)]);
var state_39141__$1 = state_39141;
var statearr_39143_39180 = state_39141__$1;
(statearr_39143_39180[(2)] = inst_39137);

(statearr_39143_39180[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (1))){
var state_39141__$1 = state_39141;
var statearr_39144_39181 = state_39141__$1;
(statearr_39144_39181[(2)] = null);

(statearr_39144_39181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (4))){
var inst_39113 = (state_39141[(7)]);
var inst_39113__$1 = (state_39141[(2)]);
var inst_39116 = (inst_39113__$1 == null);
var state_39141__$1 = (function (){var statearr_39146 = state_39141;
(statearr_39146[(7)] = inst_39113__$1);

return statearr_39146;
})();
if(cljs.core.truth_(inst_39116)){
var statearr_39147_39184 = state_39141__$1;
(statearr_39147_39184[(1)] = (5));

} else {
var statearr_39148_39185 = state_39141__$1;
(statearr_39148_39185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (13))){
var state_39141__$1 = state_39141;
var statearr_39149_39188 = state_39141__$1;
(statearr_39149_39188[(2)] = null);

(statearr_39149_39188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (6))){
var inst_39113 = (state_39141[(7)]);
var inst_39123 = p.call(null,inst_39113);
var state_39141__$1 = state_39141;
if(cljs.core.truth_(inst_39123)){
var statearr_39150_39190 = state_39141__$1;
(statearr_39150_39190[(1)] = (9));

} else {
var statearr_39151_39192 = state_39141__$1;
(statearr_39151_39192[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (3))){
var inst_39139 = (state_39141[(2)]);
var state_39141__$1 = state_39141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39141__$1,inst_39139);
} else {
if((state_val_39142 === (12))){
var state_39141__$1 = state_39141;
var statearr_39152_39193 = state_39141__$1;
(statearr_39152_39193[(2)] = null);

(statearr_39152_39193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (2))){
var state_39141__$1 = state_39141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39141__$1,(4),ch);
} else {
if((state_val_39142 === (11))){
var inst_39113 = (state_39141[(7)]);
var inst_39127 = (state_39141[(2)]);
var state_39141__$1 = state_39141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39141__$1,(8),inst_39127,inst_39113);
} else {
if((state_val_39142 === (9))){
var state_39141__$1 = state_39141;
var statearr_39153_39194 = state_39141__$1;
(statearr_39153_39194[(2)] = tc);

(statearr_39153_39194[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (5))){
var inst_39118 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39119 = cljs.core.async.close_BANG_.call(null,fc);
var state_39141__$1 = (function (){var statearr_39154 = state_39141;
(statearr_39154[(8)] = inst_39118);

return statearr_39154;
})();
var statearr_39155_39201 = state_39141__$1;
(statearr_39155_39201[(2)] = inst_39119);

(statearr_39155_39201[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (14))){
var inst_39135 = (state_39141[(2)]);
var state_39141__$1 = state_39141;
var statearr_39156_39206 = state_39141__$1;
(statearr_39156_39206[(2)] = inst_39135);

(statearr_39156_39206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (10))){
var state_39141__$1 = state_39141;
var statearr_39157_39208 = state_39141__$1;
(statearr_39157_39208[(2)] = fc);

(statearr_39157_39208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39142 === (8))){
var inst_39129 = (state_39141[(2)]);
var state_39141__$1 = state_39141;
if(cljs.core.truth_(inst_39129)){
var statearr_39158_39210 = state_39141__$1;
(statearr_39158_39210[(1)] = (12));

} else {
var statearr_39159_39213 = state_39141__$1;
(statearr_39159_39213[(1)] = (13));

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
});})(c__38071__auto___39179,tc,fc))
;
return ((function (switch__37506__auto__,c__38071__auto___39179,tc,fc){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_39164 = [null,null,null,null,null,null,null,null,null];
(statearr_39164[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_39164[(1)] = (1));

return statearr_39164;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_39141){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_39141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e39165){if((e39165 instanceof Object)){
var ex__37511__auto__ = e39165;
var statearr_39166_39216 = state_39141;
(statearr_39166_39216[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39217 = state_39141;
state_39141 = G__39217;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_39141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_39141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___39179,tc,fc))
})();
var state__38073__auto__ = (function (){var statearr_39173 = f__38072__auto__.call(null);
(statearr_39173[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___39179);

return statearr_39173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___39179,tc,fc))
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
var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__){
return (function (state_39329){
var state_val_39330 = (state_39329[(1)]);
if((state_val_39330 === (7))){
var inst_39321 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39336_39404 = state_39329__$1;
(statearr_39336_39404[(2)] = inst_39321);

(statearr_39336_39404[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (1))){
var inst_39288 = init;
var state_39329__$1 = (function (){var statearr_39337 = state_39329;
(statearr_39337[(7)] = inst_39288);

return statearr_39337;
})();
var statearr_39342_39405 = state_39329__$1;
(statearr_39342_39405[(2)] = null);

(statearr_39342_39405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (4))){
var inst_39298 = (state_39329[(8)]);
var inst_39298__$1 = (state_39329[(2)]);
var inst_39303 = (inst_39298__$1 == null);
var state_39329__$1 = (function (){var statearr_39343 = state_39329;
(statearr_39343[(8)] = inst_39298__$1);

return statearr_39343;
})();
if(cljs.core.truth_(inst_39303)){
var statearr_39344_39414 = state_39329__$1;
(statearr_39344_39414[(1)] = (5));

} else {
var statearr_39345_39419 = state_39329__$1;
(statearr_39345_39419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (6))){
var inst_39312 = (state_39329[(9)]);
var inst_39288 = (state_39329[(7)]);
var inst_39298 = (state_39329[(8)]);
var inst_39312__$1 = f.call(null,inst_39288,inst_39298);
var inst_39313 = cljs.core.reduced_QMARK_.call(null,inst_39312__$1);
var state_39329__$1 = (function (){var statearr_39347 = state_39329;
(statearr_39347[(9)] = inst_39312__$1);

return statearr_39347;
})();
if(inst_39313){
var statearr_39348_39424 = state_39329__$1;
(statearr_39348_39424[(1)] = (8));

} else {
var statearr_39350_39425 = state_39329__$1;
(statearr_39350_39425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (3))){
var inst_39323 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39329__$1,inst_39323);
} else {
if((state_val_39330 === (2))){
var state_39329__$1 = state_39329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39329__$1,(4),ch);
} else {
if((state_val_39330 === (9))){
var inst_39312 = (state_39329[(9)]);
var inst_39288 = inst_39312;
var state_39329__$1 = (function (){var statearr_39374 = state_39329;
(statearr_39374[(7)] = inst_39288);

return statearr_39374;
})();
var statearr_39375_39432 = state_39329__$1;
(statearr_39375_39432[(2)] = null);

(statearr_39375_39432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (5))){
var inst_39288 = (state_39329[(7)]);
var state_39329__$1 = state_39329;
var statearr_39376_39437 = state_39329__$1;
(statearr_39376_39437[(2)] = inst_39288);

(statearr_39376_39437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (10))){
var inst_39319 = (state_39329[(2)]);
var state_39329__$1 = state_39329;
var statearr_39378_39438 = state_39329__$1;
(statearr_39378_39438[(2)] = inst_39319);

(statearr_39378_39438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39330 === (8))){
var inst_39312 = (state_39329[(9)]);
var inst_39315 = cljs.core.deref.call(null,inst_39312);
var state_39329__$1 = state_39329;
var statearr_39379_39442 = state_39329__$1;
(statearr_39379_39442[(2)] = inst_39315);

(statearr_39379_39442[(1)] = (10));


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
});})(c__38071__auto__))
;
return ((function (switch__37506__auto__,c__38071__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37508__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37508__auto____0 = (function (){
var statearr_39384 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39384[(0)] = cljs$core$async$reduce_$_state_machine__37508__auto__);

(statearr_39384[(1)] = (1));

return statearr_39384;
});
var cljs$core$async$reduce_$_state_machine__37508__auto____1 = (function (state_39329){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_39329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e39385){if((e39385 instanceof Object)){
var ex__37511__auto__ = e39385;
var statearr_39386_39446 = state_39329;
(statearr_39386_39446[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39447 = state_39329;
state_39329 = G__39447;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37508__auto__ = function(state_39329){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37508__auto____1.call(this,state_39329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37508__auto____0;
cljs$core$async$reduce_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37508__auto____1;
return cljs$core$async$reduce_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__))
})();
var state__38073__auto__ = (function (){var statearr_39387 = f__38072__auto__.call(null);
(statearr_39387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_39387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__))
);

return c__38071__auto__;
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
var args39448 = [];
var len__19784__auto___39544 = arguments.length;
var i__19785__auto___39545 = (0);
while(true){
if((i__19785__auto___39545 < len__19784__auto___39544)){
args39448.push((arguments[i__19785__auto___39545]));

var G__39546 = (i__19785__auto___39545 + (1));
i__19785__auto___39545 = G__39546;
continue;
} else {
}
break;
}

var G__39462 = args39448.length;
switch (G__39462) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39448.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__){
return (function (state_39491){
var state_val_39492 = (state_39491[(1)]);
if((state_val_39492 === (7))){
var inst_39469 = (state_39491[(2)]);
var state_39491__$1 = state_39491;
var statearr_39494_39560 = state_39491__$1;
(statearr_39494_39560[(2)] = inst_39469);

(statearr_39494_39560[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (1))){
var inst_39463 = cljs.core.seq.call(null,coll);
var inst_39464 = inst_39463;
var state_39491__$1 = (function (){var statearr_39495 = state_39491;
(statearr_39495[(7)] = inst_39464);

return statearr_39495;
})();
var statearr_39504_39566 = state_39491__$1;
(statearr_39504_39566[(2)] = null);

(statearr_39504_39566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (4))){
var inst_39464 = (state_39491[(7)]);
var inst_39467 = cljs.core.first.call(null,inst_39464);
var state_39491__$1 = state_39491;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39491__$1,(7),ch,inst_39467);
} else {
if((state_val_39492 === (13))){
var inst_39481 = (state_39491[(2)]);
var state_39491__$1 = state_39491;
var statearr_39506_39569 = state_39491__$1;
(statearr_39506_39569[(2)] = inst_39481);

(statearr_39506_39569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (6))){
var inst_39472 = (state_39491[(2)]);
var state_39491__$1 = state_39491;
if(cljs.core.truth_(inst_39472)){
var statearr_39507_39570 = state_39491__$1;
(statearr_39507_39570[(1)] = (8));

} else {
var statearr_39508_39571 = state_39491__$1;
(statearr_39508_39571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (3))){
var inst_39485 = (state_39491[(2)]);
var state_39491__$1 = state_39491;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39491__$1,inst_39485);
} else {
if((state_val_39492 === (12))){
var state_39491__$1 = state_39491;
var statearr_39509_39572 = state_39491__$1;
(statearr_39509_39572[(2)] = null);

(statearr_39509_39572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (2))){
var inst_39464 = (state_39491[(7)]);
var state_39491__$1 = state_39491;
if(cljs.core.truth_(inst_39464)){
var statearr_39510_39573 = state_39491__$1;
(statearr_39510_39573[(1)] = (4));

} else {
var statearr_39511_39574 = state_39491__$1;
(statearr_39511_39574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (11))){
var inst_39478 = cljs.core.async.close_BANG_.call(null,ch);
var state_39491__$1 = state_39491;
var statearr_39512_39575 = state_39491__$1;
(statearr_39512_39575[(2)] = inst_39478);

(statearr_39512_39575[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (9))){
var state_39491__$1 = state_39491;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39513_39576 = state_39491__$1;
(statearr_39513_39576[(1)] = (11));

} else {
var statearr_39514_39577 = state_39491__$1;
(statearr_39514_39577[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (5))){
var inst_39464 = (state_39491[(7)]);
var state_39491__$1 = state_39491;
var statearr_39515_39578 = state_39491__$1;
(statearr_39515_39578[(2)] = inst_39464);

(statearr_39515_39578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (10))){
var inst_39483 = (state_39491[(2)]);
var state_39491__$1 = state_39491;
var statearr_39516_39579 = state_39491__$1;
(statearr_39516_39579[(2)] = inst_39483);

(statearr_39516_39579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39492 === (8))){
var inst_39464 = (state_39491[(7)]);
var inst_39474 = cljs.core.next.call(null,inst_39464);
var inst_39464__$1 = inst_39474;
var state_39491__$1 = (function (){var statearr_39521 = state_39491;
(statearr_39521[(7)] = inst_39464__$1);

return statearr_39521;
})();
var statearr_39522_39580 = state_39491__$1;
(statearr_39522_39580[(2)] = null);

(statearr_39522_39580[(1)] = (2));


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
});})(c__38071__auto__))
;
return ((function (switch__37506__auto__,c__38071__auto__){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_39526 = [null,null,null,null,null,null,null,null];
(statearr_39526[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_39526[(1)] = (1));

return statearr_39526;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_39491){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_39491);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e39536){if((e39536 instanceof Object)){
var ex__37511__auto__ = e39536;
var statearr_39540_39583 = state_39491;
(statearr_39540_39583[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39491);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39584 = state_39491;
state_39491 = G__39584;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_39491){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_39491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__))
})();
var state__38073__auto__ = (function (){var statearr_39542 = f__38072__auto__.call(null);
(statearr_39542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_39542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__))
);

return c__38071__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async39846 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39846 = (function (mult,ch,cs,meta39847){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta39847 = meta39847;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39848,meta39847__$1){
var self__ = this;
var _39848__$1 = this;
return (new cljs.core.async.t_cljs$core$async39846(self__.mult,self__.ch,self__.cs,meta39847__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39848){
var self__ = this;
var _39848__$1 = this;
return self__.meta39847;
});})(cs))
;

cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39846.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39846.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39847","meta39847",-726396071,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39846.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39846.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39846";

cljs.core.async.t_cljs$core$async39846.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async39846");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async39846 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39846(mult__$1,ch__$1,cs__$1,meta39847){
return (new cljs.core.async.t_cljs$core$async39846(mult__$1,ch__$1,cs__$1,meta39847));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39846(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38071__auto___40077 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___40077,cs,m,dchan,dctr,done){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___40077,cs,m,dchan,dctr,done){
return (function (state_39979){
var state_val_39980 = (state_39979[(1)]);
if((state_val_39980 === (7))){
var inst_39975 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_39981_40082 = state_39979__$1;
(statearr_39981_40082[(2)] = inst_39975);

(statearr_39981_40082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (20))){
var inst_39880 = (state_39979[(7)]);
var inst_39890 = cljs.core.first.call(null,inst_39880);
var inst_39891 = cljs.core.nth.call(null,inst_39890,(0),null);
var inst_39892 = cljs.core.nth.call(null,inst_39890,(1),null);
var state_39979__$1 = (function (){var statearr_39982 = state_39979;
(statearr_39982[(8)] = inst_39891);

return statearr_39982;
})();
if(cljs.core.truth_(inst_39892)){
var statearr_39983_40083 = state_39979__$1;
(statearr_39983_40083[(1)] = (22));

} else {
var statearr_39984_40084 = state_39979__$1;
(statearr_39984_40084[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (27))){
var inst_39920 = (state_39979[(9)]);
var inst_39922 = (state_39979[(10)]);
var inst_39927 = (state_39979[(11)]);
var inst_39851 = (state_39979[(12)]);
var inst_39927__$1 = cljs.core._nth.call(null,inst_39920,inst_39922);
var inst_39928 = cljs.core.async.put_BANG_.call(null,inst_39927__$1,inst_39851,done);
var state_39979__$1 = (function (){var statearr_39985 = state_39979;
(statearr_39985[(11)] = inst_39927__$1);

return statearr_39985;
})();
if(cljs.core.truth_(inst_39928)){
var statearr_39986_40086 = state_39979__$1;
(statearr_39986_40086[(1)] = (30));

} else {
var statearr_39987_40087 = state_39979__$1;
(statearr_39987_40087[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (1))){
var state_39979__$1 = state_39979;
var statearr_39988_40088 = state_39979__$1;
(statearr_39988_40088[(2)] = null);

(statearr_39988_40088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (24))){
var inst_39880 = (state_39979[(7)]);
var inst_39897 = (state_39979[(2)]);
var inst_39898 = cljs.core.next.call(null,inst_39880);
var inst_39860 = inst_39898;
var inst_39861 = null;
var inst_39862 = (0);
var inst_39863 = (0);
var state_39979__$1 = (function (){var statearr_39989 = state_39979;
(statearr_39989[(13)] = inst_39897);

(statearr_39989[(14)] = inst_39860);

(statearr_39989[(15)] = inst_39863);

(statearr_39989[(16)] = inst_39862);

(statearr_39989[(17)] = inst_39861);

return statearr_39989;
})();
var statearr_39990_40089 = state_39979__$1;
(statearr_39990_40089[(2)] = null);

(statearr_39990_40089[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (39))){
var state_39979__$1 = state_39979;
var statearr_39994_40090 = state_39979__$1;
(statearr_39994_40090[(2)] = null);

(statearr_39994_40090[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (4))){
var inst_39851 = (state_39979[(12)]);
var inst_39851__$1 = (state_39979[(2)]);
var inst_39852 = (inst_39851__$1 == null);
var state_39979__$1 = (function (){var statearr_39995 = state_39979;
(statearr_39995[(12)] = inst_39851__$1);

return statearr_39995;
})();
if(cljs.core.truth_(inst_39852)){
var statearr_39996_40091 = state_39979__$1;
(statearr_39996_40091[(1)] = (5));

} else {
var statearr_39997_40092 = state_39979__$1;
(statearr_39997_40092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (15))){
var inst_39860 = (state_39979[(14)]);
var inst_39863 = (state_39979[(15)]);
var inst_39862 = (state_39979[(16)]);
var inst_39861 = (state_39979[(17)]);
var inst_39876 = (state_39979[(2)]);
var inst_39877 = (inst_39863 + (1));
var tmp39991 = inst_39860;
var tmp39992 = inst_39862;
var tmp39993 = inst_39861;
var inst_39860__$1 = tmp39991;
var inst_39861__$1 = tmp39993;
var inst_39862__$1 = tmp39992;
var inst_39863__$1 = inst_39877;
var state_39979__$1 = (function (){var statearr_39998 = state_39979;
(statearr_39998[(14)] = inst_39860__$1);

(statearr_39998[(15)] = inst_39863__$1);

(statearr_39998[(18)] = inst_39876);

(statearr_39998[(16)] = inst_39862__$1);

(statearr_39998[(17)] = inst_39861__$1);

return statearr_39998;
})();
var statearr_39999_40094 = state_39979__$1;
(statearr_39999_40094[(2)] = null);

(statearr_39999_40094[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (21))){
var inst_39901 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40003_40095 = state_39979__$1;
(statearr_40003_40095[(2)] = inst_39901);

(statearr_40003_40095[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (31))){
var inst_39927 = (state_39979[(11)]);
var inst_39931 = done.call(null,null);
var inst_39932 = cljs.core.async.untap_STAR_.call(null,m,inst_39927);
var state_39979__$1 = (function (){var statearr_40004 = state_39979;
(statearr_40004[(19)] = inst_39931);

return statearr_40004;
})();
var statearr_40005_40097 = state_39979__$1;
(statearr_40005_40097[(2)] = inst_39932);

(statearr_40005_40097[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (32))){
var inst_39920 = (state_39979[(9)]);
var inst_39922 = (state_39979[(10)]);
var inst_39921 = (state_39979[(20)]);
var inst_39919 = (state_39979[(21)]);
var inst_39934 = (state_39979[(2)]);
var inst_39935 = (inst_39922 + (1));
var tmp40000 = inst_39920;
var tmp40001 = inst_39921;
var tmp40002 = inst_39919;
var inst_39919__$1 = tmp40002;
var inst_39920__$1 = tmp40000;
var inst_39921__$1 = tmp40001;
var inst_39922__$1 = inst_39935;
var state_39979__$1 = (function (){var statearr_40006 = state_39979;
(statearr_40006[(9)] = inst_39920__$1);

(statearr_40006[(22)] = inst_39934);

(statearr_40006[(10)] = inst_39922__$1);

(statearr_40006[(20)] = inst_39921__$1);

(statearr_40006[(21)] = inst_39919__$1);

return statearr_40006;
})();
var statearr_40007_40098 = state_39979__$1;
(statearr_40007_40098[(2)] = null);

(statearr_40007_40098[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (40))){
var inst_39947 = (state_39979[(23)]);
var inst_39951 = done.call(null,null);
var inst_39952 = cljs.core.async.untap_STAR_.call(null,m,inst_39947);
var state_39979__$1 = (function (){var statearr_40008 = state_39979;
(statearr_40008[(24)] = inst_39951);

return statearr_40008;
})();
var statearr_40009_40099 = state_39979__$1;
(statearr_40009_40099[(2)] = inst_39952);

(statearr_40009_40099[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (33))){
var inst_39938 = (state_39979[(25)]);
var inst_39940 = cljs.core.chunked_seq_QMARK_.call(null,inst_39938);
var state_39979__$1 = state_39979;
if(inst_39940){
var statearr_40010_40100 = state_39979__$1;
(statearr_40010_40100[(1)] = (36));

} else {
var statearr_40011_40101 = state_39979__$1;
(statearr_40011_40101[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (13))){
var inst_39870 = (state_39979[(26)]);
var inst_39873 = cljs.core.async.close_BANG_.call(null,inst_39870);
var state_39979__$1 = state_39979;
var statearr_40012_40102 = state_39979__$1;
(statearr_40012_40102[(2)] = inst_39873);

(statearr_40012_40102[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (22))){
var inst_39891 = (state_39979[(8)]);
var inst_39894 = cljs.core.async.close_BANG_.call(null,inst_39891);
var state_39979__$1 = state_39979;
var statearr_40013_40103 = state_39979__$1;
(statearr_40013_40103[(2)] = inst_39894);

(statearr_40013_40103[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (36))){
var inst_39938 = (state_39979[(25)]);
var inst_39942 = cljs.core.chunk_first.call(null,inst_39938);
var inst_39943 = cljs.core.chunk_rest.call(null,inst_39938);
var inst_39944 = cljs.core.count.call(null,inst_39942);
var inst_39919 = inst_39943;
var inst_39920 = inst_39942;
var inst_39921 = inst_39944;
var inst_39922 = (0);
var state_39979__$1 = (function (){var statearr_40015 = state_39979;
(statearr_40015[(9)] = inst_39920);

(statearr_40015[(10)] = inst_39922);

(statearr_40015[(20)] = inst_39921);

(statearr_40015[(21)] = inst_39919);

return statearr_40015;
})();
var statearr_40016_40104 = state_39979__$1;
(statearr_40016_40104[(2)] = null);

(statearr_40016_40104[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (41))){
var inst_39938 = (state_39979[(25)]);
var inst_39954 = (state_39979[(2)]);
var inst_39955 = cljs.core.next.call(null,inst_39938);
var inst_39919 = inst_39955;
var inst_39920 = null;
var inst_39921 = (0);
var inst_39922 = (0);
var state_39979__$1 = (function (){var statearr_40017 = state_39979;
(statearr_40017[(9)] = inst_39920);

(statearr_40017[(10)] = inst_39922);

(statearr_40017[(20)] = inst_39921);

(statearr_40017[(21)] = inst_39919);

(statearr_40017[(27)] = inst_39954);

return statearr_40017;
})();
var statearr_40019_40105 = state_39979__$1;
(statearr_40019_40105[(2)] = null);

(statearr_40019_40105[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (43))){
var state_39979__$1 = state_39979;
var statearr_40020_40107 = state_39979__$1;
(statearr_40020_40107[(2)] = null);

(statearr_40020_40107[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (29))){
var inst_39963 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40021_40108 = state_39979__$1;
(statearr_40021_40108[(2)] = inst_39963);

(statearr_40021_40108[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (44))){
var inst_39972 = (state_39979[(2)]);
var state_39979__$1 = (function (){var statearr_40022 = state_39979;
(statearr_40022[(28)] = inst_39972);

return statearr_40022;
})();
var statearr_40023_40110 = state_39979__$1;
(statearr_40023_40110[(2)] = null);

(statearr_40023_40110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (6))){
var inst_39911 = (state_39979[(29)]);
var inst_39910 = cljs.core.deref.call(null,cs);
var inst_39911__$1 = cljs.core.keys.call(null,inst_39910);
var inst_39912 = cljs.core.count.call(null,inst_39911__$1);
var inst_39913 = cljs.core.reset_BANG_.call(null,dctr,inst_39912);
var inst_39918 = cljs.core.seq.call(null,inst_39911__$1);
var inst_39919 = inst_39918;
var inst_39920 = null;
var inst_39921 = (0);
var inst_39922 = (0);
var state_39979__$1 = (function (){var statearr_40024 = state_39979;
(statearr_40024[(30)] = inst_39913);

(statearr_40024[(9)] = inst_39920);

(statearr_40024[(10)] = inst_39922);

(statearr_40024[(29)] = inst_39911__$1);

(statearr_40024[(20)] = inst_39921);

(statearr_40024[(21)] = inst_39919);

return statearr_40024;
})();
var statearr_40025_40111 = state_39979__$1;
(statearr_40025_40111[(2)] = null);

(statearr_40025_40111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (28))){
var inst_39938 = (state_39979[(25)]);
var inst_39919 = (state_39979[(21)]);
var inst_39938__$1 = cljs.core.seq.call(null,inst_39919);
var state_39979__$1 = (function (){var statearr_40026 = state_39979;
(statearr_40026[(25)] = inst_39938__$1);

return statearr_40026;
})();
if(inst_39938__$1){
var statearr_40027_40112 = state_39979__$1;
(statearr_40027_40112[(1)] = (33));

} else {
var statearr_40028_40113 = state_39979__$1;
(statearr_40028_40113[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (25))){
var inst_39922 = (state_39979[(10)]);
var inst_39921 = (state_39979[(20)]);
var inst_39924 = (inst_39922 < inst_39921);
var inst_39925 = inst_39924;
var state_39979__$1 = state_39979;
if(cljs.core.truth_(inst_39925)){
var statearr_40029_40124 = state_39979__$1;
(statearr_40029_40124[(1)] = (27));

} else {
var statearr_40030_40126 = state_39979__$1;
(statearr_40030_40126[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (34))){
var state_39979__$1 = state_39979;
var statearr_40031_40128 = state_39979__$1;
(statearr_40031_40128[(2)] = null);

(statearr_40031_40128[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (17))){
var state_39979__$1 = state_39979;
var statearr_40032_40133 = state_39979__$1;
(statearr_40032_40133[(2)] = null);

(statearr_40032_40133[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (3))){
var inst_39977 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39979__$1,inst_39977);
} else {
if((state_val_39980 === (12))){
var inst_39906 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40033_40141 = state_39979__$1;
(statearr_40033_40141[(2)] = inst_39906);

(statearr_40033_40141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (2))){
var state_39979__$1 = state_39979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39979__$1,(4),ch);
} else {
if((state_val_39980 === (23))){
var state_39979__$1 = state_39979;
var statearr_40034_40147 = state_39979__$1;
(statearr_40034_40147[(2)] = null);

(statearr_40034_40147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (35))){
var inst_39961 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40035_40149 = state_39979__$1;
(statearr_40035_40149[(2)] = inst_39961);

(statearr_40035_40149[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (19))){
var inst_39880 = (state_39979[(7)]);
var inst_39884 = cljs.core.chunk_first.call(null,inst_39880);
var inst_39885 = cljs.core.chunk_rest.call(null,inst_39880);
var inst_39886 = cljs.core.count.call(null,inst_39884);
var inst_39860 = inst_39885;
var inst_39861 = inst_39884;
var inst_39862 = inst_39886;
var inst_39863 = (0);
var state_39979__$1 = (function (){var statearr_40036 = state_39979;
(statearr_40036[(14)] = inst_39860);

(statearr_40036[(15)] = inst_39863);

(statearr_40036[(16)] = inst_39862);

(statearr_40036[(17)] = inst_39861);

return statearr_40036;
})();
var statearr_40037_40166 = state_39979__$1;
(statearr_40037_40166[(2)] = null);

(statearr_40037_40166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (11))){
var inst_39860 = (state_39979[(14)]);
var inst_39880 = (state_39979[(7)]);
var inst_39880__$1 = cljs.core.seq.call(null,inst_39860);
var state_39979__$1 = (function (){var statearr_40038 = state_39979;
(statearr_40038[(7)] = inst_39880__$1);

return statearr_40038;
})();
if(inst_39880__$1){
var statearr_40039_40174 = state_39979__$1;
(statearr_40039_40174[(1)] = (16));

} else {
var statearr_40040_40175 = state_39979__$1;
(statearr_40040_40175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (9))){
var inst_39908 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40041_40180 = state_39979__$1;
(statearr_40041_40180[(2)] = inst_39908);

(statearr_40041_40180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (5))){
var inst_39858 = cljs.core.deref.call(null,cs);
var inst_39859 = cljs.core.seq.call(null,inst_39858);
var inst_39860 = inst_39859;
var inst_39861 = null;
var inst_39862 = (0);
var inst_39863 = (0);
var state_39979__$1 = (function (){var statearr_40042 = state_39979;
(statearr_40042[(14)] = inst_39860);

(statearr_40042[(15)] = inst_39863);

(statearr_40042[(16)] = inst_39862);

(statearr_40042[(17)] = inst_39861);

return statearr_40042;
})();
var statearr_40043_40191 = state_39979__$1;
(statearr_40043_40191[(2)] = null);

(statearr_40043_40191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (14))){
var state_39979__$1 = state_39979;
var statearr_40044_40192 = state_39979__$1;
(statearr_40044_40192[(2)] = null);

(statearr_40044_40192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (45))){
var inst_39969 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40045_40197 = state_39979__$1;
(statearr_40045_40197[(2)] = inst_39969);

(statearr_40045_40197[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (26))){
var inst_39911 = (state_39979[(29)]);
var inst_39965 = (state_39979[(2)]);
var inst_39966 = cljs.core.seq.call(null,inst_39911);
var state_39979__$1 = (function (){var statearr_40046 = state_39979;
(statearr_40046[(31)] = inst_39965);

return statearr_40046;
})();
if(inst_39966){
var statearr_40047_40198 = state_39979__$1;
(statearr_40047_40198[(1)] = (42));

} else {
var statearr_40048_40199 = state_39979__$1;
(statearr_40048_40199[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (16))){
var inst_39880 = (state_39979[(7)]);
var inst_39882 = cljs.core.chunked_seq_QMARK_.call(null,inst_39880);
var state_39979__$1 = state_39979;
if(inst_39882){
var statearr_40049_40200 = state_39979__$1;
(statearr_40049_40200[(1)] = (19));

} else {
var statearr_40050_40201 = state_39979__$1;
(statearr_40050_40201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (38))){
var inst_39958 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40051_40202 = state_39979__$1;
(statearr_40051_40202[(2)] = inst_39958);

(statearr_40051_40202[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (30))){
var state_39979__$1 = state_39979;
var statearr_40052_40203 = state_39979__$1;
(statearr_40052_40203[(2)] = null);

(statearr_40052_40203[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (10))){
var inst_39863 = (state_39979[(15)]);
var inst_39861 = (state_39979[(17)]);
var inst_39869 = cljs.core._nth.call(null,inst_39861,inst_39863);
var inst_39870 = cljs.core.nth.call(null,inst_39869,(0),null);
var inst_39871 = cljs.core.nth.call(null,inst_39869,(1),null);
var state_39979__$1 = (function (){var statearr_40053 = state_39979;
(statearr_40053[(26)] = inst_39870);

return statearr_40053;
})();
if(cljs.core.truth_(inst_39871)){
var statearr_40054_40204 = state_39979__$1;
(statearr_40054_40204[(1)] = (13));

} else {
var statearr_40055_40205 = state_39979__$1;
(statearr_40055_40205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (18))){
var inst_39904 = (state_39979[(2)]);
var state_39979__$1 = state_39979;
var statearr_40056_40206 = state_39979__$1;
(statearr_40056_40206[(2)] = inst_39904);

(statearr_40056_40206[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (42))){
var state_39979__$1 = state_39979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39979__$1,(45),dchan);
} else {
if((state_val_39980 === (37))){
var inst_39938 = (state_39979[(25)]);
var inst_39947 = (state_39979[(23)]);
var inst_39851 = (state_39979[(12)]);
var inst_39947__$1 = cljs.core.first.call(null,inst_39938);
var inst_39948 = cljs.core.async.put_BANG_.call(null,inst_39947__$1,inst_39851,done);
var state_39979__$1 = (function (){var statearr_40057 = state_39979;
(statearr_40057[(23)] = inst_39947__$1);

return statearr_40057;
})();
if(cljs.core.truth_(inst_39948)){
var statearr_40058_40207 = state_39979__$1;
(statearr_40058_40207[(1)] = (39));

} else {
var statearr_40059_40208 = state_39979__$1;
(statearr_40059_40208[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39980 === (8))){
var inst_39863 = (state_39979[(15)]);
var inst_39862 = (state_39979[(16)]);
var inst_39865 = (inst_39863 < inst_39862);
var inst_39866 = inst_39865;
var state_39979__$1 = state_39979;
if(cljs.core.truth_(inst_39866)){
var statearr_40060_40209 = state_39979__$1;
(statearr_40060_40209[(1)] = (10));

} else {
var statearr_40061_40210 = state_39979__$1;
(statearr_40061_40210[(1)] = (11));

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
});})(c__38071__auto___40077,cs,m,dchan,dctr,done))
;
return ((function (switch__37506__auto__,c__38071__auto___40077,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37508__auto__ = null;
var cljs$core$async$mult_$_state_machine__37508__auto____0 = (function (){
var statearr_40065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40065[(0)] = cljs$core$async$mult_$_state_machine__37508__auto__);

(statearr_40065[(1)] = (1));

return statearr_40065;
});
var cljs$core$async$mult_$_state_machine__37508__auto____1 = (function (state_39979){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_39979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e40066){if((e40066 instanceof Object)){
var ex__37511__auto__ = e40066;
var statearr_40067_40211 = state_39979;
(statearr_40067_40211[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40212 = state_39979;
state_39979 = G__40212;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37508__auto__ = function(state_39979){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37508__auto____1.call(this,state_39979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37508__auto____0;
cljs$core$async$mult_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37508__auto____1;
return cljs$core$async$mult_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___40077,cs,m,dchan,dctr,done))
})();
var state__38073__auto__ = (function (){var statearr_40068 = f__38072__auto__.call(null);
(statearr_40068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___40077);

return statearr_40068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___40077,cs,m,dchan,dctr,done))
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
var args40213 = [];
var len__19784__auto___40216 = arguments.length;
var i__19785__auto___40217 = (0);
while(true){
if((i__19785__auto___40217 < len__19784__auto___40216)){
args40213.push((arguments[i__19785__auto___40217]));

var G__40218 = (i__19785__auto___40217 + (1));
i__19785__auto___40217 = G__40218;
continue;
} else {
}
break;
}

var G__40215 = args40213.length;
switch (G__40215) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40213.length)].join('')));

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
var len__19784__auto___40261 = arguments.length;
var i__19785__auto___40262 = (0);
while(true){
if((i__19785__auto___40262 < len__19784__auto___40261)){
args__19791__auto__.push((arguments[i__19785__auto___40262]));

var G__40263 = (i__19785__auto___40262 + (1));
i__19785__auto___40262 = G__40263;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40255){
var map__40256 = p__40255;
var map__40256__$1 = ((((!((map__40256 == null)))?((((map__40256.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40256.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40256):map__40256);
var opts = map__40256__$1;
var statearr_40258_40264 = state;
(statearr_40258_40264[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__40256,map__40256__$1,opts){
return (function (val){
var statearr_40259_40265 = state;
(statearr_40259_40265[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40256,map__40256__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_40260_40266 = state;
(statearr_40260_40266[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40251){
var G__40252 = cljs.core.first.call(null,seq40251);
var seq40251__$1 = cljs.core.next.call(null,seq40251);
var G__40253 = cljs.core.first.call(null,seq40251__$1);
var seq40251__$2 = cljs.core.next.call(null,seq40251__$1);
var G__40254 = cljs.core.first.call(null,seq40251__$2);
var seq40251__$3 = cljs.core.next.call(null,seq40251__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40252,G__40253,G__40254,seq40251__$3);
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
if(typeof cljs.core.async.t_cljs$core$async40454 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40454 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta40455){
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
this.meta40455 = meta40455;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40456,meta40455__$1){
var self__ = this;
var _40456__$1 = this;
return (new cljs.core.async.t_cljs$core$async40454(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta40455__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40456){
var self__ = this;
var _40456__$1 = this;
return self__.meta40455;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async40454.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta40455","meta40455",-876002336,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40454.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40454.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40454";

cljs.core.async.t_cljs$core$async40454.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40454");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async40454 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40455){
return (new cljs.core.async.t_cljs$core$async40454(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta40455));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40454(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38071__auto___40641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___40641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___40641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40554){
var state_val_40555 = (state_40554[(1)]);
if((state_val_40555 === (7))){
var inst_40472 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
var statearr_40556_40642 = state_40554__$1;
(statearr_40556_40642[(2)] = inst_40472);

(statearr_40556_40642[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (20))){
var inst_40484 = (state_40554[(7)]);
var state_40554__$1 = state_40554;
var statearr_40557_40643 = state_40554__$1;
(statearr_40557_40643[(2)] = inst_40484);

(statearr_40557_40643[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (27))){
var state_40554__$1 = state_40554;
var statearr_40560_40644 = state_40554__$1;
(statearr_40560_40644[(2)] = null);

(statearr_40560_40644[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (1))){
var inst_40460 = (state_40554[(8)]);
var inst_40460__$1 = calc_state.call(null);
var inst_40462 = (inst_40460__$1 == null);
var inst_40463 = cljs.core.not.call(null,inst_40462);
var state_40554__$1 = (function (){var statearr_40561 = state_40554;
(statearr_40561[(8)] = inst_40460__$1);

return statearr_40561;
})();
if(inst_40463){
var statearr_40562_40647 = state_40554__$1;
(statearr_40562_40647[(1)] = (2));

} else {
var statearr_40563_40648 = state_40554__$1;
(statearr_40563_40648[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (24))){
var inst_40507 = (state_40554[(9)]);
var inst_40514 = (state_40554[(10)]);
var inst_40528 = (state_40554[(11)]);
var inst_40528__$1 = inst_40507.call(null,inst_40514);
var state_40554__$1 = (function (){var statearr_40564 = state_40554;
(statearr_40564[(11)] = inst_40528__$1);

return statearr_40564;
})();
if(cljs.core.truth_(inst_40528__$1)){
var statearr_40565_40655 = state_40554__$1;
(statearr_40565_40655[(1)] = (29));

} else {
var statearr_40566_40656 = state_40554__$1;
(statearr_40566_40656[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (4))){
var inst_40475 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
if(cljs.core.truth_(inst_40475)){
var statearr_40574_40657 = state_40554__$1;
(statearr_40574_40657[(1)] = (8));

} else {
var statearr_40575_40658 = state_40554__$1;
(statearr_40575_40658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (15))){
var inst_40501 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
if(cljs.core.truth_(inst_40501)){
var statearr_40576_40660 = state_40554__$1;
(statearr_40576_40660[(1)] = (19));

} else {
var statearr_40577_40661 = state_40554__$1;
(statearr_40577_40661[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (21))){
var inst_40506 = (state_40554[(12)]);
var inst_40506__$1 = (state_40554[(2)]);
var inst_40507 = cljs.core.get.call(null,inst_40506__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40508 = cljs.core.get.call(null,inst_40506__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40509 = cljs.core.get.call(null,inst_40506__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40554__$1 = (function (){var statearr_40578 = state_40554;
(statearr_40578[(9)] = inst_40507);

(statearr_40578[(13)] = inst_40508);

(statearr_40578[(12)] = inst_40506__$1);

return statearr_40578;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40554__$1,(22),inst_40509);
} else {
if((state_val_40555 === (31))){
var inst_40536 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
if(cljs.core.truth_(inst_40536)){
var statearr_40579_40669 = state_40554__$1;
(statearr_40579_40669[(1)] = (32));

} else {
var statearr_40580_40670 = state_40554__$1;
(statearr_40580_40670[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (32))){
var inst_40513 = (state_40554[(14)]);
var state_40554__$1 = state_40554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40554__$1,(35),out,inst_40513);
} else {
if((state_val_40555 === (33))){
var inst_40506 = (state_40554[(12)]);
var inst_40484 = inst_40506;
var state_40554__$1 = (function (){var statearr_40581 = state_40554;
(statearr_40581[(7)] = inst_40484);

return statearr_40581;
})();
var statearr_40582_40673 = state_40554__$1;
(statearr_40582_40673[(2)] = null);

(statearr_40582_40673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (13))){
var inst_40484 = (state_40554[(7)]);
var inst_40491 = inst_40484.cljs$lang$protocol_mask$partition0$;
var inst_40492 = (inst_40491 & (64));
var inst_40493 = inst_40484.cljs$core$ISeq$;
var inst_40494 = (inst_40492) || (inst_40493);
var state_40554__$1 = state_40554;
if(cljs.core.truth_(inst_40494)){
var statearr_40583_40677 = state_40554__$1;
(statearr_40583_40677[(1)] = (16));

} else {
var statearr_40589_40678 = state_40554__$1;
(statearr_40589_40678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (22))){
var inst_40514 = (state_40554[(10)]);
var inst_40513 = (state_40554[(14)]);
var inst_40512 = (state_40554[(2)]);
var inst_40513__$1 = cljs.core.nth.call(null,inst_40512,(0),null);
var inst_40514__$1 = cljs.core.nth.call(null,inst_40512,(1),null);
var inst_40515 = (inst_40513__$1 == null);
var inst_40516 = cljs.core._EQ_.call(null,inst_40514__$1,change);
var inst_40517 = (inst_40515) || (inst_40516);
var state_40554__$1 = (function (){var statearr_40592 = state_40554;
(statearr_40592[(10)] = inst_40514__$1);

(statearr_40592[(14)] = inst_40513__$1);

return statearr_40592;
})();
if(cljs.core.truth_(inst_40517)){
var statearr_40594_40680 = state_40554__$1;
(statearr_40594_40680[(1)] = (23));

} else {
var statearr_40595_40681 = state_40554__$1;
(statearr_40595_40681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (36))){
var inst_40506 = (state_40554[(12)]);
var inst_40484 = inst_40506;
var state_40554__$1 = (function (){var statearr_40596 = state_40554;
(statearr_40596[(7)] = inst_40484);

return statearr_40596;
})();
var statearr_40597_40682 = state_40554__$1;
(statearr_40597_40682[(2)] = null);

(statearr_40597_40682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (29))){
var inst_40528 = (state_40554[(11)]);
var state_40554__$1 = state_40554;
var statearr_40599_40683 = state_40554__$1;
(statearr_40599_40683[(2)] = inst_40528);

(statearr_40599_40683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (6))){
var state_40554__$1 = state_40554;
var statearr_40600_40684 = state_40554__$1;
(statearr_40600_40684[(2)] = false);

(statearr_40600_40684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (28))){
var inst_40524 = (state_40554[(2)]);
var inst_40525 = calc_state.call(null);
var inst_40484 = inst_40525;
var state_40554__$1 = (function (){var statearr_40601 = state_40554;
(statearr_40601[(7)] = inst_40484);

(statearr_40601[(15)] = inst_40524);

return statearr_40601;
})();
var statearr_40602_40685 = state_40554__$1;
(statearr_40602_40685[(2)] = null);

(statearr_40602_40685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (25))){
var inst_40550 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
var statearr_40603_40686 = state_40554__$1;
(statearr_40603_40686[(2)] = inst_40550);

(statearr_40603_40686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (34))){
var inst_40548 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
var statearr_40604_40687 = state_40554__$1;
(statearr_40604_40687[(2)] = inst_40548);

(statearr_40604_40687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (17))){
var state_40554__$1 = state_40554;
var statearr_40605_40688 = state_40554__$1;
(statearr_40605_40688[(2)] = false);

(statearr_40605_40688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (3))){
var state_40554__$1 = state_40554;
var statearr_40606_40689 = state_40554__$1;
(statearr_40606_40689[(2)] = false);

(statearr_40606_40689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (12))){
var inst_40552 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40554__$1,inst_40552);
} else {
if((state_val_40555 === (2))){
var inst_40460 = (state_40554[(8)]);
var inst_40465 = inst_40460.cljs$lang$protocol_mask$partition0$;
var inst_40466 = (inst_40465 & (64));
var inst_40467 = inst_40460.cljs$core$ISeq$;
var inst_40468 = (inst_40466) || (inst_40467);
var state_40554__$1 = state_40554;
if(cljs.core.truth_(inst_40468)){
var statearr_40610_40690 = state_40554__$1;
(statearr_40610_40690[(1)] = (5));

} else {
var statearr_40611_40691 = state_40554__$1;
(statearr_40611_40691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (23))){
var inst_40513 = (state_40554[(14)]);
var inst_40519 = (inst_40513 == null);
var state_40554__$1 = state_40554;
if(cljs.core.truth_(inst_40519)){
var statearr_40612_40692 = state_40554__$1;
(statearr_40612_40692[(1)] = (26));

} else {
var statearr_40614_40693 = state_40554__$1;
(statearr_40614_40693[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (35))){
var inst_40539 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
if(cljs.core.truth_(inst_40539)){
var statearr_40615_40694 = state_40554__$1;
(statearr_40615_40694[(1)] = (36));

} else {
var statearr_40616_40695 = state_40554__$1;
(statearr_40616_40695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (19))){
var inst_40484 = (state_40554[(7)]);
var inst_40503 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40484);
var state_40554__$1 = state_40554;
var statearr_40617_40696 = state_40554__$1;
(statearr_40617_40696[(2)] = inst_40503);

(statearr_40617_40696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (11))){
var inst_40484 = (state_40554[(7)]);
var inst_40488 = (inst_40484 == null);
var inst_40489 = cljs.core.not.call(null,inst_40488);
var state_40554__$1 = state_40554;
if(inst_40489){
var statearr_40618_40697 = state_40554__$1;
(statearr_40618_40697[(1)] = (13));

} else {
var statearr_40619_40698 = state_40554__$1;
(statearr_40619_40698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (9))){
var inst_40460 = (state_40554[(8)]);
var state_40554__$1 = state_40554;
var statearr_40620_40699 = state_40554__$1;
(statearr_40620_40699[(2)] = inst_40460);

(statearr_40620_40699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (5))){
var state_40554__$1 = state_40554;
var statearr_40621_40700 = state_40554__$1;
(statearr_40621_40700[(2)] = true);

(statearr_40621_40700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (14))){
var state_40554__$1 = state_40554;
var statearr_40622_40701 = state_40554__$1;
(statearr_40622_40701[(2)] = false);

(statearr_40622_40701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (26))){
var inst_40514 = (state_40554[(10)]);
var inst_40521 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40514);
var state_40554__$1 = state_40554;
var statearr_40623_40702 = state_40554__$1;
(statearr_40623_40702[(2)] = inst_40521);

(statearr_40623_40702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (16))){
var state_40554__$1 = state_40554;
var statearr_40624_40703 = state_40554__$1;
(statearr_40624_40703[(2)] = true);

(statearr_40624_40703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (38))){
var inst_40544 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
var statearr_40625_40704 = state_40554__$1;
(statearr_40625_40704[(2)] = inst_40544);

(statearr_40625_40704[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (30))){
var inst_40507 = (state_40554[(9)]);
var inst_40514 = (state_40554[(10)]);
var inst_40508 = (state_40554[(13)]);
var inst_40531 = cljs.core.empty_QMARK_.call(null,inst_40507);
var inst_40532 = inst_40508.call(null,inst_40514);
var inst_40533 = cljs.core.not.call(null,inst_40532);
var inst_40534 = (inst_40531) && (inst_40533);
var state_40554__$1 = state_40554;
var statearr_40626_40707 = state_40554__$1;
(statearr_40626_40707[(2)] = inst_40534);

(statearr_40626_40707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (10))){
var inst_40460 = (state_40554[(8)]);
var inst_40480 = (state_40554[(2)]);
var inst_40481 = cljs.core.get.call(null,inst_40480,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40482 = cljs.core.get.call(null,inst_40480,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40483 = cljs.core.get.call(null,inst_40480,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40484 = inst_40460;
var state_40554__$1 = (function (){var statearr_40627 = state_40554;
(statearr_40627[(7)] = inst_40484);

(statearr_40627[(16)] = inst_40481);

(statearr_40627[(17)] = inst_40483);

(statearr_40627[(18)] = inst_40482);

return statearr_40627;
})();
var statearr_40628_40708 = state_40554__$1;
(statearr_40628_40708[(2)] = null);

(statearr_40628_40708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (18))){
var inst_40498 = (state_40554[(2)]);
var state_40554__$1 = state_40554;
var statearr_40629_40709 = state_40554__$1;
(statearr_40629_40709[(2)] = inst_40498);

(statearr_40629_40709[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (37))){
var state_40554__$1 = state_40554;
var statearr_40630_40710 = state_40554__$1;
(statearr_40630_40710[(2)] = null);

(statearr_40630_40710[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40555 === (8))){
var inst_40460 = (state_40554[(8)]);
var inst_40477 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40460);
var state_40554__$1 = state_40554;
var statearr_40631_40711 = state_40554__$1;
(statearr_40631_40711[(2)] = inst_40477);

(statearr_40631_40711[(1)] = (10));


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
});})(c__38071__auto___40641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37506__auto__,c__38071__auto___40641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37508__auto__ = null;
var cljs$core$async$mix_$_state_machine__37508__auto____0 = (function (){
var statearr_40635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40635[(0)] = cljs$core$async$mix_$_state_machine__37508__auto__);

(statearr_40635[(1)] = (1));

return statearr_40635;
});
var cljs$core$async$mix_$_state_machine__37508__auto____1 = (function (state_40554){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_40554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e40636){if((e40636 instanceof Object)){
var ex__37511__auto__ = e40636;
var statearr_40637_40715 = state_40554;
(statearr_40637_40715[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40716 = state_40554;
state_40554 = G__40716;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37508__auto__ = function(state_40554){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37508__auto____1.call(this,state_40554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37508__auto____0;
cljs$core$async$mix_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37508__auto____1;
return cljs$core$async$mix_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___40641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38073__auto__ = (function (){var statearr_40638 = f__38072__auto__.call(null);
(statearr_40638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___40641);

return statearr_40638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___40641,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args40717 = [];
var len__19784__auto___40720 = arguments.length;
var i__19785__auto___40721 = (0);
while(true){
if((i__19785__auto___40721 < len__19784__auto___40720)){
args40717.push((arguments[i__19785__auto___40721]));

var G__40722 = (i__19785__auto___40721 + (1));
i__19785__auto___40721 = G__40722;
continue;
} else {
}
break;
}

var G__40719 = args40717.length;
switch (G__40719) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40717.length)].join('')));

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
var args40725 = [];
var len__19784__auto___40850 = arguments.length;
var i__19785__auto___40851 = (0);
while(true){
if((i__19785__auto___40851 < len__19784__auto___40850)){
args40725.push((arguments[i__19785__auto___40851]));

var G__40852 = (i__19785__auto___40851 + (1));
i__19785__auto___40851 = G__40852;
continue;
} else {
}
break;
}

var G__40727 = args40725.length;
switch (G__40727) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40725.length)].join('')));

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
return (function (p1__40724_SHARP_){
if(cljs.core.truth_(p1__40724_SHARP_.call(null,topic))){
return p1__40724_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40724_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18726__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40728 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40728 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40729){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40729 = meta40729;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40730,meta40729__$1){
var self__ = this;
var _40730__$1 = this;
return (new cljs.core.async.t_cljs$core$async40728(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40729__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40730){
var self__ = this;
var _40730__$1 = this;
return self__.meta40729;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40728.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40728.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40729","meta40729",1006138880,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40728.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40728.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40728";

cljs.core.async.t_cljs$core$async40728.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40728");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async40728 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40728(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40729){
return (new cljs.core.async.t_cljs$core$async40728(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40729));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40728(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38071__auto___40854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___40854,mults,ensure_mult,p){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___40854,mults,ensure_mult,p){
return (function (state_40802){
var state_val_40803 = (state_40802[(1)]);
if((state_val_40803 === (7))){
var inst_40798 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40804_40855 = state_40802__$1;
(statearr_40804_40855[(2)] = inst_40798);

(statearr_40804_40855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (20))){
var state_40802__$1 = state_40802;
var statearr_40805_40856 = state_40802__$1;
(statearr_40805_40856[(2)] = null);

(statearr_40805_40856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (1))){
var state_40802__$1 = state_40802;
var statearr_40806_40857 = state_40802__$1;
(statearr_40806_40857[(2)] = null);

(statearr_40806_40857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (24))){
var inst_40781 = (state_40802[(7)]);
var inst_40790 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_40781);
var state_40802__$1 = state_40802;
var statearr_40807_40858 = state_40802__$1;
(statearr_40807_40858[(2)] = inst_40790);

(statearr_40807_40858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (4))){
var inst_40733 = (state_40802[(8)]);
var inst_40733__$1 = (state_40802[(2)]);
var inst_40734 = (inst_40733__$1 == null);
var state_40802__$1 = (function (){var statearr_40808 = state_40802;
(statearr_40808[(8)] = inst_40733__$1);

return statearr_40808;
})();
if(cljs.core.truth_(inst_40734)){
var statearr_40809_40859 = state_40802__$1;
(statearr_40809_40859[(1)] = (5));

} else {
var statearr_40810_40860 = state_40802__$1;
(statearr_40810_40860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (15))){
var inst_40775 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40811_40861 = state_40802__$1;
(statearr_40811_40861[(2)] = inst_40775);

(statearr_40811_40861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (21))){
var inst_40795 = (state_40802[(2)]);
var state_40802__$1 = (function (){var statearr_40812 = state_40802;
(statearr_40812[(9)] = inst_40795);

return statearr_40812;
})();
var statearr_40813_40862 = state_40802__$1;
(statearr_40813_40862[(2)] = null);

(statearr_40813_40862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (13))){
var inst_40757 = (state_40802[(10)]);
var inst_40759 = cljs.core.chunked_seq_QMARK_.call(null,inst_40757);
var state_40802__$1 = state_40802;
if(inst_40759){
var statearr_40814_40863 = state_40802__$1;
(statearr_40814_40863[(1)] = (16));

} else {
var statearr_40815_40864 = state_40802__$1;
(statearr_40815_40864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (22))){
var inst_40787 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
if(cljs.core.truth_(inst_40787)){
var statearr_40816_40865 = state_40802__$1;
(statearr_40816_40865[(1)] = (23));

} else {
var statearr_40817_40866 = state_40802__$1;
(statearr_40817_40866[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (6))){
var inst_40783 = (state_40802[(11)]);
var inst_40781 = (state_40802[(7)]);
var inst_40733 = (state_40802[(8)]);
var inst_40781__$1 = topic_fn.call(null,inst_40733);
var inst_40782 = cljs.core.deref.call(null,mults);
var inst_40783__$1 = cljs.core.get.call(null,inst_40782,inst_40781__$1);
var state_40802__$1 = (function (){var statearr_40818 = state_40802;
(statearr_40818[(11)] = inst_40783__$1);

(statearr_40818[(7)] = inst_40781__$1);

return statearr_40818;
})();
if(cljs.core.truth_(inst_40783__$1)){
var statearr_40819_40867 = state_40802__$1;
(statearr_40819_40867[(1)] = (19));

} else {
var statearr_40820_40868 = state_40802__$1;
(statearr_40820_40868[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (25))){
var inst_40792 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40821_40869 = state_40802__$1;
(statearr_40821_40869[(2)] = inst_40792);

(statearr_40821_40869[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (17))){
var inst_40757 = (state_40802[(10)]);
var inst_40766 = cljs.core.first.call(null,inst_40757);
var inst_40767 = cljs.core.async.muxch_STAR_.call(null,inst_40766);
var inst_40768 = cljs.core.async.close_BANG_.call(null,inst_40767);
var inst_40769 = cljs.core.next.call(null,inst_40757);
var inst_40743 = inst_40769;
var inst_40744 = null;
var inst_40745 = (0);
var inst_40746 = (0);
var state_40802__$1 = (function (){var statearr_40822 = state_40802;
(statearr_40822[(12)] = inst_40745);

(statearr_40822[(13)] = inst_40744);

(statearr_40822[(14)] = inst_40768);

(statearr_40822[(15)] = inst_40743);

(statearr_40822[(16)] = inst_40746);

return statearr_40822;
})();
var statearr_40823_40870 = state_40802__$1;
(statearr_40823_40870[(2)] = null);

(statearr_40823_40870[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (3))){
var inst_40800 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40802__$1,inst_40800);
} else {
if((state_val_40803 === (12))){
var inst_40777 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40824_40871 = state_40802__$1;
(statearr_40824_40871[(2)] = inst_40777);

(statearr_40824_40871[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (2))){
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40802__$1,(4),ch);
} else {
if((state_val_40803 === (23))){
var state_40802__$1 = state_40802;
var statearr_40825_40872 = state_40802__$1;
(statearr_40825_40872[(2)] = null);

(statearr_40825_40872[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (19))){
var inst_40783 = (state_40802[(11)]);
var inst_40733 = (state_40802[(8)]);
var inst_40785 = cljs.core.async.muxch_STAR_.call(null,inst_40783);
var state_40802__$1 = state_40802;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40802__$1,(22),inst_40785,inst_40733);
} else {
if((state_val_40803 === (11))){
var inst_40757 = (state_40802[(10)]);
var inst_40743 = (state_40802[(15)]);
var inst_40757__$1 = cljs.core.seq.call(null,inst_40743);
var state_40802__$1 = (function (){var statearr_40826 = state_40802;
(statearr_40826[(10)] = inst_40757__$1);

return statearr_40826;
})();
if(inst_40757__$1){
var statearr_40827_40873 = state_40802__$1;
(statearr_40827_40873[(1)] = (13));

} else {
var statearr_40828_40874 = state_40802__$1;
(statearr_40828_40874[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (9))){
var inst_40779 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40829_40875 = state_40802__$1;
(statearr_40829_40875[(2)] = inst_40779);

(statearr_40829_40875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (5))){
var inst_40740 = cljs.core.deref.call(null,mults);
var inst_40741 = cljs.core.vals.call(null,inst_40740);
var inst_40742 = cljs.core.seq.call(null,inst_40741);
var inst_40743 = inst_40742;
var inst_40744 = null;
var inst_40745 = (0);
var inst_40746 = (0);
var state_40802__$1 = (function (){var statearr_40830 = state_40802;
(statearr_40830[(12)] = inst_40745);

(statearr_40830[(13)] = inst_40744);

(statearr_40830[(15)] = inst_40743);

(statearr_40830[(16)] = inst_40746);

return statearr_40830;
})();
var statearr_40831_40876 = state_40802__$1;
(statearr_40831_40876[(2)] = null);

(statearr_40831_40876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (14))){
var state_40802__$1 = state_40802;
var statearr_40835_40877 = state_40802__$1;
(statearr_40835_40877[(2)] = null);

(statearr_40835_40877[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (16))){
var inst_40757 = (state_40802[(10)]);
var inst_40761 = cljs.core.chunk_first.call(null,inst_40757);
var inst_40762 = cljs.core.chunk_rest.call(null,inst_40757);
var inst_40763 = cljs.core.count.call(null,inst_40761);
var inst_40743 = inst_40762;
var inst_40744 = inst_40761;
var inst_40745 = inst_40763;
var inst_40746 = (0);
var state_40802__$1 = (function (){var statearr_40836 = state_40802;
(statearr_40836[(12)] = inst_40745);

(statearr_40836[(13)] = inst_40744);

(statearr_40836[(15)] = inst_40743);

(statearr_40836[(16)] = inst_40746);

return statearr_40836;
})();
var statearr_40837_40878 = state_40802__$1;
(statearr_40837_40878[(2)] = null);

(statearr_40837_40878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (10))){
var inst_40745 = (state_40802[(12)]);
var inst_40744 = (state_40802[(13)]);
var inst_40743 = (state_40802[(15)]);
var inst_40746 = (state_40802[(16)]);
var inst_40751 = cljs.core._nth.call(null,inst_40744,inst_40746);
var inst_40752 = cljs.core.async.muxch_STAR_.call(null,inst_40751);
var inst_40753 = cljs.core.async.close_BANG_.call(null,inst_40752);
var inst_40754 = (inst_40746 + (1));
var tmp40832 = inst_40745;
var tmp40833 = inst_40744;
var tmp40834 = inst_40743;
var inst_40743__$1 = tmp40834;
var inst_40744__$1 = tmp40833;
var inst_40745__$1 = tmp40832;
var inst_40746__$1 = inst_40754;
var state_40802__$1 = (function (){var statearr_40838 = state_40802;
(statearr_40838[(12)] = inst_40745__$1);

(statearr_40838[(13)] = inst_40744__$1);

(statearr_40838[(17)] = inst_40753);

(statearr_40838[(15)] = inst_40743__$1);

(statearr_40838[(16)] = inst_40746__$1);

return statearr_40838;
})();
var statearr_40839_40879 = state_40802__$1;
(statearr_40839_40879[(2)] = null);

(statearr_40839_40879[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (18))){
var inst_40772 = (state_40802[(2)]);
var state_40802__$1 = state_40802;
var statearr_40840_40880 = state_40802__$1;
(statearr_40840_40880[(2)] = inst_40772);

(statearr_40840_40880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40803 === (8))){
var inst_40745 = (state_40802[(12)]);
var inst_40746 = (state_40802[(16)]);
var inst_40748 = (inst_40746 < inst_40745);
var inst_40749 = inst_40748;
var state_40802__$1 = state_40802;
if(cljs.core.truth_(inst_40749)){
var statearr_40841_40881 = state_40802__$1;
(statearr_40841_40881[(1)] = (10));

} else {
var statearr_40842_40882 = state_40802__$1;
(statearr_40842_40882[(1)] = (11));

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
});})(c__38071__auto___40854,mults,ensure_mult,p))
;
return ((function (switch__37506__auto__,c__38071__auto___40854,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_40846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40846[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_40846[(1)] = (1));

return statearr_40846;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_40802){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_40802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e40847){if((e40847 instanceof Object)){
var ex__37511__auto__ = e40847;
var statearr_40848_40883 = state_40802;
(statearr_40848_40883[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40847;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40884 = state_40802;
state_40802 = G__40884;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_40802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_40802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___40854,mults,ensure_mult,p))
})();
var state__38073__auto__ = (function (){var statearr_40849 = f__38072__auto__.call(null);
(statearr_40849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___40854);

return statearr_40849;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___40854,mults,ensure_mult,p))
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
var args40885 = [];
var len__19784__auto___40888 = arguments.length;
var i__19785__auto___40889 = (0);
while(true){
if((i__19785__auto___40889 < len__19784__auto___40888)){
args40885.push((arguments[i__19785__auto___40889]));

var G__40890 = (i__19785__auto___40889 + (1));
i__19785__auto___40889 = G__40890;
continue;
} else {
}
break;
}

var G__40887 = args40885.length;
switch (G__40887) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40885.length)].join('')));

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
var args40892 = [];
var len__19784__auto___40895 = arguments.length;
var i__19785__auto___40896 = (0);
while(true){
if((i__19785__auto___40896 < len__19784__auto___40895)){
args40892.push((arguments[i__19785__auto___40896]));

var G__40897 = (i__19785__auto___40896 + (1));
i__19785__auto___40896 = G__40897;
continue;
} else {
}
break;
}

var G__40894 = args40892.length;
switch (G__40894) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40892.length)].join('')));

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
var args40899 = [];
var len__19784__auto___40970 = arguments.length;
var i__19785__auto___40971 = (0);
while(true){
if((i__19785__auto___40971 < len__19784__auto___40970)){
args40899.push((arguments[i__19785__auto___40971]));

var G__40972 = (i__19785__auto___40971 + (1));
i__19785__auto___40971 = G__40972;
continue;
} else {
}
break;
}

var G__40901 = args40899.length;
switch (G__40901) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40899.length)].join('')));

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
var c__38071__auto___40974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___40974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___40974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40940){
var state_val_40941 = (state_40940[(1)]);
if((state_val_40941 === (7))){
var state_40940__$1 = state_40940;
var statearr_40942_40975 = state_40940__$1;
(statearr_40942_40975[(2)] = null);

(statearr_40942_40975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (1))){
var state_40940__$1 = state_40940;
var statearr_40943_40976 = state_40940__$1;
(statearr_40943_40976[(2)] = null);

(statearr_40943_40976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (4))){
var inst_40904 = (state_40940[(7)]);
var inst_40906 = (inst_40904 < cnt);
var state_40940__$1 = state_40940;
if(cljs.core.truth_(inst_40906)){
var statearr_40944_40977 = state_40940__$1;
(statearr_40944_40977[(1)] = (6));

} else {
var statearr_40945_40978 = state_40940__$1;
(statearr_40945_40978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (15))){
var inst_40936 = (state_40940[(2)]);
var state_40940__$1 = state_40940;
var statearr_40946_40979 = state_40940__$1;
(statearr_40946_40979[(2)] = inst_40936);

(statearr_40946_40979[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (13))){
var inst_40929 = cljs.core.async.close_BANG_.call(null,out);
var state_40940__$1 = state_40940;
var statearr_40947_40980 = state_40940__$1;
(statearr_40947_40980[(2)] = inst_40929);

(statearr_40947_40980[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (6))){
var state_40940__$1 = state_40940;
var statearr_40948_40981 = state_40940__$1;
(statearr_40948_40981[(2)] = null);

(statearr_40948_40981[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (3))){
var inst_40938 = (state_40940[(2)]);
var state_40940__$1 = state_40940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40940__$1,inst_40938);
} else {
if((state_val_40941 === (12))){
var inst_40926 = (state_40940[(8)]);
var inst_40926__$1 = (state_40940[(2)]);
var inst_40927 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40926__$1);
var state_40940__$1 = (function (){var statearr_40949 = state_40940;
(statearr_40949[(8)] = inst_40926__$1);

return statearr_40949;
})();
if(cljs.core.truth_(inst_40927)){
var statearr_40950_40982 = state_40940__$1;
(statearr_40950_40982[(1)] = (13));

} else {
var statearr_40951_40983 = state_40940__$1;
(statearr_40951_40983[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (2))){
var inst_40903 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40904 = (0);
var state_40940__$1 = (function (){var statearr_40952 = state_40940;
(statearr_40952[(9)] = inst_40903);

(statearr_40952[(7)] = inst_40904);

return statearr_40952;
})();
var statearr_40953_40984 = state_40940__$1;
(statearr_40953_40984[(2)] = null);

(statearr_40953_40984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (11))){
var inst_40904 = (state_40940[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40940,(10),Object,null,(9));
var inst_40913 = chs__$1.call(null,inst_40904);
var inst_40914 = done.call(null,inst_40904);
var inst_40915 = cljs.core.async.take_BANG_.call(null,inst_40913,inst_40914);
var state_40940__$1 = state_40940;
var statearr_40954_40985 = state_40940__$1;
(statearr_40954_40985[(2)] = inst_40915);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40940__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (9))){
var inst_40904 = (state_40940[(7)]);
var inst_40917 = (state_40940[(2)]);
var inst_40918 = (inst_40904 + (1));
var inst_40904__$1 = inst_40918;
var state_40940__$1 = (function (){var statearr_40955 = state_40940;
(statearr_40955[(10)] = inst_40917);

(statearr_40955[(7)] = inst_40904__$1);

return statearr_40955;
})();
var statearr_40956_40986 = state_40940__$1;
(statearr_40956_40986[(2)] = null);

(statearr_40956_40986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (5))){
var inst_40924 = (state_40940[(2)]);
var state_40940__$1 = (function (){var statearr_40957 = state_40940;
(statearr_40957[(11)] = inst_40924);

return statearr_40957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40940__$1,(12),dchan);
} else {
if((state_val_40941 === (14))){
var inst_40926 = (state_40940[(8)]);
var inst_40931 = cljs.core.apply.call(null,f,inst_40926);
var state_40940__$1 = state_40940;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40940__$1,(16),out,inst_40931);
} else {
if((state_val_40941 === (16))){
var inst_40933 = (state_40940[(2)]);
var state_40940__$1 = (function (){var statearr_40958 = state_40940;
(statearr_40958[(12)] = inst_40933);

return statearr_40958;
})();
var statearr_40959_40987 = state_40940__$1;
(statearr_40959_40987[(2)] = null);

(statearr_40959_40987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (10))){
var inst_40908 = (state_40940[(2)]);
var inst_40909 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40940__$1 = (function (){var statearr_40960 = state_40940;
(statearr_40960[(13)] = inst_40908);

return statearr_40960;
})();
var statearr_40961_40988 = state_40940__$1;
(statearr_40961_40988[(2)] = inst_40909);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40940__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40941 === (8))){
var inst_40922 = (state_40940[(2)]);
var state_40940__$1 = state_40940;
var statearr_40962_40989 = state_40940__$1;
(statearr_40962_40989[(2)] = inst_40922);

(statearr_40962_40989[(1)] = (5));


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
});})(c__38071__auto___40974,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37506__auto__,c__38071__auto___40974,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_40966 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40966[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_40966[(1)] = (1));

return statearr_40966;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_40940){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_40940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e40967){if((e40967 instanceof Object)){
var ex__37511__auto__ = e40967;
var statearr_40968_40990 = state_40940;
(statearr_40968_40990[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40991 = state_40940;
state_40940 = G__40991;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_40940){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_40940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___40974,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38073__auto__ = (function (){var statearr_40969 = f__38072__auto__.call(null);
(statearr_40969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___40974);

return statearr_40969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___40974,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args40993 = [];
var len__19784__auto___41049 = arguments.length;
var i__19785__auto___41050 = (0);
while(true){
if((i__19785__auto___41050 < len__19784__auto___41049)){
args40993.push((arguments[i__19785__auto___41050]));

var G__41051 = (i__19785__auto___41050 + (1));
i__19785__auto___41050 = G__41051;
continue;
} else {
}
break;
}

var G__40995 = args40993.length;
switch (G__40995) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40993.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38071__auto___41053 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___41053,out){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___41053,out){
return (function (state_41025){
var state_val_41026 = (state_41025[(1)]);
if((state_val_41026 === (7))){
var inst_41004 = (state_41025[(7)]);
var inst_41005 = (state_41025[(8)]);
var inst_41004__$1 = (state_41025[(2)]);
var inst_41005__$1 = cljs.core.nth.call(null,inst_41004__$1,(0),null);
var inst_41006 = cljs.core.nth.call(null,inst_41004__$1,(1),null);
var inst_41007 = (inst_41005__$1 == null);
var state_41025__$1 = (function (){var statearr_41027 = state_41025;
(statearr_41027[(7)] = inst_41004__$1);

(statearr_41027[(8)] = inst_41005__$1);

(statearr_41027[(9)] = inst_41006);

return statearr_41027;
})();
if(cljs.core.truth_(inst_41007)){
var statearr_41028_41054 = state_41025__$1;
(statearr_41028_41054[(1)] = (8));

} else {
var statearr_41029_41055 = state_41025__$1;
(statearr_41029_41055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (1))){
var inst_40996 = cljs.core.vec.call(null,chs);
var inst_40997 = inst_40996;
var state_41025__$1 = (function (){var statearr_41030 = state_41025;
(statearr_41030[(10)] = inst_40997);

return statearr_41030;
})();
var statearr_41031_41056 = state_41025__$1;
(statearr_41031_41056[(2)] = null);

(statearr_41031_41056[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (4))){
var inst_40997 = (state_41025[(10)]);
var state_41025__$1 = state_41025;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41025__$1,(7),inst_40997);
} else {
if((state_val_41026 === (6))){
var inst_41021 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41032_41057 = state_41025__$1;
(statearr_41032_41057[(2)] = inst_41021);

(statearr_41032_41057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (3))){
var inst_41023 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41025__$1,inst_41023);
} else {
if((state_val_41026 === (2))){
var inst_40997 = (state_41025[(10)]);
var inst_40999 = cljs.core.count.call(null,inst_40997);
var inst_41000 = (inst_40999 > (0));
var state_41025__$1 = state_41025;
if(cljs.core.truth_(inst_41000)){
var statearr_41034_41058 = state_41025__$1;
(statearr_41034_41058[(1)] = (4));

} else {
var statearr_41035_41059 = state_41025__$1;
(statearr_41035_41059[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (11))){
var inst_40997 = (state_41025[(10)]);
var inst_41014 = (state_41025[(2)]);
var tmp41033 = inst_40997;
var inst_40997__$1 = tmp41033;
var state_41025__$1 = (function (){var statearr_41036 = state_41025;
(statearr_41036[(10)] = inst_40997__$1);

(statearr_41036[(11)] = inst_41014);

return statearr_41036;
})();
var statearr_41037_41060 = state_41025__$1;
(statearr_41037_41060[(2)] = null);

(statearr_41037_41060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (9))){
var inst_41005 = (state_41025[(8)]);
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41025__$1,(11),out,inst_41005);
} else {
if((state_val_41026 === (5))){
var inst_41019 = cljs.core.async.close_BANG_.call(null,out);
var state_41025__$1 = state_41025;
var statearr_41038_41061 = state_41025__$1;
(statearr_41038_41061[(2)] = inst_41019);

(statearr_41038_41061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (10))){
var inst_41017 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41039_41062 = state_41025__$1;
(statearr_41039_41062[(2)] = inst_41017);

(statearr_41039_41062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (8))){
var inst_41004 = (state_41025[(7)]);
var inst_40997 = (state_41025[(10)]);
var inst_41005 = (state_41025[(8)]);
var inst_41006 = (state_41025[(9)]);
var inst_41009 = (function (){var cs = inst_40997;
var vec__41002 = inst_41004;
var v = inst_41005;
var c = inst_41006;
return ((function (cs,vec__41002,v,c,inst_41004,inst_40997,inst_41005,inst_41006,state_val_41026,c__38071__auto___41053,out){
return (function (p1__40992_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40992_SHARP_);
});
;})(cs,vec__41002,v,c,inst_41004,inst_40997,inst_41005,inst_41006,state_val_41026,c__38071__auto___41053,out))
})();
var inst_41010 = cljs.core.filterv.call(null,inst_41009,inst_40997);
var inst_40997__$1 = inst_41010;
var state_41025__$1 = (function (){var statearr_41040 = state_41025;
(statearr_41040[(10)] = inst_40997__$1);

return statearr_41040;
})();
var statearr_41041_41063 = state_41025__$1;
(statearr_41041_41063[(2)] = null);

(statearr_41041_41063[(1)] = (2));


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
});})(c__38071__auto___41053,out))
;
return ((function (switch__37506__auto__,c__38071__auto___41053,out){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_41045 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41045[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_41045[(1)] = (1));

return statearr_41045;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_41025){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_41025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e41046){if((e41046 instanceof Object)){
var ex__37511__auto__ = e41046;
var statearr_41047_41064 = state_41025;
(statearr_41047_41064[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41046;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41065 = state_41025;
state_41025 = G__41065;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_41025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_41025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___41053,out))
})();
var state__38073__auto__ = (function (){var statearr_41048 = f__38072__auto__.call(null);
(statearr_41048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___41053);

return statearr_41048;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___41053,out))
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
var args41066 = [];
var len__19784__auto___41115 = arguments.length;
var i__19785__auto___41116 = (0);
while(true){
if((i__19785__auto___41116 < len__19784__auto___41115)){
args41066.push((arguments[i__19785__auto___41116]));

var G__41117 = (i__19785__auto___41116 + (1));
i__19785__auto___41116 = G__41117;
continue;
} else {
}
break;
}

var G__41068 = args41066.length;
switch (G__41068) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41066.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38071__auto___41119 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___41119,out){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___41119,out){
return (function (state_41092){
var state_val_41093 = (state_41092[(1)]);
if((state_val_41093 === (7))){
var inst_41074 = (state_41092[(7)]);
var inst_41074__$1 = (state_41092[(2)]);
var inst_41075 = (inst_41074__$1 == null);
var inst_41076 = cljs.core.not.call(null,inst_41075);
var state_41092__$1 = (function (){var statearr_41094 = state_41092;
(statearr_41094[(7)] = inst_41074__$1);

return statearr_41094;
})();
if(inst_41076){
var statearr_41095_41120 = state_41092__$1;
(statearr_41095_41120[(1)] = (8));

} else {
var statearr_41096_41121 = state_41092__$1;
(statearr_41096_41121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (1))){
var inst_41069 = (0);
var state_41092__$1 = (function (){var statearr_41097 = state_41092;
(statearr_41097[(8)] = inst_41069);

return statearr_41097;
})();
var statearr_41098_41122 = state_41092__$1;
(statearr_41098_41122[(2)] = null);

(statearr_41098_41122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (4))){
var state_41092__$1 = state_41092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41092__$1,(7),ch);
} else {
if((state_val_41093 === (6))){
var inst_41087 = (state_41092[(2)]);
var state_41092__$1 = state_41092;
var statearr_41099_41123 = state_41092__$1;
(statearr_41099_41123[(2)] = inst_41087);

(statearr_41099_41123[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (3))){
var inst_41089 = (state_41092[(2)]);
var inst_41090 = cljs.core.async.close_BANG_.call(null,out);
var state_41092__$1 = (function (){var statearr_41100 = state_41092;
(statearr_41100[(9)] = inst_41089);

return statearr_41100;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41092__$1,inst_41090);
} else {
if((state_val_41093 === (2))){
var inst_41069 = (state_41092[(8)]);
var inst_41071 = (inst_41069 < n);
var state_41092__$1 = state_41092;
if(cljs.core.truth_(inst_41071)){
var statearr_41101_41124 = state_41092__$1;
(statearr_41101_41124[(1)] = (4));

} else {
var statearr_41102_41125 = state_41092__$1;
(statearr_41102_41125[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (11))){
var inst_41069 = (state_41092[(8)]);
var inst_41079 = (state_41092[(2)]);
var inst_41080 = (inst_41069 + (1));
var inst_41069__$1 = inst_41080;
var state_41092__$1 = (function (){var statearr_41103 = state_41092;
(statearr_41103[(10)] = inst_41079);

(statearr_41103[(8)] = inst_41069__$1);

return statearr_41103;
})();
var statearr_41104_41126 = state_41092__$1;
(statearr_41104_41126[(2)] = null);

(statearr_41104_41126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (9))){
var state_41092__$1 = state_41092;
var statearr_41105_41127 = state_41092__$1;
(statearr_41105_41127[(2)] = null);

(statearr_41105_41127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (5))){
var state_41092__$1 = state_41092;
var statearr_41106_41128 = state_41092__$1;
(statearr_41106_41128[(2)] = null);

(statearr_41106_41128[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (10))){
var inst_41084 = (state_41092[(2)]);
var state_41092__$1 = state_41092;
var statearr_41107_41129 = state_41092__$1;
(statearr_41107_41129[(2)] = inst_41084);

(statearr_41107_41129[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41093 === (8))){
var inst_41074 = (state_41092[(7)]);
var state_41092__$1 = state_41092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41092__$1,(11),out,inst_41074);
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
});})(c__38071__auto___41119,out))
;
return ((function (switch__37506__auto__,c__38071__auto___41119,out){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_41111 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41111[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_41111[(1)] = (1));

return statearr_41111;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_41092){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_41092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e41112){if((e41112 instanceof Object)){
var ex__37511__auto__ = e41112;
var statearr_41113_41130 = state_41092;
(statearr_41113_41130[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41131 = state_41092;
state_41092 = G__41131;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_41092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_41092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___41119,out))
})();
var state__38073__auto__ = (function (){var statearr_41114 = f__38072__auto__.call(null);
(statearr_41114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___41119);

return statearr_41114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___41119,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41139 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41139 = (function (map_LT_,f,ch,meta41140){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41140 = meta41140;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41141,meta41140__$1){
var self__ = this;
var _41141__$1 = this;
return (new cljs.core.async.t_cljs$core$async41139(self__.map_LT_,self__.f,self__.ch,meta41140__$1));
});

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41141){
var self__ = this;
var _41141__$1 = this;
return self__.meta41140;
});

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41142 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41142 = (function (map_LT_,f,ch,meta41140,_,fn1,meta41143){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41140 = meta41140;
this._ = _;
this.fn1 = fn1;
this.meta41143 = meta41143;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41144,meta41143__$1){
var self__ = this;
var _41144__$1 = this;
return (new cljs.core.async.t_cljs$core$async41142(self__.map_LT_,self__.f,self__.ch,self__.meta41140,self__._,self__.fn1,meta41143__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41142.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41144){
var self__ = this;
var _41144__$1 = this;
return self__.meta41143;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41142.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41142.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41142.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41142.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41132_SHARP_){
return f1.call(null,(((p1__41132_SHARP_ == null))?null:self__.f.call(null,p1__41132_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41142.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41140","meta41140",1983900491,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41139","cljs.core.async/t_cljs$core$async41139",-994980973,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41143","meta41143",-1102028930,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41142.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41142.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41142";

cljs.core.async.t_cljs$core$async41142.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async41142");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41142 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41142(map_LT___$1,f__$1,ch__$1,meta41140__$1,___$2,fn1__$1,meta41143){
return (new cljs.core.async.t_cljs$core$async41142(map_LT___$1,f__$1,ch__$1,meta41140__$1,___$2,fn1__$1,meta41143));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41142(self__.map_LT_,self__.f,self__.ch,self__.meta41140,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41139.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41140","meta41140",1983900491,null)], null);
});

cljs.core.async.t_cljs$core$async41139.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41139.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41139";

cljs.core.async.t_cljs$core$async41139.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async41139");
});

cljs.core.async.__GT_t_cljs$core$async41139 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41139(map_LT___$1,f__$1,ch__$1,meta41140){
return (new cljs.core.async.t_cljs$core$async41139(map_LT___$1,f__$1,ch__$1,meta41140));
});

}

return (new cljs.core.async.t_cljs$core$async41139(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41148 = (function (map_GT_,f,ch,meta41149){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41149 = meta41149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41150,meta41149__$1){
var self__ = this;
var _41150__$1 = this;
return (new cljs.core.async.t_cljs$core$async41148(self__.map_GT_,self__.f,self__.ch,meta41149__$1));
});

cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41150){
var self__ = this;
var _41150__$1 = this;
return self__.meta41149;
});

cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41148.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41149","meta41149",-12283243,null)], null);
});

cljs.core.async.t_cljs$core$async41148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41148";

cljs.core.async.t_cljs$core$async41148.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async41148");
});

cljs.core.async.__GT_t_cljs$core$async41148 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41148(map_GT___$1,f__$1,ch__$1,meta41149){
return (new cljs.core.async.t_cljs$core$async41148(map_GT___$1,f__$1,ch__$1,meta41149));
});

}

return (new cljs.core.async.t_cljs$core$async41148(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41154 = (function (filter_GT_,p,ch,meta41155){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41155 = meta41155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41156,meta41155__$1){
var self__ = this;
var _41156__$1 = this;
return (new cljs.core.async.t_cljs$core$async41154(self__.filter_GT_,self__.p,self__.ch,meta41155__$1));
});

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41156){
var self__ = this;
var _41156__$1 = this;
return self__.meta41155;
});

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41154.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41155","meta41155",-2136815621,null)], null);
});

cljs.core.async.t_cljs$core$async41154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41154";

cljs.core.async.t_cljs$core$async41154.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async41154");
});

cljs.core.async.__GT_t_cljs$core$async41154 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41154(filter_GT___$1,p__$1,ch__$1,meta41155){
return (new cljs.core.async.t_cljs$core$async41154(filter_GT___$1,p__$1,ch__$1,meta41155));
});

}

return (new cljs.core.async.t_cljs$core$async41154(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args41157 = [];
var len__19784__auto___41201 = arguments.length;
var i__19785__auto___41202 = (0);
while(true){
if((i__19785__auto___41202 < len__19784__auto___41201)){
args41157.push((arguments[i__19785__auto___41202]));

var G__41203 = (i__19785__auto___41202 + (1));
i__19785__auto___41202 = G__41203;
continue;
} else {
}
break;
}

var G__41159 = args41157.length;
switch (G__41159) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41157.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38071__auto___41205 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___41205,out){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___41205,out){
return (function (state_41180){
var state_val_41181 = (state_41180[(1)]);
if((state_val_41181 === (7))){
var inst_41176 = (state_41180[(2)]);
var state_41180__$1 = state_41180;
var statearr_41182_41206 = state_41180__$1;
(statearr_41182_41206[(2)] = inst_41176);

(statearr_41182_41206[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (1))){
var state_41180__$1 = state_41180;
var statearr_41183_41207 = state_41180__$1;
(statearr_41183_41207[(2)] = null);

(statearr_41183_41207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (4))){
var inst_41162 = (state_41180[(7)]);
var inst_41162__$1 = (state_41180[(2)]);
var inst_41163 = (inst_41162__$1 == null);
var state_41180__$1 = (function (){var statearr_41184 = state_41180;
(statearr_41184[(7)] = inst_41162__$1);

return statearr_41184;
})();
if(cljs.core.truth_(inst_41163)){
var statearr_41185_41208 = state_41180__$1;
(statearr_41185_41208[(1)] = (5));

} else {
var statearr_41186_41209 = state_41180__$1;
(statearr_41186_41209[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (6))){
var inst_41162 = (state_41180[(7)]);
var inst_41167 = p.call(null,inst_41162);
var state_41180__$1 = state_41180;
if(cljs.core.truth_(inst_41167)){
var statearr_41187_41210 = state_41180__$1;
(statearr_41187_41210[(1)] = (8));

} else {
var statearr_41188_41211 = state_41180__$1;
(statearr_41188_41211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (3))){
var inst_41178 = (state_41180[(2)]);
var state_41180__$1 = state_41180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41180__$1,inst_41178);
} else {
if((state_val_41181 === (2))){
var state_41180__$1 = state_41180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41180__$1,(4),ch);
} else {
if((state_val_41181 === (11))){
var inst_41170 = (state_41180[(2)]);
var state_41180__$1 = state_41180;
var statearr_41189_41212 = state_41180__$1;
(statearr_41189_41212[(2)] = inst_41170);

(statearr_41189_41212[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (9))){
var state_41180__$1 = state_41180;
var statearr_41190_41213 = state_41180__$1;
(statearr_41190_41213[(2)] = null);

(statearr_41190_41213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (5))){
var inst_41165 = cljs.core.async.close_BANG_.call(null,out);
var state_41180__$1 = state_41180;
var statearr_41191_41214 = state_41180__$1;
(statearr_41191_41214[(2)] = inst_41165);

(statearr_41191_41214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (10))){
var inst_41173 = (state_41180[(2)]);
var state_41180__$1 = (function (){var statearr_41192 = state_41180;
(statearr_41192[(8)] = inst_41173);

return statearr_41192;
})();
var statearr_41193_41215 = state_41180__$1;
(statearr_41193_41215[(2)] = null);

(statearr_41193_41215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41181 === (8))){
var inst_41162 = (state_41180[(7)]);
var state_41180__$1 = state_41180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41180__$1,(11),out,inst_41162);
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
});})(c__38071__auto___41205,out))
;
return ((function (switch__37506__auto__,c__38071__auto___41205,out){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_41197 = [null,null,null,null,null,null,null,null,null];
(statearr_41197[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_41197[(1)] = (1));

return statearr_41197;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_41180){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_41180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e41198){if((e41198 instanceof Object)){
var ex__37511__auto__ = e41198;
var statearr_41199_41216 = state_41180;
(statearr_41199_41216[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41217 = state_41180;
state_41180 = G__41217;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_41180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_41180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___41205,out))
})();
var state__38073__auto__ = (function (){var statearr_41200 = f__38072__auto__.call(null);
(statearr_41200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___41205);

return statearr_41200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___41205,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41218 = [];
var len__19784__auto___41221 = arguments.length;
var i__19785__auto___41222 = (0);
while(true){
if((i__19785__auto___41222 < len__19784__auto___41221)){
args41218.push((arguments[i__19785__auto___41222]));

var G__41223 = (i__19785__auto___41222 + (1));
i__19785__auto___41222 = G__41223;
continue;
} else {
}
break;
}

var G__41220 = args41218.length;
switch (G__41220) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41218.length)].join('')));

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
var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__){
return (function (state_41390){
var state_val_41391 = (state_41390[(1)]);
if((state_val_41391 === (7))){
var inst_41386 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41392_41433 = state_41390__$1;
(statearr_41392_41433[(2)] = inst_41386);

(statearr_41392_41433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (20))){
var inst_41356 = (state_41390[(7)]);
var inst_41367 = (state_41390[(2)]);
var inst_41368 = cljs.core.next.call(null,inst_41356);
var inst_41342 = inst_41368;
var inst_41343 = null;
var inst_41344 = (0);
var inst_41345 = (0);
var state_41390__$1 = (function (){var statearr_41393 = state_41390;
(statearr_41393[(8)] = inst_41344);

(statearr_41393[(9)] = inst_41367);

(statearr_41393[(10)] = inst_41345);

(statearr_41393[(11)] = inst_41343);

(statearr_41393[(12)] = inst_41342);

return statearr_41393;
})();
var statearr_41394_41434 = state_41390__$1;
(statearr_41394_41434[(2)] = null);

(statearr_41394_41434[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (1))){
var state_41390__$1 = state_41390;
var statearr_41395_41435 = state_41390__$1;
(statearr_41395_41435[(2)] = null);

(statearr_41395_41435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (4))){
var inst_41331 = (state_41390[(13)]);
var inst_41331__$1 = (state_41390[(2)]);
var inst_41332 = (inst_41331__$1 == null);
var state_41390__$1 = (function (){var statearr_41396 = state_41390;
(statearr_41396[(13)] = inst_41331__$1);

return statearr_41396;
})();
if(cljs.core.truth_(inst_41332)){
var statearr_41397_41436 = state_41390__$1;
(statearr_41397_41436[(1)] = (5));

} else {
var statearr_41398_41437 = state_41390__$1;
(statearr_41398_41437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (15))){
var state_41390__$1 = state_41390;
var statearr_41402_41438 = state_41390__$1;
(statearr_41402_41438[(2)] = null);

(statearr_41402_41438[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (21))){
var state_41390__$1 = state_41390;
var statearr_41403_41439 = state_41390__$1;
(statearr_41403_41439[(2)] = null);

(statearr_41403_41439[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (13))){
var inst_41344 = (state_41390[(8)]);
var inst_41345 = (state_41390[(10)]);
var inst_41343 = (state_41390[(11)]);
var inst_41342 = (state_41390[(12)]);
var inst_41352 = (state_41390[(2)]);
var inst_41353 = (inst_41345 + (1));
var tmp41399 = inst_41344;
var tmp41400 = inst_41343;
var tmp41401 = inst_41342;
var inst_41342__$1 = tmp41401;
var inst_41343__$1 = tmp41400;
var inst_41344__$1 = tmp41399;
var inst_41345__$1 = inst_41353;
var state_41390__$1 = (function (){var statearr_41404 = state_41390;
(statearr_41404[(8)] = inst_41344__$1);

(statearr_41404[(14)] = inst_41352);

(statearr_41404[(10)] = inst_41345__$1);

(statearr_41404[(11)] = inst_41343__$1);

(statearr_41404[(12)] = inst_41342__$1);

return statearr_41404;
})();
var statearr_41405_41440 = state_41390__$1;
(statearr_41405_41440[(2)] = null);

(statearr_41405_41440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (22))){
var state_41390__$1 = state_41390;
var statearr_41406_41441 = state_41390__$1;
(statearr_41406_41441[(2)] = null);

(statearr_41406_41441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (6))){
var inst_41331 = (state_41390[(13)]);
var inst_41340 = f.call(null,inst_41331);
var inst_41341 = cljs.core.seq.call(null,inst_41340);
var inst_41342 = inst_41341;
var inst_41343 = null;
var inst_41344 = (0);
var inst_41345 = (0);
var state_41390__$1 = (function (){var statearr_41407 = state_41390;
(statearr_41407[(8)] = inst_41344);

(statearr_41407[(10)] = inst_41345);

(statearr_41407[(11)] = inst_41343);

(statearr_41407[(12)] = inst_41342);

return statearr_41407;
})();
var statearr_41408_41442 = state_41390__$1;
(statearr_41408_41442[(2)] = null);

(statearr_41408_41442[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (17))){
var inst_41356 = (state_41390[(7)]);
var inst_41360 = cljs.core.chunk_first.call(null,inst_41356);
var inst_41361 = cljs.core.chunk_rest.call(null,inst_41356);
var inst_41362 = cljs.core.count.call(null,inst_41360);
var inst_41342 = inst_41361;
var inst_41343 = inst_41360;
var inst_41344 = inst_41362;
var inst_41345 = (0);
var state_41390__$1 = (function (){var statearr_41409 = state_41390;
(statearr_41409[(8)] = inst_41344);

(statearr_41409[(10)] = inst_41345);

(statearr_41409[(11)] = inst_41343);

(statearr_41409[(12)] = inst_41342);

return statearr_41409;
})();
var statearr_41410_41443 = state_41390__$1;
(statearr_41410_41443[(2)] = null);

(statearr_41410_41443[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (3))){
var inst_41388 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41390__$1,inst_41388);
} else {
if((state_val_41391 === (12))){
var inst_41376 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41411_41444 = state_41390__$1;
(statearr_41411_41444[(2)] = inst_41376);

(statearr_41411_41444[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (2))){
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41390__$1,(4),in$);
} else {
if((state_val_41391 === (23))){
var inst_41384 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41412_41445 = state_41390__$1;
(statearr_41412_41445[(2)] = inst_41384);

(statearr_41412_41445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (19))){
var inst_41371 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41413_41446 = state_41390__$1;
(statearr_41413_41446[(2)] = inst_41371);

(statearr_41413_41446[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (11))){
var inst_41356 = (state_41390[(7)]);
var inst_41342 = (state_41390[(12)]);
var inst_41356__$1 = cljs.core.seq.call(null,inst_41342);
var state_41390__$1 = (function (){var statearr_41414 = state_41390;
(statearr_41414[(7)] = inst_41356__$1);

return statearr_41414;
})();
if(inst_41356__$1){
var statearr_41415_41447 = state_41390__$1;
(statearr_41415_41447[(1)] = (14));

} else {
var statearr_41416_41448 = state_41390__$1;
(statearr_41416_41448[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (9))){
var inst_41378 = (state_41390[(2)]);
var inst_41379 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41390__$1 = (function (){var statearr_41417 = state_41390;
(statearr_41417[(15)] = inst_41378);

return statearr_41417;
})();
if(cljs.core.truth_(inst_41379)){
var statearr_41418_41449 = state_41390__$1;
(statearr_41418_41449[(1)] = (21));

} else {
var statearr_41419_41450 = state_41390__$1;
(statearr_41419_41450[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (5))){
var inst_41334 = cljs.core.async.close_BANG_.call(null,out);
var state_41390__$1 = state_41390;
var statearr_41420_41451 = state_41390__$1;
(statearr_41420_41451[(2)] = inst_41334);

(statearr_41420_41451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (14))){
var inst_41356 = (state_41390[(7)]);
var inst_41358 = cljs.core.chunked_seq_QMARK_.call(null,inst_41356);
var state_41390__$1 = state_41390;
if(inst_41358){
var statearr_41421_41452 = state_41390__$1;
(statearr_41421_41452[(1)] = (17));

} else {
var statearr_41422_41453 = state_41390__$1;
(statearr_41422_41453[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (16))){
var inst_41374 = (state_41390[(2)]);
var state_41390__$1 = state_41390;
var statearr_41423_41454 = state_41390__$1;
(statearr_41423_41454[(2)] = inst_41374);

(statearr_41423_41454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41391 === (10))){
var inst_41345 = (state_41390[(10)]);
var inst_41343 = (state_41390[(11)]);
var inst_41350 = cljs.core._nth.call(null,inst_41343,inst_41345);
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41390__$1,(13),out,inst_41350);
} else {
if((state_val_41391 === (18))){
var inst_41356 = (state_41390[(7)]);
var inst_41365 = cljs.core.first.call(null,inst_41356);
var state_41390__$1 = state_41390;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41390__$1,(20),out,inst_41365);
} else {
if((state_val_41391 === (8))){
var inst_41344 = (state_41390[(8)]);
var inst_41345 = (state_41390[(10)]);
var inst_41347 = (inst_41345 < inst_41344);
var inst_41348 = inst_41347;
var state_41390__$1 = state_41390;
if(cljs.core.truth_(inst_41348)){
var statearr_41424_41455 = state_41390__$1;
(statearr_41424_41455[(1)] = (10));

} else {
var statearr_41425_41456 = state_41390__$1;
(statearr_41425_41456[(1)] = (11));

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
});})(c__38071__auto__))
;
return ((function (switch__37506__auto__,c__38071__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37508__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37508__auto____0 = (function (){
var statearr_41429 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41429[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37508__auto__);

(statearr_41429[(1)] = (1));

return statearr_41429;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37508__auto____1 = (function (state_41390){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_41390);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e41430){if((e41430 instanceof Object)){
var ex__37511__auto__ = e41430;
var statearr_41431_41457 = state_41390;
(statearr_41431_41457[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41390);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41458 = state_41390;
state_41390 = G__41458;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37508__auto__ = function(state_41390){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37508__auto____1.call(this,state_41390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37508__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37508__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__))
})();
var state__38073__auto__ = (function (){var statearr_41432 = f__38072__auto__.call(null);
(statearr_41432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_41432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__))
);

return c__38071__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args41459 = [];
var len__19784__auto___41462 = arguments.length;
var i__19785__auto___41463 = (0);
while(true){
if((i__19785__auto___41463 < len__19784__auto___41462)){
args41459.push((arguments[i__19785__auto___41463]));

var G__41464 = (i__19785__auto___41463 + (1));
i__19785__auto___41463 = G__41464;
continue;
} else {
}
break;
}

var G__41461 = args41459.length;
switch (G__41461) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41459.length)].join('')));

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
var args41466 = [];
var len__19784__auto___41469 = arguments.length;
var i__19785__auto___41470 = (0);
while(true){
if((i__19785__auto___41470 < len__19784__auto___41469)){
args41466.push((arguments[i__19785__auto___41470]));

var G__41471 = (i__19785__auto___41470 + (1));
i__19785__auto___41470 = G__41471;
continue;
} else {
}
break;
}

var G__41468 = args41466.length;
switch (G__41468) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41466.length)].join('')));

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
var args41473 = [];
var len__19784__auto___41524 = arguments.length;
var i__19785__auto___41525 = (0);
while(true){
if((i__19785__auto___41525 < len__19784__auto___41524)){
args41473.push((arguments[i__19785__auto___41525]));

var G__41526 = (i__19785__auto___41525 + (1));
i__19785__auto___41525 = G__41526;
continue;
} else {
}
break;
}

var G__41475 = args41473.length;
switch (G__41475) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41473.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38071__auto___41528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___41528,out){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___41528,out){
return (function (state_41499){
var state_val_41500 = (state_41499[(1)]);
if((state_val_41500 === (7))){
var inst_41494 = (state_41499[(2)]);
var state_41499__$1 = state_41499;
var statearr_41501_41529 = state_41499__$1;
(statearr_41501_41529[(2)] = inst_41494);

(statearr_41501_41529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41500 === (1))){
var inst_41476 = null;
var state_41499__$1 = (function (){var statearr_41502 = state_41499;
(statearr_41502[(7)] = inst_41476);

return statearr_41502;
})();
var statearr_41503_41530 = state_41499__$1;
(statearr_41503_41530[(2)] = null);

(statearr_41503_41530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41500 === (4))){
var inst_41479 = (state_41499[(8)]);
var inst_41479__$1 = (state_41499[(2)]);
var inst_41480 = (inst_41479__$1 == null);
var inst_41481 = cljs.core.not.call(null,inst_41480);
var state_41499__$1 = (function (){var statearr_41504 = state_41499;
(statearr_41504[(8)] = inst_41479__$1);

return statearr_41504;
})();
if(inst_41481){
var statearr_41505_41531 = state_41499__$1;
(statearr_41505_41531[(1)] = (5));

} else {
var statearr_41506_41532 = state_41499__$1;
(statearr_41506_41532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41500 === (6))){
var state_41499__$1 = state_41499;
var statearr_41507_41533 = state_41499__$1;
(statearr_41507_41533[(2)] = null);

(statearr_41507_41533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41500 === (3))){
var inst_41496 = (state_41499[(2)]);
var inst_41497 = cljs.core.async.close_BANG_.call(null,out);
var state_41499__$1 = (function (){var statearr_41508 = state_41499;
(statearr_41508[(9)] = inst_41496);

return statearr_41508;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41499__$1,inst_41497);
} else {
if((state_val_41500 === (2))){
var state_41499__$1 = state_41499;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41499__$1,(4),ch);
} else {
if((state_val_41500 === (11))){
var inst_41479 = (state_41499[(8)]);
var inst_41488 = (state_41499[(2)]);
var inst_41476 = inst_41479;
var state_41499__$1 = (function (){var statearr_41509 = state_41499;
(statearr_41509[(7)] = inst_41476);

(statearr_41509[(10)] = inst_41488);

return statearr_41509;
})();
var statearr_41510_41534 = state_41499__$1;
(statearr_41510_41534[(2)] = null);

(statearr_41510_41534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41500 === (9))){
var inst_41479 = (state_41499[(8)]);
var state_41499__$1 = state_41499;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41499__$1,(11),out,inst_41479);
} else {
if((state_val_41500 === (5))){
var inst_41479 = (state_41499[(8)]);
var inst_41476 = (state_41499[(7)]);
var inst_41483 = cljs.core._EQ_.call(null,inst_41479,inst_41476);
var state_41499__$1 = state_41499;
if(inst_41483){
var statearr_41512_41535 = state_41499__$1;
(statearr_41512_41535[(1)] = (8));

} else {
var statearr_41513_41536 = state_41499__$1;
(statearr_41513_41536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41500 === (10))){
var inst_41491 = (state_41499[(2)]);
var state_41499__$1 = state_41499;
var statearr_41514_41537 = state_41499__$1;
(statearr_41514_41537[(2)] = inst_41491);

(statearr_41514_41537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41500 === (8))){
var inst_41476 = (state_41499[(7)]);
var tmp41511 = inst_41476;
var inst_41476__$1 = tmp41511;
var state_41499__$1 = (function (){var statearr_41515 = state_41499;
(statearr_41515[(7)] = inst_41476__$1);

return statearr_41515;
})();
var statearr_41516_41538 = state_41499__$1;
(statearr_41516_41538[(2)] = null);

(statearr_41516_41538[(1)] = (2));


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
});})(c__38071__auto___41528,out))
;
return ((function (switch__37506__auto__,c__38071__auto___41528,out){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_41520 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41520[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_41520[(1)] = (1));

return statearr_41520;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_41499){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_41499);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e41521){if((e41521 instanceof Object)){
var ex__37511__auto__ = e41521;
var statearr_41522_41539 = state_41499;
(statearr_41522_41539[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41499);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41540 = state_41499;
state_41499 = G__41540;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_41499){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_41499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___41528,out))
})();
var state__38073__auto__ = (function (){var statearr_41523 = f__38072__auto__.call(null);
(statearr_41523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___41528);

return statearr_41523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___41528,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args41541 = [];
var len__19784__auto___41611 = arguments.length;
var i__19785__auto___41612 = (0);
while(true){
if((i__19785__auto___41612 < len__19784__auto___41611)){
args41541.push((arguments[i__19785__auto___41612]));

var G__41613 = (i__19785__auto___41612 + (1));
i__19785__auto___41612 = G__41613;
continue;
} else {
}
break;
}

var G__41543 = args41541.length;
switch (G__41543) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41541.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38071__auto___41615 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___41615,out){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___41615,out){
return (function (state_41581){
var state_val_41582 = (state_41581[(1)]);
if((state_val_41582 === (7))){
var inst_41577 = (state_41581[(2)]);
var state_41581__$1 = state_41581;
var statearr_41583_41616 = state_41581__$1;
(statearr_41583_41616[(2)] = inst_41577);

(statearr_41583_41616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (1))){
var inst_41544 = (new Array(n));
var inst_41545 = inst_41544;
var inst_41546 = (0);
var state_41581__$1 = (function (){var statearr_41584 = state_41581;
(statearr_41584[(7)] = inst_41546);

(statearr_41584[(8)] = inst_41545);

return statearr_41584;
})();
var statearr_41585_41617 = state_41581__$1;
(statearr_41585_41617[(2)] = null);

(statearr_41585_41617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (4))){
var inst_41549 = (state_41581[(9)]);
var inst_41549__$1 = (state_41581[(2)]);
var inst_41550 = (inst_41549__$1 == null);
var inst_41551 = cljs.core.not.call(null,inst_41550);
var state_41581__$1 = (function (){var statearr_41586 = state_41581;
(statearr_41586[(9)] = inst_41549__$1);

return statearr_41586;
})();
if(inst_41551){
var statearr_41587_41618 = state_41581__$1;
(statearr_41587_41618[(1)] = (5));

} else {
var statearr_41588_41619 = state_41581__$1;
(statearr_41588_41619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (15))){
var inst_41571 = (state_41581[(2)]);
var state_41581__$1 = state_41581;
var statearr_41589_41620 = state_41581__$1;
(statearr_41589_41620[(2)] = inst_41571);

(statearr_41589_41620[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (13))){
var state_41581__$1 = state_41581;
var statearr_41590_41621 = state_41581__$1;
(statearr_41590_41621[(2)] = null);

(statearr_41590_41621[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (6))){
var inst_41546 = (state_41581[(7)]);
var inst_41567 = (inst_41546 > (0));
var state_41581__$1 = state_41581;
if(cljs.core.truth_(inst_41567)){
var statearr_41591_41622 = state_41581__$1;
(statearr_41591_41622[(1)] = (12));

} else {
var statearr_41592_41623 = state_41581__$1;
(statearr_41592_41623[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (3))){
var inst_41579 = (state_41581[(2)]);
var state_41581__$1 = state_41581;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41581__$1,inst_41579);
} else {
if((state_val_41582 === (12))){
var inst_41545 = (state_41581[(8)]);
var inst_41569 = cljs.core.vec.call(null,inst_41545);
var state_41581__$1 = state_41581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41581__$1,(15),out,inst_41569);
} else {
if((state_val_41582 === (2))){
var state_41581__$1 = state_41581;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41581__$1,(4),ch);
} else {
if((state_val_41582 === (11))){
var inst_41561 = (state_41581[(2)]);
var inst_41562 = (new Array(n));
var inst_41545 = inst_41562;
var inst_41546 = (0);
var state_41581__$1 = (function (){var statearr_41593 = state_41581;
(statearr_41593[(7)] = inst_41546);

(statearr_41593[(8)] = inst_41545);

(statearr_41593[(10)] = inst_41561);

return statearr_41593;
})();
var statearr_41594_41624 = state_41581__$1;
(statearr_41594_41624[(2)] = null);

(statearr_41594_41624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (9))){
var inst_41545 = (state_41581[(8)]);
var inst_41559 = cljs.core.vec.call(null,inst_41545);
var state_41581__$1 = state_41581;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41581__$1,(11),out,inst_41559);
} else {
if((state_val_41582 === (5))){
var inst_41554 = (state_41581[(11)]);
var inst_41546 = (state_41581[(7)]);
var inst_41545 = (state_41581[(8)]);
var inst_41549 = (state_41581[(9)]);
var inst_41553 = (inst_41545[inst_41546] = inst_41549);
var inst_41554__$1 = (inst_41546 + (1));
var inst_41555 = (inst_41554__$1 < n);
var state_41581__$1 = (function (){var statearr_41595 = state_41581;
(statearr_41595[(11)] = inst_41554__$1);

(statearr_41595[(12)] = inst_41553);

return statearr_41595;
})();
if(cljs.core.truth_(inst_41555)){
var statearr_41596_41625 = state_41581__$1;
(statearr_41596_41625[(1)] = (8));

} else {
var statearr_41597_41626 = state_41581__$1;
(statearr_41597_41626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (14))){
var inst_41574 = (state_41581[(2)]);
var inst_41575 = cljs.core.async.close_BANG_.call(null,out);
var state_41581__$1 = (function (){var statearr_41599 = state_41581;
(statearr_41599[(13)] = inst_41574);

return statearr_41599;
})();
var statearr_41600_41627 = state_41581__$1;
(statearr_41600_41627[(2)] = inst_41575);

(statearr_41600_41627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (10))){
var inst_41565 = (state_41581[(2)]);
var state_41581__$1 = state_41581;
var statearr_41601_41628 = state_41581__$1;
(statearr_41601_41628[(2)] = inst_41565);

(statearr_41601_41628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41582 === (8))){
var inst_41554 = (state_41581[(11)]);
var inst_41545 = (state_41581[(8)]);
var tmp41598 = inst_41545;
var inst_41545__$1 = tmp41598;
var inst_41546 = inst_41554;
var state_41581__$1 = (function (){var statearr_41602 = state_41581;
(statearr_41602[(7)] = inst_41546);

(statearr_41602[(8)] = inst_41545__$1);

return statearr_41602;
})();
var statearr_41603_41629 = state_41581__$1;
(statearr_41603_41629[(2)] = null);

(statearr_41603_41629[(1)] = (2));


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
});})(c__38071__auto___41615,out))
;
return ((function (switch__37506__auto__,c__38071__auto___41615,out){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_41607 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41607[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_41607[(1)] = (1));

return statearr_41607;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_41581){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_41581);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e41608){if((e41608 instanceof Object)){
var ex__37511__auto__ = e41608;
var statearr_41609_41630 = state_41581;
(statearr_41609_41630[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41581);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41631 = state_41581;
state_41581 = G__41631;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_41581){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_41581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___41615,out))
})();
var state__38073__auto__ = (function (){var statearr_41610 = f__38072__auto__.call(null);
(statearr_41610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___41615);

return statearr_41610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___41615,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41632 = [];
var len__19784__auto___41706 = arguments.length;
var i__19785__auto___41707 = (0);
while(true){
if((i__19785__auto___41707 < len__19784__auto___41706)){
args41632.push((arguments[i__19785__auto___41707]));

var G__41708 = (i__19785__auto___41707 + (1));
i__19785__auto___41707 = G__41708;
continue;
} else {
}
break;
}

var G__41634 = args41632.length;
switch (G__41634) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41632.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38071__auto___41710 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___41710,out){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___41710,out){
return (function (state_41676){
var state_val_41677 = (state_41676[(1)]);
if((state_val_41677 === (7))){
var inst_41672 = (state_41676[(2)]);
var state_41676__$1 = state_41676;
var statearr_41678_41711 = state_41676__$1;
(statearr_41678_41711[(2)] = inst_41672);

(statearr_41678_41711[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (1))){
var inst_41635 = [];
var inst_41636 = inst_41635;
var inst_41637 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41676__$1 = (function (){var statearr_41679 = state_41676;
(statearr_41679[(7)] = inst_41636);

(statearr_41679[(8)] = inst_41637);

return statearr_41679;
})();
var statearr_41680_41712 = state_41676__$1;
(statearr_41680_41712[(2)] = null);

(statearr_41680_41712[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (4))){
var inst_41640 = (state_41676[(9)]);
var inst_41640__$1 = (state_41676[(2)]);
var inst_41641 = (inst_41640__$1 == null);
var inst_41642 = cljs.core.not.call(null,inst_41641);
var state_41676__$1 = (function (){var statearr_41681 = state_41676;
(statearr_41681[(9)] = inst_41640__$1);

return statearr_41681;
})();
if(inst_41642){
var statearr_41682_41713 = state_41676__$1;
(statearr_41682_41713[(1)] = (5));

} else {
var statearr_41683_41714 = state_41676__$1;
(statearr_41683_41714[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (15))){
var inst_41666 = (state_41676[(2)]);
var state_41676__$1 = state_41676;
var statearr_41684_41715 = state_41676__$1;
(statearr_41684_41715[(2)] = inst_41666);

(statearr_41684_41715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (13))){
var state_41676__$1 = state_41676;
var statearr_41685_41716 = state_41676__$1;
(statearr_41685_41716[(2)] = null);

(statearr_41685_41716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (6))){
var inst_41636 = (state_41676[(7)]);
var inst_41661 = inst_41636.length;
var inst_41662 = (inst_41661 > (0));
var state_41676__$1 = state_41676;
if(cljs.core.truth_(inst_41662)){
var statearr_41686_41717 = state_41676__$1;
(statearr_41686_41717[(1)] = (12));

} else {
var statearr_41687_41718 = state_41676__$1;
(statearr_41687_41718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (3))){
var inst_41674 = (state_41676[(2)]);
var state_41676__$1 = state_41676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41676__$1,inst_41674);
} else {
if((state_val_41677 === (12))){
var inst_41636 = (state_41676[(7)]);
var inst_41664 = cljs.core.vec.call(null,inst_41636);
var state_41676__$1 = state_41676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41676__$1,(15),out,inst_41664);
} else {
if((state_val_41677 === (2))){
var state_41676__$1 = state_41676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41676__$1,(4),ch);
} else {
if((state_val_41677 === (11))){
var inst_41644 = (state_41676[(10)]);
var inst_41640 = (state_41676[(9)]);
var inst_41654 = (state_41676[(2)]);
var inst_41655 = [];
var inst_41656 = inst_41655.push(inst_41640);
var inst_41636 = inst_41655;
var inst_41637 = inst_41644;
var state_41676__$1 = (function (){var statearr_41688 = state_41676;
(statearr_41688[(11)] = inst_41656);

(statearr_41688[(7)] = inst_41636);

(statearr_41688[(8)] = inst_41637);

(statearr_41688[(12)] = inst_41654);

return statearr_41688;
})();
var statearr_41689_41719 = state_41676__$1;
(statearr_41689_41719[(2)] = null);

(statearr_41689_41719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (9))){
var inst_41636 = (state_41676[(7)]);
var inst_41652 = cljs.core.vec.call(null,inst_41636);
var state_41676__$1 = state_41676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41676__$1,(11),out,inst_41652);
} else {
if((state_val_41677 === (5))){
var inst_41644 = (state_41676[(10)]);
var inst_41640 = (state_41676[(9)]);
var inst_41637 = (state_41676[(8)]);
var inst_41644__$1 = f.call(null,inst_41640);
var inst_41645 = cljs.core._EQ_.call(null,inst_41644__$1,inst_41637);
var inst_41646 = cljs.core.keyword_identical_QMARK_.call(null,inst_41637,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41647 = (inst_41645) || (inst_41646);
var state_41676__$1 = (function (){var statearr_41690 = state_41676;
(statearr_41690[(10)] = inst_41644__$1);

return statearr_41690;
})();
if(cljs.core.truth_(inst_41647)){
var statearr_41691_41720 = state_41676__$1;
(statearr_41691_41720[(1)] = (8));

} else {
var statearr_41692_41721 = state_41676__$1;
(statearr_41692_41721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (14))){
var inst_41669 = (state_41676[(2)]);
var inst_41670 = cljs.core.async.close_BANG_.call(null,out);
var state_41676__$1 = (function (){var statearr_41694 = state_41676;
(statearr_41694[(13)] = inst_41669);

return statearr_41694;
})();
var statearr_41695_41722 = state_41676__$1;
(statearr_41695_41722[(2)] = inst_41670);

(statearr_41695_41722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (10))){
var inst_41659 = (state_41676[(2)]);
var state_41676__$1 = state_41676;
var statearr_41696_41723 = state_41676__$1;
(statearr_41696_41723[(2)] = inst_41659);

(statearr_41696_41723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41677 === (8))){
var inst_41644 = (state_41676[(10)]);
var inst_41636 = (state_41676[(7)]);
var inst_41640 = (state_41676[(9)]);
var inst_41649 = inst_41636.push(inst_41640);
var tmp41693 = inst_41636;
var inst_41636__$1 = tmp41693;
var inst_41637 = inst_41644;
var state_41676__$1 = (function (){var statearr_41697 = state_41676;
(statearr_41697[(14)] = inst_41649);

(statearr_41697[(7)] = inst_41636__$1);

(statearr_41697[(8)] = inst_41637);

return statearr_41697;
})();
var statearr_41698_41724 = state_41676__$1;
(statearr_41698_41724[(2)] = null);

(statearr_41698_41724[(1)] = (2));


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
});})(c__38071__auto___41710,out))
;
return ((function (switch__37506__auto__,c__38071__auto___41710,out){
return (function() {
var cljs$core$async$state_machine__37508__auto__ = null;
var cljs$core$async$state_machine__37508__auto____0 = (function (){
var statearr_41702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41702[(0)] = cljs$core$async$state_machine__37508__auto__);

(statearr_41702[(1)] = (1));

return statearr_41702;
});
var cljs$core$async$state_machine__37508__auto____1 = (function (state_41676){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_41676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e41703){if((e41703 instanceof Object)){
var ex__37511__auto__ = e41703;
var statearr_41704_41725 = state_41676;
(statearr_41704_41725[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41726 = state_41676;
state_41676 = G__41726;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
cljs$core$async$state_machine__37508__auto__ = function(state_41676){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37508__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37508__auto____1.call(this,state_41676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37508__auto____0;
cljs$core$async$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37508__auto____1;
return cljs$core$async$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___41710,out))
})();
var state__38073__auto__ = (function (){var statearr_41705 = f__38072__auto__.call(null);
(statearr_41705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___41710);

return statearr_41705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___41710,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map