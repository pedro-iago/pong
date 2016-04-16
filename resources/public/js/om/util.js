// Compiled by ClojureScript 1.7.228 {}
goog.provide('om.util');
goog.require('cljs.core');
om.util.force_children = (function om$util$force_children(x){
var G__19003 = x;
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om$util$force_children),G__19003);
} else {
return G__19003;
}
});

//# sourceMappingURL=util.js.map