// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.parser');
goog.require('cljs.core');
goog.require('om.next');
client.parser.db__GT_tree = (function client$parser$db__GT_tree(p__20469,key,_){
var map__20472 = p__20469;
var map__20472__$1 = ((((!((map__20472 == null)))?((((map__20472.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20472.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20472):map__20472);
var env = map__20472__$1;
var state = cljs.core.get.call(null,map__20472__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__20472__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
});
if(typeof client.parser.readq !== 'undefined'){
} else {
client.parser.readq = (function (){var method_table__17694__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17695__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17696__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17698__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"client.parser","readq"),((function (method_table__17694__auto__,prefer_table__17695__auto__,method_cache__17696__auto__,cached_hierarchy__17697__auto__,hierarchy__17698__auto__){
return (function (_,key,___$1){
return key;
});})(method_table__17694__auto__,prefer_table__17695__auto__,method_cache__17696__auto__,cached_hierarchy__17697__auto__,hierarchy__17698__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17698__auto__,method_table__17694__auto__,prefer_table__17695__auto__,method_cache__17696__auto__,cached_hierarchy__17697__auto__));
})();
}
cljs.core._add_method.call(null,client.parser.readq,new cljs.core.Keyword(null,"counts","counts",234305892),(function (env,key,params){
return client.parser.db__GT_tree.call(null,env,key,params);
}));
cljs.core._add_method.call(null,client.parser.readq,new cljs.core.Keyword(null,"radius","radius",-2073122258),(function (env,key,params){
return client.parser.db__GT_tree.call(null,env,key,params);
}));
cljs.core._add_method.call(null,client.parser.readq,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__20474,key,_){
var map__20475 = p__20474;
var map__20475__$1 = ((((!((map__20475 == null)))?((((map__20475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20475):map__20475);
var env = map__20475__$1;
var state = cljs.core.get.call(null,map__20475__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var temp__4423__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(temp__4423__auto__)){
var value = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}
}));
if(typeof client.parser.mutate !== 'undefined'){
} else {
client.parser.mutate = (function (){var method_table__17694__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17695__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17696__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17697__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17698__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"client.parser","mutate"),((function (method_table__17694__auto__,prefer_table__17695__auto__,method_cache__17696__auto__,cached_hierarchy__17697__auto__,hierarchy__17698__auto__){
return (function (_,key,___$1){
return key;
});})(method_table__17694__auto__,prefer_table__17695__auto__,method_cache__17696__auto__,cached_hierarchy__17697__auto__,hierarchy__17698__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17698__auto__,method_table__17694__auto__,prefer_table__17695__auto__,method_cache__17696__auto__,cached_hierarchy__17697__auto__));
})();
}
cljs.core._add_method.call(null,client.parser.mutate,new cljs.core.Symbol(null,"increment!","increment!",283705852,null),(function (p__20477,_,p__20478){
var map__20479 = p__20477;
var map__20479__$1 = ((((!((map__20479 == null)))?((((map__20479.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20479.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20479):map__20479);
var env = map__20479__$1;
var state = cljs.core.get.call(null,map__20479__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20480 = p__20478;
var map__20480__$1 = ((((!((map__20480 == null)))?((((map__20480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20480):map__20480);
var params = map__20480__$1;
var id = cljs.core.get.call(null,map__20480__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20479,map__20479__$1,env,state,map__20480,map__20480__$1,params,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),id,new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.inc);
});})(map__20479,map__20479__$1,env,state,map__20480,map__20480__$1,params,id))
], null);
}));
cljs.core._add_method.call(null,client.parser.mutate,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null),(function (p__20483,_,p__20484){
var map__20485 = p__20483;
var map__20485__$1 = ((((!((map__20485 == null)))?((((map__20485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20485):map__20485);
var env = map__20485__$1;
var state = cljs.core.get.call(null,map__20485__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__20486 = p__20484;
var map__20486__$1 = ((((!((map__20486 == null)))?((((map__20486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20486):map__20486);
var params = map__20486__$1;
var id = cljs.core.get.call(null,map__20486__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__20485,map__20485__$1,env,state,map__20486,map__20486__$1,params,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),id,new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.dec);
});})(map__20485,map__20485__$1,env,state,map__20486,map__20486__$1,params,id))
], null);
}));
cljs.core._add_method.call(null,client.parser.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}));
client.parser.parser = om.next.parser.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),client.parser.readq,new cljs.core.Keyword(null,"mutate","mutate",1422419038),client.parser.mutate], null));

//# sourceMappingURL=parser.js.map