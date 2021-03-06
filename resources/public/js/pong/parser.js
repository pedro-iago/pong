// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('clojure.data.avl');
goog.require('com.rpl.specter');
goog.require('pong.utils');
pong.parser.read = (function pong$parser$read(p__35914,key,params){
var map__35926 = p__35914;
var map__35926__$1 = ((((!((map__35926 == null)))?((((map__35926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35926):map__35926);
var env = map__35926__$1;
var state = cljs.core.get.call(null,map__35926__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35926__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var G__35931 = (((key instanceof cljs.core.Keyword))?key.fqn:null);
switch (G__35931) {
case "entities":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),pong.utils.fold_children.call(null,pong.utils.keyed_dom.call(null,pong.utils.switch_path.call(null,new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(st))))], null);

break;
case "counts":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);

break;
case "radius":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);

break;
default:
var temp__4655__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4655__auto__)){
var value = temp__4655__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}

}
});
pong.parser.mutate = (function pong$parser$mutate(p__35941,key,params){
var map__35949 = p__35941;
var map__35949__$1 = ((((!((map__35949 == null)))?((((map__35949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35949):map__35949);
var env = map__35949__$1;
var state = cljs.core.get.call(null,map__35949__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__35949__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params);
var G__35952 = cljs.core.name.call(null,key);
switch (G__35952) {
case "increment!":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (G__35952,st,id,map__35949,map__35949__$1,env,state,query){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),id,new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.inc);
});})(G__35952,st,id,map__35949,map__35949__$1,env,state,query))
], null);

break;
case "decrement!":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (G__35952,st,id,map__35949,map__35949__$1,env,state,query){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),id,new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.dec);
});})(G__35952,st,id,map__35949,map__35949__$1,env,state,query))
], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.name.call(null,key))].join('')));

}
});
pong.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),pong.parser.read,new cljs.core.Keyword(null,"mutate","mutate",1422419038),pong.parser.mutate], null));

//# sourceMappingURL=parser.js.map