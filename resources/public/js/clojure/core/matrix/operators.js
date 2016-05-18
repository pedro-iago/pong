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
var args39069 = [];
var len__19784__auto___39088 = arguments.length;
var i__19785__auto___39089 = (0);
while(true){
if((i__19785__auto___39089 < len__19784__auto___39088)){
args39069.push((arguments[i__19785__auto___39089]));

var G__39090 = (i__19785__auto___39089 + (1));
i__19785__auto___39089 = G__39090;
continue;
} else {
}
break;
}

var G__39087 = args39069.length;
switch (G__39087) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39069.slice((2)),(0)));
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

clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq39070){
var G__39071 = cljs.core.first.call(null,seq39070);
var seq39070__$1 = cljs.core.next.call(null,seq39070);
var G__39072 = cljs.core.first.call(null,seq39070__$1);
var seq39070__$2 = cljs.core.next.call(null,seq39070__$1);
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__39071,G__39072,seq39070__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);
/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var args39110 = [];
var len__19784__auto___39169 = arguments.length;
var i__19785__auto___39170 = (0);
while(true){
if((i__19785__auto___39170 < len__19784__auto___39169)){
args39110.push((arguments[i__19785__auto___39170]));

var G__39171 = (i__19785__auto___39170 + (1));
i__19785__auto___39170 = G__39171;
continue;
} else {
}
break;
}

var G__39145 = args39110.length;
switch (G__39145) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39110.slice((2)),(0)));
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

clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq39112){
var G__39114 = cljs.core.first.call(null,seq39112);
var seq39112__$1 = cljs.core.next.call(null,seq39112);
var G__39115 = cljs.core.first.call(null,seq39112__$1);
var seq39112__$2 = cljs.core.next.call(null,seq39112__$1);
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic(G__39114,G__39115,seq39112__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var args39182 = [];
var len__19784__auto___39197 = arguments.length;
var i__19785__auto___39198 = (0);
while(true){
if((i__19785__auto___39198 < len__19784__auto___39197)){
args39182.push((arguments[i__19785__auto___39198]));

var G__39199 = (i__19785__auto___39198 + (1));
i__19785__auto___39198 = G__39199;
continue;
} else {
}
break;
}

var G__39191 = args39182.length;
switch (G__39191) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39182.slice((2)),(0)));
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

clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq39183){
var G__39186 = cljs.core.first.call(null,seq39183);
var seq39183__$1 = cljs.core.next.call(null,seq39183);
var G__39187 = cljs.core.first.call(null,seq39183__$1);
var seq39183__$2 = cljs.core.next.call(null,seq39183__$1);
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__39186,G__39187,seq39183__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);
/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var args39202 = [];
var len__19784__auto___39211 = arguments.length;
var i__19785__auto___39212 = (0);
while(true){
if((i__19785__auto___39212 < len__19784__auto___39211)){
args39202.push((arguments[i__19785__auto___39212]));

var G__39214 = (i__19785__auto___39212 + (1));
i__19785__auto___39212 = G__39214;
continue;
} else {
}
break;
}

var G__39209 = args39202.length;
switch (G__39209) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39202.slice((2)),(0)));
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

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq39203){
var G__39204 = cljs.core.first.call(null,seq39203);
var seq39203__$1 = cljs.core.next.call(null,seq39203);
var G__39205 = cljs.core.first.call(null,seq39203__$1);
var seq39203__$2 = cljs.core.next.call(null,seq39203__$1);
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__39204,G__39205,seq39203__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var args39228 = [];
var len__19784__auto___39256 = arguments.length;
var i__19785__auto___39257 = (0);
while(true){
if((i__19785__auto___39257 < len__19784__auto___39256)){
args39228.push((arguments[i__19785__auto___39257]));

var G__39261 = (i__19785__auto___39257 + (1));
i__19785__auto___39257 = G__39261;
continue;
} else {
}
break;
}

var G__39235 = args39228.length;
switch (G__39235) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39228.slice((2)),(0)));
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

var seq__39236 = cljs.core.seq.call(null,more);
var chunk__39237 = null;
var count__39238 = (0);
var i__39239 = (0);
while(true){
if((i__39239 < count__39238)){
var m = cljs.core._nth.call(null,chunk__39237,i__39239);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__39331 = seq__39236;
var G__39332 = chunk__39237;
var G__39333 = count__39238;
var G__39334 = (i__39239 + (1));
seq__39236 = G__39331;
chunk__39237 = G__39332;
count__39238 = G__39333;
i__39239 = G__39334;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39236);
if(temp__4657__auto__){
var seq__39236__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39236__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39236__$1);
var G__39351 = cljs.core.chunk_rest.call(null,seq__39236__$1);
var G__39352 = c__19529__auto__;
var G__39353 = cljs.core.count.call(null,c__19529__auto__);
var G__39354 = (0);
seq__39236 = G__39351;
chunk__39237 = G__39352;
count__39238 = G__39353;
i__39239 = G__39354;
continue;
} else {
var m = cljs.core.first.call(null,seq__39236__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__39365 = cljs.core.next.call(null,seq__39236__$1);
var G__39366 = null;
var G__39367 = (0);
var G__39368 = (0);
seq__39236 = G__39365;
chunk__39237 = G__39366;
count__39238 = G__39367;
i__39239 = G__39368;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq39229){
var G__39230 = cljs.core.first.call(null,seq39229);
var seq39229__$1 = cljs.core.next.call(null,seq39229);
var G__39231 = cljs.core.first.call(null,seq39229__$1);
var seq39229__$2 = cljs.core.next.call(null,seq39229__$1);
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__39230,G__39231,seq39229__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var args39370 = [];
var len__19784__auto___39396 = arguments.length;
var i__19785__auto___39397 = (0);
while(true){
if((i__19785__auto___39397 < len__19784__auto___39396)){
args39370.push((arguments[i__19785__auto___39397]));

var G__39398 = (i__19785__auto___39397 + (1));
i__19785__auto___39397 = G__39398;
continue;
} else {
}
break;
}

var G__39383 = args39370.length;
switch (G__39383) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39370.slice((2)),(0)));
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

var seq__39388 = cljs.core.seq.call(null,more);
var chunk__39389 = null;
var count__39390 = (0);
var i__39391 = (0);
while(true){
if((i__39391 < count__39390)){
var m = cljs.core._nth.call(null,chunk__39389,i__39391);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__39406 = seq__39388;
var G__39407 = chunk__39389;
var G__39408 = count__39390;
var G__39409 = (i__39391 + (1));
seq__39388 = G__39406;
chunk__39389 = G__39407;
count__39390 = G__39408;
i__39391 = G__39409;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39388);
if(temp__4657__auto__){
var seq__39388__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39388__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39388__$1);
var G__39415 = cljs.core.chunk_rest.call(null,seq__39388__$1);
var G__39416 = c__19529__auto__;
var G__39417 = cljs.core.count.call(null,c__19529__auto__);
var G__39418 = (0);
seq__39388 = G__39415;
chunk__39389 = G__39416;
count__39390 = G__39417;
i__39391 = G__39418;
continue;
} else {
var m = cljs.core.first.call(null,seq__39388__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__39420 = cljs.core.next.call(null,seq__39388__$1);
var G__39421 = null;
var G__39422 = (0);
var G__39423 = (0);
seq__39388 = G__39420;
chunk__39389 = G__39421;
count__39390 = G__39422;
i__39391 = G__39423;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq39371){
var G__39372 = cljs.core.first.call(null,seq39371);
var seq39371__$1 = cljs.core.next.call(null,seq39371);
var G__39373 = cljs.core.first.call(null,seq39371__$1);
var seq39371__$2 = cljs.core.next.call(null,seq39371__$1);
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__39372,G__39373,seq39371__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var args39426 = [];
var len__19784__auto___39441 = arguments.length;
var i__19785__auto___39443 = (0);
while(true){
if((i__19785__auto___39443 < len__19784__auto___39441)){
args39426.push((arguments[i__19785__auto___39443]));

var G__39444 = (i__19785__auto___39443 + (1));
i__19785__auto___39443 = G__39444;
continue;
} else {
}
break;
}

var G__39431 = args39426.length;
switch (G__39431) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39426.slice((2)),(0)));
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

var seq__39433 = cljs.core.seq.call(null,more);
var chunk__39434 = null;
var count__39435 = (0);
var i__39436 = (0);
while(true){
if((i__39436 < count__39435)){
var m = cljs.core._nth.call(null,chunk__39434,i__39436);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__39449 = seq__39433;
var G__39450 = chunk__39434;
var G__39451 = count__39435;
var G__39452 = (i__39436 + (1));
seq__39433 = G__39449;
chunk__39434 = G__39450;
count__39435 = G__39451;
i__39436 = G__39452;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39433);
if(temp__4657__auto__){
var seq__39433__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39433__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39433__$1);
var G__39454 = cljs.core.chunk_rest.call(null,seq__39433__$1);
var G__39455 = c__19529__auto__;
var G__39456 = cljs.core.count.call(null,c__19529__auto__);
var G__39457 = (0);
seq__39433 = G__39454;
chunk__39434 = G__39455;
count__39435 = G__39456;
i__39436 = G__39457;
continue;
} else {
var m = cljs.core.first.call(null,seq__39433__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__39458 = cljs.core.next.call(null,seq__39433__$1);
var G__39459 = null;
var G__39460 = (0);
var G__39461 = (0);
seq__39433 = G__39458;
chunk__39434 = G__39459;
count__39435 = G__39460;
i__39436 = G__39461;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq39427){
var G__39428 = cljs.core.first.call(null,seq39427);
var seq39427__$1 = cljs.core.next.call(null,seq39427);
var G__39429 = cljs.core.first.call(null,seq39427__$1);
var seq39427__$2 = cljs.core.next.call(null,seq39427__$1);
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__39428,G__39429,seq39427__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var args39487 = [];
var len__19784__auto___39501 = arguments.length;
var i__19785__auto___39502 = (0);
while(true){
if((i__19785__auto___39502 < len__19784__auto___39501)){
args39487.push((arguments[i__19785__auto___39502]));

var G__39503 = (i__19785__auto___39502 + (1));
i__19785__auto___39502 = G__39503;
continue;
} else {
}
break;
}

var G__39496 = args39487.length;
switch (G__39496) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39487.slice((2)),(0)));
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

var seq__39497 = cljs.core.seq.call(null,more);
var chunk__39498 = null;
var count__39499 = (0);
var i__39500 = (0);
while(true){
if((i__39500 < count__39499)){
var m = cljs.core._nth.call(null,chunk__39498,i__39500);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__39517 = seq__39497;
var G__39518 = chunk__39498;
var G__39519 = count__39499;
var G__39520 = (i__39500 + (1));
seq__39497 = G__39517;
chunk__39498 = G__39518;
count__39499 = G__39519;
i__39500 = G__39520;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39497);
if(temp__4657__auto__){
var seq__39497__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39497__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39497__$1);
var G__39527 = cljs.core.chunk_rest.call(null,seq__39497__$1);
var G__39528 = c__19529__auto__;
var G__39529 = cljs.core.count.call(null,c__19529__auto__);
var G__39530 = (0);
seq__39497 = G__39527;
chunk__39498 = G__39528;
count__39499 = G__39529;
i__39500 = G__39530;
continue;
} else {
var m = cljs.core.first.call(null,seq__39497__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__39531 = cljs.core.next.call(null,seq__39497__$1);
var G__39532 = null;
var G__39533 = (0);
var G__39534 = (0);
seq__39497 = G__39531;
chunk__39498 = G__39532;
count__39499 = G__39533;
i__39500 = G__39534;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq39488){
var G__39489 = cljs.core.first.call(null,seq39488);
var seq39488__$1 = cljs.core.next.call(null,seq39488);
var G__39490 = cljs.core.first.call(null,seq39488__$1);
var seq39488__$2 = cljs.core.next.call(null,seq39488__$1);
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__39489,G__39490,seq39488__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var args39535 = [];
var len__19784__auto___39547 = arguments.length;
var i__19785__auto___39548 = (0);
while(true){
if((i__19785__auto___39548 < len__19784__auto___39547)){
args39535.push((arguments[i__19785__auto___39548]));

var G__39549 = (i__19785__auto___39548 + (1));
i__19785__auto___39548 = G__39549;
continue;
} else {
}
break;
}

var G__39543 = args39535.length;
switch (G__39543) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39535.slice((2)),(0)));
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

clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq39537){
var G__39538 = cljs.core.first.call(null,seq39537);
var seq39537__$1 = cljs.core.next.call(null,seq39537);
var G__39539 = cljs.core.first.call(null,seq39537__$1);
var seq39537__$2 = cljs.core.next.call(null,seq39537__$1);
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic(G__39538,G__39539,seq39537__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var args39552 = [];
var len__19784__auto___39561 = arguments.length;
var i__19785__auto___39562 = (0);
while(true){
if((i__19785__auto___39562 < len__19784__auto___39561)){
args39552.push((arguments[i__19785__auto___39562]));

var G__39565 = (i__19785__auto___39562 + (1));
i__19785__auto___39562 = G__39565;
continue;
} else {
}
break;
}

var G__39557 = args39552.length;
switch (G__39557) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args39552.slice((2)),(0)));
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

clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq39553){
var G__39554 = cljs.core.first.call(null,seq39553);
var seq39553__$1 = cljs.core.next.call(null,seq39553);
var G__39555 = cljs.core.first.call(null,seq39553__$1);
var seq39553__$2 = cljs.core.next.call(null,seq39553__$1);
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic(G__39554,G__39555,seq39553__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=operators.js.map