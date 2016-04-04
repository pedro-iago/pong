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
var seq__24852_24885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24853_24886 = null;
var count__24854_24887 = (0);
var i__24855_24888 = (0);
while(true){
if((i__24855_24888 < count__24854_24887)){
var f_24889 = cljs.core._nth.call(null,chunk__24853_24886,i__24855_24888);
cljs.core.println.call(null,"  ",f_24889);

var G__24890 = seq__24852_24885;
var G__24891 = chunk__24853_24886;
var G__24892 = count__24854_24887;
var G__24893 = (i__24855_24888 + (1));
seq__24852_24885 = G__24890;
chunk__24853_24886 = G__24891;
count__24854_24887 = G__24892;
i__24855_24888 = G__24893;
continue;
} else {
var temp__4657__auto___24894 = cljs.core.seq.call(null,seq__24852_24885);
if(temp__4657__auto___24894){
var seq__24852_24896__$1 = temp__4657__auto___24894;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24852_24896__$1)){
var c__18892__auto___24898 = cljs.core.chunk_first.call(null,seq__24852_24896__$1);
var G__24899 = cljs.core.chunk_rest.call(null,seq__24852_24896__$1);
var G__24900 = c__18892__auto___24898;
var G__24901 = cljs.core.count.call(null,c__18892__auto___24898);
var G__24902 = (0);
seq__24852_24885 = G__24899;
chunk__24853_24886 = G__24900;
count__24854_24887 = G__24901;
i__24855_24888 = G__24902;
continue;
} else {
var f_24903 = cljs.core.first.call(null,seq__24852_24896__$1);
cljs.core.println.call(null,"  ",f_24903);

var G__24904 = cljs.core.next.call(null,seq__24852_24896__$1);
var G__24905 = null;
var G__24906 = (0);
var G__24907 = (0);
seq__24852_24885 = G__24904;
chunk__24853_24886 = G__24905;
count__24854_24887 = G__24906;
i__24855_24888 = G__24907;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24908 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18089__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24908);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24908)))?cljs.core.second.call(null,arglists_24908):arglists_24908));
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
var seq__24866 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24867 = null;
var count__24868 = (0);
var i__24869 = (0);
while(true){
if((i__24869 < count__24868)){
var vec__24873 = cljs.core._nth.call(null,chunk__24867,i__24869);
var name = cljs.core.nth.call(null,vec__24873,(0),null);
var map__24874 = cljs.core.nth.call(null,vec__24873,(1),null);
var map__24874__$1 = ((((!((map__24874 == null)))?((((map__24874.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24874.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24874):map__24874);
var doc = cljs.core.get.call(null,map__24874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24920 = seq__24866;
var G__24921 = chunk__24867;
var G__24922 = count__24868;
var G__24923 = (i__24869 + (1));
seq__24866 = G__24920;
chunk__24867 = G__24921;
count__24868 = G__24922;
i__24869 = G__24923;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__24866);
if(temp__4657__auto__){
var seq__24866__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24866__$1)){
var c__18892__auto__ = cljs.core.chunk_first.call(null,seq__24866__$1);
var G__24926 = cljs.core.chunk_rest.call(null,seq__24866__$1);
var G__24927 = c__18892__auto__;
var G__24928 = cljs.core.count.call(null,c__18892__auto__);
var G__24929 = (0);
seq__24866 = G__24926;
chunk__24867 = G__24927;
count__24868 = G__24928;
i__24869 = G__24929;
continue;
} else {
var vec__24880 = cljs.core.first.call(null,seq__24866__$1);
var name = cljs.core.nth.call(null,vec__24880,(0),null);
var map__24881 = cljs.core.nth.call(null,vec__24880,(1),null);
var map__24881__$1 = ((((!((map__24881 == null)))?((((map__24881.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24881.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24881):map__24881);
var doc = cljs.core.get.call(null,map__24881__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24881__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24933 = cljs.core.next.call(null,seq__24866__$1);
var G__24934 = null;
var G__24935 = (0);
var G__24936 = (0);
seq__24866 = G__24933;
chunk__24867 = G__24934;
count__24868 = G__24935;
i__24869 = G__24936;
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