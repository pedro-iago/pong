// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.components');
goog.require('cljs.core');
pong.components.position = (function pong$components$position(var_args){
var args33939 = [];
var len__19784__auto___33998 = arguments.length;
var i__19785__auto___34000 = (0);
while(true){
if((i__19785__auto___34000 < len__19784__auto___33998)){
args33939.push((arguments[i__19785__auto___34000]));

var G__34002 = (i__19785__auto___34000 + (1));
i__19785__auto___34000 = G__34002;
continue;
} else {
}
break;
}

var G__33946 = args33939.length;
switch (G__33946) {
case 3:
return pong.components.position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.position.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33939.length)].join('')));

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
var args33951 = [];
var len__19784__auto___34010 = arguments.length;
var i__19785__auto___34011 = (0);
while(true){
if((i__19785__auto___34011 < len__19784__auto___34010)){
args33951.push((arguments[i__19785__auto___34011]));

var G__34012 = (i__19785__auto___34011 + (1));
i__19785__auto___34011 = G__34012;
continue;
} else {
}
break;
}

var G__33955 = args33951.length;
switch (G__33955) {
case 3:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33951.length)].join('')));

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
var args33956 = [];
var len__19784__auto___34015 = arguments.length;
var i__19785__auto___34016 = (0);
while(true){
if((i__19785__auto___34016 < len__19784__auto___34015)){
args33956.push((arguments[i__19785__auto___34016]));

var G__34017 = (i__19785__auto___34016 + (1));
i__19785__auto___34016 = G__34017;
continue;
} else {
}
break;
}

var G__33962 = args33956.length;
switch (G__33962) {
case 3:
return pong.components.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33956.length)].join('')));

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
var args33968 = [];
var len__19784__auto___34021 = arguments.length;
var i__19785__auto___34023 = (0);
while(true){
if((i__19785__auto___34023 < len__19784__auto___34021)){
args33968.push((arguments[i__19785__auto___34023]));

var G__34025 = (i__19785__auto___34023 + (1));
i__19785__auto___34023 = G__34025;
continue;
} else {
}
break;
}

var G__33970 = args33968.length;
switch (G__33970) {
case 3:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33968.length)].join('')));

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
var args33971 = [];
var len__19784__auto___34033 = arguments.length;
var i__19785__auto___34034 = (0);
while(true){
if((i__19785__auto___34034 < len__19784__auto___34033)){
args33971.push((arguments[i__19785__auto___34034]));

var G__34035 = (i__19785__auto___34034 + (1));
i__19785__auto___34034 = G__34035;
continue;
} else {
}
break;
}

var G__33975 = args33971.length;
switch (G__33975) {
case 2:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33971.length)].join('')));

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
var args33976 = [];
var len__19784__auto___34038 = arguments.length;
var i__19785__auto___34039 = (0);
while(true){
if((i__19785__auto___34039 < len__19784__auto___34038)){
args33976.push((arguments[i__19785__auto___34039]));

var G__34041 = (i__19785__auto___34039 + (1));
i__19785__auto___34039 = G__34041;
continue;
} else {
}
break;
}

var G__33982 = args33976.length;
switch (G__33982) {
case 1:
return pong.components.material.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.components.material.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33976.length)].join('')));

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
var args33985 = [];
var len__19784__auto___34044 = arguments.length;
var i__19785__auto___34045 = (0);
while(true){
if((i__19785__auto___34045 < len__19784__auto___34044)){
args33985.push((arguments[i__19785__auto___34045]));

var G__34046 = (i__19785__auto___34045 + (1));
i__19785__auto___34045 = G__34046;
continue;
} else {
}
break;
}

var G__33987 = args33985.length;
switch (G__33987) {
case 3:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33985.length)].join('')));

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
var args33988 = [];
var len__19784__auto___34053 = arguments.length;
var i__19785__auto___34054 = (0);
while(true){
if((i__19785__auto___34054 < len__19784__auto___34053)){
args33988.push((arguments[i__19785__auto___34054]));

var G__34055 = (i__19785__auto___34054 + (1));
i__19785__auto___34054 = G__34055;
continue;
} else {
}
break;
}

var G__33996 = args33988.length;
switch (G__33996) {
case 3:
return pong.components.control.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.control.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33988.length)].join('')));

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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.reduce.call(null,(function (p1__34058_SHARP_,p2__34059_SHARP_){
return cljs.core.conj.call(null,p1__34058_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__34059_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__34059_SHARP_))], null));
}),cljs.core.PersistentVector.EMPTY,arr)], null),cljs.core.reduce.call(null,(function (p1__34060_SHARP_,p2__34061_SHARP_){
return cljs.core.assoc_in.call(null,p1__34060_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__34061_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__34061_SHARP_))], null),p2__34061_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,arr));
});
cljs.core.print.call(null,pong.components.arr__GT_db.call(null,pong.components.carr));
pong.components.get_entities = (function pong$components$get_entities(arr){
return cljs.core.reduce_kv.call(null,(function (p1__34066_SHARP_,p2__34068_SHARP_,p3__34067_SHARP_){
return cljs.core.conj.call(null,p1__34066_SHARP_,cljs.core.assoc.call(null,p3__34067_SHARP_,new cljs.core.Keyword(null,"euid","euid",-1788655474),p2__34068_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (p1__34069_SHARP_,p2__34070_SHARP_){
return cljs.core.assoc_in.call(null,p1__34069_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__34070_SHARP_)),new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__34070_SHARP_))], null),p2__34070_SHARP_);
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
return (function (p1__34077_SHARP_,p2__34078_SHARP_){
return pong.components.show.call(null,p1__34077_SHARP_,p2__34078_SHARP_,idn);
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
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__34081_SHARP_){
return cljs.core.filterv.call(null,(function (v){
return cljs.core.not_EQ_.call(null,v,idn);
}),p1__34081_SHARP_);
}));
});
/**
 * Conj a link to key
 */
pong.components.show = (function pong$components$show(st,k,idn){
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.conj,idn);
});

//# sourceMappingURL=components.js.map