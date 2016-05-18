// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.counters');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
pong.ui.counters.Counter = (function pong$ui$counters$Counter(){
var this__21598__auto__ = this;
React.Component.apply(this__21598__auto__,arguments);

if(!((this__21598__auto__.initLocalState == null))){
this__21598__auto__.state = this__21598__auto__.initLocalState();
} else {
this__21598__auto__.state = {};
}

return this__21598__auto__;
});

pong.ui.counters.Counter.prototype = goog.object.clone(React.Component.prototype);

var x22743_22793 = pong.ui.counters.Counter.prototype;
x22743_22793.componentWillUpdate = ((function (x22743_22793){
return (function (next_props__21522__auto__,next_state__21523__auto__){
var this__21521__auto__ = this;
if(((!((this__21521__auto__ == null)))?(((false) || (this__21521__auto__.om$next$Ident$))?true:false):false)){
var ident__21525__auto___22794 = om.next.ident.call(null,this__21521__auto__,om.next.props.call(null,this__21521__auto__));
var next_ident__21526__auto___22795 = om.next.ident.call(null,this__21521__auto__,om.next._next_props.call(null,next_props__21522__auto__,this__21521__auto__));
if(cljs.core.not_EQ_.call(null,ident__21525__auto___22794,next_ident__21526__auto___22795)){
var idxr__21527__auto___22796 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__21527__auto___22796 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__21527__auto___22796),((function (idxr__21527__auto___22796,ident__21525__auto___22794,next_ident__21526__auto___22795,this__21521__auto__,x22743_22793){
return (function (indexes__21528__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__21528__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__21525__auto___22794], null),cljs.core.disj,this__21521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__21526__auto___22795], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__21521__auto__);
});})(idxr__21527__auto___22796,ident__21525__auto___22794,next_ident__21526__auto___22795,this__21521__auto__,x22743_22793))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__21521__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21521__auto__);
});})(x22743_22793))
;

x22743_22793.shouldComponentUpdate = ((function (x22743_22793){
return (function (next_props__21522__auto__,next_state__21523__auto__){
var this__21521__auto__ = this;
var next_children__21524__auto__ = next_props__21522__auto__.children;
var next_props__21522__auto____$1 = goog.object.get(next_props__21522__auto__,"omcljs$value");
var next_props__21522__auto____$2 = (function (){var G__22745 = next_props__21522__auto____$1;
if((next_props__21522__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__22745);
} else {
return G__22745;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21521__auto__),next_props__21522__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__21521__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21521__auto__.state,"omcljs$state"),goog.object.get(next_state__21523__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__21521__auto__.props.children,next_children__21524__auto__);
}
}
});})(x22743_22793))
;

x22743_22793.componentWillUnmount = ((function (x22743_22793){
return (function (){
var this__21521__auto__ = this;
var r__21532__auto__ = om.next.get_reconciler.call(null,this__21521__auto__);
var cfg__21533__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21532__auto__);
var st__21534__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21533__auto__);
var indexer__21531__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21533__auto__);
if(cljs.core.truth_((function (){var and__18714__auto__ = !((st__21534__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__21534__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__21521__auto__], null));
} else {
return and__18714__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__21534__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21521__auto__);
} else {
}

if((indexer__21531__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21531__auto__,this__21521__auto__);
}
});})(x22743_22793))
;

x22743_22793.componentDidUpdate = ((function (x22743_22793){
return (function (prev_props__21529__auto__,prev_state__21530__auto__){
var this__21521__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21521__auto__);
});})(x22743_22793))
;

x22743_22793.isMounted = ((function (x22743_22793){
return (function (){
var this__21521__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21521__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22743_22793))
;

x22743_22793.componentWillMount = ((function (x22743_22793){
return (function (){
var this__21521__auto__ = this;
var indexer__21531__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21521__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21531__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21531__auto__,this__21521__auto__);
}
});})(x22743_22793))
;

x22743_22793.render = ((function (x22743_22793){
return (function (){
var this__21520__auto__ = this;
var this$ = this__21520__auto__;
var _STAR_reconciler_STAR_22766 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22767 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22768 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22769 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22770 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21520__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21520__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21520__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21520__auto__);

om.next._STAR_parent_STAR_ = this__21520__auto__;

try{var map__22777 = om.next.props.call(null,this$);
var map__22777__$1 = ((((!((map__22777 == null)))?((((map__22777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22777):map__22777);
var props = map__22777__$1;
var id = cljs.core.get.call(null,map__22777__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__22777__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str("Counter "),cljs.core.str(id),cljs.core.str(": "),cljs.core.str(value)].join('')),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__22777,map__22777__$1,props,id,value,_STAR_reconciler_STAR_22766,_STAR_depth_STAR_22767,_STAR_shared_STAR_22768,_STAR_instrument_STAR_22769,_STAR_parent_STAR_22770,this$,this__21520__auto__,x22743_22793){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"increment!","increment!",283705852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__22777,map__22777__$1,props,id,value,_STAR_reconciler_STAR_22766,_STAR_depth_STAR_22767,_STAR_shared_STAR_22768,_STAR_instrument_STAR_22769,_STAR_parent_STAR_22770,this$,this__21520__auto__,x22743_22793))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22770;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22769;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22768;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22767;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22766;
}});})(x22743_22793))
;


pong.ui.counters.Counter.prototype.constructor = pong.ui.counters.Counter;

pong.ui.counters.Counter.prototype.constructor.displayName = "pong.ui.counters/Counter";

pong.ui.counters.Counter.prototype.om$isComponent = true;

var x22787_22882 = pong.ui.counters.Counter;
x22787_22882.om$next$Ident$ = true;

x22787_22882.om$next$Ident$ident$arity$2 = ((function (x22787_22882){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22787_22882))
;

x22787_22882.om$next$IQuery$ = true;

x22787_22882.om$next$IQuery$query$arity$1 = ((function (x22787_22882){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x22787_22882))
;


var x22792_22886 = pong.ui.counters.Counter.prototype;
x22792_22886.om$next$Ident$ = true;

x22792_22886.om$next$Ident$ident$arity$2 = ((function (x22792_22886){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x22792_22886))
;

x22792_22886.om$next$IQuery$ = true;

x22792_22886.om$next$IQuery$query$arity$1 = ((function (x22792_22886){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x22792_22886))
;


pong.ui.counters.Counter.cljs$lang$type = true;

pong.ui.counters.Counter.cljs$lang$ctorStr = "pong.ui.counters/Counter";

pong.ui.counters.Counter.cljs$lang$ctorPrWriter = (function (this__21600__auto__,writer__21601__auto__,opt__21602__auto__){
return cljs.core._write.call(null,writer__21601__auto__,"pong.ui.counters/Counter");
});
pong.ui.counters.counter = om.next.factory.call(null,pong.ui.counters.Counter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=counters.js.map