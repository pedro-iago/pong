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
var seq__38815_38832 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38816_38833 = null;
var count__38817_38834 = (0);
var i__38818_38835 = (0);
while(true){
if((i__38818_38835 < count__38817_38834)){
var f_38836 = cljs.core._nth.call(null,chunk__38816_38833,i__38818_38835);
cljs.core.println.call(null,"  ",f_38836);

var G__38838 = seq__38815_38832;
var G__38839 = chunk__38816_38833;
var G__38840 = count__38817_38834;
var G__38841 = (i__38818_38835 + (1));
seq__38815_38832 = G__38838;
chunk__38816_38833 = G__38839;
count__38817_38834 = G__38840;
i__38818_38835 = G__38841;
continue;
} else {
var temp__4657__auto___38842 = cljs.core.seq.call(null,seq__38815_38832);
if(temp__4657__auto___38842){
var seq__38815_38843__$1 = temp__4657__auto___38842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38815_38843__$1)){
var c__19529__auto___38844 = cljs.core.chunk_first.call(null,seq__38815_38843__$1);
var G__38845 = cljs.core.chunk_rest.call(null,seq__38815_38843__$1);
var G__38846 = c__19529__auto___38844;
var G__38847 = cljs.core.count.call(null,c__19529__auto___38844);
var G__38848 = (0);
seq__38815_38832 = G__38845;
chunk__38816_38833 = G__38846;
count__38817_38834 = G__38847;
i__38818_38835 = G__38848;
continue;
} else {
var f_38851 = cljs.core.first.call(null,seq__38815_38843__$1);
cljs.core.println.call(null,"  ",f_38851);

var G__38853 = cljs.core.next.call(null,seq__38815_38843__$1);
var G__38854 = null;
var G__38855 = (0);
var G__38856 = (0);
seq__38815_38832 = G__38853;
chunk__38816_38833 = G__38854;
count__38817_38834 = G__38855;
i__38818_38835 = G__38856;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38857 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18726__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38857);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38857)))?cljs.core.second.call(null,arglists_38857):arglists_38857));
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
var seq__38820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38821 = null;
var count__38822 = (0);
var i__38823 = (0);
while(true){
if((i__38823 < count__38822)){
var vec__38824 = cljs.core._nth.call(null,chunk__38821,i__38823);
var name = cljs.core.nth.call(null,vec__38824,(0),null);
var map__38825 = cljs.core.nth.call(null,vec__38824,(1),null);
var map__38825__$1 = ((((!((map__38825 == null)))?((((map__38825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38825):map__38825);
var doc = cljs.core.get.call(null,map__38825__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38825__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38873 = seq__38820;
var G__38874 = chunk__38821;
var G__38875 = count__38822;
var G__38876 = (i__38823 + (1));
seq__38820 = G__38873;
chunk__38821 = G__38874;
count__38822 = G__38875;
i__38823 = G__38876;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38820);
if(temp__4657__auto__){
var seq__38820__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38820__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__38820__$1);
var G__38878 = cljs.core.chunk_rest.call(null,seq__38820__$1);
var G__38879 = c__19529__auto__;
var G__38880 = cljs.core.count.call(null,c__19529__auto__);
var G__38881 = (0);
seq__38820 = G__38878;
chunk__38821 = G__38879;
count__38822 = G__38880;
i__38823 = G__38881;
continue;
} else {
var vec__38828 = cljs.core.first.call(null,seq__38820__$1);
var name = cljs.core.nth.call(null,vec__38828,(0),null);
var map__38829 = cljs.core.nth.call(null,vec__38828,(1),null);
var map__38829__$1 = ((((!((map__38829 == null)))?((((map__38829.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38829.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38829):map__38829);
var doc = cljs.core.get.call(null,map__38829__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__38829__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__38885 = cljs.core.next.call(null,seq__38820__$1);
var G__38886 = null;
var G__38887 = (0);
var G__38888 = (0);
seq__38820 = G__38885;
chunk__38821 = G__38886;
count__38822 = G__38887;
i__38823 = G__38888;
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