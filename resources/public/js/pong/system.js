// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.system');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('clojure.core.matrix');
goog.require('clojure.core.matrix.operators');
goog.require('clojure.data.avl');
pong.system.ALL = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,structure));
}),(function (structure,next_fn){
var coerce_fn = ((cljs.core.map_QMARK_.call(null,structure))?(function (p1__33336_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__33336_SHARP_);
}):cljs.core.identity);
return coerce_fn.call(null,cljs.core.mapv.call(null,next_fn,structure));
})));
pong.system.id = (function pong$system$id(uid){
return uid;
});
pong.system.position = (function pong$system$position(x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
pong.system.velocity = (function pong$system$velocity(x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
pong.system.geometry = (function pong$system$geometry(prim,r){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),prim,new cljs.core.Keyword(null,"radius","radius",-2073122258),r], null);
});
pong.system.material = (function pong$system$material(c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null);
});
pong.system.ctrl = (function pong$system$ctrl(tr,pth){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),tr,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pth], null);
});
pong.system.src = (function pong$system$src(cr,pth){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"create","create",-1301499256),cr,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pth], null);
});
pong.system.sink = (function pong$system$sink(de,pth){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",-1768633620),de,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pth], null);
});
pong.system.dom = clojure.data.avl.sorted_map.call(null,new cljs.core.Keyword("e","a0","e/a0",688597598),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","a0","e/a0",688597598),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.5),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#fa2291"),new cljs.core.Keyword("ctrl","velocity","ctrl/velocity",-687776220),pong.system.ctrl.call(null,(function (p1,p2){
return clojure.core.matrix.operators._STAR_.call(null,(2),clojure.core.matrix.operators._.call(null,p1,p2));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a0","e/a0",688597598)], null)], null))], null),new cljs.core.Keyword("e","a1","e/a1",553780854),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","a1","e/a1",553780854),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.1),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#11f291"),new cljs.core.Keyword("ctrl","velocity","ctrl/velocity",-687776220),pong.system.ctrl.call(null,(function (p1,p2){
return clojure.core.matrix.operators._STAR_.call(null,(4),clojure.core.matrix.operators._SLASH_.call(null,clojure.core.matrix.operators._.call(null,p2,p1),clojure.core.matrix.magnitude_squared.call(null,clojure.core.matrix.operators._.call(null,p2,p1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a1","e/a1",553780854)], null)], null))], null),new cljs.core.Keyword("e","b0","e/b0",-372343476),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","b0","e/b0",-372343476),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(5),(-15)], null)], null));
pong.system.KEY1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST,pong.system.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.system.switch_path = (function pong$system$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__33337_SHARP_,p2__33338_SHARP_,p3__33339_SHARP_){
return cljs.core.assoc.call(null,p1__33337_SHARP_,p2__33338_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__33339_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__33340_SHARP_,p2__33341_SHARP_){
return cljs.core.update.call(null,p1__33340_SHARP_,cljs.core.second.call(null,p2__33341_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__33341_SHARP_),cljs.core.first.call(null,p2__33341_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.KEY1_KEY2_VAL,com.rpl.specter.transformed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.selected_QMARK_.call(null,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),cljs.core.some_QMARK_),new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pong.system.ALL], null),com.rpl.specter.comp_paths)], null),dom)));
});
pong.system.ecs = pong.system.switch_path.call(null,pong.system.dom);
pong.system.dom_view = pong.system.switch_path.call(null,clojure.data.avl.subrange.call(null,pong.system.ecs,cljs.core._LT_,new cljs.core.Keyword(null,"|","|",-352411576)));
pong.system.KEY_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.system.sys_vel = (function pong$system$sys_vel(st,dt){
return cljs.core.update.call(null,st,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.merge,com.rpl.specter.transform.call(null,pong.system.KEY_VAL,(function (p1__33342_SHARP_,p2__33343_SHARP_){
return clojure.core.matrix.operators._PLUS_.call(null,p1__33342_SHARP_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(st)),clojure.core.matrix.operators._STAR_.call(null,p2__33343_SHARP_,dt));
}),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(st)));
});
pong.system.NAME_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.ALL,com.rpl.specter.transformed.call(null,com.rpl.specter.FIRST,(function (p1__33344_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__33344_SHARP_));
})),com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST,pong.system.ALL,com.rpl.specter.LAST], null));
pong.system.sys_ctrl = (function pong$system$sys_ctrl(st,dt){
return cljs.core.merge_with.call(null,cljs.core.merge,st,com.rpl.specter.transform.call(null,pong.system.NAME_VAL,(function (p1__33346_SHARP_,p2__33345_SHARP_){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(p2__33345_SHARP_),com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,new cljs.core.Keyword(null,"params-path","params-path",-1084788678).cljs$core$IFn$_invoke$arity$1(p2__33345_SHARP_)),st));
}),clojure.data.avl.subrange.call(null,st,cljs.core._GT__EQ_,new cljs.core.Keyword("ctrl","a","ctrl/a",-2112052823),cljs.core._LT_,new cljs.core.Keyword("ctrl","|","ctrl/|",-349350627))));
});
pong.system.step_ecs = (function pong$system$step_ecs(ecs,dt){
return pong.system.sys_ctrl.call(null,pong.system.sys_vel.call(null,ecs,dt),dt);
});
pong.system.step_dom = (function pong$system$step_dom(dom,dt){
return cljs.core.merge.call(null,dom,pong.system.switch_path.call(null,pong.system.step_ecs.call(null,pong.system.switch_path.call(null,clojure.data.avl.subrange.call(null,dom,cljs.core._GT__EQ_,new cljs.core.Keyword("e","a","e/a",-2123407433),cljs.core._LT_,new cljs.core.Keyword("e","|","e/|",-352414941))),dt)));
});

//# sourceMappingURL=system.js.map