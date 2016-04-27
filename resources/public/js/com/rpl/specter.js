// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22815 = arguments.length;
var i__19785__auto___22816 = (0);
while(true){
if((i__19785__auto___22816 < len__19784__auto___22815)){
args__19791__auto__.push((arguments[i__19785__auto___22816]));

var G__22817 = (i__19785__auto___22816 + (1));
i__19785__auto___22816 = G__22817;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
return com.rpl.specter.impl.comp_paths_STAR_.call(null,cljs.core.vec.call(null,paths));
});

com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0);

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq22812){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22812));
});
/**
 * Version of select that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select = (function com$rpl$specter$select(path,structure){
return com.rpl.specter.compiled_select.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one = (function com$rpl$specter$compiled_select_one(path,structure){
var res = com.rpl.specter.compiled_select.call(null,path,structure);
if((cljs.core.count.call(null,res) > (1))){
com.rpl.specter.impl.throw_illegal.call(null,"More than one element found for params: ",path,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one = (function com$rpl$specter$select_one(path,structure){
return com.rpl.specter.compiled_select_one.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-one! that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = (function com$rpl$specter$compiled_select_one_BANG_(path,structure){
var res = com.rpl.specter.compiled_select.call(null,path,structure);
if(cljs.core.not_EQ_.call(null,(1),cljs.core.count.call(null,res))){
com.rpl.specter.impl.throw_illegal.call(null,"Expected exactly one element for params: ",path,structure);
} else {
}

return cljs.core.first.call(null,res);
});
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG_ = (function com$rpl$specter$select_one_BANG_(path,structure){
return com.rpl.specter.compiled_select_one_BANG_.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of select-first that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_select_first = (function com$rpl$specter$compiled_select_first(path,structure){
return cljs.core.first.call(null,com.rpl.specter.compiled_select.call(null,path,structure));
});
/**
 * Returns first element found. Not any more efficient than select, just a convenience
 */
com.rpl.specter.select_first = (function com$rpl$specter$select_first(path,structure){
return com.rpl.specter.compiled_select_first.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),structure);
});
/**
 * Version of transform that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform = (function com$rpl$specter$transform(path,transform_fn,structure){
return com.rpl.specter.compiled_transform.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure);
});
/**
 * Version of setval that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_setval = (function com$rpl$specter$compiled_setval(path,val,structure){
return com.rpl.specter.compiled_transform.call(null,path,(function (_){
return val;
}),structure);
});
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval = (function com$rpl$specter$setval(path,val,structure){
return com.rpl.specter.compiled_setval.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),val,structure);
});
/**
 * Version of replace-in that takes in a path pre-compiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = (function com$rpl$specter$compiled_replace_in(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22854 = arguments.length;
var i__19785__auto___22855 = (0);
while(true){
if((i__19785__auto___22855 < len__19784__auto___22854)){
args__19791__auto__.push((arguments[i__19785__auto___22855]));

var G__22856 = (i__19785__auto___22855 + (1));
i__19785__auto___22855 = G__22856;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__22848){
var map__22849 = p__22848;
var map__22849__$1 = ((((!((map__22849 == null)))?((((map__22849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22849):map__22849);
var merge_fn = cljs.core.get.call(null,map__22849__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,path,((function (state,map__22849,map__22849__$1,merge_fn){
return (function() { 
var G__22871__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__22853 = res;
var ret = cljs.core.nth.call(null,vec__22853,(0),null);
var user_ret = cljs.core.nth.call(null,vec__22853,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__22871 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22874__i = 0, G__22874__a = new Array(arguments.length -  0);
while (G__22874__i < G__22874__a.length) {G__22874__a[G__22874__i] = arguments[G__22874__i + 0]; ++G__22874__i;}
  args = new cljs.core.IndexedSeq(G__22874__a,0);
} 
return G__22871__delegate.call(this,args);};
G__22871.cljs$lang$maxFixedArity = 0;
G__22871.cljs$lang$applyTo = (function (arglist__22875){
var args = cljs.core.seq(arglist__22875);
return G__22871__delegate(args);
});
G__22871.cljs$core$IFn$_invoke$arity$variadic = G__22871__delegate;
return G__22871;
})()
;})(state,map__22849,map__22849__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq22842){
var G__22843 = cljs.core.first.call(null,seq22842);
var seq22842__$1 = cljs.core.next.call(null,seq22842);
var G__22844 = cljs.core.first.call(null,seq22842__$1);
var seq22842__$2 = cljs.core.next.call(null,seq22842__$1);
var G__22845 = cljs.core.first.call(null,seq22842__$2);
var seq22842__$3 = cljs.core.next.call(null,seq22842__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__22843,G__22844,G__22845,seq22842__$3);
});
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 *   The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in = (function com$rpl$specter$replace_in(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22885 = arguments.length;
var i__19785__auto___22886 = (0);
while(true){
if((i__19785__auto___22886 < len__19784__auto___22885)){
args__19791__auto__.push((arguments[i__19785__auto___22886]));

var G__22887 = (i__19785__auto___22886 + (1));
i__19785__auto___22886 = G__22887;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__22882){
var map__22883 = p__22882;
var map__22883__$1 = ((((!((map__22883 == null)))?((((map__22883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22883):map__22883);
var merge_fn = cljs.core.get.call(null,map__22883__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq22878){
var G__22879 = cljs.core.first.call(null,seq22878);
var seq22878__$1 = cljs.core.next.call(null,seq22878);
var G__22880 = cljs.core.first.call(null,seq22878__$1);
var seq22878__$2 = cljs.core.next.call(null,seq22878__$1);
var G__22881 = cljs.core.first.call(null,seq22878__$2);
var seq22878__$3 = cljs.core.next.call(null,seq22878__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__22879,G__22880,G__22881,seq22878__$3);
});
/**
 * Takes a compiled path that needs late-bound params and supplies it with
 *           an array of params and a position in the array from which to begin reading
 *           params. The return value is an executable selector.
 */
com.rpl.specter.bind_params_STAR_ = com.rpl.specter.impl.bind_params_STAR_;
com.rpl.specter.params_reset = (function com$rpl$specter$params_reset(params_path){
var s = com.rpl.specter.impl.params_needed_selector.call(null,params_path);
var t = com.rpl.specter.impl.params_needed_transformer.call(null,params_path);
var needed = com.rpl.specter.impl.num_needed_params.call(null,params_path);
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (s,t,needed){
return (function (params,params_idx,vals,structure,next_fn){
return s.call(null,params,(params_idx - needed),vals,structure,next_fn);
});})(s,t,needed))
,((function (s,t,needed){
return (function (params,params_idx,vals,structure,next_fn){
return t.call(null,params,(params_idx - needed),vals,structure,next_fn);
});})(s,t,needed))
),(0));
});
/**
 * Stops navigation at this point. For selection returns nothing and for 
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return null;
}),(function (structure,next_fn){
return structure;
})));
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 2),vals__21731__auto__,structure__21733__auto__);
});
var start_fn = (params21729[(params_idx21730 + (0))]);
var end_fn = (params21729[(params_idx21730 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 2),vals__21731__auto__,structure__21733__auto__);
});
var start_fn = (params21729[(params_idx21730 + (0))]);
var end_fn = (params21729[(params_idx21730 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 2),vals__21731__auto__,structure__21733__auto__);
});
var start = (params21729[(params_idx21730 + (0))]);
var end = (params21729[(params_idx21730 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 2),vals__21731__auto__,structure__21733__auto__);
});
var start = (params21729[(params_idx21730 + (0))]);
var end = (params21729[(params_idx21730 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var aset = (params21729[(params_idx21730 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var aset = (params21729[(params_idx21730 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var m_keys = (params21729[(params_idx21730 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var m_keys = (params21729[(params_idx21730 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return com.rpl.specter.impl.codewalk_until.call(null,afn,next_fn,structure);
})),1);
/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 */
com.rpl.specter.subselect = (function com$rpl$specter$subselect(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22969 = arguments.length;
var i__19785__auto___22970 = (0);
while(true){
if((i__19785__auto___22970 < len__19784__auto___22969)){
args__19791__auto__.push((arguments[i__19785__auto___22970]));

var G__22971 = (i__19785__auto___22970 + (1));
i__19785__auto___22970 = G__22971;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params22967 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns22965 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967))
,offsets__21752__auto__,paths__21750__auto__);
var vec__22968 = latefns22965;
var G__22966 = cljs.core.nth.call(null,vec__22968,(0),null);
var ret__21758__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params22967),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966))
;
var late = G__22966.call(null,params21729,params_idx21730);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966))
,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params22967),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966))
;
var late = G__22966.call(null,params21729,params_idx21730);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966))
,structure);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22967,latefns22965,vec__22968,G__22966))
),num_params22967);
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq22958){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22958));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var key = (params21729[(params_idx21730 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var key = (params21729[(params_idx21730 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 2),vals__21731__auto__,structure__21733__auto__);
});
var parse_fn = (params21729[(params_idx21730 + (0))]);
var unparse_fn = (params21729[(params_idx21730 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 2),vals__21731__auto__,structure__21733__auto__);
});
var parse_fn = (params21729[(params_idx21730 + (0))]);
var unparse_fn = (params21729[(params_idx21730 + (1))]);
return unparse_fn.call(null,next_fn.call(null,parse_fn.call(null,structure)));
})),2);
/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 * 
 *   The input path may be parameterized, in which case the result of selected?
 *   will be parameterized in the order of which the parameterized navigators
 *   were declared.
 */
com.rpl.specter.selected_QMARK_ = (function com$rpl$specter$selected_QMARK_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22996 = arguments.length;
var i__19785__auto___22997 = (0);
while(true){
if((i__19785__auto___22997 < len__19784__auto___22996)){
args__19791__auto__.push((arguments[i__19785__auto___22997]));

var G__22998 = (i__19785__auto___22997 + (1));
i__19785__auto___22997 = G__22998;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params22992 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns22990 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992))
,offsets__21752__auto__,paths__21750__auto__);
var vec__22993 = latefns22990;
var G__22991 = cljs.core.nth.call(null,vec__22993,(0),null);
var ret__21758__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params22992),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991))
;
var late = G__22991.call(null,params21729,params_idx21730);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991){
return (function (p1__22987_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__22987_SHARP_);
});})(next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991))
,structure,next_fn);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991))
,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params22992),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991))
;
var late = G__22991.call(null,params21729,params_idx21730);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991){
return (function (p1__22988_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__22988_SHARP_);
});})(next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991))
,structure,next_fn);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params22992,latefns22990,vec__22993,G__22991))
),num_params22992);
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq22989){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22989));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___23009 = arguments.length;
var i__19785__auto___23010 = (0);
while(true){
if((i__19785__auto___23010 < len__19784__auto___23009)){
args__19791__auto__.push((arguments[i__19785__auto___23010]));

var G__23011 = (i__19785__auto___23010 + (1));
i__19785__auto___23010 = G__23011;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params23007 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns23005 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007))
,offsets__21752__auto__,paths__21750__auto__);
var vec__23008 = latefns23005;
var G__23006 = cljs.core.nth.call(null,vec__23008,(0),null);
var ret__21758__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23007),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006))
;
var late = G__23006.call(null,params21729,params_idx21730);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006){
return (function (p1__23002_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__23002_SHARP_);
});})(next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006))
,structure,next_fn);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006))
,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23007),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006))
;
var late = G__23006.call(null,params21729,params_idx21730);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006){
return (function (p1__23003_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__23003_SHARP_);
});})(next_fn,late,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006))
,structure,next_fn);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23007,latefns23005,vec__23008,G__23006))
),num_params23007);
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq23004){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23004));
});
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 * The input path may be parameterized, in which case the result of filterer
 * will be parameterized in the order of which the parameterized selectors
 * were declared.
 */
com.rpl.specter.filterer = (function com$rpl$specter$filterer(var_args){
var args__19791__auto__ = [];
var len__19784__auto___23026 = arguments.length;
var i__19785__auto___23027 = (0);
while(true){
if((i__19785__auto___23027 < len__19784__auto___23026)){
args__19791__auto__.push((arguments[i__19785__auto___23027]));

var G__23028 = (i__19785__auto___23027 + (1));
i__19785__auto___23027 = G__23028;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.subselect.call(null,com.rpl.specter.ALL,com.rpl.specter.selected_QMARK_.call(null,path));
});

com.rpl.specter.filterer.cljs$lang$maxFixedArity = (0);

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq23023){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23023));
});
/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 * 
 * The input path may be parameterized, in which case the result of transformed
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.transformed = (function com$rpl$specter$transformed(path,update_fn){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params23041 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns23039 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041))
,offsets__21752__auto__,paths__21750__auto__);
var vec__23042 = latefns23039;
var G__23040 = cljs.core.nth.call(null,vec__23042,(0),null);
var ret__21758__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23041),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040))
;
var late = G__23040.call(null,params21729,params_idx21730);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040))
,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23041),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040))
;
var late = G__23040.call(null,params21729,params_idx21730);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23041,latefns23039,vec__23042,G__23040))
),num_params23041);
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var afn = (params21729[(params_idx21730 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var v = (params21729[(params_idx21730 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + 1),vals__21731__auto__,structure__21733__auto__);
});
var v = (params21729[(params_idx21730 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__19791__auto__ = [];
var len__19784__auto___23142 = arguments.length;
var i__19785__auto___23144 = (0);
while(true){
if((i__19785__auto___23144 < len__19784__auto___23142)){
args__19791__auto__.push((arguments[i__19785__auto___23144]));

var G__23146 = (i__19785__auto___23144 + (1));
i__19785__auto___23144 = G__23146;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params23126 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns23116 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126))
,offsets__21752__auto__,paths__21750__auto__);
var vec__23127 = latefns23116;
var latefn23117 = cljs.core.nth.call(null,vec__23127,(0),null);
var ret__21758__auto__ = (function (){var collector__21742__auto__ = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126,latefns23116,vec__23127,latefn23117){
return (function (params21729,params_idx21730,vals__21743__auto__,structure,next_fn__21744__auto__){
var late = latefn23117.call(null,params21729,params_idx21730);
var c__21745__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__21744__auto__.call(null,params21729,(params_idx21730 + num_params23126),cljs.core.conj.call(null,vals__21743__auto__,c__21745__auto__),structure);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23126,latefns23116,vec__23127,latefn23117))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21742__auto__,collector__21742__auto__),num_params23126);
})();
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq23102){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23102));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__19791__auto__ = [];
var len__19784__auto___23197 = arguments.length;
var i__19785__auto___23198 = (0);
while(true){
if((i__19785__auto___23198 < len__19784__auto___23197)){
args__19791__auto__.push((arguments[i__19785__auto___23198]));

var G__23200 = (i__19785__auto___23198 + (1));
i__19785__auto___23198 = G__23200;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params23191 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns23189 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191))
,offsets__21752__auto__,paths__21750__auto__);
var vec__23192 = latefns23189;
var latefn23190 = cljs.core.nth.call(null,vec__23192,(0),null);
var ret__21758__auto__ = (function (){var collector__21742__auto__ = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191,latefns23189,vec__23192,latefn23190){
return (function (params21729,params_idx21730,vals__21743__auto__,structure,next_fn__21744__auto__){
var late = latefn23190.call(null,params21729,params_idx21730);
var c__21745__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__21744__auto__.call(null,params21729,(params_idx21730 + num_params23191),cljs.core.conj.call(null,vals__21743__auto__,c__21745__auto__),structure);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23191,latefns23189,vec__23192,latefn23190))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21742__auto__,collector__21742__auto__),num_params23191);
})();
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq23186){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23186));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__21742__auto__ = (function (params21729,params_idx21730,vals__21743__auto__,structure,next_fn__21744__auto__){
var val = (params21729[(params_idx21730 + (0))]);
var c__21745__auto__ = val;
return next_fn__21744__auto__.call(null,params21729,(params_idx21730 + 1),cljs.core.conj.call(null,vals__21743__auto__,c__21745__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21742__auto__,collector__21742__auto__),1);
})();
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 * 
 * The input paths may be parameterized, in which case the result of cond-path
 * will be parameterized in the order of which the parameterized navigators
 * were declared.
 */
com.rpl.specter.cond_path = (function com$rpl$specter$cond_path(var_args){
var args__19791__auto__ = [];
var len__19784__auto___23261 = arguments.length;
var i__19785__auto___23262 = (0);
while(true){
if((i__19785__auto___23262 < len__19784__auto___23261)){
args__19791__auto__.push((arguments[i__19785__auto___23262]));

var G__23263 = (i__19785__auto___23262 + (1));
i__19785__auto___23262 = G__23263;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params23248 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns23247 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248))
,offsets__21752__auto__,paths__21750__auto__);
var ret__21758__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23248),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247){
return (function (l__21811__auto__){
return l__21811__auto__.call(null,params21729,params_idx21730);
});})(next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247))
,latefns23247);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247))
,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23248),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247){
return (function (l__21811__auto__){
return l__21811__auto__.call(null,params21729,params_idx21730);
});})(next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247))
,latefns23247);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(cljs.core.truth_(temp__4655__auto__)){
var selector = temp__4655__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23248,latefns23247))
),num_params23248);
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq23233){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23233));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args23303 = [];
var len__19784__auto___23306 = arguments.length;
var i__19785__auto___23307 = (0);
while(true){
if((i__19785__auto___23307 < len__19784__auto___23306)){
args23303.push((arguments[i__19785__auto___23307]));

var G__23321 = (i__19785__auto___23307 + (1));
i__19785__auto___23307 = G__23321;
continue;
} else {
}
break;
}

var G__23305 = args23303.length;
switch (G__23305) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23303.length)].join('')));

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
var args__19791__auto__ = [];
var len__19784__auto___23331 = arguments.length;
var i__19785__auto___23332 = (0);
while(true){
if((i__19785__auto___23332 < len__19784__auto___23331)){
args__19791__auto__.push((arguments[i__19785__auto___23332]));

var G__23333 = (i__19785__auto___23332 + (1));
i__19785__auto___23332 = G__23333;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__21750__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__21751__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21750__auto__);
var offsets__21752__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21751__auto__));
var any_params_needed_QMARK___21753__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21750__auto__)));
var num_params23330 = cljs.core.last.call(null,offsets__21752__auto__);
var latefns23329 = cljs.core.map.call(null,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330){
return (function (o__21754__auto__,p__21755__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21755__auto__))){
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330){
return (function (params__21756__auto__,params_idx__21757__auto__){
return p__21755__auto__;
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330))
} else {
return ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330){
return (function (params__21756__auto__,params_idx__21757__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21755__auto__,params__21756__auto__,(params_idx__21757__auto__ + o__21754__auto__));
});
;})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330))
}
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330))
,offsets__21752__auto__,paths__21750__auto__);
var ret__21758__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23330),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (l__21811__auto__){
return l__21811__auto__.call(null,params21729,params_idx21730);
});})(next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
,latefns23329);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (p1__23326_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__23326_SHARP_,structure);
});})(next_fn,compiled_paths,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
,compiled_paths)));
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
,((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (params21729,params_idx21730,vals__21731__auto__,structure,next_fn__21732__auto__){
var next_fn = ((function (paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (structure__21733__auto__){
return next_fn__21732__auto__.call(null,params21729,(params_idx21730 + num_params23330),vals__21731__auto__,structure__21733__auto__);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (l__21811__auto__){
return l__21811__auto__.call(null,params21729,params_idx21730);
});})(next_fn,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
,latefns23329);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329){
return (function (structure__$1,path){
return com.rpl.specter.compiled_transform.call(null,path,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
,structure,compiled_paths);
});})(paths__21750__auto__,needed_params__21751__auto__,offsets__21752__auto__,any_params_needed_QMARK___21753__auto__,num_params23330,latefns23329))
),num_params23330);
if(!(any_params_needed_QMARK___21753__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21758__auto__,null,(0));
} else {
return ret__21758__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq23327){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23327));
});
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__19791__auto__ = [];
var len__19784__auto___23369 = arguments.length;
var i__19785__auto___23370 = (0);
while(true){
if((i__19785__auto___23370 < len__19784__auto___23369)){
args__19791__auto__.push((arguments[i__19785__auto___23370]));

var G__23371 = (i__19785__auto___23370 + (1));
i__19785__auto___23370 = G__23371;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path);
});

com.rpl.specter.stay_then_continue.cljs$lang$maxFixedArity = (0);

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq23365){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23365));
});
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__19791__auto__ = [];
var len__19784__auto___23374 = arguments.length;
var i__19785__auto___23375 = (0);
while(true){
if((i__19785__auto___23375 < len__19784__auto___23374)){
args__19791__auto__.push((arguments[i__19785__auto___23375]));

var G__23376 = (i__19785__auto___23375 + (1));
i__19785__auto___23375 = G__23376;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic = (function (path){
return com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY);
});

com.rpl.specter.continue_then_stay.cljs$lang$maxFixedArity = (0);

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq23373){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23373));
});

//# sourceMappingURL=specter.js.map