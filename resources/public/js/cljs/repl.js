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
var seq__35371_35385 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35372_35386 = null;
var count__35373_35387 = (0);
var i__35374_35388 = (0);
while(true){
if((i__35374_35388 < count__35373_35387)){
var f_35389 = cljs.core._nth.call(null,chunk__35372_35386,i__35374_35388);
cljs.core.println.call(null,"  ",f_35389);

var G__35390 = seq__35371_35385;
var G__35391 = chunk__35372_35386;
var G__35392 = count__35373_35387;
var G__35393 = (i__35374_35388 + (1));
seq__35371_35385 = G__35390;
chunk__35372_35386 = G__35391;
count__35373_35387 = G__35392;
i__35374_35388 = G__35393;
continue;
} else {
var temp__4657__auto___35394 = cljs.core.seq.call(null,seq__35371_35385);
if(temp__4657__auto___35394){
var seq__35371_35395__$1 = temp__4657__auto___35394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35371_35395__$1)){
var c__19529__auto___35396 = cljs.core.chunk_first.call(null,seq__35371_35395__$1);
var G__35397 = cljs.core.chunk_rest.call(null,seq__35371_35395__$1);
var G__35398 = c__19529__auto___35396;
var G__35399 = cljs.core.count.call(null,c__19529__auto___35396);
var G__35400 = (0);
seq__35371_35385 = G__35397;
chunk__35372_35386 = G__35398;
count__35373_35387 = G__35399;
i__35374_35388 = G__35400;
continue;
} else {
var f_35401 = cljs.core.first.call(null,seq__35371_35395__$1);
cljs.core.println.call(null,"  ",f_35401);

var G__35402 = cljs.core.next.call(null,seq__35371_35395__$1);
var G__35403 = null;
var G__35404 = (0);
var G__35405 = (0);
seq__35371_35385 = G__35402;
chunk__35372_35386 = G__35403;
count__35373_35387 = G__35404;
i__35374_35388 = G__35405;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35406 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18726__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35406);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35406)))?cljs.core.second.call(null,arglists_35406):arglists_35406));
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
var seq__35375 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35376 = null;
var count__35377 = (0);
var i__35378 = (0);
while(true){
if((i__35378 < count__35377)){
var vec__35379 = cljs.core._nth.call(null,chunk__35376,i__35378);
var name = cljs.core.nth.call(null,vec__35379,(0),null);
var map__35380 = cljs.core.nth.call(null,vec__35379,(1),null);
var map__35380__$1 = ((((!((map__35380 == null)))?((((map__35380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35380):map__35380);
var doc = cljs.core.get.call(null,map__35380__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35380__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35410 = seq__35375;
var G__35411 = chunk__35376;
var G__35412 = count__35377;
var G__35413 = (i__35378 + (1));
seq__35375 = G__35410;
chunk__35376 = G__35411;
count__35377 = G__35412;
i__35378 = G__35413;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35375);
if(temp__4657__auto__){
var seq__35375__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35375__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__35375__$1);
var G__35418 = cljs.core.chunk_rest.call(null,seq__35375__$1);
var G__35419 = c__19529__auto__;
var G__35420 = cljs.core.count.call(null,c__19529__auto__);
var G__35421 = (0);
seq__35375 = G__35418;
chunk__35376 = G__35419;
count__35377 = G__35420;
i__35378 = G__35421;
continue;
} else {
var vec__35382 = cljs.core.first.call(null,seq__35375__$1);
var name = cljs.core.nth.call(null,vec__35382,(0),null);
var map__35383 = cljs.core.nth.call(null,vec__35382,(1),null);
var map__35383__$1 = ((((!((map__35383 == null)))?((((map__35383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35383):map__35383);
var doc = cljs.core.get.call(null,map__35383__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__35383__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__35424 = cljs.core.next.call(null,seq__35375__$1);
var G__35425 = null;
var G__35426 = (0);
var G__35427 = (0);
seq__35375 = G__35424;
chunk__35376 = G__35425;
count__35377 = G__35426;
i__35378 = G__35427;
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