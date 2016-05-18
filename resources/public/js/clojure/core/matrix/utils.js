// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.utils');
goog.require('cljs.core');
clojure.core.matrix.utils.class$ = cljs.core.type;
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.utils.error = (function clojure$core$matrix$utils$error(var_args){
var args__19791__auto__ = [];
var len__19784__auto___20004 = arguments.length;
var i__19785__auto___20005 = (0);
while(true){
if((i__19785__auto___20005 < len__19784__auto___20004)){
args__19791__auto__.push((arguments[i__19785__auto___20005]));

var G__20006 = (i__19785__auto___20005 + (1));
i__19785__auto___20005 = G__20006;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((2) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((2)),(0))):null);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19792__auto__);
});

clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),vals)))))))))));
});

clojure.core.matrix.utils.error.cljs$lang$maxFixedArity = (2);

clojure.core.matrix.utils.error.cljs$lang$applyTo = (function (seq19995){
var G__19996 = cljs.core.first.call(null,seq19995);
var seq19995__$1 = cljs.core.next.call(null,seq19995);
var G__19997 = cljs.core.first.call(null,seq19995__$1);
var seq19995__$2 = cljs.core.next.call(null,seq19995__$1);
return clojure.core.matrix.utils.error.cljs$core$IFn$_invoke$arity$variadic(G__19996,G__19997,seq19995__$2);
});

clojure.core.matrix.utils.error.cljs$lang$macro = true;
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.utils.doseq_indexed = (function clojure$core$matrix$utils$doseq_indexed(var_args){
var args__19791__auto__ = [];
var len__19784__auto___20043 = arguments.length;
var i__19785__auto___20044 = (0);
while(true){
if((i__19785__auto___20044 < len__19784__auto___20043)){
args__19791__auto__.push((arguments[i__19785__auto___20044]));

var G__20046 = (i__19785__auto___20044 + (1));
i__19785__auto___20044 = G__20046;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__20028,code){
var vec__20029 = p__20028;
var val_sym = cljs.core.nth.call(null,vec__20029,(0),null);
var values = cljs.core.nth.call(null,vec__20029,(1),null);
var index_sym = cljs.core.nth.call(null,vec__20029,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__20013__auto__","vals__20013__auto__",-980753501,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,values))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,index_sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__20013__auto__","vals__20013__auto__",-980753501,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,val_sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__20013__auto__","vals__20013__auto__",-980753501,null))))))))))),code,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__20013__auto__","vals__20013__auto__",-980753501,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,index_sym))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))));
});

clojure.core.matrix.utils.doseq_indexed.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.utils.doseq_indexed.cljs$lang$applyTo = (function (seq20014){
var G__20015 = cljs.core.first.call(null,seq20014);
var seq20014__$1 = cljs.core.next.call(null,seq20014);
var G__20016 = cljs.core.first.call(null,seq20014__$1);
var seq20014__$2 = cljs.core.next.call(null,seq20014__$1);
var G__20017 = cljs.core.first.call(null,seq20014__$2);
var seq20014__$3 = cljs.core.next.call(null,seq20014__$2);
return clojure.core.matrix.utils.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic(G__20015,G__20016,G__20017,seq20014__$3);
});

clojure.core.matrix.utils.doseq_indexed.cljs$lang$macro = true;
/**
 * returns true if the given object is a valid core.matrix array shape.
 */
clojure.core.matrix.utils.valid_shape_QMARK_ = (function clojure$core$matrix$utils$valid_shape_QMARK_(shape){
try{return ((cljs.core.count.call(null,shape) >= (0))) && (cljs.core.every_QMARK_.call(null,cljs.core.integer_QMARK_,shape));
}catch (e20059){if((e20059 instanceof Error)){
var t = e20059;
return false;
} else {
throw e20059;

}
}});
/**
 * Returns true if two shapes are the same.
 */
clojure.core.matrix.utils.same_shape_object_QMARK_ = (function clojure$core$matrix$utils$same_shape_object_QMARK_(sa,sb){
if((sa === sb)){
return true;
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,sa),cljs.core.count.call(null,sb))){
return false;
} else {
var ca = cljs.core.count.call(null,sa);
var i = (0);
while(true){
if((i >= ca)){
return true;
} else {
if((cljs.core.nth.call(null,sa,i) === cljs.core.nth.call(null,sb,i))){
var G__20064 = (i + (1));
i = G__20064;
continue;
} else {
return false;
}
}
break;
}

}
}
});
/**
 * Returns the logical xor of a set of values, considered as booleans
 */
clojure.core.matrix.utils.xor = (function clojure$core$matrix$utils$xor(var_args){
var args20065 = [];
var len__19784__auto___20078 = arguments.length;
var i__19785__auto___20079 = (0);
while(true){
if((i__19785__auto___20079 < len__19784__auto___20078)){
args20065.push((arguments[i__19785__auto___20079]));

var G__20080 = (i__19785__auto___20079 + (1));
i__19785__auto___20079 = G__20080;
continue;
} else {
}
break;
}

var G__20073 = args20065.length;
switch (G__20073) {
case 0:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args20065.slice((2)),(0)));
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$0 = (function (){
return false;
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$1 = (function (x){
return cljs.core.boolean$.call(null,x);
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
if(cljs.core.truth_(x)){
return cljs.core.not.call(null,y);
} else {
return cljs.core.boolean$.call(null,y);
}
});

clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
var p = clojure.core.matrix.utils.xor.call(null,x,y);
var ss = cljs.core.seq.call(null,more);
while(true){
if(ss){
var G__20085 = (cljs.core.truth_(cljs.core.first.call(null,ss))?cljs.core.not.call(null,p):p);
var G__20086 = cljs.core.next.call(null,ss);
p = G__20085;
ss = G__20086;
continue;
} else {
return p;
}
break;
}
});

clojure.core.matrix.utils.xor.cljs$lang$applyTo = (function (seq20066){
var G__20067 = cljs.core.first.call(null,seq20066);
var seq20066__$1 = cljs.core.next.call(null,seq20066);
var G__20068 = cljs.core.first.call(null,seq20066__$1);
var seq20066__$2 = cljs.core.next.call(null,seq20066__$1);
return clojure.core.matrix.utils.xor.cljs$core$IFn$_invoke$arity$variadic(G__20067,G__20068,seq20066__$2);
});

clojure.core.matrix.utils.xor.cljs$lang$maxFixedArity = (2);
/**
 * Returns a copy of a double array
 */
clojure.core.matrix.utils.copy_double_array = (function clojure$core$matrix$utils$copy_double_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_long_array = (function clojure$core$matrix$utils$copy_long_array(arr){
return arr.slice((0));
});
/**
 * Returns a copy of a long array
 */
clojure.core.matrix.utils.copy_object_array = (function clojure$core$matrix$utils$copy_object_array(arr){
return arr.slice((0));
});
/**
 * Returns a range of longs in a long[] array
 */
clojure.core.matrix.utils.long_range = (function clojure$core$matrix$utils$long_range(end){
var end__$1 = (end | (0));
var arr = cljs.core.long_array.call(null,end__$1);
var n__19629__auto___20092 = end__$1;
var i_20093 = (0);
while(true){
if((i_20093 < n__19629__auto___20092)){
(arr[i_20093] = cljs.core.long$.call(null,i_20093));

var G__20094 = (i_20093 + (1));
i_20093 = G__20094;
continue;
} else {
}
break;
}

return arr;
});
/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.long_array_of = (function clojure$core$matrix$utils$long_array_of(var_args){
var args20095 = [];
var len__19784__auto___20111 = arguments.length;
var i__19785__auto___20112 = (0);
while(true){
if((i__19785__auto___20112 < len__19784__auto___20111)){
args20095.push((arguments[i__19785__auto___20112]));

var G__20113 = (i__19785__auto___20112 + (1));
i__19785__auto___20112 = G__20113;
continue;
} else {
}
break;
}

var G__20101 = args20095.length;
switch (G__20101) {
case 0:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args20095.slice((2)),(0)));
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.long_array.call(null,(0));
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.long_array.call(null,(1));
(arr[(0)] = cljs.core.long$.call(null,a));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.long_array.call(null,(2));
(arr[(0)] = cljs.core.long$.call(null,a));

(arr[(1)] = cljs.core.long$.call(null,b));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.long_array.call(null,((2) + cljs.core.count.call(null,more)));
(arr[(0)] = cljs.core.long$.call(null,a));

(arr[(1)] = cljs.core.long$.call(null,b));

clojure.core.matrix.utils.doseq_indexed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null),(arr[((2) + clojure.core.matrix.utils.i)] = cljs.core.long$.call(null,clojure.core.matrix.utils.x)));

return arr;
});

clojure.core.matrix.utils.long_array_of.cljs$lang$applyTo = (function (seq20096){
var G__20097 = cljs.core.first.call(null,seq20096);
var seq20096__$1 = cljs.core.next.call(null,seq20096);
var G__20098 = cljs.core.first.call(null,seq20096__$1);
var seq20096__$2 = cljs.core.next.call(null,seq20096__$1);
return clojure.core.matrix.utils.long_array_of.cljs$core$IFn$_invoke$arity$variadic(G__20097,G__20098,seq20096__$2);
});

clojure.core.matrix.utils.long_array_of.cljs$lang$maxFixedArity = (2);
/**
 * Creates a long array with the specified values.
 */
clojure.core.matrix.utils.object_array_of = (function clojure$core$matrix$utils$object_array_of(var_args){
var args20121 = [];
var len__19784__auto___20127 = arguments.length;
var i__19785__auto___20128 = (0);
while(true){
if((i__19785__auto___20128 < len__19784__auto___20127)){
args20121.push((arguments[i__19785__auto___20128]));

var G__20129 = (i__19785__auto___20128 + (1));
i__19785__auto___20128 = G__20129;
continue;
} else {
}
break;
}

var G__20126 = args20121.length;
switch (G__20126) {
case 0:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args20121.slice((2)),(0)));
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.object_array.call(null,(0));
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$1 = (function (a){
var arr = cljs.core.object_array.call(null,(1));
(arr[(0)] = a);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var arr = cljs.core.object_array.call(null,(2));
(arr[(0)] = a);

(arr[(1)] = b);

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
var arr = cljs.core.object_array.call(null,((2) + cljs.core.count.call(null,more)));
(arr[(0)] = a);

(arr[(1)] = b);

clojure.core.matrix.utils.doseq_indexed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.core.matrix.utils.x,more,clojure.core.matrix.utils.i], null),(arr[((2) + clojure.core.matrix.utils.i)] = clojure.core.matrix.utils.x));

return arr;
});

clojure.core.matrix.utils.object_array_of.cljs$lang$applyTo = (function (seq20122){
var G__20123 = cljs.core.first.call(null,seq20122);
var seq20122__$1 = cljs.core.next.call(null,seq20122);
var G__20124 = cljs.core.first.call(null,seq20122__$1);
var seq20122__$2 = cljs.core.next.call(null,seq20122__$1);
return clojure.core.matrix.utils.object_array_of.cljs$core$IFn$_invoke$arity$variadic(G__20123,G__20124,seq20122__$2);
});

clojure.core.matrix.utils.object_array_of.cljs$lang$maxFixedArity = (2);
/**
 * Returns the index of a value in a vector, or nil if not present
 */
clojure.core.matrix.utils.find_index = (function clojure$core$matrix$utils$find_index(v,value){
var n = v.count();
var i = (0);
while(true){
if((i < n)){
if(cljs.core._EQ_.call(null,value,v.nth(i))){
return i;
} else {
var G__20131 = (i + (1));
i = G__20131;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Returns a sequence of all possible index vectors for a given shape, in row-major order
 */
clojure.core.matrix.utils.base_index_seq_for_shape = (function clojure$core$matrix$utils$base_index_seq_for_shape(sh){
var gen = (function clojure$core$matrix$utils$base_index_seq_for_shape_$_gen(prefix,rem){
if(cljs.core.truth_(rem)){
var nrem = cljs.core.next.call(null,rem);
return cljs.core.mapcat.call(null,((function (nrem){
return (function (p1__20132_SHARP_){
return clojure$core$matrix$utils$base_index_seq_for_shape_$_gen.call(null,cljs.core.conj.call(null,prefix,p1__20132_SHARP_),nrem);
});})(nrem))
,cljs.core.range.call(null,cljs.core.first.call(null,rem)));
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,prefix);
}
});
return gen.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.seq.call(null,sh));
});
/**
 * Returns the smallest shape that both shapes a and b can broadcast to, or nil if the the shapes
 * are not compatible.
 */
clojure.core.matrix.utils.broadcast_shape_STAR_ = (function clojure$core$matrix$utils$broadcast_shape_STAR_(var_args){
var args20135 = [];
var len__19784__auto___20140 = arguments.length;
var i__19785__auto___20141 = (0);
while(true){
if((i__19785__auto___20141 < len__19784__auto___20140)){
args20135.push((arguments[i__19785__auto___20141]));

var G__20142 = (i__19785__auto___20141 + (1));
i__19785__auto___20141 = G__20142;
continue;
} else {
}
break;
}

var G__20137 = args20135.length;
switch (G__20137) {
case 2:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20135.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
var or__18726__auto__ = b;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return cljs.core.List.EMPTY;
}
} else {
if(cljs.core.empty_QMARK_.call(null,b)){
return a;
} else {
if(((1) === cljs.core.first.call(null,a))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,b),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
if(((1) === cljs.core.first.call(null,b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,a),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
if((cljs.core.first.call(null,a) === cljs.core.first.call(null,b))){
return clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,cljs.core.first.call(null,a),cljs.core.next.call(null,a),cljs.core.next.call(null,b));
} else {
return null;

}
}
}
}
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (prefix,a,b){
if(cljs.core.truth_((function (){var or__18726__auto__ = a;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return b;
}
})())){
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,a,b);
if(cljs.core.truth_(r)){
return cljs.core.cons.call(null,prefix,r);
} else {
return null;
}
} else {
return cljs.core.cons.call(null,prefix,null);
}
});

clojure.core.matrix.utils.broadcast_shape_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Returns the smallest compatible shape that a set of shapes can all broadcast to.
 * Returns nil if this is not possible (i.e. the shapes are incompatible).
 * Returns an empty list if both shape sequences are empty (i.e. represent scalars)
 */
clojure.core.matrix.utils.broadcast_shape = (function clojure$core$matrix$utils$broadcast_shape(var_args){
var args20145 = [];
var len__19784__auto___20153 = arguments.length;
var i__19785__auto___20154 = (0);
while(true){
if((i__19785__auto___20154 < len__19784__auto___20153)){
args20145.push((arguments[i__19785__auto___20154]));

var G__20155 = (i__19785__auto___20154 + (1));
i__19785__auto___20154 = G__20155;
continue;
} else {
}
break;
}

var G__20149 = args20145.length;
switch (G__20149) {
case 1:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20145.length)].join('')));

}
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.utils.broadcast_shape.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var a__$1 = cljs.core.seq.call(null,cljs.core.reverse.call(null,a));
var b__$1 = cljs.core.seq.call(null,cljs.core.reverse.call(null,b));
var r = clojure.core.matrix.utils.broadcast_shape_STAR_.call(null,a__$1,b__$1);
if(cljs.core.truth_(r)){
return cljs.core.reverse.call(null,r);
} else {
return null;
}
});

clojure.core.matrix.utils.broadcast_shape.cljs$lang$maxFixedArity = 2;
/**
 * Returns truthy if the first shape a can be broadcast to the shape b
 */
clojure.core.matrix.utils.can_broadcast = (function clojure$core$matrix$utils$can_broadcast(from_shape,to_shape){
throw cljs.core.ex_info.call(null,[cljs.core.str("TODO: not yet implemented")].join(''),cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Returns true if an argument is a protocol'
 */
clojure.core.matrix.utils.protocol_QMARK_ = (function clojure$core$matrix$utils$protocol_QMARK_(p){
var and__18714__auto__ = cljs.core.map_QMARK_.call(null,p);
if(and__18714__auto__){
var and__18714__auto____$1 = new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p);
if(cljs.core.truth_(and__18714__auto____$1)){
return new cljs.core.Keyword(null,"on-interface","on-interface",1993482222).cljs$core$IFn$_invoke$arity$1(p).isInterface();
} else {
return and__18714__auto____$1;
}
} else {
return and__18714__auto__;
}
});
/**
 * Transform MapEntry to just map with some additional fields
 */
clojure.core.matrix.utils.enhance_protocol_kv = (function clojure$core$matrix$utils$enhance_protocol_kv(p__20166){
var vec__20169 = p__20166;
var name = cljs.core.nth.call(null,vec__20169,(0),null);
var p = cljs.core.nth.call(null,vec__20169,(1),null);
var m = cljs.core.meta.call(null,new cljs.core.Keyword(null,"var","var",-769682797).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p)));
return cljs.core.assoc.call(null,cljs.core.deref.call(null,p),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"name","name",1843675177),name);
});
clojure.core.matrix.utils.update_indexed = (function clojure$core$matrix$utils$update_indexed(xs,idxs,f){
return cljs.core.reduce.call(null,(function (p1__20173_SHARP_,p2__20174_SHARP_){
return cljs.core.assoc.call(null,p1__20173_SHARP_,p2__20174_SHARP_,f.call(null,p2__20174_SHARP_,cljs.core.get.call(null,p1__20173_SHARP_,p2__20174_SHARP_)));
}),xs,idxs);
});

//# sourceMappingURL=utils.js.map