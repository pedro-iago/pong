// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.react');
goog.require('om.util');
pong.aframe_react.tags = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity","animation","scene","event","assets","cubemap","mixin","node","register-element"], null);
/**
 * serializes cljs map into a-frame tag format
 */
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__21994_SHARP_,p2__21993_SHARP_,p3__21995_SHARP_){
var str_key = cljs.core.subs.call(null,[cljs.core.str(p2__21993_SHARP_)].join(''),(1));
if(cljs.core.truth_(cljs.core.namespace.call(null,p2__21993_SHARP_))){
return p1__21994_SHARP_;
} else {
if(cljs.core.fn_QMARK_.call(null,p3__21995_SHARP_)){
return p1__21994_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__21995_SHARP_)){
return cljs.core.assoc.call(null,p1__21994_SHARP_,str_key,clojure.string.join.call(null,"; ",cljs.core.map.call(null,((function (str_key){
return (function (p__22001){
var vec__22002 = p__22001;
var k = cljs.core.nth.call(null,vec__22002,(0),null);
var v = cljs.core.nth.call(null,vec__22002,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
});})(str_key))
,p3__21995_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__21995_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__21995_SHARP_))){
return cljs.core.assoc.call(null,p1__21994_SHARP_,str_key,clojure.string.join.call(null," ",p3__21995_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__21994_SHARP_,str_key,p3__21995_SHARP_);

}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});

pong.aframe_react.entity = (function pong$aframe_react$entity(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22048 = arguments.length;
var i__19785__auto___22049 = (0);
while(true){
if((i__19785__auto___22049 < len__19784__auto___22048)){
args__19791__auto__.push((arguments[i__19785__auto___22049]));

var G__22050 = (i__19785__auto___22049 + (1));
i__19785__auto___22049 = G__22050;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-entity",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.entity.cljs$lang$maxFixedArity = (1);

pong.aframe_react.entity.cljs$lang$applyTo = (function (seq22003){
var G__22004 = cljs.core.first.call(null,seq22003);
var seq22003__$1 = cljs.core.next.call(null,seq22003);
return pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic(G__22004,seq22003__$1);
});

pong.aframe_react.animation = (function pong$aframe_react$animation(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22051 = arguments.length;
var i__19785__auto___22052 = (0);
while(true){
if((i__19785__auto___22052 < len__19784__auto___22051)){
args__19791__auto__.push((arguments[i__19785__auto___22052]));

var G__22053 = (i__19785__auto___22052 + (1));
i__19785__auto___22052 = G__22053;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-animation",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.animation.cljs$lang$maxFixedArity = (1);

pong.aframe_react.animation.cljs$lang$applyTo = (function (seq22005){
var G__22006 = cljs.core.first.call(null,seq22005);
var seq22005__$1 = cljs.core.next.call(null,seq22005);
return pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic(G__22006,seq22005__$1);
});

pong.aframe_react.scene = (function pong$aframe_react$scene(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22054 = arguments.length;
var i__19785__auto___22055 = (0);
while(true){
if((i__19785__auto___22055 < len__19784__auto___22054)){
args__19791__auto__.push((arguments[i__19785__auto___22055]));

var G__22056 = (i__19785__auto___22055 + (1));
i__19785__auto___22055 = G__22056;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-scene",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.scene.cljs$lang$maxFixedArity = (1);

pong.aframe_react.scene.cljs$lang$applyTo = (function (seq22007){
var G__22008 = cljs.core.first.call(null,seq22007);
var seq22007__$1 = cljs.core.next.call(null,seq22007);
return pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic(G__22008,seq22007__$1);
});

pong.aframe_react.event = (function pong$aframe_react$event(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22057 = arguments.length;
var i__19785__auto___22058 = (0);
while(true){
if((i__19785__auto___22058 < len__19784__auto___22057)){
args__19791__auto__.push((arguments[i__19785__auto___22058]));

var G__22059 = (i__19785__auto___22058 + (1));
i__19785__auto___22058 = G__22059;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-event",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.event.cljs$lang$maxFixedArity = (1);

pong.aframe_react.event.cljs$lang$applyTo = (function (seq22009){
var G__22010 = cljs.core.first.call(null,seq22009);
var seq22009__$1 = cljs.core.next.call(null,seq22009);
return pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic(G__22010,seq22009__$1);
});

pong.aframe_react.assets = (function pong$aframe_react$assets(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22060 = arguments.length;
var i__19785__auto___22061 = (0);
while(true){
if((i__19785__auto___22061 < len__19784__auto___22060)){
args__19791__auto__.push((arguments[i__19785__auto___22061]));

var G__22062 = (i__19785__auto___22061 + (1));
i__19785__auto___22061 = G__22062;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.assets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.assets.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-assets",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.assets.cljs$lang$maxFixedArity = (1);

pong.aframe_react.assets.cljs$lang$applyTo = (function (seq22011){
var G__22012 = cljs.core.first.call(null,seq22011);
var seq22011__$1 = cljs.core.next.call(null,seq22011);
return pong.aframe_react.assets.cljs$core$IFn$_invoke$arity$variadic(G__22012,seq22011__$1);
});

pong.aframe_react.cubemap = (function pong$aframe_react$cubemap(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22063 = arguments.length;
var i__19785__auto___22064 = (0);
while(true){
if((i__19785__auto___22064 < len__19784__auto___22063)){
args__19791__auto__.push((arguments[i__19785__auto___22064]));

var G__22065 = (i__19785__auto___22064 + (1));
i__19785__auto___22064 = G__22065;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.cubemap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.cubemap.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-cubemap",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.cubemap.cljs$lang$maxFixedArity = (1);

pong.aframe_react.cubemap.cljs$lang$applyTo = (function (seq22013){
var G__22014 = cljs.core.first.call(null,seq22013);
var seq22013__$1 = cljs.core.next.call(null,seq22013);
return pong.aframe_react.cubemap.cljs$core$IFn$_invoke$arity$variadic(G__22014,seq22013__$1);
});

pong.aframe_react.mixin = (function pong$aframe_react$mixin(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22066 = arguments.length;
var i__19785__auto___22067 = (0);
while(true){
if((i__19785__auto___22067 < len__19784__auto___22066)){
args__19791__auto__.push((arguments[i__19785__auto___22067]));

var G__22068 = (i__19785__auto___22067 + (1));
i__19785__auto___22067 = G__22068;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.mixin.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-mixin",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.mixin.cljs$lang$maxFixedArity = (1);

pong.aframe_react.mixin.cljs$lang$applyTo = (function (seq22023){
var G__22024 = cljs.core.first.call(null,seq22023);
var seq22023__$1 = cljs.core.next.call(null,seq22023);
return pong.aframe_react.mixin.cljs$core$IFn$_invoke$arity$variadic(G__22024,seq22023__$1);
});

pong.aframe_react.node = (function pong$aframe_react$node(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22069 = arguments.length;
var i__19785__auto___22070 = (0);
while(true){
if((i__19785__auto___22070 < len__19784__auto___22069)){
args__19791__auto__.push((arguments[i__19785__auto___22070]));

var G__22071 = (i__19785__auto___22070 + (1));
i__19785__auto___22070 = G__22071;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.node.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-node",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.node.cljs$lang$maxFixedArity = (1);

pong.aframe_react.node.cljs$lang$applyTo = (function (seq22028){
var G__22029 = cljs.core.first.call(null,seq22028);
var seq22028__$1 = cljs.core.next.call(null,seq22028);
return pong.aframe_react.node.cljs$core$IFn$_invoke$arity$variadic(G__22029,seq22028__$1);
});

pong.aframe_react.register_element = (function pong$aframe_react$register_element(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22072 = arguments.length;
var i__19785__auto___22073 = (0);
while(true){
if((i__19785__auto___22073 < len__19784__auto___22072)){
args__19791__auto__.push((arguments[i__19785__auto___22073]));

var G__22074 = (i__19785__auto___22073 + (1));
i__19785__auto___22073 = G__22074;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.register_element.cljs$core$IFn$_invoke$arity$variadic = (function (opts__21874__auto__,children__21875__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-register-element",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__21874__auto__),cljs.core.map.call(null,om.util.force_children,children__21875__auto__)))));
});

pong.aframe_react.register_element.cljs$lang$maxFixedArity = (1);

pong.aframe_react.register_element.cljs$lang$applyTo = (function (seq22030){
var G__22031 = cljs.core.first.call(null,seq22030);
var seq22030__$1 = cljs.core.next.call(null,seq22030);
return pong.aframe_react.register_element.cljs$core$IFn$_invoke$arity$variadic(G__22031,seq22030__$1);
});

pong.aframe_react.el = (function pong$aframe_react$el(var_args){
var args__19791__auto__ = [];
var len__19784__auto___22075 = arguments.length;
var i__19785__auto___22076 = (0);
while(true){
if((i__19785__auto___22076 < len__19784__auto___22075)){
args__19791__auto__.push((arguments[i__19785__auto___22076]));

var G__22077 = (i__19785__auto___22076 + (1));
i__19785__auto___22076 = G__22077;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((2) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((2)),(0))):null);
return pong.aframe_react.el.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19792__auto__);
});

pong.aframe_react.el.cljs$core$IFn$_invoke$arity$variadic = (function (tag,opts,children){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,[cljs.core.str("a-"),cljs.core.str(tag)].join(''),cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts),cljs.core.map.call(null,om.util.force_children,children)))));
});

pong.aframe_react.el.cljs$lang$maxFixedArity = (2);

pong.aframe_react.el.cljs$lang$applyTo = (function (seq22034){
var G__22035 = cljs.core.first.call(null,seq22034);
var seq22034__$1 = cljs.core.next.call(null,seq22034);
var G__22036 = cljs.core.first.call(null,seq22034__$1);
var seq22034__$2 = cljs.core.next.call(null,seq22034__$1);
return pong.aframe_react.el.cljs$core$IFn$_invoke$arity$variadic(G__22035,G__22036,seq22034__$2);
});

/**
 * turns cljs map into an element of tag :type (defaults to entity)
 */
pong.aframe_react.from_data = (function pong$aframe_react$from_data(ent){
var childs = cljs.core.map.call(null,pong$aframe_react$from_data,cljs.core.vals.call(null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ent)));
var props = cljs.core.dissoc.call(null,ent,new cljs.core.Keyword(null,"children","children",-940561982));
return pong.aframe_react.el.call(null,(function (){var or__18726__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return "entity";
}
})(),props,childs);
});

//# sourceMappingURL=aframe_react.js.map