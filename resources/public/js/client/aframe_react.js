// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
client.aframe_react.serialize = (function client$aframe_react$serialize(props){
return cljs.core.reduce_kv.call(null,(function (p1__25238_SHARP_,p2__25239_SHARP_,p3__25237_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__25237_SHARP_)){
return cljs.core.assoc.call(null,p1__25238_SHARP_,p2__25239_SHARP_,"function");
} else {
if(cljs.core.map_QMARK_.call(null,p3__25237_SHARP_)){
return cljs.core.assoc.call(null,p1__25238_SHARP_,p2__25239_SHARP_,clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__25242){
var vec__25243 = p__25242;
var k = cljs.core.nth.call(null,vec__25243,(0),null);
var v = cljs.core.nth.call(null,vec__25243,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__25237_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__25237_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__25237_SHARP_))){
return cljs.core.assoc.call(null,p1__25238_SHARP_,p2__25239_SHARP_,clojure.string.join.call(null," ",p3__25237_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__25238_SHARP_,p2__25239_SHARP_,p3__25237_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
/**
 * @constructor
 */
client.aframe_react.Animation = (function client$aframe_react$Animation(){
var this__24626__auto__ = this;
React.Component.apply(this__24626__auto__,arguments);

if(!((this__24626__auto__.initLocalState == null))){
this__24626__auto__.state = this__24626__auto__.initLocalState();
} else {
this__24626__auto__.state = {};
}

return this__24626__auto__;
});

client.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x25248_25259 = client.aframe_react.Animation.prototype;
x25248_25259.componentWillUpdate = ((function (x25248_25259){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__24566__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24566__auto__);
});})(x25248_25259))
;

x25248_25259.shouldComponentUpdate = ((function (x25248_25259){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24566__auto__),goog.object.get(next_props__24567__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__24566__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24566__auto__.state,"omcljs$state"),goog.object.get(next_state__24568__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x25248_25259))
;

x25248_25259.componentWillUnmount = ((function (x25248_25259){
return (function (){
var this__24566__auto__ = this;
var r__24572__auto__ = om.next.get_reconciler.call(null,this__24566__auto__);
var cfg__24573__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24572__auto__);
var st__24574__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
var indexer__24571__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
if((st__24574__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__24574__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24566__auto__);
}

if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x25248_25259))
;

x25248_25259.componentDidUpdate = ((function (x25248_25259){
return (function (prev_props__24569__auto__,prev_state__24570__auto__){
var this__24566__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24566__auto__);
});})(x25248_25259))
;

x25248_25259.isMounted = ((function (x25248_25259){
return (function (){
var this__24566__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24566__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25248_25259))
;

x25248_25259.componentWillMount = ((function (x25248_25259){
return (function (){
var this__24566__auto__ = this;
var indexer__24571__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24566__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x25248_25259))
;

x25248_25259.componentDidMount = ((function (x25248_25259){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__25249 = om.next.props.call(null,this$);
var map__25249__$1 = ((((!((map__25249 == null)))?((((map__25249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25249):map__25249);
var on_animation_end = cljs.core.get.call(null,map__25249__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329),((function (el,map__25249,map__25249__$1,this$,x25248_25259){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25249,map__25249__$1,this$,x25248_25259))
);
var on_animation_start = cljs.core.get.call(null,map__25249__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410),((function (el,map__25249,map__25249__$1,on_animation_end,this$,x25248_25259){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25249,map__25249__$1,on_animation_end,this$,x25248_25259))
);
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x25248_25259))
;

x25248_25259.render = ((function (x25248_25259){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25251 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25252 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25253 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25254 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25255 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var attrs25256 = client.aframe_react.serialize.call(null,om.next.props.call(null,this$));
return cljs.core.apply.call(null,React.createElement,"a-animation",((cljs.core.map_QMARK_.call(null,attrs25256))?sablono.interpreter.attributes.call(null,attrs25256):null),((cljs.core.map_QMARK_.call(null,attrs25256))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25256),null], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25255;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25254;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25253;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25252;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25251;
}});})(x25248_25259))
;


client.aframe_react.Animation.prototype.constructor = client.aframe_react.Animation;

client.aframe_react.Animation.prototype.om$isComponent = true;

var x25257_25260 = client.aframe_react.Animation;


var x25258_25261 = client.aframe_react.Animation.prototype;


client.aframe_react.Animation.cljs$lang$type = true;

client.aframe_react.Animation.cljs$lang$ctorStr = "client.aframe-react/Animation";

client.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__24628__auto__,writer__24629__auto__,opt__24630__auto__){
return cljs.core._write.call(null,writer__24629__auto__,"client.aframe-react/Animation");
});
client.aframe_react.animation = om.next.factory.call(null,client.aframe_react.Animation);
/**
 * @constructor
 */
client.aframe_react.Entity = (function client$aframe_react$Entity(){
var this__24626__auto__ = this;
React.Component.apply(this__24626__auto__,arguments);

if(!((this__24626__auto__.initLocalState == null))){
this__24626__auto__.state = this__24626__auto__.initLocalState();
} else {
this__24626__auto__.state = {};
}

return this__24626__auto__;
});

client.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x25266_25276 = client.aframe_react.Entity.prototype;
x25266_25276.componentWillUpdate = ((function (x25266_25276){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__24566__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24566__auto__);
});})(x25266_25276))
;

x25266_25276.shouldComponentUpdate = ((function (x25266_25276){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24566__auto__),goog.object.get(next_props__24567__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__24566__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24566__auto__.state,"omcljs$state"),goog.object.get(next_state__24568__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x25266_25276))
;

x25266_25276.componentWillUnmount = ((function (x25266_25276){
return (function (){
var this__24566__auto__ = this;
var r__24572__auto__ = om.next.get_reconciler.call(null,this__24566__auto__);
var cfg__24573__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24572__auto__);
var st__24574__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
var indexer__24571__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
if((st__24574__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__24574__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24566__auto__);
}

if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x25266_25276))
;

x25266_25276.componentDidUpdate = ((function (x25266_25276){
return (function (prev_props__24569__auto__,prev_state__24570__auto__){
var this__24566__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24566__auto__);
});})(x25266_25276))
;

x25266_25276.isMounted = ((function (x25266_25276){
return (function (){
var this__24566__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24566__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25266_25276))
;

x25266_25276.componentWillMount = ((function (x25266_25276){
return (function (){
var this__24566__auto__ = this;
var indexer__24571__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24566__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x25266_25276))
;

x25266_25276.componentDidMount = ((function (x25266_25276){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__25267 = om.next.props.call(null,this$);
var map__25267__$1 = ((((!((map__25267 == null)))?((((map__25267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25267):map__25267);
var on_click = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (el,map__25267,map__25267__$1,this$,x25266_25276){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25267,map__25267__$1,this$,x25266_25276))
);
var on_loaded = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724),((function (el,map__25267,map__25267__$1,on_click,this$,x25266_25276){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25267,map__25267__$1,on_click,this$,x25266_25276))
);
var on_mouse_enter = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (el,map__25267,map__25267__$1,on_click,on_loaded,this$,x25266_25276){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25267,map__25267__$1,on_click,on_loaded,this$,x25266_25276))
);
var on_mouse_leave = cljs.core.get.call(null,map__25267__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (el,map__25267,map__25267__$1,on_click,on_loaded,on_mouse_enter,this$,x25266_25276){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25267,map__25267__$1,on_click,on_loaded,on_mouse_enter,this$,x25266_25276))
);
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x25266_25276))
;

x25266_25276.render = ((function (x25266_25276){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25269 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25270 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25271 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25272 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25273 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a-entity","a-entity",2142934912),client.aframe_react.serialize.call(null,om.next.props.call(null,this$))], null),om.next.children.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25273;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25272;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25271;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25270;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25269;
}});})(x25266_25276))
;


client.aframe_react.Entity.prototype.constructor = client.aframe_react.Entity;

client.aframe_react.Entity.prototype.om$isComponent = true;

var x25274_25277 = client.aframe_react.Entity;


var x25275_25278 = client.aframe_react.Entity.prototype;


client.aframe_react.Entity.cljs$lang$type = true;

client.aframe_react.Entity.cljs$lang$ctorStr = "client.aframe-react/Entity";

client.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__24628__auto__,writer__24629__auto__,opt__24630__auto__){
return cljs.core._write.call(null,writer__24629__auto__,"client.aframe-react/Entity");
});
client.aframe_react.entity = om.next.factory.call(null,client.aframe_react.Entity);
/**
 * @constructor
 */
client.aframe_react.Scene = (function client$aframe_react$Scene(){
var this__24626__auto__ = this;
React.Component.apply(this__24626__auto__,arguments);

if(!((this__24626__auto__.initLocalState == null))){
this__24626__auto__.state = this__24626__auto__.initLocalState();
} else {
this__24626__auto__.state = {};
}

return this__24626__auto__;
});

client.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x25283_25293 = client.aframe_react.Scene.prototype;
x25283_25293.componentWillUpdate = ((function (x25283_25293){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__24566__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24566__auto__);
});})(x25283_25293))
;

x25283_25293.shouldComponentUpdate = ((function (x25283_25293){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__24566__auto__),goog.object.get(next_props__24567__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__24566__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__24566__auto__.state,"omcljs$state"),goog.object.get(next_state__24568__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x25283_25293))
;

x25283_25293.componentWillUnmount = ((function (x25283_25293){
return (function (){
var this__24566__auto__ = this;
var r__24572__auto__ = om.next.get_reconciler.call(null,this__24566__auto__);
var cfg__24573__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__24572__auto__);
var st__24574__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
var indexer__24571__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__24573__auto__);
if((st__24574__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__24574__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__24566__auto__);
}

if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x25283_25293))
;

x25283_25293.componentDidUpdate = ((function (x25283_25293){
return (function (prev_props__24569__auto__,prev_state__24570__auto__){
var this__24566__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24566__auto__);
});})(x25283_25293))
;

x25283_25293.isMounted = ((function (x25283_25293){
return (function (){
var this__24566__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24566__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25283_25293))
;

x25283_25293.componentWillMount = ((function (x25283_25293){
return (function (){
var this__24566__auto__ = this;
var indexer__24571__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24566__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x25283_25293))
;

x25283_25293.componentDidMount = ((function (x25283_25293){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__25284 = om.next.props.call(null,this$);
var map__25284__$1 = ((((!((map__25284 == null)))?((((map__25284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25284):map__25284);
var on_enter_vr = cljs.core.get.call(null,map__25284__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787),((function (el,map__25284,map__25284__$1,this$,x25283_25293){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25284,map__25284__$1,this$,x25283_25293))
);
var on_exit_vr = cljs.core.get.call(null,map__25284__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573),((function (el,map__25284,map__25284__$1,on_enter_vr,this$,x25283_25293){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25284,map__25284__$1,on_enter_vr,this$,x25283_25293))
);
var on_loaded = cljs.core.get.call(null,map__25284__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724),((function (el,map__25284,map__25284__$1,on_enter_vr,on_exit_vr,this$,x25283_25293){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__25284,map__25284__$1,on_enter_vr,on_exit_vr,this$,x25283_25293))
);
var on_tick = cljs.core.get.call(null,map__25284__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x25283_25293))
;

x25283_25293.render = ((function (x25283_25293){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_25286 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25287 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25288 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25289 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25290 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a-scene","a-scene",-2040164474),client.aframe_react.serialize.call(null,om.next.props.call(null,this$))], null),om.next.children.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25290;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25289;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25288;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25287;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25286;
}});})(x25283_25293))
;


client.aframe_react.Scene.prototype.constructor = client.aframe_react.Scene;

client.aframe_react.Scene.prototype.om$isComponent = true;

var x25291_25294 = client.aframe_react.Scene;


var x25292_25295 = client.aframe_react.Scene.prototype;


client.aframe_react.Scene.cljs$lang$type = true;

client.aframe_react.Scene.cljs$lang$ctorStr = "client.aframe-react/Scene";

client.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__24628__auto__,writer__24629__auto__,opt__24630__auto__){
return cljs.core._write.call(null,writer__24629__auto__,"client.aframe-react/Scene");
});
client.aframe_react.scene = om.next.factory.call(null,client.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map