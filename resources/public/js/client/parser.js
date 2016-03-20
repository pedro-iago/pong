// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.parser');
goog.require('cljs.core');
goog.require('om.next');
client.parser.db__GT_tree = (function client$parser$db__GT_tree(p__26420,key,_){
var map__26423 = p__26420;
var map__26423__$1 = ((((!((map__26423 == null)))?((((map__26423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26423):map__26423);
var env = map__26423__$1;
var state = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__26423__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,key),st)], null);
});
if(typeof client.parser.read !== 'undefined'){
} else {
client.parser.read = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"client.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,client.parser.read,new cljs.core.Keyword(null,"counts","counts",234305892),(function (env,key,params){
return client.parser.db__GT_tree.call(null,env,key,params);
}));
cljs.core._add_method.call(null,client.parser.read,new cljs.core.Keyword(null,"radius","radius",-2073122258),(function (env,key,params){
return client.parser.db__GT_tree.call(null,env,key,params);
}));
cljs.core._add_method.call(null,client.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26425,key,_){
var map__26426 = p__26425;
var map__26426__$1 = ((((!((map__26426 == null)))?((((map__26426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26426):map__26426);
var env = map__26426__$1;
var state = cljs.core.get.call(null,map__26426__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
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
client.parser.mutate = (function (){var method_table__17684__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17685__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17686__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17687__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17688__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"client.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17688__auto__,method_table__17684__auto__,prefer_table__17685__auto__,method_cache__17686__auto__,cached_hierarchy__17687__auto__));
})();
}
cljs.core._add_method.call(null,client.parser.mutate,new cljs.core.Symbol(null,"increment!","increment!",283705852,null),(function (p__26428,_,p__26429){
var map__26430 = p__26428;
var map__26430__$1 = ((((!((map__26430 == null)))?((((map__26430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26430):map__26430);
var env = map__26430__$1;
var state = cljs.core.get.call(null,map__26430__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__26431 = p__26429;
var map__26431__$1 = ((((!((map__26431 == null)))?((((map__26431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26431):map__26431);
var params = map__26431__$1;
var id = cljs.core.get.call(null,map__26431__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.Keyword(null,"radius","radius",-2073122258)], null)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__26430,map__26430__$1,env,state,map__26431,map__26431__$1,params,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),id,new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.inc);
});})(map__26430,map__26430__$1,env,state,map__26431,map__26431__$1,params,id))
], null);
}));
cljs.core._add_method.call(null,client.parser.mutate,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null);
}));

//# sourceMappingURL=parser.js.map