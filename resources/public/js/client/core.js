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
var this__18785__auto__ = this;
React.Component.apply(this__18785__auto__,arguments);

if(!((this__18785__auto__.initLocalState == null))){
this__18785__auto__.state = this__18785__auto__.initLocalState();
} else {
this__18785__auto__.state = {};
}

return this__18785__auto__;
});

client.core.App.prototype = goog.object.clone(React.Component.prototype);

var x21661_21671 = client.core.App.prototype;
x21661_21671.componentWillUpdate = ((function (x21661_21671){
return (function (next_props__18726__auto__,next_state__18727__auto__){
var this__18725__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18725__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18725__auto__);
});})(x21661_21671))
;

x21661_21671.shouldComponentUpdate = ((function (x21661_21671){
return (function (next_props__18726__auto__,next_state__18727__auto__){
var this__18725__auto__ = this;
var or__16700__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18725__auto__),goog.object.get(next_props__18726__auto__,"omcljs$value"));
if(or__16700__auto__){
return or__16700__auto__;
} else {
var and__16688__auto__ = this__18725__auto__.state;
if(cljs.core.truth_(and__16688__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18725__auto__.state,"omcljs$state"),goog.object.get(next_state__18727__auto__,"omcljs$state"));
} else {
return and__16688__auto__;
}
}
});})(x21661_21671))
;

x21661_21671.componentWillUnmount = ((function (x21661_21671){
return (function (){
var this__18725__auto__ = this;
var r__18731__auto__ = om.next.get_reconciler.call(null,this__18725__auto__);
var cfg__18732__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18731__auto__);
var st__18733__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18732__auto__);
var indexer__18730__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18732__auto__);
if((st__18733__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18733__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18725__auto__);
}

if((indexer__18730__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18730__auto__,this__18725__auto__);
}
});})(x21661_21671))
;

x21661_21671.componentDidUpdate = ((function (x21661_21671){
return (function (prev_props__18728__auto__,prev_state__18729__auto__){
var this__18725__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18725__auto__);
});})(x21661_21671))
;

x21661_21671.isMounted = ((function (x21661_21671){
return (function (){
var this__18725__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21661_21671))
;

x21661_21671.componentWillMount = ((function (x21661_21671){
return (function (){
var this__18725__auto__ = this;
var indexer__18730__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18730__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18730__auto__,this__18725__auto__);
}
});})(x21661_21671))
;

x21661_21671.render = ((function (x21661_21671){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21662 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21663 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21664 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21665 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21666 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21667 = om.next.props.call(null,this$);
var map__21667__$1 = ((((!((map__21667 == null)))?((((map__21667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21667):map__21667);
var counts = cljs.core.get.call(null,map__21667__$1,new cljs.core.Keyword(null,"counts","counts",234305892));
var radius = cljs.core.get.call(null,map__21667__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div({"style": {"zIndex": (5), "position": "relative"}},om.util.force_children.call(null,client.ui.counters.counter.call(null,counts.call(null,(0)))),om.util.force_children.call(null,client.ui.counters.counter.call(null,counts.call(null,(1)))),om.util.force_children.call(null,client.ui.counters.counter.call(null,counts.call(null,(2)))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,client.aframe_react.scene.call(null,null,client.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cam",new cljs.core.Keyword(null,"camera","camera",-1190348585),"",new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 2.2 4",new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),""], null),client.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cur",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 0 -3",new cljs.core.Keyword(null,"geometry","geometry",-405034994),"primitive: ring;\n                            radiusInner: 0.016; radiusOuter: 0.05;",new cljs.core.Keyword(null,"material","material",460118677),"color: orange; shader: flat;"], null),client.aframe_react.animation.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"anim",new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"scale",new cljs.core.Keyword(null,"begin","begin",-319034319),"click",new cljs.core.Keyword(null,"dur","dur",1464522452),"150",new cljs.core.Keyword(null,"fill","fill",883462889),"backwards",new cljs.core.Keyword(null,"from","from",1815293044),"0.1 0.1 0.1",new cljs.core.Keyword(null,"to","to",192099007),"2 2 2"], null)))),client.ui.spheres.counter_sphere.call(null,radius.call(null,(0))),client.ui.spheres.counter_sphere.call(null,radius.call(null,(1))),client.ui.spheres.counter_sphere.call(null,radius.call(null,(2))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21666;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21665;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21664;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21663;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21662;
}});})(x21661_21671))
;


client.core.App.prototype.constructor = client.core.App;

client.core.App.prototype.om$isComponent = true;

var x21669_21672 = client.core.App;
x21669_21672.om$next$IQuery$ = true;

x21669_21672.om$next$IQuery$query$arity$1 = ((function (x21669_21672){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,client.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,client.ui.spheres.CounterSphere)], null)], null);
});})(x21669_21672))
;


var x21670_21673 = client.core.App.prototype;
x21670_21673.om$next$IQuery$ = true;

x21670_21673.om$next$IQuery$query$arity$1 = ((function (x21670_21673){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,client.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,client.ui.spheres.CounterSphere)], null)], null);
});})(x21670_21673))
;


client.core.App.cljs$lang$type = true;

client.core.App.cljs$lang$ctorStr = "client.core/App";

client.core.App.cljs$lang$ctorPrWriter = (function (this__18787__auto__,writer__18788__auto__,opt__18789__auto__){
return cljs.core._write.call(null,writer__18788__auto__,"client.core/App");
});
client.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(2)], null)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null)], null)], null);
if(typeof client.core.app_state !== 'undefined'){
} else {
client.core.app_state = cljs.core.atom.call(null,om.next.tree__GT_db.call(null,client.core.App,client.core.init_data,true));
}
client.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),client.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),client.parser.parser], null));
om.next.add_root_BANG_.call(null,client.core.reconciler,client.core.App,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map