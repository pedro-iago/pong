// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__33890_SHARP_,p2__33891_SHARP_,p3__33889_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__33889_SHARP_)){
return p1__33890_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__33889_SHARP_)){
return cljs.core.assoc.call(null,p1__33890_SHARP_,p2__33891_SHARP_,clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__33894){
var vec__33895 = p__33894;
var k = cljs.core.nth.call(null,vec__33895,(0),null);
var v = cljs.core.nth.call(null,vec__33895,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__33889_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__33889_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__33889_SHARP_))){
return cljs.core.assoc.call(null,p1__33890_SHARP_,p2__33891_SHARP_,clojure.string.join.call(null," ",p3__33889_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__33890_SHARP_,p2__33891_SHARP_,p3__33889_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});
/**
 * @constructor
 */
pong.aframe_react.Animation = (function pong$aframe_react$Animation(){
var this__21209__auto__ = this;
React.Component.apply(this__21209__auto__,arguments);

if(!((this__21209__auto__.initLocalState == null))){
this__21209__auto__.state = this__21209__auto__.initLocalState();
} else {
this__21209__auto__.state = {};
}

return this__21209__auto__;
});

pong.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x33900_33910 = pong.aframe_react.Animation.prototype;
x33900_33910.componentWillUpdate = ((function (x33900_33910){
return (function (next_props__21150__auto__,next_state__21151__auto__){
var this__21149__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21149__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21149__auto__);
});})(x33900_33910))
;

x33900_33910.shouldComponentUpdate = ((function (x33900_33910){
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
});})(x33900_33910))
;

x33900_33910.componentWillUnmount = ((function (x33900_33910){
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
});})(x33900_33910))
;

x33900_33910.componentDidUpdate = ((function (x33900_33910){
return (function (prev_props__21152__auto__,prev_state__21153__auto__){
var this__21149__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21149__auto__);
});})(x33900_33910))
;

x33900_33910.isMounted = ((function (x33900_33910){
return (function (){
var this__21149__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21149__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33900_33910))
;

x33900_33910.componentWillMount = ((function (x33900_33910){
return (function (){
var this__21149__auto__ = this;
var indexer__21154__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21149__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21154__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21154__auto__,this__21149__auto__);
}
});})(x33900_33910))
;

x33900_33910.componentDidMount = ((function (x33900_33910){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__33901 = om.next.props.call(null,this$);
var map__33901__$1 = ((((!((map__33901 == null)))?((((map__33901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33901):map__33901);
var on_animation_end = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__33901__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x33900_33910))
;

x33900_33910.render = ((function (x33900_33910){
return (function (){
var this__21148__auto__ = this;
var this$ = this__21148__auto__;
var _STAR_reconciler_STAR_33903 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33904 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33905 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33906 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33907 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21148__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21148__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21148__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21148__auto__);

om.next._STAR_parent_STAR_ = this__21148__auto__;

try{return React.createElement("a-animation",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33907;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33906;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33905;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33904;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33903;
}});})(x33900_33910))
;


pong.aframe_react.Animation.prototype.constructor = pong.aframe_react.Animation;

pong.aframe_react.Animation.prototype.constructor.displayName = "pong.aframe-react/Animation";

pong.aframe_react.Animation.prototype.om$isComponent = true;

var x33908_33911 = pong.aframe_react.Animation;


var x33909_33912 = pong.aframe_react.Animation.prototype;


pong.aframe_react.Animation.cljs$lang$type = true;

pong.aframe_react.Animation.cljs$lang$ctorStr = "pong.aframe-react/Animation";

pong.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__21211__auto__,writer__21212__auto__,opt__21213__auto__){
return cljs.core._write.call(null,writer__21212__auto__,"pong.aframe-react/Animation");
});
pong.aframe_react.animation = om.next.factory.call(null,pong.aframe_react.Animation);
/**
 * @constructor
 */
pong.aframe_react.Entity = (function pong$aframe_react$Entity(){
var this__21209__auto__ = this;
React.Component.apply(this__21209__auto__,arguments);

if(!((this__21209__auto__.initLocalState == null))){
this__21209__auto__.state = this__21209__auto__.initLocalState();
} else {
this__21209__auto__.state = {};
}

return this__21209__auto__;
});

pong.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x33917_33927 = pong.aframe_react.Entity.prototype;
x33917_33927.componentWillUpdate = ((function (x33917_33927){
return (function (next_props__21150__auto__,next_state__21151__auto__){
var this__21149__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21149__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21149__auto__);
});})(x33917_33927))
;

x33917_33927.shouldComponentUpdate = ((function (x33917_33927){
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
});})(x33917_33927))
;

x33917_33927.componentWillUnmount = ((function (x33917_33927){
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
});})(x33917_33927))
;

x33917_33927.componentDidUpdate = ((function (x33917_33927){
return (function (prev_props__21152__auto__,prev_state__21153__auto__){
var this__21149__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21149__auto__);
});})(x33917_33927))
;

x33917_33927.isMounted = ((function (x33917_33927){
return (function (){
var this__21149__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21149__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33917_33927))
;

x33917_33927.componentWillMount = ((function (x33917_33927){
return (function (){
var this__21149__auto__ = this;
var indexer__21154__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21149__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21154__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21154__auto__,this__21149__auto__);
}
});})(x33917_33927))
;

x33917_33927.componentDidMount = ((function (x33917_33927){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__33918 = om.next.props.call(null,this$);
var map__33918__$1 = ((((!((map__33918 == null)))?((((map__33918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33918):map__33918);
var on_click = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__33918__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x33917_33927))
;

x33917_33927.render = ((function (x33917_33927){
return (function (){
var this__21148__auto__ = this;
var this$ = this__21148__auto__;
var _STAR_reconciler_STAR_33920 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33921 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33922 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33923 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33924 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21148__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21148__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21148__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21148__auto__);

om.next._STAR_parent_STAR_ = this__21148__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33924;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33923;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33922;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33921;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33920;
}});})(x33917_33927))
;


pong.aframe_react.Entity.prototype.constructor = pong.aframe_react.Entity;

pong.aframe_react.Entity.prototype.constructor.displayName = "pong.aframe-react/Entity";

pong.aframe_react.Entity.prototype.om$isComponent = true;

var x33925_33928 = pong.aframe_react.Entity;


var x33926_33929 = pong.aframe_react.Entity.prototype;


pong.aframe_react.Entity.cljs$lang$type = true;

pong.aframe_react.Entity.cljs$lang$ctorStr = "pong.aframe-react/Entity";

pong.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__21211__auto__,writer__21212__auto__,opt__21213__auto__){
return cljs.core._write.call(null,writer__21212__auto__,"pong.aframe-react/Entity");
});
pong.aframe_react.entity = om.next.factory.call(null,pong.aframe_react.Entity,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
/**
 * @constructor
 */
pong.aframe_react.Scene = (function pong$aframe_react$Scene(){
var this__21209__auto__ = this;
React.Component.apply(this__21209__auto__,arguments);

if(!((this__21209__auto__.initLocalState == null))){
this__21209__auto__.state = this__21209__auto__.initLocalState();
} else {
this__21209__auto__.state = {};
}

return this__21209__auto__;
});

pong.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x33934_33944 = pong.aframe_react.Scene.prototype;
x33934_33944.componentWillUpdate = ((function (x33934_33944){
return (function (next_props__21150__auto__,next_state__21151__auto__){
var this__21149__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21149__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21149__auto__);
});})(x33934_33944))
;

x33934_33944.shouldComponentUpdate = ((function (x33934_33944){
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
});})(x33934_33944))
;

x33934_33944.componentWillUnmount = ((function (x33934_33944){
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
});})(x33934_33944))
;

x33934_33944.componentDidUpdate = ((function (x33934_33944){
return (function (prev_props__21152__auto__,prev_state__21153__auto__){
var this__21149__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21149__auto__);
});})(x33934_33944))
;

x33934_33944.isMounted = ((function (x33934_33944){
return (function (){
var this__21149__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21149__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33934_33944))
;

x33934_33944.componentWillMount = ((function (x33934_33944){
return (function (){
var this__21149__auto__ = this;
var indexer__21154__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21149__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21154__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21154__auto__,this__21149__auto__);
}
});})(x33934_33944))
;

x33934_33944.componentDidMount = ((function (x33934_33944){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__33935 = om.next.props.call(null,this$);
var map__33935__$1 = ((((!((map__33935 == null)))?((((map__33935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33935):map__33935);
var on_enter_vr = cljs.core.get.call(null,map__33935__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__33935__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__33935__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__33935__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x33934_33944))
;

x33934_33944.render = ((function (x33934_33944){
return (function (){
var this__21148__auto__ = this;
var this$ = this__21148__auto__;
var _STAR_reconciler_STAR_33937 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33938 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33939 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33940 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33941 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21148__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21148__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21148__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21148__auto__);

om.next._STAR_parent_STAR_ = this__21148__auto__;

try{return React.createElement("a-scene",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33941;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33940;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33939;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33938;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33937;
}});})(x33934_33944))
;


pong.aframe_react.Scene.prototype.constructor = pong.aframe_react.Scene;

pong.aframe_react.Scene.prototype.constructor.displayName = "pong.aframe-react/Scene";

pong.aframe_react.Scene.prototype.om$isComponent = true;

var x33942_33945 = pong.aframe_react.Scene;


var x33943_33946 = pong.aframe_react.Scene.prototype;


pong.aframe_react.Scene.cljs$lang$type = true;

pong.aframe_react.Scene.cljs$lang$ctorStr = "pong.aframe-react/Scene";

pong.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__21211__auto__,writer__21212__auto__,opt__21213__auto__){
return cljs.core._write.call(null,writer__21212__auto__,"pong.aframe-react/Scene");
});
pong.aframe_react.scene = om.next.factory.call(null,pong.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map