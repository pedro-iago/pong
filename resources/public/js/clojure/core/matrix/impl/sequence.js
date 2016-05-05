// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.impl.sequence');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"sequence","sequence",926807414);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Core.matrix implementation for Clojure ISeq objects"], null);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var x__21106__auto__ = cljs.core.nth.call(null,m__$1,x);
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,x);
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__4655__auto__ = cljs.core.seq.call(null,indexes);
if(temp__4655__auto__){
var indexes__$1 = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__4655__auto____$1){
var next_indexes = temp__4655__auto____$1;
var mv = cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes__$1));
return clojure.core.matrix.protocols.get_nd.call(null,mv,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,cljs.core.first.call(null,indexes__$1));
}
} else {
return m__$1;
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),row,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),row,column,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),indexes,v);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,new_shape){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m__$1),new_shape);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,m__$1);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_,m__$1);
return clojure.core.matrix.protocols.get_columns.call(null,m__$2);
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PSliceSeq2$get_slice_seq$arity$2 = (function (m,dimension){
var m__$1 = this;
var ldimension = cljs.core.long$.call(null,dimension);
if((ldimension === (0))){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1);
} else {
if((ldimension < (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get slices of a negative dimension: "),cljs.core.str(dimension)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.mapv.call(null,((function (ldimension,m__$1){
return (function (p1__35806_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,p1__35806_SHARP_);
});})(ldimension,m__$1))
,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,dimension)));

}
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if((clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) > (0))){
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
} else {
return cljs.core.vec.call(null,m__$1);
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
return (clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)) + (1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return ((0) === clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
console.log([cljs.core.str("shape of seq: "),cljs.core.str(m__$1)].join(''));

return cljs.core.cons.call(null,cljs.core.count.call(null,m__$1),clojure.core.matrix.protocols.get_shape.call(null,cljs.core.first.call(null,m__$1)));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
if((x === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.first.call(null,m__$1),(x - (1)));
}
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.first.call(null,m__$1))))){
return m__$1;
} else {
return cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1);
}
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__35811_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__35811_SHARP_,f);
});})(m__$1))
,m__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__35819 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__35819,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35819,(1),null);
return cljs.core.mapv.call(null,((function (vec__35819,m__$2,a__$1,m__$1){
return (function (p1__35812_SHARP_,p2__35813_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__35812_SHARP_,f,p2__35813_SHARP_);
});})(vec__35819,m__$2,a__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var vec__35820 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,m__$1,a,more);
var m__$2 = cljs.core.nth.call(null,vec__35820,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__35820,(1),null);
var more__$1 = cljs.core.nthnext.call(null,vec__35820,(2));
return cljs.core.mapv.call(null,((function (vec__35820,m__$2,a__$1,more__$1,m__$1){
return (function (p1__35815_SHARP_,p2__35816_SHARP_,p3__35817_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__35815_SHARP_,f,p2__35816_SHARP_,p3__35817_SHARP_);
});})(vec__35820,m__$2,a__$1,more__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Sequence arrays are not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Sequence arrays are not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Sequence arrays are not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,cljs.core.mapcat.call(null,clojure.core.matrix.protocols.element_seq,m__$1));
});
cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$ = true;

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
return cljs.core.mapv.call(null,((function (ms__$1){
return (function (i,m){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__35849__delegate = function (p1__35832_SHARP_,rest__35833_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__35832_SHARP_),rest__35833_SHARP_);
};
var G__35849 = function (p1__35832_SHARP_,var_args){
var rest__35833_SHARP_ = null;
if (arguments.length > 1) {
var G__35850__i = 0, G__35850__a = new Array(arguments.length -  1);
while (G__35850__i < G__35850__a.length) {G__35850__a[G__35850__i] = arguments[G__35850__i + 1]; ++G__35850__i;}
  rest__35833_SHARP_ = new cljs.core.IndexedSeq(G__35850__a,0);
} 
return G__35849__delegate.call(this,p1__35832_SHARP_,rest__35833_SHARP_);};
G__35849.cljs$lang$maxFixedArity = 1;
G__35849.cljs$lang$applyTo = (function (arglist__35851){
var p1__35832_SHARP_ = cljs.core.first(arglist__35851);
var rest__35833_SHARP_ = cljs.core.rest(arglist__35851);
return G__35849__delegate(p1__35832_SHARP_,rest__35833_SHARP_);
});
G__35849.cljs$core$IFn$_invoke$arity$variadic = G__35849__delegate;
return G__35849;
})()
;})(ms__$1))
);
});})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var vec__35845 = clojure.core.matrix.protocols.broadcast_compatible.call(null,ms__$1,as);
var ms__$2 = cljs.core.nth.call(null,vec__35845,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__35845,(1),null);
return cljs.core.mapv.call(null,((function (vec__35845,ms__$2,as__$1,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__35845,ms__$2,as__$1,ms__$1){
return (function() { 
var G__35852__delegate = function (p1__35834_SHARP_,rest__35835_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__35834_SHARP_),rest__35835_SHARP_);
};
var G__35852 = function (p1__35834_SHARP_,var_args){
var rest__35835_SHARP_ = null;
if (arguments.length > 1) {
var G__35853__i = 0, G__35853__a = new Array(arguments.length -  1);
while (G__35853__i < G__35853__a.length) {G__35853__a[G__35853__i] = arguments[G__35853__i + 1]; ++G__35853__i;}
  rest__35835_SHARP_ = new cljs.core.IndexedSeq(G__35853__a,0);
} 
return G__35852__delegate.call(this,p1__35834_SHARP_,rest__35835_SHARP_);};
G__35852.cljs$lang$maxFixedArity = 1;
G__35852.cljs$lang$applyTo = (function (arglist__35854){
var p1__35834_SHARP_ = cljs.core.first(arglist__35854);
var rest__35835_SHARP_ = cljs.core.rest(arglist__35854);
return G__35852__delegate(p1__35834_SHARP_,rest__35835_SHARP_);
});
G__35852.cljs$core$IFn$_invoke$arity$variadic = G__35852__delegate;
return G__35852;
})()
;})(vec__35845,ms__$2,as__$1,ms__$1))
,a);
});})(vec__35845,ms__$2,as__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
var vec__35847 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,ms__$1,as,more);
var ms__$2 = cljs.core.nth.call(null,vec__35847,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__35847,(1),null);
var more__$1 = cljs.core.nthnext.call(null,vec__35847,(2));
return cljs.core.mapv.call(null,((function (vec__35847,ms__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__35857__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__35847,ms__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__35861__delegate = function (p1__35836_SHARP_,rest__35837_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__35836_SHARP_),rest__35837_SHARP_);
};
var G__35861 = function (p1__35836_SHARP_,var_args){
var rest__35837_SHARP_ = null;
if (arguments.length > 1) {
var G__35863__i = 0, G__35863__a = new Array(arguments.length -  1);
while (G__35863__i < G__35863__a.length) {G__35863__a[G__35863__i] = arguments[G__35863__i + 1]; ++G__35863__i;}
  rest__35837_SHARP_ = new cljs.core.IndexedSeq(G__35863__a,0);
} 
return G__35861__delegate.call(this,p1__35836_SHARP_,rest__35837_SHARP_);};
G__35861.cljs$lang$maxFixedArity = 1;
G__35861.cljs$lang$applyTo = (function (arglist__35864){
var p1__35836_SHARP_ = cljs.core.first(arglist__35864);
var rest__35837_SHARP_ = cljs.core.rest(arglist__35864);
return G__35861__delegate(p1__35836_SHARP_,rest__35837_SHARP_);
});
G__35861.cljs$core$IFn$_invoke$arity$variadic = G__35861__delegate;
return G__35861;
})()
;})(vec__35847,ms__$2,as__$1,more__$1,ms__$1))
,a,mr);
};
var G__35857 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__35866__i = 0, G__35866__a = new Array(arguments.length -  3);
while (G__35866__i < G__35866__a.length) {G__35866__a[G__35866__i] = arguments[G__35866__i + 3]; ++G__35866__i;}
  mr = new cljs.core.IndexedSeq(G__35866__a,0);
} 
return G__35857__delegate.call(this,i,m,a,mr);};
G__35857.cljs$lang$maxFixedArity = 3;
G__35857.cljs$lang$applyTo = (function (arglist__35870){
var i = cljs.core.first(arglist__35870);
arglist__35870 = cljs.core.next(arglist__35870);
var m = cljs.core.first(arglist__35870);
arglist__35870 = cljs.core.next(arglist__35870);
var a = cljs.core.first(arglist__35870);
var mr = cljs.core.rest(arglist__35870);
return G__35857__delegate(i,m,a,mr);
});
G__35857.cljs$core$IFn$_invoke$arity$variadic = G__35857__delegate;
return G__35857;
})()
;})(vec__35847,ms__$2,as__$1,more__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Sequence arrays are not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Sequence arrays are not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Sequence arrays are not mutable!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=sequence.js.map