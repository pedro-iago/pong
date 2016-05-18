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
var args40486 = [];
var len__19784__auto___40497 = arguments.length;
var i__19785__auto___40498 = (0);
while(true){
if((i__19785__auto___40498 < len__19784__auto___40497)){
args40486.push((arguments[i__19785__auto___40498]));

var G__40515 = (i__19785__auto___40498 + (1));
i__19785__auto___40498 = G__40515;
continue;
} else {
}
break;
}

var G__40491 = args40486.length;
switch (G__40491) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40486.slice((2)),(0)));
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

clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq40487){
var G__40488 = cljs.core.first.call(null,seq40487);
var seq40487__$1 = cljs.core.next.call(null,seq40487);
var G__40489 = cljs.core.first.call(null,seq40487__$1);
var seq40487__$2 = cljs.core.next.call(null,seq40487__$1);
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__40488,G__40489,seq40487__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);
/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var args40521 = [];
var len__19784__auto___40527 = arguments.length;
var i__19785__auto___40528 = (0);
while(true){
if((i__19785__auto___40528 < len__19784__auto___40527)){
args40521.push((arguments[i__19785__auto___40528]));

var G__40532 = (i__19785__auto___40528 + (1));
i__19785__auto___40528 = G__40532;
continue;
} else {
}
break;
}

var G__40526 = args40521.length;
switch (G__40526) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40521.slice((2)),(0)));
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

clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq40522){
var G__40523 = cljs.core.first.call(null,seq40522);
var seq40522__$1 = cljs.core.next.call(null,seq40522);
var G__40524 = cljs.core.first.call(null,seq40522__$1);
var seq40522__$2 = cljs.core.next.call(null,seq40522__$1);
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic(G__40523,G__40524,seq40522__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var args40534 = [];
var len__19784__auto___40540 = arguments.length;
var i__19785__auto___40541 = (0);
while(true){
if((i__19785__auto___40541 < len__19784__auto___40540)){
args40534.push((arguments[i__19785__auto___40541]));

var G__40542 = (i__19785__auto___40541 + (1));
i__19785__auto___40541 = G__40542;
continue;
} else {
}
break;
}

var G__40539 = args40534.length;
switch (G__40539) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40534.slice((2)),(0)));
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

clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq40535){
var G__40536 = cljs.core.first.call(null,seq40535);
var seq40535__$1 = cljs.core.next.call(null,seq40535);
var G__40537 = cljs.core.first.call(null,seq40535__$1);
var seq40535__$2 = cljs.core.next.call(null,seq40535__$1);
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__40536,G__40537,seq40535__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);
/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var args40544 = [];
var len__19784__auto___40550 = arguments.length;
var i__19785__auto___40551 = (0);
while(true){
if((i__19785__auto___40551 < len__19784__auto___40550)){
args40544.push((arguments[i__19785__auto___40551]));

var G__40552 = (i__19785__auto___40551 + (1));
i__19785__auto___40551 = G__40552;
continue;
} else {
}
break;
}

var G__40549 = args40544.length;
switch (G__40549) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40544.slice((2)),(0)));
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

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq40545){
var G__40546 = cljs.core.first.call(null,seq40545);
var seq40545__$1 = cljs.core.next.call(null,seq40545);
var G__40547 = cljs.core.first.call(null,seq40545__$1);
var seq40545__$2 = cljs.core.next.call(null,seq40545__$1);
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40546,G__40547,seq40545__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var args40556 = [];
var len__19784__auto___40566 = arguments.length;
var i__19785__auto___40567 = (0);
while(true){
if((i__19785__auto___40567 < len__19784__auto___40566)){
args40556.push((arguments[i__19785__auto___40567]));

var G__40568 = (i__19785__auto___40567 + (1));
i__19785__auto___40567 = G__40568;
continue;
} else {
}
break;
}

var G__40561 = args40556.length;
switch (G__40561) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40556.slice((2)),(0)));
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

var seq__40562 = cljs.core.seq.call(null,more);
var chunk__40563 = null;
var count__40564 = (0);
var i__40565 = (0);
while(true){
if((i__40565 < count__40564)){
var m = cljs.core._nth.call(null,chunk__40563,i__40565);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__40570 = seq__40562;
var G__40571 = chunk__40563;
var G__40572 = count__40564;
var G__40573 = (i__40565 + (1));
seq__40562 = G__40570;
chunk__40563 = G__40571;
count__40564 = G__40572;
i__40565 = G__40573;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40562);
if(temp__4657__auto__){
var seq__40562__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40562__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__40562__$1);
var G__40574 = cljs.core.chunk_rest.call(null,seq__40562__$1);
var G__40575 = c__19529__auto__;
var G__40576 = cljs.core.count.call(null,c__19529__auto__);
var G__40577 = (0);
seq__40562 = G__40574;
chunk__40563 = G__40575;
count__40564 = G__40576;
i__40565 = G__40577;
continue;
} else {
var m = cljs.core.first.call(null,seq__40562__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__40580 = cljs.core.next.call(null,seq__40562__$1);
var G__40581 = null;
var G__40582 = (0);
var G__40583 = (0);
seq__40562 = G__40580;
chunk__40563 = G__40581;
count__40564 = G__40582;
i__40565 = G__40583;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq40557){
var G__40558 = cljs.core.first.call(null,seq40557);
var seq40557__$1 = cljs.core.next.call(null,seq40557);
var G__40559 = cljs.core.first.call(null,seq40557__$1);
var seq40557__$2 = cljs.core.next.call(null,seq40557__$1);
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40558,G__40559,seq40557__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var args40588 = [];
var len__19784__auto___40608 = arguments.length;
var i__19785__auto___40611 = (0);
while(true){
if((i__19785__auto___40611 < len__19784__auto___40608)){
args40588.push((arguments[i__19785__auto___40611]));

var G__40613 = (i__19785__auto___40611 + (1));
i__19785__auto___40611 = G__40613;
continue;
} else {
}
break;
}

var G__40600 = args40588.length;
switch (G__40600) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40588.slice((2)),(0)));
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

var seq__40601 = cljs.core.seq.call(null,more);
var chunk__40602 = null;
var count__40603 = (0);
var i__40604 = (0);
while(true){
if((i__40604 < count__40603)){
var m = cljs.core._nth.call(null,chunk__40602,i__40604);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__40631 = seq__40601;
var G__40632 = chunk__40602;
var G__40633 = count__40603;
var G__40634 = (i__40604 + (1));
seq__40601 = G__40631;
chunk__40602 = G__40632;
count__40603 = G__40633;
i__40604 = G__40634;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40601);
if(temp__4657__auto__){
var seq__40601__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40601__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__40601__$1);
var G__40635 = cljs.core.chunk_rest.call(null,seq__40601__$1);
var G__40636 = c__19529__auto__;
var G__40637 = cljs.core.count.call(null,c__19529__auto__);
var G__40638 = (0);
seq__40601 = G__40635;
chunk__40602 = G__40636;
count__40603 = G__40637;
i__40604 = G__40638;
continue;
} else {
var m = cljs.core.first.call(null,seq__40601__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__40639 = cljs.core.next.call(null,seq__40601__$1);
var G__40640 = null;
var G__40641 = (0);
var G__40642 = (0);
seq__40601 = G__40639;
chunk__40602 = G__40640;
count__40603 = G__40641;
i__40604 = G__40642;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq40589){
var G__40590 = cljs.core.first.call(null,seq40589);
var seq40589__$1 = cljs.core.next.call(null,seq40589);
var G__40591 = cljs.core.first.call(null,seq40589__$1);
var seq40589__$2 = cljs.core.next.call(null,seq40589__$1);
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40590,G__40591,seq40589__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var args40644 = [];
var len__19784__auto___40670 = arguments.length;
var i__19785__auto___40672 = (0);
while(true){
if((i__19785__auto___40672 < len__19784__auto___40670)){
args40644.push((arguments[i__19785__auto___40672]));

var G__40673 = (i__19785__auto___40672 + (1));
i__19785__auto___40672 = G__40673;
continue;
} else {
}
break;
}

var G__40654 = args40644.length;
switch (G__40654) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40644.slice((2)),(0)));
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

var seq__40660 = cljs.core.seq.call(null,more);
var chunk__40661 = null;
var count__40662 = (0);
var i__40663 = (0);
while(true){
if((i__40663 < count__40662)){
var m = cljs.core._nth.call(null,chunk__40661,i__40663);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__40678 = seq__40660;
var G__40679 = chunk__40661;
var G__40680 = count__40662;
var G__40681 = (i__40663 + (1));
seq__40660 = G__40678;
chunk__40661 = G__40679;
count__40662 = G__40680;
i__40663 = G__40681;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40660);
if(temp__4657__auto__){
var seq__40660__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40660__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__40660__$1);
var G__40685 = cljs.core.chunk_rest.call(null,seq__40660__$1);
var G__40686 = c__19529__auto__;
var G__40687 = cljs.core.count.call(null,c__19529__auto__);
var G__40688 = (0);
seq__40660 = G__40685;
chunk__40661 = G__40686;
count__40662 = G__40687;
i__40663 = G__40688;
continue;
} else {
var m = cljs.core.first.call(null,seq__40660__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__40693 = cljs.core.next.call(null,seq__40660__$1);
var G__40694 = null;
var G__40695 = (0);
var G__40696 = (0);
seq__40660 = G__40693;
chunk__40661 = G__40694;
count__40662 = G__40695;
i__40663 = G__40696;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq40645){
var G__40646 = cljs.core.first.call(null,seq40645);
var seq40645__$1 = cljs.core.next.call(null,seq40645);
var G__40647 = cljs.core.first.call(null,seq40645__$1);
var seq40645__$2 = cljs.core.next.call(null,seq40645__$1);
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40646,G__40647,seq40645__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var args40698 = [];
var len__19784__auto___40708 = arguments.length;
var i__19785__auto___40709 = (0);
while(true){
if((i__19785__auto___40709 < len__19784__auto___40708)){
args40698.push((arguments[i__19785__auto___40709]));

var G__40710 = (i__19785__auto___40709 + (1));
i__19785__auto___40709 = G__40710;
continue;
} else {
}
break;
}

var G__40703 = args40698.length;
switch (G__40703) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40698.slice((2)),(0)));
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

var seq__40704 = cljs.core.seq.call(null,more);
var chunk__40705 = null;
var count__40706 = (0);
var i__40707 = (0);
while(true){
if((i__40707 < count__40706)){
var m = cljs.core._nth.call(null,chunk__40705,i__40707);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__40713 = seq__40704;
var G__40714 = chunk__40705;
var G__40715 = count__40706;
var G__40716 = (i__40707 + (1));
seq__40704 = G__40713;
chunk__40705 = G__40714;
count__40706 = G__40715;
i__40707 = G__40716;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40704);
if(temp__4657__auto__){
var seq__40704__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40704__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__40704__$1);
var G__40719 = cljs.core.chunk_rest.call(null,seq__40704__$1);
var G__40720 = c__19529__auto__;
var G__40721 = cljs.core.count.call(null,c__19529__auto__);
var G__40722 = (0);
seq__40704 = G__40719;
chunk__40705 = G__40720;
count__40706 = G__40721;
i__40707 = G__40722;
continue;
} else {
var m = cljs.core.first.call(null,seq__40704__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__40723 = cljs.core.next.call(null,seq__40704__$1);
var G__40724 = null;
var G__40725 = (0);
var G__40726 = (0);
seq__40704 = G__40723;
chunk__40705 = G__40724;
count__40706 = G__40725;
i__40707 = G__40726;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq40699){
var G__40700 = cljs.core.first.call(null,seq40699);
var seq40699__$1 = cljs.core.next.call(null,seq40699);
var G__40701 = cljs.core.first.call(null,seq40699__$1);
var seq40699__$2 = cljs.core.next.call(null,seq40699__$1);
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__40700,G__40701,seq40699__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var args40749 = [];
var len__19784__auto___40761 = arguments.length;
var i__19785__auto___40763 = (0);
while(true){
if((i__19785__auto___40763 < len__19784__auto___40761)){
args40749.push((arguments[i__19785__auto___40763]));

var G__40767 = (i__19785__auto___40763 + (1));
i__19785__auto___40763 = G__40767;
continue;
} else {
}
break;
}

var G__40754 = args40749.length;
switch (G__40754) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40749.slice((2)),(0)));
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

clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq40750){
var G__40751 = cljs.core.first.call(null,seq40750);
var seq40750__$1 = cljs.core.next.call(null,seq40750);
var G__40752 = cljs.core.first.call(null,seq40750__$1);
var seq40750__$2 = cljs.core.next.call(null,seq40750__$1);
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic(G__40751,G__40752,seq40750__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var args40790 = [];
var len__19784__auto___40800 = arguments.length;
var i__19785__auto___40801 = (0);
while(true){
if((i__19785__auto___40801 < len__19784__auto___40800)){
args40790.push((arguments[i__19785__auto___40801]));

var G__40802 = (i__19785__auto___40801 + (1));
i__19785__auto___40801 = G__40802;
continue;
} else {
}
break;
}

var G__40797 = args40790.length;
switch (G__40797) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args40790.slice((2)),(0)));
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

clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq40791){
var G__40792 = cljs.core.first.call(null,seq40791);
var seq40791__$1 = cljs.core.next.call(null,seq40791);
var G__40793 = cljs.core.first.call(null,seq40791__$1);
var seq40791__$2 = cljs.core.next.call(null,seq40791__$1);
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic(G__40792,G__40793,seq40791__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=operators.js.map