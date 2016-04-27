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
var G__32159 = (i + (1));
var G__32160 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__32159;
v__$1 = G__32160;
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
return (function (p1__32164_SHARP_){
return clojure$core$matrix$impl$persistent_vector$check_vector_shape.call(null,p1__32164_SHARP_,ns);
});})(ns,temp__4655__auto__,and__18714__auto____$1,and__18714__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__4655__auto__,and__18714__auto____$1,and__18714__auto__){
return (function (p1__32165_SHARP_){
return !((p1__32165_SHARP_ instanceof cljs.core.PersistentVector));
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
var x__19974__auto__ = r;
if(typeof x__19974__auto__ === 'number'){
return x__19974__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__19974__auto__);

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
return (function (p1__32228_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__32228_SHARP_,sd,i);
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
return (function clojure$core$matrix$impl$persistent_vector$iter__32230(s__32231){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__32231__$1 = s__32231;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32231__$1);
if(temp__4657__auto__){
var s__32231__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32231__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__32231__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__32233 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__32232 = (0);
while(true){
if((i__32232 < size__19497__auto__)){
var j = cljs.core._nth.call(null,c__19496__auto__,i__32232);
cljs.core.chunk_append.call(null,b__32233,cljs.core.mapv.call(null,((function (i__32232,j,c__19496__auto__,size__19497__auto__,b__32233,s__32231__$2,temp__4657__auto__,m__$1){
return (function (p1__32229_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__32229_SHARP_,j);
});})(i__32232,j,c__19496__auto__,size__19497__auto__,b__32233,s__32231__$2,temp__4657__auto__,m__$1))
,m__$1));

var G__32234 = (i__32232 + (1));
i__32232 = G__32234;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32233),clojure$core$matrix$impl$persistent_vector$iter__32230.call(null,cljs.core.chunk_rest.call(null,s__32231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32233),null);
}
} else {
var j = cljs.core.first.call(null,s__32231__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__32231__$2,temp__4657__auto__,m__$1){
return (function (p1__32229_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__32229_SHARP_,j);
});})(j,s__32231__$2,temp__4657__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__32230.call(null,cljs.core.rest.call(null,s__32231__$2)));
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
return (function (p1__32236_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__32236_SHARP_);
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
return (function (p1__32237_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__32237_SHARP_,(dimension__$1 - (1)),indices);
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
var vec__32247 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__32247,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32247,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__32249 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__32249,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32249,(1),null);
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
var G__32253 = (i + (1));
var G__32254 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__32253;
res = G__32254;
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
var G__32255 = (i + (1));
var G__32256 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__32255;
res = G__32256;
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
var G__32257 = (i + (1));
var G__32258 = (res + (x * x));
i = G__32257;
res = G__32258;
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
var G__32259 = (i + (1));
var G__32260 = (res + (x * x));
i = G__32259;
res = G__32260;
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
var G__32263 = (i + (1));
i = G__32263;
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
var G__32267 = (i + (1));
i = G__32267;
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
var G__32269 = cljs.core.next.call(null,sa);
var G__32270 = cljs.core.next.call(null,sb);
sa = G__32269;
sb = G__32270;
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
var vec__32277 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__32277,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32277,(1),null);
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
return (function clojure$core$matrix$impl$persistent_vector$iter__32278(s__32279){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__32279__$1 = s__32279;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32279__$1);
if(temp__4657__auto__){
var s__32279__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32279__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__32279__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__32281 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__32280 = (0);
while(true){
if((i__32280 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__32280);
cljs.core.chunk_append.call(null,b__32281,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__32296 = (i__32280 + (1));
i__32280 = G__32296;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32281),clojure$core$matrix$impl$persistent_vector$iter__32278.call(null,cljs.core.chunk_rest.call(null,s__32279__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32281),null);
}
} else {
var i = cljs.core.first.call(null,s__32279__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__32278.call(null,cljs.core.rest.call(null,s__32279__$2)));
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
return (function (p1__32276_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__32276_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if(((mdims === (2))) && ((adims === (2)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__32283(s__32284){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__32284__$1 = s__32284;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32284__$1);
if(temp__4657__auto__){
var s__32284__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32284__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__32284__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__32286 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__32285 = (0);
while(true){
if((i__32285 < size__19497__auto__)){
var j = cljs.core._nth.call(null,c__19496__auto__,i__32285);
cljs.core.chunk_append.call(null,b__32286,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__32303 = (i__32285 + (1));
i__32285 = G__32303;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32286),clojure$core$matrix$impl$persistent_vector$iter__32283.call(null,cljs.core.chunk_rest.call(null,s__32284__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32286),null);
}
} else {
var j = cljs.core.first.call(null,s__32284__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__32283.call(null,cljs.core.rest.call(null,s__32284__$2)));
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
return (function (p1__32304_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__32304_SHARP_,a);
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
return (function (p1__32313_SHARP_){
return (p1__32313_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__32314_SHARP_){
return (a * p1__32314_SHARP_);
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
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__32329){
var vec__32338 = p__32329;
var name = cljs.core.nth.call(null,vec__32338,(0),null);
var func = cljs.core.nth.call(null,vec__32338,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32328__auto__","x__32328__auto__",965304529,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,func),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__32328__auto__","x__32328__auto__",965304529,null)))))))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null)))))))));
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
var pv__30358__auto__ = m__$1;
return (((0) === cljs.core.count.call(null,pv__30358__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__30358__auto__,(0))))));
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
var vals__19935__auto___32365 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_32366 = cljs.core.long$.call(null,(0));
while(true){
if(vals__19935__auto___32365){
var v_32367 = cljs.core.first.call(null,vals__19935__auto___32365);
(arr[(off + i_32366)] = v_32367);

var G__32368 = cljs.core.next.call(null,vals__19935__auto___32365);
var G__32369 = (i_32366 + (1));
vals__19935__auto___32365 = G__32368;
i_32366 = G__32369;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19629__auto___32371 = size;
var i_32372 = (0);
while(true){
if((i_32372 < n__19629__auto___32371)){
(arr[(off + i_32372)] = cljs.core.nth.call(null,m,i_32372));

var G__32373 = (i_32372 + (1));
i_32372 = G__32373;
continue;
} else {
}
break;
}
} else {
var skip_32375 = cljs.core.quot.call(null,size,ct);
var n__19629__auto___32376 = ct;
var i_32377 = (0);
while(true){
if((i_32377 < n__19629__auto___32376)){
clojure$core$matrix$impl$persistent_vector$copy_to_double_array.call(null,cljs.core.nth.call(null,m,i_32377),arr,(off + (i_32377 * skip_32375)),skip_32375);

var G__32380 = (i_32377 + (1));
i_32377 = G__32380;
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
var vals__19935__auto___32397 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_32398 = cljs.core.long$.call(null,(0));
while(true){
if(vals__19935__auto___32397){
var v_32399 = cljs.core.first.call(null,vals__19935__auto___32397);
(arr[(off + i_32398)] = v_32399);

var G__32400 = cljs.core.next.call(null,vals__19935__auto___32397);
var G__32401 = (i_32398 + (1));
vals__19935__auto___32397 = G__32400;
i_32398 = G__32401;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19629__auto___32402 = size;
var i_32403 = (0);
while(true){
if((i_32403 < n__19629__auto___32402)){
(arr[(off + i_32403)] = cljs.core.nth.call(null,m,i_32403));

var G__32441 = (i_32403 + (1));
i_32403 = G__32441;
continue;
} else {
}
break;
}
} else {
var skip_32442 = cljs.core.quot.call(null,size,ct);
var n__19629__auto___32444 = ct;
var i_32445 = (0);
while(true){
if((i_32445 < n__19629__auto___32444)){
clojure$core$matrix$impl$persistent_vector$copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_32445),arr,(off + (i_32445 * skip_32442)),skip_32442);

var G__32446 = (i_32445 + (1));
i_32445 = G__32446;
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
var vec__32469 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__32469,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__32469,(1),null);
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
return (function (p1__32463_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__32463_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__32470_32494 = cljs.core.seq.call(null,m__$1);
var chunk__32471_32495 = null;
var count__32472_32496 = (0);
var i__32473_32497 = (0);
while(true){
if((i__32473_32497 < count__32472_32496)){
var s_32499 = cljs.core._nth.call(null,chunk__32471_32495,i__32473_32497);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_32499,f);

var G__32508 = seq__32470_32494;
var G__32509 = chunk__32471_32495;
var G__32510 = count__32472_32496;
var G__32511 = (i__32473_32497 + (1));
seq__32470_32494 = G__32508;
chunk__32471_32495 = G__32509;
count__32472_32496 = G__32510;
i__32473_32497 = G__32511;
continue;
} else {
var temp__4657__auto___32512 = cljs.core.seq.call(null,seq__32470_32494);
if(temp__4657__auto___32512){
var seq__32470_32513__$1 = temp__4657__auto___32512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32470_32513__$1)){
var c__19529__auto___32514 = cljs.core.chunk_first.call(null,seq__32470_32513__$1);
var G__32515 = cljs.core.chunk_rest.call(null,seq__32470_32513__$1);
var G__32516 = c__19529__auto___32514;
var G__32517 = cljs.core.count.call(null,c__19529__auto___32514);
var G__32518 = (0);
seq__32470_32494 = G__32515;
chunk__32471_32495 = G__32516;
count__32472_32496 = G__32517;
i__32473_32497 = G__32518;
continue;
} else {
var s_32521 = cljs.core.first.call(null,seq__32470_32513__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_32521,f);

var G__32529 = cljs.core.next.call(null,seq__32470_32513__$1);
var G__32530 = null;
var G__32531 = (0);
var G__32532 = (0);
seq__32470_32494 = G__32529;
chunk__32471_32495 = G__32530;
count__32472_32496 = G__32531;
i__32473_32497 = G__32532;
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
var n__19629__auto___32534 = cljs.core.count.call(null,m__$1);
var i_32535 = (0);
while(true){
if((i_32535 < n__19629__auto___32534)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_32535),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_32535));

var G__32536 = (i_32535 + (1));
i_32535 = G__32536;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19629__auto___32538 = cljs.core.count.call(null,m__$1);
var i_32540 = (0);
while(true){
if((i_32540 < n__19629__auto___32538)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_32540),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_32540),cljs.core.map.call(null,((function (i_32540,n__19629__auto___32538,m__$1){
return (function (p1__32465_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__32465_SHARP_,i_32540);
});})(i_32540,n__19629__auto___32538,m__$1))
,more));

var G__32550 = (i_32540 + (1));
i_32540 = G__32550;
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
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__19974__auto__ = ms__$1;
if(typeof x__19974__auto__ === 'number'){
return x__19974__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__19974__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__32581(s__32582){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__32582__$1 = s__32582;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32582__$1);
if(temp__4657__auto__){
var s__32582__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32582__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__32582__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__32584 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__32583 = (0);
while(true){
if((i__32583 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__32583);
cljs.core.chunk_append.call(null,b__32584,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__32627 = (i__32583 + (1));
i__32583 = G__32627;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32584),clojure$core$matrix$impl$persistent_vector$iter__32581.call(null,cljs.core.chunk_rest.call(null,s__32582__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32584),null);
}
} else {
var i = cljs.core.first.call(null,s__32582__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__32581.call(null,cljs.core.rest.call(null,s__32582__$2)));
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
return (function clojure$core$matrix$impl$persistent_vector$iter__32604(s__32605){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__32605__$1 = s__32605;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__32605__$1);
if(temp__4657__auto__){
var s__32605__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32605__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__32605__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__32607 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__32606 = (0);
while(true){
if((i__32606 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__32606);
cljs.core.chunk_append.call(null,b__32607,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__32606,i,c__19496__auto__,size__19497__auto__,b__32607,s__32605__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__32551_SHARP_,p2__32552_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__32551_SHARP_),p2__32552_SHARP_);
});})(i__32606,i,c__19496__auto__,size__19497__auto__,b__32607,s__32605__$2,temp__4657__auto__,dims,ms__$1))
));

var G__32638 = (i__32606 + (1));
i__32606 = G__32638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32607),clojure$core$matrix$impl$persistent_vector$iter__32604.call(null,cljs.core.chunk_rest.call(null,s__32605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32607),null);
}
} else {
var i = cljs.core.first.call(null,s__32605__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__32605__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__32551_SHARP_,p2__32552_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__32551_SHARP_),p2__32552_SHARP_);
});})(i,s__32605__$2,temp__4657__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__32604.call(null,cljs.core.rest.call(null,s__32605__$2)));
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
var v = (function (){var x__19974__auto__ = as__$1;
if(typeof x__19974__auto__ === 'number'){
return x__19974__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__19974__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__32553_SHARP_,p2__32554_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32553_SHARP_], null),p2__32554_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__32651__delegate = function (p1__32555_SHARP_,rest__32556_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32555_SHARP_], null),rest__32556_SHARP_);
};
var G__32651 = function (p1__32555_SHARP_,var_args){
var rest__32556_SHARP_ = null;
if (arguments.length > 1) {
var G__32655__i = 0, G__32655__a = new Array(arguments.length -  1);
while (G__32655__i < G__32655__a.length) {G__32655__a[G__32655__i] = arguments[G__32655__i + 1]; ++G__32655__i;}
  rest__32556_SHARP_ = new cljs.core.IndexedSeq(G__32655__a,0);
} 
return G__32651__delegate.call(this,p1__32555_SHARP_,rest__32556_SHARP_);};
G__32651.cljs$lang$maxFixedArity = 1;
G__32651.cljs$lang$applyTo = (function (arglist__32656){
var p1__32555_SHARP_ = cljs.core.first(arglist__32656);
var rest__32556_SHARP_ = cljs.core.rest(arglist__32656);
return G__32651__delegate(p1__32555_SHARP_,rest__32556_SHARP_);
});
G__32651.cljs$core$IFn$_invoke$arity$variadic = G__32651__delegate;
return G__32651;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__32659__delegate = function (p1__32557_SHARP_,rest__32558_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__32557_SHARP_),rest__32558_SHARP_);
};
var G__32659 = function (p1__32557_SHARP_,var_args){
var rest__32558_SHARP_ = null;
if (arguments.length > 1) {
var G__32660__i = 0, G__32660__a = new Array(arguments.length -  1);
while (G__32660__i < G__32660__a.length) {G__32660__a[G__32660__i] = arguments[G__32660__i + 1]; ++G__32660__i;}
  rest__32558_SHARP_ = new cljs.core.IndexedSeq(G__32660__a,0);
} 
return G__32659__delegate.call(this,p1__32557_SHARP_,rest__32558_SHARP_);};
G__32659.cljs$lang$maxFixedArity = 1;
G__32659.cljs$lang$applyTo = (function (arglist__32661){
var p1__32557_SHARP_ = cljs.core.first(arglist__32661);
var rest__32558_SHARP_ = cljs.core.rest(arglist__32661);
return G__32659__delegate(p1__32557_SHARP_,rest__32558_SHARP_);
});
G__32659.cljs$core$IFn$_invoke$arity$variadic = G__32659__delegate;
return G__32659;
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
var G__32670__delegate = function (p1__32559_SHARP_,rest__32560_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32559_SHARP_], null),rest__32560_SHARP_);
};
var G__32670 = function (p1__32559_SHARP_,var_args){
var rest__32560_SHARP_ = null;
if (arguments.length > 1) {
var G__32671__i = 0, G__32671__a = new Array(arguments.length -  1);
while (G__32671__i < G__32671__a.length) {G__32671__a[G__32671__i] = arguments[G__32671__i + 1]; ++G__32671__i;}
  rest__32560_SHARP_ = new cljs.core.IndexedSeq(G__32671__a,0);
} 
return G__32670__delegate.call(this,p1__32559_SHARP_,rest__32560_SHARP_);};
G__32670.cljs$lang$maxFixedArity = 1;
G__32670.cljs$lang$applyTo = (function (arglist__32672){
var p1__32559_SHARP_ = cljs.core.first(arglist__32672);
var rest__32560_SHARP_ = cljs.core.rest(arglist__32672);
return G__32670__delegate(p1__32559_SHARP_,rest__32560_SHARP_);
});
G__32670.cljs$core$IFn$_invoke$arity$variadic = G__32670__delegate;
return G__32670;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__32685__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__32686__delegate = function (p1__32572_SHARP_,rest__32573_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__32572_SHARP_),rest__32573_SHARP_);
};
var G__32686 = function (p1__32572_SHARP_,var_args){
var rest__32573_SHARP_ = null;
if (arguments.length > 1) {
var G__32687__i = 0, G__32687__a = new Array(arguments.length -  1);
while (G__32687__i < G__32687__a.length) {G__32687__a[G__32687__i] = arguments[G__32687__i + 1]; ++G__32687__i;}
  rest__32573_SHARP_ = new cljs.core.IndexedSeq(G__32687__a,0);
} 
return G__32686__delegate.call(this,p1__32572_SHARP_,rest__32573_SHARP_);};
G__32686.cljs$lang$maxFixedArity = 1;
G__32686.cljs$lang$applyTo = (function (arglist__32688){
var p1__32572_SHARP_ = cljs.core.first(arglist__32688);
var rest__32573_SHARP_ = cljs.core.rest(arglist__32688);
return G__32686__delegate(p1__32572_SHARP_,rest__32573_SHARP_);
});
G__32686.cljs$core$IFn$_invoke$arity$variadic = G__32686__delegate;
return G__32686;
})()
;})(ms__$1))
,a,mr);
};
var G__32685 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__32689__i = 0, G__32689__a = new Array(arguments.length -  3);
while (G__32689__i < G__32689__a.length) {G__32689__a[G__32689__i] = arguments[G__32689__i + 3]; ++G__32689__i;}
  mr = new cljs.core.IndexedSeq(G__32689__a,0);
} 
return G__32685__delegate.call(this,i,m,a,mr);};
G__32685.cljs$lang$maxFixedArity = 3;
G__32685.cljs$lang$applyTo = (function (arglist__32690){
var i = cljs.core.first(arglist__32690);
arglist__32690 = cljs.core.next(arglist__32690);
var m = cljs.core.first(arglist__32690);
arglist__32690 = cljs.core.next(arglist__32690);
var a = cljs.core.first(arglist__32690);
var mr = cljs.core.rest(arglist__32690);
return G__32685__delegate(i,m,a,mr);
});
G__32685.cljs$core$IFn$_invoke$arity$variadic = G__32685__delegate;
return G__32685;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__19629__auto___32693 = cljs.core.count.call(null,m__$1);
var i_32694 = (0);
while(true){
if((i_32694 < n__19629__auto___32693)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_32694),((function (i_32694,n__19629__auto___32693,m__$1){
return (function (p1__32574_SHARP_,p2__32575_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_32694,p1__32574_SHARP_),p2__32575_SHARP_);
});})(i_32694,n__19629__auto___32693,m__$1))
);

var G__32695 = (i_32694 + (1));
i_32694 = G__32695;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__19629__auto___32696 = cljs.core.count.call(null,m__$1);
var i_32697 = (0);
while(true){
if((i_32697 < n__19629__auto___32696)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_32697),((function (i_32697,n__19629__auto___32696,m__$1){
return (function() { 
var G__32699__delegate = function (p1__32576_SHARP_,rest__32577_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_32697,p1__32576_SHARP_),rest__32577_SHARP_);
};
var G__32699 = function (p1__32576_SHARP_,var_args){
var rest__32577_SHARP_ = null;
if (arguments.length > 1) {
var G__32700__i = 0, G__32700__a = new Array(arguments.length -  1);
while (G__32700__i < G__32700__a.length) {G__32700__a[G__32700__i] = arguments[G__32700__i + 1]; ++G__32700__i;}
  rest__32577_SHARP_ = new cljs.core.IndexedSeq(G__32700__a,0);
} 
return G__32699__delegate.call(this,p1__32576_SHARP_,rest__32577_SHARP_);};
G__32699.cljs$lang$maxFixedArity = 1;
G__32699.cljs$lang$applyTo = (function (arglist__32701){
var p1__32576_SHARP_ = cljs.core.first(arglist__32701);
var rest__32577_SHARP_ = cljs.core.rest(arglist__32701);
return G__32699__delegate(p1__32576_SHARP_,rest__32577_SHARP_);
});
G__32699.cljs$core$IFn$_invoke$arity$variadic = G__32699__delegate;
return G__32699;
})()
;})(i_32697,n__19629__auto___32696,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_32697));

var G__32702 = (i_32697 + (1));
i_32697 = G__32702;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19629__auto___32705 = cljs.core.count.call(null,m__$1);
var i_32706 = (0);
while(true){
if((i_32706 < n__19629__auto___32705)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_32706),((function (i_32706,n__19629__auto___32705,m__$1){
return (function() { 
var G__32707__delegate = function (p1__32578_SHARP_,rest__32579_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_32706,p1__32578_SHARP_),rest__32579_SHARP_);
};
var G__32707 = function (p1__32578_SHARP_,var_args){
var rest__32579_SHARP_ = null;
if (arguments.length > 1) {
var G__32708__i = 0, G__32708__a = new Array(arguments.length -  1);
while (G__32708__i < G__32708__a.length) {G__32708__a[G__32708__i] = arguments[G__32708__i + 1]; ++G__32708__i;}
  rest__32579_SHARP_ = new cljs.core.IndexedSeq(G__32708__a,0);
} 
return G__32707__delegate.call(this,p1__32578_SHARP_,rest__32579_SHARP_);};
G__32707.cljs$lang$maxFixedArity = 1;
G__32707.cljs$lang$applyTo = (function (arglist__32709){
var p1__32578_SHARP_ = cljs.core.first(arglist__32709);
var rest__32579_SHARP_ = cljs.core.rest(arglist__32709);
return G__32707__delegate(p1__32578_SHARP_,rest__32579_SHARP_);
});
G__32707.cljs$core$IFn$_invoke$arity$variadic = G__32707__delegate;
return G__32707;
})()
;})(i_32706,n__19629__auto___32705,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_32706),cljs.core.map.call(null,((function (i_32706,n__19629__auto___32705,m__$1){
return (function (p1__32580_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__32580_SHARP_,i_32706);
});})(i_32706,n__19629__auto___32705,m__$1))
,more));

var G__32715 = (i_32706 + (1));
i_32706 = G__32715;
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
return (function (p1__32716_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__32716_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Array dimension does not match length of args")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__32717_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__32717_SHARP_),cljs.core.next.call(null,args));
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