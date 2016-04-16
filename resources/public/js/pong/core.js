// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('pong.aframe_react');
goog.require('om.dom');
goog.require('pong.parser');
goog.require('pong.ui.counters');
goog.require('om.next');
goog.require('pong.ui.spheres');
/**
 * @constructor
 */
pong.core.App = (function pong$core$App(){
var this__22977__auto__ = this;
React.Component.apply(this__22977__auto__,arguments);

if(!((this__22977__auto__.initLocalState == null))){
this__22977__auto__.state = this__22977__auto__.initLocalState();
} else {
this__22977__auto__.state = {};
}

return this__22977__auto__;
});

pong.core.App.prototype = goog.object.clone(React.Component.prototype);

var x34370_34380 = pong.core.App.prototype;
x34370_34380.componentWillUpdate = ((function (x34370_34380){
return (function (next_props__22918__auto__,next_state__22919__auto__){
var this__22917__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22917__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22917__auto__);
});})(x34370_34380))
;

x34370_34380.shouldComponentUpdate = ((function (x34370_34380){
return (function (next_props__22918__auto__,next_state__22919__auto__){
var this__22917__auto__ = this;
var or__18102__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22917__auto__),goog.object.get(next_props__22918__auto__,"omcljs$value"));
if(or__18102__auto__){
return or__18102__auto__;
} else {
var and__18090__auto__ = this__22917__auto__.state;
if(cljs.core.truth_(and__18090__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22917__auto__.state,"omcljs$state"),goog.object.get(next_state__22919__auto__,"omcljs$state"));
} else {
return and__18090__auto__;
}
}
});})(x34370_34380))
;

x34370_34380.componentWillUnmount = ((function (x34370_34380){
return (function (){
var this__22917__auto__ = this;
var r__22923__auto__ = om.next.get_reconciler.call(null,this__22917__auto__);
var cfg__22924__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22923__auto__);
var st__22925__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22924__auto__);
var indexer__22922__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22924__auto__);
if((st__22925__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22925__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22917__auto__);
}

if((indexer__22922__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22922__auto__,this__22917__auto__);
}
});})(x34370_34380))
;

x34370_34380.componentDidUpdate = ((function (x34370_34380){
return (function (prev_props__22920__auto__,prev_state__22921__auto__){
var this__22917__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22917__auto__);
});})(x34370_34380))
;

x34370_34380.isMounted = ((function (x34370_34380){
return (function (){
var this__22917__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22917__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34370_34380))
;

x34370_34380.componentWillMount = ((function (x34370_34380){
return (function (){
var this__22917__auto__ = this;
var indexer__22922__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22917__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22922__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22922__auto__,this__22917__auto__);
}
});})(x34370_34380))
;

x34370_34380.render = ((function (x34370_34380){
return (function (){
var this__22916__auto__ = this;
var this$ = this__22916__auto__;
var _STAR_reconciler_STAR_34371 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34372 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34373 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34374 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34375 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22916__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22916__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22916__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22916__auto__);

om.next._STAR_parent_STAR_ = this__22916__auto__;

try{var map__34376 = om.next.props.call(null,this$);
var map__34376__$1 = ((((!((map__34376 == null)))?((((map__34376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34376):map__34376);
var counts = cljs.core.get.call(null,map__34376__$1,new cljs.core.Keyword(null,"counts","counts",234305892));
var radius = cljs.core.get.call(null,map__34376__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.div({"style": {"zIndex": (5), "position": "relative"}},om.util.force_children.call(null,pong.ui.counters.counter.call(null,counts.call(null,(0)))),om.util.force_children.call(null,pong.ui.counters.counter.call(null,counts.call(null,(1)))),om.util.force_children.call(null,pong.ui.counters.counter.call(null,counts.call(null,(2)))))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,pong.aframe_react.scene.call(null,null,pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cam",new cljs.core.Keyword(null,"camera","camera",-1190348585),"",new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 2.2 4",new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),""], null),pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cur",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 0 -3",new cljs.core.Keyword(null,"geometry","geometry",-405034994),"primitive: ring;\n                            radiusInner: 0.016; radiusOuter: 0.05;",new cljs.core.Keyword(null,"material","material",460118677),"color: orange; shader: flat;"], null),pong.aframe_react.animation.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"anim",new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"scale",new cljs.core.Keyword(null,"begin","begin",-319034319),"click",new cljs.core.Keyword(null,"dur","dur",1464522452),"150",new cljs.core.Keyword(null,"fill","fill",883462889),"backwards",new cljs.core.Keyword(null,"from","from",1815293044),"0.1 0.1 0.1",new cljs.core.Keyword(null,"to","to",192099007),"2 2 2"], null)))),pong.ui.spheres.counter_sphere.call(null,radius.call(null,(0))),pong.ui.spheres.counter_sphere.call(null,radius.call(null,(1))),pong.ui.spheres.counter_sphere.call(null,radius.call(null,(2))))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34375;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34374;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34373;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34372;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34371;
}});})(x34370_34380))
;


pong.core.App.prototype.constructor = pong.core.App;

pong.core.App.prototype.constructor.displayName = "pong.core/App";

pong.core.App.prototype.om$isComponent = true;

var x34378_34381 = pong.core.App;
x34378_34381.om$next$IQuery$ = true;

x34378_34381.om$next$IQuery$query$arity$1 = ((function (x34378_34381){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null)], null);
});})(x34378_34381))
;


var x34379_34382 = pong.core.App.prototype;
x34379_34382.om$next$IQuery$ = true;

x34379_34382.om$next$IQuery$query$arity$1 = ((function (x34379_34382){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null)], null);
});})(x34379_34382))
;


pong.core.App.cljs$lang$type = true;

pong.core.App.cljs$lang$ctorStr = "pong.core/App";

pong.core.App.cljs$lang$ctorPrWriter = (function (this__22979__auto__,writer__22980__auto__,opt__22981__auto__){
return cljs.core._write.call(null,writer__22980__auto__,"pong.core/App");
});
pong.core.init_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(2)], null)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(2),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null)], null)], null);
if(typeof pong.core.app_state !== 'undefined'){
} else {
pong.core.app_state = cljs.core.atom.call(null,om.next.tree__GT_db.call(null,pong.core.App,pong.core.init_data,true));
}
pong.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pong.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),pong.parser.parser], null));
om.next.add_root_BANG_.call(null,pong.core.reconciler,pong.core.App,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map