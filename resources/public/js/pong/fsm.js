// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.fsm');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('clojure.core.matrix');
goog.require('clojure.core.matrix.operators');
goog.require('clojure.data.avl');
goog.require('pong.paths');
/**
 * builts a finite-state-machine from function and its parameters
 */
pong.fsm.fsm = (function pong$fsm$fsm(var_args){
var args31659 = [];
var len__19784__auto___31662 = arguments.length;
var i__19785__auto___31663 = (0);
while(true){
if((i__19785__auto___31663 < len__19784__auto___31662)){
args31659.push((arguments[i__19785__auto___31663]));

var G__31664 = (i__19785__auto___31663 + (1));
i__19785__auto___31663 = G__31664;
continue;
} else {
}
break;
}

var G__31661 = args31659.length;
switch (G__31661) {
case 1:
return pong.fsm.fsm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.fsm.fsm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31659.length)].join('')));

}
});

pong.fsm.fsm.cljs$core$IFn$_invoke$arity$1 = (function (pth){
return pong.fsm.fsm.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pth], null));
});

pong.fsm.fsm.cljs$core$IFn$_invoke$arity$2 = (function (md,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),cljs.core.memoize.call(null,md),new cljs.core.Keyword(null,"params","params",710516235),com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,pong.paths.path_QMARK_], null),com.rpl.specter.comp_paths,params)], null);
});

pong.fsm.fsm.cljs$lang$maxFixedArity = 2;
/**
 * fsm: set to value on tick
 */
pong.fsm.jump = cljs.core.comp.call(null,(function (p1__31666_SHARP_){
return cljs.core.assoc.call(null,p1__31666_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),(function (v,nv,dt){
return nv;
}));
}),pong.fsm.fsm);
/**
 * fsm: set rate of change on tick (euler)
 */
pong.fsm.flow = cljs.core.comp.call(null,(function (p1__31667_SHARP_){
return cljs.core.assoc.call(null,p1__31667_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),(function (v,nv,dt){
return clojure.core.matrix.operators._PLUS_.call(null,clojure.core.matrix.operators._STAR_.call(null,nv,dt),v);
}));
}),pong.fsm.fsm);
pong.fsm.reach = (function pong$fsm$reach(p,q,k){
return clojure.core.matrix.operators._STAR_.call(null,k,clojure.core.matrix.operators._.call(null,q,p));
});
pong.fsm.avoid = (function pong$fsm$avoid(p,q,k){
var err = clojure.core.matrix.operators._.call(null,p,q);
return clojure.core.matrix.operators._STAR_.call(null,k,clojure.core.matrix.operators._SLASH_.call(null,err,clojure.core.matrix.magnitude_squared.call(null,err)));
});
pong.fsm.mean = (function pong$fsm$mean(mtx){
return clojure.core.matrix.operators._SLASH_.call(null,cljs.core.reduce.call(null,clojure.core.matrix.operators._PLUS_,mtx),cljs.core.count.call(null,mtx));
});
pong.fsm.follow = (function pong$fsm$follow(p,q,k1,k2){
return pong.fsm.mean.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[pong.fsm.reach.call(null,p,q,k1),pong.fsm.avoid.call(null,p,q,k2)],null)));
});

//# sourceMappingURL=fsm.js.map