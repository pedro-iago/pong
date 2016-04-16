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
var x__21485__auto__ = cljs.core.nth.call(null,m__$1,x);
if(typeof x__21485__auto__ === 'number'){
return x__21485__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21485__auto__);

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
return (function (p1__21775_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,p1__21775_SHARP_);
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
return (function (p1__21780_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__21780_SHARP_,f);
});})(m__$1))
,m__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__21786 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__21786,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__21786,(1),null);
return cljs.core.mapv.call(null,((function (vec__21786,m__$2,a__$1,m__$1){
return (function (p1__21781_SHARP_,p2__21782_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__21781_SHARP_,f,p2__21782_SHARP_);
});})(vec__21786,m__$2,a__$1,m__$1))
,m__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var vec__21787 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,m__$1,a,more);
var m__$2 = cljs.core.nth.call(null,vec__21787,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__21787,(1),null);
var more__$1 = cljs.core.nthnext.call(null,vec__21787,(2));
return cljs.core.mapv.call(null,((function (vec__21787,m__$2,a__$1,more__$1,m__$1){
return (function (p1__21783_SHARP_,p2__21784_SHARP_,p3__21785_SHARP_){
return clojure.core.matrix.protocols.element_map.call(null,p1__21783_SHARP_,f,p2__21784_SHARP_,p3__21785_SHARP_);
});})(vec__21787,m__$2,a__$1,more__$1,m__$1))
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
var G__21796__delegate = function (p1__21788_SHARP_,rest__21789_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__21788_SHARP_),rest__21789_SHARP_);
};
var G__21796 = function (p1__21788_SHARP_,var_args){
var rest__21789_SHARP_ = null;
if (arguments.length > 1) {
var G__21797__i = 0, G__21797__a = new Array(arguments.length -  1);
while (G__21797__i < G__21797__a.length) {G__21797__a[G__21797__i] = arguments[G__21797__i + 1]; ++G__21797__i;}
  rest__21789_SHARP_ = new cljs.core.IndexedSeq(G__21797__a,0);
} 
return G__21796__delegate.call(this,p1__21788_SHARP_,rest__21789_SHARP_);};
G__21796.cljs$lang$maxFixedArity = 1;
G__21796.cljs$lang$applyTo = (function (arglist__21798){
var p1__21788_SHARP_ = cljs.core.first(arglist__21798);
var rest__21789_SHARP_ = cljs.core.rest(arglist__21798);
return G__21796__delegate(p1__21788_SHARP_,rest__21789_SHARP_);
});
G__21796.cljs$core$IFn$_invoke$arity$variadic = G__21796__delegate;
return G__21796;
})()
;})(ms__$1))
);
});})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1);
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var vec__21794 = clojure.core.matrix.protocols.broadcast_compatible.call(null,ms__$1,as);
var ms__$2 = cljs.core.nth.call(null,vec__21794,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__21794,(1),null);
return cljs.core.mapv.call(null,((function (vec__21794,ms__$2,as__$1,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__21794,ms__$2,as__$1,ms__$1){
return (function() { 
var G__21803__delegate = function (p1__21790_SHARP_,rest__21791_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__21790_SHARP_),rest__21791_SHARP_);
};
var G__21803 = function (p1__21790_SHARP_,var_args){
var rest__21791_SHARP_ = null;
if (arguments.length > 1) {
var G__21804__i = 0, G__21804__a = new Array(arguments.length -  1);
while (G__21804__i < G__21804__a.length) {G__21804__a[G__21804__i] = arguments[G__21804__i + 1]; ++G__21804__i;}
  rest__21791_SHARP_ = new cljs.core.IndexedSeq(G__21804__a,0);
} 
return G__21803__delegate.call(this,p1__21790_SHARP_,rest__21791_SHARP_);};
G__21803.cljs$lang$maxFixedArity = 1;
G__21803.cljs$lang$applyTo = (function (arglist__21805){
var p1__21790_SHARP_ = cljs.core.first(arglist__21805);
var rest__21791_SHARP_ = cljs.core.rest(arglist__21805);
return G__21803__delegate(p1__21790_SHARP_,rest__21791_SHARP_);
});
G__21803.cljs$core$IFn$_invoke$arity$variadic = G__21803__delegate;
return G__21803;
})()
;})(vec__21794,ms__$2,as__$1,ms__$1))
,a);
});})(vec__21794,ms__$2,as__$1,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$2)),ms__$2,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
});

cljs.core.ISeq.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
var vec__21795 = cljs.core.apply.call(null,clojure.core.matrix.protocols.broadcast_compatible,ms__$1,as,more);
var ms__$2 = cljs.core.nth.call(null,vec__21795,(0),null);
var as__$1 = cljs.core.nth.call(null,vec__21795,(1),null);
var more__$1 = cljs.core.nthnext.call(null,vec__21795,(2));
return cljs.core.mapv.call(null,((function (vec__21795,ms__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__21806__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (vec__21795,ms__$2,as__$1,more__$1,ms__$1){
return (function() { 
var G__21807__delegate = function (p1__21792_SHARP_,rest__21793_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__21792_SHARP_),rest__21793_SHARP_);
};
var G__21807 = function (p1__21792_SHARP_,var_args){
var rest__21793_SHARP_ = null;
if (arguments.length > 1) {
var G__21808__i = 0, G__21808__a = new Array(arguments.length -  1);
while (G__21808__i < G__21808__a.length) {G__21808__a[G__21808__i] = arguments[G__21808__i + 1]; ++G__21808__i;}
  rest__21793_SHARP_ = new cljs.core.IndexedSeq(G__21808__a,0);
} 
return G__21807__delegate.call(this,p1__21792_SHARP_,rest__21793_SHARP_);};
G__21807.cljs$lang$maxFixedArity = 1;
G__21807.cljs$lang$applyTo = (function (arglist__21809){
var p1__21792_SHARP_ = cljs.core.first(arglist__21809);
var rest__21793_SHARP_ = cljs.core.rest(arglist__21809);
return G__21807__delegate(p1__21792_SHARP_,rest__21793_SHARP_);
});
G__21807.cljs$core$IFn$_invoke$arity$variadic = G__21807__delegate;
return G__21807;
})()
;})(vec__21795,ms__$2,as__$1,more__$1,ms__$1))
,a,mr);
};
var G__21806 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__21810__i = 0, G__21810__a = new Array(arguments.length -  3);
while (G__21810__i < G__21810__a.length) {G__21810__a[G__21810__i] = arguments[G__21810__i + 3]; ++G__21810__i;}
  mr = new cljs.core.IndexedSeq(G__21810__a,0);
} 
return G__21806__delegate.call(this,i,m,a,mr);};
G__21806.cljs$lang$maxFixedArity = 3;
G__21806.cljs$lang$applyTo = (function (arglist__21811){
var i = cljs.core.first(arglist__21811);
arglist__21811 = cljs.core.next(arglist__21811);
var m = cljs.core.first(arglist__21811);
arglist__21811 = cljs.core.next(arglist__21811);
var a = cljs.core.first(arglist__21811);
var mr = cljs.core.rest(arglist__21811);
return G__21806__delegate(i,m,a,mr);
});
G__21806.cljs$core$IFn$_invoke$arity$variadic = G__21806__delegate;
return G__21806;
})()
;})(vec__21795,ms__$2,as__$1,more__$1,ms__$1))
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