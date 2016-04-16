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
var seq__19050_19059 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__19051_19060 = null;
var count__19052_19061 = (0);
var i__19053_19062 = (0);
while(true){
if((i__19053_19062 < count__19052_19061)){
var k_19063 = cljs.core._nth.call(null,chunk__19051_19060,i__19053_19062);
var v_19064 = (b[k_19063]);
(a[k_19063] = v_19064);

var G__19065 = seq__19050_19059;
var G__19066 = chunk__19051_19060;
var G__19067 = count__19052_19061;
var G__19068 = (i__19053_19062 + (1));
seq__19050_19059 = G__19065;
chunk__19051_19060 = G__19066;
count__19052_19061 = G__19067;
i__19053_19062 = G__19068;
continue;
} else {
var temp__4657__auto___19069 = cljs.core.seq.call(null,seq__19050_19059);
if(temp__4657__auto___19069){
var seq__19050_19072__$1 = temp__4657__auto___19069;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19050_19072__$1)){
var c__18591__auto___19073 = cljs.core.chunk_first.call(null,seq__19050_19072__$1);
var G__19074 = cljs.core.chunk_rest.call(null,seq__19050_19072__$1);
var G__19075 = c__18591__auto___19073;
var G__19076 = cljs.core.count.call(null,c__18591__auto___19073);
var G__19077 = (0);
seq__19050_19059 = G__19074;
chunk__19051_19060 = G__19075;
count__19052_19061 = G__19076;
i__19053_19062 = G__19077;
continue;
} else {
var k_19079 = cljs.core.first.call(null,seq__19050_19072__$1);
var v_19080 = (b[k_19079]);
(a[k_19079] = v_19080);

var G__19082 = cljs.core.next.call(null,seq__19050_19072__$1);
var G__19083 = null;
var G__19084 = (0);
var G__19085 = (0);
seq__19050_19059 = G__19082;
chunk__19051_19060 = G__19083;
count__19052_19061 = G__19084;
i__19053_19062 = G__19085;
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

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/MapBuilder");
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

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/VectorBuilder");
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
var args19101 = [];
var len__18846__auto___19110 = arguments.length;
var i__18847__auto___19113 = (0);
while(true){
if((i__18847__auto___19113 < len__18846__auto___19110)){
args19101.push((arguments[i__18847__auto___19113]));

var G__19115 = (i__18847__auto___19113 + (1));
i__18847__auto___19113 = G__19115;
continue;
} else {
}
break;
}

var G__19104 = args19101.length;
switch (G__19104) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19101.length)].join('')));

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
var G__19127 = (i + (2));
var G__19128 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__19127;
ret = G__19128;
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

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/KeywordHandler");
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

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/SymbolHandler");
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
var seq__19139_19147 = cljs.core.seq.call(null,v);
var chunk__19140_19148 = null;
var count__19141_19149 = (0);
var i__19142_19150 = (0);
while(true){
if((i__19142_19150 < count__19141_19149)){
var x_19151 = cljs.core._nth.call(null,chunk__19140_19148,i__19142_19150);
ret.push(x_19151);

var G__19152 = seq__19139_19147;
var G__19153 = chunk__19140_19148;
var G__19154 = count__19141_19149;
var G__19155 = (i__19142_19150 + (1));
seq__19139_19147 = G__19152;
chunk__19140_19148 = G__19153;
count__19141_19149 = G__19154;
i__19142_19150 = G__19155;
continue;
} else {
var temp__4657__auto___19156 = cljs.core.seq.call(null,seq__19139_19147);
if(temp__4657__auto___19156){
var seq__19139_19158__$1 = temp__4657__auto___19156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19139_19158__$1)){
var c__18591__auto___19159 = cljs.core.chunk_first.call(null,seq__19139_19158__$1);
var G__19160 = cljs.core.chunk_rest.call(null,seq__19139_19158__$1);
var G__19161 = c__18591__auto___19159;
var G__19162 = cljs.core.count.call(null,c__18591__auto___19159);
var G__19163 = (0);
seq__19139_19147 = G__19160;
chunk__19140_19148 = G__19161;
count__19141_19149 = G__19162;
i__19142_19150 = G__19163;
continue;
} else {
var x_19165 = cljs.core.first.call(null,seq__19139_19158__$1);
ret.push(x_19165);

var G__19166 = cljs.core.next.call(null,seq__19139_19158__$1);
var G__19167 = null;
var G__19168 = (0);
var G__19169 = (0);
seq__19139_19147 = G__19166;
chunk__19140_19148 = G__19167;
count__19141_19149 = G__19168;
i__19142_19150 = G__19169;
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

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/ListHandler");
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

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/MapHandler");
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
var seq__19182_19192 = cljs.core.seq.call(null,v);
var chunk__19183_19193 = null;
var count__19184_19194 = (0);
var i__19185_19195 = (0);
while(true){
if((i__19185_19195 < count__19184_19194)){
var x_19196 = cljs.core._nth.call(null,chunk__19183_19193,i__19185_19195);
ret.push(x_19196);

var G__19197 = seq__19182_19192;
var G__19198 = chunk__19183_19193;
var G__19199 = count__19184_19194;
var G__19200 = (i__19185_19195 + (1));
seq__19182_19192 = G__19197;
chunk__19183_19193 = G__19198;
count__19184_19194 = G__19199;
i__19185_19195 = G__19200;
continue;
} else {
var temp__4657__auto___19201 = cljs.core.seq.call(null,seq__19182_19192);
if(temp__4657__auto___19201){
var seq__19182_19203__$1 = temp__4657__auto___19201;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19182_19203__$1)){
var c__18591__auto___19204 = cljs.core.chunk_first.call(null,seq__19182_19203__$1);
var G__19205 = cljs.core.chunk_rest.call(null,seq__19182_19203__$1);
var G__19206 = c__18591__auto___19204;
var G__19207 = cljs.core.count.call(null,c__18591__auto___19204);
var G__19208 = (0);
seq__19182_19192 = G__19205;
chunk__19183_19193 = G__19206;
count__19184_19194 = G__19207;
i__19185_19195 = G__19208;
continue;
} else {
var x_19209 = cljs.core.first.call(null,seq__19182_19203__$1);
ret.push(x_19209);

var G__19210 = cljs.core.next.call(null,seq__19182_19203__$1);
var G__19211 = null;
var G__19212 = (0);
var G__19213 = (0);
seq__19182_19192 = G__19210;
chunk__19183_19193 = G__19211;
count__19184_19194 = G__19212;
i__19185_19195 = G__19213;
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

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/SetHandler");
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
var seq__19219_19225 = cljs.core.seq.call(null,v);
var chunk__19220_19226 = null;
var count__19221_19227 = (0);
var i__19222_19228 = (0);
while(true){
if((i__19222_19228 < count__19221_19227)){
var x_19229 = cljs.core._nth.call(null,chunk__19220_19226,i__19222_19228);
ret.push(x_19229);

var G__19230 = seq__19219_19225;
var G__19231 = chunk__19220_19226;
var G__19232 = count__19221_19227;
var G__19233 = (i__19222_19228 + (1));
seq__19219_19225 = G__19230;
chunk__19220_19226 = G__19231;
count__19221_19227 = G__19232;
i__19222_19228 = G__19233;
continue;
} else {
var temp__4657__auto___19238 = cljs.core.seq.call(null,seq__19219_19225);
if(temp__4657__auto___19238){
var seq__19219_19239__$1 = temp__4657__auto___19238;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19219_19239__$1)){
var c__18591__auto___19240 = cljs.core.chunk_first.call(null,seq__19219_19239__$1);
var G__19241 = cljs.core.chunk_rest.call(null,seq__19219_19239__$1);
var G__19242 = c__18591__auto___19240;
var G__19243 = cljs.core.count.call(null,c__18591__auto___19240);
var G__19244 = (0);
seq__19219_19225 = G__19241;
chunk__19220_19226 = G__19242;
count__19221_19227 = G__19243;
i__19222_19228 = G__19244;
continue;
} else {
var x_19249 = cljs.core.first.call(null,seq__19219_19239__$1);
ret.push(x_19249);

var G__19251 = cljs.core.next.call(null,seq__19219_19239__$1);
var G__19252 = null;
var G__19253 = (0);
var G__19254 = (0);
seq__19219_19225 = G__19251;
chunk__19220_19226 = G__19252;
count__19221_19227 = G__19253;
i__19222_19228 = G__19254;
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

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/VectorHandler");
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

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/UUIDHandler");
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
var args19270 = [];
var len__18846__auto___19296 = arguments.length;
var i__18847__auto___19298 = (0);
while(true){
if((i__18847__auto___19298 < len__18846__auto___19296)){
args19270.push((arguments[i__18847__auto___19298]));

var G__19300 = (i__18847__auto___19298 + (1));
i__18847__auto___19298 = G__19300;
continue;
} else {
}
break;
}

var G__19275 = args19270.length;
switch (G__19275) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19270.length)].join('')));

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
var G__19279 = obj;
G__19279.push(kfn.call(null,k),vfn.call(null,v));

return G__19279;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x19282 = cljs.core.clone.call(null,handlers);
x19282.forEach = ((function (x19282,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__19284 = cljs.core.seq.call(null,coll);
var chunk__19285 = null;
var count__19286 = (0);
var i__19287 = (0);
while(true){
if((i__19287 < count__19286)){
var vec__19289 = cljs.core._nth.call(null,chunk__19285,i__19287);
var k = cljs.core.nth.call(null,vec__19289,(0),null);
var v = cljs.core.nth.call(null,vec__19289,(1),null);
f.call(null,v,k);

var G__19323 = seq__19284;
var G__19324 = chunk__19285;
var G__19325 = count__19286;
var G__19326 = (i__19287 + (1));
seq__19284 = G__19323;
chunk__19285 = G__19324;
count__19286 = G__19325;
i__19287 = G__19326;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__19284);
if(temp__4657__auto__){
var seq__19284__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__19284__$1)){
var c__18591__auto__ = cljs.core.chunk_first.call(null,seq__19284__$1);
var G__19329 = cljs.core.chunk_rest.call(null,seq__19284__$1);
var G__19330 = c__18591__auto__;
var G__19331 = cljs.core.count.call(null,c__18591__auto__);
var G__19332 = (0);
seq__19284 = G__19329;
chunk__19285 = G__19330;
count__19286 = G__19331;
i__19287 = G__19332;
continue;
} else {
var vec__19292 = cljs.core.first.call(null,seq__19284__$1);
var k = cljs.core.nth.call(null,vec__19292,(0),null);
var v = cljs.core.nth.call(null,vec__19292,(1),null);
f.call(null,v,k);

var G__19341 = cljs.core.next.call(null,seq__19284__$1);
var G__19342 = null;
var G__19343 = (0);
var G__19344 = (0);
seq__19284 = G__19341;
chunk__19285 = G__19342;
count__19286 = G__19343;
i__19287 = G__19344;
continue;
}
} else {
return null;
}
}
break;
}
});})(x19282,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x19282;
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
var args19351 = [];
var len__18846__auto___19371 = arguments.length;
var i__18847__auto___19373 = (0);
while(true){
if((i__18847__auto___19373 < len__18846__auto___19371)){
args19351.push((arguments[i__18847__auto___19373]));

var G__19374 = (i__18847__auto___19373 + (1));
i__18847__auto___19373 = G__19374;
continue;
} else {
}
break;
}

var G__19358 = args19351.length;
switch (G__19358) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19351.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit19361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit19361 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta19362){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta19362 = meta19362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit19361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19363,meta19362__$1){
var self__ = this;
var _19363__$1 = this;
return (new cognitect.transit.t_cognitect$transit19361(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta19362__$1));
});

cognitect.transit.t_cognitect$transit19361.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19363){
var self__ = this;
var _19363__$1 = this;
return self__.meta19362;
});

cognitect.transit.t_cognitect$transit19361.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19361.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit19361.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19361.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit19361.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta19362","meta19362",-896379722,null)], null);
});

cognitect.transit.t_cognitect$transit19361.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit19361.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit19361";

cognitect.transit.t_cognitect$transit19361.cljs$lang$ctorPrWriter = (function (this__18386__auto__,writer__18387__auto__,opt__18388__auto__){
return cljs.core._write.call(null,writer__18387__auto__,"cognitect.transit/t_cognitect$transit19361");
});

cognitect.transit.__GT_t_cognitect$transit19361 = (function cognitect$transit$__GT_t_cognitect$transit19361(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19362){
return (new cognitect.transit.t_cognitect$transit19361(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta19362));
});

}

return (new cognitect.transit.t_cognitect$transit19361(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
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
var or__17788__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
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