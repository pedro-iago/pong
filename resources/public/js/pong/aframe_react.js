// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__61075_SHARP_,p2__61074_SHARP_,p3__61076_SHARP_){
var str_key = cljs.core.subs.call(null,[cljs.core.str(p2__61074_SHARP_)].join(''),(1));
if(cljs.core.truth_(cljs.core.namespace.call(null,p2__61074_SHARP_))){
return p1__61075_SHARP_;
} else {
if(cljs.core.fn_QMARK_.call(null,p3__61076_SHARP_)){
return p1__61075_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__61076_SHARP_)){
return cljs.core.assoc.call(null,p1__61075_SHARP_,str_key,clojure.string.join.call(null,"; ",cljs.core.map.call(null,((function (str_key){
return (function (p__61079){
var vec__61080 = p__61079;
var k = cljs.core.nth.call(null,vec__61080,(0),null);
var v = cljs.core.nth.call(null,vec__61080,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
});})(str_key))
,p3__61076_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__61076_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__61076_SHARP_))){
return cljs.core.assoc.call(null,p1__61075_SHARP_,str_key,clojure.string.join.call(null," ",p3__61076_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__61075_SHARP_,str_key,p3__61076_SHARP_);

}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});
/**
 * @constructor
 */
pong.aframe_react.Animation = (function pong$aframe_react$Animation(){
var this__20855__auto__ = this;
React.Component.apply(this__20855__auto__,arguments);

if(!((this__20855__auto__.initLocalState == null))){
this__20855__auto__.state = this__20855__auto__.initLocalState();
} else {
this__20855__auto__.state = {};
}

return this__20855__auto__;
});

pong.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x61085_61095 = pong.aframe_react.Animation.prototype;
x61085_61095.componentWillUpdate = ((function (x61085_61095){
return (function (next_props__20796__auto__,next_state__20797__auto__){
var this__20795__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20795__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20795__auto__);
});})(x61085_61095))
;

x61085_61095.shouldComponentUpdate = ((function (x61085_61095){
return (function (next_props__20796__auto__,next_state__20797__auto__){
var this__20795__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20795__auto__),goog.object.get(next_props__20796__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__20795__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20795__auto__.state,"omcljs$state"),goog.object.get(next_state__20797__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x61085_61095))
;

x61085_61095.componentWillUnmount = ((function (x61085_61095){
return (function (){
var this__20795__auto__ = this;
var r__20801__auto__ = om.next.get_reconciler.call(null,this__20795__auto__);
var cfg__20802__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20801__auto__);
var st__20803__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20802__auto__);
var indexer__20800__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20802__auto__);
if((st__20803__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20803__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20795__auto__);
}

if((indexer__20800__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20800__auto__,this__20795__auto__);
}
});})(x61085_61095))
;

x61085_61095.componentDidUpdate = ((function (x61085_61095){
return (function (prev_props__20798__auto__,prev_state__20799__auto__){
var this__20795__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20795__auto__);
});})(x61085_61095))
;

x61085_61095.isMounted = ((function (x61085_61095){
return (function (){
var this__20795__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20795__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x61085_61095))
;

x61085_61095.componentWillMount = ((function (x61085_61095){
return (function (){
var this__20795__auto__ = this;
var indexer__20800__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20795__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20800__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20800__auto__,this__20795__auto__);
}
});})(x61085_61095))
;

x61085_61095.componentDidMount = ((function (x61085_61095){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__61086 = om.next.props.call(null,this$);
var map__61086__$1 = ((((!((map__61086 == null)))?((((map__61086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61086):map__61086);
var on_animation_end = cljs.core.get.call(null,map__61086__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__61086__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x61085_61095))
;

x61085_61095.render = ((function (x61085_61095){
return (function (){
var this__20794__auto__ = this;
var this$ = this__20794__auto__;
var _STAR_reconciler_STAR_61088 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_61089 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_61090 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_61091 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_61092 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20794__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20794__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20794__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20794__auto__);

om.next._STAR_parent_STAR_ = this__20794__auto__;

try{return React.createElement("a-animation",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_61092;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_61091;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_61090;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_61089;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_61088;
}});})(x61085_61095))
;


pong.aframe_react.Animation.prototype.constructor = pong.aframe_react.Animation;

pong.aframe_react.Animation.prototype.constructor.displayName = "pong.aframe-react/Animation";

pong.aframe_react.Animation.prototype.om$isComponent = true;

var x61093_61096 = pong.aframe_react.Animation;


var x61094_61097 = pong.aframe_react.Animation.prototype;


pong.aframe_react.Animation.cljs$lang$type = true;

pong.aframe_react.Animation.cljs$lang$ctorStr = "pong.aframe-react/Animation";

pong.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__20857__auto__,writer__20858__auto__,opt__20859__auto__){
return cljs.core._write.call(null,writer__20858__auto__,"pong.aframe-react/Animation");
});
pong.aframe_react.animation = om.next.factory.call(null,pong.aframe_react.Animation);
/**
 * @constructor
 */
pong.aframe_react.Entity = (function pong$aframe_react$Entity(){
var this__20855__auto__ = this;
React.Component.apply(this__20855__auto__,arguments);

if(!((this__20855__auto__.initLocalState == null))){
this__20855__auto__.state = this__20855__auto__.initLocalState();
} else {
this__20855__auto__.state = {};
}

return this__20855__auto__;
});

pong.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x61102_61112 = pong.aframe_react.Entity.prototype;
x61102_61112.componentWillUpdate = ((function (x61102_61112){
return (function (next_props__20796__auto__,next_state__20797__auto__){
var this__20795__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20795__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20795__auto__);
});})(x61102_61112))
;

x61102_61112.shouldComponentUpdate = ((function (x61102_61112){
return (function (next_props__20796__auto__,next_state__20797__auto__){
var this__20795__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20795__auto__),goog.object.get(next_props__20796__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__20795__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20795__auto__.state,"omcljs$state"),goog.object.get(next_state__20797__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x61102_61112))
;

x61102_61112.componentWillUnmount = ((function (x61102_61112){
return (function (){
var this__20795__auto__ = this;
var r__20801__auto__ = om.next.get_reconciler.call(null,this__20795__auto__);
var cfg__20802__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20801__auto__);
var st__20803__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20802__auto__);
var indexer__20800__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20802__auto__);
if((st__20803__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20803__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20795__auto__);
}

if((indexer__20800__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20800__auto__,this__20795__auto__);
}
});})(x61102_61112))
;

x61102_61112.componentDidUpdate = ((function (x61102_61112){
return (function (prev_props__20798__auto__,prev_state__20799__auto__){
var this__20795__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20795__auto__);
});})(x61102_61112))
;

x61102_61112.isMounted = ((function (x61102_61112){
return (function (){
var this__20795__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20795__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x61102_61112))
;

x61102_61112.componentWillMount = ((function (x61102_61112){
return (function (){
var this__20795__auto__ = this;
var indexer__20800__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20795__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20800__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20800__auto__,this__20795__auto__);
}
});})(x61102_61112))
;

x61102_61112.componentDidMount = ((function (x61102_61112){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__61103 = om.next.props.call(null,this$);
var map__61103__$1 = ((((!((map__61103 == null)))?((((map__61103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61103):map__61103);
var on_click = cljs.core.get.call(null,map__61103__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__61103__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__61103__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__61103__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x61102_61112))
;

x61102_61112.render = ((function (x61102_61112){
return (function (){
var this__20794__auto__ = this;
var this$ = this__20794__auto__;
var _STAR_reconciler_STAR_61105 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_61106 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_61107 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_61108 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_61109 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20794__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20794__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20794__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20794__auto__);

om.next._STAR_parent_STAR_ = this__20794__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_61109;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_61108;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_61107;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_61106;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_61105;
}});})(x61102_61112))
;


pong.aframe_react.Entity.prototype.constructor = pong.aframe_react.Entity;

pong.aframe_react.Entity.prototype.constructor.displayName = "pong.aframe-react/Entity";

pong.aframe_react.Entity.prototype.om$isComponent = true;

var x61110_61113 = pong.aframe_react.Entity;


var x61111_61114 = pong.aframe_react.Entity.prototype;


pong.aframe_react.Entity.cljs$lang$type = true;

pong.aframe_react.Entity.cljs$lang$ctorStr = "pong.aframe-react/Entity";

pong.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__20857__auto__,writer__20858__auto__,opt__20859__auto__){
return cljs.core._write.call(null,writer__20858__auto__,"pong.aframe-react/Entity");
});
pong.aframe_react.entity = om.next.factory.call(null,pong.aframe_react.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
pong.aframe_react.Scene = (function pong$aframe_react$Scene(){
var this__20855__auto__ = this;
React.Component.apply(this__20855__auto__,arguments);

if(!((this__20855__auto__.initLocalState == null))){
this__20855__auto__.state = this__20855__auto__.initLocalState();
} else {
this__20855__auto__.state = {};
}

return this__20855__auto__;
});

pong.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x61119_61129 = pong.aframe_react.Scene.prototype;
x61119_61129.componentWillUpdate = ((function (x61119_61129){
return (function (next_props__20796__auto__,next_state__20797__auto__){
var this__20795__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20795__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20795__auto__);
});})(x61119_61129))
;

x61119_61129.shouldComponentUpdate = ((function (x61119_61129){
return (function (next_props__20796__auto__,next_state__20797__auto__){
var this__20795__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20795__auto__),goog.object.get(next_props__20796__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__20795__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20795__auto__.state,"omcljs$state"),goog.object.get(next_state__20797__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x61119_61129))
;

x61119_61129.componentWillUnmount = ((function (x61119_61129){
return (function (){
var this__20795__auto__ = this;
var r__20801__auto__ = om.next.get_reconciler.call(null,this__20795__auto__);
var cfg__20802__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20801__auto__);
var st__20803__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20802__auto__);
var indexer__20800__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20802__auto__);
if((st__20803__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20803__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20795__auto__);
}

if((indexer__20800__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20800__auto__,this__20795__auto__);
}
});})(x61119_61129))
;

x61119_61129.componentDidUpdate = ((function (x61119_61129){
return (function (prev_props__20798__auto__,prev_state__20799__auto__){
var this__20795__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20795__auto__);
});})(x61119_61129))
;

x61119_61129.isMounted = ((function (x61119_61129){
return (function (){
var this__20795__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20795__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x61119_61129))
;

x61119_61129.componentWillMount = ((function (x61119_61129){
return (function (){
var this__20795__auto__ = this;
var indexer__20800__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20795__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20800__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20800__auto__,this__20795__auto__);
}
});})(x61119_61129))
;

x61119_61129.componentDidMount = ((function (x61119_61129){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__61120 = om.next.props.call(null,this$);
var map__61120__$1 = ((((!((map__61120 == null)))?((((map__61120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__61120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__61120):map__61120);
var on_enter_vr = cljs.core.get.call(null,map__61120__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__61120__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__61120__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__61120__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x61119_61129))
;

x61119_61129.render = ((function (x61119_61129){
return (function (){
var this__20794__auto__ = this;
var this$ = this__20794__auto__;
var _STAR_reconciler_STAR_61122 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_61123 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_61124 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_61125 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_61126 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20794__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20794__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20794__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20794__auto__);

om.next._STAR_parent_STAR_ = this__20794__auto__;

try{return React.createElement("a-scene",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_61126;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_61125;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_61124;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_61123;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_61122;
}});})(x61119_61129))
;


pong.aframe_react.Scene.prototype.constructor = pong.aframe_react.Scene;

pong.aframe_react.Scene.prototype.constructor.displayName = "pong.aframe-react/Scene";

pong.aframe_react.Scene.prototype.om$isComponent = true;

var x61127_61130 = pong.aframe_react.Scene;


var x61128_61131 = pong.aframe_react.Scene.prototype;


pong.aframe_react.Scene.cljs$lang$type = true;

pong.aframe_react.Scene.cljs$lang$ctorStr = "pong.aframe-react/Scene";

pong.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__20857__auto__,writer__20858__auto__,opt__20859__auto__){
return cljs.core._write.call(null,writer__20858__auto__,"pong.aframe-react/Scene");
});
pong.aframe_react.scene = om.next.factory.call(null,pong.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map