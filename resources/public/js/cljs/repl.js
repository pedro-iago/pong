// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39293_39325 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39294_39326 = null;
var count__39295_39327 = (0);
var i__39296_39328 = (0);
while(true){
if((i__39296_39328 < count__39295_39327)){
var f_39335 = cljs.core._nth.call(null,chunk__39294_39326,i__39296_39328);
cljs.core.println.call(null,"  ",f_39335);

var G__39338 = seq__39293_39325;
var G__39339 = chunk__39294_39326;
var G__39340 = count__39295_39327;
var G__39341 = (i__39296_39328 + (1));
seq__39293_39325 = G__39338;
chunk__39294_39326 = G__39339;
count__39295_39327 = G__39340;
i__39296_39328 = G__39341;
continue;
} else {
var temp__4657__auto___39346 = cljs.core.seq.call(null,seq__39293_39325);
if(temp__4657__auto___39346){
var seq__39293_39349__$1 = temp__4657__auto___39346;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39293_39349__$1)){
var c__19529__auto___39355 = cljs.core.chunk_first.call(null,seq__39293_39349__$1);
var G__39356 = cljs.core.chunk_rest.call(null,seq__39293_39349__$1);
var G__39357 = c__19529__auto___39355;
var G__39358 = cljs.core.count.call(null,c__19529__auto___39355);
var G__39359 = (0);
seq__39293_39325 = G__39356;
chunk__39294_39326 = G__39357;
count__39295_39327 = G__39358;
i__39296_39328 = G__39359;
continue;
} else {
var f_39360 = cljs.core.first.call(null,seq__39293_39349__$1);
cljs.core.println.call(null,"  ",f_39360);

var G__39361 = cljs.core.next.call(null,seq__39293_39349__$1);
var G__39362 = null;
var G__39363 = (0);
var G__39364 = (0);
seq__39293_39325 = G__39361;
chunk__39294_39326 = G__39362;
count__39295_39327 = G__39363;
i__39296_39328 = G__39364;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_39369 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18726__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_39369);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_39369)))?cljs.core.second.call(null,arglists_39369):arglists_39369));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__39299 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__39300 = null;
var count__39301 = (0);
var i__39302 = (0);
while(true){
if((i__39302 < count__39301)){
var vec__39306 = cljs.core._nth.call(null,chunk__39300,i__39302);
var name = cljs.core.nth.call(null,vec__39306,(0),null);
var map__39307 = cljs.core.nth.call(null,vec__39306,(1),null);
var map__39307__$1 = ((((!((map__39307 == null)))?((((map__39307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39307):map__39307);
var doc = cljs.core.get.call(null,map__39307__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39307__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39392 = seq__39299;
var G__39393 = chunk__39300;
var G__39394 = count__39301;
var G__39395 = (i__39302 + (1));
seq__39299 = G__39392;
chunk__39300 = G__39393;
count__39301 = G__39394;
i__39302 = G__39395;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39299);
if(temp__4657__auto__){
var seq__39299__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39299__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39299__$1);
var G__39399 = cljs.core.chunk_rest.call(null,seq__39299__$1);
var G__39400 = c__19529__auto__;
var G__39401 = cljs.core.count.call(null,c__19529__auto__);
var G__39402 = (0);
seq__39299 = G__39399;
chunk__39300 = G__39400;
count__39301 = G__39401;
i__39302 = G__39402;
continue;
} else {
var vec__39309 = cljs.core.first.call(null,seq__39299__$1);
var name = cljs.core.nth.call(null,vec__39309,(0),null);
var map__39310 = cljs.core.nth.call(null,vec__39309,(1),null);
var map__39310__$1 = ((((!((map__39310 == null)))?((((map__39310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39310):map__39310);
var doc = cljs.core.get.call(null,map__39310__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__39310__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__39410 = cljs.core.next.call(null,seq__39299__$1);
var G__39411 = null;
var G__39412 = (0);
var G__39413 = (0);
seq__39299 = G__39410;
chunk__39300 = G__39411;
count__39301 = G__39412;
i__39302 = G__39413;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map