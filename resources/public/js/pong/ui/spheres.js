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
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x40538_40558 = pong.ui.spheres.RandomSphere.prototype;
x40538_40558.componentWillUpdate = ((function (x40538_40558){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x40538_40558))
;

x40538_40558.shouldComponentUpdate = ((function (x40538_40558){
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
});})(x40538_40558))
;

x40538_40558.componentWillUnmount = ((function (x40538_40558){
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
});})(x40538_40558))
;

x40538_40558.componentDidUpdate = ((function (x40538_40558){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x40538_40558))
;

x40538_40558.isMounted = ((function (x40538_40558){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x40538_40558))
;

x40538_40558.componentWillMount = ((function (x40538_40558){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x40538_40558))
;

x40538_40558.render = ((function (x40538_40558){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_40540 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40541 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_40542 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_40543 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_40544 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{return pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_40540,_STAR_depth_STAR_40541,_STAR_shared_STAR_40542,_STAR_instrument_STAR_40543,_STAR_parent_STAR_40544,this$,this__32060__auto__,x40538_40558){
return (function (){
return cljs.core.rand_int.call(null,(2));
});})(_STAR_reconciler_STAR_40540,_STAR_depth_STAR_40541,_STAR_shared_STAR_40542,_STAR_instrument_STAR_40543,_STAR_parent_STAR_40544,this$,this__32060__auto__,x40538_40558))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_40544;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_40543;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_40542;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_40541;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40540;
}});})(x40538_40558))
;


pong.ui.spheres.RandomSphere.prototype.constructor = pong.ui.spheres.RandomSphere;

pong.ui.spheres.RandomSphere.prototype.constructor.displayName = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x40546_40579 = pong.ui.spheres.RandomSphere;


var x40547_40580 = pong.ui.spheres.RandomSphere.prototype;


pong.ui.spheres.RandomSphere.cljs$lang$type = true;

pong.ui.spheres.RandomSphere.cljs$lang$ctorStr = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.ui.spheres/RandomSphere");
});
pong.ui.spheres.random_sphere = om.next.factory.call(null,pong.ui.spheres.RandomSphere);
/**
 * @constructor
 */
pong.ui.spheres.CounterSphere = (function pong$ui$spheres$CounterSphere(){
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x40587_40597 = pong.ui.spheres.CounterSphere.prototype;
x40587_40597.componentWillUpdate = ((function (x40587_40597){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x40587_40597))
;

x40587_40597.shouldComponentUpdate = ((function (x40587_40597){
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
});})(x40587_40597))
;

x40587_40597.componentWillUnmount = ((function (x40587_40597){
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
});})(x40587_40597))
;

x40587_40597.componentDidUpdate = ((function (x40587_40597){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x40587_40597))
;

x40587_40597.isMounted = ((function (x40587_40597){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x40587_40597))
;

x40587_40597.componentWillMount = ((function (x40587_40597){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x40587_40597))
;

x40587_40597.render = ((function (x40587_40597){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_40588 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40589 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_40590 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_40591 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_40592 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{var map__40593 = om.next.props.call(null,this$);
var map__40593__$1 = ((((!((map__40593 == null)))?((((map__40593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40593):map__40593);
var id = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__40593__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return pong.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__40593,map__40593__$1,id,value,mult,_STAR_reconciler_STAR_40588,_STAR_depth_STAR_40589,_STAR_shared_STAR_40590,_STAR_instrument_STAR_40591,_STAR_parent_STAR_40592,this$,this__32060__auto__,x40587_40597){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__40593,map__40593__$1,id,value,mult,_STAR_reconciler_STAR_40588,_STAR_depth_STAR_40589,_STAR_shared_STAR_40590,_STAR_instrument_STAR_40591,_STAR_parent_STAR_40592,this$,this__32060__auto__,x40587_40597))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_40592;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_40591;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_40590;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_40589;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40588;
}});})(x40587_40597))
;


pong.ui.spheres.CounterSphere.prototype.constructor = pong.ui.spheres.CounterSphere;

pong.ui.spheres.CounterSphere.prototype.constructor.displayName = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x40595_40602 = pong.ui.spheres.CounterSphere;
x40595_40602.om$next$Ident$ = true;

x40595_40602.om$next$Ident$ident$arity$2 = ((function (x40595_40602){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40595_40602))
;

x40595_40602.om$next$IQuery$ = true;

x40595_40602.om$next$IQuery$query$arity$1 = ((function (x40595_40602){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x40595_40602))
;


var x40596_40603 = pong.ui.spheres.CounterSphere.prototype;
x40596_40603.om$next$Ident$ = true;

x40596_40603.om$next$Ident$ident$arity$2 = ((function (x40596_40603){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40596_40603))
;

x40596_40603.om$next$IQuery$ = true;

x40596_40603.om$next$IQuery$query$arity$1 = ((function (x40596_40603){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x40596_40603))
;


pong.ui.spheres.CounterSphere.cljs$lang$type = true;

pong.ui.spheres.CounterSphere.cljs$lang$ctorStr = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.ui.spheres/CounterSphere");
});
pong.ui.spheres.counter_sphere = om.next.factory.call(null,pong.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map