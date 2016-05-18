// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19791__auto__ = [];
var len__19784__auto___41526 = arguments.length;
var i__19785__auto___41527 = (0);
while(true){
if((i__19785__auto___41527 < len__19784__auto___41526)){
args__19791__auto__.push((arguments[i__19785__auto___41527]));

var G__41536 = (i__19785__auto___41527 + (1));
i__19785__auto___41527 = G__41536;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((2) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19792__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41509_41544 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41510_41545 = null;
var count__41511_41546 = (0);
var i__41512_41547 = (0);
while(true){
if((i__41512_41547 < count__41511_41546)){
var k_41551 = cljs.core._nth.call(null,chunk__41510_41545,i__41512_41547);
e.setAttribute(cljs.core.name.call(null,k_41551),cljs.core.get.call(null,attrs,k_41551));

var G__41559 = seq__41509_41544;
var G__41560 = chunk__41510_41545;
var G__41561 = count__41511_41546;
var G__41562 = (i__41512_41547 + (1));
seq__41509_41544 = G__41559;
chunk__41510_41545 = G__41560;
count__41511_41546 = G__41561;
i__41512_41547 = G__41562;
continue;
} else {
var temp__4657__auto___41565 = cljs.core.seq.call(null,seq__41509_41544);
if(temp__4657__auto___41565){
var seq__41509_41566__$1 = temp__4657__auto___41565;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41509_41566__$1)){
var c__19529__auto___41569 = cljs.core.chunk_first.call(null,seq__41509_41566__$1);
var G__41570 = cljs.core.chunk_rest.call(null,seq__41509_41566__$1);
var G__41571 = c__19529__auto___41569;
var G__41572 = cljs.core.count.call(null,c__19529__auto___41569);
var G__41573 = (0);
seq__41509_41544 = G__41570;
chunk__41510_41545 = G__41571;
count__41511_41546 = G__41572;
i__41512_41547 = G__41573;
continue;
} else {
var k_41576 = cljs.core.first.call(null,seq__41509_41566__$1);
e.setAttribute(cljs.core.name.call(null,k_41576),cljs.core.get.call(null,attrs,k_41576));

var G__41579 = cljs.core.next.call(null,seq__41509_41566__$1);
var G__41580 = null;
var G__41581 = (0);
var G__41582 = (0);
seq__41509_41544 = G__41579;
chunk__41510_41545 = G__41580;
count__41511_41546 = G__41581;
i__41512_41547 = G__41582;
continue;
}
} else {
}
}
break;
}

var seq__41513_41595 = cljs.core.seq.call(null,children);
var chunk__41514_41596 = null;
var count__41515_41597 = (0);
var i__41516_41598 = (0);
while(true){
if((i__41516_41598 < count__41515_41597)){
var ch_41601 = cljs.core._nth.call(null,chunk__41514_41596,i__41516_41598);
e.appendChild(ch_41601);

var G__41602 = seq__41513_41595;
var G__41603 = chunk__41514_41596;
var G__41604 = count__41515_41597;
var G__41605 = (i__41516_41598 + (1));
seq__41513_41595 = G__41602;
chunk__41514_41596 = G__41603;
count__41515_41597 = G__41604;
i__41516_41598 = G__41605;
continue;
} else {
var temp__4657__auto___41606 = cljs.core.seq.call(null,seq__41513_41595);
if(temp__4657__auto___41606){
var seq__41513_41607__$1 = temp__4657__auto___41606;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41513_41607__$1)){
var c__19529__auto___41608 = cljs.core.chunk_first.call(null,seq__41513_41607__$1);
var G__41609 = cljs.core.chunk_rest.call(null,seq__41513_41607__$1);
var G__41610 = c__19529__auto___41608;
var G__41611 = cljs.core.count.call(null,c__19529__auto___41608);
var G__41612 = (0);
seq__41513_41595 = G__41609;
chunk__41514_41596 = G__41610;
count__41515_41597 = G__41611;
i__41516_41598 = G__41612;
continue;
} else {
var ch_41615 = cljs.core.first.call(null,seq__41513_41607__$1);
e.appendChild(ch_41615);

var G__41616 = cljs.core.next.call(null,seq__41513_41607__$1);
var G__41617 = null;
var G__41618 = (0);
var G__41619 = (0);
seq__41513_41595 = G__41616;
chunk__41514_41596 = G__41617;
count__41515_41597 = G__41618;
i__41516_41598 = G__41619;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41501){
var G__41502 = cljs.core.first.call(null,seq41501);
var seq41501__$1 = cljs.core.next.call(null,seq41501);
var G__41503 = cljs.core.first.call(null,seq41501__$1);
var seq41501__$2 = cljs.core.next.call(null,seq41501__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41502,G__41503,seq41501__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19639__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19640__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19641__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19643__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19639__auto__,prefer_table__19640__auto__,method_cache__19641__auto__,cached_hierarchy__19642__auto__,hierarchy__19643__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19639__auto__,prefer_table__19640__auto__,method_cache__19641__auto__,cached_hierarchy__19642__auto__,hierarchy__19643__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19643__auto__,method_table__19639__auto__,prefer_table__19640__auto__,method_cache__19641__auto__,cached_hierarchy__19642__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_41631 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_41631.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_41631.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_41631.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_41631);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__41636,st_map){
var map__41641 = p__41636;
var map__41641__$1 = ((((!((map__41641 == null)))?((((map__41641.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41641.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41641):map__41641);
var container_el = cljs.core.get.call(null,map__41641__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__41641,map__41641__$1,container_el){
return (function (p__41648){
var vec__41649 = p__41648;
var k = cljs.core.nth.call(null,vec__41649,(0),null);
var v = cljs.core.nth.call(null,vec__41649,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__41641,map__41641__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__41661,dom_str){
var map__41668 = p__41661;
var map__41668__$1 = ((((!((map__41668 == null)))?((((map__41668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41668):map__41668);
var c = map__41668__$1;
var content_area_el = cljs.core.get.call(null,map__41668__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__41677){
var map__41698 = p__41677;
var map__41698__$1 = ((((!((map__41698 == null)))?((((map__41698.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41698.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41698):map__41698);
var content_area_el = cljs.core.get.call(null,map__41698__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_41789){
var state_val_41790 = (state_41789[(1)]);
if((state_val_41790 === (1))){
var inst_41774 = (state_41789[(7)]);
var inst_41774__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41775 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41776 = ["10px","10px","100%","68px","1.0"];
var inst_41777 = cljs.core.PersistentHashMap.fromArrays(inst_41775,inst_41776);
var inst_41778 = cljs.core.merge.call(null,inst_41777,style);
var inst_41779 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41774__$1,inst_41778);
var inst_41780 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41774__$1,msg);
var inst_41781 = cljs.core.async.timeout.call(null,(300));
var state_41789__$1 = (function (){var statearr_41791 = state_41789;
(statearr_41791[(7)] = inst_41774__$1);

(statearr_41791[(8)] = inst_41780);

(statearr_41791[(9)] = inst_41779);

return statearr_41791;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41789__$1,(2),inst_41781);
} else {
if((state_val_41790 === (2))){
var inst_41774 = (state_41789[(7)]);
var inst_41783 = (state_41789[(2)]);
var inst_41784 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_41785 = ["auto"];
var inst_41786 = cljs.core.PersistentHashMap.fromArrays(inst_41784,inst_41785);
var inst_41787 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41774,inst_41786);
var state_41789__$1 = (function (){var statearr_41792 = state_41789;
(statearr_41792[(10)] = inst_41783);

return statearr_41792;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41789__$1,inst_41787);
} else {
return null;
}
}
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto____0 = (function (){
var statearr_41799 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41799[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto__);

(statearr_41799[(1)] = (1));

return statearr_41799;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto____1 = (function (state_41789){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_41789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e41800){if((e41800 instanceof Object)){
var ex__35792__auto__ = e41800;
var statearr_41801_41811 = state_41789;
(statearr_41801_41811[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41816 = state_41789;
state_41789 = G__41816;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto__ = function(state_41789){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto____1.call(this,state_41789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_41802 = f__37162__auto__.call(null);
(statearr_41802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_41802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__41830 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__41830,(0),null);
var ln = cljs.core.nth.call(null,vec__41830,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__41844 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__41844,(0),null);
var file_line = cljs.core.nth.call(null,vec__41844,(1),null);
var file_column = cljs.core.nth.call(null,vec__41844,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__41844,file_name,file_line,file_column){
return (function (p1__41836_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__41836_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__41844,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18726__auto__ = file_line;
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
var and__18714__auto__ = cause;
if(cljs.core.truth_(and__18714__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18714__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__41886 = figwheel.client.heads_up.ensure_container.call(null);
var map__41886__$1 = ((((!((map__41886 == null)))?((((map__41886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41886):map__41886);
var content_area_el = cljs.core.get.call(null,map__41886__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_41969){
var state_val_41970 = (state_41969[(1)]);
if((state_val_41970 === (1))){
var inst_41946 = (state_41969[(7)]);
var inst_41946__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41947 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41948 = ["0.0"];
var inst_41949 = cljs.core.PersistentHashMap.fromArrays(inst_41947,inst_41948);
var inst_41950 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41946__$1,inst_41949);
var inst_41952 = cljs.core.async.timeout.call(null,(300));
var state_41969__$1 = (function (){var statearr_41976 = state_41969;
(statearr_41976[(8)] = inst_41950);

(statearr_41976[(7)] = inst_41946__$1);

return statearr_41976;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41969__$1,(2),inst_41952);
} else {
if((state_val_41970 === (2))){
var inst_41946 = (state_41969[(7)]);
var inst_41954 = (state_41969[(2)]);
var inst_41955 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_41956 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_41957 = cljs.core.PersistentHashMap.fromArrays(inst_41955,inst_41956);
var inst_41958 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41946,inst_41957);
var inst_41959 = cljs.core.async.timeout.call(null,(200));
var state_41969__$1 = (function (){var statearr_41977 = state_41969;
(statearr_41977[(9)] = inst_41958);

(statearr_41977[(10)] = inst_41954);

return statearr_41977;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41969__$1,(3),inst_41959);
} else {
if((state_val_41970 === (3))){
var inst_41946 = (state_41969[(7)]);
var inst_41961 = (state_41969[(2)]);
var inst_41962 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41946,"");
var state_41969__$1 = (function (){var statearr_41978 = state_41969;
(statearr_41978[(11)] = inst_41961);

return statearr_41978;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41969__$1,inst_41962);
} else {
return null;
}
}
}
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__35789__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__35789__auto____0 = (function (){
var statearr_41982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41982[(0)] = figwheel$client$heads_up$clear_$_state_machine__35789__auto__);

(statearr_41982[(1)] = (1));

return statearr_41982;
});
var figwheel$client$heads_up$clear_$_state_machine__35789__auto____1 = (function (state_41969){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_41969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e41983){if((e41983 instanceof Object)){
var ex__35792__auto__ = e41983;
var statearr_41984_41995 = state_41969;
(statearr_41984_41995[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41983;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41996 = state_41969;
state_41969 = G__41996;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__35789__auto__ = function(state_41969){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__35789__auto____1.call(this,state_41969);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__35789__auto____0;
figwheel$client$heads_up$clear_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__35789__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_41985 = f__37162__auto__.call(null);
(statearr_41985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_41985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_42028){
var state_val_42029 = (state_42028[(1)]);
if((state_val_42029 === (1))){
var inst_42018 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_42028__$1 = state_42028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42028__$1,(2),inst_42018);
} else {
if((state_val_42029 === (2))){
var inst_42020 = (state_42028[(2)]);
var inst_42021 = cljs.core.async.timeout.call(null,(400));
var state_42028__$1 = (function (){var statearr_42034 = state_42028;
(statearr_42034[(7)] = inst_42020);

return statearr_42034;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42028__$1,(3),inst_42021);
} else {
if((state_val_42029 === (3))){
var inst_42023 = (state_42028[(2)]);
var inst_42024 = figwheel.client.heads_up.clear.call(null);
var state_42028__$1 = (function (){var statearr_42036 = state_42028;
(statearr_42036[(8)] = inst_42023);

return statearr_42036;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42028__$1,(4),inst_42024);
} else {
if((state_val_42029 === (4))){
var inst_42026 = (state_42028[(2)]);
var state_42028__$1 = state_42028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42028__$1,inst_42026);
} else {
return null;
}
}
}
}
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto____0 = (function (){
var statearr_42040 = [null,null,null,null,null,null,null,null,null];
(statearr_42040[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto__);

(statearr_42040[(1)] = (1));

return statearr_42040;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto____1 = (function (state_42028){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_42028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e42041){if((e42041 instanceof Object)){
var ex__35792__auto__ = e42041;
var statearr_42042_42044 = state_42028;
(statearr_42042_42044[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42045 = state_42028;
state_42028 = G__42045;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto__ = function(state_42028){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto____1.call(this,state_42028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_42043 = f__37162__auto__.call(null);
(statearr_42043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_42043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map