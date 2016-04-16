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
var args33889 = [];
var len__19160__auto___33895 = arguments.length;
var i__19161__auto___33896 = (0);
while(true){
if((i__19161__auto___33896 < len__19160__auto___33895)){
args33889.push((arguments[i__19161__auto___33896]));

var G__33897 = (i__19161__auto___33896 + (1));
i__19161__auto___33896 = G__33897;
continue;
} else {
}
break;
}

var G__33894 = args33889.length;
switch (G__33894) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33889.slice((2)),(0)));
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq33890){
var G__33891 = cljs.core.first.call(null,seq33890);
var seq33890__$1 = cljs.core.next.call(null,seq33890);
var G__33892 = cljs.core.first.call(null,seq33890__$1);
var seq33890__$2 = cljs.core.next.call(null,seq33890__$1);
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__33891,G__33892,seq33890__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);
/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var args33899 = [];
var len__19160__auto___33905 = arguments.length;
var i__19161__auto___33906 = (0);
while(true){
if((i__19161__auto___33906 < len__19160__auto___33905)){
args33899.push((arguments[i__19161__auto___33906]));

var G__33907 = (i__19161__auto___33906 + (1));
i__19161__auto___33906 = G__33907;
continue;
} else {
}
break;
}

var G__33904 = args33899.length;
switch (G__33904) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33899.slice((2)),(0)));
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq33900){
var G__33901 = cljs.core.first.call(null,seq33900);
var seq33900__$1 = cljs.core.next.call(null,seq33900);
var G__33902 = cljs.core.first.call(null,seq33900__$1);
var seq33900__$2 = cljs.core.next.call(null,seq33900__$1);
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic(G__33901,G__33902,seq33900__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var args33909 = [];
var len__19160__auto___33915 = arguments.length;
var i__19161__auto___33916 = (0);
while(true){
if((i__19161__auto___33916 < len__19160__auto___33915)){
args33909.push((arguments[i__19161__auto___33916]));

var G__33917 = (i__19161__auto___33916 + (1));
i__19161__auto___33916 = G__33917;
continue;
} else {
}
break;
}

var G__33914 = args33909.length;
switch (G__33914) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33909.slice((2)),(0)));
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq33910){
var G__33911 = cljs.core.first.call(null,seq33910);
var seq33910__$1 = cljs.core.next.call(null,seq33910);
var G__33912 = cljs.core.first.call(null,seq33910__$1);
var seq33910__$2 = cljs.core.next.call(null,seq33910__$1);
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__33911,G__33912,seq33910__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);
/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var args33919 = [];
var len__19160__auto___33925 = arguments.length;
var i__19161__auto___33926 = (0);
while(true){
if((i__19161__auto___33926 < len__19160__auto___33925)){
args33919.push((arguments[i__19161__auto___33926]));

var G__33927 = (i__19161__auto___33926 + (1));
i__19161__auto___33926 = G__33927;
continue;
} else {
}
break;
}

var G__33924 = args33919.length;
switch (G__33924) {
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
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33919.slice((2)),(0)));
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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
var and__18090__auto__ = r;
if(cljs.core.truth_(and__18090__auto__)){
return clojure.core.matrix.operators._EQ__EQ_.call(null,a,m);
} else {
return and__18090__auto__;
}
}),clojure.core.matrix.operators._EQ__EQ_.call(null,a,b),more);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq33920){
var G__33921 = cljs.core.first.call(null,seq33920);
var seq33920__$1 = cljs.core.next.call(null,seq33920);
var G__33922 = cljs.core.first.call(null,seq33920__$1);
var seq33920__$2 = cljs.core.next.call(null,seq33920__$1);
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33921,G__33922,seq33920__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var args33929 = [];
var len__19160__auto___33939 = arguments.length;
var i__19161__auto___33940 = (0);
while(true){
if((i__19161__auto___33940 < len__19160__auto___33939)){
args33929.push((arguments[i__19161__auto___33940]));

var G__33941 = (i__19161__auto___33940 + (1));
i__19161__auto___33940 = G__33941;
continue;
} else {
}
break;
}

var G__33934 = args33929.length;
switch (G__33934) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33929.slice((2)),(0)));
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33935 = cljs.core.seq.call(null,more);
var chunk__33936 = null;
var count__33937 = (0);
var i__33938 = (0);
while(true){
if((i__33938 < count__33937)){
var m = cljs.core._nth.call(null,chunk__33936,i__33938);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__33943 = seq__33935;
var G__33944 = chunk__33936;
var G__33945 = count__33937;
var G__33946 = (i__33938 + (1));
seq__33935 = G__33943;
chunk__33936 = G__33944;
count__33937 = G__33945;
i__33938 = G__33946;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33935);
if(temp__4657__auto__){
var seq__33935__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33935__$1)){
var c__18905__auto__ = cljs.core.chunk_first.call(null,seq__33935__$1);
var G__33947 = cljs.core.chunk_rest.call(null,seq__33935__$1);
var G__33948 = c__18905__auto__;
var G__33949 = cljs.core.count.call(null,c__18905__auto__);
var G__33950 = (0);
seq__33935 = G__33947;
chunk__33936 = G__33948;
count__33937 = G__33949;
i__33938 = G__33950;
continue;
} else {
var m = cljs.core.first.call(null,seq__33935__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__33951 = cljs.core.next.call(null,seq__33935__$1);
var G__33952 = null;
var G__33953 = (0);
var G__33954 = (0);
seq__33935 = G__33951;
chunk__33936 = G__33952;
count__33937 = G__33953;
i__33938 = G__33954;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq33930){
var G__33931 = cljs.core.first.call(null,seq33930);
var seq33930__$1 = cljs.core.next.call(null,seq33930);
var G__33932 = cljs.core.first.call(null,seq33930__$1);
var seq33930__$2 = cljs.core.next.call(null,seq33930__$1);
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33931,G__33932,seq33930__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var args33955 = [];
var len__19160__auto___33965 = arguments.length;
var i__19161__auto___33966 = (0);
while(true){
if((i__19161__auto___33966 < len__19160__auto___33965)){
args33955.push((arguments[i__19161__auto___33966]));

var G__33967 = (i__19161__auto___33966 + (1));
i__19161__auto___33966 = G__33967;
continue;
} else {
}
break;
}

var G__33960 = args33955.length;
switch (G__33960) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33955.slice((2)),(0)));
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33961 = cljs.core.seq.call(null,more);
var chunk__33962 = null;
var count__33963 = (0);
var i__33964 = (0);
while(true){
if((i__33964 < count__33963)){
var m = cljs.core._nth.call(null,chunk__33962,i__33964);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__33969 = seq__33961;
var G__33970 = chunk__33962;
var G__33971 = count__33963;
var G__33972 = (i__33964 + (1));
seq__33961 = G__33969;
chunk__33962 = G__33970;
count__33963 = G__33971;
i__33964 = G__33972;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33961);
if(temp__4657__auto__){
var seq__33961__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33961__$1)){
var c__18905__auto__ = cljs.core.chunk_first.call(null,seq__33961__$1);
var G__33973 = cljs.core.chunk_rest.call(null,seq__33961__$1);
var G__33974 = c__18905__auto__;
var G__33975 = cljs.core.count.call(null,c__18905__auto__);
var G__33976 = (0);
seq__33961 = G__33973;
chunk__33962 = G__33974;
count__33963 = G__33975;
i__33964 = G__33976;
continue;
} else {
var m = cljs.core.first.call(null,seq__33961__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__33977 = cljs.core.next.call(null,seq__33961__$1);
var G__33978 = null;
var G__33979 = (0);
var G__33980 = (0);
seq__33961 = G__33977;
chunk__33962 = G__33978;
count__33963 = G__33979;
i__33964 = G__33980;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq33956){
var G__33957 = cljs.core.first.call(null,seq33956);
var seq33956__$1 = cljs.core.next.call(null,seq33956);
var G__33958 = cljs.core.first.call(null,seq33956__$1);
var seq33956__$2 = cljs.core.next.call(null,seq33956__$1);
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33957,G__33958,seq33956__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var args33981 = [];
var len__19160__auto___33991 = arguments.length;
var i__19161__auto___33992 = (0);
while(true){
if((i__19161__auto___33992 < len__19160__auto___33991)){
args33981.push((arguments[i__19161__auto___33992]));

var G__33993 = (i__19161__auto___33992 + (1));
i__19161__auto___33992 = G__33993;
continue;
} else {
}
break;
}

var G__33986 = args33981.length;
switch (G__33986) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args33981.slice((2)),(0)));
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__33987 = cljs.core.seq.call(null,more);
var chunk__33988 = null;
var count__33989 = (0);
var i__33990 = (0);
while(true){
if((i__33990 < count__33989)){
var m = cljs.core._nth.call(null,chunk__33988,i__33990);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__33995 = seq__33987;
var G__33996 = chunk__33988;
var G__33997 = count__33989;
var G__33998 = (i__33990 + (1));
seq__33987 = G__33995;
chunk__33988 = G__33996;
count__33989 = G__33997;
i__33990 = G__33998;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33987);
if(temp__4657__auto__){
var seq__33987__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33987__$1)){
var c__18905__auto__ = cljs.core.chunk_first.call(null,seq__33987__$1);
var G__33999 = cljs.core.chunk_rest.call(null,seq__33987__$1);
var G__34000 = c__18905__auto__;
var G__34001 = cljs.core.count.call(null,c__18905__auto__);
var G__34002 = (0);
seq__33987 = G__33999;
chunk__33988 = G__34000;
count__33989 = G__34001;
i__33990 = G__34002;
continue;
} else {
var m = cljs.core.first.call(null,seq__33987__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__34003 = cljs.core.next.call(null,seq__33987__$1);
var G__34004 = null;
var G__34005 = (0);
var G__34006 = (0);
seq__33987 = G__34003;
chunk__33988 = G__34004;
count__33989 = G__34005;
i__33990 = G__34006;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq33982){
var G__33983 = cljs.core.first.call(null,seq33982);
var seq33982__$1 = cljs.core.next.call(null,seq33982);
var G__33984 = cljs.core.first.call(null,seq33982__$1);
var seq33982__$2 = cljs.core.next.call(null,seq33982__$1);
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__33983,G__33984,seq33982__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var args34007 = [];
var len__19160__auto___34017 = arguments.length;
var i__19161__auto___34018 = (0);
while(true){
if((i__19161__auto___34018 < len__19160__auto___34017)){
args34007.push((arguments[i__19161__auto___34018]));

var G__34019 = (i__19161__auto___34018 + (1));
i__19161__auto___34018 = G__34019;
continue;
} else {
}
break;
}

var G__34012 = args34007.length;
switch (G__34012) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args34007.slice((2)),(0)));
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

var seq__34013 = cljs.core.seq.call(null,more);
var chunk__34014 = null;
var count__34015 = (0);
var i__34016 = (0);
while(true){
if((i__34016 < count__34015)){
var m = cljs.core._nth.call(null,chunk__34014,i__34016);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__34021 = seq__34013;
var G__34022 = chunk__34014;
var G__34023 = count__34015;
var G__34024 = (i__34016 + (1));
seq__34013 = G__34021;
chunk__34014 = G__34022;
count__34015 = G__34023;
i__34016 = G__34024;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34013);
if(temp__4657__auto__){
var seq__34013__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34013__$1)){
var c__18905__auto__ = cljs.core.chunk_first.call(null,seq__34013__$1);
var G__34025 = cljs.core.chunk_rest.call(null,seq__34013__$1);
var G__34026 = c__18905__auto__;
var G__34027 = cljs.core.count.call(null,c__18905__auto__);
var G__34028 = (0);
seq__34013 = G__34025;
chunk__34014 = G__34026;
count__34015 = G__34027;
i__34016 = G__34028;
continue;
} else {
var m = cljs.core.first.call(null,seq__34013__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__34029 = cljs.core.next.call(null,seq__34013__$1);
var G__34030 = null;
var G__34031 = (0);
var G__34032 = (0);
seq__34013 = G__34029;
chunk__34014 = G__34030;
count__34015 = G__34031;
i__34016 = G__34032;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq34008){
var G__34009 = cljs.core.first.call(null,seq34008);
var seq34008__$1 = cljs.core.next.call(null,seq34008);
var G__34010 = cljs.core.first.call(null,seq34008__$1);
var seq34008__$2 = cljs.core.next.call(null,seq34008__$1);
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__34009,G__34010,seq34008__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var args34033 = [];
var len__19160__auto___34039 = arguments.length;
var i__19161__auto___34040 = (0);
while(true){
if((i__19161__auto___34040 < len__19160__auto___34039)){
args34033.push((arguments[i__19161__auto___34040]));

var G__34041 = (i__19161__auto___34040 + (1));
i__19161__auto___34040 = G__34041;
continue;
} else {
}
break;
}

var G__34038 = args34033.length;
switch (G__34038) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args34033.slice((2)),(0)));
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq34034){
var G__34035 = cljs.core.first.call(null,seq34034);
var seq34034__$1 = cljs.core.next.call(null,seq34034);
var G__34036 = cljs.core.first.call(null,seq34034__$1);
var seq34034__$2 = cljs.core.next.call(null,seq34034__$1);
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic(G__34035,G__34036,seq34034__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var args34043 = [];
var len__19160__auto___34049 = arguments.length;
var i__19161__auto___34050 = (0);
while(true){
if((i__19161__auto___34050 < len__19160__auto___34049)){
args34043.push((arguments[i__19161__auto___34050]));

var G__34051 = (i__19161__auto___34050 + (1));
i__19161__auto___34050 = G__34051;
continue;
} else {
}
break;
}

var G__34048 = args34043.length;
switch (G__34048) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19179__auto__ = (new cljs.core.IndexedSeq(args34043.slice((2)),(0)));
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19179__auto__);

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

clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq34044){
var G__34045 = cljs.core.first.call(null,seq34044);
var seq34044__$1 = cljs.core.next.call(null,seq34044);
var G__34046 = cljs.core.first.call(null,seq34044__$1);
var seq34044__$2 = cljs.core.next.call(null,seq34044__$1);
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic(G__34045,G__34046,seq34044__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=operators.js.map