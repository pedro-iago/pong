// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
client.aframe_react.serialize = (function client$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__25437_SHARP_,p2__25438_SHARP_,p3__25436_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__25436_SHARP_)){
return p1__25437_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__25436_SHARP_)){
return cljs.core.assoc.call(null,p1__25437_SHARP_,p2__25438_SHARP_,clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__25441){
var vec__25442 = p__25441;
var k = cljs.core.nth.call(null,vec__25442,(0),null);
var v = cljs.core.nth.call(null,vec__25442,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__25436_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__25436_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__25436_SHARP_))){
return cljs.core.assoc.call(null,p1__25437_SHARP_,p2__25438_SHARP_,clojure.string.join.call(null," ",p3__25436_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__25437_SHARP_,p2__25438_SHARP_,p3__25436_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});
/**
 * @constructor
 */
client.aframe_react.Animation = (function client$aframe_react$Animation(){
var this__19241__auto__ = this;
React.Component.apply(this__19241__auto__,arguments);

if(!((this__19241__auto__.initLocalState == null))){
this__19241__auto__.state = this__19241__auto__.initLocalState();
} else {
this__19241__auto__.state = {};
}

return this__19241__auto__;
});

client.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x25447_25457 = client.aframe_react.Animation.prototype;
x25447_25457.componentWillUpdate = ((function (x25447_25457){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x25447_25457))
;

x25447_25457.shouldComponentUpdate = ((function (x25447_25457){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
var or__16700__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19181__auto__),goog.object.get(next_props__19182__auto__,"omcljs$value"));
if(or__16700__auto__){
return or__16700__auto__;
} else {
var and__16688__auto__ = this__19181__auto__.state;
if(cljs.core.truth_(and__16688__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19181__auto__.state,"omcljs$state"),goog.object.get(next_state__19183__auto__,"omcljs$state"));
} else {
return and__16688__auto__;
}
}
});})(x25447_25457))
;

x25447_25457.componentWillUnmount = ((function (x25447_25457){
return (function (){
var this__19181__auto__ = this;
var r__19187__auto__ = om.next.get_reconciler.call(null,this__19181__auto__);
var cfg__19188__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19187__auto__);
var st__19189__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19188__auto__);
var indexer__19186__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19188__auto__);
if((st__19189__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19189__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19181__auto__);
}

if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x25447_25457))
;

x25447_25457.componentDidUpdate = ((function (x25447_25457){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x25447_25457))
;

x25447_25457.isMounted = ((function (x25447_25457){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25447_25457))
;

x25447_25457.componentWillMount = ((function (x25447_25457){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x25447_25457))
;

x25447_25457.componentDidMount = ((function (x25447_25457){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__25448 = om.next.props.call(null,this$);
var map__25448__$1 = ((((!((map__25448 == null)))?((((map__25448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25448):map__25448);
var on_animation_end = cljs.core.get.call(null,map__25448__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__25448__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x25447_25457))
;

x25447_25457.render = ((function (x25447_25457){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25450 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25451 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25452 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25453 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25454 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.createElement("a-animation",client.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25454;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25453;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25452;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25451;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25450;
}});})(x25447_25457))
;


client.aframe_react.Animation.prototype.constructor = client.aframe_react.Animation;

client.aframe_react.Animation.prototype.om$isComponent = true;

var x25455_25458 = client.aframe_react.Animation;


var x25456_25459 = client.aframe_react.Animation.prototype;


client.aframe_react.Animation.cljs$lang$type = true;

client.aframe_react.Animation.cljs$lang$ctorStr = "client.aframe-react/Animation";

client.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__19243__auto__,writer__19244__auto__,opt__19245__auto__){
return cljs.core._write.call(null,writer__19244__auto__,"client.aframe-react/Animation");
});
client.aframe_react.animation = om.next.factory.call(null,client.aframe_react.Animation);
/**
 * @constructor
 */
client.aframe_react.Entity = (function client$aframe_react$Entity(){
var this__19241__auto__ = this;
React.Component.apply(this__19241__auto__,arguments);

if(!((this__19241__auto__.initLocalState == null))){
this__19241__auto__.state = this__19241__auto__.initLocalState();
} else {
this__19241__auto__.state = {};
}

return this__19241__auto__;
});

client.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x25464_25474 = client.aframe_react.Entity.prototype;
x25464_25474.componentWillUpdate = ((function (x25464_25474){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x25464_25474))
;

x25464_25474.shouldComponentUpdate = ((function (x25464_25474){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
var or__16700__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19181__auto__),goog.object.get(next_props__19182__auto__,"omcljs$value"));
if(or__16700__auto__){
return or__16700__auto__;
} else {
var and__16688__auto__ = this__19181__auto__.state;
if(cljs.core.truth_(and__16688__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19181__auto__.state,"omcljs$state"),goog.object.get(next_state__19183__auto__,"omcljs$state"));
} else {
return and__16688__auto__;
}
}
});})(x25464_25474))
;

x25464_25474.componentWillUnmount = ((function (x25464_25474){
return (function (){
var this__19181__auto__ = this;
var r__19187__auto__ = om.next.get_reconciler.call(null,this__19181__auto__);
var cfg__19188__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19187__auto__);
var st__19189__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19188__auto__);
var indexer__19186__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19188__auto__);
if((st__19189__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19189__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19181__auto__);
}

if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x25464_25474))
;

x25464_25474.componentDidUpdate = ((function (x25464_25474){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x25464_25474))
;

x25464_25474.isMounted = ((function (x25464_25474){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25464_25474))
;

x25464_25474.componentWillMount = ((function (x25464_25474){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x25464_25474))
;

x25464_25474.componentDidMount = ((function (x25464_25474){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__25465 = om.next.props.call(null,this$);
var map__25465__$1 = ((((!((map__25465 == null)))?((((map__25465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25465):map__25465);
var on_click = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__25465__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x25464_25474))
;

x25464_25474.render = ((function (x25464_25474){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25467 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25468 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25469 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25470 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25471 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.createElement("a-entity",client.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25471;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25470;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25469;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25468;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25467;
}});})(x25464_25474))
;


client.aframe_react.Entity.prototype.constructor = client.aframe_react.Entity;

client.aframe_react.Entity.prototype.om$isComponent = true;

var x25472_25475 = client.aframe_react.Entity;


var x25473_25476 = client.aframe_react.Entity.prototype;


client.aframe_react.Entity.cljs$lang$type = true;

client.aframe_react.Entity.cljs$lang$ctorStr = "client.aframe-react/Entity";

client.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__19243__auto__,writer__19244__auto__,opt__19245__auto__){
return cljs.core._write.call(null,writer__19244__auto__,"client.aframe-react/Entity");
});
client.aframe_react.entity = om.next.factory.call(null,client.aframe_react.Entity);
/**
 * @constructor
 */
client.aframe_react.Scene = (function client$aframe_react$Scene(){
var this__19241__auto__ = this;
React.Component.apply(this__19241__auto__,arguments);

if(!((this__19241__auto__.initLocalState == null))){
this__19241__auto__.state = this__19241__auto__.initLocalState();
} else {
this__19241__auto__.state = {};
}

return this__19241__auto__;
});

client.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x25481_25491 = client.aframe_react.Scene.prototype;
x25481_25491.componentWillUpdate = ((function (x25481_25491){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x25481_25491))
;

x25481_25491.shouldComponentUpdate = ((function (x25481_25491){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
var or__16700__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19181__auto__),goog.object.get(next_props__19182__auto__,"omcljs$value"));
if(or__16700__auto__){
return or__16700__auto__;
} else {
var and__16688__auto__ = this__19181__auto__.state;
if(cljs.core.truth_(and__16688__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19181__auto__.state,"omcljs$state"),goog.object.get(next_state__19183__auto__,"omcljs$state"));
} else {
return and__16688__auto__;
}
}
});})(x25481_25491))
;

x25481_25491.componentWillUnmount = ((function (x25481_25491){
return (function (){
var this__19181__auto__ = this;
var r__19187__auto__ = om.next.get_reconciler.call(null,this__19181__auto__);
var cfg__19188__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19187__auto__);
var st__19189__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19188__auto__);
var indexer__19186__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19188__auto__);
if((st__19189__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19189__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19181__auto__);
}

if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x25481_25491))
;

x25481_25491.componentDidUpdate = ((function (x25481_25491){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x25481_25491))
;

x25481_25491.isMounted = ((function (x25481_25491){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25481_25491))
;

x25481_25491.componentWillMount = ((function (x25481_25491){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x25481_25491))
;

x25481_25491.componentDidMount = ((function (x25481_25491){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__25482 = om.next.props.call(null,this$);
var map__25482__$1 = ((((!((map__25482 == null)))?((((map__25482.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25482.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25482):map__25482);
var on_enter_vr = cljs.core.get.call(null,map__25482__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__25482__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__25482__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__25482__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x25481_25491))
;

x25481_25491.render = ((function (x25481_25491){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25484 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25485 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25486 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25487 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25488 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return React.createElement("a-scene",client.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25488;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25487;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25486;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25485;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25484;
}});})(x25481_25491))
;


client.aframe_react.Scene.prototype.constructor = client.aframe_react.Scene;

client.aframe_react.Scene.prototype.om$isComponent = true;

var x25489_25492 = client.aframe_react.Scene;


var x25490_25493 = client.aframe_react.Scene.prototype;


client.aframe_react.Scene.cljs$lang$type = true;

client.aframe_react.Scene.cljs$lang$ctorStr = "client.aframe-react/Scene";

client.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__19243__auto__,writer__19244__auto__,opt__19245__auto__){
return cljs.core._write.call(null,writer__19244__auto__,"client.aframe-react/Scene");
});
client.aframe_react.scene = om.next.factory.call(null,client.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map