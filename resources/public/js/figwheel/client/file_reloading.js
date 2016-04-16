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
var or__17788__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__17788__auto__){
return or__17788__auto__;
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
var or__17788__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26178_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26178_SHARP_));
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
var seq__26193 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26194 = null;
var count__26195 = (0);
var i__26196 = (0);
while(true){
if((i__26196 < count__26195)){
var n = cljs.core._nth.call(null,chunk__26194,i__26196);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26206 = seq__26193;
var G__26207 = chunk__26194;
var G__26208 = count__26195;
var G__26209 = (i__26196 + (1));
seq__26193 = G__26206;
chunk__26194 = G__26207;
count__26195 = G__26208;
i__26196 = G__26209;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26193);
if(temp__4657__auto__){
var seq__26193__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26193__$1)){
var c__18591__auto__ = cljs.core.chunk_first.call(null,seq__26193__$1);
var G__26211 = cljs.core.chunk_rest.call(null,seq__26193__$1);
var G__26212 = c__18591__auto__;
var G__26213 = cljs.core.count.call(null,c__18591__auto__);
var G__26214 = (0);
seq__26193 = G__26211;
chunk__26194 = G__26212;
count__26195 = G__26213;
i__26196 = G__26214;
continue;
} else {
var n = cljs.core.first.call(null,seq__26193__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26215 = cljs.core.next.call(null,seq__26193__$1);
var G__26216 = null;
var G__26217 = (0);
var G__26218 = (0);
seq__26193 = G__26215;
chunk__26194 = G__26216;
count__26195 = G__26217;
i__26196 = G__26218;
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

var seq__26309_26318 = cljs.core.seq.call(null,deps);
var chunk__26310_26319 = null;
var count__26311_26320 = (0);
var i__26312_26321 = (0);
while(true){
if((i__26312_26321 < count__26311_26320)){
var dep_26322 = cljs.core._nth.call(null,chunk__26310_26319,i__26312_26321);
topo_sort_helper_STAR_.call(null,dep_26322,(depth + (1)),state);

var G__26323 = seq__26309_26318;
var G__26324 = chunk__26310_26319;
var G__26325 = count__26311_26320;
var G__26326 = (i__26312_26321 + (1));
seq__26309_26318 = G__26323;
chunk__26310_26319 = G__26324;
count__26311_26320 = G__26325;
i__26312_26321 = G__26326;
continue;
} else {
var temp__4657__auto___26327 = cljs.core.seq.call(null,seq__26309_26318);
if(temp__4657__auto___26327){
var seq__26309_26328__$1 = temp__4657__auto___26327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26309_26328__$1)){
var c__18591__auto___26329 = cljs.core.chunk_first.call(null,seq__26309_26328__$1);
var G__26330 = cljs.core.chunk_rest.call(null,seq__26309_26328__$1);
var G__26331 = c__18591__auto___26329;
var G__26332 = cljs.core.count.call(null,c__18591__auto___26329);
var G__26333 = (0);
seq__26309_26318 = G__26330;
chunk__26310_26319 = G__26331;
count__26311_26320 = G__26332;
i__26312_26321 = G__26333;
continue;
} else {
var dep_26334 = cljs.core.first.call(null,seq__26309_26328__$1);
topo_sort_helper_STAR_.call(null,dep_26334,(depth + (1)),state);

var G__26336 = cljs.core.next.call(null,seq__26309_26328__$1);
var G__26337 = null;
var G__26338 = (0);
var G__26339 = (0);
seq__26309_26318 = G__26336;
chunk__26310_26319 = G__26337;
count__26311_26320 = G__26338;
i__26312_26321 = G__26339;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26313){
var vec__26315 = p__26313;
var x = cljs.core.nth.call(null,vec__26315,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26315,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26315,x,xs,get_deps__$1){
return (function (p1__26237_SHARP_){
return clojure.set.difference.call(null,p1__26237_SHARP_,x);
});})(vec__26315,x,xs,get_deps__$1))
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
var seq__26356 = cljs.core.seq.call(null,provides);
var chunk__26357 = null;
var count__26358 = (0);
var i__26359 = (0);
while(true){
if((i__26359 < count__26358)){
var prov = cljs.core._nth.call(null,chunk__26357,i__26359);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26361_26372 = cljs.core.seq.call(null,requires);
var chunk__26363_26373 = null;
var count__26364_26374 = (0);
var i__26365_26375 = (0);
while(true){
if((i__26365_26375 < count__26364_26374)){
var req_26393 = cljs.core._nth.call(null,chunk__26363_26373,i__26365_26375);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26393,prov);

var G__26396 = seq__26361_26372;
var G__26397 = chunk__26363_26373;
var G__26398 = count__26364_26374;
var G__26399 = (i__26365_26375 + (1));
seq__26361_26372 = G__26396;
chunk__26363_26373 = G__26397;
count__26364_26374 = G__26398;
i__26365_26375 = G__26399;
continue;
} else {
var temp__4657__auto___26401 = cljs.core.seq.call(null,seq__26361_26372);
if(temp__4657__auto___26401){
var seq__26361_26402__$1 = temp__4657__auto___26401;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26361_26402__$1)){
var c__18591__auto___26405 = cljs.core.chunk_first.call(null,seq__26361_26402__$1);
var G__26407 = cljs.core.chunk_rest.call(null,seq__26361_26402__$1);
var G__26408 = c__18591__auto___26405;
var G__26409 = cljs.core.count.call(null,c__18591__auto___26405);
var G__26410 = (0);
seq__26361_26372 = G__26407;
chunk__26363_26373 = G__26408;
count__26364_26374 = G__26409;
i__26365_26375 = G__26410;
continue;
} else {
var req_26416 = cljs.core.first.call(null,seq__26361_26402__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26416,prov);

var G__26420 = cljs.core.next.call(null,seq__26361_26402__$1);
var G__26421 = null;
var G__26422 = (0);
var G__26423 = (0);
seq__26361_26372 = G__26420;
chunk__26363_26373 = G__26421;
count__26364_26374 = G__26422;
i__26365_26375 = G__26423;
continue;
}
} else {
}
}
break;
}

var G__26441 = seq__26356;
var G__26442 = chunk__26357;
var G__26443 = count__26358;
var G__26444 = (i__26359 + (1));
seq__26356 = G__26441;
chunk__26357 = G__26442;
count__26358 = G__26443;
i__26359 = G__26444;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26356);
if(temp__4657__auto__){
var seq__26356__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26356__$1)){
var c__18591__auto__ = cljs.core.chunk_first.call(null,seq__26356__$1);
var G__26449 = cljs.core.chunk_rest.call(null,seq__26356__$1);
var G__26450 = c__18591__auto__;
var G__26451 = cljs.core.count.call(null,c__18591__auto__);
var G__26452 = (0);
seq__26356 = G__26449;
chunk__26357 = G__26450;
count__26358 = G__26451;
i__26359 = G__26452;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26356__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26368_26458 = cljs.core.seq.call(null,requires);
var chunk__26369_26459 = null;
var count__26370_26460 = (0);
var i__26371_26461 = (0);
while(true){
if((i__26371_26461 < count__26370_26460)){
var req_26463 = cljs.core._nth.call(null,chunk__26369_26459,i__26371_26461);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26463,prov);

var G__26464 = seq__26368_26458;
var G__26465 = chunk__26369_26459;
var G__26466 = count__26370_26460;
var G__26467 = (i__26371_26461 + (1));
seq__26368_26458 = G__26464;
chunk__26369_26459 = G__26465;
count__26370_26460 = G__26466;
i__26371_26461 = G__26467;
continue;
} else {
var temp__4657__auto___26468__$1 = cljs.core.seq.call(null,seq__26368_26458);
if(temp__4657__auto___26468__$1){
var seq__26368_26469__$1 = temp__4657__auto___26468__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26368_26469__$1)){
var c__18591__auto___26470 = cljs.core.chunk_first.call(null,seq__26368_26469__$1);
var G__26471 = cljs.core.chunk_rest.call(null,seq__26368_26469__$1);
var G__26472 = c__18591__auto___26470;
var G__26473 = cljs.core.count.call(null,c__18591__auto___26470);
var G__26474 = (0);
seq__26368_26458 = G__26471;
chunk__26369_26459 = G__26472;
count__26370_26460 = G__26473;
i__26371_26461 = G__26474;
continue;
} else {
var req_26475 = cljs.core.first.call(null,seq__26368_26469__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26475,prov);

var G__26476 = cljs.core.next.call(null,seq__26368_26469__$1);
var G__26477 = null;
var G__26478 = (0);
var G__26479 = (0);
seq__26368_26458 = G__26476;
chunk__26369_26459 = G__26477;
count__26370_26460 = G__26478;
i__26371_26461 = G__26479;
continue;
}
} else {
}
}
break;
}

var G__26480 = cljs.core.next.call(null,seq__26356__$1);
var G__26481 = null;
var G__26482 = (0);
var G__26483 = (0);
seq__26356 = G__26480;
chunk__26357 = G__26481;
count__26358 = G__26482;
i__26359 = G__26483;
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
var seq__26488_26492 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26489_26493 = null;
var count__26490_26494 = (0);
var i__26491_26495 = (0);
while(true){
if((i__26491_26495 < count__26490_26494)){
var ns_26496 = cljs.core._nth.call(null,chunk__26489_26493,i__26491_26495);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26496);

var G__26497 = seq__26488_26492;
var G__26498 = chunk__26489_26493;
var G__26499 = count__26490_26494;
var G__26500 = (i__26491_26495 + (1));
seq__26488_26492 = G__26497;
chunk__26489_26493 = G__26498;
count__26490_26494 = G__26499;
i__26491_26495 = G__26500;
continue;
} else {
var temp__4657__auto___26502 = cljs.core.seq.call(null,seq__26488_26492);
if(temp__4657__auto___26502){
var seq__26488_26503__$1 = temp__4657__auto___26502;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26488_26503__$1)){
var c__18591__auto___26504 = cljs.core.chunk_first.call(null,seq__26488_26503__$1);
var G__26505 = cljs.core.chunk_rest.call(null,seq__26488_26503__$1);
var G__26506 = c__18591__auto___26504;
var G__26507 = cljs.core.count.call(null,c__18591__auto___26504);
var G__26508 = (0);
seq__26488_26492 = G__26505;
chunk__26489_26493 = G__26506;
count__26490_26494 = G__26507;
i__26491_26495 = G__26508;
continue;
} else {
var ns_26510 = cljs.core.first.call(null,seq__26488_26503__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26510);

var G__26511 = cljs.core.next.call(null,seq__26488_26503__$1);
var G__26512 = null;
var G__26513 = (0);
var G__26514 = (0);
seq__26488_26492 = G__26511;
chunk__26489_26493 = G__26512;
count__26490_26494 = G__26513;
i__26491_26495 = G__26514;
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
goog.require_figwheel_backup_ = (function (){var or__17788__auto__ = goog.require__;
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
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
var G__26535__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26535 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26549__i = 0, G__26549__a = new Array(arguments.length -  0);
while (G__26549__i < G__26549__a.length) {G__26549__a[G__26549__i] = arguments[G__26549__i + 0]; ++G__26549__i;}
  args = new cljs.core.IndexedSeq(G__26549__a,0);
} 
return G__26535__delegate.call(this,args);};
G__26535.cljs$lang$maxFixedArity = 0;
G__26535.cljs$lang$applyTo = (function (arglist__26550){
var args = cljs.core.seq(arglist__26550);
return G__26535__delegate(args);
});
G__26535.cljs$core$IFn$_invoke$arity$variadic = G__26535__delegate;
return G__26535;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26561 = cljs.core._EQ_;
var expr__26562 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26561.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26562))){
var path_parts = ((function (pred__26561,expr__26562){
return (function (p1__26560_SHARP_){
return clojure.string.split.call(null,p1__26560_SHARP_,/[\/\\]/);
});})(pred__26561,expr__26562))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26561,expr__26562){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26564){if((e26564 instanceof Error)){
var e = e26564;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26564;

}
}})());
});
;})(path_parts,sep,root,pred__26561,expr__26562))
} else {
if(cljs.core.truth_(pred__26561.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26562))){
return ((function (pred__26561,expr__26562){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26561,expr__26562){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26561,expr__26562))
);

return deferred.addErrback(((function (deferred,pred__26561,expr__26562){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26561,expr__26562))
);
});
;})(pred__26561,expr__26562))
} else {
return ((function (pred__26561,expr__26562){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26561,expr__26562))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26567,callback){
var map__26570 = p__26567;
var map__26570__$1 = ((((!((map__26570 == null)))?((((map__26570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26570):map__26570);
var file_msg = map__26570__$1;
var request_url = cljs.core.get.call(null,map__26570__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26570,map__26570__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26570,map__26570__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__){
return (function (state_26594){
var state_val_26595 = (state_26594[(1)]);
if((state_val_26595 === (7))){
var inst_26590 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
var statearr_26596_26616 = state_26594__$1;
(statearr_26596_26616[(2)] = inst_26590);

(statearr_26596_26616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (1))){
var state_26594__$1 = state_26594;
var statearr_26597_26617 = state_26594__$1;
(statearr_26597_26617[(2)] = null);

(statearr_26597_26617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (4))){
var inst_26574 = (state_26594[(7)]);
var inst_26574__$1 = (state_26594[(2)]);
var state_26594__$1 = (function (){var statearr_26598 = state_26594;
(statearr_26598[(7)] = inst_26574__$1);

return statearr_26598;
})();
if(cljs.core.truth_(inst_26574__$1)){
var statearr_26599_26618 = state_26594__$1;
(statearr_26599_26618[(1)] = (5));

} else {
var statearr_26600_26619 = state_26594__$1;
(statearr_26600_26619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (6))){
var state_26594__$1 = state_26594;
var statearr_26601_26620 = state_26594__$1;
(statearr_26601_26620[(2)] = null);

(statearr_26601_26620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (3))){
var inst_26592 = (state_26594[(2)]);
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26594__$1,inst_26592);
} else {
if((state_val_26595 === (2))){
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26594__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26595 === (11))){
var inst_26586 = (state_26594[(2)]);
var state_26594__$1 = (function (){var statearr_26602 = state_26594;
(statearr_26602[(8)] = inst_26586);

return statearr_26602;
})();
var statearr_26603_26621 = state_26594__$1;
(statearr_26603_26621[(2)] = null);

(statearr_26603_26621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (9))){
var inst_26580 = (state_26594[(9)]);
var inst_26578 = (state_26594[(10)]);
var inst_26582 = inst_26580.call(null,inst_26578);
var state_26594__$1 = state_26594;
var statearr_26604_26622 = state_26594__$1;
(statearr_26604_26622[(2)] = inst_26582);

(statearr_26604_26622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (5))){
var inst_26574 = (state_26594[(7)]);
var inst_26576 = figwheel.client.file_reloading.blocking_load.call(null,inst_26574);
var state_26594__$1 = state_26594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26594__$1,(8),inst_26576);
} else {
if((state_val_26595 === (10))){
var inst_26578 = (state_26594[(10)]);
var inst_26584 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26578);
var state_26594__$1 = state_26594;
var statearr_26605_26623 = state_26594__$1;
(statearr_26605_26623[(2)] = inst_26584);

(statearr_26605_26623[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26595 === (8))){
var inst_26580 = (state_26594[(9)]);
var inst_26574 = (state_26594[(7)]);
var inst_26578 = (state_26594[(2)]);
var inst_26579 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26580__$1 = cljs.core.get.call(null,inst_26579,inst_26574);
var state_26594__$1 = (function (){var statearr_26606 = state_26594;
(statearr_26606[(9)] = inst_26580__$1);

(statearr_26606[(10)] = inst_26578);

return statearr_26606;
})();
if(cljs.core.truth_(inst_26580__$1)){
var statearr_26607_26624 = state_26594__$1;
(statearr_26607_26624[(1)] = (9));

} else {
var statearr_26608_26625 = state_26594__$1;
(statearr_26608_26625[(1)] = (10));

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
});})(c__22347__auto__))
;
return ((function (switch__22044__auto__,c__22347__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22045__auto__ = null;
var figwheel$client$file_reloading$state_machine__22045__auto____0 = (function (){
var statearr_26612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26612[(0)] = figwheel$client$file_reloading$state_machine__22045__auto__);

(statearr_26612[(1)] = (1));

return statearr_26612;
});
var figwheel$client$file_reloading$state_machine__22045__auto____1 = (function (state_26594){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_26594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e26613){if((e26613 instanceof Object)){
var ex__22048__auto__ = e26613;
var statearr_26614_26626 = state_26594;
(statearr_26614_26626[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26627 = state_26594;
state_26594 = G__26627;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22045__auto__ = function(state_26594){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22045__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22045__auto____1.call(this,state_26594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22045__auto____0;
figwheel$client$file_reloading$state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22045__auto____1;
return figwheel$client$file_reloading$state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__))
})();
var state__22349__auto__ = (function (){var statearr_26615 = f__22348__auto__.call(null);
(statearr_26615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_26615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__))
);

return c__22347__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26628,callback){
var map__26631 = p__26628;
var map__26631__$1 = ((((!((map__26631 == null)))?((((map__26631.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26631.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26631):map__26631);
var file_msg = map__26631__$1;
var namespace = cljs.core.get.call(null,map__26631__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26631,map__26631__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26631,map__26631__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26633){
var map__26636 = p__26633;
var map__26636__$1 = ((((!((map__26636 == null)))?((((map__26636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26636):map__26636);
var file_msg = map__26636__$1;
var namespace = cljs.core.get.call(null,map__26636__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__17776__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__17776__auto__){
var or__17788__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
var or__17788__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__17788__auto____$1)){
return or__17788__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__17776__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26638,callback){
var map__26641 = p__26638;
var map__26641__$1 = ((((!((map__26641 == null)))?((((map__26641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26641):map__26641);
var file_msg = map__26641__$1;
var request_url = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__22347__auto___26729 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___26729,out){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___26729,out){
return (function (state_26711){
var state_val_26712 = (state_26711[(1)]);
if((state_val_26712 === (1))){
var inst_26689 = cljs.core.nth.call(null,files,(0),null);
var inst_26690 = cljs.core.nthnext.call(null,files,(1));
var inst_26691 = files;
var state_26711__$1 = (function (){var statearr_26713 = state_26711;
(statearr_26713[(7)] = inst_26691);

(statearr_26713[(8)] = inst_26690);

(statearr_26713[(9)] = inst_26689);

return statearr_26713;
})();
var statearr_26714_26730 = state_26711__$1;
(statearr_26714_26730[(2)] = null);

(statearr_26714_26730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (2))){
var inst_26691 = (state_26711[(7)]);
var inst_26694 = (state_26711[(10)]);
var inst_26694__$1 = cljs.core.nth.call(null,inst_26691,(0),null);
var inst_26695 = cljs.core.nthnext.call(null,inst_26691,(1));
var inst_26696 = (inst_26694__$1 == null);
var inst_26697 = cljs.core.not.call(null,inst_26696);
var state_26711__$1 = (function (){var statearr_26715 = state_26711;
(statearr_26715[(11)] = inst_26695);

(statearr_26715[(10)] = inst_26694__$1);

return statearr_26715;
})();
if(inst_26697){
var statearr_26716_26731 = state_26711__$1;
(statearr_26716_26731[(1)] = (4));

} else {
var statearr_26717_26732 = state_26711__$1;
(statearr_26717_26732[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (3))){
var inst_26709 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26711__$1,inst_26709);
} else {
if((state_val_26712 === (4))){
var inst_26694 = (state_26711[(10)]);
var inst_26699 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26694);
var state_26711__$1 = state_26711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26711__$1,(7),inst_26699);
} else {
if((state_val_26712 === (5))){
var inst_26705 = cljs.core.async.close_BANG_.call(null,out);
var state_26711__$1 = state_26711;
var statearr_26718_26733 = state_26711__$1;
(statearr_26718_26733[(2)] = inst_26705);

(statearr_26718_26733[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (6))){
var inst_26707 = (state_26711[(2)]);
var state_26711__$1 = state_26711;
var statearr_26719_26734 = state_26711__$1;
(statearr_26719_26734[(2)] = inst_26707);

(statearr_26719_26734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26712 === (7))){
var inst_26695 = (state_26711[(11)]);
var inst_26701 = (state_26711[(2)]);
var inst_26702 = cljs.core.async.put_BANG_.call(null,out,inst_26701);
var inst_26691 = inst_26695;
var state_26711__$1 = (function (){var statearr_26720 = state_26711;
(statearr_26720[(7)] = inst_26691);

(statearr_26720[(12)] = inst_26702);

return statearr_26720;
})();
var statearr_26721_26735 = state_26711__$1;
(statearr_26721_26735[(2)] = null);

(statearr_26721_26735[(1)] = (2));


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
});})(c__22347__auto___26729,out))
;
return ((function (switch__22044__auto__,c__22347__auto___26729,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto____0 = (function (){
var statearr_26725 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26725[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto__);

(statearr_26725[(1)] = (1));

return statearr_26725;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto____1 = (function (state_26711){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_26711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e26726){if((e26726 instanceof Object)){
var ex__22048__auto__ = e26726;
var statearr_26727_26736 = state_26711;
(statearr_26727_26736[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26737 = state_26711;
state_26711 = G__26737;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto__ = function(state_26711){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto____1.call(this,state_26711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___26729,out))
})();
var state__22349__auto__ = (function (){var statearr_26728 = f__22348__auto__.call(null);
(statearr_26728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___26729);

return statearr_26728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___26729,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26738,opts){
var map__26742 = p__26738;
var map__26742__$1 = ((((!((map__26742 == null)))?((((map__26742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26742):map__26742);
var eval_body__$1 = cljs.core.get.call(null,map__26742__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26742__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__17776__auto__ = eval_body__$1;
if(cljs.core.truth_(and__17776__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__17776__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26744){var e = e26744;
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
return (function (p1__26745_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26745_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26750){
var vec__26751 = p__26750;
var k = cljs.core.nth.call(null,vec__26751,(0),null);
var v = cljs.core.nth.call(null,vec__26751,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26752){
var vec__26753 = p__26752;
var k = cljs.core.nth.call(null,vec__26753,(0),null);
var v = cljs.core.nth.call(null,vec__26753,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26757,p__26758){
var map__27005 = p__26757;
var map__27005__$1 = ((((!((map__27005 == null)))?((((map__27005.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27005.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27005):map__27005);
var opts = map__27005__$1;
var before_jsload = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27005__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27006 = p__26758;
var map__27006__$1 = ((((!((map__27006 == null)))?((((map__27006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27006):map__27006);
var msg = map__27006__$1;
var files = cljs.core.get.call(null,map__27006__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27006__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27006__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27159){
var state_val_27160 = (state_27159[(1)]);
if((state_val_27160 === (7))){
var inst_27023 = (state_27159[(7)]);
var inst_27021 = (state_27159[(8)]);
var inst_27022 = (state_27159[(9)]);
var inst_27020 = (state_27159[(10)]);
var inst_27028 = cljs.core._nth.call(null,inst_27021,inst_27023);
var inst_27029 = figwheel.client.file_reloading.eval_body.call(null,inst_27028,opts);
var inst_27030 = (inst_27023 + (1));
var tmp27161 = inst_27021;
var tmp27162 = inst_27022;
var tmp27163 = inst_27020;
var inst_27020__$1 = tmp27163;
var inst_27021__$1 = tmp27161;
var inst_27022__$1 = tmp27162;
var inst_27023__$1 = inst_27030;
var state_27159__$1 = (function (){var statearr_27164 = state_27159;
(statearr_27164[(7)] = inst_27023__$1);

(statearr_27164[(8)] = inst_27021__$1);

(statearr_27164[(11)] = inst_27029);

(statearr_27164[(9)] = inst_27022__$1);

(statearr_27164[(10)] = inst_27020__$1);

return statearr_27164;
})();
var statearr_27165_27251 = state_27159__$1;
(statearr_27165_27251[(2)] = null);

(statearr_27165_27251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (20))){
var inst_27063 = (state_27159[(12)]);
var inst_27071 = figwheel.client.file_reloading.sort_files.call(null,inst_27063);
var state_27159__$1 = state_27159;
var statearr_27166_27252 = state_27159__$1;
(statearr_27166_27252[(2)] = inst_27071);

(statearr_27166_27252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (27))){
var state_27159__$1 = state_27159;
var statearr_27167_27253 = state_27159__$1;
(statearr_27167_27253[(2)] = null);

(statearr_27167_27253[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (1))){
var inst_27012 = (state_27159[(13)]);
var inst_27009 = before_jsload.call(null,files);
var inst_27010 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27011 = (function (){return ((function (inst_27012,inst_27009,inst_27010,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26754_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26754_SHARP_);
});
;})(inst_27012,inst_27009,inst_27010,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27012__$1 = cljs.core.filter.call(null,inst_27011,files);
var inst_27013 = cljs.core.not_empty.call(null,inst_27012__$1);
var state_27159__$1 = (function (){var statearr_27168 = state_27159;
(statearr_27168[(13)] = inst_27012__$1);

(statearr_27168[(14)] = inst_27010);

(statearr_27168[(15)] = inst_27009);

return statearr_27168;
})();
if(cljs.core.truth_(inst_27013)){
var statearr_27169_27254 = state_27159__$1;
(statearr_27169_27254[(1)] = (2));

} else {
var statearr_27170_27255 = state_27159__$1;
(statearr_27170_27255[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (24))){
var state_27159__$1 = state_27159;
var statearr_27171_27256 = state_27159__$1;
(statearr_27171_27256[(2)] = null);

(statearr_27171_27256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (39))){
var inst_27113 = (state_27159[(16)]);
var state_27159__$1 = state_27159;
var statearr_27172_27257 = state_27159__$1;
(statearr_27172_27257[(2)] = inst_27113);

(statearr_27172_27257[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (46))){
var inst_27154 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
var statearr_27173_27258 = state_27159__$1;
(statearr_27173_27258[(2)] = inst_27154);

(statearr_27173_27258[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (4))){
var inst_27057 = (state_27159[(2)]);
var inst_27058 = cljs.core.List.EMPTY;
var inst_27059 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27058);
var inst_27060 = (function (){return ((function (inst_27057,inst_27058,inst_27059,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26755_SHARP_){
var and__17776__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26755_SHARP_);
if(cljs.core.truth_(and__17776__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26755_SHARP_));
} else {
return and__17776__auto__;
}
});
;})(inst_27057,inst_27058,inst_27059,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27061 = cljs.core.filter.call(null,inst_27060,files);
var inst_27062 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27063 = cljs.core.concat.call(null,inst_27061,inst_27062);
var state_27159__$1 = (function (){var statearr_27174 = state_27159;
(statearr_27174[(12)] = inst_27063);

(statearr_27174[(17)] = inst_27059);

(statearr_27174[(18)] = inst_27057);

return statearr_27174;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27175_27259 = state_27159__$1;
(statearr_27175_27259[(1)] = (16));

} else {
var statearr_27176_27260 = state_27159__$1;
(statearr_27176_27260[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (15))){
var inst_27047 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
var statearr_27177_27261 = state_27159__$1;
(statearr_27177_27261[(2)] = inst_27047);

(statearr_27177_27261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (21))){
var inst_27073 = (state_27159[(19)]);
var inst_27073__$1 = (state_27159[(2)]);
var inst_27074 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27073__$1);
var state_27159__$1 = (function (){var statearr_27178 = state_27159;
(statearr_27178[(19)] = inst_27073__$1);

return statearr_27178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27159__$1,(22),inst_27074);
} else {
if((state_val_27160 === (31))){
var inst_27157 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27159__$1,inst_27157);
} else {
if((state_val_27160 === (32))){
var inst_27113 = (state_27159[(16)]);
var inst_27118 = inst_27113.cljs$lang$protocol_mask$partition0$;
var inst_27119 = (inst_27118 & (64));
var inst_27120 = inst_27113.cljs$core$ISeq$;
var inst_27121 = (inst_27119) || (inst_27120);
var state_27159__$1 = state_27159;
if(cljs.core.truth_(inst_27121)){
var statearr_27179_27262 = state_27159__$1;
(statearr_27179_27262[(1)] = (35));

} else {
var statearr_27180_27263 = state_27159__$1;
(statearr_27180_27263[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (40))){
var inst_27134 = (state_27159[(20)]);
var inst_27133 = (state_27159[(2)]);
var inst_27134__$1 = cljs.core.get.call(null,inst_27133,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27135 = cljs.core.get.call(null,inst_27133,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27136 = cljs.core.not_empty.call(null,inst_27134__$1);
var state_27159__$1 = (function (){var statearr_27181 = state_27159;
(statearr_27181[(21)] = inst_27135);

(statearr_27181[(20)] = inst_27134__$1);

return statearr_27181;
})();
if(cljs.core.truth_(inst_27136)){
var statearr_27182_27264 = state_27159__$1;
(statearr_27182_27264[(1)] = (41));

} else {
var statearr_27183_27265 = state_27159__$1;
(statearr_27183_27265[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (33))){
var state_27159__$1 = state_27159;
var statearr_27184_27266 = state_27159__$1;
(statearr_27184_27266[(2)] = false);

(statearr_27184_27266[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (13))){
var inst_27033 = (state_27159[(22)]);
var inst_27037 = cljs.core.chunk_first.call(null,inst_27033);
var inst_27038 = cljs.core.chunk_rest.call(null,inst_27033);
var inst_27039 = cljs.core.count.call(null,inst_27037);
var inst_27020 = inst_27038;
var inst_27021 = inst_27037;
var inst_27022 = inst_27039;
var inst_27023 = (0);
var state_27159__$1 = (function (){var statearr_27185 = state_27159;
(statearr_27185[(7)] = inst_27023);

(statearr_27185[(8)] = inst_27021);

(statearr_27185[(9)] = inst_27022);

(statearr_27185[(10)] = inst_27020);

return statearr_27185;
})();
var statearr_27186_27267 = state_27159__$1;
(statearr_27186_27267[(2)] = null);

(statearr_27186_27267[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (22))){
var inst_27073 = (state_27159[(19)]);
var inst_27076 = (state_27159[(23)]);
var inst_27081 = (state_27159[(24)]);
var inst_27077 = (state_27159[(25)]);
var inst_27076__$1 = (state_27159[(2)]);
var inst_27077__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27076__$1);
var inst_27078 = (function (){var all_files = inst_27073;
var res_SINGLEQUOTE_ = inst_27076__$1;
var res = inst_27077__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27073,inst_27076,inst_27081,inst_27077,inst_27076__$1,inst_27077__$1,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26756_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26756_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27073,inst_27076,inst_27081,inst_27077,inst_27076__$1,inst_27077__$1,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27079 = cljs.core.filter.call(null,inst_27078,inst_27076__$1);
var inst_27080 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27081__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27080);
var inst_27082 = cljs.core.not_empty.call(null,inst_27081__$1);
var state_27159__$1 = (function (){var statearr_27187 = state_27159;
(statearr_27187[(23)] = inst_27076__$1);

(statearr_27187[(24)] = inst_27081__$1);

(statearr_27187[(26)] = inst_27079);

(statearr_27187[(25)] = inst_27077__$1);

return statearr_27187;
})();
if(cljs.core.truth_(inst_27082)){
var statearr_27188_27268 = state_27159__$1;
(statearr_27188_27268[(1)] = (23));

} else {
var statearr_27189_27269 = state_27159__$1;
(statearr_27189_27269[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (36))){
var state_27159__$1 = state_27159;
var statearr_27190_27270 = state_27159__$1;
(statearr_27190_27270[(2)] = false);

(statearr_27190_27270[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (41))){
var inst_27134 = (state_27159[(20)]);
var inst_27138 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27139 = cljs.core.map.call(null,inst_27138,inst_27134);
var inst_27140 = cljs.core.pr_str.call(null,inst_27139);
var inst_27141 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27140)].join('');
var inst_27142 = figwheel.client.utils.log.call(null,inst_27141);
var state_27159__$1 = state_27159;
var statearr_27191_27271 = state_27159__$1;
(statearr_27191_27271[(2)] = inst_27142);

(statearr_27191_27271[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (43))){
var inst_27135 = (state_27159[(21)]);
var inst_27145 = (state_27159[(2)]);
var inst_27146 = cljs.core.not_empty.call(null,inst_27135);
var state_27159__$1 = (function (){var statearr_27192 = state_27159;
(statearr_27192[(27)] = inst_27145);

return statearr_27192;
})();
if(cljs.core.truth_(inst_27146)){
var statearr_27193_27272 = state_27159__$1;
(statearr_27193_27272[(1)] = (44));

} else {
var statearr_27194_27273 = state_27159__$1;
(statearr_27194_27273[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (29))){
var inst_27073 = (state_27159[(19)]);
var inst_27113 = (state_27159[(16)]);
var inst_27076 = (state_27159[(23)]);
var inst_27081 = (state_27159[(24)]);
var inst_27079 = (state_27159[(26)]);
var inst_27077 = (state_27159[(25)]);
var inst_27109 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27112 = (function (){var all_files = inst_27073;
var res_SINGLEQUOTE_ = inst_27076;
var res = inst_27077;
var files_not_loaded = inst_27079;
var dependencies_that_loaded = inst_27081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27113,inst_27076,inst_27081,inst_27079,inst_27077,inst_27109,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27111){
var map__27195 = p__27111;
var map__27195__$1 = ((((!((map__27195 == null)))?((((map__27195.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27195.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27195):map__27195);
var namespace = cljs.core.get.call(null,map__27195__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27113,inst_27076,inst_27081,inst_27079,inst_27077,inst_27109,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27113__$1 = cljs.core.group_by.call(null,inst_27112,inst_27079);
var inst_27115 = (inst_27113__$1 == null);
var inst_27116 = cljs.core.not.call(null,inst_27115);
var state_27159__$1 = (function (){var statearr_27197 = state_27159;
(statearr_27197[(16)] = inst_27113__$1);

(statearr_27197[(28)] = inst_27109);

return statearr_27197;
})();
if(inst_27116){
var statearr_27198_27274 = state_27159__$1;
(statearr_27198_27274[(1)] = (32));

} else {
var statearr_27199_27275 = state_27159__$1;
(statearr_27199_27275[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (44))){
var inst_27135 = (state_27159[(21)]);
var inst_27148 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27135);
var inst_27149 = cljs.core.pr_str.call(null,inst_27148);
var inst_27150 = [cljs.core.str("not required: "),cljs.core.str(inst_27149)].join('');
var inst_27151 = figwheel.client.utils.log.call(null,inst_27150);
var state_27159__$1 = state_27159;
var statearr_27200_27276 = state_27159__$1;
(statearr_27200_27276[(2)] = inst_27151);

(statearr_27200_27276[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (6))){
var inst_27054 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
var statearr_27201_27277 = state_27159__$1;
(statearr_27201_27277[(2)] = inst_27054);

(statearr_27201_27277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (28))){
var inst_27079 = (state_27159[(26)]);
var inst_27106 = (state_27159[(2)]);
var inst_27107 = cljs.core.not_empty.call(null,inst_27079);
var state_27159__$1 = (function (){var statearr_27202 = state_27159;
(statearr_27202[(29)] = inst_27106);

return statearr_27202;
})();
if(cljs.core.truth_(inst_27107)){
var statearr_27203_27278 = state_27159__$1;
(statearr_27203_27278[(1)] = (29));

} else {
var statearr_27204_27279 = state_27159__$1;
(statearr_27204_27279[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (25))){
var inst_27077 = (state_27159[(25)]);
var inst_27093 = (state_27159[(2)]);
var inst_27094 = cljs.core.not_empty.call(null,inst_27077);
var state_27159__$1 = (function (){var statearr_27205 = state_27159;
(statearr_27205[(30)] = inst_27093);

return statearr_27205;
})();
if(cljs.core.truth_(inst_27094)){
var statearr_27206_27280 = state_27159__$1;
(statearr_27206_27280[(1)] = (26));

} else {
var statearr_27207_27281 = state_27159__$1;
(statearr_27207_27281[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (34))){
var inst_27128 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
if(cljs.core.truth_(inst_27128)){
var statearr_27208_27282 = state_27159__$1;
(statearr_27208_27282[(1)] = (38));

} else {
var statearr_27209_27283 = state_27159__$1;
(statearr_27209_27283[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (17))){
var state_27159__$1 = state_27159;
var statearr_27210_27284 = state_27159__$1;
(statearr_27210_27284[(2)] = recompile_dependents);

(statearr_27210_27284[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (3))){
var state_27159__$1 = state_27159;
var statearr_27211_27285 = state_27159__$1;
(statearr_27211_27285[(2)] = null);

(statearr_27211_27285[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (12))){
var inst_27050 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
var statearr_27212_27286 = state_27159__$1;
(statearr_27212_27286[(2)] = inst_27050);

(statearr_27212_27286[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (2))){
var inst_27012 = (state_27159[(13)]);
var inst_27019 = cljs.core.seq.call(null,inst_27012);
var inst_27020 = inst_27019;
var inst_27021 = null;
var inst_27022 = (0);
var inst_27023 = (0);
var state_27159__$1 = (function (){var statearr_27213 = state_27159;
(statearr_27213[(7)] = inst_27023);

(statearr_27213[(8)] = inst_27021);

(statearr_27213[(9)] = inst_27022);

(statearr_27213[(10)] = inst_27020);

return statearr_27213;
})();
var statearr_27214_27287 = state_27159__$1;
(statearr_27214_27287[(2)] = null);

(statearr_27214_27287[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (23))){
var inst_27073 = (state_27159[(19)]);
var inst_27076 = (state_27159[(23)]);
var inst_27081 = (state_27159[(24)]);
var inst_27079 = (state_27159[(26)]);
var inst_27077 = (state_27159[(25)]);
var inst_27084 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27086 = (function (){var all_files = inst_27073;
var res_SINGLEQUOTE_ = inst_27076;
var res = inst_27077;
var files_not_loaded = inst_27079;
var dependencies_that_loaded = inst_27081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27076,inst_27081,inst_27079,inst_27077,inst_27084,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27085){
var map__27215 = p__27085;
var map__27215__$1 = ((((!((map__27215 == null)))?((((map__27215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27215):map__27215);
var request_url = cljs.core.get.call(null,map__27215__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27076,inst_27081,inst_27079,inst_27077,inst_27084,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27087 = cljs.core.reverse.call(null,inst_27081);
var inst_27088 = cljs.core.map.call(null,inst_27086,inst_27087);
var inst_27089 = cljs.core.pr_str.call(null,inst_27088);
var inst_27090 = figwheel.client.utils.log.call(null,inst_27089);
var state_27159__$1 = (function (){var statearr_27217 = state_27159;
(statearr_27217[(31)] = inst_27084);

return statearr_27217;
})();
var statearr_27218_27288 = state_27159__$1;
(statearr_27218_27288[(2)] = inst_27090);

(statearr_27218_27288[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (35))){
var state_27159__$1 = state_27159;
var statearr_27219_27289 = state_27159__$1;
(statearr_27219_27289[(2)] = true);

(statearr_27219_27289[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (19))){
var inst_27063 = (state_27159[(12)]);
var inst_27069 = figwheel.client.file_reloading.expand_files.call(null,inst_27063);
var state_27159__$1 = state_27159;
var statearr_27220_27290 = state_27159__$1;
(statearr_27220_27290[(2)] = inst_27069);

(statearr_27220_27290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (11))){
var state_27159__$1 = state_27159;
var statearr_27221_27291 = state_27159__$1;
(statearr_27221_27291[(2)] = null);

(statearr_27221_27291[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (9))){
var inst_27052 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
var statearr_27222_27292 = state_27159__$1;
(statearr_27222_27292[(2)] = inst_27052);

(statearr_27222_27292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (5))){
var inst_27023 = (state_27159[(7)]);
var inst_27022 = (state_27159[(9)]);
var inst_27025 = (inst_27023 < inst_27022);
var inst_27026 = inst_27025;
var state_27159__$1 = state_27159;
if(cljs.core.truth_(inst_27026)){
var statearr_27223_27293 = state_27159__$1;
(statearr_27223_27293[(1)] = (7));

} else {
var statearr_27224_27294 = state_27159__$1;
(statearr_27224_27294[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (14))){
var inst_27033 = (state_27159[(22)]);
var inst_27042 = cljs.core.first.call(null,inst_27033);
var inst_27043 = figwheel.client.file_reloading.eval_body.call(null,inst_27042,opts);
var inst_27044 = cljs.core.next.call(null,inst_27033);
var inst_27020 = inst_27044;
var inst_27021 = null;
var inst_27022 = (0);
var inst_27023 = (0);
var state_27159__$1 = (function (){var statearr_27225 = state_27159;
(statearr_27225[(7)] = inst_27023);

(statearr_27225[(8)] = inst_27021);

(statearr_27225[(32)] = inst_27043);

(statearr_27225[(9)] = inst_27022);

(statearr_27225[(10)] = inst_27020);

return statearr_27225;
})();
var statearr_27226_27295 = state_27159__$1;
(statearr_27226_27295[(2)] = null);

(statearr_27226_27295[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (45))){
var state_27159__$1 = state_27159;
var statearr_27227_27296 = state_27159__$1;
(statearr_27227_27296[(2)] = null);

(statearr_27227_27296[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (26))){
var inst_27073 = (state_27159[(19)]);
var inst_27076 = (state_27159[(23)]);
var inst_27081 = (state_27159[(24)]);
var inst_27079 = (state_27159[(26)]);
var inst_27077 = (state_27159[(25)]);
var inst_27096 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27098 = (function (){var all_files = inst_27073;
var res_SINGLEQUOTE_ = inst_27076;
var res = inst_27077;
var files_not_loaded = inst_27079;
var dependencies_that_loaded = inst_27081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27076,inst_27081,inst_27079,inst_27077,inst_27096,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27097){
var map__27228 = p__27097;
var map__27228__$1 = ((((!((map__27228 == null)))?((((map__27228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27228):map__27228);
var namespace = cljs.core.get.call(null,map__27228__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27228__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27076,inst_27081,inst_27079,inst_27077,inst_27096,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27099 = cljs.core.map.call(null,inst_27098,inst_27077);
var inst_27100 = cljs.core.pr_str.call(null,inst_27099);
var inst_27101 = figwheel.client.utils.log.call(null,inst_27100);
var inst_27102 = (function (){var all_files = inst_27073;
var res_SINGLEQUOTE_ = inst_27076;
var res = inst_27077;
var files_not_loaded = inst_27079;
var dependencies_that_loaded = inst_27081;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27076,inst_27081,inst_27079,inst_27077,inst_27096,inst_27098,inst_27099,inst_27100,inst_27101,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27073,inst_27076,inst_27081,inst_27079,inst_27077,inst_27096,inst_27098,inst_27099,inst_27100,inst_27101,state_val_27160,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27103 = setTimeout(inst_27102,(10));
var state_27159__$1 = (function (){var statearr_27230 = state_27159;
(statearr_27230[(33)] = inst_27096);

(statearr_27230[(34)] = inst_27101);

return statearr_27230;
})();
var statearr_27231_27297 = state_27159__$1;
(statearr_27231_27297[(2)] = inst_27103);

(statearr_27231_27297[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (16))){
var state_27159__$1 = state_27159;
var statearr_27232_27298 = state_27159__$1;
(statearr_27232_27298[(2)] = reload_dependents);

(statearr_27232_27298[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (38))){
var inst_27113 = (state_27159[(16)]);
var inst_27130 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27113);
var state_27159__$1 = state_27159;
var statearr_27233_27299 = state_27159__$1;
(statearr_27233_27299[(2)] = inst_27130);

(statearr_27233_27299[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (30))){
var state_27159__$1 = state_27159;
var statearr_27234_27300 = state_27159__$1;
(statearr_27234_27300[(2)] = null);

(statearr_27234_27300[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (10))){
var inst_27033 = (state_27159[(22)]);
var inst_27035 = cljs.core.chunked_seq_QMARK_.call(null,inst_27033);
var state_27159__$1 = state_27159;
if(inst_27035){
var statearr_27235_27301 = state_27159__$1;
(statearr_27235_27301[(1)] = (13));

} else {
var statearr_27236_27302 = state_27159__$1;
(statearr_27236_27302[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (18))){
var inst_27067 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
if(cljs.core.truth_(inst_27067)){
var statearr_27237_27303 = state_27159__$1;
(statearr_27237_27303[(1)] = (19));

} else {
var statearr_27238_27304 = state_27159__$1;
(statearr_27238_27304[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (42))){
var state_27159__$1 = state_27159;
var statearr_27239_27305 = state_27159__$1;
(statearr_27239_27305[(2)] = null);

(statearr_27239_27305[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (37))){
var inst_27125 = (state_27159[(2)]);
var state_27159__$1 = state_27159;
var statearr_27240_27306 = state_27159__$1;
(statearr_27240_27306[(2)] = inst_27125);

(statearr_27240_27306[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27160 === (8))){
var inst_27033 = (state_27159[(22)]);
var inst_27020 = (state_27159[(10)]);
var inst_27033__$1 = cljs.core.seq.call(null,inst_27020);
var state_27159__$1 = (function (){var statearr_27241 = state_27159;
(statearr_27241[(22)] = inst_27033__$1);

return statearr_27241;
})();
if(inst_27033__$1){
var statearr_27242_27307 = state_27159__$1;
(statearr_27242_27307[(1)] = (10));

} else {
var statearr_27243_27308 = state_27159__$1;
(statearr_27243_27308[(1)] = (11));

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
});})(c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22044__auto__,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto____0 = (function (){
var statearr_27247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27247[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto__);

(statearr_27247[(1)] = (1));

return statearr_27247;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto____1 = (function (state_27159){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_27159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e27248){if((e27248 instanceof Object)){
var ex__22048__auto__ = e27248;
var statearr_27249_27309 = state_27159;
(statearr_27249_27309[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27310 = state_27159;
state_27159 = G__27310;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto__ = function(state_27159){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto____1.call(this,state_27159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22349__auto__ = (function (){var statearr_27250 = f__22348__auto__.call(null);
(statearr_27250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_27250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__,map__27005,map__27005__$1,opts,before_jsload,on_jsload,reload_dependents,map__27006,map__27006__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22347__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27313,link){
var map__27316 = p__27313;
var map__27316__$1 = ((((!((map__27316 == null)))?((((map__27316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27316):map__27316);
var file = cljs.core.get.call(null,map__27316__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27316,map__27316__$1,file){
return (function (p1__27311_SHARP_,p2__27312_SHARP_){
if(cljs.core._EQ_.call(null,p1__27311_SHARP_,p2__27312_SHARP_)){
return p1__27311_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27316,map__27316__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27322){
var map__27323 = p__27322;
var map__27323__$1 = ((((!((map__27323 == null)))?((((map__27323.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27323.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27323):map__27323);
var match_length = cljs.core.get.call(null,map__27323__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27323__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27318_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27318_SHARP_);
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
var args27325 = [];
var len__18846__auto___27328 = arguments.length;
var i__18847__auto___27329 = (0);
while(true){
if((i__18847__auto___27329 < len__18846__auto___27328)){
args27325.push((arguments[i__18847__auto___27329]));

var G__27330 = (i__18847__auto___27329 + (1));
i__18847__auto___27329 = G__27330;
continue;
} else {
}
break;
}

var G__27327 = args27325.length;
switch (G__27327) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27325.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27332_SHARP_,p2__27333_SHARP_){
return cljs.core.assoc.call(null,p1__27332_SHARP_,cljs.core.get.call(null,p2__27333_SHARP_,key),p2__27333_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27334){
var map__27337 = p__27334;
var map__27337__$1 = ((((!((map__27337 == null)))?((((map__27337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27337):map__27337);
var f_data = map__27337__$1;
var file = cljs.core.get.call(null,map__27337__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27339,files_msg){
var map__27346 = p__27339;
var map__27346__$1 = ((((!((map__27346 == null)))?((((map__27346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27346):map__27346);
var opts = map__27346__$1;
var on_cssload = cljs.core.get.call(null,map__27346__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27348_27352 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27349_27353 = null;
var count__27350_27354 = (0);
var i__27351_27355 = (0);
while(true){
if((i__27351_27355 < count__27350_27354)){
var f_27356 = cljs.core._nth.call(null,chunk__27349_27353,i__27351_27355);
figwheel.client.file_reloading.reload_css_file.call(null,f_27356);

var G__27357 = seq__27348_27352;
var G__27358 = chunk__27349_27353;
var G__27359 = count__27350_27354;
var G__27360 = (i__27351_27355 + (1));
seq__27348_27352 = G__27357;
chunk__27349_27353 = G__27358;
count__27350_27354 = G__27359;
i__27351_27355 = G__27360;
continue;
} else {
var temp__4657__auto___27361 = cljs.core.seq.call(null,seq__27348_27352);
if(temp__4657__auto___27361){
var seq__27348_27362__$1 = temp__4657__auto___27361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27348_27362__$1)){
var c__18591__auto___27363 = cljs.core.chunk_first.call(null,seq__27348_27362__$1);
var G__27364 = cljs.core.chunk_rest.call(null,seq__27348_27362__$1);
var G__27365 = c__18591__auto___27363;
var G__27366 = cljs.core.count.call(null,c__18591__auto___27363);
var G__27367 = (0);
seq__27348_27352 = G__27364;
chunk__27349_27353 = G__27365;
count__27350_27354 = G__27366;
i__27351_27355 = G__27367;
continue;
} else {
var f_27368 = cljs.core.first.call(null,seq__27348_27362__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27368);

var G__27369 = cljs.core.next.call(null,seq__27348_27362__$1);
var G__27370 = null;
var G__27371 = (0);
var G__27372 = (0);
seq__27348_27352 = G__27369;
chunk__27349_27353 = G__27370;
count__27350_27354 = G__27371;
i__27351_27355 = G__27372;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27346,map__27346__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27346,map__27346__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map