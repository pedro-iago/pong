// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('om.next');
goog.require('cljs.core');
goog.require('goog.log');
goog.require('goog.string');
goog.require('om.next.cache');
goog.require('clojure.zip');
goog.require('om.next.protocols');
goog.require('om.next.impl.parser');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('om.util');
goog.require('om.tempid');
goog.require('om.transit');
goog.require('goog.debug.Console');
if(typeof om.next._STAR_logger_STAR_ !== 'undefined'){
} else {
om.next._STAR_logger_STAR_ = ((goog.DEBUG)?(function (){
(new goog.debug.Console()).setCapturing(true);

return goog.log.getLogger("om.next");
})()
:null);
}
om.next.roots = (function (){var G__10758 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10758) : cljs.core.atom.call(null,G__10758));
})();
om.next._STAR_raf_STAR_ = null;
om.next._STAR_reconciler_STAR_ = null;
om.next._STAR_parent_STAR_ = null;
om.next._STAR_shared_STAR_ = null;
om.next._STAR_instrument_STAR_ = null;
om.next._STAR_depth_STAR_ = (0);
om.next.nil_or_map_QMARK_ = (function om$next$nil_or_map_QMARK_(x){
return ((x == null)) || (cljs.core.map_QMARK_(x));
});
/**
 * Returns true if x is an ident.
 */
om.next.ident_QMARK_ = (function om$next$ident_QMARK_(x){
return (cljs.core.vector_QMARK_(x)) && (((2) === cljs.core.count(x))) && ((cljs.core.nth.cljs$core$IFn$_invoke$arity$2(x,(0)) instanceof cljs.core.Keyword));
});
om.next.recursion_QMARK_ = (function om$next$recursion_QMARK_(x){
return (cljs.core.symbol_identical_QMARK_(cljs.core.cst$sym$$$$,x)) || (typeof x === 'number');
});
/**
 * Given a query expression return its key.
 */
om.next.expr__GT_key = (function om$next$expr__GT_key(expr){
if((expr instanceof cljs.core.Keyword)){
return expr;
} else {
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
var expr_SINGLEQUOTE_ = cljs.core.first(expr);
if(cljs.core.map_QMARK_(expr_SINGLEQUOTE_)){
return cljs.core.ffirst(expr_SINGLEQUOTE_);
} else {
return null;
}
} else {
if(om.next.ident_QMARK_(expr)){
var G__10760 = expr;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(expr))){
return cljs.core.first(G__10760);
} else {
return G__10760;
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("Invalid query expr "),cljs.core.str(expr)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$error_SLASH_invalid_DASH_expression], null));

}
}
}
}
});
/**
 * Return a zipper on a query expression.
 */
om.next.query_zip = (function om$next$query_zip(root){
return clojure.zip.zipper((function (p1__10761_SHARP_){
return (cljs.core.vector_QMARK_(p1__10761_SHARP_)) || (cljs.core.map_QMARK_(p1__10761_SHARP_)) || (cljs.core.seq_QMARK_(p1__10761_SHARP_));
}),cljs.core.seq,(function (node,children){
var ret = ((cljs.core.vector_QMARK_(node))?cljs.core.vec(children):((cljs.core.map_QMARK_(node))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_(node))?children:null)));
return cljs.core.with_meta(ret,cljs.core.meta(node));
}),root);
});
/**
 * Move from the current zipper location to the specified key. loc must be a
 * hash map node.
 */
om.next.move_to_key = (function om$next$move_to_key(loc,k){
var loc__$1 = clojure.zip.down(loc);
while(true){
var node = clojure.zip.node(loc__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(node))){
return clojure.zip.right(clojure.zip.down(loc__$1));
} else {
var G__10762 = clojure.zip.right(loc__$1);
loc__$1 = G__10762;
continue;
}
break;
}
});
om.next.union_QMARK_ = (function om$next$union_QMARK_(expr){
var expr__$1 = (function (){var G__10764 = expr;
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.first(G__10764);
} else {
return G__10764;
}
})();
return (cljs.core.map_QMARK_(expr__$1)) && (cljs.core.map_QMARK_(cljs.core.second(cljs.core.first(expr__$1))));
});
/**
 * Given a query and a path into a query return a zipper focused at the location
 * specified by the path. This location can be replaced to customize / alter
 * the query.
 */
om.next.query_template = (function om$next$query_template(query,path){
var query_template_STAR_ = (function om$next$query_template_$_query_template_STAR_(loc,path__$1){
while(true){
if(cljs.core.empty_QMARK_(path__$1)){
return loc;
} else {
var node = clojure.zip.node(loc);
if(cljs.core.vector_QMARK_(node)){
var G__10773 = clojure.zip.down(loc);
var G__10774 = path__$1;
loc = G__10773;
path__$1 = G__10774;
continue;
} else {
var vec__10772 = path__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10772,(0),null);
var ks = cljs.core.nthnext(vec__10772,(1));
var k_SINGLEQUOTE_ = om.next.expr__GT_key(node);
if(cljs.core.keyword_identical_QMARK_(k,k_SINGLEQUOTE_)){
if(cljs.core.map_QMARK_(node)){
var loc_SINGLEQUOTE_ = om.next.move_to_key(loc,k);
var node_SINGLEQUOTE_ = clojure.zip.node(loc_SINGLEQUOTE_);
if(cljs.core.map_QMARK_(node_SINGLEQUOTE_)){
if(cljs.core.seq(ks)){
var G__10775 = clojure.zip.replace(loc_SINGLEQUOTE_,clojure.zip.node(om.next.move_to_key(loc_SINGLEQUOTE_,cljs.core.first(ks))));
var G__10776 = cljs.core.next(ks);
loc = G__10775;
path__$1 = G__10776;
continue;
} else {
return loc_SINGLEQUOTE_;
}
} else {
var G__10777 = loc_SINGLEQUOTE_;
var G__10778 = ks;
loc = G__10777;
path__$1 = G__10778;
continue;
}
} else {
var G__10779 = clojure.zip.right(clojure.zip.down(clojure.zip.down(clojure.zip.down(loc))));
var G__10780 = ks;
loc = G__10779;
path__$1 = G__10780;
continue;
}
} else {
var G__10781 = clojure.zip.right(loc);
var G__10782 = path__$1;
loc = G__10781;
path__$1 = G__10782;
continue;
}
}
}
break;
}
});
return query_template_STAR_(om.next.query_zip(query),path);
});
om.next.replace = (function om$next$replace(template,new_query){
return clojure.zip.root(clojure.zip.replace(template,new_query));
});
om.next.join_key = (function om$next$join_key(expr){
if(cljs.core.map_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
if(cljs.core.seq_QMARK_(expr)){
return om$next$join_key(cljs.core.first(expr));
} else {
return expr;

}
}
});
om.next.join_entry = (function om$next$join_entry(expr){
if(cljs.core.seq_QMARK_(expr)){
return cljs.core.ffirst(expr);
} else {
return cljs.core.first(expr);
}
});
om.next.join_value = (function om$next$join_value(join){
return cljs.core.second(om.next.join_entry(join));
});
om.next.join_QMARK_ = (function om$next$join_QMARK_(x){
var x__$1 = ((cljs.core.seq_QMARK_(x))?cljs.core.first(x):x);
return cljs.core.map_QMARK_(x__$1);
});
om.next.focused_join = (function om$next$focused_join(expr,ks){
if(cljs.core.map_QMARK_(expr)){
return cljs.core.PersistentArrayMap.fromArray([cljs.core.ffirst(expr),(function (){var G__10788 = cljs.core.second(cljs.core.first(expr));
var G__10789 = ks;
return (om.next.focus_query.cljs$core$IFn$_invoke$arity$2 ? om.next.focus_query.cljs$core$IFn$_invoke$arity$2(G__10788,G__10789) : om.next.focus_query.call(null,G__10788,G__10789));
})()], true, false);
} else {
if(cljs.core.seq_QMARK_(expr)){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(expr)),om$next$focused_join(cljs.core.first(expr),ks));
} else {
return expr;

}
}
});
/**
 * Given a query, focus it along the specified path.
 * 
 *   Examples:
 *  (om.next/focus-query [:foo :bar :baz] [:foo])
 *  => [:foo]
 * 
 *  (om.next/focus-query [{:foo [:bar :baz]} :woz] [:foo :bar])
 *  => [{:foo [:bar]}]
 */
om.next.focus_query = (function om$next$focus_query(query,path){
if(cljs.core.empty_QMARK_(path)){
return query;
} else {
var vec__10793 = path;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10793,(0),null);
var ks = cljs.core.nthnext(vec__10793,(1));
var match = ((function (vec__10793,k,ks){
return (function om$next$focus_query_$_match(x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,om.next.join_key(x));
});})(vec__10793,k,ks))
;
var value = ((function (vec__10793,k,ks){
return (function om$next$focus_query_$_value(x){
return om.next.focused_join(x,ks);
});})(vec__10793,k,ks))
;
if(cljs.core.map_QMARK_(query)){
return cljs.core.PersistentArrayMap.fromArray([k,om$next$focus_query(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,k),ks)], true, false);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(match),cljs.core.map.cljs$core$IFn$_invoke$arity$1(value),cljs.core.take.cljs$core$IFn$_invoke$arity$1((1))),query);
}
}
});
/**
 * Given a focused query return the path represented by the query.
 * 
 * Examples:
 * 
 *   (om.next/focus->path [{:foo [{:bar {:baz []}]}])
 *   => [:foo :bar :baz]
 */
om.next.focus__GT_path = (function om$next$focus__GT_path(var_args){
var args10794 = [];
var len__6849__auto___10798 = arguments.length;
var i__6850__auto___10799 = (0);
while(true){
if((i__6850__auto___10799 < len__6849__auto___10798)){
args10794.push((arguments[i__6850__auto___10799]));

var G__10800 = (i__6850__auto___10799 + (1));
i__6850__auto___10799 = G__10800;
continue;
} else {
}
break;
}

var G__10796 = args10794.length;
switch (G__10796) {
case 1:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10794.length)].join('')));

}
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (focus){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,cljs.core.cst$sym$_STAR_,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (focus,bound){
return om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3(focus,bound,cljs.core.PersistentVector.EMPTY);
});

om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$3 = (function (focus,bound,path){
while(true){
if(cljs.core.truth_((function (){var and__5779__auto__ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(bound,cljs.core.cst$sym$_STAR_)) || ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(path,bound)) && ((cljs.core.count(path) < cljs.core.count(bound))));
if(and__5779__auto__){
var and__5779__auto____$1 = cljs.core.some(om.next.join_QMARK_,focus);
if(cljs.core.truth_(and__5779__auto____$1)){
return ((1) === cljs.core.count(focus));
} else {
return and__5779__auto____$1;
}
} else {
return and__5779__auto__;
}
})())){
var vec__10797 = om.next.join_entry(cljs.core.first(focus));
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,(0),null);
var focus_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10797,(1),null);
var k__$1 = (cljs.core.truth_((om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : om.next.ident_QMARK_.call(null,k)))?cljs.core.first(k):k);
var focus_SINGLEQUOTE___$1 = ((om.next.recursion_QMARK_(focus_SINGLEQUOTE_))?focus:focus_SINGLEQUOTE_);
var G__10802 = focus_SINGLEQUOTE___$1;
var G__10803 = bound;
var G__10804 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k__$1);
focus = G__10802;
bound = G__10803;
path = G__10804;
continue;
} else {
return path;
}
break;
}
});

om.next.focus__GT_path.cljs$lang$maxFixedArity = 3;

/**
 * @interface
 */
om.next.Ident = function(){};

/**
 * Return the ident for this component
 */
om.next.ident = (function om$next$ident(this$,props){
if((!((this$ == null))) && (!((this$.om$next$Ident$ident$arity$2 == null)))){
return this$.om$next$Ident$ident$arity$2(this$,props);
} else {
var x__6446__auto__ = (((this$ == null))?null:this$);
var m__6447__auto__ = (om.next.ident[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$2(this$,props) : m__6447__auto__.call(null,this$,props));
} else {
var m__6447__auto____$1 = (om.next.ident["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,props) : m__6447__auto____$1.call(null,this$,props));
} else {
throw cljs.core.missing_protocol("Ident.ident",this$);
}
}
}
});


/**
 * @interface
 */
om.next.IQueryParams = function(){};

/**
 * Return the query parameters
 */
om.next.params = (function om$next$params(this$){
if((!((this$ == null))) && (!((this$.om$next$IQueryParams$params$arity$1 == null)))){
return this$.om$next$IQueryParams$params$arity$1(this$);
} else {
var x__6446__auto__ = (((this$ == null))?null:this$);
var m__6447__auto__ = (om.next.params[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto__.call(null,this$));
} else {
var m__6447__auto____$1 = (om.next.params["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQueryParams.params",this$);
}
}
}
});

(om.next.IQueryParams["_"] = true);

(om.next.params["_"] = (function (_){
return null;
}));

/**
 * @interface
 */
om.next.IQuery = function(){};

/**
 * Return the component's unbound query
 */
om.next.query = (function om$next$query(this$){
if((!((this$ == null))) && (!((this$.om$next$IQuery$query$arity$1 == null)))){
return this$.om$next$IQuery$query$arity$1(this$);
} else {
var x__6446__auto__ = (((this$ == null))?null:this$);
var m__6447__auto__ = (om.next.query[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto__.call(null,this$));
} else {
var m__6447__auto____$1 = (om.next.query["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IQuery.query",this$);
}
}
}
});


/**
 * @interface
 */
om.next.ILocalState = function(){};

/**
 * Set the component's local state
 */
om.next._set_state_BANG_ = (function om$next$_set_state_BANG_(this$,new_state){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_set_state_BANG_$arity$2 == null)))){
return this$.om$next$ILocalState$_set_state_BANG_$arity$2(this$,new_state);
} else {
var x__6446__auto__ = (((this$ == null))?null:this$);
var m__6447__auto__ = (om.next._set_state_BANG_[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__6447__auto__.call(null,this$,new_state));
} else {
var m__6447__auto____$1 = (om.next._set_state_BANG_["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,new_state) : m__6447__auto____$1.call(null,this$,new_state));
} else {
throw cljs.core.missing_protocol("ILocalState.-set-state!",this$);
}
}
}
});

/**
 * Get the component's local state
 */
om.next._get_state = (function om$next$_get_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_state$arity$1(this$);
} else {
var x__6446__auto__ = (((this$ == null))?null:this$);
var m__6447__auto__ = (om.next._get_state[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto__.call(null,this$));
} else {
var m__6447__auto____$1 = (om.next._get_state["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-state",this$);
}
}
}
});

/**
 * Get the component's rendered local state
 */
om.next._get_rendered_state = (function om$next$_get_rendered_state(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_get_rendered_state$arity$1 == null)))){
return this$.om$next$ILocalState$_get_rendered_state$arity$1(this$);
} else {
var x__6446__auto__ = (((this$ == null))?null:this$);
var m__6447__auto__ = (om.next._get_rendered_state[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto__.call(null,this$));
} else {
var m__6447__auto____$1 = (om.next._get_rendered_state["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-get-rendered-state",this$);
}
}
}
});

/**
 * Get the component's pending local state
 */
om.next._merge_pending_state_BANG_ = (function om$next$_merge_pending_state_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1 == null)))){
return this$.om$next$ILocalState$_merge_pending_state_BANG_$arity$1(this$);
} else {
var x__6446__auto__ = (((this$ == null))?null:this$);
var m__6447__auto__ = (om.next._merge_pending_state_BANG_[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto__.call(null,this$));
} else {
var m__6447__auto____$1 = (om.next._merge_pending_state_BANG_["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6447__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("ILocalState.-merge-pending-state!",this$);
}
}
}
});

om.next.var_QMARK_ = (function om$next$var_QMARK_(x){
var and__5779__auto__ = (x instanceof cljs.core.Symbol);
if(and__5779__auto__){
var G__10811 = [cljs.core.str(x)].join('');
var G__10812 = "?";
return goog.string.startsWith(G__10811,G__10812);
} else {
return and__5779__auto__;
}
});
om.next.var__GT_keyword = (function om$next$var__GT_keyword(x){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(x)].join('').substring((1)));
});
om.next.bind_query = (function om$next$bind_query(query,params){
var replace_var = (function om$next$bind_query_$_replace_var(expr){
if(cljs.core.truth_(om.next.var_QMARK_(expr))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,om.next.var__GT_keyword(expr),expr);
} else {
return expr;
}
});
return clojure.walk.prewalk(replace_var,query);
});


om.next.get_local_query_data = (function om$next$get_local_query_data(component){
var G__10814 = (om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1 ? om.next.get_reconciler.cljs$core$IFn$_invoke$arity$1(component) : om.next.get_reconciler.call(null,component));
var G__10814__$1 = (((G__10814 == null))?null:cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__10814));
var G__10814__$2 = (((G__10814__$1 == null))?null:cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__10814__$1));
var G__10814__$3 = (((G__10814__$2 == null))?null:(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10814__$2) : cljs.core.deref.call(null,G__10814__$2)));
var G__10814__$4 = (((G__10814__$3 == null))?null:cljs.core.cst$kw$om$next_SLASH_queries.cljs$core$IFn$_invoke$arity$1(G__10814__$3));
if((G__10814__$4 == null)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__10814__$4,component);
}
});
/**
 * Return the unbound query for a component.
 */
om.next.get_unbound_query = (function om$next$get_unbound_query(component){
return cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.query(component));
});
/**
 * Return the query params for a component.
 */
om.next.get_params = (function om$next$get_params(component){
return cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(om.next.get_local_query_data(component),om.next.params(component));
});
om.next.get_component_query = (function om$next$get_component_query(c){
var qps = om.next.get_local_query_data(c);
var q = cljs.core.cst$kw$query.cljs$core$IFn$_invoke$arity$2(qps,om.next.query(c));
var c_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c_SINGLEQUOTE_ == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(c),cljs.core.str(" reuses "),cljs.core.str(c_SINGLEQUOTE_),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c_SINGLEQUOTE_)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,cljs.core.cst$kw$params.cljs$core$IFn$_invoke$arity$2(qps,om.next.params(c))),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,cljs.core.type(c)], null));
});
om.next.iquery_QMARK_ = (function om$next$iquery_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var x__$1 = (function (){var G__10819 = x.prototype;
return Object.create(G__10819);
})();
if(!((x__$1 == null))){
if((false) || (x__$1.om$next$IQuery$)){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return null;
}
}
});
/**
 * Return a IQuery/IParams instance bound query. Works for component classes
 * and component instances. See also om.next/full-query.
 */
om.next.get_query = (function om$next$get_query(x){
if(((!((x == null)))?(((false) || (x.om$next$IQuery$))?true:false):false)){
if(cljs.core.truth_((om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.component_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.component_QMARK_.call(null,x)))){
return om.next.get_component_query(x);
} else {
var q = om.next.query(x);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(x),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(x)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
}
} else {
if(cljs.core.truth_(goog.isFunction(x))){
var y = (function (){var G__10825 = x.prototype;
return Object.create(G__10825);
})();
if(((!((y == null)))?(((false) || (y.om$next$IQuery$))?true:false):false)){
var q = om.next.query(y);
var c = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q));
if((c == null)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Query violation, "),cljs.core.str(y),cljs.core.str(" reuses "),cljs.core.str(c),cljs.core.str(" query")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return cljs.core.with_meta(om.next.bind_query(q,om.next.params(y)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component,x], null));
} else {
return null;
}
} else {
return null;
}
}
});
om.next.tag = (function om$next$tag(x,class$){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,cljs.core.cst$kw$component,class$);
});

/**
* @constructor
*/
om.next.OmProps = (function (props,basis_t){
this.props = props;
this.basis_t = basis_t;
})

om.next.OmProps.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$props,cljs.core.cst$sym$basis_DASH_t], null);
});

om.next.OmProps.cljs$lang$type = true;

om.next.OmProps.cljs$lang$ctorStr = "om.next/OmProps";

om.next.OmProps.cljs$lang$ctorPrWriter = (function (this__6389__auto__,writer__6390__auto__,opt__6391__auto__){
return cljs.core._write(writer__6390__auto__,"om.next/OmProps");
});

om.next.__GT_OmProps = (function om$next$__GT_OmProps(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});

om.next.om_props = (function om$next$om_props(props,basis_t){
return (new om.next.OmProps(props,basis_t));
});
om.next.om_props_basis = (function om$next$om_props_basis(om_props){
return om_props.basis_t;
});
om.next.nil_props = om.next.om_props(null,(-1));
om.next.unwrap = (function om$next$unwrap(om_props){
return om_props.props;
});
om.next.compute_react_key = (function om$next$compute_react_key(cl,props){
var temp__4655__auto__ = cljs.core.cst$kw$react_DASH_key.cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4655__auto__)){
var rk = temp__4655__auto__;
return rk;
} else {
var temp__4655__auto____$1 = cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props));
if(cljs.core.truth_(temp__4655__auto____$1)){
var idx = temp__4655__auto____$1;
return [cljs.core.str(cl.name),cljs.core.str("_"),cljs.core.str(idx)].join('');
} else {
return undefined;
}
}
});
/**
 * Create a factory constructor from a component class created with
 * om.next/defui.
 */
om.next.factory = (function om$next$factory(var_args){
var args10827 = [];
var len__6849__auto___10843 = arguments.length;
var i__6850__auto___10844 = (0);
while(true){
if((i__6850__auto___10844 < len__6849__auto___10843)){
args10827.push((arguments[i__6850__auto___10844]));

var G__10845 = (i__6850__auto___10844 + (1));
i__6850__auto___10844 = G__10845;
continue;
} else {
}
break;
}

var G__10829 = args10827.length;
switch (G__10829) {
case 1:
return om.next.factory.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.factory.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10827.length)].join('')));

}
});

om.next.factory.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return om.next.factory.cljs$core$IFn$_invoke$arity$2(class$,null);
});

om.next.factory.cljs$core$IFn$_invoke$arity$2 = (function (class$,p__10830){
var map__10831 = p__10830;
var map__10831__$1 = ((((!((map__10831 == null)))?((((map__10831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10831):map__10831);
var opts = map__10831__$1;
var validator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10831__$1,cljs.core.cst$kw$validator);
var keyfn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10831__$1,cljs.core.cst$kw$keyfn);
if(cljs.core.fn_QMARK_(class$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$class)], 0)))].join('')));
}

return ((function (map__10831,map__10831__$1,opts,validator,keyfn){
return (function() { 
var om$next$self__delegate = function (props,children){
if((validator == null)){
} else {
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(props) : validator.call(null,props)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$validator,cljs.core.cst$sym$props)], 0)))].join('')));
}
}

if(cljs.core.truth_(om.next._STAR_instrument_STAR_)){
var G__10838 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$props,props,cljs.core.cst$kw$children,children,cljs.core.cst$kw$class,class$,cljs.core.cst$kw$factory,om$next$self], null);
return (om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$1(G__10838) : om.next._STAR_instrument_STAR_.call(null,G__10838));
} else {
var key = ((!((keyfn == null)))?(keyfn.cljs$core$IFn$_invoke$arity$1 ? keyfn.cljs$core$IFn$_invoke$arity$1(props) : keyfn.call(null,props)):om.next.compute_react_key(class$,props));
var ref = cljs.core.cst$kw$ref.cljs$core$IFn$_invoke$arity$1(props);
var ref__$1 = (function (){var G__10839 = ref;
if((ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__10839)].join('');
} else {
return G__10839;
}
})();
var t = ((!((om.next._STAR_reconciler_STAR_ == null)))?om.next.protocols.basis_t(om.next._STAR_reconciler_STAR_):(0));
var G__10840 = class$;
var G__10841 = {"omcljs$value": om.next.om_props(props,t), "omcljs$instrument": om.next._STAR_instrument_STAR_, "key": key, "ref": ref__$1, "omcljs$shared": om.next._STAR_shared_STAR_, "omcljs$path": cljs.core.cst$kw$om_DASH_path.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(props)), "omcljs$reconciler": om.next._STAR_reconciler_STAR_, "omcljs$depth": om.next._STAR_depth_STAR_, "omcljs$parent": om.next._STAR_parent_STAR_};
var G__10842 = om.util.force_children(children);
return React.createElement(G__10840,G__10841,G__10842);
}
};
var om$next$self = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__10847__i = 0, G__10847__a = new Array(arguments.length -  1);
while (G__10847__i < G__10847__a.length) {G__10847__a[G__10847__i] = arguments[G__10847__i + 1]; ++G__10847__i;}
  children = new cljs.core.IndexedSeq(G__10847__a,0);
} 
return om$next$self__delegate.call(this,props,children);};
om$next$self.cljs$lang$maxFixedArity = 1;
om$next$self.cljs$lang$applyTo = (function (arglist__10848){
var props = cljs.core.first(arglist__10848);
var children = cljs.core.rest(arglist__10848);
return om$next$self__delegate(props,children);
});
om$next$self.cljs$core$IFn$_invoke$arity$variadic = om$next$self__delegate;
return om$next$self;
})()
;
;})(map__10831,map__10831__$1,opts,validator,keyfn))
});

om.next.factory.cljs$lang$maxFixedArity = 2;
/**
 * Returns true if the argument is an Om component.
 */
om.next.component_QMARK_ = (function om$next$component_QMARK_(x){
if(!((x == null))){
return x.om$isComponent === true;
} else {
return false;
}
});
om.next.state = (function om$next$state(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.state;
});
/**
 * PRIVATE: Do not use
 */
om.next.get_prop = (function om$next$get_prop(c,k){
var G__10851 = c.props;
var G__10852 = k;
return goog.object.get(G__10851,G__10852);
});
om.next.get_props_STAR_ = (function om$next$get_props_STAR_(x,k){
if((x == null)){
return om.next.nil_props;
} else {
var y = goog.object.get(x,k);
if((y == null)){
return om.next.nil_props;
} else {
return y;
}
}
});
om.next.get_prev_props = (function om$next$get_prev_props(x){
return om.next.get_props_STAR_(x,"omcljs$prev$value");
});
om.next.get_next_props = (function om$next$get_next_props(x){
return om.next.get_props_STAR_(x,"omcljs$next$value");
});
om.next.get_props = (function om$next$get_props(x){
return om.next.get_props_STAR_(x,"omcljs$value");
});
/**
 * PRIVATE: Do not use
 */
om.next.set_prop_BANG_ = (function om$next$set_prop_BANG_(c,k,v){
var G__10856 = c.props;
var G__10857 = k;
var G__10858 = v;
return goog.object.set(G__10856,G__10857,G__10858);
});
om.next.get_reconciler = (function om$next$get_reconciler(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return om.next.get_prop(c,"omcljs$reconciler");
});
om.next.props_STAR_ = (function om$next$props_STAR_(var_args){
var args10859 = [];
var len__6849__auto___10862 = arguments.length;
var i__6850__auto___10863 = (0);
while(true){
if((i__6850__auto___10863 < len__6849__auto___10862)){
args10859.push((arguments[i__6850__auto___10863]));

var G__10864 = (i__6850__auto___10863 + (1));
i__6850__auto___10863 = G__10864;
continue;
} else {
}
break;
}

var G__10861 = args10859.length;
switch (G__10861) {
case 2:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10859.length)].join('')));

}
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.max_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.props_STAR_.cljs$lang$maxFixedArity = 3;
om.next.prev_props_STAR_ = (function om$next$prev_props_STAR_(var_args){
var args10866 = [];
var len__6849__auto___10869 = arguments.length;
var i__6850__auto___10870 = (0);
while(true){
if((i__6850__auto___10870 < len__6849__auto___10869)){
args10866.push((arguments[i__6850__auto___10870]));

var G__10871 = (i__6850__auto___10870 + (1));
i__6850__auto___10870 = G__10871;
continue;
} else {
}
break;
}

var G__10868 = args10866.length;
switch (G__10868) {
case 2:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10866.length)].join('')));

}
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,x,y);
});

om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,z){
return cljs.core.min_key.cljs$core$IFn$_invoke$arity$3(om.next.om_props_basis,om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(x,y),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(y,z));
});

om.next.prev_props_STAR_.cljs$lang$maxFixedArity = 3;
om.next._prev_props = (function om$next$_prev_props(prev_props,component){
var cst = component.state;
var props = component.props;
return om.next.unwrap(om.next.prev_props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(prev_props),om.next.get_prev_props(cst)),om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props))));
});
om.next._next_props = (function om$next$_next_props(next_props,component){
return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$3(om.next.get_props(component.props),om.next.get_props(next_props),om.next.get_next_props(component.state)));
});
om.next.merge_pending_props_BANG_ = (function om$next$merge_pending_props_BANG_(c){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var cst = c.state;
var props = c.props;
var pending = goog.object.get(cst,"omcljs$next$value");
var prev = om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(cst),om.next.get_props(props));
goog.object.set(cst,"omcljs$prev$value",prev);

if((pending == null)){
return null;
} else {
goog.object.remove(cst,"omcljs$next$value");

return goog.object.set(cst,"omcljs$value",pending);
}
});
om.next.clear_prev_props_BANG_ = (function om$next$clear_prev_props_BANG_(c){
var G__10875 = c.state;
var G__10876 = "omcljs$prev$value";
return goog.object.remove(G__10875,G__10876);
});
/**
 * Get basis t value for when the component last read its props from
 * the global state.
 */
om.next.t = (function om$next$t(c){
return om.next.om_props_basis(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(c.props),om.next.get_props(c.state)));
});
/**
 * Returns the parent Om component.
 */
om.next.parent = (function om$next$parent(component){
return om.next.get_prop(component,"omcljs$parent");
});
/**
 * PRIVATE: Returns the render depth (a integer) of the component relative to
 *   the mount root.
 */
om.next.depth = (function om$next$depth(component){
if(om.next.component_QMARK_(component)){
return om.next.get_prop(component,"omcljs$depth");
} else {
return null;
}
});
/**
 * Returns the components React key.
 */
om.next.react_key = (function om$next$react_key(component){
return component.props.key;
});
/**
 * Returns the component type, regardless of whether the component has been
 * mounted
 */
om.next.react_type = (function om$next$react_type(x){
var or__5791__auto__ = goog.object.get(x,"type");
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return cljs.core.type(x);
}
});
/**
 * Returns the component's Om data path.
 */
om.next.path = (function om$next$path(c){
return om.next.get_prop(c,"omcljs$path");
});
/**
 * Return the global shared properties of the Om Next root. See :shared and
 * :shared-fn reconciler options.
 */
om.next.shared = (function om$next$shared(var_args){
var args10877 = [];
var len__6849__auto___10884 = arguments.length;
var i__6850__auto___10885 = (0);
while(true){
if((i__6850__auto___10885 < len__6849__auto___10884)){
args10877.push((arguments[i__6850__auto___10885]));

var G__10886 = (i__6850__auto___10885 + (1));
i__6850__auto___10885 = G__10886;
continue;
} else {
}
break;
}

var G__10879 = args10877.length;
switch (G__10879) {
case 1:
return om.next.shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10877.length)].join('')));

}
});

om.next.shared.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.shared.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.shared.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var shared = (function (){var G__10880 = component.props;
var G__10881 = "omcljs$shared";
return goog.object.get(G__10880,G__10881);
})();
var ks = (function (){var G__10882 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__10882],null));
} else {
return G__10882;
}
})();
var G__10883 = shared;
if(!(cljs.core.empty_QMARK_(ks))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__10883,ks);
} else {
return G__10883;
}
});

om.next.shared.cljs$lang$maxFixedArity = 2;
om.next.instrument = (function om$next$instrument(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.get_prop(component,"omcljs$instrument");
});
om.next.update_props_BANG_ = (function om$next$update_props_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

var G__10892 = c.state;
var G__10893_10896 = G__10892;
var G__10894_10897 = "omcljs$next$value";
var G__10895_10898 = om.next.om_props(next_props,om.next.protocols.basis_t(om.next.get_reconciler(c)));
goog.object.set(G__10893_10896,G__10894_10897,G__10895_10898);

return G__10892;
});
/**
 * Return a components props.
 */
om.next.props = (function om$next$props(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.unwrap(om.next.props_STAR_.cljs$core$IFn$_invoke$arity$2(om.next.get_props(component.props),om.next.get_props(component.state)));
});
/**
 * Add computed properties to props. Note will replace any pre-existing
 * computed properties.
 */
om.next.computed = (function om$next$computed(props,computed_map){
if((props == null)){
return null;
} else {
if(cljs.core.vector_QMARK_(props)){
var G__10901 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(G__10901,cljs.core.assoc,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__10901;
}
} else {
var G__10902 = props;
if(!(cljs.core.empty_QMARK_(computed_map))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10902,cljs.core.cst$kw$om$next_SLASH_computed,computed_map);
} else {
return G__10902;
}
}
}
});
/**
 * Return the computed properties on a component or its props.
 */
om.next.get_computed = (function om$next$get_computed(var_args){
var args10903 = [];
var len__6849__auto___10908 = arguments.length;
var i__6850__auto___10909 = (0);
while(true){
if((i__6850__auto___10909 < len__6849__auto___10908)){
args10903.push((arguments[i__6850__auto___10909]));

var G__10910 = (i__6850__auto___10909 + (1));
i__6850__auto___10909 = G__10910;
continue;
} else {
}
break;
}

var G__10905 = args10903.length;
switch (G__10905) {
case 1:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10903.length)].join('')));

}
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$1 = (function (x){
return om.next.get_computed.cljs$core$IFn$_invoke$arity$2(x,cljs.core.PersistentVector.EMPTY);
});

om.next.get_computed.cljs$core$IFn$_invoke$arity$2 = (function (x,k_or_ks){
if((x == null)){
return null;
} else {
var props = (function (){var G__10906 = x;
if(om.next.component_QMARK_(x)){
return om.next.props(G__10906);
} else {
return G__10906;
}
})();
var ks = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_computed], null),(function (){var G__10907 = k_or_ks;
if(!(cljs.core.sequential_QMARK_(k_or_ks))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__10907],null));
} else {
return G__10907;
}
})());
if(cljs.core.vector_QMARK_(props)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(props),ks);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,ks);
}
}
});

om.next.get_computed.cljs$lang$maxFixedArity = 2;
/**
 * Set the component local state of the component. Analogous to React's
 * setState.
 */
om.next.set_state_BANG_ = (function om$next$set_state_BANG_(component,new_state){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
om.next._set_state_BANG_(component,new_state);
} else {
var G__10917_10920 = component.state;
var G__10918_10921 = "omcljs$pendingState";
var G__10919_10922 = new_state;
goog.object.set(G__10917_10920,G__10918_10921,G__10919_10922);
}

var temp__4655__auto__ = om.next.get_reconciler(component);
if(cljs.core.truth_(temp__4655__auto__)){
var r = temp__4655__auto__;
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [component], null));

return (om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_render_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_render_BANG_.call(null,r));
} else {
return component.forceUpdate();
}
});
/**
 * Get a component's local state. May provide a single key or a sequential
 * collection of keys for indexed access into the component's local state.
 */
om.next.get_state = (function om$next$get_state(var_args){
var args10923 = [];
var len__6849__auto___10927 = arguments.length;
var i__6850__auto___10928 = (0);
while(true){
if((i__6850__auto___10928 < len__6849__auto___10927)){
args10923.push((arguments[i__6850__auto___10928]));

var G__10929 = (i__6850__auto___10928 + (1));
i__6850__auto___10928 = G__10929;
continue;
} else {
}
break;
}

var G__10925 = args10923.length;
switch (G__10925) {
case 1:
return om.next.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10923.length)].join('')));

}
});

om.next.get_state.cljs$core$IFn$_invoke$arity$1 = (function (component){
return om.next.get_state.cljs$core$IFn$_invoke$arity$2(component,cljs.core.PersistentVector.EMPTY);
});

om.next.get_state.cljs$core$IFn$_invoke$arity$2 = (function (component,k_or_ks){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

var cst = ((((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false))?om.next._get_state(component):(function (){var temp__4657__auto__ = component.state;
if(cljs.core.truth_(temp__4657__auto__)){
var state = temp__4657__auto__;
var or__5791__auto__ = goog.object.get(state,"omcljs$pendingState");
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return goog.object.get(state,"omcljs$state");
}
} else {
return null;
}
})());
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cst,((cljs.core.sequential_QMARK_(k_or_ks))?k_or_ks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k_or_ks], null)));
});

om.next.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Update a component's local state. Similar to Clojure(Script)'s swap!
 */
om.next.update_state_BANG_ = (function om$next$update_state_BANG_(var_args){
var args10931 = [];
var len__6849__auto___10956 = arguments.length;
var i__6850__auto___10957 = (0);
while(true){
if((i__6850__auto___10957 < len__6849__auto___10956)){
args10931.push((arguments[i__6850__auto___10957]));

var G__10958 = (i__6850__auto___10957 + (1));
i__6850__auto___10957 = G__10958;
continue;
} else {
}
break;
}

var G__10940 = args10931.length;
switch (G__10940) {
case 2:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
var argseq__6868__auto__ = (new cljs.core.IndexedSeq(args10931.slice((6)),(0)));
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__6868__auto__);

}
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_state_BANG_(component,(function (){var G__10941 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__10941) : f.call(null,G__10941));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_state_BANG_(component,(function (){var G__10942 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__10943 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__10942,G__10943) : f.call(null,G__10942,G__10943));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_state_BANG_(component,(function (){var G__10944 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__10945 = arg0;
var G__10946 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__10944,G__10945,G__10946) : f.call(null,G__10944,G__10945,G__10946));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_state_BANG_(component,(function (){var G__10947 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__10948 = arg0;
var G__10949 = arg1;
var G__10950 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__10947,G__10948,G__10949,G__10950) : f.call(null,G__10947,G__10948,G__10949,G__10950));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (component,f,arg0,arg1,arg2,arg3){
return om.next.set_state_BANG_(component,(function (){var G__10951 = om.next.get_state.cljs$core$IFn$_invoke$arity$1(component);
var G__10952 = arg0;
var G__10953 = arg1;
var G__10954 = arg2;
var G__10955 = arg3;
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(G__10951,G__10952,G__10953,G__10954,G__10955) : f.call(null,G__10951,G__10952,G__10953,G__10954,G__10955));
})());
});

om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return om.next.set_state_BANG_(component,cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(f,om.next.get_state.cljs$core$IFn$_invoke$arity$1(component),arg0,arg1,arg2,cljs.core.array_seq([arg3,arg_rest], 0)));
});

om.next.update_state_BANG_.cljs$lang$applyTo = (function (seq10932){
var G__10933 = cljs.core.first(seq10932);
var seq10932__$1 = cljs.core.next(seq10932);
var G__10934 = cljs.core.first(seq10932__$1);
var seq10932__$2 = cljs.core.next(seq10932__$1);
var G__10935 = cljs.core.first(seq10932__$2);
var seq10932__$3 = cljs.core.next(seq10932__$2);
var G__10936 = cljs.core.first(seq10932__$3);
var seq10932__$4 = cljs.core.next(seq10932__$3);
var G__10937 = cljs.core.first(seq10932__$4);
var seq10932__$5 = cljs.core.next(seq10932__$4);
var G__10938 = cljs.core.first(seq10932__$5);
var seq10932__$6 = cljs.core.next(seq10932__$5);
return om.next.update_state_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10933,G__10934,G__10935,G__10936,G__10937,G__10938,seq10932__$6);
});

om.next.update_state_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Get the rendered state of component. om.next/get-state always returns the
 * up-to-date state.
 */
om.next.get_rendered_state = (function om$next$get_rendered_state(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

if(((!((component == null)))?(((false) || (component.om$next$ILocalState$))?true:false):false)){
return om.next._get_rendered_state(component);
} else {
var G__10963 = component;
var G__10963__$1 = (((G__10963 == null))?null:G__10963.state);
if((G__10963__$1 == null)){
return null;
} else {
return goog.object.get(G__10963__$1,"omcljs$state");
}
}
});
om.next.merge_pending_state_BANG_ = (function om$next$merge_pending_state_BANG_(c){
if(((!((c == null)))?(((false) || (c.om$next$ILocalState$))?true:false):false)){
return om.next._merge_pending_state_BANG_(c);
} else {
var temp__4657__auto__ = (function (){var G__10967 = c;
var G__10967__$1 = (((G__10967 == null))?null:G__10967.state);
if((G__10967__$1 == null)){
return null;
} else {
return goog.object.get(G__10967__$1,"omcljs$pendingState");
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var pending = temp__4657__auto__;
var state = c.state;
var previous = goog.object.get(state,"omcljs$state");
goog.object.remove(state,"omcljs$pendingState");

goog.object.set(state,"omcljs$previousState",previous);

return goog.object.set(state,"omcljs$state",pending);
} else {
return null;
}
}
});
om.next.react_set_state_BANG_ = (function om$next$react_set_state_BANG_(var_args){
var args10968 = [];
var len__6849__auto___10971 = arguments.length;
var i__6850__auto___10972 = (0);
while(true){
if((i__6850__auto___10972 < len__6849__auto___10971)){
args10968.push((arguments[i__6850__auto___10972]));

var G__10973 = (i__6850__auto___10972 + (1));
i__6850__auto___10972 = G__10973;
continue;
} else {
}
break;
}

var G__10970 = args10968.length;
switch (G__10970) {
case 2:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10968.length)].join('')));

}
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,new_state){
return om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3(component,new_state,null);
});

om.next.react_set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,new_state,cb){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return component.setState({"omcljs$state": new_state},null);
});

om.next.react_set_state_BANG_.cljs$lang$maxFixedArity = 3;





om.next.gather_sends = (function om$next$gather_sends(p__10976,q,remotes){
var map__10981 = p__10976;
var map__10981__$1 = ((((!((map__10981 == null)))?((((map__10981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10981):map__10981);
var env = map__10981__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10981__$1,cljs.core.cst$kw$parser);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (map__10981,map__10981__$1,env,parser){
return (function (p1__10975_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__10975_SHARP_,(parser.cljs$core$IFn$_invoke$arity$3 ? parser.cljs$core$IFn$_invoke$arity$3(env,q,p1__10975_SHARP_) : parser.call(null,env,q,p1__10975_SHARP_))],null));
});})(map__10981,map__10981__$1,env,parser))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (map__10981,map__10981__$1,env,parser){
return (function (p__10983){
var vec__10984 = p__10983;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10984,(1),null);
return (cljs.core.count(v) > (0));
});})(map__10981,map__10981__$1,env,parser))
)),remotes);
});
/**
 * Given r (a reconciler) and a query expression including a mutation and
 * any simple reads, return the equivalent query expression where the simple
 * reads have been replaced by the full query for each component that cares about
 * the specified read.
 */
om.next.transform_reads = (function om$next$transform_reads(r,tx){
var with_target = (function om$next$transform_reads_$_with_target(target,q){
if(!((target == null))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11013 = cljs.core.first(q);
var G__11014 = target;
return (om.next.force.cljs$core$IFn$_invoke$arity$2 ? om.next.force.cljs$core$IFn$_invoke$arity$2(G__11013,G__11014) : om.next.force.call(null,G__11013,G__11014));
})()], null);
} else {
return q;
}
});
var add_focused_query = (function om$next$transform_reads_$_add_focused_query(k,target,tx__$1,c){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(tx__$1,(function (){var G__11017 = c;
var G__11018 = with_target(target,om.next.focus_query(om.next.get_query(c),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null)));
return (om.next.full_query.cljs$core$IFn$_invoke$arity$2 ? om.next.full_query.cljs$core$IFn$_invoke$arity$2(G__11017,G__11018) : om.next.full_query.call(null,G__11017,G__11018));
})());
});
var exprs = cljs.core.seq(tx);
var tx_SINGLEQUOTE_ = cljs.core.PersistentVector.EMPTY;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var ast = om.next.impl.parser.expr__GT_ast(expr);
var key = cljs.core.cst$kw$key.cljs$core$IFn$_invoke$arity$1(ast);
var tgt = cljs.core.cst$kw$target.cljs$core$IFn$_invoke$arity$1(ast);
if((key instanceof cljs.core.Keyword)){
var G__11019 = cljs.core.next(exprs);
var G__11020 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt){
return (function (p1__10985_SHARP_,p2__10986_SHARP_){
return add_focused_query(key,tgt,p1__10985_SHARP_,p2__10986_SHARP_);
});})(exprs,tx_SINGLEQUOTE_,expr,ast,key,tgt))
,tx_SINGLEQUOTE_,(om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2 ? om.next.ref__GT_components.cljs$core$IFn$_invoke$arity$2(r,key) : om.next.ref__GT_components.call(null,r,key)));
exprs = G__11019;
tx_SINGLEQUOTE_ = G__11020;
continue;
} else {
var G__11021 = cljs.core.next(exprs);
var G__11022 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tx_SINGLEQUOTE_,expr);
exprs = G__11021;
tx_SINGLEQUOTE_ = G__11022;
continue;
}
} else {
return tx_SINGLEQUOTE_;
}
break;
}
});
/**
 * Change the query of a component. Takes a map containing :params and/or
 * :query. :params should be a map of new bindings and :query should be a query
 * expression. Will schedule a re-render as well as remote re-sends if
 * necessary.
 */
om.next.set_query_BANG_ = (function om$next$set_query_BANG_(var_args){
var args11023 = [];
var len__6849__auto___11034 = arguments.length;
var i__6850__auto___11035 = (0);
while(true){
if((i__6850__auto___11035 < len__6849__auto___11034)){
args11023.push((arguments[i__6850__auto___11035]));

var G__11036 = (i__6850__auto___11035 + (1));
i__6850__auto___11035 = G__11036;
continue;
} else {
}
break;
}

var G__11025 = args11023.length;
switch (G__11025) {
case 2:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11023.length)].join('')));

}
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,params_AMPERSAND_query){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3(x,params_AMPERSAND_query,null);
});

om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (x,p__11026,reads){
var map__11027 = p__11026;
var map__11027__$1 = ((((!((map__11027 == null)))?((((map__11027.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11027.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11027):map__11027);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11027__$1,cljs.core.cst$kw$params);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11027__$1,cljs.core.cst$kw$query);
if(cljs.core.truth_((function (){var or__5791__auto__ = (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return om.next.component_QMARK_(x);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x))], 0)))].join('')));
}

if((!((params == null))) || (!((query == null)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$params)),cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$query)))], 0)))].join('')));
}

if(((reads == null)) || (cljs.core.vector_QMARK_(reads))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$reads),cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$reads))], 0)))].join('')));
}

var r = ((om.next.component_QMARK_(x))?om.next.get_reconciler(x):x);
var c = ((om.next.component_QMARK_(x))?x:null);
var root = cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__11029 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(r);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11029) : cljs.core.deref.call(null,G__11029));
})());
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var st = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(st) : cljs.core.deref.call(null,st)));
var temp__4657__auto___11038 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto___11038)){
var l_11039 = temp__4657__auto___11038;
var G__11031_11040 = l_11039;
var G__11032_11041 = [cljs.core.str((function (){var temp__4657__auto____$1 = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var ident = temp__4657__auto____$1;
return [cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ident], 0))),cljs.core.str(" ")].join('');
} else {
return null;
}
})()),cljs.core.str((cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?"reconciler ":null)),cljs.core.str((cljs.core.truth_(query)?(function (){


return ", ";
})()
:null)),cljs.core.str((cljs.core.truth_(params)?(function (){


return " ";
})()
:null)),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
goog.log.info(G__11031_11040,G__11032_11041);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(st,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_queries,(function (){var or__5791__auto__ = c;
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return root;
}
})()], null),cljs.core.merge,cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(query)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$query,query], null):null),(cljs.core.truth_(params)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$params,params], null):null)], 0))], 0));

if((!((c == null))) && ((reads == null))){
om.next.protocols.queue_BANG_(r,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null));
} else {
}

if((reads == null)){
} else {
om.next.protocols.queue_BANG_(r,reads);
}

om.next.protocols.reindex_BANG_(r);

var rootq_11042 = ((!((c == null)))?(om.next.full_query.cljs$core$IFn$_invoke$arity$1 ? om.next.full_query.cljs$core$IFn$_invoke$arity$1(c) : om.next.full_query.call(null,c)):(((reads == null))?om.next.get_query(root):null));
var sends_11043 = om.next.gather_sends((om.next.to_env.cljs$core$IFn$_invoke$arity$1 ? om.next.to_env.cljs$core$IFn$_invoke$arity$1(cfg) : om.next.to_env.call(null,cfg)),cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__5791__auto__ = rootq_11042;
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),om.next.transform_reads(r,reads)),cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
if(cljs.core.empty_QMARK_(sends_11043)){
} else {
om.next.protocols.queue_sends_BANG_(r,sends_11043);

(om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1 ? om.next.schedule_sends_BANG_.cljs$core$IFn$_invoke$arity$1(r) : om.next.schedule_sends_BANG_.call(null,r));
}

return null;
});

om.next.set_query_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Update a component's query and query parameters with a function.
 */
om.next.update_query_BANG_ = (function om$next$update_query_BANG_(var_args){
var args11044 = [];
var len__6849__auto___11070 = arguments.length;
var i__6850__auto___11071 = (0);
while(true){
if((i__6850__auto___11071 < len__6849__auto___11070)){
args11044.push((arguments[i__6850__auto___11071]));

var G__11072 = (i__6850__auto___11071 + (1));
i__6850__auto___11071 = G__11072;
continue;
} else {
}
break;
}

var G__11053 = args11044.length;
switch (G__11053) {
case 2:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__6868__auto__ = (new cljs.core.IndexedSeq(args11044.slice((6)),(0)));
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__6868__auto__);

}
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (component,f){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__11054 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11054) : f.call(null,G__11054));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (component,f,arg0){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__11055 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__11056 = arg0;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__11055,G__11056) : f.call(null,G__11055,G__11056));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (component,f,arg0,arg1){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__11057 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__11058 = arg0;
var G__11059 = arg1;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__11057,G__11058,G__11059) : f.call(null,G__11057,G__11058,G__11059));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (component,f,arg0,arg1,arg2){
return om.next.set_query_BANG_.cljs$core$IFn$_invoke$arity$2(component,(function (){var G__11060 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__11061 = arg0;
var G__11062 = arg1;
var G__11063 = arg2;
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(G__11060,G__11061,G__11062,G__11063) : f.call(null,G__11060,G__11061,G__11062,G__11063));
})());
});

om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (component,f,arg0,arg1,arg2,arg3,arg_rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.next.set_query_BANG_,component,(function (){var G__11064 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,om.next.get_unbound_query(component),cljs.core.cst$kw$params,om.next.get_params(component)], null);
var G__11065 = arg0;
var G__11066 = arg1;
var G__11067 = arg2;
var G__11068 = arg3;
var G__11069 = arg_rest;
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(G__11064,G__11065,G__11066,G__11067,G__11068,G__11069) : f.call(null,G__11064,G__11065,G__11066,G__11067,G__11068,G__11069));
})());
});

om.next.update_query_BANG_.cljs$lang$applyTo = (function (seq11045){
var G__11046 = cljs.core.first(seq11045);
var seq11045__$1 = cljs.core.next(seq11045);
var G__11047 = cljs.core.first(seq11045__$1);
var seq11045__$2 = cljs.core.next(seq11045__$1);
var G__11048 = cljs.core.first(seq11045__$2);
var seq11045__$3 = cljs.core.next(seq11045__$2);
var G__11049 = cljs.core.first(seq11045__$3);
var seq11045__$4 = cljs.core.next(seq11045__$3);
var G__11050 = cljs.core.first(seq11045__$4);
var seq11045__$5 = cljs.core.next(seq11045__$4);
var G__11051 = cljs.core.first(seq11045__$5);
var seq11045__$6 = cljs.core.next(seq11045__$5);
return om.next.update_query_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11046,G__11047,G__11048,G__11049,G__11050,G__11051,seq11045__$6);
});

om.next.update_query_BANG_.cljs$lang$maxFixedArity = (6);
/**
 * Returns true if the component is mounted.
 */
om.next.mounted_QMARK_ = (function om$next$mounted_QMARK_(x){
return (om.next.component_QMARK_(x)) && (x.isMounted());
});
/**
 * Returns the component associated with a component's React ref.
 */
om.next.react_ref = (function om$next$react_ref(component,name){
var G__11075 = component.refs;
if((G__11075 == null)){
return null;
} else {
return goog.object.get(G__11075,name);
}
});
/**
 * Returns the component's children.
 */
om.next.children = (function om$next$children(component){
return component.props.children;
});
om.next.update_component_BANG_ = (function om$next$update_component_BANG_(c,next_props){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

om.next.update_props_BANG_(c,next_props);

return c.forceUpdate();
});
om.next.should_update_QMARK_ = (function om$next$should_update_QMARK_(var_args){
var args11076 = [];
var len__6849__auto___11079 = arguments.length;
var i__6850__auto___11080 = (0);
while(true){
if((i__6850__auto___11080 < len__6849__auto___11079)){
args11076.push((arguments[i__6850__auto___11080]));

var G__11081 = (i__6850__auto___11080 + (1));
i__6850__auto___11080 = G__11081;
continue;
} else {
}
break;
}

var G__11078 = args11076.length;
switch (G__11078) {
case 2:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11076.length)].join('')));

}
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (c,next_props){
return om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props,null);
});

om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (c,next_props,next_state){
if(om.next.component_QMARK_(c)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

return c.shouldComponentUpdate({"omcljs$value": next_props},{"omcljs$state": next_state});
});

om.next.should_update_QMARK_.cljs$lang$maxFixedArity = 3;
om.next.class_path = (function om$next$class_path(c){

new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pre,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.component_QMARK_(c)], null)], null);

var c__$1 = c;
var ret = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.type(c__$1));
while(true){
var temp__4655__auto__ = om.next.parent(c__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var p = temp__4655__auto__;
if(om.next.iquery_QMARK_(p)){
var G__11085 = p;
var G__11086 = cljs.core.cons(cljs.core.type(p),ret);
c__$1 = G__11085;
ret = G__11086;
continue;
} else {
var G__11087 = p;
var G__11088 = ret;
c__$1 = G__11087;
ret = G__11088;
continue;
}
} else {
var seen = (function (){var G__11084 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11084) : cljs.core.atom.call(null,G__11084));
})();
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (c__$1,ret,seen,temp__4655__auto__){
return (function (x){
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(seen) : cljs.core.deref.call(null,seen)),x)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(seen,cljs.core.conj,x);

return x;
}
});})(c__$1,ret,seen,temp__4655__auto__))
,ret);
}
break;
}
});
/**
 * Given a class or mounted component x and a ref to an instantiated component
 * or class that defines a subquery, pick the most specific subquery. If the
 * component is mounted subquery-ref will be used, subquery-class otherwise.
 */
om.next.subquery = (function om$next$subquery(x,subquery_ref,subquery_class){
if(((subquery_ref instanceof cljs.core.Keyword)) || (typeof subquery_ref === 'string')){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$keyword_QMARK_,cljs.core.cst$sym$subquery_DASH_ref),cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$subquery_DASH_ref))], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(subquery_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$subquery_DASH_class)], 0)))].join('')));
}

var ref = (function (){var G__11090 = subquery_ref;
if((subquery_ref instanceof cljs.core.Keyword)){
return [cljs.core.str(G__11090)].join('');
} else {
return G__11090;
}
})();
if((om.next.component_QMARK_(x)) && (om.next.mounted_QMARK_(x))){
return om.next.get_query(om.next.react_ref(x,ref));
} else {
return om.next.get_query(subquery_class);
}
});
/**
 * Given a component return its ident
 */
om.next.get_ident = (function om$next$get_ident(component){
if(om.next.component_QMARK_(component)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$component)], 0)))].join('')));
}

return om.next.ident(component,om.next.props(component));
});
om.next.basis_t = (function om$next$basis_t(reconciler){
return om.next.protocols.basis_t(reconciler);
});
om.next.schedule_render_BANG_ = (function om$next$schedule_render_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_render_BANG_(reconciler))){
var f = (function (){
return om.next.protocols.reconcile_BANG_(reconciler);
});
if(cljs.core.fn_QMARK_(om.next._STAR_raf_STAR_)){
return (om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1 ? om.next._STAR_raf_STAR_.cljs$core$IFn$_invoke$arity$1(f) : om.next._STAR_raf_STAR_.call(null,f));
} else {
if(!(typeof requestAnimationFrame !== 'undefined')){
return setTimeout(f,(16));
} else {
return requestAnimationFrame(f);

}
}
} else {
return null;
}
});
om.next.schedule_sends_BANG_ = (function om$next$schedule_sends_BANG_(reconciler){
if(cljs.core.truth_(om.next.protocols.schedule_sends_BANG_(reconciler))){
var G__11093 = (function (){
return om.next.protocols.send_BANG_(reconciler);
});
var G__11094 = (0);
return setTimeout(G__11093,G__11094);
} else {
return null;
}
});
/**
 * Given a root component class and a target root DOM node, instantiate and
 * render the root class using the reconciler's :state property. The reconciler
 * will continue to observe changes to :state and keep the target node in sync.
 * Note a reconciler may have only one root. If invoked on a reconciler with an
 * existing root, the new root will replace the old one.
 */
om.next.add_root_BANG_ = (function om$next$add_root_BANG_(var_args){
var args11095 = [];
var len__6849__auto___11098 = arguments.length;
var i__6850__auto___11099 = (0);
while(true){
if((i__6850__auto___11099 < len__6849__auto___11098)){
args11095.push((arguments[i__6850__auto___11099]));

var G__11100 = (i__6850__auto___11099 + (1));
i__6850__auto___11099 = G__11100;
continue;
} else {
}
break;
}

var G__11097 = args11095.length;
switch (G__11097) {
case 3:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11095.length)].join('')));

}
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,root_class,target){
return om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4(reconciler,root_class,target,null);
});

om.next.add_root_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (reconciler,root_class,target,options){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

if(cljs.core.fn_QMARK_(root_class)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$fn_QMARK_,cljs.core.cst$sym$root_DASH_class)], 0)))].join('')));
}

var temp__4657__auto___11102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.next.roots) : cljs.core.deref.call(null,om.next.roots)),target);
if(cljs.core.truth_(temp__4657__auto___11102)){
var old_reconciler_11103 = temp__4657__auto___11102;
(om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2 ? om.next.remove_root_BANG_.cljs$core$IFn$_invoke$arity$2(old_reconciler_11103,target) : om.next.remove_root_BANG_.call(null,old_reconciler_11103,target));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.next.roots,cljs.core.assoc,target,reconciler);

return om.next.protocols.add_root_BANG_(reconciler,root_class,target,options);
});

om.next.add_root_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Remove a root target (a DOM element) from a reconciler. The reconciler will
 * no longer attempt to reconcile application state with the specified root.
 */
om.next.remove_root_BANG_ = (function om$next$remove_root_BANG_(reconciler,target){
return om.next.protocols.remove_root_BANG_(reconciler,target);
});

/**
 * @interface
 */
om.next.ITxIntercept = function(){};

/**
 * An optional protocol that component may implement to intercept child
 *   transactions.
 */
om.next.tx_intercept = (function om$next$tx_intercept(c,tx){
if((!((c == null))) && (!((c.om$next$ITxIntercept$tx_intercept$arity$2 == null)))){
return c.om$next$ITxIntercept$tx_intercept$arity$2(c,tx);
} else {
var x__6446__auto__ = (((c == null))?null:c);
var m__6447__auto__ = (om.next.tx_intercept[goog.typeOf(x__6446__auto__)]);
if(!((m__6447__auto__ == null))){
return (m__6447__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6447__auto__.cljs$core$IFn$_invoke$arity$2(c,tx) : m__6447__auto__.call(null,c,tx));
} else {
var m__6447__auto____$1 = (om.next.tx_intercept["_"]);
if(!((m__6447__auto____$1 == null))){
return (m__6447__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6447__auto____$1.cljs$core$IFn$_invoke$arity$2(c,tx) : m__6447__auto____$1.call(null,c,tx));
} else {
throw cljs.core.missing_protocol("ITxIntercept.tx-intercept",c);
}
}
}
});

om.next.to_env = (function om$next$to_env(x){
var config = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(x):x);
return cljs.core.select_keys(config,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state,cljs.core.cst$kw$shared,cljs.core.cst$kw$parser,cljs.core.cst$kw$logger,cljs.core.cst$kw$pathopt], null));
});
om.next.transact_STAR_ = (function om$next$transact_STAR_(r,c,ref,tx){
var cfg = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(r);
var ref__$1 = (cljs.core.truth_((function (){var and__5779__auto__ = c;
if(cljs.core.truth_(and__5779__auto__)){
var and__5779__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__5779__auto____$1){
return cljs.core.not(ref);
} else {
return and__5779__auto____$1;
}
} else {
return and__5779__auto__;
}
})())?om.next.ident(c,om.next.props(c)):ref);
var env = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([om.next.to_env(cfg),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$reconciler,r,cljs.core.cst$kw$component,c], null),(cljs.core.truth_(ref__$1)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$ref,ref__$1], null):null)], 0));
var id = cljs.core.random_uuid();
var _ = cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cfg).add(id,(function (){var G__11112 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cfg);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11112) : cljs.core.deref.call(null,G__11112));
})());
var ___$1 = (function (){var temp__4657__auto__ = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(cfg);
if(cljs.core.truth_(temp__4657__auto__)){
var l = temp__4657__auto__;
var G__11113 = l;
var G__11114 = [cljs.core.str((cljs.core.truth_(ref__$1)?[cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ref__$1], 0))),cljs.core.str(" ")].join(''):null)),cljs.core.str("transacted '"),cljs.core.str(tx),cljs.core.str(", "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([id], 0)))].join('');
return goog.log.info(G__11113,G__11114);
} else {
return null;
}
})();
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(cfg).call(null,env,tx);
var snds = om.next.gather_sends(env,tx,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(cfg));
var q = (function (){var G__11115 = cljs.core.PersistentVector.EMPTY;
var G__11115__$1 = ((!((c == null)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__11115,c):G__11115);
if(!((ref__$1 == null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__11115__$1,ref__$1);
} else {
return G__11115__$1;
}
})();
om.next.protocols.queue_BANG_(r,cljs.core.into.cljs$core$IFn$_invoke$arity$3(q,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(v)));

if(cljs.core.empty_QMARK_(snds)){
return null;
} else {
om.next.protocols.queue_sends_BANG_(r,snds);

return om.next.schedule_sends_BANG_(r);
}
});
/**
 * Given a reconciler or component run a transaction. tx is a parse expression
 * that should include mutations followed by any necessary read. The reads will
 * be used to trigger component re-rendering.
 * 
 * Example:
 * 
 *   (om/transact! widget
 *     '[(do/this!) (do/that!)
 *       :read/this :read/that])
 */
om.next.transact_BANG_ = (function om$next$transact_BANG_(var_args){
var args11116 = [];
var len__6849__auto___11121 = arguments.length;
var i__6850__auto___11122 = (0);
while(true){
if((i__6850__auto___11122 < len__6849__auto___11121)){
args11116.push((arguments[i__6850__auto___11122]));

var G__11123 = (i__6850__auto___11122 + (1));
i__6850__auto___11122 = G__11123;
continue;
} else {
}
break;
}

var G__11118 = args11116.length;
switch (G__11118) {
case 2:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11116.length)].join('')));

}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (x,tx){
if(cljs.core.truth_((function (){var or__5791__auto__ = om.next.component_QMARK_(x);
if(or__5791__auto__){
return or__5791__auto__;
} else {
return (om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x));
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$x))], 0)))].join('')));
}

if(cljs.core.vector_QMARK_(tx)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$tx)], 0)))].join('')));
}

if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))){
return om.next.transact_STAR_(x,null,null,tx);
} else {
if(om.next.iquery_QMARK_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("transact! invoked by component "),cljs.core.str(x),cljs.core.str(" that does not implement IQuery")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$iquery_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

var p = om.next.parent(x);
var x__$1 = x;
var tx__$1 = tx;
while(true){
if((p == null)){
var r = om.next.get_reconciler(x__$1);
return om.next.transact_STAR_(r,x__$1,null,om.next.transform_reads(r,tx__$1));
} else {
var vec__11119 = ((((!((p == null)))?(((false) || (p.om$next$ITxIntercept$))?true:false):false))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,om.next.tx_intercept(p,tx__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,tx__$1], null));
var x_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(0),null);
var tx__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11119,(1),null);
var G__11125 = om.next.parent(p);
var G__11126 = x_SINGLEQUOTE_;
var G__11127 = tx__$2;
p = G__11125;
x__$1 = G__11126;
tx__$1 = G__11127;
continue;
}
break;
}
}
});

om.next.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (r,ref,tx){
return om.next.transact_STAR_(r,null,ref,tx);
});

om.next.transact_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Create a parser. The argument is a map of two keys, :read and :mutate. Both
 * functions should have the signature (Env -> Key -> Params -> ParseResult).
 */
om.next.parser = (function om$next$parser(p__11128){
var map__11131 = p__11128;
var map__11131__$1 = ((((!((map__11131 == null)))?((((map__11131.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11131.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11131):map__11131);
var opts = map__11131__$1;
var read = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11131__$1,cljs.core.cst$kw$read);
var mutate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11131__$1,cljs.core.cst$kw$mutate);
if(cljs.core.map_QMARK_(opts)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$opts)], 0)))].join('')));
}

return om.next.impl.parser.parser(opts);
});
/**
 * Helper function for implementing :read and :mutate as multimethods. Use this
 * as the dispatch-fn.
 */
om.next.dispatch = (function om$next$dispatch(_,key,___$1){
return key;
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.query__GT_ast = (function om$next$query__GT_ast(query_expr){
return om.next.impl.parser.query__GT_ast(query_expr);
});
om.next.ast__GT_query = (function om$next$ast__GT_query(query_ast){

return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2(query_ast,true);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IIndexer}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Indexer = (function (indexes,extfs,__meta,__extmap,__hash){
this.indexes = indexes;
this.extfs = extfs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Indexer.prototype.om$next$protocols$IIndexer$ = true;

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_root$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var prop__GT_classes = (function (){var G__11139 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11139) : cljs.core.atom.call(null,G__11139));
})();
var class_path__GT_query = (function (){var G__11140 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11140) : cljs.core.atom.call(null,G__11140));
})();
var rootq = om.next.get_query(x);
var class$ = (function (){var G__11141 = x;
if(om.next.component_QMARK_(x)){
return cljs.core.type(G__11141);
} else {
return G__11141;
}
})();
var build_index_STAR_ = ((function (prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function om$next$build_index_STAR_(class$__$1,query,path,classpath){
var recursive_QMARK_ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([class$__$1], true),classpath);
var classpath__$1 = (function (){var G__11219 = classpath;
if((!((class$__$1 == null))) && (cljs.core.not(recursive_QMARK_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__11219,class$__$1);
} else {
return G__11219;
}
})();
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(class_path__GT_query,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [classpath__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([om.next.query_template(om.next.focus_query(rootq,path),path)], 0));
} else {
}

if(cljs.core.truth_(recursive_QMARK_)){
return null;
} else {
if(cljs.core.vector_QMARK_(query)){
var map__11220 = cljs.core.group_by(om.next.join_QMARK_,query);
var map__11220__$1 = ((((!((map__11220 == null)))?((((map__11220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11220):map__11220);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11220__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11220__$1,true);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (map__11220,map__11220__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__11133_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__11133_SHARP_,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$dispatch_DASH_key,om.next.impl.parser.expr__GT_ast),props),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([class$__$1], true)))], 0));
});})(map__11220,map__11220__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var seq__11222 = cljs.core.seq(joins);
var chunk__11223 = null;
var count__11224 = (0);
var i__11225 = (0);
while(true){
if((i__11225 < count__11224)){
var join = chunk__11223.cljs$core$IIndexed$_nth$arity$2(null,i__11225);
var vec__11226_11244 = om.next.join_entry(join);
var prop_11245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11226_11244,(0),null);
var query_SINGLEQUOTE__11246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11226_11244,(1),null);
var query_SINGLEQUOTE__11247__$1 = ((om.next.recursion_QMARK_(query_SINGLEQUOTE__11246))?query:query_SINGLEQUOTE__11246);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__11222,chunk__11223,count__11224,i__11225,vec__11226_11244,prop_11245,query_SINGLEQUOTE__11246,query_SINGLEQUOTE__11247__$1,join,map__11220,map__11220__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__11134_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__11134_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_11245,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__11222,chunk__11223,count__11224,i__11225,vec__11226_11244,prop_11245,query_SINGLEQUOTE__11246,query_SINGLEQUOTE__11247__$1,join,map__11220,map__11220__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__11248 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__11247__$1));
om$next$build_index_STAR_(class_SINGLEQUOTE__11248,query_SINGLEQUOTE__11247__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_11245),classpath__$1);

var G__11249 = seq__11222;
var G__11250 = chunk__11223;
var G__11251 = count__11224;
var G__11252 = (i__11225 + (1));
seq__11222 = G__11249;
chunk__11223 = G__11250;
count__11224 = G__11251;
i__11225 = G__11252;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11222);
if(temp__4657__auto__){
var seq__11222__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11222__$1)){
var c__6594__auto__ = cljs.core.chunk_first(seq__11222__$1);
var G__11253 = cljs.core.chunk_rest(seq__11222__$1);
var G__11254 = c__6594__auto__;
var G__11255 = cljs.core.count(c__6594__auto__);
var G__11256 = (0);
seq__11222 = G__11253;
chunk__11223 = G__11254;
count__11224 = G__11255;
i__11225 = G__11256;
continue;
} else {
var join = cljs.core.first(seq__11222__$1);
var vec__11227_11257 = om.next.join_entry(join);
var prop_11258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11227_11257,(0),null);
var query_SINGLEQUOTE__11259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11227_11257,(1),null);
var query_SINGLEQUOTE__11260__$1 = ((om.next.recursion_QMARK_(query_SINGLEQUOTE__11259))?query:query_SINGLEQUOTE__11259);
if(cljs.core.truth_(class$__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(prop__GT_classes,((function (seq__11222,chunk__11223,count__11224,i__11225,vec__11227_11257,prop_11258,query_SINGLEQUOTE__11259,query_SINGLEQUOTE__11260__$1,join,seq__11222__$1,temp__4657__auto__,map__11220,map__11220__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1){
return (function (p1__11134_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__11134_SHARP_,cljs.core.PersistentArrayMap.fromArray([prop_11258,cljs.core.PersistentHashSet.fromArray([class$__$1], true)], true, false)], 0));
});})(seq__11222,chunk__11223,count__11224,i__11225,vec__11227_11257,prop_11258,query_SINGLEQUOTE__11259,query_SINGLEQUOTE__11260__$1,join,seq__11222__$1,temp__4657__auto__,map__11220,map__11220__$1,props,joins,recursive_QMARK_,classpath__$1,prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
);
} else {
}

var class_SINGLEQUOTE__11261 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE__11260__$1));
om$next$build_index_STAR_(class_SINGLEQUOTE__11261,query_SINGLEQUOTE__11260__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop_11258),classpath__$1);

var G__11262 = cljs.core.next(seq__11222__$1);
var G__11263 = null;
var G__11264 = (0);
var G__11265 = (0);
seq__11222 = G__11262;
chunk__11223 = G__11263;
count__11224 = G__11264;
i__11225 = G__11265;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_(query)){
var seq__11228 = cljs.core.seq(query);
var chunk__11229 = null;
var count__11230 = (0);
var i__11231 = (0);
while(true){
if((i__11231 < count__11230)){
var vec__11232 = chunk__11229.cljs$core$IIndexed$_nth$arity$2(null,i__11231);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11232,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11232,(1),null);
var class_SINGLEQUOTE__11266 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__11266,query_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop),classpath__$1);

var G__11267 = seq__11228;
var G__11268 = chunk__11229;
var G__11269 = count__11230;
var G__11270 = (i__11231 + (1));
seq__11228 = G__11267;
chunk__11229 = G__11268;
count__11230 = G__11269;
i__11231 = G__11270;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11228);
if(temp__4657__auto__){
var seq__11228__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11228__$1)){
var c__6594__auto__ = cljs.core.chunk_first(seq__11228__$1);
var G__11271 = cljs.core.chunk_rest(seq__11228__$1);
var G__11272 = c__6594__auto__;
var G__11273 = cljs.core.count(c__6594__auto__);
var G__11274 = (0);
seq__11228 = G__11271;
chunk__11229 = G__11272;
count__11230 = G__11273;
i__11231 = G__11274;
continue;
} else {
var vec__11233 = cljs.core.first(seq__11228__$1);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11233,(0),null);
var query_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11233,(1),null);
var class_SINGLEQUOTE__11275 = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query_SINGLEQUOTE_));
om$next$build_index_STAR_(class_SINGLEQUOTE__11275,query_SINGLEQUOTE_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,prop),classpath__$1);

var G__11276 = cljs.core.next(seq__11228__$1);
var G__11277 = null;
var G__11278 = (0);
var G__11279 = (0);
seq__11228 = G__11276;
chunk__11229 = G__11277;
count__11230 = G__11278;
i__11231 = G__11279;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
}
});})(prop__GT_classes,class_path__GT_query,rootq,class$,___$1))
;
build_index_STAR_(class$,rootq,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.indexes,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$prop_DASH__GT_classes,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(prop__GT_classes) : cljs.core.deref.call(null,prop__GT_classes)),cljs.core.cst$kw$class_DASH_path_DASH__GT_query,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(class_path__GT_query) : cljs.core.deref.call(null,class_path__GT_query))], null));
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$index_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$index_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?(function (){var ident = om.next.ident(c,om.next.props(c));
var l__10748__auto___11280 = om.next._STAR_logger_STAR_;
if(cljs.core.truth_((om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(ident) : om.next.ident_QMARK_.call(null,ident)))){
} else {
var G__11235_11281 = l__10748__auto___11280;
var G__11236_11282 = [cljs.core.str("Invariant Violation"),cljs.core.str((((null == null))?null:[cljs.core.str(" (in function: `"),cljs.core.str(null),cljs.core.str("`)")].join(''))),cljs.core.str(": "),cljs.core.str([cljs.core.str("malformed Ident. An ident must be a vector of "),cljs.core.str("two elements (a keyword and an EDN value). Check "),cljs.core.str("the Ident implementation of component `"),cljs.core.str(c.constructor.displayName),cljs.core.str("`.")].join(''))].join('');
goog.log.error(G__11235_11281,G__11236_11282);
}

return ident;
})():null);
if(!((ident == null))){
var G__11237 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__11237,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),c);
} else {
return G__11237;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$drop_component_BANG_$arity$2 = (function (_,c){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.indexes,((function (___$1){
return (function (indexes__$1){
var indexes__$2 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$drop_DASH_component.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,c),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.type(c)], null),cljs.core.disj,c);
var ident = ((((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false))?om.next.ident(c,om.next.props(c)):null);
if(!((ident == null))){
var G__11239 = indexes__$2;
if(cljs.core.truth_(ident)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__11239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,ident], null),cljs.core.disj,c);
} else {
return G__11239;
}
} else {
return indexes__$2;
}
});})(___$1))
);
});

om.next.Indexer.prototype.om$next$protocols$IIndexer$key__GT_components$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var indexes__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
if(om.next.component_QMARK_(k)){
return cljs.core.PersistentHashSet.fromArray([k], true);
} else {
var temp__4655__auto__ = cljs.core.cst$kw$ref_DASH__GT_components.cljs$core$IFn$_invoke$arity$1(self__.extfs).call(null,indexes__$1,k);
if(cljs.core.truth_(temp__4655__auto__)){
var cs = temp__4655__auto__;
return cs;
} else {
var cs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ref_DASH__GT_components,k], null),cljs.core.cst$kw$om$next_SLASH_not_DASH_found);
if(!(cljs.core.keyword_identical_QMARK_(cljs.core.cst$kw$om$next_SLASH_not_DASH_found,cs))){
return cs;
} else {
if((k instanceof cljs.core.Keyword)){
var cs__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$prop_DASH__GT_classes,k], null));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (cs__$1,cs,temp__4655__auto__,indexes__$1,___$1){
return (function (p1__11135_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(indexes__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,p1__11135_SHARP_], null));
});})(cs__$1,cs,temp__4655__auto__,indexes__$1,___$1))
),cljs.core.completing.cljs$core$IFn$_invoke$arity$1(cljs.core.into),cljs.core.PersistentHashSet.EMPTY,cs__$1);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
}
}
}
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6405__auto__,k__6406__auto__){
var self__ = this;
var this__6405__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6405__auto____$1,k__6406__auto__,null);
});

om.next.Indexer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6407__auto__,k11137,else__6408__auto__){
var self__ = this;
var this__6407__auto____$1 = this;
var G__11240 = (((k11137 instanceof cljs.core.Keyword))?k11137.fqn:null);
switch (G__11240) {
case "indexes":
return self__.indexes;

break;
case "extfs":
return self__.extfs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11137,else__6408__auto__);

}
});

om.next.Indexer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6419__auto__,writer__6420__auto__,opts__6421__auto__){
var self__ = this;
var this__6419__auto____$1 = this;
var pr_pair__6422__auto__ = ((function (this__6419__auto____$1){
return (function (keyval__6423__auto__){
return cljs.core.pr_sequential_writer(writer__6420__auto__,cljs.core.pr_writer,""," ","",opts__6421__auto__,keyval__6423__auto__);
});})(this__6419__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6420__auto__,pr_pair__6422__auto__,"#om.next.Indexer{",", ","}",opts__6421__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IIterable$ = true;

om.next.Indexer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11136){
var self__ = this;
var G__11136__$1 = this;
return (new cljs.core.RecordIter((0),G__11136__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$indexes,cljs.core.cst$kw$extfs], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Indexer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6403__auto__){
var self__ = this;
var this__6403__auto____$1 = this;
return self__.__meta;
});

om.next.Indexer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6399__auto__){
var self__ = this;
var this__6399__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6409__auto__){
var self__ = this;
var this__6409__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6400__auto__){
var self__ = this;
var this__6400__auto____$1 = this;
var h__6226__auto__ = self__.__hash;
if(!((h__6226__auto__ == null))){
return h__6226__auto__;
} else {
var h__6226__auto____$1 = cljs.core.hash_imap(this__6400__auto____$1);
self__.__hash = h__6226__auto____$1;

return h__6226__auto____$1;
}
});

om.next.Indexer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6401__auto__,other__6402__auto__){
var self__ = this;
var this__6401__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5779__auto__ = other__6402__auto__;
if(cljs.core.truth_(and__5779__auto__)){
var and__5779__auto____$1 = (this__6401__auto____$1.constructor === other__6402__auto__.constructor);
if(and__5779__auto____$1){
return cljs.core.equiv_map(this__6401__auto____$1,other__6402__auto__);
} else {
return and__5779__auto____$1;
}
} else {
return and__5779__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Indexer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6414__auto__,k__6415__auto__){
var self__ = this;
var this__6414__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$extfs,null,cljs.core.cst$kw$indexes,null], null), null),k__6415__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6414__auto____$1),self__.__meta),k__6415__auto__);
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6415__auto__)),null));
}
});

om.next.Indexer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6412__auto__,k__6413__auto__,G__11136){
var self__ = this;
var this__6412__auto____$1 = this;
var pred__11241 = cljs.core.keyword_identical_QMARK_;
var expr__11242 = k__6413__auto__;
if(cljs.core.truth_((pred__11241.cljs$core$IFn$_invoke$arity$2 ? pred__11241.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$indexes,expr__11242) : pred__11241.call(null,cljs.core.cst$kw$indexes,expr__11242)))){
return (new om.next.Indexer(G__11136,self__.extfs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11241.cljs$core$IFn$_invoke$arity$2 ? pred__11241.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$extfs,expr__11242) : pred__11241.call(null,cljs.core.cst$kw$extfs,expr__11242)))){
return (new om.next.Indexer(self__.indexes,G__11136,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Indexer(self__.indexes,self__.extfs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6413__auto__,G__11136),null));
}
}
});

om.next.Indexer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6417__auto__){
var self__ = this;
var this__6417__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$indexes,self__.indexes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$extfs,self__.extfs],null))], null),self__.__extmap));
});

om.next.Indexer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6404__auto__,G__11136){
var self__ = this;
var this__6404__auto____$1 = this;
return (new om.next.Indexer(self__.indexes,self__.extfs,G__11136,self__.__extmap,self__.__hash));
});

om.next.Indexer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6410__auto__,entry__6411__auto__){
var self__ = this;
var this__6410__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6411__auto__)){
return cljs.core._assoc(this__6410__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6411__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6411__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6410__auto____$1,entry__6411__auto__);
}
});

om.next.Indexer.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.indexes) : cljs.core.deref.call(null,self__.indexes));
});

om.next.Indexer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$indexes,cljs.core.cst$sym$extfs], null);
});

om.next.Indexer.cljs$lang$type = true;

om.next.Indexer.cljs$lang$ctorPrSeq = (function (this__6439__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Indexer");
});

om.next.Indexer.cljs$lang$ctorPrWriter = (function (this__6439__auto__,writer__6440__auto__){
return cljs.core._write(writer__6440__auto__,"om.next/Indexer");
});

om.next.__GT_Indexer = (function om$next$__GT_Indexer(indexes,extfs){
return (new om.next.Indexer(indexes,extfs,null,null,null));
});

om.next.map__GT_Indexer = (function om$next$map__GT_Indexer(G__11138){
return (new om.next.Indexer(cljs.core.cst$kw$indexes.cljs$core$IFn$_invoke$arity$1(G__11138),cljs.core.cst$kw$extfs.cljs$core$IFn$_invoke$arity$1(G__11138),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11138,cljs.core.cst$kw$indexes,cljs.core.array_seq([cljs.core.cst$kw$extfs], 0)),null));
});

/**
 * Given a function (Component -> Ref), return an indexer.
 */
om.next.indexer = (function om$next$indexer(var_args){
var args11284 = [];
var len__6849__auto___11288 = arguments.length;
var i__6850__auto___11289 = (0);
while(true){
if((i__6850__auto___11289 < len__6849__auto___11288)){
args11284.push((arguments[i__6850__auto___11289]));

var G__11290 = (i__6850__auto___11289 + (1));
i__6850__auto___11289 = G__11290;
continue;
} else {
}
break;
}

var G__11286 = args11284.length;
switch (G__11286) {
case 0:
return om.next.indexer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.indexer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11284.length)].join('')));

}
});

om.next.indexer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.next.indexer.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$drop_DASH_component,(function (indexes,component){
return indexes;
}),cljs.core.cst$kw$ref_DASH__GT_components,(function (indexes,ref){
return null;
})], null));
});

om.next.indexer.cljs$core$IFn$_invoke$arity$1 = (function (extfs){
return (new om.next.Indexer((function (){var G__11287 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$ref_DASH__GT_components,cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11287) : cljs.core.atom.call(null,G__11287));
})(),extfs,null,null,null));
});

om.next.indexer.cljs$lang$maxFixedArity = 1;
/**
 * PRIVATE: Get the indexer associated with the reconciler.
 */
om.next.get_indexer = (function om$next$get_indexer(reconciler){
if(cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(reconciler) : om.next.reconciler_QMARK_.call(null,reconciler)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return all components for a given ref.
 */
om.next.ref__GT_components = (function om$next$ref__GT_components(x,ref){
if((ref == null)){
return null;
} else {
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return om.next.protocols.key__GT_components(indexer,ref);
}
});
/**
 * Get any component from the indexer that matches the ref.
 */
om.next.ref__GT_any = (function om$next$ref__GT_any(x,ref){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(om.next.protocols.key__GT_components(indexer,ref));
});
/**
 * Get any component from the indexer that matches the component class.
 */
om.next.class__GT_any = (function om$next$class__GT_any(x,class$){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
return cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH__GT_components,class$], null)));
});
/**
 * Given x (a reconciler or indexer) and y (a component or component class
 * path), return the queries for that path.
 */
om.next.class_path__GT_queries = (function om$next$class_path__GT_queries(x,y){
var indexer = (cljs.core.truth_((om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.reconciler_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.reconciler_QMARK_.call(null,x)))?om.next.get_indexer(x):x);
var cp = ((om.next.component_QMARK_(y))?om.next.class_path(y):y);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(clojure.zip.root),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(indexer) : cljs.core.deref.call(null,indexer)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null)));
});
/**
 * Returns the absolute query for a given component, not relative like
 * om.next/get-query.
 */
om.next.full_query = (function om$next$full_query(var_args){
var args11293 = [];
var len__6849__auto___11298 = arguments.length;
var i__6850__auto___11299 = (0);
while(true){
if((i__6850__auto___11299 < len__6849__auto___11298)){
args11293.push((arguments[i__6850__auto___11299]));

var G__11300 = (i__6850__auto___11299 + (1));
i__6850__auto___11299 = G__11300;
continue;
} else {
}
break;
}

var G__11295 = args11293.length;
switch (G__11295) {
case 1:
return om.next.full_query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.full_query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11293.length)].join('')));

}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$1 = (function (component){
if(om.next.iquery_QMARK_(component)){
if((om.next.path(component) == null)){
return om.next.replace(cljs.core.first(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11296 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11296) : cljs.core.deref.call(null,G__11296));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,om.next.class_path(component)], null))),om.next.get_query(component));
} else {
return om.next.full_query.cljs$core$IFn$_invoke$arity$2(component,om.next.get_query(component));
}
} else {
return null;
}
});

om.next.full_query.cljs$core$IFn$_invoke$arity$2 = (function (component,query){
if(om.next.iquery_QMARK_(component)){
var path_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.number_QMARK_),om.next.path(component));
var cp = om.next.class_path(component);
var qs = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11297 = om.next.get_indexer(om.next.get_reconciler(component));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11297) : cljs.core.deref.call(null,G__11297));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$class_DASH_path_DASH__GT_query,cp], null));
if(!(cljs.core.empty_QMARK_(qs))){
var q = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (path_SINGLEQUOTE_,cp,qs){
return (function (p1__11292_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_SINGLEQUOTE_,om.next.focus__GT_path.cljs$core$IFn$_invoke$arity$2(clojure.zip.root(p1__11292_SHARP_),path_SINGLEQUOTE_));
});})(path_SINGLEQUOTE_,cp,qs))
,qs));
if(!((q == null))){
return om.next.replace(q,query);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp),cljs.core.str(" or data path "),cljs.core.str(path_SINGLEQUOTE_)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("No queries exist for component path "),cljs.core.str(cp)].join(''),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$om$next_SLASH_no_DASH_queries], null));
}
} else {
return null;
}
});

om.next.full_query.cljs$lang$maxFixedArity = 2;
om.next.to_class = (function om$next$to_class(class$){
if((class$ == null)){
return null;
} else {
if(!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))){
var G__11305 = class$.prototype;
return Object.create(G__11305);
} else {
return class$;
}
}
});
om.next.unique_ident_QMARK_ = (function om$next$unique_ident_QMARK_(x){
var and__5779__auto__ = (om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : om.next.ident_QMARK_.call(null,x));
if(cljs.core.truth_(and__5779__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(x));
} else {
return and__5779__auto__;
}
});
om.next.normalize_STAR_ = (function om$next$normalize_STAR_(query,data,refs,union_seen){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data;
} else {
if(cljs.core.map_QMARK_(query)){
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query)));
var ident = ((((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))?om.next.ident(class$,data):null);
if(!((ident == null))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(om$next$normalize_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(query,cljs.core.first(ident)),data,refs,union_seen),cljs.core.assoc,cljs.core.cst$kw$om_SLASH_tag,cljs.core.first(ident));
} else {
throw (new Error("Union components must implement Ident"));
}
} else {
if(cljs.core.vector_QMARK_(data)){
return data;
} else {
var q = cljs.core.seq(query);
var ret = data;
while(true){
if(!((q == null))){
var expr = cljs.core.first(q);
if(cljs.core.truth_(om.next.join_QMARK_(expr))){
var vec__11321 = om.next.join_entry(expr);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11321,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11321,(1),null);
var recursive_QMARK_ = om.next.recursion_QMARK_(sel);
var union_entry = ((om.next.union_QMARK_(expr))?sel:union_seen);
var sel__$1 = ((recursive_QMARK_)?((!((union_seen == null)))?union_seen:query):sel);
var class$ = om.next.to_class(cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sel__$1)));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if(cljs.core.truth_((function (){var and__5779__auto__ = recursive_QMARK_;
if(and__5779__auto__){
return (om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : om.next.ident_QMARK_.call(null,v));
} else {
return and__5779__auto__;
}
})())){
var G__11328 = cljs.core.next(q);
var G__11329 = ret;
q = G__11328;
ret = G__11329;
continue;
} else {
if(cljs.core.map_QMARK_(v)){
var x = om$next$normalize_STAR_(sel__$1,v,refs,union_entry);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var i = om.next.ident(class$,v);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(i),cljs.core.second(i)], null),cljs.core.merge,cljs.core.array_seq([x], 0));

var G__11330 = cljs.core.next(q);
var G__11331 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,i);
q = G__11330;
ret = G__11331;
continue;
} else {
var G__11332 = cljs.core.next(q);
var G__11333 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,x);
q = G__11332;
ret = G__11333;
continue;
}
} else {
if(cljs.core.vector_QMARK_(v)){
var xs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__11306_SHARP_){
return om$next$normalize_STAR_(sel__$1,p1__11306_SHARP_,refs,union_entry);
});})(q,ret,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),v);
if(!(((class$ == null)) || (!(((!((class$ == null)))?(((false) || (class$.om$next$Ident$))?true:false):false))))){
var is = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (q,ret,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (p1__11307_SHARP_){
return om.next.ident(class$,p1__11307_SHARP_);
});})(q,ret,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
),xs);
if(cljs.core.vector_QMARK_(sel__$1)){
if(cljs.core.empty_QMARK_(is)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ffirst(is)], null),((function (q,ret,is,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ys){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([ys,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,is),xs)], 0));
});})(q,ret,is,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(refs,((function (q,ret,is,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (refs_SINGLEQUOTE_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,ret,is,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr){
return (function (ret__$1,p__11326){
var vec__11327 = p__11326;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11327,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11327,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ret__$1,i,cljs.core.merge,x);
});})(q,ret,is,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
,refs_SINGLEQUOTE_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,is,xs));
});})(q,ret,is,xs,vec__11321,k,sel,recursive_QMARK_,union_entry,sel__$1,class$,v,expr))
);
}

var G__11334 = cljs.core.next(q);
var G__11335 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,is);
q = G__11334;
ret = G__11335;
continue;
} else {
var G__11336 = cljs.core.next(q);
var G__11337 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,xs);
q = G__11336;
ret = G__11337;
continue;
}
} else {
if((v == null)){
var G__11338 = cljs.core.next(q);
var G__11339 = ret;
q = G__11338;
ret = G__11339;
continue;
} else {
var G__11340 = cljs.core.next(q);
var G__11341 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__11340;
ret = G__11341;
continue;

}
}
}
}
} else {
var k = ((cljs.core.seq_QMARK_(expr))?cljs.core.first(expr):expr);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,k);
if((v == null)){
var G__11342 = cljs.core.next(q);
var G__11343 = ret;
q = G__11342;
ret = G__11343;
continue;
} else {
var G__11344 = cljs.core.next(q);
var G__11345 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,k,v);
q = G__11344;
ret = G__11345;
continue;
}
}
} else {
return ret;
}
break;
}

}
}
}
});
/**
 * Given a Om component class or instance and a tree of data, use the component's
 * query to transform the tree into the default database format. All nodes that
 * can be mapped via Ident implementations wil be replaced with ident links. The
 * original node data will be moved into tables indexed by ident. If merge-idents
 * option is true, will return these tables in the result instead of as metadata.
 */
om.next.tree__GT_db = (function om$next$tree__GT_db(var_args){
var args11346 = [];
var len__6849__auto___11350 = arguments.length;
var i__6850__auto___11351 = (0);
while(true){
if((i__6850__auto___11351 < len__6849__auto___11350)){
args11346.push((arguments[i__6850__auto___11351]));

var G__11352 = (i__6850__auto___11351 + (1));
i__6850__auto___11351 = G__11352;
continue;
} else {
}
break;
}

var G__11348 = args11346.length;
switch (G__11348) {
case 2:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11346.length)].join('')));

}
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2 = (function (x,data){
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(x,data,false);
});

om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3 = (function (x,data,merge_idents){
var refs = (function (){var G__11349 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11349) : cljs.core.atom.call(null,G__11349));
})();
var x__$1 = ((cljs.core.vector_QMARK_(x))?x:om.next.get_query(x));
var ret = om.next.normalize_STAR_(x__$1,data,refs,null);
if(merge_idents){
var refs_SINGLEQUOTE_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ret,refs_SINGLEQUOTE_], 0)),cljs.core.cst$kw$om$next_SLASH_tables,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(refs_SINGLEQUOTE_)));
} else {
return cljs.core.with_meta(ret,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(refs) : cljs.core.deref.call(null,refs)));
}
});

om.next.tree__GT_db.cljs$lang$maxFixedArity = 3;
om.next.sift_idents = (function om$next$sift_idents(res){
var map__11357 = cljs.core.group_by((function (p1__11354_SHARP_){
return cljs.core.vector_QMARK_(cljs.core.first(p1__11354_SHARP_));
}),res);
var map__11357__$1 = ((((!((map__11357 == null)))?((((map__11357.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11357.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11357):map__11357);
var idents = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11357__$1,true);
var rest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11357__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,idents),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,rest)], null);
});
/**
 * Changes a join on key k with depth limit from [:a {:k n}] to [:a {:k (dec n)}]
 */
om.next.reduce_query_depth = (function om$next$reduce_query_depth(q,k){
var pos = om.next.query_template(q,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var node = clojure.zip.node(pos);
var node_SINGLEQUOTE_ = (function (){var G__11360 = node;
if(typeof node === 'number'){
return (G__11360 - (1));
} else {
return G__11360;
}
})();
return om.next.replace(pos,node_SINGLEQUOTE_);
});
/**
 * Given a union expression decrement each of the query roots by one if it
 * is recursive.
 */
om.next.reduce_union_recursion_depth = (function om$next$reduce_union_recursion_depth(union_expr,recursion_key){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__11363){
var vec__11364 = p__11363;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11364,(0),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11364,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.next.reduce_query_depth(q,recursion_key)], null);
}),union_expr));
});
/**
 * Denormalize a data based on query. refs is a data structure which maps idents
 * to their values. map-ident is a function taking a ident to another ident,
 * used during tempid transition. idents-seen is the set of idents encountered,
 * used to limit recursion. union-expr is the current union expression being
 * evaluated. recurse-key is key representing the current recursive query being
 * evaluted.
 */
om.next.denormalize_STAR_ = (function om$next$denormalize_STAR_(query,data,refs,map_ident,idents_seen,union_expr,recurse_key){
if(cljs.core.map_QMARK_(refs)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$refs)], 0)))].join('')));
}

var data__$1 = (function (){var G__11379 = data;
if(cljs.core.truth_((om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(data) : om.next.ident_QMARK_.call(null,data)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(G__11379) : map_ident.call(null,G__11379)));
} else {
return G__11379;
}
})();
if(cljs.core.vector_QMARK_(data__$1)){
var step = ((function (data__$1){
return (function (ident){
var ident_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(ident) : map_ident.call(null,ident)));
var union_recur_QMARK_ = (function (){var and__5779__auto__ = union_expr;
if(cljs.core.truth_(and__5779__auto__)){
return recurse_key;
} else {
return and__5779__auto__;
}
})();
var query__$1 = (function (){var G__11380 = query;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__11380,recurse_key);
} else {
return G__11380;
}
})();
var union_seen_SINGLEQUOTE_ = (function (){var G__11381 = union_expr;
if(cljs.core.truth_(union_recur_QMARK_)){
return om.next.reduce_union_recursion_depth(G__11381,recurse_key);
} else {
return G__11381;
}
})();
var query_SINGLEQUOTE_ = (function (){var G__11382 = query__$1;
if(cljs.core.map_QMARK_(query__$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__11382,cljs.core.first(ident));
} else {
return G__11382;
}
})();
return om$next$denormalize_STAR_(query_SINGLEQUOTE_,ident_SINGLEQUOTE_,refs,map_ident,idents_seen,union_seen_SINGLEQUOTE_,null);
});})(data__$1))
;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(step),data__$1);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null),query)){
return data__$1;
} else {
var map__11383 = cljs.core.group_by(((function (data__$1){
return (function (p1__11365_SHARP_){
var or__5791__auto__ = om.next.join_QMARK_(p1__11365_SHARP_);
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return (om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__11365_SHARP_) : om.next.ident_QMARK_.call(null,p1__11365_SHARP_));
}
});})(data__$1))
,query);
var map__11383__$1 = ((((!((map__11383 == null)))?((((map__11383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11383):map__11383);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11383__$1,false);
var joins = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11383__$1,true);
var props__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (map__11383,map__11383__$1,props,joins,data__$1){
return (function (p1__11366_SHARP_){
var G__11385 = p1__11366_SHARP_;
if(cljs.core.seq_QMARK_(p1__11366_SHARP_)){
return cljs.core.first(G__11385);
} else {
return G__11385;
}
});})(map__11383,map__11383__$1,props,joins,data__$1))
,props);
var joins__$1 = cljs.core.seq(joins);
var ret = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first(joins__$1);
var join__$1 = (function (){var G__11387 = join;
if(cljs.core.truth_((om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(join) : om.next.ident_QMARK_.call(null,join)))){
return cljs.core.PersistentHashMap.fromArrays([G__11387],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$_STAR_], null)]);
} else {
return G__11387;
}
})();
var vec__11386 = om.next.join_entry(join__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,(0),null);
var sel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11386,(1),null);
var recurse_QMARK_ = om.next.recursion_QMARK_(sel);
var recurse_key__$1 = ((recurse_QMARK_)?key:null);
var v = (cljs.core.truth_((om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(key) : om.next.ident_QMARK_.call(null,key)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$sym$_,cljs.core.second(key)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(refs,cljs.core.first(key)):cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(refs,(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(key) : map_ident.call(null,key)))):cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,key));
var key__$1 = (function (){var G__11388 = key;
if(om.next.unique_ident_QMARK_(key)){
return cljs.core.first(G__11388);
} else {
return G__11388;
}
})();
var v__$1 = (cljs.core.truth_((om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(v) : om.next.ident_QMARK_.call(null,v)))?(map_ident.cljs$core$IFn$_invoke$arity$1 ? map_ident.cljs$core$IFn$_invoke$arity$1(v) : map_ident.call(null,v)):v);
var limit = ((typeof sel === 'number')?sel:cljs.core.cst$kw$none);
var union_entry = ((om.next.union_QMARK_(join__$1))?sel:union_expr);
var sel__$1 = ((recurse_QMARK_)?((!((union_expr == null)))?union_entry:om.next.reduce_query_depth(query,key__$1)):(cljs.core.truth_((function (){var and__5779__auto__ = (om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(key__$1) : om.next.ident_QMARK_.call(null,key__$1));
if(cljs.core.truth_(and__5779__auto__)){
return om.next.union_QMARK_(join__$1);
} else {
return and__5779__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(key__$1)):(cljs.core.truth_((function (){var and__5779__auto__ = (om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$1) : om.next.ident_QMARK_.call(null,v__$1));
if(cljs.core.truth_(and__5779__auto__)){
return om.next.union_QMARK_(join__$1);
} else {
return and__5779__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(sel,cljs.core.first(v__$1)):sel
)));
var graph_loop_QMARK_ = (recurse_QMARK_) && (cljs.core.contains_QMARK_(cljs.core.set(cljs.core.get.cljs$core$IFn$_invoke$arity$2(idents_seen,key__$1)),v__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$none,limit));
var idents_seen__$1 = (cljs.core.truth_((function (){var and__5779__auto__ = (om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(v__$1) : om.next.ident_QMARK_.call(null,v__$1));
if(cljs.core.truth_(and__5779__auto__)){
return recurse_QMARK_;
} else {
return and__5779__auto__;
}
})())?cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(idents_seen,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key__$1], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),v__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,key__$1], null),v__$1):idents_seen);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),limit)){
var G__11391 = cljs.core.next(joins__$1);
var G__11392 = ret;
joins__$1 = G__11391;
ret = G__11392;
continue;
} else {
if(graph_loop_QMARK_){
var G__11393 = cljs.core.next(joins__$1);
var G__11394 = ret;
joins__$1 = G__11393;
ret = G__11394;
continue;
} else {
if((v__$1 == null)){
var G__11395 = cljs.core.next(joins__$1);
var G__11396 = ret;
joins__$1 = G__11395;
ret = G__11396;
continue;
} else {
var G__11397 = cljs.core.next(joins__$1);
var G__11398 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,key__$1,om$next$denormalize_STAR_(sel__$1,v__$1,refs,map_ident,idents_seen__$1,union_entry,recurse_key__$1));
joins__$1 = G__11397;
ret = G__11398;
continue;

}
}
}
} else {
var temp__4655__auto__ = cljs.core.some(((function (joins__$1,ret,map__11383,map__11383__$1,props,joins,props__$1,data__$1){
return (function (p__11389){
var vec__11390 = p__11389;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11390,(0),null);
var identset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11390,(1),null);
if(cljs.core.contains_QMARK_(identset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data__$1,k))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(idents_seen,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$last_DASH_ident,k], null));
} else {
return null;
}
});})(joins__$1,ret,map__11383,map__11383__$1,props,joins,props__$1,data__$1))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(idents_seen,cljs.core.cst$kw$last_DASH_ident));
if(cljs.core.truth_(temp__4655__auto__)){
var looped_key = temp__4655__auto__;
return looped_key;
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(data__$1,props__$1),ret], 0));
}
}
break;
}
}
}
});
/**
 * Given a query, some data in the default database format, and the entire
 * application state in the default database format, return the tree where all
 * ident links have been replaced with their original node values.
 */
om.next.db__GT_tree = (function om$next$db__GT_tree(var_args){
var args11399 = [];
var len__6849__auto___11402 = arguments.length;
var i__6850__auto___11403 = (0);
while(true){
if((i__6850__auto___11403 < len__6849__auto___11402)){
args11399.push((arguments[i__6850__auto___11403]));

var G__11404 = (i__6850__auto___11403 + (1));
i__6850__auto___11403 = G__11404;
continue;
} else {
}
break;
}

var G__11401 = args11399.length;
switch (G__11401) {
case 3:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11399.length)].join('')));

}
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$3 = (function (query,data,refs){
return om.next.denormalize_STAR_(query,data,refs,cljs.core.identity,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4 = (function (query,data,refs,map_ident){
return om.next.denormalize_STAR_(query,data,refs,map_ident,cljs.core.PersistentArrayMap.EMPTY,null,null);
});

om.next.db__GT_tree.cljs$lang$maxFixedArity = 4;
om.next.rewrite = (function om$next$rewrite(rewrite_map,result){
var step = (function om$next$rewrite_$_step(res,p__11417){
var vec__11419 = p__11417;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11419,(0),null);
var orig_paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11419,(1),null);
var to_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,k);
var res_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (to_move,vec__11419,k,orig_paths){
return (function (p1__11406_SHARP_,p2__11407_SHARP_){
return cljs.core.assoc_in(p1__11406_SHARP_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p2__11407_SHARP_,k),to_move);
});})(to_move,vec__11419,k,orig_paths))
,res,orig_paths);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(res_SINGLEQUOTE_,k);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,result,rewrite_map);
});
/**
 * When given a join `{:join selector-vector}`, roots found so far, and a `path` prefix:
 *   returns a (possibly empty) sequence of [re-rooted-join prefix] results.
 *   Does NOT support sub-roots. Each re-rooted join will share only
 *   one common parent (their common branching point).
 *   
 */
om.next.move_roots = (function om$next$move_roots(join,result_roots,path){
var query_root_QMARK_ = (function om$next$move_roots_$_query_root_QMARK_(join__$1){
return cljs.core.cst$kw$query_DASH_root.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(join__$1)) === true;
});
if(cljs.core.truth_(om.next.join_QMARK_(join))){
if(cljs.core.truth_(query_root_QMARK_(join))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result_roots,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [join,path], null));
} else {
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__11420_SHARP_){
return om$next$move_roots(p1__11420_SHARP_,result_roots,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,om.next.join_key(join)));
}),cljs.core.array_seq([om.next.join_value(join)], 0));
}
} else {
return result_roots;
}
});
/**
 * Searches a query for duplicate joins and deep-merges them into a new query.
 */
om.next.merge_joins = (function om$next$merge_joins(query){
var step = (function om$next$merge_joins_$_step(res,expr){
if(cljs.core.contains_QMARK_(cljs.core.cst$kw$elements_DASH_seen.cljs$core$IFn$_invoke$arity$1(res),expr)){
return res;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4((cljs.core.truth_((function (){var and__5779__auto__ = om.next.join_QMARK_(expr);
if(cljs.core.truth_(and__5779__auto__)){
return (!(om.next.union_QMARK_(expr))) && (!(cljs.core.list_QMARK_(expr)));
} else {
return and__5779__auto__;
}
})())?(function (){var jk = om.next.join_key(expr);
var jv = om.next.join_value(expr);
var q = (function (){var or__5791__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res),jk);
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var nq = ((om.next.recursion_QMARK_(q))?q:((om.next.recursion_QMARK_(jv))?jv:om$next$merge_joins(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(q,jv)))
));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$query_DASH_by_DASH_join], null),cljs.core.assoc,jk,nq);
})():cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(res,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$not_DASH_mergeable], null),cljs.core.conj,expr)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$elements_DASH_seen], null),cljs.core.conj,expr);
}
});
var init = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$query_DASH_by_DASH_join,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$elements_DASH_seen,cljs.core.PersistentHashSet.EMPTY,cljs.core.cst$kw$not_DASH_mergeable,cljs.core.PersistentVector.EMPTY], null);
var res = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,init,query);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$not_DASH_mergeable.cljs$core$IFn$_invoke$arity$1(res),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (init,res){
return (function (p__11430){
var vec__11431 = p__11430;
var jkey = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11431,(0),null);
var jsel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11431,(1),null);
return cljs.core.PersistentArrayMap.fromArray([jkey,jsel], true, false);
});})(init,res))
,cljs.core.cst$kw$query_DASH_by_DASH_join.cljs$core$IFn$_invoke$arity$1(res))));
});
om.next.process_roots = (function om$next$process_roots(query){

var retain = (function om$next$process_roots_$_retain(expr){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [expr,cljs.core.PersistentVector.EMPTY], null)], null);
});
var reroot = (function om$next$process_roots_$_reroot(expr){
var roots = om.next.move_roots(expr,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY);
if(cljs.core.empty_QMARK_(roots)){
return retain(expr);
} else {
return roots;
}
});
var rewrite_map_step = (function om$next$process_roots_$_rewrite_map_step(rewrites,p__11441){
var vec__11443 = p__11441;
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11443,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11443,(1),null);
if(cljs.core.empty_QMARK_(path)){
return rewrites;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(rewrites,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.join_key(expr)], null),cljs.core.conj,path);
}
});
var reroots = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(reroot,cljs.core.array_seq([query], 0));
var query__$1 = om.next.merge_joins(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,reroots));
var rewrite_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rewrite_map_step,cljs.core.PersistentArrayMap.EMPTY,reroots);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$query,query__$1,cljs.core.cst$kw$rewrite,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(om.next.rewrite,rewrite_map)], null);
});
om.next.merge_idents = (function om$next$merge_idents(tree,config,refs,query){
var map__11454 = config;
var map__11454__$1 = ((((!((map__11454 == null)))?((((map__11454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11454):map__11454);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11454__$1,cljs.core.cst$kw$merge_DASH_ident);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11454__$1,cljs.core.cst$kw$indexer);
var ident_joins = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__11454,map__11454__$1,merge_ident,indexer){
return (function (p1__11444_SHARP_){
var and__5779__auto__ = om.next.join_QMARK_(p1__11444_SHARP_);
if(cljs.core.truth_(and__5779__auto__)){
var G__11456 = om.next.join_key(p1__11444_SHARP_);
return (om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.next.ident_QMARK_.cljs$core$IFn$_invoke$arity$1(G__11456) : om.next.ident_QMARK_.call(null,G__11456));
} else {
return and__5779__auto__;
}
});})(map__11454,map__11454__$1,merge_ident,indexer))
,query));
var step = ((function (map__11454,map__11454__$1,merge_ident,indexer,ident_joins){
return (function om$next$merge_idents_$_step(tree_SINGLEQUOTE_,p__11460){
var vec__11462 = p__11460;
var ident = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11462,(0),null);
var props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11462,(1),null);
if(cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))){
var c_or_q = (function (){var or__5791__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ident_joins,ident);
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return om.next.ref__GT_any(indexer,ident);
}
})();
var props_SINGLEQUOTE_ = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(c_or_q,props);
var refs__$1 = cljs.core.meta(props_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,(merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props_SINGLEQUOTE_)),refs__$1);
} else {
return (merge_ident.cljs$core$IFn$_invoke$arity$4 ? merge_ident.cljs$core$IFn$_invoke$arity$4(config,tree_SINGLEQUOTE_,ident,props) : merge_ident.call(null,config,tree_SINGLEQUOTE_,ident,props));
}
});})(map__11454,map__11454__$1,merge_ident,indexer,ident_joins))
;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,tree,refs);
});
om.next.merge_novelty_BANG_ = (function om$next$merge_novelty_BANG_(reconciler,state,res,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var vec__11465 = om.next.sift_idents(res);
var idts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11465,(0),null);
var res_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11465,(1),null);
var res_SINGLEQUOTE___$1 = (cljs.core.truth_(cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(config))?om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3((function (){var or__5791__auto__ = query;
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__11466 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11466) : cljs.core.deref.call(null,G__11466));
})());
}
})(),res_SINGLEQUOTE_,true):res_SINGLEQUOTE_);
return cljs.core.cst$kw$merge_DASH_tree.cljs$core$IFn$_invoke$arity$1(config).call(null,om.next.merge_idents(state,config,idts,query),res_SINGLEQUOTE___$1);
});
om.next.default_merge = (function om$next$default_merge(reconciler,state,res,query){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$keys,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol_QMARK_),cljs.core.keys(res)),cljs.core.cst$kw$next,om.next.merge_novelty_BANG_(reconciler,state,res,query),cljs.core.cst$kw$tempids,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$tempids,cljs.core.second),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,cljs.core.first),res)))], null);
});
/**
 * Merge a state delta into the application state. Affected components managed
 * by the reconciler will re-render.
 */
om.next.merge_BANG_ = (function om$next$merge_BANG_(var_args){
var args11467 = [];
var len__6849__auto___11490 = arguments.length;
var i__6850__auto___11491 = (0);
while(true){
if((i__6850__auto___11491 < len__6849__auto___11490)){
args11467.push((arguments[i__6850__auto___11491]));

var G__11492 = (i__6850__auto___11491 + (1));
i__6850__auto___11491 = G__11492;
continue;
} else {
}
break;
}

var G__11469 = args11467.length;
switch (G__11469) {
case 2:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11467.length)].join('')));

}
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (reconciler,delta){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(reconciler,delta,null);
});

om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (reconciler,delta,query){
var config = cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler);
var state = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(config);
var merge = cljs.core.cst$kw$merge.cljs$core$IFn$_invoke$arity$1(config);
var map__11470 = (function (){var G__11471 = reconciler;
var G__11472 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var G__11473 = delta;
var G__11474 = query;
return (merge.cljs$core$IFn$_invoke$arity$4 ? merge.cljs$core$IFn$_invoke$arity$4(G__11471,G__11472,G__11473,G__11474) : merge.call(null,G__11471,G__11472,G__11473,G__11474));
})();
var map__11470__$1 = ((((!((map__11470 == null)))?((((map__11470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11470):map__11470);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$keys);
var next = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$next);
var tempids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11470__$1,cljs.core.cst$kw$tempids);
om.next.protocols.queue_BANG_(reconciler,keys);

var G__11482 = state;
var G__11483 = (function (){var temp__4655__auto__ = cljs.core.cst$kw$migrate.cljs$core$IFn$_invoke$arity$1(config);
if(cljs.core.truth_(temp__4655__auto__)){
var migrate = temp__4655__auto__;
var G__11485 = next;
var G__11486 = (function (){var or__5791__auto__ = query;
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return om.next.get_query(cljs.core.cst$kw$root.cljs$core$IFn$_invoke$arity$1((function (){var G__11489 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11489) : cljs.core.deref.call(null,G__11489));
})()));
}
})();
var G__11487 = tempids;
var G__11488 = cljs.core.cst$kw$id_DASH_key.cljs$core$IFn$_invoke$arity$1(config);
return (migrate.cljs$core$IFn$_invoke$arity$4 ? migrate.cljs$core$IFn$_invoke$arity$4(G__11485,G__11486,G__11487,G__11488) : migrate.call(null,G__11485,G__11486,G__11487,G__11488));
} else {
return next;
}
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11482,G__11483) : cljs.core.reset_BANG_.call(null,G__11482,G__11483));
});

om.next.merge_BANG_.cljs$lang$maxFixedArity = 3;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {om.next.protocols.IReconciler}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.next.Reconciler = (function (config,state,__meta,__extmap,__hash){
this.config = config;
this.state = state;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229700362;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6405__auto__,k__6406__auto__){
var self__ = this;
var this__6405__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6405__auto____$1,k__6406__auto__,null);
});

om.next.Reconciler.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6407__auto__,k11499,else__6408__auto__){
var self__ = this;
var this__6407__auto____$1 = this;
var G__11501 = (((k11499 instanceof cljs.core.Keyword))?k11499.fqn:null);
switch (G__11501) {
case "config":
return self__.config;

break;
case "state":
return self__.state;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11499,else__6408__auto__);

}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$ = true;

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_BANG_$arity$2 = (function (_,ks){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queue], null),cljs.core.into,cljs.core.array_seq([ks], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$queue_sends_BANG_$arity$2 = (function (_,sends){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued_DASH_sends], null),cljs.core.cst$kw$merge_DASH_sends.cljs$core$IFn$_invoke$arity$1(self__.config),cljs.core.array_seq([sends], 0));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$send_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sends = cljs.core.cst$kw$queued_DASH_sends.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.empty_QMARK_(sends)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (sends,this$__$1){
return (function (state__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,cljs.core.cst$kw$queued_DASH_sends,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$sends_DASH_queued,false);
});})(sends,this$__$1))
);

return cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,sends,((function (sends,this$__$1){
return (function (res,query){
return om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);
});})(sends,this$__$1))
);
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reconcile_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var st = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state));
var q = cljs.core.cst$kw$queue.cljs$core$IFn$_invoke$arity$1(st);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$queue,cljs.core.PersistentVector.EMPTY);

if(cljs.core.empty_QMARK_(q)){
return cljs.core.cst$kw$render.cljs$core$IFn$_invoke$arity$1(st).call(null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$om$next_SLASH_skip], null),q)){
return null;
} else {
var cs = cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (st,q,___$1){
return (function (p1__11495_SHARP_){
return om.next.protocols.key__GT_components(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),p1__11495_SHARP_);
});})(st,q,___$1))
),((function (st,q,___$1){
return (function (p1__11496_SHARP_,p2__11497_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__11496_SHARP_,p2__11497_SHARP_);
});})(st,q,___$1))
,cljs.core.PersistentHashSet.EMPTY,q);
var map__11502 = self__.config;
var map__11502__$1 = ((((!((map__11502 == null)))?((((map__11502.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11502.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11502):map__11502);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11502__$1,cljs.core.cst$kw$ui_DASH__GT_props);
var env = om.next.to_env(self__.config);
var seq__11504 = cljs.core.seq(cljs.core.cst$kw$optimize.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,cs));
var chunk__11505 = null;
var count__11506 = (0);
var i__11507 = (0);
while(true){
if((i__11507 < count__11506)){
var c = chunk__11505.cljs$core$IIndexed$_nth$arity$2(null,i__11507);
if(om.next.mounted_QMARK_(c)){
var computed_11522 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_props_11523 = om.next.computed((ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c)),computed_11522);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_11523,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_11523 == null))){
om.next.update_component_BANG_(c,next_props_11523);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__11524 = seq__11504;
var G__11525 = chunk__11505;
var G__11526 = count__11506;
var G__11527 = (i__11507 + (1));
seq__11504 = G__11524;
chunk__11505 = G__11525;
count__11506 = G__11526;
i__11507 = G__11527;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__11504);
if(temp__4657__auto__){
var seq__11504__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11504__$1)){
var c__6594__auto__ = cljs.core.chunk_first(seq__11504__$1);
var G__11528 = cljs.core.chunk_rest(seq__11504__$1);
var G__11529 = c__6594__auto__;
var G__11530 = cljs.core.count(c__6594__auto__);
var G__11531 = (0);
seq__11504 = G__11528;
chunk__11505 = G__11529;
count__11506 = G__11530;
i__11507 = G__11531;
continue;
} else {
var c = cljs.core.first(seq__11504__$1);
if(om.next.mounted_QMARK_(c)){
var computed_11532 = om.next.get_computed.cljs$core$IFn$_invoke$arity$1(om.next.props(c));
var next_props_11533 = om.next.computed((ui__GT_props.cljs$core$IFn$_invoke$arity$2 ? ui__GT_props.cljs$core$IFn$_invoke$arity$2(env,c) : ui__GT_props.call(null,env,c)),computed_11532);
if(cljs.core.truth_(om.next.should_update_QMARK_.cljs$core$IFn$_invoke$arity$3(c,next_props_11533,om.next.get_state.cljs$core$IFn$_invoke$arity$1(c)))){
if(!((next_props_11533 == null))){
om.next.update_component_BANG_(c,next_props_11533);
} else {
c.forceUpdate();
}
} else {
}
} else {
}

var G__11534 = cljs.core.next(seq__11504__$1);
var G__11535 = null;
var G__11536 = (0);
var G__11537 = (0);
seq__11504 = G__11534;
chunk__11505 = G__11535;
count__11506 = G__11536;
i__11507 = G__11537;
continue;
}
} else {
return null;
}
}
break;
}

}
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_render_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$queued], null),cljs.core.not);
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$schedule_sends_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.not(cljs.core.cst$kw$sends_DASH_queued.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$sends_DASH_queued], null),true);

return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$basis_t$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cst$kw$t.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$add_root_BANG_$arity$4 = (function (this$,root_class,target,options){
var self__ = this;
var this$__$1 = this;
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rctor = om.next.factory.cljs$core$IFn$_invoke$arity$1(root_class);
var guid = cljs.core.random_uuid();
if(om.next.iquery_QMARK_(root_class)){
om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root_class);
} else {
}

if(cljs.core.truth_((function (){var and__5779__auto__ = cljs.core.cst$kw$normalize.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(and__5779__auto__)){
return cljs.core.not(cljs.core.cst$kw$normalized.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state))));
} else {
return and__5779__auto__;
}
})())){
var new_state_11538 = om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$2(root_class,(function (){var G__11508 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11508) : cljs.core.deref.call(null,G__11508));
})());
var refs_11539 = cljs.core.meta(new_state_11538);
var G__11509_11540 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
var G__11510_11541 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new_state_11538,refs_11539], 0));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11509_11540,G__11510_11541) : cljs.core.reset_BANG_.call(null,G__11509_11540,G__11510_11541));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$normalized,true);
} else {
}

var renderf = ((function (ret,rctor,guid,this$__$1){
return (function (data){
var _STAR_reconciler_STAR_11511 = om.next._STAR_reconciler_STAR_;
var _STAR_shared_STAR_11512 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_11513 = om.next._STAR_instrument_STAR_;
om.next._STAR_reconciler_STAR_ = this$__$1;

om.next._STAR_shared_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(self__.config),(cljs.core.truth_(cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config))?cljs.core.cst$kw$shared_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,data):null)], 0));

om.next._STAR_instrument_STAR_ = cljs.core.cst$kw$instrument.cljs$core$IFn$_invoke$arity$1(self__.config);

try{var c = ((!((target == null)))?cljs.core.cst$kw$root_DASH_render.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)),target):((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null))?(rctor.cljs$core$IFn$_invoke$arity$1 ? rctor.cljs$core$IFn$_invoke$arity$1(data) : rctor.call(null,data)):(function (){var temp__4657__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(temp__4657__auto__)){
var c_SINGLEQUOTE_ = temp__4657__auto__;
if(om.next.mounted_QMARK_(c_SINGLEQUOTE_)){
return c_SINGLEQUOTE_.forceUpdate(data);
} else {
return null;
}
} else {
return null;
}
})()
));
if((((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)) && (!((c == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.assoc,cljs.core.cst$kw$root,c);

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c) : cljs.core.reset_BANG_.call(null,ret,c));
} else {
return null;
}
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11513;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_11512;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_11511;
}});})(ret,rctor,guid,this$__$1))
;
var parsef = ((function (renderf,ret,rctor,guid,this$__$1){
return (function (){
var sel = om.next.get_query((function (){var or__5791__auto__ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return root_class;
}
})());
if(((sel == null)) || (cljs.core.vector_QMARK_(sel))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Application root query must be a vector"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$sel),cljs.core.list(cljs.core.cst$sym$vector_QMARK_,cljs.core.cst$sym$sel))], 0)))].join('')));
}

if(!((sel == null))){
var env = om.next.to_env(self__.config);
var v = cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env,sel);
if(cljs.core.empty_QMARK_(v)){
return null;
} else {
return renderf(v);
}
} else {
return renderf((function (){var G__11514 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11514) : cljs.core.deref.call(null,G__11514));
})());
}
});})(renderf,ret,rctor,guid,this$__$1))
;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.state,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$target,target,cljs.core.cst$kw$render,parsef,cljs.core.cst$kw$root,root_class,cljs.core.cst$kw$remove,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (){
cljs.core.remove_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__5791__auto__ = target;
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return guid;
}
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.state,((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (p1__11494_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__11494_SHARP_,cljs.core.cst$kw$target),cljs.core.cst$kw$render),cljs.core.cst$kw$root),cljs.core.cst$kw$remove);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

if((target == null)){
return null;
} else {
return cljs.core.cst$kw$root_DASH_unmount.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,target);
}
});})(renderf,parsef,ret,rctor,guid,this$__$1))
], null));

cljs.core.add_watch(cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config),(function (){var or__5791__auto__ = target;
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return guid;
}
})(),((function (renderf,parsef,ret,rctor,guid,this$__$1){
return (function (_,___$1,___$2,___$3){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$t], null),cljs.core.inc);

return om.next.schedule_render_BANG_(this$__$1);
});})(renderf,parsef,ret,rctor,guid,this$__$1))
);

parsef();

var temp__4657__auto___11542 = om.next.get_query((function (){var or__5791__auto__ = (function (){var and__5779__auto__ = target;
if(cljs.core.truth_(and__5779__auto__)){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
} else {
return and__5779__auto__;
}
})();
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return root_class;
}
})());
if(cljs.core.truth_(temp__4657__auto___11542)){
var sel_11543 = temp__4657__auto___11542;
var env_11544 = om.next.to_env(self__.config);
var snds_11545 = om.next.gather_sends(env_11544,sel_11543,cljs.core.cst$kw$remotes.cljs$core$IFn$_invoke$arity$1(self__.config));
if(cljs.core.empty_QMARK_(snds_11545)){
} else {
var temp__4657__auto___11546__$1 = cljs.core.cst$kw$send.cljs$core$IFn$_invoke$arity$1(self__.config);
if(cljs.core.truth_(temp__4657__auto___11546__$1)){
var send_11547 = temp__4657__auto___11546__$1;
var G__11515_11548 = snds_11545;
var G__11516_11549 = ((function (G__11515_11548,send_11547,temp__4657__auto___11546__$1,env_11544,snds_11545,sel_11543,temp__4657__auto___11542,renderf,parsef,ret,rctor,guid,this$__$1){
return (function (res,query){
om.next.merge_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,res,query);

return renderf(cljs.core.cst$kw$parser.cljs$core$IFn$_invoke$arity$1(self__.config).call(null,env_11544,sel_11543));
});})(G__11515_11548,send_11547,temp__4657__auto___11546__$1,env_11544,snds_11545,sel_11543,temp__4657__auto___11542,renderf,parsef,ret,rctor,guid,this$__$1))
;
(send_11547.cljs$core$IFn$_invoke$arity$2 ? send_11547.cljs$core$IFn$_invoke$arity$2(G__11515_11548,G__11516_11549) : send_11547.call(null,G__11515_11548,G__11516_11549));
} else {
}
}
} else {
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$reindex_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),cljs.core.cst$kw$root);
if(om.next.iquery_QMARK_(root)){
return om.next.protocols.index_root(cljs.core.cst$kw$indexer.cljs$core$IFn$_invoke$arity$1(self__.config),root);
} else {
return null;
}
});

om.next.Reconciler.prototype.om$next$protocols$IReconciler$remove_root_BANG_$arity$2 = (function (_,target){
var self__ = this;
var ___$1 = this;
var temp__4657__auto__ = cljs.core.cst$kw$remove.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)));
if(cljs.core.truth_(temp__4657__auto__)){
var remove = temp__4657__auto__;
return (remove.cljs$core$IFn$_invoke$arity$0 ? remove.cljs$core$IFn$_invoke$arity$0() : remove.call(null));
} else {
return null;
}
});

om.next.Reconciler.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6419__auto__,writer__6420__auto__,opts__6421__auto__){
var self__ = this;
var this__6419__auto____$1 = this;
var pr_pair__6422__auto__ = ((function (this__6419__auto____$1){
return (function (keyval__6423__auto__){
return cljs.core.pr_sequential_writer(writer__6420__auto__,cljs.core.pr_writer,""," ","",opts__6421__auto__,keyval__6423__auto__);
});})(this__6419__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6420__auto__,pr_pair__6422__auto__,"#om.next.Reconciler{",", ","}",opts__6421__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IIterable$ = true;

om.next.Reconciler.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11498){
var self__ = this;
var G__11498__$1 = this;
return (new cljs.core.RecordIter((0),G__11498__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$config,cljs.core.cst$kw$state], null),cljs.core._iterator(self__.__extmap)));
});

om.next.Reconciler.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6403__auto__){
var self__ = this;
var this__6403__auto____$1 = this;
return self__.__meta;
});

om.next.Reconciler.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6399__auto__){
var self__ = this;
var this__6399__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6409__auto__){
var self__ = this;
var this__6409__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6400__auto__){
var self__ = this;
var this__6400__auto____$1 = this;
var h__6226__auto__ = self__.__hash;
if(!((h__6226__auto__ == null))){
return h__6226__auto__;
} else {
var h__6226__auto____$1 = cljs.core.hash_imap(this__6400__auto____$1);
self__.__hash = h__6226__auto____$1;

return h__6226__auto____$1;
}
});

om.next.Reconciler.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6401__auto__,other__6402__auto__){
var self__ = this;
var this__6401__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5779__auto__ = other__6402__auto__;
if(cljs.core.truth_(and__5779__auto__)){
var and__5779__auto____$1 = (this__6401__auto____$1.constructor === other__6402__auto__.constructor);
if(and__5779__auto____$1){
return cljs.core.equiv_map(this__6401__auto____$1,other__6402__auto__);
} else {
return and__5779__auto____$1;
}
} else {
return and__5779__auto__;
}
})())){
return true;
} else {
return false;
}
});

om.next.Reconciler.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6414__auto__,k__6415__auto__){
var self__ = this;
var this__6414__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$config,null,cljs.core.cst$kw$state,null], null), null),k__6415__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6414__auto____$1),self__.__meta),k__6415__auto__);
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6415__auto__)),null));
}
});

om.next.Reconciler.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6412__auto__,k__6413__auto__,G__11498){
var self__ = this;
var this__6412__auto____$1 = this;
var pred__11517 = cljs.core.keyword_identical_QMARK_;
var expr__11518 = k__6413__auto__;
if(cljs.core.truth_((pred__11517.cljs$core$IFn$_invoke$arity$2 ? pred__11517.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$config,expr__11518) : pred__11517.call(null,cljs.core.cst$kw$config,expr__11518)))){
return (new om.next.Reconciler(G__11498,self__.state,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11517.cljs$core$IFn$_invoke$arity$2 ? pred__11517.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$state,expr__11518) : pred__11517.call(null,cljs.core.cst$kw$state,expr__11518)))){
return (new om.next.Reconciler(self__.config,G__11498,self__.__meta,self__.__extmap,null));
} else {
return (new om.next.Reconciler(self__.config,self__.state,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6413__auto__,G__11498),null));
}
}
});

om.next.Reconciler.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6417__auto__){
var self__ = this;
var this__6417__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$config,self__.config],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$state,self__.state],null))], null),self__.__extmap));
});

om.next.Reconciler.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6404__auto__,G__11498){
var self__ = this;
var this__6404__auto____$1 = this;
return (new om.next.Reconciler(self__.config,self__.state,G__11498,self__.__extmap,self__.__hash));
});

om.next.Reconciler.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6410__auto__,entry__6411__auto__){
var self__ = this;
var this__6410__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6411__auto__)){
return cljs.core._assoc(this__6410__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6411__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6411__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6410__auto____$1,entry__6411__auto__);
}
});

om.next.Reconciler.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var G__11520 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(self__.config);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11520) : cljs.core.deref.call(null,G__11520));
});

om.next.Reconciler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$config,cljs.core.cst$sym$state], null);
});

om.next.Reconciler.cljs$lang$type = true;

om.next.Reconciler.cljs$lang$ctorPrSeq = (function (this__6439__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"om.next/Reconciler");
});

om.next.Reconciler.cljs$lang$ctorPrWriter = (function (this__6439__auto__,writer__6440__auto__){
return cljs.core._write(writer__6440__auto__,"om.next/Reconciler");
});

om.next.__GT_Reconciler = (function om$next$__GT_Reconciler(config,state){
return (new om.next.Reconciler(config,state,null,null,null));
});

om.next.map__GT_Reconciler = (function om$next$map__GT_Reconciler(G__11500){
return (new om.next.Reconciler(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(G__11500),cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(G__11500),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11500,cljs.core.cst$kw$config,cljs.core.array_seq([cljs.core.cst$kw$state], 0)),null));
});

om.next.default_ui__GT_props = (function om$next$default_ui__GT_props(p__11550,c){
var map__11560 = p__11550;
var map__11560__$1 = ((((!((map__11560 == null)))?((((map__11560.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11560.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11560):map__11560);
var env = map__11560__$1;
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11560__$1,cljs.core.cst$kw$parser);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11560__$1,cljs.core.cst$kw$pathopt);
var ui = (((function (){var and__5779__auto__ = pathopt;
if(and__5779__auto__){
var and__5779__auto____$1 = ((!((c == null)))?(((false) || (c.om$next$Ident$))?true:false):false);
if(and__5779__auto____$1){
return om.next.iquery_QMARK_(c);
} else {
return and__5779__auto____$1;
}
} else {
return and__5779__auto__;
}
})())?(function (){var id = om.next.ident(c,om.next.props(c));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11565 = env;
var G__11566 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.fromArray([id,om.next.get_query(c)], true, false)], null);
return (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(G__11565,G__11566) : parser.call(null,G__11565,G__11566));
})(),id);
})():null);
if(!((ui == null))){
return ui;
} else {
var fq = om.next.full_query.cljs$core$IFn$_invoke$arity$1(c);
if((fq == null)){
return null;
} else {
var s = cljs.core.system_time();
var ui__$1 = (parser.cljs$core$IFn$_invoke$arity$2 ? parser.cljs$core$IFn$_invoke$arity$2(env,fq) : parser.call(null,env,fq));
var e = cljs.core.system_time();
var temp__4657__auto___11569 = cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4657__auto___11569)){
var l_11570 = temp__4657__auto___11569;
var dt_11571 = (e - s);
if(((16) < dt_11571)){
var G__11567_11572 = l_11570;
var G__11568_11573 = [cljs.core.str(c),cljs.core.str(" query took "),cljs.core.str(dt_11571),cljs.core.str(" msecs")].join('');
goog.log.warning(G__11567_11572,G__11568_11573);
} else {
}
} else {
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ui__$1,om.next.path(c));
}
}
});
om.next.default_merge_ident = (function om$next$default_merge_ident(_,tree,ref,props){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(tree,ref,cljs.core.merge,props);
});
om.next.default_merge_tree = (function om$next$default_merge_tree(a,b){
if(cljs.core.map_QMARK_(a)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a,b], 0));
} else {
return b;
}
});
/**
 * Given app-state-pure (the application state as an immutable value), a query,
 * tempids (a hash map from tempid to stable id), and an optional id-key
 * keyword, return a new application state value with the tempids replaced by
 * the stable ids.
 */
om.next.default_migrate = (function om$next$default_migrate(var_args){
var args11574 = [];
var len__6849__auto___11597 = arguments.length;
var i__6850__auto___11598 = (0);
while(true){
if((i__6850__auto___11598 < len__6849__auto___11597)){
args11574.push((arguments[i__6850__auto___11598]));

var G__11599 = (i__6850__auto___11598 + (1));
i__6850__auto___11598 = G__11599;
continue;
} else {
}
break;
}

var G__11576 = args11574.length;
switch (G__11576) {
case 3:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11574.length)].join('')));

}
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$3 = (function (app_state_pure,query,tempids){
return om.next.default_migrate.cljs$core$IFn$_invoke$arity$4(app_state_pure,query,tempids,null);
});

om.next.default_migrate.cljs$core$IFn$_invoke$arity$4 = (function (app_state_pure,query,tempids,id_key){
var dissoc_in = (function om$next$dissoc_in(pure,p__11587){
var vec__11589 = p__11587;
var table = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11589,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11589,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pure,table,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(pure,table),id));
});
var step = (function om$next$step(pure,p__11590){
var vec__11594 = p__11590;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11594,(0),null);
var vec__11595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11594,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11595,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11595,(1),null);
var new$ = vec__11595;
return cljs.core.assoc_in(dissoc_in(pure,old),new$,(function (){var G__11596 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,old),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pure,new$)], 0));
if(!((id_key == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__11596,id_key,id);
} else {
return G__11596;
}
})());
});
if(!(cljs.core.empty_QMARK_(tempids))){
var pure_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(step,app_state_pure,tempids);
return om.next.tree__GT_db.cljs$core$IFn$_invoke$arity$3(query,om.next.db__GT_tree.cljs$core$IFn$_invoke$arity$4(query,pure_SINGLEQUOTE_,pure_SINGLEQUOTE_,((function (pure_SINGLEQUOTE_){
return (function (ident){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(tempids,ident,ident);
});})(pure_SINGLEQUOTE_))
),true);
} else {
return app_state_pure;
}
});

om.next.default_migrate.cljs$lang$maxFixedArity = 4;
om.next.has_error_QMARK_ = (function om$next$has_error_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,cljs.core.cst$kw$om$next_SLASH_error));
});
om.next.default_extract_errors = (function om$next$default_extract_errors(reconciler,res,query){
var extract_STAR_ = (function om$next$default_extract_errors_$_extract_STAR_(query__$1,res__$1,errs){
var class$ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(query__$1));
var top_error_QMARK_ = (((!((class$ == null))) && (om.next.has_error_QMARK_(res__$1)))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (class$){
return (function (p1__11601_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__11601_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.ident(class$,res__$1)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(res__$1));
});})(class$))
):null);
var ret = (((top_error_QMARK_ == null))?cljs.core.PersistentArrayMap.EMPTY:null);
if(cljs.core.vector_QMARK_(query__$1)){
if(cljs.core.vector_QMARK_(res__$1)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (class$,top_error_QMARK_,ret){
return (function (p1__11602_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(query__$1,p1__11602_SHARP_,errs);
});})(class$,top_error_QMARK_,ret))
),res__$1);
} else {
var exprs = cljs.core.seq(query__$1);
var ret__$1 = ret;
while(true){
if(!((exprs == null))){
var expr = cljs.core.first(exprs);
var k = (function (){var k = om.next.expr__GT_key(expr);
var G__11637 = k;
if(om.next.unique_ident_QMARK_(k)){
return cljs.core.first(G__11637);
} else {
return G__11637;
}
})();
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(res__$1,k);
if(om.next.union_QMARK_(expr)){
var jk = om.next.join_key(expr);
var jv = om.next.join_value(expr);
var class_SINGLEQUOTE_ = cljs.core.cst$kw$component.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(jv));
if(!(cljs.core.vector_QMARK_(data))){
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,data))),data,errs);
var G__11639 = cljs.core.next(exprs);
var G__11640 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__11639;
ret__$1 = G__11640;
continue;
} else {
var ret_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__11603_SHARP_){
return om$next$default_extract_errors_$_extract_STAR_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(jv,cljs.core.first(om.next.ident(class_SINGLEQUOTE_,p1__11603_SHARP_))),p1__11603_SHARP_,errs);
});})(exprs,ret__$1,jk,jv,class_SINGLEQUOTE_,expr,k,data,class$,top_error_QMARK_,ret))
),data);
var G__11641 = cljs.core.next(exprs);
var G__11642 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__11641;
ret__$1 = G__11642;
continue;
}
} else {
if(cljs.core.truth_(om.next.join_QMARK_(expr))){
var jk = om.next.join_key(expr);
var jv = om.next.join_value(expr);
var ret_SINGLEQUOTE_ = om$next$default_extract_errors_$_extract_STAR_(jv,data,errs);
var G__11643 = cljs.core.next(exprs);
var G__11644 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,jk,ret_SINGLEQUOTE_));
exprs = G__11643;
ret__$1 = G__11644;
continue;
} else {
if((cljs.core.map_QMARK_(data)) && (om.next.has_error_QMARK_(data))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(errs,((function (exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret){
return (function (p1__11604_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__11604_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5791__auto__ = (((class$ == null))?null:om.next.ident(class$,res__$1));
if(cljs.core.truth_(or__5791__auto__)){
return or__5791__auto__;
} else {
return k;
}
})()], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),cljs.core.cst$kw$om$next_SLASH_error.cljs$core$IFn$_invoke$arity$1(data));
});})(exprs,ret__$1,expr,k,data,class$,top_error_QMARK_,ret))
);

var G__11645 = cljs.core.next(exprs);
var G__11646 = null;
exprs = G__11645;
ret__$1 = G__11646;
continue;
} else {
var G__11647 = cljs.core.next(exprs);
var G__11648 = (((ret__$1 == null))?null:cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$1,k,data));
exprs = G__11647;
ret__$1 = G__11648;
continue;

}
}
}
} else {
return ret__$1;
}
break;
}
}
} else {
return null;
}
});
var errs = (function (){var G__11638 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11638) : cljs.core.atom.call(null,G__11638));
})();
var ret = extract_STAR_(query,res,errs);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$tree,ret,cljs.core.cst$kw$errors,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(errs) : cljs.core.deref.call(null,errs))], null);
});
/**
 * Construct a reconciler from a configuration map.
 * 
 * Required parameters:
 *   :state        - the application state. If IAtom value is not supplied the
 *                   data will be normalized into the default database format
 *                   using the root query. This can be disabled by explicitly
 *                   setting the optional :normalize parameter to false.
 *   :parser       - the parser to be used
 * 
 * Optional parameters:
 *   :shared       - a map of global shared properties for the component tree.
 *   :shared-fn    - a function to compute global shared properties from the root props.
 *                   the result is merged with :shared.
 *   :send         - required only if the parser will return a non-empty value when
 *                   run against the supplied :remotes. send is a function of two
 *                   arguments, the map of remote expressions keyed by remote target
 *                   and a callback which should be invoked with the result from each
 *                   remote target. Note this means the callback can be invoked
 *                   multiple times to support parallel fetching and incremental
 *                   loading if desired. The callback should take the response as the
 *                   first argument and the the query that was sent as the second
 *                   argument.
 *   :normalize    - whether the state should be normalized. If true it is assumed
 *                   all novelty introduced into the system will also need
 *                   normalization.
 *   :remotes      - a vector of keywords representing remote services which can
 *                   evaluate query expressions. Defaults to [:remote]
 *   :root-render  - the root render function. Defaults to ReactDOM.render
 *   :root-unmount - the root unmount function. Defaults to
 *                   ReactDOM.unmountComponentAtNode
 *   :logger       - supply a goog.log compatible logger
 */
om.next.reconciler = (function om$next$reconciler(p__11654){
var map__11662 = p__11654;
var map__11662__$1 = ((((!((map__11662 == null)))?((((map__11662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11662):map__11662);
var config = map__11662__$1;
var root_render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$root_DASH_render,((function (map__11662,map__11662__$1,config){
return (function (p1__11651_SHARP_,p2__11652_SHARP_){
return ReactDOM.render(p1__11651_SHARP_,p2__11652_SHARP_);
});})(map__11662,map__11662__$1,config))
);
var normalize = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$normalize);
var prune_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$prune_DASH_tree,om.next.default_extract_errors);
var pathopt = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$pathopt,false);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$instrument);
var id_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$id_DASH_key);
var merge_sends = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$merge_DASH_sends,((function (map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key){
return (function (p1__11649_SHARP_,p2__11650_SHARP_){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.array_seq([p1__11649_SHARP_,p2__11650_SHARP_], 0));
});})(map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key))
);
var merge_ident = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$merge_DASH_ident,om.next.default_merge_ident);
var remotes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$remotes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$remote], null));
var migrate = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$migrate,om.next.default_migrate);
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$history,(100));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$state);
var merge = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$merge,om.next.default_merge);
var shared_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$shared_DASH_fn);
var ui__GT_props = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$ui_DASH__GT_props,om.next.default_ui__GT_props);
var parser = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$parser);
var indexer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$indexer,om.next.indexer);
var root_unmount = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$root_DASH_unmount,((function (map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer){
return (function (p1__11653_SHARP_){
return ReactDOM.unmountComponentAtNode(p1__11653_SHARP_);
});})(map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer))
);
var send = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$send);
var merge_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$merge_DASH_tree,om.next.default_merge_tree);
var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11662__$1,cljs.core.cst$kw$shared);
var optimize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11662__$1,cljs.core.cst$kw$optimize,((function (map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared){
return (function (cs){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(om.next.depth,cs);
});})(map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared))
);
if(cljs.core.map_QMARK_(config)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$config)], 0)))].join('')));
}

var idxr = (indexer.cljs$core$IFn$_invoke$arity$0 ? indexer.cljs$core$IFn$_invoke$arity$0() : indexer.call(null));
var norm_QMARK_ = ((!((state == null)))?((((state.cljs$lang$protocol_mask$partition1$ & (16384))) || (state.cljs$core$IAtom$))?true:(((!state.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,state));
var state_SINGLEQUOTE_ = ((norm_QMARK_)?state:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.atom.call(null,state)));
var logger = ((cljs.core.contains_QMARK_(config,cljs.core.cst$kw$logger))?cljs.core.cst$kw$logger.cljs$core$IFn$_invoke$arity$1(config):om.next._STAR_logger_STAR_);
var ret = (new om.next.Reconciler(cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$pathopt,cljs.core.cst$kw$id_DASH_key,cljs.core.cst$kw$instrument,cljs.core.cst$kw$merge_DASH_ident,cljs.core.cst$kw$merge_DASH_sends,cljs.core.cst$kw$remotes,cljs.core.cst$kw$migrate,cljs.core.cst$kw$history,cljs.core.cst$kw$state,cljs.core.cst$kw$merge,cljs.core.cst$kw$shared_DASH_fn,cljs.core.cst$kw$parser,cljs.core.cst$kw$ui_DASH__GT_props,cljs.core.cst$kw$logger,cljs.core.cst$kw$indexer,cljs.core.cst$kw$root_DASH_unmount,cljs.core.cst$kw$send,cljs.core.cst$kw$shared,cljs.core.cst$kw$merge_DASH_tree,cljs.core.cst$kw$optimize,cljs.core.cst$kw$root_DASH_render,cljs.core.cst$kw$normalize,cljs.core.cst$kw$prune_DASH_tree],[pathopt,id_key,(function (){var G__11665 = instrument;
if(!((instrument == null))){
return ((function (G__11665,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize){
return (function om$next$reconciler_$_G__11665(x){
var _STAR_instrument_STAR_11667 = om.next._STAR_instrument_STAR_;
om.next._STAR_instrument_STAR_ = null;

try{return (instrument.cljs$core$IFn$_invoke$arity$1 ? instrument.cljs$core$IFn$_invoke$arity$1(x) : instrument.call(null,x));
}finally {om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_11667;
}});
;})(G__11665,idxr,norm_QMARK_,state_SINGLEQUOTE_,logger,map__11662,map__11662__$1,config,root_render,normalize,prune_tree,pathopt,instrument,id_key,merge_sends,merge_ident,remotes,migrate,history,state,merge,shared_fn,ui__GT_props,parser,indexer,root_unmount,send,merge_tree,shared,optimize))
} else {
return G__11665;
}
})(),merge_ident,merge_sends,remotes,migrate,om.next.cache.cache(history),state_SINGLEQUOTE_,merge,shared_fn,parser,ui__GT_props,logger,idxr,root_unmount,send,shared,merge_tree,optimize,root_render,(function (){var or__5791__auto__ = !(norm_QMARK_);
if(or__5791__auto__){
return or__5791__auto__;
} else {
return normalize;
}
})(),prune_tree]),(function (){var G__11668 = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$normalized,cljs.core.cst$kw$remove,cljs.core.cst$kw$queue,cljs.core.cst$kw$sends_DASH_queued,cljs.core.cst$kw$queued_DASH_sends,cljs.core.cst$kw$queued,cljs.core.cst$kw$render,cljs.core.cst$kw$root,cljs.core.cst$kw$t,cljs.core.cst$kw$target],[false,null,cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,false,null,null,(0),null]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11668) : cljs.core.atom.call(null,G__11668));
})(),null,null,null));
return ret;
});
/**
 * Returns true if x is a reconciler.
 */
om.next.reconciler_QMARK_ = (function om$next$reconciler_QMARK_(x){
return (x instanceof om.next.Reconciler);
});
/**
 * Return the reconciler's application state atom. Useful when the reconciler
 * was initialized via denormalized data.
 */
om.next.app_state = (function om$next$app_state(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler));
});
/**
 * Return the application's root component.
 */
om.next.app_root = (function om$next$app_root(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11670 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11670) : cljs.core.deref.call(null,G__11670));
})(),cljs.core.cst$kw$root);
});
/**
 * Force a re-render of the root. Not recommended for anything except
 * recomputing :shared.
 */
om.next.force_root_render_BANG_ = (function om$next$force_root_render_BANG_(reconciler){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__11672 = cljs.core.cst$kw$state.cljs$core$IFn$_invoke$arity$1(reconciler);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11672) : cljs.core.deref.call(null,G__11672));
})(),cljs.core.cst$kw$render).call(null);
});
/**
 * Given a reconciler and UUID return the application state snapshost
 * from history associated with the UUID. The size of the reconciler history
 * may be configured by the :history option when constructing the reconciler.
 */
om.next.from_history = (function om$next$from_history(reconciler,uuid){
if(om.next.reconciler_QMARK_(reconciler)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$reconciler_QMARK_,cljs.core.cst$sym$reconciler)], 0)))].join('')));
}

return cljs.core.cst$kw$history.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$config.cljs$core$IFn$_invoke$arity$1(reconciler)).get(uuid);
});
/**
 * Return a temporary id.
 */
om.next.tempid = (function om$next$tempid(var_args){
var args11673 = [];
var len__6849__auto___11676 = arguments.length;
var i__6850__auto___11677 = (0);
while(true){
if((i__6850__auto___11677 < len__6849__auto___11676)){
args11673.push((arguments[i__6850__auto___11677]));

var G__11678 = (i__6850__auto___11677 + (1));
i__6850__auto___11677 = G__11678;
continue;
} else {
}
break;
}

var G__11675 = args11673.length;
switch (G__11675) {
case 0:
return om.next.tempid.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.tempid.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11673.length)].join('')));

}
});

om.next.tempid.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$0();
});

om.next.tempid.cljs$core$IFn$_invoke$arity$1 = (function (id){
return om.tempid.tempid.cljs$core$IFn$_invoke$arity$1(id);
});

om.next.tempid.cljs$lang$maxFixedArity = 1;
/**
 * Return true if x is a tempid, false otherwise
 */
om.next.tempid_QMARK_ = (function om$next$tempid_QMARK_(x){
return om.tempid.tempid_QMARK_(x);
});
/**
 * Create a Om Next transit reader. This reader can handler the tempid type.
 * Can pass transit reader customization opts map.
 */
om.next.reader = (function om$next$reader(var_args){
var args11680 = [];
var len__6849__auto___11683 = arguments.length;
var i__6850__auto___11684 = (0);
while(true){
if((i__6850__auto___11684 < len__6849__auto___11683)){
args11680.push((arguments[i__6850__auto___11684]));

var G__11685 = (i__6850__auto___11684 + (1));
i__6850__auto___11684 = G__11685;
continue;
} else {
}
break;
}

var G__11682 = args11680.length;
switch (G__11682) {
case 0:
return om.next.reader.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11680.length)].join('')));

}
});

om.next.reader.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.reader.cljs$core$IFn$_invoke$arity$0();
});

om.next.reader.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.reader.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.reader.cljs$lang$maxFixedArity = 1;
/**
 * Create a Om Next transit writer. This writer can handler the tempid type.
 * Can pass transit writer customization opts map.
 */
om.next.writer = (function om$next$writer(var_args){
var args11687 = [];
var len__6849__auto___11690 = arguments.length;
var i__6850__auto___11691 = (0);
while(true){
if((i__6850__auto___11691 < len__6849__auto___11690)){
args11687.push((arguments[i__6850__auto___11691]));

var G__11692 = (i__6850__auto___11691 + (1));
i__6850__auto___11691 = G__11692;
continue;
} else {
}
break;
}

var G__11689 = args11687.length;
switch (G__11689) {
case 0:
return om.next.writer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.next.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11687.length)].join('')));

}
});

om.next.writer.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.transit.writer.cljs$core$IFn$_invoke$arity$0();
});

om.next.writer.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return om.transit.writer.cljs$core$IFn$_invoke$arity$1(opts);
});

om.next.writer.cljs$lang$maxFixedArity = 1;
/**
 * Given a query expression return an equivalent query expression that can be
 * spliced into a transaction that will force a read of that key from the
 * specified remote target.
 */
om.next.force = (function om$next$force(var_args){
var args11694 = [];
var len__6849__auto___11697 = arguments.length;
var i__6850__auto___11698 = (0);
while(true){
if((i__6850__auto___11698 < len__6849__auto___11697)){
args11694.push((arguments[i__6850__auto___11698]));

var G__11699 = (i__6850__auto___11698 + (1));
i__6850__auto___11698 = G__11699;
continue;
} else {
}
break;
}

var G__11696 = args11694.length;
switch (G__11696) {
case 1:
return om.next.force.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.force.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11694.length)].join('')));

}
});

om.next.force.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return om.next.force.cljs$core$IFn$_invoke$arity$2(expr,cljs.core.cst$kw$remote);
});

om.next.force.cljs$core$IFn$_invoke$arity$2 = (function (expr,target){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.cst$sym$quote),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,target], null));
});

om.next.force.cljs$lang$maxFixedArity = 2;
