// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.systems');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('com.rpl.specter.impl');
goog.require('clojure.core.matrix');
goog.require('clojure.core.matrix.operators');
goog.require('clojure.data.avl');
pong.systems.ALL = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,structure));
}),(function (structure,next_fn){
var coerce_fn = ((cljs.core.map_QMARK_.call(null,structure))?(function (p1__61009_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__61009_SHARP_);
}):cljs.core.identity);
return coerce_fn.call(null,cljs.core.mapv.call(null,next_fn,structure));
})));
pong.systems.KEYS = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null));
pong.systems.subgroup = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params21935,params_idx21936,vals__21937__auto__,structure,next_fn__21938__auto__){
var next_fn = (function (structure__21939__auto__){
return next_fn__21938__auto__.call(null,params21935,(params_idx21936 + 1),vals__21937__auto__,structure__21939__auto__);
});
var ns_key = (params21935[(params_idx21936 + (0))]);
var subgroup = clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,"a"),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,"|"));
return next_fn.call(null,com.rpl.specter.transform.call(null,pong.systems.KEYS,((function (subgroup,next_fn,ns_key){
return (function (p1__61010_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__61010_SHARP_));
});})(subgroup,next_fn,ns_key))
,subgroup));
}),(function (params21935,params_idx21936,vals__21937__auto__,structure,next_fn__21938__auto__){
var next_fn = (function (structure__21939__auto__){
return next_fn__21938__auto__.call(null,params21935,(params_idx21936 + 1),vals__21937__auto__,structure__21939__auto__);
});
var ns_key = (params21935[(params_idx21936 + (0))]);
var subgroup = clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,"a"),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,"|"));
var newkeyed = com.rpl.specter.transform.call(null,pong.systems.KEYS,((function (subgroup,next_fn,ns_key){
return (function (p1__61011_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__61011_SHARP_));
});})(subgroup,next_fn,ns_key))
,subgroup);
var newgroup = next_fn.call(null,newkeyed);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,cljs.core.keys.call(null,subgroup)),com.rpl.specter.transform.call(null,pong.systems.KEYS,((function (subgroup,newkeyed,newgroup,next_fn,ns_key){
return (function (p1__61012_SHARP_){
return cljs.core.keyword.call(null,ns_key,cljs.core.name.call(null,p1__61012_SHARP_));
});})(subgroup,newkeyed,newgroup,next_fn,ns_key))
,newgroup));
})),1);
pong.systems.path_QMARK_ = (function pong$systems$path_QMARK_(p1__61013_SHARP_){
var or__18726__auto__ = com.rpl.specter.impl.compiled_path_QMARK_.call(null,p1__61013_SHARP_);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
var and__18714__auto__ = cljs.core.coll_QMARK_.call(null,p1__61013_SHARP_);
if(and__18714__auto__){
return cljs.core.some.call(null,com.rpl.specter.impl.structure_path_QMARK_,p1__61013_SHARP_);
} else {
return and__18714__auto__;
}
}
});
pong.systems.KEY_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.systems.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.systems.KEY1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.systems.KEY_VAL,pong.systems.KEY_VAL], null));
pong.systems.PARAMS_PATHS = com.rpl.specter.comp_paths.call(null,com.rpl.specter.filterer.call(null,pong.systems.path_QMARK_));
pong.systems.FSM_COMPONENTS = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.systems.subgroup.call(null,"fsm"),pong.systems.KEY1_KEY2_VAL], null));
pong.systems.fold_children = (function pong$systems$fold_children(dom){
var vec__61018 = clojure.data.avl.split_key.call(null,new cljs.core.Keyword(null,"|","|",-352411576),dom);
var top = cljs.core.nth.call(null,vec__61018,(0),null);
var _ = cljs.core.nth.call(null,vec__61018,(1),null);
var children = cljs.core.nth.call(null,vec__61018,(2),null);
return cljs.core.reduce_kv.call(null,((function (vec__61018,top,_,children){
return (function (p1__61014_SHARP_,p2__61015_SHARP_,p3__61016_SHARP_){
return cljs.core.assoc_in.call(null,p1__61014_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.namespace.call(null,p2__61015_SHARP_)),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.keyword.call(null,cljs.core.name.call(null,p2__61015_SHARP_))], null),p3__61016_SHARP_);
});})(vec__61018,top,_,children))
,top,children);
});
pong.systems.switch_path = (function pong$systems$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__61019_SHARP_,p2__61020_SHARP_,p3__61021_SHARP_){
return cljs.core.assoc.call(null,p1__61019_SHARP_,p2__61020_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__61021_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__61022_SHARP_,p2__61023_SHARP_){
return cljs.core.update.call(null,p1__61022_SHARP_,cljs.core.second.call(null,p2__61023_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__61023_SHARP_),cljs.core.first.call(null,p2__61023_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.systems.KEY1_KEY2_VAL], null),dom)));
});
pong.systems.compute = (function pong$systems$compute(f,params,st){
return cljs.core.apply.call(null,f,com.rpl.specter.transform.call(null,pong.systems.PARAMS_PATHS,(function (pths){
return com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,pths),st);
}),params));
});
pong.systems.id = (function pong$systems$id(uid){
return uid;
});
pong.systems.position = (function pong$systems$position(x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
pong.systems.velocity = (function pong$systems$velocity(x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
pong.systems.geometry = (function pong$systems$geometry(prim,r){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),prim,new cljs.core.Keyword(null,"radius","radius",-2073122258),r], null);
});
pong.systems.material = (function pong$systems$material(c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null);
});
pong.systems.fsm = (function pong$systems$fsm(var_args){
var args61024 = [];
var len__19784__auto___61027 = arguments.length;
var i__19785__auto___61028 = (0);
while(true){
if((i__19785__auto___61028 < len__19784__auto___61027)){
args61024.push((arguments[i__19785__auto___61028]));

var G__61029 = (i__19785__auto___61028 + (1));
i__19785__auto___61028 = G__61029;
continue;
} else {
}
break;
}

var G__61026 = args61024.length;
switch (G__61026) {
case 1:
return pong.systems.fsm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.systems.fsm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args61024.length)].join('')));

}
});

pong.systems.fsm.cljs$core$IFn$_invoke$arity$1 = (function (pth){
return pong.systems.fsm.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pth], null));
});

pong.systems.fsm.cljs$core$IFn$_invoke$arity$2 = (function (md,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),md,new cljs.core.Keyword(null,"params","params",710516235),com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,pong.systems.path_QMARK_], null),com.rpl.specter.comp_paths,params)], null);
});

pong.systems.fsm.cljs$lang$maxFixedArity = 2;
pong.systems.jump = cljs.core.comp.call(null,(function (p1__61031_SHARP_){
return cljs.core.assoc.call(null,p1__61031_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),"jump");
}),pong.systems.fsm);
pong.systems.flow = cljs.core.comp.call(null,(function (p1__61032_SHARP_){
return cljs.core.assoc.call(null,p1__61032_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),"flow");
}),pong.systems.fsm);
pong.systems.reach = (function pong$systems$reach(p,q,k){
return clojure.core.matrix.operators._STAR_.call(null,k,clojure.core.matrix.operators._.call(null,q,p));
});
pong.systems.avoid = (function pong$systems$avoid(p,q,k){
var err = clojure.core.matrix.operators._.call(null,p,q);
return clojure.core.matrix.operators._STAR_.call(null,k,clojure.core.matrix.operators._SLASH_.call(null,err,clojure.core.matrix.magnitude_squared.call(null,err)));
});
pong.systems.mean = (function pong$systems$mean(mtx){
return clojure.core.matrix.operators._SLASH_.call(null,cljs.core.reduce.call(null,clojure.core.matrix.operators._PLUS_,mtx),cljs.core.count.call(null,mtx));
});
pong.systems.follow = (function pong$systems$follow(p,q,k1,k2){
return pong.systems.mean.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[pong.systems.reach.call(null,p,q,k1),pong.systems.avoid.call(null,p,q,k2)],null)));
});
pong.systems.dom = clojure.data.avl.sorted_map.call(null,new cljs.core.Keyword(null,"love","love",-1345468865),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"love",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.systems.geometry.call(null,"sphere",0.4),new cljs.core.Keyword(null,"material","material",460118677),pong.systems.material.call(null,"#fa2291"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.systems.flow.call(null,pong.systems.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"triangle","triangle",-1828376667)], null),(1)], null))], null),new cljs.core.Keyword(null,"fear","fear",1055169340),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"fear",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.systems.geometry.call(null,"sphere",0.1),new cljs.core.Keyword(null,"material","material",460118677),pong.systems.material.call(null,"#11f291"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.systems.flow.call(null,pong.systems.follow,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fear","fear",1055169340)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"triangle","triangle",-1828376667)], null),0.5,(1)], null))], null),new cljs.core.Keyword("triangle","a","triangle/a",684026198),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"a",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(-2)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.systems.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.systems.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.systems.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","a","triangle/a",684026198)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.systems.flow.call(null,pong.systems.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","a","triangle/a",684026198)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),0.4], null))], null),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"b",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.systems.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.systems.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.systems.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.systems.flow.call(null,pong.systems.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),0.4], null))], null),new cljs.core.Keyword("triangle","c","triangle/c",1110559993),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"c",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.systems.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.systems.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.systems.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","c","triangle/c",1110559993)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.systems.flow.call(null,pong.systems.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","c","triangle/c",1110559993)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),0.4], null))], null),new cljs.core.Keyword("triangle","oscilate","triangle/oscilate",-146136406),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"oscilate",new cljs.core.Keyword(null,"type","type",1174270348),"animation",new cljs.core.Keyword(null,"attribute","attribute",-2074029119),"geometry.radius",new cljs.core.Keyword(null,"to","to",192099007),0.3,new cljs.core.Keyword(null,"direction","direction",-633359395),"alternate"], null),new cljs.core.Keyword("triangle","camera","triangle/camera",298532559),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),"camera",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),0.8,(-1)], null),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),true], null),new cljs.core.Keyword(null,"look-controls","look-controls",-1142308254),""], null),new cljs.core.Keyword(null,"triangle","triangle",-1828376667),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),"triangle",new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.systems.geometry.call(null,"sphere",0.1),new cljs.core.Keyword(null,"material","material",460118677),pong.systems.material.call(null,"#263aae"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.systems.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"triangle","triangle",-1828376667)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.systems.flow.call(null,pong.systems.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"triangle","triangle",-1828376667)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fear","fear",1055169340)], null),0.1], null))], null));
pong.systems.sys_fsm = (function pong$systems$sys_fsm(st,dt){
return cljs.core.reduce.call(null,(function (p1__61034_SHARP_,p2__61033_SHARP_){
var c = cljs.core.peek.call(null,p2__61033_SHARP_);
var nv = pong.systems.compute.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(c),st);
return cljs.core.update_in.call(null,p1__61034_SHARP_,cljs.core.pop.call(null,p2__61033_SHARP_),((function (c,nv){
return (function (v){
var G__61036 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(c);
switch (G__61036) {
case "jump":
return nv;

break;
case "flow":
return clojure.core.matrix.operators._PLUS_.call(null,clojure.core.matrix.operators._STAR_.call(null,nv,dt),v);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(c))].join('')));

}
});})(c,nv))
);
}),st,com.rpl.specter.select.call(null,pong.systems.FSM_COMPONENTS,st));
});
pong.systems.step_ecs = (function pong$systems$step_ecs(ecs,dt){
return pong.systems.sys_fsm.call(null,ecs,dt);
});
pong.systems.step_dom = (function pong$systems$step_dom(dom,dt){
return pong.systems.switch_path.call(null,pong.systems.step_ecs.call(null,pong.systems.switch_path.call(null,dom),dt));
});
pong.systems.app = cljs.core.atom.call(null,pong.systems.switch_path.call(null,pong.systems.dom));

//# sourceMappingURL=systems.js.map