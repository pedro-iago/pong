// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__19791__auto__ = [];
var len__19784__auto___21996 = arguments.length;
var i__19785__auto___21997 = (0);
while(true){
if((i__19785__auto___21997 < len__19784__auto___21996)){
args__19791__auto__.push((arguments[i__19785__auto___21997]));

var G__21998 = (i__19785__auto___21997 + (1));
i__19785__auto___21997 = G__21998;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq21986){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq21986));
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
var len__19784__auto___22025 = arguments.length;
var i__19785__auto___22026 = (0);
while(true){
if((i__19785__auto___22026 < len__19784__auto___22025)){
args__19791__auto__.push((arguments[i__19785__auto___22026]));

var G__22027 = (i__19785__auto___22026 + (1));
i__19785__auto___22026 = G__22027;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__22019){
var map__22020 = p__22019;
var map__22020__$1 = ((((!((map__22020 == null)))?((((map__22020.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22020.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22020):map__22020);
var merge_fn = cljs.core.get.call(null,map__22020__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,path,((function (state,map__22020,map__22020__$1,merge_fn){
return (function() { 
var G__22032__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(res){
var vec__22022 = res;
var ret = cljs.core.nth.call(null,vec__22022,(0),null);
var user_ret = cljs.core.nth.call(null,vec__22022,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__22032 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22033__i = 0, G__22033__a = new Array(arguments.length -  0);
while (G__22033__i < G__22033__a.length) {G__22033__a[G__22033__i] = arguments[G__22033__i + 0]; ++G__22033__i;}
  args = new cljs.core.IndexedSeq(G__22033__a,0);
} 
return G__22032__delegate.call(this,args);};
G__22032.cljs$lang$maxFixedArity = 0;
G__22032.cljs$lang$applyTo = (function (arglist__22037){
var args = cljs.core.seq(arglist__22037);
return G__22032__delegate(args);
});
G__22032.cljs$core$IFn$_invoke$arity$variadic = G__22032__delegate;
return G__22032;
})()
;})(state,map__22020,map__22020__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq22015){
var G__22016 = cljs.core.first.call(null,seq22015);
var seq22015__$1 = cljs.core.next.call(null,seq22015);
var G__22017 = cljs.core.first.call(null,seq22015__$1);
var seq22015__$2 = cljs.core.next.call(null,seq22015__$1);
var G__22018 = cljs.core.first.call(null,seq22015__$2);
var seq22015__$3 = cljs.core.next.call(null,seq22015__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__22016,G__22017,G__22018,seq22015__$3);
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
var len__19784__auto___22045 = arguments.length;
var i__19785__auto___22046 = (0);
while(true){
if((i__19785__auto___22046 < len__19784__auto___22045)){
args__19791__auto__.push((arguments[i__19785__auto___22046]));

var G__22047 = (i__19785__auto___22046 + (1));
i__19785__auto___22046 = G__22047;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__22042){
var map__22043 = p__22042;
var map__22043__$1 = ((((!((map__22043 == null)))?((((map__22043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22043):map__22043);
var merge_fn = cljs.core.get.call(null,map__22043__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq22038){
var G__22039 = cljs.core.first.call(null,seq22038);
var seq22038__$1 = cljs.core.next.call(null,seq22038);
var G__22040 = cljs.core.first.call(null,seq22038__$1);
var seq22038__$2 = cljs.core.next.call(null,seq22038__$1);
var G__22041 = cljs.core.first.call(null,seq22038__$2);
var seq22038__$3 = cljs.core.next.call(null,seq22038__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__22039,G__22040,G__22041,seq22038__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 2),vals__21739__auto__,structure__21741__auto__);
});
var start_fn = (params21737[(params_idx21738 + (0))]);
var end_fn = (params21737[(params_idx21738 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 2),vals__21739__auto__,structure__21741__auto__);
});
var start_fn = (params21737[(params_idx21738 + (0))]);
var end_fn = (params21737[(params_idx21738 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 2),vals__21739__auto__,structure__21741__auto__);
});
var start = (params21737[(params_idx21738 + (0))]);
var end = (params21737[(params_idx21738 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 2),vals__21739__auto__,structure__21741__auto__);
});
var start = (params21737[(params_idx21738 + (0))]);
var end = (params21737[(params_idx21738 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var aset = (params21737[(params_idx21738 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var aset = (params21737[(params_idx21738 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var m_keys = (params21737[(params_idx21738 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var m_keys = (params21737[(params_idx21738 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
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
var len__19784__auto___22086 = arguments.length;
var i__19785__auto___22087 = (0);
while(true){
if((i__19785__auto___22087 < len__19784__auto___22086)){
args__19791__auto__.push((arguments[i__19785__auto___22087]));

var G__22088 = (i__19785__auto___22087 + (1));
i__19785__auto___22087 = G__22088;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22084 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22081 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084){
return (function (o__21762__auto__,p__21763__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__)){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084))
,offsets__21760__auto__,paths__21758__auto__);
var vec__22085 = latefns22081;
var G__22082 = cljs.core.nth.call(null,vec__22085,(0),null);
var ret__21766__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22084),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082))
;
var late = G__22082.call(null,params21737,params_idx21738);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082))
,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22084),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082))
;
var late = G__22082.call(null,params21737,params_idx21738);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082))
,structure);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22084,latefns22081,vec__22085,G__22082))
),num_params22084);
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq22078){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22078));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var key = (params21737[(params_idx21738 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var key = (params21737[(params_idx21738 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 2),vals__21739__auto__,structure__21741__auto__);
});
var parse_fn = (params21737[(params_idx21738 + (0))]);
var unparse_fn = (params21737[(params_idx21738 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 2),vals__21739__auto__,structure__21741__auto__);
});
var parse_fn = (params21737[(params_idx21738 + (0))]);
var unparse_fn = (params21737[(params_idx21738 + (1))]);
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
var len__19784__auto___22100 = arguments.length;
var i__19785__auto___22101 = (0);
while(true){
if((i__19785__auto___22101 < len__19784__auto___22100)){
args__19791__auto__.push((arguments[i__19785__auto___22101]));

var G__22102 = (i__19785__auto___22101 + (1));
i__19785__auto___22101 = G__22102;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22098 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22096 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098){
return (function (o__21762__auto__,p__21763__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__)){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098))
,offsets__21760__auto__,paths__21758__auto__);
var vec__22099 = latefns22096;
var G__22097 = cljs.core.nth.call(null,vec__22099,(0),null);
var ret__21766__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22098),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097))
;
var late = G__22097.call(null,params21737,params_idx21738);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097){
return (function (p1__22093_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__22093_SHARP_);
});})(next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097))
,structure,next_fn);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097))
,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22098),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097))
;
var late = G__22097.call(null,params21737,params_idx21738);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097){
return (function (p1__22094_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__22094_SHARP_);
});})(next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097))
,structure,next_fn);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22098,latefns22096,vec__22099,G__22097))
),num_params22098);
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq22095){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22095));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22110 = arguments.length;
var i__19785__auto___22111 = (0);
while(true){
if((i__19785__auto___22111 < len__19784__auto___22110)){
args__19791__auto__.push((arguments[i__19785__auto___22111]));

var G__22112 = (i__19785__auto___22111 + (1));
i__19785__auto___22111 = G__22112;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22108 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22106 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108){
return (function (o__21762__auto__,p__21763__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__))){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108))
,offsets__21760__auto__,paths__21758__auto__);
var vec__22109 = latefns22106;
var G__22107 = cljs.core.nth.call(null,vec__22109,(0),null);
var ret__21766__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22108),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107))
;
var late = G__22107.call(null,params21737,params_idx21738);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107){
return (function (p1__22103_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__22103_SHARP_);
});})(next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107))
,structure,next_fn);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107))
,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22108),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107))
;
var late = G__22107.call(null,params21737,params_idx21738);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107){
return (function (p1__22104_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__22104_SHARP_);
});})(next_fn,late,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107))
,structure,next_fn);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22108,latefns22106,vec__22109,G__22107))
),num_params22108);
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq22105){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22105));
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
var len__19784__auto___22124 = arguments.length;
var i__19785__auto___22125 = (0);
while(true){
if((i__19785__auto___22125 < len__19784__auto___22124)){
args__19791__auto__.push((arguments[i__19785__auto___22125]));

var G__22126 = (i__19785__auto___22125 + (1));
i__19785__auto___22125 = G__22126;
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

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq22123){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22123));
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
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22140 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22137 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140){
return (function (o__21762__auto__,p__21763__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__)){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140))
,offsets__21760__auto__,paths__21758__auto__);
var vec__22142 = latefns22137;
var G__22138 = cljs.core.nth.call(null,vec__22142,(0),null);
var ret__21766__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22140),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138))
;
var late = G__22138.call(null,params21737,params_idx21738);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138))
,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22140),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138))
;
var late = G__22138.call(null,params21737,params_idx21738);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22140,latefns22137,vec__22142,G__22138))
),num_params22140);
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var afn = (params21737[(params_idx21738 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var v = (params21737[(params_idx21738 + (0))]);
return next_fn.call(null,((structure)?structure:v));
}),(function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + 1),vals__21739__auto__,structure__21741__auto__);
});
var v = (params21737[(params_idx21738 + (0))]);
return next_fn.call(null,((structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22161 = arguments.length;
var i__19785__auto___22162 = (0);
while(true){
if((i__19785__auto___22162 < len__19784__auto___22161)){
args__19791__auto__.push((arguments[i__19785__auto___22162]));

var G__22163 = (i__19785__auto___22162 + (1));
i__19785__auto___22162 = G__22163;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22156 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22154 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156){
return (function (o__21762__auto__,p__21763__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__))){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156))
,offsets__21760__auto__,paths__21758__auto__);
var vec__22160 = latefns22154;
var latefn22155 = cljs.core.nth.call(null,vec__22160,(0),null);
var ret__21766__auto__ = (function (){var collector__21750__auto__ = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156,latefns22154,vec__22160,latefn22155){
return (function (params21737,params_idx21738,vals__21751__auto__,structure,next_fn__21752__auto__){
var late = latefn22155.call(null,params21737,params_idx21738);
var c__21753__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__21752__auto__.call(null,params21737,(params_idx21738 + num_params22156),cljs.core.conj.call(null,vals__21751__auto__,c__21753__auto__),structure);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22156,latefns22154,vec__22160,latefn22155))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21750__auto__,collector__21750__auto__),num_params22156);
})();
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq22150){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22150));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22187 = arguments.length;
var i__19785__auto___22188 = (0);
while(true){
if((i__19785__auto___22188 < len__19784__auto___22187)){
args__19791__auto__.push((arguments[i__19785__auto___22188]));

var G__22189 = (i__19785__auto___22188 + (1));
i__19785__auto___22188 = G__22189;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22182 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22180 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182){
return (function (o__21762__auto__,p__21763__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__)){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182))
,offsets__21760__auto__,paths__21758__auto__);
var vec__22183 = latefns22180;
var latefn22181 = cljs.core.nth.call(null,vec__22183,(0),null);
var ret__21766__auto__ = (function (){var collector__21750__auto__ = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182,latefns22180,vec__22183,latefn22181){
return (function (params21737,params_idx21738,vals__21751__auto__,structure,next_fn__21752__auto__){
var late = latefn22181.call(null,params21737,params_idx21738);
var c__21753__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__21752__auto__.call(null,params21737,(params_idx21738 + num_params22182),cljs.core.conj.call(null,vals__21751__auto__,c__21753__auto__),structure);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22182,latefns22180,vec__22183,latefn22181))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21750__auto__,collector__21750__auto__),num_params22182);
})();
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq22170){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22170));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__21750__auto__ = (function (params21737,params_idx21738,vals__21751__auto__,structure,next_fn__21752__auto__){
var val = (params21737[(params_idx21738 + (0))]);
var c__21753__auto__ = val;
return next_fn__21752__auto__.call(null,params21737,(params_idx21738 + 1),cljs.core.conj.call(null,vals__21751__auto__,c__21753__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__21750__auto__,collector__21750__auto__),1);
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
var len__19784__auto___22209 = arguments.length;
var i__19785__auto___22210 = (0);
while(true){
if((i__19785__auto___22210 < len__19784__auto___22209)){
args__19791__auto__.push((arguments[i__19785__auto___22210]));

var G__22211 = (i__19785__auto___22210 + (1));
i__19785__auto___22210 = G__22211;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22202 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22201 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202){
return (function (o__21762__auto__,p__21763__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__)){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202))
,offsets__21760__auto__,paths__21758__auto__);
var ret__21766__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22202),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201){
return (function (l__21809__auto__){
return l__21809__auto__.call(null,params21737,params_idx21738);
});})(next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201))
,latefns22201);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(temp__4655__auto__){
var selector = temp__4655__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201))
,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22202),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201){
return (function (l__21809__auto__){
return l__21809__auto__.call(null,params21737,params_idx21738);
});})(next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201))
,latefns22201);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(temp__4655__auto__){
var selector = temp__4655__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22202,latefns22201))
),num_params22202);
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq22198){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22198));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args22213 = [];
var len__19784__auto___22216 = arguments.length;
var i__19785__auto___22217 = (0);
while(true){
if((i__19785__auto___22217 < len__19784__auto___22216)){
args22213.push((arguments[i__19785__auto___22217]));

var G__22218 = (i__19785__auto___22217 + (1));
i__19785__auto___22217 = G__22218;
continue;
} else {
}
break;
}

var G__22215 = args22213.length;
switch (G__22215) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22213.length)].join('')));

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
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__21758__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__21759__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__21758__auto__);
var offsets__21760__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__21759__auto__));
var any_params_needed_QMARK___21761__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__21758__auto__)));
var num_params22223 = cljs.core.last.call(null,offsets__21760__auto__);
var latefns22222 = cljs.core.map.call(null,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223){
return (function (o__21762__auto__,p__21763__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__21763__auto__))){
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223){
return (function (params__21764__auto__,params_idx__21765__auto__){
return p__21763__auto__;
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223))
} else {
return ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223){
return (function (params__21764__auto__,params_idx__21765__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__21763__auto__,params__21764__auto__,(params_idx__21765__auto__ + o__21762__auto__));
});
;})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223))
}
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223))
,offsets__21760__auto__,paths__21758__auto__);
var ret__21766__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22223),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (l__21809__auto__){
return l__21809__auto__.call(null,params21737,params_idx21738);
});})(next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
,latefns22222);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (p1__22220_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__22220_SHARP_,structure);
});})(next_fn,compiled_paths,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
,compiled_paths)));
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
,((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (params21737,params_idx21738,vals__21739__auto__,structure,next_fn__21740__auto__){
var next_fn = ((function (paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (structure__21741__auto__){
return next_fn__21740__auto__.call(null,params21737,(params_idx21738 + num_params22223),vals__21739__auto__,structure__21741__auto__);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (l__21809__auto__){
return l__21809__auto__.call(null,params21737,params_idx21738);
});})(next_fn,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
,latefns22222);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222){
return (function (structure__$1,path){
return com.rpl.specter.compiled_transform.call(null,path,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
,structure,compiled_paths);
});})(paths__21758__auto__,needed_params__21759__auto__,offsets__21760__auto__,any_params_needed_QMARK___21761__auto__,num_params22223,latefns22222))
),num_params22223);
if(!(any_params_needed_QMARK___21761__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__21766__auto__,null,(0));
} else {
return ret__21766__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq22221){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22221));
});
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22231 = arguments.length;
var i__19785__auto___22232 = (0);
while(true){
if((i__19785__auto___22232 < len__19784__auto___22231)){
args__19791__auto__.push((arguments[i__19785__auto___22232]));

var G__22233 = (i__19785__auto___22232 + (1));
i__19785__auto___22232 = G__22233;
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

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq22230){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22230));
});
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22237 = arguments.length;
var i__19785__auto___22238 = (0);
while(true){
if((i__19785__auto___22238 < len__19784__auto___22237)){
args__19791__auto__.push((arguments[i__19785__auto___22238]));

var G__22239 = (i__19785__auto___22238 + (1));
i__19785__auto___22238 = G__22239;
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

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq22236){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22236));
});

//# sourceMappingURL=specter.js.map