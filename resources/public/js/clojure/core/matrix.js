// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix');
goog.require('cljs.core');
goog.require('clojure.core.matrix.impl.mathsops');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.impl.wrappers');
goog.require('clojure.core.matrix.utils');
goog.require('clojure.core.matrix.impl.sequence');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.defaults');
goog.require('clojure.core.matrix.impl.persistent_vector');
clojure.core.matrix.class$ = cljs.core.type;

/**
 * Constructs a new n-dimensional array from the given data.
 * 
 * This function will examine the data in order to construct an array of the appropriate shape.
 * 
 * The data may be in one of the following forms:
 * - A valid existing array (which will be converted to the implementation)
 * - Nested sequences of scalar values, e.g. Clojure vectors (must have regular shape)
 * - A sequence of slices, each of which must be valid array data
 * - A single scalar value, which will be wrapped or coerced as necessary for the implementation
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * If the implementation does not support the shape or type of data provided, may either
 * create an array using a different implementation on a best-efforts basis or
 * alternatively throw an error. This behaviour is implementation-specific.
 */
clojure.core.matrix.array = (function clojure$core$matrix$array(var_args){
var args42370 = [];
var len__19784__auto___42373 = arguments.length;
var i__19785__auto___42374 = (0);
while(true){
if((i__19785__auto___42374 < len__19784__auto___42373)){
args42370.push((arguments[i__19785__auto___42374]));

var G__42375 = (i__19785__auto___42374 + (1));
i__19785__auto___42374 = G__42375;
continue;
} else {
}
break;
}

var G__42372 = args42370.length;
switch (G__42372) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42370.length)].join('')));

}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__18726__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18726__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.array.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a new 2-dimensional matrix from the given numerical data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing numerical array
 * - Nested sequences of scalar values, e.g. Clojure vectors
 * - A sequence of slices, each of which must be valid matrix data
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation*
 * 
 * `matrix` works as a synonym for `array`
 */
clojure.core.matrix.matrix = (function clojure$core$matrix$matrix(var_args){
var args42377 = [];
var len__19784__auto___42380 = arguments.length;
var i__19785__auto___42381 = (0);
while(true){
if((i__19785__auto___42381 < len__19784__auto___42380)){
args42377.push((arguments[i__19785__auto___42381]));

var G__42382 = (i__19785__auto___42381 + (1));
i__19785__auto___42381 = G__42382;
continue;
} else {
}
break;
}

var G__42379 = args42377.length;
switch (G__42379) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42377.length)].join('')));

}
});

clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.array.call(null,data);
});

clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.array.call(null,implementation,data);
});

clojure.core.matrix.matrix.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a new 1-dimensional integer index from given data.
 * 
 * The data may be in one of the following forms:
 * - A valid existing index
 * - A 1D array of integer values
 * - A sequence of integer values
 * 
 * If implementation is not specified, uses the current matrix library as specified
 * in *matrix-implementation* to produce the index object.
 * 
 * If the implementation does not support its own native index types, will return a
 * valid index from a default implementation.
 */
clojure.core.matrix.index = (function clojure$core$matrix$index(var_args){
var args42384 = [];
var len__19784__auto___42387 = arguments.length;
var i__19785__auto___42388 = (0);
while(true){
if((i__19785__auto___42388 < len__19784__auto___42387)){
args42384.push((arguments[i__19785__auto___42388]));

var G__42389 = (i__19785__auto___42388 + (1));
i__19785__auto___42388 = G__42389;
continue;
} else {
}
break;
}

var G__42386 = args42384.length;
switch (G__42386) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42384.length)].join('')));

}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__18726__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18726__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.index.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a new zero-filled numerical vector with the given length.
 * 
 * Implementations are encouraged to return immutable vectors or sparse vectors
 * for efficency whre available.
 */
clojure.core.matrix.zero_vector = (function clojure$core$matrix$zero_vector(var_args){
var args42391 = [];
var len__19784__auto___42394 = arguments.length;
var i__19785__auto___42395 = (0);
while(true){
if((i__19785__auto___42395 < len__19784__auto___42394)){
args42391.push((arguments[i__19785__auto___42395]));

var G__42396 = (i__19785__auto___42395 + (1));
i__19785__auto___42395 = G__42396;
continue;
} else {
}
break;
}

var G__42393 = args42391.length;
switch (G__42393) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42391.length)].join('')));

}
});

clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null),length);
});

clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null,implementation),length);
});

clojure.core.matrix.zero_vector.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a new vector with the given length.
 * New matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable vectors, then the new vector will be fully mutable.
 */
clojure.core.matrix.new_vector = (function clojure$core$matrix$new_vector(var_args){
var args42398 = [];
var len__19784__auto___42401 = arguments.length;
var i__19785__auto___42402 = (0);
while(true){
if((i__19785__auto___42402 < len__19784__auto___42401)){
args42398.push((arguments[i__19785__auto___42402]));

var G__42403 = (i__19785__auto___42402 + (1));
i__19785__auto___42402 = G__42403;
continue;
} else {
}
break;
}

var G__42400 = args42398.length;
switch (G__42400) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42398.length)].join('')));

}
});

clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1 = (function (length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null),length);
});

clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2 = (function (implementation,length){
return clojure.core.matrix.protocols.new_vector.call(null,clojure.core.matrix.implementation_check.call(null,implementation),length);
});

clojure.core.matrix.new_vector.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a new zero-filled numerical matrix with the given dimensions.
 * 
 * May produce a lightweight immutable zero matrix if supported by the implementation.
 */
clojure.core.matrix.zero_matrix = (function clojure$core$matrix$zero_matrix(var_args){
var args42405 = [];
var len__19784__auto___42408 = arguments.length;
var i__19785__auto___42409 = (0);
while(true){
if((i__19785__auto___42409 < len__19784__auto___42408)){
args42405.push((arguments[i__19785__auto___42409]));

var G__42410 = (i__19785__auto___42409 + (1));
i__19785__auto___42409 = G__42410;
continue;
} else {
}
break;
}

var G__42407 = args42405.length;
switch (G__42407) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42405.length)].join('')));

}
});

clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null),rows,columns);
});

clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),rows,columns);
});

clojure.core.matrix.zero_matrix.cljs$lang$maxFixedArity = 3;
/**
 * Constructs a new 2D array (matrix) with the given dimensions.
 * The new matrix will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_matrix = (function clojure$core$matrix$new_matrix(var_args){
var args42412 = [];
var len__19784__auto___42415 = arguments.length;
var i__19785__auto___42416 = (0);
while(true){
if((i__19785__auto___42416 < len__19784__auto___42415)){
args42412.push((arguments[i__19785__auto___42416]));

var G__42417 = (i__19785__auto___42416 + (1));
i__19785__auto___42416 = G__42417;
continue;
} else {
}
break;
}

var G__42414 = args42412.length;
switch (G__42414) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42412.length)].join('')));

}
});

clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2 = (function (rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null),rows,columns);
});

clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,rows,columns){
return clojure.core.matrix.protocols.new_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),rows,columns);
});

clojure.core.matrix.new_matrix.cljs$lang$maxFixedArity = 3;
/**
 * Creates a new zero-filled numerical array with the given shape.
 */
clojure.core.matrix.zero_array = (function clojure$core$matrix$zero_array(var_args){
var args42419 = [];
var len__19784__auto___42422 = arguments.length;
var i__19785__auto___42423 = (0);
while(true){
if((i__19785__auto___42423 < len__19784__auto___42422)){
args42419.push((arguments[i__19785__auto___42423]));

var G__42424 = (i__19785__auto___42423 + (1));
i__19785__auto___42423 = G__42424;
continue;
} else {
}
break;
}

var G__42421 = args42419.length;
switch (G__42421) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42419.length)].join('')));

}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__18726__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__18726__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.zero_array.cljs$lang$maxFixedArity = 2;
/**
 * Creates a new array with the given shape.
 * New array will contain default values as defined by the implementation (usually null or zero).
 * If the implementation supports mutable matrices, then the new matrix will be fully mutable.
 */
clojure.core.matrix.new_array = (function clojure$core$matrix$new_array(var_args){
var args42426 = [];
var len__19784__auto___42429 = arguments.length;
var i__19785__auto___42430 = (0);
while(true){
if((i__19785__auto___42430 < len__19784__auto___42429)){
args42426.push((arguments[i__19785__auto___42430]));

var G__42431 = (i__19785__auto___42430 + (1));
i__19785__auto___42430 = G__42431;
continue;
} else {
}
break;
}

var G__42428 = args42426.length;
switch (G__42428) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42426.length)].join('')));

}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__18726__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__18726__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
}
});

clojure.core.matrix.new_array.cljs$lang$maxFixedArity = 2;
/**
 * Creates a new sparse array with the given shape.
 * New array will contain default values as defined by the implementation (usually zero).
 * If the implementation supports mutable sparse matrices, then the new matrix should be fully mutable.
 */
clojure.core.matrix.new_sparse_array = (function clojure$core$matrix$new_sparse_array(var_args){
var args42433 = [];
var len__19784__auto___42436 = arguments.length;
var i__19785__auto___42437 = (0);
while(true){
if((i__19785__auto___42437 < len__19784__auto___42436)){
args42433.push((arguments[i__19785__auto___42437]));

var G__42438 = (i__19785__auto___42437 + (1));
i__19785__auto___42437 = G__42438;
continue;
} else {
}
break;
}

var G__42435 = args42433.length;
switch (G__42435) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42433.length)].join('')));

}
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),shape);
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__18726__auto__ = clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Implementation "),cljs.core.str(clojure.core.matrix.protocols.implementation_key.call(null,implementation)),cljs.core.str(" does not support sparse arrays of shape "),cljs.core.str(cljs.core.vec.call(null,shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.new_sparse_array.cljs$lang$maxFixedArity = 2;
/**
 * Returns a new mutable scalar array containing the scalar value zero.
 */
clojure.core.matrix.new_scalar_array = (function clojure$core$matrix$new_scalar_array(var_args){
var args42440 = [];
var len__19784__auto___42443 = arguments.length;
var i__19785__auto___42444 = (0);
while(true){
if((i__19785__auto___42444 < len__19784__auto___42443)){
args42440.push((arguments[i__19785__auto___42444]));

var G__42445 = (i__19785__auto___42444 + (1));
i__19785__auto___42444 = G__42445;
continue;
} else {
}
break;
}

var G__42442 = args42440.length;
switch (G__42442) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42440.length)].join('')));

}
});

clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.new_scalar_array.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
});

clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (implementation){
var implementation__$1 = clojure.core.matrix.implementation_check.call(null,implementation);
return clojure.core.matrix.protocols.new_scalar_array.call(null,implementation__$1);
});

clojure.core.matrix.new_scalar_array.cljs$lang$maxFixedArity = 1;
/**
 * Creates a new zero-dimensional array containing the specified scalar value.
 */
clojure.core.matrix.scalar_array = (function clojure$core$matrix$scalar_array(var_args){
var args42447 = [];
var len__19784__auto___42450 = arguments.length;
var i__19785__auto___42451 = (0);
while(true){
if((i__19785__auto___42451 < len__19784__auto___42450)){
args42447.push((arguments[i__19785__auto___42451]));

var G__42452 = (i__19785__auto___42451 + (1));
i__19785__auto___42451 = G__42452;
continue;
} else {
}
break;
}

var G__42449 = args42447.length;
switch (G__42449) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42447.length)].join('')));

}
});

clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1 = (function (value){
return clojure.core.matrix.protocols.new_scalar_array.call(null,clojure.core.matrix.implementation_check.call(null),value);
});

clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,value){
return clojure.core.matrix.protocols.new_scalar_array.call(null,clojure.core.matrix.implementation_check.call(null,implementation),value);
});

clojure.core.matrix.scalar_array.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a row matrix with the given data. The returned matrix is a 2D 1xN row matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.row_matrix = (function clojure$core$matrix$row_matrix(var_args){
var args42454 = [];
var len__19784__auto___42457 = arguments.length;
var i__19785__auto___42458 = (0);
while(true){
if((i__19785__auto___42458 < len__19784__auto___42457)){
args42454.push((arguments[i__19785__auto___42458]));

var G__42459 = (i__19785__auto___42458 + (1));
i__19785__auto___42458 = G__42459;
continue;
} else {
}
break;
}

var G__42456 = args42454.length;
switch (G__42456) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42454.length)].join('')));

}
});

clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.row_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.row_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
});

clojure.core.matrix.row_matrix.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a column matrix with the given data. The returned matrix is a 2D Nx1 column matrix.
 * 
 * The data must be either a valid existing vector or a sequence of scalar values.
 */
clojure.core.matrix.column_matrix = (function clojure$core$matrix$column_matrix(var_args){
var args42461 = [];
var len__19784__auto___42464 = arguments.length;
var i__19785__auto___42465 = (0);
while(true){
if((i__19785__auto___42465 < len__19784__auto___42464)){
args42461.push((arguments[i__19785__auto___42465]));

var G__42466 = (i__19785__auto___42465 + (1));
i__19785__auto___42465 = G__42466;
continue;
} else {
}
break;
}

var G__42463 = args42461.length;
switch (G__42463) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42461.length)].join('')));

}
});

clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.column_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.protocols.column_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
});

clojure.core.matrix.column_matrix.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a 2D identity matrix with the given number of rows.
 * 
 * Identity matrices constructed with this function may not be fully mutable because they may be
 * implemented with a specialised identity matrix type. Use (mutable (identity-matrix ...)) if you
 * need to guarantee a mutable matrix.
 */
clojure.core.matrix.identity_matrix = (function clojure$core$matrix$identity_matrix(var_args){
var args42468 = [];
var len__19784__auto___42471 = arguments.length;
var i__19785__auto___42472 = (0);
while(true){
if((i__19785__auto___42472 < len__19784__auto___42471)){
args42468.push((arguments[i__19785__auto___42472]));

var G__42473 = (i__19785__auto___42472 + (1));
i__19785__auto___42472 = G__42473;
continue;
} else {
}
break;
}

var G__42470 = args42468.length;
switch (G__42470) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42468.length)].join('')));

}
});

clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1 = (function (dims){
return clojure.core.matrix.protocols.identity_matrix.call(null,clojure.core.matrix.implementation_check.call(null),dims);
});

clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,dims){
return clojure.core.matrix.protocols.identity_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),dims);
});

clojure.core.matrix.identity_matrix.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a permutation matrix for a given permutation vector. The permutation vector should
 * contain a distinct set of integers 0...n-1, representing the re-ordering performed by
 * the permutation matrix.
 */
clojure.core.matrix.permutation_matrix = (function clojure$core$matrix$permutation_matrix(var_args){
var args42475 = [];
var len__19784__auto___42478 = arguments.length;
var i__19785__auto___42479 = (0);
while(true){
if((i__19785__auto___42479 < len__19784__auto___42478)){
args42475.push((arguments[i__19785__auto___42479]));

var G__42480 = (i__19785__auto___42479 + (1));
i__19785__auto___42479 = G__42480;
continue;
} else {
}
break;
}

var G__42477 = args42475.length;
switch (G__42477) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42475.length)].join('')));

}
});

clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1 = (function (permutation){
return clojure.core.matrix.protocols.permutation_matrix.call(null,clojure.core.matrix.implementation_check.call(null),permutation);
});

clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,permutation){
return clojure.core.matrix.protocols.permutation_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),permutation);
});

clojure.core.matrix.permutation_matrix.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a block diagonal matrix for a given vector of 2D square matrices and arranges
 *   the matrices along the main diagonal of the 2D matrix
 */
clojure.core.matrix.block_diagonal_matrix = (function clojure$core$matrix$block_diagonal_matrix(var_args){
var args42482 = [];
var len__19784__auto___42485 = arguments.length;
var i__19785__auto___42486 = (0);
while(true){
if((i__19785__auto___42486 < len__19784__auto___42485)){
args42482.push((arguments[i__19785__auto___42486]));

var G__42487 = (i__19785__auto___42486 + (1));
i__19785__auto___42486 = G__42487;
continue;
} else {
}
break;
}

var G__42484 = args42482.length;
switch (G__42484) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42482.length)].join('')));

}
});

clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null),blocks);
});

clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,blocks){
return clojure.core.matrix.protocols.block_diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),blocks);
});

clojure.core.matrix.block_diagonal_matrix.cljs$lang$maxFixedArity = 2;
/**
 * Constructs a fully mutable copy of the given array data.
 * 
 * If the implementation does not support mutable matrices, will return a mutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.mutable = (function clojure$core$matrix$mutable(var_args){
var args42489 = [];
var len__19784__auto___42492 = arguments.length;
var i__19785__auto___42493 = (0);
while(true){
if((i__19785__auto___42493 < len__19784__auto___42492)){
args42489.push((arguments[i__19785__auto___42493]));

var G__42494 = (i__19785__auto___42493 + (1));
i__19785__auto___42493 = G__42494;
continue;
} else {
}
break;
}

var G__42491 = args42489.length;
switch (G__42491) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42489.length)].join('')));

}
});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__18726__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.mutable.call(null,clojure.core.matrix.implementation_check.call(null),data);
}
});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var imp = clojure.core.matrix.implementation_check.call(null,implementation);
var r = clojure.core.matrix.protocols.construct_matrix.call(null,imp,data);
var or__18726__auto__ = (function (){var and__18714__auto__ = r;
if(cljs.core.truth_(and__18714__auto__)){
return clojure.core.matrix.protocols.ensure_mutable.call(null,r);
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,data);
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Unable to create mutable array for implementation "),cljs.core.str(clojure.core.matrix.protocols.implementation_key.call(null,imp))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
}
});

clojure.core.matrix.mutable.cljs$lang$maxFixedArity = 2;
/**
 * Returns an immutable array containing the given array data.
 * 
 * May return the same array if it is already immutable.
 * 
 * If the implementation does not support immutable matrices, will return an immutable array
 * from another core.matrix implementation that supports either the same element type or a broader type.
 */
clojure.core.matrix.immutable = (function clojure$core$matrix$immutable(data){
var or__18726__auto__ = clojure.core.matrix.protocols.immutable_matrix.call(null,data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.to_nested_vectors.call(null,data);
}
});
/**
 * Checks if an array is mutable, and if not converts to a new mutable array. Guarantees
 * that the result will be mutable, but may not be the same type as the original array.
 */
clojure.core.matrix.ensure_mutable = (function clojure$core$matrix$ensure_mutable(m){
return clojure.core.matrix.protocols.ensure_mutable.call(null,m);
});
/**
 * Constructs a 2D diagonal matrix with the given numerical values on the main diagonal.
 * All off-diagonal elements will be zero, and diagonal-values may be a vector or any
 *   Clojure sequence of values.
 * 
 * Diagonal matrices constructed this way may use specialised storage formats, hence may not be fully mutable.
 * Use (mutable (diagonal-matrix ...)) if you need to guarantee a mutable matrix.
 */
clojure.core.matrix.diagonal_matrix = (function clojure$core$matrix$diagonal_matrix(var_args){
var args42496 = [];
var len__19784__auto___42499 = arguments.length;
var i__19785__auto___42500 = (0);
while(true){
if((i__19785__auto___42500 < len__19784__auto___42499)){
args42496.push((arguments[i__19785__auto___42500]));

var G__42501 = (i__19785__auto___42500 + (1));
i__19785__auto___42500 = G__42501;
continue;
} else {
}
break;
}

var G__42498 = args42496.length;
switch (G__42498) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42496.length)].join('')));

}
});

clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1 = (function (diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,clojure.core.matrix.implementation_check.call(null),diagonal_values);
});

clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,diagonal_values){
return clojure.core.matrix.protocols.diagonal_matrix.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null,implementation),diagonal_values);
});

clojure.core.matrix.diagonal_matrix.cljs$lang$maxFixedArity = 2;
/**
 * Creates a array with the specified shape, and each element specified by (f i j k...)
 * Where i, j, k... are the index positions of each element in the matrix
 */
clojure.core.matrix.compute_matrix = (function clojure$core$matrix$compute_matrix(var_args){
var args42503 = [];
var len__19784__auto___42506 = arguments.length;
var i__19785__auto___42507 = (0);
while(true){
if((i__19785__auto___42507 < len__19784__auto___42506)){
args42503.push((arguments[i__19785__auto___42507]));

var G__42508 = (i__19785__auto___42507 + (1));
i__19785__auto___42507 = G__42508;
continue;
} else {
}
break;
}

var G__42505 = args42503.length;
switch (G__42505) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42503.length)].join('')));

}
});

clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2 = (function (shape,f){
return clojure.core.matrix.compute_matrix.call(null,clojure.core.matrix.implementation_check.call(null),shape,f);
});

clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3 = (function (implementation,shape,f){
var m = clojure.core.matrix.implementation_check.call(null,implementation);
return clojure.core.matrix.protocols.compute_matrix.call(null,m,shape,f);
});

clojure.core.matrix.compute_matrix.cljs$lang$maxFixedArity = 3;
/**
 * Creates a sparse array with the given data, using a specified implementation
 *   or the current implementation if not specified.
 * 
 *   Throws an exception if creation of a sparse array is not possible
 */
clojure.core.matrix.sparse_array = (function clojure$core$matrix$sparse_array(var_args){
var args42510 = [];
var len__19784__auto___42513 = arguments.length;
var i__19785__auto___42514 = (0);
while(true){
if((i__19785__auto___42514 < len__19784__auto___42513)){
args42510.push((arguments[i__19785__auto___42514]));

var G__42515 = (i__19785__auto___42514 + (1));
i__19785__auto___42514 = G__42515;
continue;
} else {
}
break;
}

var G__42512 = args42510.length;
switch (G__42512) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42510.length)].join('')));

}
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18726__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Sparse implementation not available")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.sparse_array.cljs$lang$maxFixedArity = 2;
/**
 * Creates a sparse matrix with the given data, using a specified implementation
 *   or the current implementation if not specified. Sparse matrices are required to store
 *   a M*N matrix with E non-zero elements in approx O(M+N+E) space or less.
 * 
 *   Throws an exception if creation of a sparse matrix is not possible.
 * 
 *   `sparse-matrix` wqorks as a synonym for `sparse-array`.
 */
clojure.core.matrix.sparse_matrix = (function clojure$core$matrix$sparse_matrix(var_args){
var args42517 = [];
var len__19784__auto___42520 = arguments.length;
var i__19785__auto___42521 = (0);
while(true){
if((i__19785__auto___42521 < len__19784__auto___42520)){
args42517.push((arguments[i__19785__auto___42521]));

var G__42522 = (i__19785__auto___42521 + (1));
i__19785__auto___42521 = G__42522;
continue;
} else {
}
break;
}

var G__42519 = args42517.length;
switch (G__42519) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42517.length)].join('')));

}
});

clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.call(null,data);
});

clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
return clojure.core.matrix.sparse_array.call(null,implementation,data);
});

clojure.core.matrix.sparse_matrix.cljs$lang$maxFixedArity = 2;
/**
 * Coerces an array to a sparse format if possible. Sparse arrays are expected to
 * minimise space usage for zero elements.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already sparse.
 */
clojure.core.matrix.sparse = (function clojure$core$matrix$sparse(var_args){
var args42524 = [];
var len__19784__auto___42527 = arguments.length;
var i__19785__auto___42528 = (0);
while(true){
if((i__19785__auto___42528 < len__19784__auto___42527)){
args42524.push((arguments[i__19785__auto___42528]));

var G__42529 = (i__19785__auto___42528 + (1));
i__19785__auto___42528 = G__42529;
continue;
} else {
}
break;
}

var G__42526 = args42524.length;
switch (G__42526) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42524.length)].join('')));

}
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.sparse.call(null,data);
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var implementation__$1 = clojure.core.matrix.implementation_check.call(null,implementation);
var or__18726__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,implementation__$1,data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,implementation__$1,data);
}
});

clojure.core.matrix.sparse.cljs$lang$maxFixedArity = 2;
/**
 * Coerces an array to a dense format if possible. Dense arrays are expected to
 * allocate contiguous storage space for all elements. Either row-major or column-major
 * storage may be alloacted, depending on the implementation.
 * 
 * 'dense' should not be used with very large arrays, and may throw an OutOfMemoryError
 *  if the dense array is too large to fit in available memory.
 * 
 * Returns the array unchanged if such coercion is not possible, or if the array is already dense.
 */
clojure.core.matrix.dense = (function clojure$core$matrix$dense(var_args){
var args42531 = [];
var len__19784__auto___42534 = arguments.length;
var i__19785__auto___42535 = (0);
while(true){
if((i__19785__auto___42535 < len__19784__auto___42534)){
args42531.push((arguments[i__19785__auto___42535]));

var G__42536 = (i__19785__auto___42535 + (1));
i__19785__auto___42535 = G__42536;
continue;
} else {
}
break;
}

var G__42533 = args42531.length;
switch (G__42533) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42531.length)].join('')));

}
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.dense.call(null,data);
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18726__auto__ = clojure.core.matrix.protocols.dense_coerce.call(null,implementation,data);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,implementation,data);
}
});

clojure.core.matrix.dense.cljs$lang$maxFixedArity = 2;
/**
 * Coerces an array into a native format array if possible. Native arrays may offer
 * superior performance for some operations, depending on the implementation.
 * Returns nil if no appropriate native format exists.
 */
clojure.core.matrix.native$ = (function clojure$core$matrix$native(var_args){
var args42538 = [];
var len__19784__auto___42541 = arguments.length;
var i__19785__auto___42542 = (0);
while(true){
if((i__19785__auto___42542 < len__19784__auto___42541)){
args42538.push((arguments[i__19785__auto___42542]));

var G__42543 = (i__19785__auto___42542 + (1));
i__19785__auto___42542 = G__42543;
continue;
} else {
}
break;
}

var G__42540 = args42538.length;
switch (G__42540) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42538.length)].join('')));

}
});

clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1 = (function (a){
var or__18726__auto__ = clojure.core.matrix.protocols.native$.call(null,a);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.native$.call(null,clojure.core.matrix.implementation_check.call(null),a);
}
});

clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2 = (function (impl,a){
var a__$1 = clojure.core.matrix.protocols.coerce_param.call(null,impl,a);
return clojure.core.matrix.protocols.native$.call(null,a__$1);
});

clojure.core.matrix.native$.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the array is in a native format.
 * 
 * Native formats are implementation defined, and may use non-Java resources (e.g. GPU memory).
 */
clojure.core.matrix.native_QMARK_ = (function clojure$core$matrix$native_QMARK_(a){
return clojure.core.matrix.protocols.native_QMARK_.call(null,a);
});
/**
 * Returns true if the implementation for a given matrix supports a specific dimensionality, i.e.
 * can natively create and manipulate matrices with the given number of dimensions
 */
clojure.core.matrix.supports_dimensionality_QMARK_ = (function clojure$core$matrix$supports_dimensionality_QMARK_(m,dimension_count){
var m__$1 = clojure.core.matrix.implementation_check.call(null,m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,m__$1,dimension_count);
});
/**
 * Returns true if the implementation supports creation of matrices with a specific shape.
 */
clojure.core.matrix.supports_shape_QMARK_ = (function clojure$core$matrix$supports_shape_QMARK_(m,shape){
var m__$1 = (((m instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.call(null,m):m);
return clojure.core.matrix.protocols.supports_dimensionality_QMARK_.call(null,m__$1,cljs.core.count.call(null,shape));
});
/**
 * Assigns a new value to an array. Sets the values of the target element-wise, broadcasting where necessary.
 * Returns the mutated array. The new value may be either a scalar or a array of compatible (maybe smaller) shape.
 */
clojure.core.matrix.assign_BANG_ = (function clojure$core$matrix$assign_BANG_(m,a){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,a);

return m;
});
/**
 * Assigns values to a core.matrix array from a Java array, in element-wise order. Element type of Java array must be compatible.
 * Returns the mutated core.matrix array
 */
clojure.core.matrix.assign_array_BANG_ = (function clojure$core$matrix$assign_array_BANG_(var_args){
var args42545 = [];
var len__19784__auto___42548 = arguments.length;
var i__19785__auto___42549 = (0);
while(true){
if((i__19785__auto___42549 < len__19784__auto___42548)){
args42545.push((arguments[i__19785__auto___42549]));

var G__42550 = (i__19785__auto___42549 + (1));
i__19785__auto___42549 = G__42550;
continue;
} else {
}
break;
}

var G__42547 = args42545.length;
switch (G__42547) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42545.length)].join('')));

}
});

clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,arr){
clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr);

return m;
});

clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,arr,offset){
clojure.core.matrix.protocols.assign_array_BANG_.call(null,m,arr,offset,clojure.core.matrix.protocols.element_count.call(null,m));

return m;
});

clojure.core.matrix.assign_array_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Assigns array a element-wise, broadcasting to fill the whole shape of m.
 * Returns a new matrix, of the same shape as the original m.
 */
clojure.core.matrix.assign = (function clojure$core$matrix$assign(m,a){
return clojure.core.matrix.protocols.assign.call(null,m,a);
});
/**
 * Constructs a (shallow) clone of the array. This function is intended to
 * allow safe defensive usage of matrices / vectors. If the intent is to create a mutable clone of
 * some array data, it is recommended to use mutable instead.
 * 
 * Guarantees that:
 * 1. Mutating the returned array will not modify any other array (defensive copy)
 * 2. The returned array will be fully mutable, if the implementation supports mutable matrices.
 * 
 * The clone may or may not be of the same implementation: implementations are encouraged to do so but
 * this is not mandatory.
 * 
 * A core.matrix implementation which only provides immutable arrays may safely return the same array.
 */
clojure.core.matrix.clone = (function clojure$core$matrix$clone(m){
return clojure.core.matrix.protocols.clone.call(null,m);
});
/**
 * Converts an array to an idiomatic, immutable nested Clojure vector format. The bottom level of the
 * nested vectors will contain the element values. Higher levels will all implement IPersistentVector.
 * 
 * The depth of nesting will be equal to the dimensionality of the array.
 */
clojure.core.matrix.to_nested_vectors = (function clojure$core$matrix$to_nested_vectors(m){
return clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m);
});
/**
 * Coerces m to a scalar value. Result is guaranteed not to be an array.
 * Will throw an exception if m is not zero-dimensional.
 */
clojure.core.matrix.scalar = (function clojure$core$matrix$scalar(m){
return clojure.core.matrix.protocols.get_0d.call(null,m);
});
/**
 * Returns true if the parameter is a valid core.matrix N-dimensional array, for any N>=0.
 */
clojure.core.matrix.array_QMARK_ = (function clojure$core$matrix$array_QMARK_(m){
return cljs.core.not.call(null,clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m));
});
/**
 * Returns true if parameter is a valid core.matrix matrix (i.e. an array with dimensionality == 2)
 */
clojure.core.matrix.matrix_QMARK_ = (function clojure$core$matrix$matrix_QMARK_(m){
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2));
});
/**
 * Returns true if the parameter is a core.matrix vector (1-dimensional array)
 */
clojure.core.matrix.vec_QMARK_ = (function clojure$core$matrix$vec_QMARK_(m){
return clojure.core.matrix.protocols.is_vector_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a scalar value (i.e. acceptable as matrix element value).
 * A 0-d array containing a scalar is *not* itself a scalar value.
 */
clojure.core.matrix.scalar_QMARK_ = (function clojure$core$matrix$scalar_QMARK_(v){
return clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,v);
});
/**
 * Returns true if the parameter has zero dimensions. i.e. it is a 0-d array or a scalar value.
 * 
 * Behaviour is the same as `scalar?`, except that true is returned for 0-dimensional arrays.
 */
clojure.core.matrix.zero_dimensional_QMARK_ = (function clojure$core$matrix$zero_dimensional_QMARK_(m){
return ((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)));
});
/**
 * Returns true if the parameter is an identity-matrix, i.e. a symmetric square matrix with element values
 * of 1 on the leading diagonal and 0 elsewhere.
 */
clojure.core.matrix.identity_matrix_QMARK_ = (function clojure$core$matrix$identity_matrix_QMARK_(m){
return clojure.core.matrix.protocols.identity_matrix_QMARK_.call(null,m);
});
/**
 * Returns true if all the elements of the parameter are zero.
 */
clojure.core.matrix.zero_matrix_QMARK_ = (function clojure$core$matrix$zero_matrix_QMARK_(m){
return clojure.core.matrix.protocols.zero_matrix_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a symmetric matrix, i.e. Aij = Aji for all i,j.
 */
clojure.core.matrix.symmetric_QMARK_ = (function clojure$core$matrix$symmetric_QMARK_(m){
return clojure.core.matrix.protocols.symmetric_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a diagonal matrix.
 */
clojure.core.matrix.diagonal_QMARK_ = (function clojure$core$matrix$diagonal_QMARK_(m){
return clojure.core.matrix.protocols.diagonal_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a upper triangular matrix.
 */
clojure.core.matrix.upper_triangular_QMARK_ = (function clojure$core$matrix$upper_triangular_QMARK_(m){
return clojure.core.matrix.protocols.upper_triangular_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a lower triangular matrix.
 */
clojure.core.matrix.lower_triangular_QMARK_ = (function clojure$core$matrix$lower_triangular_QMARK_(m){
return clojure.core.matrix.protocols.lower_triangular_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is an orthogonal matrix.
 */
clojure.core.matrix.orthogonal_QMARK_ = (function clojure$core$matrix$orthogonal_QMARK_(var_args){
var args42552 = [];
var len__19784__auto___42555 = arguments.length;
var i__19785__auto___42556 = (0);
while(true){
if((i__19785__auto___42556 < len__19784__auto___42555)){
args42552.push((arguments[i__19785__auto___42556]));

var G__42557 = (i__19785__auto___42556 + (1));
i__19785__auto___42556 = G__42557;
continue;
} else {
}
break;
}

var G__42554 = args42552.length;
switch (G__42554) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42552.length)].join('')));

}
});

clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,eps){
return clojure.core.matrix.protocols.orthogonal_QMARK_.call(null,m,eps);
});

clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.orthogonal_QMARK_.call(null,m,1.0E-5);
});

clojure.core.matrix.orthogonal_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if an array is sparse, i.e. the implementation supports storage of the entire
 * array in less memory than would normally be implied by the number of elements.
 * 
 * Sparse matrices may have memory requirements that scale with the number of non-zero elements
 * rather than the total number of elements, for example.
 */
clojure.core.matrix.sparse_QMARK_ = (function clojure$core$matrix$sparse_QMARK_(m){
return clojure.core.matrix.protocols.is_sparse_QMARK_.call(null,m);
});
/**
 * Returns the class of elements that can be in the array. For example, a numerical array may return
 * the class java.lang.Double.
 */
clojure.core.matrix.element_type = (function clojure$core$matrix$element_type(m){
return clojure.core.matrix.protocols.element_type.call(null,m);
});
/**
 * Returns the dimensionality of an array. The dimensionality is equal to
 * the number of dimensions in the array's shape.
 */
clojure.core.matrix.dimensionality = (function clojure$core$matrix$dimensionality(m){
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m));
});
/**
 * Returns the size of the specified dimension in a matrix. Will throw an error if the matrix
 * does not have the specified dimension.
 */
clojure.core.matrix.dimension_count = (function clojure$core$matrix$dimension_count(m,dim){
return cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dim));
});
/**
 * Returns the number of rows in a matrix or vector (array must be 1D or more).
 */
clojure.core.matrix.row_count = (function clojure$core$matrix$row_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(0));
});
/**
 * Returns the number of columns in a matrix (array must be 2D or more)
 */
clojure.core.matrix.column_count = (function clojure$core$matrix$column_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(1));
});
/**
 * Returns the number of slices in an array (array must be 1D or more). The array is sliced
 * in row-major order, i.e. this is the dimension count of the first dimension.
 */
clojure.core.matrix.slice_count = (function clojure$core$matrix$slice_count(m){
return clojure.core.matrix.dimension_count.call(null,m,(0));
});
/**
 * Returns the total count of elements in an array, as an integer value.
 * 
 * Equal to the product of the lengths of each dimension in the array's shape.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the element count may be a BigInteger, i.e. equal to or larger than 2^63.
 * 
 * Returns 1 for a zero-dimensional array or scalar. 
 */
clojure.core.matrix.ecount = (function clojure$core$matrix$ecount(m){
return clojure.core.matrix.protocols.element_count.call(null,m);
});
/**
 * Returns true if matrix is square (i.e. a 2D array with same number of rows and columns)
 */
clojure.core.matrix.square_QMARK_ = (function clojure$core$matrix$square_QMARK_(m){
return (((2) === clojure.core.matrix.dimensionality.call(null,m))) && ((clojure.core.matrix.dimension_count.call(null,m,(0)) === clojure.core.matrix.dimension_count.call(null,m,(1))));
});
/**
 * Returns true if a matrix is a row-matrix (i.e. is 2D and has exactly one row)
 */
clojure.core.matrix.row_matrix_QMARK_ = (function clojure$core$matrix$row_matrix_QMARK_(m){
return ((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && (((1) === clojure.core.matrix.dimension_count.call(null,m,(0))));
});
/**
 * Returns true if a matrix is a column-matrix (i.e. is 2D and has has exactly one column)
 */
clojure.core.matrix.column_matrix_QMARK_ = (function clojure$core$matrix$column_matrix_QMARK_(m){
return ((cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m)) === (2))) && (((1) === clojure.core.matrix.dimension_count.call(null,m,(1))));
});
/**
 * Returns the shape of an array, i.e. the dimension sizes for all dimensions.
 * 
 * The result will be a vector containing only integer index values, with a count
 * equal to the dimensionality of the array.
 * 
 * Returns nil the if object is not an array (i.e. is a scalar value)
 */
clojure.core.matrix.shape = (function clojure$core$matrix$shape(m){
var temp__4655__auto__ = clojure.core.matrix.protocols.get_shape.call(null,m);
if(cljs.core.truth_(temp__4655__auto__)){
var sh = temp__4655__auto__;
return cljs.core.vec.call(null,sh);
} else {
return null;
}
});
/**
 * Returns the number of zeros in an array.
 * 
 * Result will usually be a Long, however callers should note that for very large sparse arrays
 * the zero count may be a BigInteger, i.e. equal to or larger than 2^63.
 */
clojure.core.matrix.zero_count = (function clojure$core$matrix$zero_count(m){
return clojure.core.matrix.protocols.zero_count.call(null,m);
});
/**
 * Returns the density of the matrix, defined as the proportion of non-zero elements
 */
clojure.core.matrix.density = (function clojure$core$matrix$density(m){
var zeros = clojure.core.matrix.protocols.zero_count.call(null,m);
var elems = clojure.core.matrix.protocols.element_count.call(null,m);
return ((elems - zeros) / elems);
});
/**
 * Returns true if the matrix is mutable, i.e. supports setting of values.
 * 
 * It is possible for some matrix implementations to have constraints on mutability (e.g. mutable only in diagonal elements),
 * this method will still return true for such cases.
 */
clojure.core.matrix.mutable_QMARK_ = (function clojure$core$matrix$mutable_QMARK_(m){
return clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,m);
});
/**
 * Returns true if the parameter is a valid array index type. An index is a seq-able 1D list
 * of integer values that can be used to index into arrays.
 */
clojure.core.matrix.index_QMARK_ = (function clojure$core$matrix$index_QMARK_(m){
return clojure.core.matrix.protocols.index_QMARK_.call(null,m);
});
/**
 * Returns true if two arrays have a conforming shape. Two arrays are conforming if there
 * exists a common shape that both can broadcast to. This is a requirement for element-wise
 * operations to work correctly on two different-shaped arrays.
 */
clojure.core.matrix.conforming_QMARK_ = (function clojure$core$matrix$conforming_QMARK_(var_args){
var args42559 = [];
var len__19784__auto___42562 = arguments.length;
var i__19785__auto___42563 = (0);
while(true){
if((i__19785__auto___42563 < len__19784__auto___42562)){
args42559.push((arguments[i__19785__auto___42563]));

var G__42564 = (i__19785__auto___42563 + (1));
i__19785__auto___42563 = G__42564;
continue;
} else {
}
break;
}

var G__42561 = args42559.length;
switch (G__42561) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42559.length)].join('')));

}
});

clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var sa = clojure.core.matrix.protocols.get_shape.call(null,a);
var sb = clojure.core.matrix.protocols.get_shape.call(null,b);
return ((cljs.core.count.call(null,sa) >= cljs.core.count.call(null,sb))) && (cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core._EQ_,cljs.core.reverse.call(null,sa),cljs.core.reverse.call(null,sb))));
});

clojure.core.matrix.conforming_QMARK_.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the arrays have the same shape, false otherwise
 */
clojure.core.matrix.same_shape_QMARK_ = (function clojure$core$matrix$same_shape_QMARK_(var_args){
var args42566 = [];
var len__19784__auto___42572 = arguments.length;
var i__19785__auto___42573 = (0);
while(true){
if((i__19785__auto___42573 < len__19784__auto___42572)){
args42566.push((arguments[i__19785__auto___42573]));

var G__42574 = (i__19785__auto___42573 + (1));
i__19785__auto___42573 = G__42574;
continue;
} else {
}
break;
}

var G__42571 = args42566.length;
switch (G__42571) {
case 0:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42566.slice((2)),(0)));
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
var or__18726__auto__ = (m === n);
if(or__18726__auto__){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m,n);
}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (m,n,more){
var m__$1 = m;
var n__$1 = n;
var more__$1 = cljs.core.seq.call(null,more);
while(true){
if(cljs.core.truth_((function (){var or__18726__auto__ = (m__$1 === n__$1);
if(or__18726__auto__){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m__$1,n__$1);
}
})())){
if(more__$1){
var G__42576 = n__$1;
var G__42577 = cljs.core.first.call(null,more__$1);
var G__42578 = cljs.core.next.call(null,more__$1);
m__$1 = G__42576;
n__$1 = G__42577;
more__$1 = G__42578;
continue;
} else {
return true;
}
} else {
return false;
}
break;
}
});

clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq42567){
var G__42568 = cljs.core.first.call(null,seq42567);
var seq42567__$1 = cljs.core.next.call(null,seq42567);
var G__42569 = cljs.core.first.call(null,seq42567__$1);
var seq42567__$2 = cljs.core.next.call(null,seq42567__$1);
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__42568,G__42569,seq42567__$2);
});

clojure.core.matrix.same_shape_QMARK_.cljs$lang$maxFixedArity = (2);
/**
 * Returns true if the matrix is a valid numerical matrix (i.e. supports numerical core.matrix operations).
 */
clojure.core.matrix.numerical_QMARK_ = (function clojure$core$matrix$numerical_QMARK_(m){
return clojure.core.matrix.protocols.numerical_QMARK_.call(null,m);
});
/**
 * Returns a Java double[] array containing the values of a numerical array m in row-major order. Will
 *  throw an error if any of the array elements cannot be converted to doubles.
 * 
 *  If want-copy? is true, will guarantee a new double array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_double_array = (function clojure$core$matrix$to_double_array(var_args){
var args42579 = [];
var len__19784__auto___42582 = arguments.length;
var i__19785__auto___42583 = (0);
while(true){
if((i__19785__auto___42583 < len__19784__auto___42582)){
args42579.push((arguments[i__19785__auto___42583]));

var G__42584 = (i__19785__auto___42583 + (1));
i__19785__auto___42583 = G__42584;
continue;
} else {
}
break;
}

var G__42581 = args42579.length;
switch (G__42581) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42579.length)].join('')));

}
});

clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_double_array.call(null,m);
});

clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_double_array.call(null,m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_double_array.call(null,arr);
} else {
return clojure.core.matrix.protocols.to_double_array.call(null,m);
}
} else {
return arr;
}
});

clojure.core.matrix.to_double_array.cljs$lang$maxFixedArity = 2;
/**
 * Returns a Java Object[] array containing the values of an array m in row-major order.
 * 
 *  If want-copy? is true, will guarantee a new Object array (defensive copy).
 *  If want-copy? is false, will return the internal array used by m, or nil if not supported
 *  by the implementation.
 *  If want-copy? is not specified, will return either a copy or the internal array
 */
clojure.core.matrix.to_object_array = (function clojure$core$matrix$to_object_array(var_args){
var args42586 = [];
var len__19784__auto___42589 = arguments.length;
var i__19785__auto___42590 = (0);
while(true){
if((i__19785__auto___42590 < len__19784__auto___42589)){
args42586.push((arguments[i__19785__auto___42590]));

var G__42591 = (i__19785__auto___42590 + (1));
i__19785__auto___42590 = G__42591;
continue;
} else {
}
break;
}

var G__42588 = args42586.length;
switch (G__42588) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42586.length)].join('')));

}
});

clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.to_object_array.call(null,m);
});

clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2 = (function (m,want_copy_QMARK_){
var arr = clojure.core.matrix.protocols.as_object_array.call(null,m);
if(cljs.core.truth_(want_copy_QMARK_)){
if(cljs.core.truth_(arr)){
return clojure.core.matrix.utils.copy_object_array.call(null,arr);
} else {
return clojure.core.matrix.protocols.to_object_array.call(null,m);
}
} else {
return arr;
}
});

clojure.core.matrix.to_object_array.cljs$lang$maxFixedArity = 2;
/**
 * Packs array data in the most efficient format as defined by the implementation. May return the
 * same array if no additional packing is required.
 */
clojure.core.matrix.pack = (function clojure$core$matrix$pack(a){
return clojure.core.matrix.protocols.pack.call(null,a);
});
/**
 * Coerces param (which may be any array) into a format preferred by a specific matrix implementation.
 * If the matrix implementation is not specified, uses the current matrix implementation.
 * If param is already in a format deemed usable by the implementation, may return it unchanged.
 * 
 * coerce should never alter the shape of the array, but may convert element types where necessary
 * (e.g. turning real values into complex values when converting to a complex array type).
 */
clojure.core.matrix.coerce = (function clojure$core$matrix$coerce(var_args){
var args42593 = [];
var len__19784__auto___42596 = arguments.length;
var i__19785__auto___42597 = (0);
while(true){
if((i__19785__auto___42597 < len__19784__auto___42596)){
args42593.push((arguments[i__19785__auto___42597]));

var G__42598 = (i__19785__auto___42597 + (1));
i__19785__auto___42597 = G__42598;
continue;
} else {
}
break;
}

var G__42595 = args42593.length;
switch (G__42595) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42593.length)].join('')));

}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1 = (function (param){
var m = clojure.core.matrix.implementations.get_canonical_object.call(null);
var or__18726__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2 = (function (matrix_or_implementation,param){
var m = (((matrix_or_implementation instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.call(null,matrix_or_implementation):matrix_or_implementation);
var or__18726__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$lang$maxFixedArity = 2;
/**
 * Gets a scalar value from an array at the specified position. Supports any number of dimensions.
 */
clojure.core.matrix.mget = (function clojure$core$matrix$mget(var_args){
var args42600 = [];
var len__19784__auto___42607 = arguments.length;
var i__19785__auto___42608 = (0);
while(true){
if((i__19785__auto___42608 < len__19784__auto___42607)){
args42600.push((arguments[i__19785__auto___42608]));

var G__42609 = (i__19785__auto___42608 + (1));
i__19785__auto___42608 = G__42609;
continue;
} else {
}
break;
}

var G__42606 = args42600.length;
switch (G__42606) {
case 1:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42600.slice((3)),(0)));
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19803__auto__);

}
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_0d.call(null,m);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$2 = (function (m,x){
return clojure.core.matrix.protocols.get_1d.call(null,m,x);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$3 = (function (m,x,y){
return clojure.core.matrix.protocols.get_2d.call(null,m,x,y);
});

clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,more){
return clojure.core.matrix.protocols.get_nd.call(null,m,cljs.core.cons.call(null,x,cljs.core.cons.call(null,y,more)));
});

clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq42601){
var G__42602 = cljs.core.first.call(null,seq42601);
var seq42601__$1 = cljs.core.next.call(null,seq42601);
var G__42603 = cljs.core.first.call(null,seq42601__$1);
var seq42601__$2 = cljs.core.next.call(null,seq42601__$1);
var G__42604 = cljs.core.first.call(null,seq42601__$2);
var seq42601__$3 = cljs.core.next.call(null,seq42601__$2);
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic(G__42602,G__42603,G__42604,seq42601__$3);
});

clojure.core.matrix.mget.cljs$lang$maxFixedArity = (3);
/**
 * Sets a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Returns a new matrix and leaves the original unchanged.
 * 
 * WARNING: performance of this operation may be as high as O(N) where N is the number of elements in
 * the array. Consider using mutable arrays and `mset!` when setting large numbers of individual elements
 * is required.
 */
clojure.core.matrix.mset = (function clojure$core$matrix$mset(var_args){
var args42611 = [];
var len__19784__auto___42619 = arguments.length;
var i__19785__auto___42620 = (0);
while(true){
if((i__19785__auto___42620 < len__19784__auto___42619)){
args42611.push((arguments[i__19785__auto___42620]));

var G__42621 = (i__19785__auto___42620 + (1));
i__19785__auto___42620 = G__42621;
continue;
} else {
}
break;
}

var G__42618 = args42611.length;
switch (G__42618) {
case 2:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42611.slice((4)),(0)));
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19803__auto__);

}
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
return clojure.core.matrix.protocols.set_0d.call(null,m,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
return clojure.core.matrix.protocols.set_1d.call(null,m,x,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
return clojure.core.matrix.protocols.set_2d.call(null,m,x,y,v);
});

clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,more){
return clojure.core.matrix.protocols.set_nd.call(null,m,cljs.core.cons.call(null,x,cljs.core.cons.call(null,y,cljs.core.cons.call(null,z,cljs.core.butlast.call(null,more)))),cljs.core.last.call(null,more));
});

clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq42612){
var G__42613 = cljs.core.first.call(null,seq42612);
var seq42612__$1 = cljs.core.next.call(null,seq42612);
var G__42614 = cljs.core.first.call(null,seq42612__$1);
var seq42612__$2 = cljs.core.next.call(null,seq42612__$1);
var G__42615 = cljs.core.first.call(null,seq42612__$2);
var seq42612__$3 = cljs.core.next.call(null,seq42612__$2);
var G__42616 = cljs.core.first.call(null,seq42612__$3);
var seq42612__$4 = cljs.core.next.call(null,seq42612__$3);
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic(G__42613,G__42614,G__42615,G__42616,seq42612__$4);
});

clojure.core.matrix.mset.cljs$lang$maxFixedArity = (4);
/**
 * Mutates a scalar value in an array at the specified position. Supports any number of dimensions.
 * 
 * Will throw an exception if the matrix is not mutable at the specified position. Note that it
 * is possible for some arrays to be mutable in places and immutable in others (e.g. sparse arrays)
 * 
 * Returns the modified matrix (it is guaranteed to return the same instance)
 */
clojure.core.matrix.mset_BANG_ = (function clojure$core$matrix$mset_BANG_(var_args){
var args42623 = [];
var len__19784__auto___42632 = arguments.length;
var i__19785__auto___42633 = (0);
while(true){
if((i__19785__auto___42633 < len__19784__auto___42632)){
args42623.push((arguments[i__19785__auto___42633]));

var G__42634 = (i__19785__auto___42633 + (1));
i__19785__auto___42633 = G__42634;
continue;
} else {
}
break;
}

var G__42631 = args42623.length;
switch (G__42631) {
case 2:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42623.slice((5)),(0)));
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19803__auto__);

}
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,v){
clojure.core.matrix.protocols.set_0d_BANG_.call(null,m,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,x,v){
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m,x,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,x,y,v){
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m,x,y,v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m,x,y,z,v){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),v);

return m;
});

clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,x,y,z,t,more){
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z,t], null),cljs.core.butlast.call(null,more)),cljs.core.last.call(null,more));

return m;
});

clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq42624){
var G__42625 = cljs.core.first.call(null,seq42624);
var seq42624__$1 = cljs.core.next.call(null,seq42624);
var G__42626 = cljs.core.first.call(null,seq42624__$1);
var seq42624__$2 = cljs.core.next.call(null,seq42624__$1);
var G__42627 = cljs.core.first.call(null,seq42624__$2);
var seq42624__$3 = cljs.core.next.call(null,seq42624__$2);
var G__42628 = cljs.core.first.call(null,seq42624__$3);
var seq42624__$4 = cljs.core.next.call(null,seq42624__$3);
var G__42629 = cljs.core.first.call(null,seq42624__$4);
var seq42624__$5 = cljs.core.next.call(null,seq42624__$4);
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42625,G__42626,G__42627,G__42628,G__42629,seq42624__$5);
});

clojure.core.matrix.mset_BANG_.cljs$lang$maxFixedArity = (5);
/**
 * Gets a row of a matrix, as a 1D vector.
 * 
 * May return a mutable view if supported by the implementation.
 */
clojure.core.matrix.get_row = (function clojure$core$matrix$get_row(m,x){
return clojure.core.matrix.protocols.get_row.call(null,m,x);
});
/**
 * Gets a column of a matrix, as a 1D vector.
 * 
 * May return a mutable view if supported by the implementation.
 */
clojure.core.matrix.get_column = (function clojure$core$matrix$get_column(m,y){
return clojure.core.matrix.protocols.get_column.call(null,m,y);
});
/**
 * Slices along all dimensions where there is a numerical argument
 */
clojure.core.matrix.slice_dims = (function clojure$core$matrix$slice_dims(m,args,slice_func){
var shape = clojure.core.matrix.protocols.get_shape.call(null,m);
var N = cljs.core.count.call(null,args);
if(cljs.core.not_EQ_.call(null,N,clojure.core.matrix.dimensionality.call(null,m))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Inconsistent count of selection arguments "),cljs.core.str(args),cljs.core.str(" for shape "),cljs.core.str(shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var m__$1 = m;
var i = (0);
var args__$1 = cljs.core.seq.call(null,args);
while(true){
if(args__$1){
var ix = cljs.core.first.call(null,args__$1);
if(typeof ix === 'number'){
var G__42636 = slice_func.call(null,m__$1,i,ix);
var G__42637 = i;
var G__42638 = cljs.core.next.call(null,args__$1);
m__$1 = G__42636;
i = G__42637;
args__$1 = G__42638;
continue;
} else {
var G__42639 = m__$1;
var G__42640 = (i + (1));
var G__42641 = cljs.core.next.call(null,args__$1);
m__$1 = G__42639;
i = G__42640;
args__$1 = G__42641;
continue;
}
} else {
return m__$1;
}
break;
}
});
/**
 * Normalises arg to either a number of a sequable list of indexes
 */
clojure.core.matrix.normalise_arg = (function clojure$core$matrix$normalise_arg(arg,dim_count){
if(typeof arg === 'number'){
return arg;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"all","all",892129742),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,dim_count));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"last","last",1105735132),arg)){
return (dim_count - (1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"butlast","butlast",-67491942),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,(dim_count - (1))));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),arg)){
return (0);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),arg)){
return cljs.core.vec.call(null,cljs.core.range.call(null,(1),dim_count));
} else {
return arg;

}
}
}
}
}
}
});
/**
 * Normalises arguments by mapping :all to the complete range
 */
clojure.core.matrix.normalise_args = (function clojure$core$matrix$normalise_args(args,m){
return cljs.core.mapv.call(null,clojure.core.matrix.normalise_arg,args,clojure.core.matrix.protocols.get_shape.call(null,m));
});
/**
 * Returns an array containing all elements in a which are at the positions
 * of the Cartesian product of args. An argument can be:
 *  - a number - slices at this dimension (eliminates the dimension),
 *  - a keyword which selects specific slices (:first :last)
 *  - a 1-dimensional array of numbers which selects the slices at these indices
 *  - a keyword which selects a range of slices (:all :butlast :rest)
 * 
 * The number of args must match the dimensionality of a.
 * 
 * Examples:
 * (select [[1 2][3 4]] 0 0) ;=> 1
 * (select [[1 2][3 4]] 0 :all) ;=> [1 2]
 * (select [[1 2][3 4]] [0 1] [0]) ;=> [[1] [3]]
 * (select [[1 2][3 4]] :all 0) ;=> [1 3]
 */
clojure.core.matrix.select = (function clojure$core$matrix$select(var_args){
var args__19791__auto__ = [];
var len__19784__auto___42644 = arguments.length;
var i__19785__auto___42645 = (0);
while(true){
if((i__19785__auto___42645 < len__19784__auto___42644)){
args__19791__auto__.push((arguments[i__19785__auto___42645]));

var G__42646 = (i__19785__auto___42645 + (1));
i__19785__auto___42645 = G__42646;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
return clojure.core.matrix.protocols.select.call(null,a__$1,selecting_args);
});

clojure.core.matrix.select.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.select.cljs$lang$applyTo = (function (seq42642){
var G__42643 = cljs.core.first.call(null,seq42642);
var seq42642__$1 = cljs.core.next.call(null,seq42642);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic(G__42643,seq42642__$1);
});
/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__19791__auto__ = [];
var len__19784__auto___42649 = arguments.length;
var i__19785__auto___42650 = (0);
while(true){
if((i__19785__auto___42650 < len__19784__auto___42649)){
args__19791__auto__.push((arguments[i__19785__auto___42650]));

var G__42651 = (i__19785__auto___42650 + (1));
i__19785__auto___42650 = G__42651;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice_view);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
var or__18726__auto__ = clojure.core.matrix.protocols.select_view.call(null,a__$1,selecting_args);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a__$1,selecting_args);
}
});

clojure.core.matrix.select_view.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq42647){
var G__42648 = cljs.core.first.call(null,seq42647);
var seq42647__$1 = cljs.core.next.call(null,seq42647);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic(G__42648,seq42647__$1);
});
/**
 * Returns a one-dimensional array of the elements which are at the specified
 * indices. An index is a one-dimensional array which element-count matches the
 * dimensionality of a. Examples:
 * (select-indices [[1 2] [3 4]] [[0 0][1 1]]) ;=> [1 4]
 */
clojure.core.matrix.select_indices = (function clojure$core$matrix$select_indices(a,indices){
return clojure.core.matrix.protocols.get_indices.call(null,a,indices);
});
/**
 * Like set-selection but mutates the array in place. Will throw an error if array is immutable.
 */
clojure.core.matrix.set_selection_BANG_ = (function clojure$core$matrix$set_selection_BANG_(var_args){
var args__19791__auto__ = [];
var len__19784__auto___42654 = arguments.length;
var i__19785__auto___42655 = (0);
while(true){
if((i__19785__auto___42655 < len__19784__auto___42654)){
args__19791__auto__.push((arguments[i__19785__auto___42655]));

var G__42656 = (i__19785__auto___42655 + (1));
i__19785__auto___42655 = G__42656;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var value = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
clojure.core.matrix.assign_BANG_.call(null,cljs.core.apply.call(null,clojure.core.matrix.select_view,a,args__$1),value);

return a;
});

clojure.core.matrix.set_selection_BANG_.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq42652){
var G__42653 = cljs.core.first.call(null,seq42652);
var seq42652__$1 = cljs.core.next.call(null,seq42652);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42653,seq42652__$1);
});
/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__19791__auto__ = [];
var len__19784__auto___42659 = arguments.length;
var i__19785__auto___42660 = (0);
while(true){
if((i__19785__auto___42660 < len__19784__auto___42659)){
args__19791__auto__.push((arguments[i__19785__auto___42660]));

var G__42661 = (i__19785__auto___42660 + (1));
i__19785__auto___42660 = G__42661;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var a__$1 = clojure.core.matrix.mutable.call(null,a);
var r = cljs.core.apply.call(null,clojure.core.matrix.set_selection_BANG_,a__$1,args);
return clojure.core.matrix.coerce.call(null,a__$1,r);
});

clojure.core.matrix.set_selection.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq42657){
var G__42658 = cljs.core.first.call(null,seq42657);
var seq42657__$1 = cljs.core.next.call(null,seq42657);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic(G__42658,seq42657__$1);
});
/**
 * like select-indices but sets the elements at the specified indices to values.
 * Leaves the original array (a) unchanged and returns a modified array
 */
clojure.core.matrix.set_indices = (function clojure$core$matrix$set_indices(a,indices,values){
return clojure.core.matrix.protocols.set_indices.call(null,a,indices,values);
});
/**
 * like set-indices but destructively modifies array in place
 */
clojure.core.matrix.set_indices_BANG_ = (function clojure$core$matrix$set_indices_BANG_(a,indices,values){
clojure.core.matrix.protocols.set_indices_BANG_.call(null,a,indices,values);

return a;
});
/**
 * Gets a view of a submatrix, for a set of index ranges.
 * Index ranges should be [start, length] pairs.
 * Index range pairs can be nil (gets the whole range) 
 */
clojure.core.matrix.submatrix = (function clojure$core$matrix$submatrix(var_args){
var args42662 = [];
var len__19784__auto___42665 = arguments.length;
var i__19785__auto___42666 = (0);
while(true){
if((i__19785__auto___42666 < len__19784__auto___42665)){
args42662.push((arguments[i__19785__auto___42666]));

var G__42667 = (i__19785__auto___42666 + (1));
i__19785__auto___42666 = G__42667;
continue;
} else {
}
break;
}

var G__42664 = args42662.length;
switch (G__42664) {
case 2:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42662.length)].join('')));

}
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$2 = (function (m,index_ranges){
return clojure.core.matrix.protocols.submatrix.call(null,m,index_ranges);
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index_range){
return clojure.core.matrix.protocols.submatrix.call(null,m,cljs.core.assoc.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,clojure.core.matrix.protocols.dimensionality.call(null,m),null)),dimension,index_range));
});

clojure.core.matrix.submatrix.cljs$core$IFn$_invoke$arity$5 = (function (m,row_start,row_length,col_start,col_length){
return clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,row_length),row_start),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,col_length),col_start)], null));
});

clojure.core.matrix.submatrix.cljs$lang$maxFixedArity = 5;
/**
 * Gets a view of part of a vector. The view maintains a reference to the original,
 * so can be used to modify the original vector if it is mutable.
 */
clojure.core.matrix.subvector = (function clojure$core$matrix$subvector(m,start,length){
return clojure.core.matrix.protocols.subvector.call(null,m,start,length);
});
/**
 * Gets a slice of an array along a specific dimension.
 * The returned array will have one less dimension.
 * 
 * Slicing a 1D vector will return a scalar.
 * 
 * Slicing on the first dimension (dimension 0) is likely to perform better
 * for many array implementations, and is therefore the default if no
 * dimension is specified.
 */
clojure.core.matrix.slice = (function clojure$core$matrix$slice(var_args){
var args42669 = [];
var len__19784__auto___42672 = arguments.length;
var i__19785__auto___42673 = (0);
while(true){
if((i__19785__auto___42673 < len__19784__auto___42672)){
args42669.push((arguments[i__19785__auto___42673]));

var G__42674 = (i__19785__auto___42673 + (1));
i__19785__auto___42673 = G__42674;
continue;
} else {
}
break;
}

var G__42671 = args42669.length;
switch (G__42671) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42669.length)].join('')));

}
});

clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2 = (function (m,index){
return clojure.core.matrix.protocols.get_slice.call(null,m,(0),index);
});

clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,index){
return clojure.core.matrix.protocols.get_slice.call(null,m,dimension,index);
});

clojure.core.matrix.slice.cljs$lang$maxFixedArity = 3;
/**
 * Gets a sequence of slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension.
 * 
 * Returns a sequence of scalar values if the array is 1-dimensional.
 */
clojure.core.matrix.slices = (function clojure$core$matrix$slices(var_args){
var args42676 = [];
var len__19784__auto___42679 = arguments.length;
var i__19785__auto___42680 = (0);
while(true){
if((i__19785__auto___42680 < len__19784__auto___42679)){
args42676.push((arguments[i__19785__auto___42680]));

var G__42681 = (i__19785__auto___42680 + (1));
i__19785__auto___42680 = G__42681;
continue;
} else {
}
break;
}

var G__42678 = args42676.length;
switch (G__42678) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42676.length)].join('')));

}
});

clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m);
});

clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
return clojure.core.matrix.protocols.get_slice_seq.call(null,m,dimension);
});

clojure.core.matrix.slices.cljs$lang$maxFixedArity = 2;
/**
 * Gets a sequence of views of the slices of an array. If dimension is supplied, slices along a given dimension,
 * otherwise slices along the first dimension. If the matrix implementation supports mutable views, these views
 * can be used to mutate portions of the original array.
 * 
 * The key difference between 'slices' and 'slice-views' is that 'slice-views' must always return views. In order
 * to ensure this behaviour on mutable 1-dimensioanal arrays, it must return a sequence of 0-dimensioanal arrays.
 */
clojure.core.matrix.slice_views = (function clojure$core$matrix$slice_views(var_args){
var args42684 = [];
var len__19784__auto___42687 = arguments.length;
var i__19785__auto___42688 = (0);
while(true){
if((i__19785__auto___42688 < len__19784__auto___42687)){
args42684.push((arguments[i__19785__auto___42688]));

var G__42689 = (i__19785__auto___42688 + (1));
i__19785__auto___42688 = G__42689;
continue;
} else {
}
break;
}

var G__42686 = args42684.length;
switch (G__42686) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42684.length)].join('')));

}
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m);
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.slice_views.call(null,m);
} else {
return cljs.core.map.call(null,(function (p1__42683_SHARP_){
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,p1__42683_SHARP_);
}),cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));
}
});

clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2;
/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var args42691 = [];
var len__19784__auto___42694 = arguments.length;
var i__19785__auto___42695 = (0);
while(true){
if((i__19785__auto___42695 < len__19784__auto___42694)){
args42691.push((arguments[i__19785__auto___42695]));

var G__42696 = (i__19785__auto___42695 + (1));
i__19785__auto___42695 = G__42696;
continue;
} else {
}
break;
}

var G__42693 = args42691.length;
switch (G__42693) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42691.length)].join('')));

}
});

clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2 = (function (m,i){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
});

clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,i){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.protocols.get_major_slice_view.call(null,m,i);
} else {
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,i);
}
});

clojure.core.matrix.slice_view.cljs$lang$maxFixedArity = 3;
/**
 * Gets the rows of a matrix, as a sequence of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the rows from all slices in order.
 */
clojure.core.matrix.rows = (function clojure$core$matrix$rows(m){
return clojure.core.matrix.protocols.get_rows.call(null,m);
});
/**
 * Gets the columns of a matrix, as a sequence of 1D vectors.
 * 
 * If the array has more than 2 dimensions, will return the columns from all slices in order.
 */
clojure.core.matrix.columns = (function clojure$core$matrix$columns(m){
return clojure.core.matrix.protocols.get_columns.call(null,m);
});
/**
 * Returns the main diagonal of a matrix or general array, as a vector.
 * The main diagonal of a general array is defined as those elements where the all the
 * indexes are equal, i.e. the index is of the form [i i ... i]
 * Works on both square and rectangular matrices.
 */
clojure.core.matrix.main_diagonal = (function clojure$core$matrix$main_diagonal(m){
return clojure.core.matrix.protocols.main_diagonal.call(null,m);
});
/**
 * Returns the specified diagonal of a 2D matrix as a vector.
 * If k>0, returns a diagonal above the main diagonal.
 * If k<0, returns a diagonal below the main diagonal.
 * Works on both square and rectangular matrices.
 * Returns empty vector if value of k is out of range (outside matrix)
 */
clojure.core.matrix.diagonal = (function clojure$core$matrix$diagonal(var_args){
var args42698 = [];
var len__19784__auto___42701 = arguments.length;
var i__19785__auto___42702 = (0);
while(true){
if((i__19785__auto___42702 < len__19784__auto___42701)){
args42698.push((arguments[i__19785__auto___42702]));

var G__42703 = (i__19785__auto___42702 + (1));
i__19785__auto___42702 = G__42703;
continue;
} else {
}
break;
}

var G__42700 = args42698.length;
switch (G__42700) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42698.length)].join('')));

}
});

clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.main_diagonal.call(null,m);
});

clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
var k__$1 = cljs.core.long$.call(null,k);
if((k__$1 < (0))){
return clojure.core.matrix.protocols.main_diagonal.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- k__$1),(clojure.core.matrix.dimension_count.call(null,m,(0)) + k__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count.call(null,m,(1))], null)], null)));
} else {
if((k__$1 > (0))){
return clojure.core.matrix.protocols.main_diagonal.call(null,clojure.core.matrix.protocols.submatrix.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clojure.core.matrix.dimension_count.call(null,m,(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k__$1,(clojure.core.matrix.dimension_count.call(null,m,(1)) - k__$1)], null)], null)));
} else {
return clojure.core.matrix.protocols.main_diagonal.call(null,m);

}
}
});

clojure.core.matrix.diagonal.cljs$lang$maxFixedArity = 2;
/**
 * Joins arrays together, along the major dimension 0. For 1D vectors, this behaves as simple concatenation.
 * Other dimensions must be compatible. To join arrays along a different dimension, use 'join-along' instead.
 */
clojure.core.matrix.join = (function clojure$core$matrix$join(var_args){
var args__19791__auto__ = [];
var len__19784__auto___42706 = arguments.length;
var i__19785__auto___42707 = (0);
while(true){
if((i__19785__auto___42707 < len__19784__auto___42706)){
args__19791__auto__.push((arguments[i__19785__auto___42707]));

var G__42708 = (i__19785__auto___42707 + (1));
i__19785__auto___42707 = G__42708;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic = (function (arrays){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.join,arrays);
});

clojure.core.matrix.join.cljs$lang$maxFixedArity = (0);

clojure.core.matrix.join.cljs$lang$applyTo = (function (seq42705){
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42705));
});
/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__19791__auto__ = [];
var len__19784__auto___42713 = arguments.length;
var i__19785__auto___42714 = (0);
while(true){
if((i__19785__auto___42714 < len__19784__auto___42713)){
args__19791__auto__.push((arguments[i__19785__auto___42714]));

var G__42715 = (i__19785__auto___42714 + (1));
i__19785__auto___42714 = G__42715;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__18726__auto__ = cljs.core.reduce.call(null,(function (p1__42709_SHARP_,p2__42710_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__42709_SHARP_,p2__42710_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Failure to joins arrays")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq42711){
var G__42712 = cljs.core.first.call(null,seq42711);
var seq42711__$1 = cljs.core.next.call(null,seq42711);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic(G__42712,seq42711__$1);
});
/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var args42717 = [];
var len__19784__auto___42723 = arguments.length;
var i__19785__auto___42724 = (0);
while(true){
if((i__19785__auto___42724 < len__19784__auto___42723)){
args42717.push((arguments[i__19785__auto___42724]));

var G__42725 = (i__19785__auto___42724 + (1));
i__19785__auto___42724 = G__42725;
continue;
} else {
}
break;
}

var G__42722 = args42717.length;
switch (G__42722) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42717.slice((2)),(0)));
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var ss = cljs.core.assoc.call(null,cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)),(0),(1));
return clojure.core.matrix.join.call(null,a,clojure.core.matrix.protocols.broadcast.call(null,b,ss));
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var ss = cljs.core.vec.call(null,cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)));
var slcs = cljs.core.mapv.call(null,((function (ss){
return (function (p1__42716_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__42716_SHARP_,ss);
});})(ss))
,cljs.core.cons.call(null,b,more));
return clojure.core.matrix.join.call(null,a,slcs);
});

clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq42718){
var G__42719 = cljs.core.first.call(null,seq42718);
var seq42718__$1 = cljs.core.next.call(null,seq42718);
var G__42720 = cljs.core.first.call(null,seq42718__$1);
var seq42718__$2 = cljs.core.next.call(null,seq42718__$1);
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic(G__42719,G__42720,seq42718__$2);
});

clojure.core.matrix.conjoin.cljs$lang$maxFixedArity = (2);
/**
 * Adds a new value [b] as a new slice to an array [a] along the given dimension,
 * returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj using
 * a specified dimension
 */
clojure.core.matrix.conjoin_along = (function clojure$core$matrix$conjoin_along(var_args){
var args42727 = [];
var len__19784__auto___42734 = arguments.length;
var i__19785__auto___42735 = (0);
while(true){
if((i__19785__auto___42735 < len__19784__auto___42734)){
args42727.push((arguments[i__19785__auto___42735]));

var G__42736 = (i__19785__auto___42735 + (1));
i__19785__auto___42735 = G__42736;
continue;
} else {
}
break;
}

var G__42733 = args42727.length;
switch (G__42733) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42727.slice((3)),(0)));
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19803__auto__);

}
});

clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3 = (function (dim,a,b){
if((cljs.core.long$.call(null,dim) === (0))){
return clojure.core.matrix.conjoin.call(null,a,b);
} else {
var ss = clojure.core.matrix.protocols.get_shape.call(null,clojure.core.matrix.protocols.get_slice.call(null,a,dim,(0)));
return clojure.core.matrix.join_along.call(null,dim,a,clojure.core.matrix.protocols.broadcast.call(null,b,ss));
}
});

clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic = (function (dim,a,b,more){
return cljs.core.reduce.call(null,(function (a__$1,b__$1){
return clojure.core.matrix.conjoin_along.call(null,dim,a__$1,b__$1);
}),clojure.core.matrix.conjoin_along.call(null,dim,a,b),more);
});

clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq42728){
var G__42729 = cljs.core.first.call(null,seq42728);
var seq42728__$1 = cljs.core.next.call(null,seq42728);
var G__42730 = cljs.core.first.call(null,seq42728__$1);
var seq42728__$2 = cljs.core.next.call(null,seq42728__$1);
var G__42731 = cljs.core.first.call(null,seq42728__$2);
var seq42728__$3 = cljs.core.next.call(null,seq42728__$2);
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic(G__42729,G__42730,G__42731,seq42728__$3);
});

clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3);
/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var args42738 = [];
var len__19784__auto___42741 = arguments.length;
var i__19785__auto___42742 = (0);
while(true){
if((i__19785__auto___42742 < len__19784__auto___42741)){
args42738.push((arguments[i__19785__auto___42742]));

var G__42743 = (i__19785__auto___42742 + (1));
i__19785__auto___42742 = G__42743;
continue;
} else {
}
break;
}

var G__42740 = args42738.length;
switch (G__42740) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42738.length)].join('')));

}
});

clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.rotate.call(null,m,dimension,shift_amount);
});

clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.rotate_all.call(null,m,shifts);
});

clojure.core.matrix.rotate.cljs$lang$maxFixedArity = 3;
/**
 * Shifts all elements of an array along specified dimensions, maintaining the shape of the array.
 * 
 * New spaces shifted into the array are filled with zero.
 */
clojure.core.matrix.shift = (function clojure$core$matrix$shift(var_args){
var args42745 = [];
var len__19784__auto___42748 = arguments.length;
var i__19785__auto___42749 = (0);
while(true){
if((i__19785__auto___42749 < len__19784__auto___42748)){
args42745.push((arguments[i__19785__auto___42749]));

var G__42750 = (i__19785__auto___42749 + (1));
i__19785__auto___42749 = G__42750;
continue;
} else {
}
break;
}

var G__42747 = args42745.length;
switch (G__42747) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42745.length)].join('')));

}
});

clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,shift_amount){
return clojure.core.matrix.protocols.shift.call(null,m,dimension,shift_amount);
});

clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2 = (function (m,shifts){
return clojure.core.matrix.protocols.shift_all.call(null,m,shifts);
});

clojure.core.matrix.shift.cljs$lang$maxFixedArity = 3;
/**
 * Reorders slices of an array along a specified dimension. Re-orders along major dimension
 * if no dimension is specified.
 * 
 * Indicies can be any seqable object containing the indices along the specified dimension to select.
 * An index can be selected multiple times (which created repreated slices), or not at all (which excludes
 * the slice from the result).
 */
clojure.core.matrix.order = (function clojure$core$matrix$order(var_args){
var args42752 = [];
var len__19784__auto___42755 = arguments.length;
var i__19785__auto___42756 = (0);
while(true){
if((i__19785__auto___42756 < len__19784__auto___42755)){
args42752.push((arguments[i__19785__auto___42756]));

var G__42757 = (i__19785__auto___42756 + (1));
i__19785__auto___42756 = G__42757;
continue;
} else {
}
break;
}

var G__42754 = args42752.length;
switch (G__42754) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42752.length)].join('')));

}
});

clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2 = (function (m,indices){
return clojure.core.matrix.protocols.order.call(null,m,indices);
});

clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3 = (function (m,dimension,indices){
return clojure.core.matrix.protocols.order.call(null,m,dimension,indices);
});

clojure.core.matrix.order.cljs$lang$maxFixedArity = 3;
/**
 * Creates a view of an array as a single flattened vector.
 * 
 * Returns nil if this is not supported by the implementation. You should use `to-vector` instead to
 * obtain a flattened vector without guaranteeing a view.
 */
clojure.core.matrix.as_vector = (function clojure$core$matrix$as_vector(m){
return clojure.core.matrix.protocols.as_vector.call(null,m);
});
/**
 * Creates a new array representing the elements of array m as a single flattened vector.
 * 
 * This operation guarantees a new copy of the data.
 */
clojure.core.matrix.to_vector = (function clojure$core$matrix$to_vector(m){
var or__18726__auto__ = clojure.core.matrix.protocols.to_vector.call(null,m);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return clojure.core.matrix.array.call(null,m,clojure.core.matrix.protocols.to_object_array.call(null,m));
}
});
/**
 * Broadcasts a matrix to a specified shape. Returns a new matrix with the shape specified.
 * The broadcasted matrix may be a view over the original matrix: attempting to modify the
 * broadcasted matrix therefore has undefined results.
 * 
 * Will throw an exception if broadcast to the target shape is not possible.
 */
clojure.core.matrix.broadcast = (function clojure$core$matrix$broadcast(m,shape){
var or__18726__auto__ = clojure.core.matrix.protocols.broadcast.call(null,m,shape);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Broadcast to target shape: "),cljs.core.str(cljs.core.vec.call(null,shape)),cljs.core.str(" not possible.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Broadcasts the second matrix to the shape of the first. See 'broadcast'.
 */
clojure.core.matrix.broadcast_like = (function clojure$core$matrix$broadcast_like(m,a){
return clojure.core.matrix.protocols.broadcast_like.call(null,m,a);
});
/**
 * Broadcasts and coerces the second matrix to the shape and type of the first.
 * Equivalent to (coerce m (broadcast-like m a)).
 */
clojure.core.matrix.broadcast_coerce = (function clojure$core$matrix$broadcast_coerce(m,a){
return clojure.core.matrix.protocols.broadcast_coerce.call(null,m,a);
});
/**
 * Transposes a matrix, returning a new matrix. For 2D matrices, rows and columns are swapped.
 * More generally, the dimension indices are reversed for any shape of array. Note that 1D vectors
 * and scalars will be returned unchanged.
 * 
 * If ordering is provided, will re-order dimensions according to the provided order.
 */
clojure.core.matrix.transpose = (function clojure$core$matrix$transpose(var_args){
var args42759 = [];
var len__19784__auto___42762 = arguments.length;
var i__19785__auto___42763 = (0);
while(true){
if((i__19785__auto___42763 < len__19784__auto___42762)){
args42759.push((arguments[i__19785__auto___42763]));

var G__42764 = (i__19785__auto___42763 + (1));
i__19785__auto___42763 = G__42764;
continue;
} else {
}
break;
}

var G__42761 = args42759.length;
switch (G__42761) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42759.length)].join('')));

}
});

clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.transpose.call(null,m);
});

clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2 = (function (m,ordering){
throw cljs.core.ex_info.call(null,[cljs.core.str("TODO: not yet implemented")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.transpose.cljs$lang$maxFixedArity = 2;
/**
 * Transposes a square 2D matrix in-place.
 * 
 * Will throw an exception if not possible (e.g. if the matrix is not square or not mutable).
 */
clojure.core.matrix.transpose_BANG_ = (function clojure$core$matrix$transpose_BANG_(m){
clojure.core.matrix.protocols.transpose_BANG_.call(null,m);

return m;
});
/**
 * Changes the shape of a matrix to the specified new shape. shape can be any sequence of dimension sizes.
 * 
 * Preserves the row-major order of matrix elements. Truncates the sequence of elements if the shape is smaller
 * than the original shape.
 * 
 * Pads with default values (dependent on implementation - normally zero) if the shape is larger.
 */
clojure.core.matrix.reshape = (function clojure$core$matrix$reshape(m,shape){
return clojure.core.matrix.protocols.reshape.call(null,m,shape);
});
/**
 * Fills a matrix with a single scalar value. The scalar value must be compatible with the element-type
 * of the array.
 * 
 * Similar to assign!, but only supports scalar values (and may be more efficient).
 */
clojure.core.matrix.fill_BANG_ = (function clojure$core$matrix$fill_BANG_(m,value){
clojure.core.matrix.protocols.fill_BANG_.call(null,m,value);

return m;
});
/**
 * Fills a matrix with a single scalar value. The scalar value must be compatible with the element-type
 * of the array. Returns a new array.
 * 
 * Functionally similar to `assign!` except only intended for use with a scalar value.
 */
clojure.core.matrix.fill = (function clojure$core$matrix$fill(m,value){
return clojure.core.matrix.assign.call(null,m,clojure.core.matrix.protocols.get_0d.call(null,value));
});
/**
 * Returns true if two arrays are numerically equal.
 * 
 * Will return false for arrays of different shapes.
 * 
 * May either return false or throw an error if the arrays are not numerical.
 * 
 * If epsilon is provided, performs an equality test
 * with the given maximum tolerance (default is 0.0, i.e. exact numerical equivalence)
 */
clojure.core.matrix.equals = (function clojure$core$matrix$equals(var_args){
var args42766 = [];
var len__19784__auto___42769 = arguments.length;
var i__19785__auto___42770 = (0);
while(true){
if((i__19785__auto___42770 < len__19784__auto___42769)){
args42766.push((arguments[i__19785__auto___42770]));

var G__42771 = (i__19785__auto___42770 + (1));
i__19785__auto___42770 = G__42771;
continue;
} else {
}
break;
}

var G__42768 = args42766.length;
switch (G__42768) {
case 1:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42766.length)].join('')));

}
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_equals.call(null,a,b);
});

clojure.core.matrix.equals.cljs$core$IFn$_invoke$arity$3 = (function (a,b,epsilon){
return clojure.core.matrix.protocols.matrix_equals_epsilon.call(null,a,b,epsilon);
});

clojure.core.matrix.equals.cljs$lang$maxFixedArity = 3;
/**
 * Element-wise of comparisons of two arrays. Returns the signum of the difference
 * between corresponding elements in two arrays.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (cmp 1 3) ;=> -1
 *   (cmp 0 0) ;=> 0
 *   (cmp 1 -1) ;=> 1
 *   (cmp [[1 3] [5 5]] [[3 3] [5 3]]) ;=> [[-1 0] [0 1]]
 *   (cmp [[1 4][1 5][1 8]] [[1 2][1 5][2 7]]) ;=> [[0 1][0 0][-1 1]]
 *   
 */
clojure.core.matrix.cmp = (function clojure$core$matrix$cmp(a,b){
return clojure.core.matrix.protocols.element_compare.call(null,a,b);
});
/**
 * Element-wise if. Tranverses each element, x, of an array, m. If x > 0,
 *   returns a (if a is a scalar) or the corresponding element from a (if a is an
 *   array or matrix). If x <= 0, returns b (if b is a scalar) or the corresponding
 *   element from array b (if b is an array or matrix).
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eif (lt 1 3) 3 6) ;=> 3
 *   (eif (lt 5 3) 3 6) ;=> 6
 *   (eif (eq A B) 1 2) ;=> [[1 2] [2 1]]
 *   (eif (eq A B) 1 D) ;=> [[1 1] [9 1]]
 *   (eif (eq A B) C 2) ;=> [[2 2] [2 2]]
 *   (eif [[1 0][0 1] [[2 3][4 5]] [[6 7][8 9]]) ;=> [[2 7][8 5]]
 *   (eif (gt [[2 6][3 5]] 4) [[0 0][0 0]] [[1 1][1 1]] ;=> [[0 1][0 1]]
 */
clojure.core.matrix.eif = (function clojure$core$matrix$eif(m,a,b){
return clojure.core.matrix.protocols.element_if.call(null,m,a,b);
});
/**
 * Element-wise less-than comparison operation. Returns a binary array where
 *   elements less-than the argument are represented by 1 and elements greater-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (lt 1 4) ;=> 1
 *   (lt 3 3) ;=> 0
 *   (lt [[1 5] [3 6]] 3) ;=> [[1 0] [0 0]]
 *   (lt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 0]]
 */
clojure.core.matrix.lt = (function clojure$core$matrix$lt(var_args){
var args42773 = [];
var len__19784__auto___42779 = arguments.length;
var i__19785__auto___42780 = (0);
while(true){
if((i__19785__auto___42780 < len__19784__auto___42779)){
args42773.push((arguments[i__19785__auto___42780]));

var G__42781 = (i__19785__auto___42780 + (1));
i__19785__auto___42780 = G__42781;
continue;
} else {
}
break;
}

var G__42778 = args42773.length;
switch (G__42778) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42773.slice((2)),(0)));
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_lt.call(null,m,a);
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_lt),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq42774){
var G__42775 = cljs.core.first.call(null,seq42774);
var seq42774__$1 = cljs.core.next.call(null,seq42774);
var G__42776 = cljs.core.first.call(null,seq42774__$1);
var seq42774__$2 = cljs.core.next.call(null,seq42774__$1);
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic(G__42775,G__42776,seq42774__$2);
});

clojure.core.matrix.lt.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise less-than-or-equal-to comparison operation. Returns a binary
 *   array where elements less-than or equal to the argument are represented by 1
 *   and elements greater-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (le 3 3) ;=> 1
 *   (le 4 3) ;=> 0
 *   (le [[1 5] [3 6]] 3) ;=> [[1 0] [1 0]]
 *   (le [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 0] [1 1]]
 */
clojure.core.matrix.le = (function clojure$core$matrix$le(var_args){
var args42783 = [];
var len__19784__auto___42789 = arguments.length;
var i__19785__auto___42790 = (0);
while(true){
if((i__19785__auto___42790 < len__19784__auto___42789)){
args42783.push((arguments[i__19785__auto___42790]));

var G__42791 = (i__19785__auto___42790 + (1));
i__19785__auto___42790 = G__42791;
continue;
} else {
}
break;
}

var G__42788 = args42783.length;
switch (G__42788) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42783.slice((2)),(0)));
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_le.call(null,m,a);
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_le),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.le.cljs$lang$applyTo = (function (seq42784){
var G__42785 = cljs.core.first.call(null,seq42784);
var seq42784__$1 = cljs.core.next.call(null,seq42784);
var G__42786 = cljs.core.first.call(null,seq42784__$1);
var seq42784__$2 = cljs.core.next.call(null,seq42784__$1);
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic(G__42785,G__42786,seq42784__$2);
});

clojure.core.matrix.le.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise greater-than comparison operation. Returns a binary array where
 *   elements greater-than the argument are represented by 1 and elements less-
 *   than or equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (gt 4 3) ;=> 1
 *   (gt 3 3) ;=> 0
 *   (gt [[1 5] [3 6]] 3) ;=> [[0 1] [0 1]]
 *   (gt [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 0]]
 */
clojure.core.matrix.gt = (function clojure$core$matrix$gt(var_args){
var args42793 = [];
var len__19784__auto___42799 = arguments.length;
var i__19785__auto___42800 = (0);
while(true){
if((i__19785__auto___42800 < len__19784__auto___42799)){
args42793.push((arguments[i__19785__auto___42800]));

var G__42801 = (i__19785__auto___42800 + (1));
i__19785__auto___42800 = G__42801;
continue;
} else {
}
break;
}

var G__42798 = args42793.length;
switch (G__42798) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42793.slice((2)),(0)));
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_gt.call(null,m,a);
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_gt),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq42794){
var G__42795 = cljs.core.first.call(null,seq42794);
var seq42794__$1 = cljs.core.next.call(null,seq42794);
var G__42796 = cljs.core.first.call(null,seq42794__$1);
var seq42794__$2 = cljs.core.next.call(null,seq42794__$1);
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic(G__42795,G__42796,seq42794__$2);
});

clojure.core.matrix.gt.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise greater-than-or-equal-to comparison operation. Returns a binary
 *   array where elements greater-than or equal to the argument are represented by 1
 *   and elements less-than to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ge 2 3) ;=> 0
 *   (ge 3 3) ;=> 1
 *   (ge [[1 5] [3 6]] 3) ;=> [[0 1] [1 1]]
 *   (ge [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 1] [0 1]]
 */
clojure.core.matrix.ge = (function clojure$core$matrix$ge(var_args){
var args42803 = [];
var len__19784__auto___42809 = arguments.length;
var i__19785__auto___42810 = (0);
while(true){
if((i__19785__auto___42810 < len__19784__auto___42809)){
args42803.push((arguments[i__19785__auto___42810]));

var G__42811 = (i__19785__auto___42810 + (1));
i__19785__auto___42810 = G__42811;
continue;
} else {
}
break;
}

var G__42808 = args42803.length;
switch (G__42808) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42803.slice((2)),(0)));
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_ge.call(null,m,a);
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_ge),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq42804){
var G__42805 = cljs.core.first.call(null,seq42804);
var seq42804__$1 = cljs.core.next.call(null,seq42804);
var G__42806 = cljs.core.first.call(null,seq42804__$1);
var seq42804__$2 = cljs.core.next.call(null,seq42804__$1);
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic(G__42805,G__42806,seq42804__$2);
});

clojure.core.matrix.ge.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise not-equal comparison operation. Returns a binary array where
 *   elements not-equal to the argument are represented by 1 and elements equal to
 *   the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (ne 1 1) ;=> 0
 *   (ne 5 1) ;=> 1
 *   (ne [[1 5] [3 6]] 3) ;=> [[1 1] [0 1]]
 *   (ne [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[1 1] [1 0]]
 */
clojure.core.matrix.ne = (function clojure$core$matrix$ne(m,a){
return clojure.core.matrix.protocols.element_ne.call(null,m,a);
});
/**
 * Element-wise equal comparison operation. Returns a binary
 * array where elements equal to the argument are represented by 1 and
 * elements not-equal to the argument are 0.
 * 
 *   Performs broadcasting of arguments if required to match the size of the largest array.
 * 
 *   Examples:
 *   (eq 1 1) ;=> 1
 *   (eq 5 1) ;=> 0
 *   (eq [[1 5] [3 6]] 3) ;=> [[0 0] [1 0]]
 *   (eq [[1 5] [4 6]] [[2 3] [5 6]]) ;=> [[0 0] [0 1]]
 */
clojure.core.matrix.eq = (function clojure$core$matrix$eq(m,a){
return clojure.core.matrix.protocols.element_eq.call(null,m,a);
});
/**
 * Returns true if all corresponding array elements are equal (using the semantics of clojure.core/=).
 * 
 * WARNING: a java.lang.Long does not equal a java.lang.Double.
 * Use 'equals' or 'e==' instead if you want to test for numerical equality.
 */
clojure.core.matrix.e_EQ_ = (function clojure$core$matrix$e_EQ_(var_args){
var args42813 = [];
var len__19784__auto___42819 = arguments.length;
var i__19785__auto___42820 = (0);
while(true){
if((i__19785__auto___42820 < len__19784__auto___42819)){
args42813.push((arguments[i__19785__auto___42820]));

var G__42821 = (i__19785__auto___42820 + (1));
i__19785__auto___42820 = G__42821;
continue;
} else {
}
break;
}

var G__42818 = args42813.length;
switch (G__42818) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42813.slice((2)),(0)));
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
var and__18714__auto__ = clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.apply.call(null,clojure.core.matrix.e_EQ_,m2,more);
} else {
return and__18714__auto__;
}
});

clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq42814){
var G__42815 = cljs.core.first.call(null,seq42814);
var seq42814__$1 = cljs.core.next.call(null,seq42814);
var G__42816 = cljs.core.first.call(null,seq42814__$1);
var seq42814__$2 = cljs.core.next.call(null,seq42814__$1);
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42815,G__42816,seq42814__$2);
});

clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var args42823 = [];
var len__19784__auto___42829 = arguments.length;
var i__19785__auto___42830 = (0);
while(true){
if((i__19785__auto___42830 < len__19784__auto___42829)){
args42823.push((arguments[i__19785__auto___42830]));

var G__42831 = (i__19785__auto___42830 + (1));
i__19785__auto___42830 = G__42831;
continue;
} else {
}
break;
}

var G__42828 = args42823.length;
switch (G__42828) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42823.slice((2)),(0)));
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.equals.call(null,m1,m2);
});

clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
return cljs.core.reduce.call(null,clojure.core.matrix.equals,clojure.core.matrix.equals.call(null,m1,m2),more);
});

clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq42824){
var G__42825 = cljs.core.first.call(null,seq42824);
var seq42824__$1 = cljs.core.next.call(null,seq42824);
var G__42826 = cljs.core.first.call(null,seq42824__$1);
var seq42824__$2 = cljs.core.next.call(null,seq42824__$1);
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__42825,G__42826,seq42824__$2);
});

clojure.core.matrix.e_EQ__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Returns a label for the specified position along a given array dimension. Returns nil if the dimension is unlabelled.
 */
clojure.core.matrix.label = (function clojure$core$matrix$label(m,dim,i){
return clojure.core.matrix.protocols.label.call(null,m,dim,i);
});
/**
 * Return a vector of labels for a given array dimension. Return nil if the dimension is unlabelled.
 */
clojure.core.matrix.labels = (function clojure$core$matrix$labels(m,dim){
return clojure.core.matrix.protocols.labels.call(null,m,dim);
});
/**
 * Return the index of a label along a given dimension. Returns nil if the label does not exist.
 */
clojure.core.matrix.label_index = (function clojure$core$matrix$label_index(m,dim,label){
var ls = clojure.core.matrix.protocols.labels.call(null,m,dim);
var and__18714__auto__ = ls;
if(cljs.core.truth_(and__18714__auto__)){
return clojure.core.matrix.utils.find_index.call(null,ls,label);
} else {
return and__18714__auto__;
}
});
/**
 * Performs element-wise multiplication with scalars and numerical arrays.
 * 
 * Behaves like clojure.core/* for scalar values.
 */
clojure.core.matrix.mul = (function clojure$core$matrix$mul(var_args){
var args42833 = [];
var len__19784__auto___42839 = arguments.length;
var i__19785__auto___42840 = (0);
while(true){
if((i__19785__auto___42840 < len__19784__auto___42839)){
args42833.push((arguments[i__19785__auto___42840]));

var G__42841 = (i__19785__auto___42840 + (1));
i__19785__auto___42840 = G__42841;
continue;
} else {
}
break;
}

var G__42838 = args42833.length;
switch (G__42838) {
case 0:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42833.slice((2)),(0)));
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(typeof b === 'number'){
if(typeof a === 'number'){
return (a * b);
} else {
return clojure.core.matrix.protocols.scale.call(null,a,b);
}
} else {
if(typeof a === 'number'){
return clojure.core.matrix.protocols.pre_scale.call(null,b,a);
} else {
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);

}
}
});

clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.mul,clojure.core.matrix.mul.call(null,a,b),more);
});

clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq42834){
var G__42835 = cljs.core.first.call(null,seq42834);
var seq42834__$1 = cljs.core.next.call(null,seq42834);
var G__42836 = cljs.core.first.call(null,seq42834__$1);
var seq42834__$2 = cljs.core.next.call(null,seq42834__$1);
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic(G__42835,G__42836,seq42834__$2);
});

clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2);
/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var args42843 = [];
var len__19784__auto___42849 = arguments.length;
var i__19785__auto___42850 = (0);
while(true){
if((i__19785__auto___42850 < len__19784__auto___42849)){
args42843.push((arguments[i__19785__auto___42850]));

var G__42851 = (i__19785__auto___42850 + (1));
i__19785__auto___42850 = G__42851;
continue;
} else {
}
break;
}

var G__42848 = args42843.length;
switch (G__42848) {
case 0:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42843.slice((2)),(0)));
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);
});

clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,clojure.core.matrix.protocols.element_multiply.call(null,a,b),more);
});

clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq42844){
var G__42845 = cljs.core.first.call(null,seq42844);
var seq42844__$1 = cljs.core.next.call(null,seq42844);
var G__42846 = cljs.core.first.call(null,seq42844__$1);
var seq42844__$2 = cljs.core.next.call(null,seq42844__$1);
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic(G__42845,G__42846,seq42844__$2);
});

clojure.core.matrix.emul.cljs$lang$maxFixedArity = (2);
/**
 * Performs matrix multiplication on matrices or vectors. Equivalent to
 *   inner-product when applied to vectors.  Will treat a 1D vector roughly as a
 *   1xN matrix (row vector) when it's the first argument, or as an Nx1 matrix
 *   (column vector) when it's the second argument--except that the dimensionality
 *   of the result will be different from what it would be with matrix arguments.
 */
clojure.core.matrix.mmul = (function clojure$core$matrix$mmul(var_args){
var args42853 = [];
var len__19784__auto___42859 = arguments.length;
var i__19785__auto___42860 = (0);
while(true){
if((i__19785__auto___42860 < len__19784__auto___42859)){
args42853.push((arguments[i__19785__auto___42860]));

var G__42861 = (i__19785__auto___42860 + (1));
i__19785__auto___42860 = G__42861;
continue;
} else {
}
break;
}

var G__42858 = args42853.length;
switch (G__42858) {
case 0:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42853.slice((2)),(0)));
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_multiply.call(null,a,b);
});

clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_multiply,clojure.core.matrix.protocols.matrix_multiply.call(null,a,b),more);
});

clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq42854){
var G__42855 = cljs.core.first.call(null,seq42854);
var seq42854__$1 = cljs.core.next.call(null,seq42854);
var G__42856 = cljs.core.first.call(null,seq42854__$1);
var seq42854__$2 = cljs.core.next.call(null,seq42854__$1);
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic(G__42855,G__42856,seq42854__$2);
});

clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2);
/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var args42863 = [];
var len__19784__auto___42869 = arguments.length;
var i__19785__auto___42870 = (0);
while(true){
if((i__19785__auto___42870 < len__19784__auto___42869)){
args42863.push((arguments[i__19785__auto___42870]));

var G__42871 = (i__19785__auto___42870 + (1));
i__19785__auto___42870 = G__42871;
continue;
} else {
}
break;
}

var G__42868 = args42863.length;
switch (G__42868) {
case 0:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42863.slice((2)),(0)));
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_multiply.call(null,a,b);
});

clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.e_STAR_,clojure.core.matrix.e_STAR_.call(null,a,b),more);
});

clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq42864){
var G__42865 = cljs.core.first.call(null,seq42864);
var seq42864__$1 = cljs.core.next.call(null,seq42864);
var G__42866 = cljs.core.first.call(null,seq42864__$1);
var seq42864__$2 = cljs.core.next.call(null,seq42864__$1);
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__42865,G__42866,seq42864__$2);
});

clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2);
/**
 * Performs element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var args42873 = [];
var len__19784__auto___42879 = arguments.length;
var i__19785__auto___42880 = (0);
while(true){
if((i__19785__auto___42880 < len__19784__auto___42879)){
args42873.push((arguments[i__19785__auto___42880]));

var G__42881 = (i__19785__auto___42880 + (1));
i__19785__auto___42880 = G__42881;
continue;
} else {
}
break;
}

var G__42878 = args42873.length;
switch (G__42878) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42873.slice((2)),(0)));
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.element_divide.call(null,a);
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.element_divide.call(null,a,b);
});

clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_divide,clojure.core.matrix.protocols.element_divide.call(null,a,b),more);
});

clojure.core.matrix.div.cljs$lang$applyTo = (function (seq42874){
var G__42875 = cljs.core.first.call(null,seq42874);
var seq42874__$1 = cljs.core.next.call(null,seq42874);
var G__42876 = cljs.core.first.call(null,seq42874__$1);
var seq42874__$2 = cljs.core.next.call(null,seq42874__$1);
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic(G__42875,G__42876,seq42874__$2);
});

clojure.core.matrix.div.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var args42883 = [];
var len__19784__auto___42893 = arguments.length;
var i__19785__auto___42894 = (0);
while(true){
if((i__19785__auto___42894 < len__19784__auto___42893)){
args42883.push((arguments[i__19785__auto___42894]));

var G__42895 = (i__19785__auto___42894 + (1));
i__19785__auto___42894 = G__42895;
continue;
} else {
}
break;
}

var G__42888 = args42883.length;
switch (G__42888) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42883.slice((2)),(0)));
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a);

return a;
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,b);

var seq__42889_42897 = cljs.core.seq.call(null,more);
var chunk__42890_42898 = null;
var count__42891_42899 = (0);
var i__42892_42900 = (0);
while(true){
if((i__42892_42900 < count__42891_42899)){
var c_42901 = cljs.core._nth.call(null,chunk__42890_42898,i__42892_42900);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_42901);

var G__42902 = seq__42889_42897;
var G__42903 = chunk__42890_42898;
var G__42904 = count__42891_42899;
var G__42905 = (i__42892_42900 + (1));
seq__42889_42897 = G__42902;
chunk__42890_42898 = G__42903;
count__42891_42899 = G__42904;
i__42892_42900 = G__42905;
continue;
} else {
var temp__4657__auto___42906 = cljs.core.seq.call(null,seq__42889_42897);
if(temp__4657__auto___42906){
var seq__42889_42907__$1 = temp__4657__auto___42906;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42889_42907__$1)){
var c__19529__auto___42908 = cljs.core.chunk_first.call(null,seq__42889_42907__$1);
var G__42909 = cljs.core.chunk_rest.call(null,seq__42889_42907__$1);
var G__42910 = c__19529__auto___42908;
var G__42911 = cljs.core.count.call(null,c__19529__auto___42908);
var G__42912 = (0);
seq__42889_42897 = G__42909;
chunk__42890_42898 = G__42910;
count__42891_42899 = G__42911;
i__42892_42900 = G__42912;
continue;
} else {
var c_42913 = cljs.core.first.call(null,seq__42889_42907__$1);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_42913);

var G__42914 = cljs.core.next.call(null,seq__42889_42907__$1);
var G__42915 = null;
var G__42916 = (0);
var G__42917 = (0);
seq__42889_42897 = G__42914;
chunk__42890_42898 = G__42915;
count__42891_42899 = G__42916;
i__42892_42900 = G__42917;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq42884){
var G__42885 = cljs.core.first.call(null,seq42884);
var seq42884__$1 = cljs.core.next.call(null,seq42884);
var G__42886 = cljs.core.first.call(null,seq42884__$1);
var seq42884__$2 = cljs.core.next.call(null,seq42884__$1);
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42885,G__42886,seq42884__$2);
});

clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var args42918 = [];
var len__19784__auto___42928 = arguments.length;
var i__19785__auto___42929 = (0);
while(true){
if((i__19785__auto___42929 < len__19784__auto___42928)){
args42918.push((arguments[i__19785__auto___42929]));

var G__42930 = (i__19785__auto___42929 + (1));
i__19785__auto___42929 = G__42930;
continue;
} else {
}
break;
}

var G__42923 = args42918.length;
switch (G__42923) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42918.slice((2)),(0)));
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

var seq__42924_42932 = cljs.core.seq.call(null,more);
var chunk__42925_42933 = null;
var count__42926_42934 = (0);
var i__42927_42935 = (0);
while(true){
if((i__42927_42935 < count__42926_42934)){
var c_42936 = cljs.core._nth.call(null,chunk__42925_42933,i__42927_42935);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_42936);

var G__42937 = seq__42924_42932;
var G__42938 = chunk__42925_42933;
var G__42939 = count__42926_42934;
var G__42940 = (i__42927_42935 + (1));
seq__42924_42932 = G__42937;
chunk__42925_42933 = G__42938;
count__42926_42934 = G__42939;
i__42927_42935 = G__42940;
continue;
} else {
var temp__4657__auto___42941 = cljs.core.seq.call(null,seq__42924_42932);
if(temp__4657__auto___42941){
var seq__42924_42942__$1 = temp__4657__auto___42941;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42924_42942__$1)){
var c__19529__auto___42943 = cljs.core.chunk_first.call(null,seq__42924_42942__$1);
var G__42944 = cljs.core.chunk_rest.call(null,seq__42924_42942__$1);
var G__42945 = c__19529__auto___42943;
var G__42946 = cljs.core.count.call(null,c__19529__auto___42943);
var G__42947 = (0);
seq__42924_42932 = G__42944;
chunk__42925_42933 = G__42945;
count__42926_42934 = G__42946;
i__42927_42935 = G__42947;
continue;
} else {
var c_42948 = cljs.core.first.call(null,seq__42924_42942__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_42948);

var G__42949 = cljs.core.next.call(null,seq__42924_42942__$1);
var G__42950 = null;
var G__42951 = (0);
var G__42952 = (0);
seq__42924_42932 = G__42949;
chunk__42925_42933 = G__42950;
count__42926_42934 = G__42951;
i__42927_42935 = G__42952;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq42919){
var G__42920 = cljs.core.first.call(null,seq42919);
var seq42919__$1 = cljs.core.next.call(null,seq42919);
var G__42921 = cljs.core.first.call(null,seq42919__$1);
var seq42919__$2 = cljs.core.next.call(null,seq42919__$1);
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42920,G__42921,seq42919__$2);
});

clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var args42953 = [];
var len__19784__auto___42963 = arguments.length;
var i__19785__auto___42964 = (0);
while(true){
if((i__19785__auto___42964 < len__19784__auto___42963)){
args42953.push((arguments[i__19785__auto___42964]));

var G__42965 = (i__19785__auto___42964 + (1));
i__19785__auto___42964 = G__42965;
continue;
} else {
}
break;
}

var G__42958 = args42953.length;
switch (G__42958) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42953.slice((2)),(0)));
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,b);

var seq__42959_42967 = cljs.core.seq.call(null,more);
var chunk__42960_42968 = null;
var count__42961_42969 = (0);
var i__42962_42970 = (0);
while(true){
if((i__42962_42970 < count__42961_42969)){
var c_42971 = cljs.core._nth.call(null,chunk__42960_42968,i__42962_42970);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_42971);

var G__42972 = seq__42959_42967;
var G__42973 = chunk__42960_42968;
var G__42974 = count__42961_42969;
var G__42975 = (i__42962_42970 + (1));
seq__42959_42967 = G__42972;
chunk__42960_42968 = G__42973;
count__42961_42969 = G__42974;
i__42962_42970 = G__42975;
continue;
} else {
var temp__4657__auto___42976 = cljs.core.seq.call(null,seq__42959_42967);
if(temp__4657__auto___42976){
var seq__42959_42977__$1 = temp__4657__auto___42976;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42959_42977__$1)){
var c__19529__auto___42978 = cljs.core.chunk_first.call(null,seq__42959_42977__$1);
var G__42979 = cljs.core.chunk_rest.call(null,seq__42959_42977__$1);
var G__42980 = c__19529__auto___42978;
var G__42981 = cljs.core.count.call(null,c__19529__auto___42978);
var G__42982 = (0);
seq__42959_42967 = G__42979;
chunk__42960_42968 = G__42980;
count__42961_42969 = G__42981;
i__42962_42970 = G__42982;
continue;
} else {
var c_42983 = cljs.core.first.call(null,seq__42959_42977__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_42983);

var G__42984 = cljs.core.next.call(null,seq__42959_42977__$1);
var G__42985 = null;
var G__42986 = (0);
var G__42987 = (0);
seq__42959_42967 = G__42984;
chunk__42960_42968 = G__42985;
count__42961_42969 = G__42986;
i__42962_42970 = G__42987;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq42954){
var G__42955 = cljs.core.first.call(null,seq42954);
var seq42954__$1 = cljs.core.next.call(null,seq42954);
var G__42956 = cljs.core.first.call(null,seq42954__$1);
var seq42954__$2 = cljs.core.next.call(null,seq42954__$1);
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42955,G__42956,seq42954__$2);
});

clojure.core.matrix.emul_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Transforms a given vector with a transformation, returning a new vector.
 * 
 * The transformation may be a 2D matrix, but other types of transformation may also be supported
 * e.g. affine transformations, unary operators.
 */
clojure.core.matrix.transform = (function clojure$core$matrix$transform(t,v){
return clojure.core.matrix.protocols.vector_transform.call(null,t,v);
});
/**
 * Transforms a given vector in place. This is a mutable equivalent to `transform`.
 * 
 * Returns the transformed vector.
 * 
 * The transformation must map an n-dimensional vector to another n-dimensional vector, i.e.
 * if it is a 2D matrix then it must have shape [n x n].
 */
clojure.core.matrix.transform_BANG_ = (function clojure$core$matrix$transform_BANG_(t,v){
clojure.core.matrix.protocols.vector_transform_BANG_.call(null,t,v);

return v;
});
/**
 * Performs element-wise addition on one or more numerical arrays.
 */
clojure.core.matrix.add = (function clojure$core$matrix$add(var_args){
var args42988 = [];
var len__19784__auto___42994 = arguments.length;
var i__19785__auto___42995 = (0);
while(true){
if((i__19785__auto___42995 < len__19784__auto___42994)){
args42988.push((arguments[i__19785__auto___42995]));

var G__42996 = (i__19785__auto___42995 + (1));
i__19785__auto___42995 = G__42996;
continue;
} else {
}
break;
}

var G__42993 = args42988.length;
switch (G__42993) {
case 0:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42988.slice((2)),(0)));
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$0 = (function (){
return 0.0;
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_add.call(null,a,b);
});

clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_add,clojure.core.matrix.protocols.matrix_add.call(null,a,b),more);
});

clojure.core.matrix.add.cljs$lang$applyTo = (function (seq42989){
var G__42990 = cljs.core.first.call(null,seq42989);
var seq42989__$1 = cljs.core.next.call(null,seq42989);
var G__42991 = cljs.core.first.call(null,seq42989__$1);
var seq42989__$2 = cljs.core.next.call(null,seq42989__$1);
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic(G__42990,G__42991,seq42989__$2);
});

clojure.core.matrix.add.cljs$lang$maxFixedArity = (2);
/**
 * Performs element-wise mutable addition on one or more numerical arrays. This is the mutable
 * equivalent of `add`.
 * 
 * When adding many arrays, use of `add!` with a mutable array as the first argument is
 * usually faster than repreated use of `add` because it can avoid unnecessary copying.
 * 
 * Returns the first array after it has been mutated.
 */
clojure.core.matrix.add_BANG_ = (function clojure$core$matrix$add_BANG_(var_args){
var args42998 = [];
var len__19784__auto___43008 = arguments.length;
var i__19785__auto___43009 = (0);
while(true){
if((i__19785__auto___43009 < len__19784__auto___43008)){
args42998.push((arguments[i__19785__auto___43009]));

var G__43010 = (i__19785__auto___43009 + (1));
i__19785__auto___43009 = G__43010;
continue;
} else {
}
break;
}

var G__43003 = args42998.length;
switch (G__43003) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42998.slice((2)),(0)));
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,b);

var seq__43004_43012 = cljs.core.seq.call(null,more);
var chunk__43005_43013 = null;
var count__43006_43014 = (0);
var i__43007_43015 = (0);
while(true){
if((i__43007_43015 < count__43006_43014)){
var m_43016 = cljs.core._nth.call(null,chunk__43005_43013,i__43007_43015);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_43016);

var G__43017 = seq__43004_43012;
var G__43018 = chunk__43005_43013;
var G__43019 = count__43006_43014;
var G__43020 = (i__43007_43015 + (1));
seq__43004_43012 = G__43017;
chunk__43005_43013 = G__43018;
count__43006_43014 = G__43019;
i__43007_43015 = G__43020;
continue;
} else {
var temp__4657__auto___43021 = cljs.core.seq.call(null,seq__43004_43012);
if(temp__4657__auto___43021){
var seq__43004_43022__$1 = temp__4657__auto___43021;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43004_43022__$1)){
var c__19529__auto___43023 = cljs.core.chunk_first.call(null,seq__43004_43022__$1);
var G__43024 = cljs.core.chunk_rest.call(null,seq__43004_43022__$1);
var G__43025 = c__19529__auto___43023;
var G__43026 = cljs.core.count.call(null,c__19529__auto___43023);
var G__43027 = (0);
seq__43004_43012 = G__43024;
chunk__43005_43013 = G__43025;
count__43006_43014 = G__43026;
i__43007_43015 = G__43027;
continue;
} else {
var m_43028 = cljs.core.first.call(null,seq__43004_43022__$1);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_43028);

var G__43029 = cljs.core.next.call(null,seq__43004_43022__$1);
var G__43030 = null;
var G__43031 = (0);
var G__43032 = (0);
seq__43004_43012 = G__43029;
chunk__43005_43013 = G__43030;
count__43006_43014 = G__43031;
i__43007_43015 = G__43032;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq42999){
var G__43000 = cljs.core.first.call(null,seq42999);
var seq42999__$1 = cljs.core.next.call(null,seq42999);
var G__43001 = cljs.core.first.call(null,seq42999__$1);
var seq42999__$2 = cljs.core.next.call(null,seq42999__$1);
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43000,G__43001,seq42999__$2);
});

clojure.core.matrix.add_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Adds the element-wise product of two numerical arrays to the first array.
 * Arrays should be the same shape.
 */
clojure.core.matrix.add_product = (function clojure$core$matrix$add_product(m,a,b){
return clojure.core.matrix.protocols.add_product.call(null,m,a,b);
});
/**
 * Adds the product of two numerical arrays to the first array. Returns the mutated array.
 */
clojure.core.matrix.add_product_BANG_ = (function clojure$core$matrix$add_product_BANG_(m,a,b){
clojure.core.matrix.protocols.add_product_BANG_.call(null,m,a,b);

return m;
});
/**
 * Adds a numerical array scaled by a given factor to the first array
 */
clojure.core.matrix.add_scaled = (function clojure$core$matrix$add_scaled(m,a,factor){
return clojure.core.matrix.protocols.add_scaled.call(null,m,a,factor);
});
/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add (mul m1 a) (mul m2 b) constant)
 * 
 * Returns a new array.
 */
clojure.core.matrix.scale_add = (function clojure$core$matrix$scale_add(var_args){
var args43033 = [];
var len__19784__auto___43036 = arguments.length;
var i__19785__auto___43037 = (0);
while(true){
if((i__19785__auto___43037 < len__19784__auto___43036)){
args43033.push((arguments[i__19785__auto___43037]));

var G__43038 = (i__19785__auto___43037 + (1));
i__19785__auto___43037 = G__43038;
continue;
} else {
}
break;
}

var G__43035 = args43033.length;
switch (G__43035) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43033.length)].join('')));

}
});

clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.protocols.scale_add.call(null,m1,a,m2,b,0.0);
});

clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
return clojure.core.matrix.protocols.scale_add.call(null,m1,a,m2,b,constant);
});

clojure.core.matrix.scale_add.cljs$lang$maxFixedArity = 5;
/**
 * Scales array m1 by factor a, then adds an array m2 scaled by factor b. May optionally add a constant.
 * Broadly equivalent to (add! (mul! m1 a) (mul m2 b) constant)
 * 
 * Returns the mutated array `m1`. The array `m2` will not be changed.
 */
clojure.core.matrix.scale_add_BANG_ = (function clojure$core$matrix$scale_add_BANG_(var_args){
var args43040 = [];
var len__19784__auto___43043 = arguments.length;
var i__19785__auto___43044 = (0);
while(true){
if((i__19785__auto___43044 < len__19784__auto___43043)){
args43040.push((arguments[i__19785__auto___43044]));

var G__43045 = (i__19785__auto___43044 + (1));
i__19785__auto___43044 = G__43045;
continue;
} else {
}
break;
}

var G__43042 = args43040.length;
switch (G__43042) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43040.length)].join('')));

}
});

clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m1,a,m2,b){
return clojure.core.matrix.scale_add_BANG_.call(null,m1,a,m2,b,0.0);
});

clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (m1,a,m2,b,constant){
clojure.core.matrix.protocols.scale_add_BANG_.call(null,m1,a,m2,b,constant);

return m1;
});

clojure.core.matrix.scale_add_BANG_.cljs$lang$maxFixedArity = 5;
/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a new array.
 */
clojure.core.matrix.lerp = (function clojure$core$matrix$lerp(a,b,factor){
return clojure.core.matrix.protocols.lerp.call(null,a,b,factor);
});
/**
 * Performs linear interpolation between two arrays. If factor is 0.0, result will be equal to the first vector.
 * If factor is 1.0, result will be equal to the second vector. Returns a the mutated first array.
 */
clojure.core.matrix.lerp_BANG_ = (function clojure$core$matrix$lerp_BANG_(a,b,factor){
return clojure.core.matrix.protocols.lerp_BANG_.call(null,a,b,factor);
});
/**
 * Adds a numerical array scaled by a given factor to the first array. Returns the mutated array.
 */
clojure.core.matrix.add_scaled_BANG_ = (function clojure$core$matrix$add_scaled_BANG_(m,a,factor){
clojure.core.matrix.protocols.add_scaled_BANG_.call(null,m,a,factor);

return m;
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * 
 * This is equivalent to (add m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product = (function clojure$core$matrix$add_scaled_product(m,a,b,factor){
return clojure.core.matrix.protocols.add_scaled_product.call(null,m,a,b,factor);
});
/**
 * Adds the product of two numerical arrays scaled by a given factor to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (mul a b factor)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_scaled_product_BANG_ = (function clojure$core$matrix$add_scaled_product_BANG_(m,a,b,factor){
clojure.core.matrix.protocols.add_scaled_product_BANG_.call(null,m,a,b,factor);

return m;
});
/**
 * Adds the inner product of two numerical arrays to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_inner_product_BANG_ = (function clojure$core$matrix$add_inner_product_BANG_(var_args){
var args43047 = [];
var len__19784__auto___43050 = arguments.length;
var i__19785__auto___43051 = (0);
while(true){
if((i__19785__auto___43051 < len__19784__auto___43050)){
args43047.push((arguments[i__19785__auto___43051]));

var G__43052 = (i__19785__auto___43051 + (1));
i__19785__auto___43051 = G__43052;
continue;
} else {
}
break;
}

var G__43049 = args43047.length;
switch (G__43049) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43047.length)].join('')));

}
});

clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_inner_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.add_inner_product_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Adds the inner product of two numerical arrays to the first array.
 * Returns the mutated array.
 * This is equivalent to (add! m (outer-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.add_outer_product_BANG_ = (function clojure$core$matrix$add_outer_product_BANG_(var_args){
var args43054 = [];
var len__19784__auto___43057 = arguments.length;
var i__19785__auto___43058 = (0);
while(true){
if((i__19785__auto___43058 < len__19784__auto___43057)){
args43054.push((arguments[i__19785__auto___43058]));

var G__43059 = (i__19785__auto___43058 + (1));
i__19785__auto___43058 = G__43059;
continue;
} else {
}
break;
}

var G__43056 = args43054.length;
switch (G__43056) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43054.length)].join('')));

}
});

clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.add_outer_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.add_outer_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.add_outer_product_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Sets an array equal to the inner product of two numerical arrays.
 * Returns the mutated first array.
 * This is equivalent to (assign! m (inner-product a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.set_inner_product_BANG_ = (function clojure$core$matrix$set_inner_product_BANG_(var_args){
var args43061 = [];
var len__19784__auto___43064 = arguments.length;
var i__19785__auto___43065 = (0);
while(true){
if((i__19785__auto___43065 < len__19784__auto___43064)){
args43061.push((arguments[i__19785__auto___43065]));

var G__43066 = (i__19785__auto___43065 + (1));
i__19785__auto___43065 = G__43066;
continue;
} else {
}
break;
}

var G__43063 = args43061.length;
switch (G__43063) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43061.length)].join('')));

}
});

clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (m,a,b){
clojure.core.matrix.protocols.set_inner_product_BANG_.call(null,m,a,b);

return m;
});

clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (m,a,b,factor){
clojure.core.matrix.protocols.set_inner_product_BANG_.call(null,m,a,b,factor);

return m;
});

clojure.core.matrix.set_inner_product_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Performs element-wise subtraction on one or more numerical arrays.
 * 
 * For a single argument, returns the negation.
 * 
 * Returns a new array.
 */
clojure.core.matrix.sub = (function clojure$core$matrix$sub(var_args){
var args43068 = [];
var len__19784__auto___43074 = arguments.length;
var i__19785__auto___43075 = (0);
while(true){
if((i__19785__auto___43075 < len__19784__auto___43074)){
args43068.push((arguments[i__19785__auto___43075]));

var G__43076 = (i__19785__auto___43075 + (1));
i__19785__auto___43075 = G__43076;
continue;
} else {
}
break;
}

var G__43073 = args43068.length;
switch (G__43073) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43068.slice((2)),(0)));
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.protocols.negate.call(null,a);
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.matrix_sub.call(null,a,b);
});

clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.matrix_sub,clojure.core.matrix.protocols.matrix_sub.call(null,a,b),more);
});

clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq43069){
var G__43070 = cljs.core.first.call(null,seq43069);
var seq43069__$1 = cljs.core.next.call(null,seq43069);
var G__43071 = cljs.core.first.call(null,seq43069__$1);
var seq43069__$2 = cljs.core.next.call(null,seq43069__$1);
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic(G__43070,G__43071,seq43069__$2);
});

clojure.core.matrix.sub.cljs$lang$maxFixedArity = (2);
/**
 * Performs element-wise mutable subtraction on one or more numerical arrays.
 * 
 * NOTE: For a single argument, returns the argument unchanged: use negate! instead if you wish to negate a mutable
 * array in place. This is intentional, so that you can do (apply sub! m list-of-arrays) and get the expected
 * result if the list of arrays is empty.
 * 
 * Returns the first array, after it has been mutated.
 */
clojure.core.matrix.sub_BANG_ = (function clojure$core$matrix$sub_BANG_(var_args){
var args43078 = [];
var len__19784__auto___43088 = arguments.length;
var i__19785__auto___43089 = (0);
while(true){
if((i__19785__auto___43089 < len__19784__auto___43088)){
args43078.push((arguments[i__19785__auto___43089]));

var G__43090 = (i__19785__auto___43089 + (1));
i__19785__auto___43089 = G__43090;
continue;
} else {
}
break;
}

var G__43083 = args43078.length;
switch (G__43083) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43078.slice((2)),(0)));
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,b);

var seq__43084_43092 = cljs.core.seq.call(null,more);
var chunk__43085_43093 = null;
var count__43086_43094 = (0);
var i__43087_43095 = (0);
while(true){
if((i__43087_43095 < count__43086_43094)){
var m_43096 = cljs.core._nth.call(null,chunk__43085_43093,i__43087_43095);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_43096);

var G__43097 = seq__43084_43092;
var G__43098 = chunk__43085_43093;
var G__43099 = count__43086_43094;
var G__43100 = (i__43087_43095 + (1));
seq__43084_43092 = G__43097;
chunk__43085_43093 = G__43098;
count__43086_43094 = G__43099;
i__43087_43095 = G__43100;
continue;
} else {
var temp__4657__auto___43101 = cljs.core.seq.call(null,seq__43084_43092);
if(temp__4657__auto___43101){
var seq__43084_43102__$1 = temp__4657__auto___43101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43084_43102__$1)){
var c__19529__auto___43103 = cljs.core.chunk_first.call(null,seq__43084_43102__$1);
var G__43104 = cljs.core.chunk_rest.call(null,seq__43084_43102__$1);
var G__43105 = c__19529__auto___43103;
var G__43106 = cljs.core.count.call(null,c__19529__auto___43103);
var G__43107 = (0);
seq__43084_43092 = G__43104;
chunk__43085_43093 = G__43105;
count__43086_43094 = G__43106;
i__43087_43095 = G__43107;
continue;
} else {
var m_43108 = cljs.core.first.call(null,seq__43084_43102__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_43108);

var G__43109 = cljs.core.next.call(null,seq__43084_43102__$1);
var G__43110 = null;
var G__43111 = (0);
var G__43112 = (0);
seq__43084_43092 = G__43109;
chunk__43085_43093 = G__43110;
count__43086_43094 = G__43111;
i__43087_43095 = G__43112;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq43079){
var G__43080 = cljs.core.first.call(null,seq43079);
var seq43079__$1 = cljs.core.next.call(null,seq43079);
var G__43081 = cljs.core.first.call(null,seq43079__$1);
var seq43079__$2 = cljs.core.next.call(null,seq43079__$1);
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43080,G__43081,seq43079__$2);
});

clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var args43113 = [];
var len__19784__auto___43119 = arguments.length;
var i__19785__auto___43120 = (0);
while(true){
if((i__19785__auto___43120 < len__19784__auto___43119)){
args43113.push((arguments[i__19785__auto___43120]));

var G__43121 = (i__19785__auto___43120 + (1));
i__19785__auto___43120 = G__43121;
continue;
} else {
}
break;
}

var G__43118 = args43113.length;
switch (G__43118) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43113.slice((2)),(0)));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale.call(null,m,factor);
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));
});

clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq43114){
var G__43115 = cljs.core.first.call(null,seq43114);
var seq43114__$1 = cljs.core.next.call(null,seq43114);
var G__43116 = cljs.core.first.call(null,seq43114__$1);
var seq43114__$2 = cljs.core.next.call(null,seq43114__$1);
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic(G__43115,G__43116,seq43114__$2);
});

clojure.core.matrix.scale.cljs$lang$maxFixedArity = (2);
/**
 * Scales a numerical array by one or more scalar factors (in place). The default implementation supports
 * numerical arrays and numbers as scalar values, however matrix implementations may extend this to
 * support other scalar types.
 * 
 * Returns the matrix after it has been mutated.
 */
clojure.core.matrix.scale_BANG_ = (function clojure$core$matrix$scale_BANG_(var_args){
var args43123 = [];
var len__19784__auto___43129 = arguments.length;
var i__19785__auto___43130 = (0);
while(true){
if((i__19785__auto___43130 < len__19784__auto___43129)){
args43123.push((arguments[i__19785__auto___43130]));

var G__43131 = (i__19785__auto___43130 + (1));
i__19785__auto___43130 = G__43131;
continue;
} else {
}
break;
}

var G__43128 = args43123.length;
switch (G__43128) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43123.slice((2)),(0)));
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,factor);

return m;
});

clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));

return m;
});

clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq43124){
var G__43125 = cljs.core.first.call(null,seq43124);
var seq43124__$1 = cljs.core.next.call(null,seq43124);
var G__43126 = cljs.core.first.call(null,seq43124__$1);
var seq43124__$2 = cljs.core.next.call(null,seq43124__$1);
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43125,G__43126,seq43124__$2);
});

clojure.core.matrix.scale_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Squares every element of a numerical array. Returns a new array.
 */
clojure.core.matrix.square = (function clojure$core$matrix$square(m){
return clojure.core.matrix.protocols.square.call(null,m);
});
/**
 * Normalises a numerical vector (scales to unit length). Returns a new normalised vector.
 * 
 * The result is undefined if the initial length of the vector is zero (it is possible the
 * implementation may return NaNs or zeros). If this is a concern, it is recommended to check
 * the length of the vector first in order to handle this as a special case.
 */
clojure.core.matrix.normalise = (function clojure$core$matrix$normalise(v){
return clojure.core.matrix.protocols.normalise.call(null,v);
});
/**
 * Like 'normalise', but mutates a numerical vector in-place (scales to unit length).
 * Returns the modified vector.
 */
clojure.core.matrix.normalise_BANG_ = (function clojure$core$matrix$normalise_BANG_(v){
clojure.core.matrix.protocols.normalise_BANG_.call(null,v);

return v;
});
/**
 * Efficiently computes the scalar dot product (1Dx1D inner product) of two numerical vectors. Prefer this API
 * function if you are performing a dot product on 1D vectors and want a scalar result.
 * 
 * If either argument is not a vector, will compute a higher dimensional inner product.
 */
clojure.core.matrix.dot = (function clojure$core$matrix$dot(a,b){
var or__18726__auto__ = clojure.core.matrix.protocols.vector_dot.call(null,a,b);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
var v = clojure.core.matrix.protocols.inner_product.call(null,a,b);
if(typeof v === 'number'){
return v;
} else {
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,v)))){
return clojure.core.matrix.protocols.get_0d.call(null,v);
} else {
return v;

}
}
}
});
/**
 * Computes the inner product of numerical arrays.
 * 
 * For matrix/matrix and matrix/vector arguments, this is equivalent to matrix multiplication.
 * 
 * The inner product of two arrays with indexed dimensions {..i j} and {j k..} has dimensions {..i k..}. The inner-product of two vectors will be scalar.
 */
clojure.core.matrix.inner_product = (function clojure$core$matrix$inner_product(var_args){
var args43133 = [];
var len__19784__auto___43139 = arguments.length;
var i__19785__auto___43140 = (0);
while(true){
if((i__19785__auto___43140 < len__19784__auto___43139)){
args43133.push((arguments[i__19785__auto___43140]));

var G__43141 = (i__19785__auto___43140 + (1));
i__19785__auto___43140 = G__43141;
continue;
} else {
}
break;
}

var G__43138 = args43133.length;
switch (G__43138) {
case 0:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43133.slice((2)),(0)));
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.inner_product.call(null,a,b);
});

clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.inner_product,clojure.core.matrix.protocols.inner_product.call(null,a,b),more);
});

clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq43134){
var G__43135 = cljs.core.first.call(null,seq43134);
var seq43134__$1 = cljs.core.next.call(null,seq43134);
var G__43136 = cljs.core.first.call(null,seq43134__$1);
var seq43134__$2 = cljs.core.next.call(null,seq43134__$1);
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic(G__43135,G__43136,seq43134__$2);
});

clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2);
/**
 * Computes the outer product of numerical arrays.
 * 
 * The outer product of two arrays with indexed dimensions {i..j} and {j..k} has dimensions {i..j j..k}, i.e. the dimensioanlity will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var args43143 = [];
var len__19784__auto___43149 = arguments.length;
var i__19785__auto___43150 = (0);
while(true){
if((i__19785__auto___43150 < len__19784__auto___43149)){
args43143.push((arguments[i__19785__auto___43150]));

var G__43151 = (i__19785__auto___43150 + (1));
i__19785__auto___43150 = G__43151;
continue;
} else {
}
break;
}

var G__43148 = args43143.length;
switch (G__43148) {
case 0:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43143.slice((2)),(0)));
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$0 = (function (){
return 1.0;
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.protocols.outer_product.call(null,a,b);
});

clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.outer_product,clojure.core.matrix.outer_product.call(null,a,b),more);
});

clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq43144){
var G__43145 = cljs.core.first.call(null,seq43144);
var seq43144__$1 = cljs.core.next.call(null,seq43144);
var G__43146 = cljs.core.first.call(null,seq43144__$1);
var seq43144__$2 = cljs.core.next.call(null,seq43144__$1);
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic(G__43145,G__43146,seq43144__$2);
});

clojure.core.matrix.outer_product.cljs$lang$maxFixedArity = (2);
/**
 * Computes the 3D cross-product of two numerical vectors.
 * 
 * Behavior on other types is undefined.
 */
clojure.core.matrix.cross = (function clojure$core$matrix$cross(a,b){
return clojure.core.matrix.protocols.cross_product.call(null,a,b);
});
/**
 * Computes the cross-product of two numerical 3D vectors a and b, storing the result in the first vector.
 * 
 * Returns the (mutated) first vector.
 */
clojure.core.matrix.cross_BANG_ = (function clojure$core$matrix$cross_BANG_(var_args){
var args43153 = [];
var len__19784__auto___43156 = arguments.length;
var i__19785__auto___43157 = (0);
while(true){
if((i__19785__auto___43157 < len__19784__auto___43156)){
args43153.push((arguments[i__19785__auto___43157]));

var G__43158 = (i__19785__auto___43157 + (1));
i__19785__auto___43157 = G__43158;
continue;
} else {
}
break;
}

var G__43155 = args43153.length;
switch (G__43155) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43153.length)].join('')));

}
});

clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
clojure.core.matrix.protocols.cross_product_BANG_.call(null,a,b);

return a;
});

clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dest,a,b){
clojure.core.matrix.protocols.assign_BANG_.call(null,dest,a);

return clojure.core.matrix.protocols.cross_product_BANG_.call(null,dest,b);
});

clojure.core.matrix.cross_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Calculates the euclidean distance between two numerical vectors.
 * 
 * This is equivalent to (norm 2 (sub a b)) but may be optimised by the underlying implementation.
 */
clojure.core.matrix.distance = (function clojure$core$matrix$distance(a,b){
return clojure.core.matrix.protocols.distance.call(null,a,b);
});
/**
 * Calculates the determinant of a 2D square numerical matrix.
 * 
 * May throw an exception if the implementation does not support computation of determinants.
 */
clojure.core.matrix.det = (function clojure$core$matrix$det(a){
var or__18726__auto__ = clojure.core.matrix.protocols.determinant.call(null,a);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("TODO: "),cljs.core.str("Determinant not supported for array of type: "),cljs.core.str(clojure.core.matrix.class$.call(null,a))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});
/**
 * Calculates the inverse of a 2D numerical matrix.
 * 
 * Returns nil if the matrix is singular. May throw an exception if the implementation does not support inverses.
 */
clojure.core.matrix.inverse = (function clojure$core$matrix$inverse(m){
return clojure.core.matrix.protocols.inverse.call(null,m);
});
/**
 * Calculates the negation of a numerical array. Generally equivalent to (scale m -1.0)
 */
clojure.core.matrix.negate = (function clojure$core$matrix$negate(m){
return clojure.core.matrix.protocols.negate.call(null,m);
});
/**
 * Calculates the negation of a numerical array in place. Generally equivalent to (scale! m -1.0)
 */
clojure.core.matrix.negate_BANG_ = (function clojure$core$matrix$negate_BANG_(m){
clojure.core.matrix.protocols.scale_BANG_.call(null,m,-1.0);

return m;
});
/**
 * Calculates the trace of a 2D numerical matrix (sum of elements on main diagonal).
 * 
 * The matrix need not be square.
 */
clojure.core.matrix.trace = (function clojure$core$matrix$trace(a){
return clojure.core.matrix.protocols.trace.call(null,a);
});
/**
 * Calculates the euclidean length (magnitude) of a numerical vector
 */
clojure.core.matrix.magnitude = (function clojure$core$matrix$magnitude(m){
return clojure.core.matrix.protocols.length.call(null,m);
});
/**
 * Calculates the squared length (squared magnitude) of a numerical vector
 */
clojure.core.matrix.magnitude_squared = (function clojure$core$matrix$magnitude_squared(m){
return clojure.core.matrix.protocols.length_squared.call(null,m);
});
/**
 * DEPRECATED: please use magnitude instead.
 */
clojure.core.matrix.length = (function clojure$core$matrix$length(m){
return clojure.core.matrix.protocols.length.call(null,m);
});
/**
 * DEPRECATED: please use magnitude-squared instead.
 */
clojure.core.matrix.length_squared = (function clojure$core$matrix$length_squared(m){
return clojure.core.matrix.protocols.length_squared.call(null,m);
});
/**
 * Raises every element of a numerical matrix by the given exponent.
 * 
 * Note that behaviour for large exponents may depend on the underlying implementation:
 * for example double-based matrices may overflow to Double/POSITIVE_INFINITY.
 */
clojure.core.matrix.pow = (function clojure$core$matrix$pow(var_args){
var args43160 = [];
var len__19784__auto___43166 = arguments.length;
var i__19785__auto___43167 = (0);
while(true){
if((i__19785__auto___43167 < len__19784__auto___43166)){
args43160.push((arguments[i__19785__auto___43167]));

var G__43168 = (i__19785__auto___43167 + (1));
i__19785__auto___43167 = G__43168;
continue;
} else {
}
break;
}

var G__43165 = args43160.length;
switch (G__43165) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43160.slice((2)),(0)));
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1 = (function (m){
return m;
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2 = (function (m,exponent){
return clojure.core.matrix.protocols.element_pow.call(null,m,exponent);
});

clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic = (function (m,exponent,more){
return cljs.core.reduce.call(null,(function (m__$1,x){
return clojure.core.matrix.protocols.element_pow.call(null,m__$1,x);
}),clojure.core.matrix.protocols.element_pow.call(null,m,exponent),more);
});

clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq43161){
var G__43162 = cljs.core.first.call(null,seq43161);
var seq43161__$1 = cljs.core.next.call(null,seq43161);
var G__43163 = cljs.core.first.call(null,seq43161__$1);
var seq43161__$2 = cljs.core.next.call(null,seq43161__$1);
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic(G__43162,G__43163,seq43161__$2);
});

clojure.core.matrix.pow.cljs$lang$maxFixedArity = (2);
/**
 * Mutable exponent function, see 'pow'
 */
clojure.core.matrix.pow_BANG_ = (function clojure$core$matrix$pow_BANG_(m,a){
clojure.core.matrix.protocols.assign_BANG_.call(null,m,clojure.core.matrix.pow.call(null,m,a));

return m;
});
/**
 * Computes the abs function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.abs = (function clojure$core$matrix$abs(m){
return clojure.core.matrix.protocols.abs.call(null,m);
});

/**
 * Computes the abs function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.abs_BANG_ = (function clojure$core$matrix$abs_BANG_(m){
clojure.core.matrix.protocols.abs_BANG_.call(null,m);

return m;
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.acos = (function clojure$core$matrix$acos(m){
return clojure.core.matrix.protocols.acos.call(null,m);
});

/**
 * Computes the acos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.acos_BANG_ = (function clojure$core$matrix$acos_BANG_(m){
clojure.core.matrix.protocols.acos_BANG_.call(null,m);

return m;
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.asin = (function clojure$core$matrix$asin(m){
return clojure.core.matrix.protocols.asin.call(null,m);
});

/**
 * Computes the asin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.asin_BANG_ = (function clojure$core$matrix$asin_BANG_(m){
clojure.core.matrix.protocols.asin_BANG_.call(null,m);

return m;
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.atan = (function clojure$core$matrix$atan(m){
return clojure.core.matrix.protocols.atan.call(null,m);
});

/**
 * Computes the atan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.atan_BANG_ = (function clojure$core$matrix$atan_BANG_(m){
clojure.core.matrix.protocols.atan_BANG_.call(null,m);

return m;
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cbrt = (function clojure$core$matrix$cbrt(m){
return clojure.core.matrix.protocols.cbrt.call(null,m);
});

/**
 * Computes the cbrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cbrt_BANG_ = (function clojure$core$matrix$cbrt_BANG_(m){
clojure.core.matrix.protocols.cbrt_BANG_.call(null,m);

return m;
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.ceil = (function clojure$core$matrix$ceil(m){
return clojure.core.matrix.protocols.ceil.call(null,m);
});

/**
 * Computes the ceil function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.ceil_BANG_ = (function clojure$core$matrix$ceil_BANG_(m){
clojure.core.matrix.protocols.ceil_BANG_.call(null,m);

return m;
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cos = (function clojure$core$matrix$cos(m){
return clojure.core.matrix.protocols.cos.call(null,m);
});

/**
 * Computes the cos function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cos_BANG_ = (function clojure$core$matrix$cos_BANG_(m){
clojure.core.matrix.protocols.cos_BANG_.call(null,m);

return m;
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.cosh = (function clojure$core$matrix$cosh(m){
return clojure.core.matrix.protocols.cosh.call(null,m);
});

/**
 * Computes the cosh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.cosh_BANG_ = (function clojure$core$matrix$cosh_BANG_(m){
clojure.core.matrix.protocols.cosh_BANG_.call(null,m);

return m;
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.exp = (function clojure$core$matrix$exp(m){
return clojure.core.matrix.protocols.exp.call(null,m);
});

/**
 * Computes the exp function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.exp_BANG_ = (function clojure$core$matrix$exp_BANG_(m){
clojure.core.matrix.protocols.exp_BANG_.call(null,m);

return m;
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.floor = (function clojure$core$matrix$floor(m){
return clojure.core.matrix.protocols.floor.call(null,m);
});

/**
 * Computes the floor function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.floor_BANG_ = (function clojure$core$matrix$floor_BANG_(m){
clojure.core.matrix.protocols.floor_BANG_.call(null,m);

return m;
});

/**
 * Computes the log function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log = (function clojure$core$matrix$log(m){
return clojure.core.matrix.protocols.log.call(null,m);
});

/**
 * Computes the log function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log_BANG_ = (function clojure$core$matrix$log_BANG_(m){
clojure.core.matrix.protocols.log_BANG_.call(null,m);

return m;
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.log10 = (function clojure$core$matrix$log10(m){
return clojure.core.matrix.protocols.log10.call(null,m);
});

/**
 * Computes the log10 function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.log10_BANG_ = (function clojure$core$matrix$log10_BANG_(m){
clojure.core.matrix.protocols.log10_BANG_.call(null,m);

return m;
});

/**
 * Computes the round function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.round = (function clojure$core$matrix$round(m){
return clojure.core.matrix.protocols.round.call(null,m);
});

/**
 * Computes the round function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.round_BANG_ = (function clojure$core$matrix$round_BANG_(m){
clojure.core.matrix.protocols.round_BANG_.call(null,m);

return m;
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.signum = (function clojure$core$matrix$signum(m){
return clojure.core.matrix.protocols.signum.call(null,m);
});

/**
 * Computes the signum function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.signum_BANG_ = (function clojure$core$matrix$signum_BANG_(m){
clojure.core.matrix.protocols.signum_BANG_.call(null,m);

return m;
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sin = (function clojure$core$matrix$sin(m){
return clojure.core.matrix.protocols.sin.call(null,m);
});

/**
 * Computes the sin function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sin_BANG_ = (function clojure$core$matrix$sin_BANG_(m){
clojure.core.matrix.protocols.sin_BANG_.call(null,m);

return m;
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sinh = (function clojure$core$matrix$sinh(m){
return clojure.core.matrix.protocols.sinh.call(null,m);
});

/**
 * Computes the sinh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sinh_BANG_ = (function clojure$core$matrix$sinh_BANG_(m){
clojure.core.matrix.protocols.sinh_BANG_.call(null,m);

return m;
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.sqrt = (function clojure$core$matrix$sqrt(m){
return clojure.core.matrix.protocols.sqrt.call(null,m);
});

/**
 * Computes the sqrt function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.sqrt_BANG_ = (function clojure$core$matrix$sqrt_BANG_(m){
clojure.core.matrix.protocols.sqrt_BANG_.call(null,m);

return m;
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tan = (function clojure$core$matrix$tan(m){
return clojure.core.matrix.protocols.tan.call(null,m);
});

/**
 * Computes the tan function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tan_BANG_ = (function clojure$core$matrix$tan_BANG_(m){
clojure.core.matrix.protocols.tan_BANG_.call(null,m);

return m;
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.tanh = (function clojure$core$matrix$tanh(m){
return clojure.core.matrix.protocols.tanh.call(null,m);
});

/**
 * Computes the tanh function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.tanh_BANG_ = (function clojure$core$matrix$tanh_BANG_(m){
clojure.core.matrix.protocols.tanh_BANG_.call(null,m);

return m;
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_degrees = (function clojure$core$matrix$to_degrees(m){
return clojure.core.matrix.protocols.to_degrees.call(null,m);
});

/**
 * Computes the to-degrees function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_degrees_BANG_ = (function clojure$core$matrix$to_degrees_BANG_(m){
clojure.core.matrix.protocols.to_degrees_BANG_.call(null,m);

return m;
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Returns a new array.
 */
clojure.core.matrix.to_radians = (function clojure$core$matrix$to_radians(m){
return clojure.core.matrix.protocols.to_radians.call(null,m);
});

/**
 * Computes the to-radians function on all elements of an array, using double precision values. Mutates the array in-place.
 */
clojure.core.matrix.to_radians_BANG_ = (function clojure$core$matrix$to_radians_BANG_(m){
clojure.core.matrix.protocols.to_radians_BANG_.call(null,m);

return m;
});
/**
 * Computes the sigmoid (logistic) function for every element of an array.
 */
clojure.core.matrix.logistic = (function clojure$core$matrix$logistic(a){
return clojure.core.matrix.protocols.logistic.call(null,a);
});
/**
 * Computes the sigmoid (logistic) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.logistic_BANG_ = (function clojure$core$matrix$logistic_BANG_(a){
clojure.core.matrix.protocols.logistic_BANG_.call(null,a);

return a;
});
/**
 * Computes the softplus function for every element of an array.
 */
clojure.core.matrix.softplus = (function clojure$core$matrix$softplus(a){
return clojure.core.matrix.protocols.softplus.call(null,a);
});
/**
 * Computes the softplus function for every element of an array. Mutates the array.
 */
clojure.core.matrix.softplus_BANG_ = (function clojure$core$matrix$softplus_BANG_(a){
clojure.core.matrix.protocols.softplus_BANG_.call(null,a);

return a;
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array.
 */
clojure.core.matrix.relu = (function clojure$core$matrix$relu(a){
return clojure.core.matrix.protocols.relu.call(null,a);
});
/**
 * Computes the ReLU (rectified linear) function for every element of an array. Mutates the array.
 */
clojure.core.matrix.relu_BANG_ = (function clojure$core$matrix$relu_BANG_(a){
clojure.core.matrix.protocols.relu_BANG_.call(null,a);

return a;
});
/**
 * Computes the softmax function for a numerical vector.
 */
clojure.core.matrix.softmax = (function clojure$core$matrix$softmax(a){
return clojure.core.matrix.protocols.softmax.call(null,a);
});
/**
 * Computes the softmax function for every element of a numerical vector. Mutates the vector.
 */
clojure.core.matrix.softmax_BANG_ = (function clojure$core$matrix$softmax_BANG_(a){
clojure.core.matrix.protocols.softmax_BANG_.call(null,a);

return a;
});
/**
 * Swap row i with row j in a matrix, returning a new matrix
 */
clojure.core.matrix.swap_rows = (function clojure$core$matrix$swap_rows(m,i,j){
return clojure.core.matrix.protocols.swap_rows.call(null,m,i,j);
});
/**
 * Multiply row i in a matrix by a constant factor
 */
clojure.core.matrix.multiply_row = (function clojure$core$matrix$multiply_row(m,i,factor){
return clojure.core.matrix.protocols.multiply_row.call(null,m,i,factor);
});
/**
 * Add a row j (optionally multiplied by a scalar factor) to a row i
 * and replace row i with the result
 */
clojure.core.matrix.add_row = (function clojure$core$matrix$add_row(var_args){
var args43170 = [];
var len__19784__auto___43173 = arguments.length;
var i__19785__auto___43174 = (0);
while(true){
if((i__19785__auto___43174 < len__19784__auto___43173)){
args43170.push((arguments[i__19785__auto___43174]));

var G__43175 = (i__19785__auto___43174 + (1));
i__19785__auto___43174 = G__43175;
continue;
} else {
}
break;
}

var G__43172 = args43170.length;
switch (G__43172) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43170.length)].join('')));

}
});

clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3 = (function (m,i,j){
return clojure.core.matrix.protocols.add_row.call(null,m,i,j,1.0);
});

clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4 = (function (m,i,j,factor){
return clojure.core.matrix.protocols.add_row.call(null,m,i,j,factor);
});

clojure.core.matrix.add_row.cljs$lang$maxFixedArity = 4;
/**
 * Sets a row in a matrix using a specified vector.
 */
clojure.core.matrix.set_row = (function clojure$core$matrix$set_row(m,i,row){
return clojure.core.matrix.protocols.set_row.call(null,m,i,row);
});
/**
 * Sets a row in a matrix in-place using a specified vector.
 */
clojure.core.matrix.set_row_BANG_ = (function clojure$core$matrix$set_row_BANG_(m,i,row){
clojure.core.matrix.protocols.set_row_BANG_.call(null,m,i,row);

return m;
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column = (function clojure$core$matrix$set_column(m,i,column){
return clojure.core.matrix.protocols.set_column.call(null,m,i,column);
});
/**
 * Sets a column in a matrix using a specified vector.
 */
clojure.core.matrix.set_column_BANG_ = (function clojure$core$matrix$set_column_BANG_(m,i,column){
clojure.core.matrix.protocols.set_column_BANG_.call(null,m,i,column);

return m;
});
/**
 * Counts the number of non-zero values in a numerical array.
 * May perform a full array scan, but will often be quicker for specialised
 * sparse arrays - sometimes as fast as O(1)
 */
clojure.core.matrix.non_zero_count = (function clojure$core$matrix$non_zero_count(m){
return (clojure.core.matrix.ecount.call(null,m) - clojure.core.matrix.zero_count.call(null,m));
});
/**
 * Gets the non-zero indices of an array.
 * - For a 1D vector, returns an ordered index list.
 * - For a higher dimensional array, returns the non-zero-indices for each slice in row-major order.
 */
clojure.core.matrix.non_zero_indices = (function clojure$core$matrix$non_zero_indices(m){
return clojure.core.matrix.protocols.non_zero_indices.call(null,m);
});
/**
 * Returns all elements of an array as a sequence object in row-major order
 */
clojure.core.matrix.eseq = (function clojure$core$matrix$eseq(m){
return cljs.core.seq.call(null,clojure.core.matrix.protocols.element_seq.call(null,m));
});
/**
 * Element-wise reduce on all elements of an array.
 */
clojure.core.matrix.ereduce = (function clojure$core$matrix$ereduce(var_args){
var args43177 = [];
var len__19784__auto___43180 = arguments.length;
var i__19785__auto___43181 = (0);
while(true){
if((i__19785__auto___43181 < len__19784__auto___43180)){
args43177.push((arguments[i__19785__auto___43181]));

var G__43182 = (i__19785__auto___43181 + (1));
i__19785__auto___43181 = G__43182;
continue;
} else {
}
break;
}

var G__43179 = args43177.length;
switch (G__43179) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43177.length)].join('')));

}
});

clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,f);
});

clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3 = (function (f,init,m){
return clojure.core.matrix.protocols.element_reduce.call(null,m,f,init);
});

clojure.core.matrix.ereduce.cljs$lang$maxFixedArity = 3;
/**
 * Element-wise map over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap = (function clojure$core$matrix$emap(var_args){
var args43184 = [];
var len__19784__auto___43191 = arguments.length;
var i__19785__auto___43192 = (0);
while(true){
if((i__19785__auto___43192 < len__19784__auto___43191)){
args43184.push((arguments[i__19785__auto___43192]));

var G__43193 = (i__19785__auto___43192 + (1));
i__19785__auto___43192 = G__43193;
continue;
} else {
}
break;
}

var G__43190 = args43184.length;
switch (G__43190) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43184.slice((3)),(0)));
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19803__auto__);

}
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map.call(null,m,f);
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map.call(null,m,f,a);
});

clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map.call(null,m,f,a,more);
});

clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq43185){
var G__43186 = cljs.core.first.call(null,seq43185);
var seq43185__$1 = cljs.core.next.call(null,seq43185);
var G__43187 = cljs.core.first.call(null,seq43185__$1);
var seq43185__$2 = cljs.core.next.call(null,seq43185__$1);
var G__43188 = cljs.core.first.call(null,seq43185__$2);
var seq43185__$3 = cljs.core.next.call(null,seq43185__$2);
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic(G__43186,G__43187,G__43188,seq43185__$3);
});

clojure.core.matrix.emap.cljs$lang$maxFixedArity = (3);
/**
 * Element-wise map-indexed over all elements of one or more arrays.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Returns a new array of the same element-type and shape as the array m.
 */
clojure.core.matrix.emap_indexed = (function clojure$core$matrix$emap_indexed(var_args){
var args43195 = [];
var len__19784__auto___43202 = arguments.length;
var i__19785__auto___43203 = (0);
while(true){
if((i__19785__auto___43203 < len__19784__auto___43202)){
args43195.push((arguments[i__19785__auto___43203]));

var G__43204 = (i__19785__auto___43203 + (1));
i__19785__auto___43203 = G__43204;
continue;
} else {
}
break;
}

var G__43201 = args43195.length;
switch (G__43201) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43195.slice((3)),(0)));
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19803__auto__);

}
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f);
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a);
});

clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed.call(null,m,f,a,more);
});

clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq43196){
var G__43197 = cljs.core.first.call(null,seq43196);
var seq43196__$1 = cljs.core.next.call(null,seq43196);
var G__43198 = cljs.core.first.call(null,seq43196__$1);
var seq43196__$2 = cljs.core.next.call(null,seq43196__$1);
var G__43199 = cljs.core.first.call(null,seq43196__$2);
var seq43196__$3 = cljs.core.next.call(null,seq43196__$2);
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic(G__43197,G__43198,G__43199,seq43196__$3);
});

clojure.core.matrix.emap_indexed.cljs$lang$maxFixedArity = (3);
/**
 * Calculates the sum of all the elements in a numerical array.
 */
clojure.core.matrix.esum = (function clojure$core$matrix$esum(m){
return clojure.core.matrix.protocols.element_sum.call(null,m);
});
/**
 * Gets the minimum element value from a numerical array
 */
clojure.core.matrix.emin = (function clojure$core$matrix$emin(m){
return clojure.core.matrix.protocols.element_min.call(null,m);
});
/**
 * Gets the maximum element value from a numerical array
 */
clojure.core.matrix.emax = (function clojure$core$matrix$emax(m){
return clojure.core.matrix.protocols.element_max.call(null,m);
});
/**
 * Clamps each element in a numerical array between lower and upper bounds
 *   specified by a and b, respectively.
 * 
 *   Examples:
 *   (clamp [[1 5 1] [4 10 2] [5 6 3]] 2 8) ;=> [[2 5 2] [4 8 2] [5 6 3]]
 *   
 */
clojure.core.matrix.clamp = (function clojure$core$matrix$clamp(m,a,b){
return clojure.core.matrix.protocols.element_clamp.call(null,m,a,b);
});
/**
 * Element-wise map of a function f over all elements of one or more arrays.
 * 
 * f must return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_BANG_ = (function clojure$core$matrix$emap_BANG_(var_args){
var args43206 = [];
var len__19784__auto___43213 = arguments.length;
var i__19785__auto___43214 = (0);
while(true){
if((i__19785__auto___43214 < len__19784__auto___43213)){
args43206.push((arguments[i__19785__auto___43214]));

var G__43215 = (i__19785__auto___43214 + (1));
i__19785__auto___43214 = G__43215;
continue;
} else {
}
break;
}

var G__43212 = args43206.length;
switch (G__43212) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43206.slice((3)),(0)));
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19803__auto__);

}
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f,a);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
clojure.core.matrix.protocols.element_map_BANG_.call(null,m,f,a,more);

return m;
});

clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq43207){
var G__43208 = cljs.core.first.call(null,seq43207);
var seq43207__$1 = cljs.core.next.call(null,seq43207);
var G__43209 = cljs.core.first.call(null,seq43207__$1);
var seq43207__$2 = cljs.core.next.call(null,seq43207__$1);
var G__43210 = cljs.core.first.call(null,seq43207__$2);
var seq43207__$3 = cljs.core.next.call(null,seq43207__$2);
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43208,G__43209,G__43210,seq43207__$3);
});

clojure.core.matrix.emap_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Element-wise map-indexed over all elements of one or more arrays.
 * 
 * f must accept as first argument the index vector of the current element,
 * and return a result compatible with the element-type of the array m
 * 
 * Performs in-place modification of the first array argument.
 */
clojure.core.matrix.emap_indexed_BANG_ = (function clojure$core$matrix$emap_indexed_BANG_(var_args){
var args43217 = [];
var len__19784__auto___43224 = arguments.length;
var i__19785__auto___43225 = (0);
while(true){
if((i__19785__auto___43225 < len__19784__auto___43224)){
args43217.push((arguments[i__19785__auto___43225]));

var G__43226 = (i__19785__auto___43225 + (1));
i__19785__auto___43225 = G__43226;
continue;
} else {
}
break;
}

var G__43223 = args43217.length;
switch (G__43223) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43217.slice((3)),(0)));
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19803__auto__);

}
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (f,m,a){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f,a);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,m,a,more){
return clojure.core.matrix.protocols.element_map_indexed_BANG_.call(null,m,f,a,more);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq43218){
var G__43219 = cljs.core.first.call(null,seq43218);
var seq43218__$1 = cljs.core.next.call(null,seq43218);
var G__43220 = cljs.core.first.call(null,seq43218__$1);
var seq43218__$2 = cljs.core.next.call(null,seq43218__$1);
var G__43221 = cljs.core.first.call(null,seq43218__$2);
var seq43218__$3 = cljs.core.next.call(null,seq43218__$2);
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43219,G__43220,G__43221,seq43218__$3);
});

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$maxFixedArity = (3);
/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.index_seq_for_shape = (function clojure$core$matrix$index_seq_for_shape(sh){
return clojure.core.matrix.utils.base_index_seq_for_shape.call(null,sh);
});
/**
 * Returns a sequence of all possible index vectors into a matrix, in row-major order
 */
clojure.core.matrix.index_seq = (function clojure$core$matrix$index_seq(m){
return clojure.core.matrix.index_seq_for_shape.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
});
/**
 * Gets the currently active matrix implementation as a keyword, e.g. :vectorz
 */
clojure.core.matrix.current_implementation = (function clojure$core$matrix$current_implementation(){
return clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_;
});
/**
 * Gets a canonical matrix object for a given implementation (keyword or array), or the current implementation
 * if not otherwise specified. Scalars are regarded as conforming to the current implementation
 * Throws an exception if none is available.
 */
clojure.core.matrix.implementation_check = (function clojure$core$matrix$implementation_check(var_args){
var args43228 = [];
var len__19784__auto___43231 = arguments.length;
var i__19785__auto___43232 = (0);
while(true){
if((i__19785__auto___43232 < len__19784__auto___43231)){
args43228.push((arguments[i__19785__auto___43232]));

var G__43233 = (i__19785__auto___43232 + (1));
i__19785__auto___43232 = G__43233;
continue;
} else {
}
break;
}

var G__43230 = args43228.length;
switch (G__43230) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43228.length)].join('')));

}
});

clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__18726__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No current clojure.core.matrix implementation available (no canonical)")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1 = (function (impl){
var temp__4655__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,impl);
if(cljs.core.truth_(temp__4655__auto__)){
var im = temp__4655__auto__;
return im;
} else {
if(cljs.core.truth_(clojure.core.matrix.scalar_QMARK_.call(null,impl))){
return clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
} else {
var or__18726__auto__ = clojure.core.matrix.implementations.load_implementation.call(null,impl);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("No clojure.core.matrix implementation available - "),cljs.core.str([cljs.core.str(impl)].join(''))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}

}
}
});

clojure.core.matrix.implementation_check.cljs$lang$maxFixedArity = 1;
/**
 * Gets a canonical object for the currently active matrix implementation. This object
 * can be used to pass as an implementation parameter, or to query implementation internals via core.matrix protocols.
 */
clojure.core.matrix.current_implementation_object = (function clojure$core$matrix$current_implementation_object(){
return clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.current_implementation.call(null));
});
/**
 * Sets the currently active core.matrix implementation.
 * 
 * Parameter may be
 *  - A known keyword for the implementation e.g. :vectorz
 *  - An existing instance from the implementation
 * 
 * This is used primarily for functions that construct new matrices, i.e. it determines the
 * implementation used for expressions like: (matrix [[1 2] [3 4]])
 */
clojure.core.matrix.set_current_implementation = (function clojure$core$matrix$set_current_implementation(m){
return clojure.core.matrix.implementations.set_current_implementation.call(null,m);
});

//# sourceMappingURL=matrix.js.map