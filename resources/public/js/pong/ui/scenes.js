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
var this__20953__auto__ = this;
React.Component.apply(this__20953__auto__,arguments);

if(!((this__20953__auto__.initLocalState == null))){
this__20953__auto__.state = this__20953__auto__.initLocalState();
} else {
this__20953__auto__.state = {};
}

return this__20953__auto__;
});

pong.ui.scenes.EmptyScene.prototype = goog.object.clone(React.Component.prototype);

var x37075_37091 = pong.ui.scenes.EmptyScene.prototype;
x37075_37091.componentWillUpdate = ((function (x37075_37091){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__20893__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20893__auto__);
});})(x37075_37091))
;

x37075_37091.shouldComponentUpdate = ((function (x37075_37091){
return (function (next_props__20894__auto__,next_state__20895__auto__){
var this__20893__auto__ = this;
var or__18726__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20893__auto__),goog.object.get(next_props__20894__auto__,"omcljs$value"));
if(or__18726__auto__){
return or__18726__auto__;
} else {
var and__18714__auto__ = this__20893__auto__.state;
if(cljs.core.truth_(and__18714__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20893__auto__.state,"omcljs$state"),goog.object.get(next_state__20895__auto__,"omcljs$state"));
} else {
return and__18714__auto__;
}
}
});})(x37075_37091))
;

x37075_37091.componentWillUnmount = ((function (x37075_37091){
return (function (){
var this__20893__auto__ = this;
var r__20899__auto__ = om.next.get_reconciler.call(null,this__20893__auto__);
var cfg__20900__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20899__auto__);
var st__20901__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
var indexer__20898__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20900__auto__);
if((st__20901__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__20901__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20893__auto__);
}

if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37075_37091))
;

x37075_37091.componentDidUpdate = ((function (x37075_37091){
return (function (prev_props__20896__auto__,prev_state__20897__auto__){
var this__20893__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20893__auto__);
});})(x37075_37091))
;

x37075_37091.isMounted = ((function (x37075_37091){
return (function (){
var this__20893__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20893__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x37075_37091))
;

x37075_37091.componentWillMount = ((function (x37075_37091){
return (function (){
var this__20893__auto__ = this;
var indexer__20898__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20893__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20898__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20898__auto__,this__20893__auto__);
}
});})(x37075_37091))
;

x37075_37091.render = ((function (x37075_37091){
return (function (){
var this__20892__auto__ = this;
var this$ = this__20892__auto__;
var _STAR_reconciler_STAR_37079 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_37080 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_37081 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_37082 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_37083 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20892__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20892__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20892__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20892__auto__);

om.next._STAR_parent_STAR_ = this__20892__auto__;

try{return cljs.core.apply.call(null,pong.aframe_react.scene,null,React.createElement("a-entity",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cam",new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),false], null),new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 2.2 4",new cljs.core.Keyword(null,"wasd-controls","wasd-controls",547193661),""], null)),om.util.force_children.call(null,React.createElement("a-entity",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"cur",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"",new cljs.core.Keyword(null,"position","position",-2011731912),"0 0 -3",new cljs.core.Keyword(null,"geometry","geometry",-405034994),"primitive: ring;\n                      radiusInner: 0.016; radiusOuter: 0.05;",new cljs.core.Keyword(null,"material","material",460118677),"color: orange; shader: flat;"], null)),om.util.force_children.call(null,React.createElement("a-animation",pong.aframe_react.serialize.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"react-key","react-key",1337881348),"anim",new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"scale",new cljs.core.Keyword(null,"begin","begin",-319034319),"click",new cljs.core.Keyword(null,"dur","dur",1464522452),"150",new cljs.core.Keyword(null,"fill","fill",883462889),"backwards",new cljs.core.Keyword(null,"from","from",1815293044),"0.1 0.1 0.1",new cljs.core.Keyword(null,"to","to",192099007),"2 2 2"], null))))))),cljs.core.map.call(null,pong.aframe_react.to_a_vr,om.next.props.call(null,this$)),om.next.children.call(null,this$));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_37083;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_37082;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_37081;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_37080;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_37079;
}});})(x37075_37091))
;


pong.ui.scenes.EmptyScene.prototype.constructor = pong.ui.scenes.EmptyScene;

pong.ui.scenes.EmptyScene.prototype.constructor.displayName = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.prototype.om$isComponent = true;

var x37089_37095 = pong.ui.scenes.EmptyScene;


var x37090_37096 = pong.ui.scenes.EmptyScene.prototype;


pong.ui.scenes.EmptyScene.cljs$lang$type = true;

pong.ui.scenes.EmptyScene.cljs$lang$ctorStr = "pong.ui.scenes/EmptyScene";

pong.ui.scenes.EmptyScene.cljs$lang$ctorPrWriter = (function (this__20955__auto__,writer__20956__auto__,opt__20957__auto__){
return cljs.core._write.call(null,writer__20956__auto__,"pong.ui.scenes/EmptyScene");
});
pong.ui.scenes.empty_scene = om.next.factory.call(null,pong.ui.scenes.EmptyScene);

//# sourceMappingURL=scenes.js.map