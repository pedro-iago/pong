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
var G__28756 = (i + (1));
var G__28757 = (((x === y))?v__$1:cljs.core.assoc.call(null,v__$1,i,y));
i = G__28756;
v__$1 = G__28757;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.core.matrix.impl.persistent_vector.check_vector_shape = (function clojure$core$matrix$impl$persistent_vector$check_vector_shape(v,shape){
var and__18090__auto__ = (v instanceof cljs.core.PersistentVector);
if(and__18090__auto__){
var and__18090__auto____$1 = (cljs.core.count.call(null,v) === cljs.core.long$.call(null,cljs.core.first.call(null,shape)));
if(and__18090__auto____$1){
var temp__4655__auto__ = cljs.core.next.call(null,shape);
if(temp__4655__auto__){
var ns = temp__4655__auto__;
return cljs.core.every_QMARK_.call(null,((function (ns,temp__4655__auto__,and__18090__auto____$1,and__18090__auto__){
return (function (p1__28758_SHARP_){
return clojure$core$matrix$impl$persistent_vector$check_vector_shape.call(null,p1__28758_SHARP_,ns);
});})(ns,temp__4655__auto__,and__18090__auto____$1,and__18090__auto__))
,v);
} else {
return cljs.core.every_QMARK_.call(null,((function (temp__4655__auto__,and__18090__auto____$1,and__18090__auto__){
return (function (p1__28759_SHARP_){
return !((p1__28759_SHARP_ instanceof cljs.core.PersistentVector));
});})(temp__4655__auto__,and__18090__auto____$1,and__18090__auto__))
,v);
}
} else {
return and__18090__auto____$1;
}
} else {
return and__18090__auto__;
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
var and__18090__auto__ = cljs.core.every_QMARK_.call(null,clojure$core$matrix$impl$persistent_vector$is_nested_persistent_vectors_QMARK_,x);
if(and__18090__auto__){
return clojure.core.matrix.impl.persistent_vector.check_vector_shape.call(null,x,clojure.core.matrix.protocols.get_shape.call(null,x));
} else {
return and__18090__auto__;
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
var x__21485__auto__ = r;
if(typeof x__21485__auto__ === 'number'){
return x__21485__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21485__auto__);

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
return (function (p1__28760_SHARP_){
return clojure.core.matrix.protocols.get_slice.call(null,p1__28760_SHARP_,sd,i);
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
return cljs.core.vec.call(null,(function (){var iter__18874__auto__ = ((function (m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__28762(s__28763){
return (new cljs.core.LazySeq(null,((function (m__$1){
return (function (){
var s__28763__$1 = s__28763;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28763__$1);
if(temp__4657__auto__){
var s__28763__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28763__$2)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,s__28763__$2);
var size__18873__auto__ = cljs.core.count.call(null,c__18872__auto__);
var b__28765 = cljs.core.chunk_buffer.call(null,size__18873__auto__);
if((function (){var i__28764 = (0);
while(true){
if((i__28764 < size__18873__auto__)){
var j = cljs.core._nth.call(null,c__18872__auto__,i__28764);
cljs.core.chunk_append.call(null,b__28765,cljs.core.mapv.call(null,((function (i__28764,j,c__18872__auto__,size__18873__auto__,b__28765,s__28763__$2,temp__4657__auto__,m__$1){
return (function (p1__28761_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__28761_SHARP_,j);
});})(i__28764,j,c__18872__auto__,size__18873__auto__,b__28765,s__28763__$2,temp__4657__auto__,m__$1))
,m__$1));

var G__28766 = (i__28764 + (1));
i__28764 = G__28766;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28765),clojure$core$matrix$impl$persistent_vector$iter__28762.call(null,cljs.core.chunk_rest.call(null,s__28763__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28765),null);
}
} else {
var j = cljs.core.first.call(null,s__28763__$2);
return cljs.core.cons.call(null,cljs.core.mapv.call(null,((function (j,s__28763__$2,temp__4657__auto__,m__$1){
return (function (p1__28761_SHARP_){
return clojure.core.matrix.protocols.get_1d.call(null,p1__28761_SHARP_,j);
});})(j,s__28763__$2,temp__4657__auto__,m__$1))
,m__$1),clojure$core$matrix$impl$persistent_vector$iter__28762.call(null,cljs.core.rest.call(null,s__28763__$2)));
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
return iter__18874__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m__$1,(1))));
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
return (function (p1__28767_SHARP_){
return cljs.core.nth.call(null,m__$1,p1__28767_SHARP_);
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
return (function (p1__28768_SHARP_){
return clojure.core.matrix.protocols.order.call(null,p1__28768_SHARP_,(dimension__$1 - (1)),indices);
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
var vec__28769 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__28769,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__28769,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,cljs.core._PLUS_,m__$2,clojure.core.matrix.impl.persistent_vector.persistent_vector_coerce.call(null,a__$1));
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixAdd$matrix_sub$arity$2 = (function (m,a){
var m__$1 = this;
var vec__28770 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__28770,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__28770,(1),null);
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
var G__28771 = (i + (1));
var G__28772 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * b__$1.get((i | (0)))));
i = G__28771;
res = G__28772;
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
var G__28773 = (i + (1));
var G__28774 = (res + (cljs.core.nth.call(null,a__$1,(i | (0))) * cljs.core.nth.call(null,b,i)));
i = G__28773;
res = G__28774;
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
var G__28775 = (i + (1));
var G__28776 = (res + (x * x));
i = G__28775;
res = G__28776;
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
var G__28777 = (i + (1));
var G__28778 = (res + (x * x));
i = G__28777;
res = G__28778;
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
var and__18090__auto__ = ((1) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,a__$1)));
if(and__18090__auto__){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
while(true){
if((i < n)){
if((clojure.core.matrix.protocols.get_1d.call(null,a__$1,i) === clojure.core.matrix.protocols.get_1d.call(null,b,i))){
var G__28779 = (i + (1));
i = G__28779;
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
return and__18090__auto__;
}
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
var n = cljs.core.long$.call(null,cljs.core.count.call(null,a__$1));
var i = (0);
while(true){
if((i < n)){
if(cljs.core.truth_(clojure.core.matrix.protocols.matrix_equals.call(null,a__$1.call(null,i),b.call(null,i)))){
var G__28780 = (i + (1));
i = G__28780;
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
var G__28781 = cljs.core.next.call(null,sa);
var G__28782 = cljs.core.next.call(null,sb);
sa = G__28781;
sb = G__28782;
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
var vec__28784 = clojure.core.matrix.protocols.broadcast_compatible.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__28784,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__28784,(1),null);
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
return cljs.core.vec.call(null,(function (){var iter__18874__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__28785(s__28786){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__28786__$1 = s__28786;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28786__$1);
if(temp__4657__auto__){
var s__28786__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28786__$2)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,s__28786__$2);
var size__18873__auto__ = cljs.core.count.call(null,c__18872__auto__);
var b__28788 = cljs.core.chunk_buffer.call(null,size__18873__auto__);
if((function (){var i__28787 = (0);
while(true){
if((i__28787 < size__18873__auto__)){
var i = cljs.core._nth.call(null,c__18872__auto__,i__28787);
cljs.core.chunk_append.call(null,b__28788,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})());

var G__28793 = (i__28787 + (1));
i__28787 = G__28793;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28788),clojure$core$matrix$impl$persistent_vector$iter__28785.call(null,cljs.core.chunk_rest.call(null,s__28786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28788),null);
}
} else {
var i = cljs.core.first.call(null,s__28786__$2);
return cljs.core.cons.call(null,(function (){var r = clojure.core.matrix.protocols.get_column.call(null,a,i);
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,r);
})(),clojure$core$matrix$impl$persistent_vector$iter__28785.call(null,cljs.core.rest.call(null,s__28786__$2)));
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
return iter__18874__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
})());
} else {
if(((mdims === (1))) && ((adims === (1)))){
return clojure.core.matrix.protocols.vector_dot.call(null,m__$1,a);
} else {
if(((mdims === (2))) && ((adims === (1)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (p1__28783_SHARP_){
return clojure.core.matrix.protocols.vector_dot.call(null,p1__28783_SHARP_,a);
});})(mdims,adims,m__$1))
,m__$1);
} else {
if(((mdims === (2))) && ((adims === (2)))){
return cljs.core.mapv.call(null,((function (mdims,adims,m__$1){
return (function (r){
return cljs.core.vec.call(null,(function (){var iter__18874__auto__ = ((function (mdims,adims,m__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__28789(s__28790){
return (new cljs.core.LazySeq(null,((function (mdims,adims,m__$1){
return (function (){
var s__28790__$1 = s__28790;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28790__$1);
if(temp__4657__auto__){
var s__28790__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28790__$2)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,s__28790__$2);
var size__18873__auto__ = cljs.core.count.call(null,c__18872__auto__);
var b__28792 = cljs.core.chunk_buffer.call(null,size__18873__auto__);
if((function (){var i__28791 = (0);
while(true){
if((i__28791 < size__18873__auto__)){
var j = cljs.core._nth.call(null,c__18872__auto__,i__28791);
cljs.core.chunk_append.call(null,b__28792,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)));

var G__28794 = (i__28791 + (1));
i__28791 = G__28794;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28792),clojure$core$matrix$impl$persistent_vector$iter__28789.call(null,cljs.core.chunk_rest.call(null,s__28790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28792),null);
}
} else {
var j = cljs.core.first.call(null,s__28790__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.vector_dot.call(null,r,clojure.core.matrix.protocols.get_column.call(null,a,j)),clojure$core$matrix$impl$persistent_vector$iter__28789.call(null,cljs.core.rest.call(null,s__28790__$2)));
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
return iter__18874__auto__.call(null,cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,a,(1))));
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
return (function (p1__28795_SHARP_){
return clojure.core.matrix.protocols.inner_product.call(null,p1__28795_SHARP_,a);
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
return (function (p1__28796_SHARP_){
return (p1__28796_SHARP_ * a);
});})(m__$1))
,m__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMatrixScaling$pre_scale$arity$2 = (function (m,a){
var m__$1 = this;
return clojure.core.matrix.impl.common.mapmatrix.call(null,((function (m__$1){
return (function (p1__28797_SHARP_){
return (a * p1__28797_SHARP_);
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
clojure.core.matrix.impl.persistent_vector.build_maths_function = (function clojure$core$matrix$impl$persistent_vector$build_maths_function(p__28799){
var vec__28801 = p__28799;
var name = cljs.core.nth.call(null,vec__28801,(0),null);
var func = cljs.core.nth.call(null,vec__28801,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,name),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.impl.common","mapmatrix","clojure.core.matrix.impl.common/mapmatrix",1588740294,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__28798__auto__","x__28798__auto__",-2136452291,null))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,func),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","double","cljs.core/double",-1119390159,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__28798__auto__","x__28798__auto__",-2136452291,null)))))))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m","m",-1021758608,null)))))))));
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
var pv__27988__auto__ = m__$1;
return (((0) === cljs.core.count.call(null,pv__27988__auto__))) || (((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,cljs.core.nth.call(null,pv__27988__auto__,(0))))));
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
var vals__21449__auto___28804 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_28805 = cljs.core.long$.call(null,(0));
while(true){
if(vals__21449__auto___28804){
var v_28806 = cljs.core.first.call(null,vals__21449__auto___28804);
(arr[(off + i_28805)] = v_28806);

var G__28807 = cljs.core.next.call(null,vals__21449__auto___28804);
var G__28808 = (i_28805 + (1));
vals__21449__auto___28804 = G__28807;
i_28805 = G__28808;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19005__auto___28809 = size;
var i_28810 = (0);
while(true){
if((i_28810 < n__19005__auto___28809)){
(arr[(off + i_28810)] = cljs.core.nth.call(null,m,i_28810));

var G__28811 = (i_28810 + (1));
i_28810 = G__28811;
continue;
} else {
}
break;
}
} else {
var skip_28812 = cljs.core.quot.call(null,size,ct);
var n__19005__auto___28813 = ct;
var i_28814 = (0);
while(true){
if((i_28814 < n__19005__auto___28813)){
clojure$core$matrix$impl$persistent_vector$copy_to_double_array.call(null,cljs.core.nth.call(null,m,i_28814),arr,(off + (i_28814 * skip_28812)),skip_28812);

var G__28815 = (i_28814 + (1));
i_28814 = G__28815;
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
var vals__21449__auto___28816 = cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
var i_28817 = cljs.core.long$.call(null,(0));
while(true){
if(vals__21449__auto___28816){
var v_28818 = cljs.core.first.call(null,vals__21449__auto___28816);
(arr[(off + i_28817)] = v_28818);

var G__28819 = cljs.core.next.call(null,vals__21449__auto___28816);
var G__28820 = (i_28817 + (1));
vals__21449__auto___28816 = G__28819;
i_28817 = G__28820;
continue;
} else {
}
break;
}
} else {
if(((size === ct)) && (!(cljs.core.vector_QMARK_.call(null,cljs.core.nth.call(null,m,(0),null))))){
var n__19005__auto___28821 = size;
var i_28822 = (0);
while(true){
if((i_28822 < n__19005__auto___28821)){
(arr[(off + i_28822)] = cljs.core.nth.call(null,m,i_28822));

var G__28823 = (i_28822 + (1));
i_28822 = G__28823;
continue;
} else {
}
break;
}
} else {
var skip_28824 = cljs.core.quot.call(null,size,ct);
var n__19005__auto___28825 = ct;
var i_28826 = (0);
while(true){
if((i_28826 < n__19005__auto___28825)){
clojure$core$matrix$impl$persistent_vector$copy_to_object_array.call(null,cljs.core.nth.call(null,m,i_28826),arr,(off + (i_28826 * skip_28824)),skip_28824);

var G__28827 = (i_28826 + (1));
i_28826 = G__28827;
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
var vec__28830 = clojure.core.matrix.protocols.broadcast_same_shape.call(null,m__$1,a);
var m__$2 = cljs.core.nth.call(null,vec__28830,(0),null);
var a__$1 = cljs.core.nth.call(null,vec__28830,(1),null);
return clojure.core.matrix.impl.common.mapmatrix.call(null,f,m__$2,a__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var arrays = cljs.core.cons.call(null,m__$1,cljs.core.cons.call(null,a,more));
var shapes = cljs.core.map.call(null,clojure.core.matrix.protocols.get_shape,arrays);
var sh = (function (){var or__18102__auto__ = clojure.core.matrix.protocols.common_shape.call(null,shapes);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Attempt to do element map with incompatible shapes: "),cljs.core.str(cljs.core.mapv.call(null,clojure.core.matrix.protocols.get_shape,arrays))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
})();
var arrays__$1 = cljs.core.map.call(null,((function (arrays,shapes,sh,m__$1){
return (function (p1__28828_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__28828_SHARP_,sh);
});})(arrays,shapes,sh,m__$1))
,arrays);
return cljs.core.apply.call(null,clojure.core.matrix.impl.common.mapmatrix,f,arrays__$1);
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var seq__28831_28835 = cljs.core.seq.call(null,m__$1);
var chunk__28832_28836 = null;
var count__28833_28837 = (0);
var i__28834_28838 = (0);
while(true){
if((i__28834_28838 < count__28833_28837)){
var s_28839 = cljs.core._nth.call(null,chunk__28832_28836,i__28834_28838);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_28839,f);

var G__28840 = seq__28831_28835;
var G__28841 = chunk__28832_28836;
var G__28842 = count__28833_28837;
var G__28843 = (i__28834_28838 + (1));
seq__28831_28835 = G__28840;
chunk__28832_28836 = G__28841;
count__28833_28837 = G__28842;
i__28834_28838 = G__28843;
continue;
} else {
var temp__4657__auto___28844 = cljs.core.seq.call(null,seq__28831_28835);
if(temp__4657__auto___28844){
var seq__28831_28845__$1 = temp__4657__auto___28844;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28831_28845__$1)){
var c__18905__auto___28846 = cljs.core.chunk_first.call(null,seq__28831_28845__$1);
var G__28847 = cljs.core.chunk_rest.call(null,seq__28831_28845__$1);
var G__28848 = c__18905__auto___28846;
var G__28849 = cljs.core.count.call(null,c__18905__auto___28846);
var G__28850 = (0);
seq__28831_28835 = G__28847;
chunk__28832_28836 = G__28848;
count__28833_28837 = G__28849;
i__28834_28838 = G__28850;
continue;
} else {
var s_28851 = cljs.core.first.call(null,seq__28831_28845__$1);
clojure.core.matrix.protocols.element_map_BANG_.call(null,s_28851,f);

var G__28852 = cljs.core.next.call(null,seq__28831_28845__$1);
var G__28853 = null;
var G__28854 = (0);
var G__28855 = (0);
seq__28831_28835 = G__28852;
chunk__28832_28836 = G__28853;
count__28833_28837 = G__28854;
i__28834_28838 = G__28855;
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
var n__19005__auto___28856 = cljs.core.count.call(null,m__$1);
var i_28857 = (0);
while(true){
if((i_28857 < n__19005__auto___28856)){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m__$1.call(null,i_28857),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_28857));

var G__28858 = (i_28857 + (1));
i_28857 = G__28858;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PFunctionalOperations$element_map_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19005__auto___28859 = cljs.core.count.call(null,m__$1);
var i_28860 = (0);
while(true){
if((i_28860 < n__19005__auto___28859)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_BANG_,m__$1.call(null,i_28860),f,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_28860),cljs.core.map.call(null,((function (i_28860,n__19005__auto___28859,m__$1){
return (function (p1__28829_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__28829_SHARP_,i_28860);
});})(i_28860,n__19005__auto___28859,m__$1))
,more));

var G__28861 = (i_28860 + (1));
i_28860 = G__28861;
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
return f.call(null,cljs.core.PersistentVector.EMPTY,(function (){var x__21485__auto__ = ms__$1;
if(typeof x__21485__auto__ === 'number'){
return x__21485__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21485__auto__);

}
})());
} else {
if(((1) === dims)){
return cljs.core.vec.call(null,(function (){var iter__18874__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__28881(s__28882){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__28882__$1 = s__28882;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28882__$1);
if(temp__4657__auto__){
var s__28882__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28882__$2)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,s__28882__$2);
var size__18873__auto__ = cljs.core.count.call(null,c__18872__auto__);
var b__28884 = cljs.core.chunk_buffer.call(null,size__18873__auto__);
if((function (){var i__28883 = (0);
while(true){
if((i__28883 < size__18873__auto__)){
var i = cljs.core._nth.call(null,c__18872__auto__,i__28883);
cljs.core.chunk_append.call(null,b__28884,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)));

var G__28889 = (i__28883 + (1));
i__28883 = G__28889;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28884),clojure$core$matrix$impl$persistent_vector$iter__28881.call(null,cljs.core.chunk_rest.call(null,s__28882__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28884),null);
}
} else {
var i = cljs.core.first.call(null,s__28882__$2);
return cljs.core.cons.call(null,f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),cljs.core.nth.call(null,ms__$1,i)),clojure$core$matrix$impl$persistent_vector$iter__28881.call(null,cljs.core.rest.call(null,s__28882__$2)));
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
return iter__18874__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
})());
} else {
return cljs.core.vec.call(null,(function (){var iter__18874__auto__ = ((function (dims,ms__$1){
return (function clojure$core$matrix$impl$persistent_vector$iter__28885(s__28886){
return (new cljs.core.LazySeq(null,((function (dims,ms__$1){
return (function (){
var s__28886__$1 = s__28886;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28886__$1);
if(temp__4657__auto__){
var s__28886__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28886__$2)){
var c__18872__auto__ = cljs.core.chunk_first.call(null,s__28886__$2);
var size__18873__auto__ = cljs.core.count.call(null,c__18872__auto__);
var b__28888 = cljs.core.chunk_buffer.call(null,size__18873__auto__);
if((function (){var i__28887 = (0);
while(true){
if((i__28887 < size__18873__auto__)){
var i = cljs.core._nth.call(null,c__18872__auto__,i__28887);
cljs.core.chunk_append.call(null,b__28888,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i__28887,i,c__18872__auto__,size__18873__auto__,b__28888,s__28886__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__28862_SHARP_,p2__28863_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__28862_SHARP_),p2__28863_SHARP_);
});})(i__28887,i,c__18872__auto__,size__18873__auto__,b__28888,s__28886__$2,temp__4657__auto__,dims,ms__$1))
));

var G__28890 = (i__28887 + (1));
i__28887 = G__28890;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28888),clojure$core$matrix$impl$persistent_vector$iter__28885.call(null,cljs.core.chunk_rest.call(null,s__28886__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28888),null);
}
} else {
var i = cljs.core.first.call(null,s__28886__$2);
return cljs.core.cons.call(null,clojure.core.matrix.protocols.element_map_indexed.call(null,cljs.core.nth.call(null,ms__$1,i),((function (i,s__28886__$2,temp__4657__auto__,dims,ms__$1){
return (function (p1__28862_SHARP_,p2__28863_SHARP_){
return f.call(null,cljs.core.cons.call(null,i,p1__28862_SHARP_),p2__28863_SHARP_);
});})(i,s__28886__$2,temp__4657__auto__,dims,ms__$1))
),clojure$core$matrix$impl$persistent_vector$iter__28885.call(null,cljs.core.rest.call(null,s__28886__$2)));
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
return iter__18874__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));
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
var v = (function (){var x__21485__auto__ = as__$1;
if(typeof x__21485__auto__ === 'number'){
return x__21485__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21485__auto__);

}
})();
cljs.core.mapv.call(null,((function (v,as__$1,dima,ms__$1){
return (function (p1__28864_SHARP_,p2__28865_SHARP_){
return f.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28864_SHARP_], null),p2__28865_SHARP_,v);
});})(v,as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)));

return ms__$1;
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function() { 
var G__28891__delegate = function (p1__28866_SHARP_,rest__28867_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28866_SHARP_], null),rest__28867_SHARP_);
};
var G__28891 = function (p1__28866_SHARP_,var_args){
var rest__28867_SHARP_ = null;
if (arguments.length > 1) {
var G__28892__i = 0, G__28892__a = new Array(arguments.length -  1);
while (G__28892__i < G__28892__a.length) {G__28892__a[G__28892__i] = arguments[G__28892__i + 1]; ++G__28892__i;}
  rest__28867_SHARP_ = new cljs.core.IndexedSeq(G__28892__a,0);
} 
return G__28891__delegate.call(this,p1__28866_SHARP_,rest__28867_SHARP_);};
G__28891.cljs$lang$maxFixedArity = 1;
G__28891.cljs$lang$applyTo = (function (arglist__28893){
var p1__28866_SHARP_ = cljs.core.first(arglist__28893);
var rest__28867_SHARP_ = cljs.core.rest(arglist__28893);
return G__28891__delegate(p1__28866_SHARP_,rest__28867_SHARP_);
});
G__28891.cljs$core$IFn$_invoke$arity$variadic = G__28891__delegate;
return G__28891;
})()
;})(as__$1,dima,ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,clojure.core.matrix.protocols.element_seq.call(null,as__$1));
}
} else {
return cljs.core.mapv.call(null,((function (as__$1,dima,ms__$1){
return (function (i,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (as__$1,dima,ms__$1){
return (function() { 
var G__28894__delegate = function (p1__28868_SHARP_,rest__28869_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__28868_SHARP_),rest__28869_SHARP_);
};
var G__28894 = function (p1__28868_SHARP_,var_args){
var rest__28869_SHARP_ = null;
if (arguments.length > 1) {
var G__28895__i = 0, G__28895__a = new Array(arguments.length -  1);
while (G__28895__i < G__28895__a.length) {G__28895__a[G__28895__i] = arguments[G__28895__i + 1]; ++G__28895__i;}
  rest__28869_SHARP_ = new cljs.core.IndexedSeq(G__28895__a,0);
} 
return G__28894__delegate.call(this,p1__28868_SHARP_,rest__28869_SHARP_);};
G__28894.cljs$lang$maxFixedArity = 1;
G__28894.cljs$lang$applyTo = (function (arglist__28896){
var p1__28868_SHARP_ = cljs.core.first(arglist__28896);
var rest__28869_SHARP_ = cljs.core.rest(arglist__28896);
return G__28894__delegate(p1__28868_SHARP_,rest__28869_SHARP_);
});
G__28894.cljs$core$IFn$_invoke$arity$variadic = G__28894__delegate;
return G__28894;
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
var G__28897__delegate = function (p1__28870_SHARP_,rest__28871_SHARP_){
return cljs.core.apply.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__28870_SHARP_], null),rest__28871_SHARP_);
};
var G__28897 = function (p1__28870_SHARP_,var_args){
var rest__28871_SHARP_ = null;
if (arguments.length > 1) {
var G__28898__i = 0, G__28898__a = new Array(arguments.length -  1);
while (G__28898__i < G__28898__a.length) {G__28898__a[G__28898__i] = arguments[G__28898__i + 1]; ++G__28898__i;}
  rest__28871_SHARP_ = new cljs.core.IndexedSeq(G__28898__a,0);
} 
return G__28897__delegate.call(this,p1__28870_SHARP_,rest__28871_SHARP_);};
G__28897.cljs$lang$maxFixedArity = 1;
G__28897.cljs$lang$applyTo = (function (arglist__28899){
var p1__28870_SHARP_ = cljs.core.first(arglist__28899);
var rest__28871_SHARP_ = cljs.core.rest(arglist__28899);
return G__28897__delegate(p1__28870_SHARP_,rest__28871_SHARP_);
});
G__28897.cljs$core$IFn$_invoke$arity$variadic = G__28897__delegate;
return G__28897;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
} else {
return cljs.core.apply.call(null,cljs.core.mapv,((function (ms__$1){
return (function() { 
var G__28900__delegate = function (i,m,a,mr){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,((function (ms__$1){
return (function() { 
var G__28901__delegate = function (p1__28872_SHARP_,rest__28873_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i,p1__28872_SHARP_),rest__28873_SHARP_);
};
var G__28901 = function (p1__28872_SHARP_,var_args){
var rest__28873_SHARP_ = null;
if (arguments.length > 1) {
var G__28902__i = 0, G__28902__a = new Array(arguments.length -  1);
while (G__28902__i < G__28902__a.length) {G__28902__a[G__28902__i] = arguments[G__28902__i + 1]; ++G__28902__i;}
  rest__28873_SHARP_ = new cljs.core.IndexedSeq(G__28902__a,0);
} 
return G__28901__delegate.call(this,p1__28872_SHARP_,rest__28873_SHARP_);};
G__28901.cljs$lang$maxFixedArity = 1;
G__28901.cljs$lang$applyTo = (function (arglist__28903){
var p1__28872_SHARP_ = cljs.core.first(arglist__28903);
var rest__28873_SHARP_ = cljs.core.rest(arglist__28903);
return G__28901__delegate(p1__28872_SHARP_,rest__28873_SHARP_);
});
G__28901.cljs$core$IFn$_invoke$arity$variadic = G__28901__delegate;
return G__28901;
})()
;})(ms__$1))
,a,mr);
};
var G__28900 = function (i,m,a,var_args){
var mr = null;
if (arguments.length > 3) {
var G__28904__i = 0, G__28904__a = new Array(arguments.length -  3);
while (G__28904__i < G__28904__a.length) {G__28904__a[G__28904__i] = arguments[G__28904__i + 3]; ++G__28904__i;}
  mr = new cljs.core.IndexedSeq(G__28904__a,0);
} 
return G__28900__delegate.call(this,i,m,a,mr);};
G__28900.cljs$lang$maxFixedArity = 3;
G__28900.cljs$lang$applyTo = (function (arglist__28905){
var i = cljs.core.first(arglist__28905);
arglist__28905 = cljs.core.next(arglist__28905);
var m = cljs.core.first(arglist__28905);
arglist__28905 = cljs.core.next(arglist__28905);
var a = cljs.core.first(arglist__28905);
var mr = cljs.core.rest(arglist__28905);
return G__28900__delegate(i,m,a,mr);
});
G__28900.cljs$core$IFn$_invoke$arity$variadic = G__28900__delegate;
return G__28900;
})()
;})(ms__$1))
,cljs.core.range.call(null,cljs.core.count.call(null,ms__$1)),ms__$1,as,more);
}
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$2 = (function (m,f){
var m__$1 = this;
var n__19005__auto___28906 = cljs.core.count.call(null,m__$1);
var i_28907 = (0);
while(true){
if((i_28907 < n__19005__auto___28906)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_28907),((function (i_28907,n__19005__auto___28906,m__$1){
return (function (p1__28874_SHARP_,p2__28875_SHARP_){
return f.call(null,cljs.core.cons.call(null,i_28907,p1__28874_SHARP_),p2__28875_SHARP_);
});})(i_28907,n__19005__auto___28906,m__$1))
);

var G__28908 = (i_28907 + (1));
i_28907 = G__28908;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$3 = (function (m,f,a){
var m__$1 = this;
var n__19005__auto___28909 = cljs.core.count.call(null,m__$1);
var i_28910 = (0);
while(true){
if((i_28910 < n__19005__auto___28909)){
clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m__$1.call(null,i_28910),((function (i_28910,n__19005__auto___28909,m__$1){
return (function() { 
var G__28911__delegate = function (p1__28876_SHARP_,rest__28877_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_28910,p1__28876_SHARP_),rest__28877_SHARP_);
};
var G__28911 = function (p1__28876_SHARP_,var_args){
var rest__28877_SHARP_ = null;
if (arguments.length > 1) {
var G__28912__i = 0, G__28912__a = new Array(arguments.length -  1);
while (G__28912__i < G__28912__a.length) {G__28912__a[G__28912__i] = arguments[G__28912__i + 1]; ++G__28912__i;}
  rest__28877_SHARP_ = new cljs.core.IndexedSeq(G__28912__a,0);
} 
return G__28911__delegate.call(this,p1__28876_SHARP_,rest__28877_SHARP_);};
G__28911.cljs$lang$maxFixedArity = 1;
G__28911.cljs$lang$applyTo = (function (arglist__28913){
var p1__28876_SHARP_ = cljs.core.first(arglist__28913);
var rest__28877_SHARP_ = cljs.core.rest(arglist__28913);
return G__28911__delegate(p1__28876_SHARP_,rest__28877_SHARP_);
});
G__28911.cljs$core$IFn$_invoke$arity$variadic = G__28911__delegate;
return G__28911;
})()
;})(i_28910,n__19005__auto___28909,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_28910));

var G__28914 = (i_28910 + (1));
i_28910 = G__28914;
continue;
} else {
}
break;
}

return m__$1;
});

cljs.core.PersistentVector.prototype.clojure$core$matrix$protocols$PMapIndexed$element_map_indexed_BANG_$arity$4 = (function (m,f,a,more){
var m__$1 = this;
var n__19005__auto___28915 = cljs.core.count.call(null,m__$1);
var i_28916 = (0);
while(true){
if((i_28916 < n__19005__auto___28915)){
cljs.core.apply.call(null,clojure.core.matrix.protocols.element_map_indexed_BANG_,m__$1.call(null,i_28916),((function (i_28916,n__19005__auto___28915,m__$1){
return (function() { 
var G__28917__delegate = function (p1__28878_SHARP_,rest__28879_SHARP_){
return cljs.core.apply.call(null,f,cljs.core.cons.call(null,i_28916,p1__28878_SHARP_),rest__28879_SHARP_);
};
var G__28917 = function (p1__28878_SHARP_,var_args){
var rest__28879_SHARP_ = null;
if (arguments.length > 1) {
var G__28918__i = 0, G__28918__a = new Array(arguments.length -  1);
while (G__28918__i < G__28918__a.length) {G__28918__a[G__28918__i] = arguments[G__28918__i + 1]; ++G__28918__i;}
  rest__28879_SHARP_ = new cljs.core.IndexedSeq(G__28918__a,0);
} 
return G__28917__delegate.call(this,p1__28878_SHARP_,rest__28879_SHARP_);};
G__28917.cljs$lang$maxFixedArity = 1;
G__28917.cljs$lang$applyTo = (function (arglist__28919){
var p1__28878_SHARP_ = cljs.core.first(arglist__28919);
var rest__28879_SHARP_ = cljs.core.rest(arglist__28919);
return G__28917__delegate(p1__28878_SHARP_,rest__28879_SHARP_);
});
G__28917.cljs$core$IFn$_invoke$arity$variadic = G__28917__delegate;
return G__28917;
})()
;})(i_28916,n__19005__auto___28915,m__$1))
,clojure.core.matrix.protocols.get_major_slice.call(null,a,i_28916),cljs.core.map.call(null,((function (i_28916,n__19005__auto___28915,m__$1){
return (function (p1__28880_SHARP_){
return clojure.core.matrix.protocols.get_major_slice.call(null,p1__28880_SHARP_,i_28916);
});})(i_28916,n__19005__auto___28915,m__$1))
,more));

var G__28920 = (i_28916 + (1));
i_28916 = G__28920;
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
return (function (p1__28921_SHARP_){
return cljs.core.nth.call(null,a__$1,p1__28921_SHARP_);
});})(a__$1))
,cljs.core.first.call(null,args)));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Array dimension does not match length of args")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
} else {
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.mapv.call(null,((function (a__$1){
return (function (p1__28922_SHARP_){
return clojure.core.matrix.protocols.select.call(null,cljs.core.nth.call(null,a__$1,p1__28922_SHARP_),cljs.core.next.call(null,args));
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