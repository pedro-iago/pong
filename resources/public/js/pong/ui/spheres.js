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
var this__32943__auto__ = this;
React.Component.apply(this__32943__auto__,arguments);

if(!((this__32943__auto__.initLocalState == null))){
this__32943__auto__.state = this__32943__auto__.initLocalState();
} else {
this__32943__auto__.state = {};
}

return this__32943__auto__;
});

pong.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x40432_40450 = pong.ui.spheres.RandomSphere.prototype;
x40432_40450.componentWillUpdate = ((function (x40432_40450){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
if(((!((this__32878__auto__ == null)))?(((false) || (this__32878__auto__.om$next$Ident$))?true:false):false)){
var ident__32882__auto___40451 = om.next.ident.call(null,this__32878__auto__,om.next.props.call(null,this__32878__auto__));
var next_ident__32883__auto___40452 = om.next.ident.call(null,this__32878__auto__,om.next._next_props.call(null,next_props__32879__auto__,this__32878__auto__));
if(cljs.core.not_EQ_.call(null,ident__32882__auto___40451,next_ident__32883__auto___40452)){
var idxr__32884__auto___40453 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32884__auto___40453 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32884__auto___40453),((function (idxr__32884__auto___40453,ident__32882__auto___40451,next_ident__32883__auto___40452,this__32878__auto__,x40432_40450){
return (function (indexes__32885__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32885__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32882__auto___40451], null),cljs.core.disj,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32883__auto___40452], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32878__auto__);
});})(idxr__32884__auto___40453,ident__32882__auto___40451,next_ident__32883__auto___40452,this__32878__auto__,x40432_40450))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32878__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32878__auto__);
});})(x40432_40450))
;

x40432_40450.shouldComponentUpdate = ((function (x40432_40450){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
var next_children__32881__auto__ = next_props__32879__auto__.children;
var next_props__32879__auto____$1 = goog.object.get(next_props__32879__auto__,"omcljs$value");
var next_props__32879__auto____$2 = (function (){var G__40434 = next_props__32879__auto____$1;
if((next_props__32879__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__40434);
} else {
return G__40434;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32878__auto__),next_props__32879__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__32878__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32878__auto__.state,"omcljs$state"),goog.object.get(next_state__32880__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32878__auto__.props.children,next_children__32881__auto__);
}
}
});})(x40432_40450))
;

x40432_40450.componentWillUnmount = ((function (x40432_40450){
return (function (){
var this__32878__auto__ = this;
var r__32889__auto__ = om.next.get_reconciler.call(null,this__32878__auto__);
var cfg__32890__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32889__auto__);
var st__32891__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
var indexer__32888__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
if(cljs.core.truth_((function (){var and__18714__auto__ = !((st__32891__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32878__auto__], null));
} else {
return and__18714__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32891__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32878__auto__);
} else {
}

if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40432_40450))
;

x40432_40450.componentDidUpdate = ((function (x40432_40450){
return (function (prev_props__32886__auto__,prev_state__32887__auto__){
var this__32878__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32878__auto__);
});})(x40432_40450))
;

x40432_40450.isMounted = ((function (x40432_40450){
return (function (){
var this__32878__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32878__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x40432_40450))
;

x40432_40450.componentWillMount = ((function (x40432_40450){
return (function (){
var this__32878__auto__ = this;
var indexer__32888__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40432_40450))
;

x40432_40450.render = ((function (x40432_40450){
return (function (){
var this__32877__auto__ = this;
var this$ = this__32877__auto__;
var _STAR_reconciler_STAR_40443 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40444 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_40445 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_40446 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_40447 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32877__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32877__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32877__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32877__auto__);

om.next._STAR_parent_STAR_ = this__32877__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_40443,_STAR_depth_STAR_40444,_STAR_shared_STAR_40445,_STAR_instrument_STAR_40446,_STAR_parent_STAR_40447,this$,this__32877__auto__,x40432_40450){
return (function (){
return cljs.core.rand_int.call(null,(1));
});})(_STAR_reconciler_STAR_40443,_STAR_depth_STAR_40444,_STAR_shared_STAR_40445,_STAR_instrument_STAR_40446,_STAR_parent_STAR_40447,this$,this__32877__auto__,x40432_40450))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_40447;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_40446;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_40445;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_40444;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40443;
}});})(x40432_40450))
;


pong.ui.spheres.RandomSphere.prototype.constructor = pong.ui.spheres.RandomSphere;

pong.ui.spheres.RandomSphere.prototype.constructor.displayName = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x40448_40558 = pong.ui.spheres.RandomSphere;


var x40449_40559 = pong.ui.spheres.RandomSphere.prototype;


pong.ui.spheres.RandomSphere.cljs$lang$type = true;

pong.ui.spheres.RandomSphere.cljs$lang$ctorStr = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__32945__auto__,writer__32946__auto__,opt__32947__auto__){
return cljs.core._write.call(null,writer__32946__auto__,"pong.ui.spheres/RandomSphere");
});
pong.ui.spheres.random_sphere = om.next.factory.call(null,pong.ui.spheres.RandomSphere);
/**
 * @constructor
 */
pong.ui.spheres.CounterSphere = (function pong$ui$spheres$CounterSphere(){
var this__32943__auto__ = this;
React.Component.apply(this__32943__auto__,arguments);

if(!((this__32943__auto__.initLocalState == null))){
this__32943__auto__.state = this__32943__auto__.initLocalState();
} else {
this__32943__auto__.state = {};
}

return this__32943__auto__;
});

pong.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x40571_40607 = pong.ui.spheres.CounterSphere.prototype;
x40571_40607.componentWillUpdate = ((function (x40571_40607){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
if(((!((this__32878__auto__ == null)))?(((false) || (this__32878__auto__.om$next$Ident$))?true:false):false)){
var ident__32882__auto___40608 = om.next.ident.call(null,this__32878__auto__,om.next.props.call(null,this__32878__auto__));
var next_ident__32883__auto___40609 = om.next.ident.call(null,this__32878__auto__,om.next._next_props.call(null,next_props__32879__auto__,this__32878__auto__));
if(cljs.core.not_EQ_.call(null,ident__32882__auto___40608,next_ident__32883__auto___40609)){
var idxr__32884__auto___40613 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32884__auto___40613 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32884__auto___40613),((function (idxr__32884__auto___40613,ident__32882__auto___40608,next_ident__32883__auto___40609,this__32878__auto__,x40571_40607){
return (function (indexes__32885__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32885__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32882__auto___40608], null),cljs.core.disj,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32883__auto___40609], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32878__auto__);
});})(idxr__32884__auto___40613,ident__32882__auto___40608,next_ident__32883__auto___40609,this__32878__auto__,x40571_40607))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32878__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32878__auto__);
});})(x40571_40607))
;

x40571_40607.shouldComponentUpdate = ((function (x40571_40607){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
var next_children__32881__auto__ = next_props__32879__auto__.children;
var next_props__32879__auto____$1 = goog.object.get(next_props__32879__auto__,"omcljs$value");
var next_props__32879__auto____$2 = (function (){var G__40573 = next_props__32879__auto____$1;
if((next_props__32879__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__40573);
} else {
return G__40573;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32878__auto__),next_props__32879__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__32878__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32878__auto__.state,"omcljs$state"),goog.object.get(next_state__32880__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32878__auto__.props.children,next_children__32881__auto__);
}
}
});})(x40571_40607))
;

x40571_40607.componentWillUnmount = ((function (x40571_40607){
return (function (){
var this__32878__auto__ = this;
var r__32889__auto__ = om.next.get_reconciler.call(null,this__32878__auto__);
var cfg__32890__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32889__auto__);
var st__32891__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
var indexer__32888__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
if(cljs.core.truth_((function (){var and__18714__auto__ = !((st__32891__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32878__auto__], null));
} else {
return and__18714__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32891__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32878__auto__);
} else {
}

if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40571_40607))
;

x40571_40607.componentDidUpdate = ((function (x40571_40607){
return (function (prev_props__32886__auto__,prev_state__32887__auto__){
var this__32878__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32878__auto__);
});})(x40571_40607))
;

x40571_40607.isMounted = ((function (x40571_40607){
return (function (){
var this__32878__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32878__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x40571_40607))
;

x40571_40607.componentWillMount = ((function (x40571_40607){
return (function (){
var this__32878__auto__ = this;
var indexer__32888__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40571_40607))
;

x40571_40607.render = ((function (x40571_40607){
return (function (){
var this__32877__auto__ = this;
var this$ = this__32877__auto__;
var _STAR_reconciler_STAR_40584 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40585 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_40586 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_40587 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_40588 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32877__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32877__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32877__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32877__auto__);

om.next._STAR_parent_STAR_ = this__32877__auto__;

try{var map__40590 = om.next.props.call(null,this$);
var map__40590__$1 = ((((!((map__40590 == null)))?((((map__40590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40590):map__40590);
var id = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__40590__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return pong.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__40590,map__40590__$1,id,value,mult,_STAR_reconciler_STAR_40584,_STAR_depth_STAR_40585,_STAR_shared_STAR_40586,_STAR_instrument_STAR_40587,_STAR_parent_STAR_40588,this$,this__32877__auto__,x40571_40607){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__40590,map__40590__$1,id,value,mult,_STAR_reconciler_STAR_40584,_STAR_depth_STAR_40585,_STAR_shared_STAR_40586,_STAR_instrument_STAR_40587,_STAR_parent_STAR_40588,this$,this__32877__auto__,x40571_40607))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_40588;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_40587;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_40586;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_40585;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40584;
}});})(x40571_40607))
;


pong.ui.spheres.CounterSphere.prototype.constructor = pong.ui.spheres.CounterSphere;

pong.ui.spheres.CounterSphere.prototype.constructor.displayName = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x40593_40639 = pong.ui.spheres.CounterSphere;
x40593_40639.om$next$Ident$ = true;

x40593_40639.om$next$Ident$ident$arity$2 = ((function (x40593_40639){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40593_40639))
;

x40593_40639.om$next$IQuery$ = true;

x40593_40639.om$next$IQuery$query$arity$1 = ((function (x40593_40639){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x40593_40639))
;


var x40598_40640 = pong.ui.spheres.CounterSphere.prototype;
x40598_40640.om$next$Ident$ = true;

x40598_40640.om$next$Ident$ident$arity$2 = ((function (x40598_40640){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40598_40640))
;

x40598_40640.om$next$IQuery$ = true;

x40598_40640.om$next$IQuery$query$arity$1 = ((function (x40598_40640){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x40598_40640))
;


pong.ui.spheres.CounterSphere.cljs$lang$type = true;

pong.ui.spheres.CounterSphere.cljs$lang$ctorStr = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__32945__auto__,writer__32946__auto__,opt__32947__auto__){
return cljs.core._write.call(null,writer__32946__auto__,"pong.ui.spheres/CounterSphere");
});
pong.ui.spheres.counter_sphere = om.next.factory.call(null,pong.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map