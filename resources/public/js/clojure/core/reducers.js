// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.reducers');
goog.require('cljs.core');
goog.require('cljs.core');
clojure.core.reducers.fjtask = (function clojure$core$reducers$fjtask(f){
return f;
});
clojure.core.reducers.fjinvoke = (function clojure$core$reducers$fjinvoke(f){
return f.call(null);
});
clojure.core.reducers.fjfork = (function clojure$core$reducers$fjfork(task){
return task;
});
clojure.core.reducers.fjjoin = (function clojure$core$reducers$fjjoin(task){
return task.call(null);
});
/**
 * Like core/reduce except:
 *   When init is not provided, (f) is used.
 *   Maps are reduced with reduce-kv
 */
clojure.core.reducers.reduce = (function clojure$core$reducers$reduce(var_args){
var args19325 = [];
var len__19160__auto___19328 = arguments.length;
var i__19161__auto___19329 = (0);
while(true){
if((i__19161__auto___19329 < len__19160__auto___19328)){
args19325.push((arguments[i__19161__auto___19329]));

var G__19330 = (i__19161__auto___19329 + (1));
i__19161__auto___19329 = G__19330;
continue;
} else {
}
break;
}

var G__19327 = args19325.length;
switch (G__19327) {
case 2:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19325.length)].join('')));

}
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.reduce.call(null,f,f.call(null),coll);
});

clojure.core.reducers.reduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,coll){
if(cljs.core.map_QMARK_.call(null,coll)){
return cljs.core._kv_reduce.call(null,coll,f,init);
} else {
if((coll == null)){
return init;
} else {
if(cljs.core.array_QMARK_.call(null,coll)){
return cljs.core.array_reduce.call(null,coll,f,init);
} else {
return cljs.core._reduce.call(null,coll,f,init);

}
}
}
});

clojure.core.reducers.reduce.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
clojure.core.reducers.CollFold = function(){};

clojure.core.reducers.coll_fold = (function clojure$core$reducers$coll_fold(coll,n,combinef,reducef){
if((!((coll == null))) && (!((coll.clojure$core$reducers$CollFold$coll_fold$arity$4 == null)))){
return coll.clojure$core$reducers$CollFold$coll_fold$arity$4(coll,n,combinef,reducef);
} else {
var x__18757__auto__ = (((coll == null))?null:coll);
var m__18758__auto__ = (clojure.core.reducers.coll_fold[goog.typeOf(x__18757__auto__)]);
if(!((m__18758__auto__ == null))){
return m__18758__auto__.call(null,coll,n,combinef,reducef);
} else {
var m__18758__auto____$1 = (clojure.core.reducers.coll_fold["_"]);
if(!((m__18758__auto____$1 == null))){
return m__18758__auto____$1.call(null,coll,n,combinef,reducef);
} else {
throw cljs.core.missing_protocol.call(null,"CollFold.coll-fold",coll);
}
}
}
});

/**
 * Reduces a collection using a (potentially parallel) reduce-combine
 *   strategy. The collection is partitioned into groups of approximately
 *   n (default 512), each of which is reduced with reducef (with a seed
 *   value obtained by calling (combinef) with no arguments). The results
 *   of these reductions are then reduced with combinef (default
 *   reducef). combinef must be associative, and, when called with no
 *   arguments, (combinef) must produce its identity element. These
 *   operations may be performed in parallel, but the results will
 *   preserve order.
 * 
 *   Note: Performing operations in parallel is currently not implemented.
 */
clojure.core.reducers.fold = (function clojure$core$reducers$fold(var_args){
var args19332 = [];
var len__19160__auto___19335 = arguments.length;
var i__19161__auto___19336 = (0);
while(true){
if((i__19161__auto___19336 < len__19160__auto___19335)){
args19332.push((arguments[i__19161__auto___19336]));

var G__19337 = (i__19161__auto___19336 + (1));
i__19161__auto___19336 = G__19337;
continue;
} else {
}
break;
}

var G__19334 = args19332.length;
switch (G__19334) {
case 2:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19332.length)].join('')));

}
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$2 = (function (reducef,coll){
return clojure.core.reducers.fold.call(null,reducef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$3 = (function (combinef,reducef,coll){
return clojure.core.reducers.fold.call(null,(512),combinef,reducef,coll);
});

clojure.core.reducers.fold.cljs$core$IFn$_invoke$arity$4 = (function (n,combinef,reducef,coll){
return clojure.core.reducers.coll_fold.call(null,coll,n,combinef,reducef);
});

clojure.core.reducers.fold.cljs$lang$maxFixedArity = 4;
/**
 * Given a reducible collection, and a transformation function xf,
 *   returns a reducible collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.reducer = (function clojure$core$reducers$reducer(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers19342 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers19342 = (function (reducer,coll,xf,meta19343){
this.reducer = reducer;
this.coll = coll;
this.xf = xf;
this.meta19343 = meta19343;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers19342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19344,meta19343__$1){
var self__ = this;
var _19344__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers19342(self__.reducer,self__.coll,self__.xf,meta19343__$1));
});

clojure.core.reducers.t_clojure$core$reducers19342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19344){
var self__ = this;
var _19344__$1 = this;
return self__.meta19343;
});

clojure.core.reducers.t_clojure$core$reducers19342.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers19342.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers19342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"reducer","reducer",-948842876,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a reducible collection, and a transformation function xf,\n  returns a reducible collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta19343","meta19343",-653264415,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers19342.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers19342.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers19342";

clojure.core.reducers.t_clojure$core$reducers19342.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"clojure.core.reducers/t_clojure$core$reducers19342");
});

clojure.core.reducers.__GT_t_clojure$core$reducers19342 = (function clojure$core$reducers$reducer_$___GT_t_clojure$core$reducers19342(reducer__$1,coll__$1,xf__$1,meta19343){
return (new clojure.core.reducers.t_clojure$core$reducers19342(reducer__$1,coll__$1,xf__$1,meta19343));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers19342(clojure$core$reducers$reducer,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Given a foldable collection, and a transformation function xf,
 *   returns a foldable collection, where any supplied reducing
 *   fn will be transformed by xf. xf is a function of reducing fn to
 *   reducing fn.
 */
clojure.core.reducers.folder = (function clojure$core$reducers$folder(coll,xf){
if(typeof clojure.core.reducers.t_clojure$core$reducers19348 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.t_clojure$core$reducers19348 = (function (folder,coll,xf,meta19349){
this.folder = folder;
this.coll = coll;
this.xf = xf;
this.meta19349 = meta19349;
this.cljs$lang$protocol_mask$partition0$ = 917504;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.t_clojure$core$reducers19348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19350,meta19349__$1){
var self__ = this;
var _19350__$1 = this;
return (new clojure.core.reducers.t_clojure$core$reducers19348(self__.folder,self__.coll,self__.xf,meta19349__$1));
});

clojure.core.reducers.t_clojure$core$reducers19348.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19350){
var self__ = this;
var _19350__$1 = this;
return self__.meta19349;
});

clojure.core.reducers.t_clojure$core$reducers19348.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (_,f1){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),f1.call(null));
});

clojure.core.reducers.t_clojure$core$reducers19348.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.coll,self__.xf.call(null,f1),init);
});

clojure.core.reducers.t_clojure$core$reducers19348.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.t_clojure$core$reducers19348.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (_,n,combinef,reducef){
var self__ = this;
var ___$1 = this;
return clojure.core.reducers.coll_fold.call(null,self__.coll,n,combinef,self__.xf.call(null,reducef));
});

clojure.core.reducers.t_clojure$core$reducers19348.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"folder","folder",-1138554033,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a foldable collection, and a transformation function xf,\n  returns a foldable collection, where any supplied reducing\n  fn will be transformed by xf. xf is a function of reducing fn to\n  reducing fn."], null)),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"xf","xf",2042434515,null),new cljs.core.Symbol(null,"meta19349","meta19349",296336863,null)], null);
});

clojure.core.reducers.t_clojure$core$reducers19348.cljs$lang$type = true;

clojure.core.reducers.t_clojure$core$reducers19348.cljs$lang$ctorStr = "clojure.core.reducers/t_clojure$core$reducers19348";

clojure.core.reducers.t_clojure$core$reducers19348.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"clojure.core.reducers/t_clojure$core$reducers19348");
});

clojure.core.reducers.__GT_t_clojure$core$reducers19348 = (function clojure$core$reducers$folder_$___GT_t_clojure$core$reducers19348(folder__$1,coll__$1,xf__$1,meta19349){
return (new clojure.core.reducers.t_clojure$core$reducers19348(folder__$1,coll__$1,xf__$1,meta19349));
});

}

return (new clojure.core.reducers.t_clojure$core$reducers19348(clojure$core$reducers$folder,coll,xf,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Applies f to every value in the reduction of coll. Foldable.
 */
clojure.core.reducers.map = (function clojure$core$reducers$map(var_args){
var args19351 = [];
var len__19160__auto___19354 = arguments.length;
var i__19161__auto___19355 = (0);
while(true){
if((i__19161__auto___19355 < len__19160__auto___19354)){
args19351.push((arguments[i__19161__auto___19355]));

var G__19356 = (i__19161__auto___19355 + (1));
i__19161__auto___19355 = G__19356;
continue;
} else {
}
break;
}

var G__19353 = args19351.length;
switch (G__19353) {
case 1:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19351.length)].join('')));

}
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__18543__auto__){
return clojure.core.reducers.map.call(null,f,x__18543__auto__);
});
});

clojure.core.reducers.map.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__19358 = null;
var G__19358__0 = (function (){
return f1.call(null);
});
var G__19358__2 = (function (ret,v){
return f1.call(null,ret,f.call(null,v));
});
var G__19358__3 = (function (ret,k,v){
return f1.call(null,ret,f.call(null,k,v));
});
G__19358 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__19358__0.call(this);
case 2:
return G__19358__2.call(this,ret,k);
case 3:
return G__19358__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19358.cljs$core$IFn$_invoke$arity$0 = G__19358__0;
G__19358.cljs$core$IFn$_invoke$arity$2 = G__19358__2;
G__19358.cljs$core$IFn$_invoke$arity$3 = G__19358__3;
return G__19358;
})()
}));
});

clojure.core.reducers.map.cljs$lang$maxFixedArity = 2;
/**
 * Applies f to every value in the reduction of coll, concatenating the result
 *   colls of (f val). Foldable.
 */
clojure.core.reducers.mapcat = (function clojure$core$reducers$mapcat(var_args){
var args19359 = [];
var len__19160__auto___19362 = arguments.length;
var i__19161__auto___19363 = (0);
while(true){
if((i__19161__auto___19363 < len__19160__auto___19362)){
args19359.push((arguments[i__19161__auto___19363]));

var G__19364 = (i__19161__auto___19363 + (1));
i__19161__auto___19363 = G__19364;
continue;
} else {
}
break;
}

var G__19361 = args19359.length;
switch (G__19361) {
case 1:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19359.length)].join('')));

}
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (x__18543__auto__){
return clojure.core.reducers.mapcat.call(null,f,x__18543__auto__);
});
});

clojure.core.reducers.mapcat.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__19366 = null;
var G__19366__0 = (function (){
return f1.call(null);
});
var G__19366__2 = (function (ret,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,v));
});
var G__19366__3 = (function (ret,k,v){
return clojure.core.reducers.reduce.call(null,f1,ret,f.call(null,k,v));
});
G__19366 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__19366__0.call(this);
case 2:
return G__19366__2.call(this,ret,k);
case 3:
return G__19366__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19366.cljs$core$IFn$_invoke$arity$0 = G__19366__0;
G__19366.cljs$core$IFn$_invoke$arity$2 = G__19366__2;
G__19366.cljs$core$IFn$_invoke$arity$3 = G__19366__3;
return G__19366;
})()
}));
});

clojure.core.reducers.mapcat.cljs$lang$maxFixedArity = 2;
/**
 * Retains values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.filter = (function clojure$core$reducers$filter(var_args){
var args19367 = [];
var len__19160__auto___19370 = arguments.length;
var i__19161__auto___19371 = (0);
while(true){
if((i__19161__auto___19371 < len__19160__auto___19370)){
args19367.push((arguments[i__19161__auto___19371]));

var G__19372 = (i__19161__auto___19371 + (1));
i__19161__auto___19371 = G__19372;
continue;
} else {
}
break;
}

var G__19369 = args19367.length;
switch (G__19369) {
case 1:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19367.length)].join('')));

}
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__18543__auto__){
return clojure.core.reducers.filter.call(null,pred,x__18543__auto__);
});
});

clojure.core.reducers.filter.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__19374 = null;
var G__19374__0 = (function (){
return f1.call(null);
});
var G__19374__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__19374__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__19374 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__19374__0.call(this);
case 2:
return G__19374__2.call(this,ret,k);
case 3:
return G__19374__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19374.cljs$core$IFn$_invoke$arity$0 = G__19374__0;
G__19374.cljs$core$IFn$_invoke$arity$2 = G__19374__2;
G__19374.cljs$core$IFn$_invoke$arity$3 = G__19374__3;
return G__19374;
})()
}));
});

clojure.core.reducers.filter.cljs$lang$maxFixedArity = 2;
/**
 * Takes any nested combination of sequential things (lists, vectors,
 *   etc.) and returns their contents as a single, flat foldable
 *   collection.
 */
clojure.core.reducers.flatten = (function clojure$core$reducers$flatten(var_args){
var args19375 = [];
var len__19160__auto___19378 = arguments.length;
var i__19161__auto___19379 = (0);
while(true){
if((i__19161__auto___19379 < len__19160__auto___19378)){
args19375.push((arguments[i__19161__auto___19379]));

var G__19380 = (i__19161__auto___19379 + (1));
i__19161__auto___19379 = G__19380;
continue;
} else {
}
break;
}

var G__19377 = args19375.length;
switch (G__19377) {
case 0:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19375.length)].join('')));

}
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (x__18543__auto__){
return clojure.core.reducers.flatten.call(null,x__18543__auto__);
});
});

clojure.core.reducers.flatten.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return clojure.core.reducers.folder.call(null,coll,(function (f1){
return (function() {
var G__19382 = null;
var G__19382__0 = (function (){
return f1.call(null);
});
var G__19382__2 = (function (ret,v){
if(cljs.core.sequential_QMARK_.call(null,v)){
return cljs.core._reduce.call(null,clojure.core.reducers.flatten.call(null,v),f1,ret);
} else {
return f1.call(null,ret,v);
}
});
G__19382 = function(ret,v){
switch(arguments.length){
case 0:
return G__19382__0.call(this);
case 2:
return G__19382__2.call(this,ret,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19382.cljs$core$IFn$_invoke$arity$0 = G__19382__0;
G__19382.cljs$core$IFn$_invoke$arity$2 = G__19382__2;
return G__19382;
})()
}));
});

clojure.core.reducers.flatten.cljs$lang$maxFixedArity = 1;
/**
 * Removes values in the reduction of coll for which (pred val)
 *   returns logical true. Foldable.
 */
clojure.core.reducers.remove = (function clojure$core$reducers$remove(var_args){
var args19383 = [];
var len__19160__auto___19386 = arguments.length;
var i__19161__auto___19387 = (0);
while(true){
if((i__19161__auto___19387 < len__19160__auto___19386)){
args19383.push((arguments[i__19161__auto___19387]));

var G__19388 = (i__19161__auto___19387 + (1));
i__19161__auto___19387 = G__19388;
continue;
} else {
}
break;
}

var G__19385 = args19383.length;
switch (G__19385) {
case 1:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19383.length)].join('')));

}
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__18543__auto__){
return clojure.core.reducers.remove.call(null,pred,x__18543__auto__);
});
});

clojure.core.reducers.remove.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.filter.call(null,cljs.core.complement.call(null,pred),coll);
});

clojure.core.reducers.remove.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll when (pred val) returns logical false.
 */
clojure.core.reducers.take_while = (function clojure$core$reducers$take_while(var_args){
var args19390 = [];
var len__19160__auto___19393 = arguments.length;
var i__19161__auto___19394 = (0);
while(true){
if((i__19161__auto___19394 < len__19160__auto___19393)){
args19390.push((arguments[i__19161__auto___19394]));

var G__19395 = (i__19161__auto___19394 + (1));
i__19161__auto___19394 = G__19395;
continue;
} else {
}
break;
}

var G__19392 = args19390.length;
switch (G__19392) {
case 1:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19390.length)].join('')));

}
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (x__18543__auto__){
return clojure.core.reducers.take_while.call(null,pred,x__18543__auto__);
});
});

clojure.core.reducers.take_while.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
return (function() {
var G__19397 = null;
var G__19397__0 = (function (){
return f1.call(null);
});
var G__19397__2 = (function (ret,v){
if(cljs.core.truth_(pred.call(null,v))){
return f1.call(null,ret,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
var G__19397__3 = (function (ret,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return f1.call(null,ret,k,v);
} else {
return cljs.core.reduced.call(null,ret);
}
});
G__19397 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__19397__0.call(this);
case 2:
return G__19397__2.call(this,ret,k);
case 3:
return G__19397__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19397.cljs$core$IFn$_invoke$arity$0 = G__19397__0;
G__19397.cljs$core$IFn$_invoke$arity$2 = G__19397__2;
G__19397.cljs$core$IFn$_invoke$arity$3 = G__19397__3;
return G__19397;
})()
}));
});

clojure.core.reducers.take_while.cljs$lang$maxFixedArity = 2;
/**
 * Ends the reduction of coll after consuming n values.
 */
clojure.core.reducers.take = (function clojure$core$reducers$take(var_args){
var args19398 = [];
var len__19160__auto___19401 = arguments.length;
var i__19161__auto___19402 = (0);
while(true){
if((i__19161__auto___19402 < len__19160__auto___19401)){
args19398.push((arguments[i__19161__auto___19402]));

var G__19403 = (i__19161__auto___19402 + (1));
i__19161__auto___19402 = G__19403;
continue;
} else {
}
break;
}

var G__19400 = args19398.length;
switch (G__19400) {
case 1:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19398.length)].join('')));

}
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__18543__auto__){
return clojure.core.reducers.take.call(null,n,x__18543__auto__);
});
});

clojure.core.reducers.take.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__19405 = null;
var G__19405__0 = (function (){
return f1.call(null);
});
var G__19405__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,v);
}
});
var G__19405__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return cljs.core.reduced.call(null,ret);
} else {
return f1.call(null,ret,k,v);
}
});
G__19405 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__19405__0.call(this);
case 2:
return G__19405__2.call(this,ret,k);
case 3:
return G__19405__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19405.cljs$core$IFn$_invoke$arity$0 = G__19405__0;
G__19405.cljs$core$IFn$_invoke$arity$2 = G__19405__2;
G__19405.cljs$core$IFn$_invoke$arity$3 = G__19405__3;
return G__19405;
})()
;})(cnt))
}));
});

clojure.core.reducers.take.cljs$lang$maxFixedArity = 2;
/**
 * Elides the first n values from the reduction of coll.
 */
clojure.core.reducers.drop = (function clojure$core$reducers$drop(var_args){
var args19406 = [];
var len__19160__auto___19409 = arguments.length;
var i__19161__auto___19410 = (0);
while(true){
if((i__19161__auto___19410 < len__19160__auto___19409)){
args19406.push((arguments[i__19161__auto___19410]));

var G__19411 = (i__19161__auto___19410 + (1));
i__19161__auto___19410 = G__19411;
continue;
} else {
}
break;
}

var G__19408 = args19406.length;
switch (G__19408) {
case 1:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19406.length)].join('')));

}
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$1 = (function (n){
return (function (x__18543__auto__){
return clojure.core.reducers.drop.call(null,n,x__18543__auto__);
});
});

clojure.core.reducers.drop.cljs$core$IFn$_invoke$arity$2 = (function (n,coll){
return clojure.core.reducers.reducer.call(null,coll,(function (f1){
var cnt = cljs.core.atom.call(null,n);
return ((function (cnt){
return (function() {
var G__19413 = null;
var G__19413__0 = (function (){
return f1.call(null);
});
var G__19413__2 = (function (ret,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,v);
} else {
return ret;
}
});
var G__19413__3 = (function (ret,k,v){
cljs.core.swap_BANG_.call(null,cnt,cljs.core.dec);

if((cljs.core.deref.call(null,cnt) < (0))){
return f1.call(null,ret,k,v);
} else {
return ret;
}
});
G__19413 = function(ret,k,v){
switch(arguments.length){
case 0:
return G__19413__0.call(this);
case 2:
return G__19413__2.call(this,ret,k);
case 3:
return G__19413__3.call(this,ret,k,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19413.cljs$core$IFn$_invoke$arity$0 = G__19413__0;
G__19413.cljs$core$IFn$_invoke$arity$2 = G__19413__2;
G__19413.cljs$core$IFn$_invoke$arity$3 = G__19413__3;
return G__19413;
})()
;})(cnt))
}));
});

clojure.core.reducers.drop.cljs$lang$maxFixedArity = 2;

/**
* @constructor
 * @implements {clojure.core.reducers.CollFold}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IReduce}
*/
clojure.core.reducers.Cat = (function (cnt,left,right){
this.cnt = cnt;
this.left = left;
this.right = right;
this.cljs$lang$protocol_mask$partition0$ = 8912898;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.reducers.Cat.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.cnt;
});

clojure.core.reducers.Cat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.concat.call(null,cljs.core.seq.call(null,self__.left),cljs.core.seq.call(null,self__.right));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$2 = (function (this$,f1){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,f1,f1.call(null));
});

clojure.core.reducers.Cat.prototype.cljs$core$IReduce$_reduce$arity$3 = (function (_,f1,init){
var self__ = this;
var ___$1 = this;
return cljs.core._reduce.call(null,self__.right,f1,cljs.core._reduce.call(null,self__.left,f1,init));
});

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$ = true;

clojure.core.reducers.Cat.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (this$,n,combinef,reducef){
var self__ = this;
var this$__$1 = this;
return cljs.core._reduce.call(null,this$__$1,reducef);
});

clojure.core.reducers.Cat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cnt","cnt",1924510325,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

clojure.core.reducers.Cat.cljs$lang$type = true;

clojure.core.reducers.Cat.cljs$lang$ctorStr = "clojure.core.reducers/Cat";

clojure.core.reducers.Cat.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"clojure.core.reducers/Cat");
});

clojure.core.reducers.__GT_Cat = (function clojure$core$reducers$__GT_Cat(cnt,left,right){
return (new clojure.core.reducers.Cat(cnt,left,right));
});

/**
 * A high-performance combining fn that yields the catenation of the
 *   reduced values. The result is reducible, foldable, seqable and
 *   counted, providing the identity collections are reducible, seqable
 *   and counted. The single argument version will build a combining fn
 *   with the supplied identity constructor. Tests for identity
 *   with (zero? (count x)). See also foldcat.
 */
clojure.core.reducers.cat = (function clojure$core$reducers$cat(var_args){
var args19414 = [];
var len__19160__auto___19417 = arguments.length;
var i__19161__auto___19418 = (0);
while(true){
if((i__19161__auto___19418 < len__19160__auto___19417)){
args19414.push((arguments[i__19161__auto___19418]));

var G__19419 = (i__19161__auto___19418 + (1));
i__19161__auto___19418 = G__19419;
continue;
} else {
}
break;
}

var G__19416 = args19414.length;
switch (G__19416) {
case 0:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19414.length)].join('')));

}
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$0 = (function (){
return [];
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$1 = (function (ctor){
return (function() {
var G__19421 = null;
var G__19421__0 = (function (){
return ctor.call(null);
});
var G__19421__2 = (function (left,right){
return clojure.core.reducers.cat.call(null,left,right);
});
G__19421 = function(left,right){
switch(arguments.length){
case 0:
return G__19421__0.call(this);
case 2:
return G__19421__2.call(this,left,right);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19421.cljs$core$IFn$_invoke$arity$0 = G__19421__0;
G__19421.cljs$core$IFn$_invoke$arity$2 = G__19421__2;
return G__19421;
})()
});

clojure.core.reducers.cat.cljs$core$IFn$_invoke$arity$2 = (function (left,right){
if((cljs.core.count.call(null,left) === (0))){
return right;
} else {
if((cljs.core.count.call(null,right) === (0))){
return left;
} else {
return (new clojure.core.reducers.Cat((cljs.core.count.call(null,left) + cljs.core.count.call(null,right)),left,right));

}
}
});

clojure.core.reducers.cat.cljs$lang$maxFixedArity = 2;
/**
 * .adds x to acc and returns acc
 */
clojure.core.reducers.append_BANG_ = (function clojure$core$reducers$append_BANG_(acc,x){
var G__19423 = acc;
G__19423.push(x);

return G__19423;
});
/**
 * Equivalent to (fold cat append! coll)
 */
clojure.core.reducers.foldcat = (function clojure$core$reducers$foldcat(coll){
return clojure.core.reducers.fold.call(null,clojure.core.reducers.cat,clojure.core.reducers.append_BANG_,coll);
});
/**
 * Builds a combining fn out of the supplied operator and identity
 *   constructor. op must be associative and ctor called with no args
 *   must return an identity value for it.
 */
clojure.core.reducers.monoid = (function clojure$core$reducers$monoid(op,ctor){
return (function() {
var clojure$core$reducers$monoid_$_m = null;
var clojure$core$reducers$monoid_$_m__0 = (function (){
return ctor.call(null);
});
var clojure$core$reducers$monoid_$_m__2 = (function (a,b){
return op.call(null,a,b);
});
clojure$core$reducers$monoid_$_m = function(a,b){
switch(arguments.length){
case 0:
return clojure$core$reducers$monoid_$_m__0.call(this);
case 2:
return clojure$core$reducers$monoid_$_m__2.call(this,a,b);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$0 = clojure$core$reducers$monoid_$_m__0;
clojure$core$reducers$monoid_$_m.cljs$core$IFn$_invoke$arity$2 = clojure$core$reducers$monoid_$_m__2;
return clojure$core$reducers$monoid_$_m;
})()
});
clojure.core.reducers.foldvec = (function clojure$core$reducers$foldvec(v,n,combinef,reducef){
if(cljs.core.empty_QMARK_.call(null,v)){
return combinef.call(null);
} else {
if((cljs.core.count.call(null,v) <= n)){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),v);
} else {
var split = cljs.core.quot.call(null,cljs.core.count.call(null,v),(2));
var v1 = cljs.core.subvec.call(null,v,(0),split);
var v2 = cljs.core.subvec.call(null,v,split,cljs.core.count.call(null,v));
var fc = ((function (split,v1,v2){
return (function (child){
return ((function (split,v1,v2){
return (function (){
return clojure$core$reducers$foldvec.call(null,child,n,combinef,reducef);
});
;})(split,v1,v2))
});})(split,v1,v2))
;
return clojure.core.reducers.fjinvoke.call(null,((function (split,v1,v2,fc){
return (function (){
var f1 = fc.call(null,v1);
var t2 = clojure.core.reducers.fjtask.call(null,fc.call(null,v2));
clojure.core.reducers.fjfork.call(null,t2);

return combinef.call(null,f1.call(null),clojure.core.reducers.fjjoin.call(null,t2));
});})(split,v1,v2,fc))
);

}
}
});
(clojure.core.reducers.CollFold["null"] = true);

(clojure.core.reducers.coll_fold["null"] = (function (coll,n,combinef,reducef){
return combinef.call(null);
}));

(clojure.core.reducers.CollFold["object"] = true);

(clojure.core.reducers.coll_fold["object"] = (function (coll,n,combinef,reducef){
return clojure.core.reducers.reduce.call(null,reducef,combinef.call(null),coll);
}));

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$ = true;

cljs.core.PersistentVector.prototype.clojure$core$reducers$CollFold$coll_fold$arity$4 = (function (v,n,combinef,reducef){
var v__$1 = this;
return clojure.core.reducers.foldvec.call(null,v__$1,n,combinef,reducef);
});

//# sourceMappingURL=reducers.js.map