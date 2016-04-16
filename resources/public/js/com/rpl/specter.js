// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21760 = arguments.length;
var i__19161__auto___21761 = (0);
while(true){
if((i__19161__auto___21761 < len__19160__auto___21760)){
args__19167__auto__.push((arguments[i__19161__auto___21761]));

var G__21762 = (i__19161__auto___21761 + (1));
i__19161__auto___21761 = G__21762;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq21759){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21759));
});
/**
 * Version of select that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the selector.
 */
com.rpl.specter.select = (function com$rpl$specter$select(selector,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one = (function com$rpl$specter$compiled_select_one(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if((cljs.core.count.call(null,res) > (1))){
com.rpl.specter.impl.throw_illegal.call(null,"More than one element found for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one = (function com$rpl$specter$select_one(selector,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-one! that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = (function com$rpl$specter$compiled_select_one_BANG_(selector,structure){
var res = com.rpl.specter.compiled_select.call(null,selector,structure);
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,res))){
com.rpl.specter.impl.throw_illegal.call(null,"Expected exactly one element for params: ",selector,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG_ = (function com$rpl$specter$select_one_BANG_(selector,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of select-first that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_first = (function com$rpl$specter$compiled_select_first(selector,structure){
return cljs.core.first.call(null,com.rpl.specter.compiled_select.call(null,selector,structure));
});
/**
 * Returns first element found. Not any more efficient than select, just a convenience
 */
com.rpl.specter.select_first = (function com$rpl$specter$select_first(selector,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),structure);
});
/**
 * Version of transform that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the selector and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform = (function com$rpl$specter$transform(selector,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure);
});
/**
 * Version of setval that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_setval = (function com$rpl$specter$compiled_setval(selector,val,structure){
return com.rpl.specter.compiled_transform.call(null,selector,(function (_){
return val;
}),structure);
});
/**
 * Navigates to each value specified by the selector and replaces it by val
 */
com.rpl.specter.setval = (function com$rpl$specter$setval(selector,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),val,structure);
});
/**
 * Version of replace-in that takes in a selector pre-compiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = (function com$rpl$specter$compiled_replace_in(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21824 = arguments.length;
var i__19161__auto___21825 = (0);
while(true){
if((i__19161__auto___21825 < len__19160__auto___21824)){
args__19167__auto__.push((arguments[i__19161__auto___21825]));

var G__21826 = (i__19161__auto___21825 + (1));
i__19161__auto___21825 = G__21826;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((3) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19168__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__21816){
var map__21817 = p__21816;
var map__21817__$1 = ((((!((map__21817 == null)))?((((map__21817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21817):map__21817);
var merge_fn = cljs.core.get.call(null,map__21817__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,selector,((function (state,map__21817,map__21817__$1,merge_fn){
return (function() { 
var G__21827__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__21823 = res;
var ret = cljs.core.nth.call(null,vec__21823,(0),null);
var user_ret = cljs.core.nth.call(null,vec__21823,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__21827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21828__i = 0, G__21828__a = new Array(arguments.length -  0);
while (G__21828__i < G__21828__a.length) {G__21828__a[G__21828__i] = arguments[G__21828__i + 0]; ++G__21828__i;}
  args = new cljs.core.IndexedSeq(G__21828__a,0);
} 
return G__21827__delegate.call(this,args);};
G__21827.cljs$lang$maxFixedArity = 0;
G__21827.cljs$lang$applyTo = (function (arglist__21829){
var args = cljs.core.seq(arglist__21829);
return G__21827__delegate(args);
});
G__21827.cljs$core$IFn$_invoke$arity$variadic = G__21827__delegate;
return G__21827;
})()
;})(state,map__21817,map__21817__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq21811){
var G__21812 = cljs.core.first.call(null,seq21811);
var seq21811__$1 = cljs.core.next.call(null,seq21811);
var G__21813 = cljs.core.first.call(null,seq21811__$1);
var seq21811__$2 = cljs.core.next.call(null,seq21811__$1);
var G__21814 = cljs.core.first.call(null,seq21811__$2);
var seq21811__$3 = cljs.core.next.call(null,seq21811__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__21812,G__21813,G__21814,seq21811__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21837 = arguments.length;
var i__19161__auto___21838 = (0);
while(true){
if((i__19161__auto___21838 < len__19160__auto___21837)){
args__19167__auto__.push((arguments[i__19161__auto___21838]));

var G__21839 = (i__19161__auto___21838 + (1));
i__19161__auto___21838 = G__21839;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((3) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19168__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (selector,transform_fn,structure,p__21834){
var map__21835 = p__21834;
var map__21835__$1 = ((((!((map__21835 == null)))?((((map__21835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21835):map__21835);
var merge_fn = cljs.core.get.call(null,map__21835__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,selector),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq21830){
var G__21831 = cljs.core.first.call(null,seq21830);
var seq21830__$1 = cljs.core.next.call(null,seq21830);
var G__21832 = cljs.core.first.call(null,seq21830__$1);
var seq21830__$2 = cljs.core.next.call(null,seq21830__$1);
var G__21833 = cljs.core.first.call(null,seq21830__$2);
var seq21830__$3 = cljs.core.next.call(null,seq21830__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__21831,G__21832,G__21833,seq21830__$3);
});
/**
 * Takes a compiled selector that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
/**
 * Stops navigation at this point. For selection returns nothing and for 
 *        transformation returns the structure unchanged
 */
com.rpl.specter.VOID = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return null;
}),(function (structure,next_fn){
return structure;
})));
/**
 * Stays navigated at the current point. Essentially a no-op selector.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return next_fn.call(null,structure);
}),(function (structure,next_fn){
return next_fn.call(null,structure);
})));
com.rpl.specter.ALL = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_AllStructurePath.call(null));
com.rpl.specter.VAL = com.rpl.specter.impl.__GT_ValCollect.call(null);
com.rpl.specter.LAST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.last,com.rpl.specter.impl.set_last));
com.rpl.specter.FIRST = com.rpl.specter.comp_paths.call(null,com.rpl.specter.impl.__GT_PosStructurePath.call(null,cljs.core.first,com.rpl.specter.impl.set_first));
/**
 * Uses start-fn and end-fn to determine the bounds of the subsequence
 *        to select when navigating. Each function takes in the structure as input.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 2),vals__21645__auto__,structure__21647__auto__);
});
var start_fn = (params21643[(params_idx21644 + (0))]);
var end_fn = (params21643[(params_idx21644 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 2),vals__21645__auto__,structure__21647__auto__);
});
var start_fn = (params21643[(params_idx21644 + (0))]);
var end_fn = (params21643[(params_idx21644 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 2),vals__21645__auto__,structure__21647__auto__);
});
var start = (params21643[(params_idx21644 + (0))]);
var end = (params21643[(params_idx21644 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 2),vals__21645__auto__,structure__21647__auto__);
});
var start = (params21643[(params_idx21644 + (0))]);
var end = (params21643[(params_idx21644 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var aset = (params21643[(params_idx21644 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var aset = (params21643[(params_idx21644 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given selector path. An element matches the selector path if calling select
 *   on that element with the selector path yields anything other than an empty sequence.
 * 
 * The input path may be parameterized, in which case the result of filterer
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.filterer = (function com$rpl$specter$filterer(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21881 = arguments.length;
var i__19161__auto___21882 = (0);
while(true){
if((i__19161__auto___21882 < len__19160__auto___21881)){
args__19167__auto__.push((arguments[i__19161__auto___21882]));

var G__21883 = (i__19161__auto___21882 + (1));
i__19161__auto___21882 = G__21883;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params21876 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns21874 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876))
,offsets__21666__auto__,paths__21664__auto__);
var vec__21877 = latefns21874;
var G__21875 = cljs.core.nth.call(null,vec__21877,(0),null);
var ret__21671__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21876),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875))
;
var late = G__21875.call(null,params21643,params_idx21644);
return next_fn.call(null,cljs.core.doall.call(null,cljs.core.filter.call(null,((function (next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875){
return (function (p1__21863_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__21863_SHARP_);
});})(next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875))
,structure)));
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875))
,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21876),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875))
;
var late = G__21875.call(null,params21643,params_idx21644);
var vec__21878 = com.rpl.specter.impl.filter_PLUS_ancestry.call(null,late,structure);
var filtered = cljs.core.nth.call(null,vec__21878,(0),null);
var ancestry = cljs.core.nth.call(null,vec__21878,(1),null);
var next = cljs.core.vec.call(null,next_fn.call(null,filtered));
return cljs.core.reduce.call(null,((function (vec__21878,filtered,ancestry,next,next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875){
return (function (curr,p__21879){
var vec__21880 = p__21879;
var newi = cljs.core.nth.call(null,vec__21880,(0),null);
var oldi = cljs.core.nth.call(null,vec__21880,(1),null);
return cljs.core.assoc.call(null,curr,oldi,cljs.core.get.call(null,next,newi));
});})(vec__21878,filtered,ancestry,next,next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875))
,cljs.core.vec.call(null,structure),ancestry);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21876,latefns21874,vec__21877,G__21875))
),num_params21876);
if(cljs.core._EQ_.call(null,(0),num_params21876)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq21866){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21866));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var key = (params21643[(params_idx21644 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var key = (params21643[(params_idx21644 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
/**
 * Filters the current value based on whether a selector finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 * 
 *   The input path may be parameterized, in which case the result of selected?
 *   will be parameterized in the order of which the parameterized selectors
 *   were declared.
 */
com.rpl.specter.selected_QMARK_ = (function com$rpl$specter$selected_QMARK_(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21891 = arguments.length;
var i__19161__auto___21892 = (0);
while(true){
if((i__19161__auto___21892 < len__19160__auto___21891)){
args__19167__auto__.push((arguments[i__19161__auto___21892]));

var G__21893 = (i__19161__auto___21892 + (1));
i__19161__auto___21892 = G__21893;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params21889 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns21887 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889))
,offsets__21666__auto__,paths__21664__auto__);
var vec__21890 = latefns21887;
var G__21888 = cljs.core.nth.call(null,vec__21890,(0),null);
var ret__21671__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21889),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888))
;
var late = G__21888.call(null,params21643,params_idx21644);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888){
return (function (p1__21884_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__21884_SHARP_);
});})(next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888))
,structure,next_fn);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888))
,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21889),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888))
;
var late = G__21888.call(null,params21643,params_idx21644);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888){
return (function (p1__21885_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__21885_SHARP_);
});})(next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888))
,structure,next_fn);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21889,latefns21887,vec__21890,G__21888))
),num_params21889);
if(cljs.core._EQ_.call(null,(0),num_params21889)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq21886){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21886));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21901 = arguments.length;
var i__19161__auto___21902 = (0);
while(true){
if((i__19161__auto___21902 < len__19160__auto___21901)){
args__19167__auto__.push((arguments[i__19161__auto___21902]));

var G__21903 = (i__19161__auto___21902 + (1));
i__19161__auto___21902 = G__21903;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params21899 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns21897 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899))
,offsets__21666__auto__,paths__21664__auto__);
var vec__21900 = latefns21897;
var G__21898 = cljs.core.nth.call(null,vec__21900,(0),null);
var ret__21671__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21899),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898))
;
var late = G__21898.call(null,params21643,params_idx21644);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898){
return (function (p1__21894_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__21894_SHARP_);
});})(next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898))
,structure,next_fn);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898))
,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21899),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898))
;
var late = G__21898.call(null,params21643,params_idx21644);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898){
return (function (p1__21895_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__21895_SHARP_);
});})(next_fn,late,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898))
,structure,next_fn);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21899,latefns21897,vec__21900,G__21898))
),num_params21899);
if(cljs.core._EQ_.call(null,(0),num_params21899)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq21896){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21896));
});
/**
 * Navigates to a view of the current value by transforming it with the
 * specified selector and update-fn.
 * 
 * The input path may be parameterized, in which case the result of transformed
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.transformed = (function com$rpl$specter$transformed(path,update_fn){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params21910 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns21908 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910))
,offsets__21666__auto__,paths__21664__auto__);
var vec__21911 = latefns21908;
var G__21909 = cljs.core.nth.call(null,vec__21911,(0),null);
var ret__21671__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21910),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909))
;
var late = G__21909.call(null,params21643,params_idx21644);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909))
,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params21910),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909))
;
var late = G__21909.call(null,params21643,params_idx21644);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21910,latefns21908,vec__21911,G__21909))
),num_params21910);
if(cljs.core._EQ_.call(null,(0),num_params21910)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});
cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return next_fn.call(null,cljs.core.get.call(null,structure,kw__$1));
});

cljs.core.Keyword.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (kw,structure,next_fn){
var kw__$1 = this;
return cljs.core.assoc.call(null,structure,kw__$1,next_fn.call(null,cljs.core.get.call(null,structure,kw__$1)));
});
(com.rpl.specter.protocols.StructurePath["function"] = true);

(com.rpl.specter.protocols.select_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}));

(com.rpl.specter.protocols.transform_STAR_["function"] = (function (afn,structure,next_fn){
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
}));
cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$ = true;

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_select.call(null,aset__$1,structure,next_fn);
});

cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (aset,structure,next_fn){
var aset__$1 = this;
return com.rpl.specter.impl.filter_transform.call(null,aset__$1,structure,next_fn);
});
/**
 * Keeps the element only if it matches the supplied predicate. This is the
 *        late-bound parameterized version of using a function directly in a path.
 */
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var afn = (params21643[(params_idx21644 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var v = (params21643[(params_idx21644 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + 1),vals__21645__auto__,structure__21647__auto__);
});
var v = (params21643[(params_idx21644 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21927 = arguments.length;
var i__19161__auto___21928 = (0);
while(true){
if((i__19161__auto___21928 < len__19160__auto___21927)){
args__19167__auto__.push((arguments[i__19161__auto___21928]));

var G__21932 = (i__19161__auto___21928 + (1));
i__19161__auto___21928 = G__21932;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params21915 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns21913 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915))
,offsets__21666__auto__,paths__21664__auto__);
var vec__21916 = latefns21913;
var latefn21914 = cljs.core.nth.call(null,vec__21916,(0),null);
var ret__21671__auto__ = (function (){var collector__21656__auto__ = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915,latefns21913,vec__21916,latefn21914){
return (function (params21643,params_idx21644,vals__21657__auto__,structure,next_fn__21658__auto__){
var late = latefn21914.call(null,params21643,params_idx21644);
var c__21659__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__21658__auto__.call(null,params21643,(params_idx21644 + num_params21915),cljs.core.conj.call(null,vals__21657__auto__,c__21659__auto__),structure);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21915,latefns21913,vec__21916,latefn21914))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21656__auto__,collector__21656__auto__),num_params21915);
})();
if(cljs.core._EQ_.call(null,(0),num_params21915)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq21912){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21912));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__19167__auto__ = [];
var len__19160__auto___21970 = arguments.length;
var i__19161__auto___21971 = (0);
while(true){
if((i__19161__auto___21971 < len__19160__auto___21970)){
args__19167__auto__.push((arguments[i__19161__auto___21971]));

var G__21974 = (i__19161__auto___21971 + (1));
i__19161__auto___21971 = G__21974;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params21961 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns21959 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961))
,offsets__21666__auto__,paths__21664__auto__);
var vec__21962 = latefns21959;
var latefn21960 = cljs.core.nth.call(null,vec__21962,(0),null);
var ret__21671__auto__ = (function (){var collector__21656__auto__ = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961,latefns21959,vec__21962,latefn21960){
return (function (params21643,params_idx21644,vals__21657__auto__,structure,next_fn__21658__auto__){
var late = latefn21960.call(null,params21643,params_idx21644);
var c__21659__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__21658__auto__.call(null,params21643,(params_idx21644 + num_params21961),cljs.core.conj.call(null,vals__21657__auto__,c__21659__auto__),structure);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params21961,latefns21959,vec__21962,latefn21960))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21656__auto__,collector__21656__auto__),num_params21961);
})();
if(cljs.core._EQ_.call(null,(0),num_params21961)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq21951){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21951));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__21656__auto__ = (function (params21643,params_idx21644,vals__21657__auto__,structure,next_fn__21658__auto__){
var val = (params21643[(params_idx21644 + (0))]);
var c__21659__auto__ = val;
return next_fn__21658__auto__.call(null,params21643,(params_idx21644 + 1),cljs.core.conj.call(null,vals__21657__auto__,c__21659__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21656__auto__,collector__21656__auto__),1);
})();
/**
 * Takes in alternating cond-path selector cond-path selector...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following selector for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.cond_path = (function com$rpl$specter$cond_path(var_args){
var args__19167__auto__ = [];
var len__19160__auto___22072 = arguments.length;
var i__19161__auto___22073 = (0);
while(true){
if((i__19161__auto___22073 < len__19160__auto___22072)){
args__19167__auto__.push((arguments[i__19161__auto___22073]));

var G__22074 = (i__19161__auto___22073 + (1));
i__19161__auto___22073 = G__22074;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params22036 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns22035 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036))
,offsets__21666__auto__,paths__21664__auto__);
var ret__21671__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params22036),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035){
return (function (l__21714__auto__){
return l__21714__auto__.call(null,params21643,params_idx21644);
});})(next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035))
,latefns22035);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035))
,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params22036),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035){
return (function (l__21714__auto__){
return l__21714__auto__.call(null,params21643,params_idx21644);
});})(next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035))
,latefns22035);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22036,latefns22035))
),num_params22036);
if(cljs.core._EQ_.call(null,(0),num_params22036)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq22034){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22034));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args22107 = [];
var len__19160__auto___22110 = arguments.length;
var i__19161__auto___22111 = (0);
while(true){
if((i__19161__auto___22111 < len__19160__auto___22110)){
args22107.push((arguments[i__19161__auto___22111]));

var G__22112 = (i__19161__auto___22111 + (1));
i__19161__auto___22111 = G__22112;
continue;
} else {
}
break;
}

var G__22109 = args22107.length;
switch (G__22109) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22107.length)].join('')));

}
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 = (function (cond_p,if_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path);
});

com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 = (function (cond_p,if_path,else_path){
return com.rpl.specter.cond_path.call(null,cond_p,if_path,null,else_path);
});

com.rpl.specter.if_path.cljs$lang$maxFixedArity = 3;
/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = (function com$rpl$specter$multi_path(var_args){
var args__19167__auto__ = [];
var len__19160__auto___22183 = arguments.length;
var i__19161__auto___22185 = (0);
while(true){
if((i__19161__auto___22185 < len__19160__auto___22183)){
args__19167__auto__.push((arguments[i__19161__auto___22185]));

var G__22186 = (i__19161__auto___22185 + (1));
i__19161__auto___22185 = G__22186;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__21664__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__21665__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21664__auto__);
var offsets__21666__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21665__auto__));
var num_params22161 = cljs.core.last.call(null,offsets__21666__auto__);
var latefns22160 = cljs.core.map.call(null,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161){
return (function (o__21667__auto__,p__21668__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21668__auto__))){
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161){
return (function (params__21669__auto__,params_idx__21670__auto__){
return p__21668__auto__;
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161))
} else {
return ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161){
return (function (params__21669__auto__,params_idx__21670__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21668__auto__,params__21669__auto__,(params_idx__21670__auto__ + o__21667__auto__));
});
;})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161))
}
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161))
,offsets__21666__auto__,paths__21664__auto__);
var ret__21671__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params22161),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (l__21714__auto__){
return l__21714__auto__.call(null,params21643,params_idx21644);
});})(next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
,latefns22160);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (p1__22114_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__22114_SHARP_,structure);
});})(next_fn,compiled_paths,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
,compiled_paths)));
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
,((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (params21643,params_idx21644,vals__21645__auto__,structure,next_fn__21646__auto__){
var next_fn = ((function (paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (structure__21647__auto__){
return next_fn__21646__auto__.call(null,params21643,(params_idx21644 + num_params22161),vals__21645__auto__,structure__21647__auto__);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (l__21714__auto__){
return l__21714__auto__.call(null,params21643,params_idx21644);
});})(next_fn,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
,latefns22160);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160){
return (function (structure__$1,selector){
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
,structure,compiled_paths);
});})(paths__21664__auto__,needed_params__21665__auto__,offsets__21666__auto__,num_params22161,latefns22160))
),num_params22161);
if(cljs.core._EQ_.call(null,(0),num_params22161)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21671__auto__,null,(0));
} else {
return ret__21671__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq22117){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22117));
});
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__19167__auto__ = [];
var len__19160__auto___22241 = arguments.length;
var i__19161__auto___22242 = (0);
while(true){
if((i__19161__auto___22242 < len__19160__auto___22241)){
args__19167__auto__.push((arguments[i__19161__auto___22242]));

var G__22246 = (i__19161__auto___22242 + (1));
i__19161__auto___22242 = G__22246;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
});

com.rpl.specter.stay_then_continue.cljs$lang$maxFixedArity = (0);

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq22231){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22231));
});
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__19167__auto__ = [];
var len__19160__auto___22283 = arguments.length;
var i__19161__auto___22284 = (0);
while(true){
if((i__19161__auto___22284 < len__19160__auto___22283)){
args__19167__auto__.push((arguments[i__19161__auto___22284]));

var G__22285 = (i__19161__auto___22284 + (1));
i__19161__auto___22284 = G__22285;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
});

com.rpl.specter.continue_then_stay.cljs$lang$maxFixedArity = (0);

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq22277){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22277));
});

//# sourceMappingURL=specter.js.map