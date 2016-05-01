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
var coerce_fn = ((cljs.core.map_QMARK_.call(null,structure))?(function (p1__31979_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__31979_SHARP_);
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
pong.system.hybrid = (function pong$system$hybrid(var_args){
var args31980 = [];
var len__20104__auto___31983 = arguments.length;
var i__20105__auto___31984 = (0);
while(true){
if((i__20105__auto___31984 < len__20104__auto___31983)){
args31980.push((arguments[i__20105__auto___31984]));

var G__31985 = (i__20105__auto___31984 + (1));
i__20105__auto___31984 = G__31985;
continue;
} else {
}
break;
}

var G__31982 = args31980.length;
switch (G__31982) {
case 1:
return pong.system.hybrid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.system.hybrid.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31980.length)].join('')));

}
});

pong.system.hybrid.cljs$core$IFn$_invoke$arity$1 = (function (pth){
return pong.system.hybrid.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pth], null));
});

pong.system.hybrid.cljs$core$IFn$_invoke$arity$2 = (function (md,pths){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),md,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),cljs.core.map.call(null,com.rpl.specter.comp_paths,pths)], null);
});

pong.system.hybrid.cljs$lang$maxFixedArity = 2;
pong.system.jump = pong.system.hybrid;
pong.system.flow = pong.system.hybrid;
pong.system.reach = (function pong$system$reach(p,q){
return clojure.core.matrix.operators._STAR_.call(null,clojure.core.matrix.operators._.call(null,q,p),0.4);
});
pong.system.avoid = (function pong$system$avoid(p,q){
var err = clojure.core.matrix.operators._.call(null,p,q);
return clojure.core.matrix.operators._STAR_.call(null,(4),clojure.core.matrix.operators._SLASH_.call(null,err,clojure.core.matrix.magnitude_squared.call(null,err)));
});
pong.system.mean = (function pong$system$mean(mtx){
return clojure.core.matrix.operators._SLASH_.call(null,cljs.core.reduce.call(null,clojure.core.matrix.operators._PLUS_,mtx),cljs.core.count.call(null,mtx));
});
pong.system.dom = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("e","a0","e/a0",688597598),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","a0","e/a0",688597598),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.5),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#fa2291"),new cljs.core.Keyword("flow","position","flow/position",-2025363098),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a0","e/a0",688597598)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","cb","e/cb",589947742)], null)], null))], null),new cljs.core.Keyword("e","a1","e/a1",553780854),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","a1","e/a1",553780854),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.1),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#11f291"),new cljs.core.Keyword("flow","position","flow/position",-2025363098),pong.system.flow.call(null,pong.system.avoid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a1","e/a1",553780854)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","cb","e/cb",589947742)], null)], null))], null),new cljs.core.Keyword("e","b0","e/b0",-372343476),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","b0","e/b0",-372343476),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(3)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("flow","position","flow/position",-2025363098),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("flow","velocity","flow/velocity",-687430417),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a1","e/a1",553780854)], null)], null))], null),new cljs.core.Keyword("e","b1","e/b1",-1270036593),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","b1","e/b1",-1270036593),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(3),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("flow","position","flow/position",-2025363098),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("flow","velocity","flow/velocity",-687430417),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a1","e/a1",553780854)], null)], null))], null),new cljs.core.Keyword("e","b2","e/b2",1108940871),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","b2","e/b2",1108940871),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("flow","position","flow/position",-2025363098),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("flow","velocity","flow/velocity",-687430417),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","b0","e/b0",-372343476)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("e","a1","e/a1",553780854)], null)], null))], null),new cljs.core.Keyword("e","cb","e/cb",589947742),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("e","cb","e/cb",589947742),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.666,1.666,1.666], null),new cljs.core.Keyword("jump","position","jump/position",-2025491354),pong.system.jump.call(null,pong.system.mean,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),com.rpl.specter.view.call(null,(function (p1__31987_SHARP_){
return cljs.core.vals.call(null,clojure.data.avl.subrange.call(null,p1__31987_SHARP_,cljs.core._GT__EQ_,new cljs.core.Keyword("e","b0","e/b0",-372343476),cljs.core._LT__EQ_,new cljs.core.Keyword("e","b2","e/b2",1108940871)));
}))], null)], null))], null)], null);
pong.system.KEY1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST,pong.system.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.system.switch_path = (function pong$system$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__31988_SHARP_,p2__31989_SHARP_,p3__31990_SHARP_){
return cljs.core.assoc.call(null,p1__31988_SHARP_,p2__31989_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__31990_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__31991_SHARP_,p2__31992_SHARP_){
return cljs.core.update.call(null,p1__31991_SHARP_,cljs.core.second.call(null,p2__31992_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__31992_SHARP_),cljs.core.first.call(null,p2__31992_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.KEY1_KEY2_VAL], null),dom)));
});
pong.system.sys_hybrid = (function pong$system$sys_hybrid(st,dt){
var nst = com.rpl.specter.transform.call(null,pong.system.KEY1_KEY2_VAL,(function (p1__31994_SHARP_,p2__31995_SHARP_,p3__31993_SHARP_){
var nv = cljs.core.apply.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p3__31993_SHARP_),com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,new cljs.core.Keyword(null,"params-path","params-path",-1084788678).cljs$core$IFn$_invoke$arity$1(p3__31993_SHARP_)),st));
var G__31998 = cljs.core.namespace.call(null,p1__31994_SHARP_);
switch (G__31998) {
case "jump":
return nv;

break;
case "flow":
return clojure.core.matrix.operators._PLUS_.call(null,clojure.core.matrix.operators._STAR_.call(null,nv,dt),p2__31995_SHARP_.call(null,cljs.core.get.call(null,st,cljs.core.keyword.call(null,cljs.core.name.call(null,p1__31994_SHARP_)))));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.namespace.call(null,p1__31994_SHARP_))].join('')));

}
}),clojure.data.avl.subrange.call(null,st,cljs.core._GT_,new cljs.core.Keyword(null,"|","|",-352411576)));
return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.merge,st,cljs.core.map.call(null,((function (nst){
return (function (p1__31996_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.keyword.call(null,cljs.core.name.call(null,cljs.core.first.call(null,p1__31996_SHARP_)))],[cljs.core.peek.call(null,p1__31996_SHARP_)]);
});})(nst))
,nst));
});
pong.system.step_ecs = (function pong$system$step_ecs(ecs,dt){
return pong.system.sys_hybrid.call(null,ecs,dt);
});
pong.system.step_dom = (function pong$system$step_dom(dom,dt){
return cljs.core.merge.call(null,dom,pong.system.switch_path.call(null,pong.system.step_ecs.call(null,pong.system.switch_path.call(null,clojure.data.avl.subrange.call(null,dom,cljs.core._GT__EQ_,new cljs.core.Keyword("e","a","e/a",-2123407433),cljs.core._LT_,new cljs.core.Keyword("e","|","e/|",-352414941))),dt)));
});

//# sourceMappingURL=system.js.map