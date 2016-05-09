// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.utils');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('clojure.data.avl');
goog.require('pong.paths');
/**
 * moves values of namespaced keywords to [namespace :children]
 */
pong.utils.fold_children = (function pong$utils$fold_children(dom){
var vec__37215 = clojure.data.avl.split_key.call(null,new cljs.core.Keyword(null,"|","|",-352411576),dom);
var top = cljs.core.nth.call(null,vec__37215,(0),null);
var _ = cljs.core.nth.call(null,vec__37215,(1),null);
var children = cljs.core.nth.call(null,vec__37215,(2),null);
return cljs.core.reduce_kv.call(null,((function (vec__37215,top,_,children){
return (function (p1__37211_SHARP_,p2__37212_SHARP_,p3__37213_SHARP_){
return cljs.core.assoc_in.call(null,p1__37211_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__37212_SHARP_)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.keyword.call(null,cljs.core.name.call(null,p2__37212_SHARP_))], null),p3__37213_SHARP_);
});})(vec__37215,top,_,children))
,top,children);
});
/**
 * switches keypath order of a two-layer map
 */
pong.utils.switch_path = (function pong$utils$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__37216_SHARP_,p2__37217_SHARP_,p3__37218_SHARP_){
return cljs.core.assoc.call(null,p1__37216_SHARP_,p2__37217_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__37218_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__37219_SHARP_,p2__37220_SHARP_){
return cljs.core.update.call(null,p1__37219_SHARP_,cljs.core.second.call(null,p2__37220_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__37220_SHARP_),cljs.core.first.call(null,p2__37220_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.paths.KEY1_KEY2_VAL], null),dom)));
});
/**
 * computes function with parameters in state
 */
pong.utils.compute = (function pong$utils$compute(f,params,st){
return cljs.core.apply.call(null,f,com.rpl.specter.transform.call(null,pong.paths.PARAMS_PATHS,(function (p1__37221_SHARP_){
return com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,p1__37221_SHARP_),st);
}),params));
});

//# sourceMappingURL=utils.js.map