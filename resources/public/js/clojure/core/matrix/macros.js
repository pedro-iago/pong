// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__19791__auto__ = [];
var len__19784__auto___33767 = arguments.length;
var i__19785__auto___33768 = (0);
while(true){
if((i__19785__auto___33768 < len__19784__auto___33767)){
args__19791__auto__.push((arguments[i__19785__auto___33768]));

var G__33769 = (i__19785__auto___33768 + (1));
i__19785__auto___33768 = G__33769;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((2) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((2)),(0))):null);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19792__auto__);
});

clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),vals)))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))))))))))));
});

clojure.core.matrix.macros.error.cljs$lang$maxFixedArity = (2);

clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq33760){
var G__33763 = cljs.core.first.call(null,seq33760);
var seq33760__$1 = cljs.core.next.call(null,seq33760);
var G__33764 = cljs.core.first.call(null,seq33760__$1);
var seq33760__$2 = cljs.core.next.call(null,seq33760__$1);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic(G__33763,G__33764,seq33760__$2);
});

clojure.core.matrix.macros.error.cljs$lang$macro = true;
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var args33775 = [];
var len__19784__auto___33798 = arguments.length;
var i__19785__auto___33799 = (0);
while(true){
if((i__19785__auto___33799 < len__19784__auto___33798)){
args33775.push((arguments[i__19785__auto___33799]));

var G__33804 = (i__19785__auto___33799 + (1));
i__19785__auto___33799 = G__33804;
continue;
} else {
}
break;
}

var G__33786 = args33775.length;
switch (G__33786) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args33775.slice((2)),(0)));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: not yet implemented"))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: "),vals)));
});

clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq33782){
var G__33783 = cljs.core.first.call(null,seq33782);
var seq33782__$1 = cljs.core.next.call(null,seq33782);
var G__33784 = cljs.core.first.call(null,seq33782__$1);
var seq33782__$2 = cljs.core.next.call(null,seq33782__$1);
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic(G__33783,G__33784,seq33782__$2);
});

clojure.core.matrix.macros.TODO.cljs$lang$maxFixedArity = (2);

clojure.core.matrix.macros.TODO.cljs$lang$macro = true;
/**
 * Throws IllegalArgumentException with provided string
 */
clojure.core.matrix.macros.iae = (function clojure$core$matrix$macros$iae(_AMPERSAND_form,_AMPERSAND_env,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"IllegalArgumentException.","IllegalArgumentException.",-1885081185,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,exception_str))))))));
});

clojure.core.matrix.macros.iae.cljs$lang$macro = true;
/**
 * Throws an IllegalArgumentException when the predicate is not satisfied
 */
clojure.core.matrix.macros.iae_when_not = (function clojure$core$matrix$macros$iae_when_not(_AMPERSAND_form,_AMPERSAND_env,pred_QMARK_,exception_str){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,pred_QMARK_),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","iae","clojure.core.matrix.macros/iae",926591908,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,exception_str))))))));
});

clojure.core.matrix.macros.iae_when_not.cljs$lang$macro = true;
/**
 * loops over a set of values, binding index-sym to the 0-based index of each value
 */
clojure.core.matrix.macros.doseq_indexed = (function clojure$core$matrix$macros$doseq_indexed(var_args){
var args__19791__auto__ = [];
var len__19784__auto___33854 = arguments.length;
var i__19785__auto___33855 = (0);
while(true){
if((i__19785__auto___33855 < len__19784__auto___33854)){
args__19791__auto__.push((arguments[i__19785__auto___33855]));

var G__33860 = (i__19785__auto___33855 + (1));
i__19785__auto___33855 = G__33860;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__33849,code){
var vec__33850 = p__33849;
var val_sym = cljs.core.nth.call(null,vec__33850,(0),null);
var values = cljs.core.nth.call(null,vec__33850,(1),null);
var index_sym = cljs.core.nth.call(null,vec__33850,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__33834__auto__","vals__33834__auto__",986668095,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,values))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,index_sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__33834__auto__","vals__33834__auto__",986668095,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,val_sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__33834__auto__","vals__33834__auto__",986668095,null))))))))))),code,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__33834__auto__","vals__33834__auto__",986668095,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,index_sym))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))));
});

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq33835){
var G__33836 = cljs.core.first.call(null,seq33835);
var seq33835__$1 = cljs.core.next.call(null,seq33835);
var G__33837 = cljs.core.first.call(null,seq33835__$1);
var seq33835__$2 = cljs.core.next.call(null,seq33835__$1);
var G__33838 = cljs.core.first.call(null,seq33835__$2);
var seq33835__$3 = cljs.core.next.call(null,seq33835__$2);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic(G__33836,G__33837,G__33838,seq33835__$3);
});

clojure.core.matrix.macros.doseq_indexed.cljs$lang$macro = true;
clojure.core.matrix.macros.is_object_array_QMARK_ = (function clojure$core$matrix$macros$is_object_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,m))))))));
});

clojure.core.matrix.macros.is_object_array_QMARK_.cljs$lang$macro = true;
clojure.core.matrix.macros.is_long_array_QMARK_ = (function clojure$core$matrix$macros$is_long_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,m))))))));
});

clojure.core.matrix.macros.is_long_array_QMARK_.cljs$lang$macro = true;
clojure.core.matrix.macros.is_double_array_QMARK_ = (function clojure$core$matrix$macros$is_double_array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array","js/Array",-423508366,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,m))))))));
});

clojure.core.matrix.macros.is_double_array_QMARK_.cljs$lang$macro = true;
/**
 * C-like loop with nested loops support
 */
clojure.core.matrix.macros.c_for = (function clojure$core$matrix$macros$c_for(var_args){
var args__19791__auto__ = [];
var len__19784__auto___33909 = arguments.length;
var i__19785__auto___33910 = (0);
while(true){
if((i__19785__auto___33910 < len__19784__auto___33909)){
args__19791__auto__.push((arguments[i__19785__auto___33910]));

var G__33911 = (i__19785__auto___33910 + (1));
i__19785__auto___33910 = G__33911;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,loops,body){
var c_for_rec = (function clojure$core$matrix$macros$c_for_rec(loops__$1,body_stmts){
if(cljs.core.seq.call(null,loops__$1)){
var vec__33904 = cljs.core.take.call(null,(4),loops__$1);
var var$ = cljs.core.nth.call(null,vec__33904,(0),null);
var init = cljs.core.nth.call(null,vec__33904,(1),null);
var check = cljs.core.nth.call(null,vec__33904,(2),null);
var next = cljs.core.nth.call(null,vec__33904,(3),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,var$),cljs.core._conj.call(null,cljs.core.List.EMPTY,init)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,check),clojure$core$matrix$macros$c_for_rec.call(null,cljs.core.nthrest.call(null,loops__$1,(4)),body_stmts),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,next))))))))))))))));
} else {
return body_stmts;
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),c_for_rec.call(null,loops,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq33885){
var G__33886 = cljs.core.first.call(null,seq33885);
var seq33885__$1 = cljs.core.next.call(null,seq33885);
var G__33887 = cljs.core.first.call(null,seq33885__$1);
var seq33885__$2 = cljs.core.next.call(null,seq33885__$1);
var G__33888 = cljs.core.first.call(null,seq33885__$2);
var seq33885__$3 = cljs.core.next.call(null,seq33885__$2);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic(G__33886,G__33887,G__33888,seq33885__$3);
});

clojure.core.matrix.macros.c_for.cljs$lang$macro = true;
/**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33926__auto__","x__33926__auto__",464335092,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33926__auto__","x__33926__auto__",464335092,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33926__auto__","x__33926__auto__",464335092,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.protocols","get-0d","clojure.core.matrix.protocols/get-0d",1926949216,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__33926__auto__","x__33926__auto__",464335092,null)))))))))))));
});

clojure.core.matrix.macros.scalar_coerce.cljs$lang$macro = true;
/**
 * Returns true if the parameter is an N-dimensional array of any type
 */
clojure.core.matrix.macros.array_QMARK_ = (function clojure$core$matrix$macros$array_QMARK_(_AMPERSAND_form,_AMPERSAND_env,m){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.protocols","is-scalar?","clojure.core.matrix.protocols/is-scalar?",-355472862,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,m))))))));
});

clojure.core.matrix.macros.array_QMARK_.cljs$lang$macro = true;

//# sourceMappingURL=macros.js.map