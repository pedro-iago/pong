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
var args22045 = [];
var len__19147__auto___22063 = arguments.length;
var i__19148__auto___22065 = (0);
while(true){
if((i__19148__auto___22065 < len__19147__auto___22063)){
args22045.push((arguments[i__19148__auto___22065]));

var G__22067 = (i__19148__auto___22065 + (1));
i__19148__auto___22065 = G__22067;
continue;
} else {
}
break;
}

var G__22049 = args22045.length;
switch (G__22049) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22045.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22053 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22053 = (function (f,blockable,meta22054){
this.f = f;
this.blockable = blockable;
this.meta22054 = meta22054;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22053.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22055,meta22054__$1){
var self__ = this;
var _22055__$1 = this;
return (new cljs.core.async.t_cljs$core$async22053(self__.f,self__.blockable,meta22054__$1));
});

cljs.core.async.t_cljs$core$async22053.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22055){
var self__ = this;
var _22055__$1 = this;
return self__.meta22054;
});

cljs.core.async.t_cljs$core$async22053.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22053.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22053.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22053.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22053.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22054","meta22054",-2005104583,null)], null);
});

cljs.core.async.t_cljs$core$async22053.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22053.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22053";

cljs.core.async.t_cljs$core$async22053.cljs$lang$ctorPrWriter = (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async22053");
});

cljs.core.async.__GT_t_cljs$core$async22053 = (function cljs$core$async$__GT_t_cljs$core$async22053(f__$1,blockable__$1,meta22054){
return (new cljs.core.async.t_cljs$core$async22053(f__$1,blockable__$1,meta22054));
});

}

return (new cljs.core.async.t_cljs$core$async22053(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args22095 = [];
var len__19147__auto___22107 = arguments.length;
var i__19148__auto___22108 = (0);
while(true){
if((i__19148__auto___22108 < len__19147__auto___22107)){
args22095.push((arguments[i__19148__auto___22108]));

var G__22111 = (i__19148__auto___22108 + (1));
i__19148__auto___22108 = G__22111;
continue;
} else {
}
break;
}

var G__22099 = args22095.length;
switch (G__22099) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22095.length)].join('')));

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
var args22118 = [];
var len__19147__auto___22135 = arguments.length;
var i__19148__auto___22137 = (0);
while(true){
if((i__19148__auto___22137 < len__19147__auto___22135)){
args22118.push((arguments[i__19148__auto___22137]));

var G__22138 = (i__19148__auto___22137 + (1));
i__19148__auto___22137 = G__22138;
continue;
} else {
}
break;
}

var G__22126 = args22118.length;
switch (G__22126) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22118.length)].join('')));

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
var args22155 = [];
var len__19147__auto___22171 = arguments.length;
var i__19148__auto___22172 = (0);
while(true){
if((i__19148__auto___22172 < len__19147__auto___22171)){
args22155.push((arguments[i__19148__auto___22172]));

var G__22175 = (i__19148__auto___22172 + (1));
i__19148__auto___22172 = G__22175;
continue;
} else {
}
break;
}

var G__22167 = args22155.length;
switch (G__22167) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22155.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22179 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22179);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22179,ret){
return (function (){
return fn1.call(null,val_22179);
});})(val_22179,ret))
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
var args22187 = [];
var len__19147__auto___22193 = arguments.length;
var i__19148__auto___22194 = (0);
while(true){
if((i__19148__auto___22194 < len__19147__auto___22193)){
args22187.push((arguments[i__19148__auto___22194]));

var G__22197 = (i__19148__auto___22194 + (1));
i__19148__auto___22194 = G__22197;
continue;
} else {
}
break;
}

var G__22192 = args22187.length;
switch (G__22192) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22187.length)].join('')));

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
var n__18992__auto___22210 = n;
var x_22211 = (0);
while(true){
if((x_22211 < n__18992__auto___22210)){
(a[x_22211] = (0));

var G__22217 = (x_22211 + (1));
x_22211 = G__22217;
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

var G__22219 = (i + (1));
i = G__22219;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22227 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22227 = (function (alt_flag,flag,meta22228){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22228 = meta22228;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22229,meta22228__$1){
var self__ = this;
var _22229__$1 = this;
return (new cljs.core.async.t_cljs$core$async22227(self__.alt_flag,self__.flag,meta22228__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22229){
var self__ = this;
var _22229__$1 = this;
return self__.meta22228;
});})(flag))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22227.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22227.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22228","meta22228",482949462,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22227.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22227.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22227";

cljs.core.async.t_cljs$core$async22227.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async22227");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22227 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22227(alt_flag__$1,flag__$1,meta22228){
return (new cljs.core.async.t_cljs$core$async22227(alt_flag__$1,flag__$1,meta22228));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22227(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22254 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22254 = (function (alt_handler,flag,cb,meta22255){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22255 = meta22255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22256,meta22255__$1){
var self__ = this;
var _22256__$1 = this;
return (new cljs.core.async.t_cljs$core$async22254(self__.alt_handler,self__.flag,self__.cb,meta22255__$1));
});

cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22256){
var self__ = this;
var _22256__$1 = this;
return self__.meta22255;
});

cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22254.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22254.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22255","meta22255",-877559653,null)], null);
});

cljs.core.async.t_cljs$core$async22254.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22254.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22254";

cljs.core.async.t_cljs$core$async22254.cljs$lang$ctorPrWriter = (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async22254");
});

cljs.core.async.__GT_t_cljs$core$async22254 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22254(alt_handler__$1,flag__$1,cb__$1,meta22255){
return (new cljs.core.async.t_cljs$core$async22254(alt_handler__$1,flag__$1,cb__$1,meta22255));
});

}

return (new cljs.core.async.t_cljs$core$async22254(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22269_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22269_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22270_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22270_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18089__auto__ = wport;
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22293 = (i + (1));
i = G__22293;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18089__auto__ = ret;
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18077__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18077__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18077__auto__;
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
var args__19154__auto__ = [];
var len__19147__auto___22326 = arguments.length;
var i__19148__auto___22327 = (0);
while(true){
if((i__19148__auto___22327 < len__19147__auto___22326)){
args__19154__auto__.push((arguments[i__19148__auto___22327]));

var G__22337 = (i__19148__auto___22327 + (1));
i__19148__auto___22327 = G__22337;
continue;
} else {
}
break;
}

var argseq__19155__auto__ = ((((1) < args__19154__auto__.length))?(new cljs.core.IndexedSeq(args__19154__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19155__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22319){
var map__22320 = p__22319;
var map__22320__$1 = ((((!((map__22320 == null)))?((((map__22320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22320):map__22320);
var opts = map__22320__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22308){
var G__22309 = cljs.core.first.call(null,seq22308);
var seq22308__$1 = cljs.core.next.call(null,seq22308);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22309,seq22308__$1);
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
var args22357 = [];
var len__19147__auto___22439 = arguments.length;
var i__19148__auto___22440 = (0);
while(true){
if((i__19148__auto___22440 < len__19147__auto___22439)){
args22357.push((arguments[i__19148__auto___22440]));

var G__22442 = (i__19148__auto___22440 + (1));
i__19148__auto___22440 = G__22442;
continue;
} else {
}
break;
}

var G__22359 = args22357.length;
switch (G__22359) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22357.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21983__auto___22446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___22446){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___22446){
return (function (state_22397){
var state_val_22398 = (state_22397[(1)]);
if((state_val_22398 === (7))){
var inst_22391 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22401_22449 = state_22397__$1;
(statearr_22401_22449[(2)] = inst_22391);

(statearr_22401_22449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (1))){
var state_22397__$1 = state_22397;
var statearr_22403_22450 = state_22397__$1;
(statearr_22403_22450[(2)] = null);

(statearr_22403_22450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (4))){
var inst_22369 = (state_22397[(7)]);
var inst_22369__$1 = (state_22397[(2)]);
var inst_22371 = (inst_22369__$1 == null);
var state_22397__$1 = (function (){var statearr_22405 = state_22397;
(statearr_22405[(7)] = inst_22369__$1);

return statearr_22405;
})();
if(cljs.core.truth_(inst_22371)){
var statearr_22406_22459 = state_22397__$1;
(statearr_22406_22459[(1)] = (5));

} else {
var statearr_22408_22461 = state_22397__$1;
(statearr_22408_22461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (13))){
var state_22397__$1 = state_22397;
var statearr_22412_22467 = state_22397__$1;
(statearr_22412_22467[(2)] = null);

(statearr_22412_22467[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (6))){
var inst_22369 = (state_22397[(7)]);
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22397__$1,(11),to,inst_22369);
} else {
if((state_val_22398 === (3))){
var inst_22393 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22397__$1,inst_22393);
} else {
if((state_val_22398 === (12))){
var state_22397__$1 = state_22397;
var statearr_22413_22468 = state_22397__$1;
(statearr_22413_22468[(2)] = null);

(statearr_22413_22468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (2))){
var state_22397__$1 = state_22397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22397__$1,(4),from);
} else {
if((state_val_22398 === (11))){
var inst_22381 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
if(cljs.core.truth_(inst_22381)){
var statearr_22414_22474 = state_22397__$1;
(statearr_22414_22474[(1)] = (12));

} else {
var statearr_22415_22475 = state_22397__$1;
(statearr_22415_22475[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (9))){
var state_22397__$1 = state_22397;
var statearr_22416_22476 = state_22397__$1;
(statearr_22416_22476[(2)] = null);

(statearr_22416_22476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (5))){
var state_22397__$1 = state_22397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22417_22479 = state_22397__$1;
(statearr_22417_22479[(1)] = (8));

} else {
var statearr_22420_22481 = state_22397__$1;
(statearr_22420_22481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (14))){
var inst_22389 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22422_22482 = state_22397__$1;
(statearr_22422_22482[(2)] = inst_22389);

(statearr_22422_22482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (10))){
var inst_22377 = (state_22397[(2)]);
var state_22397__$1 = state_22397;
var statearr_22423_22483 = state_22397__$1;
(statearr_22423_22483[(2)] = inst_22377);

(statearr_22423_22483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22398 === (8))){
var inst_22374 = cljs.core.async.close_BANG_.call(null,to);
var state_22397__$1 = state_22397;
var statearr_22425_22487 = state_22397__$1;
(statearr_22425_22487[(2)] = inst_22374);

(statearr_22425_22487[(1)] = (10));


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
});})(c__21983__auto___22446))
;
return ((function (switch__21732__auto__,c__21983__auto___22446){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_22430 = [null,null,null,null,null,null,null,null];
(statearr_22430[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_22430[(1)] = (1));

return statearr_22430;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_22397){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_22397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e22434){if((e22434 instanceof Object)){
var ex__21736__auto__ = e22434;
var statearr_22436_22490 = state_22397;
(statearr_22436_22490[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22494 = state_22397;
state_22397 = G__22494;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_22397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_22397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___22446))
})();
var state__21985__auto__ = (function (){var statearr_22438 = f__21984__auto__.call(null);
(statearr_22438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___22446);

return statearr_22438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___22446))
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
return (function (p__22742){
var vec__22743 = p__22742;
var v = cljs.core.nth.call(null,vec__22743,(0),null);
var p = cljs.core.nth.call(null,vec__22743,(1),null);
var job = vec__22743;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21983__auto___22970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___22970,res,vec__22743,v,p,job,jobs,results){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___22970,res,vec__22743,v,p,job,jobs,results){
return (function (state_22748){
var state_val_22749 = (state_22748[(1)]);
if((state_val_22749 === (1))){
var state_22748__$1 = state_22748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22748__$1,(2),res,v);
} else {
if((state_val_22749 === (2))){
var inst_22745 = (state_22748[(2)]);
var inst_22746 = cljs.core.async.close_BANG_.call(null,res);
var state_22748__$1 = (function (){var statearr_22752 = state_22748;
(statearr_22752[(7)] = inst_22745);

return statearr_22752;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22748__$1,inst_22746);
} else {
return null;
}
}
});})(c__21983__auto___22970,res,vec__22743,v,p,job,jobs,results))
;
return ((function (switch__21732__auto__,c__21983__auto___22970,res,vec__22743,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0 = (function (){
var statearr_22757 = [null,null,null,null,null,null,null,null];
(statearr_22757[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__);

(statearr_22757[(1)] = (1));

return statearr_22757;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1 = (function (state_22748){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_22748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e22758){if((e22758 instanceof Object)){
var ex__21736__auto__ = e22758;
var statearr_22759_22977 = state_22748;
(statearr_22759_22977[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22978 = state_22748;
state_22748 = G__22978;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = function(state_22748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1.call(this,state_22748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___22970,res,vec__22743,v,p,job,jobs,results))
})();
var state__21985__auto__ = (function (){var statearr_22760 = f__21984__auto__.call(null);
(statearr_22760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___22970);

return statearr_22760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___22970,res,vec__22743,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22763){
var vec__22764 = p__22763;
var v = cljs.core.nth.call(null,vec__22764,(0),null);
var p = cljs.core.nth.call(null,vec__22764,(1),null);
var job = vec__22764;
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
var n__18992__auto___22984 = n;
var __22985 = (0);
while(true){
if((__22985 < n__18992__auto___22984)){
var G__22766_22988 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22766_22988) {
case "compute":
var c__21983__auto___22991 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22985,c__21983__auto___22991,G__22766_22988,n__18992__auto___22984,jobs,results,process,async){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (__22985,c__21983__auto___22991,G__22766_22988,n__18992__auto___22984,jobs,results,process,async){
return (function (state_22779){
var state_val_22780 = (state_22779[(1)]);
if((state_val_22780 === (1))){
var state_22779__$1 = state_22779;
var statearr_22781_22993 = state_22779__$1;
(statearr_22781_22993[(2)] = null);

(statearr_22781_22993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (2))){
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22779__$1,(4),jobs);
} else {
if((state_val_22780 === (3))){
var inst_22777 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22779__$1,inst_22777);
} else {
if((state_val_22780 === (4))){
var inst_22769 = (state_22779[(2)]);
var inst_22770 = process.call(null,inst_22769);
var state_22779__$1 = state_22779;
if(cljs.core.truth_(inst_22770)){
var statearr_22782_23001 = state_22779__$1;
(statearr_22782_23001[(1)] = (5));

} else {
var statearr_22783_23002 = state_22779__$1;
(statearr_22783_23002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (5))){
var state_22779__$1 = state_22779;
var statearr_22784_23003 = state_22779__$1;
(statearr_22784_23003[(2)] = null);

(statearr_22784_23003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (6))){
var state_22779__$1 = state_22779;
var statearr_22787_23004 = state_22779__$1;
(statearr_22787_23004[(2)] = null);

(statearr_22787_23004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22780 === (7))){
var inst_22775 = (state_22779[(2)]);
var state_22779__$1 = state_22779;
var statearr_22789_23009 = state_22779__$1;
(statearr_22789_23009[(2)] = inst_22775);

(statearr_22789_23009[(1)] = (3));


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
});})(__22985,c__21983__auto___22991,G__22766_22988,n__18992__auto___22984,jobs,results,process,async))
;
return ((function (__22985,switch__21732__auto__,c__21983__auto___22991,G__22766_22988,n__18992__auto___22984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0 = (function (){
var statearr_22793 = [null,null,null,null,null,null,null];
(statearr_22793[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__);

(statearr_22793[(1)] = (1));

return statearr_22793;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1 = (function (state_22779){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_22779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e22794){if((e22794 instanceof Object)){
var ex__21736__auto__ = e22794;
var statearr_22795_23013 = state_22779;
(statearr_22795_23013[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22794;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23015 = state_22779;
state_22779 = G__23015;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = function(state_22779){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1.call(this,state_22779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__;
})()
;})(__22985,switch__21732__auto__,c__21983__auto___22991,G__22766_22988,n__18992__auto___22984,jobs,results,process,async))
})();
var state__21985__auto__ = (function (){var statearr_22796 = f__21984__auto__.call(null);
(statearr_22796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___22991);

return statearr_22796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(__22985,c__21983__auto___22991,G__22766_22988,n__18992__auto___22984,jobs,results,process,async))
);


break;
case "async":
var c__21983__auto___23016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22985,c__21983__auto___23016,G__22766_22988,n__18992__auto___22984,jobs,results,process,async){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (__22985,c__21983__auto___23016,G__22766_22988,n__18992__auto___22984,jobs,results,process,async){
return (function (state_22812){
var state_val_22813 = (state_22812[(1)]);
if((state_val_22813 === (1))){
var state_22812__$1 = state_22812;
var statearr_22816_23020 = state_22812__$1;
(statearr_22816_23020[(2)] = null);

(statearr_22816_23020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (2))){
var state_22812__$1 = state_22812;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22812__$1,(4),jobs);
} else {
if((state_val_22813 === (3))){
var inst_22810 = (state_22812[(2)]);
var state_22812__$1 = state_22812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22812__$1,inst_22810);
} else {
if((state_val_22813 === (4))){
var inst_22800 = (state_22812[(2)]);
var inst_22802 = async.call(null,inst_22800);
var state_22812__$1 = state_22812;
if(cljs.core.truth_(inst_22802)){
var statearr_22817_23021 = state_22812__$1;
(statearr_22817_23021[(1)] = (5));

} else {
var statearr_22818_23022 = state_22812__$1;
(statearr_22818_23022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (5))){
var state_22812__$1 = state_22812;
var statearr_22819_23025 = state_22812__$1;
(statearr_22819_23025[(2)] = null);

(statearr_22819_23025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (6))){
var state_22812__$1 = state_22812;
var statearr_22820_23027 = state_22812__$1;
(statearr_22820_23027[(2)] = null);

(statearr_22820_23027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22813 === (7))){
var inst_22807 = (state_22812[(2)]);
var state_22812__$1 = state_22812;
var statearr_22821_23029 = state_22812__$1;
(statearr_22821_23029[(2)] = inst_22807);

(statearr_22821_23029[(1)] = (3));


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
});})(__22985,c__21983__auto___23016,G__22766_22988,n__18992__auto___22984,jobs,results,process,async))
;
return ((function (__22985,switch__21732__auto__,c__21983__auto___23016,G__22766_22988,n__18992__auto___22984,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0 = (function (){
var statearr_22827 = [null,null,null,null,null,null,null];
(statearr_22827[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__);

(statearr_22827[(1)] = (1));

return statearr_22827;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1 = (function (state_22812){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_22812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e22829){if((e22829 instanceof Object)){
var ex__21736__auto__ = e22829;
var statearr_22830_23035 = state_22812;
(statearr_22830_23035[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23039 = state_22812;
state_22812 = G__23039;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = function(state_22812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1.call(this,state_22812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__;
})()
;})(__22985,switch__21732__auto__,c__21983__auto___23016,G__22766_22988,n__18992__auto___22984,jobs,results,process,async))
})();
var state__21985__auto__ = (function (){var statearr_22832 = f__21984__auto__.call(null);
(statearr_22832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___23016);

return statearr_22832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(__22985,c__21983__auto___23016,G__22766_22988,n__18992__auto___22984,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23041 = (__22985 + (1));
__22985 = G__23041;
continue;
} else {
}
break;
}

var c__21983__auto___23043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___23043,jobs,results,process,async){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___23043,jobs,results,process,async){
return (function (state_22855){
var state_val_22856 = (state_22855[(1)]);
if((state_val_22856 === (1))){
var state_22855__$1 = state_22855;
var statearr_22857_23045 = state_22855__$1;
(statearr_22857_23045[(2)] = null);

(statearr_22857_23045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (2))){
var state_22855__$1 = state_22855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22855__$1,(4),from);
} else {
if((state_val_22856 === (3))){
var inst_22853 = (state_22855[(2)]);
var state_22855__$1 = state_22855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22855__$1,inst_22853);
} else {
if((state_val_22856 === (4))){
var inst_22835 = (state_22855[(7)]);
var inst_22835__$1 = (state_22855[(2)]);
var inst_22836 = (inst_22835__$1 == null);
var state_22855__$1 = (function (){var statearr_22859 = state_22855;
(statearr_22859[(7)] = inst_22835__$1);

return statearr_22859;
})();
if(cljs.core.truth_(inst_22836)){
var statearr_22860_23046 = state_22855__$1;
(statearr_22860_23046[(1)] = (5));

} else {
var statearr_22861_23049 = state_22855__$1;
(statearr_22861_23049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (5))){
var inst_22838 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22855__$1 = state_22855;
var statearr_22864_23051 = state_22855__$1;
(statearr_22864_23051[(2)] = inst_22838);

(statearr_22864_23051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (6))){
var inst_22835 = (state_22855[(7)]);
var inst_22840 = (state_22855[(8)]);
var inst_22840__$1 = cljs.core.async.chan.call(null,(1));
var inst_22841 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22842 = [inst_22835,inst_22840__$1];
var inst_22843 = (new cljs.core.PersistentVector(null,2,(5),inst_22841,inst_22842,null));
var state_22855__$1 = (function (){var statearr_22865 = state_22855;
(statearr_22865[(8)] = inst_22840__$1);

return statearr_22865;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22855__$1,(8),jobs,inst_22843);
} else {
if((state_val_22856 === (7))){
var inst_22851 = (state_22855[(2)]);
var state_22855__$1 = state_22855;
var statearr_22869_23057 = state_22855__$1;
(statearr_22869_23057[(2)] = inst_22851);

(statearr_22869_23057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22856 === (8))){
var inst_22840 = (state_22855[(8)]);
var inst_22846 = (state_22855[(2)]);
var state_22855__$1 = (function (){var statearr_22870 = state_22855;
(statearr_22870[(9)] = inst_22846);

return statearr_22870;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22855__$1,(9),results,inst_22840);
} else {
if((state_val_22856 === (9))){
var inst_22848 = (state_22855[(2)]);
var state_22855__$1 = (function (){var statearr_22872 = state_22855;
(statearr_22872[(10)] = inst_22848);

return statearr_22872;
})();
var statearr_22873_23062 = state_22855__$1;
(statearr_22873_23062[(2)] = null);

(statearr_22873_23062[(1)] = (2));


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
});})(c__21983__auto___23043,jobs,results,process,async))
;
return ((function (switch__21732__auto__,c__21983__auto___23043,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0 = (function (){
var statearr_22878 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22878[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__);

(statearr_22878[(1)] = (1));

return statearr_22878;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1 = (function (state_22855){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_22855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e22879){if((e22879 instanceof Object)){
var ex__21736__auto__ = e22879;
var statearr_22880_23069 = state_22855;
(statearr_22880_23069[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23072 = state_22855;
state_22855 = G__23072;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = function(state_22855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1.call(this,state_22855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___23043,jobs,results,process,async))
})();
var state__21985__auto__ = (function (){var statearr_22883 = f__21984__auto__.call(null);
(statearr_22883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___23043);

return statearr_22883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___23043,jobs,results,process,async))
);


var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__,jobs,results,process,async){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__,jobs,results,process,async){
return (function (state_22922){
var state_val_22923 = (state_22922[(1)]);
if((state_val_22923 === (7))){
var inst_22918 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22924_23077 = state_22922__$1;
(statearr_22924_23077[(2)] = inst_22918);

(statearr_22924_23077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (20))){
var state_22922__$1 = state_22922;
var statearr_22925_23080 = state_22922__$1;
(statearr_22925_23080[(2)] = null);

(statearr_22925_23080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (1))){
var state_22922__$1 = state_22922;
var statearr_22926_23087 = state_22922__$1;
(statearr_22926_23087[(2)] = null);

(statearr_22926_23087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (4))){
var inst_22887 = (state_22922[(7)]);
var inst_22887__$1 = (state_22922[(2)]);
var inst_22888 = (inst_22887__$1 == null);
var state_22922__$1 = (function (){var statearr_22927 = state_22922;
(statearr_22927[(7)] = inst_22887__$1);

return statearr_22927;
})();
if(cljs.core.truth_(inst_22888)){
var statearr_22928_23090 = state_22922__$1;
(statearr_22928_23090[(1)] = (5));

} else {
var statearr_22929_23092 = state_22922__$1;
(statearr_22929_23092[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (15))){
var inst_22900 = (state_22922[(8)]);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22922__$1,(18),to,inst_22900);
} else {
if((state_val_22923 === (21))){
var inst_22913 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22930_23093 = state_22922__$1;
(statearr_22930_23093[(2)] = inst_22913);

(statearr_22930_23093[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (13))){
var inst_22915 = (state_22922[(2)]);
var state_22922__$1 = (function (){var statearr_22935 = state_22922;
(statearr_22935[(9)] = inst_22915);

return statearr_22935;
})();
var statearr_22936_23096 = state_22922__$1;
(statearr_22936_23096[(2)] = null);

(statearr_22936_23096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (6))){
var inst_22887 = (state_22922[(7)]);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22922__$1,(11),inst_22887);
} else {
if((state_val_22923 === (17))){
var inst_22908 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
if(cljs.core.truth_(inst_22908)){
var statearr_22940_23100 = state_22922__$1;
(statearr_22940_23100[(1)] = (19));

} else {
var statearr_22941_23101 = state_22922__$1;
(statearr_22941_23101[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (3))){
var inst_22920 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22922__$1,inst_22920);
} else {
if((state_val_22923 === (12))){
var inst_22897 = (state_22922[(10)]);
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22922__$1,(14),inst_22897);
} else {
if((state_val_22923 === (2))){
var state_22922__$1 = state_22922;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22922__$1,(4),results);
} else {
if((state_val_22923 === (19))){
var state_22922__$1 = state_22922;
var statearr_22942_23110 = state_22922__$1;
(statearr_22942_23110[(2)] = null);

(statearr_22942_23110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (11))){
var inst_22897 = (state_22922[(2)]);
var state_22922__$1 = (function (){var statearr_22943 = state_22922;
(statearr_22943[(10)] = inst_22897);

return statearr_22943;
})();
var statearr_22944_23114 = state_22922__$1;
(statearr_22944_23114[(2)] = null);

(statearr_22944_23114[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (9))){
var state_22922__$1 = state_22922;
var statearr_22945_23120 = state_22922__$1;
(statearr_22945_23120[(2)] = null);

(statearr_22945_23120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (5))){
var state_22922__$1 = state_22922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22946_23124 = state_22922__$1;
(statearr_22946_23124[(1)] = (8));

} else {
var statearr_22947_23125 = state_22922__$1;
(statearr_22947_23125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (14))){
var inst_22900 = (state_22922[(8)]);
var inst_22902 = (state_22922[(11)]);
var inst_22900__$1 = (state_22922[(2)]);
var inst_22901 = (inst_22900__$1 == null);
var inst_22902__$1 = cljs.core.not.call(null,inst_22901);
var state_22922__$1 = (function (){var statearr_22951 = state_22922;
(statearr_22951[(8)] = inst_22900__$1);

(statearr_22951[(11)] = inst_22902__$1);

return statearr_22951;
})();
if(inst_22902__$1){
var statearr_22952_23133 = state_22922__$1;
(statearr_22952_23133[(1)] = (15));

} else {
var statearr_22953_23135 = state_22922__$1;
(statearr_22953_23135[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (16))){
var inst_22902 = (state_22922[(11)]);
var state_22922__$1 = state_22922;
var statearr_22955_23138 = state_22922__$1;
(statearr_22955_23138[(2)] = inst_22902);

(statearr_22955_23138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (10))){
var inst_22894 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22956_23145 = state_22922__$1;
(statearr_22956_23145[(2)] = inst_22894);

(statearr_22956_23145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (18))){
var inst_22905 = (state_22922[(2)]);
var state_22922__$1 = state_22922;
var statearr_22957_23148 = state_22922__$1;
(statearr_22957_23148[(2)] = inst_22905);

(statearr_22957_23148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22923 === (8))){
var inst_22891 = cljs.core.async.close_BANG_.call(null,to);
var state_22922__$1 = state_22922;
var statearr_22958_23149 = state_22922__$1;
(statearr_22958_23149[(2)] = inst_22891);

(statearr_22958_23149[(1)] = (10));


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
});})(c__21983__auto__,jobs,results,process,async))
;
return ((function (switch__21732__auto__,c__21983__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0 = (function (){
var statearr_22963 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22963[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__);

(statearr_22963[(1)] = (1));

return statearr_22963;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1 = (function (state_22922){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_22922);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e22964){if((e22964 instanceof Object)){
var ex__21736__auto__ = e22964;
var statearr_22965_23160 = state_22922;
(statearr_22965_23160[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23164 = state_22922;
state_22922 = G__23164;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__ = function(state_22922){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1.call(this,state_22922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21733__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__,jobs,results,process,async))
})();
var state__21985__auto__ = (function (){var statearr_22966 = f__21984__auto__.call(null);
(statearr_22966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_22966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__,jobs,results,process,async))
);

return c__21983__auto__;
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
var args23170 = [];
var len__19147__auto___23183 = arguments.length;
var i__19148__auto___23184 = (0);
while(true){
if((i__19148__auto___23184 < len__19147__auto___23183)){
args23170.push((arguments[i__19148__auto___23184]));

var G__23188 = (i__19148__auto___23184 + (1));
i__19148__auto___23184 = G__23188;
continue;
} else {
}
break;
}

var G__23176 = args23170.length;
switch (G__23176) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23170.length)].join('')));

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
var args23204 = [];
var len__19147__auto___23217 = arguments.length;
var i__19148__auto___23219 = (0);
while(true){
if((i__19148__auto___23219 < len__19147__auto___23217)){
args23204.push((arguments[i__19148__auto___23219]));

var G__23220 = (i__19148__auto___23219 + (1));
i__19148__auto___23219 = G__23220;
continue;
} else {
}
break;
}

var G__23210 = args23204.length;
switch (G__23210) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23204.length)].join('')));

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
var args23229 = [];
var len__19147__auto___23291 = arguments.length;
var i__19148__auto___23292 = (0);
while(true){
if((i__19148__auto___23292 < len__19147__auto___23291)){
args23229.push((arguments[i__19148__auto___23292]));

var G__23293 = (i__19148__auto___23292 + (1));
i__19148__auto___23292 = G__23293;
continue;
} else {
}
break;
}

var G__23231 = args23229.length;
switch (G__23231) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23229.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21983__auto___23302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___23302,tc,fc){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___23302,tc,fc){
return (function (state_23260){
var state_val_23261 = (state_23260[(1)]);
if((state_val_23261 === (7))){
var inst_23256 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
var statearr_23262_23303 = state_23260__$1;
(statearr_23262_23303[(2)] = inst_23256);

(statearr_23262_23303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (1))){
var state_23260__$1 = state_23260;
var statearr_23263_23312 = state_23260__$1;
(statearr_23263_23312[(2)] = null);

(statearr_23263_23312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (4))){
var inst_23237 = (state_23260[(7)]);
var inst_23237__$1 = (state_23260[(2)]);
var inst_23238 = (inst_23237__$1 == null);
var state_23260__$1 = (function (){var statearr_23264 = state_23260;
(statearr_23264[(7)] = inst_23237__$1);

return statearr_23264;
})();
if(cljs.core.truth_(inst_23238)){
var statearr_23265_23317 = state_23260__$1;
(statearr_23265_23317[(1)] = (5));

} else {
var statearr_23266_23318 = state_23260__$1;
(statearr_23266_23318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (13))){
var state_23260__$1 = state_23260;
var statearr_23267_23325 = state_23260__$1;
(statearr_23267_23325[(2)] = null);

(statearr_23267_23325[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (6))){
var inst_23237 = (state_23260[(7)]);
var inst_23243 = p.call(null,inst_23237);
var state_23260__$1 = state_23260;
if(cljs.core.truth_(inst_23243)){
var statearr_23270_23327 = state_23260__$1;
(statearr_23270_23327[(1)] = (9));

} else {
var statearr_23271_23328 = state_23260__$1;
(statearr_23271_23328[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (3))){
var inst_23258 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23260__$1,inst_23258);
} else {
if((state_val_23261 === (12))){
var state_23260__$1 = state_23260;
var statearr_23273_23331 = state_23260__$1;
(statearr_23273_23331[(2)] = null);

(statearr_23273_23331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (2))){
var state_23260__$1 = state_23260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23260__$1,(4),ch);
} else {
if((state_val_23261 === (11))){
var inst_23237 = (state_23260[(7)]);
var inst_23247 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23260__$1,(8),inst_23247,inst_23237);
} else {
if((state_val_23261 === (9))){
var state_23260__$1 = state_23260;
var statearr_23274_23338 = state_23260__$1;
(statearr_23274_23338[(2)] = tc);

(statearr_23274_23338[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (5))){
var inst_23240 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23241 = cljs.core.async.close_BANG_.call(null,fc);
var state_23260__$1 = (function (){var statearr_23275 = state_23260;
(statearr_23275[(8)] = inst_23240);

return statearr_23275;
})();
var statearr_23276_23342 = state_23260__$1;
(statearr_23276_23342[(2)] = inst_23241);

(statearr_23276_23342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (14))){
var inst_23254 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
var statearr_23277_23348 = state_23260__$1;
(statearr_23277_23348[(2)] = inst_23254);

(statearr_23277_23348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (10))){
var state_23260__$1 = state_23260;
var statearr_23278_23353 = state_23260__$1;
(statearr_23278_23353[(2)] = fc);

(statearr_23278_23353[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23261 === (8))){
var inst_23249 = (state_23260[(2)]);
var state_23260__$1 = state_23260;
if(cljs.core.truth_(inst_23249)){
var statearr_23279_23355 = state_23260__$1;
(statearr_23279_23355[(1)] = (12));

} else {
var statearr_23280_23357 = state_23260__$1;
(statearr_23280_23357[(1)] = (13));

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
});})(c__21983__auto___23302,tc,fc))
;
return ((function (switch__21732__auto__,c__21983__auto___23302,tc,fc){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_23286 = [null,null,null,null,null,null,null,null,null];
(statearr_23286[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_23286[(1)] = (1));

return statearr_23286;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_23260){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_23260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e23288){if((e23288 instanceof Object)){
var ex__21736__auto__ = e23288;
var statearr_23289_23364 = state_23260;
(statearr_23289_23364[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23368 = state_23260;
state_23260 = G__23368;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_23260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_23260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___23302,tc,fc))
})();
var state__21985__auto__ = (function (){var statearr_23290 = f__21984__auto__.call(null);
(statearr_23290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___23302);

return statearr_23290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___23302,tc,fc))
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
var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__){
return (function (state_23441){
var state_val_23442 = (state_23441[(1)]);
if((state_val_23442 === (7))){
var inst_23437 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
var statearr_23444_23472 = state_23441__$1;
(statearr_23444_23472[(2)] = inst_23437);

(statearr_23444_23472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (1))){
var inst_23419 = init;
var state_23441__$1 = (function (){var statearr_23445 = state_23441;
(statearr_23445[(7)] = inst_23419);

return statearr_23445;
})();
var statearr_23446_23476 = state_23441__$1;
(statearr_23446_23476[(2)] = null);

(statearr_23446_23476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (4))){
var inst_23422 = (state_23441[(8)]);
var inst_23422__$1 = (state_23441[(2)]);
var inst_23423 = (inst_23422__$1 == null);
var state_23441__$1 = (function (){var statearr_23447 = state_23441;
(statearr_23447[(8)] = inst_23422__$1);

return statearr_23447;
})();
if(cljs.core.truth_(inst_23423)){
var statearr_23448_23477 = state_23441__$1;
(statearr_23448_23477[(1)] = (5));

} else {
var statearr_23449_23478 = state_23441__$1;
(statearr_23449_23478[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (6))){
var inst_23426 = (state_23441[(9)]);
var inst_23419 = (state_23441[(7)]);
var inst_23422 = (state_23441[(8)]);
var inst_23426__$1 = f.call(null,inst_23419,inst_23422);
var inst_23428 = cljs.core.reduced_QMARK_.call(null,inst_23426__$1);
var state_23441__$1 = (function (){var statearr_23450 = state_23441;
(statearr_23450[(9)] = inst_23426__$1);

return statearr_23450;
})();
if(inst_23428){
var statearr_23451_23482 = state_23441__$1;
(statearr_23451_23482[(1)] = (8));

} else {
var statearr_23452_23483 = state_23441__$1;
(statearr_23452_23483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (3))){
var inst_23439 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23441__$1,inst_23439);
} else {
if((state_val_23442 === (2))){
var state_23441__$1 = state_23441;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23441__$1,(4),ch);
} else {
if((state_val_23442 === (9))){
var inst_23426 = (state_23441[(9)]);
var inst_23419 = inst_23426;
var state_23441__$1 = (function (){var statearr_23456 = state_23441;
(statearr_23456[(7)] = inst_23419);

return statearr_23456;
})();
var statearr_23457_23486 = state_23441__$1;
(statearr_23457_23486[(2)] = null);

(statearr_23457_23486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (5))){
var inst_23419 = (state_23441[(7)]);
var state_23441__$1 = state_23441;
var statearr_23458_23488 = state_23441__$1;
(statearr_23458_23488[(2)] = inst_23419);

(statearr_23458_23488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (10))){
var inst_23434 = (state_23441[(2)]);
var state_23441__$1 = state_23441;
var statearr_23459_23489 = state_23441__$1;
(statearr_23459_23489[(2)] = inst_23434);

(statearr_23459_23489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23442 === (8))){
var inst_23426 = (state_23441[(9)]);
var inst_23430 = cljs.core.deref.call(null,inst_23426);
var state_23441__$1 = state_23441;
var statearr_23460_23491 = state_23441__$1;
(statearr_23460_23491[(2)] = inst_23430);

(statearr_23460_23491[(1)] = (10));


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
});})(c__21983__auto__))
;
return ((function (switch__21732__auto__,c__21983__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__21733__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21733__auto____0 = (function (){
var statearr_23465 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23465[(0)] = cljs$core$async$reduce_$_state_machine__21733__auto__);

(statearr_23465[(1)] = (1));

return statearr_23465;
});
var cljs$core$async$reduce_$_state_machine__21733__auto____1 = (function (state_23441){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_23441);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e23467){if((e23467 instanceof Object)){
var ex__21736__auto__ = e23467;
var statearr_23469_23494 = state_23441;
(statearr_23469_23494[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23441);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23497 = state_23441;
state_23441 = G__23497;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21733__auto__ = function(state_23441){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21733__auto____1.call(this,state_23441);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21733__auto____0;
cljs$core$async$reduce_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21733__auto____1;
return cljs$core$async$reduce_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__))
})();
var state__21985__auto__ = (function (){var statearr_23471 = f__21984__auto__.call(null);
(statearr_23471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_23471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__))
);

return c__21983__auto__;
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
var args23501 = [];
var len__19147__auto___23567 = arguments.length;
var i__19148__auto___23568 = (0);
while(true){
if((i__19148__auto___23568 < len__19147__auto___23567)){
args23501.push((arguments[i__19148__auto___23568]));

var G__23572 = (i__19148__auto___23568 + (1));
i__19148__auto___23568 = G__23572;
continue;
} else {
}
break;
}

var G__23507 = args23501.length;
switch (G__23507) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23501.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__){
return (function (state_23536){
var state_val_23537 = (state_23536[(1)]);
if((state_val_23537 === (7))){
var inst_23518 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23538_23577 = state_23536__$1;
(statearr_23538_23577[(2)] = inst_23518);

(statearr_23538_23577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (1))){
var inst_23511 = cljs.core.seq.call(null,coll);
var inst_23513 = inst_23511;
var state_23536__$1 = (function (){var statearr_23539 = state_23536;
(statearr_23539[(7)] = inst_23513);

return statearr_23539;
})();
var statearr_23540_23579 = state_23536__$1;
(statearr_23540_23579[(2)] = null);

(statearr_23540_23579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (4))){
var inst_23513 = (state_23536[(7)]);
var inst_23516 = cljs.core.first.call(null,inst_23513);
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23536__$1,(7),ch,inst_23516);
} else {
if((state_val_23537 === (13))){
var inst_23530 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23543_23583 = state_23536__$1;
(statearr_23543_23583[(2)] = inst_23530);

(statearr_23543_23583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (6))){
var inst_23521 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
if(cljs.core.truth_(inst_23521)){
var statearr_23545_23587 = state_23536__$1;
(statearr_23545_23587[(1)] = (8));

} else {
var statearr_23546_23588 = state_23536__$1;
(statearr_23546_23588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (3))){
var inst_23534 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23536__$1,inst_23534);
} else {
if((state_val_23537 === (12))){
var state_23536__$1 = state_23536;
var statearr_23547_23592 = state_23536__$1;
(statearr_23547_23592[(2)] = null);

(statearr_23547_23592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (2))){
var inst_23513 = (state_23536[(7)]);
var state_23536__$1 = state_23536;
if(cljs.core.truth_(inst_23513)){
var statearr_23548_23597 = state_23536__$1;
(statearr_23548_23597[(1)] = (4));

} else {
var statearr_23549_23598 = state_23536__$1;
(statearr_23549_23598[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (11))){
var inst_23527 = cljs.core.async.close_BANG_.call(null,ch);
var state_23536__$1 = state_23536;
var statearr_23550_23599 = state_23536__$1;
(statearr_23550_23599[(2)] = inst_23527);

(statearr_23550_23599[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (9))){
var state_23536__$1 = state_23536;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23551_23600 = state_23536__$1;
(statearr_23551_23600[(1)] = (11));

} else {
var statearr_23552_23601 = state_23536__$1;
(statearr_23552_23601[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (5))){
var inst_23513 = (state_23536[(7)]);
var state_23536__$1 = state_23536;
var statearr_23553_23602 = state_23536__$1;
(statearr_23553_23602[(2)] = inst_23513);

(statearr_23553_23602[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (10))){
var inst_23532 = (state_23536[(2)]);
var state_23536__$1 = state_23536;
var statearr_23554_23606 = state_23536__$1;
(statearr_23554_23606[(2)] = inst_23532);

(statearr_23554_23606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23537 === (8))){
var inst_23513 = (state_23536[(7)]);
var inst_23523 = cljs.core.next.call(null,inst_23513);
var inst_23513__$1 = inst_23523;
var state_23536__$1 = (function (){var statearr_23555 = state_23536;
(statearr_23555[(7)] = inst_23513__$1);

return statearr_23555;
})();
var statearr_23556_23607 = state_23536__$1;
(statearr_23556_23607[(2)] = null);

(statearr_23556_23607[(1)] = (2));


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
});})(c__21983__auto__))
;
return ((function (switch__21732__auto__,c__21983__auto__){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_23563 = [null,null,null,null,null,null,null,null];
(statearr_23563[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_23563[(1)] = (1));

return statearr_23563;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_23536){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_23536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e23564){if((e23564 instanceof Object)){
var ex__21736__auto__ = e23564;
var statearr_23565_23613 = state_23536;
(statearr_23565_23613[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23614 = state_23536;
state_23536 = G__23614;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_23536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_23536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__))
})();
var state__21985__auto__ = (function (){var statearr_23566 = f__21984__auto__.call(null);
(statearr_23566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_23566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__))
);

return c__21983__auto__;
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
var x__18744__auto__ = (((_ == null))?null:_);
var m__18745__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,_);
} else {
var m__18745__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,_);
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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__18745__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m,ch);
} else {
var m__18745__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m,ch);
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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m);
} else {
var m__18745__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async23941 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23941 = (function (mult,ch,cs,meta23942){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23942 = meta23942;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23943,meta23942__$1){
var self__ = this;
var _23943__$1 = this;
return (new cljs.core.async.t_cljs$core$async23941(self__.mult,self__.ch,self__.cs,meta23942__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23943){
var self__ = this;
var _23943__$1 = this;
return self__.meta23942;
});})(cs))
;

cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23941.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23941.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23942","meta23942",450012143,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23941.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23941.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23941";

cljs.core.async.t_cljs$core$async23941.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async23941");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23941 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23941(mult__$1,ch__$1,cs__$1,meta23942){
return (new cljs.core.async.t_cljs$core$async23941(mult__$1,ch__$1,cs__$1,meta23942));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23941(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21983__auto___24232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___24232,cs,m,dchan,dctr,done){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___24232,cs,m,dchan,dctr,done){
return (function (state_24095){
var state_val_24096 = (state_24095[(1)]);
if((state_val_24096 === (7))){
var inst_24090 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24097_24237 = state_24095__$1;
(statearr_24097_24237[(2)] = inst_24090);

(statearr_24097_24237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (20))){
var inst_23986 = (state_24095[(7)]);
var inst_23999 = cljs.core.first.call(null,inst_23986);
var inst_24000 = cljs.core.nth.call(null,inst_23999,(0),null);
var inst_24001 = cljs.core.nth.call(null,inst_23999,(1),null);
var state_24095__$1 = (function (){var statearr_24098 = state_24095;
(statearr_24098[(8)] = inst_24000);

return statearr_24098;
})();
if(cljs.core.truth_(inst_24001)){
var statearr_24100_24240 = state_24095__$1;
(statearr_24100_24240[(1)] = (22));

} else {
var statearr_24102_24241 = state_24095__$1;
(statearr_24102_24241[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (27))){
var inst_24030 = (state_24095[(9)]);
var inst_24032 = (state_24095[(10)]);
var inst_24039 = (state_24095[(11)]);
var inst_23951 = (state_24095[(12)]);
var inst_24039__$1 = cljs.core._nth.call(null,inst_24030,inst_24032);
var inst_24040 = cljs.core.async.put_BANG_.call(null,inst_24039__$1,inst_23951,done);
var state_24095__$1 = (function (){var statearr_24103 = state_24095;
(statearr_24103[(11)] = inst_24039__$1);

return statearr_24103;
})();
if(cljs.core.truth_(inst_24040)){
var statearr_24104_24249 = state_24095__$1;
(statearr_24104_24249[(1)] = (30));

} else {
var statearr_24106_24250 = state_24095__$1;
(statearr_24106_24250[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (1))){
var state_24095__$1 = state_24095;
var statearr_24107_24251 = state_24095__$1;
(statearr_24107_24251[(2)] = null);

(statearr_24107_24251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (24))){
var inst_23986 = (state_24095[(7)]);
var inst_24006 = (state_24095[(2)]);
var inst_24007 = cljs.core.next.call(null,inst_23986);
var inst_23961 = inst_24007;
var inst_23962 = null;
var inst_23963 = (0);
var inst_23964 = (0);
var state_24095__$1 = (function (){var statearr_24111 = state_24095;
(statearr_24111[(13)] = inst_23963);

(statearr_24111[(14)] = inst_24006);

(statearr_24111[(15)] = inst_23961);

(statearr_24111[(16)] = inst_23964);

(statearr_24111[(17)] = inst_23962);

return statearr_24111;
})();
var statearr_24113_24262 = state_24095__$1;
(statearr_24113_24262[(2)] = null);

(statearr_24113_24262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (39))){
var state_24095__$1 = state_24095;
var statearr_24119_24266 = state_24095__$1;
(statearr_24119_24266[(2)] = null);

(statearr_24119_24266[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (4))){
var inst_23951 = (state_24095[(12)]);
var inst_23951__$1 = (state_24095[(2)]);
var inst_23952 = (inst_23951__$1 == null);
var state_24095__$1 = (function (){var statearr_24121 = state_24095;
(statearr_24121[(12)] = inst_23951__$1);

return statearr_24121;
})();
if(cljs.core.truth_(inst_23952)){
var statearr_24122_24274 = state_24095__$1;
(statearr_24122_24274[(1)] = (5));

} else {
var statearr_24124_24275 = state_24095__$1;
(statearr_24124_24275[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (15))){
var inst_23963 = (state_24095[(13)]);
var inst_23961 = (state_24095[(15)]);
var inst_23964 = (state_24095[(16)]);
var inst_23962 = (state_24095[(17)]);
var inst_23980 = (state_24095[(2)]);
var inst_23981 = (inst_23964 + (1));
var tmp24115 = inst_23963;
var tmp24116 = inst_23961;
var tmp24117 = inst_23962;
var inst_23961__$1 = tmp24116;
var inst_23962__$1 = tmp24117;
var inst_23963__$1 = tmp24115;
var inst_23964__$1 = inst_23981;
var state_24095__$1 = (function (){var statearr_24125 = state_24095;
(statearr_24125[(13)] = inst_23963__$1);

(statearr_24125[(18)] = inst_23980);

(statearr_24125[(15)] = inst_23961__$1);

(statearr_24125[(16)] = inst_23964__$1);

(statearr_24125[(17)] = inst_23962__$1);

return statearr_24125;
})();
var statearr_24127_24280 = state_24095__$1;
(statearr_24127_24280[(2)] = null);

(statearr_24127_24280[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (21))){
var inst_24011 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24131_24281 = state_24095__$1;
(statearr_24131_24281[(2)] = inst_24011);

(statearr_24131_24281[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (31))){
var inst_24039 = (state_24095[(11)]);
var inst_24043 = done.call(null,null);
var inst_24044 = cljs.core.async.untap_STAR_.call(null,m,inst_24039);
var state_24095__$1 = (function (){var statearr_24134 = state_24095;
(statearr_24134[(19)] = inst_24043);

return statearr_24134;
})();
var statearr_24135_24285 = state_24095__$1;
(statearr_24135_24285[(2)] = inst_24044);

(statearr_24135_24285[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (32))){
var inst_24029 = (state_24095[(20)]);
var inst_24031 = (state_24095[(21)]);
var inst_24030 = (state_24095[(9)]);
var inst_24032 = (state_24095[(10)]);
var inst_24046 = (state_24095[(2)]);
var inst_24047 = (inst_24032 + (1));
var tmp24128 = inst_24029;
var tmp24129 = inst_24031;
var tmp24130 = inst_24030;
var inst_24029__$1 = tmp24128;
var inst_24030__$1 = tmp24130;
var inst_24031__$1 = tmp24129;
var inst_24032__$1 = inst_24047;
var state_24095__$1 = (function (){var statearr_24137 = state_24095;
(statearr_24137[(20)] = inst_24029__$1);

(statearr_24137[(22)] = inst_24046);

(statearr_24137[(21)] = inst_24031__$1);

(statearr_24137[(9)] = inst_24030__$1);

(statearr_24137[(10)] = inst_24032__$1);

return statearr_24137;
})();
var statearr_24140_24289 = state_24095__$1;
(statearr_24140_24289[(2)] = null);

(statearr_24140_24289[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (40))){
var inst_24059 = (state_24095[(23)]);
var inst_24063 = done.call(null,null);
var inst_24064 = cljs.core.async.untap_STAR_.call(null,m,inst_24059);
var state_24095__$1 = (function (){var statearr_24141 = state_24095;
(statearr_24141[(24)] = inst_24063);

return statearr_24141;
})();
var statearr_24143_24290 = state_24095__$1;
(statearr_24143_24290[(2)] = inst_24064);

(statearr_24143_24290[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (33))){
var inst_24050 = (state_24095[(25)]);
var inst_24052 = cljs.core.chunked_seq_QMARK_.call(null,inst_24050);
var state_24095__$1 = state_24095;
if(inst_24052){
var statearr_24144_24294 = state_24095__$1;
(statearr_24144_24294[(1)] = (36));

} else {
var statearr_24145_24295 = state_24095__$1;
(statearr_24145_24295[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (13))){
var inst_23971 = (state_24095[(26)]);
var inst_23975 = cljs.core.async.close_BANG_.call(null,inst_23971);
var state_24095__$1 = state_24095;
var statearr_24146_24298 = state_24095__$1;
(statearr_24146_24298[(2)] = inst_23975);

(statearr_24146_24298[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (22))){
var inst_24000 = (state_24095[(8)]);
var inst_24003 = cljs.core.async.close_BANG_.call(null,inst_24000);
var state_24095__$1 = state_24095;
var statearr_24147_24301 = state_24095__$1;
(statearr_24147_24301[(2)] = inst_24003);

(statearr_24147_24301[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (36))){
var inst_24050 = (state_24095[(25)]);
var inst_24054 = cljs.core.chunk_first.call(null,inst_24050);
var inst_24055 = cljs.core.chunk_rest.call(null,inst_24050);
var inst_24056 = cljs.core.count.call(null,inst_24054);
var inst_24029 = inst_24055;
var inst_24030 = inst_24054;
var inst_24031 = inst_24056;
var inst_24032 = (0);
var state_24095__$1 = (function (){var statearr_24150 = state_24095;
(statearr_24150[(20)] = inst_24029);

(statearr_24150[(21)] = inst_24031);

(statearr_24150[(9)] = inst_24030);

(statearr_24150[(10)] = inst_24032);

return statearr_24150;
})();
var statearr_24151_24303 = state_24095__$1;
(statearr_24151_24303[(2)] = null);

(statearr_24151_24303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (41))){
var inst_24050 = (state_24095[(25)]);
var inst_24066 = (state_24095[(2)]);
var inst_24068 = cljs.core.next.call(null,inst_24050);
var inst_24029 = inst_24068;
var inst_24030 = null;
var inst_24031 = (0);
var inst_24032 = (0);
var state_24095__$1 = (function (){var statearr_24152 = state_24095;
(statearr_24152[(20)] = inst_24029);

(statearr_24152[(21)] = inst_24031);

(statearr_24152[(9)] = inst_24030);

(statearr_24152[(10)] = inst_24032);

(statearr_24152[(27)] = inst_24066);

return statearr_24152;
})();
var statearr_24153_24309 = state_24095__$1;
(statearr_24153_24309[(2)] = null);

(statearr_24153_24309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (43))){
var state_24095__$1 = state_24095;
var statearr_24154_24310 = state_24095__$1;
(statearr_24154_24310[(2)] = null);

(statearr_24154_24310[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (29))){
var inst_24076 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24155_24313 = state_24095__$1;
(statearr_24155_24313[(2)] = inst_24076);

(statearr_24155_24313[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (44))){
var inst_24087 = (state_24095[(2)]);
var state_24095__$1 = (function (){var statearr_24156 = state_24095;
(statearr_24156[(28)] = inst_24087);

return statearr_24156;
})();
var statearr_24158_24315 = state_24095__$1;
(statearr_24158_24315[(2)] = null);

(statearr_24158_24315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (6))){
var inst_24021 = (state_24095[(29)]);
var inst_24020 = cljs.core.deref.call(null,cs);
var inst_24021__$1 = cljs.core.keys.call(null,inst_24020);
var inst_24022 = cljs.core.count.call(null,inst_24021__$1);
var inst_24023 = cljs.core.reset_BANG_.call(null,dctr,inst_24022);
var inst_24028 = cljs.core.seq.call(null,inst_24021__$1);
var inst_24029 = inst_24028;
var inst_24030 = null;
var inst_24031 = (0);
var inst_24032 = (0);
var state_24095__$1 = (function (){var statearr_24161 = state_24095;
(statearr_24161[(30)] = inst_24023);

(statearr_24161[(20)] = inst_24029);

(statearr_24161[(21)] = inst_24031);

(statearr_24161[(29)] = inst_24021__$1);

(statearr_24161[(9)] = inst_24030);

(statearr_24161[(10)] = inst_24032);

return statearr_24161;
})();
var statearr_24162_24319 = state_24095__$1;
(statearr_24162_24319[(2)] = null);

(statearr_24162_24319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (28))){
var inst_24029 = (state_24095[(20)]);
var inst_24050 = (state_24095[(25)]);
var inst_24050__$1 = cljs.core.seq.call(null,inst_24029);
var state_24095__$1 = (function (){var statearr_24163 = state_24095;
(statearr_24163[(25)] = inst_24050__$1);

return statearr_24163;
})();
if(inst_24050__$1){
var statearr_24164_24321 = state_24095__$1;
(statearr_24164_24321[(1)] = (33));

} else {
var statearr_24165_24323 = state_24095__$1;
(statearr_24165_24323[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (25))){
var inst_24031 = (state_24095[(21)]);
var inst_24032 = (state_24095[(10)]);
var inst_24036 = (inst_24032 < inst_24031);
var inst_24037 = inst_24036;
var state_24095__$1 = state_24095;
if(cljs.core.truth_(inst_24037)){
var statearr_24166_24330 = state_24095__$1;
(statearr_24166_24330[(1)] = (27));

} else {
var statearr_24167_24332 = state_24095__$1;
(statearr_24167_24332[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (34))){
var state_24095__$1 = state_24095;
var statearr_24168_24333 = state_24095__$1;
(statearr_24168_24333[(2)] = null);

(statearr_24168_24333[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (17))){
var state_24095__$1 = state_24095;
var statearr_24169_24336 = state_24095__$1;
(statearr_24169_24336[(2)] = null);

(statearr_24169_24336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (3))){
var inst_24092 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24095__$1,inst_24092);
} else {
if((state_val_24096 === (12))){
var inst_24016 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24170_24344 = state_24095__$1;
(statearr_24170_24344[(2)] = inst_24016);

(statearr_24170_24344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (2))){
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(4),ch);
} else {
if((state_val_24096 === (23))){
var state_24095__$1 = state_24095;
var statearr_24171_24345 = state_24095__$1;
(statearr_24171_24345[(2)] = null);

(statearr_24171_24345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (35))){
var inst_24074 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24174_24346 = state_24095__$1;
(statearr_24174_24346[(2)] = inst_24074);

(statearr_24174_24346[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (19))){
var inst_23986 = (state_24095[(7)]);
var inst_23992 = cljs.core.chunk_first.call(null,inst_23986);
var inst_23993 = cljs.core.chunk_rest.call(null,inst_23986);
var inst_23995 = cljs.core.count.call(null,inst_23992);
var inst_23961 = inst_23993;
var inst_23962 = inst_23992;
var inst_23963 = inst_23995;
var inst_23964 = (0);
var state_24095__$1 = (function (){var statearr_24176 = state_24095;
(statearr_24176[(13)] = inst_23963);

(statearr_24176[(15)] = inst_23961);

(statearr_24176[(16)] = inst_23964);

(statearr_24176[(17)] = inst_23962);

return statearr_24176;
})();
var statearr_24177_24351 = state_24095__$1;
(statearr_24177_24351[(2)] = null);

(statearr_24177_24351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (11))){
var inst_23986 = (state_24095[(7)]);
var inst_23961 = (state_24095[(15)]);
var inst_23986__$1 = cljs.core.seq.call(null,inst_23961);
var state_24095__$1 = (function (){var statearr_24178 = state_24095;
(statearr_24178[(7)] = inst_23986__$1);

return statearr_24178;
})();
if(inst_23986__$1){
var statearr_24179_24356 = state_24095__$1;
(statearr_24179_24356[(1)] = (16));

} else {
var statearr_24180_24358 = state_24095__$1;
(statearr_24180_24358[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (9))){
var inst_24018 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24181_24361 = state_24095__$1;
(statearr_24181_24361[(2)] = inst_24018);

(statearr_24181_24361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (5))){
var inst_23959 = cljs.core.deref.call(null,cs);
var inst_23960 = cljs.core.seq.call(null,inst_23959);
var inst_23961 = inst_23960;
var inst_23962 = null;
var inst_23963 = (0);
var inst_23964 = (0);
var state_24095__$1 = (function (){var statearr_24182 = state_24095;
(statearr_24182[(13)] = inst_23963);

(statearr_24182[(15)] = inst_23961);

(statearr_24182[(16)] = inst_23964);

(statearr_24182[(17)] = inst_23962);

return statearr_24182;
})();
var statearr_24183_24367 = state_24095__$1;
(statearr_24183_24367[(2)] = null);

(statearr_24183_24367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (14))){
var state_24095__$1 = state_24095;
var statearr_24184_24371 = state_24095__$1;
(statearr_24184_24371[(2)] = null);

(statearr_24184_24371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (45))){
var inst_24084 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24185_24373 = state_24095__$1;
(statearr_24185_24373[(2)] = inst_24084);

(statearr_24185_24373[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (26))){
var inst_24021 = (state_24095[(29)]);
var inst_24078 = (state_24095[(2)]);
var inst_24081 = cljs.core.seq.call(null,inst_24021);
var state_24095__$1 = (function (){var statearr_24187 = state_24095;
(statearr_24187[(31)] = inst_24078);

return statearr_24187;
})();
if(inst_24081){
var statearr_24189_24374 = state_24095__$1;
(statearr_24189_24374[(1)] = (42));

} else {
var statearr_24190_24375 = state_24095__$1;
(statearr_24190_24375[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (16))){
var inst_23986 = (state_24095[(7)]);
var inst_23988 = cljs.core.chunked_seq_QMARK_.call(null,inst_23986);
var state_24095__$1 = state_24095;
if(inst_23988){
var statearr_24192_24376 = state_24095__$1;
(statearr_24192_24376[(1)] = (19));

} else {
var statearr_24193_24377 = state_24095__$1;
(statearr_24193_24377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (38))){
var inst_24071 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24194_24379 = state_24095__$1;
(statearr_24194_24379[(2)] = inst_24071);

(statearr_24194_24379[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (30))){
var state_24095__$1 = state_24095;
var statearr_24195_24381 = state_24095__$1;
(statearr_24195_24381[(2)] = null);

(statearr_24195_24381[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (10))){
var inst_23964 = (state_24095[(16)]);
var inst_23962 = (state_24095[(17)]);
var inst_23970 = cljs.core._nth.call(null,inst_23962,inst_23964);
var inst_23971 = cljs.core.nth.call(null,inst_23970,(0),null);
var inst_23972 = cljs.core.nth.call(null,inst_23970,(1),null);
var state_24095__$1 = (function (){var statearr_24196 = state_24095;
(statearr_24196[(26)] = inst_23971);

return statearr_24196;
})();
if(cljs.core.truth_(inst_23972)){
var statearr_24197_24386 = state_24095__$1;
(statearr_24197_24386[(1)] = (13));

} else {
var statearr_24198_24388 = state_24095__$1;
(statearr_24198_24388[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (18))){
var inst_24014 = (state_24095[(2)]);
var state_24095__$1 = state_24095;
var statearr_24199_24391 = state_24095__$1;
(statearr_24199_24391[(2)] = inst_24014);

(statearr_24199_24391[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (42))){
var state_24095__$1 = state_24095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24095__$1,(45),dchan);
} else {
if((state_val_24096 === (37))){
var inst_24050 = (state_24095[(25)]);
var inst_24059 = (state_24095[(23)]);
var inst_23951 = (state_24095[(12)]);
var inst_24059__$1 = cljs.core.first.call(null,inst_24050);
var inst_24060 = cljs.core.async.put_BANG_.call(null,inst_24059__$1,inst_23951,done);
var state_24095__$1 = (function (){var statearr_24200 = state_24095;
(statearr_24200[(23)] = inst_24059__$1);

return statearr_24200;
})();
if(cljs.core.truth_(inst_24060)){
var statearr_24201_24393 = state_24095__$1;
(statearr_24201_24393[(1)] = (39));

} else {
var statearr_24202_24394 = state_24095__$1;
(statearr_24202_24394[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24096 === (8))){
var inst_23963 = (state_24095[(13)]);
var inst_23964 = (state_24095[(16)]);
var inst_23966 = (inst_23964 < inst_23963);
var inst_23967 = inst_23966;
var state_24095__$1 = state_24095;
if(cljs.core.truth_(inst_23967)){
var statearr_24204_24395 = state_24095__$1;
(statearr_24204_24395[(1)] = (10));

} else {
var statearr_24205_24396 = state_24095__$1;
(statearr_24205_24396[(1)] = (11));

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
});})(c__21983__auto___24232,cs,m,dchan,dctr,done))
;
return ((function (switch__21732__auto__,c__21983__auto___24232,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__21733__auto__ = null;
var cljs$core$async$mult_$_state_machine__21733__auto____0 = (function (){
var statearr_24211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24211[(0)] = cljs$core$async$mult_$_state_machine__21733__auto__);

(statearr_24211[(1)] = (1));

return statearr_24211;
});
var cljs$core$async$mult_$_state_machine__21733__auto____1 = (function (state_24095){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_24095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e24212){if((e24212 instanceof Object)){
var ex__21736__auto__ = e24212;
var statearr_24213_24399 = state_24095;
(statearr_24213_24399[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24212;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24401 = state_24095;
state_24095 = G__24401;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21733__auto__ = function(state_24095){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21733__auto____1.call(this,state_24095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21733__auto____0;
cljs$core$async$mult_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21733__auto____1;
return cljs$core$async$mult_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___24232,cs,m,dchan,dctr,done))
})();
var state__21985__auto__ = (function (){var statearr_24214 = f__21984__auto__.call(null);
(statearr_24214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___24232);

return statearr_24214;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___24232,cs,m,dchan,dctr,done))
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
var args24404 = [];
var len__19147__auto___24411 = arguments.length;
var i__19148__auto___24412 = (0);
while(true){
if((i__19148__auto___24412 < len__19147__auto___24411)){
args24404.push((arguments[i__19148__auto___24412]));

var G__24413 = (i__19148__auto___24412 + (1));
i__19148__auto___24412 = G__24413;
continue;
} else {
}
break;
}

var G__24408 = args24404.length;
switch (G__24408) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24404.length)].join('')));

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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m,ch);
} else {
var m__18745__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m,ch);
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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m,ch);
} else {
var m__18745__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m,ch);
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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m);
} else {
var m__18745__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m);
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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m,state_map);
} else {
var m__18745__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m,state_map);
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
var x__18744__auto__ = (((m == null))?null:m);
var m__18745__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,m,mode);
} else {
var m__18745__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19154__auto__ = [];
var len__19147__auto___24445 = arguments.length;
var i__19148__auto___24446 = (0);
while(true){
if((i__19148__auto___24446 < len__19147__auto___24445)){
args__19154__auto__.push((arguments[i__19148__auto___24446]));

var G__24447 = (i__19148__auto___24446 + (1));
i__19148__auto___24446 = G__24447;
continue;
} else {
}
break;
}

var argseq__19155__auto__ = ((((3) < args__19154__auto__.length))?(new cljs.core.IndexedSeq(args__19154__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19155__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__24439){
var map__24440 = p__24439;
var map__24440__$1 = ((((!((map__24440 == null)))?((((map__24440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24440):map__24440);
var opts = map__24440__$1;
var statearr_24442_24449 = state;
(statearr_24442_24449[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__24440,map__24440__$1,opts){
return (function (val){
var statearr_24443_24450 = state;
(statearr_24443_24450[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__24440,map__24440__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_24444_24451 = state;
(statearr_24444_24451[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq24435){
var G__24436 = cljs.core.first.call(null,seq24435);
var seq24435__$1 = cljs.core.next.call(null,seq24435);
var G__24437 = cljs.core.first.call(null,seq24435__$1);
var seq24435__$2 = cljs.core.next.call(null,seq24435__$1);
var G__24438 = cljs.core.first.call(null,seq24435__$2);
var seq24435__$3 = cljs.core.next.call(null,seq24435__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__24436,G__24437,G__24438,seq24435__$3);
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
if(typeof cljs.core.async.t_cljs$core$async24633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24633 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24634){
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
this.meta24634 = meta24634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24635,meta24634__$1){
var self__ = this;
var _24635__$1 = this;
return (new cljs.core.async.t_cljs$core$async24633(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24634__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24635){
var self__ = this;
var _24635__$1 = this;
return self__.meta24634;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async24633.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24634","meta24634",-2054823085,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24633";

cljs.core.async.t_cljs$core$async24633.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async24633");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24633 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24633(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24634){
return (new cljs.core.async.t_cljs$core$async24633(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24634));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24633(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21983__auto___24816 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___24816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___24816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24734){
var state_val_24735 = (state_24734[(1)]);
if((state_val_24735 === (7))){
var inst_24651 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
var statearr_24736_24826 = state_24734__$1;
(statearr_24736_24826[(2)] = inst_24651);

(statearr_24736_24826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (20))){
var inst_24663 = (state_24734[(7)]);
var state_24734__$1 = state_24734;
var statearr_24737_24833 = state_24734__$1;
(statearr_24737_24833[(2)] = inst_24663);

(statearr_24737_24833[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (27))){
var state_24734__$1 = state_24734;
var statearr_24738_24841 = state_24734__$1;
(statearr_24738_24841[(2)] = null);

(statearr_24738_24841[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (1))){
var inst_24639 = (state_24734[(8)]);
var inst_24639__$1 = calc_state.call(null);
var inst_24641 = (inst_24639__$1 == null);
var inst_24642 = cljs.core.not.call(null,inst_24641);
var state_24734__$1 = (function (){var statearr_24740 = state_24734;
(statearr_24740[(8)] = inst_24639__$1);

return statearr_24740;
})();
if(inst_24642){
var statearr_24741_24857 = state_24734__$1;
(statearr_24741_24857[(1)] = (2));

} else {
var statearr_24742_24860 = state_24734__$1;
(statearr_24742_24860[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (24))){
var inst_24686 = (state_24734[(9)]);
var inst_24693 = (state_24734[(10)]);
var inst_24707 = (state_24734[(11)]);
var inst_24707__$1 = inst_24686.call(null,inst_24693);
var state_24734__$1 = (function (){var statearr_24743 = state_24734;
(statearr_24743[(11)] = inst_24707__$1);

return statearr_24743;
})();
if(cljs.core.truth_(inst_24707__$1)){
var statearr_24746_24865 = state_24734__$1;
(statearr_24746_24865[(1)] = (29));

} else {
var statearr_24747_24872 = state_24734__$1;
(statearr_24747_24872[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (4))){
var inst_24654 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
if(cljs.core.truth_(inst_24654)){
var statearr_24748_24878 = state_24734__$1;
(statearr_24748_24878[(1)] = (8));

} else {
var statearr_24749_24879 = state_24734__$1;
(statearr_24749_24879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (15))){
var inst_24680 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
if(cljs.core.truth_(inst_24680)){
var statearr_24750_24883 = state_24734__$1;
(statearr_24750_24883[(1)] = (19));

} else {
var statearr_24752_24884 = state_24734__$1;
(statearr_24752_24884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (21))){
var inst_24685 = (state_24734[(12)]);
var inst_24685__$1 = (state_24734[(2)]);
var inst_24686 = cljs.core.get.call(null,inst_24685__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24687 = cljs.core.get.call(null,inst_24685__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24688 = cljs.core.get.call(null,inst_24685__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24734__$1 = (function (){var statearr_24753 = state_24734;
(statearr_24753[(13)] = inst_24687);

(statearr_24753[(9)] = inst_24686);

(statearr_24753[(12)] = inst_24685__$1);

return statearr_24753;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24734__$1,(22),inst_24688);
} else {
if((state_val_24735 === (31))){
var inst_24715 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
if(cljs.core.truth_(inst_24715)){
var statearr_24755_24895 = state_24734__$1;
(statearr_24755_24895[(1)] = (32));

} else {
var statearr_24756_24897 = state_24734__$1;
(statearr_24756_24897[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (32))){
var inst_24692 = (state_24734[(14)]);
var state_24734__$1 = state_24734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24734__$1,(35),out,inst_24692);
} else {
if((state_val_24735 === (33))){
var inst_24685 = (state_24734[(12)]);
var inst_24663 = inst_24685;
var state_24734__$1 = (function (){var statearr_24757 = state_24734;
(statearr_24757[(7)] = inst_24663);

return statearr_24757;
})();
var statearr_24758_24909 = state_24734__$1;
(statearr_24758_24909[(2)] = null);

(statearr_24758_24909[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (13))){
var inst_24663 = (state_24734[(7)]);
var inst_24670 = inst_24663.cljs$lang$protocol_mask$partition0$;
var inst_24671 = (inst_24670 & (64));
var inst_24672 = inst_24663.cljs$core$ISeq$;
var inst_24673 = (inst_24671) || (inst_24672);
var state_24734__$1 = state_24734;
if(cljs.core.truth_(inst_24673)){
var statearr_24759_24910 = state_24734__$1;
(statearr_24759_24910[(1)] = (16));

} else {
var statearr_24760_24911 = state_24734__$1;
(statearr_24760_24911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (22))){
var inst_24693 = (state_24734[(10)]);
var inst_24692 = (state_24734[(14)]);
var inst_24691 = (state_24734[(2)]);
var inst_24692__$1 = cljs.core.nth.call(null,inst_24691,(0),null);
var inst_24693__$1 = cljs.core.nth.call(null,inst_24691,(1),null);
var inst_24694 = (inst_24692__$1 == null);
var inst_24695 = cljs.core._EQ_.call(null,inst_24693__$1,change);
var inst_24696 = (inst_24694) || (inst_24695);
var state_24734__$1 = (function (){var statearr_24761 = state_24734;
(statearr_24761[(10)] = inst_24693__$1);

(statearr_24761[(14)] = inst_24692__$1);

return statearr_24761;
})();
if(cljs.core.truth_(inst_24696)){
var statearr_24762_24916 = state_24734__$1;
(statearr_24762_24916[(1)] = (23));

} else {
var statearr_24763_24917 = state_24734__$1;
(statearr_24763_24917[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (36))){
var inst_24685 = (state_24734[(12)]);
var inst_24663 = inst_24685;
var state_24734__$1 = (function (){var statearr_24764 = state_24734;
(statearr_24764[(7)] = inst_24663);

return statearr_24764;
})();
var statearr_24765_24919 = state_24734__$1;
(statearr_24765_24919[(2)] = null);

(statearr_24765_24919[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (29))){
var inst_24707 = (state_24734[(11)]);
var state_24734__$1 = state_24734;
var statearr_24766_24924 = state_24734__$1;
(statearr_24766_24924[(2)] = inst_24707);

(statearr_24766_24924[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (6))){
var state_24734__$1 = state_24734;
var statearr_24767_24925 = state_24734__$1;
(statearr_24767_24925[(2)] = false);

(statearr_24767_24925[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (28))){
var inst_24703 = (state_24734[(2)]);
var inst_24704 = calc_state.call(null);
var inst_24663 = inst_24704;
var state_24734__$1 = (function (){var statearr_24768 = state_24734;
(statearr_24768[(7)] = inst_24663);

(statearr_24768[(15)] = inst_24703);

return statearr_24768;
})();
var statearr_24769_24931 = state_24734__$1;
(statearr_24769_24931[(2)] = null);

(statearr_24769_24931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (25))){
var inst_24729 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
var statearr_24770_24932 = state_24734__$1;
(statearr_24770_24932[(2)] = inst_24729);

(statearr_24770_24932[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (34))){
var inst_24727 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
var statearr_24771_24937 = state_24734__$1;
(statearr_24771_24937[(2)] = inst_24727);

(statearr_24771_24937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (17))){
var state_24734__$1 = state_24734;
var statearr_24772_24938 = state_24734__$1;
(statearr_24772_24938[(2)] = false);

(statearr_24772_24938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (3))){
var state_24734__$1 = state_24734;
var statearr_24773_24939 = state_24734__$1;
(statearr_24773_24939[(2)] = false);

(statearr_24773_24939[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (12))){
var inst_24731 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24734__$1,inst_24731);
} else {
if((state_val_24735 === (2))){
var inst_24639 = (state_24734[(8)]);
var inst_24644 = inst_24639.cljs$lang$protocol_mask$partition0$;
var inst_24645 = (inst_24644 & (64));
var inst_24646 = inst_24639.cljs$core$ISeq$;
var inst_24647 = (inst_24645) || (inst_24646);
var state_24734__$1 = state_24734;
if(cljs.core.truth_(inst_24647)){
var statearr_24774_24941 = state_24734__$1;
(statearr_24774_24941[(1)] = (5));

} else {
var statearr_24775_24942 = state_24734__$1;
(statearr_24775_24942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (23))){
var inst_24692 = (state_24734[(14)]);
var inst_24698 = (inst_24692 == null);
var state_24734__$1 = state_24734;
if(cljs.core.truth_(inst_24698)){
var statearr_24776_24943 = state_24734__$1;
(statearr_24776_24943[(1)] = (26));

} else {
var statearr_24777_24944 = state_24734__$1;
(statearr_24777_24944[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (35))){
var inst_24718 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
if(cljs.core.truth_(inst_24718)){
var statearr_24778_24946 = state_24734__$1;
(statearr_24778_24946[(1)] = (36));

} else {
var statearr_24779_24947 = state_24734__$1;
(statearr_24779_24947[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (19))){
var inst_24663 = (state_24734[(7)]);
var inst_24682 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24663);
var state_24734__$1 = state_24734;
var statearr_24780_24948 = state_24734__$1;
(statearr_24780_24948[(2)] = inst_24682);

(statearr_24780_24948[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (11))){
var inst_24663 = (state_24734[(7)]);
var inst_24667 = (inst_24663 == null);
var inst_24668 = cljs.core.not.call(null,inst_24667);
var state_24734__$1 = state_24734;
if(inst_24668){
var statearr_24781_24950 = state_24734__$1;
(statearr_24781_24950[(1)] = (13));

} else {
var statearr_24782_24951 = state_24734__$1;
(statearr_24782_24951[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (9))){
var inst_24639 = (state_24734[(8)]);
var state_24734__$1 = state_24734;
var statearr_24783_24952 = state_24734__$1;
(statearr_24783_24952[(2)] = inst_24639);

(statearr_24783_24952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (5))){
var state_24734__$1 = state_24734;
var statearr_24784_24953 = state_24734__$1;
(statearr_24784_24953[(2)] = true);

(statearr_24784_24953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (14))){
var state_24734__$1 = state_24734;
var statearr_24785_24954 = state_24734__$1;
(statearr_24785_24954[(2)] = false);

(statearr_24785_24954[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (26))){
var inst_24693 = (state_24734[(10)]);
var inst_24700 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24693);
var state_24734__$1 = state_24734;
var statearr_24786_24955 = state_24734__$1;
(statearr_24786_24955[(2)] = inst_24700);

(statearr_24786_24955[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (16))){
var state_24734__$1 = state_24734;
var statearr_24787_24957 = state_24734__$1;
(statearr_24787_24957[(2)] = true);

(statearr_24787_24957[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (38))){
var inst_24723 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
var statearr_24788_24958 = state_24734__$1;
(statearr_24788_24958[(2)] = inst_24723);

(statearr_24788_24958[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (30))){
var inst_24687 = (state_24734[(13)]);
var inst_24686 = (state_24734[(9)]);
var inst_24693 = (state_24734[(10)]);
var inst_24710 = cljs.core.empty_QMARK_.call(null,inst_24686);
var inst_24711 = inst_24687.call(null,inst_24693);
var inst_24712 = cljs.core.not.call(null,inst_24711);
var inst_24713 = (inst_24710) && (inst_24712);
var state_24734__$1 = state_24734;
var statearr_24789_24959 = state_24734__$1;
(statearr_24789_24959[(2)] = inst_24713);

(statearr_24789_24959[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (10))){
var inst_24639 = (state_24734[(8)]);
var inst_24659 = (state_24734[(2)]);
var inst_24660 = cljs.core.get.call(null,inst_24659,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24661 = cljs.core.get.call(null,inst_24659,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24662 = cljs.core.get.call(null,inst_24659,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24663 = inst_24639;
var state_24734__$1 = (function (){var statearr_24790 = state_24734;
(statearr_24790[(7)] = inst_24663);

(statearr_24790[(16)] = inst_24660);

(statearr_24790[(17)] = inst_24662);

(statearr_24790[(18)] = inst_24661);

return statearr_24790;
})();
var statearr_24791_24961 = state_24734__$1;
(statearr_24791_24961[(2)] = null);

(statearr_24791_24961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (18))){
var inst_24677 = (state_24734[(2)]);
var state_24734__$1 = state_24734;
var statearr_24792_24962 = state_24734__$1;
(statearr_24792_24962[(2)] = inst_24677);

(statearr_24792_24962[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (37))){
var state_24734__$1 = state_24734;
var statearr_24793_24964 = state_24734__$1;
(statearr_24793_24964[(2)] = null);

(statearr_24793_24964[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24735 === (8))){
var inst_24639 = (state_24734[(8)]);
var inst_24656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24639);
var state_24734__$1 = state_24734;
var statearr_24794_24965 = state_24734__$1;
(statearr_24794_24965[(2)] = inst_24656);

(statearr_24794_24965[(1)] = (10));


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
});})(c__21983__auto___24816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__21732__auto__,c__21983__auto___24816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__21733__auto__ = null;
var cljs$core$async$mix_$_state_machine__21733__auto____0 = (function (){
var statearr_24798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24798[(0)] = cljs$core$async$mix_$_state_machine__21733__auto__);

(statearr_24798[(1)] = (1));

return statearr_24798;
});
var cljs$core$async$mix_$_state_machine__21733__auto____1 = (function (state_24734){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_24734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e24799){if((e24799 instanceof Object)){
var ex__21736__auto__ = e24799;
var statearr_24800_24966 = state_24734;
(statearr_24800_24966[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24969 = state_24734;
state_24734 = G__24969;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21733__auto__ = function(state_24734){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21733__auto____1.call(this,state_24734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21733__auto____0;
cljs$core$async$mix_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21733__auto____1;
return cljs$core$async$mix_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___24816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21985__auto__ = (function (){var statearr_24801 = f__21984__auto__.call(null);
(statearr_24801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___24816);

return statearr_24801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___24816,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__18744__auto__ = (((p == null))?null:p);
var m__18745__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__18745__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__18744__auto__ = (((p == null))?null:p);
var m__18745__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,p,v,ch);
} else {
var m__18745__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24976 = [];
var len__19147__auto___24996 = arguments.length;
var i__19148__auto___24998 = (0);
while(true){
if((i__19148__auto___24998 < len__19147__auto___24996)){
args24976.push((arguments[i__19148__auto___24998]));

var G__24999 = (i__19148__auto___24998 + (1));
i__19148__auto___24998 = G__24999;
continue;
} else {
}
break;
}

var G__24980 = args24976.length;
switch (G__24980) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24976.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__18744__auto__ = (((p == null))?null:p);
var m__18745__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,p);
} else {
var m__18745__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,p);
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
var x__18744__auto__ = (((p == null))?null:p);
var m__18745__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__18744__auto__)]);
if(!((m__18745__auto__ == null))){
return m__18745__auto__.call(null,p,v);
} else {
var m__18745__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__18745__auto____$1 == null))){
return m__18745__auto____$1.call(null,p,v);
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
var args25011 = [];
var len__19147__auto___25138 = arguments.length;
var i__19148__auto___25139 = (0);
while(true){
if((i__19148__auto___25139 < len__19147__auto___25138)){
args25011.push((arguments[i__19148__auto___25139]));

var G__25140 = (i__19148__auto___25139 + (1));
i__19148__auto___25139 = G__25140;
continue;
} else {
}
break;
}

var G__25013 = args25011.length;
switch (G__25013) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25011.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18089__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18089__auto__,mults){
return (function (p1__25010_SHARP_){
if(cljs.core.truth_(p1__25010_SHARP_.call(null,topic))){
return p1__25010_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__25010_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18089__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async25014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25014 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta25015){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta25015 = meta25015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25016,meta25015__$1){
var self__ = this;
var _25016__$1 = this;
return (new cljs.core.async.t_cljs$core$async25014(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta25015__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25016){
var self__ = this;
var _25016__$1 = this;
return self__.meta25015;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25014.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta25015","meta25015",523656880,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async25014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25014";

cljs.core.async.t_cljs$core$async25014.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async25014");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async25014 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async25014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25015){
return (new cljs.core.async.t_cljs$core$async25014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta25015));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async25014(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21983__auto___25164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___25164,mults,ensure_mult,p){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___25164,mults,ensure_mult,p){
return (function (state_25090){
var state_val_25091 = (state_25090[(1)]);
if((state_val_25091 === (7))){
var inst_25086 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25092_25166 = state_25090__$1;
(statearr_25092_25166[(2)] = inst_25086);

(statearr_25092_25166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (20))){
var state_25090__$1 = state_25090;
var statearr_25093_25168 = state_25090__$1;
(statearr_25093_25168[(2)] = null);

(statearr_25093_25168[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (1))){
var state_25090__$1 = state_25090;
var statearr_25094_25170 = state_25090__$1;
(statearr_25094_25170[(2)] = null);

(statearr_25094_25170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (24))){
var inst_25069 = (state_25090[(7)]);
var inst_25078 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25069);
var state_25090__$1 = state_25090;
var statearr_25095_25173 = state_25090__$1;
(statearr_25095_25173[(2)] = inst_25078);

(statearr_25095_25173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (4))){
var inst_25021 = (state_25090[(8)]);
var inst_25021__$1 = (state_25090[(2)]);
var inst_25022 = (inst_25021__$1 == null);
var state_25090__$1 = (function (){var statearr_25096 = state_25090;
(statearr_25096[(8)] = inst_25021__$1);

return statearr_25096;
})();
if(cljs.core.truth_(inst_25022)){
var statearr_25097_25177 = state_25090__$1;
(statearr_25097_25177[(1)] = (5));

} else {
var statearr_25098_25178 = state_25090__$1;
(statearr_25098_25178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (15))){
var inst_25063 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25099_25180 = state_25090__$1;
(statearr_25099_25180[(2)] = inst_25063);

(statearr_25099_25180[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (21))){
var inst_25083 = (state_25090[(2)]);
var state_25090__$1 = (function (){var statearr_25100 = state_25090;
(statearr_25100[(9)] = inst_25083);

return statearr_25100;
})();
var statearr_25101_25181 = state_25090__$1;
(statearr_25101_25181[(2)] = null);

(statearr_25101_25181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (13))){
var inst_25045 = (state_25090[(10)]);
var inst_25047 = cljs.core.chunked_seq_QMARK_.call(null,inst_25045);
var state_25090__$1 = state_25090;
if(inst_25047){
var statearr_25102_25182 = state_25090__$1;
(statearr_25102_25182[(1)] = (16));

} else {
var statearr_25103_25183 = state_25090__$1;
(statearr_25103_25183[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (22))){
var inst_25075 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
if(cljs.core.truth_(inst_25075)){
var statearr_25104_25184 = state_25090__$1;
(statearr_25104_25184[(1)] = (23));

} else {
var statearr_25105_25185 = state_25090__$1;
(statearr_25105_25185[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (6))){
var inst_25071 = (state_25090[(11)]);
var inst_25069 = (state_25090[(7)]);
var inst_25021 = (state_25090[(8)]);
var inst_25069__$1 = topic_fn.call(null,inst_25021);
var inst_25070 = cljs.core.deref.call(null,mults);
var inst_25071__$1 = cljs.core.get.call(null,inst_25070,inst_25069__$1);
var state_25090__$1 = (function (){var statearr_25106 = state_25090;
(statearr_25106[(11)] = inst_25071__$1);

(statearr_25106[(7)] = inst_25069__$1);

return statearr_25106;
})();
if(cljs.core.truth_(inst_25071__$1)){
var statearr_25107_25186 = state_25090__$1;
(statearr_25107_25186[(1)] = (19));

} else {
var statearr_25108_25187 = state_25090__$1;
(statearr_25108_25187[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (25))){
var inst_25080 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25109_25188 = state_25090__$1;
(statearr_25109_25188[(2)] = inst_25080);

(statearr_25109_25188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (17))){
var inst_25045 = (state_25090[(10)]);
var inst_25054 = cljs.core.first.call(null,inst_25045);
var inst_25055 = cljs.core.async.muxch_STAR_.call(null,inst_25054);
var inst_25056 = cljs.core.async.close_BANG_.call(null,inst_25055);
var inst_25057 = cljs.core.next.call(null,inst_25045);
var inst_25031 = inst_25057;
var inst_25032 = null;
var inst_25033 = (0);
var inst_25034 = (0);
var state_25090__$1 = (function (){var statearr_25110 = state_25090;
(statearr_25110[(12)] = inst_25031);

(statearr_25110[(13)] = inst_25034);

(statearr_25110[(14)] = inst_25033);

(statearr_25110[(15)] = inst_25056);

(statearr_25110[(16)] = inst_25032);

return statearr_25110;
})();
var statearr_25111_25191 = state_25090__$1;
(statearr_25111_25191[(2)] = null);

(statearr_25111_25191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (3))){
var inst_25088 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25090__$1,inst_25088);
} else {
if((state_val_25091 === (12))){
var inst_25065 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25112_25192 = state_25090__$1;
(statearr_25112_25192[(2)] = inst_25065);

(statearr_25112_25192[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (2))){
var state_25090__$1 = state_25090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25090__$1,(4),ch);
} else {
if((state_val_25091 === (23))){
var state_25090__$1 = state_25090;
var statearr_25113_25195 = state_25090__$1;
(statearr_25113_25195[(2)] = null);

(statearr_25113_25195[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (19))){
var inst_25071 = (state_25090[(11)]);
var inst_25021 = (state_25090[(8)]);
var inst_25073 = cljs.core.async.muxch_STAR_.call(null,inst_25071);
var state_25090__$1 = state_25090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25090__$1,(22),inst_25073,inst_25021);
} else {
if((state_val_25091 === (11))){
var inst_25031 = (state_25090[(12)]);
var inst_25045 = (state_25090[(10)]);
var inst_25045__$1 = cljs.core.seq.call(null,inst_25031);
var state_25090__$1 = (function (){var statearr_25114 = state_25090;
(statearr_25114[(10)] = inst_25045__$1);

return statearr_25114;
})();
if(inst_25045__$1){
var statearr_25115_25200 = state_25090__$1;
(statearr_25115_25200[(1)] = (13));

} else {
var statearr_25116_25203 = state_25090__$1;
(statearr_25116_25203[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (9))){
var inst_25067 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25117_25204 = state_25090__$1;
(statearr_25117_25204[(2)] = inst_25067);

(statearr_25117_25204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (5))){
var inst_25028 = cljs.core.deref.call(null,mults);
var inst_25029 = cljs.core.vals.call(null,inst_25028);
var inst_25030 = cljs.core.seq.call(null,inst_25029);
var inst_25031 = inst_25030;
var inst_25032 = null;
var inst_25033 = (0);
var inst_25034 = (0);
var state_25090__$1 = (function (){var statearr_25118 = state_25090;
(statearr_25118[(12)] = inst_25031);

(statearr_25118[(13)] = inst_25034);

(statearr_25118[(14)] = inst_25033);

(statearr_25118[(16)] = inst_25032);

return statearr_25118;
})();
var statearr_25119_25209 = state_25090__$1;
(statearr_25119_25209[(2)] = null);

(statearr_25119_25209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (14))){
var state_25090__$1 = state_25090;
var statearr_25123_25210 = state_25090__$1;
(statearr_25123_25210[(2)] = null);

(statearr_25123_25210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (16))){
var inst_25045 = (state_25090[(10)]);
var inst_25049 = cljs.core.chunk_first.call(null,inst_25045);
var inst_25050 = cljs.core.chunk_rest.call(null,inst_25045);
var inst_25051 = cljs.core.count.call(null,inst_25049);
var inst_25031 = inst_25050;
var inst_25032 = inst_25049;
var inst_25033 = inst_25051;
var inst_25034 = (0);
var state_25090__$1 = (function (){var statearr_25124 = state_25090;
(statearr_25124[(12)] = inst_25031);

(statearr_25124[(13)] = inst_25034);

(statearr_25124[(14)] = inst_25033);

(statearr_25124[(16)] = inst_25032);

return statearr_25124;
})();
var statearr_25125_25211 = state_25090__$1;
(statearr_25125_25211[(2)] = null);

(statearr_25125_25211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (10))){
var inst_25031 = (state_25090[(12)]);
var inst_25034 = (state_25090[(13)]);
var inst_25033 = (state_25090[(14)]);
var inst_25032 = (state_25090[(16)]);
var inst_25039 = cljs.core._nth.call(null,inst_25032,inst_25034);
var inst_25040 = cljs.core.async.muxch_STAR_.call(null,inst_25039);
var inst_25041 = cljs.core.async.close_BANG_.call(null,inst_25040);
var inst_25042 = (inst_25034 + (1));
var tmp25120 = inst_25031;
var tmp25121 = inst_25033;
var tmp25122 = inst_25032;
var inst_25031__$1 = tmp25120;
var inst_25032__$1 = tmp25122;
var inst_25033__$1 = tmp25121;
var inst_25034__$1 = inst_25042;
var state_25090__$1 = (function (){var statearr_25126 = state_25090;
(statearr_25126[(12)] = inst_25031__$1);

(statearr_25126[(17)] = inst_25041);

(statearr_25126[(13)] = inst_25034__$1);

(statearr_25126[(14)] = inst_25033__$1);

(statearr_25126[(16)] = inst_25032__$1);

return statearr_25126;
})();
var statearr_25127_25212 = state_25090__$1;
(statearr_25127_25212[(2)] = null);

(statearr_25127_25212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (18))){
var inst_25060 = (state_25090[(2)]);
var state_25090__$1 = state_25090;
var statearr_25128_25213 = state_25090__$1;
(statearr_25128_25213[(2)] = inst_25060);

(statearr_25128_25213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25091 === (8))){
var inst_25034 = (state_25090[(13)]);
var inst_25033 = (state_25090[(14)]);
var inst_25036 = (inst_25034 < inst_25033);
var inst_25037 = inst_25036;
var state_25090__$1 = state_25090;
if(cljs.core.truth_(inst_25037)){
var statearr_25129_25214 = state_25090__$1;
(statearr_25129_25214[(1)] = (10));

} else {
var statearr_25130_25215 = state_25090__$1;
(statearr_25130_25215[(1)] = (11));

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
});})(c__21983__auto___25164,mults,ensure_mult,p))
;
return ((function (switch__21732__auto__,c__21983__auto___25164,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_25134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25134[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_25134[(1)] = (1));

return statearr_25134;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_25090){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_25090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e25135){if((e25135 instanceof Object)){
var ex__21736__auto__ = e25135;
var statearr_25136_25216 = state_25090;
(statearr_25136_25216[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25217 = state_25090;
state_25090 = G__25217;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_25090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_25090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___25164,mults,ensure_mult,p))
})();
var state__21985__auto__ = (function (){var statearr_25137 = f__21984__auto__.call(null);
(statearr_25137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___25164);

return statearr_25137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___25164,mults,ensure_mult,p))
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
var len__19147__auto___25221 = arguments.length;
var i__19148__auto___25222 = (0);
while(true){
if((i__19148__auto___25222 < len__19147__auto___25221)){
args25218.push((arguments[i__19148__auto___25222]));

var G__25223 = (i__19148__auto___25222 + (1));
i__19148__auto___25222 = G__25223;
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
var args25226 = [];
var len__19147__auto___25230 = arguments.length;
var i__19148__auto___25231 = (0);
while(true){
if((i__19148__auto___25231 < len__19147__auto___25230)){
args25226.push((arguments[i__19148__auto___25231]));

var G__25232 = (i__19148__auto___25231 + (1));
i__19148__auto___25231 = G__25232;
continue;
} else {
}
break;
}

var G__25229 = args25226.length;
switch (G__25229) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25226.length)].join('')));

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
var args25234 = [];
var len__19147__auto___25313 = arguments.length;
var i__19148__auto___25314 = (0);
while(true){
if((i__19148__auto___25314 < len__19147__auto___25313)){
args25234.push((arguments[i__19148__auto___25314]));

var G__25315 = (i__19148__auto___25314 + (1));
i__19148__auto___25314 = G__25315;
continue;
} else {
}
break;
}

var G__25236 = args25234.length;
switch (G__25236) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25234.length)].join('')));

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
var c__21983__auto___25321 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___25321,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___25321,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_25275){
var state_val_25276 = (state_25275[(1)]);
if((state_val_25276 === (7))){
var state_25275__$1 = state_25275;
var statearr_25277_25323 = state_25275__$1;
(statearr_25277_25323[(2)] = null);

(statearr_25277_25323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (1))){
var state_25275__$1 = state_25275;
var statearr_25278_25324 = state_25275__$1;
(statearr_25278_25324[(2)] = null);

(statearr_25278_25324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (4))){
var inst_25239 = (state_25275[(7)]);
var inst_25241 = (inst_25239 < cnt);
var state_25275__$1 = state_25275;
if(cljs.core.truth_(inst_25241)){
var statearr_25279_25325 = state_25275__$1;
(statearr_25279_25325[(1)] = (6));

} else {
var statearr_25280_25326 = state_25275__$1;
(statearr_25280_25326[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (15))){
var inst_25271 = (state_25275[(2)]);
var state_25275__$1 = state_25275;
var statearr_25281_25327 = state_25275__$1;
(statearr_25281_25327[(2)] = inst_25271);

(statearr_25281_25327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (13))){
var inst_25264 = cljs.core.async.close_BANG_.call(null,out);
var state_25275__$1 = state_25275;
var statearr_25282_25328 = state_25275__$1;
(statearr_25282_25328[(2)] = inst_25264);

(statearr_25282_25328[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (6))){
var state_25275__$1 = state_25275;
var statearr_25283_25329 = state_25275__$1;
(statearr_25283_25329[(2)] = null);

(statearr_25283_25329[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (3))){
var inst_25273 = (state_25275[(2)]);
var state_25275__$1 = state_25275;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25275__$1,inst_25273);
} else {
if((state_val_25276 === (12))){
var inst_25261 = (state_25275[(8)]);
var inst_25261__$1 = (state_25275[(2)]);
var inst_25262 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25261__$1);
var state_25275__$1 = (function (){var statearr_25284 = state_25275;
(statearr_25284[(8)] = inst_25261__$1);

return statearr_25284;
})();
if(cljs.core.truth_(inst_25262)){
var statearr_25285_25330 = state_25275__$1;
(statearr_25285_25330[(1)] = (13));

} else {
var statearr_25286_25331 = state_25275__$1;
(statearr_25286_25331[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (2))){
var inst_25238 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_25239 = (0);
var state_25275__$1 = (function (){var statearr_25287 = state_25275;
(statearr_25287[(9)] = inst_25238);

(statearr_25287[(7)] = inst_25239);

return statearr_25287;
})();
var statearr_25288_25332 = state_25275__$1;
(statearr_25288_25332[(2)] = null);

(statearr_25288_25332[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (11))){
var inst_25239 = (state_25275[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25275,(10),Object,null,(9));
var inst_25248 = chs__$1.call(null,inst_25239);
var inst_25249 = done.call(null,inst_25239);
var inst_25250 = cljs.core.async.take_BANG_.call(null,inst_25248,inst_25249);
var state_25275__$1 = state_25275;
var statearr_25289_25334 = state_25275__$1;
(statearr_25289_25334[(2)] = inst_25250);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25275__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (9))){
var inst_25239 = (state_25275[(7)]);
var inst_25252 = (state_25275[(2)]);
var inst_25253 = (inst_25239 + (1));
var inst_25239__$1 = inst_25253;
var state_25275__$1 = (function (){var statearr_25290 = state_25275;
(statearr_25290[(10)] = inst_25252);

(statearr_25290[(7)] = inst_25239__$1);

return statearr_25290;
})();
var statearr_25291_25335 = state_25275__$1;
(statearr_25291_25335[(2)] = null);

(statearr_25291_25335[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (5))){
var inst_25259 = (state_25275[(2)]);
var state_25275__$1 = (function (){var statearr_25292 = state_25275;
(statearr_25292[(11)] = inst_25259);

return statearr_25292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25275__$1,(12),dchan);
} else {
if((state_val_25276 === (14))){
var inst_25261 = (state_25275[(8)]);
var inst_25266 = cljs.core.apply.call(null,f,inst_25261);
var state_25275__$1 = state_25275;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25275__$1,(16),out,inst_25266);
} else {
if((state_val_25276 === (16))){
var inst_25268 = (state_25275[(2)]);
var state_25275__$1 = (function (){var statearr_25293 = state_25275;
(statearr_25293[(12)] = inst_25268);

return statearr_25293;
})();
var statearr_25294_25337 = state_25275__$1;
(statearr_25294_25337[(2)] = null);

(statearr_25294_25337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (10))){
var inst_25243 = (state_25275[(2)]);
var inst_25244 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_25275__$1 = (function (){var statearr_25295 = state_25275;
(statearr_25295[(13)] = inst_25243);

return statearr_25295;
})();
var statearr_25296_25338 = state_25275__$1;
(statearr_25296_25338[(2)] = inst_25244);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25275__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25276 === (8))){
var inst_25257 = (state_25275[(2)]);
var state_25275__$1 = state_25275;
var statearr_25297_25339 = state_25275__$1;
(statearr_25297_25339[(2)] = inst_25257);

(statearr_25297_25339[(1)] = (5));


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
});})(c__21983__auto___25321,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__21732__auto__,c__21983__auto___25321,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_25305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25305[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_25305[(1)] = (1));

return statearr_25305;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_25275){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_25275);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e25306){if((e25306 instanceof Object)){
var ex__21736__auto__ = e25306;
var statearr_25307_25340 = state_25275;
(statearr_25307_25340[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25275);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25341 = state_25275;
state_25275 = G__25341;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_25275){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_25275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___25321,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21985__auto__ = (function (){var statearr_25312 = f__21984__auto__.call(null);
(statearr_25312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___25321);

return statearr_25312;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___25321,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args25343 = [];
var len__19147__auto___25412 = arguments.length;
var i__19148__auto___25413 = (0);
while(true){
if((i__19148__auto___25413 < len__19147__auto___25412)){
args25343.push((arguments[i__19148__auto___25413]));

var G__25414 = (i__19148__auto___25413 + (1));
i__19148__auto___25413 = G__25414;
continue;
} else {
}
break;
}

var G__25345 = args25343.length;
switch (G__25345) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25343.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21983__auto___25428 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___25428,out){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___25428,out){
return (function (state_25377){
var state_val_25378 = (state_25377[(1)]);
if((state_val_25378 === (7))){
var inst_25355 = (state_25377[(7)]);
var inst_25354 = (state_25377[(8)]);
var inst_25354__$1 = (state_25377[(2)]);
var inst_25355__$1 = cljs.core.nth.call(null,inst_25354__$1,(0),null);
var inst_25356 = cljs.core.nth.call(null,inst_25354__$1,(1),null);
var inst_25357 = (inst_25355__$1 == null);
var state_25377__$1 = (function (){var statearr_25379 = state_25377;
(statearr_25379[(9)] = inst_25356);

(statearr_25379[(7)] = inst_25355__$1);

(statearr_25379[(8)] = inst_25354__$1);

return statearr_25379;
})();
if(cljs.core.truth_(inst_25357)){
var statearr_25380_25439 = state_25377__$1;
(statearr_25380_25439[(1)] = (8));

} else {
var statearr_25381_25441 = state_25377__$1;
(statearr_25381_25441[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (1))){
var inst_25346 = cljs.core.vec.call(null,chs);
var inst_25347 = inst_25346;
var state_25377__$1 = (function (){var statearr_25382 = state_25377;
(statearr_25382[(10)] = inst_25347);

return statearr_25382;
})();
var statearr_25383_25449 = state_25377__$1;
(statearr_25383_25449[(2)] = null);

(statearr_25383_25449[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (4))){
var inst_25347 = (state_25377[(10)]);
var state_25377__$1 = state_25377;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25377__$1,(7),inst_25347);
} else {
if((state_val_25378 === (6))){
var inst_25372 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25384_25461 = state_25377__$1;
(statearr_25384_25461[(2)] = inst_25372);

(statearr_25384_25461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (3))){
var inst_25374 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25377__$1,inst_25374);
} else {
if((state_val_25378 === (2))){
var inst_25347 = (state_25377[(10)]);
var inst_25349 = cljs.core.count.call(null,inst_25347);
var inst_25350 = (inst_25349 > (0));
var state_25377__$1 = state_25377;
if(cljs.core.truth_(inst_25350)){
var statearr_25386_25473 = state_25377__$1;
(statearr_25386_25473[(1)] = (4));

} else {
var statearr_25387_25474 = state_25377__$1;
(statearr_25387_25474[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (11))){
var inst_25347 = (state_25377[(10)]);
var inst_25365 = (state_25377[(2)]);
var tmp25385 = inst_25347;
var inst_25347__$1 = tmp25385;
var state_25377__$1 = (function (){var statearr_25388 = state_25377;
(statearr_25388[(10)] = inst_25347__$1);

(statearr_25388[(11)] = inst_25365);

return statearr_25388;
})();
var statearr_25389_25482 = state_25377__$1;
(statearr_25389_25482[(2)] = null);

(statearr_25389_25482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (9))){
var inst_25355 = (state_25377[(7)]);
var state_25377__$1 = state_25377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25377__$1,(11),out,inst_25355);
} else {
if((state_val_25378 === (5))){
var inst_25370 = cljs.core.async.close_BANG_.call(null,out);
var state_25377__$1 = state_25377;
var statearr_25390_25483 = state_25377__$1;
(statearr_25390_25483[(2)] = inst_25370);

(statearr_25390_25483[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (10))){
var inst_25368 = (state_25377[(2)]);
var state_25377__$1 = state_25377;
var statearr_25391_25484 = state_25377__$1;
(statearr_25391_25484[(2)] = inst_25368);

(statearr_25391_25484[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25378 === (8))){
var inst_25356 = (state_25377[(9)]);
var inst_25347 = (state_25377[(10)]);
var inst_25355 = (state_25377[(7)]);
var inst_25354 = (state_25377[(8)]);
var inst_25360 = (function (){var cs = inst_25347;
var vec__25352 = inst_25354;
var v = inst_25355;
var c = inst_25356;
return ((function (cs,vec__25352,v,c,inst_25356,inst_25347,inst_25355,inst_25354,state_val_25378,c__21983__auto___25428,out){
return (function (p1__25342_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__25342_SHARP_);
});
;})(cs,vec__25352,v,c,inst_25356,inst_25347,inst_25355,inst_25354,state_val_25378,c__21983__auto___25428,out))
})();
var inst_25361 = cljs.core.filterv.call(null,inst_25360,inst_25347);
var inst_25347__$1 = inst_25361;
var state_25377__$1 = (function (){var statearr_25392 = state_25377;
(statearr_25392[(10)] = inst_25347__$1);

return statearr_25392;
})();
var statearr_25393_25485 = state_25377__$1;
(statearr_25393_25485[(2)] = null);

(statearr_25393_25485[(1)] = (2));


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
});})(c__21983__auto___25428,out))
;
return ((function (switch__21732__auto__,c__21983__auto___25428,out){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_25397 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25397[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_25397[(1)] = (1));

return statearr_25397;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_25377){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_25377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e25402){if((e25402 instanceof Object)){
var ex__21736__auto__ = e25402;
var statearr_25403_25486 = state_25377;
(statearr_25403_25486[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25487 = state_25377;
state_25377 = G__25487;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_25377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_25377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___25428,out))
})();
var state__21985__auto__ = (function (){var statearr_25404 = f__21984__auto__.call(null);
(statearr_25404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___25428);

return statearr_25404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___25428,out))
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
var args25488 = [];
var len__19147__auto___25556 = arguments.length;
var i__19148__auto___25557 = (0);
while(true){
if((i__19148__auto___25557 < len__19147__auto___25556)){
args25488.push((arguments[i__19148__auto___25557]));

var G__25559 = (i__19148__auto___25557 + (1));
i__19148__auto___25557 = G__25559;
continue;
} else {
}
break;
}

var G__25497 = args25488.length;
switch (G__25497) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25488.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21983__auto___25572 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___25572,out){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___25572,out){
return (function (state_25530){
var state_val_25531 = (state_25530[(1)]);
if((state_val_25531 === (7))){
var inst_25510 = (state_25530[(7)]);
var inst_25510__$1 = (state_25530[(2)]);
var inst_25513 = (inst_25510__$1 == null);
var inst_25514 = cljs.core.not.call(null,inst_25513);
var state_25530__$1 = (function (){var statearr_25534 = state_25530;
(statearr_25534[(7)] = inst_25510__$1);

return statearr_25534;
})();
if(inst_25514){
var statearr_25535_25575 = state_25530__$1;
(statearr_25535_25575[(1)] = (8));

} else {
var statearr_25536_25576 = state_25530__$1;
(statearr_25536_25576[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (1))){
var inst_25505 = (0);
var state_25530__$1 = (function (){var statearr_25537 = state_25530;
(statearr_25537[(8)] = inst_25505);

return statearr_25537;
})();
var statearr_25538_25582 = state_25530__$1;
(statearr_25538_25582[(2)] = null);

(statearr_25538_25582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (4))){
var state_25530__$1 = state_25530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25530__$1,(7),ch);
} else {
if((state_val_25531 === (6))){
var inst_25525 = (state_25530[(2)]);
var state_25530__$1 = state_25530;
var statearr_25539_25586 = state_25530__$1;
(statearr_25539_25586[(2)] = inst_25525);

(statearr_25539_25586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (3))){
var inst_25527 = (state_25530[(2)]);
var inst_25528 = cljs.core.async.close_BANG_.call(null,out);
var state_25530__$1 = (function (){var statearr_25540 = state_25530;
(statearr_25540[(9)] = inst_25527);

return statearr_25540;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25530__$1,inst_25528);
} else {
if((state_val_25531 === (2))){
var inst_25505 = (state_25530[(8)]);
var inst_25507 = (inst_25505 < n);
var state_25530__$1 = state_25530;
if(cljs.core.truth_(inst_25507)){
var statearr_25541_25588 = state_25530__$1;
(statearr_25541_25588[(1)] = (4));

} else {
var statearr_25542_25589 = state_25530__$1;
(statearr_25542_25589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (11))){
var inst_25505 = (state_25530[(8)]);
var inst_25517 = (state_25530[(2)]);
var inst_25518 = (inst_25505 + (1));
var inst_25505__$1 = inst_25518;
var state_25530__$1 = (function (){var statearr_25543 = state_25530;
(statearr_25543[(8)] = inst_25505__$1);

(statearr_25543[(10)] = inst_25517);

return statearr_25543;
})();
var statearr_25544_25590 = state_25530__$1;
(statearr_25544_25590[(2)] = null);

(statearr_25544_25590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (9))){
var state_25530__$1 = state_25530;
var statearr_25545_25591 = state_25530__$1;
(statearr_25545_25591[(2)] = null);

(statearr_25545_25591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (5))){
var state_25530__$1 = state_25530;
var statearr_25546_25592 = state_25530__$1;
(statearr_25546_25592[(2)] = null);

(statearr_25546_25592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (10))){
var inst_25522 = (state_25530[(2)]);
var state_25530__$1 = state_25530;
var statearr_25547_25593 = state_25530__$1;
(statearr_25547_25593[(2)] = inst_25522);

(statearr_25547_25593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25531 === (8))){
var inst_25510 = (state_25530[(7)]);
var state_25530__$1 = state_25530;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25530__$1,(11),out,inst_25510);
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
});})(c__21983__auto___25572,out))
;
return ((function (switch__21732__auto__,c__21983__auto___25572,out){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_25552 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25552[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_25552[(1)] = (1));

return statearr_25552;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_25530){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_25530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e25553){if((e25553 instanceof Object)){
var ex__21736__auto__ = e25553;
var statearr_25554_25594 = state_25530;
(statearr_25554_25594[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25553;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25595 = state_25530;
state_25530 = G__25595;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_25530){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_25530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___25572,out))
})();
var state__21985__auto__ = (function (){var statearr_25555 = f__21984__auto__.call(null);
(statearr_25555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___25572);

return statearr_25555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___25572,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25619 = (function (map_LT_,f,ch,meta25620){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25620 = meta25620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25621,meta25620__$1){
var self__ = this;
var _25621__$1 = this;
return (new cljs.core.async.t_cljs$core$async25619(self__.map_LT_,self__.f,self__.ch,meta25620__$1));
});

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25621){
var self__ = this;
var _25621__$1 = this;
return self__.meta25620;
});

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async25623 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25623 = (function (map_LT_,f,ch,meta25620,_,fn1,meta25624){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta25620 = meta25620;
this._ = _;
this.fn1 = fn1;
this.meta25624 = meta25624;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25623.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_25625,meta25624__$1){
var self__ = this;
var _25625__$1 = this;
return (new cljs.core.async.t_cljs$core$async25623(self__.map_LT_,self__.f,self__.ch,self__.meta25620,self__._,self__.fn1,meta25624__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async25623.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_25625){
var self__ = this;
var _25625__$1 = this;
return self__.meta25624;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25623.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25623.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25623.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async25623.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__25598_SHARP_){
return f1.call(null,(((p1__25598_SHARP_ == null))?null:self__.f.call(null,p1__25598_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async25623.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25620","meta25620",-1624839884,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async25619","cljs.core.async/t_cljs$core$async25619",2145708286,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta25624","meta25624",-2088299312,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async25623.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25623.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25623";

cljs.core.async.t_cljs$core$async25623.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async25623");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async25623 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25623(map_LT___$1,f__$1,ch__$1,meta25620__$1,___$2,fn1__$1,meta25624){
return (new cljs.core.async.t_cljs$core$async25623(map_LT___$1,f__$1,ch__$1,meta25620__$1,___$2,fn1__$1,meta25624));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async25623(self__.map_LT_,self__.f,self__.ch,self__.meta25620,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18077__auto__ = ret;
if(cljs.core.truth_(and__18077__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18077__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async25619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25620","meta25620",-1624839884,null)], null);
});

cljs.core.async.t_cljs$core$async25619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25619";

cljs.core.async.t_cljs$core$async25619.cljs$lang$ctorPrWriter = (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async25619");
});

cljs.core.async.__GT_t_cljs$core$async25619 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async25619(map_LT___$1,f__$1,ch__$1,meta25620){
return (new cljs.core.async.t_cljs$core$async25619(map_LT___$1,f__$1,ch__$1,meta25620));
});

}

return (new cljs.core.async.t_cljs$core$async25619(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async25655 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25655 = (function (map_GT_,f,ch,meta25656){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta25656 = meta25656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25657,meta25656__$1){
var self__ = this;
var _25657__$1 = this;
return (new cljs.core.async.t_cljs$core$async25655(self__.map_GT_,self__.f,self__.ch,meta25656__$1));
});

cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25657){
var self__ = this;
var _25657__$1 = this;
return self__.meta25656;
});

cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25655.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async25655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25656","meta25656",-889457193,null)], null);
});

cljs.core.async.t_cljs$core$async25655.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25655";

cljs.core.async.t_cljs$core$async25655.cljs$lang$ctorPrWriter = (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async25655");
});

cljs.core.async.__GT_t_cljs$core$async25655 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async25655(map_GT___$1,f__$1,ch__$1,meta25656){
return (new cljs.core.async.t_cljs$core$async25655(map_GT___$1,f__$1,ch__$1,meta25656));
});

}

return (new cljs.core.async.t_cljs$core$async25655(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async25663 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25663 = (function (filter_GT_,p,ch,meta25664){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta25664 = meta25664;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25665,meta25664__$1){
var self__ = this;
var _25665__$1 = this;
return (new cljs.core.async.t_cljs$core$async25663(self__.filter_GT_,self__.p,self__.ch,meta25664__$1));
});

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25665){
var self__ = this;
var _25665__$1 = this;
return self__.meta25664;
});

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async25663.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async25663.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta25664","meta25664",-415122536,null)], null);
});

cljs.core.async.t_cljs$core$async25663.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25663.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25663";

cljs.core.async.t_cljs$core$async25663.cljs$lang$ctorPrWriter = (function (this__18687__auto__,writer__18688__auto__,opt__18689__auto__){
return cljs.core._write.call(null,writer__18688__auto__,"cljs.core.async/t_cljs$core$async25663");
});

cljs.core.async.__GT_t_cljs$core$async25663 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async25663(filter_GT___$1,p__$1,ch__$1,meta25664){
return (new cljs.core.async.t_cljs$core$async25663(filter_GT___$1,p__$1,ch__$1,meta25664));
});

}

return (new cljs.core.async.t_cljs$core$async25663(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args25666 = [];
var len__19147__auto___25712 = arguments.length;
var i__19148__auto___25713 = (0);
while(true){
if((i__19148__auto___25713 < len__19147__auto___25712)){
args25666.push((arguments[i__19148__auto___25713]));

var G__25714 = (i__19148__auto___25713 + (1));
i__19148__auto___25713 = G__25714;
continue;
} else {
}
break;
}

var G__25668 = args25666.length;
switch (G__25668) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25666.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21983__auto___25721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___25721,out){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___25721,out){
return (function (state_25689){
var state_val_25690 = (state_25689[(1)]);
if((state_val_25690 === (7))){
var inst_25685 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25691_25731 = state_25689__$1;
(statearr_25691_25731[(2)] = inst_25685);

(statearr_25691_25731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (1))){
var state_25689__$1 = state_25689;
var statearr_25692_25732 = state_25689__$1;
(statearr_25692_25732[(2)] = null);

(statearr_25692_25732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (4))){
var inst_25671 = (state_25689[(7)]);
var inst_25671__$1 = (state_25689[(2)]);
var inst_25672 = (inst_25671__$1 == null);
var state_25689__$1 = (function (){var statearr_25693 = state_25689;
(statearr_25693[(7)] = inst_25671__$1);

return statearr_25693;
})();
if(cljs.core.truth_(inst_25672)){
var statearr_25694_25739 = state_25689__$1;
(statearr_25694_25739[(1)] = (5));

} else {
var statearr_25695_25740 = state_25689__$1;
(statearr_25695_25740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (6))){
var inst_25671 = (state_25689[(7)]);
var inst_25676 = p.call(null,inst_25671);
var state_25689__$1 = state_25689;
if(cljs.core.truth_(inst_25676)){
var statearr_25696_25742 = state_25689__$1;
(statearr_25696_25742[(1)] = (8));

} else {
var statearr_25697_25743 = state_25689__$1;
(statearr_25697_25743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (3))){
var inst_25687 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25689__$1,inst_25687);
} else {
if((state_val_25690 === (2))){
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25689__$1,(4),ch);
} else {
if((state_val_25690 === (11))){
var inst_25679 = (state_25689[(2)]);
var state_25689__$1 = state_25689;
var statearr_25698_25752 = state_25689__$1;
(statearr_25698_25752[(2)] = inst_25679);

(statearr_25698_25752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (9))){
var state_25689__$1 = state_25689;
var statearr_25699_25753 = state_25689__$1;
(statearr_25699_25753[(2)] = null);

(statearr_25699_25753[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (5))){
var inst_25674 = cljs.core.async.close_BANG_.call(null,out);
var state_25689__$1 = state_25689;
var statearr_25700_25755 = state_25689__$1;
(statearr_25700_25755[(2)] = inst_25674);

(statearr_25700_25755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (10))){
var inst_25682 = (state_25689[(2)]);
var state_25689__$1 = (function (){var statearr_25701 = state_25689;
(statearr_25701[(8)] = inst_25682);

return statearr_25701;
})();
var statearr_25702_25756 = state_25689__$1;
(statearr_25702_25756[(2)] = null);

(statearr_25702_25756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25690 === (8))){
var inst_25671 = (state_25689[(7)]);
var state_25689__$1 = state_25689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25689__$1,(11),out,inst_25671);
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
});})(c__21983__auto___25721,out))
;
return ((function (switch__21732__auto__,c__21983__auto___25721,out){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_25708 = [null,null,null,null,null,null,null,null,null];
(statearr_25708[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_25708[(1)] = (1));

return statearr_25708;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_25689){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_25689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e25709){if((e25709 instanceof Object)){
var ex__21736__auto__ = e25709;
var statearr_25710_25757 = state_25689;
(statearr_25710_25757[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25758 = state_25689;
state_25689 = G__25758;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_25689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_25689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___25721,out))
})();
var state__21985__auto__ = (function (){var statearr_25711 = f__21984__auto__.call(null);
(statearr_25711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___25721);

return statearr_25711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___25721,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args25759 = [];
var len__19147__auto___25762 = arguments.length;
var i__19148__auto___25763 = (0);
while(true){
if((i__19148__auto___25763 < len__19147__auto___25762)){
args25759.push((arguments[i__19148__auto___25763]));

var G__25764 = (i__19148__auto___25763 + (1));
i__19148__auto___25763 = G__25764;
continue;
} else {
}
break;
}

var G__25761 = args25759.length;
switch (G__25761) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25759.length)].join('')));

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
var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__){
return (function (state_25950){
var state_val_25951 = (state_25950[(1)]);
if((state_val_25951 === (7))){
var inst_25946 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25952_25995 = state_25950__$1;
(statearr_25952_25995[(2)] = inst_25946);

(statearr_25952_25995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (20))){
var inst_25916 = (state_25950[(7)]);
var inst_25927 = (state_25950[(2)]);
var inst_25928 = cljs.core.next.call(null,inst_25916);
var inst_25902 = inst_25928;
var inst_25903 = null;
var inst_25904 = (0);
var inst_25905 = (0);
var state_25950__$1 = (function (){var statearr_25953 = state_25950;
(statearr_25953[(8)] = inst_25902);

(statearr_25953[(9)] = inst_25927);

(statearr_25953[(10)] = inst_25905);

(statearr_25953[(11)] = inst_25904);

(statearr_25953[(12)] = inst_25903);

return statearr_25953;
})();
var statearr_25954_25996 = state_25950__$1;
(statearr_25954_25996[(2)] = null);

(statearr_25954_25996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (1))){
var state_25950__$1 = state_25950;
var statearr_25955_25997 = state_25950__$1;
(statearr_25955_25997[(2)] = null);

(statearr_25955_25997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (4))){
var inst_25891 = (state_25950[(13)]);
var inst_25891__$1 = (state_25950[(2)]);
var inst_25892 = (inst_25891__$1 == null);
var state_25950__$1 = (function (){var statearr_25956 = state_25950;
(statearr_25956[(13)] = inst_25891__$1);

return statearr_25956;
})();
if(cljs.core.truth_(inst_25892)){
var statearr_25957_25998 = state_25950__$1;
(statearr_25957_25998[(1)] = (5));

} else {
var statearr_25958_25999 = state_25950__$1;
(statearr_25958_25999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (15))){
var state_25950__$1 = state_25950;
var statearr_25962_26000 = state_25950__$1;
(statearr_25962_26000[(2)] = null);

(statearr_25962_26000[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (21))){
var state_25950__$1 = state_25950;
var statearr_25963_26001 = state_25950__$1;
(statearr_25963_26001[(2)] = null);

(statearr_25963_26001[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (13))){
var inst_25902 = (state_25950[(8)]);
var inst_25905 = (state_25950[(10)]);
var inst_25904 = (state_25950[(11)]);
var inst_25903 = (state_25950[(12)]);
var inst_25912 = (state_25950[(2)]);
var inst_25913 = (inst_25905 + (1));
var tmp25959 = inst_25902;
var tmp25960 = inst_25904;
var tmp25961 = inst_25903;
var inst_25902__$1 = tmp25959;
var inst_25903__$1 = tmp25961;
var inst_25904__$1 = tmp25960;
var inst_25905__$1 = inst_25913;
var state_25950__$1 = (function (){var statearr_25964 = state_25950;
(statearr_25964[(8)] = inst_25902__$1);

(statearr_25964[(14)] = inst_25912);

(statearr_25964[(10)] = inst_25905__$1);

(statearr_25964[(11)] = inst_25904__$1);

(statearr_25964[(12)] = inst_25903__$1);

return statearr_25964;
})();
var statearr_25965_26002 = state_25950__$1;
(statearr_25965_26002[(2)] = null);

(statearr_25965_26002[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (22))){
var state_25950__$1 = state_25950;
var statearr_25966_26003 = state_25950__$1;
(statearr_25966_26003[(2)] = null);

(statearr_25966_26003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (6))){
var inst_25891 = (state_25950[(13)]);
var inst_25900 = f.call(null,inst_25891);
var inst_25901 = cljs.core.seq.call(null,inst_25900);
var inst_25902 = inst_25901;
var inst_25903 = null;
var inst_25904 = (0);
var inst_25905 = (0);
var state_25950__$1 = (function (){var statearr_25967 = state_25950;
(statearr_25967[(8)] = inst_25902);

(statearr_25967[(10)] = inst_25905);

(statearr_25967[(11)] = inst_25904);

(statearr_25967[(12)] = inst_25903);

return statearr_25967;
})();
var statearr_25968_26004 = state_25950__$1;
(statearr_25968_26004[(2)] = null);

(statearr_25968_26004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (17))){
var inst_25916 = (state_25950[(7)]);
var inst_25920 = cljs.core.chunk_first.call(null,inst_25916);
var inst_25921 = cljs.core.chunk_rest.call(null,inst_25916);
var inst_25922 = cljs.core.count.call(null,inst_25920);
var inst_25902 = inst_25921;
var inst_25903 = inst_25920;
var inst_25904 = inst_25922;
var inst_25905 = (0);
var state_25950__$1 = (function (){var statearr_25969 = state_25950;
(statearr_25969[(8)] = inst_25902);

(statearr_25969[(10)] = inst_25905);

(statearr_25969[(11)] = inst_25904);

(statearr_25969[(12)] = inst_25903);

return statearr_25969;
})();
var statearr_25970_26005 = state_25950__$1;
(statearr_25970_26005[(2)] = null);

(statearr_25970_26005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (3))){
var inst_25948 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25950__$1,inst_25948);
} else {
if((state_val_25951 === (12))){
var inst_25936 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25971_26006 = state_25950__$1;
(statearr_25971_26006[(2)] = inst_25936);

(statearr_25971_26006[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (2))){
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25950__$1,(4),in$);
} else {
if((state_val_25951 === (23))){
var inst_25944 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25972_26007 = state_25950__$1;
(statearr_25972_26007[(2)] = inst_25944);

(statearr_25972_26007[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (19))){
var inst_25931 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25973_26008 = state_25950__$1;
(statearr_25973_26008[(2)] = inst_25931);

(statearr_25973_26008[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (11))){
var inst_25902 = (state_25950[(8)]);
var inst_25916 = (state_25950[(7)]);
var inst_25916__$1 = cljs.core.seq.call(null,inst_25902);
var state_25950__$1 = (function (){var statearr_25974 = state_25950;
(statearr_25974[(7)] = inst_25916__$1);

return statearr_25974;
})();
if(inst_25916__$1){
var statearr_25975_26009 = state_25950__$1;
(statearr_25975_26009[(1)] = (14));

} else {
var statearr_25976_26010 = state_25950__$1;
(statearr_25976_26010[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (9))){
var inst_25938 = (state_25950[(2)]);
var inst_25939 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_25950__$1 = (function (){var statearr_25977 = state_25950;
(statearr_25977[(15)] = inst_25938);

return statearr_25977;
})();
if(cljs.core.truth_(inst_25939)){
var statearr_25978_26011 = state_25950__$1;
(statearr_25978_26011[(1)] = (21));

} else {
var statearr_25979_26012 = state_25950__$1;
(statearr_25979_26012[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (5))){
var inst_25894 = cljs.core.async.close_BANG_.call(null,out);
var state_25950__$1 = state_25950;
var statearr_25980_26013 = state_25950__$1;
(statearr_25980_26013[(2)] = inst_25894);

(statearr_25980_26013[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (14))){
var inst_25916 = (state_25950[(7)]);
var inst_25918 = cljs.core.chunked_seq_QMARK_.call(null,inst_25916);
var state_25950__$1 = state_25950;
if(inst_25918){
var statearr_25981_26014 = state_25950__$1;
(statearr_25981_26014[(1)] = (17));

} else {
var statearr_25982_26015 = state_25950__$1;
(statearr_25982_26015[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (16))){
var inst_25934 = (state_25950[(2)]);
var state_25950__$1 = state_25950;
var statearr_25983_26016 = state_25950__$1;
(statearr_25983_26016[(2)] = inst_25934);

(statearr_25983_26016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25951 === (10))){
var inst_25905 = (state_25950[(10)]);
var inst_25903 = (state_25950[(12)]);
var inst_25910 = cljs.core._nth.call(null,inst_25903,inst_25905);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25950__$1,(13),out,inst_25910);
} else {
if((state_val_25951 === (18))){
var inst_25916 = (state_25950[(7)]);
var inst_25925 = cljs.core.first.call(null,inst_25916);
var state_25950__$1 = state_25950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25950__$1,(20),out,inst_25925);
} else {
if((state_val_25951 === (8))){
var inst_25905 = (state_25950[(10)]);
var inst_25904 = (state_25950[(11)]);
var inst_25907 = (inst_25905 < inst_25904);
var inst_25908 = inst_25907;
var state_25950__$1 = state_25950;
if(cljs.core.truth_(inst_25908)){
var statearr_25984_26017 = state_25950__$1;
(statearr_25984_26017[(1)] = (10));

} else {
var statearr_25985_26018 = state_25950__$1;
(statearr_25985_26018[(1)] = (11));

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
});})(c__21983__auto__))
;
return ((function (switch__21732__auto__,c__21983__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__21733__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21733__auto____0 = (function (){
var statearr_25989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25989[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21733__auto__);

(statearr_25989[(1)] = (1));

return statearr_25989;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21733__auto____1 = (function (state_25950){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_25950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e25990){if((e25990 instanceof Object)){
var ex__21736__auto__ = e25990;
var statearr_25991_26021 = state_25950;
(statearr_25991_26021[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26026 = state_25950;
state_25950 = G__26026;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21733__auto__ = function(state_25950){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21733__auto____1.call(this,state_25950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21733__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21733__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__))
})();
var state__21985__auto__ = (function (){var statearr_25992 = f__21984__auto__.call(null);
(statearr_25992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_25992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__))
);

return c__21983__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args26028 = [];
var len__19147__auto___26038 = arguments.length;
var i__19148__auto___26039 = (0);
while(true){
if((i__19148__auto___26039 < len__19147__auto___26038)){
args26028.push((arguments[i__19148__auto___26039]));

var G__26040 = (i__19148__auto___26039 + (1));
i__19148__auto___26039 = G__26040;
continue;
} else {
}
break;
}

var G__26030 = args26028.length;
switch (G__26030) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26028.length)].join('')));

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
var args26044 = [];
var len__19147__auto___26048 = arguments.length;
var i__19148__auto___26049 = (0);
while(true){
if((i__19148__auto___26049 < len__19147__auto___26048)){
args26044.push((arguments[i__19148__auto___26049]));

var G__26050 = (i__19148__auto___26049 + (1));
i__19148__auto___26049 = G__26050;
continue;
} else {
}
break;
}

var G__26047 = args26044.length;
switch (G__26047) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26044.length)].join('')));

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
var args26052 = [];
var len__19147__auto___26103 = arguments.length;
var i__19148__auto___26104 = (0);
while(true){
if((i__19148__auto___26104 < len__19147__auto___26103)){
args26052.push((arguments[i__19148__auto___26104]));

var G__26105 = (i__19148__auto___26104 + (1));
i__19148__auto___26104 = G__26105;
continue;
} else {
}
break;
}

var G__26054 = args26052.length;
switch (G__26054) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26052.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21983__auto___26108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___26108,out){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___26108,out){
return (function (state_26078){
var state_val_26079 = (state_26078[(1)]);
if((state_val_26079 === (7))){
var inst_26073 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26080_26110 = state_26078__$1;
(statearr_26080_26110[(2)] = inst_26073);

(statearr_26080_26110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (1))){
var inst_26055 = null;
var state_26078__$1 = (function (){var statearr_26081 = state_26078;
(statearr_26081[(7)] = inst_26055);

return statearr_26081;
})();
var statearr_26082_26111 = state_26078__$1;
(statearr_26082_26111[(2)] = null);

(statearr_26082_26111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (4))){
var inst_26058 = (state_26078[(8)]);
var inst_26058__$1 = (state_26078[(2)]);
var inst_26059 = (inst_26058__$1 == null);
var inst_26060 = cljs.core.not.call(null,inst_26059);
var state_26078__$1 = (function (){var statearr_26083 = state_26078;
(statearr_26083[(8)] = inst_26058__$1);

return statearr_26083;
})();
if(inst_26060){
var statearr_26084_26112 = state_26078__$1;
(statearr_26084_26112[(1)] = (5));

} else {
var statearr_26085_26113 = state_26078__$1;
(statearr_26085_26113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (6))){
var state_26078__$1 = state_26078;
var statearr_26086_26114 = state_26078__$1;
(statearr_26086_26114[(2)] = null);

(statearr_26086_26114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (3))){
var inst_26075 = (state_26078[(2)]);
var inst_26076 = cljs.core.async.close_BANG_.call(null,out);
var state_26078__$1 = (function (){var statearr_26087 = state_26078;
(statearr_26087[(9)] = inst_26075);

return statearr_26087;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26078__$1,inst_26076);
} else {
if((state_val_26079 === (2))){
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26078__$1,(4),ch);
} else {
if((state_val_26079 === (11))){
var inst_26058 = (state_26078[(8)]);
var inst_26067 = (state_26078[(2)]);
var inst_26055 = inst_26058;
var state_26078__$1 = (function (){var statearr_26088 = state_26078;
(statearr_26088[(10)] = inst_26067);

(statearr_26088[(7)] = inst_26055);

return statearr_26088;
})();
var statearr_26089_26115 = state_26078__$1;
(statearr_26089_26115[(2)] = null);

(statearr_26089_26115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (9))){
var inst_26058 = (state_26078[(8)]);
var state_26078__$1 = state_26078;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26078__$1,(11),out,inst_26058);
} else {
if((state_val_26079 === (5))){
var inst_26058 = (state_26078[(8)]);
var inst_26055 = (state_26078[(7)]);
var inst_26062 = cljs.core._EQ_.call(null,inst_26058,inst_26055);
var state_26078__$1 = state_26078;
if(inst_26062){
var statearr_26091_26116 = state_26078__$1;
(statearr_26091_26116[(1)] = (8));

} else {
var statearr_26092_26117 = state_26078__$1;
(statearr_26092_26117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (10))){
var inst_26070 = (state_26078[(2)]);
var state_26078__$1 = state_26078;
var statearr_26093_26118 = state_26078__$1;
(statearr_26093_26118[(2)] = inst_26070);

(statearr_26093_26118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26079 === (8))){
var inst_26055 = (state_26078[(7)]);
var tmp26090 = inst_26055;
var inst_26055__$1 = tmp26090;
var state_26078__$1 = (function (){var statearr_26094 = state_26078;
(statearr_26094[(7)] = inst_26055__$1);

return statearr_26094;
})();
var statearr_26095_26119 = state_26078__$1;
(statearr_26095_26119[(2)] = null);

(statearr_26095_26119[(1)] = (2));


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
});})(c__21983__auto___26108,out))
;
return ((function (switch__21732__auto__,c__21983__auto___26108,out){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_26099 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26099[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_26099[(1)] = (1));

return statearr_26099;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_26078){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_26078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e26100){if((e26100 instanceof Object)){
var ex__21736__auto__ = e26100;
var statearr_26101_26120 = state_26078;
(statearr_26101_26120[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26078);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26100;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26121 = state_26078;
state_26078 = G__26121;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_26078){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_26078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___26108,out))
})();
var state__21985__auto__ = (function (){var statearr_26102 = f__21984__auto__.call(null);
(statearr_26102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___26108);

return statearr_26102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___26108,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args26122 = [];
var len__19147__auto___26196 = arguments.length;
var i__19148__auto___26197 = (0);
while(true){
if((i__19148__auto___26197 < len__19147__auto___26196)){
args26122.push((arguments[i__19148__auto___26197]));

var G__26198 = (i__19148__auto___26197 + (1));
i__19148__auto___26197 = G__26198;
continue;
} else {
}
break;
}

var G__26124 = args26122.length;
switch (G__26124) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26122.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21983__auto___26200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___26200,out){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___26200,out){
return (function (state_26162){
var state_val_26163 = (state_26162[(1)]);
if((state_val_26163 === (7))){
var inst_26158 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26164_26202 = state_26162__$1;
(statearr_26164_26202[(2)] = inst_26158);

(statearr_26164_26202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (1))){
var inst_26125 = (new Array(n));
var inst_26126 = inst_26125;
var inst_26127 = (0);
var state_26162__$1 = (function (){var statearr_26165 = state_26162;
(statearr_26165[(7)] = inst_26126);

(statearr_26165[(8)] = inst_26127);

return statearr_26165;
})();
var statearr_26166_26203 = state_26162__$1;
(statearr_26166_26203[(2)] = null);

(statearr_26166_26203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (4))){
var inst_26130 = (state_26162[(9)]);
var inst_26130__$1 = (state_26162[(2)]);
var inst_26131 = (inst_26130__$1 == null);
var inst_26132 = cljs.core.not.call(null,inst_26131);
var state_26162__$1 = (function (){var statearr_26167 = state_26162;
(statearr_26167[(9)] = inst_26130__$1);

return statearr_26167;
})();
if(inst_26132){
var statearr_26168_26204 = state_26162__$1;
(statearr_26168_26204[(1)] = (5));

} else {
var statearr_26169_26205 = state_26162__$1;
(statearr_26169_26205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (15))){
var inst_26152 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26170_26206 = state_26162__$1;
(statearr_26170_26206[(2)] = inst_26152);

(statearr_26170_26206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (13))){
var state_26162__$1 = state_26162;
var statearr_26171_26207 = state_26162__$1;
(statearr_26171_26207[(2)] = null);

(statearr_26171_26207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (6))){
var inst_26127 = (state_26162[(8)]);
var inst_26148 = (inst_26127 > (0));
var state_26162__$1 = state_26162;
if(cljs.core.truth_(inst_26148)){
var statearr_26172_26208 = state_26162__$1;
(statearr_26172_26208[(1)] = (12));

} else {
var statearr_26173_26209 = state_26162__$1;
(statearr_26173_26209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (3))){
var inst_26160 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26162__$1,inst_26160);
} else {
if((state_val_26163 === (12))){
var inst_26126 = (state_26162[(7)]);
var inst_26150 = cljs.core.vec.call(null,inst_26126);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26162__$1,(15),out,inst_26150);
} else {
if((state_val_26163 === (2))){
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26162__$1,(4),ch);
} else {
if((state_val_26163 === (11))){
var inst_26142 = (state_26162[(2)]);
var inst_26143 = (new Array(n));
var inst_26126 = inst_26143;
var inst_26127 = (0);
var state_26162__$1 = (function (){var statearr_26174 = state_26162;
(statearr_26174[(10)] = inst_26142);

(statearr_26174[(7)] = inst_26126);

(statearr_26174[(8)] = inst_26127);

return statearr_26174;
})();
var statearr_26175_26210 = state_26162__$1;
(statearr_26175_26210[(2)] = null);

(statearr_26175_26210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (9))){
var inst_26126 = (state_26162[(7)]);
var inst_26140 = cljs.core.vec.call(null,inst_26126);
var state_26162__$1 = state_26162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26162__$1,(11),out,inst_26140);
} else {
if((state_val_26163 === (5))){
var inst_26126 = (state_26162[(7)]);
var inst_26127 = (state_26162[(8)]);
var inst_26135 = (state_26162[(11)]);
var inst_26130 = (state_26162[(9)]);
var inst_26134 = (inst_26126[inst_26127] = inst_26130);
var inst_26135__$1 = (inst_26127 + (1));
var inst_26136 = (inst_26135__$1 < n);
var state_26162__$1 = (function (){var statearr_26176 = state_26162;
(statearr_26176[(11)] = inst_26135__$1);

(statearr_26176[(12)] = inst_26134);

return statearr_26176;
})();
if(cljs.core.truth_(inst_26136)){
var statearr_26177_26211 = state_26162__$1;
(statearr_26177_26211[(1)] = (8));

} else {
var statearr_26178_26212 = state_26162__$1;
(statearr_26178_26212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (14))){
var inst_26155 = (state_26162[(2)]);
var inst_26156 = cljs.core.async.close_BANG_.call(null,out);
var state_26162__$1 = (function (){var statearr_26180 = state_26162;
(statearr_26180[(13)] = inst_26155);

return statearr_26180;
})();
var statearr_26181_26213 = state_26162__$1;
(statearr_26181_26213[(2)] = inst_26156);

(statearr_26181_26213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (10))){
var inst_26146 = (state_26162[(2)]);
var state_26162__$1 = state_26162;
var statearr_26182_26214 = state_26162__$1;
(statearr_26182_26214[(2)] = inst_26146);

(statearr_26182_26214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26163 === (8))){
var inst_26126 = (state_26162[(7)]);
var inst_26135 = (state_26162[(11)]);
var tmp26179 = inst_26126;
var inst_26126__$1 = tmp26179;
var inst_26127 = inst_26135;
var state_26162__$1 = (function (){var statearr_26183 = state_26162;
(statearr_26183[(7)] = inst_26126__$1);

(statearr_26183[(8)] = inst_26127);

return statearr_26183;
})();
var statearr_26184_26215 = state_26162__$1;
(statearr_26184_26215[(2)] = null);

(statearr_26184_26215[(1)] = (2));


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
});})(c__21983__auto___26200,out))
;
return ((function (switch__21732__auto__,c__21983__auto___26200,out){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_26192 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26192[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_26192[(1)] = (1));

return statearr_26192;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_26162){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_26162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e26193){if((e26193 instanceof Object)){
var ex__21736__auto__ = e26193;
var statearr_26194_26216 = state_26162;
(statearr_26194_26216[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26217 = state_26162;
state_26162 = G__26217;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_26162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_26162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___26200,out))
})();
var state__21985__auto__ = (function (){var statearr_26195 = f__21984__auto__.call(null);
(statearr_26195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___26200);

return statearr_26195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___26200,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args26218 = [];
var len__19147__auto___26292 = arguments.length;
var i__19148__auto___26293 = (0);
while(true){
if((i__19148__auto___26293 < len__19147__auto___26292)){
args26218.push((arguments[i__19148__auto___26293]));

var G__26294 = (i__19148__auto___26293 + (1));
i__19148__auto___26293 = G__26294;
continue;
} else {
}
break;
}

var G__26220 = args26218.length;
switch (G__26220) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26218.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21983__auto___26296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___26296,out){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___26296,out){
return (function (state_26262){
var state_val_26263 = (state_26262[(1)]);
if((state_val_26263 === (7))){
var inst_26258 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26264_26297 = state_26262__$1;
(statearr_26264_26297[(2)] = inst_26258);

(statearr_26264_26297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (1))){
var inst_26221 = [];
var inst_26222 = inst_26221;
var inst_26223 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_26262__$1 = (function (){var statearr_26265 = state_26262;
(statearr_26265[(7)] = inst_26223);

(statearr_26265[(8)] = inst_26222);

return statearr_26265;
})();
var statearr_26266_26298 = state_26262__$1;
(statearr_26266_26298[(2)] = null);

(statearr_26266_26298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (4))){
var inst_26226 = (state_26262[(9)]);
var inst_26226__$1 = (state_26262[(2)]);
var inst_26227 = (inst_26226__$1 == null);
var inst_26228 = cljs.core.not.call(null,inst_26227);
var state_26262__$1 = (function (){var statearr_26267 = state_26262;
(statearr_26267[(9)] = inst_26226__$1);

return statearr_26267;
})();
if(inst_26228){
var statearr_26268_26299 = state_26262__$1;
(statearr_26268_26299[(1)] = (5));

} else {
var statearr_26269_26300 = state_26262__$1;
(statearr_26269_26300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (15))){
var inst_26252 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26270_26301 = state_26262__$1;
(statearr_26270_26301[(2)] = inst_26252);

(statearr_26270_26301[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (13))){
var state_26262__$1 = state_26262;
var statearr_26271_26302 = state_26262__$1;
(statearr_26271_26302[(2)] = null);

(statearr_26271_26302[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (6))){
var inst_26222 = (state_26262[(8)]);
var inst_26247 = inst_26222.length;
var inst_26248 = (inst_26247 > (0));
var state_26262__$1 = state_26262;
if(cljs.core.truth_(inst_26248)){
var statearr_26272_26303 = state_26262__$1;
(statearr_26272_26303[(1)] = (12));

} else {
var statearr_26273_26304 = state_26262__$1;
(statearr_26273_26304[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (3))){
var inst_26260 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26262__$1,inst_26260);
} else {
if((state_val_26263 === (12))){
var inst_26222 = (state_26262[(8)]);
var inst_26250 = cljs.core.vec.call(null,inst_26222);
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26262__$1,(15),out,inst_26250);
} else {
if((state_val_26263 === (2))){
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26262__$1,(4),ch);
} else {
if((state_val_26263 === (11))){
var inst_26230 = (state_26262[(10)]);
var inst_26226 = (state_26262[(9)]);
var inst_26240 = (state_26262[(2)]);
var inst_26241 = [];
var inst_26242 = inst_26241.push(inst_26226);
var inst_26222 = inst_26241;
var inst_26223 = inst_26230;
var state_26262__$1 = (function (){var statearr_26274 = state_26262;
(statearr_26274[(11)] = inst_26240);

(statearr_26274[(7)] = inst_26223);

(statearr_26274[(12)] = inst_26242);

(statearr_26274[(8)] = inst_26222);

return statearr_26274;
})();
var statearr_26275_26305 = state_26262__$1;
(statearr_26275_26305[(2)] = null);

(statearr_26275_26305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (9))){
var inst_26222 = (state_26262[(8)]);
var inst_26238 = cljs.core.vec.call(null,inst_26222);
var state_26262__$1 = state_26262;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26262__$1,(11),out,inst_26238);
} else {
if((state_val_26263 === (5))){
var inst_26223 = (state_26262[(7)]);
var inst_26230 = (state_26262[(10)]);
var inst_26226 = (state_26262[(9)]);
var inst_26230__$1 = f.call(null,inst_26226);
var inst_26231 = cljs.core._EQ_.call(null,inst_26230__$1,inst_26223);
var inst_26232 = cljs.core.keyword_identical_QMARK_.call(null,inst_26223,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_26233 = (inst_26231) || (inst_26232);
var state_26262__$1 = (function (){var statearr_26276 = state_26262;
(statearr_26276[(10)] = inst_26230__$1);

return statearr_26276;
})();
if(cljs.core.truth_(inst_26233)){
var statearr_26277_26306 = state_26262__$1;
(statearr_26277_26306[(1)] = (8));

} else {
var statearr_26278_26307 = state_26262__$1;
(statearr_26278_26307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (14))){
var inst_26255 = (state_26262[(2)]);
var inst_26256 = cljs.core.async.close_BANG_.call(null,out);
var state_26262__$1 = (function (){var statearr_26280 = state_26262;
(statearr_26280[(13)] = inst_26255);

return statearr_26280;
})();
var statearr_26281_26308 = state_26262__$1;
(statearr_26281_26308[(2)] = inst_26256);

(statearr_26281_26308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (10))){
var inst_26245 = (state_26262[(2)]);
var state_26262__$1 = state_26262;
var statearr_26282_26309 = state_26262__$1;
(statearr_26282_26309[(2)] = inst_26245);

(statearr_26282_26309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26263 === (8))){
var inst_26230 = (state_26262[(10)]);
var inst_26222 = (state_26262[(8)]);
var inst_26226 = (state_26262[(9)]);
var inst_26235 = inst_26222.push(inst_26226);
var tmp26279 = inst_26222;
var inst_26222__$1 = tmp26279;
var inst_26223 = inst_26230;
var state_26262__$1 = (function (){var statearr_26283 = state_26262;
(statearr_26283[(7)] = inst_26223);

(statearr_26283[(14)] = inst_26235);

(statearr_26283[(8)] = inst_26222__$1);

return statearr_26283;
})();
var statearr_26284_26310 = state_26262__$1;
(statearr_26284_26310[(2)] = null);

(statearr_26284_26310[(1)] = (2));


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
});})(c__21983__auto___26296,out))
;
return ((function (switch__21732__auto__,c__21983__auto___26296,out){
return (function() {
var cljs$core$async$state_machine__21733__auto__ = null;
var cljs$core$async$state_machine__21733__auto____0 = (function (){
var statearr_26288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26288[(0)] = cljs$core$async$state_machine__21733__auto__);

(statearr_26288[(1)] = (1));

return statearr_26288;
});
var cljs$core$async$state_machine__21733__auto____1 = (function (state_26262){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_26262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e26289){if((e26289 instanceof Object)){
var ex__21736__auto__ = e26289;
var statearr_26290_26311 = state_26262;
(statearr_26290_26311[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26289;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26312 = state_26262;
state_26262 = G__26312;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
cljs$core$async$state_machine__21733__auto__ = function(state_26262){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21733__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21733__auto____1.call(this,state_26262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21733__auto____0;
cljs$core$async$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21733__auto____1;
return cljs$core$async$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___26296,out))
})();
var state__21985__auto__ = (function (){var statearr_26291 = f__21984__auto__.call(null);
(statearr_26291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___26296);

return statearr_26291;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___26296,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map