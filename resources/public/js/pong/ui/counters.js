// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.counters');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
pong.ui.counters.Counter = (function pong$ui$counters$Counter(){
var this__20218__auto__ = this;
React.Component.apply(this__20218__auto__,arguments);

if(!((this__20218__auto__.initLocalState == null))){
this__20218__auto__.state = this__20218__auto__.initLocalState();
} else {
this__20218__auto__.state = {};
}

return this__20218__auto__;
});

pong.ui.counters.Counter.prototype = goog.object.clone(React.Component.prototype);

var x20255_20265 = pong.ui.counters.Counter.prototype;
x20255_20265.componentWillUpdate = ((function (x20255_20265){
return (function (next_props__20159__auto__,next_state__20160__auto__){
var this__20158__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20158__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20158__auto__);
});})(x20255_20265))
;

x20255_20265.shouldComponentUpdate = ((function (x20255_20265){
return (function (next_props__20159__auto__,next_state__20160__auto__){
var this__20158__auto__ = this;
var or__18089__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20158__auto__),goog.object.get(next_props__20159__auto__,"omcljs$value"));
if(or__18089__auto__){
return or__18089__auto__;
} else {
var and__18077__auto__ = this__20158__auto__.state;
if(cljs.core.truth_(and__18077__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20158__auto__.state,"omcljs$state"),goog.object.get(next_state__20160__auto__,"omcljs$state"));
} else {
return and__18077__auto__;
}
}
});})(x20255_20265))
;

x20255_20265.componentWillUnmount = ((function (x20255_20265){
return (function (){
var this__20158__auto__ = this;
var r__20164__auto__ = om.next.get_reconciler.call(null,this__20158__auto__);
var cfg__20165__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20164__auto__);
var st__20166__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20165__auto__);
var indexer__20163__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20165__auto__);
if((st__20166__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20166__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20158__auto__);
}

if((indexer__20163__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20163__auto__,this__20158__auto__);
}
});})(x20255_20265))
;

x20255_20265.componentDidUpdate = ((function (x20255_20265){
return (function (prev_props__20161__auto__,prev_state__20162__auto__){
var this__20158__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20158__auto__);
});})(x20255_20265))
;

x20255_20265.isMounted = ((function (x20255_20265){
return (function (){
var this__20158__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20158__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20255_20265))
;

x20255_20265.componentWillMount = ((function (x20255_20265){
return (function (){
var this__20158__auto__ = this;
var indexer__20163__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20158__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20163__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20163__auto__,this__20158__auto__);
}
});})(x20255_20265))
;

x20255_20265.render = ((function (x20255_20265){
return (function (){
var this__20157__auto__ = this;
var this$ = this__20157__auto__;
var _STAR_reconciler_STAR_20256 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20257 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20258 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20259 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20260 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20157__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20157__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20157__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20157__auto__);

om.next._STAR_parent_STAR_ = this__20157__auto__;

try{var map__20261 = om.next.props.call(null,this$);
var map__20261__$1 = ((((!((map__20261 == null)))?((((map__20261.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20261.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20261):map__20261);
var props = map__20261__$1;
var id = cljs.core.get.call(null,map__20261__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__20261__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Counter "),cljs.core.str(id),cljs.core.str(": "),cljs.core.str(value)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20261,map__20261__$1,props,id,value,_STAR_reconciler_STAR_20256,_STAR_depth_STAR_20257,_STAR_shared_STAR_20258,_STAR_instrument_STAR_20259,_STAR_parent_STAR_20260,this$,this__20157__auto__,x20255_20265){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"increment!","increment!",283705852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__20261,map__20261__$1,props,id,value,_STAR_reconciler_STAR_20256,_STAR_depth_STAR_20257,_STAR_shared_STAR_20258,_STAR_instrument_STAR_20259,_STAR_parent_STAR_20260,this$,this__20157__auto__,x20255_20265))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20260;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20259;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20258;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20257;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20256;
}});})(x20255_20265))
;


pong.ui.counters.Counter.prototype.constructor = pong.ui.counters.Counter;

pong.ui.counters.Counter.prototype.constructor.displayName = "pong.ui.counters/Counter";

pong.ui.counters.Counter.prototype.om$isComponent = true;

var x20263_20266 = pong.ui.counters.Counter;
x20263_20266.om$next$Ident$ = true;

x20263_20266.om$next$Ident$ident$arity$2 = ((function (x20263_20266){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x20263_20266))
;

x20263_20266.om$next$IQuery$ = true;

x20263_20266.om$next$IQuery$query$arity$1 = ((function (x20263_20266){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x20263_20266))
;


var x20264_20267 = pong.ui.counters.Counter.prototype;
x20264_20267.om$next$Ident$ = true;

x20264_20267.om$next$Ident$ident$arity$2 = ((function (x20264_20267){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x20264_20267))
;

x20264_20267.om$next$IQuery$ = true;

x20264_20267.om$next$IQuery$query$arity$1 = ((function (x20264_20267){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x20264_20267))
;


pong.ui.counters.Counter.cljs$lang$type = true;

pong.ui.counters.Counter.cljs$lang$ctorStr = "pong.ui.counters/Counter";

pong.ui.counters.Counter.cljs$lang$ctorPrWriter = (function (this__20220__auto__,writer__20221__auto__,opt__20222__auto__){
return cljs.core._write.call(null,writer__20221__auto__,"pong.ui.counters/Counter");
});
pong.ui.counters.counter = om.next.factory.call(null,pong.ui.counters.Counter);

//# sourceMappingURL=counters.js.map