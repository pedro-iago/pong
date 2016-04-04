// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
client.aframe_react.serialize = (function client$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__20671_SHARP_,p2__20672_SHARP_,p3__20670_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__20670_SHARP_)){
return p1__20671_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__20670_SHARP_)){
return cljs.core.assoc.call(null,p1__20671_SHARP_,p2__20672_SHARP_,clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__20675){
var vec__20676 = p__20675;
var k = cljs.core.nth.call(null,vec__20676,(0),null);
var v = cljs.core.nth.call(null,vec__20676,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__20670_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__20670_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__20670_SHARP_))){
return cljs.core.assoc.call(null,p1__20671_SHARP_,p2__20672_SHARP_,clojure.string.join.call(null," ",p3__20670_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__20671_SHARP_,p2__20672_SHARP_,p3__20670_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});
/**
 * @constructor
 */
client.aframe_react.Animation = (function client$aframe_react$Animation(){
var this__18785__auto__ = this;
React.Component.apply(this__18785__auto__,arguments);

if(!((this__18785__auto__.initLocalState == null))){
this__18785__auto__.state = this__18785__auto__.initLocalState();
} else {
this__18785__auto__.state = {};
}

return this__18785__auto__;
});

client.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x20681_20691 = client.aframe_react.Animation.prototype;
x20681_20691.componentWillUpdate = ((function (x20681_20691){
return (function (next_props__18726__auto__,next_state__18727__auto__){
var this__18725__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18725__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18725__auto__);
});})(x20681_20691))
;

x20681_20691.shouldComponentUpdate = ((function (x20681_20691){
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
});})(x20681_20691))
;

x20681_20691.componentWillUnmount = ((function (x20681_20691){
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
});})(x20681_20691))
;

x20681_20691.componentDidUpdate = ((function (x20681_20691){
return (function (prev_props__18728__auto__,prev_state__18729__auto__){
var this__18725__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18725__auto__);
});})(x20681_20691))
;

x20681_20691.isMounted = ((function (x20681_20691){
return (function (){
var this__18725__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20681_20691))
;

x20681_20691.componentWillMount = ((function (x20681_20691){
return (function (){
var this__18725__auto__ = this;
var indexer__18730__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18730__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18730__auto__,this__18725__auto__);
}
});})(x20681_20691))
;

x20681_20691.componentDidMount = ((function (x20681_20691){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__20682 = om.next.props.call(null,this$);
var map__20682__$1 = ((((!((map__20682 == null)))?((((map__20682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20682):map__20682);
var on_animation_end = cljs.core.get.call(null,map__20682__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__20682__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x20681_20691))
;

x20681_20691.render = ((function (x20681_20691){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20684 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20685 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20686 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20687 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20688 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.createElement("a-animation",client.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20688;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20687;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20686;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20685;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20684;
}});})(x20681_20691))
;


client.aframe_react.Animation.prototype.constructor = client.aframe_react.Animation;

client.aframe_react.Animation.prototype.om$isComponent = true;

var x20689_20692 = client.aframe_react.Animation;


var x20690_20693 = client.aframe_react.Animation.prototype;


client.aframe_react.Animation.cljs$lang$type = true;

client.aframe_react.Animation.cljs$lang$ctorStr = "client.aframe-react/Animation";

client.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__18787__auto__,writer__18788__auto__,opt__18789__auto__){
return cljs.core._write.call(null,writer__18788__auto__,"client.aframe-react/Animation");
});
client.aframe_react.animation = om.next.factory.call(null,client.aframe_react.Animation);
/**
 * @constructor
 */
client.aframe_react.Entity = (function client$aframe_react$Entity(){
var this__18785__auto__ = this;
React.Component.apply(this__18785__auto__,arguments);

if(!((this__18785__auto__.initLocalState == null))){
this__18785__auto__.state = this__18785__auto__.initLocalState();
} else {
this__18785__auto__.state = {};
}

return this__18785__auto__;
});

client.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x20698_20708 = client.aframe_react.Entity.prototype;
x20698_20708.componentWillUpdate = ((function (x20698_20708){
return (function (next_props__18726__auto__,next_state__18727__auto__){
var this__18725__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18725__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18725__auto__);
});})(x20698_20708))
;

x20698_20708.shouldComponentUpdate = ((function (x20698_20708){
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
});})(x20698_20708))
;

x20698_20708.componentWillUnmount = ((function (x20698_20708){
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
});})(x20698_20708))
;

x20698_20708.componentDidUpdate = ((function (x20698_20708){
return (function (prev_props__18728__auto__,prev_state__18729__auto__){
var this__18725__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18725__auto__);
});})(x20698_20708))
;

x20698_20708.isMounted = ((function (x20698_20708){
return (function (){
var this__18725__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20698_20708))
;

x20698_20708.componentWillMount = ((function (x20698_20708){
return (function (){
var this__18725__auto__ = this;
var indexer__18730__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18730__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18730__auto__,this__18725__auto__);
}
});})(x20698_20708))
;

x20698_20708.componentDidMount = ((function (x20698_20708){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__20699 = om.next.props.call(null,this$);
var map__20699__$1 = ((((!((map__20699 == null)))?((((map__20699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20699):map__20699);
var on_click = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__20699__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x20698_20708))
;

x20698_20708.render = ((function (x20698_20708){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20701 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20702 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20703 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20704 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20705 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.createElement("a-entity",client.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20705;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20704;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20703;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20702;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20701;
}});})(x20698_20708))
;


client.aframe_react.Entity.prototype.constructor = client.aframe_react.Entity;

client.aframe_react.Entity.prototype.om$isComponent = true;

var x20706_20709 = client.aframe_react.Entity;


var x20707_20710 = client.aframe_react.Entity.prototype;


client.aframe_react.Entity.cljs$lang$type = true;

client.aframe_react.Entity.cljs$lang$ctorStr = "client.aframe-react/Entity";

client.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__18787__auto__,writer__18788__auto__,opt__18789__auto__){
return cljs.core._write.call(null,writer__18788__auto__,"client.aframe-react/Entity");
});
client.aframe_react.entity = om.next.factory.call(null,client.aframe_react.Entity);
/**
 * @constructor
 */
client.aframe_react.Scene = (function client$aframe_react$Scene(){
var this__18785__auto__ = this;
React.Component.apply(this__18785__auto__,arguments);

if(!((this__18785__auto__.initLocalState == null))){
this__18785__auto__.state = this__18785__auto__.initLocalState();
} else {
this__18785__auto__.state = {};
}

return this__18785__auto__;
});

client.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x20715_20725 = client.aframe_react.Scene.prototype;
x20715_20725.componentWillUpdate = ((function (x20715_20725){
return (function (next_props__18726__auto__,next_state__18727__auto__){
var this__18725__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18725__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18725__auto__);
});})(x20715_20725))
;

x20715_20725.shouldComponentUpdate = ((function (x20715_20725){
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
});})(x20715_20725))
;

x20715_20725.componentWillUnmount = ((function (x20715_20725){
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
});})(x20715_20725))
;

x20715_20725.componentDidUpdate = ((function (x20715_20725){
return (function (prev_props__18728__auto__,prev_state__18729__auto__){
var this__18725__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18725__auto__);
});})(x20715_20725))
;

x20715_20725.isMounted = ((function (x20715_20725){
return (function (){
var this__18725__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20715_20725))
;

x20715_20725.componentWillMount = ((function (x20715_20725){
return (function (){
var this__18725__auto__ = this;
var indexer__18730__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18730__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18730__auto__,this__18725__auto__);
}
});})(x20715_20725))
;

x20715_20725.componentDidMount = ((function (x20715_20725){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__20716 = om.next.props.call(null,this$);
var map__20716__$1 = ((((!((map__20716 == null)))?((((map__20716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20716):map__20716);
var on_enter_vr = cljs.core.get.call(null,map__20716__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__20716__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__20716__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__20716__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x20715_20725))
;

x20715_20725.render = ((function (x20715_20725){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20718 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20719 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20720 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20721 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20722 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.createElement("a-scene",client.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20722;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20721;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20720;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20719;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20718;
}});})(x20715_20725))
;


client.aframe_react.Scene.prototype.constructor = client.aframe_react.Scene;

client.aframe_react.Scene.prototype.om$isComponent = true;

var x20723_20726 = client.aframe_react.Scene;


var x20724_20727 = client.aframe_react.Scene.prototype;


client.aframe_react.Scene.cljs$lang$type = true;

client.aframe_react.Scene.cljs$lang$ctorStr = "client.aframe-react/Scene";

client.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__18787__auto__,writer__18788__auto__,opt__18789__auto__){
return cljs.core._write.call(null,writer__18788__auto__,"client.aframe-react/Scene");
});
client.aframe_react.scene = om.next.factory.call(null,client.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map