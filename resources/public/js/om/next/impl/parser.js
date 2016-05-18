// Compiled by ClojureScript 1.7.228 {}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
goog.require('om.util');
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.union_entry__GT_ast = (function om$next$impl$parser$union_entry__GT_ast(p__19845){
var vec__19847 = p__19845;
var k = cljs.core.nth.call(null,vec__19847,(0),null);
var v = cljs.core.nth.call(null,vec__19847,(1),null);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union-entry","union-entry",223335750),new cljs.core.Keyword(null,"union-key","union-key",1529707234),k,new cljs.core.Keyword(null,"query","query",-1288509510),v,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.union__GT_ast = (function om$next$impl$parser$union__GT_ast(m){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"query","query",-1288509510),m,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.union_entry__GT_ast),m)], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__19874){
var vec__19889 = p__19874;
var f = cljs.core.nth.call(null,vec__19889,(0),null);
var args = cljs.core.nth.call(null,vec__19889,(1),null);
var call = vec__19889;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.call(null,om.next.impl.parser.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__18726__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__18726__auto__ = args;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__19896 = ast;
if((new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol)){
return cljs.core.assoc.call(null,G__19896,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866));
} else {
return G__19896;
}
}
});
/**
 * Convert a query to its AST representation.
 */
om.next.impl.parser.query__GT_ast = (function om$next$impl$parser$query__GT_ast(query){
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,query));
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),query)], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)));
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var query_root_QMARK_ = new cljs.core.Keyword(null,"query-root","query-root",359781888).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,join));
var vec__19947 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__19947,(0),null);
var v = cljs.core.nth.call(null,vec__19947,(1),null);
var ast = om.next.impl.parser.expr__GT_ast.call(null,k);
var component = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,v));
return cljs.core.merge.call(null,ast,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"join","join",-758861890),new cljs.core.Keyword(null,"query","query",-1288509510),v], null),(((component == null))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null)),(cljs.core.truth_(query_root_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null):null),(((typeof v === 'number') || (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),v)))?null:((cljs.core.vector_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,om.next.impl.parser.expr__GT_ast),v)], null):((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.impl.parser.union__GT_ast.call(null,v)], null)], null):(function(){throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid join, "),cljs.core.str(join)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-join","error/invalid-join",1594073006)], null))})()
))));
});
om.next.impl.parser.ident__GT_ast = (function om$next$impl$parser$ident__GT_ast(p__19962){
var vec__19964 = p__19962;
var k = cljs.core.nth.call(null,vec__19964,(0),null);
var id = cljs.core.nth.call(null,vec__19964,(1),null);
var ref = vec__19964;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref], null);
});
/**
 * Given a query expression convert it into an AST.
 */
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ident__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.wrap_expr = (function om$next$impl$parser$wrap_expr(root_QMARK_,expr){
if(cljs.core.truth_(root_QMARK_)){
return cljs.core.with_meta.call(null,(function (){var G__19970 = expr;
if((expr instanceof cljs.core.Keyword)){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,G__19970);
} else {
return G__19970;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-root","query-root",359781888),true], null));
} else {
return expr;
}
});
/**
 * Given a query expression AST convert it back into a query expression.
 */
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(var_args){
var args19976 = [];
var len__19785__auto___19998 = arguments.length;
var i__19786__auto___19999 = (0);
while(true){
if((i__19786__auto___19999 < len__19785__auto___19998)){
args19976.push((arguments[i__19786__auto___19999]));

var G__20000 = (i__19786__auto___19999 + (1));
i__19786__auto___19999 = G__20000;
continue;
} else {
}
break;
}

var G__19982 = args19976.length;
switch (G__19982) {
case 1:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args19976.length)].join('')));

}
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$1 = (function (ast){
return om.next.impl.parser.ast__GT_expr.call(null,ast,false);
});

om.next.impl.parser.ast__GT_expr.cljs$core$IFn$_invoke$arity$2 = (function (p__19983,unparse_QMARK_){
var map__19984 = p__19983;
var map__19984__$1 = ((((!((map__19984 == null)))?((((map__19984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19984):map__19984);
var ast = map__19984__$1;
var type = cljs.core.get.call(null,map__19984__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var component = cljs.core.get.call(null,map__19984__$1,new cljs.core.Keyword(null,"component","component",1555936782));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"root","root",-448657453),type)){
var G__19986 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__19984,map__19984__$1,ast,type,component){
return (function (p1__19973_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__19973_SHARP_,unparse_QMARK_);
});})(map__19984,map__19984__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(ast));
if(!((component == null))){
return cljs.core.with_meta.call(null,G__19986,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null));
} else {
return G__19986;
}
} else {
var map__19987 = ast;
var map__19987__$1 = ((((!((map__19987 == null)))?((((map__19987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19987):map__19987);
var key = cljs.core.get.call(null,map__19987__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var query = cljs.core.get.call(null,map__19987__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var query_root = cljs.core.get.call(null,map__19987__$1,new cljs.core.Keyword(null,"query-root","query-root",359781888));
var params = cljs.core.get.call(null,map__19987__$1,new cljs.core.Keyword(null,"params","params",710516235));
return om.next.impl.parser.wrap_expr.call(null,query_root,((!((params == null)))?(function (){var expr = om.next.impl.parser.ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast,new cljs.core.Keyword(null,"params","params",710516235)),unparse_QMARK_);
if(!(cljs.core.empty_QMARK_.call(null,params))){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params),expr);
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,expr);
}
})():((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"join","join",-758861890),type))?(((cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query)) && (!(typeof query === 'number')) && (unparse_QMARK_ === true))?(function (){var map__19989 = ast;
var map__19989__$1 = ((((!((map__19989 == null)))?((((map__19989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19989):map__19989);
var children = cljs.core.get.call(null,map__19989__$1,new cljs.core.Keyword(null,"children","children",-940561982));
if((((1) === cljs.core.count.call(null,children))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"union","union",2142937499),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children))))){
return cljs.core.PersistentArrayMap.fromArray([key,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (map__19989,map__19989__$1,children,map__19987,map__19987__$1,key,query,query_root,params,map__19984,map__19984__$1,ast,type,component){
return (function (p__19991){
var map__19992 = p__19991;
var map__19992__$1 = ((((!((map__19992 == null)))?((((map__19992.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19992.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19992):map__19992);
var union_key = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"union-key","union-key",1529707234));
var children__$1 = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var component__$1 = cljs.core.get.call(null,map__19992__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [union_key,(function (){var G__19996 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__19992,map__19992__$1,union_key,children__$1,component__$1,map__19989,map__19989__$1,children,map__19987,map__19987__$1,key,query,query_root,params,map__19984,map__19984__$1,ast,type,component){
return (function (p1__19974_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__19974_SHARP_,unparse_QMARK_);
});})(map__19992,map__19992__$1,union_key,children__$1,component__$1,map__19989,map__19989__$1,children,map__19987,map__19987__$1,key,query,query_root,params,map__19984,map__19984__$1,ast,type,component))
),children__$1);
if(!((component__$1 == null))){
return cljs.core.with_meta.call(null,G__19996,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1], null));
} else {
return G__19996;
}
})()], null);
});})(map__19989,map__19989__$1,children,map__19987,map__19987__$1,key,query,query_root,params,map__19984,map__19984__$1,ast,type,component))
),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,children)))], true, false);
} else {
return cljs.core.PersistentArrayMap.fromArray([key,(function (){var G__19997 = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (map__19989,map__19989__$1,children,map__19987,map__19987__$1,key,query,query_root,params,map__19984,map__19984__$1,ast,type,component){
return (function (p1__19975_SHARP_){
return om.next.impl.parser.ast__GT_expr.call(null,p1__19975_SHARP_,unparse_QMARK_);
});})(map__19989,map__19989__$1,children,map__19987,map__19987__$1,key,query,query_root,params,map__19984,map__19984__$1,ast,type,component))
),children);
if(!((component == null))){
return cljs.core.with_meta.call(null,G__19997,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),component], null));
} else {
return G__19997;
}
})()], true, false);
}
})():cljs.core.PersistentArrayMap.fromArray([key,query], true, false)):key)));
}
});

om.next.impl.parser.ast__GT_expr.cljs$lang$maxFixedArity = 2;
/**
 * Add path metadata to a data structure. data is the data to be worked on.
 * path is the current path into the data. query is the query used to
 * walk the data. union-expr tracks the last seen union query to be used
 * when it finds a recursive union.
 */
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(var_args){
var args20029 = [];
var len__19785__auto___20052 = arguments.length;
var i__19786__auto___20053 = (0);
while(true){
if((i__19786__auto___20053 < len__19785__auto___20052)){
args20029.push((arguments[i__19786__auto___20053]));

var G__20054 = (i__19786__auto___20053 + (1));
i__19786__auto___20053 = G__20054;
continue;
} else {
}
break;
}

var G__20037 = args20029.length;
switch (G__20037) {
case 3:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20029.length)].join('')));

}
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$3 = (function (data,path,query){
return om.next.impl.parser.path_meta.call(null,data,path,query,null);
});

om.next.impl.parser.path_meta.cljs$core$IFn$_invoke$arity$4 = (function (data,path,query,union_expr){
var map__20041 = cljs.core.group_by.call(null,(function (p1__20028_SHARP_){
var or__18726__auto__ = om.util.join_QMARK_.call(null,p1__20028_SHARP_);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return om.util.ident_QMARK_.call(null,p1__20028_SHARP_);
}
}),query);
var map__20041__$1 = ((((!((map__20041 == null)))?((((map__20041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20041):map__20041);
var props = cljs.core.get.call(null,map__20041__$1,false);
var joins = cljs.core.get.call(null,map__20041__$1,true);
if((query == null)){
var G__20043 = data;
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition0$ & (262144))) || (data.cljs$core$IWithMeta$))?true:(((!data.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,data))){
return cljs.core.vary_meta.call(null,G__20043,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
return G__20043;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,data)){
return cljs.core.vary_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,((function (map__20041,map__20041__$1,props,joins){
return (function (idx,v){
return om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,idx),query,union_expr);
});})(map__20041,map__20041__$1,props,joins))
),data),cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
if(cljs.core.vector_QMARK_.call(null,query)){
var joins__$1 = cljs.core.seq.call(null,joins);
var ret = data;
while(true){
if(!((joins__$1 == null))){
var join = cljs.core.first.call(null,joins__$1);
var join__$1 = (function (){var G__20046 = join;
if(om.util.ident_QMARK_.call(null,join)){
return cljs.core.PersistentHashMap.fromArrays([G__20046],[new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)]);
} else {
return G__20046;
}
})();
var vec__20045 = om.util.join_entry.call(null,join__$1);
var key = cljs.core.nth.call(null,vec__20045,(0),null);
var sel = cljs.core.nth.call(null,vec__20045,(1),null);
var union_entry = ((om.util.union_QMARK_.call(null,join__$1))?sel:union_expr);
var sel__$1 = ((om.util.recursion_QMARK_.call(null,sel))?((!((union_expr == null)))?union_entry:query):sel);
var key__$1 = (function (){var G__20047 = key;
if(om.util.unique_ident_QMARK_.call(null,key)){
return cljs.core.first.call(null,G__20047);
} else {
return G__20047;
}
})();
var v = cljs.core.get.call(null,ret,key__$1);
var G__20056 = cljs.core.next.call(null,joins__$1);
var G__20057 = (function (){var G__20048 = ret;
if(cljs.core.contains_QMARK_.call(null,ret,key__$1)){
return cljs.core.assoc.call(null,G__20048,key__$1,om.next.impl.parser.path_meta.call(null,v,cljs.core.conj.call(null,path,key__$1),sel__$1,union_entry));
} else {
return G__20048;
}
})();
joins__$1 = G__20056;
ret = G__20057;
continue;
} else {
var G__20049 = ret;
if(((!((ret == null)))?((((ret.cljs$lang$protocol_mask$partition0$ & (262144))) || (ret.cljs$core$IWithMeta$))?true:(((!ret.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,ret))){
return cljs.core.vary_meta.call(null,G__20049,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path);
} else {
return G__20049;
}
}
break;
}
} else {
if(cljs.core.map_QMARK_.call(null,data)){
var dispatch_key = cljs.core.comp.call(null,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510),om.next.impl.parser.expr__GT_ast);
var branches = cljs.core.vals.call(null,query);
var props__$1 = cljs.core.map.call(null,dispatch_key,cljs.core.keys.call(null,data));
var query__$1 = cljs.core.some.call(null,((function (dispatch_key,branches,props__$1,map__20041,map__20041__$1,props,joins){
return (function (q){
var query_props = cljs.core.map.call(null,dispatch_key,q);
if(cljs.core._EQ_.call(null,cljs.core.set.call(null,props__$1),cljs.core.set.call(null,query_props))){
return q;
} else {
return null;
}
});})(dispatch_key,branches,props__$1,map__20041,map__20041__$1,props,joins))
,branches);
return om.next.impl.parser.path_meta.call(null,data,path,query__$1,union_expr);
} else {
return data;
}

}
}
}
});

om.next.impl.parser.path_meta.cljs$lang$maxFixedArity = 4;
om.next.impl.parser.rethrow_QMARK_ = (function om$next$impl$parser$rethrow_QMARK_(x){
return ((x instanceof cljs.core.ExceptionInfo)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword("om.next","abort","om.next/abort",-897542671),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,x))));
});
/**
 * Given a :read and/or :mutate function return a parser. Refer to om.next/parser
 * for top level documentation.
 */
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__20058){
var map__20125 = p__20058;
var map__20125__$1 = ((((!((map__20125 == null)))?((((map__20125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20125):map__20125);
var config = map__20125__$1;
var read = cljs.core.get.call(null,map__20125__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__20125__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__20125,map__20125__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,query){
return om$next$impl$parser$parser_$_self.call(null,env,query,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,query,target){
var elide_paths_QMARK_ = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config));
var map__20159 = (function (){var G__20160 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),om$next$impl$parser$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"query-root","query-root",359781888),new cljs.core.Keyword("om.next","root","om.next/root",-1714259778));
if(!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168)))){
return cljs.core.assoc.call(null,G__20160,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY);
} else {
return G__20160;
}
})();
var map__20159__$1 = ((((!((map__20159 == null)))?((((map__20159.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20159.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20159):map__20159);
var env__$1 = map__20159__$1;
var path = cljs.core.get.call(null,map__20159__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__20159,map__20159__$1,env__$1,path,map__20125,map__20125__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__20185 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var map__20185__$1 = ((((!((map__20185 == null)))?((((map__20185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20185):map__20185);
var ast = map__20185__$1;
var query_SINGLEQUOTE_ = cljs.core.get.call(null,map__20185__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var key = cljs.core.get.call(null,map__20185__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dispatch_key = cljs.core.get.call(null,map__20185__$1,new cljs.core.Keyword(null,"dispatch-key","dispatch-key",733619510));
var params = cljs.core.get.call(null,map__20185__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env__$2 = (function (){var G__20187 = cljs.core.merge.call(null,env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ast","ast",-860334068),ast,new cljs.core.Keyword(null,"query","query",-1288509510),query_SINGLEQUOTE_], null));
var G__20187__$1 = (((query_SINGLEQUOTE_ == null))?cljs.core.dissoc.call(null,G__20187,new cljs.core.Keyword(null,"query","query",-1288509510)):G__20187);
var G__20187__$2 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null),query_SINGLEQUOTE_))?cljs.core.assoc.call(null,G__20187__$1,new cljs.core.Keyword(null,"query","query",-1288509510),query):G__20187__$1);
if(cljs.core.vector_QMARK_.call(null,key)){
return cljs.core.assoc.call(null,G__20187__$2,new cljs.core.Keyword(null,"query-root","query-root",359781888),key);
} else {
return G__20187__$2;
}
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (function (){var G__20188 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20188) {
case "call":
if(mutate){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)))].join('')));
}

return mutate.call(null,env__$2,dispatch_key,params);

break;
case "prop":
if(read){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "join":
if(read){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
case "union":
if(read){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dispatch_key,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})();
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.call(null,res,target);
var G__20189 = ret;
var G__20189__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.call(null,G__20189,expr):G__20189);
if(cljs.core.map_QMARK_.call(null,ast_SINGLEQUOTE_)){
return cljs.core.conj.call(null,G__20189__$1,om.next.impl.parser.ast__GT_expr.call(null,ast_SINGLEQUOTE_));
} else {
return G__20189__$1;
}
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
var mut_ret = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{cljs.core.reset_BANG_.call(null,mut_ret,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null));
}catch (e20190){var e_20194 = e20190;
if(om.next.impl.parser.rethrow_QMARK_.call(null,e_20194)){
throw e_20194;
} else {
cljs.core.reset_BANG_.call(null,error,e_20194);
}
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
if(call_QMARK_){
if(((value == null)) || (cljs.core.map_QMARK_.call(null,value))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(dispatch_key),cljs.core.str(" mutation :value must be nil or a map with structure {:keys [...]}")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"value","value",1946509744,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"value","value",1946509744,null)))))].join('')));
}
} else {
}

var G__20191 = ret;
var G__20191__$1 = ((!((value == null)))?cljs.core.assoc.call(null,G__20191,key,value):G__20191);
var G__20191__$2 = ((cljs.core.deref.call(null,mut_ret))?cljs.core.assoc_in.call(null,G__20191__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,new cljs.core.Keyword(null,"result","result",1415092211)], null),cljs.core.deref.call(null,mut_ret)):G__20191__$1);
if(cljs.core.deref.call(null,error)){
return cljs.core.assoc.call(null,G__20191__$2,key,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","error","om.next/error",-1841983205),cljs.core.deref.call(null,error)], null));
} else {
return G__20191__$2;
}
}
}
});})(elide_paths_QMARK_,map__20159,map__20159__$1,env__$1,path,map__20125,map__20125__$1,config,read,mutate))
;
var G__20192 = cljs.core.reduce.call(null,step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),query);
if(!((!((target == null))) || (elide_paths_QMARK_))){
return om.next.impl.parser.path_meta.call(null,G__20192,path,query);
} else {
return G__20192;
}
});
om$next$impl$parser$parser_$_self = function(env,query,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,query);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,query,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__20125,map__20125__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=parser.js.map