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
var this__19241__auto__ = this;
React.Component.apply(this__19241__auto__,arguments);

if(!((this__19241__auto__.initLocalState == null))){
this__19241__auto__.state = this__19241__auto__.initLocalState();
} else {
this__19241__auto__.state = {};
}

return this__19241__auto__;
});

client.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x22169_22177 = client.ui.spheres.RandomSphere.prototype;
x22169_22177.componentWillUpdate = ((function (x22169_22177){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x22169_22177))
;

x22169_22177.shouldComponentUpdate = ((function (x22169_22177){
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
});})(x22169_22177))
;

x22169_22177.componentWillUnmount = ((function (x22169_22177){
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
});})(x22169_22177))
;

x22169_22177.componentDidUpdate = ((function (x22169_22177){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x22169_22177))
;

x22169_22177.isMounted = ((function (x22169_22177){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22169_22177))
;

x22169_22177.componentWillMount = ((function (x22169_22177){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x22169_22177))
;

x22169_22177.render = ((function (x22169_22177){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22170 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22171 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22172 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22173 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22174 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return client.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_22170,_STAR_depth_STAR_22171,_STAR_shared_STAR_22172,_STAR_instrument_STAR_22173,_STAR_parent_STAR_22174,this$,x22169_22177){
return (function (){
return cljs.core.rand_int.call(null,(2));
});})(_STAR_reconciler_STAR_22170,_STAR_depth_STAR_22171,_STAR_shared_STAR_22172,_STAR_instrument_STAR_22173,_STAR_parent_STAR_22174,this$,x22169_22177))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"sphere",new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22174;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22173;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22172;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22171;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22170;
}});})(x22169_22177))
;


client.ui.spheres.RandomSphere.prototype.constructor = client.ui.spheres.RandomSphere;

client.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x22175_22178 = client.ui.spheres.RandomSphere;


var x22176_22179 = client.ui.spheres.RandomSphere.prototype;


client.ui.spheres.RandomSphere.cljs$lang$type = true;

client.ui.spheres.RandomSphere.cljs$lang$ctorStr = "client.ui.spheres/RandomSphere";

client.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__19243__auto__,writer__19244__auto__,opt__19245__auto__){
return cljs.core._write.call(null,writer__19244__auto__,"client.ui.spheres/RandomSphere");
});
client.ui.spheres.random_sphere = om.next.factory.call(null,client.ui.spheres.RandomSphere);
/**
 * @constructor
 */
client.ui.spheres.CounterSphere = (function client$ui$spheres$CounterSphere(){
var this__19241__auto__ = this;
React.Component.apply(this__19241__auto__,arguments);

if(!((this__19241__auto__.initLocalState == null))){
this__19241__auto__.state = this__19241__auto__.initLocalState();
} else {
this__19241__auto__.state = {};
}

return this__19241__auto__;
});

client.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x22184_22194 = client.ui.spheres.CounterSphere.prototype;
x22184_22194.componentWillUpdate = ((function (x22184_22194){
return (function (next_props__19182__auto__,next_state__19183__auto__){
var this__19181__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19181__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19181__auto__);
});})(x22184_22194))
;

x22184_22194.shouldComponentUpdate = ((function (x22184_22194){
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
});})(x22184_22194))
;

x22184_22194.componentWillUnmount = ((function (x22184_22194){
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
});})(x22184_22194))
;

x22184_22194.componentDidUpdate = ((function (x22184_22194){
return (function (prev_props__19184__auto__,prev_state__19185__auto__){
var this__19181__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19181__auto__);
});})(x22184_22194))
;

x22184_22194.isMounted = ((function (x22184_22194){
return (function (){
var this__19181__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19181__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22184_22194))
;

x22184_22194.componentWillMount = ((function (x22184_22194){
return (function (){
var this__19181__auto__ = this;
var indexer__19186__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19181__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19186__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19186__auto__,this__19181__auto__);
}
});})(x22184_22194))
;

x22184_22194.render = ((function (x22184_22194){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22185 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22186 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22187 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22188 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22189 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22190 = om.next.props.call(null,this$);
var map__22190__$1 = ((((!((map__22190 == null)))?((((map__22190.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22190.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22190):map__22190);
var id = cljs.core.get.call(null,map__22190__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__22190__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__22190__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return client.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__22190,map__22190__$1,id,value,mult,_STAR_reconciler_STAR_22185,_STAR_depth_STAR_22186,_STAR_shared_STAR_22187,_STAR_instrument_STAR_22188,_STAR_parent_STAR_22189,this$,x22184_22194){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__22190,map__22190__$1,id,value,mult,_STAR_reconciler_STAR_22185,_STAR_depth_STAR_22186,_STAR_shared_STAR_22187,_STAR_instrument_STAR_22188,_STAR_parent_STAR_22189,this$,x22184_22194))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22189;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22188;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22187;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22186;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22185;
}});})(x22184_22194))
;


client.ui.spheres.CounterSphere.prototype.constructor = client.ui.spheres.CounterSphere;

client.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x22192_22195 = client.ui.spheres.CounterSphere;
x22192_22195.om$next$Ident$ = true;

x22192_22195.om$next$Ident$ident$arity$2 = ((function (x22192_22195){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22192_22195))
;

x22192_22195.om$next$IQuery$ = true;

x22192_22195.om$next$IQuery$query$arity$1 = ((function (x22192_22195){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x22192_22195))
;


var x22193_22196 = client.ui.spheres.CounterSphere.prototype;
x22193_22196.om$next$Ident$ = true;

x22193_22196.om$next$Ident$ident$arity$2 = ((function (x22193_22196){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22193_22196))
;

x22193_22196.om$next$IQuery$ = true;

x22193_22196.om$next$IQuery$query$arity$1 = ((function (x22193_22196){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x22193_22196))
;


client.ui.spheres.CounterSphere.cljs$lang$type = true;

client.ui.spheres.CounterSphere.cljs$lang$ctorStr = "client.ui.spheres/CounterSphere";

client.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__19243__auto__,writer__19244__auto__,opt__19245__auto__){
return cljs.core._write.call(null,writer__19244__auto__,"client.ui.spheres/CounterSphere");
});
client.ui.spheres.counter_sphere = om.next.factory.call(null,client.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map