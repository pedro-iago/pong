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
var args32460 = [];
var len__19784__auto___32478 = arguments.length;
var i__19785__auto___32479 = (0);
while(true){
if((i__19785__auto___32479 < len__19784__auto___32478)){
args32460.push((arguments[i__19785__auto___32479]));

var G__32480 = (i__19785__auto___32479 + (1));
i__19785__auto___32479 = G__32480;
continue;
} else {
}
break;
}

var G__32464 = args32460.length;
switch (G__32464) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32460.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async32466 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32466 = (function (f,blockable,meta32467){
this.f = f;
this.blockable = blockable;
this.meta32467 = meta32467;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32468,meta32467__$1){
var self__ = this;
var _32468__$1 = this;
return (new cljs.core.async.t_cljs$core$async32466(self__.f,self__.blockable,meta32467__$1));
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32468){
var self__ = this;
var _32468__$1 = this;
return self__.meta32467;
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32466.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32466.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32467","meta32467",-556738159,null)], null);
});

cljs.core.async.t_cljs$core$async32466.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32466.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32466";

cljs.core.async.t_cljs$core$async32466.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async32466");
});

cljs.core.async.__GT_t_cljs$core$async32466 = (function cljs$core$async$__GT_t_cljs$core$async32466(f__$1,blockable__$1,meta32467){
return (new cljs.core.async.t_cljs$core$async32466(f__$1,blockable__$1,meta32467));
});

}

return (new cljs.core.async.t_cljs$core$async32466(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args32519 = [];
var len__19784__auto___32542 = arguments.length;
var i__19785__auto___32544 = (0);
while(true){
if((i__19785__auto___32544 < len__19784__auto___32542)){
args32519.push((arguments[i__19785__auto___32544]));

var G__32546 = (i__19785__auto___32544 + (1));
i__19785__auto___32544 = G__32546;
continue;
} else {
}
break;
}

var G__32541 = args32519.length;
switch (G__32541) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32519.length)].join('')));

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
var args32561 = [];
var len__19784__auto___32564 = arguments.length;
var i__19785__auto___32565 = (0);
while(true){
if((i__19785__auto___32565 < len__19784__auto___32564)){
args32561.push((arguments[i__19785__auto___32565]));

var G__32566 = (i__19785__auto___32565 + (1));
i__19785__auto___32565 = G__32566;
continue;
} else {
}
break;
}

var G__32563 = args32561.length;
switch (G__32563) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32561.length)].join('')));

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
var args32589 = [];
var len__19784__auto___32594 = arguments.length;
var i__19785__auto___32595 = (0);
while(true){
if((i__19785__auto___32595 < len__19784__auto___32594)){
args32589.push((arguments[i__19785__auto___32595]));

var G__32597 = (i__19785__auto___32595 + (1));
i__19785__auto___32595 = G__32597;
continue;
} else {
}
break;
}

var G__32591 = args32589.length;
switch (G__32591) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32589.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32603 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32603);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32603,ret){
return (function (){
return fn1.call(null,val_32603);
});})(val_32603,ret))
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
var args32608 = [];
var len__19784__auto___32623 = arguments.length;
var i__19785__auto___32624 = (0);
while(true){
if((i__19785__auto___32624 < len__19784__auto___32623)){
args32608.push((arguments[i__19785__auto___32624]));

var G__32625 = (i__19785__auto___32624 + (1));
i__19785__auto___32624 = G__32625;
continue;
} else {
}
break;
}

var G__32618 = args32608.length;
switch (G__32618) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32608.length)].join('')));

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
var n__19629__auto___32640 = n;
var x_32641 = (0);
while(true){
if((x_32641 < n__19629__auto___32640)){
(a[x_32641] = (0));

var G__32642 = (x_32641 + (1));
x_32641 = G__32642;
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

var G__32647 = (i + (1));
i = G__32647;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32652 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32652 = (function (alt_flag,flag,meta32653){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32653 = meta32653;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32654,meta32653__$1){
var self__ = this;
var _32654__$1 = this;
return (new cljs.core.async.t_cljs$core$async32652(self__.alt_flag,self__.flag,meta32653__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32654){
var self__ = this;
var _32654__$1 = this;
return self__.meta32653;
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32653","meta32653",-1561772565,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32652.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32652.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32652";

cljs.core.async.t_cljs$core$async32652.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async32652");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32652 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32652(alt_flag__$1,flag__$1,meta32653){
return (new cljs.core.async.t_cljs$core$async32652(alt_flag__$1,flag__$1,meta32653));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32652(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32665 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32665 = (function (alt_handler,flag,cb,meta32666){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32666 = meta32666;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32667,meta32666__$1){
var self__ = this;
var _32667__$1 = this;
return (new cljs.core.async.t_cljs$core$async32665(self__.alt_handler,self__.flag,self__.cb,meta32666__$1));
});

cljs.core.async.t_cljs$core$async32665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32667){
var self__ = this;
var _32667__$1 = this;
return self__.meta32666;
});

cljs.core.async.t_cljs$core$async32665.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32665.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32665.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32665.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32665.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32666","meta32666",1377074124,null)], null);
});

cljs.core.async.t_cljs$core$async32665.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32665.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32665";

cljs.core.async.t_cljs$core$async32665.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async32665");
});

cljs.core.async.__GT_t_cljs$core$async32665 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32665(alt_handler__$1,flag__$1,cb__$1,meta32666){
return (new cljs.core.async.t_cljs$core$async32665(alt_handler__$1,flag__$1,cb__$1,meta32666));
});

}

return (new cljs.core.async.t_cljs$core$async32665(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32682_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32682_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32683_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32683_SHARP_,port], null));
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
var G__32698 = (i + (1));
i = G__32698;
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
var len__19784__auto___32718 = arguments.length;
var i__19785__auto___32719 = (0);
while(true){
if((i__19785__auto___32719 < len__19784__auto___32718)){
args__19791__auto__.push((arguments[i__19785__auto___32719]));

var G__32720 = (i__19785__auto___32719 + (1));
i__19785__auto___32719 = G__32720;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32712){
var map__32713 = p__32712;
var map__32713__$1 = ((((!((map__32713 == null)))?((((map__32713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32713):map__32713);
var opts = map__32713__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32710){
var G__32711 = cljs.core.first.call(null,seq32710);
var seq32710__$1 = cljs.core.next.call(null,seq32710);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32711,seq32710__$1);
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
var args32723 = [];
var len__19784__auto___32863 = arguments.length;
var i__19785__auto___32864 = (0);
while(true){
if((i__19785__auto___32864 < len__19784__auto___32863)){
args32723.push((arguments[i__19785__auto___32864]));

var G__32865 = (i__19785__auto___32864 + (1));
i__19785__auto___32864 = G__32865;
continue;
} else {
}
break;
}

var G__32727 = args32723.length;
switch (G__32727) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32723.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32393__auto___32867 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___32867){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___32867){
return (function (state_32780){
var state_val_32785 = (state_32780[(1)]);
if((state_val_32785 === (7))){
var inst_32768 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
var statearr_32796_32868 = state_32780__$1;
(statearr_32796_32868[(2)] = inst_32768);

(statearr_32796_32868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (1))){
var state_32780__$1 = state_32780;
var statearr_32798_32869 = state_32780__$1;
(statearr_32798_32869[(2)] = null);

(statearr_32798_32869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (4))){
var inst_32745 = (state_32780[(7)]);
var inst_32745__$1 = (state_32780[(2)]);
var inst_32751 = (inst_32745__$1 == null);
var state_32780__$1 = (function (){var statearr_32802 = state_32780;
(statearr_32802[(7)] = inst_32745__$1);

return statearr_32802;
})();
if(cljs.core.truth_(inst_32751)){
var statearr_32803_32881 = state_32780__$1;
(statearr_32803_32881[(1)] = (5));

} else {
var statearr_32804_32882 = state_32780__$1;
(statearr_32804_32882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (13))){
var state_32780__$1 = state_32780;
var statearr_32821_32885 = state_32780__$1;
(statearr_32821_32885[(2)] = null);

(statearr_32821_32885[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (6))){
var inst_32745 = (state_32780[(7)]);
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32780__$1,(11),to,inst_32745);
} else {
if((state_val_32785 === (3))){
var inst_32770 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32780__$1,inst_32770);
} else {
if((state_val_32785 === (12))){
var state_32780__$1 = state_32780;
var statearr_32823_32886 = state_32780__$1;
(statearr_32823_32886[(2)] = null);

(statearr_32823_32886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (2))){
var state_32780__$1 = state_32780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32780__$1,(4),from);
} else {
if((state_val_32785 === (11))){
var inst_32760 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
if(cljs.core.truth_(inst_32760)){
var statearr_32824_32887 = state_32780__$1;
(statearr_32824_32887[(1)] = (12));

} else {
var statearr_32826_32888 = state_32780__$1;
(statearr_32826_32888[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (9))){
var state_32780__$1 = state_32780;
var statearr_32828_32889 = state_32780__$1;
(statearr_32828_32889[(2)] = null);

(statearr_32828_32889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (5))){
var state_32780__$1 = state_32780;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32830_32890 = state_32780__$1;
(statearr_32830_32890[(1)] = (8));

} else {
var statearr_32831_32892 = state_32780__$1;
(statearr_32831_32892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (14))){
var inst_32766 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
var statearr_32833_32897 = state_32780__$1;
(statearr_32833_32897[(2)] = inst_32766);

(statearr_32833_32897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (10))){
var inst_32757 = (state_32780[(2)]);
var state_32780__$1 = state_32780;
var statearr_32835_32898 = state_32780__$1;
(statearr_32835_32898[(2)] = inst_32757);

(statearr_32835_32898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32785 === (8))){
var inst_32754 = cljs.core.async.close_BANG_.call(null,to);
var state_32780__$1 = state_32780;
var statearr_32836_32899 = state_32780__$1;
(statearr_32836_32899[(2)] = inst_32754);

(statearr_32836_32899[(1)] = (10));


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
});})(c__32393__auto___32867))
;
return ((function (switch__32005__auto__,c__32393__auto___32867){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_32841 = [null,null,null,null,null,null,null,null];
(statearr_32841[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_32841[(1)] = (1));

return statearr_32841;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_32780){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_32780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e32843){if((e32843 instanceof Object)){
var ex__32009__auto__ = e32843;
var statearr_32844_32910 = state_32780;
(statearr_32844_32910[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_32780;
state_32780 = G__32914;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_32780){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_32780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___32867))
})();
var state__32395__auto__ = (function (){var statearr_32862 = f__32394__auto__.call(null);
(statearr_32862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___32867);

return statearr_32862;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___32867))
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
return (function (p__33188){
var vec__33189 = p__33188;
var v = cljs.core.nth.call(null,vec__33189,(0),null);
var p = cljs.core.nth.call(null,vec__33189,(1),null);
var job = vec__33189;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32393__auto___33456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___33456,res,vec__33189,v,p,job,jobs,results){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___33456,res,vec__33189,v,p,job,jobs,results){
return (function (state_33194){
var state_val_33195 = (state_33194[(1)]);
if((state_val_33195 === (1))){
var state_33194__$1 = state_33194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33194__$1,(2),res,v);
} else {
if((state_val_33195 === (2))){
var inst_33191 = (state_33194[(2)]);
var inst_33192 = cljs.core.async.close_BANG_.call(null,res);
var state_33194__$1 = (function (){var statearr_33196 = state_33194;
(statearr_33196[(7)] = inst_33191);

return statearr_33196;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33194__$1,inst_33192);
} else {
return null;
}
}
});})(c__32393__auto___33456,res,vec__33189,v,p,job,jobs,results))
;
return ((function (switch__32005__auto__,c__32393__auto___33456,res,vec__33189,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0 = (function (){
var statearr_33200 = [null,null,null,null,null,null,null,null];
(statearr_33200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__);

(statearr_33200[(1)] = (1));

return statearr_33200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1 = (function (state_33194){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33201){if((e33201 instanceof Object)){
var ex__32009__auto__ = e33201;
var statearr_33202_33475 = state_33194;
(statearr_33202_33475[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33485 = state_33194;
state_33194 = G__33485;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = function(state_33194){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1.call(this,state_33194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___33456,res,vec__33189,v,p,job,jobs,results))
})();
var state__32395__auto__ = (function (){var statearr_33241 = f__32394__auto__.call(null);
(statearr_33241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___33456);

return statearr_33241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___33456,res,vec__33189,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33244){
var vec__33245 = p__33244;
var v = cljs.core.nth.call(null,vec__33245,(0),null);
var p = cljs.core.nth.call(null,vec__33245,(1),null);
var job = vec__33245;
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
var n__19629__auto___33487 = n;
var __33488 = (0);
while(true){
if((__33488 < n__19629__auto___33487)){
var G__33250_33489 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__33250_33489) {
case "compute":
var c__32393__auto___33491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33488,c__32393__auto___33491,G__33250_33489,n__19629__auto___33487,jobs,results,process,async){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (__33488,c__32393__auto___33491,G__33250_33489,n__19629__auto___33487,jobs,results,process,async){
return (function (state_33285){
var state_val_33286 = (state_33285[(1)]);
if((state_val_33286 === (1))){
var state_33285__$1 = state_33285;
var statearr_33287_33492 = state_33285__$1;
(statearr_33287_33492[(2)] = null);

(statearr_33287_33492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (2))){
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33285__$1,(4),jobs);
} else {
if((state_val_33286 === (3))){
var inst_33263 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33285__$1,inst_33263);
} else {
if((state_val_33286 === (4))){
var inst_33254 = (state_33285[(2)]);
var inst_33255 = process.call(null,inst_33254);
var state_33285__$1 = state_33285;
if(cljs.core.truth_(inst_33255)){
var statearr_33289_33494 = state_33285__$1;
(statearr_33289_33494[(1)] = (5));

} else {
var statearr_33290_33495 = state_33285__$1;
(statearr_33290_33495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (5))){
var state_33285__$1 = state_33285;
var statearr_33291_33496 = state_33285__$1;
(statearr_33291_33496[(2)] = null);

(statearr_33291_33496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (6))){
var state_33285__$1 = state_33285;
var statearr_33292_33497 = state_33285__$1;
(statearr_33292_33497[(2)] = null);

(statearr_33292_33497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33286 === (7))){
var inst_33260 = (state_33285[(2)]);
var state_33285__$1 = state_33285;
var statearr_33293_33498 = state_33285__$1;
(statearr_33293_33498[(2)] = inst_33260);

(statearr_33293_33498[(1)] = (3));


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
});})(__33488,c__32393__auto___33491,G__33250_33489,n__19629__auto___33487,jobs,results,process,async))
;
return ((function (__33488,switch__32005__auto__,c__32393__auto___33491,G__33250_33489,n__19629__auto___33487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0 = (function (){
var statearr_33299 = [null,null,null,null,null,null,null];
(statearr_33299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__);

(statearr_33299[(1)] = (1));

return statearr_33299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1 = (function (state_33285){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33285);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33300){if((e33300 instanceof Object)){
var ex__32009__auto__ = e33300;
var statearr_33302_33499 = state_33285;
(statearr_33302_33499[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33285);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33500 = state_33285;
state_33285 = G__33500;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = function(state_33285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1.call(this,state_33285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__;
})()
;})(__33488,switch__32005__auto__,c__32393__auto___33491,G__33250_33489,n__19629__auto___33487,jobs,results,process,async))
})();
var state__32395__auto__ = (function (){var statearr_33303 = f__32394__auto__.call(null);
(statearr_33303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___33491);

return statearr_33303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(__33488,c__32393__auto___33491,G__33250_33489,n__19629__auto___33487,jobs,results,process,async))
);


break;
case "async":
var c__32393__auto___33510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33488,c__32393__auto___33510,G__33250_33489,n__19629__auto___33487,jobs,results,process,async){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (__33488,c__32393__auto___33510,G__33250_33489,n__19629__auto___33487,jobs,results,process,async){
return (function (state_33316){
var state_val_33317 = (state_33316[(1)]);
if((state_val_33317 === (1))){
var state_33316__$1 = state_33316;
var statearr_33319_33514 = state_33316__$1;
(statearr_33319_33514[(2)] = null);

(statearr_33319_33514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (2))){
var state_33316__$1 = state_33316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33316__$1,(4),jobs);
} else {
if((state_val_33317 === (3))){
var inst_33314 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33316__$1,inst_33314);
} else {
if((state_val_33317 === (4))){
var inst_33306 = (state_33316[(2)]);
var inst_33307 = async.call(null,inst_33306);
var state_33316__$1 = state_33316;
if(cljs.core.truth_(inst_33307)){
var statearr_33320_33516 = state_33316__$1;
(statearr_33320_33516[(1)] = (5));

} else {
var statearr_33321_33517 = state_33316__$1;
(statearr_33321_33517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (5))){
var state_33316__$1 = state_33316;
var statearr_33322_33518 = state_33316__$1;
(statearr_33322_33518[(2)] = null);

(statearr_33322_33518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (6))){
var state_33316__$1 = state_33316;
var statearr_33323_33526 = state_33316__$1;
(statearr_33323_33526[(2)] = null);

(statearr_33323_33526[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33317 === (7))){
var inst_33312 = (state_33316[(2)]);
var state_33316__$1 = state_33316;
var statearr_33324_33527 = state_33316__$1;
(statearr_33324_33527[(2)] = inst_33312);

(statearr_33324_33527[(1)] = (3));


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
});})(__33488,c__32393__auto___33510,G__33250_33489,n__19629__auto___33487,jobs,results,process,async))
;
return ((function (__33488,switch__32005__auto__,c__32393__auto___33510,G__33250_33489,n__19629__auto___33487,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0 = (function (){
var statearr_33328 = [null,null,null,null,null,null,null];
(statearr_33328[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__);

(statearr_33328[(1)] = (1));

return statearr_33328;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1 = (function (state_33316){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33329){if((e33329 instanceof Object)){
var ex__32009__auto__ = e33329;
var statearr_33330_33532 = state_33316;
(statearr_33330_33532[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33533 = state_33316;
state_33316 = G__33533;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = function(state_33316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1.call(this,state_33316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__;
})()
;})(__33488,switch__32005__auto__,c__32393__auto___33510,G__33250_33489,n__19629__auto___33487,jobs,results,process,async))
})();
var state__32395__auto__ = (function (){var statearr_33331 = f__32394__auto__.call(null);
(statearr_33331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___33510);

return statearr_33331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(__33488,c__32393__auto___33510,G__33250_33489,n__19629__auto___33487,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__33534 = (__33488 + (1));
__33488 = G__33534;
continue;
} else {
}
break;
}

var c__32393__auto___33535 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___33535,jobs,results,process,async){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___33535,jobs,results,process,async){
return (function (state_33356){
var state_val_33357 = (state_33356[(1)]);
if((state_val_33357 === (1))){
var state_33356__$1 = state_33356;
var statearr_33358_33538 = state_33356__$1;
(statearr_33358_33538[(2)] = null);

(statearr_33358_33538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (2))){
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33356__$1,(4),from);
} else {
if((state_val_33357 === (3))){
var inst_33354 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33356__$1,inst_33354);
} else {
if((state_val_33357 === (4))){
var inst_33337 = (state_33356[(7)]);
var inst_33337__$1 = (state_33356[(2)]);
var inst_33338 = (inst_33337__$1 == null);
var state_33356__$1 = (function (){var statearr_33361 = state_33356;
(statearr_33361[(7)] = inst_33337__$1);

return statearr_33361;
})();
if(cljs.core.truth_(inst_33338)){
var statearr_33362_33543 = state_33356__$1;
(statearr_33362_33543[(1)] = (5));

} else {
var statearr_33363_33546 = state_33356__$1;
(statearr_33363_33546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (5))){
var inst_33340 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33356__$1 = state_33356;
var statearr_33364_33549 = state_33356__$1;
(statearr_33364_33549[(2)] = inst_33340);

(statearr_33364_33549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (6))){
var inst_33337 = (state_33356[(7)]);
var inst_33342 = (state_33356[(8)]);
var inst_33342__$1 = cljs.core.async.chan.call(null,(1));
var inst_33343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33344 = [inst_33337,inst_33342__$1];
var inst_33345 = (new cljs.core.PersistentVector(null,2,(5),inst_33343,inst_33344,null));
var state_33356__$1 = (function (){var statearr_33365 = state_33356;
(statearr_33365[(8)] = inst_33342__$1);

return statearr_33365;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33356__$1,(8),jobs,inst_33345);
} else {
if((state_val_33357 === (7))){
var inst_33352 = (state_33356[(2)]);
var state_33356__$1 = state_33356;
var statearr_33366_33558 = state_33356__$1;
(statearr_33366_33558[(2)] = inst_33352);

(statearr_33366_33558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33357 === (8))){
var inst_33342 = (state_33356[(8)]);
var inst_33347 = (state_33356[(2)]);
var state_33356__$1 = (function (){var statearr_33367 = state_33356;
(statearr_33367[(9)] = inst_33347);

return statearr_33367;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33356__$1,(9),results,inst_33342);
} else {
if((state_val_33357 === (9))){
var inst_33349 = (state_33356[(2)]);
var state_33356__$1 = (function (){var statearr_33368 = state_33356;
(statearr_33368[(10)] = inst_33349);

return statearr_33368;
})();
var statearr_33369_33581 = state_33356__$1;
(statearr_33369_33581[(2)] = null);

(statearr_33369_33581[(1)] = (2));


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
});})(c__32393__auto___33535,jobs,results,process,async))
;
return ((function (switch__32005__auto__,c__32393__auto___33535,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0 = (function (){
var statearr_33373 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__);

(statearr_33373[(1)] = (1));

return statearr_33373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1 = (function (state_33356){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33374){if((e33374 instanceof Object)){
var ex__32009__auto__ = e33374;
var statearr_33375_33586 = state_33356;
(statearr_33375_33586[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33588 = state_33356;
state_33356 = G__33588;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = function(state_33356){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1.call(this,state_33356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___33535,jobs,results,process,async))
})();
var state__32395__auto__ = (function (){var statearr_33376 = f__32394__auto__.call(null);
(statearr_33376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___33535);

return statearr_33376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___33535,jobs,results,process,async))
);


var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__,jobs,results,process,async){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__,jobs,results,process,async){
return (function (state_33414){
var state_val_33415 = (state_33414[(1)]);
if((state_val_33415 === (7))){
var inst_33410 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33416_33597 = state_33414__$1;
(statearr_33416_33597[(2)] = inst_33410);

(statearr_33416_33597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (20))){
var state_33414__$1 = state_33414;
var statearr_33417_33598 = state_33414__$1;
(statearr_33417_33598[(2)] = null);

(statearr_33417_33598[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (1))){
var state_33414__$1 = state_33414;
var statearr_33418_33603 = state_33414__$1;
(statearr_33418_33603[(2)] = null);

(statearr_33418_33603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (4))){
var inst_33379 = (state_33414[(7)]);
var inst_33379__$1 = (state_33414[(2)]);
var inst_33380 = (inst_33379__$1 == null);
var state_33414__$1 = (function (){var statearr_33419 = state_33414;
(statearr_33419[(7)] = inst_33379__$1);

return statearr_33419;
})();
if(cljs.core.truth_(inst_33380)){
var statearr_33420_33604 = state_33414__$1;
(statearr_33420_33604[(1)] = (5));

} else {
var statearr_33421_33605 = state_33414__$1;
(statearr_33421_33605[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (15))){
var inst_33392 = (state_33414[(8)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33414__$1,(18),to,inst_33392);
} else {
if((state_val_33415 === (21))){
var inst_33405 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33422_33606 = state_33414__$1;
(statearr_33422_33606[(2)] = inst_33405);

(statearr_33422_33606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (13))){
var inst_33407 = (state_33414[(2)]);
var state_33414__$1 = (function (){var statearr_33423 = state_33414;
(statearr_33423[(9)] = inst_33407);

return statearr_33423;
})();
var statearr_33424_33607 = state_33414__$1;
(statearr_33424_33607[(2)] = null);

(statearr_33424_33607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (6))){
var inst_33379 = (state_33414[(7)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33414__$1,(11),inst_33379);
} else {
if((state_val_33415 === (17))){
var inst_33400 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
if(cljs.core.truth_(inst_33400)){
var statearr_33425_33608 = state_33414__$1;
(statearr_33425_33608[(1)] = (19));

} else {
var statearr_33426_33609 = state_33414__$1;
(statearr_33426_33609[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (3))){
var inst_33412 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33414__$1,inst_33412);
} else {
if((state_val_33415 === (12))){
var inst_33389 = (state_33414[(10)]);
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33414__$1,(14),inst_33389);
} else {
if((state_val_33415 === (2))){
var state_33414__$1 = state_33414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33414__$1,(4),results);
} else {
if((state_val_33415 === (19))){
var state_33414__$1 = state_33414;
var statearr_33427_33610 = state_33414__$1;
(statearr_33427_33610[(2)] = null);

(statearr_33427_33610[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (11))){
var inst_33389 = (state_33414[(2)]);
var state_33414__$1 = (function (){var statearr_33428 = state_33414;
(statearr_33428[(10)] = inst_33389);

return statearr_33428;
})();
var statearr_33429_33611 = state_33414__$1;
(statearr_33429_33611[(2)] = null);

(statearr_33429_33611[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (9))){
var state_33414__$1 = state_33414;
var statearr_33430_33612 = state_33414__$1;
(statearr_33430_33612[(2)] = null);

(statearr_33430_33612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (5))){
var state_33414__$1 = state_33414;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33431_33615 = state_33414__$1;
(statearr_33431_33615[(1)] = (8));

} else {
var statearr_33432_33616 = state_33414__$1;
(statearr_33432_33616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (14))){
var inst_33392 = (state_33414[(8)]);
var inst_33394 = (state_33414[(11)]);
var inst_33392__$1 = (state_33414[(2)]);
var inst_33393 = (inst_33392__$1 == null);
var inst_33394__$1 = cljs.core.not.call(null,inst_33393);
var state_33414__$1 = (function (){var statearr_33433 = state_33414;
(statearr_33433[(8)] = inst_33392__$1);

(statearr_33433[(11)] = inst_33394__$1);

return statearr_33433;
})();
if(inst_33394__$1){
var statearr_33434_33623 = state_33414__$1;
(statearr_33434_33623[(1)] = (15));

} else {
var statearr_33435_33624 = state_33414__$1;
(statearr_33435_33624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (16))){
var inst_33394 = (state_33414[(11)]);
var state_33414__$1 = state_33414;
var statearr_33436_33631 = state_33414__$1;
(statearr_33436_33631[(2)] = inst_33394);

(statearr_33436_33631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (10))){
var inst_33386 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33437_33633 = state_33414__$1;
(statearr_33437_33633[(2)] = inst_33386);

(statearr_33437_33633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (18))){
var inst_33397 = (state_33414[(2)]);
var state_33414__$1 = state_33414;
var statearr_33438_33634 = state_33414__$1;
(statearr_33438_33634[(2)] = inst_33397);

(statearr_33438_33634[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33415 === (8))){
var inst_33383 = cljs.core.async.close_BANG_.call(null,to);
var state_33414__$1 = state_33414;
var statearr_33439_33640 = state_33414__$1;
(statearr_33439_33640[(2)] = inst_33383);

(statearr_33439_33640[(1)] = (10));


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
});})(c__32393__auto__,jobs,results,process,async))
;
return ((function (switch__32005__auto__,c__32393__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0 = (function (){
var statearr_33448 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33448[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__);

(statearr_33448[(1)] = (1));

return statearr_33448;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1 = (function (state_33414){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33449){if((e33449 instanceof Object)){
var ex__32009__auto__ = e33449;
var statearr_33450_33641 = state_33414;
(statearr_33450_33641[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33642 = state_33414;
state_33414 = G__33642;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__ = function(state_33414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1.call(this,state_33414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32006__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__,jobs,results,process,async))
})();
var state__32395__auto__ = (function (){var statearr_33451 = f__32394__auto__.call(null);
(statearr_33451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_33451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__,jobs,results,process,async))
);

return c__32393__auto__;
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
var args33643 = [];
var len__19784__auto___33653 = arguments.length;
var i__19785__auto___33654 = (0);
while(true){
if((i__19785__auto___33654 < len__19784__auto___33653)){
args33643.push((arguments[i__19785__auto___33654]));

var G__33657 = (i__19785__auto___33654 + (1));
i__19785__auto___33654 = G__33657;
continue;
} else {
}
break;
}

var G__33650 = args33643.length;
switch (G__33650) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33643.length)].join('')));

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
var args33663 = [];
var len__19784__auto___33668 = arguments.length;
var i__19785__auto___33671 = (0);
while(true){
if((i__19785__auto___33671 < len__19784__auto___33668)){
args33663.push((arguments[i__19785__auto___33671]));

var G__33674 = (i__19785__auto___33671 + (1));
i__19785__auto___33671 = G__33674;
continue;
} else {
}
break;
}

var G__33667 = args33663.length;
switch (G__33667) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33663.length)].join('')));

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
var args33682 = [];
var len__19784__auto___33745 = arguments.length;
var i__19785__auto___33746 = (0);
while(true){
if((i__19785__auto___33746 < len__19784__auto___33745)){
args33682.push((arguments[i__19785__auto___33746]));

var G__33747 = (i__19785__auto___33746 + (1));
i__19785__auto___33746 = G__33747;
continue;
} else {
}
break;
}

var G__33684 = args33682.length;
switch (G__33684) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33682.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32393__auto___33749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___33749,tc,fc){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___33749,tc,fc){
return (function (state_33710){
var state_val_33711 = (state_33710[(1)]);
if((state_val_33711 === (7))){
var inst_33706 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33712_33757 = state_33710__$1;
(statearr_33712_33757[(2)] = inst_33706);

(statearr_33712_33757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (1))){
var state_33710__$1 = state_33710;
var statearr_33713_33760 = state_33710__$1;
(statearr_33713_33760[(2)] = null);

(statearr_33713_33760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (4))){
var inst_33687 = (state_33710[(7)]);
var inst_33687__$1 = (state_33710[(2)]);
var inst_33688 = (inst_33687__$1 == null);
var state_33710__$1 = (function (){var statearr_33714 = state_33710;
(statearr_33714[(7)] = inst_33687__$1);

return statearr_33714;
})();
if(cljs.core.truth_(inst_33688)){
var statearr_33715_33765 = state_33710__$1;
(statearr_33715_33765[(1)] = (5));

} else {
var statearr_33716_33766 = state_33710__$1;
(statearr_33716_33766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (13))){
var state_33710__$1 = state_33710;
var statearr_33717_33767 = state_33710__$1;
(statearr_33717_33767[(2)] = null);

(statearr_33717_33767[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (6))){
var inst_33687 = (state_33710[(7)]);
var inst_33693 = p.call(null,inst_33687);
var state_33710__$1 = state_33710;
if(cljs.core.truth_(inst_33693)){
var statearr_33718_33768 = state_33710__$1;
(statearr_33718_33768[(1)] = (9));

} else {
var statearr_33719_33769 = state_33710__$1;
(statearr_33719_33769[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (3))){
var inst_33708 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33710__$1,inst_33708);
} else {
if((state_val_33711 === (12))){
var state_33710__$1 = state_33710;
var statearr_33720_33770 = state_33710__$1;
(statearr_33720_33770[(2)] = null);

(statearr_33720_33770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (2))){
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33710__$1,(4),ch);
} else {
if((state_val_33711 === (11))){
var inst_33687 = (state_33710[(7)]);
var inst_33697 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33710__$1,(8),inst_33697,inst_33687);
} else {
if((state_val_33711 === (9))){
var state_33710__$1 = state_33710;
var statearr_33721_33776 = state_33710__$1;
(statearr_33721_33776[(2)] = tc);

(statearr_33721_33776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (5))){
var inst_33690 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33691 = cljs.core.async.close_BANG_.call(null,fc);
var state_33710__$1 = (function (){var statearr_33722 = state_33710;
(statearr_33722[(8)] = inst_33690);

return statearr_33722;
})();
var statearr_33723_33777 = state_33710__$1;
(statearr_33723_33777[(2)] = inst_33691);

(statearr_33723_33777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (14))){
var inst_33704 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
var statearr_33725_33778 = state_33710__$1;
(statearr_33725_33778[(2)] = inst_33704);

(statearr_33725_33778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (10))){
var state_33710__$1 = state_33710;
var statearr_33726_33779 = state_33710__$1;
(statearr_33726_33779[(2)] = fc);

(statearr_33726_33779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33711 === (8))){
var inst_33699 = (state_33710[(2)]);
var state_33710__$1 = state_33710;
if(cljs.core.truth_(inst_33699)){
var statearr_33727_33780 = state_33710__$1;
(statearr_33727_33780[(1)] = (12));

} else {
var statearr_33728_33781 = state_33710__$1;
(statearr_33728_33781[(1)] = (13));

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
});})(c__32393__auto___33749,tc,fc))
;
return ((function (switch__32005__auto__,c__32393__auto___33749,tc,fc){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_33736 = [null,null,null,null,null,null,null,null,null];
(statearr_33736[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_33736[(1)] = (1));

return statearr_33736;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_33710){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33738){if((e33738 instanceof Object)){
var ex__32009__auto__ = e33738;
var statearr_33740_33782 = state_33710;
(statearr_33740_33782[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33785 = state_33710;
state_33710 = G__33785;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_33710){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_33710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___33749,tc,fc))
})();
var state__32395__auto__ = (function (){var statearr_33743 = f__32394__auto__.call(null);
(statearr_33743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___33749);

return statearr_33743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___33749,tc,fc))
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
var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__){
return (function (state_33858){
var state_val_33859 = (state_33858[(1)]);
if((state_val_33859 === (7))){
var inst_33854 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
var statearr_33860_33881 = state_33858__$1;
(statearr_33860_33881[(2)] = inst_33854);

(statearr_33860_33881[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (1))){
var inst_33835 = init;
var state_33858__$1 = (function (){var statearr_33861 = state_33858;
(statearr_33861[(7)] = inst_33835);

return statearr_33861;
})();
var statearr_33862_33884 = state_33858__$1;
(statearr_33862_33884[(2)] = null);

(statearr_33862_33884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (4))){
var inst_33841 = (state_33858[(8)]);
var inst_33841__$1 = (state_33858[(2)]);
var inst_33842 = (inst_33841__$1 == null);
var state_33858__$1 = (function (){var statearr_33863 = state_33858;
(statearr_33863[(8)] = inst_33841__$1);

return statearr_33863;
})();
if(cljs.core.truth_(inst_33842)){
var statearr_33864_33891 = state_33858__$1;
(statearr_33864_33891[(1)] = (5));

} else {
var statearr_33865_33892 = state_33858__$1;
(statearr_33865_33892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (6))){
var inst_33841 = (state_33858[(8)]);
var inst_33845 = (state_33858[(9)]);
var inst_33835 = (state_33858[(7)]);
var inst_33845__$1 = f.call(null,inst_33835,inst_33841);
var inst_33846 = cljs.core.reduced_QMARK_.call(null,inst_33845__$1);
var state_33858__$1 = (function (){var statearr_33866 = state_33858;
(statearr_33866[(9)] = inst_33845__$1);

return statearr_33866;
})();
if(inst_33846){
var statearr_33867_33893 = state_33858__$1;
(statearr_33867_33893[(1)] = (8));

} else {
var statearr_33868_33894 = state_33858__$1;
(statearr_33868_33894[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (3))){
var inst_33856 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33858__$1,inst_33856);
} else {
if((state_val_33859 === (2))){
var state_33858__$1 = state_33858;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33858__$1,(4),ch);
} else {
if((state_val_33859 === (9))){
var inst_33845 = (state_33858[(9)]);
var inst_33835 = inst_33845;
var state_33858__$1 = (function (){var statearr_33869 = state_33858;
(statearr_33869[(7)] = inst_33835);

return statearr_33869;
})();
var statearr_33870_33895 = state_33858__$1;
(statearr_33870_33895[(2)] = null);

(statearr_33870_33895[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (5))){
var inst_33835 = (state_33858[(7)]);
var state_33858__$1 = state_33858;
var statearr_33871_33896 = state_33858__$1;
(statearr_33871_33896[(2)] = inst_33835);

(statearr_33871_33896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (10))){
var inst_33852 = (state_33858[(2)]);
var state_33858__$1 = state_33858;
var statearr_33872_33898 = state_33858__$1;
(statearr_33872_33898[(2)] = inst_33852);

(statearr_33872_33898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33859 === (8))){
var inst_33845 = (state_33858[(9)]);
var inst_33848 = cljs.core.deref.call(null,inst_33845);
var state_33858__$1 = state_33858;
var statearr_33873_33900 = state_33858__$1;
(statearr_33873_33900[(2)] = inst_33848);

(statearr_33873_33900[(1)] = (10));


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
});})(c__32393__auto__))
;
return ((function (switch__32005__auto__,c__32393__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32006__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32006__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$reduce_$_state_machine__32006__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$reduce_$_state_machine__32006__auto____1 = (function (state_33858){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33858);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33878){if((e33878 instanceof Object)){
var ex__32009__auto__ = e33878;
var statearr_33879_33905 = state_33858;
(statearr_33879_33905[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33858);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33878;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33907 = state_33858;
state_33858 = G__33907;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32006__auto__ = function(state_33858){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32006__auto____1.call(this,state_33858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32006__auto____0;
cljs$core$async$reduce_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32006__auto____1;
return cljs$core$async$reduce_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__))
})();
var state__32395__auto__ = (function (){var statearr_33880 = f__32394__auto__.call(null);
(statearr_33880[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_33880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__))
);

return c__32393__auto__;
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
var args33908 = [];
var len__19784__auto___33975 = arguments.length;
var i__19785__auto___33976 = (0);
while(true){
if((i__19785__auto___33976 < len__19784__auto___33975)){
args33908.push((arguments[i__19785__auto___33976]));

var G__33977 = (i__19785__auto___33976 + (1));
i__19785__auto___33976 = G__33977;
continue;
} else {
}
break;
}

var G__33910 = args33908.length;
switch (G__33910) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33908.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__){
return (function (state_33945){
var state_val_33946 = (state_33945[(1)]);
if((state_val_33946 === (7))){
var inst_33921 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33948_33979 = state_33945__$1;
(statearr_33948_33979[(2)] = inst_33921);

(statearr_33948_33979[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (1))){
var inst_33911 = cljs.core.seq.call(null,coll);
var inst_33912 = inst_33911;
var state_33945__$1 = (function (){var statearr_33951 = state_33945;
(statearr_33951[(7)] = inst_33912);

return statearr_33951;
})();
var statearr_33952_33980 = state_33945__$1;
(statearr_33952_33980[(2)] = null);

(statearr_33952_33980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (4))){
var inst_33912 = (state_33945[(7)]);
var inst_33917 = cljs.core.first.call(null,inst_33912);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33945__$1,(7),ch,inst_33917);
} else {
if((state_val_33946 === (13))){
var inst_33937 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33954_33981 = state_33945__$1;
(statearr_33954_33981[(2)] = inst_33937);

(statearr_33954_33981[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (6))){
var inst_33928 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
if(cljs.core.truth_(inst_33928)){
var statearr_33955_33982 = state_33945__$1;
(statearr_33955_33982[(1)] = (8));

} else {
var statearr_33956_33983 = state_33945__$1;
(statearr_33956_33983[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (3))){
var inst_33942 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33945__$1,inst_33942);
} else {
if((state_val_33946 === (12))){
var state_33945__$1 = state_33945;
var statearr_33957_33984 = state_33945__$1;
(statearr_33957_33984[(2)] = null);

(statearr_33957_33984[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (2))){
var inst_33912 = (state_33945[(7)]);
var state_33945__$1 = state_33945;
if(cljs.core.truth_(inst_33912)){
var statearr_33958_33985 = state_33945__$1;
(statearr_33958_33985[(1)] = (4));

} else {
var statearr_33959_33986 = state_33945__$1;
(statearr_33959_33986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (11))){
var inst_33934 = cljs.core.async.close_BANG_.call(null,ch);
var state_33945__$1 = state_33945;
var statearr_33960_33987 = state_33945__$1;
(statearr_33960_33987[(2)] = inst_33934);

(statearr_33960_33987[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (9))){
var state_33945__$1 = state_33945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33961_33988 = state_33945__$1;
(statearr_33961_33988[(1)] = (11));

} else {
var statearr_33962_33989 = state_33945__$1;
(statearr_33962_33989[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (5))){
var inst_33912 = (state_33945[(7)]);
var state_33945__$1 = state_33945;
var statearr_33963_33990 = state_33945__$1;
(statearr_33963_33990[(2)] = inst_33912);

(statearr_33963_33990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (10))){
var inst_33939 = (state_33945[(2)]);
var state_33945__$1 = state_33945;
var statearr_33964_33991 = state_33945__$1;
(statearr_33964_33991[(2)] = inst_33939);

(statearr_33964_33991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33946 === (8))){
var inst_33912 = (state_33945[(7)]);
var inst_33930 = cljs.core.next.call(null,inst_33912);
var inst_33912__$1 = inst_33930;
var state_33945__$1 = (function (){var statearr_33965 = state_33945;
(statearr_33965[(7)] = inst_33912__$1);

return statearr_33965;
})();
var statearr_33966_33992 = state_33945__$1;
(statearr_33966_33992[(2)] = null);

(statearr_33966_33992[(1)] = (2));


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
});})(c__32393__auto__))
;
return ((function (switch__32005__auto__,c__32393__auto__){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_33971 = [null,null,null,null,null,null,null,null];
(statearr_33971[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_33971[(1)] = (1));

return statearr_33971;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_33945){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_33945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e33972){if((e33972 instanceof Object)){
var ex__32009__auto__ = e33972;
var statearr_33973_33995 = state_33945;
(statearr_33973_33995[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33972;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33996 = state_33945;
state_33945 = G__33996;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_33945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_33945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__))
})();
var state__32395__auto__ = (function (){var statearr_33974 = f__32394__auto__.call(null);
(statearr_33974[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__))
);

return c__32393__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34260 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34260 = (function (mult,ch,cs,meta34261){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta34261 = meta34261;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34262,meta34261__$1){
var self__ = this;
var _34262__$1 = this;
return (new cljs.core.async.t_cljs$core$async34260(self__.mult,self__.ch,self__.cs,meta34261__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34262){
var self__ = this;
var _34262__$1 = this;
return self__.meta34261;
});})(cs))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34260.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34260.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34261","meta34261",880662366,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34260.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34260.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34260";

cljs.core.async.t_cljs$core$async34260.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async34260");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34260 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34260(mult__$1,ch__$1,cs__$1,meta34261){
return (new cljs.core.async.t_cljs$core$async34260(mult__$1,ch__$1,cs__$1,meta34261));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34260(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32393__auto___34502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___34502,cs,m,dchan,dctr,done){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___34502,cs,m,dchan,dctr,done){
return (function (state_34407){
var state_val_34411 = (state_34407[(1)]);
if((state_val_34411 === (7))){
var inst_34399 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34412_34505 = state_34407__$1;
(statearr_34412_34505[(2)] = inst_34399);

(statearr_34412_34505[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (20))){
var inst_34301 = (state_34407[(7)]);
var inst_34311 = cljs.core.first.call(null,inst_34301);
var inst_34312 = cljs.core.nth.call(null,inst_34311,(0),null);
var inst_34313 = cljs.core.nth.call(null,inst_34311,(1),null);
var state_34407__$1 = (function (){var statearr_34413 = state_34407;
(statearr_34413[(8)] = inst_34312);

return statearr_34413;
})();
if(cljs.core.truth_(inst_34313)){
var statearr_34414_34510 = state_34407__$1;
(statearr_34414_34510[(1)] = (22));

} else {
var statearr_34415_34511 = state_34407__$1;
(statearr_34415_34511[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (27))){
var inst_34349 = (state_34407[(9)]);
var inst_34344 = (state_34407[(10)]);
var inst_34265 = (state_34407[(11)]);
var inst_34342 = (state_34407[(12)]);
var inst_34349__$1 = cljs.core._nth.call(null,inst_34342,inst_34344);
var inst_34350 = cljs.core.async.put_BANG_.call(null,inst_34349__$1,inst_34265,done);
var state_34407__$1 = (function (){var statearr_34416 = state_34407;
(statearr_34416[(9)] = inst_34349__$1);

return statearr_34416;
})();
if(cljs.core.truth_(inst_34350)){
var statearr_34417_34522 = state_34407__$1;
(statearr_34417_34522[(1)] = (30));

} else {
var statearr_34418_34523 = state_34407__$1;
(statearr_34418_34523[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (1))){
var state_34407__$1 = state_34407;
var statearr_34419_34524 = state_34407__$1;
(statearr_34419_34524[(2)] = null);

(statearr_34419_34524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (24))){
var inst_34301 = (state_34407[(7)]);
var inst_34318 = (state_34407[(2)]);
var inst_34319 = cljs.core.next.call(null,inst_34301);
var inst_34274 = inst_34319;
var inst_34275 = null;
var inst_34276 = (0);
var inst_34277 = (0);
var state_34407__$1 = (function (){var statearr_34420 = state_34407;
(statearr_34420[(13)] = inst_34274);

(statearr_34420[(14)] = inst_34275);

(statearr_34420[(15)] = inst_34318);

(statearr_34420[(16)] = inst_34277);

(statearr_34420[(17)] = inst_34276);

return statearr_34420;
})();
var statearr_34421_34527 = state_34407__$1;
(statearr_34421_34527[(2)] = null);

(statearr_34421_34527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (39))){
var state_34407__$1 = state_34407;
var statearr_34425_34528 = state_34407__$1;
(statearr_34425_34528[(2)] = null);

(statearr_34425_34528[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (4))){
var inst_34265 = (state_34407[(11)]);
var inst_34265__$1 = (state_34407[(2)]);
var inst_34266 = (inst_34265__$1 == null);
var state_34407__$1 = (function (){var statearr_34426 = state_34407;
(statearr_34426[(11)] = inst_34265__$1);

return statearr_34426;
})();
if(cljs.core.truth_(inst_34266)){
var statearr_34427_34529 = state_34407__$1;
(statearr_34427_34529[(1)] = (5));

} else {
var statearr_34428_34530 = state_34407__$1;
(statearr_34428_34530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (15))){
var inst_34274 = (state_34407[(13)]);
var inst_34275 = (state_34407[(14)]);
var inst_34277 = (state_34407[(16)]);
var inst_34276 = (state_34407[(17)]);
var inst_34294 = (state_34407[(2)]);
var inst_34297 = (inst_34277 + (1));
var tmp34422 = inst_34274;
var tmp34423 = inst_34275;
var tmp34424 = inst_34276;
var inst_34274__$1 = tmp34422;
var inst_34275__$1 = tmp34423;
var inst_34276__$1 = tmp34424;
var inst_34277__$1 = inst_34297;
var state_34407__$1 = (function (){var statearr_34429 = state_34407;
(statearr_34429[(13)] = inst_34274__$1);

(statearr_34429[(14)] = inst_34275__$1);

(statearr_34429[(18)] = inst_34294);

(statearr_34429[(16)] = inst_34277__$1);

(statearr_34429[(17)] = inst_34276__$1);

return statearr_34429;
})();
var statearr_34430_34531 = state_34407__$1;
(statearr_34430_34531[(2)] = null);

(statearr_34430_34531[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (21))){
var inst_34322 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34434_34532 = state_34407__$1;
(statearr_34434_34532[(2)] = inst_34322);

(statearr_34434_34532[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (31))){
var inst_34349 = (state_34407[(9)]);
var inst_34353 = done.call(null,null);
var inst_34354 = cljs.core.async.untap_STAR_.call(null,m,inst_34349);
var state_34407__$1 = (function (){var statearr_34435 = state_34407;
(statearr_34435[(19)] = inst_34353);

return statearr_34435;
})();
var statearr_34436_34533 = state_34407__$1;
(statearr_34436_34533[(2)] = inst_34354);

(statearr_34436_34533[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (32))){
var inst_34341 = (state_34407[(20)]);
var inst_34344 = (state_34407[(10)]);
var inst_34342 = (state_34407[(12)]);
var inst_34343 = (state_34407[(21)]);
var inst_34356 = (state_34407[(2)]);
var inst_34357 = (inst_34344 + (1));
var tmp34431 = inst_34341;
var tmp34432 = inst_34342;
var tmp34433 = inst_34343;
var inst_34341__$1 = tmp34431;
var inst_34342__$1 = tmp34432;
var inst_34343__$1 = tmp34433;
var inst_34344__$1 = inst_34357;
var state_34407__$1 = (function (){var statearr_34437 = state_34407;
(statearr_34437[(22)] = inst_34356);

(statearr_34437[(20)] = inst_34341__$1);

(statearr_34437[(10)] = inst_34344__$1);

(statearr_34437[(12)] = inst_34342__$1);

(statearr_34437[(21)] = inst_34343__$1);

return statearr_34437;
})();
var statearr_34438_34534 = state_34407__$1;
(statearr_34438_34534[(2)] = null);

(statearr_34438_34534[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (40))){
var inst_34369 = (state_34407[(23)]);
var inst_34374 = done.call(null,null);
var inst_34375 = cljs.core.async.untap_STAR_.call(null,m,inst_34369);
var state_34407__$1 = (function (){var statearr_34439 = state_34407;
(statearr_34439[(24)] = inst_34374);

return statearr_34439;
})();
var statearr_34440_34535 = state_34407__$1;
(statearr_34440_34535[(2)] = inst_34375);

(statearr_34440_34535[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (33))){
var inst_34360 = (state_34407[(25)]);
var inst_34362 = cljs.core.chunked_seq_QMARK_.call(null,inst_34360);
var state_34407__$1 = state_34407;
if(inst_34362){
var statearr_34441_34536 = state_34407__$1;
(statearr_34441_34536[(1)] = (36));

} else {
var statearr_34442_34537 = state_34407__$1;
(statearr_34442_34537[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (13))){
var inst_34288 = (state_34407[(26)]);
var inst_34291 = cljs.core.async.close_BANG_.call(null,inst_34288);
var state_34407__$1 = state_34407;
var statearr_34443_34538 = state_34407__$1;
(statearr_34443_34538[(2)] = inst_34291);

(statearr_34443_34538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (22))){
var inst_34312 = (state_34407[(8)]);
var inst_34315 = cljs.core.async.close_BANG_.call(null,inst_34312);
var state_34407__$1 = state_34407;
var statearr_34444_34539 = state_34407__$1;
(statearr_34444_34539[(2)] = inst_34315);

(statearr_34444_34539[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (36))){
var inst_34360 = (state_34407[(25)]);
var inst_34364 = cljs.core.chunk_first.call(null,inst_34360);
var inst_34365 = cljs.core.chunk_rest.call(null,inst_34360);
var inst_34366 = cljs.core.count.call(null,inst_34364);
var inst_34341 = inst_34365;
var inst_34342 = inst_34364;
var inst_34343 = inst_34366;
var inst_34344 = (0);
var state_34407__$1 = (function (){var statearr_34445 = state_34407;
(statearr_34445[(20)] = inst_34341);

(statearr_34445[(10)] = inst_34344);

(statearr_34445[(12)] = inst_34342);

(statearr_34445[(21)] = inst_34343);

return statearr_34445;
})();
var statearr_34446_34540 = state_34407__$1;
(statearr_34446_34540[(2)] = null);

(statearr_34446_34540[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (41))){
var inst_34360 = (state_34407[(25)]);
var inst_34377 = (state_34407[(2)]);
var inst_34378 = cljs.core.next.call(null,inst_34360);
var inst_34341 = inst_34378;
var inst_34342 = null;
var inst_34343 = (0);
var inst_34344 = (0);
var state_34407__$1 = (function (){var statearr_34447 = state_34407;
(statearr_34447[(27)] = inst_34377);

(statearr_34447[(20)] = inst_34341);

(statearr_34447[(10)] = inst_34344);

(statearr_34447[(12)] = inst_34342);

(statearr_34447[(21)] = inst_34343);

return statearr_34447;
})();
var statearr_34448_34545 = state_34407__$1;
(statearr_34448_34545[(2)] = null);

(statearr_34448_34545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (43))){
var state_34407__$1 = state_34407;
var statearr_34449_34546 = state_34407__$1;
(statearr_34449_34546[(2)] = null);

(statearr_34449_34546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (29))){
var inst_34386 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34450_34549 = state_34407__$1;
(statearr_34450_34549[(2)] = inst_34386);

(statearr_34450_34549[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (44))){
var inst_34396 = (state_34407[(2)]);
var state_34407__$1 = (function (){var statearr_34451 = state_34407;
(statearr_34451[(28)] = inst_34396);

return statearr_34451;
})();
var statearr_34452_34550 = state_34407__$1;
(statearr_34452_34550[(2)] = null);

(statearr_34452_34550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (6))){
var inst_34333 = (state_34407[(29)]);
var inst_34332 = cljs.core.deref.call(null,cs);
var inst_34333__$1 = cljs.core.keys.call(null,inst_34332);
var inst_34334 = cljs.core.count.call(null,inst_34333__$1);
var inst_34335 = cljs.core.reset_BANG_.call(null,dctr,inst_34334);
var inst_34340 = cljs.core.seq.call(null,inst_34333__$1);
var inst_34341 = inst_34340;
var inst_34342 = null;
var inst_34343 = (0);
var inst_34344 = (0);
var state_34407__$1 = (function (){var statearr_34453 = state_34407;
(statearr_34453[(20)] = inst_34341);

(statearr_34453[(10)] = inst_34344);

(statearr_34453[(30)] = inst_34335);

(statearr_34453[(29)] = inst_34333__$1);

(statearr_34453[(12)] = inst_34342);

(statearr_34453[(21)] = inst_34343);

return statearr_34453;
})();
var statearr_34454_34551 = state_34407__$1;
(statearr_34454_34551[(2)] = null);

(statearr_34454_34551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (28))){
var inst_34360 = (state_34407[(25)]);
var inst_34341 = (state_34407[(20)]);
var inst_34360__$1 = cljs.core.seq.call(null,inst_34341);
var state_34407__$1 = (function (){var statearr_34455 = state_34407;
(statearr_34455[(25)] = inst_34360__$1);

return statearr_34455;
})();
if(inst_34360__$1){
var statearr_34456_34552 = state_34407__$1;
(statearr_34456_34552[(1)] = (33));

} else {
var statearr_34457_34553 = state_34407__$1;
(statearr_34457_34553[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (25))){
var inst_34344 = (state_34407[(10)]);
var inst_34343 = (state_34407[(21)]);
var inst_34346 = (inst_34344 < inst_34343);
var inst_34347 = inst_34346;
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34347)){
var statearr_34458_34554 = state_34407__$1;
(statearr_34458_34554[(1)] = (27));

} else {
var statearr_34459_34555 = state_34407__$1;
(statearr_34459_34555[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (34))){
var state_34407__$1 = state_34407;
var statearr_34460_34556 = state_34407__$1;
(statearr_34460_34556[(2)] = null);

(statearr_34460_34556[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (17))){
var state_34407__$1 = state_34407;
var statearr_34461_34557 = state_34407__$1;
(statearr_34461_34557[(2)] = null);

(statearr_34461_34557[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (3))){
var inst_34401 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34407__$1,inst_34401);
} else {
if((state_val_34411 === (12))){
var inst_34328 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34462_34558 = state_34407__$1;
(statearr_34462_34558[(2)] = inst_34328);

(statearr_34462_34558[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (2))){
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34407__$1,(4),ch);
} else {
if((state_val_34411 === (23))){
var state_34407__$1 = state_34407;
var statearr_34466_34559 = state_34407__$1;
(statearr_34466_34559[(2)] = null);

(statearr_34466_34559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (35))){
var inst_34384 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34467_34560 = state_34407__$1;
(statearr_34467_34560[(2)] = inst_34384);

(statearr_34467_34560[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (19))){
var inst_34301 = (state_34407[(7)]);
var inst_34305 = cljs.core.chunk_first.call(null,inst_34301);
var inst_34306 = cljs.core.chunk_rest.call(null,inst_34301);
var inst_34307 = cljs.core.count.call(null,inst_34305);
var inst_34274 = inst_34306;
var inst_34275 = inst_34305;
var inst_34276 = inst_34307;
var inst_34277 = (0);
var state_34407__$1 = (function (){var statearr_34468 = state_34407;
(statearr_34468[(13)] = inst_34274);

(statearr_34468[(14)] = inst_34275);

(statearr_34468[(16)] = inst_34277);

(statearr_34468[(17)] = inst_34276);

return statearr_34468;
})();
var statearr_34469_34561 = state_34407__$1;
(statearr_34469_34561[(2)] = null);

(statearr_34469_34561[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (11))){
var inst_34274 = (state_34407[(13)]);
var inst_34301 = (state_34407[(7)]);
var inst_34301__$1 = cljs.core.seq.call(null,inst_34274);
var state_34407__$1 = (function (){var statearr_34470 = state_34407;
(statearr_34470[(7)] = inst_34301__$1);

return statearr_34470;
})();
if(inst_34301__$1){
var statearr_34471_34562 = state_34407__$1;
(statearr_34471_34562[(1)] = (16));

} else {
var statearr_34472_34563 = state_34407__$1;
(statearr_34472_34563[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (9))){
var inst_34330 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34473_34564 = state_34407__$1;
(statearr_34473_34564[(2)] = inst_34330);

(statearr_34473_34564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (5))){
var inst_34272 = cljs.core.deref.call(null,cs);
var inst_34273 = cljs.core.seq.call(null,inst_34272);
var inst_34274 = inst_34273;
var inst_34275 = null;
var inst_34276 = (0);
var inst_34277 = (0);
var state_34407__$1 = (function (){var statearr_34474 = state_34407;
(statearr_34474[(13)] = inst_34274);

(statearr_34474[(14)] = inst_34275);

(statearr_34474[(16)] = inst_34277);

(statearr_34474[(17)] = inst_34276);

return statearr_34474;
})();
var statearr_34475_34565 = state_34407__$1;
(statearr_34475_34565[(2)] = null);

(statearr_34475_34565[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (14))){
var state_34407__$1 = state_34407;
var statearr_34476_34566 = state_34407__$1;
(statearr_34476_34566[(2)] = null);

(statearr_34476_34566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (45))){
var inst_34393 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34477_34568 = state_34407__$1;
(statearr_34477_34568[(2)] = inst_34393);

(statearr_34477_34568[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (26))){
var inst_34333 = (state_34407[(29)]);
var inst_34389 = (state_34407[(2)]);
var inst_34390 = cljs.core.seq.call(null,inst_34333);
var state_34407__$1 = (function (){var statearr_34478 = state_34407;
(statearr_34478[(31)] = inst_34389);

return statearr_34478;
})();
if(inst_34390){
var statearr_34479_34574 = state_34407__$1;
(statearr_34479_34574[(1)] = (42));

} else {
var statearr_34480_34575 = state_34407__$1;
(statearr_34480_34575[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (16))){
var inst_34301 = (state_34407[(7)]);
var inst_34303 = cljs.core.chunked_seq_QMARK_.call(null,inst_34301);
var state_34407__$1 = state_34407;
if(inst_34303){
var statearr_34481_34578 = state_34407__$1;
(statearr_34481_34578[(1)] = (19));

} else {
var statearr_34482_34580 = state_34407__$1;
(statearr_34482_34580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (38))){
var inst_34381 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34483_34583 = state_34407__$1;
(statearr_34483_34583[(2)] = inst_34381);

(statearr_34483_34583[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (30))){
var state_34407__$1 = state_34407;
var statearr_34485_34584 = state_34407__$1;
(statearr_34485_34584[(2)] = null);

(statearr_34485_34584[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (10))){
var inst_34275 = (state_34407[(14)]);
var inst_34277 = (state_34407[(16)]);
var inst_34287 = cljs.core._nth.call(null,inst_34275,inst_34277);
var inst_34288 = cljs.core.nth.call(null,inst_34287,(0),null);
var inst_34289 = cljs.core.nth.call(null,inst_34287,(1),null);
var state_34407__$1 = (function (){var statearr_34486 = state_34407;
(statearr_34486[(26)] = inst_34288);

return statearr_34486;
})();
if(cljs.core.truth_(inst_34289)){
var statearr_34487_34585 = state_34407__$1;
(statearr_34487_34585[(1)] = (13));

} else {
var statearr_34488_34586 = state_34407__$1;
(statearr_34488_34586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (18))){
var inst_34326 = (state_34407[(2)]);
var state_34407__$1 = state_34407;
var statearr_34489_34587 = state_34407__$1;
(statearr_34489_34587[(2)] = inst_34326);

(statearr_34489_34587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (42))){
var state_34407__$1 = state_34407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34407__$1,(45),dchan);
} else {
if((state_val_34411 === (37))){
var inst_34360 = (state_34407[(25)]);
var inst_34265 = (state_34407[(11)]);
var inst_34369 = (state_34407[(23)]);
var inst_34369__$1 = cljs.core.first.call(null,inst_34360);
var inst_34371 = cljs.core.async.put_BANG_.call(null,inst_34369__$1,inst_34265,done);
var state_34407__$1 = (function (){var statearr_34490 = state_34407;
(statearr_34490[(23)] = inst_34369__$1);

return statearr_34490;
})();
if(cljs.core.truth_(inst_34371)){
var statearr_34491_34591 = state_34407__$1;
(statearr_34491_34591[(1)] = (39));

} else {
var statearr_34492_34592 = state_34407__$1;
(statearr_34492_34592[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34411 === (8))){
var inst_34277 = (state_34407[(16)]);
var inst_34276 = (state_34407[(17)]);
var inst_34279 = (inst_34277 < inst_34276);
var inst_34280 = inst_34279;
var state_34407__$1 = state_34407;
if(cljs.core.truth_(inst_34280)){
var statearr_34493_34593 = state_34407__$1;
(statearr_34493_34593[(1)] = (10));

} else {
var statearr_34494_34594 = state_34407__$1;
(statearr_34494_34594[(1)] = (11));

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
});})(c__32393__auto___34502,cs,m,dchan,dctr,done))
;
return ((function (switch__32005__auto__,c__32393__auto___34502,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32006__auto__ = null;
var cljs$core$async$mult_$_state_machine__32006__auto____0 = (function (){
var statearr_34498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34498[(0)] = cljs$core$async$mult_$_state_machine__32006__auto__);

(statearr_34498[(1)] = (1));

return statearr_34498;
});
var cljs$core$async$mult_$_state_machine__32006__auto____1 = (function (state_34407){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_34407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e34499){if((e34499 instanceof Object)){
var ex__32009__auto__ = e34499;
var statearr_34500_34610 = state_34407;
(statearr_34500_34610[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34619 = state_34407;
state_34407 = G__34619;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32006__auto__ = function(state_34407){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32006__auto____1.call(this,state_34407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32006__auto____0;
cljs$core$async$mult_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32006__auto____1;
return cljs$core$async$mult_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___34502,cs,m,dchan,dctr,done))
})();
var state__32395__auto__ = (function (){var statearr_34501 = f__32394__auto__.call(null);
(statearr_34501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___34502);

return statearr_34501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___34502,cs,m,dchan,dctr,done))
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
var args34624 = [];
var len__19784__auto___34629 = arguments.length;
var i__19785__auto___34630 = (0);
while(true){
if((i__19785__auto___34630 < len__19784__auto___34629)){
args34624.push((arguments[i__19785__auto___34630]));

var G__34631 = (i__19785__auto___34630 + (1));
i__19785__auto___34630 = G__34631;
continue;
} else {
}
break;
}

var G__34626 = args34624.length;
switch (G__34626) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34624.length)].join('')));

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
var len__19784__auto___34650 = arguments.length;
var i__19785__auto___34652 = (0);
while(true){
if((i__19785__auto___34652 < len__19784__auto___34650)){
args__19791__auto__.push((arguments[i__19785__auto___34652]));

var G__34653 = (i__19785__auto___34652 + (1));
i__19785__auto___34652 = G__34653;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34644){
var map__34645 = p__34644;
var map__34645__$1 = ((((!((map__34645 == null)))?((((map__34645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34645):map__34645);
var opts = map__34645__$1;
var statearr_34647_34654 = state;
(statearr_34647_34654[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34645,map__34645__$1,opts){
return (function (val){
var statearr_34648_34656 = state;
(statearr_34648_34656[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34645,map__34645__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34649_34657 = state;
(statearr_34649_34657[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34640){
var G__34641 = cljs.core.first.call(null,seq34640);
var seq34640__$1 = cljs.core.next.call(null,seq34640);
var G__34642 = cljs.core.first.call(null,seq34640__$1);
var seq34640__$2 = cljs.core.next.call(null,seq34640__$1);
var G__34643 = cljs.core.first.call(null,seq34640__$2);
var seq34640__$3 = cljs.core.next.call(null,seq34640__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34641,G__34642,G__34643,seq34640__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34850 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34850 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34851){
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
this.meta34851 = meta34851;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34852,meta34851__$1){
var self__ = this;
var _34852__$1 = this;
return (new cljs.core.async.t_cljs$core$async34850(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34851__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34852){
var self__ = this;
var _34852__$1 = this;
return self__.meta34851;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34850.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34851","meta34851",-1952119241,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34850.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34850.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34850";

cljs.core.async.t_cljs$core$async34850.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async34850");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34850 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34850(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34851){
return (new cljs.core.async.t_cljs$core$async34850(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34851));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34850(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32393__auto___35041 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___35041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___35041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34950){
var state_val_34951 = (state_34950[(1)]);
if((state_val_34951 === (7))){
var inst_34868 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34952_35042 = state_34950__$1;
(statearr_34952_35042[(2)] = inst_34868);

(statearr_34952_35042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (20))){
var inst_34880 = (state_34950[(7)]);
var state_34950__$1 = state_34950;
var statearr_34953_35043 = state_34950__$1;
(statearr_34953_35043[(2)] = inst_34880);

(statearr_34953_35043[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (27))){
var state_34950__$1 = state_34950;
var statearr_34954_35044 = state_34950__$1;
(statearr_34954_35044[(2)] = null);

(statearr_34954_35044[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (1))){
var inst_34856 = (state_34950[(8)]);
var inst_34856__$1 = calc_state.call(null);
var inst_34858 = (inst_34856__$1 == null);
var inst_34859 = cljs.core.not.call(null,inst_34858);
var state_34950__$1 = (function (){var statearr_34955 = state_34950;
(statearr_34955[(8)] = inst_34856__$1);

return statearr_34955;
})();
if(inst_34859){
var statearr_34956_35045 = state_34950__$1;
(statearr_34956_35045[(1)] = (2));

} else {
var statearr_34957_35046 = state_34950__$1;
(statearr_34957_35046[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (24))){
var inst_34924 = (state_34950[(9)]);
var inst_34910 = (state_34950[(10)]);
var inst_34903 = (state_34950[(11)]);
var inst_34924__$1 = inst_34903.call(null,inst_34910);
var state_34950__$1 = (function (){var statearr_34958 = state_34950;
(statearr_34958[(9)] = inst_34924__$1);

return statearr_34958;
})();
if(cljs.core.truth_(inst_34924__$1)){
var statearr_34959_35047 = state_34950__$1;
(statearr_34959_35047[(1)] = (29));

} else {
var statearr_34960_35048 = state_34950__$1;
(statearr_34960_35048[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (4))){
var inst_34871 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34871)){
var statearr_34961_35049 = state_34950__$1;
(statearr_34961_35049[(1)] = (8));

} else {
var statearr_34962_35050 = state_34950__$1;
(statearr_34962_35050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (15))){
var inst_34897 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34897)){
var statearr_34963_35051 = state_34950__$1;
(statearr_34963_35051[(1)] = (19));

} else {
var statearr_34964_35052 = state_34950__$1;
(statearr_34964_35052[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (21))){
var inst_34902 = (state_34950[(12)]);
var inst_34902__$1 = (state_34950[(2)]);
var inst_34903 = cljs.core.get.call(null,inst_34902__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34904 = cljs.core.get.call(null,inst_34902__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34905 = cljs.core.get.call(null,inst_34902__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34950__$1 = (function (){var statearr_34965 = state_34950;
(statearr_34965[(11)] = inst_34903);

(statearr_34965[(12)] = inst_34902__$1);

(statearr_34965[(13)] = inst_34904);

return statearr_34965;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34950__$1,(22),inst_34905);
} else {
if((state_val_34951 === (31))){
var inst_34932 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34932)){
var statearr_34966_35053 = state_34950__$1;
(statearr_34966_35053[(1)] = (32));

} else {
var statearr_34967_35054 = state_34950__$1;
(statearr_34967_35054[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (32))){
var inst_34909 = (state_34950[(14)]);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34950__$1,(35),out,inst_34909);
} else {
if((state_val_34951 === (33))){
var inst_34902 = (state_34950[(12)]);
var inst_34880 = inst_34902;
var state_34950__$1 = (function (){var statearr_34968 = state_34950;
(statearr_34968[(7)] = inst_34880);

return statearr_34968;
})();
var statearr_34969_35055 = state_34950__$1;
(statearr_34969_35055[(2)] = null);

(statearr_34969_35055[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (13))){
var inst_34880 = (state_34950[(7)]);
var inst_34887 = inst_34880.cljs$lang$protocol_mask$partition0$;
var inst_34888 = (inst_34887 & (64));
var inst_34889 = inst_34880.cljs$core$ISeq$;
var inst_34890 = (inst_34888) || (inst_34889);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34890)){
var statearr_34970_35056 = state_34950__$1;
(statearr_34970_35056[(1)] = (16));

} else {
var statearr_34971_35057 = state_34950__$1;
(statearr_34971_35057[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (22))){
var inst_34910 = (state_34950[(10)]);
var inst_34909 = (state_34950[(14)]);
var inst_34908 = (state_34950[(2)]);
var inst_34909__$1 = cljs.core.nth.call(null,inst_34908,(0),null);
var inst_34910__$1 = cljs.core.nth.call(null,inst_34908,(1),null);
var inst_34911 = (inst_34909__$1 == null);
var inst_34912 = cljs.core._EQ_.call(null,inst_34910__$1,change);
var inst_34913 = (inst_34911) || (inst_34912);
var state_34950__$1 = (function (){var statearr_34972 = state_34950;
(statearr_34972[(10)] = inst_34910__$1);

(statearr_34972[(14)] = inst_34909__$1);

return statearr_34972;
})();
if(cljs.core.truth_(inst_34913)){
var statearr_34973_35058 = state_34950__$1;
(statearr_34973_35058[(1)] = (23));

} else {
var statearr_34974_35059 = state_34950__$1;
(statearr_34974_35059[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (36))){
var inst_34902 = (state_34950[(12)]);
var inst_34880 = inst_34902;
var state_34950__$1 = (function (){var statearr_34975 = state_34950;
(statearr_34975[(7)] = inst_34880);

return statearr_34975;
})();
var statearr_34976_35060 = state_34950__$1;
(statearr_34976_35060[(2)] = null);

(statearr_34976_35060[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (29))){
var inst_34924 = (state_34950[(9)]);
var state_34950__$1 = state_34950;
var statearr_34977_35061 = state_34950__$1;
(statearr_34977_35061[(2)] = inst_34924);

(statearr_34977_35061[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (6))){
var state_34950__$1 = state_34950;
var statearr_34978_35062 = state_34950__$1;
(statearr_34978_35062[(2)] = false);

(statearr_34978_35062[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (28))){
var inst_34920 = (state_34950[(2)]);
var inst_34921 = calc_state.call(null);
var inst_34880 = inst_34921;
var state_34950__$1 = (function (){var statearr_34979 = state_34950;
(statearr_34979[(15)] = inst_34920);

(statearr_34979[(7)] = inst_34880);

return statearr_34979;
})();
var statearr_34980_35063 = state_34950__$1;
(statearr_34980_35063[(2)] = null);

(statearr_34980_35063[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (25))){
var inst_34946 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34981_35064 = state_34950__$1;
(statearr_34981_35064[(2)] = inst_34946);

(statearr_34981_35064[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (34))){
var inst_34944 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34982_35065 = state_34950__$1;
(statearr_34982_35065[(2)] = inst_34944);

(statearr_34982_35065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (17))){
var state_34950__$1 = state_34950;
var statearr_34983_35066 = state_34950__$1;
(statearr_34983_35066[(2)] = false);

(statearr_34983_35066[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (3))){
var state_34950__$1 = state_34950;
var statearr_34984_35067 = state_34950__$1;
(statearr_34984_35067[(2)] = false);

(statearr_34984_35067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (12))){
var inst_34948 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34950__$1,inst_34948);
} else {
if((state_val_34951 === (2))){
var inst_34856 = (state_34950[(8)]);
var inst_34861 = inst_34856.cljs$lang$protocol_mask$partition0$;
var inst_34862 = (inst_34861 & (64));
var inst_34863 = inst_34856.cljs$core$ISeq$;
var inst_34864 = (inst_34862) || (inst_34863);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34864)){
var statearr_34985_35068 = state_34950__$1;
(statearr_34985_35068[(1)] = (5));

} else {
var statearr_34986_35069 = state_34950__$1;
(statearr_34986_35069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (23))){
var inst_34909 = (state_34950[(14)]);
var inst_34915 = (inst_34909 == null);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34915)){
var statearr_34987_35070 = state_34950__$1;
(statearr_34987_35070[(1)] = (26));

} else {
var statearr_34988_35071 = state_34950__$1;
(statearr_34988_35071[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (35))){
var inst_34935 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
if(cljs.core.truth_(inst_34935)){
var statearr_34989_35072 = state_34950__$1;
(statearr_34989_35072[(1)] = (36));

} else {
var statearr_34990_35073 = state_34950__$1;
(statearr_34990_35073[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (19))){
var inst_34880 = (state_34950[(7)]);
var inst_34899 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34880);
var state_34950__$1 = state_34950;
var statearr_34991_35074 = state_34950__$1;
(statearr_34991_35074[(2)] = inst_34899);

(statearr_34991_35074[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (11))){
var inst_34880 = (state_34950[(7)]);
var inst_34884 = (inst_34880 == null);
var inst_34885 = cljs.core.not.call(null,inst_34884);
var state_34950__$1 = state_34950;
if(inst_34885){
var statearr_34992_35075 = state_34950__$1;
(statearr_34992_35075[(1)] = (13));

} else {
var statearr_34993_35076 = state_34950__$1;
(statearr_34993_35076[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (9))){
var inst_34856 = (state_34950[(8)]);
var state_34950__$1 = state_34950;
var statearr_34994_35077 = state_34950__$1;
(statearr_34994_35077[(2)] = inst_34856);

(statearr_34994_35077[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (5))){
var state_34950__$1 = state_34950;
var statearr_34995_35078 = state_34950__$1;
(statearr_34995_35078[(2)] = true);

(statearr_34995_35078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (14))){
var state_34950__$1 = state_34950;
var statearr_34996_35079 = state_34950__$1;
(statearr_34996_35079[(2)] = false);

(statearr_34996_35079[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (26))){
var inst_34910 = (state_34950[(10)]);
var inst_34917 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34910);
var state_34950__$1 = state_34950;
var statearr_34997_35080 = state_34950__$1;
(statearr_34997_35080[(2)] = inst_34917);

(statearr_34997_35080[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (16))){
var state_34950__$1 = state_34950;
var statearr_34998_35081 = state_34950__$1;
(statearr_34998_35081[(2)] = true);

(statearr_34998_35081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (38))){
var inst_34940 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_34999_35082 = state_34950__$1;
(statearr_34999_35082[(2)] = inst_34940);

(statearr_34999_35082[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (30))){
var inst_34910 = (state_34950[(10)]);
var inst_34903 = (state_34950[(11)]);
var inst_34904 = (state_34950[(13)]);
var inst_34927 = cljs.core.empty_QMARK_.call(null,inst_34903);
var inst_34928 = inst_34904.call(null,inst_34910);
var inst_34929 = cljs.core.not.call(null,inst_34928);
var inst_34930 = (inst_34927) && (inst_34929);
var state_34950__$1 = state_34950;
var statearr_35000_35083 = state_34950__$1;
(statearr_35000_35083[(2)] = inst_34930);

(statearr_35000_35083[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (10))){
var inst_34856 = (state_34950[(8)]);
var inst_34876 = (state_34950[(2)]);
var inst_34877 = cljs.core.get.call(null,inst_34876,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34878 = cljs.core.get.call(null,inst_34876,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34879 = cljs.core.get.call(null,inst_34876,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34880 = inst_34856;
var state_34950__$1 = (function (){var statearr_35001 = state_34950;
(statearr_35001[(16)] = inst_34879);

(statearr_35001[(17)] = inst_34877);

(statearr_35001[(18)] = inst_34878);

(statearr_35001[(7)] = inst_34880);

return statearr_35001;
})();
var statearr_35002_35084 = state_34950__$1;
(statearr_35002_35084[(2)] = null);

(statearr_35002_35084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (18))){
var inst_34894 = (state_34950[(2)]);
var state_34950__$1 = state_34950;
var statearr_35003_35085 = state_34950__$1;
(statearr_35003_35085[(2)] = inst_34894);

(statearr_35003_35085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (37))){
var state_34950__$1 = state_34950;
var statearr_35004_35086 = state_34950__$1;
(statearr_35004_35086[(2)] = null);

(statearr_35004_35086[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34951 === (8))){
var inst_34856 = (state_34950[(8)]);
var inst_34873 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34856);
var state_34950__$1 = state_34950;
var statearr_35005_35087 = state_34950__$1;
(statearr_35005_35087[(2)] = inst_34873);

(statearr_35005_35087[(1)] = (10));


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
});})(c__32393__auto___35041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32005__auto__,c__32393__auto___35041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32006__auto__ = null;
var cljs$core$async$mix_$_state_machine__32006__auto____0 = (function (){
var statearr_35009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35009[(0)] = cljs$core$async$mix_$_state_machine__32006__auto__);

(statearr_35009[(1)] = (1));

return statearr_35009;
});
var cljs$core$async$mix_$_state_machine__32006__auto____1 = (function (state_34950){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_34950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e35011){if((e35011 instanceof Object)){
var ex__32009__auto__ = e35011;
var statearr_35012_35088 = state_34950;
(statearr_35012_35088[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35089 = state_34950;
state_34950 = G__35089;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32006__auto__ = function(state_34950){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32006__auto____1.call(this,state_34950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32006__auto____0;
cljs$core$async$mix_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32006__auto____1;
return cljs$core$async$mix_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___35041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32395__auto__ = (function (){var statearr_35014 = f__32394__auto__.call(null);
(statearr_35014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___35041);

return statearr_35014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___35041,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args35096 = [];
var len__19784__auto___35141 = arguments.length;
var i__19785__auto___35142 = (0);
while(true){
if((i__19785__auto___35142 < len__19784__auto___35141)){
args35096.push((arguments[i__19785__auto___35142]));

var G__35143 = (i__19785__auto___35142 + (1));
i__19785__auto___35142 = G__35143;
continue;
} else {
}
break;
}

var G__35119 = args35096.length;
switch (G__35119) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35096.length)].join('')));

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
var args35157 = [];
var len__19784__auto___35333 = arguments.length;
var i__19785__auto___35334 = (0);
while(true){
if((i__19785__auto___35334 < len__19784__auto___35333)){
args35157.push((arguments[i__19785__auto___35334]));

var G__35335 = (i__19785__auto___35334 + (1));
i__19785__auto___35334 = G__35335;
continue;
} else {
}
break;
}

var G__35168 = args35157.length;
switch (G__35168) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35157.length)].join('')));

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
return (function (p1__35156_SHARP_){
if(cljs.core.truth_(p1__35156_SHARP_.call(null,topic))){
return p1__35156_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35156_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18726__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35169 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35169 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35170){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35170 = meta35170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35171,meta35170__$1){
var self__ = this;
var _35171__$1 = this;
return (new cljs.core.async.t_cljs$core$async35169(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35170__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35171){
var self__ = this;
var _35171__$1 = this;
return self__.meta35170;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35169.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35169.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35170","meta35170",324215333,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35169.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35169.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35169";

cljs.core.async.t_cljs$core$async35169.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async35169");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35169 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35170){
return (new cljs.core.async.t_cljs$core$async35169(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35170));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35169(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32393__auto___35434 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___35434,mults,ensure_mult,p){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___35434,mults,ensure_mult,p){
return (function (state_35260){
var state_val_35261 = (state_35260[(1)]);
if((state_val_35261 === (7))){
var inst_35256 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35262_35436 = state_35260__$1;
(statearr_35262_35436[(2)] = inst_35256);

(statearr_35262_35436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (20))){
var state_35260__$1 = state_35260;
var statearr_35263_35440 = state_35260__$1;
(statearr_35263_35440[(2)] = null);

(statearr_35263_35440[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (1))){
var state_35260__$1 = state_35260;
var statearr_35264_35441 = state_35260__$1;
(statearr_35264_35441[(2)] = null);

(statearr_35264_35441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (24))){
var inst_35239 = (state_35260[(7)]);
var inst_35248 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35239);
var state_35260__$1 = state_35260;
var statearr_35265_35442 = state_35260__$1;
(statearr_35265_35442[(2)] = inst_35248);

(statearr_35265_35442[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (4))){
var inst_35191 = (state_35260[(8)]);
var inst_35191__$1 = (state_35260[(2)]);
var inst_35192 = (inst_35191__$1 == null);
var state_35260__$1 = (function (){var statearr_35266 = state_35260;
(statearr_35266[(8)] = inst_35191__$1);

return statearr_35266;
})();
if(cljs.core.truth_(inst_35192)){
var statearr_35267_35443 = state_35260__$1;
(statearr_35267_35443[(1)] = (5));

} else {
var statearr_35268_35444 = state_35260__$1;
(statearr_35268_35444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (15))){
var inst_35233 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35269_35445 = state_35260__$1;
(statearr_35269_35445[(2)] = inst_35233);

(statearr_35269_35445[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (21))){
var inst_35253 = (state_35260[(2)]);
var state_35260__$1 = (function (){var statearr_35270 = state_35260;
(statearr_35270[(9)] = inst_35253);

return statearr_35270;
})();
var statearr_35271_35446 = state_35260__$1;
(statearr_35271_35446[(2)] = null);

(statearr_35271_35446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (13))){
var inst_35215 = (state_35260[(10)]);
var inst_35217 = cljs.core.chunked_seq_QMARK_.call(null,inst_35215);
var state_35260__$1 = state_35260;
if(inst_35217){
var statearr_35272_35447 = state_35260__$1;
(statearr_35272_35447[(1)] = (16));

} else {
var statearr_35273_35448 = state_35260__$1;
(statearr_35273_35448[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (22))){
var inst_35245 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
if(cljs.core.truth_(inst_35245)){
var statearr_35274_35449 = state_35260__$1;
(statearr_35274_35449[(1)] = (23));

} else {
var statearr_35275_35450 = state_35260__$1;
(statearr_35275_35450[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (6))){
var inst_35239 = (state_35260[(7)]);
var inst_35241 = (state_35260[(11)]);
var inst_35191 = (state_35260[(8)]);
var inst_35239__$1 = topic_fn.call(null,inst_35191);
var inst_35240 = cljs.core.deref.call(null,mults);
var inst_35241__$1 = cljs.core.get.call(null,inst_35240,inst_35239__$1);
var state_35260__$1 = (function (){var statearr_35276 = state_35260;
(statearr_35276[(7)] = inst_35239__$1);

(statearr_35276[(11)] = inst_35241__$1);

return statearr_35276;
})();
if(cljs.core.truth_(inst_35241__$1)){
var statearr_35277_35451 = state_35260__$1;
(statearr_35277_35451[(1)] = (19));

} else {
var statearr_35278_35452 = state_35260__$1;
(statearr_35278_35452[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (25))){
var inst_35250 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35279_35453 = state_35260__$1;
(statearr_35279_35453[(2)] = inst_35250);

(statearr_35279_35453[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (17))){
var inst_35215 = (state_35260[(10)]);
var inst_35224 = cljs.core.first.call(null,inst_35215);
var inst_35225 = cljs.core.async.muxch_STAR_.call(null,inst_35224);
var inst_35226 = cljs.core.async.close_BANG_.call(null,inst_35225);
var inst_35227 = cljs.core.next.call(null,inst_35215);
var inst_35201 = inst_35227;
var inst_35202 = null;
var inst_35203 = (0);
var inst_35204 = (0);
var state_35260__$1 = (function (){var statearr_35280 = state_35260;
(statearr_35280[(12)] = inst_35202);

(statearr_35280[(13)] = inst_35201);

(statearr_35280[(14)] = inst_35203);

(statearr_35280[(15)] = inst_35226);

(statearr_35280[(16)] = inst_35204);

return statearr_35280;
})();
var statearr_35281_35456 = state_35260__$1;
(statearr_35281_35456[(2)] = null);

(statearr_35281_35456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (3))){
var inst_35258 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35260__$1,inst_35258);
} else {
if((state_val_35261 === (12))){
var inst_35235 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35282_35457 = state_35260__$1;
(statearr_35282_35457[(2)] = inst_35235);

(statearr_35282_35457[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (2))){
var state_35260__$1 = state_35260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35260__$1,(4),ch);
} else {
if((state_val_35261 === (23))){
var state_35260__$1 = state_35260;
var statearr_35283_35460 = state_35260__$1;
(statearr_35283_35460[(2)] = null);

(statearr_35283_35460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (19))){
var inst_35241 = (state_35260[(11)]);
var inst_35191 = (state_35260[(8)]);
var inst_35243 = cljs.core.async.muxch_STAR_.call(null,inst_35241);
var state_35260__$1 = state_35260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35260__$1,(22),inst_35243,inst_35191);
} else {
if((state_val_35261 === (11))){
var inst_35215 = (state_35260[(10)]);
var inst_35201 = (state_35260[(13)]);
var inst_35215__$1 = cljs.core.seq.call(null,inst_35201);
var state_35260__$1 = (function (){var statearr_35284 = state_35260;
(statearr_35284[(10)] = inst_35215__$1);

return statearr_35284;
})();
if(inst_35215__$1){
var statearr_35285_35462 = state_35260__$1;
(statearr_35285_35462[(1)] = (13));

} else {
var statearr_35286_35463 = state_35260__$1;
(statearr_35286_35463[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (9))){
var inst_35237 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35287_35464 = state_35260__$1;
(statearr_35287_35464[(2)] = inst_35237);

(statearr_35287_35464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (5))){
var inst_35198 = cljs.core.deref.call(null,mults);
var inst_35199 = cljs.core.vals.call(null,inst_35198);
var inst_35200 = cljs.core.seq.call(null,inst_35199);
var inst_35201 = inst_35200;
var inst_35202 = null;
var inst_35203 = (0);
var inst_35204 = (0);
var state_35260__$1 = (function (){var statearr_35302 = state_35260;
(statearr_35302[(12)] = inst_35202);

(statearr_35302[(13)] = inst_35201);

(statearr_35302[(14)] = inst_35203);

(statearr_35302[(16)] = inst_35204);

return statearr_35302;
})();
var statearr_35303_35465 = state_35260__$1;
(statearr_35303_35465[(2)] = null);

(statearr_35303_35465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (14))){
var state_35260__$1 = state_35260;
var statearr_35309_35469 = state_35260__$1;
(statearr_35309_35469[(2)] = null);

(statearr_35309_35469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (16))){
var inst_35215 = (state_35260[(10)]);
var inst_35219 = cljs.core.chunk_first.call(null,inst_35215);
var inst_35220 = cljs.core.chunk_rest.call(null,inst_35215);
var inst_35221 = cljs.core.count.call(null,inst_35219);
var inst_35201 = inst_35220;
var inst_35202 = inst_35219;
var inst_35203 = inst_35221;
var inst_35204 = (0);
var state_35260__$1 = (function (){var statearr_35310 = state_35260;
(statearr_35310[(12)] = inst_35202);

(statearr_35310[(13)] = inst_35201);

(statearr_35310[(14)] = inst_35203);

(statearr_35310[(16)] = inst_35204);

return statearr_35310;
})();
var statearr_35311_35471 = state_35260__$1;
(statearr_35311_35471[(2)] = null);

(statearr_35311_35471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (10))){
var inst_35202 = (state_35260[(12)]);
var inst_35201 = (state_35260[(13)]);
var inst_35203 = (state_35260[(14)]);
var inst_35204 = (state_35260[(16)]);
var inst_35209 = cljs.core._nth.call(null,inst_35202,inst_35204);
var inst_35210 = cljs.core.async.muxch_STAR_.call(null,inst_35209);
var inst_35211 = cljs.core.async.close_BANG_.call(null,inst_35210);
var inst_35212 = (inst_35204 + (1));
var tmp35304 = inst_35202;
var tmp35305 = inst_35201;
var tmp35306 = inst_35203;
var inst_35201__$1 = tmp35305;
var inst_35202__$1 = tmp35304;
var inst_35203__$1 = tmp35306;
var inst_35204__$1 = inst_35212;
var state_35260__$1 = (function (){var statearr_35312 = state_35260;
(statearr_35312[(12)] = inst_35202__$1);

(statearr_35312[(17)] = inst_35211);

(statearr_35312[(13)] = inst_35201__$1);

(statearr_35312[(14)] = inst_35203__$1);

(statearr_35312[(16)] = inst_35204__$1);

return statearr_35312;
})();
var statearr_35313_35475 = state_35260__$1;
(statearr_35313_35475[(2)] = null);

(statearr_35313_35475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (18))){
var inst_35230 = (state_35260[(2)]);
var state_35260__$1 = state_35260;
var statearr_35314_35477 = state_35260__$1;
(statearr_35314_35477[(2)] = inst_35230);

(statearr_35314_35477[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35261 === (8))){
var inst_35203 = (state_35260[(14)]);
var inst_35204 = (state_35260[(16)]);
var inst_35206 = (inst_35204 < inst_35203);
var inst_35207 = inst_35206;
var state_35260__$1 = state_35260;
if(cljs.core.truth_(inst_35207)){
var statearr_35316_35478 = state_35260__$1;
(statearr_35316_35478[(1)] = (10));

} else {
var statearr_35323_35479 = state_35260__$1;
(statearr_35323_35479[(1)] = (11));

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
});})(c__32393__auto___35434,mults,ensure_mult,p))
;
return ((function (switch__32005__auto__,c__32393__auto___35434,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_35327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35327[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_35327[(1)] = (1));

return statearr_35327;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_35260){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_35260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e35328){if((e35328 instanceof Object)){
var ex__32009__auto__ = e35328;
var statearr_35329_35480 = state_35260;
(statearr_35329_35480[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35481 = state_35260;
state_35260 = G__35481;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_35260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_35260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___35434,mults,ensure_mult,p))
})();
var state__32395__auto__ = (function (){var statearr_35332 = f__32394__auto__.call(null);
(statearr_35332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___35434);

return statearr_35332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___35434,mults,ensure_mult,p))
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
var args35483 = [];
var len__19784__auto___35487 = arguments.length;
var i__19785__auto___35491 = (0);
while(true){
if((i__19785__auto___35491 < len__19784__auto___35487)){
args35483.push((arguments[i__19785__auto___35491]));

var G__35492 = (i__19785__auto___35491 + (1));
i__19785__auto___35491 = G__35492;
continue;
} else {
}
break;
}

var G__35486 = args35483.length;
switch (G__35486) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35483.length)].join('')));

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
var args35497 = [];
var len__19784__auto___35504 = arguments.length;
var i__19785__auto___35505 = (0);
while(true){
if((i__19785__auto___35505 < len__19784__auto___35504)){
args35497.push((arguments[i__19785__auto___35505]));

var G__35510 = (i__19785__auto___35505 + (1));
i__19785__auto___35505 = G__35510;
continue;
} else {
}
break;
}

var G__35503 = args35497.length;
switch (G__35503) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35497.length)].join('')));

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
var args35514 = [];
var len__19784__auto___35590 = arguments.length;
var i__19785__auto___35591 = (0);
while(true){
if((i__19785__auto___35591 < len__19784__auto___35590)){
args35514.push((arguments[i__19785__auto___35591]));

var G__35594 = (i__19785__auto___35591 + (1));
i__19785__auto___35591 = G__35594;
continue;
} else {
}
break;
}

var G__35517 = args35514.length;
switch (G__35517) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35514.length)].join('')));

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
var c__32393__auto___35601 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___35601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___35601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35558){
var state_val_35559 = (state_35558[(1)]);
if((state_val_35559 === (7))){
var state_35558__$1 = state_35558;
var statearr_35560_35605 = state_35558__$1;
(statearr_35560_35605[(2)] = null);

(statearr_35560_35605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (1))){
var state_35558__$1 = state_35558;
var statearr_35561_35606 = state_35558__$1;
(statearr_35561_35606[(2)] = null);

(statearr_35561_35606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (4))){
var inst_35522 = (state_35558[(7)]);
var inst_35524 = (inst_35522 < cnt);
var state_35558__$1 = state_35558;
if(cljs.core.truth_(inst_35524)){
var statearr_35562_35611 = state_35558__$1;
(statearr_35562_35611[(1)] = (6));

} else {
var statearr_35563_35612 = state_35558__$1;
(statearr_35563_35612[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (15))){
var inst_35554 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35564_35613 = state_35558__$1;
(statearr_35564_35613[(2)] = inst_35554);

(statearr_35564_35613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (13))){
var inst_35547 = cljs.core.async.close_BANG_.call(null,out);
var state_35558__$1 = state_35558;
var statearr_35565_35614 = state_35558__$1;
(statearr_35565_35614[(2)] = inst_35547);

(statearr_35565_35614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (6))){
var state_35558__$1 = state_35558;
var statearr_35566_35615 = state_35558__$1;
(statearr_35566_35615[(2)] = null);

(statearr_35566_35615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (3))){
var inst_35556 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35558__$1,inst_35556);
} else {
if((state_val_35559 === (12))){
var inst_35544 = (state_35558[(8)]);
var inst_35544__$1 = (state_35558[(2)]);
var inst_35545 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35544__$1);
var state_35558__$1 = (function (){var statearr_35567 = state_35558;
(statearr_35567[(8)] = inst_35544__$1);

return statearr_35567;
})();
if(cljs.core.truth_(inst_35545)){
var statearr_35568_35616 = state_35558__$1;
(statearr_35568_35616[(1)] = (13));

} else {
var statearr_35569_35617 = state_35558__$1;
(statearr_35569_35617[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (2))){
var inst_35521 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35522 = (0);
var state_35558__$1 = (function (){var statearr_35570 = state_35558;
(statearr_35570[(9)] = inst_35521);

(statearr_35570[(7)] = inst_35522);

return statearr_35570;
})();
var statearr_35571_35618 = state_35558__$1;
(statearr_35571_35618[(2)] = null);

(statearr_35571_35618[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (11))){
var inst_35522 = (state_35558[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35558,(10),Object,null,(9));
var inst_35531 = chs__$1.call(null,inst_35522);
var inst_35532 = done.call(null,inst_35522);
var inst_35533 = cljs.core.async.take_BANG_.call(null,inst_35531,inst_35532);
var state_35558__$1 = state_35558;
var statearr_35572_35619 = state_35558__$1;
(statearr_35572_35619[(2)] = inst_35533);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (9))){
var inst_35522 = (state_35558[(7)]);
var inst_35535 = (state_35558[(2)]);
var inst_35536 = (inst_35522 + (1));
var inst_35522__$1 = inst_35536;
var state_35558__$1 = (function (){var statearr_35573 = state_35558;
(statearr_35573[(10)] = inst_35535);

(statearr_35573[(7)] = inst_35522__$1);

return statearr_35573;
})();
var statearr_35574_35620 = state_35558__$1;
(statearr_35574_35620[(2)] = null);

(statearr_35574_35620[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (5))){
var inst_35542 = (state_35558[(2)]);
var state_35558__$1 = (function (){var statearr_35575 = state_35558;
(statearr_35575[(11)] = inst_35542);

return statearr_35575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35558__$1,(12),dchan);
} else {
if((state_val_35559 === (14))){
var inst_35544 = (state_35558[(8)]);
var inst_35549 = cljs.core.apply.call(null,f,inst_35544);
var state_35558__$1 = state_35558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35558__$1,(16),out,inst_35549);
} else {
if((state_val_35559 === (16))){
var inst_35551 = (state_35558[(2)]);
var state_35558__$1 = (function (){var statearr_35576 = state_35558;
(statearr_35576[(12)] = inst_35551);

return statearr_35576;
})();
var statearr_35577_35621 = state_35558__$1;
(statearr_35577_35621[(2)] = null);

(statearr_35577_35621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (10))){
var inst_35526 = (state_35558[(2)]);
var inst_35527 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35558__$1 = (function (){var statearr_35578 = state_35558;
(statearr_35578[(13)] = inst_35526);

return statearr_35578;
})();
var statearr_35579_35622 = state_35558__$1;
(statearr_35579_35622[(2)] = inst_35527);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35558__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35559 === (8))){
var inst_35540 = (state_35558[(2)]);
var state_35558__$1 = state_35558;
var statearr_35580_35623 = state_35558__$1;
(statearr_35580_35623[(2)] = inst_35540);

(statearr_35580_35623[(1)] = (5));


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
});})(c__32393__auto___35601,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32005__auto__,c__32393__auto___35601,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_35584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35584[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_35584[(1)] = (1));

return statearr_35584;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_35558){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_35558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e35585){if((e35585 instanceof Object)){
var ex__32009__auto__ = e35585;
var statearr_35586_35624 = state_35558;
(statearr_35586_35624[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35627 = state_35558;
state_35558 = G__35627;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_35558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_35558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___35601,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32395__auto__ = (function (){var statearr_35587 = f__32394__auto__.call(null);
(statearr_35587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___35601);

return statearr_35587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___35601,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args35633 = [];
var len__19784__auto___35702 = arguments.length;
var i__19785__auto___35704 = (0);
while(true){
if((i__19785__auto___35704 < len__19784__auto___35702)){
args35633.push((arguments[i__19785__auto___35704]));

var G__35705 = (i__19785__auto___35704 + (1));
i__19785__auto___35704 = G__35705;
continue;
} else {
}
break;
}

var G__35635 = args35633.length;
switch (G__35635) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35633.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32393__auto___35707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___35707,out){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___35707,out){
return (function (state_35671){
var state_val_35672 = (state_35671[(1)]);
if((state_val_35672 === (7))){
var inst_35646 = (state_35671[(7)]);
var inst_35644 = (state_35671[(8)]);
var inst_35644__$1 = (state_35671[(2)]);
var inst_35646__$1 = cljs.core.nth.call(null,inst_35644__$1,(0),null);
var inst_35648 = cljs.core.nth.call(null,inst_35644__$1,(1),null);
var inst_35649 = (inst_35646__$1 == null);
var state_35671__$1 = (function (){var statearr_35673 = state_35671;
(statearr_35673[(7)] = inst_35646__$1);

(statearr_35673[(8)] = inst_35644__$1);

(statearr_35673[(9)] = inst_35648);

return statearr_35673;
})();
if(cljs.core.truth_(inst_35649)){
var statearr_35674_35712 = state_35671__$1;
(statearr_35674_35712[(1)] = (8));

} else {
var statearr_35675_35713 = state_35671__$1;
(statearr_35675_35713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35672 === (1))){
var inst_35636 = cljs.core.vec.call(null,chs);
var inst_35637 = inst_35636;
var state_35671__$1 = (function (){var statearr_35676 = state_35671;
(statearr_35676[(10)] = inst_35637);

return statearr_35676;
})();
var statearr_35677_35718 = state_35671__$1;
(statearr_35677_35718[(2)] = null);

(statearr_35677_35718[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35672 === (4))){
var inst_35637 = (state_35671[(10)]);
var state_35671__$1 = state_35671;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35671__$1,(7),inst_35637);
} else {
if((state_val_35672 === (6))){
var inst_35667 = (state_35671[(2)]);
var state_35671__$1 = state_35671;
var statearr_35678_35730 = state_35671__$1;
(statearr_35678_35730[(2)] = inst_35667);

(statearr_35678_35730[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35672 === (3))){
var inst_35669 = (state_35671[(2)]);
var state_35671__$1 = state_35671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35671__$1,inst_35669);
} else {
if((state_val_35672 === (2))){
var inst_35637 = (state_35671[(10)]);
var inst_35639 = cljs.core.count.call(null,inst_35637);
var inst_35640 = (inst_35639 > (0));
var state_35671__$1 = state_35671;
if(cljs.core.truth_(inst_35640)){
var statearr_35680_35733 = state_35671__$1;
(statearr_35680_35733[(1)] = (4));

} else {
var statearr_35681_35736 = state_35671__$1;
(statearr_35681_35736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35672 === (11))){
var inst_35637 = (state_35671[(10)]);
var inst_35660 = (state_35671[(2)]);
var tmp35679 = inst_35637;
var inst_35637__$1 = tmp35679;
var state_35671__$1 = (function (){var statearr_35682 = state_35671;
(statearr_35682[(10)] = inst_35637__$1);

(statearr_35682[(11)] = inst_35660);

return statearr_35682;
})();
var statearr_35683_35737 = state_35671__$1;
(statearr_35683_35737[(2)] = null);

(statearr_35683_35737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35672 === (9))){
var inst_35646 = (state_35671[(7)]);
var state_35671__$1 = state_35671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35671__$1,(11),out,inst_35646);
} else {
if((state_val_35672 === (5))){
var inst_35665 = cljs.core.async.close_BANG_.call(null,out);
var state_35671__$1 = state_35671;
var statearr_35686_35738 = state_35671__$1;
(statearr_35686_35738[(2)] = inst_35665);

(statearr_35686_35738[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35672 === (10))){
var inst_35663 = (state_35671[(2)]);
var state_35671__$1 = state_35671;
var statearr_35687_35740 = state_35671__$1;
(statearr_35687_35740[(2)] = inst_35663);

(statearr_35687_35740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35672 === (8))){
var inst_35646 = (state_35671[(7)]);
var inst_35637 = (state_35671[(10)]);
var inst_35644 = (state_35671[(8)]);
var inst_35648 = (state_35671[(9)]);
var inst_35653 = (function (){var cs = inst_35637;
var vec__35642 = inst_35644;
var v = inst_35646;
var c = inst_35648;
return ((function (cs,vec__35642,v,c,inst_35646,inst_35637,inst_35644,inst_35648,state_val_35672,c__32393__auto___35707,out){
return (function (p1__35632_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35632_SHARP_);
});
;})(cs,vec__35642,v,c,inst_35646,inst_35637,inst_35644,inst_35648,state_val_35672,c__32393__auto___35707,out))
})();
var inst_35656 = cljs.core.filterv.call(null,inst_35653,inst_35637);
var inst_35637__$1 = inst_35656;
var state_35671__$1 = (function (){var statearr_35688 = state_35671;
(statearr_35688[(10)] = inst_35637__$1);

return statearr_35688;
})();
var statearr_35689_35746 = state_35671__$1;
(statearr_35689_35746[(2)] = null);

(statearr_35689_35746[(1)] = (2));


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
});})(c__32393__auto___35707,out))
;
return ((function (switch__32005__auto__,c__32393__auto___35707,out){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_35694 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35694[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_35694[(1)] = (1));

return statearr_35694;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_35671){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_35671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e35697){if((e35697 instanceof Object)){
var ex__32009__auto__ = e35697;
var statearr_35698_35752 = state_35671;
(statearr_35698_35752[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35757 = state_35671;
state_35671 = G__35757;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_35671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_35671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___35707,out))
})();
var state__32395__auto__ = (function (){var statearr_35700 = f__32394__auto__.call(null);
(statearr_35700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___35707);

return statearr_35700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___35707,out))
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
var args35758 = [];
var len__19784__auto___35828 = arguments.length;
var i__19785__auto___35829 = (0);
while(true){
if((i__19785__auto___35829 < len__19784__auto___35828)){
args35758.push((arguments[i__19785__auto___35829]));

var G__35830 = (i__19785__auto___35829 + (1));
i__19785__auto___35829 = G__35830;
continue;
} else {
}
break;
}

var G__35760 = args35758.length;
switch (G__35760) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args35758.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32393__auto___35832 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___35832,out){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___35832,out){
return (function (state_35792){
var state_val_35793 = (state_35792[(1)]);
if((state_val_35793 === (7))){
var inst_35770 = (state_35792[(7)]);
var inst_35770__$1 = (state_35792[(2)]);
var inst_35771 = (inst_35770__$1 == null);
var inst_35772 = cljs.core.not.call(null,inst_35771);
var state_35792__$1 = (function (){var statearr_35794 = state_35792;
(statearr_35794[(7)] = inst_35770__$1);

return statearr_35794;
})();
if(inst_35772){
var statearr_35795_35833 = state_35792__$1;
(statearr_35795_35833[(1)] = (8));

} else {
var statearr_35796_35834 = state_35792__$1;
(statearr_35796_35834[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (1))){
var inst_35765 = (0);
var state_35792__$1 = (function (){var statearr_35797 = state_35792;
(statearr_35797[(8)] = inst_35765);

return statearr_35797;
})();
var statearr_35798_35840 = state_35792__$1;
(statearr_35798_35840[(2)] = null);

(statearr_35798_35840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (4))){
var state_35792__$1 = state_35792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35792__$1,(7),ch);
} else {
if((state_val_35793 === (6))){
var inst_35787 = (state_35792[(2)]);
var state_35792__$1 = state_35792;
var statearr_35803_35858 = state_35792__$1;
(statearr_35803_35858[(2)] = inst_35787);

(statearr_35803_35858[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (3))){
var inst_35789 = (state_35792[(2)]);
var inst_35790 = cljs.core.async.close_BANG_.call(null,out);
var state_35792__$1 = (function (){var statearr_35804 = state_35792;
(statearr_35804[(9)] = inst_35789);

return statearr_35804;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35792__$1,inst_35790);
} else {
if((state_val_35793 === (2))){
var inst_35765 = (state_35792[(8)]);
var inst_35767 = (inst_35765 < n);
var state_35792__$1 = state_35792;
if(cljs.core.truth_(inst_35767)){
var statearr_35805_35862 = state_35792__$1;
(statearr_35805_35862[(1)] = (4));

} else {
var statearr_35806_35863 = state_35792__$1;
(statearr_35806_35863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (11))){
var inst_35765 = (state_35792[(8)]);
var inst_35775 = (state_35792[(2)]);
var inst_35776 = (inst_35765 + (1));
var inst_35765__$1 = inst_35776;
var state_35792__$1 = (function (){var statearr_35807 = state_35792;
(statearr_35807[(10)] = inst_35775);

(statearr_35807[(8)] = inst_35765__$1);

return statearr_35807;
})();
var statearr_35808_35864 = state_35792__$1;
(statearr_35808_35864[(2)] = null);

(statearr_35808_35864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (9))){
var state_35792__$1 = state_35792;
var statearr_35809_35865 = state_35792__$1;
(statearr_35809_35865[(2)] = null);

(statearr_35809_35865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (5))){
var state_35792__$1 = state_35792;
var statearr_35810_35867 = state_35792__$1;
(statearr_35810_35867[(2)] = null);

(statearr_35810_35867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (10))){
var inst_35780 = (state_35792[(2)]);
var state_35792__$1 = state_35792;
var statearr_35811_35868 = state_35792__$1;
(statearr_35811_35868[(2)] = inst_35780);

(statearr_35811_35868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35793 === (8))){
var inst_35770 = (state_35792[(7)]);
var state_35792__$1 = state_35792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35792__$1,(11),out,inst_35770);
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
});})(c__32393__auto___35832,out))
;
return ((function (switch__32005__auto__,c__32393__auto___35832,out){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_35824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35824[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_35824[(1)] = (1));

return statearr_35824;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_35792){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_35792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e35825){if((e35825 instanceof Object)){
var ex__32009__auto__ = e35825;
var statearr_35826_35884 = state_35792;
(statearr_35826_35884[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35894 = state_35792;
state_35792 = G__35894;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_35792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_35792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___35832,out))
})();
var state__32395__auto__ = (function (){var statearr_35827 = f__32394__auto__.call(null);
(statearr_35827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___35832);

return statearr_35827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___35832,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35915 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35915 = (function (map_LT_,f,ch,meta35916){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35916 = meta35916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35917,meta35916__$1){
var self__ = this;
var _35917__$1 = this;
return (new cljs.core.async.t_cljs$core$async35915(self__.map_LT_,self__.f,self__.ch,meta35916__$1));
});

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35917){
var self__ = this;
var _35917__$1 = this;
return self__.meta35916;
});

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35918 = (function (map_LT_,f,ch,meta35916,_,fn1,meta35919){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta35916 = meta35916;
this._ = _;
this.fn1 = fn1;
this.meta35919 = meta35919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35920,meta35919__$1){
var self__ = this;
var _35920__$1 = this;
return (new cljs.core.async.t_cljs$core$async35918(self__.map_LT_,self__.f,self__.ch,self__.meta35916,self__._,self__.fn1,meta35919__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35920){
var self__ = this;
var _35920__$1 = this;
return self__.meta35919;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35918.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35898_SHARP_){
return f1.call(null,(((p1__35898_SHARP_ == null))?null:self__.f.call(null,p1__35898_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35918.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35916","meta35916",-1998568749,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35915","cljs.core.async/t_cljs$core$async35915",1303470714,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35919","meta35919",-1175639434,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35918.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35918.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35918";

cljs.core.async.t_cljs$core$async35918.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async35918");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35918 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35918(map_LT___$1,f__$1,ch__$1,meta35916__$1,___$2,fn1__$1,meta35919){
return (new cljs.core.async.t_cljs$core$async35918(map_LT___$1,f__$1,ch__$1,meta35916__$1,___$2,fn1__$1,meta35919));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35918(self__.map_LT_,self__.f,self__.ch,self__.meta35916,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async35915.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35916","meta35916",-1998568749,null)], null);
});

cljs.core.async.t_cljs$core$async35915.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35915";

cljs.core.async.t_cljs$core$async35915.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async35915");
});

cljs.core.async.__GT_t_cljs$core$async35915 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35915(map_LT___$1,f__$1,ch__$1,meta35916){
return (new cljs.core.async.t_cljs$core$async35915(map_LT___$1,f__$1,ch__$1,meta35916));
});

}

return (new cljs.core.async.t_cljs$core$async35915(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36043 = (function (map_GT_,f,ch,meta36044){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta36044 = meta36044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36045,meta36044__$1){
var self__ = this;
var _36045__$1 = this;
return (new cljs.core.async.t_cljs$core$async36043(self__.map_GT_,self__.f,self__.ch,meta36044__$1));
});

cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36045){
var self__ = this;
var _36045__$1 = this;
return self__.meta36044;
});

cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36043.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36044","meta36044",-2053437539,null)], null);
});

cljs.core.async.t_cljs$core$async36043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36043";

cljs.core.async.t_cljs$core$async36043.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async36043");
});

cljs.core.async.__GT_t_cljs$core$async36043 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36043(map_GT___$1,f__$1,ch__$1,meta36044){
return (new cljs.core.async.t_cljs$core$async36043(map_GT___$1,f__$1,ch__$1,meta36044));
});

}

return (new cljs.core.async.t_cljs$core$async36043(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36085 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36085 = (function (filter_GT_,p,ch,meta36086){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta36086 = meta36086;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36087,meta36086__$1){
var self__ = this;
var _36087__$1 = this;
return (new cljs.core.async.t_cljs$core$async36085(self__.filter_GT_,self__.p,self__.ch,meta36086__$1));
});

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36087){
var self__ = this;
var _36087__$1 = this;
return self__.meta36086;
});

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async36085.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36085.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36086","meta36086",818641602,null)], null);
});

cljs.core.async.t_cljs$core$async36085.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36085.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36085";

cljs.core.async.t_cljs$core$async36085.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async36085");
});

cljs.core.async.__GT_t_cljs$core$async36085 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36085(filter_GT___$1,p__$1,ch__$1,meta36086){
return (new cljs.core.async.t_cljs$core$async36085(filter_GT___$1,p__$1,ch__$1,meta36086));
});

}

return (new cljs.core.async.t_cljs$core$async36085(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args36092 = [];
var len__19784__auto___36224 = arguments.length;
var i__19785__auto___36229 = (0);
while(true){
if((i__19785__auto___36229 < len__19784__auto___36224)){
args36092.push((arguments[i__19785__auto___36229]));

var G__36230 = (i__19785__auto___36229 + (1));
i__19785__auto___36229 = G__36230;
continue;
} else {
}
break;
}

var G__36096 = args36092.length;
switch (G__36096) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36092.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32393__auto___36246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___36246,out){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___36246,out){
return (function (state_36131){
var state_val_36132 = (state_36131[(1)]);
if((state_val_36132 === (7))){
var inst_36121 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36133_36250 = state_36131__$1;
(statearr_36133_36250[(2)] = inst_36121);

(statearr_36133_36250[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (1))){
var state_36131__$1 = state_36131;
var statearr_36134_36259 = state_36131__$1;
(statearr_36134_36259[(2)] = null);

(statearr_36134_36259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (4))){
var inst_36107 = (state_36131[(7)]);
var inst_36107__$1 = (state_36131[(2)]);
var inst_36108 = (inst_36107__$1 == null);
var state_36131__$1 = (function (){var statearr_36135 = state_36131;
(statearr_36135[(7)] = inst_36107__$1);

return statearr_36135;
})();
if(cljs.core.truth_(inst_36108)){
var statearr_36136_36275 = state_36131__$1;
(statearr_36136_36275[(1)] = (5));

} else {
var statearr_36137_36277 = state_36131__$1;
(statearr_36137_36277[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (6))){
var inst_36107 = (state_36131[(7)]);
var inst_36112 = p.call(null,inst_36107);
var state_36131__$1 = state_36131;
if(cljs.core.truth_(inst_36112)){
var statearr_36179_36278 = state_36131__$1;
(statearr_36179_36278[(1)] = (8));

} else {
var statearr_36180_36279 = state_36131__$1;
(statearr_36180_36279[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (3))){
var inst_36123 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36131__$1,inst_36123);
} else {
if((state_val_36132 === (2))){
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36131__$1,(4),ch);
} else {
if((state_val_36132 === (11))){
var inst_36115 = (state_36131[(2)]);
var state_36131__$1 = state_36131;
var statearr_36183_36280 = state_36131__$1;
(statearr_36183_36280[(2)] = inst_36115);

(statearr_36183_36280[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (9))){
var state_36131__$1 = state_36131;
var statearr_36184_36281 = state_36131__$1;
(statearr_36184_36281[(2)] = null);

(statearr_36184_36281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (5))){
var inst_36110 = cljs.core.async.close_BANG_.call(null,out);
var state_36131__$1 = state_36131;
var statearr_36185_36282 = state_36131__$1;
(statearr_36185_36282[(2)] = inst_36110);

(statearr_36185_36282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (10))){
var inst_36118 = (state_36131[(2)]);
var state_36131__$1 = (function (){var statearr_36186 = state_36131;
(statearr_36186[(8)] = inst_36118);

return statearr_36186;
})();
var statearr_36187_36285 = state_36131__$1;
(statearr_36187_36285[(2)] = null);

(statearr_36187_36285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36132 === (8))){
var inst_36107 = (state_36131[(7)]);
var state_36131__$1 = state_36131;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36131__$1,(11),out,inst_36107);
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
});})(c__32393__auto___36246,out))
;
return ((function (switch__32005__auto__,c__32393__auto___36246,out){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_36216 = [null,null,null,null,null,null,null,null,null];
(statearr_36216[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_36216[(1)] = (1));

return statearr_36216;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_36131){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_36131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e36217){if((e36217 instanceof Object)){
var ex__32009__auto__ = e36217;
var statearr_36218_36300 = state_36131;
(statearr_36218_36300[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36303 = state_36131;
state_36131 = G__36303;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_36131){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_36131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___36246,out))
})();
var state__32395__auto__ = (function (){var statearr_36222 = f__32394__auto__.call(null);
(statearr_36222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___36246);

return statearr_36222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___36246,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args36310 = [];
var len__19784__auto___36322 = arguments.length;
var i__19785__auto___36323 = (0);
while(true){
if((i__19785__auto___36323 < len__19784__auto___36322)){
args36310.push((arguments[i__19785__auto___36323]));

var G__36324 = (i__19785__auto___36323 + (1));
i__19785__auto___36323 = G__36324;
continue;
} else {
}
break;
}

var G__36321 = args36310.length;
switch (G__36321) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36310.length)].join('')));

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
var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__){
return (function (state_36554){
var state_val_36555 = (state_36554[(1)]);
if((state_val_36555 === (7))){
var inst_36550 = (state_36554[(2)]);
var state_36554__$1 = state_36554;
var statearr_36561_36621 = state_36554__$1;
(statearr_36561_36621[(2)] = inst_36550);

(statearr_36561_36621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (20))){
var inst_36520 = (state_36554[(7)]);
var inst_36531 = (state_36554[(2)]);
var inst_36532 = cljs.core.next.call(null,inst_36520);
var inst_36505 = inst_36532;
var inst_36506 = null;
var inst_36507 = (0);
var inst_36508 = (0);
var state_36554__$1 = (function (){var statearr_36562 = state_36554;
(statearr_36562[(8)] = inst_36507);

(statearr_36562[(9)] = inst_36505);

(statearr_36562[(10)] = inst_36508);

(statearr_36562[(11)] = inst_36531);

(statearr_36562[(12)] = inst_36506);

return statearr_36562;
})();
var statearr_36563_36627 = state_36554__$1;
(statearr_36563_36627[(2)] = null);

(statearr_36563_36627[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (1))){
var state_36554__$1 = state_36554;
var statearr_36564_36628 = state_36554__$1;
(statearr_36564_36628[(2)] = null);

(statearr_36564_36628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (4))){
var inst_36493 = (state_36554[(13)]);
var inst_36493__$1 = (state_36554[(2)]);
var inst_36495 = (inst_36493__$1 == null);
var state_36554__$1 = (function (){var statearr_36566 = state_36554;
(statearr_36566[(13)] = inst_36493__$1);

return statearr_36566;
})();
if(cljs.core.truth_(inst_36495)){
var statearr_36567_36630 = state_36554__$1;
(statearr_36567_36630[(1)] = (5));

} else {
var statearr_36568_36631 = state_36554__$1;
(statearr_36568_36631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (15))){
var state_36554__$1 = state_36554;
var statearr_36572_36632 = state_36554__$1;
(statearr_36572_36632[(2)] = null);

(statearr_36572_36632[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (21))){
var state_36554__$1 = state_36554;
var statearr_36574_36633 = state_36554__$1;
(statearr_36574_36633[(2)] = null);

(statearr_36574_36633[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (13))){
var inst_36507 = (state_36554[(8)]);
var inst_36505 = (state_36554[(9)]);
var inst_36508 = (state_36554[(10)]);
var inst_36506 = (state_36554[(12)]);
var inst_36516 = (state_36554[(2)]);
var inst_36517 = (inst_36508 + (1));
var tmp36569 = inst_36507;
var tmp36570 = inst_36505;
var tmp36571 = inst_36506;
var inst_36505__$1 = tmp36570;
var inst_36506__$1 = tmp36571;
var inst_36507__$1 = tmp36569;
var inst_36508__$1 = inst_36517;
var state_36554__$1 = (function (){var statearr_36577 = state_36554;
(statearr_36577[(14)] = inst_36516);

(statearr_36577[(8)] = inst_36507__$1);

(statearr_36577[(9)] = inst_36505__$1);

(statearr_36577[(10)] = inst_36508__$1);

(statearr_36577[(12)] = inst_36506__$1);

return statearr_36577;
})();
var statearr_36578_36637 = state_36554__$1;
(statearr_36578_36637[(2)] = null);

(statearr_36578_36637[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (22))){
var state_36554__$1 = state_36554;
var statearr_36579_36640 = state_36554__$1;
(statearr_36579_36640[(2)] = null);

(statearr_36579_36640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (6))){
var inst_36493 = (state_36554[(13)]);
var inst_36503 = f.call(null,inst_36493);
var inst_36504 = cljs.core.seq.call(null,inst_36503);
var inst_36505 = inst_36504;
var inst_36506 = null;
var inst_36507 = (0);
var inst_36508 = (0);
var state_36554__$1 = (function (){var statearr_36580 = state_36554;
(statearr_36580[(8)] = inst_36507);

(statearr_36580[(9)] = inst_36505);

(statearr_36580[(10)] = inst_36508);

(statearr_36580[(12)] = inst_36506);

return statearr_36580;
})();
var statearr_36581_36654 = state_36554__$1;
(statearr_36581_36654[(2)] = null);

(statearr_36581_36654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (17))){
var inst_36520 = (state_36554[(7)]);
var inst_36524 = cljs.core.chunk_first.call(null,inst_36520);
var inst_36525 = cljs.core.chunk_rest.call(null,inst_36520);
var inst_36526 = cljs.core.count.call(null,inst_36524);
var inst_36505 = inst_36525;
var inst_36506 = inst_36524;
var inst_36507 = inst_36526;
var inst_36508 = (0);
var state_36554__$1 = (function (){var statearr_36582 = state_36554;
(statearr_36582[(8)] = inst_36507);

(statearr_36582[(9)] = inst_36505);

(statearr_36582[(10)] = inst_36508);

(statearr_36582[(12)] = inst_36506);

return statearr_36582;
})();
var statearr_36583_36655 = state_36554__$1;
(statearr_36583_36655[(2)] = null);

(statearr_36583_36655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (3))){
var inst_36552 = (state_36554[(2)]);
var state_36554__$1 = state_36554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36554__$1,inst_36552);
} else {
if((state_val_36555 === (12))){
var inst_36540 = (state_36554[(2)]);
var state_36554__$1 = state_36554;
var statearr_36584_36657 = state_36554__$1;
(statearr_36584_36657[(2)] = inst_36540);

(statearr_36584_36657[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (2))){
var state_36554__$1 = state_36554;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36554__$1,(4),in$);
} else {
if((state_val_36555 === (23))){
var inst_36548 = (state_36554[(2)]);
var state_36554__$1 = state_36554;
var statearr_36585_36666 = state_36554__$1;
(statearr_36585_36666[(2)] = inst_36548);

(statearr_36585_36666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (19))){
var inst_36535 = (state_36554[(2)]);
var state_36554__$1 = state_36554;
var statearr_36586_36670 = state_36554__$1;
(statearr_36586_36670[(2)] = inst_36535);

(statearr_36586_36670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (11))){
var inst_36505 = (state_36554[(9)]);
var inst_36520 = (state_36554[(7)]);
var inst_36520__$1 = cljs.core.seq.call(null,inst_36505);
var state_36554__$1 = (function (){var statearr_36587 = state_36554;
(statearr_36587[(7)] = inst_36520__$1);

return statearr_36587;
})();
if(inst_36520__$1){
var statearr_36588_36681 = state_36554__$1;
(statearr_36588_36681[(1)] = (14));

} else {
var statearr_36589_36682 = state_36554__$1;
(statearr_36589_36682[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (9))){
var inst_36542 = (state_36554[(2)]);
var inst_36543 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36554__$1 = (function (){var statearr_36590 = state_36554;
(statearr_36590[(15)] = inst_36542);

return statearr_36590;
})();
if(cljs.core.truth_(inst_36543)){
var statearr_36591_36687 = state_36554__$1;
(statearr_36591_36687[(1)] = (21));

} else {
var statearr_36592_36689 = state_36554__$1;
(statearr_36592_36689[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (5))){
var inst_36497 = cljs.core.async.close_BANG_.call(null,out);
var state_36554__$1 = state_36554;
var statearr_36593_36690 = state_36554__$1;
(statearr_36593_36690[(2)] = inst_36497);

(statearr_36593_36690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (14))){
var inst_36520 = (state_36554[(7)]);
var inst_36522 = cljs.core.chunked_seq_QMARK_.call(null,inst_36520);
var state_36554__$1 = state_36554;
if(inst_36522){
var statearr_36594_36691 = state_36554__$1;
(statearr_36594_36691[(1)] = (17));

} else {
var statearr_36595_36692 = state_36554__$1;
(statearr_36595_36692[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (16))){
var inst_36538 = (state_36554[(2)]);
var state_36554__$1 = state_36554;
var statearr_36596_36693 = state_36554__$1;
(statearr_36596_36693[(2)] = inst_36538);

(statearr_36596_36693[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36555 === (10))){
var inst_36508 = (state_36554[(10)]);
var inst_36506 = (state_36554[(12)]);
var inst_36514 = cljs.core._nth.call(null,inst_36506,inst_36508);
var state_36554__$1 = state_36554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36554__$1,(13),out,inst_36514);
} else {
if((state_val_36555 === (18))){
var inst_36520 = (state_36554[(7)]);
var inst_36529 = cljs.core.first.call(null,inst_36520);
var state_36554__$1 = state_36554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36554__$1,(20),out,inst_36529);
} else {
if((state_val_36555 === (8))){
var inst_36507 = (state_36554[(8)]);
var inst_36508 = (state_36554[(10)]);
var inst_36511 = (inst_36508 < inst_36507);
var inst_36512 = inst_36511;
var state_36554__$1 = state_36554;
if(cljs.core.truth_(inst_36512)){
var statearr_36597_36698 = state_36554__$1;
(statearr_36597_36698[(1)] = (10));

} else {
var statearr_36598_36699 = state_36554__$1;
(statearr_36598_36699[(1)] = (11));

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
});})(c__32393__auto__))
;
return ((function (switch__32005__auto__,c__32393__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32006__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32006__auto____0 = (function (){
var statearr_36608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36608[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32006__auto__);

(statearr_36608[(1)] = (1));

return statearr_36608;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32006__auto____1 = (function (state_36554){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_36554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e36613){if((e36613 instanceof Object)){
var ex__32009__auto__ = e36613;
var statearr_36614_36706 = state_36554;
(statearr_36614_36706[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36554);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36709 = state_36554;
state_36554 = G__36709;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32006__auto__ = function(state_36554){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32006__auto____1.call(this,state_36554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32006__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32006__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__))
})();
var state__32395__auto__ = (function (){var statearr_36617 = f__32394__auto__.call(null);
(statearr_36617[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_36617;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__))
);

return c__32393__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args36714 = [];
var len__19784__auto___36720 = arguments.length;
var i__19785__auto___36721 = (0);
while(true){
if((i__19785__auto___36721 < len__19784__auto___36720)){
args36714.push((arguments[i__19785__auto___36721]));

var G__36722 = (i__19785__auto___36721 + (1));
i__19785__auto___36721 = G__36722;
continue;
} else {
}
break;
}

var G__36719 = args36714.length;
switch (G__36719) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36714.length)].join('')));

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
var args36744 = [];
var len__19784__auto___36757 = arguments.length;
var i__19785__auto___36760 = (0);
while(true){
if((i__19785__auto___36760 < len__19784__auto___36757)){
args36744.push((arguments[i__19785__auto___36760]));

var G__36764 = (i__19785__auto___36760 + (1));
i__19785__auto___36760 = G__36764;
continue;
} else {
}
break;
}

var G__36746 = args36744.length;
switch (G__36746) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36744.length)].join('')));

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
var args36772 = [];
var len__19784__auto___36857 = arguments.length;
var i__19785__auto___36858 = (0);
while(true){
if((i__19785__auto___36858 < len__19784__auto___36857)){
args36772.push((arguments[i__19785__auto___36858]));

var G__36862 = (i__19785__auto___36858 + (1));
i__19785__auto___36858 = G__36862;
continue;
} else {
}
break;
}

var G__36786 = args36772.length;
switch (G__36786) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36772.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32393__auto___36873 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___36873,out){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___36873,out){
return (function (state_36810){
var state_val_36811 = (state_36810[(1)]);
if((state_val_36811 === (7))){
var inst_36805 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36812_36874 = state_36810__$1;
(statearr_36812_36874[(2)] = inst_36805);

(statearr_36812_36874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (1))){
var inst_36787 = null;
var state_36810__$1 = (function (){var statearr_36813 = state_36810;
(statearr_36813[(7)] = inst_36787);

return statearr_36813;
})();
var statearr_36814_36875 = state_36810__$1;
(statearr_36814_36875[(2)] = null);

(statearr_36814_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (4))){
var inst_36790 = (state_36810[(8)]);
var inst_36790__$1 = (state_36810[(2)]);
var inst_36791 = (inst_36790__$1 == null);
var inst_36792 = cljs.core.not.call(null,inst_36791);
var state_36810__$1 = (function (){var statearr_36815 = state_36810;
(statearr_36815[(8)] = inst_36790__$1);

return statearr_36815;
})();
if(inst_36792){
var statearr_36816_36882 = state_36810__$1;
(statearr_36816_36882[(1)] = (5));

} else {
var statearr_36817_36883 = state_36810__$1;
(statearr_36817_36883[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (6))){
var state_36810__$1 = state_36810;
var statearr_36821_36887 = state_36810__$1;
(statearr_36821_36887[(2)] = null);

(statearr_36821_36887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (3))){
var inst_36807 = (state_36810[(2)]);
var inst_36808 = cljs.core.async.close_BANG_.call(null,out);
var state_36810__$1 = (function (){var statearr_36825 = state_36810;
(statearr_36825[(9)] = inst_36807);

return statearr_36825;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36810__$1,inst_36808);
} else {
if((state_val_36811 === (2))){
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36810__$1,(4),ch);
} else {
if((state_val_36811 === (11))){
var inst_36790 = (state_36810[(8)]);
var inst_36799 = (state_36810[(2)]);
var inst_36787 = inst_36790;
var state_36810__$1 = (function (){var statearr_36826 = state_36810;
(statearr_36826[(10)] = inst_36799);

(statearr_36826[(7)] = inst_36787);

return statearr_36826;
})();
var statearr_36827_36897 = state_36810__$1;
(statearr_36827_36897[(2)] = null);

(statearr_36827_36897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (9))){
var inst_36790 = (state_36810[(8)]);
var state_36810__$1 = state_36810;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36810__$1,(11),out,inst_36790);
} else {
if((state_val_36811 === (5))){
var inst_36790 = (state_36810[(8)]);
var inst_36787 = (state_36810[(7)]);
var inst_36794 = cljs.core._EQ_.call(null,inst_36790,inst_36787);
var state_36810__$1 = state_36810;
if(inst_36794){
var statearr_36833_36908 = state_36810__$1;
(statearr_36833_36908[(1)] = (8));

} else {
var statearr_36834_36909 = state_36810__$1;
(statearr_36834_36909[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (10))){
var inst_36802 = (state_36810[(2)]);
var state_36810__$1 = state_36810;
var statearr_36835_36910 = state_36810__$1;
(statearr_36835_36910[(2)] = inst_36802);

(statearr_36835_36910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36811 === (8))){
var inst_36787 = (state_36810[(7)]);
var tmp36831 = inst_36787;
var inst_36787__$1 = tmp36831;
var state_36810__$1 = (function (){var statearr_36836 = state_36810;
(statearr_36836[(7)] = inst_36787__$1);

return statearr_36836;
})();
var statearr_36837_36911 = state_36810__$1;
(statearr_36837_36911[(2)] = null);

(statearr_36837_36911[(1)] = (2));


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
});})(c__32393__auto___36873,out))
;
return ((function (switch__32005__auto__,c__32393__auto___36873,out){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_36847 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36847[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_36847[(1)] = (1));

return statearr_36847;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_36810){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_36810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e36848){if((e36848 instanceof Object)){
var ex__32009__auto__ = e36848;
var statearr_36849_36920 = state_36810;
(statearr_36849_36920[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36925 = state_36810;
state_36810 = G__36925;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_36810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_36810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___36873,out))
})();
var state__32395__auto__ = (function (){var statearr_36856 = f__32394__auto__.call(null);
(statearr_36856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___36873);

return statearr_36856;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___36873,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args36934 = [];
var len__19784__auto___37030 = arguments.length;
var i__19785__auto___37031 = (0);
while(true){
if((i__19785__auto___37031 < len__19784__auto___37030)){
args36934.push((arguments[i__19785__auto___37031]));

var G__37032 = (i__19785__auto___37031 + (1));
i__19785__auto___37031 = G__37032;
continue;
} else {
}
break;
}

var G__36939 = args36934.length;
switch (G__36939) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36934.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32393__auto___37037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___37037,out){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___37037,out){
return (function (state_36980){
var state_val_36981 = (state_36980[(1)]);
if((state_val_36981 === (7))){
var inst_36976 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_36982_37038 = state_36980__$1;
(statearr_36982_37038[(2)] = inst_36976);

(statearr_36982_37038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (1))){
var inst_36943 = (new Array(n));
var inst_36944 = inst_36943;
var inst_36945 = (0);
var state_36980__$1 = (function (){var statearr_36983 = state_36980;
(statearr_36983[(7)] = inst_36944);

(statearr_36983[(8)] = inst_36945);

return statearr_36983;
})();
var statearr_36984_37039 = state_36980__$1;
(statearr_36984_37039[(2)] = null);

(statearr_36984_37039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (4))){
var inst_36948 = (state_36980[(9)]);
var inst_36948__$1 = (state_36980[(2)]);
var inst_36949 = (inst_36948__$1 == null);
var inst_36950 = cljs.core.not.call(null,inst_36949);
var state_36980__$1 = (function (){var statearr_36985 = state_36980;
(statearr_36985[(9)] = inst_36948__$1);

return statearr_36985;
})();
if(inst_36950){
var statearr_36986_37040 = state_36980__$1;
(statearr_36986_37040[(1)] = (5));

} else {
var statearr_36987_37041 = state_36980__$1;
(statearr_36987_37041[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (15))){
var inst_36970 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_36988_37042 = state_36980__$1;
(statearr_36988_37042[(2)] = inst_36970);

(statearr_36988_37042[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (13))){
var state_36980__$1 = state_36980;
var statearr_36989_37043 = state_36980__$1;
(statearr_36989_37043[(2)] = null);

(statearr_36989_37043[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (6))){
var inst_36945 = (state_36980[(8)]);
var inst_36966 = (inst_36945 > (0));
var state_36980__$1 = state_36980;
if(cljs.core.truth_(inst_36966)){
var statearr_36990_37044 = state_36980__$1;
(statearr_36990_37044[(1)] = (12));

} else {
var statearr_36991_37045 = state_36980__$1;
(statearr_36991_37045[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (3))){
var inst_36978 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36980__$1,inst_36978);
} else {
if((state_val_36981 === (12))){
var inst_36944 = (state_36980[(7)]);
var inst_36968 = cljs.core.vec.call(null,inst_36944);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36980__$1,(15),out,inst_36968);
} else {
if((state_val_36981 === (2))){
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36980__$1,(4),ch);
} else {
if((state_val_36981 === (11))){
var inst_36960 = (state_36980[(2)]);
var inst_36961 = (new Array(n));
var inst_36944 = inst_36961;
var inst_36945 = (0);
var state_36980__$1 = (function (){var statearr_36995 = state_36980;
(statearr_36995[(7)] = inst_36944);

(statearr_36995[(10)] = inst_36960);

(statearr_36995[(8)] = inst_36945);

return statearr_36995;
})();
var statearr_36996_37046 = state_36980__$1;
(statearr_36996_37046[(2)] = null);

(statearr_36996_37046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (9))){
var inst_36944 = (state_36980[(7)]);
var inst_36958 = cljs.core.vec.call(null,inst_36944);
var state_36980__$1 = state_36980;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36980__$1,(11),out,inst_36958);
} else {
if((state_val_36981 === (5))){
var inst_36948 = (state_36980[(9)]);
var inst_36953 = (state_36980[(11)]);
var inst_36944 = (state_36980[(7)]);
var inst_36945 = (state_36980[(8)]);
var inst_36952 = (inst_36944[inst_36945] = inst_36948);
var inst_36953__$1 = (inst_36945 + (1));
var inst_36954 = (inst_36953__$1 < n);
var state_36980__$1 = (function (){var statearr_36997 = state_36980;
(statearr_36997[(11)] = inst_36953__$1);

(statearr_36997[(12)] = inst_36952);

return statearr_36997;
})();
if(cljs.core.truth_(inst_36954)){
var statearr_37000_37054 = state_36980__$1;
(statearr_37000_37054[(1)] = (8));

} else {
var statearr_37001_37055 = state_36980__$1;
(statearr_37001_37055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (14))){
var inst_36973 = (state_36980[(2)]);
var inst_36974 = cljs.core.async.close_BANG_.call(null,out);
var state_36980__$1 = (function (){var statearr_37004 = state_36980;
(statearr_37004[(13)] = inst_36973);

return statearr_37004;
})();
var statearr_37005_37066 = state_36980__$1;
(statearr_37005_37066[(2)] = inst_36974);

(statearr_37005_37066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (10))){
var inst_36964 = (state_36980[(2)]);
var state_36980__$1 = state_36980;
var statearr_37006_37067 = state_36980__$1;
(statearr_37006_37067[(2)] = inst_36964);

(statearr_37006_37067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36981 === (8))){
var inst_36953 = (state_36980[(11)]);
var inst_36944 = (state_36980[(7)]);
var tmp37003 = inst_36944;
var inst_36944__$1 = tmp37003;
var inst_36945 = inst_36953;
var state_36980__$1 = (function (){var statearr_37010 = state_36980;
(statearr_37010[(7)] = inst_36944__$1);

(statearr_37010[(8)] = inst_36945);

return statearr_37010;
})();
var statearr_37011_37068 = state_36980__$1;
(statearr_37011_37068[(2)] = null);

(statearr_37011_37068[(1)] = (2));


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
});})(c__32393__auto___37037,out))
;
return ((function (switch__32005__auto__,c__32393__auto___37037,out){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_37018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37018[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_37018[(1)] = (1));

return statearr_37018;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_36980){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_36980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e37022){if((e37022 instanceof Object)){
var ex__32009__auto__ = e37022;
var statearr_37023_37069 = state_36980;
(statearr_37023_37069[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37070 = state_36980;
state_36980 = G__37070;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_36980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_36980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___37037,out))
})();
var state__32395__auto__ = (function (){var statearr_37025 = f__32394__auto__.call(null);
(statearr_37025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___37037);

return statearr_37025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___37037,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args37080 = [];
var len__19784__auto___37162 = arguments.length;
var i__19785__auto___37163 = (0);
while(true){
if((i__19785__auto___37163 < len__19784__auto___37162)){
args37080.push((arguments[i__19785__auto___37163]));

var G__37165 = (i__19785__auto___37163 + (1));
i__19785__auto___37163 = G__37165;
continue;
} else {
}
break;
}

var G__37082 = args37080.length;
switch (G__37082) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37080.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32393__auto___37175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___37175,out){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___37175,out){
return (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var inst_37120 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37126_37182 = state_37124__$1;
(statearr_37126_37182[(2)] = inst_37120);

(statearr_37126_37182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var inst_37083 = [];
var inst_37084 = inst_37083;
var inst_37085 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37124__$1 = (function (){var statearr_37127 = state_37124;
(statearr_37127[(7)] = inst_37085);

(statearr_37127[(8)] = inst_37084);

return statearr_37127;
})();
var statearr_37128_37183 = state_37124__$1;
(statearr_37128_37183[(2)] = null);

(statearr_37128_37183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37088 = (state_37124[(9)]);
var inst_37088__$1 = (state_37124[(2)]);
var inst_37089 = (inst_37088__$1 == null);
var inst_37090 = cljs.core.not.call(null,inst_37089);
var state_37124__$1 = (function (){var statearr_37129 = state_37124;
(statearr_37129[(9)] = inst_37088__$1);

return statearr_37129;
})();
if(inst_37090){
var statearr_37130_37184 = state_37124__$1;
(statearr_37130_37184[(1)] = (5));

} else {
var statearr_37131_37185 = state_37124__$1;
(statearr_37131_37185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (15))){
var inst_37114 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37132_37186 = state_37124__$1;
(statearr_37132_37186[(2)] = inst_37114);

(statearr_37132_37186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (13))){
var state_37124__$1 = state_37124;
var statearr_37133_37187 = state_37124__$1;
(statearr_37133_37187[(2)] = null);

(statearr_37133_37187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var inst_37084 = (state_37124[(8)]);
var inst_37109 = inst_37084.length;
var inst_37110 = (inst_37109 > (0));
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37110)){
var statearr_37134_37188 = state_37124__$1;
(statearr_37134_37188[(1)] = (12));

} else {
var statearr_37135_37189 = state_37124__$1;
(statearr_37135_37189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (3))){
var inst_37122 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37124__$1,inst_37122);
} else {
if((state_val_37125 === (12))){
var inst_37084 = (state_37124[(8)]);
var inst_37112 = cljs.core.vec.call(null,inst_37084);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37124__$1,(15),out,inst_37112);
} else {
if((state_val_37125 === (2))){
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37124__$1,(4),ch);
} else {
if((state_val_37125 === (11))){
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37102 = (state_37124[(2)]);
var inst_37103 = [];
var inst_37104 = inst_37103.push(inst_37088);
var inst_37084 = inst_37103;
var inst_37085 = inst_37092;
var state_37124__$1 = (function (){var statearr_37136 = state_37124;
(statearr_37136[(7)] = inst_37085);

(statearr_37136[(11)] = inst_37104);

(statearr_37136[(12)] = inst_37102);

(statearr_37136[(8)] = inst_37084);

return statearr_37136;
})();
var statearr_37137_37202 = state_37124__$1;
(statearr_37137_37202[(2)] = null);

(statearr_37137_37202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var inst_37084 = (state_37124[(8)]);
var inst_37100 = cljs.core.vec.call(null,inst_37084);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37124__$1,(11),out,inst_37100);
} else {
if((state_val_37125 === (5))){
var inst_37085 = (state_37124[(7)]);
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37092__$1 = f.call(null,inst_37088);
var inst_37093 = cljs.core._EQ_.call(null,inst_37092__$1,inst_37085);
var inst_37094 = cljs.core.keyword_identical_QMARK_.call(null,inst_37085,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37095 = (inst_37093) || (inst_37094);
var state_37124__$1 = (function (){var statearr_37138 = state_37124;
(statearr_37138[(10)] = inst_37092__$1);

return statearr_37138;
})();
if(cljs.core.truth_(inst_37095)){
var statearr_37139_37213 = state_37124__$1;
(statearr_37139_37213[(1)] = (8));

} else {
var statearr_37140_37214 = state_37124__$1;
(statearr_37140_37214[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (14))){
var inst_37117 = (state_37124[(2)]);
var inst_37118 = cljs.core.async.close_BANG_.call(null,out);
var state_37124__$1 = (function (){var statearr_37142 = state_37124;
(statearr_37142[(13)] = inst_37117);

return statearr_37142;
})();
var statearr_37143_37216 = state_37124__$1;
(statearr_37143_37216[(2)] = inst_37118);

(statearr_37143_37216[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_37107 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37144_37217 = state_37124__$1;
(statearr_37144_37217[(2)] = inst_37107);

(statearr_37144_37217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_37088 = (state_37124[(9)]);
var inst_37092 = (state_37124[(10)]);
var inst_37084 = (state_37124[(8)]);
var inst_37097 = inst_37084.push(inst_37088);
var tmp37141 = inst_37084;
var inst_37084__$1 = tmp37141;
var inst_37085 = inst_37092;
var state_37124__$1 = (function (){var statearr_37146 = state_37124;
(statearr_37146[(7)] = inst_37085);

(statearr_37146[(14)] = inst_37097);

(statearr_37146[(8)] = inst_37084__$1);

return statearr_37146;
})();
var statearr_37147_37218 = state_37124__$1;
(statearr_37147_37218[(2)] = null);

(statearr_37147_37218[(1)] = (2));


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
});})(c__32393__auto___37175,out))
;
return ((function (switch__32005__auto__,c__32393__auto___37175,out){
return (function() {
var cljs$core$async$state_machine__32006__auto__ = null;
var cljs$core$async$state_machine__32006__auto____0 = (function (){
var statearr_37151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37151[(0)] = cljs$core$async$state_machine__32006__auto__);

(statearr_37151[(1)] = (1));

return statearr_37151;
});
var cljs$core$async$state_machine__32006__auto____1 = (function (state_37124){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_37124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e37153){if((e37153 instanceof Object)){
var ex__32009__auto__ = e37153;
var statearr_37156_37226 = state_37124;
(statearr_37156_37226[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37227 = state_37124;
state_37124 = G__37227;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
cljs$core$async$state_machine__32006__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32006__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32006__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32006__auto____0;
cljs$core$async$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32006__auto____1;
return cljs$core$async$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___37175,out))
})();
var state__32395__auto__ = (function (){var statearr_37158 = f__32394__auto__.call(null);
(statearr_37158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___37175);

return statearr_37158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___37175,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map