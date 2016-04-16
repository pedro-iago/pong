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
var args33022 = [];
var len__19160__auto___33025 = arguments.length;
var i__19161__auto___33026 = (0);
while(true){
if((i__19161__auto___33026 < len__19160__auto___33025)){
args33022.push((arguments[i__19161__auto___33026]));

var G__33027 = (i__19161__auto___33026 + (1));
i__19161__auto___33026 = G__33027;
continue;
} else {
}
break;
}

var G__33024 = args33022.length;
switch (G__33024) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33022.length)].join('')));

}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__18102__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18102__auto__ = clojure.core.matrix.protocols.construct_matrix.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33029 = [];
var len__19160__auto___33032 = arguments.length;
var i__19161__auto___33033 = (0);
while(true){
if((i__19161__auto___33033 < len__19160__auto___33032)){
args33029.push((arguments[i__19161__auto___33033]));

var G__33034 = (i__19161__auto___33033 + (1));
i__19161__auto___33033 = G__33034;
continue;
} else {
}
break;
}

var G__33031 = args33029.length;
switch (G__33031) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33029.length)].join('')));

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
var args33036 = [];
var len__19160__auto___33039 = arguments.length;
var i__19161__auto___33040 = (0);
while(true){
if((i__19161__auto___33040 < len__19160__auto___33039)){
args33036.push((arguments[i__19161__auto___33040]));

var G__33041 = (i__19161__auto___33040 + (1));
i__19161__auto___33040 = G__33041;
continue;
} else {
}
break;
}

var G__33038 = args33036.length;
switch (G__33038) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33036.length)].join('')));

}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__18102__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null),data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.index_coerce.call(null,cljs.core.PersistentVector.EMPTY,data);
}
});

clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18102__auto__ = clojure.core.matrix.protocols.index_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33043 = [];
var len__19160__auto___33046 = arguments.length;
var i__19161__auto___33047 = (0);
while(true){
if((i__19161__auto___33047 < len__19160__auto___33046)){
args33043.push((arguments[i__19161__auto___33047]));

var G__33048 = (i__19161__auto___33047 + (1));
i__19161__auto___33047 = G__33048;
continue;
} else {
}
break;
}

var G__33045 = args33043.length;
switch (G__33045) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33043.length)].join('')));

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
var args33050 = [];
var len__19160__auto___33053 = arguments.length;
var i__19161__auto___33054 = (0);
while(true){
if((i__19161__auto___33054 < len__19160__auto___33053)){
args33050.push((arguments[i__19161__auto___33054]));

var G__33055 = (i__19161__auto___33054 + (1));
i__19161__auto___33054 = G__33055;
continue;
} else {
}
break;
}

var G__33052 = args33050.length;
switch (G__33052) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33050.length)].join('')));

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
var args33057 = [];
var len__19160__auto___33060 = arguments.length;
var i__19161__auto___33061 = (0);
while(true){
if((i__19161__auto___33061 < len__19160__auto___33060)){
args33057.push((arguments[i__19161__auto___33061]));

var G__33062 = (i__19161__auto___33061 + (1));
i__19161__auto___33061 = G__33062;
continue;
} else {
}
break;
}

var G__33059 = args33057.length;
switch (G__33059) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33057.length)].join('')));

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
var args33064 = [];
var len__19160__auto___33067 = arguments.length;
var i__19161__auto___33068 = (0);
while(true){
if((i__19161__auto___33068 < len__19160__auto___33067)){
args33064.push((arguments[i__19161__auto___33068]));

var G__33069 = (i__19161__auto___33068 + (1));
i__19161__auto___33068 = G__33069;
continue;
} else {
}
break;
}

var G__33066 = args33064.length;
switch (G__33066) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33064.length)].join('')));

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
var args33071 = [];
var len__19160__auto___33074 = arguments.length;
var i__19161__auto___33075 = (0);
while(true){
if((i__19161__auto___33075 < len__19160__auto___33074)){
args33071.push((arguments[i__19161__auto___33075]));

var G__33076 = (i__19161__auto___33075 + (1));
i__19161__auto___33075 = G__33076;
continue;
} else {
}
break;
}

var G__33073 = args33071.length;
switch (G__33073) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33071.length)].join('')));

}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__18102__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__18102__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33078 = [];
var len__19160__auto___33081 = arguments.length;
var i__19161__auto___33082 = (0);
while(true){
if((i__19161__auto___33082 < len__19160__auto___33081)){
args33078.push((arguments[i__19161__auto___33082]));

var G__33083 = (i__19161__auto___33082 + (1));
i__19161__auto___33082 = G__33083;
continue;
} else {
}
break;
}

var G__33080 = args33078.length;
switch (G__33080) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33078.length)].join('')));

}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
var or__18102__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,shape);
}
});

clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__18102__auto__ = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
var or__18102__auto____$1 = clojure.core.matrix.protocols.new_matrix_nd.call(null,clojure.core.matrix.implementation_check.call(null),shape);
if(cljs.core.truth_(or__18102__auto____$1)){
return or__18102__auto____$1;
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
var args33085 = [];
var len__19160__auto___33088 = arguments.length;
var i__19161__auto___33089 = (0);
while(true){
if((i__19161__auto___33089 < len__19160__auto___33088)){
args33085.push((arguments[i__19161__auto___33089]));

var G__33090 = (i__19161__auto___33089 + (1));
i__19161__auto___33089 = G__33090;
continue;
} else {
}
break;
}

var G__33087 = args33085.length;
switch (G__33087) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33085.length)].join('')));

}
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),shape);
});

clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,shape){
var or__18102__auto__ = clojure.core.matrix.protocols.new_sparse_array.call(null,clojure.core.matrix.implementation_check.call(null,implementation),shape);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Implementation "),cljs.core.str(clojure.core.matrix.protocols.implementation_key.call(null,implementation)),cljs.core.str(" does not support sparse arrays of shape "),cljs.core.str(cljs.core.vec.call(null,shape))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.new_sparse_array.cljs$lang$maxFixedArity = 2;
/**
 * Returns a new mutable scalar array containing the scalar value zero.
 */
clojure.core.matrix.new_scalar_array = (function clojure$core$matrix$new_scalar_array(var_args){
var args33092 = [];
var len__19160__auto___33095 = arguments.length;
var i__19161__auto___33096 = (0);
while(true){
if((i__19161__auto___33096 < len__19160__auto___33095)){
args33092.push((arguments[i__19161__auto___33096]));

var G__33097 = (i__19161__auto___33096 + (1));
i__19161__auto___33096 = G__33097;
continue;
} else {
}
break;
}

var G__33094 = args33092.length;
switch (G__33094) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33092.length)].join('')));

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
var args33099 = [];
var len__19160__auto___33102 = arguments.length;
var i__19161__auto___33103 = (0);
while(true){
if((i__19161__auto___33103 < len__19160__auto___33102)){
args33099.push((arguments[i__19161__auto___33103]));

var G__33104 = (i__19161__auto___33103 + (1));
i__19161__auto___33103 = G__33104;
continue;
} else {
}
break;
}

var G__33101 = args33099.length;
switch (G__33101) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33099.length)].join('')));

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
var args33106 = [];
var len__19160__auto___33109 = arguments.length;
var i__19161__auto___33110 = (0);
while(true){
if((i__19161__auto___33110 < len__19160__auto___33109)){
args33106.push((arguments[i__19161__auto___33110]));

var G__33111 = (i__19161__auto___33110 + (1));
i__19161__auto___33110 = G__33111;
continue;
} else {
}
break;
}

var G__33108 = args33106.length;
switch (G__33108) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33106.length)].join('')));

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
var args33113 = [];
var len__19160__auto___33116 = arguments.length;
var i__19161__auto___33117 = (0);
while(true){
if((i__19161__auto___33117 < len__19160__auto___33116)){
args33113.push((arguments[i__19161__auto___33117]));

var G__33118 = (i__19161__auto___33117 + (1));
i__19161__auto___33117 = G__33118;
continue;
} else {
}
break;
}

var G__33115 = args33113.length;
switch (G__33115) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33113.length)].join('')));

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
var args33120 = [];
var len__19160__auto___33123 = arguments.length;
var i__19161__auto___33124 = (0);
while(true){
if((i__19161__auto___33124 < len__19160__auto___33123)){
args33120.push((arguments[i__19161__auto___33124]));

var G__33125 = (i__19161__auto___33124 + (1));
i__19161__auto___33124 = G__33125;
continue;
} else {
}
break;
}

var G__33122 = args33120.length;
switch (G__33122) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33120.length)].join('')));

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
var args33127 = [];
var len__19160__auto___33130 = arguments.length;
var i__19161__auto___33131 = (0);
while(true){
if((i__19161__auto___33131 < len__19160__auto___33130)){
args33127.push((arguments[i__19161__auto___33131]));

var G__33132 = (i__19161__auto___33131 + (1));
i__19161__auto___33131 = G__33132;
continue;
} else {
}
break;
}

var G__33129 = args33127.length;
switch (G__33129) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33127.length)].join('')));

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
var args33134 = [];
var len__19160__auto___33137 = arguments.length;
var i__19161__auto___33138 = (0);
while(true){
if((i__19161__auto___33138 < len__19160__auto___33137)){
args33134.push((arguments[i__19161__auto___33138]));

var G__33139 = (i__19161__auto___33138 + (1));
i__19161__auto___33138 = G__33139;
continue;
} else {
}
break;
}

var G__33136 = args33134.length;
switch (G__33136) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33134.length)].join('')));

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
var args33141 = [];
var len__19160__auto___33144 = arguments.length;
var i__19161__auto___33145 = (0);
while(true){
if((i__19161__auto___33145 < len__19160__auto___33144)){
args33141.push((arguments[i__19161__auto___33145]));

var G__33146 = (i__19161__auto___33145 + (1));
i__19161__auto___33145 = G__33146;
continue;
} else {
}
break;
}

var G__33143 = args33141.length;
switch (G__33143) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33141.length)].join('')));

}
});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1 = (function (data){
var or__18102__auto__ = clojure.core.matrix.protocols.mutable_matrix.call(null,data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.mutable.call(null,clojure.core.matrix.implementation_check.call(null),data);
}
});

clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var imp = clojure.core.matrix.implementation_check.call(null,implementation);
var r = clojure.core.matrix.protocols.construct_matrix.call(null,imp,data);
var or__18102__auto__ = (function (){var and__18090__auto__ = r;
if(cljs.core.truth_(and__18090__auto__)){
return clojure.core.matrix.protocols.ensure_mutable.call(null,r);
} else {
return and__18090__auto__;
}
})();
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
var or__18102__auto____$1 = clojure.core.matrix.impl.defaults.construct_mutable_matrix.call(null,data);
if(cljs.core.truth_(or__18102__auto____$1)){
return or__18102__auto____$1;
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
var or__18102__auto__ = clojure.core.matrix.protocols.immutable_matrix.call(null,data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33148 = [];
var len__19160__auto___33151 = arguments.length;
var i__19161__auto___33152 = (0);
while(true){
if((i__19161__auto___33152 < len__19160__auto___33151)){
args33148.push((arguments[i__19161__auto___33152]));

var G__33153 = (i__19161__auto___33152 + (1));
i__19161__auto___33152 = G__33153;
continue;
} else {
}
break;
}

var G__33150 = args33148.length;
switch (G__33150) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33148.length)].join('')));

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
var args33155 = [];
var len__19160__auto___33158 = arguments.length;
var i__19161__auto___33159 = (0);
while(true){
if((i__19161__auto___33159 < len__19160__auto___33158)){
args33155.push((arguments[i__19161__auto___33159]));

var G__33160 = (i__19161__auto___33159 + (1));
i__19161__auto___33159 = G__33160;
continue;
} else {
}
break;
}

var G__33157 = args33155.length;
switch (G__33157) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33155.length)].join('')));

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
var args33162 = [];
var len__19160__auto___33165 = arguments.length;
var i__19161__auto___33166 = (0);
while(true){
if((i__19161__auto___33166 < len__19160__auto___33165)){
args33162.push((arguments[i__19161__auto___33166]));

var G__33167 = (i__19161__auto___33166 + (1));
i__19161__auto___33166 = G__33167;
continue;
} else {
}
break;
}

var G__33164 = args33162.length;
switch (G__33164) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33162.length)].join('')));

}
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.sparse_array.call(null,clojure.core.matrix.implementation_check.call(null),data);
});

clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18102__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,clojure.core.matrix.implementation_check.call(null,implementation),data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33169 = [];
var len__19160__auto___33172 = arguments.length;
var i__19161__auto___33173 = (0);
while(true){
if((i__19161__auto___33173 < len__19160__auto___33172)){
args33169.push((arguments[i__19161__auto___33173]));

var G__33174 = (i__19161__auto___33173 + (1));
i__19161__auto___33173 = G__33174;
continue;
} else {
}
break;
}

var G__33171 = args33169.length;
switch (G__33171) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33169.length)].join('')));

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
var args33176 = [];
var len__19160__auto___33179 = arguments.length;
var i__19161__auto___33180 = (0);
while(true){
if((i__19161__auto___33180 < len__19160__auto___33179)){
args33176.push((arguments[i__19161__auto___33180]));

var G__33181 = (i__19161__auto___33180 + (1));
i__19161__auto___33180 = G__33181;
continue;
} else {
}
break;
}

var G__33178 = args33176.length;
switch (G__33178) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33176.length)].join('')));

}
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.sparse.call(null,data);
});

clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var implementation__$1 = clojure.core.matrix.implementation_check.call(null,implementation);
var or__18102__auto__ = clojure.core.matrix.protocols.sparse_coerce.call(null,implementation__$1,data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33183 = [];
var len__19160__auto___33186 = arguments.length;
var i__19161__auto___33187 = (0);
while(true){
if((i__19161__auto___33187 < len__19160__auto___33186)){
args33183.push((arguments[i__19161__auto___33187]));

var G__33188 = (i__19161__auto___33187 + (1));
i__19161__auto___33187 = G__33188;
continue;
} else {
}
break;
}

var G__33185 = args33183.length;
switch (G__33185) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33183.length)].join('')));

}
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1 = (function (data){
return clojure.core.matrix.protocols.dense.call(null,data);
});

clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2 = (function (implementation,data){
var or__18102__auto__ = clojure.core.matrix.protocols.dense_coerce.call(null,implementation,data);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33190 = [];
var len__19160__auto___33193 = arguments.length;
var i__19161__auto___33194 = (0);
while(true){
if((i__19161__auto___33194 < len__19160__auto___33193)){
args33190.push((arguments[i__19161__auto___33194]));

var G__33195 = (i__19161__auto___33194 + (1));
i__19161__auto___33194 = G__33195;
continue;
} else {
}
break;
}

var G__33192 = args33190.length;
switch (G__33192) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33190.length)].join('')));

}
});

clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1 = (function (a){
var or__18102__auto__ = clojure.core.matrix.protocols.native$.call(null,a);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33197 = [];
var len__19160__auto___33200 = arguments.length;
var i__19161__auto___33201 = (0);
while(true){
if((i__19161__auto___33201 < len__19160__auto___33200)){
args33197.push((arguments[i__19161__auto___33201]));

var G__33202 = (i__19161__auto___33201 + (1));
i__19161__auto___33201 = G__33202;
continue;
} else {
}
break;
}

var G__33199 = args33197.length;
switch (G__33199) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33197.length)].join('')));

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
var args33204 = [];
var len__19160__auto___33207 = arguments.length;
var i__19161__auto___33208 = (0);
while(true){
if((i__19161__auto___33208 < len__19160__auto___33207)){
args33204.push((arguments[i__19161__auto___33208]));

var G__33209 = (i__19161__auto___33208 + (1));
i__19161__auto___33208 = G__33209;
continue;
} else {
}
break;
}

var G__33206 = args33204.length;
switch (G__33206) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33204.length)].join('')));

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
var args33211 = [];
var len__19160__auto___33214 = arguments.length;
var i__19161__auto___33215 = (0);
while(true){
if((i__19161__auto___33215 < len__19160__auto___33214)){
args33211.push((arguments[i__19161__auto___33215]));

var G__33216 = (i__19161__auto___33215 + (1));
i__19161__auto___33215 = G__33216;
continue;
} else {
}
break;
}

var G__33213 = args33211.length;
switch (G__33213) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33211.length)].join('')));

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
var args33218 = [];
var len__19160__auto___33224 = arguments.length;
var i__19161__auto___33225 = (0);
while(true){
if((i__19161__auto___33225 < len__19160__auto___33224)){
args33218.push((arguments[i__19161__auto___33225]));

var G__33226 = (i__19161__auto___33225 + (1));
i__19161__auto___33225 = G__33226;
continue;
} else {
}
break;
}

var G__33223 = args33218.length;
switch (G__33223) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33218.slice((2)),(0)));
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (m){
return true;
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (m,n){
var or__18102__auto__ = (m === n);
if(or__18102__auto__){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m,n);
}
});

clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (m,n,more){
var m__$1 = m;
var n__$1 = n;
var more__$1 = cljs.core.seq.call(null,more);
while(true){
if(cljs.core.truth_((function (){var or__18102__auto__ = (m__$1 === n__$1);
if(or__18102__auto__){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.same_shape_QMARK_.call(null,m__$1,n__$1);
}
})())){
if(more__$1){
var G__33228 = n__$1;
var G__33229 = cljs.core.first.call(null,more__$1);
var G__33230 = cljs.core.next.call(null,more__$1);
m__$1 = G__33228;
n__$1 = G__33229;
more__$1 = G__33230;
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

clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq33219){
var G__33220 = cljs.core.first.call(null,seq33219);
var seq33219__$1 = cljs.core.next.call(null,seq33219);
var G__33221 = cljs.core.first.call(null,seq33219__$1);
var seq33219__$2 = cljs.core.next.call(null,seq33219__$1);
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__33220,G__33221,seq33219__$2);
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
var args33231 = [];
var len__19160__auto___33234 = arguments.length;
var i__19161__auto___33235 = (0);
while(true){
if((i__19161__auto___33235 < len__19160__auto___33234)){
args33231.push((arguments[i__19161__auto___33235]));

var G__33236 = (i__19161__auto___33235 + (1));
i__19161__auto___33235 = G__33236;
continue;
} else {
}
break;
}

var G__33233 = args33231.length;
switch (G__33233) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33231.length)].join('')));

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
var args33238 = [];
var len__19160__auto___33241 = arguments.length;
var i__19161__auto___33242 = (0);
while(true){
if((i__19161__auto___33242 < len__19160__auto___33241)){
args33238.push((arguments[i__19161__auto___33242]));

var G__33243 = (i__19161__auto___33242 + (1));
i__19161__auto___33242 = G__33243;
continue;
} else {
}
break;
}

var G__33240 = args33238.length;
switch (G__33240) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33238.length)].join('')));

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
var args33245 = [];
var len__19160__auto___33248 = arguments.length;
var i__19161__auto___33249 = (0);
while(true){
if((i__19161__auto___33249 < len__19160__auto___33248)){
args33245.push((arguments[i__19161__auto___33249]));

var G__33250 = (i__19161__auto___33249 + (1));
i__19161__auto___33249 = G__33250;
continue;
} else {
}
break;
}

var G__33247 = args33245.length;
switch (G__33247) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33245.length)].join('')));

}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1 = (function (param){
var m = clojure.core.matrix.implementations.get_canonical_object.call(null);
var or__18102__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2 = (function (matrix_or_implementation,param){
var m = (((matrix_or_implementation instanceof cljs.core.Keyword))?clojure.core.matrix.implementations.get_canonical_object.call(null,matrix_or_implementation):matrix_or_implementation);
var or__18102__auto__ = clojure.core.matrix.protocols.coerce_param.call(null,m,param);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.protocols.coerce_param.call(null,m,clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,param));
}
});

clojure.core.matrix.coerce.cljs$lang$maxFixedArity = 2;
/**
 * Gets a scalar value from an array at the specified position. Supports any number of dimensions.
 */
clojure.core.matrix.mget = (function clojure$core$matrix$mget(var_args){
var args33252 = [];
var len__19160__auto___33259 = arguments.length;
var i__19161__auto___33260 = (0);
while(true){
if((i__19161__auto___33260 < len__19160__auto___33259)){
args33252.push((arguments[i__19161__auto___33260]));

var G__33261 = (i__19161__auto___33260 + (1));
i__19161__auto___33260 = G__33261;
continue;
} else {
}
break;
}

var G__33258 = args33252.length;
switch (G__33258) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33252.slice((3)),(0)));
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19179__auto__);

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

clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq33253){
var G__33254 = cljs.core.first.call(null,seq33253);
var seq33253__$1 = cljs.core.next.call(null,seq33253);
var G__33255 = cljs.core.first.call(null,seq33253__$1);
var seq33253__$2 = cljs.core.next.call(null,seq33253__$1);
var G__33256 = cljs.core.first.call(null,seq33253__$2);
var seq33253__$3 = cljs.core.next.call(null,seq33253__$2);
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic(G__33254,G__33255,G__33256,seq33253__$3);
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
var args33263 = [];
var len__19160__auto___33271 = arguments.length;
var i__19161__auto___33272 = (0);
while(true){
if((i__19161__auto___33272 < len__19160__auto___33271)){
args33263.push((arguments[i__19161__auto___33272]));

var G__33273 = (i__19161__auto___33272 + (1));
i__19161__auto___33272 = G__33273;
continue;
} else {
}
break;
}

var G__33270 = args33263.length;
switch (G__33270) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33263.slice((4)),(0)));
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__19179__auto__);

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

clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq33264){
var G__33265 = cljs.core.first.call(null,seq33264);
var seq33264__$1 = cljs.core.next.call(null,seq33264);
var G__33266 = cljs.core.first.call(null,seq33264__$1);
var seq33264__$2 = cljs.core.next.call(null,seq33264__$1);
var G__33267 = cljs.core.first.call(null,seq33264__$2);
var seq33264__$3 = cljs.core.next.call(null,seq33264__$2);
var G__33268 = cljs.core.first.call(null,seq33264__$3);
var seq33264__$4 = cljs.core.next.call(null,seq33264__$3);
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic(G__33265,G__33266,G__33267,G__33268,seq33264__$4);
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
var args33275 = [];
var len__19160__auto___33284 = arguments.length;
var i__19161__auto___33285 = (0);
while(true){
if((i__19161__auto___33285 < len__19160__auto___33284)){
args33275.push((arguments[i__19161__auto___33285]));

var G__33286 = (i__19161__auto___33285 + (1));
i__19161__auto___33285 = G__33286;
continue;
} else {
}
break;
}

var G__33283 = args33275.length;
switch (G__33283) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33275.slice((5)),(0)));
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__19179__auto__);

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

clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq33276){
var G__33277 = cljs.core.first.call(null,seq33276);
var seq33276__$1 = cljs.core.next.call(null,seq33276);
var G__33278 = cljs.core.first.call(null,seq33276__$1);
var seq33276__$2 = cljs.core.next.call(null,seq33276__$1);
var G__33279 = cljs.core.first.call(null,seq33276__$2);
var seq33276__$3 = cljs.core.next.call(null,seq33276__$2);
var G__33280 = cljs.core.first.call(null,seq33276__$3);
var seq33276__$4 = cljs.core.next.call(null,seq33276__$3);
var G__33281 = cljs.core.first.call(null,seq33276__$4);
var seq33276__$5 = cljs.core.next.call(null,seq33276__$4);
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33277,G__33278,G__33279,G__33280,G__33281,seq33276__$5);
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
var G__33288 = slice_func.call(null,m__$1,i,ix);
var G__33289 = i;
var G__33290 = cljs.core.next.call(null,args__$1);
m__$1 = G__33288;
i = G__33289;
args__$1 = G__33290;
continue;
} else {
var G__33291 = m__$1;
var G__33292 = (i + (1));
var G__33293 = cljs.core.next.call(null,args__$1);
m__$1 = G__33291;
i = G__33292;
args__$1 = G__33293;
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
var args__19167__auto__ = [];
var len__19160__auto___33296 = arguments.length;
var i__19161__auto___33297 = (0);
while(true){
if((i__19161__auto___33297 < len__19160__auto___33296)){
args__19167__auto__.push((arguments[i__19161__auto___33297]));

var G__33298 = (i__19161__auto___33297 + (1));
i__19161__auto___33297 = G__33298;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((1) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((1)),(0))):null);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);
});

clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
return clojure.core.matrix.protocols.select.call(null,a__$1,selecting_args);
});

clojure.core.matrix.select.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.select.cljs$lang$applyTo = (function (seq33294){
var G__33295 = cljs.core.first.call(null,seq33294);
var seq33294__$1 = cljs.core.next.call(null,seq33294);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic(G__33295,seq33294__$1);
});
/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__19167__auto__ = [];
var len__19160__auto___33301 = arguments.length;
var i__19161__auto___33302 = (0);
while(true){
if((i__19161__auto___33302 < len__19160__auto___33301)){
args__19167__auto__.push((arguments[i__19161__auto___33302]));

var G__33303 = (i__19161__auto___33302 + (1));
i__19161__auto___33302 = G__33303;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((1) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((1)),(0))):null);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);
});

clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var args__$1 = clojure.core.matrix.normalise_args.call(null,args,a);
var a__$1 = clojure.core.matrix.slice_dims.call(null,a,args__$1,clojure.core.matrix.slice_view);
var selecting_args = cljs.core.filterv.call(null,cljs.core.complement.call(null,cljs.core.number_QMARK_),args__$1);
var or__18102__auto__ = clojure.core.matrix.protocols.select_view.call(null,a__$1,selecting_args);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
return clojure.core.matrix.impl.wrappers.wrap_selection.call(null,a__$1,selecting_args);
}
});

clojure.core.matrix.select_view.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq33299){
var G__33300 = cljs.core.first.call(null,seq33299);
var seq33299__$1 = cljs.core.next.call(null,seq33299);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic(G__33300,seq33299__$1);
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
var args__19167__auto__ = [];
var len__19160__auto___33306 = arguments.length;
var i__19161__auto___33307 = (0);
while(true){
if((i__19161__auto___33307 < len__19160__auto___33306)){
args__19167__auto__.push((arguments[i__19161__auto___33307]));

var G__33308 = (i__19161__auto___33307 + (1));
i__19161__auto___33307 = G__33308;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((1) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((1)),(0))):null);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);
});

clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var value = cljs.core.last.call(null,args);
var args__$1 = cljs.core.butlast.call(null,args);
clojure.core.matrix.assign_BANG_.call(null,cljs.core.apply.call(null,clojure.core.matrix.select_view,a,args__$1),value);

return a;
});

clojure.core.matrix.set_selection_BANG_.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq33304){
var G__33305 = cljs.core.first.call(null,seq33304);
var seq33304__$1 = cljs.core.next.call(null,seq33304);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33305,seq33304__$1);
});
/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__19167__auto__ = [];
var len__19160__auto___33311 = arguments.length;
var i__19161__auto___33312 = (0);
while(true){
if((i__19161__auto___33312 < len__19160__auto___33311)){
args__19167__auto__.push((arguments[i__19161__auto___33312]));

var G__33313 = (i__19161__auto___33312 + (1));
i__19161__auto___33312 = G__33313;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((1) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((1)),(0))):null);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);
});

clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic = (function (a,args){
var a__$1 = clojure.core.matrix.mutable.call(null,a);
var r = cljs.core.apply.call(null,clojure.core.matrix.set_selection_BANG_,a__$1,args);
return clojure.core.matrix.coerce.call(null,a__$1,r);
});

clojure.core.matrix.set_selection.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq33309){
var G__33310 = cljs.core.first.call(null,seq33309);
var seq33309__$1 = cljs.core.next.call(null,seq33309);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic(G__33310,seq33309__$1);
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
var args33314 = [];
var len__19160__auto___33317 = arguments.length;
var i__19161__auto___33318 = (0);
while(true){
if((i__19161__auto___33318 < len__19160__auto___33317)){
args33314.push((arguments[i__19161__auto___33318]));

var G__33319 = (i__19161__auto___33318 + (1));
i__19161__auto___33318 = G__33319;
continue;
} else {
}
break;
}

var G__33316 = args33314.length;
switch (G__33316) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33314.length)].join('')));

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
var args33321 = [];
var len__19160__auto___33324 = arguments.length;
var i__19161__auto___33325 = (0);
while(true){
if((i__19161__auto___33325 < len__19160__auto___33324)){
args33321.push((arguments[i__19161__auto___33325]));

var G__33326 = (i__19161__auto___33325 + (1));
i__19161__auto___33325 = G__33326;
continue;
} else {
}
break;
}

var G__33323 = args33321.length;
switch (G__33323) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33321.length)].join('')));

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
var args33328 = [];
var len__19160__auto___33331 = arguments.length;
var i__19161__auto___33332 = (0);
while(true){
if((i__19161__auto___33332 < len__19160__auto___33331)){
args33328.push((arguments[i__19161__auto___33332]));

var G__33333 = (i__19161__auto___33332 + (1));
i__19161__auto___33332 = G__33333;
continue;
} else {
}
break;
}

var G__33330 = args33328.length;
switch (G__33330) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33328.length)].join('')));

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
var args33336 = [];
var len__19160__auto___33339 = arguments.length;
var i__19161__auto___33340 = (0);
while(true){
if((i__19161__auto___33340 < len__19160__auto___33339)){
args33336.push((arguments[i__19161__auto___33340]));

var G__33341 = (i__19161__auto___33340 + (1));
i__19161__auto___33340 = G__33341;
continue;
} else {
}
break;
}

var G__33338 = args33336.length;
switch (G__33338) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33336.length)].join('')));

}
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m);
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.slice_views.call(null,m);
} else {
return cljs.core.map.call(null,(function (p1__33335_SHARP_){
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,p1__33335_SHARP_);
}),cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));
}
});

clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2;
/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var args33343 = [];
var len__19160__auto___33346 = arguments.length;
var i__19161__auto___33347 = (0);
while(true){
if((i__19161__auto___33347 < len__19160__auto___33346)){
args33343.push((arguments[i__19161__auto___33347]));

var G__33348 = (i__19161__auto___33347 + (1));
i__19161__auto___33347 = G__33348;
continue;
} else {
}
break;
}

var G__33345 = args33343.length;
switch (G__33345) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33343.length)].join('')));

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
var args33350 = [];
var len__19160__auto___33353 = arguments.length;
var i__19161__auto___33354 = (0);
while(true){
if((i__19161__auto___33354 < len__19160__auto___33353)){
args33350.push((arguments[i__19161__auto___33354]));

var G__33355 = (i__19161__auto___33354 + (1));
i__19161__auto___33354 = G__33355;
continue;
} else {
}
break;
}

var G__33352 = args33350.length;
switch (G__33352) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33350.length)].join('')));

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
var args__19167__auto__ = [];
var len__19160__auto___33358 = arguments.length;
var i__19161__auto___33359 = (0);
while(true){
if((i__19161__auto___33359 < len__19160__auto___33358)){
args__19167__auto__.push((arguments[i__19161__auto___33359]));

var G__33360 = (i__19161__auto___33359 + (1));
i__19161__auto___33359 = G__33360;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((0) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((0)),(0))):null);
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(argseq__19168__auto__);
});

clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic = (function (arrays){
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.join,arrays);
});

clojure.core.matrix.join.cljs$lang$maxFixedArity = (0);

clojure.core.matrix.join.cljs$lang$applyTo = (function (seq33357){
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33357));
});
/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__19167__auto__ = [];
var len__19160__auto___33365 = arguments.length;
var i__19161__auto___33366 = (0);
while(true){
if((i__19161__auto___33366 < len__19160__auto___33365)){
args__19167__auto__.push((arguments[i__19161__auto___33366]));

var G__33367 = (i__19161__auto___33366 + (1));
i__19161__auto___33366 = G__33367;
continue;
} else {
}
break;
}

var argseq__19168__auto__ = ((((1) < args__19167__auto__.length))?(new cljs.core.IndexedSeq(args__19167__auto__.slice((1)),(0))):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19168__auto__);
});

clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__18102__auto__ = cljs.core.reduce.call(null,(function (p1__33361_SHARP_,p2__33362_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__33361_SHARP_,p2__33362_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Failure to joins arrays")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq33363){
var G__33364 = cljs.core.first.call(null,seq33363);
var seq33363__$1 = cljs.core.next.call(null,seq33363);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic(G__33364,seq33363__$1);
});
/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var args33369 = [];
var len__19160__auto___33375 = arguments.length;
var i__19161__auto___33376 = (0);
while(true){
if((i__19161__auto___33376 < len__19160__auto___33375)){
args33369.push((arguments[i__19161__auto___33376]));

var G__33377 = (i__19161__auto___33376 + (1));
i__19161__auto___33376 = G__33377;
continue;
} else {
}
break;
}

var G__33374 = args33369.length;
switch (G__33374) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33369.slice((2)),(0)));
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var ss = cljs.core.assoc.call(null,cljs.core.vec.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)),(0),(1));
return clojure.core.matrix.join.call(null,a,clojure.core.matrix.protocols.broadcast.call(null,b,ss));
});

clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var ss = cljs.core.vec.call(null,cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,a)));
var slcs = cljs.core.mapv.call(null,((function (ss){
return (function (p1__33368_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__33368_SHARP_,ss);
});})(ss))
,cljs.core.cons.call(null,b,more));
return clojure.core.matrix.join.call(null,a,slcs);
});

clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq33370){
var G__33371 = cljs.core.first.call(null,seq33370);
var seq33370__$1 = cljs.core.next.call(null,seq33370);
var G__33372 = cljs.core.first.call(null,seq33370__$1);
var seq33370__$2 = cljs.core.next.call(null,seq33370__$1);
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic(G__33371,G__33372,seq33370__$2);
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
var args33379 = [];
var len__19160__auto___33386 = arguments.length;
var i__19161__auto___33387 = (0);
while(true){
if((i__19161__auto___33387 < len__19160__auto___33386)){
args33379.push((arguments[i__19161__auto___33387]));

var G__33388 = (i__19161__auto___33387 + (1));
i__19161__auto___33387 = G__33388;
continue;
} else {
}
break;
}

var G__33385 = args33379.length;
switch (G__33385) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33379.slice((3)),(0)));
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19179__auto__);

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

clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq33380){
var G__33381 = cljs.core.first.call(null,seq33380);
var seq33380__$1 = cljs.core.next.call(null,seq33380);
var G__33382 = cljs.core.first.call(null,seq33380__$1);
var seq33380__$2 = cljs.core.next.call(null,seq33380__$1);
var G__33383 = cljs.core.first.call(null,seq33380__$2);
var seq33380__$3 = cljs.core.next.call(null,seq33380__$2);
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic(G__33381,G__33382,G__33383,seq33380__$3);
});

clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3);
/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var args33390 = [];
var len__19160__auto___33393 = arguments.length;
var i__19161__auto___33394 = (0);
while(true){
if((i__19161__auto___33394 < len__19160__auto___33393)){
args33390.push((arguments[i__19161__auto___33394]));

var G__33395 = (i__19161__auto___33394 + (1));
i__19161__auto___33394 = G__33395;
continue;
} else {
}
break;
}

var G__33392 = args33390.length;
switch (G__33392) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33390.length)].join('')));

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
var args33397 = [];
var len__19160__auto___33400 = arguments.length;
var i__19161__auto___33401 = (0);
while(true){
if((i__19161__auto___33401 < len__19160__auto___33400)){
args33397.push((arguments[i__19161__auto___33401]));

var G__33402 = (i__19161__auto___33401 + (1));
i__19161__auto___33401 = G__33402;
continue;
} else {
}
break;
}

var G__33399 = args33397.length;
switch (G__33399) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33397.length)].join('')));

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
var args33404 = [];
var len__19160__auto___33407 = arguments.length;
var i__19161__auto___33408 = (0);
while(true){
if((i__19161__auto___33408 < len__19160__auto___33407)){
args33404.push((arguments[i__19161__auto___33408]));

var G__33409 = (i__19161__auto___33408 + (1));
i__19161__auto___33408 = G__33409;
continue;
} else {
}
break;
}

var G__33406 = args33404.length;
switch (G__33406) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33404.length)].join('')));

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
var or__18102__auto__ = clojure.core.matrix.protocols.to_vector.call(null,m);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var or__18102__auto__ = clojure.core.matrix.protocols.broadcast.call(null,m,shape);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33411 = [];
var len__19160__auto___33414 = arguments.length;
var i__19161__auto___33415 = (0);
while(true){
if((i__19161__auto___33415 < len__19160__auto___33414)){
args33411.push((arguments[i__19161__auto___33415]));

var G__33416 = (i__19161__auto___33415 + (1));
i__19161__auto___33415 = G__33416;
continue;
} else {
}
break;
}

var G__33413 = args33411.length;
switch (G__33413) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33411.length)].join('')));

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
var args33418 = [];
var len__19160__auto___33421 = arguments.length;
var i__19161__auto___33422 = (0);
while(true){
if((i__19161__auto___33422 < len__19160__auto___33421)){
args33418.push((arguments[i__19161__auto___33422]));

var G__33423 = (i__19161__auto___33422 + (1));
i__19161__auto___33422 = G__33423;
continue;
} else {
}
break;
}

var G__33420 = args33418.length;
switch (G__33420) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33418.length)].join('')));

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
var args33425 = [];
var len__19160__auto___33431 = arguments.length;
var i__19161__auto___33432 = (0);
while(true){
if((i__19161__auto___33432 < len__19160__auto___33431)){
args33425.push((arguments[i__19161__auto___33432]));

var G__33433 = (i__19161__auto___33432 + (1));
i__19161__auto___33432 = G__33433;
continue;
} else {
}
break;
}

var G__33430 = args33425.length;
switch (G__33430) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33425.slice((2)),(0)));
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_lt.call(null,m,a);
});

clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_lt),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq33426){
var G__33427 = cljs.core.first.call(null,seq33426);
var seq33426__$1 = cljs.core.next.call(null,seq33426);
var G__33428 = cljs.core.first.call(null,seq33426__$1);
var seq33426__$2 = cljs.core.next.call(null,seq33426__$1);
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic(G__33427,G__33428,seq33426__$2);
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
var args33435 = [];
var len__19160__auto___33441 = arguments.length;
var i__19161__auto___33442 = (0);
while(true){
if((i__19161__auto___33442 < len__19160__auto___33441)){
args33435.push((arguments[i__19161__auto___33442]));

var G__33443 = (i__19161__auto___33442 + (1));
i__19161__auto___33442 = G__33443;
continue;
} else {
}
break;
}

var G__33440 = args33435.length;
switch (G__33440) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33435.slice((2)),(0)));
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_le.call(null,m,a);
});

clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_le),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.le.cljs$lang$applyTo = (function (seq33436){
var G__33437 = cljs.core.first.call(null,seq33436);
var seq33436__$1 = cljs.core.next.call(null,seq33436);
var G__33438 = cljs.core.first.call(null,seq33436__$1);
var seq33436__$2 = cljs.core.next.call(null,seq33436__$1);
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic(G__33437,G__33438,seq33436__$2);
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
var args33445 = [];
var len__19160__auto___33451 = arguments.length;
var i__19161__auto___33452 = (0);
while(true){
if((i__19161__auto___33452 < len__19160__auto___33451)){
args33445.push((arguments[i__19161__auto___33452]));

var G__33453 = (i__19161__auto___33452 + (1));
i__19161__auto___33452 = G__33453;
continue;
} else {
}
break;
}

var G__33450 = args33445.length;
switch (G__33450) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33445.slice((2)),(0)));
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_gt.call(null,m,a);
});

clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_gt),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq33446){
var G__33447 = cljs.core.first.call(null,seq33446);
var seq33446__$1 = cljs.core.next.call(null,seq33446);
var G__33448 = cljs.core.first.call(null,seq33446__$1);
var seq33446__$2 = cljs.core.next.call(null,seq33446__$1);
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic(G__33447,G__33448,seq33446__$2);
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
var args33455 = [];
var len__19160__auto___33461 = arguments.length;
var i__19161__auto___33462 = (0);
while(true){
if((i__19161__auto___33462 < len__19160__auto___33461)){
args33455.push((arguments[i__19161__auto___33462]));

var G__33463 = (i__19161__auto___33462 + (1));
i__19161__auto___33462 = G__33463;
continue;
} else {
}
break;
}

var G__33460 = args33455.length;
switch (G__33460) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33455.slice((2)),(0)));
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2 = (function (m,a){
return clojure.core.matrix.protocols.element_ge.call(null,m,a);
});

clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic = (function (m,a,more){
var arrays = cljs.core.cons.call(null,m,cljs.core.cons.call(null,a,more));
return cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,clojure.core.matrix.protocols.element_ge),cljs.core.partition.call(null,(2),(1),arrays)));
});

clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq33456){
var G__33457 = cljs.core.first.call(null,seq33456);
var seq33456__$1 = cljs.core.next.call(null,seq33456);
var G__33458 = cljs.core.first.call(null,seq33456__$1);
var seq33456__$2 = cljs.core.next.call(null,seq33456__$1);
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic(G__33457,G__33458,seq33456__$2);
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
var args33465 = [];
var len__19160__auto___33471 = arguments.length;
var i__19161__auto___33472 = (0);
while(true){
if((i__19161__auto___33472 < len__19160__auto___33471)){
args33465.push((arguments[i__19161__auto___33472]));

var G__33473 = (i__19161__auto___33472 + (1));
i__19161__auto___33472 = G__33473;
continue;
} else {
}
break;
}

var G__33470 = args33465.length;
switch (G__33470) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33465.slice((2)),(0)));
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (m1){
return true;
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (m1,m2){
return clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
});

clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (m1,m2,more){
var and__18090__auto__ = clojure.core.matrix.protocols.value_equals.call(null,m1,m2);
if(cljs.core.truth_(and__18090__auto__)){
return cljs.core.apply.call(null,clojure.core.matrix.e_EQ_,m2,more);
} else {
return and__18090__auto__;
}
});

clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq33466){
var G__33467 = cljs.core.first.call(null,seq33466);
var seq33466__$1 = cljs.core.next.call(null,seq33466);
var G__33468 = cljs.core.first.call(null,seq33466__$1);
var seq33466__$2 = cljs.core.next.call(null,seq33466__$1);
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33467,G__33468,seq33466__$2);
});

clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var args33475 = [];
var len__19160__auto___33481 = arguments.length;
var i__19161__auto___33482 = (0);
while(true){
if((i__19161__auto___33482 < len__19160__auto___33481)){
args33475.push((arguments[i__19161__auto___33482]));

var G__33483 = (i__19161__auto___33482 + (1));
i__19161__auto___33482 = G__33483;
continue;
} else {
}
break;
}

var G__33480 = args33475.length;
switch (G__33480) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33475.slice((2)),(0)));
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq33476){
var G__33477 = cljs.core.first.call(null,seq33476);
var seq33476__$1 = cljs.core.next.call(null,seq33476);
var G__33478 = cljs.core.first.call(null,seq33476__$1);
var seq33476__$2 = cljs.core.next.call(null,seq33476__$1);
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33477,G__33478,seq33476__$2);
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
var and__18090__auto__ = ls;
if(cljs.core.truth_(and__18090__auto__)){
return clojure.core.matrix.utils.find_index.call(null,ls,label);
} else {
return and__18090__auto__;
}
});
/**
 * Performs element-wise multiplication with scalars and numerical arrays.
 * 
 * Behaves like clojure.core/* for scalar values.
 */
clojure.core.matrix.mul = (function clojure$core$matrix$mul(var_args){
var args33485 = [];
var len__19160__auto___33491 = arguments.length;
var i__19161__auto___33492 = (0);
while(true){
if((i__19161__auto___33492 < len__19160__auto___33491)){
args33485.push((arguments[i__19161__auto___33492]));

var G__33493 = (i__19161__auto___33492 + (1));
i__19161__auto___33492 = G__33493;
continue;
} else {
}
break;
}

var G__33490 = args33485.length;
switch (G__33490) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33485.slice((2)),(0)));
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq33486){
var G__33487 = cljs.core.first.call(null,seq33486);
var seq33486__$1 = cljs.core.next.call(null,seq33486);
var G__33488 = cljs.core.first.call(null,seq33486__$1);
var seq33486__$2 = cljs.core.next.call(null,seq33486__$1);
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic(G__33487,G__33488,seq33486__$2);
});

clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2);
/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var args33495 = [];
var len__19160__auto___33501 = arguments.length;
var i__19161__auto___33502 = (0);
while(true){
if((i__19161__auto___33502 < len__19160__auto___33501)){
args33495.push((arguments[i__19161__auto___33502]));

var G__33503 = (i__19161__auto___33502 + (1));
i__19161__auto___33502 = G__33503;
continue;
} else {
}
break;
}

var G__33500 = args33495.length;
switch (G__33500) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33495.slice((2)),(0)));
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq33496){
var G__33497 = cljs.core.first.call(null,seq33496);
var seq33496__$1 = cljs.core.next.call(null,seq33496);
var G__33498 = cljs.core.first.call(null,seq33496__$1);
var seq33496__$2 = cljs.core.next.call(null,seq33496__$1);
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic(G__33497,G__33498,seq33496__$2);
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
var args33505 = [];
var len__19160__auto___33511 = arguments.length;
var i__19161__auto___33512 = (0);
while(true){
if((i__19161__auto___33512 < len__19160__auto___33511)){
args33505.push((arguments[i__19161__auto___33512]));

var G__33513 = (i__19161__auto___33512 + (1));
i__19161__auto___33512 = G__33513;
continue;
} else {
}
break;
}

var G__33510 = args33505.length;
switch (G__33510) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33505.slice((2)),(0)));
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq33506){
var G__33507 = cljs.core.first.call(null,seq33506);
var seq33506__$1 = cljs.core.next.call(null,seq33506);
var G__33508 = cljs.core.first.call(null,seq33506__$1);
var seq33506__$2 = cljs.core.next.call(null,seq33506__$1);
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic(G__33507,G__33508,seq33506__$2);
});

clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2);
/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var args33515 = [];
var len__19160__auto___33521 = arguments.length;
var i__19161__auto___33522 = (0);
while(true){
if((i__19161__auto___33522 < len__19160__auto___33521)){
args33515.push((arguments[i__19161__auto___33522]));

var G__33523 = (i__19161__auto___33522 + (1));
i__19161__auto___33522 = G__33523;
continue;
} else {
}
break;
}

var G__33520 = args33515.length;
switch (G__33520) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33515.slice((2)),(0)));
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq33516){
var G__33517 = cljs.core.first.call(null,seq33516);
var seq33516__$1 = cljs.core.next.call(null,seq33516);
var G__33518 = cljs.core.first.call(null,seq33516__$1);
var seq33516__$2 = cljs.core.next.call(null,seq33516__$1);
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__33517,G__33518,seq33516__$2);
});

clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2);
/**
 * Performs element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var args33525 = [];
var len__19160__auto___33531 = arguments.length;
var i__19161__auto___33532 = (0);
while(true){
if((i__19161__auto___33532 < len__19160__auto___33531)){
args33525.push((arguments[i__19161__auto___33532]));

var G__33533 = (i__19161__auto___33532 + (1));
i__19161__auto___33532 = G__33533;
continue;
} else {
}
break;
}

var G__33530 = args33525.length;
switch (G__33530) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33525.slice((2)),(0)));
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.div.cljs$lang$applyTo = (function (seq33526){
var G__33527 = cljs.core.first.call(null,seq33526);
var seq33526__$1 = cljs.core.next.call(null,seq33526);
var G__33528 = cljs.core.first.call(null,seq33526__$1);
var seq33526__$2 = cljs.core.next.call(null,seq33526__$1);
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic(G__33527,G__33528,seq33526__$2);
});

clojure.core.matrix.div.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var args33535 = [];
var len__19160__auto___33545 = arguments.length;
var i__19161__auto___33546 = (0);
while(true){
if((i__19161__auto___33546 < len__19160__auto___33545)){
args33535.push((arguments[i__19161__auto___33546]));

var G__33547 = (i__19161__auto___33546 + (1));
i__19161__auto___33546 = G__33547;
continue;
} else {
}
break;
}

var G__33540 = args33535.length;
switch (G__33540) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33535.slice((2)),(0)));
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33541_33549 = cljs.core.seq.call(null,more);
var chunk__33542_33550 = null;
var count__33543_33551 = (0);
var i__33544_33552 = (0);
while(true){
if((i__33544_33552 < count__33543_33551)){
var c_33553 = cljs.core._nth.call(null,chunk__33542_33550,i__33544_33552);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_33553);

var G__33554 = seq__33541_33549;
var G__33555 = chunk__33542_33550;
var G__33556 = count__33543_33551;
var G__33557 = (i__33544_33552 + (1));
seq__33541_33549 = G__33554;
chunk__33542_33550 = G__33555;
count__33543_33551 = G__33556;
i__33544_33552 = G__33557;
continue;
} else {
var temp__4657__auto___33558 = cljs.core.seq.call(null,seq__33541_33549);
if(temp__4657__auto___33558){
var seq__33541_33559__$1 = temp__4657__auto___33558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33541_33559__$1)){
var c__18905__auto___33560 = cljs.core.chunk_first.call(null,seq__33541_33559__$1);
var G__33561 = cljs.core.chunk_rest.call(null,seq__33541_33559__$1);
var G__33562 = c__18905__auto___33560;
var G__33563 = cljs.core.count.call(null,c__18905__auto___33560);
var G__33564 = (0);
seq__33541_33549 = G__33561;
chunk__33542_33550 = G__33562;
count__33543_33551 = G__33563;
i__33544_33552 = G__33564;
continue;
} else {
var c_33565 = cljs.core.first.call(null,seq__33541_33559__$1);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_33565);

var G__33566 = cljs.core.next.call(null,seq__33541_33559__$1);
var G__33567 = null;
var G__33568 = (0);
var G__33569 = (0);
seq__33541_33549 = G__33566;
chunk__33542_33550 = G__33567;
count__33543_33551 = G__33568;
i__33544_33552 = G__33569;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq33536){
var G__33537 = cljs.core.first.call(null,seq33536);
var seq33536__$1 = cljs.core.next.call(null,seq33536);
var G__33538 = cljs.core.first.call(null,seq33536__$1);
var seq33536__$2 = cljs.core.next.call(null,seq33536__$1);
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33537,G__33538,seq33536__$2);
});

clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var args33570 = [];
var len__19160__auto___33580 = arguments.length;
var i__19161__auto___33581 = (0);
while(true){
if((i__19161__auto___33581 < len__19160__auto___33580)){
args33570.push((arguments[i__19161__auto___33581]));

var G__33582 = (i__19161__auto___33581 + (1));
i__19161__auto___33581 = G__33582;
continue;
} else {
}
break;
}

var G__33575 = args33570.length;
switch (G__33575) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33570.slice((2)),(0)));
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33576_33584 = cljs.core.seq.call(null,more);
var chunk__33577_33585 = null;
var count__33578_33586 = (0);
var i__33579_33587 = (0);
while(true){
if((i__33579_33587 < count__33578_33586)){
var c_33588 = cljs.core._nth.call(null,chunk__33577_33585,i__33579_33587);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_33588);

var G__33589 = seq__33576_33584;
var G__33590 = chunk__33577_33585;
var G__33591 = count__33578_33586;
var G__33592 = (i__33579_33587 + (1));
seq__33576_33584 = G__33589;
chunk__33577_33585 = G__33590;
count__33578_33586 = G__33591;
i__33579_33587 = G__33592;
continue;
} else {
var temp__4657__auto___33593 = cljs.core.seq.call(null,seq__33576_33584);
if(temp__4657__auto___33593){
var seq__33576_33594__$1 = temp__4657__auto___33593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33576_33594__$1)){
var c__18905__auto___33595 = cljs.core.chunk_first.call(null,seq__33576_33594__$1);
var G__33596 = cljs.core.chunk_rest.call(null,seq__33576_33594__$1);
var G__33597 = c__18905__auto___33595;
var G__33598 = cljs.core.count.call(null,c__18905__auto___33595);
var G__33599 = (0);
seq__33576_33584 = G__33596;
chunk__33577_33585 = G__33597;
count__33578_33586 = G__33598;
i__33579_33587 = G__33599;
continue;
} else {
var c_33600 = cljs.core.first.call(null,seq__33576_33594__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_33600);

var G__33601 = cljs.core.next.call(null,seq__33576_33594__$1);
var G__33602 = null;
var G__33603 = (0);
var G__33604 = (0);
seq__33576_33584 = G__33601;
chunk__33577_33585 = G__33602;
count__33578_33586 = G__33603;
i__33579_33587 = G__33604;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq33571){
var G__33572 = cljs.core.first.call(null,seq33571);
var seq33571__$1 = cljs.core.next.call(null,seq33571);
var G__33573 = cljs.core.first.call(null,seq33571__$1);
var seq33571__$2 = cljs.core.next.call(null,seq33571__$1);
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33572,G__33573,seq33571__$2);
});

clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var args33605 = [];
var len__19160__auto___33615 = arguments.length;
var i__19161__auto___33616 = (0);
while(true){
if((i__19161__auto___33616 < len__19160__auto___33615)){
args33605.push((arguments[i__19161__auto___33616]));

var G__33617 = (i__19161__auto___33616 + (1));
i__19161__auto___33616 = G__33617;
continue;
} else {
}
break;
}

var G__33610 = args33605.length;
switch (G__33610) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33605.slice((2)),(0)));
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33611_33619 = cljs.core.seq.call(null,more);
var chunk__33612_33620 = null;
var count__33613_33621 = (0);
var i__33614_33622 = (0);
while(true){
if((i__33614_33622 < count__33613_33621)){
var c_33623 = cljs.core._nth.call(null,chunk__33612_33620,i__33614_33622);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_33623);

var G__33624 = seq__33611_33619;
var G__33625 = chunk__33612_33620;
var G__33626 = count__33613_33621;
var G__33627 = (i__33614_33622 + (1));
seq__33611_33619 = G__33624;
chunk__33612_33620 = G__33625;
count__33613_33621 = G__33626;
i__33614_33622 = G__33627;
continue;
} else {
var temp__4657__auto___33628 = cljs.core.seq.call(null,seq__33611_33619);
if(temp__4657__auto___33628){
var seq__33611_33629__$1 = temp__4657__auto___33628;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33611_33629__$1)){
var c__18905__auto___33630 = cljs.core.chunk_first.call(null,seq__33611_33629__$1);
var G__33631 = cljs.core.chunk_rest.call(null,seq__33611_33629__$1);
var G__33632 = c__18905__auto___33630;
var G__33633 = cljs.core.count.call(null,c__18905__auto___33630);
var G__33634 = (0);
seq__33611_33619 = G__33631;
chunk__33612_33620 = G__33632;
count__33613_33621 = G__33633;
i__33614_33622 = G__33634;
continue;
} else {
var c_33635 = cljs.core.first.call(null,seq__33611_33629__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_33635);

var G__33636 = cljs.core.next.call(null,seq__33611_33629__$1);
var G__33637 = null;
var G__33638 = (0);
var G__33639 = (0);
seq__33611_33619 = G__33636;
chunk__33612_33620 = G__33637;
count__33613_33621 = G__33638;
i__33614_33622 = G__33639;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq33606){
var G__33607 = cljs.core.first.call(null,seq33606);
var seq33606__$1 = cljs.core.next.call(null,seq33606);
var G__33608 = cljs.core.first.call(null,seq33606__$1);
var seq33606__$2 = cljs.core.next.call(null,seq33606__$1);
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33607,G__33608,seq33606__$2);
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
var args33640 = [];
var len__19160__auto___33646 = arguments.length;
var i__19161__auto___33647 = (0);
while(true){
if((i__19161__auto___33647 < len__19160__auto___33646)){
args33640.push((arguments[i__19161__auto___33647]));

var G__33648 = (i__19161__auto___33647 + (1));
i__19161__auto___33647 = G__33648;
continue;
} else {
}
break;
}

var G__33645 = args33640.length;
switch (G__33645) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33640.slice((2)),(0)));
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.add.cljs$lang$applyTo = (function (seq33641){
var G__33642 = cljs.core.first.call(null,seq33641);
var seq33641__$1 = cljs.core.next.call(null,seq33641);
var G__33643 = cljs.core.first.call(null,seq33641__$1);
var seq33641__$2 = cljs.core.next.call(null,seq33641__$1);
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic(G__33642,G__33643,seq33641__$2);
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
var args33650 = [];
var len__19160__auto___33660 = arguments.length;
var i__19161__auto___33661 = (0);
while(true){
if((i__19161__auto___33661 < len__19160__auto___33660)){
args33650.push((arguments[i__19161__auto___33661]));

var G__33662 = (i__19161__auto___33661 + (1));
i__19161__auto___33661 = G__33662;
continue;
} else {
}
break;
}

var G__33655 = args33650.length;
switch (G__33655) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33650.slice((2)),(0)));
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33656_33664 = cljs.core.seq.call(null,more);
var chunk__33657_33665 = null;
var count__33658_33666 = (0);
var i__33659_33667 = (0);
while(true){
if((i__33659_33667 < count__33658_33666)){
var m_33668 = cljs.core._nth.call(null,chunk__33657_33665,i__33659_33667);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_33668);

var G__33669 = seq__33656_33664;
var G__33670 = chunk__33657_33665;
var G__33671 = count__33658_33666;
var G__33672 = (i__33659_33667 + (1));
seq__33656_33664 = G__33669;
chunk__33657_33665 = G__33670;
count__33658_33666 = G__33671;
i__33659_33667 = G__33672;
continue;
} else {
var temp__4657__auto___33673 = cljs.core.seq.call(null,seq__33656_33664);
if(temp__4657__auto___33673){
var seq__33656_33674__$1 = temp__4657__auto___33673;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33656_33674__$1)){
var c__18905__auto___33675 = cljs.core.chunk_first.call(null,seq__33656_33674__$1);
var G__33676 = cljs.core.chunk_rest.call(null,seq__33656_33674__$1);
var G__33677 = c__18905__auto___33675;
var G__33678 = cljs.core.count.call(null,c__18905__auto___33675);
var G__33679 = (0);
seq__33656_33664 = G__33676;
chunk__33657_33665 = G__33677;
count__33658_33666 = G__33678;
i__33659_33667 = G__33679;
continue;
} else {
var m_33680 = cljs.core.first.call(null,seq__33656_33674__$1);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_33680);

var G__33681 = cljs.core.next.call(null,seq__33656_33674__$1);
var G__33682 = null;
var G__33683 = (0);
var G__33684 = (0);
seq__33656_33664 = G__33681;
chunk__33657_33665 = G__33682;
count__33658_33666 = G__33683;
i__33659_33667 = G__33684;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq33651){
var G__33652 = cljs.core.first.call(null,seq33651);
var seq33651__$1 = cljs.core.next.call(null,seq33651);
var G__33653 = cljs.core.first.call(null,seq33651__$1);
var seq33651__$2 = cljs.core.next.call(null,seq33651__$1);
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33652,G__33653,seq33651__$2);
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
var args33685 = [];
var len__19160__auto___33688 = arguments.length;
var i__19161__auto___33689 = (0);
while(true){
if((i__19161__auto___33689 < len__19160__auto___33688)){
args33685.push((arguments[i__19161__auto___33689]));

var G__33690 = (i__19161__auto___33689 + (1));
i__19161__auto___33689 = G__33690;
continue;
} else {
}
break;
}

var G__33687 = args33685.length;
switch (G__33687) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33685.length)].join('')));

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
var args33692 = [];
var len__19160__auto___33695 = arguments.length;
var i__19161__auto___33696 = (0);
while(true){
if((i__19161__auto___33696 < len__19160__auto___33695)){
args33692.push((arguments[i__19161__auto___33696]));

var G__33697 = (i__19161__auto___33696 + (1));
i__19161__auto___33696 = G__33697;
continue;
} else {
}
break;
}

var G__33694 = args33692.length;
switch (G__33694) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33692.length)].join('')));

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
var args33699 = [];
var len__19160__auto___33702 = arguments.length;
var i__19161__auto___33703 = (0);
while(true){
if((i__19161__auto___33703 < len__19160__auto___33702)){
args33699.push((arguments[i__19161__auto___33703]));

var G__33704 = (i__19161__auto___33703 + (1));
i__19161__auto___33703 = G__33704;
continue;
} else {
}
break;
}

var G__33701 = args33699.length;
switch (G__33701) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33699.length)].join('')));

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
var args33706 = [];
var len__19160__auto___33709 = arguments.length;
var i__19161__auto___33710 = (0);
while(true){
if((i__19161__auto___33710 < len__19160__auto___33709)){
args33706.push((arguments[i__19161__auto___33710]));

var G__33711 = (i__19161__auto___33710 + (1));
i__19161__auto___33710 = G__33711;
continue;
} else {
}
break;
}

var G__33708 = args33706.length;
switch (G__33708) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33706.length)].join('')));

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
var args33713 = [];
var len__19160__auto___33716 = arguments.length;
var i__19161__auto___33717 = (0);
while(true){
if((i__19161__auto___33717 < len__19160__auto___33716)){
args33713.push((arguments[i__19161__auto___33717]));

var G__33718 = (i__19161__auto___33717 + (1));
i__19161__auto___33717 = G__33718;
continue;
} else {
}
break;
}

var G__33715 = args33713.length;
switch (G__33715) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33713.length)].join('')));

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
var args33720 = [];
var len__19160__auto___33726 = arguments.length;
var i__19161__auto___33727 = (0);
while(true){
if((i__19161__auto___33727 < len__19160__auto___33726)){
args33720.push((arguments[i__19161__auto___33727]));

var G__33728 = (i__19161__auto___33727 + (1));
i__19161__auto___33727 = G__33728;
continue;
} else {
}
break;
}

var G__33725 = args33720.length;
switch (G__33725) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33720.slice((2)),(0)));
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq33721){
var G__33722 = cljs.core.first.call(null,seq33721);
var seq33721__$1 = cljs.core.next.call(null,seq33721);
var G__33723 = cljs.core.first.call(null,seq33721__$1);
var seq33721__$2 = cljs.core.next.call(null,seq33721__$1);
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic(G__33722,G__33723,seq33721__$2);
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
var args33730 = [];
var len__19160__auto___33740 = arguments.length;
var i__19161__auto___33741 = (0);
while(true){
if((i__19161__auto___33741 < len__19160__auto___33740)){
args33730.push((arguments[i__19161__auto___33741]));

var G__33742 = (i__19161__auto___33741 + (1));
i__19161__auto___33741 = G__33742;
continue;
} else {
}
break;
}

var G__33735 = args33730.length;
switch (G__33735) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33730.slice((2)),(0)));
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33736_33744 = cljs.core.seq.call(null,more);
var chunk__33737_33745 = null;
var count__33738_33746 = (0);
var i__33739_33747 = (0);
while(true){
if((i__33739_33747 < count__33738_33746)){
var m_33748 = cljs.core._nth.call(null,chunk__33737_33745,i__33739_33747);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_33748);

var G__33749 = seq__33736_33744;
var G__33750 = chunk__33737_33745;
var G__33751 = count__33738_33746;
var G__33752 = (i__33739_33747 + (1));
seq__33736_33744 = G__33749;
chunk__33737_33745 = G__33750;
count__33738_33746 = G__33751;
i__33739_33747 = G__33752;
continue;
} else {
var temp__4657__auto___33753 = cljs.core.seq.call(null,seq__33736_33744);
if(temp__4657__auto___33753){
var seq__33736_33754__$1 = temp__4657__auto___33753;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33736_33754__$1)){
var c__18905__auto___33755 = cljs.core.chunk_first.call(null,seq__33736_33754__$1);
var G__33756 = cljs.core.chunk_rest.call(null,seq__33736_33754__$1);
var G__33757 = c__18905__auto___33755;
var G__33758 = cljs.core.count.call(null,c__18905__auto___33755);
var G__33759 = (0);
seq__33736_33744 = G__33756;
chunk__33737_33745 = G__33757;
count__33738_33746 = G__33758;
i__33739_33747 = G__33759;
continue;
} else {
var m_33760 = cljs.core.first.call(null,seq__33736_33754__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_33760);

var G__33761 = cljs.core.next.call(null,seq__33736_33754__$1);
var G__33762 = null;
var G__33763 = (0);
var G__33764 = (0);
seq__33736_33744 = G__33761;
chunk__33737_33745 = G__33762;
count__33738_33746 = G__33763;
i__33739_33747 = G__33764;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq33731){
var G__33732 = cljs.core.first.call(null,seq33731);
var seq33731__$1 = cljs.core.next.call(null,seq33731);
var G__33733 = cljs.core.first.call(null,seq33731__$1);
var seq33731__$2 = cljs.core.next.call(null,seq33731__$1);
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33732,G__33733,seq33731__$2);
});

clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var args33765 = [];
var len__19160__auto___33771 = arguments.length;
var i__19161__auto___33772 = (0);
while(true){
if((i__19161__auto___33772 < len__19160__auto___33771)){
args33765.push((arguments[i__19161__auto___33772]));

var G__33773 = (i__19161__auto___33772 + (1));
i__19161__auto___33772 = G__33773;
continue;
} else {
}
break;
}

var G__33770 = args33765.length;
switch (G__33770) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33765.slice((2)),(0)));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

}
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale.call(null,m,factor);
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));
});

clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq33766){
var G__33767 = cljs.core.first.call(null,seq33766);
var seq33766__$1 = cljs.core.next.call(null,seq33766);
var G__33768 = cljs.core.first.call(null,seq33766__$1);
var seq33766__$2 = cljs.core.next.call(null,seq33766__$1);
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic(G__33767,G__33768,seq33766__$2);
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
var args33775 = [];
var len__19160__auto___33781 = arguments.length;
var i__19161__auto___33782 = (0);
while(true){
if((i__19161__auto___33782 < len__19160__auto___33781)){
args33775.push((arguments[i__19161__auto___33782]));

var G__33783 = (i__19161__auto___33782 + (1));
i__19161__auto___33782 = G__33783;
continue;
} else {
}
break;
}

var G__33780 = args33775.length;
switch (G__33780) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33775.slice((2)),(0)));
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq33776){
var G__33777 = cljs.core.first.call(null,seq33776);
var seq33776__$1 = cljs.core.next.call(null,seq33776);
var G__33778 = cljs.core.first.call(null,seq33776__$1);
var seq33776__$2 = cljs.core.next.call(null,seq33776__$1);
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33777,G__33778,seq33776__$2);
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
var or__18102__auto__ = clojure.core.matrix.protocols.vector_dot.call(null,a,b);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33785 = [];
var len__19160__auto___33791 = arguments.length;
var i__19161__auto___33792 = (0);
while(true){
if((i__19161__auto___33792 < len__19160__auto___33791)){
args33785.push((arguments[i__19161__auto___33792]));

var G__33793 = (i__19161__auto___33792 + (1));
i__19161__auto___33792 = G__33793;
continue;
} else {
}
break;
}

var G__33790 = args33785.length;
switch (G__33790) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33785.slice((2)),(0)));
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq33786){
var G__33787 = cljs.core.first.call(null,seq33786);
var seq33786__$1 = cljs.core.next.call(null,seq33786);
var G__33788 = cljs.core.first.call(null,seq33786__$1);
var seq33786__$2 = cljs.core.next.call(null,seq33786__$1);
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic(G__33787,G__33788,seq33786__$2);
});

clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2);
/**
 * Computes the outer product of numerical arrays.
 * 
 * The outer product of two arrays with indexed dimensions {i..j} and {j..k} has dimensions {i..j j..k}, i.e. the dimensioanlity will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var args33795 = [];
var len__19160__auto___33801 = arguments.length;
var i__19161__auto___33802 = (0);
while(true){
if((i__19161__auto___33802 < len__19160__auto___33801)){
args33795.push((arguments[i__19161__auto___33802]));

var G__33803 = (i__19161__auto___33802 + (1));
i__19161__auto___33802 = G__33803;
continue;
} else {
}
break;
}

var G__33800 = args33795.length;
switch (G__33800) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33795.slice((2)),(0)));
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq33796){
var G__33797 = cljs.core.first.call(null,seq33796);
var seq33796__$1 = cljs.core.next.call(null,seq33796);
var G__33798 = cljs.core.first.call(null,seq33796__$1);
var seq33796__$2 = cljs.core.next.call(null,seq33796__$1);
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic(G__33797,G__33798,seq33796__$2);
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
var args33805 = [];
var len__19160__auto___33808 = arguments.length;
var i__19161__auto___33809 = (0);
while(true){
if((i__19161__auto___33809 < len__19160__auto___33808)){
args33805.push((arguments[i__19161__auto___33809]));

var G__33810 = (i__19161__auto___33809 + (1));
i__19161__auto___33809 = G__33810;
continue;
} else {
}
break;
}

var G__33807 = args33805.length;
switch (G__33807) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33805.length)].join('')));

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
var or__18102__auto__ = clojure.core.matrix.protocols.determinant.call(null,a);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var args33812 = [];
var len__19160__auto___33818 = arguments.length;
var i__19161__auto___33819 = (0);
while(true){
if((i__19161__auto___33819 < len__19160__auto___33818)){
args33812.push((arguments[i__19161__auto___33819]));

var G__33820 = (i__19161__auto___33819 + (1));
i__19161__auto___33819 = G__33820;
continue;
} else {
}
break;
}

var G__33817 = args33812.length;
switch (G__33817) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33812.slice((2)),(0)));
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq33813){
var G__33814 = cljs.core.first.call(null,seq33813);
var seq33813__$1 = cljs.core.next.call(null,seq33813);
var G__33815 = cljs.core.first.call(null,seq33813__$1);
var seq33813__$2 = cljs.core.next.call(null,seq33813__$1);
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic(G__33814,G__33815,seq33813__$2);
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
var args33822 = [];
var len__19160__auto___33825 = arguments.length;
var i__19161__auto___33826 = (0);
while(true){
if((i__19161__auto___33826 < len__19160__auto___33825)){
args33822.push((arguments[i__19161__auto___33826]));

var G__33827 = (i__19161__auto___33826 + (1));
i__19161__auto___33826 = G__33827;
continue;
} else {
}
break;
}

var G__33824 = args33822.length;
switch (G__33824) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33822.length)].join('')));

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
var args33829 = [];
var len__19160__auto___33832 = arguments.length;
var i__19161__auto___33833 = (0);
while(true){
if((i__19161__auto___33833 < len__19160__auto___33832)){
args33829.push((arguments[i__19161__auto___33833]));

var G__33834 = (i__19161__auto___33833 + (1));
i__19161__auto___33833 = G__33834;
continue;
} else {
}
break;
}

var G__33831 = args33829.length;
switch (G__33831) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33829.length)].join('')));

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
var args33836 = [];
var len__19160__auto___33843 = arguments.length;
var i__19161__auto___33844 = (0);
while(true){
if((i__19161__auto___33844 < len__19160__auto___33843)){
args33836.push((arguments[i__19161__auto___33844]));

var G__33845 = (i__19161__auto___33844 + (1));
i__19161__auto___33844 = G__33845;
continue;
} else {
}
break;
}

var G__33842 = args33836.length;
switch (G__33842) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33836.slice((3)),(0)));
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19179__auto__);

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

clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq33837){
var G__33838 = cljs.core.first.call(null,seq33837);
var seq33837__$1 = cljs.core.next.call(null,seq33837);
var G__33839 = cljs.core.first.call(null,seq33837__$1);
var seq33837__$2 = cljs.core.next.call(null,seq33837__$1);
var G__33840 = cljs.core.first.call(null,seq33837__$2);
var seq33837__$3 = cljs.core.next.call(null,seq33837__$2);
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic(G__33838,G__33839,G__33840,seq33837__$3);
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
var args33847 = [];
var len__19160__auto___33854 = arguments.length;
var i__19161__auto___33855 = (0);
while(true){
if((i__19161__auto___33855 < len__19160__auto___33854)){
args33847.push((arguments[i__19161__auto___33855]));

var G__33856 = (i__19161__auto___33855 + (1));
i__19161__auto___33855 = G__33856;
continue;
} else {
}
break;
}

var G__33853 = args33847.length;
switch (G__33853) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33847.slice((3)),(0)));
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19179__auto__);

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

clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq33848){
var G__33849 = cljs.core.first.call(null,seq33848);
var seq33848__$1 = cljs.core.next.call(null,seq33848);
var G__33850 = cljs.core.first.call(null,seq33848__$1);
var seq33848__$2 = cljs.core.next.call(null,seq33848__$1);
var G__33851 = cljs.core.first.call(null,seq33848__$2);
var seq33848__$3 = cljs.core.next.call(null,seq33848__$2);
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic(G__33849,G__33850,G__33851,seq33848__$3);
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
var args33858 = [];
var len__19160__auto___33865 = arguments.length;
var i__19161__auto___33866 = (0);
while(true){
if((i__19161__auto___33866 < len__19160__auto___33865)){
args33858.push((arguments[i__19161__auto___33866]));

var G__33867 = (i__19161__auto___33866 + (1));
i__19161__auto___33866 = G__33867;
continue;
} else {
}
break;
}

var G__33864 = args33858.length;
switch (G__33864) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33858.slice((3)),(0)));
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19179__auto__);

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

clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq33859){
var G__33860 = cljs.core.first.call(null,seq33859);
var seq33859__$1 = cljs.core.next.call(null,seq33859);
var G__33861 = cljs.core.first.call(null,seq33859__$1);
var seq33859__$2 = cljs.core.next.call(null,seq33859__$1);
var G__33862 = cljs.core.first.call(null,seq33859__$2);
var seq33859__$3 = cljs.core.next.call(null,seq33859__$2);
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33860,G__33861,G__33862,seq33859__$3);
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
var args33869 = [];
var len__19160__auto___33876 = arguments.length;
var i__19161__auto___33877 = (0);
while(true){
if((i__19161__auto___33877 < len__19160__auto___33876)){
args33869.push((arguments[i__19161__auto___33877]));

var G__33878 = (i__19161__auto___33877 + (1));
i__19161__auto___33877 = G__33878;
continue;
} else {
}
break;
}

var G__33875 = args33869.length;
switch (G__33875) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33869.slice((3)),(0)));
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19179__auto__);

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

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq33870){
var G__33871 = cljs.core.first.call(null,seq33870);
var seq33870__$1 = cljs.core.next.call(null,seq33870);
var G__33872 = cljs.core.first.call(null,seq33870__$1);
var seq33870__$2 = cljs.core.next.call(null,seq33870__$1);
var G__33873 = cljs.core.first.call(null,seq33870__$2);
var seq33870__$3 = cljs.core.next.call(null,seq33870__$2);
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33871,G__33872,G__33873,seq33870__$3);
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
var args33880 = [];
var len__19160__auto___33883 = arguments.length;
var i__19161__auto___33884 = (0);
while(true){
if((i__19161__auto___33884 < len__19160__auto___33883)){
args33880.push((arguments[i__19161__auto___33884]));

var G__33885 = (i__19161__auto___33884 + (1));
i__19161__auto___33884 = G__33885;
continue;
} else {
}
break;
}

var G__33882 = args33880.length;
switch (G__33882) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33880.length)].join('')));

}
});

clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0 = (function (){
var or__18102__auto__ = clojure.core.matrix.implementations.get_canonical_object.call(null,clojure.core.matrix.implementations._STAR_matrix_implementation_STAR_);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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
var or__18102__auto__ = clojure.core.matrix.implementations.load_implementation.call(null,impl);
if(cljs.core.truth_(or__18102__auto__)){
return or__18102__auto__;
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