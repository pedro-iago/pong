// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.impl.defaults');
goog.require('cljs.core');
goog.require('clojure.core.matrix.impl.double_array');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.utils');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = null;
/**
 * Returns the total count of elements in an array
 */
clojure.core.matrix.impl.defaults.calc_element_count = (function clojure$core$matrix$impl$defaults$calc_element_count(m){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.reduce.call(null,cljs.core._STAR_,(1),clojure.core.matrix.protocols.get_shape.call(null,m));
} else {
return cljs.core.count.call(null,m);

}
});
/**
 * Constructs a new mutable matrix with the given data.
 */
clojure.core.matrix.impl.defaults.construct_mutable_matrix = (function clojure$core$matrix$impl$defaults$construct_mutable_matrix(m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var type = clojure.core.matrix.protocols.element_type.call(null,m);
var double_QMARK_ = cljs.core._EQ_.call(null,Number,type);
if((dims === (0))){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
if(((dims === (1))) && (double_QMARK_)){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
if(double_QMARK_){
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"aljabr","aljabr",1424034715)),m);

}
}
}
});
(clojure.core.matrix.protocols.PImplementation["object"] = true);

(clojure.core.matrix.protocols.implementation_key["object"] = (function (m){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));

(clojure.core.matrix.protocols.meta_info["object"] = (function (m){
return cljs.core.PersistentArrayMap.EMPTY;
}));

(clojure.core.matrix.protocols.construct_matrix["object"] = (function (m,data){
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
}));

(clojure.core.matrix.protocols.new_vector["object"] = (function (m,length){
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
}));

(clojure.core.matrix.protocols.new_matrix["object"] = (function (m,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
}));

(clojure.core.matrix.protocols.new_matrix_nd["object"] = (function (m,shape){
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}));

(clojure.core.matrix.protocols.supports_dimensionality_QMARK_["object"] = (function (m,dimensions){
return true;
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$ = true;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.protocols.meta_info.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1));
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),data);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),length);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),rows,columns);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,shape){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),shape);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dimensions){
var m__$1 = this;
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,clojure.core.matrix.implementations.get_canonical_object_or_throw.call(null,m__$1),dimensions);
});
(clojure.core.matrix.protocols.PSparse["null"] = true);

(clojure.core.matrix.protocols.sparse_coerce["null"] = (function (m,data){
return clojure.core.matrix.protocols.sparse.call(null,data);
}));

(clojure.core.matrix.protocols.sparse["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PSparse["object"] = true);

(clojure.core.matrix.protocols.sparse_coerce["object"] = (function (m,data){
return null;
}));

(clojure.core.matrix.protocols.sparse["object"] = (function (m){
return m;
}));
(clojure.core.matrix.protocols.PNative["null"] = true);

(clojure.core.matrix.protocols.native$["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.native_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PNative["object"] = true);

(clojure.core.matrix.protocols.native$["object"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.native_QMARK_["object"] = (function (m){
return false;
}));
(clojure.core.matrix.protocols.PNewSparseArray["object"] = true);

(clojure.core.matrix.protocols.new_sparse_array["object"] = (function (m,shape){
return null;
}));
(clojure.core.matrix.protocols.PDense["null"] = true);

(clojure.core.matrix.protocols.dense_coerce["null"] = (function (m,data){
return clojure.core.matrix.protocols.dense.call(null,data);
}));

(clojure.core.matrix.protocols.dense["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PDense["object"] = true);

(clojure.core.matrix.protocols.dense_coerce["object"] = (function (m,data){
return null;
}));

(clojure.core.matrix.protocols.dense["object"] = (function (m){
return m;
}));
(clojure.core.matrix.protocols.PIndexedAccess["null"] = true);

(clojure.core.matrix.protocols.get_1d["null"] = (function (m,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 1D get on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_2d["null"] = (function (m,x,y){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D get on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_nd["null"] = (function (m,indexes){
var temp__4655__auto__ = cljs.core.seq.call(null,indexes);
if(temp__4655__auto__){
var s = temp__4655__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do ND get on nil with indexes: "),cljs.core.str(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PIndexedAccess["number"] = true);

(clojure.core.matrix.protocols.get_1d["number"] = (function (m,x){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 1D get on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_2d["number"] = (function (m,x,y){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D get on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.get_nd["number"] = (function (m,indexes){
var temp__4655__auto__ = cljs.core.seq.call(null,indexes);
if(temp__4655__auto__){
var s = temp__4655__auto__;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do ND get on a scalar number with indexes: "),cljs.core.str(s)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PIndexedAccess["object"] = true);

(clojure.core.matrix.protocols.get_1d["object"] = (function (m,x){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_0d.call(null,cljs.core.nth.call(null,m,x));
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null));

}
}));

(clojure.core.matrix.protocols.get_2d["object"] = (function (m,x,y){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m,x),y);
} else {
return clojure.core.matrix.protocols.get_nd.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

}
}));

(clojure.core.matrix.protocols.get_nd["object"] = (function (m,indexes){
if(cljs.core.seq.call(null,indexes)){
if((Array === m.constructor)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Indexed get failed, not defined for:"),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m);
}
}));

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = true;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
if(cljs.core.seqable_QMARK_.call(null,cljs.core.first.call(null,m__$1))){
return clojure.core.matrix.protocols.get_1d.call(null,cljs.core.nth.call(null,m__$1,x),y);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D get on a lazy seq")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = true;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,x);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D get on a range")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
return clojure.core.matrix.protocols.get_nd.call(null,cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes)),cljs.core.next.call(null,indexes));
} else {
return clojure.core.matrix.protocols.get_0d.call(null,m__$1);
}
});
(clojure.core.matrix.protocols.PArrayMetrics["null"] = true);

(clojure.core.matrix.protocols.nonzero_count["null"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.PArrayMetrics["number"] = true);

(clojure.core.matrix.protocols.nonzero_count["number"] = (function (m){
if((m === (0))){
return (0);
} else {
return (1);
}
}));

(clojure.core.matrix.protocols.PArrayMetrics["object"] = true);

(clojure.core.matrix.protocols.nonzero_count["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (cnt,e){
if((e === (0))){
return cnt;
} else {
return (cnt + (1));
}
}),(0));
}));
(clojure.core.matrix.protocols.PZeroDimensionConstruction["null"] = true);

(clojure.core.matrix.protocols.new_scalar_array["null"] = (function() {
var G__39211 = null;
var G__39211__1 = (function (m){
return 0.0;
});
var G__39211__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__39211 = function(m,value){
switch(arguments.length){
case 1:
return G__39211__1.call(this,m);
case 2:
return G__39211__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39211.cljs$core$IFn$_invoke$arity$1 = G__39211__1;
G__39211.cljs$core$IFn$_invoke$arity$2 = G__39211__2;
return G__39211;
})()
);

(clojure.core.matrix.protocols.PZeroDimensionConstruction["object"] = true);

(clojure.core.matrix.protocols.new_scalar_array["object"] = (function() {
var G__39214 = null;
var G__39214__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,0.0);
});
var G__39214__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__39214 = function(m,value){
switch(arguments.length){
case 1:
return G__39214__1.call(this,m);
case 2:
return G__39214__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39214.cljs$core$IFn$_invoke$arity$1 = G__39214__1;
G__39214.cljs$core$IFn$_invoke$arity$2 = G__39214__2;
return G__39214;
})()
);
(clojure.core.matrix.protocols.PZeroDimensionAccess["null"] = true);

(clojure.core.matrix.protocols.get_0d["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["null"] = (function (m,value){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't set the value of nil!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PZeroDimensionAccess["string"] = true);

(clojure.core.matrix.protocols.get_0d["string"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["string"] = (function (m,value){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't set a string value!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = true;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't set a keyword!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

(clojure.core.matrix.protocols.PZeroDimensionAccess["number"] = true);

(clojure.core.matrix.protocols.get_0d["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["number"] = (function (m,value){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't set a scalar number!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PZeroDimensionAccess["object"] = true);

(clojure.core.matrix.protocols.get_0d["object"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.set_0d_BANG_["object"] = (function (m,value){
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,cljs.core.PersistentVector.EMPTY,value);
}));
(clojure.core.matrix.protocols.PZeroDimensionSet["null"] = true);

(clojure.core.matrix.protocols.set_0d["null"] = (function (m,value){
return value;
}));

(clojure.core.matrix.protocols.PZeroDimensionSet["object"] = true);

(clojure.core.matrix.protocols.set_0d["object"] = (function (m,value){
return value;
}));
(clojure.core.matrix.protocols.PIndexedSetting["null"] = true);

(clojure.core.matrix.protocols.set_1d["null"] = (function (m,row,v){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 1D set on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_2d["null"] = (function (m,row,column,v){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D set on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd["null"] = (function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do "),cljs.core.str(cljs.core.count.call(null,indexes)),cljs.core.str("D set on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PIndexedSetting["number"] = true);

(clojure.core.matrix.protocols.set_1d["number"] = (function (m,row,v){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 1D set on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_2d["number"] = (function (m,row,column,v){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D set on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.set_nd["number"] = (function (m,indexes,v){
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do "),cljs.core.str(cljs.core.count.call(null,indexes)),cljs.core.str("D set on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return v;
}
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["number"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PIndexedSetting["object"] = true);

(clojure.core.matrix.protocols.set_1d["object"] = (function (m,row,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m__$1,row,v);

return m__$1;
}));

(clojure.core.matrix.protocols.set_2d["object"] = (function (m,row,column,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m__$1,row,column,v);

return m__$1;
}));

(clojure.core.matrix.protocols.set_nd["object"] = (function (m,indexes,v){
var m__$1 = clojure.core.matrix.protocols.clone.call(null,m);
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m__$1,indexes,v);

return m__$1;
}));

(clojure.core.matrix.protocols.is_mutable_QMARK_["object"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PNumerical["number"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["number"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.PNumerical["null"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.PNumerical["object"] = true);

(clojure.core.matrix.protocols.numerical_QMARK_["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return false;
} else {
return cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,clojure.core.matrix.protocols.element_seq.call(null,m));
}
}));
(clojure.core.matrix.protocols.PVectorOps["number"] = true);

(clojure.core.matrix.protocols.vector_dot["number"] = (function (a,b){
return clojure.core.matrix.protocols.pre_scale.call(null,b,a);
}));

(clojure.core.matrix.protocols.length["number"] = (function (a){
return a;
}));

(clojure.core.matrix.protocols.length_squared["number"] = (function (a){
return Math.sqrt(a);
}));

(clojure.core.matrix.protocols.normalise["number"] = (function (a){
var a__$1 = a;
if((a__$1 > 0.0)){
return 1.0;
} else {
if((a__$1 < 0.0)){
return -1.0;
} else {
return 0.0;

}
}
}));

(clojure.core.matrix.protocols.PVectorOps["object"] = true);

(clojure.core.matrix.protocols.vector_dot["object"] = (function (a,b){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));

(clojure.core.matrix.protocols.length["object"] = (function (a){
return Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a));
}));

(clojure.core.matrix.protocols.length_squared["object"] = (function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(function (r,x){
return (r + (x * x));
}),0.0);
}));

(clojure.core.matrix.protocols.normalise["object"] = (function (a){
return clojure.core.matrix.protocols.scale.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
(clojure.core.matrix.protocols.PVectorDistance["number"] = true);

(clojure.core.matrix.protocols.distance["number"] = (function (a,b){
if(typeof b === 'number'){
return Math.abs((b - a));
} else {
return clojure.core.matrix.protocols.distance.call(null,b,a);
}
}));

(clojure.core.matrix.protocols.PVectorDistance["object"] = true);

(clojure.core.matrix.protocols.distance["object"] = (function (a,b){
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}));
(clojure.core.matrix.protocols.PVectorCross["object"] = true);

(clojure.core.matrix.protocols.cross_product["object"] = (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
return clojure.core.matrix.protocols.construct_matrix.call(null,a,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((y1 * z2) - (z1 * y2)),((z1 * x2) - (x1 * z2)),((x1 * y2) - (y1 * x2))], null));
}));

(clojure.core.matrix.protocols.cross_product_BANG_["object"] = (function (a,b){
var x1 = clojure.core.matrix.protocols.get_1d.call(null,a,(0));
var y1 = clojure.core.matrix.protocols.get_1d.call(null,a,(1));
var z1 = clojure.core.matrix.protocols.get_1d.call(null,a,(2));
var x2 = clojure.core.matrix.protocols.get_1d.call(null,b,(0));
var y2 = clojure.core.matrix.protocols.get_1d.call(null,b,(1));
var z2 = clojure.core.matrix.protocols.get_1d.call(null,b,(2));
clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(0),((y1 * z2) - (z1 * y2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(1),((z1 * x2) - (x1 * z2)));

clojure.core.matrix.protocols.set_1d_BANG_.call(null,a,(2),((x1 * y2) - (y1 * x2)));

return a;
}));
(clojure.core.matrix.protocols.PMutableVectorOps["object"] = true);

(clojure.core.matrix.protocols.normalise_BANG_["object"] = (function (a){
return clojure.core.matrix.protocols.scale_BANG_.call(null,a,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a))));
}));
(clojure.core.matrix.protocols.PAssignment["object"] = true);

(clojure.core.matrix.protocols.assign_BANG_["object"] = (function (m,x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return clojure.core.matrix.protocols.set_0d_BANG_.call(null,m,clojure.core.matrix.protocols.get_0d.call(null,x));
} else {
if(((1) === dims)){
if((x instanceof cljs.core.ISeq)){
var x__$1 = cljs.core.seq.call(null,x);
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var s = cljs.core.seq.call(null,x__$1);
while(true){
if((i >= msize)){
if(s){
throw cljs.core.ex_info.call(null,[cljs.core.str("Mismatches size of sequence in assign!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
} else {
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.first.call(null,s));

var G__39344 = (i + (1));
var G__39345 = cljs.core.next.call(null,s);
i = G__39344;
s = G__39345;
continue;
}
break;
}
} else {
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
var msize = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(((0) === xdims)){
var value = clojure.core.matrix.protocols.get_0d.call(null,x);
var n__19629__auto__ = msize;
var i = (0);
while(true){
if((i < n__19629__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,value);

var G__39346 = (i + (1));
i = G__39346;
continue;
} else {
return null;
}
break;
}
} else {
if(((1) === xdims)){
if(cljs.core.not_EQ_.call(null,msize,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,x,(0))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Mismatched shapes in assign!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__19629__auto__ = msize;
var i = (0);
while(true){
if((i < n__19629__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,clojure.core.matrix.protocols.get_1d.call(null,x,i));

var G__39347 = (i + (1));
i = G__39347;
continue;
} else {
return null;
}
break;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't assign! withan argument of higher dimensionality")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
var xdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims === xdims)){
var xss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,x);
var _ = (function (){var or__18726__auto__ = clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,xss);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Inconsistent slice shapes for assign!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (xss,_,xdims,dims){
return (function (a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,b);
});})(xss,_,xdims,dims))
,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m),xss));
} else {
var seq__39327 = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m));
var chunk__39328 = null;
var count__39329 = (0);
var i__39330 = (0);
while(true){
if((i__39330 < count__39329)){
var ms = cljs.core._nth.call(null,chunk__39328,i__39330);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);

var G__39349 = seq__39327;
var G__39350 = chunk__39328;
var G__39351 = count__39329;
var G__39352 = (i__39330 + (1));
seq__39327 = G__39349;
chunk__39328 = G__39350;
count__39329 = G__39351;
i__39330 = G__39352;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39327);
if(temp__4657__auto__){
var seq__39327__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39327__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39327__$1);
var G__39353 = cljs.core.chunk_rest.call(null,seq__39327__$1);
var G__39354 = c__19529__auto__;
var G__39355 = cljs.core.count.call(null,c__19529__auto__);
var G__39356 = (0);
seq__39327 = G__39353;
chunk__39328 = G__39354;
count__39329 = G__39355;
i__39330 = G__39356;
continue;
} else {
var ms = cljs.core.first.call(null,seq__39327__$1);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);

var G__39357 = cljs.core.next.call(null,seq__39327__$1);
var G__39358 = null;
var G__39359 = (0);
var G__39360 = (0);
seq__39327 = G__39357;
chunk__39328 = G__39358;
count__39329 = G__39359;
i__39330 = G__39360;
continue;
}
} else {
return null;
}
}
break;
}
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't assign to a non-array object: "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));

(clojure.core.matrix.protocols.assign_array_BANG_["object"] = (function() {
var G__39361 = null;
var G__39361__2 = (function (m,arr){
var alen = cljs.core.long$.call(null,cljs.core.count.call(null,arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__19629__auto__ = alen;
var i = (0);
while(true){
if((i < n__19629__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,i));

var G__39362 = (i + (1));
i = G__39362;
continue;
} else {
return null;
}
break;
}
} else {
return clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr,(0),alen);
}
});
var G__39361__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$.call(null,length);
var start__$1 = cljs.core.long$.call(null,start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__19629__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__19629__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,(start__$1 + i)));

var G__39363 = (i + (1));
i = G__39363;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var skip = cljs.core.long$.call(null,((ss)?clojure.core.matrix.impl.defaults.calc_element_count.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m))):(0)));
var vals__19935__auto__ = cljs.core.seq.call(null,ss);
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__19935__auto__){
var s = cljs.core.first.call(null,vals__19935__auto__);
clojure.core.matrix.protocols.assign_array_BANG_.call(null,s,arr,(start__$1 + (skip * i)),skip);

var G__39377 = cljs.core.next.call(null,vals__19935__auto__);
var G__39378 = (i + (1));
vals__19935__auto__ = G__39377;
i = G__39378;
continue;
} else {
return null;
}
break;
}
}
});
G__39361 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__39361__2.call(this,m,arr);
case 4:
return G__39361__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39361.cljs$core$IFn$_invoke$arity$2 = G__39361__2;
G__39361.cljs$core$IFn$_invoke$arity$4 = G__39361__4;
return G__39361;
})()
);
(clojure.core.matrix.protocols.PImmutableAssignment["null"] = true);

(clojure.core.matrix.protocols.assign["null"] = (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));

(clojure.core.matrix.protocols.PImmutableAssignment["number"] = true);

(clojure.core.matrix.protocols.assign["number"] = (function (m,source){
return source;
}));

(clojure.core.matrix.protocols.PImmutableAssignment["object"] = true);

(clojure.core.matrix.protocols.assign["object"] = (function (m,source){
var r = clojure.core.matrix.protocols.broadcast_coerce.call(null,m,source);
if((r === source)){
return clojure.core.matrix.protocols.clone.call(null,r);
} else {
return r;
}
}));
(clojure.core.matrix.protocols.PMutableFill["object"] = true);

(clojure.core.matrix.protocols.fill_BANG_["object"] = (function (m,value){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,value);
}));
(clojure.core.matrix.protocols.PMatrixCloning["null"] = true);

(clojure.core.matrix.protocols.clone["null"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PMatrixCloning["number"] = true);

(clojure.core.matrix.protocols.clone["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PMatrixCloning["object"] = true);

(clojure.core.matrix.protocols.clone["object"] = (function (m){
return clojure.core.matrix.protocols.construct_matrix.call(null,m,m);
}));
(clojure.core.matrix.protocols.PSparseArray["object"] = true);

(clojure.core.matrix.protocols.is_sparse_QMARK_["object"] = (function (m){
return false;
}));
(clojure.core.matrix.protocols.PImmutableMatrixConstruction["null"] = true);

(clojure.core.matrix.protocols.immutable_matrix["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PImmutableMatrixConstruction["object"] = true);

(clojure.core.matrix.protocols.immutable_matrix["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
return m;
}
}));
(clojure.core.matrix.protocols.PZeroCount["null"] = true);

(clojure.core.matrix.protocols.zero_count["null"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.PZeroCount["number"] = true);

(clojure.core.matrix.protocols.zero_count["number"] = (function (m){
if((m === (0))){
return (1);
} else {
return (0);
}
}));

(clojure.core.matrix.protocols.PZeroCount["object"] = true);

(clojure.core.matrix.protocols.zero_count["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (acc,e){
if((e === (0))){
return (acc + (1));
} else {
return acc;
}
}),(0));
}));
(clojure.core.matrix.protocols.PMutableMatrixConstruction["null"] = true);

(clojure.core.matrix.protocols.mutable_matrix["null"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

(clojure.core.matrix.protocols.PMutableMatrixConstruction["number"] = true);

(clojure.core.matrix.protocols.mutable_matrix["number"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

(clojure.core.matrix.protocols.PMutableMatrixConstruction["object"] = true);

(clojure.core.matrix.protocols.mutable_matrix["object"] = (function (m){
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}));
(clojure.core.matrix.protocols.PMutableCoercion["null"] = true);

(clojure.core.matrix.protocols.ensure_mutable["null"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

(clojure.core.matrix.protocols.PMutableCoercion["number"] = true);

(clojure.core.matrix.protocols.ensure_mutable["number"] = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,m);
}));

(clojure.core.matrix.protocols.PMutableCoercion["object"] = true);

(clojure.core.matrix.protocols.ensure_mutable["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return m;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
}));
(clojure.core.matrix.protocols.PComputeMatrix["object"] = true);

(clojure.core.matrix.protocols.compute_matrix["object"] = (function (m,shape,f){
var m__$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,m,shape);
return cljs.core.reduce.call(null,((function (m__$1){
return (function (m__$2,ix){
return clojure.core.matrix.protocols.set_nd.call(null,m__$2,ix,cljs.core.apply.call(null,f,ix));
});})(m__$1))
,m__$1,clojure.core.matrix.utils.base_index_seq_for_shape.call(null,shape));
}));
(clojure.core.matrix.protocols.PDimensionInfo["null"] = true);

(clojure.core.matrix.protocols.dimensionality["null"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["null"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.dimension_count["null"] = (function (m,i){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil has zero dimensionality, cannot get count for dimension: "),cljs.core.str(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Cons.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

(clojure.core.matrix.protocols.PDimensionInfo["object"] = true);

(clojure.core.matrix.protocols.dimensionality["object"] = (function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
if((n > (0))){
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0)))) + (1));
} else {
return (1);
}
} else {
return (0);

}
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["object"] = (function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,m));
return ((n === (0))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m,(0))))));
} else {
return false;

}
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["object"] = (function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return false;
} else {
return true;

}
}));

(clojure.core.matrix.protocols.get_shape["object"] = (function (m){
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
var n = cljs.core.count.call(null,m);
if((n === (0))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
} else {
return cljs.core.cons.call(null,n,clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m,(0))));
}
} else {
return null;

}
}));

(clojure.core.matrix.protocols.dimension_count["object"] = (function (m,i){
var i__$1 = cljs.core.long$.call(null,i);
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
if((i__$1 === (0))){
return cljs.core.count.call(null,m);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m,(0)),(i__$1 - (1)));
}
} else {
if(((0) === i__$1)){
return cljs.core.count.call(null,m);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't determine count of dimension "),cljs.core.str(i__$1),cljs.core.str(" on Object: "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.IndexedSeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.LazySeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

(clojure.core.matrix.protocols.PDimensionInfo["number"] = true);

(clojure.core.matrix.protocols.dimensionality["number"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["number"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["number"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["number"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.dimension_count["number"] = (function (m,i){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number has zero dimensionality, cannot get count for dimension: "),cljs.core.str(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.List.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

(clojure.core.matrix.protocols.PDimensionInfo["string"] = true);

(clojure.core.matrix.protocols.dimensionality["string"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.is_scalar_QMARK_["string"] = (function (m){
return true;
}));

(clojure.core.matrix.protocols.is_vector_QMARK_["string"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.get_shape["string"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.dimension_count["string"] = (function (m,i){
throw cljs.core.ex_info.call(null,[cljs.core.str("String has zero dimensionality, cannot get count for dimension: "),cljs.core.str(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.Range.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (0);
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
return null;
});

cljs.core.Keyword.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,i){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Keyword has zero dimensionality, cannot get count for dimension: "),cljs.core.str(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
(clojure.core.matrix.protocols.PSameShape["null"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["null"] = (function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

(clojure.core.matrix.protocols.PSameShape["string"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["string"] = (function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

(clojure.core.matrix.protocols.PSameShape["number"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["number"] = (function (a,b){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)));
}));

(clojure.core.matrix.protocols.PSameShape["object"] = true);

(clojure.core.matrix.protocols.same_shape_QMARK_["object"] = (function (a,b){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,clojure.core.matrix.protocols.get_shape.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,b));
}));
(clojure.core.matrix.protocols.PMatrixOps["null"] = true);

(clojure.core.matrix.protocols.trace["null"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PMatrixOps["number"] = true);

(clojure.core.matrix.protocols.trace["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.inverse["number"] = (function (m){
return ((1) / m);
}));

(clojure.core.matrix.protocols.PMatrixOps["object"] = true);

(clojure.core.matrix.protocols.trace["object"] = (function (m){
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
var G__39648 = (i + (1));
var G__39649 = (res + clojure.core.matrix.protocols.get_2d.call(null,m,i,i));
i = G__39648;
res = G__39649;
continue;
}
break;
}
}));

(clojure.core.matrix.protocols.determinant["object"] = (function (m){
var imp = (function (){var or__18726__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("(let Need to load an implementation which supports determinant, e.g. vectorz-clj")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.determinant.call(null,m__$1);
}));

(clojure.core.matrix.protocols.inverse["object"] = (function (m){
var imp = (function (){var or__18726__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"vectorz","vectorz",1550942815));
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Need to load an implementation which supports inverse, e.g. vectorz-clj")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var mm = clojure.core.matrix.protocols.coerce_param.call(null,imp,m);
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.inverse.call(null,mm));
}));
(clojure.core.matrix.protocols.PTranspose["null"] = true);

(clojure.core.matrix.protocols.transpose["null"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PTranspose["number"] = true);

(clojure.core.matrix.protocols.transpose["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PTranspose["object"] = true);

(clojure.core.matrix.protocols.transpose["object"] = (function (m){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var G__39667 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__39667) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,cljs.core.mapv.call(null,((function (G__39667){
return (function (p1__39663_SHARP_){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,p1__39663_SHARP_);
});})(G__39667))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

break;
default:
var ss = cljs.core.mapv.call(null,clojure.core.matrix.protocols.transpose,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var G__39668 = cljs.core.count.call(null,ss);
switch (G__39668) {
case (1):
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,cljs.core.first.call(null,ss)),cljs.core.vector);

break;
case (2):
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,cljs.core.first.call(null,ss)),cljs.core.vector,cljs.core.second.call(null,ss));

break;
default:
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,cljs.core.first.call(null,ss)),cljs.core.vector,cljs.core.second.call(null,ss),cljs.core.nnext.call(null,ss));

}

}
})());
}));
(clojure.core.matrix.protocols.PTransposeInPlace["object"] = true);

(clojure.core.matrix.protocols.transpose_BANG_["object"] = (function (m){
var n_39677 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(cljs.core.not_EQ_.call(null,n_39677,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("transpose! requires a quare matrix")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__19629__auto___39679 = n_39677;
var i_39680 = (0);
while(true){
if((i_39680 < n__19629__auto___39679)){
var n__19629__auto___39681__$1 = i_39680;
var j_39682 = (0);
while(true){
if((j_39682 < n__19629__auto___39681__$1)){
var t_39683 = clojure.core.matrix.protocols.get_2d.call(null,m,i_39680,j_39682);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,i_39680,j_39682,clojure.core.matrix.protocols.get_2d.call(null,m,j_39682,i_39680));

clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j_39682,i_39680,t_39683);

var G__39687 = (j_39682 + (1));
j_39682 = G__39687;
continue;
} else {
}
break;
}

var G__39690 = (i_39680 + (1));
i_39680 = G__39690;
continue;
} else {
}
break;
}

return m;
}));
(clojure.core.matrix.protocols.PRotate["null"] = true);

(clojure.core.matrix.protocols.rotate["null"] = (function (m,dim,places){
return null;
}));

(clojure.core.matrix.protocols.PRotate["number"] = true);

(clojure.core.matrix.protocols.rotate["number"] = (function (m,dim,places){
return m;
}));

(clojure.core.matrix.protocols.PRotate["object"] = true);

(clojure.core.matrix.protocols.rotate["object"] = (function (m,dim,places){
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) <= (0))){
return m;
} else {
if(((0) === dim__$1)){
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.long$.call(null,cljs.core.mod.call(null,places__$1,c)):(0)));
if((sh === (0))){
return m;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.take_last.call(null,(c - sh),ss),cljs.core.take.call(null,sh,ss)));
}
} else {
return clojure.core.matrix.protocols.rotate.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim__$1,places__$1);

}
}
}));
(clojure.core.matrix.protocols.PRotateAll["null"] = true);

(clojure.core.matrix.protocols.rotate_all["null"] = (function (m,shifts){
return null;
}));

(clojure.core.matrix.protocols.PRotateAll["number"] = true);

(clojure.core.matrix.protocols.rotate_all["number"] = (function (m,shifts){
return m;
}));

(clojure.core.matrix.protocols.PRotateAll["object"] = true);

(clojure.core.matrix.protocols.rotate_all["object"] = (function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__39701){
var vec__39702 = p__39701;
var dim = cljs.core.nth.call(null,vec__39702,(0),null);
var shift = cljs.core.nth.call(null,vec__39702,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.rotate.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
(clojure.core.matrix.protocols.PShift["object"] = true);

(clojure.core.matrix.protocols.shift["object"] = (function (m,dim,shift){
var shift__$1 = cljs.core.long$.call(null,shift);
var z = clojure.core.matrix.protocols.generic_zero.call(null,m);
var c = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim));
var sh = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
if((shift__$1 === (0))){
return m;
} else {
if((shift__$1 >= c)){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 <= (- c))){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,z);
} else {
if((shift__$1 < (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,(- shift__$1))),clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),cljs.core.assoc.call(null,sh,dim,(c + shift__$1)))),dim);
} else {
if((shift__$1 > (0))){
return clojure.core.matrix.protocols.join_along.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.map.call(null,cljs.core.vector,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,sh),(0))),dim,shift__$1),cljs.core.assoc.call(null,sh,dim,(c - shift__$1)))),clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.construct_matrix.call(null,m,z),cljs.core.assoc.call(null,sh,dim,shift__$1)),dim);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Shouldn't be possible!!")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));

(clojure.core.matrix.protocols.shift_all["object"] = (function (m,shifts){
return cljs.core.reduce.call(null,(function (m__$1,p__39734){
var vec__39736 = p__39734;
var dim = cljs.core.nth.call(null,vec__39736,(0),null);
var shift = cljs.core.nth.call(null,vec__39736,(1),null);
if((shift === (0))){
return m__$1;
} else {
return clojure.core.matrix.protocols.shift.call(null,m__$1,dim,shift);
}
}),m,cljs.core.map_indexed.call(null,(function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
}),shifts));
}));
(clojure.core.matrix.protocols.POrder["null"] = true);

(clojure.core.matrix.protocols.order["null"] = (function() {
var G__39795 = null;
var G__39795__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__39795__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__39795 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__39795__2.call(this,m,dim);
case 3:
return G__39795__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39795.cljs$core$IFn$_invoke$arity$2 = G__39795__2;
G__39795.cljs$core$IFn$_invoke$arity$3 = G__39795__3;
return G__39795;
})()
);

(clojure.core.matrix.protocols.POrder["number"] = true);

(clojure.core.matrix.protocols.order["number"] = (function() {
var G__39797 = null;
var G__39797__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__39797__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__39797 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__39797__2.call(this,m,dim);
case 3:
return G__39797__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39797.cljs$core$IFn$_invoke$arity$2 = G__39797__2;
G__39797.cljs$core$IFn$_invoke$arity$3 = G__39797__3;
return G__39797;
})()
);

(clojure.core.matrix.protocols.POrder["object"] = true);

(clojure.core.matrix.protocols.order["object"] = (function() {
var G__39800 = null;
var G__39800__2 = (function (m,indices){
var mshape = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var subshape = cljs.core.assoc.call(null,m,(0),(1));
var ss = cljs.core.map.call(null,((function (mshape,subshape){
return (function (p1__39791_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__39791_SHARP_),subshape);
});})(mshape,subshape))
,indices);
return cljs.core.reduce.call(null,((function (mshape,subshape,ss){
return (function (p1__39792_SHARP_,p2__39793_SHARP_){
return clojure.core.matrix.protocols.join.call(null,p1__39792_SHARP_,p2__39793_SHARP_);
});})(mshape,subshape,ss))
,ss);
});
var G__39800__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim,indices);
});
G__39800 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__39800__2.call(this,m,dim);
case 3:
return G__39800__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__39800.cljs$core$IFn$_invoke$arity$2 = G__39800__2;
G__39800.cljs$core$IFn$_invoke$arity$3 = G__39800__3;
return G__39800;
})()
);
(clojure.core.matrix.protocols.PMatrixProducts["number"] = true);

(clojure.core.matrix.protocols.inner_product["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.outer_product["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.PMatrixProducts["object"] = true);

(clojure.core.matrix.protocols.inner_product["object"] = (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,(function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));
}
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),cljs.core.map.call(null,(function (p1__39804_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__39804_SHARP_,a);
}),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

}
}
}
}));

(clojure.core.matrix.protocols.outer_product["object"] = (function (m,a){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (v){
return clojure.core.matrix.protocols.pre_scale.call(null,a,v);
}));

}
}));
(clojure.core.matrix.protocols.PMatrixMultiply["number"] = true);

(clojure.core.matrix.protocols.element_multiply["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.matrix_multiply["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a))){
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Don't know how to multiply number with: "),cljs.core.str(cljs.core.type.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));

(clojure.core.matrix.protocols.PMatrixMultiply["object"] = true);

(clojure.core.matrix.protocols.matrix_multiply["object"] = (function (m,a){
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
if(((mdims === (1))) && ((adims === (1)))){
return clojure.core.matrix.protocols.vector_dot.call(null,m,a);
} else {
if(((mdims === (1))) && ((adims === (2)))){
var vec__39815 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__39815,(0),null);
var acols = cljs.core.nth.call(null,vec__39815,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,clojure.core.matrix.protocols.reshape.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if(((mdims === (2))) && ((adims === (1)))){
var vec__39816 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__39816,(0),null);
var mcols = cljs.core.nth.call(null,vec__39816,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.reshape.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols], null));
} else {
if(((mdims === (2))) && ((adims === (2)))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
var vec__39817 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__39817,(0),null);
var mcols = cljs.core.nth.call(null,vec__39817,(1),null);
var vec__39818 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__39818,(0),null);
var acols = cljs.core.nth.call(null,vec__39818,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix.call(null,new_m_type,mrows,acols);
var i_39992 = cljs.core.long$.call(null,(0));
while(true){
if((i_39992 < mrows)){
var j_39994 = cljs.core.long$.call(null,(0));
while(true){
if((j_39994 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_39992,j_39994,(0));

var G__39998 = (j_39994 + (1));
j_39994 = G__39998;
continue;
} else {
}
break;
}

var G__39999 = (i_39992 + (1));
i_39992 = G__39999;
continue;
} else {
}
break;
}


var i_40001 = cljs.core.long$.call(null,(0));
while(true){
if((i_40001 < mrows)){
var j_40005 = cljs.core.long$.call(null,(0));
while(true){
if((j_40005 < acols)){
var k_40007 = cljs.core.long$.call(null,(0));
while(true){
if((k_40007 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_40001,j_40005,(clojure.core.matrix.protocols.get_2d.call(null,new_m,i_40001,j_40005) + (clojure.core.matrix.protocols.get_2d.call(null,m,i_40001,k_40007) * clojure.core.matrix.protocols.get_2d.call(null,a,k_40007,j_40005))));

var G__40020 = (k_40007 + (1));
k_40007 = G__40020;
continue;
} else {
}
break;
}

var G__40021 = (j_40005 + (1));
j_40005 = G__40021;
continue;
} else {
}
break;
}

var G__40024 = (i_40001 + (1));
i_40001 = G__40024;
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

(clojure.core.matrix.protocols.element_multiply["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m,a);
} else {
var vec__39827 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__39827,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__39827,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._STAR_,a__$1);
}
}));
(clojure.core.matrix.protocols.PMatrixMultiplyMutable["number"] = true);

(clojure.core.matrix.protocols.element_multiply_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable multiply on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.matrix_multiply_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable multiply on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixMultiplyMutable["object"] = true);

(clojure.core.matrix.protocols.element_multiply_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,m,a));
}));

(clojure.core.matrix.protocols.matrix_multiply_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.matrix_multiply.call(null,m,a));
}));
(clojure.core.matrix.protocols.PMatrixDivide["number"] = true);

(clojure.core.matrix.protocols.element_divide["number"] = (function() {
var G__40066 = null;
var G__40066__1 = (function (m){
return ((1) / m);
});
var G__40066__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale.call(null,clojure.core.matrix.protocols.element_divide.call(null,a),m);
});
G__40066 = function(m,a){
switch(arguments.length){
case 1:
return G__40066__1.call(this,m);
case 2:
return G__40066__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40066.cljs$core$IFn$_invoke$arity$1 = G__40066__1;
G__40066.cljs$core$IFn$_invoke$arity$2 = G__40066__2;
return G__40066;
})()
);

(clojure.core.matrix.protocols.PMatrixDivide["object"] = true);

(clojure.core.matrix.protocols.element_divide["object"] = (function() {
var G__40072 = null;
var G__40072__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape.call(null,m))){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Don't know how to take reciprocal of "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__40072__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply.call(null,m,clojure.core.matrix.protocols.element_divide.call(null,a));
});
G__40072 = function(m,a){
switch(arguments.length){
case 1:
return G__40072__1.call(this,m);
case 2:
return G__40072__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40072.cljs$core$IFn$_invoke$arity$1 = G__40072__1;
G__40072.cljs$core$IFn$_invoke$arity$2 = G__40072__2;
return G__40072;
})()
);
(clojure.core.matrix.protocols.PMatrixDivideMutable["number"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["number"] = (function() {
var G__40088 = null;
var G__40088__1 = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable divide on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40088__2 = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable divide on a scalar numer")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__40088 = function(m,a){
switch(arguments.length){
case 1:
return G__40088__1.call(this,m);
case 2:
return G__40088__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40088.cljs$core$IFn$_invoke$arity$1 = G__40088__1;
G__40088.cljs$core$IFn$_invoke$arity$2 = G__40088__2;
return G__40088;
})()
);

(clojure.core.matrix.protocols.PMatrixDivideMutable["object"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["object"] = (function() {
var G__40122 = null;
var G__40122__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._SLASH_);
});
var G__40122__2 = (function (m,a){
var vec__40085 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__40085,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40085,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1,cljs.core._SLASH_,a__$1);
});
G__40122 = function(m,a){
switch(arguments.length){
case 1:
return G__40122__1.call(this,m);
case 2:
return G__40122__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40122.cljs$core$IFn$_invoke$arity$1 = G__40122__1;
G__40122.cljs$core$IFn$_invoke$arity$2 = G__40122__2;
return G__40122;
})()
);
(clojure.core.matrix.protocols.PSummable["number"] = true);

(clojure.core.matrix.protocols.element_sum["number"] = (function (a){
return a;
}));

(clojure.core.matrix.protocols.PSummable["object"] = true);

(clojure.core.matrix.protocols.element_sum["object"] = (function (a){
return clojure.core.matrix.protocols.element_reduce.call(null,a,(cljs.core.truth_(clojure.core.matrix.protocols.numerical_QMARK_.call(null,a))?cljs.core._PLUS_:clojure.core.matrix.protocols.matrix_add));
}));
(clojure.core.matrix.protocols.PElementMinMax["number"] = true);

(clojure.core.matrix.protocols.element_min["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.element_max["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.element_clamp["number"] = (function (m,a,b){
if(!((a <= b))){
throw cljs.core.ex_info.call(null,[cljs.core.str("min argument: "),cljs.core.str(a),cljs.core.str(" should be <= max argument: "),cljs.core.str(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((m < a)){
return a;
} else {
if((m > b)){
return b;
} else {
return m;
}
}
}
}));

(clojure.core.matrix.protocols.PElementMinMax["object"] = true);

(clojure.core.matrix.protocols.element_min["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if((cljs.core.not.call(null,best)) || ((v < best))){
return v;
} else {
return best;
}
}),null);
}));

(clojure.core.matrix.protocols.element_max["object"] = (function (m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,(function (best,v){
if((cljs.core.not.call(null,best)) || ((v > best))){
return v;
} else {
return best;
}
}),null);
}));

(clojure.core.matrix.protocols.element_clamp["object"] = (function (m,a,b){
if(!((a <= b))){
throw cljs.core.ex_info.call(null,[cljs.core.str("min argument: "),cljs.core.str(a),cljs.core.str(" should be <= max argument: "),cljs.core.str(b)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40248_SHARP_){
if((p1__40248_SHARP_ < a)){
return a;
} else {
if((p1__40248_SHARP_ > b)){
return b;
} else {
return p1__40248_SHARP_;
}
}
}));
}
}));
(clojure.core.matrix.protocols.PCompare["number"] = true);

(clojure.core.matrix.protocols.element_compare["number"] = (function (a,b){
if(typeof b === 'number'){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,(a - b)));
} else {
return clojure.core.matrix.protocols.signum.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b));
}
}));

(clojure.core.matrix.protocols.element_if["number"] = (function (m,a,b){
var vec__40314 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,a,b);
var a__$1 = cljs.core.nth.call(null,vec__40314,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__40314,(1),null);
if((m > (0))){
return a__$1;
} else {
return b__$1;
}
}));

(clojure.core.matrix.protocols.element_lt["number"] = (function (m,a){
if(typeof a === 'number'){
if((m < a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_gt.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.element_le["number"] = (function (m,a){
if(typeof a === 'number'){
if((m <= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ge.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.element_gt["number"] = (function (m,a){
if(typeof a === 'number'){
if((m > a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_lt.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.element_ge["number"] = (function (m,a){
if(typeof a === 'number'){
if((m >= a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_le.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.element_ne["number"] = (function (m,a){
if(typeof a === 'number'){
if(cljs.core.not_EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_ne.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.element_eq["number"] = (function (m,a){
if(typeof a === 'number'){
if(cljs.core._EQ_.call(null,m,a)){
return (1);
} else {
return (0);
}
} else {
return clojure.core.matrix.protocols.element_eq.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.PCompare["object"] = true);

(clojure.core.matrix.protocols.element_compare["object"] = (function (a,b){
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),(function (p1__40282_SHARP_){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,p1__40282_SHARP_));
}));
}));

(clojure.core.matrix.protocols.element_if["object"] = (function (m,a,b){
if((typeof a === 'number') && (typeof b === 'number')){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40284_SHARP_){
if((p1__40284_SHARP_ > (0))){
return a;
} else {
return b;
}
}));
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40285_SHARP_,p2__40287_SHARP_){
if((p1__40285_SHARP_ > (0))){
return a;
} else {
return p2__40287_SHARP_;
}
}),b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40288_SHARP_,p2__40289_SHARP_){
if((p1__40288_SHARP_ > (0))){
return p2__40289_SHARP_;
} else {
return b;
}
}),a);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40291_SHARP_,p2__40292_SHARP_,p3__40293_SHARP_){
if((p1__40291_SHARP_ > (0))){
return p2__40292_SHARP_;
} else {
return p3__40293_SHARP_;
}
}),a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
}));

(clojure.core.matrix.protocols.element_lt["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40294_SHARP_){
if((p1__40294_SHARP_ < a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40295_SHARP_,p2__40296_SHARP_){
if((p1__40295_SHARP_ < p2__40296_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_le["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40297_SHARP_){
if((p1__40297_SHARP_ <= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40298_SHARP_,p2__40299_SHARP_){
if((p1__40298_SHARP_ <= p2__40299_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_gt["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40300_SHARP_){
if((p1__40300_SHARP_ > a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40301_SHARP_,p2__40302_SHARP_){
if((p1__40301_SHARP_ > p2__40302_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_ge["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40303_SHARP_){
if((p1__40303_SHARP_ >= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40304_SHARP_,p2__40305_SHARP_){
if((p1__40304_SHARP_ >= p2__40305_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_ne["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40306_SHARP_){
if(!((p1__40306_SHARP_ === a))){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40307_SHARP_,p2__40308_SHARP_){
if(!((p1__40307_SHARP_ === p2__40308_SHARP_))){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_eq["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40310_SHARP_){
if((p1__40310_SHARP_ === a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40311_SHARP_,p2__40312_SHARP_){
if((p1__40311_SHARP_ === p2__40312_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));
(clojure.core.matrix.protocols.PAddProduct["number"] = true);

(clojure.core.matrix.protocols.add_product["number"] = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),m);
}));

(clojure.core.matrix.protocols.PAddProduct["object"] = true);

(clojure.core.matrix.protocols.add_product["object"] = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
(clojure.core.matrix.protocols.PAddProductMutable["number"] = true);

(clojure.core.matrix.protocols.add_product_BANG_["number"] = (function (m,a,b){
throw cljs.core.ex_info.call(null,[cljs.core.str("Numbers are not mutable")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PAddProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_product_BANG_["object"] = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,a,b));
}));
(clojure.core.matrix.protocols.PAddScaled["number"] = true);

(clojure.core.matrix.protocols.add_scaled["number"] = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,a,factor),m);
}));

(clojure.core.matrix.protocols.PAddScaled["object"] = true);

(clojure.core.matrix.protocols.add_scaled["object"] = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
(clojure.core.matrix.protocols.PAddScaledMutable["number"] = true);

(clojure.core.matrix.protocols.add_scaled_BANG_["number"] = (function (m,a,factor){
throw cljs.core.ex_info.call(null,[cljs.core.str("Numbers are not mutable")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PAddScaledMutable["object"] = true);

(clojure.core.matrix.protocols.add_scaled_BANG_["object"] = (function (m,a,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,a,factor));
}));
(clojure.core.matrix.protocols.PAddScaledProduct["number"] = true);

(clojure.core.matrix.protocols.add_scaled_product["number"] = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor),m);
}));

(clojure.core.matrix.protocols.PAddScaledProduct["object"] = true);

(clojure.core.matrix.protocols.add_scaled_product["object"] = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
(clojure.core.matrix.protocols.PAddScaledProductMutable["number"] = true);

(clojure.core.matrix.protocols.add_scaled_product_BANG_["number"] = (function (m,a,b,factor){
throw cljs.core.ex_info.call(null,[cljs.core.str("Numbers are not mutable")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PAddScaledProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_scaled_product_BANG_["object"] = (function (m,a,b,factor){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.scale.call(null,clojure.core.matrix.protocols.element_multiply.call(null,a,b),factor));
}));
(clojure.core.matrix.protocols.PScaleAdd["object"] = true);

(clojure.core.matrix.protocols.scale_add_BANG_["object"] = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,m1,a);

if((typeof b === 'number') && ((b === (0)))){
} else {
clojure.core.matrix.protocols.add_product_BANG_.call(null,m1,m2,b);
}

if((typeof constant === 'number') && ((constant === (0)))){
} else {
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m1,constant);
}

return m1;
}));
(clojure.core.matrix.protocols.PScaleAdd2["object"] = true);

(clojure.core.matrix.protocols.scale_add["object"] = (function (m1,a,m2,b,constant){
var r = clojure.core.matrix.protocols.matrix_add.call(null,clojure.core.matrix.protocols.scale.call(null,m1,a),clojure.core.matrix.protocols.scale.call(null,m2,b));
if((0.0 === constant)){
return r;
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,r,constant);
}
}));
(clojure.core.matrix.protocols.PLerp["object"] = true);

(clojure.core.matrix.protocols.lerp["object"] = (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add.call(null,a,(1.0 - factor),b,factor,0.0);
}));

(clojure.core.matrix.protocols.lerp_BANG_["object"] = (function (a,b,factor){
return clojure.core.matrix.protocols.scale_add_BANG_.call(null,a,(1.0 - factor),b,factor,0.0);
}));
(clojure.core.matrix.protocols.PAddInnerProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_inner_product_BANG_["object"] = (function() {
var G__40386 = null;
var G__40386__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__40386__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b),factor);
});
G__40386 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__40386__3.call(this,m,a,b);
case 4:
return G__40386__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40386.cljs$core$IFn$_invoke$arity$3 = G__40386__3;
G__40386.cljs$core$IFn$_invoke$arity$4 = G__40386__4;
return G__40386;
})()
);
(clojure.core.matrix.protocols.PAddOuterProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_outer_product_BANG_["object"] = (function() {
var G__40390 = null;
var G__40390__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b));
});
var G__40390__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b),factor);
});
G__40390 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__40390__3.call(this,m,a,b);
case 4:
return G__40390__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40390.cljs$core$IFn$_invoke$arity$3 = G__40390__3;
G__40390.cljs$core$IFn$_invoke$arity$4 = G__40390__4;
return G__40390;
})()
);
(clojure.core.matrix.protocols.PSetInnerProductMutable["object"] = true);

(clojure.core.matrix.protocols.set_inner_product_BANG_["object"] = (function() {
var G__40394 = null;
var G__40394__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__40394__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));

return clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);
});
G__40394 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__40394__3.call(this,m,a,b);
case 4:
return G__40394__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40394.cljs$core$IFn$_invoke$arity$3 = G__40394__3;
G__40394.cljs$core$IFn$_invoke$arity$4 = G__40394__4;
return G__40394;
})()
);
(clojure.core.matrix.protocols.PTypeInfo["null"] = true);

(clojure.core.matrix.protocols.element_type["null"] = (function (a){
return Object;
}));

(clojure.core.matrix.protocols.PTypeInfo["object"] = true);

(clojure.core.matrix.protocols.element_type["object"] = (function (a){
if((Array === a.constructor)){
return cljs.core.type.call(null,a).getComponentType();
} else {
return Object;
}
}));
(clojure.core.matrix.protocols.PGenericValues["object"] = true);

(clojure.core.matrix.protocols.generic_zero["object"] = (function (m){
return (0);
}));

(clojure.core.matrix.protocols.generic_one["object"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.generic_value["object"] = (function (m){
return (0);
}));
cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$ = true;

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
} else {
return m__$1.call(null,a);
}
});

cljs.core.IFn.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
if(cljs.core.vector_QMARK_.call(null,m__$1)){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
} else {
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,m__$1.call(null,a));
}
});

(clojure.core.matrix.protocols.PVectorTransform["object"] = true);

(clojure.core.matrix.protocols.vector_transform["object"] = (function (m,a){
if(((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.matrix_multiply.call(null,m,a);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Don't know how to transform using: "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}));

(clojure.core.matrix.protocols.vector_transform_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.vector_transform.call(null,m,a));
}));
(clojure.core.matrix.protocols.PMatrixScaling["number"] = true);

(clojure.core.matrix.protocols.scale["number"] = (function (m,a){
if(typeof a === 'number'){
return (m * a);
} else {
return clojure.core.matrix.protocols.pre_scale.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.pre_scale["number"] = (function (m,a){
if(typeof a === 'number'){
return (a * m);
} else {
return clojure.core.matrix.protocols.scale.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.PMatrixScaling["object"] = true);

(clojure.core.matrix.protocols.scale["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40401_SHARP_){
return (p1__40401_SHARP_ * a);
}));
}));

(clojure.core.matrix.protocols.pre_scale["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));
}));
(clojure.core.matrix.protocols.PMatrixMutableScaling["number"] = true);

(clojure.core.matrix.protocols.scale_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't scale! a numeric value: "),cljs.core.str(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.pre_scale_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't pre-scale! a numeric value: "),cljs.core.str(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixMutableScaling["object"] = true);

(clojure.core.matrix.protocols.scale_BANG_["object"] = (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__40408_SHARP_){
return (p1__40408_SHARP_ * a);
}));

return m;
}));

(clojure.core.matrix.protocols.pre_scale_BANG_["object"] = (function (m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core.partial.call(null,cljs.core._STAR_,a));

return m;
}));
(clojure.core.matrix.protocols.PMatrixAdd["number"] = true);

(clojure.core.matrix.protocols.matrix_add["number"] = (function (m,a){
if(typeof a === 'number'){
return (m + a);
} else {
return clojure.core.matrix.protocols.matrix_add.call(null,a,m);
}
}));

(clojure.core.matrix.protocols.matrix_sub["number"] = (function (m,a){
if(typeof a === 'number'){
return (m - a);
} else {
return clojure.core.matrix.protocols.negate.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,m));
}
}));

(clojure.core.matrix.protocols.PMatrixAdd["object"] = true);

(clojure.core.matrix.protocols.matrix_add["object"] = (function (m,a){
var vec__40411 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__40411,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40411,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._PLUS_,a__$1);
}));

(clojure.core.matrix.protocols.matrix_sub["object"] = (function (m,a){
var vec__40412 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__40412,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40412,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._,a__$1);
}));
(clojure.core.matrix.protocols.PMatrixAddMutable["number"] = true);

(clojure.core.matrix.protocols.matrix_add_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable add! on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.matrix_sub_BANG_["number"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable sub! on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixAddMutable["object"] = true);

(clojure.core.matrix.protocols.matrix_add_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._PLUS_,a);
}));

(clojure.core.matrix.protocols.matrix_sub_BANG_["object"] = (function (m,a){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._,a);
}));
(clojure.core.matrix.protocols.PNegation["null"] = true);

(clojure.core.matrix.protocols.negate["null"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't negate nil!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PNegation["number"] = true);

(clojure.core.matrix.protocols.negate["number"] = (function (m){
return (- m);
}));

(clojure.core.matrix.protocols.PNegation["object"] = true);

(clojure.core.matrix.protocols.negate["object"] = (function (m){
return clojure.core.matrix.protocols.scale.call(null,m,-1.0);
}));
(clojure.core.matrix.protocols.PMatrixEquality["null"] = true);

(clojure.core.matrix.protocols.matrix_equals["null"] = (function (a,b){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil is not a valid numerical value in equality testing")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixEquality["number"] = true);

(clojure.core.matrix.protocols.matrix_equals["number"] = (function (a,b){
if(typeof b === 'number'){
return (a === b);
} else {
if(((0) === clojure.core.matrix.protocols.dimensionality.call(null,b))){
return (a === (function (){var x__19974__auto__ = b;
if(typeof x__19974__auto__ === 'number'){
return x__19974__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__19974__auto__);

}
})());
} else {
return false;

}
}
}));

(clojure.core.matrix.protocols.PMatrixEquality["object"] = true);

(clojure.core.matrix.protocols.matrix_equals["object"] = (function (a,b){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a)))){
return (clojure.core.matrix.protocols.get_0d.call(null,a) === (function (){var x__19974__auto__ = b;
if(typeof x__19974__auto__ === 'number'){
return x__19974__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__19974__auto__);

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
(clojure.core.matrix.protocols.PValueEquality["null"] = true);

(clojure.core.matrix.protocols.value_equals["null"] = (function (a,b){
return ((b == null)) || ((((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((clojure.core.matrix.protocols.get_0d.call(null,b) == null)));
}));

(clojure.core.matrix.protocols.PValueEquality["number"] = true);

(clojure.core.matrix.protocols.value_equals["number"] = (function (a,b){
return (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))) && ((a === clojure.core.matrix.protocols.get_0d.call(null,b)));
}));

(clojure.core.matrix.protocols.PValueEquality["object"] = true);

(clojure.core.matrix.protocols.value_equals["object"] = (function (a,b){
var and__18714__auto__ = clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b);
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.every_QMARK_.call(null,cljs.core.true_QMARK_,cljs.core.map.call(null,cljs.core._EQ_,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return and__18714__auto__;
}
}));
(clojure.core.matrix.protocols.PMatrixEqualityEpsilon["null"] = true);

(clojure.core.matrix.protocols.matrix_equals_epsilon["null"] = (function (a,b,eps){
throw cljs.core.ex_info.call(null,[cljs.core.str("nil is not a valid numerical value in equality testing")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMatrixEqualityEpsilon["number"] = true);

(clojure.core.matrix.protocols.matrix_equals_epsilon["number"] = (function (a,b,eps){
if(typeof b === 'number'){
return (Math.abs((a - b)) <= eps);
} else {
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b)))){
return (Math.abs((a - clojure.core.matrix.protocols.get_0d.call(null,b))) <= eps);
} else {
return false;

}
}
}));

(clojure.core.matrix.protocols.PMatrixEqualityEpsilon["object"] = true);

(clojure.core.matrix.protocols.matrix_equals_epsilon["object"] = (function (a,b,eps){
if((a === b)){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shape_QMARK_.call(null,a,b))){
var eps__$1 = eps;
return cljs.core.every_QMARK_.call(null,((function (eps__$1){
return (function (p1__40422_SHARP_){
return (Math.abs(p1__40422_SHARP_) <= eps__$1);
});})(eps__$1))
,cljs.core.map.call(null,cljs.core._,clojure.core.matrix.protocols.element_seq.call(null,a),clojure.core.matrix.protocols.element_seq.call(null,b)));
} else {
return false;

}
}
}));
(clojure.core.matrix.protocols.PDoubleArrayOutput["number"] = true);

(clojure.core.matrix.protocols.to_double_array["number"] = (function (m){
var arr = cljs.core.double_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

(clojure.core.matrix.protocols.as_double_array["number"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PDoubleArrayOutput["object"] = true);

(clojure.core.matrix.protocols.to_double_array["object"] = (function (m){
return cljs.core.double_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

(clojure.core.matrix.protocols.as_double_array["object"] = (function (m){
return null;
}));
(clojure.core.matrix.protocols.PObjectArrayOutput["null"] = true);

(clojure.core.matrix.protocols.to_object_array["null"] = (function (m){
var arr = cljs.core.object_array.call(null,(1));
return arr;
}));

(clojure.core.matrix.protocols.as_object_array["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PObjectArrayOutput["number"] = true);

(clojure.core.matrix.protocols.to_object_array["number"] = (function (m){
var arr = cljs.core.object_array.call(null,(1));
(arr[(0)] = m);

return arr;
}));

(clojure.core.matrix.protocols.as_object_array["number"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PObjectArrayOutput["object"] = true);

(clojure.core.matrix.protocols.to_object_array["object"] = (function (m){
return cljs.core.object_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

(clojure.core.matrix.protocols.as_object_array["object"] = (function (m){
return null;
}));
(clojure.core.matrix.protocols.PRowOperations["object"] = true);

(clojure.core.matrix.protocols.swap_rows["object"] = (function (m,i,j){
return clojure.core.matrix.protocols.swap_rows.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j);
}));

(clojure.core.matrix.protocols.multiply_row["object"] = (function (m,i,k){
return clojure.core.matrix.protocols.multiply_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,k);
}));

(clojure.core.matrix.protocols.add_row["object"] = (function (m,i,j,k){
return clojure.core.matrix.protocols.add_row.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),i,j,k);
}));
(clojure.core.matrix.protocols.PRowSetting["object"] = true);

(clojure.core.matrix.protocols.set_row["object"] = (function (m,i,row){
var svec = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,svec.call(null,(0)),row);
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.assoc.call(null,svec,i,row__$1));
}));

(clojure.core.matrix.protocols.set_row_BANG_["object"] = (function (m,i,row){
var sl = clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
var row__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,sl,row);
clojure.core.matrix.protocols.assign_BANG_.call(null,sl,row__$1);

return m;
}));
(clojure.core.matrix.protocols.PColumnSetting["object"] = true);

(clojure.core.matrix.protocols.set_column["object"] = (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var indices = cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0)));
var new_m = cljs.core.reduce.call(null,((function (scol,column__$1,indices){
return (function (acc,idx){
return clojure.core.matrix.protocols.set_2d.call(null,acc,idx,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,idx));
});})(scol,column__$1,indices))
,m,indices);
return clojure.core.matrix.protocols.coerce_param.call(null,m,new_m);
}));

(clojure.core.matrix.protocols.set_column_BANG_["object"] = (function (m,i,column){
var scol = clojure.core.matrix.protocols.get_column.call(null,m,(0));
var column__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,scol,column);
var n__19629__auto__ = clojure.core.matrix.protocols.dimension_count.call(null,column__$1,(0));
var j = (0);
while(true){
if((j < n__19629__auto__)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j,i,clojure.core.matrix.protocols.get_1d.call(null,column__$1,j));

var G__40451 = (j + (1));
j = G__40451;
continue;
} else {
return null;
}
break;
}
}));
(clojure.core.matrix.protocols.PFunctionalOperations["number"] = true);

(clojure.core.matrix.protocols.element_seq["number"] = (function (m){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[m],null));
}));

(clojure.core.matrix.protocols.element_map["number"] = (function() {
var G__40467 = null;
var G__40467__2 = (function (m,f){
return f.call(null,m);
});
var G__40467__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__40452_SHARP_){
return f.call(null,m,p1__40452_SHARP_);
}));
});
var G__40467__4 = (function (m,f,a,more){
var temp__4655__auto__ = cljs.core.next.call(null,more);
if(temp__4655__auto__){
var moremore = temp__4655__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__4655__auto__){
return (function() { 
var G__40470__delegate = function (p1__40453_SHARP_,p2__40454_SHARP_,rest__40455_SHARP_){
return cljs.core.apply.call(null,f,m,p1__40453_SHARP_,p2__40454_SHARP_,rest__40455_SHARP_);
};
var G__40470 = function (p1__40453_SHARP_,p2__40454_SHARP_,var_args){
var rest__40455_SHARP_ = null;
if (arguments.length > 2) {
var G__40471__i = 0, G__40471__a = new Array(arguments.length -  2);
while (G__40471__i < G__40471__a.length) {G__40471__a[G__40471__i] = arguments[G__40471__i + 2]; ++G__40471__i;}
  rest__40455_SHARP_ = new cljs.core.IndexedSeq(G__40471__a,0);
} 
return G__40470__delegate.call(this,p1__40453_SHARP_,p2__40454_SHARP_,rest__40455_SHARP_);};
G__40470.cljs$lang$maxFixedArity = 2;
G__40470.cljs$lang$applyTo = (function (arglist__40472){
var p1__40453_SHARP_ = cljs.core.first(arglist__40472);
arglist__40472 = cljs.core.next(arglist__40472);
var p2__40454_SHARP_ = cljs.core.first(arglist__40472);
var rest__40455_SHARP_ = cljs.core.rest(arglist__40472);
return G__40470__delegate(p1__40453_SHARP_,p2__40454_SHARP_,rest__40455_SHARP_);
});
G__40470.cljs$core$IFn$_invoke$arity$variadic = G__40470__delegate;
return G__40470;
})()
;})(moremore,temp__4655__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__4655__auto__){
return (function (p1__40456_SHARP_,p2__40457_SHARP_){
return f.call(null,m,p1__40456_SHARP_,p2__40457_SHARP_);
});})(temp__4655__auto__))
,cljs.core.first.call(null,more));
}
});
G__40467 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40467__2.call(this,m,f);
case 3:
return G__40467__3.call(this,m,f,a);
case 4:
return G__40467__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40467.cljs$core$IFn$_invoke$arity$2 = G__40467__2;
G__40467.cljs$core$IFn$_invoke$arity$3 = G__40467__3;
G__40467.cljs$core$IFn$_invoke$arity$4 = G__40467__4;
return G__40467;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["number"] = (function() {
var G__40478 = null;
var G__40478__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40478__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40478__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__40478 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40478__2.call(this,m,f);
case 3:
return G__40478__3.call(this,m,f,a);
case 4:
return G__40478__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40478.cljs$core$IFn$_invoke$arity$2 = G__40478__2;
G__40478.cljs$core$IFn$_invoke$arity$3 = G__40478__3;
G__40478.cljs$core$IFn$_invoke$arity$4 = G__40478__4;
return G__40478;
})()
);

(clojure.core.matrix.protocols.element_reduce["number"] = (function() {
var G__40486 = null;
var G__40486__2 = (function (m,f){
return m;
});
var G__40486__3 = (function (m,f,init){
return f.call(null,init,m);
});
G__40486 = function(m,f,init){
switch(arguments.length){
case 2:
return G__40486__2.call(this,m,f);
case 3:
return G__40486__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40486.cljs$core$IFn$_invoke$arity$2 = G__40486__2;
G__40486.cljs$core$IFn$_invoke$arity$3 = G__40486__3;
return G__40486;
})()
);

(clojure.core.matrix.protocols.PFunctionalOperations["object"] = true);

(clojure.core.matrix.protocols.element_seq["object"] = (function (m){
var c = cljs.core.type.call(null,m);
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims > (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return m;
} else {
if(((0) === dims)){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[clojure.core.matrix.protocols.get_0d.call(null,m)],null));
} else {
if(cljs.core._EQ_.call(null,Array,c)){
return m;
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Don't know how to create element-seq from: "),cljs.core.str(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}
}));

(clojure.core.matrix.protocols.element_map["object"] = (function() {
var G__40498 = null;
var G__40498__2 = (function (m,f){
return clojure.core.matrix.protocols.construct_matrix.call(null,m,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m));
});
var G__40498__3 = (function (m,f,a){
var vec__40461 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__40461,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40461,(1),null);
return clojure.core.matrix.protocols.construct_matrix.call(null,m__$1,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1,a__$1));
});
var G__40498__4 = (function (m,f,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__18726__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Attempt to do element map with incompatible shapes: "),cljs.core.str(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh){
return (function (p1__40458_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__40458_SHARP_,sh);
});})(arrays,shapes,sh))
,arrays);
return clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__40498 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40498__2.call(this,m,f);
case 3:
return G__40498__3.call(this,m,f,a);
case 4:
return G__40498__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40498.cljs$core$IFn$_invoke$arity$2 = G__40498__2;
G__40498.cljs$core$IFn$_invoke$arity$3 = G__40498__3;
G__40498.cljs$core$IFn$_invoke$arity$4 = G__40498__4;
return G__40498;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["object"] = (function() {
var G__40515 = null;
var G__40515__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f));
});
var G__40515__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a));
});
var G__40515__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a,more));
});
G__40515 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40515__2.call(this,m,f);
case 3:
return G__40515__3.call(this,m,f,a);
case 4:
return G__40515__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40515.cljs$core$IFn$_invoke$arity$2 = G__40515__2;
G__40515.cljs$core$IFn$_invoke$arity$3 = G__40515__3;
G__40515.cljs$core$IFn$_invoke$arity$4 = G__40515__4;
return G__40515;
})()
);

(clojure.core.matrix.protocols.element_reduce["object"] = (function() {
var G__40516 = null;
var G__40516__2 = (function (m,f){
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m));
});
var G__40516__3 = (function (m,f,init){
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m));
});
G__40516 = function(m,f,init){
switch(arguments.length){
case 2:
return G__40516__2.call(this,m,f);
case 3:
return G__40516__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40516.cljs$core$IFn$_invoke$arity$2 = G__40516__2;
G__40516.cljs$core$IFn$_invoke$arity$3 = G__40516__3;
return G__40516;
})()
);

(clojure.core.matrix.protocols.PFunctionalOperations["null"] = true);

(clojure.core.matrix.protocols.element_seq["null"] = (function (m){
return cljs.core.list(null);
}));

(clojure.core.matrix.protocols.element_map["null"] = (function() {
var G__40517 = null;
var G__40517__2 = (function (m,f){
return f.call(null,null);
});
var G__40517__3 = (function (m,f,a){
return f.call(null,null,a);
});
var G__40517__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,null,a,more);
});
G__40517 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40517__2.call(this,m,f);
case 3:
return G__40517__3.call(this,m,f,a);
case 4:
return G__40517__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40517.cljs$core$IFn$_invoke$arity$2 = G__40517__2;
G__40517.cljs$core$IFn$_invoke$arity$3 = G__40517__3;
G__40517.cljs$core$IFn$_invoke$arity$4 = G__40517__4;
return G__40517;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["null"] = (function() {
var G__40518 = null;
var G__40518__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40518__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40518__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__40518 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40518__2.call(this,m,f);
case 3:
return G__40518__3.call(this,m,f,a);
case 4:
return G__40518__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40518.cljs$core$IFn$_invoke$arity$2 = G__40518__2;
G__40518.cljs$core$IFn$_invoke$arity$3 = G__40518__3;
G__40518.cljs$core$IFn$_invoke$arity$4 = G__40518__4;
return G__40518;
})()
);

(clojure.core.matrix.protocols.element_reduce["null"] = (function() {
var G__40519 = null;
var G__40519__2 = (function (m,f){
return null;
});
var G__40519__3 = (function (m,f,init){
return f.call(null,init,null);
});
G__40519 = function(m,f,init){
switch(arguments.length){
case 2:
return G__40519__2.call(this,m,f);
case 3:
return G__40519__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40519.cljs$core$IFn$_invoke$arity$2 = G__40519__2;
G__40519.cljs$core$IFn$_invoke$arity$3 = G__40519__3;
return G__40519;
})()
);

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = true;

cljs.core.List.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return null;
} else {
if((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) >= (1))){
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
} else {
return m__$1;

}
}
});
clojure.core.matrix.impl.defaults.cart = (function clojure$core$matrix$impl$defaults$cart(colls){
if(cljs.core.empty_QMARK_.call(null,colls)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null);
} else {
var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__40526(s__40527){
return (new cljs.core.LazySeq(null,(function (){
var s__40527__$1 = s__40527;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40527__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19494__auto__ = ((function (s__40527__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__40526_$_iter__40528(s__40529){
return (new cljs.core.LazySeq(null,((function (s__40527__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__40529__$1 = s__40529;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__40529__$1);
if(temp__4657__auto____$1){
var s__40529__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40529__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__40529__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__40531 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__40530 = (0);
while(true){
if((i__40530 < size__19497__auto__)){
var more = cljs.core._nth.call(null,c__19496__auto__,i__40530);
cljs.core.chunk_append.call(null,b__40531,cljs.core.cons.call(null,x,more));

var G__40539 = (i__40530 + (1));
i__40530 = G__40539;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40531),clojure$core$matrix$impl$defaults$cart_$_iter__40526_$_iter__40528.call(null,cljs.core.chunk_rest.call(null,s__40529__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40531),null);
}
} else {
var more = cljs.core.first.call(null,s__40529__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,x,more),clojure$core$matrix$impl$defaults$cart_$_iter__40526_$_iter__40528.call(null,cljs.core.rest.call(null,s__40529__$2)));
}
} else {
return null;
}
break;
}
});})(s__40527__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__40527__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__19495__auto__ = cljs.core.seq.call(null,iterys__19494__auto__.call(null,clojure$core$matrix$impl$defaults$cart.call(null,cljs.core.rest.call(null,colls))));
if(fs__19495__auto__){
return cljs.core.concat.call(null,fs__19495__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__40526.call(null,cljs.core.rest.call(null,s__40527__$1)));
} else {
var G__40545 = cljs.core.rest.call(null,s__40527__$1);
s__40527__$1 = G__40545;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19498__auto__.call(null,cljs.core.first.call(null,colls));
}
});
clojure.core.matrix.impl.defaults.indices_seq = (function clojure$core$matrix$impl$defaults$indices_seq(m){
return clojure.core.matrix.impl.defaults.cart.call(null,cljs.core.map.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,m)));
});
(clojure.core.matrix.protocols.PMapIndexed["number"] = true);

(clojure.core.matrix.protocols.element_map_indexed["number"] = (function() {
var G__40563 = null;
var G__40563__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,m);
});
var G__40563__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__40548_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__40548_SHARP_);
}));
});
var G__40563__4 = (function (m,f,a,more){
var temp__4655__auto__ = cljs.core.next.call(null,more);
if(temp__4655__auto__){
var moremore = temp__4655__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__4655__auto__){
return (function() { 
var G__40564__delegate = function (p1__40549_SHARP_,p2__40550_SHARP_,rest__40551_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,m,p1__40549_SHARP_,p2__40550_SHARP_,rest__40551_SHARP_);
};
var G__40564 = function (p1__40549_SHARP_,p2__40550_SHARP_,var_args){
var rest__40551_SHARP_ = null;
if (arguments.length > 2) {
var G__40566__i = 0, G__40566__a = new Array(arguments.length -  2);
while (G__40566__i < G__40566__a.length) {G__40566__a[G__40566__i] = arguments[G__40566__i + 2]; ++G__40566__i;}
  rest__40551_SHARP_ = new cljs.core.IndexedSeq(G__40566__a,0);
} 
return G__40564__delegate.call(this,p1__40549_SHARP_,p2__40550_SHARP_,rest__40551_SHARP_);};
G__40564.cljs$lang$maxFixedArity = 2;
G__40564.cljs$lang$applyTo = (function (arglist__40567){
var p1__40549_SHARP_ = cljs.core.first(arglist__40567);
arglist__40567 = cljs.core.next(arglist__40567);
var p2__40550_SHARP_ = cljs.core.first(arglist__40567);
var rest__40551_SHARP_ = cljs.core.rest(arglist__40567);
return G__40564__delegate(p1__40549_SHARP_,p2__40550_SHARP_,rest__40551_SHARP_);
});
G__40564.cljs$core$IFn$_invoke$arity$variadic = G__40564__delegate;
return G__40564;
})()
;})(moremore,temp__4655__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__4655__auto__){
return (function (p1__40552_SHARP_,p2__40553_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__40552_SHARP_,p2__40553_SHARP_);
});})(temp__4655__auto__))
,cljs.core.first.call(null,more));
}
});
G__40563 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40563__2.call(this,m,f);
case 3:
return G__40563__3.call(this,m,f,a);
case 4:
return G__40563__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40563.cljs$core$IFn$_invoke$arity$2 = G__40563__2;
G__40563.cljs$core$IFn$_invoke$arity$3 = G__40563__3;
G__40563.cljs$core$IFn$_invoke$arity$4 = G__40563__4;
return G__40563;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["number"] = (function() {
var G__40571 = null;
var G__40571__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40571__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40571__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__40571 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40571__2.call(this,m,f);
case 3:
return G__40571__3.call(this,m,f,a);
case 4:
return G__40571__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40571.cljs$core$IFn$_invoke$arity$2 = G__40571__2;
G__40571.cljs$core$IFn$_invoke$arity$3 = G__40571__3;
G__40571.cljs$core$IFn$_invoke$arity$4 = G__40571__4;
return G__40571;
})()
);

(clojure.core.matrix.protocols.PMapIndexed["object"] = true);

(clojure.core.matrix.protocols.element_map_indexed["object"] = (function() {
var G__40572 = null;
var G__40572__2 = (function (m,f){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return f.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s),clojure.core.matrix.protocols.get_shape.call(null,m));
}
});
var G__40572__3 = (function (m,f,a){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var v = clojure.core.matrix.protocols.get_0d.call(null,m);
return clojure.core.matrix.protocols.element_map_indexed.call(null,a,((function (v){
return (function (p1__40554_SHARP_,p2__40555_SHARP_){
return f.call(null,p1__40554_SHARP_,v,p2__40555_SHARP_);
});})(v))
);
} else {
var vec__40562 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__40562,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__40562,(1),null);
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,a__$1));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m__$1,s),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
}
});
var G__40572__4 = (function (m,f,a,more){
var s = cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a));
var s__$1 = cljs.core.apply.call(null,cljs.core.map,f,cljs.core.list_STAR_.call(null,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s__$1),clojure.core.matrix.protocols.get_shape.call(null,m));
});
G__40572 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40572__2.call(this,m,f);
case 3:
return G__40572__3.call(this,m,f,a);
case 4:
return G__40572__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40572.cljs$core$IFn$_invoke$arity$2 = G__40572__2;
G__40572.cljs$core$IFn$_invoke$arity$3 = G__40572__3;
G__40572.cljs$core$IFn$_invoke$arity$4 = G__40572__4;
return G__40572;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["object"] = (function() {
var G__40578 = null;
var G__40578__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f));
});
var G__40578__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a));
});
var G__40578__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more));
});
G__40578 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40578__2.call(this,m,f);
case 3:
return G__40578__3.call(this,m,f,a);
case 4:
return G__40578__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40578.cljs$core$IFn$_invoke$arity$2 = G__40578__2;
G__40578.cljs$core$IFn$_invoke$arity$3 = G__40578__3;
G__40578.cljs$core$IFn$_invoke$arity$4 = G__40578__4;
return G__40578;
})()
);

(clojure.core.matrix.protocols.PMapIndexed["null"] = true);

(clojure.core.matrix.protocols.element_map_indexed["null"] = (function() {
var G__40581 = null;
var G__40581__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,null);
});
var G__40581__3 = (function (m,f,a){
return f.call(null,cljs.core.PersistentVector.EMPTY,null,a);
});
var G__40581__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__40581 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40581__2.call(this,m,f);
case 3:
return G__40581__3.call(this,m,f,a);
case 4:
return G__40581__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40581.cljs$core$IFn$_invoke$arity$2 = G__40581__2;
G__40581.cljs$core$IFn$_invoke$arity$3 = G__40581__3;
G__40581.cljs$core$IFn$_invoke$arity$4 = G__40581__4;
return G__40581;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["null"] = (function() {
var G__40582 = null;
var G__40582__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map-indexed! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40582__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map-indexed! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__40582__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map-indexed! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__40582 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__40582__2.call(this,m,f);
case 3:
return G__40582__3.call(this,m,f,a);
case 4:
return G__40582__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40582.cljs$core$IFn$_invoke$arity$2 = G__40582__2;
G__40582.cljs$core$IFn$_invoke$arity$3 = G__40582__3;
G__40582.cljs$core$IFn$_invoke$arity$4 = G__40582__4;
return G__40582;
})()
);
(clojure.core.matrix.protocols.PElementCount["null"] = true);

(clojure.core.matrix.protocols.element_count["null"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.PElementCount["number"] = true);

(clojure.core.matrix.protocols.element_count["number"] = (function (m){
return (1);
}));

(clojure.core.matrix.protocols.PElementCount["object"] = true);

(clojure.core.matrix.protocols.element_count["object"] = (function (m){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return clojure.core.matrix.impl.defaults.calc_element_count.call(null,m);
} else {
return (1);
}
}));
(clojure.core.matrix.protocols.PValidateShape["null"] = true);

(clojure.core.matrix.protocols.validate_shape["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PValidateShape["object"] = true);

(clojure.core.matrix.protocols.validate_shape["object"] = (function (m){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return null;
} else {
return cljs.core.PersistentVector.EMPTY;
}
} else {
var ss = clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
var shapes = cljs.core.mapv.call(null,clojure.core.matrix.protocols.validate_shape,ss);
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,ss))){
return cljs.core.vec.call(null,cljs.core.cons.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)),cljs.core.first.call(null,shapes)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Inconsistent shapes for sub arrays in "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
}));
(clojure.core.matrix.protocols.PMatrixSlices["object"] = true);

(clojure.core.matrix.protocols.get_row["object"] = (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
}
}));

(clojure.core.matrix.protocols.get_column["object"] = (function (m,i){
return clojure.core.matrix.protocols.get_slice.call(null,m,(1),i);
}));

(clojure.core.matrix.protocols.get_major_slice["object"] = (function (m,i){
if((Array === m.constructor)){
return cljs.core.nth.call(null,m,i);
} else {
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return clojure.core.matrix.protocols.get_1d.call(null,m,i);
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}
}));

(clojure.core.matrix.protocols.get_slice["object"] = (function (m,dimension,i){
var ldimension = cljs.core.long$.call(null,dimension);
if(((0) === ldimension)){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dimension,i);

}
}));
(clojure.core.matrix.protocols.PBLASBase["object"] = true);

(clojure.core.matrix.protocols.gemm_BANG_["object"] = (function (c,trans_a_QMARK_,trans_b_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
var b__$1 = (cljs.core.truth_(trans_b_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,b):b);
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b__$1,alpha);
}));

(clojure.core.matrix.protocols.gemv_BANG_["object"] = (function (c,trans_a_QMARK_,alpha,a,b,beta){
var a__$1 = (cljs.core.truth_(trans_a_QMARK_)?clojure.core.matrix.protocols.transpose.call(null,a):a);
clojure.core.matrix.protocols.scale_BANG_.call(null,c,beta);

return clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,c,a__$1,b,alpha);
}));
(clojure.core.matrix.protocols.PMatrixColumns["object"] = true);

(clojure.core.matrix.protocols.get_columns["object"] = (function (m){
var G__40598 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__40598) {
case (0):
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get columns of a 0-dimensional object")].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get columns of a 1-dimensional object")].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return clojure.core.matrix.protocols.get_slice_seq.call(null,m,(1));

break;
default:
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_columns,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
}));
(clojure.core.matrix.protocols.PMatrixRows["object"] = true);

(clojure.core.matrix.protocols.get_rows["object"] = (function (m){
var G__40600 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__40600) {
case (0):
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get rows of a 0-dimensional object")].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get rows of a 1-dimensional object")].join(''),cljs.core.PersistentArrayMap.EMPTY);

break;
case (2):
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);

break;
default:
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.get_rows,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));

}
}));
(clojure.core.matrix.protocols.PSliceView["object"] = true);

(clojure.core.matrix.protocols.get_major_slice_view["object"] = (function (m,i){
if((Array === m.constructor)){
var ss = cljs.core.nth.call(null,m,i);
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,ss))){
return ss;
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);
}
} else {
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,m,i);

}
}));
(clojure.core.matrix.protocols.PSliceView2["object"] = true);

(clojure.core.matrix.protocols.get_slice_view["object"] = (function (m,dim,i){
if((dim === (0))){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),dim,i);
}
}));
(clojure.core.matrix.protocols.PSliceSeq["object"] = true);

(clojure.core.matrix.protocols.get_major_slice_seq["object"] = (function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims <= (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get slices on ["),cljs.core.str(dims),cljs.core.str("]-dimensional object")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(cljs.core._EQ_.call(null,Array,cljs.core.type.call(null,m))){
return cljs.core.seq.call(null,m);
} else {
if((dims === (1))){
var iter__19498__auto__ = ((function (dims){
return (function clojure$core$matrix$impl$defaults$iter__40605(s__40606){
return (new cljs.core.LazySeq(null,((function (dims){
return (function (){
var s__40606__$1 = s__40606;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40606__$1);
if(temp__4657__auto__){
var s__40606__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40606__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__40606__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__40608 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__40607 = (0);
while(true){
if((i__40607 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__40607);
cljs.core.chunk_append.call(null,b__40608,clojure.core.matrix.protocols.get_1d.call(null,m,i));

var G__40609 = (i__40607 + (1));
i__40607 = G__40609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40608),clojure$core$matrix$impl$defaults$iter__40605.call(null,cljs.core.chunk_rest.call(null,s__40606__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40608),null);
}
} else {
var i = cljs.core.first.call(null,s__40606__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_1d.call(null,m,i),clojure$core$matrix$impl$defaults$iter__40605.call(null,cljs.core.rest.call(null,s__40606__$2)));
}
} else {
return null;
}
break;
}
});})(dims))
,null,null));
});})(dims))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
} else {
return cljs.core.map.call(null,((function (dims){
return (function (p1__40604_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__40604_SHARP_);
});})(dims))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));

}
}
}
}));
(clojure.core.matrix.protocols.PSliceSeq2["object"] = true);

(clojure.core.matrix.protocols.get_slice_seq["object"] = (function (m,dimension){
var ldimension = cljs.core.long$.call(null,dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get slices of a negative dimension: "),cljs.core.str(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.map.call(null,((function (ldimension){
return (function (p1__40614_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,p1__40614_SHARP_);
});})(ldimension))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));

}
}
}));
(clojure.core.matrix.protocols.PSliceViewSeq["object"] = true);

(clojure.core.matrix.protocols.get_major_slice_view_seq["object"] = (function (m){
var n = clojure.core.matrix.protocols.dimension_count.call(null,m,(0));
var iter__19498__auto__ = ((function (n){
return (function clojure$core$matrix$impl$defaults$iter__40666(s__40667){
return (new cljs.core.LazySeq(null,((function (n){
return (function (){
var s__40667__$1 = s__40667;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40667__$1);
if(temp__4657__auto__){
var s__40667__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40667__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__40667__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__40670 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__40669 = (0);
while(true){
if((i__40669 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__40669);
cljs.core.chunk_append.call(null,b__40670,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i));

var G__40694 = (i__40669 + (1));
i__40669 = G__40694;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40670),clojure$core$matrix$impl$defaults$iter__40666.call(null,cljs.core.chunk_rest.call(null,s__40667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40670),null);
}
} else {
var i = cljs.core.first.call(null,s__40667__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i),clojure$core$matrix$impl$defaults$iter__40666.call(null,cljs.core.rest.call(null,s__40667__$2)));
}
} else {
return null;
}
break;
}
});})(n))
,null,null));
});})(n))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,n));
}));
(clojure.core.matrix.protocols.PSliceJoin["null"] = true);

(clojure.core.matrix.protocols.join["null"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't join an array to a nil value!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoin["number"] = true);

(clojure.core.matrix.protocols.join["number"] = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't join an array to a scalar number!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoin["object"] = true);

(clojure.core.matrix.protocols.join["object"] = (function (m,a){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't join to a 0-dimensional array!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((dims === adims)){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Joining with array of incompatible size")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));
(clojure.core.matrix.protocols.PSliceJoinAlong["null"] = true);

(clojure.core.matrix.protocols.join_along["null"] = (function (m,a,dim){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't join an array to a nil value!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoinAlong["number"] = true);

(clojure.core.matrix.protocols.join_along["number"] = (function (m,a,dim){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't join an array to a scalar number!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSliceJoinAlong["object"] = true);

(clojure.core.matrix.protocols.join_along["object"] = (function (m,a,dim){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var dim__$1 = cljs.core.long$.call(null,dim);
if((dim__$1 === (0))){
return clojure.core.matrix.protocols.join.call(null,m,a);
} else {
var ddim = (dim__$1 - (1));
return cljs.core.mapv.call(null,((function (ddim,dim__$1){
return (function (p1__40755_SHARP_,p2__40756_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__40755_SHARP_,p2__40756_SHARP_,ddim);
});})(ddim,dim__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a));

}
})());
}));
(clojure.core.matrix.protocols.PSubVector["null"] = true);

(clojure.core.matrix.protocols.subvector["null"] = (function (m,start,length){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't take subvector of nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSubVector["number"] = true);

(clojure.core.matrix.protocols.subvector["number"] = (function (m,start,length){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't take subvector of a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PSubVector["object"] = true);

(clojure.core.matrix.protocols.subvector["object"] = (function (m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),start,length);
}));
(clojure.core.matrix.protocols.PSubMatrix["null"] = true);

(clojure.core.matrix.protocols.submatrix["null"] = (function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't take partial submatrix of nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PSubMatrix["number"] = true);

(clojure.core.matrix.protocols.submatrix["number"] = (function (m,index_ranges){
if(cljs.core.seq.call(null,index_ranges)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't take partial submatrix of a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return m;
}
}));

(clojure.core.matrix.protocols.PSubMatrix["object"] = true);

(clojure.core.matrix.protocols.submatrix["object"] = (function (m,index_ranges){
return clojure.core.matrix.impl.wrappers.wrap_submatrix.call(null,m,index_ranges);
}));
(clojure.core.matrix.protocols.PBroadcast["null"] = true);

(clojure.core.matrix.protocols.broadcast["null"] = (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

(clojure.core.matrix.protocols.PBroadcast["number"] = true);

(clojure.core.matrix.protocols.broadcast["number"] = (function (m,new_shape){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);
}));

(clojure.core.matrix.protocols.PBroadcast["object"] = true);

(clojure.core.matrix.protocols.broadcast["object"] = (function (m,new_shape){
var nshape = new_shape;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m);
var mdims = cljs.core.count.call(null,mshape);
var ndims = cljs.core.count.call(null,nshape);
if(cljs.core.truth_((function (){var and__18714__auto__ = (mdims === ndims);
if(and__18714__auto__){
return clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,nshape,mshape);
} else {
return and__18714__auto__;
}
})())){
return m;
} else {
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,m,new_shape);

}
}));
(clojure.core.matrix.protocols.PBroadcastLike["null"] = true);

(clojure.core.matrix.protocols.broadcast_like["null"] = (function (m,a){
return clojure.core.matrix.impl.wrappers.wrap_broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m));
}));

(clojure.core.matrix.protocols.PBroadcastLike["object"] = true);

(clojure.core.matrix.protocols.broadcast_like["object"] = (function (m,a){
var sm = clojure.core.matrix.protocols.get_shape.call(null,m);
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
if(cljs.core.truth_(clojure.core.matrix.utils.same_shape_object_QMARK_.call(null,sm,sa))){
return a;
} else {
return clojure.core.matrix.protocols.broadcast.call(null,a,sm);
}
}));
(clojure.core.matrix.protocols.PBroadcastCoerce["null"] = true);

(clojure.core.matrix.protocols.broadcast_coerce["null"] = (function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));

(clojure.core.matrix.protocols.PBroadcastCoerce["object"] = true);

(clojure.core.matrix.protocols.broadcast_coerce["object"] = (function (m,a){
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.broadcast_like.call(null,m,a));
}));
(clojure.core.matrix.protocols.PPack["null"] = true);

(clojure.core.matrix.protocols.pack["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PPack["object"] = true);

(clojure.core.matrix.protocols.pack["object"] = (function (m){
return m;
}));
(clojure.core.matrix.protocols.PConversion["null"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["null"] = (function (m){
return null;
}));

(clojure.core.matrix.protocols.PConversion["number"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["number"] = (function (m){
return m;
}));

(clojure.core.matrix.protocols.PConversion["object"] = true);

(clojure.core.matrix.protocols.convert_to_nested_vectors["object"] = (function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.get_0d.call(null,m);
} else {
if(((1) === dims)){
if((cljs.core.seq_QMARK_.call(null,m)) || (cljs.core.sequential_QMARK_.call(null,m))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_0d,m);
} else {
var n = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
var i = (0);
var res = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < n)){
var G__40799 = (i + (1));
var G__40800 = cljs.core.conj.call(null,res,clojure.core.matrix.protocols.get_1d.call(null,m,i));
i = G__40799;
res = G__40800;
continue;
} else {
return res;
}
break;
}
}
} else {
if(cljs.core.sequential_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
} else {
if(cljs.core.seq_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't work out how to convert to nested vectors: "),cljs.core.str(cljs.core.type.call(null,m)),cljs.core.str(" = "),cljs.core.str(m)].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
}
}));
(clojure.core.matrix.protocols.PRowColMatrix["null"] = true);

(clojure.core.matrix.protocols.column_matrix["null"] = (function (m,data){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't create a column matrix from nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.row_matrix["null"] = (function (m,data){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't create a column matrix from nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PRowColMatrix["object"] = true);

(clojure.core.matrix.protocols.column_matrix["object"] = (function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,cljs.core.mapv.call(null,cljs.core.vector,clojure.core.matrix.protocols.element_seq.call(null,data)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't create a column matrix: input must be 1D vector")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.protocols.row_matrix["object"] = (function (m,data){
if(((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
return clojure.core.matrix.protocols.coerce_param.call(null,m,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[data],null)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't create a row matrix: input must be 1D vector")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PVectorView["null"] = true);

(clojure.core.matrix.protocols.as_vector["null"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

(clojure.core.matrix.protocols.PVectorView["number"] = true);

(clojure.core.matrix.protocols.as_vector["number"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

(clojure.core.matrix.protocols.PVectorView["object"] = true);

(clojure.core.matrix.protocols.as_vector["object"] = (function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if((dims === (0))){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.wrappers.wrap_nd.call(null,m),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));
} else {
if((dims === (1))){
return m;
} else {
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.to_vector.call(null,m);
} else {
return null;

}
}
}
}));
(clojure.core.matrix.protocols.PVectorisable["null"] = true);

(clojure.core.matrix.protocols.to_vector["null"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}));

(clojure.core.matrix.protocols.PVectorisable["number"] = true);

(clojure.core.matrix.protocols.to_vector["number"] = (function (m){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null);
}));

(clojure.core.matrix.protocols.PVectorisable["object"] = true);

(clojure.core.matrix.protocols.to_vector["object"] = (function (m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.protocols.get_0d.call(null,m)], null);
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return clojure.core.matrix.protocols.clone.call(null,m);
} else {
return cljs.core.vec.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));

}
}
}));
(clojure.core.matrix.protocols.PReshaping["null"] = true);

(clojure.core.matrix.protocols.reshape["null"] = (function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),shape);
}));

(clojure.core.matrix.protocols.PReshaping["number"] = true);

(clojure.core.matrix.protocols.reshape["number"] = (function (m,shape){
return clojure.core.matrix.protocols.reshape.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [m], null),shape);
}));

(clojure.core.matrix.protocols.PReshaping["object"] = true);

(clojure.core.matrix.protocols.reshape["object"] = (function (m,shape){
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_shape.call(null,m),shape)){
return m;
} else {
var gv = clojure.core.matrix.protocols.generic_value.call(null,m);
var es = cljs.core.concat.call(null,clojure.core.matrix.protocols.element_seq.call(null,m),cljs.core.repeat.call(null,gv));
var partition_shape = ((function (gv,es){
return (function clojure$core$matrix$impl$defaults$partition_shape(es__$1,shape__$1){
var temp__4655__auto__ = cljs.core.seq.call(null,shape__$1);
if(temp__4655__auto__){
var s = temp__4655__auto__;
var ns = cljs.core.next.call(null,s);
var plen = cljs.core.reduce.call(null,cljs.core._STAR_,(1),ns);
return cljs.core.map.call(null,((function (ns,plen,s,temp__4655__auto__,gv,es){
return (function (p1__40809_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape.call(null,p1__40809_SHARP_,ns);
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
var or__18726__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.take.call(null,fs,parts));
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.take.call(null,fs,parts));
}
} else {
return cljs.core.first.call(null,es);
}
}
}));
(clojure.core.matrix.protocols.PCoercion["null"] = true);

(clojure.core.matrix.protocols.coerce_param["null"] = (function (m,param){
return param;
}));

(clojure.core.matrix.protocols.PCoercion["number"] = true);

(clojure.core.matrix.protocols.coerce_param["number"] = (function (m,param){
return param;
}));

(clojure.core.matrix.protocols.PCoercion["object"] = true);

(clojure.core.matrix.protocols.coerce_param["object"] = (function (m,param){
var param__$1 = (((param instanceof cljs.core.ISeq))?clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param):param);
var or__18726__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,m,param__$1);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return param__$1;
}
}));
(clojure.core.matrix.protocols.PExponent["number"] = true);

(clojure.core.matrix.protocols.element_pow["number"] = (function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,exponent,(function (p1__40824_SHARP_){
return Math.pow(m,p1__40824_SHARP_);
}));
} else {
return Math.pow(m,exponent);
}
}));

(clojure.core.matrix.protocols.PExponent["object"] = true);

(clojure.core.matrix.protocols.element_pow["object"] = (function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40828_SHARP_,p2__40829_SHARP_){
return Math.pow(p1__40828_SHARP_,p2__40829_SHARP_);
}),exponent);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__40830_SHARP_){
return Math.pow(p1__40830_SHARP_,exponent);
}));
}
}));
(clojure.core.matrix.protocols.PSquare["number"] = true);

(clojure.core.matrix.protocols.square["number"] = (function (m){
return (m * m);
}));

(clojure.core.matrix.protocols.PSquare["object"] = true);

(clojure.core.matrix.protocols.square["object"] = (function (m){
return clojure.core.matrix.protocols.element_multiply.call(null,m,m);
}));
(clojure.core.matrix.protocols.PLogistic["number"] = true);

(clojure.core.matrix.protocols.logistic["number"] = (function (m){
var e_t = Math.exp((- m));
return (1.0 / (1.0 + e_t));
}));

(clojure.core.matrix.protocols.PLogistic["object"] = true);

(clojure.core.matrix.protocols.logistic["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PLogisticMutable["object"] = true);

(clojure.core.matrix.protocols.logistic_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.logistic_fn);
}));
(clojure.core.matrix.protocols.PSoftplus["number"] = true);

(clojure.core.matrix.protocols.softplus["number"] = (function (m){
var et = Math.exp(m);
return Math.log((1.0 + et));
}));

(clojure.core.matrix.protocols.PSoftplus["object"] = true);

(clojure.core.matrix.protocols.softplus["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PSoftmax["object"] = true);

(clojure.core.matrix.protocols.softmax["object"] = (function (m){
var em = clojure.core.matrix.protocols.exp.call(null,m);
return clojure.core.matrix.protocols.element_divide.call(null,em,clojure.core.matrix.protocols.element_sum.call(null,em));
}));
(clojure.core.matrix.protocols.PSoftmaxMutable["object"] = true);

(clojure.core.matrix.protocols.softmax_BANG_["object"] = (function (m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

clojure.core.matrix.protocols.element_divide_BANG_.call(null,m,clojure.core.matrix.protocols.element_sum.call(null,m));

return m;
}));
(clojure.core.matrix.protocols.PSoftplusMutable["object"] = true);

(clojure.core.matrix.protocols.softplus_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.softplus_fn);
}));
(clojure.core.matrix.protocols.PReLU["number"] = true);

(clojure.core.matrix.protocols.relu["number"] = (function (m){
return Math.max(0.0,m);
}));

(clojure.core.matrix.protocols.PReLU["object"] = true);

(clojure.core.matrix.protocols.relu["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PReLUMutable["object"] = true);

(clojure.core.matrix.protocols.relu_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,clojure.core.matrix.impl.common.relu_fn);
}));
(clojure.core.matrix.protocols.PMathsFunctions["number"] = true);

(clojure.core.matrix.protocols.abs["number"] = (function (m){
return Math.abs(m);
}));

(clojure.core.matrix.protocols.acos["number"] = (function (m){
return Math.acos(m);
}));

(clojure.core.matrix.protocols.asin["number"] = (function (m){
return Math.asin(m);
}));

(clojure.core.matrix.protocols.atan["number"] = (function (m){
return Math.atan(m);
}));

(clojure.core.matrix.protocols.cbrt["number"] = (function (m){
return Math.cbrt(m);
}));

(clojure.core.matrix.protocols.ceil["number"] = (function (m){
return Math.ceil(m);
}));

(clojure.core.matrix.protocols.cos["number"] = (function (m){
return Math.cos(m);
}));

(clojure.core.matrix.protocols.cosh["number"] = (function (m){
return Math.cosh(m);
}));

(clojure.core.matrix.protocols.exp["number"] = (function (m){
return Math.exp(m);
}));

(clojure.core.matrix.protocols.floor["number"] = (function (m){
return Math.floor(m);
}));

(clojure.core.matrix.protocols.log["number"] = (function (m){
return Math.log(m);
}));

(clojure.core.matrix.protocols.log10["number"] = (function (m){
return Math.log10(m);
}));

(clojure.core.matrix.protocols.round["number"] = (function (m){
return Math.rint(m);
}));

(clojure.core.matrix.protocols.signum["number"] = (function (m){
return Math.sign(m);
}));

(clojure.core.matrix.protocols.sin["number"] = (function (m){
return Math.sin(m);
}));

(clojure.core.matrix.protocols.sinh["number"] = (function (m){
return Math.sinh(m);
}));

(clojure.core.matrix.protocols.sqrt["number"] = (function (m){
return Math.sqrt(m);
}));

(clojure.core.matrix.protocols.tan["number"] = (function (m){
return Math.tan(m);
}));

(clojure.core.matrix.protocols.tanh["number"] = (function (m){
return Math.tanh(m);
}));

(clojure.core.matrix.protocols.to_degrees["number"] = (function (m){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,m);
}));

(clojure.core.matrix.protocols.to_radians["number"] = (function (m){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,m);
}));

(clojure.core.matrix.protocols.PMathsFunctions["object"] = true);

(clojure.core.matrix.protocols.abs["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.abs(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.acos["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.acos(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.asin["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.asin(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.atan["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.atan(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.cbrt(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.ceil(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.cos["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.cos(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.cosh(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.exp["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.exp(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.floor["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.floor(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.log["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.log(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.log10["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.log10(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.round["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.rint(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.signum["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.sign(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.sin["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.sin(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.sinh(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.sqrt(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.tan["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.tan(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return Math.tanh(p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38436__38437__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__38436__38437__auto__);
}));
}));

(clojure.core.matrix.protocols.PMathsFunctions["array"] = true);

(clojure.core.matrix.protocols.abs["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.abs(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.acos["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.acos(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.asin["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.asin(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.atan["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.atan(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.cbrt(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.ceil(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.cos["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.cos(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.cosh(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.exp["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.exp(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.floor["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.floor(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.log["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.log(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.log10["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.log10(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.round["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.rint(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.signum["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.sign(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.sin["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.sin(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.sinh(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.sqrt(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.tan["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.tan(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return Math.tanh(p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__38438__38439__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__38438__38439__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__38438__38439__auto__);
}));
}));
(clojure.core.matrix.protocols.PMathsFunctionsMutable["number"] = true);

(clojure.core.matrix.protocols.abs_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.acos_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.asin_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.atan_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.cbrt_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.ceil_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.cos_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.cosh_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.exp_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.floor_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.log_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.log10_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.round_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.signum_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.sin_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.sinh_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.sqrt_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.tan_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.tanh_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.to_radians_BANG_["number"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Number is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.PMathsFunctionsMutable["object"] = true);

(clojure.core.matrix.protocols.abs_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.abs(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.acos_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.acos(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.asin_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.asin(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.atan_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.atan(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.cbrt(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.ceil(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.cos_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.cos(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.cosh(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.exp_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.exp(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.floor_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.floor(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.log_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.log(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.log10_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.log10(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.round_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.rint(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.signum_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.sign(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.sin_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.sin(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.sinh(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.sqrt(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.tan_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.tan(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return Math.tanh(p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38440__38441__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__38440__38441__auto__);
}));
}));

(clojure.core.matrix.protocols.PMathsFunctionsMutable["array"] = true);

(clojure.core.matrix.protocols.abs_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.abs(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.acos_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.acos(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.asin_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.asin(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.atan_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.atan(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.cbrt(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.ceil(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.cos_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.cos(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.cosh(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.exp_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.exp(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.floor_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.floor(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.log_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.log(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.log10_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.log10(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.round_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.rint(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.signum_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.sign(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.sin_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.sin(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.sinh(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.sqrt(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.tan_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.tan(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return Math.tanh(p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__38442__38443__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__38442__38443__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__38442__38443__auto__);
}));
}));
(clojure.core.matrix.protocols.PMatrixSubComponents["object"] = true);

(clojure.core.matrix.protocols.main_diagonal["object"] = (function (m){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var rank = cljs.core.count.call(null,sh);
var dims = cljs.core.apply.call(null,cljs.core.min,sh);
var diag_vals = (function (){var iter__19498__auto__ = ((function (sh,rank,dims){
return (function clojure$core$matrix$impl$defaults$iter__41190(s__41191){
return (new cljs.core.LazySeq(null,((function (sh,rank,dims){
return (function (){
var s__41191__$1 = s__41191;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41191__$1);
if(temp__4657__auto__){
var s__41191__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41191__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__41191__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__41193 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__41192 = (0);
while(true){
if((i__41192 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__41192);
cljs.core.chunk_append.call(null,b__41193,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)));

var G__41201 = (i__41192 + (1));
i__41192 = G__41201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41193),clojure$core$matrix$impl$defaults$iter__41190.call(null,cljs.core.chunk_rest.call(null,s__41191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41193),null);
}
} else {
var i = cljs.core.first.call(null,s__41191__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)),clojure$core$matrix$impl$defaults$iter__41190.call(null,cljs.core.rest.call(null,s__41191__$2)));
}
} else {
return null;
}
break;
}
});})(sh,rank,dims))
,null,null));
});})(sh,rank,dims))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,dims));
})();
return clojure.core.matrix.implementations.construct.call(null,m,diag_vals);
}));
(clojure.core.matrix.protocols.PSpecialisedConstructors["object"] = true);

(clojure.core.matrix.protocols.identity_matrix["object"] = (function (m,dims){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,m,cljs.core.repeat.call(null,dims,1.0));
}));

(clojure.core.matrix.protocols.diagonal_matrix["object"] = (function (m,diagonal_values){
var dims = cljs.core.count.call(null,diagonal_values);
var diagonal_values__$1 = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,diagonal_values);
var zs = cljs.core.vec.call(null,cljs.core.repeat.call(null,dims,0.0));
var dm = cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (dims,diagonal_values__$1,zs){
return (function clojure$core$matrix$impl$defaults$iter__41224(s__41225){
return (new cljs.core.LazySeq(null,((function (dims,diagonal_values__$1,zs){
return (function (){
var s__41225__$1 = s__41225;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41225__$1);
if(temp__4657__auto__){
var s__41225__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41225__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__41225__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__41227 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__41226 = (0);
while(true){
if((i__41226 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__41226);
cljs.core.chunk_append.call(null,b__41227,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)));

var G__41239 = (i__41226 + (1));
i__41226 = G__41239;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41227),clojure$core$matrix$impl$defaults$iter__41224.call(null,cljs.core.chunk_rest.call(null,s__41225__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41227),null);
}
} else {
var i = cljs.core.first.call(null,s__41225__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__41224.call(null,cljs.core.rest.call(null,s__41225__$2)));
}
} else {
return null;
}
break;
}
});})(dims,diagonal_values__$1,zs))
,null,null));
});})(dims,diagonal_values__$1,zs))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,dims));
})());
return clojure.core.matrix.protocols.coerce_param.call(null,m,dm);
}));
(clojure.core.matrix.protocols.PPermutationMatrix["object"] = true);

(clojure.core.matrix.protocols.permutation_matrix["object"] = (function (m,permutation){
var v = clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,permutation);
var n = cljs.core.count.call(null,v);
var r = clojure.core.matrix.protocols.new_matrix.call(null,m,n,n);
var r__$1 = (cljs.core.truth_(clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,r))?r:clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,r));
var n__19629__auto___41244 = n;
var i_41245 = (0);
while(true){
if((i_41245 < n__19629__auto___41244)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,r__$1,i_41245,v.call(null,i_41245),1.0);

var G__41247 = (i_41245 + (1));
i_41245 = G__41247;
continue;
} else {
}
break;
}

return r__$1;
}));
(clojure.core.matrix.protocols.PBlockDiagonalMatrix["object"] = true);

(clojure.core.matrix.protocols.block_diagonal_matrix["object"] = (function (m,blocks){
var aux = (function clojure$core$matrix$impl$defaults$aux(acc,blocks__$1){
if(cljs.core.empty_QMARK_.call(null,blocks__$1)){
return acc;
} else {
var acc_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,acc,(0)));
var new_block = blocks__$1.call(null,(0));
var new_block_dim = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,new_block,(0)));
var new_dim = (acc_dim + new_block_dim);
var dm = cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (acc_dim,new_block,new_block_dim,new_dim){
return (function clojure$core$matrix$impl$defaults$aux_$_iter__41253(s__41254){
return (new cljs.core.LazySeq(null,((function (acc_dim,new_block,new_block_dim,new_dim){
return (function (){
var s__41254__$1 = s__41254;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41254__$1);
if(temp__4657__auto__){
var s__41254__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41254__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__41254__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__41256 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__41255 = (0);
while(true){
if((i__41255 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__41255);
cljs.core.chunk_append.call(null,b__41256,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))));

var G__41283 = (i__41255 + (1));
i__41255 = G__41283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41256),clojure$core$matrix$impl$defaults$aux_$_iter__41253.call(null,cljs.core.chunk_rest.call(null,s__41254__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41256),null);
}
} else {
var i = cljs.core.first.call(null,s__41254__$2);
return cljs.core.cons.call(null,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))),clojure$core$matrix$impl$defaults$aux_$_iter__41253.call(null,cljs.core.rest.call(null,s__41254__$2)));
}
} else {
return null;
}
break;
}
});})(acc_dim,new_block,new_block_dim,new_dim))
,null,null));
});})(acc_dim,new_block,new_block_dim,new_dim))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,new_dim));
})());
return clojure$core$matrix$impl$defaults$aux.call(null,dm,cljs.core.subvec.call(null,blocks__$1,(1)));
}
});
return aux.call(null,cljs.core.PersistentVector.EMPTY,blocks);
}));
(clojure.core.matrix.protocols.PMatrixPredicates["object"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["object"] = (function (m){
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
var G__41291 = (j + (1));
j = G__41291;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__41292 = (j + (1));
j = G__41292;
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
var G__41293 = (i + (1));
i = G__41293;
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

(clojure.core.matrix.protocols.zero_matrix_QMARK_["object"] = (function (m){
return cljs.core.every_QMARK_.call(null,(function (p1__41289_SHARP_){
return (typeof p1__41289_SHARP_ === 'number') && ((p1__41289_SHARP_ === (0)));
}),clojure.core.matrix.protocols.element_seq.call(null,m));
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["object"] = (function (m){
var G__41290 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__41290) {
case (0):
return true;

break;
case (1):
return true;

break;
case (2):
var and__18714__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(cljs.core.truth_(and__18714__auto__)){
return clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_.call(null,m);
} else {
return and__18714__auto__;
}

break;
default:
return cljs.core._EQ_.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m));

}
}));

(clojure.core.matrix.protocols.PMatrixPredicates["null"] = true);

(clojure.core.matrix.protocols.identity_matrix_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.zero_matrix_QMARK_["null"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["null"] = (function (m){
return true;
}));
(clojure.core.matrix.protocols.PIndicesAccess["object"] = true);

(clojure.core.matrix.protocols.get_indices["object"] = (function (a,indices){
var vals = cljs.core.map.call(null,(function (p1__41297_SHARP_){
return clojure.core.matrix.protocols.get_nd.call(null,a,p1__41297_SHARP_);
}),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices));
var or__18726__auto__ = ((cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,a)))?clojure.core.matrix.protocols.construct_matrix.call(null,a,vals):null);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,vals);
}
}));
(clojure.core.matrix.protocols.PIndicesSetting["object"] = true);

(clojure.core.matrix.protocols.set_indices["object"] = (function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var a__$1 = a;
var G__41309 = indices__$1;
var vec__41311 = G__41309;
var id = cljs.core.nth.call(null,vec__41311,(0),null);
var idx = cljs.core.nthnext.call(null,vec__41311,(1));
var G__41310 = values__$1;
var vec__41312 = G__41310;
var v = cljs.core.nth.call(null,vec__41312,(0),null);
var vs = cljs.core.nthnext.call(null,vec__41312,(1));
var a__$2 = a__$1;
var G__41309__$1 = G__41309;
var G__41310__$1 = G__41310;
while(true){
var a__$3 = a__$2;
var vec__41317 = G__41309__$1;
var id__$1 = cljs.core.nth.call(null,vec__41317,(0),null);
var idx__$1 = cljs.core.nthnext.call(null,vec__41317,(1));
var vec__41318 = G__41310__$1;
var v__$1 = cljs.core.nth.call(null,vec__41318,(0),null);
var vs__$1 = cljs.core.nthnext.call(null,vec__41318,(1));
if(cljs.core.truth_(id__$1)){
var G__41331 = clojure.core.matrix.protocols.set_nd.call(null,a__$3,id__$1,v__$1);
var G__41332 = idx__$1;
var G__41333 = vs__$1;
a__$2 = G__41331;
G__41309__$1 = G__41332;
G__41310__$1 = G__41333;
continue;
} else {
return a__$3;
}
break;
}
}));

(clojure.core.matrix.protocols.set_indices_BANG_["object"] = (function (a,indices,values){
var indices__$1 = cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,indices);
var values__$1 = clojure.core.matrix.protocols.element_seq.call(null,clojure.core.matrix.protocols.broadcast.call(null,values,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,indices__$1)], null)));
var G__41321 = indices__$1;
var vec__41323 = G__41321;
var id = cljs.core.nth.call(null,vec__41323,(0),null);
var idx = cljs.core.nthnext.call(null,vec__41323,(1));
var G__41322 = values__$1;
var vec__41324 = G__41322;
var v = cljs.core.nth.call(null,vec__41324,(0),null);
var vs = cljs.core.nthnext.call(null,vec__41324,(1));
var G__41321__$1 = G__41321;
var G__41322__$1 = G__41322;
while(true){
var vec__41325 = G__41321__$1;
var id__$1 = cljs.core.nth.call(null,vec__41325,(0),null);
var idx__$1 = cljs.core.nthnext.call(null,vec__41325,(1));
var vec__41326 = G__41322__$1;
var v__$1 = cljs.core.nth.call(null,vec__41326,(0),null);
var vs__$1 = cljs.core.nthnext.call(null,vec__41326,(1));
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,a,id__$1,v__$1);

var G__41351 = idx__$1;
var G__41352 = vs__$1;
G__41321__$1 = G__41351;
G__41322__$1 = G__41352;
continue;
} else {
return null;
}
break;
}
}));
(clojure.core.matrix.protocols.PNonZeroIndices["object"] = true);

(clojure.core.matrix.protocols.non_zero_indices["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$iter__41353(s__41354){
return (new cljs.core.LazySeq(null,(function (){
var s__41354__$1 = s__41354;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41354__$1);
if(temp__4657__auto__){
var s__41354__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41354__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__41354__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__41356 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__41355 = (0);
while(true){
if((i__41355 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__41355);
if(!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0)))){
cljs.core.chunk_append.call(null,b__41356,i);

var G__41366 = (i__41355 + (1));
i__41355 = G__41366;
continue;
} else {
var G__41367 = (i__41355 + (1));
i__41355 = G__41367;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41356),clojure$core$matrix$impl$defaults$iter__41353.call(null,cljs.core.chunk_rest.call(null,s__41354__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41356),null);
}
} else {
var i = cljs.core.first.call(null,s__41354__$2);
if(!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0)))){
return cljs.core.cons.call(null,i,clojure$core$matrix$impl$defaults$iter__41353.call(null,cljs.core.rest.call(null,s__41354__$2)));
} else {
var G__41368 = cljs.core.rest.call(null,s__41354__$2);
s__41354__$1 = G__41368;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19498__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$iter__41362(s__41363){
return (new cljs.core.LazySeq(null,(function (){
var s__41363__$1 = s__41363;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41363__$1);
if(temp__4657__auto__){
var s__41363__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41363__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__41363__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__41365 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__41364 = (0);
while(true){
if((i__41364 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__41364);
cljs.core.chunk_append.call(null,b__41365,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)));

var G__41369 = (i__41364 + (1));
i__41364 = G__41369;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41365),clojure$core$matrix$impl$defaults$iter__41362.call(null,cljs.core.chunk_rest.call(null,s__41363__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41365),null);
}
} else {
var i = cljs.core.first.call(null,s__41363__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)),clojure$core$matrix$impl$defaults$iter__41362.call(null,cljs.core.rest.call(null,s__41363__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19498__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))));
})());
}
}));
(clojure.core.matrix.protocols.PMatrixTypes["object"] = true);

(clojure.core.matrix.protocols.diagonal_QMARK_["object"] = (function (m){
if(cljs.core._EQ_.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)),(2))){
var vec__41370 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__41370,(0),null);
var mcols = cljs.core.nth.call(null,vec__41370,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__41370,mrows,mcols){
return (function (p__41371){
var vec__41372 = p__41371;
var i = cljs.core.nth.call(null,vec__41372,(0),null);
var j = cljs.core.nth.call(null,vec__41372,(1),null);
var v = cljs.core.nth.call(null,vec__41372,(2),null);
if(cljs.core._EQ_.call(null,i,j)){
return true;
} else {
if((cljs.core.not_EQ_.call(null,i,j)) && ((v === (0)))){
return true;
} else {
return false;

}
}
});})(vec__41370,mrows,mcols))
,cljs.core.map.call(null,((function (vec__41370,mrows,mcols){
return (function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot.call(null,i,mcols),cljs.core.rem.call(null,i,mcols),elem],null));
});})(vec__41370,mrows,mcols))
,cljs.core.range.call(null,(mrows * mcols)),clojure.core.matrix.protocols.element_seq.call(null,m)));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.upper_triangular_QMARK_["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.impl.common.square_QMARK_.call(null,m))){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__41373){
var vec__41374 = p__41373;
var idx = cljs.core.nth.call(null,vec__41374,(0),null);
var xs = cljs.core.nth.call(null,vec__41374,(1),null);
return cljs.core.take.call(null,idx,xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.lower_triangular_QMARK_["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.impl.common.square_QMARK_.call(null,m))){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__41375){
var vec__41376 = p__41375;
var idx = cljs.core.nth.call(null,vec__41376,(0),null);
var xs = cljs.core.nth.call(null,vec__41376,(1),null);
return cljs.core.drop.call(null,(idx + (1)),xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.positive_definite_QMARK_["object"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("TODO: Not yet implemented")].join(''),cljs.core.PersistentArrayMap.EMPTY);

return clojure.core.matrix.protocols.positive_definite_QMARK_.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m));
}));

(clojure.core.matrix.protocols.positive_semidefinite_QMARK_["object"] = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("TODO: Not yet implemented")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.core.matrix.protocols.orthogonal_QMARK_["object"] = (function (m,eps){
var and__18714__auto__ = clojure.core.matrix.impl.common.square_QMARK_.call(null,m);
if(cljs.core.truth_(and__18714__auto__)){
return clojure.core.matrix.protocols.matrix_equals_epsilon.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.transpose.call(null,m)),clojure.core.matrix.protocols.identity_matrix.call(null,m,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))),eps);
} else {
return and__18714__auto__;
}
}));
(clojure.core.matrix.protocols.PSelect["null"] = true);

(clojure.core.matrix.protocols.select["null"] = (function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Trying to select on nil with selection: "),cljs.core.str(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

(clojure.core.matrix.protocols.PSelect["number"] = true);

(clojure.core.matrix.protocols.select["number"] = (function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Trying to select on numerical scalar with selection: "),cljs.core.str(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));

(clojure.core.matrix.protocols.PSelect["object"] = true);

(clojure.core.matrix.protocols.select["object"] = (function (a,area){
var or__18726__auto__ = clojure.core.matrix.protocols.select_view.call(null,a,area);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}
}));
(clojure.core.matrix.protocols.PSelectView["null"] = true);

(clojure.core.matrix.protocols.select_view["null"] = (function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Trying to select on nil with selection: "),cljs.core.str(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return null;
}));

(clojure.core.matrix.protocols.PSelectView["object"] = true);

(clojure.core.matrix.protocols.select_view["object"] = (function (a,area){
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a,area);
}));

(clojure.core.matrix.protocols.PSelectView["number"] = true);

(clojure.core.matrix.protocols.select_view["number"] = (function (a,area){
if(cljs.core.seq.call(null,area)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Trying to select on numerical scalar with selection: "),cljs.core.str(area)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return a;
}));
(clojure.core.matrix.protocols.PSelect["number"] = true);

(clojure.core.matrix.protocols.select["number"] = (function (a,area){
if(cljs.core.empty_QMARK_.call(null,area)){
return a;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Non empty area argument in select, called on Number "),cljs.core.str(a)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
clojure.core.matrix.impl.defaults.area_indices = (function clojure$core$matrix$impl$defaults$area_indices(area){
return cljs.core.reduce.call(null,(function (io,in$){
var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__41423(s__41424){
return (new cljs.core.LazySeq(null,(function (){
var s__41424__$1 = s__41424;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__41424__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var a = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19494__auto__ = ((function (s__41424__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__41423_$_iter__41425(s__41426){
return (new cljs.core.LazySeq(null,((function (s__41424__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__41426__$1 = s__41426;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__41426__$1);
if(temp__4657__auto____$1){
var s__41426__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41426__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__41426__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__41428 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__41427 = (0);
while(true){
if((i__41427 < size__19497__auto__)){
var b = cljs.core._nth.call(null,c__19496__auto__,i__41427);
cljs.core.chunk_append.call(null,b__41428,cljs.core.cons.call(null,a,b));

var G__41429 = (i__41427 + (1));
i__41427 = G__41429;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41428),clojure$core$matrix$impl$defaults$area_indices_$_iter__41423_$_iter__41425.call(null,cljs.core.chunk_rest.call(null,s__41426__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41428),null);
}
} else {
var b = cljs.core.first.call(null,s__41426__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__41423_$_iter__41425.call(null,cljs.core.rest.call(null,s__41426__$2)));
}
} else {
return null;
}
break;
}
});})(s__41424__$1,a,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__41424__$1,a,xs__5205__auto__,temp__4657__auto__))
;
var fs__19495__auto__ = cljs.core.seq.call(null,iterys__19494__auto__.call(null,io));
if(fs__19495__auto__){
return cljs.core.concat.call(null,fs__19495__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__41423.call(null,cljs.core.rest.call(null,s__41424__$1)));
} else {
var G__41430 = cljs.core.rest.call(null,s__41424__$1);
s__41424__$1 = G__41430;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19498__auto__.call(null,in$);
}),cljs.core.mapv.call(null,cljs.core.vector,cljs.core.last.call(null,area)),cljs.core.rest.call(null,cljs.core.reverse.call(null,area)));
});
clojure.core.matrix.impl.defaults.indices = (function clojure$core$matrix$impl$defaults$indices(vals){
return clojure.core.matrix.impl.defaults.area_indices.call(null,cljs.core.mapv.call(null,cljs.core.range,clojure.core.matrix.protocols.get_shape.call(null,vals)));
});
(clojure.core.matrix.protocols.PSetSelection["object"] = true);

(clojure.core.matrix.protocols.set_selection["object"] = (function (m,area,vals){
var mm = (function (){var or__18726__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,m);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,m);
}
})();
var v = clojure.core.matrix.protocols.select_view.call(null,m,area);
clojure.core.matrix.protocols.assign_BANG_.call(null,v,vals);

return mm;
}));
(clojure.core.matrix.protocols.PIndexImplementation["object"] = true);

(clojure.core.matrix.protocols.index_QMARK_["object"] = (function (m){
return false;
}));

(clojure.core.matrix.protocols.index_to_longs["object"] = (function (m){
return cljs.core.long_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

(clojure.core.matrix.protocols.index_to_ints["object"] = (function (m){
return cljs.core.int_array.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
}));

(clojure.core.matrix.protocols.index_from_longs["object"] = (function (m,xs){
return cljs.core.long_array.call(null,xs);
}));

(clojure.core.matrix.protocols.index_from_ints["object"] = (function (m,xs){
return cljs.core.int_array.call(null,xs);
}));

(clojure.core.matrix.protocols.index_coerce["object"] = (function (m,a){
return clojure.core.matrix.protocols.index_to_longs.call(null,m);
}));
(clojure.core.matrix.protocols.PDimensionLabels["object"] = true);

(clojure.core.matrix.protocols.label["object"] = (function (m,dim,i){
if((((0) <= cljs.core.long$.call(null,i))) && ((cljs.core.long$.call(null,i) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim)) - (1))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Dimension index out of range: "),cljs.core.str(i)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));

(clojure.core.matrix.protocols.labels["object"] = (function (m,dim){
if((((0) <= cljs.core.long$.call(null,dim))) && ((cljs.core.long$.call(null,dim) <= (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1))))){
return null;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Dimension out of range: "),cljs.core.str(dim)].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}));
(clojure.core.matrix.protocols.PColumnNames["object"] = true);

(clojure.core.matrix.protocols.column_name["object"] = (function (m,i){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.label.call(null,m,dim,i);
}));

(clojure.core.matrix.protocols.column_names["object"] = (function (m){
var dim = (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) - (1));
return clojure.core.matrix.protocols.labels.call(null,m,dim);
}));
(clojure.core.matrix.protocols.PNorm["object"] = true);

(clojure.core.matrix.protocols.norm["object"] = (function (m,p){
if(cljs.core._EQ_.call(null,p,Number.POSITIVE_INFINITY)){
return clojure.core.matrix.protocols.element_max.call(null,m);
} else {
if(typeof p === 'number'){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_pow.call(null,clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.impl.mathsops.abs),p));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("p must be a number")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
}));
clojure.core.matrix.impl.defaults.compute_q = (function clojure$core$matrix$impl$defaults$compute_q(m,qr_data,mcols,mrows,min_len,us,vs,gammas){
var q = clojure.core.matrix.protocols.to_double_array.call(null,clojure.core.matrix.protocols.identity_matrix.call(null,cljs.core.PersistentVector.EMPTY,mrows));
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var i_41431 = (min_len__$1 - (1));
while(true){
if((i_41431 > (-1))){
var gamma_41432 = (gammas[i_41431]);
(us[i_41431] = 1.0);

var j_41433 = (i_41431 + (1));
while(true){
if((j_41433 < mrows__$1)){
(us[j_41433] = (qr_data[((j_41433 * mcols__$1) + i_41431)]));

var G__41434 = (j_41433 + (1));
j_41433 = G__41434;
continue;
} else {
}
break;
}


var j_41435 = i_41431;
while(true){
if((j_41435 < mrows__$1)){
(vs[j_41435] = ((us[i_41431]) * (q[((i_41431 * mrows__$1) + j_41435)])));

var G__41436 = (j_41435 + (1));
j_41435 = G__41436;
continue;
} else {
}
break;
}


var j_41437 = (i_41431 + (1));
while(true){
if((j_41437 < mrows__$1)){
var u_41438 = (us[j_41437]);
var k_41439 = i_41431;
while(true){
if((k_41439 < mrows__$1)){
var q_idx_41440 = (((j_41437 * mrows__$1) + i_41431) + (k_41439 - i_41431));
(vs[k_41439] = ((vs[k_41439]) + (u_41438 * (q[q_idx_41440]))));

var G__41441 = (k_41439 + (1));
k_41439 = G__41441;
continue;
} else {
}
break;
}


var G__41442 = (j_41437 + (1));
j_41437 = G__41442;
continue;
} else {
}
break;
}


var j_41443 = i_41431;
while(true){
if((j_41443 < mrows__$1)){
(vs[j_41443] = ((vs[j_41443]) * gamma_41432));

var G__41444 = (j_41443 + (1));
j_41443 = G__41444;
continue;
} else {
}
break;
}


var j_41445 = i_41431;
while(true){
if((j_41445 < mrows__$1)){
var u_41446 = (us[j_41445]);
var k_41447 = i_41431;
while(true){
if((k_41447 < mrows__$1)){
var qr_idx_41448 = (((j_41445 * mrows__$1) + i_41431) + (k_41447 - i_41431));
(q[qr_idx_41448] = ((q[qr_idx_41448]) - (u_41446 * (vs[k_41447]))));

var G__41449 = (k_41447 + (1));
k_41447 = G__41449;
continue;
} else {
}
break;
}


var G__41450 = (j_41445 + (1));
j_41445 = G__41450;
continue;
} else {
}
break;
}


var G__41451 = (i_41431 - (1));
i_41431 = G__41451;
continue;
} else {
}
break;
}


return clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mrows__$1], null),((function (q,mcols__$1,mrows__$1,min_len__$1){
return (function (i,j){
return (q[((i * mrows__$1) + j)]);
});})(q,mcols__$1,mrows__$1,min_len__$1))
);
});
clojure.core.matrix.impl.defaults.compute_r = (function clojure$core$matrix$impl$defaults$compute_r(m,data,mcols,mrows,min_len,compact_QMARK_){
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len__$1 = cljs.core.long$.call(null,min_len);
var cm = clojure.core.matrix.protocols.compute_matrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mrows__$1,mcols__$1], null),((function (mrows__$1,mcols__$1,min_len__$1){
return (function (i,j){
if(((i < min_len__$1)) && ((j >= i)) && ((j < mcols__$1))){
return (data[((i * mcols__$1) + j)]);
} else {
return (0);
}
});})(mrows__$1,mcols__$1,min_len__$1))
);
if(cljs.core.truth_(compact_QMARK_)){
var slcs = clojure.core.matrix.protocols.get_major_slice_seq.call(null,cm);
var non_zero_rows = cljs.core.long$.call(null,cljs.core.reduce.call(null,((function (slcs,mrows__$1,mcols__$1,min_len__$1,cm){
return (function (cnt,slice){
if(cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,slice)){
return (cnt + (1));
} else {
return cnt;
}
});})(slcs,mrows__$1,mcols__$1,min_len__$1,cm))
,(0),slcs));
return clojure.core.matrix.protocols.reshape.call(null,cm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols__$1,(mrows__$1 - non_zero_rows)], null));
} else {
return cm;
}
});
clojure.core.matrix.impl.defaults.householder_qr = (function clojure$core$matrix$impl$defaults$householder_qr(qr_data,idx,mcols,mrows,us,gammas){
var idx__$1 = cljs.core.long$.call(null,idx);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var qr_idx_41453 = cljs.core.long$.call(null,(idx__$1 + (idx__$1 * mcols__$1)));
var i_41454 = cljs.core.long$.call(null,idx__$1);
while(true){
if((i_41454 < mrows__$1)){
(us[i_41454] = (qr_data[qr_idx_41453]));

var G__41455 = (qr_idx_41453 + mcols__$1);
var G__41456 = (i_41454 + (1));
qr_idx_41453 = G__41455;
i_41454 = G__41456;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (idx__$1,mcols__$1,mrows__$1){
return (function (p1__41452_SHARP_){
return Math.abs(p1__41452_SHARP_);
});})(idx__$1,mcols__$1,mrows__$1))
,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.call(null,max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null);
} else {
var _ = (function (){
var i_41457 = idx__$1;
while(true){
if((i_41457 < mrows__$1)){
(us[i_41457] = ((us[i_41457]) / max_));

var G__41458 = (i_41457 + (1));
i_41457 = G__41458;
continue;
} else {
}
break;
}

return null;
})()
;
var tau = Math.sqrt(cljs.core.reduce.call(null,((function (_,max_,idx__$1,mcols__$1,mrows__$1){
return (function (acc,x){
return (acc + (x * x));
});})(_,max_,idx__$1,mcols__$1,mrows__$1))
,0.0,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
var u_idx = (us[idx__$1]);
var tau__$1 = (((u_idx < (0)))?(- tau):tau);
var u_0 = (u_idx + tau__$1);
var gamma = (u_0 / tau__$1);
var tau__$2 = (tau__$1 * max_);
(gammas[idx__$1] = gamma);

var i_41459 = (idx__$1 + (1));
while(true){
if((i_41459 < mrows__$1)){
(us[i_41459] = ((us[i_41459]) / u_0));

var G__41460 = (i_41459 + (1));
i_41459 = G__41460;
continue;
} else {
}
break;
}


(us[idx__$1] = 1.0);

return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gamma","gamma",1883969687),gamma,new cljs.core.Keyword(null,"gammas","gammas",-195052461),gammas,new cljs.core.Keyword(null,"us","us",746429226),us,new cljs.core.Keyword(null,"tau","tau",89782904),tau__$2,new cljs.core.Keyword(null,"error","error",-978969032),false], null);
}
});
clojure.core.matrix.impl.defaults.update_qr = (function clojure$core$matrix$impl$defaults$update_qr(qr_data,idx,mcols,mrows,vs,us,gamma,tau){
var idx__$1 = cljs.core.long$.call(null,idx);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var u = (us[idx__$1]);
var idx_PLUS_1 = (idx__$1 + (1));
var gamma__$1 = gamma;
var tau__$1 = tau;
var i_41461 = idx_PLUS_1;
while(true){
if((i_41461 < mcols__$1)){
(vs[i_41461] = (qr_data[(i_41461 + (idx__$1 * mcols__$1))]));

var G__41462 = (i_41461 + (1));
i_41461 = G__41462;
continue;
} else {
}
break;
}


var i_41463 = idx_PLUS_1;
while(true){
if((i_41463 < mrows__$1)){
var qr_idx_41464 = (idx_PLUS_1 + (i_41463 * mcols__$1));
var j_41465 = idx_PLUS_1;
while(true){
if((j_41465 < mcols__$1)){
(vs[j_41465] = ((vs[j_41465]) + ((us[i_41463]) * (qr_data[(qr_idx_41464 + (j_41465 - idx_PLUS_1))]))));

var G__41466 = (j_41465 + (1));
j_41465 = G__41466;
continue;
} else {
}
break;
}


var G__41467 = (i_41463 + (1));
i_41463 = G__41467;
continue;
} else {
}
break;
}


var i_41468 = idx_PLUS_1;
while(true){
if((i_41468 < mcols__$1)){
(vs[i_41468] = ((vs[i_41468]) * gamma__$1));

var G__41469 = (i_41468 + (1));
i_41468 = G__41469;
continue;
} else {
}
break;
}


var i_41470 = idx__$1;
while(true){
if((i_41470 < mrows__$1)){
var u_41471__$1 = (us[i_41470]);
var j_41472 = idx_PLUS_1;
while(true){
if((j_41472 < mcols__$1)){
var qr_idx_41473 = (((i_41470 * mcols__$1) + idx_PLUS_1) + (j_41472 - idx_PLUS_1));
(qr_data[qr_idx_41473] = ((qr_data[qr_idx_41473]) - (u_41471__$1 * (vs[j_41472]))));

var G__41474 = (j_41472 + (1));
j_41472 = G__41474;
continue;
} else {
}
break;
}


var G__41475 = (i_41470 + (1));
i_41470 = G__41475;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_41476 = idx_PLUS_1;
while(true){
if((i_41476 < mrows__$1)){
(qr_data[(idx__$1 + (i_41476 * mcols__$1))] = (us[i_41476]));

var G__41477 = (i_41476 + (1));
i_41476 = G__41477;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qr-data","qr-data",-504970292),qr_data,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs], null);
});
(clojure.core.matrix.protocols.PQRDecomposition["object"] = true);

(clojure.core.matrix.protocols.qr["object"] = (function (m,options){
var vec__41478 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__41478,(0),null);
var mcols = cljs.core.nth.call(null,vec__41478,(1),null);
var mrows__$1 = cljs.core.long$.call(null,mrows);
var mcols__$1 = cljs.core.long$.call(null,mcols);
var min_len = (function (){var x__19064__auto__ = mcols__$1;
var y__19065__auto__ = mrows__$1;
return ((x__19064__auto__ < y__19065__auto__) ? x__19064__auto__ : y__19065__auto__);
})();
var max_len = (function (){var x__19057__auto__ = mcols__$1;
var y__19058__auto__ = mrows__$1;
return ((x__19057__auto__ > y__19058__auto__) ? x__19057__auto__ : y__19058__auto__);
})();
var qr_data = clojure.core.matrix.protocols.to_double_array.call(null,m);
var vs = cljs.core.double_array.call(null,max_len);
var us = cljs.core.double_array.call(null,max_len);
var gammas = cljs.core.double_array.call(null,min_len);
var gamma = 0.0;
var tau = 0.0;
var i = (0);
while(true){
if((i < min_len)){
var map__41479 = clojure.core.matrix.impl.defaults.householder_qr.call(null,qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__41479__$1 = ((((!((map__41479 == null)))?((((map__41479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41479):map__41479);
var us__$1 = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"us","us",746429226));
var gamma__$1 = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var gammas__$1 = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"gammas","gammas",-195052461));
var tau__$1 = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"tau","tau",89782904));
var error = cljs.core.get.call(null,map__41479__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return null;
} else {
var map__41481 = clojure.core.matrix.impl.defaults.update_qr.call(null,qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__41481__$1 = ((((!((map__41481 == null)))?((((map__41481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41481):map__41481);
var qr_data__$1 = cljs.core.get.call(null,map__41481__$1,new cljs.core.Keyword(null,"qr-data","qr-data",-504970292));
var vs__$1 = cljs.core.get.call(null,map__41481__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var G__41485 = qr_data__$1;
var G__41486 = vs__$1;
var G__41487 = us__$1;
var G__41488 = gammas__$1;
var G__41489 = gamma__$1;
var G__41490 = tau__$1;
var G__41491 = (i + (1));
qr_data = G__41485;
vs = G__41486;
us = G__41487;
gammas = G__41488;
gamma = G__41489;
tau = G__41490;
i = G__41491;
continue;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (qr_data,vs,us,gammas,gamma,tau,i,vec__41478,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (p__41483){
var vec__41484 = p__41483;
var k = cljs.core.nth.call(null,vec__41484,(0),null);
var v = cljs.core.nth.call(null,vec__41484,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v.call(null)], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__41478,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,cljs.core.select_keys.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__41478,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__41478,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,new cljs.core.Keyword(null,"R","R",-936662523),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__41478,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,new cljs.core.Keyword(null,"compact","compact",-348732150).cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__41478,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
], null),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
}));
(clojure.core.matrix.protocols.PCholeskyDecomposition["object"] = true);

(clojure.core.matrix.protocols.cholesky["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_41492 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__23522__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__23522__auto__,m);
return clojure.core.matrix.protocols.cholesky.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_41492;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PLUDecomposition["object"] = true);

(clojure.core.matrix.protocols.lu["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_41493 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__23522__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__23522__auto__,m);
return clojure.core.matrix.protocols.lu.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_41493;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PSVDDecomposition["object"] = true);

(clojure.core.matrix.protocols.svd["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_41494 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__23522__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__23522__auto__,m);
return clojure.core.matrix.protocols.svd.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_41494;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PEigenDecomposition["object"] = true);

(clojure.core.matrix.protocols.eigen["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_41495 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__23522__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__23522__auto__,m);
return clojure.core.matrix.protocols.eigen.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_41495;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PSolveLinear["object"] = true);

(clojure.core.matrix.protocols.solve["object"] = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_41496 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__23522__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__23522__auto__,a);
return clojure.core.matrix.protocols.solve.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_41496;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PLeastSquares["object"] = true);

(clojure.core.matrix.protocols.least_squares["object"] = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_41497 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__23522__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__23522__auto__,a);
return clojure.core.matrix.protocols.least_squares.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_41497;
}} else {
return null;
}
}));

//# sourceMappingURL=defaults.js.map