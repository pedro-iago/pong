// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('com.rpl.specter');
goog.require('com.rpl.specter.impl');
goog.require('clojure.string');
pong.aframe_react.MESS = com.rpl.specter.walker.call(null,cljs.core.some_fn.call(null,cljs.core.fn_QMARK_,com.rpl.specter.impl.compiled_path_QMARK_));
pong.aframe_react.get_name = (function pong$aframe_react$get_name(obj){
if(cljs.core.fn_QMARK_.call(null,obj)){
return cljs.core.peek.call(null,clojure.string.split.call(null,(obj["name"]),"$"));
} else {
if(cljs.core.truth_(com.rpl.specter.impl.compiled_path_QMARK_.call(null,obj))){
return new cljs.core.Symbol(null,"?path","?path",385070032,null);
} else {
return null;
}
}
});
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__39240_SHARP_,p2__39238_SHARP_,p3__39239_SHARP_){
var str_key = cljs.core.subs.call(null,[cljs.core.str(p2__39238_SHARP_)].join(''),(1));
if(cljs.core.fn_QMARK_.call(null,p3__39239_SHARP_)){
return p1__39240_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__39239_SHARP_)){
return cljs.core.assoc.call(null,p1__39240_SHARP_,str_key,clojure.string.join.call(null,"; ",cljs.core.map.call(null,((function (str_key){
return (function (p__39243){
var vec__39244 = p__39243;
var k = cljs.core.nth.call(null,vec__39244,(0),null);
var v = cljs.core.nth.call(null,vec__39244,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),com.rpl.specter.transform.call(null,pong.aframe_react.MESS,pong.aframe_react.get_name,v)], null));
});})(str_key))
,p3__39239_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__39239_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__39239_SHARP_))){
return cljs.core.assoc.call(null,p1__39240_SHARP_,str_key,clojure.string.join.call(null," ",p3__39239_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__39240_SHARP_,str_key,p3__39239_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});
/**
 * @constructor
 */
pong.aframe_react.Animation = (function pong$aframe_react$Animation(){
var this__21833__auto__ = this;
React.Component.apply(this__21833__auto__,arguments);

if(!((this__21833__auto__.initLocalState == null))){
this__21833__auto__.state = this__21833__auto__.initLocalState();
} else {
this__21833__auto__.state = {};
}

return this__21833__auto__;
});

pong.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x39249_39259 = pong.aframe_react.Animation.prototype;
x39249_39259.componentWillUpdate = ((function (x39249_39259){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21773__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21773__auto__);
});})(x39249_39259))
;

x39249_39259.shouldComponentUpdate = ((function (x39249_39259){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21773__auto__),goog.object.get(next_props__21774__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__21773__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21773__auto__.state,"omcljs$state"),goog.object.get(next_state__21775__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x39249_39259))
;

x39249_39259.componentWillUnmount = ((function (x39249_39259){
return (function (){
var this__21773__auto__ = this;
var r__21779__auto__ = om.next.get_reconciler.call(null,this__21773__auto__);
var cfg__21780__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21779__auto__);
var st__21781__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21780__auto__);
var indexer__21778__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21780__auto__);
if((st__21781__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21781__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21773__auto__);
}

if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x39249_39259))
;

x39249_39259.componentDidUpdate = ((function (x39249_39259){
return (function (prev_props__21776__auto__,prev_state__21777__auto__){
var this__21773__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21773__auto__);
});})(x39249_39259))
;

x39249_39259.isMounted = ((function (x39249_39259){
return (function (){
var this__21773__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21773__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x39249_39259))
;

x39249_39259.componentWillMount = ((function (x39249_39259){
return (function (){
var this__21773__auto__ = this;
var indexer__21778__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21773__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x39249_39259))
;

x39249_39259.componentDidMount = ((function (x39249_39259){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__39250 = om.next.props.call(null,this$);
var map__39250__$1 = ((((!((map__39250 == null)))?((((map__39250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39250):map__39250);
var on_animation_end = cljs.core.get.call(null,map__39250__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__39250__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x39249_39259))
;

x39249_39259.render = ((function (x39249_39259){
return (function (){
var this__21772__auto__ = this;
var this$ = this__21772__auto__;
var _STAR_reconciler_STAR_39252 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39253 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_39254 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_39255 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_39256 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21772__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21772__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21772__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21772__auto__);

om.next._STAR_parent_STAR_ = this__21772__auto__;

try{return React.createElement("a-animation",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_39256;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_39255;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_39254;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_39253;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39252;
}});})(x39249_39259))
;


pong.aframe_react.Animation.prototype.constructor = pong.aframe_react.Animation;

pong.aframe_react.Animation.prototype.constructor.displayName = "pong.aframe-react/Animation";

pong.aframe_react.Animation.prototype.om$isComponent = true;

var x39257_39260 = pong.aframe_react.Animation;


var x39258_39261 = pong.aframe_react.Animation.prototype;


pong.aframe_react.Animation.cljs$lang$type = true;

pong.aframe_react.Animation.cljs$lang$ctorStr = "pong.aframe-react/Animation";

pong.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__21835__auto__,writer__21836__auto__,opt__21837__auto__){
return cljs.core._write.call(null,writer__21836__auto__,"pong.aframe-react/Animation");
});
pong.aframe_react.animation = om.next.factory.call(null,pong.aframe_react.Animation);
/**
 * @constructor
 */
pong.aframe_react.Entity = (function pong$aframe_react$Entity(){
var this__21833__auto__ = this;
React.Component.apply(this__21833__auto__,arguments);

if(!((this__21833__auto__.initLocalState == null))){
this__21833__auto__.state = this__21833__auto__.initLocalState();
} else {
this__21833__auto__.state = {};
}

return this__21833__auto__;
});

pong.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x39266_39276 = pong.aframe_react.Entity.prototype;
x39266_39276.componentWillUpdate = ((function (x39266_39276){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21773__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21773__auto__);
});})(x39266_39276))
;

x39266_39276.shouldComponentUpdate = ((function (x39266_39276){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21773__auto__),goog.object.get(next_props__21774__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__21773__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21773__auto__.state,"omcljs$state"),goog.object.get(next_state__21775__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x39266_39276))
;

x39266_39276.componentWillUnmount = ((function (x39266_39276){
return (function (){
var this__21773__auto__ = this;
var r__21779__auto__ = om.next.get_reconciler.call(null,this__21773__auto__);
var cfg__21780__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21779__auto__);
var st__21781__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21780__auto__);
var indexer__21778__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21780__auto__);
if((st__21781__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21781__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21773__auto__);
}

if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x39266_39276))
;

x39266_39276.componentDidUpdate = ((function (x39266_39276){
return (function (prev_props__21776__auto__,prev_state__21777__auto__){
var this__21773__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21773__auto__);
});})(x39266_39276))
;

x39266_39276.isMounted = ((function (x39266_39276){
return (function (){
var this__21773__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21773__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x39266_39276))
;

x39266_39276.componentWillMount = ((function (x39266_39276){
return (function (){
var this__21773__auto__ = this;
var indexer__21778__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21773__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x39266_39276))
;

x39266_39276.componentDidMount = ((function (x39266_39276){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__39267 = om.next.props.call(null,this$);
var map__39267__$1 = ((((!((map__39267 == null)))?((((map__39267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39267):map__39267);
var on_click = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__39267__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x39266_39276))
;

x39266_39276.render = ((function (x39266_39276){
return (function (){
var this__21772__auto__ = this;
var this$ = this__21772__auto__;
var _STAR_reconciler_STAR_39269 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39270 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_39271 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_39272 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_39273 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21772__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21772__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21772__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21772__auto__);

om.next._STAR_parent_STAR_ = this__21772__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_39273;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_39272;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_39271;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_39270;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39269;
}});})(x39266_39276))
;


pong.aframe_react.Entity.prototype.constructor = pong.aframe_react.Entity;

pong.aframe_react.Entity.prototype.constructor.displayName = "pong.aframe-react/Entity";

pong.aframe_react.Entity.prototype.om$isComponent = true;

var x39274_39277 = pong.aframe_react.Entity;


var x39275_39278 = pong.aframe_react.Entity.prototype;


pong.aframe_react.Entity.cljs$lang$type = true;

pong.aframe_react.Entity.cljs$lang$ctorStr = "pong.aframe-react/Entity";

pong.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__21835__auto__,writer__21836__auto__,opt__21837__auto__){
return cljs.core._write.call(null,writer__21836__auto__,"pong.aframe-react/Entity");
});
pong.aframe_react.entity = om.next.factory.call(null,pong.aframe_react.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
pong.aframe_react.Scene = (function pong$aframe_react$Scene(){
var this__21833__auto__ = this;
React.Component.apply(this__21833__auto__,arguments);

if(!((this__21833__auto__.initLocalState == null))){
this__21833__auto__.state = this__21833__auto__.initLocalState();
} else {
this__21833__auto__.state = {};
}

return this__21833__auto__;
});

pong.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x39283_39293 = pong.aframe_react.Scene.prototype;
x39283_39293.componentWillUpdate = ((function (x39283_39293){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21773__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21773__auto__);
});})(x39283_39293))
;

x39283_39293.shouldComponentUpdate = ((function (x39283_39293){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21773__auto__),goog.object.get(next_props__21774__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__21773__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21773__auto__.state,"omcljs$state"),goog.object.get(next_state__21775__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x39283_39293))
;

x39283_39293.componentWillUnmount = ((function (x39283_39293){
return (function (){
var this__21773__auto__ = this;
var r__21779__auto__ = om.next.get_reconciler.call(null,this__21773__auto__);
var cfg__21780__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21779__auto__);
var st__21781__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21780__auto__);
var indexer__21778__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21780__auto__);
if((st__21781__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21781__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21773__auto__);
}

if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x39283_39293))
;

x39283_39293.componentDidUpdate = ((function (x39283_39293){
return (function (prev_props__21776__auto__,prev_state__21777__auto__){
var this__21773__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21773__auto__);
});})(x39283_39293))
;

x39283_39293.isMounted = ((function (x39283_39293){
return (function (){
var this__21773__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21773__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x39283_39293))
;

x39283_39293.componentWillMount = ((function (x39283_39293){
return (function (){
var this__21773__auto__ = this;
var indexer__21778__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21773__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x39283_39293))
;

x39283_39293.componentDidMount = ((function (x39283_39293){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__39284 = om.next.props.call(null,this$);
var map__39284__$1 = ((((!((map__39284 == null)))?((((map__39284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39284):map__39284);
var on_enter_vr = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__39284__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x39283_39293))
;

x39283_39293.render = ((function (x39283_39293){
return (function (){
var this__21772__auto__ = this;
var this$ = this__21772__auto__;
var _STAR_reconciler_STAR_39286 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39287 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_39288 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_39289 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_39290 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21772__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21772__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21772__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21772__auto__);

om.next._STAR_parent_STAR_ = this__21772__auto__;

try{return React.createElement("a-scene",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_39290;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_39289;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_39288;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_39287;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39286;
}});})(x39283_39293))
;


pong.aframe_react.Scene.prototype.constructor = pong.aframe_react.Scene;

pong.aframe_react.Scene.prototype.constructor.displayName = "pong.aframe-react/Scene";

pong.aframe_react.Scene.prototype.om$isComponent = true;

var x39291_39294 = pong.aframe_react.Scene;


var x39292_39295 = pong.aframe_react.Scene.prototype;


pong.aframe_react.Scene.cljs$lang$type = true;

pong.aframe_react.Scene.cljs$lang$ctorStr = "pong.aframe-react/Scene";

pong.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__21835__auto__,writer__21836__auto__,opt__21837__auto__){
return cljs.core._write.call(null,writer__21836__auto__,"pong.aframe-react/Scene");
});
pong.aframe_react.scene = om.next.factory.call(null,pong.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map