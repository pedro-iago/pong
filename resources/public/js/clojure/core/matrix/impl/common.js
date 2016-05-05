// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.impl.common');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.utils');
goog.require('clojure.core.matrix.implementations');
/**
 * Returns a list of available implementations' objects
 */
clojure.core.matrix.impl.common.get_impl_objs = (function clojure$core$matrix$impl$common$get_impl_objs(){
return cljs.core.filter.call(null,cljs.core.second,(function (){var iter__19498__auto__ = (function clojure$core$matrix$impl$common$get_impl_objs_$_iter__35798(s__35799){
return (new cljs.core.LazySeq(null,(function (){
var s__35799__$1 = s__35799;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__35799__$1);
if(temp__4657__auto__){
var s__35799__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35799__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__35799__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__35801 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__35800 = (0);
while(true){
if((i__35800 < size__19497__auto__)){
var vec__35807 = cljs.core._nth.call(null,c__19496__auto__,i__35800);
var name = cljs.core.nth.call(null,vec__35807,(0),null);
var ns = cljs.core.nth.call(null,vec__35807,(1),null);
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null).call(null,ns))){
cljs.core.chunk_append.call(null,b__35801,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.call(null,name)], null);
}catch (e35808){if((e35808 instanceof Error)){
var t = e35808;
return null;
} else {
throw e35808;

}
}})());

var G__35821 = (i__35800 + (1));
i__35800 = G__35821;
continue;
} else {
var G__35822 = (i__35800 + (1));
i__35800 = G__35822;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35801),clojure$core$matrix$impl$common$get_impl_objs_$_iter__35798.call(null,cljs.core.chunk_rest.call(null,s__35799__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35801),null);
}
} else {
var vec__35809 = cljs.core.first.call(null,s__35799__$2);
var name = cljs.core.nth.call(null,vec__35809,(0),null);
var ns = cljs.core.nth.call(null,vec__35809,(1),null);
if(cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent-vector","persistent-vector",2032618025),null,new cljs.core.Keyword(null,"TODO","TODO",-523795145),null], null), null).call(null,ns))){
return cljs.core.cons.call(null,(function (){try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"obj","obj",981763962),clojure.core.matrix.implementations.get_canonical_object.call(null,name)], null);
}catch (e35810){if((e35810 instanceof Error)){
var t = e35810;
return null;
} else {
throw e35810;

}
}})(),clojure$core$matrix$impl$common$get_impl_objs_$_iter__35798.call(null,cljs.core.rest.call(null,s__35799__$2)));
} else {
var G__35823 = cljs.core.rest.call(null,s__35799__$2);
s__35799__$1 = G__35823;
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
return iter__19498__auto__.call(null,clojure.core.matrix.implementations.KNOWN_IMPLEMENTATIONS);
})());
});
/**
 * Maps a function over all components of a persistent vector matrix. Like mapv but for matrices.
 * Assumes correct dimensionality / shape.
 * 
 * First array argument must be nested persistent vectors. Others may be
 * any arrays of the same shape.
 * 
 * Returns a nested persistent vector matrix or a scalar value.
 */
clojure.core.matrix.impl.common.mapmatrix = (function clojure$core$matrix$impl$common$mapmatrix(var_args){
var args35839 = [];
var len__19784__auto___35855 = arguments.length;
var i__19785__auto___35856 = (0);
while(true){
if((i__19785__auto___35856 < len__19784__auto___35855)){
args35839.push((arguments[i__19785__auto___35856]));

var G__35858 = (i__19785__auto___35856 + (1));
i__19785__auto___35856 = G__35858;
continue;
} else {
}
break;
}

var G__35848 = args35839.length;
switch (G__35848) {
case 2:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args35839.slice((4)),(0)));
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19803__auto__);

}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
if(((0) === dims)){
return f.call(null,(function (){var x__21106__auto__ = m;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})());
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.construct_matrix.call(null,m,cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m)));
} else {
var res = cljs.core.map.call(null,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$3 = (function (f,m1,m2){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m1));
if(((0) === dims)){
return f.call(null,(function (){var x__21106__auto__ = m1;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})(),(function (){var x__21106__auto__ = m2;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})());
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.construct_matrix.call(null,m1,cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m1),clojure.core.matrix.protocols.element_seq.call(null,m2)));
} else {
var res = cljs.core.map.call(null,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m2));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m1,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m1))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$4 = (function (f,m1,m2,m3){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m1));
if(((0) === dims)){
return f.call(null,(function (){var x__21106__auto__ = m1;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})(),(function (){var x__21106__auto__ = m2;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})(),(function (){var x__21106__auto__ = m3;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})());
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.construct_matrix.call(null,m1,cljs.core.map.call(null,f,clojure.core.matrix.protocols.element_seq.call(null,m1),clojure.core.matrix.protocols.element_seq.call(null,m2),clojure.core.matrix.protocols.element_seq.call(null,m3)));
} else {
var res = cljs.core.mapv.call(null,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m2),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m3));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m1,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m1))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic = (function (f,m1,m2,m3,more){
var dims = cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m1));
if(((0) === dims)){
return cljs.core.apply.call(null,f,(function (){var x__21106__auto__ = m1;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})(),(function (){var x__21106__auto__ = m2;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})(),(function (){var x__21106__auto__ = m3;
if(typeof x__21106__auto__ === 'number'){
return x__21106__auto__;
} else {
return clojure.core.matrix.protocols.get_0d.call(null,x__21106__auto__);

}
})(),cljs.core.map.call(null,clojure.core.matrix.protocols.get_0d,more));
} else {
if(((1) === dims)){
return clojure.core.matrix.protocols.construct_matrix.call(null,m1,cljs.core.apply.call(null,cljs.core.map,f,clojure.core.matrix.protocols.element_seq.call(null,m1),clojure.core.matrix.protocols.element_seq.call(null,m2),clojure.core.matrix.protocols.element_seq.call(null,m3),cljs.core.map.call(null,clojure.core.matrix.protocols.element_seq,more)));
} else {
var res = cljs.core.apply.call(null,cljs.core.map,cljs.core.partial.call(null,clojure.core.matrix.impl.common.mapmatrix,f),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m1),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m2),clojure.core.matrix.protocols.get_major_slice_seq.call(null,m3),cljs.core.map.call(null,clojure.core.matrix.protocols.get_major_slice_seq,more));
return clojure.core.matrix.protocols.reshape.call(null,clojure.core.matrix.protocols.coerce_param.call(null,m1,res),cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m1))], null),cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,res)))));

}
}
});

clojure.core.matrix.impl.common.mapmatrix.cljs$lang$applyTo = (function (seq35840){
var G__35841 = cljs.core.first.call(null,seq35840);
var seq35840__$1 = cljs.core.next.call(null,seq35840);
var G__35842 = cljs.core.first.call(null,seq35840__$1);
var seq35840__$2 = cljs.core.next.call(null,seq35840__$1);
var G__35843 = cljs.core.first.call(null,seq35840__$2);
var seq35840__$3 = cljs.core.next.call(null,seq35840__$2);
var G__35844 = cljs.core.first.call(null,seq35840__$3);
var seq35840__$4 = cljs.core.next.call(null,seq35840__$3);
return clojure.core.matrix.impl.common.mapmatrix.cljs$core$IFn$_invoke$arity$variadic(G__35841,G__35842,G__35843,G__35844,seq35840__$4);
});

clojure.core.matrix.impl.common.mapmatrix.cljs$lang$maxFixedArity = (4);
/**
 * Logistic function, with primitive type hints
 */
clojure.core.matrix.impl.common.logistic_fn = (function clojure$core$matrix$impl$common$logistic_fn(t){
var e_t = Math.exp((- t));
return (1.0 / (1.0 + e_t));
});
/**
 * Softplus function, with primitive type hints
 */
clojure.core.matrix.impl.common.softplus_fn = (function clojure$core$matrix$impl$common$softplus_fn(t){
if((t > 100.0)){
return t;
} else {
var et = Math.exp(t);
return Math.log((1.0 + et));
}
});
/**
 * ReLU function, with primitive type hints
 */
clojure.core.matrix.impl.common.relu_fn = (function clojure$core$matrix$impl$common$relu_fn(t){
return Math.max(0.0,t);
});
/**
 * Returns true if matrix is square (2D with same number of rows and columns)
 */
clojure.core.matrix.impl.common.square_QMARK_ = (function clojure$core$matrix$impl$common$square_QMARK_(m){
return (((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)))) && ((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(1)))));
});
/**
 * Returns true iff square matrix m is symmetric.
 */
clojure.core.matrix.impl.common.symmetric_matrix_entries_QMARK_ = (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK_(m){
var dim = cljs.core.long$.call(null,cljs.core.first.call(null,clojure.core.matrix.protocols.get_shape.call(null,m)));
var f = ((function (dim){
return (function clojure$core$matrix$impl$common$symmetric_matrix_entries_QMARK__$_f(i,j){
while(true){
if((i >= dim)){
return true;
} else {
if((j >= dim)){
var G__35893 = ((1) + i);
var G__35894 = ((2) + i);
i = G__35893;
j = G__35894;
continue;
} else {
if(cljs.core._EQ_.call(null,clojure.core.matrix.protocols.get_2d.call(null,m,i,j),clojure.core.matrix.protocols.get_2d.call(null,m,j,i))){
var G__35895 = i;
var G__35896 = (j + (1));
i = G__35895;
j = G__35896;
continue;
} else {
return false;

}
}
}
break;
}
});})(dim))
;
return f.call(null,(0),(1));
});

//# sourceMappingURL=common.js.map