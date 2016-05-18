// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.scenes');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('pong.aframe_react');
/**
 * @constructor
 */
pong.ui.scenes.EmptyScene = (function pong$ui$scenes$EmptyScene(){
var this__32925__auto__ = this;
React.Component.apply(this__32925__auto__,arguments);

if(!((this__32925__auto__.initLocalState == null))){
this__32925__auto__.state = this__32925__auto__.initLocalState();
} else {
this__32925__auto__.state = {};
}

return this__32925__auto__;
});

pong.ui.scenes.EmptyScene.prototype = goog.object.clone(React.Component.prototype);

var x36011_36032 = pong.ui.scenes.EmptyScene.prototype;
x36011_36032.componentWillUpdate = ((function (x36011_36032){
return (function (next_props__32861__auto__,next_state__32862__auto__){
var this__32860__auto__ = this;
if(((!((this__32860__auto__ == null)))?(((false) || (this__32860__auto__.om$next$Ident$))?true:false):false)){
var ident__32864__auto___36033 = om.next.ident.call(null,this__32860__auto__,om.next.props.call(null,this__32860__auto__));
var next_ident__32865__auto___36034 = om.next.ident.call(null,this__32860__auto__,om.next._next_props.call(null,next_props__32861__auto__,this__32860__auto__));
if(cljs.core.not_EQ_.call(null,ident__32864__auto___36033,next_ident__32865__auto___36034)){
var idxr__32866__auto___36035 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__32866__auto___36035 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__32866__auto___36035),((function (idxr__32866__auto___36035,ident__32864__auto___36033,next_ident__32865__auto___36034,this__32860__auto__,x36011_36032){
return (function (indexes__32867__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__32867__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__32864__auto___36033], null),cljs.core.disj,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__32865__auto___36034], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__32860__auto__);
});})(idxr__32866__auto___36035,ident__32864__auto___36033,next_ident__32865__auto___36034,this__32860__auto__,x36011_36032))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__32860__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32860__auto__);
});})(x36011_36032))
;

x36011_36032.shouldComponentUpdate = ((function (x36011_36032){
return (function (next_props__32861__auto__,next_state__32862__auto__){
var this__32860__auto__ = this;
var next_children__32863__auto__ = next_props__32861__auto__.children;
var next_props__32861__auto____$1 = goog.object.get(next_props__32861__auto__,"omcljs$value");
var next_props__32861__auto____$2 = (function (){var G__36018 = next_props__32861__auto____$1;
if((next_props__32861__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__36018);
} else {
return G__36018;
}
})();
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__32860__auto__),next_props__32861__auto____$2);
if(or__18726__auto__){
return or__18726__auto__;
} else {
var or__18726__auto____$1 = (function (){var and__18714__auto__ = this__32860__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__32860__auto__.state,"omcljs$state"),goog.object.get(next_state__32862__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
})();
if(cljs.core.truth_(or__18726__auto____$1)){
return or__18726__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__32860__auto__.props.children,next_children__32863__auto__);
}
}
});})(x36011_36032))
;

x36011_36032.componentWillUnmount = ((function (x36011_36032){
return (function (){
var this__32860__auto__ = this;
var r__32871__auto__ = om.next.get_reconciler.call(null,this__32860__auto__);
var cfg__32872__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__32871__auto__);
var st__32873__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__32872__auto__);
var indexer__32870__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__32872__auto__);
if(cljs.core.truth_((function (){var and__18714__auto__ = !((st__32873__auto__ == null));
if(and__18714__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__32873__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__32860__auto__], null));
} else {
return and__18714__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__32873__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__32860__auto__);
} else {
}

if((indexer__32870__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__32870__auto__,this__32860__auto__);
}
});})(x36011_36032))
;

x36011_36032.componentDidUpdate = ((function (x36011_36032){
return (function (prev_props__32868__auto__,prev_state__32869__auto__){
var this__32860__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32860__auto__);
});})(x36011_36032))
;

x36011_36032.isMounted = ((function (x36011_36032){
return (function (){
var this__32860__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32860__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x36011_36032))
;

x36011_36032.componentWillMount = ((function (x36011_36032){
return (function (){
var this__32860__auto__ = this;
var indexer__32870__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32860__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32870__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32870__auto__,this__32860__auto__);
}
});})(x36011_36032))
;

x36011_36032.render = ((function (x36011_36032){
return (function (){
var this__32859__auto__ = this;
var this$ = this__32859__auto__;
var _STAR_reconciler_STAR_36024 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_36025 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_36026 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_36027 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_36028 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32859__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32859__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32859__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32859__auto__);

om.next._STAR_parent_STAR_ = this__32859__auto__;

try{return cljs.core.apply.call(null,pong.aframe_react.scene,null,React.createElement("a-entity",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cam",new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null),new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 2.2 4",new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),""], null)),om.util.force_children.call(null,React.createElement("a-entity",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cur",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 0 -3",new cljs.core.Keyword(null,"geometry","geometry",-405034994),"primitive: ring;\n                      radiusInner: 0.016; radiusOuter: 0.05;",new cljs.core.Keyword(null,"material","material",460118677),"color: orange; shader: flat;"], null)),om.util.force_children.call(null,React.createElement("a-animation",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"anim",new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"scale",new cljs.core.Keyword(null,"begin","begin",-319034319),"click",new cljs.core.Keyword(null,"dur","dur",1464522452),"150",new cljs.core.Keyword(null,"fill","fill",883462889),"backwards",new cljs.core.Keyword(null,"from","from",1815293044),"0.1 0.1 0.1",new cljs.core.Keyword(null,"to","to",192099007),"2 2 2"], null))))))),cljs.core.map.call(null,pong.aframe_react.from_data,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_36028;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_36027;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_36026;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_36025;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_36024;
}});})(x36011_36032))
;


pong.ui.scenes.EmptyScene.prototype.constructor = pong.ui.scenes.EmptyScene;

pong.ui.scenes.EmptyScene.prototype.constructor.displayName = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.prototype.om$isComponent = true;

var x36030_36045 = pong.ui.scenes.EmptyScene;


var x36031_36046 = pong.ui.scenes.EmptyScene.prototype;


pong.ui.scenes.EmptyScene.cljs$lang$type = true;

pong.ui.scenes.EmptyScene.cljs$lang$ctorStr = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.cljs$lang$ctorPrWriter = (function (this__32927__auto__,writer__32928__auto__,opt__32929__auto__){
return cljs.core._write.call(null,writer__32928__auto__,"pong.ui.scenes/EmptyScene");
});
pong.ui.scenes.empty_scene = om.next.factory.call(null,pong.ui.scenes.EmptyScene);

//# sourceMappingURL=scenes.js.map