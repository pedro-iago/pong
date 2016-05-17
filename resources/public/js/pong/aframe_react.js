// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('clojure.string');
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__33842_SHARP_,p2__33841_SHARP_,p3__33843_SHARP_){
var str_key = cljs.core.subs.call(null,[cljs.core.str(p2__33841_SHARP_)].join(''),(1));
if(cljs.core.truth_(cljs.core.namespace.call(null,p2__33841_SHARP_))){
return p1__33842_SHARP_;
} else {
if(cljs.core.fn_QMARK_.call(null,p3__33843_SHARP_)){
return p1__33842_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__33843_SHARP_)){
return cljs.core.assoc.call(null,p1__33842_SHARP_,str_key,clojure.string.join.call(null,"; ",cljs.core.map.call(null,((function (str_key){
return (function (p__33846){
var vec__33847 = p__33846;
var k = cljs.core.nth.call(null,vec__33847,(0),null);
var v = cljs.core.nth.call(null,vec__33847,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
});})(str_key))
,p3__33843_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__33843_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__33843_SHARP_))){
return cljs.core.assoc.call(null,p1__33842_SHARP_,str_key,clojure.string.join.call(null," ",p3__33843_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__33842_SHARP_,str_key,p3__33843_SHARP_);

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
var this__22064__auto__ = this;
React.Component.apply(this__22064__auto__,arguments);

if(!((this__22064__auto__.initLocalState == null))){
this__22064__auto__.state = this__22064__auto__.initLocalState();
} else {
this__22064__auto__.state = {};
}

return this__22064__auto__;
});

pong.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x33852_33862 = pong.aframe_react.Animation.prototype;
x33852_33862.componentWillUpdate = ((function (x33852_33862){
return (function (next_props__22005__auto__,next_state__22006__auto__){
var this__22004__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22004__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22004__auto__);
});})(x33852_33862))
;

x33852_33862.shouldComponentUpdate = ((function (x33852_33862){
return (function (next_props__22005__auto__,next_state__22006__auto__){
var this__22004__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22004__auto__),goog.object.get(next_props__22005__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__22004__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22004__auto__.state,"omcljs$state"),goog.object.get(next_state__22006__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x33852_33862))
;

x33852_33862.componentWillUnmount = ((function (x33852_33862){
return (function (){
var this__22004__auto__ = this;
var r__22010__auto__ = om.next.get_reconciler.call(null,this__22004__auto__);
var cfg__22011__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22010__auto__);
var st__22012__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22011__auto__);
var indexer__22009__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22011__auto__);
if((st__22012__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22012__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22004__auto__);
}

if((indexer__22009__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22009__auto__,this__22004__auto__);
}
});})(x33852_33862))
;

x33852_33862.componentDidUpdate = ((function (x33852_33862){
return (function (prev_props__22007__auto__,prev_state__22008__auto__){
var this__22004__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22004__auto__);
});})(x33852_33862))
;

x33852_33862.isMounted = ((function (x33852_33862){
return (function (){
var this__22004__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22004__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33852_33862))
;

x33852_33862.componentWillMount = ((function (x33852_33862){
return (function (){
var this__22004__auto__ = this;
var indexer__22009__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22004__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22009__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22009__auto__,this__22004__auto__);
}
});})(x33852_33862))
;

x33852_33862.componentDidMount = ((function (x33852_33862){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__33853 = om.next.props.call(null,this$);
var map__33853__$1 = ((((!((map__33853 == null)))?((((map__33853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33853):map__33853);
var on_animation_end = cljs.core.get.call(null,map__33853__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__33853__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x33852_33862))
;

x33852_33862.render = ((function (x33852_33862){
return (function (){
var this__22003__auto__ = this;
var this$ = this__22003__auto__;
var _STAR_reconciler_STAR_33855 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33856 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33857 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33858 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33859 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22003__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22003__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22003__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22003__auto__);

om.next._STAR_parent_STAR_ = this__22003__auto__;

try{return React.createElement("a-animation",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),null);
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33859;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33858;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33857;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33856;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33855;
}});})(x33852_33862))
;


pong.aframe_react.Animation.prototype.constructor = pong.aframe_react.Animation;

pong.aframe_react.Animation.prototype.constructor.displayName = "pong.aframe-react/Animation";

pong.aframe_react.Animation.prototype.om$isComponent = true;

var x33860_33863 = pong.aframe_react.Animation;


var x33861_33864 = pong.aframe_react.Animation.prototype;


pong.aframe_react.Animation.cljs$lang$type = true;

pong.aframe_react.Animation.cljs$lang$ctorStr = "pong.aframe-react/Animation";

pong.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__22066__auto__,writer__22067__auto__,opt__22068__auto__){
return cljs.core._write.call(null,writer__22067__auto__,"pong.aframe-react/Animation");
});
pong.aframe_react.animation = om.next.factory.call(null,pong.aframe_react.Animation);
/**
 * @constructor
 */
pong.aframe_react.Entity = (function pong$aframe_react$Entity(){
var this__22064__auto__ = this;
React.Component.apply(this__22064__auto__,arguments);

if(!((this__22064__auto__.initLocalState == null))){
this__22064__auto__.state = this__22064__auto__.initLocalState();
} else {
this__22064__auto__.state = {};
}

return this__22064__auto__;
});

pong.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x33869_33879 = pong.aframe_react.Entity.prototype;
x33869_33879.componentWillUpdate = ((function (x33869_33879){
return (function (next_props__22005__auto__,next_state__22006__auto__){
var this__22004__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22004__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22004__auto__);
});})(x33869_33879))
;

x33869_33879.shouldComponentUpdate = ((function (x33869_33879){
return (function (next_props__22005__auto__,next_state__22006__auto__){
var this__22004__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22004__auto__),goog.object.get(next_props__22005__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__22004__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22004__auto__.state,"omcljs$state"),goog.object.get(next_state__22006__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x33869_33879))
;

x33869_33879.componentWillUnmount = ((function (x33869_33879){
return (function (){
var this__22004__auto__ = this;
var r__22010__auto__ = om.next.get_reconciler.call(null,this__22004__auto__);
var cfg__22011__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22010__auto__);
var st__22012__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22011__auto__);
var indexer__22009__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22011__auto__);
if((st__22012__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22012__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22004__auto__);
}

if((indexer__22009__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22009__auto__,this__22004__auto__);
}
});})(x33869_33879))
;

x33869_33879.componentDidUpdate = ((function (x33869_33879){
return (function (prev_props__22007__auto__,prev_state__22008__auto__){
var this__22004__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22004__auto__);
});})(x33869_33879))
;

x33869_33879.isMounted = ((function (x33869_33879){
return (function (){
var this__22004__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22004__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33869_33879))
;

x33869_33879.componentWillMount = ((function (x33869_33879){
return (function (){
var this__22004__auto__ = this;
var indexer__22009__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22004__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22009__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22009__auto__,this__22004__auto__);
}
});})(x33869_33879))
;

x33869_33879.componentDidMount = ((function (x33869_33879){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__33870 = om.next.props.call(null,this$);
var map__33870__$1 = ((((!((map__33870 == null)))?((((map__33870.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33870.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33870):map__33870);
var on_click = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__33870__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x33869_33879))
;

x33869_33879.render = ((function (x33869_33879){
return (function (){
var this__22003__auto__ = this;
var this$ = this__22003__auto__;
var _STAR_reconciler_STAR_33872 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33873 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33874 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33875 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33876 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22003__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22003__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22003__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22003__auto__);

om.next._STAR_parent_STAR_ = this__22003__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33876;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33875;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33874;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33873;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33872;
}});})(x33869_33879))
;


pong.aframe_react.Entity.prototype.constructor = pong.aframe_react.Entity;

pong.aframe_react.Entity.prototype.constructor.displayName = "pong.aframe-react/Entity";

pong.aframe_react.Entity.prototype.om$isComponent = true;

var x33877_33880 = pong.aframe_react.Entity;


var x33878_33881 = pong.aframe_react.Entity.prototype;


pong.aframe_react.Entity.cljs$lang$type = true;

pong.aframe_react.Entity.cljs$lang$ctorStr = "pong.aframe-react/Entity";

pong.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__22066__auto__,writer__22067__auto__,opt__22068__auto__){
return cljs.core._write.call(null,writer__22067__auto__,"pong.aframe-react/Entity");
});
pong.aframe_react.entity = om.next.factory.call(null,pong.aframe_react.Entity);
/**
 * @constructor
 */
pong.aframe_react.Scene = (function pong$aframe_react$Scene(){
var this__22064__auto__ = this;
React.Component.apply(this__22064__auto__,arguments);

if(!((this__22064__auto__.initLocalState == null))){
this__22064__auto__.state = this__22064__auto__.initLocalState();
} else {
this__22064__auto__.state = {};
}

return this__22064__auto__;
});

pong.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x33886_33896 = pong.aframe_react.Scene.prototype;
x33886_33896.componentWillUpdate = ((function (x33886_33896){
return (function (next_props__22005__auto__,next_state__22006__auto__){
var this__22004__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__22004__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__22004__auto__);
});})(x33886_33896))
;

x33886_33896.shouldComponentUpdate = ((function (x33886_33896){
return (function (next_props__22005__auto__,next_state__22006__auto__){
var this__22004__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__22004__auto__),goog.object.get(next_props__22005__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__22004__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__22004__auto__.state,"omcljs$state"),goog.object.get(next_state__22006__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x33886_33896))
;

x33886_33896.componentWillUnmount = ((function (x33886_33896){
return (function (){
var this__22004__auto__ = this;
var r__22010__auto__ = om.next.get_reconciler.call(null,this__22004__auto__);
var cfg__22011__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__22010__auto__);
var st__22012__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__22011__auto__);
var indexer__22009__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__22011__auto__);
if((st__22012__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__22012__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__22004__auto__);
}

if((indexer__22009__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__22009__auto__,this__22004__auto__);
}
});})(x33886_33896))
;

x33886_33896.componentDidUpdate = ((function (x33886_33896){
return (function (prev_props__22007__auto__,prev_state__22008__auto__){
var this__22004__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__22004__auto__);
});})(x33886_33896))
;

x33886_33896.isMounted = ((function (x33886_33896){
return (function (){
var this__22004__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__22004__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x33886_33896))
;

x33886_33896.componentWillMount = ((function (x33886_33896){
return (function (){
var this__22004__auto__ = this;
var indexer__22009__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__22004__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__22009__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__22009__auto__,this__22004__auto__);
}
});})(x33886_33896))
;

x33886_33896.componentDidMount = ((function (x33886_33896){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__33887 = om.next.props.call(null,this$);
var map__33887__$1 = ((((!((map__33887 == null)))?((((map__33887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33887):map__33887);
var on_enter_vr = cljs.core.get.call(null,map__33887__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__33887__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__33887__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__33887__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x33886_33896))
;

x33886_33896.render = ((function (x33886_33896){
return (function (){
var this__22003__auto__ = this;
var this$ = this__22003__auto__;
var _STAR_reconciler_STAR_33889 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_33890 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_33891 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_33892 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_33893 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__22003__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__22003__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__22003__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__22003__auto__);

om.next._STAR_parent_STAR_ = this__22003__auto__;

try{return React.createElement("a-scene",pong.aframe_react.serialize.call(null,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_33893;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_33892;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_33891;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_33890;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_33889;
}});})(x33886_33896))
;


pong.aframe_react.Scene.prototype.constructor = pong.aframe_react.Scene;

pong.aframe_react.Scene.prototype.constructor.displayName = "pong.aframe-react/Scene";

pong.aframe_react.Scene.prototype.om$isComponent = true;

var x33894_33897 = pong.aframe_react.Scene;


var x33895_33898 = pong.aframe_react.Scene.prototype;


pong.aframe_react.Scene.cljs$lang$type = true;

pong.aframe_react.Scene.cljs$lang$ctorStr = "pong.aframe-react/Scene";

pong.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__22066__auto__,writer__22067__auto__,opt__22068__auto__){
return cljs.core._write.call(null,writer__22067__auto__,"pong.aframe-react/Scene");
});
pong.aframe_react.scene = om.next.factory.call(null,pong.aframe_react.Scene);
pong.aframe_react.to_a_vr = (function pong$aframe_react$to_a_vr(ent){
var childs = cljs.core.map.call(null,pong$aframe_react$to_a_vr,cljs.core.vals.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ent)));
var props = cljs.core.dissoc.call(null,ent,new cljs.core.Keyword(null,"children","children",-940561982));
var G__33900 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props);
switch (G__33900) {
case "scene":
return cljs.core.apply.call(null,pong.aframe_react.scene,props,childs);

break;
case "animation":
return cljs.core.apply.call(null,pong.aframe_react.animation,props,childs);

break;
default:
return cljs.core.apply.call(null,pong.aframe_react.entity,props,childs);

}
});

//# sourceMappingURL=aframe_react.js.map