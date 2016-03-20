// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__24082__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24081 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24081,(0),null);
var body = cljs.core.nthnext.call(null,vec__24081,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24082 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24083__i = 0, G__24083__a = new Array(arguments.length -  0);
while (G__24083__i < G__24083__a.length) {G__24083__a[G__24083__i] = arguments[G__24083__i + 0]; ++G__24083__i;}
  args = new cljs.core.IndexedSeq(G__24083__a,0);
} 
return G__24082__delegate.call(this,args);};
G__24082.cljs$lang$maxFixedArity = 0;
G__24082.cljs$lang$applyTo = (function (arglist__24084){
var args = cljs.core.seq(arglist__24084);
return G__24082__delegate(args);
});
G__24082.cljs$core$IFn$_invoke$arity$variadic = G__24082__delegate;
return G__24082;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17543__auto__ = (function sablono$core$update_arglists_$_iter__24089(s__24090){
return (new cljs.core.LazySeq(null,(function (){
var s__24090__$1 = s__24090;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24090__$1);
if(temp__4425__auto__){
var s__24090__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24090__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__24090__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__24092 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__24091 = (0);
while(true){
if((i__24091 < size__17542__auto__)){
var args = cljs.core._nth.call(null,c__17541__auto__,i__24091);
cljs.core.chunk_append.call(null,b__24092,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24093 = (i__24091 + (1));
i__24091 = G__24093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24092),sablono$core$update_arglists_$_iter__24089.call(null,cljs.core.chunk_rest.call(null,s__24090__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24092),null);
}
} else {
var args = cljs.core.first.call(null,s__24090__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24089.call(null,cljs.core.rest.call(null,s__24090__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17836__auto__ = [];
var len__17829__auto___24099 = arguments.length;
var i__17830__auto___24100 = (0);
while(true){
if((i__17830__auto___24100 < len__17829__auto___24099)){
args__17836__auto__.push((arguments[i__17830__auto___24100]));

var G__24101 = (i__17830__auto___24100 + (1));
i__17830__auto___24100 = G__24101;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17543__auto__ = (function sablono$core$iter__24095(s__24096){
return (new cljs.core.LazySeq(null,(function (){
var s__24096__$1 = s__24096;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24096__$1);
if(temp__4425__auto__){
var s__24096__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24096__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__24096__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__24098 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__24097 = (0);
while(true){
if((i__24097 < size__17542__auto__)){
var style = cljs.core._nth.call(null,c__17541__auto__,i__24097);
cljs.core.chunk_append.call(null,b__24098,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24102 = (i__24097 + (1));
i__24097 = G__24102;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24098),sablono$core$iter__24095.call(null,cljs.core.chunk_rest.call(null,s__24096__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24098),null);
}
} else {
var style = cljs.core.first.call(null,s__24096__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24095.call(null,cljs.core.rest.call(null,s__24096__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq24094){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24094));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to24103 = (function sablono$core$link_to24103(var_args){
var args__17836__auto__ = [];
var len__17829__auto___24106 = arguments.length;
var i__17830__auto___24107 = (0);
while(true){
if((i__17830__auto___24107 < len__17829__auto___24106)){
args__17836__auto__.push((arguments[i__17830__auto___24107]));

var G__24108 = (i__17830__auto___24107 + (1));
i__17830__auto___24107 = G__24108;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return sablono.core.link_to24103.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

sablono.core.link_to24103.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24103.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24103.cljs$lang$applyTo = (function (seq24104){
var G__24105 = cljs.core.first.call(null,seq24104);
var seq24104__$1 = cljs.core.next.call(null,seq24104);
return sablono.core.link_to24103.cljs$core$IFn$_invoke$arity$variadic(G__24105,seq24104__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24103);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24109 = (function sablono$core$mail_to24109(var_args){
var args__17836__auto__ = [];
var len__17829__auto___24114 = arguments.length;
var i__17830__auto___24115 = (0);
while(true){
if((i__17830__auto___24115 < len__17829__auto___24114)){
args__17836__auto__.push((arguments[i__17830__auto___24115]));

var G__24116 = (i__17830__auto___24115 + (1));
i__17830__auto___24115 = G__24116;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return sablono.core.mail_to24109.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

sablono.core.mail_to24109.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24112){
var vec__24113 = p__24112;
var content = cljs.core.nth.call(null,vec__24113,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16771__auto__ = content;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24109.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24109.cljs$lang$applyTo = (function (seq24110){
var G__24111 = cljs.core.first.call(null,seq24110);
var seq24110__$1 = cljs.core.next.call(null,seq24110);
return sablono.core.mail_to24109.cljs$core$IFn$_invoke$arity$variadic(G__24111,seq24110__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24109);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24117 = (function sablono$core$unordered_list24117(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17543__auto__ = (function sablono$core$unordered_list24117_$_iter__24122(s__24123){
return (new cljs.core.LazySeq(null,(function (){
var s__24123__$1 = s__24123;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24123__$1);
if(temp__4425__auto__){
var s__24123__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24123__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__24123__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__24125 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__24124 = (0);
while(true){
if((i__24124 < size__17542__auto__)){
var x = cljs.core._nth.call(null,c__17541__auto__,i__24124);
cljs.core.chunk_append.call(null,b__24125,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24126 = (i__24124 + (1));
i__24124 = G__24126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24125),sablono$core$unordered_list24117_$_iter__24122.call(null,cljs.core.chunk_rest.call(null,s__24123__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24125),null);
}
} else {
var x = cljs.core.first.call(null,s__24123__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24117_$_iter__24122.call(null,cljs.core.rest.call(null,s__24123__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24117);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24127 = (function sablono$core$ordered_list24127(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17543__auto__ = (function sablono$core$ordered_list24127_$_iter__24132(s__24133){
return (new cljs.core.LazySeq(null,(function (){
var s__24133__$1 = s__24133;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24133__$1);
if(temp__4425__auto__){
var s__24133__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24133__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__24133__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__24135 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__24134 = (0);
while(true){
if((i__24134 < size__17542__auto__)){
var x = cljs.core._nth.call(null,c__17541__auto__,i__24134);
cljs.core.chunk_append.call(null,b__24135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24136 = (i__24134 + (1));
i__24134 = G__24136;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24135),sablono$core$ordered_list24127_$_iter__24132.call(null,cljs.core.chunk_rest.call(null,s__24133__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24135),null);
}
} else {
var x = cljs.core.first.call(null,s__24133__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24127_$_iter__24132.call(null,cljs.core.rest.call(null,s__24133__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24127);
/**
 * Create an image element.
 */
sablono.core.image24137 = (function sablono$core$image24137(var_args){
var args24138 = [];
var len__17829__auto___24141 = arguments.length;
var i__17830__auto___24142 = (0);
while(true){
if((i__17830__auto___24142 < len__17829__auto___24141)){
args24138.push((arguments[i__17830__auto___24142]));

var G__24143 = (i__17830__auto___24142 + (1));
i__17830__auto___24142 = G__24143;
continue;
} else {
}
break;
}

var G__24140 = args24138.length;
switch (G__24140) {
case 1:
return sablono.core.image24137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24138.length)].join('')));

}
});

sablono.core.image24137.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24137.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24137.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24137);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24145_SHARP_,p2__24146_SHARP_){
return [cljs.core.str(p1__24145_SHARP_),cljs.core.str("["),cljs.core.str(p2__24146_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24147_SHARP_,p2__24148_SHARP_){
return [cljs.core.str(p1__24147_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24148_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field24149 = (function sablono$core$color_field24149(var_args){
var args24150 = [];
var len__17829__auto___24217 = arguments.length;
var i__17830__auto___24218 = (0);
while(true){
if((i__17830__auto___24218 < len__17829__auto___24217)){
args24150.push((arguments[i__17830__auto___24218]));

var G__24219 = (i__17830__auto___24218 + (1));
i__17830__auto___24218 = G__24219;
continue;
} else {
}
break;
}

var G__24152 = args24150.length;
switch (G__24152) {
case 1:
return sablono.core.color_field24149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24150.length)].join('')));

}
});

sablono.core.color_field24149.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.color_field24149.call(null,name__24070__auto__,null);
});

sablono.core.color_field24149.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.color_field24149.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24149);

/**
 * Creates a date input field.
 */
sablono.core.date_field24153 = (function sablono$core$date_field24153(var_args){
var args24154 = [];
var len__17829__auto___24221 = arguments.length;
var i__17830__auto___24222 = (0);
while(true){
if((i__17830__auto___24222 < len__17829__auto___24221)){
args24154.push((arguments[i__17830__auto___24222]));

var G__24223 = (i__17830__auto___24222 + (1));
i__17830__auto___24222 = G__24223;
continue;
} else {
}
break;
}

var G__24156 = args24154.length;
switch (G__24156) {
case 1:
return sablono.core.date_field24153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24154.length)].join('')));

}
});

sablono.core.date_field24153.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.date_field24153.call(null,name__24070__auto__,null);
});

sablono.core.date_field24153.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.date_field24153.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24153);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24157 = (function sablono$core$datetime_field24157(var_args){
var args24158 = [];
var len__17829__auto___24225 = arguments.length;
var i__17830__auto___24226 = (0);
while(true){
if((i__17830__auto___24226 < len__17829__auto___24225)){
args24158.push((arguments[i__17830__auto___24226]));

var G__24227 = (i__17830__auto___24226 + (1));
i__17830__auto___24226 = G__24227;
continue;
} else {
}
break;
}

var G__24160 = args24158.length;
switch (G__24160) {
case 1:
return sablono.core.datetime_field24157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24158.length)].join('')));

}
});

sablono.core.datetime_field24157.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.datetime_field24157.call(null,name__24070__auto__,null);
});

sablono.core.datetime_field24157.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.datetime_field24157.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24157);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24161 = (function sablono$core$datetime_local_field24161(var_args){
var args24162 = [];
var len__17829__auto___24229 = arguments.length;
var i__17830__auto___24230 = (0);
while(true){
if((i__17830__auto___24230 < len__17829__auto___24229)){
args24162.push((arguments[i__17830__auto___24230]));

var G__24231 = (i__17830__auto___24230 + (1));
i__17830__auto___24230 = G__24231;
continue;
} else {
}
break;
}

var G__24164 = args24162.length;
switch (G__24164) {
case 1:
return sablono.core.datetime_local_field24161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24162.length)].join('')));

}
});

sablono.core.datetime_local_field24161.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.datetime_local_field24161.call(null,name__24070__auto__,null);
});

sablono.core.datetime_local_field24161.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.datetime_local_field24161.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24161);

/**
 * Creates a email input field.
 */
sablono.core.email_field24165 = (function sablono$core$email_field24165(var_args){
var args24166 = [];
var len__17829__auto___24233 = arguments.length;
var i__17830__auto___24234 = (0);
while(true){
if((i__17830__auto___24234 < len__17829__auto___24233)){
args24166.push((arguments[i__17830__auto___24234]));

var G__24235 = (i__17830__auto___24234 + (1));
i__17830__auto___24234 = G__24235;
continue;
} else {
}
break;
}

var G__24168 = args24166.length;
switch (G__24168) {
case 1:
return sablono.core.email_field24165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24166.length)].join('')));

}
});

sablono.core.email_field24165.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.email_field24165.call(null,name__24070__auto__,null);
});

sablono.core.email_field24165.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.email_field24165.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24165);

/**
 * Creates a file input field.
 */
sablono.core.file_field24169 = (function sablono$core$file_field24169(var_args){
var args24170 = [];
var len__17829__auto___24237 = arguments.length;
var i__17830__auto___24238 = (0);
while(true){
if((i__17830__auto___24238 < len__17829__auto___24237)){
args24170.push((arguments[i__17830__auto___24238]));

var G__24239 = (i__17830__auto___24238 + (1));
i__17830__auto___24238 = G__24239;
continue;
} else {
}
break;
}

var G__24172 = args24170.length;
switch (G__24172) {
case 1:
return sablono.core.file_field24169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24170.length)].join('')));

}
});

sablono.core.file_field24169.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.file_field24169.call(null,name__24070__auto__,null);
});

sablono.core.file_field24169.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.file_field24169.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24169);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24173 = (function sablono$core$hidden_field24173(var_args){
var args24174 = [];
var len__17829__auto___24241 = arguments.length;
var i__17830__auto___24242 = (0);
while(true){
if((i__17830__auto___24242 < len__17829__auto___24241)){
args24174.push((arguments[i__17830__auto___24242]));

var G__24243 = (i__17830__auto___24242 + (1));
i__17830__auto___24242 = G__24243;
continue;
} else {
}
break;
}

var G__24176 = args24174.length;
switch (G__24176) {
case 1:
return sablono.core.hidden_field24173.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24173.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24174.length)].join('')));

}
});

sablono.core.hidden_field24173.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.hidden_field24173.call(null,name__24070__auto__,null);
});

sablono.core.hidden_field24173.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.hidden_field24173.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24173);

/**
 * Creates a month input field.
 */
sablono.core.month_field24177 = (function sablono$core$month_field24177(var_args){
var args24178 = [];
var len__17829__auto___24245 = arguments.length;
var i__17830__auto___24246 = (0);
while(true){
if((i__17830__auto___24246 < len__17829__auto___24245)){
args24178.push((arguments[i__17830__auto___24246]));

var G__24247 = (i__17830__auto___24246 + (1));
i__17830__auto___24246 = G__24247;
continue;
} else {
}
break;
}

var G__24180 = args24178.length;
switch (G__24180) {
case 1:
return sablono.core.month_field24177.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24177.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24178.length)].join('')));

}
});

sablono.core.month_field24177.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.month_field24177.call(null,name__24070__auto__,null);
});

sablono.core.month_field24177.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.month_field24177.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24177);

/**
 * Creates a number input field.
 */
sablono.core.number_field24181 = (function sablono$core$number_field24181(var_args){
var args24182 = [];
var len__17829__auto___24249 = arguments.length;
var i__17830__auto___24250 = (0);
while(true){
if((i__17830__auto___24250 < len__17829__auto___24249)){
args24182.push((arguments[i__17830__auto___24250]));

var G__24251 = (i__17830__auto___24250 + (1));
i__17830__auto___24250 = G__24251;
continue;
} else {
}
break;
}

var G__24184 = args24182.length;
switch (G__24184) {
case 1:
return sablono.core.number_field24181.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24181.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24182.length)].join('')));

}
});

sablono.core.number_field24181.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.number_field24181.call(null,name__24070__auto__,null);
});

sablono.core.number_field24181.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.number_field24181.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24181);

/**
 * Creates a password input field.
 */
sablono.core.password_field24185 = (function sablono$core$password_field24185(var_args){
var args24186 = [];
var len__17829__auto___24253 = arguments.length;
var i__17830__auto___24254 = (0);
while(true){
if((i__17830__auto___24254 < len__17829__auto___24253)){
args24186.push((arguments[i__17830__auto___24254]));

var G__24255 = (i__17830__auto___24254 + (1));
i__17830__auto___24254 = G__24255;
continue;
} else {
}
break;
}

var G__24188 = args24186.length;
switch (G__24188) {
case 1:
return sablono.core.password_field24185.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24185.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24186.length)].join('')));

}
});

sablono.core.password_field24185.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.password_field24185.call(null,name__24070__auto__,null);
});

sablono.core.password_field24185.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.password_field24185.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24185);

/**
 * Creates a range input field.
 */
sablono.core.range_field24189 = (function sablono$core$range_field24189(var_args){
var args24190 = [];
var len__17829__auto___24257 = arguments.length;
var i__17830__auto___24258 = (0);
while(true){
if((i__17830__auto___24258 < len__17829__auto___24257)){
args24190.push((arguments[i__17830__auto___24258]));

var G__24259 = (i__17830__auto___24258 + (1));
i__17830__auto___24258 = G__24259;
continue;
} else {
}
break;
}

var G__24192 = args24190.length;
switch (G__24192) {
case 1:
return sablono.core.range_field24189.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24189.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24190.length)].join('')));

}
});

sablono.core.range_field24189.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.range_field24189.call(null,name__24070__auto__,null);
});

sablono.core.range_field24189.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.range_field24189.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24189);

/**
 * Creates a search input field.
 */
sablono.core.search_field24193 = (function sablono$core$search_field24193(var_args){
var args24194 = [];
var len__17829__auto___24261 = arguments.length;
var i__17830__auto___24262 = (0);
while(true){
if((i__17830__auto___24262 < len__17829__auto___24261)){
args24194.push((arguments[i__17830__auto___24262]));

var G__24263 = (i__17830__auto___24262 + (1));
i__17830__auto___24262 = G__24263;
continue;
} else {
}
break;
}

var G__24196 = args24194.length;
switch (G__24196) {
case 1:
return sablono.core.search_field24193.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24193.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24194.length)].join('')));

}
});

sablono.core.search_field24193.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.search_field24193.call(null,name__24070__auto__,null);
});

sablono.core.search_field24193.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.search_field24193.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24193);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24197 = (function sablono$core$tel_field24197(var_args){
var args24198 = [];
var len__17829__auto___24265 = arguments.length;
var i__17830__auto___24266 = (0);
while(true){
if((i__17830__auto___24266 < len__17829__auto___24265)){
args24198.push((arguments[i__17830__auto___24266]));

var G__24267 = (i__17830__auto___24266 + (1));
i__17830__auto___24266 = G__24267;
continue;
} else {
}
break;
}

var G__24200 = args24198.length;
switch (G__24200) {
case 1:
return sablono.core.tel_field24197.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24197.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24198.length)].join('')));

}
});

sablono.core.tel_field24197.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.tel_field24197.call(null,name__24070__auto__,null);
});

sablono.core.tel_field24197.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.tel_field24197.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24197);

/**
 * Creates a text input field.
 */
sablono.core.text_field24201 = (function sablono$core$text_field24201(var_args){
var args24202 = [];
var len__17829__auto___24269 = arguments.length;
var i__17830__auto___24270 = (0);
while(true){
if((i__17830__auto___24270 < len__17829__auto___24269)){
args24202.push((arguments[i__17830__auto___24270]));

var G__24271 = (i__17830__auto___24270 + (1));
i__17830__auto___24270 = G__24271;
continue;
} else {
}
break;
}

var G__24204 = args24202.length;
switch (G__24204) {
case 1:
return sablono.core.text_field24201.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24201.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24202.length)].join('')));

}
});

sablono.core.text_field24201.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.text_field24201.call(null,name__24070__auto__,null);
});

sablono.core.text_field24201.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.text_field24201.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24201);

/**
 * Creates a time input field.
 */
sablono.core.time_field24205 = (function sablono$core$time_field24205(var_args){
var args24206 = [];
var len__17829__auto___24273 = arguments.length;
var i__17830__auto___24274 = (0);
while(true){
if((i__17830__auto___24274 < len__17829__auto___24273)){
args24206.push((arguments[i__17830__auto___24274]));

var G__24275 = (i__17830__auto___24274 + (1));
i__17830__auto___24274 = G__24275;
continue;
} else {
}
break;
}

var G__24208 = args24206.length;
switch (G__24208) {
case 1:
return sablono.core.time_field24205.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24205.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24206.length)].join('')));

}
});

sablono.core.time_field24205.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.time_field24205.call(null,name__24070__auto__,null);
});

sablono.core.time_field24205.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.time_field24205.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24205);

/**
 * Creates a url input field.
 */
sablono.core.url_field24209 = (function sablono$core$url_field24209(var_args){
var args24210 = [];
var len__17829__auto___24277 = arguments.length;
var i__17830__auto___24278 = (0);
while(true){
if((i__17830__auto___24278 < len__17829__auto___24277)){
args24210.push((arguments[i__17830__auto___24278]));

var G__24279 = (i__17830__auto___24278 + (1));
i__17830__auto___24278 = G__24279;
continue;
} else {
}
break;
}

var G__24212 = args24210.length;
switch (G__24212) {
case 1:
return sablono.core.url_field24209.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24209.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24210.length)].join('')));

}
});

sablono.core.url_field24209.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.url_field24209.call(null,name__24070__auto__,null);
});

sablono.core.url_field24209.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.url_field24209.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24209);

/**
 * Creates a week input field.
 */
sablono.core.week_field24213 = (function sablono$core$week_field24213(var_args){
var args24214 = [];
var len__17829__auto___24281 = arguments.length;
var i__17830__auto___24282 = (0);
while(true){
if((i__17830__auto___24282 < len__17829__auto___24281)){
args24214.push((arguments[i__17830__auto___24282]));

var G__24283 = (i__17830__auto___24282 + (1));
i__17830__auto___24282 = G__24283;
continue;
} else {
}
break;
}

var G__24216 = args24214.length;
switch (G__24216) {
case 1:
return sablono.core.week_field24213.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24213.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24214.length)].join('')));

}
});

sablono.core.week_field24213.cljs$core$IFn$_invoke$arity$1 = (function (name__24070__auto__){
return sablono.core.week_field24213.call(null,name__24070__auto__,null);
});

sablono.core.week_field24213.cljs$core$IFn$_invoke$arity$2 = (function (name__24070__auto__,value__24071__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__24070__auto__,value__24071__auto__);
});

sablono.core.week_field24213.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24213);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24285 = (function sablono$core$check_box24285(var_args){
var args24286 = [];
var len__17829__auto___24289 = arguments.length;
var i__17830__auto___24290 = (0);
while(true){
if((i__17830__auto___24290 < len__17829__auto___24289)){
args24286.push((arguments[i__17830__auto___24290]));

var G__24291 = (i__17830__auto___24290 + (1));
i__17830__auto___24290 = G__24291;
continue;
} else {
}
break;
}

var G__24288 = args24286.length;
switch (G__24288) {
case 1:
return sablono.core.check_box24285.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24285.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24285.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24286.length)].join('')));

}
});

sablono.core.check_box24285.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24285.call(null,name,null);
});

sablono.core.check_box24285.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24285.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24285.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24285.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24285);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24293 = (function sablono$core$radio_button24293(var_args){
var args24294 = [];
var len__17829__auto___24297 = arguments.length;
var i__17830__auto___24298 = (0);
while(true){
if((i__17830__auto___24298 < len__17829__auto___24297)){
args24294.push((arguments[i__17830__auto___24298]));

var G__24299 = (i__17830__auto___24298 + (1));
i__17830__auto___24298 = G__24299;
continue;
} else {
}
break;
}

var G__24296 = args24294.length;
switch (G__24296) {
case 1:
return sablono.core.radio_button24293.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24293.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24293.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24294.length)].join('')));

}
});

sablono.core.radio_button24293.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24293.call(null,group,null);
});

sablono.core.radio_button24293.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24293.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24293.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24293.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24293);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24301 = (function sablono$core$select_options24301(coll){
var iter__17543__auto__ = (function sablono$core$select_options24301_$_iter__24310(s__24311){
return (new cljs.core.LazySeq(null,(function (){
var s__24311__$1 = s__24311;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24311__$1);
if(temp__4425__auto__){
var s__24311__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24311__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__24311__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__24313 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__24312 = (0);
while(true){
if((i__24312 < size__17542__auto__)){
var x = cljs.core._nth.call(null,c__17541__auto__,i__24312);
cljs.core.chunk_append.call(null,b__24313,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24316 = x;
var text = cljs.core.nth.call(null,vec__24316,(0),null);
var val = cljs.core.nth.call(null,vec__24316,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24316,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24301.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24318 = (i__24312 + (1));
i__24312 = G__24318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24313),sablono$core$select_options24301_$_iter__24310.call(null,cljs.core.chunk_rest.call(null,s__24311__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24313),null);
}
} else {
var x = cljs.core.first.call(null,s__24311__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24317 = x;
var text = cljs.core.nth.call(null,vec__24317,(0),null);
var val = cljs.core.nth.call(null,vec__24317,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24317,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24301.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24301_$_iter__24310.call(null,cljs.core.rest.call(null,s__24311__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24301);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24319 = (function sablono$core$drop_down24319(var_args){
var args24320 = [];
var len__17829__auto___24323 = arguments.length;
var i__17830__auto___24324 = (0);
while(true){
if((i__17830__auto___24324 < len__17829__auto___24323)){
args24320.push((arguments[i__17830__auto___24324]));

var G__24325 = (i__17830__auto___24324 + (1));
i__17830__auto___24324 = G__24325;
continue;
} else {
}
break;
}

var G__24322 = args24320.length;
switch (G__24322) {
case 2:
return sablono.core.drop_down24319.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24319.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24320.length)].join('')));

}
});

sablono.core.drop_down24319.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24319.call(null,name,options,null);
});

sablono.core.drop_down24319.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24319.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24319);
/**
 * Creates a text area element.
 */
sablono.core.text_area24327 = (function sablono$core$text_area24327(var_args){
var args24328 = [];
var len__17829__auto___24331 = arguments.length;
var i__17830__auto___24332 = (0);
while(true){
if((i__17830__auto___24332 < len__17829__auto___24331)){
args24328.push((arguments[i__17830__auto___24332]));

var G__24333 = (i__17830__auto___24332 + (1));
i__17830__auto___24332 = G__24333;
continue;
} else {
}
break;
}

var G__24330 = args24328.length;
switch (G__24330) {
case 1:
return sablono.core.text_area24327.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24327.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24328.length)].join('')));

}
});

sablono.core.text_area24327.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24327.call(null,name,null);
});

sablono.core.text_area24327.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area24327.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24327);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24335 = (function sablono$core$label24335(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24335);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24336 = (function sablono$core$submit_button24336(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24336);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24337 = (function sablono$core$reset_button24337(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24337);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24338 = (function sablono$core$form_to24338(var_args){
var args__17836__auto__ = [];
var len__17829__auto___24343 = arguments.length;
var i__17830__auto___24344 = (0);
while(true){
if((i__17830__auto___24344 < len__17829__auto___24343)){
args__17836__auto__.push((arguments[i__17830__auto___24344]));

var G__24345 = (i__17830__auto___24344 + (1));
i__17830__auto___24344 = G__24345;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return sablono.core.form_to24338.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

sablono.core.form_to24338.cljs$core$IFn$_invoke$arity$variadic = (function (p__24341,body){
var vec__24342 = p__24341;
var method = cljs.core.nth.call(null,vec__24342,(0),null);
var action = cljs.core.nth.call(null,vec__24342,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24338.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24338.cljs$lang$applyTo = (function (seq24339){
var G__24340 = cljs.core.first.call(null,seq24339);
var seq24339__$1 = cljs.core.next.call(null,seq24339);
return sablono.core.form_to24338.cljs$core$IFn$_invoke$arity$variadic(G__24340,seq24339__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24338);

//# sourceMappingURL=core.js.map