// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.impl.wrappers');
goog.require('cljs.core');
goog.require('clojure.core.matrix.protocols');
goog.require('clojure.core.matrix.implementations');
goog.require('clojure.core.matrix.impl.persistent_vector');
goog.require('clojure.core.matrix.utils');



/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.ScalarWrapper = (function (value){
this.value = value;
})
clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return [cljs.core.str(self__.value)].join('');
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"scalar-wrapper","scalar-wrapper",-1626299275);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps a single scalar as a mutable 0-D array"], null);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
if(((0) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,data)))){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,data))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(data));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d.call(null,data)));
}
} else {
return clojure.core.matrix.protocols.clone.call(null,data);
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$.call(null,dims) === (0));
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (0);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.PersistentVector.EMPTY;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get dimension-count of ScalarWrapper: no dimensions exist")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get-1d on ScalarWrapper.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get-2d on ScalarWrapper.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
if(cljs.core.seq.call(null,indexes)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't get-1d on ScalarWrapper.")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return self__.value;
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 1D set on 0D array")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't do 2D set on 0D array")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
if(cljs.core.not.call(null,cljs.core.seq.call(null,indexes))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(v));
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't set on 0D array with dimensionality: "),cljs.core.str(cljs.core.count.call(null,indexes))].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.value;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,v){
var self__ = this;
var m__$1 = this;
return self__.value = v;
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(self__.value));
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),true], null))], null);
});

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/ScalarWrapper";

clojure.core.matrix.impl.wrappers.ScalarWrapper.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.core.matrix.impl.wrappers/ScalarWrapper");
});

clojure.core.matrix.impl.wrappers.__GT_ScalarWrapper = (function clojure$core$matrix$impl$wrappers$__GT_ScalarWrapper(value){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(value));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PConversion}
 * @implements {clojure.core.matrix.protocols.PMatrixCloning}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.SliceWrapper = (function (array,slice){
this.array = array;
this.slice = slice;
this.cljs$lang$protocol_mask$partition0$ = 8388608;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return [cljs.core.str(clojure.core.matrix.protocols.convert_to_nested_vectors.call(null,m))].join('');
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PConversion$convert_to_nested_vectors$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
if(cljs.core.truth_(clojure.core.matrix.protocols.is_vector_QMARK_.call(null,self__.array))){
return clojure.core.matrix.protocols.get_1d.call(null,self__.array,self__.slice);
} else {
return cljs.core.mapv.call(null,clojure.core.matrix.protocols.convert_to_nested_vectors,clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1));
}
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PMatrixCloning$clone$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.impl.wrappers.wrap_slice.call(null,clojure.core.matrix.protocols.clone.call(null,self__.array),self__.slice);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_1d.call(null,self__.array,self__.slice);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d_BANG_.call(null,self__.array,self__.slice,value);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,self__.array)) - (1));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return cljs.core.next.call(null,clojure.core.matrix.protocols.get_shape.call(null,self__.array));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((2) === cljs.core.long$.call(null,clojure.core.matrix.protocols.dimensionality.call(null,self__.array)));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
var dimension_number__$1 = cljs.core.long$.call(null,dimension_number);
if((dimension_number__$1 < (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't access negative dimension!")].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
return clojure.core.matrix.protocols.dimension_count.call(null,self__.array,(dimension_number__$1 + (1)));
}
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d_BANG_.call(null,self__.array,self__.slice,row,v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null),v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,cljs.core.cons.call(null,self__.slice,indexes),v);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_2d.call(null,self__.array,self__.slice,row);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd.call(null,self__.array,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.slice,row,column], null));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd.call(null,self__.array,cljs.core.cons.call(null,self__.slice,indexes));
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.clone.call(null,m__$1);
clojure.core.matrix.protocols.set_1d_BANG_.call(null,m__$2,row,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.clone.call(null,m__$1);
clojure.core.matrix.protocols.set_2d_BANG_.call(null,m__$2,row,column,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var m__$2 = clojure.core.matrix.protocols.clone.call(null,m__$1);
clojure.core.matrix.protocols.set_nd_BANG_.call(null,m__$2,indexes,v);

return m__$2;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,self__.array);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"slice-wrapper","slice-wrapper",449772415);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps a row-major slice of an array"], null);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.SliceWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"array","array",-440182315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"slice","slice",-353076229,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"long","long",1469079434,null)], null))], null);
});

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/SliceWrapper";

clojure.core.matrix.impl.wrappers.SliceWrapper.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.core.matrix.impl.wrappers/SliceWrapper");
});

clojure.core.matrix.impl.wrappers.__GT_SliceWrapper = (function clojure$core$matrix$impl$wrappers$__GT_SliceWrapper(array,slice){
return (new clojure.core.matrix.impl.wrappers.SliceWrapper(array,slice));
});


/**
* @constructor
 * @implements {clojure.core.matrix.protocols.PDimensionInfo}
 * @implements {clojure.core.matrix.protocols.PIndexedSettingMutable}
 * @implements {cljs.core.IIndexed}
 * @implements {clojure.core.matrix.protocols.PSubVector}
 * @implements {clojure.core.matrix.protocols.PIndexedAccess}
 * @implements {clojure.core.matrix.protocols.PSliceView2}
 * @implements {clojure.core.matrix.protocols.PIndexedSetting}
 * @implements {cljs.core.ICounted}
 * @implements {clojure.core.matrix.protocols.PImplementation}
 * @implements {cljs.core.ISeqable}
 * @implements {clojure.core.matrix.protocols.PZeroDimensionAccess}
 * @implements {clojure.core.matrix.impl.wrappers.Object}
*/
clojure.core.matrix.impl.wrappers.NDWrapper = (function (array,shape,dim_map,index_maps,source_position){
this.array = array;
this.shape = shape;
this.dim_map = dim_map;
this.index_maps = index_maps;
this.source_position = source_position;
this.cljs$lang$protocol_mask$partition0$ = 8388626;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure.core.matrix.impl.wrappers.NDWrapper.prototype.toString = (function (){
var self__ = this;
var m = this;
return [cljs.core.str(clojure.core.matrix.protocols.persistent_vector_coerce.call(null,m))].join('');
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (m,i){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (m,i,not_found){
var self__ = this;
var m__$1 = this;
if((cljs.core.integer_QMARK_.call(null,i)) && (((0) <= i)) && ((i < (self__.shape[(0)])))){
return clojure.core.matrix.protocols.get_major_slice.call(null,m__$1,i);
} else {
return not_found;
}
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ICounted$_count$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return (self__.shape[(0)]);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$get_0d$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_nd.call(null,self__.array,self__.source_position);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PZeroDimensionAccess$set_0d_BANG_$arity$2 = (function (m,value){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,self__.source_position,value);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimensionality$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape.length;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$get_shape$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return self__.shape;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_scalar_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return false;
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$is_vector_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return ((1) === self__.shape.length);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PDimensionInfo$dimension_count$arity$2 = (function (m,dimension_number){
var self__ = this;
var m__$1 = this;
return (self__.shape[(dimension_number | (0))]);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_1d_BANG_$arity$3 = (function (m,row,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var im = (self__.index_maps[(0)]);
var i29683_29691 = (0);
var tdim__29597__auto___29692 = (self__.dim_map[i29683_29691]);
if((tdim__29597__auto___29692 >= (0))){
(ix[tdim__29597__auto___29692] = ((self__.index_maps[i29683_29691])[row]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_2d_BANG_$arity$4 = (function (m,row,column,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var i29684_29693 = (0);
var tdim__29597__auto___29694 = (self__.dim_map[i29684_29693]);
if((tdim__29597__auto___29694 >= (0))){
(ix[tdim__29597__auto___29694] = ((self__.index_maps[i29684_29693])[row]));
} else {
}

var i29685_29695 = (1);
var tdim__29597__auto___29696 = (self__.dim_map[i29685_29695]);
if((tdim__29597__auto___29696 >= (0))){
(ix[tdim__29597__auto___29696] = ((self__.index_maps[i29685_29695])[column]));
} else {
}

return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSettingMutable$set_nd_BANG_$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var n = self__.shape.length;
if(cljs.core.not_EQ_.call(null,n,cljs.core.count.call(null,indexes))){
throw cljs.core.ex_info.call(null,[cljs.core.str("set-nd! called with index "),cljs.core.str(cljs.core.vec.call(null,indexes)),cljs.core.str(" indexes on wrapped array of shape "),cljs.core.str(self__.shape)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__19629__auto___29697 = self__.shape.length;
var i_29698 = (0);
while(true){
if((i_29698 < n__19629__auto___29697)){
var i29686_29699 = i_29698;
var tdim__29597__auto___29700 = (self__.dim_map[i29686_29699]);
if((tdim__29597__auto___29700 >= (0))){
(ix[tdim__29597__auto___29700] = ((self__.index_maps[i29686_29699])[cljs.core.nth.call(null,indexes,i_29698)]));
} else {
}

var G__29701 = (i_29698 + (1));
i_29698 = G__29701;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.set_nd_BANG_.call(null,self__.array,ix,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSubVector$subvector$arity$3 = (function (m,start,length){
var self__ = this;
var m__$1 = this;
if(cljs.core.not_EQ_.call(null,(1),self__.shape.length)){
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't take subvector: wrong dimensionality = "),cljs.core.str(self__.shape.length)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var vlen = cljs.core.long$.call(null,(self__.shape[(0)]));
var start__$1 = cljs.core.long$.call(null,start);
var length__$1 = cljs.core.long$.call(null,length);
var end = (start__$1 + length__$1);
var old_index_map = (self__.index_maps[(0)]);
var new_index_map = cljs.core.long_array.call(null,length__$1);
if((start__$1 < (0))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Start index out of bounds: "),cljs.core.str(start__$1)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

if((end > vlen)){
throw cljs.core.ex_info.call(null,[cljs.core.str("End index out of bounds: "),cljs.core.str(end)].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

var n__19629__auto___29702 = length__$1;
var i_29703 = (0);
while(true){
if((i_29703 < n__19629__auto___29702)){
(new_index_map[i_29703] = (old_index_map[(start__$1 + i_29703)]));

var G__29704 = (i_29703 + (1));
i_29703 = G__29704;
continue;
} else {
}
break;
}

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,clojure.core.matrix.utils.long_array_of.call(null,length__$1),self__.dim_map,clojure.core.matrix.utils.object_array_of.call(null,new_index_map),clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position)));
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_1d$arity$2 = (function (m,row){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var im = (self__.index_maps[(0)]);
var i29687_29705 = (0);
var tdim__29597__auto___29706 = (self__.dim_map[i29687_29705]);
if((tdim__29597__auto___29706 >= (0))){
(ix[tdim__29597__auto___29706] = ((self__.index_maps[i29687_29705])[row]));
} else {
}

return clojure.core.matrix.protocols.get_nd.call(null,self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_2d$arity$3 = (function (m,row,column){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var i29688_29707 = (0);
var tdim__29597__auto___29708 = (self__.dim_map[i29688_29707]);
if((tdim__29597__auto___29708 >= (0))){
(ix[tdim__29597__auto___29708] = ((self__.index_maps[i29688_29707])[row]));
} else {
}

var i29689_29709 = (1);
var tdim__29597__auto___29710 = (self__.dim_map[i29689_29709]);
if((tdim__29597__auto___29710 >= (0))){
(ix[tdim__29597__auto___29710] = ((self__.index_maps[i29689_29709])[column]));
} else {
}

return clojure.core.matrix.protocols.get_nd.call(null,self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedAccess$get_nd$arity$2 = (function (m,indexes){
var self__ = this;
var m__$1 = this;
var ix = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var n__19629__auto___29711 = self__.shape.length;
var i_29712 = (0);
while(true){
if((i_29712 < n__19629__auto___29711)){
var i29690_29713 = i_29712;
var tdim__29597__auto___29714 = (self__.dim_map[i29690_29713]);
if((tdim__29597__auto___29714 >= (0))){
(ix[tdim__29597__auto___29714] = ((self__.index_maps[i29690_29713])[cljs.core.nth.call(null,indexes,i_29712)]));
} else {
}

var G__29715 = (i_29712 + (1));
i_29712 = G__29715;
continue;
} else {
}
break;
}

return clojure.core.matrix.protocols.get_nd.call(null,self__.array,ix);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PSliceView2$get_slice_view$arity$3 = (function (m,dim,i){
var self__ = this;
var m__$1 = this;
var i__$1 = cljs.core.long$.call(null,i);
var dim__$1 = cljs.core.long$.call(null,dim);
var nsp = clojure.core.matrix.utils.copy_long_array.call(null,self__.source_position);
var sdim = cljs.core.long$.call(null,(self__.dim_map[dim__$1]));
(nsp[sdim] = i__$1);

return (new clojure.core.matrix.impl.wrappers.NDWrapper(self__.array,(function (){var n__22391__auto__ = self__.shape.length;
var length__22392__auto__ = ((n__22391__auto__ - (1)) | (0));
var new_xs__22393__auto__ = self__.shape.slice((0),length__22392__auto__);
var j__22394__auto___29716 = (dim__$1 | (0));
while(true){
if((j__22394__auto___29716 < (n__22391__auto__ - (1)))){
(new_xs__22393__auto__[(j__22394__auto___29716 | (0))] = (self__.shape[((j__22394__auto___29716 + (1)) | (0))]));

var G__29717 = (j__22394__auto___29716 + (1));
j__22394__auto___29716 = G__29717;
continue;
} else {
}
break;
}


return new_xs__22393__auto__;
})(),(function (){var n__22391__auto__ = self__.dim_map.length;
var length__22392__auto__ = ((n__22391__auto__ - (1)) | (0));
var new_xs__22393__auto__ = self__.dim_map.slice((0),length__22392__auto__);
var j__22394__auto___29718 = (dim__$1 | (0));
while(true){
if((j__22394__auto___29718 < (n__22391__auto__ - (1)))){
(new_xs__22393__auto__[(j__22394__auto___29718 | (0))] = (self__.dim_map[((j__22394__auto___29718 + (1)) | (0))]));

var G__29719 = (j__22394__auto___29718 + (1));
j__22394__auto___29718 = G__29719;
continue;
} else {
}
break;
}


return new_xs__22393__auto__;
})(),(function (){var n__22391__auto__ = self__.index_maps.length;
var length__22392__auto__ = ((n__22391__auto__ - (1)) | (0));
var new_xs__22393__auto__ = self__.index_maps.slice((0),length__22392__auto__);
var j__22394__auto___29720 = (dim__$1 | (0));
while(true){
if((j__22394__auto___29720 < (n__22391__auto__ - (1)))){
(new_xs__22393__auto__[(j__22394__auto___29720 | (0))] = (self__.index_maps[((j__22394__auto___29720 + (1)) | (0))]));

var G__29721 = (j__22394__auto___29720 + (1));
j__22394__auto___29720 = G__29721;
continue;
} else {
}
break;
}


return new_xs__22393__auto__;
})(),nsp));
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_1d$arity$3 = (function (m,x,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_1d.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),m__$1),x,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_2d$arity$4 = (function (m,x,y,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_2d.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),m__$1),x,y,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$set_nd$arity$3 = (function (m,indexes,v){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.set_nd.call(null,clojure.core.matrix.protocols.coerce_param.call(null,clojure.core.matrix.implementations.get_canonical_object.call(null),m__$1),indexes,v);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PIndexedSetting$is_mutable_QMARK_$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.is_mutable_QMARK_.call(null,self__.array);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.get_major_slice_seq.call(null,m__$1);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$ = true;

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$implementation_key$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.Keyword(null,"nd-wrapper","nd-wrapper",563497943);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$meta_info$arity$1 = (function (m){
var self__ = this;
var m__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),"Wraps an N-dimensional subset or broadcast of an array"], null);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_vector$arity$2 = (function (m,length){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_vector.call(null,cljs.core.PersistentVector.EMPTY,length);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix$arity$3 = (function (m,rows,columns){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix.call(null,cljs.core.PersistentVector.EMPTY,rows,columns);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$new_matrix_nd$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.new_matrix_nd.call(null,cljs.core.PersistentVector.EMPTY,dims);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$construct_matrix$arity$2 = (function (m,data){
var self__ = this;
var m__$1 = this;
return clojure.core.matrix.protocols.construct_matrix.call(null,cljs.core.PersistentVector.EMPTY,data);
});

clojure.core.matrix.impl.wrappers.NDWrapper.prototype.clojure$core$matrix$protocols$PImplementation$supports_dimensionality_QMARK_$arity$2 = (function (m,dims){
var self__ = this;
var m__$1 = this;
return true;
});

clojure.core.matrix.impl.wrappers.NDWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"array","array",-440182315,null),cljs.core.with_meta(new cljs.core.Symbol(null,"shape","shape",-1463741763,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dim-map","dim-map",-1307232993,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"index-maps","index-maps",-257128425,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"objects","objects",-554722035,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"source-position","source-position",915497720,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"longs","longs",-1017696020,null)], null))], null);
});

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$type = true;

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorStr = "clojure.core.matrix.impl.wrappers/NDWrapper";

clojure.core.matrix.impl.wrappers.NDWrapper.cljs$lang$ctorPrWriter = (function (this__19324__auto__,writer__19325__auto__,opt__19326__auto__){
return cljs.core._write.call(null,writer__19325__auto__,"clojure.core.matrix.impl.wrappers/NDWrapper");
});

clojure.core.matrix.impl.wrappers.__GT_NDWrapper = (function clojure$core$matrix$impl$wrappers$__GT_NDWrapper(array,shape,dim_map,index_maps,source_position){
return (new clojure.core.matrix.impl.wrappers.NDWrapper(array,shape,dim_map,index_maps,source_position));
});

/**
 * Creates a view of a major slice of an array.
 */
clojure.core.matrix.impl.wrappers.wrap_slice = (function clojure$core$matrix$impl$wrappers$wrap_slice(m,slice){
var slice__$1 = cljs.core.long$.call(null,slice);
if((slice__$1 >= cljs.core.long$.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,(0))))){
throw cljs.core.ex_info.call(null,[cljs.core.str("Slice "),cljs.core.str(slice__$1),cljs.core.str(" does not exist on "),cljs.core.str(cljs.core.type.call(null,m))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
}

return (new clojure.core.matrix.impl.wrappers.SliceWrapper(m,slice__$1));
});
/**
 * Wraps an array in a NDWrapper view. Useful for taking submatrices, subviews etc.
 */
clojure.core.matrix.impl.wrappers.wrap_nd = (function clojure$core$matrix$impl$wrappers$wrap_nd(m){
var shp = cljs.core.long_array.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var dims = shp.length;
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,clojure.core.matrix.utils.long_range.call(null,dims),cljs.core.object_array.call(null,cljs.core.map.call(null,((function (shp,dims){
return (function (p1__29722_SHARP_){
return clojure.core.matrix.utils.long_range.call(null,clojure.core.matrix.protocols.dimension_count.call(null,m,p1__29722_SHARP_));
});})(shp,dims))
,cljs.core.range.call(null,dims))),cljs.core.long_array.call(null,dims)));
});
/**
 * Wraps an array using a selection of indexes for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_selection = (function clojure$core$matrix$impl$wrappers$wrap_selection(m,indices){
var shp = cljs.core.long_array.call(null,cljs.core.map.call(null,cljs.core.count,indices));
var dims = cljs.core.count.call(null,shp);
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,shp,cljs.core.long_array.call(null,cljs.core.range.call(null,dims)),cljs.core.object_array.call(null,cljs.core.map.call(null,cljs.core.long_array,indices)),cljs.core.long_array.call(null,cljs.core.repeat.call(null,dims,(0)))));
});
/**
 * Wraps an array using a selection of [start length] ranges for each dimension.
 */
clojure.core.matrix.impl.wrappers.wrap_submatrix = (function clojure$core$matrix$impl$wrappers$wrap_submatrix(m,dim_ranges){
var shp = clojure.core.matrix.protocols.get_shape.call(null,m);
var dims = cljs.core.count.call(null,shp);
var _ = ((!((dims === cljs.core.count.call(null,dim_ranges))))?(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("submatrix ranges do not match matrix dimensionality")].join(''),cljs.core.PersistentArrayMap.EMPTY)})():null);
var dim_ranges__$1 = cljs.core.mapv.call(null,((function (shp,dims,_){
return (function (a,cnt){
if(cljs.core.truth_(a)){
return cljs.core.vec.call(null,a);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cnt], null);
}
});})(shp,dims,_))
,dim_ranges,shp);
var new_shape = cljs.core.long_array.call(null,cljs.core.map.call(null,((function (shp,dims,_,dim_ranges__$1){
return (function (p__29727){
var vec__29728 = p__29727;
var start = cljs.core.nth.call(null,vec__29728,(0),null);
var len = cljs.core.nth.call(null,vec__29728,(1),null);
return len;
});})(shp,dims,_,dim_ranges__$1))
,dim_ranges__$1));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,new_shape,cljs.core.long_array.call(null,cljs.core.range.call(null,cljs.core.count.call(null,shp))),cljs.core.object_array.call(null,cljs.core.map.call(null,((function (shp,dims,_,dim_ranges__$1,new_shape){
return (function (p__29729){
var vec__29730 = p__29729;
var start = cljs.core.nth.call(null,vec__29730,(0),null);
var len = cljs.core.nth.call(null,vec__29730,(1),null);
return cljs.core.long_array.call(null,cljs.core.range.call(null,start,(start + len)));
});})(shp,dims,_,dim_ranges__$1,new_shape))
,dim_ranges__$1)),cljs.core.long_array.call(null,cljs.core.repeat.call(null,dims,(0)))));
});
/**
 * Wraps an array with broadcasting to the given target shape.
 */
clojure.core.matrix.impl.wrappers.wrap_broadcast = (function clojure$core$matrix$impl$wrappers$wrap_broadcast(m,target_shape){
var tshape = cljs.core.long_array.call(null,target_shape);
var tdims = tshape.length;
var mshape = cljs.core.long_array.call(null,clojure.core.matrix.protocols.get_shape.call(null,m));
var mdims = mshape.length;
var dim_map = cljs.core.long_array.call(null,cljs.core.concat.call(null,cljs.core.repeat.call(null,(tdims - mdims),(-1)),cljs.core.range.call(null,mdims)));
return (new clojure.core.matrix.impl.wrappers.NDWrapper(m,tshape,dim_map,cljs.core.object_array.call(null,(function (){var iter__19498__auto__ = ((function (tshape,tdims,mshape,mdims,dim_map){
return (function clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__29735(s__29736){
return (new cljs.core.LazySeq(null,((function (tshape,tdims,mshape,mdims,dim_map){
return (function (){
var s__29736__$1 = s__29736;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__29736__$1);
if(temp__4657__auto__){
var s__29736__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__29736__$2)){
var c__19496__auto__ = cljs.core.chunk_first.call(null,s__29736__$2);
var size__19497__auto__ = cljs.core.count.call(null,c__19496__auto__);
var b__29738 = cljs.core.chunk_buffer.call(null,size__19497__auto__);
if((function (){var i__29737 = (0);
while(true){
if((i__29737 < size__19497__auto__)){
var i = cljs.core._nth.call(null,c__19496__auto__,i__29737);
cljs.core.chunk_append.call(null,b__29738,(function (){var i__$1 = cljs.core.long$.call(null,i);
var arr = cljs.core.long_array.call(null,(tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_29739 = (mshape[mdim]);
var tdc_29740 = (tshape[i__$1]);
if((mdc_29739 === (1))){
} else {
if((mdc_29739 === tdc_29740)){
var n__19629__auto___29741 = mdc_29739;
var i_29742__$2 = (0);
while(true){
if((i_29742__$2 < n__19629__auto___29741)){
(arr[i_29742__$2] = i_29742__$2);

var G__29743 = (i_29742__$2 + (1));
i_29742__$2 = G__29743;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't broadcast shape "),cljs.core.str(cljs.core.seq.call(null,mshape)),cljs.core.str(" to target shape "),cljs.core.str(cljs.core.seq.call(null,tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})());

var G__29744 = (i__29737 + (1));
i__29737 = G__29744;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29738),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__29735.call(null,cljs.core.chunk_rest.call(null,s__29736__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29738),null);
}
} else {
var i = cljs.core.first.call(null,s__29736__$2);
return cljs.core.cons.call(null,(function (){var i__$1 = cljs.core.long$.call(null,i);
var arr = cljs.core.long_array.call(null,(tshape[i__$1]));
var mdim = (i__$1 - (tdims - mdims));
if((mdim >= (0))){
var mdc_29745 = (mshape[mdim]);
var tdc_29746 = (tshape[i__$1]);
if((mdc_29745 === (1))){
} else {
if((mdc_29745 === tdc_29746)){
var n__19629__auto___29747 = mdc_29745;
var i_29748__$2 = (0);
while(true){
if((i_29748__$2 < n__19629__auto___29747)){
(arr[i_29748__$2] = i_29748__$2);

var G__29749 = (i_29748__$2 + (1));
i_29748__$2 = G__29749;
continue;
} else {
}
break;
}
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Can't broadcast shape "),cljs.core.str(cljs.core.seq.call(null,mshape)),cljs.core.str(" to target shape "),cljs.core.str(cljs.core.seq.call(null,tshape))].join(''),cljs.core.PersistentArrayMap.EMPTY);

}
}
} else {
}

return arr;
})(),clojure$core$matrix$impl$wrappers$wrap_broadcast_$_iter__29735.call(null,cljs.core.rest.call(null,s__29736__$2)));
}
} else {
return null;
}
break;
}
});})(tshape,tdims,mshape,mdims,dim_map))
,null,null));
});})(tshape,tdims,mshape,mdims,dim_map))
;
return iter__19498__auto__.call(null,cljs.core.range.call(null,tdims));
})()),cljs.core.long_array.call(null,mdims)));
});
/**
 * Wraps a scalar value into a mutable 0D array.
 */
clojure.core.matrix.impl.wrappers.wrap_scalar = (function clojure$core$matrix$impl$wrappers$wrap_scalar(m){
if(cljs.core.truth_(clojure.core.matrix.protocols.is_scalar_QMARK_.call(null,m))){
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(m));
} else {
return (new clojure.core.matrix.impl.wrappers.ScalarWrapper(clojure.core.matrix.protocols.get_0d.call(null,m)));

}
});
clojure.core.matrix.implementations.register_implementation.call(null,(new clojure.core.matrix.impl.wrappers.ScalarWrapper((13))));
clojure.core.matrix.implementations.register_implementation.call(null,(new clojure.core.matrix.impl.wrappers.NDWrapper(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.long_array.call(null,(0)),cljs.core.long_array.call(null,(0)),cljs.core.object_array.call(null,(0)),cljs.core.long_array.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null)))));

//# sourceMappingURL=wrappers.js.map