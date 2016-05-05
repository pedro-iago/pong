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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41326_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41326_SHARP_));
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
var seq__41351 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41352 = null;
var count__41353 = (0);
var i__41354 = (0);
while(true){
if((i__41354 < count__41353)){
var n = cljs.core._nth.call(null,chunk__41352,i__41354);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41372 = seq__41351;
var G__41373 = chunk__41352;
var G__41374 = count__41353;
var G__41375 = (i__41354 + (1));
seq__41351 = G__41372;
chunk__41352 = G__41373;
count__41353 = G__41374;
i__41354 = G__41375;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41351);
if(temp__4657__auto__){
var seq__41351__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41351__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41351__$1);
var G__41411 = cljs.core.chunk_rest.call(null,seq__41351__$1);
var G__41412 = c__19529__auto__;
var G__41413 = cljs.core.count.call(null,c__19529__auto__);
var G__41414 = (0);
seq__41351 = G__41411;
chunk__41352 = G__41412;
count__41353 = G__41413;
i__41354 = G__41414;
continue;
} else {
var n = cljs.core.first.call(null,seq__41351__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41415 = cljs.core.next.call(null,seq__41351__$1);
var G__41416 = null;
var G__41417 = (0);
var G__41418 = (0);
seq__41351 = G__41415;
chunk__41352 = G__41416;
count__41353 = G__41417;
i__41354 = G__41418;
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

var seq__41468_41504 = cljs.core.seq.call(null,deps);
var chunk__41469_41505 = null;
var count__41470_41506 = (0);
var i__41471_41507 = (0);
while(true){
if((i__41471_41507 < count__41470_41506)){
var dep_41509 = cljs.core._nth.call(null,chunk__41469_41505,i__41471_41507);
topo_sort_helper_STAR_.call(null,dep_41509,(depth + (1)),state);

var G__41510 = seq__41468_41504;
var G__41511 = chunk__41469_41505;
var G__41512 = count__41470_41506;
var G__41513 = (i__41471_41507 + (1));
seq__41468_41504 = G__41510;
chunk__41469_41505 = G__41511;
count__41470_41506 = G__41512;
i__41471_41507 = G__41513;
continue;
} else {
var temp__4657__auto___41518 = cljs.core.seq.call(null,seq__41468_41504);
if(temp__4657__auto___41518){
var seq__41468_41531__$1 = temp__4657__auto___41518;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41468_41531__$1)){
var c__19529__auto___41534 = cljs.core.chunk_first.call(null,seq__41468_41531__$1);
var G__41535 = cljs.core.chunk_rest.call(null,seq__41468_41531__$1);
var G__41536 = c__19529__auto___41534;
var G__41537 = cljs.core.count.call(null,c__19529__auto___41534);
var G__41538 = (0);
seq__41468_41504 = G__41535;
chunk__41469_41505 = G__41536;
count__41470_41506 = G__41537;
i__41471_41507 = G__41538;
continue;
} else {
var dep_41539 = cljs.core.first.call(null,seq__41468_41531__$1);
topo_sort_helper_STAR_.call(null,dep_41539,(depth + (1)),state);

var G__41540 = cljs.core.next.call(null,seq__41468_41531__$1);
var G__41541 = null;
var G__41542 = (0);
var G__41543 = (0);
seq__41468_41504 = G__41540;
chunk__41469_41505 = G__41541;
count__41470_41506 = G__41542;
i__41471_41507 = G__41543;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41472){
var vec__41474 = p__41472;
var x = cljs.core.nth.call(null,vec__41474,(0),null);
var xs = cljs.core.nthnext.call(null,vec__41474,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41474,x,xs,get_deps__$1){
return (function (p1__41419_SHARP_){
return clojure.set.difference.call(null,p1__41419_SHARP_,x);
});})(vec__41474,x,xs,get_deps__$1))
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
var seq__41567 = cljs.core.seq.call(null,provides);
var chunk__41568 = null;
var count__41569 = (0);
var i__41570 = (0);
while(true){
if((i__41570 < count__41569)){
var prov = cljs.core._nth.call(null,chunk__41568,i__41570);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41571_41646 = cljs.core.seq.call(null,requires);
var chunk__41572_41647 = null;
var count__41573_41648 = (0);
var i__41574_41649 = (0);
while(true){
if((i__41574_41649 < count__41573_41648)){
var req_41652 = cljs.core._nth.call(null,chunk__41572_41647,i__41574_41649);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41652,prov);

var G__41653 = seq__41571_41646;
var G__41654 = chunk__41572_41647;
var G__41655 = count__41573_41648;
var G__41656 = (i__41574_41649 + (1));
seq__41571_41646 = G__41653;
chunk__41572_41647 = G__41654;
count__41573_41648 = G__41655;
i__41574_41649 = G__41656;
continue;
} else {
var temp__4657__auto___41657 = cljs.core.seq.call(null,seq__41571_41646);
if(temp__4657__auto___41657){
var seq__41571_41658__$1 = temp__4657__auto___41657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41571_41658__$1)){
var c__19529__auto___41659 = cljs.core.chunk_first.call(null,seq__41571_41658__$1);
var G__41660 = cljs.core.chunk_rest.call(null,seq__41571_41658__$1);
var G__41661 = c__19529__auto___41659;
var G__41662 = cljs.core.count.call(null,c__19529__auto___41659);
var G__41663 = (0);
seq__41571_41646 = G__41660;
chunk__41572_41647 = G__41661;
count__41573_41648 = G__41662;
i__41574_41649 = G__41663;
continue;
} else {
var req_41664 = cljs.core.first.call(null,seq__41571_41658__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41664,prov);

var G__41665 = cljs.core.next.call(null,seq__41571_41658__$1);
var G__41666 = null;
var G__41667 = (0);
var G__41668 = (0);
seq__41571_41646 = G__41665;
chunk__41572_41647 = G__41666;
count__41573_41648 = G__41667;
i__41574_41649 = G__41668;
continue;
}
} else {
}
}
break;
}

var G__41669 = seq__41567;
var G__41670 = chunk__41568;
var G__41671 = count__41569;
var G__41672 = (i__41570 + (1));
seq__41567 = G__41669;
chunk__41568 = G__41670;
count__41569 = G__41671;
i__41570 = G__41672;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41567);
if(temp__4657__auto__){
var seq__41567__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41567__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41567__$1);
var G__41673 = cljs.core.chunk_rest.call(null,seq__41567__$1);
var G__41674 = c__19529__auto__;
var G__41675 = cljs.core.count.call(null,c__19529__auto__);
var G__41676 = (0);
seq__41567 = G__41673;
chunk__41568 = G__41674;
count__41569 = G__41675;
i__41570 = G__41676;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41567__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41576_41692 = cljs.core.seq.call(null,requires);
var chunk__41577_41693 = null;
var count__41578_41694 = (0);
var i__41579_41695 = (0);
while(true){
if((i__41579_41695 < count__41578_41694)){
var req_41696 = cljs.core._nth.call(null,chunk__41577_41693,i__41579_41695);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41696,prov);

var G__41701 = seq__41576_41692;
var G__41702 = chunk__41577_41693;
var G__41703 = count__41578_41694;
var G__41704 = (i__41579_41695 + (1));
seq__41576_41692 = G__41701;
chunk__41577_41693 = G__41702;
count__41578_41694 = G__41703;
i__41579_41695 = G__41704;
continue;
} else {
var temp__4657__auto___41706__$1 = cljs.core.seq.call(null,seq__41576_41692);
if(temp__4657__auto___41706__$1){
var seq__41576_41707__$1 = temp__4657__auto___41706__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41576_41707__$1)){
var c__19529__auto___41708 = cljs.core.chunk_first.call(null,seq__41576_41707__$1);
var G__41709 = cljs.core.chunk_rest.call(null,seq__41576_41707__$1);
var G__41710 = c__19529__auto___41708;
var G__41711 = cljs.core.count.call(null,c__19529__auto___41708);
var G__41712 = (0);
seq__41576_41692 = G__41709;
chunk__41577_41693 = G__41710;
count__41578_41694 = G__41711;
i__41579_41695 = G__41712;
continue;
} else {
var req_41714 = cljs.core.first.call(null,seq__41576_41707__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41714,prov);

var G__41715 = cljs.core.next.call(null,seq__41576_41707__$1);
var G__41716 = null;
var G__41717 = (0);
var G__41718 = (0);
seq__41576_41692 = G__41715;
chunk__41577_41693 = G__41716;
count__41578_41694 = G__41717;
i__41579_41695 = G__41718;
continue;
}
} else {
}
}
break;
}

var G__41720 = cljs.core.next.call(null,seq__41567__$1);
var G__41721 = null;
var G__41722 = (0);
var G__41723 = (0);
seq__41567 = G__41720;
chunk__41568 = G__41721;
count__41569 = G__41722;
i__41570 = G__41723;
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
var seq__41730_41740 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41731_41741 = null;
var count__41732_41742 = (0);
var i__41733_41743 = (0);
while(true){
if((i__41733_41743 < count__41732_41742)){
var ns_41745 = cljs.core._nth.call(null,chunk__41731_41741,i__41733_41743);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41745);

var G__41746 = seq__41730_41740;
var G__41747 = chunk__41731_41741;
var G__41748 = count__41732_41742;
var G__41749 = (i__41733_41743 + (1));
seq__41730_41740 = G__41746;
chunk__41731_41741 = G__41747;
count__41732_41742 = G__41748;
i__41733_41743 = G__41749;
continue;
} else {
var temp__4657__auto___41750 = cljs.core.seq.call(null,seq__41730_41740);
if(temp__4657__auto___41750){
var seq__41730_41751__$1 = temp__4657__auto___41750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41730_41751__$1)){
var c__19529__auto___41753 = cljs.core.chunk_first.call(null,seq__41730_41751__$1);
var G__41754 = cljs.core.chunk_rest.call(null,seq__41730_41751__$1);
var G__41755 = c__19529__auto___41753;
var G__41756 = cljs.core.count.call(null,c__19529__auto___41753);
var G__41757 = (0);
seq__41730_41740 = G__41754;
chunk__41731_41741 = G__41755;
count__41732_41742 = G__41756;
i__41733_41743 = G__41757;
continue;
} else {
var ns_41758 = cljs.core.first.call(null,seq__41730_41751__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41758);

var G__41760 = cljs.core.next.call(null,seq__41730_41751__$1);
var G__41761 = null;
var G__41762 = (0);
var G__41763 = (0);
seq__41730_41740 = G__41760;
chunk__41731_41741 = G__41761;
count__41732_41742 = G__41762;
i__41733_41743 = G__41763;
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
var G__41773__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41773 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41774__i = 0, G__41774__a = new Array(arguments.length -  0);
while (G__41774__i < G__41774__a.length) {G__41774__a[G__41774__i] = arguments[G__41774__i + 0]; ++G__41774__i;}
  args = new cljs.core.IndexedSeq(G__41774__a,0);
} 
return G__41773__delegate.call(this,args);};
G__41773.cljs$lang$maxFixedArity = 0;
G__41773.cljs$lang$applyTo = (function (arglist__41775){
var args = cljs.core.seq(arglist__41775);
return G__41773__delegate(args);
});
G__41773.cljs$core$IFn$_invoke$arity$variadic = G__41773__delegate;
return G__41773;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41788 = cljs.core._EQ_;
var expr__41789 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41788.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41789))){
var path_parts = ((function (pred__41788,expr__41789){
return (function (p1__41785_SHARP_){
return clojure.string.split.call(null,p1__41785_SHARP_,/[\/\\]/);
});})(pred__41788,expr__41789))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__41788,expr__41789){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41792){if((e41792 instanceof Error)){
var e = e41792;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41792;

}
}})());
});
;})(path_parts,sep,root,pred__41788,expr__41789))
} else {
if(cljs.core.truth_(pred__41788.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41789))){
return ((function (pred__41788,expr__41789){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__41788,expr__41789){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__41788,expr__41789))
);

return deferred.addErrback(((function (deferred,pred__41788,expr__41789){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__41788,expr__41789))
);
});
;})(pred__41788,expr__41789))
} else {
return ((function (pred__41788,expr__41789){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41788,expr__41789))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__41807,callback){
var map__41813 = p__41807;
var map__41813__$1 = ((((!((map__41813 == null)))?((((map__41813.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41813.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41813):map__41813);
var file_msg = map__41813__$1;
var request_url = cljs.core.get.call(null,map__41813__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__41813,map__41813__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__41813,map__41813__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__){
return (function (state_41853){
var state_val_41854 = (state_41853[(1)]);
if((state_val_41854 === (7))){
var inst_41849 = (state_41853[(2)]);
var state_41853__$1 = state_41853;
var statearr_41855_41883 = state_41853__$1;
(statearr_41855_41883[(2)] = inst_41849);

(statearr_41855_41883[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (1))){
var state_41853__$1 = state_41853;
var statearr_41856_41884 = state_41853__$1;
(statearr_41856_41884[(2)] = null);

(statearr_41856_41884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (4))){
var inst_41833 = (state_41853[(7)]);
var inst_41833__$1 = (state_41853[(2)]);
var state_41853__$1 = (function (){var statearr_41861 = state_41853;
(statearr_41861[(7)] = inst_41833__$1);

return statearr_41861;
})();
if(cljs.core.truth_(inst_41833__$1)){
var statearr_41862_41890 = state_41853__$1;
(statearr_41862_41890[(1)] = (5));

} else {
var statearr_41863_41892 = state_41853__$1;
(statearr_41863_41892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (6))){
var state_41853__$1 = state_41853;
var statearr_41864_41893 = state_41853__$1;
(statearr_41864_41893[(2)] = null);

(statearr_41864_41893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (3))){
var inst_41851 = (state_41853[(2)]);
var state_41853__$1 = state_41853;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41853__$1,inst_41851);
} else {
if((state_val_41854 === (2))){
var state_41853__$1 = state_41853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41853__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_41854 === (11))){
var inst_41845 = (state_41853[(2)]);
var state_41853__$1 = (function (){var statearr_41865 = state_41853;
(statearr_41865[(8)] = inst_41845);

return statearr_41865;
})();
var statearr_41866_41904 = state_41853__$1;
(statearr_41866_41904[(2)] = null);

(statearr_41866_41904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (9))){
var inst_41837 = (state_41853[(9)]);
var inst_41839 = (state_41853[(10)]);
var inst_41841 = inst_41839.call(null,inst_41837);
var state_41853__$1 = state_41853;
var statearr_41867_41905 = state_41853__$1;
(statearr_41867_41905[(2)] = inst_41841);

(statearr_41867_41905[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (5))){
var inst_41833 = (state_41853[(7)]);
var inst_41835 = figwheel.client.file_reloading.blocking_load.call(null,inst_41833);
var state_41853__$1 = state_41853;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41853__$1,(8),inst_41835);
} else {
if((state_val_41854 === (10))){
var inst_41837 = (state_41853[(9)]);
var inst_41843 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_41837);
var state_41853__$1 = state_41853;
var statearr_41868_41910 = state_41853__$1;
(statearr_41868_41910[(2)] = inst_41843);

(statearr_41868_41910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41854 === (8))){
var inst_41833 = (state_41853[(7)]);
var inst_41839 = (state_41853[(10)]);
var inst_41837 = (state_41853[(2)]);
var inst_41838 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_41839__$1 = cljs.core.get.call(null,inst_41838,inst_41833);
var state_41853__$1 = (function (){var statearr_41869 = state_41853;
(statearr_41869[(9)] = inst_41837);

(statearr_41869[(10)] = inst_41839__$1);

return statearr_41869;
})();
if(cljs.core.truth_(inst_41839__$1)){
var statearr_41870_41919 = state_41853__$1;
(statearr_41870_41919[(1)] = (9));

} else {
var statearr_41871_41920 = state_41853__$1;
(statearr_41871_41920[(1)] = (10));

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
});})(c__33664__auto__))
;
return ((function (switch__33643__auto__,c__33664__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33644__auto__ = null;
var figwheel$client$file_reloading$state_machine__33644__auto____0 = (function (){
var statearr_41875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41875[(0)] = figwheel$client$file_reloading$state_machine__33644__auto__);

(statearr_41875[(1)] = (1));

return statearr_41875;
});
var figwheel$client$file_reloading$state_machine__33644__auto____1 = (function (state_41853){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_41853);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e41876){if((e41876 instanceof Object)){
var ex__33647__auto__ = e41876;
var statearr_41877_41926 = state_41853;
(statearr_41877_41926[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41853);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41928 = state_41853;
state_41853 = G__41928;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33644__auto__ = function(state_41853){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33644__auto____1.call(this,state_41853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33644__auto____0;
figwheel$client$file_reloading$state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33644__auto____1;
return figwheel$client$file_reloading$state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__))
})();
var state__33666__auto__ = (function (){var statearr_41878 = f__33665__auto__.call(null);
(statearr_41878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_41878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__))
);

return c__33664__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41936,callback){
var map__41940 = p__41936;
var map__41940__$1 = ((((!((map__41940 == null)))?((((map__41940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41940):map__41940);
var file_msg = map__41940__$1;
var namespace = cljs.core.get.call(null,map__41940__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41940,map__41940__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41940,map__41940__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41950){
var map__41957 = p__41950;
var map__41957__$1 = ((((!((map__41957 == null)))?((((map__41957.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41957.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41957):map__41957);
var file_msg = map__41957__$1;
var namespace = cljs.core.get.call(null,map__41957__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41973,callback){
var map__41976 = p__41973;
var map__41976__$1 = ((((!((map__41976 == null)))?((((map__41976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41976):map__41976);
var file_msg = map__41976__$1;
var request_url = cljs.core.get.call(null,map__41976__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41976__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33664__auto___42096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___42096,out){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___42096,out){
return (function (state_42068){
var state_val_42069 = (state_42068[(1)]);
if((state_val_42069 === (1))){
var inst_42046 = cljs.core.nth.call(null,files,(0),null);
var inst_42047 = cljs.core.nthnext.call(null,files,(1));
var inst_42048 = files;
var state_42068__$1 = (function (){var statearr_42071 = state_42068;
(statearr_42071[(7)] = inst_42048);

(statearr_42071[(8)] = inst_42047);

(statearr_42071[(9)] = inst_42046);

return statearr_42071;
})();
var statearr_42075_42097 = state_42068__$1;
(statearr_42075_42097[(2)] = null);

(statearr_42075_42097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (2))){
var inst_42048 = (state_42068[(7)]);
var inst_42051 = (state_42068[(10)]);
var inst_42051__$1 = cljs.core.nth.call(null,inst_42048,(0),null);
var inst_42052 = cljs.core.nthnext.call(null,inst_42048,(1));
var inst_42053 = (inst_42051__$1 == null);
var inst_42054 = cljs.core.not.call(null,inst_42053);
var state_42068__$1 = (function (){var statearr_42077 = state_42068;
(statearr_42077[(11)] = inst_42052);

(statearr_42077[(10)] = inst_42051__$1);

return statearr_42077;
})();
if(inst_42054){
var statearr_42078_42098 = state_42068__$1;
(statearr_42078_42098[(1)] = (4));

} else {
var statearr_42079_42099 = state_42068__$1;
(statearr_42079_42099[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (3))){
var inst_42066 = (state_42068[(2)]);
var state_42068__$1 = state_42068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42068__$1,inst_42066);
} else {
if((state_val_42069 === (4))){
var inst_42051 = (state_42068[(10)]);
var inst_42056 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42051);
var state_42068__$1 = state_42068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42068__$1,(7),inst_42056);
} else {
if((state_val_42069 === (5))){
var inst_42062 = cljs.core.async.close_BANG_.call(null,out);
var state_42068__$1 = state_42068;
var statearr_42081_42100 = state_42068__$1;
(statearr_42081_42100[(2)] = inst_42062);

(statearr_42081_42100[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (6))){
var inst_42064 = (state_42068[(2)]);
var state_42068__$1 = state_42068;
var statearr_42082_42101 = state_42068__$1;
(statearr_42082_42101[(2)] = inst_42064);

(statearr_42082_42101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (7))){
var inst_42052 = (state_42068[(11)]);
var inst_42058 = (state_42068[(2)]);
var inst_42059 = cljs.core.async.put_BANG_.call(null,out,inst_42058);
var inst_42048 = inst_42052;
var state_42068__$1 = (function (){var statearr_42083 = state_42068;
(statearr_42083[(7)] = inst_42048);

(statearr_42083[(12)] = inst_42059);

return statearr_42083;
})();
var statearr_42084_42102 = state_42068__$1;
(statearr_42084_42102[(2)] = null);

(statearr_42084_42102[(1)] = (2));


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
});})(c__33664__auto___42096,out))
;
return ((function (switch__33643__auto__,c__33664__auto___42096,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto____0 = (function (){
var statearr_42092 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42092[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto__);

(statearr_42092[(1)] = (1));

return statearr_42092;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto____1 = (function (state_42068){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_42068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e42093){if((e42093 instanceof Object)){
var ex__33647__auto__ = e42093;
var statearr_42094_42106 = state_42068;
(statearr_42094_42106[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42107 = state_42068;
state_42068 = G__42107;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto__ = function(state_42068){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto____1.call(this,state_42068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___42096,out))
})();
var state__33666__auto__ = (function (){var statearr_42095 = f__33665__auto__.call(null);
(statearr_42095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___42096);

return statearr_42095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___42096,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42108,opts){
var map__42115 = p__42108;
var map__42115__$1 = ((((!((map__42115 == null)))?((((map__42115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42115):map__42115);
var eval_body__$1 = cljs.core.get.call(null,map__42115__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42115__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e42117){var e = e42117;
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
return (function (p1__42118_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42118_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__42124){
var vec__42125 = p__42124;
var k = cljs.core.nth.call(null,vec__42125,(0),null);
var v = cljs.core.nth.call(null,vec__42125,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42126){
var vec__42127 = p__42126;
var k = cljs.core.nth.call(null,vec__42127,(0),null);
var v = cljs.core.nth.call(null,vec__42127,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42136,p__42137){
var map__42397 = p__42136;
var map__42397__$1 = ((((!((map__42397 == null)))?((((map__42397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42397):map__42397);
var opts = map__42397__$1;
var before_jsload = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42397__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42398 = p__42137;
var map__42398__$1 = ((((!((map__42398 == null)))?((((map__42398.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42398.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42398):map__42398);
var msg = map__42398__$1;
var files = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42398__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42556){
var state_val_42557 = (state_42556[(1)]);
if((state_val_42557 === (7))){
var inst_42412 = (state_42556[(7)]);
var inst_42413 = (state_42556[(8)]);
var inst_42415 = (state_42556[(9)]);
var inst_42414 = (state_42556[(10)]);
var inst_42421 = cljs.core._nth.call(null,inst_42413,inst_42415);
var inst_42422 = figwheel.client.file_reloading.eval_body.call(null,inst_42421,opts);
var inst_42423 = (inst_42415 + (1));
var tmp42558 = inst_42412;
var tmp42559 = inst_42413;
var tmp42560 = inst_42414;
var inst_42412__$1 = tmp42558;
var inst_42413__$1 = tmp42559;
var inst_42414__$1 = tmp42560;
var inst_42415__$1 = inst_42423;
var state_42556__$1 = (function (){var statearr_42561 = state_42556;
(statearr_42561[(11)] = inst_42422);

(statearr_42561[(7)] = inst_42412__$1);

(statearr_42561[(8)] = inst_42413__$1);

(statearr_42561[(9)] = inst_42415__$1);

(statearr_42561[(10)] = inst_42414__$1);

return statearr_42561;
})();
var statearr_42562_42665 = state_42556__$1;
(statearr_42562_42665[(2)] = null);

(statearr_42562_42665[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (20))){
var inst_42458 = (state_42556[(12)]);
var inst_42466 = figwheel.client.file_reloading.sort_files.call(null,inst_42458);
var state_42556__$1 = state_42556;
var statearr_42563_42666 = state_42556__$1;
(statearr_42563_42666[(2)] = inst_42466);

(statearr_42563_42666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (27))){
var state_42556__$1 = state_42556;
var statearr_42564_42667 = state_42556__$1;
(statearr_42564_42667[(2)] = null);

(statearr_42564_42667[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (1))){
var inst_42404 = (state_42556[(13)]);
var inst_42401 = before_jsload.call(null,files);
var inst_42402 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42403 = (function (){return ((function (inst_42404,inst_42401,inst_42402,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42128_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42128_SHARP_);
});
;})(inst_42404,inst_42401,inst_42402,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42404__$1 = cljs.core.filter.call(null,inst_42403,files);
var inst_42405 = cljs.core.not_empty.call(null,inst_42404__$1);
var state_42556__$1 = (function (){var statearr_42565 = state_42556;
(statearr_42565[(14)] = inst_42402);

(statearr_42565[(13)] = inst_42404__$1);

(statearr_42565[(15)] = inst_42401);

return statearr_42565;
})();
if(cljs.core.truth_(inst_42405)){
var statearr_42566_42669 = state_42556__$1;
(statearr_42566_42669[(1)] = (2));

} else {
var statearr_42567_42670 = state_42556__$1;
(statearr_42567_42670[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (24))){
var state_42556__$1 = state_42556;
var statearr_42568_42672 = state_42556__$1;
(statearr_42568_42672[(2)] = null);

(statearr_42568_42672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (39))){
var inst_42508 = (state_42556[(16)]);
var state_42556__$1 = state_42556;
var statearr_42569_42673 = state_42556__$1;
(statearr_42569_42673[(2)] = inst_42508);

(statearr_42569_42673[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (46))){
var inst_42551 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42570_42674 = state_42556__$1;
(statearr_42570_42674[(2)] = inst_42551);

(statearr_42570_42674[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (4))){
var inst_42452 = (state_42556[(2)]);
var inst_42453 = cljs.core.List.EMPTY;
var inst_42454 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42453);
var inst_42455 = (function (){return ((function (inst_42452,inst_42453,inst_42454,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42129_SHARP_){
var and__18714__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42129_SHARP_);
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42129_SHARP_));
} else {
return and__18714__auto__;
}
});
;})(inst_42452,inst_42453,inst_42454,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42456 = cljs.core.filter.call(null,inst_42455,files);
var inst_42457 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42458 = cljs.core.concat.call(null,inst_42456,inst_42457);
var state_42556__$1 = (function (){var statearr_42571 = state_42556;
(statearr_42571[(17)] = inst_42454);

(statearr_42571[(18)] = inst_42452);

(statearr_42571[(12)] = inst_42458);

return statearr_42571;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42572_42678 = state_42556__$1;
(statearr_42572_42678[(1)] = (16));

} else {
var statearr_42573_42679 = state_42556__$1;
(statearr_42573_42679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (15))){
var inst_42442 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42574_42680 = state_42556__$1;
(statearr_42574_42680[(2)] = inst_42442);

(statearr_42574_42680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (21))){
var inst_42468 = (state_42556[(19)]);
var inst_42468__$1 = (state_42556[(2)]);
var inst_42469 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42468__$1);
var state_42556__$1 = (function (){var statearr_42575 = state_42556;
(statearr_42575[(19)] = inst_42468__$1);

return statearr_42575;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42556__$1,(22),inst_42469);
} else {
if((state_val_42557 === (31))){
var inst_42554 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42556__$1,inst_42554);
} else {
if((state_val_42557 === (32))){
var inst_42508 = (state_42556[(16)]);
var inst_42513 = inst_42508.cljs$lang$protocol_mask$partition0$;
var inst_42514 = (inst_42513 & (64));
var inst_42515 = inst_42508.cljs$core$ISeq$;
var inst_42516 = (inst_42514) || (inst_42515);
var state_42556__$1 = state_42556;
if(cljs.core.truth_(inst_42516)){
var statearr_42576_42681 = state_42556__$1;
(statearr_42576_42681[(1)] = (35));

} else {
var statearr_42577_42682 = state_42556__$1;
(statearr_42577_42682[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (40))){
var inst_42531 = (state_42556[(20)]);
var inst_42529 = (state_42556[(2)]);
var inst_42531__$1 = cljs.core.get.call(null,inst_42529,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42532 = cljs.core.get.call(null,inst_42529,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42533 = cljs.core.not_empty.call(null,inst_42531__$1);
var state_42556__$1 = (function (){var statearr_42578 = state_42556;
(statearr_42578[(20)] = inst_42531__$1);

(statearr_42578[(21)] = inst_42532);

return statearr_42578;
})();
if(cljs.core.truth_(inst_42533)){
var statearr_42579_42683 = state_42556__$1;
(statearr_42579_42683[(1)] = (41));

} else {
var statearr_42580_42684 = state_42556__$1;
(statearr_42580_42684[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (33))){
var state_42556__$1 = state_42556;
var statearr_42581_42685 = state_42556__$1;
(statearr_42581_42685[(2)] = false);

(statearr_42581_42685[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (13))){
var inst_42426 = (state_42556[(22)]);
var inst_42430 = cljs.core.chunk_first.call(null,inst_42426);
var inst_42431 = cljs.core.chunk_rest.call(null,inst_42426);
var inst_42432 = cljs.core.count.call(null,inst_42430);
var inst_42412 = inst_42431;
var inst_42413 = inst_42430;
var inst_42414 = inst_42432;
var inst_42415 = (0);
var state_42556__$1 = (function (){var statearr_42582 = state_42556;
(statearr_42582[(7)] = inst_42412);

(statearr_42582[(8)] = inst_42413);

(statearr_42582[(9)] = inst_42415);

(statearr_42582[(10)] = inst_42414);

return statearr_42582;
})();
var statearr_42583_42686 = state_42556__$1;
(statearr_42583_42686[(2)] = null);

(statearr_42583_42686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (22))){
var inst_42476 = (state_42556[(23)]);
var inst_42472 = (state_42556[(24)]);
var inst_42471 = (state_42556[(25)]);
var inst_42468 = (state_42556[(19)]);
var inst_42471__$1 = (state_42556[(2)]);
var inst_42472__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42471__$1);
var inst_42473 = (function (){var all_files = inst_42468;
var res_SINGLEQUOTE_ = inst_42471__$1;
var res = inst_42472__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42476,inst_42472,inst_42471,inst_42468,inst_42471__$1,inst_42472__$1,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42133_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42133_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42476,inst_42472,inst_42471,inst_42468,inst_42471__$1,inst_42472__$1,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42474 = cljs.core.filter.call(null,inst_42473,inst_42471__$1);
var inst_42475 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42476__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42475);
var inst_42477 = cljs.core.not_empty.call(null,inst_42476__$1);
var state_42556__$1 = (function (){var statearr_42584 = state_42556;
(statearr_42584[(23)] = inst_42476__$1);

(statearr_42584[(24)] = inst_42472__$1);

(statearr_42584[(25)] = inst_42471__$1);

(statearr_42584[(26)] = inst_42474);

return statearr_42584;
})();
if(cljs.core.truth_(inst_42477)){
var statearr_42585_42694 = state_42556__$1;
(statearr_42585_42694[(1)] = (23));

} else {
var statearr_42586_42695 = state_42556__$1;
(statearr_42586_42695[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (36))){
var state_42556__$1 = state_42556;
var statearr_42587_42696 = state_42556__$1;
(statearr_42587_42696[(2)] = false);

(statearr_42587_42696[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (41))){
var inst_42531 = (state_42556[(20)]);
var inst_42535 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42536 = cljs.core.map.call(null,inst_42535,inst_42531);
var inst_42537 = cljs.core.pr_str.call(null,inst_42536);
var inst_42538 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42537)].join('');
var inst_42539 = figwheel.client.utils.log.call(null,inst_42538);
var state_42556__$1 = state_42556;
var statearr_42588_42698 = state_42556__$1;
(statearr_42588_42698[(2)] = inst_42539);

(statearr_42588_42698[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (43))){
var inst_42532 = (state_42556[(21)]);
var inst_42542 = (state_42556[(2)]);
var inst_42543 = cljs.core.not_empty.call(null,inst_42532);
var state_42556__$1 = (function (){var statearr_42589 = state_42556;
(statearr_42589[(27)] = inst_42542);

return statearr_42589;
})();
if(cljs.core.truth_(inst_42543)){
var statearr_42590_42699 = state_42556__$1;
(statearr_42590_42699[(1)] = (44));

} else {
var statearr_42591_42700 = state_42556__$1;
(statearr_42591_42700[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (29))){
var inst_42508 = (state_42556[(16)]);
var inst_42476 = (state_42556[(23)]);
var inst_42472 = (state_42556[(24)]);
var inst_42471 = (state_42556[(25)]);
var inst_42468 = (state_42556[(19)]);
var inst_42474 = (state_42556[(26)]);
var inst_42504 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42507 = (function (){var all_files = inst_42468;
var res_SINGLEQUOTE_ = inst_42471;
var res = inst_42472;
var files_not_loaded = inst_42474;
var dependencies_that_loaded = inst_42476;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42508,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42504,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42506){
var map__42592 = p__42506;
var map__42592__$1 = ((((!((map__42592 == null)))?((((map__42592.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42592.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42592):map__42592);
var namespace = cljs.core.get.call(null,map__42592__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42508,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42504,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42508__$1 = cljs.core.group_by.call(null,inst_42507,inst_42474);
var inst_42510 = (inst_42508__$1 == null);
var inst_42511 = cljs.core.not.call(null,inst_42510);
var state_42556__$1 = (function (){var statearr_42594 = state_42556;
(statearr_42594[(16)] = inst_42508__$1);

(statearr_42594[(28)] = inst_42504);

return statearr_42594;
})();
if(inst_42511){
var statearr_42595_42701 = state_42556__$1;
(statearr_42595_42701[(1)] = (32));

} else {
var statearr_42596_42702 = state_42556__$1;
(statearr_42596_42702[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (44))){
var inst_42532 = (state_42556[(21)]);
var inst_42545 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42532);
var inst_42546 = cljs.core.pr_str.call(null,inst_42545);
var inst_42547 = [cljs.core.str("not required: "),cljs.core.str(inst_42546)].join('');
var inst_42548 = figwheel.client.utils.log.call(null,inst_42547);
var state_42556__$1 = state_42556;
var statearr_42597_42703 = state_42556__$1;
(statearr_42597_42703[(2)] = inst_42548);

(statearr_42597_42703[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (6))){
var inst_42449 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42598_42704 = state_42556__$1;
(statearr_42598_42704[(2)] = inst_42449);

(statearr_42598_42704[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (28))){
var inst_42474 = (state_42556[(26)]);
var inst_42501 = (state_42556[(2)]);
var inst_42502 = cljs.core.not_empty.call(null,inst_42474);
var state_42556__$1 = (function (){var statearr_42599 = state_42556;
(statearr_42599[(29)] = inst_42501);

return statearr_42599;
})();
if(cljs.core.truth_(inst_42502)){
var statearr_42600_42705 = state_42556__$1;
(statearr_42600_42705[(1)] = (29));

} else {
var statearr_42601_42706 = state_42556__$1;
(statearr_42601_42706[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (25))){
var inst_42472 = (state_42556[(24)]);
var inst_42488 = (state_42556[(2)]);
var inst_42489 = cljs.core.not_empty.call(null,inst_42472);
var state_42556__$1 = (function (){var statearr_42602 = state_42556;
(statearr_42602[(30)] = inst_42488);

return statearr_42602;
})();
if(cljs.core.truth_(inst_42489)){
var statearr_42603_42707 = state_42556__$1;
(statearr_42603_42707[(1)] = (26));

} else {
var statearr_42604_42708 = state_42556__$1;
(statearr_42604_42708[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (34))){
var inst_42523 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
if(cljs.core.truth_(inst_42523)){
var statearr_42605_42709 = state_42556__$1;
(statearr_42605_42709[(1)] = (38));

} else {
var statearr_42606_42710 = state_42556__$1;
(statearr_42606_42710[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (17))){
var state_42556__$1 = state_42556;
var statearr_42607_42711 = state_42556__$1;
(statearr_42607_42711[(2)] = recompile_dependents);

(statearr_42607_42711[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (3))){
var state_42556__$1 = state_42556;
var statearr_42608_42712 = state_42556__$1;
(statearr_42608_42712[(2)] = null);

(statearr_42608_42712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (12))){
var inst_42445 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42609_42713 = state_42556__$1;
(statearr_42609_42713[(2)] = inst_42445);

(statearr_42609_42713[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (2))){
var inst_42404 = (state_42556[(13)]);
var inst_42411 = cljs.core.seq.call(null,inst_42404);
var inst_42412 = inst_42411;
var inst_42413 = null;
var inst_42414 = (0);
var inst_42415 = (0);
var state_42556__$1 = (function (){var statearr_42610 = state_42556;
(statearr_42610[(7)] = inst_42412);

(statearr_42610[(8)] = inst_42413);

(statearr_42610[(9)] = inst_42415);

(statearr_42610[(10)] = inst_42414);

return statearr_42610;
})();
var statearr_42611_42714 = state_42556__$1;
(statearr_42611_42714[(2)] = null);

(statearr_42611_42714[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (23))){
var inst_42476 = (state_42556[(23)]);
var inst_42472 = (state_42556[(24)]);
var inst_42471 = (state_42556[(25)]);
var inst_42468 = (state_42556[(19)]);
var inst_42474 = (state_42556[(26)]);
var inst_42479 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42481 = (function (){var all_files = inst_42468;
var res_SINGLEQUOTE_ = inst_42471;
var res = inst_42472;
var files_not_loaded = inst_42474;
var dependencies_that_loaded = inst_42476;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42479,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42480){
var map__42612 = p__42480;
var map__42612__$1 = ((((!((map__42612 == null)))?((((map__42612.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42612.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42612):map__42612);
var request_url = cljs.core.get.call(null,map__42612__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42479,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42482 = cljs.core.reverse.call(null,inst_42476);
var inst_42483 = cljs.core.map.call(null,inst_42481,inst_42482);
var inst_42484 = cljs.core.pr_str.call(null,inst_42483);
var inst_42485 = figwheel.client.utils.log.call(null,inst_42484);
var state_42556__$1 = (function (){var statearr_42614 = state_42556;
(statearr_42614[(31)] = inst_42479);

return statearr_42614;
})();
var statearr_42615_42715 = state_42556__$1;
(statearr_42615_42715[(2)] = inst_42485);

(statearr_42615_42715[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (35))){
var state_42556__$1 = state_42556;
var statearr_42616_42716 = state_42556__$1;
(statearr_42616_42716[(2)] = true);

(statearr_42616_42716[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (19))){
var inst_42458 = (state_42556[(12)]);
var inst_42464 = figwheel.client.file_reloading.expand_files.call(null,inst_42458);
var state_42556__$1 = state_42556;
var statearr_42617_42717 = state_42556__$1;
(statearr_42617_42717[(2)] = inst_42464);

(statearr_42617_42717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (11))){
var state_42556__$1 = state_42556;
var statearr_42618_42718 = state_42556__$1;
(statearr_42618_42718[(2)] = null);

(statearr_42618_42718[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (9))){
var inst_42447 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42620_42719 = state_42556__$1;
(statearr_42620_42719[(2)] = inst_42447);

(statearr_42620_42719[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (5))){
var inst_42415 = (state_42556[(9)]);
var inst_42414 = (state_42556[(10)]);
var inst_42417 = (inst_42415 < inst_42414);
var inst_42418 = inst_42417;
var state_42556__$1 = state_42556;
if(cljs.core.truth_(inst_42418)){
var statearr_42622_42720 = state_42556__$1;
(statearr_42622_42720[(1)] = (7));

} else {
var statearr_42623_42721 = state_42556__$1;
(statearr_42623_42721[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (14))){
var inst_42426 = (state_42556[(22)]);
var inst_42435 = cljs.core.first.call(null,inst_42426);
var inst_42437 = figwheel.client.file_reloading.eval_body.call(null,inst_42435,opts);
var inst_42439 = cljs.core.next.call(null,inst_42426);
var inst_42412 = inst_42439;
var inst_42413 = null;
var inst_42414 = (0);
var inst_42415 = (0);
var state_42556__$1 = (function (){var statearr_42624 = state_42556;
(statearr_42624[(7)] = inst_42412);

(statearr_42624[(8)] = inst_42413);

(statearr_42624[(9)] = inst_42415);

(statearr_42624[(10)] = inst_42414);

(statearr_42624[(32)] = inst_42437);

return statearr_42624;
})();
var statearr_42625_42722 = state_42556__$1;
(statearr_42625_42722[(2)] = null);

(statearr_42625_42722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (45))){
var state_42556__$1 = state_42556;
var statearr_42626_42723 = state_42556__$1;
(statearr_42626_42723[(2)] = null);

(statearr_42626_42723[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (26))){
var inst_42476 = (state_42556[(23)]);
var inst_42472 = (state_42556[(24)]);
var inst_42471 = (state_42556[(25)]);
var inst_42468 = (state_42556[(19)]);
var inst_42474 = (state_42556[(26)]);
var inst_42491 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42493 = (function (){var all_files = inst_42468;
var res_SINGLEQUOTE_ = inst_42471;
var res = inst_42472;
var files_not_loaded = inst_42474;
var dependencies_that_loaded = inst_42476;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42491,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42492){
var map__42632 = p__42492;
var map__42632__$1 = ((((!((map__42632 == null)))?((((map__42632.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42632.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42632):map__42632);
var namespace = cljs.core.get.call(null,map__42632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42632__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42491,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42494 = cljs.core.map.call(null,inst_42493,inst_42472);
var inst_42495 = cljs.core.pr_str.call(null,inst_42494);
var inst_42496 = figwheel.client.utils.log.call(null,inst_42495);
var inst_42497 = (function (){var all_files = inst_42468;
var res_SINGLEQUOTE_ = inst_42471;
var res = inst_42472;
var files_not_loaded = inst_42474;
var dependencies_that_loaded = inst_42476;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42491,inst_42493,inst_42494,inst_42495,inst_42496,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42476,inst_42472,inst_42471,inst_42468,inst_42474,inst_42491,inst_42493,inst_42494,inst_42495,inst_42496,state_val_42557,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42498 = setTimeout(inst_42497,(10));
var state_42556__$1 = (function (){var statearr_42634 = state_42556;
(statearr_42634[(33)] = inst_42491);

(statearr_42634[(34)] = inst_42496);

return statearr_42634;
})();
var statearr_42635_42724 = state_42556__$1;
(statearr_42635_42724[(2)] = inst_42498);

(statearr_42635_42724[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (16))){
var state_42556__$1 = state_42556;
var statearr_42636_42725 = state_42556__$1;
(statearr_42636_42725[(2)] = reload_dependents);

(statearr_42636_42725[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (38))){
var inst_42508 = (state_42556[(16)]);
var inst_42525 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42508);
var state_42556__$1 = state_42556;
var statearr_42637_42726 = state_42556__$1;
(statearr_42637_42726[(2)] = inst_42525);

(statearr_42637_42726[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (30))){
var state_42556__$1 = state_42556;
var statearr_42638_42727 = state_42556__$1;
(statearr_42638_42727[(2)] = null);

(statearr_42638_42727[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (10))){
var inst_42426 = (state_42556[(22)]);
var inst_42428 = cljs.core.chunked_seq_QMARK_.call(null,inst_42426);
var state_42556__$1 = state_42556;
if(inst_42428){
var statearr_42639_42728 = state_42556__$1;
(statearr_42639_42728[(1)] = (13));

} else {
var statearr_42640_42729 = state_42556__$1;
(statearr_42640_42729[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (18))){
var inst_42462 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
if(cljs.core.truth_(inst_42462)){
var statearr_42641_42730 = state_42556__$1;
(statearr_42641_42730[(1)] = (19));

} else {
var statearr_42642_42731 = state_42556__$1;
(statearr_42642_42731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (42))){
var state_42556__$1 = state_42556;
var statearr_42643_42732 = state_42556__$1;
(statearr_42643_42732[(2)] = null);

(statearr_42643_42732[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (37))){
var inst_42520 = (state_42556[(2)]);
var state_42556__$1 = state_42556;
var statearr_42644_42733 = state_42556__$1;
(statearr_42644_42733[(2)] = inst_42520);

(statearr_42644_42733[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42557 === (8))){
var inst_42412 = (state_42556[(7)]);
var inst_42426 = (state_42556[(22)]);
var inst_42426__$1 = cljs.core.seq.call(null,inst_42412);
var state_42556__$1 = (function (){var statearr_42645 = state_42556;
(statearr_42645[(22)] = inst_42426__$1);

return statearr_42645;
})();
if(inst_42426__$1){
var statearr_42651_42734 = state_42556__$1;
(statearr_42651_42734[(1)] = (10));

} else {
var statearr_42652_42735 = state_42556__$1;
(statearr_42652_42735[(1)] = (11));

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
});})(c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33643__auto__,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto____0 = (function (){
var statearr_42658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42658[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto__);

(statearr_42658[(1)] = (1));

return statearr_42658;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto____1 = (function (state_42556){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_42556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e42659){if((e42659 instanceof Object)){
var ex__33647__auto__ = e42659;
var statearr_42661_42736 = state_42556;
(statearr_42661_42736[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42737 = state_42556;
state_42556 = G__42737;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto__ = function(state_42556){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto____1.call(this,state_42556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33666__auto__ = (function (){var statearr_42662 = f__33665__auto__.call(null);
(statearr_42662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_42662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__,map__42397,map__42397__$1,opts,before_jsload,on_jsload,reload_dependents,map__42398,map__42398__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33664__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42740,link){
var map__42743 = p__42740;
var map__42743__$1 = ((((!((map__42743 == null)))?((((map__42743.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42743.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42743):map__42743);
var file = cljs.core.get.call(null,map__42743__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__42743,map__42743__$1,file){
return (function (p1__42738_SHARP_,p2__42739_SHARP_){
if(cljs.core._EQ_.call(null,p1__42738_SHARP_,p2__42739_SHARP_)){
return p1__42738_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__42743,map__42743__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42749){
var map__42750 = p__42749;
var map__42750__$1 = ((((!((map__42750 == null)))?((((map__42750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42750):map__42750);
var match_length = cljs.core.get.call(null,map__42750__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42750__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42745_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42745_SHARP_);
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
var args42752 = [];
var len__19784__auto___42755 = arguments.length;
var i__19785__auto___42756 = (0);
while(true){
if((i__19785__auto___42756 < len__19784__auto___42755)){
args42752.push((arguments[i__19785__auto___42756]));

var G__42757 = (i__19785__auto___42756 + (1));
i__19785__auto___42756 = G__42757;
continue;
} else {
}
break;
}

var G__42754 = args42752.length;
switch (G__42754) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42752.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42759_SHARP_,p2__42760_SHARP_){
return cljs.core.assoc.call(null,p1__42759_SHARP_,cljs.core.get.call(null,p2__42760_SHARP_,key),p2__42760_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42761){
var map__42764 = p__42761;
var map__42764__$1 = ((((!((map__42764 == null)))?((((map__42764.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42764.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42764):map__42764);
var f_data = map__42764__$1;
var file = cljs.core.get.call(null,map__42764__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42766,files_msg){
var map__42773 = p__42766;
var map__42773__$1 = ((((!((map__42773 == null)))?((((map__42773.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42773.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42773):map__42773);
var opts = map__42773__$1;
var on_cssload = cljs.core.get.call(null,map__42773__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42775_42779 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__42776_42780 = null;
var count__42777_42781 = (0);
var i__42778_42782 = (0);
while(true){
if((i__42778_42782 < count__42777_42781)){
var f_42783 = cljs.core._nth.call(null,chunk__42776_42780,i__42778_42782);
figwheel.client.file_reloading.reload_css_file.call(null,f_42783);

var G__42784 = seq__42775_42779;
var G__42785 = chunk__42776_42780;
var G__42786 = count__42777_42781;
var G__42787 = (i__42778_42782 + (1));
seq__42775_42779 = G__42784;
chunk__42776_42780 = G__42785;
count__42777_42781 = G__42786;
i__42778_42782 = G__42787;
continue;
} else {
var temp__4657__auto___42788 = cljs.core.seq.call(null,seq__42775_42779);
if(temp__4657__auto___42788){
var seq__42775_42789__$1 = temp__4657__auto___42788;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42775_42789__$1)){
var c__19529__auto___42790 = cljs.core.chunk_first.call(null,seq__42775_42789__$1);
var G__42791 = cljs.core.chunk_rest.call(null,seq__42775_42789__$1);
var G__42792 = c__19529__auto___42790;
var G__42793 = cljs.core.count.call(null,c__19529__auto___42790);
var G__42794 = (0);
seq__42775_42779 = G__42791;
chunk__42776_42780 = G__42792;
count__42777_42781 = G__42793;
i__42778_42782 = G__42794;
continue;
} else {
var f_42795 = cljs.core.first.call(null,seq__42775_42789__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42795);

var G__42796 = cljs.core.next.call(null,seq__42775_42789__$1);
var G__42797 = null;
var G__42798 = (0);
var G__42799 = (0);
seq__42775_42779 = G__42796;
chunk__42776_42780 = G__42797;
count__42777_42781 = G__42798;
i__42778_42782 = G__42799;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__42773,map__42773__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__42773,map__42773__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map