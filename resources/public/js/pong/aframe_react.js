// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__38679_SHARP_,p2__38678_SHARP_,p3__38680_SHARP_){
var str_key = cljs.core.subs.call(null,[cljs.core.str(p2__38678_SHARP_)].join(''),(1));
if(cljs.core.truth_(cljs.core.namespace.call(null,p2__38678_SHARP_))){
return p1__38679_SHARP_;
} else {
if(cljs.core.fn_QMARK_.call(null,p3__38680_SHARP_)){
return p1__38679_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__38680_SHARP_)){
return cljs.core.assoc.call(null,p1__38679_SHARP_,str_key,clojure.string.join.call(null,"; ",cljs.core.map.call(null,((function (str_key){
return (function (p__38683){
var vec__38684 = p__38683;
var k = cljs.core.nth.call(null,vec__38684,(0),null);
var v = cljs.core.nth.call(null,vec__38684,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
});})(str_key))
,p3__38680_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__38680_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__38680_SHARP_))){
return cljs.core.assoc.call(null,p1__38679_SHARP_,str_key,clojure.string.join.call(null," ",p3__38680_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__38679_SHARP_,str_key,p3__38680_SHARP_);

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
var this__21834__auto__ = this;
React.Component.apply(this__21834__auto__,arguments);

if(!((this__21834__auto__.initLocalState == null))){
this__21834__auto__.state = this__21834__auto__.initLocalState();
} else {
this__21834__auto__.state = {};
}

return this__21834__auto__;
});

pong.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x38689_38699 = pong.aframe_react.Animation.prototype;
x38689_38699.componentWillUpdate = ((function (x38689_38699){
return (function (next_props__21775__auto__,next_state__21776__auto__){
var this__21774__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21774__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21774__auto__);
});})(x38689_38699))
;

x38689_38699.shouldComponentUpdate = ((function (x38689_38699){
return (function (next_props__21775__auto__,next_state__21776__auto__){
var this__21774__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21774__auto__),goog.object.get(next_props__21775__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__21774__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21774__auto__.state,"omcljs$state"),goog.object.get(next_state__21776__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x38689_38699))
;

x38689_38699.componentWillUnmount = ((function (x38689_38699){
return (function (){
var this__21774__auto__ = this;
var r__21780__auto__ = om.next.get_reconciler.call(null,this__21774__auto__);
var cfg__21781__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21780__auto__);
var st__21782__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21781__auto__);
var indexer__21779__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21781__auto__);
if((st__21782__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21782__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21774__auto__);
}

if((indexer__21779__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21779__auto__,this__21774__auto__);
}
});})(x38689_38699))
;

x38689_38699.componentDidUpdate = ((function (x38689_38699){
return (function (prev_props__21777__auto__,prev_state__21778__auto__){
var this__21774__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21774__auto__);
});})(x38689_38699))
;

x38689_38699.isMounted = ((function (x38689_38699){
return (function (){
var this__21774__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21774__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38689_38699))
;

x38689_38699.componentWillMount = ((function (x38689_38699){
return (function (){
var this__21774__auto__ = this;
var indexer__21779__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21774__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21779__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21779__auto__,this__21774__auto__);
}
});})(x38689_38699))
;

x38689_38699.componentDidMount = ((function (x38689_38699){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__38690 = om.next.props.call(null,this$);
var map__38690__$1 = ((((!((map__38690 == null)))?((((map__38690.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38690.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38690):map__38690);
var on_animation_end = cljs.core.get.call(null,map__38690__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__38690__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x38689_38699))
;

x38689_38699.render = ((function (x38689_38699){
return (function (){
var this__21773__auto__ = this;
var this$ = this__21773__auto__;
var _STAR_reconciler_STAR_38692 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38693 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38694 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38695 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38696 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21773__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21773__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21773__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21773__auto__);

om.next._STAR_parent_STAR_ = this__21773__auto__;

try{return React.createElement("a-animation",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38696;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38695;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38694;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38693;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38692;
}});})(x38689_38699))
;


pong.aframe_react.Animation.prototype.constructor = pong.aframe_react.Animation;

pong.aframe_react.Animation.prototype.constructor.displayName = "pong.aframe-react/Animation";

pong.aframe_react.Animation.prototype.om$isComponent = true;

var x38697_38700 = pong.aframe_react.Animation;


var x38698_38701 = pong.aframe_react.Animation.prototype;


pong.aframe_react.Animation.cljs$lang$type = true;

pong.aframe_react.Animation.cljs$lang$ctorStr = "pong.aframe-react/Animation";

pong.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__21836__auto__,writer__21837__auto__,opt__21838__auto__){
return cljs.core._write.call(null,writer__21837__auto__,"pong.aframe-react/Animation");
});
pong.aframe_react.animation = om.next.factory.call(null,pong.aframe_react.Animation);
/**
 * @constructor
 */
pong.aframe_react.Entity = (function pong$aframe_react$Entity(){
var this__21834__auto__ = this;
React.Component.apply(this__21834__auto__,arguments);

if(!((this__21834__auto__.initLocalState == null))){
this__21834__auto__.state = this__21834__auto__.initLocalState();
} else {
this__21834__auto__.state = {};
}

return this__21834__auto__;
});

pong.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x38706_38716 = pong.aframe_react.Entity.prototype;
x38706_38716.componentWillUpdate = ((function (x38706_38716){
return (function (next_props__21775__auto__,next_state__21776__auto__){
var this__21774__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21774__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21774__auto__);
});})(x38706_38716))
;

x38706_38716.shouldComponentUpdate = ((function (x38706_38716){
return (function (next_props__21775__auto__,next_state__21776__auto__){
var this__21774__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21774__auto__),goog.object.get(next_props__21775__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__21774__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21774__auto__.state,"omcljs$state"),goog.object.get(next_state__21776__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x38706_38716))
;

x38706_38716.componentWillUnmount = ((function (x38706_38716){
return (function (){
var this__21774__auto__ = this;
var r__21780__auto__ = om.next.get_reconciler.call(null,this__21774__auto__);
var cfg__21781__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21780__auto__);
var st__21782__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21781__auto__);
var indexer__21779__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21781__auto__);
if((st__21782__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21782__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21774__auto__);
}

if((indexer__21779__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21779__auto__,this__21774__auto__);
}
});})(x38706_38716))
;

x38706_38716.componentDidUpdate = ((function (x38706_38716){
return (function (prev_props__21777__auto__,prev_state__21778__auto__){
var this__21774__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21774__auto__);
});})(x38706_38716))
;

x38706_38716.isMounted = ((function (x38706_38716){
return (function (){
var this__21774__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21774__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38706_38716))
;

x38706_38716.componentWillMount = ((function (x38706_38716){
return (function (){
var this__21774__auto__ = this;
var indexer__21779__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21774__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21779__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21779__auto__,this__21774__auto__);
}
});})(x38706_38716))
;

x38706_38716.componentDidMount = ((function (x38706_38716){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__38707 = om.next.props.call(null,this$);
var map__38707__$1 = ((((!((map__38707 == null)))?((((map__38707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38707):map__38707);
var on_click = cljs.core.get.call(null,map__38707__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__38707__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__38707__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__38707__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x38706_38716))
;

x38706_38716.render = ((function (x38706_38716){
return (function (){
var this__21773__auto__ = this;
var this$ = this__21773__auto__;
var _STAR_reconciler_STAR_38709 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38710 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38711 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38712 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38713 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21773__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21773__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21773__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21773__auto__);

om.next._STAR_parent_STAR_ = this__21773__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38713;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38712;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38711;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38710;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38709;
}});})(x38706_38716))
;


pong.aframe_react.Entity.prototype.constructor = pong.aframe_react.Entity;

pong.aframe_react.Entity.prototype.constructor.displayName = "pong.aframe-react/Entity";

pong.aframe_react.Entity.prototype.om$isComponent = true;

var x38714_38717 = pong.aframe_react.Entity;


var x38715_38718 = pong.aframe_react.Entity.prototype;


pong.aframe_react.Entity.cljs$lang$type = true;

pong.aframe_react.Entity.cljs$lang$ctorStr = "pong.aframe-react/Entity";

pong.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__21836__auto__,writer__21837__auto__,opt__21838__auto__){
return cljs.core._write.call(null,writer__21837__auto__,"pong.aframe-react/Entity");
});
pong.aframe_react.entity = om.next.factory.call(null,pong.aframe_react.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
pong.aframe_react.Scene = (function pong$aframe_react$Scene(){
var this__21834__auto__ = this;
React.Component.apply(this__21834__auto__,arguments);

if(!((this__21834__auto__.initLocalState == null))){
this__21834__auto__.state = this__21834__auto__.initLocalState();
} else {
this__21834__auto__.state = {};
}

return this__21834__auto__;
});

pong.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x38723_38733 = pong.aframe_react.Scene.prototype;
x38723_38733.componentWillUpdate = ((function (x38723_38733){
return (function (next_props__21775__auto__,next_state__21776__auto__){
var this__21774__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21774__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21774__auto__);
});})(x38723_38733))
;

x38723_38733.shouldComponentUpdate = ((function (x38723_38733){
return (function (next_props__21775__auto__,next_state__21776__auto__){
var this__21774__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21774__auto__),goog.object.get(next_props__21775__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__21774__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21774__auto__.state,"omcljs$state"),goog.object.get(next_state__21776__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x38723_38733))
;

x38723_38733.componentWillUnmount = ((function (x38723_38733){
return (function (){
var this__21774__auto__ = this;
var r__21780__auto__ = om.next.get_reconciler.call(null,this__21774__auto__);
var cfg__21781__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21780__auto__);
var st__21782__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21781__auto__);
var indexer__21779__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21781__auto__);
if((st__21782__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21782__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21774__auto__);
}

if((indexer__21779__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21779__auto__,this__21774__auto__);
}
});})(x38723_38733))
;

x38723_38733.componentDidUpdate = ((function (x38723_38733){
return (function (prev_props__21777__auto__,prev_state__21778__auto__){
var this__21774__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21774__auto__);
});})(x38723_38733))
;

x38723_38733.isMounted = ((function (x38723_38733){
return (function (){
var this__21774__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21774__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x38723_38733))
;

x38723_38733.componentWillMount = ((function (x38723_38733){
return (function (){
var this__21774__auto__ = this;
var indexer__21779__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21774__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21779__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21779__auto__,this__21774__auto__);
}
});})(x38723_38733))
;

x38723_38733.componentDidMount = ((function (x38723_38733){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__38724 = om.next.props.call(null,this$);
var map__38724__$1 = ((((!((map__38724 == null)))?((((map__38724.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38724.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38724):map__38724);
var on_enter_vr = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__38724__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x38723_38733))
;

x38723_38733.render = ((function (x38723_38733){
return (function (){
var this__21773__auto__ = this;
var this$ = this__21773__auto__;
var _STAR_reconciler_STAR_38726 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_38727 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_38728 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_38729 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_38730 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21773__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21773__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21773__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21773__auto__);

om.next._STAR_parent_STAR_ = this__21773__auto__;

try{return React.createElement("a-scene",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_38730;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_38729;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_38728;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_38727;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_38726;
}});})(x38723_38733))
;


pong.aframe_react.Scene.prototype.constructor = pong.aframe_react.Scene;

pong.aframe_react.Scene.prototype.constructor.displayName = "pong.aframe-react/Scene";

pong.aframe_react.Scene.prototype.om$isComponent = true;

var x38731_38734 = pong.aframe_react.Scene;


var x38732_38735 = pong.aframe_react.Scene.prototype;


pong.aframe_react.Scene.cljs$lang$type = true;

pong.aframe_react.Scene.cljs$lang$ctorStr = "pong.aframe-react/Scene";

pong.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__21836__auto__,writer__21837__auto__,opt__21838__auto__){
return cljs.core._write.call(null,writer__21837__auto__,"pong.aframe-react/Scene");
});
pong.aframe_react.scene = om.next.factory.call(null,pong.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map