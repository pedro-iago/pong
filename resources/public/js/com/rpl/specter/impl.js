// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.string');
com.rpl.specter.impl.spy = (function com$rpl$specter$impl$spy(e){
cljs.core.println.call(null,e);

return e;
});

/**
 * @interface
 */
com.rpl.specter.impl.PathComposer = function(){};

com.rpl.specter.impl.comp_paths_STAR_ = (function com$rpl$specter$impl$comp_paths_STAR_(paths){
if((!((paths == null))) && (!((paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 == null)))){
return paths.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1(paths);
} else {
var x__19381__auto__ = (((paths == null))?null:paths);
var m__19382__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,paths);
} else {
var m__19382__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,paths);
} else {
throw cljs.core.missing_protocol.call(null,"PathComposer.comp-paths*",paths);
}
}
}
});

com.rpl.specter.impl.smart_str_STAR_ = (function com$rpl$specter$impl$smart_str_STAR_(o){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.pr_str.call(null,o);
} else {
return [cljs.core.str(o)].join('');
}
});
com.rpl.specter.impl.smart_str = (function com$rpl$specter$impl$smart_str(var_args){
var args__19791__auto__ = [];
var len__19784__auto___20375 = arguments.length;
var i__19785__auto___20376 = (0);
while(true){
if((i__19785__auto___20376 < len__19784__auto___20375)){
args__19791__auto__.push((arguments[i__19785__auto___20376]));

var G__20377 = (i__19785__auto___20376 + (1));
i__19785__auto___20376 = G__20377;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq20374){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20374));
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__19791__auto__ = [];
var len__19784__auto___20379 = arguments.length;
var i__19785__auto___20380 = (0);
while(true){
if((i__19785__auto___20380 < len__19784__auto___20379)){
args__19791__auto__.push((arguments[i__19785__auto___20380]));

var G__20381 = (i__19785__auto___20380 + (1));
i__19785__auto___20380 = G__20381;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq20378){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20378));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__19654__auto__ = cljs.core.system_time.call(null);
var ret__19655__auto__ = (function (){var n__19629__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__19629__auto__)){
afn.call(null);

var G__20382 = (_ + (1));
_ = G__20382;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__19654__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__19655__auto__;
});

/**
* @constructor
*/
com.rpl.specter.impl.ExecutorFunctions = (function (type,select_executor,transform_executor){
this.type = type;
this.select_executor = select_executor;
this.transform_executor = transform_executor;
})

com.rpl.specter.impl.ExecutorFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"select-executor","select-executor",140452237,null),new cljs.core.Symbol(null,"transform-executor","transform-executor",-31221519,null)], null);
});

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$type = true;

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorStr = "com.rpl.specter.impl/ExecutorFunctions";

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"com.rpl.specter.impl/ExecutorFunctions");
});

com.rpl.specter.impl.__GT_ExecutorFunctions = (function com$rpl$specter$impl$__GT_ExecutorFunctions(type,select_executor,transform_executor){
return (new com.rpl.specter.impl.ExecutorFunctions(type,select_executor,transform_executor));
});

com.rpl.specter.impl.RichPathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"richpath","richpath",-150197948),(function (params,params_idx,selector,structure){
return selector.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(!(cljs.core.empty_QMARK_.call(null,vals))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,vals,structure__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,params,params_idx,cljs.core.PersistentVector.EMPTY,structure,(function (_,___$1,vals,structure__$1){
if(cljs.core.empty_QMARK_.call(null,vals)){
return transform_fn.call(null,structure__$1);
} else {
return cljs.core.apply.call(null,transform_fn,cljs.core.conj.call(null,vals,structure__$1));
}
}));
}));
com.rpl.specter.impl.StructurePathExecutor = com.rpl.specter.impl.__GT_ExecutorFunctions.call(null,new cljs.core.Keyword(null,"spath","spath",-1857758005),(function (params,params_idx,selector,structure){
return selector.call(null,structure,(function (structure__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [structure__$1], null);
}));
}),(function (params,params_idx,transformer,transform_fn,structure){
return transformer.call(null,structure,transform_fn);
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.TransformFunctions = (function (executors,selector,transformer,__meta,__extmap,__hash){
this.executors = executors;
this.selector = selector;
this.transformer = transformer;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19340__auto__,k__19341__auto__){
var self__ = this;
var this__19340__auto____$1 = this;
return cljs.core._lookup.call(null,this__19340__auto____$1,k__19341__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19342__auto__,k20384,else__19343__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
var G__20389 = (((k20384 instanceof cljs.core.Keyword))?k20384.fqn:null);
switch (G__20389) {
case "executors":
return self__.executors;

break;
case "selector":
return self__.selector;

break;
case "transformer":
return self__.transformer;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20384,else__19343__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19354__auto__,writer__19355__auto__,opts__19356__auto__){
var self__ = this;
var this__19354__auto____$1 = this;
var pr_pair__19357__auto__ = ((function (this__19354__auto____$1){
return (function (keyval__19358__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19355__auto__,cljs.core.pr_writer,""," ","",opts__19356__auto__,keyval__19358__auto__);
});})(this__19354__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19355__auto__,pr_pair__19357__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__19356__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20383){
var self__ = this;
var G__20383__$1 = this;
return (new cljs.core.RecordIter((0),G__20383__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19338__auto__){
var self__ = this;
var this__19338__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19334__auto__){
var self__ = this;
var this__19334__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19344__auto__){
var self__ = this;
var this__19344__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19335__auto__){
var self__ = this;
var this__19335__auto____$1 = this;
var h__19161__auto__ = self__.__hash;
if(!((h__19161__auto__ == null))){
return h__19161__auto__;
} else {
var h__19161__auto____$1 = cljs.core.hash_imap.call(null,this__19335__auto____$1);
self__.__hash = h__19161__auto____$1;

return h__19161__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19336__auto__,other__19337__auto__){
var self__ = this;
var this__19336__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18714__auto__ = other__19337__auto__;
if(cljs.core.truth_(and__18714__auto__)){
var and__18714__auto____$1 = (this__19336__auto____$1.constructor === other__19337__auto__.constructor);
if(and__18714__auto____$1){
return cljs.core.equiv_map.call(null,this__19336__auto____$1,other__19337__auto__);
} else {
return and__18714__auto____$1;
}
} else {
return and__18714__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19349__auto__,k__19350__auto__){
var self__ = this;
var this__19349__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__19350__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19349__auto____$1),self__.__meta),k__19350__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19350__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19347__auto__,k__19348__auto__,G__20383){
var self__ = this;
var this__19347__auto____$1 = this;
var pred__20394 = cljs.core.keyword_identical_QMARK_;
var expr__20395 = k__19348__auto__;
if(cljs.core.truth_(pred__20394.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__20395))){
return (new com.rpl.specter.impl.TransformFunctions(G__20383,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20394.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__20395))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__20383,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__20394.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__20395))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__20383,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19348__auto__,G__20383),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19352__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19339__auto__,G__20383){
var self__ = this;
var this__19339__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__20383,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19345__auto__,entry__19346__auto__){
var self__ = this;
var this__19345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19346__auto__)){
return cljs.core._assoc.call(null,this__19345__auto____$1,cljs.core._nth.call(null,entry__19346__auto__,(0)),cljs.core._nth.call(null,entry__19346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19345__auto____$1,entry__19346__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__19374__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__19374__auto__,writer__19375__auto__){
return cljs.core._write.call(null,writer__19375__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__20385){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__20385),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__20385),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__20385),null,cljs.core.dissoc.call(null,G__20385,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.CompiledPath = (function (transform_fns,params,params_idx,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.params = params;
this.params_idx = params_idx;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19340__auto__,k__19341__auto__){
var self__ = this;
var this__19340__auto____$1 = this;
return cljs.core._lookup.call(null,this__19340__auto____$1,k__19341__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19342__auto__,k20399,else__19343__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
var G__20401 = (((k20399 instanceof cljs.core.Keyword))?k20399.fqn:null);
switch (G__20401) {
case "transform-fns":
return self__.transform_fns;

break;
case "params":
return self__.params;

break;
case "params-idx":
return self__.params_idx;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20399,else__19343__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19354__auto__,writer__19355__auto__,opts__19356__auto__){
var self__ = this;
var this__19354__auto____$1 = this;
var pr_pair__19357__auto__ = ((function (this__19354__auto____$1){
return (function (keyval__19358__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19355__auto__,cljs.core.pr_writer,""," ","",opts__19356__auto__,keyval__19358__auto__);
});})(this__19354__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19355__auto__,pr_pair__19357__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__19356__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20398){
var self__ = this;
var G__20398__$1 = this;
return (new cljs.core.RecordIter((0),G__20398__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19338__auto__){
var self__ = this;
var this__19338__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19334__auto__){
var self__ = this;
var this__19334__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19344__auto__){
var self__ = this;
var this__19344__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19335__auto__){
var self__ = this;
var this__19335__auto____$1 = this;
var h__19161__auto__ = self__.__hash;
if(!((h__19161__auto__ == null))){
return h__19161__auto__;
} else {
var h__19161__auto____$1 = cljs.core.hash_imap.call(null,this__19335__auto____$1);
self__.__hash = h__19161__auto____$1;

return h__19161__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19336__auto__,other__19337__auto__){
var self__ = this;
var this__19336__auto____$1 = this;
if((function (){var and__18714__auto__ = other__19337__auto__;
if(and__18714__auto__){
var and__18714__auto____$1 = (this__19336__auto____$1.constructor === other__19337__auto__.constructor);
if(and__18714__auto____$1){
return cljs.core.equiv_map.call(null,this__19336__auto____$1,other__19337__auto__);
} else {
return and__18714__auto____$1;
}
} else {
return and__18714__auto__;
}
})()){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19349__auto__,k__19350__auto__){
var self__ = this;
var this__19349__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__19350__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19349__auto____$1),self__.__meta),k__19350__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19350__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19347__auto__,k__19348__auto__,G__20398){
var self__ = this;
var this__19347__auto____$1 = this;
var pred__20402 = cljs.core.keyword_identical_QMARK_;
var expr__20403 = k__19348__auto__;
if(pred__20402.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__20403)){
return (new com.rpl.specter.impl.CompiledPath(G__20398,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(pred__20402.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__20403)){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__20398,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(pred__20402.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__20403)){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__20398,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19348__auto__,G__20398),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19352__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19339__auto__,G__20398){
var self__ = this;
var this__19339__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__20398,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19345__auto__,entry__19346__auto__){
var self__ = this;
var this__19345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19346__auto__)){
return cljs.core._assoc.call(null,this__19345__auto____$1,cljs.core._nth.call(null,entry__19346__auto__,(0)),cljs.core._nth.call(null,entry__19346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19345__auto____$1,entry__19346__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__19374__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__19374__auto__,writer__19375__auto__){
return cljs.core._write.call(null,writer__19375__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__20400){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__20400),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__20400),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__20400),null,cljs.core.dissoc.call(null,G__20400,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
});

com.rpl.specter.impl.compiled_path_QMARK_ = (function com$rpl$specter$impl$compiled_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.CompiledPath);
});
com.rpl.specter.impl.no_params_compiled_path = (function com$rpl$specter$impl$no_params_compiled_path(transform_fns){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,transform_fns,null,(0));
});
com.rpl.specter.impl.fast_object_array = (function com$rpl$specter$impl$fast_object_array(i){
return cljs.core.object_array.call(null,i);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
com.rpl.specter.impl.ParamsNeededPath = (function (transform_fns,num_needed_params,__meta,__extmap,__hash){
this.transform_fns = transform_fns;
this.num_needed_params = num_needed_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19340__auto__,k__19341__auto__){
var self__ = this;
var this__19340__auto____$1 = this;
return cljs.core._lookup.call(null,this__19340__auto____$1,k__19341__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19342__auto__,k20618,else__19343__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
var G__20621 = (((k20618 instanceof cljs.core.Keyword))?k20618.fqn:null);
switch (G__20621) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k20618,else__19343__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19354__auto__,writer__19355__auto__,opts__19356__auto__){
var self__ = this;
var this__19354__auto____$1 = this;
var pr_pair__19357__auto__ = ((function (this__19354__auto____$1){
return (function (keyval__19358__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19355__auto__,cljs.core.pr_writer,""," ","",opts__19356__auto__,keyval__19358__auto__);
});})(this__19354__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19355__auto__,pr_pair__19357__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__19356__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20617){
var self__ = this;
var G__20617__$1 = this;
return (new cljs.core.RecordIter((0),G__20617__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__20626 = null;
var G__20626__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__2 = (function (self__,G__20407){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(1));
(array20406[(0)] = G__20407);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__3 = (function (self__,G__20408,G__20409){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(2));
(array20406[(0)] = G__20408);

(array20406[(1)] = G__20409);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__4 = (function (self__,G__20410,G__20411,G__20412){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(3));
(array20406[(0)] = G__20410);

(array20406[(1)] = G__20411);

(array20406[(2)] = G__20412);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__5 = (function (self__,G__20413,G__20414,G__20415,G__20416){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(4));
(array20406[(0)] = G__20413);

(array20406[(1)] = G__20414);

(array20406[(2)] = G__20415);

(array20406[(3)] = G__20416);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__6 = (function (self__,G__20417,G__20418,G__20419,G__20420,G__20421){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(5));
(array20406[(0)] = G__20417);

(array20406[(1)] = G__20418);

(array20406[(2)] = G__20419);

(array20406[(3)] = G__20420);

(array20406[(4)] = G__20421);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__7 = (function (self__,G__20422,G__20423,G__20424,G__20425,G__20426,G__20427){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(6));
(array20406[(0)] = G__20422);

(array20406[(1)] = G__20423);

(array20406[(2)] = G__20424);

(array20406[(3)] = G__20425);

(array20406[(4)] = G__20426);

(array20406[(5)] = G__20427);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__8 = (function (self__,G__20428,G__20429,G__20430,G__20431,G__20432,G__20433,G__20434){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(7));
(array20406[(0)] = G__20428);

(array20406[(1)] = G__20429);

(array20406[(2)] = G__20430);

(array20406[(3)] = G__20431);

(array20406[(4)] = G__20432);

(array20406[(5)] = G__20433);

(array20406[(6)] = G__20434);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__9 = (function (self__,G__20435,G__20436,G__20437,G__20438,G__20439,G__20440,G__20441,G__20442){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(8));
(array20406[(0)] = G__20435);

(array20406[(1)] = G__20436);

(array20406[(2)] = G__20437);

(array20406[(3)] = G__20438);

(array20406[(4)] = G__20439);

(array20406[(5)] = G__20440);

(array20406[(6)] = G__20441);

(array20406[(7)] = G__20442);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__10 = (function (self__,G__20443,G__20444,G__20445,G__20446,G__20447,G__20448,G__20449,G__20450,G__20451){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(9));
(array20406[(0)] = G__20443);

(array20406[(1)] = G__20444);

(array20406[(2)] = G__20445);

(array20406[(3)] = G__20446);

(array20406[(4)] = G__20447);

(array20406[(5)] = G__20448);

(array20406[(6)] = G__20449);

(array20406[(7)] = G__20450);

(array20406[(8)] = G__20451);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__11 = (function (self__,G__20452,G__20453,G__20454,G__20455,G__20456,G__20457,G__20458,G__20459,G__20460,G__20461){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(10));
(array20406[(0)] = G__20452);

(array20406[(1)] = G__20453);

(array20406[(2)] = G__20454);

(array20406[(3)] = G__20455);

(array20406[(4)] = G__20456);

(array20406[(5)] = G__20457);

(array20406[(6)] = G__20458);

(array20406[(7)] = G__20459);

(array20406[(8)] = G__20460);

(array20406[(9)] = G__20461);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__12 = (function (self__,G__20462,G__20463,G__20464,G__20465,G__20466,G__20467,G__20468,G__20469,G__20470,G__20471,G__20472){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(11));
(array20406[(0)] = G__20462);

(array20406[(1)] = G__20463);

(array20406[(2)] = G__20464);

(array20406[(3)] = G__20465);

(array20406[(4)] = G__20466);

(array20406[(5)] = G__20467);

(array20406[(6)] = G__20468);

(array20406[(7)] = G__20469);

(array20406[(8)] = G__20470);

(array20406[(9)] = G__20471);

(array20406[(10)] = G__20472);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__13 = (function (self__,G__20473,G__20474,G__20475,G__20476,G__20477,G__20478,G__20479,G__20480,G__20481,G__20482,G__20483,G__20484){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(12));
(array20406[(0)] = G__20473);

(array20406[(1)] = G__20474);

(array20406[(2)] = G__20475);

(array20406[(3)] = G__20476);

(array20406[(4)] = G__20477);

(array20406[(5)] = G__20478);

(array20406[(6)] = G__20479);

(array20406[(7)] = G__20480);

(array20406[(8)] = G__20481);

(array20406[(9)] = G__20482);

(array20406[(10)] = G__20483);

(array20406[(11)] = G__20484);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__14 = (function (self__,G__20485,G__20486,G__20487,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20497){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(13));
(array20406[(0)] = G__20485);

(array20406[(1)] = G__20486);

(array20406[(2)] = G__20487);

(array20406[(3)] = G__20488);

(array20406[(4)] = G__20489);

(array20406[(5)] = G__20490);

(array20406[(6)] = G__20491);

(array20406[(7)] = G__20492);

(array20406[(8)] = G__20493);

(array20406[(9)] = G__20494);

(array20406[(10)] = G__20495);

(array20406[(11)] = G__20496);

(array20406[(12)] = G__20497);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__15 = (function (self__,G__20498,G__20499,G__20500,G__20501,G__20502,G__20503,G__20504,G__20505,G__20506,G__20507,G__20508,G__20509,G__20510,G__20511){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(14));
(array20406[(0)] = G__20498);

(array20406[(1)] = G__20499);

(array20406[(2)] = G__20500);

(array20406[(3)] = G__20501);

(array20406[(4)] = G__20502);

(array20406[(5)] = G__20503);

(array20406[(6)] = G__20504);

(array20406[(7)] = G__20505);

(array20406[(8)] = G__20506);

(array20406[(9)] = G__20507);

(array20406[(10)] = G__20508);

(array20406[(11)] = G__20509);

(array20406[(12)] = G__20510);

(array20406[(13)] = G__20511);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__16 = (function (self__,G__20512,G__20513,G__20514,G__20515,G__20516,G__20517,G__20518,G__20519,G__20520,G__20521,G__20522,G__20523,G__20524,G__20525,G__20526){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(15));
(array20406[(0)] = G__20512);

(array20406[(1)] = G__20513);

(array20406[(2)] = G__20514);

(array20406[(3)] = G__20515);

(array20406[(4)] = G__20516);

(array20406[(5)] = G__20517);

(array20406[(6)] = G__20518);

(array20406[(7)] = G__20519);

(array20406[(8)] = G__20520);

(array20406[(9)] = G__20521);

(array20406[(10)] = G__20522);

(array20406[(11)] = G__20523);

(array20406[(12)] = G__20524);

(array20406[(13)] = G__20525);

(array20406[(14)] = G__20526);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__17 = (function (self__,G__20527,G__20528,G__20529,G__20530,G__20531,G__20532,G__20533,G__20534,G__20535,G__20536,G__20537,G__20538,G__20539,G__20540,G__20541,G__20542){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(16));
(array20406[(0)] = G__20527);

(array20406[(1)] = G__20528);

(array20406[(2)] = G__20529);

(array20406[(3)] = G__20530);

(array20406[(4)] = G__20531);

(array20406[(5)] = G__20532);

(array20406[(6)] = G__20533);

(array20406[(7)] = G__20534);

(array20406[(8)] = G__20535);

(array20406[(9)] = G__20536);

(array20406[(10)] = G__20537);

(array20406[(11)] = G__20538);

(array20406[(12)] = G__20539);

(array20406[(13)] = G__20540);

(array20406[(14)] = G__20541);

(array20406[(15)] = G__20542);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__18 = (function (self__,G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20553,G__20554,G__20555,G__20556,G__20557,G__20558,G__20559){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(17));
(array20406[(0)] = G__20543);

(array20406[(1)] = G__20544);

(array20406[(2)] = G__20545);

(array20406[(3)] = G__20546);

(array20406[(4)] = G__20547);

(array20406[(5)] = G__20548);

(array20406[(6)] = G__20549);

(array20406[(7)] = G__20550);

(array20406[(8)] = G__20551);

(array20406[(9)] = G__20552);

(array20406[(10)] = G__20553);

(array20406[(11)] = G__20554);

(array20406[(12)] = G__20555);

(array20406[(13)] = G__20556);

(array20406[(14)] = G__20557);

(array20406[(15)] = G__20558);

(array20406[(16)] = G__20559);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__19 = (function (self__,G__20560,G__20561,G__20562,G__20563,G__20564,G__20565,G__20566,G__20567,G__20568,G__20569,G__20570,G__20571,G__20572,G__20573,G__20574,G__20575,G__20576,G__20577){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(18));
(array20406[(0)] = G__20560);

(array20406[(1)] = G__20561);

(array20406[(2)] = G__20562);

(array20406[(3)] = G__20563);

(array20406[(4)] = G__20564);

(array20406[(5)] = G__20565);

(array20406[(6)] = G__20566);

(array20406[(7)] = G__20567);

(array20406[(8)] = G__20568);

(array20406[(9)] = G__20569);

(array20406[(10)] = G__20570);

(array20406[(11)] = G__20571);

(array20406[(12)] = G__20572);

(array20406[(13)] = G__20573);

(array20406[(14)] = G__20574);

(array20406[(15)] = G__20575);

(array20406[(16)] = G__20576);

(array20406[(17)] = G__20577);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__20 = (function (self__,G__20578,G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586,G__20587,G__20588,G__20589,G__20590,G__20591,G__20592,G__20593,G__20594,G__20595,G__20596){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(19));
(array20406[(0)] = G__20578);

(array20406[(1)] = G__20579);

(array20406[(2)] = G__20580);

(array20406[(3)] = G__20581);

(array20406[(4)] = G__20582);

(array20406[(5)] = G__20583);

(array20406[(6)] = G__20584);

(array20406[(7)] = G__20585);

(array20406[(8)] = G__20586);

(array20406[(9)] = G__20587);

(array20406[(10)] = G__20588);

(array20406[(11)] = G__20589);

(array20406[(12)] = G__20590);

(array20406[(13)] = G__20591);

(array20406[(14)] = G__20592);

(array20406[(15)] = G__20593);

(array20406[(16)] = G__20594);

(array20406[(17)] = G__20595);

(array20406[(18)] = G__20596);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__21 = (function (self__,G__20597,G__20598,G__20599,G__20600,G__20601,G__20602,G__20603,G__20604,G__20605,G__20606,G__20607,G__20608,G__20609,G__20610,G__20611,G__20612,G__20613,G__20614,G__20615,G__20616){
var self__ = this;
var self____$1 = this;
var this__20324__auto__ = self____$1;
var array20406 = cljs.core.object_array.call(null,(20));
(array20406[(0)] = G__20597);

(array20406[(1)] = G__20598);

(array20406[(2)] = G__20599);

(array20406[(3)] = G__20600);

(array20406[(4)] = G__20601);

(array20406[(5)] = G__20602);

(array20406[(6)] = G__20603);

(array20406[(7)] = G__20604);

(array20406[(8)] = G__20605);

(array20406[(9)] = G__20606);

(array20406[(10)] = G__20607);

(array20406[(11)] = G__20608);

(array20406[(12)] = G__20609);

(array20406[(13)] = G__20610);

(array20406[(14)] = G__20611);

(array20406[(15)] = G__20612);

(array20406[(16)] = G__20613);

(array20406[(17)] = G__20614);

(array20406[(18)] = G__20615);

(array20406[(19)] = G__20616);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});
var G__20626__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__20626 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__20626__1.call(this,self__);
case 2:
return G__20626__2.call(this,self__,p01);
case 3:
return G__20626__3.call(this,self__,p01,p02);
case 4:
return G__20626__4.call(this,self__,p01,p02,p03);
case 5:
return G__20626__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__20626__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__20626__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__20626__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__20626__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__20626__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__20626__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__20626__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__20626__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__20626__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__20626__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__20626__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__20626__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__20626__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__20626__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__20626__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__20626__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__20626__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20626.cljs$core$IFn$_invoke$arity$1 = G__20626__1;
G__20626.cljs$core$IFn$_invoke$arity$2 = G__20626__2;
G__20626.cljs$core$IFn$_invoke$arity$3 = G__20626__3;
G__20626.cljs$core$IFn$_invoke$arity$4 = G__20626__4;
G__20626.cljs$core$IFn$_invoke$arity$5 = G__20626__5;
G__20626.cljs$core$IFn$_invoke$arity$6 = G__20626__6;
G__20626.cljs$core$IFn$_invoke$arity$7 = G__20626__7;
G__20626.cljs$core$IFn$_invoke$arity$8 = G__20626__8;
G__20626.cljs$core$IFn$_invoke$arity$9 = G__20626__9;
G__20626.cljs$core$IFn$_invoke$arity$10 = G__20626__10;
G__20626.cljs$core$IFn$_invoke$arity$11 = G__20626__11;
G__20626.cljs$core$IFn$_invoke$arity$12 = G__20626__12;
G__20626.cljs$core$IFn$_invoke$arity$13 = G__20626__13;
G__20626.cljs$core$IFn$_invoke$arity$14 = G__20626__14;
G__20626.cljs$core$IFn$_invoke$arity$15 = G__20626__15;
G__20626.cljs$core$IFn$_invoke$arity$16 = G__20626__16;
G__20626.cljs$core$IFn$_invoke$arity$17 = G__20626__17;
G__20626.cljs$core$IFn$_invoke$arity$18 = G__20626__18;
G__20626.cljs$core$IFn$_invoke$arity$19 = G__20626__19;
G__20626.cljs$core$IFn$_invoke$arity$20 = G__20626__20;
G__20626.cljs$core$IFn$_invoke$arity$21 = G__20626__21;
G__20626.cljs$core$IFn$_invoke$arity$22 = G__20626__22;
return G__20626;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args20620){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args20620)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__20407){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(1));
(array20406[(0)] = G__20407);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__20408,G__20409){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(2));
(array20406[(0)] = G__20408);

(array20406[(1)] = G__20409);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__20410,G__20411,G__20412){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(3));
(array20406[(0)] = G__20410);

(array20406[(1)] = G__20411);

(array20406[(2)] = G__20412);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__20413,G__20414,G__20415,G__20416){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(4));
(array20406[(0)] = G__20413);

(array20406[(1)] = G__20414);

(array20406[(2)] = G__20415);

(array20406[(3)] = G__20416);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__20417,G__20418,G__20419,G__20420,G__20421){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(5));
(array20406[(0)] = G__20417);

(array20406[(1)] = G__20418);

(array20406[(2)] = G__20419);

(array20406[(3)] = G__20420);

(array20406[(4)] = G__20421);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__20422,G__20423,G__20424,G__20425,G__20426,G__20427){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(6));
(array20406[(0)] = G__20422);

(array20406[(1)] = G__20423);

(array20406[(2)] = G__20424);

(array20406[(3)] = G__20425);

(array20406[(4)] = G__20426);

(array20406[(5)] = G__20427);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__20428,G__20429,G__20430,G__20431,G__20432,G__20433,G__20434){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(7));
(array20406[(0)] = G__20428);

(array20406[(1)] = G__20429);

(array20406[(2)] = G__20430);

(array20406[(3)] = G__20431);

(array20406[(4)] = G__20432);

(array20406[(5)] = G__20433);

(array20406[(6)] = G__20434);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__20435,G__20436,G__20437,G__20438,G__20439,G__20440,G__20441,G__20442){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(8));
(array20406[(0)] = G__20435);

(array20406[(1)] = G__20436);

(array20406[(2)] = G__20437);

(array20406[(3)] = G__20438);

(array20406[(4)] = G__20439);

(array20406[(5)] = G__20440);

(array20406[(6)] = G__20441);

(array20406[(7)] = G__20442);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__20443,G__20444,G__20445,G__20446,G__20447,G__20448,G__20449,G__20450,G__20451){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(9));
(array20406[(0)] = G__20443);

(array20406[(1)] = G__20444);

(array20406[(2)] = G__20445);

(array20406[(3)] = G__20446);

(array20406[(4)] = G__20447);

(array20406[(5)] = G__20448);

(array20406[(6)] = G__20449);

(array20406[(7)] = G__20450);

(array20406[(8)] = G__20451);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__20452,G__20453,G__20454,G__20455,G__20456,G__20457,G__20458,G__20459,G__20460,G__20461){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(10));
(array20406[(0)] = G__20452);

(array20406[(1)] = G__20453);

(array20406[(2)] = G__20454);

(array20406[(3)] = G__20455);

(array20406[(4)] = G__20456);

(array20406[(5)] = G__20457);

(array20406[(6)] = G__20458);

(array20406[(7)] = G__20459);

(array20406[(8)] = G__20460);

(array20406[(9)] = G__20461);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__20462,G__20463,G__20464,G__20465,G__20466,G__20467,G__20468,G__20469,G__20470,G__20471,G__20472){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(11));
(array20406[(0)] = G__20462);

(array20406[(1)] = G__20463);

(array20406[(2)] = G__20464);

(array20406[(3)] = G__20465);

(array20406[(4)] = G__20466);

(array20406[(5)] = G__20467);

(array20406[(6)] = G__20468);

(array20406[(7)] = G__20469);

(array20406[(8)] = G__20470);

(array20406[(9)] = G__20471);

(array20406[(10)] = G__20472);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__20473,G__20474,G__20475,G__20476,G__20477,G__20478,G__20479,G__20480,G__20481,G__20482,G__20483,G__20484){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(12));
(array20406[(0)] = G__20473);

(array20406[(1)] = G__20474);

(array20406[(2)] = G__20475);

(array20406[(3)] = G__20476);

(array20406[(4)] = G__20477);

(array20406[(5)] = G__20478);

(array20406[(6)] = G__20479);

(array20406[(7)] = G__20480);

(array20406[(8)] = G__20481);

(array20406[(9)] = G__20482);

(array20406[(10)] = G__20483);

(array20406[(11)] = G__20484);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__20485,G__20486,G__20487,G__20488,G__20489,G__20490,G__20491,G__20492,G__20493,G__20494,G__20495,G__20496,G__20497){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(13));
(array20406[(0)] = G__20485);

(array20406[(1)] = G__20486);

(array20406[(2)] = G__20487);

(array20406[(3)] = G__20488);

(array20406[(4)] = G__20489);

(array20406[(5)] = G__20490);

(array20406[(6)] = G__20491);

(array20406[(7)] = G__20492);

(array20406[(8)] = G__20493);

(array20406[(9)] = G__20494);

(array20406[(10)] = G__20495);

(array20406[(11)] = G__20496);

(array20406[(12)] = G__20497);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__20498,G__20499,G__20500,G__20501,G__20502,G__20503,G__20504,G__20505,G__20506,G__20507,G__20508,G__20509,G__20510,G__20511){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(14));
(array20406[(0)] = G__20498);

(array20406[(1)] = G__20499);

(array20406[(2)] = G__20500);

(array20406[(3)] = G__20501);

(array20406[(4)] = G__20502);

(array20406[(5)] = G__20503);

(array20406[(6)] = G__20504);

(array20406[(7)] = G__20505);

(array20406[(8)] = G__20506);

(array20406[(9)] = G__20507);

(array20406[(10)] = G__20508);

(array20406[(11)] = G__20509);

(array20406[(12)] = G__20510);

(array20406[(13)] = G__20511);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__20512,G__20513,G__20514,G__20515,G__20516,G__20517,G__20518,G__20519,G__20520,G__20521,G__20522,G__20523,G__20524,G__20525,G__20526){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(15));
(array20406[(0)] = G__20512);

(array20406[(1)] = G__20513);

(array20406[(2)] = G__20514);

(array20406[(3)] = G__20515);

(array20406[(4)] = G__20516);

(array20406[(5)] = G__20517);

(array20406[(6)] = G__20518);

(array20406[(7)] = G__20519);

(array20406[(8)] = G__20520);

(array20406[(9)] = G__20521);

(array20406[(10)] = G__20522);

(array20406[(11)] = G__20523);

(array20406[(12)] = G__20524);

(array20406[(13)] = G__20525);

(array20406[(14)] = G__20526);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__20527,G__20528,G__20529,G__20530,G__20531,G__20532,G__20533,G__20534,G__20535,G__20536,G__20537,G__20538,G__20539,G__20540,G__20541,G__20542){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(16));
(array20406[(0)] = G__20527);

(array20406[(1)] = G__20528);

(array20406[(2)] = G__20529);

(array20406[(3)] = G__20530);

(array20406[(4)] = G__20531);

(array20406[(5)] = G__20532);

(array20406[(6)] = G__20533);

(array20406[(7)] = G__20534);

(array20406[(8)] = G__20535);

(array20406[(9)] = G__20536);

(array20406[(10)] = G__20537);

(array20406[(11)] = G__20538);

(array20406[(12)] = G__20539);

(array20406[(13)] = G__20540);

(array20406[(14)] = G__20541);

(array20406[(15)] = G__20542);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__20543,G__20544,G__20545,G__20546,G__20547,G__20548,G__20549,G__20550,G__20551,G__20552,G__20553,G__20554,G__20555,G__20556,G__20557,G__20558,G__20559){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(17));
(array20406[(0)] = G__20543);

(array20406[(1)] = G__20544);

(array20406[(2)] = G__20545);

(array20406[(3)] = G__20546);

(array20406[(4)] = G__20547);

(array20406[(5)] = G__20548);

(array20406[(6)] = G__20549);

(array20406[(7)] = G__20550);

(array20406[(8)] = G__20551);

(array20406[(9)] = G__20552);

(array20406[(10)] = G__20553);

(array20406[(11)] = G__20554);

(array20406[(12)] = G__20555);

(array20406[(13)] = G__20556);

(array20406[(14)] = G__20557);

(array20406[(15)] = G__20558);

(array20406[(16)] = G__20559);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__20560,G__20561,G__20562,G__20563,G__20564,G__20565,G__20566,G__20567,G__20568,G__20569,G__20570,G__20571,G__20572,G__20573,G__20574,G__20575,G__20576,G__20577){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(18));
(array20406[(0)] = G__20560);

(array20406[(1)] = G__20561);

(array20406[(2)] = G__20562);

(array20406[(3)] = G__20563);

(array20406[(4)] = G__20564);

(array20406[(5)] = G__20565);

(array20406[(6)] = G__20566);

(array20406[(7)] = G__20567);

(array20406[(8)] = G__20568);

(array20406[(9)] = G__20569);

(array20406[(10)] = G__20570);

(array20406[(11)] = G__20571);

(array20406[(12)] = G__20572);

(array20406[(13)] = G__20573);

(array20406[(14)] = G__20574);

(array20406[(15)] = G__20575);

(array20406[(16)] = G__20576);

(array20406[(17)] = G__20577);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__20578,G__20579,G__20580,G__20581,G__20582,G__20583,G__20584,G__20585,G__20586,G__20587,G__20588,G__20589,G__20590,G__20591,G__20592,G__20593,G__20594,G__20595,G__20596){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(19));
(array20406[(0)] = G__20578);

(array20406[(1)] = G__20579);

(array20406[(2)] = G__20580);

(array20406[(3)] = G__20581);

(array20406[(4)] = G__20582);

(array20406[(5)] = G__20583);

(array20406[(6)] = G__20584);

(array20406[(7)] = G__20585);

(array20406[(8)] = G__20586);

(array20406[(9)] = G__20587);

(array20406[(10)] = G__20588);

(array20406[(11)] = G__20589);

(array20406[(12)] = G__20590);

(array20406[(13)] = G__20591);

(array20406[(14)] = G__20592);

(array20406[(15)] = G__20593);

(array20406[(16)] = G__20594);

(array20406[(17)] = G__20595);

(array20406[(18)] = G__20596);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__20597,G__20598,G__20599,G__20600,G__20601,G__20602,G__20603,G__20604,G__20605,G__20606,G__20607,G__20608,G__20609,G__20610,G__20611,G__20612,G__20613,G__20614,G__20615,G__20616){
var self__ = this;
var this__20324__auto__ = this;
var array20406 = cljs.core.object_array.call(null,(20));
(array20406[(0)] = G__20597);

(array20406[(1)] = G__20598);

(array20406[(2)] = G__20599);

(array20406[(3)] = G__20600);

(array20406[(4)] = G__20601);

(array20406[(5)] = G__20602);

(array20406[(6)] = G__20603);

(array20406[(7)] = G__20604);

(array20406[(8)] = G__20605);

(array20406[(9)] = G__20606);

(array20406[(10)] = G__20607);

(array20406[(11)] = G__20608);

(array20406[(12)] = G__20609);

(array20406[(13)] = G__20610);

(array20406[(14)] = G__20611);

(array20406[(15)] = G__20612);

(array20406[(16)] = G__20613);

(array20406[(17)] = G__20614);

(array20406[(18)] = G__20615);

(array20406[(19)] = G__20616);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__20324__auto__,array20406,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19338__auto__){
var self__ = this;
var this__19338__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19334__auto__){
var self__ = this;
var this__19334__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19344__auto__){
var self__ = this;
var this__19344__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19335__auto__){
var self__ = this;
var this__19335__auto____$1 = this;
var h__19161__auto__ = self__.__hash;
if(!((h__19161__auto__ == null))){
return h__19161__auto__;
} else {
var h__19161__auto____$1 = cljs.core.hash_imap.call(null,this__19335__auto____$1);
self__.__hash = h__19161__auto____$1;

return h__19161__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19336__auto__,other__19337__auto__){
var self__ = this;
var this__19336__auto____$1 = this;
if((function (){var and__18714__auto__ = other__19337__auto__;
if(and__18714__auto__){
var and__18714__auto____$1 = (this__19336__auto____$1.constructor === other__19337__auto__.constructor);
if(and__18714__auto____$1){
return cljs.core.equiv_map.call(null,this__19336__auto____$1,other__19337__auto__);
} else {
return and__18714__auto____$1;
}
} else {
return and__18714__auto__;
}
})()){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19349__auto__,k__19350__auto__){
var self__ = this;
var this__19349__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__19350__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19349__auto____$1),self__.__meta),k__19350__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19350__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19347__auto__,k__19348__auto__,G__20617){
var self__ = this;
var this__19347__auto____$1 = this;
var pred__20622 = cljs.core.keyword_identical_QMARK_;
var expr__20623 = k__19348__auto__;
if(pred__20622.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__20623)){
return (new com.rpl.specter.impl.ParamsNeededPath(G__20617,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(pred__20622.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__20623)){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__20617,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19348__auto__,G__20617),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19352__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19339__auto__,G__20617){
var self__ = this;
var this__19339__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__20617,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19345__auto__,entry__19346__auto__){
var self__ = this;
var this__19345__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19346__auto__)){
return cljs.core._assoc.call(null,this__19345__auto____$1,cljs.core._nth.call(null,entry__19346__auto__,(0)),cljs.core._nth.call(null,entry__19346__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19345__auto____$1,entry__19346__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__19374__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__19374__auto__,writer__19375__auto__){
return cljs.core._write.call(null,writer__19375__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__20619){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__20619),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__20619),null,cljs.core.dissoc.call(null,G__20619,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
});

com.rpl.specter.impl.params_needed_path_QMARK_ = (function com$rpl$specter$impl$params_needed_path_QMARK_(o){
return (o instanceof com.rpl.specter.impl.ParamsNeededPath);
});
com.rpl.specter.impl.bind_params_STAR_ = (function com$rpl$specter$impl$bind_params_STAR_(params_needed_path,params,idx){
return com.rpl.specter.impl.__GT_CompiledPath.call(null,params_needed_path.transform_fns,params,idx);
});
com.rpl.specter.impl.seq_contains_QMARK_ = (function com$rpl$specter$impl$seq_contains_QMARK_(aseq,val){
return !(cljs.core.empty_QMARK_.call(null,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core._EQ_,val),aseq)));
});
com.rpl.specter.impl.no_prot_error_str = (function com$rpl$specter$impl$no_prot_error_str(obj){
return [cljs.core.str("Protocol implementation cannot be found for object.\n        Extending Specter protocols should not be done inline in a deftype definition\n        because that prevents Specter from finding the protocol implementations for\n        optimized performance. Instead, you should extend the protocols via an\n        explicit extend-protocol call. \n"),cljs.core.str(obj)].join('');
});
com.rpl.specter.impl.structure_path_impl = (function com$rpl$specter$impl$structure_path_impl(obj){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__20642,G__20643,G__20644){
return com.rpl.specter.protocols.select_STAR_.call(null,G__20642,G__20643,G__20644);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__20646,G__20647,G__20648){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__20646,G__20647,G__20648);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__20653,G__20654){
return com.rpl.specter.protocols.collect_val.call(null,G__20653,G__20654);
}):com.rpl.specter.protocols.collect_val)], null);
});
com.rpl.specter.impl.coerce_collector = (function com$rpl$specter$impl$coerce_collector(this$){
var cfn = new cljs.core.Keyword(null,"collect-val","collect-val",801894069).cljs$core$IFn$_invoke$arity$1(com.rpl.specter.impl.collector_impl.call(null,this$));
var afn = ((function (cfn){
return (function (params,params_idx,vals,structure,next_fn){
return next_fn.call(null,params,params_idx,cljs.core.conj.call(null,vals,cfn.call(null,this$,structure)),structure);
});})(cfn))
;
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,afn,afn));
});
com.rpl.specter.impl.coerce_structure_path = (function com$rpl$specter$impl$coerce_structure_path(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return selector.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (structure,next_fn){
return transformer.call(null,this$,structure,next_fn);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.coerce_structure_path_rich = (function com$rpl$specter$impl$coerce_structure_path_rich(this$){
var pimpl = com.rpl.specter.impl.structure_path_impl.call(null,this$);
var selector = new cljs.core.Keyword(null,"select*","select*",-1829914060).cljs$core$IFn$_invoke$arity$1(pimpl);
var transformer = new cljs.core.Keyword(null,"transform*","transform*",-1613794522).cljs$core$IFn$_invoke$arity$1(pimpl);
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
,((function (pimpl,selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,this$,structure,((function (pimpl,selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(pimpl,selector,transformer))
);
});})(pimpl,selector,transformer))
));
});
com.rpl.specter.impl.structure_path_QMARK_ = (function com$rpl$specter$impl$structure_path_QMARK_(obj){
var or__18726__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__18726__auto__){
return or__18726__auto__;
} else {
if(!((obj == null))){
if((false) || (obj.com$rpl$specter$protocols$StructurePath$)){
return true;
} else {
if((!obj.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.StructurePath,obj);
}
}
});

/**
 * @interface
 */
com.rpl.specter.impl.CoercePath = function(){};

com.rpl.specter.impl.coerce_path = (function com$rpl$specter$impl$coerce_path(this$){
if((!((this$ == null))) && (!((this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 == null)))){
return this$.com$rpl$specter$impl$CoercePath$coerce_path$arity$1(this$);
} else {
var x__19381__auto__ = (((this$ == null))?null:this$);
var m__19382__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,this$);
} else {
var m__19382__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"CoercePath.coerce-path",this$);
}
}
}
});

(com.rpl.specter.impl.CoercePath["null"] = true);

(com.rpl.specter.impl.coerce_path["null"] = (function (this$){
return com.rpl.specter.impl.coerce_structure_path.call(null,null);
}));

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.CompiledPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.comp_paths_STAR_.call(null,this$__$1);
});

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.IndexedSeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.EmptyList.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.List.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$ = true;

cljs.core.LazySeq.prototype.com$rpl$specter$impl$CoercePath$coerce_path$arity$1 = (function (this$){
var this$__$1 = this;
return com.rpl.specter.impl.coerce_path.call(null,cljs.core.vec.call(null,this$__$1));
});

(com.rpl.specter.impl.CoercePath["_"] = true);

(com.rpl.specter.impl.coerce_path["_"] = (function (this$){
if(cljs.core.truth_(com.rpl.specter.impl.structure_path_QMARK_.call(null,this$))){
return com.rpl.specter.impl.coerce_structure_path.call(null,this$);
} else {
if(((!((this$ == null)))?(((false) || (this$.com$rpl$specter$protocols$Collector$))?true:(((!this$.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$):false)):cljs.core.native_satisfies_QMARK_.call(null,com.rpl.specter.protocols.Collector,this$))){
return com.rpl.specter.impl.coerce_collector.call(null,this$);
} else {
return com.rpl.specter.impl.throw_illegal.call(null,com.rpl.specter.impl.no_prot_error_str.call(null,this$));

}
}
}));
com.rpl.specter.impl.extype = (function com$rpl$specter$impl$extype(f){
var exs = f.executors;
return exs.type;
});
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__20661){
var vec__20663 = p__20661;
var f = cljs.core.nth.call(null,vec__20663,(0),null);
var _ = cljs.core.nthnext.call(null,vec__20663,(1));
var all = vec__20663;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__20663,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__20663,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__20663,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__20663,f,_,all))
);
});
;})(exs,t,vec__20663,f,_,all))
});})(exs,t,vec__20663,f,_,all))
:((function (exs,t,vec__20663,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__20663,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__20663,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__20663,f,_,all))
);
});
;})(exs,t,vec__20663,f,_,all))
});})(exs,t,vec__20663,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__20663,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__20663,f,_,all))
,all);
});
com.rpl.specter.impl.coerce_tfns_rich = (function com$rpl$specter$impl$coerce_tfns_rich(tfns){
if(cljs.core._EQ_.call(null,com.rpl.specter.impl.extype.call(null,tfns),new cljs.core.Keyword(null,"richpath","richpath",-150197948))){
return tfns;
} else {
var selector = tfns.selector;
var transformer = tfns.transformer;
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return selector.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
,((function (selector,transformer){
return (function (params,params_idx,vals,structure,next_fn){
return transformer.call(null,structure,((function (selector,transformer){
return (function (structure__$1){
return next_fn.call(null,params,params_idx,vals,structure__$1);
});})(selector,transformer))
);
});})(selector,transformer))
);
}
});
com.rpl.specter.impl.capture_params_internally = (function com$rpl$specter$impl$capture_params_internally(path){
if(!((path instanceof com.rpl.specter.impl.CompiledPath))){
return path;
} else {
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(path);
var params_idx = new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(path);
var selector = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
var transformer = new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(path));
if(cljs.core.empty_QMARK_.call(null,params)){
return path;
} else {
return com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return selector.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
,((function (params,params_idx,selector,transformer){
return (function (x_params,x_params_idx,vals,structure,next_fn){
return transformer.call(null,params,params_idx,vals,structure,((function (params,params_idx,selector,transformer){
return (function (_,___$1,vals_next,structure_next){
return next_fn.call(null,x_params,x_params_idx,vals_next,structure_next);
});})(params,params_idx,selector,transformer))
);
});})(params,params_idx,selector,transformer))
));
}
}
});
(com.rpl.specter.impl.PathComposer["null"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["null"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

(com.rpl.specter.impl.PathComposer["_"] = true);

(com.rpl.specter.impl.comp_paths_STAR_["_"] = (function (sp){
return com.rpl.specter.impl.coerce_path.call(null,sp);
}));

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$PathComposer$comp_paths_STAR_$arity$1 = (function (structure_paths){
var structure_paths__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure_paths__$1)){
return com.rpl.specter.impl.coerce_path.call(null,null);
} else {
var coerced = cljs.core.map.call(null,com.rpl.specter.impl.capture_params_internally,cljs.core.map.call(null,com.rpl.specter.impl.coerce_path,structure_paths__$1));
var combined = cljs.core.map.call(null,com.rpl.specter.impl.combine_same_types,cljs.core.partition_by.call(null,com.rpl.specter.impl.extype,cljs.core.map.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),coerced)));
var result_tfn = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,combined)))?cljs.core.first.call(null,combined):com.rpl.specter.impl.combine_same_types.call(null,cljs.core.map.call(null,com.rpl.specter.impl.coerce_tfns_rich,combined)));
var needs_params_paths = cljs.core.filter.call(null,((function (coerced,combined,result_tfn,structure_paths__$1){
return (function (p1__20664_SHARP_){
return (p1__20664_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
});})(coerced,combined,result_tfn,structure_paths__$1))
,coerced);
if(cljs.core.empty_QMARK_.call(null,needs_params_paths)){
return com.rpl.specter.impl.no_params_compiled_path.call(null,result_tfn);
} else {
return com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.coerce_tfns_rich.call(null,result_tfn),cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),needs_params_paths)));
}
}
});
com.rpl.specter.impl.num_needed_params = (function com$rpl$specter$impl$num_needed_params(path){
if((path instanceof com.rpl.specter.impl.CompiledPath)){
return (0);
} else {
return new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(path);
}
});

/**
 * @interface
 */
com.rpl.specter.impl.PMutableCell = function(){};

com.rpl.specter.impl.set_cell = (function com$rpl$specter$impl$set_cell(cell,x){
if((!((cell == null))) && (!((cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 == null)))){
return cell.com$rpl$specter$impl$PMutableCell$set_cell$arity$2(cell,x);
} else {
var x__19381__auto__ = (((cell == null))?null:cell);
var m__19382__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,cell,x);
} else {
var m__19382__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,cell,x);
} else {
throw cljs.core.missing_protocol.call(null,"PMutableCell.set_cell",cell);
}
}
}
});


/**
* @constructor
 * @implements {com.rpl.specter.impl.PMutableCell}
*/
com.rpl.specter.impl.MutableCell = (function (q){
this.q = q;
})
com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$ = true;

com.rpl.specter.impl.MutableCell.prototype.com$rpl$specter$impl$PMutableCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

com.rpl.specter.impl.MutableCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"q","q",-1965434072,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

com.rpl.specter.impl.MutableCell.cljs$lang$type = true;

com.rpl.specter.impl.MutableCell.cljs$lang$ctorStr = "com.rpl.specter.impl/MutableCell";

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args20675 = [];
var len__19784__auto___20678 = arguments.length;
var i__19785__auto___20681 = (0);
while(true){
if((i__19785__auto___20681 < len__19784__auto___20678)){
args20675.push((arguments[i__19785__auto___20681]));

var G__20683 = (i__19785__auto___20681 + (1));
i__19785__auto___20681 = G__20683;
continue;
} else {
}
break;
}

var G__20677 = args20675.length;
switch (G__20677) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20675.length)].join('')));

}
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0 = (function (){
return com.rpl.specter.impl.mutable_cell.call(null,null);
});

com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1 = (function (init){
return (new com.rpl.specter.impl.MutableCell(init));
});

com.rpl.specter.impl.mutable_cell.cljs$lang$maxFixedArity = 1;
com.rpl.specter.impl.set_cell_BANG_ = (function com$rpl$specter$impl$set_cell_BANG_(cell,val){
return com.rpl.specter.impl.set_cell.call(null,cell,val);
});
com.rpl.specter.impl.get_cell = (function com$rpl$specter$impl$get_cell(cell){
return cell.q;
});
com.rpl.specter.impl.update_cell_BANG_ = (function com$rpl$specter$impl$update_cell_BANG_(cell,afn){
var ret = afn.call(null,com.rpl.specter.impl.get_cell.call(null,cell));
com.rpl.specter.impl.set_cell_BANG_.call(null,cell,ret);

return ret;
});
com.rpl.specter.impl.append = (function com$rpl$specter$impl$append(coll,elem){
return cljs.core.conj.call(null,cljs.core.vec.call(null,coll),elem);
});

/**
 * @interface
 */
com.rpl.specter.impl.SetExtremes = function(){};

com.rpl.specter.impl.set_first = (function com$rpl$specter$impl$set_first(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_first$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_first$arity$2(s,val);
} else {
var x__19381__auto__ = (((s == null))?null:s);
var m__19382__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,s,val);
} else {
var m__19382__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-first",s);
}
}
}
});

com.rpl.specter.impl.set_last = (function com$rpl$specter$impl$set_last(s,val){
if((!((s == null))) && (!((s.com$rpl$specter$impl$SetExtremes$set_last$arity$2 == null)))){
return s.com$rpl$specter$impl$SetExtremes$set_last$arity$2(s,val);
} else {
var x__19381__auto__ = (((s == null))?null:s);
var m__19382__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__19381__auto__)]);
if(!((m__19382__auto__ == null))){
return m__19382__auto__.call(null,s,val);
} else {
var m__19382__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__19382__auto____$1 == null))){
return m__19382__auto____$1.call(null,s,val);
} else {
throw cljs.core.missing_protocol.call(null,"SetExtremes.set-last",s);
}
}
}
});

com.rpl.specter.impl.set_first_list = (function com$rpl$specter$impl$set_first_list(l,v){
return cljs.core.cons.call(null,v,cljs.core.rest.call(null,l));
});
com.rpl.specter.impl.set_last_list = (function com$rpl$specter$impl$set_last_list(l,v){
return com.rpl.specter.impl.append.call(null,cljs.core.butlast.call(null,l),v);
});
cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$ = true;

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_first$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(0),val);
});

cljs.core.PersistentVector.prototype.com$rpl$specter$impl$SetExtremes$set_last$arity$2 = (function (v,val){
var v__$1 = this;
return cljs.core.assoc.call(null,v__$1,(cljs.core.count.call(null,v__$1) - (1)),val);
});

(com.rpl.specter.impl.SetExtremes["_"] = true);

(com.rpl.specter.impl.set_first["_"] = (function (l,val){
return com.rpl.specter.impl.set_first_list.call(null,l,val);
}));

(com.rpl.specter.impl.set_last["_"] = (function (l,val){
return com.rpl.specter.impl.set_last_list.call(null,l,val);
}));
com.rpl.specter.impl.walk_until = (function com$rpl$specter$impl$walk_until(pred,on_match_fn,structure){
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
return clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$walk_until,pred,on_match_fn),cljs.core.identity,structure);
}
});
com.rpl.specter.impl.fn_invocation_QMARK_ = (function com$rpl$specter$impl$fn_invocation_QMARK_(f){
return ((f instanceof clojure.lang.Cons)) || ((f instanceof clojure.lang.LazySeq)) || (cljs.core.list_QMARK_.call(null,f));
});
com.rpl.specter.impl.codewalk_until = (function com$rpl$specter$impl$codewalk_until(pred,on_match_fn,structure){
if(pred.call(null,structure)){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if((function (){var and__18714__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(and__18714__auto__){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__18714__auto__;
}
})()){
return cljs.core.with_meta.call(null,ret,cljs.core.meta.call(null,structure));
} else {
return ret;
}
}
});
com.rpl.specter.impl.conj_all_BANG_ = (function com$rpl$specter$impl$conj_all_BANG_(cell,elems){
return com.rpl.specter.impl.set_cell_BANG_.call(null,cell,cljs.core.concat.call(null,com.rpl.specter.impl.get_cell.call(null,cell),elems));
});
com.rpl.specter.impl.compiled_select_STAR_ = (function com$rpl$specter$impl$compiled_select_STAR_(path,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.select_executor.call(null,path.params,path.params_idx,tfns.selector,structure);
});
com.rpl.specter.impl.compiled_transform_STAR_ = (function com$rpl$specter$impl$compiled_transform_STAR_(path,transform_fn,structure){
var tfns = path.transform_fns;
var ex = tfns.executors;
return ex.transform_executor.call(null,path.params,path.params_idx,tfns.transformer,transform_fn,structure);
});
com.rpl.specter.impl.not_selected_QMARK__STAR_ = (function com$rpl$specter$impl$not_selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.selected_QMARK__STAR_ = (function com$rpl$specter$impl$selected_QMARK__STAR_(compiled_path,structure){
return cljs.core.not.call(null,com.rpl.specter.impl.not_selected_QMARK__STAR_.call(null,compiled_path,structure));
});
com.rpl.specter.impl.walk_select = (function com$rpl$specter$impl$walk_select(pred,continue_fn,structure){
var ret = com.rpl.specter.impl.mutable_cell.call(null,cljs.core.PersistentVector.EMPTY);
var walker = ((function (ret){
return (function com$rpl$specter$impl$walk_select_$_this(structure__$1){
if(cljs.core.truth_(pred.call(null,structure__$1))){
return com.rpl.specter.impl.conj_all_BANG_.call(null,ret,continue_fn.call(null,structure__$1));
} else {
return clojure.walk.walk.call(null,com$rpl$specter$impl$walk_select_$_this,cljs.core.identity,structure__$1);
}
});})(ret))
;
walker.call(null,structure);

return com.rpl.specter.impl.get_cell.call(null,ret);
});
com.rpl.specter.impl.key_select = (function com$rpl$specter$impl$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.impl.key_transform = (function com$rpl$specter$impl$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
});
com.rpl.specter.impl.all_select = (function com$rpl$specter$impl$all_select(structure,next_fn){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (p1__20686_SHARP_){
return next_fn.call(null,p1__20686_SHARP_);
})),structure);
});
com.rpl.specter.impl.queue_QMARK_ = (function com$rpl$specter$impl$queue_QMARK_(coll){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,coll),cljs.core.type.call(null,cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY)));
});
com.rpl.specter.impl.all_transform = (function com$rpl$specter$impl$all_transform(structure,next_fn){
var empty_structure = cljs.core.empty.call(null,structure);
if((cljs.core.list_QMARK_.call(null,empty_structure)) && (cljs.core.not.call(null,com.rpl.specter.impl.queue_QMARK_.call(null,empty_structure)))){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,cljs.core.map.call(null,((function (empty_structure){
return (function (p1__20687_SHARP_){
return next_fn.call(null,p1__20687_SHARP_);
});})(empty_structure))
),structure);
}
});

/**
* @constructor
*/
com.rpl.specter.impl.AllStructurePath = (function (){
})

com.rpl.specter.impl.AllStructurePath.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.AllStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/AllStructurePath";

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"com.rpl.specter.impl/AllStructurePath");
});

com.rpl.specter.impl.__GT_AllStructurePath = (function com$rpl$specter$impl$__GT_AllStructurePath(){
return (new com.rpl.specter.impl.AllStructurePath());
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return com.rpl.specter.impl.all_select.call(null,structure,next_fn);
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return com.rpl.specter.impl.all_transform.call(null,structure,next_fn);
});

/**
* @constructor
*/
com.rpl.specter.impl.ValCollect = (function (){
})

com.rpl.specter.impl.ValCollect.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

com.rpl.specter.impl.ValCollect.cljs$lang$type = true;

com.rpl.specter.impl.ValCollect.cljs$lang$ctorStr = "com.rpl.specter.impl/ValCollect";

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"com.rpl.specter.impl/ValCollect");
});

com.rpl.specter.impl.__GT_ValCollect = (function com$rpl$specter$impl$__GT_ValCollect(){
return (new com.rpl.specter.impl.ValCollect());
});

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$ = true;

com.rpl.specter.impl.ValCollect.prototype.com$rpl$specter$protocols$Collector$collect_val$arity$2 = (function (this$,structure){
var this$__$1 = this;
return structure;
});

/**
* @constructor
*/
com.rpl.specter.impl.PosStructurePath = (function (getter,setter){
this.getter = getter;
this.setter = setter;
})

com.rpl.specter.impl.PosStructurePath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"getter","getter",1725376382,null),new cljs.core.Symbol(null,"setter","setter",-706080843,null)], null);
});

com.rpl.specter.impl.PosStructurePath.cljs$lang$type = true;

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorStr = "com.rpl.specter.impl/PosStructurePath";

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"com.rpl.specter.impl/PosStructurePath");
});

com.rpl.specter.impl.__GT_PosStructurePath = (function com$rpl$specter$impl$__GT_PosStructurePath(getter,setter){
return (new com.rpl.specter.impl.PosStructurePath(getter,setter));
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(!(cljs.core.empty_QMARK_.call(null,structure))){
return next_fn.call(null,this$__$1.getter.call(null,structure));
} else {
return null;
}
});

com.rpl.specter.impl.PosStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
if(cljs.core.empty_QMARK_.call(null,structure)){
return structure;
} else {
return this$__$1.setter.call(null,structure,next_fn.call(null,this$__$1.getter.call(null,structure)));
}
});
com.rpl.specter.impl.srange_select = (function com$rpl$specter$impl$srange_select(structure,start,end,next_fn){
return next_fn.call(null,cljs.core.subvec.call(null,cljs.core.vec.call(null,structure),start,end));
});
com.rpl.specter.impl.srange_transform = (function com$rpl$specter$impl$srange_transform(structure,start,end,next_fn){
var structurev = cljs.core.vec.call(null,structure);
var newpart = next_fn.call(null,cljs.core.subvec.call(null,structurev,start,end));
var res = cljs.core.concat.call(null,cljs.core.subvec.call(null,structurev,(0),start),newpart,cljs.core.subvec.call(null,structurev,end,cljs.core.count.call(null,structure)));
if(cljs.core.vector_QMARK_.call(null,structure)){
return cljs.core.vec.call(null,res);
} else {
return res;
}
});
(com.rpl.specter.protocols.StructurePath["null"] = true);

(com.rpl.specter.protocols.select_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));

(com.rpl.specter.protocols.transform_STAR_["null"] = (function (this$,structure,next_fn){
return next_fn.call(null,structure);
}));
com.rpl.specter.impl.retrieve_cond_selector = (function com$rpl$specter$impl$retrieve_cond_selector(cond_paths,structure){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__20690){
var vec__20691 = p__20690;
var c_selector = cljs.core.nth.call(null,vec__20691,(0),null);
var _ = cljs.core.nth.call(null,vec__20691,(1),null);
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,c_selector,structure));
}),cljs.core.partition.call(null,(2),cond_paths))));
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return null;
}
});
com.rpl.specter.impl.filter_transform = (function com$rpl$specter$impl$filter_transform(afn,structure,next_fn){
if(cljs.core.truth_(afn.call(null,structure))){
return next_fn.call(null,structure);
} else {
return structure;
}
});
com.rpl.specter.impl.compiled_selector = (function com$rpl$specter$impl$compiled_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.compiled_transformer = (function com$rpl$specter$impl$compiled_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});
com.rpl.specter.impl.params_needed_selector = (function com$rpl$specter$impl$params_needed_selector(path){
var tfns = path.transform_fns;
return tfns.selector;
});
com.rpl.specter.impl.params_needed_transformer = (function com$rpl$specter$impl$params_needed_transformer(path){
var tfns = path.transform_fns;
return tfns.transformer;
});

//# sourceMappingURL=impl.js.map