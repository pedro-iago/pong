// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
client.aframe_react.serialize = (function client$aframe_react$serialize(props){
return cljs.core.reduce_kv.call(null,(function (p1__22102_SHARP_,p2__22103_SHARP_,p3__22101_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__22101_SHARP_)){
return p1__22102_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__22101_SHARP_)){
return cljs.core.assoc.call(null,p1__22102_SHARP_,p2__22103_SHARP_,clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__22106){
var vec__22107 = p__22106;
var k = cljs.core.nth.call(null,vec__22107,(0),null);
var v = cljs.core.nth.call(null,vec__22107,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__22101_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__22101_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__22101_SHARP_))){
return cljs.core.assoc.call(null,p1__22102_SHARP_,p2__22103_SHARP_,clojure.string.join.call(null," ",p3__22101_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__22102_SHARP_,p2__22103_SHARP_,p3__22101_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props);
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

var x22112_22123 = client.aframe_react.Animation.prototype;
x22112_22123.componentWillUpdate = ((function (x22112_22123){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x22112_22123))
;

x22112_22123.shouldComponentUpdate = ((function (x22112_22123){
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
});})(x22112_22123))
;

x22112_22123.componentWillUnmount = ((function (x22112_22123){
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
});})(x22112_22123))
;

x22112_22123.componentDidUpdate = ((function (x22112_22123){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x22112_22123))
;

x22112_22123.isMounted = ((function (x22112_22123){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22112_22123))
;

x22112_22123.componentWillMount = ((function (x22112_22123){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x22112_22123))
;

x22112_22123.componentDidMount = ((function (x22112_22123){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__22113 = om.next.props.call(null,this$);
var map__22113__$1 = ((((!((map__22113 == null)))?((((map__22113.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22113.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22113):map__22113);
var on_animation_end = cljs.core.get.call(null,map__22113__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329));
var on_animation_start = cljs.core.get.call(null,map__22113__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410));
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x22112_22123))
;

x22112_22123.render = ((function (x22112_22123){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22115 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22116 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22117 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22118 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22119 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var attrs22120 = client.aframe_react.serialize.call(null,om.next.props.call(null,this$));
return cljs.core.apply.call(null,React.createElement,"a-animation",((cljs.core.map_QMARK_.call(null,attrs22120))?sablono.interpreter.attributes.call(null,attrs22120):null),((cljs.core.map_QMARK_.call(null,attrs22120))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22120),null], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22119;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22118;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22117;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22116;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22115;
}});})(x22112_22123))
;


client.aframe_react.Animation.prototype.constructor = client.aframe_react.Animation;

client.aframe_react.Animation.prototype.om$isComponent = true;

var x22121_22124 = client.aframe_react.Animation;


var x22122_22125 = client.aframe_react.Animation.prototype;


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

var x22130_22142 = client.aframe_react.Entity.prototype;
x22130_22142.componentWillUpdate = ((function (x22130_22142){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x22130_22142))
;

x22130_22142.shouldComponentUpdate = ((function (x22130_22142){
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
});})(x22130_22142))
;

x22130_22142.componentWillUnmount = ((function (x22130_22142){
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
});})(x22130_22142))
;

x22130_22142.componentDidUpdate = ((function (x22130_22142){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x22130_22142))
;

x22130_22142.isMounted = ((function (x22130_22142){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22130_22142))
;

x22130_22142.componentWillMount = ((function (x22130_22142){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x22130_22142))
;

x22130_22142.componentDidMount = ((function (x22130_22142){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__22131 = om.next.props.call(null,this$);
var map__22131__$1 = ((((!((map__22131 == null)))?((((map__22131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22131):map__22131);
var on_click = cljs.core.get.call(null,map__22131__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var on_loaded = cljs.core.get.call(null,map__22131__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_mouse_enter = cljs.core.get.call(null,map__22131__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661));
var on_mouse_leave = cljs.core.get.call(null,map__22131__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528));
if(cljs.core._EQ_.call(null,"cam",new cljs.core.Keyword(null,"react-key","react-key",1337881348).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)))){
console.log(cljs.core.clj__GT_js.call(null,client.aframe_react.serialize.call(null,om.next.props.call(null,this$))),((function (){var attrs22133 = client.aframe_react.serialize.call(null,om.next.props.call(null,this$));
return cljs.core.apply.call(null,React.createElement,"a-entity",((cljs.core.map_QMARK_.call(null,attrs22133))?sablono.interpreter.attributes.call(null,attrs22133):null),((cljs.core.map_QMARK_.call(null,attrs22133))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22133)], null)));
})()["props"]));
} else {
}

el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x22130_22142))
;

x22130_22142.render = ((function (x22130_22142){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22134 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22135 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22136 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22137 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22138 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var attrs22139 = client.aframe_react.serialize.call(null,om.next.props.call(null,this$));
return cljs.core.apply.call(null,React.createElement,"a-entity",((cljs.core.map_QMARK_.call(null,attrs22139))?sablono.interpreter.attributes.call(null,attrs22139):null),((cljs.core.map_QMARK_.call(null,attrs22139))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.next.children.call(null,this$))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22139),sablono.interpreter.interpret.call(null,om.next.children.call(null,this$))], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22138;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22137;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22136;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22135;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22134;
}});})(x22130_22142))
;


client.aframe_react.Entity.prototype.constructor = client.aframe_react.Entity;

client.aframe_react.Entity.prototype.om$isComponent = true;

var x22140_22143 = client.aframe_react.Entity;


var x22141_22144 = client.aframe_react.Entity.prototype;


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

var x22149_22160 = client.aframe_react.Scene.prototype;
x22149_22160.componentWillUpdate = ((function (x22149_22160){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x22149_22160))
;

x22149_22160.shouldComponentUpdate = ((function (x22149_22160){
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
});})(x22149_22160))
;

x22149_22160.componentWillUnmount = ((function (x22149_22160){
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
});})(x22149_22160))
;

x22149_22160.componentDidUpdate = ((function (x22149_22160){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x22149_22160))
;

x22149_22160.isMounted = ((function (x22149_22160){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22149_22160))
;

x22149_22160.componentWillMount = ((function (x22149_22160){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x22149_22160))
;

x22149_22160.componentDidMount = ((function (x22149_22160){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__22150 = om.next.props.call(null,this$);
var map__22150__$1 = ((((!((map__22150 == null)))?((((map__22150.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22150.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22150):map__22150);
var on_enter_vr = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787));
var on_exit_vr = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573));
var on_loaded = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724));
var on_tick = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x22149_22160))
;

x22149_22160.render = ((function (x22149_22160){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22152 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22153 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22154 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22155 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22156 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var attrs22157 = client.aframe_react.serialize.call(null,om.next.props.call(null,this$));
return cljs.core.apply.call(null,React.createElement,"a-scene",((cljs.core.map_QMARK_.call(null,attrs22157))?sablono.interpreter.attributes.call(null,attrs22157):null),((cljs.core.map_QMARK_.call(null,attrs22157))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,om.next.children.call(null,this$))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs22157),sablono.interpreter.interpret.call(null,om.next.children.call(null,this$))], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22156;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22155;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22154;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22153;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22152;
}});})(x22149_22160))
;


client.aframe_react.Scene.prototype.constructor = client.aframe_react.Scene;

client.aframe_react.Scene.prototype.om$isComponent = true;

var x22158_22161 = client.aframe_react.Scene;


var x22159_22162 = client.aframe_react.Scene.prototype;


client.aframe_react.Scene.cljs$lang$type = true;

client.aframe_react.Scene.cljs$lang$ctorStr = "client.aframe-react/Scene";

client.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__19243__auto__,writer__19244__auto__,opt__19245__auto__){
return cljs.core._write.call(null,writer__19244__auto__,"client.aframe-react/Scene");
});
client.aframe_react.scene = om.next.factory.call(null,client.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map