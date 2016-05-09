// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.ui.scenes');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('pong.aframe_react');
pong.ui.scenes.to_a_vr = (function pong$ui$scenes$to_a_vr(entity){
return pong.aframe_react.entity.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword(null,"children","children",-940561982)),cljs.core.map.call(null,(function (p1__44603_SHARP_){
var G__44605 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__44603_SHARP_);
switch (G__44605) {
case "animation":
return pong.aframe_react.animation.call(null,p1__44603_SHARP_);

break;
default:
return pong.aframe_react.entity.call(null,p1__44603_SHARP_);

}
}),cljs.core.vals.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(entity))));
});
/**
 * @constructor
 */
pong.ui.scenes.EmptyScene = (function pong$ui$scenes$EmptyScene(){
var this__22005__auto__ = this;
React.Component.apply(this__22005__auto__,arguments);

if(!((this__22005__auto__.initLocalState == null))){
this__22005__auto__.state = this__22005__auto__.initLocalState();
} else {
this__22005__auto__.state = {};
}

return this__22005__auto__;
});

pong.ui.scenes.EmptyScene.prototype = goog.object.clone(React.Component.prototype);

var x44611_44619 = pong.ui.scenes.EmptyScene.prototype;
x44611_44619.componentWillUpdate = ((function (x44611_44619){
return (function (next_props__21946__auto__,next_state__21947__auto__){
var this__21945__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__21945__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__21945__auto__);
});})(x44611_44619))
;

x44611_44619.shouldComponentUpdate = ((function (x44611_44619){
return (function (next_props__21946__auto__,next_state__21947__auto__){
var this__21945__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__21945__auto__),goog.object.get(next_props__21946__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__21945__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__21945__auto__.state,"omcljs$state"),goog.object.get(next_state__21947__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x44611_44619))
;

x44611_44619.componentWillUnmount = ((function (x44611_44619){
return (function (){
var this__21945__auto__ = this;
var r__21951__auto__ = om.next.get_reconciler.call(null,this__21945__auto__);
var cfg__21952__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__21951__auto__);
var st__21953__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__21952__auto__);
var indexer__21950__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__21952__auto__);
if((st__21953__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__21953__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__21945__auto__);
}

if((indexer__21950__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__21950__auto__,this__21945__auto__);
}
});})(x44611_44619))
;

x44611_44619.componentDidUpdate = ((function (x44611_44619){
return (function (prev_props__21948__auto__,prev_state__21949__auto__){
var this__21945__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__21945__auto__);
});})(x44611_44619))
;

x44611_44619.isMounted = ((function (x44611_44619){
return (function (){
var this__21945__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__21945__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x44611_44619))
;

x44611_44619.componentWillMount = ((function (x44611_44619){
return (function (){
var this__21945__auto__ = this;
var indexer__21950__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__21945__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__21950__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__21950__auto__,this__21945__auto__);
}
});})(x44611_44619))
;

x44611_44619.render = ((function (x44611_44619){
return (function (){
var this__21944__auto__ = this;
var this$ = this__21944__auto__;
var _STAR_reconciler_STAR_44612 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_44613 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_44614 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_44615 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_44616 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__21944__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__21944__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__21944__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__21944__auto__);

om.next._STAR_parent_STAR_ = this__21944__auto__;

try{return cljs.core.apply.call(null,pong.aframe_react.scene,null,pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cam",new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null),new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 2.2 4",new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),""], null),pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cur",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 0 -3",new cljs.core.Keyword(null,"geometry","geometry",-405034994),"primitive: ring;\n                      radiusInner: 0.016; radiusOuter: 0.05;",new cljs.core.Keyword(null,"material","material",460118677),"color: orange; shader: flat;"], null),pong.aframe_react.animation.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"anim",new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"scale",new cljs.core.Keyword(null,"begin","begin",-319034319),"click",new cljs.core.Keyword(null,"dur","dur",1464522452),"150",new cljs.core.Keyword(null,"fill","fill",883462889),"backwards",new cljs.core.Keyword(null,"from","from",1815293044),"0.1 0.1 0.1",new cljs.core.Keyword(null,"to","to",192099007),"2 2 2"], null)))),cljs.core.map.call(null,pong.ui.scenes.to_a_vr,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_44616;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_44615;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_44614;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_44613;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_44612;
}});})(x44611_44619))
;


pong.ui.scenes.EmptyScene.prototype.constructor = pong.ui.scenes.EmptyScene;

pong.ui.scenes.EmptyScene.prototype.constructor.displayName = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.prototype.om$isComponent = true;

var x44617_44626 = pong.ui.scenes.EmptyScene;


var x44618_44627 = pong.ui.scenes.EmptyScene.prototype;


pong.ui.scenes.EmptyScene.cljs$lang$type = true;

pong.ui.scenes.EmptyScene.cljs$lang$ctorStr = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.cljs$lang$ctorPrWriter = (function (this__22007__auto__,writer__22008__auto__,opt__22009__auto__){
return cljs.core._write.call(null,writer__22008__auto__,"pong.ui.scenes/EmptyScene");
});
pong.ui.scenes.empty_scene = om.next.factory.call(null,pong.ui.scenes.EmptyScene);

//# sourceMappingURL=scenes.js.map