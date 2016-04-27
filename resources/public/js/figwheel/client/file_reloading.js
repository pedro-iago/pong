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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39196_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39196_SHARP_));
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
var seq__39219 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39220 = null;
var count__39221 = (0);
var i__39222 = (0);
while(true){
if((i__39222 < count__39221)){
var n = cljs.core._nth.call(null,chunk__39220,i__39222);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39224 = seq__39219;
var G__39225 = chunk__39220;
var G__39226 = count__39221;
var G__39227 = (i__39222 + (1));
seq__39219 = G__39224;
chunk__39220 = G__39225;
count__39221 = G__39226;
i__39222 = G__39227;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39219);
if(temp__4657__auto__){
var seq__39219__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39219__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39219__$1);
var G__39229 = cljs.core.chunk_rest.call(null,seq__39219__$1);
var G__39230 = c__19529__auto__;
var G__39231 = cljs.core.count.call(null,c__19529__auto__);
var G__39232 = (0);
seq__39219 = G__39229;
chunk__39220 = G__39230;
count__39221 = G__39231;
i__39222 = G__39232;
continue;
} else {
var n = cljs.core.first.call(null,seq__39219__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39249 = cljs.core.next.call(null,seq__39219__$1);
var G__39250 = null;
var G__39251 = (0);
var G__39252 = (0);
seq__39219 = G__39249;
chunk__39220 = G__39250;
count__39221 = G__39251;
i__39222 = G__39252;
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

var seq__39338_39364 = cljs.core.seq.call(null,deps);
var chunk__39339_39365 = null;
var count__39340_39366 = (0);
var i__39341_39367 = (0);
while(true){
if((i__39341_39367 < count__39340_39366)){
var dep_39368 = cljs.core._nth.call(null,chunk__39339_39365,i__39341_39367);
topo_sort_helper_STAR_.call(null,dep_39368,(depth + (1)),state);

var G__39371 = seq__39338_39364;
var G__39372 = chunk__39339_39365;
var G__39373 = count__39340_39366;
var G__39374 = (i__39341_39367 + (1));
seq__39338_39364 = G__39371;
chunk__39339_39365 = G__39372;
count__39340_39366 = G__39373;
i__39341_39367 = G__39374;
continue;
} else {
var temp__4657__auto___39379 = cljs.core.seq.call(null,seq__39338_39364);
if(temp__4657__auto___39379){
var seq__39338_39380__$1 = temp__4657__auto___39379;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39338_39380__$1)){
var c__19529__auto___39381 = cljs.core.chunk_first.call(null,seq__39338_39380__$1);
var G__39382 = cljs.core.chunk_rest.call(null,seq__39338_39380__$1);
var G__39383 = c__19529__auto___39381;
var G__39384 = cljs.core.count.call(null,c__19529__auto___39381);
var G__39385 = (0);
seq__39338_39364 = G__39382;
chunk__39339_39365 = G__39383;
count__39340_39366 = G__39384;
i__39341_39367 = G__39385;
continue;
} else {
var dep_39386 = cljs.core.first.call(null,seq__39338_39380__$1);
topo_sort_helper_STAR_.call(null,dep_39386,(depth + (1)),state);

var G__39387 = cljs.core.next.call(null,seq__39338_39380__$1);
var G__39388 = null;
var G__39389 = (0);
var G__39390 = (0);
seq__39338_39364 = G__39387;
chunk__39339_39365 = G__39388;
count__39340_39366 = G__39389;
i__39341_39367 = G__39390;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39342){
var vec__39348 = p__39342;
var x = cljs.core.nth.call(null,vec__39348,(0),null);
var xs = cljs.core.nthnext.call(null,vec__39348,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39348,x,xs,get_deps__$1){
return (function (p1__39265_SHARP_){
return clojure.set.difference.call(null,p1__39265_SHARP_,x);
});})(vec__39348,x,xs,get_deps__$1))
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
var seq__39461 = cljs.core.seq.call(null,provides);
var chunk__39462 = null;
var count__39463 = (0);
var i__39464 = (0);
while(true){
if((i__39464 < count__39463)){
var prov = cljs.core._nth.call(null,chunk__39462,i__39464);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39465_39497 = cljs.core.seq.call(null,requires);
var chunk__39466_39498 = null;
var count__39467_39499 = (0);
var i__39468_39501 = (0);
while(true){
if((i__39468_39501 < count__39467_39499)){
var req_39511 = cljs.core._nth.call(null,chunk__39466_39498,i__39468_39501);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39511,prov);

var G__39513 = seq__39465_39497;
var G__39514 = chunk__39466_39498;
var G__39515 = count__39467_39499;
var G__39516 = (i__39468_39501 + (1));
seq__39465_39497 = G__39513;
chunk__39466_39498 = G__39514;
count__39467_39499 = G__39515;
i__39468_39501 = G__39516;
continue;
} else {
var temp__4657__auto___39517 = cljs.core.seq.call(null,seq__39465_39497);
if(temp__4657__auto___39517){
var seq__39465_39518__$1 = temp__4657__auto___39517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39465_39518__$1)){
var c__19529__auto___39519 = cljs.core.chunk_first.call(null,seq__39465_39518__$1);
var G__39520 = cljs.core.chunk_rest.call(null,seq__39465_39518__$1);
var G__39521 = c__19529__auto___39519;
var G__39522 = cljs.core.count.call(null,c__19529__auto___39519);
var G__39523 = (0);
seq__39465_39497 = G__39520;
chunk__39466_39498 = G__39521;
count__39467_39499 = G__39522;
i__39468_39501 = G__39523;
continue;
} else {
var req_39524 = cljs.core.first.call(null,seq__39465_39518__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39524,prov);

var G__39525 = cljs.core.next.call(null,seq__39465_39518__$1);
var G__39526 = null;
var G__39527 = (0);
var G__39528 = (0);
seq__39465_39497 = G__39525;
chunk__39466_39498 = G__39526;
count__39467_39499 = G__39527;
i__39468_39501 = G__39528;
continue;
}
} else {
}
}
break;
}

var G__39529 = seq__39461;
var G__39530 = chunk__39462;
var G__39531 = count__39463;
var G__39532 = (i__39464 + (1));
seq__39461 = G__39529;
chunk__39462 = G__39530;
count__39463 = G__39531;
i__39464 = G__39532;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39461);
if(temp__4657__auto__){
var seq__39461__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39461__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__39461__$1);
var G__39538 = cljs.core.chunk_rest.call(null,seq__39461__$1);
var G__39539 = c__19529__auto__;
var G__39540 = cljs.core.count.call(null,c__19529__auto__);
var G__39541 = (0);
seq__39461 = G__39538;
chunk__39462 = G__39539;
count__39463 = G__39540;
i__39464 = G__39541;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39461__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39469_39546 = cljs.core.seq.call(null,requires);
var chunk__39470_39547 = null;
var count__39471_39548 = (0);
var i__39472_39549 = (0);
while(true){
if((i__39472_39549 < count__39471_39548)){
var req_39550 = cljs.core._nth.call(null,chunk__39470_39547,i__39472_39549);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39550,prov);

var G__39551 = seq__39469_39546;
var G__39552 = chunk__39470_39547;
var G__39553 = count__39471_39548;
var G__39554 = (i__39472_39549 + (1));
seq__39469_39546 = G__39551;
chunk__39470_39547 = G__39552;
count__39471_39548 = G__39553;
i__39472_39549 = G__39554;
continue;
} else {
var temp__4657__auto___39555__$1 = cljs.core.seq.call(null,seq__39469_39546);
if(temp__4657__auto___39555__$1){
var seq__39469_39556__$1 = temp__4657__auto___39555__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39469_39556__$1)){
var c__19529__auto___39557 = cljs.core.chunk_first.call(null,seq__39469_39556__$1);
var G__39558 = cljs.core.chunk_rest.call(null,seq__39469_39556__$1);
var G__39559 = c__19529__auto___39557;
var G__39560 = cljs.core.count.call(null,c__19529__auto___39557);
var G__39561 = (0);
seq__39469_39546 = G__39558;
chunk__39470_39547 = G__39559;
count__39471_39548 = G__39560;
i__39472_39549 = G__39561;
continue;
} else {
var req_39562 = cljs.core.first.call(null,seq__39469_39556__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39562,prov);

var G__39563 = cljs.core.next.call(null,seq__39469_39556__$1);
var G__39564 = null;
var G__39565 = (0);
var G__39566 = (0);
seq__39469_39546 = G__39563;
chunk__39470_39547 = G__39564;
count__39471_39548 = G__39565;
i__39472_39549 = G__39566;
continue;
}
} else {
}
}
break;
}

var G__39567 = cljs.core.next.call(null,seq__39461__$1);
var G__39568 = null;
var G__39569 = (0);
var G__39570 = (0);
seq__39461 = G__39567;
chunk__39462 = G__39568;
count__39463 = G__39569;
i__39464 = G__39570;
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
var seq__39575_39579 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39576_39580 = null;
var count__39577_39581 = (0);
var i__39578_39582 = (0);
while(true){
if((i__39578_39582 < count__39577_39581)){
var ns_39583 = cljs.core._nth.call(null,chunk__39576_39580,i__39578_39582);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39583);

var G__39585 = seq__39575_39579;
var G__39586 = chunk__39576_39580;
var G__39587 = count__39577_39581;
var G__39588 = (i__39578_39582 + (1));
seq__39575_39579 = G__39585;
chunk__39576_39580 = G__39586;
count__39577_39581 = G__39587;
i__39578_39582 = G__39588;
continue;
} else {
var temp__4657__auto___39590 = cljs.core.seq.call(null,seq__39575_39579);
if(temp__4657__auto___39590){
var seq__39575_39591__$1 = temp__4657__auto___39590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39575_39591__$1)){
var c__19529__auto___39592 = cljs.core.chunk_first.call(null,seq__39575_39591__$1);
var G__39593 = cljs.core.chunk_rest.call(null,seq__39575_39591__$1);
var G__39594 = c__19529__auto___39592;
var G__39595 = cljs.core.count.call(null,c__19529__auto___39592);
var G__39596 = (0);
seq__39575_39579 = G__39593;
chunk__39576_39580 = G__39594;
count__39577_39581 = G__39595;
i__39578_39582 = G__39596;
continue;
} else {
var ns_39597 = cljs.core.first.call(null,seq__39575_39591__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39597);

var G__39598 = cljs.core.next.call(null,seq__39575_39591__$1);
var G__39599 = null;
var G__39600 = (0);
var G__39601 = (0);
seq__39575_39579 = G__39598;
chunk__39576_39580 = G__39599;
count__39577_39581 = G__39600;
i__39578_39582 = G__39601;
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
var G__39602__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39602 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39603__i = 0, G__39603__a = new Array(arguments.length -  0);
while (G__39603__i < G__39603__a.length) {G__39603__a[G__39603__i] = arguments[G__39603__i + 0]; ++G__39603__i;}
  args = new cljs.core.IndexedSeq(G__39603__a,0);
} 
return G__39602__delegate.call(this,args);};
G__39602.cljs$lang$maxFixedArity = 0;
G__39602.cljs$lang$applyTo = (function (arglist__39604){
var args = cljs.core.seq(arglist__39604);
return G__39602__delegate(args);
});
G__39602.cljs$core$IFn$_invoke$arity$variadic = G__39602__delegate;
return G__39602;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39606 = cljs.core._EQ_;
var expr__39607 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39606.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39607))){
var path_parts = ((function (pred__39606,expr__39607){
return (function (p1__39605_SHARP_){
return clojure.string.split.call(null,p1__39605_SHARP_,/[\/\\]/);
});})(pred__39606,expr__39607))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__39606,expr__39607){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39609){if((e39609 instanceof Error)){
var e = e39609;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39609;

}
}})());
});
;})(path_parts,sep,root,pred__39606,expr__39607))
} else {
if(cljs.core.truth_(pred__39606.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39607))){
return ((function (pred__39606,expr__39607){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__39606,expr__39607){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__39606,expr__39607))
);

return deferred.addErrback(((function (deferred,pred__39606,expr__39607){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__39606,expr__39607))
);
});
;})(pred__39606,expr__39607))
} else {
return ((function (pred__39606,expr__39607){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39606,expr__39607))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39610,callback){
var map__39613 = p__39610;
var map__39613__$1 = ((((!((map__39613 == null)))?((((map__39613.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39613.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39613):map__39613);
var file_msg = map__39613__$1;
var request_url = cljs.core.get.call(null,map__39613__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39613,map__39613__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39613,map__39613__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__){
return (function (state_39637){
var state_val_39638 = (state_39637[(1)]);
if((state_val_39638 === (7))){
var inst_39633 = (state_39637[(2)]);
var state_39637__$1 = state_39637;
var statearr_39639_39661 = state_39637__$1;
(statearr_39639_39661[(2)] = inst_39633);

(statearr_39639_39661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (1))){
var state_39637__$1 = state_39637;
var statearr_39640_39662 = state_39637__$1;
(statearr_39640_39662[(2)] = null);

(statearr_39640_39662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (4))){
var inst_39617 = (state_39637[(7)]);
var inst_39617__$1 = (state_39637[(2)]);
var state_39637__$1 = (function (){var statearr_39641 = state_39637;
(statearr_39641[(7)] = inst_39617__$1);

return statearr_39641;
})();
if(cljs.core.truth_(inst_39617__$1)){
var statearr_39642_39664 = state_39637__$1;
(statearr_39642_39664[(1)] = (5));

} else {
var statearr_39643_39665 = state_39637__$1;
(statearr_39643_39665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (6))){
var state_39637__$1 = state_39637;
var statearr_39644_39666 = state_39637__$1;
(statearr_39644_39666[(2)] = null);

(statearr_39644_39666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (3))){
var inst_39635 = (state_39637[(2)]);
var state_39637__$1 = state_39637;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39637__$1,inst_39635);
} else {
if((state_val_39638 === (2))){
var state_39637__$1 = state_39637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39637__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39638 === (11))){
var inst_39629 = (state_39637[(2)]);
var state_39637__$1 = (function (){var statearr_39645 = state_39637;
(statearr_39645[(8)] = inst_39629);

return statearr_39645;
})();
var statearr_39646_39669 = state_39637__$1;
(statearr_39646_39669[(2)] = null);

(statearr_39646_39669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (9))){
var inst_39621 = (state_39637[(9)]);
var inst_39623 = (state_39637[(10)]);
var inst_39625 = inst_39623.call(null,inst_39621);
var state_39637__$1 = state_39637;
var statearr_39647_39670 = state_39637__$1;
(statearr_39647_39670[(2)] = inst_39625);

(statearr_39647_39670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (5))){
var inst_39617 = (state_39637[(7)]);
var inst_39619 = figwheel.client.file_reloading.blocking_load.call(null,inst_39617);
var state_39637__$1 = state_39637;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39637__$1,(8),inst_39619);
} else {
if((state_val_39638 === (10))){
var inst_39621 = (state_39637[(9)]);
var inst_39627 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39621);
var state_39637__$1 = state_39637;
var statearr_39650_39672 = state_39637__$1;
(statearr_39650_39672[(2)] = inst_39627);

(statearr_39650_39672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39638 === (8))){
var inst_39617 = (state_39637[(7)]);
var inst_39623 = (state_39637[(10)]);
var inst_39621 = (state_39637[(2)]);
var inst_39622 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39623__$1 = cljs.core.get.call(null,inst_39622,inst_39617);
var state_39637__$1 = (function (){var statearr_39651 = state_39637;
(statearr_39651[(9)] = inst_39621);

(statearr_39651[(10)] = inst_39623__$1);

return statearr_39651;
})();
if(cljs.core.truth_(inst_39623__$1)){
var statearr_39652_39674 = state_39637__$1;
(statearr_39652_39674[(1)] = (9));

} else {
var statearr_39653_39675 = state_39637__$1;
(statearr_39653_39675[(1)] = (10));

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
});})(c__32393__auto__))
;
return ((function (switch__32005__auto__,c__32393__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32006__auto__ = null;
var figwheel$client$file_reloading$state_machine__32006__auto____0 = (function (){
var statearr_39657 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39657[(0)] = figwheel$client$file_reloading$state_machine__32006__auto__);

(statearr_39657[(1)] = (1));

return statearr_39657;
});
var figwheel$client$file_reloading$state_machine__32006__auto____1 = (function (state_39637){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_39637);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e39658){if((e39658 instanceof Object)){
var ex__32009__auto__ = e39658;
var statearr_39659_39676 = state_39637;
(statearr_39659_39676[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39637);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39678 = state_39637;
state_39637 = G__39678;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32006__auto__ = function(state_39637){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32006__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32006__auto____1.call(this,state_39637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32006__auto____0;
figwheel$client$file_reloading$state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32006__auto____1;
return figwheel$client$file_reloading$state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__))
})();
var state__32395__auto__ = (function (){var statearr_39660 = f__32394__auto__.call(null);
(statearr_39660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_39660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__))
);

return c__32393__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39684,callback){
var map__39688 = p__39684;
var map__39688__$1 = ((((!((map__39688 == null)))?((((map__39688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39688):map__39688);
var file_msg = map__39688__$1;
var namespace = cljs.core.get.call(null,map__39688__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39688,map__39688__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39688,map__39688__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39691){
var map__39694 = p__39691;
var map__39694__$1 = ((((!((map__39694 == null)))?((((map__39694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39694):map__39694);
var file_msg = map__39694__$1;
var namespace = cljs.core.get.call(null,map__39694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39696,callback){
var map__39699 = p__39696;
var map__39699__$1 = ((((!((map__39699 == null)))?((((map__39699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39699):map__39699);
var file_msg = map__39699__$1;
var request_url = cljs.core.get.call(null,map__39699__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39699__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32393__auto___39794 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___39794,out){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___39794,out){
return (function (state_39773){
var state_val_39774 = (state_39773[(1)]);
if((state_val_39774 === (1))){
var inst_39751 = cljs.core.nth.call(null,files,(0),null);
var inst_39752 = cljs.core.nthnext.call(null,files,(1));
var inst_39753 = files;
var state_39773__$1 = (function (){var statearr_39775 = state_39773;
(statearr_39775[(7)] = inst_39752);

(statearr_39775[(8)] = inst_39753);

(statearr_39775[(9)] = inst_39751);

return statearr_39775;
})();
var statearr_39776_39796 = state_39773__$1;
(statearr_39776_39796[(2)] = null);

(statearr_39776_39796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (2))){
var inst_39756 = (state_39773[(10)]);
var inst_39753 = (state_39773[(8)]);
var inst_39756__$1 = cljs.core.nth.call(null,inst_39753,(0),null);
var inst_39757 = cljs.core.nthnext.call(null,inst_39753,(1));
var inst_39758 = (inst_39756__$1 == null);
var inst_39759 = cljs.core.not.call(null,inst_39758);
var state_39773__$1 = (function (){var statearr_39777 = state_39773;
(statearr_39777[(10)] = inst_39756__$1);

(statearr_39777[(11)] = inst_39757);

return statearr_39777;
})();
if(inst_39759){
var statearr_39778_39798 = state_39773__$1;
(statearr_39778_39798[(1)] = (4));

} else {
var statearr_39779_39799 = state_39773__$1;
(statearr_39779_39799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (3))){
var inst_39771 = (state_39773[(2)]);
var state_39773__$1 = state_39773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39773__$1,inst_39771);
} else {
if((state_val_39774 === (4))){
var inst_39756 = (state_39773[(10)]);
var inst_39761 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39756);
var state_39773__$1 = state_39773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39773__$1,(7),inst_39761);
} else {
if((state_val_39774 === (5))){
var inst_39767 = cljs.core.async.close_BANG_.call(null,out);
var state_39773__$1 = state_39773;
var statearr_39780_39801 = state_39773__$1;
(statearr_39780_39801[(2)] = inst_39767);

(statearr_39780_39801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (6))){
var inst_39769 = (state_39773[(2)]);
var state_39773__$1 = state_39773;
var statearr_39781_39802 = state_39773__$1;
(statearr_39781_39802[(2)] = inst_39769);

(statearr_39781_39802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39774 === (7))){
var inst_39757 = (state_39773[(11)]);
var inst_39763 = (state_39773[(2)]);
var inst_39764 = cljs.core.async.put_BANG_.call(null,out,inst_39763);
var inst_39753 = inst_39757;
var state_39773__$1 = (function (){var statearr_39782 = state_39773;
(statearr_39782[(8)] = inst_39753);

(statearr_39782[(12)] = inst_39764);

return statearr_39782;
})();
var statearr_39783_39803 = state_39773__$1;
(statearr_39783_39803[(2)] = null);

(statearr_39783_39803[(1)] = (2));


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
});})(c__32393__auto___39794,out))
;
return ((function (switch__32005__auto__,c__32393__auto___39794,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto____0 = (function (){
var statearr_39787 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39787[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto__);

(statearr_39787[(1)] = (1));

return statearr_39787;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto____1 = (function (state_39773){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_39773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e39788){if((e39788 instanceof Object)){
var ex__32009__auto__ = e39788;
var statearr_39789_39805 = state_39773;
(statearr_39789_39805[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39806 = state_39773;
state_39773 = G__39806;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto__ = function(state_39773){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto____1.call(this,state_39773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___39794,out))
})();
var state__32395__auto__ = (function (){var statearr_39790 = f__32394__auto__.call(null);
(statearr_39790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___39794);

return statearr_39790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___39794,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39807,opts){
var map__39811 = p__39807;
var map__39811__$1 = ((((!((map__39811 == null)))?((((map__39811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39811):map__39811);
var eval_body__$1 = cljs.core.get.call(null,map__39811__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e39813){var e = e39813;
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
return (function (p1__39814_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39814_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__39823){
var vec__39824 = p__39823;
var k = cljs.core.nth.call(null,vec__39824,(0),null);
var v = cljs.core.nth.call(null,vec__39824,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39825){
var vec__39826 = p__39825;
var k = cljs.core.nth.call(null,vec__39826,(0),null);
var v = cljs.core.nth.call(null,vec__39826,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39831,p__39832){
var map__40093 = p__39831;
var map__40093__$1 = ((((!((map__40093 == null)))?((((map__40093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40093):map__40093);
var opts = map__40093__$1;
var before_jsload = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40093__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40094 = p__39832;
var map__40094__$1 = ((((!((map__40094 == null)))?((((map__40094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40094):map__40094);
var msg = map__40094__$1;
var files = cljs.core.get.call(null,map__40094__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40094__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40094__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40249){
var state_val_40250 = (state_40249[(1)]);
if((state_val_40250 === (7))){
var inst_40109 = (state_40249[(7)]);
var inst_40111 = (state_40249[(8)]);
var inst_40110 = (state_40249[(9)]);
var inst_40108 = (state_40249[(10)]);
var inst_40116 = cljs.core._nth.call(null,inst_40109,inst_40111);
var inst_40117 = figwheel.client.file_reloading.eval_body.call(null,inst_40116,opts);
var inst_40118 = (inst_40111 + (1));
var tmp40251 = inst_40109;
var tmp40252 = inst_40110;
var tmp40253 = inst_40108;
var inst_40108__$1 = tmp40253;
var inst_40109__$1 = tmp40251;
var inst_40110__$1 = tmp40252;
var inst_40111__$1 = inst_40118;
var state_40249__$1 = (function (){var statearr_40254 = state_40249;
(statearr_40254[(7)] = inst_40109__$1);

(statearr_40254[(8)] = inst_40111__$1);

(statearr_40254[(9)] = inst_40110__$1);

(statearr_40254[(11)] = inst_40117);

(statearr_40254[(10)] = inst_40108__$1);

return statearr_40254;
})();
var statearr_40255_40369 = state_40249__$1;
(statearr_40255_40369[(2)] = null);

(statearr_40255_40369[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (20))){
var inst_40152 = (state_40249[(12)]);
var inst_40160 = figwheel.client.file_reloading.sort_files.call(null,inst_40152);
var state_40249__$1 = state_40249;
var statearr_40256_40370 = state_40249__$1;
(statearr_40256_40370[(2)] = inst_40160);

(statearr_40256_40370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (27))){
var state_40249__$1 = state_40249;
var statearr_40257_40371 = state_40249__$1;
(statearr_40257_40371[(2)] = null);

(statearr_40257_40371[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (1))){
var inst_40100 = (state_40249[(13)]);
var inst_40097 = before_jsload.call(null,files);
var inst_40098 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40099 = (function (){return ((function (inst_40100,inst_40097,inst_40098,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39828_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39828_SHARP_);
});
;})(inst_40100,inst_40097,inst_40098,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40100__$1 = cljs.core.filter.call(null,inst_40099,files);
var inst_40101 = cljs.core.not_empty.call(null,inst_40100__$1);
var state_40249__$1 = (function (){var statearr_40258 = state_40249;
(statearr_40258[(13)] = inst_40100__$1);

(statearr_40258[(14)] = inst_40098);

(statearr_40258[(15)] = inst_40097);

return statearr_40258;
})();
if(cljs.core.truth_(inst_40101)){
var statearr_40259_40372 = state_40249__$1;
(statearr_40259_40372[(1)] = (2));

} else {
var statearr_40260_40373 = state_40249__$1;
(statearr_40260_40373[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (24))){
var state_40249__$1 = state_40249;
var statearr_40261_40374 = state_40249__$1;
(statearr_40261_40374[(2)] = null);

(statearr_40261_40374[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (39))){
var inst_40202 = (state_40249[(16)]);
var state_40249__$1 = state_40249;
var statearr_40262_40375 = state_40249__$1;
(statearr_40262_40375[(2)] = inst_40202);

(statearr_40262_40375[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (46))){
var inst_40243 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40263_40376 = state_40249__$1;
(statearr_40263_40376[(2)] = inst_40243);

(statearr_40263_40376[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (4))){
var inst_40146 = (state_40249[(2)]);
var inst_40147 = cljs.core.List.EMPTY;
var inst_40148 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40147);
var inst_40149 = (function (){return ((function (inst_40146,inst_40147,inst_40148,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39829_SHARP_){
var and__18714__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39829_SHARP_);
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39829_SHARP_));
} else {
return and__18714__auto__;
}
});
;})(inst_40146,inst_40147,inst_40148,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40150 = cljs.core.filter.call(null,inst_40149,files);
var inst_40151 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40152 = cljs.core.concat.call(null,inst_40150,inst_40151);
var state_40249__$1 = (function (){var statearr_40264 = state_40249;
(statearr_40264[(12)] = inst_40152);

(statearr_40264[(17)] = inst_40148);

(statearr_40264[(18)] = inst_40146);

return statearr_40264;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40265_40377 = state_40249__$1;
(statearr_40265_40377[(1)] = (16));

} else {
var statearr_40266_40378 = state_40249__$1;
(statearr_40266_40378[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (15))){
var inst_40136 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40267_40379 = state_40249__$1;
(statearr_40267_40379[(2)] = inst_40136);

(statearr_40267_40379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (21))){
var inst_40162 = (state_40249[(19)]);
var inst_40162__$1 = (state_40249[(2)]);
var inst_40163 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40162__$1);
var state_40249__$1 = (function (){var statearr_40268 = state_40249;
(statearr_40268[(19)] = inst_40162__$1);

return statearr_40268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40249__$1,(22),inst_40163);
} else {
if((state_val_40250 === (31))){
var inst_40246 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40249__$1,inst_40246);
} else {
if((state_val_40250 === (32))){
var inst_40202 = (state_40249[(16)]);
var inst_40207 = inst_40202.cljs$lang$protocol_mask$partition0$;
var inst_40208 = (inst_40207 & (64));
var inst_40209 = inst_40202.cljs$core$ISeq$;
var inst_40210 = (inst_40208) || (inst_40209);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40210)){
var statearr_40269_40380 = state_40249__$1;
(statearr_40269_40380[(1)] = (35));

} else {
var statearr_40270_40381 = state_40249__$1;
(statearr_40270_40381[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (40))){
var inst_40223 = (state_40249[(20)]);
var inst_40222 = (state_40249[(2)]);
var inst_40223__$1 = cljs.core.get.call(null,inst_40222,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40224 = cljs.core.get.call(null,inst_40222,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40225 = cljs.core.not_empty.call(null,inst_40223__$1);
var state_40249__$1 = (function (){var statearr_40271 = state_40249;
(statearr_40271[(20)] = inst_40223__$1);

(statearr_40271[(21)] = inst_40224);

return statearr_40271;
})();
if(cljs.core.truth_(inst_40225)){
var statearr_40272_40382 = state_40249__$1;
(statearr_40272_40382[(1)] = (41));

} else {
var statearr_40273_40383 = state_40249__$1;
(statearr_40273_40383[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (33))){
var state_40249__$1 = state_40249;
var statearr_40274_40384 = state_40249__$1;
(statearr_40274_40384[(2)] = false);

(statearr_40274_40384[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (13))){
var inst_40121 = (state_40249[(22)]);
var inst_40126 = cljs.core.chunk_first.call(null,inst_40121);
var inst_40127 = cljs.core.chunk_rest.call(null,inst_40121);
var inst_40128 = cljs.core.count.call(null,inst_40126);
var inst_40108 = inst_40127;
var inst_40109 = inst_40126;
var inst_40110 = inst_40128;
var inst_40111 = (0);
var state_40249__$1 = (function (){var statearr_40275 = state_40249;
(statearr_40275[(7)] = inst_40109);

(statearr_40275[(8)] = inst_40111);

(statearr_40275[(9)] = inst_40110);

(statearr_40275[(10)] = inst_40108);

return statearr_40275;
})();
var statearr_40276_40385 = state_40249__$1;
(statearr_40276_40385[(2)] = null);

(statearr_40276_40385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (22))){
var inst_40170 = (state_40249[(23)]);
var inst_40162 = (state_40249[(19)]);
var inst_40165 = (state_40249[(24)]);
var inst_40166 = (state_40249[(25)]);
var inst_40165__$1 = (state_40249[(2)]);
var inst_40166__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40165__$1);
var inst_40167 = (function (){var all_files = inst_40162;
var res_SINGLEQUOTE_ = inst_40165__$1;
var res = inst_40166__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40170,inst_40162,inst_40165,inst_40166,inst_40165__$1,inst_40166__$1,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39830_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39830_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40170,inst_40162,inst_40165,inst_40166,inst_40165__$1,inst_40166__$1,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40168 = cljs.core.filter.call(null,inst_40167,inst_40165__$1);
var inst_40169 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40170__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40169);
var inst_40171 = cljs.core.not_empty.call(null,inst_40170__$1);
var state_40249__$1 = (function (){var statearr_40277 = state_40249;
(statearr_40277[(23)] = inst_40170__$1);

(statearr_40277[(24)] = inst_40165__$1);

(statearr_40277[(25)] = inst_40166__$1);

(statearr_40277[(26)] = inst_40168);

return statearr_40277;
})();
if(cljs.core.truth_(inst_40171)){
var statearr_40278_40387 = state_40249__$1;
(statearr_40278_40387[(1)] = (23));

} else {
var statearr_40279_40388 = state_40249__$1;
(statearr_40279_40388[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (36))){
var state_40249__$1 = state_40249;
var statearr_40280_40389 = state_40249__$1;
(statearr_40280_40389[(2)] = false);

(statearr_40280_40389[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (41))){
var inst_40223 = (state_40249[(20)]);
var inst_40227 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40228 = cljs.core.map.call(null,inst_40227,inst_40223);
var inst_40229 = cljs.core.pr_str.call(null,inst_40228);
var inst_40230 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40229)].join('');
var inst_40231 = figwheel.client.utils.log.call(null,inst_40230);
var state_40249__$1 = state_40249;
var statearr_40281_40391 = state_40249__$1;
(statearr_40281_40391[(2)] = inst_40231);

(statearr_40281_40391[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (43))){
var inst_40224 = (state_40249[(21)]);
var inst_40234 = (state_40249[(2)]);
var inst_40235 = cljs.core.not_empty.call(null,inst_40224);
var state_40249__$1 = (function (){var statearr_40283 = state_40249;
(statearr_40283[(27)] = inst_40234);

return statearr_40283;
})();
if(cljs.core.truth_(inst_40235)){
var statearr_40286_40392 = state_40249__$1;
(statearr_40286_40392[(1)] = (44));

} else {
var statearr_40290_40393 = state_40249__$1;
(statearr_40290_40393[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (29))){
var inst_40170 = (state_40249[(23)]);
var inst_40162 = (state_40249[(19)]);
var inst_40202 = (state_40249[(16)]);
var inst_40165 = (state_40249[(24)]);
var inst_40166 = (state_40249[(25)]);
var inst_40168 = (state_40249[(26)]);
var inst_40198 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40201 = (function (){var all_files = inst_40162;
var res_SINGLEQUOTE_ = inst_40165;
var res = inst_40166;
var files_not_loaded = inst_40168;
var dependencies_that_loaded = inst_40170;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40202,inst_40165,inst_40166,inst_40168,inst_40198,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40200){
var map__40309 = p__40200;
var map__40309__$1 = ((((!((map__40309 == null)))?((((map__40309.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40309.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40309):map__40309);
var namespace = cljs.core.get.call(null,map__40309__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40202,inst_40165,inst_40166,inst_40168,inst_40198,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40202__$1 = cljs.core.group_by.call(null,inst_40201,inst_40168);
var inst_40204 = (inst_40202__$1 == null);
var inst_40205 = cljs.core.not.call(null,inst_40204);
var state_40249__$1 = (function (){var statearr_40315 = state_40249;
(statearr_40315[(28)] = inst_40198);

(statearr_40315[(16)] = inst_40202__$1);

return statearr_40315;
})();
if(inst_40205){
var statearr_40316_40395 = state_40249__$1;
(statearr_40316_40395[(1)] = (32));

} else {
var statearr_40317_40396 = state_40249__$1;
(statearr_40317_40396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (44))){
var inst_40224 = (state_40249[(21)]);
var inst_40237 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40224);
var inst_40238 = cljs.core.pr_str.call(null,inst_40237);
var inst_40239 = [cljs.core.str("not required: "),cljs.core.str(inst_40238)].join('');
var inst_40240 = figwheel.client.utils.log.call(null,inst_40239);
var state_40249__$1 = state_40249;
var statearr_40318_40397 = state_40249__$1;
(statearr_40318_40397[(2)] = inst_40240);

(statearr_40318_40397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (6))){
var inst_40143 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40319_40398 = state_40249__$1;
(statearr_40319_40398[(2)] = inst_40143);

(statearr_40319_40398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (28))){
var inst_40168 = (state_40249[(26)]);
var inst_40195 = (state_40249[(2)]);
var inst_40196 = cljs.core.not_empty.call(null,inst_40168);
var state_40249__$1 = (function (){var statearr_40320 = state_40249;
(statearr_40320[(29)] = inst_40195);

return statearr_40320;
})();
if(cljs.core.truth_(inst_40196)){
var statearr_40321_40399 = state_40249__$1;
(statearr_40321_40399[(1)] = (29));

} else {
var statearr_40322_40400 = state_40249__$1;
(statearr_40322_40400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (25))){
var inst_40166 = (state_40249[(25)]);
var inst_40182 = (state_40249[(2)]);
var inst_40183 = cljs.core.not_empty.call(null,inst_40166);
var state_40249__$1 = (function (){var statearr_40323 = state_40249;
(statearr_40323[(30)] = inst_40182);

return statearr_40323;
})();
if(cljs.core.truth_(inst_40183)){
var statearr_40324_40402 = state_40249__$1;
(statearr_40324_40402[(1)] = (26));

} else {
var statearr_40325_40403 = state_40249__$1;
(statearr_40325_40403[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (34))){
var inst_40217 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40217)){
var statearr_40326_40404 = state_40249__$1;
(statearr_40326_40404[(1)] = (38));

} else {
var statearr_40327_40405 = state_40249__$1;
(statearr_40327_40405[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (17))){
var state_40249__$1 = state_40249;
var statearr_40328_40406 = state_40249__$1;
(statearr_40328_40406[(2)] = recompile_dependents);

(statearr_40328_40406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (3))){
var state_40249__$1 = state_40249;
var statearr_40329_40407 = state_40249__$1;
(statearr_40329_40407[(2)] = null);

(statearr_40329_40407[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (12))){
var inst_40139 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40330_40409 = state_40249__$1;
(statearr_40330_40409[(2)] = inst_40139);

(statearr_40330_40409[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (2))){
var inst_40100 = (state_40249[(13)]);
var inst_40107 = cljs.core.seq.call(null,inst_40100);
var inst_40108 = inst_40107;
var inst_40109 = null;
var inst_40110 = (0);
var inst_40111 = (0);
var state_40249__$1 = (function (){var statearr_40331 = state_40249;
(statearr_40331[(7)] = inst_40109);

(statearr_40331[(8)] = inst_40111);

(statearr_40331[(9)] = inst_40110);

(statearr_40331[(10)] = inst_40108);

return statearr_40331;
})();
var statearr_40332_40410 = state_40249__$1;
(statearr_40332_40410[(2)] = null);

(statearr_40332_40410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (23))){
var inst_40170 = (state_40249[(23)]);
var inst_40162 = (state_40249[(19)]);
var inst_40165 = (state_40249[(24)]);
var inst_40166 = (state_40249[(25)]);
var inst_40168 = (state_40249[(26)]);
var inst_40173 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40175 = (function (){var all_files = inst_40162;
var res_SINGLEQUOTE_ = inst_40165;
var res = inst_40166;
var files_not_loaded = inst_40168;
var dependencies_that_loaded = inst_40170;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40165,inst_40166,inst_40168,inst_40173,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40174){
var map__40333 = p__40174;
var map__40333__$1 = ((((!((map__40333 == null)))?((((map__40333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40333):map__40333);
var request_url = cljs.core.get.call(null,map__40333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40165,inst_40166,inst_40168,inst_40173,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40176 = cljs.core.reverse.call(null,inst_40170);
var inst_40177 = cljs.core.map.call(null,inst_40175,inst_40176);
var inst_40178 = cljs.core.pr_str.call(null,inst_40177);
var inst_40179 = figwheel.client.utils.log.call(null,inst_40178);
var state_40249__$1 = (function (){var statearr_40335 = state_40249;
(statearr_40335[(31)] = inst_40173);

return statearr_40335;
})();
var statearr_40336_40413 = state_40249__$1;
(statearr_40336_40413[(2)] = inst_40179);

(statearr_40336_40413[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (35))){
var state_40249__$1 = state_40249;
var statearr_40337_40414 = state_40249__$1;
(statearr_40337_40414[(2)] = true);

(statearr_40337_40414[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (19))){
var inst_40152 = (state_40249[(12)]);
var inst_40158 = figwheel.client.file_reloading.expand_files.call(null,inst_40152);
var state_40249__$1 = state_40249;
var statearr_40338_40415 = state_40249__$1;
(statearr_40338_40415[(2)] = inst_40158);

(statearr_40338_40415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (11))){
var state_40249__$1 = state_40249;
var statearr_40339_40416 = state_40249__$1;
(statearr_40339_40416[(2)] = null);

(statearr_40339_40416[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (9))){
var inst_40141 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40340_40417 = state_40249__$1;
(statearr_40340_40417[(2)] = inst_40141);

(statearr_40340_40417[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (5))){
var inst_40111 = (state_40249[(8)]);
var inst_40110 = (state_40249[(9)]);
var inst_40113 = (inst_40111 < inst_40110);
var inst_40114 = inst_40113;
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40114)){
var statearr_40341_40418 = state_40249__$1;
(statearr_40341_40418[(1)] = (7));

} else {
var statearr_40342_40419 = state_40249__$1;
(statearr_40342_40419[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (14))){
var inst_40121 = (state_40249[(22)]);
var inst_40131 = cljs.core.first.call(null,inst_40121);
var inst_40132 = figwheel.client.file_reloading.eval_body.call(null,inst_40131,opts);
var inst_40133 = cljs.core.next.call(null,inst_40121);
var inst_40108 = inst_40133;
var inst_40109 = null;
var inst_40110 = (0);
var inst_40111 = (0);
var state_40249__$1 = (function (){var statearr_40343 = state_40249;
(statearr_40343[(7)] = inst_40109);

(statearr_40343[(8)] = inst_40111);

(statearr_40343[(32)] = inst_40132);

(statearr_40343[(9)] = inst_40110);

(statearr_40343[(10)] = inst_40108);

return statearr_40343;
})();
var statearr_40344_40420 = state_40249__$1;
(statearr_40344_40420[(2)] = null);

(statearr_40344_40420[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (45))){
var state_40249__$1 = state_40249;
var statearr_40345_40421 = state_40249__$1;
(statearr_40345_40421[(2)] = null);

(statearr_40345_40421[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (26))){
var inst_40170 = (state_40249[(23)]);
var inst_40162 = (state_40249[(19)]);
var inst_40165 = (state_40249[(24)]);
var inst_40166 = (state_40249[(25)]);
var inst_40168 = (state_40249[(26)]);
var inst_40185 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40187 = (function (){var all_files = inst_40162;
var res_SINGLEQUOTE_ = inst_40165;
var res = inst_40166;
var files_not_loaded = inst_40168;
var dependencies_that_loaded = inst_40170;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40165,inst_40166,inst_40168,inst_40185,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40186){
var map__40346 = p__40186;
var map__40346__$1 = ((((!((map__40346 == null)))?((((map__40346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40346):map__40346);
var namespace = cljs.core.get.call(null,map__40346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40165,inst_40166,inst_40168,inst_40185,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40188 = cljs.core.map.call(null,inst_40187,inst_40166);
var inst_40189 = cljs.core.pr_str.call(null,inst_40188);
var inst_40190 = figwheel.client.utils.log.call(null,inst_40189);
var inst_40191 = (function (){var all_files = inst_40162;
var res_SINGLEQUOTE_ = inst_40165;
var res = inst_40166;
var files_not_loaded = inst_40168;
var dependencies_that_loaded = inst_40170;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40165,inst_40166,inst_40168,inst_40185,inst_40187,inst_40188,inst_40189,inst_40190,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40170,inst_40162,inst_40165,inst_40166,inst_40168,inst_40185,inst_40187,inst_40188,inst_40189,inst_40190,state_val_40250,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40192 = setTimeout(inst_40191,(10));
var state_40249__$1 = (function (){var statearr_40348 = state_40249;
(statearr_40348[(33)] = inst_40185);

(statearr_40348[(34)] = inst_40190);

return statearr_40348;
})();
var statearr_40349_40423 = state_40249__$1;
(statearr_40349_40423[(2)] = inst_40192);

(statearr_40349_40423[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (16))){
var state_40249__$1 = state_40249;
var statearr_40350_40424 = state_40249__$1;
(statearr_40350_40424[(2)] = reload_dependents);

(statearr_40350_40424[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (38))){
var inst_40202 = (state_40249[(16)]);
var inst_40219 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40202);
var state_40249__$1 = state_40249;
var statearr_40351_40425 = state_40249__$1;
(statearr_40351_40425[(2)] = inst_40219);

(statearr_40351_40425[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (30))){
var state_40249__$1 = state_40249;
var statearr_40352_40426 = state_40249__$1;
(statearr_40352_40426[(2)] = null);

(statearr_40352_40426[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (10))){
var inst_40121 = (state_40249[(22)]);
var inst_40124 = cljs.core.chunked_seq_QMARK_.call(null,inst_40121);
var state_40249__$1 = state_40249;
if(inst_40124){
var statearr_40353_40427 = state_40249__$1;
(statearr_40353_40427[(1)] = (13));

} else {
var statearr_40354_40428 = state_40249__$1;
(statearr_40354_40428[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (18))){
var inst_40156 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
if(cljs.core.truth_(inst_40156)){
var statearr_40355_40429 = state_40249__$1;
(statearr_40355_40429[(1)] = (19));

} else {
var statearr_40356_40430 = state_40249__$1;
(statearr_40356_40430[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (42))){
var state_40249__$1 = state_40249;
var statearr_40357_40431 = state_40249__$1;
(statearr_40357_40431[(2)] = null);

(statearr_40357_40431[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (37))){
var inst_40214 = (state_40249[(2)]);
var state_40249__$1 = state_40249;
var statearr_40358_40432 = state_40249__$1;
(statearr_40358_40432[(2)] = inst_40214);

(statearr_40358_40432[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40250 === (8))){
var inst_40121 = (state_40249[(22)]);
var inst_40108 = (state_40249[(10)]);
var inst_40121__$1 = cljs.core.seq.call(null,inst_40108);
var state_40249__$1 = (function (){var statearr_40359 = state_40249;
(statearr_40359[(22)] = inst_40121__$1);

return statearr_40359;
})();
if(inst_40121__$1){
var statearr_40360_40433 = state_40249__$1;
(statearr_40360_40433[(1)] = (10));

} else {
var statearr_40361_40434 = state_40249__$1;
(statearr_40361_40434[(1)] = (11));

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
});})(c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32005__auto__,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto____0 = (function (){
var statearr_40365 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40365[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto__);

(statearr_40365[(1)] = (1));

return statearr_40365;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto____1 = (function (state_40249){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_40249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e40366){if((e40366 instanceof Object)){
var ex__32009__auto__ = e40366;
var statearr_40367_40435 = state_40249;
(statearr_40367_40435[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40436 = state_40249;
state_40249 = G__40436;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto__ = function(state_40249){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto____1.call(this,state_40249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32395__auto__ = (function (){var statearr_40368 = f__32394__auto__.call(null);
(statearr_40368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_40368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__,map__40093,map__40093__$1,opts,before_jsload,on_jsload,reload_dependents,map__40094,map__40094__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32393__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40439,link){
var map__40442 = p__40439;
var map__40442__$1 = ((((!((map__40442 == null)))?((((map__40442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40442):map__40442);
var file = cljs.core.get.call(null,map__40442__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40442,map__40442__$1,file){
return (function (p1__40437_SHARP_,p2__40438_SHARP_){
if(cljs.core._EQ_.call(null,p1__40437_SHARP_,p2__40438_SHARP_)){
return p1__40437_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40442,map__40442__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40448){
var map__40449 = p__40448;
var map__40449__$1 = ((((!((map__40449 == null)))?((((map__40449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40449):map__40449);
var match_length = cljs.core.get.call(null,map__40449__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40449__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40444_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40444_SHARP_);
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
var args40459 = [];
var len__19784__auto___40463 = arguments.length;
var i__19785__auto___40464 = (0);
while(true){
if((i__19785__auto___40464 < len__19784__auto___40463)){
args40459.push((arguments[i__19785__auto___40464]));

var G__40465 = (i__19785__auto___40464 + (1));
i__19785__auto___40464 = G__40465;
continue;
} else {
}
break;
}

var G__40462 = args40459.length;
switch (G__40462) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40459.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40468_SHARP_,p2__40469_SHARP_){
return cljs.core.assoc.call(null,p1__40468_SHARP_,cljs.core.get.call(null,p2__40469_SHARP_,key),p2__40469_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__40473){
var map__40476 = p__40473;
var map__40476__$1 = ((((!((map__40476 == null)))?((((map__40476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40476):map__40476);
var f_data = map__40476__$1;
var file = cljs.core.get.call(null,map__40476__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40479,files_msg){
var map__40487 = p__40479;
var map__40487__$1 = ((((!((map__40487 == null)))?((((map__40487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40487):map__40487);
var opts = map__40487__$1;
var on_cssload = cljs.core.get.call(null,map__40487__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__40489_40493 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__40490_40494 = null;
var count__40491_40495 = (0);
var i__40492_40496 = (0);
while(true){
if((i__40492_40496 < count__40491_40495)){
var f_40497 = cljs.core._nth.call(null,chunk__40490_40494,i__40492_40496);
figwheel.client.file_reloading.reload_css_file.call(null,f_40497);

var G__40499 = seq__40489_40493;
var G__40500 = chunk__40490_40494;
var G__40501 = count__40491_40495;
var G__40502 = (i__40492_40496 + (1));
seq__40489_40493 = G__40499;
chunk__40490_40494 = G__40500;
count__40491_40495 = G__40501;
i__40492_40496 = G__40502;
continue;
} else {
var temp__4657__auto___40503 = cljs.core.seq.call(null,seq__40489_40493);
if(temp__4657__auto___40503){
var seq__40489_40504__$1 = temp__4657__auto___40503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40489_40504__$1)){
var c__19529__auto___40505 = cljs.core.chunk_first.call(null,seq__40489_40504__$1);
var G__40506 = cljs.core.chunk_rest.call(null,seq__40489_40504__$1);
var G__40507 = c__19529__auto___40505;
var G__40508 = cljs.core.count.call(null,c__19529__auto___40505);
var G__40509 = (0);
seq__40489_40493 = G__40506;
chunk__40490_40494 = G__40507;
count__40491_40495 = G__40508;
i__40492_40496 = G__40509;
continue;
} else {
var f_40510 = cljs.core.first.call(null,seq__40489_40504__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_40510);

var G__40511 = cljs.core.next.call(null,seq__40489_40504__$1);
var G__40512 = null;
var G__40513 = (0);
var G__40514 = (0);
seq__40489_40493 = G__40511;
chunk__40490_40494 = G__40512;
count__40491_40495 = G__40513;
i__40492_40496 = G__40514;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__40487,map__40487__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__40487,map__40487__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map