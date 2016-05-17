// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.react');
goog.require('om.util');
/**
 * serializes cljs entity map into a-frame.js format
 */
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__37036_SHARP_,p2__37035_SHARP_,p3__37037_SHARP_){
var str_key = cljs.core.subs.call(null,[cljs.core.str(p2__37035_SHARP_)].join(''),(1));
if(cljs.core.truth_(cljs.core.namespace.call(null,p2__37035_SHARP_))){
return p1__37036_SHARP_;
} else {
if(cljs.core.fn_QMARK_.call(null,p3__37037_SHARP_)){
return p1__37036_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__37037_SHARP_)){
return cljs.core.assoc.call(null,p1__37036_SHARP_,str_key,clojure.string.join.call(null,"; ",cljs.core.map.call(null,((function (str_key){
return (function (p__37040){
var vec__37041 = p__37040;
var k = cljs.core.nth.call(null,vec__37041,(0),null);
var v = cljs.core.nth.call(null,vec__37041,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
});})(str_key))
,p3__37037_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__37037_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__37037_SHARP_))){
return cljs.core.assoc.call(null,p1__37036_SHARP_,str_key,clojure.string.join.call(null," ",p3__37037_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__37036_SHARP_,str_key,p3__37037_SHARP_);

}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});

pong.aframe_react.entity = (function pong$aframe_react$entity(var_args){
var args__19791__auto__ = [];
var len__19784__auto___37052 = arguments.length;
var i__19785__auto___37053 = (0);
while(true){
if((i__19785__auto___37053 < len__19784__auto___37052)){
args__19791__auto__.push((arguments[i__19785__auto___37053]));

var G__37054 = (i__19785__auto___37053 + (1));
i__19785__auto___37053 = G__37054;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36983__auto__,children__36984__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,om.util.force_children,children__36984__auto__),pong.aframe_react.serialize.call(null,opts__36983__auto__),"a-entity")));
});

pong.aframe_react.entity.cljs$lang$maxFixedArity = (1);

pong.aframe_react.entity.cljs$lang$applyTo = (function (seq37042){
var G__37043 = cljs.core.first.call(null,seq37042);
var seq37042__$1 = cljs.core.next.call(null,seq37042);
return pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic(G__37043,seq37042__$1);
});

pong.aframe_react.animation = (function pong$aframe_react$animation(var_args){
var args__19791__auto__ = [];
var len__19784__auto___37055 = arguments.length;
var i__19785__auto___37056 = (0);
while(true){
if((i__19785__auto___37056 < len__19784__auto___37055)){
args__19791__auto__.push((arguments[i__19785__auto___37056]));

var G__37057 = (i__19785__auto___37056 + (1));
i__19785__auto___37056 = G__37057;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36983__auto__,children__36984__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,om.util.force_children,children__36984__auto__),pong.aframe_react.serialize.call(null,opts__36983__auto__),"a-animation")));
});

pong.aframe_react.animation.cljs$lang$maxFixedArity = (1);

pong.aframe_react.animation.cljs$lang$applyTo = (function (seq37044){
var G__37045 = cljs.core.first.call(null,seq37044);
var seq37044__$1 = cljs.core.next.call(null,seq37044);
return pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic(G__37045,seq37044__$1);
});

pong.aframe_react.scene = (function pong$aframe_react$scene(var_args){
var args__19791__auto__ = [];
var len__19784__auto___37058 = arguments.length;
var i__19785__auto___37059 = (0);
while(true){
if((i__19785__auto___37059 < len__19784__auto___37058)){
args__19791__auto__.push((arguments[i__19785__auto___37059]));

var G__37060 = (i__19785__auto___37059 + (1));
i__19785__auto___37059 = G__37060;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36983__auto__,children__36984__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,om.util.force_children,children__36984__auto__),pong.aframe_react.serialize.call(null,opts__36983__auto__),"a-scene")));
});

pong.aframe_react.scene.cljs$lang$maxFixedArity = (1);

pong.aframe_react.scene.cljs$lang$applyTo = (function (seq37046){
var G__37047 = cljs.core.first.call(null,seq37046);
var seq37046__$1 = cljs.core.next.call(null,seq37046);
return pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic(G__37047,seq37046__$1);
});

pong.aframe_react.event = (function pong$aframe_react$event(var_args){
var args__19791__auto__ = [];
var len__19784__auto___37061 = arguments.length;
var i__19785__auto___37062 = (0);
while(true){
if((i__19785__auto___37062 < len__19784__auto___37061)){
args__19791__auto__.push((arguments[i__19785__auto___37062]));

var G__37063 = (i__19785__auto___37062 + (1));
i__19785__auto___37062 = G__37063;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic = (function (opts__36983__auto__,children__36984__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,om.util.force_children,children__36984__auto__),pong.aframe_react.serialize.call(null,opts__36983__auto__),"a-event")));
});

pong.aframe_react.event.cljs$lang$maxFixedArity = (1);

pong.aframe_react.event.cljs$lang$applyTo = (function (seq37048){
var G__37049 = cljs.core.first.call(null,seq37048);
var seq37048__$1 = cljs.core.next.call(null,seq37048);
return pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic(G__37049,seq37048__$1);
});

pong.aframe_react.to_a_vr = (function pong$aframe_react$to_a_vr(ent){
var childs = cljs.core.map.call(null,pong$aframe_react$to_a_vr,cljs.core.vals.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ent)));
var props = cljs.core.dissoc.call(null,ent,new cljs.core.Keyword(null,"children","children",-940561982));
var G__37051 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props);
switch (G__37051) {
case "scene":
return cljs.core.apply.call(null,pong.aframe_react.scene,props,childs);

break;
case "animation":
return cljs.core.apply.call(null,pong.aframe_react.animation,props,childs);

break;
default:
return cljs.core.apply.call(null,pong.aframe_react.entity,props,childs);

}
});

//# sourceMappingURL=aframe_react.js.map