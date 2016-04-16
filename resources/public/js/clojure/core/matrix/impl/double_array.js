// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.impl.double_array');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.utils');
/**
 * Creates a new zero-filled nested double array of the given shape
 */
clojure.core.matrix.impl.double_array.new_double_array = (function clojure$core$matrix$impl$double_array$new_double_array(shape){
var dims = cljs.core.count.call(null,shape);
if(((0) === dims)){
return 0.0;
} else {
if(((1) === dims)){
return cljs.core.double_array.call(null,(cljs.core.first.call(null,shape) | (0)));
} else {
var ns = cljs.core.next.call(null,shape);
var rn = cljs.core.long$.call(null,cljs.core.first.call(null,shape));
var r0 = clojure$core$matrix$impl$double_array$new_double_array.call(null,ns);
return cljs.core.into_array.call(null,cljs.core.cons.call(null,r0,(function (){var iter__18874__auto__ = ((function (ns,rn,r0,dims){
return (function clojure$core$matrix$impl$double_array$new_double_array_$_iter__29108(s__29109){
return (new cljs.core.LazySeq(null,((function (ns,rn,r0,dims){
return (function (){
var s__29109__$1 = s__29109;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29109__$1);
if(temp__4657__auto__){
var s__29109__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29109__$2)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,s__29109__$2);
var size__18873__auto__ = cljs.core.count.call(null,c__18872__auto__);
var b__29111 = cljs.core.chunk_buffer.call(null,size__18873__auto__);
if((function (){var i__29110 = (0);
while(true){
if((i__29110 < size__18873__auto__)){
var i = cljs.core._nth.call(null,c__18872__auto__,i__29110);
cljs.core.chunk_append.call(null,b__29111,clojure$core$matrix$impl$double_array$new_double_array.call(null,ns));

var G__29112 = (i__29110 + (1));
i__29110 = G__29112;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29111),clojure$core$matrix$impl$double_array$new_double_array_$_iter__29108.call(null,cljs.core.chunk_rest.call(null,s__29109__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29111),null);
}
} else {
var i = cljs.core.first.call(null,s__29109__$2);
return cljs.core.cons.call(null,clojure$core$matrix$impl$double_array$new_double_array.call(null,ns),clojure$core$matrix$impl$double_array$new_double_array_$_iter__29108.call(null,cljs.core.rest.call(null,s__29109__$2)));
}
} else {
return null;
}
break;
}
});})(ns,rn,r0,dims))
,null,null));
});})(ns,rn,r0,dims))
;
return iter__18874__auto__.call(null,cljs.core.range.call(null,(rn - (1))));
})()));

}
}
});
clojure.core.matrix.impl.double_array.construct_double_array = (function clojure$core$matrix$impl$double_array$construct_double_array(data){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data));
if((dims === (1))){
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,data,(0)));
var r = cljs.core.double_array.call(null,n);
var n__19005__auto___29113 = n;
var i_29114 = (0);
while(true){
if((i_29114 < n__19005__auto___29113)){
(r[i_29114] = clojure.core.matrix.protocols.get_1d.call(null,data,i_29114));

var G__29115 = (i_29114 + (1));
i_29114 = G__29115;
continue;
} else {
}
break;
}

return r;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,data);
} else {
return null;

}
}
});
(clojure.core.matrix.protocols.PImmutableAssignment["array"] = true);

(clojure.core.matrix.protocols.assign["array"] = (function (m,source){
return null;
}));
(clojure.core.matrix.protocols.PAssignment["array"] = true);

(clojure.core.matrix.protocols.assign_BANG_["array"] = (function (m,source){
var n__19005__auto___29116 = cljs.core.count.call(null,source);
var i_29117 = (0);
while(true){
if((i_29117 < n__19005__auto___29116)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i_29117,cljs.core.nth.call(null,source,i_29117));

var G__29118 = (i_29117 + (1));
i_29117 = G__29118;
continue;
} else {
}
break;
}

return m;
}));

(clojure.core.matrix.protocols.assign_array_BANG_["array"] = (function (m,arr,start,length){
var length_29119__$1 = cljs.core.long$.call(null,length);
var start_29120__$1 = cljs.core.long$.call(null,start);
var n__19005__auto___29121 = length_29119__$1;
var i_29122 = (0);
while(true){
if((i_29122 < n__19005__auto___29121)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i_29122,cljs.core.nth.call(null,arr,(start_29120__$1 + i_29122)));

var G__29123 = (i_29122 + (1));
i_29122 = G__29123;
continue;
} else {
}
break;
}

return m;
}));
(clojure.core.matrix.protocols.PImplementation["array"] = true);

(clojure.core.matrix.protocols.implementation_key["array"] = (function (m){
return new cljs.core.Keyword(null,"number-array","number-array",-676376237);
}));

(clojure.core.matrix.protocols.meta_info["array"] = (function (m){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Clojure.core.matrix implementation for JS arrays"], null);
}));

(clojure.core.matrix.protocols.new_vector["array"] = (function (m,length){
return cljs.core.double_array.call(null,(length | (0)));
}));

(clojure.core.matrix.protocols.new_matrix["array"] = (function (m,rows,columns){
return clojure.core.matrix.impl.double_array.new_double_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rows,columns], null));
}));

(clojure.core.matrix.protocols.new_matrix_nd["array"] = (function (m,shape){
return clojure.core.matrix.impl.double_array.new_double_array.call(null,shape);
}));

(clojure.core.matrix.protocols.construct_matrix["array"] = (function (m,data){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data));
if((dims === (2))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Double arrays in cljs only support a single dimension currently - submit a patch!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === (1))){
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,data,(0)));
var arr = cljs.core.double_array.call(null,n);
var n__19005__auto___29124 = n;
var i_29125 = (0);
while(true){
if((i_29125 < n__19005__auto___29124)){
(arr[i_29125] = clojure.core.matrix.protocols.get_1d.call(null,data,i_29125));

var G__29126 = (i_29125 + (1));
i_29125 = G__29126;
continue;
} else {
}
break;
}

return arr;
} else {
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,data);
} else {
return null;

}
}
}
}));

(clojure.core.matrix.protocols.supports_dimensionality_QMARK_["array"] = (function (m,dims){
var dims__$1 = cljs.core.long$.call(null,dims);
return ((dims__$1 === (1))) || ((dims__$1 === (2)));
}));
(clojure.core.matrix.protocols.PDimensionInfo["array"] = true);

(clojure.core.matrix.protocols.dimensionality["array"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["array"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["array"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["array"] = (function (m){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.count.call(null,m));
}));

(clojure.core.matrix.protocols.dimension_count["array"] = (function (m,x){
if((cljs.core.long$.call(null,x) === (0))){
return cljs.core.count.call(null,m);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Double array does not have dimension: "),cljs.core.str(x)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PReshaping["array"] = true);

(clojure.core.matrix.protocols.reshape["array"] = (function (m,shape){
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_shape.call(null,m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value.call(null,m);
var es = cljs.core.concat.call(null,clojure.core.matrix.protocols.element_seq.call(null,m),cljs.core.repeat.call(null,gv));
var partition_shape = ((function (gv,es){
return (function clojure$core$matrix$impl$double_array$partition_shape(es__$1,shape__$1){
var temp__4655__auto__ = cljs.core.seq.call(null,shape__$1);
if(temp__4655__auto__){
var s = temp__4655__auto__;
var ns = cljs.core.next.call(null,s);
var plen = cljs.core.reduce.call(null,cljs.core._STAR_,(1),ns);
return cljs.core.map.call(null,((function (ns,plen,s,temp__4655__auto__,gv,es){
return (function (p1__29127_SHARP_){
return clojure$core$matrix$impl$double_array$partition_shape.call(null,p1__29127_SHARP_,ns);
});})(ns,plen,s,temp__4655__auto__,gv,es))
,cljs.core.partition.call(null,plen,es__$1));
} else {
return cljs.core.first.call(null,es__$1);
}
});})(gv,es))
;
var temp__4655__auto__ = cljs.core.seq.call(null,shape);
if(temp__4655__auto__){
var shape__$1 = temp__4655__auto__;
var fs = cljs.core.long$.call(null,cljs.core.first.call(null,shape__$1));
var parts = partition_shape.call(null,es,shape__$1);
var or__18102__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.take.call(null,fs,parts));
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,fs,parts));
}
} else {
return cljs.core.first.call(null,es);
}
}
}));
(clojure.core.matrix.protocols.PTypeInfo["array"] = true);

(clojure.core.matrix.protocols.element_type["array"] = (function (m){
return Number;
}));
(clojure.core.matrix.protocols.PIndexedAccess["array"] = true);

(clojure.core.matrix.protocols.get_1d["array"] = (function (m,x){
return (m[(x | (0))]);
}));

(clojure.core.matrix.protocols.get_2d["array"] = (function (m,row,column){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do get-2D from 1D double array")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_nd["array"] = (function (m,indexes){
if(((1) === cljs.core.count.call(null,indexes))){
return (m[(cljs.core.first.call(null,indexes) | (0))]);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get from double array with dimensionality: "),cljs.core.str(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PIndexedSetting["array"] = true);

(clojure.core.matrix.protocols.set_1d["array"] = (function (m,x,v){
var arr = m.slice();
(arr[(x | (0))] = v);

return arr;
}));

(clojure.core.matrix.protocols.set_2d["array"] = (function (m,x,y,v){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D set on double array")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd["array"] = (function (m,indexes,v){
if(((1) === cljs.core.count.call(null,indexes))){
var arr = m.slice();
var x = (cljs.core.first.call(null,indexes) | (0));
(arr[(x | (0))] = v);

return arr;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't set on double array with dimensionality: "),cljs.core.str(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["array"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PIndexedSettingMutable["array"] = true);

(clojure.core.matrix.protocols.set_1d_BANG_["array"] = (function (m,x,v){
(m[(x | (0))] = v);

return m;
}));

(clojure.core.matrix.protocols.set_2d_BANG_["array"] = (function (m,x,y,v){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D set on double array")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd_BANG_["array"] = (function (m,indexes,v){
if(((1) === cljs.core.count.call(null,indexes))){
(m[(cljs.core.first.call(null,indexes) | (0))] = v);

return m;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't set on double array with dimensionality: "),cljs.core.str(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PMutableMatrixConstruction["array"] = true);

(clojure.core.matrix.protocols.mutable_matrix["array"] = (function (m){
return m.slice();
}));
(clojure.core.matrix.protocols.PMatrixScaling["array"] = true);

(clojure.core.matrix.protocols.scale["array"] = (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.call(null,len);
var a__$1 = a;
var n__19005__auto___29128 = len;
var i_29129 = (0);
while(true){
if((i_29129 < n__19005__auto___29128)){
(arr[i_29129] = (a__$1 * (m__$1[i_29129])));

var G__29130 = (i_29129 + (1));
i_29129 = G__29130;
continue;
} else {
}
break;
}

return arr;
}));

(clojure.core.matrix.protocols.pre_scale["array"] = (function (m,a){
var m__$1 = m;
var len = m__$1.length;
var arr = cljs.core.double_array.call(null,len);
var a__$1 = a;
var n__19005__auto___29131 = len;
var i_29132 = (0);
while(true){
if((i_29132 < n__19005__auto___29131)){
(arr[i_29132] = (a__$1 * (m__$1[i_29132])));

var G__29133 = (i_29132 + (1));
i_29132 = G__29133;
continue;
} else {
}
break;
}

return arr;
}));
(clojure.core.matrix.protocols.PMatrixMutableScaling["array"] = true);

(clojure.core.matrix.protocols.scale_BANG_["array"] = (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__19005__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__19005__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__29134 = (i + (1));
i = G__29134;
continue;
} else {
return null;
}
break;
}
}));

(clojure.core.matrix.protocols.pre_scale_BANG_["array"] = (function (m,a){
var m__$1 = m;
var a__$1 = a;
var n__19005__auto__ = m__$1.length;
var i = (0);
while(true){
if((i < n__19005__auto__)){
(m__$1[i] = (a__$1 * (m__$1[i])));

var G__29135 = (i + (1));
i = G__29135;
continue;
} else {
return null;
}
break;
}
}));
(clojure.core.matrix.protocols.PConversion["array"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["array"] = (function (m){
return cljs.core.vec.call(null,m);
}));
(clojure.core.matrix.protocols.PFunctionalOperations["array"] = true);

(clojure.core.matrix.protocols.element_seq["array"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.element_map["array"] = (function() {
var G__29137 = null;
var G__29137__2 = (function (m,f){
var cnt = m.length;
var r = cljs.core.double_array.call(null,cnt);
var n__19005__auto___29138 = cnt;
var i_29139 = (0);
while(true){
if((i_29139 < n__19005__auto___29138)){
(r[i_29139] = f.call(null,(m[i_29139])));

var G__29140 = (i_29139 + (1));
i_29139 = G__29140;
continue;
} else {
}
break;
}

return r;
});
var G__29137__3 = (function (m,f,a){
var r = cljs.core.double_array.call(null,m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce.call(null,r,a);
var n__19005__auto___29141 = m.length;
var i_29142 = (0);
while(true){
if((i_29142 < n__19005__auto___29141)){
(r[i_29142] = f.call(null,(m[i_29142]),(a__$1[i_29142])));

var G__29143 = (i_29142 + (1));
i_29142 = G__29143;
continue;
} else {
}
break;
}

return r;
});
var G__29137__4 = (function (m,f,a,more){
var r = cljs.core.double_array.call(null,m);
var a__$1 = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,a);
var more__$1 = cljs.core.mapv.call(null,((function (r,a__$1){
return (function (p1__29136_SHARP_){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,p1__29136_SHARP_);
});})(r,a__$1))
,more);
var more_count = cljs.core.long$.call(null,cljs.core.count.call(null,more__$1));
var vs = cljs.core.double_array.call(null,more_count);
var n__19005__auto___29144 = m.length;
var i_29145 = (0);
while(true){
if((i_29145 < n__19005__auto___29144)){
var n__19005__auto___29146__$1 = more_count;
var j_29147 = (0);
while(true){
if((j_29147 < n__19005__auto___29146__$1)){
(vs[j_29147] = (more__$1.call(null,j_29147)[i_29145]));

var G__29148 = (j_29147 + (1));
j_29147 = G__29148;
continue;
} else {
}
break;
}

(r[i_29145] = cljs.core.apply.call(null,f,(m[i_29145]),(a__$1[i_29145]),vs));

var G__29149 = (i_29145 + (1));
i_29145 = G__29149;
continue;
} else {
}
break;
}

return r;
});
G__29137 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__29137__2.call(this,m,f);
case 3:
return G__29137__3.call(this,m,f,a);
case 4:
return G__29137__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29137.cljs$core$IFn$_invoke$arity$2 = G__29137__2;
G__29137.cljs$core$IFn$_invoke$arity$3 = G__29137__3;
G__29137.cljs$core$IFn$_invoke$arity$4 = G__29137__4;
return G__29137;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["array"] = (function() {
var G__29150 = null;
var G__29150__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f));
});
var G__29150__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a));
});
var G__29150__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a,more));
});
G__29150 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__29150__2.call(this,m,f);
case 3:
return G__29150__3.call(this,m,f,a);
case 4:
return G__29150__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29150.cljs$core$IFn$_invoke$arity$2 = G__29150__2;
G__29150.cljs$core$IFn$_invoke$arity$3 = G__29150__3;
G__29150.cljs$core$IFn$_invoke$arity$4 = G__29150__4;
return G__29150;
})()
);

(clojure.core.matrix.protocols.element_reduce["array"] = (function() {
var G__29151 = null;
var G__29151__2 = (function (m,f){
var m__$1 = m;
return cljs.core.reduce.call(null,f,m__$1);
});
var G__29151__3 = (function (m,f,init){
var m__$1 = m;
return cljs.core.reduce.call(null,f,init,m__$1);
});
G__29151 = function(m,f,init){
switch(arguments.length){
case 2:
return G__29151__2.call(this,m,f);
case 3:
return G__29151__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29151.cljs$core$IFn$_invoke$arity$2 = G__29151__2;
G__29151.cljs$core$IFn$_invoke$arity$3 = G__29151__3;
return G__29151;
})()
);
(clojure.core.matrix.protocols.PIndexImplementation["array"] = true);

(clojure.core.matrix.protocols.index_QMARK_["array"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.index_to_longs["array"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.index_to_ints["array"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.index_from_longs["array"] = (function (m,xs){
return cljs.core.long_array.call(null,xs);
}));

(clojure.core.matrix.protocols.index_from_ints["array"] = (function (m,xs){
return cljs.core.int_array.call(null,xs);
}));

(clojure.core.matrix.protocols.index_coerce["array"] = (function (m,a){
return m;
}));
(clojure.core.matrix.protocols.PBroadcast["array"] = true);

(clojure.core.matrix.protocols.broadcast["array"] = (function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var mdims = cljs.core.count.call(null,mshape);
var ndims = cljs.core.count.call(null,nshape);
if(cljs.core.truth_((function (){var and__18090__auto__ = (mdims === ndims);
if(and__18090__auto__){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,nshape,mshape);
} else {
return and__18090__auto__;
}
})())){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);

}
}));
(clojure.core.matrix.protocols.PNumerical["array"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["array"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PSubVector["array"] = true);

(clojure.core.matrix.protocols.subvector["array"] = (function (m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),start,length);
}));
(clojure.core.matrix.protocols.PMatrixEquality["array"] = true);

(clojure.core.matrix.protocols.matrix_equals["array"] = (function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return (clojure.core.matrix.protocols.get_0d.call(null,a) === (function (){var x__21485__auto__ = b;
if(typeof x__21485__auto__ === 'number'){
return x__21485__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21485__auto__);

}
})());
} else {
return cljs.core.not_any_QMARK_.call(null,cljs.core.false_QMARK_,cljs.core.map.call(null,cljs.core._EQ__EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
}
} else {
return false;

}
}
}));
(clojure.core.matrix.protocols.PSameShape["array"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["array"] = (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,clojure.core.matrix.protocols.get_shape.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,b));
}));
(clojure.core.matrix.protocols.PSelect["array"] = true);

(clojure.core.matrix.protocols.select["array"] = (function (a,area){
var or__18102__auto__ = clojure.core.matrix.protocols.select_view.call(null,a,area);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}
}));
(clojure.core.matrix.protocols.PLogistic["array"] = true);

(clojure.core.matrix.protocols.logistic["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PLogisticMutable["array"] = true);

(clojure.core.matrix.protocols.logistic_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PSoftplus["array"] = true);

(clojure.core.matrix.protocols.softplus["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PSoftmax["array"] = true);

(clojure.core.matrix.protocols.softmax["array"] = (function (m){
var em = clojure.core.matrix.protocols.exp.call(null,m);
return clojure.core.matrix.protocols.element_divide.call(null,em,clojure.core.matrix.protocols.element_sum.call(null,em));
}));
(clojure.core.matrix.protocols.PSoftmaxMutable["array"] = true);

(clojure.core.matrix.protocols.softmax_BANG_["array"] = (function (m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

clojure.core.matrix.protocols.element_divide_BANG_.call(null,m,clojure.core.matrix.protocols.element_sum.call(null,m));

return m;
}));
(clojure.core.matrix.protocols.PSoftplusMutable["array"] = true);

(clojure.core.matrix.protocols.softplus_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PReLU["array"] = true);

(clojure.core.matrix.protocols.relu["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PReLUMutable["array"] = true);

(clojure.core.matrix.protocols.relu_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PMatrixPredicates["array"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["array"] = (function (m){
var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
if(((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && ((rc === cc))){
var i = cljs.core.long$.call(null,(0));
while(true){
if((i < rc)){
if((function (){var j = cljs.core.long$.call(null,(0));
while(true){
if((j < cc)){
var elem = clojure.core.matrix.protocols.get_2d.call(null,m,i,j);
if(typeof elem === 'number'){
if((i === j)){
if((elem === 1.0)){
var G__29154 = (j + (1));
j = G__29154;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__29155 = (j + (1));
j = G__29155;
continue;
} else {
return false;
}
}
} else {
return false;
}
} else {
return true;
}
break;
}
})()){
var G__29156 = (i + (1));
i = G__29156;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
}));

(clojure.core.matrix.protocols.zero_matrix_QMARK_["array"] = (function (m){
return cljs.core.every_QMARK_.call(null,(function (p1__29152_SHARP_){
return (typeof p1__29152_SHARP_ === 'number') && ((p1__29152_SHARP_ === (0)));
}),clojure.core.matrix.protocols.element_seq.call(null,m));
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["array"] = (function (m){
var G__29153 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__29153) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__18090__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(cljs.core.truth_(and__18090__auto__)){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_.call(null,m);
} else {
return and__18090__auto__;
}

break;
default:
return cljs.core._EQ_.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m));

}
}));

(clojure.core.matrix.protocols.PMatrixPredicates["number"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["number"] = (function (m){
return cljs.core._EQ_.call(null,(1),m);
}));

(clojure.core.matrix.protocols.zero_matrix_QMARK_["number"] = (function (m){
return (m === (0));
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["number"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PSummable["array"] = true);

(clojure.core.matrix.protocols.element_sum["array"] = (function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_.call(null,a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
(clojure.core.matrix.protocols.PMatrixMultiply["array"] = true);

(clojure.core.matrix.protocols.matrix_multiply["array"] = (function (m,a){
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if(((mdims === (1))) && ((adims === (1)))){
return clojure.core.matrix.protocols.vector_dot.call(null,m,a);
} else {
if(((mdims === (1))) && ((adims === (2)))){
var vec__29158 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__29158,(0),null);
var acols = cljs.core.nth.call(null,vec__29158,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,clojure.core.matrix.protocols.reshape.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if(((mdims === (2))) && ((adims === (1)))){
var vec__29159 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__29159,(0),null);
var mcols = cljs.core.nth.call(null,vec__29159,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.reshape.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols], null));
} else {
if(((mdims === (2))) && ((adims === (2)))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
var vec__29160 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__29160,(0),null);
var mcols = cljs.core.nth.call(null,vec__29160,(1),null);
var vec__29161 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__29161,(0),null);
var acols = cljs.core.nth.call(null,vec__29161,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix.call(null,new_m_type,mrows,acols);
var i_29163 = cljs.core.long$.call(null,(0));
while(true){
if((i_29163 < mrows)){
var j_29164 = cljs.core.long$.call(null,(0));
while(true){
if((j_29164 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_29163,j_29164,(0));

var G__29165 = (j_29164 + (1));
j_29164 = G__29165;
continue;
} else {
}
break;
}

var G__29166 = (i_29163 + (1));
i_29163 = G__29166;
continue;
} else {
}
break;
}


var i_29167 = cljs.core.long$.call(null,(0));
while(true){
if((i_29167 < mrows)){
var j_29168 = cljs.core.long$.call(null,(0));
while(true){
if((j_29168 < acols)){
var k_29169 = cljs.core.long$.call(null,(0));
while(true){
if((k_29169 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_29167,j_29168,(clojure.core.matrix.protocols.get_2d.call(null,new_m,i_29167,j_29168) + (clojure.core.matrix.protocols.get_2d.call(null,m,i_29167,k_29169) * clojure.core.matrix.protocols.get_2d.call(null,a,k_29169,j_29168))));

var G__29170 = (k_29169 + (1));
k_29169 = G__29170;
continue;
} else {
}
break;
}

var G__29171 = (j_29168 + (1));
j_29168 = G__29171;
continue;
} else {
}
break;
}

var G__29172 = (i_29167 + (1));
i_29167 = G__29172;
continue;
} else {
}
break;
}


return new_m;
} else {
return null;
}
}
}
}
}
}));

(clojure.core.matrix.protocols.element_multiply["array"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
var vec__29162 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__29162,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29162,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._STAR_,a__$1);
}
}));
(clojure.core.matrix.protocols.PMatrixMultiplyMutable["array"] = true);

(clojure.core.matrix.protocols.element_multiply_BANG_["array"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
}));

(clojure.core.matrix.protocols.matrix_multiply_BANG_["array"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.matrix_multiply.call(null,m,a));
}));
(clojure.core.matrix.protocols.PMatrixDivide["array"] = true);

(clojure.core.matrix.protocols.element_divide["array"] = (function() {
var G__29173 = null;
var G__29173__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape.call(null,m))){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Don't know how to take reciprocal of "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__29173__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply.call(null,m,clojure.core.matrix.protocols.element_divide.call(null,a));
});
G__29173 = function(m,a){
switch(arguments.length){
case 1:
return G__29173__1.call(this,m);
case 2:
return G__29173__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29173.cljs$core$IFn$_invoke$arity$1 = G__29173__1;
G__29173.cljs$core$IFn$_invoke$arity$2 = G__29173__2;
return G__29173;
})()
);
(clojure.core.matrix.protocols.PMatrixDivideMutable["array"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["array"] = (function() {
var G__29175 = null;
var G__29175__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._SLASH_);
});
var G__29175__2 = (function (m,a){
var vec__29174 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__29174,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29174,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1,cljs.core._SLASH_,a__$1);
});
G__29175 = function(m,a){
switch(arguments.length){
case 1:
return G__29175__1.call(this,m);
case 2:
return G__29175__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29175.cljs$core$IFn$_invoke$arity$1 = G__29175__1;
G__29175.cljs$core$IFn$_invoke$arity$2 = G__29175__2;
return G__29175;
})()
);
(clojure.core.matrix.protocols.PBroadcastCoerce["array"] = true);

(clojure.core.matrix.protocols.broadcast_coerce["array"] = (function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));
(clojure.core.matrix.protocols.PCoercion["array"] = true);

(clojure.core.matrix.protocols.coerce_param["array"] = (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param):param);
var or__18102__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,param__$1);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return param__$1;
}
}));
(clojure.core.matrix.protocols.PBroadcastLike["array"] = true);

(clojure.core.matrix.protocols.broadcast_like["array"] = (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape.call(null,m);
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
if(cljs.core.truth_(clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,sm,sa))){
return a;
} else {
return clojure.core.matrix.protocols.broadcast.call(null,a,sm);
}
}));
(clojure.core.matrix.protocols.PMatrixOps["array"] = true);

(clojure.core.matrix.protocols.trace["array"] = (function (m){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Trace requires a 2D matrix")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

var rc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var cc = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)));
var dims = Math.min(rc,cc);
var i = (0);
var res = 0.0;
while(true){
if((i >= dims)){
return res;
} else {
var G__29176 = (i + (1));
var G__29177 = (res + clojure.core.matrix.protocols.get_2d.call(null,m,i,i));
i = G__29176;
res = G__29177;
continue;
}
break;
}
}));

(clojure.core.matrix.protocols.determinant["array"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.inverse["array"] = (function (m){
return null;
}));

//# sourceMappingURL=double_array.js.map