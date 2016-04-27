// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.counters');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
pong.ui.counters.Counter = (function pong$ui$counters$Counter(){
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.ui.counters.Counter.prototype = goog.object.clone(React.Component.prototype);

var x39147_39192 = pong.ui.counters.Counter.prototype;
x39147_39192.componentWillUpdate = ((function (x39147_39192){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x39147_39192))
;

x39147_39192.shouldComponentUpdate = ((function (x39147_39192){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32061__auto__),goog.object.get(next_props__32062__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__32061__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32061__auto__.state,"omcljs$state"),goog.object.get(next_state__32063__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x39147_39192))
;

x39147_39192.componentWillUnmount = ((function (x39147_39192){
return (function (){
var this__32061__auto__ = this;
var r__32067__auto__ = om.next.get_reconciler.call(null,this__32061__auto__);
var cfg__32068__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32067__auto__);
var st__32069__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32068__auto__);
var indexer__32066__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32068__auto__);
if((st__32069__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__32069__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32061__auto__);
}

if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x39147_39192))
;

x39147_39192.componentDidUpdate = ((function (x39147_39192){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x39147_39192))
;

x39147_39192.isMounted = ((function (x39147_39192){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x39147_39192))
;

x39147_39192.componentWillMount = ((function (x39147_39192){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x39147_39192))
;

x39147_39192.render = ((function (x39147_39192){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_39182 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_39183 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_39184 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_39185 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_39186 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{var map__39187 = om.next.props.call(null,this$);
var map__39187__$1 = ((((!((map__39187 == null)))?((((map__39187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39187):map__39187);
var props = map__39187__$1;
var id = cljs.core.get.call(null,map__39187__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__39187__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div(null,om.util.force_children.call(null,React.DOM.span(null,om.util.force_children.call(null,[cljs.core.str("Counter "),cljs.core.str(id),cljs.core.str(": "),cljs.core.str(value)].join('')))),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__39187,map__39187__$1,props,id,value,_STAR_reconciler_STAR_39182,_STAR_depth_STAR_39183,_STAR_shared_STAR_39184,_STAR_instrument_STAR_39185,_STAR_parent_STAR_39186,this$,this__32060__auto__,x39147_39192){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"increment!","increment!",283705852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__39187,map__39187__$1,props,id,value,_STAR_reconciler_STAR_39182,_STAR_depth_STAR_39183,_STAR_shared_STAR_39184,_STAR_instrument_STAR_39185,_STAR_parent_STAR_39186,this$,this__32060__auto__,x39147_39192))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_39186;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_39185;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_39184;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_39183;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_39182;
}});})(x39147_39192))
;


pong.ui.counters.Counter.prototype.constructor = pong.ui.counters.Counter;

pong.ui.counters.Counter.prototype.constructor.displayName = "pong.ui.counters/Counter";

pong.ui.counters.Counter.prototype.om$isComponent = true;

var x39189_39223 = pong.ui.counters.Counter;
x39189_39223.om$next$Ident$ = true;

x39189_39223.om$next$Ident$ident$arity$2 = ((function (x39189_39223){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x39189_39223))
;

x39189_39223.om$next$IQuery$ = true;

x39189_39223.om$next$IQuery$query$arity$1 = ((function (x39189_39223){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x39189_39223))
;


var x39190_39266 = pong.ui.counters.Counter.prototype;
x39190_39266.om$next$Ident$ = true;

x39190_39266.om$next$Ident$ident$arity$2 = ((function (x39190_39266){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x39190_39266))
;

x39190_39266.om$next$IQuery$ = true;

x39190_39266.om$next$IQuery$query$arity$1 = ((function (x39190_39266){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x39190_39266))
;


pong.ui.counters.Counter.cljs$lang$type = true;

pong.ui.counters.Counter.cljs$lang$ctorStr = "pong.ui.counters/Counter";

pong.ui.counters.Counter.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.ui.counters/Counter");
});
pong.ui.counters.counter = om.next.factory.call(null,pong.ui.counters.Counter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=counters.js.map