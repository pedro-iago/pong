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
var seq__23985_24026 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23986_24027 = null;
var count__23987_24028 = (0);
var i__23988_24029 = (0);
while(true){
if((i__23988_24029 < count__23987_24028)){
var f_24034 = cljs.core._nth.call(null,chunk__23986_24027,i__23988_24029);
cljs.core.println.call(null,"  ",f_24034);

var G__24037 = seq__23985_24026;
var G__24038 = chunk__23986_24027;
var G__24039 = count__23987_24028;
var G__24040 = (i__23988_24029 + (1));
seq__23985_24026 = G__24037;
chunk__23986_24027 = G__24038;
count__23987_24028 = G__24039;
i__23988_24029 = G__24040;
continue;
} else {
var temp__4657__auto___24043 = cljs.core.seq.call(null,seq__23985_24026);
if(temp__4657__auto___24043){
var seq__23985_24045__$1 = temp__4657__auto___24043;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23985_24045__$1)){
var c__18591__auto___24047 = cljs.core.chunk_first.call(null,seq__23985_24045__$1);
var G__24049 = cljs.core.chunk_rest.call(null,seq__23985_24045__$1);
var G__24050 = c__18591__auto___24047;
var G__24051 = cljs.core.count.call(null,c__18591__auto___24047);
var G__24052 = (0);
seq__23985_24026 = G__24049;
chunk__23986_24027 = G__24050;
count__23987_24028 = G__24051;
i__23988_24029 = G__24052;
continue;
} else {
var f_24056 = cljs.core.first.call(null,seq__23985_24045__$1);
cljs.core.println.call(null,"  ",f_24056);

var G__24057 = cljs.core.next.call(null,seq__23985_24045__$1);
var G__24058 = null;
var G__24060 = (0);
var G__24061 = (0);
seq__23985_24026 = G__24057;
chunk__23986_24027 = G__24058;
count__23987_24028 = G__24060;
i__23988_24029 = G__24061;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24066 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__17788__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24066);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24066)))?cljs.core.second.call(null,arglists_24066):arglists_24066));
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
var seq__23997 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23998 = null;
var count__23999 = (0);
var i__24000 = (0);
while(true){
if((i__24000 < count__23999)){
var vec__24002 = cljs.core._nth.call(null,chunk__23998,i__24000);
var name = cljs.core.nth.call(null,vec__24002,(0),null);
var map__24003 = cljs.core.nth.call(null,vec__24002,(1),null);
var map__24003__$1 = ((((!((map__24003 == null)))?((((map__24003.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24003.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24003):map__24003);
var doc = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24003__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24095 = seq__23997;
var G__24096 = chunk__23998;
var G__24097 = count__23999;
var G__24098 = (i__24000 + (1));
seq__23997 = G__24095;
chunk__23998 = G__24096;
count__23999 = G__24097;
i__24000 = G__24098;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__23997);
if(temp__4657__auto__){
var seq__23997__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23997__$1)){
var c__18591__auto__ = cljs.core.chunk_first.call(null,seq__23997__$1);
var G__24104 = cljs.core.chunk_rest.call(null,seq__23997__$1);
var G__24105 = c__18591__auto__;
var G__24106 = cljs.core.count.call(null,c__18591__auto__);
var G__24107 = (0);
seq__23997 = G__24104;
chunk__23998 = G__24105;
count__23999 = G__24106;
i__24000 = G__24107;
continue;
} else {
var vec__24010 = cljs.core.first.call(null,seq__23997__$1);
var name = cljs.core.nth.call(null,vec__24010,(0),null);
var map__24011 = cljs.core.nth.call(null,vec__24010,(1),null);
var map__24011__$1 = ((((!((map__24011 == null)))?((((map__24011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24011):map__24011);
var doc = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24011__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24118 = cljs.core.next.call(null,seq__23997__$1);
var G__24119 = null;
var G__24120 = (0);
var G__24121 = (0);
seq__23997 = G__24118;
chunk__23998 = G__24119;
count__23999 = G__24120;
i__24000 = G__24121;
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