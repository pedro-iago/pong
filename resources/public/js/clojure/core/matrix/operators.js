// Compiled by ClojureScript 1.7.228 {}
goog.provide('clojure.core.matrix.operators');
goog.require('cljs.core');
goog.require('clojure.core.matrix');
/**
 * Array multiply operator. Uses elementwise multiplication.
 */
clojure.core.matrix.operators._STAR_ = clojure.core.matrix.mul;
clojure.core.matrix.operators._STAR__STAR_ = clojure.core.matrix.pow;
/**
 * Array addition operator. Equivalent to clojure.core.matrix/add.
 */
clojure.core.matrix.operators._PLUS_ = (function clojure$core$matrix$operators$_PLUS_(var_args){
var args41608 = [];
var len__19784__auto___41643 = arguments.length;
var i__19785__auto___41644 = (0);
while(true){
if((i__19785__auto___41644 < len__19784__auto___41643)){
args41608.push((arguments[i__19785__auto___41644]));

var G__41650 = (i__19785__auto___41644 + (1));
i__19785__auto___41644 = G__41650;
continue;
} else {
}
break;
}

var G__41627 = args41608.length;
switch (G__41627) {
case 0:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41608.slice((2)),(0)));
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return clojure.core.matrix.add.call(null);
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((typeof a === 'number') && (typeof b === 'number')){
return (a + b);
} else {
return clojure.core.matrix.add.call(null,a,b);
}
});

clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators._PLUS_,clojure.core.matrix.operators._PLUS_.call(null,a,b),more);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq41610){
var G__41611 = cljs.core.first.call(null,seq41610);
var seq41610__$1 = cljs.core.next.call(null,seq41610);
var G__41612 = cljs.core.first.call(null,seq41610__$1);
var seq41610__$2 = cljs.core.next.call(null,seq41610__$1);
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__41611,G__41612,seq41610__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);
/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var args41678 = [];
var len__19784__auto___41688 = arguments.length;
var i__19785__auto___41689 = (0);
while(true){
if((i__19785__auto___41689 < len__19784__auto___41688)){
args41678.push((arguments[i__19785__auto___41689]));

var G__41690 = (i__19785__auto___41689 + (1));
i__19785__auto___41689 = G__41690;
continue;
} else {
}
break;
}

var G__41686 = args41678.length;
switch (G__41686) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41678.slice((2)),(0)));
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.negate.call(null,a);
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((typeof a === 'number') && (typeof b === 'number')){
return (a - b);
} else {
return clojure.core.matrix.sub.call(null,a,b);
}
});

clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators._,clojure.core.matrix.operators._.call(null,a,b),more);
});

clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq41679){
var G__41681 = cljs.core.first.call(null,seq41679);
var seq41679__$1 = cljs.core.next.call(null,seq41679);
var G__41682 = cljs.core.first.call(null,seq41679__$1);
var seq41679__$2 = cljs.core.next.call(null,seq41679__$1);
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic(G__41681,G__41682,seq41679__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var args41697 = [];
var len__19784__auto___41719 = arguments.length;
var i__19785__auto___41724 = (0);
while(true){
if((i__19785__auto___41724 < len__19784__auto___41719)){
args41697.push((arguments[i__19785__auto___41724]));

var G__41725 = (i__19785__auto___41724 + (1));
i__19785__auto___41724 = G__41725;
continue;
} else {
}
break;
}

var G__41713 = args41697.length;
switch (G__41713) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41697.slice((2)),(0)));
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return clojure.core.matrix.div.call(null,a);
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.div.call(null,a,b);
});

clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.div,clojure.core.matrix.div.call(null,a,b),more);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq41698){
var G__41699 = cljs.core.first.call(null,seq41698);
var seq41698__$1 = cljs.core.next.call(null,seq41698);
var G__41700 = cljs.core.first.call(null,seq41698__$1);
var seq41698__$2 = cljs.core.next.call(null,seq41698__$1);
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__41699,G__41700,seq41698__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);
/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var args41776 = [];
var len__19784__auto___41782 = arguments.length;
var i__19785__auto___41783 = (0);
while(true){
if((i__19785__auto___41783 < len__19784__auto___41782)){
args41776.push((arguments[i__19785__auto___41783]));

var G__41784 = (i__19785__auto___41783 + (1));
i__19785__auto___41783 = G__41784;
continue;
} else {
}
break;
}

var G__41781 = args41776.length;
switch (G__41781) {
case 0:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41776.slice((2)),(0)));
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$0 = (function (){
return true;
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return true;
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.equals.call(null,a,b);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,(function (r,m){
var and__18714__auto__ = r;
if(cljs.core.truth_(and__18714__auto__)){
return clojure.core.matrix.operators._EQ__EQ_.call(null,a,m);
} else {
return and__18714__auto__;
}
}),clojure.core.matrix.operators._EQ__EQ_.call(null,a,b),more);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq41777){
var G__41778 = cljs.core.first.call(null,seq41777);
var seq41777__$1 = cljs.core.next.call(null,seq41777);
var G__41779 = cljs.core.first.call(null,seq41777__$1);
var seq41777__$2 = cljs.core.next.call(null,seq41777__$1);
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41778,G__41779,seq41777__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var args41803 = [];
var len__19784__auto___41822 = arguments.length;
var i__19785__auto___41823 = (0);
while(true){
if((i__19785__auto___41823 < len__19784__auto___41822)){
args41803.push((arguments[i__19785__auto___41823]));

var G__41825 = (i__19785__auto___41823 + (1));
i__19785__auto___41823 = G__41825;
continue;
} else {
}
break;
}

var G__41815 = args41803.length;
switch (G__41815) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41803.slice((2)),(0)));
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.add_BANG_.call(null,a,b);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.add_BANG_.call(null,a,b);

var seq__41818 = cljs.core.seq.call(null,more);
var chunk__41819 = null;
var count__41820 = (0);
var i__41821 = (0);
while(true){
if((i__41821 < count__41820)){
var m = cljs.core._nth.call(null,chunk__41819,i__41821);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__41827 = seq__41818;
var G__41828 = chunk__41819;
var G__41829 = count__41820;
var G__41830 = (i__41821 + (1));
seq__41818 = G__41827;
chunk__41819 = G__41828;
count__41820 = G__41829;
i__41821 = G__41830;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41818);
if(temp__4657__auto__){
var seq__41818__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41818__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41818__$1);
var G__41857 = cljs.core.chunk_rest.call(null,seq__41818__$1);
var G__41858 = c__19529__auto__;
var G__41859 = cljs.core.count.call(null,c__19529__auto__);
var G__41860 = (0);
seq__41818 = G__41857;
chunk__41819 = G__41858;
count__41820 = G__41859;
i__41821 = G__41860;
continue;
} else {
var m = cljs.core.first.call(null,seq__41818__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__41879 = cljs.core.next.call(null,seq__41818__$1);
var G__41880 = null;
var G__41881 = (0);
var G__41882 = (0);
seq__41818 = G__41879;
chunk__41819 = G__41880;
count__41820 = G__41881;
i__41821 = G__41882;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq41804){
var G__41805 = cljs.core.first.call(null,seq41804);
var seq41804__$1 = cljs.core.next.call(null,seq41804);
var G__41806 = cljs.core.first.call(null,seq41804__$1);
var seq41804__$2 = cljs.core.next.call(null,seq41804__$1);
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41805,G__41806,seq41804__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var args41885 = [];
var len__19784__auto___41899 = arguments.length;
var i__19785__auto___41900 = (0);
while(true){
if((i__19785__auto___41900 < len__19784__auto___41899)){
args41885.push((arguments[i__19785__auto___41900]));

var G__41901 = (i__19785__auto___41900 + (1));
i__19785__auto___41900 = G__41901;
continue;
} else {
}
break;
}

var G__41891 = args41885.length;
switch (G__41891) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41885.slice((2)),(0)));
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.sub_BANG_.call(null,a,b);
});

clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.sub_BANG_.call(null,a,b);

var seq__41894 = cljs.core.seq.call(null,more);
var chunk__41895 = null;
var count__41896 = (0);
var i__41897 = (0);
while(true){
if((i__41897 < count__41896)){
var m = cljs.core._nth.call(null,chunk__41895,i__41897);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__41906 = seq__41894;
var G__41907 = chunk__41895;
var G__41908 = count__41896;
var G__41909 = (i__41897 + (1));
seq__41894 = G__41906;
chunk__41895 = G__41907;
count__41896 = G__41908;
i__41897 = G__41909;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41894);
if(temp__4657__auto__){
var seq__41894__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41894__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41894__$1);
var G__41911 = cljs.core.chunk_rest.call(null,seq__41894__$1);
var G__41912 = c__19529__auto__;
var G__41913 = cljs.core.count.call(null,c__19529__auto__);
var G__41914 = (0);
seq__41894 = G__41911;
chunk__41895 = G__41912;
count__41896 = G__41913;
i__41897 = G__41914;
continue;
} else {
var m = cljs.core.first.call(null,seq__41894__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__41915 = cljs.core.next.call(null,seq__41894__$1);
var G__41916 = null;
var G__41917 = (0);
var G__41918 = (0);
seq__41894 = G__41915;
chunk__41895 = G__41916;
count__41896 = G__41917;
i__41897 = G__41918;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq41886){
var G__41887 = cljs.core.first.call(null,seq41886);
var seq41886__$1 = cljs.core.next.call(null,seq41886);
var G__41888 = cljs.core.first.call(null,seq41886__$1);
var seq41886__$2 = cljs.core.next.call(null,seq41886__$1);
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41887,G__41888,seq41886__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var args41921 = [];
var len__19784__auto___41933 = arguments.length;
var i__19785__auto___41934 = (0);
while(true){
if((i__19785__auto___41934 < len__19784__auto___41933)){
args41921.push((arguments[i__19785__auto___41934]));

var G__41935 = (i__19785__auto___41934 + (1));
i__19785__auto___41934 = G__41935;
continue;
} else {
}
break;
}

var G__41927 = args41921.length;
switch (G__41927) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41921.slice((2)),(0)));
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.mul_BANG_.call(null,a,b);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.mul_BANG_.call(null,a,b);

var seq__41929 = cljs.core.seq.call(null,more);
var chunk__41930 = null;
var count__41931 = (0);
var i__41932 = (0);
while(true){
if((i__41932 < count__41931)){
var m = cljs.core._nth.call(null,chunk__41930,i__41932);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__41942 = seq__41929;
var G__41943 = chunk__41930;
var G__41944 = count__41931;
var G__41945 = (i__41932 + (1));
seq__41929 = G__41942;
chunk__41930 = G__41943;
count__41931 = G__41944;
i__41932 = G__41945;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41929);
if(temp__4657__auto__){
var seq__41929__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41929__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41929__$1);
var G__41946 = cljs.core.chunk_rest.call(null,seq__41929__$1);
var G__41947 = c__19529__auto__;
var G__41948 = cljs.core.count.call(null,c__19529__auto__);
var G__41949 = (0);
seq__41929 = G__41946;
chunk__41930 = G__41947;
count__41931 = G__41948;
i__41932 = G__41949;
continue;
} else {
var m = cljs.core.first.call(null,seq__41929__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__41953 = cljs.core.next.call(null,seq__41929__$1);
var G__41954 = null;
var G__41955 = (0);
var G__41956 = (0);
seq__41929 = G__41953;
chunk__41930 = G__41954;
count__41931 = G__41955;
i__41932 = G__41956;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq41922){
var G__41923 = cljs.core.first.call(null,seq41922);
var seq41922__$1 = cljs.core.next.call(null,seq41922);
var G__41924 = cljs.core.first.call(null,seq41922__$1);
var seq41922__$2 = cljs.core.next.call(null,seq41922__$1);
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41923,G__41924,seq41922__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var args41959 = [];
var len__19784__auto___41969 = arguments.length;
var i__19785__auto___41970 = (0);
while(true){
if((i__19785__auto___41970 < len__19784__auto___41969)){
args41959.push((arguments[i__19785__auto___41970]));

var G__41971 = (i__19785__auto___41970 + (1));
i__19785__auto___41970 = G__41971;
continue;
} else {
}
break;
}

var G__41964 = args41959.length;
switch (G__41964) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args41959.slice((2)),(0)));
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.div_BANG_.call(null,a,b);
});

clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
clojure.core.matrix.div_BANG_.call(null,a,b);

var seq__41965 = cljs.core.seq.call(null,more);
var chunk__41966 = null;
var count__41967 = (0);
var i__41968 = (0);
while(true){
if((i__41968 < count__41967)){
var m = cljs.core._nth.call(null,chunk__41966,i__41968);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__41978 = seq__41965;
var G__41979 = chunk__41966;
var G__41980 = count__41967;
var G__41981 = (i__41968 + (1));
seq__41965 = G__41978;
chunk__41966 = G__41979;
count__41967 = G__41980;
i__41968 = G__41981;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41965);
if(temp__4657__auto__){
var seq__41965__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41965__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41965__$1);
var G__41982 = cljs.core.chunk_rest.call(null,seq__41965__$1);
var G__41983 = c__19529__auto__;
var G__41984 = cljs.core.count.call(null,c__19529__auto__);
var G__41985 = (0);
seq__41965 = G__41982;
chunk__41966 = G__41983;
count__41967 = G__41984;
i__41968 = G__41985;
continue;
} else {
var m = cljs.core.first.call(null,seq__41965__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__41986 = cljs.core.next.call(null,seq__41965__$1);
var G__41987 = null;
var G__41988 = (0);
var G__41989 = (0);
seq__41965 = G__41986;
chunk__41966 = G__41987;
count__41967 = G__41988;
i__41968 = G__41989;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq41960){
var G__41961 = cljs.core.first.call(null,seq41960);
var seq41960__$1 = cljs.core.next.call(null,seq41960);
var G__41962 = cljs.core.first.call(null,seq41960__$1);
var seq41960__$2 = cljs.core.next.call(null,seq41960__$1);
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__41961,G__41962,seq41960__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var args42017 = [];
var len__19784__auto___42033 = arguments.length;
var i__19785__auto___42035 = (0);
while(true){
if((i__19785__auto___42035 < len__19784__auto___42033)){
args42017.push((arguments[i__19785__auto___42035]));

var G__42038 = (i__19785__auto___42035 + (1));
i__19785__auto___42035 = G__42038;
continue;
} else {
}
break;
}

var G__42027 = args42017.length;
switch (G__42027) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42017.slice((2)),(0)));
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.eif.call(null,clojure.core.matrix.sub.call(null,a,b),b,a);
});

clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators.min,clojure.core.matrix.operators.min.call(null,a,b),more);
});

clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq42018){
var G__42019 = cljs.core.first.call(null,seq42018);
var seq42018__$1 = cljs.core.next.call(null,seq42018);
var G__42020 = cljs.core.first.call(null,seq42018__$1);
var seq42018__$2 = cljs.core.next.call(null,seq42018__$1);
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic(G__42019,G__42020,seq42018__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var args42070 = [];
var len__19784__auto___42085 = arguments.length;
var i__19785__auto___42087 = (0);
while(true){
if((i__19785__auto___42087 < len__19784__auto___42085)){
args42070.push((arguments[i__19785__auto___42087]));

var G__42090 = (i__19785__auto___42087 + (1));
i__19785__auto___42087 = G__42090;
continue;
} else {
}
break;
}

var G__42080 = args42070.length;
switch (G__42080) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args42070.slice((2)),(0)));
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19803__auto__);

}
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.core.matrix.eif.call(null,clojure.core.matrix.sub.call(null,a,b),a,b);
});

clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,clojure.core.matrix.operators.min,clojure.core.matrix.operators.min.call(null,a,b),more);
});

clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq42072){
var G__42073 = cljs.core.first.call(null,seq42072);
var seq42072__$1 = cljs.core.next.call(null,seq42072);
var G__42074 = cljs.core.first.call(null,seq42072__$1);
var seq42072__$2 = cljs.core.next.call(null,seq42072__$1);
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic(G__42073,G__42074,seq42072__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=operators.js.map