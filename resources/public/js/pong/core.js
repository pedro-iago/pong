// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('pong.system');
goog.require('pong.aframe_react');
goog.require('om.dom');
goog.require('pong.parser');
goog.require('pong.ui.scenes');
goog.require('clojure.data.avl');
goog.require('pong.ui.counters');
goog.require('om.next');
goog.require('pong.ui.spheres');
/**
 * @constructor
 */
pong.core.App = (function pong$core$App(){
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.core.App.prototype = goog.object.clone(React.Component.prototype);

var x46032_46042 = pong.core.App.prototype;
x46032_46042.componentWillUpdate = ((function (x46032_46042){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x46032_46042))
;

x46032_46042.shouldComponentUpdate = ((function (x46032_46042){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32061__auto__),goog.object.get(next_props__32062__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__32061__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32061__auto__.state,"omcljs$state"),goog.object.get(next_state__32063__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x46032_46042))
;

x46032_46042.componentWillUnmount = ((function (x46032_46042){
return (function (){
var this__32061__auto__ = this;
var r__32067__auto__ = om.next.get_reconciler.call(null,this__32061__auto__);
var cfg__32068__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32067__auto__);
var st__32069__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32068__auto__);
var indexer__32066__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32068__auto__);
if((st__32069__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__32069__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32061__auto__);
}

if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x46032_46042))
;

x46032_46042.componentDidUpdate = ((function (x46032_46042){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x46032_46042))
;

x46032_46042.isMounted = ((function (x46032_46042){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x46032_46042))
;

x46032_46042.componentWillMount = ((function (x46032_46042){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x46032_46042))
;

x46032_46042.render = ((function (x46032_46042){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_46033 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_46034 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_46035 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_46036 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_46037 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{var map__46038 = om.next.props.call(null,this$);
var map__46038__$1 = ((((!((map__46038 == null)))?((((map__46038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46038):map__46038);
var counts = cljs.core.get.call(null,map__46038__$1,new cljs.core.Keyword(null,"counts","counts",234305892));
var radius = cljs.core.get.call(null,map__46038__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var entities = cljs.core.get.call(null,map__46038__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
return React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,{"style": {"zIndex": (1), "position": "relative"}},cljs.core.map.call(null,pong.ui.counters.counter,counts))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,pong.ui.scenes.empty_scene,entities,cljs.core.map.call(null,pong.ui.spheres.counter_sphere,radius))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_46037;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_46036;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_46035;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_46034;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_46033;
}});})(x46032_46042))
;


pong.core.App.prototype.constructor = pong.core.App;

pong.core.App.prototype.constructor.displayName = "pong.core/App";

pong.core.App.prototype.om$isComponent = true;

var x46040_46043 = pong.core.App;
x46040_46043.om$next$IQuery$ = true;

x46040_46043.om$next$IQuery$query$arity$1 = ((function (x46040_46043){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null),new cljs.core.Keyword(null,"entities","entities",1940967403)], null);
});})(x46040_46043))
;


var x46041_46044 = pong.core.App.prototype;
x46041_46044.om$next$IQuery$ = true;

x46041_46044.om$next$IQuery$query$arity$1 = ((function (x46041_46044){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null),new cljs.core.Keyword(null,"entities","entities",1940967403)], null);
});})(x46041_46044))
;


pong.core.App.cljs$lang$type = true;

pong.core.App.cljs$lang$ctorStr = "pong.core/App";

pong.core.App.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.core/App");
});
pong.core.init_data = cljs.core.merge.call(null,pong.system.dom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null)], null)], null));
if(typeof pong.core.app_state !== 'undefined'){
} else {
pong.core.app_state = cljs.core.atom.call(null,cljs.core.reduce_kv.call(null,(function (p1__46045_SHARP_,p2__46046_SHARP_,p3__46047_SHARP_){
return cljs.core.assoc.call(null,p1__46045_SHARP_,p2__46046_SHARP_,p3__46047_SHARP_);
}),clojure.data.avl.sorted_map.call(null),om.next.tree__GT_db.call(null,pong.core.App,pong.core.init_data,true)));
}
pong.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pong.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),pong.parser.parser], null));
om.next.add_root_BANG_.call(null,pong.core.reconciler,pong.core.App,goog.dom.getElement("app"));
pong.core.loop_sys = (function pong$core$loop_sys(){
window.requestAnimationFrame(pong$core$loop_sys);

return cljs.core.swap_BANG_.call(null,pong.core.app_state,pong.system.step_dom,0.01666);
});

window.requestAnimationFrame(pong.core.loop_sys);

//# sourceMappingURL=core.js.map