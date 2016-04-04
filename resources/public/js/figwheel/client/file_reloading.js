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
var or__18089__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18089__auto__){
return or__18089__auto__;
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
var or__18089__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__26407_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__26407_SHARP_));
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
var seq__26427 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__26428 = null;
var count__26429 = (0);
var i__26430 = (0);
while(true){
if((i__26430 < count__26429)){
var n = cljs.core._nth.call(null,chunk__26428,i__26430);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26436 = seq__26427;
var G__26437 = chunk__26428;
var G__26438 = count__26429;
var G__26439 = (i__26430 + (1));
seq__26427 = G__26436;
chunk__26428 = G__26437;
count__26429 = G__26438;
i__26430 = G__26439;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26427);
if(temp__4657__auto__){
var seq__26427__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26427__$1)){
var c__18892__auto__ = cljs.core.chunk_first.call(null,seq__26427__$1);
var G__26441 = cljs.core.chunk_rest.call(null,seq__26427__$1);
var G__26442 = c__18892__auto__;
var G__26443 = cljs.core.count.call(null,c__18892__auto__);
var G__26444 = (0);
seq__26427 = G__26441;
chunk__26428 = G__26442;
count__26429 = G__26443;
i__26430 = G__26444;
continue;
} else {
var n = cljs.core.first.call(null,seq__26427__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__26462 = cljs.core.next.call(null,seq__26427__$1);
var G__26463 = null;
var G__26464 = (0);
var G__26465 = (0);
seq__26427 = G__26462;
chunk__26428 = G__26463;
count__26429 = G__26464;
i__26430 = G__26465;
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

var seq__26540_26549 = cljs.core.seq.call(null,deps);
var chunk__26541_26550 = null;
var count__26542_26551 = (0);
var i__26543_26552 = (0);
while(true){
if((i__26543_26552 < count__26542_26551)){
var dep_26553 = cljs.core._nth.call(null,chunk__26541_26550,i__26543_26552);
topo_sort_helper_STAR_.call(null,dep_26553,(depth + (1)),state);

var G__26554 = seq__26540_26549;
var G__26555 = chunk__26541_26550;
var G__26556 = count__26542_26551;
var G__26557 = (i__26543_26552 + (1));
seq__26540_26549 = G__26554;
chunk__26541_26550 = G__26555;
count__26542_26551 = G__26556;
i__26543_26552 = G__26557;
continue;
} else {
var temp__4657__auto___26558 = cljs.core.seq.call(null,seq__26540_26549);
if(temp__4657__auto___26558){
var seq__26540_26560__$1 = temp__4657__auto___26558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26540_26560__$1)){
var c__18892__auto___26562 = cljs.core.chunk_first.call(null,seq__26540_26560__$1);
var G__26563 = cljs.core.chunk_rest.call(null,seq__26540_26560__$1);
var G__26564 = c__18892__auto___26562;
var G__26565 = cljs.core.count.call(null,c__18892__auto___26562);
var G__26566 = (0);
seq__26540_26549 = G__26563;
chunk__26541_26550 = G__26564;
count__26542_26551 = G__26565;
i__26543_26552 = G__26566;
continue;
} else {
var dep_26568 = cljs.core.first.call(null,seq__26540_26560__$1);
topo_sort_helper_STAR_.call(null,dep_26568,(depth + (1)),state);

var G__26569 = cljs.core.next.call(null,seq__26540_26560__$1);
var G__26570 = null;
var G__26571 = (0);
var G__26572 = (0);
seq__26540_26549 = G__26569;
chunk__26541_26550 = G__26570;
count__26542_26551 = G__26571;
i__26543_26552 = G__26572;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__26544){
var vec__26546 = p__26544;
var x = cljs.core.nth.call(null,vec__26546,(0),null);
var xs = cljs.core.nthnext.call(null,vec__26546,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__26546,x,xs,get_deps__$1){
return (function (p1__26474_SHARP_){
return clojure.set.difference.call(null,p1__26474_SHARP_,x);
});})(vec__26546,x,xs,get_deps__$1))
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
var seq__26609 = cljs.core.seq.call(null,provides);
var chunk__26610 = null;
var count__26611 = (0);
var i__26612 = (0);
while(true){
if((i__26612 < count__26611)){
var prov = cljs.core._nth.call(null,chunk__26610,i__26612);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26613_26649 = cljs.core.seq.call(null,requires);
var chunk__26614_26650 = null;
var count__26615_26651 = (0);
var i__26616_26652 = (0);
while(true){
if((i__26616_26652 < count__26615_26651)){
var req_26655 = cljs.core._nth.call(null,chunk__26614_26650,i__26616_26652);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26655,prov);

var G__26658 = seq__26613_26649;
var G__26659 = chunk__26614_26650;
var G__26660 = count__26615_26651;
var G__26661 = (i__26616_26652 + (1));
seq__26613_26649 = G__26658;
chunk__26614_26650 = G__26659;
count__26615_26651 = G__26660;
i__26616_26652 = G__26661;
continue;
} else {
var temp__4657__auto___26664 = cljs.core.seq.call(null,seq__26613_26649);
if(temp__4657__auto___26664){
var seq__26613_26666__$1 = temp__4657__auto___26664;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26613_26666__$1)){
var c__18892__auto___26669 = cljs.core.chunk_first.call(null,seq__26613_26666__$1);
var G__26670 = cljs.core.chunk_rest.call(null,seq__26613_26666__$1);
var G__26671 = c__18892__auto___26669;
var G__26672 = cljs.core.count.call(null,c__18892__auto___26669);
var G__26673 = (0);
seq__26613_26649 = G__26670;
chunk__26614_26650 = G__26671;
count__26615_26651 = G__26672;
i__26616_26652 = G__26673;
continue;
} else {
var req_26675 = cljs.core.first.call(null,seq__26613_26666__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26675,prov);

var G__26676 = cljs.core.next.call(null,seq__26613_26666__$1);
var G__26677 = null;
var G__26678 = (0);
var G__26679 = (0);
seq__26613_26649 = G__26676;
chunk__26614_26650 = G__26677;
count__26615_26651 = G__26678;
i__26616_26652 = G__26679;
continue;
}
} else {
}
}
break;
}

var G__26680 = seq__26609;
var G__26681 = chunk__26610;
var G__26682 = count__26611;
var G__26683 = (i__26612 + (1));
seq__26609 = G__26680;
chunk__26610 = G__26681;
count__26611 = G__26682;
i__26612 = G__26683;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__26609);
if(temp__4657__auto__){
var seq__26609__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26609__$1)){
var c__18892__auto__ = cljs.core.chunk_first.call(null,seq__26609__$1);
var G__26684 = cljs.core.chunk_rest.call(null,seq__26609__$1);
var G__26685 = c__18892__auto__;
var G__26686 = cljs.core.count.call(null,c__18892__auto__);
var G__26687 = (0);
seq__26609 = G__26684;
chunk__26610 = G__26685;
count__26611 = G__26686;
i__26612 = G__26687;
continue;
} else {
var prov = cljs.core.first.call(null,seq__26609__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__26622_26688 = cljs.core.seq.call(null,requires);
var chunk__26623_26689 = null;
var count__26624_26690 = (0);
var i__26625_26691 = (0);
while(true){
if((i__26625_26691 < count__26624_26690)){
var req_26692 = cljs.core._nth.call(null,chunk__26623_26689,i__26625_26691);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26692,prov);

var G__26693 = seq__26622_26688;
var G__26694 = chunk__26623_26689;
var G__26695 = count__26624_26690;
var G__26696 = (i__26625_26691 + (1));
seq__26622_26688 = G__26693;
chunk__26623_26689 = G__26694;
count__26624_26690 = G__26695;
i__26625_26691 = G__26696;
continue;
} else {
var temp__4657__auto___26697__$1 = cljs.core.seq.call(null,seq__26622_26688);
if(temp__4657__auto___26697__$1){
var seq__26622_26698__$1 = temp__4657__auto___26697__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26622_26698__$1)){
var c__18892__auto___26699 = cljs.core.chunk_first.call(null,seq__26622_26698__$1);
var G__26700 = cljs.core.chunk_rest.call(null,seq__26622_26698__$1);
var G__26701 = c__18892__auto___26699;
var G__26702 = cljs.core.count.call(null,c__18892__auto___26699);
var G__26703 = (0);
seq__26622_26688 = G__26700;
chunk__26623_26689 = G__26701;
count__26624_26690 = G__26702;
i__26625_26691 = G__26703;
continue;
} else {
var req_26704 = cljs.core.first.call(null,seq__26622_26698__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_26704,prov);

var G__26705 = cljs.core.next.call(null,seq__26622_26698__$1);
var G__26706 = null;
var G__26707 = (0);
var G__26708 = (0);
seq__26622_26688 = G__26705;
chunk__26623_26689 = G__26706;
count__26624_26690 = G__26707;
i__26625_26691 = G__26708;
continue;
}
} else {
}
}
break;
}

var G__26709 = cljs.core.next.call(null,seq__26609__$1);
var G__26710 = null;
var G__26711 = (0);
var G__26712 = (0);
seq__26609 = G__26709;
chunk__26610 = G__26710;
count__26611 = G__26711;
i__26612 = G__26712;
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
var seq__26719_26723 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__26720_26724 = null;
var count__26721_26725 = (0);
var i__26722_26726 = (0);
while(true){
if((i__26722_26726 < count__26721_26725)){
var ns_26727 = cljs.core._nth.call(null,chunk__26720_26724,i__26722_26726);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26727);

var G__26734 = seq__26719_26723;
var G__26735 = chunk__26720_26724;
var G__26736 = count__26721_26725;
var G__26737 = (i__26722_26726 + (1));
seq__26719_26723 = G__26734;
chunk__26720_26724 = G__26735;
count__26721_26725 = G__26736;
i__26722_26726 = G__26737;
continue;
} else {
var temp__4657__auto___26744 = cljs.core.seq.call(null,seq__26719_26723);
if(temp__4657__auto___26744){
var seq__26719_26746__$1 = temp__4657__auto___26744;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26719_26746__$1)){
var c__18892__auto___26748 = cljs.core.chunk_first.call(null,seq__26719_26746__$1);
var G__26750 = cljs.core.chunk_rest.call(null,seq__26719_26746__$1);
var G__26751 = c__18892__auto___26748;
var G__26752 = cljs.core.count.call(null,c__18892__auto___26748);
var G__26753 = (0);
seq__26719_26723 = G__26750;
chunk__26720_26724 = G__26751;
count__26721_26725 = G__26752;
i__26722_26726 = G__26753;
continue;
} else {
var ns_26757 = cljs.core.first.call(null,seq__26719_26746__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_26757);

var G__26760 = cljs.core.next.call(null,seq__26719_26746__$1);
var G__26761 = null;
var G__26762 = (0);
var G__26763 = (0);
seq__26719_26723 = G__26760;
chunk__26720_26724 = G__26761;
count__26721_26725 = G__26762;
i__26722_26726 = G__26763;
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
goog.require_figwheel_backup_ = (function (){var or__18089__auto__ = goog.require__;
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
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
var G__26786__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__26786 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26787__i = 0, G__26787__a = new Array(arguments.length -  0);
while (G__26787__i < G__26787__a.length) {G__26787__a[G__26787__i] = arguments[G__26787__i + 0]; ++G__26787__i;}
  args = new cljs.core.IndexedSeq(G__26787__a,0);
} 
return G__26786__delegate.call(this,args);};
G__26786.cljs$lang$maxFixedArity = 0;
G__26786.cljs$lang$applyTo = (function (arglist__26788){
var args = cljs.core.seq(arglist__26788);
return G__26786__delegate(args);
});
G__26786.cljs$core$IFn$_invoke$arity$variadic = G__26786__delegate;
return G__26786;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__26790 = cljs.core._EQ_;
var expr__26791 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__26790.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__26791))){
var path_parts = ((function (pred__26790,expr__26791){
return (function (p1__26789_SHARP_){
return clojure.string.split.call(null,p1__26789_SHARP_,/[\/\\]/);
});})(pred__26790,expr__26791))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__26790,expr__26791){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e26793){if((e26793 instanceof Error)){
var e = e26793;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e26793;

}
}})());
});
;})(path_parts,sep,root,pred__26790,expr__26791))
} else {
if(cljs.core.truth_(pred__26790.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__26791))){
return ((function (pred__26790,expr__26791){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__26790,expr__26791){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__26790,expr__26791))
);

return deferred.addErrback(((function (deferred,pred__26790,expr__26791){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__26790,expr__26791))
);
});
;})(pred__26790,expr__26791))
} else {
return ((function (pred__26790,expr__26791){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__26790,expr__26791))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__26796,callback){
var map__26799 = p__26796;
var map__26799__$1 = ((((!((map__26799 == null)))?((((map__26799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26799):map__26799);
var file_msg = map__26799__$1;
var request_url = cljs.core.get.call(null,map__26799__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__26799,map__26799__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__26799,map__26799__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__){
return (function (state_26823){
var state_val_26824 = (state_26823[(1)]);
if((state_val_26824 === (7))){
var inst_26819 = (state_26823[(2)]);
var state_26823__$1 = state_26823;
var statearr_26825_26845 = state_26823__$1;
(statearr_26825_26845[(2)] = inst_26819);

(statearr_26825_26845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (1))){
var state_26823__$1 = state_26823;
var statearr_26826_26846 = state_26823__$1;
(statearr_26826_26846[(2)] = null);

(statearr_26826_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (4))){
var inst_26803 = (state_26823[(7)]);
var inst_26803__$1 = (state_26823[(2)]);
var state_26823__$1 = (function (){var statearr_26827 = state_26823;
(statearr_26827[(7)] = inst_26803__$1);

return statearr_26827;
})();
if(cljs.core.truth_(inst_26803__$1)){
var statearr_26828_26847 = state_26823__$1;
(statearr_26828_26847[(1)] = (5));

} else {
var statearr_26829_26848 = state_26823__$1;
(statearr_26829_26848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (6))){
var state_26823__$1 = state_26823;
var statearr_26830_26849 = state_26823__$1;
(statearr_26830_26849[(2)] = null);

(statearr_26830_26849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (3))){
var inst_26821 = (state_26823[(2)]);
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26823__$1,inst_26821);
} else {
if((state_val_26824 === (2))){
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26823__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_26824 === (11))){
var inst_26815 = (state_26823[(2)]);
var state_26823__$1 = (function (){var statearr_26831 = state_26823;
(statearr_26831[(8)] = inst_26815);

return statearr_26831;
})();
var statearr_26832_26850 = state_26823__$1;
(statearr_26832_26850[(2)] = null);

(statearr_26832_26850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (9))){
var inst_26807 = (state_26823[(9)]);
var inst_26809 = (state_26823[(10)]);
var inst_26811 = inst_26809.call(null,inst_26807);
var state_26823__$1 = state_26823;
var statearr_26833_26851 = state_26823__$1;
(statearr_26833_26851[(2)] = inst_26811);

(statearr_26833_26851[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (5))){
var inst_26803 = (state_26823[(7)]);
var inst_26805 = figwheel.client.file_reloading.blocking_load.call(null,inst_26803);
var state_26823__$1 = state_26823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26823__$1,(8),inst_26805);
} else {
if((state_val_26824 === (10))){
var inst_26807 = (state_26823[(9)]);
var inst_26813 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_26807);
var state_26823__$1 = state_26823;
var statearr_26834_26852 = state_26823__$1;
(statearr_26834_26852[(2)] = inst_26813);

(statearr_26834_26852[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26824 === (8))){
var inst_26803 = (state_26823[(7)]);
var inst_26809 = (state_26823[(10)]);
var inst_26807 = (state_26823[(2)]);
var inst_26808 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_26809__$1 = cljs.core.get.call(null,inst_26808,inst_26803);
var state_26823__$1 = (function (){var statearr_26835 = state_26823;
(statearr_26835[(9)] = inst_26807);

(statearr_26835[(10)] = inst_26809__$1);

return statearr_26835;
})();
if(cljs.core.truth_(inst_26809__$1)){
var statearr_26836_26853 = state_26823__$1;
(statearr_26836_26853[(1)] = (9));

} else {
var statearr_26837_26854 = state_26823__$1;
(statearr_26837_26854[(1)] = (10));

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
});})(c__21983__auto__))
;
return ((function (switch__21732__auto__,c__21983__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__21733__auto__ = null;
var figwheel$client$file_reloading$state_machine__21733__auto____0 = (function (){
var statearr_26841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26841[(0)] = figwheel$client$file_reloading$state_machine__21733__auto__);

(statearr_26841[(1)] = (1));

return statearr_26841;
});
var figwheel$client$file_reloading$state_machine__21733__auto____1 = (function (state_26823){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_26823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e26842){if((e26842 instanceof Object)){
var ex__21736__auto__ = e26842;
var statearr_26843_26855 = state_26823;
(statearr_26843_26855[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26856 = state_26823;
state_26823 = G__26856;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__21733__auto__ = function(state_26823){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__21733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__21733__auto____1.call(this,state_26823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__21733__auto____0;
figwheel$client$file_reloading$state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__21733__auto____1;
return figwheel$client$file_reloading$state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__))
})();
var state__21985__auto__ = (function (){var statearr_26844 = f__21984__auto__.call(null);
(statearr_26844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_26844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__))
);

return c__21983__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__26857,callback){
var map__26860 = p__26857;
var map__26860__$1 = ((((!((map__26860 == null)))?((((map__26860.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26860.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26860):map__26860);
var file_msg = map__26860__$1;
var namespace = cljs.core.get.call(null,map__26860__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__26860,map__26860__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__26860,map__26860__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__26862){
var map__26865 = p__26862;
var map__26865__$1 = ((((!((map__26865 == null)))?((((map__26865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26865):map__26865);
var file_msg = map__26865__$1;
var namespace = cljs.core.get.call(null,map__26865__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18077__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18077__auto__){
var or__18089__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
var or__18089__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18089__auto____$1)){
return or__18089__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18077__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__26867,callback){
var map__26870 = p__26867;
var map__26870__$1 = ((((!((map__26870 == null)))?((((map__26870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26870):map__26870);
var file_msg = map__26870__$1;
var request_url = cljs.core.get.call(null,map__26870__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__26870__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__21983__auto___26958 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___26958,out){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___26958,out){
return (function (state_26940){
var state_val_26941 = (state_26940[(1)]);
if((state_val_26941 === (1))){
var inst_26918 = cljs.core.nth.call(null,files,(0),null);
var inst_26919 = cljs.core.nthnext.call(null,files,(1));
var inst_26920 = files;
var state_26940__$1 = (function (){var statearr_26942 = state_26940;
(statearr_26942[(7)] = inst_26920);

(statearr_26942[(8)] = inst_26919);

(statearr_26942[(9)] = inst_26918);

return statearr_26942;
})();
var statearr_26943_26959 = state_26940__$1;
(statearr_26943_26959[(2)] = null);

(statearr_26943_26959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (2))){
var inst_26920 = (state_26940[(7)]);
var inst_26923 = (state_26940[(10)]);
var inst_26923__$1 = cljs.core.nth.call(null,inst_26920,(0),null);
var inst_26924 = cljs.core.nthnext.call(null,inst_26920,(1));
var inst_26925 = (inst_26923__$1 == null);
var inst_26926 = cljs.core.not.call(null,inst_26925);
var state_26940__$1 = (function (){var statearr_26944 = state_26940;
(statearr_26944[(11)] = inst_26924);

(statearr_26944[(10)] = inst_26923__$1);

return statearr_26944;
})();
if(inst_26926){
var statearr_26945_26960 = state_26940__$1;
(statearr_26945_26960[(1)] = (4));

} else {
var statearr_26946_26961 = state_26940__$1;
(statearr_26946_26961[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (3))){
var inst_26938 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26940__$1,inst_26938);
} else {
if((state_val_26941 === (4))){
var inst_26923 = (state_26940[(10)]);
var inst_26928 = figwheel.client.file_reloading.reload_js_file.call(null,inst_26923);
var state_26940__$1 = state_26940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26940__$1,(7),inst_26928);
} else {
if((state_val_26941 === (5))){
var inst_26934 = cljs.core.async.close_BANG_.call(null,out);
var state_26940__$1 = state_26940;
var statearr_26947_26962 = state_26940__$1;
(statearr_26947_26962[(2)] = inst_26934);

(statearr_26947_26962[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (6))){
var inst_26936 = (state_26940[(2)]);
var state_26940__$1 = state_26940;
var statearr_26948_26963 = state_26940__$1;
(statearr_26948_26963[(2)] = inst_26936);

(statearr_26948_26963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26941 === (7))){
var inst_26924 = (state_26940[(11)]);
var inst_26930 = (state_26940[(2)]);
var inst_26931 = cljs.core.async.put_BANG_.call(null,out,inst_26930);
var inst_26920 = inst_26924;
var state_26940__$1 = (function (){var statearr_26949 = state_26940;
(statearr_26949[(12)] = inst_26931);

(statearr_26949[(7)] = inst_26920);

return statearr_26949;
})();
var statearr_26950_26964 = state_26940__$1;
(statearr_26950_26964[(2)] = null);

(statearr_26950_26964[(1)] = (2));


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
});})(c__21983__auto___26958,out))
;
return ((function (switch__21732__auto__,c__21983__auto___26958,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto____0 = (function (){
var statearr_26954 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26954[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto__);

(statearr_26954[(1)] = (1));

return statearr_26954;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto____1 = (function (state_26940){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_26940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e26955){if((e26955 instanceof Object)){
var ex__21736__auto__ = e26955;
var statearr_26956_26965 = state_26940;
(statearr_26956_26965[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26966 = state_26940;
state_26940 = G__26966;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto__ = function(state_26940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto____1.call(this,state_26940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___26958,out))
})();
var state__21985__auto__ = (function (){var statearr_26957 = f__21984__auto__.call(null);
(statearr_26957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___26958);

return statearr_26957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___26958,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__26967,opts){
var map__26971 = p__26967;
var map__26971__$1 = ((((!((map__26971 == null)))?((((map__26971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26971):map__26971);
var eval_body__$1 = cljs.core.get.call(null,map__26971__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__26971__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18077__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18077__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18077__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e26973){var e = e26973;
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
return (function (p1__26974_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26974_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__26979){
var vec__26980 = p__26979;
var k = cljs.core.nth.call(null,vec__26980,(0),null);
var v = cljs.core.nth.call(null,vec__26980,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__26981){
var vec__26982 = p__26981;
var k = cljs.core.nth.call(null,vec__26982,(0),null);
var v = cljs.core.nth.call(null,vec__26982,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__26986,p__26987){
var map__27234 = p__26986;
var map__27234__$1 = ((((!((map__27234 == null)))?((((map__27234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27234):map__27234);
var opts = map__27234__$1;
var before_jsload = cljs.core.get.call(null,map__27234__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27234__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27234__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27235 = p__26987;
var map__27235__$1 = ((((!((map__27235 == null)))?((((map__27235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27235):map__27235);
var msg = map__27235__$1;
var files = cljs.core.get.call(null,map__27235__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27235__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27235__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27388){
var state_val_27389 = (state_27388[(1)]);
if((state_val_27389 === (7))){
var inst_27249 = (state_27388[(7)]);
var inst_27252 = (state_27388[(8)]);
var inst_27250 = (state_27388[(9)]);
var inst_27251 = (state_27388[(10)]);
var inst_27257 = cljs.core._nth.call(null,inst_27250,inst_27252);
var inst_27258 = figwheel.client.file_reloading.eval_body.call(null,inst_27257,opts);
var inst_27259 = (inst_27252 + (1));
var tmp27390 = inst_27249;
var tmp27391 = inst_27250;
var tmp27392 = inst_27251;
var inst_27249__$1 = tmp27390;
var inst_27250__$1 = tmp27391;
var inst_27251__$1 = tmp27392;
var inst_27252__$1 = inst_27259;
var state_27388__$1 = (function (){var statearr_27393 = state_27388;
(statearr_27393[(7)] = inst_27249__$1);

(statearr_27393[(8)] = inst_27252__$1);

(statearr_27393[(11)] = inst_27258);

(statearr_27393[(9)] = inst_27250__$1);

(statearr_27393[(10)] = inst_27251__$1);

return statearr_27393;
})();
var statearr_27394_27480 = state_27388__$1;
(statearr_27394_27480[(2)] = null);

(statearr_27394_27480[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (20))){
var inst_27292 = (state_27388[(12)]);
var inst_27300 = figwheel.client.file_reloading.sort_files.call(null,inst_27292);
var state_27388__$1 = state_27388;
var statearr_27395_27481 = state_27388__$1;
(statearr_27395_27481[(2)] = inst_27300);

(statearr_27395_27481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (27))){
var state_27388__$1 = state_27388;
var statearr_27396_27482 = state_27388__$1;
(statearr_27396_27482[(2)] = null);

(statearr_27396_27482[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (1))){
var inst_27241 = (state_27388[(13)]);
var inst_27238 = before_jsload.call(null,files);
var inst_27239 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27240 = (function (){return ((function (inst_27241,inst_27238,inst_27239,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26983_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26983_SHARP_);
});
;})(inst_27241,inst_27238,inst_27239,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27241__$1 = cljs.core.filter.call(null,inst_27240,files);
var inst_27242 = cljs.core.not_empty.call(null,inst_27241__$1);
var state_27388__$1 = (function (){var statearr_27397 = state_27388;
(statearr_27397[(14)] = inst_27238);

(statearr_27397[(13)] = inst_27241__$1);

(statearr_27397[(15)] = inst_27239);

return statearr_27397;
})();
if(cljs.core.truth_(inst_27242)){
var statearr_27398_27483 = state_27388__$1;
(statearr_27398_27483[(1)] = (2));

} else {
var statearr_27399_27484 = state_27388__$1;
(statearr_27399_27484[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (24))){
var state_27388__$1 = state_27388;
var statearr_27400_27485 = state_27388__$1;
(statearr_27400_27485[(2)] = null);

(statearr_27400_27485[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (39))){
var inst_27342 = (state_27388[(16)]);
var state_27388__$1 = state_27388;
var statearr_27401_27486 = state_27388__$1;
(statearr_27401_27486[(2)] = inst_27342);

(statearr_27401_27486[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (46))){
var inst_27383 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27402_27487 = state_27388__$1;
(statearr_27402_27487[(2)] = inst_27383);

(statearr_27402_27487[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (4))){
var inst_27286 = (state_27388[(2)]);
var inst_27287 = cljs.core.List.EMPTY;
var inst_27288 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27287);
var inst_27289 = (function (){return ((function (inst_27286,inst_27287,inst_27288,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26984_SHARP_){
var and__18077__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__26984_SHARP_);
if(cljs.core.truth_(and__18077__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__26984_SHARP_));
} else {
return and__18077__auto__;
}
});
;})(inst_27286,inst_27287,inst_27288,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27290 = cljs.core.filter.call(null,inst_27289,files);
var inst_27291 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27292 = cljs.core.concat.call(null,inst_27290,inst_27291);
var state_27388__$1 = (function (){var statearr_27403 = state_27388;
(statearr_27403[(12)] = inst_27292);

(statearr_27403[(17)] = inst_27288);

(statearr_27403[(18)] = inst_27286);

return statearr_27403;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27404_27488 = state_27388__$1;
(statearr_27404_27488[(1)] = (16));

} else {
var statearr_27405_27489 = state_27388__$1;
(statearr_27405_27489[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (15))){
var inst_27276 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27406_27490 = state_27388__$1;
(statearr_27406_27490[(2)] = inst_27276);

(statearr_27406_27490[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (21))){
var inst_27302 = (state_27388[(19)]);
var inst_27302__$1 = (state_27388[(2)]);
var inst_27303 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27302__$1);
var state_27388__$1 = (function (){var statearr_27407 = state_27388;
(statearr_27407[(19)] = inst_27302__$1);

return statearr_27407;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27388__$1,(22),inst_27303);
} else {
if((state_val_27389 === (31))){
var inst_27386 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27388__$1,inst_27386);
} else {
if((state_val_27389 === (32))){
var inst_27342 = (state_27388[(16)]);
var inst_27347 = inst_27342.cljs$lang$protocol_mask$partition0$;
var inst_27348 = (inst_27347 & (64));
var inst_27349 = inst_27342.cljs$core$ISeq$;
var inst_27350 = (inst_27348) || (inst_27349);
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27350)){
var statearr_27408_27491 = state_27388__$1;
(statearr_27408_27491[(1)] = (35));

} else {
var statearr_27409_27492 = state_27388__$1;
(statearr_27409_27492[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (40))){
var inst_27363 = (state_27388[(20)]);
var inst_27362 = (state_27388[(2)]);
var inst_27363__$1 = cljs.core.get.call(null,inst_27362,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27364 = cljs.core.get.call(null,inst_27362,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27365 = cljs.core.not_empty.call(null,inst_27363__$1);
var state_27388__$1 = (function (){var statearr_27410 = state_27388;
(statearr_27410[(20)] = inst_27363__$1);

(statearr_27410[(21)] = inst_27364);

return statearr_27410;
})();
if(cljs.core.truth_(inst_27365)){
var statearr_27411_27493 = state_27388__$1;
(statearr_27411_27493[(1)] = (41));

} else {
var statearr_27412_27494 = state_27388__$1;
(statearr_27412_27494[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (33))){
var state_27388__$1 = state_27388;
var statearr_27413_27495 = state_27388__$1;
(statearr_27413_27495[(2)] = false);

(statearr_27413_27495[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (13))){
var inst_27262 = (state_27388[(22)]);
var inst_27266 = cljs.core.chunk_first.call(null,inst_27262);
var inst_27267 = cljs.core.chunk_rest.call(null,inst_27262);
var inst_27268 = cljs.core.count.call(null,inst_27266);
var inst_27249 = inst_27267;
var inst_27250 = inst_27266;
var inst_27251 = inst_27268;
var inst_27252 = (0);
var state_27388__$1 = (function (){var statearr_27414 = state_27388;
(statearr_27414[(7)] = inst_27249);

(statearr_27414[(8)] = inst_27252);

(statearr_27414[(9)] = inst_27250);

(statearr_27414[(10)] = inst_27251);

return statearr_27414;
})();
var statearr_27415_27496 = state_27388__$1;
(statearr_27415_27496[(2)] = null);

(statearr_27415_27496[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (22))){
var inst_27302 = (state_27388[(19)]);
var inst_27306 = (state_27388[(23)]);
var inst_27310 = (state_27388[(24)]);
var inst_27305 = (state_27388[(25)]);
var inst_27305__$1 = (state_27388[(2)]);
var inst_27306__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27305__$1);
var inst_27307 = (function (){var all_files = inst_27302;
var res_SINGLEQUOTE_ = inst_27305__$1;
var res = inst_27306__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27302,inst_27306,inst_27310,inst_27305,inst_27305__$1,inst_27306__$1,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__26985_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__26985_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27302,inst_27306,inst_27310,inst_27305,inst_27305__$1,inst_27306__$1,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27308 = cljs.core.filter.call(null,inst_27307,inst_27305__$1);
var inst_27309 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27310__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27309);
var inst_27311 = cljs.core.not_empty.call(null,inst_27310__$1);
var state_27388__$1 = (function (){var statearr_27416 = state_27388;
(statearr_27416[(26)] = inst_27308);

(statearr_27416[(23)] = inst_27306__$1);

(statearr_27416[(24)] = inst_27310__$1);

(statearr_27416[(25)] = inst_27305__$1);

return statearr_27416;
})();
if(cljs.core.truth_(inst_27311)){
var statearr_27417_27497 = state_27388__$1;
(statearr_27417_27497[(1)] = (23));

} else {
var statearr_27418_27498 = state_27388__$1;
(statearr_27418_27498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (36))){
var state_27388__$1 = state_27388;
var statearr_27419_27499 = state_27388__$1;
(statearr_27419_27499[(2)] = false);

(statearr_27419_27499[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (41))){
var inst_27363 = (state_27388[(20)]);
var inst_27367 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27368 = cljs.core.map.call(null,inst_27367,inst_27363);
var inst_27369 = cljs.core.pr_str.call(null,inst_27368);
var inst_27370 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27369)].join('');
var inst_27371 = figwheel.client.utils.log.call(null,inst_27370);
var state_27388__$1 = state_27388;
var statearr_27420_27500 = state_27388__$1;
(statearr_27420_27500[(2)] = inst_27371);

(statearr_27420_27500[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (43))){
var inst_27364 = (state_27388[(21)]);
var inst_27374 = (state_27388[(2)]);
var inst_27375 = cljs.core.not_empty.call(null,inst_27364);
var state_27388__$1 = (function (){var statearr_27421 = state_27388;
(statearr_27421[(27)] = inst_27374);

return statearr_27421;
})();
if(cljs.core.truth_(inst_27375)){
var statearr_27422_27501 = state_27388__$1;
(statearr_27422_27501[(1)] = (44));

} else {
var statearr_27423_27502 = state_27388__$1;
(statearr_27423_27502[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (29))){
var inst_27308 = (state_27388[(26)]);
var inst_27302 = (state_27388[(19)]);
var inst_27306 = (state_27388[(23)]);
var inst_27342 = (state_27388[(16)]);
var inst_27310 = (state_27388[(24)]);
var inst_27305 = (state_27388[(25)]);
var inst_27338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27341 = (function (){var all_files = inst_27302;
var res_SINGLEQUOTE_ = inst_27305;
var res = inst_27306;
var files_not_loaded = inst_27308;
var dependencies_that_loaded = inst_27310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27342,inst_27310,inst_27305,inst_27338,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27340){
var map__27424 = p__27340;
var map__27424__$1 = ((((!((map__27424 == null)))?((((map__27424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27424):map__27424);
var namespace = cljs.core.get.call(null,map__27424__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27342,inst_27310,inst_27305,inst_27338,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27342__$1 = cljs.core.group_by.call(null,inst_27341,inst_27308);
var inst_27344 = (inst_27342__$1 == null);
var inst_27345 = cljs.core.not.call(null,inst_27344);
var state_27388__$1 = (function (){var statearr_27426 = state_27388;
(statearr_27426[(28)] = inst_27338);

(statearr_27426[(16)] = inst_27342__$1);

return statearr_27426;
})();
if(inst_27345){
var statearr_27427_27503 = state_27388__$1;
(statearr_27427_27503[(1)] = (32));

} else {
var statearr_27428_27504 = state_27388__$1;
(statearr_27428_27504[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (44))){
var inst_27364 = (state_27388[(21)]);
var inst_27377 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27364);
var inst_27378 = cljs.core.pr_str.call(null,inst_27377);
var inst_27379 = [cljs.core.str("not required: "),cljs.core.str(inst_27378)].join('');
var inst_27380 = figwheel.client.utils.log.call(null,inst_27379);
var state_27388__$1 = state_27388;
var statearr_27429_27505 = state_27388__$1;
(statearr_27429_27505[(2)] = inst_27380);

(statearr_27429_27505[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (6))){
var inst_27283 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27430_27506 = state_27388__$1;
(statearr_27430_27506[(2)] = inst_27283);

(statearr_27430_27506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (28))){
var inst_27308 = (state_27388[(26)]);
var inst_27335 = (state_27388[(2)]);
var inst_27336 = cljs.core.not_empty.call(null,inst_27308);
var state_27388__$1 = (function (){var statearr_27431 = state_27388;
(statearr_27431[(29)] = inst_27335);

return statearr_27431;
})();
if(cljs.core.truth_(inst_27336)){
var statearr_27432_27507 = state_27388__$1;
(statearr_27432_27507[(1)] = (29));

} else {
var statearr_27433_27508 = state_27388__$1;
(statearr_27433_27508[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (25))){
var inst_27306 = (state_27388[(23)]);
var inst_27322 = (state_27388[(2)]);
var inst_27323 = cljs.core.not_empty.call(null,inst_27306);
var state_27388__$1 = (function (){var statearr_27434 = state_27388;
(statearr_27434[(30)] = inst_27322);

return statearr_27434;
})();
if(cljs.core.truth_(inst_27323)){
var statearr_27435_27509 = state_27388__$1;
(statearr_27435_27509[(1)] = (26));

} else {
var statearr_27436_27510 = state_27388__$1;
(statearr_27436_27510[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (34))){
var inst_27357 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27357)){
var statearr_27437_27511 = state_27388__$1;
(statearr_27437_27511[(1)] = (38));

} else {
var statearr_27438_27512 = state_27388__$1;
(statearr_27438_27512[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (17))){
var state_27388__$1 = state_27388;
var statearr_27439_27513 = state_27388__$1;
(statearr_27439_27513[(2)] = recompile_dependents);

(statearr_27439_27513[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (3))){
var state_27388__$1 = state_27388;
var statearr_27440_27514 = state_27388__$1;
(statearr_27440_27514[(2)] = null);

(statearr_27440_27514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (12))){
var inst_27279 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27441_27515 = state_27388__$1;
(statearr_27441_27515[(2)] = inst_27279);

(statearr_27441_27515[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (2))){
var inst_27241 = (state_27388[(13)]);
var inst_27248 = cljs.core.seq.call(null,inst_27241);
var inst_27249 = inst_27248;
var inst_27250 = null;
var inst_27251 = (0);
var inst_27252 = (0);
var state_27388__$1 = (function (){var statearr_27442 = state_27388;
(statearr_27442[(7)] = inst_27249);

(statearr_27442[(8)] = inst_27252);

(statearr_27442[(9)] = inst_27250);

(statearr_27442[(10)] = inst_27251);

return statearr_27442;
})();
var statearr_27443_27516 = state_27388__$1;
(statearr_27443_27516[(2)] = null);

(statearr_27443_27516[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (23))){
var inst_27308 = (state_27388[(26)]);
var inst_27302 = (state_27388[(19)]);
var inst_27306 = (state_27388[(23)]);
var inst_27310 = (state_27388[(24)]);
var inst_27305 = (state_27388[(25)]);
var inst_27313 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27315 = (function (){var all_files = inst_27302;
var res_SINGLEQUOTE_ = inst_27305;
var res = inst_27306;
var files_not_loaded = inst_27308;
var dependencies_that_loaded = inst_27310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27310,inst_27305,inst_27313,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27314){
var map__27444 = p__27314;
var map__27444__$1 = ((((!((map__27444 == null)))?((((map__27444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27444):map__27444);
var request_url = cljs.core.get.call(null,map__27444__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27310,inst_27305,inst_27313,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27316 = cljs.core.reverse.call(null,inst_27310);
var inst_27317 = cljs.core.map.call(null,inst_27315,inst_27316);
var inst_27318 = cljs.core.pr_str.call(null,inst_27317);
var inst_27319 = figwheel.client.utils.log.call(null,inst_27318);
var state_27388__$1 = (function (){var statearr_27446 = state_27388;
(statearr_27446[(31)] = inst_27313);

return statearr_27446;
})();
var statearr_27447_27517 = state_27388__$1;
(statearr_27447_27517[(2)] = inst_27319);

(statearr_27447_27517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (35))){
var state_27388__$1 = state_27388;
var statearr_27448_27518 = state_27388__$1;
(statearr_27448_27518[(2)] = true);

(statearr_27448_27518[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (19))){
var inst_27292 = (state_27388[(12)]);
var inst_27298 = figwheel.client.file_reloading.expand_files.call(null,inst_27292);
var state_27388__$1 = state_27388;
var statearr_27449_27519 = state_27388__$1;
(statearr_27449_27519[(2)] = inst_27298);

(statearr_27449_27519[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (11))){
var state_27388__$1 = state_27388;
var statearr_27450_27520 = state_27388__$1;
(statearr_27450_27520[(2)] = null);

(statearr_27450_27520[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (9))){
var inst_27281 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27451_27521 = state_27388__$1;
(statearr_27451_27521[(2)] = inst_27281);

(statearr_27451_27521[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (5))){
var inst_27252 = (state_27388[(8)]);
var inst_27251 = (state_27388[(10)]);
var inst_27254 = (inst_27252 < inst_27251);
var inst_27255 = inst_27254;
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27255)){
var statearr_27452_27522 = state_27388__$1;
(statearr_27452_27522[(1)] = (7));

} else {
var statearr_27453_27523 = state_27388__$1;
(statearr_27453_27523[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (14))){
var inst_27262 = (state_27388[(22)]);
var inst_27271 = cljs.core.first.call(null,inst_27262);
var inst_27272 = figwheel.client.file_reloading.eval_body.call(null,inst_27271,opts);
var inst_27273 = cljs.core.next.call(null,inst_27262);
var inst_27249 = inst_27273;
var inst_27250 = null;
var inst_27251 = (0);
var inst_27252 = (0);
var state_27388__$1 = (function (){var statearr_27454 = state_27388;
(statearr_27454[(32)] = inst_27272);

(statearr_27454[(7)] = inst_27249);

(statearr_27454[(8)] = inst_27252);

(statearr_27454[(9)] = inst_27250);

(statearr_27454[(10)] = inst_27251);

return statearr_27454;
})();
var statearr_27455_27524 = state_27388__$1;
(statearr_27455_27524[(2)] = null);

(statearr_27455_27524[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (45))){
var state_27388__$1 = state_27388;
var statearr_27456_27525 = state_27388__$1;
(statearr_27456_27525[(2)] = null);

(statearr_27456_27525[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (26))){
var inst_27308 = (state_27388[(26)]);
var inst_27302 = (state_27388[(19)]);
var inst_27306 = (state_27388[(23)]);
var inst_27310 = (state_27388[(24)]);
var inst_27305 = (state_27388[(25)]);
var inst_27325 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27327 = (function (){var all_files = inst_27302;
var res_SINGLEQUOTE_ = inst_27305;
var res = inst_27306;
var files_not_loaded = inst_27308;
var dependencies_that_loaded = inst_27310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27310,inst_27305,inst_27325,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27326){
var map__27457 = p__27326;
var map__27457__$1 = ((((!((map__27457 == null)))?((((map__27457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27457):map__27457);
var namespace = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27457__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27310,inst_27305,inst_27325,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27328 = cljs.core.map.call(null,inst_27327,inst_27306);
var inst_27329 = cljs.core.pr_str.call(null,inst_27328);
var inst_27330 = figwheel.client.utils.log.call(null,inst_27329);
var inst_27331 = (function (){var all_files = inst_27302;
var res_SINGLEQUOTE_ = inst_27305;
var res = inst_27306;
var files_not_loaded = inst_27308;
var dependencies_that_loaded = inst_27310;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27310,inst_27305,inst_27325,inst_27327,inst_27328,inst_27329,inst_27330,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27308,inst_27302,inst_27306,inst_27310,inst_27305,inst_27325,inst_27327,inst_27328,inst_27329,inst_27330,state_val_27389,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27332 = setTimeout(inst_27331,(10));
var state_27388__$1 = (function (){var statearr_27459 = state_27388;
(statearr_27459[(33)] = inst_27325);

(statearr_27459[(34)] = inst_27330);

return statearr_27459;
})();
var statearr_27460_27526 = state_27388__$1;
(statearr_27460_27526[(2)] = inst_27332);

(statearr_27460_27526[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (16))){
var state_27388__$1 = state_27388;
var statearr_27461_27527 = state_27388__$1;
(statearr_27461_27527[(2)] = reload_dependents);

(statearr_27461_27527[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (38))){
var inst_27342 = (state_27388[(16)]);
var inst_27359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27342);
var state_27388__$1 = state_27388;
var statearr_27462_27528 = state_27388__$1;
(statearr_27462_27528[(2)] = inst_27359);

(statearr_27462_27528[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (30))){
var state_27388__$1 = state_27388;
var statearr_27463_27529 = state_27388__$1;
(statearr_27463_27529[(2)] = null);

(statearr_27463_27529[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (10))){
var inst_27262 = (state_27388[(22)]);
var inst_27264 = cljs.core.chunked_seq_QMARK_.call(null,inst_27262);
var state_27388__$1 = state_27388;
if(inst_27264){
var statearr_27464_27530 = state_27388__$1;
(statearr_27464_27530[(1)] = (13));

} else {
var statearr_27465_27531 = state_27388__$1;
(statearr_27465_27531[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (18))){
var inst_27296 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
if(cljs.core.truth_(inst_27296)){
var statearr_27466_27532 = state_27388__$1;
(statearr_27466_27532[(1)] = (19));

} else {
var statearr_27467_27533 = state_27388__$1;
(statearr_27467_27533[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (42))){
var state_27388__$1 = state_27388;
var statearr_27468_27534 = state_27388__$1;
(statearr_27468_27534[(2)] = null);

(statearr_27468_27534[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (37))){
var inst_27354 = (state_27388[(2)]);
var state_27388__$1 = state_27388;
var statearr_27469_27535 = state_27388__$1;
(statearr_27469_27535[(2)] = inst_27354);

(statearr_27469_27535[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27389 === (8))){
var inst_27249 = (state_27388[(7)]);
var inst_27262 = (state_27388[(22)]);
var inst_27262__$1 = cljs.core.seq.call(null,inst_27249);
var state_27388__$1 = (function (){var statearr_27470 = state_27388;
(statearr_27470[(22)] = inst_27262__$1);

return statearr_27470;
})();
if(inst_27262__$1){
var statearr_27471_27536 = state_27388__$1;
(statearr_27471_27536[(1)] = (10));

} else {
var statearr_27472_27537 = state_27388__$1;
(statearr_27472_27537[(1)] = (11));

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
});})(c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__21732__auto__,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto____0 = (function (){
var statearr_27476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27476[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto__);

(statearr_27476[(1)] = (1));

return statearr_27476;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto____1 = (function (state_27388){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_27388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e27477){if((e27477 instanceof Object)){
var ex__21736__auto__ = e27477;
var statearr_27478_27538 = state_27388;
(statearr_27478_27538[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27539 = state_27388;
state_27388 = G__27539;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto__ = function(state_27388){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto____1.call(this,state_27388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21985__auto__ = (function (){var statearr_27479 = f__21984__auto__.call(null);
(statearr_27479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_27479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__,map__27234,map__27234__$1,opts,before_jsload,on_jsload,reload_dependents,map__27235,map__27235__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21983__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__27542,link){
var map__27545 = p__27542;
var map__27545__$1 = ((((!((map__27545 == null)))?((((map__27545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27545):map__27545);
var file = cljs.core.get.call(null,map__27545__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__27545,map__27545__$1,file){
return (function (p1__27540_SHARP_,p2__27541_SHARP_){
if(cljs.core._EQ_.call(null,p1__27540_SHARP_,p2__27541_SHARP_)){
return p1__27540_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__27545,map__27545__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__27551){
var map__27552 = p__27551;
var map__27552__$1 = ((((!((map__27552 == null)))?((((map__27552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27552):map__27552);
var match_length = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__27552__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__27547_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__27547_SHARP_);
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
var args27554 = [];
var len__19147__auto___27557 = arguments.length;
var i__19148__auto___27558 = (0);
while(true){
if((i__19148__auto___27558 < len__19147__auto___27557)){
args27554.push((arguments[i__19148__auto___27558]));

var G__27559 = (i__19148__auto___27558 + (1));
i__19148__auto___27558 = G__27559;
continue;
} else {
}
break;
}

var G__27556 = args27554.length;
switch (G__27556) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27554.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__27561_SHARP_,p2__27562_SHARP_){
return cljs.core.assoc.call(null,p1__27561_SHARP_,cljs.core.get.call(null,p2__27562_SHARP_,key),p2__27562_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__27563){
var map__27566 = p__27563;
var map__27566__$1 = ((((!((map__27566 == null)))?((((map__27566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27566):map__27566);
var f_data = map__27566__$1;
var file = cljs.core.get.call(null,map__27566__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__27568,files_msg){
var map__27575 = p__27568;
var map__27575__$1 = ((((!((map__27575 == null)))?((((map__27575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27575):map__27575);
var opts = map__27575__$1;
var on_cssload = cljs.core.get.call(null,map__27575__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__27577_27581 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__27578_27582 = null;
var count__27579_27583 = (0);
var i__27580_27584 = (0);
while(true){
if((i__27580_27584 < count__27579_27583)){
var f_27585 = cljs.core._nth.call(null,chunk__27578_27582,i__27580_27584);
figwheel.client.file_reloading.reload_css_file.call(null,f_27585);

var G__27586 = seq__27577_27581;
var G__27587 = chunk__27578_27582;
var G__27588 = count__27579_27583;
var G__27589 = (i__27580_27584 + (1));
seq__27577_27581 = G__27586;
chunk__27578_27582 = G__27587;
count__27579_27583 = G__27588;
i__27580_27584 = G__27589;
continue;
} else {
var temp__4657__auto___27590 = cljs.core.seq.call(null,seq__27577_27581);
if(temp__4657__auto___27590){
var seq__27577_27591__$1 = temp__4657__auto___27590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27577_27591__$1)){
var c__18892__auto___27592 = cljs.core.chunk_first.call(null,seq__27577_27591__$1);
var G__27593 = cljs.core.chunk_rest.call(null,seq__27577_27591__$1);
var G__27594 = c__18892__auto___27592;
var G__27595 = cljs.core.count.call(null,c__18892__auto___27592);
var G__27596 = (0);
seq__27577_27581 = G__27593;
chunk__27578_27582 = G__27594;
count__27579_27583 = G__27595;
i__27580_27584 = G__27596;
continue;
} else {
var f_27597 = cljs.core.first.call(null,seq__27577_27591__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_27597);

var G__27598 = cljs.core.next.call(null,seq__27577_27591__$1);
var G__27599 = null;
var G__27600 = (0);
var G__27601 = (0);
seq__27577_27581 = G__27598;
chunk__27578_27582 = G__27599;
count__27579_27583 = G__27600;
i__27580_27584 = G__27601;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__27575,map__27575__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__27575,map__27575__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map