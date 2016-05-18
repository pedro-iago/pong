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
var x__19974__auto__ = cljs.core.nth.call(null,m__$1,x);
if(typeof x__19974__auto__ === 'number'){
return x__19974__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__19974__auto__);

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
return (function (p1__22429_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,p1__22429_SHARP_);
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
return (function (p1__22461_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__22461_SHARP_,f);
});})(m__$1))
,m__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__22471 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__22471,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__22471,(1),null);
return cljs.core.mapv.call(null,((function (vec__22471,m__$2,a__$1,m__$1){
return (function (p1__22462_SHARP_,p2__22463_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__22462_SHARP_,f,p2__22463_SHARP_);
});})(vec__22471,m__$2,a__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var vec__22473 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,m__$1,a,more);
var m__$2 = cljs.core.nth.call(null,vec__22473,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__22473,(1),null);
var more__$1 = cljs.core.nthnext.call(null,vec__22473,(2));
return cljs.core.mapv.call(null,((function (vec__22473,m__$2,a__$1,more__$1,m__$1){
return (function (p1__22464_SHARP_,p2__22465_SHARP_,p3__22466_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__22464_SHARP_,f,p2__22465_SHARP_,p3__22466_SHARP_);
});})(vec__22473,m__$2,a__$1,more__$1,m__$1))
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
var G__22519__delegate = function (p1__22482_SHARP_,rest__22484_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__22482_SHARP_),rest__22484_SHARP_);
};
var G__22519 = function (p1__22482_SHARP_,var_args){
var rest__22484_SHARP_ = null;
if (arguments.length > 1) {
var G__22521__i = 0, G__22521__a = new Array(arguments.length -  1);
while (G__22521__i < G__22521__a.length) {G__22521__a[G__22521__i] = arguments[G__22521__i + 1]; ++G__22521__i;}
  rest__22484_SHARP_ = new cljs.core.IndexedSeq(G__22521__a,0);
} 
return G__22519__delegate.call(this,p1__22482_SHARP_,rest__22484_SHARP_);};
G__22519.cljs$lang$maxFixedArity = 1;
G__22519.cljs$lang$applyTo = (function (arglist__22522){
var p1__22482_SHARP_ = cljs.core.first(arglist__22522);
var rest__22484_SHARP_ = cljs.core.rest(arglist__22522);
return G__22519__delegate(p1__22482_SHARP_,rest__22484_SHARP_);
});
G__22519.cljs$core$IFn$_invoke$arity$variadic = G__22519__delegate;
return G__22519;
})()
;})(ms__$1))
);
});})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var vec__22513 = clojure.core.matrix.protocols.broadcast_compatible.call(null,ms__$1,as);
var ms__$2 = cljs.core.nth.call(null,vec__22513,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__22513,(1),null);
return cljs.core.mapv.call(null,((function (vec__22513,ms__$2,as__$1,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__22513,ms__$2,as__$1,ms__$1){
return (function() { 
var G__22527__delegate = function (p1__22486_SHARP_,rest__22487_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__22486_SHARP_),rest__22487_SHARP_);
};
var G__22527 = function (p1__22486_SHARP_,var_args){
var rest__22487_SHARP_ = null;
if (arguments.length > 1) {
var G__22529__i = 0, G__22529__a = new Array(arguments.length -  1);
while (G__22529__i < G__22529__a.length) {G__22529__a[G__22529__i] = arguments[G__22529__i + 1]; ++G__22529__i;}
  rest__22487_SHARP_ = new cljs.core.IndexedSeq(G__22529__a,0);
} 
return G__22527__delegate.call(this,p1__22486_SHARP_,rest__22487_SHARP_);};
G__22527.cljs$lang$maxFixedArity = 1;
G__22527.cljs$lang$applyTo = (function (arglist__22530){
var p1__22486_SHARP_ = cljs.core.first(arglist__22530);
var rest__22487_SHARP_ = cljs.core.rest(arglist__22530);
return G__22527__delegate(p1__22486_SHARP_,rest__22487_SHARP_);
});
G__22527.cljs$core$IFn$_invoke$arity$variadic = G__22527__delegate;
return G__22527;
})()
;})(vec__22513,ms__$2,as__$1,ms__$1))
,a);
});})(vec__22513,ms__$2,as__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
var vec__22516 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,ms__$1,as,more);
var ms__$2 = cljs.core.nth.call(null,vec__22516,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__22516,(1),null);
var more__$1 = cljs.core.nthnext.call(null,vec__22516,(2));
return cljs.core.mapv.call(null,((function (vec__22516,ms__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__22533__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__22516,ms__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__22534__delegate = function (p1__22489_SHARP_,rest__22490_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__22489_SHARP_),rest__22490_SHARP_);
};
var G__22534 = function (p1__22489_SHARP_,var_args){
var rest__22490_SHARP_ = null;
if (arguments.length > 1) {
var G__22549__i = 0, G__22549__a = new Array(arguments.length -  1);
while (G__22549__i < G__22549__a.length) {G__22549__a[G__22549__i] = arguments[G__22549__i + 1]; ++G__22549__i;}
  rest__22490_SHARP_ = new cljs.core.IndexedSeq(G__22549__a,0);
} 
return G__22534__delegate.call(this,p1__22489_SHARP_,rest__22490_SHARP_);};
G__22534.cljs$lang$maxFixedArity = 1;
G__22534.cljs$lang$applyTo = (function (arglist__22550){
var p1__22489_SHARP_ = cljs.core.first(arglist__22550);
var rest__22490_SHARP_ = cljs.core.rest(arglist__22550);
return G__22534__delegate(p1__22489_SHARP_,rest__22490_SHARP_);
});
G__22534.cljs$core$IFn$_invoke$arity$variadic = G__22534__delegate;
return G__22534;
})()
;})(vec__22516,ms__$2,as__$1,more__$1,ms__$1))
,a,mr);
};
var G__22533 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__22552__i = 0, G__22552__a = new Array(arguments.length -  3);
while (G__22552__i < G__22552__a.length) {G__22552__a[G__22552__i] = arguments[G__22552__i + 3]; ++G__22552__i;}
  mr = new cljs.core.IndexedSeq(G__22552__a,0);
} 
return G__22533__delegate.call(this,i,m,a,mr);};
G__22533.cljs$lang$maxFixedArity = 3;
G__22533.cljs$lang$applyTo = (function (arglist__22554){
var i = cljs.core.first(arglist__22554);
arglist__22554 = cljs.core.next(arglist__22554);
var m = cljs.core.first(arglist__22554);
arglist__22554 = cljs.core.next(arglist__22554);
var a = cljs.core.first(arglist__22554);
var mr = cljs.core.rest(arglist__22554);
return G__22533__delegate(i,m,a,mr);
});
G__22533.cljs$core$IFn$_invoke$arity$variadic = G__22533__delegate;
return G__22533;
})()
;})(vec__22516,ms__$2,as__$1,more__$1,ms__$1))
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