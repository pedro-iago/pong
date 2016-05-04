// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.system');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('com.rpl.specter.impl');
goog.require('clojure.core.matrix');
goog.require('clojure.core.matrix.operators');
goog.require('clojure.data.avl');
pong.system.ALL = com.rpl.specter.impl.no_params_compiled_path.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.StructurePathExecutor,(function (structure,next_fn){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,next_fn,structure));
}),(function (structure,next_fn){
var coerce_fn = ((cljs.core.map_QMARK_.call(null,structure))?(function (p1__37397_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,p1__37397_SHARP_);
}):cljs.core.identity);
return coerce_fn.call(null,cljs.core.mapv.call(null,next_fn,structure));
})));
pong.system.KEYS = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,com.rpl.specter.FIRST], null));
pong.system.subgroup = com.rpl.specter.impl.__GT_ParamsNeededPath.call(null,com.rpl.specter.impl.__GT_TransformFunctions.call(null,com.rpl.specter.impl.RichPathExecutor,(function (params22896,params_idx22897,vals__22898__auto__,structure,next_fn__22899__auto__){
var next_fn = (function (structure__22900__auto__){
return next_fn__22899__auto__.call(null,params22896,(params_idx22897 + 1),vals__22898__auto__,structure__22900__auto__);
});
var ns_key = (params22896[(params_idx22897 + (0))]);
var subgroup = clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,"a"),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,"|"));
return next_fn.call(null,com.rpl.specter.transform.call(null,pong.system.KEYS,((function (subgroup,next_fn,ns_key){
return (function (p1__37402_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__37402_SHARP_));
});})(subgroup,next_fn,ns_key))
,subgroup));
}),(function (params22896,params_idx22897,vals__22898__auto__,structure,next_fn__22899__auto__){
var next_fn = (function (structure__22900__auto__){
return next_fn__22899__auto__.call(null,params22896,(params_idx22897 + 1),vals__22898__auto__,structure__22900__auto__);
});
var ns_key = (params22896[(params_idx22897 + (0))]);
var subgroup = clojure.data.avl.subrange.call(null,structure,cljs.core._GT__EQ_,cljs.core.keyword.call(null,ns_key,"a"),cljs.core._LT_,cljs.core.keyword.call(null,ns_key,"|"));
var newkeyed = com.rpl.specter.transform.call(null,pong.system.KEYS,((function (subgroup,next_fn,ns_key){
return (function (p1__37403_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__37403_SHARP_));
});})(subgroup,next_fn,ns_key))
,subgroup);
var newgroup = next_fn.call(null,newkeyed);
return cljs.core.merge.call(null,cljs.core.reduce.call(null,cljs.core.dissoc,structure,cljs.core.keys.call(null,subgroup)),com.rpl.specter.transform.call(null,pong.system.KEYS,((function (subgroup,newkeyed,newgroup,next_fn,ns_key){
return (function (p1__37404_SHARP_){
return cljs.core.keyword.call(null,ns_key,cljs.core.name.call(null,p1__37404_SHARP_));
});})(subgroup,newkeyed,newgroup,next_fn,ns_key))
,newgroup));
})),1);
pong.system.path_QMARK_ = cljs.core.some_fn.call(null,com.rpl.specter.impl.compiled_path_QMARK_,(function (p1__37409_SHARP_){
var and__18714__auto__ = cljs.core.coll_QMARK_.call(null,p1__37409_SHARP_);
if(and__18714__auto__){
return cljs.core.some.call(null,com.rpl.specter.impl.structure_path_QMARK_,p1__37409_SHARP_);
} else {
return and__18714__auto__;
}
}));
pong.system.KEY_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.ALL,com.rpl.specter.collect_one.call(null,com.rpl.specter.FIRST),com.rpl.specter.LAST], null));
pong.system.KEY1_KEY2_VAL = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.KEY_VAL,pong.system.KEY_VAL], null));
pong.system.PARAMS_PATHS = com.rpl.specter.comp_paths.call(null,com.rpl.specter.filterer.call(null,pong.system.path_QMARK_));
pong.system.FSM_COMPONENTS = com.rpl.specter.comp_paths.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.subgroup.call(null,"fsm"),pong.system.KEY1_KEY2_VAL], null));
pong.system.switch_path = (function pong$system$switch_path(dom){
return cljs.core.reduce_kv.call(null,(function (p1__37410_SHARP_,p2__37411_SHARP_,p3__37412_SHARP_){
return cljs.core.assoc.call(null,p1__37410_SHARP_,p2__37411_SHARP_,cljs.core.apply.call(null,clojure.data.avl.sorted_map,p3__37412_SHARP_));
}),clojure.data.avl.sorted_map.call(null),cljs.core.reduce.call(null,(function (p1__37413_SHARP_,p2__37414_SHARP_){
return cljs.core.update.call(null,p1__37413_SHARP_,cljs.core.second.call(null,p2__37414_SHARP_),cljs.core.conj,cljs.core.peek.call(null,p2__37414_SHARP_),cljs.core.first.call(null,p2__37414_SHARP_));
}),cljs.core.PersistentArrayMap.EMPTY,com.rpl.specter.select.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pong.system.KEY1_KEY2_VAL], null),dom)));
});
pong.system.compute = (function pong$system$compute(f,params,st){
return cljs.core.apply.call(null,f,com.rpl.specter.transform.call(null,pong.system.PARAMS_PATHS,(function (pths){
return com.rpl.specter.select.call(null,cljs.core.apply.call(null,com.rpl.specter.multi_path,pths),st);
}),params));
});
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
var args37415 = [];
var len__19784__auto___37418 = arguments.length;
var i__19785__auto___37419 = (0);
while(true){
if((i__19785__auto___37419 < len__19784__auto___37418)){
args37415.push((arguments[i__19785__auto___37419]));

var G__37420 = (i__19785__auto___37419 + (1));
i__19785__auto___37419 = G__37420;
continue;
} else {
}
break;
}

var G__37417 = args37415.length;
switch (G__37417) {
case 1:
return pong.system.fsm.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.system.fsm.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37415.length)].join('')));

}
});

pong.system.fsm.cljs$core$IFn$_invoke$arity$1 = (function (pth){
return pong.system.fsm.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pth], null));
});

pong.system.fsm.cljs$core$IFn$_invoke$arity$2 = (function (md,params){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),md,new cljs.core.Keyword(null,"params","params",710516235),com.rpl.specter.transform.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,pong.system.path_QMARK_], null),com.rpl.specter.comp_paths,params)], null);
});

pong.system.fsm.cljs$lang$maxFixedArity = 2;
pong.system.jump = cljs.core.comp.call(null,(function (p1__37422_SHARP_){
return cljs.core.assoc.call(null,p1__37422_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),"jump");
}),pong.system.fsm);
pong.system.flow = cljs.core.comp.call(null,(function (p1__37423_SHARP_){
return cljs.core.assoc.call(null,p1__37423_SHARP_,new cljs.core.Keyword(null,"step","step",1288888124),"flow");
}),pong.system.fsm);
pong.system.reach = (function pong$system$reach(p,q,k){
return clojure.core.matrix.operators._STAR_.call(null,k,clojure.core.matrix.operators._.call(null,q,p));
});
pong.system.avoid = (function pong$system$avoid(p,q,k){
var err = clojure.core.matrix.operators._.call(null,p,q);
return clojure.core.matrix.operators._STAR_.call(null,k,clojure.core.matrix.operators._SLASH_.call(null,err,clojure.core.matrix.magnitude_squared.call(null,err)));
});
pong.system.mean = (function pong$system$mean(mtx){
return clojure.core.matrix.operators._SLASH_.call(null,cljs.core.reduce.call(null,clojure.core.matrix.operators._PLUS_,mtx),cljs.core.count.call(null,mtx));
});
pong.system.dom = clojure.data.avl.sorted_map.call(null,new cljs.core.Keyword(null,"love","love",-1345468865),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"love","love",-1345468865),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.5),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#fa2291"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"center","center",-748944368)], null),0.1], null))], null),new cljs.core.Keyword(null,"fear","fear",1055169340),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"fear","fear",1055169340),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.1),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#11f291"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,pong.system.avoid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fear","fear",1055169340)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"center","center",-748944368)], null),(1)], null))], null),new cljs.core.Keyword("triangle","a","triangle/a",684026198),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1),(3)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","a","triangle/a",684026198)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","a","triangle/a",684026198)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null),0.4], null))], null),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(3),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","b","triangle/b",-1155085986)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null),0.4], null))], null),new cljs.core.Keyword("triangle","c","triangle/c",1110559993),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(1),(1)], null),new cljs.core.Keyword(null,"geometry","geometry",-405034994),pong.system.geometry.call(null,"sphere",0.2),new cljs.core.Keyword(null,"material","material",460118677),pong.system.material.call(null,"#c0c32d"),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.flow.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword("triangle","c","triangle/c",1110559993)], null)),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),0.1], null),new cljs.core.Keyword("fsm","velocity","fsm/velocity",-581683011),pong.system.flow.call(null,pong.system.reach,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("triangle","c","triangle/c",1110559993)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"love","love",-1345468865)], null),0.4], null))], null),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.666,1.666,1.666], null),new cljs.core.Keyword("fsm","position","fsm/position",-2011902600),pong.system.jump.call(null,pong.system.mean,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),pong.system.subgroup.call(null,"triangle"),com.rpl.specter.view.call(null,cljs.core.vals)], null)], null))], null));
pong.system.sys_fsm = (function pong$system$sys_fsm(st,dt){
return cljs.core.reduce.call(null,(function (p1__37425_SHARP_,p2__37424_SHARP_){
var c = cljs.core.peek.call(null,p2__37424_SHARP_);
var nv = pong.system.compute.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(c),st);
return cljs.core.update_in.call(null,p1__37425_SHARP_,cljs.core.pop.call(null,p2__37424_SHARP_),((function (c,nv){
return (function (v){
var G__37427 = new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(c);
switch (G__37427) {
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
}),st,com.rpl.specter.select.call(null,pong.system.FSM_COMPONENTS,st));
});
pong.system.step_ecs = (function pong$system$step_ecs(ecs,dt){
return pong.system.sys_fsm.call(null,ecs,dt);
});
pong.system.step_dom = (function pong$system$step_dom(dom,dt){
return pong.system.switch_path.call(null,pong.system.step_ecs.call(null,pong.system.switch_path.call(null,dom),dt));
});

//# sourceMappingURL=system.js.map