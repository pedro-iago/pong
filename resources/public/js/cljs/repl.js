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
var seq__40615_40648 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40616_40649 = null;
var count__40617_40650 = (0);
var i__40618_40651 = (0);
while(true){
if((i__40618_40651 < count__40617_40650)){
var f_40653 = cljs.core._nth.call(null,chunk__40616_40649,i__40618_40651);
cljs.core.println.call(null,"  ",f_40653);

var G__40655 = seq__40615_40648;
var G__40656 = chunk__40616_40649;
var G__40657 = count__40617_40650;
var G__40658 = (i__40618_40651 + (1));
seq__40615_40648 = G__40655;
chunk__40616_40649 = G__40656;
count__40617_40650 = G__40657;
i__40618_40651 = G__40658;
continue;
} else {
var temp__4657__auto___40659 = cljs.core.seq.call(null,seq__40615_40648);
if(temp__4657__auto___40659){
var seq__40615_40664__$1 = temp__4657__auto___40659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40615_40664__$1)){
var c__19529__auto___40665 = cljs.core.chunk_first.call(null,seq__40615_40664__$1);
var G__40666 = cljs.core.chunk_rest.call(null,seq__40615_40664__$1);
var G__40667 = c__19529__auto___40665;
var G__40668 = cljs.core.count.call(null,c__19529__auto___40665);
var G__40669 = (0);
seq__40615_40648 = G__40666;
chunk__40616_40649 = G__40667;
count__40617_40650 = G__40668;
i__40618_40651 = G__40669;
continue;
} else {
var f_40671 = cljs.core.first.call(null,seq__40615_40664__$1);
cljs.core.println.call(null,"  ",f_40671);

var G__40689 = cljs.core.next.call(null,seq__40615_40664__$1);
var G__40690 = null;
var G__40691 = (0);
var G__40692 = (0);
seq__40615_40648 = G__40689;
chunk__40616_40649 = G__40690;
count__40617_40650 = G__40691;
i__40618_40651 = G__40692;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_40697 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18726__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_40697);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_40697)))?cljs.core.second.call(null,arglists_40697):arglists_40697));
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
var seq__40619 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__40620 = null;
var count__40621 = (0);
var i__40622 = (0);
while(true){
if((i__40622 < count__40621)){
var vec__40623 = cljs.core._nth.call(null,chunk__40620,i__40622);
var name = cljs.core.nth.call(null,vec__40623,(0),null);
var map__40624 = cljs.core.nth.call(null,vec__40623,(1),null);
var map__40624__$1 = ((((!((map__40624 == null)))?((((map__40624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40624):map__40624);
var doc = cljs.core.get.call(null,map__40624__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__40624__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__40755 = seq__40619;
var G__40756 = chunk__40620;
var G__40757 = count__40621;
var G__40758 = (i__40622 + (1));
seq__40619 = G__40755;
chunk__40620 = G__40756;
count__40621 = G__40757;
i__40622 = G__40758;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40619);
if(temp__4657__auto__){
var seq__40619__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40619__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__40619__$1);
var G__40769 = cljs.core.chunk_rest.call(null,seq__40619__$1);
var G__40770 = c__19529__auto__;
var G__40771 = cljs.core.count.call(null,c__19529__auto__);
var G__40772 = (0);
seq__40619 = G__40769;
chunk__40620 = G__40770;
count__40621 = G__40771;
i__40622 = G__40772;
continue;
} else {
var vec__40626 = cljs.core.first.call(null,seq__40619__$1);
var name = cljs.core.nth.call(null,vec__40626,(0),null);
var map__40630 = cljs.core.nth.call(null,vec__40626,(1),null);
var map__40630__$1 = ((((!((map__40630 == null)))?((((map__40630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40630):map__40630);
var doc = cljs.core.get.call(null,map__40630__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__40630__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__40785 = cljs.core.next.call(null,seq__40619__$1);
var G__40786 = null;
var G__40787 = (0);
var G__40788 = (0);
seq__40619 = G__40785;
chunk__40620 = G__40786;
count__40621 = G__40787;
i__40622 = G__40788;
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