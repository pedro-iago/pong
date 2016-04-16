// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__24329_SHARP_,p2__24331_SHARP_,p3__24328_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__24328_SHARP_)){
return p1__24329_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__24328_SHARP_)){
return cljs.core.assoc.call(null,p1__24329_SHARP_,p2__24331_SHARP_,clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__24345){
var vec__24346 = p__24345;
var k = cljs.core.nth.call(null,vec__24346,(0),null);
var v = cljs.core.nth.call(null,vec__24346,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__24328_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__24328_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__24328_SHARP_))){
return cljs.core.assoc.call(null,p1__24329_SHARP_,p2__24331_SHARP_,clojure.string.join.call(null," ",p3__24328_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__24329_SHARP_,p2__24331_SHARP_,p3__24328_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});
/**
 * @constructor
 */
pong.aframe_react.Animation = (function pong$aframe_react$Animation(){
var this__19536__auto__ = this;
React.Component.apply(this__19536__auto__,arguments);

if(!((this__19536__auto__.initLocalState == null))){
this__19536__auto__.state = this__19536__auto__.initLocalState();
} else {
this__19536__auto__.state = {};
}

return this__19536__auto__;
});

pong.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x24368_24385 = pong.aframe_react.Animation.prototype;
x24368_24385.componentWillUpdate = ((function (x24368_24385){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19476__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19476__auto__);
});})(x24368_24385))
;

x24368_24385.shouldComponentUpdate = ((function (x24368_24385){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
var or__17788__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19476__auto__),goog.object.get(next_props__19477__auto__,"omcljs$value"));
if(or__17788__auto__){
return or__17788__auto__;
} else {
var and__17776__auto__ = this__19476__auto__.state;
if(cljs.core.truth_(and__17776__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19476__auto__.state,"omcljs$state"),goog.object.get(next_state__19478__auto__,"omcljs$state"));
} else {
return and__17776__auto__;
}
}
});})(x24368_24385))
;

x24368_24385.componentWillUnmount = ((function (x24368_24385){
return (function (){
var this__19476__auto__ = this;
var r__19482__auto__ = om.next.get_reconciler.call(null,this__19476__auto__);
var cfg__19483__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19482__auto__);
var st__19484__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
var indexer__19481__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
if((st__19484__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19484__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19476__auto__);
}

if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x24368_24385))
;

x24368_24385.componentDidUpdate = ((function (x24368_24385){
return (function (prev_props__19479__auto__,prev_state__19480__auto__){
var this__19476__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19476__auto__);
});})(x24368_24385))
;

x24368_24385.isMounted = ((function (x24368_24385){
return (function (){
var this__19476__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19476__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24368_24385))
;

x24368_24385.componentWillMount = ((function (x24368_24385){
return (function (){
var this__19476__auto__ = this;
var indexer__19481__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19476__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x24368_24385))
;

x24368_24385.componentDidMount = ((function (x24368_24385){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__24373 = om.next.props.call(null,this$);
var map__24373__$1 = ((((!((map__24373 == null)))?((((map__24373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24373):map__24373);
var on_animation_end = cljs.core.get.call(null,map__24373__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__24373__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x24368_24385))
;

x24368_24385.render = ((function (x24368_24385){
return (function (){
var this__19475__auto__ = this;
var this$ = this__19475__auto__;
var _STAR_reconciler_STAR_24376 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24377 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24378 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24379 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24380 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19475__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19475__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19475__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19475__auto__);

om.next._STAR_parent_STAR_ = this__19475__auto__;

try{return React.createElement("a-animation",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24380;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24379;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24378;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24377;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24376;
}});})(x24368_24385))
;


pong.aframe_react.Animation.prototype.constructor = pong.aframe_react.Animation;

pong.aframe_react.Animation.prototype.constructor.displayName = "pong.aframe-react/Animation";

pong.aframe_react.Animation.prototype.om$isComponent = true;

var x24383_24400 = pong.aframe_react.Animation;


var x24384_24401 = pong.aframe_react.Animation.prototype;


pong.aframe_react.Animation.cljs$lang$type = true;

pong.aframe_react.Animation.cljs$lang$ctorStr = "pong.aframe-react/Animation";

pong.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__19538__auto__,writer__19539__auto__,opt__19540__auto__){
return cljs.core._write.call(null,writer__19539__auto__,"pong.aframe-react/Animation");
});
pong.aframe_react.animation = om.next.factory.call(null,pong.aframe_react.Animation);
/**
 * @constructor
 */
pong.aframe_react.Entity = (function pong$aframe_react$Entity(){
var this__19536__auto__ = this;
React.Component.apply(this__19536__auto__,arguments);

if(!((this__19536__auto__.initLocalState == null))){
this__19536__auto__.state = this__19536__auto__.initLocalState();
} else {
this__19536__auto__.state = {};
}

return this__19536__auto__;
});

pong.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x24411_24425 = pong.aframe_react.Entity.prototype;
x24411_24425.componentWillUpdate = ((function (x24411_24425){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19476__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19476__auto__);
});})(x24411_24425))
;

x24411_24425.shouldComponentUpdate = ((function (x24411_24425){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
var or__17788__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19476__auto__),goog.object.get(next_props__19477__auto__,"omcljs$value"));
if(or__17788__auto__){
return or__17788__auto__;
} else {
var and__17776__auto__ = this__19476__auto__.state;
if(cljs.core.truth_(and__17776__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19476__auto__.state,"omcljs$state"),goog.object.get(next_state__19478__auto__,"omcljs$state"));
} else {
return and__17776__auto__;
}
}
});})(x24411_24425))
;

x24411_24425.componentWillUnmount = ((function (x24411_24425){
return (function (){
var this__19476__auto__ = this;
var r__19482__auto__ = om.next.get_reconciler.call(null,this__19476__auto__);
var cfg__19483__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19482__auto__);
var st__19484__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
var indexer__19481__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
if((st__19484__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19484__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19476__auto__);
}

if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x24411_24425))
;

x24411_24425.componentDidUpdate = ((function (x24411_24425){
return (function (prev_props__19479__auto__,prev_state__19480__auto__){
var this__19476__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19476__auto__);
});})(x24411_24425))
;

x24411_24425.isMounted = ((function (x24411_24425){
return (function (){
var this__19476__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19476__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24411_24425))
;

x24411_24425.componentWillMount = ((function (x24411_24425){
return (function (){
var this__19476__auto__ = this;
var indexer__19481__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19476__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x24411_24425))
;

x24411_24425.componentDidMount = ((function (x24411_24425){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__24413 = om.next.props.call(null,this$);
var map__24413__$1 = ((((!((map__24413 == null)))?((((map__24413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24413):map__24413);
var on_click = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__24413__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x24411_24425))
;

x24411_24425.render = ((function (x24411_24425){
return (function (){
var this__19475__auto__ = this;
var this$ = this__19475__auto__;
var _STAR_reconciler_STAR_24415 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24416 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24417 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24418 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24419 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19475__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19475__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19475__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19475__auto__);

om.next._STAR_parent_STAR_ = this__19475__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24419;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24418;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24417;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24416;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24415;
}});})(x24411_24425))
;


pong.aframe_react.Entity.prototype.constructor = pong.aframe_react.Entity;

pong.aframe_react.Entity.prototype.constructor.displayName = "pong.aframe-react/Entity";

pong.aframe_react.Entity.prototype.om$isComponent = true;

var x24421_24433 = pong.aframe_react.Entity;


var x24422_24434 = pong.aframe_react.Entity.prototype;


pong.aframe_react.Entity.cljs$lang$type = true;

pong.aframe_react.Entity.cljs$lang$ctorStr = "pong.aframe-react/Entity";

pong.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__19538__auto__,writer__19539__auto__,opt__19540__auto__){
return cljs.core._write.call(null,writer__19539__auto__,"pong.aframe-react/Entity");
});
pong.aframe_react.entity = om.next.factory.call(null,pong.aframe_react.Entity);
/**
 * @constructor
 */
pong.aframe_react.Scene = (function pong$aframe_react$Scene(){
var this__19536__auto__ = this;
React.Component.apply(this__19536__auto__,arguments);

if(!((this__19536__auto__.initLocalState == null))){
this__19536__auto__.state = this__19536__auto__.initLocalState();
} else {
this__19536__auto__.state = {};
}

return this__19536__auto__;
});

pong.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x24442_24459 = pong.aframe_react.Scene.prototype;
x24442_24459.componentWillUpdate = ((function (x24442_24459){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19476__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19476__auto__);
});})(x24442_24459))
;

x24442_24459.shouldComponentUpdate = ((function (x24442_24459){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
var or__17788__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19476__auto__),goog.object.get(next_props__19477__auto__,"omcljs$value"));
if(or__17788__auto__){
return or__17788__auto__;
} else {
var and__17776__auto__ = this__19476__auto__.state;
if(cljs.core.truth_(and__17776__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19476__auto__.state,"omcljs$state"),goog.object.get(next_state__19478__auto__,"omcljs$state"));
} else {
return and__17776__auto__;
}
}
});})(x24442_24459))
;

x24442_24459.componentWillUnmount = ((function (x24442_24459){
return (function (){
var this__19476__auto__ = this;
var r__19482__auto__ = om.next.get_reconciler.call(null,this__19476__auto__);
var cfg__19483__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19482__auto__);
var st__19484__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
var indexer__19481__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
if((st__19484__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19484__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19476__auto__);
}

if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x24442_24459))
;

x24442_24459.componentDidUpdate = ((function (x24442_24459){
return (function (prev_props__19479__auto__,prev_state__19480__auto__){
var this__19476__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19476__auto__);
});})(x24442_24459))
;

x24442_24459.isMounted = ((function (x24442_24459){
return (function (){
var this__19476__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19476__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x24442_24459))
;

x24442_24459.componentWillMount = ((function (x24442_24459){
return (function (){
var this__19476__auto__ = this;
var indexer__19481__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19476__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x24442_24459))
;

x24442_24459.componentDidMount = ((function (x24442_24459){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__24447 = om.next.props.call(null,this$);
var map__24447__$1 = ((((!((map__24447 == null)))?((((map__24447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24447):map__24447);
var on_enter_vr = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__24447__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x24442_24459))
;

x24442_24459.render = ((function (x24442_24459){
return (function (){
var this__19475__auto__ = this;
var this$ = this__19475__auto__;
var _STAR_reconciler_STAR_24449 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_24450 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_24451 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_24452 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_24453 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19475__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19475__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19475__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19475__auto__);

om.next._STAR_parent_STAR_ = this__19475__auto__;

try{return React.createElement("a-scene",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_24453;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_24452;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_24451;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_24450;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_24449;
}});})(x24442_24459))
;


pong.aframe_react.Scene.prototype.constructor = pong.aframe_react.Scene;

pong.aframe_react.Scene.prototype.constructor.displayName = "pong.aframe-react/Scene";

pong.aframe_react.Scene.prototype.om$isComponent = true;

var x24455_24470 = pong.aframe_react.Scene;


var x24456_24471 = pong.aframe_react.Scene.prototype;


pong.aframe_react.Scene.cljs$lang$type = true;

pong.aframe_react.Scene.cljs$lang$ctorStr = "pong.aframe-react/Scene";

pong.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__19538__auto__,writer__19539__auto__,opt__19540__auto__){
return cljs.core._write.call(null,writer__19539__auto__,"pong.aframe-react/Scene");
});
pong.aframe_react.scene = om.next.factory.call(null,pong.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map