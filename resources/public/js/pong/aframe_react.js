// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.aframe_react');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.react');
goog.require('om.util');
goog.require('cljs.analyzer');
pong.aframe_react.tags = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["entity","animation","scene","event","assets","cubemap","mixin","node","register-element"], null);
/**
 * serializes cljs map into a-frame tag format
 */
pong.aframe_react.serialize = (function pong$aframe_react$serialize(props){
return cljs.core.clj__GT_js.call(null,cljs.core.reduce_kv.call(null,(function (p1__35939_SHARP_,p2__35938_SHARP_,p3__35940_SHARP_){
var str_key = cljs.core.subs.call(null,[cljs.core.str(p2__35938_SHARP_)].join(''),(1));
if(cljs.core.truth_(cljs.core.namespace.call(null,p2__35938_SHARP_))){
return p1__35939_SHARP_;
} else {
if(cljs.core.fn_QMARK_.call(null,p3__35940_SHARP_)){
return p1__35939_SHARP_;
} else {
if(cljs.core.map_QMARK_.call(null,p3__35940_SHARP_)){
return cljs.core.assoc.call(null,p1__35939_SHARP_,str_key,clojure.string.join.call(null,"; ",cljs.core.map.call(null,((function (str_key){
return (function (p__35943){
var vec__35944 = p__35943;
var k = cljs.core.nth.call(null,vec__35944,(0),null);
var v = cljs.core.nth.call(null,vec__35944,(1),null);
return clojure.string.join.call(null,": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null));
});})(str_key))
,p3__35940_SHARP_)));
} else {
if((cljs.core.seq_QMARK_.call(null,p3__35940_SHARP_)) || (cljs.core.vector_QMARK_.call(null,p3__35940_SHARP_))){
return cljs.core.assoc.call(null,p1__35939_SHARP_,str_key,clojure.string.join.call(null," ",p3__35940_SHARP_));
} else {
return cljs.core.assoc.call(null,p1__35939_SHARP_,str_key,p3__35940_SHARP_);

}
}
}
}
}),cljs.core.PersistentArrayMap.EMPTY,props));
});

pong.aframe_react.entity = (function pong$aframe_react$entity(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35966 = arguments.length;
var i__19785__auto___35967 = (0);
while(true){
if((i__19785__auto___35967 < len__19784__auto___35966)){
args__19791__auto__.push((arguments[i__19785__auto___35967]));

var G__35968 = (i__19785__auto___35967 + (1));
i__19785__auto___35967 = G__35968;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-entity",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.entity.cljs$lang$maxFixedArity = (1);

pong.aframe_react.entity.cljs$lang$applyTo = (function (seq35945){
var G__35946 = cljs.core.first.call(null,seq35945);
var seq35945__$1 = cljs.core.next.call(null,seq35945);
return pong.aframe_react.entity.cljs$core$IFn$_invoke$arity$variadic(G__35946,seq35945__$1);
});

pong.aframe_react.animation = (function pong$aframe_react$animation(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35969 = arguments.length;
var i__19785__auto___35970 = (0);
while(true){
if((i__19785__auto___35970 < len__19784__auto___35969)){
args__19791__auto__.push((arguments[i__19785__auto___35970]));

var G__35971 = (i__19785__auto___35970 + (1));
i__19785__auto___35970 = G__35971;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-animation",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.animation.cljs$lang$maxFixedArity = (1);

pong.aframe_react.animation.cljs$lang$applyTo = (function (seq35947){
var G__35948 = cljs.core.first.call(null,seq35947);
var seq35947__$1 = cljs.core.next.call(null,seq35947);
return pong.aframe_react.animation.cljs$core$IFn$_invoke$arity$variadic(G__35948,seq35947__$1);
});

pong.aframe_react.scene = (function pong$aframe_react$scene(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35972 = arguments.length;
var i__19785__auto___35973 = (0);
while(true){
if((i__19785__auto___35973 < len__19784__auto___35972)){
args__19791__auto__.push((arguments[i__19785__auto___35973]));

var G__35974 = (i__19785__auto___35973 + (1));
i__19785__auto___35973 = G__35974;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-scene",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.scene.cljs$lang$maxFixedArity = (1);

pong.aframe_react.scene.cljs$lang$applyTo = (function (seq35949){
var G__35950 = cljs.core.first.call(null,seq35949);
var seq35949__$1 = cljs.core.next.call(null,seq35949);
return pong.aframe_react.scene.cljs$core$IFn$_invoke$arity$variadic(G__35950,seq35949__$1);
});

pong.aframe_react.event = (function pong$aframe_react$event(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35975 = arguments.length;
var i__19785__auto___35976 = (0);
while(true){
if((i__19785__auto___35976 < len__19784__auto___35975)){
args__19791__auto__.push((arguments[i__19785__auto___35976]));

var G__35977 = (i__19785__auto___35976 + (1));
i__19785__auto___35976 = G__35977;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-event",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.event.cljs$lang$maxFixedArity = (1);

pong.aframe_react.event.cljs$lang$applyTo = (function (seq35951){
var G__35952 = cljs.core.first.call(null,seq35951);
var seq35951__$1 = cljs.core.next.call(null,seq35951);
return pong.aframe_react.event.cljs$core$IFn$_invoke$arity$variadic(G__35952,seq35951__$1);
});

pong.aframe_react.assets = (function pong$aframe_react$assets(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35978 = arguments.length;
var i__19785__auto___35979 = (0);
while(true){
if((i__19785__auto___35979 < len__19784__auto___35978)){
args__19791__auto__.push((arguments[i__19785__auto___35979]));

var G__35980 = (i__19785__auto___35979 + (1));
i__19785__auto___35979 = G__35980;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.assets.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.assets.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-assets",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.assets.cljs$lang$maxFixedArity = (1);

pong.aframe_react.assets.cljs$lang$applyTo = (function (seq35953){
var G__35954 = cljs.core.first.call(null,seq35953);
var seq35953__$1 = cljs.core.next.call(null,seq35953);
return pong.aframe_react.assets.cljs$core$IFn$_invoke$arity$variadic(G__35954,seq35953__$1);
});

pong.aframe_react.cubemap = (function pong$aframe_react$cubemap(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35981 = arguments.length;
var i__19785__auto___35982 = (0);
while(true){
if((i__19785__auto___35982 < len__19784__auto___35981)){
args__19791__auto__.push((arguments[i__19785__auto___35982]));

var G__35983 = (i__19785__auto___35982 + (1));
i__19785__auto___35982 = G__35983;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.cubemap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.cubemap.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-cubemap",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.cubemap.cljs$lang$maxFixedArity = (1);

pong.aframe_react.cubemap.cljs$lang$applyTo = (function (seq35955){
var G__35956 = cljs.core.first.call(null,seq35955);
var seq35955__$1 = cljs.core.next.call(null,seq35955);
return pong.aframe_react.cubemap.cljs$core$IFn$_invoke$arity$variadic(G__35956,seq35955__$1);
});

pong.aframe_react.mixin = (function pong$aframe_react$mixin(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35984 = arguments.length;
var i__19785__auto___35985 = (0);
while(true){
if((i__19785__auto___35985 < len__19784__auto___35984)){
args__19791__auto__.push((arguments[i__19785__auto___35985]));

var G__35986 = (i__19785__auto___35985 + (1));
i__19785__auto___35985 = G__35986;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.mixin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.mixin.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-mixin",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.mixin.cljs$lang$maxFixedArity = (1);

pong.aframe_react.mixin.cljs$lang$applyTo = (function (seq35957){
var G__35958 = cljs.core.first.call(null,seq35957);
var seq35957__$1 = cljs.core.next.call(null,seq35957);
return pong.aframe_react.mixin.cljs$core$IFn$_invoke$arity$variadic(G__35958,seq35957__$1);
});

pong.aframe_react.node = (function pong$aframe_react$node(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35987 = arguments.length;
var i__19785__auto___35988 = (0);
while(true){
if((i__19785__auto___35988 < len__19784__auto___35987)){
args__19791__auto__.push((arguments[i__19785__auto___35988]));

var G__35989 = (i__19785__auto___35988 + (1));
i__19785__auto___35988 = G__35989;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.node.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-node",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.node.cljs$lang$maxFixedArity = (1);

pong.aframe_react.node.cljs$lang$applyTo = (function (seq35959){
var G__35960 = cljs.core.first.call(null,seq35959);
var seq35959__$1 = cljs.core.next.call(null,seq35959);
return pong.aframe_react.node.cljs$core$IFn$_invoke$arity$variadic(G__35960,seq35959__$1);
});

pong.aframe_react.register_element = (function pong$aframe_react$register_element(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35990 = arguments.length;
var i__19785__auto___35991 = (0);
while(true){
if((i__19785__auto___35991 < len__19784__auto___35990)){
args__19791__auto__.push((arguments[i__19785__auto___35991]));

var G__35992 = (i__19785__auto___35991 + (1));
i__19785__auto___35991 = G__35992;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((1) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((1)),(0))):null);
return pong.aframe_react.register_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19792__auto__);
});

pong.aframe_react.register_element.cljs$core$IFn$_invoke$arity$variadic = (function (opts__35851__auto__,children__35852__auto__){
return React.createElement.apply(null,cljs.core.into_array.call(null,cljs.core.cons.call(null,"a-register-element",cljs.core.cons.call(null,pong.aframe_react.serialize.call(null,opts__35851__auto__),cljs.core.map.call(null,om.util.force_children,children__35852__auto__)))));
});

pong.aframe_react.register_element.cljs$lang$maxFixedArity = (1);

pong.aframe_react.register_element.cljs$lang$applyTo = (function (seq35961){
var G__35962 = cljs.core.first.call(null,seq35961);
var seq35961__$1 = cljs.core.next.call(null,seq35961);
return pong.aframe_react.register_element.cljs$core$IFn$_invoke$arity$variadic(G__35962,seq35961__$1);
});

pong.aframe_react.el = (function pong$aframe_react$el(var_args){
var args__19791__auto__ = [];
var len__19784__auto___35993 = arguments.length;
var i__19785__auto___35994 = (0);
while(true){
if((i__19785__auto___35994 < len__19784__auto___35993)){
args__19791__auto__.push((arguments[i__19785__auto___35994]));

var G__35995 = (i__19785__auto___35994 + (1));
i__19785__auto___35994 = G__35995;
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

pong.aframe_react.el.cljs$lang$applyTo = (function (seq35963){
var G__35964 = cljs.core.first.call(null,seq35963);
var seq35963__$1 = cljs.core.next.call(null,seq35963);
var G__35965 = cljs.core.first.call(null,seq35963__$1);
var seq35963__$2 = cljs.core.next.call(null,seq35963__$1);
return pong.aframe_react.el.cljs$core$IFn$_invoke$arity$variadic(G__35964,G__35965,seq35963__$2);
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