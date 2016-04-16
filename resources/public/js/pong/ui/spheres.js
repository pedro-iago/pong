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
var this__19536__auto__ = this;
React.Component.apply(this__19536__auto__,arguments);

if(!((this__19536__auto__.initLocalState == null))){
this__19536__auto__.state = this__19536__auto__.initLocalState();
} else {
this__19536__auto__.state = {};
}

return this__19536__auto__;
});

pong.ui.spheres.RandomSphere.prototype = goog.object.clone(React.Component.prototype);

var x25159_25167 = pong.ui.spheres.RandomSphere.prototype;
x25159_25167.componentWillUpdate = ((function (x25159_25167){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19476__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19476__auto__);
});})(x25159_25167))
;

x25159_25167.shouldComponentUpdate = ((function (x25159_25167){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
var or__17788__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19476__auto__),goog.object.get(next_props__19477__auto__,"omcljs$value"));
if(or__17788__auto__){
return or__17788__auto__;
} else {
var and__17776__auto__ = this__19476__auto__.state;
if(cljs.core.truth_(and__17776__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19476__auto__.state,"omcljs$state"),goog.object.get(next_state__19478__auto__,"omcljs$state"));
} else {
return and__17776__auto__;
}
}
});})(x25159_25167))
;

x25159_25167.componentWillUnmount = ((function (x25159_25167){
return (function (){
var this__19476__auto__ = this;
var r__19482__auto__ = om.next.get_reconciler.call(null,this__19476__auto__);
var cfg__19483__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19482__auto__);
var st__19484__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
var indexer__19481__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
if((st__19484__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19484__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19476__auto__);
}

if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x25159_25167))
;

x25159_25167.componentDidUpdate = ((function (x25159_25167){
return (function (prev_props__19479__auto__,prev_state__19480__auto__){
var this__19476__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19476__auto__);
});})(x25159_25167))
;

x25159_25167.isMounted = ((function (x25159_25167){
return (function (){
var this__19476__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19476__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25159_25167))
;

x25159_25167.componentWillMount = ((function (x25159_25167){
return (function (){
var this__19476__auto__ = this;
var indexer__19481__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19476__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x25159_25167))
;

x25159_25167.render = ((function (x25159_25167){
return (function (){
var this__19475__auto__ = this;
var this$ = this__19475__auto__;
var _STAR_reconciler_STAR_25160 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25161 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25162 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25163 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25164 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19475__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19475__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19475__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19475__auto__);

om.next._STAR_parent_STAR_ = this__19475__auto__;

try{return pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.repeatedly.call(null,(3),((function (_STAR_reconciler_STAR_25160,_STAR_depth_STAR_25161,_STAR_shared_STAR_25162,_STAR_instrument_STAR_25163,_STAR_parent_STAR_25164,this$,this__19475__auto__,x25159_25167){
return (function (){
return cljs.core.rand_int.call(null,(2));
});})(_STAR_reconciler_STAR_25160,_STAR_depth_STAR_25161,_STAR_shared_STAR_25162,_STAR_instrument_STAR_25163,_STAR_parent_STAR_25164,this$,this__19475__auto__,x25159_25167))
),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#268299"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$))], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25164;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25163;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25162;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25161;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25160;
}});})(x25159_25167))
;


pong.ui.spheres.RandomSphere.prototype.constructor = pong.ui.spheres.RandomSphere;

pong.ui.spheres.RandomSphere.prototype.constructor.displayName = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.prototype.om$isComponent = true;

var x25165_25175 = pong.ui.spheres.RandomSphere;


var x25166_25177 = pong.ui.spheres.RandomSphere.prototype;


pong.ui.spheres.RandomSphere.cljs$lang$type = true;

pong.ui.spheres.RandomSphere.cljs$lang$ctorStr = "pong.ui.spheres/RandomSphere";

pong.ui.spheres.RandomSphere.cljs$lang$ctorPrWriter = (function (this__19538__auto__,writer__19539__auto__,opt__19540__auto__){
return cljs.core._write.call(null,writer__19539__auto__,"pong.ui.spheres/RandomSphere");
});
pong.ui.spheres.random_sphere = om.next.factory.call(null,pong.ui.spheres.RandomSphere);
/**
 * @constructor
 */
pong.ui.spheres.CounterSphere = (function pong$ui$spheres$CounterSphere(){
var this__19536__auto__ = this;
React.Component.apply(this__19536__auto__,arguments);

if(!((this__19536__auto__.initLocalState == null))){
this__19536__auto__.state = this__19536__auto__.initLocalState();
} else {
this__19536__auto__.state = {};
}

return this__19536__auto__;
});

pong.ui.spheres.CounterSphere.prototype = goog.object.clone(React.Component.prototype);

var x25185_25200 = pong.ui.spheres.CounterSphere.prototype;
x25185_25200.componentWillUpdate = ((function (x25185_25200){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__19476__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__19476__auto__);
});})(x25185_25200))
;

x25185_25200.shouldComponentUpdate = ((function (x25185_25200){
return (function (next_props__19477__auto__,next_state__19478__auto__){
var this__19476__auto__ = this;
var or__17788__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__19476__auto__),goog.object.get(next_props__19477__auto__,"omcljs$value"));
if(or__17788__auto__){
return or__17788__auto__;
} else {
var and__17776__auto__ = this__19476__auto__.state;
if(cljs.core.truth_(and__17776__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__19476__auto__.state,"omcljs$state"),goog.object.get(next_state__19478__auto__,"omcljs$state"));
} else {
return and__17776__auto__;
}
}
});})(x25185_25200))
;

x25185_25200.componentWillUnmount = ((function (x25185_25200){
return (function (){
var this__19476__auto__ = this;
var r__19482__auto__ = om.next.get_reconciler.call(null,this__19476__auto__);
var cfg__19483__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__19482__auto__);
var st__19484__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
var indexer__19481__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__19483__auto__);
if((st__19484__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__19484__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__19476__auto__);
}

if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x25185_25200))
;

x25185_25200.componentDidUpdate = ((function (x25185_25200){
return (function (prev_props__19479__auto__,prev_state__19480__auto__){
var this__19476__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__19476__auto__);
});})(x25185_25200))
;

x25185_25200.isMounted = ((function (x25185_25200){
return (function (){
var this__19476__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__19476__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x25185_25200))
;

x25185_25200.componentWillMount = ((function (x25185_25200){
return (function (){
var this__19476__auto__ = this;
var indexer__19481__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__19476__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__19481__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__19481__auto__,this__19476__auto__);
}
});})(x25185_25200))
;

x25185_25200.render = ((function (x25185_25200){
return (function (){
var this__19475__auto__ = this;
var this$ = this__19475__auto__;
var _STAR_reconciler_STAR_25188 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_25189 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_25190 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_25191 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_25192 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__19475__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__19475__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__19475__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__19475__auto__);

om.next._STAR_parent_STAR_ = this__19475__auto__;

try{var map__25193 = om.next.props.call(null,this$);
var map__25193__$1 = ((((!((map__25193 == null)))?((((map__25193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25193):map__25193);
var id = cljs.core.get.call(null,map__25193__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__25193__$1,new cljs.core.Keyword(null,"value","value",305978217));
var mult = cljs.core.get.call(null,map__25193__$1,new cljs.core.Keyword(null,"mult","mult",1466794774));
return pong.ui.spheres.random_sphere.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"radius","radius",-2073122258),(mult * value),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__25193,map__25193__$1,id,value,mult,_STAR_reconciler_STAR_25188,_STAR_depth_STAR_25189,_STAR_shared_STAR_25190,_STAR_instrument_STAR_25191,_STAR_parent_STAR_25192,this$,this__19475__auto__,x25185_25200){
return (function (){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__25193,map__25193__$1,id,value,mult,_STAR_reconciler_STAR_25188,_STAR_depth_STAR_25189,_STAR_shared_STAR_25190,_STAR_instrument_STAR_25191,_STAR_parent_STAR_25192,this$,this__19475__auto__,x25185_25200))
], null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_25192;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_25191;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_25190;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_25189;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_25188;
}});})(x25185_25200))
;


pong.ui.spheres.CounterSphere.prototype.constructor = pong.ui.spheres.CounterSphere;

pong.ui.spheres.CounterSphere.prototype.constructor.displayName = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.prototype.om$isComponent = true;

var x25197_25209 = pong.ui.spheres.CounterSphere;
x25197_25209.om$next$Ident$ = true;

x25197_25209.om$next$Ident$ident$arity$2 = ((function (x25197_25209){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x25197_25209))
;

x25197_25209.om$next$IQuery$ = true;

x25197_25209.om$next$IQuery$query$arity$1 = ((function (x25197_25209){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x25197_25209))
;


var x25199_25211 = pong.ui.spheres.CounterSphere.prototype;
x25199_25211.om$next$Ident$ = true;

x25199_25211.om$next$Ident$ident$arity$2 = ((function (x25199_25211){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x25199_25211))
;

x25199_25211.om$next$IQuery$ = true;

x25199_25211.om$next$IQuery$query$arity$1 = ((function (x25199_25211){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mult","mult",1466794774)], null);
});})(x25199_25211))
;


pong.ui.spheres.CounterSphere.cljs$lang$type = true;

pong.ui.spheres.CounterSphere.cljs$lang$ctorStr = "pong.ui.spheres/CounterSphere";

pong.ui.spheres.CounterSphere.cljs$lang$ctorPrWriter = (function (this__19538__auto__,writer__19539__auto__,opt__19540__auto__){
return cljs.core._write.call(null,writer__19539__auto__,"pong.ui.spheres/CounterSphere");
});
pong.ui.spheres.counter_sphere = om.next.factory.call(null,pong.ui.spheres.CounterSphere,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=spheres.js.map