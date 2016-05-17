// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('pong.systems');
goog.require('pong.aframe_react');
goog.require('om.dom');
goog.require('pong.utils');
goog.require('pong.parser');
goog.require('pong.scripts');
goog.require('pong.ui.scenes');
goog.require('clojure.data.avl');
goog.require('pong.ui.counters');
goog.require('om.next');
goog.require('pong.ui.spheres');
/**
 * @constructor
 */
pong.core.App = (function pong$core$App(){
var this__20953__auto__ = this;
React.Component.apply(this__20953__auto__,arguments);

if(!((this__20953__auto__.initLocalState == null))){
this__20953__auto__.state = this__20953__auto__.initLocalState();
} else {
this__20953__auto__.state = {};
}

return this__20953__auto__;
});

pong.core.App.prototype = goog.object.clone(React.Component.prototype);

var x37122_37132 = pong.core.App.prototype;
x37122_37132.componentWillUpdate = ((function (x37122_37132){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20893__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20893__auto__);
});})(x37122_37132))
;

x37122_37132.shouldComponentUpdate = ((function (x37122_37132){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20893__auto__),goog.object.get(next_props__20894__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__20893__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20893__auto__.state,"omcljs$state"),goog.object.get(next_state__20895__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x37122_37132))
;

x37122_37132.componentWillUnmount = ((function (x37122_37132){
return (function (){
var this__20893__auto__ = this;
var r__20899__auto__ = om.next.get_reconciler.call(null,this__20893__auto__);
var cfg__20900__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20899__auto__);
var st__20901__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
var indexer__20898__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
if((st__20901__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20901__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20893__auto__);
}

if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37122_37132))
;

x37122_37132.componentDidUpdate = ((function (x37122_37132){
return (function (prev_props__20896__auto__,prev_state__20897__auto__){
var this__20893__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20893__auto__);
});})(x37122_37132))
;

x37122_37132.isMounted = ((function (x37122_37132){
return (function (){
var this__20893__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20893__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37122_37132))
;

x37122_37132.componentWillMount = ((function (x37122_37132){
return (function (){
var this__20893__auto__ = this;
var indexer__20898__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20893__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37122_37132))
;

x37122_37132.render = ((function (x37122_37132){
return (function (){
var this__20892__auto__ = this;
var this$ = this__20892__auto__;
var _STAR_reconciler_STAR_37123 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37124 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37125 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37126 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37127 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20892__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20892__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20892__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20892__auto__);

om.next._STAR_parent_STAR_ = this__20892__auto__;

try{var map__37128 = om.next.props.call(null,this$);
var map__37128__$1 = ((((!((map__37128 == null)))?((((map__37128.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37128.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37128):map__37128);
var counts = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"counts","counts",234305892));
var radius = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var entities = cljs.core.get.call(null,map__37128__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
return React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,{"style": {"zIndex": (1), "position": "relative"}},cljs.core.map.call(null,pong.ui.counters.counter,counts))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,pong.ui.scenes.empty_scene,cljs.core.vals.call(null,entities),cljs.core.map.call(null,pong.ui.spheres.counter_sphere,radius))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37127;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37126;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37125;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37124;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37123;
}});})(x37122_37132))
;


pong.core.App.prototype.constructor = pong.core.App;

pong.core.App.prototype.constructor.displayName = "pong.core/App";

pong.core.App.prototype.om$isComponent = true;

var x37130_37133 = pong.core.App;
x37130_37133.om$next$IQuery$ = true;

x37130_37133.om$next$IQuery$query$arity$1 = ((function (x37130_37133){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null)], null);
});})(x37130_37133))
;


var x37131_37134 = pong.core.App.prototype;
x37131_37134.om$next$IQuery$ = true;

x37131_37134.om$next$IQuery$query$arity$1 = ((function (x37131_37134){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null)], null);
});})(x37131_37134))
;


pong.core.App.cljs$lang$type = true;

pong.core.App.cljs$lang$ctorStr = "pong.core/App";

pong.core.App.cljs$lang$ctorPrWriter = (function (this__20955__auto__,writer__20956__auto__,opt__20957__auto__){
return cljs.core._write.call(null,writer__20956__auto__,"pong.core/App");
});
pong.core.init_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"components","components",-1073188942),pong.utils.switch_path.call(null,pong.scripts.weirdom),new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null)], null)], null);
if(typeof pong.core.app_state !== 'undefined'){
} else {
pong.core.app_state = cljs.core.atom.call(null,cljs.core.reduce_kv.call(null,(function (p1__37135_SHARP_,p2__37136_SHARP_,p3__37137_SHARP_){
return cljs.core.assoc.call(null,p1__37135_SHARP_,p2__37136_SHARP_,p3__37137_SHARP_);
}),clojure.data.avl.sorted_map.call(null),om.next.tree__GT_db.call(null,pong.core.App,pong.core.init_data,true)));
}
pong.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pong.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),pong.parser.parser], null));
om.next.add_root_BANG_.call(null,pong.core.reconciler,pong.core.App,goog.dom.getElement("app"));
if(typeof pong.core.rafid !== 'undefined'){
} else {
pong.core.rafid = cljs.core.atom.call(null,null);
}
pong.core.start_raf = (function pong$core$start_raf(){
pong.core.loop_sys = (function pong$core$start_raf_$_loop_sys(){
cljs.core.reset_BANG_.call(null,pong.core.rafid,window.requestAnimationFrame(pong$core$start_raf_$_loop_sys));

return cljs.core.swap_BANG_.call(null,pong.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"components","components",-1073188942),pong.systems.step_ecs,0.01666);
});

return cljs.core.reset_BANG_.call(null,pong.core.rafid,window.requestAnimationFrame(pong.core.loop_sys));
});
pong.core.end_raf = (function pong$core$end_raf(id){
return window.cancelAnimationFrame(id);
});
pong.core.end_raf.call(null,cljs.core.deref.call(null,pong.core.rafid));
pong.core.start_raf.call(null);

//# sourceMappingURL=core.js.map