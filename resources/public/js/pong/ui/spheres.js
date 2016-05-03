// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.spheres');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('pong.aframe_react');
/**
 * @constructor
 */
pong.ui.spheres.RandomSphere = (function pong$ui$spheres$RandomSphere(){
var this__21833__auto__ = this;
React.Component.apply(this__21833__auto__,arguments);

if(!((this__21833__auto__.initLocalState == null))){
this__21833__auto__.state = this__21833__auto__.initLocalState();
} else {
this__21833__auto__.state = {};
}

return this__21833__auto__;
});

pong.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x34338_34351 = pong.ui.spheres.RandomSphere.prototype;
x34338_34351.componentWillUpdate = ((function (x34338_34351){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21773__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21773__auto__);
});})(x34338_34351))
;

x34338_34351.shouldComponentUpdate = ((function (x34338_34351){
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
});})(x34338_34351))
;

x34338_34351.componentWillUnmount = ((function (x34338_34351){
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
});})(x34338_34351))
;

x34338_34351.componentDidUpdate = ((function (x34338_34351){
return (function (prev_props__21776__auto__,prev_state__21777__auto__){
var this__21773__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21773__auto__);
});})(x34338_34351))
;

x34338_34351.isMounted = ((function (x34338_34351){
return (function (){
var this__21773__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21773__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34338_34351))
;

x34338_34351.componentWillMount = ((function (x34338_34351){
return (function (){
var this__21773__auto__ = this;
var indexer__21778__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21773__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x34338_34351))
;

x34338_34351.render = ((function (x34338_34351){
return (function (){
var this__21772__auto__ = this;
var this$ = this__21772__auto__;
var _STAR_reconciler_STAR_34339 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34340 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34341 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34342 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34343 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21772__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21772__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21772__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21772__auto__);

om.next._STAR_parent_STAR_ = this__21772__auto__;

try{return pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_34339,_STAR_depth_STAR_34340,_STAR_shared_STAR_34341,_STAR_instrument_STAR_34342,_STAR_parent_STAR_34343,this$,this__21772__auto__,x34338_34351){
return (function (){
return cljs.core.rand_int.call(null,(1));
});})(_STAR_reconciler_STAR_34339,_STAR_depth_STAR_34340,_STAR_shared_STAR_34341,_STAR_instrument_STAR_34342,_STAR_parent_STAR_34343,this$,this__21772__auto__,x34338_34351))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34343;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34342;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34341;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34340;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34339;
}});})(x34338_34351))
;


pong.ui.spheres.RandomSphere.prototype.constructor = pong.ui.spheres.RandomSphere;

pong.ui.spheres.RandomSphere.prototype.constructor.displayName = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x34344_34355 = pong.ui.spheres.RandomSphere;


var x34345_34356 = pong.ui.spheres.RandomSphere.prototype;


pong.ui.spheres.RandomSphere.cljs$lang$type = true;

pong.ui.spheres.RandomSphere.cljs$lang$ctorStr = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__21835__auto__,writer__21836__auto__,opt__21837__auto__){
return cljs.core._write.call(null,writer__21836__auto__,"pong.ui.spheres/RandomSphere");
});
pong.ui.spheres.random_sphere = om.next.factory.call(null,pong.ui.spheres.RandomSphere);
/**
 * @constructor
 */
pong.ui.spheres.CounterSphere = (function pong$ui$spheres$CounterSphere(){
var this__21833__auto__ = this;
React.Component.apply(this__21833__auto__,arguments);

if(!((this__21833__auto__.initLocalState == null))){
this__21833__auto__.state = this__21833__auto__.initLocalState();
} else {
this__21833__auto__.state = {};
}

return this__21833__auto__;
});

pong.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x34361_34373 = pong.ui.spheres.CounterSphere.prototype;
x34361_34373.componentWillUpdate = ((function (x34361_34373){
return (function (next_props__21774__auto__,next_state__21775__auto__){
var this__21773__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21773__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21773__auto__);
});})(x34361_34373))
;

x34361_34373.shouldComponentUpdate = ((function (x34361_34373){
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
});})(x34361_34373))
;

x34361_34373.componentWillUnmount = ((function (x34361_34373){
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
});})(x34361_34373))
;

x34361_34373.componentDidUpdate = ((function (x34361_34373){
return (function (prev_props__21776__auto__,prev_state__21777__auto__){
var this__21773__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21773__auto__);
});})(x34361_34373))
;

x34361_34373.isMounted = ((function (x34361_34373){
return (function (){
var this__21773__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21773__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34361_34373))
;

x34361_34373.componentWillMount = ((function (x34361_34373){
return (function (){
var this__21773__auto__ = this;
var indexer__21778__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21773__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21778__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21778__auto__,this__21773__auto__);
}
});})(x34361_34373))
;

x34361_34373.render = ((function (x34361_34373){
return (function (){
var this__21772__auto__ = this;
var this$ = this__21772__auto__;
var _STAR_reconciler_STAR_34362 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34363 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34364 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34365 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34366 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21772__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21772__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21772__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21772__auto__);

om.next._STAR_parent_STAR_ = this__21772__auto__;

try{var map__34369 = om.next.props.call(null,this$);
var map__34369__$1 = ((((!((map__34369 == null)))?((((map__34369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34369):map__34369);
var id = cljs.core.get.call(null,map__34369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__34369__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__34369__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return pong.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__34369,map__34369__$1,id,value,mult,_STAR_reconciler_STAR_34362,_STAR_depth_STAR_34363,_STAR_shared_STAR_34364,_STAR_instrument_STAR_34365,_STAR_parent_STAR_34366,this$,this__21772__auto__,x34361_34373){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__34369,map__34369__$1,id,value,mult,_STAR_reconciler_STAR_34362,_STAR_depth_STAR_34363,_STAR_shared_STAR_34364,_STAR_instrument_STAR_34365,_STAR_parent_STAR_34366,this$,this__21772__auto__,x34361_34373))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34366;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34365;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34364;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34363;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34362;
}});})(x34361_34373))
;


pong.ui.spheres.CounterSphere.prototype.constructor = pong.ui.spheres.CounterSphere;

pong.ui.spheres.CounterSphere.prototype.constructor.displayName = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x34371_34374 = pong.ui.spheres.CounterSphere;
x34371_34374.om$next$Ident$ = true;

x34371_34374.om$next$Ident$ident$arity$2 = ((function (x34371_34374){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x34371_34374))
;

x34371_34374.om$next$IQuery$ = true;

x34371_34374.om$next$IQuery$query$arity$1 = ((function (x34371_34374){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x34371_34374))
;


var x34372_34375 = pong.ui.spheres.CounterSphere.prototype;
x34372_34375.om$next$Ident$ = true;

x34372_34375.om$next$Ident$ident$arity$2 = ((function (x34372_34375){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x34372_34375))
;

x34372_34375.om$next$IQuery$ = true;

x34372_34375.om$next$IQuery$query$arity$1 = ((function (x34372_34375){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x34372_34375))
;


pong.ui.spheres.CounterSphere.cljs$lang$type = true;

pong.ui.spheres.CounterSphere.cljs$lang$ctorStr = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__21835__auto__,writer__21836__auto__,opt__21837__auto__){
return cljs.core._write.call(null,writer__21836__auto__,"pong.ui.spheres/CounterSphere");
});
pong.ui.spheres.counter_sphere = om.next.factory.call(null,pong.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map