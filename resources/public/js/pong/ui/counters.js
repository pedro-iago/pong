// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.counters');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
pong.ui.counters.Counter = (function pong$ui$counters$Counter(){
var this__21209__auto__ = this;
React.Component.apply(this__21209__auto__,arguments);

if(!((this__21209__auto__.initLocalState == null))){
this__21209__auto__.state = this__21209__auto__.initLocalState();
} else {
this__21209__auto__.state = {};
}

return this__21209__auto__;
});

pong.ui.counters.Counter.prototype = goog.object.clone(React.Component.prototype);

var x34663_34673 = pong.ui.counters.Counter.prototype;
x34663_34673.componentWillUpdate = ((function (x34663_34673){
return (function (next_props__21150__auto__,next_state__21151__auto__){
var this__21149__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21149__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21149__auto__);
});})(x34663_34673))
;

x34663_34673.shouldComponentUpdate = ((function (x34663_34673){
return (function (next_props__21150__auto__,next_state__21151__auto__){
var this__21149__auto__ = this;
var or__18102__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21149__auto__),goog.object.get(next_props__21150__auto__,"omcljs$value"));
if(or__18102__auto__){
return or__18102__auto__;
} else {
var and__18090__auto__ = this__21149__auto__.state;
if(cljs.core.truth_(and__18090__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21149__auto__.state,"omcljs$state"),goog.object.get(next_state__21151__auto__,"omcljs$state"));
} else {
return and__18090__auto__;
}
}
});})(x34663_34673))
;

x34663_34673.componentWillUnmount = ((function (x34663_34673){
return (function (){
var this__21149__auto__ = this;
var r__21155__auto__ = om.next.get_reconciler.call(null,this__21149__auto__);
var cfg__21156__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21155__auto__);
var st__21157__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21156__auto__);
var indexer__21154__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21156__auto__);
if((st__21157__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21157__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21149__auto__);
}

if((indexer__21154__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21154__auto__,this__21149__auto__);
}
});})(x34663_34673))
;

x34663_34673.componentDidUpdate = ((function (x34663_34673){
return (function (prev_props__21152__auto__,prev_state__21153__auto__){
var this__21149__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21149__auto__);
});})(x34663_34673))
;

x34663_34673.isMounted = ((function (x34663_34673){
return (function (){
var this__21149__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21149__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34663_34673))
;

x34663_34673.componentWillMount = ((function (x34663_34673){
return (function (){
var this__21149__auto__ = this;
var indexer__21154__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21149__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21154__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21154__auto__,this__21149__auto__);
}
});})(x34663_34673))
;

x34663_34673.render = ((function (x34663_34673){
return (function (){
var this__21148__auto__ = this;
var this$ = this__21148__auto__;
var _STAR_reconciler_STAR_34664 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34665 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34666 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34667 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34668 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21148__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21148__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21148__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21148__auto__);

om.next._STAR_parent_STAR_ = this__21148__auto__;

try{var map__34669 = om.next.props.call(null,this$);
var map__34669__$1 = ((((!((map__34669 == null)))?((((map__34669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34669):map__34669);
var props = map__34669__$1;
var id = cljs.core.get.call(null,map__34669__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__34669__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Counter "),cljs.core.str(id),cljs.core.str(": "),cljs.core.str(value)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__34669,map__34669__$1,props,id,value,_STAR_reconciler_STAR_34664,_STAR_depth_STAR_34665,_STAR_shared_STAR_34666,_STAR_instrument_STAR_34667,_STAR_parent_STAR_34668,this$,this__21148__auto__,x34663_34673){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"increment!","increment!",283705852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__34669,map__34669__$1,props,id,value,_STAR_reconciler_STAR_34664,_STAR_depth_STAR_34665,_STAR_shared_STAR_34666,_STAR_instrument_STAR_34667,_STAR_parent_STAR_34668,this$,this__21148__auto__,x34663_34673))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34668;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34667;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34666;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34665;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34664;
}});})(x34663_34673))
;


pong.ui.counters.Counter.prototype.constructor = pong.ui.counters.Counter;

pong.ui.counters.Counter.prototype.constructor.displayName = "pong.ui.counters/Counter";

pong.ui.counters.Counter.prototype.om$isComponent = true;

var x34671_34674 = pong.ui.counters.Counter;
x34671_34674.om$next$Ident$ = true;

x34671_34674.om$next$Ident$ident$arity$2 = ((function (x34671_34674){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x34671_34674))
;

x34671_34674.om$next$IQuery$ = true;

x34671_34674.om$next$IQuery$query$arity$1 = ((function (x34671_34674){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x34671_34674))
;


var x34672_34675 = pong.ui.counters.Counter.prototype;
x34672_34675.om$next$Ident$ = true;

x34672_34675.om$next$Ident$ident$arity$2 = ((function (x34672_34675){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x34672_34675))
;

x34672_34675.om$next$IQuery$ = true;

x34672_34675.om$next$IQuery$query$arity$1 = ((function (x34672_34675){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x34672_34675))
;


pong.ui.counters.Counter.cljs$lang$type = true;

pong.ui.counters.Counter.cljs$lang$ctorStr = "pong.ui.counters/Counter";

pong.ui.counters.Counter.cljs$lang$ctorPrWriter = (function (this__21211__auto__,writer__21212__auto__,opt__21213__auto__){
return cljs.core._write.call(null,writer__21212__auto__,"pong.ui.counters/Counter");
});
pong.ui.counters.counter = om.next.factory.call(null,pong.ui.counters.Counter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=counters.js.map