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
var args43237 = [];
var len__19784__auto___43243 = arguments.length;
var i__19785__auto___43244 = (0);
while(true){
if((i__19785__auto___43244 < len__19784__auto___43243)){
args43237.push((arguments[i__19785__auto___43244]));

var G__43245 = (i__19785__auto___43244 + (1));
i__19785__auto___43244 = G__43245;
continue;
} else {
}
break;
}

var G__43242 = args43237.length;
switch (G__43242) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43237.slice((2)),(0)));
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

clojure.core.matrix.operators._PLUS_.cljs$lang$applyTo = (function (seq43238){
var G__43239 = cljs.core.first.call(null,seq43238);
var seq43238__$1 = cljs.core.next.call(null,seq43238);
var G__43240 = cljs.core.first.call(null,seq43238__$1);
var seq43238__$2 = cljs.core.next.call(null,seq43238__$1);
return clojure.core.matrix.operators._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__43239,G__43240,seq43238__$2);
});

clojure.core.matrix.operators._PLUS_.cljs$lang$maxFixedArity = (2);
/**
 * Array subtraction operator. Equivalent to clojure.core.matrix/sub.
 */
clojure.core.matrix.operators._ = (function clojure$core$matrix$operators$_(var_args){
var args43247 = [];
var len__19784__auto___43253 = arguments.length;
var i__19785__auto___43254 = (0);
while(true){
if((i__19785__auto___43254 < len__19784__auto___43253)){
args43247.push((arguments[i__19785__auto___43254]));

var G__43255 = (i__19785__auto___43254 + (1));
i__19785__auto___43254 = G__43255;
continue;
} else {
}
break;
}

var G__43252 = args43247.length;
switch (G__43252) {
case 1:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43247.slice((2)),(0)));
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

clojure.core.matrix.operators._.cljs$lang$applyTo = (function (seq43248){
var G__43249 = cljs.core.first.call(null,seq43248);
var seq43248__$1 = cljs.core.next.call(null,seq43248);
var G__43250 = cljs.core.first.call(null,seq43248__$1);
var seq43248__$2 = cljs.core.next.call(null,seq43248__$1);
return clojure.core.matrix.operators._.cljs$core$IFn$_invoke$arity$variadic(G__43249,G__43250,seq43248__$2);
});

clojure.core.matrix.operators._.cljs$lang$maxFixedArity = (2);
/**
 * Element-wise matrix division. Equivalent to clojure.core.matrix/div.
 */
clojure.core.matrix.operators._SLASH_ = (function clojure$core$matrix$operators$_SLASH_(var_args){
var args43257 = [];
var len__19784__auto___43263 = arguments.length;
var i__19785__auto___43264 = (0);
while(true){
if((i__19785__auto___43264 < len__19784__auto___43263)){
args43257.push((arguments[i__19785__auto___43264]));

var G__43265 = (i__19785__auto___43264 + (1));
i__19785__auto___43264 = G__43265;
continue;
} else {
}
break;
}

var G__43262 = args43257.length;
switch (G__43262) {
case 1:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43257.slice((2)),(0)));
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

clojure.core.matrix.operators._SLASH_.cljs$lang$applyTo = (function (seq43258){
var G__43259 = cljs.core.first.call(null,seq43258);
var seq43258__$1 = cljs.core.next.call(null,seq43258);
var G__43260 = cljs.core.first.call(null,seq43258__$1);
var seq43258__$2 = cljs.core.next.call(null,seq43258__$1);
return clojure.core.matrix.operators._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__43259,G__43260,seq43258__$2);
});

clojure.core.matrix.operators._SLASH_.cljs$lang$maxFixedArity = (2);
/**
 * Numerical array comparison. Equivalent to reducing with clojure.core.matrix/equals.
 */
clojure.core.matrix.operators._EQ__EQ_ = (function clojure$core$matrix$operators$_EQ__EQ_(var_args){
var args43267 = [];
var len__19784__auto___43273 = arguments.length;
var i__19785__auto___43274 = (0);
while(true){
if((i__19785__auto___43274 < len__19784__auto___43273)){
args43267.push((arguments[i__19785__auto___43274]));

var G__43275 = (i__19785__auto___43274 + (1));
i__19785__auto___43274 = G__43275;
continue;
} else {
}
break;
}

var G__43272 = args43267.length;
switch (G__43272) {
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
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43267.slice((2)),(0)));
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

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$applyTo = (function (seq43268){
var G__43269 = cljs.core.first.call(null,seq43268);
var seq43268__$1 = cljs.core.next.call(null,seq43268);
var G__43270 = cljs.core.first.call(null,seq43268__$1);
var seq43268__$2 = cljs.core.next.call(null,seq43268__$1);
return clojure.core.matrix.operators._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43269,G__43270,seq43268__$2);
});

clojure.core.matrix.operators._EQ__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix addition operator
 */
clojure.core.matrix.operators._PLUS__EQ_ = (function clojure$core$matrix$operators$_PLUS__EQ_(var_args){
var args43277 = [];
var len__19784__auto___43287 = arguments.length;
var i__19785__auto___43288 = (0);
while(true){
if((i__19785__auto___43288 < len__19784__auto___43287)){
args43277.push((arguments[i__19785__auto___43288]));

var G__43289 = (i__19785__auto___43288 + (1));
i__19785__auto___43288 = G__43289;
continue;
} else {
}
break;
}

var G__43282 = args43277.length;
switch (G__43282) {
case 1:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43277.slice((2)),(0)));
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

var seq__43283 = cljs.core.seq.call(null,more);
var chunk__43284 = null;
var count__43285 = (0);
var i__43286 = (0);
while(true){
if((i__43286 < count__43285)){
var m = cljs.core._nth.call(null,chunk__43284,i__43286);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__43291 = seq__43283;
var G__43292 = chunk__43284;
var G__43293 = count__43285;
var G__43294 = (i__43286 + (1));
seq__43283 = G__43291;
chunk__43284 = G__43292;
count__43285 = G__43293;
i__43286 = G__43294;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43283);
if(temp__4657__auto__){
var seq__43283__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43283__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__43283__$1);
var G__43295 = cljs.core.chunk_rest.call(null,seq__43283__$1);
var G__43296 = c__19529__auto__;
var G__43297 = cljs.core.count.call(null,c__19529__auto__);
var G__43298 = (0);
seq__43283 = G__43295;
chunk__43284 = G__43296;
count__43285 = G__43297;
i__43286 = G__43298;
continue;
} else {
var m = cljs.core.first.call(null,seq__43283__$1);
clojure.core.matrix.add_BANG_.call(null,a,m);

var G__43299 = cljs.core.next.call(null,seq__43283__$1);
var G__43300 = null;
var G__43301 = (0);
var G__43302 = (0);
seq__43283 = G__43299;
chunk__43284 = G__43300;
count__43285 = G__43301;
i__43286 = G__43302;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$applyTo = (function (seq43278){
var G__43279 = cljs.core.first.call(null,seq43278);
var seq43278__$1 = cljs.core.next.call(null,seq43278);
var G__43280 = cljs.core.first.call(null,seq43278__$1);
var seq43278__$2 = cljs.core.next.call(null,seq43278__$1);
return clojure.core.matrix.operators._PLUS__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43279,G__43280,seq43278__$2);
});

clojure.core.matrix.operators._PLUS__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix subtraction operator
 */
clojure.core.matrix.operators.__EQ_ = (function clojure$core$matrix$operators$__EQ_(var_args){
var args43303 = [];
var len__19784__auto___43313 = arguments.length;
var i__19785__auto___43314 = (0);
while(true){
if((i__19785__auto___43314 < len__19784__auto___43313)){
args43303.push((arguments[i__19785__auto___43314]));

var G__43315 = (i__19785__auto___43314 + (1));
i__19785__auto___43314 = G__43315;
continue;
} else {
}
break;
}

var G__43308 = args43303.length;
switch (G__43308) {
case 1:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43303.slice((2)),(0)));
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

var seq__43309 = cljs.core.seq.call(null,more);
var chunk__43310 = null;
var count__43311 = (0);
var i__43312 = (0);
while(true){
if((i__43312 < count__43311)){
var m = cljs.core._nth.call(null,chunk__43310,i__43312);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__43317 = seq__43309;
var G__43318 = chunk__43310;
var G__43319 = count__43311;
var G__43320 = (i__43312 + (1));
seq__43309 = G__43317;
chunk__43310 = G__43318;
count__43311 = G__43319;
i__43312 = G__43320;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43309);
if(temp__4657__auto__){
var seq__43309__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43309__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__43309__$1);
var G__43321 = cljs.core.chunk_rest.call(null,seq__43309__$1);
var G__43322 = c__19529__auto__;
var G__43323 = cljs.core.count.call(null,c__19529__auto__);
var G__43324 = (0);
seq__43309 = G__43321;
chunk__43310 = G__43322;
count__43311 = G__43323;
i__43312 = G__43324;
continue;
} else {
var m = cljs.core.first.call(null,seq__43309__$1);
clojure.core.matrix.sub_BANG_.call(null,a,m);

var G__43325 = cljs.core.next.call(null,seq__43309__$1);
var G__43326 = null;
var G__43327 = (0);
var G__43328 = (0);
seq__43309 = G__43325;
chunk__43310 = G__43326;
count__43311 = G__43327;
i__43312 = G__43328;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.__EQ_.cljs$lang$applyTo = (function (seq43304){
var G__43305 = cljs.core.first.call(null,seq43304);
var seq43304__$1 = cljs.core.next.call(null,seq43304);
var G__43306 = cljs.core.first.call(null,seq43304__$1);
var seq43304__$2 = cljs.core.next.call(null,seq43304__$1);
return clojure.core.matrix.operators.__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43305,G__43306,seq43304__$2);
});

clojure.core.matrix.operators.__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix multiplication operator
 */
clojure.core.matrix.operators._STAR__EQ_ = (function clojure$core$matrix$operators$_STAR__EQ_(var_args){
var args43329 = [];
var len__19784__auto___43339 = arguments.length;
var i__19785__auto___43340 = (0);
while(true){
if((i__19785__auto___43340 < len__19784__auto___43339)){
args43329.push((arguments[i__19785__auto___43340]));

var G__43341 = (i__19785__auto___43340 + (1));
i__19785__auto___43340 = G__43341;
continue;
} else {
}
break;
}

var G__43334 = args43329.length;
switch (G__43334) {
case 1:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43329.slice((2)),(0)));
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

var seq__43335 = cljs.core.seq.call(null,more);
var chunk__43336 = null;
var count__43337 = (0);
var i__43338 = (0);
while(true){
if((i__43338 < count__43337)){
var m = cljs.core._nth.call(null,chunk__43336,i__43338);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__43343 = seq__43335;
var G__43344 = chunk__43336;
var G__43345 = count__43337;
var G__43346 = (i__43338 + (1));
seq__43335 = G__43343;
chunk__43336 = G__43344;
count__43337 = G__43345;
i__43338 = G__43346;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43335);
if(temp__4657__auto__){
var seq__43335__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43335__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__43335__$1);
var G__43347 = cljs.core.chunk_rest.call(null,seq__43335__$1);
var G__43348 = c__19529__auto__;
var G__43349 = cljs.core.count.call(null,c__19529__auto__);
var G__43350 = (0);
seq__43335 = G__43347;
chunk__43336 = G__43348;
count__43337 = G__43349;
i__43338 = G__43350;
continue;
} else {
var m = cljs.core.first.call(null,seq__43335__$1);
clojure.core.matrix.mul_BANG_.call(null,a,m);

var G__43351 = cljs.core.next.call(null,seq__43335__$1);
var G__43352 = null;
var G__43353 = (0);
var G__43354 = (0);
seq__43335 = G__43351;
chunk__43336 = G__43352;
count__43337 = G__43353;
i__43338 = G__43354;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$applyTo = (function (seq43330){
var G__43331 = cljs.core.first.call(null,seq43330);
var seq43330__$1 = cljs.core.next.call(null,seq43330);
var G__43332 = cljs.core.first.call(null,seq43330__$1);
var seq43330__$2 = cljs.core.next.call(null,seq43330__$1);
return clojure.core.matrix.operators._STAR__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43331,G__43332,seq43330__$2);
});

clojure.core.matrix.operators._STAR__EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Inplace matrix division operator
 */
clojure.core.matrix.operators.div_EQ_ = (function clojure$core$matrix$operators$div_EQ_(var_args){
var args43355 = [];
var len__19784__auto___43365 = arguments.length;
var i__19785__auto___43366 = (0);
while(true){
if((i__19785__auto___43366 < len__19784__auto___43365)){
args43355.push((arguments[i__19785__auto___43366]));

var G__43367 = (i__19785__auto___43366 + (1));
i__19785__auto___43366 = G__43367;
continue;
} else {
}
break;
}

var G__43360 = args43355.length;
switch (G__43360) {
case 1:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43355.slice((2)),(0)));
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

var seq__43361 = cljs.core.seq.call(null,more);
var chunk__43362 = null;
var count__43363 = (0);
var i__43364 = (0);
while(true){
if((i__43364 < count__43363)){
var m = cljs.core._nth.call(null,chunk__43362,i__43364);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__43369 = seq__43361;
var G__43370 = chunk__43362;
var G__43371 = count__43363;
var G__43372 = (i__43364 + (1));
seq__43361 = G__43369;
chunk__43362 = G__43370;
count__43363 = G__43371;
i__43364 = G__43372;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43361);
if(temp__4657__auto__){
var seq__43361__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43361__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__43361__$1);
var G__43373 = cljs.core.chunk_rest.call(null,seq__43361__$1);
var G__43374 = c__19529__auto__;
var G__43375 = cljs.core.count.call(null,c__19529__auto__);
var G__43376 = (0);
seq__43361 = G__43373;
chunk__43362 = G__43374;
count__43363 = G__43375;
i__43364 = G__43376;
continue;
} else {
var m = cljs.core.first.call(null,seq__43361__$1);
clojure.core.matrix.div_BANG_.call(null,a,m);

var G__43377 = cljs.core.next.call(null,seq__43361__$1);
var G__43378 = null;
var G__43379 = (0);
var G__43380 = (0);
seq__43361 = G__43377;
chunk__43362 = G__43378;
count__43363 = G__43379;
i__43364 = G__43380;
continue;
}
} else {
return null;
}
}
break;
}
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$applyTo = (function (seq43356){
var G__43357 = cljs.core.first.call(null,seq43356);
var seq43356__$1 = cljs.core.next.call(null,seq43356);
var G__43358 = cljs.core.first.call(null,seq43356__$1);
var seq43356__$2 = cljs.core.next.call(null,seq43356__$1);
return clojure.core.matrix.operators.div_EQ_.cljs$core$IFn$_invoke$arity$variadic(G__43357,G__43358,seq43356__$2);
});

clojure.core.matrix.operators.div_EQ_.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise min of arrays
 */
clojure.core.matrix.operators.min = (function clojure$core$matrix$operators$min(var_args){
var args43381 = [];
var len__19784__auto___43387 = arguments.length;
var i__19785__auto___43388 = (0);
while(true){
if((i__19785__auto___43388 < len__19784__auto___43387)){
args43381.push((arguments[i__19785__auto___43388]));

var G__43389 = (i__19785__auto___43388 + (1));
i__19785__auto___43388 = G__43389;
continue;
} else {
}
break;
}

var G__43386 = args43381.length;
switch (G__43386) {
case 1:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43381.slice((2)),(0)));
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

clojure.core.matrix.operators.min.cljs$lang$applyTo = (function (seq43382){
var G__43383 = cljs.core.first.call(null,seq43382);
var seq43382__$1 = cljs.core.next.call(null,seq43382);
var G__43384 = cljs.core.first.call(null,seq43382__$1);
var seq43382__$2 = cljs.core.next.call(null,seq43382__$1);
return clojure.core.matrix.operators.min.cljs$core$IFn$_invoke$arity$variadic(G__43383,G__43384,seq43382__$2);
});

clojure.core.matrix.operators.min.cljs$lang$maxFixedArity = (2);
/**
 * Computes the element-wise max of arrays
 */
clojure.core.matrix.operators.max = (function clojure$core$matrix$operators$max(var_args){
var args43391 = [];
var len__19784__auto___43397 = arguments.length;
var i__19785__auto___43398 = (0);
while(true){
if((i__19785__auto___43398 < len__19784__auto___43397)){
args43391.push((arguments[i__19785__auto___43398]));

var G__43399 = (i__19785__auto___43398 + (1));
i__19785__auto___43398 = G__43399;
continue;
} else {
}
break;
}

var G__43396 = args43391.length;
switch (G__43396) {
case 1:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__19803__auto__ = (new cljs.core.IndexedSeq(args43391.slice((2)),(0)));
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

clojure.core.matrix.operators.max.cljs$lang$applyTo = (function (seq43392){
var G__43393 = cljs.core.first.call(null,seq43392);
var seq43392__$1 = cljs.core.next.call(null,seq43392);
var G__43394 = cljs.core.first.call(null,seq43392__$1);
var seq43392__$2 = cljs.core.next.call(null,seq43392__$1);
return clojure.core.matrix.operators.max.cljs$core$IFn$_invoke$arity$variadic(G__43393,G__43394,seq43392__$2);
});

clojure.core.matrix.operators.max.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=operators.js.map