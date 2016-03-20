// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.aframe_react');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
client.aframe_react.serialize = (function client$aframe_react$serialize(props){
return cljs.core.reduce_kv.call(null,(function (p1__21351_SHARP_,p2__21352_SHARP_,p3__21350_SHARP_){
if(cljs.core.fn_QMARK_.call(null,p3__21350_SHARP_)){
return p1__21351_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__21350_SHARP_)){
return cljs.core.assoc.call(null,p1__21351_SHARP_,p2__21352_SHARP_,clojure.string.join.call(null,"; ",cljs.core.map.call(null,(function (p__21355){
var vec__21356 = p__21355;
var k = cljs.core.nth.call(null,vec__21356,(0),null);
var v = cljs.core.nth.call(null,vec__21356,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
}),p3__21350_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__21350_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__21350_SHARP_))){
return cljs.core.assoc.call(null,p1__21351_SHARP_,p2__21352_SHARP_,clojure.string.join.call(null," ",p3__21350_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__21351_SHARP_,p2__21352_SHARP_,p3__21350_SHARP_);

}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props);
});
/**
 * @constructor
 */
client.aframe_react.Animation = (function client$aframe_react$Animation(){
var this__19323__auto__ = this;
React.Component.apply(this__19323__auto__,arguments);

if(!((this__19323__auto__.initLocalState == null))){
this__19323__auto__.state = this__19323__auto__.initLocalState();
} else {
this__19323__auto__.state = {};
}

return this__19323__auto__;
});

client.aframe_react.Animation.prototype = goog.object.clone(React.Component.prototype);

var x21361_21372 = client.aframe_react.Animation.prototype;
x21361_21372.componentWillUpdate = ((function (x21361_21372){
return (function (next_props__19264__auto__,next_state__19265__auto__){
var this__19263__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19263__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19263__auto__);
});})(x21361_21372))
;

x21361_21372.shouldComponentUpdate = ((function (x21361_21372){
return (function (next_props__19264__auto__,next_state__19265__auto__){
var this__19263__auto__ = this;
var or__16781__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19263__auto__),goog.object.get(next_props__19264__auto__,"omcljs$value"));
if(or__16781__auto__){
return or__16781__auto__;
} else {
var and__16769__auto__ = this__19263__auto__.state;
if(cljs.core.truth_(and__16769__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19263__auto__.state,"omcljs$state"),goog.object.get(next_state__19265__auto__,"omcljs$state"));
} else {
return and__16769__auto__;
}
}
});})(x21361_21372))
;

x21361_21372.componentWillUnmount = ((function (x21361_21372){
return (function (){
var this__19263__auto__ = this;
var r__19269__auto__ = om.next.get_reconciler.call(null,this__19263__auto__);
var cfg__19270__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19269__auto__);
var st__19271__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19270__auto__);
var indexer__19268__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19270__auto__);
if((st__19271__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19271__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19263__auto__);
}

if((indexer__19268__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19268__auto__,this__19263__auto__);
}
});})(x21361_21372))
;

x21361_21372.componentDidUpdate = ((function (x21361_21372){
return (function (prev_props__19266__auto__,prev_state__19267__auto__){
var this__19263__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19263__auto__);
});})(x21361_21372))
;

x21361_21372.isMounted = ((function (x21361_21372){
return (function (){
var this__19263__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19263__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21361_21372))
;

x21361_21372.componentWillMount = ((function (x21361_21372){
return (function (){
var this__19263__auto__ = this;
var indexer__19268__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19263__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19268__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19268__auto__,this__19263__auto__);
}
});})(x21361_21372))
;

x21361_21372.componentDidMount = ((function (x21361_21372){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__21362 = om.next.props.call(null,this$);
var map__21362__$1 = ((((!((map__21362 == null)))?((((map__21362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21362):map__21362);
var on_animation_end = cljs.core.get.call(null,map__21362__$1,new cljs.core.Keyword(null,"on-animation-end","on-animation-end",-1927132329),((function (el,map__21362,map__21362__$1,this$,x21361_21372){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21362,map__21362__$1,this$,x21361_21372))
);
var on_animation_start = cljs.core.get.call(null,map__21362__$1,new cljs.core.Keyword(null,"on-animation-start","on-animation-start",923687410),((function (el,map__21362,map__21362__$1,on_animation_end,this$,x21361_21372){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21362,map__21362__$1,on_animation_end,this$,x21361_21372))
);
el.addEventListener("animationend",on_animation_end);

return el.addEventListener("animationstart",on_animation_start);
});})(x21361_21372))
;

x21361_21372.render = ((function (x21361_21372){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21364 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21365 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21366 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21367 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21368 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var attrs21369 = client.aframe_react.serialize.call(null,om.next.props.call(null,this$));
return cljs.core.apply.call(null,React.createElement,"a-animation",((cljs.core.map_QMARK_.call(null,attrs21369))?sablono.interpreter.attributes.call(null,attrs21369):null),((cljs.core.map_QMARK_.call(null,attrs21369))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21369),null], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21368;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21367;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21366;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21365;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21364;
}});})(x21361_21372))
;


client.aframe_react.Animation.prototype.constructor = client.aframe_react.Animation;

client.aframe_react.Animation.prototype.om$isComponent = true;

var x21370_21373 = client.aframe_react.Animation;


var x21371_21374 = client.aframe_react.Animation.prototype;


client.aframe_react.Animation.cljs$lang$type = true;

client.aframe_react.Animation.cljs$lang$ctorStr = "client.aframe-react/Animation";

client.aframe_react.Animation.cljs$lang$ctorPrWriter = (function (this__19325__auto__,writer__19326__auto__,opt__19327__auto__){
return cljs.core._write.call(null,writer__19326__auto__,"client.aframe-react/Animation");
});
client.aframe_react.animation = om.next.factory.call(null,client.aframe_react.Animation);
/**
 * @constructor
 */
client.aframe_react.Entity = (function client$aframe_react$Entity(){
var this__19323__auto__ = this;
React.Component.apply(this__19323__auto__,arguments);

if(!((this__19323__auto__.initLocalState == null))){
this__19323__auto__.state = this__19323__auto__.initLocalState();
} else {
this__19323__auto__.state = {};
}

return this__19323__auto__;
});

client.aframe_react.Entity.prototype = goog.object.clone(React.Component.prototype);

var x21379_21389 = client.aframe_react.Entity.prototype;
x21379_21389.componentWillUpdate = ((function (x21379_21389){
return (function (next_props__19264__auto__,next_state__19265__auto__){
var this__19263__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19263__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19263__auto__);
});})(x21379_21389))
;

x21379_21389.shouldComponentUpdate = ((function (x21379_21389){
return (function (next_props__19264__auto__,next_state__19265__auto__){
var this__19263__auto__ = this;
var or__16781__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19263__auto__),goog.object.get(next_props__19264__auto__,"omcljs$value"));
if(or__16781__auto__){
return or__16781__auto__;
} else {
var and__16769__auto__ = this__19263__auto__.state;
if(cljs.core.truth_(and__16769__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19263__auto__.state,"omcljs$state"),goog.object.get(next_state__19265__auto__,"omcljs$state"));
} else {
return and__16769__auto__;
}
}
});})(x21379_21389))
;

x21379_21389.componentWillUnmount = ((function (x21379_21389){
return (function (){
var this__19263__auto__ = this;
var r__19269__auto__ = om.next.get_reconciler.call(null,this__19263__auto__);
var cfg__19270__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19269__auto__);
var st__19271__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19270__auto__);
var indexer__19268__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19270__auto__);
if((st__19271__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19271__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19263__auto__);
}

if((indexer__19268__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19268__auto__,this__19263__auto__);
}
});})(x21379_21389))
;

x21379_21389.componentDidUpdate = ((function (x21379_21389){
return (function (prev_props__19266__auto__,prev_state__19267__auto__){
var this__19263__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19263__auto__);
});})(x21379_21389))
;

x21379_21389.isMounted = ((function (x21379_21389){
return (function (){
var this__19263__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19263__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21379_21389))
;

x21379_21389.componentWillMount = ((function (x21379_21389){
return (function (){
var this__19263__auto__ = this;
var indexer__19268__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19263__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19268__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19268__auto__,this__19263__auto__);
}
});})(x21379_21389))
;

x21379_21389.componentDidMount = ((function (x21379_21389){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__21380 = om.next.props.call(null,this$);
var map__21380__$1 = ((((!((map__21380 == null)))?((((map__21380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21380):map__21380);
var on_click = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (el,map__21380,map__21380__$1,this$,x21379_21389){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21380,map__21380__$1,this$,x21379_21389))
);
var on_loaded = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724),((function (el,map__21380,map__21380__$1,on_click,this$,x21379_21389){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21380,map__21380__$1,on_click,this$,x21379_21389))
);
var on_mouse_enter = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (el,map__21380,map__21380__$1,on_click,on_loaded,this$,x21379_21389){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21380,map__21380__$1,on_click,on_loaded,this$,x21379_21389))
);
var on_mouse_leave = cljs.core.get.call(null,map__21380__$1,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (el,map__21380,map__21380__$1,on_click,on_loaded,on_mouse_enter,this$,x21379_21389){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21380,map__21380__$1,on_click,on_loaded,on_mouse_enter,this$,x21379_21389))
);
el.addEventListener("click",on_click);

el.addEventListener("loaded",on_loaded);

el.addEventListener("mouseenter",on_mouse_enter);

return el.addEventListener("mouseleave",on_mouse_leave);
});})(x21379_21389))
;

x21379_21389.render = ((function (x21379_21389){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21382 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21383 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21384 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21385 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21386 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a-entity","a-entity",2142934912),client.aframe_react.serialize.call(null,om.next.props.call(null,this$))], null),om.next.children.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21386;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21385;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21384;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21383;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21382;
}});})(x21379_21389))
;


client.aframe_react.Entity.prototype.constructor = client.aframe_react.Entity;

client.aframe_react.Entity.prototype.om$isComponent = true;

var x21387_21390 = client.aframe_react.Entity;


var x21388_21391 = client.aframe_react.Entity.prototype;


client.aframe_react.Entity.cljs$lang$type = true;

client.aframe_react.Entity.cljs$lang$ctorStr = "client.aframe-react/Entity";

client.aframe_react.Entity.cljs$lang$ctorPrWriter = (function (this__19325__auto__,writer__19326__auto__,opt__19327__auto__){
return cljs.core._write.call(null,writer__19326__auto__,"client.aframe-react/Entity");
});
client.aframe_react.entity = om.next.factory.call(null,client.aframe_react.Entity);
/**
 * @constructor
 */
client.aframe_react.Scene = (function client$aframe_react$Scene(){
var this__19323__auto__ = this;
React.Component.apply(this__19323__auto__,arguments);

if(!((this__19323__auto__.initLocalState == null))){
this__19323__auto__.state = this__19323__auto__.initLocalState();
} else {
this__19323__auto__.state = {};
}

return this__19323__auto__;
});

client.aframe_react.Scene.prototype = goog.object.clone(React.Component.prototype);

var x21396_21406 = client.aframe_react.Scene.prototype;
x21396_21406.componentWillUpdate = ((function (x21396_21406){
return (function (next_props__19264__auto__,next_state__19265__auto__){
var this__19263__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19263__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19263__auto__);
});})(x21396_21406))
;

x21396_21406.shouldComponentUpdate = ((function (x21396_21406){
return (function (next_props__19264__auto__,next_state__19265__auto__){
var this__19263__auto__ = this;
var or__16781__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19263__auto__),goog.object.get(next_props__19264__auto__,"omcljs$value"));
if(or__16781__auto__){
return or__16781__auto__;
} else {
var and__16769__auto__ = this__19263__auto__.state;
if(cljs.core.truth_(and__16769__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19263__auto__.state,"omcljs$state"),goog.object.get(next_state__19265__auto__,"omcljs$state"));
} else {
return and__16769__auto__;
}
}
});})(x21396_21406))
;

x21396_21406.componentWillUnmount = ((function (x21396_21406){
return (function (){
var this__19263__auto__ = this;
var r__19269__auto__ = om.next.get_reconciler.call(null,this__19263__auto__);
var cfg__19270__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19269__auto__);
var st__19271__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19270__auto__);
var indexer__19268__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19270__auto__);
if((st__19271__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19271__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19263__auto__);
}

if((indexer__19268__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19268__auto__,this__19263__auto__);
}
});})(x21396_21406))
;

x21396_21406.componentDidUpdate = ((function (x21396_21406){
return (function (prev_props__19266__auto__,prev_state__19267__auto__){
var this__19263__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19263__auto__);
});})(x21396_21406))
;

x21396_21406.isMounted = ((function (x21396_21406){
return (function (){
var this__19263__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19263__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21396_21406))
;

x21396_21406.componentWillMount = ((function (x21396_21406){
return (function (){
var this__19263__auto__ = this;
var indexer__19268__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19263__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19268__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19268__auto__,this__19263__auto__);
}
});})(x21396_21406))
;

x21396_21406.componentDidMount = ((function (x21396_21406){
return (function (){
var this$ = this;
var el = om.dom.node.call(null,this$);
var map__21397 = om.next.props.call(null,this$);
var map__21397__$1 = ((((!((map__21397 == null)))?((((map__21397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21397):map__21397);
var on_enter_vr = cljs.core.get.call(null,map__21397__$1,new cljs.core.Keyword(null,"on-enter-vr","on-enter-vr",2051511787),((function (el,map__21397,map__21397__$1,this$,x21396_21406){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21397,map__21397__$1,this$,x21396_21406))
);
var on_exit_vr = cljs.core.get.call(null,map__21397__$1,new cljs.core.Keyword(null,"on-exit-vr","on-exit-vr",878029573),((function (el,map__21397,map__21397__$1,on_enter_vr,this$,x21396_21406){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21397,map__21397__$1,on_enter_vr,this$,x21396_21406))
);
var on_loaded = cljs.core.get.call(null,map__21397__$1,new cljs.core.Keyword(null,"on-loaded","on-loaded",1507578724),((function (el,map__21397,map__21397__$1,on_enter_vr,on_exit_vr,this$,x21396_21406){
return (function (){
return cljs.core.List.EMPTY;
});})(el,map__21397,map__21397__$1,on_enter_vr,on_exit_vr,this$,x21396_21406))
);
var on_tick = cljs.core.get.call(null,map__21397__$1,new cljs.core.Keyword(null,"on-tick","on-tick",-56973396));
el.addEventListener("enter-vr",on_enter_vr);

el.addEventListener("exit-vr",on_exit_vr);

el.addEventListener("loaded",on_loaded);

if(cljs.core.fn_QMARK_.call(null,on_tick)){
return window.setTimeout({"el": el, "tick": on_tick}.addBehavior());
} else {
return null;
}
});})(x21396_21406))
;

x21396_21406.render = ((function (x21396_21406){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21399 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21400 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21401 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21402 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21403 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return sablono.interpreter.interpret.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a-scene","a-scene",-2040164474),client.aframe_react.serialize.call(null,om.next.props.call(null,this$))], null),om.next.children.call(null,this$)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21403;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21402;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21401;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21400;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21399;
}});})(x21396_21406))
;


client.aframe_react.Scene.prototype.constructor = client.aframe_react.Scene;

client.aframe_react.Scene.prototype.om$isComponent = true;

var x21404_21407 = client.aframe_react.Scene;


var x21405_21408 = client.aframe_react.Scene.prototype;


client.aframe_react.Scene.cljs$lang$type = true;

client.aframe_react.Scene.cljs$lang$ctorStr = "client.aframe-react/Scene";

client.aframe_react.Scene.cljs$lang$ctorPrWriter = (function (this__19325__auto__,writer__19326__auto__,opt__19327__auto__){
return cljs.core._write.call(null,writer__19326__auto__,"client.aframe-react/Scene");
});
client.aframe_react.scene = om.next.factory.call(null,client.aframe_react.Scene);

//# sourceMappingURL=aframe_react.js.map