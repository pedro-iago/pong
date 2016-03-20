// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.ui.spheres');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('client.aframe_react');
/**
 * @constructor
 */
client.ui.spheres.RandomSphere = (function client$ui$spheres$RandomSphere(){
var this__24626__auto__ = this;
React.Component.apply(this__24626__auto__,arguments);

if(!((this__24626__auto__.initLocalState == null))){
this__24626__auto__.state = this__24626__auto__.initLocalState();
} else {
this__24626__auto__.state = {};
}

return this__24626__auto__;
});

client.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x26390_26398 = client.ui.spheres.RandomSphere.prototype;
x26390_26398.componentWillUpdate = ((function (x26390_26398){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__24566__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24566__auto__);
});})(x26390_26398))
;

x26390_26398.shouldComponentUpdate = ((function (x26390_26398){
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
});})(x26390_26398))
;

x26390_26398.componentWillUnmount = ((function (x26390_26398){
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
});})(x26390_26398))
;

x26390_26398.componentDidUpdate = ((function (x26390_26398){
return (function (prev_props__24569__auto__,prev_state__24570__auto__){
var this__24566__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24566__auto__);
});})(x26390_26398))
;

x26390_26398.isMounted = ((function (x26390_26398){
return (function (){
var this__24566__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24566__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26390_26398))
;

x26390_26398.componentWillMount = ((function (x26390_26398){
return (function (){
var this__24566__auto__ = this;
var indexer__24571__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24566__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x26390_26398))
;

x26390_26398.render = ((function (x26390_26398){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_26391 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26392 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26393 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26394 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26395 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return client.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_26391,_STAR_depth_STAR_26392,_STAR_shared_STAR_26393,_STAR_instrument_STAR_26394,_STAR_parent_STAR_26395,this$,x26390_26398){
return (function (){
return cljs.core.rand_int.call(null,(5));
});})(_STAR_reconciler_STAR_26391,_STAR_depth_STAR_26392,_STAR_shared_STAR_26393,_STAR_instrument_STAR_26394,_STAR_parent_STAR_26395,this$,x26390_26398))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"sphere",new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.props.call(null,this$)], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#EF2D5E"], null)], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26395;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26394;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26393;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26392;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26391;
}});})(x26390_26398))
;


client.ui.spheres.RandomSphere.prototype.constructor = client.ui.spheres.RandomSphere;

client.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x26396_26399 = client.ui.spheres.RandomSphere;


var x26397_26400 = client.ui.spheres.RandomSphere.prototype;


client.ui.spheres.RandomSphere.cljs$lang$type = true;

client.ui.spheres.RandomSphere.cljs$lang$ctorStr = "client.ui.spheres/RandomSphere";

client.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__24628__auto__,writer__24629__auto__,opt__24630__auto__){
return cljs.core._write.call(null,writer__24629__auto__,"client.ui.spheres/RandomSphere");
});
client.ui.spheres.random_sphere = om.next.factory.call(null,client.ui.spheres.RandomSphere);
/**
 * @constructor
 */
client.ui.spheres.CounterSphere = (function client$ui$spheres$CounterSphere(){
var this__24626__auto__ = this;
React.Component.apply(this__24626__auto__,arguments);

if(!((this__24626__auto__.initLocalState == null))){
this__24626__auto__.state = this__24626__auto__.initLocalState();
} else {
this__24626__auto__.state = {};
}

return this__24626__auto__;
});

client.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x26405_26415 = client.ui.spheres.CounterSphere.prototype;
x26405_26415.componentWillUpdate = ((function (x26405_26415){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__24566__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24566__auto__);
});})(x26405_26415))
;

x26405_26415.shouldComponentUpdate = ((function (x26405_26415){
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
});})(x26405_26415))
;

x26405_26415.componentWillUnmount = ((function (x26405_26415){
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
});})(x26405_26415))
;

x26405_26415.componentDidUpdate = ((function (x26405_26415){
return (function (prev_props__24569__auto__,prev_state__24570__auto__){
var this__24566__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24566__auto__);
});})(x26405_26415))
;

x26405_26415.isMounted = ((function (x26405_26415){
return (function (){
var this__24566__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24566__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26405_26415))
;

x26405_26415.componentWillMount = ((function (x26405_26415){
return (function (){
var this__24566__auto__ = this;
var indexer__24571__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24566__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x26405_26415))
;

x26405_26415.render = ((function (x26405_26415){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_26406 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26407 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26408 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26409 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26410 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__26411 = om.next.props.call(null,this$);
var map__26411__$1 = ((((!((map__26411 == null)))?((((map__26411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26411):map__26411);
var value = cljs.core.get.call(null,map__26411__$1,new cljs.core.Keyword(null,"value","value",305978217));
return client.ui.spheres.random_sphere.call(null,(0.1 * value));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26410;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26409;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26408;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26407;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26406;
}});})(x26405_26415))
;


client.ui.spheres.CounterSphere.prototype.constructor = client.ui.spheres.CounterSphere;

client.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x26413_26416 = client.ui.spheres.CounterSphere;
x26413_26416.om$next$Ident$ = true;

x26413_26416.om$next$Ident$ident$arity$2 = ((function (x26413_26416){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26413_26416))
;

x26413_26416.om$next$IQuery$ = true;

x26413_26416.om$next$IQuery$query$arity$1 = ((function (x26413_26416){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x26413_26416))
;


var x26414_26417 = client.ui.spheres.CounterSphere.prototype;
x26414_26417.om$next$Ident$ = true;

x26414_26417.om$next$Ident$ident$arity$2 = ((function (x26414_26417){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26414_26417))
;

x26414_26417.om$next$IQuery$ = true;

x26414_26417.om$next$IQuery$query$arity$1 = ((function (x26414_26417){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x26414_26417))
;


client.ui.spheres.CounterSphere.cljs$lang$type = true;

client.ui.spheres.CounterSphere.cljs$lang$ctorStr = "client.ui.spheres/CounterSphere";

client.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__24628__auto__,writer__24629__auto__,opt__24630__auto__){
return cljs.core._write.call(null,writer__24629__auto__,"client.ui.spheres/CounterSphere");
});
client.ui.spheres.counter_sphere = om.next.factory.call(null,client.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map