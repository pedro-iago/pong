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
var this__21209__auto__ = this;
React.Component.apply(this__21209__auto__,arguments);

if(!((this__21209__auto__.initLocalState == null))){
this__21209__auto__.state = this__21209__auto__.initLocalState();
} else {
this__21209__auto__.state = {};
}

return this__21209__auto__;
});

pong.core.App.prototype = goog.object.clone(React.Component.prototype);

var x36820_36830 = pong.core.App.prototype;
x36820_36830.componentWillUpdate = ((function (x36820_36830){
return (function (next_props__21150__auto__,next_state__21151__auto__){
var this__21149__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21149__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21149__auto__);
});})(x36820_36830))
;

x36820_36830.shouldComponentUpdate = ((function (x36820_36830){
return (function (next_props__21150__auto__,next_state__21151__auto__){
var this__21149__auto__ = this;
var or__18102__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21149__auto__),goog.object.get(next_props__21150__auto__,"omcljs$value"));
if(or__18102__auto__){
return or__18102__auto__;
} else {
var and__18090__auto__ = this__21149__auto__.state;
if(cljs.core.truth_(and__18090__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21149__auto__.state,"omcljs$state"),goog.object.get(next_state__21151__auto__,"omcljs$state"));
} else {
return and__18090__auto__;
}
}
});})(x36820_36830))
;

x36820_36830.componentWillUnmount = ((function (x36820_36830){
return (function (){
var this__21149__auto__ = this;
var r__21155__auto__ = om.next.get_reconciler.call(null,this__21149__auto__);
var cfg__21156__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21155__auto__);
var st__21157__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21156__auto__);
var indexer__21154__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21156__auto__);
if((st__21157__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21157__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21149__auto__);
}

if((indexer__21154__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21154__auto__,this__21149__auto__);
}
});})(x36820_36830))
;

x36820_36830.componentDidUpdate = ((function (x36820_36830){
return (function (prev_props__21152__auto__,prev_state__21153__auto__){
var this__21149__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21149__auto__);
});})(x36820_36830))
;

x36820_36830.isMounted = ((function (x36820_36830){
return (function (){
var this__21149__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21149__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36820_36830))
;

x36820_36830.componentWillMount = ((function (x36820_36830){
return (function (){
var this__21149__auto__ = this;
var indexer__21154__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21149__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21154__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21154__auto__,this__21149__auto__);
}
});})(x36820_36830))
;

x36820_36830.render = ((function (x36820_36830){
return (function (){
var this__21148__auto__ = this;
var this$ = this__21148__auto__;
var _STAR_reconciler_STAR_36821 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36822 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36823 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36824 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36825 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21148__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21148__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21148__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21148__auto__);

om.next._STAR_parent_STAR_ = this__21148__auto__;

try{var map__36826 = om.next.props.call(null,this$);
var map__36826__$1 = ((((!((map__36826 == null)))?((((map__36826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36826):map__36826);
var counts = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"counts","counts",234305892));
var radius = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var entities = cljs.core.get.call(null,map__36826__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
return React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,{"style": {"zIndex": (1), "position": "relative"}},cljs.core.map.call(null,pong.ui.counters.counter,counts))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,pong.ui.scenes.empty_scene,entities,cljs.core.map.call(null,pong.ui.spheres.counter_sphere,radius))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36825;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36824;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36823;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36822;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36821;
}});})(x36820_36830))
;


pong.core.App.prototype.constructor = pong.core.App;

pong.core.App.prototype.constructor.displayName = "pong.core/App";

pong.core.App.prototype.om$isComponent = true;

var x36828_36831 = pong.core.App;
x36828_36831.om$next$IQuery$ = true;

x36828_36831.om$next$IQuery$query$arity$1 = ((function (x36828_36831){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null),new cljs.core.Keyword(null,"entities","entities",1940967403)], null);
});})(x36828_36831))
;


var x36829_36832 = pong.core.App.prototype;
x36829_36832.om$next$IQuery$ = true;

x36829_36832.om$next$IQuery$query$arity$1 = ((function (x36829_36832){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null),new cljs.core.Keyword(null,"entities","entities",1940967403)], null);
});})(x36829_36832))
;


pong.core.App.cljs$lang$type = true;

pong.core.App.cljs$lang$ctorStr = "pong.core/App";

pong.core.App.cljs$lang$ctorPrWriter = (function (this__21211__auto__,writer__21212__auto__,opt__21213__auto__){
return cljs.core._write.call(null,writer__21212__auto__,"pong.core/App");
});
pong.core.init_data = cljs.core.merge.call(null,pong.system.dom,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(1)], null)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(1),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null)], null)], null));
if(typeof pong.core.app_state !== 'undefined'){
} else {
pong.core.app_state = cljs.core.atom.call(null,cljs.core.reduce_kv.call(null,(function (p1__36833_SHARP_,p2__36834_SHARP_,p3__36835_SHARP_){
return cljs.core.assoc.call(null,p1__36833_SHARP_,p2__36834_SHARP_,p3__36835_SHARP_);
}),clojure.data.avl.sorted_map.call(null),om.next.tree__GT_db.call(null,pong.core.App,pong.core.init_data,true)));
}
pong.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pong.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),pong.parser.parser], null));
om.next.add_root_BANG_.call(null,pong.core.reconciler,pong.core.App,goog.dom.getElement("app"));

//# sourceMappingURL=core.js.map