// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.ui.counters');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
client.ui.counters.Counter = (function client$ui$counters$Counter(){
var this__24626__auto__ = this;
React.Component.apply(this__24626__auto__,arguments);

if(!((this__24626__auto__.initLocalState == null))){
this__24626__auto__.state = this__24626__auto__.initLocalState();
} else {
this__24626__auto__.state = {};
}

return this__24626__auto__;
});

client.ui.counters.Counter.prototype = goog.object.clone(React.Component.prototype);

var x26371_26381 = client.ui.counters.Counter.prototype;
x26371_26381.componentWillUpdate = ((function (x26371_26381){
return (function (next_props__24567__auto__,next_state__24568__auto__){
var this__24566__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__24566__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__24566__auto__);
});})(x26371_26381))
;

x26371_26381.shouldComponentUpdate = ((function (x26371_26381){
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
});})(x26371_26381))
;

x26371_26381.componentWillUnmount = ((function (x26371_26381){
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
});})(x26371_26381))
;

x26371_26381.componentDidUpdate = ((function (x26371_26381){
return (function (prev_props__24569__auto__,prev_state__24570__auto__){
var this__24566__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__24566__auto__);
});})(x26371_26381))
;

x26371_26381.isMounted = ((function (x26371_26381){
return (function (){
var this__24566__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__24566__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x26371_26381))
;

x26371_26381.componentWillMount = ((function (x26371_26381){
return (function (){
var this__24566__auto__ = this;
var indexer__24571__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__24566__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__24571__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__24571__auto__,this__24566__auto__);
}
});})(x26371_26381))
;

x26371_26381.render = ((function (x26371_26381){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_26372 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_26373 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_26374 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_26375 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_26376 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__26377 = om.next.props.call(null,this$);
var map__26377__$1 = ((((!((map__26377 == null)))?((((map__26377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26377):map__26377);
var props = map__26377__$1;
var id = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__26377__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Counter "),cljs.core.str(id),cljs.core.str(": "),cljs.core.str(value)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__26377,map__26377__$1,props,id,value,_STAR_reconciler_STAR_26372,_STAR_depth_STAR_26373,_STAR_shared_STAR_26374,_STAR_instrument_STAR_26375,_STAR_parent_STAR_26376,this$,x26371_26381){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"increment!","increment!",283705852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__26377,map__26377__$1,props,id,value,_STAR_reconciler_STAR_26372,_STAR_depth_STAR_26373,_STAR_shared_STAR_26374,_STAR_instrument_STAR_26375,_STAR_parent_STAR_26376,this$,x26371_26381))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_26376;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_26375;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_26374;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_26373;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_26372;
}});})(x26371_26381))
;


client.ui.counters.Counter.prototype.constructor = client.ui.counters.Counter;

client.ui.counters.Counter.prototype.om$isComponent = true;

var x26379_26382 = client.ui.counters.Counter;
x26379_26382.om$next$Ident$ = true;

x26379_26382.om$next$Ident$ident$arity$2 = ((function (x26379_26382){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26379_26382))
;

x26379_26382.om$next$IQuery$ = true;

x26379_26382.om$next$IQuery$query$arity$1 = ((function (x26379_26382){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x26379_26382))
;


var x26380_26383 = client.ui.counters.Counter.prototype;
x26380_26383.om$next$Ident$ = true;

x26380_26383.om$next$Ident$ident$arity$2 = ((function (x26380_26383){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x26380_26383))
;

x26380_26383.om$next$IQuery$ = true;

x26380_26383.om$next$IQuery$query$arity$1 = ((function (x26380_26383){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x26380_26383))
;


client.ui.counters.Counter.cljs$lang$type = true;

client.ui.counters.Counter.cljs$lang$ctorStr = "client.ui.counters/Counter";

client.ui.counters.Counter.cljs$lang$ctorPrWriter = (function (this__24628__auto__,writer__24629__auto__,opt__24630__auto__){
return cljs.core._write.call(null,writer__24629__auto__,"client.ui.counters/Counter");
});
client.ui.counters.counter = om.next.factory.call(null,client.ui.counters.Counter);

//# sourceMappingURL=counters.js.map