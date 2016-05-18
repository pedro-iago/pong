// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.impl.persistent_vector');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.common');
goog.require('clojure.core.matrix.impl.mathsops');
/**
 * Ensures a vector is fully coerced to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.coerce_nested = (function clojure$core$matrix$impl$persistent_vector$coerce_nested(v){
return cljs.core.mapv.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce,v);
});
/**
 * Maps a function over a persistent vector, only modifying the vector if the function
 * returns a different value
 */
clojure.core.matrix.impl.persistent_vector.mapv_identity_check = (function clojure$core$matrix$impl$persistent_vector$mapv_identity_check(f,v){
var n = cljs.core.count.call(null,v);
var i = (0);
var v__$1 = v;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,v__$1,i);
var y = f.call(null,x);
var G__29396 = (i + (1));
var G__29397 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__29396;
v__$1 = G__29397;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__18714__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__18714__auto__){
var and__18714__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__18714__auto____$1){
var temp__4655__auto__ = cljs.core.next.call(null,shape);
if(temp__4655__auto__){
var ns = temp__4655__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__4655__auto__,and__18714__auto____$1,and__18714__auto__){
return (function (p1__29398_SHARP_){
return clojure$core$matrix$impl$persistent_vector$check_vector_shape.call(null,p1__29398_SHARP_,ns);
});})(ns,temp__4655__auto__,and__18714__auto____$1,and__18714__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__4655__auto__,and__18714__auto____$1,and__18714__auto__){
return (function (p1__29399_SHARP_){
return !((p1__29399_SHARP_ instanceof cljs.core.PersistentVector));
});})(temp__4655__auto__,and__18714__auto____$1,and__18714__auto__))
,v);
}
} else {
return and__18714__auto____$1;
}
} else {
return and__18714__auto__;
}
});
/**
 * Test if array is already in nested persistent vector array format.
 */
clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_ = (function clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_(x){
if(typeof x === 'number'){
return true;
} else {
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x))){
return true;
} else {
if(!((x instanceof cljs.core.PersistentVector))){
return false;
} else {
var and__18714__auto__ = cljs.core.every_QMARK_.call(null,clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_,x);
if(and__18714__auto__){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x));
} else {
return and__18714__auto__;
}

}
}
}
});
/**
 * Coerces to nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce = (function clojure$core$matrix$impl$persistent_vector$persistent_vector_coerce(x){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,x));
if((dims > (0))){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,x);
} else {
if(((dims === (0))) && (cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,x)))){
return clojure.core.matrix.protocols.get_0d.call(null,x);
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.IIterable)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
if(cljs.core.sequential_QMARK_.call(null,x)){
return clojure.core.matrix.impl.persistent_vector.coerce_nested.call(null,x);
} else {
return x;

}
}
}
}
}
});
/**
 * Calculates the dimensionality (== nesting depth) of nested persistent vectors
 */
clojure.core.matrix.impl.persistent_vector.vector_dimensionality = (function clojure$core$matrix$impl$persistent_vector$vector_dimensionality(m){
if(cljs.core.vector_QMARK_.call(null,m)){
if((cljs.core.count.call(null,m) > (0))){
return ((1) + clojure$core$matrix$impl$persistent_vector$vector_dimensionality.call(null,cljs.core.nth.call(null,m,(0))));
} else {
return (1);
}
} else {
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));

}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Implementation for nested Clojure persistent vectors\n             used as matrices"], null);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,length,0.0));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var m__$1 = this;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,rows,clojure.core.matrix.protocols.new_vector.call(null,m__$1,columns)));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var m__$1 = this;
var temp__4655__auto__ = cljs.core.seq.call(null,dims);
if(temp__4655__auto__){
var dims__$1 = temp__4655__auto__;
return cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.first.call(null,dims__$1),clojure.core.matrix.protocols.new_matrix_nd.call(null,m__$1,cljs.core.next.call(null,dims__$1))));
} else {
return 0.0;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,data);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var m__$1 = this;
return true;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcast$broadcast$arity$2 = (function (m,target_shape){
var m__$1 = this;
var mshape = clojure.core.matrix.protocols.get_shape.call(null,m__$1);
var dims = cljs.core.long$.call(null,cljs.core.count.call(null,mshape));
var tdims = cljs.core.long$.call(null,cljs.core.count.call(null,target_shape));
if((dims > tdims)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't broadcast to a lower dimensional shape")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if(!(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ__EQ_,mshape,cljs.core.take_last.call(null,dims,target_shape))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Incompatible shapes, cannot broadcast shape "),cljs.core.str(cljs.core.vec.call(null,mshape)),cljs.core.str(" to "),cljs.core.str(cljs.core.vec.call(null,target_shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reduce.call(null,((function (mshape,dims,tdims,m__$1){
return (function (m__$2,dup){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,dup,m__$2));
});})(mshape,dims,tdims,m__$1))
,m__$1,cljs.core.reverse.call(null,cljs.core.drop_last.call(null,dims,target_shape)));

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastLike$broadcast_like$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,a,clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PBroadcastCoerce$broadcast_coerce$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.broadcast.call(null,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a),clojure.core.matrix.protocols.get_shape.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,x){
var m__$1 = this;
var r = cljs.core.nth.call(null,m__$1,(x | (0)));
var x__20004__auto__ = r;
if(typeof x__20004__auto__ === 'number'){
return x__20004__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__20004__auto__);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,x,y){
var m__$1 = this;
var row = cljs.core.nth.call(null,m__$1,(x | (0)));
return clojure.core.matrix.protocols.get_1d.call(null,row,y);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var m__$1 = this;
var temp__4655__auto__ = cljs.core.seq.call(null,indexes);
if(temp__4655__auto__){
var indexes__$1 = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.core.next.call(null,indexes__$1);
if(temp__4655__auto____$1){
var next_indexes = temp__4655__auto____$1;
var m__$2 = cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
return clojure.core.matrix.protocols.get_nd.call(null,m__$2,next_indexes);
} else {
return cljs.core.nth.call(null,m__$1,(cljs.core.first.call(null,indexes__$1) | (0)));
}
} else {
return m__$1;
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,v);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,row,clojure.core.matrix.protocols.set_1d.call(null,m__$1.call(null,row),column,v));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var m__$1 = this;
var temp__4655__auto__ = cljs.core.seq.call(null,indexes);
if(temp__4655__auto__){
var indexes__$1 = temp__4655__auto__;
var fi = cljs.core.first.call(null,indexes__$1);
if(((1) === cljs.core.count.call(null,indexes__$1))){
return cljs.core.assoc.call(null,m__$1,fi,v);
} else {
return cljs.core.assoc.call(null,m__$1,fi,clojure.core.matrix.protocols.set_nd.call(null,m__$1.call(null,fi),cljs.core.next.call(null,indexes__$1),v));
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Trying to set on a persistent vector with insufficient indexes?")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_row$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_column$arity$2 = (function (m,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,(1),i);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_major_slice$arity$2 = (function (m,i){
var m__$1 = this;
var sl = cljs.core.nth.call(null,m__$1,cljs.core.long$.call(null,i));
return sl;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixSlices$get_slice$arity$3 = (function (m,dimension,i){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
var sd = (dimension__$1 - (1));
return cljs.core.mapv.call(null,((function (sd,dimension__$1,m__$1){
return (function (p1__29415_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__29415_SHARP_,sd,i);
});})(sd,dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixRows$get_rows$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixColumns$get_columns$arity$1 = (function (m){
var m__$1 = this;
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29417(s__29418){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__29418__$1 = s__29418;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29418__$1);
if(temp__4657__auto__){
var s__29418__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29418__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__29418__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__29420 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__29419 = (0);
while(true){
if((i__29419 < size__19497__auto__)){
var j = cljs.core._nth.call(null,c__19496__auto__,i__29419);
cljs.core.chunk_append.call(null,b__29420,cljs.core.mapv.call(null,((function (i__29419,j,c__19496__auto__,size__19497__auto__,b__29420,s__29418__$2,temp__4657__auto__,m__$1){
return (function (p1__29416_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__29416_SHARP_,j);
});})(i__29419,j,c__19496__auto__,size__19497__auto__,b__29420,s__29418__$2,temp__4657__auto__,m__$1))
,m__$1));

var G__29421 = (i__29419 + (1));
i__29419 = G__29421;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29420),clojure$core$matrix$impl$persistent_vector$iter__29417.call(null,cljs.core.chunk_rest.call(null,s__29418__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29420),null);
}
} else {
var j = cljs.core.first.call(null,s__29418__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__29418__$2,temp__4657__auto__,m__$1){
return (function (p1__29416_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__29416_SHARP_,j);
});})(j,s__29418__$2,temp__4657__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__29417.call(null,cljs.core.rest.call(null,s__29418__$2)));
}
} else {
return null;
}
break;
}
});})(m__$1))
,null,null));
});})(m__$1))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
})());
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView$get_major_slice_view$arity$2 = (function (m,i){
var m__$1 = this;
return cljs.core.nth.call(null,m__$1,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dimension,i){
var m__$1 = this;
return clojure.core.matrix.protocols.get_slice.call(null,m__$1,dimension,i);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceSeq$get_major_slice_seq$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSliceJoin$join$arity$2 = (function (m,a){
var m__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((dims === adims)){
return cljs.core.vec.call(null,cljs.core.concat.call(null,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,a)));
} else {
if((dims === (adims + (1)))){
return cljs.core.conj.call(null,m__$1,a);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Joining with array of incompatible size")].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRotate$rotate$arity$3 = (function (m,dim,places){
var m__$1 = this;
var dim__$1 = cljs.core.long$.call(null,dim);
var places__$1 = cljs.core.long$.call(null,places);
if(((0) === dim__$1)){
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
var sh = cljs.core.long$.call(null,(((c > (0)))?cljs.core.mod.call(null,places__$1,c):(0)));
if((sh === (0))){
return m__$1;
} else {
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.subvec.call(null,m__$1,sh,c),cljs.core.subvec.call(null,m__$1,(0),sh)));
}
} else {
return cljs.core.mapv.call(null,((function (dim__$1,places__$1,m__$1){
return (function (s){
return clojure.core.matrix.protocols.rotate.call(null,s,(dim__$1 - (1)),places__$1);
});})(dim__$1,places__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$2 = (function (m,indices){
var m__$1 = this;
return cljs.core.mapv.call(null,((function (m__$1){
return (function (p1__29422_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__29422_SHARP_);
});})(m__$1))
,clojure.core.matrix.protocols.element_seq.call(null,indices));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$POrder$order$arity$3 = (function (m,dimension,indices){
var m__$1 = this;
var dimension__$1 = cljs.core.long$.call(null,dimension);
if((dimension__$1 === (0))){
return clojure.core.matrix.protocols.order.call(null,m__$1,indices);
} else {
return cljs.core.mapv.call(null,((function (dimension__$1,m__$1){
return (function (p1__29423_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__29423_SHARP_,(dimension__$1 - (1)),indices);
});})(dimension__$1,m__$1))
,m__$1);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var m__$1 = this;
return cljs.core.subvec.call(null,m__$1,start,(cljs.core.long$.call(null,start) + cljs.core.long$.call(null,length)));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PValidateShape$validate_shape$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.same_shapes_QMARK_.call(null,m__$1))){
return clojure.core.matrix.protocols.get_shape.call(null,m__$1);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Inconsistent shape for persistent vector array.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_add$arity$2 = (function (m,a){
var m__$1 = this;
var vec__29424 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29424,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29424,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__29425 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29425,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29425,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$vector_dot$arity$2 = (function (a,b){
var a__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if(((dims === (1))) && (((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b))))){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
if(cljs.core.not_EQ_.call(null,n,cljs.core.long$.call(null,cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Mismatched vector sizes")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
if((b instanceof cljs.core.List)){
var b__$1 = b;
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__29426 = (i + (1));
var G__29427 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__29426;
res = G__29427;
continue;
}
break;
}
} else {
if((Array === b.constructor)){
var i = (0);
var res = 0.0;
while(true){
if((i >= n)){
return res;
} else {
var G__29428 = (i + (1));
var G__29429 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__29428;
res = G__29429;
continue;
}
break;
}
} else {
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core._STAR_,a__$1,clojure.core.matrix.protocols.element_seq.call(null,b)));

}
}
}
} else {
return clojure.core.matrix.protocols.inner_product.call(null,a__$1,b);

}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length$arity$1 = (function (a){
var a__$1 = this;
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__29430 = (i + (1));
var G__29431 = (res + (x * x));
i = G__29430;
res = G__29431;
continue;
} else {
return Math.sqrt(res);
}
break;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$length_squared$arity$1 = (function (a){
var a__$1 = this;
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
var res = 0.0;
while(true){
if((i < n)){
var x = cljs.core.nth.call(null,a__$1,i);
var G__29432 = (i + (1));
var G__29433 = (res + (x * x));
i = G__29432;
res = G__29433;
continue;
} else {
return res;
}
break;
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorOps$normalise$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.scale.call(null,a__$1,(1.0 / Math.sqrt(clojure.core.matrix.protocols.length_squared.call(null,a__$1))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMutableMatrixConstruction$mutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PImmutableMatrixConstruction$immutable_matrix$arity$1 = (function (m){
var m__$1 = this;
return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorDistance$distance$arity$2 = (function (a,b){
var a__$1 = this;
return clojure.core.matrix.protocols.length.call(null,clojure.core.matrix.protocols.matrix_sub.call(null,b,a__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSummable$element_sum$arity$1 = (function (a){
var a__$1 = this;
return clojure.core.matrix.protocols.element_reduce.call(null,a__$1,cljs.core._PLUS_);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PCoercion$coerce_param$arity$2 = (function (m,param){
var m__$1 = this;
return clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,param);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixEquality$matrix_equals$arity$2 = (function (a,b){
var a__$1 = this;
var bdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,b));
if((bdims <= (0))){
return false;
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,a__$1),clojure.core.matrix.protocols.dimension_count.call(null,b,(0)))){
return false;
} else {
if(((1) === bdims)){
var and__18714__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__18714__auto__){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
while(true){
if((i < n)){
if((clojure.core.matrix.protocols.get_1d.call(null,a__$1,i) === clojure.core.matrix.protocols.get_1d.call(null,b,i))){
var G__29434 = (i + (1));
i = G__29434;
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
return and__18714__auto__;
}
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,a__$1.call(null,i),b.call(null,i)))){
var G__29435 = (i + (1));
i = G__29435;
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
var sa = cljs.core.seq.call(null,a__$1);
var sb = clojure.core.matrix.protocols.get_major_slice_seq.call(null,b);
while(true){
if(sa){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,cljs.core.first.call(null,sa),cljs.core.first.call(null,sb)))){
var G__29436 = cljs.core.next.call(null,sa);
var G__29437 = cljs.core.next.call(null,sb);
sa = G__29436;
sb = G__29437;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}

}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$element_multiply$arity$2 = (function (m,a){
var m__$1 = this;
if(typeof a === 'number'){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
var vec__29439 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29439,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29439,(1),null);
return clojure.core.matrix.protocols.element_map.call(null,m__$2,cljs.core._STAR_,a__$1);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixMultiply$matrix_multiply$arity$2 = (function (m,a){
var m__$1 = this;
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
if((adims === (0))){
return clojure.core.matrix.protocols.scale.call(null,m__$1,a);
} else {
if(((mdims === (1))) && ((adims === (2)))){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29440(s__29441){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__29441__$1 = s__29441;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29441__$1);
if(temp__4657__auto__){
var s__29441__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29441__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__29441__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__29443 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__29442 = (0);
while(true){
if((i__29442 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__29442);
cljs.core.chunk_append.call(null,b__29443,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__29448 = (i__29442 + (1));
i__29442 = G__29448;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29443),clojure$core$matrix$impl$persistent_vector$iter__29440.call(null,cljs.core.chunk_rest.call(null,s__29441__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29443),null);
}
} else {
var i = cljs.core.first.call(null,s__29441__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__29440.call(null,cljs.core.rest.call(null,s__29441__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if(((mdims === (1))) && ((adims === (1)))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if(((mdims === (2))) && ((adims === (1)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__29438_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__29438_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if(((mdims === (2))) && ((adims === (2)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29444(s__29445){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__29445__$1 = s__29445;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29445__$1);
if(temp__4657__auto__){
var s__29445__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29445__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__29445__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__29447 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__29446 = (0);
while(true){
if((i__29446 < size__19497__auto__)){
var j = cljs.core._nth.call(null,c__19496__auto__,i__29446);
cljs.core.chunk_append.call(null,b__29447,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__29449 = (i__29446 + (1));
i__29446 = G__29449;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29447),clojure$core$matrix$impl$persistent_vector$iter__29444.call(null,cljs.core.chunk_rest.call(null,s__29445__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29447),null);
}
} else {
var j = cljs.core.first.call(null,s__29445__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__29444.call(null,cljs.core.rest.call(null,s__29445__$2)));
}
} else {
return null;
}
break;
}
});})(mdims,adims,m__$1))
,null,null));
});})(mdims,adims,m__$1))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
});})(mdims,adims,m__$1))
,m__$1);
} else {
return clojure.core.matrix.protocols.inner_product.call(null,m__$1,a);

}
}
}
}
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$inner_product$arity$2 = (function (m,a){
var m__$1 = this;
var adims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a));
var mdims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m__$1));
if(((0) === adims)){
return clojure.core.matrix.protocols.scale.call(null,m__$1,clojure.core.matrix.protocols.get_0d.call(null,a));
} else {
if(((1) === mdims)){
if(((1) === adims)){
return clojure.core.matrix.protocols.element_sum.call(null,clojure.core.matrix.protocols.element_multiply.call(null,m__$1,a));
} else {
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,cljs.core.map.call(null,((function (adims,mdims,m__$1){
return (function (sl,x){
return clojure.core.matrix.protocols.scale.call(null,sl,x);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,a),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1)));
}
} else {
return cljs.core.mapv.call(null,((function (adims,mdims,m__$1){
return (function (p1__29450_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__29450_SHARP_,a);
});})(adims,mdims,m__$1))
,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixProducts$outer_product$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.element_map.call(null,m__$1,((function (m__$1){
return (function (v){
return clojure.core.matrix.protocols.pre_scale.call(null,a,v);
});})(m__$1))
);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PVectorTransform$vector_transform_BANG_$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.protocols.assign_BANG_.call(null,a,clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1,a));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__29451_SHARP_){
return (p1__29451_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__29452_SHARP_){
return (a * p1__29452_SHARP_);
});})(m__$1))
,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSquare$square$arity$1 = (function (m){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._STAR_,m__$1,m__$1);
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$swap_rows$arity$3 = (function (m,i,j){
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var j__$1 = cljs.core.long$.call(null,j);
if((i__$1 === j__$1)){
return m__$1;
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,m__$1,i__$1,m__$1.call(null,j__$1)),j__$1,m__$1.call(null,i__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$multiply_row$arity$3 = (function (m,i,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.scale.call(null,m__$1.call(null,i),factor));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PRowOperations$add_row$arity$4 = (function (m,i,j,factor){
var m__$1 = this;
return cljs.core.assoc.call(null,m__$1,i,clojure.core.matrix.protocols.matrix_add.call(null,m__$1.call(null,i),clojure.core.matrix.protocols.matrix_multiply.call(null,m__$1.call(null,j),factor)));
});
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__29454){
var vec__29456 = p__29454;
var name = cljs.core.nth.call(null,vec__29456,(0),null);
var func = cljs.core.nth.call(null,vec__29456,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__29453__auto__","x__29453__auto__",-2124675907,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,func),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__29453__auto__","x__29453__auto__",-2124675907,null)))))))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null)))))))));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var m__$1 = this;
if(((0) === cljs.core.count.call(null,m__$1))){
return (1);
} else {
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,m__$1,(0)))) + (1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var m__$1 = this;
var pv__28623__auto__ = m__$1;
return (((0) === cljs.core.count.call(null,pv__28623__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__28623__auto__,(0))))));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return false;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.count.call(null,m__$1);
return cljs.core.cons.call(null,c,(((c > (0)))?clojure.core.matrix.protocols.get_shape.call(null,cljs.core.nth.call(null,m__$1,(0))):null));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,x){
var m__$1 = this;
var x__$1 = cljs.core.long$.call(null,x);
if((x__$1 === (0))){
return cljs.core.count.call(null,m__$1);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,cljs.core.nth.call(null,m__$1,(0)),(x__$1 - (1)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PElementCount$element_count$arity$1 = (function (m){
var m__$1 = this;
var c = cljs.core.long$.call(null,cljs.core.count.call(null,m__$1));
if((c === (0))){
return (0);
} else {
return (c * clojure.core.matrix.protocols.element_count.call(null,cljs.core.nth.call(null,m__$1,(0))));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.impl.persistent_vector.is_nested_persistent_vectors_QMARK_.call(null,m__$1))){
return m__$1;
} else {
var m__$2 = clojure.core.matrix.impl.persistent_vector.mapv_identity_check.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,m__$1);
var m_shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,m__$2);
if(cljs.core.every_QMARK_.call(null,cljs.core.partial.call(null,cljs.core._EQ_,cljs.core.first.call(null,m_shapes)),cljs.core.rest.call(null,m_shapes))){
return m__$2;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't convert to persistent vector array: inconsistent shape.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});
clojure.core.matrix.impl.persistent_vector.copy_to_double_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_double_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__19951__auto___29459 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_29460 = cljs.core.long$.call(null,(0));
while(true){
if(vals__19951__auto___29459){
var v_29461 = cljs.core.first.call(null,vals__19951__auto___29459);
(arr[(off + i_29460)] = v_29461);

var G__29462 = cljs.core.next.call(null,vals__19951__auto___29459);
var G__29463 = (i_29460 + (1));
vals__19951__auto___29459 = G__29462;
i_29460 = G__29463;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19629__auto___29464 = size;
var i_29465 = (0);
while(true){
if((i_29465 < n__19629__auto___29464)){
(arr[(off + i_29465)] = cljs.core.nth.call(null,m,i_29465));

var G__29466 = (i_29465 + (1));
i_29465 = G__29466;
continue;
} else {
}
break;
}
} else {
var skip_29467 = cljs.core.quot.call(null,size,ct);
var n__19629__auto___29468 = ct;
var i_29469 = (0);
while(true){
if((i_29469 < n__19629__auto___29468)){
clojure$core$matrix$impl$persistent_vector$copy_to_double_array.call(null,cljs.core.nth.call(null,m,i_29469),arr,(off + (i_29469 * skip_29467)),skip_29467);

var G__29470 = (i_29469 + (1));
i_29469 = G__29470;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$to_double_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.double_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_double_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PDoubleArrayOutput$as_double_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
clojure.core.matrix.impl.persistent_vector.copy_to_object_array = (function clojure$core$matrix$impl$persistent_vector$copy_to_object_array(m,arr,off,size){
var ct = cljs.core.count.call(null,m);
if(!(cljs.core.vector_QMARK_.call(null,m))){
var vals__19951__auto___29471 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_29472 = cljs.core.long$.call(null,(0));
while(true){
if(vals__19951__auto___29471){
var v_29473 = cljs.core.first.call(null,vals__19951__auto___29471);
(arr[(off + i_29472)] = v_29473);

var G__29474 = cljs.core.next.call(null,vals__19951__auto___29471);
var G__29475 = (i_29472 + (1));
vals__19951__auto___29471 = G__29474;
i_29472 = G__29475;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19629__auto___29476 = size;
var i_29477 = (0);
while(true){
if((i_29477 < n__19629__auto___29476)){
(arr[(off + i_29477)] = cljs.core.nth.call(null,m,i_29477));

var G__29478 = (i_29477 + (1));
i_29477 = G__29478;
continue;
} else {
}
break;
}
} else {
var skip_29479 = cljs.core.quot.call(null,size,ct);
var n__19629__auto___29480 = ct;
var i_29481 = (0);
while(true){
if((i_29481 < n__19629__auto___29480)){
clojure$core$matrix$impl$persistent_vector$copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_29481),arr,(off + (i_29481 * skip_29479)),skip_29479);

var G__29482 = (i_29481 + (1));
i_29481 = G__29482;
continue;
} else {
}
break;
}

}
}

return arr;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$to_object_array$arity$1 = (function (m){
var m__$1 = this;
var size = cljs.core.long$.call(null,clojure.core.matrix.protocols.element_count.call(null,m__$1));
var arr = cljs.core.object_array.call(null,size);
var ct = cljs.core.count.call(null,m__$1);
clojure.core.matrix.impl.persistent_vector.copy_to_object_array.call(null,m__$1,arr,(0),size);

return arr;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PObjectArrayOutput$as_object_array$arity$1 = (function (m){
var m__$1 = this;
return null;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_seq$arity$1 = (function (m){
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

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$2 = (function (m,f){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$3 = (function (m,f,a){
var m__$1 = this;
var vec__29485 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__29485,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__29485,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__18726__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Attempt to do element map with incompatible shapes: "),cljs.core.str(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__29483_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__29483_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__29486_29490 = cljs.core.seq.call(null,m__$1);
var chunk__29487_29491 = null;
var count__29488_29492 = (0);
var i__29489_29493 = (0);
while(true){
if((i__29489_29493 < count__29488_29492)){
var s_29494 = cljs.core._nth.call(null,chunk__29487_29491,i__29489_29493);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_29494,f);

var G__29495 = seq__29486_29490;
var G__29496 = chunk__29487_29491;
var G__29497 = count__29488_29492;
var G__29498 = (i__29489_29493 + (1));
seq__29486_29490 = G__29495;
chunk__29487_29491 = G__29496;
count__29488_29492 = G__29497;
i__29489_29493 = G__29498;
continue;
} else {
var temp__4657__auto___29499 = cljs.core.seq.call(null,seq__29486_29490);
if(temp__4657__auto___29499){
var seq__29486_29500__$1 = temp__4657__auto___29499;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29486_29500__$1)){
var c__19529__auto___29501 = cljs.core.chunk_first.call(null,seq__29486_29500__$1);
var G__29502 = cljs.core.chunk_rest.call(null,seq__29486_29500__$1);
var G__29503 = c__19529__auto___29501;
var G__29504 = cljs.core.count.call(null,c__19529__auto___29501);
var G__29505 = (0);
seq__29486_29490 = G__29502;
chunk__29487_29491 = G__29503;
count__29488_29492 = G__29504;
i__29489_29493 = G__29505;
continue;
} else {
var s_29506 = cljs.core.first.call(null,seq__29486_29500__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_29506,f);

var G__29507 = cljs.core.next.call(null,seq__29486_29500__$1);
var G__29508 = null;
var G__29509 = (0);
var G__29510 = (0);
seq__29486_29490 = G__29507;
chunk__29487_29491 = G__29508;
count__29488_29492 = G__29509;
i__29489_29493 = G__29510;
continue;
}
} else {
}
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__19629__auto___29511 = cljs.core.count.call(null,m__$1);
var i_29512 = (0);
while(true){
if((i_29512 < n__19629__auto___29511)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_29512),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29512));

var G__29513 = (i_29512 + (1));
i_29512 = G__29513;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19629__auto___29514 = cljs.core.count.call(null,m__$1);
var i_29515 = (0);
while(true){
if((i_29515 < n__19629__auto___29514)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_29515),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29515),cljs.core.map.call(null,((function (i_29515,n__19629__auto___29514,m__$1){
return (function (p1__29484_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__29484_SHARP_,i_29515);
});})(i_29515,n__19629__auto___29514,m__$1))
,more));

var G__29516 = (i_29515 + (1));
i_29515 = G__29516;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$2 = (function (m,f){
var m__$1 = this;
return cljs.core.reduce.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_reduce$arity$3 = (function (m,f,init){
var m__$1 = this;
return cljs.core.reduce.call(null,f,init,clojure.core.matrix.protocols.element_seq.call(null,m__$1));
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$2 = (function (ms,f){
var ms__$1 = this;
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,ms__$1));
if(((0) === dims)){
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__20004__auto__ = ms__$1;
if(typeof x__20004__auto__ === 'number'){
return x__20004__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__20004__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29536(s__29537){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__29537__$1 = s__29537;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29537__$1);
if(temp__4657__auto__){
var s__29537__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29537__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__29537__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__29539 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__29538 = (0);
while(true){
if((i__29538 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__29538);
cljs.core.chunk_append.call(null,b__29539,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__29544 = (i__29538 + (1));
i__29538 = G__29544;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29539),clojure$core$matrix$impl$persistent_vector$iter__29536.call(null,cljs.core.chunk_rest.call(null,s__29537__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29539),null);
}
} else {
var i = cljs.core.first.call(null,s__29537__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__29536.call(null,cljs.core.rest.call(null,s__29537__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__29540(s__29541){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__29541__$1 = s__29541;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29541__$1);
if(temp__4657__auto__){
var s__29541__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29541__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__29541__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__29543 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__29542 = (0);
while(true){
if((i__29542 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__29542);
cljs.core.chunk_append.call(null,b__29543,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__29542,i,c__19496__auto__,size__19497__auto__,b__29543,s__29541__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__29517_SHARP_,p2__29518_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__29517_SHARP_),p2__29518_SHARP_);
});})(i__29542,i,c__19496__auto__,size__19497__auto__,b__29543,s__29541__$2,temp__4657__auto__,dims,ms__$1))
));

var G__29545 = (i__29542 + (1));
i__29542 = G__29545;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29543),clojure$core$matrix$impl$persistent_vector$iter__29540.call(null,cljs.core.chunk_rest.call(null,s__29541__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29543),null);
}
} else {
var i = cljs.core.first.call(null,s__29541__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__29541__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__29517_SHARP_,p2__29518_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__29517_SHARP_),p2__29518_SHARP_);
});})(i,s__29541__$2,temp__4657__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__29540.call(null,cljs.core.rest.call(null,s__29541__$2)));
}
} else {
return null;
}
break;
}
});})(dims,ms__$1))
,null,null));
});})(dims,ms__$1))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());

}
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$3 = (function (ms,f,as){
var ms__$1 = this;
var as__$1 = clojure.core.matrix.protocols.broadcast_like.call(null,ms__$1,as);
var dima = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,as__$1));
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
if((dima > (1))){
throw cljs.core.ex_info.call(null,[cljs.core.str("mapping with array of higher dimensionality?")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((((1) === dima)) && (cljs.core.not_EQ_.call(null,clojure.core.matrix.protocols.dimension_count.call(null,ms__$1,(0)),clojure.core.matrix.protocols.dimension_count.call(null,as__$1,(0))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Incompatible vector sizes")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if(((0) === dima)){
var v = (function (){var x__20004__auto__ = as__$1;
if(typeof x__20004__auto__ === 'number'){
return x__20004__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__20004__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__29519_SHARP_,p2__29520_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29519_SHARP_], null),p2__29520_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__29546__delegate = function (p1__29521_SHARP_,rest__29522_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29521_SHARP_], null),rest__29522_SHARP_);
};
var G__29546 = function (p1__29521_SHARP_,var_args){
var rest__29522_SHARP_ = null;
if (arguments.length > 1) {
var G__29547__i = 0, G__29547__a = new Array(arguments.length -  1);
while (G__29547__i < G__29547__a.length) {G__29547__a[G__29547__i] = arguments[G__29547__i + 1]; ++G__29547__i;}
  rest__29522_SHARP_ = new cljs.core.IndexedSeq(G__29547__a,0);
} 
return G__29546__delegate.call(this,p1__29521_SHARP_,rest__29522_SHARP_);};
G__29546.cljs$lang$maxFixedArity = 1;
G__29546.cljs$lang$applyTo = (function (arglist__29548){
var p1__29521_SHARP_ = cljs.core.first(arglist__29548);
var rest__29522_SHARP_ = cljs.core.rest(arglist__29548);
return G__29546__delegate(p1__29521_SHARP_,rest__29522_SHARP_);
});
G__29546.cljs$core$IFn$_invoke$arity$variadic = G__29546__delegate;
return G__29546;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__29549__delegate = function (p1__29523_SHARP_,rest__29524_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__29523_SHARP_),rest__29524_SHARP_);
};
var G__29549 = function (p1__29523_SHARP_,var_args){
var rest__29524_SHARP_ = null;
if (arguments.length > 1) {
var G__29550__i = 0, G__29550__a = new Array(arguments.length -  1);
while (G__29550__i < G__29550__a.length) {G__29550__a[G__29550__i] = arguments[G__29550__i + 1]; ++G__29550__i;}
  rest__29524_SHARP_ = new cljs.core.IndexedSeq(G__29550__a,0);
} 
return G__29549__delegate.call(this,p1__29523_SHARP_,rest__29524_SHARP_);};
G__29549.cljs$lang$maxFixedArity = 1;
G__29549.cljs$lang$applyTo = (function (arglist__29551){
var p1__29523_SHARP_ = cljs.core.first(arglist__29551);
var rest__29524_SHARP_ = cljs.core.rest(arglist__29551);
return G__29549__delegate(p1__29523_SHARP_,rest__29524_SHARP_);
});
G__29549.cljs$core$IFn$_invoke$arity$variadic = G__29549__delegate;
return G__29549;
})()
;})(as__$1,dima,ms__$1))
,a);
});})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.get_major_slice_seq.call(null,as__$1));
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed$arity$4 = (function (ms,f,as,more){
var ms__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,ms__$1))){
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__29552__delegate = function (p1__29525_SHARP_,rest__29526_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29525_SHARP_], null),rest__29526_SHARP_);
};
var G__29552 = function (p1__29525_SHARP_,var_args){
var rest__29526_SHARP_ = null;
if (arguments.length > 1) {
var G__29553__i = 0, G__29553__a = new Array(arguments.length -  1);
while (G__29553__i < G__29553__a.length) {G__29553__a[G__29553__i] = arguments[G__29553__i + 1]; ++G__29553__i;}
  rest__29526_SHARP_ = new cljs.core.IndexedSeq(G__29553__a,0);
} 
return G__29552__delegate.call(this,p1__29525_SHARP_,rest__29526_SHARP_);};
G__29552.cljs$lang$maxFixedArity = 1;
G__29552.cljs$lang$applyTo = (function (arglist__29554){
var p1__29525_SHARP_ = cljs.core.first(arglist__29554);
var rest__29526_SHARP_ = cljs.core.rest(arglist__29554);
return G__29552__delegate(p1__29525_SHARP_,rest__29526_SHARP_);
});
G__29552.cljs$core$IFn$_invoke$arity$variadic = G__29552__delegate;
return G__29552;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__29555__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__29556__delegate = function (p1__29527_SHARP_,rest__29528_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__29527_SHARP_),rest__29528_SHARP_);
};
var G__29556 = function (p1__29527_SHARP_,var_args){
var rest__29528_SHARP_ = null;
if (arguments.length > 1) {
var G__29557__i = 0, G__29557__a = new Array(arguments.length -  1);
while (G__29557__i < G__29557__a.length) {G__29557__a[G__29557__i] = arguments[G__29557__i + 1]; ++G__29557__i;}
  rest__29528_SHARP_ = new cljs.core.IndexedSeq(G__29557__a,0);
} 
return G__29556__delegate.call(this,p1__29527_SHARP_,rest__29528_SHARP_);};
G__29556.cljs$lang$maxFixedArity = 1;
G__29556.cljs$lang$applyTo = (function (arglist__29558){
var p1__29527_SHARP_ = cljs.core.first(arglist__29558);
var rest__29528_SHARP_ = cljs.core.rest(arglist__29558);
return G__29556__delegate(p1__29527_SHARP_,rest__29528_SHARP_);
});
G__29556.cljs$core$IFn$_invoke$arity$variadic = G__29556__delegate;
return G__29556;
})()
;})(ms__$1))
,a,mr);
};
var G__29555 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__29559__i = 0, G__29559__a = new Array(arguments.length -  3);
while (G__29559__i < G__29559__a.length) {G__29559__a[G__29559__i] = arguments[G__29559__i + 3]; ++G__29559__i;}
  mr = new cljs.core.IndexedSeq(G__29559__a,0);
} 
return G__29555__delegate.call(this,i,m,a,mr);};
G__29555.cljs$lang$maxFixedArity = 3;
G__29555.cljs$lang$applyTo = (function (arglist__29560){
var i = cljs.core.first(arglist__29560);
arglist__29560 = cljs.core.next(arglist__29560);
var m = cljs.core.first(arglist__29560);
arglist__29560 = cljs.core.next(arglist__29560);
var a = cljs.core.first(arglist__29560);
var mr = cljs.core.rest(arglist__29560);
return G__29555__delegate(i,m,a,mr);
});
G__29555.cljs$core$IFn$_invoke$arity$variadic = G__29555__delegate;
return G__29555;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__19629__auto___29561 = cljs.core.count.call(null,m__$1);
var i_29562 = (0);
while(true){
if((i_29562 < n__19629__auto___29561)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_29562),((function (i_29562,n__19629__auto___29561,m__$1){
return (function (p1__29529_SHARP_,p2__29530_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_29562,p1__29529_SHARP_),p2__29530_SHARP_);
});})(i_29562,n__19629__auto___29561,m__$1))
);

var G__29563 = (i_29562 + (1));
i_29562 = G__29563;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__19629__auto___29564 = cljs.core.count.call(null,m__$1);
var i_29565 = (0);
while(true){
if((i_29565 < n__19629__auto___29564)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_29565),((function (i_29565,n__19629__auto___29564,m__$1){
return (function() { 
var G__29566__delegate = function (p1__29531_SHARP_,rest__29532_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_29565,p1__29531_SHARP_),rest__29532_SHARP_);
};
var G__29566 = function (p1__29531_SHARP_,var_args){
var rest__29532_SHARP_ = null;
if (arguments.length > 1) {
var G__29567__i = 0, G__29567__a = new Array(arguments.length -  1);
while (G__29567__i < G__29567__a.length) {G__29567__a[G__29567__i] = arguments[G__29567__i + 1]; ++G__29567__i;}
  rest__29532_SHARP_ = new cljs.core.IndexedSeq(G__29567__a,0);
} 
return G__29566__delegate.call(this,p1__29531_SHARP_,rest__29532_SHARP_);};
G__29566.cljs$lang$maxFixedArity = 1;
G__29566.cljs$lang$applyTo = (function (arglist__29568){
var p1__29531_SHARP_ = cljs.core.first(arglist__29568);
var rest__29532_SHARP_ = cljs.core.rest(arglist__29568);
return G__29566__delegate(p1__29531_SHARP_,rest__29532_SHARP_);
});
G__29566.cljs$core$IFn$_invoke$arity$variadic = G__29566__delegate;
return G__29566;
})()
;})(i_29565,n__19629__auto___29564,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29565));

var G__29569 = (i_29565 + (1));
i_29565 = G__29569;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19629__auto___29570 = cljs.core.count.call(null,m__$1);
var i_29571 = (0);
while(true){
if((i_29571 < n__19629__auto___29570)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_29571),((function (i_29571,n__19629__auto___29570,m__$1){
return (function() { 
var G__29572__delegate = function (p1__29533_SHARP_,rest__29534_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_29571,p1__29533_SHARP_),rest__29534_SHARP_);
};
var G__29572 = function (p1__29533_SHARP_,var_args){
var rest__29534_SHARP_ = null;
if (arguments.length > 1) {
var G__29573__i = 0, G__29573__a = new Array(arguments.length -  1);
while (G__29573__i < G__29573__a.length) {G__29573__a[G__29573__i] = arguments[G__29573__i + 1]; ++G__29573__i;}
  rest__29534_SHARP_ = new cljs.core.IndexedSeq(G__29573__a,0);
} 
return G__29572__delegate.call(this,p1__29533_SHARP_,rest__29534_SHARP_);};
G__29572.cljs$lang$maxFixedArity = 1;
G__29572.cljs$lang$applyTo = (function (arglist__29574){
var p1__29533_SHARP_ = cljs.core.first(arglist__29574);
var rest__29534_SHARP_ = cljs.core.rest(arglist__29574);
return G__29572__delegate(p1__29533_SHARP_,rest__29534_SHARP_);
});
G__29572.cljs$core$IFn$_invoke$arity$variadic = G__29572__delegate;
return G__29572;
})()
;})(i_29571,n__19629__auto___29570,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_29571),cljs.core.map.call(null,((function (i_29571,n__19629__auto___29570,m__$1){
return (function (p1__29535_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__29535_SHARP_,i_29571);
});})(i_29571,n__19629__auto___29570,m__$1))
,more));

var G__29575 = (i_29571 + (1));
i_29571 = G__29575;
continue;
} else {
}
break;
}

return m__$1;
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PSelect$select$arity$2 = (function (a,args){
var a__$1 = this;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args))){
if(cljs.core._EQ_.call(null,(1),clojure.core.matrix.protocols.dimensionality.call(null,a__$1))){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__29576_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__29576_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Array dimension does not match length of args")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__29577_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__29577_SHARP_),cljs.core.next.call(null,args));
});})(a__$1))
,cljs.core.first.call(null,args)));
}
});
cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$ = true;

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PIndexImplementation$index_QMARK_$arity$1 = (function (m){
var m__$1 = this;
return true;
});
clojure.core.matrix.implementations.register_implementation.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null));

//# sourceMappingURL=persistent_vector.js.map