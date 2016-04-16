// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.fiddle');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('pong.aframe_react');
goog.require('om.dom');
goog.require('pong.parser');
goog.require('clojure.core.matrix.operators');
goog.require('clojure.core.matrix');
goog.require('pong.ui.counters');
goog.require('om.next');
goog.require('pong.core');
goog.require('clojure.data.avl');
goog.require('pong.ui.spheres');
pong.fiddle.reset_mult_BANG_ = (function pong$fiddle$reset_mult_BANG_(st,mult){
return cljs.core.reset_BANG_.call(null,st,cljs.core.reduce.call(null,(function (p1__33228_SHARP_,p2__33229_SHARP_){
return cljs.core.assoc_in.call(null,p1__33228_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("count","by-id","count/by-id",-2098627242),p2__33229_SHARP_,new cljs.core.Keyword(null,"mult","mult",1466794774)], null),mult);
}),cljs.core.deref.call(null,st),cljs.core.range.call(null,(0),cljs.core.count.call(null,new cljs.core.Keyword("count","by-id","count/by-id",-2098627242).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,st))))));
});
cljs.core.reset_BANG_.call(null,pong.core.app_state,om.next.tree__GT_db.call(null,pong.core.App,pong.core.init_data,true));
pong.fiddle.reset_mult_BANG_.call(null,pong.core.app_state,0.2);
om.next.transact_BANG_.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.core.App),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"increment!","increment!",283705852,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null))], null));
om.next.transact_BANG_.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.core.App),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"decrement!","decrement!",-457164555,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null))], null));
var el_33230 = om.dom.node.call(null,om.next.class__GT_any.call(null,pong.core.reconciler,pong.aframe_react.Entity));
console.log(el_33230);

el_33230.addEventListener("click",((function (el_33230){
return (function (){
return console.log("Click!");
});})(el_33230))
);

(el_33230["onclick"] = ((function (el_33230){
return (function (){
return console.log("On click!");
});})(el_33230))
);
pong.fiddle.ALL2 = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,structure));
}),(function (structure,next_fn){
var coerce_fn = ((cljs.core.map_QMARK_.call(null,structure))?(function (p1__33231_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__33231_SHARP_);
}):cljs.core.identity);
return coerce_fn.call(null,cljs.core.mapv.call(null,next_fn,structure));
})));
pong.fiddle.position = (function pong$fiddle$position(x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
pong.fiddle.velocity = (function pong$fiddle$velocity(x,y,z){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null);
});
pong.fiddle.geometry = (function pong$fiddle$geometry(prim,r){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),prim,new cljs.core.Keyword(null,"radius","radius",-2073122258),r], null);
});
pong.fiddle.material = (function pong$fiddle$material(c){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null);
});
pong.fiddle.ctrl = (function pong$fiddle$ctrl(tr,pth){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transform","transform",1381301764),tr,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pth], null);
});
pong.fiddle.src = (function pong$fiddle$src(cr,pth){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"create","create",-1301499256),cr,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pth], null);
});
pong.fiddle.sink = (function pong$fiddle$sink(de,pth){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",-1768633620),de,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pth], null);
});
pong.fiddle.dom = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("e","a0","e/a0",688597598),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0),(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.fiddle.geometry.call(null,"sphere",0.5),new cljs.core.Keyword(null,"material","material",460118677),pong.fiddle.material.call(null,(16392849)),new cljs.core.Keyword("ctrl","velocity","ctrl/velocity",-687776220),pong.fiddle.ctrl.call(null,(function (p1,p2){
return clojure.core.matrix.operators._STAR_.call(null,0.4,clojure.core.matrix.operators._.call(null,p1,p2));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a0","e/a0",688597598)], null)], null))], null),new cljs.core.Keyword("e","a1","e/a1",553780854),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.fiddle.geometry.call(null,"sphere",0.1),new cljs.core.Keyword(null,"material","material",460118677),pong.fiddle.material.call(null,(1176209)),new cljs.core.Keyword("ctrl","velocity","ctrl/velocity",-687776220),pong.fiddle.ctrl.call(null,(function (p1,p2){
return clojure.core.matrix.operators._STAR_.call(null,(4),clojure.core.matrix.operators._SLASH_.call(null,clojure.core.matrix.operators._.call(null,p2,p1),clojure.core.matrix.magnitude_squared.call(null,clojure.core.matrix.operators._.call(null,p2,p1))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a1","e/a1",553780854)], null)], null))], null),new cljs.core.Keyword("e","b0","e/b0",-372343476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1),(5)], null)], null)], null);
pong.fiddle.KEY1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.fiddle.ALL2,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST,pong.fiddle.ALL2,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.fiddle.switch_path = (function pong$fiddle$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__33232_SHARP_,p2__33233_SHARP_,p3__33234_SHARP_){
return cljs.core.assoc.call(null,p1__33232_SHARP_,p2__33233_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__33234_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__33235_SHARP_,p2__33236_SHARP_){
return cljs.core.update.call(null,p1__33235_SHARP_,cljs.core.second.call(null,p2__33236_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__33236_SHARP_),cljs.core.first.call(null,p2__33236_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.fiddle.KEY1_KEY2_VAL,com.rpl.specter.transformed.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.selected_QMARK_.call(null,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),cljs.core.some_QMARK_),new cljs.core.Keyword(null,"params-path","params-path",-1084788678),pong.fiddle.ALL2], null),com.rpl.specter.comp_paths)], null),dom)));
});
pong.fiddle.ecs = pong.fiddle.switch_path.call(null,pong.fiddle.dom);
pong.fiddle.dom_view = pong.fiddle.switch_path.call(null,clojure.data.avl.subrange.call(null,pong.fiddle.ecs,cljs.core._LT_,new cljs.core.Keyword(null,"zzz","zzz",-77420552)));
pong.fiddle.KEY_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.fiddle.ALL2,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.fiddle.sys_vel = (function pong$fiddle$sys_vel(st,dt){
return cljs.core.update.call(null,st,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.merge,com.rpl.specter.transform.call(null,pong.fiddle.KEY_VAL,(function (p1__33237_SHARP_,p2__33238_SHARP_){
return clojure.core.matrix.operators._PLUS_.call(null,p1__33237_SHARP_.call(null,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(st)),clojure.core.matrix.operators._STAR_.call(null,p2__33238_SHARP_,dt));
}),new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(st)));
});
pong.fiddle.NAME_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.fiddle.ALL2,com.rpl.specter.transformed.call(null,com.rpl.specter.FIRST,(function (p1__33239_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__33239_SHARP_));
})),com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST,pong.fiddle.ALL2,com.rpl.specter.LAST], null));
pong.fiddle.sys_ctrl = (function pong$fiddle$sys_ctrl(st,dt){
return cljs.core.merge_with.call(null,cljs.core.merge,st,com.rpl.specter.transform.call(null,pong.fiddle.NAME_VAL,(function (p1__33241_SHARP_,p2__33240_SHARP_){
return cljs.core.apply.call(null,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(p2__33240_SHARP_),com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,new cljs.core.Keyword(null,"params-path","params-path",-1084788678).cljs$core$IFn$_invoke$arity$1(p2__33240_SHARP_)),st));
}),clojure.data.avl.subrange.call(null,st,cljs.core._GT_,new cljs.core.Keyword("ctrl","a","ctrl/a",-2112052823),cljs.core._LT_,new cljs.core.Keyword("ctrl","zzz","ctrl/zzz",-74161331))));
});
pong.fiddle.loop_sys = (function pong$fiddle$loop_sys(st,dt){
return pong.fiddle.sys_ctrl.call(null,pong.fiddle.sys_vel.call(null,st,dt),dt);
});
pong.fiddle.atom_state = cljs.core.atom.call(null,pong.fiddle.ecs);
clojure.data.avl.subrange.call(null,cljs.core.swap_BANG_.call(null,pong.fiddle.atom_state,pong.fiddle.loop_sys,0.1),cljs.core._GT__EQ_,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core._LT__EQ_,new cljs.core.Keyword(null,"velocity","velocity",-581524355));

//# sourceMappingURL=fiddle.js.map