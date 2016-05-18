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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41621_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41621_SHARP_));
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
var seq__41627 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41628 = null;
var count__41629 = (0);
var i__41630 = (0);
while(true){
if((i__41630 < count__41629)){
var n = cljs.core._nth.call(null,chunk__41628,i__41630);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41632 = seq__41627;
var G__41633 = chunk__41628;
var G__41634 = count__41629;
var G__41635 = (i__41630 + (1));
seq__41627 = G__41632;
chunk__41628 = G__41633;
count__41629 = G__41634;
i__41630 = G__41635;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41627);
if(temp__4657__auto__){
var seq__41627__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41627__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41627__$1);
var G__41643 = cljs.core.chunk_rest.call(null,seq__41627__$1);
var G__41644 = c__19529__auto__;
var G__41645 = cljs.core.count.call(null,c__19529__auto__);
var G__41646 = (0);
seq__41627 = G__41643;
chunk__41628 = G__41644;
count__41629 = G__41645;
i__41630 = G__41646;
continue;
} else {
var n = cljs.core.first.call(null,seq__41627__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__41653 = cljs.core.next.call(null,seq__41627__$1);
var G__41654 = null;
var G__41655 = (0);
var G__41656 = (0);
seq__41627 = G__41653;
chunk__41628 = G__41654;
count__41629 = G__41655;
i__41630 = G__41656;
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

var seq__41719_41748 = cljs.core.seq.call(null,deps);
var chunk__41720_41749 = null;
var count__41721_41750 = (0);
var i__41722_41751 = (0);
while(true){
if((i__41722_41751 < count__41721_41750)){
var dep_41752 = cljs.core._nth.call(null,chunk__41720_41749,i__41722_41751);
topo_sort_helper_STAR_.call(null,dep_41752,(depth + (1)),state);

var G__41754 = seq__41719_41748;
var G__41755 = chunk__41720_41749;
var G__41756 = count__41721_41750;
var G__41757 = (i__41722_41751 + (1));
seq__41719_41748 = G__41754;
chunk__41720_41749 = G__41755;
count__41721_41750 = G__41756;
i__41722_41751 = G__41757;
continue;
} else {
var temp__4657__auto___41758 = cljs.core.seq.call(null,seq__41719_41748);
if(temp__4657__auto___41758){
var seq__41719_41760__$1 = temp__4657__auto___41758;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41719_41760__$1)){
var c__19529__auto___41761 = cljs.core.chunk_first.call(null,seq__41719_41760__$1);
var G__41762 = cljs.core.chunk_rest.call(null,seq__41719_41760__$1);
var G__41763 = c__19529__auto___41761;
var G__41764 = cljs.core.count.call(null,c__19529__auto___41761);
var G__41765 = (0);
seq__41719_41748 = G__41762;
chunk__41720_41749 = G__41763;
count__41721_41750 = G__41764;
i__41722_41751 = G__41765;
continue;
} else {
var dep_41766 = cljs.core.first.call(null,seq__41719_41760__$1);
topo_sort_helper_STAR_.call(null,dep_41766,(depth + (1)),state);

var G__41768 = cljs.core.next.call(null,seq__41719_41760__$1);
var G__41769 = null;
var G__41770 = (0);
var G__41771 = (0);
seq__41719_41748 = G__41768;
chunk__41720_41749 = G__41769;
count__41721_41750 = G__41770;
i__41722_41751 = G__41771;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41731){
var vec__41741 = p__41731;
var x = cljs.core.nth.call(null,vec__41741,(0),null);
var xs = cljs.core.nthnext.call(null,vec__41741,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41741,x,xs,get_deps__$1){
return (function (p1__41660_SHARP_){
return clojure.set.difference.call(null,p1__41660_SHARP_,x);
});})(vec__41741,x,xs,get_deps__$1))
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
var seq__41817 = cljs.core.seq.call(null,provides);
var chunk__41818 = null;
var count__41819 = (0);
var i__41820 = (0);
while(true){
if((i__41820 < count__41819)){
var prov = cljs.core._nth.call(null,chunk__41818,i__41820);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41821_41831 = cljs.core.seq.call(null,requires);
var chunk__41822_41832 = null;
var count__41823_41833 = (0);
var i__41824_41834 = (0);
while(true){
if((i__41824_41834 < count__41823_41833)){
var req_41835 = cljs.core._nth.call(null,chunk__41822_41832,i__41824_41834);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41835,prov);

var G__41837 = seq__41821_41831;
var G__41838 = chunk__41822_41832;
var G__41839 = count__41823_41833;
var G__41840 = (i__41824_41834 + (1));
seq__41821_41831 = G__41837;
chunk__41822_41832 = G__41838;
count__41823_41833 = G__41839;
i__41824_41834 = G__41840;
continue;
} else {
var temp__4657__auto___41842 = cljs.core.seq.call(null,seq__41821_41831);
if(temp__4657__auto___41842){
var seq__41821_41843__$1 = temp__4657__auto___41842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41821_41843__$1)){
var c__19529__auto___41845 = cljs.core.chunk_first.call(null,seq__41821_41843__$1);
var G__41846 = cljs.core.chunk_rest.call(null,seq__41821_41843__$1);
var G__41847 = c__19529__auto___41845;
var G__41848 = cljs.core.count.call(null,c__19529__auto___41845);
var G__41849 = (0);
seq__41821_41831 = G__41846;
chunk__41822_41832 = G__41847;
count__41823_41833 = G__41848;
i__41824_41834 = G__41849;
continue;
} else {
var req_41850 = cljs.core.first.call(null,seq__41821_41843__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41850,prov);

var G__41851 = cljs.core.next.call(null,seq__41821_41843__$1);
var G__41852 = null;
var G__41853 = (0);
var G__41854 = (0);
seq__41821_41831 = G__41851;
chunk__41822_41832 = G__41852;
count__41823_41833 = G__41853;
i__41824_41834 = G__41854;
continue;
}
} else {
}
}
break;
}

var G__41855 = seq__41817;
var G__41856 = chunk__41818;
var G__41857 = count__41819;
var G__41858 = (i__41820 + (1));
seq__41817 = G__41855;
chunk__41818 = G__41856;
count__41819 = G__41857;
i__41820 = G__41858;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41817);
if(temp__4657__auto__){
var seq__41817__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41817__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41817__$1);
var G__41859 = cljs.core.chunk_rest.call(null,seq__41817__$1);
var G__41860 = c__19529__auto__;
var G__41861 = cljs.core.count.call(null,c__19529__auto__);
var G__41862 = (0);
seq__41817 = G__41859;
chunk__41818 = G__41860;
count__41819 = G__41861;
i__41820 = G__41862;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41817__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41825_41866 = cljs.core.seq.call(null,requires);
var chunk__41826_41867 = null;
var count__41827_41868 = (0);
var i__41828_41869 = (0);
while(true){
if((i__41828_41869 < count__41827_41868)){
var req_41871 = cljs.core._nth.call(null,chunk__41826_41867,i__41828_41869);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41871,prov);

var G__41872 = seq__41825_41866;
var G__41873 = chunk__41826_41867;
var G__41874 = count__41827_41868;
var G__41875 = (i__41828_41869 + (1));
seq__41825_41866 = G__41872;
chunk__41826_41867 = G__41873;
count__41827_41868 = G__41874;
i__41828_41869 = G__41875;
continue;
} else {
var temp__4657__auto___41876__$1 = cljs.core.seq.call(null,seq__41825_41866);
if(temp__4657__auto___41876__$1){
var seq__41825_41877__$1 = temp__4657__auto___41876__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41825_41877__$1)){
var c__19529__auto___41878 = cljs.core.chunk_first.call(null,seq__41825_41877__$1);
var G__41879 = cljs.core.chunk_rest.call(null,seq__41825_41877__$1);
var G__41880 = c__19529__auto___41878;
var G__41881 = cljs.core.count.call(null,c__19529__auto___41878);
var G__41882 = (0);
seq__41825_41866 = G__41879;
chunk__41826_41867 = G__41880;
count__41827_41868 = G__41881;
i__41828_41869 = G__41882;
continue;
} else {
var req_41885 = cljs.core.first.call(null,seq__41825_41877__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41885,prov);

var G__41888 = cljs.core.next.call(null,seq__41825_41877__$1);
var G__41889 = null;
var G__41890 = (0);
var G__41891 = (0);
seq__41825_41866 = G__41888;
chunk__41826_41867 = G__41889;
count__41827_41868 = G__41890;
i__41828_41869 = G__41891;
continue;
}
} else {
}
}
break;
}

var G__41892 = cljs.core.next.call(null,seq__41817__$1);
var G__41893 = null;
var G__41894 = (0);
var G__41895 = (0);
seq__41817 = G__41892;
chunk__41818 = G__41893;
count__41819 = G__41894;
i__41820 = G__41895;
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
var seq__41905_41927 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41907_41928 = null;
var count__41908_41929 = (0);
var i__41909_41930 = (0);
while(true){
if((i__41909_41930 < count__41908_41929)){
var ns_41934 = cljs.core._nth.call(null,chunk__41907_41928,i__41909_41930);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41934);

var G__41938 = seq__41905_41927;
var G__41939 = chunk__41907_41928;
var G__41940 = count__41908_41929;
var G__41941 = (i__41909_41930 + (1));
seq__41905_41927 = G__41938;
chunk__41907_41928 = G__41939;
count__41908_41929 = G__41940;
i__41909_41930 = G__41941;
continue;
} else {
var temp__4657__auto___41945 = cljs.core.seq.call(null,seq__41905_41927);
if(temp__4657__auto___41945){
var seq__41905_41951__$1 = temp__4657__auto___41945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41905_41951__$1)){
var c__19529__auto___41964 = cljs.core.chunk_first.call(null,seq__41905_41951__$1);
var G__41965 = cljs.core.chunk_rest.call(null,seq__41905_41951__$1);
var G__41966 = c__19529__auto___41964;
var G__41967 = cljs.core.count.call(null,c__19529__auto___41964);
var G__41968 = (0);
seq__41905_41927 = G__41965;
chunk__41907_41928 = G__41966;
count__41908_41929 = G__41967;
i__41909_41930 = G__41968;
continue;
} else {
var ns_41971 = cljs.core.first.call(null,seq__41905_41951__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_41971);

var G__41972 = cljs.core.next.call(null,seq__41905_41951__$1);
var G__41973 = null;
var G__41974 = (0);
var G__41975 = (0);
seq__41905_41927 = G__41972;
chunk__41907_41928 = G__41973;
count__41908_41929 = G__41974;
i__41909_41930 = G__41975;
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
var G__41986__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__41986 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41987__i = 0, G__41987__a = new Array(arguments.length -  0);
while (G__41987__i < G__41987__a.length) {G__41987__a[G__41987__i] = arguments[G__41987__i + 0]; ++G__41987__i;}
  args = new cljs.core.IndexedSeq(G__41987__a,0);
} 
return G__41986__delegate.call(this,args);};
G__41986.cljs$lang$maxFixedArity = 0;
G__41986.cljs$lang$applyTo = (function (arglist__41988){
var args = cljs.core.seq(arglist__41988);
return G__41986__delegate(args);
});
G__41986.cljs$core$IFn$_invoke$arity$variadic = G__41986__delegate;
return G__41986;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__41990 = cljs.core._EQ_;
var expr__41991 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__41990.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__41991))){
var path_parts = ((function (pred__41990,expr__41991){
return (function (p1__41989_SHARP_){
return clojure.string.split.call(null,p1__41989_SHARP_,/[\/\\]/);
});})(pred__41990,expr__41991))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__41990,expr__41991){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e41994){if((e41994 instanceof Error)){
var e = e41994;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e41994;

}
}})());
});
;})(path_parts,sep,root,pred__41990,expr__41991))
} else {
if(cljs.core.truth_(pred__41990.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__41991))){
return ((function (pred__41990,expr__41991){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__41990,expr__41991){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__41990,expr__41991))
);

return deferred.addErrback(((function (deferred,pred__41990,expr__41991){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__41990,expr__41991))
);
});
;})(pred__41990,expr__41991))
} else {
return ((function (pred__41990,expr__41991){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__41990,expr__41991))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42030,callback){
var map__42033 = p__42030;
var map__42033__$1 = ((((!((map__42033 == null)))?((((map__42033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42033):map__42033);
var file_msg = map__42033__$1;
var request_url = cljs.core.get.call(null,map__42033__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42033,map__42033__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42033,map__42033__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_42068){
var state_val_42069 = (state_42068[(1)]);
if((state_val_42069 === (7))){
var inst_42064 = (state_42068[(2)]);
var state_42068__$1 = state_42068;
var statearr_42070_42090 = state_42068__$1;
(statearr_42070_42090[(2)] = inst_42064);

(statearr_42070_42090[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (1))){
var state_42068__$1 = state_42068;
var statearr_42071_42091 = state_42068__$1;
(statearr_42071_42091[(2)] = null);

(statearr_42071_42091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (4))){
var inst_42048 = (state_42068[(7)]);
var inst_42048__$1 = (state_42068[(2)]);
var state_42068__$1 = (function (){var statearr_42072 = state_42068;
(statearr_42072[(7)] = inst_42048__$1);

return statearr_42072;
})();
if(cljs.core.truth_(inst_42048__$1)){
var statearr_42073_42092 = state_42068__$1;
(statearr_42073_42092[(1)] = (5));

} else {
var statearr_42074_42093 = state_42068__$1;
(statearr_42074_42093[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (6))){
var state_42068__$1 = state_42068;
var statearr_42075_42094 = state_42068__$1;
(statearr_42075_42094[(2)] = null);

(statearr_42075_42094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (3))){
var inst_42066 = (state_42068[(2)]);
var state_42068__$1 = state_42068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42068__$1,inst_42066);
} else {
if((state_val_42069 === (2))){
var state_42068__$1 = state_42068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42068__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42069 === (11))){
var inst_42060 = (state_42068[(2)]);
var state_42068__$1 = (function (){var statearr_42076 = state_42068;
(statearr_42076[(8)] = inst_42060);

return statearr_42076;
})();
var statearr_42077_42095 = state_42068__$1;
(statearr_42077_42095[(2)] = null);

(statearr_42077_42095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (9))){
var inst_42052 = (state_42068[(9)]);
var inst_42054 = (state_42068[(10)]);
var inst_42056 = inst_42054.call(null,inst_42052);
var state_42068__$1 = state_42068;
var statearr_42078_42096 = state_42068__$1;
(statearr_42078_42096[(2)] = inst_42056);

(statearr_42078_42096[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (5))){
var inst_42048 = (state_42068[(7)]);
var inst_42050 = figwheel.client.file_reloading.blocking_load.call(null,inst_42048);
var state_42068__$1 = state_42068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42068__$1,(8),inst_42050);
} else {
if((state_val_42069 === (10))){
var inst_42052 = (state_42068[(9)]);
var inst_42058 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42052);
var state_42068__$1 = state_42068;
var statearr_42079_42097 = state_42068__$1;
(statearr_42079_42097[(2)] = inst_42058);

(statearr_42079_42097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42069 === (8))){
var inst_42048 = (state_42068[(7)]);
var inst_42054 = (state_42068[(10)]);
var inst_42052 = (state_42068[(2)]);
var inst_42053 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42054__$1 = cljs.core.get.call(null,inst_42053,inst_42048);
var state_42068__$1 = (function (){var statearr_42080 = state_42068;
(statearr_42080[(9)] = inst_42052);

(statearr_42080[(10)] = inst_42054__$1);

return statearr_42080;
})();
if(cljs.core.truth_(inst_42054__$1)){
var statearr_42081_42098 = state_42068__$1;
(statearr_42081_42098[(1)] = (9));

} else {
var statearr_42082_42099 = state_42068__$1;
(statearr_42082_42099[(1)] = (10));

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
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35789__auto__ = null;
var figwheel$client$file_reloading$state_machine__35789__auto____0 = (function (){
var statearr_42086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42086[(0)] = figwheel$client$file_reloading$state_machine__35789__auto__);

(statearr_42086[(1)] = (1));

return statearr_42086;
});
var figwheel$client$file_reloading$state_machine__35789__auto____1 = (function (state_42068){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_42068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e42087){if((e42087 instanceof Object)){
var ex__35792__auto__ = e42087;
var statearr_42088_42100 = state_42068;
(statearr_42088_42100[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42087;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42101 = state_42068;
state_42068 = G__42101;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35789__auto__ = function(state_42068){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35789__auto____1.call(this,state_42068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35789__auto____0;
figwheel$client$file_reloading$state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35789__auto____1;
return figwheel$client$file_reloading$state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_42089 = f__37162__auto__.call(null);
(statearr_42089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_42089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42102,callback){
var map__42105 = p__42102;
var map__42105__$1 = ((((!((map__42105 == null)))?((((map__42105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42105):map__42105);
var file_msg = map__42105__$1;
var namespace = cljs.core.get.call(null,map__42105__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42105,map__42105__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42105,map__42105__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42107){
var map__42110 = p__42107;
var map__42110__$1 = ((((!((map__42110 == null)))?((((map__42110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42110):map__42110);
var file_msg = map__42110__$1;
var namespace = cljs.core.get.call(null,map__42110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42112,callback){
var map__42115 = p__42112;
var map__42115__$1 = ((((!((map__42115 == null)))?((((map__42115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42115):map__42115);
var file_msg = map__42115__$1;
var request_url = cljs.core.get.call(null,map__42115__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42115__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__37161__auto___42203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___42203,out){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___42203,out){
return (function (state_42185){
var state_val_42186 = (state_42185[(1)]);
if((state_val_42186 === (1))){
var inst_42163 = cljs.core.nth.call(null,files,(0),null);
var inst_42164 = cljs.core.nthnext.call(null,files,(1));
var inst_42165 = files;
var state_42185__$1 = (function (){var statearr_42187 = state_42185;
(statearr_42187[(7)] = inst_42165);

(statearr_42187[(8)] = inst_42163);

(statearr_42187[(9)] = inst_42164);

return statearr_42187;
})();
var statearr_42188_42204 = state_42185__$1;
(statearr_42188_42204[(2)] = null);

(statearr_42188_42204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42186 === (2))){
var inst_42165 = (state_42185[(7)]);
var inst_42168 = (state_42185[(10)]);
var inst_42168__$1 = cljs.core.nth.call(null,inst_42165,(0),null);
var inst_42169 = cljs.core.nthnext.call(null,inst_42165,(1));
var inst_42170 = (inst_42168__$1 == null);
var inst_42171 = cljs.core.not.call(null,inst_42170);
var state_42185__$1 = (function (){var statearr_42189 = state_42185;
(statearr_42189[(11)] = inst_42169);

(statearr_42189[(10)] = inst_42168__$1);

return statearr_42189;
})();
if(inst_42171){
var statearr_42190_42205 = state_42185__$1;
(statearr_42190_42205[(1)] = (4));

} else {
var statearr_42191_42206 = state_42185__$1;
(statearr_42191_42206[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42186 === (3))){
var inst_42183 = (state_42185[(2)]);
var state_42185__$1 = state_42185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42185__$1,inst_42183);
} else {
if((state_val_42186 === (4))){
var inst_42168 = (state_42185[(10)]);
var inst_42173 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42168);
var state_42185__$1 = state_42185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42185__$1,(7),inst_42173);
} else {
if((state_val_42186 === (5))){
var inst_42179 = cljs.core.async.close_BANG_.call(null,out);
var state_42185__$1 = state_42185;
var statearr_42192_42207 = state_42185__$1;
(statearr_42192_42207[(2)] = inst_42179);

(statearr_42192_42207[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42186 === (6))){
var inst_42181 = (state_42185[(2)]);
var state_42185__$1 = state_42185;
var statearr_42193_42208 = state_42185__$1;
(statearr_42193_42208[(2)] = inst_42181);

(statearr_42193_42208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42186 === (7))){
var inst_42169 = (state_42185[(11)]);
var inst_42175 = (state_42185[(2)]);
var inst_42176 = cljs.core.async.put_BANG_.call(null,out,inst_42175);
var inst_42165 = inst_42169;
var state_42185__$1 = (function (){var statearr_42194 = state_42185;
(statearr_42194[(12)] = inst_42176);

(statearr_42194[(7)] = inst_42165);

return statearr_42194;
})();
var statearr_42195_42209 = state_42185__$1;
(statearr_42195_42209[(2)] = null);

(statearr_42195_42209[(1)] = (2));


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
});})(c__37161__auto___42203,out))
;
return ((function (switch__35788__auto__,c__37161__auto___42203,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto____0 = (function (){
var statearr_42199 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42199[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto__);

(statearr_42199[(1)] = (1));

return statearr_42199;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto____1 = (function (state_42185){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_42185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e42200){if((e42200 instanceof Object)){
var ex__35792__auto__ = e42200;
var statearr_42201_42210 = state_42185;
(statearr_42201_42210[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42211 = state_42185;
state_42185 = G__42211;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto__ = function(state_42185){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto____1.call(this,state_42185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___42203,out))
})();
var state__37163__auto__ = (function (){var statearr_42202 = f__37162__auto__.call(null);
(statearr_42202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___42203);

return statearr_42202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___42203,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42212,opts){
var map__42216 = p__42212;
var map__42216__$1 = ((((!((map__42216 == null)))?((((map__42216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42216):map__42216);
var eval_body__$1 = cljs.core.get.call(null,map__42216__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42216__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e42218){var e = e42218;
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
return (function (p1__42219_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42219_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__42224){
var vec__42225 = p__42224;
var k = cljs.core.nth.call(null,vec__42225,(0),null);
var v = cljs.core.nth.call(null,vec__42225,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42226){
var vec__42227 = p__42226;
var k = cljs.core.nth.call(null,vec__42227,(0),null);
var v = cljs.core.nth.call(null,vec__42227,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42231,p__42232){
var map__42479 = p__42231;
var map__42479__$1 = ((((!((map__42479 == null)))?((((map__42479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42479):map__42479);
var opts = map__42479__$1;
var before_jsload = cljs.core.get.call(null,map__42479__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42479__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42479__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42480 = p__42232;
var map__42480__$1 = ((((!((map__42480 == null)))?((((map__42480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42480):map__42480);
var msg = map__42480__$1;
var files = cljs.core.get.call(null,map__42480__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42480__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42480__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42633){
var state_val_42634 = (state_42633[(1)]);
if((state_val_42634 === (7))){
var inst_42495 = (state_42633[(7)]);
var inst_42494 = (state_42633[(8)]);
var inst_42496 = (state_42633[(9)]);
var inst_42497 = (state_42633[(10)]);
var inst_42502 = cljs.core._nth.call(null,inst_42495,inst_42497);
var inst_42503 = figwheel.client.file_reloading.eval_body.call(null,inst_42502,opts);
var inst_42504 = (inst_42497 + (1));
var tmp42635 = inst_42495;
var tmp42636 = inst_42494;
var tmp42637 = inst_42496;
var inst_42494__$1 = tmp42636;
var inst_42495__$1 = tmp42635;
var inst_42496__$1 = tmp42637;
var inst_42497__$1 = inst_42504;
var state_42633__$1 = (function (){var statearr_42638 = state_42633;
(statearr_42638[(7)] = inst_42495__$1);

(statearr_42638[(8)] = inst_42494__$1);

(statearr_42638[(9)] = inst_42496__$1);

(statearr_42638[(11)] = inst_42503);

(statearr_42638[(10)] = inst_42497__$1);

return statearr_42638;
})();
var statearr_42639_42725 = state_42633__$1;
(statearr_42639_42725[(2)] = null);

(statearr_42639_42725[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (20))){
var inst_42537 = (state_42633[(12)]);
var inst_42545 = figwheel.client.file_reloading.sort_files.call(null,inst_42537);
var state_42633__$1 = state_42633;
var statearr_42640_42726 = state_42633__$1;
(statearr_42640_42726[(2)] = inst_42545);

(statearr_42640_42726[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (27))){
var state_42633__$1 = state_42633;
var statearr_42641_42727 = state_42633__$1;
(statearr_42641_42727[(2)] = null);

(statearr_42641_42727[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (1))){
var inst_42486 = (state_42633[(13)]);
var inst_42483 = before_jsload.call(null,files);
var inst_42484 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42485 = (function (){return ((function (inst_42486,inst_42483,inst_42484,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42228_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42228_SHARP_);
});
;})(inst_42486,inst_42483,inst_42484,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42486__$1 = cljs.core.filter.call(null,inst_42485,files);
var inst_42487 = cljs.core.not_empty.call(null,inst_42486__$1);
var state_42633__$1 = (function (){var statearr_42642 = state_42633;
(statearr_42642[(13)] = inst_42486__$1);

(statearr_42642[(14)] = inst_42484);

(statearr_42642[(15)] = inst_42483);

return statearr_42642;
})();
if(cljs.core.truth_(inst_42487)){
var statearr_42643_42728 = state_42633__$1;
(statearr_42643_42728[(1)] = (2));

} else {
var statearr_42644_42729 = state_42633__$1;
(statearr_42644_42729[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (24))){
var state_42633__$1 = state_42633;
var statearr_42645_42730 = state_42633__$1;
(statearr_42645_42730[(2)] = null);

(statearr_42645_42730[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (39))){
var inst_42587 = (state_42633[(16)]);
var state_42633__$1 = state_42633;
var statearr_42646_42731 = state_42633__$1;
(statearr_42646_42731[(2)] = inst_42587);

(statearr_42646_42731[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (46))){
var inst_42628 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42647_42732 = state_42633__$1;
(statearr_42647_42732[(2)] = inst_42628);

(statearr_42647_42732[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (4))){
var inst_42531 = (state_42633[(2)]);
var inst_42532 = cljs.core.List.EMPTY;
var inst_42533 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42532);
var inst_42534 = (function (){return ((function (inst_42531,inst_42532,inst_42533,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42229_SHARP_){
var and__18714__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42229_SHARP_);
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42229_SHARP_));
} else {
return and__18714__auto__;
}
});
;})(inst_42531,inst_42532,inst_42533,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42535 = cljs.core.filter.call(null,inst_42534,files);
var inst_42536 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42537 = cljs.core.concat.call(null,inst_42535,inst_42536);
var state_42633__$1 = (function (){var statearr_42648 = state_42633;
(statearr_42648[(17)] = inst_42533);

(statearr_42648[(18)] = inst_42531);

(statearr_42648[(12)] = inst_42537);

return statearr_42648;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42649_42733 = state_42633__$1;
(statearr_42649_42733[(1)] = (16));

} else {
var statearr_42650_42734 = state_42633__$1;
(statearr_42650_42734[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (15))){
var inst_42521 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42651_42735 = state_42633__$1;
(statearr_42651_42735[(2)] = inst_42521);

(statearr_42651_42735[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (21))){
var inst_42547 = (state_42633[(19)]);
var inst_42547__$1 = (state_42633[(2)]);
var inst_42548 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42547__$1);
var state_42633__$1 = (function (){var statearr_42652 = state_42633;
(statearr_42652[(19)] = inst_42547__$1);

return statearr_42652;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42633__$1,(22),inst_42548);
} else {
if((state_val_42634 === (31))){
var inst_42631 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42633__$1,inst_42631);
} else {
if((state_val_42634 === (32))){
var inst_42587 = (state_42633[(16)]);
var inst_42592 = inst_42587.cljs$lang$protocol_mask$partition0$;
var inst_42593 = (inst_42592 & (64));
var inst_42594 = inst_42587.cljs$core$ISeq$;
var inst_42595 = (inst_42593) || (inst_42594);
var state_42633__$1 = state_42633;
if(cljs.core.truth_(inst_42595)){
var statearr_42653_42736 = state_42633__$1;
(statearr_42653_42736[(1)] = (35));

} else {
var statearr_42654_42737 = state_42633__$1;
(statearr_42654_42737[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (40))){
var inst_42608 = (state_42633[(20)]);
var inst_42607 = (state_42633[(2)]);
var inst_42608__$1 = cljs.core.get.call(null,inst_42607,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42609 = cljs.core.get.call(null,inst_42607,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42610 = cljs.core.not_empty.call(null,inst_42608__$1);
var state_42633__$1 = (function (){var statearr_42655 = state_42633;
(statearr_42655[(21)] = inst_42609);

(statearr_42655[(20)] = inst_42608__$1);

return statearr_42655;
})();
if(cljs.core.truth_(inst_42610)){
var statearr_42656_42738 = state_42633__$1;
(statearr_42656_42738[(1)] = (41));

} else {
var statearr_42657_42739 = state_42633__$1;
(statearr_42657_42739[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (33))){
var state_42633__$1 = state_42633;
var statearr_42658_42740 = state_42633__$1;
(statearr_42658_42740[(2)] = false);

(statearr_42658_42740[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (13))){
var inst_42507 = (state_42633[(22)]);
var inst_42511 = cljs.core.chunk_first.call(null,inst_42507);
var inst_42512 = cljs.core.chunk_rest.call(null,inst_42507);
var inst_42513 = cljs.core.count.call(null,inst_42511);
var inst_42494 = inst_42512;
var inst_42495 = inst_42511;
var inst_42496 = inst_42513;
var inst_42497 = (0);
var state_42633__$1 = (function (){var statearr_42659 = state_42633;
(statearr_42659[(7)] = inst_42495);

(statearr_42659[(8)] = inst_42494);

(statearr_42659[(9)] = inst_42496);

(statearr_42659[(10)] = inst_42497);

return statearr_42659;
})();
var statearr_42660_42741 = state_42633__$1;
(statearr_42660_42741[(2)] = null);

(statearr_42660_42741[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (22))){
var inst_42551 = (state_42633[(23)]);
var inst_42547 = (state_42633[(19)]);
var inst_42555 = (state_42633[(24)]);
var inst_42550 = (state_42633[(25)]);
var inst_42550__$1 = (state_42633[(2)]);
var inst_42551__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42550__$1);
var inst_42552 = (function (){var all_files = inst_42547;
var res_SINGLEQUOTE_ = inst_42550__$1;
var res = inst_42551__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42551,inst_42547,inst_42555,inst_42550,inst_42550__$1,inst_42551__$1,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42230_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42230_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42551,inst_42547,inst_42555,inst_42550,inst_42550__$1,inst_42551__$1,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42553 = cljs.core.filter.call(null,inst_42552,inst_42550__$1);
var inst_42554 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42555__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42554);
var inst_42556 = cljs.core.not_empty.call(null,inst_42555__$1);
var state_42633__$1 = (function (){var statearr_42661 = state_42633;
(statearr_42661[(23)] = inst_42551__$1);

(statearr_42661[(26)] = inst_42553);

(statearr_42661[(24)] = inst_42555__$1);

(statearr_42661[(25)] = inst_42550__$1);

return statearr_42661;
})();
if(cljs.core.truth_(inst_42556)){
var statearr_42662_42742 = state_42633__$1;
(statearr_42662_42742[(1)] = (23));

} else {
var statearr_42663_42743 = state_42633__$1;
(statearr_42663_42743[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (36))){
var state_42633__$1 = state_42633;
var statearr_42664_42744 = state_42633__$1;
(statearr_42664_42744[(2)] = false);

(statearr_42664_42744[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (41))){
var inst_42608 = (state_42633[(20)]);
var inst_42612 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42613 = cljs.core.map.call(null,inst_42612,inst_42608);
var inst_42614 = cljs.core.pr_str.call(null,inst_42613);
var inst_42615 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42614)].join('');
var inst_42616 = figwheel.client.utils.log.call(null,inst_42615);
var state_42633__$1 = state_42633;
var statearr_42665_42745 = state_42633__$1;
(statearr_42665_42745[(2)] = inst_42616);

(statearr_42665_42745[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (43))){
var inst_42609 = (state_42633[(21)]);
var inst_42619 = (state_42633[(2)]);
var inst_42620 = cljs.core.not_empty.call(null,inst_42609);
var state_42633__$1 = (function (){var statearr_42666 = state_42633;
(statearr_42666[(27)] = inst_42619);

return statearr_42666;
})();
if(cljs.core.truth_(inst_42620)){
var statearr_42667_42746 = state_42633__$1;
(statearr_42667_42746[(1)] = (44));

} else {
var statearr_42668_42747 = state_42633__$1;
(statearr_42668_42747[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (29))){
var inst_42551 = (state_42633[(23)]);
var inst_42587 = (state_42633[(16)]);
var inst_42547 = (state_42633[(19)]);
var inst_42553 = (state_42633[(26)]);
var inst_42555 = (state_42633[(24)]);
var inst_42550 = (state_42633[(25)]);
var inst_42583 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42586 = (function (){var all_files = inst_42547;
var res_SINGLEQUOTE_ = inst_42550;
var res = inst_42551;
var files_not_loaded = inst_42553;
var dependencies_that_loaded = inst_42555;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42587,inst_42547,inst_42553,inst_42555,inst_42550,inst_42583,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42585){
var map__42669 = p__42585;
var map__42669__$1 = ((((!((map__42669 == null)))?((((map__42669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42669):map__42669);
var namespace = cljs.core.get.call(null,map__42669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42587,inst_42547,inst_42553,inst_42555,inst_42550,inst_42583,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42587__$1 = cljs.core.group_by.call(null,inst_42586,inst_42553);
var inst_42589 = (inst_42587__$1 == null);
var inst_42590 = cljs.core.not.call(null,inst_42589);
var state_42633__$1 = (function (){var statearr_42671 = state_42633;
(statearr_42671[(16)] = inst_42587__$1);

(statearr_42671[(28)] = inst_42583);

return statearr_42671;
})();
if(inst_42590){
var statearr_42672_42748 = state_42633__$1;
(statearr_42672_42748[(1)] = (32));

} else {
var statearr_42673_42749 = state_42633__$1;
(statearr_42673_42749[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (44))){
var inst_42609 = (state_42633[(21)]);
var inst_42622 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42609);
var inst_42623 = cljs.core.pr_str.call(null,inst_42622);
var inst_42624 = [cljs.core.str("not required: "),cljs.core.str(inst_42623)].join('');
var inst_42625 = figwheel.client.utils.log.call(null,inst_42624);
var state_42633__$1 = state_42633;
var statearr_42674_42750 = state_42633__$1;
(statearr_42674_42750[(2)] = inst_42625);

(statearr_42674_42750[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (6))){
var inst_42528 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42675_42751 = state_42633__$1;
(statearr_42675_42751[(2)] = inst_42528);

(statearr_42675_42751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (28))){
var inst_42553 = (state_42633[(26)]);
var inst_42580 = (state_42633[(2)]);
var inst_42581 = cljs.core.not_empty.call(null,inst_42553);
var state_42633__$1 = (function (){var statearr_42676 = state_42633;
(statearr_42676[(29)] = inst_42580);

return statearr_42676;
})();
if(cljs.core.truth_(inst_42581)){
var statearr_42677_42752 = state_42633__$1;
(statearr_42677_42752[(1)] = (29));

} else {
var statearr_42678_42753 = state_42633__$1;
(statearr_42678_42753[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (25))){
var inst_42551 = (state_42633[(23)]);
var inst_42567 = (state_42633[(2)]);
var inst_42568 = cljs.core.not_empty.call(null,inst_42551);
var state_42633__$1 = (function (){var statearr_42679 = state_42633;
(statearr_42679[(30)] = inst_42567);

return statearr_42679;
})();
if(cljs.core.truth_(inst_42568)){
var statearr_42680_42754 = state_42633__$1;
(statearr_42680_42754[(1)] = (26));

} else {
var statearr_42681_42755 = state_42633__$1;
(statearr_42681_42755[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (34))){
var inst_42602 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
if(cljs.core.truth_(inst_42602)){
var statearr_42682_42756 = state_42633__$1;
(statearr_42682_42756[(1)] = (38));

} else {
var statearr_42683_42757 = state_42633__$1;
(statearr_42683_42757[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (17))){
var state_42633__$1 = state_42633;
var statearr_42684_42758 = state_42633__$1;
(statearr_42684_42758[(2)] = recompile_dependents);

(statearr_42684_42758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (3))){
var state_42633__$1 = state_42633;
var statearr_42685_42759 = state_42633__$1;
(statearr_42685_42759[(2)] = null);

(statearr_42685_42759[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (12))){
var inst_42524 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42686_42760 = state_42633__$1;
(statearr_42686_42760[(2)] = inst_42524);

(statearr_42686_42760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (2))){
var inst_42486 = (state_42633[(13)]);
var inst_42493 = cljs.core.seq.call(null,inst_42486);
var inst_42494 = inst_42493;
var inst_42495 = null;
var inst_42496 = (0);
var inst_42497 = (0);
var state_42633__$1 = (function (){var statearr_42687 = state_42633;
(statearr_42687[(7)] = inst_42495);

(statearr_42687[(8)] = inst_42494);

(statearr_42687[(9)] = inst_42496);

(statearr_42687[(10)] = inst_42497);

return statearr_42687;
})();
var statearr_42688_42761 = state_42633__$1;
(statearr_42688_42761[(2)] = null);

(statearr_42688_42761[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (23))){
var inst_42551 = (state_42633[(23)]);
var inst_42547 = (state_42633[(19)]);
var inst_42553 = (state_42633[(26)]);
var inst_42555 = (state_42633[(24)]);
var inst_42550 = (state_42633[(25)]);
var inst_42558 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42560 = (function (){var all_files = inst_42547;
var res_SINGLEQUOTE_ = inst_42550;
var res = inst_42551;
var files_not_loaded = inst_42553;
var dependencies_that_loaded = inst_42555;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42547,inst_42553,inst_42555,inst_42550,inst_42558,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42559){
var map__42689 = p__42559;
var map__42689__$1 = ((((!((map__42689 == null)))?((((map__42689.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42689.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42689):map__42689);
var request_url = cljs.core.get.call(null,map__42689__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42547,inst_42553,inst_42555,inst_42550,inst_42558,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42561 = cljs.core.reverse.call(null,inst_42555);
var inst_42562 = cljs.core.map.call(null,inst_42560,inst_42561);
var inst_42563 = cljs.core.pr_str.call(null,inst_42562);
var inst_42564 = figwheel.client.utils.log.call(null,inst_42563);
var state_42633__$1 = (function (){var statearr_42691 = state_42633;
(statearr_42691[(31)] = inst_42558);

return statearr_42691;
})();
var statearr_42692_42762 = state_42633__$1;
(statearr_42692_42762[(2)] = inst_42564);

(statearr_42692_42762[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (35))){
var state_42633__$1 = state_42633;
var statearr_42693_42763 = state_42633__$1;
(statearr_42693_42763[(2)] = true);

(statearr_42693_42763[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (19))){
var inst_42537 = (state_42633[(12)]);
var inst_42543 = figwheel.client.file_reloading.expand_files.call(null,inst_42537);
var state_42633__$1 = state_42633;
var statearr_42694_42764 = state_42633__$1;
(statearr_42694_42764[(2)] = inst_42543);

(statearr_42694_42764[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (11))){
var state_42633__$1 = state_42633;
var statearr_42695_42765 = state_42633__$1;
(statearr_42695_42765[(2)] = null);

(statearr_42695_42765[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (9))){
var inst_42526 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42696_42766 = state_42633__$1;
(statearr_42696_42766[(2)] = inst_42526);

(statearr_42696_42766[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (5))){
var inst_42496 = (state_42633[(9)]);
var inst_42497 = (state_42633[(10)]);
var inst_42499 = (inst_42497 < inst_42496);
var inst_42500 = inst_42499;
var state_42633__$1 = state_42633;
if(cljs.core.truth_(inst_42500)){
var statearr_42697_42767 = state_42633__$1;
(statearr_42697_42767[(1)] = (7));

} else {
var statearr_42698_42768 = state_42633__$1;
(statearr_42698_42768[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (14))){
var inst_42507 = (state_42633[(22)]);
var inst_42516 = cljs.core.first.call(null,inst_42507);
var inst_42517 = figwheel.client.file_reloading.eval_body.call(null,inst_42516,opts);
var inst_42518 = cljs.core.next.call(null,inst_42507);
var inst_42494 = inst_42518;
var inst_42495 = null;
var inst_42496 = (0);
var inst_42497 = (0);
var state_42633__$1 = (function (){var statearr_42699 = state_42633;
(statearr_42699[(7)] = inst_42495);

(statearr_42699[(8)] = inst_42494);

(statearr_42699[(9)] = inst_42496);

(statearr_42699[(10)] = inst_42497);

(statearr_42699[(32)] = inst_42517);

return statearr_42699;
})();
var statearr_42700_42769 = state_42633__$1;
(statearr_42700_42769[(2)] = null);

(statearr_42700_42769[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (45))){
var state_42633__$1 = state_42633;
var statearr_42701_42770 = state_42633__$1;
(statearr_42701_42770[(2)] = null);

(statearr_42701_42770[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (26))){
var inst_42551 = (state_42633[(23)]);
var inst_42547 = (state_42633[(19)]);
var inst_42553 = (state_42633[(26)]);
var inst_42555 = (state_42633[(24)]);
var inst_42550 = (state_42633[(25)]);
var inst_42570 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42572 = (function (){var all_files = inst_42547;
var res_SINGLEQUOTE_ = inst_42550;
var res = inst_42551;
var files_not_loaded = inst_42553;
var dependencies_that_loaded = inst_42555;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42547,inst_42553,inst_42555,inst_42550,inst_42570,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42571){
var map__42702 = p__42571;
var map__42702__$1 = ((((!((map__42702 == null)))?((((map__42702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42702):map__42702);
var namespace = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42547,inst_42553,inst_42555,inst_42550,inst_42570,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42573 = cljs.core.map.call(null,inst_42572,inst_42551);
var inst_42574 = cljs.core.pr_str.call(null,inst_42573);
var inst_42575 = figwheel.client.utils.log.call(null,inst_42574);
var inst_42576 = (function (){var all_files = inst_42547;
var res_SINGLEQUOTE_ = inst_42550;
var res = inst_42551;
var files_not_loaded = inst_42553;
var dependencies_that_loaded = inst_42555;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42547,inst_42553,inst_42555,inst_42550,inst_42570,inst_42572,inst_42573,inst_42574,inst_42575,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42551,inst_42547,inst_42553,inst_42555,inst_42550,inst_42570,inst_42572,inst_42573,inst_42574,inst_42575,state_val_42634,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42577 = setTimeout(inst_42576,(10));
var state_42633__$1 = (function (){var statearr_42704 = state_42633;
(statearr_42704[(33)] = inst_42575);

(statearr_42704[(34)] = inst_42570);

return statearr_42704;
})();
var statearr_42705_42771 = state_42633__$1;
(statearr_42705_42771[(2)] = inst_42577);

(statearr_42705_42771[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (16))){
var state_42633__$1 = state_42633;
var statearr_42706_42772 = state_42633__$1;
(statearr_42706_42772[(2)] = reload_dependents);

(statearr_42706_42772[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (38))){
var inst_42587 = (state_42633[(16)]);
var inst_42604 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42587);
var state_42633__$1 = state_42633;
var statearr_42707_42773 = state_42633__$1;
(statearr_42707_42773[(2)] = inst_42604);

(statearr_42707_42773[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (30))){
var state_42633__$1 = state_42633;
var statearr_42708_42774 = state_42633__$1;
(statearr_42708_42774[(2)] = null);

(statearr_42708_42774[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (10))){
var inst_42507 = (state_42633[(22)]);
var inst_42509 = cljs.core.chunked_seq_QMARK_.call(null,inst_42507);
var state_42633__$1 = state_42633;
if(inst_42509){
var statearr_42709_42775 = state_42633__$1;
(statearr_42709_42775[(1)] = (13));

} else {
var statearr_42710_42776 = state_42633__$1;
(statearr_42710_42776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (18))){
var inst_42541 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
if(cljs.core.truth_(inst_42541)){
var statearr_42711_42777 = state_42633__$1;
(statearr_42711_42777[(1)] = (19));

} else {
var statearr_42712_42778 = state_42633__$1;
(statearr_42712_42778[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (42))){
var state_42633__$1 = state_42633;
var statearr_42713_42779 = state_42633__$1;
(statearr_42713_42779[(2)] = null);

(statearr_42713_42779[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (37))){
var inst_42599 = (state_42633[(2)]);
var state_42633__$1 = state_42633;
var statearr_42714_42780 = state_42633__$1;
(statearr_42714_42780[(2)] = inst_42599);

(statearr_42714_42780[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42634 === (8))){
var inst_42507 = (state_42633[(22)]);
var inst_42494 = (state_42633[(8)]);
var inst_42507__$1 = cljs.core.seq.call(null,inst_42494);
var state_42633__$1 = (function (){var statearr_42715 = state_42633;
(statearr_42715[(22)] = inst_42507__$1);

return statearr_42715;
})();
if(inst_42507__$1){
var statearr_42716_42781 = state_42633__$1;
(statearr_42716_42781[(1)] = (10));

} else {
var statearr_42717_42782 = state_42633__$1;
(statearr_42717_42782[(1)] = (11));

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
});})(c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35788__auto__,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto____0 = (function (){
var statearr_42721 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42721[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto__);

(statearr_42721[(1)] = (1));

return statearr_42721;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto____1 = (function (state_42633){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_42633);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e42722){if((e42722 instanceof Object)){
var ex__35792__auto__ = e42722;
var statearr_42723_42783 = state_42633;
(statearr_42723_42783[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42722;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42784 = state_42633;
state_42633 = G__42784;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto__ = function(state_42633){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto____1.call(this,state_42633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37163__auto__ = (function (){var statearr_42724 = f__37162__auto__.call(null);
(statearr_42724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_42724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__,map__42479,map__42479__$1,opts,before_jsload,on_jsload,reload_dependents,map__42480,map__42480__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37161__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42787,link){
var map__42790 = p__42787;
var map__42790__$1 = ((((!((map__42790 == null)))?((((map__42790.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42790.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42790):map__42790);
var file = cljs.core.get.call(null,map__42790__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__42790,map__42790__$1,file){
return (function (p1__42785_SHARP_,p2__42786_SHARP_){
if(cljs.core._EQ_.call(null,p1__42785_SHARP_,p2__42786_SHARP_)){
return p1__42785_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__42790,map__42790__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42796){
var map__42797 = p__42796;
var map__42797__$1 = ((((!((map__42797 == null)))?((((map__42797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42797):map__42797);
var match_length = cljs.core.get.call(null,map__42797__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42797__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42792_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42792_SHARP_);
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
var args42799 = [];
var len__19784__auto___42802 = arguments.length;
var i__19785__auto___42803 = (0);
while(true){
if((i__19785__auto___42803 < len__19784__auto___42802)){
args42799.push((arguments[i__19785__auto___42803]));

var G__42804 = (i__19785__auto___42803 + (1));
i__19785__auto___42803 = G__42804;
continue;
} else {
}
break;
}

var G__42801 = args42799.length;
switch (G__42801) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42799.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42806_SHARP_,p2__42807_SHARP_){
return cljs.core.assoc.call(null,p1__42806_SHARP_,cljs.core.get.call(null,p2__42807_SHARP_,key),p2__42807_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42808){
var map__42811 = p__42808;
var map__42811__$1 = ((((!((map__42811 == null)))?((((map__42811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42811):map__42811);
var f_data = map__42811__$1;
var file = cljs.core.get.call(null,map__42811__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42813,files_msg){
var map__42820 = p__42813;
var map__42820__$1 = ((((!((map__42820 == null)))?((((map__42820.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42820.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42820):map__42820);
var opts = map__42820__$1;
var on_cssload = cljs.core.get.call(null,map__42820__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42822_42826 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__42823_42827 = null;
var count__42824_42828 = (0);
var i__42825_42829 = (0);
while(true){
if((i__42825_42829 < count__42824_42828)){
var f_42830 = cljs.core._nth.call(null,chunk__42823_42827,i__42825_42829);
figwheel.client.file_reloading.reload_css_file.call(null,f_42830);

var G__42831 = seq__42822_42826;
var G__42832 = chunk__42823_42827;
var G__42833 = count__42824_42828;
var G__42834 = (i__42825_42829 + (1));
seq__42822_42826 = G__42831;
chunk__42823_42827 = G__42832;
count__42824_42828 = G__42833;
i__42825_42829 = G__42834;
continue;
} else {
var temp__4657__auto___42835 = cljs.core.seq.call(null,seq__42822_42826);
if(temp__4657__auto___42835){
var seq__42822_42836__$1 = temp__4657__auto___42835;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42822_42836__$1)){
var c__19529__auto___42837 = cljs.core.chunk_first.call(null,seq__42822_42836__$1);
var G__42838 = cljs.core.chunk_rest.call(null,seq__42822_42836__$1);
var G__42839 = c__19529__auto___42837;
var G__42840 = cljs.core.count.call(null,c__19529__auto___42837);
var G__42841 = (0);
seq__42822_42826 = G__42838;
chunk__42823_42827 = G__42839;
count__42824_42828 = G__42840;
i__42825_42829 = G__42841;
continue;
} else {
var f_42842 = cljs.core.first.call(null,seq__42822_42836__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42842);

var G__42843 = cljs.core.next.call(null,seq__42822_42836__$1);
var G__42844 = null;
var G__42845 = (0);
var G__42846 = (0);
seq__42822_42826 = G__42843;
chunk__42823_42827 = G__42844;
count__42824_42828 = G__42845;
i__42825_42829 = G__42846;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__42820,map__42820__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__42820,map__42820__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map