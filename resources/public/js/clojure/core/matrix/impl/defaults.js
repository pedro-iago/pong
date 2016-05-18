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
var G__32988 = null;
var G__32988__1 = (function (m){
return 0.0;
});
var G__32988__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__32988 = function(m,value){
switch(arguments.length){
case 1:
return G__32988__1.call(this,m);
case 2:
return G__32988__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32988.cljs$core$IFn$_invoke$arity$1 = G__32988__1;
G__32988.cljs$core$IFn$_invoke$arity$2 = G__32988__2;
return G__32988;
})()
);

(clojure.core.matrix.protocols.PZeroDimensionConstruction["object"] = true);

(clojure.core.matrix.protocols.new_scalar_array["object"] = (function() {
var G__32989 = null;
var G__32989__1 = (function (m){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,0.0);
});
var G__32989__2 = (function (m,value){
return clojure.core.matrix.impl.wrappers.wrap_scalar.call(null,value);
});
G__32989 = function(m,value){
switch(arguments.length){
case 1:
return G__32989__1.call(this,m);
case 2:
return G__32989__2.call(this,m,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__32989.cljs$core$IFn$_invoke$arity$1 = G__32989__1;
G__32989.cljs$core$IFn$_invoke$arity$2 = G__32989__2;
return G__32989;
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

var G__33007 = (i + (1));
var G__33008 = cljs.core.next.call(null,s);
i = G__33007;
s = G__33008;
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

var G__33009 = (i + (1));
i = G__33009;
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

var G__33010 = (i + (1));
i = G__33010;
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
var seq__32999 = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m));
var chunk__33000 = null;
var count__33001 = (0);
var i__33002 = (0);
while(true){
if((i__33002 < count__33001)){
var ms = cljs.core._nth.call(null,chunk__33000,i__33002);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);

var G__33012 = seq__32999;
var G__33013 = chunk__33000;
var G__33014 = count__33001;
var G__33015 = (i__33002 + (1));
seq__32999 = G__33012;
chunk__33000 = G__33013;
count__33001 = G__33014;
i__33002 = G__33015;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32999);
if(temp__4657__auto__){
var seq__32999__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32999__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__32999__$1);
var G__33018 = cljs.core.chunk_rest.call(null,seq__32999__$1);
var G__33019 = c__19529__auto__;
var G__33020 = cljs.core.count.call(null,c__19529__auto__);
var G__33021 = (0);
seq__32999 = G__33018;
chunk__33000 = G__33019;
count__33001 = G__33020;
i__33002 = G__33021;
continue;
} else {
var ms = cljs.core.first.call(null,seq__32999__$1);
clojure.core.matrix.protocols.assign_BANG_.call(null,ms,x);

var G__33025 = cljs.core.next.call(null,seq__32999__$1);
var G__33026 = null;
var G__33027 = (0);
var G__33028 = (0);
seq__32999 = G__33025;
chunk__33000 = G__33026;
count__33001 = G__33027;
i__33002 = G__33028;
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
var G__33030 = null;
var G__33030__2 = (function (m,arr){
var alen = cljs.core.long$.call(null,cljs.core.count.call(null,arr));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__19629__auto__ = alen;
var i = (0);
while(true){
if((i < n__19629__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,i));

var G__33036 = (i + (1));
i = G__33036;
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
var G__33030__4 = (function (m,arr,start,length){
var length__$1 = cljs.core.long$.call(null,length);
var start__$1 = cljs.core.long$.call(null,start);
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m))){
var n__19629__auto__ = length__$1;
var i = (0);
while(true){
if((i < n__19629__auto__)){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,i,cljs.core.nth.call(null,arr,(start__$1 + i)));

var G__33037 = (i + (1));
i = G__33037;
continue;
} else {
return null;
}
break;
}
} else {
var ss = cljs.core.seq.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var skip = cljs.core.long$.call(null,((ss)?clojure.core.matrix.impl.defaults.calc_element_count.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m))):(0)));
var vals__19936__auto__ = cljs.core.seq.call(null,ss);
var i = cljs.core.long$.call(null,(0));
while(true){
if(vals__19936__auto__){
var s = cljs.core.first.call(null,vals__19936__auto__);
clojure.core.matrix.protocols.assign_array_BANG_.call(null,s,arr,(start__$1 + (skip * i)),skip);

var G__33038 = cljs.core.next.call(null,vals__19936__auto__);
var G__33039 = (i + (1));
vals__19936__auto__ = G__33038;
i = G__33039;
continue;
} else {
return null;
}
break;
}
}
});
G__33030 = function(m,arr,start,length){
switch(arguments.length){
case 2:
return G__33030__2.call(this,m,arr);
case 4:
return G__33030__4.call(this,m,arr,start,length);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33030.cljs$core$IFn$_invoke$arity$2 = G__33030__2;
G__33030.cljs$core$IFn$_invoke$arity$4 = G__33030__4;
return G__33030;
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
var G__33098 = (i + (1));
var G__33099 = (res + clojure.core.matrix.protocols.get_2d.call(null,m,i,i));
i = G__33098;
res = G__33099;
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
return clojure.core.matrix.protocols.coerce_param.call(null,m,(function (){var G__33102 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__33102) {
case (0):
return m;

break;
case (1):
return m;

break;
case (2):
return cljs.core.apply.call(null,cljs.core.mapv,cljs.core.vector,cljs.core.mapv.call(null,((function (G__33102){
return (function (p1__33101_SHARP_){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,p1__33101_SHARP_);
});})(G__33102))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m)));

break;
default:
var ss = cljs.core.mapv.call(null,clojure.core.matrix.protocols.transpose,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
var G__33104 = cljs.core.count.call(null,ss);
switch (G__33104) {
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
var n_33111 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0)));
if(cljs.core.not_EQ_.call(null,n_33111,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("transpose! requires a quare matrix")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__19629__auto___33112 = n_33111;
var i_33113 = (0);
while(true){
if((i_33113 < n__19629__auto___33112)){
var n__19629__auto___33114__$1 = i_33113;
var j_33115 = (0);
while(true){
if((j_33115 < n__19629__auto___33114__$1)){
var t_33116 = clojure.core.matrix.protocols.get_2d.call(null,m,i_33113,j_33115);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,i_33113,j_33115,clojure.core.matrix.protocols.get_2d.call(null,m,j_33115,i_33113));

clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,j_33115,i_33113,t_33116);

var G__33117 = (j_33115 + (1));
j_33115 = G__33117;
continue;
} else {
}
break;
}

var G__33118 = (i_33113 + (1));
i_33113 = G__33118;
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
return cljs.core.reduce.call(null,(function (m__$1,p__33126){
var vec__33127 = p__33126;
var dim = cljs.core.nth.call(null,vec__33127,(0),null);
var shift = cljs.core.nth.call(null,vec__33127,(1),null);
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
return cljs.core.reduce.call(null,(function (m__$1,p__33131){
var vec__33132 = p__33131;
var dim = cljs.core.nth.call(null,vec__33132,(0),null);
var shift = cljs.core.nth.call(null,vec__33132,(1),null);
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
var G__33151 = null;
var G__33151__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33151__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__33151 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__33151__2.call(this,m,dim);
case 3:
return G__33151__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33151.cljs$core$IFn$_invoke$arity$2 = G__33151__2;
G__33151.cljs$core$IFn$_invoke$arity$3 = G__33151__3;
return G__33151;
})()
);

(clojure.core.matrix.protocols.POrder["number"] = true);

(clojure.core.matrix.protocols.order["number"] = (function() {
var G__33154 = null;
var G__33154__2 = (function (m,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33154__3 = (function (m,dim,indices){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't reorder a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__33154 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__33154__2.call(this,m,dim);
case 3:
return G__33154__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33154.cljs$core$IFn$_invoke$arity$2 = G__33154__2;
G__33154.cljs$core$IFn$_invoke$arity$3 = G__33154__3;
return G__33154;
})()
);

(clojure.core.matrix.protocols.POrder["object"] = true);

(clojure.core.matrix.protocols.order["object"] = (function() {
var G__33155 = null;
var G__33155__2 = (function (m,indices){
var mshape = cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var subshape = cljs.core.assoc.call(null,m,(0),(1));
var ss = cljs.core.map.call(null,((function (mshape,subshape){
return (function (p1__33146_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__33146_SHARP_),subshape);
});})(mshape,subshape))
,indices);
return cljs.core.reduce.call(null,((function (mshape,subshape,ss){
return (function (p1__33147_SHARP_,p2__33148_SHARP_){
return clojure.core.matrix.protocols.join.call(null,p1__33147_SHARP_,p2__33148_SHARP_);
});})(mshape,subshape,ss))
,ss);
});
var G__33155__3 = (function (m,dim,indices){
return clojure.core.matrix.protocols.order.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m),dim,indices);
});
G__33155 = function(m,dim,indices){
switch(arguments.length){
case 2:
return G__33155__2.call(this,m,dim);
case 3:
return G__33155__3.call(this,m,dim,indices);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33155.cljs$core$IFn$_invoke$arity$2 = G__33155__2;
G__33155.cljs$core$IFn$_invoke$arity$3 = G__33155__3;
return G__33155;
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
return clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),cljs.core.map.call(null,(function (p1__33156_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__33156_SHARP_,a);
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
var vec__33168 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__33168,(0),null);
var acols = cljs.core.nth.call(null,vec__33168,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,clojure.core.matrix.protocols.reshape.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),arows], null)),a),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [acols], null));
} else {
if(((mdims === (2))) && ((adims === (1)))){
var vec__33169 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__33169,(0),null);
var mcols = cljs.core.nth.call(null,vec__33169,(1),null);
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.matrix_multiply.call(null,m,clojure.core.matrix.protocols.reshape.call(null,a,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols,(1)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mcols], null));
} else {
if(((mdims === (2))) && ((adims === (2)))){
var mutable = clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
var vec__33170 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__33170,(0),null);
var mcols = cljs.core.nth.call(null,vec__33170,(1),null);
var vec__33171 = clojure.core.matrix.protocols.get_shape.call(null,a);
var arows = cljs.core.nth.call(null,vec__33171,(0),null);
var acols = cljs.core.nth.call(null,vec__33171,(1),null);
var new_m_type = (cljs.core.truth_(mutable)?m:clojure.core.matrix.implementations.get_canonical_object.call(null,new cljs.core.Keyword(null,"ndarray","ndarray",1659822393)));
var new_m = clojure.core.matrix.protocols.new_matrix.call(null,new_m_type,mrows,acols);
var i_33179 = cljs.core.long$.call(null,(0));
while(true){
if((i_33179 < mrows)){
var j_33180 = cljs.core.long$.call(null,(0));
while(true){
if((j_33180 < acols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_33179,j_33180,(0));

var G__33181 = (j_33180 + (1));
j_33180 = G__33181;
continue;
} else {
}
break;
}

var G__33182 = (i_33179 + (1));
i_33179 = G__33182;
continue;
} else {
}
break;
}


var i_33183 = cljs.core.long$.call(null,(0));
while(true){
if((i_33183 < mrows)){
var j_33184 = cljs.core.long$.call(null,(0));
while(true){
if((j_33184 < acols)){
var k_33185 = cljs.core.long$.call(null,(0));
while(true){
if((k_33185 < mcols)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,new_m,i_33183,j_33184,(clojure.core.matrix.protocols.get_2d.call(null,new_m,i_33183,j_33184) + (clojure.core.matrix.protocols.get_2d.call(null,m,i_33183,k_33185) * clojure.core.matrix.protocols.get_2d.call(null,a,k_33185,j_33184))));

var G__33186 = (k_33185 + (1));
k_33185 = G__33186;
continue;
} else {
}
break;
}

var G__33189 = (j_33184 + (1));
j_33184 = G__33189;
continue;
} else {
}
break;
}

var G__33190 = (i_33183 + (1));
i_33183 = G__33190;
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
var vec__33175 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__33175,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__33175,(1),null);
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
var G__33201 = null;
var G__33201__1 = (function (m){
return ((1) / m);
});
var G__33201__2 = (function (m,a){
return clojure.core.matrix.protocols.pre_scale.call(null,clojure.core.matrix.protocols.element_divide.call(null,a),m);
});
G__33201 = function(m,a){
switch(arguments.length){
case 1:
return G__33201__1.call(this,m);
case 2:
return G__33201__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33201.cljs$core$IFn$_invoke$arity$1 = G__33201__1;
G__33201.cljs$core$IFn$_invoke$arity$2 = G__33201__2;
return G__33201;
})()
);

(clojure.core.matrix.protocols.PMatrixDivide["object"] = true);

(clojure.core.matrix.protocols.element_divide["object"] = (function() {
var G__33202 = null;
var G__33202__1 = (function (m){
if(cljs.core.truth_(clojure.core.matrix.protocols.get_shape.call(null,m))){
return clojure.core.matrix.protocols.element_map.call(null,m,clojure.core.matrix.protocols.element_divide);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Don't know how to take reciprocal of "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
var G__33202__2 = (function (m,a){
return clojure.core.matrix.protocols.element_multiply.call(null,m,clojure.core.matrix.protocols.element_divide.call(null,a));
});
G__33202 = function(m,a){
switch(arguments.length){
case 1:
return G__33202__1.call(this,m);
case 2:
return G__33202__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33202.cljs$core$IFn$_invoke$arity$1 = G__33202__1;
G__33202.cljs$core$IFn$_invoke$arity$2 = G__33202__2;
return G__33202;
})()
);
(clojure.core.matrix.protocols.PMatrixDivideMutable["number"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["number"] = (function() {
var G__33208 = null;
var G__33208__1 = (function (m){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable divide on a scalar number")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33208__2 = (function (m,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do mutable divide on a scalar numer")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__33208 = function(m,a){
switch(arguments.length){
case 1:
return G__33208__1.call(this,m);
case 2:
return G__33208__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33208.cljs$core$IFn$_invoke$arity$1 = G__33208__1;
G__33208.cljs$core$IFn$_invoke$arity$2 = G__33208__2;
return G__33208;
})()
);

(clojure.core.matrix.protocols.PMatrixDivideMutable["object"] = true);

(clojure.core.matrix.protocols.element_divide_BANG_["object"] = (function() {
var G__33209 = null;
var G__33209__1 = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,cljs.core._SLASH_);
});
var G__33209__2 = (function (m,a){
var vec__33207 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__33207,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__33207,(1),null);
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1,cljs.core._SLASH_,a__$1);
});
G__33209 = function(m,a){
switch(arguments.length){
case 1:
return G__33209__1.call(this,m);
case 2:
return G__33209__2.call(this,m,a);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33209.cljs$core$IFn$_invoke$arity$1 = G__33209__1;
G__33209.cljs$core$IFn$_invoke$arity$2 = G__33209__2;
return G__33209;
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
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33210_SHARP_){
if((p1__33210_SHARP_ < a)){
return a;
} else {
if((p1__33210_SHARP_ > b)){
return b;
} else {
return p1__33210_SHARP_;
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
var vec__33241 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,a,b);
var a__$1 = cljs.core.nth.call(null,vec__33241,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__33241,(1),null);
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
return clojure.core.matrix.protocols.element_map.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),(function (p1__33213_SHARP_){
return cljs.core.long$.call(null,clojure.core.matrix.impl.mathsops.signum.call(null,p1__33213_SHARP_));
}));
}));

(clojure.core.matrix.protocols.element_if["object"] = (function (m,a,b){
if((typeof a === 'number') && (typeof b === 'number')){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33214_SHARP_){
if((p1__33214_SHARP_ > (0))){
return a;
} else {
return b;
}
}));
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33215_SHARP_,p2__33216_SHARP_){
if((p1__33215_SHARP_ > (0))){
return a;
} else {
return p2__33216_SHARP_;
}
}),b);
} else {
if(typeof b === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33217_SHARP_,p2__33218_SHARP_){
if((p1__33217_SHARP_ > (0))){
return p2__33218_SHARP_;
} else {
return b;
}
}),a);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33219_SHARP_,p2__33220_SHARP_,p3__33221_SHARP_){
if((p1__33219_SHARP_ > (0))){
return p2__33220_SHARP_;
} else {
return p3__33221_SHARP_;
}
}),a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [b], null));

}
}
}
}));

(clojure.core.matrix.protocols.element_lt["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33222_SHARP_){
if((p1__33222_SHARP_ < a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33223_SHARP_,p2__33224_SHARP_){
if((p1__33223_SHARP_ < p2__33224_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_le["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33225_SHARP_){
if((p1__33225_SHARP_ <= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33226_SHARP_,p2__33227_SHARP_){
if((p1__33226_SHARP_ <= p2__33227_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_gt["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33228_SHARP_){
if((p1__33228_SHARP_ > a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33229_SHARP_,p2__33230_SHARP_){
if((p1__33229_SHARP_ > p2__33230_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_ge["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33231_SHARP_){
if((p1__33231_SHARP_ >= a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33232_SHARP_,p2__33233_SHARP_){
if((p1__33232_SHARP_ >= p2__33233_SHARP_)){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_ne["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33234_SHARP_){
if(!((p1__33234_SHARP_ === a))){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33235_SHARP_,p2__33236_SHARP_){
if(!((p1__33235_SHARP_ === p2__33236_SHARP_))){
return (1);
} else {
return (0);
}
}),a);
}
}));

(clojure.core.matrix.protocols.element_eq["object"] = (function (m,a){
if(typeof a === 'number'){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33237_SHARP_){
if((p1__33237_SHARP_ === a)){
return (1);
} else {
return (0);
}
}));
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33238_SHARP_,p2__33239_SHARP_){
if((p1__33238_SHARP_ === p2__33239_SHARP_)){
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
var G__33265 = null;
var G__33265__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__33265__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b),factor);
});
G__33265 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__33265__3.call(this,m,a,b);
case 4:
return G__33265__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33265.cljs$core$IFn$_invoke$arity$3 = G__33265__3;
G__33265.cljs$core$IFn$_invoke$arity$4 = G__33265__4;
return G__33265;
})()
);
(clojure.core.matrix.protocols.PAddOuterProductMutable["object"] = true);

(clojure.core.matrix.protocols.add_outer_product_BANG_["object"] = (function() {
var G__33270 = null;
var G__33270__3 = (function (m,a,b){
return clojure.core.matrix.protocols.matrix_add_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b));
});
var G__33270__4 = (function (m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,clojure.core.matrix.protocols.outer_product.call(null,a,b),factor);
});
G__33270 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__33270__3.call(this,m,a,b);
case 4:
return G__33270__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33270.cljs$core$IFn$_invoke$arity$3 = G__33270__3;
G__33270.cljs$core$IFn$_invoke$arity$4 = G__33270__4;
return G__33270;
})()
);
(clojure.core.matrix.protocols.PSetInnerProductMutable["object"] = true);

(clojure.core.matrix.protocols.set_inner_product_BANG_["object"] = (function() {
var G__33271 = null;
var G__33271__3 = (function (m,a,b){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));
});
var G__33271__4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.inner_product.call(null,a,b));

return clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);
});
G__33271 = function(m,a,b,factor){
switch(arguments.length){
case 3:
return G__33271__3.call(this,m,a,b);
case 4:
return G__33271__4.call(this,m,a,b,factor);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33271.cljs$core$IFn$_invoke$arity$3 = G__33271__3;
G__33271.cljs$core$IFn$_invoke$arity$4 = G__33271__4;
return G__33271;
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
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33281_SHARP_){
return (p1__33281_SHARP_ * a);
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
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__33282_SHARP_){
return (p1__33282_SHARP_ * a);
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
var vec__33291 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__33291,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__33291,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$1,cljs.core._PLUS_,a__$1);
}));

(clojure.core.matrix.protocols.matrix_sub["object"] = (function (m,a){
var vec__33292 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__33292,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__33292,(1),null);
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
return (function (p1__33333_SHARP_){
return (Math.abs(p1__33333_SHARP_) <= eps__$1);
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

var G__33369 = (j + (1));
j = G__33369;
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
var G__33387 = null;
var G__33387__2 = (function (m,f){
return f.call(null,m);
});
var G__33387__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__33370_SHARP_){
return f.call(null,m,p1__33370_SHARP_);
}));
});
var G__33387__4 = (function (m,f,a,more){
var temp__4655__auto__ = cljs.core.next.call(null,more);
if(temp__4655__auto__){
var moremore = temp__4655__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__4655__auto__){
return (function() { 
var G__33396__delegate = function (p1__33371_SHARP_,p2__33372_SHARP_,rest__33373_SHARP_){
return cljs.core.apply.call(null,f,m,p1__33371_SHARP_,p2__33372_SHARP_,rest__33373_SHARP_);
};
var G__33396 = function (p1__33371_SHARP_,p2__33372_SHARP_,var_args){
var rest__33373_SHARP_ = null;
if (arguments.length > 2) {
var G__33397__i = 0, G__33397__a = new Array(arguments.length -  2);
while (G__33397__i < G__33397__a.length) {G__33397__a[G__33397__i] = arguments[G__33397__i + 2]; ++G__33397__i;}
  rest__33373_SHARP_ = new cljs.core.IndexedSeq(G__33397__a,0);
} 
return G__33396__delegate.call(this,p1__33371_SHARP_,p2__33372_SHARP_,rest__33373_SHARP_);};
G__33396.cljs$lang$maxFixedArity = 2;
G__33396.cljs$lang$applyTo = (function (arglist__33399){
var p1__33371_SHARP_ = cljs.core.first(arglist__33399);
arglist__33399 = cljs.core.next(arglist__33399);
var p2__33372_SHARP_ = cljs.core.first(arglist__33399);
var rest__33373_SHARP_ = cljs.core.rest(arglist__33399);
return G__33396__delegate(p1__33371_SHARP_,p2__33372_SHARP_,rest__33373_SHARP_);
});
G__33396.cljs$core$IFn$_invoke$arity$variadic = G__33396__delegate;
return G__33396;
})()
;})(moremore,temp__4655__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__4655__auto__){
return (function (p1__33374_SHARP_,p2__33375_SHARP_){
return f.call(null,m,p1__33374_SHARP_,p2__33375_SHARP_);
});})(temp__4655__auto__))
,cljs.core.first.call(null,more));
}
});
G__33387 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33387__2.call(this,m,f);
case 3:
return G__33387__3.call(this,m,f,a);
case 4:
return G__33387__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33387.cljs$core$IFn$_invoke$arity$2 = G__33387__2;
G__33387.cljs$core$IFn$_invoke$arity$3 = G__33387__3;
G__33387.cljs$core$IFn$_invoke$arity$4 = G__33387__4;
return G__33387;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["number"] = (function() {
var G__33404 = null;
var G__33404__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33404__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33404__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__33404 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33404__2.call(this,m,f);
case 3:
return G__33404__3.call(this,m,f,a);
case 4:
return G__33404__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33404.cljs$core$IFn$_invoke$arity$2 = G__33404__2;
G__33404.cljs$core$IFn$_invoke$arity$3 = G__33404__3;
G__33404.cljs$core$IFn$_invoke$arity$4 = G__33404__4;
return G__33404;
})()
);

(clojure.core.matrix.protocols.element_reduce["number"] = (function() {
var G__33410 = null;
var G__33410__2 = (function (m,f){
return m;
});
var G__33410__3 = (function (m,f,init){
return f.call(null,init,m);
});
G__33410 = function(m,f,init){
switch(arguments.length){
case 2:
return G__33410__2.call(this,m,f);
case 3:
return G__33410__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33410.cljs$core$IFn$_invoke$arity$2 = G__33410__2;
G__33410.cljs$core$IFn$_invoke$arity$3 = G__33410__3;
return G__33410;
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
var G__33420 = null;
var G__33420__2 = (function (m,f){
return clojure.core.matrix.protocols.construct_matrix.call(null,m,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m));
});
var G__33420__3 = (function (m,f,a){
var vec__33381 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__33381,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__33381,(1),null);
return clojure.core.matrix.protocols.construct_matrix.call(null,m__$1,clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1,a__$1));
});
var G__33420__4 = (function (m,f,a,more){
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
return (function (p1__33376_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__33376_SHARP_,sh);
});})(arrays,shapes,sh))
,arrays);
return clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1));
});
G__33420 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33420__2.call(this,m,f);
case 3:
return G__33420__3.call(this,m,f,a);
case 4:
return G__33420__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33420.cljs$core$IFn$_invoke$arity$2 = G__33420__2;
G__33420.cljs$core$IFn$_invoke$arity$3 = G__33420__3;
G__33420.cljs$core$IFn$_invoke$arity$4 = G__33420__4;
return G__33420;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["object"] = (function() {
var G__33422 = null;
var G__33422__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f));
});
var G__33422__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a));
});
var G__33422__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map.call(null,m,f,a,more));
});
G__33422 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33422__2.call(this,m,f);
case 3:
return G__33422__3.call(this,m,f,a);
case 4:
return G__33422__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33422.cljs$core$IFn$_invoke$arity$2 = G__33422__2;
G__33422.cljs$core$IFn$_invoke$arity$3 = G__33422__3;
G__33422.cljs$core$IFn$_invoke$arity$4 = G__33422__4;
return G__33422;
})()
);

(clojure.core.matrix.protocols.element_reduce["object"] = (function() {
var G__33423 = null;
var G__33423__2 = (function (m,f){
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m));
});
var G__33423__3 = (function (m,f,init){
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m));
});
G__33423 = function(m,f,init){
switch(arguments.length){
case 2:
return G__33423__2.call(this,m,f);
case 3:
return G__33423__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33423.cljs$core$IFn$_invoke$arity$2 = G__33423__2;
G__33423.cljs$core$IFn$_invoke$arity$3 = G__33423__3;
return G__33423;
})()
);

(clojure.core.matrix.protocols.PFunctionalOperations["null"] = true);

(clojure.core.matrix.protocols.element_seq["null"] = (function (m){
return cljs.core.list(null);
}));

(clojure.core.matrix.protocols.element_map["null"] = (function() {
var G__33424 = null;
var G__33424__2 = (function (m,f){
return f.call(null,null);
});
var G__33424__3 = (function (m,f,a){
return f.call(null,null,a);
});
var G__33424__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,null,a,more);
});
G__33424 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33424__2.call(this,m,f);
case 3:
return G__33424__3.call(this,m,f,a);
case 4:
return G__33424__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33424.cljs$core$IFn$_invoke$arity$2 = G__33424__2;
G__33424.cljs$core$IFn$_invoke$arity$3 = G__33424__3;
G__33424.cljs$core$IFn$_invoke$arity$4 = G__33424__4;
return G__33424;
})()
);

(clojure.core.matrix.protocols.element_map_BANG_["null"] = (function() {
var G__33426 = null;
var G__33426__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33426__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33426__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__33426 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33426__2.call(this,m,f);
case 3:
return G__33426__3.call(this,m,f,a);
case 4:
return G__33426__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33426.cljs$core$IFn$_invoke$arity$2 = G__33426__2;
G__33426.cljs$core$IFn$_invoke$arity$3 = G__33426__3;
G__33426.cljs$core$IFn$_invoke$arity$4 = G__33426__4;
return G__33426;
})()
);

(clojure.core.matrix.protocols.element_reduce["null"] = (function() {
var G__33427 = null;
var G__33427__2 = (function (m,f){
return null;
});
var G__33427__3 = (function (m,f,init){
return f.call(null,init,null);
});
G__33427 = function(m,f,init){
switch(arguments.length){
case 2:
return G__33427__2.call(this,m,f);
case 3:
return G__33427__3.call(this,m,f,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33427.cljs$core$IFn$_invoke$arity$2 = G__33427__2;
G__33427.cljs$core$IFn$_invoke$arity$3 = G__33427__3;
return G__33427;
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
var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$cart_$_iter__33434(s__33435){
return (new cljs.core.LazySeq(null,(function (){
var s__33435__$1 = s__33435;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33435__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var x = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19494__auto__ = ((function (s__33435__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function clojure$core$matrix$impl$defaults$cart_$_iter__33434_$_iter__33436(s__33437){
return (new cljs.core.LazySeq(null,((function (s__33435__$1,x,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__33437__$1 = s__33437;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__33437__$1);
if(temp__4657__auto____$1){
var s__33437__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33437__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33437__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33439 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33438 = (0);
while(true){
if((i__33438 < size__19497__auto__)){
var more = cljs.core._nth.call(null,c__19496__auto__,i__33438);
cljs.core.chunk_append.call(null,b__33439,cljs.core.cons.call(null,x,more));

var G__33447 = (i__33438 + (1));
i__33438 = G__33447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33439),clojure$core$matrix$impl$defaults$cart_$_iter__33434_$_iter__33436.call(null,cljs.core.chunk_rest.call(null,s__33437__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33439),null);
}
} else {
var more = cljs.core.first.call(null,s__33437__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,x,more),clojure$core$matrix$impl$defaults$cart_$_iter__33434_$_iter__33436.call(null,cljs.core.rest.call(null,s__33437__$2)));
}
} else {
return null;
}
break;
}
});})(s__33435__$1,x,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__33435__$1,x,xs__5205__auto__,temp__4657__auto__))
;
var fs__19495__auto__ = cljs.core.seq.call(null,iterys__19494__auto__.call(null,clojure$core$matrix$impl$defaults$cart.call(null,cljs.core.rest.call(null,colls))));
if(fs__19495__auto__){
return cljs.core.concat.call(null,fs__19495__auto__,clojure$core$matrix$impl$defaults$cart_$_iter__33434.call(null,cljs.core.rest.call(null,s__33435__$1)));
} else {
var G__33448 = cljs.core.rest.call(null,s__33435__$1);
s__33435__$1 = G__33448;
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
var G__33458 = null;
var G__33458__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,m);
});
var G__33458__3 = (function (m,f,a){
return clojure.core.matrix.protocols.element_map.call(null,a,(function (p1__33449_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__33449_SHARP_);
}));
});
var G__33458__4 = (function (m,f,a,more){
var temp__4655__auto__ = cljs.core.next.call(null,more);
if(temp__4655__auto__){
var moremore = temp__4655__auto__;
return clojure.core.matrix.protocols.element_map.call(null,a,((function (moremore,temp__4655__auto__){
return (function() { 
var G__33459__delegate = function (p1__33450_SHARP_,p2__33451_SHARP_,rest__33452_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,m,p1__33450_SHARP_,p2__33451_SHARP_,rest__33452_SHARP_);
};
var G__33459 = function (p1__33450_SHARP_,p2__33451_SHARP_,var_args){
var rest__33452_SHARP_ = null;
if (arguments.length > 2) {
var G__33460__i = 0, G__33460__a = new Array(arguments.length -  2);
while (G__33460__i < G__33460__a.length) {G__33460__a[G__33460__i] = arguments[G__33460__i + 2]; ++G__33460__i;}
  rest__33452_SHARP_ = new cljs.core.IndexedSeq(G__33460__a,0);
} 
return G__33459__delegate.call(this,p1__33450_SHARP_,p2__33451_SHARP_,rest__33452_SHARP_);};
G__33459.cljs$lang$maxFixedArity = 2;
G__33459.cljs$lang$applyTo = (function (arglist__33461){
var p1__33450_SHARP_ = cljs.core.first(arglist__33461);
arglist__33461 = cljs.core.next(arglist__33461);
var p2__33451_SHARP_ = cljs.core.first(arglist__33461);
var rest__33452_SHARP_ = cljs.core.rest(arglist__33461);
return G__33459__delegate(p1__33450_SHARP_,p2__33451_SHARP_,rest__33452_SHARP_);
});
G__33459.cljs$core$IFn$_invoke$arity$variadic = G__33459__delegate;
return G__33459;
})()
;})(moremore,temp__4655__auto__))
,cljs.core.first.call(null,more),moremore);
} else {
return clojure.core.matrix.protocols.element_map.call(null,a,((function (temp__4655__auto__){
return (function (p1__33453_SHARP_,p2__33454_SHARP_){
return f.call(null,cljs.core.PersistentVector.EMPTY,m,p1__33453_SHARP_,p2__33454_SHARP_);
});})(temp__4655__auto__))
,cljs.core.first.call(null,more));
}
});
G__33458 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33458__2.call(this,m,f);
case 3:
return G__33458__3.call(this,m,f,a);
case 4:
return G__33458__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33458.cljs$core$IFn$_invoke$arity$2 = G__33458__2;
G__33458.cljs$core$IFn$_invoke$arity$3 = G__33458__3;
G__33458.cljs$core$IFn$_invoke$arity$4 = G__33458__4;
return G__33458;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["number"] = (function() {
var G__33465 = null;
var G__33465__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33465__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33465__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("java.lang.Number instance is not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__33465 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33465__2.call(this,m,f);
case 3:
return G__33465__3.call(this,m,f,a);
case 4:
return G__33465__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33465.cljs$core$IFn$_invoke$arity$2 = G__33465__2;
G__33465.cljs$core$IFn$_invoke$arity$3 = G__33465__3;
G__33465.cljs$core$IFn$_invoke$arity$4 = G__33465__4;
return G__33465;
})()
);

(clojure.core.matrix.protocols.PMapIndexed["object"] = true);

(clojure.core.matrix.protocols.element_map_indexed["object"] = (function() {
var G__33467 = null;
var G__33467__2 = (function (m,f){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
return f.call(null,cljs.core.PersistentVector.EMPTY,clojure.core.matrix.protocols.get_0d.call(null,m));
} else {
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s),clojure.core.matrix.protocols.get_shape.call(null,m));
}
});
var G__33467__3 = (function (m,f,a){
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))){
var v = clojure.core.matrix.protocols.get_0d.call(null,m);
return clojure.core.matrix.protocols.element_map_indexed.call(null,a,((function (v){
return (function (p1__33455_SHARP_,p2__33456_SHARP_){
return f.call(null,p1__33455_SHARP_,v,p2__33456_SHARP_);
});})(v))
);
} else {
var vec__33457 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m,a);
var m__$1 = cljs.core.nth.call(null,vec__33457,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__33457,(1),null);
var s = cljs.core.map.call(null,f,clojure.core.matrix.impl.defaults.indices_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,m__$1),clojure.core.matrix.protocols.element_seq.call(null,a__$1));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m__$1,s),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
}
});
var G__33467__4 = (function (m,f,a,more){
var s = cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a));
var s__$1 = cljs.core.apply.call(null,cljs.core.map,f,cljs.core.list_STAR_.call(null,clojure.core.matrix.impl.defaults.indices_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,m),clojure.core.matrix.protocols.element_seq.call(null,a),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,more)));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,s__$1),clojure.core.matrix.protocols.get_shape.call(null,m));
});
G__33467 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33467__2.call(this,m,f);
case 3:
return G__33467__3.call(this,m,f,a);
case 4:
return G__33467__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33467.cljs$core$IFn$_invoke$arity$2 = G__33467__2;
G__33467.cljs$core$IFn$_invoke$arity$3 = G__33467__3;
G__33467.cljs$core$IFn$_invoke$arity$4 = G__33467__4;
return G__33467;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["object"] = (function() {
var G__33472 = null;
var G__33472__2 = (function (m,f){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f));
});
var G__33472__3 = (function (m,f,a){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a));
});
var G__33472__4 = (function (m,f,a,more){
return clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more));
});
G__33472 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33472__2.call(this,m,f);
case 3:
return G__33472__3.call(this,m,f,a);
case 4:
return G__33472__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33472.cljs$core$IFn$_invoke$arity$2 = G__33472__2;
G__33472.cljs$core$IFn$_invoke$arity$3 = G__33472__3;
G__33472.cljs$core$IFn$_invoke$arity$4 = G__33472__4;
return G__33472;
})()
);

(clojure.core.matrix.protocols.PMapIndexed["null"] = true);

(clojure.core.matrix.protocols.element_map_indexed["null"] = (function() {
var G__33473 = null;
var G__33473__2 = (function (m,f){
return f.call(null,cljs.core.PersistentVector.EMPTY,null);
});
var G__33473__3 = (function (m,f,a){
return f.call(null,cljs.core.PersistentVector.EMPTY,null,a);
});
var G__33473__4 = (function (m,f,a,more){
return cljs.core.apply.call(null,f,cljs.core.PersistentVector.EMPTY,null,a,more);
});
G__33473 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33473__2.call(this,m,f);
case 3:
return G__33473__3.call(this,m,f,a);
case 4:
return G__33473__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33473.cljs$core$IFn$_invoke$arity$2 = G__33473__2;
G__33473.cljs$core$IFn$_invoke$arity$3 = G__33473__3;
G__33473.cljs$core$IFn$_invoke$arity$4 = G__33473__4;
return G__33473;
})()
);

(clojure.core.matrix.protocols.element_map_indexed_BANG_["null"] = (function() {
var G__33476 = null;
var G__33476__2 = (function (m,f){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map-indexed! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33476__3 = (function (m,f,a){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map-indexed! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
var G__33476__4 = (function (m,f,a,more){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do element-map-indexed! on nil")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
G__33476 = function(m,f,a,more){
switch(arguments.length){
case 2:
return G__33476__2.call(this,m,f);
case 3:
return G__33476__3.call(this,m,f,a);
case 4:
return G__33476__4.call(this,m,f,a,more);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__33476.cljs$core$IFn$_invoke$arity$2 = G__33476__2;
G__33476.cljs$core$IFn$_invoke$arity$3 = G__33476__3;
G__33476.cljs$core$IFn$_invoke$arity$4 = G__33476__4;
return G__33476;
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
var G__33497 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__33497) {
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
var G__33503 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__33503) {
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
return (function clojure$core$matrix$impl$defaults$iter__33508(s__33509){
return (new cljs.core.LazySeq(null,((function (dims){
return (function (){
var s__33509__$1 = s__33509;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33509__$1);
if(temp__4657__auto__){
var s__33509__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33509__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33509__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33511 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33510 = (0);
while(true){
if((i__33510 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__33510);
cljs.core.chunk_append.call(null,b__33511,clojure.core.matrix.protocols.get_1d.call(null,m,i));

var G__33525 = (i__33510 + (1));
i__33510 = G__33525;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33511),clojure$core$matrix$impl$defaults$iter__33508.call(null,cljs.core.chunk_rest.call(null,s__33509__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33511),null);
}
} else {
var i = cljs.core.first.call(null,s__33509__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_1d.call(null,m,i),clojure$core$matrix$impl$defaults$iter__33508.call(null,cljs.core.rest.call(null,s__33509__$2)));
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
return (function (p1__33505_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,m,p1__33505_SHARP_);
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
return (function (p1__33530_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,p1__33530_SHARP_);
});})(ldimension))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));

}
}
}));
(clojure.core.matrix.protocols.PSliceViewSeq["object"] = true);

(clojure.core.matrix.protocols.get_major_slice_view_seq["object"] = (function (m){
var n = clojure.core.matrix.protocols.dimension_count.call(null,m,(0));
var iter__19498__auto__ = ((function (n){
return (function clojure$core$matrix$impl$defaults$iter__33533(s__33534){
return (new cljs.core.LazySeq(null,((function (n){
return (function (){
var s__33534__$1 = s__33534;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33534__$1);
if(temp__4657__auto__){
var s__33534__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33534__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33534__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33536 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33535 = (0);
while(true){
if((i__33535 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__33535);
cljs.core.chunk_append.call(null,b__33536,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i));

var G__33542 = (i__33535 + (1));
i__33535 = G__33542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33536),clojure$core$matrix$impl$defaults$iter__33533.call(null,cljs.core.chunk_rest.call(null,s__33534__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33536),null);
}
} else {
var i = cljs.core.first.call(null,s__33534__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i),clojure$core$matrix$impl$defaults$iter__33533.call(null,cljs.core.rest.call(null,s__33534__$2)));
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
return (function (p1__33559_SHARP_,p2__33560_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__33559_SHARP_,p2__33560_SHARP_,ddim);
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
var G__33575 = (i + (1));
var G__33576 = cljs.core.conj.call(null,res,clojure.core.matrix.protocols.get_1d.call(null,m,i));
i = G__33575;
res = G__33576;
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
return (function (p1__33592_SHARP_){
return clojure$core$matrix$impl$defaults$partition_shape.call(null,p1__33592_SHARP_,ns);
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
return clojure.core.matrix.protocols.element_map.call(null,exponent,(function (p1__33609_SHARP_){
return Math.pow(m,p1__33609_SHARP_);
}));
} else {
return Math.pow(m,exponent);
}
}));

(clojure.core.matrix.protocols.PExponent["object"] = true);

(clojure.core.matrix.protocols.element_pow["object"] = (function (m,exponent){
if(cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,exponent))){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33613_SHARP_,p2__33614_SHARP_){
return Math.pow(p1__33613_SHARP_,p2__33614_SHARP_);
}),exponent);
} else {
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__33615_SHARP_){
return Math.pow(p1__33615_SHARP_,exponent);
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
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.abs(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.acos["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.acos(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.asin["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.asin(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.atan["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.atan(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.cbrt(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.ceil(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.cos["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.cos(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.cosh(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.exp["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.exp(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.floor["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.floor(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.log["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.log(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.log10["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.log10(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.round["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.rint(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.signum["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.sign(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.sin["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.sin(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.sinh(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.sqrt(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.tan["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.tan(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return Math.tanh(p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians["object"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32171__32172__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32171__32172__auto__);
}));
}));

(clojure.core.matrix.protocols.PMathsFunctions["array"] = true);

(clojure.core.matrix.protocols.abs["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.abs(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.acos["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.acos(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.asin["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.asin(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.atan["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.atan(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.cbrt(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.ceil(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.cos["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.cos(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.cosh(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.exp["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.exp(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.floor["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.floor(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.log["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.log(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.log10["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.log10(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.round["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.rint(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.signum["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.sign(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.sin["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.sin(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.sinh(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.sqrt(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.tan["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.tan(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return Math.tanh(p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32173__32174__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians["array"] = (function (m){
return clojure.core.matrix.protocols.element_map.call(null,m,(function (p1__32173__32174__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32173__32174__auto__);
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
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.abs(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.acos_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.acos(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.asin_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.asin(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.atan_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.atan(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.cbrt(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.ceil(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.cos_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.cos(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.cosh(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.exp_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.exp(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.floor_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.floor(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.log_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.log(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.log10_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.log10(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.round_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.rint(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.signum_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.sign(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.sin_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.sin(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.sinh(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.sqrt(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.tan_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.tan(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return Math.tanh(p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians_BANG_["object"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32175__32176__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32175__32176__auto__);
}));
}));

(clojure.core.matrix.protocols.PMathsFunctionsMutable["array"] = true);

(clojure.core.matrix.protocols.abs_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.abs(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.acos_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.acos(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.asin_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.asin(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.atan_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.atan(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.cbrt_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.cbrt(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.ceil_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.ceil(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.cos_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.cos(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.cosh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.cosh(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.exp_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.exp(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.floor_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.floor(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.log_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.log(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.log10_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.log10(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.round_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.rint(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.signum_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.sign(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.sin_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.sin(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.sinh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.sinh(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.sqrt_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.sqrt(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.tan_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.tan(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.tanh_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return Math.tanh(p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.to_degrees_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return clojure.core.matrix.impl.mathsops.to_degrees_STAR_.call(null,p1__32177__32178__auto__);
}));
}));

(clojure.core.matrix.protocols.to_radians_BANG_["array"] = (function (m){
return clojure.core.matrix.protocols.element_map_BANG_.call(null,m,(function (p1__32177__32178__auto__){
return clojure.core.matrix.impl.mathsops.to_radians_STAR_.call(null,p1__32177__32178__auto__);
}));
}));
(clojure.core.matrix.protocols.PMatrixSubComponents["object"] = true);

(clojure.core.matrix.protocols.main_diagonal["object"] = (function (m){
var sh = clojure.core.matrix.protocols.get_shape.call(null,m);
var rank = cljs.core.count.call(null,sh);
var dims = cljs.core.apply.call(null,cljs.core.min,sh);
var diag_vals = (function (){var iter__19498__auto__ = ((function (sh,rank,dims){
return (function clojure$core$matrix$impl$defaults$iter__33705(s__33706){
return (new cljs.core.LazySeq(null,((function (sh,rank,dims){
return (function (){
var s__33706__$1 = s__33706;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33706__$1);
if(temp__4657__auto__){
var s__33706__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33706__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33706__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33708 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33707 = (0);
while(true){
if((i__33707 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__33707);
cljs.core.chunk_append.call(null,b__33708,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)));

var G__33711 = (i__33707 + (1));
i__33707 = G__33711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33708),clojure$core$matrix$impl$defaults$iter__33705.call(null,cljs.core.chunk_rest.call(null,s__33706__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33708),null);
}
} else {
var i = cljs.core.first.call(null,s__33706__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.repeat.call(null,rank,i)),clojure$core$matrix$impl$defaults$iter__33705.call(null,cljs.core.rest.call(null,s__33706__$2)));
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
return (function clojure$core$matrix$impl$defaults$iter__33712(s__33713){
return (new cljs.core.LazySeq(null,((function (dims,diagonal_values__$1,zs){
return (function (){
var s__33713__$1 = s__33713;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33713__$1);
if(temp__4657__auto__){
var s__33713__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33713__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33713__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33715 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33714 = (0);
while(true){
if((i__33714 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__33714);
cljs.core.chunk_append.call(null,b__33715,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)));

var G__33716 = (i__33714 + (1));
i__33714 = G__33716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33715),clojure$core$matrix$impl$defaults$iter__33712.call(null,cljs.core.chunk_rest.call(null,s__33713__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33715),null);
}
} else {
var i = cljs.core.first.call(null,s__33713__$2);
return cljs.core.cons.call(null,cljs.core.assoc.call(null,zs,i,cljs.core.nth.call(null,diagonal_values__$1,i)),clojure$core$matrix$impl$defaults$iter__33712.call(null,cljs.core.rest.call(null,s__33713__$2)));
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
var n__19629__auto___33718 = n;
var i_33720 = (0);
while(true){
if((i_33720 < n__19629__auto___33718)){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,r__$1,i_33720,v.call(null,i_33720),1.0);

var G__33723 = (i_33720 + (1));
i_33720 = G__33723;
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
return (function clojure$core$matrix$impl$defaults$aux_$_iter__33730(s__33731){
return (new cljs.core.LazySeq(null,((function (acc_dim,new_block,new_block_dim,new_dim){
return (function (){
var s__33731__$1 = s__33731;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33731__$1);
if(temp__4657__auto__){
var s__33731__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33731__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33731__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33733 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33732 = (0);
while(true){
if((i__33732 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__33732);
cljs.core.chunk_append.call(null,b__33733,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))));

var G__33734 = (i__33732 + (1));
i__33732 = G__33734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33733),clojure$core$matrix$impl$defaults$aux_$_iter__33730.call(null,cljs.core.chunk_rest.call(null,s__33731__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33733),null);
}
} else {
var i = cljs.core.first.call(null,s__33731__$2);
return cljs.core.cons.call(null,(((i < acc_dim))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,acc.call(null,i),clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,new_block_dim))):cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,acc_dim),new_block.call(null,(i - acc_dim))))),clojure$core$matrix$impl$defaults$aux_$_iter__33730.call(null,cljs.core.rest.call(null,s__33731__$2)));
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
var G__33740 = (j + (1));
j = G__33740;
continue;
} else {
return false;
}
} else {
if((elem === (0))){
var G__33743 = (j + (1));
j = G__33743;
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
var G__33745 = (i + (1));
i = G__33745;
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
return cljs.core.every_QMARK_.call(null,(function (p1__33735_SHARP_){
return (typeof p1__33735_SHARP_ === 'number') && ((p1__33735_SHARP_ === (0)));
}),clojure.core.matrix.protocols.element_seq.call(null,m));
}));

(clojure.core.matrix.protocols.symmetric_QMARK_["object"] = (function (m){
var G__33736 = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
switch (G__33736) {
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
var vals = cljs.core.map.call(null,(function (p1__33747_SHARP_){
return clojure.core.matrix.protocols.get_nd.call(null,a,p1__33747_SHARP_);
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
var G__33755 = indices__$1;
var vec__33757 = G__33755;
var id = cljs.core.nth.call(null,vec__33757,(0),null);
var idx = cljs.core.nthnext.call(null,vec__33757,(1));
var G__33756 = values__$1;
var vec__33758 = G__33756;
var v = cljs.core.nth.call(null,vec__33758,(0),null);
var vs = cljs.core.nthnext.call(null,vec__33758,(1));
var a__$2 = a__$1;
var G__33755__$1 = G__33755;
var G__33756__$1 = G__33756;
while(true){
var a__$3 = a__$2;
var vec__33759 = G__33755__$1;
var id__$1 = cljs.core.nth.call(null,vec__33759,(0),null);
var idx__$1 = cljs.core.nthnext.call(null,vec__33759,(1));
var vec__33760 = G__33756__$1;
var v__$1 = cljs.core.nth.call(null,vec__33760,(0),null);
var vs__$1 = cljs.core.nthnext.call(null,vec__33760,(1));
if(cljs.core.truth_(id__$1)){
var G__33772 = clojure.core.matrix.protocols.set_nd.call(null,a__$3,id__$1,v__$1);
var G__33773 = idx__$1;
var G__33774 = vs__$1;
a__$2 = G__33772;
G__33755__$1 = G__33773;
G__33756__$1 = G__33774;
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
var G__33763 = indices__$1;
var vec__33765 = G__33763;
var id = cljs.core.nth.call(null,vec__33765,(0),null);
var idx = cljs.core.nthnext.call(null,vec__33765,(1));
var G__33764 = values__$1;
var vec__33766 = G__33764;
var v = cljs.core.nth.call(null,vec__33766,(0),null);
var vs = cljs.core.nthnext.call(null,vec__33766,(1));
var G__33763__$1 = G__33763;
var G__33764__$1 = G__33764;
while(true){
var vec__33767 = G__33763__$1;
var id__$1 = cljs.core.nth.call(null,vec__33767,(0),null);
var idx__$1 = cljs.core.nthnext.call(null,vec__33767,(1));
var vec__33768 = G__33764__$1;
var v__$1 = cljs.core.nth.call(null,vec__33768,(0),null);
var vs__$1 = cljs.core.nthnext.call(null,vec__33768,(1));
if(cljs.core.truth_(id__$1)){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,a,id__$1,v__$1);

var G__33775 = idx__$1;
var G__33776 = vs__$1;
G__33763__$1 = G__33775;
G__33764__$1 = G__33776;
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
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$iter__33779(s__33780){
return (new cljs.core.LazySeq(null,(function (){
var s__33780__$1 = s__33780;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33780__$1);
if(temp__4657__auto__){
var s__33780__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33780__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33780__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33782 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33781 = (0);
while(true){
if((i__33781 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__33781);
if(!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0)))){
cljs.core.chunk_append.call(null,b__33782,i);

var G__33812 = (i__33781 + (1));
i__33781 = G__33812;
continue;
} else {
var G__33813 = (i__33781 + (1));
i__33781 = G__33813;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33782),clojure$core$matrix$impl$defaults$iter__33779.call(null,cljs.core.chunk_rest.call(null,s__33780__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33782),null);
}
} else {
var i = cljs.core.first.call(null,s__33780__$2);
if(!((clojure.core.matrix.protocols.get_1d.call(null,m,i) === (0)))){
return cljs.core.cons.call(null,i,clojure$core$matrix$impl$defaults$iter__33779.call(null,cljs.core.rest.call(null,s__33780__$2)));
} else {
var G__33814 = cljs.core.rest.call(null,s__33780__$2);
s__33780__$1 = G__33814;
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
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$iter__33791(s__33792){
return (new cljs.core.LazySeq(null,(function (){
var s__33792__$1 = s__33792;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33792__$1);
if(temp__4657__auto__){
var s__33792__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33792__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33792__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33794 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33793 = (0);
while(true){
if((i__33793 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__33793);
cljs.core.chunk_append.call(null,b__33794,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)));

var G__33815 = (i__33793 + (1));
i__33793 = G__33815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33794),clojure$core$matrix$impl$defaults$iter__33791.call(null,cljs.core.chunk_rest.call(null,s__33792__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33794),null);
}
} else {
var i = cljs.core.first.call(null,s__33792__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.non_zero_indices.call(null,clojure.core.matrix.protocols.get_major_slice.call(null,m,i)),clojure$core$matrix$impl$defaults$iter__33791.call(null,cljs.core.rest.call(null,s__33792__$2)));
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
var vec__33820 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__33820,(0),null);
var mcols = cljs.core.nth.call(null,vec__33820,(1),null);
return cljs.core.every_QMARK_.call(null,((function (vec__33820,mrows,mcols){
return (function (p__33821){
var vec__33822 = p__33821;
var i = cljs.core.nth.call(null,vec__33822,(0),null);
var j = cljs.core.nth.call(null,vec__33822,(1),null);
var v = cljs.core.nth.call(null,vec__33822,(2),null);
if(cljs.core._EQ_.call(null,i,j)){
return true;
} else {
if((cljs.core.not_EQ_.call(null,i,j)) && ((v === (0)))){
return true;
} else {
return false;

}
}
});})(vec__33820,mrows,mcols))
,cljs.core.map.call(null,((function (vec__33820,mrows,mcols){
return (function (i,elem){
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.quot.call(null,i,mcols),cljs.core.rem.call(null,i,mcols),elem],null));
});})(vec__33820,mrows,mcols))
,cljs.core.range.call(null,(mrows * mcols)),clojure.core.matrix.protocols.element_seq.call(null,m)));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.upper_triangular_QMARK_["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.impl.common.square_QMARK_.call(null,m))){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__33823){
var vec__33824 = p__33823;
var idx = cljs.core.nth.call(null,vec__33824,(0),null);
var xs = cljs.core.nth.call(null,vec__33824,(1),null);
return cljs.core.take.call(null,idx,xs);
}),cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),clojure.core.matrix.protocols.get_slice_seq.call(null,m,(0)))));
} else {
return false;
}
}));

(clojure.core.matrix.protocols.lower_triangular_QMARK_["object"] = (function (m){
if(cljs.core.truth_(clojure.core.matrix.impl.common.square_QMARK_.call(null,m))){
return cljs.core.every_QMARK_.call(null,cljs.core.zero_QMARK_,cljs.core.mapcat.call(null,(function (p__33825){
var vec__33826 = p__33825;
var idx = cljs.core.nth.call(null,vec__33826,(0),null);
var xs = cljs.core.nth.call(null,vec__33826,(1),null);
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
var iter__19498__auto__ = (function clojure$core$matrix$impl$defaults$area_indices_$_iter__33841(s__33842){
return (new cljs.core.LazySeq(null,(function (){
var s__33842__$1 = s__33842;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__33842__$1);
if(temp__4657__auto__){
var xs__5205__auto__ = temp__4657__auto__;
var a = cljs.core.first.call(null,xs__5205__auto__);
var iterys__19494__auto__ = ((function (s__33842__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function clojure$core$matrix$impl$defaults$area_indices_$_iter__33841_$_iter__33843(s__33844){
return (new cljs.core.LazySeq(null,((function (s__33842__$1,a,xs__5205__auto__,temp__4657__auto__){
return (function (){
var s__33844__$1 = s__33844;
while(true){
var temp__4657__auto____$1 = cljs.core.seq.call(null,s__33844__$1);
if(temp__4657__auto____$1){
var s__33844__$2 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33844__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__33844__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__33846 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__33845 = (0);
while(true){
if((i__33845 < size__19497__auto__)){
var b = cljs.core._nth.call(null,c__19496__auto__,i__33845);
cljs.core.chunk_append.call(null,b__33846,cljs.core.cons.call(null,a,b));

var G__33847 = (i__33845 + (1));
i__33845 = G__33847;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33846),clojure$core$matrix$impl$defaults$area_indices_$_iter__33841_$_iter__33843.call(null,cljs.core.chunk_rest.call(null,s__33844__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33846),null);
}
} else {
var b = cljs.core.first.call(null,s__33844__$2);
return cljs.core.cons.call(null,cljs.core.cons.call(null,a,b),clojure$core$matrix$impl$defaults$area_indices_$_iter__33841_$_iter__33843.call(null,cljs.core.rest.call(null,s__33844__$2)));
}
} else {
return null;
}
break;
}
});})(s__33842__$1,a,xs__5205__auto__,temp__4657__auto__))
,null,null));
});})(s__33842__$1,a,xs__5205__auto__,temp__4657__auto__))
;
var fs__19495__auto__ = cljs.core.seq.call(null,iterys__19494__auto__.call(null,io));
if(fs__19495__auto__){
return cljs.core.concat.call(null,fs__19495__auto__,clojure$core$matrix$impl$defaults$area_indices_$_iter__33841.call(null,cljs.core.rest.call(null,s__33842__$1)));
} else {
var G__33850 = cljs.core.rest.call(null,s__33842__$1);
s__33842__$1 = G__33850;
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
var i_33877 = (min_len__$1 - (1));
while(true){
if((i_33877 > (-1))){
var gamma_33878 = (gammas[i_33877]);
(us[i_33877] = 1.0);

var j_33879 = (i_33877 + (1));
while(true){
if((j_33879 < mrows__$1)){
(us[j_33879] = (qr_data[((j_33879 * mcols__$1) + i_33877)]));

var G__33880 = (j_33879 + (1));
j_33879 = G__33880;
continue;
} else {
}
break;
}


var j_33881 = i_33877;
while(true){
if((j_33881 < mrows__$1)){
(vs[j_33881] = ((us[i_33877]) * (q[((i_33877 * mrows__$1) + j_33881)])));

var G__33882 = (j_33881 + (1));
j_33881 = G__33882;
continue;
} else {
}
break;
}


var j_33883 = (i_33877 + (1));
while(true){
if((j_33883 < mrows__$1)){
var u_33884 = (us[j_33883]);
var k_33885 = i_33877;
while(true){
if((k_33885 < mrows__$1)){
var q_idx_33886 = (((j_33883 * mrows__$1) + i_33877) + (k_33885 - i_33877));
(vs[k_33885] = ((vs[k_33885]) + (u_33884 * (q[q_idx_33886]))));

var G__33887 = (k_33885 + (1));
k_33885 = G__33887;
continue;
} else {
}
break;
}


var G__33888 = (j_33883 + (1));
j_33883 = G__33888;
continue;
} else {
}
break;
}


var j_33889 = i_33877;
while(true){
if((j_33889 < mrows__$1)){
(vs[j_33889] = ((vs[j_33889]) * gamma_33878));

var G__33890 = (j_33889 + (1));
j_33889 = G__33890;
continue;
} else {
}
break;
}


var j_33891 = i_33877;
while(true){
if((j_33891 < mrows__$1)){
var u_33892 = (us[j_33891]);
var k_33893 = i_33877;
while(true){
if((k_33893 < mrows__$1)){
var qr_idx_33894 = (((j_33891 * mrows__$1) + i_33877) + (k_33893 - i_33877));
(q[qr_idx_33894] = ((q[qr_idx_33894]) - (u_33892 * (vs[k_33893]))));

var G__33895 = (k_33893 + (1));
k_33893 = G__33895;
continue;
} else {
}
break;
}


var G__33896 = (j_33891 + (1));
j_33891 = G__33896;
continue;
} else {
}
break;
}


var G__33897 = (i_33877 - (1));
i_33877 = G__33897;
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
var qr_idx_33901 = cljs.core.long$.call(null,(idx__$1 + (idx__$1 * mcols__$1)));
var i_33902 = cljs.core.long$.call(null,idx__$1);
while(true){
if((i_33902 < mrows__$1)){
(us[i_33902] = (qr_data[qr_idx_33901]));

var G__33904 = (qr_idx_33901 + mcols__$1);
var G__33905 = (i_33902 + (1));
qr_idx_33901 = G__33904;
i_33902 = G__33905;
continue;
} else {
}
break;
}

var max_ = cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,((function (idx__$1,mcols__$1,mrows__$1){
return (function (p1__33898_SHARP_){
return Math.abs(p1__33898_SHARP_);
});})(idx__$1,mcols__$1,mrows__$1))
,clojure.core.matrix.protocols.subvector.call(null,us,idx__$1,(mrows__$1 - idx__$1))));
if(cljs.core._EQ_.call(null,max_,0.0)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null);
} else {
var _ = (function (){
var i_33910 = idx__$1;
while(true){
if((i_33910 < mrows__$1)){
(us[i_33910] = ((us[i_33910]) / max_));

var G__33911 = (i_33910 + (1));
i_33910 = G__33911;
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

var i_33915 = (idx__$1 + (1));
while(true){
if((i_33915 < mrows__$1)){
(us[i_33915] = ((us[i_33915]) / u_0));

var G__33918 = (i_33915 + (1));
i_33915 = G__33918;
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
var i_33931 = idx_PLUS_1;
while(true){
if((i_33931 < mcols__$1)){
(vs[i_33931] = (qr_data[(i_33931 + (idx__$1 * mcols__$1))]));

var G__33932 = (i_33931 + (1));
i_33931 = G__33932;
continue;
} else {
}
break;
}


var i_33934 = idx_PLUS_1;
while(true){
if((i_33934 < mrows__$1)){
var qr_idx_33936 = (idx_PLUS_1 + (i_33934 * mcols__$1));
var j_33938 = idx_PLUS_1;
while(true){
if((j_33938 < mcols__$1)){
(vs[j_33938] = ((vs[j_33938]) + ((us[i_33934]) * (qr_data[(qr_idx_33936 + (j_33938 - idx_PLUS_1))]))));

var G__33940 = (j_33938 + (1));
j_33938 = G__33940;
continue;
} else {
}
break;
}


var G__33941 = (i_33934 + (1));
i_33934 = G__33941;
continue;
} else {
}
break;
}


var i_33942 = idx_PLUS_1;
while(true){
if((i_33942 < mcols__$1)){
(vs[i_33942] = ((vs[i_33942]) * gamma__$1));

var G__33943 = (i_33942 + (1));
i_33942 = G__33943;
continue;
} else {
}
break;
}


var i_33944 = idx__$1;
while(true){
if((i_33944 < mrows__$1)){
var u_33945__$1 = (us[i_33944]);
var j_33946 = idx_PLUS_1;
while(true){
if((j_33946 < mcols__$1)){
var qr_idx_33947 = (((i_33944 * mcols__$1) + idx_PLUS_1) + (j_33946 - idx_PLUS_1));
(qr_data[qr_idx_33947] = ((qr_data[qr_idx_33947]) - (u_33945__$1 * (vs[j_33946]))));

var G__33948 = (j_33946 + (1));
j_33946 = G__33948;
continue;
} else {
}
break;
}


var G__33949 = (i_33944 + (1));
i_33944 = G__33949;
continue;
} else {
}
break;
}


if((idx__$1 < mcols__$1)){
(qr_data[(idx__$1 + (idx__$1 * mcols__$1))] = (- tau__$1));
} else {
}

var i_33950 = idx_PLUS_1;
while(true){
if((i_33950 < mrows__$1)){
(qr_data[(idx__$1 + (i_33950 * mcols__$1))] = (us[i_33950]));

var G__33951 = (i_33950 + (1));
i_33950 = G__33951;
continue;
} else {
}
break;
}


return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"qr-data","qr-data",-504970292),qr_data,new cljs.core.Keyword(null,"vs","vs",-2022097090),vs], null);
});
(clojure.core.matrix.protocols.PQRDecomposition["object"] = true);

(clojure.core.matrix.protocols.qr["object"] = (function (m,options){
var vec__33952 = clojure.core.matrix.protocols.get_shape.call(null,m);
var mrows = cljs.core.nth.call(null,vec__33952,(0),null);
var mcols = cljs.core.nth.call(null,vec__33952,(1),null);
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
var map__33953 = clojure.core.matrix.impl.defaults.householder_qr.call(null,qr_data,i,mcols__$1,mrows__$1,us,gammas);
var map__33953__$1 = ((((!((map__33953 == null)))?((((map__33953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33953):map__33953);
var us__$1 = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"us","us",746429226));
var gamma__$1 = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"gamma","gamma",1883969687));
var gammas__$1 = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"gammas","gammas",-195052461));
var tau__$1 = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"tau","tau",89782904));
var error = cljs.core.get.call(null,map__33953__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return null;
} else {
var map__33955 = clojure.core.matrix.impl.defaults.update_qr.call(null,qr_data,i,mcols__$1,mrows__$1,vs,us__$1,gamma__$1,tau__$1);
var map__33955__$1 = ((((!((map__33955 == null)))?((((map__33955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33955):map__33955);
var qr_data__$1 = cljs.core.get.call(null,map__33955__$1,new cljs.core.Keyword(null,"qr-data","qr-data",-504970292));
var vs__$1 = cljs.core.get.call(null,map__33955__$1,new cljs.core.Keyword(null,"vs","vs",-2022097090));
var G__33959 = qr_data__$1;
var G__33960 = vs__$1;
var G__33961 = us__$1;
var G__33962 = gammas__$1;
var G__33963 = gamma__$1;
var G__33964 = tau__$1;
var G__33965 = (i + (1));
qr_data = G__33959;
vs = G__33960;
us = G__33961;
gammas = G__33962;
gamma = G__33963;
tau = G__33964;
i = G__33965;
continue;
}
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33952,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (p__33957){
var vec__33958 = p__33957;
var k = cljs.core.nth.call(null,vec__33958,(0),null);
var v = cljs.core.nth.call(null,vec__33958,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v.call(null)], null);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33952,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,cljs.core.select_keys.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"Q","Q",663320520),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33952,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_q.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,us,vs,gammas);
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33952,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
,new cljs.core.Keyword(null,"R","R",-936662523),((function (qr_data,vs,us,gammas,gamma,tau,i,vec__33952,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len){
return (function (){
return clojure.core.matrix.impl.defaults.compute_r.call(null,m,qr_data,mcols__$1,mrows__$1,min_len,new cljs.core.Keyword(null,"compact","compact",-348732150).cljs$core$IFn$_invoke$arity$1(options));
});})(qr_data,vs,us,gammas,gamma,tau,i,vec__33952,mrows,mcols,mrows__$1,mcols__$1,min_len,max_len))
], null),new cljs.core.Keyword(null,"return","return",-1891502105).cljs$core$IFn$_invoke$arity$1(options))));
}
break;
}
}));
(clojure.core.matrix.protocols.PCholeskyDecomposition["object"] = true);

(clojure.core.matrix.protocols.cholesky["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33966 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22412__auto__,m);
return clojure.core.matrix.protocols.cholesky.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33966;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PLUDecomposition["object"] = true);

(clojure.core.matrix.protocols.lu["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33967 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22412__auto__,m);
return clojure.core.matrix.protocols.lu.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33967;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PSVDDecomposition["object"] = true);

(clojure.core.matrix.protocols.svd["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33968 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22412__auto__,m);
return clojure.core.matrix.protocols.svd.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33968;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PEigenDecomposition["object"] = true);

(clojure.core.matrix.protocols.eigen["object"] = (function (m,options){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33969 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var m__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22412__auto__,m);
return clojure.core.matrix.protocols.eigen.call(null,m__$1,options);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33969;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PSolveLinear["object"] = true);

(clojure.core.matrix.protocols.solve["object"] = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33970 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22412__auto__,a);
return clojure.core.matrix.protocols.solve.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33970;
}} else {
return null;
}
}));
(clojure.core.matrix.protocols.PLeastSquares["object"] = true);

(clojure.core.matrix.protocols.least_squares["object"] = (function (a,b){
if(cljs.core.truth_(clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_)){
var _STAR_trying_current_implementation_STAR_33971 = clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_;
clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = true;

try{var imp__22412__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null);
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,imp__22412__auto__,a);
return clojure.core.matrix.protocols.least_squares.call(null,a__$1,b);
}finally {clojure.core.matrix.impl.defaults._STAR_trying_current_implementation_STAR_ = _STAR_trying_current_implementation_STAR_33971;
}} else {
return null;
}
}));

//# sourceMappingURL=defaults.js.map