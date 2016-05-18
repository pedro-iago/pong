// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18726__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18726__auto__){
return or__18726__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18726__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41829_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41829_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__41838 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41839 = null;
var count__41840 = (0);
var i__41841 = (0);
while(true){
if((i__41841 < count__41840)){
var n = cljs.core._nth.call(null,chunk__41839,i__41841);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41850 = seq__41838;
var G__41851 = chunk__41839;
var G__41852 = count__41840;
var G__41853 = (i__41841 + (1));
seq__41838 = G__41850;
chunk__41839 = G__41851;
count__41840 = G__41852;
i__41841 = G__41853;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41838);
if(temp__4657__auto__){
var seq__41838__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41838__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41838__$1);
var G__41857 = cljs.core.chunk_rest.call(null,seq__41838__$1);
var G__41858 = c__19529__auto__;
var G__41859 = cljs.core.count.call(null,c__19529__auto__);
var G__41860 = (0);
seq__41838 = G__41857;
chunk__41839 = G__41858;
count__41840 = G__41859;
i__41841 = G__41860;
continue;
} else {
var n = cljs.core.first.call(null,seq__41838__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41861 = cljs.core.next.call(null,seq__41838__$1);
var G__41862 = null;
var G__41863 = (0);
var G__41864 = (0);
seq__41838 = G__41861;
chunk__41839 = G__41862;
count__41840 = G__41863;
i__41841 = G__41864;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__41967_41978 = cljs.core.seq.call(null,deps);
var chunk__41968_41979 = null;
var count__41969_41980 = (0);
var i__41970_41981 = (0);
while(true){
if((i__41970_41981 < count__41969_41980)){
var dep_41983 = cljs.core._nth.call(null,chunk__41968_41979,i__41970_41981);
topo_sort_helper_STAR_.call(null,dep_41983,(depth + (1)),state);

var G__42002 = seq__41967_41978;
var G__42003 = chunk__41968_41979;
var G__42004 = count__41969_41980;
var G__42005 = (i__41970_41981 + (1));
seq__41967_41978 = G__42002;
chunk__41968_41979 = G__42003;
count__41969_41980 = G__42004;
i__41970_41981 = G__42005;
continue;
} else {
var temp__4657__auto___42007 = cljs.core.seq.call(null,seq__41967_41978);
if(temp__4657__auto___42007){
var seq__41967_42008__$1 = temp__4657__auto___42007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41967_42008__$1)){
var c__19529__auto___42011 = cljs.core.chunk_first.call(null,seq__41967_42008__$1);
var G__42019 = cljs.core.chunk_rest.call(null,seq__41967_42008__$1);
var G__42020 = c__19529__auto___42011;
var G__42021 = cljs.core.count.call(null,c__19529__auto___42011);
var G__42022 = (0);
seq__41967_41978 = G__42019;
chunk__41968_41979 = G__42020;
count__41969_41980 = G__42021;
i__41970_41981 = G__42022;
continue;
} else {
var dep_42043 = cljs.core.first.call(null,seq__41967_42008__$1);
topo_sort_helper_STAR_.call(null,dep_42043,(depth + (1)),state);

var G__42045 = cljs.core.next.call(null,seq__41967_42008__$1);
var G__42046 = null;
var G__42047 = (0);
var G__42048 = (0);
seq__41967_41978 = G__42045;
chunk__41968_41979 = G__42046;
count__41969_41980 = G__42047;
i__41970_41981 = G__42048;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41971){
var vec__41973 = p__41971;
var x = cljs.core.nth.call(null,vec__41973,(0),null);
var xs = cljs.core.nthnext.call(null,vec__41973,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41973,x,xs,get_deps__$1){
return (function (p1__41870_SHARP_){
return clojure.set.difference.call(null,p1__41870_SHARP_,x);
});})(vec__41973,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42083 = cljs.core.seq.call(null,provides);
var chunk__42084 = null;
var count__42085 = (0);
var i__42086 = (0);
while(true){
if((i__42086 < count__42085)){
var prov = cljs.core._nth.call(null,chunk__42084,i__42086);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42087_42116 = cljs.core.seq.call(null,requires);
var chunk__42088_42117 = null;
var count__42089_42118 = (0);
var i__42090_42119 = (0);
while(true){
if((i__42090_42119 < count__42089_42118)){
var req_42120 = cljs.core._nth.call(null,chunk__42088_42117,i__42090_42119);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42120,prov);

var G__42121 = seq__42087_42116;
var G__42122 = chunk__42088_42117;
var G__42123 = count__42089_42118;
var G__42124 = (i__42090_42119 + (1));
seq__42087_42116 = G__42121;
chunk__42088_42117 = G__42122;
count__42089_42118 = G__42123;
i__42090_42119 = G__42124;
continue;
} else {
var temp__4657__auto___42125 = cljs.core.seq.call(null,seq__42087_42116);
if(temp__4657__auto___42125){
var seq__42087_42127__$1 = temp__4657__auto___42125;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42087_42127__$1)){
var c__19529__auto___42129 = cljs.core.chunk_first.call(null,seq__42087_42127__$1);
var G__42131 = cljs.core.chunk_rest.call(null,seq__42087_42127__$1);
var G__42132 = c__19529__auto___42129;
var G__42133 = cljs.core.count.call(null,c__19529__auto___42129);
var G__42134 = (0);
seq__42087_42116 = G__42131;
chunk__42088_42117 = G__42132;
count__42089_42118 = G__42133;
i__42090_42119 = G__42134;
continue;
} else {
var req_42139 = cljs.core.first.call(null,seq__42087_42127__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42139,prov);

var G__42142 = cljs.core.next.call(null,seq__42087_42127__$1);
var G__42143 = null;
var G__42144 = (0);
var G__42145 = (0);
seq__42087_42116 = G__42142;
chunk__42088_42117 = G__42143;
count__42089_42118 = G__42144;
i__42090_42119 = G__42145;
continue;
}
} else {
}
}
break;
}

var G__42146 = seq__42083;
var G__42147 = chunk__42084;
var G__42148 = count__42085;
var G__42149 = (i__42086 + (1));
seq__42083 = G__42146;
chunk__42084 = G__42147;
count__42085 = G__42148;
i__42086 = G__42149;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42083);
if(temp__4657__auto__){
var seq__42083__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42083__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__42083__$1);
var G__42150 = cljs.core.chunk_rest.call(null,seq__42083__$1);
var G__42151 = c__19529__auto__;
var G__42152 = cljs.core.count.call(null,c__19529__auto__);
var G__42153 = (0);
seq__42083 = G__42150;
chunk__42084 = G__42151;
count__42085 = G__42152;
i__42086 = G__42153;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42083__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42096_42154 = cljs.core.seq.call(null,requires);
var chunk__42097_42155 = null;
var count__42098_42156 = (0);
var i__42099_42157 = (0);
while(true){
if((i__42099_42157 < count__42098_42156)){
var req_42158 = cljs.core._nth.call(null,chunk__42097_42155,i__42099_42157);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42158,prov);

var G__42160 = seq__42096_42154;
var G__42161 = chunk__42097_42155;
var G__42162 = count__42098_42156;
var G__42163 = (i__42099_42157 + (1));
seq__42096_42154 = G__42160;
chunk__42097_42155 = G__42161;
count__42098_42156 = G__42162;
i__42099_42157 = G__42163;
continue;
} else {
var temp__4657__auto___42165__$1 = cljs.core.seq.call(null,seq__42096_42154);
if(temp__4657__auto___42165__$1){
var seq__42096_42166__$1 = temp__4657__auto___42165__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42096_42166__$1)){
var c__19529__auto___42167 = cljs.core.chunk_first.call(null,seq__42096_42166__$1);
var G__42168 = cljs.core.chunk_rest.call(null,seq__42096_42166__$1);
var G__42169 = c__19529__auto___42167;
var G__42170 = cljs.core.count.call(null,c__19529__auto___42167);
var G__42171 = (0);
seq__42096_42154 = G__42168;
chunk__42097_42155 = G__42169;
count__42098_42156 = G__42170;
i__42099_42157 = G__42171;
continue;
} else {
var req_42172 = cljs.core.first.call(null,seq__42096_42166__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42172,prov);

var G__42173 = cljs.core.next.call(null,seq__42096_42166__$1);
var G__42174 = null;
var G__42175 = (0);
var G__42176 = (0);
seq__42096_42154 = G__42173;
chunk__42097_42155 = G__42174;
count__42098_42156 = G__42175;
i__42099_42157 = G__42176;
continue;
}
} else {
}
}
break;
}

var G__42177 = cljs.core.next.call(null,seq__42083__$1);
var G__42178 = null;
var G__42179 = (0);
var G__42180 = (0);
seq__42083 = G__42177;
chunk__42084 = G__42178;
count__42085 = G__42179;
i__42086 = G__42180;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42185_42189 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42186_42190 = null;
var count__42187_42191 = (0);
var i__42188_42192 = (0);
while(true){
if((i__42188_42192 < count__42187_42191)){
var ns_42193 = cljs.core._nth.call(null,chunk__42186_42190,i__42188_42192);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42193);

var G__42194 = seq__42185_42189;
var G__42195 = chunk__42186_42190;
var G__42196 = count__42187_42191;
var G__42197 = (i__42188_42192 + (1));
seq__42185_42189 = G__42194;
chunk__42186_42190 = G__42195;
count__42187_42191 = G__42196;
i__42188_42192 = G__42197;
continue;
} else {
var temp__4657__auto___42198 = cljs.core.seq.call(null,seq__42185_42189);
if(temp__4657__auto___42198){
var seq__42185_42199__$1 = temp__4657__auto___42198;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42185_42199__$1)){
var c__19529__auto___42200 = cljs.core.chunk_first.call(null,seq__42185_42199__$1);
var G__42201 = cljs.core.chunk_rest.call(null,seq__42185_42199__$1);
var G__42202 = c__19529__auto___42200;
var G__42203 = cljs.core.count.call(null,c__19529__auto___42200);
var G__42204 = (0);
seq__42185_42189 = G__42201;
chunk__42186_42190 = G__42202;
count__42187_42191 = G__42203;
i__42188_42192 = G__42204;
continue;
} else {
var ns_42205 = cljs.core.first.call(null,seq__42185_42199__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42205);

var G__42206 = cljs.core.next.call(null,seq__42185_42199__$1);
var G__42207 = null;
var G__42208 = (0);
var G__42209 = (0);
seq__42185_42189 = G__42206;
chunk__42186_42190 = G__42207;
count__42187_42191 = G__42208;
i__42188_42192 = G__42209;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18726__auto__ = goog.require__;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42210__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42210 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42211__i = 0, G__42211__a = new Array(arguments.length -  0);
while (G__42211__i < G__42211__a.length) {G__42211__a[G__42211__i] = arguments[G__42211__i + 0]; ++G__42211__i;}
  args = new cljs.core.IndexedSeq(G__42211__a,0);
} 
return G__42210__delegate.call(this,args);};
G__42210.cljs$lang$maxFixedArity = 0;
G__42210.cljs$lang$applyTo = (function (arglist__42212){
var args = cljs.core.seq(arglist__42212);
return G__42210__delegate(args);
});
G__42210.cljs$core$IFn$_invoke$arity$variadic = G__42210__delegate;
return G__42210;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42214 = cljs.core._EQ_;
var expr__42215 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42214.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42215))){
var path_parts = ((function (pred__42214,expr__42215){
return (function (p1__42213_SHARP_){
return clojure.string.split.call(null,p1__42213_SHARP_,/[\/\\]/);
});})(pred__42214,expr__42215))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42214,expr__42215){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42217){if((e42217 instanceof Error)){
var e = e42217;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42217;

}
}})());
});
;})(path_parts,sep,root,pred__42214,expr__42215))
} else {
if(cljs.core.truth_(pred__42214.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42215))){
return ((function (pred__42214,expr__42215){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__42214,expr__42215){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42214,expr__42215))
);

return deferred.addErrback(((function (deferred,pred__42214,expr__42215){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42214,expr__42215))
);
});
;})(pred__42214,expr__42215))
} else {
return ((function (pred__42214,expr__42215){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42214,expr__42215))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42218,callback){
var map__42221 = p__42218;
var map__42221__$1 = ((((!((map__42221 == null)))?((((map__42221.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42221.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42221):map__42221);
var file_msg = map__42221__$1;
var request_url = cljs.core.get.call(null,map__42221__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42221,map__42221__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42221,map__42221__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__){
return (function (state_42245){
var state_val_42246 = (state_42245[(1)]);
if((state_val_42246 === (7))){
var inst_42241 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
var statearr_42247_42267 = state_42245__$1;
(statearr_42247_42267[(2)] = inst_42241);

(statearr_42247_42267[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (1))){
var state_42245__$1 = state_42245;
var statearr_42248_42268 = state_42245__$1;
(statearr_42248_42268[(2)] = null);

(statearr_42248_42268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (4))){
var inst_42225 = (state_42245[(7)]);
var inst_42225__$1 = (state_42245[(2)]);
var state_42245__$1 = (function (){var statearr_42249 = state_42245;
(statearr_42249[(7)] = inst_42225__$1);

return statearr_42249;
})();
if(cljs.core.truth_(inst_42225__$1)){
var statearr_42250_42269 = state_42245__$1;
(statearr_42250_42269[(1)] = (5));

} else {
var statearr_42251_42270 = state_42245__$1;
(statearr_42251_42270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (6))){
var state_42245__$1 = state_42245;
var statearr_42252_42271 = state_42245__$1;
(statearr_42252_42271[(2)] = null);

(statearr_42252_42271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (3))){
var inst_42243 = (state_42245[(2)]);
var state_42245__$1 = state_42245;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42245__$1,inst_42243);
} else {
if((state_val_42246 === (2))){
var state_42245__$1 = state_42245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42245__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42246 === (11))){
var inst_42237 = (state_42245[(2)]);
var state_42245__$1 = (function (){var statearr_42253 = state_42245;
(statearr_42253[(8)] = inst_42237);

return statearr_42253;
})();
var statearr_42254_42272 = state_42245__$1;
(statearr_42254_42272[(2)] = null);

(statearr_42254_42272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (9))){
var inst_42231 = (state_42245[(9)]);
var inst_42229 = (state_42245[(10)]);
var inst_42233 = inst_42231.call(null,inst_42229);
var state_42245__$1 = state_42245;
var statearr_42255_42273 = state_42245__$1;
(statearr_42255_42273[(2)] = inst_42233);

(statearr_42255_42273[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (5))){
var inst_42225 = (state_42245[(7)]);
var inst_42227 = figwheel.client.file_reloading.blocking_load.call(null,inst_42225);
var state_42245__$1 = state_42245;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42245__$1,(8),inst_42227);
} else {
if((state_val_42246 === (10))){
var inst_42229 = (state_42245[(10)]);
var inst_42235 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42229);
var state_42245__$1 = state_42245;
var statearr_42256_42274 = state_42245__$1;
(statearr_42256_42274[(2)] = inst_42235);

(statearr_42256_42274[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42246 === (8))){
var inst_42231 = (state_42245[(9)]);
var inst_42225 = (state_42245[(7)]);
var inst_42229 = (state_42245[(2)]);
var inst_42230 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42231__$1 = cljs.core.get.call(null,inst_42230,inst_42225);
var state_42245__$1 = (function (){var statearr_42257 = state_42245;
(statearr_42257[(9)] = inst_42231__$1);

(statearr_42257[(10)] = inst_42229);

return statearr_42257;
})();
if(cljs.core.truth_(inst_42231__$1)){
var statearr_42258_42275 = state_42245__$1;
(statearr_42258_42275[(1)] = (9));

} else {
var statearr_42259_42276 = state_42245__$1;
(statearr_42259_42276[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__38071__auto__))
;
return ((function (switch__37506__auto__,c__38071__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37508__auto__ = null;
var figwheel$client$file_reloading$state_machine__37508__auto____0 = (function (){
var statearr_42263 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42263[(0)] = figwheel$client$file_reloading$state_machine__37508__auto__);

(statearr_42263[(1)] = (1));

return statearr_42263;
});
var figwheel$client$file_reloading$state_machine__37508__auto____1 = (function (state_42245){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_42245);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e42264){if((e42264 instanceof Object)){
var ex__37511__auto__ = e42264;
var statearr_42265_42277 = state_42245;
(statearr_42265_42277[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42245);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42264;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42278 = state_42245;
state_42245 = G__42278;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37508__auto__ = function(state_42245){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37508__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37508__auto____1.call(this,state_42245);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37508__auto____0;
figwheel$client$file_reloading$state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37508__auto____1;
return figwheel$client$file_reloading$state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__))
})();
var state__38073__auto__ = (function (){var statearr_42266 = f__38072__auto__.call(null);
(statearr_42266[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_42266;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__))
);

return c__38071__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42279,callback){
var map__42282 = p__42279;
var map__42282__$1 = ((((!((map__42282 == null)))?((((map__42282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42282):map__42282);
var file_msg = map__42282__$1;
var namespace = cljs.core.get.call(null,map__42282__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42282,map__42282__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42282,map__42282__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42284){
var map__42287 = p__42284;
var map__42287__$1 = ((((!((map__42287 == null)))?((((map__42287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42287):map__42287);
var file_msg = map__42287__$1;
var namespace = cljs.core.get.call(null,map__42287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18714__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18714__auto__){
var or__18726__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18714__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42289,callback){
var map__42292 = p__42289;
var map__42292__$1 = ((((!((map__42292 == null)))?((((map__42292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42292):map__42292);
var file_msg = map__42292__$1;
var request_url = cljs.core.get.call(null,map__42292__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42292__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__38071__auto___42380 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___42380,out){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___42380,out){
return (function (state_42362){
var state_val_42363 = (state_42362[(1)]);
if((state_val_42363 === (1))){
var inst_42340 = cljs.core.nth.call(null,files,(0),null);
var inst_42341 = cljs.core.nthnext.call(null,files,(1));
var inst_42342 = files;
var state_42362__$1 = (function (){var statearr_42364 = state_42362;
(statearr_42364[(7)] = inst_42341);

(statearr_42364[(8)] = inst_42342);

(statearr_42364[(9)] = inst_42340);

return statearr_42364;
})();
var statearr_42365_42381 = state_42362__$1;
(statearr_42365_42381[(2)] = null);

(statearr_42365_42381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42363 === (2))){
var inst_42342 = (state_42362[(8)]);
var inst_42345 = (state_42362[(10)]);
var inst_42345__$1 = cljs.core.nth.call(null,inst_42342,(0),null);
var inst_42346 = cljs.core.nthnext.call(null,inst_42342,(1));
var inst_42347 = (inst_42345__$1 == null);
var inst_42348 = cljs.core.not.call(null,inst_42347);
var state_42362__$1 = (function (){var statearr_42366 = state_42362;
(statearr_42366[(10)] = inst_42345__$1);

(statearr_42366[(11)] = inst_42346);

return statearr_42366;
})();
if(inst_42348){
var statearr_42367_42382 = state_42362__$1;
(statearr_42367_42382[(1)] = (4));

} else {
var statearr_42368_42383 = state_42362__$1;
(statearr_42368_42383[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42363 === (3))){
var inst_42360 = (state_42362[(2)]);
var state_42362__$1 = state_42362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42362__$1,inst_42360);
} else {
if((state_val_42363 === (4))){
var inst_42345 = (state_42362[(10)]);
var inst_42350 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42345);
var state_42362__$1 = state_42362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42362__$1,(7),inst_42350);
} else {
if((state_val_42363 === (5))){
var inst_42356 = cljs.core.async.close_BANG_.call(null,out);
var state_42362__$1 = state_42362;
var statearr_42369_42384 = state_42362__$1;
(statearr_42369_42384[(2)] = inst_42356);

(statearr_42369_42384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42363 === (6))){
var inst_42358 = (state_42362[(2)]);
var state_42362__$1 = state_42362;
var statearr_42370_42385 = state_42362__$1;
(statearr_42370_42385[(2)] = inst_42358);

(statearr_42370_42385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42363 === (7))){
var inst_42346 = (state_42362[(11)]);
var inst_42352 = (state_42362[(2)]);
var inst_42353 = cljs.core.async.put_BANG_.call(null,out,inst_42352);
var inst_42342 = inst_42346;
var state_42362__$1 = (function (){var statearr_42371 = state_42362;
(statearr_42371[(8)] = inst_42342);

(statearr_42371[(12)] = inst_42353);

return statearr_42371;
})();
var statearr_42372_42386 = state_42362__$1;
(statearr_42372_42386[(2)] = null);

(statearr_42372_42386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__38071__auto___42380,out))
;
return ((function (switch__37506__auto__,c__38071__auto___42380,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto____0 = (function (){
var statearr_42376 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42376[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto__);

(statearr_42376[(1)] = (1));

return statearr_42376;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto____1 = (function (state_42362){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_42362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e42377){if((e42377 instanceof Object)){
var ex__37511__auto__ = e42377;
var statearr_42378_42387 = state_42362;
(statearr_42378_42387[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42377;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42388 = state_42362;
state_42362 = G__42388;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto__ = function(state_42362){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto____1.call(this,state_42362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___42380,out))
})();
var state__38073__auto__ = (function (){var statearr_42379 = f__38072__auto__.call(null);
(statearr_42379[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___42380);

return statearr_42379;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___42380,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42389,opts){
var map__42393 = p__42389;
var map__42393__$1 = ((((!((map__42393 == null)))?((((map__42393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42393):map__42393);
var eval_body__$1 = cljs.core.get.call(null,map__42393__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42393__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18714__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18714__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18714__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42395){var e = e42395;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42396_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42396_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42401){
var vec__42402 = p__42401;
var k = cljs.core.nth.call(null,vec__42402,(0),null);
var v = cljs.core.nth.call(null,vec__42402,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42403){
var vec__42404 = p__42403;
var k = cljs.core.nth.call(null,vec__42404,(0),null);
var v = cljs.core.nth.call(null,vec__42404,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42408,p__42409){
var map__42656 = p__42408;
var map__42656__$1 = ((((!((map__42656 == null)))?((((map__42656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42656):map__42656);
var opts = map__42656__$1;
var before_jsload = cljs.core.get.call(null,map__42656__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42656__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42656__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42657 = p__42409;
var map__42657__$1 = ((((!((map__42657 == null)))?((((map__42657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42657):map__42657);
var msg = map__42657__$1;
var files = cljs.core.get.call(null,map__42657__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42657__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42657__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42810){
var state_val_42811 = (state_42810[(1)]);
if((state_val_42811 === (7))){
var inst_42674 = (state_42810[(7)]);
var inst_42671 = (state_42810[(8)]);
var inst_42672 = (state_42810[(9)]);
var inst_42673 = (state_42810[(10)]);
var inst_42679 = cljs.core._nth.call(null,inst_42672,inst_42674);
var inst_42680 = figwheel.client.file_reloading.eval_body.call(null,inst_42679,opts);
var inst_42681 = (inst_42674 + (1));
var tmp42812 = inst_42671;
var tmp42813 = inst_42672;
var tmp42814 = inst_42673;
var inst_42671__$1 = tmp42812;
var inst_42672__$1 = tmp42813;
var inst_42673__$1 = tmp42814;
var inst_42674__$1 = inst_42681;
var state_42810__$1 = (function (){var statearr_42815 = state_42810;
(statearr_42815[(7)] = inst_42674__$1);

(statearr_42815[(11)] = inst_42680);

(statearr_42815[(8)] = inst_42671__$1);

(statearr_42815[(9)] = inst_42672__$1);

(statearr_42815[(10)] = inst_42673__$1);

return statearr_42815;
})();
var statearr_42816_42902 = state_42810__$1;
(statearr_42816_42902[(2)] = null);

(statearr_42816_42902[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (20))){
var inst_42714 = (state_42810[(12)]);
var inst_42722 = figwheel.client.file_reloading.sort_files.call(null,inst_42714);
var state_42810__$1 = state_42810;
var statearr_42817_42903 = state_42810__$1;
(statearr_42817_42903[(2)] = inst_42722);

(statearr_42817_42903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (27))){
var state_42810__$1 = state_42810;
var statearr_42818_42904 = state_42810__$1;
(statearr_42818_42904[(2)] = null);

(statearr_42818_42904[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (1))){
var inst_42663 = (state_42810[(13)]);
var inst_42660 = before_jsload.call(null,files);
var inst_42661 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42662 = (function (){return ((function (inst_42663,inst_42660,inst_42661,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42405_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42405_SHARP_);
});
;})(inst_42663,inst_42660,inst_42661,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42663__$1 = cljs.core.filter.call(null,inst_42662,files);
var inst_42664 = cljs.core.not_empty.call(null,inst_42663__$1);
var state_42810__$1 = (function (){var statearr_42819 = state_42810;
(statearr_42819[(14)] = inst_42660);

(statearr_42819[(13)] = inst_42663__$1);

(statearr_42819[(15)] = inst_42661);

return statearr_42819;
})();
if(cljs.core.truth_(inst_42664)){
var statearr_42820_42905 = state_42810__$1;
(statearr_42820_42905[(1)] = (2));

} else {
var statearr_42821_42906 = state_42810__$1;
(statearr_42821_42906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (24))){
var state_42810__$1 = state_42810;
var statearr_42822_42907 = state_42810__$1;
(statearr_42822_42907[(2)] = null);

(statearr_42822_42907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (39))){
var inst_42764 = (state_42810[(16)]);
var state_42810__$1 = state_42810;
var statearr_42823_42908 = state_42810__$1;
(statearr_42823_42908[(2)] = inst_42764);

(statearr_42823_42908[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (46))){
var inst_42805 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42824_42909 = state_42810__$1;
(statearr_42824_42909[(2)] = inst_42805);

(statearr_42824_42909[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (4))){
var inst_42708 = (state_42810[(2)]);
var inst_42709 = cljs.core.List.EMPTY;
var inst_42710 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42709);
var inst_42711 = (function (){return ((function (inst_42708,inst_42709,inst_42710,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42406_SHARP_){
var and__18714__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42406_SHARP_);
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42406_SHARP_));
} else {
return and__18714__auto__;
}
});
;})(inst_42708,inst_42709,inst_42710,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42712 = cljs.core.filter.call(null,inst_42711,files);
var inst_42713 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42714 = cljs.core.concat.call(null,inst_42712,inst_42713);
var state_42810__$1 = (function (){var statearr_42825 = state_42810;
(statearr_42825[(12)] = inst_42714);

(statearr_42825[(17)] = inst_42710);

(statearr_42825[(18)] = inst_42708);

return statearr_42825;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42826_42910 = state_42810__$1;
(statearr_42826_42910[(1)] = (16));

} else {
var statearr_42827_42911 = state_42810__$1;
(statearr_42827_42911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (15))){
var inst_42698 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42828_42912 = state_42810__$1;
(statearr_42828_42912[(2)] = inst_42698);

(statearr_42828_42912[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (21))){
var inst_42724 = (state_42810[(19)]);
var inst_42724__$1 = (state_42810[(2)]);
var inst_42725 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42724__$1);
var state_42810__$1 = (function (){var statearr_42829 = state_42810;
(statearr_42829[(19)] = inst_42724__$1);

return statearr_42829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42810__$1,(22),inst_42725);
} else {
if((state_val_42811 === (31))){
var inst_42808 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42810__$1,inst_42808);
} else {
if((state_val_42811 === (32))){
var inst_42764 = (state_42810[(16)]);
var inst_42769 = inst_42764.cljs$lang$protocol_mask$partition0$;
var inst_42770 = (inst_42769 & (64));
var inst_42771 = inst_42764.cljs$core$ISeq$;
var inst_42772 = (inst_42770) || (inst_42771);
var state_42810__$1 = state_42810;
if(cljs.core.truth_(inst_42772)){
var statearr_42830_42913 = state_42810__$1;
(statearr_42830_42913[(1)] = (35));

} else {
var statearr_42831_42914 = state_42810__$1;
(statearr_42831_42914[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (40))){
var inst_42785 = (state_42810[(20)]);
var inst_42784 = (state_42810[(2)]);
var inst_42785__$1 = cljs.core.get.call(null,inst_42784,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42786 = cljs.core.get.call(null,inst_42784,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42787 = cljs.core.not_empty.call(null,inst_42785__$1);
var state_42810__$1 = (function (){var statearr_42832 = state_42810;
(statearr_42832[(21)] = inst_42786);

(statearr_42832[(20)] = inst_42785__$1);

return statearr_42832;
})();
if(cljs.core.truth_(inst_42787)){
var statearr_42833_42915 = state_42810__$1;
(statearr_42833_42915[(1)] = (41));

} else {
var statearr_42834_42916 = state_42810__$1;
(statearr_42834_42916[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (33))){
var state_42810__$1 = state_42810;
var statearr_42835_42917 = state_42810__$1;
(statearr_42835_42917[(2)] = false);

(statearr_42835_42917[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (13))){
var inst_42684 = (state_42810[(22)]);
var inst_42688 = cljs.core.chunk_first.call(null,inst_42684);
var inst_42689 = cljs.core.chunk_rest.call(null,inst_42684);
var inst_42690 = cljs.core.count.call(null,inst_42688);
var inst_42671 = inst_42689;
var inst_42672 = inst_42688;
var inst_42673 = inst_42690;
var inst_42674 = (0);
var state_42810__$1 = (function (){var statearr_42836 = state_42810;
(statearr_42836[(7)] = inst_42674);

(statearr_42836[(8)] = inst_42671);

(statearr_42836[(9)] = inst_42672);

(statearr_42836[(10)] = inst_42673);

return statearr_42836;
})();
var statearr_42837_42918 = state_42810__$1;
(statearr_42837_42918[(2)] = null);

(statearr_42837_42918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (22))){
var inst_42724 = (state_42810[(19)]);
var inst_42728 = (state_42810[(23)]);
var inst_42732 = (state_42810[(24)]);
var inst_42727 = (state_42810[(25)]);
var inst_42727__$1 = (state_42810[(2)]);
var inst_42728__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42727__$1);
var inst_42729 = (function (){var all_files = inst_42724;
var res_SINGLEQUOTE_ = inst_42727__$1;
var res = inst_42728__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42724,inst_42728,inst_42732,inst_42727,inst_42727__$1,inst_42728__$1,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42407_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42407_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42724,inst_42728,inst_42732,inst_42727,inst_42727__$1,inst_42728__$1,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42730 = cljs.core.filter.call(null,inst_42729,inst_42727__$1);
var inst_42731 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42732__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42731);
var inst_42733 = cljs.core.not_empty.call(null,inst_42732__$1);
var state_42810__$1 = (function (){var statearr_42838 = state_42810;
(statearr_42838[(26)] = inst_42730);

(statearr_42838[(23)] = inst_42728__$1);

(statearr_42838[(24)] = inst_42732__$1);

(statearr_42838[(25)] = inst_42727__$1);

return statearr_42838;
})();
if(cljs.core.truth_(inst_42733)){
var statearr_42839_42919 = state_42810__$1;
(statearr_42839_42919[(1)] = (23));

} else {
var statearr_42840_42920 = state_42810__$1;
(statearr_42840_42920[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (36))){
var state_42810__$1 = state_42810;
var statearr_42841_42921 = state_42810__$1;
(statearr_42841_42921[(2)] = false);

(statearr_42841_42921[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (41))){
var inst_42785 = (state_42810[(20)]);
var inst_42789 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42790 = cljs.core.map.call(null,inst_42789,inst_42785);
var inst_42791 = cljs.core.pr_str.call(null,inst_42790);
var inst_42792 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42791)].join('');
var inst_42793 = figwheel.client.utils.log.call(null,inst_42792);
var state_42810__$1 = state_42810;
var statearr_42842_42922 = state_42810__$1;
(statearr_42842_42922[(2)] = inst_42793);

(statearr_42842_42922[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (43))){
var inst_42786 = (state_42810[(21)]);
var inst_42796 = (state_42810[(2)]);
var inst_42797 = cljs.core.not_empty.call(null,inst_42786);
var state_42810__$1 = (function (){var statearr_42843 = state_42810;
(statearr_42843[(27)] = inst_42796);

return statearr_42843;
})();
if(cljs.core.truth_(inst_42797)){
var statearr_42844_42923 = state_42810__$1;
(statearr_42844_42923[(1)] = (44));

} else {
var statearr_42845_42924 = state_42810__$1;
(statearr_42845_42924[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (29))){
var inst_42730 = (state_42810[(26)]);
var inst_42724 = (state_42810[(19)]);
var inst_42764 = (state_42810[(16)]);
var inst_42728 = (state_42810[(23)]);
var inst_42732 = (state_42810[(24)]);
var inst_42727 = (state_42810[(25)]);
var inst_42760 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42763 = (function (){var all_files = inst_42724;
var res_SINGLEQUOTE_ = inst_42727;
var res = inst_42728;
var files_not_loaded = inst_42730;
var dependencies_that_loaded = inst_42732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42764,inst_42728,inst_42732,inst_42727,inst_42760,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42762){
var map__42846 = p__42762;
var map__42846__$1 = ((((!((map__42846 == null)))?((((map__42846.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42846.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42846):map__42846);
var namespace = cljs.core.get.call(null,map__42846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42764,inst_42728,inst_42732,inst_42727,inst_42760,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42764__$1 = cljs.core.group_by.call(null,inst_42763,inst_42730);
var inst_42766 = (inst_42764__$1 == null);
var inst_42767 = cljs.core.not.call(null,inst_42766);
var state_42810__$1 = (function (){var statearr_42848 = state_42810;
(statearr_42848[(28)] = inst_42760);

(statearr_42848[(16)] = inst_42764__$1);

return statearr_42848;
})();
if(inst_42767){
var statearr_42849_42925 = state_42810__$1;
(statearr_42849_42925[(1)] = (32));

} else {
var statearr_42850_42926 = state_42810__$1;
(statearr_42850_42926[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (44))){
var inst_42786 = (state_42810[(21)]);
var inst_42799 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42786);
var inst_42800 = cljs.core.pr_str.call(null,inst_42799);
var inst_42801 = [cljs.core.str("not required: "),cljs.core.str(inst_42800)].join('');
var inst_42802 = figwheel.client.utils.log.call(null,inst_42801);
var state_42810__$1 = state_42810;
var statearr_42851_42927 = state_42810__$1;
(statearr_42851_42927[(2)] = inst_42802);

(statearr_42851_42927[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (6))){
var inst_42705 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42852_42928 = state_42810__$1;
(statearr_42852_42928[(2)] = inst_42705);

(statearr_42852_42928[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (28))){
var inst_42730 = (state_42810[(26)]);
var inst_42757 = (state_42810[(2)]);
var inst_42758 = cljs.core.not_empty.call(null,inst_42730);
var state_42810__$1 = (function (){var statearr_42853 = state_42810;
(statearr_42853[(29)] = inst_42757);

return statearr_42853;
})();
if(cljs.core.truth_(inst_42758)){
var statearr_42854_42929 = state_42810__$1;
(statearr_42854_42929[(1)] = (29));

} else {
var statearr_42855_42930 = state_42810__$1;
(statearr_42855_42930[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (25))){
var inst_42728 = (state_42810[(23)]);
var inst_42744 = (state_42810[(2)]);
var inst_42745 = cljs.core.not_empty.call(null,inst_42728);
var state_42810__$1 = (function (){var statearr_42856 = state_42810;
(statearr_42856[(30)] = inst_42744);

return statearr_42856;
})();
if(cljs.core.truth_(inst_42745)){
var statearr_42857_42931 = state_42810__$1;
(statearr_42857_42931[(1)] = (26));

} else {
var statearr_42858_42932 = state_42810__$1;
(statearr_42858_42932[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (34))){
var inst_42779 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
if(cljs.core.truth_(inst_42779)){
var statearr_42859_42933 = state_42810__$1;
(statearr_42859_42933[(1)] = (38));

} else {
var statearr_42860_42934 = state_42810__$1;
(statearr_42860_42934[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (17))){
var state_42810__$1 = state_42810;
var statearr_42861_42935 = state_42810__$1;
(statearr_42861_42935[(2)] = recompile_dependents);

(statearr_42861_42935[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (3))){
var state_42810__$1 = state_42810;
var statearr_42862_42936 = state_42810__$1;
(statearr_42862_42936[(2)] = null);

(statearr_42862_42936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (12))){
var inst_42701 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42863_42937 = state_42810__$1;
(statearr_42863_42937[(2)] = inst_42701);

(statearr_42863_42937[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (2))){
var inst_42663 = (state_42810[(13)]);
var inst_42670 = cljs.core.seq.call(null,inst_42663);
var inst_42671 = inst_42670;
var inst_42672 = null;
var inst_42673 = (0);
var inst_42674 = (0);
var state_42810__$1 = (function (){var statearr_42864 = state_42810;
(statearr_42864[(7)] = inst_42674);

(statearr_42864[(8)] = inst_42671);

(statearr_42864[(9)] = inst_42672);

(statearr_42864[(10)] = inst_42673);

return statearr_42864;
})();
var statearr_42865_42938 = state_42810__$1;
(statearr_42865_42938[(2)] = null);

(statearr_42865_42938[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (23))){
var inst_42730 = (state_42810[(26)]);
var inst_42724 = (state_42810[(19)]);
var inst_42728 = (state_42810[(23)]);
var inst_42732 = (state_42810[(24)]);
var inst_42727 = (state_42810[(25)]);
var inst_42735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42737 = (function (){var all_files = inst_42724;
var res_SINGLEQUOTE_ = inst_42727;
var res = inst_42728;
var files_not_loaded = inst_42730;
var dependencies_that_loaded = inst_42732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42728,inst_42732,inst_42727,inst_42735,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42736){
var map__42866 = p__42736;
var map__42866__$1 = ((((!((map__42866 == null)))?((((map__42866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42866):map__42866);
var request_url = cljs.core.get.call(null,map__42866__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42728,inst_42732,inst_42727,inst_42735,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42738 = cljs.core.reverse.call(null,inst_42732);
var inst_42739 = cljs.core.map.call(null,inst_42737,inst_42738);
var inst_42740 = cljs.core.pr_str.call(null,inst_42739);
var inst_42741 = figwheel.client.utils.log.call(null,inst_42740);
var state_42810__$1 = (function (){var statearr_42868 = state_42810;
(statearr_42868[(31)] = inst_42735);

return statearr_42868;
})();
var statearr_42869_42939 = state_42810__$1;
(statearr_42869_42939[(2)] = inst_42741);

(statearr_42869_42939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (35))){
var state_42810__$1 = state_42810;
var statearr_42870_42940 = state_42810__$1;
(statearr_42870_42940[(2)] = true);

(statearr_42870_42940[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (19))){
var inst_42714 = (state_42810[(12)]);
var inst_42720 = figwheel.client.file_reloading.expand_files.call(null,inst_42714);
var state_42810__$1 = state_42810;
var statearr_42871_42941 = state_42810__$1;
(statearr_42871_42941[(2)] = inst_42720);

(statearr_42871_42941[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (11))){
var state_42810__$1 = state_42810;
var statearr_42872_42942 = state_42810__$1;
(statearr_42872_42942[(2)] = null);

(statearr_42872_42942[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (9))){
var inst_42703 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42873_42943 = state_42810__$1;
(statearr_42873_42943[(2)] = inst_42703);

(statearr_42873_42943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (5))){
var inst_42674 = (state_42810[(7)]);
var inst_42673 = (state_42810[(10)]);
var inst_42676 = (inst_42674 < inst_42673);
var inst_42677 = inst_42676;
var state_42810__$1 = state_42810;
if(cljs.core.truth_(inst_42677)){
var statearr_42874_42944 = state_42810__$1;
(statearr_42874_42944[(1)] = (7));

} else {
var statearr_42875_42945 = state_42810__$1;
(statearr_42875_42945[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (14))){
var inst_42684 = (state_42810[(22)]);
var inst_42693 = cljs.core.first.call(null,inst_42684);
var inst_42694 = figwheel.client.file_reloading.eval_body.call(null,inst_42693,opts);
var inst_42695 = cljs.core.next.call(null,inst_42684);
var inst_42671 = inst_42695;
var inst_42672 = null;
var inst_42673 = (0);
var inst_42674 = (0);
var state_42810__$1 = (function (){var statearr_42876 = state_42810;
(statearr_42876[(7)] = inst_42674);

(statearr_42876[(8)] = inst_42671);

(statearr_42876[(9)] = inst_42672);

(statearr_42876[(10)] = inst_42673);

(statearr_42876[(32)] = inst_42694);

return statearr_42876;
})();
var statearr_42877_42946 = state_42810__$1;
(statearr_42877_42946[(2)] = null);

(statearr_42877_42946[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (45))){
var state_42810__$1 = state_42810;
var statearr_42878_42947 = state_42810__$1;
(statearr_42878_42947[(2)] = null);

(statearr_42878_42947[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (26))){
var inst_42730 = (state_42810[(26)]);
var inst_42724 = (state_42810[(19)]);
var inst_42728 = (state_42810[(23)]);
var inst_42732 = (state_42810[(24)]);
var inst_42727 = (state_42810[(25)]);
var inst_42747 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42749 = (function (){var all_files = inst_42724;
var res_SINGLEQUOTE_ = inst_42727;
var res = inst_42728;
var files_not_loaded = inst_42730;
var dependencies_that_loaded = inst_42732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42728,inst_42732,inst_42727,inst_42747,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42748){
var map__42879 = p__42748;
var map__42879__$1 = ((((!((map__42879 == null)))?((((map__42879.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42879.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42879):map__42879);
var namespace = cljs.core.get.call(null,map__42879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42728,inst_42732,inst_42727,inst_42747,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42750 = cljs.core.map.call(null,inst_42749,inst_42728);
var inst_42751 = cljs.core.pr_str.call(null,inst_42750);
var inst_42752 = figwheel.client.utils.log.call(null,inst_42751);
var inst_42753 = (function (){var all_files = inst_42724;
var res_SINGLEQUOTE_ = inst_42727;
var res = inst_42728;
var files_not_loaded = inst_42730;
var dependencies_that_loaded = inst_42732;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42728,inst_42732,inst_42727,inst_42747,inst_42749,inst_42750,inst_42751,inst_42752,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42730,inst_42724,inst_42728,inst_42732,inst_42727,inst_42747,inst_42749,inst_42750,inst_42751,inst_42752,state_val_42811,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42754 = setTimeout(inst_42753,(10));
var state_42810__$1 = (function (){var statearr_42881 = state_42810;
(statearr_42881[(33)] = inst_42752);

(statearr_42881[(34)] = inst_42747);

return statearr_42881;
})();
var statearr_42882_42948 = state_42810__$1;
(statearr_42882_42948[(2)] = inst_42754);

(statearr_42882_42948[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (16))){
var state_42810__$1 = state_42810;
var statearr_42883_42949 = state_42810__$1;
(statearr_42883_42949[(2)] = reload_dependents);

(statearr_42883_42949[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (38))){
var inst_42764 = (state_42810[(16)]);
var inst_42781 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42764);
var state_42810__$1 = state_42810;
var statearr_42884_42950 = state_42810__$1;
(statearr_42884_42950[(2)] = inst_42781);

(statearr_42884_42950[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (30))){
var state_42810__$1 = state_42810;
var statearr_42885_42951 = state_42810__$1;
(statearr_42885_42951[(2)] = null);

(statearr_42885_42951[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (10))){
var inst_42684 = (state_42810[(22)]);
var inst_42686 = cljs.core.chunked_seq_QMARK_.call(null,inst_42684);
var state_42810__$1 = state_42810;
if(inst_42686){
var statearr_42886_42952 = state_42810__$1;
(statearr_42886_42952[(1)] = (13));

} else {
var statearr_42887_42953 = state_42810__$1;
(statearr_42887_42953[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (18))){
var inst_42718 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
if(cljs.core.truth_(inst_42718)){
var statearr_42888_42954 = state_42810__$1;
(statearr_42888_42954[(1)] = (19));

} else {
var statearr_42889_42955 = state_42810__$1;
(statearr_42889_42955[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (42))){
var state_42810__$1 = state_42810;
var statearr_42890_42956 = state_42810__$1;
(statearr_42890_42956[(2)] = null);

(statearr_42890_42956[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (37))){
var inst_42776 = (state_42810[(2)]);
var state_42810__$1 = state_42810;
var statearr_42891_42957 = state_42810__$1;
(statearr_42891_42957[(2)] = inst_42776);

(statearr_42891_42957[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42811 === (8))){
var inst_42671 = (state_42810[(8)]);
var inst_42684 = (state_42810[(22)]);
var inst_42684__$1 = cljs.core.seq.call(null,inst_42671);
var state_42810__$1 = (function (){var statearr_42892 = state_42810;
(statearr_42892[(22)] = inst_42684__$1);

return statearr_42892;
})();
if(inst_42684__$1){
var statearr_42893_42958 = state_42810__$1;
(statearr_42893_42958[(1)] = (10));

} else {
var statearr_42894_42959 = state_42810__$1;
(statearr_42894_42959[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37506__auto__,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto____0 = (function (){
var statearr_42898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42898[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto__);

(statearr_42898[(1)] = (1));

return statearr_42898;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto____1 = (function (state_42810){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_42810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e42899){if((e42899 instanceof Object)){
var ex__37511__auto__ = e42899;
var statearr_42900_42960 = state_42810;
(statearr_42900_42960[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42899;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42961 = state_42810;
state_42810 = G__42961;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto__ = function(state_42810){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto____1.call(this,state_42810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38073__auto__ = (function (){var statearr_42901 = f__38072__auto__.call(null);
(statearr_42901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_42901;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__,map__42656,map__42656__$1,opts,before_jsload,on_jsload,reload_dependents,map__42657,map__42657__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38071__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42964,link){
var map__42967 = p__42964;
var map__42967__$1 = ((((!((map__42967 == null)))?((((map__42967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42967):map__42967);
var file = cljs.core.get.call(null,map__42967__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__42967,map__42967__$1,file){
return (function (p1__42962_SHARP_,p2__42963_SHARP_){
if(cljs.core._EQ_.call(null,p1__42962_SHARP_,p2__42963_SHARP_)){
return p1__42962_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__42967,map__42967__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42973){
var map__42974 = p__42973;
var map__42974__$1 = ((((!((map__42974 == null)))?((((map__42974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42974):map__42974);
var match_length = cljs.core.get.call(null,map__42974__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42974__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42969_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42969_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args42976 = [];
var len__19784__auto___42979 = arguments.length;
var i__19785__auto___42980 = (0);
while(true){
if((i__19785__auto___42980 < len__19784__auto___42979)){
args42976.push((arguments[i__19785__auto___42980]));

var G__42981 = (i__19785__auto___42980 + (1));
i__19785__auto___42980 = G__42981;
continue;
} else {
}
break;
}

var G__42978 = args42976.length;
switch (G__42978) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42976.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42983_SHARP_,p2__42984_SHARP_){
return cljs.core.assoc.call(null,p1__42983_SHARP_,cljs.core.get.call(null,p2__42984_SHARP_,key),p2__42984_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42985){
var map__42988 = p__42985;
var map__42988__$1 = ((((!((map__42988 == null)))?((((map__42988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42988):map__42988);
var f_data = map__42988__$1;
var file = cljs.core.get.call(null,map__42988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42990,files_msg){
var map__42997 = p__42990;
var map__42997__$1 = ((((!((map__42997 == null)))?((((map__42997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42997):map__42997);
var opts = map__42997__$1;
var on_cssload = cljs.core.get.call(null,map__42997__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42999_43003 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43000_43004 = null;
var count__43001_43005 = (0);
var i__43002_43006 = (0);
while(true){
if((i__43002_43006 < count__43001_43005)){
var f_43007 = cljs.core._nth.call(null,chunk__43000_43004,i__43002_43006);
figwheel.client.file_reloading.reload_css_file.call(null,f_43007);

var G__43008 = seq__42999_43003;
var G__43009 = chunk__43000_43004;
var G__43010 = count__43001_43005;
var G__43011 = (i__43002_43006 + (1));
seq__42999_43003 = G__43008;
chunk__43000_43004 = G__43009;
count__43001_43005 = G__43010;
i__43002_43006 = G__43011;
continue;
} else {
var temp__4657__auto___43012 = cljs.core.seq.call(null,seq__42999_43003);
if(temp__4657__auto___43012){
var seq__42999_43013__$1 = temp__4657__auto___43012;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42999_43013__$1)){
var c__19529__auto___43014 = cljs.core.chunk_first.call(null,seq__42999_43013__$1);
var G__43015 = cljs.core.chunk_rest.call(null,seq__42999_43013__$1);
var G__43016 = c__19529__auto___43014;
var G__43017 = cljs.core.count.call(null,c__19529__auto___43014);
var G__43018 = (0);
seq__42999_43003 = G__43015;
chunk__43000_43004 = G__43016;
count__43001_43005 = G__43017;
i__43002_43006 = G__43018;
continue;
} else {
var f_43019 = cljs.core.first.call(null,seq__42999_43013__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43019);

var G__43020 = cljs.core.next.call(null,seq__42999_43013__$1);
var G__43021 = null;
var G__43022 = (0);
var G__43023 = (0);
seq__42999_43003 = G__43020;
chunk__43000_43004 = G__43021;
count__43001_43005 = G__43022;
i__43002_43006 = G__43023;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__42997,map__42997__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__42997,map__42997__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map