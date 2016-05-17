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
var this__20953__auto__ = this;
React.Component.apply(this__20953__auto__,arguments);

if(!((this__20953__auto__.initLocalState == null))){
this__20953__auto__.state = this__20953__auto__.initLocalState();
} else {
this__20953__auto__.state = {};
}

return this__20953__auto__;
});

pong.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x37078_37094 = pong.ui.spheres.RandomSphere.prototype;
x37078_37094.componentWillUpdate = ((function (x37078_37094){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20893__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20893__auto__);
});})(x37078_37094))
;

x37078_37094.shouldComponentUpdate = ((function (x37078_37094){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20893__auto__),goog.object.get(next_props__20894__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__20893__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20893__auto__.state,"omcljs$state"),goog.object.get(next_state__20895__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x37078_37094))
;

x37078_37094.componentWillUnmount = ((function (x37078_37094){
return (function (){
var this__20893__auto__ = this;
var r__20899__auto__ = om.next.get_reconciler.call(null,this__20893__auto__);
var cfg__20900__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20899__auto__);
var st__20901__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
var indexer__20898__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
if((st__20901__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20901__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20893__auto__);
}

if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37078_37094))
;

x37078_37094.componentDidUpdate = ((function (x37078_37094){
return (function (prev_props__20896__auto__,prev_state__20897__auto__){
var this__20893__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20893__auto__);
});})(x37078_37094))
;

x37078_37094.isMounted = ((function (x37078_37094){
return (function (){
var this__20893__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20893__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37078_37094))
;

x37078_37094.componentWillMount = ((function (x37078_37094){
return (function (){
var this__20893__auto__ = this;
var indexer__20898__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20893__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37078_37094))
;

x37078_37094.render = ((function (x37078_37094){
return (function (){
var this__20892__auto__ = this;
var this$ = this__20892__auto__;
var _STAR_reconciler_STAR_37084 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37085 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37086 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37087 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37088 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20892__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20892__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20892__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20892__auto__);

om.next._STAR_parent_STAR_ = this__20892__auto__;

try{return React.createElement("a-entity",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_37084,_STAR_depth_STAR_37085,_STAR_shared_STAR_37086,_STAR_instrument_STAR_37087,_STAR_parent_STAR_37088,this$,this__20892__auto__,x37078_37094){
return (function (){
return cljs.core.rand_int.call(null,(1));
});})(_STAR_reconciler_STAR_37084,_STAR_depth_STAR_37085,_STAR_shared_STAR_37086,_STAR_instrument_STAR_37087,_STAR_parent_STAR_37088,this$,this__20892__auto__,x37078_37094))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37088;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37087;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37086;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37085;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37084;
}});})(x37078_37094))
;


pong.ui.spheres.RandomSphere.prototype.constructor = pong.ui.spheres.RandomSphere;

pong.ui.spheres.RandomSphere.prototype.constructor.displayName = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x37092_37097 = pong.ui.spheres.RandomSphere;


var x37093_37098 = pong.ui.spheres.RandomSphere.prototype;


pong.ui.spheres.RandomSphere.cljs$lang$type = true;

pong.ui.spheres.RandomSphere.cljs$lang$ctorStr = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__20955__auto__,writer__20956__auto__,opt__20957__auto__){
return cljs.core._write.call(null,writer__20956__auto__,"pong.ui.spheres/RandomSphere");
});
pong.ui.spheres.random_sphere = om.next.factory.call(null,pong.ui.spheres.RandomSphere);
/**
 * @constructor
 */
pong.ui.spheres.CounterSphere = (function pong$ui$spheres$CounterSphere(){
var this__20953__auto__ = this;
React.Component.apply(this__20953__auto__,arguments);

if(!((this__20953__auto__.initLocalState == null))){
this__20953__auto__.state = this__20953__auto__.initLocalState();
} else {
this__20953__auto__.state = {};
}

return this__20953__auto__;
});

pong.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x37103_37113 = pong.ui.spheres.CounterSphere.prototype;
x37103_37113.componentWillUpdate = ((function (x37103_37113){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20893__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20893__auto__);
});})(x37103_37113))
;

x37103_37113.shouldComponentUpdate = ((function (x37103_37113){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20893__auto__),goog.object.get(next_props__20894__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__20893__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20893__auto__.state,"omcljs$state"),goog.object.get(next_state__20895__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x37103_37113))
;

x37103_37113.componentWillUnmount = ((function (x37103_37113){
return (function (){
var this__20893__auto__ = this;
var r__20899__auto__ = om.next.get_reconciler.call(null,this__20893__auto__);
var cfg__20900__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20899__auto__);
var st__20901__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
var indexer__20898__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
if((st__20901__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20901__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20893__auto__);
}

if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37103_37113))
;

x37103_37113.componentDidUpdate = ((function (x37103_37113){
return (function (prev_props__20896__auto__,prev_state__20897__auto__){
var this__20893__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20893__auto__);
});})(x37103_37113))
;

x37103_37113.isMounted = ((function (x37103_37113){
return (function (){
var this__20893__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20893__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37103_37113))
;

x37103_37113.componentWillMount = ((function (x37103_37113){
return (function (){
var this__20893__auto__ = this;
var indexer__20898__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20893__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37103_37113))
;

x37103_37113.render = ((function (x37103_37113){
return (function (){
var this__20892__auto__ = this;
var this$ = this__20892__auto__;
var _STAR_reconciler_STAR_37104 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37105 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37106 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37107 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37108 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20892__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20892__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20892__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20892__auto__);

om.next._STAR_parent_STAR_ = this__20892__auto__;

try{var map__37109 = om.next.props.call(null,this$);
var map__37109__$1 = ((((!((map__37109 == null)))?((((map__37109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37109):map__37109);
var id = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__37109__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return pong.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__37109,map__37109__$1,id,value,mult,_STAR_reconciler_STAR_37104,_STAR_depth_STAR_37105,_STAR_shared_STAR_37106,_STAR_instrument_STAR_37107,_STAR_parent_STAR_37108,this$,this__20892__auto__,x37103_37113){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__37109,map__37109__$1,id,value,mult,_STAR_reconciler_STAR_37104,_STAR_depth_STAR_37105,_STAR_shared_STAR_37106,_STAR_instrument_STAR_37107,_STAR_parent_STAR_37108,this$,this__20892__auto__,x37103_37113))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37108;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37107;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37106;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37105;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37104;
}});})(x37103_37113))
;


pong.ui.spheres.CounterSphere.prototype.constructor = pong.ui.spheres.CounterSphere;

pong.ui.spheres.CounterSphere.prototype.constructor.displayName = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x37111_37114 = pong.ui.spheres.CounterSphere;
x37111_37114.om$next$Ident$ = true;

x37111_37114.om$next$Ident$ident$arity$2 = ((function (x37111_37114){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x37111_37114))
;

x37111_37114.om$next$IQuery$ = true;

x37111_37114.om$next$IQuery$query$arity$1 = ((function (x37111_37114){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x37111_37114))
;


var x37112_37115 = pong.ui.spheres.CounterSphere.prototype;
x37112_37115.om$next$Ident$ = true;

x37112_37115.om$next$Ident$ident$arity$2 = ((function (x37112_37115){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x37112_37115))
;

x37112_37115.om$next$IQuery$ = true;

x37112_37115.om$next$IQuery$query$arity$1 = ((function (x37112_37115){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x37112_37115))
;


pong.ui.spheres.CounterSphere.cljs$lang$type = true;

pong.ui.spheres.CounterSphere.cljs$lang$ctorStr = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__20955__auto__,writer__20956__auto__,opt__20957__auto__){
return cljs.core._write.call(null,writer__20956__auto__,"pong.ui.spheres/CounterSphere");
});
pong.ui.spheres.counter_sphere = om.next.factory.call(null,pong.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map