// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.macros');
goog.require('cljs.core');
/**
 * Throws an error with the provided message(s)
 */
clojure.core.matrix.macros.error = (function clojure$core$matrix$macros$error(var_args){
var args__19791__auto__ = [];
var len__19784__auto___19882 = arguments.length;
var i__19785__auto___19883 = (0);
while(true){
if((i__19785__auto___19883 < len__19784__auto___19882)){
args__19791__auto__.push((arguments[i__19785__auto___19883]));

var G__19889 = (i__19785__auto___19883 + (1));
i__19785__auto___19883 = G__19889;
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

clojure.core.matrix.macros.error.cljs$lang$applyTo = (function (seq19848){
var G__19851 = cljs.core.first.call(null,seq19848);
var seq19848__$1 = cljs.core.next.call(null,seq19848);
var G__19852 = cljs.core.first.call(null,seq19848__$1);
var seq19848__$2 = cljs.core.next.call(null,seq19848__$1);
return clojure.core.matrix.macros.error.cljs$core$IFn$_invoke$arity$variadic(G__19851,G__19852,seq19848__$2);
});

clojure.core.matrix.macros.error.cljs$lang$macro = true;
clojure.core.matrix.macros.TODO = (function clojure$core$matrix$macros$TODO(var_args){
var args19903 = [];
var len__19784__auto___19924 = arguments.length;
var i__19785__auto___19925 = (0);
while(true){
if((i__19785__auto___19925 < len__19784__auto___19924)){
args19903.push((arguments[i__19785__auto___19925]));

var G__19926 = (i__19785__auto___19925 + (1));
i__19785__auto___19925 = G__19926;
continue;
} else {
}
break;
}

var G__19920 = args19903.length;
switch (G__19920) {
case 2:
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args19903.slice((2)),(0)));
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: not yet implemented"))));
});

clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vals){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.macros","error","clojure.core.matrix.macros/error",-1013616626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"TODO: "),vals)));
});

clojure.core.matrix.macros.TODO.cljs$lang$applyTo = (function (seq19904){
var G__19905 = cljs.core.first.call(null,seq19904);
var seq19904__$1 = cljs.core.next.call(null,seq19904);
var G__19906 = cljs.core.first.call(null,seq19904__$1);
var seq19904__$2 = cljs.core.next.call(null,seq19904__$1);
return clojure.core.matrix.macros.TODO.cljs$core$IFn$_invoke$arity$variadic(G__19905,G__19906,seq19904__$2);
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
var len__19784__auto___20016 = arguments.length;
var i__19785__auto___20017 = (0);
while(true){
if((i__19785__auto___20017 < len__19784__auto___20016)){
args__19791__auto__.push((arguments[i__19785__auto___20017]));

var G__20019 = (i__19785__auto___20017 + (1));
i__19785__auto___20017 = G__20019;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((3) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((3)),(0))):null);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19792__auto__);
});

clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__19995,code){
var vec__20003 = p__19995;
var val_sym = cljs.core.nth.call(null,vec__20003,(0),null);
var values = cljs.core.nth.call(null,vec__20003,(1),null);
var index_sym = cljs.core.nth.call(null,vec__20003,(2),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__19971__auto__","vals__19971__auto__",-224286160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,values))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,index_sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","long","cljs.core/long",241154833,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__19971__auto__","vals__19971__auto__",-224286160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,val_sym),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__19971__auto__","vals__19971__auto__",-224286160,null))))))))))),code,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"vals__19971__auto__","vals__19971__auto__",-224286160,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,index_sym))))))))))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))))))));
});

clojure.core.matrix.macros.doseq_indexed.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.doseq_indexed.cljs$lang$applyTo = (function (seq19974){
var G__19975 = cljs.core.first.call(null,seq19974);
var seq19974__$1 = cljs.core.next.call(null,seq19974);
var G__19976 = cljs.core.first.call(null,seq19974__$1);
var seq19974__$2 = cljs.core.next.call(null,seq19974__$1);
var G__19977 = cljs.core.first.call(null,seq19974__$2);
var seq19974__$3 = cljs.core.next.call(null,seq19974__$2);
return clojure.core.matrix.macros.doseq_indexed.cljs$core$IFn$_invoke$arity$variadic(G__19975,G__19976,G__19977,seq19974__$3);
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
var len__19784__auto___20102 = arguments.length;
var i__19785__auto___20103 = (0);
while(true){
if((i__19785__auto___20103 < len__19784__auto___20102)){
args__19791__auto__.push((arguments[i__19785__auto___20103]));

var G__20104 = (i__19785__auto___20103 + (1));
i__19785__auto___20103 = G__20104;
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
var vec__20097 = cljs.core.take.call(null,(4),loops__$1);
var var$ = cljs.core.nth.call(null,vec__20097,(0),null);
var init = cljs.core.nth.call(null,vec__20097,(1),null);
var check = cljs.core.nth.call(null,vec__20097,(2),null);
var next = cljs.core.nth.call(null,vec__20097,(3),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,var$),cljs.core._conj.call(null,cljs.core.List.EMPTY,init)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,check),clojure$core$matrix$macros$c_for_rec.call(null,cljs.core.nthrest.call(null,loops__$1,(4)),body_stmts),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,next))))))))))))))));
} else {
return body_stmts;
}
});
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),c_for_rec.call(null,loops,body),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

clojure.core.matrix.macros.c_for.cljs$lang$maxFixedArity = (3);

clojure.core.matrix.macros.c_for.cljs$lang$applyTo = (function (seq20049){
var G__20050 = cljs.core.first.call(null,seq20049);
var seq20049__$1 = cljs.core.next.call(null,seq20049);
var G__20051 = cljs.core.first.call(null,seq20049__$1);
var seq20049__$2 = cljs.core.next.call(null,seq20049__$1);
var G__20052 = cljs.core.first.call(null,seq20049__$2);
var seq20049__$3 = cljs.core.next.call(null,seq20049__$2);
return clojure.core.matrix.macros.c_for.cljs$core$IFn$_invoke$arity$variadic(G__20050,G__20051,G__20052,seq20049__$3);
});

clojure.core.matrix.macros.c_for.cljs$lang$macro = true;
/**
 * Macro to coerce to scalar value with an efficient dispatch sequence
 */
clojure.core.matrix.macros.scalar_coerce = (function clojure$core$matrix$macros$scalar_coerce(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20109__auto__","x__20109__auto__",-90030163,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,x)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","number?","cljs.core/number?",-811857295,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20109__auto__","x__20109__auto__",-90030163,null)))))),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20109__auto__","x__20109__auto__",-90030163,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("clojure.core.matrix.protocols","get-0d","clojure.core.matrix.protocols/get-0d",1926949216,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20109__auto__","x__20109__auto__",-90030163,null)))))))))))));
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