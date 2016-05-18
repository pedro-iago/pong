// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('pong.systems');
goog.require('pong.aframe_react');
goog.require('om.dom');
goog.require('pong.utils');
goog.require('pong.parser');
goog.require('pong.scripts');
goog.require('pong.ui.scenes');
goog.require('clojure.data.avl');
goog.require('pong.ui.counters');
goog.require('om.next');
goog.require('pong.ui.spheres');
/**
 * @constructor
 */
pong.core.App = (function pong$core$App(){
var this__32943__auto__ = this;
React.Component.apply(this__32943__auto__,arguments);

if(!((this__32943__auto__.initLocalState == null))){
this__32943__auto__.state = this__32943__auto__.initLocalState();
} else {
this__32943__auto__.state = {};
}

return this__32943__auto__;
});

pong.core.App.prototype = goog.object.clone(React.Component.prototype);

var x40653_40674 = pong.core.App.prototype;
x40653_40674.componentWillUpdate = ((function (x40653_40674){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
if(((!((this__32878__auto__ == null)))?(((false) || (this__32878__auto__.om$next$Ident$))?true:false):false)){
var ident__32882__auto___40675 = om.next.ident.call(null,this__32878__auto__,om.next.props.call(null,this__32878__auto__));
var next_ident__32883__auto___40676 = om.next.ident.call(null,this__32878__auto__,om.next._next_props.call(null,next_props__32879__auto__,this__32878__auto__));
if(cljs.core.not_EQ_.call(null,ident__32882__auto___40675,next_ident__32883__auto___40676)){
var idxr__32884__auto___40679 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32884__auto___40679 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32884__auto___40679),((function (idxr__32884__auto___40679,ident__32882__auto___40675,next_ident__32883__auto___40676,this__32878__auto__,x40653_40674){
return (function (indexes__32885__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32885__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32882__auto___40675], null),cljs.core.disj,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32883__auto___40676], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32878__auto__);
});})(idxr__32884__auto___40679,ident__32882__auto___40675,next_ident__32883__auto___40676,this__32878__auto__,x40653_40674))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32878__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32878__auto__);
});})(x40653_40674))
;

x40653_40674.shouldComponentUpdate = ((function (x40653_40674){
return (function (next_props__32879__auto__,next_state__32880__auto__){
var this__32878__auto__ = this;
var next_children__32881__auto__ = next_props__32879__auto__.children;
var next_props__32879__auto____$1 = goog.object.get(next_props__32879__auto__,"omcljs$value");
var next_props__32879__auto____$2 = (function (){var G__40659 = next_props__32879__auto____$1;
if((next_props__32879__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__40659);
} else {
return G__40659;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32878__auto__),next_props__32879__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__32878__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32878__auto__.state,"omcljs$state"),goog.object.get(next_state__32880__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32878__auto__.props.children,next_children__32881__auto__);
}
}
});})(x40653_40674))
;

x40653_40674.componentWillUnmount = ((function (x40653_40674){
return (function (){
var this__32878__auto__ = this;
var r__32889__auto__ = om.next.get_reconciler.call(null,this__32878__auto__);
var cfg__32890__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32889__auto__);
var st__32891__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
var indexer__32888__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32890__auto__);
if(cljs.core.truth_((function (){var and__18714__auto__ = !((st__32891__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32891__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32878__auto__], null));
} else {
return and__18714__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32891__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32878__auto__);
} else {
}

if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40653_40674))
;

x40653_40674.componentDidUpdate = ((function (x40653_40674){
return (function (prev_props__32886__auto__,prev_state__32887__auto__){
var this__32878__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32878__auto__);
});})(x40653_40674))
;

x40653_40674.isMounted = ((function (x40653_40674){
return (function (){
var this__32878__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32878__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x40653_40674))
;

x40653_40674.componentWillMount = ((function (x40653_40674){
return (function (){
var this__32878__auto__ = this;
var indexer__32888__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32878__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32888__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32888__auto__,this__32878__auto__);
}
});})(x40653_40674))
;

x40653_40674.render = ((function (x40653_40674){
return (function (){
var this__32877__auto__ = this;
var this$ = this__32877__auto__;
var _STAR_reconciler_STAR_40662 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_40663 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_40664 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_40665 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_40666 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32877__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32877__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32877__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32877__auto__);

om.next._STAR_parent_STAR_ = this__32877__auto__;

try{var map__40667 = om.next.props.call(null,this$);
var map__40667__$1 = ((((!((map__40667 == null)))?((((map__40667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40667):map__40667);
var counts = cljs.core.get.call(null,map__40667__$1,new cljs.core.Keyword(null,"counts","counts",234305892));
var radius = cljs.core.get.call(null,map__40667__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
var entities = cljs.core.get.call(null,map__40667__$1,new cljs.core.Keyword(null,"entities","entities",1940967403));
return React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.div,{"style": {"zIndex": (1), "position": "relative"}},cljs.core.map.call(null,pong.ui.counters.counter,counts))),om.util.force_children.call(null,React.DOM.div(null,om.util.force_children.call(null,cljs.core.apply.call(null,pong.ui.scenes.empty_scene,cljs.core.vals.call(null,entities),cljs.core.map.call(null,pong.ui.spheres.counter_sphere,radius))))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_40666;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_40665;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_40664;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_40663;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_40662;
}});})(x40653_40674))
;


pong.core.App.prototype.constructor = pong.core.App;

pong.core.App.prototype.constructor.displayName = "pong.core/App";

pong.core.App.prototype.om$isComponent = true;

var x40671_40705 = pong.core.App;
x40671_40705.om$next$IQuery$ = true;

x40671_40705.om$next$IQuery$query$arity$1 = ((function (x40671_40705){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null)], null);
});})(x40671_40705))
;


var x40672_40706 = pong.core.App.prototype;
x40672_40706.om$next$IQuery$ = true;

x40672_40706.om$next$IQuery$query$arity$1 = ((function (x40672_40706){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entities","entities",1940967403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"counts","counts",234305892),om.next.get_query.call(null,pong.ui.counters.Counter)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"radius","radius",-2073122258),om.next.get_query.call(null,pong.ui.spheres.CounterSphere)], null)], null);
});})(x40672_40706))
;


pong.core.App.cljs$lang$type = true;

pong.core.App.cljs$lang$ctorStr = "pong.core/App";

pong.core.App.cljs$lang$ctorPrWriter = (function (this__32945__auto__,writer__32946__auto__,opt__32947__auto__){
return cljs.core._write.call(null,writer__32946__auto__,"pong.core/App");
});
pong.core.init_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"components","components",-1073188942),pong.utils.switch_path.call(null,pong.scripts.weirdom),new cljs.core.Keyword(null,"counts","counts",234305892),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(0)], null)], null),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(0),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"mult","mult",1466794774),0.186], null)], null)], null);
if(typeof pong.core.app_state !== 'undefined'){
} else {
pong.core.app_state = cljs.core.atom.call(null,cljs.core.reduce_kv.call(null,(function (p1__40712_SHARP_,p2__40713_SHARP_,p3__40714_SHARP_){
return cljs.core.assoc.call(null,p1__40712_SHARP_,p2__40713_SHARP_,p3__40714_SHARP_);
}),clojure.data.avl.sorted_map.call(null),om.next.tree__GT_db.call(null,pong.core.App,pong.core.init_data,true)));
}
pong.core.reconciler = om.next.reconciler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),pong.core.app_state,new cljs.core.Keyword(null,"parser","parser",-1543495310),pong.parser.parser], null));
om.next.add_root_BANG_.call(null,pong.core.reconciler,pong.core.App,goog.dom.getElement("app"));
if(typeof pong.core.rafid !== 'undefined'){
} else {
pong.core.rafid = cljs.core.atom.call(null,null);
}
pong.core.start_raf = (function pong$core$start_raf(){
pong.core.loop_sys = (function pong$core$start_raf_$_loop_sys(){
cljs.core.reset_BANG_.call(null,pong.core.rafid,window.requestAnimationFrame(pong$core$start_raf_$_loop_sys));

return cljs.core.swap_BANG_.call(null,pong.core.app_state,cljs.core.update,new cljs.core.Keyword(null,"components","components",-1073188942),pong.systems.step_ecs,0.01666);
});

return cljs.core.reset_BANG_.call(null,pong.core.rafid,window.requestAnimationFrame(pong.core.loop_sys));
});
pong.core.end_raf = (function pong$core$end_raf(id){
return window.cancelAnimationFrame(id);
});
pong.core.end_raf.call(null,cljs.core.deref.call(null,pong.core.rafid));
pong.core.start_raf.call(null);

//# sourceMappingURL=core.js.map