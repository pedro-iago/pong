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
var args37253 = [];
var len__19784__auto___37267 = arguments.length;
var i__19785__auto___37268 = (0);
while(true){
if((i__19785__auto___37268 < len__19784__auto___37267)){
args37253.push((arguments[i__19785__auto___37268]));

var G__37269 = (i__19785__auto___37268 + (1));
i__19785__auto___37268 = G__37269;
continue;
} else {
}
break;
}

var G__37255 = args37253.length;
switch (G__37255) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37253.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async37259 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37259 = (function (f,blockable,meta37260){
this.f = f;
this.blockable = blockable;
this.meta37260 = meta37260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37261,meta37260__$1){
var self__ = this;
var _37261__$1 = this;
return (new cljs.core.async.t_cljs$core$async37259(self__.f,self__.blockable,meta37260__$1));
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37261){
var self__ = this;
var _37261__$1 = this;
return self__.meta37260;
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async37259.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async37259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta37260","meta37260",1270711298,null)], null);
});

cljs.core.async.t_cljs$core$async37259.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37259";

cljs.core.async.t_cljs$core$async37259.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async37259");
});

cljs.core.async.__GT_t_cljs$core$async37259 = (function cljs$core$async$__GT_t_cljs$core$async37259(f__$1,blockable__$1,meta37260){
return (new cljs.core.async.t_cljs$core$async37259(f__$1,blockable__$1,meta37260));
});

}

return (new cljs.core.async.t_cljs$core$async37259(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args37280 = [];
var len__19784__auto___37283 = arguments.length;
var i__19785__auto___37284 = (0);
while(true){
if((i__19785__auto___37284 < len__19784__auto___37283)){
args37280.push((arguments[i__19785__auto___37284]));

var G__37285 = (i__19785__auto___37284 + (1));
i__19785__auto___37284 = G__37285;
continue;
} else {
}
break;
}

var G__37282 = args37280.length;
switch (G__37282) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37280.length)].join('')));

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
var args37300 = [];
var len__19784__auto___37305 = arguments.length;
var i__19785__auto___37306 = (0);
while(true){
if((i__19785__auto___37306 < len__19784__auto___37305)){
args37300.push((arguments[i__19785__auto___37306]));

var G__37307 = (i__19785__auto___37306 + (1));
i__19785__auto___37306 = G__37307;
continue;
} else {
}
break;
}

var G__37304 = args37300.length;
switch (G__37304) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37300.length)].join('')));

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
var args37310 = [];
var len__19784__auto___37313 = arguments.length;
var i__19785__auto___37314 = (0);
while(true){
if((i__19785__auto___37314 < len__19784__auto___37313)){
args37310.push((arguments[i__19785__auto___37314]));

var G__37315 = (i__19785__auto___37314 + (1));
i__19785__auto___37314 = G__37315;
continue;
} else {
}
break;
}

var G__37312 = args37310.length;
switch (G__37312) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37310.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_37322 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_37322);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_37322,ret){
return (function (){
return fn1.call(null,val_37322);
});})(val_37322,ret))
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
var args37323 = [];
var len__19784__auto___37331 = arguments.length;
var i__19785__auto___37332 = (0);
while(true){
if((i__19785__auto___37332 < len__19784__auto___37331)){
args37323.push((arguments[i__19785__auto___37332]));

var G__37333 = (i__19785__auto___37332 + (1));
i__19785__auto___37332 = G__37333;
continue;
} else {
}
break;
}

var G__37325 = args37323.length;
switch (G__37325) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37323.length)].join('')));

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
var n__19629__auto___37335 = n;
var x_37336 = (0);
while(true){
if((x_37336 < n__19629__auto___37335)){
(a[x_37336] = (0));

var G__37337 = (x_37336 + (1));
x_37336 = G__37337;
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

var G__37340 = (i + (1));
i = G__37340;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async37344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37344 = (function (alt_flag,flag,meta37345){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta37345 = meta37345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_37346,meta37345__$1){
var self__ = this;
var _37346__$1 = this;
return (new cljs.core.async.t_cljs$core$async37344(self__.alt_flag,self__.flag,meta37345__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_37346){
var self__ = this;
var _37346__$1 = this;
return self__.meta37345;
});})(flag))
;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37344.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async37344.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta37345","meta37345",2136605288,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async37344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37344";

cljs.core.async.t_cljs$core$async37344.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async37344");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async37344 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async37344(alt_flag__$1,flag__$1,meta37345){
return (new cljs.core.async.t_cljs$core$async37344(alt_flag__$1,flag__$1,meta37345));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async37344(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async37350 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async37350 = (function (alt_handler,flag,cb,meta37351){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta37351 = meta37351;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37352,meta37351__$1){
var self__ = this;
var _37352__$1 = this;
return (new cljs.core.async.t_cljs$core$async37350(self__.alt_handler,self__.flag,self__.cb,meta37351__$1));
});

cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37352){
var self__ = this;
var _37352__$1 = this;
return self__.meta37351;
});

cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async37350.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async37350.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta37351","meta37351",-1847927560,null)], null);
});

cljs.core.async.t_cljs$core$async37350.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async37350.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async37350";

cljs.core.async.t_cljs$core$async37350.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async37350");
});

cljs.core.async.__GT_t_cljs$core$async37350 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async37350(alt_handler__$1,flag__$1,cb__$1,meta37351){
return (new cljs.core.async.t_cljs$core$async37350(alt_handler__$1,flag__$1,cb__$1,meta37351));
});

}

return (new cljs.core.async.t_cljs$core$async37350(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__37355_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37355_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__37356_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37356_SHARP_,port], null));
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
var G__37358 = (i + (1));
i = G__37358;
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
var len__19784__auto___37364 = arguments.length;
var i__19785__auto___37365 = (0);
while(true){
if((i__19785__auto___37365 < len__19784__auto___37364)){
args__19791__auto__.push((arguments[i__19785__auto___37365]));

var G__37366 = (i__19785__auto___37365 + (1));
i__19785__auto___37365 = G__37366;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__37361){
var map__37362 = p__37361;
var map__37362__$1 = ((((!((map__37362 == null)))?((((map__37362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37362):map__37362);
var opts = map__37362__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq37359){
var G__37360 = cljs.core.first.call(null,seq37359);
var seq37359__$1 = cljs.core.next.call(null,seq37359);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__37360,seq37359__$1);
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
var args37368 = [];
var len__19784__auto___37433 = arguments.length;
var i__19785__auto___37434 = (0);
while(true){
if((i__19785__auto___37434 < len__19784__auto___37433)){
args37368.push((arguments[i__19785__auto___37434]));

var G__37435 = (i__19785__auto___37434 + (1));
i__19785__auto___37434 = G__37435;
continue;
} else {
}
break;
}

var G__37377 = args37368.length;
switch (G__37377) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37368.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33664__auto___37437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___37437){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___37437){
return (function (state_37409){
var state_val_37410 = (state_37409[(1)]);
if((state_val_37410 === (7))){
var inst_37401 = (state_37409[(2)]);
var state_37409__$1 = state_37409;
var statearr_37411_37438 = state_37409__$1;
(statearr_37411_37438[(2)] = inst_37401);

(statearr_37411_37438[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (1))){
var state_37409__$1 = state_37409;
var statearr_37412_37439 = state_37409__$1;
(statearr_37412_37439[(2)] = null);

(statearr_37412_37439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (4))){
var inst_37380 = (state_37409[(7)]);
var inst_37380__$1 = (state_37409[(2)]);
var inst_37381 = (inst_37380__$1 == null);
var state_37409__$1 = (function (){var statearr_37413 = state_37409;
(statearr_37413[(7)] = inst_37380__$1);

return statearr_37413;
})();
if(cljs.core.truth_(inst_37381)){
var statearr_37414_37440 = state_37409__$1;
(statearr_37414_37440[(1)] = (5));

} else {
var statearr_37415_37441 = state_37409__$1;
(statearr_37415_37441[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (13))){
var state_37409__$1 = state_37409;
var statearr_37416_37442 = state_37409__$1;
(statearr_37416_37442[(2)] = null);

(statearr_37416_37442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (6))){
var inst_37380 = (state_37409[(7)]);
var state_37409__$1 = state_37409;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37409__$1,(11),to,inst_37380);
} else {
if((state_val_37410 === (3))){
var inst_37407 = (state_37409[(2)]);
var state_37409__$1 = state_37409;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37409__$1,inst_37407);
} else {
if((state_val_37410 === (12))){
var state_37409__$1 = state_37409;
var statearr_37417_37443 = state_37409__$1;
(statearr_37417_37443[(2)] = null);

(statearr_37417_37443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (2))){
var state_37409__$1 = state_37409;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37409__$1,(4),from);
} else {
if((state_val_37410 === (11))){
var inst_37390 = (state_37409[(2)]);
var state_37409__$1 = state_37409;
if(cljs.core.truth_(inst_37390)){
var statearr_37418_37444 = state_37409__$1;
(statearr_37418_37444[(1)] = (12));

} else {
var statearr_37419_37445 = state_37409__$1;
(statearr_37419_37445[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (9))){
var state_37409__$1 = state_37409;
var statearr_37420_37446 = state_37409__$1;
(statearr_37420_37446[(2)] = null);

(statearr_37420_37446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (5))){
var state_37409__$1 = state_37409;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37421_37447 = state_37409__$1;
(statearr_37421_37447[(1)] = (8));

} else {
var statearr_37422_37448 = state_37409__$1;
(statearr_37422_37448[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (14))){
var inst_37399 = (state_37409[(2)]);
var state_37409__$1 = state_37409;
var statearr_37423_37449 = state_37409__$1;
(statearr_37423_37449[(2)] = inst_37399);

(statearr_37423_37449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (10))){
var inst_37387 = (state_37409[(2)]);
var state_37409__$1 = state_37409;
var statearr_37424_37450 = state_37409__$1;
(statearr_37424_37450[(2)] = inst_37387);

(statearr_37424_37450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37410 === (8))){
var inst_37384 = cljs.core.async.close_BANG_.call(null,to);
var state_37409__$1 = state_37409;
var statearr_37425_37451 = state_37409__$1;
(statearr_37425_37451[(2)] = inst_37384);

(statearr_37425_37451[(1)] = (10));


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
});})(c__33664__auto___37437))
;
return ((function (switch__33643__auto__,c__33664__auto___37437){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_37429 = [null,null,null,null,null,null,null,null];
(statearr_37429[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_37429[(1)] = (1));

return statearr_37429;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_37409){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_37409);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e37430){if((e37430 instanceof Object)){
var ex__33647__auto__ = e37430;
var statearr_37431_37452 = state_37409;
(statearr_37431_37452[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37409);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37453 = state_37409;
state_37409 = G__37453;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_37409){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_37409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___37437))
})();
var state__33666__auto__ = (function (){var statearr_37432 = f__33665__auto__.call(null);
(statearr_37432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___37437);

return statearr_37432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___37437))
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
return (function (p__37637){
var vec__37638 = p__37637;
var v = cljs.core.nth.call(null,vec__37638,(0),null);
var p = cljs.core.nth.call(null,vec__37638,(1),null);
var job = vec__37638;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33664__auto___37830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___37830,res,vec__37638,v,p,job,jobs,results){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___37830,res,vec__37638,v,p,job,jobs,results){
return (function (state_37643){
var state_val_37644 = (state_37643[(1)]);
if((state_val_37644 === (1))){
var state_37643__$1 = state_37643;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37643__$1,(2),res,v);
} else {
if((state_val_37644 === (2))){
var inst_37640 = (state_37643[(2)]);
var inst_37641 = cljs.core.async.close_BANG_.call(null,res);
var state_37643__$1 = (function (){var statearr_37645 = state_37643;
(statearr_37645[(7)] = inst_37640);

return statearr_37645;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37643__$1,inst_37641);
} else {
return null;
}
}
});})(c__33664__auto___37830,res,vec__37638,v,p,job,jobs,results))
;
return ((function (switch__33643__auto__,c__33664__auto___37830,res,vec__37638,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0 = (function (){
var statearr_37649 = [null,null,null,null,null,null,null,null];
(statearr_37649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__);

(statearr_37649[(1)] = (1));

return statearr_37649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1 = (function (state_37643){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_37643);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e37650){if((e37650 instanceof Object)){
var ex__33647__auto__ = e37650;
var statearr_37651_37838 = state_37643;
(statearr_37651_37838[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37643);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37839 = state_37643;
state_37643 = G__37839;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = function(state_37643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1.call(this,state_37643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___37830,res,vec__37638,v,p,job,jobs,results))
})();
var state__33666__auto__ = (function (){var statearr_37652 = f__33665__auto__.call(null);
(statearr_37652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___37830);

return statearr_37652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___37830,res,vec__37638,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37653){
var vec__37654 = p__37653;
var v = cljs.core.nth.call(null,vec__37654,(0),null);
var p = cljs.core.nth.call(null,vec__37654,(1),null);
var job = vec__37654;
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
var n__19629__auto___37844 = n;
var __37845 = (0);
while(true){
if((__37845 < n__19629__auto___37844)){
var G__37655_37846 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37655_37846) {
case "compute":
var c__33664__auto___37848 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37845,c__33664__auto___37848,G__37655_37846,n__19629__auto___37844,jobs,results,process,async){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (__37845,c__33664__auto___37848,G__37655_37846,n__19629__auto___37844,jobs,results,process,async){
return (function (state_37668){
var state_val_37669 = (state_37668[(1)]);
if((state_val_37669 === (1))){
var state_37668__$1 = state_37668;
var statearr_37670_37849 = state_37668__$1;
(statearr_37670_37849[(2)] = null);

(statearr_37670_37849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (2))){
var state_37668__$1 = state_37668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37668__$1,(4),jobs);
} else {
if((state_val_37669 === (3))){
var inst_37666 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37668__$1,inst_37666);
} else {
if((state_val_37669 === (4))){
var inst_37658 = (state_37668[(2)]);
var inst_37659 = process.call(null,inst_37658);
var state_37668__$1 = state_37668;
if(cljs.core.truth_(inst_37659)){
var statearr_37671_37850 = state_37668__$1;
(statearr_37671_37850[(1)] = (5));

} else {
var statearr_37672_37851 = state_37668__$1;
(statearr_37672_37851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (5))){
var state_37668__$1 = state_37668;
var statearr_37673_37852 = state_37668__$1;
(statearr_37673_37852[(2)] = null);

(statearr_37673_37852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (6))){
var state_37668__$1 = state_37668;
var statearr_37674_37853 = state_37668__$1;
(statearr_37674_37853[(2)] = null);

(statearr_37674_37853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37669 === (7))){
var inst_37664 = (state_37668[(2)]);
var state_37668__$1 = state_37668;
var statearr_37675_37854 = state_37668__$1;
(statearr_37675_37854[(2)] = inst_37664);

(statearr_37675_37854[(1)] = (3));


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
});})(__37845,c__33664__auto___37848,G__37655_37846,n__19629__auto___37844,jobs,results,process,async))
;
return ((function (__37845,switch__33643__auto__,c__33664__auto___37848,G__37655_37846,n__19629__auto___37844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0 = (function (){
var statearr_37679 = [null,null,null,null,null,null,null];
(statearr_37679[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__);

(statearr_37679[(1)] = (1));

return statearr_37679;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1 = (function (state_37668){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_37668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e37680){if((e37680 instanceof Object)){
var ex__33647__auto__ = e37680;
var statearr_37681_37856 = state_37668;
(statearr_37681_37856[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37857 = state_37668;
state_37668 = G__37857;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = function(state_37668){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1.call(this,state_37668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__;
})()
;})(__37845,switch__33643__auto__,c__33664__auto___37848,G__37655_37846,n__19629__auto___37844,jobs,results,process,async))
})();
var state__33666__auto__ = (function (){var statearr_37682 = f__33665__auto__.call(null);
(statearr_37682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___37848);

return statearr_37682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(__37845,c__33664__auto___37848,G__37655_37846,n__19629__auto___37844,jobs,results,process,async))
);


break;
case "async":
var c__33664__auto___37859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37845,c__33664__auto___37859,G__37655_37846,n__19629__auto___37844,jobs,results,process,async){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (__37845,c__33664__auto___37859,G__37655_37846,n__19629__auto___37844,jobs,results,process,async){
return (function (state_37695){
var state_val_37696 = (state_37695[(1)]);
if((state_val_37696 === (1))){
var state_37695__$1 = state_37695;
var statearr_37697_37861 = state_37695__$1;
(statearr_37697_37861[(2)] = null);

(statearr_37697_37861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37696 === (2))){
var state_37695__$1 = state_37695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37695__$1,(4),jobs);
} else {
if((state_val_37696 === (3))){
var inst_37693 = (state_37695[(2)]);
var state_37695__$1 = state_37695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37695__$1,inst_37693);
} else {
if((state_val_37696 === (4))){
var inst_37685 = (state_37695[(2)]);
var inst_37686 = async.call(null,inst_37685);
var state_37695__$1 = state_37695;
if(cljs.core.truth_(inst_37686)){
var statearr_37698_37862 = state_37695__$1;
(statearr_37698_37862[(1)] = (5));

} else {
var statearr_37699_37863 = state_37695__$1;
(statearr_37699_37863[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37696 === (5))){
var state_37695__$1 = state_37695;
var statearr_37700_37866 = state_37695__$1;
(statearr_37700_37866[(2)] = null);

(statearr_37700_37866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37696 === (6))){
var state_37695__$1 = state_37695;
var statearr_37701_37868 = state_37695__$1;
(statearr_37701_37868[(2)] = null);

(statearr_37701_37868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37696 === (7))){
var inst_37691 = (state_37695[(2)]);
var state_37695__$1 = state_37695;
var statearr_37702_37869 = state_37695__$1;
(statearr_37702_37869[(2)] = inst_37691);

(statearr_37702_37869[(1)] = (3));


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
});})(__37845,c__33664__auto___37859,G__37655_37846,n__19629__auto___37844,jobs,results,process,async))
;
return ((function (__37845,switch__33643__auto__,c__33664__auto___37859,G__37655_37846,n__19629__auto___37844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0 = (function (){
var statearr_37710 = [null,null,null,null,null,null,null];
(statearr_37710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__);

(statearr_37710[(1)] = (1));

return statearr_37710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1 = (function (state_37695){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_37695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e37711){if((e37711 instanceof Object)){
var ex__33647__auto__ = e37711;
var statearr_37712_37872 = state_37695;
(statearr_37712_37872[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37711;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37873 = state_37695;
state_37695 = G__37873;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = function(state_37695){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1.call(this,state_37695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__;
})()
;})(__37845,switch__33643__auto__,c__33664__auto___37859,G__37655_37846,n__19629__auto___37844,jobs,results,process,async))
})();
var state__33666__auto__ = (function (){var statearr_37713 = f__33665__auto__.call(null);
(statearr_37713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___37859);

return statearr_37713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(__37845,c__33664__auto___37859,G__37655_37846,n__19629__auto___37844,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37874 = (__37845 + (1));
__37845 = G__37874;
continue;
} else {
}
break;
}

var c__33664__auto___37875 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___37875,jobs,results,process,async){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___37875,jobs,results,process,async){
return (function (state_37735){
var state_val_37736 = (state_37735[(1)]);
if((state_val_37736 === (1))){
var state_37735__$1 = state_37735;
var statearr_37737_37876 = state_37735__$1;
(statearr_37737_37876[(2)] = null);

(statearr_37737_37876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37736 === (2))){
var state_37735__$1 = state_37735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37735__$1,(4),from);
} else {
if((state_val_37736 === (3))){
var inst_37733 = (state_37735[(2)]);
var state_37735__$1 = state_37735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37735__$1,inst_37733);
} else {
if((state_val_37736 === (4))){
var inst_37716 = (state_37735[(7)]);
var inst_37716__$1 = (state_37735[(2)]);
var inst_37717 = (inst_37716__$1 == null);
var state_37735__$1 = (function (){var statearr_37738 = state_37735;
(statearr_37738[(7)] = inst_37716__$1);

return statearr_37738;
})();
if(cljs.core.truth_(inst_37717)){
var statearr_37739_37885 = state_37735__$1;
(statearr_37739_37885[(1)] = (5));

} else {
var statearr_37740_37886 = state_37735__$1;
(statearr_37740_37886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37736 === (5))){
var inst_37719 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37735__$1 = state_37735;
var statearr_37741_37895 = state_37735__$1;
(statearr_37741_37895[(2)] = inst_37719);

(statearr_37741_37895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37736 === (6))){
var inst_37716 = (state_37735[(7)]);
var inst_37721 = (state_37735[(8)]);
var inst_37721__$1 = cljs.core.async.chan.call(null,(1));
var inst_37722 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37723 = [inst_37716,inst_37721__$1];
var inst_37724 = (new cljs.core.PersistentVector(null,2,(5),inst_37722,inst_37723,null));
var state_37735__$1 = (function (){var statearr_37742 = state_37735;
(statearr_37742[(8)] = inst_37721__$1);

return statearr_37742;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37735__$1,(8),jobs,inst_37724);
} else {
if((state_val_37736 === (7))){
var inst_37731 = (state_37735[(2)]);
var state_37735__$1 = state_37735;
var statearr_37743_37896 = state_37735__$1;
(statearr_37743_37896[(2)] = inst_37731);

(statearr_37743_37896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37736 === (8))){
var inst_37721 = (state_37735[(8)]);
var inst_37726 = (state_37735[(2)]);
var state_37735__$1 = (function (){var statearr_37744 = state_37735;
(statearr_37744[(9)] = inst_37726);

return statearr_37744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37735__$1,(9),results,inst_37721);
} else {
if((state_val_37736 === (9))){
var inst_37728 = (state_37735[(2)]);
var state_37735__$1 = (function (){var statearr_37745 = state_37735;
(statearr_37745[(10)] = inst_37728);

return statearr_37745;
})();
var statearr_37746_37900 = state_37735__$1;
(statearr_37746_37900[(2)] = null);

(statearr_37746_37900[(1)] = (2));


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
});})(c__33664__auto___37875,jobs,results,process,async))
;
return ((function (switch__33643__auto__,c__33664__auto___37875,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0 = (function (){
var statearr_37751 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__);

(statearr_37751[(1)] = (1));

return statearr_37751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1 = (function (state_37735){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_37735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e37752){if((e37752 instanceof Object)){
var ex__33647__auto__ = e37752;
var statearr_37753_37901 = state_37735;
(statearr_37753_37901[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37902 = state_37735;
state_37735 = G__37902;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = function(state_37735){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1.call(this,state_37735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___37875,jobs,results,process,async))
})();
var state__33666__auto__ = (function (){var statearr_37754 = f__33665__auto__.call(null);
(statearr_37754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___37875);

return statearr_37754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___37875,jobs,results,process,async))
);


var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__,jobs,results,process,async){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__,jobs,results,process,async){
return (function (state_37792){
var state_val_37793 = (state_37792[(1)]);
if((state_val_37793 === (7))){
var inst_37788 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37794_37909 = state_37792__$1;
(statearr_37794_37909[(2)] = inst_37788);

(statearr_37794_37909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (20))){
var state_37792__$1 = state_37792;
var statearr_37799_37910 = state_37792__$1;
(statearr_37799_37910[(2)] = null);

(statearr_37799_37910[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (1))){
var state_37792__$1 = state_37792;
var statearr_37800_37911 = state_37792__$1;
(statearr_37800_37911[(2)] = null);

(statearr_37800_37911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (4))){
var inst_37757 = (state_37792[(7)]);
var inst_37757__$1 = (state_37792[(2)]);
var inst_37758 = (inst_37757__$1 == null);
var state_37792__$1 = (function (){var statearr_37801 = state_37792;
(statearr_37801[(7)] = inst_37757__$1);

return statearr_37801;
})();
if(cljs.core.truth_(inst_37758)){
var statearr_37802_37916 = state_37792__$1;
(statearr_37802_37916[(1)] = (5));

} else {
var statearr_37803_37917 = state_37792__$1;
(statearr_37803_37917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (15))){
var inst_37770 = (state_37792[(8)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37792__$1,(18),to,inst_37770);
} else {
if((state_val_37793 === (21))){
var inst_37783 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37804_37918 = state_37792__$1;
(statearr_37804_37918[(2)] = inst_37783);

(statearr_37804_37918[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (13))){
var inst_37785 = (state_37792[(2)]);
var state_37792__$1 = (function (){var statearr_37805 = state_37792;
(statearr_37805[(9)] = inst_37785);

return statearr_37805;
})();
var statearr_37806_37919 = state_37792__$1;
(statearr_37806_37919[(2)] = null);

(statearr_37806_37919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (6))){
var inst_37757 = (state_37792[(7)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37792__$1,(11),inst_37757);
} else {
if((state_val_37793 === (17))){
var inst_37778 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
if(cljs.core.truth_(inst_37778)){
var statearr_37807_37920 = state_37792__$1;
(statearr_37807_37920[(1)] = (19));

} else {
var statearr_37808_37921 = state_37792__$1;
(statearr_37808_37921[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (3))){
var inst_37790 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37792__$1,inst_37790);
} else {
if((state_val_37793 === (12))){
var inst_37767 = (state_37792[(10)]);
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37792__$1,(14),inst_37767);
} else {
if((state_val_37793 === (2))){
var state_37792__$1 = state_37792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37792__$1,(4),results);
} else {
if((state_val_37793 === (19))){
var state_37792__$1 = state_37792;
var statearr_37809_37925 = state_37792__$1;
(statearr_37809_37925[(2)] = null);

(statearr_37809_37925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (11))){
var inst_37767 = (state_37792[(2)]);
var state_37792__$1 = (function (){var statearr_37810 = state_37792;
(statearr_37810[(10)] = inst_37767);

return statearr_37810;
})();
var statearr_37811_37926 = state_37792__$1;
(statearr_37811_37926[(2)] = null);

(statearr_37811_37926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (9))){
var state_37792__$1 = state_37792;
var statearr_37812_37927 = state_37792__$1;
(statearr_37812_37927[(2)] = null);

(statearr_37812_37927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (5))){
var state_37792__$1 = state_37792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37813_37928 = state_37792__$1;
(statearr_37813_37928[(1)] = (8));

} else {
var statearr_37814_37929 = state_37792__$1;
(statearr_37814_37929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (14))){
var inst_37772 = (state_37792[(11)]);
var inst_37770 = (state_37792[(8)]);
var inst_37770__$1 = (state_37792[(2)]);
var inst_37771 = (inst_37770__$1 == null);
var inst_37772__$1 = cljs.core.not.call(null,inst_37771);
var state_37792__$1 = (function (){var statearr_37815 = state_37792;
(statearr_37815[(11)] = inst_37772__$1);

(statearr_37815[(8)] = inst_37770__$1);

return statearr_37815;
})();
if(inst_37772__$1){
var statearr_37816_37931 = state_37792__$1;
(statearr_37816_37931[(1)] = (15));

} else {
var statearr_37817_37932 = state_37792__$1;
(statearr_37817_37932[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (16))){
var inst_37772 = (state_37792[(11)]);
var state_37792__$1 = state_37792;
var statearr_37818_37933 = state_37792__$1;
(statearr_37818_37933[(2)] = inst_37772);

(statearr_37818_37933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (10))){
var inst_37764 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37819_37937 = state_37792__$1;
(statearr_37819_37937[(2)] = inst_37764);

(statearr_37819_37937[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (18))){
var inst_37775 = (state_37792[(2)]);
var state_37792__$1 = state_37792;
var statearr_37820_37938 = state_37792__$1;
(statearr_37820_37938[(2)] = inst_37775);

(statearr_37820_37938[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37793 === (8))){
var inst_37761 = cljs.core.async.close_BANG_.call(null,to);
var state_37792__$1 = state_37792;
var statearr_37821_37943 = state_37792__$1;
(statearr_37821_37943[(2)] = inst_37761);

(statearr_37821_37943[(1)] = (10));


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
});})(c__33664__auto__,jobs,results,process,async))
;
return ((function (switch__33643__auto__,c__33664__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0 = (function (){
var statearr_37825 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__);

(statearr_37825[(1)] = (1));

return statearr_37825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1 = (function (state_37792){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_37792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e37826){if((e37826 instanceof Object)){
var ex__33647__auto__ = e37826;
var statearr_37827_37944 = state_37792;
(statearr_37827_37944[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37945 = state_37792;
state_37792 = G__37945;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__ = function(state_37792){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1.call(this,state_37792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33644__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__,jobs,results,process,async))
})();
var state__33666__auto__ = (function (){var statearr_37828 = f__33665__auto__.call(null);
(statearr_37828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_37828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__,jobs,results,process,async))
);

return c__33664__auto__;
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
var args37946 = [];
var len__19784__auto___37949 = arguments.length;
var i__19785__auto___37950 = (0);
while(true){
if((i__19785__auto___37950 < len__19784__auto___37949)){
args37946.push((arguments[i__19785__auto___37950]));

var G__37951 = (i__19785__auto___37950 + (1));
i__19785__auto___37950 = G__37951;
continue;
} else {
}
break;
}

var G__37948 = args37946.length;
switch (G__37948) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37946.length)].join('')));

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
var args37953 = [];
var len__19784__auto___37956 = arguments.length;
var i__19785__auto___37957 = (0);
while(true){
if((i__19785__auto___37957 < len__19784__auto___37956)){
args37953.push((arguments[i__19785__auto___37957]));

var G__37958 = (i__19785__auto___37957 + (1));
i__19785__auto___37957 = G__37958;
continue;
} else {
}
break;
}

var G__37955 = args37953.length;
switch (G__37955) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37953.length)].join('')));

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
var args37966 = [];
var len__19784__auto___38025 = arguments.length;
var i__19785__auto___38026 = (0);
while(true){
if((i__19785__auto___38026 < len__19784__auto___38025)){
args37966.push((arguments[i__19785__auto___38026]));

var G__38027 = (i__19785__auto___38026 + (1));
i__19785__auto___38026 = G__38027;
continue;
} else {
}
break;
}

var G__37968 = args37966.length;
switch (G__37968) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37966.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33664__auto___38029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___38029,tc,fc){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___38029,tc,fc){
return (function (state_37994){
var state_val_37995 = (state_37994[(1)]);
if((state_val_37995 === (7))){
var inst_37990 = (state_37994[(2)]);
var state_37994__$1 = state_37994;
var statearr_37996_38030 = state_37994__$1;
(statearr_37996_38030[(2)] = inst_37990);

(statearr_37996_38030[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (1))){
var state_37994__$1 = state_37994;
var statearr_37997_38031 = state_37994__$1;
(statearr_37997_38031[(2)] = null);

(statearr_37997_38031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (4))){
var inst_37971 = (state_37994[(7)]);
var inst_37971__$1 = (state_37994[(2)]);
var inst_37972 = (inst_37971__$1 == null);
var state_37994__$1 = (function (){var statearr_37998 = state_37994;
(statearr_37998[(7)] = inst_37971__$1);

return statearr_37998;
})();
if(cljs.core.truth_(inst_37972)){
var statearr_37999_38032 = state_37994__$1;
(statearr_37999_38032[(1)] = (5));

} else {
var statearr_38000_38033 = state_37994__$1;
(statearr_38000_38033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (13))){
var state_37994__$1 = state_37994;
var statearr_38001_38034 = state_37994__$1;
(statearr_38001_38034[(2)] = null);

(statearr_38001_38034[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (6))){
var inst_37971 = (state_37994[(7)]);
var inst_37977 = p.call(null,inst_37971);
var state_37994__$1 = state_37994;
if(cljs.core.truth_(inst_37977)){
var statearr_38002_38035 = state_37994__$1;
(statearr_38002_38035[(1)] = (9));

} else {
var statearr_38003_38036 = state_37994__$1;
(statearr_38003_38036[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (3))){
var inst_37992 = (state_37994[(2)]);
var state_37994__$1 = state_37994;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37994__$1,inst_37992);
} else {
if((state_val_37995 === (12))){
var state_37994__$1 = state_37994;
var statearr_38004_38037 = state_37994__$1;
(statearr_38004_38037[(2)] = null);

(statearr_38004_38037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (2))){
var state_37994__$1 = state_37994;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37994__$1,(4),ch);
} else {
if((state_val_37995 === (11))){
var inst_37971 = (state_37994[(7)]);
var inst_37981 = (state_37994[(2)]);
var state_37994__$1 = state_37994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37994__$1,(8),inst_37981,inst_37971);
} else {
if((state_val_37995 === (9))){
var state_37994__$1 = state_37994;
var statearr_38005_38039 = state_37994__$1;
(statearr_38005_38039[(2)] = tc);

(statearr_38005_38039[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (5))){
var inst_37974 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37975 = cljs.core.async.close_BANG_.call(null,fc);
var state_37994__$1 = (function (){var statearr_38006 = state_37994;
(statearr_38006[(8)] = inst_37974);

return statearr_38006;
})();
var statearr_38007_38041 = state_37994__$1;
(statearr_38007_38041[(2)] = inst_37975);

(statearr_38007_38041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (14))){
var inst_37988 = (state_37994[(2)]);
var state_37994__$1 = state_37994;
var statearr_38008_38042 = state_37994__$1;
(statearr_38008_38042[(2)] = inst_37988);

(statearr_38008_38042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (10))){
var state_37994__$1 = state_37994;
var statearr_38009_38043 = state_37994__$1;
(statearr_38009_38043[(2)] = fc);

(statearr_38009_38043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37995 === (8))){
var inst_37983 = (state_37994[(2)]);
var state_37994__$1 = state_37994;
if(cljs.core.truth_(inst_37983)){
var statearr_38016_38044 = state_37994__$1;
(statearr_38016_38044[(1)] = (12));

} else {
var statearr_38017_38045 = state_37994__$1;
(statearr_38017_38045[(1)] = (13));

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
});})(c__33664__auto___38029,tc,fc))
;
return ((function (switch__33643__auto__,c__33664__auto___38029,tc,fc){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_38021 = [null,null,null,null,null,null,null,null,null];
(statearr_38021[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_38021[(1)] = (1));

return statearr_38021;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_37994){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_37994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e38022){if((e38022 instanceof Object)){
var ex__33647__auto__ = e38022;
var statearr_38023_38046 = state_37994;
(statearr_38023_38046[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37994);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38047 = state_37994;
state_37994 = G__38047;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_37994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_37994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___38029,tc,fc))
})();
var state__33666__auto__ = (function (){var statearr_38024 = f__33665__auto__.call(null);
(statearr_38024[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___38029);

return statearr_38024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___38029,tc,fc))
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
var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__){
return (function (state_38116){
var state_val_38117 = (state_38116[(1)]);
if((state_val_38117 === (7))){
var inst_38112 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
var statearr_38121_38155 = state_38116__$1;
(statearr_38121_38155[(2)] = inst_38112);

(statearr_38121_38155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (1))){
var inst_38091 = init;
var state_38116__$1 = (function (){var statearr_38123 = state_38116;
(statearr_38123[(7)] = inst_38091);

return statearr_38123;
})();
var statearr_38124_38156 = state_38116__$1;
(statearr_38124_38156[(2)] = null);

(statearr_38124_38156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (4))){
var inst_38098 = (state_38116[(8)]);
var inst_38098__$1 = (state_38116[(2)]);
var inst_38099 = (inst_38098__$1 == null);
var state_38116__$1 = (function (){var statearr_38126 = state_38116;
(statearr_38126[(8)] = inst_38098__$1);

return statearr_38126;
})();
if(cljs.core.truth_(inst_38099)){
var statearr_38130_38157 = state_38116__$1;
(statearr_38130_38157[(1)] = (5));

} else {
var statearr_38131_38159 = state_38116__$1;
(statearr_38131_38159[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (6))){
var inst_38091 = (state_38116[(7)]);
var inst_38098 = (state_38116[(8)]);
var inst_38103 = (state_38116[(9)]);
var inst_38103__$1 = f.call(null,inst_38091,inst_38098);
var inst_38104 = cljs.core.reduced_QMARK_.call(null,inst_38103__$1);
var state_38116__$1 = (function (){var statearr_38133 = state_38116;
(statearr_38133[(9)] = inst_38103__$1);

return statearr_38133;
})();
if(inst_38104){
var statearr_38135_38160 = state_38116__$1;
(statearr_38135_38160[(1)] = (8));

} else {
var statearr_38136_38161 = state_38116__$1;
(statearr_38136_38161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (3))){
var inst_38114 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38116__$1,inst_38114);
} else {
if((state_val_38117 === (2))){
var state_38116__$1 = state_38116;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38116__$1,(4),ch);
} else {
if((state_val_38117 === (9))){
var inst_38103 = (state_38116[(9)]);
var inst_38091 = inst_38103;
var state_38116__$1 = (function (){var statearr_38139 = state_38116;
(statearr_38139[(7)] = inst_38091);

return statearr_38139;
})();
var statearr_38144_38166 = state_38116__$1;
(statearr_38144_38166[(2)] = null);

(statearr_38144_38166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (5))){
var inst_38091 = (state_38116[(7)]);
var state_38116__$1 = state_38116;
var statearr_38145_38167 = state_38116__$1;
(statearr_38145_38167[(2)] = inst_38091);

(statearr_38145_38167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (10))){
var inst_38110 = (state_38116[(2)]);
var state_38116__$1 = state_38116;
var statearr_38146_38169 = state_38116__$1;
(statearr_38146_38169[(2)] = inst_38110);

(statearr_38146_38169[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38117 === (8))){
var inst_38103 = (state_38116[(9)]);
var inst_38106 = cljs.core.deref.call(null,inst_38103);
var state_38116__$1 = state_38116;
var statearr_38147_38171 = state_38116__$1;
(statearr_38147_38171[(2)] = inst_38106);

(statearr_38147_38171[(1)] = (10));


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
});})(c__33664__auto__))
;
return ((function (switch__33643__auto__,c__33664__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33644__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33644__auto____0 = (function (){
var statearr_38151 = [null,null,null,null,null,null,null,null,null,null];
(statearr_38151[(0)] = cljs$core$async$reduce_$_state_machine__33644__auto__);

(statearr_38151[(1)] = (1));

return statearr_38151;
});
var cljs$core$async$reduce_$_state_machine__33644__auto____1 = (function (state_38116){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_38116);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e38152){if((e38152 instanceof Object)){
var ex__33647__auto__ = e38152;
var statearr_38153_38174 = state_38116;
(statearr_38153_38174[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38175 = state_38116;
state_38116 = G__38175;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33644__auto__ = function(state_38116){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33644__auto____1.call(this,state_38116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33644__auto____0;
cljs$core$async$reduce_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33644__auto____1;
return cljs$core$async$reduce_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__))
})();
var state__33666__auto__ = (function (){var statearr_38154 = f__33665__auto__.call(null);
(statearr_38154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_38154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__))
);

return c__33664__auto__;
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
var args38176 = [];
var len__19784__auto___38241 = arguments.length;
var i__19785__auto___38242 = (0);
while(true){
if((i__19785__auto___38242 < len__19784__auto___38241)){
args38176.push((arguments[i__19785__auto___38242]));

var G__38243 = (i__19785__auto___38242 + (1));
i__19785__auto___38242 = G__38243;
continue;
} else {
}
break;
}

var G__38178 = args38176.length;
switch (G__38178) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38176.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__){
return (function (state_38203){
var state_val_38204 = (state_38203[(1)]);
if((state_val_38204 === (7))){
var inst_38185 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38205_38249 = state_38203__$1;
(statearr_38205_38249[(2)] = inst_38185);

(statearr_38205_38249[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (1))){
var inst_38179 = cljs.core.seq.call(null,coll);
var inst_38180 = inst_38179;
var state_38203__$1 = (function (){var statearr_38206 = state_38203;
(statearr_38206[(7)] = inst_38180);

return statearr_38206;
})();
var statearr_38207_38252 = state_38203__$1;
(statearr_38207_38252[(2)] = null);

(statearr_38207_38252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (4))){
var inst_38180 = (state_38203[(7)]);
var inst_38183 = cljs.core.first.call(null,inst_38180);
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38203__$1,(7),ch,inst_38183);
} else {
if((state_val_38204 === (13))){
var inst_38197 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38208_38258 = state_38203__$1;
(statearr_38208_38258[(2)] = inst_38197);

(statearr_38208_38258[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (6))){
var inst_38188 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
if(cljs.core.truth_(inst_38188)){
var statearr_38209_38259 = state_38203__$1;
(statearr_38209_38259[(1)] = (8));

} else {
var statearr_38210_38260 = state_38203__$1;
(statearr_38210_38260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (3))){
var inst_38201 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38203__$1,inst_38201);
} else {
if((state_val_38204 === (12))){
var state_38203__$1 = state_38203;
var statearr_38211_38261 = state_38203__$1;
(statearr_38211_38261[(2)] = null);

(statearr_38211_38261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (2))){
var inst_38180 = (state_38203[(7)]);
var state_38203__$1 = state_38203;
if(cljs.core.truth_(inst_38180)){
var statearr_38212_38262 = state_38203__$1;
(statearr_38212_38262[(1)] = (4));

} else {
var statearr_38213_38263 = state_38203__$1;
(statearr_38213_38263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (11))){
var inst_38194 = cljs.core.async.close_BANG_.call(null,ch);
var state_38203__$1 = state_38203;
var statearr_38214_38264 = state_38203__$1;
(statearr_38214_38264[(2)] = inst_38194);

(statearr_38214_38264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (9))){
var state_38203__$1 = state_38203;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38216_38265 = state_38203__$1;
(statearr_38216_38265[(1)] = (11));

} else {
var statearr_38217_38266 = state_38203__$1;
(statearr_38217_38266[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (5))){
var inst_38180 = (state_38203[(7)]);
var state_38203__$1 = state_38203;
var statearr_38219_38267 = state_38203__$1;
(statearr_38219_38267[(2)] = inst_38180);

(statearr_38219_38267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (10))){
var inst_38199 = (state_38203[(2)]);
var state_38203__$1 = state_38203;
var statearr_38222_38268 = state_38203__$1;
(statearr_38222_38268[(2)] = inst_38199);

(statearr_38222_38268[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38204 === (8))){
var inst_38180 = (state_38203[(7)]);
var inst_38190 = cljs.core.next.call(null,inst_38180);
var inst_38180__$1 = inst_38190;
var state_38203__$1 = (function (){var statearr_38223 = state_38203;
(statearr_38223[(7)] = inst_38180__$1);

return statearr_38223;
})();
var statearr_38225_38276 = state_38203__$1;
(statearr_38225_38276[(2)] = null);

(statearr_38225_38276[(1)] = (2));


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
});})(c__33664__auto__))
;
return ((function (switch__33643__auto__,c__33664__auto__){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_38232 = [null,null,null,null,null,null,null,null];
(statearr_38232[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_38232[(1)] = (1));

return statearr_38232;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_38203){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_38203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e38233){if((e38233 instanceof Object)){
var ex__33647__auto__ = e38233;
var statearr_38235_38277 = state_38203;
(statearr_38235_38277[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38278 = state_38203;
state_38203 = G__38278;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_38203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_38203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__))
})();
var state__33666__auto__ = (function (){var statearr_38237 = f__33665__auto__.call(null);
(statearr_38237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_38237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__))
);

return c__33664__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async38506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38506 = (function (mult,ch,cs,meta38507){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta38507 = meta38507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38508,meta38507__$1){
var self__ = this;
var _38508__$1 = this;
return (new cljs.core.async.t_cljs$core$async38506(self__.mult,self__.ch,self__.cs,meta38507__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38508){
var self__ = this;
var _38508__$1 = this;
return self__.meta38507;
});})(cs))
;

cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38506.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async38506.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta38507","meta38507",-1082180341,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async38506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38506";

cljs.core.async.t_cljs$core$async38506.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async38506");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async38506 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async38506(mult__$1,ch__$1,cs__$1,meta38507){
return (new cljs.core.async.t_cljs$core$async38506(mult__$1,ch__$1,cs__$1,meta38507));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async38506(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33664__auto___38727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___38727,cs,m,dchan,dctr,done){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___38727,cs,m,dchan,dctr,done){
return (function (state_38639){
var state_val_38640 = (state_38639[(1)]);
if((state_val_38640 === (7))){
var inst_38635 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38641_38728 = state_38639__$1;
(statearr_38641_38728[(2)] = inst_38635);

(statearr_38641_38728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (20))){
var inst_38540 = (state_38639[(7)]);
var inst_38550 = cljs.core.first.call(null,inst_38540);
var inst_38551 = cljs.core.nth.call(null,inst_38550,(0),null);
var inst_38552 = cljs.core.nth.call(null,inst_38550,(1),null);
var state_38639__$1 = (function (){var statearr_38642 = state_38639;
(statearr_38642[(8)] = inst_38551);

return statearr_38642;
})();
if(cljs.core.truth_(inst_38552)){
var statearr_38643_38729 = state_38639__$1;
(statearr_38643_38729[(1)] = (22));

} else {
var statearr_38644_38730 = state_38639__$1;
(statearr_38644_38730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (27))){
var inst_38587 = (state_38639[(9)]);
var inst_38582 = (state_38639[(10)]);
var inst_38580 = (state_38639[(11)]);
var inst_38511 = (state_38639[(12)]);
var inst_38587__$1 = cljs.core._nth.call(null,inst_38580,inst_38582);
var inst_38588 = cljs.core.async.put_BANG_.call(null,inst_38587__$1,inst_38511,done);
var state_38639__$1 = (function (){var statearr_38645 = state_38639;
(statearr_38645[(9)] = inst_38587__$1);

return statearr_38645;
})();
if(cljs.core.truth_(inst_38588)){
var statearr_38646_38731 = state_38639__$1;
(statearr_38646_38731[(1)] = (30));

} else {
var statearr_38647_38732 = state_38639__$1;
(statearr_38647_38732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (1))){
var state_38639__$1 = state_38639;
var statearr_38648_38733 = state_38639__$1;
(statearr_38648_38733[(2)] = null);

(statearr_38648_38733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (24))){
var inst_38540 = (state_38639[(7)]);
var inst_38557 = (state_38639[(2)]);
var inst_38558 = cljs.core.next.call(null,inst_38540);
var inst_38520 = inst_38558;
var inst_38521 = null;
var inst_38522 = (0);
var inst_38523 = (0);
var state_38639__$1 = (function (){var statearr_38649 = state_38639;
(statearr_38649[(13)] = inst_38523);

(statearr_38649[(14)] = inst_38520);

(statearr_38649[(15)] = inst_38557);

(statearr_38649[(16)] = inst_38522);

(statearr_38649[(17)] = inst_38521);

return statearr_38649;
})();
var statearr_38650_38736 = state_38639__$1;
(statearr_38650_38736[(2)] = null);

(statearr_38650_38736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (39))){
var state_38639__$1 = state_38639;
var statearr_38654_38739 = state_38639__$1;
(statearr_38654_38739[(2)] = null);

(statearr_38654_38739[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (4))){
var inst_38511 = (state_38639[(12)]);
var inst_38511__$1 = (state_38639[(2)]);
var inst_38512 = (inst_38511__$1 == null);
var state_38639__$1 = (function (){var statearr_38655 = state_38639;
(statearr_38655[(12)] = inst_38511__$1);

return statearr_38655;
})();
if(cljs.core.truth_(inst_38512)){
var statearr_38656_38743 = state_38639__$1;
(statearr_38656_38743[(1)] = (5));

} else {
var statearr_38657_38744 = state_38639__$1;
(statearr_38657_38744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (15))){
var inst_38523 = (state_38639[(13)]);
var inst_38520 = (state_38639[(14)]);
var inst_38522 = (state_38639[(16)]);
var inst_38521 = (state_38639[(17)]);
var inst_38536 = (state_38639[(2)]);
var inst_38537 = (inst_38523 + (1));
var tmp38651 = inst_38520;
var tmp38652 = inst_38522;
var tmp38653 = inst_38521;
var inst_38520__$1 = tmp38651;
var inst_38521__$1 = tmp38653;
var inst_38522__$1 = tmp38652;
var inst_38523__$1 = inst_38537;
var state_38639__$1 = (function (){var statearr_38658 = state_38639;
(statearr_38658[(13)] = inst_38523__$1);

(statearr_38658[(14)] = inst_38520__$1);

(statearr_38658[(16)] = inst_38522__$1);

(statearr_38658[(17)] = inst_38521__$1);

(statearr_38658[(18)] = inst_38536);

return statearr_38658;
})();
var statearr_38659_38753 = state_38639__$1;
(statearr_38659_38753[(2)] = null);

(statearr_38659_38753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (21))){
var inst_38561 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38663_38754 = state_38639__$1;
(statearr_38663_38754[(2)] = inst_38561);

(statearr_38663_38754[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (31))){
var inst_38587 = (state_38639[(9)]);
var inst_38591 = done.call(null,null);
var inst_38592 = cljs.core.async.untap_STAR_.call(null,m,inst_38587);
var state_38639__$1 = (function (){var statearr_38664 = state_38639;
(statearr_38664[(19)] = inst_38591);

return statearr_38664;
})();
var statearr_38665_38755 = state_38639__$1;
(statearr_38665_38755[(2)] = inst_38592);

(statearr_38665_38755[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (32))){
var inst_38582 = (state_38639[(10)]);
var inst_38581 = (state_38639[(20)]);
var inst_38579 = (state_38639[(21)]);
var inst_38580 = (state_38639[(11)]);
var inst_38594 = (state_38639[(2)]);
var inst_38595 = (inst_38582 + (1));
var tmp38660 = inst_38581;
var tmp38661 = inst_38579;
var tmp38662 = inst_38580;
var inst_38579__$1 = tmp38661;
var inst_38580__$1 = tmp38662;
var inst_38581__$1 = tmp38660;
var inst_38582__$1 = inst_38595;
var state_38639__$1 = (function (){var statearr_38666 = state_38639;
(statearr_38666[(10)] = inst_38582__$1);

(statearr_38666[(22)] = inst_38594);

(statearr_38666[(20)] = inst_38581__$1);

(statearr_38666[(21)] = inst_38579__$1);

(statearr_38666[(11)] = inst_38580__$1);

return statearr_38666;
})();
var statearr_38667_38761 = state_38639__$1;
(statearr_38667_38761[(2)] = null);

(statearr_38667_38761[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (40))){
var inst_38607 = (state_38639[(23)]);
var inst_38611 = done.call(null,null);
var inst_38612 = cljs.core.async.untap_STAR_.call(null,m,inst_38607);
var state_38639__$1 = (function (){var statearr_38668 = state_38639;
(statearr_38668[(24)] = inst_38611);

return statearr_38668;
})();
var statearr_38669_38762 = state_38639__$1;
(statearr_38669_38762[(2)] = inst_38612);

(statearr_38669_38762[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (33))){
var inst_38598 = (state_38639[(25)]);
var inst_38600 = cljs.core.chunked_seq_QMARK_.call(null,inst_38598);
var state_38639__$1 = state_38639;
if(inst_38600){
var statearr_38670_38763 = state_38639__$1;
(statearr_38670_38763[(1)] = (36));

} else {
var statearr_38671_38764 = state_38639__$1;
(statearr_38671_38764[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (13))){
var inst_38530 = (state_38639[(26)]);
var inst_38533 = cljs.core.async.close_BANG_.call(null,inst_38530);
var state_38639__$1 = state_38639;
var statearr_38672_38767 = state_38639__$1;
(statearr_38672_38767[(2)] = inst_38533);

(statearr_38672_38767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (22))){
var inst_38551 = (state_38639[(8)]);
var inst_38554 = cljs.core.async.close_BANG_.call(null,inst_38551);
var state_38639__$1 = state_38639;
var statearr_38673_38770 = state_38639__$1;
(statearr_38673_38770[(2)] = inst_38554);

(statearr_38673_38770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (36))){
var inst_38598 = (state_38639[(25)]);
var inst_38602 = cljs.core.chunk_first.call(null,inst_38598);
var inst_38603 = cljs.core.chunk_rest.call(null,inst_38598);
var inst_38604 = cljs.core.count.call(null,inst_38602);
var inst_38579 = inst_38603;
var inst_38580 = inst_38602;
var inst_38581 = inst_38604;
var inst_38582 = (0);
var state_38639__$1 = (function (){var statearr_38674 = state_38639;
(statearr_38674[(10)] = inst_38582);

(statearr_38674[(20)] = inst_38581);

(statearr_38674[(21)] = inst_38579);

(statearr_38674[(11)] = inst_38580);

return statearr_38674;
})();
var statearr_38675_38773 = state_38639__$1;
(statearr_38675_38773[(2)] = null);

(statearr_38675_38773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (41))){
var inst_38598 = (state_38639[(25)]);
var inst_38614 = (state_38639[(2)]);
var inst_38615 = cljs.core.next.call(null,inst_38598);
var inst_38579 = inst_38615;
var inst_38580 = null;
var inst_38581 = (0);
var inst_38582 = (0);
var state_38639__$1 = (function (){var statearr_38676 = state_38639;
(statearr_38676[(10)] = inst_38582);

(statearr_38676[(27)] = inst_38614);

(statearr_38676[(20)] = inst_38581);

(statearr_38676[(21)] = inst_38579);

(statearr_38676[(11)] = inst_38580);

return statearr_38676;
})();
var statearr_38677_38777 = state_38639__$1;
(statearr_38677_38777[(2)] = null);

(statearr_38677_38777[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (43))){
var state_38639__$1 = state_38639;
var statearr_38678_38780 = state_38639__$1;
(statearr_38678_38780[(2)] = null);

(statearr_38678_38780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (29))){
var inst_38623 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38679_38782 = state_38639__$1;
(statearr_38679_38782[(2)] = inst_38623);

(statearr_38679_38782[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (44))){
var inst_38632 = (state_38639[(2)]);
var state_38639__$1 = (function (){var statearr_38680 = state_38639;
(statearr_38680[(28)] = inst_38632);

return statearr_38680;
})();
var statearr_38681_38784 = state_38639__$1;
(statearr_38681_38784[(2)] = null);

(statearr_38681_38784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (6))){
var inst_38571 = (state_38639[(29)]);
var inst_38570 = cljs.core.deref.call(null,cs);
var inst_38571__$1 = cljs.core.keys.call(null,inst_38570);
var inst_38572 = cljs.core.count.call(null,inst_38571__$1);
var inst_38573 = cljs.core.reset_BANG_.call(null,dctr,inst_38572);
var inst_38578 = cljs.core.seq.call(null,inst_38571__$1);
var inst_38579 = inst_38578;
var inst_38580 = null;
var inst_38581 = (0);
var inst_38582 = (0);
var state_38639__$1 = (function (){var statearr_38682 = state_38639;
(statearr_38682[(10)] = inst_38582);

(statearr_38682[(29)] = inst_38571__$1);

(statearr_38682[(30)] = inst_38573);

(statearr_38682[(20)] = inst_38581);

(statearr_38682[(21)] = inst_38579);

(statearr_38682[(11)] = inst_38580);

return statearr_38682;
})();
var statearr_38683_38794 = state_38639__$1;
(statearr_38683_38794[(2)] = null);

(statearr_38683_38794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (28))){
var inst_38598 = (state_38639[(25)]);
var inst_38579 = (state_38639[(21)]);
var inst_38598__$1 = cljs.core.seq.call(null,inst_38579);
var state_38639__$1 = (function (){var statearr_38684 = state_38639;
(statearr_38684[(25)] = inst_38598__$1);

return statearr_38684;
})();
if(inst_38598__$1){
var statearr_38685_38802 = state_38639__$1;
(statearr_38685_38802[(1)] = (33));

} else {
var statearr_38686_38807 = state_38639__$1;
(statearr_38686_38807[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (25))){
var inst_38582 = (state_38639[(10)]);
var inst_38581 = (state_38639[(20)]);
var inst_38584 = (inst_38582 < inst_38581);
var inst_38585 = inst_38584;
var state_38639__$1 = state_38639;
if(cljs.core.truth_(inst_38585)){
var statearr_38687_38811 = state_38639__$1;
(statearr_38687_38811[(1)] = (27));

} else {
var statearr_38688_38812 = state_38639__$1;
(statearr_38688_38812[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (34))){
var state_38639__$1 = state_38639;
var statearr_38689_38813 = state_38639__$1;
(statearr_38689_38813[(2)] = null);

(statearr_38689_38813[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (17))){
var state_38639__$1 = state_38639;
var statearr_38690_38814 = state_38639__$1;
(statearr_38690_38814[(2)] = null);

(statearr_38690_38814[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (3))){
var inst_38637 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38639__$1,inst_38637);
} else {
if((state_val_38640 === (12))){
var inst_38566 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38691_38819 = state_38639__$1;
(statearr_38691_38819[(2)] = inst_38566);

(statearr_38691_38819[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (2))){
var state_38639__$1 = state_38639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38639__$1,(4),ch);
} else {
if((state_val_38640 === (23))){
var state_38639__$1 = state_38639;
var statearr_38692_38827 = state_38639__$1;
(statearr_38692_38827[(2)] = null);

(statearr_38692_38827[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (35))){
var inst_38621 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38693_38831 = state_38639__$1;
(statearr_38693_38831[(2)] = inst_38621);

(statearr_38693_38831[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (19))){
var inst_38540 = (state_38639[(7)]);
var inst_38544 = cljs.core.chunk_first.call(null,inst_38540);
var inst_38545 = cljs.core.chunk_rest.call(null,inst_38540);
var inst_38546 = cljs.core.count.call(null,inst_38544);
var inst_38520 = inst_38545;
var inst_38521 = inst_38544;
var inst_38522 = inst_38546;
var inst_38523 = (0);
var state_38639__$1 = (function (){var statearr_38694 = state_38639;
(statearr_38694[(13)] = inst_38523);

(statearr_38694[(14)] = inst_38520);

(statearr_38694[(16)] = inst_38522);

(statearr_38694[(17)] = inst_38521);

return statearr_38694;
})();
var statearr_38695_38837 = state_38639__$1;
(statearr_38695_38837[(2)] = null);

(statearr_38695_38837[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (11))){
var inst_38520 = (state_38639[(14)]);
var inst_38540 = (state_38639[(7)]);
var inst_38540__$1 = cljs.core.seq.call(null,inst_38520);
var state_38639__$1 = (function (){var statearr_38696 = state_38639;
(statearr_38696[(7)] = inst_38540__$1);

return statearr_38696;
})();
if(inst_38540__$1){
var statearr_38697_38849 = state_38639__$1;
(statearr_38697_38849[(1)] = (16));

} else {
var statearr_38698_38850 = state_38639__$1;
(statearr_38698_38850[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (9))){
var inst_38568 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38699_38852 = state_38639__$1;
(statearr_38699_38852[(2)] = inst_38568);

(statearr_38699_38852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (5))){
var inst_38518 = cljs.core.deref.call(null,cs);
var inst_38519 = cljs.core.seq.call(null,inst_38518);
var inst_38520 = inst_38519;
var inst_38521 = null;
var inst_38522 = (0);
var inst_38523 = (0);
var state_38639__$1 = (function (){var statearr_38700 = state_38639;
(statearr_38700[(13)] = inst_38523);

(statearr_38700[(14)] = inst_38520);

(statearr_38700[(16)] = inst_38522);

(statearr_38700[(17)] = inst_38521);

return statearr_38700;
})();
var statearr_38701_38859 = state_38639__$1;
(statearr_38701_38859[(2)] = null);

(statearr_38701_38859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (14))){
var state_38639__$1 = state_38639;
var statearr_38702_38861 = state_38639__$1;
(statearr_38702_38861[(2)] = null);

(statearr_38702_38861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (45))){
var inst_38629 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38703_38863 = state_38639__$1;
(statearr_38703_38863[(2)] = inst_38629);

(statearr_38703_38863[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (26))){
var inst_38571 = (state_38639[(29)]);
var inst_38625 = (state_38639[(2)]);
var inst_38626 = cljs.core.seq.call(null,inst_38571);
var state_38639__$1 = (function (){var statearr_38704 = state_38639;
(statearr_38704[(31)] = inst_38625);

return statearr_38704;
})();
if(inst_38626){
var statearr_38705_38868 = state_38639__$1;
(statearr_38705_38868[(1)] = (42));

} else {
var statearr_38706_38869 = state_38639__$1;
(statearr_38706_38869[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (16))){
var inst_38540 = (state_38639[(7)]);
var inst_38542 = cljs.core.chunked_seq_QMARK_.call(null,inst_38540);
var state_38639__$1 = state_38639;
if(inst_38542){
var statearr_38707_38870 = state_38639__$1;
(statearr_38707_38870[(1)] = (19));

} else {
var statearr_38708_38871 = state_38639__$1;
(statearr_38708_38871[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (38))){
var inst_38618 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38709_38872 = state_38639__$1;
(statearr_38709_38872[(2)] = inst_38618);

(statearr_38709_38872[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (30))){
var state_38639__$1 = state_38639;
var statearr_38710_38877 = state_38639__$1;
(statearr_38710_38877[(2)] = null);

(statearr_38710_38877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (10))){
var inst_38523 = (state_38639[(13)]);
var inst_38521 = (state_38639[(17)]);
var inst_38529 = cljs.core._nth.call(null,inst_38521,inst_38523);
var inst_38530 = cljs.core.nth.call(null,inst_38529,(0),null);
var inst_38531 = cljs.core.nth.call(null,inst_38529,(1),null);
var state_38639__$1 = (function (){var statearr_38711 = state_38639;
(statearr_38711[(26)] = inst_38530);

return statearr_38711;
})();
if(cljs.core.truth_(inst_38531)){
var statearr_38712_38882 = state_38639__$1;
(statearr_38712_38882[(1)] = (13));

} else {
var statearr_38713_38883 = state_38639__$1;
(statearr_38713_38883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (18))){
var inst_38564 = (state_38639[(2)]);
var state_38639__$1 = state_38639;
var statearr_38714_38884 = state_38639__$1;
(statearr_38714_38884[(2)] = inst_38564);

(statearr_38714_38884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (42))){
var state_38639__$1 = state_38639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38639__$1,(45),dchan);
} else {
if((state_val_38640 === (37))){
var inst_38598 = (state_38639[(25)]);
var inst_38607 = (state_38639[(23)]);
var inst_38511 = (state_38639[(12)]);
var inst_38607__$1 = cljs.core.first.call(null,inst_38598);
var inst_38608 = cljs.core.async.put_BANG_.call(null,inst_38607__$1,inst_38511,done);
var state_38639__$1 = (function (){var statearr_38715 = state_38639;
(statearr_38715[(23)] = inst_38607__$1);

return statearr_38715;
})();
if(cljs.core.truth_(inst_38608)){
var statearr_38716_38890 = state_38639__$1;
(statearr_38716_38890[(1)] = (39));

} else {
var statearr_38717_38892 = state_38639__$1;
(statearr_38717_38892[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38640 === (8))){
var inst_38523 = (state_38639[(13)]);
var inst_38522 = (state_38639[(16)]);
var inst_38525 = (inst_38523 < inst_38522);
var inst_38526 = inst_38525;
var state_38639__$1 = state_38639;
if(cljs.core.truth_(inst_38526)){
var statearr_38718_38894 = state_38639__$1;
(statearr_38718_38894[(1)] = (10));

} else {
var statearr_38719_38895 = state_38639__$1;
(statearr_38719_38895[(1)] = (11));

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
});})(c__33664__auto___38727,cs,m,dchan,dctr,done))
;
return ((function (switch__33643__auto__,c__33664__auto___38727,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33644__auto__ = null;
var cljs$core$async$mult_$_state_machine__33644__auto____0 = (function (){
var statearr_38723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38723[(0)] = cljs$core$async$mult_$_state_machine__33644__auto__);

(statearr_38723[(1)] = (1));

return statearr_38723;
});
var cljs$core$async$mult_$_state_machine__33644__auto____1 = (function (state_38639){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_38639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e38724){if((e38724 instanceof Object)){
var ex__33647__auto__ = e38724;
var statearr_38725_38900 = state_38639;
(statearr_38725_38900[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38903 = state_38639;
state_38639 = G__38903;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33644__auto__ = function(state_38639){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33644__auto____1.call(this,state_38639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33644__auto____0;
cljs$core$async$mult_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33644__auto____1;
return cljs$core$async$mult_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___38727,cs,m,dchan,dctr,done))
})();
var state__33666__auto__ = (function (){var statearr_38726 = f__33665__auto__.call(null);
(statearr_38726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___38727);

return statearr_38726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___38727,cs,m,dchan,dctr,done))
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
var args38904 = [];
var len__19784__auto___38907 = arguments.length;
var i__19785__auto___38908 = (0);
while(true){
if((i__19785__auto___38908 < len__19784__auto___38907)){
args38904.push((arguments[i__19785__auto___38908]));

var G__38909 = (i__19785__auto___38908 + (1));
i__19785__auto___38908 = G__38909;
continue;
} else {
}
break;
}

var G__38906 = args38904.length;
switch (G__38906) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38904.length)].join('')));

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
var len__19784__auto___38949 = arguments.length;
var i__19785__auto___38950 = (0);
while(true){
if((i__19785__auto___38950 < len__19784__auto___38949)){
args__19791__auto__.push((arguments[i__19785__auto___38950]));

var G__38951 = (i__19785__auto___38950 + (1));
i__19785__auto___38950 = G__38951;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__38939){
var map__38940 = p__38939;
var map__38940__$1 = ((((!((map__38940 == null)))?((((map__38940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38940):map__38940);
var opts = map__38940__$1;
var statearr_38943_38955 = state;
(statearr_38943_38955[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__38940,map__38940__$1,opts){
return (function (val){
var statearr_38945_38958 = state;
(statearr_38945_38958[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38940,map__38940__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_38946_38960 = state;
(statearr_38946_38960[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq38932){
var G__38933 = cljs.core.first.call(null,seq38932);
var seq38932__$1 = cljs.core.next.call(null,seq38932);
var G__38934 = cljs.core.first.call(null,seq38932__$1);
var seq38932__$2 = cljs.core.next.call(null,seq38932__$1);
var G__38935 = cljs.core.first.call(null,seq38932__$2);
var seq38932__$3 = cljs.core.next.call(null,seq38932__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38933,G__38934,G__38935,seq38932__$3);
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
if(typeof cljs.core.async.t_cljs$core$async39201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39201 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39202){
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
this.meta39202 = meta39202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39203,meta39202__$1){
var self__ = this;
var _39203__$1 = this;
return (new cljs.core.async.t_cljs$core$async39201(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39202__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39203){
var self__ = this;
var _39203__$1 = this;
return self__.meta39202;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async39201.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta39202","meta39202",-22506569,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39201";

cljs.core.async.t_cljs$core$async39201.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async39201");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async39201 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39201(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39202){
return (new cljs.core.async.t_cljs$core$async39201(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39202));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39201(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33664__auto___39417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___39417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___39417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39312){
var state_val_39313 = (state_39312[(1)]);
if((state_val_39313 === (7))){
var inst_39224 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
var statearr_39314_39418 = state_39312__$1;
(statearr_39314_39418[(2)] = inst_39224);

(statearr_39314_39418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (20))){
var inst_39236 = (state_39312[(7)]);
var state_39312__$1 = state_39312;
var statearr_39315_39420 = state_39312__$1;
(statearr_39315_39420[(2)] = inst_39236);

(statearr_39315_39420[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (27))){
var state_39312__$1 = state_39312;
var statearr_39316_39422 = state_39312__$1;
(statearr_39316_39422[(2)] = null);

(statearr_39316_39422[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (1))){
var inst_39211 = (state_39312[(8)]);
var inst_39211__$1 = calc_state.call(null);
var inst_39214 = (inst_39211__$1 == null);
var inst_39215 = cljs.core.not.call(null,inst_39214);
var state_39312__$1 = (function (){var statearr_39317 = state_39312;
(statearr_39317[(8)] = inst_39211__$1);

return statearr_39317;
})();
if(inst_39215){
var statearr_39318_39423 = state_39312__$1;
(statearr_39318_39423[(1)] = (2));

} else {
var statearr_39319_39424 = state_39312__$1;
(statearr_39319_39424[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (24))){
var inst_39286 = (state_39312[(9)]);
var inst_39270 = (state_39312[(10)]);
var inst_39263 = (state_39312[(11)]);
var inst_39286__$1 = inst_39263.call(null,inst_39270);
var state_39312__$1 = (function (){var statearr_39320 = state_39312;
(statearr_39320[(9)] = inst_39286__$1);

return statearr_39320;
})();
if(cljs.core.truth_(inst_39286__$1)){
var statearr_39321_39427 = state_39312__$1;
(statearr_39321_39427[(1)] = (29));

} else {
var statearr_39322_39428 = state_39312__$1;
(statearr_39322_39428[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (4))){
var inst_39227 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
if(cljs.core.truth_(inst_39227)){
var statearr_39323_39430 = state_39312__$1;
(statearr_39323_39430[(1)] = (8));

} else {
var statearr_39324_39431 = state_39312__$1;
(statearr_39324_39431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (15))){
var inst_39257 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
if(cljs.core.truth_(inst_39257)){
var statearr_39325_39435 = state_39312__$1;
(statearr_39325_39435[(1)] = (19));

} else {
var statearr_39326_39437 = state_39312__$1;
(statearr_39326_39437[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (21))){
var inst_39262 = (state_39312[(12)]);
var inst_39262__$1 = (state_39312[(2)]);
var inst_39263 = cljs.core.get.call(null,inst_39262__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39264 = cljs.core.get.call(null,inst_39262__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39265 = cljs.core.get.call(null,inst_39262__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39312__$1 = (function (){var statearr_39327 = state_39312;
(statearr_39327[(11)] = inst_39263);

(statearr_39327[(13)] = inst_39264);

(statearr_39327[(12)] = inst_39262__$1);

return statearr_39327;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39312__$1,(22),inst_39265);
} else {
if((state_val_39313 === (31))){
var inst_39294 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
if(cljs.core.truth_(inst_39294)){
var statearr_39330_39438 = state_39312__$1;
(statearr_39330_39438[(1)] = (32));

} else {
var statearr_39331_39439 = state_39312__$1;
(statearr_39331_39439[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (32))){
var inst_39269 = (state_39312[(14)]);
var state_39312__$1 = state_39312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39312__$1,(35),out,inst_39269);
} else {
if((state_val_39313 === (33))){
var inst_39262 = (state_39312[(12)]);
var inst_39236 = inst_39262;
var state_39312__$1 = (function (){var statearr_39332 = state_39312;
(statearr_39332[(7)] = inst_39236);

return statearr_39332;
})();
var statearr_39341_39440 = state_39312__$1;
(statearr_39341_39440[(2)] = null);

(statearr_39341_39440[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (13))){
var inst_39236 = (state_39312[(7)]);
var inst_39246 = inst_39236.cljs$lang$protocol_mask$partition0$;
var inst_39247 = (inst_39246 & (64));
var inst_39248 = inst_39236.cljs$core$ISeq$;
var inst_39250 = (inst_39247) || (inst_39248);
var state_39312__$1 = state_39312;
if(cljs.core.truth_(inst_39250)){
var statearr_39342_39441 = state_39312__$1;
(statearr_39342_39441[(1)] = (16));

} else {
var statearr_39343_39442 = state_39312__$1;
(statearr_39343_39442[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (22))){
var inst_39270 = (state_39312[(10)]);
var inst_39269 = (state_39312[(14)]);
var inst_39268 = (state_39312[(2)]);
var inst_39269__$1 = cljs.core.nth.call(null,inst_39268,(0),null);
var inst_39270__$1 = cljs.core.nth.call(null,inst_39268,(1),null);
var inst_39272 = (inst_39269__$1 == null);
var inst_39273 = cljs.core._EQ_.call(null,inst_39270__$1,change);
var inst_39274 = (inst_39272) || (inst_39273);
var state_39312__$1 = (function (){var statearr_39344 = state_39312;
(statearr_39344[(10)] = inst_39270__$1);

(statearr_39344[(14)] = inst_39269__$1);

return statearr_39344;
})();
if(cljs.core.truth_(inst_39274)){
var statearr_39345_39443 = state_39312__$1;
(statearr_39345_39443[(1)] = (23));

} else {
var statearr_39346_39444 = state_39312__$1;
(statearr_39346_39444[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (36))){
var inst_39262 = (state_39312[(12)]);
var inst_39236 = inst_39262;
var state_39312__$1 = (function (){var statearr_39347 = state_39312;
(statearr_39347[(7)] = inst_39236);

return statearr_39347;
})();
var statearr_39348_39445 = state_39312__$1;
(statearr_39348_39445[(2)] = null);

(statearr_39348_39445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (29))){
var inst_39286 = (state_39312[(9)]);
var state_39312__$1 = state_39312;
var statearr_39349_39446 = state_39312__$1;
(statearr_39349_39446[(2)] = inst_39286);

(statearr_39349_39446[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (6))){
var state_39312__$1 = state_39312;
var statearr_39350_39447 = state_39312__$1;
(statearr_39350_39447[(2)] = false);

(statearr_39350_39447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (28))){
var inst_39282 = (state_39312[(2)]);
var inst_39283 = calc_state.call(null);
var inst_39236 = inst_39283;
var state_39312__$1 = (function (){var statearr_39351 = state_39312;
(statearr_39351[(7)] = inst_39236);

(statearr_39351[(15)] = inst_39282);

return statearr_39351;
})();
var statearr_39352_39448 = state_39312__$1;
(statearr_39352_39448[(2)] = null);

(statearr_39352_39448[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (25))){
var inst_39308 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
var statearr_39353_39449 = state_39312__$1;
(statearr_39353_39449[(2)] = inst_39308);

(statearr_39353_39449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (34))){
var inst_39306 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
var statearr_39354_39450 = state_39312__$1;
(statearr_39354_39450[(2)] = inst_39306);

(statearr_39354_39450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (17))){
var state_39312__$1 = state_39312;
var statearr_39355_39451 = state_39312__$1;
(statearr_39355_39451[(2)] = false);

(statearr_39355_39451[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (3))){
var state_39312__$1 = state_39312;
var statearr_39356_39452 = state_39312__$1;
(statearr_39356_39452[(2)] = false);

(statearr_39356_39452[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (12))){
var inst_39310 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39312__$1,inst_39310);
} else {
if((state_val_39313 === (2))){
var inst_39211 = (state_39312[(8)]);
var inst_39217 = inst_39211.cljs$lang$protocol_mask$partition0$;
var inst_39218 = (inst_39217 & (64));
var inst_39219 = inst_39211.cljs$core$ISeq$;
var inst_39220 = (inst_39218) || (inst_39219);
var state_39312__$1 = state_39312;
if(cljs.core.truth_(inst_39220)){
var statearr_39357_39453 = state_39312__$1;
(statearr_39357_39453[(1)] = (5));

} else {
var statearr_39358_39455 = state_39312__$1;
(statearr_39358_39455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (23))){
var inst_39269 = (state_39312[(14)]);
var inst_39276 = (inst_39269 == null);
var state_39312__$1 = state_39312;
if(cljs.core.truth_(inst_39276)){
var statearr_39359_39457 = state_39312__$1;
(statearr_39359_39457[(1)] = (26));

} else {
var statearr_39360_39458 = state_39312__$1;
(statearr_39360_39458[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (35))){
var inst_39297 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
if(cljs.core.truth_(inst_39297)){
var statearr_39363_39460 = state_39312__$1;
(statearr_39363_39460[(1)] = (36));

} else {
var statearr_39364_39461 = state_39312__$1;
(statearr_39364_39461[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (19))){
var inst_39236 = (state_39312[(7)]);
var inst_39259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39236);
var state_39312__$1 = state_39312;
var statearr_39365_39462 = state_39312__$1;
(statearr_39365_39462[(2)] = inst_39259);

(statearr_39365_39462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (11))){
var inst_39236 = (state_39312[(7)]);
var inst_39242 = (inst_39236 == null);
var inst_39243 = cljs.core.not.call(null,inst_39242);
var state_39312__$1 = state_39312;
if(inst_39243){
var statearr_39367_39471 = state_39312__$1;
(statearr_39367_39471[(1)] = (13));

} else {
var statearr_39368_39472 = state_39312__$1;
(statearr_39368_39472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (9))){
var inst_39211 = (state_39312[(8)]);
var state_39312__$1 = state_39312;
var statearr_39370_39473 = state_39312__$1;
(statearr_39370_39473[(2)] = inst_39211);

(statearr_39370_39473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (5))){
var state_39312__$1 = state_39312;
var statearr_39371_39474 = state_39312__$1;
(statearr_39371_39474[(2)] = true);

(statearr_39371_39474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (14))){
var state_39312__$1 = state_39312;
var statearr_39372_39475 = state_39312__$1;
(statearr_39372_39475[(2)] = false);

(statearr_39372_39475[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (26))){
var inst_39270 = (state_39312[(10)]);
var inst_39278 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39270);
var state_39312__$1 = state_39312;
var statearr_39373_39476 = state_39312__$1;
(statearr_39373_39476[(2)] = inst_39278);

(statearr_39373_39476[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (16))){
var state_39312__$1 = state_39312;
var statearr_39374_39477 = state_39312__$1;
(statearr_39374_39477[(2)] = true);

(statearr_39374_39477[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (38))){
var inst_39302 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
var statearr_39375_39481 = state_39312__$1;
(statearr_39375_39481[(2)] = inst_39302);

(statearr_39375_39481[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (30))){
var inst_39270 = (state_39312[(10)]);
var inst_39263 = (state_39312[(11)]);
var inst_39264 = (state_39312[(13)]);
var inst_39289 = cljs.core.empty_QMARK_.call(null,inst_39263);
var inst_39290 = inst_39264.call(null,inst_39270);
var inst_39291 = cljs.core.not.call(null,inst_39290);
var inst_39292 = (inst_39289) && (inst_39291);
var state_39312__$1 = state_39312;
var statearr_39376_39483 = state_39312__$1;
(statearr_39376_39483[(2)] = inst_39292);

(statearr_39376_39483[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (10))){
var inst_39211 = (state_39312[(8)]);
var inst_39232 = (state_39312[(2)]);
var inst_39233 = cljs.core.get.call(null,inst_39232,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39234 = cljs.core.get.call(null,inst_39232,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39235 = cljs.core.get.call(null,inst_39232,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39236 = inst_39211;
var state_39312__$1 = (function (){var statearr_39377 = state_39312;
(statearr_39377[(16)] = inst_39234);

(statearr_39377[(17)] = inst_39233);

(statearr_39377[(7)] = inst_39236);

(statearr_39377[(18)] = inst_39235);

return statearr_39377;
})();
var statearr_39378_39488 = state_39312__$1;
(statearr_39378_39488[(2)] = null);

(statearr_39378_39488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (18))){
var inst_39254 = (state_39312[(2)]);
var state_39312__$1 = state_39312;
var statearr_39379_39489 = state_39312__$1;
(statearr_39379_39489[(2)] = inst_39254);

(statearr_39379_39489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (37))){
var state_39312__$1 = state_39312;
var statearr_39380_39490 = state_39312__$1;
(statearr_39380_39490[(2)] = null);

(statearr_39380_39490[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39313 === (8))){
var inst_39211 = (state_39312[(8)]);
var inst_39229 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39211);
var state_39312__$1 = state_39312;
var statearr_39381_39491 = state_39312__$1;
(statearr_39381_39491[(2)] = inst_39229);

(statearr_39381_39491[(1)] = (10));


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
});})(c__33664__auto___39417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33643__auto__,c__33664__auto___39417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33644__auto__ = null;
var cljs$core$async$mix_$_state_machine__33644__auto____0 = (function (){
var statearr_39386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39386[(0)] = cljs$core$async$mix_$_state_machine__33644__auto__);

(statearr_39386[(1)] = (1));

return statearr_39386;
});
var cljs$core$async$mix_$_state_machine__33644__auto____1 = (function (state_39312){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_39312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e39387){if((e39387 instanceof Object)){
var ex__33647__auto__ = e39387;
var statearr_39388_39492 = state_39312;
(statearr_39388_39492[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39493 = state_39312;
state_39312 = G__39493;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33644__auto__ = function(state_39312){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33644__auto____1.call(this,state_39312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33644__auto____0;
cljs$core$async$mix_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33644__auto____1;
return cljs$core$async$mix_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___39417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33666__auto__ = (function (){var statearr_39390 = f__33665__auto__.call(null);
(statearr_39390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___39417);

return statearr_39390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___39417,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args39495 = [];
var len__19784__auto___39507 = arguments.length;
var i__19785__auto___39508 = (0);
while(true){
if((i__19785__auto___39508 < len__19784__auto___39507)){
args39495.push((arguments[i__19785__auto___39508]));

var G__39509 = (i__19785__auto___39508 + (1));
i__19785__auto___39508 = G__39509;
continue;
} else {
}
break;
}

var G__39497 = args39495.length;
switch (G__39497) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39495.length)].join('')));

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
var args39522 = [];
var len__19784__auto___39766 = arguments.length;
var i__19785__auto___39767 = (0);
while(true){
if((i__19785__auto___39767 < len__19784__auto___39766)){
args39522.push((arguments[i__19785__auto___39767]));

var G__39768 = (i__19785__auto___39767 + (1));
i__19785__auto___39767 = G__39768;
continue;
} else {
}
break;
}

var G__39524 = args39522.length;
switch (G__39524) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39522.length)].join('')));

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
return (function (p1__39521_SHARP_){
if(cljs.core.truth_(p1__39521_SHARP_.call(null,topic))){
return p1__39521_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39521_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18726__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39530 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39530 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39531){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39531 = meta39531;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39532,meta39531__$1){
var self__ = this;
var _39532__$1 = this;
return (new cljs.core.async.t_cljs$core$async39530(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39531__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39532){
var self__ = this;
var _39532__$1 = this;
return self__.meta39531;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39530.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39530.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39531","meta39531",-1444879443,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39530.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39530.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39530";

cljs.core.async.t_cljs$core$async39530.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async39530");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async39530 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39530(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39531){
return (new cljs.core.async.t_cljs$core$async39530(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39531));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39530(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33664__auto___39779 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___39779,mults,ensure_mult,p){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___39779,mults,ensure_mult,p){
return (function (state_39670){
var state_val_39696 = (state_39670[(1)]);
if((state_val_39696 === (7))){
var inst_39666 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
var statearr_39702_39782 = state_39670__$1;
(statearr_39702_39782[(2)] = inst_39666);

(statearr_39702_39782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (20))){
var state_39670__$1 = state_39670;
var statearr_39703_39785 = state_39670__$1;
(statearr_39703_39785[(2)] = null);

(statearr_39703_39785[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (1))){
var state_39670__$1 = state_39670;
var statearr_39704_39786 = state_39670__$1;
(statearr_39704_39786[(2)] = null);

(statearr_39704_39786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (24))){
var inst_39644 = (state_39670[(7)]);
var inst_39654 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39644);
var state_39670__$1 = state_39670;
var statearr_39705_39791 = state_39670__$1;
(statearr_39705_39791[(2)] = inst_39654);

(statearr_39705_39791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (4))){
var inst_39538 = (state_39670[(8)]);
var inst_39538__$1 = (state_39670[(2)]);
var inst_39539 = (inst_39538__$1 == null);
var state_39670__$1 = (function (){var statearr_39707 = state_39670;
(statearr_39707[(8)] = inst_39538__$1);

return statearr_39707;
})();
if(cljs.core.truth_(inst_39539)){
var statearr_39708_39792 = state_39670__$1;
(statearr_39708_39792[(1)] = (5));

} else {
var statearr_39709_39793 = state_39670__$1;
(statearr_39709_39793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (15))){
var inst_39638 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
var statearr_39710_39794 = state_39670__$1;
(statearr_39710_39794[(2)] = inst_39638);

(statearr_39710_39794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (21))){
var inst_39659 = (state_39670[(2)]);
var state_39670__$1 = (function (){var statearr_39711 = state_39670;
(statearr_39711[(9)] = inst_39659);

return statearr_39711;
})();
var statearr_39712_39795 = state_39670__$1;
(statearr_39712_39795[(2)] = null);

(statearr_39712_39795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (13))){
var inst_39562 = (state_39670[(10)]);
var inst_39565 = cljs.core.chunked_seq_QMARK_.call(null,inst_39562);
var state_39670__$1 = state_39670;
if(inst_39565){
var statearr_39714_39796 = state_39670__$1;
(statearr_39714_39796[(1)] = (16));

} else {
var statearr_39715_39797 = state_39670__$1;
(statearr_39715_39797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (22))){
var inst_39651 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
if(cljs.core.truth_(inst_39651)){
var statearr_39716_39798 = state_39670__$1;
(statearr_39716_39798[(1)] = (23));

} else {
var statearr_39717_39799 = state_39670__$1;
(statearr_39717_39799[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (6))){
var inst_39538 = (state_39670[(8)]);
var inst_39644 = (state_39670[(7)]);
var inst_39647 = (state_39670[(11)]);
var inst_39644__$1 = topic_fn.call(null,inst_39538);
var inst_39646 = cljs.core.deref.call(null,mults);
var inst_39647__$1 = cljs.core.get.call(null,inst_39646,inst_39644__$1);
var state_39670__$1 = (function (){var statearr_39718 = state_39670;
(statearr_39718[(7)] = inst_39644__$1);

(statearr_39718[(11)] = inst_39647__$1);

return statearr_39718;
})();
if(cljs.core.truth_(inst_39647__$1)){
var statearr_39719_39800 = state_39670__$1;
(statearr_39719_39800[(1)] = (19));

} else {
var statearr_39720_39801 = state_39670__$1;
(statearr_39720_39801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (25))){
var inst_39656 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
var statearr_39721_39805 = state_39670__$1;
(statearr_39721_39805[(2)] = inst_39656);

(statearr_39721_39805[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (17))){
var inst_39562 = (state_39670[(10)]);
var inst_39629 = cljs.core.first.call(null,inst_39562);
var inst_39630 = cljs.core.async.muxch_STAR_.call(null,inst_39629);
var inst_39631 = cljs.core.async.close_BANG_.call(null,inst_39630);
var inst_39632 = cljs.core.next.call(null,inst_39562);
var inst_39548 = inst_39632;
var inst_39549 = null;
var inst_39550 = (0);
var inst_39551 = (0);
var state_39670__$1 = (function (){var statearr_39722 = state_39670;
(statearr_39722[(12)] = inst_39550);

(statearr_39722[(13)] = inst_39551);

(statearr_39722[(14)] = inst_39548);

(statearr_39722[(15)] = inst_39631);

(statearr_39722[(16)] = inst_39549);

return statearr_39722;
})();
var statearr_39725_39806 = state_39670__$1;
(statearr_39725_39806[(2)] = null);

(statearr_39725_39806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (3))){
var inst_39668 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39670__$1,inst_39668);
} else {
if((state_val_39696 === (12))){
var inst_39640 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
var statearr_39726_39810 = state_39670__$1;
(statearr_39726_39810[(2)] = inst_39640);

(statearr_39726_39810[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (2))){
var state_39670__$1 = state_39670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39670__$1,(4),ch);
} else {
if((state_val_39696 === (23))){
var state_39670__$1 = state_39670;
var statearr_39728_39814 = state_39670__$1;
(statearr_39728_39814[(2)] = null);

(statearr_39728_39814[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (19))){
var inst_39538 = (state_39670[(8)]);
var inst_39647 = (state_39670[(11)]);
var inst_39649 = cljs.core.async.muxch_STAR_.call(null,inst_39647);
var state_39670__$1 = state_39670;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39670__$1,(22),inst_39649,inst_39538);
} else {
if((state_val_39696 === (11))){
var inst_39548 = (state_39670[(14)]);
var inst_39562 = (state_39670[(10)]);
var inst_39562__$1 = cljs.core.seq.call(null,inst_39548);
var state_39670__$1 = (function (){var statearr_39730 = state_39670;
(statearr_39730[(10)] = inst_39562__$1);

return statearr_39730;
})();
if(inst_39562__$1){
var statearr_39731_39815 = state_39670__$1;
(statearr_39731_39815[(1)] = (13));

} else {
var statearr_39732_39816 = state_39670__$1;
(statearr_39732_39816[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (9))){
var inst_39642 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
var statearr_39733_39817 = state_39670__$1;
(statearr_39733_39817[(2)] = inst_39642);

(statearr_39733_39817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (5))){
var inst_39545 = cljs.core.deref.call(null,mults);
var inst_39546 = cljs.core.vals.call(null,inst_39545);
var inst_39547 = cljs.core.seq.call(null,inst_39546);
var inst_39548 = inst_39547;
var inst_39549 = null;
var inst_39550 = (0);
var inst_39551 = (0);
var state_39670__$1 = (function (){var statearr_39742 = state_39670;
(statearr_39742[(12)] = inst_39550);

(statearr_39742[(13)] = inst_39551);

(statearr_39742[(14)] = inst_39548);

(statearr_39742[(16)] = inst_39549);

return statearr_39742;
})();
var statearr_39743_39818 = state_39670__$1;
(statearr_39743_39818[(2)] = null);

(statearr_39743_39818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (14))){
var state_39670__$1 = state_39670;
var statearr_39747_39819 = state_39670__$1;
(statearr_39747_39819[(2)] = null);

(statearr_39747_39819[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (16))){
var inst_39562 = (state_39670[(10)]);
var inst_39568 = cljs.core.chunk_first.call(null,inst_39562);
var inst_39569 = cljs.core.chunk_rest.call(null,inst_39562);
var inst_39626 = cljs.core.count.call(null,inst_39568);
var inst_39548 = inst_39569;
var inst_39549 = inst_39568;
var inst_39550 = inst_39626;
var inst_39551 = (0);
var state_39670__$1 = (function (){var statearr_39748 = state_39670;
(statearr_39748[(12)] = inst_39550);

(statearr_39748[(13)] = inst_39551);

(statearr_39748[(14)] = inst_39548);

(statearr_39748[(16)] = inst_39549);

return statearr_39748;
})();
var statearr_39749_39824 = state_39670__$1;
(statearr_39749_39824[(2)] = null);

(statearr_39749_39824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (10))){
var inst_39550 = (state_39670[(12)]);
var inst_39551 = (state_39670[(13)]);
var inst_39548 = (state_39670[(14)]);
var inst_39549 = (state_39670[(16)]);
var inst_39556 = cljs.core._nth.call(null,inst_39549,inst_39551);
var inst_39557 = cljs.core.async.muxch_STAR_.call(null,inst_39556);
var inst_39558 = cljs.core.async.close_BANG_.call(null,inst_39557);
var inst_39559 = (inst_39551 + (1));
var tmp39744 = inst_39550;
var tmp39745 = inst_39548;
var tmp39746 = inst_39549;
var inst_39548__$1 = tmp39745;
var inst_39549__$1 = tmp39746;
var inst_39550__$1 = tmp39744;
var inst_39551__$1 = inst_39559;
var state_39670__$1 = (function (){var statearr_39750 = state_39670;
(statearr_39750[(12)] = inst_39550__$1);

(statearr_39750[(13)] = inst_39551__$1);

(statearr_39750[(14)] = inst_39548__$1);

(statearr_39750[(17)] = inst_39558);

(statearr_39750[(16)] = inst_39549__$1);

return statearr_39750;
})();
var statearr_39751_39828 = state_39670__$1;
(statearr_39751_39828[(2)] = null);

(statearr_39751_39828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (18))){
var inst_39635 = (state_39670[(2)]);
var state_39670__$1 = state_39670;
var statearr_39752_39829 = state_39670__$1;
(statearr_39752_39829[(2)] = inst_39635);

(statearr_39752_39829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39696 === (8))){
var inst_39550 = (state_39670[(12)]);
var inst_39551 = (state_39670[(13)]);
var inst_39553 = (inst_39551 < inst_39550);
var inst_39554 = inst_39553;
var state_39670__$1 = state_39670;
if(cljs.core.truth_(inst_39554)){
var statearr_39755_39832 = state_39670__$1;
(statearr_39755_39832[(1)] = (10));

} else {
var statearr_39756_39833 = state_39670__$1;
(statearr_39756_39833[(1)] = (11));

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
});})(c__33664__auto___39779,mults,ensure_mult,p))
;
return ((function (switch__33643__auto__,c__33664__auto___39779,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_39762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39762[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_39762[(1)] = (1));

return statearr_39762;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_39670){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_39670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e39763){if((e39763 instanceof Object)){
var ex__33647__auto__ = e39763;
var statearr_39764_39837 = state_39670;
(statearr_39764_39837[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39763;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39838 = state_39670;
state_39670 = G__39838;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_39670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_39670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___39779,mults,ensure_mult,p))
})();
var state__33666__auto__ = (function (){var statearr_39765 = f__33665__auto__.call(null);
(statearr_39765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___39779);

return statearr_39765;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___39779,mults,ensure_mult,p))
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
var args39839 = [];
var len__19784__auto___39844 = arguments.length;
var i__19785__auto___39845 = (0);
while(true){
if((i__19785__auto___39845 < len__19784__auto___39844)){
args39839.push((arguments[i__19785__auto___39845]));

var G__39846 = (i__19785__auto___39845 + (1));
i__19785__auto___39845 = G__39846;
continue;
} else {
}
break;
}

var G__39841 = args39839.length;
switch (G__39841) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39839.length)].join('')));

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
var args39851 = [];
var len__19784__auto___39856 = arguments.length;
var i__19785__auto___39857 = (0);
while(true){
if((i__19785__auto___39857 < len__19784__auto___39856)){
args39851.push((arguments[i__19785__auto___39857]));

var G__39858 = (i__19785__auto___39857 + (1));
i__19785__auto___39857 = G__39858;
continue;
} else {
}
break;
}

var G__39853 = args39851.length;
switch (G__39853) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39851.length)].join('')));

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
var args39863 = [];
var len__19784__auto___39959 = arguments.length;
var i__19785__auto___39960 = (0);
while(true){
if((i__19785__auto___39960 < len__19784__auto___39959)){
args39863.push((arguments[i__19785__auto___39960]));

var G__39961 = (i__19785__auto___39960 + (1));
i__19785__auto___39960 = G__39961;
continue;
} else {
}
break;
}

var G__39865 = args39863.length;
switch (G__39865) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39863.length)].join('')));

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
var c__33664__auto___39970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___39970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___39970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_39911){
var state_val_39912 = (state_39911[(1)]);
if((state_val_39912 === (7))){
var state_39911__$1 = state_39911;
var statearr_39916_39975 = state_39911__$1;
(statearr_39916_39975[(2)] = null);

(statearr_39916_39975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (1))){
var state_39911__$1 = state_39911;
var statearr_39917_39976 = state_39911__$1;
(statearr_39917_39976[(2)] = null);

(statearr_39917_39976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (4))){
var inst_39871 = (state_39911[(7)]);
var inst_39873 = (inst_39871 < cnt);
var state_39911__$1 = state_39911;
if(cljs.core.truth_(inst_39873)){
var statearr_39919_39977 = state_39911__$1;
(statearr_39919_39977[(1)] = (6));

} else {
var statearr_39920_39979 = state_39911__$1;
(statearr_39920_39979[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (15))){
var inst_39907 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
var statearr_39923_39981 = state_39911__$1;
(statearr_39923_39981[(2)] = inst_39907);

(statearr_39923_39981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (13))){
var inst_39900 = cljs.core.async.close_BANG_.call(null,out);
var state_39911__$1 = state_39911;
var statearr_39925_39983 = state_39911__$1;
(statearr_39925_39983[(2)] = inst_39900);

(statearr_39925_39983[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (6))){
var state_39911__$1 = state_39911;
var statearr_39926_39984 = state_39911__$1;
(statearr_39926_39984[(2)] = null);

(statearr_39926_39984[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (3))){
var inst_39909 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39911__$1,inst_39909);
} else {
if((state_val_39912 === (12))){
var inst_39897 = (state_39911[(8)]);
var inst_39897__$1 = (state_39911[(2)]);
var inst_39898 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39897__$1);
var state_39911__$1 = (function (){var statearr_39929 = state_39911;
(statearr_39929[(8)] = inst_39897__$1);

return statearr_39929;
})();
if(cljs.core.truth_(inst_39898)){
var statearr_39930_39989 = state_39911__$1;
(statearr_39930_39989[(1)] = (13));

} else {
var statearr_39931_39990 = state_39911__$1;
(statearr_39931_39990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (2))){
var inst_39870 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_39871 = (0);
var state_39911__$1 = (function (){var statearr_39933 = state_39911;
(statearr_39933[(7)] = inst_39871);

(statearr_39933[(9)] = inst_39870);

return statearr_39933;
})();
var statearr_39934_39991 = state_39911__$1;
(statearr_39934_39991[(2)] = null);

(statearr_39934_39991[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (11))){
var inst_39871 = (state_39911[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39911,(10),Object,null,(9));
var inst_39884 = chs__$1.call(null,inst_39871);
var inst_39885 = done.call(null,inst_39871);
var inst_39886 = cljs.core.async.take_BANG_.call(null,inst_39884,inst_39885);
var state_39911__$1 = state_39911;
var statearr_39935_39993 = state_39911__$1;
(statearr_39935_39993[(2)] = inst_39886);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (9))){
var inst_39871 = (state_39911[(7)]);
var inst_39888 = (state_39911[(2)]);
var inst_39889 = (inst_39871 + (1));
var inst_39871__$1 = inst_39889;
var state_39911__$1 = (function (){var statearr_39936 = state_39911;
(statearr_39936[(7)] = inst_39871__$1);

(statearr_39936[(10)] = inst_39888);

return statearr_39936;
})();
var statearr_39938_39997 = state_39911__$1;
(statearr_39938_39997[(2)] = null);

(statearr_39938_39997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (5))){
var inst_39895 = (state_39911[(2)]);
var state_39911__$1 = (function (){var statearr_39940 = state_39911;
(statearr_39940[(11)] = inst_39895);

return statearr_39940;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39911__$1,(12),dchan);
} else {
if((state_val_39912 === (14))){
var inst_39897 = (state_39911[(8)]);
var inst_39902 = cljs.core.apply.call(null,f,inst_39897);
var state_39911__$1 = state_39911;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39911__$1,(16),out,inst_39902);
} else {
if((state_val_39912 === (16))){
var inst_39904 = (state_39911[(2)]);
var state_39911__$1 = (function (){var statearr_39942 = state_39911;
(statearr_39942[(12)] = inst_39904);

return statearr_39942;
})();
var statearr_39943_40005 = state_39911__$1;
(statearr_39943_40005[(2)] = null);

(statearr_39943_40005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (10))){
var inst_39879 = (state_39911[(2)]);
var inst_39880 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_39911__$1 = (function (){var statearr_39945 = state_39911;
(statearr_39945[(13)] = inst_39879);

return statearr_39945;
})();
var statearr_39946_40011 = state_39911__$1;
(statearr_39946_40011[(2)] = inst_39880);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39911__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39912 === (8))){
var inst_39893 = (state_39911[(2)]);
var state_39911__$1 = state_39911;
var statearr_39947_40014 = state_39911__$1;
(statearr_39947_40014[(2)] = inst_39893);

(statearr_39947_40014[(1)] = (5));


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
});})(c__33664__auto___39970,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33643__auto__,c__33664__auto___39970,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_39951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39951[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_39951[(1)] = (1));

return statearr_39951;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_39911){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_39911);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e39952){if((e39952 instanceof Object)){
var ex__33647__auto__ = e39952;
var statearr_39954_40019 = state_39911;
(statearr_39954_40019[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39911);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40020 = state_39911;
state_39911 = G__40020;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_39911){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_39911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___39970,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33666__auto__ = (function (){var statearr_39956 = f__33665__auto__.call(null);
(statearr_39956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___39970);

return statearr_39956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___39970,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args40028 = [];
var len__19784__auto___40092 = arguments.length;
var i__19785__auto___40094 = (0);
while(true){
if((i__19785__auto___40094 < len__19784__auto___40092)){
args40028.push((arguments[i__19785__auto___40094]));

var G__40096 = (i__19785__auto___40094 + (1));
i__19785__auto___40094 = G__40096;
continue;
} else {
}
break;
}

var G__40031 = args40028.length;
switch (G__40031) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40028.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33664__auto___40100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___40100,out){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___40100,out){
return (function (state_40065){
var state_val_40066 = (state_40065[(1)]);
if((state_val_40066 === (7))){
var inst_40041 = (state_40065[(7)]);
var inst_40040 = (state_40065[(8)]);
var inst_40040__$1 = (state_40065[(2)]);
var inst_40041__$1 = cljs.core.nth.call(null,inst_40040__$1,(0),null);
var inst_40042 = cljs.core.nth.call(null,inst_40040__$1,(1),null);
var inst_40043 = (inst_40041__$1 == null);
var state_40065__$1 = (function (){var statearr_40067 = state_40065;
(statearr_40067[(9)] = inst_40042);

(statearr_40067[(7)] = inst_40041__$1);

(statearr_40067[(8)] = inst_40040__$1);

return statearr_40067;
})();
if(cljs.core.truth_(inst_40043)){
var statearr_40068_40104 = state_40065__$1;
(statearr_40068_40104[(1)] = (8));

} else {
var statearr_40069_40105 = state_40065__$1;
(statearr_40069_40105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (1))){
var inst_40032 = cljs.core.vec.call(null,chs);
var inst_40033 = inst_40032;
var state_40065__$1 = (function (){var statearr_40070 = state_40065;
(statearr_40070[(10)] = inst_40033);

return statearr_40070;
})();
var statearr_40071_40108 = state_40065__$1;
(statearr_40071_40108[(2)] = null);

(statearr_40071_40108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (4))){
var inst_40033 = (state_40065[(10)]);
var state_40065__$1 = state_40065;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40065__$1,(7),inst_40033);
} else {
if((state_val_40066 === (6))){
var inst_40060 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
var statearr_40072_40111 = state_40065__$1;
(statearr_40072_40111[(2)] = inst_40060);

(statearr_40072_40111[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (3))){
var inst_40062 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40065__$1,inst_40062);
} else {
if((state_val_40066 === (2))){
var inst_40033 = (state_40065[(10)]);
var inst_40035 = cljs.core.count.call(null,inst_40033);
var inst_40036 = (inst_40035 > (0));
var state_40065__$1 = state_40065;
if(cljs.core.truth_(inst_40036)){
var statearr_40074_40113 = state_40065__$1;
(statearr_40074_40113[(1)] = (4));

} else {
var statearr_40075_40114 = state_40065__$1;
(statearr_40075_40114[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (11))){
var inst_40033 = (state_40065[(10)]);
var inst_40053 = (state_40065[(2)]);
var tmp40073 = inst_40033;
var inst_40033__$1 = tmp40073;
var state_40065__$1 = (function (){var statearr_40076 = state_40065;
(statearr_40076[(10)] = inst_40033__$1);

(statearr_40076[(11)] = inst_40053);

return statearr_40076;
})();
var statearr_40077_40117 = state_40065__$1;
(statearr_40077_40117[(2)] = null);

(statearr_40077_40117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (9))){
var inst_40041 = (state_40065[(7)]);
var state_40065__$1 = state_40065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40065__$1,(11),out,inst_40041);
} else {
if((state_val_40066 === (5))){
var inst_40058 = cljs.core.async.close_BANG_.call(null,out);
var state_40065__$1 = state_40065;
var statearr_40078_40122 = state_40065__$1;
(statearr_40078_40122[(2)] = inst_40058);

(statearr_40078_40122[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (10))){
var inst_40056 = (state_40065[(2)]);
var state_40065__$1 = state_40065;
var statearr_40079_40123 = state_40065__$1;
(statearr_40079_40123[(2)] = inst_40056);

(statearr_40079_40123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40066 === (8))){
var inst_40042 = (state_40065[(9)]);
var inst_40033 = (state_40065[(10)]);
var inst_40041 = (state_40065[(7)]);
var inst_40040 = (state_40065[(8)]);
var inst_40047 = (function (){var cs = inst_40033;
var vec__40038 = inst_40040;
var v = inst_40041;
var c = inst_40042;
return ((function (cs,vec__40038,v,c,inst_40042,inst_40033,inst_40041,inst_40040,state_val_40066,c__33664__auto___40100,out){
return (function (p1__40027_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40027_SHARP_);
});
;})(cs,vec__40038,v,c,inst_40042,inst_40033,inst_40041,inst_40040,state_val_40066,c__33664__auto___40100,out))
})();
var inst_40049 = cljs.core.filterv.call(null,inst_40047,inst_40033);
var inst_40033__$1 = inst_40049;
var state_40065__$1 = (function (){var statearr_40080 = state_40065;
(statearr_40080[(10)] = inst_40033__$1);

return statearr_40080;
})();
var statearr_40081_40124 = state_40065__$1;
(statearr_40081_40124[(2)] = null);

(statearr_40081_40124[(1)] = (2));


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
});})(c__33664__auto___40100,out))
;
return ((function (switch__33643__auto__,c__33664__auto___40100,out){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_40087 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40087[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_40087[(1)] = (1));

return statearr_40087;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_40065){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_40065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e40088){if((e40088 instanceof Object)){
var ex__33647__auto__ = e40088;
var statearr_40089_40125 = state_40065;
(statearr_40089_40125[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40088;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40126 = state_40065;
state_40065 = G__40126;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_40065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_40065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___40100,out))
})();
var state__33666__auto__ = (function (){var statearr_40091 = f__33665__auto__.call(null);
(statearr_40091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___40100);

return statearr_40091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___40100,out))
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
var args40129 = [];
var len__19784__auto___40183 = arguments.length;
var i__19785__auto___40184 = (0);
while(true){
if((i__19785__auto___40184 < len__19784__auto___40183)){
args40129.push((arguments[i__19785__auto___40184]));

var G__40185 = (i__19785__auto___40184 + (1));
i__19785__auto___40184 = G__40185;
continue;
} else {
}
break;
}

var G__40132 = args40129.length;
switch (G__40132) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40129.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33664__auto___40190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___40190,out){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___40190,out){
return (function (state_40159){
var state_val_40160 = (state_40159[(1)]);
if((state_val_40160 === (7))){
var inst_40140 = (state_40159[(7)]);
var inst_40140__$1 = (state_40159[(2)]);
var inst_40141 = (inst_40140__$1 == null);
var inst_40142 = cljs.core.not.call(null,inst_40141);
var state_40159__$1 = (function (){var statearr_40162 = state_40159;
(statearr_40162[(7)] = inst_40140__$1);

return statearr_40162;
})();
if(inst_40142){
var statearr_40163_40194 = state_40159__$1;
(statearr_40163_40194[(1)] = (8));

} else {
var statearr_40164_40195 = state_40159__$1;
(statearr_40164_40195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (1))){
var inst_40135 = (0);
var state_40159__$1 = (function (){var statearr_40165 = state_40159;
(statearr_40165[(8)] = inst_40135);

return statearr_40165;
})();
var statearr_40166_40197 = state_40159__$1;
(statearr_40166_40197[(2)] = null);

(statearr_40166_40197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (4))){
var state_40159__$1 = state_40159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40159__$1,(7),ch);
} else {
if((state_val_40160 === (6))){
var inst_40154 = (state_40159[(2)]);
var state_40159__$1 = state_40159;
var statearr_40167_40198 = state_40159__$1;
(statearr_40167_40198[(2)] = inst_40154);

(statearr_40167_40198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (3))){
var inst_40156 = (state_40159[(2)]);
var inst_40157 = cljs.core.async.close_BANG_.call(null,out);
var state_40159__$1 = (function (){var statearr_40168 = state_40159;
(statearr_40168[(9)] = inst_40156);

return statearr_40168;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40159__$1,inst_40157);
} else {
if((state_val_40160 === (2))){
var inst_40135 = (state_40159[(8)]);
var inst_40137 = (inst_40135 < n);
var state_40159__$1 = state_40159;
if(cljs.core.truth_(inst_40137)){
var statearr_40169_40199 = state_40159__$1;
(statearr_40169_40199[(1)] = (4));

} else {
var statearr_40170_40200 = state_40159__$1;
(statearr_40170_40200[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (11))){
var inst_40135 = (state_40159[(8)]);
var inst_40145 = (state_40159[(2)]);
var inst_40146 = (inst_40135 + (1));
var inst_40135__$1 = inst_40146;
var state_40159__$1 = (function (){var statearr_40171 = state_40159;
(statearr_40171[(10)] = inst_40145);

(statearr_40171[(8)] = inst_40135__$1);

return statearr_40171;
})();
var statearr_40172_40201 = state_40159__$1;
(statearr_40172_40201[(2)] = null);

(statearr_40172_40201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (9))){
var state_40159__$1 = state_40159;
var statearr_40173_40207 = state_40159__$1;
(statearr_40173_40207[(2)] = null);

(statearr_40173_40207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (5))){
var state_40159__$1 = state_40159;
var statearr_40174_40209 = state_40159__$1;
(statearr_40174_40209[(2)] = null);

(statearr_40174_40209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (10))){
var inst_40150 = (state_40159[(2)]);
var state_40159__$1 = state_40159;
var statearr_40175_40210 = state_40159__$1;
(statearr_40175_40210[(2)] = inst_40150);

(statearr_40175_40210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40160 === (8))){
var inst_40140 = (state_40159[(7)]);
var state_40159__$1 = state_40159;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40159__$1,(11),out,inst_40140);
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
});})(c__33664__auto___40190,out))
;
return ((function (switch__33643__auto__,c__33664__auto___40190,out){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_40179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40179[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_40179[(1)] = (1));

return statearr_40179;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_40159){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_40159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e40180){if((e40180 instanceof Object)){
var ex__33647__auto__ = e40180;
var statearr_40181_40215 = state_40159;
(statearr_40181_40215[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40216 = state_40159;
state_40159 = G__40216;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_40159){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_40159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___40190,out))
})();
var state__33666__auto__ = (function (){var statearr_40182 = f__33665__auto__.call(null);
(statearr_40182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___40190);

return statearr_40182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___40190,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40234 = (function (map_LT_,f,ch,meta40235){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40235 = meta40235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40236,meta40235__$1){
var self__ = this;
var _40236__$1 = this;
return (new cljs.core.async.t_cljs$core$async40234(self__.map_LT_,self__.f,self__.ch,meta40235__$1));
});

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40236){
var self__ = this;
var _40236__$1 = this;
return self__.meta40235;
});

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40237 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40237 = (function (map_LT_,f,ch,meta40235,_,fn1,meta40238){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta40235 = meta40235;
this._ = _;
this.fn1 = fn1;
this.meta40238 = meta40238;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40239,meta40238__$1){
var self__ = this;
var _40239__$1 = this;
return (new cljs.core.async.t_cljs$core$async40237(self__.map_LT_,self__.f,self__.ch,self__.meta40235,self__._,self__.fn1,meta40238__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40237.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40239){
var self__ = this;
var _40239__$1 = this;
return self__.meta40238;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40237.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async40237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40237.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40217_SHARP_){
return f1.call(null,(((p1__40217_SHARP_ == null))?null:self__.f.call(null,p1__40217_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40237.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40235","meta40235",-860796348,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40234","cljs.core.async/t_cljs$core$async40234",543229724,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40238","meta40238",-75228596,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40237.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40237";

cljs.core.async.t_cljs$core$async40237.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40237");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async40237 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40237(map_LT___$1,f__$1,ch__$1,meta40235__$1,___$2,fn1__$1,meta40238){
return (new cljs.core.async.t_cljs$core$async40237(map_LT___$1,f__$1,ch__$1,meta40235__$1,___$2,fn1__$1,meta40238));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40237(self__.map_LT_,self__.f,self__.ch,self__.meta40235,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40235","meta40235",-860796348,null)], null);
});

cljs.core.async.t_cljs$core$async40234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40234";

cljs.core.async.t_cljs$core$async40234.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40234");
});

cljs.core.async.__GT_t_cljs$core$async40234 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40234(map_LT___$1,f__$1,ch__$1,meta40235){
return (new cljs.core.async.t_cljs$core$async40234(map_LT___$1,f__$1,ch__$1,meta40235));
});

}

return (new cljs.core.async.t_cljs$core$async40234(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40273 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40273 = (function (map_GT_,f,ch,meta40274){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta40274 = meta40274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40275,meta40274__$1){
var self__ = this;
var _40275__$1 = this;
return (new cljs.core.async.t_cljs$core$async40273(self__.map_GT_,self__.f,self__.ch,meta40274__$1));
});

cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40275){
var self__ = this;
var _40275__$1 = this;
return self__.meta40274;
});

cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40273.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40274","meta40274",-198910398,null)], null);
});

cljs.core.async.t_cljs$core$async40273.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40273";

cljs.core.async.t_cljs$core$async40273.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40273");
});

cljs.core.async.__GT_t_cljs$core$async40273 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40273(map_GT___$1,f__$1,ch__$1,meta40274){
return (new cljs.core.async.t_cljs$core$async40273(map_GT___$1,f__$1,ch__$1,meta40274));
});

}

return (new cljs.core.async.t_cljs$core$async40273(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40289 = (function (filter_GT_,p,ch,meta40290){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta40290 = meta40290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40291,meta40290__$1){
var self__ = this;
var _40291__$1 = this;
return (new cljs.core.async.t_cljs$core$async40289(self__.filter_GT_,self__.p,self__.ch,meta40290__$1));
});

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40291){
var self__ = this;
var _40291__$1 = this;
return self__.meta40290;
});

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async40289.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40290","meta40290",-943213903,null)], null);
});

cljs.core.async.t_cljs$core$async40289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40289";

cljs.core.async.t_cljs$core$async40289.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cljs.core.async/t_cljs$core$async40289");
});

cljs.core.async.__GT_t_cljs$core$async40289 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40289(filter_GT___$1,p__$1,ch__$1,meta40290){
return (new cljs.core.async.t_cljs$core$async40289(filter_GT___$1,p__$1,ch__$1,meta40290));
});

}

return (new cljs.core.async.t_cljs$core$async40289(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args40302 = [];
var len__19784__auto___40356 = arguments.length;
var i__19785__auto___40357 = (0);
while(true){
if((i__19785__auto___40357 < len__19784__auto___40356)){
args40302.push((arguments[i__19785__auto___40357]));

var G__40362 = (i__19785__auto___40357 + (1));
i__19785__auto___40357 = G__40362;
continue;
} else {
}
break;
}

var G__40304 = args40302.length;
switch (G__40304) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40302.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33664__auto___40376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___40376,out){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___40376,out){
return (function (state_40325){
var state_val_40326 = (state_40325[(1)]);
if((state_val_40326 === (7))){
var inst_40321 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
var statearr_40327_40380 = state_40325__$1;
(statearr_40327_40380[(2)] = inst_40321);

(statearr_40327_40380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (1))){
var state_40325__$1 = state_40325;
var statearr_40328_40382 = state_40325__$1;
(statearr_40328_40382[(2)] = null);

(statearr_40328_40382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (4))){
var inst_40307 = (state_40325[(7)]);
var inst_40307__$1 = (state_40325[(2)]);
var inst_40308 = (inst_40307__$1 == null);
var state_40325__$1 = (function (){var statearr_40329 = state_40325;
(statearr_40329[(7)] = inst_40307__$1);

return statearr_40329;
})();
if(cljs.core.truth_(inst_40308)){
var statearr_40330_40383 = state_40325__$1;
(statearr_40330_40383[(1)] = (5));

} else {
var statearr_40331_40384 = state_40325__$1;
(statearr_40331_40384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (6))){
var inst_40307 = (state_40325[(7)]);
var inst_40312 = p.call(null,inst_40307);
var state_40325__$1 = state_40325;
if(cljs.core.truth_(inst_40312)){
var statearr_40338_40385 = state_40325__$1;
(statearr_40338_40385[(1)] = (8));

} else {
var statearr_40339_40386 = state_40325__$1;
(statearr_40339_40386[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (3))){
var inst_40323 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40325__$1,inst_40323);
} else {
if((state_val_40326 === (2))){
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40325__$1,(4),ch);
} else {
if((state_val_40326 === (11))){
var inst_40315 = (state_40325[(2)]);
var state_40325__$1 = state_40325;
var statearr_40340_40397 = state_40325__$1;
(statearr_40340_40397[(2)] = inst_40315);

(statearr_40340_40397[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (9))){
var state_40325__$1 = state_40325;
var statearr_40345_40402 = state_40325__$1;
(statearr_40345_40402[(2)] = null);

(statearr_40345_40402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (5))){
var inst_40310 = cljs.core.async.close_BANG_.call(null,out);
var state_40325__$1 = state_40325;
var statearr_40346_40404 = state_40325__$1;
(statearr_40346_40404[(2)] = inst_40310);

(statearr_40346_40404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (10))){
var inst_40318 = (state_40325[(2)]);
var state_40325__$1 = (function (){var statearr_40347 = state_40325;
(statearr_40347[(8)] = inst_40318);

return statearr_40347;
})();
var statearr_40348_40410 = state_40325__$1;
(statearr_40348_40410[(2)] = null);

(statearr_40348_40410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40326 === (8))){
var inst_40307 = (state_40325[(7)]);
var state_40325__$1 = state_40325;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40325__$1,(11),out,inst_40307);
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
});})(c__33664__auto___40376,out))
;
return ((function (switch__33643__auto__,c__33664__auto___40376,out){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_40352 = [null,null,null,null,null,null,null,null,null];
(statearr_40352[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_40352[(1)] = (1));

return statearr_40352;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_40325){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_40325);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e40353){if((e40353 instanceof Object)){
var ex__33647__auto__ = e40353;
var statearr_40354_40440 = state_40325;
(statearr_40354_40440[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40325);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40353;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40442 = state_40325;
state_40325 = G__40442;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_40325){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_40325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___40376,out))
})();
var state__33666__auto__ = (function (){var statearr_40355 = f__33665__auto__.call(null);
(statearr_40355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___40376);

return statearr_40355;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___40376,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args40448 = [];
var len__19784__auto___40455 = arguments.length;
var i__19785__auto___40456 = (0);
while(true){
if((i__19785__auto___40456 < len__19784__auto___40455)){
args40448.push((arguments[i__19785__auto___40456]));

var G__40457 = (i__19785__auto___40456 + (1));
i__19785__auto___40456 = G__40457;
continue;
} else {
}
break;
}

var G__40452 = args40448.length;
switch (G__40452) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40448.length)].join('')));

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
var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__){
return (function (state_40680){
var state_val_40681 = (state_40680[(1)]);
if((state_val_40681 === (7))){
var inst_40672 = (state_40680[(2)]);
var state_40680__$1 = state_40680;
var statearr_40682_40739 = state_40680__$1;
(statearr_40682_40739[(2)] = inst_40672);

(statearr_40682_40739[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (20))){
var inst_40629 = (state_40680[(7)]);
var inst_40652 = (state_40680[(2)]);
var inst_40653 = cljs.core.next.call(null,inst_40629);
var inst_40611 = inst_40653;
var inst_40612 = null;
var inst_40613 = (0);
var inst_40614 = (0);
var state_40680__$1 = (function (){var statearr_40683 = state_40680;
(statearr_40683[(8)] = inst_40613);

(statearr_40683[(9)] = inst_40614);

(statearr_40683[(10)] = inst_40611);

(statearr_40683[(11)] = inst_40612);

(statearr_40683[(12)] = inst_40652);

return statearr_40683;
})();
var statearr_40684_40747 = state_40680__$1;
(statearr_40684_40747[(2)] = null);

(statearr_40684_40747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (1))){
var state_40680__$1 = state_40680;
var statearr_40685_40749 = state_40680__$1;
(statearr_40685_40749[(2)] = null);

(statearr_40685_40749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (4))){
var inst_40600 = (state_40680[(13)]);
var inst_40600__$1 = (state_40680[(2)]);
var inst_40601 = (inst_40600__$1 == null);
var state_40680__$1 = (function (){var statearr_40686 = state_40680;
(statearr_40686[(13)] = inst_40600__$1);

return statearr_40686;
})();
if(cljs.core.truth_(inst_40601)){
var statearr_40687_40750 = state_40680__$1;
(statearr_40687_40750[(1)] = (5));

} else {
var statearr_40688_40751 = state_40680__$1;
(statearr_40688_40751[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (15))){
var state_40680__$1 = state_40680;
var statearr_40692_40756 = state_40680__$1;
(statearr_40692_40756[(2)] = null);

(statearr_40692_40756[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (21))){
var state_40680__$1 = state_40680;
var statearr_40693_40762 = state_40680__$1;
(statearr_40693_40762[(2)] = null);

(statearr_40693_40762[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (13))){
var inst_40613 = (state_40680[(8)]);
var inst_40614 = (state_40680[(9)]);
var inst_40611 = (state_40680[(10)]);
var inst_40612 = (state_40680[(11)]);
var inst_40625 = (state_40680[(2)]);
var inst_40626 = (inst_40614 + (1));
var tmp40689 = inst_40613;
var tmp40690 = inst_40611;
var tmp40691 = inst_40612;
var inst_40611__$1 = tmp40690;
var inst_40612__$1 = tmp40691;
var inst_40613__$1 = tmp40689;
var inst_40614__$1 = inst_40626;
var state_40680__$1 = (function (){var statearr_40694 = state_40680;
(statearr_40694[(8)] = inst_40613__$1);

(statearr_40694[(9)] = inst_40614__$1);

(statearr_40694[(10)] = inst_40611__$1);

(statearr_40694[(14)] = inst_40625);

(statearr_40694[(11)] = inst_40612__$1);

return statearr_40694;
})();
var statearr_40695_40775 = state_40680__$1;
(statearr_40695_40775[(2)] = null);

(statearr_40695_40775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (22))){
var state_40680__$1 = state_40680;
var statearr_40696_40776 = state_40680__$1;
(statearr_40696_40776[(2)] = null);

(statearr_40696_40776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (6))){
var inst_40600 = (state_40680[(13)]);
var inst_40609 = f.call(null,inst_40600);
var inst_40610 = cljs.core.seq.call(null,inst_40609);
var inst_40611 = inst_40610;
var inst_40612 = null;
var inst_40613 = (0);
var inst_40614 = (0);
var state_40680__$1 = (function (){var statearr_40697 = state_40680;
(statearr_40697[(8)] = inst_40613);

(statearr_40697[(9)] = inst_40614);

(statearr_40697[(10)] = inst_40611);

(statearr_40697[(11)] = inst_40612);

return statearr_40697;
})();
var statearr_40698_40777 = state_40680__$1;
(statearr_40698_40777[(2)] = null);

(statearr_40698_40777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (17))){
var inst_40629 = (state_40680[(7)]);
var inst_40633 = cljs.core.chunk_first.call(null,inst_40629);
var inst_40634 = cljs.core.chunk_rest.call(null,inst_40629);
var inst_40635 = cljs.core.count.call(null,inst_40633);
var inst_40611 = inst_40634;
var inst_40612 = inst_40633;
var inst_40613 = inst_40635;
var inst_40614 = (0);
var state_40680__$1 = (function (){var statearr_40699 = state_40680;
(statearr_40699[(8)] = inst_40613);

(statearr_40699[(9)] = inst_40614);

(statearr_40699[(10)] = inst_40611);

(statearr_40699[(11)] = inst_40612);

return statearr_40699;
})();
var statearr_40706_40780 = state_40680__$1;
(statearr_40706_40780[(2)] = null);

(statearr_40706_40780[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (3))){
var inst_40674 = (state_40680[(2)]);
var state_40680__$1 = state_40680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40680__$1,inst_40674);
} else {
if((state_val_40681 === (12))){
var inst_40661 = (state_40680[(2)]);
var state_40680__$1 = state_40680;
var statearr_40707_40782 = state_40680__$1;
(statearr_40707_40782[(2)] = inst_40661);

(statearr_40707_40782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (2))){
var state_40680__$1 = state_40680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40680__$1,(4),in$);
} else {
if((state_val_40681 === (23))){
var inst_40670 = (state_40680[(2)]);
var state_40680__$1 = state_40680;
var statearr_40710_40787 = state_40680__$1;
(statearr_40710_40787[(2)] = inst_40670);

(statearr_40710_40787[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (19))){
var inst_40656 = (state_40680[(2)]);
var state_40680__$1 = state_40680;
var statearr_40712_40788 = state_40680__$1;
(statearr_40712_40788[(2)] = inst_40656);

(statearr_40712_40788[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (11))){
var inst_40629 = (state_40680[(7)]);
var inst_40611 = (state_40680[(10)]);
var inst_40629__$1 = cljs.core.seq.call(null,inst_40611);
var state_40680__$1 = (function (){var statearr_40713 = state_40680;
(statearr_40713[(7)] = inst_40629__$1);

return statearr_40713;
})();
if(inst_40629__$1){
var statearr_40715_40789 = state_40680__$1;
(statearr_40715_40789[(1)] = (14));

} else {
var statearr_40716_40791 = state_40680__$1;
(statearr_40716_40791[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (9))){
var inst_40663 = (state_40680[(2)]);
var inst_40665 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40680__$1 = (function (){var statearr_40717 = state_40680;
(statearr_40717[(15)] = inst_40663);

return statearr_40717;
})();
if(cljs.core.truth_(inst_40665)){
var statearr_40718_40794 = state_40680__$1;
(statearr_40718_40794[(1)] = (21));

} else {
var statearr_40719_40795 = state_40680__$1;
(statearr_40719_40795[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (5))){
var inst_40603 = cljs.core.async.close_BANG_.call(null,out);
var state_40680__$1 = state_40680;
var statearr_40720_40796 = state_40680__$1;
(statearr_40720_40796[(2)] = inst_40603);

(statearr_40720_40796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (14))){
var inst_40629 = (state_40680[(7)]);
var inst_40631 = cljs.core.chunked_seq_QMARK_.call(null,inst_40629);
var state_40680__$1 = state_40680;
if(inst_40631){
var statearr_40721_40801 = state_40680__$1;
(statearr_40721_40801[(1)] = (17));

} else {
var statearr_40722_40802 = state_40680__$1;
(statearr_40722_40802[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (16))){
var inst_40659 = (state_40680[(2)]);
var state_40680__$1 = state_40680;
var statearr_40723_40803 = state_40680__$1;
(statearr_40723_40803[(2)] = inst_40659);

(statearr_40723_40803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40681 === (10))){
var inst_40614 = (state_40680[(9)]);
var inst_40612 = (state_40680[(11)]);
var inst_40619 = cljs.core._nth.call(null,inst_40612,inst_40614);
var state_40680__$1 = state_40680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40680__$1,(13),out,inst_40619);
} else {
if((state_val_40681 === (18))){
var inst_40629 = (state_40680[(7)]);
var inst_40650 = cljs.core.first.call(null,inst_40629);
var state_40680__$1 = state_40680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40680__$1,(20),out,inst_40650);
} else {
if((state_val_40681 === (8))){
var inst_40613 = (state_40680[(8)]);
var inst_40614 = (state_40680[(9)]);
var inst_40616 = (inst_40614 < inst_40613);
var inst_40617 = inst_40616;
var state_40680__$1 = state_40680;
if(cljs.core.truth_(inst_40617)){
var statearr_40724_40804 = state_40680__$1;
(statearr_40724_40804[(1)] = (10));

} else {
var statearr_40725_40805 = state_40680__$1;
(statearr_40725_40805[(1)] = (11));

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
});})(c__33664__auto__))
;
return ((function (switch__33643__auto__,c__33664__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33644__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33644__auto____0 = (function (){
var statearr_40729 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40729[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33644__auto__);

(statearr_40729[(1)] = (1));

return statearr_40729;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33644__auto____1 = (function (state_40680){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_40680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e40730){if((e40730 instanceof Object)){
var ex__33647__auto__ = e40730;
var statearr_40731_40806 = state_40680;
(statearr_40731_40806[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40807 = state_40680;
state_40680 = G__40807;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33644__auto__ = function(state_40680){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33644__auto____1.call(this,state_40680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33644__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33644__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__))
})();
var state__33666__auto__ = (function (){var statearr_40732 = f__33665__auto__.call(null);
(statearr_40732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_40732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__))
);

return c__33664__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args40811 = [];
var len__19784__auto___40818 = arguments.length;
var i__19785__auto___40819 = (0);
while(true){
if((i__19785__auto___40819 < len__19784__auto___40818)){
args40811.push((arguments[i__19785__auto___40819]));

var G__40820 = (i__19785__auto___40819 + (1));
i__19785__auto___40819 = G__40820;
continue;
} else {
}
break;
}

var G__40816 = args40811.length;
switch (G__40816) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40811.length)].join('')));

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
var args40825 = [];
var len__19784__auto___40832 = arguments.length;
var i__19785__auto___40833 = (0);
while(true){
if((i__19785__auto___40833 < len__19784__auto___40832)){
args40825.push((arguments[i__19785__auto___40833]));

var G__40834 = (i__19785__auto___40833 + (1));
i__19785__auto___40833 = G__40834;
continue;
} else {
}
break;
}

var G__40829 = args40825.length;
switch (G__40829) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40825.length)].join('')));

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
var args40838 = [];
var len__19784__auto___40900 = arguments.length;
var i__19785__auto___40901 = (0);
while(true){
if((i__19785__auto___40901 < len__19784__auto___40900)){
args40838.push((arguments[i__19785__auto___40901]));

var G__40902 = (i__19785__auto___40901 + (1));
i__19785__auto___40901 = G__40902;
continue;
} else {
}
break;
}

var G__40841 = args40838.length;
switch (G__40841) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40838.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33664__auto___40904 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___40904,out){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___40904,out){
return (function (state_40869){
var state_val_40870 = (state_40869[(1)]);
if((state_val_40870 === (7))){
var inst_40863 = (state_40869[(2)]);
var state_40869__$1 = state_40869;
var statearr_40871_40905 = state_40869__$1;
(statearr_40871_40905[(2)] = inst_40863);

(statearr_40871_40905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (1))){
var inst_40844 = null;
var state_40869__$1 = (function (){var statearr_40872 = state_40869;
(statearr_40872[(7)] = inst_40844);

return statearr_40872;
})();
var statearr_40873_40906 = state_40869__$1;
(statearr_40873_40906[(2)] = null);

(statearr_40873_40906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (4))){
var inst_40847 = (state_40869[(8)]);
var inst_40847__$1 = (state_40869[(2)]);
var inst_40848 = (inst_40847__$1 == null);
var inst_40849 = cljs.core.not.call(null,inst_40848);
var state_40869__$1 = (function (){var statearr_40874 = state_40869;
(statearr_40874[(8)] = inst_40847__$1);

return statearr_40874;
})();
if(inst_40849){
var statearr_40875_40911 = state_40869__$1;
(statearr_40875_40911[(1)] = (5));

} else {
var statearr_40876_40912 = state_40869__$1;
(statearr_40876_40912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (6))){
var state_40869__$1 = state_40869;
var statearr_40877_40913 = state_40869__$1;
(statearr_40877_40913[(2)] = null);

(statearr_40877_40913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (3))){
var inst_40865 = (state_40869[(2)]);
var inst_40867 = cljs.core.async.close_BANG_.call(null,out);
var state_40869__$1 = (function (){var statearr_40878 = state_40869;
(statearr_40878[(9)] = inst_40865);

return statearr_40878;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40869__$1,inst_40867);
} else {
if((state_val_40870 === (2))){
var state_40869__$1 = state_40869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40869__$1,(4),ch);
} else {
if((state_val_40870 === (11))){
var inst_40847 = (state_40869[(8)]);
var inst_40857 = (state_40869[(2)]);
var inst_40844 = inst_40847;
var state_40869__$1 = (function (){var statearr_40879 = state_40869;
(statearr_40879[(10)] = inst_40857);

(statearr_40879[(7)] = inst_40844);

return statearr_40879;
})();
var statearr_40884_40914 = state_40869__$1;
(statearr_40884_40914[(2)] = null);

(statearr_40884_40914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (9))){
var inst_40847 = (state_40869[(8)]);
var state_40869__$1 = state_40869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40869__$1,(11),out,inst_40847);
} else {
if((state_val_40870 === (5))){
var inst_40844 = (state_40869[(7)]);
var inst_40847 = (state_40869[(8)]);
var inst_40851 = cljs.core._EQ_.call(null,inst_40847,inst_40844);
var state_40869__$1 = state_40869;
if(inst_40851){
var statearr_40887_40920 = state_40869__$1;
(statearr_40887_40920[(1)] = (8));

} else {
var statearr_40888_40921 = state_40869__$1;
(statearr_40888_40921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (10))){
var inst_40860 = (state_40869[(2)]);
var state_40869__$1 = state_40869;
var statearr_40889_40922 = state_40869__$1;
(statearr_40889_40922[(2)] = inst_40860);

(statearr_40889_40922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40870 === (8))){
var inst_40844 = (state_40869[(7)]);
var tmp40885 = inst_40844;
var inst_40844__$1 = tmp40885;
var state_40869__$1 = (function (){var statearr_40890 = state_40869;
(statearr_40890[(7)] = inst_40844__$1);

return statearr_40890;
})();
var statearr_40891_40928 = state_40869__$1;
(statearr_40891_40928[(2)] = null);

(statearr_40891_40928[(1)] = (2));


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
});})(c__33664__auto___40904,out))
;
return ((function (switch__33643__auto__,c__33664__auto___40904,out){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_40896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40896[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_40896[(1)] = (1));

return statearr_40896;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_40869){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_40869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e40897){if((e40897 instanceof Object)){
var ex__33647__auto__ = e40897;
var statearr_40898_40931 = state_40869;
(statearr_40898_40931[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40932 = state_40869;
state_40869 = G__40932;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_40869){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_40869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___40904,out))
})();
var state__33666__auto__ = (function (){var statearr_40899 = f__33665__auto__.call(null);
(statearr_40899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___40904);

return statearr_40899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___40904,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args40933 = [];
var len__19784__auto___41030 = arguments.length;
var i__19785__auto___41031 = (0);
while(true){
if((i__19785__auto___41031 < len__19784__auto___41030)){
args40933.push((arguments[i__19785__auto___41031]));

var G__41033 = (i__19785__auto___41031 + (1));
i__19785__auto___41031 = G__41033;
continue;
} else {
}
break;
}

var G__40935 = args40933.length;
switch (G__40935) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40933.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33664__auto___41039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___41039,out){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___41039,out){
return (function (state_40973){
var state_val_40974 = (state_40973[(1)]);
if((state_val_40974 === (7))){
var inst_40969 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40975_41041 = state_40973__$1;
(statearr_40975_41041[(2)] = inst_40969);

(statearr_40975_41041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (1))){
var inst_40936 = (new Array(n));
var inst_40937 = inst_40936;
var inst_40938 = (0);
var state_40973__$1 = (function (){var statearr_40976 = state_40973;
(statearr_40976[(7)] = inst_40937);

(statearr_40976[(8)] = inst_40938);

return statearr_40976;
})();
var statearr_40977_41042 = state_40973__$1;
(statearr_40977_41042[(2)] = null);

(statearr_40977_41042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (4))){
var inst_40941 = (state_40973[(9)]);
var inst_40941__$1 = (state_40973[(2)]);
var inst_40942 = (inst_40941__$1 == null);
var inst_40943 = cljs.core.not.call(null,inst_40942);
var state_40973__$1 = (function (){var statearr_40978 = state_40973;
(statearr_40978[(9)] = inst_40941__$1);

return statearr_40978;
})();
if(inst_40943){
var statearr_40979_41048 = state_40973__$1;
(statearr_40979_41048[(1)] = (5));

} else {
var statearr_40980_41050 = state_40973__$1;
(statearr_40980_41050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (15))){
var inst_40963 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_40981_41051 = state_40973__$1;
(statearr_40981_41051[(2)] = inst_40963);

(statearr_40981_41051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (13))){
var state_40973__$1 = state_40973;
var statearr_40982_41054 = state_40973__$1;
(statearr_40982_41054[(2)] = null);

(statearr_40982_41054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (6))){
var inst_40938 = (state_40973[(8)]);
var inst_40959 = (inst_40938 > (0));
var state_40973__$1 = state_40973;
if(cljs.core.truth_(inst_40959)){
var statearr_40983_41057 = state_40973__$1;
(statearr_40983_41057[(1)] = (12));

} else {
var statearr_40984_41058 = state_40973__$1;
(statearr_40984_41058[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (3))){
var inst_40971 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40973__$1,inst_40971);
} else {
if((state_val_40974 === (12))){
var inst_40937 = (state_40973[(7)]);
var inst_40961 = cljs.core.vec.call(null,inst_40937);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40973__$1,(15),out,inst_40961);
} else {
if((state_val_40974 === (2))){
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40973__$1,(4),ch);
} else {
if((state_val_40974 === (11))){
var inst_40953 = (state_40973[(2)]);
var inst_40954 = (new Array(n));
var inst_40937 = inst_40954;
var inst_40938 = (0);
var state_40973__$1 = (function (){var statearr_40985 = state_40973;
(statearr_40985[(10)] = inst_40953);

(statearr_40985[(7)] = inst_40937);

(statearr_40985[(8)] = inst_40938);

return statearr_40985;
})();
var statearr_40986_41059 = state_40973__$1;
(statearr_40986_41059[(2)] = null);

(statearr_40986_41059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (9))){
var inst_40937 = (state_40973[(7)]);
var inst_40951 = cljs.core.vec.call(null,inst_40937);
var state_40973__$1 = state_40973;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40973__$1,(11),out,inst_40951);
} else {
if((state_val_40974 === (5))){
var inst_40946 = (state_40973[(11)]);
var inst_40937 = (state_40973[(7)]);
var inst_40941 = (state_40973[(9)]);
var inst_40938 = (state_40973[(8)]);
var inst_40945 = (inst_40937[inst_40938] = inst_40941);
var inst_40946__$1 = (inst_40938 + (1));
var inst_40947 = (inst_40946__$1 < n);
var state_40973__$1 = (function (){var statearr_41001 = state_40973;
(statearr_41001[(12)] = inst_40945);

(statearr_41001[(11)] = inst_40946__$1);

return statearr_41001;
})();
if(cljs.core.truth_(inst_40947)){
var statearr_41006_41060 = state_40973__$1;
(statearr_41006_41060[(1)] = (8));

} else {
var statearr_41007_41061 = state_40973__$1;
(statearr_41007_41061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (14))){
var inst_40966 = (state_40973[(2)]);
var inst_40967 = cljs.core.async.close_BANG_.call(null,out);
var state_40973__$1 = (function (){var statearr_41009 = state_40973;
(statearr_41009[(13)] = inst_40966);

return statearr_41009;
})();
var statearr_41010_41066 = state_40973__$1;
(statearr_41010_41066[(2)] = inst_40967);

(statearr_41010_41066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (10))){
var inst_40957 = (state_40973[(2)]);
var state_40973__$1 = state_40973;
var statearr_41012_41068 = state_40973__$1;
(statearr_41012_41068[(2)] = inst_40957);

(statearr_41012_41068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40974 === (8))){
var inst_40946 = (state_40973[(11)]);
var inst_40937 = (state_40973[(7)]);
var tmp41008 = inst_40937;
var inst_40937__$1 = tmp41008;
var inst_40938 = inst_40946;
var state_40973__$1 = (function (){var statearr_41013 = state_40973;
(statearr_41013[(7)] = inst_40937__$1);

(statearr_41013[(8)] = inst_40938);

return statearr_41013;
})();
var statearr_41014_41071 = state_40973__$1;
(statearr_41014_41071[(2)] = null);

(statearr_41014_41071[(1)] = (2));


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
});})(c__33664__auto___41039,out))
;
return ((function (switch__33643__auto__,c__33664__auto___41039,out){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_41022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41022[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_41022[(1)] = (1));

return statearr_41022;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_40973){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_40973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e41023){if((e41023 instanceof Object)){
var ex__33647__auto__ = e41023;
var statearr_41024_41075 = state_40973;
(statearr_41024_41075[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41076 = state_40973;
state_40973 = G__41076;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_40973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_40973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___41039,out))
})();
var state__33666__auto__ = (function (){var statearr_41025 = f__33665__auto__.call(null);
(statearr_41025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___41039);

return statearr_41025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___41039,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args41078 = [];
var len__19784__auto___41164 = arguments.length;
var i__19785__auto___41165 = (0);
while(true){
if((i__19785__auto___41165 < len__19784__auto___41164)){
args41078.push((arguments[i__19785__auto___41165]));

var G__41166 = (i__19785__auto___41165 + (1));
i__19785__auto___41165 = G__41166;
continue;
} else {
}
break;
}

var G__41084 = args41078.length;
switch (G__41084) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41078.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33664__auto___41172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___41172,out){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___41172,out){
return (function (state_41129){
var state_val_41130 = (state_41129[(1)]);
if((state_val_41130 === (7))){
var inst_41125 = (state_41129[(2)]);
var state_41129__$1 = state_41129;
var statearr_41133_41173 = state_41129__$1;
(statearr_41133_41173[(2)] = inst_41125);

(statearr_41133_41173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (1))){
var inst_41086 = [];
var inst_41087 = inst_41086;
var inst_41088 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41129__$1 = (function (){var statearr_41134 = state_41129;
(statearr_41134[(7)] = inst_41088);

(statearr_41134[(8)] = inst_41087);

return statearr_41134;
})();
var statearr_41135_41174 = state_41129__$1;
(statearr_41135_41174[(2)] = null);

(statearr_41135_41174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (4))){
var inst_41091 = (state_41129[(9)]);
var inst_41091__$1 = (state_41129[(2)]);
var inst_41092 = (inst_41091__$1 == null);
var inst_41093 = cljs.core.not.call(null,inst_41092);
var state_41129__$1 = (function (){var statearr_41136 = state_41129;
(statearr_41136[(9)] = inst_41091__$1);

return statearr_41136;
})();
if(inst_41093){
var statearr_41137_41175 = state_41129__$1;
(statearr_41137_41175[(1)] = (5));

} else {
var statearr_41138_41176 = state_41129__$1;
(statearr_41138_41176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (15))){
var inst_41119 = (state_41129[(2)]);
var state_41129__$1 = state_41129;
var statearr_41139_41177 = state_41129__$1;
(statearr_41139_41177[(2)] = inst_41119);

(statearr_41139_41177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (13))){
var state_41129__$1 = state_41129;
var statearr_41140_41178 = state_41129__$1;
(statearr_41140_41178[(2)] = null);

(statearr_41140_41178[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (6))){
var inst_41087 = (state_41129[(8)]);
var inst_41113 = inst_41087.length;
var inst_41114 = (inst_41113 > (0));
var state_41129__$1 = state_41129;
if(cljs.core.truth_(inst_41114)){
var statearr_41141_41179 = state_41129__$1;
(statearr_41141_41179[(1)] = (12));

} else {
var statearr_41142_41180 = state_41129__$1;
(statearr_41142_41180[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (3))){
var inst_41127 = (state_41129[(2)]);
var state_41129__$1 = state_41129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41129__$1,inst_41127);
} else {
if((state_val_41130 === (12))){
var inst_41087 = (state_41129[(8)]);
var inst_41117 = cljs.core.vec.call(null,inst_41087);
var state_41129__$1 = state_41129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41129__$1,(15),out,inst_41117);
} else {
if((state_val_41130 === (2))){
var state_41129__$1 = state_41129;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41129__$1,(4),ch);
} else {
if((state_val_41130 === (11))){
var inst_41091 = (state_41129[(9)]);
var inst_41095 = (state_41129[(10)]);
var inst_41105 = (state_41129[(2)]);
var inst_41106 = [];
var inst_41107 = inst_41106.push(inst_41091);
var inst_41087 = inst_41106;
var inst_41088 = inst_41095;
var state_41129__$1 = (function (){var statearr_41143 = state_41129;
(statearr_41143[(11)] = inst_41105);

(statearr_41143[(7)] = inst_41088);

(statearr_41143[(8)] = inst_41087);

(statearr_41143[(12)] = inst_41107);

return statearr_41143;
})();
var statearr_41144_41187 = state_41129__$1;
(statearr_41144_41187[(2)] = null);

(statearr_41144_41187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (9))){
var inst_41087 = (state_41129[(8)]);
var inst_41103 = cljs.core.vec.call(null,inst_41087);
var state_41129__$1 = state_41129;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41129__$1,(11),out,inst_41103);
} else {
if((state_val_41130 === (5))){
var inst_41088 = (state_41129[(7)]);
var inst_41091 = (state_41129[(9)]);
var inst_41095 = (state_41129[(10)]);
var inst_41095__$1 = f.call(null,inst_41091);
var inst_41096 = cljs.core._EQ_.call(null,inst_41095__$1,inst_41088);
var inst_41097 = cljs.core.keyword_identical_QMARK_.call(null,inst_41088,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41098 = (inst_41096) || (inst_41097);
var state_41129__$1 = (function (){var statearr_41145 = state_41129;
(statearr_41145[(10)] = inst_41095__$1);

return statearr_41145;
})();
if(cljs.core.truth_(inst_41098)){
var statearr_41146_41192 = state_41129__$1;
(statearr_41146_41192[(1)] = (8));

} else {
var statearr_41147_41193 = state_41129__$1;
(statearr_41147_41193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (14))){
var inst_41122 = (state_41129[(2)]);
var inst_41123 = cljs.core.async.close_BANG_.call(null,out);
var state_41129__$1 = (function (){var statearr_41149 = state_41129;
(statearr_41149[(13)] = inst_41122);

return statearr_41149;
})();
var statearr_41150_41194 = state_41129__$1;
(statearr_41150_41194[(2)] = inst_41123);

(statearr_41150_41194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (10))){
var inst_41110 = (state_41129[(2)]);
var state_41129__$1 = state_41129;
var statearr_41151_41195 = state_41129__$1;
(statearr_41151_41195[(2)] = inst_41110);

(statearr_41151_41195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41130 === (8))){
var inst_41087 = (state_41129[(8)]);
var inst_41091 = (state_41129[(9)]);
var inst_41095 = (state_41129[(10)]);
var inst_41100 = inst_41087.push(inst_41091);
var tmp41148 = inst_41087;
var inst_41087__$1 = tmp41148;
var inst_41088 = inst_41095;
var state_41129__$1 = (function (){var statearr_41152 = state_41129;
(statearr_41152[(7)] = inst_41088);

(statearr_41152[(8)] = inst_41087__$1);

(statearr_41152[(14)] = inst_41100);

return statearr_41152;
})();
var statearr_41153_41196 = state_41129__$1;
(statearr_41153_41196[(2)] = null);

(statearr_41153_41196[(1)] = (2));


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
});})(c__33664__auto___41172,out))
;
return ((function (switch__33643__auto__,c__33664__auto___41172,out){
return (function() {
var cljs$core$async$state_machine__33644__auto__ = null;
var cljs$core$async$state_machine__33644__auto____0 = (function (){
var statearr_41158 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41158[(0)] = cljs$core$async$state_machine__33644__auto__);

(statearr_41158[(1)] = (1));

return statearr_41158;
});
var cljs$core$async$state_machine__33644__auto____1 = (function (state_41129){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_41129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e41159){if((e41159 instanceof Object)){
var ex__33647__auto__ = e41159;
var statearr_41161_41197 = state_41129;
(statearr_41161_41197[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41198 = state_41129;
state_41129 = G__41198;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
cljs$core$async$state_machine__33644__auto__ = function(state_41129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33644__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33644__auto____1.call(this,state_41129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33644__auto____0;
cljs$core$async$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33644__auto____1;
return cljs$core$async$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___41172,out))
})();
var state__33666__auto__ = (function (){var statearr_41162 = f__33665__auto__.call(null);
(statearr_41162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___41172);

return statearr_41162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___41172,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map