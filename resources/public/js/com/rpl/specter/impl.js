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
var len__19784__auto___34085 = arguments.length;
var i__19785__auto___34086 = (0);
while(true){
if((i__19785__auto___34086 < len__19784__auto___34085)){
args__19791__auto__.push((arguments[i__19785__auto___34086]));

var G__34087 = (i__19785__auto___34086 + (1));
i__19785__auto___34086 = G__34087;
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

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq34084){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34084));
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__19791__auto__ = [];
var len__19784__auto___34089 = arguments.length;
var i__19785__auto___34090 = (0);
while(true){
if((i__19785__auto___34090 < len__19784__auto___34089)){
args__19791__auto__.push((arguments[i__19785__auto___34090]));

var G__34091 = (i__19785__auto___34090 + (1));
i__19785__auto___34090 = G__34091;
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

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq34088){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34088));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__19654__auto__ = cljs.core.system_time.call(null);
var ret__19655__auto__ = (function (){var n__19629__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__19629__auto__)){
afn.call(null);

var G__34092 = (_ + (1));
_ = G__34092;
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

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19342__auto__,k34094,else__19343__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
var G__34096 = (((k34094 instanceof cljs.core.Keyword))?k34094.fqn:null);
switch (G__34096) {
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
return cljs.core.get.call(null,self__.__extmap,k34094,else__19343__auto__);

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

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34093){
var self__ = this;
var G__34093__$1 = this;
return (new cljs.core.RecordIter((0),G__34093__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
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

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19347__auto__,k__19348__auto__,G__34093){
var self__ = this;
var this__19347__auto____$1 = this;
var pred__34097 = cljs.core.keyword_identical_QMARK_;
var expr__34098 = k__19348__auto__;
if(cljs.core.truth_(pred__34097.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__34098))){
return (new com.rpl.specter.impl.TransformFunctions(G__34093,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34097.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__34098))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__34093,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34097.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__34098))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__34093,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19348__auto__,G__34093),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19352__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19339__auto__,G__34093){
var self__ = this;
var this__19339__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__34093,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__34095){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__34095),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__34095),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__34095),null,cljs.core.dissoc.call(null,G__34095,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
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

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19342__auto__,k34102,else__19343__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
var G__34104 = (((k34102 instanceof cljs.core.Keyword))?k34102.fqn:null);
switch (G__34104) {
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
return cljs.core.get.call(null,self__.__extmap,k34102,else__19343__auto__);

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

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34101){
var self__ = this;
var G__34101__$1 = this;
return (new cljs.core.RecordIter((0),G__34101__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
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
if(cljs.core.truth_((function (){var and__18714__auto__ = other__19337__auto__;
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
})())){
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

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19347__auto__,k__19348__auto__,G__34101){
var self__ = this;
var this__19347__auto____$1 = this;
var pred__34105 = cljs.core.keyword_identical_QMARK_;
var expr__34106 = k__19348__auto__;
if(cljs.core.truth_(pred__34105.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__34106))){
return (new com.rpl.specter.impl.CompiledPath(G__34101,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34105.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__34106))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__34101,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34105.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__34106))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__34101,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19348__auto__,G__34101),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19352__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19339__auto__,G__34101){
var self__ = this;
var this__19339__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__34101,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__34103){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__34103),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__34103),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__34103),null,cljs.core.dissoc.call(null,G__34103,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
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

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19342__auto__,k34322,else__19343__auto__){
var self__ = this;
var this__19342__auto____$1 = this;
var G__34327 = (((k34322 instanceof cljs.core.Keyword))?k34322.fqn:null);
switch (G__34327) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k34322,else__19343__auto__);

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

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34321){
var self__ = this;
var G__34321__$1 = this;
return (new cljs.core.RecordIter((0),G__34321__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__34336 = null;
var G__34336__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__2 = (function (self__,G__34111){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(1));
(array34110[(0)] = G__34111);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__3 = (function (self__,G__34112,G__34113){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(2));
(array34110[(0)] = G__34112);

(array34110[(1)] = G__34113);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__4 = (function (self__,G__34114,G__34115,G__34116){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(3));
(array34110[(0)] = G__34114);

(array34110[(1)] = G__34115);

(array34110[(2)] = G__34116);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__5 = (function (self__,G__34117,G__34118,G__34119,G__34120){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(4));
(array34110[(0)] = G__34117);

(array34110[(1)] = G__34118);

(array34110[(2)] = G__34119);

(array34110[(3)] = G__34120);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__6 = (function (self__,G__34121,G__34122,G__34123,G__34124,G__34125){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(5));
(array34110[(0)] = G__34121);

(array34110[(1)] = G__34122);

(array34110[(2)] = G__34123);

(array34110[(3)] = G__34124);

(array34110[(4)] = G__34125);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__7 = (function (self__,G__34126,G__34127,G__34128,G__34129,G__34130,G__34131){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(6));
(array34110[(0)] = G__34126);

(array34110[(1)] = G__34127);

(array34110[(2)] = G__34128);

(array34110[(3)] = G__34129);

(array34110[(4)] = G__34130);

(array34110[(5)] = G__34131);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__8 = (function (self__,G__34132,G__34133,G__34134,G__34135,G__34136,G__34137,G__34138){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(7));
(array34110[(0)] = G__34132);

(array34110[(1)] = G__34133);

(array34110[(2)] = G__34134);

(array34110[(3)] = G__34135);

(array34110[(4)] = G__34136);

(array34110[(5)] = G__34137);

(array34110[(6)] = G__34138);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__9 = (function (self__,G__34139,G__34140,G__34141,G__34142,G__34143,G__34144,G__34145,G__34146){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(8));
(array34110[(0)] = G__34139);

(array34110[(1)] = G__34140);

(array34110[(2)] = G__34141);

(array34110[(3)] = G__34142);

(array34110[(4)] = G__34143);

(array34110[(5)] = G__34144);

(array34110[(6)] = G__34145);

(array34110[(7)] = G__34146);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__10 = (function (self__,G__34147,G__34148,G__34149,G__34150,G__34151,G__34152,G__34153,G__34154,G__34155){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(9));
(array34110[(0)] = G__34147);

(array34110[(1)] = G__34148);

(array34110[(2)] = G__34149);

(array34110[(3)] = G__34150);

(array34110[(4)] = G__34151);

(array34110[(5)] = G__34152);

(array34110[(6)] = G__34153);

(array34110[(7)] = G__34154);

(array34110[(8)] = G__34155);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__11 = (function (self__,G__34156,G__34157,G__34158,G__34159,G__34160,G__34161,G__34162,G__34163,G__34164,G__34165){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(10));
(array34110[(0)] = G__34156);

(array34110[(1)] = G__34157);

(array34110[(2)] = G__34158);

(array34110[(3)] = G__34159);

(array34110[(4)] = G__34160);

(array34110[(5)] = G__34161);

(array34110[(6)] = G__34162);

(array34110[(7)] = G__34163);

(array34110[(8)] = G__34164);

(array34110[(9)] = G__34165);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__12 = (function (self__,G__34166,G__34167,G__34168,G__34169,G__34170,G__34171,G__34172,G__34173,G__34174,G__34175,G__34176){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(11));
(array34110[(0)] = G__34166);

(array34110[(1)] = G__34167);

(array34110[(2)] = G__34168);

(array34110[(3)] = G__34169);

(array34110[(4)] = G__34170);

(array34110[(5)] = G__34171);

(array34110[(6)] = G__34172);

(array34110[(7)] = G__34173);

(array34110[(8)] = G__34174);

(array34110[(9)] = G__34175);

(array34110[(10)] = G__34176);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__13 = (function (self__,G__34177,G__34178,G__34179,G__34180,G__34181,G__34182,G__34183,G__34184,G__34185,G__34186,G__34187,G__34188){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(12));
(array34110[(0)] = G__34177);

(array34110[(1)] = G__34178);

(array34110[(2)] = G__34179);

(array34110[(3)] = G__34180);

(array34110[(4)] = G__34181);

(array34110[(5)] = G__34182);

(array34110[(6)] = G__34183);

(array34110[(7)] = G__34184);

(array34110[(8)] = G__34185);

(array34110[(9)] = G__34186);

(array34110[(10)] = G__34187);

(array34110[(11)] = G__34188);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__14 = (function (self__,G__34189,G__34190,G__34191,G__34192,G__34193,G__34194,G__34195,G__34196,G__34197,G__34198,G__34199,G__34200,G__34201){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(13));
(array34110[(0)] = G__34189);

(array34110[(1)] = G__34190);

(array34110[(2)] = G__34191);

(array34110[(3)] = G__34192);

(array34110[(4)] = G__34193);

(array34110[(5)] = G__34194);

(array34110[(6)] = G__34195);

(array34110[(7)] = G__34196);

(array34110[(8)] = G__34197);

(array34110[(9)] = G__34198);

(array34110[(10)] = G__34199);

(array34110[(11)] = G__34200);

(array34110[(12)] = G__34201);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__15 = (function (self__,G__34202,G__34203,G__34204,G__34205,G__34206,G__34207,G__34208,G__34209,G__34210,G__34211,G__34212,G__34213,G__34214,G__34215){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(14));
(array34110[(0)] = G__34202);

(array34110[(1)] = G__34203);

(array34110[(2)] = G__34204);

(array34110[(3)] = G__34205);

(array34110[(4)] = G__34206);

(array34110[(5)] = G__34207);

(array34110[(6)] = G__34208);

(array34110[(7)] = G__34209);

(array34110[(8)] = G__34210);

(array34110[(9)] = G__34211);

(array34110[(10)] = G__34212);

(array34110[(11)] = G__34213);

(array34110[(12)] = G__34214);

(array34110[(13)] = G__34215);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__16 = (function (self__,G__34216,G__34217,G__34218,G__34219,G__34220,G__34221,G__34222,G__34223,G__34224,G__34225,G__34226,G__34227,G__34228,G__34229,G__34230){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(15));
(array34110[(0)] = G__34216);

(array34110[(1)] = G__34217);

(array34110[(2)] = G__34218);

(array34110[(3)] = G__34219);

(array34110[(4)] = G__34220);

(array34110[(5)] = G__34221);

(array34110[(6)] = G__34222);

(array34110[(7)] = G__34223);

(array34110[(8)] = G__34224);

(array34110[(9)] = G__34225);

(array34110[(10)] = G__34226);

(array34110[(11)] = G__34227);

(array34110[(12)] = G__34228);

(array34110[(13)] = G__34229);

(array34110[(14)] = G__34230);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__17 = (function (self__,G__34231,G__34232,G__34233,G__34234,G__34235,G__34236,G__34237,G__34238,G__34239,G__34240,G__34241,G__34242,G__34243,G__34244,G__34245,G__34246){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(16));
(array34110[(0)] = G__34231);

(array34110[(1)] = G__34232);

(array34110[(2)] = G__34233);

(array34110[(3)] = G__34234);

(array34110[(4)] = G__34235);

(array34110[(5)] = G__34236);

(array34110[(6)] = G__34237);

(array34110[(7)] = G__34238);

(array34110[(8)] = G__34239);

(array34110[(9)] = G__34240);

(array34110[(10)] = G__34241);

(array34110[(11)] = G__34242);

(array34110[(12)] = G__34243);

(array34110[(13)] = G__34244);

(array34110[(14)] = G__34245);

(array34110[(15)] = G__34246);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__18 = (function (self__,G__34247,G__34248,G__34249,G__34250,G__34251,G__34252,G__34253,G__34254,G__34255,G__34256,G__34257,G__34258,G__34259,G__34260,G__34261,G__34262,G__34263){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(17));
(array34110[(0)] = G__34247);

(array34110[(1)] = G__34248);

(array34110[(2)] = G__34249);

(array34110[(3)] = G__34250);

(array34110[(4)] = G__34251);

(array34110[(5)] = G__34252);

(array34110[(6)] = G__34253);

(array34110[(7)] = G__34254);

(array34110[(8)] = G__34255);

(array34110[(9)] = G__34256);

(array34110[(10)] = G__34257);

(array34110[(11)] = G__34258);

(array34110[(12)] = G__34259);

(array34110[(13)] = G__34260);

(array34110[(14)] = G__34261);

(array34110[(15)] = G__34262);

(array34110[(16)] = G__34263);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__19 = (function (self__,G__34264,G__34265,G__34266,G__34267,G__34268,G__34269,G__34270,G__34271,G__34272,G__34273,G__34274,G__34275,G__34276,G__34277,G__34278,G__34279,G__34280,G__34281){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(18));
(array34110[(0)] = G__34264);

(array34110[(1)] = G__34265);

(array34110[(2)] = G__34266);

(array34110[(3)] = G__34267);

(array34110[(4)] = G__34268);

(array34110[(5)] = G__34269);

(array34110[(6)] = G__34270);

(array34110[(7)] = G__34271);

(array34110[(8)] = G__34272);

(array34110[(9)] = G__34273);

(array34110[(10)] = G__34274);

(array34110[(11)] = G__34275);

(array34110[(12)] = G__34276);

(array34110[(13)] = G__34277);

(array34110[(14)] = G__34278);

(array34110[(15)] = G__34279);

(array34110[(16)] = G__34280);

(array34110[(17)] = G__34281);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__20 = (function (self__,G__34282,G__34283,G__34284,G__34285,G__34286,G__34287,G__34288,G__34289,G__34290,G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,G__34298,G__34299,G__34300){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(19));
(array34110[(0)] = G__34282);

(array34110[(1)] = G__34283);

(array34110[(2)] = G__34284);

(array34110[(3)] = G__34285);

(array34110[(4)] = G__34286);

(array34110[(5)] = G__34287);

(array34110[(6)] = G__34288);

(array34110[(7)] = G__34289);

(array34110[(8)] = G__34290);

(array34110[(9)] = G__34291);

(array34110[(10)] = G__34292);

(array34110[(11)] = G__34293);

(array34110[(12)] = G__34294);

(array34110[(13)] = G__34295);

(array34110[(14)] = G__34296);

(array34110[(15)] = G__34297);

(array34110[(16)] = G__34298);

(array34110[(17)] = G__34299);

(array34110[(18)] = G__34300);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__21 = (function (self__,G__34301,G__34302,G__34303,G__34304,G__34305,G__34306,G__34307,G__34308,G__34309,G__34310,G__34311,G__34312,G__34313,G__34314,G__34315,G__34316,G__34317,G__34318,G__34319,G__34320){
var self__ = this;
var self____$1 = this;
var this__19860__auto__ = self____$1;
var array34110 = cljs.core.object_array.call(null,(20));
(array34110[(0)] = G__34301);

(array34110[(1)] = G__34302);

(array34110[(2)] = G__34303);

(array34110[(3)] = G__34304);

(array34110[(4)] = G__34305);

(array34110[(5)] = G__34306);

(array34110[(6)] = G__34307);

(array34110[(7)] = G__34308);

(array34110[(8)] = G__34309);

(array34110[(9)] = G__34310);

(array34110[(10)] = G__34311);

(array34110[(11)] = G__34312);

(array34110[(12)] = G__34313);

(array34110[(13)] = G__34314);

(array34110[(14)] = G__34315);

(array34110[(15)] = G__34316);

(array34110[(16)] = G__34317);

(array34110[(17)] = G__34318);

(array34110[(18)] = G__34319);

(array34110[(19)] = G__34320);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});
var G__34336__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__34336 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__34336__1.call(this,self__);
case 2:
return G__34336__2.call(this,self__,p01);
case 3:
return G__34336__3.call(this,self__,p01,p02);
case 4:
return G__34336__4.call(this,self__,p01,p02,p03);
case 5:
return G__34336__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__34336__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__34336__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__34336__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__34336__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__34336__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__34336__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__34336__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__34336__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__34336__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__34336__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__34336__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__34336__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__34336__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__34336__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__34336__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__34336__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__34336__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34336.cljs$core$IFn$_invoke$arity$1 = G__34336__1;
G__34336.cljs$core$IFn$_invoke$arity$2 = G__34336__2;
G__34336.cljs$core$IFn$_invoke$arity$3 = G__34336__3;
G__34336.cljs$core$IFn$_invoke$arity$4 = G__34336__4;
G__34336.cljs$core$IFn$_invoke$arity$5 = G__34336__5;
G__34336.cljs$core$IFn$_invoke$arity$6 = G__34336__6;
G__34336.cljs$core$IFn$_invoke$arity$7 = G__34336__7;
G__34336.cljs$core$IFn$_invoke$arity$8 = G__34336__8;
G__34336.cljs$core$IFn$_invoke$arity$9 = G__34336__9;
G__34336.cljs$core$IFn$_invoke$arity$10 = G__34336__10;
G__34336.cljs$core$IFn$_invoke$arity$11 = G__34336__11;
G__34336.cljs$core$IFn$_invoke$arity$12 = G__34336__12;
G__34336.cljs$core$IFn$_invoke$arity$13 = G__34336__13;
G__34336.cljs$core$IFn$_invoke$arity$14 = G__34336__14;
G__34336.cljs$core$IFn$_invoke$arity$15 = G__34336__15;
G__34336.cljs$core$IFn$_invoke$arity$16 = G__34336__16;
G__34336.cljs$core$IFn$_invoke$arity$17 = G__34336__17;
G__34336.cljs$core$IFn$_invoke$arity$18 = G__34336__18;
G__34336.cljs$core$IFn$_invoke$arity$19 = G__34336__19;
G__34336.cljs$core$IFn$_invoke$arity$20 = G__34336__20;
G__34336.cljs$core$IFn$_invoke$arity$21 = G__34336__21;
G__34336.cljs$core$IFn$_invoke$arity$22 = G__34336__22;
return G__34336;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args34325){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args34325)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__34111){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(1));
(array34110[(0)] = G__34111);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__34112,G__34113){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(2));
(array34110[(0)] = G__34112);

(array34110[(1)] = G__34113);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__34114,G__34115,G__34116){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(3));
(array34110[(0)] = G__34114);

(array34110[(1)] = G__34115);

(array34110[(2)] = G__34116);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__34117,G__34118,G__34119,G__34120){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(4));
(array34110[(0)] = G__34117);

(array34110[(1)] = G__34118);

(array34110[(2)] = G__34119);

(array34110[(3)] = G__34120);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__34121,G__34122,G__34123,G__34124,G__34125){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(5));
(array34110[(0)] = G__34121);

(array34110[(1)] = G__34122);

(array34110[(2)] = G__34123);

(array34110[(3)] = G__34124);

(array34110[(4)] = G__34125);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__34126,G__34127,G__34128,G__34129,G__34130,G__34131){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(6));
(array34110[(0)] = G__34126);

(array34110[(1)] = G__34127);

(array34110[(2)] = G__34128);

(array34110[(3)] = G__34129);

(array34110[(4)] = G__34130);

(array34110[(5)] = G__34131);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__34132,G__34133,G__34134,G__34135,G__34136,G__34137,G__34138){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(7));
(array34110[(0)] = G__34132);

(array34110[(1)] = G__34133);

(array34110[(2)] = G__34134);

(array34110[(3)] = G__34135);

(array34110[(4)] = G__34136);

(array34110[(5)] = G__34137);

(array34110[(6)] = G__34138);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__34139,G__34140,G__34141,G__34142,G__34143,G__34144,G__34145,G__34146){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(8));
(array34110[(0)] = G__34139);

(array34110[(1)] = G__34140);

(array34110[(2)] = G__34141);

(array34110[(3)] = G__34142);

(array34110[(4)] = G__34143);

(array34110[(5)] = G__34144);

(array34110[(6)] = G__34145);

(array34110[(7)] = G__34146);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__34147,G__34148,G__34149,G__34150,G__34151,G__34152,G__34153,G__34154,G__34155){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(9));
(array34110[(0)] = G__34147);

(array34110[(1)] = G__34148);

(array34110[(2)] = G__34149);

(array34110[(3)] = G__34150);

(array34110[(4)] = G__34151);

(array34110[(5)] = G__34152);

(array34110[(6)] = G__34153);

(array34110[(7)] = G__34154);

(array34110[(8)] = G__34155);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__34156,G__34157,G__34158,G__34159,G__34160,G__34161,G__34162,G__34163,G__34164,G__34165){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(10));
(array34110[(0)] = G__34156);

(array34110[(1)] = G__34157);

(array34110[(2)] = G__34158);

(array34110[(3)] = G__34159);

(array34110[(4)] = G__34160);

(array34110[(5)] = G__34161);

(array34110[(6)] = G__34162);

(array34110[(7)] = G__34163);

(array34110[(8)] = G__34164);

(array34110[(9)] = G__34165);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__34166,G__34167,G__34168,G__34169,G__34170,G__34171,G__34172,G__34173,G__34174,G__34175,G__34176){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(11));
(array34110[(0)] = G__34166);

(array34110[(1)] = G__34167);

(array34110[(2)] = G__34168);

(array34110[(3)] = G__34169);

(array34110[(4)] = G__34170);

(array34110[(5)] = G__34171);

(array34110[(6)] = G__34172);

(array34110[(7)] = G__34173);

(array34110[(8)] = G__34174);

(array34110[(9)] = G__34175);

(array34110[(10)] = G__34176);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__34177,G__34178,G__34179,G__34180,G__34181,G__34182,G__34183,G__34184,G__34185,G__34186,G__34187,G__34188){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(12));
(array34110[(0)] = G__34177);

(array34110[(1)] = G__34178);

(array34110[(2)] = G__34179);

(array34110[(3)] = G__34180);

(array34110[(4)] = G__34181);

(array34110[(5)] = G__34182);

(array34110[(6)] = G__34183);

(array34110[(7)] = G__34184);

(array34110[(8)] = G__34185);

(array34110[(9)] = G__34186);

(array34110[(10)] = G__34187);

(array34110[(11)] = G__34188);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__34189,G__34190,G__34191,G__34192,G__34193,G__34194,G__34195,G__34196,G__34197,G__34198,G__34199,G__34200,G__34201){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(13));
(array34110[(0)] = G__34189);

(array34110[(1)] = G__34190);

(array34110[(2)] = G__34191);

(array34110[(3)] = G__34192);

(array34110[(4)] = G__34193);

(array34110[(5)] = G__34194);

(array34110[(6)] = G__34195);

(array34110[(7)] = G__34196);

(array34110[(8)] = G__34197);

(array34110[(9)] = G__34198);

(array34110[(10)] = G__34199);

(array34110[(11)] = G__34200);

(array34110[(12)] = G__34201);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__34202,G__34203,G__34204,G__34205,G__34206,G__34207,G__34208,G__34209,G__34210,G__34211,G__34212,G__34213,G__34214,G__34215){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(14));
(array34110[(0)] = G__34202);

(array34110[(1)] = G__34203);

(array34110[(2)] = G__34204);

(array34110[(3)] = G__34205);

(array34110[(4)] = G__34206);

(array34110[(5)] = G__34207);

(array34110[(6)] = G__34208);

(array34110[(7)] = G__34209);

(array34110[(8)] = G__34210);

(array34110[(9)] = G__34211);

(array34110[(10)] = G__34212);

(array34110[(11)] = G__34213);

(array34110[(12)] = G__34214);

(array34110[(13)] = G__34215);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__34216,G__34217,G__34218,G__34219,G__34220,G__34221,G__34222,G__34223,G__34224,G__34225,G__34226,G__34227,G__34228,G__34229,G__34230){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(15));
(array34110[(0)] = G__34216);

(array34110[(1)] = G__34217);

(array34110[(2)] = G__34218);

(array34110[(3)] = G__34219);

(array34110[(4)] = G__34220);

(array34110[(5)] = G__34221);

(array34110[(6)] = G__34222);

(array34110[(7)] = G__34223);

(array34110[(8)] = G__34224);

(array34110[(9)] = G__34225);

(array34110[(10)] = G__34226);

(array34110[(11)] = G__34227);

(array34110[(12)] = G__34228);

(array34110[(13)] = G__34229);

(array34110[(14)] = G__34230);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__34231,G__34232,G__34233,G__34234,G__34235,G__34236,G__34237,G__34238,G__34239,G__34240,G__34241,G__34242,G__34243,G__34244,G__34245,G__34246){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(16));
(array34110[(0)] = G__34231);

(array34110[(1)] = G__34232);

(array34110[(2)] = G__34233);

(array34110[(3)] = G__34234);

(array34110[(4)] = G__34235);

(array34110[(5)] = G__34236);

(array34110[(6)] = G__34237);

(array34110[(7)] = G__34238);

(array34110[(8)] = G__34239);

(array34110[(9)] = G__34240);

(array34110[(10)] = G__34241);

(array34110[(11)] = G__34242);

(array34110[(12)] = G__34243);

(array34110[(13)] = G__34244);

(array34110[(14)] = G__34245);

(array34110[(15)] = G__34246);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__34247,G__34248,G__34249,G__34250,G__34251,G__34252,G__34253,G__34254,G__34255,G__34256,G__34257,G__34258,G__34259,G__34260,G__34261,G__34262,G__34263){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(17));
(array34110[(0)] = G__34247);

(array34110[(1)] = G__34248);

(array34110[(2)] = G__34249);

(array34110[(3)] = G__34250);

(array34110[(4)] = G__34251);

(array34110[(5)] = G__34252);

(array34110[(6)] = G__34253);

(array34110[(7)] = G__34254);

(array34110[(8)] = G__34255);

(array34110[(9)] = G__34256);

(array34110[(10)] = G__34257);

(array34110[(11)] = G__34258);

(array34110[(12)] = G__34259);

(array34110[(13)] = G__34260);

(array34110[(14)] = G__34261);

(array34110[(15)] = G__34262);

(array34110[(16)] = G__34263);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__34264,G__34265,G__34266,G__34267,G__34268,G__34269,G__34270,G__34271,G__34272,G__34273,G__34274,G__34275,G__34276,G__34277,G__34278,G__34279,G__34280,G__34281){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(18));
(array34110[(0)] = G__34264);

(array34110[(1)] = G__34265);

(array34110[(2)] = G__34266);

(array34110[(3)] = G__34267);

(array34110[(4)] = G__34268);

(array34110[(5)] = G__34269);

(array34110[(6)] = G__34270);

(array34110[(7)] = G__34271);

(array34110[(8)] = G__34272);

(array34110[(9)] = G__34273);

(array34110[(10)] = G__34274);

(array34110[(11)] = G__34275);

(array34110[(12)] = G__34276);

(array34110[(13)] = G__34277);

(array34110[(14)] = G__34278);

(array34110[(15)] = G__34279);

(array34110[(16)] = G__34280);

(array34110[(17)] = G__34281);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__34282,G__34283,G__34284,G__34285,G__34286,G__34287,G__34288,G__34289,G__34290,G__34291,G__34292,G__34293,G__34294,G__34295,G__34296,G__34297,G__34298,G__34299,G__34300){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(19));
(array34110[(0)] = G__34282);

(array34110[(1)] = G__34283);

(array34110[(2)] = G__34284);

(array34110[(3)] = G__34285);

(array34110[(4)] = G__34286);

(array34110[(5)] = G__34287);

(array34110[(6)] = G__34288);

(array34110[(7)] = G__34289);

(array34110[(8)] = G__34290);

(array34110[(9)] = G__34291);

(array34110[(10)] = G__34292);

(array34110[(11)] = G__34293);

(array34110[(12)] = G__34294);

(array34110[(13)] = G__34295);

(array34110[(14)] = G__34296);

(array34110[(15)] = G__34297);

(array34110[(16)] = G__34298);

(array34110[(17)] = G__34299);

(array34110[(18)] = G__34300);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__34301,G__34302,G__34303,G__34304,G__34305,G__34306,G__34307,G__34308,G__34309,G__34310,G__34311,G__34312,G__34313,G__34314,G__34315,G__34316,G__34317,G__34318,G__34319,G__34320){
var self__ = this;
var this__19860__auto__ = this;
var array34110 = cljs.core.object_array.call(null,(20));
(array34110[(0)] = G__34301);

(array34110[(1)] = G__34302);

(array34110[(2)] = G__34303);

(array34110[(3)] = G__34304);

(array34110[(4)] = G__34305);

(array34110[(5)] = G__34306);

(array34110[(6)] = G__34307);

(array34110[(7)] = G__34308);

(array34110[(8)] = G__34309);

(array34110[(9)] = G__34310);

(array34110[(10)] = G__34311);

(array34110[(11)] = G__34312);

(array34110[(12)] = G__34313);

(array34110[(13)] = G__34314);

(array34110[(14)] = G__34315);

(array34110[(15)] = G__34316);

(array34110[(16)] = G__34317);

(array34110[(17)] = G__34318);

(array34110[(18)] = G__34319);

(array34110[(19)] = G__34320);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19860__auto__,array34110,(0));
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

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19349__auto__,k__19350__auto__){
var self__ = this;
var this__19349__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__19350__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19349__auto____$1),self__.__meta),k__19350__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19350__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19347__auto__,k__19348__auto__,G__34321){
var self__ = this;
var this__19347__auto____$1 = this;
var pred__34332 = cljs.core.keyword_identical_QMARK_;
var expr__34333 = k__19348__auto__;
if(cljs.core.truth_(pred__34332.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__34333))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__34321,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__34332.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__34333))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__34321,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19348__auto__,G__34321),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19352__auto__){
var self__ = this;
var this__19352__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19339__auto__,G__34321){
var self__ = this;
var this__19339__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__34321,self__.__extmap,self__.__hash));
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

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__34323){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__34323),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__34323),null,cljs.core.dissoc.call(null,G__34323,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__34345,G__34346,G__34347){
return com.rpl.specter.protocols.select_STAR_.call(null,G__34345,G__34346,G__34347);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__34350,G__34351,G__34352){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__34350,G__34351,G__34352);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__34359,G__34360){
return com.rpl.specter.protocols.collect_val.call(null,G__34359,G__34360);
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
if(com.rpl.specter.impl.structure_path_QMARK_.call(null,this$)){
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
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__34371){
var vec__34373 = p__34371;
var f = cljs.core.nth.call(null,vec__34373,(0),null);
var _ = cljs.core.nthnext.call(null,vec__34373,(1));
var all = vec__34373;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__34373,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__34373,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__34373,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__34373,f,_,all))
);
});
;})(exs,t,vec__34373,f,_,all))
});})(exs,t,vec__34373,f,_,all))
:((function (exs,t,vec__34373,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__34373,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__34373,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__34373,f,_,all))
);
});
;})(exs,t,vec__34373,f,_,all))
});})(exs,t,vec__34373,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__34373,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__34373,f,_,all))
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
return (function (p1__34374_SHARP_){
return (p1__34374_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
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
var args34375 = [];
var len__19784__auto___34378 = arguments.length;
var i__19785__auto___34379 = (0);
while(true){
if((i__19785__auto___34379 < len__19784__auto___34378)){
args34375.push((arguments[i__19785__auto___34379]));

var G__34380 = (i__19785__auto___34379 + (1));
i__19785__auto___34379 = G__34380;
continue;
} else {
}
break;
}

var G__34377 = args34375.length;
switch (G__34377) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34375.length)].join('')));

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
if(pred.call(null,structure)){
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
if(cljs.core.truth_(and__18714__auto__)){
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (p1__34392_SHARP_){
return next_fn.call(null,p1__34392_SHARP_);
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
return (function (p1__34397_SHARP_){
return next_fn.call(null,p1__34397_SHARP_);
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__34400){
var vec__34401 = p__34400;
var c_selector = cljs.core.nth.call(null,vec__34401,(0),null);
var _ = cljs.core.nth.call(null,vec__34401,(1),null);
return cljs.core.empty_QMARK_.call(null,com.rpl.specter.impl.compiled_select_STAR_.call(null,c_selector,structure));
}),cljs.core.partition.call(null,(2),cond_paths))));
});
com.rpl.specter.impl.filter_select = (function com$rpl$specter$impl$filter_select(afn,structure,next_fn){
if(afn.call(null,structure)){
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