// Compiled by ClojureScript 1.7.228 {}
goog.provide('com.rpl.specter.impl');
goog.require('cljs.core');
goog.require('com.rpl.specter.protocols');
goog.require('clojure.walk');
goog.require('clojure.core.reducers');
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
var x__18757__auto__ = (((paths == null))?null:paths);
var m__18758__auto__ = (com.rpl.specter.impl.comp_paths_STAR_[goog.typeOf(x__18757__auto__)]);
if(!((m__18758__auto__ == null))){
return m__18758__auto__.call(null,paths);
} else {
var m__18758__auto____$1 = (com.rpl.specter.impl.comp_paths_STAR_["_"]);
if(!((m__18758__auto____$1 == null))){
return m__18758__auto____$1.call(null,paths);
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
var args__19167__auto__ = [];
var len__19160__auto___19501 = arguments.length;
var i__19161__auto___19502 = (0);
while(true){
if((i__19161__auto___19502 < len__19160__auto___19501)){
args__19167__auto__.push((arguments[i__19161__auto___19502]));

var G__19503 = (i__19161__auto___19502 + (1));
i__19161__auto___19502 = G__19503;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic = (function (elems){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,com.rpl.specter.impl.smart_str_STAR_,elems));
});

com.rpl.specter.impl.smart_str.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.smart_str.cljs$lang$applyTo = (function (seq19500){
return com.rpl.specter.impl.smart_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19500));
});
com.rpl.specter.impl.throw_illegal = (function com$rpl$specter$impl$throw_illegal(var_args){
var args__19167__auto__ = [];
var len__19160__auto___19505 = arguments.length;
var i__19161__auto___19506 = (0);
while(true){
if((i__19161__auto___19506 < len__19160__auto___19505)){
args__19167__auto__.push((arguments[i__19161__auto___19506]));

var G__19507 = (i__19161__auto___19506 + (1));
i__19161__auto___19506 = G__19507;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic = (function (args){
throw (new Error(cljs.core.apply.call(null,cljs.core.str,args)));
});

com.rpl.specter.impl.throw_illegal.cljs$lang$maxFixedArity = (0);

com.rpl.specter.impl.throw_illegal.cljs$lang$applyTo = (function (seq19504){
return com.rpl.specter.impl.throw_illegal.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq19504));
});
com.rpl.specter.impl.benchmark = (function com$rpl$specter$impl$benchmark(iters,afn){
var start__19030__auto__ = cljs.core.system_time.call(null);
var ret__19031__auto__ = (function (){var n__19005__auto__ = iters;
var _ = (0);
while(true){
if((_ < n__19005__auto__)){
afn.call(null);

var G__19508 = (_ + (1));
_ = G__19508;
continue;
} else {
return null;
}
break;
}
})();
cljs.core.prn.call(null,[cljs.core.str("Elapsed time: "),cljs.core.str((cljs.core.system_time.call(null) - start__19030__auto__).toFixed((6))),cljs.core.str(" msecs")].join(''));

return ret__19031__auto__;
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

com.rpl.specter.impl.ExecutorFunctions.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"com.rpl.specter.impl/ExecutorFunctions");
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
com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18716__auto__,k__18717__auto__){
var self__ = this;
var this__18716__auto____$1 = this;
return cljs.core._lookup.call(null,this__18716__auto____$1,k__18717__auto__,null);
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18718__auto__,k19510,else__18719__auto__){
var self__ = this;
var this__18718__auto____$1 = this;
var G__19512 = (((k19510 instanceof cljs.core.Keyword))?k19510.fqn:null);
switch (G__19512) {
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
return cljs.core.get.call(null,self__.__extmap,k19510,else__18719__auto__);

}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18730__auto__,writer__18731__auto__,opts__18732__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
var pr_pair__18733__auto__ = ((function (this__18730__auto____$1){
return (function (keyval__18734__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,cljs.core.pr_writer,""," ","",opts__18732__auto__,keyval__18734__auto__);
});})(this__18730__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,pr_pair__18733__auto__,"#com.rpl.specter.impl.TransformFunctions{",", ","}",opts__18732__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19509){
var self__ = this;
var G__19509__$1 = this;
return (new cljs.core.RecordIter((0),G__19509__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18714__auto__){
var self__ = this;
var this__18714__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18710__auto__){
var self__ = this;
var this__18710__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18720__auto__){
var self__ = this;
var this__18720__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18711__auto__){
var self__ = this;
var this__18711__auto____$1 = this;
var h__18537__auto__ = self__.__hash;
if(!((h__18537__auto__ == null))){
return h__18537__auto__;
} else {
var h__18537__auto____$1 = cljs.core.hash_imap.call(null,this__18711__auto____$1);
self__.__hash = h__18537__auto____$1;

return h__18537__auto____$1;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18712__auto__,other__18713__auto__){
var self__ = this;
var this__18712__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18090__auto__ = other__18713__auto__;
if(cljs.core.truth_(and__18090__auto__)){
var and__18090__auto____$1 = (this__18712__auto____$1.constructor === other__18713__auto__.constructor);
if(and__18090__auto____$1){
return cljs.core.equiv_map.call(null,this__18712__auto____$1,other__18713__auto__);
} else {
return and__18090__auto____$1;
}
} else {
return and__18090__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18725__auto__,k__18726__auto__){
var self__ = this;
var this__18725__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",762528866),null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),null,new cljs.core.Keyword(null,"executors","executors",-331073403),null], null), null),k__18726__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18725__auto____$1),self__.__meta),k__18726__auto__);
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18726__auto__)),null));
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18723__auto__,k__18724__auto__,G__19509){
var self__ = this;
var this__18723__auto____$1 = this;
var pred__19513 = cljs.core.keyword_identical_QMARK_;
var expr__19514 = k__18724__auto__;
if(cljs.core.truth_(pred__19513.call(null,new cljs.core.Keyword(null,"executors","executors",-331073403),expr__19514))){
return (new com.rpl.specter.impl.TransformFunctions(G__19509,self__.selector,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19513.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),expr__19514))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,G__19509,self__.transformer,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19513.call(null,new cljs.core.Keyword(null,"transformer","transformer",-1493470620),expr__19514))){
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,G__19509,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18724__auto__,G__19509),null));
}
}
}
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18728__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"executors","executors",-331073403),self__.executors],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"selector","selector",762528866),self__.selector],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transformer","transformer",-1493470620),self__.transformer],null))], null),self__.__extmap));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18715__auto__,G__19509){
var self__ = this;
var this__18715__auto____$1 = this;
return (new com.rpl.specter.impl.TransformFunctions(self__.executors,self__.selector,self__.transformer,G__19509,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.TransformFunctions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18721__auto__,entry__18722__auto__){
var self__ = this;
var this__18721__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18722__auto__)){
return cljs.core._assoc.call(null,this__18721__auto____$1,cljs.core._nth.call(null,entry__18722__auto__,(0)),cljs.core._nth.call(null,entry__18722__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18721__auto____$1,entry__18722__auto__);
}
});

com.rpl.specter.impl.TransformFunctions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executors","executors",1309458124,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"transformer","transformer",147060907,null)], null);
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$type = true;

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrSeq = (function (this__18750__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.TransformFunctions.cljs$lang$ctorPrWriter = (function (this__18750__auto__,writer__18751__auto__){
return cljs.core._write.call(null,writer__18751__auto__,"com.rpl.specter.impl/TransformFunctions");
});

com.rpl.specter.impl.__GT_TransformFunctions = (function com$rpl$specter$impl$__GT_TransformFunctions(executors,selector,transformer){
return (new com.rpl.specter.impl.TransformFunctions(executors,selector,transformer,null,null,null));
});

com.rpl.specter.impl.map__GT_TransformFunctions = (function com$rpl$specter$impl$map__GT_TransformFunctions(G__19511){
return (new com.rpl.specter.impl.TransformFunctions(new cljs.core.Keyword(null,"executors","executors",-331073403).cljs$core$IFn$_invoke$arity$1(G__19511),new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(G__19511),new cljs.core.Keyword(null,"transformer","transformer",-1493470620).cljs$core$IFn$_invoke$arity$1(G__19511),null,cljs.core.dissoc.call(null,G__19511,new cljs.core.Keyword(null,"executors","executors",-331073403),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.Keyword(null,"transformer","transformer",-1493470620)),null));
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
com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18716__auto__,k__18717__auto__){
var self__ = this;
var this__18716__auto____$1 = this;
return cljs.core._lookup.call(null,this__18716__auto____$1,k__18717__auto__,null);
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18718__auto__,k19518,else__18719__auto__){
var self__ = this;
var this__18718__auto____$1 = this;
var G__19520 = (((k19518 instanceof cljs.core.Keyword))?k19518.fqn:null);
switch (G__19520) {
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
return cljs.core.get.call(null,self__.__extmap,k19518,else__18719__auto__);

}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18730__auto__,writer__18731__auto__,opts__18732__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
var pr_pair__18733__auto__ = ((function (this__18730__auto____$1){
return (function (keyval__18734__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,cljs.core.pr_writer,""," ","",opts__18732__auto__,keyval__18734__auto__);
});})(this__18730__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,pr_pair__18733__auto__,"#com.rpl.specter.impl.CompiledPath{",", ","}",opts__18732__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19517){
var self__ = this;
var G__19517__$1 = this;
return (new cljs.core.RecordIter((0),G__19517__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18714__auto__){
var self__ = this;
var this__18714__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18710__auto__){
var self__ = this;
var this__18710__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18720__auto__){
var self__ = this;
var this__18720__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18711__auto__){
var self__ = this;
var this__18711__auto____$1 = this;
var h__18537__auto__ = self__.__hash;
if(!((h__18537__auto__ == null))){
return h__18537__auto__;
} else {
var h__18537__auto____$1 = cljs.core.hash_imap.call(null,this__18711__auto____$1);
self__.__hash = h__18537__auto____$1;

return h__18537__auto____$1;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18712__auto__,other__18713__auto__){
var self__ = this;
var this__18712__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18090__auto__ = other__18713__auto__;
if(cljs.core.truth_(and__18090__auto__)){
var and__18090__auto____$1 = (this__18712__auto____$1.constructor === other__18713__auto__.constructor);
if(and__18090__auto____$1){
return cljs.core.equiv_map.call(null,this__18712__auto____$1,other__18713__auto__);
} else {
return and__18090__auto____$1;
}
} else {
return and__18090__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18725__auto__,k__18726__auto__){
var self__ = this;
var this__18725__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__18726__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18725__auto____$1),self__.__meta),k__18726__auto__);
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18726__auto__)),null));
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18723__auto__,k__18724__auto__,G__19517){
var self__ = this;
var this__18723__auto____$1 = this;
var pred__19521 = cljs.core.keyword_identical_QMARK_;
var expr__19522 = k__18724__auto__;
if(cljs.core.truth_(pred__19521.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__19522))){
return (new com.rpl.specter.impl.CompiledPath(G__19517,self__.params,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19521.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__19522))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,G__19517,self__.params_idx,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19521.call(null,new cljs.core.Keyword(null,"params-idx","params-idx",340984624),expr__19522))){
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,G__19517,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18724__auto__,G__19517),null));
}
}
}
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18728__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-idx","params-idx",340984624),self__.params_idx],null))], null),self__.__extmap));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18715__auto__,G__19517){
var self__ = this;
var this__18715__auto____$1 = this;
return (new com.rpl.specter.impl.CompiledPath(self__.transform_fns,self__.params,self__.params_idx,G__19517,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.CompiledPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18721__auto__,entry__18722__auto__){
var self__ = this;
var this__18721__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18722__auto__)){
return cljs.core._assoc.call(null,this__18721__auto____$1,cljs.core._nth.call(null,entry__18722__auto__,(0)),cljs.core._nth.call(null,entry__18722__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18721__auto____$1,entry__18722__auto__);
}
});

com.rpl.specter.impl.CompiledPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"params-idx","params-idx",1981516151,null)], null);
});

com.rpl.specter.impl.CompiledPath.cljs$lang$type = true;

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrSeq = (function (this__18750__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.CompiledPath.cljs$lang$ctorPrWriter = (function (this__18750__auto__,writer__18751__auto__){
return cljs.core._write.call(null,writer__18751__auto__,"com.rpl.specter.impl/CompiledPath");
});

com.rpl.specter.impl.__GT_CompiledPath = (function com$rpl$specter$impl$__GT_CompiledPath(transform_fns,params,params_idx){
return (new com.rpl.specter.impl.CompiledPath(transform_fns,params,params_idx,null,null,null));
});

com.rpl.specter.impl.map__GT_CompiledPath = (function com$rpl$specter$impl$map__GT_CompiledPath(G__19519){
return (new com.rpl.specter.impl.CompiledPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__19519),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__19519),new cljs.core.Keyword(null,"params-idx","params-idx",340984624).cljs$core$IFn$_invoke$arity$1(G__19519),null,cljs.core.dissoc.call(null,G__19519,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params-idx","params-idx",340984624)),null));
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
com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__18716__auto__,k__18717__auto__){
var self__ = this;
var this__18716__auto____$1 = this;
return cljs.core._lookup.call(null,this__18716__auto____$1,k__18717__auto__,null);
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__18718__auto__,k19737,else__18719__auto__){
var self__ = this;
var this__18718__auto____$1 = this;
var G__19740 = (((k19737 instanceof cljs.core.Keyword))?k19737.fqn:null);
switch (G__19740) {
case "transform-fns":
return self__.transform_fns;

break;
case "num-needed-params":
return self__.num_needed_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k19737,else__18719__auto__);

}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__18730__auto__,writer__18731__auto__,opts__18732__auto__){
var self__ = this;
var this__18730__auto____$1 = this;
var pr_pair__18733__auto__ = ((function (this__18730__auto____$1){
return (function (keyval__18734__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,cljs.core.pr_writer,""," ","",opts__18732__auto__,keyval__18734__auto__);
});})(this__18730__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__18731__auto__,pr_pair__18733__auto__,"#com.rpl.specter.impl.ParamsNeededPath{",", ","}",opts__18732__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$ = true;

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19736){
var self__ = this;
var G__19736__$1 = this;
return (new cljs.core.RecordIter((0),G__19736__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.call = (function() {
var G__19745 = null;
var G__19745__1 = (function (self__){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__2 = (function (self__,G__19526){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(1));
(array19525[(0)] = G__19526);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__3 = (function (self__,G__19527,G__19528){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(2));
(array19525[(0)] = G__19527);

(array19525[(1)] = G__19528);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__4 = (function (self__,G__19529,G__19530,G__19531){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(3));
(array19525[(0)] = G__19529);

(array19525[(1)] = G__19530);

(array19525[(2)] = G__19531);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__5 = (function (self__,G__19532,G__19533,G__19534,G__19535){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(4));
(array19525[(0)] = G__19532);

(array19525[(1)] = G__19533);

(array19525[(2)] = G__19534);

(array19525[(3)] = G__19535);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__6 = (function (self__,G__19536,G__19537,G__19538,G__19539,G__19540){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(5));
(array19525[(0)] = G__19536);

(array19525[(1)] = G__19537);

(array19525[(2)] = G__19538);

(array19525[(3)] = G__19539);

(array19525[(4)] = G__19540);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__7 = (function (self__,G__19541,G__19542,G__19543,G__19544,G__19545,G__19546){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(6));
(array19525[(0)] = G__19541);

(array19525[(1)] = G__19542);

(array19525[(2)] = G__19543);

(array19525[(3)] = G__19544);

(array19525[(4)] = G__19545);

(array19525[(5)] = G__19546);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__8 = (function (self__,G__19547,G__19548,G__19549,G__19550,G__19551,G__19552,G__19553){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(7));
(array19525[(0)] = G__19547);

(array19525[(1)] = G__19548);

(array19525[(2)] = G__19549);

(array19525[(3)] = G__19550);

(array19525[(4)] = G__19551);

(array19525[(5)] = G__19552);

(array19525[(6)] = G__19553);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__9 = (function (self__,G__19554,G__19555,G__19556,G__19557,G__19558,G__19559,G__19560,G__19561){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(8));
(array19525[(0)] = G__19554);

(array19525[(1)] = G__19555);

(array19525[(2)] = G__19556);

(array19525[(3)] = G__19557);

(array19525[(4)] = G__19558);

(array19525[(5)] = G__19559);

(array19525[(6)] = G__19560);

(array19525[(7)] = G__19561);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__10 = (function (self__,G__19562,G__19563,G__19564,G__19565,G__19566,G__19567,G__19568,G__19569,G__19570){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(9));
(array19525[(0)] = G__19562);

(array19525[(1)] = G__19563);

(array19525[(2)] = G__19564);

(array19525[(3)] = G__19565);

(array19525[(4)] = G__19566);

(array19525[(5)] = G__19567);

(array19525[(6)] = G__19568);

(array19525[(7)] = G__19569);

(array19525[(8)] = G__19570);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__11 = (function (self__,G__19571,G__19572,G__19573,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(10));
(array19525[(0)] = G__19571);

(array19525[(1)] = G__19572);

(array19525[(2)] = G__19573);

(array19525[(3)] = G__19574);

(array19525[(4)] = G__19575);

(array19525[(5)] = G__19576);

(array19525[(6)] = G__19577);

(array19525[(7)] = G__19578);

(array19525[(8)] = G__19579);

(array19525[(9)] = G__19580);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__12 = (function (self__,G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587,G__19588,G__19589,G__19590,G__19591){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(11));
(array19525[(0)] = G__19581);

(array19525[(1)] = G__19582);

(array19525[(2)] = G__19583);

(array19525[(3)] = G__19584);

(array19525[(4)] = G__19585);

(array19525[(5)] = G__19586);

(array19525[(6)] = G__19587);

(array19525[(7)] = G__19588);

(array19525[(8)] = G__19589);

(array19525[(9)] = G__19590);

(array19525[(10)] = G__19591);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__13 = (function (self__,G__19592,G__19593,G__19594,G__19595,G__19596,G__19597,G__19598,G__19599,G__19600,G__19601,G__19602,G__19603){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(12));
(array19525[(0)] = G__19592);

(array19525[(1)] = G__19593);

(array19525[(2)] = G__19594);

(array19525[(3)] = G__19595);

(array19525[(4)] = G__19596);

(array19525[(5)] = G__19597);

(array19525[(6)] = G__19598);

(array19525[(7)] = G__19599);

(array19525[(8)] = G__19600);

(array19525[(9)] = G__19601);

(array19525[(10)] = G__19602);

(array19525[(11)] = G__19603);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__14 = (function (self__,G__19604,G__19605,G__19606,G__19607,G__19608,G__19609,G__19610,G__19611,G__19612,G__19613,G__19614,G__19615,G__19616){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(13));
(array19525[(0)] = G__19604);

(array19525[(1)] = G__19605);

(array19525[(2)] = G__19606);

(array19525[(3)] = G__19607);

(array19525[(4)] = G__19608);

(array19525[(5)] = G__19609);

(array19525[(6)] = G__19610);

(array19525[(7)] = G__19611);

(array19525[(8)] = G__19612);

(array19525[(9)] = G__19613);

(array19525[(10)] = G__19614);

(array19525[(11)] = G__19615);

(array19525[(12)] = G__19616);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__15 = (function (self__,G__19617,G__19618,G__19619,G__19620,G__19621,G__19622,G__19623,G__19624,G__19625,G__19626,G__19627,G__19628,G__19629,G__19630){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(14));
(array19525[(0)] = G__19617);

(array19525[(1)] = G__19618);

(array19525[(2)] = G__19619);

(array19525[(3)] = G__19620);

(array19525[(4)] = G__19621);

(array19525[(5)] = G__19622);

(array19525[(6)] = G__19623);

(array19525[(7)] = G__19624);

(array19525[(8)] = G__19625);

(array19525[(9)] = G__19626);

(array19525[(10)] = G__19627);

(array19525[(11)] = G__19628);

(array19525[(12)] = G__19629);

(array19525[(13)] = G__19630);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__16 = (function (self__,G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,G__19637,G__19638,G__19639,G__19640,G__19641,G__19642,G__19643,G__19644,G__19645){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(15));
(array19525[(0)] = G__19631);

(array19525[(1)] = G__19632);

(array19525[(2)] = G__19633);

(array19525[(3)] = G__19634);

(array19525[(4)] = G__19635);

(array19525[(5)] = G__19636);

(array19525[(6)] = G__19637);

(array19525[(7)] = G__19638);

(array19525[(8)] = G__19639);

(array19525[(9)] = G__19640);

(array19525[(10)] = G__19641);

(array19525[(11)] = G__19642);

(array19525[(12)] = G__19643);

(array19525[(13)] = G__19644);

(array19525[(14)] = G__19645);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__17 = (function (self__,G__19646,G__19647,G__19648,G__19649,G__19650,G__19651,G__19652,G__19653,G__19654,G__19655,G__19656,G__19657,G__19658,G__19659,G__19660,G__19661){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(16));
(array19525[(0)] = G__19646);

(array19525[(1)] = G__19647);

(array19525[(2)] = G__19648);

(array19525[(3)] = G__19649);

(array19525[(4)] = G__19650);

(array19525[(5)] = G__19651);

(array19525[(6)] = G__19652);

(array19525[(7)] = G__19653);

(array19525[(8)] = G__19654);

(array19525[(9)] = G__19655);

(array19525[(10)] = G__19656);

(array19525[(11)] = G__19657);

(array19525[(12)] = G__19658);

(array19525[(13)] = G__19659);

(array19525[(14)] = G__19660);

(array19525[(15)] = G__19661);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__18 = (function (self__,G__19662,G__19663,G__19664,G__19665,G__19666,G__19667,G__19668,G__19669,G__19670,G__19671,G__19672,G__19673,G__19674,G__19675,G__19676,G__19677,G__19678){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(17));
(array19525[(0)] = G__19662);

(array19525[(1)] = G__19663);

(array19525[(2)] = G__19664);

(array19525[(3)] = G__19665);

(array19525[(4)] = G__19666);

(array19525[(5)] = G__19667);

(array19525[(6)] = G__19668);

(array19525[(7)] = G__19669);

(array19525[(8)] = G__19670);

(array19525[(9)] = G__19671);

(array19525[(10)] = G__19672);

(array19525[(11)] = G__19673);

(array19525[(12)] = G__19674);

(array19525[(13)] = G__19675);

(array19525[(14)] = G__19676);

(array19525[(15)] = G__19677);

(array19525[(16)] = G__19678);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__19 = (function (self__,G__19679,G__19680,G__19681,G__19682,G__19683,G__19684,G__19685,G__19686,G__19687,G__19688,G__19689,G__19690,G__19691,G__19692,G__19693,G__19694,G__19695,G__19696){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(18));
(array19525[(0)] = G__19679);

(array19525[(1)] = G__19680);

(array19525[(2)] = G__19681);

(array19525[(3)] = G__19682);

(array19525[(4)] = G__19683);

(array19525[(5)] = G__19684);

(array19525[(6)] = G__19685);

(array19525[(7)] = G__19686);

(array19525[(8)] = G__19687);

(array19525[(9)] = G__19688);

(array19525[(10)] = G__19689);

(array19525[(11)] = G__19690);

(array19525[(12)] = G__19691);

(array19525[(13)] = G__19692);

(array19525[(14)] = G__19693);

(array19525[(15)] = G__19694);

(array19525[(16)] = G__19695);

(array19525[(17)] = G__19696);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__20 = (function (self__,G__19697,G__19698,G__19699,G__19700,G__19701,G__19702,G__19703,G__19704,G__19705,G__19706,G__19707,G__19708,G__19709,G__19710,G__19711,G__19712,G__19713,G__19714,G__19715){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(19));
(array19525[(0)] = G__19697);

(array19525[(1)] = G__19698);

(array19525[(2)] = G__19699);

(array19525[(3)] = G__19700);

(array19525[(4)] = G__19701);

(array19525[(5)] = G__19702);

(array19525[(6)] = G__19703);

(array19525[(7)] = G__19704);

(array19525[(8)] = G__19705);

(array19525[(9)] = G__19706);

(array19525[(10)] = G__19707);

(array19525[(11)] = G__19708);

(array19525[(12)] = G__19709);

(array19525[(13)] = G__19710);

(array19525[(14)] = G__19711);

(array19525[(15)] = G__19712);

(array19525[(16)] = G__19713);

(array19525[(17)] = G__19714);

(array19525[(18)] = G__19715);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__21 = (function (self__,G__19716,G__19717,G__19718,G__19719,G__19720,G__19721,G__19722,G__19723,G__19724,G__19725,G__19726,G__19727,G__19728,G__19729,G__19730,G__19731,G__19732,G__19733,G__19734,G__19735){
var self__ = this;
var self____$1 = this;
var this__19450__auto__ = self____$1;
var array19525 = cljs.core.object_array.call(null,(20));
(array19525[(0)] = G__19716);

(array19525[(1)] = G__19717);

(array19525[(2)] = G__19718);

(array19525[(3)] = G__19719);

(array19525[(4)] = G__19720);

(array19525[(5)] = G__19721);

(array19525[(6)] = G__19722);

(array19525[(7)] = G__19723);

(array19525[(8)] = G__19724);

(array19525[(9)] = G__19725);

(array19525[(10)] = G__19726);

(array19525[(11)] = G__19727);

(array19525[(12)] = G__19728);

(array19525[(13)] = G__19729);

(array19525[(14)] = G__19730);

(array19525[(15)] = G__19731);

(array19525[(16)] = G__19732);

(array19525[(17)] = G__19733);

(array19525[(18)] = G__19734);

(array19525[(19)] = G__19735);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});
var G__19745__22 = (function (self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});
G__19745 = function(self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
switch(arguments.length){
case 1:
return G__19745__1.call(this,self__);
case 2:
return G__19745__2.call(this,self__,p01);
case 3:
return G__19745__3.call(this,self__,p01,p02);
case 4:
return G__19745__4.call(this,self__,p01,p02,p03);
case 5:
return G__19745__5.call(this,self__,p01,p02,p03,p04);
case 6:
return G__19745__6.call(this,self__,p01,p02,p03,p04,p05);
case 7:
return G__19745__7.call(this,self__,p01,p02,p03,p04,p05,p06);
case 8:
return G__19745__8.call(this,self__,p01,p02,p03,p04,p05,p06,p07);
case 9:
return G__19745__9.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08);
case 10:
return G__19745__10.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09);
case 11:
return G__19745__11.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10);
case 12:
return G__19745__12.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11);
case 13:
return G__19745__13.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12);
case 14:
return G__19745__14.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13);
case 15:
return G__19745__15.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14);
case 16:
return G__19745__16.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15);
case 17:
return G__19745__17.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16);
case 18:
return G__19745__18.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17);
case 19:
return G__19745__19.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18);
case 20:
return G__19745__20.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19);
case 21:
return G__19745__21.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20);
case 22:
return G__19745__22.call(this,self__,p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19745.cljs$core$IFn$_invoke$arity$1 = G__19745__1;
G__19745.cljs$core$IFn$_invoke$arity$2 = G__19745__2;
G__19745.cljs$core$IFn$_invoke$arity$3 = G__19745__3;
G__19745.cljs$core$IFn$_invoke$arity$4 = G__19745__4;
G__19745.cljs$core$IFn$_invoke$arity$5 = G__19745__5;
G__19745.cljs$core$IFn$_invoke$arity$6 = G__19745__6;
G__19745.cljs$core$IFn$_invoke$arity$7 = G__19745__7;
G__19745.cljs$core$IFn$_invoke$arity$8 = G__19745__8;
G__19745.cljs$core$IFn$_invoke$arity$9 = G__19745__9;
G__19745.cljs$core$IFn$_invoke$arity$10 = G__19745__10;
G__19745.cljs$core$IFn$_invoke$arity$11 = G__19745__11;
G__19745.cljs$core$IFn$_invoke$arity$12 = G__19745__12;
G__19745.cljs$core$IFn$_invoke$arity$13 = G__19745__13;
G__19745.cljs$core$IFn$_invoke$arity$14 = G__19745__14;
G__19745.cljs$core$IFn$_invoke$arity$15 = G__19745__15;
G__19745.cljs$core$IFn$_invoke$arity$16 = G__19745__16;
G__19745.cljs$core$IFn$_invoke$arity$17 = G__19745__17;
G__19745.cljs$core$IFn$_invoke$arity$18 = G__19745__18;
G__19745.cljs$core$IFn$_invoke$arity$19 = G__19745__19;
G__19745.cljs$core$IFn$_invoke$arity$20 = G__19745__20;
G__19745.cljs$core$IFn$_invoke$arity$21 = G__19745__21;
G__19745.cljs$core$IFn$_invoke$arity$22 = G__19745__22;
return G__19745;
})()
;

com.rpl.specter.impl.ParamsNeededPath.prototype.apply = (function (self__,args19739){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args19739)));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(0));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$1 = (function (G__19526){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(1));
(array19525[(0)] = G__19526);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$2 = (function (G__19527,G__19528){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(2));
(array19525[(0)] = G__19527);

(array19525[(1)] = G__19528);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$3 = (function (G__19529,G__19530,G__19531){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(3));
(array19525[(0)] = G__19529);

(array19525[(1)] = G__19530);

(array19525[(2)] = G__19531);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$4 = (function (G__19532,G__19533,G__19534,G__19535){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(4));
(array19525[(0)] = G__19532);

(array19525[(1)] = G__19533);

(array19525[(2)] = G__19534);

(array19525[(3)] = G__19535);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$5 = (function (G__19536,G__19537,G__19538,G__19539,G__19540){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(5));
(array19525[(0)] = G__19536);

(array19525[(1)] = G__19537);

(array19525[(2)] = G__19538);

(array19525[(3)] = G__19539);

(array19525[(4)] = G__19540);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$6 = (function (G__19541,G__19542,G__19543,G__19544,G__19545,G__19546){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(6));
(array19525[(0)] = G__19541);

(array19525[(1)] = G__19542);

(array19525[(2)] = G__19543);

(array19525[(3)] = G__19544);

(array19525[(4)] = G__19545);

(array19525[(5)] = G__19546);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$7 = (function (G__19547,G__19548,G__19549,G__19550,G__19551,G__19552,G__19553){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(7));
(array19525[(0)] = G__19547);

(array19525[(1)] = G__19548);

(array19525[(2)] = G__19549);

(array19525[(3)] = G__19550);

(array19525[(4)] = G__19551);

(array19525[(5)] = G__19552);

(array19525[(6)] = G__19553);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$8 = (function (G__19554,G__19555,G__19556,G__19557,G__19558,G__19559,G__19560,G__19561){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(8));
(array19525[(0)] = G__19554);

(array19525[(1)] = G__19555);

(array19525[(2)] = G__19556);

(array19525[(3)] = G__19557);

(array19525[(4)] = G__19558);

(array19525[(5)] = G__19559);

(array19525[(6)] = G__19560);

(array19525[(7)] = G__19561);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$9 = (function (G__19562,G__19563,G__19564,G__19565,G__19566,G__19567,G__19568,G__19569,G__19570){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(9));
(array19525[(0)] = G__19562);

(array19525[(1)] = G__19563);

(array19525[(2)] = G__19564);

(array19525[(3)] = G__19565);

(array19525[(4)] = G__19566);

(array19525[(5)] = G__19567);

(array19525[(6)] = G__19568);

(array19525[(7)] = G__19569);

(array19525[(8)] = G__19570);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$10 = (function (G__19571,G__19572,G__19573,G__19574,G__19575,G__19576,G__19577,G__19578,G__19579,G__19580){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(10));
(array19525[(0)] = G__19571);

(array19525[(1)] = G__19572);

(array19525[(2)] = G__19573);

(array19525[(3)] = G__19574);

(array19525[(4)] = G__19575);

(array19525[(5)] = G__19576);

(array19525[(6)] = G__19577);

(array19525[(7)] = G__19578);

(array19525[(8)] = G__19579);

(array19525[(9)] = G__19580);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$11 = (function (G__19581,G__19582,G__19583,G__19584,G__19585,G__19586,G__19587,G__19588,G__19589,G__19590,G__19591){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(11));
(array19525[(0)] = G__19581);

(array19525[(1)] = G__19582);

(array19525[(2)] = G__19583);

(array19525[(3)] = G__19584);

(array19525[(4)] = G__19585);

(array19525[(5)] = G__19586);

(array19525[(6)] = G__19587);

(array19525[(7)] = G__19588);

(array19525[(8)] = G__19589);

(array19525[(9)] = G__19590);

(array19525[(10)] = G__19591);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$12 = (function (G__19592,G__19593,G__19594,G__19595,G__19596,G__19597,G__19598,G__19599,G__19600,G__19601,G__19602,G__19603){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(12));
(array19525[(0)] = G__19592);

(array19525[(1)] = G__19593);

(array19525[(2)] = G__19594);

(array19525[(3)] = G__19595);

(array19525[(4)] = G__19596);

(array19525[(5)] = G__19597);

(array19525[(6)] = G__19598);

(array19525[(7)] = G__19599);

(array19525[(8)] = G__19600);

(array19525[(9)] = G__19601);

(array19525[(10)] = G__19602);

(array19525[(11)] = G__19603);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$13 = (function (G__19604,G__19605,G__19606,G__19607,G__19608,G__19609,G__19610,G__19611,G__19612,G__19613,G__19614,G__19615,G__19616){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(13));
(array19525[(0)] = G__19604);

(array19525[(1)] = G__19605);

(array19525[(2)] = G__19606);

(array19525[(3)] = G__19607);

(array19525[(4)] = G__19608);

(array19525[(5)] = G__19609);

(array19525[(6)] = G__19610);

(array19525[(7)] = G__19611);

(array19525[(8)] = G__19612);

(array19525[(9)] = G__19613);

(array19525[(10)] = G__19614);

(array19525[(11)] = G__19615);

(array19525[(12)] = G__19616);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$14 = (function (G__19617,G__19618,G__19619,G__19620,G__19621,G__19622,G__19623,G__19624,G__19625,G__19626,G__19627,G__19628,G__19629,G__19630){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(14));
(array19525[(0)] = G__19617);

(array19525[(1)] = G__19618);

(array19525[(2)] = G__19619);

(array19525[(3)] = G__19620);

(array19525[(4)] = G__19621);

(array19525[(5)] = G__19622);

(array19525[(6)] = G__19623);

(array19525[(7)] = G__19624);

(array19525[(8)] = G__19625);

(array19525[(9)] = G__19626);

(array19525[(10)] = G__19627);

(array19525[(11)] = G__19628);

(array19525[(12)] = G__19629);

(array19525[(13)] = G__19630);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$15 = (function (G__19631,G__19632,G__19633,G__19634,G__19635,G__19636,G__19637,G__19638,G__19639,G__19640,G__19641,G__19642,G__19643,G__19644,G__19645){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(15));
(array19525[(0)] = G__19631);

(array19525[(1)] = G__19632);

(array19525[(2)] = G__19633);

(array19525[(3)] = G__19634);

(array19525[(4)] = G__19635);

(array19525[(5)] = G__19636);

(array19525[(6)] = G__19637);

(array19525[(7)] = G__19638);

(array19525[(8)] = G__19639);

(array19525[(9)] = G__19640);

(array19525[(10)] = G__19641);

(array19525[(11)] = G__19642);

(array19525[(12)] = G__19643);

(array19525[(13)] = G__19644);

(array19525[(14)] = G__19645);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$16 = (function (G__19646,G__19647,G__19648,G__19649,G__19650,G__19651,G__19652,G__19653,G__19654,G__19655,G__19656,G__19657,G__19658,G__19659,G__19660,G__19661){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(16));
(array19525[(0)] = G__19646);

(array19525[(1)] = G__19647);

(array19525[(2)] = G__19648);

(array19525[(3)] = G__19649);

(array19525[(4)] = G__19650);

(array19525[(5)] = G__19651);

(array19525[(6)] = G__19652);

(array19525[(7)] = G__19653);

(array19525[(8)] = G__19654);

(array19525[(9)] = G__19655);

(array19525[(10)] = G__19656);

(array19525[(11)] = G__19657);

(array19525[(12)] = G__19658);

(array19525[(13)] = G__19659);

(array19525[(14)] = G__19660);

(array19525[(15)] = G__19661);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$17 = (function (G__19662,G__19663,G__19664,G__19665,G__19666,G__19667,G__19668,G__19669,G__19670,G__19671,G__19672,G__19673,G__19674,G__19675,G__19676,G__19677,G__19678){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(17));
(array19525[(0)] = G__19662);

(array19525[(1)] = G__19663);

(array19525[(2)] = G__19664);

(array19525[(3)] = G__19665);

(array19525[(4)] = G__19666);

(array19525[(5)] = G__19667);

(array19525[(6)] = G__19668);

(array19525[(7)] = G__19669);

(array19525[(8)] = G__19670);

(array19525[(9)] = G__19671);

(array19525[(10)] = G__19672);

(array19525[(11)] = G__19673);

(array19525[(12)] = G__19674);

(array19525[(13)] = G__19675);

(array19525[(14)] = G__19676);

(array19525[(15)] = G__19677);

(array19525[(16)] = G__19678);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$18 = (function (G__19679,G__19680,G__19681,G__19682,G__19683,G__19684,G__19685,G__19686,G__19687,G__19688,G__19689,G__19690,G__19691,G__19692,G__19693,G__19694,G__19695,G__19696){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(18));
(array19525[(0)] = G__19679);

(array19525[(1)] = G__19680);

(array19525[(2)] = G__19681);

(array19525[(3)] = G__19682);

(array19525[(4)] = G__19683);

(array19525[(5)] = G__19684);

(array19525[(6)] = G__19685);

(array19525[(7)] = G__19686);

(array19525[(8)] = G__19687);

(array19525[(9)] = G__19688);

(array19525[(10)] = G__19689);

(array19525[(11)] = G__19690);

(array19525[(12)] = G__19691);

(array19525[(13)] = G__19692);

(array19525[(14)] = G__19693);

(array19525[(15)] = G__19694);

(array19525[(16)] = G__19695);

(array19525[(17)] = G__19696);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$19 = (function (G__19697,G__19698,G__19699,G__19700,G__19701,G__19702,G__19703,G__19704,G__19705,G__19706,G__19707,G__19708,G__19709,G__19710,G__19711,G__19712,G__19713,G__19714,G__19715){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(19));
(array19525[(0)] = G__19697);

(array19525[(1)] = G__19698);

(array19525[(2)] = G__19699);

(array19525[(3)] = G__19700);

(array19525[(4)] = G__19701);

(array19525[(5)] = G__19702);

(array19525[(6)] = G__19703);

(array19525[(7)] = G__19704);

(array19525[(8)] = G__19705);

(array19525[(9)] = G__19706);

(array19525[(10)] = G__19707);

(array19525[(11)] = G__19708);

(array19525[(12)] = G__19709);

(array19525[(13)] = G__19710);

(array19525[(14)] = G__19711);

(array19525[(15)] = G__19712);

(array19525[(16)] = G__19713);

(array19525[(17)] = G__19714);

(array19525[(18)] = G__19715);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$20 = (function (G__19716,G__19717,G__19718,G__19719,G__19720,G__19721,G__19722,G__19723,G__19724,G__19725,G__19726,G__19727,G__19728,G__19729,G__19730,G__19731,G__19732,G__19733,G__19734,G__19735){
var self__ = this;
var this__19450__auto__ = this;
var array19525 = cljs.core.object_array.call(null,(20));
(array19525[(0)] = G__19716);

(array19525[(1)] = G__19717);

(array19525[(2)] = G__19718);

(array19525[(3)] = G__19719);

(array19525[(4)] = G__19720);

(array19525[(5)] = G__19721);

(array19525[(6)] = G__19722);

(array19525[(7)] = G__19723);

(array19525[(8)] = G__19724);

(array19525[(9)] = G__19725);

(array19525[(10)] = G__19726);

(array19525[(11)] = G__19727);

(array19525[(12)] = G__19728);

(array19525[(13)] = G__19729);

(array19525[(14)] = G__19730);

(array19525[(15)] = G__19731);

(array19525[(16)] = G__19732);

(array19525[(17)] = G__19733);

(array19525[(18)] = G__19734);

(array19525[(19)] = G__19735);

return com.rpl.specter.impl.bind_params_STAR_.call(null,this__19450__auto__,array19525,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IFn$_invoke$arity$21 = (function (p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,rest){
var self__ = this;
var this$ = this;
var a = cljs.core.object_array.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [p01,p02,p03,p04,p05,p06,p07,p08,p09,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20], null),rest));
return com.rpl.specter.impl.bind_params_STAR_.call(null,this$,a,(0));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__18714__auto__){
var self__ = this;
var this__18714__auto____$1 = this;
return self__.__meta;
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__18710__auto__){
var self__ = this;
var this__18710__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__18720__auto__){
var self__ = this;
var this__18720__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__18711__auto__){
var self__ = this;
var this__18711__auto____$1 = this;
var h__18537__auto__ = self__.__hash;
if(!((h__18537__auto__ == null))){
return h__18537__auto__;
} else {
var h__18537__auto____$1 = cljs.core.hash_imap.call(null,this__18711__auto____$1);
self__.__hash = h__18537__auto____$1;

return h__18537__auto____$1;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__18712__auto__,other__18713__auto__){
var self__ = this;
var this__18712__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18090__auto__ = other__18713__auto__;
if(cljs.core.truth_(and__18090__auto__)){
var and__18090__auto____$1 = (this__18712__auto____$1.constructor === other__18713__auto__.constructor);
if(and__18090__auto____$1){
return cljs.core.equiv_map.call(null,this__18712__auto____$1,other__18713__auto__);
} else {
return and__18090__auto____$1;
}
} else {
return and__18090__auto__;
}
})())){
return true;
} else {
return false;
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__18725__auto__,k__18726__auto__){
var self__ = this;
var this__18725__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),null], null), null),k__18726__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__18725__auto____$1),self__.__meta),k__18726__auto__);
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__18726__auto__)),null));
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__18723__auto__,k__18724__auto__,G__19736){
var self__ = this;
var this__18723__auto____$1 = this;
var pred__19741 = cljs.core.keyword_identical_QMARK_;
var expr__19742 = k__18724__auto__;
if(cljs.core.truth_(pred__19741.call(null,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),expr__19742))){
return (new com.rpl.specter.impl.ParamsNeededPath(G__19736,self__.num_needed_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__19741.call(null,new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),expr__19742))){
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,G__19736,self__.__meta,self__.__extmap,null));
} else {
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__18724__auto__,G__19736),null));
}
}
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__18728__auto__){
var self__ = this;
var this__18728__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),self__.transform_fns],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097),self__.num_needed_params],null))], null),self__.__extmap));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__18715__auto__,G__19736){
var self__ = this;
var this__18715__auto____$1 = this;
return (new com.rpl.specter.impl.ParamsNeededPath(self__.transform_fns,self__.num_needed_params,G__19736,self__.__extmap,self__.__hash));
});

com.rpl.specter.impl.ParamsNeededPath.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__18721__auto__,entry__18722__auto__){
var self__ = this;
var this__18721__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__18722__auto__)){
return cljs.core._assoc.call(null,this__18721__auto____$1,cljs.core._nth.call(null,entry__18722__auto__,(0)),cljs.core._nth.call(null,entry__18722__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__18721__auto____$1,entry__18722__auto__);
}
});

com.rpl.specter.impl.ParamsNeededPath.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transform-fns","transform-fns",-1985393120,null),new cljs.core.Symbol(null,"num-needed-params","num-needed-params",421205430,null)], null);
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$type = true;

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrSeq = (function (this__18750__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.ParamsNeededPath.cljs$lang$ctorPrWriter = (function (this__18750__auto__,writer__18751__auto__){
return cljs.core._write.call(null,writer__18751__auto__,"com.rpl.specter.impl/ParamsNeededPath");
});

com.rpl.specter.impl.__GT_ParamsNeededPath = (function com$rpl$specter$impl$__GT_ParamsNeededPath(transform_fns,num_needed_params){
return (new com.rpl.specter.impl.ParamsNeededPath(transform_fns,num_needed_params,null,null,null));
});

com.rpl.specter.impl.map__GT_ParamsNeededPath = (function com$rpl$specter$impl$map__GT_ParamsNeededPath(G__19738){
return (new com.rpl.specter.impl.ParamsNeededPath(new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649).cljs$core$IFn$_invoke$arity$1(G__19738),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097).cljs$core$IFn$_invoke$arity$1(G__19738),null,cljs.core.dissoc.call(null,G__19738,new cljs.core.Keyword(null,"transform-fns","transform-fns",669042649),new cljs.core.Keyword(null,"num-needed-params","num-needed-params",-1219326097)),null));
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"select*","select*",-1829914060),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__19754,G__19755,G__19756){
return com.rpl.specter.protocols.select_STAR_.call(null,G__19754,G__19755,G__19756);
}):com.rpl.specter.protocols.select_STAR_),new cljs.core.Keyword(null,"transform*","transform*",-1613794522),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$StructurePath$))?true:false):false))?(function (G__19758,G__19759,G__19760){
return com.rpl.specter.protocols.transform_STAR_.call(null,G__19758,G__19759,G__19760);
}):com.rpl.specter.protocols.transform_STAR_)], null);
});
com.rpl.specter.impl.collector_impl = (function com$rpl$specter$impl$collector_impl(obj){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collect-val","collect-val",801894069),((((!((obj == null)))?(((false) || (obj.com$rpl$specter$protocols$Collector$))?true:false):false))?(function (G__19765,G__19766){
return com.rpl.specter.protocols.collect_val.call(null,G__19765,G__19766);
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
var or__18102__auto__ = cljs.core.fn_QMARK_.call(null,obj);
if(or__18102__auto__){
return or__18102__auto__;
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
var x__18757__auto__ = (((this$ == null))?null:this$);
var m__18758__auto__ = (com.rpl.specter.impl.coerce_path[goog.typeOf(x__18757__auto__)]);
if(!((m__18758__auto__ == null))){
return m__18758__auto__.call(null,this$);
} else {
var m__18758__auto____$1 = (com.rpl.specter.impl.coerce_path["_"]);
if(!((m__18758__auto____$1 == null))){
return m__18758__auto____$1.call(null,this$);
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
com.rpl.specter.impl.combine_same_types = (function com$rpl$specter$impl$combine_same_types(p__19773){
var vec__19775 = p__19773;
var f = cljs.core.nth.call(null,vec__19775,(0),null);
var _ = cljs.core.nthnext.call(null,vec__19775,(1));
var all = vec__19775;
var exs = f.executors;
var t = exs.type;
var combiner = ((cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"richpath","richpath",-150197948)))?((function (exs,t,vec__19775,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__19775,f,_,all){
return (function (params,params_idx,vals,structure,next_fn){
return curr.call(null,params,params_idx,vals,structure,((function (exs,t,vec__19775,f,_,all){
return (function (params_next,params_idx_next,vals_next,structure_next){
return next.call(null,params_next,params_idx_next,vals_next,structure_next,next_fn);
});})(exs,t,vec__19775,f,_,all))
);
});
;})(exs,t,vec__19775,f,_,all))
});})(exs,t,vec__19775,f,_,all))
:((function (exs,t,vec__19775,f,_,all){
return (function (curr,next){
return ((function (exs,t,vec__19775,f,_,all){
return (function (structure,next_fn){
return curr.call(null,structure,((function (exs,t,vec__19775,f,_,all){
return (function (structure__$1){
return next.call(null,structure__$1,next_fn);
});})(exs,t,vec__19775,f,_,all))
);
});
;})(exs,t,vec__19775,f,_,all))
});})(exs,t,vec__19775,f,_,all))
);
return cljs.core.reduce.call(null,((function (exs,t,combiner,vec__19775,f,_,all){
return (function (curr,next){
return com.rpl.specter.impl.__GT_TransformFunctions.call(null,exs,combiner.call(null,curr.selector,next.selector),combiner.call(null,curr.transformer,next.transformer));
});})(exs,t,combiner,vec__19775,f,_,all))
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
return (function (p1__19782_SHARP_){
return (p1__19782_SHARP_ instanceof com.rpl.specter.impl.ParamsNeededPath);
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
var x__18757__auto__ = (((cell == null))?null:cell);
var m__18758__auto__ = (com.rpl.specter.impl.set_cell[goog.typeOf(x__18757__auto__)]);
if(!((m__18758__auto__ == null))){
return m__18758__auto__.call(null,cell,x);
} else {
var m__18758__auto____$1 = (com.rpl.specter.impl.set_cell["_"]);
if(!((m__18758__auto____$1 == null))){
return m__18758__auto____$1.call(null,cell,x);
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

com.rpl.specter.impl.MutableCell.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"com.rpl.specter.impl/MutableCell");
});

com.rpl.specter.impl.__GT_MutableCell = (function com$rpl$specter$impl$__GT_MutableCell(q){
return (new com.rpl.specter.impl.MutableCell(q));
});

com.rpl.specter.impl.mutable_cell = (function com$rpl$specter$impl$mutable_cell(var_args){
var args19835 = [];
var len__19160__auto___19847 = arguments.length;
var i__19161__auto___19848 = (0);
while(true){
if((i__19161__auto___19848 < len__19160__auto___19847)){
args19835.push((arguments[i__19161__auto___19848]));

var G__19851 = (i__19161__auto___19848 + (1));
i__19161__auto___19848 = G__19851;
continue;
} else {
}
break;
}

var G__19846 = args19835.length;
switch (G__19846) {
case 0:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19835.length)].join('')));

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
var x__18757__auto__ = (((s == null))?null:s);
var m__18758__auto__ = (com.rpl.specter.impl.set_first[goog.typeOf(x__18757__auto__)]);
if(!((m__18758__auto__ == null))){
return m__18758__auto__.call(null,s,val);
} else {
var m__18758__auto____$1 = (com.rpl.specter.impl.set_first["_"]);
if(!((m__18758__auto____$1 == null))){
return m__18758__auto____$1.call(null,s,val);
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
var x__18757__auto__ = (((s == null))?null:s);
var m__18758__auto__ = (com.rpl.specter.impl.set_last[goog.typeOf(x__18757__auto__)]);
if(!((m__18758__auto__ == null))){
return m__18758__auto__.call(null,s,val);
} else {
var m__18758__auto____$1 = (com.rpl.specter.impl.set_last["_"]);
if(!((m__18758__auto____$1 == null))){
return m__18758__auto____$1.call(null,s,val);
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
if(cljs.core.truth_(pred.call(null,structure))){
return on_match_fn.call(null,structure);
} else {
var ret = clojure.walk.walk.call(null,cljs.core.partial.call(null,com$rpl$specter$impl$codewalk_until,pred,on_match_fn),cljs.core.identity,structure);
if(cljs.core.truth_((function (){var and__18090__auto__ = com.rpl.specter.impl.fn_invocation_QMARK_.call(null,structure);
if(cljs.core.truth_(and__18090__auto__)){
return com.rpl.specter.impl.fn_invocation_QMARK_.call(null,ret);
} else {
return and__18090__auto__;
}
})())){
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
com.rpl.specter.impl.filter_PLUS_ancestry = (function com$rpl$specter$impl$filter_PLUS_ancestry(path,aseq){
var aseq__$1 = cljs.core.vec.call(null,aseq);
return cljs.core.reduce.call(null,((function (aseq__$1){
return (function (p__20027,i){
var vec__20028 = p__20027;
var s = cljs.core.nth.call(null,vec__20028,(0),null);
var m = cljs.core.nth.call(null,vec__20028,(1),null);
var orig = vec__20028;
var e = cljs.core.get.call(null,aseq__$1,i);
var pos = cljs.core.count.call(null,s);
if(cljs.core.truth_(com.rpl.specter.impl.selected_QMARK__STAR_.call(null,path,e))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,s,e),cljs.core.assoc.call(null,m,pos,i)], null);
} else {
return orig;
}
});})(aseq__$1))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.range.call(null,cljs.core.count.call(null,aseq__$1)));
});
com.rpl.specter.impl.key_select = (function com$rpl$specter$impl$key_select(akey,structure,next_fn){
return next_fn.call(null,cljs.core.get.call(null,structure,akey));
});
com.rpl.specter.impl.key_transform = (function com$rpl$specter$impl$key_transform(akey,structure,next_fn){
return cljs.core.assoc.call(null,structure,akey,next_fn.call(null,cljs.core.get.call(null,structure,akey)));
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

com.rpl.specter.impl.AllStructurePath.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"com.rpl.specter.impl/AllStructurePath");
});

com.rpl.specter.impl.__GT_AllStructurePath = (function com$rpl$specter$impl$__GT_AllStructurePath(){
return (new com.rpl.specter.impl.AllStructurePath());
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$ = true;

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$select_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.reducers.mapcat.call(null,next_fn,structure));
});

com.rpl.specter.impl.AllStructurePath.prototype.com$rpl$specter$protocols$StructurePath$transform_STAR_$arity$3 = (function (this$,structure,next_fn){
var this$__$1 = this;
var empty_structure = cljs.core.empty.call(null,structure);
if(cljs.core.list_QMARK_.call(null,empty_structure)){
return cljs.core.doall.call(null,cljs.core.map.call(null,next_fn,structure));
} else {
return cljs.core.into.call(null,empty_structure,clojure.core.reducers.map.call(null,next_fn,structure));
}
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

com.rpl.specter.impl.ValCollect.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"com.rpl.specter.impl/ValCollect");
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

com.rpl.specter.impl.PosStructurePath.cljs$lang$ctorPrWriter = (function (this__18700__auto__,writer__18701__auto__,opt__18702__auto__){
return cljs.core._write.call(null,writer__18701__auto__,"com.rpl.specter.impl/PosStructurePath");
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
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.drop_while.call(null,(function (p__20099){
var vec__20100 = p__20099;
var c_selector = cljs.core.nth.call(null,vec__20100,(0),null);
var _ = cljs.core.nth.call(null,vec__20100,(1),null);
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