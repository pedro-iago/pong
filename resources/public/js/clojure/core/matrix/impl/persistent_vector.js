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
var G__35911 = (i + (1));
var G__35912 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__35911;
v__$1 = G__35912;
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
return (function (p1__35913_SHARP_){
return clojure$core$matrix$impl$persistent_vector$check_vector_shape.call(null,p1__35913_SHARP_,ns);
});})(ns,temp__4655__auto__,and__18714__auto____$1,and__18714__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__4655__auto__,and__18714__auto____$1,and__18714__auto__){
return (function (p1__35914_SHARP_){
return !((p1__35914_SHARP_ instanceof cljs.core.PersistentVector));
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
var x__21106__auto__ = r;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

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
return (function (p1__35961_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__35961_SHARP_,sd,i);
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
return (function clojure$core$matrix$impl$persistent_vector$iter__35975(s__35976){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__35976__$1 = s__35976;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35976__$1);
if(temp__4657__auto__){
var s__35976__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35976__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__35976__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__35978 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__35977 = (0);
while(true){
if((i__35977 < size__19497__auto__)){
var j = cljs.core._nth.call(null,c__19496__auto__,i__35977);
cljs.core.chunk_append.call(null,b__35978,cljs.core.mapv.call(null,((function (i__35977,j,c__19496__auto__,size__19497__auto__,b__35978,s__35976__$2,temp__4657__auto__,m__$1){
return (function (p1__35972_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__35972_SHARP_,j);
});})(i__35977,j,c__19496__auto__,size__19497__auto__,b__35978,s__35976__$2,temp__4657__auto__,m__$1))
,m__$1));

var G__35985 = (i__35977 + (1));
i__35977 = G__35985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35978),clojure$core$matrix$impl$persistent_vector$iter__35975.call(null,cljs.core.chunk_rest.call(null,s__35976__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35978),null);
}
} else {
var j = cljs.core.first.call(null,s__35976__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__35976__$2,temp__4657__auto__,m__$1){
return (function (p1__35972_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__35972_SHARP_,j);
});})(j,s__35976__$2,temp__4657__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__35975.call(null,cljs.core.rest.call(null,s__35976__$2)));
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
return (function (p1__36001_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__36001_SHARP_);
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
return (function (p1__36002_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__36002_SHARP_,(dimension__$1 - (1)),indices);
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
var vec__36005 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__36005,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__36005,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__36008 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__36008,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__36008,(1),null);
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
var G__36023 = (i + (1));
var G__36024 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__36023;
res = G__36024;
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
var G__36025 = (i + (1));
var G__36026 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__36025;
res = G__36026;
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
var G__36027 = (i + (1));
var G__36028 = (res + (x * x));
i = G__36027;
res = G__36028;
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
var G__36029 = (i + (1));
var G__36030 = (res + (x * x));
i = G__36029;
res = G__36030;
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
var G__36040 = (i + (1));
i = G__36040;
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
var G__36041 = (i + (1));
i = G__36041;
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
var G__36044 = cljs.core.next.call(null,sa);
var G__36045 = cljs.core.next.call(null,sb);
sa = G__36044;
sb = G__36045;
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
var vec__36049 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__36049,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__36049,(1),null);
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
return (function clojure$core$matrix$impl$persistent_vector$iter__36050(s__36051){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__36051__$1 = s__36051;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36051__$1);
if(temp__4657__auto__){
var s__36051__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36051__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__36051__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__36053 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__36052 = (0);
while(true){
if((i__36052 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__36052);
cljs.core.chunk_append.call(null,b__36053,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__36063 = (i__36052 + (1));
i__36052 = G__36063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36053),clojure$core$matrix$impl$persistent_vector$iter__36050.call(null,cljs.core.chunk_rest.call(null,s__36051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36053),null);
}
} else {
var i = cljs.core.first.call(null,s__36051__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__36050.call(null,cljs.core.rest.call(null,s__36051__$2)));
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
return (function (p1__36048_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__36048_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if(((mdims === (2))) && ((adims === (2)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__36056(s__36057){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__36057__$1 = s__36057;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36057__$1);
if(temp__4657__auto__){
var s__36057__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36057__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__36057__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__36059 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__36058 = (0);
while(true){
if((i__36058 < size__19497__auto__)){
var j = cljs.core._nth.call(null,c__19496__auto__,i__36058);
cljs.core.chunk_append.call(null,b__36059,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__36070 = (i__36058 + (1));
i__36058 = G__36070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36059),clojure$core$matrix$impl$persistent_vector$iter__36056.call(null,cljs.core.chunk_rest.call(null,s__36057__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36059),null);
}
} else {
var j = cljs.core.first.call(null,s__36057__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__36056.call(null,cljs.core.rest.call(null,s__36057__$2)));
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
return (function (p1__36071_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__36071_SHARP_,a);
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
return (function (p1__36074_SHARP_){
return (p1__36074_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__36075_SHARP_){
return (a * p1__36075_SHARP_);
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
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__36081){
var vec__36085 = p__36081;
var name = cljs.core.nth.call(null,vec__36085,(0),null);
var func = cljs.core.nth.call(null,vec__36085,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36080__auto__","x__36080__auto__",-2079380958,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,func),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__36080__auto__","x__36080__auto__",-2079380958,null)))))))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null)))))))));
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
var pv__27293__auto__ = m__$1;
return (((0) === cljs.core.count.call(null,pv__27293__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__27293__auto__,(0))))));
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
var vals__21075__auto___36128 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_36129 = cljs.core.long$.call(null,(0));
while(true){
if(vals__21075__auto___36128){
var v_36130 = cljs.core.first.call(null,vals__21075__auto___36128);
(arr[(off + i_36129)] = v_36130);

var G__36136 = cljs.core.next.call(null,vals__21075__auto___36128);
var G__36137 = (i_36129 + (1));
vals__21075__auto___36128 = G__36136;
i_36129 = G__36137;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19629__auto___36138 = size;
var i_36140 = (0);
while(true){
if((i_36140 < n__19629__auto___36138)){
(arr[(off + i_36140)] = cljs.core.nth.call(null,m,i_36140));

var G__36142 = (i_36140 + (1));
i_36140 = G__36142;
continue;
} else {
}
break;
}
} else {
var skip_36147 = cljs.core.quot.call(null,size,ct);
var n__19629__auto___36148 = ct;
var i_36149 = (0);
while(true){
if((i_36149 < n__19629__auto___36148)){
clojure$core$matrix$impl$persistent_vector$copy_to_double_array.call(null,cljs.core.nth.call(null,m,i_36149),arr,(off + (i_36149 * skip_36147)),skip_36147);

var G__36151 = (i_36149 + (1));
i_36149 = G__36151;
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
var vals__21075__auto___36175 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_36176 = cljs.core.long$.call(null,(0));
while(true){
if(vals__21075__auto___36175){
var v_36178 = cljs.core.first.call(null,vals__21075__auto___36175);
(arr[(off + i_36176)] = v_36178);

var G__36179 = cljs.core.next.call(null,vals__21075__auto___36175);
var G__36180 = (i_36176 + (1));
vals__21075__auto___36175 = G__36179;
i_36176 = G__36180;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19629__auto___36186 = size;
var i_36187 = (0);
while(true){
if((i_36187 < n__19629__auto___36186)){
(arr[(off + i_36187)] = cljs.core.nth.call(null,m,i_36187));

var G__36189 = (i_36187 + (1));
i_36187 = G__36189;
continue;
} else {
}
break;
}
} else {
var skip_36190 = cljs.core.quot.call(null,size,ct);
var n__19629__auto___36191 = ct;
var i_36193 = (0);
while(true){
if((i_36193 < n__19629__auto___36191)){
clojure$core$matrix$impl$persistent_vector$copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_36193),arr,(off + (i_36193 * skip_36190)),skip_36190);

var G__36194 = (i_36193 + (1));
i_36193 = G__36194;
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
var vec__36201 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__36201,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__36201,(1),null);
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
return (function (p1__36199_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__36199_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__36202_36209 = cljs.core.seq.call(null,m__$1);
var chunk__36203_36210 = null;
var count__36204_36211 = (0);
var i__36205_36212 = (0);
while(true){
if((i__36205_36212 < count__36204_36211)){
var s_36213 = cljs.core._nth.call(null,chunk__36203_36210,i__36205_36212);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_36213,f);

var G__36214 = seq__36202_36209;
var G__36215 = chunk__36203_36210;
var G__36216 = count__36204_36211;
var G__36217 = (i__36205_36212 + (1));
seq__36202_36209 = G__36214;
chunk__36203_36210 = G__36215;
count__36204_36211 = G__36216;
i__36205_36212 = G__36217;
continue;
} else {
var temp__4657__auto___36218 = cljs.core.seq.call(null,seq__36202_36209);
if(temp__4657__auto___36218){
var seq__36202_36219__$1 = temp__4657__auto___36218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36202_36219__$1)){
var c__19529__auto___36220 = cljs.core.chunk_first.call(null,seq__36202_36219__$1);
var G__36221 = cljs.core.chunk_rest.call(null,seq__36202_36219__$1);
var G__36222 = c__19529__auto___36220;
var G__36223 = cljs.core.count.call(null,c__19529__auto___36220);
var G__36224 = (0);
seq__36202_36209 = G__36221;
chunk__36203_36210 = G__36222;
count__36204_36211 = G__36223;
i__36205_36212 = G__36224;
continue;
} else {
var s_36225 = cljs.core.first.call(null,seq__36202_36219__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_36225,f);

var G__36226 = cljs.core.next.call(null,seq__36202_36219__$1);
var G__36227 = null;
var G__36228 = (0);
var G__36229 = (0);
seq__36202_36209 = G__36226;
chunk__36203_36210 = G__36227;
count__36204_36211 = G__36228;
i__36205_36212 = G__36229;
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
var n__19629__auto___36234 = cljs.core.count.call(null,m__$1);
var i_36235 = (0);
while(true){
if((i_36235 < n__19629__auto___36234)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_36235),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_36235));

var G__36236 = (i_36235 + (1));
i_36235 = G__36236;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19629__auto___36237 = cljs.core.count.call(null,m__$1);
var i_36239 = (0);
while(true){
if((i_36239 < n__19629__auto___36237)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_36239),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_36239),cljs.core.map.call(null,((function (i_36239,n__19629__auto___36237,m__$1){
return (function (p1__36200_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__36200_SHARP_,i_36239);
});})(i_36239,n__19629__auto___36237,m__$1))
,more));

var G__36244 = (i_36239 + (1));
i_36239 = G__36244;
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
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__21106__auto__ = ms__$1;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__19498__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__36272(s__36273){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__36273__$1 = s__36273;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36273__$1);
if(temp__4657__auto__){
var s__36273__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36273__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__36273__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__36275 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__36274 = (0);
while(true){
if((i__36274 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__36274);
cljs.core.chunk_append.call(null,b__36275,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__36300 = (i__36274 + (1));
i__36274 = G__36300;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36275),clojure$core$matrix$impl$persistent_vector$iter__36272.call(null,cljs.core.chunk_rest.call(null,s__36273__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36275),null);
}
} else {
var i = cljs.core.first.call(null,s__36273__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__36272.call(null,cljs.core.rest.call(null,s__36273__$2)));
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
return (function clojure$core$matrix$impl$persistent_vector$iter__36281(s__36282){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__36282__$1 = s__36282;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__36282__$1);
if(temp__4657__auto__){
var s__36282__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__36282__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__36282__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__36284 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__36283 = (0);
while(true){
if((i__36283 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__36283);
cljs.core.chunk_append.call(null,b__36284,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__36283,i,c__19496__auto__,size__19497__auto__,b__36284,s__36282__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__36253_SHARP_,p2__36254_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__36253_SHARP_),p2__36254_SHARP_);
});})(i__36283,i,c__19496__auto__,size__19497__auto__,b__36284,s__36282__$2,temp__4657__auto__,dims,ms__$1))
));

var G__36301 = (i__36283 + (1));
i__36283 = G__36301;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36284),clojure$core$matrix$impl$persistent_vector$iter__36281.call(null,cljs.core.chunk_rest.call(null,s__36282__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__36284),null);
}
} else {
var i = cljs.core.first.call(null,s__36282__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__36282__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__36253_SHARP_,p2__36254_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__36253_SHARP_),p2__36254_SHARP_);
});})(i,s__36282__$2,temp__4657__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__36281.call(null,cljs.core.rest.call(null,s__36282__$2)));
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
var v = (function (){var x__21106__auto__ = as__$1;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__36255_SHARP_,p2__36256_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36255_SHARP_], null),p2__36256_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__36303__delegate = function (p1__36257_SHARP_,rest__36258_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36257_SHARP_], null),rest__36258_SHARP_);
};
var G__36303 = function (p1__36257_SHARP_,var_args){
var rest__36258_SHARP_ = null;
if (arguments.length > 1) {
var G__36304__i = 0, G__36304__a = new Array(arguments.length -  1);
while (G__36304__i < G__36304__a.length) {G__36304__a[G__36304__i] = arguments[G__36304__i + 1]; ++G__36304__i;}
  rest__36258_SHARP_ = new cljs.core.IndexedSeq(G__36304__a,0);
} 
return G__36303__delegate.call(this,p1__36257_SHARP_,rest__36258_SHARP_);};
G__36303.cljs$lang$maxFixedArity = 1;
G__36303.cljs$lang$applyTo = (function (arglist__36305){
var p1__36257_SHARP_ = cljs.core.first(arglist__36305);
var rest__36258_SHARP_ = cljs.core.rest(arglist__36305);
return G__36303__delegate(p1__36257_SHARP_,rest__36258_SHARP_);
});
G__36303.cljs$core$IFn$_invoke$arity$variadic = G__36303__delegate;
return G__36303;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__36306__delegate = function (p1__36259_SHARP_,rest__36260_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__36259_SHARP_),rest__36260_SHARP_);
};
var G__36306 = function (p1__36259_SHARP_,var_args){
var rest__36260_SHARP_ = null;
if (arguments.length > 1) {
var G__36307__i = 0, G__36307__a = new Array(arguments.length -  1);
while (G__36307__i < G__36307__a.length) {G__36307__a[G__36307__i] = arguments[G__36307__i + 1]; ++G__36307__i;}
  rest__36260_SHARP_ = new cljs.core.IndexedSeq(G__36307__a,0);
} 
return G__36306__delegate.call(this,p1__36259_SHARP_,rest__36260_SHARP_);};
G__36306.cljs$lang$maxFixedArity = 1;
G__36306.cljs$lang$applyTo = (function (arglist__36308){
var p1__36259_SHARP_ = cljs.core.first(arglist__36308);
var rest__36260_SHARP_ = cljs.core.rest(arglist__36308);
return G__36306__delegate(p1__36259_SHARP_,rest__36260_SHARP_);
});
G__36306.cljs$core$IFn$_invoke$arity$variadic = G__36306__delegate;
return G__36306;
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
var G__36309__delegate = function (p1__36261_SHARP_,rest__36262_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36261_SHARP_], null),rest__36262_SHARP_);
};
var G__36309 = function (p1__36261_SHARP_,var_args){
var rest__36262_SHARP_ = null;
if (arguments.length > 1) {
var G__36310__i = 0, G__36310__a = new Array(arguments.length -  1);
while (G__36310__i < G__36310__a.length) {G__36310__a[G__36310__i] = arguments[G__36310__i + 1]; ++G__36310__i;}
  rest__36262_SHARP_ = new cljs.core.IndexedSeq(G__36310__a,0);
} 
return G__36309__delegate.call(this,p1__36261_SHARP_,rest__36262_SHARP_);};
G__36309.cljs$lang$maxFixedArity = 1;
G__36309.cljs$lang$applyTo = (function (arglist__36311){
var p1__36261_SHARP_ = cljs.core.first(arglist__36311);
var rest__36262_SHARP_ = cljs.core.rest(arglist__36311);
return G__36309__delegate(p1__36261_SHARP_,rest__36262_SHARP_);
});
G__36309.cljs$core$IFn$_invoke$arity$variadic = G__36309__delegate;
return G__36309;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__36312__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__36313__delegate = function (p1__36263_SHARP_,rest__36264_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__36263_SHARP_),rest__36264_SHARP_);
};
var G__36313 = function (p1__36263_SHARP_,var_args){
var rest__36264_SHARP_ = null;
if (arguments.length > 1) {
var G__36314__i = 0, G__36314__a = new Array(arguments.length -  1);
while (G__36314__i < G__36314__a.length) {G__36314__a[G__36314__i] = arguments[G__36314__i + 1]; ++G__36314__i;}
  rest__36264_SHARP_ = new cljs.core.IndexedSeq(G__36314__a,0);
} 
return G__36313__delegate.call(this,p1__36263_SHARP_,rest__36264_SHARP_);};
G__36313.cljs$lang$maxFixedArity = 1;
G__36313.cljs$lang$applyTo = (function (arglist__36315){
var p1__36263_SHARP_ = cljs.core.first(arglist__36315);
var rest__36264_SHARP_ = cljs.core.rest(arglist__36315);
return G__36313__delegate(p1__36263_SHARP_,rest__36264_SHARP_);
});
G__36313.cljs$core$IFn$_invoke$arity$variadic = G__36313__delegate;
return G__36313;
})()
;})(ms__$1))
,a,mr);
};
var G__36312 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__36316__i = 0, G__36316__a = new Array(arguments.length -  3);
while (G__36316__i < G__36316__a.length) {G__36316__a[G__36316__i] = arguments[G__36316__i + 3]; ++G__36316__i;}
  mr = new cljs.core.IndexedSeq(G__36316__a,0);
} 
return G__36312__delegate.call(this,i,m,a,mr);};
G__36312.cljs$lang$maxFixedArity = 3;
G__36312.cljs$lang$applyTo = (function (arglist__36317){
var i = cljs.core.first(arglist__36317);
arglist__36317 = cljs.core.next(arglist__36317);
var m = cljs.core.first(arglist__36317);
arglist__36317 = cljs.core.next(arglist__36317);
var a = cljs.core.first(arglist__36317);
var mr = cljs.core.rest(arglist__36317);
return G__36312__delegate(i,m,a,mr);
});
G__36312.cljs$core$IFn$_invoke$arity$variadic = G__36312__delegate;
return G__36312;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__19629__auto___36320 = cljs.core.count.call(null,m__$1);
var i_36321 = (0);
while(true){
if((i_36321 < n__19629__auto___36320)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_36321),((function (i_36321,n__19629__auto___36320,m__$1){
return (function (p1__36265_SHARP_,p2__36266_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_36321,p1__36265_SHARP_),p2__36266_SHARP_);
});})(i_36321,n__19629__auto___36320,m__$1))
);

var G__36323 = (i_36321 + (1));
i_36321 = G__36323;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__19629__auto___36324 = cljs.core.count.call(null,m__$1);
var i_36326 = (0);
while(true){
if((i_36326 < n__19629__auto___36324)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_36326),((function (i_36326,n__19629__auto___36324,m__$1){
return (function() { 
var G__36329__delegate = function (p1__36267_SHARP_,rest__36268_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_36326,p1__36267_SHARP_),rest__36268_SHARP_);
};
var G__36329 = function (p1__36267_SHARP_,var_args){
var rest__36268_SHARP_ = null;
if (arguments.length > 1) {
var G__36331__i = 0, G__36331__a = new Array(arguments.length -  1);
while (G__36331__i < G__36331__a.length) {G__36331__a[G__36331__i] = arguments[G__36331__i + 1]; ++G__36331__i;}
  rest__36268_SHARP_ = new cljs.core.IndexedSeq(G__36331__a,0);
} 
return G__36329__delegate.call(this,p1__36267_SHARP_,rest__36268_SHARP_);};
G__36329.cljs$lang$maxFixedArity = 1;
G__36329.cljs$lang$applyTo = (function (arglist__36332){
var p1__36267_SHARP_ = cljs.core.first(arglist__36332);
var rest__36268_SHARP_ = cljs.core.rest(arglist__36332);
return G__36329__delegate(p1__36267_SHARP_,rest__36268_SHARP_);
});
G__36329.cljs$core$IFn$_invoke$arity$variadic = G__36329__delegate;
return G__36329;
})()
;})(i_36326,n__19629__auto___36324,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_36326));

var G__36333 = (i_36326 + (1));
i_36326 = G__36333;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19629__auto___36334 = cljs.core.count.call(null,m__$1);
var i_36335 = (0);
while(true){
if((i_36335 < n__19629__auto___36334)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_36335),((function (i_36335,n__19629__auto___36334,m__$1){
return (function() { 
var G__36336__delegate = function (p1__36269_SHARP_,rest__36270_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_36335,p1__36269_SHARP_),rest__36270_SHARP_);
};
var G__36336 = function (p1__36269_SHARP_,var_args){
var rest__36270_SHARP_ = null;
if (arguments.length > 1) {
var G__36337__i = 0, G__36337__a = new Array(arguments.length -  1);
while (G__36337__i < G__36337__a.length) {G__36337__a[G__36337__i] = arguments[G__36337__i + 1]; ++G__36337__i;}
  rest__36270_SHARP_ = new cljs.core.IndexedSeq(G__36337__a,0);
} 
return G__36336__delegate.call(this,p1__36269_SHARP_,rest__36270_SHARP_);};
G__36336.cljs$lang$maxFixedArity = 1;
G__36336.cljs$lang$applyTo = (function (arglist__36338){
var p1__36269_SHARP_ = cljs.core.first(arglist__36338);
var rest__36270_SHARP_ = cljs.core.rest(arglist__36338);
return G__36336__delegate(p1__36269_SHARP_,rest__36270_SHARP_);
});
G__36336.cljs$core$IFn$_invoke$arity$variadic = G__36336__delegate;
return G__36336;
})()
;})(i_36335,n__19629__auto___36334,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_36335),cljs.core.map.call(null,((function (i_36335,n__19629__auto___36334,m__$1){
return (function (p1__36271_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__36271_SHARP_,i_36335);
});})(i_36335,n__19629__auto___36334,m__$1))
,more));

var G__36339 = (i_36335 + (1));
i_36335 = G__36339;
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
return (function (p1__36340_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__36340_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Array dimension does not match length of args")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__36341_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__36341_SHARP_),cljs.core.next.call(null,args));
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