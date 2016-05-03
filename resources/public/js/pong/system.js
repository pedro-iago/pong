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
var coerce_fn = ((cljs.core.map_QMARK_.call(null,structure))?(function (p1__34578_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__34578_SHARP_);
}):cljs.core.identity);
return coerce_fn.call(null,cljs.core.mapv.call(null,next_fn,structure));
})));
pong.system.subgroup = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params23012,params_idx23013,vals__23014__auto__,structure,next_fn__23015__auto__){
var next_fn = (function (structure__23016__auto__){
return next_fn__23015__auto__.call(null,params23012,(params_idx23013 + 1),vals__23014__auto__,structure__23016__auto__);
});
var ns_key = (params23012[(params_idx23013 + (0))]);
return next_fn.call(null,clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,new cljs.core.Symbol(null,"a","a",-482876059,null)),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,new cljs.core.Symbol(null,"|","|",1288119951,null))));
}),(function (params23012,params_idx23013,vals__23014__auto__,structure,next_fn__23015__auto__){
var next_fn = (function (structure__23016__auto__){
return next_fn__23015__auto__.call(null,params23012,(params_idx23013 + 1),vals__23014__auto__,structure__23016__auto__);
});
var ns_key = (params23012[(params_idx23013 + (0))]);
var subgroup = clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,new cljs.core.Symbol(null,"a","a",-482876059,null)),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,new cljs.core.Symbol(null,"|","|",1288119951,null)));
var newgroup = next_fn.call(null,subgroup);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,cljs.core.keys.call(null,subgroup)),newgroup);
})),1);
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
pong.system.fsm = (function pong$system$fsm(var_args){
var args34579 = [];
var len__19784__auto___34582 = arguments.length;
var i__19785__auto___34583 = (0);
while(true){
if((i__19785__auto___34583 < len__19784__auto___34582)){
args34579.push((arguments[i__19785__auto___34583]));

var G__34584 = (i__19785__auto___34583 + (1));
i__19785__auto___34583 = G__34584;
continue;
} else {
}
break;
}

var G__34581 = args34579.length;
switch (G__34581) {
case 1:
return pong.system.fsm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.system.fsm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34579.length)].join('')));

}
});

pong.system.fsm.cljs$core$IFn$_invoke$arity$1 = (function (pth){
return pong.system.fsm.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pth], null));
});

pong.system.fsm.cljs$core$IFn$_invoke$arity$2 = (function (md,pths){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),md,new cljs.core.Keyword(null,"params-path","params-path",-1084788678),cljs.core.map.call(null,com.rpl.specter.comp_paths,pths)], null);
});

pong.system.fsm.cljs$lang$maxFixedArity = 2;
pong.system.jump = cljs.core.comp.call(null,(function (p1__34586_SHARP_){
return cljs.core.assoc.call(null,p1__34586_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),"jump");
}),pong.system.fsm);
pong.system.flow = cljs.core.comp.call(null,(function (p1__34587_SHARP_){
return cljs.core.assoc.call(null,p1__34587_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),"flow");
}),pong.system.fsm);
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
pong.system.dom = clojure.data.avl.sorted_map.call(null,new cljs.core.Keyword(null,"love","love",-1345468865),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"love","love",-1345468865),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.5),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#fa2291"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null))], null),new cljs.core.Keyword(null,"fear","fear",1055169340),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fear","fear",1055169340),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.1),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#11f291"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,pong.system.avoid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fear","fear",1055169340)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"center","center",-748944368)], null)], null))], null),new cljs.core.Keyword("triangle","a","triangle/a",684026198),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(3)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","a","triangle/a",684026198)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","a","triangle/a",684026198)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null)], null))], null),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(3),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null)], null))], null),new cljs.core.Keyword("triangle","c","triangle/c",1110559993),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","c","triangle/c",1110559993)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","c","triangle/c",1110559993)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null)], null))], null),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.666,1.666,1.666], null),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.jump.call(null,pong.system.mean,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),pong.system.subgroup.call(null,new cljs.core.Symbol(null,"triangle","triangle",-187845140,null)),com.rpl.specter.view.call(null,cljs.core.vals)], null)], null))], null));
pong.system.KEY_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.system.KEY1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.KEY_VAL,pong.system.KEY_VAL], null));
pong.system.NAME_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.ALL,com.rpl.specter.transformed.call(null,com.rpl.specter.FIRST,(function (p1__34588_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__34588_SHARP_));
})),com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.system.NAME1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.NAME_VAL,pong.system.KEY_VAL], null));
pong.system.switch_path = (function pong$system$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__34589_SHARP_,p2__34590_SHARP_,p3__34591_SHARP_){
return cljs.core.assoc.call(null,p1__34589_SHARP_,p2__34590_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__34591_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__34592_SHARP_,p2__34593_SHARP_){
return cljs.core.update.call(null,p1__34592_SHARP_,cljs.core.second.call(null,p2__34593_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__34593_SHARP_),cljs.core.first.call(null,p2__34593_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.KEY1_KEY2_VAL], null),dom)));
});
pong.system.sys_fsm = (function pong$system$sys_fsm(st,dt){
return cljs.core.merge_with.call(null,cljs.core.merge,st,com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.subgroup.call(null,new cljs.core.Symbol(null,"fsm","fsm",-1716512779,null)),pong.system.NAME1_KEY2_VAL], null),(function (p1__34595_SHARP_,p2__34596_SHARP_,p3__34594_SHARP_){
var nv = cljs.core.apply.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(p3__34594_SHARP_),com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,new cljs.core.Keyword(null,"params-path","params-path",-1084788678).cljs$core$IFn$_invoke$arity$1(p3__34594_SHARP_)),st));
var G__34598 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(p3__34594_SHARP_);
switch (G__34598) {
case "jump":
return nv;

break;
case "flow":
return clojure.core.matrix.operators._PLUS_.call(null,clojure.core.matrix.operators._STAR_.call(null,nv,dt),p2__34596_SHARP_.call(null,p1__34595_SHARP_.call(null,st)));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(p3__34594_SHARP_))].join('')));

}
}),st));
});
pong.system.step_ecs = (function pong$system$step_ecs(ecs,dt){
return pong.system.sys_fsm.call(null,ecs,dt);
});
pong.system.step_dom = (function pong$system$step_dom(dom,dt){
return pong.system.switch_path.call(null,pong.system.step_ecs.call(null,pong.system.switch_path.call(null,dom),dt));
});
clojure.data.avl.split_key.call(null,new cljs.core.Keyword(null,"|","|",-352411576),pong.system.dom);

//# sourceMappingURL=system.js.map