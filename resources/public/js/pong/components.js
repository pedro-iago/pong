// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.components');
goog.require('cljs.core');
pong.components.position = (function pong$components$position(var_args){
var args30735 = [];
var len__18846__auto___30759 = arguments.length;
var i__18847__auto___30760 = (0);
while(true){
if((i__18847__auto___30760 < len__18846__auto___30759)){
args30735.push((arguments[i__18847__auto___30760]));

var G__30761 = (i__18847__auto___30760 + (1));
i__18847__auto___30760 = G__30761;
continue;
} else {
}
break;
}

var G__30737 = args30735.length;
switch (G__30737) {
case 3:
return pong.components.position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.position.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30735.length)].join('')));

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
var args30738 = [];
var len__18846__auto___30763 = arguments.length;
var i__18847__auto___30764 = (0);
while(true){
if((i__18847__auto___30764 < len__18846__auto___30763)){
args30738.push((arguments[i__18847__auto___30764]));

var G__30765 = (i__18847__auto___30764 + (1));
i__18847__auto___30764 = G__30765;
continue;
} else {
}
break;
}

var G__30740 = args30738.length;
switch (G__30740) {
case 3:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.rotation.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30738.length)].join('')));

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
var args30741 = [];
var len__18846__auto___30767 = arguments.length;
var i__18847__auto___30768 = (0);
while(true){
if((i__18847__auto___30768 < len__18846__auto___30767)){
args30741.push((arguments[i__18847__auto___30768]));

var G__30769 = (i__18847__auto___30768 + (1));
i__18847__auto___30768 = G__30769;
continue;
} else {
}
break;
}

var G__30743 = args30741.length;
switch (G__30743) {
case 3:
return pong.components.scale.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.scale.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30741.length)].join('')));

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
var args30744 = [];
var len__18846__auto___30771 = arguments.length;
var i__18847__auto___30772 = (0);
while(true){
if((i__18847__auto___30772 < len__18846__auto___30771)){
args30744.push((arguments[i__18847__auto___30772]));

var G__30773 = (i__18847__auto___30772 + (1));
i__18847__auto___30772 = G__30773;
continue;
} else {
}
break;
}

var G__30746 = args30744.length;
switch (G__30746) {
case 3:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.velocity.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30744.length)].join('')));

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
var args30747 = [];
var len__18846__auto___30775 = arguments.length;
var i__18847__auto___30776 = (0);
while(true){
if((i__18847__auto___30776 < len__18846__auto___30775)){
args30747.push((arguments[i__18847__auto___30776]));

var G__30777 = (i__18847__auto___30776 + (1));
i__18847__auto___30776 = G__30777;
continue;
} else {
}
break;
}

var G__30749 = args30747.length;
switch (G__30749) {
case 2:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pong.components.geometry.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30747.length)].join('')));

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
var args30750 = [];
var len__18846__auto___30779 = arguments.length;
var i__18847__auto___30780 = (0);
while(true){
if((i__18847__auto___30780 < len__18846__auto___30779)){
args30750.push((arguments[i__18847__auto___30780]));

var G__30781 = (i__18847__auto___30780 + (1));
i__18847__auto___30780 = G__30781;
continue;
} else {
}
break;
}

var G__30752 = args30750.length;
switch (G__30752) {
case 1:
return pong.components.material.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pong.components.material.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30750.length)].join('')));

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
var args30753 = [];
var len__18846__auto___30783 = arguments.length;
var i__18847__auto___30784 = (0);
while(true){
if((i__18847__auto___30784 < len__18846__auto___30783)){
args30753.push((arguments[i__18847__auto___30784]));

var G__30785 = (i__18847__auto___30784 + (1));
i__18847__auto___30784 = G__30785;
continue;
} else {
}
break;
}

var G__30755 = args30753.length;
switch (G__30755) {
case 3:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.sensor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30753.length)].join('')));

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
var args30756 = [];
var len__18846__auto___30787 = arguments.length;
var i__18847__auto___30788 = (0);
while(true){
if((i__18847__auto___30788 < len__18846__auto___30787)){
args30756.push((arguments[i__18847__auto___30788]));

var G__30789 = (i__18847__auto___30788 + (1));
i__18847__auto___30788 = G__30789;
continue;
} else {
}
break;
}

var G__30758 = args30756.length;
switch (G__30758) {
case 3:
return pong.components.control.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return pong.components.control.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30756.length)].join('')));

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
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"components","components",-1073188942),cljs.core.reduce.call(null,(function (p1__30791_SHARP_,p2__30792_SHARP_){
return cljs.core.conj.call(null,p1__30791_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__30792_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__30792_SHARP_))], null));
}),cljs.core.PersistentVector.EMPTY,arr)], null),cljs.core.reduce.call(null,(function (p1__30793_SHARP_,p2__30794_SHARP_){
return cljs.core.assoc_in.call(null,p1__30793_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__30794_SHARP_)),new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__30794_SHARP_))], null),p2__30794_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,arr));
});
cljs.core.print.call(null,pong.components.arr__GT_db.call(null,pong.components.carr));
pong.components.get_entities = (function pong$components$get_entities(arr){
return cljs.core.reduce_kv.call(null,(function (p1__30795_SHARP_,p2__30797_SHARP_,p3__30796_SHARP_){
return cljs.core.conj.call(null,p1__30795_SHARP_,cljs.core.assoc.call(null,p3__30796_SHARP_,new cljs.core.Keyword(null,"euid","euid",-1788655474),p2__30797_SHARP_));
}),cljs.core.PersistentVector.EMPTY,cljs.core.reduce.call(null,(function (p1__30798_SHARP_,p2__30799_SHARP_){
return cljs.core.assoc_in.call(null,p1__30798_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"euid","euid",-1788655474).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__30799_SHARP_)),new cljs.core.Keyword(null,"ctype","ctype",-1444663051).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p2__30799_SHARP_))], null),p2__30799_SHARP_);
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
return (function (p1__30800_SHARP_,p2__30801_SHARP_){
return pong.components.show.call(null,p1__30800_SHARP_,p2__30801_SHARP_,idn);
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
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),(function (p1__30802_SHARP_){
return cljs.core.filterv.call(null,(function (v){
return cljs.core.not_EQ_.call(null,v,idn);
}),p1__30802_SHARP_);
}));
});
/**
 * Conj a link to key
 */
pong.components.show = (function pong$components$show(st,k,idn){
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.conj,idn);
});

//# sourceMappingURL=components.js.map