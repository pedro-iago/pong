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
var args22423 = [];
var len__18846__auto___22443 = arguments.length;
var i__18847__auto___22444 = (0);
while(true){
if((i__18847__auto___22444 < len__18846__auto___22443)){
args22423.push((arguments[i__18847__auto___22444]));

var G__22445 = (i__18847__auto___22444 + (1));
i__18847__auto___22444 = G__22445;
continue;
} else {
}
break;
}

var G__22427 = args22423.length;
switch (G__22427) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22423.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22430 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22430 = (function (f,blockable,meta22431){
this.f = f;
this.blockable = blockable;
this.meta22431 = meta22431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22432,meta22431__$1){
var self__ = this;
var _22432__$1 = this;
return (new cljs.core.async.t_cljs$core$async22430(self__.f,self__.blockable,meta22431__$1));
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22432){
var self__ = this;
var _22432__$1 = this;
return self__.meta22431;
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22430.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22431","meta22431",1833563350,null)], null);
});

cljs.core.async.t_cljs$core$async22430.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22430";

cljs.core.async.t_cljs$core$async22430.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async22430");
});

cljs.core.async.__GT_t_cljs$core$async22430 = (function cljs$core$async$__GT_t_cljs$core$async22430(f__$1,blockable__$1,meta22431){
return (new cljs.core.async.t_cljs$core$async22430(f__$1,blockable__$1,meta22431));
});

}

return (new cljs.core.async.t_cljs$core$async22430(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22497 = [];
var len__18846__auto___22511 = arguments.length;
var i__18847__auto___22512 = (0);
while(true){
if((i__18847__auto___22512 < len__18846__auto___22511)){
args22497.push((arguments[i__18847__auto___22512]));

var G__22513 = (i__18847__auto___22512 + (1));
i__18847__auto___22512 = G__22513;
continue;
} else {
}
break;
}

var G__22502 = args22497.length;
switch (G__22502) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22497.length)].join('')));

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
var args22522 = [];
var len__18846__auto___22528 = arguments.length;
var i__18847__auto___22529 = (0);
while(true){
if((i__18847__auto___22529 < len__18846__auto___22528)){
args22522.push((arguments[i__18847__auto___22529]));

var G__22532 = (i__18847__auto___22529 + (1));
i__18847__auto___22529 = G__22532;
continue;
} else {
}
break;
}

var G__22524 = args22522.length;
switch (G__22524) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22522.length)].join('')));

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
var args22547 = [];
var len__18846__auto___22562 = arguments.length;
var i__18847__auto___22563 = (0);
while(true){
if((i__18847__auto___22563 < len__18846__auto___22562)){
args22547.push((arguments[i__18847__auto___22563]));

var G__22564 = (i__18847__auto___22563 + (1));
i__18847__auto___22563 = G__22564;
continue;
} else {
}
break;
}

var G__22559 = args22547.length;
switch (G__22559) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22547.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22575 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22575);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22575,ret){
return (function (){
return fn1.call(null,val_22575);
});})(val_22575,ret))
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
var args22582 = [];
var len__18846__auto___22597 = arguments.length;
var i__18847__auto___22599 = (0);
while(true){
if((i__18847__auto___22599 < len__18846__auto___22597)){
args22582.push((arguments[i__18847__auto___22599]));

var G__22602 = (i__18847__auto___22599 + (1));
i__18847__auto___22599 = G__22602;
continue;
} else {
}
break;
}

var G__22589 = args22582.length;
switch (G__22589) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22582.length)].join('')));

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
var n__18691__auto___22620 = n;
var x_22621 = (0);
while(true){
if((x_22621 < n__18691__auto___22620)){
(a[x_22621] = (0));

var G__22624 = (x_22621 + (1));
x_22621 = G__22624;
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

var G__22626 = (i + (1));
i = G__22626;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22631 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22631 = (function (alt_flag,flag,meta22632){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22632 = meta22632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22633,meta22632__$1){
var self__ = this;
var _22633__$1 = this;
return (new cljs.core.async.t_cljs$core$async22631(self__.alt_flag,self__.flag,meta22632__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22631.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22633){
var self__ = this;
var _22633__$1 = this;
return self__.meta22632;
});})(flag))
;

cljs.core.async.t_cljs$core$async22631.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22631.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22632","meta22632",-1835742759,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22631.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22631";

cljs.core.async.t_cljs$core$async22631.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async22631");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22631 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22631(alt_flag__$1,flag__$1,meta22632){
return (new cljs.core.async.t_cljs$core$async22631(alt_flag__$1,flag__$1,meta22632));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22631(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22649 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22649 = (function (alt_handler,flag,cb,meta22650){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22650 = meta22650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22651,meta22650__$1){
var self__ = this;
var _22651__$1 = this;
return (new cljs.core.async.t_cljs$core$async22649(self__.alt_handler,self__.flag,self__.cb,meta22650__$1));
});

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22651){
var self__ = this;
var _22651__$1 = this;
return self__.meta22650;
});

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22650","meta22650",-997283352,null)], null);
});

cljs.core.async.t_cljs$core$async22649.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22649";

cljs.core.async.t_cljs$core$async22649.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async22649");
});

cljs.core.async.__GT_t_cljs$core$async22649 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22649(alt_handler__$1,flag__$1,cb__$1,meta22650){
return (new cljs.core.async.t_cljs$core$async22649(alt_handler__$1,flag__$1,cb__$1,meta22650));
});

}

return (new cljs.core.async.t_cljs$core$async22649(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22667_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22667_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22668_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22668_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__17788__auto__ = wport;
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22693 = (i + (1));
i = G__22693;
continue;
}
} else {
return null;
}
break;
}
})();
var or__17788__auto__ = ret;
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__17776__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__17776__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__17776__auto__;
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
var args__18853__auto__ = [];
var len__18846__auto___22728 = arguments.length;
var i__18847__auto___22730 = (0);
while(true){
if((i__18847__auto___22730 < len__18846__auto___22728)){
args__18853__auto__.push((arguments[i__18847__auto___22730]));

var G__22732 = (i__18847__auto___22730 + (1));
i__18847__auto___22730 = G__22732;
continue;
} else {
}
break;
}

var argseq__18854__auto__ = ((((1) < args__18853__auto__.length))?(new cljs.core.IndexedSeq(args__18853__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__18854__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22721){
var map__22722 = p__22721;
var map__22722__$1 = ((((!((map__22722 == null)))?((((map__22722.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22722.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22722):map__22722);
var opts = map__22722__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22709){
var G__22710 = cljs.core.first.call(null,seq22709);
var seq22709__$1 = cljs.core.next.call(null,seq22709);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22710,seq22709__$1);
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
var args22744 = [];
var len__18846__auto___22821 = arguments.length;
var i__18847__auto___22822 = (0);
while(true){
if((i__18847__auto___22822 < len__18846__auto___22821)){
args22744.push((arguments[i__18847__auto___22822]));

var G__22823 = (i__18847__auto___22822 + (1));
i__18847__auto___22822 = G__22823;
continue;
} else {
}
break;
}

var G__22748 = args22744.length;
switch (G__22748) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22744.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__22347__auto___22834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___22834){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___22834){
return (function (state_22783){
var state_val_22784 = (state_22783[(1)]);
if((state_val_22784 === (7))){
var inst_22777 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22792_22836 = state_22783__$1;
(statearr_22792_22836[(2)] = inst_22777);

(statearr_22792_22836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (1))){
var state_22783__$1 = state_22783;
var statearr_22793_22840 = state_22783__$1;
(statearr_22793_22840[(2)] = null);

(statearr_22793_22840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (4))){
var inst_22756 = (state_22783[(7)]);
var inst_22756__$1 = (state_22783[(2)]);
var inst_22758 = (inst_22756__$1 == null);
var state_22783__$1 = (function (){var statearr_22794 = state_22783;
(statearr_22794[(7)] = inst_22756__$1);

return statearr_22794;
})();
if(cljs.core.truth_(inst_22758)){
var statearr_22795_22846 = state_22783__$1;
(statearr_22795_22846[(1)] = (5));

} else {
var statearr_22796_22851 = state_22783__$1;
(statearr_22796_22851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (13))){
var state_22783__$1 = state_22783;
var statearr_22799_22852 = state_22783__$1;
(statearr_22799_22852[(2)] = null);

(statearr_22799_22852[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (6))){
var inst_22756 = (state_22783[(7)]);
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22783__$1,(11),to,inst_22756);
} else {
if((state_val_22784 === (3))){
var inst_22779 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22783__$1,inst_22779);
} else {
if((state_val_22784 === (12))){
var state_22783__$1 = state_22783;
var statearr_22801_22856 = state_22783__$1;
(statearr_22801_22856[(2)] = null);

(statearr_22801_22856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (2))){
var state_22783__$1 = state_22783;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22783__$1,(4),from);
} else {
if((state_val_22784 === (11))){
var inst_22769 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
if(cljs.core.truth_(inst_22769)){
var statearr_22802_22860 = state_22783__$1;
(statearr_22802_22860[(1)] = (12));

} else {
var statearr_22803_22861 = state_22783__$1;
(statearr_22803_22861[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (9))){
var state_22783__$1 = state_22783;
var statearr_22804_22864 = state_22783__$1;
(statearr_22804_22864[(2)] = null);

(statearr_22804_22864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (5))){
var state_22783__$1 = state_22783;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22805_22866 = state_22783__$1;
(statearr_22805_22866[(1)] = (8));

} else {
var statearr_22806_22867 = state_22783__$1;
(statearr_22806_22867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (14))){
var inst_22775 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22807_22868 = state_22783__$1;
(statearr_22807_22868[(2)] = inst_22775);

(statearr_22807_22868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (10))){
var inst_22766 = (state_22783[(2)]);
var state_22783__$1 = state_22783;
var statearr_22808_22869 = state_22783__$1;
(statearr_22808_22869[(2)] = inst_22766);

(statearr_22808_22869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22784 === (8))){
var inst_22762 = cljs.core.async.close_BANG_.call(null,to);
var state_22783__$1 = state_22783;
var statearr_22809_22873 = state_22783__$1;
(statearr_22809_22873[(2)] = inst_22762);

(statearr_22809_22873[(1)] = (10));


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
});})(c__22347__auto___22834))
;
return ((function (switch__22044__auto__,c__22347__auto___22834){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_22816 = [null,null,null,null,null,null,null,null];
(statearr_22816[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_22816[(1)] = (1));

return statearr_22816;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_22783){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_22783);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e22817){if((e22817 instanceof Object)){
var ex__22048__auto__ = e22817;
var statearr_22818_22880 = state_22783;
(statearr_22818_22880[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22783);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22881 = state_22783;
state_22783 = G__22881;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_22783){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_22783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___22834))
})();
var state__22349__auto__ = (function (){var statearr_22819 = f__22348__auto__.call(null);
(statearr_22819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___22834);

return statearr_22819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___22834))
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
return (function (p__23117){
var vec__23118 = p__23117;
var v = cljs.core.nth.call(null,vec__23118,(0),null);
var p = cljs.core.nth.call(null,vec__23118,(1),null);
var job = vec__23118;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22347__auto___23336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___23336,res,vec__23118,v,p,job,jobs,results){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___23336,res,vec__23118,v,p,job,jobs,results){
return (function (state_23123){
var state_val_23124 = (state_23123[(1)]);
if((state_val_23124 === (1))){
var state_23123__$1 = state_23123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23123__$1,(2),res,v);
} else {
if((state_val_23124 === (2))){
var inst_23120 = (state_23123[(2)]);
var inst_23121 = cljs.core.async.close_BANG_.call(null,res);
var state_23123__$1 = (function (){var statearr_23125 = state_23123;
(statearr_23125[(7)] = inst_23120);

return statearr_23125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23123__$1,inst_23121);
} else {
return null;
}
}
});})(c__22347__auto___23336,res,vec__23118,v,p,job,jobs,results))
;
return ((function (switch__22044__auto__,c__22347__auto___23336,res,vec__23118,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0 = (function (){
var statearr_23132 = [null,null,null,null,null,null,null,null];
(statearr_23132[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__);

(statearr_23132[(1)] = (1));

return statearr_23132;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1 = (function (state_23123){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23133){if((e23133 instanceof Object)){
var ex__22048__auto__ = e23133;
var statearr_23134_23342 = state_23123;
(statearr_23134_23342[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23347 = state_23123;
state_23123 = G__23347;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = function(state_23123){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1.call(this,state_23123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___23336,res,vec__23118,v,p,job,jobs,results))
})();
var state__22349__auto__ = (function (){var statearr_23135 = f__22348__auto__.call(null);
(statearr_23135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___23336);

return statearr_23135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___23336,res,vec__23118,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__23136){
var vec__23137 = p__23136;
var v = cljs.core.nth.call(null,vec__23137,(0),null);
var p = cljs.core.nth.call(null,vec__23137,(1),null);
var job = vec__23137;
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
var n__18691__auto___23359 = n;
var __23360 = (0);
while(true){
if((__23360 < n__18691__auto___23359)){
var G__23138_23361 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__23138_23361) {
case "compute":
var c__22347__auto___23363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23360,c__22347__auto___23363,G__23138_23361,n__18691__auto___23359,jobs,results,process,async){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (__23360,c__22347__auto___23363,G__23138_23361,n__18691__auto___23359,jobs,results,process,async){
return (function (state_23153){
var state_val_23154 = (state_23153[(1)]);
if((state_val_23154 === (1))){
var state_23153__$1 = state_23153;
var statearr_23156_23367 = state_23153__$1;
(statearr_23156_23367[(2)] = null);

(statearr_23156_23367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23154 === (2))){
var state_23153__$1 = state_23153;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23153__$1,(4),jobs);
} else {
if((state_val_23154 === (3))){
var inst_23151 = (state_23153[(2)]);
var state_23153__$1 = state_23153;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23153__$1,inst_23151);
} else {
if((state_val_23154 === (4))){
var inst_23142 = (state_23153[(2)]);
var inst_23143 = process.call(null,inst_23142);
var state_23153__$1 = state_23153;
if(cljs.core.truth_(inst_23143)){
var statearr_23157_23369 = state_23153__$1;
(statearr_23157_23369[(1)] = (5));

} else {
var statearr_23158_23370 = state_23153__$1;
(statearr_23158_23370[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23154 === (5))){
var state_23153__$1 = state_23153;
var statearr_23159_23373 = state_23153__$1;
(statearr_23159_23373[(2)] = null);

(statearr_23159_23373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23154 === (6))){
var state_23153__$1 = state_23153;
var statearr_23160_23377 = state_23153__$1;
(statearr_23160_23377[(2)] = null);

(statearr_23160_23377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23154 === (7))){
var inst_23149 = (state_23153[(2)]);
var state_23153__$1 = state_23153;
var statearr_23161_23378 = state_23153__$1;
(statearr_23161_23378[(2)] = inst_23149);

(statearr_23161_23378[(1)] = (3));


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
});})(__23360,c__22347__auto___23363,G__23138_23361,n__18691__auto___23359,jobs,results,process,async))
;
return ((function (__23360,switch__22044__auto__,c__22347__auto___23363,G__23138_23361,n__18691__auto___23359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0 = (function (){
var statearr_23165 = [null,null,null,null,null,null,null];
(statearr_23165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__);

(statearr_23165[(1)] = (1));

return statearr_23165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1 = (function (state_23153){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23153);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23166){if((e23166 instanceof Object)){
var ex__22048__auto__ = e23166;
var statearr_23167_23384 = state_23153;
(statearr_23167_23384[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23153);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23389 = state_23153;
state_23153 = G__23389;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = function(state_23153){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1.call(this,state_23153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__;
})()
;})(__23360,switch__22044__auto__,c__22347__auto___23363,G__23138_23361,n__18691__auto___23359,jobs,results,process,async))
})();
var state__22349__auto__ = (function (){var statearr_23171 = f__22348__auto__.call(null);
(statearr_23171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___23363);

return statearr_23171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(__23360,c__22347__auto___23363,G__23138_23361,n__18691__auto___23359,jobs,results,process,async))
);


break;
case "async":
var c__22347__auto___23396 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23360,c__22347__auto___23396,G__23138_23361,n__18691__auto___23359,jobs,results,process,async){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (__23360,c__22347__auto___23396,G__23138_23361,n__18691__auto___23359,jobs,results,process,async){
return (function (state_23184){
var state_val_23185 = (state_23184[(1)]);
if((state_val_23185 === (1))){
var state_23184__$1 = state_23184;
var statearr_23186_23412 = state_23184__$1;
(statearr_23186_23412[(2)] = null);

(statearr_23186_23412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (2))){
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23184__$1,(4),jobs);
} else {
if((state_val_23185 === (3))){
var inst_23182 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23184__$1,inst_23182);
} else {
if((state_val_23185 === (4))){
var inst_23174 = (state_23184[(2)]);
var inst_23175 = async.call(null,inst_23174);
var state_23184__$1 = state_23184;
if(cljs.core.truth_(inst_23175)){
var statearr_23188_23418 = state_23184__$1;
(statearr_23188_23418[(1)] = (5));

} else {
var statearr_23190_23419 = state_23184__$1;
(statearr_23190_23419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (5))){
var state_23184__$1 = state_23184;
var statearr_23192_23420 = state_23184__$1;
(statearr_23192_23420[(2)] = null);

(statearr_23192_23420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (6))){
var state_23184__$1 = state_23184;
var statearr_23194_23421 = state_23184__$1;
(statearr_23194_23421[(2)] = null);

(statearr_23194_23421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23185 === (7))){
var inst_23180 = (state_23184[(2)]);
var state_23184__$1 = state_23184;
var statearr_23195_23422 = state_23184__$1;
(statearr_23195_23422[(2)] = inst_23180);

(statearr_23195_23422[(1)] = (3));


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
});})(__23360,c__22347__auto___23396,G__23138_23361,n__18691__auto___23359,jobs,results,process,async))
;
return ((function (__23360,switch__22044__auto__,c__22347__auto___23396,G__23138_23361,n__18691__auto___23359,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0 = (function (){
var statearr_23203 = [null,null,null,null,null,null,null];
(statearr_23203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__);

(statearr_23203[(1)] = (1));

return statearr_23203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1 = (function (state_23184){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23205){if((e23205 instanceof Object)){
var ex__22048__auto__ = e23205;
var statearr_23206_23423 = state_23184;
(statearr_23206_23423[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23205;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23424 = state_23184;
state_23184 = G__23424;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = function(state_23184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1.call(this,state_23184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__;
})()
;})(__23360,switch__22044__auto__,c__22347__auto___23396,G__23138_23361,n__18691__auto___23359,jobs,results,process,async))
})();
var state__22349__auto__ = (function (){var statearr_23207 = f__22348__auto__.call(null);
(statearr_23207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___23396);

return statearr_23207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(__23360,c__22347__auto___23396,G__23138_23361,n__18691__auto___23359,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23425 = (__23360 + (1));
__23360 = G__23425;
continue;
} else {
}
break;
}

var c__22347__auto___23426 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___23426,jobs,results,process,async){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___23426,jobs,results,process,async){
return (function (state_23232){
var state_val_23233 = (state_23232[(1)]);
if((state_val_23233 === (1))){
var state_23232__$1 = state_23232;
var statearr_23234_23432 = state_23232__$1;
(statearr_23234_23432[(2)] = null);

(statearr_23234_23432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (2))){
var state_23232__$1 = state_23232;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23232__$1,(4),from);
} else {
if((state_val_23233 === (3))){
var inst_23230 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23232__$1,inst_23230);
} else {
if((state_val_23233 === (4))){
var inst_23211 = (state_23232[(7)]);
var inst_23211__$1 = (state_23232[(2)]);
var inst_23213 = (inst_23211__$1 == null);
var state_23232__$1 = (function (){var statearr_23235 = state_23232;
(statearr_23235[(7)] = inst_23211__$1);

return statearr_23235;
})();
if(cljs.core.truth_(inst_23213)){
var statearr_23236_23437 = state_23232__$1;
(statearr_23236_23437[(1)] = (5));

} else {
var statearr_23237_23438 = state_23232__$1;
(statearr_23237_23438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (5))){
var inst_23215 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23232__$1 = state_23232;
var statearr_23240_23443 = state_23232__$1;
(statearr_23240_23443[(2)] = inst_23215);

(statearr_23240_23443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (6))){
var inst_23217 = (state_23232[(8)]);
var inst_23211 = (state_23232[(7)]);
var inst_23217__$1 = cljs.core.async.chan.call(null,(1));
var inst_23219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_23220 = [inst_23211,inst_23217__$1];
var inst_23221 = (new cljs.core.PersistentVector(null,2,(5),inst_23219,inst_23220,null));
var state_23232__$1 = (function (){var statearr_23242 = state_23232;
(statearr_23242[(8)] = inst_23217__$1);

return statearr_23242;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23232__$1,(8),jobs,inst_23221);
} else {
if((state_val_23233 === (7))){
var inst_23228 = (state_23232[(2)]);
var state_23232__$1 = state_23232;
var statearr_23243_23447 = state_23232__$1;
(statearr_23243_23447[(2)] = inst_23228);

(statearr_23243_23447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23233 === (8))){
var inst_23217 = (state_23232[(8)]);
var inst_23223 = (state_23232[(2)]);
var state_23232__$1 = (function (){var statearr_23244 = state_23232;
(statearr_23244[(9)] = inst_23223);

return statearr_23244;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23232__$1,(9),results,inst_23217);
} else {
if((state_val_23233 === (9))){
var inst_23225 = (state_23232[(2)]);
var state_23232__$1 = (function (){var statearr_23245 = state_23232;
(statearr_23245[(10)] = inst_23225);

return statearr_23245;
})();
var statearr_23246_23452 = state_23232__$1;
(statearr_23246_23452[(2)] = null);

(statearr_23246_23452[(1)] = (2));


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
});})(c__22347__auto___23426,jobs,results,process,async))
;
return ((function (switch__22044__auto__,c__22347__auto___23426,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0 = (function (){
var statearr_23253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__);

(statearr_23253[(1)] = (1));

return statearr_23253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1 = (function (state_23232){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23232);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23254){if((e23254 instanceof Object)){
var ex__22048__auto__ = e23254;
var statearr_23255_23457 = state_23232;
(statearr_23255_23457[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23232);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23458 = state_23232;
state_23232 = G__23458;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = function(state_23232){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1.call(this,state_23232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___23426,jobs,results,process,async))
})();
var state__22349__auto__ = (function (){var statearr_23256 = f__22348__auto__.call(null);
(statearr_23256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___23426);

return statearr_23256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___23426,jobs,results,process,async))
);


var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__,jobs,results,process,async){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__,jobs,results,process,async){
return (function (state_23294){
var state_val_23295 = (state_23294[(1)]);
if((state_val_23295 === (7))){
var inst_23290 = (state_23294[(2)]);
var state_23294__$1 = state_23294;
var statearr_23297_23463 = state_23294__$1;
(statearr_23297_23463[(2)] = inst_23290);

(statearr_23297_23463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (20))){
var state_23294__$1 = state_23294;
var statearr_23299_23464 = state_23294__$1;
(statearr_23299_23464[(2)] = null);

(statearr_23299_23464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (1))){
var state_23294__$1 = state_23294;
var statearr_23300_23465 = state_23294__$1;
(statearr_23300_23465[(2)] = null);

(statearr_23300_23465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (4))){
var inst_23259 = (state_23294[(7)]);
var inst_23259__$1 = (state_23294[(2)]);
var inst_23260 = (inst_23259__$1 == null);
var state_23294__$1 = (function (){var statearr_23302 = state_23294;
(statearr_23302[(7)] = inst_23259__$1);

return statearr_23302;
})();
if(cljs.core.truth_(inst_23260)){
var statearr_23303_23470 = state_23294__$1;
(statearr_23303_23470[(1)] = (5));

} else {
var statearr_23304_23471 = state_23294__$1;
(statearr_23304_23471[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (15))){
var inst_23272 = (state_23294[(8)]);
var state_23294__$1 = state_23294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23294__$1,(18),to,inst_23272);
} else {
if((state_val_23295 === (21))){
var inst_23285 = (state_23294[(2)]);
var state_23294__$1 = state_23294;
var statearr_23305_23475 = state_23294__$1;
(statearr_23305_23475[(2)] = inst_23285);

(statearr_23305_23475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (13))){
var inst_23287 = (state_23294[(2)]);
var state_23294__$1 = (function (){var statearr_23306 = state_23294;
(statearr_23306[(9)] = inst_23287);

return statearr_23306;
})();
var statearr_23307_23477 = state_23294__$1;
(statearr_23307_23477[(2)] = null);

(statearr_23307_23477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (6))){
var inst_23259 = (state_23294[(7)]);
var state_23294__$1 = state_23294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23294__$1,(11),inst_23259);
} else {
if((state_val_23295 === (17))){
var inst_23280 = (state_23294[(2)]);
var state_23294__$1 = state_23294;
if(cljs.core.truth_(inst_23280)){
var statearr_23308_23481 = state_23294__$1;
(statearr_23308_23481[(1)] = (19));

} else {
var statearr_23309_23484 = state_23294__$1;
(statearr_23309_23484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (3))){
var inst_23292 = (state_23294[(2)]);
var state_23294__$1 = state_23294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23294__$1,inst_23292);
} else {
if((state_val_23295 === (12))){
var inst_23269 = (state_23294[(10)]);
var state_23294__$1 = state_23294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23294__$1,(14),inst_23269);
} else {
if((state_val_23295 === (2))){
var state_23294__$1 = state_23294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23294__$1,(4),results);
} else {
if((state_val_23295 === (19))){
var state_23294__$1 = state_23294;
var statearr_23310_23487 = state_23294__$1;
(statearr_23310_23487[(2)] = null);

(statearr_23310_23487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (11))){
var inst_23269 = (state_23294[(2)]);
var state_23294__$1 = (function (){var statearr_23311 = state_23294;
(statearr_23311[(10)] = inst_23269);

return statearr_23311;
})();
var statearr_23312_23488 = state_23294__$1;
(statearr_23312_23488[(2)] = null);

(statearr_23312_23488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (9))){
var state_23294__$1 = state_23294;
var statearr_23313_23489 = state_23294__$1;
(statearr_23313_23489[(2)] = null);

(statearr_23313_23489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (5))){
var state_23294__$1 = state_23294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23314_23492 = state_23294__$1;
(statearr_23314_23492[(1)] = (8));

} else {
var statearr_23316_23494 = state_23294__$1;
(statearr_23316_23494[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (14))){
var inst_23274 = (state_23294[(11)]);
var inst_23272 = (state_23294[(8)]);
var inst_23272__$1 = (state_23294[(2)]);
var inst_23273 = (inst_23272__$1 == null);
var inst_23274__$1 = cljs.core.not.call(null,inst_23273);
var state_23294__$1 = (function (){var statearr_23318 = state_23294;
(statearr_23318[(11)] = inst_23274__$1);

(statearr_23318[(8)] = inst_23272__$1);

return statearr_23318;
})();
if(inst_23274__$1){
var statearr_23319_23495 = state_23294__$1;
(statearr_23319_23495[(1)] = (15));

} else {
var statearr_23320_23496 = state_23294__$1;
(statearr_23320_23496[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (16))){
var inst_23274 = (state_23294[(11)]);
var state_23294__$1 = state_23294;
var statearr_23322_23497 = state_23294__$1;
(statearr_23322_23497[(2)] = inst_23274);

(statearr_23322_23497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (10))){
var inst_23266 = (state_23294[(2)]);
var state_23294__$1 = state_23294;
var statearr_23323_23498 = state_23294__$1;
(statearr_23323_23498[(2)] = inst_23266);

(statearr_23323_23498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (18))){
var inst_23277 = (state_23294[(2)]);
var state_23294__$1 = state_23294;
var statearr_23324_23502 = state_23294__$1;
(statearr_23324_23502[(2)] = inst_23277);

(statearr_23324_23502[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23295 === (8))){
var inst_23263 = cljs.core.async.close_BANG_.call(null,to);
var state_23294__$1 = state_23294;
var statearr_23325_23503 = state_23294__$1;
(statearr_23325_23503[(2)] = inst_23263);

(statearr_23325_23503[(1)] = (10));


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
});})(c__22347__auto__,jobs,results,process,async))
;
return ((function (switch__22044__auto__,c__22347__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0 = (function (){
var statearr_23329 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__);

(statearr_23329[(1)] = (1));

return statearr_23329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1 = (function (state_23294){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23330){if((e23330 instanceof Object)){
var ex__22048__auto__ = e23330;
var statearr_23331_23509 = state_23294;
(statearr_23331_23509[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23512 = state_23294;
state_23294 = G__23512;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__ = function(state_23294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1.call(this,state_23294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22045__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__,jobs,results,process,async))
})();
var state__22349__auto__ = (function (){var statearr_23332 = f__22348__auto__.call(null);
(statearr_23332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_23332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__,jobs,results,process,async))
);

return c__22347__auto__;
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
var args23518 = [];
var len__18846__auto___23525 = arguments.length;
var i__18847__auto___23526 = (0);
while(true){
if((i__18847__auto___23526 < len__18846__auto___23525)){
args23518.push((arguments[i__18847__auto___23526]));

var G__23527 = (i__18847__auto___23526 + (1));
i__18847__auto___23526 = G__23527;
continue;
} else {
}
break;
}

var G__23520 = args23518.length;
switch (G__23520) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23518.length)].join('')));

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
var args23529 = [];
var len__18846__auto___23540 = arguments.length;
var i__18847__auto___23541 = (0);
while(true){
if((i__18847__auto___23541 < len__18846__auto___23540)){
args23529.push((arguments[i__18847__auto___23541]));

var G__23542 = (i__18847__auto___23541 + (1));
i__18847__auto___23541 = G__23542;
continue;
} else {
}
break;
}

var G__23538 = args23529.length;
switch (G__23538) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23529.length)].join('')));

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
var args23559 = [];
var len__18846__auto___23615 = arguments.length;
var i__18847__auto___23616 = (0);
while(true){
if((i__18847__auto___23616 < len__18846__auto___23615)){
args23559.push((arguments[i__18847__auto___23616]));

var G__23617 = (i__18847__auto___23616 + (1));
i__18847__auto___23616 = G__23617;
continue;
} else {
}
break;
}

var G__23564 = args23559.length;
switch (G__23564) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23559.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__22347__auto___23619 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___23619,tc,fc){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___23619,tc,fc){
return (function (state_23590){
var state_val_23591 = (state_23590[(1)]);
if((state_val_23591 === (7))){
var inst_23586 = (state_23590[(2)]);
var state_23590__$1 = state_23590;
var statearr_23592_23620 = state_23590__$1;
(statearr_23592_23620[(2)] = inst_23586);

(statearr_23592_23620[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (1))){
var state_23590__$1 = state_23590;
var statearr_23593_23621 = state_23590__$1;
(statearr_23593_23621[(2)] = null);

(statearr_23593_23621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (4))){
var inst_23567 = (state_23590[(7)]);
var inst_23567__$1 = (state_23590[(2)]);
var inst_23568 = (inst_23567__$1 == null);
var state_23590__$1 = (function (){var statearr_23594 = state_23590;
(statearr_23594[(7)] = inst_23567__$1);

return statearr_23594;
})();
if(cljs.core.truth_(inst_23568)){
var statearr_23595_23622 = state_23590__$1;
(statearr_23595_23622[(1)] = (5));

} else {
var statearr_23596_23623 = state_23590__$1;
(statearr_23596_23623[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (13))){
var state_23590__$1 = state_23590;
var statearr_23597_23624 = state_23590__$1;
(statearr_23597_23624[(2)] = null);

(statearr_23597_23624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (6))){
var inst_23567 = (state_23590[(7)]);
var inst_23573 = p.call(null,inst_23567);
var state_23590__$1 = state_23590;
if(cljs.core.truth_(inst_23573)){
var statearr_23598_23625 = state_23590__$1;
(statearr_23598_23625[(1)] = (9));

} else {
var statearr_23599_23626 = state_23590__$1;
(statearr_23599_23626[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (3))){
var inst_23588 = (state_23590[(2)]);
var state_23590__$1 = state_23590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23590__$1,inst_23588);
} else {
if((state_val_23591 === (12))){
var state_23590__$1 = state_23590;
var statearr_23600_23627 = state_23590__$1;
(statearr_23600_23627[(2)] = null);

(statearr_23600_23627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (2))){
var state_23590__$1 = state_23590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23590__$1,(4),ch);
} else {
if((state_val_23591 === (11))){
var inst_23567 = (state_23590[(7)]);
var inst_23577 = (state_23590[(2)]);
var state_23590__$1 = state_23590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23590__$1,(8),inst_23577,inst_23567);
} else {
if((state_val_23591 === (9))){
var state_23590__$1 = state_23590;
var statearr_23601_23628 = state_23590__$1;
(statearr_23601_23628[(2)] = tc);

(statearr_23601_23628[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (5))){
var inst_23570 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23571 = cljs.core.async.close_BANG_.call(null,fc);
var state_23590__$1 = (function (){var statearr_23602 = state_23590;
(statearr_23602[(8)] = inst_23570);

return statearr_23602;
})();
var statearr_23603_23629 = state_23590__$1;
(statearr_23603_23629[(2)] = inst_23571);

(statearr_23603_23629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (14))){
var inst_23584 = (state_23590[(2)]);
var state_23590__$1 = state_23590;
var statearr_23604_23630 = state_23590__$1;
(statearr_23604_23630[(2)] = inst_23584);

(statearr_23604_23630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (10))){
var state_23590__$1 = state_23590;
var statearr_23605_23631 = state_23590__$1;
(statearr_23605_23631[(2)] = fc);

(statearr_23605_23631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23591 === (8))){
var inst_23579 = (state_23590[(2)]);
var state_23590__$1 = state_23590;
if(cljs.core.truth_(inst_23579)){
var statearr_23606_23632 = state_23590__$1;
(statearr_23606_23632[(1)] = (12));

} else {
var statearr_23607_23633 = state_23590__$1;
(statearr_23607_23633[(1)] = (13));

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
});})(c__22347__auto___23619,tc,fc))
;
return ((function (switch__22044__auto__,c__22347__auto___23619,tc,fc){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_23611 = [null,null,null,null,null,null,null,null,null];
(statearr_23611[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_23611[(1)] = (1));

return statearr_23611;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_23590){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23612){if((e23612 instanceof Object)){
var ex__22048__auto__ = e23612;
var statearr_23613_23634 = state_23590;
(statearr_23613_23634[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23612;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23635 = state_23590;
state_23590 = G__23635;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_23590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_23590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___23619,tc,fc))
})();
var state__22349__auto__ = (function (){var statearr_23614 = f__22348__auto__.call(null);
(statearr_23614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___23619);

return statearr_23614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___23619,tc,fc))
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
var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__){
return (function (state_23706){
var state_val_23707 = (state_23706[(1)]);
if((state_val_23707 === (7))){
var inst_23702 = (state_23706[(2)]);
var state_23706__$1 = state_23706;
var statearr_23709_23743 = state_23706__$1;
(statearr_23709_23743[(2)] = inst_23702);

(statearr_23709_23743[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (1))){
var inst_23686 = init;
var state_23706__$1 = (function (){var statearr_23710 = state_23706;
(statearr_23710[(7)] = inst_23686);

return statearr_23710;
})();
var statearr_23712_23745 = state_23706__$1;
(statearr_23712_23745[(2)] = null);

(statearr_23712_23745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (4))){
var inst_23689 = (state_23706[(8)]);
var inst_23689__$1 = (state_23706[(2)]);
var inst_23690 = (inst_23689__$1 == null);
var state_23706__$1 = (function (){var statearr_23713 = state_23706;
(statearr_23713[(8)] = inst_23689__$1);

return statearr_23713;
})();
if(cljs.core.truth_(inst_23690)){
var statearr_23714_23748 = state_23706__$1;
(statearr_23714_23748[(1)] = (5));

} else {
var statearr_23715_23749 = state_23706__$1;
(statearr_23715_23749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (6))){
var inst_23693 = (state_23706[(9)]);
var inst_23686 = (state_23706[(7)]);
var inst_23689 = (state_23706[(8)]);
var inst_23693__$1 = f.call(null,inst_23686,inst_23689);
var inst_23694 = cljs.core.reduced_QMARK_.call(null,inst_23693__$1);
var state_23706__$1 = (function (){var statearr_23717 = state_23706;
(statearr_23717[(9)] = inst_23693__$1);

return statearr_23717;
})();
if(inst_23694){
var statearr_23718_23754 = state_23706__$1;
(statearr_23718_23754[(1)] = (8));

} else {
var statearr_23719_23755 = state_23706__$1;
(statearr_23719_23755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (3))){
var inst_23704 = (state_23706[(2)]);
var state_23706__$1 = state_23706;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23706__$1,inst_23704);
} else {
if((state_val_23707 === (2))){
var state_23706__$1 = state_23706;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23706__$1,(4),ch);
} else {
if((state_val_23707 === (9))){
var inst_23693 = (state_23706[(9)]);
var inst_23686 = inst_23693;
var state_23706__$1 = (function (){var statearr_23720 = state_23706;
(statearr_23720[(7)] = inst_23686);

return statearr_23720;
})();
var statearr_23722_23756 = state_23706__$1;
(statearr_23722_23756[(2)] = null);

(statearr_23722_23756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (5))){
var inst_23686 = (state_23706[(7)]);
var state_23706__$1 = state_23706;
var statearr_23724_23757 = state_23706__$1;
(statearr_23724_23757[(2)] = inst_23686);

(statearr_23724_23757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (10))){
var inst_23700 = (state_23706[(2)]);
var state_23706__$1 = state_23706;
var statearr_23726_23758 = state_23706__$1;
(statearr_23726_23758[(2)] = inst_23700);

(statearr_23726_23758[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23707 === (8))){
var inst_23693 = (state_23706[(9)]);
var inst_23696 = cljs.core.deref.call(null,inst_23693);
var state_23706__$1 = state_23706;
var statearr_23728_23759 = state_23706__$1;
(statearr_23728_23759[(2)] = inst_23696);

(statearr_23728_23759[(1)] = (10));


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
});})(c__22347__auto__))
;
return ((function (switch__22044__auto__,c__22347__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22045__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22045__auto____0 = (function (){
var statearr_23732 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23732[(0)] = cljs$core$async$reduce_$_state_machine__22045__auto__);

(statearr_23732[(1)] = (1));

return statearr_23732;
});
var cljs$core$async$reduce_$_state_machine__22045__auto____1 = (function (state_23706){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23706);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23733){if((e23733 instanceof Object)){
var ex__22048__auto__ = e23733;
var statearr_23734_23760 = state_23706;
(statearr_23734_23760[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23706);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23761 = state_23706;
state_23706 = G__23761;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22045__auto__ = function(state_23706){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22045__auto____1.call(this,state_23706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22045__auto____0;
cljs$core$async$reduce_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22045__auto____1;
return cljs$core$async$reduce_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__))
})();
var state__22349__auto__ = (function (){var statearr_23736 = f__22348__auto__.call(null);
(statearr_23736[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_23736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__))
);

return c__22347__auto__;
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
var args23762 = [];
var len__18846__auto___23814 = arguments.length;
var i__18847__auto___23815 = (0);
while(true){
if((i__18847__auto___23815 < len__18846__auto___23814)){
args23762.push((arguments[i__18847__auto___23815]));

var G__23816 = (i__18847__auto___23815 + (1));
i__18847__auto___23815 = G__23816;
continue;
} else {
}
break;
}

var G__23764 = args23762.length;
switch (G__23764) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23762.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__){
return (function (state_23789){
var state_val_23790 = (state_23789[(1)]);
if((state_val_23790 === (7))){
var inst_23771 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23791_23818 = state_23789__$1;
(statearr_23791_23818[(2)] = inst_23771);

(statearr_23791_23818[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (1))){
var inst_23765 = cljs.core.seq.call(null,coll);
var inst_23766 = inst_23765;
var state_23789__$1 = (function (){var statearr_23792 = state_23789;
(statearr_23792[(7)] = inst_23766);

return statearr_23792;
})();
var statearr_23793_23819 = state_23789__$1;
(statearr_23793_23819[(2)] = null);

(statearr_23793_23819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (4))){
var inst_23766 = (state_23789[(7)]);
var inst_23769 = cljs.core.first.call(null,inst_23766);
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23789__$1,(7),ch,inst_23769);
} else {
if((state_val_23790 === (13))){
var inst_23783 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23794_23820 = state_23789__$1;
(statearr_23794_23820[(2)] = inst_23783);

(statearr_23794_23820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (6))){
var inst_23774 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
if(cljs.core.truth_(inst_23774)){
var statearr_23795_23821 = state_23789__$1;
(statearr_23795_23821[(1)] = (8));

} else {
var statearr_23796_23822 = state_23789__$1;
(statearr_23796_23822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (3))){
var inst_23787 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23789__$1,inst_23787);
} else {
if((state_val_23790 === (12))){
var state_23789__$1 = state_23789;
var statearr_23797_23823 = state_23789__$1;
(statearr_23797_23823[(2)] = null);

(statearr_23797_23823[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (2))){
var inst_23766 = (state_23789[(7)]);
var state_23789__$1 = state_23789;
if(cljs.core.truth_(inst_23766)){
var statearr_23798_23824 = state_23789__$1;
(statearr_23798_23824[(1)] = (4));

} else {
var statearr_23799_23825 = state_23789__$1;
(statearr_23799_23825[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (11))){
var inst_23780 = cljs.core.async.close_BANG_.call(null,ch);
var state_23789__$1 = state_23789;
var statearr_23800_23826 = state_23789__$1;
(statearr_23800_23826[(2)] = inst_23780);

(statearr_23800_23826[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (9))){
var state_23789__$1 = state_23789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23801_23827 = state_23789__$1;
(statearr_23801_23827[(1)] = (11));

} else {
var statearr_23802_23828 = state_23789__$1;
(statearr_23802_23828[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (5))){
var inst_23766 = (state_23789[(7)]);
var state_23789__$1 = state_23789;
var statearr_23803_23829 = state_23789__$1;
(statearr_23803_23829[(2)] = inst_23766);

(statearr_23803_23829[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (10))){
var inst_23785 = (state_23789[(2)]);
var state_23789__$1 = state_23789;
var statearr_23804_23830 = state_23789__$1;
(statearr_23804_23830[(2)] = inst_23785);

(statearr_23804_23830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23790 === (8))){
var inst_23766 = (state_23789[(7)]);
var inst_23776 = cljs.core.next.call(null,inst_23766);
var inst_23766__$1 = inst_23776;
var state_23789__$1 = (function (){var statearr_23805 = state_23789;
(statearr_23805[(7)] = inst_23766__$1);

return statearr_23805;
})();
var statearr_23806_23831 = state_23789__$1;
(statearr_23806_23831[(2)] = null);

(statearr_23806_23831[(1)] = (2));


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
});})(c__22347__auto__))
;
return ((function (switch__22044__auto__,c__22347__auto__){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_23810 = [null,null,null,null,null,null,null,null];
(statearr_23810[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_23810[(1)] = (1));

return statearr_23810;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_23789){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_23789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e23811){if((e23811 instanceof Object)){
var ex__22048__auto__ = e23811;
var statearr_23812_23832 = state_23789;
(statearr_23812_23832[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23833 = state_23789;
state_23789 = G__23833;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_23789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_23789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__))
})();
var state__22349__auto__ = (function (){var statearr_23813 = f__22348__auto__.call(null);
(statearr_23813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_23813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__))
);

return c__22347__auto__;
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
var x__18443__auto__ = (((_ == null))?null:_);
var m__18444__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,_);
} else {
var m__18444__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,_);
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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18444__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m,ch);
} else {
var m__18444__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m,ch);
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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m);
} else {
var m__18444__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async24115 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24115 = (function (mult,ch,cs,meta24116){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta24116 = meta24116;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24117,meta24116__$1){
var self__ = this;
var _24117__$1 = this;
return (new cljs.core.async.t_cljs$core$async24115(self__.mult,self__.ch,self__.cs,meta24116__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24117){
var self__ = this;
var _24117__$1 = this;
return self__.meta24116;
});})(cs))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24115.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async24115.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta24116","meta24116",-129899139,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async24115.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24115.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24115";

cljs.core.async.t_cljs$core$async24115.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async24115");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async24115 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async24115(mult__$1,ch__$1,cs__$1,meta24116){
return (new cljs.core.async.t_cljs$core$async24115(mult__$1,ch__$1,cs__$1,meta24116));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async24115(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22347__auto___24375 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___24375,cs,m,dchan,dctr,done){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___24375,cs,m,dchan,dctr,done){
return (function (state_24252){
var state_val_24253 = (state_24252[(1)]);
if((state_val_24253 === (7))){
var inst_24248 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24254_24382 = state_24252__$1;
(statearr_24254_24382[(2)] = inst_24248);

(statearr_24254_24382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (20))){
var inst_24153 = (state_24252[(7)]);
var inst_24163 = cljs.core.first.call(null,inst_24153);
var inst_24164 = cljs.core.nth.call(null,inst_24163,(0),null);
var inst_24165 = cljs.core.nth.call(null,inst_24163,(1),null);
var state_24252__$1 = (function (){var statearr_24255 = state_24252;
(statearr_24255[(8)] = inst_24164);

return statearr_24255;
})();
if(cljs.core.truth_(inst_24165)){
var statearr_24256_24386 = state_24252__$1;
(statearr_24256_24386[(1)] = (22));

} else {
var statearr_24257_24387 = state_24252__$1;
(statearr_24257_24387[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (27))){
var inst_24124 = (state_24252[(9)]);
var inst_24195 = (state_24252[(10)]);
var inst_24200 = (state_24252[(11)]);
var inst_24193 = (state_24252[(12)]);
var inst_24200__$1 = cljs.core._nth.call(null,inst_24193,inst_24195);
var inst_24201 = cljs.core.async.put_BANG_.call(null,inst_24200__$1,inst_24124,done);
var state_24252__$1 = (function (){var statearr_24258 = state_24252;
(statearr_24258[(11)] = inst_24200__$1);

return statearr_24258;
})();
if(cljs.core.truth_(inst_24201)){
var statearr_24259_24390 = state_24252__$1;
(statearr_24259_24390[(1)] = (30));

} else {
var statearr_24260_24391 = state_24252__$1;
(statearr_24260_24391[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (1))){
var state_24252__$1 = state_24252;
var statearr_24261_24394 = state_24252__$1;
(statearr_24261_24394[(2)] = null);

(statearr_24261_24394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (24))){
var inst_24153 = (state_24252[(7)]);
var inst_24170 = (state_24252[(2)]);
var inst_24171 = cljs.core.next.call(null,inst_24153);
var inst_24133 = inst_24171;
var inst_24134 = null;
var inst_24135 = (0);
var inst_24136 = (0);
var state_24252__$1 = (function (){var statearr_24262 = state_24252;
(statearr_24262[(13)] = inst_24133);

(statearr_24262[(14)] = inst_24135);

(statearr_24262[(15)] = inst_24170);

(statearr_24262[(16)] = inst_24136);

(statearr_24262[(17)] = inst_24134);

return statearr_24262;
})();
var statearr_24263_24396 = state_24252__$1;
(statearr_24263_24396[(2)] = null);

(statearr_24263_24396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (39))){
var state_24252__$1 = state_24252;
var statearr_24267_24397 = state_24252__$1;
(statearr_24267_24397[(2)] = null);

(statearr_24267_24397[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (4))){
var inst_24124 = (state_24252[(9)]);
var inst_24124__$1 = (state_24252[(2)]);
var inst_24125 = (inst_24124__$1 == null);
var state_24252__$1 = (function (){var statearr_24268 = state_24252;
(statearr_24268[(9)] = inst_24124__$1);

return statearr_24268;
})();
if(cljs.core.truth_(inst_24125)){
var statearr_24269_24398 = state_24252__$1;
(statearr_24269_24398[(1)] = (5));

} else {
var statearr_24270_24399 = state_24252__$1;
(statearr_24270_24399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (15))){
var inst_24133 = (state_24252[(13)]);
var inst_24135 = (state_24252[(14)]);
var inst_24136 = (state_24252[(16)]);
var inst_24134 = (state_24252[(17)]);
var inst_24149 = (state_24252[(2)]);
var inst_24150 = (inst_24136 + (1));
var tmp24264 = inst_24133;
var tmp24265 = inst_24135;
var tmp24266 = inst_24134;
var inst_24133__$1 = tmp24264;
var inst_24134__$1 = tmp24266;
var inst_24135__$1 = tmp24265;
var inst_24136__$1 = inst_24150;
var state_24252__$1 = (function (){var statearr_24271 = state_24252;
(statearr_24271[(13)] = inst_24133__$1);

(statearr_24271[(14)] = inst_24135__$1);

(statearr_24271[(18)] = inst_24149);

(statearr_24271[(16)] = inst_24136__$1);

(statearr_24271[(17)] = inst_24134__$1);

return statearr_24271;
})();
var statearr_24272_24402 = state_24252__$1;
(statearr_24272_24402[(2)] = null);

(statearr_24272_24402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (21))){
var inst_24174 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24276_24403 = state_24252__$1;
(statearr_24276_24403[(2)] = inst_24174);

(statearr_24276_24403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (31))){
var inst_24200 = (state_24252[(11)]);
var inst_24204 = done.call(null,null);
var inst_24205 = cljs.core.async.untap_STAR_.call(null,m,inst_24200);
var state_24252__$1 = (function (){var statearr_24277 = state_24252;
(statearr_24277[(19)] = inst_24204);

return statearr_24277;
})();
var statearr_24278_24404 = state_24252__$1;
(statearr_24278_24404[(2)] = inst_24205);

(statearr_24278_24404[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (32))){
var inst_24195 = (state_24252[(10)]);
var inst_24194 = (state_24252[(20)]);
var inst_24192 = (state_24252[(21)]);
var inst_24193 = (state_24252[(12)]);
var inst_24207 = (state_24252[(2)]);
var inst_24208 = (inst_24195 + (1));
var tmp24273 = inst_24194;
var tmp24274 = inst_24192;
var tmp24275 = inst_24193;
var inst_24192__$1 = tmp24274;
var inst_24193__$1 = tmp24275;
var inst_24194__$1 = tmp24273;
var inst_24195__$1 = inst_24208;
var state_24252__$1 = (function (){var statearr_24279 = state_24252;
(statearr_24279[(10)] = inst_24195__$1);

(statearr_24279[(20)] = inst_24194__$1);

(statearr_24279[(22)] = inst_24207);

(statearr_24279[(21)] = inst_24192__$1);

(statearr_24279[(12)] = inst_24193__$1);

return statearr_24279;
})();
var statearr_24280_24412 = state_24252__$1;
(statearr_24280_24412[(2)] = null);

(statearr_24280_24412[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (40))){
var inst_24220 = (state_24252[(23)]);
var inst_24224 = done.call(null,null);
var inst_24225 = cljs.core.async.untap_STAR_.call(null,m,inst_24220);
var state_24252__$1 = (function (){var statearr_24281 = state_24252;
(statearr_24281[(24)] = inst_24224);

return statearr_24281;
})();
var statearr_24282_24420 = state_24252__$1;
(statearr_24282_24420[(2)] = inst_24225);

(statearr_24282_24420[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (33))){
var inst_24211 = (state_24252[(25)]);
var inst_24213 = cljs.core.chunked_seq_QMARK_.call(null,inst_24211);
var state_24252__$1 = state_24252;
if(inst_24213){
var statearr_24283_24423 = state_24252__$1;
(statearr_24283_24423[(1)] = (36));

} else {
var statearr_24284_24424 = state_24252__$1;
(statearr_24284_24424[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (13))){
var inst_24143 = (state_24252[(26)]);
var inst_24146 = cljs.core.async.close_BANG_.call(null,inst_24143);
var state_24252__$1 = state_24252;
var statearr_24285_24426 = state_24252__$1;
(statearr_24285_24426[(2)] = inst_24146);

(statearr_24285_24426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (22))){
var inst_24164 = (state_24252[(8)]);
var inst_24167 = cljs.core.async.close_BANG_.call(null,inst_24164);
var state_24252__$1 = state_24252;
var statearr_24286_24427 = state_24252__$1;
(statearr_24286_24427[(2)] = inst_24167);

(statearr_24286_24427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (36))){
var inst_24211 = (state_24252[(25)]);
var inst_24215 = cljs.core.chunk_first.call(null,inst_24211);
var inst_24216 = cljs.core.chunk_rest.call(null,inst_24211);
var inst_24217 = cljs.core.count.call(null,inst_24215);
var inst_24192 = inst_24216;
var inst_24193 = inst_24215;
var inst_24194 = inst_24217;
var inst_24195 = (0);
var state_24252__$1 = (function (){var statearr_24287 = state_24252;
(statearr_24287[(10)] = inst_24195);

(statearr_24287[(20)] = inst_24194);

(statearr_24287[(21)] = inst_24192);

(statearr_24287[(12)] = inst_24193);

return statearr_24287;
})();
var statearr_24288_24428 = state_24252__$1;
(statearr_24288_24428[(2)] = null);

(statearr_24288_24428[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (41))){
var inst_24211 = (state_24252[(25)]);
var inst_24227 = (state_24252[(2)]);
var inst_24228 = cljs.core.next.call(null,inst_24211);
var inst_24192 = inst_24228;
var inst_24193 = null;
var inst_24194 = (0);
var inst_24195 = (0);
var state_24252__$1 = (function (){var statearr_24289 = state_24252;
(statearr_24289[(10)] = inst_24195);

(statearr_24289[(27)] = inst_24227);

(statearr_24289[(20)] = inst_24194);

(statearr_24289[(21)] = inst_24192);

(statearr_24289[(12)] = inst_24193);

return statearr_24289;
})();
var statearr_24290_24429 = state_24252__$1;
(statearr_24290_24429[(2)] = null);

(statearr_24290_24429[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (43))){
var state_24252__$1 = state_24252;
var statearr_24291_24430 = state_24252__$1;
(statearr_24291_24430[(2)] = null);

(statearr_24291_24430[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (29))){
var inst_24236 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24292_24431 = state_24252__$1;
(statearr_24292_24431[(2)] = inst_24236);

(statearr_24292_24431[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (44))){
var inst_24245 = (state_24252[(2)]);
var state_24252__$1 = (function (){var statearr_24293 = state_24252;
(statearr_24293[(28)] = inst_24245);

return statearr_24293;
})();
var statearr_24294_24432 = state_24252__$1;
(statearr_24294_24432[(2)] = null);

(statearr_24294_24432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (6))){
var inst_24184 = (state_24252[(29)]);
var inst_24183 = cljs.core.deref.call(null,cs);
var inst_24184__$1 = cljs.core.keys.call(null,inst_24183);
var inst_24185 = cljs.core.count.call(null,inst_24184__$1);
var inst_24186 = cljs.core.reset_BANG_.call(null,dctr,inst_24185);
var inst_24191 = cljs.core.seq.call(null,inst_24184__$1);
var inst_24192 = inst_24191;
var inst_24193 = null;
var inst_24194 = (0);
var inst_24195 = (0);
var state_24252__$1 = (function (){var statearr_24295 = state_24252;
(statearr_24295[(29)] = inst_24184__$1);

(statearr_24295[(10)] = inst_24195);

(statearr_24295[(20)] = inst_24194);

(statearr_24295[(30)] = inst_24186);

(statearr_24295[(21)] = inst_24192);

(statearr_24295[(12)] = inst_24193);

return statearr_24295;
})();
var statearr_24296_24435 = state_24252__$1;
(statearr_24296_24435[(2)] = null);

(statearr_24296_24435[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (28))){
var inst_24211 = (state_24252[(25)]);
var inst_24192 = (state_24252[(21)]);
var inst_24211__$1 = cljs.core.seq.call(null,inst_24192);
var state_24252__$1 = (function (){var statearr_24297 = state_24252;
(statearr_24297[(25)] = inst_24211__$1);

return statearr_24297;
})();
if(inst_24211__$1){
var statearr_24298_24436 = state_24252__$1;
(statearr_24298_24436[(1)] = (33));

} else {
var statearr_24299_24437 = state_24252__$1;
(statearr_24299_24437[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (25))){
var inst_24195 = (state_24252[(10)]);
var inst_24194 = (state_24252[(20)]);
var inst_24197 = (inst_24195 < inst_24194);
var inst_24198 = inst_24197;
var state_24252__$1 = state_24252;
if(cljs.core.truth_(inst_24198)){
var statearr_24300_24443 = state_24252__$1;
(statearr_24300_24443[(1)] = (27));

} else {
var statearr_24301_24444 = state_24252__$1;
(statearr_24301_24444[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (34))){
var state_24252__$1 = state_24252;
var statearr_24302_24445 = state_24252__$1;
(statearr_24302_24445[(2)] = null);

(statearr_24302_24445[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (17))){
var state_24252__$1 = state_24252;
var statearr_24303_24446 = state_24252__$1;
(statearr_24303_24446[(2)] = null);

(statearr_24303_24446[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (3))){
var inst_24250 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24252__$1,inst_24250);
} else {
if((state_val_24253 === (12))){
var inst_24179 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24304_24454 = state_24252__$1;
(statearr_24304_24454[(2)] = inst_24179);

(statearr_24304_24454[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (2))){
var state_24252__$1 = state_24252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24252__$1,(4),ch);
} else {
if((state_val_24253 === (23))){
var state_24252__$1 = state_24252;
var statearr_24305_24457 = state_24252__$1;
(statearr_24305_24457[(2)] = null);

(statearr_24305_24457[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (35))){
var inst_24234 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24306_24458 = state_24252__$1;
(statearr_24306_24458[(2)] = inst_24234);

(statearr_24306_24458[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (19))){
var inst_24153 = (state_24252[(7)]);
var inst_24157 = cljs.core.chunk_first.call(null,inst_24153);
var inst_24158 = cljs.core.chunk_rest.call(null,inst_24153);
var inst_24159 = cljs.core.count.call(null,inst_24157);
var inst_24133 = inst_24158;
var inst_24134 = inst_24157;
var inst_24135 = inst_24159;
var inst_24136 = (0);
var state_24252__$1 = (function (){var statearr_24307 = state_24252;
(statearr_24307[(13)] = inst_24133);

(statearr_24307[(14)] = inst_24135);

(statearr_24307[(16)] = inst_24136);

(statearr_24307[(17)] = inst_24134);

return statearr_24307;
})();
var statearr_24308_24461 = state_24252__$1;
(statearr_24308_24461[(2)] = null);

(statearr_24308_24461[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (11))){
var inst_24133 = (state_24252[(13)]);
var inst_24153 = (state_24252[(7)]);
var inst_24153__$1 = cljs.core.seq.call(null,inst_24133);
var state_24252__$1 = (function (){var statearr_24309 = state_24252;
(statearr_24309[(7)] = inst_24153__$1);

return statearr_24309;
})();
if(inst_24153__$1){
var statearr_24310_24462 = state_24252__$1;
(statearr_24310_24462[(1)] = (16));

} else {
var statearr_24311_24463 = state_24252__$1;
(statearr_24311_24463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (9))){
var inst_24181 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24314_24465 = state_24252__$1;
(statearr_24314_24465[(2)] = inst_24181);

(statearr_24314_24465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (5))){
var inst_24131 = cljs.core.deref.call(null,cs);
var inst_24132 = cljs.core.seq.call(null,inst_24131);
var inst_24133 = inst_24132;
var inst_24134 = null;
var inst_24135 = (0);
var inst_24136 = (0);
var state_24252__$1 = (function (){var statearr_24315 = state_24252;
(statearr_24315[(13)] = inst_24133);

(statearr_24315[(14)] = inst_24135);

(statearr_24315[(16)] = inst_24136);

(statearr_24315[(17)] = inst_24134);

return statearr_24315;
})();
var statearr_24316_24467 = state_24252__$1;
(statearr_24316_24467[(2)] = null);

(statearr_24316_24467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (14))){
var state_24252__$1 = state_24252;
var statearr_24317_24468 = state_24252__$1;
(statearr_24317_24468[(2)] = null);

(statearr_24317_24468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (45))){
var inst_24242 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24318_24469 = state_24252__$1;
(statearr_24318_24469[(2)] = inst_24242);

(statearr_24318_24469[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (26))){
var inst_24184 = (state_24252[(29)]);
var inst_24238 = (state_24252[(2)]);
var inst_24239 = cljs.core.seq.call(null,inst_24184);
var state_24252__$1 = (function (){var statearr_24319 = state_24252;
(statearr_24319[(31)] = inst_24238);

return statearr_24319;
})();
if(inst_24239){
var statearr_24320_24472 = state_24252__$1;
(statearr_24320_24472[(1)] = (42));

} else {
var statearr_24321_24473 = state_24252__$1;
(statearr_24321_24473[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (16))){
var inst_24153 = (state_24252[(7)]);
var inst_24155 = cljs.core.chunked_seq_QMARK_.call(null,inst_24153);
var state_24252__$1 = state_24252;
if(inst_24155){
var statearr_24322_24474 = state_24252__$1;
(statearr_24322_24474[(1)] = (19));

} else {
var statearr_24323_24475 = state_24252__$1;
(statearr_24323_24475[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (38))){
var inst_24231 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24324_24476 = state_24252__$1;
(statearr_24324_24476[(2)] = inst_24231);

(statearr_24324_24476[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (30))){
var state_24252__$1 = state_24252;
var statearr_24325_24477 = state_24252__$1;
(statearr_24325_24477[(2)] = null);

(statearr_24325_24477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (10))){
var inst_24136 = (state_24252[(16)]);
var inst_24134 = (state_24252[(17)]);
var inst_24142 = cljs.core._nth.call(null,inst_24134,inst_24136);
var inst_24143 = cljs.core.nth.call(null,inst_24142,(0),null);
var inst_24144 = cljs.core.nth.call(null,inst_24142,(1),null);
var state_24252__$1 = (function (){var statearr_24330 = state_24252;
(statearr_24330[(26)] = inst_24143);

return statearr_24330;
})();
if(inst_24144){
var statearr_24332_24478 = state_24252__$1;
(statearr_24332_24478[(1)] = (13));

} else {
var statearr_24333_24479 = state_24252__$1;
(statearr_24333_24479[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (18))){
var inst_24177 = (state_24252[(2)]);
var state_24252__$1 = state_24252;
var statearr_24336_24480 = state_24252__$1;
(statearr_24336_24480[(2)] = inst_24177);

(statearr_24336_24480[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (42))){
var state_24252__$1 = state_24252;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24252__$1,(45),dchan);
} else {
if((state_val_24253 === (37))){
var inst_24211 = (state_24252[(25)]);
var inst_24220 = (state_24252[(23)]);
var inst_24124 = (state_24252[(9)]);
var inst_24220__$1 = cljs.core.first.call(null,inst_24211);
var inst_24221 = cljs.core.async.put_BANG_.call(null,inst_24220__$1,inst_24124,done);
var state_24252__$1 = (function (){var statearr_24339 = state_24252;
(statearr_24339[(23)] = inst_24220__$1);

return statearr_24339;
})();
if(inst_24221){
var statearr_24340_24483 = state_24252__$1;
(statearr_24340_24483[(1)] = (39));

} else {
var statearr_24342_24484 = state_24252__$1;
(statearr_24342_24484[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24253 === (8))){
var inst_24135 = (state_24252[(14)]);
var inst_24136 = (state_24252[(16)]);
var inst_24138 = (inst_24136 < inst_24135);
var inst_24139 = inst_24138;
var state_24252__$1 = state_24252;
if(inst_24139){
var statearr_24347_24485 = state_24252__$1;
(statearr_24347_24485[(1)] = (10));

} else {
var statearr_24348_24486 = state_24252__$1;
(statearr_24348_24486[(1)] = (11));

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
});})(c__22347__auto___24375,cs,m,dchan,dctr,done))
;
return ((function (switch__22044__auto__,c__22347__auto___24375,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22045__auto__ = null;
var cljs$core$async$mult_$_state_machine__22045__auto____0 = (function (){
var statearr_24355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24355[(0)] = cljs$core$async$mult_$_state_machine__22045__auto__);

(statearr_24355[(1)] = (1));

return statearr_24355;
});
var cljs$core$async$mult_$_state_machine__22045__auto____1 = (function (state_24252){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_24252);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e24357){if((e24357 instanceof Object)){
var ex__22048__auto__ = e24357;
var statearr_24358_24489 = state_24252;
(statearr_24358_24489[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24252);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24492 = state_24252;
state_24252 = G__24492;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22045__auto__ = function(state_24252){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22045__auto____1.call(this,state_24252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22045__auto____0;
cljs$core$async$mult_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22045__auto____1;
return cljs$core$async$mult_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___24375,cs,m,dchan,dctr,done))
})();
var state__22349__auto__ = (function (){var statearr_24359 = f__22348__auto__.call(null);
(statearr_24359[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___24375);

return statearr_24359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___24375,cs,m,dchan,dctr,done))
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
var args24497 = [];
var len__18846__auto___24504 = arguments.length;
var i__18847__auto___24505 = (0);
while(true){
if((i__18847__auto___24505 < len__18846__auto___24504)){
args24497.push((arguments[i__18847__auto___24505]));

var G__24506 = (i__18847__auto___24505 + (1));
i__18847__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var G__24499 = args24497.length;
switch (G__24499) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24497.length)].join('')));

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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m,ch);
} else {
var m__18444__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m,ch);
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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m,ch);
} else {
var m__18444__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m,ch);
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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m);
} else {
var m__18444__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m);
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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m,state_map);
} else {
var m__18444__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m,state_map);
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
var x__18443__auto__ = (((m == null))?null:m);
var m__18444__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,m,mode);
} else {
var m__18444__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__18853__auto__ = [];
var len__18846__auto___24520 = arguments.length;
var i__18847__auto___24521 = (0);
while(true){
if((i__18847__auto___24521 < len__18846__auto___24520)){
args__18853__auto__.push((arguments[i__18847__auto___24521]));

var G__24522 = (i__18847__auto___24521 + (1));
i__18847__auto___24521 = G__24522;
continue;
} else {
}
break;
}

var argseq__18854__auto__ = ((((3) < args__18853__auto__.length))?(new cljs.core.IndexedSeq(args__18853__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__18854__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24514){
var map__24515 = p__24514;
var map__24515__$1 = ((((!((map__24515 == null)))?((((map__24515.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24515.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24515):map__24515);
var opts = map__24515__$1;
var statearr_24517_24523 = state;
(statearr_24517_24523[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24515,map__24515__$1,opts){
return (function (val){
var statearr_24518_24524 = state;
(statearr_24518_24524[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24515,map__24515__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24519_24525 = state;
(statearr_24519_24525[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24508){
var G__24509 = cljs.core.first.call(null,seq24508);
var seq24508__$1 = cljs.core.next.call(null,seq24508);
var G__24510 = cljs.core.first.call(null,seq24508__$1);
var seq24508__$2 = cljs.core.next.call(null,seq24508__$1);
var G__24511 = cljs.core.first.call(null,seq24508__$2);
var seq24508__$3 = cljs.core.next.call(null,seq24508__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24509,G__24510,G__24511,seq24508__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24703 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24704){
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
this.meta24704 = meta24704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24705,meta24704__$1){
var self__ = this;
var _24705__$1 = this;
return (new cljs.core.async.t_cljs$core$async24703(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24704__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24705){
var self__ = this;
var _24705__$1 = this;
return self__.meta24704;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24703.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24704","meta24704",-873611832,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24703";

cljs.core.async.t_cljs$core$async24703.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async24703");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24703 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24704){
return (new cljs.core.async.t_cljs$core$async24703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24704));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24703(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22347__auto___24939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___24939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___24939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24804){
var state_val_24805 = (state_24804[(1)]);
if((state_val_24805 === (7))){
var inst_24722 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24806_24940 = state_24804__$1;
(statearr_24806_24940[(2)] = inst_24722);

(statearr_24806_24940[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (20))){
var inst_24734 = (state_24804[(7)]);
var state_24804__$1 = state_24804;
var statearr_24807_24941 = state_24804__$1;
(statearr_24807_24941[(2)] = inst_24734);

(statearr_24807_24941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (27))){
var state_24804__$1 = state_24804;
var statearr_24808_24942 = state_24804__$1;
(statearr_24808_24942[(2)] = null);

(statearr_24808_24942[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (1))){
var inst_24710 = (state_24804[(8)]);
var inst_24710__$1 = calc_state.call(null);
var inst_24712 = (inst_24710__$1 == null);
var inst_24713 = cljs.core.not.call(null,inst_24712);
var state_24804__$1 = (function (){var statearr_24809 = state_24804;
(statearr_24809[(8)] = inst_24710__$1);

return statearr_24809;
})();
if(inst_24713){
var statearr_24810_24943 = state_24804__$1;
(statearr_24810_24943[(1)] = (2));

} else {
var statearr_24811_24944 = state_24804__$1;
(statearr_24811_24944[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (24))){
var inst_24778 = (state_24804[(9)]);
var inst_24764 = (state_24804[(10)]);
var inst_24757 = (state_24804[(11)]);
var inst_24778__$1 = inst_24757.call(null,inst_24764);
var state_24804__$1 = (function (){var statearr_24812 = state_24804;
(statearr_24812[(9)] = inst_24778__$1);

return statearr_24812;
})();
if(cljs.core.truth_(inst_24778__$1)){
var statearr_24813_24945 = state_24804__$1;
(statearr_24813_24945[(1)] = (29));

} else {
var statearr_24814_24946 = state_24804__$1;
(statearr_24814_24946[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (4))){
var inst_24725 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24725)){
var statearr_24815_24947 = state_24804__$1;
(statearr_24815_24947[(1)] = (8));

} else {
var statearr_24816_24948 = state_24804__$1;
(statearr_24816_24948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (15))){
var inst_24751 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24751)){
var statearr_24817_24949 = state_24804__$1;
(statearr_24817_24949[(1)] = (19));

} else {
var statearr_24818_24950 = state_24804__$1;
(statearr_24818_24950[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (21))){
var inst_24756 = (state_24804[(12)]);
var inst_24756__$1 = (state_24804[(2)]);
var inst_24757 = cljs.core.get.call(null,inst_24756__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24758 = cljs.core.get.call(null,inst_24756__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24759 = cljs.core.get.call(null,inst_24756__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24804__$1 = (function (){var statearr_24819 = state_24804;
(statearr_24819[(13)] = inst_24758);

(statearr_24819[(12)] = inst_24756__$1);

(statearr_24819[(11)] = inst_24757);

return statearr_24819;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24804__$1,(22),inst_24759);
} else {
if((state_val_24805 === (31))){
var inst_24786 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24786)){
var statearr_24820_24951 = state_24804__$1;
(statearr_24820_24951[(1)] = (32));

} else {
var statearr_24821_24952 = state_24804__$1;
(statearr_24821_24952[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (32))){
var inst_24763 = (state_24804[(14)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24804__$1,(35),out,inst_24763);
} else {
if((state_val_24805 === (33))){
var inst_24756 = (state_24804[(12)]);
var inst_24734 = inst_24756;
var state_24804__$1 = (function (){var statearr_24822 = state_24804;
(statearr_24822[(7)] = inst_24734);

return statearr_24822;
})();
var statearr_24823_24953 = state_24804__$1;
(statearr_24823_24953[(2)] = null);

(statearr_24823_24953[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (13))){
var inst_24734 = (state_24804[(7)]);
var inst_24741 = inst_24734.cljs$lang$protocol_mask$partition0$;
var inst_24742 = (inst_24741 & (64));
var inst_24743 = inst_24734.cljs$core$ISeq$;
var inst_24744 = (inst_24742) || (inst_24743);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24744)){
var statearr_24824_24954 = state_24804__$1;
(statearr_24824_24954[(1)] = (16));

} else {
var statearr_24825_24955 = state_24804__$1;
(statearr_24825_24955[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (22))){
var inst_24763 = (state_24804[(14)]);
var inst_24764 = (state_24804[(10)]);
var inst_24762 = (state_24804[(2)]);
var inst_24763__$1 = cljs.core.nth.call(null,inst_24762,(0),null);
var inst_24764__$1 = cljs.core.nth.call(null,inst_24762,(1),null);
var inst_24765 = (inst_24763__$1 == null);
var inst_24766 = cljs.core._EQ_.call(null,inst_24764__$1,change);
var inst_24767 = (inst_24765) || (inst_24766);
var state_24804__$1 = (function (){var statearr_24826 = state_24804;
(statearr_24826[(14)] = inst_24763__$1);

(statearr_24826[(10)] = inst_24764__$1);

return statearr_24826;
})();
if(cljs.core.truth_(inst_24767)){
var statearr_24827_24956 = state_24804__$1;
(statearr_24827_24956[(1)] = (23));

} else {
var statearr_24828_24957 = state_24804__$1;
(statearr_24828_24957[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (36))){
var inst_24756 = (state_24804[(12)]);
var inst_24734 = inst_24756;
var state_24804__$1 = (function (){var statearr_24829 = state_24804;
(statearr_24829[(7)] = inst_24734);

return statearr_24829;
})();
var statearr_24830_24958 = state_24804__$1;
(statearr_24830_24958[(2)] = null);

(statearr_24830_24958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (29))){
var inst_24778 = (state_24804[(9)]);
var state_24804__$1 = state_24804;
var statearr_24831_24959 = state_24804__$1;
(statearr_24831_24959[(2)] = inst_24778);

(statearr_24831_24959[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (6))){
var state_24804__$1 = state_24804;
var statearr_24832_24960 = state_24804__$1;
(statearr_24832_24960[(2)] = false);

(statearr_24832_24960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (28))){
var inst_24774 = (state_24804[(2)]);
var inst_24775 = calc_state.call(null);
var inst_24734 = inst_24775;
var state_24804__$1 = (function (){var statearr_24833 = state_24804;
(statearr_24833[(15)] = inst_24774);

(statearr_24833[(7)] = inst_24734);

return statearr_24833;
})();
var statearr_24834_24961 = state_24804__$1;
(statearr_24834_24961[(2)] = null);

(statearr_24834_24961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (25))){
var inst_24800 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24835_24962 = state_24804__$1;
(statearr_24835_24962[(2)] = inst_24800);

(statearr_24835_24962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (34))){
var inst_24798 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24836_24963 = state_24804__$1;
(statearr_24836_24963[(2)] = inst_24798);

(statearr_24836_24963[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (17))){
var state_24804__$1 = state_24804;
var statearr_24837_24964 = state_24804__$1;
(statearr_24837_24964[(2)] = false);

(statearr_24837_24964[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (3))){
var state_24804__$1 = state_24804;
var statearr_24839_24965 = state_24804__$1;
(statearr_24839_24965[(2)] = false);

(statearr_24839_24965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (12))){
var inst_24802 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24804__$1,inst_24802);
} else {
if((state_val_24805 === (2))){
var inst_24710 = (state_24804[(8)]);
var inst_24715 = inst_24710.cljs$lang$protocol_mask$partition0$;
var inst_24716 = (inst_24715 & (64));
var inst_24717 = inst_24710.cljs$core$ISeq$;
var inst_24718 = (inst_24716) || (inst_24717);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24718)){
var statearr_24840_24966 = state_24804__$1;
(statearr_24840_24966[(1)] = (5));

} else {
var statearr_24842_24967 = state_24804__$1;
(statearr_24842_24967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (23))){
var inst_24763 = (state_24804[(14)]);
var inst_24769 = (inst_24763 == null);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24769)){
var statearr_24843_24968 = state_24804__$1;
(statearr_24843_24968[(1)] = (26));

} else {
var statearr_24844_24969 = state_24804__$1;
(statearr_24844_24969[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (35))){
var inst_24789 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
if(cljs.core.truth_(inst_24789)){
var statearr_24845_24970 = state_24804__$1;
(statearr_24845_24970[(1)] = (36));

} else {
var statearr_24846_24971 = state_24804__$1;
(statearr_24846_24971[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (19))){
var inst_24734 = (state_24804[(7)]);
var inst_24753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24734);
var state_24804__$1 = state_24804;
var statearr_24847_24972 = state_24804__$1;
(statearr_24847_24972[(2)] = inst_24753);

(statearr_24847_24972[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (11))){
var inst_24734 = (state_24804[(7)]);
var inst_24738 = (inst_24734 == null);
var inst_24739 = cljs.core.not.call(null,inst_24738);
var state_24804__$1 = state_24804;
if(inst_24739){
var statearr_24848_24973 = state_24804__$1;
(statearr_24848_24973[(1)] = (13));

} else {
var statearr_24849_24974 = state_24804__$1;
(statearr_24849_24974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (9))){
var inst_24710 = (state_24804[(8)]);
var state_24804__$1 = state_24804;
var statearr_24850_24975 = state_24804__$1;
(statearr_24850_24975[(2)] = inst_24710);

(statearr_24850_24975[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (5))){
var state_24804__$1 = state_24804;
var statearr_24851_24976 = state_24804__$1;
(statearr_24851_24976[(2)] = true);

(statearr_24851_24976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (14))){
var state_24804__$1 = state_24804;
var statearr_24852_24977 = state_24804__$1;
(statearr_24852_24977[(2)] = false);

(statearr_24852_24977[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (26))){
var inst_24764 = (state_24804[(10)]);
var inst_24771 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24764);
var state_24804__$1 = state_24804;
var statearr_24853_24978 = state_24804__$1;
(statearr_24853_24978[(2)] = inst_24771);

(statearr_24853_24978[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (16))){
var state_24804__$1 = state_24804;
var statearr_24854_24979 = state_24804__$1;
(statearr_24854_24979[(2)] = true);

(statearr_24854_24979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (38))){
var inst_24794 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24855_24980 = state_24804__$1;
(statearr_24855_24980[(2)] = inst_24794);

(statearr_24855_24980[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (30))){
var inst_24758 = (state_24804[(13)]);
var inst_24764 = (state_24804[(10)]);
var inst_24757 = (state_24804[(11)]);
var inst_24781 = cljs.core.empty_QMARK_.call(null,inst_24757);
var inst_24782 = inst_24758.call(null,inst_24764);
var inst_24783 = cljs.core.not.call(null,inst_24782);
var inst_24784 = (inst_24781) && (inst_24783);
var state_24804__$1 = state_24804;
var statearr_24856_24981 = state_24804__$1;
(statearr_24856_24981[(2)] = inst_24784);

(statearr_24856_24981[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (10))){
var inst_24710 = (state_24804[(8)]);
var inst_24730 = (state_24804[(2)]);
var inst_24731 = cljs.core.get.call(null,inst_24730,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24732 = cljs.core.get.call(null,inst_24730,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24733 = cljs.core.get.call(null,inst_24730,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24734 = inst_24710;
var state_24804__$1 = (function (){var statearr_24857 = state_24804;
(statearr_24857[(16)] = inst_24731);

(statearr_24857[(17)] = inst_24733);

(statearr_24857[(18)] = inst_24732);

(statearr_24857[(7)] = inst_24734);

return statearr_24857;
})();
var statearr_24858_24982 = state_24804__$1;
(statearr_24858_24982[(2)] = null);

(statearr_24858_24982[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (18))){
var inst_24748 = (state_24804[(2)]);
var state_24804__$1 = state_24804;
var statearr_24859_24983 = state_24804__$1;
(statearr_24859_24983[(2)] = inst_24748);

(statearr_24859_24983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (37))){
var state_24804__$1 = state_24804;
var statearr_24860_24984 = state_24804__$1;
(statearr_24860_24984[(2)] = null);

(statearr_24860_24984[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24805 === (8))){
var inst_24710 = (state_24804[(8)]);
var inst_24727 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24710);
var state_24804__$1 = state_24804;
var statearr_24861_24985 = state_24804__$1;
(statearr_24861_24985[(2)] = inst_24727);

(statearr_24861_24985[(1)] = (10));


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
});})(c__22347__auto___24939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22044__auto__,c__22347__auto___24939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22045__auto__ = null;
var cljs$core$async$mix_$_state_machine__22045__auto____0 = (function (){
var statearr_24865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24865[(0)] = cljs$core$async$mix_$_state_machine__22045__auto__);

(statearr_24865[(1)] = (1));

return statearr_24865;
});
var cljs$core$async$mix_$_state_machine__22045__auto____1 = (function (state_24804){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_24804);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e24866){if((e24866 instanceof Object)){
var ex__22048__auto__ = e24866;
var statearr_24867_24986 = state_24804;
(statearr_24867_24986[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24804);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24987 = state_24804;
state_24804 = G__24987;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22045__auto__ = function(state_24804){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22045__auto____1.call(this,state_24804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22045__auto____0;
cljs$core$async$mix_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22045__auto____1;
return cljs$core$async$mix_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___24939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22349__auto__ = (function (){var statearr_24868 = f__22348__auto__.call(null);
(statearr_24868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___24939);

return statearr_24868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___24939,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18443__auto__ = (((p == null))?null:p);
var m__18444__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18444__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__18443__auto__ = (((p == null))?null:p);
var m__18444__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,p,v,ch);
} else {
var m__18444__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args25012 = [];
var len__18846__auto___25017 = arguments.length;
var i__18847__auto___25018 = (0);
while(true){
if((i__18847__auto___25018 < len__18846__auto___25017)){
args25012.push((arguments[i__18847__auto___25018]));

var G__25019 = (i__18847__auto___25018 + (1));
i__18847__auto___25018 = G__25019;
continue;
} else {
}
break;
}

var G__25014 = args25012.length;
switch (G__25014) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25012.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18443__auto__ = (((p == null))?null:p);
var m__18444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,p);
} else {
var m__18444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,p);
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
var x__18443__auto__ = (((p == null))?null:p);
var m__18444__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18443__auto__)]);
if(!((m__18444__auto__ == null))){
return m__18444__auto__.call(null,p,v);
} else {
var m__18444__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18444__auto____$1 == null))){
return m__18444__auto____$1.call(null,p,v);
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
var args25024 = [];
var len__18846__auto___25149 = arguments.length;
var i__18847__auto___25150 = (0);
while(true){
if((i__18847__auto___25150 < len__18846__auto___25149)){
args25024.push((arguments[i__18847__auto___25150]));

var G__25151 = (i__18847__auto___25150 + (1));
i__18847__auto___25150 = G__25151;
continue;
} else {
}
break;
}

var G__25026 = args25024.length;
switch (G__25026) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25024.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__17788__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__17788__auto__,mults){
return (function (p1__25022_SHARP_){
if(cljs.core.truth_(p1__25022_SHARP_.call(null,topic))){
return p1__25022_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25022_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__17788__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25027 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25028){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25028 = meta25028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25029,meta25028__$1){
var self__ = this;
var _25029__$1 = this;
return (new cljs.core.async.t_cljs$core$async25027(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25028__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25029){
var self__ = this;
var _25029__$1 = this;
return self__.meta25028;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25027.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25027.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25028","meta25028",1606938527,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25027.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25027.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25027";

cljs.core.async.t_cljs$core$async25027.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async25027");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25027 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25028){
return (new cljs.core.async.t_cljs$core$async25027(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25028));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25027(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22347__auto___25168 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___25168,mults,ensure_mult,p){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___25168,mults,ensure_mult,p){
return (function (state_25101){
var state_val_25102 = (state_25101[(1)]);
if((state_val_25102 === (7))){
var inst_25097 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25103_25169 = state_25101__$1;
(statearr_25103_25169[(2)] = inst_25097);

(statearr_25103_25169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (20))){
var state_25101__$1 = state_25101;
var statearr_25104_25170 = state_25101__$1;
(statearr_25104_25170[(2)] = null);

(statearr_25104_25170[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (1))){
var state_25101__$1 = state_25101;
var statearr_25105_25171 = state_25101__$1;
(statearr_25105_25171[(2)] = null);

(statearr_25105_25171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (24))){
var inst_25080 = (state_25101[(7)]);
var inst_25089 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25080);
var state_25101__$1 = state_25101;
var statearr_25106_25172 = state_25101__$1;
(statearr_25106_25172[(2)] = inst_25089);

(statearr_25106_25172[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (4))){
var inst_25032 = (state_25101[(8)]);
var inst_25032__$1 = (state_25101[(2)]);
var inst_25033 = (inst_25032__$1 == null);
var state_25101__$1 = (function (){var statearr_25107 = state_25101;
(statearr_25107[(8)] = inst_25032__$1);

return statearr_25107;
})();
if(cljs.core.truth_(inst_25033)){
var statearr_25108_25173 = state_25101__$1;
(statearr_25108_25173[(1)] = (5));

} else {
var statearr_25109_25174 = state_25101__$1;
(statearr_25109_25174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (15))){
var inst_25074 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25110_25176 = state_25101__$1;
(statearr_25110_25176[(2)] = inst_25074);

(statearr_25110_25176[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (21))){
var inst_25094 = (state_25101[(2)]);
var state_25101__$1 = (function (){var statearr_25111 = state_25101;
(statearr_25111[(9)] = inst_25094);

return statearr_25111;
})();
var statearr_25112_25178 = state_25101__$1;
(statearr_25112_25178[(2)] = null);

(statearr_25112_25178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (13))){
var inst_25056 = (state_25101[(10)]);
var inst_25058 = cljs.core.chunked_seq_QMARK_.call(null,inst_25056);
var state_25101__$1 = state_25101;
if(inst_25058){
var statearr_25113_25179 = state_25101__$1;
(statearr_25113_25179[(1)] = (16));

} else {
var statearr_25114_25182 = state_25101__$1;
(statearr_25114_25182[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (22))){
var inst_25086 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
if(cljs.core.truth_(inst_25086)){
var statearr_25115_25186 = state_25101__$1;
(statearr_25115_25186[(1)] = (23));

} else {
var statearr_25116_25187 = state_25101__$1;
(statearr_25116_25187[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (6))){
var inst_25082 = (state_25101[(11)]);
var inst_25080 = (state_25101[(7)]);
var inst_25032 = (state_25101[(8)]);
var inst_25080__$1 = topic_fn.call(null,inst_25032);
var inst_25081 = cljs.core.deref.call(null,mults);
var inst_25082__$1 = cljs.core.get.call(null,inst_25081,inst_25080__$1);
var state_25101__$1 = (function (){var statearr_25117 = state_25101;
(statearr_25117[(11)] = inst_25082__$1);

(statearr_25117[(7)] = inst_25080__$1);

return statearr_25117;
})();
if(cljs.core.truth_(inst_25082__$1)){
var statearr_25118_25195 = state_25101__$1;
(statearr_25118_25195[(1)] = (19));

} else {
var statearr_25119_25196 = state_25101__$1;
(statearr_25119_25196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (25))){
var inst_25091 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25120_25198 = state_25101__$1;
(statearr_25120_25198[(2)] = inst_25091);

(statearr_25120_25198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (17))){
var inst_25056 = (state_25101[(10)]);
var inst_25065 = cljs.core.first.call(null,inst_25056);
var inst_25066 = cljs.core.async.muxch_STAR_.call(null,inst_25065);
var inst_25067 = cljs.core.async.close_BANG_.call(null,inst_25066);
var inst_25068 = cljs.core.next.call(null,inst_25056);
var inst_25042 = inst_25068;
var inst_25043 = null;
var inst_25044 = (0);
var inst_25045 = (0);
var state_25101__$1 = (function (){var statearr_25121 = state_25101;
(statearr_25121[(12)] = inst_25042);

(statearr_25121[(13)] = inst_25067);

(statearr_25121[(14)] = inst_25043);

(statearr_25121[(15)] = inst_25044);

(statearr_25121[(16)] = inst_25045);

return statearr_25121;
})();
var statearr_25122_25201 = state_25101__$1;
(statearr_25122_25201[(2)] = null);

(statearr_25122_25201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (3))){
var inst_25099 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25101__$1,inst_25099);
} else {
if((state_val_25102 === (12))){
var inst_25076 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25123_25202 = state_25101__$1;
(statearr_25123_25202[(2)] = inst_25076);

(statearr_25123_25202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (2))){
var state_25101__$1 = state_25101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25101__$1,(4),ch);
} else {
if((state_val_25102 === (23))){
var state_25101__$1 = state_25101;
var statearr_25124_25203 = state_25101__$1;
(statearr_25124_25203[(2)] = null);

(statearr_25124_25203[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (19))){
var inst_25082 = (state_25101[(11)]);
var inst_25032 = (state_25101[(8)]);
var inst_25084 = cljs.core.async.muxch_STAR_.call(null,inst_25082);
var state_25101__$1 = state_25101;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25101__$1,(22),inst_25084,inst_25032);
} else {
if((state_val_25102 === (11))){
var inst_25042 = (state_25101[(12)]);
var inst_25056 = (state_25101[(10)]);
var inst_25056__$1 = cljs.core.seq.call(null,inst_25042);
var state_25101__$1 = (function (){var statearr_25125 = state_25101;
(statearr_25125[(10)] = inst_25056__$1);

return statearr_25125;
})();
if(inst_25056__$1){
var statearr_25126_25204 = state_25101__$1;
(statearr_25126_25204[(1)] = (13));

} else {
var statearr_25127_25205 = state_25101__$1;
(statearr_25127_25205[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (9))){
var inst_25078 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25128_25206 = state_25101__$1;
(statearr_25128_25206[(2)] = inst_25078);

(statearr_25128_25206[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (5))){
var inst_25039 = cljs.core.deref.call(null,mults);
var inst_25040 = cljs.core.vals.call(null,inst_25039);
var inst_25041 = cljs.core.seq.call(null,inst_25040);
var inst_25042 = inst_25041;
var inst_25043 = null;
var inst_25044 = (0);
var inst_25045 = (0);
var state_25101__$1 = (function (){var statearr_25129 = state_25101;
(statearr_25129[(12)] = inst_25042);

(statearr_25129[(14)] = inst_25043);

(statearr_25129[(15)] = inst_25044);

(statearr_25129[(16)] = inst_25045);

return statearr_25129;
})();
var statearr_25130_25207 = state_25101__$1;
(statearr_25130_25207[(2)] = null);

(statearr_25130_25207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (14))){
var state_25101__$1 = state_25101;
var statearr_25134_25208 = state_25101__$1;
(statearr_25134_25208[(2)] = null);

(statearr_25134_25208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (16))){
var inst_25056 = (state_25101[(10)]);
var inst_25060 = cljs.core.chunk_first.call(null,inst_25056);
var inst_25061 = cljs.core.chunk_rest.call(null,inst_25056);
var inst_25062 = cljs.core.count.call(null,inst_25060);
var inst_25042 = inst_25061;
var inst_25043 = inst_25060;
var inst_25044 = inst_25062;
var inst_25045 = (0);
var state_25101__$1 = (function (){var statearr_25135 = state_25101;
(statearr_25135[(12)] = inst_25042);

(statearr_25135[(14)] = inst_25043);

(statearr_25135[(15)] = inst_25044);

(statearr_25135[(16)] = inst_25045);

return statearr_25135;
})();
var statearr_25136_25210 = state_25101__$1;
(statearr_25136_25210[(2)] = null);

(statearr_25136_25210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (10))){
var inst_25042 = (state_25101[(12)]);
var inst_25043 = (state_25101[(14)]);
var inst_25044 = (state_25101[(15)]);
var inst_25045 = (state_25101[(16)]);
var inst_25050 = cljs.core._nth.call(null,inst_25043,inst_25045);
var inst_25051 = cljs.core.async.muxch_STAR_.call(null,inst_25050);
var inst_25052 = cljs.core.async.close_BANG_.call(null,inst_25051);
var inst_25053 = (inst_25045 + (1));
var tmp25131 = inst_25042;
var tmp25132 = inst_25043;
var tmp25133 = inst_25044;
var inst_25042__$1 = tmp25131;
var inst_25043__$1 = tmp25132;
var inst_25044__$1 = tmp25133;
var inst_25045__$1 = inst_25053;
var state_25101__$1 = (function (){var statearr_25137 = state_25101;
(statearr_25137[(12)] = inst_25042__$1);

(statearr_25137[(17)] = inst_25052);

(statearr_25137[(14)] = inst_25043__$1);

(statearr_25137[(15)] = inst_25044__$1);

(statearr_25137[(16)] = inst_25045__$1);

return statearr_25137;
})();
var statearr_25138_25212 = state_25101__$1;
(statearr_25138_25212[(2)] = null);

(statearr_25138_25212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (18))){
var inst_25071 = (state_25101[(2)]);
var state_25101__$1 = state_25101;
var statearr_25139_25213 = state_25101__$1;
(statearr_25139_25213[(2)] = inst_25071);

(statearr_25139_25213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25102 === (8))){
var inst_25044 = (state_25101[(15)]);
var inst_25045 = (state_25101[(16)]);
var inst_25047 = (inst_25045 < inst_25044);
var inst_25048 = inst_25047;
var state_25101__$1 = state_25101;
if(cljs.core.truth_(inst_25048)){
var statearr_25140_25214 = state_25101__$1;
(statearr_25140_25214[(1)] = (10));

} else {
var statearr_25141_25215 = state_25101__$1;
(statearr_25141_25215[(1)] = (11));

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
});})(c__22347__auto___25168,mults,ensure_mult,p))
;
return ((function (switch__22044__auto__,c__22347__auto___25168,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_25145 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25145[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_25145[(1)] = (1));

return statearr_25145;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_25101){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25146){if((e25146 instanceof Object)){
var ex__22048__auto__ = e25146;
var statearr_25147_25216 = state_25101;
(statearr_25147_25216[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25217 = state_25101;
state_25101 = G__25217;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_25101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_25101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___25168,mults,ensure_mult,p))
})();
var state__22349__auto__ = (function (){var statearr_25148 = f__22348__auto__.call(null);
(statearr_25148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___25168);

return statearr_25148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___25168,mults,ensure_mult,p))
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
var args25218 = [];
var len__18846__auto___25221 = arguments.length;
var i__18847__auto___25222 = (0);
while(true){
if((i__18847__auto___25222 < len__18846__auto___25221)){
args25218.push((arguments[i__18847__auto___25222]));

var G__25223 = (i__18847__auto___25222 + (1));
i__18847__auto___25222 = G__25223;
continue;
} else {
}
break;
}

var G__25220 = args25218.length;
switch (G__25220) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25218.length)].join('')));

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
var args25225 = [];
var len__18846__auto___25228 = arguments.length;
var i__18847__auto___25229 = (0);
while(true){
if((i__18847__auto___25229 < len__18846__auto___25228)){
args25225.push((arguments[i__18847__auto___25229]));

var G__25230 = (i__18847__auto___25229 + (1));
i__18847__auto___25229 = G__25230;
continue;
} else {
}
break;
}

var G__25227 = args25225.length;
switch (G__25227) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25225.length)].join('')));

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
var args25232 = [];
var len__18846__auto___25303 = arguments.length;
var i__18847__auto___25304 = (0);
while(true){
if((i__18847__auto___25304 < len__18846__auto___25303)){
args25232.push((arguments[i__18847__auto___25304]));

var G__25305 = (i__18847__auto___25304 + (1));
i__18847__auto___25304 = G__25305;
continue;
} else {
}
break;
}

var G__25234 = args25232.length;
switch (G__25234) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25232.length)].join('')));

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
var c__22347__auto___25307 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___25307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___25307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25273){
var state_val_25274 = (state_25273[(1)]);
if((state_val_25274 === (7))){
var state_25273__$1 = state_25273;
var statearr_25275_25308 = state_25273__$1;
(statearr_25275_25308[(2)] = null);

(statearr_25275_25308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (1))){
var state_25273__$1 = state_25273;
var statearr_25276_25309 = state_25273__$1;
(statearr_25276_25309[(2)] = null);

(statearr_25276_25309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (4))){
var inst_25237 = (state_25273[(7)]);
var inst_25239 = (inst_25237 < cnt);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25239)){
var statearr_25277_25310 = state_25273__$1;
(statearr_25277_25310[(1)] = (6));

} else {
var statearr_25278_25311 = state_25273__$1;
(statearr_25278_25311[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (15))){
var inst_25269 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25279_25312 = state_25273__$1;
(statearr_25279_25312[(2)] = inst_25269);

(statearr_25279_25312[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (13))){
var inst_25262 = cljs.core.async.close_BANG_.call(null,out);
var state_25273__$1 = state_25273;
var statearr_25280_25313 = state_25273__$1;
(statearr_25280_25313[(2)] = inst_25262);

(statearr_25280_25313[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (6))){
var state_25273__$1 = state_25273;
var statearr_25281_25314 = state_25273__$1;
(statearr_25281_25314[(2)] = null);

(statearr_25281_25314[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (3))){
var inst_25271 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25273__$1,inst_25271);
} else {
if((state_val_25274 === (12))){
var inst_25259 = (state_25273[(8)]);
var inst_25259__$1 = (state_25273[(2)]);
var inst_25260 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25259__$1);
var state_25273__$1 = (function (){var statearr_25282 = state_25273;
(statearr_25282[(8)] = inst_25259__$1);

return statearr_25282;
})();
if(cljs.core.truth_(inst_25260)){
var statearr_25283_25315 = state_25273__$1;
(statearr_25283_25315[(1)] = (13));

} else {
var statearr_25284_25316 = state_25273__$1;
(statearr_25284_25316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (2))){
var inst_25236 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25237 = (0);
var state_25273__$1 = (function (){var statearr_25285 = state_25273;
(statearr_25285[(9)] = inst_25236);

(statearr_25285[(7)] = inst_25237);

return statearr_25285;
})();
var statearr_25286_25317 = state_25273__$1;
(statearr_25286_25317[(2)] = null);

(statearr_25286_25317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (11))){
var inst_25237 = (state_25273[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25273,(10),Object,null,(9));
var inst_25246 = chs__$1.call(null,inst_25237);
var inst_25247 = done.call(null,inst_25237);
var inst_25248 = cljs.core.async.take_BANG_.call(null,inst_25246,inst_25247);
var state_25273__$1 = state_25273;
var statearr_25287_25318 = state_25273__$1;
(statearr_25287_25318[(2)] = inst_25248);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (9))){
var inst_25237 = (state_25273[(7)]);
var inst_25250 = (state_25273[(2)]);
var inst_25251 = (inst_25237 + (1));
var inst_25237__$1 = inst_25251;
var state_25273__$1 = (function (){var statearr_25288 = state_25273;
(statearr_25288[(10)] = inst_25250);

(statearr_25288[(7)] = inst_25237__$1);

return statearr_25288;
})();
var statearr_25289_25319 = state_25273__$1;
(statearr_25289_25319[(2)] = null);

(statearr_25289_25319[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (5))){
var inst_25257 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25290 = state_25273;
(statearr_25290[(11)] = inst_25257);

return statearr_25290;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25273__$1,(12),dchan);
} else {
if((state_val_25274 === (14))){
var inst_25259 = (state_25273[(8)]);
var inst_25264 = cljs.core.apply.call(null,f,inst_25259);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25273__$1,(16),out,inst_25264);
} else {
if((state_val_25274 === (16))){
var inst_25266 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25291 = state_25273;
(statearr_25291[(12)] = inst_25266);

return statearr_25291;
})();
var statearr_25292_25320 = state_25273__$1;
(statearr_25292_25320[(2)] = null);

(statearr_25292_25320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (10))){
var inst_25241 = (state_25273[(2)]);
var inst_25242 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25273__$1 = (function (){var statearr_25293 = state_25273;
(statearr_25293[(13)] = inst_25241);

return statearr_25293;
})();
var statearr_25294_25321 = state_25273__$1;
(statearr_25294_25321[(2)] = inst_25242);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25273__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (8))){
var inst_25255 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25295_25322 = state_25273__$1;
(statearr_25295_25322[(2)] = inst_25255);

(statearr_25295_25322[(1)] = (5));


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
});})(c__22347__auto___25307,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22044__auto__,c__22347__auto___25307,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_25299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25299[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_25299[(1)] = (1));

return statearr_25299;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_25273){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25300){if((e25300 instanceof Object)){
var ex__22048__auto__ = e25300;
var statearr_25301_25330 = state_25273;
(statearr_25301_25330[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25331 = state_25273;
state_25273 = G__25331;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_25273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_25273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___25307,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22349__auto__ = (function (){var statearr_25302 = f__22348__auto__.call(null);
(statearr_25302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___25307);

return statearr_25302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___25307,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25338 = [];
var len__18846__auto___25399 = arguments.length;
var i__18847__auto___25400 = (0);
while(true){
if((i__18847__auto___25400 < len__18846__auto___25399)){
args25338.push((arguments[i__18847__auto___25400]));

var G__25401 = (i__18847__auto___25400 + (1));
i__18847__auto___25400 = G__25401;
continue;
} else {
}
break;
}

var G__25342 = args25338.length;
switch (G__25342) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25338.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22347__auto___25403 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___25403,out){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___25403,out){
return (function (state_25374){
var state_val_25375 = (state_25374[(1)]);
if((state_val_25375 === (7))){
var inst_25354 = (state_25374[(7)]);
var inst_25352 = (state_25374[(8)]);
var inst_25352__$1 = (state_25374[(2)]);
var inst_25354__$1 = cljs.core.nth.call(null,inst_25352__$1,(0),null);
var inst_25355 = cljs.core.nth.call(null,inst_25352__$1,(1),null);
var inst_25356 = (inst_25354__$1 == null);
var state_25374__$1 = (function (){var statearr_25376 = state_25374;
(statearr_25376[(9)] = inst_25355);

(statearr_25376[(7)] = inst_25354__$1);

(statearr_25376[(8)] = inst_25352__$1);

return statearr_25376;
})();
if(cljs.core.truth_(inst_25356)){
var statearr_25377_25404 = state_25374__$1;
(statearr_25377_25404[(1)] = (8));

} else {
var statearr_25378_25405 = state_25374__$1;
(statearr_25378_25405[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (1))){
var inst_25344 = cljs.core.vec.call(null,chs);
var inst_25345 = inst_25344;
var state_25374__$1 = (function (){var statearr_25380 = state_25374;
(statearr_25380[(10)] = inst_25345);

return statearr_25380;
})();
var statearr_25381_25406 = state_25374__$1;
(statearr_25381_25406[(2)] = null);

(statearr_25381_25406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (4))){
var inst_25345 = (state_25374[(10)]);
var state_25374__$1 = state_25374;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25374__$1,(7),inst_25345);
} else {
if((state_val_25375 === (6))){
var inst_25370 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
var statearr_25382_25408 = state_25374__$1;
(statearr_25382_25408[(2)] = inst_25370);

(statearr_25382_25408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (3))){
var inst_25372 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25374__$1,inst_25372);
} else {
if((state_val_25375 === (2))){
var inst_25345 = (state_25374[(10)]);
var inst_25347 = cljs.core.count.call(null,inst_25345);
var inst_25348 = (inst_25347 > (0));
var state_25374__$1 = state_25374;
if(cljs.core.truth_(inst_25348)){
var statearr_25384_25410 = state_25374__$1;
(statearr_25384_25410[(1)] = (4));

} else {
var statearr_25385_25411 = state_25374__$1;
(statearr_25385_25411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (11))){
var inst_25345 = (state_25374[(10)]);
var inst_25363 = (state_25374[(2)]);
var tmp25383 = inst_25345;
var inst_25345__$1 = tmp25383;
var state_25374__$1 = (function (){var statearr_25386 = state_25374;
(statearr_25386[(11)] = inst_25363);

(statearr_25386[(10)] = inst_25345__$1);

return statearr_25386;
})();
var statearr_25387_25412 = state_25374__$1;
(statearr_25387_25412[(2)] = null);

(statearr_25387_25412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (9))){
var inst_25354 = (state_25374[(7)]);
var state_25374__$1 = state_25374;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25374__$1,(11),out,inst_25354);
} else {
if((state_val_25375 === (5))){
var inst_25368 = cljs.core.async.close_BANG_.call(null,out);
var state_25374__$1 = state_25374;
var statearr_25388_25413 = state_25374__$1;
(statearr_25388_25413[(2)] = inst_25368);

(statearr_25388_25413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (10))){
var inst_25366 = (state_25374[(2)]);
var state_25374__$1 = state_25374;
var statearr_25389_25414 = state_25374__$1;
(statearr_25389_25414[(2)] = inst_25366);

(statearr_25389_25414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25375 === (8))){
var inst_25345 = (state_25374[(10)]);
var inst_25355 = (state_25374[(9)]);
var inst_25354 = (state_25374[(7)]);
var inst_25352 = (state_25374[(8)]);
var inst_25358 = (function (){var cs = inst_25345;
var vec__25350 = inst_25352;
var v = inst_25354;
var c = inst_25355;
return ((function (cs,vec__25350,v,c,inst_25345,inst_25355,inst_25354,inst_25352,state_val_25375,c__22347__auto___25403,out){
return (function (p1__25337_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25337_SHARP_);
});
;})(cs,vec__25350,v,c,inst_25345,inst_25355,inst_25354,inst_25352,state_val_25375,c__22347__auto___25403,out))
})();
var inst_25359 = cljs.core.filterv.call(null,inst_25358,inst_25345);
var inst_25345__$1 = inst_25359;
var state_25374__$1 = (function (){var statearr_25390 = state_25374;
(statearr_25390[(10)] = inst_25345__$1);

return statearr_25390;
})();
var statearr_25391_25415 = state_25374__$1;
(statearr_25391_25415[(2)] = null);

(statearr_25391_25415[(1)] = (2));


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
});})(c__22347__auto___25403,out))
;
return ((function (switch__22044__auto__,c__22347__auto___25403,out){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_25395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25395[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_25395[(1)] = (1));

return statearr_25395;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_25374){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25396){if((e25396 instanceof Object)){
var ex__22048__auto__ = e25396;
var statearr_25397_25416 = state_25374;
(statearr_25397_25416[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25417 = state_25374;
state_25374 = G__25417;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_25374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_25374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___25403,out))
})();
var state__22349__auto__ = (function (){var statearr_25398 = f__22348__auto__.call(null);
(statearr_25398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___25403);

return statearr_25398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___25403,out))
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
var args25418 = [];
var len__18846__auto___25467 = arguments.length;
var i__18847__auto___25468 = (0);
while(true){
if((i__18847__auto___25468 < len__18846__auto___25467)){
args25418.push((arguments[i__18847__auto___25468]));

var G__25469 = (i__18847__auto___25468 + (1));
i__18847__auto___25468 = G__25469;
continue;
} else {
}
break;
}

var G__25420 = args25418.length;
switch (G__25420) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25418.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22347__auto___25471 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___25471,out){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___25471,out){
return (function (state_25444){
var state_val_25445 = (state_25444[(1)]);
if((state_val_25445 === (7))){
var inst_25426 = (state_25444[(7)]);
var inst_25426__$1 = (state_25444[(2)]);
var inst_25427 = (inst_25426__$1 == null);
var inst_25428 = cljs.core.not.call(null,inst_25427);
var state_25444__$1 = (function (){var statearr_25446 = state_25444;
(statearr_25446[(7)] = inst_25426__$1);

return statearr_25446;
})();
if(inst_25428){
var statearr_25447_25476 = state_25444__$1;
(statearr_25447_25476[(1)] = (8));

} else {
var statearr_25448_25477 = state_25444__$1;
(statearr_25448_25477[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (1))){
var inst_25421 = (0);
var state_25444__$1 = (function (){var statearr_25449 = state_25444;
(statearr_25449[(8)] = inst_25421);

return statearr_25449;
})();
var statearr_25450_25478 = state_25444__$1;
(statearr_25450_25478[(2)] = null);

(statearr_25450_25478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (4))){
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25444__$1,(7),ch);
} else {
if((state_val_25445 === (6))){
var inst_25439 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25451_25479 = state_25444__$1;
(statearr_25451_25479[(2)] = inst_25439);

(statearr_25451_25479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (3))){
var inst_25441 = (state_25444[(2)]);
var inst_25442 = cljs.core.async.close_BANG_.call(null,out);
var state_25444__$1 = (function (){var statearr_25452 = state_25444;
(statearr_25452[(9)] = inst_25441);

return statearr_25452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25444__$1,inst_25442);
} else {
if((state_val_25445 === (2))){
var inst_25421 = (state_25444[(8)]);
var inst_25423 = (inst_25421 < n);
var state_25444__$1 = state_25444;
if(cljs.core.truth_(inst_25423)){
var statearr_25453_25481 = state_25444__$1;
(statearr_25453_25481[(1)] = (4));

} else {
var statearr_25454_25482 = state_25444__$1;
(statearr_25454_25482[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (11))){
var inst_25421 = (state_25444[(8)]);
var inst_25431 = (state_25444[(2)]);
var inst_25432 = (inst_25421 + (1));
var inst_25421__$1 = inst_25432;
var state_25444__$1 = (function (){var statearr_25455 = state_25444;
(statearr_25455[(8)] = inst_25421__$1);

(statearr_25455[(10)] = inst_25431);

return statearr_25455;
})();
var statearr_25456_25483 = state_25444__$1;
(statearr_25456_25483[(2)] = null);

(statearr_25456_25483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (9))){
var state_25444__$1 = state_25444;
var statearr_25457_25484 = state_25444__$1;
(statearr_25457_25484[(2)] = null);

(statearr_25457_25484[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (5))){
var state_25444__$1 = state_25444;
var statearr_25458_25485 = state_25444__$1;
(statearr_25458_25485[(2)] = null);

(statearr_25458_25485[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (10))){
var inst_25436 = (state_25444[(2)]);
var state_25444__$1 = state_25444;
var statearr_25459_25486 = state_25444__$1;
(statearr_25459_25486[(2)] = inst_25436);

(statearr_25459_25486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25445 === (8))){
var inst_25426 = (state_25444[(7)]);
var state_25444__$1 = state_25444;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25444__$1,(11),out,inst_25426);
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
});})(c__22347__auto___25471,out))
;
return ((function (switch__22044__auto__,c__22347__auto___25471,out){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_25463 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25463[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_25463[(1)] = (1));

return statearr_25463;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_25444){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25444);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25464){if((e25464 instanceof Object)){
var ex__22048__auto__ = e25464;
var statearr_25465_25487 = state_25444;
(statearr_25465_25487[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25488 = state_25444;
state_25444 = G__25488;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_25444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_25444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___25471,out))
})();
var state__22349__auto__ = (function (){var statearr_25466 = f__22348__auto__.call(null);
(statearr_25466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___25471);

return statearr_25466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___25471,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25496 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25496 = (function (map_LT_,f,ch,meta25497){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25497 = meta25497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25498,meta25497__$1){
var self__ = this;
var _25498__$1 = this;
return (new cljs.core.async.t_cljs$core$async25496(self__.map_LT_,self__.f,self__.ch,meta25497__$1));
});

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25498){
var self__ = this;
var _25498__$1 = this;
return self__.meta25497;
});

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25499 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25499 = (function (map_LT_,f,ch,meta25497,_,fn1,meta25500){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25497 = meta25497;
this._ = _;
this.fn1 = fn1;
this.meta25500 = meta25500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25501,meta25500__$1){
var self__ = this;
var _25501__$1 = this;
return (new cljs.core.async.t_cljs$core$async25499(self__.map_LT_,self__.f,self__.ch,self__.meta25497,self__._,self__.fn1,meta25500__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25499.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25501){
var self__ = this;
var _25501__$1 = this;
return self__.meta25500;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25499.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25499.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25499.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25499.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25489_SHARP_){
return f1.call(null,(((p1__25489_SHARP_ == null))?null:self__.f.call(null,p1__25489_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25499.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25497","meta25497",-1226524833,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25496","cljs.core.async/t_cljs$core$async25496",-2124079868,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25500","meta25500",-430733506,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25499.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25499.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25499";

cljs.core.async.t_cljs$core$async25499.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async25499");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25499 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25499(map_LT___$1,f__$1,ch__$1,meta25497__$1,___$2,fn1__$1,meta25500){
return (new cljs.core.async.t_cljs$core$async25499(map_LT___$1,f__$1,ch__$1,meta25497__$1,___$2,fn1__$1,meta25500));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25499(self__.map_LT_,self__.f,self__.ch,self__.meta25497,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__17776__auto__ = ret;
if(cljs.core.truth_(and__17776__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__17776__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25496.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25497","meta25497",-1226524833,null)], null);
});

cljs.core.async.t_cljs$core$async25496.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25496.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25496";

cljs.core.async.t_cljs$core$async25496.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async25496");
});

cljs.core.async.__GT_t_cljs$core$async25496 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25496(map_LT___$1,f__$1,ch__$1,meta25497){
return (new cljs.core.async.t_cljs$core$async25496(map_LT___$1,f__$1,ch__$1,meta25497));
});

}

return (new cljs.core.async.t_cljs$core$async25496(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25505 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25505 = (function (map_GT_,f,ch,meta25506){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25506 = meta25506;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25507,meta25506__$1){
var self__ = this;
var _25507__$1 = this;
return (new cljs.core.async.t_cljs$core$async25505(self__.map_GT_,self__.f,self__.ch,meta25506__$1));
});

cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25507){
var self__ = this;
var _25507__$1 = this;
return self__.meta25506;
});

cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25505.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25505.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25506","meta25506",1055485884,null)], null);
});

cljs.core.async.t_cljs$core$async25505.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25505.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25505";

cljs.core.async.t_cljs$core$async25505.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async25505");
});

cljs.core.async.__GT_t_cljs$core$async25505 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25505(map_GT___$1,f__$1,ch__$1,meta25506){
return (new cljs.core.async.t_cljs$core$async25505(map_GT___$1,f__$1,ch__$1,meta25506));
});

}

return (new cljs.core.async.t_cljs$core$async25505(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25511 = (function (filter_GT_,p,ch,meta25512){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25512 = meta25512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25513,meta25512__$1){
var self__ = this;
var _25513__$1 = this;
return (new cljs.core.async.t_cljs$core$async25511(self__.filter_GT_,self__.p,self__.ch,meta25512__$1));
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25513){
var self__ = this;
var _25513__$1 = this;
return self__.meta25512;
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25512","meta25512",-1001862809,null)], null);
});

cljs.core.async.t_cljs$core$async25511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25511";

cljs.core.async.t_cljs$core$async25511.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cljs.core.async/t_cljs$core$async25511");
});

cljs.core.async.__GT_t_cljs$core$async25511 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25511(filter_GT___$1,p__$1,ch__$1,meta25512){
return (new cljs.core.async.t_cljs$core$async25511(filter_GT___$1,p__$1,ch__$1,meta25512));
});

}

return (new cljs.core.async.t_cljs$core$async25511(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25514 = [];
var len__18846__auto___25558 = arguments.length;
var i__18847__auto___25559 = (0);
while(true){
if((i__18847__auto___25559 < len__18846__auto___25558)){
args25514.push((arguments[i__18847__auto___25559]));

var G__25560 = (i__18847__auto___25559 + (1));
i__18847__auto___25559 = G__25560;
continue;
} else {
}
break;
}

var G__25516 = args25514.length;
switch (G__25516) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25514.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22347__auto___25562 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___25562,out){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___25562,out){
return (function (state_25537){
var state_val_25538 = (state_25537[(1)]);
if((state_val_25538 === (7))){
var inst_25533 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25539_25563 = state_25537__$1;
(statearr_25539_25563[(2)] = inst_25533);

(statearr_25539_25563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (1))){
var state_25537__$1 = state_25537;
var statearr_25540_25564 = state_25537__$1;
(statearr_25540_25564[(2)] = null);

(statearr_25540_25564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (4))){
var inst_25519 = (state_25537[(7)]);
var inst_25519__$1 = (state_25537[(2)]);
var inst_25520 = (inst_25519__$1 == null);
var state_25537__$1 = (function (){var statearr_25541 = state_25537;
(statearr_25541[(7)] = inst_25519__$1);

return statearr_25541;
})();
if(cljs.core.truth_(inst_25520)){
var statearr_25542_25565 = state_25537__$1;
(statearr_25542_25565[(1)] = (5));

} else {
var statearr_25543_25566 = state_25537__$1;
(statearr_25543_25566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (6))){
var inst_25519 = (state_25537[(7)]);
var inst_25524 = p.call(null,inst_25519);
var state_25537__$1 = state_25537;
if(cljs.core.truth_(inst_25524)){
var statearr_25544_25567 = state_25537__$1;
(statearr_25544_25567[(1)] = (8));

} else {
var statearr_25545_25568 = state_25537__$1;
(statearr_25545_25568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (3))){
var inst_25535 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25537__$1,inst_25535);
} else {
if((state_val_25538 === (2))){
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25537__$1,(4),ch);
} else {
if((state_val_25538 === (11))){
var inst_25527 = (state_25537[(2)]);
var state_25537__$1 = state_25537;
var statearr_25546_25569 = state_25537__$1;
(statearr_25546_25569[(2)] = inst_25527);

(statearr_25546_25569[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (9))){
var state_25537__$1 = state_25537;
var statearr_25547_25570 = state_25537__$1;
(statearr_25547_25570[(2)] = null);

(statearr_25547_25570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (5))){
var inst_25522 = cljs.core.async.close_BANG_.call(null,out);
var state_25537__$1 = state_25537;
var statearr_25548_25571 = state_25537__$1;
(statearr_25548_25571[(2)] = inst_25522);

(statearr_25548_25571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (10))){
var inst_25530 = (state_25537[(2)]);
var state_25537__$1 = (function (){var statearr_25549 = state_25537;
(statearr_25549[(8)] = inst_25530);

return statearr_25549;
})();
var statearr_25550_25572 = state_25537__$1;
(statearr_25550_25572[(2)] = null);

(statearr_25550_25572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25538 === (8))){
var inst_25519 = (state_25537[(7)]);
var state_25537__$1 = state_25537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25537__$1,(11),out,inst_25519);
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
});})(c__22347__auto___25562,out))
;
return ((function (switch__22044__auto__,c__22347__auto___25562,out){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_25554 = [null,null,null,null,null,null,null,null,null];
(statearr_25554[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_25554[(1)] = (1));

return statearr_25554;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_25537){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25555){if((e25555 instanceof Object)){
var ex__22048__auto__ = e25555;
var statearr_25556_25573 = state_25537;
(statearr_25556_25573[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25574 = state_25537;
state_25537 = G__25574;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_25537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_25537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___25562,out))
})();
var state__22349__auto__ = (function (){var statearr_25557 = f__22348__auto__.call(null);
(statearr_25557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___25562);

return statearr_25557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___25562,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25575 = [];
var len__18846__auto___25578 = arguments.length;
var i__18847__auto___25579 = (0);
while(true){
if((i__18847__auto___25579 < len__18846__auto___25578)){
args25575.push((arguments[i__18847__auto___25579]));

var G__25580 = (i__18847__auto___25579 + (1));
i__18847__auto___25579 = G__25580;
continue;
} else {
}
break;
}

var G__25577 = args25575.length;
switch (G__25577) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25575.length)].join('')));

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
var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__){
return (function (state_25747){
var state_val_25748 = (state_25747[(1)]);
if((state_val_25748 === (7))){
var inst_25743 = (state_25747[(2)]);
var state_25747__$1 = state_25747;
var statearr_25749_25790 = state_25747__$1;
(statearr_25749_25790[(2)] = inst_25743);

(statearr_25749_25790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (20))){
var inst_25713 = (state_25747[(7)]);
var inst_25724 = (state_25747[(2)]);
var inst_25725 = cljs.core.next.call(null,inst_25713);
var inst_25699 = inst_25725;
var inst_25700 = null;
var inst_25701 = (0);
var inst_25702 = (0);
var state_25747__$1 = (function (){var statearr_25750 = state_25747;
(statearr_25750[(8)] = inst_25701);

(statearr_25750[(9)] = inst_25724);

(statearr_25750[(10)] = inst_25702);

(statearr_25750[(11)] = inst_25699);

(statearr_25750[(12)] = inst_25700);

return statearr_25750;
})();
var statearr_25751_25791 = state_25747__$1;
(statearr_25751_25791[(2)] = null);

(statearr_25751_25791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (1))){
var state_25747__$1 = state_25747;
var statearr_25752_25792 = state_25747__$1;
(statearr_25752_25792[(2)] = null);

(statearr_25752_25792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (4))){
var inst_25688 = (state_25747[(13)]);
var inst_25688__$1 = (state_25747[(2)]);
var inst_25689 = (inst_25688__$1 == null);
var state_25747__$1 = (function (){var statearr_25753 = state_25747;
(statearr_25753[(13)] = inst_25688__$1);

return statearr_25753;
})();
if(cljs.core.truth_(inst_25689)){
var statearr_25754_25793 = state_25747__$1;
(statearr_25754_25793[(1)] = (5));

} else {
var statearr_25755_25794 = state_25747__$1;
(statearr_25755_25794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (15))){
var state_25747__$1 = state_25747;
var statearr_25759_25795 = state_25747__$1;
(statearr_25759_25795[(2)] = null);

(statearr_25759_25795[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (21))){
var state_25747__$1 = state_25747;
var statearr_25760_25796 = state_25747__$1;
(statearr_25760_25796[(2)] = null);

(statearr_25760_25796[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (13))){
var inst_25701 = (state_25747[(8)]);
var inst_25702 = (state_25747[(10)]);
var inst_25699 = (state_25747[(11)]);
var inst_25700 = (state_25747[(12)]);
var inst_25709 = (state_25747[(2)]);
var inst_25710 = (inst_25702 + (1));
var tmp25756 = inst_25701;
var tmp25757 = inst_25699;
var tmp25758 = inst_25700;
var inst_25699__$1 = tmp25757;
var inst_25700__$1 = tmp25758;
var inst_25701__$1 = tmp25756;
var inst_25702__$1 = inst_25710;
var state_25747__$1 = (function (){var statearr_25761 = state_25747;
(statearr_25761[(8)] = inst_25701__$1);

(statearr_25761[(14)] = inst_25709);

(statearr_25761[(10)] = inst_25702__$1);

(statearr_25761[(11)] = inst_25699__$1);

(statearr_25761[(12)] = inst_25700__$1);

return statearr_25761;
})();
var statearr_25762_25797 = state_25747__$1;
(statearr_25762_25797[(2)] = null);

(statearr_25762_25797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (22))){
var state_25747__$1 = state_25747;
var statearr_25763_25798 = state_25747__$1;
(statearr_25763_25798[(2)] = null);

(statearr_25763_25798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (6))){
var inst_25688 = (state_25747[(13)]);
var inst_25697 = f.call(null,inst_25688);
var inst_25698 = cljs.core.seq.call(null,inst_25697);
var inst_25699 = inst_25698;
var inst_25700 = null;
var inst_25701 = (0);
var inst_25702 = (0);
var state_25747__$1 = (function (){var statearr_25764 = state_25747;
(statearr_25764[(8)] = inst_25701);

(statearr_25764[(10)] = inst_25702);

(statearr_25764[(11)] = inst_25699);

(statearr_25764[(12)] = inst_25700);

return statearr_25764;
})();
var statearr_25765_25799 = state_25747__$1;
(statearr_25765_25799[(2)] = null);

(statearr_25765_25799[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (17))){
var inst_25713 = (state_25747[(7)]);
var inst_25717 = cljs.core.chunk_first.call(null,inst_25713);
var inst_25718 = cljs.core.chunk_rest.call(null,inst_25713);
var inst_25719 = cljs.core.count.call(null,inst_25717);
var inst_25699 = inst_25718;
var inst_25700 = inst_25717;
var inst_25701 = inst_25719;
var inst_25702 = (0);
var state_25747__$1 = (function (){var statearr_25766 = state_25747;
(statearr_25766[(8)] = inst_25701);

(statearr_25766[(10)] = inst_25702);

(statearr_25766[(11)] = inst_25699);

(statearr_25766[(12)] = inst_25700);

return statearr_25766;
})();
var statearr_25767_25800 = state_25747__$1;
(statearr_25767_25800[(2)] = null);

(statearr_25767_25800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (3))){
var inst_25745 = (state_25747[(2)]);
var state_25747__$1 = state_25747;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25747__$1,inst_25745);
} else {
if((state_val_25748 === (12))){
var inst_25733 = (state_25747[(2)]);
var state_25747__$1 = state_25747;
var statearr_25768_25801 = state_25747__$1;
(statearr_25768_25801[(2)] = inst_25733);

(statearr_25768_25801[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (2))){
var state_25747__$1 = state_25747;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25747__$1,(4),in$);
} else {
if((state_val_25748 === (23))){
var inst_25741 = (state_25747[(2)]);
var state_25747__$1 = state_25747;
var statearr_25769_25802 = state_25747__$1;
(statearr_25769_25802[(2)] = inst_25741);

(statearr_25769_25802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (19))){
var inst_25728 = (state_25747[(2)]);
var state_25747__$1 = state_25747;
var statearr_25770_25803 = state_25747__$1;
(statearr_25770_25803[(2)] = inst_25728);

(statearr_25770_25803[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (11))){
var inst_25713 = (state_25747[(7)]);
var inst_25699 = (state_25747[(11)]);
var inst_25713__$1 = cljs.core.seq.call(null,inst_25699);
var state_25747__$1 = (function (){var statearr_25771 = state_25747;
(statearr_25771[(7)] = inst_25713__$1);

return statearr_25771;
})();
if(inst_25713__$1){
var statearr_25772_25804 = state_25747__$1;
(statearr_25772_25804[(1)] = (14));

} else {
var statearr_25773_25805 = state_25747__$1;
(statearr_25773_25805[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (9))){
var inst_25735 = (state_25747[(2)]);
var inst_25736 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25747__$1 = (function (){var statearr_25774 = state_25747;
(statearr_25774[(15)] = inst_25735);

return statearr_25774;
})();
if(cljs.core.truth_(inst_25736)){
var statearr_25775_25806 = state_25747__$1;
(statearr_25775_25806[(1)] = (21));

} else {
var statearr_25776_25807 = state_25747__$1;
(statearr_25776_25807[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (5))){
var inst_25691 = cljs.core.async.close_BANG_.call(null,out);
var state_25747__$1 = state_25747;
var statearr_25777_25808 = state_25747__$1;
(statearr_25777_25808[(2)] = inst_25691);

(statearr_25777_25808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (14))){
var inst_25713 = (state_25747[(7)]);
var inst_25715 = cljs.core.chunked_seq_QMARK_.call(null,inst_25713);
var state_25747__$1 = state_25747;
if(inst_25715){
var statearr_25778_25809 = state_25747__$1;
(statearr_25778_25809[(1)] = (17));

} else {
var statearr_25779_25810 = state_25747__$1;
(statearr_25779_25810[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (16))){
var inst_25731 = (state_25747[(2)]);
var state_25747__$1 = state_25747;
var statearr_25780_25811 = state_25747__$1;
(statearr_25780_25811[(2)] = inst_25731);

(statearr_25780_25811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25748 === (10))){
var inst_25702 = (state_25747[(10)]);
var inst_25700 = (state_25747[(12)]);
var inst_25707 = cljs.core._nth.call(null,inst_25700,inst_25702);
var state_25747__$1 = state_25747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25747__$1,(13),out,inst_25707);
} else {
if((state_val_25748 === (18))){
var inst_25713 = (state_25747[(7)]);
var inst_25722 = cljs.core.first.call(null,inst_25713);
var state_25747__$1 = state_25747;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25747__$1,(20),out,inst_25722);
} else {
if((state_val_25748 === (8))){
var inst_25701 = (state_25747[(8)]);
var inst_25702 = (state_25747[(10)]);
var inst_25704 = (inst_25702 < inst_25701);
var inst_25705 = inst_25704;
var state_25747__$1 = state_25747;
if(cljs.core.truth_(inst_25705)){
var statearr_25781_25812 = state_25747__$1;
(statearr_25781_25812[(1)] = (10));

} else {
var statearr_25782_25813 = state_25747__$1;
(statearr_25782_25813[(1)] = (11));

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
});})(c__22347__auto__))
;
return ((function (switch__22044__auto__,c__22347__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22045__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22045__auto____0 = (function (){
var statearr_25786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25786[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22045__auto__);

(statearr_25786[(1)] = (1));

return statearr_25786;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22045__auto____1 = (function (state_25747){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25747);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25787){if((e25787 instanceof Object)){
var ex__22048__auto__ = e25787;
var statearr_25788_25814 = state_25747;
(statearr_25788_25814[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25747);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25815 = state_25747;
state_25747 = G__25815;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22045__auto__ = function(state_25747){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22045__auto____1.call(this,state_25747);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22045__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22045__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__))
})();
var state__22349__auto__ = (function (){var statearr_25789 = f__22348__auto__.call(null);
(statearr_25789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_25789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__))
);

return c__22347__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25816 = [];
var len__18846__auto___25819 = arguments.length;
var i__18847__auto___25820 = (0);
while(true){
if((i__18847__auto___25820 < len__18846__auto___25819)){
args25816.push((arguments[i__18847__auto___25820]));

var G__25821 = (i__18847__auto___25820 + (1));
i__18847__auto___25820 = G__25821;
continue;
} else {
}
break;
}

var G__25818 = args25816.length;
switch (G__25818) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25816.length)].join('')));

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
var args25823 = [];
var len__18846__auto___25826 = arguments.length;
var i__18847__auto___25827 = (0);
while(true){
if((i__18847__auto___25827 < len__18846__auto___25826)){
args25823.push((arguments[i__18847__auto___25827]));

var G__25828 = (i__18847__auto___25827 + (1));
i__18847__auto___25827 = G__25828;
continue;
} else {
}
break;
}

var G__25825 = args25823.length;
switch (G__25825) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25823.length)].join('')));

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
var args25830 = [];
var len__18846__auto___25881 = arguments.length;
var i__18847__auto___25882 = (0);
while(true){
if((i__18847__auto___25882 < len__18846__auto___25881)){
args25830.push((arguments[i__18847__auto___25882]));

var G__25883 = (i__18847__auto___25882 + (1));
i__18847__auto___25882 = G__25883;
continue;
} else {
}
break;
}

var G__25832 = args25830.length;
switch (G__25832) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25830.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22347__auto___25885 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___25885,out){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___25885,out){
return (function (state_25856){
var state_val_25857 = (state_25856[(1)]);
if((state_val_25857 === (7))){
var inst_25851 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25858_25886 = state_25856__$1;
(statearr_25858_25886[(2)] = inst_25851);

(statearr_25858_25886[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (1))){
var inst_25833 = null;
var state_25856__$1 = (function (){var statearr_25859 = state_25856;
(statearr_25859[(7)] = inst_25833);

return statearr_25859;
})();
var statearr_25860_25887 = state_25856__$1;
(statearr_25860_25887[(2)] = null);

(statearr_25860_25887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (4))){
var inst_25836 = (state_25856[(8)]);
var inst_25836__$1 = (state_25856[(2)]);
var inst_25837 = (inst_25836__$1 == null);
var inst_25838 = cljs.core.not.call(null,inst_25837);
var state_25856__$1 = (function (){var statearr_25861 = state_25856;
(statearr_25861[(8)] = inst_25836__$1);

return statearr_25861;
})();
if(inst_25838){
var statearr_25862_25888 = state_25856__$1;
(statearr_25862_25888[(1)] = (5));

} else {
var statearr_25863_25889 = state_25856__$1;
(statearr_25863_25889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (6))){
var state_25856__$1 = state_25856;
var statearr_25864_25890 = state_25856__$1;
(statearr_25864_25890[(2)] = null);

(statearr_25864_25890[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (3))){
var inst_25853 = (state_25856[(2)]);
var inst_25854 = cljs.core.async.close_BANG_.call(null,out);
var state_25856__$1 = (function (){var statearr_25865 = state_25856;
(statearr_25865[(9)] = inst_25853);

return statearr_25865;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25856__$1,inst_25854);
} else {
if((state_val_25857 === (2))){
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25856__$1,(4),ch);
} else {
if((state_val_25857 === (11))){
var inst_25836 = (state_25856[(8)]);
var inst_25845 = (state_25856[(2)]);
var inst_25833 = inst_25836;
var state_25856__$1 = (function (){var statearr_25866 = state_25856;
(statearr_25866[(7)] = inst_25833);

(statearr_25866[(10)] = inst_25845);

return statearr_25866;
})();
var statearr_25867_25891 = state_25856__$1;
(statearr_25867_25891[(2)] = null);

(statearr_25867_25891[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (9))){
var inst_25836 = (state_25856[(8)]);
var state_25856__$1 = state_25856;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25856__$1,(11),out,inst_25836);
} else {
if((state_val_25857 === (5))){
var inst_25833 = (state_25856[(7)]);
var inst_25836 = (state_25856[(8)]);
var inst_25840 = cljs.core._EQ_.call(null,inst_25836,inst_25833);
var state_25856__$1 = state_25856;
if(inst_25840){
var statearr_25869_25892 = state_25856__$1;
(statearr_25869_25892[(1)] = (8));

} else {
var statearr_25870_25893 = state_25856__$1;
(statearr_25870_25893[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (10))){
var inst_25848 = (state_25856[(2)]);
var state_25856__$1 = state_25856;
var statearr_25871_25894 = state_25856__$1;
(statearr_25871_25894[(2)] = inst_25848);

(statearr_25871_25894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25857 === (8))){
var inst_25833 = (state_25856[(7)]);
var tmp25868 = inst_25833;
var inst_25833__$1 = tmp25868;
var state_25856__$1 = (function (){var statearr_25872 = state_25856;
(statearr_25872[(7)] = inst_25833__$1);

return statearr_25872;
})();
var statearr_25873_25895 = state_25856__$1;
(statearr_25873_25895[(2)] = null);

(statearr_25873_25895[(1)] = (2));


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
});})(c__22347__auto___25885,out))
;
return ((function (switch__22044__auto__,c__22347__auto___25885,out){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_25877 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25877[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_25877[(1)] = (1));

return statearr_25877;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_25856){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25878){if((e25878 instanceof Object)){
var ex__22048__auto__ = e25878;
var statearr_25879_25896 = state_25856;
(statearr_25879_25896[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25897 = state_25856;
state_25856 = G__25897;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_25856){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_25856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___25885,out))
})();
var state__22349__auto__ = (function (){var statearr_25880 = f__22348__auto__.call(null);
(statearr_25880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___25885);

return statearr_25880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___25885,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25898 = [];
var len__18846__auto___25968 = arguments.length;
var i__18847__auto___25969 = (0);
while(true){
if((i__18847__auto___25969 < len__18846__auto___25968)){
args25898.push((arguments[i__18847__auto___25969]));

var G__25970 = (i__18847__auto___25969 + (1));
i__18847__auto___25969 = G__25970;
continue;
} else {
}
break;
}

var G__25900 = args25898.length;
switch (G__25900) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25898.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22347__auto___25972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___25972,out){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___25972,out){
return (function (state_25938){
var state_val_25939 = (state_25938[(1)]);
if((state_val_25939 === (7))){
var inst_25934 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25940_25973 = state_25938__$1;
(statearr_25940_25973[(2)] = inst_25934);

(statearr_25940_25973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (1))){
var inst_25901 = (new Array(n));
var inst_25902 = inst_25901;
var inst_25903 = (0);
var state_25938__$1 = (function (){var statearr_25941 = state_25938;
(statearr_25941[(7)] = inst_25902);

(statearr_25941[(8)] = inst_25903);

return statearr_25941;
})();
var statearr_25942_25974 = state_25938__$1;
(statearr_25942_25974[(2)] = null);

(statearr_25942_25974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (4))){
var inst_25906 = (state_25938[(9)]);
var inst_25906__$1 = (state_25938[(2)]);
var inst_25907 = (inst_25906__$1 == null);
var inst_25908 = cljs.core.not.call(null,inst_25907);
var state_25938__$1 = (function (){var statearr_25943 = state_25938;
(statearr_25943[(9)] = inst_25906__$1);

return statearr_25943;
})();
if(inst_25908){
var statearr_25944_25975 = state_25938__$1;
(statearr_25944_25975[(1)] = (5));

} else {
var statearr_25945_25976 = state_25938__$1;
(statearr_25945_25976[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (15))){
var inst_25928 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25946_25977 = state_25938__$1;
(statearr_25946_25977[(2)] = inst_25928);

(statearr_25946_25977[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (13))){
var state_25938__$1 = state_25938;
var statearr_25947_25978 = state_25938__$1;
(statearr_25947_25978[(2)] = null);

(statearr_25947_25978[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (6))){
var inst_25903 = (state_25938[(8)]);
var inst_25924 = (inst_25903 > (0));
var state_25938__$1 = state_25938;
if(cljs.core.truth_(inst_25924)){
var statearr_25948_25979 = state_25938__$1;
(statearr_25948_25979[(1)] = (12));

} else {
var statearr_25949_25980 = state_25938__$1;
(statearr_25949_25980[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (3))){
var inst_25936 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25938__$1,inst_25936);
} else {
if((state_val_25939 === (12))){
var inst_25902 = (state_25938[(7)]);
var inst_25926 = cljs.core.vec.call(null,inst_25902);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25938__$1,(15),out,inst_25926);
} else {
if((state_val_25939 === (2))){
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25938__$1,(4),ch);
} else {
if((state_val_25939 === (11))){
var inst_25918 = (state_25938[(2)]);
var inst_25919 = (new Array(n));
var inst_25902 = inst_25919;
var inst_25903 = (0);
var state_25938__$1 = (function (){var statearr_25950 = state_25938;
(statearr_25950[(7)] = inst_25902);

(statearr_25950[(10)] = inst_25918);

(statearr_25950[(8)] = inst_25903);

return statearr_25950;
})();
var statearr_25951_25981 = state_25938__$1;
(statearr_25951_25981[(2)] = null);

(statearr_25951_25981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (9))){
var inst_25902 = (state_25938[(7)]);
var inst_25916 = cljs.core.vec.call(null,inst_25902);
var state_25938__$1 = state_25938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25938__$1,(11),out,inst_25916);
} else {
if((state_val_25939 === (5))){
var inst_25902 = (state_25938[(7)]);
var inst_25906 = (state_25938[(9)]);
var inst_25911 = (state_25938[(11)]);
var inst_25903 = (state_25938[(8)]);
var inst_25910 = (inst_25902[inst_25903] = inst_25906);
var inst_25911__$1 = (inst_25903 + (1));
var inst_25912 = (inst_25911__$1 < n);
var state_25938__$1 = (function (){var statearr_25952 = state_25938;
(statearr_25952[(12)] = inst_25910);

(statearr_25952[(11)] = inst_25911__$1);

return statearr_25952;
})();
if(cljs.core.truth_(inst_25912)){
var statearr_25953_25982 = state_25938__$1;
(statearr_25953_25982[(1)] = (8));

} else {
var statearr_25954_25983 = state_25938__$1;
(statearr_25954_25983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (14))){
var inst_25931 = (state_25938[(2)]);
var inst_25932 = cljs.core.async.close_BANG_.call(null,out);
var state_25938__$1 = (function (){var statearr_25956 = state_25938;
(statearr_25956[(13)] = inst_25931);

return statearr_25956;
})();
var statearr_25957_25984 = state_25938__$1;
(statearr_25957_25984[(2)] = inst_25932);

(statearr_25957_25984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (10))){
var inst_25922 = (state_25938[(2)]);
var state_25938__$1 = state_25938;
var statearr_25958_25985 = state_25938__$1;
(statearr_25958_25985[(2)] = inst_25922);

(statearr_25958_25985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25939 === (8))){
var inst_25902 = (state_25938[(7)]);
var inst_25911 = (state_25938[(11)]);
var tmp25955 = inst_25902;
var inst_25902__$1 = tmp25955;
var inst_25903 = inst_25911;
var state_25938__$1 = (function (){var statearr_25959 = state_25938;
(statearr_25959[(7)] = inst_25902__$1);

(statearr_25959[(8)] = inst_25903);

return statearr_25959;
})();
var statearr_25960_25986 = state_25938__$1;
(statearr_25960_25986[(2)] = null);

(statearr_25960_25986[(1)] = (2));


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
});})(c__22347__auto___25972,out))
;
return ((function (switch__22044__auto__,c__22347__auto___25972,out){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_25964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25964[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_25964[(1)] = (1));

return statearr_25964;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_25938){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_25938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e25965){if((e25965 instanceof Object)){
var ex__22048__auto__ = e25965;
var statearr_25966_25987 = state_25938;
(statearr_25966_25987[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25988 = state_25938;
state_25938 = G__25988;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_25938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_25938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___25972,out))
})();
var state__22349__auto__ = (function (){var statearr_25967 = f__22348__auto__.call(null);
(statearr_25967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___25972);

return statearr_25967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___25972,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25989 = [];
var len__18846__auto___26063 = arguments.length;
var i__18847__auto___26064 = (0);
while(true){
if((i__18847__auto___26064 < len__18846__auto___26063)){
args25989.push((arguments[i__18847__auto___26064]));

var G__26065 = (i__18847__auto___26064 + (1));
i__18847__auto___26064 = G__26065;
continue;
} else {
}
break;
}

var G__25991 = args25989.length;
switch (G__25991) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25989.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__22347__auto___26067 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___26067,out){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___26067,out){
return (function (state_26033){
var state_val_26034 = (state_26033[(1)]);
if((state_val_26034 === (7))){
var inst_26029 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26035_26068 = state_26033__$1;
(statearr_26035_26068[(2)] = inst_26029);

(statearr_26035_26068[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (1))){
var inst_25992 = [];
var inst_25993 = inst_25992;
var inst_25994 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26033__$1 = (function (){var statearr_26036 = state_26033;
(statearr_26036[(7)] = inst_25993);

(statearr_26036[(8)] = inst_25994);

return statearr_26036;
})();
var statearr_26037_26069 = state_26033__$1;
(statearr_26037_26069[(2)] = null);

(statearr_26037_26069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (4))){
var inst_25997 = (state_26033[(9)]);
var inst_25997__$1 = (state_26033[(2)]);
var inst_25998 = (inst_25997__$1 == null);
var inst_25999 = cljs.core.not.call(null,inst_25998);
var state_26033__$1 = (function (){var statearr_26038 = state_26033;
(statearr_26038[(9)] = inst_25997__$1);

return statearr_26038;
})();
if(inst_25999){
var statearr_26039_26070 = state_26033__$1;
(statearr_26039_26070[(1)] = (5));

} else {
var statearr_26040_26071 = state_26033__$1;
(statearr_26040_26071[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (15))){
var inst_26023 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26041_26072 = state_26033__$1;
(statearr_26041_26072[(2)] = inst_26023);

(statearr_26041_26072[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (13))){
var state_26033__$1 = state_26033;
var statearr_26042_26073 = state_26033__$1;
(statearr_26042_26073[(2)] = null);

(statearr_26042_26073[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (6))){
var inst_25993 = (state_26033[(7)]);
var inst_26018 = inst_25993.length;
var inst_26019 = (inst_26018 > (0));
var state_26033__$1 = state_26033;
if(cljs.core.truth_(inst_26019)){
var statearr_26043_26074 = state_26033__$1;
(statearr_26043_26074[(1)] = (12));

} else {
var statearr_26044_26075 = state_26033__$1;
(statearr_26044_26075[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (3))){
var inst_26031 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26033__$1,inst_26031);
} else {
if((state_val_26034 === (12))){
var inst_25993 = (state_26033[(7)]);
var inst_26021 = cljs.core.vec.call(null,inst_25993);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26033__$1,(15),out,inst_26021);
} else {
if((state_val_26034 === (2))){
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26033__$1,(4),ch);
} else {
if((state_val_26034 === (11))){
var inst_26001 = (state_26033[(10)]);
var inst_25997 = (state_26033[(9)]);
var inst_26011 = (state_26033[(2)]);
var inst_26012 = [];
var inst_26013 = inst_26012.push(inst_25997);
var inst_25993 = inst_26012;
var inst_25994 = inst_26001;
var state_26033__$1 = (function (){var statearr_26045 = state_26033;
(statearr_26045[(11)] = inst_26013);

(statearr_26045[(7)] = inst_25993);

(statearr_26045[(8)] = inst_25994);

(statearr_26045[(12)] = inst_26011);

return statearr_26045;
})();
var statearr_26046_26076 = state_26033__$1;
(statearr_26046_26076[(2)] = null);

(statearr_26046_26076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (9))){
var inst_25993 = (state_26033[(7)]);
var inst_26009 = cljs.core.vec.call(null,inst_25993);
var state_26033__$1 = state_26033;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26033__$1,(11),out,inst_26009);
} else {
if((state_val_26034 === (5))){
var inst_26001 = (state_26033[(10)]);
var inst_25997 = (state_26033[(9)]);
var inst_25994 = (state_26033[(8)]);
var inst_26001__$1 = f.call(null,inst_25997);
var inst_26002 = cljs.core._EQ_.call(null,inst_26001__$1,inst_25994);
var inst_26003 = cljs.core.keyword_identical_QMARK_.call(null,inst_25994,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26004 = (inst_26002) || (inst_26003);
var state_26033__$1 = (function (){var statearr_26047 = state_26033;
(statearr_26047[(10)] = inst_26001__$1);

return statearr_26047;
})();
if(cljs.core.truth_(inst_26004)){
var statearr_26048_26077 = state_26033__$1;
(statearr_26048_26077[(1)] = (8));

} else {
var statearr_26049_26078 = state_26033__$1;
(statearr_26049_26078[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (14))){
var inst_26026 = (state_26033[(2)]);
var inst_26027 = cljs.core.async.close_BANG_.call(null,out);
var state_26033__$1 = (function (){var statearr_26051 = state_26033;
(statearr_26051[(13)] = inst_26026);

return statearr_26051;
})();
var statearr_26052_26079 = state_26033__$1;
(statearr_26052_26079[(2)] = inst_26027);

(statearr_26052_26079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (10))){
var inst_26016 = (state_26033[(2)]);
var state_26033__$1 = state_26033;
var statearr_26053_26080 = state_26033__$1;
(statearr_26053_26080[(2)] = inst_26016);

(statearr_26053_26080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26034 === (8))){
var inst_26001 = (state_26033[(10)]);
var inst_25997 = (state_26033[(9)]);
var inst_25993 = (state_26033[(7)]);
var inst_26006 = inst_25993.push(inst_25997);
var tmp26050 = inst_25993;
var inst_25993__$1 = tmp26050;
var inst_25994 = inst_26001;
var state_26033__$1 = (function (){var statearr_26054 = state_26033;
(statearr_26054[(14)] = inst_26006);

(statearr_26054[(7)] = inst_25993__$1);

(statearr_26054[(8)] = inst_25994);

return statearr_26054;
})();
var statearr_26055_26081 = state_26033__$1;
(statearr_26055_26081[(2)] = null);

(statearr_26055_26081[(1)] = (2));


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
});})(c__22347__auto___26067,out))
;
return ((function (switch__22044__auto__,c__22347__auto___26067,out){
return (function() {
var cljs$core$async$state_machine__22045__auto__ = null;
var cljs$core$async$state_machine__22045__auto____0 = (function (){
var statearr_26059 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26059[(0)] = cljs$core$async$state_machine__22045__auto__);

(statearr_26059[(1)] = (1));

return statearr_26059;
});
var cljs$core$async$state_machine__22045__auto____1 = (function (state_26033){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_26033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e26060){if((e26060 instanceof Object)){
var ex__22048__auto__ = e26060;
var statearr_26061_26082 = state_26033;
(statearr_26061_26082[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26083 = state_26033;
state_26033 = G__26083;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
cljs$core$async$state_machine__22045__auto__ = function(state_26033){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22045__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22045__auto____1.call(this,state_26033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22045__auto____0;
cljs$core$async$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22045__auto____1;
return cljs$core$async$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___26067,out))
})();
var state__22349__auto__ = (function (){var statearr_26062 = f__22348__auto__.call(null);
(statearr_26062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___26067);

return statearr_26062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___26067,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map