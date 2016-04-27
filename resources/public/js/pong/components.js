// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.components');
goog.require('cljs.core');
pong.components.position = (function pong$components$position(var_args){
var args20148 = [];
var len__19784__auto___20179 = arguments.length;
var i__19785__auto___20180 = (0);
while(true){
if((i__19785__auto___20180 < len__19784__auto___20179)){
args20148.push((arguments[i__19785__auto___20180]));

var G__20181 = (i__19785__auto___20180 + (1));
i__19785__auto___20180 = G__20181;
continue;
} else {
}
break;
}

var G__20151 = args20148.length;
switch (G__20151) {
case 3:
return pong.components.position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.position.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20148.length)].join('')));

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
var args20152 = [];
var len__19784__auto___20183 = arguments.length;
var i__19785__auto___20184 = (0);
while(true){
if((i__19785__auto___20184 < len__19784__auto___20183)){
args20152.push((arguments[i__19785__auto___20184]));

var G__20185 = (i__19785__auto___20184 + (1));
i__19785__auto___20184 = G__20185;
continue;
} else {
}
break;
}

var G__20154 = args20152.length;
switch (G__20154) {
case 3:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20152.length)].join('')));

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
var args20155 = [];
var len__19784__auto___20187 = arguments.length;
var i__19785__auto___20188 = (0);
while(true){
if((i__19785__auto___20188 < len__19784__auto___20187)){
args20155.push((arguments[i__19785__auto___20188]));

var G__20189 = (i__19785__auto___20188 + (1));
i__19785__auto___20188 = G__20189;
continue;
} else {
}
break;
}

var G__20157 = args20155.length;
switch (G__20157) {
case 3:
return pong.components.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20155.length)].join('')));

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
var args20158 = [];
var len__19784__auto___20191 = arguments.length;
var i__19785__auto___20192 = (0);
while(true){
if((i__19785__auto___20192 < len__19784__auto___20191)){
args20158.push((arguments[i__19785__auto___20192]));

var G__20193 = (i__19785__auto___20192 + (1));
i__19785__auto___20192 = G__20193;
continue;
} else {
}
break;
}

var G__20162 = args20158.length;
switch (G__20162) {
case 3:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20158.length)].join('')));

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
var args20164 = [];
var len__19784__auto___20195 = arguments.length;
var i__19785__auto___20196 = (0);
while(true){
if((i__19785__auto___20196 < len__19784__auto___20195)){
args20164.push((arguments[i__19785__auto___20196]));

var G__20197 = (i__19785__auto___20196 + (1));
i__19785__auto___20196 = G__20197;
continue;
} else {
}
break;
}

var G__20166 = args20164.length;
switch (G__20166) {
case 2:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20164.length)].join('')));

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
var args20167 = [];
var len__19784__auto___20208 = arguments.length;
var i__19785__auto___20209 = (0);
while(true){
if((i__19785__auto___20209 < len__19784__auto___20208)){
args20167.push((arguments[i__19785__auto___20209]));

var G__20211 = (i__19785__auto___20209 + (1));
i__19785__auto___20209 = G__20211;
continue;
} else {
}
break;
}

var G__20169 = args20167.length;
switch (G__20169) {
case 1:
return pong.components.material.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.components.material.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20167.length)].join('')));

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
var args20173 = [];
var len__19784__auto___20214 = arguments.length;
var i__19785__auto___20215 = (0);
while(true){
if((i__19785__auto___20215 < len__19784__auto___20214)){
args20173.push((arguments[i__19785__auto___20215]));

var G__20216 = (i__19785__auto___20215 + (1));
i__19785__auto___20215 = G__20216;
continue;
} else {
}
break;
}

var G__20175 = args20173.length;
switch (G__20175) {
case 3:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20173.length)].join('')));

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
var args20176 = [];
var len__19784__auto___20218 = arguments.length;
var i__19785__auto___20219 = (0);
while(true){
if((i__19785__auto___20219 < len__19784__auto___20218)){
args20176.push((arguments[i__19785__auto___20219]));

var G__20220 = (i__19785__auto___20219 + (1));
i__19785__auto___20219 = G__20220;
continue;
} else {
}
break;
}

var G__20178 = args20176.length;
switch (G__20178) {
case 3:
return pong.components.control.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.control.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20176.length)].join('')));

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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.reduce.call(null,(function (p1__20226_SHARP_,p2__20227_SHARP_){
return cljs.core.conj.call(null,p1__20226_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20227_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20227_SHARP_))], null));
}),cljs.core.PersistentVector.EMPTY,arr)], null),cljs.core.reduce.call(null,(function (p1__20228_SHARP_,p2__20229_SHARP_){
return cljs.core.assoc_in.call(null,p1__20228_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20229_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20229_SHARP_))], null),p2__20229_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,arr));
});
cljs.core.print.call(null,pong.components.arr__GT_db.call(null,pong.components.carr));
pong.components.get_entities = (function pong$components$get_entities(arr){
return cljs.core.reduce_kv.call(null,(function (p1__20235_SHARP_,p2__20237_SHARP_,p3__20236_SHARP_){
return cljs.core.conj.call(null,p1__20235_SHARP_,cljs.core.assoc.call(null,p3__20236_SHARP_,new cljs.core.Keyword(null,"euid","euid",-1788655474),p2__20237_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (p1__20238_SHARP_,p2__20239_SHARP_){
return cljs.core.assoc_in.call(null,p1__20238_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20239_SHARP_)),new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__20239_SHARP_))], null),p2__20239_SHARP_);
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
return (function (p1__20242_SHARP_,p2__20243_SHARP_){
return pong.components.show.call(null,p1__20242_SHARP_,p2__20243_SHARP_,idn);
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
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__20246_SHARP_){
return cljs.core.filterv.call(null,(function (v){
return cljs.core.not_EQ_.call(null,v,idn);
}),p1__20246_SHARP_);
}));
});
/**
 * Conj a link to key
 */
pong.components.show = (function pong$components$show(st,k,idn){
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.conj,idn);
});

//# sourceMappingURL=components.js.map