// Compiled by ClojureScript 1.7.170 {}
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
figwheel.client.file_reloading.queued_file_reload;
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
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
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
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25357_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25357_SHARP_));
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
var seq__25362 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25363 = null;
var count__25364 = (0);
var i__25365 = (0);
while(true){
if((i__25365 < count__25364)){
var n = cljs.core._nth.call(null,chunk__25363,i__25365);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25366 = seq__25362;
var G__25367 = chunk__25363;
var G__25368 = count__25364;
var G__25369 = (i__25365 + (1));
seq__25362 = G__25366;
chunk__25363 = G__25367;
count__25364 = G__25368;
i__25365 = G__25369;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25362);
if(temp__4425__auto__){
var seq__25362__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25362__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25362__$1);
var G__25370 = cljs.core.chunk_rest.call(null,seq__25362__$1);
var G__25371 = c__17574__auto__;
var G__25372 = cljs.core.count.call(null,c__17574__auto__);
var G__25373 = (0);
seq__25362 = G__25370;
chunk__25363 = G__25371;
count__25364 = G__25372;
i__25365 = G__25373;
continue;
} else {
var n = cljs.core.first.call(null,seq__25362__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25374 = cljs.core.next.call(null,seq__25362__$1);
var G__25375 = null;
var G__25376 = (0);
var G__25377 = (0);
seq__25362 = G__25374;
chunk__25363 = G__25375;
count__25364 = G__25376;
i__25365 = G__25377;
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

var seq__25416_25423 = cljs.core.seq.call(null,deps);
var chunk__25417_25424 = null;
var count__25418_25425 = (0);
var i__25419_25426 = (0);
while(true){
if((i__25419_25426 < count__25418_25425)){
var dep_25427 = cljs.core._nth.call(null,chunk__25417_25424,i__25419_25426);
topo_sort_helper_STAR_.call(null,dep_25427,(depth + (1)),state);

var G__25428 = seq__25416_25423;
var G__25429 = chunk__25417_25424;
var G__25430 = count__25418_25425;
var G__25431 = (i__25419_25426 + (1));
seq__25416_25423 = G__25428;
chunk__25417_25424 = G__25429;
count__25418_25425 = G__25430;
i__25419_25426 = G__25431;
continue;
} else {
var temp__4425__auto___25432 = cljs.core.seq.call(null,seq__25416_25423);
if(temp__4425__auto___25432){
var seq__25416_25433__$1 = temp__4425__auto___25432;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25416_25433__$1)){
var c__17574__auto___25434 = cljs.core.chunk_first.call(null,seq__25416_25433__$1);
var G__25435 = cljs.core.chunk_rest.call(null,seq__25416_25433__$1);
var G__25436 = c__17574__auto___25434;
var G__25437 = cljs.core.count.call(null,c__17574__auto___25434);
var G__25438 = (0);
seq__25416_25423 = G__25435;
chunk__25417_25424 = G__25436;
count__25418_25425 = G__25437;
i__25419_25426 = G__25438;
continue;
} else {
var dep_25439 = cljs.core.first.call(null,seq__25416_25433__$1);
topo_sort_helper_STAR_.call(null,dep_25439,(depth + (1)),state);

var G__25440 = cljs.core.next.call(null,seq__25416_25433__$1);
var G__25441 = null;
var G__25442 = (0);
var G__25443 = (0);
seq__25416_25423 = G__25440;
chunk__25417_25424 = G__25441;
count__25418_25425 = G__25442;
i__25419_25426 = G__25443;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25420){
var vec__25422 = p__25420;
var x = cljs.core.nth.call(null,vec__25422,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25422,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25422,x,xs,get_deps__$1){
return (function (p1__25378_SHARP_){
return clojure.set.difference.call(null,p1__25378_SHARP_,x);
});})(vec__25422,x,xs,get_deps__$1))
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
var seq__25456 = cljs.core.seq.call(null,provides);
var chunk__25457 = null;
var count__25458 = (0);
var i__25459 = (0);
while(true){
if((i__25459 < count__25458)){
var prov = cljs.core._nth.call(null,chunk__25457,i__25459);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25460_25468 = cljs.core.seq.call(null,requires);
var chunk__25461_25469 = null;
var count__25462_25470 = (0);
var i__25463_25471 = (0);
while(true){
if((i__25463_25471 < count__25462_25470)){
var req_25472 = cljs.core._nth.call(null,chunk__25461_25469,i__25463_25471);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25472,prov);

var G__25473 = seq__25460_25468;
var G__25474 = chunk__25461_25469;
var G__25475 = count__25462_25470;
var G__25476 = (i__25463_25471 + (1));
seq__25460_25468 = G__25473;
chunk__25461_25469 = G__25474;
count__25462_25470 = G__25475;
i__25463_25471 = G__25476;
continue;
} else {
var temp__4425__auto___25477 = cljs.core.seq.call(null,seq__25460_25468);
if(temp__4425__auto___25477){
var seq__25460_25478__$1 = temp__4425__auto___25477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25460_25478__$1)){
var c__17574__auto___25479 = cljs.core.chunk_first.call(null,seq__25460_25478__$1);
var G__25480 = cljs.core.chunk_rest.call(null,seq__25460_25478__$1);
var G__25481 = c__17574__auto___25479;
var G__25482 = cljs.core.count.call(null,c__17574__auto___25479);
var G__25483 = (0);
seq__25460_25468 = G__25480;
chunk__25461_25469 = G__25481;
count__25462_25470 = G__25482;
i__25463_25471 = G__25483;
continue;
} else {
var req_25484 = cljs.core.first.call(null,seq__25460_25478__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25484,prov);

var G__25485 = cljs.core.next.call(null,seq__25460_25478__$1);
var G__25486 = null;
var G__25487 = (0);
var G__25488 = (0);
seq__25460_25468 = G__25485;
chunk__25461_25469 = G__25486;
count__25462_25470 = G__25487;
i__25463_25471 = G__25488;
continue;
}
} else {
}
}
break;
}

var G__25489 = seq__25456;
var G__25490 = chunk__25457;
var G__25491 = count__25458;
var G__25492 = (i__25459 + (1));
seq__25456 = G__25489;
chunk__25457 = G__25490;
count__25458 = G__25491;
i__25459 = G__25492;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25456);
if(temp__4425__auto__){
var seq__25456__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25456__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25456__$1);
var G__25493 = cljs.core.chunk_rest.call(null,seq__25456__$1);
var G__25494 = c__17574__auto__;
var G__25495 = cljs.core.count.call(null,c__17574__auto__);
var G__25496 = (0);
seq__25456 = G__25493;
chunk__25457 = G__25494;
count__25458 = G__25495;
i__25459 = G__25496;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25456__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25464_25497 = cljs.core.seq.call(null,requires);
var chunk__25465_25498 = null;
var count__25466_25499 = (0);
var i__25467_25500 = (0);
while(true){
if((i__25467_25500 < count__25466_25499)){
var req_25501 = cljs.core._nth.call(null,chunk__25465_25498,i__25467_25500);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25501,prov);

var G__25502 = seq__25464_25497;
var G__25503 = chunk__25465_25498;
var G__25504 = count__25466_25499;
var G__25505 = (i__25467_25500 + (1));
seq__25464_25497 = G__25502;
chunk__25465_25498 = G__25503;
count__25466_25499 = G__25504;
i__25467_25500 = G__25505;
continue;
} else {
var temp__4425__auto___25506__$1 = cljs.core.seq.call(null,seq__25464_25497);
if(temp__4425__auto___25506__$1){
var seq__25464_25507__$1 = temp__4425__auto___25506__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25464_25507__$1)){
var c__17574__auto___25508 = cljs.core.chunk_first.call(null,seq__25464_25507__$1);
var G__25509 = cljs.core.chunk_rest.call(null,seq__25464_25507__$1);
var G__25510 = c__17574__auto___25508;
var G__25511 = cljs.core.count.call(null,c__17574__auto___25508);
var G__25512 = (0);
seq__25464_25497 = G__25509;
chunk__25465_25498 = G__25510;
count__25466_25499 = G__25511;
i__25467_25500 = G__25512;
continue;
} else {
var req_25513 = cljs.core.first.call(null,seq__25464_25507__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25513,prov);

var G__25514 = cljs.core.next.call(null,seq__25464_25507__$1);
var G__25515 = null;
var G__25516 = (0);
var G__25517 = (0);
seq__25464_25497 = G__25514;
chunk__25465_25498 = G__25515;
count__25466_25499 = G__25516;
i__25467_25500 = G__25517;
continue;
}
} else {
}
}
break;
}

var G__25518 = cljs.core.next.call(null,seq__25456__$1);
var G__25519 = null;
var G__25520 = (0);
var G__25521 = (0);
seq__25456 = G__25518;
chunk__25457 = G__25519;
count__25458 = G__25520;
i__25459 = G__25521;
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
var seq__25526_25530 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25527_25531 = null;
var count__25528_25532 = (0);
var i__25529_25533 = (0);
while(true){
if((i__25529_25533 < count__25528_25532)){
var ns_25534 = cljs.core._nth.call(null,chunk__25527_25531,i__25529_25533);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25534);

var G__25535 = seq__25526_25530;
var G__25536 = chunk__25527_25531;
var G__25537 = count__25528_25532;
var G__25538 = (i__25529_25533 + (1));
seq__25526_25530 = G__25535;
chunk__25527_25531 = G__25536;
count__25528_25532 = G__25537;
i__25529_25533 = G__25538;
continue;
} else {
var temp__4425__auto___25539 = cljs.core.seq.call(null,seq__25526_25530);
if(temp__4425__auto___25539){
var seq__25526_25540__$1 = temp__4425__auto___25539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25526_25540__$1)){
var c__17574__auto___25541 = cljs.core.chunk_first.call(null,seq__25526_25540__$1);
var G__25542 = cljs.core.chunk_rest.call(null,seq__25526_25540__$1);
var G__25543 = c__17574__auto___25541;
var G__25544 = cljs.core.count.call(null,c__17574__auto___25541);
var G__25545 = (0);
seq__25526_25530 = G__25542;
chunk__25527_25531 = G__25543;
count__25528_25532 = G__25544;
i__25529_25533 = G__25545;
continue;
} else {
var ns_25546 = cljs.core.first.call(null,seq__25526_25540__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25546);

var G__25547 = cljs.core.next.call(null,seq__25526_25540__$1);
var G__25548 = null;
var G__25549 = (0);
var G__25550 = (0);
seq__25526_25530 = G__25547;
chunk__25527_25531 = G__25548;
count__25528_25532 = G__25549;
i__25529_25533 = G__25550;
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
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
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
var G__25551__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25551 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25552__i = 0, G__25552__a = new Array(arguments.length -  0);
while (G__25552__i < G__25552__a.length) {G__25552__a[G__25552__i] = arguments[G__25552__i + 0]; ++G__25552__i;}
  args = new cljs.core.IndexedSeq(G__25552__a,0);
} 
return G__25551__delegate.call(this,args);};
G__25551.cljs$lang$maxFixedArity = 0;
G__25551.cljs$lang$applyTo = (function (arglist__25553){
var args = cljs.core.seq(arglist__25553);
return G__25551__delegate(args);
});
G__25551.cljs$core$IFn$_invoke$arity$variadic = G__25551__delegate;
return G__25551;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25555 = cljs.core._EQ_;
var expr__25556 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25555.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25556))){
var path_parts = ((function (pred__25555,expr__25556){
return (function (p1__25554_SHARP_){
return clojure.string.split.call(null,p1__25554_SHARP_,/[\/\\]/);
});})(pred__25555,expr__25556))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25555,expr__25556){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25558){if((e25558 instanceof Error)){
var e = e25558;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25558;

}
}})());
});
;})(path_parts,sep,root,pred__25555,expr__25556))
} else {
if(cljs.core.truth_(pred__25555.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25556))){
return ((function (pred__25555,expr__25556){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25555,expr__25556){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25555,expr__25556))
);

return deferred.addErrback(((function (deferred,pred__25555,expr__25556){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25555,expr__25556))
);
});
;})(pred__25555,expr__25556))
} else {
return ((function (pred__25555,expr__25556){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25555,expr__25556))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25559,callback){
var map__25562 = p__25559;
var map__25562__$1 = ((((!((map__25562 == null)))?((((map__25562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25562):map__25562);
var file_msg = map__25562__$1;
var request_url = cljs.core.get.call(null,map__25562__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25562,map__25562__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25562,map__25562__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__){
return (function (state_25586){
var state_val_25587 = (state_25586[(1)]);
if((state_val_25587 === (7))){
var inst_25582 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
var statearr_25588_25608 = state_25586__$1;
(statearr_25588_25608[(2)] = inst_25582);

(statearr_25588_25608[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (1))){
var state_25586__$1 = state_25586;
var statearr_25589_25609 = state_25586__$1;
(statearr_25589_25609[(2)] = null);

(statearr_25589_25609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (4))){
var inst_25566 = (state_25586[(7)]);
var inst_25566__$1 = (state_25586[(2)]);
var state_25586__$1 = (function (){var statearr_25590 = state_25586;
(statearr_25590[(7)] = inst_25566__$1);

return statearr_25590;
})();
if(cljs.core.truth_(inst_25566__$1)){
var statearr_25591_25610 = state_25586__$1;
(statearr_25591_25610[(1)] = (5));

} else {
var statearr_25592_25611 = state_25586__$1;
(statearr_25592_25611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (6))){
var state_25586__$1 = state_25586;
var statearr_25593_25612 = state_25586__$1;
(statearr_25593_25612[(2)] = null);

(statearr_25593_25612[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (3))){
var inst_25584 = (state_25586[(2)]);
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25586__$1,inst_25584);
} else {
if((state_val_25587 === (2))){
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25586__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25587 === (11))){
var inst_25578 = (state_25586[(2)]);
var state_25586__$1 = (function (){var statearr_25594 = state_25586;
(statearr_25594[(8)] = inst_25578);

return statearr_25594;
})();
var statearr_25595_25613 = state_25586__$1;
(statearr_25595_25613[(2)] = null);

(statearr_25595_25613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (9))){
var inst_25570 = (state_25586[(9)]);
var inst_25572 = (state_25586[(10)]);
var inst_25574 = inst_25572.call(null,inst_25570);
var state_25586__$1 = state_25586;
var statearr_25596_25614 = state_25586__$1;
(statearr_25596_25614[(2)] = inst_25574);

(statearr_25596_25614[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (5))){
var inst_25566 = (state_25586[(7)]);
var inst_25568 = figwheel.client.file_reloading.blocking_load.call(null,inst_25566);
var state_25586__$1 = state_25586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25586__$1,(8),inst_25568);
} else {
if((state_val_25587 === (10))){
var inst_25570 = (state_25586[(9)]);
var inst_25576 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25570);
var state_25586__$1 = state_25586;
var statearr_25597_25615 = state_25586__$1;
(statearr_25597_25615[(2)] = inst_25576);

(statearr_25597_25615[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25587 === (8))){
var inst_25566 = (state_25586[(7)]);
var inst_25572 = (state_25586[(10)]);
var inst_25570 = (state_25586[(2)]);
var inst_25571 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25572__$1 = cljs.core.get.call(null,inst_25571,inst_25566);
var state_25586__$1 = (function (){var statearr_25598 = state_25586;
(statearr_25598[(9)] = inst_25570);

(statearr_25598[(10)] = inst_25572__$1);

return statearr_25598;
})();
if(cljs.core.truth_(inst_25572__$1)){
var statearr_25599_25616 = state_25586__$1;
(statearr_25599_25616[(1)] = (9));

} else {
var statearr_25600_25617 = state_25586__$1;
(statearr_25600_25617[(1)] = (10));

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
});})(c__20821__auto__))
;
return ((function (switch__20709__auto__,c__20821__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20710__auto__ = null;
var figwheel$client$file_reloading$state_machine__20710__auto____0 = (function (){
var statearr_25604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25604[(0)] = figwheel$client$file_reloading$state_machine__20710__auto__);

(statearr_25604[(1)] = (1));

return statearr_25604;
});
var figwheel$client$file_reloading$state_machine__20710__auto____1 = (function (state_25586){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_25586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e25605){if((e25605 instanceof Object)){
var ex__20713__auto__ = e25605;
var statearr_25606_25618 = state_25586;
(statearr_25606_25618[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25619 = state_25586;
state_25586 = G__25619;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20710__auto__ = function(state_25586){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20710__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20710__auto____1.call(this,state_25586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20710__auto____0;
figwheel$client$file_reloading$state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20710__auto____1;
return figwheel$client$file_reloading$state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__))
})();
var state__20823__auto__ = (function (){var statearr_25607 = f__20822__auto__.call(null);
(statearr_25607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_25607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__))
);

return c__20821__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25620,callback){
var map__25623 = p__25620;
var map__25623__$1 = ((((!((map__25623 == null)))?((((map__25623.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25623.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25623):map__25623);
var file_msg = map__25623__$1;
var namespace = cljs.core.get.call(null,map__25623__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25623,map__25623__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25623,map__25623__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25625){
var map__25628 = p__25625;
var map__25628__$1 = ((((!((map__25628 == null)))?((((map__25628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25628):map__25628);
var file_msg = map__25628__$1;
var namespace = cljs.core.get.call(null,map__25628__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25630,callback){
var map__25633 = p__25630;
var map__25633__$1 = ((((!((map__25633 == null)))?((((map__25633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25633):map__25633);
var file_msg = map__25633__$1;
var request_url = cljs.core.get.call(null,map__25633__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25633__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__20821__auto___25721 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___25721,out){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___25721,out){
return (function (state_25703){
var state_val_25704 = (state_25703[(1)]);
if((state_val_25704 === (1))){
var inst_25681 = cljs.core.nth.call(null,files,(0),null);
var inst_25682 = cljs.core.nthnext.call(null,files,(1));
var inst_25683 = files;
var state_25703__$1 = (function (){var statearr_25705 = state_25703;
(statearr_25705[(7)] = inst_25682);

(statearr_25705[(8)] = inst_25681);

(statearr_25705[(9)] = inst_25683);

return statearr_25705;
})();
var statearr_25706_25722 = state_25703__$1;
(statearr_25706_25722[(2)] = null);

(statearr_25706_25722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (2))){
var inst_25686 = (state_25703[(10)]);
var inst_25683 = (state_25703[(9)]);
var inst_25686__$1 = cljs.core.nth.call(null,inst_25683,(0),null);
var inst_25687 = cljs.core.nthnext.call(null,inst_25683,(1));
var inst_25688 = (inst_25686__$1 == null);
var inst_25689 = cljs.core.not.call(null,inst_25688);
var state_25703__$1 = (function (){var statearr_25707 = state_25703;
(statearr_25707[(10)] = inst_25686__$1);

(statearr_25707[(11)] = inst_25687);

return statearr_25707;
})();
if(inst_25689){
var statearr_25708_25723 = state_25703__$1;
(statearr_25708_25723[(1)] = (4));

} else {
var statearr_25709_25724 = state_25703__$1;
(statearr_25709_25724[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (3))){
var inst_25701 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25703__$1,inst_25701);
} else {
if((state_val_25704 === (4))){
var inst_25686 = (state_25703[(10)]);
var inst_25691 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25686);
var state_25703__$1 = state_25703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25703__$1,(7),inst_25691);
} else {
if((state_val_25704 === (5))){
var inst_25697 = cljs.core.async.close_BANG_.call(null,out);
var state_25703__$1 = state_25703;
var statearr_25710_25725 = state_25703__$1;
(statearr_25710_25725[(2)] = inst_25697);

(statearr_25710_25725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (6))){
var inst_25699 = (state_25703[(2)]);
var state_25703__$1 = state_25703;
var statearr_25711_25726 = state_25703__$1;
(statearr_25711_25726[(2)] = inst_25699);

(statearr_25711_25726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25704 === (7))){
var inst_25687 = (state_25703[(11)]);
var inst_25693 = (state_25703[(2)]);
var inst_25694 = cljs.core.async.put_BANG_.call(null,out,inst_25693);
var inst_25683 = inst_25687;
var state_25703__$1 = (function (){var statearr_25712 = state_25703;
(statearr_25712[(12)] = inst_25694);

(statearr_25712[(9)] = inst_25683);

return statearr_25712;
})();
var statearr_25713_25727 = state_25703__$1;
(statearr_25713_25727[(2)] = null);

(statearr_25713_25727[(1)] = (2));


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
});})(c__20821__auto___25721,out))
;
return ((function (switch__20709__auto__,c__20821__auto___25721,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto____0 = (function (){
var statearr_25717 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25717[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto__);

(statearr_25717[(1)] = (1));

return statearr_25717;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto____1 = (function (state_25703){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_25703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e25718){if((e25718 instanceof Object)){
var ex__20713__auto__ = e25718;
var statearr_25719_25728 = state_25703;
(statearr_25719_25728[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25729 = state_25703;
state_25703 = G__25729;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto__ = function(state_25703){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto____1.call(this,state_25703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___25721,out))
})();
var state__20823__auto__ = (function (){var statearr_25720 = f__20822__auto__.call(null);
(statearr_25720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___25721);

return statearr_25720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___25721,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25730,opts){
var map__25734 = p__25730;
var map__25734__$1 = ((((!((map__25734 == null)))?((((map__25734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25734):map__25734);
var eval_body__$1 = cljs.core.get.call(null,map__25734__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25734__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25736){var e = e25736;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25737_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25737_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
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
return cljs.core.map.call(null,(function (p__25742){
var vec__25743 = p__25742;
var k = cljs.core.nth.call(null,vec__25743,(0),null);
var v = cljs.core.nth.call(null,vec__25743,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25744){
var vec__25745 = p__25744;
var k = cljs.core.nth.call(null,vec__25745,(0),null);
var v = cljs.core.nth.call(null,vec__25745,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25749,p__25750){
var map__25997 = p__25749;
var map__25997__$1 = ((((!((map__25997 == null)))?((((map__25997.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25997.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25997):map__25997);
var opts = map__25997__$1;
var before_jsload = cljs.core.get.call(null,map__25997__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25997__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25997__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25998 = p__25750;
var map__25998__$1 = ((((!((map__25998 == null)))?((((map__25998.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25998.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25998):map__25998);
var msg = map__25998__$1;
var files = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25998__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26151){
var state_val_26152 = (state_26151[(1)]);
if((state_val_26152 === (7))){
var inst_26013 = (state_26151[(7)]);
var inst_26015 = (state_26151[(8)]);
var inst_26014 = (state_26151[(9)]);
var inst_26012 = (state_26151[(10)]);
var inst_26020 = cljs.core._nth.call(null,inst_26013,inst_26015);
var inst_26021 = figwheel.client.file_reloading.eval_body.call(null,inst_26020,opts);
var inst_26022 = (inst_26015 + (1));
var tmp26153 = inst_26013;
var tmp26154 = inst_26014;
var tmp26155 = inst_26012;
var inst_26012__$1 = tmp26155;
var inst_26013__$1 = tmp26153;
var inst_26014__$1 = tmp26154;
var inst_26015__$1 = inst_26022;
var state_26151__$1 = (function (){var statearr_26156 = state_26151;
(statearr_26156[(7)] = inst_26013__$1);

(statearr_26156[(8)] = inst_26015__$1);

(statearr_26156[(9)] = inst_26014__$1);

(statearr_26156[(10)] = inst_26012__$1);

(statearr_26156[(11)] = inst_26021);

return statearr_26156;
})();
var statearr_26157_26243 = state_26151__$1;
(statearr_26157_26243[(2)] = null);

(statearr_26157_26243[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (20))){
var inst_26055 = (state_26151[(12)]);
var inst_26063 = figwheel.client.file_reloading.sort_files.call(null,inst_26055);
var state_26151__$1 = state_26151;
var statearr_26158_26244 = state_26151__$1;
(statearr_26158_26244[(2)] = inst_26063);

(statearr_26158_26244[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (27))){
var state_26151__$1 = state_26151;
var statearr_26159_26245 = state_26151__$1;
(statearr_26159_26245[(2)] = null);

(statearr_26159_26245[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (1))){
var inst_26004 = (state_26151[(13)]);
var inst_26001 = before_jsload.call(null,files);
var inst_26002 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_26003 = (function (){return ((function (inst_26004,inst_26001,inst_26002,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25746_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25746_SHARP_);
});
;})(inst_26004,inst_26001,inst_26002,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26004__$1 = cljs.core.filter.call(null,inst_26003,files);
var inst_26005 = cljs.core.not_empty.call(null,inst_26004__$1);
var state_26151__$1 = (function (){var statearr_26160 = state_26151;
(statearr_26160[(14)] = inst_26001);

(statearr_26160[(15)] = inst_26002);

(statearr_26160[(13)] = inst_26004__$1);

return statearr_26160;
})();
if(cljs.core.truth_(inst_26005)){
var statearr_26161_26246 = state_26151__$1;
(statearr_26161_26246[(1)] = (2));

} else {
var statearr_26162_26247 = state_26151__$1;
(statearr_26162_26247[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (24))){
var state_26151__$1 = state_26151;
var statearr_26163_26248 = state_26151__$1;
(statearr_26163_26248[(2)] = null);

(statearr_26163_26248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (39))){
var inst_26105 = (state_26151[(16)]);
var state_26151__$1 = state_26151;
var statearr_26164_26249 = state_26151__$1;
(statearr_26164_26249[(2)] = inst_26105);

(statearr_26164_26249[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (46))){
var inst_26146 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
var statearr_26165_26250 = state_26151__$1;
(statearr_26165_26250[(2)] = inst_26146);

(statearr_26165_26250[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (4))){
var inst_26049 = (state_26151[(2)]);
var inst_26050 = cljs.core.List.EMPTY;
var inst_26051 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26050);
var inst_26052 = (function (){return ((function (inst_26049,inst_26050,inst_26051,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25747_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25747_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25747_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_26049,inst_26050,inst_26051,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26053 = cljs.core.filter.call(null,inst_26052,files);
var inst_26054 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26055 = cljs.core.concat.call(null,inst_26053,inst_26054);
var state_26151__$1 = (function (){var statearr_26166 = state_26151;
(statearr_26166[(17)] = inst_26049);

(statearr_26166[(18)] = inst_26051);

(statearr_26166[(12)] = inst_26055);

return statearr_26166;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26167_26251 = state_26151__$1;
(statearr_26167_26251[(1)] = (16));

} else {
var statearr_26168_26252 = state_26151__$1;
(statearr_26168_26252[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (15))){
var inst_26039 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
var statearr_26169_26253 = state_26151__$1;
(statearr_26169_26253[(2)] = inst_26039);

(statearr_26169_26253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (21))){
var inst_26065 = (state_26151[(19)]);
var inst_26065__$1 = (state_26151[(2)]);
var inst_26066 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26065__$1);
var state_26151__$1 = (function (){var statearr_26170 = state_26151;
(statearr_26170[(19)] = inst_26065__$1);

return statearr_26170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26151__$1,(22),inst_26066);
} else {
if((state_val_26152 === (31))){
var inst_26149 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26151__$1,inst_26149);
} else {
if((state_val_26152 === (32))){
var inst_26105 = (state_26151[(16)]);
var inst_26110 = inst_26105.cljs$lang$protocol_mask$partition0$;
var inst_26111 = (inst_26110 & (64));
var inst_26112 = inst_26105.cljs$core$ISeq$;
var inst_26113 = (inst_26111) || (inst_26112);
var state_26151__$1 = state_26151;
if(cljs.core.truth_(inst_26113)){
var statearr_26171_26254 = state_26151__$1;
(statearr_26171_26254[(1)] = (35));

} else {
var statearr_26172_26255 = state_26151__$1;
(statearr_26172_26255[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (40))){
var inst_26126 = (state_26151[(20)]);
var inst_26125 = (state_26151[(2)]);
var inst_26126__$1 = cljs.core.get.call(null,inst_26125,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26127 = cljs.core.get.call(null,inst_26125,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26128 = cljs.core.not_empty.call(null,inst_26126__$1);
var state_26151__$1 = (function (){var statearr_26173 = state_26151;
(statearr_26173[(20)] = inst_26126__$1);

(statearr_26173[(21)] = inst_26127);

return statearr_26173;
})();
if(cljs.core.truth_(inst_26128)){
var statearr_26174_26256 = state_26151__$1;
(statearr_26174_26256[(1)] = (41));

} else {
var statearr_26175_26257 = state_26151__$1;
(statearr_26175_26257[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (33))){
var state_26151__$1 = state_26151;
var statearr_26176_26258 = state_26151__$1;
(statearr_26176_26258[(2)] = false);

(statearr_26176_26258[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (13))){
var inst_26025 = (state_26151[(22)]);
var inst_26029 = cljs.core.chunk_first.call(null,inst_26025);
var inst_26030 = cljs.core.chunk_rest.call(null,inst_26025);
var inst_26031 = cljs.core.count.call(null,inst_26029);
var inst_26012 = inst_26030;
var inst_26013 = inst_26029;
var inst_26014 = inst_26031;
var inst_26015 = (0);
var state_26151__$1 = (function (){var statearr_26177 = state_26151;
(statearr_26177[(7)] = inst_26013);

(statearr_26177[(8)] = inst_26015);

(statearr_26177[(9)] = inst_26014);

(statearr_26177[(10)] = inst_26012);

return statearr_26177;
})();
var statearr_26178_26259 = state_26151__$1;
(statearr_26178_26259[(2)] = null);

(statearr_26178_26259[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (22))){
var inst_26073 = (state_26151[(23)]);
var inst_26068 = (state_26151[(24)]);
var inst_26065 = (state_26151[(19)]);
var inst_26069 = (state_26151[(25)]);
var inst_26068__$1 = (state_26151[(2)]);
var inst_26069__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26068__$1);
var inst_26070 = (function (){var all_files = inst_26065;
var res_SINGLEQUOTE_ = inst_26068__$1;
var res = inst_26069__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26073,inst_26068,inst_26065,inst_26069,inst_26068__$1,inst_26069__$1,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25748_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25748_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26073,inst_26068,inst_26065,inst_26069,inst_26068__$1,inst_26069__$1,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26071 = cljs.core.filter.call(null,inst_26070,inst_26068__$1);
var inst_26072 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26073__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26072);
var inst_26074 = cljs.core.not_empty.call(null,inst_26073__$1);
var state_26151__$1 = (function (){var statearr_26179 = state_26151;
(statearr_26179[(23)] = inst_26073__$1);

(statearr_26179[(26)] = inst_26071);

(statearr_26179[(24)] = inst_26068__$1);

(statearr_26179[(25)] = inst_26069__$1);

return statearr_26179;
})();
if(cljs.core.truth_(inst_26074)){
var statearr_26180_26260 = state_26151__$1;
(statearr_26180_26260[(1)] = (23));

} else {
var statearr_26181_26261 = state_26151__$1;
(statearr_26181_26261[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (36))){
var state_26151__$1 = state_26151;
var statearr_26182_26262 = state_26151__$1;
(statearr_26182_26262[(2)] = false);

(statearr_26182_26262[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (41))){
var inst_26126 = (state_26151[(20)]);
var inst_26130 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26131 = cljs.core.map.call(null,inst_26130,inst_26126);
var inst_26132 = cljs.core.pr_str.call(null,inst_26131);
var inst_26133 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26132)].join('');
var inst_26134 = figwheel.client.utils.log.call(null,inst_26133);
var state_26151__$1 = state_26151;
var statearr_26183_26263 = state_26151__$1;
(statearr_26183_26263[(2)] = inst_26134);

(statearr_26183_26263[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (43))){
var inst_26127 = (state_26151[(21)]);
var inst_26137 = (state_26151[(2)]);
var inst_26138 = cljs.core.not_empty.call(null,inst_26127);
var state_26151__$1 = (function (){var statearr_26184 = state_26151;
(statearr_26184[(27)] = inst_26137);

return statearr_26184;
})();
if(cljs.core.truth_(inst_26138)){
var statearr_26185_26264 = state_26151__$1;
(statearr_26185_26264[(1)] = (44));

} else {
var statearr_26186_26265 = state_26151__$1;
(statearr_26186_26265[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (29))){
var inst_26073 = (state_26151[(23)]);
var inst_26071 = (state_26151[(26)]);
var inst_26068 = (state_26151[(24)]);
var inst_26105 = (state_26151[(16)]);
var inst_26065 = (state_26151[(19)]);
var inst_26069 = (state_26151[(25)]);
var inst_26101 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26104 = (function (){var all_files = inst_26065;
var res_SINGLEQUOTE_ = inst_26068;
var res = inst_26069;
var files_not_loaded = inst_26071;
var dependencies_that_loaded = inst_26073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26105,inst_26065,inst_26069,inst_26101,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26103){
var map__26187 = p__26103;
var map__26187__$1 = ((((!((map__26187 == null)))?((((map__26187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26187):map__26187);
var namespace = cljs.core.get.call(null,map__26187__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26105,inst_26065,inst_26069,inst_26101,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26105__$1 = cljs.core.group_by.call(null,inst_26104,inst_26071);
var inst_26107 = (inst_26105__$1 == null);
var inst_26108 = cljs.core.not.call(null,inst_26107);
var state_26151__$1 = (function (){var statearr_26189 = state_26151;
(statearr_26189[(28)] = inst_26101);

(statearr_26189[(16)] = inst_26105__$1);

return statearr_26189;
})();
if(inst_26108){
var statearr_26190_26266 = state_26151__$1;
(statearr_26190_26266[(1)] = (32));

} else {
var statearr_26191_26267 = state_26151__$1;
(statearr_26191_26267[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (44))){
var inst_26127 = (state_26151[(21)]);
var inst_26140 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26127);
var inst_26141 = cljs.core.pr_str.call(null,inst_26140);
var inst_26142 = [cljs.core.str("not required: "),cljs.core.str(inst_26141)].join('');
var inst_26143 = figwheel.client.utils.log.call(null,inst_26142);
var state_26151__$1 = state_26151;
var statearr_26192_26268 = state_26151__$1;
(statearr_26192_26268[(2)] = inst_26143);

(statearr_26192_26268[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (6))){
var inst_26046 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
var statearr_26193_26269 = state_26151__$1;
(statearr_26193_26269[(2)] = inst_26046);

(statearr_26193_26269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (28))){
var inst_26071 = (state_26151[(26)]);
var inst_26098 = (state_26151[(2)]);
var inst_26099 = cljs.core.not_empty.call(null,inst_26071);
var state_26151__$1 = (function (){var statearr_26194 = state_26151;
(statearr_26194[(29)] = inst_26098);

return statearr_26194;
})();
if(cljs.core.truth_(inst_26099)){
var statearr_26195_26270 = state_26151__$1;
(statearr_26195_26270[(1)] = (29));

} else {
var statearr_26196_26271 = state_26151__$1;
(statearr_26196_26271[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (25))){
var inst_26069 = (state_26151[(25)]);
var inst_26085 = (state_26151[(2)]);
var inst_26086 = cljs.core.not_empty.call(null,inst_26069);
var state_26151__$1 = (function (){var statearr_26197 = state_26151;
(statearr_26197[(30)] = inst_26085);

return statearr_26197;
})();
if(cljs.core.truth_(inst_26086)){
var statearr_26198_26272 = state_26151__$1;
(statearr_26198_26272[(1)] = (26));

} else {
var statearr_26199_26273 = state_26151__$1;
(statearr_26199_26273[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (34))){
var inst_26120 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
if(cljs.core.truth_(inst_26120)){
var statearr_26200_26274 = state_26151__$1;
(statearr_26200_26274[(1)] = (38));

} else {
var statearr_26201_26275 = state_26151__$1;
(statearr_26201_26275[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (17))){
var state_26151__$1 = state_26151;
var statearr_26202_26276 = state_26151__$1;
(statearr_26202_26276[(2)] = recompile_dependents);

(statearr_26202_26276[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (3))){
var state_26151__$1 = state_26151;
var statearr_26203_26277 = state_26151__$1;
(statearr_26203_26277[(2)] = null);

(statearr_26203_26277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (12))){
var inst_26042 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
var statearr_26204_26278 = state_26151__$1;
(statearr_26204_26278[(2)] = inst_26042);

(statearr_26204_26278[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (2))){
var inst_26004 = (state_26151[(13)]);
var inst_26011 = cljs.core.seq.call(null,inst_26004);
var inst_26012 = inst_26011;
var inst_26013 = null;
var inst_26014 = (0);
var inst_26015 = (0);
var state_26151__$1 = (function (){var statearr_26205 = state_26151;
(statearr_26205[(7)] = inst_26013);

(statearr_26205[(8)] = inst_26015);

(statearr_26205[(9)] = inst_26014);

(statearr_26205[(10)] = inst_26012);

return statearr_26205;
})();
var statearr_26206_26279 = state_26151__$1;
(statearr_26206_26279[(2)] = null);

(statearr_26206_26279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (23))){
var inst_26073 = (state_26151[(23)]);
var inst_26071 = (state_26151[(26)]);
var inst_26068 = (state_26151[(24)]);
var inst_26065 = (state_26151[(19)]);
var inst_26069 = (state_26151[(25)]);
var inst_26076 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26078 = (function (){var all_files = inst_26065;
var res_SINGLEQUOTE_ = inst_26068;
var res = inst_26069;
var files_not_loaded = inst_26071;
var dependencies_that_loaded = inst_26073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26065,inst_26069,inst_26076,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26077){
var map__26207 = p__26077;
var map__26207__$1 = ((((!((map__26207 == null)))?((((map__26207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26207):map__26207);
var request_url = cljs.core.get.call(null,map__26207__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26065,inst_26069,inst_26076,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26079 = cljs.core.reverse.call(null,inst_26073);
var inst_26080 = cljs.core.map.call(null,inst_26078,inst_26079);
var inst_26081 = cljs.core.pr_str.call(null,inst_26080);
var inst_26082 = figwheel.client.utils.log.call(null,inst_26081);
var state_26151__$1 = (function (){var statearr_26209 = state_26151;
(statearr_26209[(31)] = inst_26076);

return statearr_26209;
})();
var statearr_26210_26280 = state_26151__$1;
(statearr_26210_26280[(2)] = inst_26082);

(statearr_26210_26280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (35))){
var state_26151__$1 = state_26151;
var statearr_26211_26281 = state_26151__$1;
(statearr_26211_26281[(2)] = true);

(statearr_26211_26281[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (19))){
var inst_26055 = (state_26151[(12)]);
var inst_26061 = figwheel.client.file_reloading.expand_files.call(null,inst_26055);
var state_26151__$1 = state_26151;
var statearr_26212_26282 = state_26151__$1;
(statearr_26212_26282[(2)] = inst_26061);

(statearr_26212_26282[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (11))){
var state_26151__$1 = state_26151;
var statearr_26213_26283 = state_26151__$1;
(statearr_26213_26283[(2)] = null);

(statearr_26213_26283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (9))){
var inst_26044 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
var statearr_26214_26284 = state_26151__$1;
(statearr_26214_26284[(2)] = inst_26044);

(statearr_26214_26284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (5))){
var inst_26015 = (state_26151[(8)]);
var inst_26014 = (state_26151[(9)]);
var inst_26017 = (inst_26015 < inst_26014);
var inst_26018 = inst_26017;
var state_26151__$1 = state_26151;
if(cljs.core.truth_(inst_26018)){
var statearr_26215_26285 = state_26151__$1;
(statearr_26215_26285[(1)] = (7));

} else {
var statearr_26216_26286 = state_26151__$1;
(statearr_26216_26286[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (14))){
var inst_26025 = (state_26151[(22)]);
var inst_26034 = cljs.core.first.call(null,inst_26025);
var inst_26035 = figwheel.client.file_reloading.eval_body.call(null,inst_26034,opts);
var inst_26036 = cljs.core.next.call(null,inst_26025);
var inst_26012 = inst_26036;
var inst_26013 = null;
var inst_26014 = (0);
var inst_26015 = (0);
var state_26151__$1 = (function (){var statearr_26217 = state_26151;
(statearr_26217[(7)] = inst_26013);

(statearr_26217[(8)] = inst_26015);

(statearr_26217[(9)] = inst_26014);

(statearr_26217[(10)] = inst_26012);

(statearr_26217[(32)] = inst_26035);

return statearr_26217;
})();
var statearr_26218_26287 = state_26151__$1;
(statearr_26218_26287[(2)] = null);

(statearr_26218_26287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (45))){
var state_26151__$1 = state_26151;
var statearr_26219_26288 = state_26151__$1;
(statearr_26219_26288[(2)] = null);

(statearr_26219_26288[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (26))){
var inst_26073 = (state_26151[(23)]);
var inst_26071 = (state_26151[(26)]);
var inst_26068 = (state_26151[(24)]);
var inst_26065 = (state_26151[(19)]);
var inst_26069 = (state_26151[(25)]);
var inst_26088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26090 = (function (){var all_files = inst_26065;
var res_SINGLEQUOTE_ = inst_26068;
var res = inst_26069;
var files_not_loaded = inst_26071;
var dependencies_that_loaded = inst_26073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26065,inst_26069,inst_26088,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26089){
var map__26220 = p__26089;
var map__26220__$1 = ((((!((map__26220 == null)))?((((map__26220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26220):map__26220);
var namespace = cljs.core.get.call(null,map__26220__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26220__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26065,inst_26069,inst_26088,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26091 = cljs.core.map.call(null,inst_26090,inst_26069);
var inst_26092 = cljs.core.pr_str.call(null,inst_26091);
var inst_26093 = figwheel.client.utils.log.call(null,inst_26092);
var inst_26094 = (function (){var all_files = inst_26065;
var res_SINGLEQUOTE_ = inst_26068;
var res = inst_26069;
var files_not_loaded = inst_26071;
var dependencies_that_loaded = inst_26073;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26065,inst_26069,inst_26088,inst_26090,inst_26091,inst_26092,inst_26093,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26073,inst_26071,inst_26068,inst_26065,inst_26069,inst_26088,inst_26090,inst_26091,inst_26092,inst_26093,state_val_26152,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26095 = setTimeout(inst_26094,(10));
var state_26151__$1 = (function (){var statearr_26222 = state_26151;
(statearr_26222[(33)] = inst_26088);

(statearr_26222[(34)] = inst_26093);

return statearr_26222;
})();
var statearr_26223_26289 = state_26151__$1;
(statearr_26223_26289[(2)] = inst_26095);

(statearr_26223_26289[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (16))){
var state_26151__$1 = state_26151;
var statearr_26224_26290 = state_26151__$1;
(statearr_26224_26290[(2)] = reload_dependents);

(statearr_26224_26290[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (38))){
var inst_26105 = (state_26151[(16)]);
var inst_26122 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26105);
var state_26151__$1 = state_26151;
var statearr_26225_26291 = state_26151__$1;
(statearr_26225_26291[(2)] = inst_26122);

(statearr_26225_26291[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (30))){
var state_26151__$1 = state_26151;
var statearr_26226_26292 = state_26151__$1;
(statearr_26226_26292[(2)] = null);

(statearr_26226_26292[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (10))){
var inst_26025 = (state_26151[(22)]);
var inst_26027 = cljs.core.chunked_seq_QMARK_.call(null,inst_26025);
var state_26151__$1 = state_26151;
if(inst_26027){
var statearr_26227_26293 = state_26151__$1;
(statearr_26227_26293[(1)] = (13));

} else {
var statearr_26228_26294 = state_26151__$1;
(statearr_26228_26294[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (18))){
var inst_26059 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
if(cljs.core.truth_(inst_26059)){
var statearr_26229_26295 = state_26151__$1;
(statearr_26229_26295[(1)] = (19));

} else {
var statearr_26230_26296 = state_26151__$1;
(statearr_26230_26296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (42))){
var state_26151__$1 = state_26151;
var statearr_26231_26297 = state_26151__$1;
(statearr_26231_26297[(2)] = null);

(statearr_26231_26297[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (37))){
var inst_26117 = (state_26151[(2)]);
var state_26151__$1 = state_26151;
var statearr_26232_26298 = state_26151__$1;
(statearr_26232_26298[(2)] = inst_26117);

(statearr_26232_26298[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26152 === (8))){
var inst_26025 = (state_26151[(22)]);
var inst_26012 = (state_26151[(10)]);
var inst_26025__$1 = cljs.core.seq.call(null,inst_26012);
var state_26151__$1 = (function (){var statearr_26233 = state_26151;
(statearr_26233[(22)] = inst_26025__$1);

return statearr_26233;
})();
if(inst_26025__$1){
var statearr_26234_26299 = state_26151__$1;
(statearr_26234_26299[(1)] = (10));

} else {
var statearr_26235_26300 = state_26151__$1;
(statearr_26235_26300[(1)] = (11));

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
});})(c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20709__auto__,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto____0 = (function (){
var statearr_26239 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26239[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto__);

(statearr_26239[(1)] = (1));

return statearr_26239;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto____1 = (function (state_26151){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_26151);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e26240){if((e26240 instanceof Object)){
var ex__20713__auto__ = e26240;
var statearr_26241_26301 = state_26151;
(statearr_26241_26301[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26151);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26240;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26302 = state_26151;
state_26151 = G__26302;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto__ = function(state_26151){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto____1.call(this,state_26151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20823__auto__ = (function (){var statearr_26242 = f__20822__auto__.call(null);
(statearr_26242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_26242;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__,map__25997,map__25997__$1,opts,before_jsload,on_jsload,reload_dependents,map__25998,map__25998__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20821__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26305,link){
var map__26308 = p__26305;
var map__26308__$1 = ((((!((map__26308 == null)))?((((map__26308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26308):map__26308);
var file = cljs.core.get.call(null,map__26308__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26308,map__26308__$1,file){
return (function (p1__26303_SHARP_,p2__26304_SHARP_){
if(cljs.core._EQ_.call(null,p1__26303_SHARP_,p2__26304_SHARP_)){
return p1__26303_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26308,map__26308__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26314){
var map__26315 = p__26314;
var map__26315__$1 = ((((!((map__26315 == null)))?((((map__26315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26315):map__26315);
var match_length = cljs.core.get.call(null,map__26315__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26315__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26310_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26310_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
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
var args26317 = [];
var len__17829__auto___26320 = arguments.length;
var i__17830__auto___26321 = (0);
while(true){
if((i__17830__auto___26321 < len__17829__auto___26320)){
args26317.push((arguments[i__17830__auto___26321]));

var G__26322 = (i__17830__auto___26321 + (1));
i__17830__auto___26321 = G__26322;
continue;
} else {
}
break;
}

var G__26319 = args26317.length;
switch (G__26319) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26317.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26324_SHARP_,p2__26325_SHARP_){
return cljs.core.assoc.call(null,p1__26324_SHARP_,cljs.core.get.call(null,p2__26325_SHARP_,key),p2__26325_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26326){
var map__26329 = p__26326;
var map__26329__$1 = ((((!((map__26329 == null)))?((((map__26329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26329):map__26329);
var f_data = map__26329__$1;
var file = cljs.core.get.call(null,map__26329__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26331,files_msg){
var map__26338 = p__26331;
var map__26338__$1 = ((((!((map__26338 == null)))?((((map__26338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26338):map__26338);
var opts = map__26338__$1;
var on_cssload = cljs.core.get.call(null,map__26338__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26340_26344 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26341_26345 = null;
var count__26342_26346 = (0);
var i__26343_26347 = (0);
while(true){
if((i__26343_26347 < count__26342_26346)){
var f_26348 = cljs.core._nth.call(null,chunk__26341_26345,i__26343_26347);
figwheel.client.file_reloading.reload_css_file.call(null,f_26348);

var G__26349 = seq__26340_26344;
var G__26350 = chunk__26341_26345;
var G__26351 = count__26342_26346;
var G__26352 = (i__26343_26347 + (1));
seq__26340_26344 = G__26349;
chunk__26341_26345 = G__26350;
count__26342_26346 = G__26351;
i__26343_26347 = G__26352;
continue;
} else {
var temp__4425__auto___26353 = cljs.core.seq.call(null,seq__26340_26344);
if(temp__4425__auto___26353){
var seq__26340_26354__$1 = temp__4425__auto___26353;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26340_26354__$1)){
var c__17574__auto___26355 = cljs.core.chunk_first.call(null,seq__26340_26354__$1);
var G__26356 = cljs.core.chunk_rest.call(null,seq__26340_26354__$1);
var G__26357 = c__17574__auto___26355;
var G__26358 = cljs.core.count.call(null,c__17574__auto___26355);
var G__26359 = (0);
seq__26340_26344 = G__26356;
chunk__26341_26345 = G__26357;
count__26342_26346 = G__26358;
i__26343_26347 = G__26359;
continue;
} else {
var f_26360 = cljs.core.first.call(null,seq__26340_26354__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26360);

var G__26361 = cljs.core.next.call(null,seq__26340_26354__$1);
var G__26362 = null;
var G__26363 = (0);
var G__26364 = (0);
seq__26340_26344 = G__26361;
chunk__26341_26345 = G__26362;
count__26342_26346 = G__26363;
i__26343_26347 = G__26364;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26338,map__26338__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26338,map__26338__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map