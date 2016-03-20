// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('client.aframe_react');
goog.require('client.ui.counters');
goog.require('om.next');
goog.require('client.ui.spheres');
goog.require('client.parser');
/**
 * @constructor
 */
client.core.App = (function client$core$App(){
var this__19319__auto__ = this;
React.Component.apply(this__19319__auto__,arguments);

if(!((this__19319__auto__.initLocalState == null))){
this__19319__auto__.state = this__19319__auto__.initLocalState();
} else {
this__19319__auto__.state = {};
}

return this__19319__auto__;
});

client.core.App.prototype = goog.object.clone(React.Component.prototype);

var x19348_19358 = client.core.App.prototype;
x19348_19358.componentWillUpdate = ((function (x19348_19358){
return (function (next_props__19260__auto__,next_state__19261__auto__){
var this__19259__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19259__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19259__auto__);
});})(x19348_19358))
;

x19348_19358.shouldComponentUpdate = ((function (x19348_19358){
return (function (next_props__19260__auto__,next_state__19261__auto__){
var this__19259__auto__ = this;
var or__16778__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19259__auto__),goog.object.get(next_props__19260__auto__,"omcljs$value"));
if(or__16778__auto__){
return or__16778__auto__;
} else {
var and__16766__auto__ = this__19259__auto__.state;
if(cljs.core.truth_(and__16766__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19259__auto__.state,"omcljs$state"),goog.object.get(next_state__19261__auto__,"omcljs$state"));
} else {
return and__16766__auto__;
}
}
});})(x19348_19358))
;

x19348_19358.componentWillUnmount = ((function (x19348_19358){
return (function (){
var this__19259__auto__ = this;
var r__19265__auto__ = om.next.get_reconciler.call(null,this__19259__auto__);
var cfg__19266__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19265__auto__);
var st__19267__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19266__auto__);
var indexer__19264__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19266__auto__);
if((st__19267__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19267__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19259__auto__);
}

if((indexer__19264__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19264__auto__,this__19259__auto__);
}
});})(x19348_19358))
;

x19348_19358.componentDidUpdate = ((function (x19348_19358){
return (function (prev_props__19262__auto__,prev_state__19263__auto__){
var this__19259__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19259__auto__);
});})(x19348_19358))
;

x19348_19358.isMounted = ((function (x19348_19358){
return (function (){
var this__19259__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19259__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x19348_19358))
;

x19348_19358.componentWillMount = ((function (x19348_19358){
return (function (){
var this__19259__auto__ = this;
var indexer__19264__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19259__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19264__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19264__auto__,this__19259__auto__);
}
});})(x19348_19358))
;

x19348_19358.render = ((function (x19348_19358){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_19349 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_19350 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_19351 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_19352 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_19353 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__19354 = om.next.props.call(null,this$);
var map__19354__$1 = ((((!((map__19354 == null)))?((((map__19354.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19354.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19354):map__19354);
var counts = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"counts","counts",234305892));
var radius = cljs.core.get.call(null,map__19354__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div({"style": {"zIndex": (5), "position": "relative"}},om.util.force_children.call(null,client.ui.counters.counter.call(null,counts.call(null,(0)))),om.util.force_children.call(null,client.ui.counters.counter.call(null,counts.call(null,(1)))),om.util.force_children.call(null,client.ui.counters.counter.call(null,counts.call(null,(2)))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,client.aframe_react.scene.call(null,null,client.ui.spheres.counter_sphere.call(null,radius.call(null,(0))),client.ui.spheres.counter_sphere.call(null,radius.call(null,(1))),client.ui.spheres.counter_sphere.call(null,radius.call(null,(2))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_19353;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_19352;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_19351;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_19350;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_19349;
}});})(x19348_19358))
;


client.core.App.prototype.constructor = client.core.App;

client.core.App.prototype.om$isComponent = true;

var x19356_19359 = client.core.App;
x19356_19359.om$next$IQuery$ = true;

x19356_19359.om$next$IQuery$query$arity$1 = ((function (x19356_19359){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,client.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,client.ui.spheres.CounterSphere)], null)], null);
});})(x19356_19359))
;


var x19357_19360 = client.core.App.prototype;
x19357_19360.om$next$IQuery$ = true;

x19357_19360.om$next$IQuery$query$arity$1 = ((function (x19357_19360){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,client.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,client.ui.spheres.CounterSphere)], null)], null);
});})(x19357_19360))
;


client.core.App.cljs$lang$type = true;

client.core.App.cljs$lang$ctorStr = "client.core/App";

client.core.App.cljs$lang$ctorPrWriter = (function (this__19321__auto__,writer__19322__auto__,opt__19323__auto__){
return cljs.core._write.call(null,writer__19322__auto__,"client.core/App");
});
client.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(2)], null)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null)], null)], null);
if(typeof client.core.app_state !== 'undefined'){
} else {
client.core.app_state = cljs.core.atom.call(null,om.next.tree__GT_db.call(null,client.core.App,client.core.init_data,true));
}
client.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),client.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),client.parser.parser], null));
om.next.add_root_BANG_.call(null,client.core.reconciler,client.core.App,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map