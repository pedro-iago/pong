// Compiled by ClojureScript 1.7.170 {}
goog.provide('client.ui.counters');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
client.ui.counters.Counter = (function client$ui$counters$Counter(){
var this__18785__auto__ = this;
React.Component.apply(this__18785__auto__,arguments);

if(!((this__18785__auto__.initLocalState == null))){
this__18785__auto__.state = this__18785__auto__.initLocalState();
} else {
this__18785__auto__.state = {};
}

return this__18785__auto__;
});

client.ui.counters.Counter.prototype = goog.object.clone(React.Component.prototype);

var x20734_20744 = client.ui.counters.Counter.prototype;
x20734_20744.componentWillUpdate = ((function (x20734_20744){
return (function (next_props__18726__auto__,next_state__18727__auto__){
var this__18725__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18725__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18725__auto__);
});})(x20734_20744))
;

x20734_20744.shouldComponentUpdate = ((function (x20734_20744){
return (function (next_props__18726__auto__,next_state__18727__auto__){
var this__18725__auto__ = this;
var or__16700__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18725__auto__),goog.object.get(next_props__18726__auto__,"omcljs$value"));
if(or__16700__auto__){
return or__16700__auto__;
} else {
var and__16688__auto__ = this__18725__auto__.state;
if(cljs.core.truth_(and__16688__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18725__auto__.state,"omcljs$state"),goog.object.get(next_state__18727__auto__,"omcljs$state"));
} else {
return and__16688__auto__;
}
}
});})(x20734_20744))
;

x20734_20744.componentWillUnmount = ((function (x20734_20744){
return (function (){
var this__18725__auto__ = this;
var r__18731__auto__ = om.next.get_reconciler.call(null,this__18725__auto__);
var cfg__18732__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18731__auto__);
var st__18733__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18732__auto__);
var indexer__18730__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18732__auto__);
if((st__18733__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18733__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18725__auto__);
}

if((indexer__18730__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18730__auto__,this__18725__auto__);
}
});})(x20734_20744))
;

x20734_20744.componentDidUpdate = ((function (x20734_20744){
return (function (prev_props__18728__auto__,prev_state__18729__auto__){
var this__18725__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18725__auto__);
});})(x20734_20744))
;

x20734_20744.isMounted = ((function (x20734_20744){
return (function (){
var this__18725__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18725__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20734_20744))
;

x20734_20744.componentWillMount = ((function (x20734_20744){
return (function (){
var this__18725__auto__ = this;
var indexer__18730__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18725__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18730__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18730__auto__,this__18725__auto__);
}
});})(x20734_20744))
;

x20734_20744.render = ((function (x20734_20744){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20735 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20736 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20737 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20738 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20739 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20740 = om.next.props.call(null,this$);
var map__20740__$1 = ((((!((map__20740 == null)))?((((map__20740.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20740.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20740):map__20740);
var props = map__20740__$1;
var id = cljs.core.get.call(null,map__20740__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__20740__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Counter "),cljs.core.str(id),cljs.core.str(": "),cljs.core.str(value)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__20740,map__20740__$1,props,id,value,_STAR_reconciler_STAR_20735,_STAR_depth_STAR_20736,_STAR_shared_STAR_20737,_STAR_instrument_STAR_20738,_STAR_parent_STAR_20739,this$,x20734_20744){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"increment!","increment!",283705852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__20740,map__20740__$1,props,id,value,_STAR_reconciler_STAR_20735,_STAR_depth_STAR_20736,_STAR_shared_STAR_20737,_STAR_instrument_STAR_20738,_STAR_parent_STAR_20739,this$,x20734_20744))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20739;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20738;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20737;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20736;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20735;
}});})(x20734_20744))
;


client.ui.counters.Counter.prototype.constructor = client.ui.counters.Counter;

client.ui.counters.Counter.prototype.om$isComponent = true;

var x20742_20745 = client.ui.counters.Counter;
x20742_20745.om$next$Ident$ = true;

x20742_20745.om$next$Ident$ident$arity$2 = ((function (x20742_20745){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x20742_20745))
;

x20742_20745.om$next$IQuery$ = true;

x20742_20745.om$next$IQuery$query$arity$1 = ((function (x20742_20745){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x20742_20745))
;


var x20743_20746 = client.ui.counters.Counter.prototype;
x20743_20746.om$next$Ident$ = true;

x20743_20746.om$next$Ident$ident$arity$2 = ((function (x20743_20746){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x20743_20746))
;

x20743_20746.om$next$IQuery$ = true;

x20743_20746.om$next$IQuery$query$arity$1 = ((function (x20743_20746){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x20743_20746))
;


client.ui.counters.Counter.cljs$lang$type = true;

client.ui.counters.Counter.cljs$lang$ctorStr = "client.ui.counters/Counter";

client.ui.counters.Counter.cljs$lang$ctorPrWriter = (function (this__18787__auto__,writer__18788__auto__,opt__18789__auto__){
return cljs.core._write.call(null,writer__18788__auto__,"client.ui.counters/Counter");
});
client.ui.counters.counter = om.next.factory.call(null,client.ui.counters.Counter);

//# sourceMappingURL=counters.js.map