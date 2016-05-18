// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.components');
goog.require('cljs.core');
pong.components.position = (function pong$components$position(var_args){
var args20129 = [];
var len__19784__auto___20171 = arguments.length;
var i__19785__auto___20172 = (0);
while(true){
if((i__19785__auto___20172 < len__19784__auto___20171)){
args20129.push((arguments[i__19785__auto___20172]));

var G__20174 = (i__19785__auto___20172 + (1));
i__19785__auto___20172 = G__20174;
continue;
} else {
}
break;
}

var G__20135 = args20129.length;
switch (G__20135) {
case 3:
return pong.components.position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.position.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20129.length)].join('')));

}
});

pong.components.position.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.partial.call(null,pong.components.position,x,y,z);
});

pong.components.position.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,euid){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.position.cljs$lang$maxFixedArity = 4;

pong.components.rotation = (function pong$components$rotation(var_args){
var args20136 = [];
var len__19784__auto___20177 = arguments.length;
var i__19785__auto___20178 = (0);
while(true){
if((i__19785__auto___20178 < len__19784__auto___20177)){
args20136.push((arguments[i__19785__auto___20178]));

var G__20179 = (i__19785__auto___20178 + (1));
i__19785__auto___20178 = G__20179;
continue;
} else {
}
break;
}

var G__20139 = args20136.length;
switch (G__20139) {
case 3:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20136.length)].join('')));

}
});

pong.components.rotation.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.partial.call(null,pong.components.rotation,x,y,z);
});

pong.components.rotation.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,euid){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.rotation.cljs$lang$maxFixedArity = 4;

pong.components.scale = (function pong$components$scale(var_args){
var args20140 = [];
var len__19784__auto___20181 = arguments.length;
var i__19785__auto___20182 = (0);
while(true){
if((i__19785__auto___20182 < len__19784__auto___20181)){
args20140.push((arguments[i__19785__auto___20182]));

var G__20183 = (i__19785__auto___20182 + (1));
i__19785__auto___20182 = G__20183;
continue;
} else {
}
break;
}

var G__20143 = args20140.length;
switch (G__20143) {
case 3:
return pong.components.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20140.length)].join('')));

}
});

pong.components.scale.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.partial.call(null,pong.components.scale,x,y,z);
});

pong.components.scale.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,euid){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),new cljs.core.Keyword(null,"scale","scale",-230427353),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.scale.cljs$lang$maxFixedArity = 4;

pong.components.velocity = (function pong$components$velocity(var_args){
var args20144 = [];
var len__19784__auto___20185 = arguments.length;
var i__19785__auto___20186 = (0);
while(true){
if((i__19785__auto___20186 < len__19784__auto___20185)){
args20144.push((arguments[i__19785__auto___20186]));

var G__20187 = (i__19785__auto___20186 + (1));
i__19785__auto___20186 = G__20187;
continue;
} else {
}
break;
}

var G__20146 = args20144.length;
switch (G__20146) {
case 3:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20144.length)].join('')));

}
});

pong.components.velocity.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.partial.call(null,pong.components.velocity,x,y,z);
});

pong.components.velocity.cljs$core$IFn$_invoke$arity$4 = (function (x,y,z,euid){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,z], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.velocity.cljs$lang$maxFixedArity = 4;

pong.components.geometry = (function pong$components$geometry(var_args){
var args20149 = [];
var len__19784__auto___20189 = arguments.length;
var i__19785__auto___20190 = (0);
while(true){
if((i__19785__auto___20190 < len__19784__auto___20189)){
args20149.push((arguments[i__19785__auto___20190]));

var G__20191 = (i__19785__auto___20190 + (1));
i__19785__auto___20190 = G__20191;
continue;
} else {
}
break;
}

var G__20152 = args20149.length;
switch (G__20152) {
case 2:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20149.length)].join('')));

}
});

pong.components.geometry.cljs$core$IFn$_invoke$arity$2 = (function (p,r){
return cljs.core.partial.call(null,pong.components.geometry,p,r);
});

pong.components.geometry.cljs$core$IFn$_invoke$arity$3 = (function (p,r,euid){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primitive","primitive",1884541424),p,new cljs.core.Keyword(null,"radius","radius",-2073122258),r], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.geometry.cljs$lang$maxFixedArity = 3;

pong.components.material = (function pong$components$material(var_args){
var args20153 = [];
var len__19784__auto___20193 = arguments.length;
var i__19785__auto___20194 = (0);
while(true){
if((i__19785__auto___20194 < len__19784__auto___20193)){
args20153.push((arguments[i__19785__auto___20194]));

var G__20195 = (i__19785__auto___20194 + (1));
i__19785__auto___20194 = G__20195;
continue;
} else {
}
break;
}

var G__20158 = args20153.length;
switch (G__20158) {
case 1:
return pong.components.material.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.components.material.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20153.length)].join('')));

}
});

pong.components.material.cljs$core$IFn$_invoke$arity$1 = (function (c){
return cljs.core.partial.call(null,pong.components.material,c);
});

pong.components.material.cljs$core$IFn$_invoke$arity$2 = (function (c,euid){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),c], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),new cljs.core.Keyword(null,"material","material",460118677),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.material.cljs$lang$maxFixedArity = 2;

pong.components.sensor = (function pong$components$sensor(var_args){
var args20160 = [];
var len__19784__auto___20198 = arguments.length;
var i__19785__auto___20199 = (0);
while(true){
if((i__19785__auto___20199 < len__19784__auto___20198)){
args20160.push((arguments[i__19785__auto___20199]));

var G__20200 = (i__19785__auto___20199 + (1));
i__19785__auto___20199 = G__20200;
continue;
} else {
}
break;
}

var G__20162 = args20160.length;
switch (G__20162) {
case 3:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20160.length)].join('')));

}
});

pong.components.sensor.cljs$core$IFn$_invoke$arity$3 = (function (ty,tr,sq){
return cljs.core.partial.call(null,pong.components.sensor,ty,tr,sq);
});

pong.components.sensor.cljs$core$IFn$_invoke$arity$4 = (function (ty,tr,sq,euid){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ty,euid], null),new cljs.core.Keyword(null,"transform","transform",1381301764),tr,new cljs.core.Keyword(null,"query","query",-1288509510),sq], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),cljs.core.keyword.call(null,"sensor",cljs.core.name.call(null,ty)),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.sensor.cljs$lang$maxFixedArity = 4;

pong.components.control = (function pong$components$control(var_args){
var args20166 = [];
var len__19784__auto___20204 = arguments.length;
var i__19785__auto___20205 = (0);
while(true){
if((i__19785__auto___20205 < len__19784__auto___20204)){
args20166.push((arguments[i__19785__auto___20205]));

var G__20206 = (i__19785__auto___20205 + (1));
i__19785__auto___20205 = G__20206;
continue;
} else {
}
break;
}

var G__20168 = args20166.length;
switch (G__20168) {
case 3:
return pong.components.control.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.control.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20166.length)].join('')));

}
});

pong.components.control.cljs$core$IFn$_invoke$arity$3 = (function (ty,tr,sq){
return cljs.core.partial.call(null,pong.components.control,ty,tr,sq);
});

pong.components.control.cljs$core$IFn$_invoke$arity$4 = (function (ty,tr,sq,euid){
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ident","ident",-742346),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ty,euid], null),new cljs.core.Keyword(null,"transform","transform",1381301764),tr,new cljs.core.Keyword(null,"query","query",-1288509510),sq], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051),cljs.core.keyword.call(null,"control",cljs.core.name.call(null,ty)),new cljs.core.Keyword(null,"euid","euid",-1788655474),euid], null));
});

pong.components.control.cljs$lang$maxFixedArity = 4;
pong.components.carr = cljs.core.concat.call(null,cljs.core.juxt.call(null,pong.components.position.call(null,(0),(0),(1)),pong.components.rotation.call(null,(0),(0),(0)),pong.components.scale.call(null,(1),(1),(1)),pong.components.velocity.call(null,(0),0.1,(0)),pong.components.geometry.call(null,new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),0.01),pong.components.material.call(null,(2300671))).call(null,new cljs.core.Keyword(null,"dot","dot",1442709401)),cljs.core.juxt.call(null,pong.components.position.call(null,(1),(0),(0)),pong.components.rotation.call(null,(0),(0),(0)),pong.components.scale.call(null,(1),(1),(1)),pong.components.velocity.call(null,(0),(0),(0)),pong.components.control.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355),"#(* 0.01 (- %2 %1))",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"bob","bob",-1352926751)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"dot","dot",1442709401)], null)], null)),pong.components.geometry.call(null,new cljs.core.Symbol(null,"sphere","sphere",2024868647,null),0.2),pong.components.material.call(null,(2300671))).call(null,new cljs.core.Keyword(null,"bob","bob",-1352926751)));
pong.components.arr__GT_db = (function pong$components$arr__GT_db(arr){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.reduce.call(null,(function (p1__20211_SHARP_,p2__20212_SHARP_){
return cljs.core.conj.call(null,p1__20211_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20212_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20212_SHARP_))], null));
}),cljs.core.PersistentVector.EMPTY,arr)], null),cljs.core.reduce.call(null,(function (p1__20213_SHARP_,p2__20214_SHARP_){
return cljs.core.assoc_in.call(null,p1__20213_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20214_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20214_SHARP_))], null),p2__20214_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,arr));
});
cljs.core.print.call(null,pong.components.arr__GT_db.call(null,pong.components.carr));
pong.components.get_entities = (function pong$components$get_entities(arr){
return cljs.core.reduce_kv.call(null,(function (p1__20215_SHARP_,p2__20217_SHARP_,p3__20216_SHARP_){
return cljs.core.conj.call(null,p1__20215_SHARP_,cljs.core.assoc.call(null,p3__20216_SHARP_,new cljs.core.Keyword(null,"euid","euid",-1788655474),p2__20217_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (p1__20218_SHARP_,p2__20219_SHARP_){
return cljs.core.assoc_in.call(null,p1__20218_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20219_SHARP_)),new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20219_SHARP_))], null),p2__20219_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,arr));
});
cljs.core.print.call(null,pong.components.get_entities.call(null,pong.components.carr));
/**
 * Add component and link at keys
 */
pong.components.add = (function pong$components$add(st,c,ks){
var m = cljs.core.meta.call(null,c);
var idn = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(m)], null);
return cljs.core.assoc_in.call(null,cljs.core.reduce.call(null,((function (m,idn){
return (function (p1__20220_SHARP_,p2__20221_SHARP_){
return pong.components.show.call(null,p1__20220_SHARP_,p2__20221_SHARP_,idn);
});})(m,idn))
,st,ks),idn,c);
});
/**
 * Delete component and links
 */
pong.components.delete$ = (function pong$components$delete(st,idn){
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,idn)], null),cljs.core.dissoc,cljs.core.second.call(null,idn));
});
/**
 * Omit a link at key
 */
pong.components.omit = (function pong$components$omit(st,k,idn){
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__20222_SHARP_){
return cljs.core.filterv.call(null,(function (v){
return cljs.core.not_EQ_.call(null,v,idn);
}),p1__20222_SHARP_);
}));
});
/**
 * Conj a link to key
 */
pong.components.show = (function pong$components$show(st,k,idn){
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.conj,idn);
});

//# sourceMappingURL=components.js.map