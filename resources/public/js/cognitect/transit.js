// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__23595_23599 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__23596_23600 = null;
var count__23597_23601 = (0);
var i__23598_23602 = (0);
while(true){
if((i__23598_23602 < count__23597_23601)){
var k_23603 = cljs.core._nth.call(null,chunk__23596_23600,i__23598_23602);
var v_23604 = (b[k_23603]);
(a[k_23603] = v_23604);

var G__23605 = seq__23595_23599;
var G__23606 = chunk__23596_23600;
var G__23607 = count__23597_23601;
var G__23608 = (i__23598_23602 + (1));
seq__23595_23599 = G__23605;
chunk__23596_23600 = G__23606;
count__23597_23601 = G__23607;
i__23598_23602 = G__23608;
continue;
} else {
var temp__4657__auto___23612 = cljs.core.seq.call(null,seq__23595_23599);
if(temp__4657__auto___23612){
var seq__23595_23614__$1 = temp__4657__auto___23612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23595_23614__$1)){
var c__19529__auto___23615 = cljs.core.chunk_first.call(null,seq__23595_23614__$1);
var G__23616 = cljs.core.chunk_rest.call(null,seq__23595_23614__$1);
var G__23617 = c__19529__auto___23615;
var G__23618 = cljs.core.count.call(null,c__19529__auto___23615);
var G__23619 = (0);
seq__23595_23599 = G__23616;
chunk__23596_23600 = G__23617;
count__23597_23601 = G__23618;
i__23598_23602 = G__23619;
continue;
} else {
var k_23620 = cljs.core.first.call(null,seq__23595_23614__$1);
var v_23621 = (b[k_23620]);
(a[k_23620] = v_23621);

var G__23622 = cljs.core.next.call(null,seq__23595_23614__$1);
var G__23623 = null;
var G__23624 = (0);
var G__23625 = (0);
seq__23595_23599 = G__23622;
chunk__23596_23600 = G__23623;
count__23597_23601 = G__23624;
i__23598_23602 = G__23625;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args23703 = [];
var len__19784__auto___23711 = arguments.length;
var i__19785__auto___23712 = (0);
while(true){
if((i__19785__auto___23712 < len__19784__auto___23711)){
args23703.push((arguments[i__19785__auto___23712]));

var G__23715 = (i__19785__auto___23712 + (1));
i__19785__auto___23712 = G__23715;
continue;
} else {
}
break;
}

var G__23705 = args23703.length;
switch (G__23705) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23703.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__23734 = (i + (2));
var G__23735 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__23734;
ret = G__23735;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23762_23787 = cljs.core.seq.call(null,v);
var chunk__23763_23788 = null;
var count__23764_23789 = (0);
var i__23765_23790 = (0);
while(true){
if((i__23765_23790 < count__23764_23789)){
var x_23793 = cljs.core._nth.call(null,chunk__23763_23788,i__23765_23790);
ret.push(x_23793);

var G__23794 = seq__23762_23787;
var G__23795 = chunk__23763_23788;
var G__23796 = count__23764_23789;
var G__23797 = (i__23765_23790 + (1));
seq__23762_23787 = G__23794;
chunk__23763_23788 = G__23795;
count__23764_23789 = G__23796;
i__23765_23790 = G__23797;
continue;
} else {
var temp__4657__auto___23798 = cljs.core.seq.call(null,seq__23762_23787);
if(temp__4657__auto___23798){
var seq__23762_23799__$1 = temp__4657__auto___23798;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23762_23799__$1)){
var c__19529__auto___23800 = cljs.core.chunk_first.call(null,seq__23762_23799__$1);
var G__23801 = cljs.core.chunk_rest.call(null,seq__23762_23799__$1);
var G__23802 = c__19529__auto___23800;
var G__23803 = cljs.core.count.call(null,c__19529__auto___23800);
var G__23804 = (0);
seq__23762_23787 = G__23801;
chunk__23763_23788 = G__23802;
count__23764_23789 = G__23803;
i__23765_23790 = G__23804;
continue;
} else {
var x_23809 = cljs.core.first.call(null,seq__23762_23799__$1);
ret.push(x_23809);

var G__23811 = cljs.core.next.call(null,seq__23762_23799__$1);
var G__23812 = null;
var G__23813 = (0);
var G__23814 = (0);
seq__23762_23787 = G__23811;
chunk__23763_23788 = G__23812;
count__23764_23789 = G__23813;
i__23765_23790 = G__23814;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23831_23842 = cljs.core.seq.call(null,v);
var chunk__23832_23843 = null;
var count__23833_23844 = (0);
var i__23834_23845 = (0);
while(true){
if((i__23834_23845 < count__23833_23844)){
var x_23846 = cljs.core._nth.call(null,chunk__23832_23843,i__23834_23845);
ret.push(x_23846);

var G__23847 = seq__23831_23842;
var G__23848 = chunk__23832_23843;
var G__23849 = count__23833_23844;
var G__23850 = (i__23834_23845 + (1));
seq__23831_23842 = G__23847;
chunk__23832_23843 = G__23848;
count__23833_23844 = G__23849;
i__23834_23845 = G__23850;
continue;
} else {
var temp__4657__auto___23855 = cljs.core.seq.call(null,seq__23831_23842);
if(temp__4657__auto___23855){
var seq__23831_23856__$1 = temp__4657__auto___23855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23831_23856__$1)){
var c__19529__auto___23857 = cljs.core.chunk_first.call(null,seq__23831_23856__$1);
var G__23858 = cljs.core.chunk_rest.call(null,seq__23831_23856__$1);
var G__23859 = c__19529__auto___23857;
var G__23860 = cljs.core.count.call(null,c__19529__auto___23857);
var G__23861 = (0);
seq__23831_23842 = G__23858;
chunk__23832_23843 = G__23859;
count__23833_23844 = G__23860;
i__23834_23845 = G__23861;
continue;
} else {
var x_23865 = cljs.core.first.call(null,seq__23831_23856__$1);
ret.push(x_23865);

var G__23866 = cljs.core.next.call(null,seq__23831_23856__$1);
var G__23867 = null;
var G__23868 = (0);
var G__23869 = (0);
seq__23831_23842 = G__23866;
chunk__23832_23843 = G__23867;
count__23833_23844 = G__23868;
i__23834_23845 = G__23869;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__23874_23890 = cljs.core.seq.call(null,v);
var chunk__23875_23891 = null;
var count__23876_23892 = (0);
var i__23877_23893 = (0);
while(true){
if((i__23877_23893 < count__23876_23892)){
var x_23905 = cljs.core._nth.call(null,chunk__23875_23891,i__23877_23893);
ret.push(x_23905);

var G__23916 = seq__23874_23890;
var G__23917 = chunk__23875_23891;
var G__23918 = count__23876_23892;
var G__23919 = (i__23877_23893 + (1));
seq__23874_23890 = G__23916;
chunk__23875_23891 = G__23917;
count__23876_23892 = G__23918;
i__23877_23893 = G__23919;
continue;
} else {
var temp__4657__auto___23941 = cljs.core.seq.call(null,seq__23874_23890);
if(temp__4657__auto___23941){
var seq__23874_23946__$1 = temp__4657__auto___23941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23874_23946__$1)){
var c__19529__auto___23953 = cljs.core.chunk_first.call(null,seq__23874_23946__$1);
var G__23959 = cljs.core.chunk_rest.call(null,seq__23874_23946__$1);
var G__23960 = c__19529__auto___23953;
var G__23961 = cljs.core.count.call(null,c__19529__auto___23953);
var G__23962 = (0);
seq__23874_23890 = G__23959;
chunk__23875_23891 = G__23960;
count__23876_23892 = G__23961;
i__23877_23893 = G__23962;
continue;
} else {
var x_23973 = cljs.core.first.call(null,seq__23874_23946__$1);
ret.push(x_23973);

var G__23979 = cljs.core.next.call(null,seq__23874_23946__$1);
var G__23980 = null;
var G__23981 = (0);
var G__23982 = (0);
seq__23874_23890 = G__23979;
chunk__23875_23891 = G__23980;
count__23876_23892 = G__23981;
i__23877_23893 = G__23982;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args24128 = [];
var len__19784__auto___24212 = arguments.length;
var i__19785__auto___24213 = (0);
while(true){
if((i__19785__auto___24213 < len__19784__auto___24212)){
args24128.push((arguments[i__19785__auto___24213]));

var G__24214 = (i__19785__auto___24213 + (1));
i__19785__auto___24213 = G__24214;
continue;
} else {
}
break;
}

var G__24190 = args24128.length;
switch (G__24190) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24128.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__24201 = obj;
G__24201.push(kfn.call(null,k),vfn.call(null,v));

return G__24201;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x24202 = cljs.core.clone.call(null,handlers);
x24202.forEach = ((function (x24202,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__24205 = cljs.core.seq.call(null,coll);
var chunk__24206 = null;
var count__24207 = (0);
var i__24208 = (0);
while(true){
if((i__24208 < count__24207)){
var vec__24209 = cljs.core._nth.call(null,chunk__24206,i__24208);
var k = cljs.core.nth.call(null,vec__24209,(0),null);
var v = cljs.core.nth.call(null,vec__24209,(1),null);
f.call(null,v,k);

var G__24283 = seq__24205;
var G__24284 = chunk__24206;
var G__24285 = count__24207;
var G__24286 = (i__24208 + (1));
seq__24205 = G__24283;
chunk__24206 = G__24284;
count__24207 = G__24285;
i__24208 = G__24286;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24205);
if(temp__4657__auto__){
var seq__24205__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24205__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__24205__$1);
var G__24313 = cljs.core.chunk_rest.call(null,seq__24205__$1);
var G__24314 = c__19529__auto__;
var G__24315 = cljs.core.count.call(null,c__19529__auto__);
var G__24316 = (0);
seq__24205 = G__24313;
chunk__24206 = G__24314;
count__24207 = G__24315;
i__24208 = G__24316;
continue;
} else {
var vec__24211 = cljs.core.first.call(null,seq__24205__$1);
var k = cljs.core.nth.call(null,vec__24211,(0),null);
var v = cljs.core.nth.call(null,vec__24211,(1),null);
f.call(null,v,k);

var G__24321 = cljs.core.next.call(null,seq__24205__$1);
var G__24322 = null;
var G__24323 = (0);
var G__24324 = (0);
seq__24205 = G__24321;
chunk__24206 = G__24322;
count__24207 = G__24323;
i__24208 = G__24324;
continue;
}
} else {
return null;
}
}
break;
}
});})(x24202,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x24202;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args24328 = [];
var len__19784__auto___24355 = arguments.length;
var i__19785__auto___24356 = (0);
while(true){
if((i__19785__auto___24356 < len__19784__auto___24355)){
args24328.push((arguments[i__19785__auto___24356]));

var G__24357 = (i__19785__auto___24356 + (1));
i__19785__auto___24356 = G__24357;
continue;
} else {
}
break;
}

var G__24335 = args24328.length;
switch (G__24335) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24328.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit24336 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit24336 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta24337){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta24337 = meta24337;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit24336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24338,meta24337__$1){
var self__ = this;
var _24338__$1 = this;
return (new cognitect.transit.t_cognitect$transit24336(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta24337__$1));
});

cognitect.transit.t_cognitect$transit24336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24338){
var self__ = this;
var _24338__$1 = this;
return self__.meta24337;
});

cognitect.transit.t_cognitect$transit24336.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24336.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit24336.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24336.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit24336.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta24337","meta24337",1657303128,null)], null);
});

cognitect.transit.t_cognitect$transit24336.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit24336.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit24336";

cognitect.transit.t_cognitect$transit24336.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"cognitect.transit/t_cognitect$transit24336");
});

cognitect.transit.__GT_t_cognitect$transit24336 = (function cognitect$transit$__GT_t_cognitect$transit24336(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24337){
return (new cognitect.transit.t_cognitect$transit24336(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta24337));
});

}

return (new cognitect.transit.t_cognitect$transit24336(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__18726__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map