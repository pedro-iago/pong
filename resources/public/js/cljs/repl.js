// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
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
var seq__26469_26483 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26470_26484 = null;
var count__26471_26485 = (0);
var i__26472_26486 = (0);
while(true){
if((i__26472_26486 < count__26471_26485)){
var f_26487 = cljs.core._nth.call(null,chunk__26470_26484,i__26472_26486);
cljs.core.println.call(null,"  ",f_26487);

var G__26488 = seq__26469_26483;
var G__26489 = chunk__26470_26484;
var G__26490 = count__26471_26485;
var G__26491 = (i__26472_26486 + (1));
seq__26469_26483 = G__26488;
chunk__26470_26484 = G__26489;
count__26471_26485 = G__26490;
i__26472_26486 = G__26491;
continue;
} else {
var temp__4425__auto___26492 = cljs.core.seq.call(null,seq__26469_26483);
if(temp__4425__auto___26492){
var seq__26469_26493__$1 = temp__4425__auto___26492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26469_26493__$1)){
var c__17574__auto___26494 = cljs.core.chunk_first.call(null,seq__26469_26493__$1);
var G__26495 = cljs.core.chunk_rest.call(null,seq__26469_26493__$1);
var G__26496 = c__17574__auto___26494;
var G__26497 = cljs.core.count.call(null,c__17574__auto___26494);
var G__26498 = (0);
seq__26469_26483 = G__26495;
chunk__26470_26484 = G__26496;
count__26471_26485 = G__26497;
i__26472_26486 = G__26498;
continue;
} else {
var f_26499 = cljs.core.first.call(null,seq__26469_26493__$1);
cljs.core.println.call(null,"  ",f_26499);

var G__26500 = cljs.core.next.call(null,seq__26469_26493__$1);
var G__26501 = null;
var G__26502 = (0);
var G__26503 = (0);
seq__26469_26483 = G__26500;
chunk__26470_26484 = G__26501;
count__26471_26485 = G__26502;
i__26472_26486 = G__26503;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26504 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26504);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26504)))?cljs.core.second.call(null,arglists_26504):arglists_26504));
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
var seq__26473 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26474 = null;
var count__26475 = (0);
var i__26476 = (0);
while(true){
if((i__26476 < count__26475)){
var vec__26477 = cljs.core._nth.call(null,chunk__26474,i__26476);
var name = cljs.core.nth.call(null,vec__26477,(0),null);
var map__26478 = cljs.core.nth.call(null,vec__26477,(1),null);
var map__26478__$1 = ((((!((map__26478 == null)))?((((map__26478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26478):map__26478);
var doc = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26478__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26505 = seq__26473;
var G__26506 = chunk__26474;
var G__26507 = count__26475;
var G__26508 = (i__26476 + (1));
seq__26473 = G__26505;
chunk__26474 = G__26506;
count__26475 = G__26507;
i__26476 = G__26508;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26473);
if(temp__4425__auto__){
var seq__26473__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26473__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26473__$1);
var G__26509 = cljs.core.chunk_rest.call(null,seq__26473__$1);
var G__26510 = c__17574__auto__;
var G__26511 = cljs.core.count.call(null,c__17574__auto__);
var G__26512 = (0);
seq__26473 = G__26509;
chunk__26474 = G__26510;
count__26475 = G__26511;
i__26476 = G__26512;
continue;
} else {
var vec__26480 = cljs.core.first.call(null,seq__26473__$1);
var name = cljs.core.nth.call(null,vec__26480,(0),null);
var map__26481 = cljs.core.nth.call(null,vec__26480,(1),null);
var map__26481__$1 = ((((!((map__26481 == null)))?((((map__26481.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26481.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26481):map__26481);
var doc = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26481__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26513 = cljs.core.next.call(null,seq__26473__$1);
var G__26514 = null;
var G__26515 = (0);
var G__26516 = (0);
seq__26473 = G__26513;
chunk__26474 = G__26514;
count__26475 = G__26515;
i__26476 = G__26516;
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