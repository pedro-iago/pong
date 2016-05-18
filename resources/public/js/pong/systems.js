// Compiled by ClojureScript 1.7.228 {}
goog.provide('pong.systems');
goog.require('cljs.core');
goog.require('com.rpl.specter');
goog.require('pong.utils');
goog.require('pong.paths');
goog.require('clojure.core.matrix.operators');
goog.require('clojure.core.matrix');
goog.require('clojure.data.avl');
pong.systems.sys_fsm = (function pong$systems$sys_fsm(st,dt){
return cljs.core.reduce.call(null,(function (p1__39588_SHARP_,p2__39587_SHARP_){
var fsm = cljs.core.peek.call(null,p2__39587_SHARP_);
var nv = pong.utils.compute.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(fsm),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(fsm),st);
return cljs.core.update_in.call(null,p1__39588_SHARP_,cljs.core.pop.call(null,p2__39587_SHARP_),new cljs.core.Keyword(null,"step","step",1288888124).cljs$core$IFn$_invoke$arity$1(fsm),nv,dt);
}),st,com.rpl.specter.select.call(null,pong.paths.FSM_COMPONENTS,st));
});
pong.systems.step_ecs = (function pong$systems$step_ecs(ecs,dt){
return pong.systems.sys_fsm.call(null,ecs,dt);
});

//# sourceMappingURL=systems.js.map