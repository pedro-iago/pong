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
var this__32925__auto__ = this;
React.Component.apply(this__32925__auto__,arguments);

if(!((this__32925__auto__.initLocalState == null))){
this__32925__auto__.state = this__32925__auto__.initLocalState();
} else {
this__32925__auto__.state = {};
}

return this__32925__auto__;
});

pong.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x36002_36021 = pong.ui.spheres.RandomSphere.prototype;
x36002_36021.componentWillUpdate = ((function (x36002_36021){
return (function (next_props__32861__auto__,next_state__32862__auto__){
var this__32860__auto__ = this;
if(((!((this__32860__auto__ == null)))?(((false) || (this__32860__auto__.om$next$Ident$))?true:false):false)){
var ident__32864__auto___36022 = om.next.ident.call(null,this__32860__auto__,om.next.props.call(null,this__32860__auto__));
var next_ident__32865__auto___36023 = om.next.ident.call(null,this__32860__auto__,om.next._next_props.call(null,next_props__32861__auto__,this__32860__auto__));
if(cljs.core.not_EQ_.call(null,ident__32864__auto___36022,next_ident__32865__auto___36023)){
var idxr__32866__auto___36029 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32866__auto___36029 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32866__auto___36029),((function (idxr__32866__auto___36029,ident__32864__auto___36022,next_ident__32865__auto___36023,this__32860__auto__,x36002_36021){
return (function (indexes__32867__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32867__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32864__auto___36022], null),cljs.core.disj,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32865__auto___36023], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32860__auto__);
});})(idxr__32866__auto___36029,ident__32864__auto___36022,next_ident__32865__auto___36023,this__32860__auto__,x36002_36021))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32860__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32860__auto__);
});})(x36002_36021))
;

x36002_36021.shouldComponentUpdate = ((function (x36002_36021){
return (function (next_props__32861__auto__,next_state__32862__auto__){
var this__32860__auto__ = this;
var next_children__32863__auto__ = next_props__32861__auto__.children;
var next_props__32861__auto____$1 = goog.object.get(next_props__32861__auto__,"omcljs$value");
var next_props__32861__auto____$2 = (function (){var G__36004 = next_props__32861__auto____$1;
if((next_props__32861__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36004);
} else {
return G__36004;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32860__auto__),next_props__32861__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__32860__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32860__auto__.state,"omcljs$state"),goog.object.get(next_state__32862__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32860__auto__.props.children,next_children__32863__auto__);
}
}
});})(x36002_36021))
;

x36002_36021.componentWillUnmount = ((function (x36002_36021){
return (function (){
var this__32860__auto__ = this;
var r__32871__auto__ = om.next.get_reconciler.call(null,this__32860__auto__);
var cfg__32872__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32871__auto__);
var st__32873__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32872__auto__);
var indexer__32870__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32872__auto__);
if(cljs.core.truth_((function (){var and__18714__auto__ = !((st__32873__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32873__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32860__auto__], null));
} else {
return and__18714__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32873__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32860__auto__);
} else {
}

if((indexer__32870__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32870__auto__,this__32860__auto__);
}
});})(x36002_36021))
;

x36002_36021.componentDidUpdate = ((function (x36002_36021){
return (function (prev_props__32868__auto__,prev_state__32869__auto__){
var this__32860__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32860__auto__);
});})(x36002_36021))
;

x36002_36021.isMounted = ((function (x36002_36021){
return (function (){
var this__32860__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32860__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36002_36021))
;

x36002_36021.componentWillMount = ((function (x36002_36021){
return (function (){
var this__32860__auto__ = this;
var indexer__32870__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32870__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32870__auto__,this__32860__auto__);
}
});})(x36002_36021))
;

x36002_36021.render = ((function (x36002_36021){
return (function (){
var this__32859__auto__ = this;
var this$ = this__32859__auto__;
var _STAR_reconciler_STAR_36013 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36014 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36015 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36016 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36017 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32859__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32859__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32859__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32859__auto__);

om.next._STAR_parent_STAR_ = this__32859__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_36013,_STAR_depth_STAR_36014,_STAR_shared_STAR_36015,_STAR_instrument_STAR_36016,_STAR_parent_STAR_36017,this$,this__32859__auto__,x36002_36021){
return (function (){
return cljs.core.rand_int.call(null,(1));
});})(_STAR_reconciler_STAR_36013,_STAR_depth_STAR_36014,_STAR_shared_STAR_36015,_STAR_instrument_STAR_36016,_STAR_parent_STAR_36017,this$,this__32859__auto__,x36002_36021))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36017;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36016;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36015;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36014;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36013;
}});})(x36002_36021))
;


pong.ui.spheres.RandomSphere.prototype.constructor = pong.ui.spheres.RandomSphere;

pong.ui.spheres.RandomSphere.prototype.constructor.displayName = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x36019_36036 = pong.ui.spheres.RandomSphere;


var x36020_36037 = pong.ui.spheres.RandomSphere.prototype;


pong.ui.spheres.RandomSphere.cljs$lang$type = true;

pong.ui.spheres.RandomSphere.cljs$lang$ctorStr = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__32927__auto__,writer__32928__auto__,opt__32929__auto__){
return cljs.core._write.call(null,writer__32928__auto__,"pong.ui.spheres/RandomSphere");
});
pong.ui.spheres.random_sphere = om.next.factory.call(null,pong.ui.spheres.RandomSphere);
/**
 * @constructor
 */
pong.ui.spheres.CounterSphere = (function pong$ui$spheres$CounterSphere(){
var this__32925__auto__ = this;
React.Component.apply(this__32925__auto__,arguments);

if(!((this__32925__auto__.initLocalState == null))){
this__32925__auto__.state = this__32925__auto__.initLocalState();
} else {
this__32925__auto__.state = {};
}

return this__32925__auto__;
});

pong.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x36042_36056 = pong.ui.spheres.CounterSphere.prototype;
x36042_36056.componentWillUpdate = ((function (x36042_36056){
return (function (next_props__32861__auto__,next_state__32862__auto__){
var this__32860__auto__ = this;
if(((!((this__32860__auto__ == null)))?(((false) || (this__32860__auto__.om$next$Ident$))?true:false):false)){
var ident__32864__auto___36057 = om.next.ident.call(null,this__32860__auto__,om.next.props.call(null,this__32860__auto__));
var next_ident__32865__auto___36058 = om.next.ident.call(null,this__32860__auto__,om.next._next_props.call(null,next_props__32861__auto__,this__32860__auto__));
if(cljs.core.not_EQ_.call(null,ident__32864__auto___36057,next_ident__32865__auto___36058)){
var idxr__32866__auto___36059 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32866__auto___36059 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32866__auto___36059),((function (idxr__32866__auto___36059,ident__32864__auto___36057,next_ident__32865__auto___36058,this__32860__auto__,x36042_36056){
return (function (indexes__32867__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32867__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32864__auto___36057], null),cljs.core.disj,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32865__auto___36058], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32860__auto__);
});})(idxr__32866__auto___36059,ident__32864__auto___36057,next_ident__32865__auto___36058,this__32860__auto__,x36042_36056))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32860__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32860__auto__);
});})(x36042_36056))
;

x36042_36056.shouldComponentUpdate = ((function (x36042_36056){
return (function (next_props__32861__auto__,next_state__32862__auto__){
var this__32860__auto__ = this;
var next_children__32863__auto__ = next_props__32861__auto__.children;
var next_props__32861__auto____$1 = goog.object.get(next_props__32861__auto__,"omcljs$value");
var next_props__32861__auto____$2 = (function (){var G__36044 = next_props__32861__auto____$1;
if((next_props__32861__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36044);
} else {
return G__36044;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32860__auto__),next_props__32861__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__32860__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32860__auto__.state,"omcljs$state"),goog.object.get(next_state__32862__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32860__auto__.props.children,next_children__32863__auto__);
}
}
});})(x36042_36056))
;

x36042_36056.componentWillUnmount = ((function (x36042_36056){
return (function (){
var this__32860__auto__ = this;
var r__32871__auto__ = om.next.get_reconciler.call(null,this__32860__auto__);
var cfg__32872__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32871__auto__);
var st__32873__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32872__auto__);
var indexer__32870__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32872__auto__);
if(cljs.core.truth_((function (){var and__18714__auto__ = !((st__32873__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32873__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32860__auto__], null));
} else {
return and__18714__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32873__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32860__auto__);
} else {
}

if((indexer__32870__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32870__auto__,this__32860__auto__);
}
});})(x36042_36056))
;

x36042_36056.componentDidUpdate = ((function (x36042_36056){
return (function (prev_props__32868__auto__,prev_state__32869__auto__){
var this__32860__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32860__auto__);
});})(x36042_36056))
;

x36042_36056.isMounted = ((function (x36042_36056){
return (function (){
var this__32860__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32860__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36042_36056))
;

x36042_36056.componentWillMount = ((function (x36042_36056){
return (function (){
var this__32860__auto__ = this;
var indexer__32870__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32870__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32870__auto__,this__32860__auto__);
}
});})(x36042_36056))
;

x36042_36056.render = ((function (x36042_36056){
return (function (){
var this__32859__auto__ = this;
var this$ = this__32859__auto__;
var _STAR_reconciler_STAR_36047 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36048 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36049 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36050 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36051 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32859__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32859__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32859__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32859__auto__);

om.next._STAR_parent_STAR_ = this__32859__auto__;

try{var map__36052 = om.next.props.call(null,this$);
var map__36052__$1 = ((((!((map__36052 == null)))?((((map__36052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36052):map__36052);
var id = cljs.core.get.call(null,map__36052__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__36052__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__36052__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return pong.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__36052,map__36052__$1,id,value,mult,_STAR_reconciler_STAR_36047,_STAR_depth_STAR_36048,_STAR_shared_STAR_36049,_STAR_instrument_STAR_36050,_STAR_parent_STAR_36051,this$,this__32859__auto__,x36042_36056){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__36052,map__36052__$1,id,value,mult,_STAR_reconciler_STAR_36047,_STAR_depth_STAR_36048,_STAR_shared_STAR_36049,_STAR_instrument_STAR_36050,_STAR_parent_STAR_36051,this$,this__32859__auto__,x36042_36056))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36051;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36050;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36049;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36048;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36047;
}});})(x36042_36056))
;


pong.ui.spheres.CounterSphere.prototype.constructor = pong.ui.spheres.CounterSphere;

pong.ui.spheres.CounterSphere.prototype.constructor.displayName = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x36054_36060 = pong.ui.spheres.CounterSphere;
x36054_36060.om$next$Ident$ = true;

x36054_36060.om$next$Ident$ident$arity$2 = ((function (x36054_36060){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x36054_36060))
;

x36054_36060.om$next$IQuery$ = true;

x36054_36060.om$next$IQuery$query$arity$1 = ((function (x36054_36060){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x36054_36060))
;


var x36055_36061 = pong.ui.spheres.CounterSphere.prototype;
x36055_36061.om$next$Ident$ = true;

x36055_36061.om$next$Ident$ident$arity$2 = ((function (x36055_36061){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x36055_36061))
;

x36055_36061.om$next$IQuery$ = true;

x36055_36061.om$next$IQuery$query$arity$1 = ((function (x36055_36061){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x36055_36061))
;


pong.ui.spheres.CounterSphere.cljs$lang$type = true;

pong.ui.spheres.CounterSphere.cljs$lang$ctorStr = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__32927__auto__,writer__32928__auto__,opt__32929__auto__){
return cljs.core._write.call(null,writer__32928__auto__,"pong.ui.spheres/CounterSphere");
});
pong.ui.spheres.counter_sphere = om.next.factory.call(null,pong.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map