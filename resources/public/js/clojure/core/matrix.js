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
var args37227 = [];
var len__19784__auto___37239 = arguments.length;
var i__19785__auto___37240 = (0);
while(true){
if((i__19785__auto___37240 < len__19784__auto___37239)){
args37227.push((arguments[i__19785__auto___37240]));

var G__37244 = (i__19785__auto___37240 + (1));
i__19785__auto___37240 = G__37244;
continue;
} else {
}
break;
}

var G__37234 = args37227.length;
switch (G__37234) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37227.length)].join('')));

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
var args37249 = [];
var len__19784__auto___37260 = arguments.length;
var i__19785__auto___37263 = (0);
while(true){
if((i__19785__auto___37263 < len__19784__auto___37260)){
args37249.push((arguments[i__19785__auto___37263]));

var G__37265 = (i__19785__auto___37263 + (1));
i__19785__auto___37263 = G__37265;
continue;
} else {
}
break;
}

var G__37257 = args37249.length;
switch (G__37257) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37249.length)].join('')));

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
var args37270 = [];
var len__19784__auto___37286 = arguments.length;
var i__19785__auto___37287 = (0);
while(true){
if((i__19785__auto___37287 < len__19784__auto___37286)){
args37270.push((arguments[i__19785__auto___37287]));

var G__37290 = (i__19785__auto___37287 + (1));
i__19785__auto___37287 = G__37290;
continue;
} else {
}
break;
}

var G__37282 = args37270.length;
switch (G__37282) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37270.length)].join('')));

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
var args37300 = [];
var len__19784__auto___37320 = arguments.length;
var i__19785__auto___37321 = (0);
while(true){
if((i__19785__auto___37321 < len__19784__auto___37320)){
args37300.push((arguments[i__19785__auto___37321]));

var G__37322 = (i__19785__auto___37321 + (1));
i__19785__auto___37321 = G__37322;
continue;
} else {
}
break;
}

var G__37305 = args37300.length;
switch (G__37305) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37300.length)].join('')));

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
var args37328 = [];
var len__19784__auto___37335 = arguments.length;
var i__19785__auto___37336 = (0);
while(true){
if((i__19785__auto___37336 < len__19784__auto___37335)){
args37328.push((arguments[i__19785__auto___37336]));

var G__37338 = (i__19785__auto___37336 + (1));
i__19785__auto___37336 = G__37338;
continue;
} else {
}
break;
}

var G__37331 = args37328.length;
switch (G__37331) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37328.length)].join('')));

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
var args37353 = [];
var len__19784__auto___37356 = arguments.length;
var i__19785__auto___37357 = (0);
while(true){
if((i__19785__auto___37357 < len__19784__auto___37356)){
args37353.push((arguments[i__19785__auto___37357]));

var G__37360 = (i__19785__auto___37357 + (1));
i__19785__auto___37357 = G__37360;
continue;
} else {
}
break;
}

var G__37355 = args37353.length;
switch (G__37355) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37353.length)].join('')));

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
var args37379 = [];
var len__19784__auto___37385 = arguments.length;
var i__19785__auto___37386 = (0);
while(true){
if((i__19785__auto___37386 < len__19784__auto___37385)){
args37379.push((arguments[i__19785__auto___37386]));

var G__37387 = (i__19785__auto___37386 + (1));
i__19785__auto___37386 = G__37387;
continue;
} else {
}
break;
}

var G__37384 = args37379.length;
switch (G__37384) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37379.length)].join('')));

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
var args37392 = [];
var len__19784__auto___37415 = arguments.length;
var i__19785__auto___37416 = (0);
while(true){
if((i__19785__auto___37416 < len__19784__auto___37415)){
args37392.push((arguments[i__19785__auto___37416]));

var G__37418 = (i__19785__auto___37416 + (1));
i__19785__auto___37416 = G__37418;
continue;
} else {
}
break;
}

var G__37408 = args37392.length;
switch (G__37408) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37392.length)].join('')));

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
var args37424 = [];
var len__19784__auto___37448 = arguments.length;
var i__19785__auto___37449 = (0);
while(true){
if((i__19785__auto___37449 < len__19784__auto___37448)){
args37424.push((arguments[i__19785__auto___37449]));

var G__37451 = (i__19785__auto___37449 + (1));
i__19785__auto___37449 = G__37451;
continue;
} else {
}
break;
}

var G__37427 = args37424.length;
switch (G__37427) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37424.length)].join('')));

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
var args37453 = [];
var len__19784__auto___37462 = arguments.length;
var i__19785__auto___37463 = (0);
while(true){
if((i__19785__auto___37463 < len__19784__auto___37462)){
args37453.push((arguments[i__19785__auto___37463]));

var G__37464 = (i__19785__auto___37463 + (1));
i__19785__auto___37463 = G__37464;
continue;
} else {
}
break;
}

var G__37461 = args37453.length;
switch (G__37461) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37453.length)].join('')));

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
var args37472 = [];
var len__19784__auto___37486 = arguments.length;
var i__19785__auto___37487 = (0);
while(true){
if((i__19785__auto___37487 < len__19784__auto___37486)){
args37472.push((arguments[i__19785__auto___37487]));

var G__37490 = (i__19785__auto___37487 + (1));
i__19785__auto___37487 = G__37490;
continue;
} else {
}
break;
}

var G__37477 = args37472.length;
switch (G__37477) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37472.length)].join('')));

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
var args37499 = [];
var len__19784__auto___37517 = arguments.length;
var i__19785__auto___37518 = (0);
while(true){
if((i__19785__auto___37518 < len__19784__auto___37517)){
args37499.push((arguments[i__19785__auto___37518]));

var G__37541 = (i__19785__auto___37518 + (1));
i__19785__auto___37518 = G__37541;
continue;
} else {
}
break;
}

var G__37515 = args37499.length;
switch (G__37515) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37499.length)].join('')));

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
var args37545 = [];
var len__19784__auto___37550 = arguments.length;
var i__19785__auto___37551 = (0);
while(true){
if((i__19785__auto___37551 < len__19784__auto___37550)){
args37545.push((arguments[i__19785__auto___37551]));

var G__37553 = (i__19785__auto___37551 + (1));
i__19785__auto___37551 = G__37553;
continue;
} else {
}
break;
}

var G__37548 = args37545.length;
switch (G__37548) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37545.length)].join('')));

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
var args37564 = [];
var len__19784__auto___37579 = arguments.length;
var i__19785__auto___37580 = (0);
while(true){
if((i__19785__auto___37580 < len__19784__auto___37579)){
args37564.push((arguments[i__19785__auto___37580]));

var G__37583 = (i__19785__auto___37580 + (1));
i__19785__auto___37580 = G__37583;
continue;
} else {
}
break;
}

var G__37578 = args37564.length;
switch (G__37578) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37564.length)].join('')));

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
var args37637 = [];
var len__19784__auto___37662 = arguments.length;
var i__19785__auto___37663 = (0);
while(true){
if((i__19785__auto___37663 < len__19784__auto___37662)){
args37637.push((arguments[i__19785__auto___37663]));

var G__37666 = (i__19785__auto___37663 + (1));
i__19785__auto___37663 = G__37666;
continue;
} else {
}
break;
}

var G__37643 = args37637.length;
switch (G__37643) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37637.length)].join('')));

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
var args37679 = [];
var len__19784__auto___37715 = arguments.length;
var i__19785__auto___37716 = (0);
while(true){
if((i__19785__auto___37716 < len__19784__auto___37715)){
args37679.push((arguments[i__19785__auto___37716]));

var G__37718 = (i__19785__auto___37716 + (1));
i__19785__auto___37716 = G__37718;
continue;
} else {
}
break;
}

var G__37691 = args37679.length;
switch (G__37691) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37679.length)].join('')));

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
var args37776 = [];
var len__19784__auto___37779 = arguments.length;
var i__19785__auto___37780 = (0);
while(true){
if((i__19785__auto___37780 < len__19784__auto___37779)){
args37776.push((arguments[i__19785__auto___37780]));

var G__37781 = (i__19785__auto___37780 + (1));
i__19785__auto___37780 = G__37781;
continue;
} else {
}
break;
}

var G__37778 = args37776.length;
switch (G__37778) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37776.length)].join('')));

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
var args37805 = [];
var len__19784__auto___37808 = arguments.length;
var i__19785__auto___37809 = (0);
while(true){
if((i__19785__auto___37809 < len__19784__auto___37808)){
args37805.push((arguments[i__19785__auto___37809]));

var G__37810 = (i__19785__auto___37809 + (1));
i__19785__auto___37809 = G__37810;
continue;
} else {
}
break;
}

var G__37807 = args37805.length;
switch (G__37807) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37805.length)].join('')));

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
var args37858 = [];
var len__19784__auto___37863 = arguments.length;
var i__19785__auto___37864 = (0);
while(true){
if((i__19785__auto___37864 < len__19784__auto___37863)){
args37858.push((arguments[i__19785__auto___37864]));

var G__37866 = (i__19785__auto___37864 + (1));
i__19785__auto___37864 = G__37866;
continue;
} else {
}
break;
}

var G__37860 = args37858.length;
switch (G__37860) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37858.length)].join('')));

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
var args37894 = [];
var len__19784__auto___37898 = arguments.length;
var i__19785__auto___37899 = (0);
while(true){
if((i__19785__auto___37899 < len__19784__auto___37898)){
args37894.push((arguments[i__19785__auto___37899]));

var G__37901 = (i__19785__auto___37899 + (1));
i__19785__auto___37899 = G__37901;
continue;
} else {
}
break;
}

var G__37897 = args37894.length;
switch (G__37897) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37894.length)].join('')));

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
var args37917 = [];
var len__19784__auto___37934 = arguments.length;
var i__19785__auto___37935 = (0);
while(true){
if((i__19785__auto___37935 < len__19784__auto___37934)){
args37917.push((arguments[i__19785__auto___37935]));

var G__37937 = (i__19785__auto___37935 + (1));
i__19785__auto___37935 = G__37937;
continue;
} else {
}
break;
}

var G__37931 = args37917.length;
switch (G__37931) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37917.length)].join('')));

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
var args37941 = [];
var len__19784__auto___37951 = arguments.length;
var i__19785__auto___37953 = (0);
while(true){
if((i__19785__auto___37953 < len__19784__auto___37951)){
args37941.push((arguments[i__19785__auto___37953]));

var G__37957 = (i__19785__auto___37953 + (1));
i__19785__auto___37953 = G__37957;
continue;
} else {
}
break;
}

var G__37945 = args37941.length;
switch (G__37945) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37941.length)].join('')));

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
var args37978 = [];
var len__19784__auto___38051 = arguments.length;
var i__19785__auto___38053 = (0);
while(true){
if((i__19785__auto___38053 < len__19784__auto___38051)){
args37978.push((arguments[i__19785__auto___38053]));

var G__38060 = (i__19785__auto___38053 + (1));
i__19785__auto___38053 = G__38060;
continue;
} else {
}
break;
}

var G__37989 = args37978.length;
switch (G__37989) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37978.length)].join('')));

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
var args38087 = [];
var len__19784__auto___38090 = arguments.length;
var i__19785__auto___38091 = (0);
while(true){
if((i__19785__auto___38091 < len__19784__auto___38090)){
args38087.push((arguments[i__19785__auto___38091]));

var G__38092 = (i__19785__auto___38091 + (1));
i__19785__auto___38091 = G__38092;
continue;
} else {
}
break;
}

var G__38089 = args38087.length;
switch (G__38089) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38087.length)].join('')));

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
var args38101 = [];
var len__19784__auto___38105 = arguments.length;
var i__19785__auto___38106 = (0);
while(true){
if((i__19785__auto___38106 < len__19784__auto___38105)){
args38101.push((arguments[i__19785__auto___38106]));

var G__38107 = (i__19785__auto___38106 + (1));
i__19785__auto___38106 = G__38107;
continue;
} else {
}
break;
}

var G__38104 = args38101.length;
switch (G__38104) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38101.length)].join('')));

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
var args38130 = [];
var len__19784__auto___38134 = arguments.length;
var i__19785__auto___38135 = (0);
while(true){
if((i__19785__auto___38135 < len__19784__auto___38134)){
args38130.push((arguments[i__19785__auto___38135]));

var G__38136 = (i__19785__auto___38135 + (1));
i__19785__auto___38135 = G__38136;
continue;
} else {
}
break;
}

var G__38133 = args38130.length;
switch (G__38133) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38130.length)].join('')));

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
var args38156 = [];
var len__19784__auto___38165 = arguments.length;
var i__19785__auto___38166 = (0);
while(true){
if((i__19785__auto___38166 < len__19784__auto___38165)){
args38156.push((arguments[i__19785__auto___38166]));

var G__38168 = (i__19785__auto___38166 + (1));
i__19785__auto___38166 = G__38168;
continue;
} else {
}
break;
}

var G__38162 = args38156.length;
switch (G__38162) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38156.length)].join('')));

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
var args38198 = [];
var len__19784__auto___38205 = arguments.length;
var i__19785__auto___38206 = (0);
while(true){
if((i__19785__auto___38206 < len__19784__auto___38205)){
args38198.push((arguments[i__19785__auto___38206]));

var G__38208 = (i__19785__auto___38206 + (1));
i__19785__auto___38206 = G__38208;
continue;
} else {
}
break;
}

var G__38202 = args38198.length;
switch (G__38202) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38198.length)].join('')));

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
var args38212 = [];
var len__19784__auto___38218 = arguments.length;
var i__19785__auto___38219 = (0);
while(true){
if((i__19785__auto___38219 < len__19784__auto___38218)){
args38212.push((arguments[i__19785__auto___38219]));

var G__38220 = (i__19785__auto___38219 + (1));
i__19785__auto___38219 = G__38220;
continue;
} else {
}
break;
}

var G__38217 = args38212.length;
switch (G__38217) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args38212.slice((2)),(0)));
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
var G__38226 = n__$1;
var G__38227 = cljs.core.first.call(null,more__$1);
var G__38228 = cljs.core.next.call(null,more__$1);
m__$1 = G__38226;
n__$1 = G__38227;
more__$1 = G__38228;
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

clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq38213){
var G__38214 = cljs.core.first.call(null,seq38213);
var seq38213__$1 = cljs.core.next.call(null,seq38213);
var G__38215 = cljs.core.first.call(null,seq38213__$1);
var seq38213__$2 = cljs.core.next.call(null,seq38213__$1);
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__38214,G__38215,seq38213__$2);
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
var args38231 = [];
var len__19784__auto___38236 = arguments.length;
var i__19785__auto___38237 = (0);
while(true){
if((i__19785__auto___38237 < len__19784__auto___38236)){
args38231.push((arguments[i__19785__auto___38237]));

var G__38238 = (i__19785__auto___38237 + (1));
i__19785__auto___38237 = G__38238;
continue;
} else {
}
break;
}

var G__38233 = args38231.length;
switch (G__38233) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38231.length)].join('')));

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
var args38245 = [];
var len__19784__auto___38250 = arguments.length;
var i__19785__auto___38251 = (0);
while(true){
if((i__19785__auto___38251 < len__19784__auto___38250)){
args38245.push((arguments[i__19785__auto___38251]));

var G__38252 = (i__19785__auto___38251 + (1));
i__19785__auto___38251 = G__38252;
continue;
} else {
}
break;
}

var G__38249 = args38245.length;
switch (G__38249) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38245.length)].join('')));

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
var args38261 = [];
var len__19784__auto___38266 = arguments.length;
var i__19785__auto___38267 = (0);
while(true){
if((i__19785__auto___38267 < len__19784__auto___38266)){
args38261.push((arguments[i__19785__auto___38267]));

var G__38269 = (i__19785__auto___38267 + (1));
i__19785__auto___38267 = G__38269;
continue;
} else {
}
break;
}

var G__38263 = args38261.length;
switch (G__38263) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38261.length)].join('')));

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
var args38320 = [];
var len__19784__auto___38332 = arguments.length;
var i__19785__auto___38333 = (0);
while(true){
if((i__19785__auto___38333 < len__19784__auto___38332)){
args38320.push((arguments[i__19785__auto___38333]));

var G__38334 = (i__19785__auto___38333 + (1));
i__19785__auto___38333 = G__38334;
continue;
} else {
}
break;
}

var G__38330 = args38320.length;
switch (G__38330) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args38320.slice((3)),(0)));
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

clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq38321){
var G__38322 = cljs.core.first.call(null,seq38321);
var seq38321__$1 = cljs.core.next.call(null,seq38321);
var G__38323 = cljs.core.first.call(null,seq38321__$1);
var seq38321__$2 = cljs.core.next.call(null,seq38321__$1);
var G__38324 = cljs.core.first.call(null,seq38321__$2);
var seq38321__$3 = cljs.core.next.call(null,seq38321__$2);
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic(G__38322,G__38323,G__38324,seq38321__$3);
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
var args38345 = [];
var len__19784__auto___38357 = arguments.length;
var i__19785__auto___38358 = (0);
while(true){
if((i__19785__auto___38358 < len__19784__auto___38357)){
args38345.push((arguments[i__19785__auto___38358]));

var G__38359 = (i__19785__auto___38358 + (1));
i__19785__auto___38358 = G__38359;
continue;
} else {
}
break;
}

var G__38353 = args38345.length;
switch (G__38353) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args38345.slice((4)),(0)));
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

clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq38346){
var G__38347 = cljs.core.first.call(null,seq38346);
var seq38346__$1 = cljs.core.next.call(null,seq38346);
var G__38348 = cljs.core.first.call(null,seq38346__$1);
var seq38346__$2 = cljs.core.next.call(null,seq38346__$1);
var G__38349 = cljs.core.first.call(null,seq38346__$2);
var seq38346__$3 = cljs.core.next.call(null,seq38346__$2);
var G__38350 = cljs.core.first.call(null,seq38346__$3);
var seq38346__$4 = cljs.core.next.call(null,seq38346__$3);
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic(G__38347,G__38348,G__38349,G__38350,seq38346__$4);
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
var args38396 = [];
var len__19784__auto___38421 = arguments.length;
var i__19785__auto___38422 = (0);
while(true){
if((i__19785__auto___38422 < len__19784__auto___38421)){
args38396.push((arguments[i__19785__auto___38422]));

var G__38434 = (i__19785__auto___38422 + (1));
i__19785__auto___38422 = G__38434;
continue;
} else {
}
break;
}

var G__38412 = args38396.length;
switch (G__38412) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args38396.slice((5)),(0)));
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

clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq38397){
var G__38398 = cljs.core.first.call(null,seq38397);
var seq38397__$1 = cljs.core.next.call(null,seq38397);
var G__38399 = cljs.core.first.call(null,seq38397__$1);
var seq38397__$2 = cljs.core.next.call(null,seq38397__$1);
var G__38400 = cljs.core.first.call(null,seq38397__$2);
var seq38397__$3 = cljs.core.next.call(null,seq38397__$2);
var G__38401 = cljs.core.first.call(null,seq38397__$3);
var seq38397__$4 = cljs.core.next.call(null,seq38397__$3);
var G__38402 = cljs.core.first.call(null,seq38397__$4);
var seq38397__$5 = cljs.core.next.call(null,seq38397__$4);
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38398,G__38399,G__38400,G__38401,G__38402,seq38397__$5);
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
var G__38454 = slice_func.call(null,m__$1,i,ix);
var G__38455 = i;
var G__38456 = cljs.core.next.call(null,args__$1);
m__$1 = G__38454;
i = G__38455;
args__$1 = G__38456;
continue;
} else {
var G__38460 = m__$1;
var G__38461 = (i + (1));
var G__38462 = cljs.core.next.call(null,args__$1);
m__$1 = G__38460;
i = G__38461;
args__$1 = G__38462;
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
var len__19784__auto___38476 = arguments.length;
var i__19785__auto___38477 = (0);
while(true){
if((i__19785__auto___38477 < len__19784__auto___38476)){
args__19791__auto__.push((arguments[i__19785__auto___38477]));

var G__38478 = (i__19785__auto___38477 + (1));
i__19785__auto___38477 = G__38478;
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

clojure.core.matrix.select.cljs$lang$applyTo = (function (seq38472){
var G__38473 = cljs.core.first.call(null,seq38472);
var seq38472__$1 = cljs.core.next.call(null,seq38472);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic(G__38473,seq38472__$1);
});
/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__19791__auto__ = [];
var len__19784__auto___38487 = arguments.length;
var i__19785__auto___38488 = (0);
while(true){
if((i__19785__auto___38488 < len__19784__auto___38487)){
args__19791__auto__.push((arguments[i__19785__auto___38488]));

var G__38490 = (i__19785__auto___38488 + (1));
i__19785__auto___38488 = G__38490;
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

clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq38484){
var G__38485 = cljs.core.first.call(null,seq38484);
var seq38484__$1 = cljs.core.next.call(null,seq38484);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic(G__38485,seq38484__$1);
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
var len__19784__auto___38530 = arguments.length;
var i__19785__auto___38531 = (0);
while(true){
if((i__19785__auto___38531 < len__19784__auto___38530)){
args__19791__auto__.push((arguments[i__19785__auto___38531]));

var G__38535 = (i__19785__auto___38531 + (1));
i__19785__auto___38531 = G__38535;
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

clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq38521){
var G__38522 = cljs.core.first.call(null,seq38521);
var seq38521__$1 = cljs.core.next.call(null,seq38521);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38522,seq38521__$1);
});
/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__19791__auto__ = [];
var len__19784__auto___38552 = arguments.length;
var i__19785__auto___38554 = (0);
while(true){
if((i__19785__auto___38554 < len__19784__auto___38552)){
args__19791__auto__.push((arguments[i__19785__auto___38554]));

var G__38556 = (i__19785__auto___38554 + (1));
i__19785__auto___38554 = G__38556;
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

clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq38546){
var G__38547 = cljs.core.first.call(null,seq38546);
var seq38546__$1 = cljs.core.next.call(null,seq38546);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic(G__38547,seq38546__$1);
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
var args38567 = [];
var len__19784__auto___38592 = arguments.length;
var i__19785__auto___38594 = (0);
while(true){
if((i__19785__auto___38594 < len__19784__auto___38592)){
args38567.push((arguments[i__19785__auto___38594]));

var G__38595 = (i__19785__auto___38594 + (1));
i__19785__auto___38594 = G__38595;
continue;
} else {
}
break;
}

var G__38586 = args38567.length;
switch (G__38586) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38567.length)].join('')));

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
var args38606 = [];
var len__19784__auto___38609 = arguments.length;
var i__19785__auto___38610 = (0);
while(true){
if((i__19785__auto___38610 < len__19784__auto___38609)){
args38606.push((arguments[i__19785__auto___38610]));

var G__38611 = (i__19785__auto___38610 + (1));
i__19785__auto___38610 = G__38611;
continue;
} else {
}
break;
}

var G__38608 = args38606.length;
switch (G__38608) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38606.length)].join('')));

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
var args38613 = [];
var len__19784__auto___38616 = arguments.length;
var i__19785__auto___38617 = (0);
while(true){
if((i__19785__auto___38617 < len__19784__auto___38616)){
args38613.push((arguments[i__19785__auto___38617]));

var G__38618 = (i__19785__auto___38617 + (1));
i__19785__auto___38617 = G__38618;
continue;
} else {
}
break;
}

var G__38615 = args38613.length;
switch (G__38615) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38613.length)].join('')));

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
var args38621 = [];
var len__19784__auto___38624 = arguments.length;
var i__19785__auto___38625 = (0);
while(true){
if((i__19785__auto___38625 < len__19784__auto___38624)){
args38621.push((arguments[i__19785__auto___38625]));

var G__38626 = (i__19785__auto___38625 + (1));
i__19785__auto___38625 = G__38626;
continue;
} else {
}
break;
}

var G__38623 = args38621.length;
switch (G__38623) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38621.length)].join('')));

}
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m);
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.slice_views.call(null,m);
} else {
return cljs.core.map.call(null,(function (p1__38620_SHARP_){
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,p1__38620_SHARP_);
}),cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));
}
});

clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2;
/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var args38628 = [];
var len__19784__auto___38631 = arguments.length;
var i__19785__auto___38632 = (0);
while(true){
if((i__19785__auto___38632 < len__19784__auto___38631)){
args38628.push((arguments[i__19785__auto___38632]));

var G__38633 = (i__19785__auto___38632 + (1));
i__19785__auto___38632 = G__38633;
continue;
} else {
}
break;
}

var G__38630 = args38628.length;
switch (G__38630) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38628.length)].join('')));

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
var args38635 = [];
var len__19784__auto___38638 = arguments.length;
var i__19785__auto___38639 = (0);
while(true){
if((i__19785__auto___38639 < len__19784__auto___38638)){
args38635.push((arguments[i__19785__auto___38639]));

var G__38640 = (i__19785__auto___38639 + (1));
i__19785__auto___38639 = G__38640;
continue;
} else {
}
break;
}

var G__38637 = args38635.length;
switch (G__38637) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38635.length)].join('')));

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
var len__19784__auto___38646 = arguments.length;
var i__19785__auto___38647 = (0);
while(true){
if((i__19785__auto___38647 < len__19784__auto___38646)){
args__19791__auto__.push((arguments[i__19785__auto___38647]));

var G__38648 = (i__19785__auto___38647 + (1));
i__19785__auto___38647 = G__38648;
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

clojure.core.matrix.join.cljs$lang$applyTo = (function (seq38645){
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38645));
});
/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__19791__auto__ = [];
var len__19784__auto___38733 = arguments.length;
var i__19785__auto___38734 = (0);
while(true){
if((i__19785__auto___38734 < len__19784__auto___38733)){
args__19791__auto__.push((arguments[i__19785__auto___38734]));

var G__38741 = (i__19785__auto___38734 + (1));
i__19785__auto___38734 = G__38741;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__18726__auto__ = cljs.core.reduce.call(null,(function (p1__38665_SHARP_,p2__38667_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__38665_SHARP_,p2__38667_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Failure to joins arrays")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq38671){
var G__38672 = cljs.core.first.call(null,seq38671);
var seq38671__$1 = cljs.core.next.call(null,seq38671);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic(G__38672,seq38671__$1);
});
/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var args38787 = [];
var len__19784__auto___38796 = arguments.length;
var i__19785__auto___38797 = (0);
while(true){
if((i__19785__auto___38797 < len__19784__auto___38796)){
args38787.push((arguments[i__19785__auto___38797]));

var G__38801 = (i__19785__auto___38797 + (1));
i__19785__auto___38797 = G__38801;
continue;
} else {
}
break;
}

var G__38793 = args38787.length;
switch (G__38793) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args38787.slice((2)),(0)));
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
return (function (p1__38786_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__38786_SHARP_,ss);
});})(ss))
,cljs.core.cons.call(null,b,more));
return clojure.core.matrix.join.call(null,a,slcs);
});

clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq38788){
var G__38789 = cljs.core.first.call(null,seq38788);
var seq38788__$1 = cljs.core.next.call(null,seq38788);
var G__38790 = cljs.core.first.call(null,seq38788__$1);
var seq38788__$2 = cljs.core.next.call(null,seq38788__$1);
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic(G__38789,G__38790,seq38788__$2);
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
var args38828 = [];
var len__19784__auto___38847 = arguments.length;
var i__19785__auto___38848 = (0);
while(true){
if((i__19785__auto___38848 < len__19784__auto___38847)){
args38828.push((arguments[i__19785__auto___38848]));

var G__38850 = (i__19785__auto___38848 + (1));
i__19785__auto___38848 = G__38850;
continue;
} else {
}
break;
}

var G__38839 = args38828.length;
switch (G__38839) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args38828.slice((3)),(0)));
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

clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq38830){
var G__38831 = cljs.core.first.call(null,seq38830);
var seq38830__$1 = cljs.core.next.call(null,seq38830);
var G__38832 = cljs.core.first.call(null,seq38830__$1);
var seq38830__$2 = cljs.core.next.call(null,seq38830__$1);
var G__38833 = cljs.core.first.call(null,seq38830__$2);
var seq38830__$3 = cljs.core.next.call(null,seq38830__$2);
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic(G__38831,G__38832,G__38833,seq38830__$3);
});

clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3);
/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var args38864 = [];
var len__19784__auto___38871 = arguments.length;
var i__19785__auto___38873 = (0);
while(true){
if((i__19785__auto___38873 < len__19784__auto___38871)){
args38864.push((arguments[i__19785__auto___38873]));

var G__38879 = (i__19785__auto___38873 + (1));
i__19785__auto___38873 = G__38879;
continue;
} else {
}
break;
}

var G__38867 = args38864.length;
switch (G__38867) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38864.length)].join('')));

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
var args38893 = [];
var len__19784__auto___38905 = arguments.length;
var i__19785__auto___38906 = (0);
while(true){
if((i__19785__auto___38906 < len__19784__auto___38905)){
args38893.push((arguments[i__19785__auto___38906]));

var G__38911 = (i__19785__auto___38906 + (1));
i__19785__auto___38906 = G__38911;
continue;
} else {
}
break;
}

var G__38899 = args38893.length;
switch (G__38899) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38893.length)].join('')));

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
var args38945 = [];
var len__19784__auto___38995 = arguments.length;
var i__19785__auto___39002 = (0);
while(true){
if((i__19785__auto___39002 < len__19784__auto___38995)){
args38945.push((arguments[i__19785__auto___39002]));

var G__39014 = (i__19785__auto___39002 + (1));
i__19785__auto___39002 = G__39014;
continue;
} else {
}
break;
}

var G__38978 = args38945.length;
switch (G__38978) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38945.length)].join('')));

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
var args39079 = [];
var len__19784__auto___39090 = arguments.length;
var i__19785__auto___39091 = (0);
while(true){
if((i__19785__auto___39091 < len__19784__auto___39090)){
args39079.push((arguments[i__19785__auto___39091]));

var G__39094 = (i__19785__auto___39091 + (1));
i__19785__auto___39091 = G__39094;
continue;
} else {
}
break;
}

var G__39086 = args39079.length;
switch (G__39086) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39079.length)].join('')));

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
var args39105 = [];
var len__19784__auto___39113 = arguments.length;
var i__19785__auto___39114 = (0);
while(true){
if((i__19785__auto___39114 < len__19784__auto___39113)){
args39105.push((arguments[i__19785__auto___39114]));

var G__39116 = (i__19785__auto___39114 + (1));
i__19785__auto___39114 = G__39116;
continue;
} else {
}
break;
}

var G__39107 = args39105.length;
switch (G__39107) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39105.length)].join('')));

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
var args39143 = [];
var len__19784__auto___39158 = arguments.length;
var i__19785__auto___39159 = (0);
while(true){
if((i__19785__auto___39159 < len__19784__auto___39158)){
args39143.push((arguments[i__19785__auto___39159]));

var G__39160 = (i__19785__auto___39159 + (1));
i__19785__auto___39159 = G__39160;
continue;
} else {
}
break;
}

var G__39153 = args39143.length;
switch (G__39153) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39143.slice((2)),(0)));
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

clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq39144){
var G__39145 = cljs.core.first.call(null,seq39144);
var seq39144__$1 = cljs.core.next.call(null,seq39144);
var G__39146 = cljs.core.first.call(null,seq39144__$1);
var seq39144__$2 = cljs.core.next.call(null,seq39144__$1);
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic(G__39145,G__39146,seq39144__$2);
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
var args39162 = [];
var len__19784__auto___39169 = arguments.length;
var i__19785__auto___39170 = (0);
while(true){
if((i__19785__auto___39170 < len__19784__auto___39169)){
args39162.push((arguments[i__19785__auto___39170]));

var G__39171 = (i__19785__auto___39170 + (1));
i__19785__auto___39170 = G__39171;
continue;
} else {
}
break;
}

var G__39167 = args39162.length;
switch (G__39167) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39162.slice((2)),(0)));
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

clojure.core.matrix.le.cljs$lang$applyTo = (function (seq39163){
var G__39164 = cljs.core.first.call(null,seq39163);
var seq39163__$1 = cljs.core.next.call(null,seq39163);
var G__39165 = cljs.core.first.call(null,seq39163__$1);
var seq39163__$2 = cljs.core.next.call(null,seq39163__$1);
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic(G__39164,G__39165,seq39163__$2);
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
var args39176 = [];
var len__19784__auto___39185 = arguments.length;
var i__19785__auto___39186 = (0);
while(true){
if((i__19785__auto___39186 < len__19784__auto___39185)){
args39176.push((arguments[i__19785__auto___39186]));

var G__39187 = (i__19785__auto___39186 + (1));
i__19785__auto___39186 = G__39187;
continue;
} else {
}
break;
}

var G__39183 = args39176.length;
switch (G__39183) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39176.slice((2)),(0)));
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

clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq39177){
var G__39178 = cljs.core.first.call(null,seq39177);
var seq39177__$1 = cljs.core.next.call(null,seq39177);
var G__39179 = cljs.core.first.call(null,seq39177__$1);
var seq39177__$2 = cljs.core.next.call(null,seq39177__$1);
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic(G__39178,G__39179,seq39177__$2);
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
var args39193 = [];
var len__19784__auto___39200 = arguments.length;
var i__19785__auto___39202 = (0);
while(true){
if((i__19785__auto___39202 < len__19784__auto___39200)){
args39193.push((arguments[i__19785__auto___39202]));

var G__39203 = (i__19785__auto___39202 + (1));
i__19785__auto___39202 = G__39203;
continue;
} else {
}
break;
}

var G__39198 = args39193.length;
switch (G__39198) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39193.slice((2)),(0)));
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

clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq39194){
var G__39195 = cljs.core.first.call(null,seq39194);
var seq39194__$1 = cljs.core.next.call(null,seq39194);
var G__39196 = cljs.core.first.call(null,seq39194__$1);
var seq39194__$2 = cljs.core.next.call(null,seq39194__$1);
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic(G__39195,G__39196,seq39194__$2);
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
var args39208 = [];
var len__19784__auto___39217 = arguments.length;
var i__19785__auto___39218 = (0);
while(true){
if((i__19785__auto___39218 < len__19784__auto___39217)){
args39208.push((arguments[i__19785__auto___39218]));

var G__39219 = (i__19785__auto___39218 + (1));
i__19785__auto___39218 = G__39219;
continue;
} else {
}
break;
}

var G__39214 = args39208.length;
switch (G__39214) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39208.slice((2)),(0)));
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

clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq39209){
var G__39210 = cljs.core.first.call(null,seq39209);
var seq39209__$1 = cljs.core.next.call(null,seq39209);
var G__39211 = cljs.core.first.call(null,seq39209__$1);
var seq39209__$2 = cljs.core.next.call(null,seq39209__$1);
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__39210,G__39211,seq39209__$2);
});

clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var args39225 = [];
var len__19784__auto___39233 = arguments.length;
var i__19785__auto___39234 = (0);
while(true){
if((i__19785__auto___39234 < len__19784__auto___39233)){
args39225.push((arguments[i__19785__auto___39234]));

var G__39235 = (i__19785__auto___39234 + (1));
i__19785__auto___39234 = G__39235;
continue;
} else {
}
break;
}

var G__39231 = args39225.length;
switch (G__39231) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39225.slice((2)),(0)));
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

clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq39226){
var G__39227 = cljs.core.first.call(null,seq39226);
var seq39226__$1 = cljs.core.next.call(null,seq39226);
var G__39228 = cljs.core.first.call(null,seq39226__$1);
var seq39226__$2 = cljs.core.next.call(null,seq39226__$1);
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__39227,G__39228,seq39226__$2);
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
var args39245 = [];
var len__19784__auto___39253 = arguments.length;
var i__19785__auto___39254 = (0);
while(true){
if((i__19785__auto___39254 < len__19784__auto___39253)){
args39245.push((arguments[i__19785__auto___39254]));

var G__39255 = (i__19785__auto___39254 + (1));
i__19785__auto___39254 = G__39255;
continue;
} else {
}
break;
}

var G__39251 = args39245.length;
switch (G__39251) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39245.slice((2)),(0)));
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

clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq39246){
var G__39247 = cljs.core.first.call(null,seq39246);
var seq39246__$1 = cljs.core.next.call(null,seq39246);
var G__39248 = cljs.core.first.call(null,seq39246__$1);
var seq39246__$2 = cljs.core.next.call(null,seq39246__$1);
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic(G__39247,G__39248,seq39246__$2);
});

clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2);
/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var args39261 = [];
var len__19784__auto___39270 = arguments.length;
var i__19785__auto___39271 = (0);
while(true){
if((i__19785__auto___39271 < len__19784__auto___39270)){
args39261.push((arguments[i__19785__auto___39271]));

var G__39272 = (i__19785__auto___39271 + (1));
i__19785__auto___39271 = G__39272;
continue;
} else {
}
break;
}

var G__39268 = args39261.length;
switch (G__39268) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39261.slice((2)),(0)));
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

clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq39262){
var G__39263 = cljs.core.first.call(null,seq39262);
var seq39262__$1 = cljs.core.next.call(null,seq39262);
var G__39264 = cljs.core.first.call(null,seq39262__$1);
var seq39262__$2 = cljs.core.next.call(null,seq39262__$1);
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic(G__39263,G__39264,seq39262__$2);
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
var args39280 = [];
var len__19784__auto___39289 = arguments.length;
var i__19785__auto___39290 = (0);
while(true){
if((i__19785__auto___39290 < len__19784__auto___39289)){
args39280.push((arguments[i__19785__auto___39290]));

var G__39291 = (i__19785__auto___39290 + (1));
i__19785__auto___39290 = G__39291;
continue;
} else {
}
break;
}

var G__39287 = args39280.length;
switch (G__39287) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39280.slice((2)),(0)));
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

clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq39281){
var G__39282 = cljs.core.first.call(null,seq39281);
var seq39281__$1 = cljs.core.next.call(null,seq39281);
var G__39283 = cljs.core.first.call(null,seq39281__$1);
var seq39281__$2 = cljs.core.next.call(null,seq39281__$1);
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic(G__39282,G__39283,seq39281__$2);
});

clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2);
/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var args39297 = [];
var len__19784__auto___39305 = arguments.length;
var i__19785__auto___39306 = (0);
while(true){
if((i__19785__auto___39306 < len__19784__auto___39305)){
args39297.push((arguments[i__19785__auto___39306]));

var G__39307 = (i__19785__auto___39306 + (1));
i__19785__auto___39306 = G__39307;
continue;
} else {
}
break;
}

var G__39303 = args39297.length;
switch (G__39303) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39297.slice((2)),(0)));
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

clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq39298){
var G__39299 = cljs.core.first.call(null,seq39298);
var seq39298__$1 = cljs.core.next.call(null,seq39298);
var G__39300 = cljs.core.first.call(null,seq39298__$1);
var seq39298__$2 = cljs.core.next.call(null,seq39298__$1);
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__39299,G__39300,seq39298__$2);
});

clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2);
/**
 * Performs element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var args39316 = [];
var len__19784__auto___39322 = arguments.length;
var i__19785__auto___39323 = (0);
while(true){
if((i__19785__auto___39323 < len__19784__auto___39322)){
args39316.push((arguments[i__19785__auto___39323]));

var G__39324 = (i__19785__auto___39323 + (1));
i__19785__auto___39323 = G__39324;
continue;
} else {
}
break;
}

var G__39321 = args39316.length;
switch (G__39321) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39316.slice((2)),(0)));
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

clojure.core.matrix.div.cljs$lang$applyTo = (function (seq39317){
var G__39318 = cljs.core.first.call(null,seq39317);
var seq39317__$1 = cljs.core.next.call(null,seq39317);
var G__39319 = cljs.core.first.call(null,seq39317__$1);
var seq39317__$2 = cljs.core.next.call(null,seq39317__$1);
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic(G__39318,G__39319,seq39317__$2);
});

clojure.core.matrix.div.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var args39326 = [];
var len__19784__auto___39336 = arguments.length;
var i__19785__auto___39337 = (0);
while(true){
if((i__19785__auto___39337 < len__19784__auto___39336)){
args39326.push((arguments[i__19785__auto___39337]));

var G__39338 = (i__19785__auto___39337 + (1));
i__19785__auto___39337 = G__39338;
continue;
} else {
}
break;
}

var G__39331 = args39326.length;
switch (G__39331) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39326.slice((2)),(0)));
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

var seq__39332_39340 = cljs.core.seq.call(null,more);
var chunk__39333_39341 = null;
var count__39334_39342 = (0);
var i__39335_39343 = (0);
while(true){
if((i__39335_39343 < count__39334_39342)){
var c_39344 = cljs.core._nth.call(null,chunk__39333_39341,i__39335_39343);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_39344);

var G__39345 = seq__39332_39340;
var G__39346 = chunk__39333_39341;
var G__39347 = count__39334_39342;
var G__39348 = (i__39335_39343 + (1));
seq__39332_39340 = G__39345;
chunk__39333_39341 = G__39346;
count__39334_39342 = G__39347;
i__39335_39343 = G__39348;
continue;
} else {
var temp__4657__auto___39349 = cljs.core.seq.call(null,seq__39332_39340);
if(temp__4657__auto___39349){
var seq__39332_39350__$1 = temp__4657__auto___39349;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39332_39350__$1)){
var c__19529__auto___39351 = cljs.core.chunk_first.call(null,seq__39332_39350__$1);
var G__39352 = cljs.core.chunk_rest.call(null,seq__39332_39350__$1);
var G__39353 = c__19529__auto___39351;
var G__39354 = cljs.core.count.call(null,c__19529__auto___39351);
var G__39355 = (0);
seq__39332_39340 = G__39352;
chunk__39333_39341 = G__39353;
count__39334_39342 = G__39354;
i__39335_39343 = G__39355;
continue;
} else {
var c_39356 = cljs.core.first.call(null,seq__39332_39350__$1);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_39356);

var G__39357 = cljs.core.next.call(null,seq__39332_39350__$1);
var G__39358 = null;
var G__39359 = (0);
var G__39360 = (0);
seq__39332_39340 = G__39357;
chunk__39333_39341 = G__39358;
count__39334_39342 = G__39359;
i__39335_39343 = G__39360;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq39327){
var G__39328 = cljs.core.first.call(null,seq39327);
var seq39327__$1 = cljs.core.next.call(null,seq39327);
var G__39329 = cljs.core.first.call(null,seq39327__$1);
var seq39327__$2 = cljs.core.next.call(null,seq39327__$1);
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39328,G__39329,seq39327__$2);
});

clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var args39368 = [];
var len__19784__auto___39384 = arguments.length;
var i__19785__auto___39385 = (0);
while(true){
if((i__19785__auto___39385 < len__19784__auto___39384)){
args39368.push((arguments[i__19785__auto___39385]));

var G__39386 = (i__19785__auto___39385 + (1));
i__19785__auto___39385 = G__39386;
continue;
} else {
}
break;
}

var G__39376 = args39368.length;
switch (G__39376) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39368.slice((2)),(0)));
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

var seq__39379_39391 = cljs.core.seq.call(null,more);
var chunk__39380_39392 = null;
var count__39381_39393 = (0);
var i__39382_39394 = (0);
while(true){
if((i__39382_39394 < count__39381_39393)){
var c_39395 = cljs.core._nth.call(null,chunk__39380_39392,i__39382_39394);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_39395);

var G__39396 = seq__39379_39391;
var G__39397 = chunk__39380_39392;
var G__39398 = count__39381_39393;
var G__39399 = (i__39382_39394 + (1));
seq__39379_39391 = G__39396;
chunk__39380_39392 = G__39397;
count__39381_39393 = G__39398;
i__39382_39394 = G__39399;
continue;
} else {
var temp__4657__auto___39400 = cljs.core.seq.call(null,seq__39379_39391);
if(temp__4657__auto___39400){
var seq__39379_39401__$1 = temp__4657__auto___39400;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39379_39401__$1)){
var c__19529__auto___39402 = cljs.core.chunk_first.call(null,seq__39379_39401__$1);
var G__39403 = cljs.core.chunk_rest.call(null,seq__39379_39401__$1);
var G__39404 = c__19529__auto___39402;
var G__39405 = cljs.core.count.call(null,c__19529__auto___39402);
var G__39406 = (0);
seq__39379_39391 = G__39403;
chunk__39380_39392 = G__39404;
count__39381_39393 = G__39405;
i__39382_39394 = G__39406;
continue;
} else {
var c_39407 = cljs.core.first.call(null,seq__39379_39401__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_39407);

var G__39408 = cljs.core.next.call(null,seq__39379_39401__$1);
var G__39409 = null;
var G__39410 = (0);
var G__39411 = (0);
seq__39379_39391 = G__39408;
chunk__39380_39392 = G__39409;
count__39381_39393 = G__39410;
i__39382_39394 = G__39411;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq39369){
var G__39370 = cljs.core.first.call(null,seq39369);
var seq39369__$1 = cljs.core.next.call(null,seq39369);
var G__39371 = cljs.core.first.call(null,seq39369__$1);
var seq39369__$2 = cljs.core.next.call(null,seq39369__$1);
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39370,G__39371,seq39369__$2);
});

clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var args39415 = [];
var len__19784__auto___39458 = arguments.length;
var i__19785__auto___39459 = (0);
while(true){
if((i__19785__auto___39459 < len__19784__auto___39458)){
args39415.push((arguments[i__19785__auto___39459]));

var G__39460 = (i__19785__auto___39459 + (1));
i__19785__auto___39459 = G__39460;
continue;
} else {
}
break;
}

var G__39420 = args39415.length;
switch (G__39420) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39415.slice((2)),(0)));
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

var seq__39423_39462 = cljs.core.seq.call(null,more);
var chunk__39424_39463 = null;
var count__39425_39464 = (0);
var i__39426_39465 = (0);
while(true){
if((i__39426_39465 < count__39425_39464)){
var c_39487 = cljs.core._nth.call(null,chunk__39424_39463,i__39426_39465);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_39487);

var G__39498 = seq__39423_39462;
var G__39499 = chunk__39424_39463;
var G__39500 = count__39425_39464;
var G__39501 = (i__39426_39465 + (1));
seq__39423_39462 = G__39498;
chunk__39424_39463 = G__39499;
count__39425_39464 = G__39500;
i__39426_39465 = G__39501;
continue;
} else {
var temp__4657__auto___39530 = cljs.core.seq.call(null,seq__39423_39462);
if(temp__4657__auto___39530){
var seq__39423_39536__$1 = temp__4657__auto___39530;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39423_39536__$1)){
var c__19529__auto___39538 = cljs.core.chunk_first.call(null,seq__39423_39536__$1);
var G__39540 = cljs.core.chunk_rest.call(null,seq__39423_39536__$1);
var G__39541 = c__19529__auto___39538;
var G__39542 = cljs.core.count.call(null,c__19529__auto___39538);
var G__39543 = (0);
seq__39423_39462 = G__39540;
chunk__39424_39463 = G__39541;
count__39425_39464 = G__39542;
i__39426_39465 = G__39543;
continue;
} else {
var c_39546 = cljs.core.first.call(null,seq__39423_39536__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_39546);

var G__39549 = cljs.core.next.call(null,seq__39423_39536__$1);
var G__39550 = null;
var G__39551 = (0);
var G__39552 = (0);
seq__39423_39462 = G__39549;
chunk__39424_39463 = G__39550;
count__39425_39464 = G__39551;
i__39426_39465 = G__39552;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq39416){
var G__39417 = cljs.core.first.call(null,seq39416);
var seq39416__$1 = cljs.core.next.call(null,seq39416);
var G__39418 = cljs.core.first.call(null,seq39416__$1);
var seq39416__$2 = cljs.core.next.call(null,seq39416__$1);
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39417,G__39418,seq39416__$2);
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
var args39562 = [];
var len__19784__auto___39581 = arguments.length;
var i__19785__auto___39583 = (0);
while(true){
if((i__19785__auto___39583 < len__19784__auto___39581)){
args39562.push((arguments[i__19785__auto___39583]));

var G__39586 = (i__19785__auto___39583 + (1));
i__19785__auto___39583 = G__39586;
continue;
} else {
}
break;
}

var G__39572 = args39562.length;
switch (G__39572) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39562.slice((2)),(0)));
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

clojure.core.matrix.add.cljs$lang$applyTo = (function (seq39563){
var G__39564 = cljs.core.first.call(null,seq39563);
var seq39563__$1 = cljs.core.next.call(null,seq39563);
var G__39565 = cljs.core.first.call(null,seq39563__$1);
var seq39563__$2 = cljs.core.next.call(null,seq39563__$1);
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic(G__39564,G__39565,seq39563__$2);
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
var args39602 = [];
var len__19784__auto___39624 = arguments.length;
var i__19785__auto___39625 = (0);
while(true){
if((i__19785__auto___39625 < len__19784__auto___39624)){
args39602.push((arguments[i__19785__auto___39625]));

var G__39626 = (i__19785__auto___39625 + (1));
i__19785__auto___39625 = G__39626;
continue;
} else {
}
break;
}

var G__39612 = args39602.length;
switch (G__39612) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39602.slice((2)),(0)));
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

var seq__39615_39630 = cljs.core.seq.call(null,more);
var chunk__39616_39631 = null;
var count__39617_39632 = (0);
var i__39618_39633 = (0);
while(true){
if((i__39618_39633 < count__39617_39632)){
var m_39634 = cljs.core._nth.call(null,chunk__39616_39631,i__39618_39633);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_39634);

var G__39635 = seq__39615_39630;
var G__39636 = chunk__39616_39631;
var G__39637 = count__39617_39632;
var G__39638 = (i__39618_39633 + (1));
seq__39615_39630 = G__39635;
chunk__39616_39631 = G__39636;
count__39617_39632 = G__39637;
i__39618_39633 = G__39638;
continue;
} else {
var temp__4657__auto___39639 = cljs.core.seq.call(null,seq__39615_39630);
if(temp__4657__auto___39639){
var seq__39615_39640__$1 = temp__4657__auto___39639;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39615_39640__$1)){
var c__19529__auto___39641 = cljs.core.chunk_first.call(null,seq__39615_39640__$1);
var G__39642 = cljs.core.chunk_rest.call(null,seq__39615_39640__$1);
var G__39643 = c__19529__auto___39641;
var G__39644 = cljs.core.count.call(null,c__19529__auto___39641);
var G__39645 = (0);
seq__39615_39630 = G__39642;
chunk__39616_39631 = G__39643;
count__39617_39632 = G__39644;
i__39618_39633 = G__39645;
continue;
} else {
var m_39646 = cljs.core.first.call(null,seq__39615_39640__$1);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_39646);

var G__39647 = cljs.core.next.call(null,seq__39615_39640__$1);
var G__39648 = null;
var G__39649 = (0);
var G__39650 = (0);
seq__39615_39630 = G__39647;
chunk__39616_39631 = G__39648;
count__39617_39632 = G__39649;
i__39618_39633 = G__39650;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq39603){
var G__39604 = cljs.core.first.call(null,seq39603);
var seq39603__$1 = cljs.core.next.call(null,seq39603);
var G__39605 = cljs.core.first.call(null,seq39603__$1);
var seq39603__$2 = cljs.core.next.call(null,seq39603__$1);
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39604,G__39605,seq39603__$2);
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
var args39658 = [];
var len__19784__auto___39666 = arguments.length;
var i__19785__auto___39670 = (0);
while(true){
if((i__19785__auto___39670 < len__19784__auto___39666)){
args39658.push((arguments[i__19785__auto___39670]));

var G__39697 = (i__19785__auto___39670 + (1));
i__19785__auto___39670 = G__39697;
continue;
} else {
}
break;
}

var G__39663 = args39658.length;
switch (G__39663) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39658.length)].join('')));

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
var args39762 = [];
var len__19784__auto___39773 = arguments.length;
var i__19785__auto___39774 = (0);
while(true){
if((i__19785__auto___39774 < len__19784__auto___39773)){
args39762.push((arguments[i__19785__auto___39774]));

var G__39778 = (i__19785__auto___39774 + (1));
i__19785__auto___39774 = G__39778;
continue;
} else {
}
break;
}

var G__39768 = args39762.length;
switch (G__39768) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39762.length)].join('')));

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
var args39822 = [];
var len__19784__auto___39835 = arguments.length;
var i__19785__auto___39836 = (0);
while(true){
if((i__19785__auto___39836 < len__19784__auto___39835)){
args39822.push((arguments[i__19785__auto___39836]));

var G__39837 = (i__19785__auto___39836 + (1));
i__19785__auto___39836 = G__39837;
continue;
} else {
}
break;
}

var G__39830 = args39822.length;
switch (G__39830) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39822.length)].join('')));

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
var args39839 = [];
var len__19784__auto___39842 = arguments.length;
var i__19785__auto___39843 = (0);
while(true){
if((i__19785__auto___39843 < len__19784__auto___39842)){
args39839.push((arguments[i__19785__auto___39843]));

var G__39844 = (i__19785__auto___39843 + (1));
i__19785__auto___39843 = G__39844;
continue;
} else {
}
break;
}

var G__39841 = args39839.length;
switch (G__39841) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39839.length)].join('')));

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
var args39846 = [];
var len__19784__auto___39849 = arguments.length;
var i__19785__auto___39850 = (0);
while(true){
if((i__19785__auto___39850 < len__19784__auto___39849)){
args39846.push((arguments[i__19785__auto___39850]));

var G__39851 = (i__19785__auto___39850 + (1));
i__19785__auto___39850 = G__39851;
continue;
} else {
}
break;
}

var G__39848 = args39846.length;
switch (G__39848) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39846.length)].join('')));

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
var args39853 = [];
var len__19784__auto___39859 = arguments.length;
var i__19785__auto___39860 = (0);
while(true){
if((i__19785__auto___39860 < len__19784__auto___39859)){
args39853.push((arguments[i__19785__auto___39860]));

var G__39861 = (i__19785__auto___39860 + (1));
i__19785__auto___39860 = G__39861;
continue;
} else {
}
break;
}

var G__39858 = args39853.length;
switch (G__39858) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39853.slice((2)),(0)));
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

clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq39854){
var G__39855 = cljs.core.first.call(null,seq39854);
var seq39854__$1 = cljs.core.next.call(null,seq39854);
var G__39856 = cljs.core.first.call(null,seq39854__$1);
var seq39854__$2 = cljs.core.next.call(null,seq39854__$1);
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic(G__39855,G__39856,seq39854__$2);
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
var args39863 = [];
var len__19784__auto___39874 = arguments.length;
var i__19785__auto___39875 = (0);
while(true){
if((i__19785__auto___39875 < len__19784__auto___39874)){
args39863.push((arguments[i__19785__auto___39875]));

var G__39876 = (i__19785__auto___39875 + (1));
i__19785__auto___39875 = G__39876;
continue;
} else {
}
break;
}

var G__39868 = args39863.length;
switch (G__39868) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39863.slice((2)),(0)));
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

var seq__39869_39881 = cljs.core.seq.call(null,more);
var chunk__39870_39882 = null;
var count__39871_39883 = (0);
var i__39872_39884 = (0);
while(true){
if((i__39872_39884 < count__39871_39883)){
var m_39885 = cljs.core._nth.call(null,chunk__39870_39882,i__39872_39884);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_39885);

var G__39887 = seq__39869_39881;
var G__39888 = chunk__39870_39882;
var G__39889 = count__39871_39883;
var G__39890 = (i__39872_39884 + (1));
seq__39869_39881 = G__39887;
chunk__39870_39882 = G__39888;
count__39871_39883 = G__39889;
i__39872_39884 = G__39890;
continue;
} else {
var temp__4657__auto___39892 = cljs.core.seq.call(null,seq__39869_39881);
if(temp__4657__auto___39892){
var seq__39869_39893__$1 = temp__4657__auto___39892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39869_39893__$1)){
var c__19529__auto___39894 = cljs.core.chunk_first.call(null,seq__39869_39893__$1);
var G__39895 = cljs.core.chunk_rest.call(null,seq__39869_39893__$1);
var G__39896 = c__19529__auto___39894;
var G__39897 = cljs.core.count.call(null,c__19529__auto___39894);
var G__39898 = (0);
seq__39869_39881 = G__39895;
chunk__39870_39882 = G__39896;
count__39871_39883 = G__39897;
i__39872_39884 = G__39898;
continue;
} else {
var m_39901 = cljs.core.first.call(null,seq__39869_39893__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_39901);

var G__39902 = cljs.core.next.call(null,seq__39869_39893__$1);
var G__39903 = null;
var G__39904 = (0);
var G__39905 = (0);
seq__39869_39881 = G__39902;
chunk__39870_39882 = G__39903;
count__39871_39883 = G__39904;
i__39872_39884 = G__39905;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq39864){
var G__39865 = cljs.core.first.call(null,seq39864);
var seq39864__$1 = cljs.core.next.call(null,seq39864);
var G__39866 = cljs.core.first.call(null,seq39864__$1);
var seq39864__$2 = cljs.core.next.call(null,seq39864__$1);
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39865,G__39866,seq39864__$2);
});

clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var args39910 = [];
var len__19784__auto___39917 = arguments.length;
var i__19785__auto___39918 = (0);
while(true){
if((i__19785__auto___39918 < len__19784__auto___39917)){
args39910.push((arguments[i__19785__auto___39918]));

var G__39920 = (i__19785__auto___39918 + (1));
i__19785__auto___39918 = G__39920;
continue;
} else {
}
break;
}

var G__39915 = args39910.length;
switch (G__39915) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39910.slice((2)),(0)));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale.call(null,m,factor);
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));
});

clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq39911){
var G__39912 = cljs.core.first.call(null,seq39911);
var seq39911__$1 = cljs.core.next.call(null,seq39911);
var G__39913 = cljs.core.first.call(null,seq39911__$1);
var seq39911__$2 = cljs.core.next.call(null,seq39911__$1);
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic(G__39912,G__39913,seq39911__$2);
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
var args39923 = [];
var len__19784__auto___39931 = arguments.length;
var i__19785__auto___39932 = (0);
while(true){
if((i__19785__auto___39932 < len__19784__auto___39931)){
args39923.push((arguments[i__19785__auto___39932]));

var G__39934 = (i__19785__auto___39932 + (1));
i__19785__auto___39932 = G__39934;
continue;
} else {
}
break;
}

var G__39930 = args39923.length;
switch (G__39930) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39923.slice((2)),(0)));
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

clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq39924){
var G__39925 = cljs.core.first.call(null,seq39924);
var seq39924__$1 = cljs.core.next.call(null,seq39924);
var G__39926 = cljs.core.first.call(null,seq39924__$1);
var seq39924__$2 = cljs.core.next.call(null,seq39924__$1);
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39925,G__39926,seq39924__$2);
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
var args39945 = [];
var len__19784__auto___39960 = arguments.length;
var i__19785__auto___39961 = (0);
while(true){
if((i__19785__auto___39961 < len__19784__auto___39960)){
args39945.push((arguments[i__19785__auto___39961]));

var G__39962 = (i__19785__auto___39961 + (1));
i__19785__auto___39961 = G__39962;
continue;
} else {
}
break;
}

var G__39955 = args39945.length;
switch (G__39955) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39945.slice((2)),(0)));
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

clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq39946){
var G__39947 = cljs.core.first.call(null,seq39946);
var seq39946__$1 = cljs.core.next.call(null,seq39946);
var G__39950 = cljs.core.first.call(null,seq39946__$1);
var seq39946__$2 = cljs.core.next.call(null,seq39946__$1);
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic(G__39947,G__39950,seq39946__$2);
});

clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2);
/**
 * Computes the outer product of numerical arrays.
 * 
 * The outer product of two arrays with indexed dimensions {i..j} and {j..k} has dimensions {i..j j..k}, i.e. the dimensioanlity will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var args39970 = [];
var len__19784__auto___39977 = arguments.length;
var i__19785__auto___39978 = (0);
while(true){
if((i__19785__auto___39978 < len__19784__auto___39977)){
args39970.push((arguments[i__19785__auto___39978]));

var G__39979 = (i__19785__auto___39978 + (1));
i__19785__auto___39978 = G__39979;
continue;
} else {
}
break;
}

var G__39976 = args39970.length;
switch (G__39976) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39970.slice((2)),(0)));
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

clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq39971){
var G__39972 = cljs.core.first.call(null,seq39971);
var seq39971__$1 = cljs.core.next.call(null,seq39971);
var G__39973 = cljs.core.first.call(null,seq39971__$1);
var seq39971__$2 = cljs.core.next.call(null,seq39971__$1);
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic(G__39972,G__39973,seq39971__$2);
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
var args39985 = [];
var len__19784__auto___39990 = arguments.length;
var i__19785__auto___39991 = (0);
while(true){
if((i__19785__auto___39991 < len__19784__auto___39990)){
args39985.push((arguments[i__19785__auto___39991]));

var G__39992 = (i__19785__auto___39991 + (1));
i__19785__auto___39991 = G__39992;
continue;
} else {
}
break;
}

var G__39988 = args39985.length;
switch (G__39988) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39985.length)].join('')));

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
var args39995 = [];
var len__19784__auto___40003 = arguments.length;
var i__19785__auto___40004 = (0);
while(true){
if((i__19785__auto___40004 < len__19784__auto___40003)){
args39995.push((arguments[i__19785__auto___40004]));

var G__40005 = (i__19785__auto___40004 + (1));
i__19785__auto___40004 = G__40005;
continue;
} else {
}
break;
}

var G__40001 = args39995.length;
switch (G__40001) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39995.slice((2)),(0)));
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

clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq39996){
var G__39997 = cljs.core.first.call(null,seq39996);
var seq39996__$1 = cljs.core.next.call(null,seq39996);
var G__39998 = cljs.core.first.call(null,seq39996__$1);
var seq39996__$2 = cljs.core.next.call(null,seq39996__$1);
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic(G__39997,G__39998,seq39996__$2);
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
var args40141 = [];
var len__19784__auto___40144 = arguments.length;
var i__19785__auto___40145 = (0);
while(true){
if((i__19785__auto___40145 < len__19784__auto___40144)){
args40141.push((arguments[i__19785__auto___40145]));

var G__40146 = (i__19785__auto___40145 + (1));
i__19785__auto___40145 = G__40146;
continue;
} else {
}
break;
}

var G__40143 = args40141.length;
switch (G__40143) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40141.length)].join('')));

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
var args40152 = [];
var len__19784__auto___40156 = arguments.length;
var i__19785__auto___40157 = (0);
while(true){
if((i__19785__auto___40157 < len__19784__auto___40156)){
args40152.push((arguments[i__19785__auto___40157]));

var G__40159 = (i__19785__auto___40157 + (1));
i__19785__auto___40157 = G__40159;
continue;
} else {
}
break;
}

var G__40155 = args40152.length;
switch (G__40155) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40152.length)].join('')));

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
var args40164 = [];
var len__19784__auto___40177 = arguments.length;
var i__19785__auto___40178 = (0);
while(true){
if((i__19785__auto___40178 < len__19784__auto___40177)){
args40164.push((arguments[i__19785__auto___40178]));

var G__40180 = (i__19785__auto___40178 + (1));
i__19785__auto___40178 = G__40180;
continue;
} else {
}
break;
}

var G__40174 = args40164.length;
switch (G__40174) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40164.slice((3)),(0)));
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

clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq40165){
var G__40166 = cljs.core.first.call(null,seq40165);
var seq40165__$1 = cljs.core.next.call(null,seq40165);
var G__40167 = cljs.core.first.call(null,seq40165__$1);
var seq40165__$2 = cljs.core.next.call(null,seq40165__$1);
var G__40168 = cljs.core.first.call(null,seq40165__$2);
var seq40165__$3 = cljs.core.next.call(null,seq40165__$2);
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic(G__40166,G__40167,G__40168,seq40165__$3);
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
var args40185 = [];
var len__19784__auto___40195 = arguments.length;
var i__19785__auto___40196 = (0);
while(true){
if((i__19785__auto___40196 < len__19784__auto___40195)){
args40185.push((arguments[i__19785__auto___40196]));

var G__40197 = (i__19785__auto___40196 + (1));
i__19785__auto___40196 = G__40197;
continue;
} else {
}
break;
}

var G__40191 = args40185.length;
switch (G__40191) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40185.slice((3)),(0)));
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

clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq40186){
var G__40187 = cljs.core.first.call(null,seq40186);
var seq40186__$1 = cljs.core.next.call(null,seq40186);
var G__40188 = cljs.core.first.call(null,seq40186__$1);
var seq40186__$2 = cljs.core.next.call(null,seq40186__$1);
var G__40189 = cljs.core.first.call(null,seq40186__$2);
var seq40186__$3 = cljs.core.next.call(null,seq40186__$2);
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic(G__40187,G__40188,G__40189,seq40186__$3);
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
var args40203 = [];
var len__19784__auto___40213 = arguments.length;
var i__19785__auto___40214 = (0);
while(true){
if((i__19785__auto___40214 < len__19784__auto___40213)){
args40203.push((arguments[i__19785__auto___40214]));

var G__40215 = (i__19785__auto___40214 + (1));
i__19785__auto___40214 = G__40215;
continue;
} else {
}
break;
}

var G__40212 = args40203.length;
switch (G__40212) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40203.slice((3)),(0)));
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

clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq40204){
var G__40205 = cljs.core.first.call(null,seq40204);
var seq40204__$1 = cljs.core.next.call(null,seq40204);
var G__40206 = cljs.core.first.call(null,seq40204__$1);
var seq40204__$2 = cljs.core.next.call(null,seq40204__$1);
var G__40207 = cljs.core.first.call(null,seq40204__$2);
var seq40204__$3 = cljs.core.next.call(null,seq40204__$2);
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40205,G__40206,G__40207,seq40204__$3);
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
var args40221 = [];
var len__19784__auto___40233 = arguments.length;
var i__19785__auto___40234 = (0);
while(true){
if((i__19785__auto___40234 < len__19784__auto___40233)){
args40221.push((arguments[i__19785__auto___40234]));

var G__40235 = (i__19785__auto___40234 + (1));
i__19785__auto___40234 = G__40235;
continue;
} else {
}
break;
}

var G__40228 = args40221.length;
switch (G__40228) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40221.slice((3)),(0)));
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

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq40222){
var G__40223 = cljs.core.first.call(null,seq40222);
var seq40222__$1 = cljs.core.next.call(null,seq40222);
var G__40224 = cljs.core.first.call(null,seq40222__$1);
var seq40222__$2 = cljs.core.next.call(null,seq40222__$1);
var G__40225 = cljs.core.first.call(null,seq40222__$2);
var seq40222__$3 = cljs.core.next.call(null,seq40222__$2);
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40223,G__40224,G__40225,seq40222__$3);
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
var args40247 = [];
var len__19784__auto___40261 = arguments.length;
var i__19785__auto___40262 = (0);
while(true){
if((i__19785__auto___40262 < len__19784__auto___40261)){
args40247.push((arguments[i__19785__auto___40262]));

var G__40279 = (i__19785__auto___40262 + (1));
i__19785__auto___40262 = G__40279;
continue;
} else {
}
break;
}

var G__40255 = args40247.length;
switch (G__40255) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40247.length)].join('')));

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