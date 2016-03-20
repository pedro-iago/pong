// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20866 = [];
var len__17829__auto___20872 = arguments.length;
var i__17830__auto___20873 = (0);
while(true){
if((i__17830__auto___20873 < len__17829__auto___20872)){
args20866.push((arguments[i__17830__auto___20873]));

var G__20874 = (i__17830__auto___20873 + (1));
i__17830__auto___20873 = G__20874;
continue;
} else {
}
break;
}

var G__20868 = args20866.length;
switch (G__20868) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20866.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20869 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20869 = (function (f,blockable,meta20870){
this.f = f;
this.blockable = blockable;
this.meta20870 = meta20870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20871,meta20870__$1){
var self__ = this;
var _20871__$1 = this;
return (new cljs.core.async.t_cljs$core$async20869(self__.f,self__.blockable,meta20870__$1));
});

cljs.core.async.t_cljs$core$async20869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20871){
var self__ = this;
var _20871__$1 = this;
return self__.meta20870;
});

cljs.core.async.t_cljs$core$async20869.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20870","meta20870",752415994,null)], null);
});

cljs.core.async.t_cljs$core$async20869.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20869";

cljs.core.async.t_cljs$core$async20869.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20869");
});

cljs.core.async.__GT_t_cljs$core$async20869 = (function cljs$core$async$__GT_t_cljs$core$async20869(f__$1,blockable__$1,meta20870){
return (new cljs.core.async.t_cljs$core$async20869(f__$1,blockable__$1,meta20870));
});

}

return (new cljs.core.async.t_cljs$core$async20869(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20878 = [];
var len__17829__auto___20881 = arguments.length;
var i__17830__auto___20882 = (0);
while(true){
if((i__17830__auto___20882 < len__17829__auto___20881)){
args20878.push((arguments[i__17830__auto___20882]));

var G__20883 = (i__17830__auto___20882 + (1));
i__17830__auto___20882 = G__20883;
continue;
} else {
}
break;
}

var G__20880 = args20878.length;
switch (G__20880) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20878.length)].join('')));

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
var args20885 = [];
var len__17829__auto___20888 = arguments.length;
var i__17830__auto___20889 = (0);
while(true){
if((i__17830__auto___20889 < len__17829__auto___20888)){
args20885.push((arguments[i__17830__auto___20889]));

var G__20890 = (i__17830__auto___20889 + (1));
i__17830__auto___20889 = G__20890;
continue;
} else {
}
break;
}

var G__20887 = args20885.length;
switch (G__20887) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20885.length)].join('')));

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
var args20892 = [];
var len__17829__auto___20895 = arguments.length;
var i__17830__auto___20896 = (0);
while(true){
if((i__17830__auto___20896 < len__17829__auto___20895)){
args20892.push((arguments[i__17830__auto___20896]));

var G__20897 = (i__17830__auto___20896 + (1));
i__17830__auto___20896 = G__20897;
continue;
} else {
}
break;
}

var G__20894 = args20892.length;
switch (G__20894) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20892.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20899 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20899);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20899,ret){
return (function (){
return fn1.call(null,val_20899);
});})(val_20899,ret))
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
var args20900 = [];
var len__17829__auto___20903 = arguments.length;
var i__17830__auto___20904 = (0);
while(true){
if((i__17830__auto___20904 < len__17829__auto___20903)){
args20900.push((arguments[i__17830__auto___20904]));

var G__20905 = (i__17830__auto___20904 + (1));
i__17830__auto___20904 = G__20905;
continue;
} else {
}
break;
}

var G__20902 = args20900.length;
switch (G__20902) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20900.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
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
var n__17674__auto___20907 = n;
var x_20908 = (0);
while(true){
if((x_20908 < n__17674__auto___20907)){
(a[x_20908] = (0));

var G__20909 = (x_20908 + (1));
x_20908 = G__20909;
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

var G__20910 = (i + (1));
i = G__20910;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20914 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20914 = (function (alt_flag,flag,meta20915){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20915 = meta20915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20916,meta20915__$1){
var self__ = this;
var _20916__$1 = this;
return (new cljs.core.async.t_cljs$core$async20914(self__.alt_flag,self__.flag,meta20915__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20914.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20916){
var self__ = this;
var _20916__$1 = this;
return self__.meta20915;
});})(flag))
;

cljs.core.async.t_cljs$core$async20914.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20914.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20914.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20914.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20914.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20915","meta20915",-558958978,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20914.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20914.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20914";

cljs.core.async.t_cljs$core$async20914.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20914");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20914 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20914(alt_flag__$1,flag__$1,meta20915){
return (new cljs.core.async.t_cljs$core$async20914(alt_flag__$1,flag__$1,meta20915));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20914(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20920 = (function (alt_handler,flag,cb,meta20921){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20921 = meta20921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20922,meta20921__$1){
var self__ = this;
var _20922__$1 = this;
return (new cljs.core.async.t_cljs$core$async20920(self__.alt_handler,self__.flag,self__.cb,meta20921__$1));
});

cljs.core.async.t_cljs$core$async20920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20922){
var self__ = this;
var _20922__$1 = this;
return self__.meta20921;
});

cljs.core.async.t_cljs$core$async20920.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20920.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20921","meta20921",-1587738354,null)], null);
});

cljs.core.async.t_cljs$core$async20920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20920";

cljs.core.async.t_cljs$core$async20920.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async20920");
});

cljs.core.async.__GT_t_cljs$core$async20920 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20920(alt_handler__$1,flag__$1,cb__$1,meta20921){
return (new cljs.core.async.t_cljs$core$async20920(alt_handler__$1,flag__$1,cb__$1,meta20921));
});

}

return (new cljs.core.async.t_cljs$core$async20920(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20923_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20923_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20924_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20924_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__20925 = (i + (1));
i = G__20925;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
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
var args__17836__auto__ = [];
var len__17829__auto___20931 = arguments.length;
var i__17830__auto___20932 = (0);
while(true){
if((i__17830__auto___20932 < len__17829__auto___20931)){
args__17836__auto__.push((arguments[i__17830__auto___20932]));

var G__20933 = (i__17830__auto___20932 + (1));
i__17830__auto___20932 = G__20933;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20928){
var map__20929 = p__20928;
var map__20929__$1 = ((((!((map__20929 == null)))?((((map__20929.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20929.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20929):map__20929);
var opts = map__20929__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20926){
var G__20927 = cljs.core.first.call(null,seq20926);
var seq20926__$1 = cljs.core.next.call(null,seq20926);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20927,seq20926__$1);
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
var args20934 = [];
var len__17829__auto___20984 = arguments.length;
var i__17830__auto___20985 = (0);
while(true){
if((i__17830__auto___20985 < len__17829__auto___20984)){
args20934.push((arguments[i__17830__auto___20985]));

var G__20986 = (i__17830__auto___20985 + (1));
i__17830__auto___20985 = G__20986;
continue;
} else {
}
break;
}

var G__20936 = args20934.length;
switch (G__20936) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20934.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20821__auto___20988 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___20988){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___20988){
return (function (state_20960){
var state_val_20961 = (state_20960[(1)]);
if((state_val_20961 === (7))){
var inst_20956 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20962_20989 = state_20960__$1;
(statearr_20962_20989[(2)] = inst_20956);

(statearr_20962_20989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (1))){
var state_20960__$1 = state_20960;
var statearr_20963_20990 = state_20960__$1;
(statearr_20963_20990[(2)] = null);

(statearr_20963_20990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (4))){
var inst_20939 = (state_20960[(7)]);
var inst_20939__$1 = (state_20960[(2)]);
var inst_20940 = (inst_20939__$1 == null);
var state_20960__$1 = (function (){var statearr_20964 = state_20960;
(statearr_20964[(7)] = inst_20939__$1);

return statearr_20964;
})();
if(cljs.core.truth_(inst_20940)){
var statearr_20965_20991 = state_20960__$1;
(statearr_20965_20991[(1)] = (5));

} else {
var statearr_20966_20992 = state_20960__$1;
(statearr_20966_20992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (13))){
var state_20960__$1 = state_20960;
var statearr_20967_20993 = state_20960__$1;
(statearr_20967_20993[(2)] = null);

(statearr_20967_20993[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (6))){
var inst_20939 = (state_20960[(7)]);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20960__$1,(11),to,inst_20939);
} else {
if((state_val_20961 === (3))){
var inst_20958 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20960__$1,inst_20958);
} else {
if((state_val_20961 === (12))){
var state_20960__$1 = state_20960;
var statearr_20968_20994 = state_20960__$1;
(statearr_20968_20994[(2)] = null);

(statearr_20968_20994[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (2))){
var state_20960__$1 = state_20960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20960__$1,(4),from);
} else {
if((state_val_20961 === (11))){
var inst_20949 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
if(cljs.core.truth_(inst_20949)){
var statearr_20969_20995 = state_20960__$1;
(statearr_20969_20995[(1)] = (12));

} else {
var statearr_20970_20996 = state_20960__$1;
(statearr_20970_20996[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (9))){
var state_20960__$1 = state_20960;
var statearr_20971_20997 = state_20960__$1;
(statearr_20971_20997[(2)] = null);

(statearr_20971_20997[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (5))){
var state_20960__$1 = state_20960;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20972_20998 = state_20960__$1;
(statearr_20972_20998[(1)] = (8));

} else {
var statearr_20973_20999 = state_20960__$1;
(statearr_20973_20999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (14))){
var inst_20954 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20974_21000 = state_20960__$1;
(statearr_20974_21000[(2)] = inst_20954);

(statearr_20974_21000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (10))){
var inst_20946 = (state_20960[(2)]);
var state_20960__$1 = state_20960;
var statearr_20975_21001 = state_20960__$1;
(statearr_20975_21001[(2)] = inst_20946);

(statearr_20975_21001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20961 === (8))){
var inst_20943 = cljs.core.async.close_BANG_.call(null,to);
var state_20960__$1 = state_20960;
var statearr_20976_21002 = state_20960__$1;
(statearr_20976_21002[(2)] = inst_20943);

(statearr_20976_21002[(1)] = (10));


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
});})(c__20821__auto___20988))
;
return ((function (switch__20709__auto__,c__20821__auto___20988){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_20980 = [null,null,null,null,null,null,null,null];
(statearr_20980[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_20980[(1)] = (1));

return statearr_20980;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_20960){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_20960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e20981){if((e20981 instanceof Object)){
var ex__20713__auto__ = e20981;
var statearr_20982_21003 = state_20960;
(statearr_20982_21003[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20981;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21004 = state_20960;
state_20960 = G__21004;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_20960){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_20960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___20988))
})();
var state__20823__auto__ = (function (){var statearr_20983 = f__20822__auto__.call(null);
(statearr_20983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___20988);

return statearr_20983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___20988))
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
return (function (p__21188){
var vec__21189 = p__21188;
var v = cljs.core.nth.call(null,vec__21189,(0),null);
var p = cljs.core.nth.call(null,vec__21189,(1),null);
var job = vec__21189;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20821__auto___21371 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___21371,res,vec__21189,v,p,job,jobs,results){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___21371,res,vec__21189,v,p,job,jobs,results){
return (function (state_21194){
var state_val_21195 = (state_21194[(1)]);
if((state_val_21195 === (1))){
var state_21194__$1 = state_21194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21194__$1,(2),res,v);
} else {
if((state_val_21195 === (2))){
var inst_21191 = (state_21194[(2)]);
var inst_21192 = cljs.core.async.close_BANG_.call(null,res);
var state_21194__$1 = (function (){var statearr_21196 = state_21194;
(statearr_21196[(7)] = inst_21191);

return statearr_21196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21194__$1,inst_21192);
} else {
return null;
}
}
});})(c__20821__auto___21371,res,vec__21189,v,p,job,jobs,results))
;
return ((function (switch__20709__auto__,c__20821__auto___21371,res,vec__21189,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0 = (function (){
var statearr_21200 = [null,null,null,null,null,null,null,null];
(statearr_21200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__);

(statearr_21200[(1)] = (1));

return statearr_21200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1 = (function (state_21194){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21201){if((e21201 instanceof Object)){
var ex__20713__auto__ = e21201;
var statearr_21202_21372 = state_21194;
(statearr_21202_21372[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21373 = state_21194;
state_21194 = G__21373;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = function(state_21194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1.call(this,state_21194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___21371,res,vec__21189,v,p,job,jobs,results))
})();
var state__20823__auto__ = (function (){var statearr_21203 = f__20822__auto__.call(null);
(statearr_21203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___21371);

return statearr_21203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___21371,res,vec__21189,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21204){
var vec__21205 = p__21204;
var v = cljs.core.nth.call(null,vec__21205,(0),null);
var p = cljs.core.nth.call(null,vec__21205,(1),null);
var job = vec__21205;
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
var n__17674__auto___21374 = n;
var __21375 = (0);
while(true){
if((__21375 < n__17674__auto___21374)){
var G__21206_21376 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21206_21376) {
case "compute":
var c__20821__auto___21378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21375,c__20821__auto___21378,G__21206_21376,n__17674__auto___21374,jobs,results,process,async){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (__21375,c__20821__auto___21378,G__21206_21376,n__17674__auto___21374,jobs,results,process,async){
return (function (state_21219){
var state_val_21220 = (state_21219[(1)]);
if((state_val_21220 === (1))){
var state_21219__$1 = state_21219;
var statearr_21221_21379 = state_21219__$1;
(statearr_21221_21379[(2)] = null);

(statearr_21221_21379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21220 === (2))){
var state_21219__$1 = state_21219;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21219__$1,(4),jobs);
} else {
if((state_val_21220 === (3))){
var inst_21217 = (state_21219[(2)]);
var state_21219__$1 = state_21219;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21219__$1,inst_21217);
} else {
if((state_val_21220 === (4))){
var inst_21209 = (state_21219[(2)]);
var inst_21210 = process.call(null,inst_21209);
var state_21219__$1 = state_21219;
if(cljs.core.truth_(inst_21210)){
var statearr_21222_21380 = state_21219__$1;
(statearr_21222_21380[(1)] = (5));

} else {
var statearr_21223_21381 = state_21219__$1;
(statearr_21223_21381[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21220 === (5))){
var state_21219__$1 = state_21219;
var statearr_21224_21382 = state_21219__$1;
(statearr_21224_21382[(2)] = null);

(statearr_21224_21382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21220 === (6))){
var state_21219__$1 = state_21219;
var statearr_21225_21383 = state_21219__$1;
(statearr_21225_21383[(2)] = null);

(statearr_21225_21383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21220 === (7))){
var inst_21215 = (state_21219[(2)]);
var state_21219__$1 = state_21219;
var statearr_21226_21384 = state_21219__$1;
(statearr_21226_21384[(2)] = inst_21215);

(statearr_21226_21384[(1)] = (3));


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
});})(__21375,c__20821__auto___21378,G__21206_21376,n__17674__auto___21374,jobs,results,process,async))
;
return ((function (__21375,switch__20709__auto__,c__20821__auto___21378,G__21206_21376,n__17674__auto___21374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0 = (function (){
var statearr_21230 = [null,null,null,null,null,null,null];
(statearr_21230[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__);

(statearr_21230[(1)] = (1));

return statearr_21230;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1 = (function (state_21219){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21219);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21231){if((e21231 instanceof Object)){
var ex__20713__auto__ = e21231;
var statearr_21232_21385 = state_21219;
(statearr_21232_21385[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21231;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21386 = state_21219;
state_21219 = G__21386;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = function(state_21219){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1.call(this,state_21219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__;
})()
;})(__21375,switch__20709__auto__,c__20821__auto___21378,G__21206_21376,n__17674__auto___21374,jobs,results,process,async))
})();
var state__20823__auto__ = (function (){var statearr_21233 = f__20822__auto__.call(null);
(statearr_21233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___21378);

return statearr_21233;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(__21375,c__20821__auto___21378,G__21206_21376,n__17674__auto___21374,jobs,results,process,async))
);


break;
case "async":
var c__20821__auto___21387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21375,c__20821__auto___21387,G__21206_21376,n__17674__auto___21374,jobs,results,process,async){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (__21375,c__20821__auto___21387,G__21206_21376,n__17674__auto___21374,jobs,results,process,async){
return (function (state_21246){
var state_val_21247 = (state_21246[(1)]);
if((state_val_21247 === (1))){
var state_21246__$1 = state_21246;
var statearr_21248_21388 = state_21246__$1;
(statearr_21248_21388[(2)] = null);

(statearr_21248_21388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (2))){
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21246__$1,(4),jobs);
} else {
if((state_val_21247 === (3))){
var inst_21244 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21246__$1,inst_21244);
} else {
if((state_val_21247 === (4))){
var inst_21236 = (state_21246[(2)]);
var inst_21237 = async.call(null,inst_21236);
var state_21246__$1 = state_21246;
if(cljs.core.truth_(inst_21237)){
var statearr_21249_21389 = state_21246__$1;
(statearr_21249_21389[(1)] = (5));

} else {
var statearr_21250_21390 = state_21246__$1;
(statearr_21250_21390[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (5))){
var state_21246__$1 = state_21246;
var statearr_21251_21391 = state_21246__$1;
(statearr_21251_21391[(2)] = null);

(statearr_21251_21391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (6))){
var state_21246__$1 = state_21246;
var statearr_21252_21392 = state_21246__$1;
(statearr_21252_21392[(2)] = null);

(statearr_21252_21392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21247 === (7))){
var inst_21242 = (state_21246[(2)]);
var state_21246__$1 = state_21246;
var statearr_21253_21393 = state_21246__$1;
(statearr_21253_21393[(2)] = inst_21242);

(statearr_21253_21393[(1)] = (3));


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
});})(__21375,c__20821__auto___21387,G__21206_21376,n__17674__auto___21374,jobs,results,process,async))
;
return ((function (__21375,switch__20709__auto__,c__20821__auto___21387,G__21206_21376,n__17674__auto___21374,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0 = (function (){
var statearr_21257 = [null,null,null,null,null,null,null];
(statearr_21257[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__);

(statearr_21257[(1)] = (1));

return statearr_21257;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1 = (function (state_21246){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21246);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21258){if((e21258 instanceof Object)){
var ex__20713__auto__ = e21258;
var statearr_21259_21394 = state_21246;
(statearr_21259_21394[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21246);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21395 = state_21246;
state_21246 = G__21395;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = function(state_21246){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1.call(this,state_21246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__;
})()
;})(__21375,switch__20709__auto__,c__20821__auto___21387,G__21206_21376,n__17674__auto___21374,jobs,results,process,async))
})();
var state__20823__auto__ = (function (){var statearr_21260 = f__20822__auto__.call(null);
(statearr_21260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___21387);

return statearr_21260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(__21375,c__20821__auto___21387,G__21206_21376,n__17674__auto___21374,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21396 = (__21375 + (1));
__21375 = G__21396;
continue;
} else {
}
break;
}

var c__20821__auto___21397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___21397,jobs,results,process,async){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___21397,jobs,results,process,async){
return (function (state_21282){
var state_val_21283 = (state_21282[(1)]);
if((state_val_21283 === (1))){
var state_21282__$1 = state_21282;
var statearr_21284_21398 = state_21282__$1;
(statearr_21284_21398[(2)] = null);

(statearr_21284_21398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21283 === (2))){
var state_21282__$1 = state_21282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21282__$1,(4),from);
} else {
if((state_val_21283 === (3))){
var inst_21280 = (state_21282[(2)]);
var state_21282__$1 = state_21282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21282__$1,inst_21280);
} else {
if((state_val_21283 === (4))){
var inst_21263 = (state_21282[(7)]);
var inst_21263__$1 = (state_21282[(2)]);
var inst_21264 = (inst_21263__$1 == null);
var state_21282__$1 = (function (){var statearr_21285 = state_21282;
(statearr_21285[(7)] = inst_21263__$1);

return statearr_21285;
})();
if(cljs.core.truth_(inst_21264)){
var statearr_21286_21399 = state_21282__$1;
(statearr_21286_21399[(1)] = (5));

} else {
var statearr_21287_21400 = state_21282__$1;
(statearr_21287_21400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21283 === (5))){
var inst_21266 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21282__$1 = state_21282;
var statearr_21288_21401 = state_21282__$1;
(statearr_21288_21401[(2)] = inst_21266);

(statearr_21288_21401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21283 === (6))){
var inst_21268 = (state_21282[(8)]);
var inst_21263 = (state_21282[(7)]);
var inst_21268__$1 = cljs.core.async.chan.call(null,(1));
var inst_21269 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21270 = [inst_21263,inst_21268__$1];
var inst_21271 = (new cljs.core.PersistentVector(null,2,(5),inst_21269,inst_21270,null));
var state_21282__$1 = (function (){var statearr_21289 = state_21282;
(statearr_21289[(8)] = inst_21268__$1);

return statearr_21289;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21282__$1,(8),jobs,inst_21271);
} else {
if((state_val_21283 === (7))){
var inst_21278 = (state_21282[(2)]);
var state_21282__$1 = state_21282;
var statearr_21290_21402 = state_21282__$1;
(statearr_21290_21402[(2)] = inst_21278);

(statearr_21290_21402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21283 === (8))){
var inst_21268 = (state_21282[(8)]);
var inst_21273 = (state_21282[(2)]);
var state_21282__$1 = (function (){var statearr_21291 = state_21282;
(statearr_21291[(9)] = inst_21273);

return statearr_21291;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21282__$1,(9),results,inst_21268);
} else {
if((state_val_21283 === (9))){
var inst_21275 = (state_21282[(2)]);
var state_21282__$1 = (function (){var statearr_21292 = state_21282;
(statearr_21292[(10)] = inst_21275);

return statearr_21292;
})();
var statearr_21293_21403 = state_21282__$1;
(statearr_21293_21403[(2)] = null);

(statearr_21293_21403[(1)] = (2));


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
});})(c__20821__auto___21397,jobs,results,process,async))
;
return ((function (switch__20709__auto__,c__20821__auto___21397,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0 = (function (){
var statearr_21297 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__);

(statearr_21297[(1)] = (1));

return statearr_21297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1 = (function (state_21282){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21298){if((e21298 instanceof Object)){
var ex__20713__auto__ = e21298;
var statearr_21299_21404 = state_21282;
(statearr_21299_21404[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21405 = state_21282;
state_21282 = G__21405;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = function(state_21282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1.call(this,state_21282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___21397,jobs,results,process,async))
})();
var state__20823__auto__ = (function (){var statearr_21300 = f__20822__auto__.call(null);
(statearr_21300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___21397);

return statearr_21300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___21397,jobs,results,process,async))
);


var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__,jobs,results,process,async){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__,jobs,results,process,async){
return (function (state_21338){
var state_val_21339 = (state_21338[(1)]);
if((state_val_21339 === (7))){
var inst_21334 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21340_21406 = state_21338__$1;
(statearr_21340_21406[(2)] = inst_21334);

(statearr_21340_21406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (20))){
var state_21338__$1 = state_21338;
var statearr_21341_21407 = state_21338__$1;
(statearr_21341_21407[(2)] = null);

(statearr_21341_21407[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (1))){
var state_21338__$1 = state_21338;
var statearr_21342_21408 = state_21338__$1;
(statearr_21342_21408[(2)] = null);

(statearr_21342_21408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (4))){
var inst_21303 = (state_21338[(7)]);
var inst_21303__$1 = (state_21338[(2)]);
var inst_21304 = (inst_21303__$1 == null);
var state_21338__$1 = (function (){var statearr_21343 = state_21338;
(statearr_21343[(7)] = inst_21303__$1);

return statearr_21343;
})();
if(cljs.core.truth_(inst_21304)){
var statearr_21344_21409 = state_21338__$1;
(statearr_21344_21409[(1)] = (5));

} else {
var statearr_21345_21410 = state_21338__$1;
(statearr_21345_21410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (15))){
var inst_21316 = (state_21338[(8)]);
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21338__$1,(18),to,inst_21316);
} else {
if((state_val_21339 === (21))){
var inst_21329 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21346_21411 = state_21338__$1;
(statearr_21346_21411[(2)] = inst_21329);

(statearr_21346_21411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (13))){
var inst_21331 = (state_21338[(2)]);
var state_21338__$1 = (function (){var statearr_21347 = state_21338;
(statearr_21347[(9)] = inst_21331);

return statearr_21347;
})();
var statearr_21348_21412 = state_21338__$1;
(statearr_21348_21412[(2)] = null);

(statearr_21348_21412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (6))){
var inst_21303 = (state_21338[(7)]);
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21338__$1,(11),inst_21303);
} else {
if((state_val_21339 === (17))){
var inst_21324 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
if(cljs.core.truth_(inst_21324)){
var statearr_21349_21413 = state_21338__$1;
(statearr_21349_21413[(1)] = (19));

} else {
var statearr_21350_21414 = state_21338__$1;
(statearr_21350_21414[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (3))){
var inst_21336 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21338__$1,inst_21336);
} else {
if((state_val_21339 === (12))){
var inst_21313 = (state_21338[(10)]);
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21338__$1,(14),inst_21313);
} else {
if((state_val_21339 === (2))){
var state_21338__$1 = state_21338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21338__$1,(4),results);
} else {
if((state_val_21339 === (19))){
var state_21338__$1 = state_21338;
var statearr_21351_21415 = state_21338__$1;
(statearr_21351_21415[(2)] = null);

(statearr_21351_21415[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (11))){
var inst_21313 = (state_21338[(2)]);
var state_21338__$1 = (function (){var statearr_21352 = state_21338;
(statearr_21352[(10)] = inst_21313);

return statearr_21352;
})();
var statearr_21353_21416 = state_21338__$1;
(statearr_21353_21416[(2)] = null);

(statearr_21353_21416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (9))){
var state_21338__$1 = state_21338;
var statearr_21354_21417 = state_21338__$1;
(statearr_21354_21417[(2)] = null);

(statearr_21354_21417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (5))){
var state_21338__$1 = state_21338;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21355_21418 = state_21338__$1;
(statearr_21355_21418[(1)] = (8));

} else {
var statearr_21356_21419 = state_21338__$1;
(statearr_21356_21419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (14))){
var inst_21316 = (state_21338[(8)]);
var inst_21318 = (state_21338[(11)]);
var inst_21316__$1 = (state_21338[(2)]);
var inst_21317 = (inst_21316__$1 == null);
var inst_21318__$1 = cljs.core.not.call(null,inst_21317);
var state_21338__$1 = (function (){var statearr_21357 = state_21338;
(statearr_21357[(8)] = inst_21316__$1);

(statearr_21357[(11)] = inst_21318__$1);

return statearr_21357;
})();
if(inst_21318__$1){
var statearr_21358_21420 = state_21338__$1;
(statearr_21358_21420[(1)] = (15));

} else {
var statearr_21359_21421 = state_21338__$1;
(statearr_21359_21421[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (16))){
var inst_21318 = (state_21338[(11)]);
var state_21338__$1 = state_21338;
var statearr_21360_21422 = state_21338__$1;
(statearr_21360_21422[(2)] = inst_21318);

(statearr_21360_21422[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (10))){
var inst_21310 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21361_21423 = state_21338__$1;
(statearr_21361_21423[(2)] = inst_21310);

(statearr_21361_21423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (18))){
var inst_21321 = (state_21338[(2)]);
var state_21338__$1 = state_21338;
var statearr_21362_21424 = state_21338__$1;
(statearr_21362_21424[(2)] = inst_21321);

(statearr_21362_21424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21339 === (8))){
var inst_21307 = cljs.core.async.close_BANG_.call(null,to);
var state_21338__$1 = state_21338;
var statearr_21363_21425 = state_21338__$1;
(statearr_21363_21425[(2)] = inst_21307);

(statearr_21363_21425[(1)] = (10));


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
});})(c__20821__auto__,jobs,results,process,async))
;
return ((function (switch__20709__auto__,c__20821__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0 = (function (){
var statearr_21367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__);

(statearr_21367[(1)] = (1));

return statearr_21367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1 = (function (state_21338){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21368){if((e21368 instanceof Object)){
var ex__20713__auto__ = e21368;
var statearr_21369_21426 = state_21338;
(statearr_21369_21426[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21427 = state_21338;
state_21338 = G__21427;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__ = function(state_21338){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1.call(this,state_21338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20710__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__,jobs,results,process,async))
})();
var state__20823__auto__ = (function (){var statearr_21370 = f__20822__auto__.call(null);
(statearr_21370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_21370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__,jobs,results,process,async))
);

return c__20821__auto__;
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
var args21428 = [];
var len__17829__auto___21431 = arguments.length;
var i__17830__auto___21432 = (0);
while(true){
if((i__17830__auto___21432 < len__17829__auto___21431)){
args21428.push((arguments[i__17830__auto___21432]));

var G__21433 = (i__17830__auto___21432 + (1));
i__17830__auto___21432 = G__21433;
continue;
} else {
}
break;
}

var G__21430 = args21428.length;
switch (G__21430) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21428.length)].join('')));

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
var args21435 = [];
var len__17829__auto___21438 = arguments.length;
var i__17830__auto___21439 = (0);
while(true){
if((i__17830__auto___21439 < len__17829__auto___21438)){
args21435.push((arguments[i__17830__auto___21439]));

var G__21440 = (i__17830__auto___21439 + (1));
i__17830__auto___21439 = G__21440;
continue;
} else {
}
break;
}

var G__21437 = args21435.length;
switch (G__21437) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21435.length)].join('')));

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
var args21442 = [];
var len__17829__auto___21495 = arguments.length;
var i__17830__auto___21496 = (0);
while(true){
if((i__17830__auto___21496 < len__17829__auto___21495)){
args21442.push((arguments[i__17830__auto___21496]));

var G__21497 = (i__17830__auto___21496 + (1));
i__17830__auto___21496 = G__21497;
continue;
} else {
}
break;
}

var G__21444 = args21442.length;
switch (G__21444) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21442.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20821__auto___21499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___21499,tc,fc){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___21499,tc,fc){
return (function (state_21470){
var state_val_21471 = (state_21470[(1)]);
if((state_val_21471 === (7))){
var inst_21466 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
var statearr_21472_21500 = state_21470__$1;
(statearr_21472_21500[(2)] = inst_21466);

(statearr_21472_21500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (1))){
var state_21470__$1 = state_21470;
var statearr_21473_21501 = state_21470__$1;
(statearr_21473_21501[(2)] = null);

(statearr_21473_21501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (4))){
var inst_21447 = (state_21470[(7)]);
var inst_21447__$1 = (state_21470[(2)]);
var inst_21448 = (inst_21447__$1 == null);
var state_21470__$1 = (function (){var statearr_21474 = state_21470;
(statearr_21474[(7)] = inst_21447__$1);

return statearr_21474;
})();
if(cljs.core.truth_(inst_21448)){
var statearr_21475_21502 = state_21470__$1;
(statearr_21475_21502[(1)] = (5));

} else {
var statearr_21476_21503 = state_21470__$1;
(statearr_21476_21503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (13))){
var state_21470__$1 = state_21470;
var statearr_21477_21504 = state_21470__$1;
(statearr_21477_21504[(2)] = null);

(statearr_21477_21504[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (6))){
var inst_21447 = (state_21470[(7)]);
var inst_21453 = p.call(null,inst_21447);
var state_21470__$1 = state_21470;
if(cljs.core.truth_(inst_21453)){
var statearr_21478_21505 = state_21470__$1;
(statearr_21478_21505[(1)] = (9));

} else {
var statearr_21479_21506 = state_21470__$1;
(statearr_21479_21506[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (3))){
var inst_21468 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21470__$1,inst_21468);
} else {
if((state_val_21471 === (12))){
var state_21470__$1 = state_21470;
var statearr_21480_21507 = state_21470__$1;
(statearr_21480_21507[(2)] = null);

(statearr_21480_21507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (2))){
var state_21470__$1 = state_21470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21470__$1,(4),ch);
} else {
if((state_val_21471 === (11))){
var inst_21447 = (state_21470[(7)]);
var inst_21457 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21470__$1,(8),inst_21457,inst_21447);
} else {
if((state_val_21471 === (9))){
var state_21470__$1 = state_21470;
var statearr_21481_21508 = state_21470__$1;
(statearr_21481_21508[(2)] = tc);

(statearr_21481_21508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (5))){
var inst_21450 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21451 = cljs.core.async.close_BANG_.call(null,fc);
var state_21470__$1 = (function (){var statearr_21482 = state_21470;
(statearr_21482[(8)] = inst_21450);

return statearr_21482;
})();
var statearr_21483_21509 = state_21470__$1;
(statearr_21483_21509[(2)] = inst_21451);

(statearr_21483_21509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (14))){
var inst_21464 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
var statearr_21484_21510 = state_21470__$1;
(statearr_21484_21510[(2)] = inst_21464);

(statearr_21484_21510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (10))){
var state_21470__$1 = state_21470;
var statearr_21485_21511 = state_21470__$1;
(statearr_21485_21511[(2)] = fc);

(statearr_21485_21511[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21471 === (8))){
var inst_21459 = (state_21470[(2)]);
var state_21470__$1 = state_21470;
if(cljs.core.truth_(inst_21459)){
var statearr_21486_21512 = state_21470__$1;
(statearr_21486_21512[(1)] = (12));

} else {
var statearr_21487_21513 = state_21470__$1;
(statearr_21487_21513[(1)] = (13));

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
});})(c__20821__auto___21499,tc,fc))
;
return ((function (switch__20709__auto__,c__20821__auto___21499,tc,fc){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_21491 = [null,null,null,null,null,null,null,null,null];
(statearr_21491[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_21491[(1)] = (1));

return statearr_21491;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_21470){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21492){if((e21492 instanceof Object)){
var ex__20713__auto__ = e21492;
var statearr_21493_21514 = state_21470;
(statearr_21493_21514[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21515 = state_21470;
state_21470 = G__21515;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_21470){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_21470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___21499,tc,fc))
})();
var state__20823__auto__ = (function (){var statearr_21494 = f__20822__auto__.call(null);
(statearr_21494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___21499);

return statearr_21494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___21499,tc,fc))
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
var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__){
return (function (state_21579){
var state_val_21580 = (state_21579[(1)]);
if((state_val_21580 === (7))){
var inst_21575 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21581_21602 = state_21579__$1;
(statearr_21581_21602[(2)] = inst_21575);

(statearr_21581_21602[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (1))){
var inst_21559 = init;
var state_21579__$1 = (function (){var statearr_21582 = state_21579;
(statearr_21582[(7)] = inst_21559);

return statearr_21582;
})();
var statearr_21583_21603 = state_21579__$1;
(statearr_21583_21603[(2)] = null);

(statearr_21583_21603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (4))){
var inst_21562 = (state_21579[(8)]);
var inst_21562__$1 = (state_21579[(2)]);
var inst_21563 = (inst_21562__$1 == null);
var state_21579__$1 = (function (){var statearr_21584 = state_21579;
(statearr_21584[(8)] = inst_21562__$1);

return statearr_21584;
})();
if(cljs.core.truth_(inst_21563)){
var statearr_21585_21604 = state_21579__$1;
(statearr_21585_21604[(1)] = (5));

} else {
var statearr_21586_21605 = state_21579__$1;
(statearr_21586_21605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (6))){
var inst_21559 = (state_21579[(7)]);
var inst_21562 = (state_21579[(8)]);
var inst_21566 = (state_21579[(9)]);
var inst_21566__$1 = f.call(null,inst_21559,inst_21562);
var inst_21567 = cljs.core.reduced_QMARK_.call(null,inst_21566__$1);
var state_21579__$1 = (function (){var statearr_21587 = state_21579;
(statearr_21587[(9)] = inst_21566__$1);

return statearr_21587;
})();
if(inst_21567){
var statearr_21588_21606 = state_21579__$1;
(statearr_21588_21606[(1)] = (8));

} else {
var statearr_21589_21607 = state_21579__$1;
(statearr_21589_21607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (3))){
var inst_21577 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21579__$1,inst_21577);
} else {
if((state_val_21580 === (2))){
var state_21579__$1 = state_21579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21579__$1,(4),ch);
} else {
if((state_val_21580 === (9))){
var inst_21566 = (state_21579[(9)]);
var inst_21559 = inst_21566;
var state_21579__$1 = (function (){var statearr_21590 = state_21579;
(statearr_21590[(7)] = inst_21559);

return statearr_21590;
})();
var statearr_21591_21608 = state_21579__$1;
(statearr_21591_21608[(2)] = null);

(statearr_21591_21608[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (5))){
var inst_21559 = (state_21579[(7)]);
var state_21579__$1 = state_21579;
var statearr_21592_21609 = state_21579__$1;
(statearr_21592_21609[(2)] = inst_21559);

(statearr_21592_21609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (10))){
var inst_21573 = (state_21579[(2)]);
var state_21579__$1 = state_21579;
var statearr_21593_21610 = state_21579__$1;
(statearr_21593_21610[(2)] = inst_21573);

(statearr_21593_21610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21580 === (8))){
var inst_21566 = (state_21579[(9)]);
var inst_21569 = cljs.core.deref.call(null,inst_21566);
var state_21579__$1 = state_21579;
var statearr_21594_21611 = state_21579__$1;
(statearr_21594_21611[(2)] = inst_21569);

(statearr_21594_21611[(1)] = (10));


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
});})(c__20821__auto__))
;
return ((function (switch__20709__auto__,c__20821__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20710__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20710__auto____0 = (function (){
var statearr_21598 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21598[(0)] = cljs$core$async$reduce_$_state_machine__20710__auto__);

(statearr_21598[(1)] = (1));

return statearr_21598;
});
var cljs$core$async$reduce_$_state_machine__20710__auto____1 = (function (state_21579){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21599){if((e21599 instanceof Object)){
var ex__20713__auto__ = e21599;
var statearr_21600_21612 = state_21579;
(statearr_21600_21612[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21613 = state_21579;
state_21579 = G__21613;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20710__auto__ = function(state_21579){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20710__auto____1.call(this,state_21579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20710__auto____0;
cljs$core$async$reduce_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20710__auto____1;
return cljs$core$async$reduce_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__))
})();
var state__20823__auto__ = (function (){var statearr_21601 = f__20822__auto__.call(null);
(statearr_21601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_21601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__))
);

return c__20821__auto__;
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
var args21614 = [];
var len__17829__auto___21666 = arguments.length;
var i__17830__auto___21667 = (0);
while(true){
if((i__17830__auto___21667 < len__17829__auto___21666)){
args21614.push((arguments[i__17830__auto___21667]));

var G__21668 = (i__17830__auto___21667 + (1));
i__17830__auto___21667 = G__21668;
continue;
} else {
}
break;
}

var G__21616 = args21614.length;
switch (G__21616) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21614.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__){
return (function (state_21641){
var state_val_21642 = (state_21641[(1)]);
if((state_val_21642 === (7))){
var inst_21623 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21643_21670 = state_21641__$1;
(statearr_21643_21670[(2)] = inst_21623);

(statearr_21643_21670[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (1))){
var inst_21617 = cljs.core.seq.call(null,coll);
var inst_21618 = inst_21617;
var state_21641__$1 = (function (){var statearr_21644 = state_21641;
(statearr_21644[(7)] = inst_21618);

return statearr_21644;
})();
var statearr_21645_21671 = state_21641__$1;
(statearr_21645_21671[(2)] = null);

(statearr_21645_21671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (4))){
var inst_21618 = (state_21641[(7)]);
var inst_21621 = cljs.core.first.call(null,inst_21618);
var state_21641__$1 = state_21641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21641__$1,(7),ch,inst_21621);
} else {
if((state_val_21642 === (13))){
var inst_21635 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21646_21672 = state_21641__$1;
(statearr_21646_21672[(2)] = inst_21635);

(statearr_21646_21672[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (6))){
var inst_21626 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21626)){
var statearr_21647_21673 = state_21641__$1;
(statearr_21647_21673[(1)] = (8));

} else {
var statearr_21648_21674 = state_21641__$1;
(statearr_21648_21674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (3))){
var inst_21639 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21641__$1,inst_21639);
} else {
if((state_val_21642 === (12))){
var state_21641__$1 = state_21641;
var statearr_21649_21675 = state_21641__$1;
(statearr_21649_21675[(2)] = null);

(statearr_21649_21675[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (2))){
var inst_21618 = (state_21641[(7)]);
var state_21641__$1 = state_21641;
if(cljs.core.truth_(inst_21618)){
var statearr_21650_21676 = state_21641__$1;
(statearr_21650_21676[(1)] = (4));

} else {
var statearr_21651_21677 = state_21641__$1;
(statearr_21651_21677[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (11))){
var inst_21632 = cljs.core.async.close_BANG_.call(null,ch);
var state_21641__$1 = state_21641;
var statearr_21652_21678 = state_21641__$1;
(statearr_21652_21678[(2)] = inst_21632);

(statearr_21652_21678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (9))){
var state_21641__$1 = state_21641;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21653_21679 = state_21641__$1;
(statearr_21653_21679[(1)] = (11));

} else {
var statearr_21654_21680 = state_21641__$1;
(statearr_21654_21680[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (5))){
var inst_21618 = (state_21641[(7)]);
var state_21641__$1 = state_21641;
var statearr_21655_21681 = state_21641__$1;
(statearr_21655_21681[(2)] = inst_21618);

(statearr_21655_21681[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (10))){
var inst_21637 = (state_21641[(2)]);
var state_21641__$1 = state_21641;
var statearr_21656_21682 = state_21641__$1;
(statearr_21656_21682[(2)] = inst_21637);

(statearr_21656_21682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21642 === (8))){
var inst_21618 = (state_21641[(7)]);
var inst_21628 = cljs.core.next.call(null,inst_21618);
var inst_21618__$1 = inst_21628;
var state_21641__$1 = (function (){var statearr_21657 = state_21641;
(statearr_21657[(7)] = inst_21618__$1);

return statearr_21657;
})();
var statearr_21658_21683 = state_21641__$1;
(statearr_21658_21683[(2)] = null);

(statearr_21658_21683[(1)] = (2));


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
});})(c__20821__auto__))
;
return ((function (switch__20709__auto__,c__20821__auto__){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_21662 = [null,null,null,null,null,null,null,null];
(statearr_21662[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_21662[(1)] = (1));

return statearr_21662;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_21641){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_21641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e21663){if((e21663 instanceof Object)){
var ex__20713__auto__ = e21663;
var statearr_21664_21684 = state_21641;
(statearr_21664_21684[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21685 = state_21641;
state_21641 = G__21685;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_21641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_21641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__))
})();
var state__20823__auto__ = (function (){var statearr_21665 = f__20822__auto__.call(null);
(statearr_21665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_21665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__))
);

return c__20821__auto__;
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
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async21907 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21907 = (function (mult,ch,cs,meta21908){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21908 = meta21908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21909,meta21908__$1){
var self__ = this;
var _21909__$1 = this;
return (new cljs.core.async.t_cljs$core$async21907(self__.mult,self__.ch,self__.cs,meta21908__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21909){
var self__ = this;
var _21909__$1 = this;
return self__.meta21908;
});})(cs))
;

cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21907.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21907.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21908","meta21908",-326184501,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21907";

cljs.core.async.t_cljs$core$async21907.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async21907");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21907 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21907(mult__$1,ch__$1,cs__$1,meta21908){
return (new cljs.core.async.t_cljs$core$async21907(mult__$1,ch__$1,cs__$1,meta21908));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21907(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20821__auto___22128 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___22128,cs,m,dchan,dctr,done){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___22128,cs,m,dchan,dctr,done){
return (function (state_22040){
var state_val_22041 = (state_22040[(1)]);
if((state_val_22041 === (7))){
var inst_22036 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22042_22129 = state_22040__$1;
(statearr_22042_22129[(2)] = inst_22036);

(statearr_22042_22129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (20))){
var inst_21941 = (state_22040[(7)]);
var inst_21951 = cljs.core.first.call(null,inst_21941);
var inst_21952 = cljs.core.nth.call(null,inst_21951,(0),null);
var inst_21953 = cljs.core.nth.call(null,inst_21951,(1),null);
var state_22040__$1 = (function (){var statearr_22043 = state_22040;
(statearr_22043[(8)] = inst_21952);

return statearr_22043;
})();
if(cljs.core.truth_(inst_21953)){
var statearr_22044_22130 = state_22040__$1;
(statearr_22044_22130[(1)] = (22));

} else {
var statearr_22045_22131 = state_22040__$1;
(statearr_22045_22131[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (27))){
var inst_21912 = (state_22040[(9)]);
var inst_21983 = (state_22040[(10)]);
var inst_21981 = (state_22040[(11)]);
var inst_21988 = (state_22040[(12)]);
var inst_21988__$1 = cljs.core._nth.call(null,inst_21981,inst_21983);
var inst_21989 = cljs.core.async.put_BANG_.call(null,inst_21988__$1,inst_21912,done);
var state_22040__$1 = (function (){var statearr_22046 = state_22040;
(statearr_22046[(12)] = inst_21988__$1);

return statearr_22046;
})();
if(cljs.core.truth_(inst_21989)){
var statearr_22047_22132 = state_22040__$1;
(statearr_22047_22132[(1)] = (30));

} else {
var statearr_22048_22133 = state_22040__$1;
(statearr_22048_22133[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (1))){
var state_22040__$1 = state_22040;
var statearr_22049_22134 = state_22040__$1;
(statearr_22049_22134[(2)] = null);

(statearr_22049_22134[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (24))){
var inst_21941 = (state_22040[(7)]);
var inst_21958 = (state_22040[(2)]);
var inst_21959 = cljs.core.next.call(null,inst_21941);
var inst_21921 = inst_21959;
var inst_21922 = null;
var inst_21923 = (0);
var inst_21924 = (0);
var state_22040__$1 = (function (){var statearr_22050 = state_22040;
(statearr_22050[(13)] = inst_21924);

(statearr_22050[(14)] = inst_21923);

(statearr_22050[(15)] = inst_21958);

(statearr_22050[(16)] = inst_21921);

(statearr_22050[(17)] = inst_21922);

return statearr_22050;
})();
var statearr_22051_22135 = state_22040__$1;
(statearr_22051_22135[(2)] = null);

(statearr_22051_22135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (39))){
var state_22040__$1 = state_22040;
var statearr_22055_22136 = state_22040__$1;
(statearr_22055_22136[(2)] = null);

(statearr_22055_22136[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (4))){
var inst_21912 = (state_22040[(9)]);
var inst_21912__$1 = (state_22040[(2)]);
var inst_21913 = (inst_21912__$1 == null);
var state_22040__$1 = (function (){var statearr_22056 = state_22040;
(statearr_22056[(9)] = inst_21912__$1);

return statearr_22056;
})();
if(cljs.core.truth_(inst_21913)){
var statearr_22057_22137 = state_22040__$1;
(statearr_22057_22137[(1)] = (5));

} else {
var statearr_22058_22138 = state_22040__$1;
(statearr_22058_22138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (15))){
var inst_21924 = (state_22040[(13)]);
var inst_21923 = (state_22040[(14)]);
var inst_21921 = (state_22040[(16)]);
var inst_21922 = (state_22040[(17)]);
var inst_21937 = (state_22040[(2)]);
var inst_21938 = (inst_21924 + (1));
var tmp22052 = inst_21923;
var tmp22053 = inst_21921;
var tmp22054 = inst_21922;
var inst_21921__$1 = tmp22053;
var inst_21922__$1 = tmp22054;
var inst_21923__$1 = tmp22052;
var inst_21924__$1 = inst_21938;
var state_22040__$1 = (function (){var statearr_22059 = state_22040;
(statearr_22059[(13)] = inst_21924__$1);

(statearr_22059[(14)] = inst_21923__$1);

(statearr_22059[(16)] = inst_21921__$1);

(statearr_22059[(17)] = inst_21922__$1);

(statearr_22059[(18)] = inst_21937);

return statearr_22059;
})();
var statearr_22060_22139 = state_22040__$1;
(statearr_22060_22139[(2)] = null);

(statearr_22060_22139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (21))){
var inst_21962 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22064_22140 = state_22040__$1;
(statearr_22064_22140[(2)] = inst_21962);

(statearr_22064_22140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (31))){
var inst_21988 = (state_22040[(12)]);
var inst_21992 = done.call(null,null);
var inst_21993 = cljs.core.async.untap_STAR_.call(null,m,inst_21988);
var state_22040__$1 = (function (){var statearr_22065 = state_22040;
(statearr_22065[(19)] = inst_21992);

return statearr_22065;
})();
var statearr_22066_22141 = state_22040__$1;
(statearr_22066_22141[(2)] = inst_21993);

(statearr_22066_22141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (32))){
var inst_21983 = (state_22040[(10)]);
var inst_21981 = (state_22040[(11)]);
var inst_21982 = (state_22040[(20)]);
var inst_21980 = (state_22040[(21)]);
var inst_21995 = (state_22040[(2)]);
var inst_21996 = (inst_21983 + (1));
var tmp22061 = inst_21981;
var tmp22062 = inst_21982;
var tmp22063 = inst_21980;
var inst_21980__$1 = tmp22063;
var inst_21981__$1 = tmp22061;
var inst_21982__$1 = tmp22062;
var inst_21983__$1 = inst_21996;
var state_22040__$1 = (function (){var statearr_22067 = state_22040;
(statearr_22067[(10)] = inst_21983__$1);

(statearr_22067[(11)] = inst_21981__$1);

(statearr_22067[(20)] = inst_21982__$1);

(statearr_22067[(21)] = inst_21980__$1);

(statearr_22067[(22)] = inst_21995);

return statearr_22067;
})();
var statearr_22068_22142 = state_22040__$1;
(statearr_22068_22142[(2)] = null);

(statearr_22068_22142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (40))){
var inst_22008 = (state_22040[(23)]);
var inst_22012 = done.call(null,null);
var inst_22013 = cljs.core.async.untap_STAR_.call(null,m,inst_22008);
var state_22040__$1 = (function (){var statearr_22069 = state_22040;
(statearr_22069[(24)] = inst_22012);

return statearr_22069;
})();
var statearr_22070_22143 = state_22040__$1;
(statearr_22070_22143[(2)] = inst_22013);

(statearr_22070_22143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (33))){
var inst_21999 = (state_22040[(25)]);
var inst_22001 = cljs.core.chunked_seq_QMARK_.call(null,inst_21999);
var state_22040__$1 = state_22040;
if(inst_22001){
var statearr_22071_22144 = state_22040__$1;
(statearr_22071_22144[(1)] = (36));

} else {
var statearr_22072_22145 = state_22040__$1;
(statearr_22072_22145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (13))){
var inst_21931 = (state_22040[(26)]);
var inst_21934 = cljs.core.async.close_BANG_.call(null,inst_21931);
var state_22040__$1 = state_22040;
var statearr_22073_22146 = state_22040__$1;
(statearr_22073_22146[(2)] = inst_21934);

(statearr_22073_22146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (22))){
var inst_21952 = (state_22040[(8)]);
var inst_21955 = cljs.core.async.close_BANG_.call(null,inst_21952);
var state_22040__$1 = state_22040;
var statearr_22074_22147 = state_22040__$1;
(statearr_22074_22147[(2)] = inst_21955);

(statearr_22074_22147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (36))){
var inst_21999 = (state_22040[(25)]);
var inst_22003 = cljs.core.chunk_first.call(null,inst_21999);
var inst_22004 = cljs.core.chunk_rest.call(null,inst_21999);
var inst_22005 = cljs.core.count.call(null,inst_22003);
var inst_21980 = inst_22004;
var inst_21981 = inst_22003;
var inst_21982 = inst_22005;
var inst_21983 = (0);
var state_22040__$1 = (function (){var statearr_22075 = state_22040;
(statearr_22075[(10)] = inst_21983);

(statearr_22075[(11)] = inst_21981);

(statearr_22075[(20)] = inst_21982);

(statearr_22075[(21)] = inst_21980);

return statearr_22075;
})();
var statearr_22076_22148 = state_22040__$1;
(statearr_22076_22148[(2)] = null);

(statearr_22076_22148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (41))){
var inst_21999 = (state_22040[(25)]);
var inst_22015 = (state_22040[(2)]);
var inst_22016 = cljs.core.next.call(null,inst_21999);
var inst_21980 = inst_22016;
var inst_21981 = null;
var inst_21982 = (0);
var inst_21983 = (0);
var state_22040__$1 = (function (){var statearr_22077 = state_22040;
(statearr_22077[(10)] = inst_21983);

(statearr_22077[(27)] = inst_22015);

(statearr_22077[(11)] = inst_21981);

(statearr_22077[(20)] = inst_21982);

(statearr_22077[(21)] = inst_21980);

return statearr_22077;
})();
var statearr_22078_22149 = state_22040__$1;
(statearr_22078_22149[(2)] = null);

(statearr_22078_22149[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (43))){
var state_22040__$1 = state_22040;
var statearr_22079_22150 = state_22040__$1;
(statearr_22079_22150[(2)] = null);

(statearr_22079_22150[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (29))){
var inst_22024 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22080_22151 = state_22040__$1;
(statearr_22080_22151[(2)] = inst_22024);

(statearr_22080_22151[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (44))){
var inst_22033 = (state_22040[(2)]);
var state_22040__$1 = (function (){var statearr_22081 = state_22040;
(statearr_22081[(28)] = inst_22033);

return statearr_22081;
})();
var statearr_22082_22152 = state_22040__$1;
(statearr_22082_22152[(2)] = null);

(statearr_22082_22152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (6))){
var inst_21972 = (state_22040[(29)]);
var inst_21971 = cljs.core.deref.call(null,cs);
var inst_21972__$1 = cljs.core.keys.call(null,inst_21971);
var inst_21973 = cljs.core.count.call(null,inst_21972__$1);
var inst_21974 = cljs.core.reset_BANG_.call(null,dctr,inst_21973);
var inst_21979 = cljs.core.seq.call(null,inst_21972__$1);
var inst_21980 = inst_21979;
var inst_21981 = null;
var inst_21982 = (0);
var inst_21983 = (0);
var state_22040__$1 = (function (){var statearr_22083 = state_22040;
(statearr_22083[(10)] = inst_21983);

(statearr_22083[(11)] = inst_21981);

(statearr_22083[(20)] = inst_21982);

(statearr_22083[(21)] = inst_21980);

(statearr_22083[(30)] = inst_21974);

(statearr_22083[(29)] = inst_21972__$1);

return statearr_22083;
})();
var statearr_22084_22153 = state_22040__$1;
(statearr_22084_22153[(2)] = null);

(statearr_22084_22153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (28))){
var inst_21999 = (state_22040[(25)]);
var inst_21980 = (state_22040[(21)]);
var inst_21999__$1 = cljs.core.seq.call(null,inst_21980);
var state_22040__$1 = (function (){var statearr_22085 = state_22040;
(statearr_22085[(25)] = inst_21999__$1);

return statearr_22085;
})();
if(inst_21999__$1){
var statearr_22086_22154 = state_22040__$1;
(statearr_22086_22154[(1)] = (33));

} else {
var statearr_22087_22155 = state_22040__$1;
(statearr_22087_22155[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (25))){
var inst_21983 = (state_22040[(10)]);
var inst_21982 = (state_22040[(20)]);
var inst_21985 = (inst_21983 < inst_21982);
var inst_21986 = inst_21985;
var state_22040__$1 = state_22040;
if(cljs.core.truth_(inst_21986)){
var statearr_22088_22156 = state_22040__$1;
(statearr_22088_22156[(1)] = (27));

} else {
var statearr_22089_22157 = state_22040__$1;
(statearr_22089_22157[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (34))){
var state_22040__$1 = state_22040;
var statearr_22090_22158 = state_22040__$1;
(statearr_22090_22158[(2)] = null);

(statearr_22090_22158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (17))){
var state_22040__$1 = state_22040;
var statearr_22091_22159 = state_22040__$1;
(statearr_22091_22159[(2)] = null);

(statearr_22091_22159[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (3))){
var inst_22038 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22040__$1,inst_22038);
} else {
if((state_val_22041 === (12))){
var inst_21967 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22092_22160 = state_22040__$1;
(statearr_22092_22160[(2)] = inst_21967);

(statearr_22092_22160[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (2))){
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22040__$1,(4),ch);
} else {
if((state_val_22041 === (23))){
var state_22040__$1 = state_22040;
var statearr_22093_22161 = state_22040__$1;
(statearr_22093_22161[(2)] = null);

(statearr_22093_22161[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (35))){
var inst_22022 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22094_22162 = state_22040__$1;
(statearr_22094_22162[(2)] = inst_22022);

(statearr_22094_22162[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (19))){
var inst_21941 = (state_22040[(7)]);
var inst_21945 = cljs.core.chunk_first.call(null,inst_21941);
var inst_21946 = cljs.core.chunk_rest.call(null,inst_21941);
var inst_21947 = cljs.core.count.call(null,inst_21945);
var inst_21921 = inst_21946;
var inst_21922 = inst_21945;
var inst_21923 = inst_21947;
var inst_21924 = (0);
var state_22040__$1 = (function (){var statearr_22095 = state_22040;
(statearr_22095[(13)] = inst_21924);

(statearr_22095[(14)] = inst_21923);

(statearr_22095[(16)] = inst_21921);

(statearr_22095[(17)] = inst_21922);

return statearr_22095;
})();
var statearr_22096_22163 = state_22040__$1;
(statearr_22096_22163[(2)] = null);

(statearr_22096_22163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (11))){
var inst_21941 = (state_22040[(7)]);
var inst_21921 = (state_22040[(16)]);
var inst_21941__$1 = cljs.core.seq.call(null,inst_21921);
var state_22040__$1 = (function (){var statearr_22097 = state_22040;
(statearr_22097[(7)] = inst_21941__$1);

return statearr_22097;
})();
if(inst_21941__$1){
var statearr_22098_22164 = state_22040__$1;
(statearr_22098_22164[(1)] = (16));

} else {
var statearr_22099_22165 = state_22040__$1;
(statearr_22099_22165[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (9))){
var inst_21969 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22100_22166 = state_22040__$1;
(statearr_22100_22166[(2)] = inst_21969);

(statearr_22100_22166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (5))){
var inst_21919 = cljs.core.deref.call(null,cs);
var inst_21920 = cljs.core.seq.call(null,inst_21919);
var inst_21921 = inst_21920;
var inst_21922 = null;
var inst_21923 = (0);
var inst_21924 = (0);
var state_22040__$1 = (function (){var statearr_22101 = state_22040;
(statearr_22101[(13)] = inst_21924);

(statearr_22101[(14)] = inst_21923);

(statearr_22101[(16)] = inst_21921);

(statearr_22101[(17)] = inst_21922);

return statearr_22101;
})();
var statearr_22102_22167 = state_22040__$1;
(statearr_22102_22167[(2)] = null);

(statearr_22102_22167[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (14))){
var state_22040__$1 = state_22040;
var statearr_22103_22168 = state_22040__$1;
(statearr_22103_22168[(2)] = null);

(statearr_22103_22168[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (45))){
var inst_22030 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22104_22169 = state_22040__$1;
(statearr_22104_22169[(2)] = inst_22030);

(statearr_22104_22169[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (26))){
var inst_21972 = (state_22040[(29)]);
var inst_22026 = (state_22040[(2)]);
var inst_22027 = cljs.core.seq.call(null,inst_21972);
var state_22040__$1 = (function (){var statearr_22105 = state_22040;
(statearr_22105[(31)] = inst_22026);

return statearr_22105;
})();
if(inst_22027){
var statearr_22106_22170 = state_22040__$1;
(statearr_22106_22170[(1)] = (42));

} else {
var statearr_22107_22171 = state_22040__$1;
(statearr_22107_22171[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (16))){
var inst_21941 = (state_22040[(7)]);
var inst_21943 = cljs.core.chunked_seq_QMARK_.call(null,inst_21941);
var state_22040__$1 = state_22040;
if(inst_21943){
var statearr_22108_22172 = state_22040__$1;
(statearr_22108_22172[(1)] = (19));

} else {
var statearr_22109_22173 = state_22040__$1;
(statearr_22109_22173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (38))){
var inst_22019 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22110_22174 = state_22040__$1;
(statearr_22110_22174[(2)] = inst_22019);

(statearr_22110_22174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (30))){
var state_22040__$1 = state_22040;
var statearr_22111_22175 = state_22040__$1;
(statearr_22111_22175[(2)] = null);

(statearr_22111_22175[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (10))){
var inst_21924 = (state_22040[(13)]);
var inst_21922 = (state_22040[(17)]);
var inst_21930 = cljs.core._nth.call(null,inst_21922,inst_21924);
var inst_21931 = cljs.core.nth.call(null,inst_21930,(0),null);
var inst_21932 = cljs.core.nth.call(null,inst_21930,(1),null);
var state_22040__$1 = (function (){var statearr_22112 = state_22040;
(statearr_22112[(26)] = inst_21931);

return statearr_22112;
})();
if(cljs.core.truth_(inst_21932)){
var statearr_22113_22176 = state_22040__$1;
(statearr_22113_22176[(1)] = (13));

} else {
var statearr_22114_22177 = state_22040__$1;
(statearr_22114_22177[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (18))){
var inst_21965 = (state_22040[(2)]);
var state_22040__$1 = state_22040;
var statearr_22115_22178 = state_22040__$1;
(statearr_22115_22178[(2)] = inst_21965);

(statearr_22115_22178[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (42))){
var state_22040__$1 = state_22040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22040__$1,(45),dchan);
} else {
if((state_val_22041 === (37))){
var inst_21912 = (state_22040[(9)]);
var inst_21999 = (state_22040[(25)]);
var inst_22008 = (state_22040[(23)]);
var inst_22008__$1 = cljs.core.first.call(null,inst_21999);
var inst_22009 = cljs.core.async.put_BANG_.call(null,inst_22008__$1,inst_21912,done);
var state_22040__$1 = (function (){var statearr_22116 = state_22040;
(statearr_22116[(23)] = inst_22008__$1);

return statearr_22116;
})();
if(cljs.core.truth_(inst_22009)){
var statearr_22117_22179 = state_22040__$1;
(statearr_22117_22179[(1)] = (39));

} else {
var statearr_22118_22180 = state_22040__$1;
(statearr_22118_22180[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22041 === (8))){
var inst_21924 = (state_22040[(13)]);
var inst_21923 = (state_22040[(14)]);
var inst_21926 = (inst_21924 < inst_21923);
var inst_21927 = inst_21926;
var state_22040__$1 = state_22040;
if(cljs.core.truth_(inst_21927)){
var statearr_22119_22181 = state_22040__$1;
(statearr_22119_22181[(1)] = (10));

} else {
var statearr_22120_22182 = state_22040__$1;
(statearr_22120_22182[(1)] = (11));

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
});})(c__20821__auto___22128,cs,m,dchan,dctr,done))
;
return ((function (switch__20709__auto__,c__20821__auto___22128,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20710__auto__ = null;
var cljs$core$async$mult_$_state_machine__20710__auto____0 = (function (){
var statearr_22124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22124[(0)] = cljs$core$async$mult_$_state_machine__20710__auto__);

(statearr_22124[(1)] = (1));

return statearr_22124;
});
var cljs$core$async$mult_$_state_machine__20710__auto____1 = (function (state_22040){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_22040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e22125){if((e22125 instanceof Object)){
var ex__20713__auto__ = e22125;
var statearr_22126_22183 = state_22040;
(statearr_22126_22183[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22184 = state_22040;
state_22040 = G__22184;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20710__auto__ = function(state_22040){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20710__auto____1.call(this,state_22040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20710__auto____0;
cljs$core$async$mult_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20710__auto____1;
return cljs$core$async$mult_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___22128,cs,m,dchan,dctr,done))
})();
var state__20823__auto__ = (function (){var statearr_22127 = f__20822__auto__.call(null);
(statearr_22127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___22128);

return statearr_22127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___22128,cs,m,dchan,dctr,done))
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
var args22185 = [];
var len__17829__auto___22188 = arguments.length;
var i__17830__auto___22189 = (0);
while(true){
if((i__17830__auto___22189 < len__17829__auto___22188)){
args22185.push((arguments[i__17830__auto___22189]));

var G__22190 = (i__17830__auto___22189 + (1));
i__17830__auto___22189 = G__22190;
continue;
} else {
}
break;
}

var G__22187 = args22185.length;
switch (G__22187) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22185.length)].join('')));

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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
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
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___22202 = arguments.length;
var i__17830__auto___22203 = (0);
while(true){
if((i__17830__auto___22203 < len__17829__auto___22202)){
args__17836__auto__.push((arguments[i__17830__auto___22203]));

var G__22204 = (i__17830__auto___22203 + (1));
i__17830__auto___22203 = G__22204;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22196){
var map__22197 = p__22196;
var map__22197__$1 = ((((!((map__22197 == null)))?((((map__22197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22197):map__22197);
var opts = map__22197__$1;
var statearr_22199_22205 = state;
(statearr_22199_22205[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22197,map__22197__$1,opts){
return (function (val){
var statearr_22200_22206 = state;
(statearr_22200_22206[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22197,map__22197__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22201_22207 = state;
(statearr_22201_22207[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22192){
var G__22193 = cljs.core.first.call(null,seq22192);
var seq22192__$1 = cljs.core.next.call(null,seq22192);
var G__22194 = cljs.core.first.call(null,seq22192__$1);
var seq22192__$2 = cljs.core.next.call(null,seq22192__$1);
var G__22195 = cljs.core.first.call(null,seq22192__$2);
var seq22192__$3 = cljs.core.next.call(null,seq22192__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22193,G__22194,G__22195,seq22192__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22371 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22371 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22372){
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
this.meta22372 = meta22372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22373,meta22372__$1){
var self__ = this;
var _22373__$1 = this;
return (new cljs.core.async.t_cljs$core$async22371(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22372__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22373){
var self__ = this;
var _22373__$1 = this;
return self__.meta22372;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22371.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22372","meta22372",1933239449,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22371.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22371";

cljs.core.async.t_cljs$core$async22371.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22371");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22371 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22371(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22372){
return (new cljs.core.async.t_cljs$core$async22371(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22372));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22371(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20821__auto___22534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___22534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___22534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22471){
var state_val_22472 = (state_22471[(1)]);
if((state_val_22472 === (7))){
var inst_22389 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22473_22535 = state_22471__$1;
(statearr_22473_22535[(2)] = inst_22389);

(statearr_22473_22535[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (20))){
var inst_22401 = (state_22471[(7)]);
var state_22471__$1 = state_22471;
var statearr_22474_22536 = state_22471__$1;
(statearr_22474_22536[(2)] = inst_22401);

(statearr_22474_22536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (27))){
var state_22471__$1 = state_22471;
var statearr_22475_22537 = state_22471__$1;
(statearr_22475_22537[(2)] = null);

(statearr_22475_22537[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (1))){
var inst_22377 = (state_22471[(8)]);
var inst_22377__$1 = calc_state.call(null);
var inst_22379 = (inst_22377__$1 == null);
var inst_22380 = cljs.core.not.call(null,inst_22379);
var state_22471__$1 = (function (){var statearr_22476 = state_22471;
(statearr_22476[(8)] = inst_22377__$1);

return statearr_22476;
})();
if(inst_22380){
var statearr_22477_22538 = state_22471__$1;
(statearr_22477_22538[(1)] = (2));

} else {
var statearr_22478_22539 = state_22471__$1;
(statearr_22478_22539[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (24))){
var inst_22445 = (state_22471[(9)]);
var inst_22424 = (state_22471[(10)]);
var inst_22431 = (state_22471[(11)]);
var inst_22445__$1 = inst_22424.call(null,inst_22431);
var state_22471__$1 = (function (){var statearr_22479 = state_22471;
(statearr_22479[(9)] = inst_22445__$1);

return statearr_22479;
})();
if(cljs.core.truth_(inst_22445__$1)){
var statearr_22480_22540 = state_22471__$1;
(statearr_22480_22540[(1)] = (29));

} else {
var statearr_22481_22541 = state_22471__$1;
(statearr_22481_22541[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (4))){
var inst_22392 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22392)){
var statearr_22482_22542 = state_22471__$1;
(statearr_22482_22542[(1)] = (8));

} else {
var statearr_22483_22543 = state_22471__$1;
(statearr_22483_22543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (15))){
var inst_22418 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22418)){
var statearr_22484_22544 = state_22471__$1;
(statearr_22484_22544[(1)] = (19));

} else {
var statearr_22485_22545 = state_22471__$1;
(statearr_22485_22545[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (21))){
var inst_22423 = (state_22471[(12)]);
var inst_22423__$1 = (state_22471[(2)]);
var inst_22424 = cljs.core.get.call(null,inst_22423__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22425 = cljs.core.get.call(null,inst_22423__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22426 = cljs.core.get.call(null,inst_22423__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22471__$1 = (function (){var statearr_22486 = state_22471;
(statearr_22486[(12)] = inst_22423__$1);

(statearr_22486[(10)] = inst_22424);

(statearr_22486[(13)] = inst_22425);

return statearr_22486;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22471__$1,(22),inst_22426);
} else {
if((state_val_22472 === (31))){
var inst_22453 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22453)){
var statearr_22487_22546 = state_22471__$1;
(statearr_22487_22546[(1)] = (32));

} else {
var statearr_22488_22547 = state_22471__$1;
(statearr_22488_22547[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (32))){
var inst_22430 = (state_22471[(14)]);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22471__$1,(35),out,inst_22430);
} else {
if((state_val_22472 === (33))){
var inst_22423 = (state_22471[(12)]);
var inst_22401 = inst_22423;
var state_22471__$1 = (function (){var statearr_22489 = state_22471;
(statearr_22489[(7)] = inst_22401);

return statearr_22489;
})();
var statearr_22490_22548 = state_22471__$1;
(statearr_22490_22548[(2)] = null);

(statearr_22490_22548[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (13))){
var inst_22401 = (state_22471[(7)]);
var inst_22408 = inst_22401.cljs$lang$protocol_mask$partition0$;
var inst_22409 = (inst_22408 & (64));
var inst_22410 = inst_22401.cljs$core$ISeq$;
var inst_22411 = (inst_22409) || (inst_22410);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22411)){
var statearr_22491_22549 = state_22471__$1;
(statearr_22491_22549[(1)] = (16));

} else {
var statearr_22492_22550 = state_22471__$1;
(statearr_22492_22550[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (22))){
var inst_22430 = (state_22471[(14)]);
var inst_22431 = (state_22471[(11)]);
var inst_22429 = (state_22471[(2)]);
var inst_22430__$1 = cljs.core.nth.call(null,inst_22429,(0),null);
var inst_22431__$1 = cljs.core.nth.call(null,inst_22429,(1),null);
var inst_22432 = (inst_22430__$1 == null);
var inst_22433 = cljs.core._EQ_.call(null,inst_22431__$1,change);
var inst_22434 = (inst_22432) || (inst_22433);
var state_22471__$1 = (function (){var statearr_22493 = state_22471;
(statearr_22493[(14)] = inst_22430__$1);

(statearr_22493[(11)] = inst_22431__$1);

return statearr_22493;
})();
if(cljs.core.truth_(inst_22434)){
var statearr_22494_22551 = state_22471__$1;
(statearr_22494_22551[(1)] = (23));

} else {
var statearr_22495_22552 = state_22471__$1;
(statearr_22495_22552[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (36))){
var inst_22423 = (state_22471[(12)]);
var inst_22401 = inst_22423;
var state_22471__$1 = (function (){var statearr_22496 = state_22471;
(statearr_22496[(7)] = inst_22401);

return statearr_22496;
})();
var statearr_22497_22553 = state_22471__$1;
(statearr_22497_22553[(2)] = null);

(statearr_22497_22553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (29))){
var inst_22445 = (state_22471[(9)]);
var state_22471__$1 = state_22471;
var statearr_22498_22554 = state_22471__$1;
(statearr_22498_22554[(2)] = inst_22445);

(statearr_22498_22554[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (6))){
var state_22471__$1 = state_22471;
var statearr_22499_22555 = state_22471__$1;
(statearr_22499_22555[(2)] = false);

(statearr_22499_22555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (28))){
var inst_22441 = (state_22471[(2)]);
var inst_22442 = calc_state.call(null);
var inst_22401 = inst_22442;
var state_22471__$1 = (function (){var statearr_22500 = state_22471;
(statearr_22500[(7)] = inst_22401);

(statearr_22500[(15)] = inst_22441);

return statearr_22500;
})();
var statearr_22501_22556 = state_22471__$1;
(statearr_22501_22556[(2)] = null);

(statearr_22501_22556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (25))){
var inst_22467 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22502_22557 = state_22471__$1;
(statearr_22502_22557[(2)] = inst_22467);

(statearr_22502_22557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (34))){
var inst_22465 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22503_22558 = state_22471__$1;
(statearr_22503_22558[(2)] = inst_22465);

(statearr_22503_22558[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (17))){
var state_22471__$1 = state_22471;
var statearr_22504_22559 = state_22471__$1;
(statearr_22504_22559[(2)] = false);

(statearr_22504_22559[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (3))){
var state_22471__$1 = state_22471;
var statearr_22505_22560 = state_22471__$1;
(statearr_22505_22560[(2)] = false);

(statearr_22505_22560[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (12))){
var inst_22469 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22471__$1,inst_22469);
} else {
if((state_val_22472 === (2))){
var inst_22377 = (state_22471[(8)]);
var inst_22382 = inst_22377.cljs$lang$protocol_mask$partition0$;
var inst_22383 = (inst_22382 & (64));
var inst_22384 = inst_22377.cljs$core$ISeq$;
var inst_22385 = (inst_22383) || (inst_22384);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22385)){
var statearr_22506_22561 = state_22471__$1;
(statearr_22506_22561[(1)] = (5));

} else {
var statearr_22507_22562 = state_22471__$1;
(statearr_22507_22562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (23))){
var inst_22430 = (state_22471[(14)]);
var inst_22436 = (inst_22430 == null);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22436)){
var statearr_22508_22563 = state_22471__$1;
(statearr_22508_22563[(1)] = (26));

} else {
var statearr_22509_22564 = state_22471__$1;
(statearr_22509_22564[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (35))){
var inst_22456 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
if(cljs.core.truth_(inst_22456)){
var statearr_22510_22565 = state_22471__$1;
(statearr_22510_22565[(1)] = (36));

} else {
var statearr_22511_22566 = state_22471__$1;
(statearr_22511_22566[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (19))){
var inst_22401 = (state_22471[(7)]);
var inst_22420 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22401);
var state_22471__$1 = state_22471;
var statearr_22512_22567 = state_22471__$1;
(statearr_22512_22567[(2)] = inst_22420);

(statearr_22512_22567[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (11))){
var inst_22401 = (state_22471[(7)]);
var inst_22405 = (inst_22401 == null);
var inst_22406 = cljs.core.not.call(null,inst_22405);
var state_22471__$1 = state_22471;
if(inst_22406){
var statearr_22513_22568 = state_22471__$1;
(statearr_22513_22568[(1)] = (13));

} else {
var statearr_22514_22569 = state_22471__$1;
(statearr_22514_22569[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (9))){
var inst_22377 = (state_22471[(8)]);
var state_22471__$1 = state_22471;
var statearr_22515_22570 = state_22471__$1;
(statearr_22515_22570[(2)] = inst_22377);

(statearr_22515_22570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (5))){
var state_22471__$1 = state_22471;
var statearr_22516_22571 = state_22471__$1;
(statearr_22516_22571[(2)] = true);

(statearr_22516_22571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (14))){
var state_22471__$1 = state_22471;
var statearr_22517_22572 = state_22471__$1;
(statearr_22517_22572[(2)] = false);

(statearr_22517_22572[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (26))){
var inst_22431 = (state_22471[(11)]);
var inst_22438 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22431);
var state_22471__$1 = state_22471;
var statearr_22518_22573 = state_22471__$1;
(statearr_22518_22573[(2)] = inst_22438);

(statearr_22518_22573[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (16))){
var state_22471__$1 = state_22471;
var statearr_22519_22574 = state_22471__$1;
(statearr_22519_22574[(2)] = true);

(statearr_22519_22574[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (38))){
var inst_22461 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22520_22575 = state_22471__$1;
(statearr_22520_22575[(2)] = inst_22461);

(statearr_22520_22575[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (30))){
var inst_22424 = (state_22471[(10)]);
var inst_22431 = (state_22471[(11)]);
var inst_22425 = (state_22471[(13)]);
var inst_22448 = cljs.core.empty_QMARK_.call(null,inst_22424);
var inst_22449 = inst_22425.call(null,inst_22431);
var inst_22450 = cljs.core.not.call(null,inst_22449);
var inst_22451 = (inst_22448) && (inst_22450);
var state_22471__$1 = state_22471;
var statearr_22521_22576 = state_22471__$1;
(statearr_22521_22576[(2)] = inst_22451);

(statearr_22521_22576[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (10))){
var inst_22377 = (state_22471[(8)]);
var inst_22397 = (state_22471[(2)]);
var inst_22398 = cljs.core.get.call(null,inst_22397,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22399 = cljs.core.get.call(null,inst_22397,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22400 = cljs.core.get.call(null,inst_22397,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22401 = inst_22377;
var state_22471__$1 = (function (){var statearr_22522 = state_22471;
(statearr_22522[(7)] = inst_22401);

(statearr_22522[(16)] = inst_22400);

(statearr_22522[(17)] = inst_22398);

(statearr_22522[(18)] = inst_22399);

return statearr_22522;
})();
var statearr_22523_22577 = state_22471__$1;
(statearr_22523_22577[(2)] = null);

(statearr_22523_22577[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (18))){
var inst_22415 = (state_22471[(2)]);
var state_22471__$1 = state_22471;
var statearr_22524_22578 = state_22471__$1;
(statearr_22524_22578[(2)] = inst_22415);

(statearr_22524_22578[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (37))){
var state_22471__$1 = state_22471;
var statearr_22525_22579 = state_22471__$1;
(statearr_22525_22579[(2)] = null);

(statearr_22525_22579[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22472 === (8))){
var inst_22377 = (state_22471[(8)]);
var inst_22394 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22377);
var state_22471__$1 = state_22471;
var statearr_22526_22580 = state_22471__$1;
(statearr_22526_22580[(2)] = inst_22394);

(statearr_22526_22580[(1)] = (10));


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
});})(c__20821__auto___22534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20709__auto__,c__20821__auto___22534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20710__auto__ = null;
var cljs$core$async$mix_$_state_machine__20710__auto____0 = (function (){
var statearr_22530 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22530[(0)] = cljs$core$async$mix_$_state_machine__20710__auto__);

(statearr_22530[(1)] = (1));

return statearr_22530;
});
var cljs$core$async$mix_$_state_machine__20710__auto____1 = (function (state_22471){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_22471);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e22531){if((e22531 instanceof Object)){
var ex__20713__auto__ = e22531;
var statearr_22532_22581 = state_22471;
(statearr_22532_22581[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22582 = state_22471;
state_22471 = G__22582;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20710__auto__ = function(state_22471){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20710__auto____1.call(this,state_22471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20710__auto____0;
cljs$core$async$mix_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20710__auto____1;
return cljs$core$async$mix_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___22534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20823__auto__ = (function (){var statearr_22533 = f__20822__auto__.call(null);
(statearr_22533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___22534);

return statearr_22533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___22534,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22583 = [];
var len__17829__auto___22586 = arguments.length;
var i__17830__auto___22587 = (0);
while(true){
if((i__17830__auto___22587 < len__17829__auto___22586)){
args22583.push((arguments[i__17830__auto___22587]));

var G__22588 = (i__17830__auto___22587 + (1));
i__17830__auto___22587 = G__22588;
continue;
} else {
}
break;
}

var G__22585 = args22583.length;
switch (G__22585) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22583.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
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
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
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
var args22591 = [];
var len__17829__auto___22716 = arguments.length;
var i__17830__auto___22717 = (0);
while(true){
if((i__17830__auto___22717 < len__17829__auto___22716)){
args22591.push((arguments[i__17830__auto___22717]));

var G__22718 = (i__17830__auto___22717 + (1));
i__17830__auto___22717 = G__22718;
continue;
} else {
}
break;
}

var G__22593 = args22591.length;
switch (G__22593) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22591.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__22590_SHARP_){
if(cljs.core.truth_(p1__22590_SHARP_.call(null,topic))){
return p1__22590_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22590_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22594 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22594 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22595){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22595 = meta22595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22596,meta22595__$1){
var self__ = this;
var _22596__$1 = this;
return (new cljs.core.async.t_cljs$core$async22594(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22595__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22596){
var self__ = this;
var _22596__$1 = this;
return self__.meta22595;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22595","meta22595",1510473091,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22594.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22594.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22594";

cljs.core.async.t_cljs$core$async22594.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22594");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22594 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22595){
return (new cljs.core.async.t_cljs$core$async22594(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22595));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22594(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20821__auto___22720 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___22720,mults,ensure_mult,p){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___22720,mults,ensure_mult,p){
return (function (state_22668){
var state_val_22669 = (state_22668[(1)]);
if((state_val_22669 === (7))){
var inst_22664 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22670_22721 = state_22668__$1;
(statearr_22670_22721[(2)] = inst_22664);

(statearr_22670_22721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (20))){
var state_22668__$1 = state_22668;
var statearr_22671_22722 = state_22668__$1;
(statearr_22671_22722[(2)] = null);

(statearr_22671_22722[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (1))){
var state_22668__$1 = state_22668;
var statearr_22672_22723 = state_22668__$1;
(statearr_22672_22723[(2)] = null);

(statearr_22672_22723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (24))){
var inst_22647 = (state_22668[(7)]);
var inst_22656 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22647);
var state_22668__$1 = state_22668;
var statearr_22673_22724 = state_22668__$1;
(statearr_22673_22724[(2)] = inst_22656);

(statearr_22673_22724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (4))){
var inst_22599 = (state_22668[(8)]);
var inst_22599__$1 = (state_22668[(2)]);
var inst_22600 = (inst_22599__$1 == null);
var state_22668__$1 = (function (){var statearr_22674 = state_22668;
(statearr_22674[(8)] = inst_22599__$1);

return statearr_22674;
})();
if(cljs.core.truth_(inst_22600)){
var statearr_22675_22725 = state_22668__$1;
(statearr_22675_22725[(1)] = (5));

} else {
var statearr_22676_22726 = state_22668__$1;
(statearr_22676_22726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (15))){
var inst_22641 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22677_22727 = state_22668__$1;
(statearr_22677_22727[(2)] = inst_22641);

(statearr_22677_22727[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (21))){
var inst_22661 = (state_22668[(2)]);
var state_22668__$1 = (function (){var statearr_22678 = state_22668;
(statearr_22678[(9)] = inst_22661);

return statearr_22678;
})();
var statearr_22679_22728 = state_22668__$1;
(statearr_22679_22728[(2)] = null);

(statearr_22679_22728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (13))){
var inst_22623 = (state_22668[(10)]);
var inst_22625 = cljs.core.chunked_seq_QMARK_.call(null,inst_22623);
var state_22668__$1 = state_22668;
if(inst_22625){
var statearr_22680_22729 = state_22668__$1;
(statearr_22680_22729[(1)] = (16));

} else {
var statearr_22681_22730 = state_22668__$1;
(statearr_22681_22730[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (22))){
var inst_22653 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
if(cljs.core.truth_(inst_22653)){
var statearr_22682_22731 = state_22668__$1;
(statearr_22682_22731[(1)] = (23));

} else {
var statearr_22683_22732 = state_22668__$1;
(statearr_22683_22732[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (6))){
var inst_22599 = (state_22668[(8)]);
var inst_22647 = (state_22668[(7)]);
var inst_22649 = (state_22668[(11)]);
var inst_22647__$1 = topic_fn.call(null,inst_22599);
var inst_22648 = cljs.core.deref.call(null,mults);
var inst_22649__$1 = cljs.core.get.call(null,inst_22648,inst_22647__$1);
var state_22668__$1 = (function (){var statearr_22684 = state_22668;
(statearr_22684[(7)] = inst_22647__$1);

(statearr_22684[(11)] = inst_22649__$1);

return statearr_22684;
})();
if(cljs.core.truth_(inst_22649__$1)){
var statearr_22685_22733 = state_22668__$1;
(statearr_22685_22733[(1)] = (19));

} else {
var statearr_22686_22734 = state_22668__$1;
(statearr_22686_22734[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (25))){
var inst_22658 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22687_22735 = state_22668__$1;
(statearr_22687_22735[(2)] = inst_22658);

(statearr_22687_22735[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (17))){
var inst_22623 = (state_22668[(10)]);
var inst_22632 = cljs.core.first.call(null,inst_22623);
var inst_22633 = cljs.core.async.muxch_STAR_.call(null,inst_22632);
var inst_22634 = cljs.core.async.close_BANG_.call(null,inst_22633);
var inst_22635 = cljs.core.next.call(null,inst_22623);
var inst_22609 = inst_22635;
var inst_22610 = null;
var inst_22611 = (0);
var inst_22612 = (0);
var state_22668__$1 = (function (){var statearr_22688 = state_22668;
(statearr_22688[(12)] = inst_22611);

(statearr_22688[(13)] = inst_22634);

(statearr_22688[(14)] = inst_22610);

(statearr_22688[(15)] = inst_22612);

(statearr_22688[(16)] = inst_22609);

return statearr_22688;
})();
var statearr_22689_22736 = state_22668__$1;
(statearr_22689_22736[(2)] = null);

(statearr_22689_22736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (3))){
var inst_22666 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22668__$1,inst_22666);
} else {
if((state_val_22669 === (12))){
var inst_22643 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22690_22737 = state_22668__$1;
(statearr_22690_22737[(2)] = inst_22643);

(statearr_22690_22737[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (2))){
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22668__$1,(4),ch);
} else {
if((state_val_22669 === (23))){
var state_22668__$1 = state_22668;
var statearr_22691_22738 = state_22668__$1;
(statearr_22691_22738[(2)] = null);

(statearr_22691_22738[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (19))){
var inst_22599 = (state_22668[(8)]);
var inst_22649 = (state_22668[(11)]);
var inst_22651 = cljs.core.async.muxch_STAR_.call(null,inst_22649);
var state_22668__$1 = state_22668;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22668__$1,(22),inst_22651,inst_22599);
} else {
if((state_val_22669 === (11))){
var inst_22609 = (state_22668[(16)]);
var inst_22623 = (state_22668[(10)]);
var inst_22623__$1 = cljs.core.seq.call(null,inst_22609);
var state_22668__$1 = (function (){var statearr_22692 = state_22668;
(statearr_22692[(10)] = inst_22623__$1);

return statearr_22692;
})();
if(inst_22623__$1){
var statearr_22693_22739 = state_22668__$1;
(statearr_22693_22739[(1)] = (13));

} else {
var statearr_22694_22740 = state_22668__$1;
(statearr_22694_22740[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (9))){
var inst_22645 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22695_22741 = state_22668__$1;
(statearr_22695_22741[(2)] = inst_22645);

(statearr_22695_22741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (5))){
var inst_22606 = cljs.core.deref.call(null,mults);
var inst_22607 = cljs.core.vals.call(null,inst_22606);
var inst_22608 = cljs.core.seq.call(null,inst_22607);
var inst_22609 = inst_22608;
var inst_22610 = null;
var inst_22611 = (0);
var inst_22612 = (0);
var state_22668__$1 = (function (){var statearr_22696 = state_22668;
(statearr_22696[(12)] = inst_22611);

(statearr_22696[(14)] = inst_22610);

(statearr_22696[(15)] = inst_22612);

(statearr_22696[(16)] = inst_22609);

return statearr_22696;
})();
var statearr_22697_22742 = state_22668__$1;
(statearr_22697_22742[(2)] = null);

(statearr_22697_22742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (14))){
var state_22668__$1 = state_22668;
var statearr_22701_22743 = state_22668__$1;
(statearr_22701_22743[(2)] = null);

(statearr_22701_22743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (16))){
var inst_22623 = (state_22668[(10)]);
var inst_22627 = cljs.core.chunk_first.call(null,inst_22623);
var inst_22628 = cljs.core.chunk_rest.call(null,inst_22623);
var inst_22629 = cljs.core.count.call(null,inst_22627);
var inst_22609 = inst_22628;
var inst_22610 = inst_22627;
var inst_22611 = inst_22629;
var inst_22612 = (0);
var state_22668__$1 = (function (){var statearr_22702 = state_22668;
(statearr_22702[(12)] = inst_22611);

(statearr_22702[(14)] = inst_22610);

(statearr_22702[(15)] = inst_22612);

(statearr_22702[(16)] = inst_22609);

return statearr_22702;
})();
var statearr_22703_22744 = state_22668__$1;
(statearr_22703_22744[(2)] = null);

(statearr_22703_22744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (10))){
var inst_22611 = (state_22668[(12)]);
var inst_22610 = (state_22668[(14)]);
var inst_22612 = (state_22668[(15)]);
var inst_22609 = (state_22668[(16)]);
var inst_22617 = cljs.core._nth.call(null,inst_22610,inst_22612);
var inst_22618 = cljs.core.async.muxch_STAR_.call(null,inst_22617);
var inst_22619 = cljs.core.async.close_BANG_.call(null,inst_22618);
var inst_22620 = (inst_22612 + (1));
var tmp22698 = inst_22611;
var tmp22699 = inst_22610;
var tmp22700 = inst_22609;
var inst_22609__$1 = tmp22700;
var inst_22610__$1 = tmp22699;
var inst_22611__$1 = tmp22698;
var inst_22612__$1 = inst_22620;
var state_22668__$1 = (function (){var statearr_22704 = state_22668;
(statearr_22704[(12)] = inst_22611__$1);

(statearr_22704[(14)] = inst_22610__$1);

(statearr_22704[(15)] = inst_22612__$1);

(statearr_22704[(16)] = inst_22609__$1);

(statearr_22704[(17)] = inst_22619);

return statearr_22704;
})();
var statearr_22705_22745 = state_22668__$1;
(statearr_22705_22745[(2)] = null);

(statearr_22705_22745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (18))){
var inst_22638 = (state_22668[(2)]);
var state_22668__$1 = state_22668;
var statearr_22706_22746 = state_22668__$1;
(statearr_22706_22746[(2)] = inst_22638);

(statearr_22706_22746[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22669 === (8))){
var inst_22611 = (state_22668[(12)]);
var inst_22612 = (state_22668[(15)]);
var inst_22614 = (inst_22612 < inst_22611);
var inst_22615 = inst_22614;
var state_22668__$1 = state_22668;
if(cljs.core.truth_(inst_22615)){
var statearr_22707_22747 = state_22668__$1;
(statearr_22707_22747[(1)] = (10));

} else {
var statearr_22708_22748 = state_22668__$1;
(statearr_22708_22748[(1)] = (11));

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
});})(c__20821__auto___22720,mults,ensure_mult,p))
;
return ((function (switch__20709__auto__,c__20821__auto___22720,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_22712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22712[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_22712[(1)] = (1));

return statearr_22712;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_22668){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_22668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e22713){if((e22713 instanceof Object)){
var ex__20713__auto__ = e22713;
var statearr_22714_22749 = state_22668;
(statearr_22714_22749[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22750 = state_22668;
state_22668 = G__22750;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_22668){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_22668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___22720,mults,ensure_mult,p))
})();
var state__20823__auto__ = (function (){var statearr_22715 = f__20822__auto__.call(null);
(statearr_22715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___22720);

return statearr_22715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___22720,mults,ensure_mult,p))
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
var args22751 = [];
var len__17829__auto___22754 = arguments.length;
var i__17830__auto___22755 = (0);
while(true){
if((i__17830__auto___22755 < len__17829__auto___22754)){
args22751.push((arguments[i__17830__auto___22755]));

var G__22756 = (i__17830__auto___22755 + (1));
i__17830__auto___22755 = G__22756;
continue;
} else {
}
break;
}

var G__22753 = args22751.length;
switch (G__22753) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22751.length)].join('')));

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
var args22758 = [];
var len__17829__auto___22761 = arguments.length;
var i__17830__auto___22762 = (0);
while(true){
if((i__17830__auto___22762 < len__17829__auto___22761)){
args22758.push((arguments[i__17830__auto___22762]));

var G__22763 = (i__17830__auto___22762 + (1));
i__17830__auto___22762 = G__22763;
continue;
} else {
}
break;
}

var G__22760 = args22758.length;
switch (G__22760) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22758.length)].join('')));

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
var args22765 = [];
var len__17829__auto___22836 = arguments.length;
var i__17830__auto___22837 = (0);
while(true){
if((i__17830__auto___22837 < len__17829__auto___22836)){
args22765.push((arguments[i__17830__auto___22837]));

var G__22838 = (i__17830__auto___22837 + (1));
i__17830__auto___22837 = G__22838;
continue;
} else {
}
break;
}

var G__22767 = args22765.length;
switch (G__22767) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22765.length)].join('')));

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
var c__20821__auto___22840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___22840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___22840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22806){
var state_val_22807 = (state_22806[(1)]);
if((state_val_22807 === (7))){
var state_22806__$1 = state_22806;
var statearr_22808_22841 = state_22806__$1;
(statearr_22808_22841[(2)] = null);

(statearr_22808_22841[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (1))){
var state_22806__$1 = state_22806;
var statearr_22809_22842 = state_22806__$1;
(statearr_22809_22842[(2)] = null);

(statearr_22809_22842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (4))){
var inst_22770 = (state_22806[(7)]);
var inst_22772 = (inst_22770 < cnt);
var state_22806__$1 = state_22806;
if(cljs.core.truth_(inst_22772)){
var statearr_22810_22843 = state_22806__$1;
(statearr_22810_22843[(1)] = (6));

} else {
var statearr_22811_22844 = state_22806__$1;
(statearr_22811_22844[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (15))){
var inst_22802 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22812_22845 = state_22806__$1;
(statearr_22812_22845[(2)] = inst_22802);

(statearr_22812_22845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (13))){
var inst_22795 = cljs.core.async.close_BANG_.call(null,out);
var state_22806__$1 = state_22806;
var statearr_22813_22846 = state_22806__$1;
(statearr_22813_22846[(2)] = inst_22795);

(statearr_22813_22846[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (6))){
var state_22806__$1 = state_22806;
var statearr_22814_22847 = state_22806__$1;
(statearr_22814_22847[(2)] = null);

(statearr_22814_22847[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (3))){
var inst_22804 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22806__$1,inst_22804);
} else {
if((state_val_22807 === (12))){
var inst_22792 = (state_22806[(8)]);
var inst_22792__$1 = (state_22806[(2)]);
var inst_22793 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22792__$1);
var state_22806__$1 = (function (){var statearr_22815 = state_22806;
(statearr_22815[(8)] = inst_22792__$1);

return statearr_22815;
})();
if(cljs.core.truth_(inst_22793)){
var statearr_22816_22848 = state_22806__$1;
(statearr_22816_22848[(1)] = (13));

} else {
var statearr_22817_22849 = state_22806__$1;
(statearr_22817_22849[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (2))){
var inst_22769 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22770 = (0);
var state_22806__$1 = (function (){var statearr_22818 = state_22806;
(statearr_22818[(7)] = inst_22770);

(statearr_22818[(9)] = inst_22769);

return statearr_22818;
})();
var statearr_22819_22850 = state_22806__$1;
(statearr_22819_22850[(2)] = null);

(statearr_22819_22850[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (11))){
var inst_22770 = (state_22806[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22806,(10),Object,null,(9));
var inst_22779 = chs__$1.call(null,inst_22770);
var inst_22780 = done.call(null,inst_22770);
var inst_22781 = cljs.core.async.take_BANG_.call(null,inst_22779,inst_22780);
var state_22806__$1 = state_22806;
var statearr_22820_22851 = state_22806__$1;
(statearr_22820_22851[(2)] = inst_22781);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22806__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (9))){
var inst_22770 = (state_22806[(7)]);
var inst_22783 = (state_22806[(2)]);
var inst_22784 = (inst_22770 + (1));
var inst_22770__$1 = inst_22784;
var state_22806__$1 = (function (){var statearr_22821 = state_22806;
(statearr_22821[(10)] = inst_22783);

(statearr_22821[(7)] = inst_22770__$1);

return statearr_22821;
})();
var statearr_22822_22852 = state_22806__$1;
(statearr_22822_22852[(2)] = null);

(statearr_22822_22852[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (5))){
var inst_22790 = (state_22806[(2)]);
var state_22806__$1 = (function (){var statearr_22823 = state_22806;
(statearr_22823[(11)] = inst_22790);

return statearr_22823;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22806__$1,(12),dchan);
} else {
if((state_val_22807 === (14))){
var inst_22792 = (state_22806[(8)]);
var inst_22797 = cljs.core.apply.call(null,f,inst_22792);
var state_22806__$1 = state_22806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22806__$1,(16),out,inst_22797);
} else {
if((state_val_22807 === (16))){
var inst_22799 = (state_22806[(2)]);
var state_22806__$1 = (function (){var statearr_22824 = state_22806;
(statearr_22824[(12)] = inst_22799);

return statearr_22824;
})();
var statearr_22825_22853 = state_22806__$1;
(statearr_22825_22853[(2)] = null);

(statearr_22825_22853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (10))){
var inst_22774 = (state_22806[(2)]);
var inst_22775 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22806__$1 = (function (){var statearr_22826 = state_22806;
(statearr_22826[(13)] = inst_22774);

return statearr_22826;
})();
var statearr_22827_22854 = state_22806__$1;
(statearr_22827_22854[(2)] = inst_22775);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22806__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22807 === (8))){
var inst_22788 = (state_22806[(2)]);
var state_22806__$1 = state_22806;
var statearr_22828_22855 = state_22806__$1;
(statearr_22828_22855[(2)] = inst_22788);

(statearr_22828_22855[(1)] = (5));


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
});})(c__20821__auto___22840,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20709__auto__,c__20821__auto___22840,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_22832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22832[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_22832[(1)] = (1));

return statearr_22832;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_22806){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_22806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e22833){if((e22833 instanceof Object)){
var ex__20713__auto__ = e22833;
var statearr_22834_22856 = state_22806;
(statearr_22834_22856[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22857 = state_22806;
state_22806 = G__22857;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_22806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_22806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___22840,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20823__auto__ = (function (){var statearr_22835 = f__20822__auto__.call(null);
(statearr_22835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___22840);

return statearr_22835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___22840,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22859 = [];
var len__17829__auto___22915 = arguments.length;
var i__17830__auto___22916 = (0);
while(true){
if((i__17830__auto___22916 < len__17829__auto___22915)){
args22859.push((arguments[i__17830__auto___22916]));

var G__22917 = (i__17830__auto___22916 + (1));
i__17830__auto___22916 = G__22917;
continue;
} else {
}
break;
}

var G__22861 = args22859.length;
switch (G__22861) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22859.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20821__auto___22919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___22919,out){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___22919,out){
return (function (state_22891){
var state_val_22892 = (state_22891[(1)]);
if((state_val_22892 === (7))){
var inst_22870 = (state_22891[(7)]);
var inst_22871 = (state_22891[(8)]);
var inst_22870__$1 = (state_22891[(2)]);
var inst_22871__$1 = cljs.core.nth.call(null,inst_22870__$1,(0),null);
var inst_22872 = cljs.core.nth.call(null,inst_22870__$1,(1),null);
var inst_22873 = (inst_22871__$1 == null);
var state_22891__$1 = (function (){var statearr_22893 = state_22891;
(statearr_22893[(7)] = inst_22870__$1);

(statearr_22893[(8)] = inst_22871__$1);

(statearr_22893[(9)] = inst_22872);

return statearr_22893;
})();
if(cljs.core.truth_(inst_22873)){
var statearr_22894_22920 = state_22891__$1;
(statearr_22894_22920[(1)] = (8));

} else {
var statearr_22895_22921 = state_22891__$1;
(statearr_22895_22921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (1))){
var inst_22862 = cljs.core.vec.call(null,chs);
var inst_22863 = inst_22862;
var state_22891__$1 = (function (){var statearr_22896 = state_22891;
(statearr_22896[(10)] = inst_22863);

return statearr_22896;
})();
var statearr_22897_22922 = state_22891__$1;
(statearr_22897_22922[(2)] = null);

(statearr_22897_22922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (4))){
var inst_22863 = (state_22891[(10)]);
var state_22891__$1 = state_22891;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22891__$1,(7),inst_22863);
} else {
if((state_val_22892 === (6))){
var inst_22887 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22898_22923 = state_22891__$1;
(statearr_22898_22923[(2)] = inst_22887);

(statearr_22898_22923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (3))){
var inst_22889 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22891__$1,inst_22889);
} else {
if((state_val_22892 === (2))){
var inst_22863 = (state_22891[(10)]);
var inst_22865 = cljs.core.count.call(null,inst_22863);
var inst_22866 = (inst_22865 > (0));
var state_22891__$1 = state_22891;
if(cljs.core.truth_(inst_22866)){
var statearr_22900_22924 = state_22891__$1;
(statearr_22900_22924[(1)] = (4));

} else {
var statearr_22901_22925 = state_22891__$1;
(statearr_22901_22925[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (11))){
var inst_22863 = (state_22891[(10)]);
var inst_22880 = (state_22891[(2)]);
var tmp22899 = inst_22863;
var inst_22863__$1 = tmp22899;
var state_22891__$1 = (function (){var statearr_22902 = state_22891;
(statearr_22902[(11)] = inst_22880);

(statearr_22902[(10)] = inst_22863__$1);

return statearr_22902;
})();
var statearr_22903_22926 = state_22891__$1;
(statearr_22903_22926[(2)] = null);

(statearr_22903_22926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (9))){
var inst_22871 = (state_22891[(8)]);
var state_22891__$1 = state_22891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22891__$1,(11),out,inst_22871);
} else {
if((state_val_22892 === (5))){
var inst_22885 = cljs.core.async.close_BANG_.call(null,out);
var state_22891__$1 = state_22891;
var statearr_22904_22927 = state_22891__$1;
(statearr_22904_22927[(2)] = inst_22885);

(statearr_22904_22927[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (10))){
var inst_22883 = (state_22891[(2)]);
var state_22891__$1 = state_22891;
var statearr_22905_22928 = state_22891__$1;
(statearr_22905_22928[(2)] = inst_22883);

(statearr_22905_22928[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22892 === (8))){
var inst_22870 = (state_22891[(7)]);
var inst_22871 = (state_22891[(8)]);
var inst_22872 = (state_22891[(9)]);
var inst_22863 = (state_22891[(10)]);
var inst_22875 = (function (){var cs = inst_22863;
var vec__22868 = inst_22870;
var v = inst_22871;
var c = inst_22872;
return ((function (cs,vec__22868,v,c,inst_22870,inst_22871,inst_22872,inst_22863,state_val_22892,c__20821__auto___22919,out){
return (function (p1__22858_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22858_SHARP_);
});
;})(cs,vec__22868,v,c,inst_22870,inst_22871,inst_22872,inst_22863,state_val_22892,c__20821__auto___22919,out))
})();
var inst_22876 = cljs.core.filterv.call(null,inst_22875,inst_22863);
var inst_22863__$1 = inst_22876;
var state_22891__$1 = (function (){var statearr_22906 = state_22891;
(statearr_22906[(10)] = inst_22863__$1);

return statearr_22906;
})();
var statearr_22907_22929 = state_22891__$1;
(statearr_22907_22929[(2)] = null);

(statearr_22907_22929[(1)] = (2));


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
});})(c__20821__auto___22919,out))
;
return ((function (switch__20709__auto__,c__20821__auto___22919,out){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_22911 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22911[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_22911[(1)] = (1));

return statearr_22911;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_22891){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_22891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e22912){if((e22912 instanceof Object)){
var ex__20713__auto__ = e22912;
var statearr_22913_22930 = state_22891;
(statearr_22913_22930[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22931 = state_22891;
state_22891 = G__22931;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_22891){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_22891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___22919,out))
})();
var state__20823__auto__ = (function (){var statearr_22914 = f__20822__auto__.call(null);
(statearr_22914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___22919);

return statearr_22914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___22919,out))
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
var args22932 = [];
var len__17829__auto___22981 = arguments.length;
var i__17830__auto___22982 = (0);
while(true){
if((i__17830__auto___22982 < len__17829__auto___22981)){
args22932.push((arguments[i__17830__auto___22982]));

var G__22983 = (i__17830__auto___22982 + (1));
i__17830__auto___22982 = G__22983;
continue;
} else {
}
break;
}

var G__22934 = args22932.length;
switch (G__22934) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22932.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20821__auto___22985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___22985,out){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___22985,out){
return (function (state_22958){
var state_val_22959 = (state_22958[(1)]);
if((state_val_22959 === (7))){
var inst_22940 = (state_22958[(7)]);
var inst_22940__$1 = (state_22958[(2)]);
var inst_22941 = (inst_22940__$1 == null);
var inst_22942 = cljs.core.not.call(null,inst_22941);
var state_22958__$1 = (function (){var statearr_22960 = state_22958;
(statearr_22960[(7)] = inst_22940__$1);

return statearr_22960;
})();
if(inst_22942){
var statearr_22961_22986 = state_22958__$1;
(statearr_22961_22986[(1)] = (8));

} else {
var statearr_22962_22987 = state_22958__$1;
(statearr_22962_22987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (1))){
var inst_22935 = (0);
var state_22958__$1 = (function (){var statearr_22963 = state_22958;
(statearr_22963[(8)] = inst_22935);

return statearr_22963;
})();
var statearr_22964_22988 = state_22958__$1;
(statearr_22964_22988[(2)] = null);

(statearr_22964_22988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (4))){
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22958__$1,(7),ch);
} else {
if((state_val_22959 === (6))){
var inst_22953 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22965_22989 = state_22958__$1;
(statearr_22965_22989[(2)] = inst_22953);

(statearr_22965_22989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (3))){
var inst_22955 = (state_22958[(2)]);
var inst_22956 = cljs.core.async.close_BANG_.call(null,out);
var state_22958__$1 = (function (){var statearr_22966 = state_22958;
(statearr_22966[(9)] = inst_22955);

return statearr_22966;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22958__$1,inst_22956);
} else {
if((state_val_22959 === (2))){
var inst_22935 = (state_22958[(8)]);
var inst_22937 = (inst_22935 < n);
var state_22958__$1 = state_22958;
if(cljs.core.truth_(inst_22937)){
var statearr_22967_22990 = state_22958__$1;
(statearr_22967_22990[(1)] = (4));

} else {
var statearr_22968_22991 = state_22958__$1;
(statearr_22968_22991[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (11))){
var inst_22935 = (state_22958[(8)]);
var inst_22945 = (state_22958[(2)]);
var inst_22946 = (inst_22935 + (1));
var inst_22935__$1 = inst_22946;
var state_22958__$1 = (function (){var statearr_22969 = state_22958;
(statearr_22969[(10)] = inst_22945);

(statearr_22969[(8)] = inst_22935__$1);

return statearr_22969;
})();
var statearr_22970_22992 = state_22958__$1;
(statearr_22970_22992[(2)] = null);

(statearr_22970_22992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (9))){
var state_22958__$1 = state_22958;
var statearr_22971_22993 = state_22958__$1;
(statearr_22971_22993[(2)] = null);

(statearr_22971_22993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (5))){
var state_22958__$1 = state_22958;
var statearr_22972_22994 = state_22958__$1;
(statearr_22972_22994[(2)] = null);

(statearr_22972_22994[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (10))){
var inst_22950 = (state_22958[(2)]);
var state_22958__$1 = state_22958;
var statearr_22973_22995 = state_22958__$1;
(statearr_22973_22995[(2)] = inst_22950);

(statearr_22973_22995[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22959 === (8))){
var inst_22940 = (state_22958[(7)]);
var state_22958__$1 = state_22958;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22958__$1,(11),out,inst_22940);
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
});})(c__20821__auto___22985,out))
;
return ((function (switch__20709__auto__,c__20821__auto___22985,out){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_22977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22977[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_22977[(1)] = (1));

return statearr_22977;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_22958){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_22958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e22978){if((e22978 instanceof Object)){
var ex__20713__auto__ = e22978;
var statearr_22979_22996 = state_22958;
(statearr_22979_22996[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22997 = state_22958;
state_22958 = G__22997;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_22958){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_22958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___22985,out))
})();
var state__20823__auto__ = (function (){var statearr_22980 = f__20822__auto__.call(null);
(statearr_22980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___22985);

return statearr_22980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___22985,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23005 = (function (map_LT_,f,ch,meta23006){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23006 = meta23006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23007,meta23006__$1){
var self__ = this;
var _23007__$1 = this;
return (new cljs.core.async.t_cljs$core$async23005(self__.map_LT_,self__.f,self__.ch,meta23006__$1));
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23007){
var self__ = this;
var _23007__$1 = this;
return self__.meta23006;
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23008 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23008 = (function (map_LT_,f,ch,meta23006,_,fn1,meta23009){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23006 = meta23006;
this._ = _;
this.fn1 = fn1;
this.meta23009 = meta23009;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23008.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23010,meta23009__$1){
var self__ = this;
var _23010__$1 = this;
return (new cljs.core.async.t_cljs$core$async23008(self__.map_LT_,self__.f,self__.ch,self__.meta23006,self__._,self__.fn1,meta23009__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23008.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23010){
var self__ = this;
var _23010__$1 = this;
return self__.meta23009;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23008.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23008.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23008.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23008.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22998_SHARP_){
return f1.call(null,(((p1__22998_SHARP_ == null))?null:self__.f.call(null,p1__22998_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23008.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23006","meta23006",346848565,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23005","cljs.core.async/t_cljs$core$async23005",-538104615,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23009","meta23009",-1242211934,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23008.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23008.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23008";

cljs.core.async.t_cljs$core$async23008.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23008");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23008 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23008(map_LT___$1,f__$1,ch__$1,meta23006__$1,___$2,fn1__$1,meta23009){
return (new cljs.core.async.t_cljs$core$async23008(map_LT___$1,f__$1,ch__$1,meta23006__$1,___$2,fn1__$1,meta23009));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23008(self__.map_LT_,self__.f,self__.ch,self__.meta23006,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23005.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23006","meta23006",346848565,null)], null);
});

cljs.core.async.t_cljs$core$async23005.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23005.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23005";

cljs.core.async.t_cljs$core$async23005.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23005");
});

cljs.core.async.__GT_t_cljs$core$async23005 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23005(map_LT___$1,f__$1,ch__$1,meta23006){
return (new cljs.core.async.t_cljs$core$async23005(map_LT___$1,f__$1,ch__$1,meta23006));
});

}

return (new cljs.core.async.t_cljs$core$async23005(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23014 = (function (map_GT_,f,ch,meta23015){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23015 = meta23015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23016,meta23015__$1){
var self__ = this;
var _23016__$1 = this;
return (new cljs.core.async.t_cljs$core$async23014(self__.map_GT_,self__.f,self__.ch,meta23015__$1));
});

cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23016){
var self__ = this;
var _23016__$1 = this;
return self__.meta23015;
});

cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23014.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23014.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23015","meta23015",-999046410,null)], null);
});

cljs.core.async.t_cljs$core$async23014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23014";

cljs.core.async.t_cljs$core$async23014.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23014");
});

cljs.core.async.__GT_t_cljs$core$async23014 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23014(map_GT___$1,f__$1,ch__$1,meta23015){
return (new cljs.core.async.t_cljs$core$async23014(map_GT___$1,f__$1,ch__$1,meta23015));
});

}

return (new cljs.core.async.t_cljs$core$async23014(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23020 = (function (filter_GT_,p,ch,meta23021){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23021 = meta23021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23022,meta23021__$1){
var self__ = this;
var _23022__$1 = this;
return (new cljs.core.async.t_cljs$core$async23020(self__.filter_GT_,self__.p,self__.ch,meta23021__$1));
});

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23022){
var self__ = this;
var _23022__$1 = this;
return self__.meta23021;
});

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23020.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23021","meta23021",-36840858,null)], null);
});

cljs.core.async.t_cljs$core$async23020.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23020.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23020";

cljs.core.async.t_cljs$core$async23020.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23020");
});

cljs.core.async.__GT_t_cljs$core$async23020 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23020(filter_GT___$1,p__$1,ch__$1,meta23021){
return (new cljs.core.async.t_cljs$core$async23020(filter_GT___$1,p__$1,ch__$1,meta23021));
});

}

return (new cljs.core.async.t_cljs$core$async23020(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23023 = [];
var len__17829__auto___23067 = arguments.length;
var i__17830__auto___23068 = (0);
while(true){
if((i__17830__auto___23068 < len__17829__auto___23067)){
args23023.push((arguments[i__17830__auto___23068]));

var G__23069 = (i__17830__auto___23068 + (1));
i__17830__auto___23068 = G__23069;
continue;
} else {
}
break;
}

var G__23025 = args23023.length;
switch (G__23025) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23023.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20821__auto___23071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___23071,out){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___23071,out){
return (function (state_23046){
var state_val_23047 = (state_23046[(1)]);
if((state_val_23047 === (7))){
var inst_23042 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
var statearr_23048_23072 = state_23046__$1;
(statearr_23048_23072[(2)] = inst_23042);

(statearr_23048_23072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (1))){
var state_23046__$1 = state_23046;
var statearr_23049_23073 = state_23046__$1;
(statearr_23049_23073[(2)] = null);

(statearr_23049_23073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (4))){
var inst_23028 = (state_23046[(7)]);
var inst_23028__$1 = (state_23046[(2)]);
var inst_23029 = (inst_23028__$1 == null);
var state_23046__$1 = (function (){var statearr_23050 = state_23046;
(statearr_23050[(7)] = inst_23028__$1);

return statearr_23050;
})();
if(cljs.core.truth_(inst_23029)){
var statearr_23051_23074 = state_23046__$1;
(statearr_23051_23074[(1)] = (5));

} else {
var statearr_23052_23075 = state_23046__$1;
(statearr_23052_23075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (6))){
var inst_23028 = (state_23046[(7)]);
var inst_23033 = p.call(null,inst_23028);
var state_23046__$1 = state_23046;
if(cljs.core.truth_(inst_23033)){
var statearr_23053_23076 = state_23046__$1;
(statearr_23053_23076[(1)] = (8));

} else {
var statearr_23054_23077 = state_23046__$1;
(statearr_23054_23077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (3))){
var inst_23044 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23046__$1,inst_23044);
} else {
if((state_val_23047 === (2))){
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23046__$1,(4),ch);
} else {
if((state_val_23047 === (11))){
var inst_23036 = (state_23046[(2)]);
var state_23046__$1 = state_23046;
var statearr_23055_23078 = state_23046__$1;
(statearr_23055_23078[(2)] = inst_23036);

(statearr_23055_23078[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (9))){
var state_23046__$1 = state_23046;
var statearr_23056_23079 = state_23046__$1;
(statearr_23056_23079[(2)] = null);

(statearr_23056_23079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (5))){
var inst_23031 = cljs.core.async.close_BANG_.call(null,out);
var state_23046__$1 = state_23046;
var statearr_23057_23080 = state_23046__$1;
(statearr_23057_23080[(2)] = inst_23031);

(statearr_23057_23080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (10))){
var inst_23039 = (state_23046[(2)]);
var state_23046__$1 = (function (){var statearr_23058 = state_23046;
(statearr_23058[(8)] = inst_23039);

return statearr_23058;
})();
var statearr_23059_23081 = state_23046__$1;
(statearr_23059_23081[(2)] = null);

(statearr_23059_23081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23047 === (8))){
var inst_23028 = (state_23046[(7)]);
var state_23046__$1 = state_23046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23046__$1,(11),out,inst_23028);
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
});})(c__20821__auto___23071,out))
;
return ((function (switch__20709__auto__,c__20821__auto___23071,out){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_23063 = [null,null,null,null,null,null,null,null,null];
(statearr_23063[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_23063[(1)] = (1));

return statearr_23063;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_23046){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_23046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e23064){if((e23064 instanceof Object)){
var ex__20713__auto__ = e23064;
var statearr_23065_23082 = state_23046;
(statearr_23065_23082[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23064;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23083 = state_23046;
state_23046 = G__23083;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_23046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_23046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___23071,out))
})();
var state__20823__auto__ = (function (){var statearr_23066 = f__20822__auto__.call(null);
(statearr_23066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___23071);

return statearr_23066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___23071,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23084 = [];
var len__17829__auto___23087 = arguments.length;
var i__17830__auto___23088 = (0);
while(true){
if((i__17830__auto___23088 < len__17829__auto___23087)){
args23084.push((arguments[i__17830__auto___23088]));

var G__23089 = (i__17830__auto___23088 + (1));
i__17830__auto___23088 = G__23089;
continue;
} else {
}
break;
}

var G__23086 = args23084.length;
switch (G__23086) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23084.length)].join('')));

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
var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__){
return (function (state_23256){
var state_val_23257 = (state_23256[(1)]);
if((state_val_23257 === (7))){
var inst_23252 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23258_23299 = state_23256__$1;
(statearr_23258_23299[(2)] = inst_23252);

(statearr_23258_23299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (20))){
var inst_23222 = (state_23256[(7)]);
var inst_23233 = (state_23256[(2)]);
var inst_23234 = cljs.core.next.call(null,inst_23222);
var inst_23208 = inst_23234;
var inst_23209 = null;
var inst_23210 = (0);
var inst_23211 = (0);
var state_23256__$1 = (function (){var statearr_23259 = state_23256;
(statearr_23259[(8)] = inst_23210);

(statearr_23259[(9)] = inst_23208);

(statearr_23259[(10)] = inst_23211);

(statearr_23259[(11)] = inst_23209);

(statearr_23259[(12)] = inst_23233);

return statearr_23259;
})();
var statearr_23260_23300 = state_23256__$1;
(statearr_23260_23300[(2)] = null);

(statearr_23260_23300[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (1))){
var state_23256__$1 = state_23256;
var statearr_23261_23301 = state_23256__$1;
(statearr_23261_23301[(2)] = null);

(statearr_23261_23301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (4))){
var inst_23197 = (state_23256[(13)]);
var inst_23197__$1 = (state_23256[(2)]);
var inst_23198 = (inst_23197__$1 == null);
var state_23256__$1 = (function (){var statearr_23262 = state_23256;
(statearr_23262[(13)] = inst_23197__$1);

return statearr_23262;
})();
if(cljs.core.truth_(inst_23198)){
var statearr_23263_23302 = state_23256__$1;
(statearr_23263_23302[(1)] = (5));

} else {
var statearr_23264_23303 = state_23256__$1;
(statearr_23264_23303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (15))){
var state_23256__$1 = state_23256;
var statearr_23268_23304 = state_23256__$1;
(statearr_23268_23304[(2)] = null);

(statearr_23268_23304[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (21))){
var state_23256__$1 = state_23256;
var statearr_23269_23305 = state_23256__$1;
(statearr_23269_23305[(2)] = null);

(statearr_23269_23305[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (13))){
var inst_23210 = (state_23256[(8)]);
var inst_23208 = (state_23256[(9)]);
var inst_23211 = (state_23256[(10)]);
var inst_23209 = (state_23256[(11)]);
var inst_23218 = (state_23256[(2)]);
var inst_23219 = (inst_23211 + (1));
var tmp23265 = inst_23210;
var tmp23266 = inst_23208;
var tmp23267 = inst_23209;
var inst_23208__$1 = tmp23266;
var inst_23209__$1 = tmp23267;
var inst_23210__$1 = tmp23265;
var inst_23211__$1 = inst_23219;
var state_23256__$1 = (function (){var statearr_23270 = state_23256;
(statearr_23270[(8)] = inst_23210__$1);

(statearr_23270[(9)] = inst_23208__$1);

(statearr_23270[(10)] = inst_23211__$1);

(statearr_23270[(14)] = inst_23218);

(statearr_23270[(11)] = inst_23209__$1);

return statearr_23270;
})();
var statearr_23271_23306 = state_23256__$1;
(statearr_23271_23306[(2)] = null);

(statearr_23271_23306[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (22))){
var state_23256__$1 = state_23256;
var statearr_23272_23307 = state_23256__$1;
(statearr_23272_23307[(2)] = null);

(statearr_23272_23307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (6))){
var inst_23197 = (state_23256[(13)]);
var inst_23206 = f.call(null,inst_23197);
var inst_23207 = cljs.core.seq.call(null,inst_23206);
var inst_23208 = inst_23207;
var inst_23209 = null;
var inst_23210 = (0);
var inst_23211 = (0);
var state_23256__$1 = (function (){var statearr_23273 = state_23256;
(statearr_23273[(8)] = inst_23210);

(statearr_23273[(9)] = inst_23208);

(statearr_23273[(10)] = inst_23211);

(statearr_23273[(11)] = inst_23209);

return statearr_23273;
})();
var statearr_23274_23308 = state_23256__$1;
(statearr_23274_23308[(2)] = null);

(statearr_23274_23308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (17))){
var inst_23222 = (state_23256[(7)]);
var inst_23226 = cljs.core.chunk_first.call(null,inst_23222);
var inst_23227 = cljs.core.chunk_rest.call(null,inst_23222);
var inst_23228 = cljs.core.count.call(null,inst_23226);
var inst_23208 = inst_23227;
var inst_23209 = inst_23226;
var inst_23210 = inst_23228;
var inst_23211 = (0);
var state_23256__$1 = (function (){var statearr_23275 = state_23256;
(statearr_23275[(8)] = inst_23210);

(statearr_23275[(9)] = inst_23208);

(statearr_23275[(10)] = inst_23211);

(statearr_23275[(11)] = inst_23209);

return statearr_23275;
})();
var statearr_23276_23309 = state_23256__$1;
(statearr_23276_23309[(2)] = null);

(statearr_23276_23309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (3))){
var inst_23254 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23256__$1,inst_23254);
} else {
if((state_val_23257 === (12))){
var inst_23242 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23277_23310 = state_23256__$1;
(statearr_23277_23310[(2)] = inst_23242);

(statearr_23277_23310[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (2))){
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23256__$1,(4),in$);
} else {
if((state_val_23257 === (23))){
var inst_23250 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23278_23311 = state_23256__$1;
(statearr_23278_23311[(2)] = inst_23250);

(statearr_23278_23311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (19))){
var inst_23237 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23279_23312 = state_23256__$1;
(statearr_23279_23312[(2)] = inst_23237);

(statearr_23279_23312[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (11))){
var inst_23222 = (state_23256[(7)]);
var inst_23208 = (state_23256[(9)]);
var inst_23222__$1 = cljs.core.seq.call(null,inst_23208);
var state_23256__$1 = (function (){var statearr_23280 = state_23256;
(statearr_23280[(7)] = inst_23222__$1);

return statearr_23280;
})();
if(inst_23222__$1){
var statearr_23281_23313 = state_23256__$1;
(statearr_23281_23313[(1)] = (14));

} else {
var statearr_23282_23314 = state_23256__$1;
(statearr_23282_23314[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (9))){
var inst_23244 = (state_23256[(2)]);
var inst_23245 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23256__$1 = (function (){var statearr_23283 = state_23256;
(statearr_23283[(15)] = inst_23244);

return statearr_23283;
})();
if(cljs.core.truth_(inst_23245)){
var statearr_23284_23315 = state_23256__$1;
(statearr_23284_23315[(1)] = (21));

} else {
var statearr_23285_23316 = state_23256__$1;
(statearr_23285_23316[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (5))){
var inst_23200 = cljs.core.async.close_BANG_.call(null,out);
var state_23256__$1 = state_23256;
var statearr_23286_23317 = state_23256__$1;
(statearr_23286_23317[(2)] = inst_23200);

(statearr_23286_23317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (14))){
var inst_23222 = (state_23256[(7)]);
var inst_23224 = cljs.core.chunked_seq_QMARK_.call(null,inst_23222);
var state_23256__$1 = state_23256;
if(inst_23224){
var statearr_23287_23318 = state_23256__$1;
(statearr_23287_23318[(1)] = (17));

} else {
var statearr_23288_23319 = state_23256__$1;
(statearr_23288_23319[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (16))){
var inst_23240 = (state_23256[(2)]);
var state_23256__$1 = state_23256;
var statearr_23289_23320 = state_23256__$1;
(statearr_23289_23320[(2)] = inst_23240);

(statearr_23289_23320[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23257 === (10))){
var inst_23211 = (state_23256[(10)]);
var inst_23209 = (state_23256[(11)]);
var inst_23216 = cljs.core._nth.call(null,inst_23209,inst_23211);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23256__$1,(13),out,inst_23216);
} else {
if((state_val_23257 === (18))){
var inst_23222 = (state_23256[(7)]);
var inst_23231 = cljs.core.first.call(null,inst_23222);
var state_23256__$1 = state_23256;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23256__$1,(20),out,inst_23231);
} else {
if((state_val_23257 === (8))){
var inst_23210 = (state_23256[(8)]);
var inst_23211 = (state_23256[(10)]);
var inst_23213 = (inst_23211 < inst_23210);
var inst_23214 = inst_23213;
var state_23256__$1 = state_23256;
if(cljs.core.truth_(inst_23214)){
var statearr_23290_23321 = state_23256__$1;
(statearr_23290_23321[(1)] = (10));

} else {
var statearr_23291_23322 = state_23256__$1;
(statearr_23291_23322[(1)] = (11));

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
});})(c__20821__auto__))
;
return ((function (switch__20709__auto__,c__20821__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20710__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20710__auto____0 = (function (){
var statearr_23295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23295[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20710__auto__);

(statearr_23295[(1)] = (1));

return statearr_23295;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20710__auto____1 = (function (state_23256){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_23256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e23296){if((e23296 instanceof Object)){
var ex__20713__auto__ = e23296;
var statearr_23297_23323 = state_23256;
(statearr_23297_23323[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23324 = state_23256;
state_23256 = G__23324;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20710__auto__ = function(state_23256){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20710__auto____1.call(this,state_23256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20710__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20710__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__))
})();
var state__20823__auto__ = (function (){var statearr_23298 = f__20822__auto__.call(null);
(statearr_23298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_23298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__))
);

return c__20821__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23325 = [];
var len__17829__auto___23328 = arguments.length;
var i__17830__auto___23329 = (0);
while(true){
if((i__17830__auto___23329 < len__17829__auto___23328)){
args23325.push((arguments[i__17830__auto___23329]));

var G__23330 = (i__17830__auto___23329 + (1));
i__17830__auto___23329 = G__23330;
continue;
} else {
}
break;
}

var G__23327 = args23325.length;
switch (G__23327) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23325.length)].join('')));

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
var args23332 = [];
var len__17829__auto___23335 = arguments.length;
var i__17830__auto___23336 = (0);
while(true){
if((i__17830__auto___23336 < len__17829__auto___23335)){
args23332.push((arguments[i__17830__auto___23336]));

var G__23337 = (i__17830__auto___23336 + (1));
i__17830__auto___23336 = G__23337;
continue;
} else {
}
break;
}

var G__23334 = args23332.length;
switch (G__23334) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23332.length)].join('')));

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
var args23339 = [];
var len__17829__auto___23390 = arguments.length;
var i__17830__auto___23391 = (0);
while(true){
if((i__17830__auto___23391 < len__17829__auto___23390)){
args23339.push((arguments[i__17830__auto___23391]));

var G__23392 = (i__17830__auto___23391 + (1));
i__17830__auto___23391 = G__23392;
continue;
} else {
}
break;
}

var G__23341 = args23339.length;
switch (G__23341) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23339.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20821__auto___23394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___23394,out){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___23394,out){
return (function (state_23365){
var state_val_23366 = (state_23365[(1)]);
if((state_val_23366 === (7))){
var inst_23360 = (state_23365[(2)]);
var state_23365__$1 = state_23365;
var statearr_23367_23395 = state_23365__$1;
(statearr_23367_23395[(2)] = inst_23360);

(statearr_23367_23395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (1))){
var inst_23342 = null;
var state_23365__$1 = (function (){var statearr_23368 = state_23365;
(statearr_23368[(7)] = inst_23342);

return statearr_23368;
})();
var statearr_23369_23396 = state_23365__$1;
(statearr_23369_23396[(2)] = null);

(statearr_23369_23396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (4))){
var inst_23345 = (state_23365[(8)]);
var inst_23345__$1 = (state_23365[(2)]);
var inst_23346 = (inst_23345__$1 == null);
var inst_23347 = cljs.core.not.call(null,inst_23346);
var state_23365__$1 = (function (){var statearr_23370 = state_23365;
(statearr_23370[(8)] = inst_23345__$1);

return statearr_23370;
})();
if(inst_23347){
var statearr_23371_23397 = state_23365__$1;
(statearr_23371_23397[(1)] = (5));

} else {
var statearr_23372_23398 = state_23365__$1;
(statearr_23372_23398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (6))){
var state_23365__$1 = state_23365;
var statearr_23373_23399 = state_23365__$1;
(statearr_23373_23399[(2)] = null);

(statearr_23373_23399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (3))){
var inst_23362 = (state_23365[(2)]);
var inst_23363 = cljs.core.async.close_BANG_.call(null,out);
var state_23365__$1 = (function (){var statearr_23374 = state_23365;
(statearr_23374[(9)] = inst_23362);

return statearr_23374;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23365__$1,inst_23363);
} else {
if((state_val_23366 === (2))){
var state_23365__$1 = state_23365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23365__$1,(4),ch);
} else {
if((state_val_23366 === (11))){
var inst_23345 = (state_23365[(8)]);
var inst_23354 = (state_23365[(2)]);
var inst_23342 = inst_23345;
var state_23365__$1 = (function (){var statearr_23375 = state_23365;
(statearr_23375[(7)] = inst_23342);

(statearr_23375[(10)] = inst_23354);

return statearr_23375;
})();
var statearr_23376_23400 = state_23365__$1;
(statearr_23376_23400[(2)] = null);

(statearr_23376_23400[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (9))){
var inst_23345 = (state_23365[(8)]);
var state_23365__$1 = state_23365;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23365__$1,(11),out,inst_23345);
} else {
if((state_val_23366 === (5))){
var inst_23342 = (state_23365[(7)]);
var inst_23345 = (state_23365[(8)]);
var inst_23349 = cljs.core._EQ_.call(null,inst_23345,inst_23342);
var state_23365__$1 = state_23365;
if(inst_23349){
var statearr_23378_23401 = state_23365__$1;
(statearr_23378_23401[(1)] = (8));

} else {
var statearr_23379_23402 = state_23365__$1;
(statearr_23379_23402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (10))){
var inst_23357 = (state_23365[(2)]);
var state_23365__$1 = state_23365;
var statearr_23380_23403 = state_23365__$1;
(statearr_23380_23403[(2)] = inst_23357);

(statearr_23380_23403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23366 === (8))){
var inst_23342 = (state_23365[(7)]);
var tmp23377 = inst_23342;
var inst_23342__$1 = tmp23377;
var state_23365__$1 = (function (){var statearr_23381 = state_23365;
(statearr_23381[(7)] = inst_23342__$1);

return statearr_23381;
})();
var statearr_23382_23404 = state_23365__$1;
(statearr_23382_23404[(2)] = null);

(statearr_23382_23404[(1)] = (2));


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
});})(c__20821__auto___23394,out))
;
return ((function (switch__20709__auto__,c__20821__auto___23394,out){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_23386 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23386[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_23386[(1)] = (1));

return statearr_23386;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_23365){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_23365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e23387){if((e23387 instanceof Object)){
var ex__20713__auto__ = e23387;
var statearr_23388_23405 = state_23365;
(statearr_23388_23405[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23406 = state_23365;
state_23365 = G__23406;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_23365){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_23365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___23394,out))
})();
var state__20823__auto__ = (function (){var statearr_23389 = f__20822__auto__.call(null);
(statearr_23389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___23394);

return statearr_23389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___23394,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23407 = [];
var len__17829__auto___23477 = arguments.length;
var i__17830__auto___23478 = (0);
while(true){
if((i__17830__auto___23478 < len__17829__auto___23477)){
args23407.push((arguments[i__17830__auto___23478]));

var G__23479 = (i__17830__auto___23478 + (1));
i__17830__auto___23478 = G__23479;
continue;
} else {
}
break;
}

var G__23409 = args23407.length;
switch (G__23409) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23407.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20821__auto___23481 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___23481,out){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___23481,out){
return (function (state_23447){
var state_val_23448 = (state_23447[(1)]);
if((state_val_23448 === (7))){
var inst_23443 = (state_23447[(2)]);
var state_23447__$1 = state_23447;
var statearr_23449_23482 = state_23447__$1;
(statearr_23449_23482[(2)] = inst_23443);

(statearr_23449_23482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (1))){
var inst_23410 = (new Array(n));
var inst_23411 = inst_23410;
var inst_23412 = (0);
var state_23447__$1 = (function (){var statearr_23450 = state_23447;
(statearr_23450[(7)] = inst_23411);

(statearr_23450[(8)] = inst_23412);

return statearr_23450;
})();
var statearr_23451_23483 = state_23447__$1;
(statearr_23451_23483[(2)] = null);

(statearr_23451_23483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (4))){
var inst_23415 = (state_23447[(9)]);
var inst_23415__$1 = (state_23447[(2)]);
var inst_23416 = (inst_23415__$1 == null);
var inst_23417 = cljs.core.not.call(null,inst_23416);
var state_23447__$1 = (function (){var statearr_23452 = state_23447;
(statearr_23452[(9)] = inst_23415__$1);

return statearr_23452;
})();
if(inst_23417){
var statearr_23453_23484 = state_23447__$1;
(statearr_23453_23484[(1)] = (5));

} else {
var statearr_23454_23485 = state_23447__$1;
(statearr_23454_23485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (15))){
var inst_23437 = (state_23447[(2)]);
var state_23447__$1 = state_23447;
var statearr_23455_23486 = state_23447__$1;
(statearr_23455_23486[(2)] = inst_23437);

(statearr_23455_23486[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (13))){
var state_23447__$1 = state_23447;
var statearr_23456_23487 = state_23447__$1;
(statearr_23456_23487[(2)] = null);

(statearr_23456_23487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (6))){
var inst_23412 = (state_23447[(8)]);
var inst_23433 = (inst_23412 > (0));
var state_23447__$1 = state_23447;
if(cljs.core.truth_(inst_23433)){
var statearr_23457_23488 = state_23447__$1;
(statearr_23457_23488[(1)] = (12));

} else {
var statearr_23458_23489 = state_23447__$1;
(statearr_23458_23489[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (3))){
var inst_23445 = (state_23447[(2)]);
var state_23447__$1 = state_23447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23447__$1,inst_23445);
} else {
if((state_val_23448 === (12))){
var inst_23411 = (state_23447[(7)]);
var inst_23435 = cljs.core.vec.call(null,inst_23411);
var state_23447__$1 = state_23447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23447__$1,(15),out,inst_23435);
} else {
if((state_val_23448 === (2))){
var state_23447__$1 = state_23447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23447__$1,(4),ch);
} else {
if((state_val_23448 === (11))){
var inst_23427 = (state_23447[(2)]);
var inst_23428 = (new Array(n));
var inst_23411 = inst_23428;
var inst_23412 = (0);
var state_23447__$1 = (function (){var statearr_23459 = state_23447;
(statearr_23459[(7)] = inst_23411);

(statearr_23459[(8)] = inst_23412);

(statearr_23459[(10)] = inst_23427);

return statearr_23459;
})();
var statearr_23460_23490 = state_23447__$1;
(statearr_23460_23490[(2)] = null);

(statearr_23460_23490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (9))){
var inst_23411 = (state_23447[(7)]);
var inst_23425 = cljs.core.vec.call(null,inst_23411);
var state_23447__$1 = state_23447;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23447__$1,(11),out,inst_23425);
} else {
if((state_val_23448 === (5))){
var inst_23420 = (state_23447[(11)]);
var inst_23415 = (state_23447[(9)]);
var inst_23411 = (state_23447[(7)]);
var inst_23412 = (state_23447[(8)]);
var inst_23419 = (inst_23411[inst_23412] = inst_23415);
var inst_23420__$1 = (inst_23412 + (1));
var inst_23421 = (inst_23420__$1 < n);
var state_23447__$1 = (function (){var statearr_23461 = state_23447;
(statearr_23461[(11)] = inst_23420__$1);

(statearr_23461[(12)] = inst_23419);

return statearr_23461;
})();
if(cljs.core.truth_(inst_23421)){
var statearr_23462_23491 = state_23447__$1;
(statearr_23462_23491[(1)] = (8));

} else {
var statearr_23463_23492 = state_23447__$1;
(statearr_23463_23492[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (14))){
var inst_23440 = (state_23447[(2)]);
var inst_23441 = cljs.core.async.close_BANG_.call(null,out);
var state_23447__$1 = (function (){var statearr_23465 = state_23447;
(statearr_23465[(13)] = inst_23440);

return statearr_23465;
})();
var statearr_23466_23493 = state_23447__$1;
(statearr_23466_23493[(2)] = inst_23441);

(statearr_23466_23493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (10))){
var inst_23431 = (state_23447[(2)]);
var state_23447__$1 = state_23447;
var statearr_23467_23494 = state_23447__$1;
(statearr_23467_23494[(2)] = inst_23431);

(statearr_23467_23494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23448 === (8))){
var inst_23420 = (state_23447[(11)]);
var inst_23411 = (state_23447[(7)]);
var tmp23464 = inst_23411;
var inst_23411__$1 = tmp23464;
var inst_23412 = inst_23420;
var state_23447__$1 = (function (){var statearr_23468 = state_23447;
(statearr_23468[(7)] = inst_23411__$1);

(statearr_23468[(8)] = inst_23412);

return statearr_23468;
})();
var statearr_23469_23495 = state_23447__$1;
(statearr_23469_23495[(2)] = null);

(statearr_23469_23495[(1)] = (2));


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
});})(c__20821__auto___23481,out))
;
return ((function (switch__20709__auto__,c__20821__auto___23481,out){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_23473 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23473[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_23473[(1)] = (1));

return statearr_23473;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_23447){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_23447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e23474){if((e23474 instanceof Object)){
var ex__20713__auto__ = e23474;
var statearr_23475_23496 = state_23447;
(statearr_23475_23496[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23474;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23497 = state_23447;
state_23447 = G__23497;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_23447){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_23447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___23481,out))
})();
var state__20823__auto__ = (function (){var statearr_23476 = f__20822__auto__.call(null);
(statearr_23476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___23481);

return statearr_23476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___23481,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23498 = [];
var len__17829__auto___23572 = arguments.length;
var i__17830__auto___23573 = (0);
while(true){
if((i__17830__auto___23573 < len__17829__auto___23572)){
args23498.push((arguments[i__17830__auto___23573]));

var G__23574 = (i__17830__auto___23573 + (1));
i__17830__auto___23573 = G__23574;
continue;
} else {
}
break;
}

var G__23500 = args23498.length;
switch (G__23500) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23498.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20821__auto___23576 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___23576,out){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___23576,out){
return (function (state_23542){
var state_val_23543 = (state_23542[(1)]);
if((state_val_23543 === (7))){
var inst_23538 = (state_23542[(2)]);
var state_23542__$1 = state_23542;
var statearr_23544_23577 = state_23542__$1;
(statearr_23544_23577[(2)] = inst_23538);

(statearr_23544_23577[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (1))){
var inst_23501 = [];
var inst_23502 = inst_23501;
var inst_23503 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23542__$1 = (function (){var statearr_23545 = state_23542;
(statearr_23545[(7)] = inst_23503);

(statearr_23545[(8)] = inst_23502);

return statearr_23545;
})();
var statearr_23546_23578 = state_23542__$1;
(statearr_23546_23578[(2)] = null);

(statearr_23546_23578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (4))){
var inst_23506 = (state_23542[(9)]);
var inst_23506__$1 = (state_23542[(2)]);
var inst_23507 = (inst_23506__$1 == null);
var inst_23508 = cljs.core.not.call(null,inst_23507);
var state_23542__$1 = (function (){var statearr_23547 = state_23542;
(statearr_23547[(9)] = inst_23506__$1);

return statearr_23547;
})();
if(inst_23508){
var statearr_23548_23579 = state_23542__$1;
(statearr_23548_23579[(1)] = (5));

} else {
var statearr_23549_23580 = state_23542__$1;
(statearr_23549_23580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (15))){
var inst_23532 = (state_23542[(2)]);
var state_23542__$1 = state_23542;
var statearr_23550_23581 = state_23542__$1;
(statearr_23550_23581[(2)] = inst_23532);

(statearr_23550_23581[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (13))){
var state_23542__$1 = state_23542;
var statearr_23551_23582 = state_23542__$1;
(statearr_23551_23582[(2)] = null);

(statearr_23551_23582[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (6))){
var inst_23502 = (state_23542[(8)]);
var inst_23527 = inst_23502.length;
var inst_23528 = (inst_23527 > (0));
var state_23542__$1 = state_23542;
if(cljs.core.truth_(inst_23528)){
var statearr_23552_23583 = state_23542__$1;
(statearr_23552_23583[(1)] = (12));

} else {
var statearr_23553_23584 = state_23542__$1;
(statearr_23553_23584[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (3))){
var inst_23540 = (state_23542[(2)]);
var state_23542__$1 = state_23542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23542__$1,inst_23540);
} else {
if((state_val_23543 === (12))){
var inst_23502 = (state_23542[(8)]);
var inst_23530 = cljs.core.vec.call(null,inst_23502);
var state_23542__$1 = state_23542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23542__$1,(15),out,inst_23530);
} else {
if((state_val_23543 === (2))){
var state_23542__$1 = state_23542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23542__$1,(4),ch);
} else {
if((state_val_23543 === (11))){
var inst_23506 = (state_23542[(9)]);
var inst_23510 = (state_23542[(10)]);
var inst_23520 = (state_23542[(2)]);
var inst_23521 = [];
var inst_23522 = inst_23521.push(inst_23506);
var inst_23502 = inst_23521;
var inst_23503 = inst_23510;
var state_23542__$1 = (function (){var statearr_23554 = state_23542;
(statearr_23554[(11)] = inst_23520);

(statearr_23554[(7)] = inst_23503);

(statearr_23554[(12)] = inst_23522);

(statearr_23554[(8)] = inst_23502);

return statearr_23554;
})();
var statearr_23555_23585 = state_23542__$1;
(statearr_23555_23585[(2)] = null);

(statearr_23555_23585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (9))){
var inst_23502 = (state_23542[(8)]);
var inst_23518 = cljs.core.vec.call(null,inst_23502);
var state_23542__$1 = state_23542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23542__$1,(11),out,inst_23518);
} else {
if((state_val_23543 === (5))){
var inst_23503 = (state_23542[(7)]);
var inst_23506 = (state_23542[(9)]);
var inst_23510 = (state_23542[(10)]);
var inst_23510__$1 = f.call(null,inst_23506);
var inst_23511 = cljs.core._EQ_.call(null,inst_23510__$1,inst_23503);
var inst_23512 = cljs.core.keyword_identical_QMARK_.call(null,inst_23503,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23513 = (inst_23511) || (inst_23512);
var state_23542__$1 = (function (){var statearr_23556 = state_23542;
(statearr_23556[(10)] = inst_23510__$1);

return statearr_23556;
})();
if(cljs.core.truth_(inst_23513)){
var statearr_23557_23586 = state_23542__$1;
(statearr_23557_23586[(1)] = (8));

} else {
var statearr_23558_23587 = state_23542__$1;
(statearr_23558_23587[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (14))){
var inst_23535 = (state_23542[(2)]);
var inst_23536 = cljs.core.async.close_BANG_.call(null,out);
var state_23542__$1 = (function (){var statearr_23560 = state_23542;
(statearr_23560[(13)] = inst_23535);

return statearr_23560;
})();
var statearr_23561_23588 = state_23542__$1;
(statearr_23561_23588[(2)] = inst_23536);

(statearr_23561_23588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (10))){
var inst_23525 = (state_23542[(2)]);
var state_23542__$1 = state_23542;
var statearr_23562_23589 = state_23542__$1;
(statearr_23562_23589[(2)] = inst_23525);

(statearr_23562_23589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (8))){
var inst_23506 = (state_23542[(9)]);
var inst_23502 = (state_23542[(8)]);
var inst_23510 = (state_23542[(10)]);
var inst_23515 = inst_23502.push(inst_23506);
var tmp23559 = inst_23502;
var inst_23502__$1 = tmp23559;
var inst_23503 = inst_23510;
var state_23542__$1 = (function (){var statearr_23563 = state_23542;
(statearr_23563[(7)] = inst_23503);

(statearr_23563[(8)] = inst_23502__$1);

(statearr_23563[(14)] = inst_23515);

return statearr_23563;
})();
var statearr_23564_23590 = state_23542__$1;
(statearr_23564_23590[(2)] = null);

(statearr_23564_23590[(1)] = (2));


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
});})(c__20821__auto___23576,out))
;
return ((function (switch__20709__auto__,c__20821__auto___23576,out){
return (function() {
var cljs$core$async$state_machine__20710__auto__ = null;
var cljs$core$async$state_machine__20710__auto____0 = (function (){
var statearr_23568 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23568[(0)] = cljs$core$async$state_machine__20710__auto__);

(statearr_23568[(1)] = (1));

return statearr_23568;
});
var cljs$core$async$state_machine__20710__auto____1 = (function (state_23542){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_23542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e23569){if((e23569 instanceof Object)){
var ex__20713__auto__ = e23569;
var statearr_23570_23591 = state_23542;
(statearr_23570_23591[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23592 = state_23542;
state_23542 = G__23592;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
cljs$core$async$state_machine__20710__auto__ = function(state_23542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20710__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20710__auto____1.call(this,state_23542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20710__auto____0;
cljs$core$async$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20710__auto____1;
return cljs$core$async$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___23576,out))
})();
var state__20823__auto__ = (function (){var statearr_23571 = f__20822__auto__.call(null);
(statearr_23571[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___23576);

return statearr_23571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___23576,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map