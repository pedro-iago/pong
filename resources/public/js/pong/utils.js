// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.utils');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('clojure.string');
goog.require('clojure.data.avl');
goog.require('pong.paths');
/**
 * adds :id and :react-key with entities global and local keys, respectively
 */
pong.utils.keyed_dom = (function pong$utils$keyed_dom(dom){
return com.rpl.specter.transform.call(null,pong.paths.KEY_VAL,(function (p1__40277_SHARP_,p2__40276_SHARP_){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,p2__40276_SHARP_,new cljs.core.Keyword(null,"react-key","react-key",1337881348),cljs.core.name.call(null,p1__40277_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.subs.call(null,[cljs.core.str(p1__40277_SHARP_)].join(''),(1)));
}),dom);
});
/**
 * moves values of namespaced keywords to parent's :children
 */
pong.utils.fold_children = (function pong$utils$fold_children(dom){
var vec__40282 = clojure.data.avl.split_key.call(null,new cljs.core.Keyword(null,"|","|",-352411576),dom);
var top = cljs.core.nth.call(null,vec__40282,(0),null);
var _ = cljs.core.nth.call(null,vec__40282,(1),null);
var children = cljs.core.nth.call(null,vec__40282,(2),null);
return cljs.core.reduce_kv.call(null,((function (vec__40282,top,_,children){
return (function (p1__40278_SHARP_,p2__40279_SHARP_,p3__40280_SHARP_){
return cljs.core.assoc_in.call(null,p1__40278_SHARP_,cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.interleave.call(null,(function (){var pops = clojure.string.split.call(null,cljs.core.namespace.call(null,p2__40279_SHARP_),/\./);
return cljs.core.map.call(null,cljs.core.keyword,pops);
})(),cljs.core.repeat.call(null,new cljs.core.Keyword(null,"children","children",-940561982)))),cljs.core.keyword.call(null,cljs.core.name.call(null,p2__40279_SHARP_))),p3__40280_SHARP_);
});})(vec__40282,top,_,children))
,top,children);
});
/**
 * switches keypath order of a two-layer map
 */
pong.utils.switch_path = (function pong$utils$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__40283_SHARP_,p2__40284_SHARP_,p3__40285_SHARP_){
return cljs.core.assoc.call(null,p1__40283_SHARP_,p2__40284_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__40285_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__40286_SHARP_,p2__40287_SHARP_){
return cljs.core.update.call(null,p1__40286_SHARP_,cljs.core.second.call(null,p2__40287_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__40287_SHARP_),cljs.core.first.call(null,p2__40287_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.paths.KEY1_KEY2_VAL], null),dom)));
});
/**
 * computes function with parameters in state
 */
pong.utils.compute = (function pong$utils$compute(f,params,st){
return cljs.core.apply.call(null,f,com.rpl.specter.transform.call(null,pong.paths.PARAMS_PATHS,(function (p1__40288_SHARP_){
return com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,p1__40288_SHARP_),st);
}),params));
});

//# sourceMappingURL=utils.js.map