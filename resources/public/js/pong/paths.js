// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.paths');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('com.rpl.specter.impl');
goog.require('clojure.data.avl');
/**
 * navigates to a view of keywords namespaced by string
 */
pong.paths.subgroup = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var ns_key = (params21733[(params_idx21734 + (0))]);
var subgroup = clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,"a"),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,"|"));
return next_fn.call(null,com.rpl.specter.transform.call(null,pong.paths.KEYS,((function (subgroup,next_fn,ns_key){
return (function (p1__29385_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__29385_SHARP_));
});})(subgroup,next_fn,ns_key))
,subgroup));
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var ns_key = (params21733[(params_idx21734 + (0))]);
var subgroup = clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,"a"),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,"|"));
var newkeyed = com.rpl.specter.transform.call(null,pong.paths.KEYS,((function (subgroup,next_fn,ns_key){
return (function (p1__29386_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__29386_SHARP_));
});})(subgroup,next_fn,ns_key))
,subgroup);
var newgroup = next_fn.call(null,newkeyed);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,cljs.core.keys.call(null,subgroup)),com.rpl.specter.transform.call(null,pong.paths.KEYS,((function (subgroup,newkeyed,newgroup,next_fn,ns_key){
return (function (p1__29387_SHARP_){
return cljs.core.keyword.call(null,ns_key,cljs.core.name.call(null,p1__29387_SHARP_));
});})(subgroup,newkeyed,newgroup,next_fn,ns_key))
,newgroup));
})),1);
/**
 * true if compiled path or coll with some structure of a path
 */
pong.paths.path_QMARK_ = (function pong$paths$path_QMARK_(p){
var or__18726__auto__ = com.rpl.specter.impl.compiled_path_QMARK_.call(null,p);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
var and__18714__auto__ = cljs.core.coll_QMARK_.call(null,p);
if(and__18714__auto__){
return cljs.core.some.call(null,com.rpl.specter.impl.structure_path_QMARK_,p);
} else {
return and__18714__auto__;
}
}
});
pong.paths.KEYS = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null));
pong.paths.KEY_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.paths.KEY1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.paths.KEY_VAL,pong.paths.KEY_VAL], null));
pong.paths.PARAMS_PATHS = com.rpl.specter.comp_paths.call(null,com.rpl.specter.filterer.call(null,pong.paths.path_QMARK_));
pong.paths.FSM_COMPONENTS = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.paths.subgroup.call(null,"fsm"),pong.paths.KEY1_KEY2_VAL], null));

//# sourceMappingURL=paths.js.map