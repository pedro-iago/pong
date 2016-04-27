// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__35105_SHARP_,p2__35106_SHARP_,p3__35104_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__35104_SHARP_)){
return p1__35105_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__35104_SHARP_)){
return cljs.core.assoc.call(null,p1__35105_SHARP_,cljs.core.subs.call(null,[cljs.core.str(p2__35106_SHARP_)].join(''),(1)),clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__35109){
var vec__35110 = p__35109;
var k = cljs.core.nth.call(null,vec__35110,(0),null);
var v = cljs.core.nth.call(null,vec__35110,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__35104_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__35104_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__35104_SHARP_))){
return cljs.core.assoc.call(null,p1__35105_SHARP_,cljs.core.subs.call(null,[cljs.core.str(p2__35106_SHARP_)].join(''),(1)),clojure.string.join.call(null," ",p3__35104_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__35105_SHARP_,cljs.core.subs.call(null,[cljs.core.str(p2__35106_SHARP_)].join(''),(1)),p3__35104_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});
/**
 * @constructor
 */
pong.aframe_react.Animation = (function pong$aframe_react$Animation(){
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x35150_35166 = pong.aframe_react.Animation.prototype;
x35150_35166.componentWillUpdate = ((function (x35150_35166){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x35150_35166))
;

x35150_35166.shouldComponentUpdate = ((function (x35150_35166){
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
});})(x35150_35166))
;

x35150_35166.componentWillUnmount = ((function (x35150_35166){
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
});})(x35150_35166))
;

x35150_35166.componentDidUpdate = ((function (x35150_35166){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x35150_35166))
;

x35150_35166.isMounted = ((function (x35150_35166){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35150_35166))
;

x35150_35166.componentWillMount = ((function (x35150_35166){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x35150_35166))
;

x35150_35166.componentDidMount = ((function (x35150_35166){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__35151 = om.next.props.call(null,this$);
var map__35151__$1 = ((((!((map__35151 == null)))?((((map__35151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35151):map__35151);
var on_animation_end = cljs.core.get.call(null,map__35151__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__35151__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x35150_35166))
;

x35150_35166.render = ((function (x35150_35166){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_35158 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35159 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35160 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35161 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35162 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{return React.createElement("a-animation",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35162;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35161;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35160;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35159;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35158;
}});})(x35150_35166))
;


pong.aframe_react.Animation.prototype.constructor = pong.aframe_react.Animation;

pong.aframe_react.Animation.prototype.constructor.displayName = "pong.aframe-react/Animation";

pong.aframe_react.Animation.prototype.om$isComponent = true;

var x35164_35172 = pong.aframe_react.Animation;


var x35165_35173 = pong.aframe_react.Animation.prototype;


pong.aframe_react.Animation.cljs$lang$type = true;

pong.aframe_react.Animation.cljs$lang$ctorStr = "pong.aframe-react/Animation";

pong.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.aframe-react/Animation");
});
pong.aframe_react.animation = om.next.factory.call(null,pong.aframe_react.Animation);
/**
 * @constructor
 */
pong.aframe_react.Entity = (function pong$aframe_react$Entity(){
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x35178_35189 = pong.aframe_react.Entity.prototype;
x35178_35189.componentWillUpdate = ((function (x35178_35189){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x35178_35189))
;

x35178_35189.shouldComponentUpdate = ((function (x35178_35189){
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
});})(x35178_35189))
;

x35178_35189.componentWillUnmount = ((function (x35178_35189){
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
});})(x35178_35189))
;

x35178_35189.componentDidUpdate = ((function (x35178_35189){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x35178_35189))
;

x35178_35189.isMounted = ((function (x35178_35189){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35178_35189))
;

x35178_35189.componentWillMount = ((function (x35178_35189){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x35178_35189))
;

x35178_35189.componentDidMount = ((function (x35178_35189){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__35179 = om.next.props.call(null,this$);
var map__35179__$1 = ((((!((map__35179 == null)))?((((map__35179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35179):map__35179);
var on_click = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__35179__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x35178_35189))
;

x35178_35189.render = ((function (x35178_35189){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_35181 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35182 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35183 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35184 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35185 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35185;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35184;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35183;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35182;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35181;
}});})(x35178_35189))
;


pong.aframe_react.Entity.prototype.constructor = pong.aframe_react.Entity;

pong.aframe_react.Entity.prototype.constructor.displayName = "pong.aframe-react/Entity";

pong.aframe_react.Entity.prototype.om$isComponent = true;

var x35186_35288 = pong.aframe_react.Entity;


var x35187_35289 = pong.aframe_react.Entity.prototype;


pong.aframe_react.Entity.cljs$lang$type = true;

pong.aframe_react.Entity.cljs$lang$ctorStr = "pong.aframe-react/Entity";

pong.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.aframe-react/Entity");
});
pong.aframe_react.entity = om.next.factory.call(null,pong.aframe_react.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
pong.aframe_react.Scene = (function pong$aframe_react$Scene(){
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x35294_35315 = pong.aframe_react.Scene.prototype;
x35294_35315.componentWillUpdate = ((function (x35294_35315){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x35294_35315))
;

x35294_35315.shouldComponentUpdate = ((function (x35294_35315){
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
});})(x35294_35315))
;

x35294_35315.componentWillUnmount = ((function (x35294_35315){
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
});})(x35294_35315))
;

x35294_35315.componentDidUpdate = ((function (x35294_35315){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x35294_35315))
;

x35294_35315.isMounted = ((function (x35294_35315){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35294_35315))
;

x35294_35315.componentWillMount = ((function (x35294_35315){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x35294_35315))
;

x35294_35315.componentDidMount = ((function (x35294_35315){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__35295 = om.next.props.call(null,this$);
var map__35295__$1 = ((((!((map__35295 == null)))?((((map__35295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35295):map__35295);
var on_enter_vr = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__35295__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x35294_35315))
;

x35294_35315.render = ((function (x35294_35315){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_35297 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35298 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35299 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35300 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35301 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{return React.createElement("a-scene",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35301;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35300;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35299;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35298;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35297;
}});})(x35294_35315))
;


pong.aframe_react.Scene.prototype.constructor = pong.aframe_react.Scene;

pong.aframe_react.Scene.prototype.constructor.displayName = "pong.aframe-react/Scene";

pong.aframe_react.Scene.prototype.om$isComponent = true;

var x35307_35330 = pong.aframe_react.Scene;


var x35308_35331 = pong.aframe_react.Scene.prototype;


pong.aframe_react.Scene.cljs$lang$type = true;

pong.aframe_react.Scene.cljs$lang$ctorStr = "pong.aframe-react/Scene";

pong.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.aframe-react/Scene");
});
pong.aframe_react.scene = om.next.factory.call(null,pong.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map