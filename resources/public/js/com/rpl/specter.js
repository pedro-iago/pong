// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('com.rpl.specter.impl');
goog.require('clojure.set');
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__19791__auto__ = [];
var len__19784__auto___34428 = arguments.length;
var i__19785__auto___34429 = (0);
while(true){
if((i__19785__auto___34429 < len__19784__auto___34428)){
args__19791__auto__.push((arguments[i__19785__auto___34429]));

var G__34430 = (i__19785__auto___34429 + (1));
i__19785__auto___34429 = G__34430;
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

com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq34427){
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34427));
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
var len__19784__auto___34442 = arguments.length;
var i__19785__auto___34443 = (0);
while(true){
if((i__19785__auto___34443 < len__19784__auto___34442)){
args__19791__auto__.push((arguments[i__19785__auto___34443]));

var G__34444 = (i__19785__auto___34443 + (1));
i__19785__auto___34443 = G__34444;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__34435){
var map__34436 = p__34435;
var map__34436__$1 = ((((!((map__34436 == null)))?((((map__34436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34436):map__34436);
var merge_fn = cljs.core.get.call(null,map__34436__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var state = com.rpl.specter.impl.mutable_cell.call(null,null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.compiled_transform.call(null,path,((function (state,map__34436,map__34436__$1,merge_fn){
return (function() { 
var G__34449__delegate = function (args){
var res = cljs.core.apply.call(null,transform_fn,args);
if(cljs.core.truth_(res)){
var vec__34438 = res;
var ret = cljs.core.nth.call(null,vec__34438,(0),null);
var user_ret = cljs.core.nth.call(null,vec__34438,(1),null);
com.rpl.specter.impl.set_cell_BANG_.call(null,state,merge_fn.call(null,com.rpl.specter.impl.get_cell.call(null,state),user_ret));

return ret;
} else {
return cljs.core.last.call(null,args);
}
};
var G__34449 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34450__i = 0, G__34450__a = new Array(arguments.length -  0);
while (G__34450__i < G__34450__a.length) {G__34450__a[G__34450__i] = arguments[G__34450__i + 0]; ++G__34450__i;}
  args = new cljs.core.IndexedSeq(G__34450__a,0);
} 
return G__34449__delegate.call(this,args);};
G__34449.cljs$lang$maxFixedArity = 0;
G__34449.cljs$lang$applyTo = (function (arglist__34451){
var args = cljs.core.seq(arglist__34451);
return G__34449__delegate(args);
});
G__34449.cljs$core$IFn$_invoke$arity$variadic = G__34449__delegate;
return G__34449;
})()
;})(state,map__34436,map__34436__$1,merge_fn))
,structure),com.rpl.specter.impl.get_cell.call(null,state)], null);
});

com.rpl.specter.compiled_replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.compiled_replace_in.cljs$lang$applyTo = (function (seq34431){
var G__34432 = cljs.core.first.call(null,seq34431);
var seq34431__$1 = cljs.core.next.call(null,seq34431);
var G__34433 = cljs.core.first.call(null,seq34431__$1);
var seq34431__$2 = cljs.core.next.call(null,seq34431__$1);
var G__34434 = cljs.core.first.call(null,seq34431__$2);
var seq34431__$3 = cljs.core.next.call(null,seq34431__$2);
return com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$variadic(G__34432,G__34433,G__34434,seq34431__$3);
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
var len__19784__auto___34464 = arguments.length;
var i__19785__auto___34465 = (0);
while(true){
if((i__19785__auto___34465 < len__19784__auto___34464)){
args__19791__auto__.push((arguments[i__19785__auto___34465]));

var G__34467 = (i__19785__auto___34465 + (1));
i__19785__auto___34465 = G__34467;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__34459){
var map__34460 = p__34459;
var map__34460__$1 = ((((!((map__34460 == null)))?((((map__34460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34460):map__34460);
var merge_fn = cljs.core.get.call(null,map__34460__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
return com.rpl.specter.compiled_replace_in.call(null,com.rpl.specter.impl.comp_paths_STAR_.call(null,path),transform_fn,structure,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),merge_fn);
});

com.rpl.specter.replace_in.cljs$lang$maxFixedArity = (3);

com.rpl.specter.replace_in.cljs$lang$applyTo = (function (seq34452){
var G__34453 = cljs.core.first.call(null,seq34452);
var seq34452__$1 = cljs.core.next.call(null,seq34452);
var G__34454 = cljs.core.first.call(null,seq34452__$1);
var seq34452__$2 = cljs.core.next.call(null,seq34452__$1);
var G__34455 = cljs.core.first.call(null,seq34452__$2);
var seq34452__$3 = cljs.core.next.call(null,seq34452__$2);
return com.rpl.specter.replace_in.cljs$core$IFn$_invoke$arity$variadic(G__34453,G__34454,G__34455,seq34452__$3);
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
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 2),vals__20868__auto__,structure__20870__auto__);
});
var start_fn = (params20866[(params_idx20867 + (0))]);
var end_fn = (params20866[(params_idx20867 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 2),vals__20868__auto__,structure__20870__auto__);
});
var start_fn = (params20866[(params_idx20867 + (0))]);
var end_fn = (params20866[(params_idx20867 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start_fn.call(null,structure),end_fn.call(null,structure),next_fn);
})),2);
/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 2),vals__20868__auto__,structure__20870__auto__);
});
var start = (params20866[(params_idx20867 + (0))]);
var end = (params20866[(params_idx20867 + (1))]);
return com.rpl.specter.impl.srange_select.call(null,structure,start,end,next_fn);
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 2),vals__20868__auto__,structure__20870__auto__);
});
var start = (params20866[(params_idx20867 + (0))]);
var end = (params20866[(params_idx20867 + (1))]);
return com.rpl.specter.impl.srange_transform.call(null,structure,start,end,next_fn);
})),2);
com.rpl.specter.BEGINNING = com.rpl.specter.srange.call(null,(0),(0));
com.rpl.specter.END = com.rpl.specter.srange_dynamic.call(null,cljs.core.count,cljs.core.count);
/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var aset = (params20866[(params_idx20867 + (0))]);
return next_fn.call(null,clojure.set.intersection.call(null,structure,aset));
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var aset = (params20866[(params_idx20867 + (0))]);
var subset = clojure.set.intersection.call(null,structure,aset);
var newset = next_fn.call(null,subset);
return clojure.set.union.call(null,clojure.set.difference.call(null,structure,subset),newset);
})),1);
/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var m_keys = (params20866[(params_idx20867 + (0))]);
return next_fn.call(null,cljs.core.select_keys.call(null,structure,m_keys));
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var m_keys = (params20866[(params_idx20867 + (0))]);
var submap = cljs.core.select_keys.call(null,structure,m_keys);
var newmap = next_fn.call(null,submap);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,m_keys),newmap);
})),1);
com.rpl.specter.walker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
return com.rpl.specter.impl.walk_until.call(null,afn,next_fn,structure);
})),1);
com.rpl.specter.codewalker = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
return com.rpl.specter.impl.walk_select.call(null,afn,next_fn,structure);
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
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
var len__19784__auto___34478 = arguments.length;
var i__19785__auto___34479 = (0);
while(true){
if((i__19785__auto___34479 < len__19784__auto___34478)){
args__19791__auto__.push((arguments[i__19785__auto___34479]));

var G__34480 = (i__19785__auto___34479 + (1));
i__19785__auto___34479 = G__34480;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34476 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34474 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476){
return (function (o__20891__auto__,p__20892__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__)){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476))
,offsets__20889__auto__,paths__20887__auto__);
var vec__34477 = latefns34474;
var G__34475 = cljs.core.nth.call(null,vec__34477,(0),null);
var ret__20895__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34476),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475))
;
var late = G__34475.call(null,params20866,params_idx20867);
return next_fn.call(null,com.rpl.specter.compiled_select.call(null,late,structure));
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475))
,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34476),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475))
;
var late = G__34475.call(null,params20866,params_idx20867);
var select_result = com.rpl.specter.compiled_select.call(null,late,structure);
var transformed = next_fn.call(null,select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.call(null,transformed);
return com.rpl.specter.compiled_transform.call(null,late,((function (select_result,transformed,values_to_insert,next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475){
return (function (_){
var next_val = cljs.core.first.call(null,com.rpl.specter.impl.get_cell.call(null,values_to_insert));
com.rpl.specter.impl.update_cell_BANG_.call(null,values_to_insert,cljs.core.rest);

return next_val;
});})(select_result,transformed,values_to_insert,next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475))
,structure);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34476,latefns34474,vec__34477,G__34475))
),num_params34476);
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
}
});

com.rpl.specter.subselect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.subselect.cljs$lang$applyTo = (function (seq34472){
return com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34472));
});
com.rpl.specter.keypath = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var key = (params20866[(params_idx20867 + (0))]);
return next_fn.call(null,cljs.core.get.call(null,structure,key));
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var key = (params20866[(params_idx20867 + (0))]);
return cljs.core.assoc.call(null,structure,key,next_fn.call(null,cljs.core.get.call(null,structure,key)));
})),1);
com.rpl.specter.view = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
return next_fn.call(null,afn.call(null,structure));
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
return next_fn.call(null,afn.call(null,structure));
})),1);
com.rpl.specter.parser = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 2),vals__20868__auto__,structure__20870__auto__);
});
var parse_fn = (params20866[(params_idx20867 + (0))]);
var unparse_fn = (params20866[(params_idx20867 + (1))]);
return next_fn.call(null,parse_fn.call(null,structure));
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 2),vals__20868__auto__,structure__20870__auto__);
});
var parse_fn = (params20866[(params_idx20867 + (0))]);
var unparse_fn = (params20866[(params_idx20867 + (1))]);
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
var len__19784__auto___34489 = arguments.length;
var i__19785__auto___34490 = (0);
while(true){
if((i__19785__auto___34490 < len__19784__auto___34489)){
args__19791__auto__.push((arguments[i__19785__auto___34490]));

var G__34491 = (i__19785__auto___34490 + (1));
i__19785__auto___34490 = G__34491;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34487 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34485 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487){
return (function (o__20891__auto__,p__20892__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__))){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487))
,offsets__20889__auto__,paths__20887__auto__);
var vec__34488 = latefns34485;
var G__34486 = cljs.core.nth.call(null,vec__34488,(0),null);
var ret__20895__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34487),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486))
;
var late = G__34486.call(null,params20866,params_idx20867);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486){
return (function (p1__34482_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__34482_SHARP_);
});})(next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486))
,structure,next_fn);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486))
,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34487),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486))
;
var late = G__34486.call(null,params20866,params_idx20867);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486){
return (function (p1__34483_SHARP_){
return com.rpl.specter.impl.selected_QMARK__STAR_.call(null,late,p1__34483_SHARP_);
});})(next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486))
,structure,next_fn);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34487,latefns34485,vec__34488,G__34486))
),num_params34487);
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
}
});

com.rpl.specter.selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.selected_QMARK_.cljs$lang$applyTo = (function (seq34484){
return com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34484));
});
com.rpl.specter.not_selected_QMARK_ = (function com$rpl$specter$not_selected_QMARK_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___34499 = arguments.length;
var i__19785__auto___34500 = (0);
while(true){
if((i__19785__auto___34500 < len__19784__auto___34499)){
args__19791__auto__.push((arguments[i__19785__auto___34500]));

var G__34501 = (i__19785__auto___34500 + (1));
i__19785__auto___34500 = G__34501;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34497 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34495 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497){
return (function (o__20891__auto__,p__20892__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__)){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497))
,offsets__20889__auto__,paths__20887__auto__);
var vec__34498 = latefns34495;
var G__34496 = cljs.core.nth.call(null,vec__34498,(0),null);
var ret__20895__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34497),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496))
;
var late = G__34496.call(null,params20866,params_idx20867);
return com.rpl.specter.impl.filter_select.call(null,((function (next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496){
return (function (p1__34492_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__34492_SHARP_);
});})(next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496))
,structure,next_fn);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496))
,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34497),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496))
;
var late = G__34496.call(null,params20866,params_idx20867);
return com.rpl.specter.impl.filter_transform.call(null,((function (next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496){
return (function (p1__34493_SHARP_){
return com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,late,p1__34493_SHARP_);
});})(next_fn,late,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496))
,structure,next_fn);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34497,latefns34495,vec__34498,G__34496))
),num_params34497);
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
}
});

com.rpl.specter.not_selected_QMARK_.cljs$lang$maxFixedArity = (0);

com.rpl.specter.not_selected_QMARK_.cljs$lang$applyTo = (function (seq34494){
return com.rpl.specter.not_selected_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34494));
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
var len__19784__auto___34503 = arguments.length;
var i__19785__auto___34504 = (0);
while(true){
if((i__19785__auto___34504 < len__19784__auto___34503)){
args__19791__auto__.push((arguments[i__19785__auto___34504]));

var G__34505 = (i__19785__auto___34504 + (1));
i__19785__auto___34504 = G__34505;
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

com.rpl.specter.filterer.cljs$lang$applyTo = (function (seq34502){
return com.rpl.specter.filterer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34502));
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
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34512 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34510 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512){
return (function (o__20891__auto__,p__20892__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__)){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512))
,offsets__20889__auto__,paths__20887__auto__);
var vec__34513 = latefns34510;
var G__34511 = cljs.core.nth.call(null,vec__34513,(0),null);
var ret__20895__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34512),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511))
;
var late = G__34511.call(null,params20866,params_idx20867);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511))
,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34512),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511))
;
var late = G__34511.call(null,params20866,params_idx20867);
return next_fn.call(null,com.rpl.specter.compiled_transform.call(null,late,update_fn,structure));
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34512,latefns34510,vec__34513,G__34511))
),num_params34512);
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
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
com.rpl.specter.pred = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
return com.rpl.specter.impl.filter_select.call(null,afn,structure,next_fn);
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var afn = (params20866[(params_idx20867 + (0))]);
return com.rpl.specter.impl.filter_transform.call(null,afn,structure,next_fn);
})),1);
/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var v = (params20866[(params_idx20867 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
}),(function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + 1),vals__20868__auto__,structure__20870__auto__);
});
var v = (params20866[(params_idx20867 + (0))]);
return next_fn.call(null,(cljs.core.truth_(structure)?structure:v));
})),1);
com.rpl.specter.NIL__GT_SET = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentHashSet.EMPTY);
com.rpl.specter.NIL__GT_LIST = com.rpl.specter.nil__GT_val.call(null,cljs.core.List.EMPTY);
com.rpl.specter.NIL__GT_VECTOR = com.rpl.specter.nil__GT_val.call(null,cljs.core.PersistentVector.EMPTY);
com.rpl.specter.collect = (function com$rpl$specter$collect(var_args){
var args__19791__auto__ = [];
var len__19784__auto___34529 = arguments.length;
var i__19785__auto___34530 = (0);
while(true){
if((i__19785__auto___34530 < len__19784__auto___34529)){
args__19791__auto__.push((arguments[i__19785__auto___34530]));

var G__34534 = (i__19785__auto___34530 + (1));
i__19785__auto___34530 = G__34534;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34527 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34525 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527){
return (function (o__20891__auto__,p__20892__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__)){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527))
,offsets__20889__auto__,paths__20887__auto__);
var vec__34528 = latefns34525;
var latefn34526 = cljs.core.nth.call(null,vec__34528,(0),null);
var ret__20895__auto__ = (function (){var collector__20879__auto__ = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527,latefns34525,vec__34528,latefn34526){
return (function (params20866,params_idx20867,vals__20880__auto__,structure,next_fn__20881__auto__){
var late = latefn34526.call(null,params20866,params_idx20867);
var c__20882__auto__ = com.rpl.specter.compiled_select.call(null,late,structure);
return next_fn__20881__auto__.call(null,params20866,(params_idx20867 + num_params34527),cljs.core.conj.call(null,vals__20880__auto__,c__20882__auto__),structure);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34527,latefns34525,vec__34528,latefn34526))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__20879__auto__,collector__20879__auto__),num_params34527);
})();
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
}
});

com.rpl.specter.collect.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect.cljs$lang$applyTo = (function (seq34521){
return com.rpl.specter.collect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34521));
});
com.rpl.specter.collect_one = (function com$rpl$specter$collect_one(var_args){
var args__19791__auto__ = [];
var len__19784__auto___34540 = arguments.length;
var i__19785__auto___34541 = (0);
while(true){
if((i__19785__auto___34541 < len__19784__auto___34540)){
args__19791__auto__.push((arguments[i__19785__auto___34541]));

var G__34542 = (i__19785__auto___34541 + (1));
i__19785__auto___34541 = G__34542;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic = (function (path){
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null));
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34538 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34536 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538){
return (function (o__20891__auto__,p__20892__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__)){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538))
,offsets__20889__auto__,paths__20887__auto__);
var vec__34539 = latefns34536;
var latefn34537 = cljs.core.nth.call(null,vec__34539,(0),null);
var ret__20895__auto__ = (function (){var collector__20879__auto__ = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538,latefns34536,vec__34539,latefn34537){
return (function (params20866,params_idx20867,vals__20880__auto__,structure,next_fn__20881__auto__){
var late = latefn34537.call(null,params20866,params_idx20867);
var c__20882__auto__ = com.rpl.specter.compiled_select_one.call(null,late,structure);
return next_fn__20881__auto__.call(null,params20866,(params_idx20867 + num_params34538),cljs.core.conj.call(null,vals__20880__auto__,c__20882__auto__),structure);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34538,latefns34536,vec__34539,latefn34537))
;
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__20879__auto__,collector__20879__auto__),num_params34538);
})();
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
}
});

com.rpl.specter.collect_one.cljs$lang$maxFixedArity = (0);

com.rpl.specter.collect_one.cljs$lang$applyTo = (function (seq34535){
return com.rpl.specter.collect_one.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34535));
});
/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = (function (){var collector__20879__auto__ = (function (params20866,params_idx20867,vals__20880__auto__,structure,next_fn__20881__auto__){
var val = (params20866[(params_idx20867 + (0))]);
var c__20882__auto__ = val;
return next_fn__20881__auto__.call(null,params20866,(params_idx20867 + 1),cljs.core.conj.call(null,vals__20880__auto__,c__20882__auto__),structure);
});
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,collector__20879__auto__,collector__20879__auto__),1);
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
var len__19784__auto___34546 = arguments.length;
var i__19785__auto___34547 = (0);
while(true){
if((i__19785__auto___34547 < len__19784__auto___34546)){
args__19791__auto__.push((arguments[i__19785__auto___34547]));

var G__34548 = (i__19785__auto___34547 + (1));
i__19785__auto___34547 = G__34548;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic = (function (conds){
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,conds);
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34545 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34544 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545){
return (function (o__20891__auto__,p__20892__auto__){
if(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__)){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545))
,offsets__20889__auto__,paths__20887__auto__);
var ret__20895__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34545),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544){
return (function (l__20938__auto__){
return l__20938__auto__.call(null,params20866,params_idx20867);
});})(next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544))
,latefns34544);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(temp__4655__auto__){
var selector = temp__4655__auto__;
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,com.rpl.specter.compiled_select.call(null,selector,structure)));
} else {
return null;
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544))
,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34545),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544){
return (function (l__20938__auto__){
return l__20938__auto__.call(null,params20866,params_idx20867);
});})(next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544))
,latefns34544);
var temp__4655__auto__ = com.rpl.specter.impl.retrieve_cond_selector.call(null,compiled_paths,structure);
if(temp__4655__auto__){
var selector = temp__4655__auto__;
return com.rpl.specter.compiled_transform.call(null,selector,next_fn,structure);
} else {
return structure;
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34545,latefns34544))
),num_params34545);
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
}
});

com.rpl.specter.cond_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.cond_path.cljs$lang$applyTo = (function (seq34543){
return com.rpl.specter.cond_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34543));
});
/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = (function com$rpl$specter$if_path(var_args){
var args34549 = [];
var len__19784__auto___34553 = arguments.length;
var i__19785__auto___34554 = (0);
while(true){
if((i__19785__auto___34554 < len__19784__auto___34553)){
args34549.push((arguments[i__19785__auto___34554]));

var G__34557 = (i__19785__auto___34554 + (1));
i__19785__auto___34554 = G__34557;
continue;
} else {
}
break;
}

var G__34551 = args34549.length;
switch (G__34551) {
case 2:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34549.length)].join('')));

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
var len__19784__auto___34567 = arguments.length;
var i__19785__auto___34568 = (0);
while(true){
if((i__19785__auto___34568 < len__19784__auto___34567)){
args__19791__auto__.push((arguments[i__19785__auto___34568]));

var G__34569 = (i__19785__auto___34568 + (1));
i__19785__auto___34568 = G__34569;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic = (function (paths){
var paths__20887__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.comp_paths_STAR_,paths);
var needed_params__20888__auto__ = cljs.core.map.call(null,com.rpl.specter.impl.num_needed_params,paths__20887__auto__);
var offsets__20889__auto__ = cljs.core.cons.call(null,(0),cljs.core.reductions.call(null,cljs.core._PLUS_,needed_params__20888__auto__));
var any_params_needed_QMARK___20890__auto__ = !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,com.rpl.specter.impl.params_needed_path_QMARK_,paths__20887__auto__)));
var num_params34564 = cljs.core.last.call(null,offsets__20889__auto__);
var latefns34563 = cljs.core.map.call(null,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564){
return (function (o__20891__auto__,p__20892__auto__){
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,p__20892__auto__))){
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564){
return (function (params__20893__auto__,params_idx__20894__auto__){
return p__20892__auto__;
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564))
} else {
return ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564){
return (function (params__20893__auto__,params_idx__20894__auto__){
return com.rpl.specter.impl.bind_params_STAR_.call(null,p__20892__auto__,params__20893__auto__,(params_idx__20894__auto__ + o__20891__auto__));
});
;})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564))
}
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564))
,offsets__20889__auto__,paths__20887__auto__);
var ret__20895__auto__ = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34564),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (l__20938__auto__){
return l__20938__auto__.call(null,params20866,params_idx20867);
});})(next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
,latefns34563);
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,cljs.core.mapcat.call(null,((function (next_fn,compiled_paths,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (p1__34560_SHARP_){
return com.rpl.specter.compiled_select.call(null,p1__34560_SHARP_,structure);
});})(next_fn,compiled_paths,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
,compiled_paths)));
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
,((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (params20866,params_idx20867,vals__20868__auto__,structure,next_fn__20869__auto__){
var next_fn = ((function (paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (structure__20870__auto__){
return next_fn__20869__auto__.call(null,params20866,(params_idx20867 + num_params34564),vals__20868__auto__,structure__20870__auto__);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
;
var compiled_paths = cljs.core.map.call(null,((function (next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (l__20938__auto__){
return l__20938__auto__.call(null,params20866,params_idx20867);
});})(next_fn,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
,latefns34563);
return cljs.core.reduce.call(null,((function (next_fn,compiled_paths,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563){
return (function (structure__$1,path){
return com.rpl.specter.compiled_transform.call(null,path,next_fn,structure__$1);
});})(next_fn,compiled_paths,paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
,structure,compiled_paths);
});})(paths__20887__auto__,needed_params__20888__auto__,offsets__20889__auto__,any_params_needed_QMARK___20890__auto__,num_params34564,latefns34563))
),num_params34564);
if(!(any_params_needed_QMARK___20890__auto__)){
return com.rpl.specter.impl.bind_params_STAR_.call(null,ret__20895__auto__,null,(0));
} else {
return ret__20895__auto__;
}
});

com.rpl.specter.multi_path.cljs$lang$maxFixedArity = (0);

com.rpl.specter.multi_path.cljs$lang$applyTo = (function (seq34561){
return com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34561));
});
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = (function com$rpl$specter$stay_then_continue(var_args){
var args__19791__auto__ = [];
var len__19784__auto___34578 = arguments.length;
var i__19785__auto___34579 = (0);
while(true){
if((i__19785__auto___34579 < len__19784__auto___34578)){
args__19791__auto__.push((arguments[i__19785__auto___34579]));

var G__34580 = (i__19785__auto___34579 + (1));
i__19785__auto___34579 = G__34580;
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

com.rpl.specter.stay_then_continue.cljs$lang$applyTo = (function (seq34577){
return com.rpl.specter.stay_then_continue.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34577));
});
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = (function com$rpl$specter$continue_then_stay(var_args){
var args__19791__auto__ = [];
var len__19784__auto___34582 = arguments.length;
var i__19785__auto___34583 = (0);
while(true){
if((i__19785__auto___34583 < len__19784__auto___34582)){
args__19791__auto__.push((arguments[i__19785__auto___34583]));

var G__34584 = (i__19785__auto___34583 + (1));
i__19785__auto___34583 = G__34584;
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

com.rpl.specter.continue_then_stay.cljs$lang$applyTo = (function (seq34581){
return com.rpl.specter.continue_then_stay.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34581));
});

//# sourceMappingURL=specter.js.map