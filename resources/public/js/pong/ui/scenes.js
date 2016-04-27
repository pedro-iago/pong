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
var this__32121__auto__ = this;
React.Component.apply(this__32121__auto__,arguments);

if(!((this__32121__auto__.initLocalState == null))){
this__32121__auto__.state = this__32121__auto__.initLocalState();
} else {
this__32121__auto__.state = {};
}

return this__32121__auto__;
});

pong.ui.scenes.EmptyScene.prototype = goog.object.clone(React.Component.prototype);

var x35343_35367 = pong.ui.scenes.EmptyScene.prototype;
x35343_35367.componentWillUpdate = ((function (x35343_35367){
return (function (next_props__32062__auto__,next_state__32063__auto__){
var this__32061__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__32061__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__32061__auto__);
});})(x35343_35367))
;

x35343_35367.shouldComponentUpdate = ((function (x35343_35367){
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
});})(x35343_35367))
;

x35343_35367.componentWillUnmount = ((function (x35343_35367){
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
});})(x35343_35367))
;

x35343_35367.componentDidUpdate = ((function (x35343_35367){
return (function (prev_props__32064__auto__,prev_state__32065__auto__){
var this__32061__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__32061__auto__);
});})(x35343_35367))
;

x35343_35367.isMounted = ((function (x35343_35367){
return (function (){
var this__32061__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__32061__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x35343_35367))
;

x35343_35367.componentWillMount = ((function (x35343_35367){
return (function (){
var this__32061__auto__ = this;
var indexer__32066__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__32061__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__32066__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__32066__auto__,this__32061__auto__);
}
});})(x35343_35367))
;

x35343_35367.render = ((function (x35343_35367){
return (function (){
var this__32060__auto__ = this;
var this$ = this__32060__auto__;
var _STAR_reconciler_STAR_35344 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_35345 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_35346 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_35347 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_35348 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__32060__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__32060__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__32060__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__32060__auto__);

om.next._STAR_parent_STAR_ = this__32060__auto__;

try{return cljs.core.apply.call(null,pong.aframe_react.scene,null,pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cam",new cljs.core.Keyword(null,"camera","camera",-1190348585),"",new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 2.2 4",new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),""], null),pong.aframe_react.entity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cur",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 0 -3",new cljs.core.Keyword(null,"geometry","geometry",-405034994),"primitive: ring;\n                      radiusInner: 0.016; radiusOuter: 0.05;",new cljs.core.Keyword(null,"material","material",460118677),"color: orange; shader: flat;"], null),pong.aframe_react.animation.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"anim",new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"scale",new cljs.core.Keyword(null,"begin","begin",-319034319),"click",new cljs.core.Keyword(null,"dur","dur",1464522452),"150",new cljs.core.Keyword(null,"fill","fill",883462889),"backwards",new cljs.core.Keyword(null,"from","from",1815293044),"0.1 0.1 0.1",new cljs.core.Keyword(null,"to","to",192099007),"2 2 2"], null)))),cljs.core.map.call(null,pong.aframe_react.entity,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_35348;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_35347;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_35346;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_35345;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_35344;
}});})(x35343_35367))
;


pong.ui.scenes.EmptyScene.prototype.constructor = pong.ui.scenes.EmptyScene;

pong.ui.scenes.EmptyScene.prototype.constructor.displayName = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.prototype.om$isComponent = true;

var x35349_35422 = pong.ui.scenes.EmptyScene;


var x35350_35423 = pong.ui.scenes.EmptyScene.prototype;


pong.ui.scenes.EmptyScene.cljs$lang$type = true;

pong.ui.scenes.EmptyScene.cljs$lang$ctorStr = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.cljs$lang$ctorPrWriter = (function (this__32123__auto__,writer__32124__auto__,opt__32125__auto__){
return cljs.core._write.call(null,writer__32124__auto__,"pong.ui.scenes/EmptyScene");
});
pong.ui.scenes.empty_scene = om.next.factory.call(null,pong.ui.scenes.EmptyScene);

//# sourceMappingURL=scenes.js.map