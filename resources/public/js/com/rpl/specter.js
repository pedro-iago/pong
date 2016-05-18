// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__19791__auto__ = [];
var len__19784__auto___21956 = arguments.length;
var i__19785__auto___21957 = (0);
while(true){
if((i__19785__auto___21957 < len__19784__auto___21956)){
args__19791__auto__.push((arguments[i__19785__auto___21957]));

var G__21958 = (i__19785__auto___21957 + (1));
i__19785__auto___21957 = G__21958;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq21955){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21955));
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
var len__19784__auto___22009 = arguments.length;
var i__19785__auto___22010 = (0);
while(true){
if((i__19785__auto___22010 < len__19784__auto___22009)){
args__19791__auto__.push((arguments[i__19785__auto___22010]));

var G__22011 = (i__19785__auto___22010 + (1));
i__19785__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__22000){
var map__22001 = p__22000;
var map__22001__$1 = ((((!((map__22001 == null)))?((((map__22001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22001):map__22001);
var merge_fn = cljs.core.get.call(null,map__22001__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,path,((function (state,map__22001,map__22001__$1,merge_fn){
return (function() { 
var G__22016__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(res){
var vec__22006 = res;
var ret = cljs.core.nth.call(null,vec__22006,(0),null);
var user_ret = cljs.core.nth.call(null,vec__22006,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__22016 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22017__i = 0, G__22017__a = new Array(arguments.length -  0);
while (G__22017__i < G__22017__a.length) {G__22017__a[G__22017__i] = arguments[G__22017__i + 0]; ++G__22017__i;}
  args = new cljs.core.IndexedSeq(G__22017__a,0);
} 
return G__22016__delegate.call(this,args);};
G__22016.cljs$lang$maxFixedArity = 0;
G__22016.cljs$lang$applyTo = (function (arglist__22018){
var args = cljs.core.seq(arglist__22018);
return G__22016__delegate(args);
});
G__22016.cljs$core$IFn$_invoke$arity$variadic = G__22016__delegate;
return G__22016;
})()
;})(state,map__22001,map__22001__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq21992){
var G__21993 = cljs.core.first.call(null,seq21992);
var seq21992__$1 = cljs.core.next.call(null,seq21992);
var G__21994 = cljs.core.first.call(null,seq21992__$1);
var seq21992__$2 = cljs.core.next.call(null,seq21992__$1);
var G__21995 = cljs.core.first.call(null,seq21992__$2);
var seq21992__$3 = cljs.core.next.call(null,seq21992__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__21993,G__21994,G__21995,seq21992__$3);
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
var len__19784__auto___22032 = arguments.length;
var i__19785__auto___22033 = (0);
while(true){
if((i__19785__auto___22033 < len__19784__auto___22032)){
args__19791__auto__.push((arguments[i__19785__auto___22033]));

var G__22035 = (i__19785__auto___22033 + (1));
i__19785__auto___22033 = G__22035;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__22027){
var map__22028 = p__22027;
var map__22028__$1 = ((((!((map__22028 == null)))?((((map__22028.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22028.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22028):map__22028);
var merge_fn = cljs.core.get.call(null,map__22028__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq22023){
var G__22024 = cljs.core.first.call(null,seq22023);
var seq22023__$1 = cljs.core.next.call(null,seq22023);
var G__22025 = cljs.core.first.call(null,seq22023__$1);
var seq22023__$2 = cljs.core.next.call(null,seq22023__$1);
var G__22026 = cljs.core.first.call(null,seq22023__$2);
var seq22023__$3 = cljs.core.next.call(null,seq22023__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__22024,G__22025,G__22026,seq22023__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 2),vals__21735__auto__,structure__21737__auto__);
});
var start_fn = (params21733[(params_idx21734 + (0))]);
var end_fn = (params21733[(params_idx21734 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 2),vals__21735__auto__,structure__21737__auto__);
});
var start_fn = (params21733[(params_idx21734 + (0))]);
var end_fn = (params21733[(params_idx21734 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 2),vals__21735__auto__,structure__21737__auto__);
});
var start = (params21733[(params_idx21734 + (0))]);
var end = (params21733[(params_idx21734 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 2),vals__21735__auto__,structure__21737__auto__);
});
var start = (params21733[(params_idx21734 + (0))]);
var end = (params21733[(params_idx21734 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var aset = (params21733[(params_idx21734 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var aset = (params21733[(params_idx21734 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var m_keys = (params21733[(params_idx21734 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var m_keys = (params21733[(params_idx21734 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
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
var len__19784__auto___22080 = arguments.length;
var i__19785__auto___22081 = (0);
while(true){
if((i__19785__auto___22081 < len__19784__auto___22080)){
args__19791__auto__.push((arguments[i__19785__auto___22081]));

var G__22084 = (i__19785__auto___22081 + (1));
i__19785__auto___22081 = G__22084;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22078 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22076 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078){
return (function (o__21758__auto__,p__21759__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__)){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078))
,offsets__21756__auto__,paths__21754__auto__);
var vec__22079 = latefns22076;
var G__22077 = cljs.core.nth.call(null,vec__22079,(0),null);
var ret__21762__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22078),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077))
;
var late = G__22077.call(null,params21733,params_idx21734);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077))
,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22078),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077))
;
var late = G__22077.call(null,params21733,params_idx21734);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077))
,structure);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22078,latefns22076,vec__22079,G__22077))
),num_params22078);
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq22075){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22075));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var key = (params21733[(params_idx21734 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var key = (params21733[(params_idx21734 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 2),vals__21735__auto__,structure__21737__auto__);
});
var parse_fn = (params21733[(params_idx21734 + (0))]);
var unparse_fn = (params21733[(params_idx21734 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 2),vals__21735__auto__,structure__21737__auto__);
});
var parse_fn = (params21733[(params_idx21734 + (0))]);
var unparse_fn = (params21733[(params_idx21734 + (1))]);
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
var len__19784__auto___22098 = arguments.length;
var i__19785__auto___22099 = (0);
while(true){
if((i__19785__auto___22099 < len__19784__auto___22098)){
args__19791__auto__.push((arguments[i__19785__auto___22099]));

var G__22100 = (i__19785__auto___22099 + (1));
i__19785__auto___22099 = G__22100;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22096 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22094 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096){
return (function (o__21758__auto__,p__21759__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__)){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096))
,offsets__21756__auto__,paths__21754__auto__);
var vec__22097 = latefns22094;
var G__22095 = cljs.core.nth.call(null,vec__22097,(0),null);
var ret__21762__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22096),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095))
;
var late = G__22095.call(null,params21733,params_idx21734);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095){
return (function (p1__22089_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__22089_SHARP_);
});})(next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095))
,structure,next_fn);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095))
,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22096),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095))
;
var late = G__22095.call(null,params21733,params_idx21734);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095){
return (function (p1__22090_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__22090_SHARP_);
});})(next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095))
,structure,next_fn);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22096,latefns22094,vec__22097,G__22095))
),num_params22096);
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq22091){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22091));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22121 = arguments.length;
var i__19785__auto___22122 = (0);
while(true){
if((i__19785__auto___22122 < len__19784__auto___22121)){
args__19791__auto__.push((arguments[i__19785__auto___22122]));

var G__22123 = (i__19785__auto___22122 + (1));
i__19785__auto___22122 = G__22123;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22119 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22117 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119){
return (function (o__21758__auto__,p__21759__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__)){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119))
,offsets__21756__auto__,paths__21754__auto__);
var vec__22120 = latefns22117;
var G__22118 = cljs.core.nth.call(null,vec__22120,(0),null);
var ret__21762__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22119),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118))
;
var late = G__22118.call(null,params21733,params_idx21734);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118){
return (function (p1__22102_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__22102_SHARP_);
});})(next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118))
,structure,next_fn);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118))
,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22119),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118))
;
var late = G__22118.call(null,params21733,params_idx21734);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118){
return (function (p1__22103_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__22103_SHARP_);
});})(next_fn,late,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118))
,structure,next_fn);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22119,latefns22117,vec__22120,G__22118))
),num_params22119);
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq22104){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22104));
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
var len__19784__auto___22145 = arguments.length;
var i__19785__auto___22146 = (0);
while(true){
if((i__19785__auto___22146 < len__19784__auto___22145)){
args__19791__auto__.push((arguments[i__19785__auto___22146]));

var G__22148 = (i__19785__auto___22146 + (1));
i__19785__auto___22146 = G__22148;
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

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq22136){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22136));
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
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22158 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22156 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158){
return (function (o__21758__auto__,p__21759__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__))){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158))
,offsets__21756__auto__,paths__21754__auto__);
var vec__22159 = latefns22156;
var G__22157 = cljs.core.nth.call(null,vec__22159,(0),null);
var ret__21762__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22158),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157))
;
var late = G__22157.call(null,params21733,params_idx21734);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157))
,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22158),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157))
;
var late = G__22157.call(null,params21733,params_idx21734);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22158,latefns22156,vec__22159,G__22157))
),num_params22158);
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var afn = (params21733[(params_idx21734 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var v = (params21733[(params_idx21734 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + 1),vals__21735__auto__,structure__21737__auto__);
});
var v = (params21733[(params_idx21734 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22188 = arguments.length;
var i__19785__auto___22189 = (0);
while(true){
if((i__19785__auto___22189 < len__19784__auto___22188)){
args__19791__auto__.push((arguments[i__19785__auto___22189]));

var G__22190 = (i__19785__auto___22189 + (1));
i__19785__auto___22189 = G__22190;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22186 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22183 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186){
return (function (o__21758__auto__,p__21759__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__))){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186))
,offsets__21756__auto__,paths__21754__auto__);
var vec__22187 = latefns22183;
var latefn22184 = cljs.core.nth.call(null,vec__22187,(0),null);
var ret__21762__auto__ = (function (){var collector__21746__auto__ = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186,latefns22183,vec__22187,latefn22184){
return (function (params21733,params_idx21734,vals__21747__auto__,structure,next_fn__21748__auto__){
var late = latefn22184.call(null,params21733,params_idx21734);
var c__21749__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__21748__auto__.call(null,params21733,(params_idx21734 + num_params22186),cljs.core.conj.call(null,vals__21747__auto__,c__21749__auto__),structure);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22186,latefns22183,vec__22187,latefn22184))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21746__auto__,collector__21746__auto__),num_params22186);
})();
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq22182){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22182));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22196 = arguments.length;
var i__19785__auto___22197 = (0);
while(true){
if((i__19785__auto___22197 < len__19784__auto___22196)){
args__19791__auto__.push((arguments[i__19785__auto___22197]));

var G__22198 = (i__19785__auto___22197 + (1));
i__19785__auto___22197 = G__22198;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22194 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22192 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194){
return (function (o__21758__auto__,p__21759__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__))){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194))
,offsets__21756__auto__,paths__21754__auto__);
var vec__22195 = latefns22192;
var latefn22193 = cljs.core.nth.call(null,vec__22195,(0),null);
var ret__21762__auto__ = (function (){var collector__21746__auto__ = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194,latefns22192,vec__22195,latefn22193){
return (function (params21733,params_idx21734,vals__21747__auto__,structure,next_fn__21748__auto__){
var late = latefn22193.call(null,params21733,params_idx21734);
var c__21749__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__21748__auto__.call(null,params21733,(params_idx21734 + num_params22194),cljs.core.conj.call(null,vals__21747__auto__,c__21749__auto__),structure);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22194,latefns22192,vec__22195,latefn22193))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21746__auto__,collector__21746__auto__),num_params22194);
})();
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq22191){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22191));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__21746__auto__ = (function (params21733,params_idx21734,vals__21747__auto__,structure,next_fn__21748__auto__){
var val = (params21733[(params_idx21734 + (0))]);
var c__21749__auto__ = val;
return next_fn__21748__auto__.call(null,params21733,(params_idx21734 + 1),cljs.core.conj.call(null,vals__21747__auto__,c__21749__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21746__auto__,collector__21746__auto__),1);
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
var len__19784__auto___22202 = arguments.length;
var i__19785__auto___22203 = (0);
while(true){
if((i__19785__auto___22203 < len__19784__auto___22202)){
args__19791__auto__.push((arguments[i__19785__auto___22203]));

var G__22204 = (i__19785__auto___22203 + (1));
i__19785__auto___22203 = G__22204;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22201 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22200 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201){
return (function (o__21758__auto__,p__21759__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__))){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201))
,offsets__21756__auto__,paths__21754__auto__);
var ret__21762__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22201),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200){
return (function (l__21805__auto__){
return l__21805__auto__.call(null,params21733,params_idx21734);
});})(next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200))
,latefns22200);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(temp__4655__auto__){
var selector = temp__4655__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200))
,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22201),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200){
return (function (l__21805__auto__){
return l__21805__auto__.call(null,params21733,params_idx21734);
});})(next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200))
,latefns22200);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(temp__4655__auto__){
var selector = temp__4655__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22201,latefns22200))
),num_params22201);
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq22199){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22199));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args22205 = [];
var len__19784__auto___22208 = arguments.length;
var i__19785__auto___22209 = (0);
while(true){
if((i__19785__auto___22209 < len__19784__auto___22208)){
args22205.push((arguments[i__19785__auto___22209]));

var G__22210 = (i__19785__auto___22209 + (1));
i__19785__auto___22209 = G__22210;
continue;
} else {
}
break;
}

var G__22207 = args22205.length;
switch (G__22207) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22205.length)].join('')));

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
var len__19784__auto___22216 = arguments.length;
var i__19785__auto___22217 = (0);
while(true){
if((i__19785__auto___22217 < len__19784__auto___22216)){
args__19791__auto__.push((arguments[i__19785__auto___22217]));

var G__22218 = (i__19785__auto___22217 + (1));
i__19785__auto___22217 = G__22218;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__21754__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__21755__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21754__auto__);
var offsets__21756__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21755__auto__));
var any_params_needed_QMARK___21757__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21754__auto__)));
var num_params22215 = cljs.core.last.call(null,offsets__21756__auto__);
var latefns22214 = cljs.core.map.call(null,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215){
return (function (o__21758__auto__,p__21759__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21759__auto__)){
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215){
return (function (params__21760__auto__,params_idx__21761__auto__){
return p__21759__auto__;
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215))
} else {
return ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215){
return (function (params__21760__auto__,params_idx__21761__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21759__auto__,params__21760__auto__,(params_idx__21761__auto__ + o__21758__auto__));
});
;})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215))
}
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215))
,offsets__21756__auto__,paths__21754__auto__);
var ret__21762__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22215),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (l__21805__auto__){
return l__21805__auto__.call(null,params21733,params_idx21734);
});})(next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
,latefns22214);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (p1__22212_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__22212_SHARP_,structure);
});})(next_fn,compiled_paths,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
,compiled_paths)));
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
,((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (params21733,params_idx21734,vals__21735__auto__,structure,next_fn__21736__auto__){
var next_fn = ((function (paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (structure__21737__auto__){
return next_fn__21736__auto__.call(null,params21733,(params_idx21734 + num_params22215),vals__21735__auto__,structure__21737__auto__);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (l__21805__auto__){
return l__21805__auto__.call(null,params21733,params_idx21734);
});})(next_fn,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
,latefns22214);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214){
return (function (structure__$1,path){
return com.rpl.specter.compiled_transform.call(null,path,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
,structure,compiled_paths);
});})(paths__21754__auto__,needed_params__21755__auto__,offsets__21756__auto__,any_params_needed_QMARK___21757__auto__,num_params22215,latefns22214))
),num_params22215);
if(!(any_params_needed_QMARK___21757__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21762__auto__,null,(0));
} else {
return ret__21762__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq22213){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22213));
});
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22220 = arguments.length;
var i__19785__auto___22221 = (0);
while(true){
if((i__19785__auto___22221 < len__19784__auto___22220)){
args__19791__auto__.push((arguments[i__19785__auto___22221]));

var G__22222 = (i__19785__auto___22221 + (1));
i__19785__auto___22221 = G__22222;
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

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq22219){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22219));
});
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22224 = arguments.length;
var i__19785__auto___22225 = (0);
while(true){
if((i__19785__auto___22225 < len__19784__auto___22224)){
args__19791__auto__.push((arguments[i__19785__auto___22225]));

var G__22226 = (i__19785__auto___22225 + (1));
i__19785__auto___22225 = G__22226;
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

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq22223){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22223));
});

//# sourceMappingURL=specter.js.map