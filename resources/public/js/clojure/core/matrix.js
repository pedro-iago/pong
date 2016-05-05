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
var args38758 = [];
var len__19784__auto___38768 = arguments.length;
var i__19785__auto___38769 = (0);
while(true){
if((i__19785__auto___38769 < len__19784__auto___38768)){
args38758.push((arguments[i__19785__auto___38769]));

var G__38771 = (i__19785__auto___38769 + (1));
i__19785__auto___38769 = G__38771;
continue;
} else {
}
break;
}

var G__38760 = args38758.length;
switch (G__38760) {
case 1:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38758.length)].join('')));

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
var args38774 = [];
var len__19784__auto___38778 = arguments.length;
var i__19785__auto___38779 = (0);
while(true){
if((i__19785__auto___38779 < len__19784__auto___38778)){
args38774.push((arguments[i__19785__auto___38779]));

var G__38781 = (i__19785__auto___38779 + (1));
i__19785__auto___38779 = G__38781;
continue;
} else {
}
break;
}

var G__38776 = args38774.length;
switch (G__38776) {
case 1:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38774.length)].join('')));

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
var args38785 = [];
var len__19784__auto___38795 = arguments.length;
var i__19785__auto___38796 = (0);
while(true){
if((i__19785__auto___38796 < len__19784__auto___38795)){
args38785.push((arguments[i__19785__auto___38796]));

var G__38797 = (i__19785__auto___38796 + (1));
i__19785__auto___38796 = G__38797;
continue;
} else {
}
break;
}

var G__38789 = args38785.length;
switch (G__38789) {
case 1:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.index.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38785.length)].join('')));

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
var args38858 = [];
var len__19784__auto___38864 = arguments.length;
var i__19785__auto___38865 = (0);
while(true){
if((i__19785__auto___38865 < len__19784__auto___38864)){
args38858.push((arguments[i__19785__auto___38865]));

var G__38866 = (i__19785__auto___38865 + (1));
i__19785__auto___38865 = G__38866;
continue;
} else {
}
break;
}

var G__38862 = args38858.length;
switch (G__38862) {
case 1:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38858.length)].join('')));

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
var args38889 = [];
var len__19784__auto___38896 = arguments.length;
var i__19785__auto___38897 = (0);
while(true){
if((i__19785__auto___38897 < len__19784__auto___38896)){
args38889.push((arguments[i__19785__auto___38897]));

var G__38901 = (i__19785__auto___38897 + (1));
i__19785__auto___38897 = G__38901;
continue;
} else {
}
break;
}

var G__38893 = args38889.length;
switch (G__38893) {
case 1:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38889.length)].join('')));

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
var args38911 = [];
var len__19784__auto___38914 = arguments.length;
var i__19785__auto___38915 = (0);
while(true){
if((i__19785__auto___38915 < len__19784__auto___38914)){
args38911.push((arguments[i__19785__auto___38915]));

var G__38916 = (i__19785__auto___38915 + (1));
i__19785__auto___38915 = G__38916;
continue;
} else {
}
break;
}

var G__38913 = args38911.length;
switch (G__38913) {
case 2:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.zero_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38911.length)].join('')));

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
var args38918 = [];
var len__19784__auto___38925 = arguments.length;
var i__19785__auto___38927 = (0);
while(true){
if((i__19785__auto___38927 < len__19784__auto___38925)){
args38918.push((arguments[i__19785__auto___38927]));

var G__38928 = (i__19785__auto___38927 + (1));
i__19785__auto___38927 = G__38928;
continue;
} else {
}
break;
}

var G__38922 = args38918.length;
switch (G__38922) {
case 2:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.new_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38918.length)].join('')));

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
var args38930 = [];
var len__19784__auto___38937 = arguments.length;
var i__19785__auto___38938 = (0);
while(true){
if((i__19785__auto___38938 < len__19784__auto___38937)){
args38930.push((arguments[i__19785__auto___38938]));

var G__38941 = (i__19785__auto___38938 + (1));
i__19785__auto___38938 = G__38941;
continue;
} else {
}
break;
}

var G__38936 = args38930.length;
switch (G__38936) {
case 1:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.zero_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38930.length)].join('')));

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
var args38952 = [];
var len__19784__auto___38956 = arguments.length;
var i__19785__auto___38957 = (0);
while(true){
if((i__19785__auto___38957 < len__19784__auto___38956)){
args38952.push((arguments[i__19785__auto___38957]));

var G__38959 = (i__19785__auto___38957 + (1));
i__19785__auto___38957 = G__38959;
continue;
} else {
}
break;
}

var G__38954 = args38952.length;
switch (G__38954) {
case 1:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38952.length)].join('')));

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
var args38962 = [];
var len__19784__auto___38965 = arguments.length;
var i__19785__auto___38966 = (0);
while(true){
if((i__19785__auto___38966 < len__19784__auto___38965)){
args38962.push((arguments[i__19785__auto___38966]));

var G__38967 = (i__19785__auto___38966 + (1));
i__19785__auto___38966 = G__38967;
continue;
} else {
}
break;
}

var G__38964 = args38962.length;
switch (G__38964) {
case 1:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.new_sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38962.length)].join('')));

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
var args38972 = [];
var len__19784__auto___38975 = arguments.length;
var i__19785__auto___38976 = (0);
while(true){
if((i__19785__auto___38976 < len__19784__auto___38975)){
args38972.push((arguments[i__19785__auto___38976]));

var G__38977 = (i__19785__auto___38976 + (1));
i__19785__auto___38976 = G__38977;
continue;
} else {
}
break;
}

var G__38974 = args38972.length;
switch (G__38974) {
case 0:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.new_scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38972.length)].join('')));

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
var args38979 = [];
var len__19784__auto___39046 = arguments.length;
var i__19785__auto___39054 = (0);
while(true){
if((i__19785__auto___39054 < len__19784__auto___39046)){
args38979.push((arguments[i__19785__auto___39054]));

var G__39059 = (i__19785__auto___39054 + (1));
i__19785__auto___39054 = G__39059;
continue;
} else {
}
break;
}

var G__38984 = args38979.length;
switch (G__38984) {
case 1:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.scalar_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args38979.length)].join('')));

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
var args39088 = [];
var len__19784__auto___39094 = arguments.length;
var i__19785__auto___39095 = (0);
while(true){
if((i__19785__auto___39095 < len__19784__auto___39094)){
args39088.push((arguments[i__19785__auto___39095]));

var G__39096 = (i__19785__auto___39095 + (1));
i__19785__auto___39095 = G__39096;
continue;
} else {
}
break;
}

var G__39093 = args39088.length;
switch (G__39093) {
case 1:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.row_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39088.length)].join('')));

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
var args39098 = [];
var len__19784__auto___39106 = arguments.length;
var i__19785__auto___39107 = (0);
while(true){
if((i__19785__auto___39107 < len__19784__auto___39106)){
args39098.push((arguments[i__19785__auto___39107]));

var G__39110 = (i__19785__auto___39107 + (1));
i__19785__auto___39107 = G__39110;
continue;
} else {
}
break;
}

var G__39100 = args39098.length;
switch (G__39100) {
case 1:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.column_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39098.length)].join('')));

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
var args39115 = [];
var len__19784__auto___39118 = arguments.length;
var i__19785__auto___39119 = (0);
while(true){
if((i__19785__auto___39119 < len__19784__auto___39118)){
args39115.push((arguments[i__19785__auto___39119]));

var G__39120 = (i__19785__auto___39119 + (1));
i__19785__auto___39119 = G__39120;
continue;
} else {
}
break;
}

var G__39117 = args39115.length;
switch (G__39117) {
case 1:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.identity_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39115.length)].join('')));

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
var args39123 = [];
var len__19784__auto___39133 = arguments.length;
var i__19785__auto___39136 = (0);
while(true){
if((i__19785__auto___39136 < len__19784__auto___39133)){
args39123.push((arguments[i__19785__auto___39136]));

var G__39138 = (i__19785__auto___39136 + (1));
i__19785__auto___39136 = G__39138;
continue;
} else {
}
break;
}

var G__39129 = args39123.length;
switch (G__39129) {
case 1:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.permutation_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39123.length)].join('')));

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
var args39144 = [];
var len__19784__auto___39148 = arguments.length;
var i__19785__auto___39149 = (0);
while(true){
if((i__19785__auto___39149 < len__19784__auto___39148)){
args39144.push((arguments[i__19785__auto___39149]));

var G__39150 = (i__19785__auto___39149 + (1));
i__19785__auto___39149 = G__39150;
continue;
} else {
}
break;
}

var G__39147 = args39144.length;
switch (G__39147) {
case 1:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.block_diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39144.length)].join('')));

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
var args39152 = [];
var len__19784__auto___39177 = arguments.length;
var i__19785__auto___39178 = (0);
while(true){
if((i__19785__auto___39178 < len__19784__auto___39177)){
args39152.push((arguments[i__19785__auto___39178]));

var G__39181 = (i__19785__auto___39178 + (1));
i__19785__auto___39178 = G__39181;
continue;
} else {
}
break;
}

var G__39157 = args39152.length;
switch (G__39157) {
case 1:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mutable.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39152.length)].join('')));

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
var args39206 = [];
var len__19784__auto___39245 = arguments.length;
var i__19785__auto___39249 = (0);
while(true){
if((i__19785__auto___39249 < len__19784__auto___39245)){
args39206.push((arguments[i__19785__auto___39249]));

var G__39271 = (i__19785__auto___39249 + (1));
i__19785__auto___39249 = G__39271;
continue;
} else {
}
break;
}

var G__39212 = args39206.length;
switch (G__39212) {
case 1:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39206.length)].join('')));

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
var args39328 = [];
var len__19784__auto___39334 = arguments.length;
var i__19785__auto___39335 = (0);
while(true){
if((i__19785__auto___39335 < len__19784__auto___39334)){
args39328.push((arguments[i__19785__auto___39335]));

var G__39336 = (i__19785__auto___39335 + (1));
i__19785__auto___39335 = G__39336;
continue;
} else {
}
break;
}

var G__39333 = args39328.length;
switch (G__39333) {
case 2:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.compute_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39328.length)].join('')));

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
var args39338 = [];
var len__19784__auto___39361 = arguments.length;
var i__19785__auto___39362 = (0);
while(true){
if((i__19785__auto___39362 < len__19784__auto___39361)){
args39338.push((arguments[i__19785__auto___39362]));

var G__39366 = (i__19785__auto___39362 + (1));
i__19785__auto___39362 = G__39366;
continue;
} else {
}
break;
}

var G__39340 = args39338.length;
switch (G__39340) {
case 1:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39338.length)].join('')));

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
var args39385 = [];
var len__19784__auto___39392 = arguments.length;
var i__19785__auto___39393 = (0);
while(true){
if((i__19785__auto___39393 < len__19784__auto___39392)){
args39385.push((arguments[i__19785__auto___39393]));

var G__39394 = (i__19785__auto___39393 + (1));
i__19785__auto___39393 = G__39394;
continue;
} else {
}
break;
}

var G__39391 = args39385.length;
switch (G__39391) {
case 1:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39385.length)].join('')));

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
var args39396 = [];
var len__19784__auto___39399 = arguments.length;
var i__19785__auto___39400 = (0);
while(true){
if((i__19785__auto___39400 < len__19784__auto___39399)){
args39396.push((arguments[i__19785__auto___39400]));

var G__39401 = (i__19785__auto___39400 + (1));
i__19785__auto___39400 = G__39401;
continue;
} else {
}
break;
}

var G__39398 = args39396.length;
switch (G__39398) {
case 1:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sparse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39396.length)].join('')));

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
var args39403 = [];
var len__19784__auto___39406 = arguments.length;
var i__19785__auto___39407 = (0);
while(true){
if((i__19785__auto___39407 < len__19784__auto___39406)){
args39403.push((arguments[i__19785__auto___39407]));

var G__39408 = (i__19785__auto___39407 + (1));
i__19785__auto___39407 = G__39408;
continue;
} else {
}
break;
}

var G__39405 = args39403.length;
switch (G__39405) {
case 1:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.dense.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39403.length)].join('')));

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
var args39410 = [];
var len__19784__auto___39413 = arguments.length;
var i__19785__auto___39414 = (0);
while(true){
if((i__19785__auto___39414 < len__19784__auto___39413)){
args39410.push((arguments[i__19785__auto___39414]));

var G__39415 = (i__19785__auto___39414 + (1));
i__19785__auto___39414 = G__39415;
continue;
} else {
}
break;
}

var G__39412 = args39410.length;
switch (G__39412) {
case 1:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.native$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39410.length)].join('')));

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
var args39425 = [];
var len__19784__auto___39432 = arguments.length;
var i__19785__auto___39433 = (0);
while(true){
if((i__19785__auto___39433 < len__19784__auto___39432)){
args39425.push((arguments[i__19785__auto___39433]));

var G__39434 = (i__19785__auto___39433 + (1));
i__19785__auto___39433 = G__39434;
continue;
} else {
}
break;
}

var G__39429 = args39425.length;
switch (G__39429) {
case 2:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.assign_array_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39425.length)].join('')));

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
var args39454 = [];
var len__19784__auto___39478 = arguments.length;
var i__19785__auto___39479 = (0);
while(true){
if((i__19785__auto___39479 < len__19784__auto___39478)){
args39454.push((arguments[i__19785__auto___39479]));

var G__39480 = (i__19785__auto___39479 + (1));
i__19785__auto___39479 = G__39480;
continue;
} else {
}
break;
}

var G__39459 = args39454.length;
switch (G__39459) {
case 2:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return clojure.core.matrix.orthogonal_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39454.length)].join('')));

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
if(temp__4655__auto__){
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
var args39499 = [];
var len__19784__auto___39503 = arguments.length;
var i__19785__auto___39504 = (0);
while(true){
if((i__19785__auto___39504 < len__19784__auto___39503)){
args39499.push((arguments[i__19785__auto___39504]));

var G__39505 = (i__19785__auto___39504 + (1));
i__19785__auto___39504 = G__39505;
continue;
} else {
}
break;
}

var G__39501 = args39499.length;
switch (G__39501) {
case 1:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.conforming_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39499.length)].join('')));

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
var args39511 = [];
var len__19784__auto___39517 = arguments.length;
var i__19785__auto___39518 = (0);
while(true){
if((i__19785__auto___39518 < len__19784__auto___39517)){
args39511.push((arguments[i__19785__auto___39518]));

var G__39519 = (i__19785__auto___39518 + (1));
i__19785__auto___39518 = G__39519;
continue;
} else {
}
break;
}

var G__39516 = args39511.length;
switch (G__39516) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39511.slice((2)),(0)));
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
var G__39526 = n__$1;
var G__39527 = cljs.core.first.call(null,more__$1);
var G__39528 = cljs.core.next.call(null,more__$1);
m__$1 = G__39526;
n__$1 = G__39527;
more__$1 = G__39528;
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

clojure.core.matrix.same_shape_QMARK_.cljs$lang$applyTo = (function (seq39512){
var G__39513 = cljs.core.first.call(null,seq39512);
var seq39512__$1 = cljs.core.next.call(null,seq39512);
var G__39514 = cljs.core.first.call(null,seq39512__$1);
var seq39512__$2 = cljs.core.next.call(null,seq39512__$1);
return clojure.core.matrix.same_shape_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__39513,G__39514,seq39512__$2);
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
var args39533 = [];
var len__19784__auto___39563 = arguments.length;
var i__19785__auto___39567 = (0);
while(true){
if((i__19785__auto___39567 < len__19784__auto___39563)){
args39533.push((arguments[i__19785__auto___39567]));

var G__39570 = (i__19785__auto___39567 + (1));
i__19785__auto___39567 = G__39570;
continue;
} else {
}
break;
}

var G__39535 = args39533.length;
switch (G__39535) {
case 1:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_double_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39533.length)].join('')));

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
var args39576 = [];
var len__19784__auto___39597 = arguments.length;
var i__19785__auto___39599 = (0);
while(true){
if((i__19785__auto___39599 < len__19784__auto___39597)){
args39576.push((arguments[i__19785__auto___39599]));

var G__39601 = (i__19785__auto___39599 + (1));
i__19785__auto___39599 = G__39601;
continue;
} else {
}
break;
}

var G__39585 = args39576.length;
switch (G__39585) {
case 1:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.to_object_array.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39576.length)].join('')));

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
var args39619 = [];
var len__19784__auto___39674 = arguments.length;
var i__19785__auto___39675 = (0);
while(true){
if((i__19785__auto___39675 < len__19784__auto___39674)){
args39619.push((arguments[i__19785__auto___39675]));

var G__39680 = (i__19785__auto___39675 + (1));
i__19785__auto___39675 = G__39680;
continue;
} else {
}
break;
}

var G__39645 = args39619.length;
switch (G__39645) {
case 1:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.coerce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39619.length)].join('')));

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
var args39697 = [];
var len__19784__auto___39723 = arguments.length;
var i__19785__auto___39724 = (0);
while(true){
if((i__19785__auto___39724 < len__19784__auto___39723)){
args39697.push((arguments[i__19785__auto___39724]));

var G__39727 = (i__19785__auto___39724 + (1));
i__19785__auto___39724 = G__39727;
continue;
} else {
}
break;
}

var G__39713 = args39697.length;
switch (G__39713) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39697.slice((3)),(0)));
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

clojure.core.matrix.mget.cljs$lang$applyTo = (function (seq39698){
var G__39699 = cljs.core.first.call(null,seq39698);
var seq39698__$1 = cljs.core.next.call(null,seq39698);
var G__39700 = cljs.core.first.call(null,seq39698__$1);
var seq39698__$2 = cljs.core.next.call(null,seq39698__$1);
var G__39701 = cljs.core.first.call(null,seq39698__$2);
var seq39698__$3 = cljs.core.next.call(null,seq39698__$2);
return clojure.core.matrix.mget.cljs$core$IFn$_invoke$arity$variadic(G__39699,G__39700,G__39701,seq39698__$3);
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
var args39734 = [];
var len__19784__auto___39753 = arguments.length;
var i__19785__auto___39754 = (0);
while(true){
if((i__19785__auto___39754 < len__19784__auto___39753)){
args39734.push((arguments[i__19785__auto___39754]));

var G__39757 = (i__19785__auto___39754 + (1));
i__19785__auto___39754 = G__39757;
continue;
} else {
}
break;
}

var G__39741 = args39734.length;
switch (G__39741) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39734.slice((4)),(0)));
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

clojure.core.matrix.mset.cljs$lang$applyTo = (function (seq39735){
var G__39736 = cljs.core.first.call(null,seq39735);
var seq39735__$1 = cljs.core.next.call(null,seq39735);
var G__39737 = cljs.core.first.call(null,seq39735__$1);
var seq39735__$2 = cljs.core.next.call(null,seq39735__$1);
var G__39738 = cljs.core.first.call(null,seq39735__$2);
var seq39735__$3 = cljs.core.next.call(null,seq39735__$2);
var G__39739 = cljs.core.first.call(null,seq39735__$3);
var seq39735__$4 = cljs.core.next.call(null,seq39735__$3);
return clojure.core.matrix.mset.cljs$core$IFn$_invoke$arity$variadic(G__39736,G__39737,G__39738,G__39739,seq39735__$4);
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
var args39770 = [];
var len__19784__auto___39780 = arguments.length;
var i__19785__auto___39781 = (0);
while(true){
if((i__19785__auto___39781 < len__19784__auto___39780)){
args39770.push((arguments[i__19785__auto___39781]));

var G__39783 = (i__19785__auto___39781 + (1));
i__19785__auto___39781 = G__39783;
continue;
} else {
}
break;
}

var G__39778 = args39770.length;
switch (G__39778) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39770.slice((5)),(0)));
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

clojure.core.matrix.mset_BANG_.cljs$lang$applyTo = (function (seq39771){
var G__39772 = cljs.core.first.call(null,seq39771);
var seq39771__$1 = cljs.core.next.call(null,seq39771);
var G__39773 = cljs.core.first.call(null,seq39771__$1);
var seq39771__$2 = cljs.core.next.call(null,seq39771__$1);
var G__39774 = cljs.core.first.call(null,seq39771__$2);
var seq39771__$3 = cljs.core.next.call(null,seq39771__$2);
var G__39775 = cljs.core.first.call(null,seq39771__$3);
var seq39771__$4 = cljs.core.next.call(null,seq39771__$3);
var G__39776 = cljs.core.first.call(null,seq39771__$4);
var seq39771__$5 = cljs.core.next.call(null,seq39771__$4);
return clojure.core.matrix.mset_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39772,G__39773,G__39774,G__39775,G__39776,seq39771__$5);
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
var G__39807 = slice_func.call(null,m__$1,i,ix);
var G__39808 = i;
var G__39809 = cljs.core.next.call(null,args__$1);
m__$1 = G__39807;
i = G__39808;
args__$1 = G__39809;
continue;
} else {
var G__39811 = m__$1;
var G__39812 = (i + (1));
var G__39813 = cljs.core.next.call(null,args__$1);
m__$1 = G__39811;
i = G__39812;
args__$1 = G__39813;
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
var len__19784__auto___39825 = arguments.length;
var i__19785__auto___39826 = (0);
while(true){
if((i__19785__auto___39826 < len__19784__auto___39825)){
args__19791__auto__.push((arguments[i__19785__auto___39826]));

var G__39827 = (i__19785__auto___39826 + (1));
i__19785__auto___39826 = G__39827;
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

clojure.core.matrix.select.cljs$lang$applyTo = (function (seq39821){
var G__39822 = cljs.core.first.call(null,seq39821);
var seq39821__$1 = cljs.core.next.call(null,seq39821);
return clojure.core.matrix.select.cljs$core$IFn$_invoke$arity$variadic(G__39822,seq39821__$1);
});
/**
 * Like `select`, but guarantees a view over the original data.
 */
clojure.core.matrix.select_view = (function clojure$core$matrix$select_view(var_args){
var args__19791__auto__ = [];
var len__19784__auto___39834 = arguments.length;
var i__19785__auto___39835 = (0);
while(true){
if((i__19785__auto___39835 < len__19784__auto___39834)){
args__19791__auto__.push((arguments[i__19785__auto___39835]));

var G__39836 = (i__19785__auto___39835 + (1));
i__19785__auto___39835 = G__39836;
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

clojure.core.matrix.select_view.cljs$lang$applyTo = (function (seq39830){
var G__39831 = cljs.core.first.call(null,seq39830);
var seq39830__$1 = cljs.core.next.call(null,seq39830);
return clojure.core.matrix.select_view.cljs$core$IFn$_invoke$arity$variadic(G__39831,seq39830__$1);
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
var len__19784__auto___39848 = arguments.length;
var i__19785__auto___39849 = (0);
while(true){
if((i__19785__auto___39849 < len__19784__auto___39848)){
args__19791__auto__.push((arguments[i__19785__auto___39849]));

var G__39850 = (i__19785__auto___39849 + (1));
i__19785__auto___39849 = G__39850;
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

clojure.core.matrix.set_selection_BANG_.cljs$lang$applyTo = (function (seq39842){
var G__39843 = cljs.core.first.call(null,seq39842);
var seq39842__$1 = cljs.core.next.call(null,seq39842);
return clojure.core.matrix.set_selection_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39843,seq39842__$1);
});
/**
 * Like select but sets the elements in the selection to the value of the final argument.
 * Leaves a unchanged and returns the modified array
 */
clojure.core.matrix.set_selection = (function clojure$core$matrix$set_selection(var_args){
var args__19791__auto__ = [];
var len__19784__auto___39860 = arguments.length;
var i__19785__auto___39861 = (0);
while(true){
if((i__19785__auto___39861 < len__19784__auto___39860)){
args__19791__auto__.push((arguments[i__19785__auto___39861]));

var G__39862 = (i__19785__auto___39861 + (1));
i__19785__auto___39861 = G__39862;
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

clojure.core.matrix.set_selection.cljs$lang$applyTo = (function (seq39854){
var G__39855 = cljs.core.first.call(null,seq39854);
var seq39854__$1 = cljs.core.next.call(null,seq39854);
return clojure.core.matrix.set_selection.cljs$core$IFn$_invoke$arity$variadic(G__39855,seq39854__$1);
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
var args39867 = [];
var len__19784__auto___39875 = arguments.length;
var i__19785__auto___39876 = (0);
while(true){
if((i__19785__auto___39876 < len__19784__auto___39875)){
args39867.push((arguments[i__19785__auto___39876]));

var G__39877 = (i__19785__auto___39876 + (1));
i__19785__auto___39876 = G__39877;
continue;
} else {
}
break;
}

var G__39869 = args39867.length;
switch (G__39869) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39867.length)].join('')));

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
var args39913 = [];
var len__19784__auto___39918 = arguments.length;
var i__19785__auto___39921 = (0);
while(true){
if((i__19785__auto___39921 < len__19784__auto___39918)){
args39913.push((arguments[i__19785__auto___39921]));

var G__39922 = (i__19785__auto___39921 + (1));
i__19785__auto___39921 = G__39922;
continue;
} else {
}
break;
}

var G__39915 = args39913.length;
switch (G__39915) {
case 2:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39913.length)].join('')));

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
var args39927 = [];
var len__19784__auto___39937 = arguments.length;
var i__19785__auto___39939 = (0);
while(true){
if((i__19785__auto___39939 < len__19784__auto___39937)){
args39927.push((arguments[i__19785__auto___39939]));

var G__39941 = (i__19785__auto___39939 + (1));
i__19785__auto___39939 = G__39941;
continue;
} else {
}
break;
}

var G__39932 = args39927.length;
switch (G__39932) {
case 1:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slices.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39927.length)].join('')));

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
var args39955 = [];
var len__19784__auto___39963 = arguments.length;
var i__19785__auto___39964 = (0);
while(true){
if((i__19785__auto___39964 < len__19784__auto___39963)){
args39955.push((arguments[i__19785__auto___39964]));

var G__39965 = (i__19785__auto___39964 + (1));
i__19785__auto___39964 = G__39965;
continue;
} else {
}
break;
}

var G__39958 = args39955.length;
switch (G__39958) {
case 1:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39955.length)].join('')));

}
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$1 = (function (m){
return clojure.core.matrix.protocols.get_major_slice_view_seq.call(null,m);
});

clojure.core.matrix.slice_views.cljs$core$IFn$_invoke$arity$2 = (function (m,dimension){
if(((0) === cljs.core.long$.call(null,dimension))){
return clojure.core.matrix.slice_views.call(null,m);
} else {
return cljs.core.map.call(null,(function (p1__39953_SHARP_){
return clojure.core.matrix.protocols.get_slice_view.call(null,m,dimension,p1__39953_SHARP_);
}),cljs.core.range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,dimension)));
}
});

clojure.core.matrix.slice_views.cljs$lang$maxFixedArity = 2;
/**
 * Gets a view of an array slice. Guaranteed to return a mutable view if the array is mutable.
 */
clojure.core.matrix.slice_view = (function clojure$core$matrix$slice_view(var_args){
var args39967 = [];
var len__19784__auto___39971 = arguments.length;
var i__19785__auto___39972 = (0);
while(true){
if((i__19785__auto___39972 < len__19784__auto___39971)){
args39967.push((arguments[i__19785__auto___39972]));

var G__39973 = (i__19785__auto___39972 + (1));
i__19785__auto___39972 = G__39973;
continue;
} else {
}
break;
}

var G__39969 = args39967.length;
switch (G__39969) {
case 2:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.slice_view.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39967.length)].join('')));

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
var args39978 = [];
var len__19784__auto___39985 = arguments.length;
var i__19785__auto___39986 = (0);
while(true){
if((i__19785__auto___39986 < len__19784__auto___39985)){
args39978.push((arguments[i__19785__auto___39986]));

var G__39987 = (i__19785__auto___39986 + (1));
i__19785__auto___39986 = G__39987;
continue;
} else {
}
break;
}

var G__39982 = args39978.length;
switch (G__39982) {
case 1:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.diagonal.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39978.length)].join('')));

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
var len__19784__auto___39994 = arguments.length;
var i__19785__auto___39995 = (0);
while(true){
if((i__19785__auto___39995 < len__19784__auto___39994)){
args__19791__auto__.push((arguments[i__19785__auto___39995]));

var G__39996 = (i__19785__auto___39995 + (1));
i__19785__auto___39995 = G__39996;
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

clojure.core.matrix.join.cljs$lang$applyTo = (function (seq39992){
return clojure.core.matrix.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39992));
});
/**
 * Joins arrays together, concatenating them along the specified dimension.
 * 
 * Other dimensions must be compatible.
 */
clojure.core.matrix.join_along = (function clojure$core$matrix$join_along(var_args){
var args__19791__auto__ = [];
var len__19784__auto___40002 = arguments.length;
var i__19785__auto___40003 = (0);
while(true){
if((i__19785__auto___40003 < len__19784__auto___40002)){
args__19791__auto__.push((arguments[i__19785__auto___40003]));

var G__40004 = (i__19785__auto___40003 + (1));
i__19785__auto___40003 = G__40004;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic = (function (dimension,arrays){
var or__18726__auto__ = cljs.core.reduce.call(null,(function (p1__39998_SHARP_,p2__39999_SHARP_){
return clojure.core.matrix.protocols.join_along.call(null,p1__39998_SHARP_,p2__39999_SHARP_,dimension);
}),arrays);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Failure to joins arrays")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.join_along.cljs$lang$maxFixedArity = (1);

clojure.core.matrix.join_along.cljs$lang$applyTo = (function (seq40000){
var G__40001 = cljs.core.first.call(null,seq40000);
var seq40000__$1 = cljs.core.next.call(null,seq40000);
return clojure.core.matrix.join_along.cljs$core$IFn$_invoke$arity$variadic(G__40001,seq40000__$1);
});
/**
 * Adds a new value [b] as a new slice to an array [a], returning the extended array.
 * Broadcasts the new value to the correct shape of a slice of a if necessary.
 * 
 * This can be considered as the array equivalent of clojure.core/conj
 */
clojure.core.matrix.conjoin = (function clojure$core$matrix$conjoin(var_args){
var args40007 = [];
var len__19784__auto___40015 = arguments.length;
var i__19785__auto___40016 = (0);
while(true){
if((i__19785__auto___40016 < len__19784__auto___40015)){
args40007.push((arguments[i__19785__auto___40016]));

var G__40017 = (i__19785__auto___40016 + (1));
i__19785__auto___40016 = G__40017;
continue;
} else {
}
break;
}

var G__40013 = args40007.length;
switch (G__40013) {
case 2:
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40007.slice((2)),(0)));
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
return (function (p1__40006_SHARP_){
return clojure.core.matrix.protocols.broadcast.call(null,p1__40006_SHARP_,ss);
});})(ss))
,cljs.core.cons.call(null,b,more));
return clojure.core.matrix.join.call(null,a,slcs);
});

clojure.core.matrix.conjoin.cljs$lang$applyTo = (function (seq40008){
var G__40009 = cljs.core.first.call(null,seq40008);
var seq40008__$1 = cljs.core.next.call(null,seq40008);
var G__40010 = cljs.core.first.call(null,seq40008__$1);
var seq40008__$2 = cljs.core.next.call(null,seq40008__$1);
return clojure.core.matrix.conjoin.cljs$core$IFn$_invoke$arity$variadic(G__40009,G__40010,seq40008__$2);
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
var args40021 = [];
var len__19784__auto___40045 = arguments.length;
var i__19785__auto___40046 = (0);
while(true){
if((i__19785__auto___40046 < len__19784__auto___40045)){
args40021.push((arguments[i__19785__auto___40046]));

var G__40048 = (i__19785__auto___40046 + (1));
i__19785__auto___40046 = G__40048;
continue;
} else {
}
break;
}

var G__40030 = args40021.length;
switch (G__40030) {
case 3:
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40021.slice((3)),(0)));
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

clojure.core.matrix.conjoin_along.cljs$lang$applyTo = (function (seq40022){
var G__40023 = cljs.core.first.call(null,seq40022);
var seq40022__$1 = cljs.core.next.call(null,seq40022);
var G__40024 = cljs.core.first.call(null,seq40022__$1);
var seq40022__$2 = cljs.core.next.call(null,seq40022__$1);
var G__40025 = cljs.core.first.call(null,seq40022__$2);
var seq40022__$3 = cljs.core.next.call(null,seq40022__$2);
return clojure.core.matrix.conjoin_along.cljs$core$IFn$_invoke$arity$variadic(G__40023,G__40024,G__40025,seq40022__$3);
});

clojure.core.matrix.conjoin_along.cljs$lang$maxFixedArity = (3);
/**
 * Rotates an array along specified dimensions.
 * 
 * Elements rotated off will re-appear at the other side. The shape of the array will not be modified.
 */
clojure.core.matrix.rotate = (function clojure$core$matrix$rotate(var_args){
var args40082 = [];
var len__19784__auto___40093 = arguments.length;
var i__19785__auto___40095 = (0);
while(true){
if((i__19785__auto___40095 < len__19784__auto___40093)){
args40082.push((arguments[i__19785__auto___40095]));

var G__40097 = (i__19785__auto___40095 + (1));
i__19785__auto___40095 = G__40097;
continue;
} else {
}
break;
}

var G__40090 = args40082.length;
switch (G__40090) {
case 3:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.rotate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40082.length)].join('')));

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
var args40101 = [];
var len__19784__auto___40106 = arguments.length;
var i__19785__auto___40107 = (0);
while(true){
if((i__19785__auto___40107 < len__19784__auto___40106)){
args40101.push((arguments[i__19785__auto___40107]));

var G__40109 = (i__19785__auto___40107 + (1));
i__19785__auto___40107 = G__40109;
continue;
} else {
}
break;
}

var G__40103 = args40101.length;
switch (G__40103) {
case 3:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return clojure.core.matrix.shift.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40101.length)].join('')));

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
var args40112 = [];
var len__19784__auto___40118 = arguments.length;
var i__19785__auto___40119 = (0);
while(true){
if((i__19785__auto___40119 < len__19784__auto___40118)){
args40112.push((arguments[i__19785__auto___40119]));

var G__40120 = (i__19785__auto___40119 + (1));
i__19785__auto___40119 = G__40120;
continue;
} else {
}
break;
}

var G__40116 = args40112.length;
switch (G__40116) {
case 2:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.order.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40112.length)].join('')));

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
var args40127 = [];
var len__19784__auto___40133 = arguments.length;
var i__19785__auto___40134 = (0);
while(true){
if((i__19785__auto___40134 < len__19784__auto___40133)){
args40127.push((arguments[i__19785__auto___40134]));

var G__40151 = (i__19785__auto___40134 + (1));
i__19785__auto___40134 = G__40151;
continue;
} else {
}
break;
}

var G__40130 = args40127.length;
switch (G__40130) {
case 1:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.transpose.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40127.length)].join('')));

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
var args40187 = [];
var len__19784__auto___40191 = arguments.length;
var i__19785__auto___40192 = (0);
while(true){
if((i__19785__auto___40192 < len__19784__auto___40191)){
args40187.push((arguments[i__19785__auto___40192]));

var G__40193 = (i__19785__auto___40192 + (1));
i__19785__auto___40192 = G__40193;
continue;
} else {
}
break;
}

var G__40189 = args40187.length;
switch (G__40189) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40187.length)].join('')));

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
var args40202 = [];
var len__19784__auto___40211 = arguments.length;
var i__19785__auto___40212 = (0);
while(true){
if((i__19785__auto___40212 < len__19784__auto___40211)){
args40202.push((arguments[i__19785__auto___40212]));

var G__40213 = (i__19785__auto___40212 + (1));
i__19785__auto___40212 = G__40213;
continue;
} else {
}
break;
}

var G__40208 = args40202.length;
switch (G__40208) {
case 2:
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40202.slice((2)),(0)));
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

clojure.core.matrix.lt.cljs$lang$applyTo = (function (seq40203){
var G__40204 = cljs.core.first.call(null,seq40203);
var seq40203__$1 = cljs.core.next.call(null,seq40203);
var G__40205 = cljs.core.first.call(null,seq40203__$1);
var seq40203__$2 = cljs.core.next.call(null,seq40203__$1);
return clojure.core.matrix.lt.cljs$core$IFn$_invoke$arity$variadic(G__40204,G__40205,seq40203__$2);
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
var args40218 = [];
var len__19784__auto___40230 = arguments.length;
var i__19785__auto___40231 = (0);
while(true){
if((i__19785__auto___40231 < len__19784__auto___40230)){
args40218.push((arguments[i__19785__auto___40231]));

var G__40232 = (i__19785__auto___40231 + (1));
i__19785__auto___40231 = G__40232;
continue;
} else {
}
break;
}

var G__40226 = args40218.length;
switch (G__40226) {
case 2:
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40218.slice((2)),(0)));
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

clojure.core.matrix.le.cljs$lang$applyTo = (function (seq40219){
var G__40220 = cljs.core.first.call(null,seq40219);
var seq40219__$1 = cljs.core.next.call(null,seq40219);
var G__40221 = cljs.core.first.call(null,seq40219__$1);
var seq40219__$2 = cljs.core.next.call(null,seq40219__$1);
return clojure.core.matrix.le.cljs$core$IFn$_invoke$arity$variadic(G__40220,G__40221,seq40219__$2);
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
var args40240 = [];
var len__19784__auto___40246 = arguments.length;
var i__19785__auto___40247 = (0);
while(true){
if((i__19785__auto___40247 < len__19784__auto___40246)){
args40240.push((arguments[i__19785__auto___40247]));

var G__40248 = (i__19785__auto___40247 + (1));
i__19785__auto___40247 = G__40248;
continue;
} else {
}
break;
}

var G__40245 = args40240.length;
switch (G__40245) {
case 2:
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40240.slice((2)),(0)));
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

clojure.core.matrix.gt.cljs$lang$applyTo = (function (seq40241){
var G__40242 = cljs.core.first.call(null,seq40241);
var seq40241__$1 = cljs.core.next.call(null,seq40241);
var G__40243 = cljs.core.first.call(null,seq40241__$1);
var seq40241__$2 = cljs.core.next.call(null,seq40241__$1);
return clojure.core.matrix.gt.cljs$core$IFn$_invoke$arity$variadic(G__40242,G__40243,seq40241__$2);
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
var args40250 = [];
var len__19784__auto___40256 = arguments.length;
var i__19785__auto___40257 = (0);
while(true){
if((i__19785__auto___40257 < len__19784__auto___40256)){
args40250.push((arguments[i__19785__auto___40257]));

var G__40258 = (i__19785__auto___40257 + (1));
i__19785__auto___40257 = G__40258;
continue;
} else {
}
break;
}

var G__40255 = args40250.length;
switch (G__40255) {
case 2:
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40250.slice((2)),(0)));
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

clojure.core.matrix.ge.cljs$lang$applyTo = (function (seq40251){
var G__40252 = cljs.core.first.call(null,seq40251);
var seq40251__$1 = cljs.core.next.call(null,seq40251);
var G__40253 = cljs.core.first.call(null,seq40251__$1);
var seq40251__$2 = cljs.core.next.call(null,seq40251__$1);
return clojure.core.matrix.ge.cljs$core$IFn$_invoke$arity$variadic(G__40252,G__40253,seq40251__$2);
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
var args40260 = [];
var len__19784__auto___40269 = arguments.length;
var i__19785__auto___40270 = (0);
while(true){
if((i__19785__auto___40270 < len__19784__auto___40269)){
args40260.push((arguments[i__19785__auto___40270]));

var G__40271 = (i__19785__auto___40270 + (1));
i__19785__auto___40270 = G__40271;
continue;
} else {
}
break;
}

var G__40265 = args40260.length;
switch (G__40265) {
case 1:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40260.slice((2)),(0)));
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

clojure.core.matrix.e_EQ_.cljs$lang$applyTo = (function (seq40261){
var G__40262 = cljs.core.first.call(null,seq40261);
var seq40261__$1 = cljs.core.next.call(null,seq40261);
var G__40263 = cljs.core.first.call(null,seq40261__$1);
var seq40261__$2 = cljs.core.next.call(null,seq40261__$1);
return clojure.core.matrix.e_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40262,G__40263,seq40261__$2);
});

clojure.core.matrix.e_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Returns true if all corresponding array elements are numerically equal.
 * 
 * Throws an error if any elements of the arrays being compared are not numerical values.
 */
clojure.core.matrix.e_EQ__EQ_ = (function clojure$core$matrix$e_EQ__EQ_(var_args){
var args40276 = [];
var len__19784__auto___40282 = arguments.length;
var i__19785__auto___40283 = (0);
while(true){
if((i__19785__auto___40283 < len__19784__auto___40282)){
args40276.push((arguments[i__19785__auto___40283]));

var G__40284 = (i__19785__auto___40283 + (1));
i__19785__auto___40283 = G__40284;
continue;
} else {
}
break;
}

var G__40281 = args40276.length;
switch (G__40281) {
case 1:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40276.slice((2)),(0)));
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

clojure.core.matrix.e_EQ__EQ_.cljs$lang$applyTo = (function (seq40277){
var G__40278 = cljs.core.first.call(null,seq40277);
var seq40277__$1 = cljs.core.next.call(null,seq40277);
var G__40279 = cljs.core.first.call(null,seq40277__$1);
var seq40277__$2 = cljs.core.next.call(null,seq40277__$1);
return clojure.core.matrix.e_EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40278,G__40279,seq40277__$2);
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
var args40292 = [];
var len__19784__auto___40298 = arguments.length;
var i__19785__auto___40299 = (0);
while(true){
if((i__19785__auto___40299 < len__19784__auto___40298)){
args40292.push((arguments[i__19785__auto___40299]));

var G__40300 = (i__19785__auto___40299 + (1));
i__19785__auto___40299 = G__40300;
continue;
} else {
}
break;
}

var G__40297 = args40292.length;
switch (G__40297) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40292.slice((2)),(0)));
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

clojure.core.matrix.mul.cljs$lang$applyTo = (function (seq40293){
var G__40294 = cljs.core.first.call(null,seq40293);
var seq40293__$1 = cljs.core.next.call(null,seq40293);
var G__40295 = cljs.core.first.call(null,seq40293__$1);
var seq40293__$2 = cljs.core.next.call(null,seq40293__$1);
return clojure.core.matrix.mul.cljs$core$IFn$_invoke$arity$variadic(G__40294,G__40295,seq40293__$2);
});

clojure.core.matrix.mul.cljs$lang$maxFixedArity = (2);
/**
 * DEPRECATED: please use mul instead.
 */
clojure.core.matrix.emul = (function clojure$core$matrix$emul(var_args){
var args40332 = [];
var len__19784__auto___40341 = arguments.length;
var i__19785__auto___40342 = (0);
while(true){
if((i__19785__auto___40342 < len__19784__auto___40341)){
args40332.push((arguments[i__19785__auto___40342]));

var G__40343 = (i__19785__auto___40342 + (1));
i__19785__auto___40342 = G__40343;
continue;
} else {
}
break;
}

var G__40337 = args40332.length;
switch (G__40337) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40332.slice((2)),(0)));
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

clojure.core.matrix.emul.cljs$lang$applyTo = (function (seq40333){
var G__40334 = cljs.core.first.call(null,seq40333);
var seq40333__$1 = cljs.core.next.call(null,seq40333);
var G__40335 = cljs.core.first.call(null,seq40333__$1);
var seq40333__$2 = cljs.core.next.call(null,seq40333__$1);
return clojure.core.matrix.emul.cljs$core$IFn$_invoke$arity$variadic(G__40334,G__40335,seq40333__$2);
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
var args40358 = [];
var len__19784__auto___40366 = arguments.length;
var i__19785__auto___40367 = (0);
while(true){
if((i__19785__auto___40367 < len__19784__auto___40366)){
args40358.push((arguments[i__19785__auto___40367]));

var G__40368 = (i__19785__auto___40367 + (1));
i__19785__auto___40367 = G__40368;
continue;
} else {
}
break;
}

var G__40365 = args40358.length;
switch (G__40365) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40358.slice((2)),(0)));
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

clojure.core.matrix.mmul.cljs$lang$applyTo = (function (seq40359){
var G__40360 = cljs.core.first.call(null,seq40359);
var seq40359__$1 = cljs.core.next.call(null,seq40359);
var G__40361 = cljs.core.first.call(null,seq40359__$1);
var seq40359__$2 = cljs.core.next.call(null,seq40359__$1);
return clojure.core.matrix.mmul.cljs$core$IFn$_invoke$arity$variadic(G__40360,G__40361,seq40359__$2);
});

clojure.core.matrix.mmul.cljs$lang$maxFixedArity = (2);
/**
 * An element-wise multiply operator equivalent to `mul`.
 */
clojure.core.matrix.e_STAR_ = (function clojure$core$matrix$e_STAR_(var_args){
var args40370 = [];
var len__19784__auto___40377 = arguments.length;
var i__19785__auto___40378 = (0);
while(true){
if((i__19785__auto___40378 < len__19784__auto___40377)){
args40370.push((arguments[i__19785__auto___40378]));

var G__40379 = (i__19785__auto___40378 + (1));
i__19785__auto___40378 = G__40379;
continue;
} else {
}
break;
}

var G__40375 = args40370.length;
switch (G__40375) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40370.slice((2)),(0)));
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

clojure.core.matrix.e_STAR_.cljs$lang$applyTo = (function (seq40371){
var G__40372 = cljs.core.first.call(null,seq40371);
var seq40371__$1 = cljs.core.next.call(null,seq40371);
var G__40373 = cljs.core.first.call(null,seq40371__$1);
var seq40371__$2 = cljs.core.next.call(null,seq40371__$1);
return clojure.core.matrix.e_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__40372,G__40373,seq40371__$2);
});

clojure.core.matrix.e_STAR_.cljs$lang$maxFixedArity = (2);
/**
 * Performs element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div = (function clojure$core$matrix$div(var_args){
var args40387 = [];
var len__19784__auto___40393 = arguments.length;
var i__19785__auto___40394 = (0);
while(true){
if((i__19785__auto___40394 < len__19784__auto___40393)){
args40387.push((arguments[i__19785__auto___40394]));

var G__40395 = (i__19785__auto___40394 + (1));
i__19785__auto___40394 = G__40395;
continue;
} else {
}
break;
}

var G__40392 = args40387.length;
switch (G__40392) {
case 1:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40387.slice((2)),(0)));
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

clojure.core.matrix.div.cljs$lang$applyTo = (function (seq40388){
var G__40389 = cljs.core.first.call(null,seq40388);
var seq40388__$1 = cljs.core.next.call(null,seq40388);
var G__40390 = cljs.core.first.call(null,seq40388__$1);
var seq40388__$2 = cljs.core.next.call(null,seq40388__$1);
return clojure.core.matrix.div.cljs$core$IFn$_invoke$arity$variadic(G__40389,G__40390,seq40388__$2);
});

clojure.core.matrix.div.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise matrix division for numerical arrays.
 * 
 * Computes the reciprocal of each element when passed a single argument (similar to clojure.core//).
 */
clojure.core.matrix.div_BANG_ = (function clojure$core$matrix$div_BANG_(var_args){
var args40398 = [];
var len__19784__auto___40411 = arguments.length;
var i__19785__auto___40412 = (0);
while(true){
if((i__19785__auto___40412 < len__19784__auto___40411)){
args40398.push((arguments[i__19785__auto___40412]));

var G__40413 = (i__19785__auto___40412 + (1));
i__19785__auto___40412 = G__40413;
continue;
} else {
}
break;
}

var G__40405 = args40398.length;
switch (G__40405) {
case 1:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40398.slice((2)),(0)));
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

var seq__40406_40415 = cljs.core.seq.call(null,more);
var chunk__40407_40416 = null;
var count__40408_40417 = (0);
var i__40409_40418 = (0);
while(true){
if((i__40409_40418 < count__40408_40417)){
var c_40419 = cljs.core._nth.call(null,chunk__40407_40416,i__40409_40418);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_40419);

var G__40420 = seq__40406_40415;
var G__40421 = chunk__40407_40416;
var G__40422 = count__40408_40417;
var G__40423 = (i__40409_40418 + (1));
seq__40406_40415 = G__40420;
chunk__40407_40416 = G__40421;
count__40408_40417 = G__40422;
i__40409_40418 = G__40423;
continue;
} else {
var temp__4657__auto___40424 = cljs.core.seq.call(null,seq__40406_40415);
if(temp__4657__auto___40424){
var seq__40406_40425__$1 = temp__4657__auto___40424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40406_40425__$1)){
var c__19529__auto___40426 = cljs.core.chunk_first.call(null,seq__40406_40425__$1);
var G__40427 = cljs.core.chunk_rest.call(null,seq__40406_40425__$1);
var G__40428 = c__19529__auto___40426;
var G__40429 = cljs.core.count.call(null,c__19529__auto___40426);
var G__40430 = (0);
seq__40406_40415 = G__40427;
chunk__40407_40416 = G__40428;
count__40408_40417 = G__40429;
i__40409_40418 = G__40430;
continue;
} else {
var c_40431 = cljs.core.first.call(null,seq__40406_40425__$1);
clojure.core.matrix.protocols.element_divide_BANG_.call(null,a,c_40431);

var G__40432 = cljs.core.next.call(null,seq__40406_40425__$1);
var G__40433 = null;
var G__40434 = (0);
var G__40435 = (0);
seq__40406_40415 = G__40432;
chunk__40407_40416 = G__40433;
count__40408_40417 = G__40434;
i__40409_40418 = G__40435;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.div_BANG_.cljs$lang$applyTo = (function (seq40399){
var G__40400 = cljs.core.first.call(null,seq40399);
var seq40399__$1 = cljs.core.next.call(null,seq40399);
var G__40401 = cljs.core.first.call(null,seq40399__$1);
var seq40399__$2 = cljs.core.next.call(null,seq40399__$1);
return clojure.core.matrix.div_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40400,G__40401,seq40399__$2);
});

clojure.core.matrix.div_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.mul_BANG_ = (function clojure$core$matrix$mul_BANG_(var_args){
var args40436 = [];
var len__19784__auto___40450 = arguments.length;
var i__19785__auto___40451 = (0);
while(true){
if((i__19785__auto___40451 < len__19784__auto___40450)){
args40436.push((arguments[i__19785__auto___40451]));

var G__40453 = (i__19785__auto___40451 + (1));
i__19785__auto___40451 = G__40453;
continue;
} else {
}
break;
}

var G__40443 = args40436.length;
switch (G__40443) {
case 1:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40436.slice((2)),(0)));
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

var seq__40444_40459 = cljs.core.seq.call(null,more);
var chunk__40445_40460 = null;
var count__40446_40461 = (0);
var i__40447_40462 = (0);
while(true){
if((i__40447_40462 < count__40446_40461)){
var c_40484 = cljs.core._nth.call(null,chunk__40445_40460,i__40447_40462);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_40484);

var G__40495 = seq__40444_40459;
var G__40496 = chunk__40445_40460;
var G__40497 = count__40446_40461;
var G__40498 = (i__40447_40462 + (1));
seq__40444_40459 = G__40495;
chunk__40445_40460 = G__40496;
count__40446_40461 = G__40497;
i__40447_40462 = G__40498;
continue;
} else {
var temp__4657__auto___40528 = cljs.core.seq.call(null,seq__40444_40459);
if(temp__4657__auto___40528){
var seq__40444_40530__$1 = temp__4657__auto___40528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40444_40530__$1)){
var c__19529__auto___40533 = cljs.core.chunk_first.call(null,seq__40444_40530__$1);
var G__40534 = cljs.core.chunk_rest.call(null,seq__40444_40530__$1);
var G__40535 = c__19529__auto___40533;
var G__40536 = cljs.core.count.call(null,c__19529__auto___40533);
var G__40537 = (0);
seq__40444_40459 = G__40534;
chunk__40445_40460 = G__40535;
count__40446_40461 = G__40536;
i__40447_40462 = G__40537;
continue;
} else {
var c_40540 = cljs.core.first.call(null,seq__40444_40530__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_40540);

var G__40543 = cljs.core.next.call(null,seq__40444_40530__$1);
var G__40544 = null;
var G__40545 = (0);
var G__40546 = (0);
seq__40444_40459 = G__40543;
chunk__40445_40460 = G__40544;
count__40446_40461 = G__40545;
i__40447_40462 = G__40546;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.mul_BANG_.cljs$lang$applyTo = (function (seq40437){
var G__40438 = cljs.core.first.call(null,seq40437);
var seq40437__$1 = cljs.core.next.call(null,seq40437);
var G__40439 = cljs.core.first.call(null,seq40437__$1);
var seq40437__$2 = cljs.core.next.call(null,seq40437__$1);
return clojure.core.matrix.mul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40438,G__40439,seq40437__$2);
});

clojure.core.matrix.mul_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Performs in-place element-wise multiplication of numerical arrays.
 * 
 * Returns the first argument after mutation.
 */
clojure.core.matrix.emul_BANG_ = (function clojure$core$matrix$emul_BANG_(var_args){
var args40558 = [];
var len__19784__auto___40585 = arguments.length;
var i__19785__auto___40586 = (0);
while(true){
if((i__19785__auto___40586 < len__19784__auto___40585)){
args40558.push((arguments[i__19785__auto___40586]));

var G__40589 = (i__19785__auto___40586 + (1));
i__19785__auto___40586 = G__40589;
continue;
} else {
}
break;
}

var G__40569 = args40558.length;
switch (G__40569) {
case 1:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40558.slice((2)),(0)));
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

var seq__40575_40620 = cljs.core.seq.call(null,more);
var chunk__40576_40621 = null;
var count__40577_40622 = (0);
var i__40578_40623 = (0);
while(true){
if((i__40578_40623 < count__40577_40622)){
var c_40638 = cljs.core._nth.call(null,chunk__40576_40621,i__40578_40623);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_40638);

var G__40639 = seq__40575_40620;
var G__40640 = chunk__40576_40621;
var G__40641 = count__40577_40622;
var G__40642 = (i__40578_40623 + (1));
seq__40575_40620 = G__40639;
chunk__40576_40621 = G__40640;
count__40577_40622 = G__40641;
i__40578_40623 = G__40642;
continue;
} else {
var temp__4657__auto___40643 = cljs.core.seq.call(null,seq__40575_40620);
if(temp__4657__auto___40643){
var seq__40575_40644__$1 = temp__4657__auto___40643;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40575_40644__$1)){
var c__19529__auto___40645 = cljs.core.chunk_first.call(null,seq__40575_40644__$1);
var G__40646 = cljs.core.chunk_rest.call(null,seq__40575_40644__$1);
var G__40647 = c__19529__auto___40645;
var G__40648 = cljs.core.count.call(null,c__19529__auto___40645);
var G__40649 = (0);
seq__40575_40620 = G__40646;
chunk__40576_40621 = G__40647;
count__40577_40622 = G__40648;
i__40578_40623 = G__40649;
continue;
} else {
var c_40664 = cljs.core.first.call(null,seq__40575_40644__$1);
clojure.core.matrix.protocols.element_multiply_BANG_.call(null,a,c_40664);

var G__40676 = cljs.core.next.call(null,seq__40575_40644__$1);
var G__40677 = null;
var G__40678 = (0);
var G__40679 = (0);
seq__40575_40620 = G__40676;
chunk__40576_40621 = G__40677;
count__40577_40622 = G__40678;
i__40578_40623 = G__40679;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.emul_BANG_.cljs$lang$applyTo = (function (seq40559){
var G__40561 = cljs.core.first.call(null,seq40559);
var seq40559__$1 = cljs.core.next.call(null,seq40559);
var G__40562 = cljs.core.first.call(null,seq40559__$1);
var seq40559__$2 = cljs.core.next.call(null,seq40559__$1);
return clojure.core.matrix.emul_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40561,G__40562,seq40559__$2);
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
var args40700 = [];
var len__19784__auto___40708 = arguments.length;
var i__19785__auto___40709 = (0);
while(true){
if((i__19785__auto___40709 < len__19784__auto___40708)){
args40700.push((arguments[i__19785__auto___40709]));

var G__40711 = (i__19785__auto___40709 + (1));
i__19785__auto___40709 = G__40711;
continue;
} else {
}
break;
}

var G__40705 = args40700.length;
switch (G__40705) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40700.slice((2)),(0)));
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

clojure.core.matrix.add.cljs$lang$applyTo = (function (seq40701){
var G__40702 = cljs.core.first.call(null,seq40701);
var seq40701__$1 = cljs.core.next.call(null,seq40701);
var G__40703 = cljs.core.first.call(null,seq40701__$1);
var seq40701__$2 = cljs.core.next.call(null,seq40701__$1);
return clojure.core.matrix.add.cljs$core$IFn$_invoke$arity$variadic(G__40702,G__40703,seq40701__$2);
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
var args40733 = [];
var len__19784__auto___40744 = arguments.length;
var i__19785__auto___40745 = (0);
while(true){
if((i__19785__auto___40745 < len__19784__auto___40744)){
args40733.push((arguments[i__19785__auto___40745]));

var G__40746 = (i__19785__auto___40745 + (1));
i__19785__auto___40745 = G__40746;
continue;
} else {
}
break;
}

var G__40738 = args40733.length;
switch (G__40738) {
case 1:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40733.slice((2)),(0)));
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

var seq__40740_40752 = cljs.core.seq.call(null,more);
var chunk__40741_40753 = null;
var count__40742_40754 = (0);
var i__40743_40755 = (0);
while(true){
if((i__40743_40755 < count__40742_40754)){
var m_40757 = cljs.core._nth.call(null,chunk__40741_40753,i__40743_40755);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_40757);

var G__40758 = seq__40740_40752;
var G__40759 = chunk__40741_40753;
var G__40760 = count__40742_40754;
var G__40761 = (i__40743_40755 + (1));
seq__40740_40752 = G__40758;
chunk__40741_40753 = G__40759;
count__40742_40754 = G__40760;
i__40743_40755 = G__40761;
continue;
} else {
var temp__4657__auto___40763 = cljs.core.seq.call(null,seq__40740_40752);
if(temp__4657__auto___40763){
var seq__40740_40764__$1 = temp__4657__auto___40763;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40740_40764__$1)){
var c__19529__auto___40765 = cljs.core.chunk_first.call(null,seq__40740_40764__$1);
var G__40766 = cljs.core.chunk_rest.call(null,seq__40740_40764__$1);
var G__40767 = c__19529__auto___40765;
var G__40768 = cljs.core.count.call(null,c__19529__auto___40765);
var G__40769 = (0);
seq__40740_40752 = G__40766;
chunk__40741_40753 = G__40767;
count__40742_40754 = G__40768;
i__40743_40755 = G__40769;
continue;
} else {
var m_40770 = cljs.core.first.call(null,seq__40740_40764__$1);
clojure.core.matrix.protocols.matrix_add_BANG_.call(null,a,m_40770);

var G__40771 = cljs.core.next.call(null,seq__40740_40764__$1);
var G__40772 = null;
var G__40773 = (0);
var G__40774 = (0);
seq__40740_40752 = G__40771;
chunk__40741_40753 = G__40772;
count__40742_40754 = G__40773;
i__40743_40755 = G__40774;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.add_BANG_.cljs$lang$applyTo = (function (seq40734){
var G__40735 = cljs.core.first.call(null,seq40734);
var seq40734__$1 = cljs.core.next.call(null,seq40734);
var G__40736 = cljs.core.first.call(null,seq40734__$1);
var seq40734__$2 = cljs.core.next.call(null,seq40734__$1);
return clojure.core.matrix.add_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40735,G__40736,seq40734__$2);
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
var args40778 = [];
var len__19784__auto___40783 = arguments.length;
var i__19785__auto___40784 = (0);
while(true){
if((i__19785__auto___40784 < len__19784__auto___40783)){
args40778.push((arguments[i__19785__auto___40784]));

var G__40785 = (i__19785__auto___40784 + (1));
i__19785__auto___40784 = G__40785;
continue;
} else {
}
break;
}

var G__40781 = args40778.length;
switch (G__40781) {
case 4:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40778.length)].join('')));

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
var args40790 = [];
var len__19784__auto___40797 = arguments.length;
var i__19785__auto___40798 = (0);
while(true){
if((i__19785__auto___40798 < len__19784__auto___40797)){
args40790.push((arguments[i__19785__auto___40798]));

var G__40799 = (i__19785__auto___40798 + (1));
i__19785__auto___40798 = G__40799;
continue;
} else {
}
break;
}

var G__40793 = args40790.length;
switch (G__40793) {
case 4:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return clojure.core.matrix.scale_add_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40790.length)].join('')));

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
var args40808 = [];
var len__19784__auto___40812 = arguments.length;
var i__19785__auto___40813 = (0);
while(true){
if((i__19785__auto___40813 < len__19784__auto___40812)){
args40808.push((arguments[i__19785__auto___40813]));

var G__40815 = (i__19785__auto___40813 + (1));
i__19785__auto___40813 = G__40815;
continue;
} else {
}
break;
}

var G__40810 = args40808.length;
switch (G__40810) {
case 3:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40808.length)].join('')));

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
var args40822 = [];
var len__19784__auto___40827 = arguments.length;
var i__19785__auto___40828 = (0);
while(true){
if((i__19785__auto___40828 < len__19784__auto___40827)){
args40822.push((arguments[i__19785__auto___40828]));

var G__40830 = (i__19785__auto___40828 + (1));
i__19785__auto___40828 = G__40830;
continue;
} else {
}
break;
}

var G__40824 = args40822.length;
switch (G__40824) {
case 3:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_outer_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40822.length)].join('')));

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
var args40836 = [];
var len__19784__auto___40842 = arguments.length;
var i__19785__auto___40843 = (0);
while(true){
if((i__19785__auto___40843 < len__19784__auto___40842)){
args40836.push((arguments[i__19785__auto___40843]));

var G__40855 = (i__19785__auto___40843 + (1));
i__19785__auto___40843 = G__40855;
continue;
} else {
}
break;
}

var G__40839 = args40836.length;
switch (G__40839) {
case 3:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.set_inner_product_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40836.length)].join('')));

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
var args40880 = [];
var len__19784__auto___40907 = arguments.length;
var i__19785__auto___40908 = (0);
while(true){
if((i__19785__auto___40908 < len__19784__auto___40907)){
args40880.push((arguments[i__19785__auto___40908]));

var G__40909 = (i__19785__auto___40908 + (1));
i__19785__auto___40908 = G__40909;
continue;
} else {
}
break;
}

var G__40895 = args40880.length;
switch (G__40895) {
case 1:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40880.slice((2)),(0)));
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

clojure.core.matrix.sub.cljs$lang$applyTo = (function (seq40881){
var G__40882 = cljs.core.first.call(null,seq40881);
var seq40881__$1 = cljs.core.next.call(null,seq40881);
var G__40883 = cljs.core.first.call(null,seq40881__$1);
var seq40881__$2 = cljs.core.next.call(null,seq40881__$1);
return clojure.core.matrix.sub.cljs$core$IFn$_invoke$arity$variadic(G__40882,G__40883,seq40881__$2);
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
var args40915 = [];
var len__19784__auto___40929 = arguments.length;
var i__19785__auto___40930 = (0);
while(true){
if((i__19785__auto___40930 < len__19784__auto___40929)){
args40915.push((arguments[i__19785__auto___40930]));

var G__40987 = (i__19785__auto___40930 + (1));
i__19785__auto___40930 = G__40987;
continue;
} else {
}
break;
}

var G__40923 = args40915.length;
switch (G__40923) {
case 1:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40915.slice((2)),(0)));
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

var seq__40924_40989 = cljs.core.seq.call(null,more);
var chunk__40925_40990 = null;
var count__40926_40991 = (0);
var i__40927_40992 = (0);
while(true){
if((i__40927_40992 < count__40926_40991)){
var m_40993 = cljs.core._nth.call(null,chunk__40925_40990,i__40927_40992);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_40993);

var G__40994 = seq__40924_40989;
var G__40995 = chunk__40925_40990;
var G__40996 = count__40926_40991;
var G__40997 = (i__40927_40992 + (1));
seq__40924_40989 = G__40994;
chunk__40925_40990 = G__40995;
count__40926_40991 = G__40996;
i__40927_40992 = G__40997;
continue;
} else {
var temp__4657__auto___40998 = cljs.core.seq.call(null,seq__40924_40989);
if(temp__4657__auto___40998){
var seq__40924_40999__$1 = temp__4657__auto___40998;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40924_40999__$1)){
var c__19529__auto___41000 = cljs.core.chunk_first.call(null,seq__40924_40999__$1);
var G__41002 = cljs.core.chunk_rest.call(null,seq__40924_40999__$1);
var G__41003 = c__19529__auto___41000;
var G__41004 = cljs.core.count.call(null,c__19529__auto___41000);
var G__41005 = (0);
seq__40924_40989 = G__41002;
chunk__40925_40990 = G__41003;
count__40926_40991 = G__41004;
i__40927_40992 = G__41005;
continue;
} else {
var m_41011 = cljs.core.first.call(null,seq__40924_40999__$1);
clojure.core.matrix.protocols.matrix_sub_BANG_.call(null,a,m_41011);

var G__41015 = cljs.core.next.call(null,seq__40924_40999__$1);
var G__41016 = null;
var G__41017 = (0);
var G__41018 = (0);
seq__40924_40989 = G__41015;
chunk__40925_40990 = G__41016;
count__40926_40991 = G__41017;
i__40927_40992 = G__41018;
continue;
}
} else {
}
}
break;
}

return a;
});

clojure.core.matrix.sub_BANG_.cljs$lang$applyTo = (function (seq40916){
var G__40917 = cljs.core.first.call(null,seq40916);
var seq40916__$1 = cljs.core.next.call(null,seq40916);
var G__40918 = cljs.core.first.call(null,seq40916__$1);
var seq40916__$2 = cljs.core.next.call(null,seq40916__$1);
return clojure.core.matrix.sub_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__40917,G__40918,seq40916__$2);
});

clojure.core.matrix.sub_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Scales a array by one or more scalar factors. The default implementation supports numerical arrays and
 * numbers as scalar values, however matrix implementations may extend this to support other scalar types.
 * 
 * Returns a new scaled matrix.
 */
clojure.core.matrix.scale = (function clojure$core$matrix$scale(var_args){
var args41026 = [];
var len__19784__auto___41036 = arguments.length;
var i__19785__auto___41037 = (0);
while(true){
if((i__19785__auto___41037 < len__19784__auto___41036)){
args41026.push((arguments[i__19785__auto___41037]));

var G__41038 = (i__19785__auto___41037 + (1));
i__19785__auto___41037 = G__41038;
continue;
} else {
}
break;
}

var G__41034 = args41026.length;
switch (G__41034) {
case 2:
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41026.slice((2)),(0)));
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$2 = (function (m,factor){
return clojure.core.matrix.protocols.scale.call(null,m,factor);
});

clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic = (function (m,factor,more_factors){
return clojure.core.matrix.protocols.scale.call(null,m,clojure.core.matrix.protocols.element_multiply.call(null,factor,cljs.core.reduce.call(null,clojure.core.matrix.protocols.element_multiply,more_factors)));
});

clojure.core.matrix.scale.cljs$lang$applyTo = (function (seq41027){
var G__41028 = cljs.core.first.call(null,seq41027);
var seq41027__$1 = cljs.core.next.call(null,seq41027);
var G__41029 = cljs.core.first.call(null,seq41027__$1);
var seq41027__$2 = cljs.core.next.call(null,seq41027__$1);
return clojure.core.matrix.scale.cljs$core$IFn$_invoke$arity$variadic(G__41028,G__41029,seq41027__$2);
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
var args41043 = [];
var len__19784__auto___41052 = arguments.length;
var i__19785__auto___41053 = (0);
while(true){
if((i__19785__auto___41053 < len__19784__auto___41052)){
args41043.push((arguments[i__19785__auto___41053]));

var G__41055 = (i__19785__auto___41053 + (1));
i__19785__auto___41053 = G__41055;
continue;
} else {
}
break;
}

var G__41049 = args41043.length;
switch (G__41049) {
case 2:
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41043.slice((2)),(0)));
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

clojure.core.matrix.scale_BANG_.cljs$lang$applyTo = (function (seq41044){
var G__41045 = cljs.core.first.call(null,seq41044);
var seq41044__$1 = cljs.core.next.call(null,seq41044);
var G__41046 = cljs.core.first.call(null,seq41044__$1);
var seq41044__$2 = cljs.core.next.call(null,seq41044__$1);
return clojure.core.matrix.scale_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41045,G__41046,seq41044__$2);
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
var args41062 = [];
var len__19784__auto___41070 = arguments.length;
var i__19785__auto___41072 = (0);
while(true){
if((i__19785__auto___41072 < len__19784__auto___41070)){
args41062.push((arguments[i__19785__auto___41072]));

var G__41073 = (i__19785__auto___41072 + (1));
i__19785__auto___41072 = G__41073;
continue;
} else {
}
break;
}

var G__41069 = args41062.length;
switch (G__41069) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41062.slice((2)),(0)));
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

clojure.core.matrix.inner_product.cljs$lang$applyTo = (function (seq41063){
var G__41064 = cljs.core.first.call(null,seq41063);
var seq41063__$1 = cljs.core.next.call(null,seq41063);
var G__41065 = cljs.core.first.call(null,seq41063__$1);
var seq41063__$2 = cljs.core.next.call(null,seq41063__$1);
return clojure.core.matrix.inner_product.cljs$core$IFn$_invoke$arity$variadic(G__41064,G__41065,seq41063__$2);
});

clojure.core.matrix.inner_product.cljs$lang$maxFixedArity = (2);
/**
 * Computes the outer product of numerical arrays.
 * 
 * The outer product of two arrays with indexed dimensions {i..j} and {j..k} has dimensions {i..j j..k}, i.e. the dimensioanlity will be the
 * sum of the dimensionalities of the two arguments.
 */
clojure.core.matrix.outer_product = (function clojure$core$matrix$outer_product(var_args){
var args41077 = [];
var len__19784__auto___41111 = arguments.length;
var i__19785__auto___41116 = (0);
while(true){
if((i__19785__auto___41116 < len__19784__auto___41111)){
args41077.push((arguments[i__19785__auto___41116]));

var G__41131 = (i__19785__auto___41116 + (1));
i__19785__auto___41116 = G__41131;
continue;
} else {
}
break;
}

var G__41085 = args41077.length;
switch (G__41085) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41077.slice((2)),(0)));
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

clojure.core.matrix.outer_product.cljs$lang$applyTo = (function (seq41079){
var G__41080 = cljs.core.first.call(null,seq41079);
var seq41079__$1 = cljs.core.next.call(null,seq41079);
var G__41081 = cljs.core.first.call(null,seq41079__$1);
var seq41079__$2 = cljs.core.next.call(null,seq41079__$1);
return clojure.core.matrix.outer_product.cljs$core$IFn$_invoke$arity$variadic(G__41080,G__41081,seq41079__$2);
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
var args41157 = [];
var len__19784__auto___41167 = arguments.length;
var i__19785__auto___41168 = (0);
while(true){
if((i__19785__auto___41168 < len__19784__auto___41167)){
args41157.push((arguments[i__19785__auto___41168]));

var G__41170 = (i__19785__auto___41168 + (1));
i__19785__auto___41168 = G__41170;
continue;
} else {
}
break;
}

var G__41163 = args41157.length;
switch (G__41163) {
case 2:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.cross_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41157.length)].join('')));

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
var args41181 = [];
var len__19784__auto___41188 = arguments.length;
var i__19785__auto___41189 = (0);
while(true){
if((i__19785__auto___41189 < len__19784__auto___41188)){
args41181.push((arguments[i__19785__auto___41189]));

var G__41190 = (i__19785__auto___41189 + (1));
i__19785__auto___41189 = G__41190;
continue;
} else {
}
break;
}

var G__41186 = args41181.length;
switch (G__41186) {
case 1:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41181.slice((2)),(0)));
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

clojure.core.matrix.pow.cljs$lang$applyTo = (function (seq41182){
var G__41183 = cljs.core.first.call(null,seq41182);
var seq41182__$1 = cljs.core.next.call(null,seq41182);
var G__41184 = cljs.core.first.call(null,seq41182__$1);
var seq41182__$2 = cljs.core.next.call(null,seq41182__$1);
return clojure.core.matrix.pow.cljs$core$IFn$_invoke$arity$variadic(G__41183,G__41184,seq41182__$2);
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
var args41199 = [];
var len__19784__auto___41202 = arguments.length;
var i__19785__auto___41203 = (0);
while(true){
if((i__19785__auto___41203 < len__19784__auto___41202)){
args41199.push((arguments[i__19785__auto___41203]));

var G__41204 = (i__19785__auto___41203 + (1));
i__19785__auto___41203 = G__41204;
continue;
} else {
}
break;
}

var G__41201 = args41199.length;
switch (G__41201) {
case 3:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return clojure.core.matrix.add_row.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41199.length)].join('')));

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
var args41206 = [];
var len__19784__auto___41209 = arguments.length;
var i__19785__auto___41210 = (0);
while(true){
if((i__19785__auto___41210 < len__19784__auto___41209)){
args41206.push((arguments[i__19785__auto___41210]));

var G__41211 = (i__19785__auto___41210 + (1));
i__19785__auto___41210 = G__41211;
continue;
} else {
}
break;
}

var G__41208 = args41206.length;
switch (G__41208) {
case 2:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.ereduce.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41206.length)].join('')));

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
var args41213 = [];
var len__19784__auto___41220 = arguments.length;
var i__19785__auto___41221 = (0);
while(true){
if((i__19785__auto___41221 < len__19784__auto___41220)){
args41213.push((arguments[i__19785__auto___41221]));

var G__41222 = (i__19785__auto___41221 + (1));
i__19785__auto___41221 = G__41222;
continue;
} else {
}
break;
}

var G__41219 = args41213.length;
switch (G__41219) {
case 2:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41213.slice((3)),(0)));
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

clojure.core.matrix.emap.cljs$lang$applyTo = (function (seq41214){
var G__41215 = cljs.core.first.call(null,seq41214);
var seq41214__$1 = cljs.core.next.call(null,seq41214);
var G__41216 = cljs.core.first.call(null,seq41214__$1);
var seq41214__$2 = cljs.core.next.call(null,seq41214__$1);
var G__41217 = cljs.core.first.call(null,seq41214__$2);
var seq41214__$3 = cljs.core.next.call(null,seq41214__$2);
return clojure.core.matrix.emap.cljs$core$IFn$_invoke$arity$variadic(G__41215,G__41216,G__41217,seq41214__$3);
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
var args41224 = [];
var len__19784__auto___41231 = arguments.length;
var i__19785__auto___41232 = (0);
while(true){
if((i__19785__auto___41232 < len__19784__auto___41231)){
args41224.push((arguments[i__19785__auto___41232]));

var G__41233 = (i__19785__auto___41232 + (1));
i__19785__auto___41232 = G__41233;
continue;
} else {
}
break;
}

var G__41230 = args41224.length;
switch (G__41230) {
case 2:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41224.slice((3)),(0)));
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

clojure.core.matrix.emap_indexed.cljs$lang$applyTo = (function (seq41225){
var G__41226 = cljs.core.first.call(null,seq41225);
var seq41225__$1 = cljs.core.next.call(null,seq41225);
var G__41227 = cljs.core.first.call(null,seq41225__$1);
var seq41225__$2 = cljs.core.next.call(null,seq41225__$1);
var G__41228 = cljs.core.first.call(null,seq41225__$2);
var seq41225__$3 = cljs.core.next.call(null,seq41225__$2);
return clojure.core.matrix.emap_indexed.cljs$core$IFn$_invoke$arity$variadic(G__41226,G__41227,G__41228,seq41225__$3);
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
var args41235 = [];
var len__19784__auto___41242 = arguments.length;
var i__19785__auto___41243 = (0);
while(true){
if((i__19785__auto___41243 < len__19784__auto___41242)){
args41235.push((arguments[i__19785__auto___41243]));

var G__41244 = (i__19785__auto___41243 + (1));
i__19785__auto___41243 = G__41244;
continue;
} else {
}
break;
}

var G__41241 = args41235.length;
switch (G__41241) {
case 2:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41235.slice((3)),(0)));
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

clojure.core.matrix.emap_BANG_.cljs$lang$applyTo = (function (seq41236){
var G__41237 = cljs.core.first.call(null,seq41236);
var seq41236__$1 = cljs.core.next.call(null,seq41236);
var G__41238 = cljs.core.first.call(null,seq41236__$1);
var seq41236__$2 = cljs.core.next.call(null,seq41236__$1);
var G__41239 = cljs.core.first.call(null,seq41236__$2);
var seq41236__$3 = cljs.core.next.call(null,seq41236__$2);
return clojure.core.matrix.emap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41237,G__41238,G__41239,seq41236__$3);
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
var args41246 = [];
var len__19784__auto___41253 = arguments.length;
var i__19785__auto___41254 = (0);
while(true){
if((i__19785__auto___41254 < len__19784__auto___41253)){
args41246.push((arguments[i__19785__auto___41254]));

var G__41255 = (i__19785__auto___41254 + (1));
i__19785__auto___41254 = G__41255;
continue;
} else {
}
break;
}

var G__41252 = args41246.length;
switch (G__41252) {
case 2:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41246.slice((3)),(0)));
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

clojure.core.matrix.emap_indexed_BANG_.cljs$lang$applyTo = (function (seq41247){
var G__41248 = cljs.core.first.call(null,seq41247);
var seq41247__$1 = cljs.core.next.call(null,seq41247);
var G__41249 = cljs.core.first.call(null,seq41247__$1);
var seq41247__$2 = cljs.core.next.call(null,seq41247__$1);
var G__41250 = cljs.core.first.call(null,seq41247__$2);
var seq41247__$3 = cljs.core.next.call(null,seq41247__$2);
return clojure.core.matrix.emap_indexed_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41248,G__41249,G__41250,seq41247__$3);
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
var args41257 = [];
var len__19784__auto___41277 = arguments.length;
var i__19785__auto___41278 = (0);
while(true){
if((i__19785__auto___41278 < len__19784__auto___41277)){
args41257.push((arguments[i__19785__auto___41278]));

var G__41279 = (i__19785__auto___41278 + (1));
i__19785__auto___41278 = G__41279;
continue;
} else {
}
break;
}

var G__41261 = args41257.length;
switch (G__41261) {
case 0:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.implementation_check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41257.length)].join('')));

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