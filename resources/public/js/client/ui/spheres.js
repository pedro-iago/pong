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
var this__19319__auto__ = this;
React.Component.apply(this__19319__auto__,arguments);

if(!((this__19319__auto__.initLocalState == null))){
this__19319__auto__.state = this__19319__auto__.initLocalState();
} else {
this__19319__auto__.state = {};
}

return this__19319__auto__;
});

client.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x20760_20768 = client.ui.spheres.RandomSphere.prototype;
x20760_20768.componentWillUpdate = ((function (x20760_20768){
return (function (next_props__19260__auto__,next_state__19261__auto__){
var this__19259__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19259__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19259__auto__);
});})(x20760_20768))
;

x20760_20768.shouldComponentUpdate = ((function (x20760_20768){
return (function (next_props__19260__auto__,next_state__19261__auto__){
var this__19259__auto__ = this;
var or__16778__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19259__auto__),goog.object.get(next_props__19260__auto__,"omcljs$value"));
if(or__16778__auto__){
return or__16778__auto__;
} else {
var and__16766__auto__ = this__19259__auto__.state;
if(cljs.core.truth_(and__16766__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19259__auto__.state,"omcljs$state"),goog.object.get(next_state__19261__auto__,"omcljs$state"));
} else {
return and__16766__auto__;
}
}
});})(x20760_20768))
;

x20760_20768.componentWillUnmount = ((function (x20760_20768){
return (function (){
var this__19259__auto__ = this;
var r__19265__auto__ = om.next.get_reconciler.call(null,this__19259__auto__);
var cfg__19266__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19265__auto__);
var st__19267__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19266__auto__);
var indexer__19264__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19266__auto__);
if((st__19267__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19267__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19259__auto__);
}

if((indexer__19264__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19264__auto__,this__19259__auto__);
}
});})(x20760_20768))
;

x20760_20768.componentDidUpdate = ((function (x20760_20768){
return (function (prev_props__19262__auto__,prev_state__19263__auto__){
var this__19259__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19259__auto__);
});})(x20760_20768))
;

x20760_20768.isMounted = ((function (x20760_20768){
return (function (){
var this__19259__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19259__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20760_20768))
;

x20760_20768.componentWillMount = ((function (x20760_20768){
return (function (){
var this__19259__auto__ = this;
var indexer__19264__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19259__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19264__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19264__auto__,this__19259__auto__);
}
});})(x20760_20768))
;

x20760_20768.render = ((function (x20760_20768){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20761 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20762 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20763 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20764 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20765 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{return client.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_20761,_STAR_depth_STAR_20762,_STAR_shared_STAR_20763,_STAR_instrument_STAR_20764,_STAR_parent_STAR_20765,this$,x20760_20768){
return (function (){
return cljs.core.rand_int.call(null,(2));
});})(_STAR_reconciler_STAR_20761,_STAR_depth_STAR_20762,_STAR_shared_STAR_20763,_STAR_instrument_STAR_20764,_STAR_parent_STAR_20765,this$,x20760_20768))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),"sphere",new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20765;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20764;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20763;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20762;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20761;
}});})(x20760_20768))
;


client.ui.spheres.RandomSphere.prototype.constructor = client.ui.spheres.RandomSphere;

client.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x20766_20769 = client.ui.spheres.RandomSphere;


var x20767_20770 = client.ui.spheres.RandomSphere.prototype;


client.ui.spheres.RandomSphere.cljs$lang$type = true;

client.ui.spheres.RandomSphere.cljs$lang$ctorStr = "client.ui.spheres/RandomSphere";

client.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__19321__auto__,writer__19322__auto__,opt__19323__auto__){
return cljs.core._write.call(null,writer__19322__auto__,"client.ui.spheres/RandomSphere");
});
client.ui.spheres.random_sphere = om.next.factory.call(null,client.ui.spheres.RandomSphere);
/**
 * @constructor
 */
client.ui.spheres.CounterSphere = (function client$ui$spheres$CounterSphere(){
var this__19319__auto__ = this;
React.Component.apply(this__19319__auto__,arguments);

if(!((this__19319__auto__.initLocalState == null))){
this__19319__auto__.state = this__19319__auto__.initLocalState();
} else {
this__19319__auto__.state = {};
}

return this__19319__auto__;
});

client.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x20775_20785 = client.ui.spheres.CounterSphere.prototype;
x20775_20785.componentWillUpdate = ((function (x20775_20785){
return (function (next_props__19260__auto__,next_state__19261__auto__){
var this__19259__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19259__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19259__auto__);
});})(x20775_20785))
;

x20775_20785.shouldComponentUpdate = ((function (x20775_20785){
return (function (next_props__19260__auto__,next_state__19261__auto__){
var this__19259__auto__ = this;
var or__16778__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19259__auto__),goog.object.get(next_props__19260__auto__,"omcljs$value"));
if(or__16778__auto__){
return or__16778__auto__;
} else {
var and__16766__auto__ = this__19259__auto__.state;
if(cljs.core.truth_(and__16766__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19259__auto__.state,"omcljs$state"),goog.object.get(next_state__19261__auto__,"omcljs$state"));
} else {
return and__16766__auto__;
}
}
});})(x20775_20785))
;

x20775_20785.componentWillUnmount = ((function (x20775_20785){
return (function (){
var this__19259__auto__ = this;
var r__19265__auto__ = om.next.get_reconciler.call(null,this__19259__auto__);
var cfg__19266__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19265__auto__);
var st__19267__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19266__auto__);
var indexer__19264__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19266__auto__);
if((st__19267__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19267__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19259__auto__);
}

if((indexer__19264__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19264__auto__,this__19259__auto__);
}
});})(x20775_20785))
;

x20775_20785.componentDidUpdate = ((function (x20775_20785){
return (function (prev_props__19262__auto__,prev_state__19263__auto__){
var this__19259__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19259__auto__);
});})(x20775_20785))
;

x20775_20785.isMounted = ((function (x20775_20785){
return (function (){
var this__19259__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19259__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20775_20785))
;

x20775_20785.componentWillMount = ((function (x20775_20785){
return (function (){
var this__19259__auto__ = this;
var indexer__19264__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19259__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19264__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19264__auto__,this__19259__auto__);
}
});})(x20775_20785))
;

x20775_20785.render = ((function (x20775_20785){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20776 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20777 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20778 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20779 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20780 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20781 = om.next.props.call(null,this$);
var map__20781__$1 = ((((!((map__20781 == null)))?((((map__20781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20781):map__20781);
var id = cljs.core.get.call(null,map__20781__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__20781__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__20781__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return client.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__20781,map__20781__$1,id,value,mult,_STAR_reconciler_STAR_20776,_STAR_depth_STAR_20777,_STAR_shared_STAR_20778,_STAR_instrument_STAR_20779,_STAR_parent_STAR_20780,this$,x20775_20785){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__20781,map__20781__$1,id,value,mult,_STAR_reconciler_STAR_20776,_STAR_depth_STAR_20777,_STAR_shared_STAR_20778,_STAR_instrument_STAR_20779,_STAR_parent_STAR_20780,this$,x20775_20785))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20780;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20779;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20778;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20777;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20776;
}});})(x20775_20785))
;


client.ui.spheres.CounterSphere.prototype.constructor = client.ui.spheres.CounterSphere;

client.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x20783_20786 = client.ui.spheres.CounterSphere;
x20783_20786.om$next$Ident$ = true;

x20783_20786.om$next$Ident$ident$arity$2 = ((function (x20783_20786){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x20783_20786))
;

x20783_20786.om$next$IQuery$ = true;

x20783_20786.om$next$IQuery$query$arity$1 = ((function (x20783_20786){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x20783_20786))
;


var x20784_20787 = client.ui.spheres.CounterSphere.prototype;
x20784_20787.om$next$Ident$ = true;

x20784_20787.om$next$Ident$ident$arity$2 = ((function (x20784_20787){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x20784_20787))
;

x20784_20787.om$next$IQuery$ = true;

x20784_20787.om$next$IQuery$query$arity$1 = ((function (x20784_20787){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x20784_20787))
;


client.ui.spheres.CounterSphere.cljs$lang$type = true;

client.ui.spheres.CounterSphere.cljs$lang$ctorStr = "client.ui.spheres/CounterSphere";

client.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__19321__auto__,writer__19322__auto__,opt__19323__auto__){
return cljs.core._write.call(null,writer__19322__auto__,"client.ui.spheres/CounterSphere");
});
client.ui.spheres.counter_sphere = om.next.factory.call(null,client.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map