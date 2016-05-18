// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.counters');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
pong.ui.counters.Counter = (function pong$ui$counters$Counter(){
var this__32943__auto__ = this;
React.Component.apply(this__32943__auto__,arguments);

if(!((this__32943__auto__.initLocalState == null))){
this__32943__auto__.state = this__32943__auto__.initLocalState();
} else {
this__32943__auto__.state = {};
}

return this__32943__auto__;
});

pong.ui.counters.Counter.prototype = goog.object.clone(React.Component.prototype);

var x40226_40247 = pong.ui.counters.Counter.prototype;
x40226_40247.componentWillUpdate = ((function (x40226_40247){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
if(((!((this__32878__auto__ == null)))?(((false) || (this__32878__auto__.om$next$Ident$))?true:false):false)){
var ident__32882__auto___40248 = om.next.ident.call(null,this__32878__auto__,om.next.props.call(null,this__32878__auto__));
var next_ident__32883__auto___40249 = om.next.ident.call(null,this__32878__auto__,om.next._next_props.call(null,next_props__32879__auto__,this__32878__auto__));
if(cljs.core.not_EQ_.call(null,ident__32882__auto___40248,next_ident__32883__auto___40249)){
var idxr__32884__auto___40250 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32884__auto___40250 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32884__auto___40250),((function (idxr__32884__auto___40250,ident__32882__auto___40248,next_ident__32883__auto___40249,this__32878__auto__,x40226_40247){
return (function (indexes__32885__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32885__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32882__auto___40248], null),cljs.core.disj,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32883__auto___40249], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32878__auto__);
});})(idxr__32884__auto___40250,ident__32882__auto___40248,next_ident__32883__auto___40249,this__32878__auto__,x40226_40247))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32878__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32878__auto__);
});})(x40226_40247))
;

x40226_40247.shouldComponentUpdate = ((function (x40226_40247){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
var next_children__32881__auto__ = next_props__32879__auto__.children;
var next_props__32879__auto____$1 = goog.object.get(next_props__32879__auto__,"omcljs$value");
var next_props__32879__auto____$2 = (function (){var G__40232 = next_props__32879__auto____$1;
if((next_props__32879__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__40232);
} else {
return G__40232;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32878__auto__),next_props__32879__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__32878__auto__.state;
if(and__18714__auto__){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32878__auto__.state,"omcljs$state"),goog.object.get(next_state__32880__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(or__18726__auto____$1){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32878__auto__.props.children,next_children__32881__auto__);
}
}
});})(x40226_40247))
;

x40226_40247.componentWillUnmount = ((function (x40226_40247){
return (function (){
var this__32878__auto__ = this;
var r__32889__auto__ = om.next.get_reconciler.call(null,this__32878__auto__);
var cfg__32890__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32889__auto__);
var st__32891__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
var indexer__32888__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
if((function (){var and__18714__auto__ = !((st__32891__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32878__auto__], null));
} else {
return and__18714__auto__;
}
})()){
cljs.core.swap_BANG_.call(null,st__32891__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32878__auto__);
} else {
}

if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40226_40247))
;

x40226_40247.componentDidUpdate = ((function (x40226_40247){
return (function (prev_props__32886__auto__,prev_state__32887__auto__){
var this__32878__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32878__auto__);
});})(x40226_40247))
;

x40226_40247.isMounted = ((function (x40226_40247){
return (function (){
var this__32878__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32878__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x40226_40247))
;

x40226_40247.componentWillMount = ((function (x40226_40247){
return (function (){
var this__32878__auto__ = this;
var indexer__32888__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40226_40247))
;

x40226_40247.render = ((function (x40226_40247){
return (function (){
var this__32877__auto__ = this;
var this$ = this__32877__auto__;
var _STAR_reconciler_STAR_40233 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40234 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_40235 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_40236 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_40237 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32877__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32877__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32877__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32877__auto__);

om.next._STAR_parent_STAR_ = this__32877__auto__;

try{var map__40238 = om.next.props.call(null,this$);
var map__40238__$1 = ((((!((map__40238 == null)))?((((map__40238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40238):map__40238);
var props = map__40238__$1;
var id = cljs.core.get.call(null,map__40238__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var value = cljs.core.get.call(null,map__40238__$1,new cljs.core.Keyword(null,"value","value",305978217));
return React.DOM.div(null,om.util.force_children.call(null,[cljs.core.str("Counter "),cljs.core.str(id),cljs.core.str(": "),cljs.core.str(value)].join('')),om.util.force_children.call(null,React.DOM.button({"onClick": ((function (map__40238,map__40238__$1,props,id,value,_STAR_reconciler_STAR_40233,_STAR_depth_STAR_40234,_STAR_shared_STAR_40235,_STAR_instrument_STAR_40236,_STAR_parent_STAR_40237,this$,this__32877__auto__,x40226_40247){
return (function (e){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"increment!","increment!",283705852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__40238,map__40238__$1,props,id,value,_STAR_reconciler_STAR_40233,_STAR_depth_STAR_40234,_STAR_shared_STAR_40235,_STAR_instrument_STAR_40236,_STAR_parent_STAR_40237,this$,this__32877__auto__,x40226_40247))
},om.util.force_children.call(null,"Click me!"))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_40237;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_40236;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_40235;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_40234;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40233;
}});})(x40226_40247))
;


pong.ui.counters.Counter.prototype.constructor = pong.ui.counters.Counter;

pong.ui.counters.Counter.prototype.constructor.displayName = "pong.ui.counters/Counter";

pong.ui.counters.Counter.prototype.om$isComponent = true;

var x40240_40384 = pong.ui.counters.Counter;
x40240_40384.om$next$Ident$ = true;

x40240_40384.om$next$Ident$ident$arity$2 = ((function (x40240_40384){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40240_40384))
;

x40240_40384.om$next$IQuery$ = true;

x40240_40384.om$next$IQuery$query$arity$1 = ((function (x40240_40384){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x40240_40384))
;


var x40241_40398 = pong.ui.counters.Counter.prototype;
x40241_40398.om$next$Ident$ = true;

x40241_40398.om$next$Ident$ident$arity$2 = ((function (x40241_40398){
return (function (_,props){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x40241_40398))
;

x40241_40398.om$next$IQuery$ = true;

x40241_40398.om$next$IQuery$query$arity$1 = ((function (x40241_40398){
return (function (_){
var ___$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"value","value",305978217)], null);
});})(x40241_40398))
;


pong.ui.counters.Counter.cljs$lang$type = true;

pong.ui.counters.Counter.cljs$lang$ctorStr = "pong.ui.counters/Counter";

pong.ui.counters.Counter.cljs$lang$ctorPrWriter = (function (this__32945__auto__,writer__32946__auto__,opt__32947__auto__){
return cljs.core._write.call(null,writer__32946__auto__,"pong.ui.counters/Counter");
});
pong.ui.counters.counter = om.next.factory.call(null,pong.ui.counters.Counter,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"id","id",-1388402092)], null));

//# sourceMappingURL=counters.js.map