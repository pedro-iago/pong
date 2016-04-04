// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__27604 = cljs.core._EQ_;
var expr__27605 = (function (){var or__18089__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27604.call(null,"true",expr__27605))){
return true;
} else {
if(cljs.core.truth_(pred__27604.call(null,"false",expr__27605))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27605)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19154__auto__ = [];
var len__19147__auto___27608 = arguments.length;
var i__19148__auto___27609 = (0);
while(true){
if((i__19148__auto___27609 < len__19147__auto___27608)){
args__19154__auto__.push((arguments[i__19148__auto___27609]));

var G__27610 = (i__19148__auto___27609 + (1));
i__19148__auto___27609 = G__27610;
continue;
} else {
}
break;
}

var argseq__19155__auto__ = ((((0) < args__19154__auto__.length))?(new cljs.core.IndexedSeq(args__19154__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19155__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27607){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27607));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27611){
var map__27614 = p__27611;
var map__27614__$1 = ((((!((map__27614 == null)))?((((map__27614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27614):map__27614);
var message = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18089__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18089__auto__)){
return or__18089__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18077__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18077__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18077__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21983__auto___27776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___27776,ch){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___27776,ch){
return (function (state_27745){
var state_val_27746 = (state_27745[(1)]);
if((state_val_27746 === (7))){
var inst_27741 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27747_27777 = state_27745__$1;
(statearr_27747_27777[(2)] = inst_27741);

(statearr_27747_27777[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (1))){
var state_27745__$1 = state_27745;
var statearr_27748_27778 = state_27745__$1;
(statearr_27748_27778[(2)] = null);

(statearr_27748_27778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (4))){
var inst_27698 = (state_27745[(7)]);
var inst_27698__$1 = (state_27745[(2)]);
var state_27745__$1 = (function (){var statearr_27749 = state_27745;
(statearr_27749[(7)] = inst_27698__$1);

return statearr_27749;
})();
if(cljs.core.truth_(inst_27698__$1)){
var statearr_27750_27779 = state_27745__$1;
(statearr_27750_27779[(1)] = (5));

} else {
var statearr_27751_27780 = state_27745__$1;
(statearr_27751_27780[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (15))){
var inst_27705 = (state_27745[(8)]);
var inst_27720 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27705);
var inst_27721 = cljs.core.first.call(null,inst_27720);
var inst_27722 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27721);
var inst_27723 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27722)].join('');
var inst_27724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27723);
var state_27745__$1 = state_27745;
var statearr_27752_27781 = state_27745__$1;
(statearr_27752_27781[(2)] = inst_27724);

(statearr_27752_27781[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (13))){
var inst_27729 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27753_27782 = state_27745__$1;
(statearr_27753_27782[(2)] = inst_27729);

(statearr_27753_27782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (6))){
var state_27745__$1 = state_27745;
var statearr_27754_27783 = state_27745__$1;
(statearr_27754_27783[(2)] = null);

(statearr_27754_27783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (17))){
var inst_27727 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27755_27784 = state_27745__$1;
(statearr_27755_27784[(2)] = inst_27727);

(statearr_27755_27784[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (3))){
var inst_27743 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27745__$1,inst_27743);
} else {
if((state_val_27746 === (12))){
var inst_27704 = (state_27745[(9)]);
var inst_27718 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27704,opts);
var state_27745__$1 = state_27745;
if(cljs.core.truth_(inst_27718)){
var statearr_27756_27785 = state_27745__$1;
(statearr_27756_27785[(1)] = (15));

} else {
var statearr_27757_27786 = state_27745__$1;
(statearr_27757_27786[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (2))){
var state_27745__$1 = state_27745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27745__$1,(4),ch);
} else {
if((state_val_27746 === (11))){
var inst_27705 = (state_27745[(8)]);
var inst_27710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27711 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27705);
var inst_27712 = cljs.core.async.timeout.call(null,(1000));
var inst_27713 = [inst_27711,inst_27712];
var inst_27714 = (new cljs.core.PersistentVector(null,2,(5),inst_27710,inst_27713,null));
var state_27745__$1 = state_27745;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27745__$1,(14),inst_27714);
} else {
if((state_val_27746 === (9))){
var inst_27705 = (state_27745[(8)]);
var inst_27731 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27732 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27705);
var inst_27733 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27732);
var inst_27734 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27733)].join('');
var inst_27735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27734);
var state_27745__$1 = (function (){var statearr_27758 = state_27745;
(statearr_27758[(10)] = inst_27731);

return statearr_27758;
})();
var statearr_27759_27787 = state_27745__$1;
(statearr_27759_27787[(2)] = inst_27735);

(statearr_27759_27787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (5))){
var inst_27698 = (state_27745[(7)]);
var inst_27700 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27701 = (new cljs.core.PersistentArrayMap(null,2,inst_27700,null));
var inst_27702 = (new cljs.core.PersistentHashSet(null,inst_27701,null));
var inst_27703 = figwheel.client.focus_msgs.call(null,inst_27702,inst_27698);
var inst_27704 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27703);
var inst_27705 = cljs.core.first.call(null,inst_27703);
var inst_27706 = figwheel.client.autoload_QMARK_.call(null);
var state_27745__$1 = (function (){var statearr_27760 = state_27745;
(statearr_27760[(9)] = inst_27704);

(statearr_27760[(8)] = inst_27705);

return statearr_27760;
})();
if(cljs.core.truth_(inst_27706)){
var statearr_27761_27788 = state_27745__$1;
(statearr_27761_27788[(1)] = (8));

} else {
var statearr_27762_27789 = state_27745__$1;
(statearr_27762_27789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (14))){
var inst_27716 = (state_27745[(2)]);
var state_27745__$1 = state_27745;
var statearr_27763_27790 = state_27745__$1;
(statearr_27763_27790[(2)] = inst_27716);

(statearr_27763_27790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (16))){
var state_27745__$1 = state_27745;
var statearr_27764_27791 = state_27745__$1;
(statearr_27764_27791[(2)] = null);

(statearr_27764_27791[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (10))){
var inst_27737 = (state_27745[(2)]);
var state_27745__$1 = (function (){var statearr_27765 = state_27745;
(statearr_27765[(11)] = inst_27737);

return statearr_27765;
})();
var statearr_27766_27792 = state_27745__$1;
(statearr_27766_27792[(2)] = null);

(statearr_27766_27792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27746 === (8))){
var inst_27704 = (state_27745[(9)]);
var inst_27708 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27704,opts);
var state_27745__$1 = state_27745;
if(cljs.core.truth_(inst_27708)){
var statearr_27767_27793 = state_27745__$1;
(statearr_27767_27793[(1)] = (11));

} else {
var statearr_27768_27794 = state_27745__$1;
(statearr_27768_27794[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21983__auto___27776,ch))
;
return ((function (switch__21732__auto__,c__21983__auto___27776,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__21733__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__21733__auto____0 = (function (){
var statearr_27772 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27772[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__21733__auto__);

(statearr_27772[(1)] = (1));

return statearr_27772;
});
var figwheel$client$file_reloader_plugin_$_state_machine__21733__auto____1 = (function (state_27745){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_27745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e27773){if((e27773 instanceof Object)){
var ex__21736__auto__ = e27773;
var statearr_27774_27795 = state_27745;
(statearr_27774_27795[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27796 = state_27745;
state_27745 = G__27796;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__21733__auto__ = function(state_27745){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__21733__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__21733__auto____1.call(this,state_27745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__21733__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__21733__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___27776,ch))
})();
var state__21985__auto__ = (function (){var statearr_27775 = f__21984__auto__.call(null);
(statearr_27775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___27776);

return statearr_27775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___27776,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27797_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27797_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_27804 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27804){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27802 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27803 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27803;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27802;
}}catch (e27801){if((e27801 instanceof Error)){
var e = e27801;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27804], null));
} else {
var e = e27801;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27804))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27805){
var map__27812 = p__27805;
var map__27812__$1 = ((((!((map__27812 == null)))?((((map__27812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27812):map__27812);
var opts = map__27812__$1;
var build_id = cljs.core.get.call(null,map__27812__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27812,map__27812__$1,opts,build_id){
return (function (p__27814){
var vec__27815 = p__27814;
var map__27816 = cljs.core.nth.call(null,vec__27815,(0),null);
var map__27816__$1 = ((((!((map__27816 == null)))?((((map__27816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27816):map__27816);
var msg = map__27816__$1;
var msg_name = cljs.core.get.call(null,map__27816__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27815,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27815,map__27816,map__27816__$1,msg,msg_name,_,map__27812,map__27812__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27815,map__27816,map__27816__$1,msg,msg_name,_,map__27812,map__27812__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27812,map__27812__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27822){
var vec__27823 = p__27822;
var map__27824 = cljs.core.nth.call(null,vec__27823,(0),null);
var map__27824__$1 = ((((!((map__27824 == null)))?((((map__27824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27824):map__27824);
var msg = map__27824__$1;
var msg_name = cljs.core.get.call(null,map__27824__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27823,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27826){
var map__27836 = p__27826;
var map__27836__$1 = ((((!((map__27836 == null)))?((((map__27836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27836):map__27836);
var on_compile_warning = cljs.core.get.call(null,map__27836__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27836__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27836,map__27836__$1,on_compile_warning,on_compile_fail){
return (function (p__27838){
var vec__27839 = p__27838;
var map__27840 = cljs.core.nth.call(null,vec__27839,(0),null);
var map__27840__$1 = ((((!((map__27840 == null)))?((((map__27840.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27840.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27840):map__27840);
var msg = map__27840__$1;
var msg_name = cljs.core.get.call(null,map__27840__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27839,(1));
var pred__27842 = cljs.core._EQ_;
var expr__27843 = msg_name;
if(cljs.core.truth_(pred__27842.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27843))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27842.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27843))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27836,map__27836__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__,msg_hist,msg_names,msg){
return (function (state_28059){
var state_val_28060 = (state_28059[(1)]);
if((state_val_28060 === (7))){
var inst_27983 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_27983)){
var statearr_28061_28107 = state_28059__$1;
(statearr_28061_28107[(1)] = (8));

} else {
var statearr_28062_28108 = state_28059__$1;
(statearr_28062_28108[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (20))){
var inst_28053 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28063_28109 = state_28059__$1;
(statearr_28063_28109[(2)] = inst_28053);

(statearr_28063_28109[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (27))){
var inst_28049 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28064_28110 = state_28059__$1;
(statearr_28064_28110[(2)] = inst_28049);

(statearr_28064_28110[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (1))){
var inst_27976 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_27976)){
var statearr_28065_28111 = state_28059__$1;
(statearr_28065_28111[(1)] = (2));

} else {
var statearr_28066_28112 = state_28059__$1;
(statearr_28066_28112[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (24))){
var inst_28051 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28067_28113 = state_28059__$1;
(statearr_28067_28113[(2)] = inst_28051);

(statearr_28067_28113[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (4))){
var inst_28057 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28059__$1,inst_28057);
} else {
if((state_val_28060 === (15))){
var inst_28055 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28068_28114 = state_28059__$1;
(statearr_28068_28114[(2)] = inst_28055);

(statearr_28068_28114[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (21))){
var inst_28014 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28069_28115 = state_28059__$1;
(statearr_28069_28115[(2)] = inst_28014);

(statearr_28069_28115[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (31))){
var inst_28038 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28038)){
var statearr_28070_28116 = state_28059__$1;
(statearr_28070_28116[(1)] = (34));

} else {
var statearr_28071_28117 = state_28059__$1;
(statearr_28071_28117[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (32))){
var inst_28047 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28072_28118 = state_28059__$1;
(statearr_28072_28118[(2)] = inst_28047);

(statearr_28072_28118[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (33))){
var inst_28036 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28073_28119 = state_28059__$1;
(statearr_28073_28119[(2)] = inst_28036);

(statearr_28073_28119[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (13))){
var inst_27997 = figwheel.client.heads_up.clear.call(null);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(16),inst_27997);
} else {
if((state_val_28060 === (22))){
var inst_28018 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28019 = figwheel.client.heads_up.append_message.call(null,inst_28018);
var state_28059__$1 = state_28059;
var statearr_28074_28120 = state_28059__$1;
(statearr_28074_28120[(2)] = inst_28019);

(statearr_28074_28120[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (36))){
var inst_28045 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28075_28121 = state_28059__$1;
(statearr_28075_28121[(2)] = inst_28045);

(statearr_28075_28121[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (29))){
var inst_28029 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28076_28122 = state_28059__$1;
(statearr_28076_28122[(2)] = inst_28029);

(statearr_28076_28122[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (6))){
var inst_27978 = (state_28059[(7)]);
var state_28059__$1 = state_28059;
var statearr_28077_28123 = state_28059__$1;
(statearr_28077_28123[(2)] = inst_27978);

(statearr_28077_28123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (28))){
var inst_28025 = (state_28059[(2)]);
var inst_28026 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28027 = figwheel.client.heads_up.display_warning.call(null,inst_28026);
var state_28059__$1 = (function (){var statearr_28078 = state_28059;
(statearr_28078[(8)] = inst_28025);

return statearr_28078;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(29),inst_28027);
} else {
if((state_val_28060 === (25))){
var inst_28023 = figwheel.client.heads_up.clear.call(null);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(28),inst_28023);
} else {
if((state_val_28060 === (34))){
var inst_28040 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(37),inst_28040);
} else {
if((state_val_28060 === (17))){
var inst_28005 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28079_28124 = state_28059__$1;
(statearr_28079_28124[(2)] = inst_28005);

(statearr_28079_28124[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (3))){
var inst_27995 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_27995)){
var statearr_28080_28125 = state_28059__$1;
(statearr_28080_28125[(1)] = (13));

} else {
var statearr_28081_28126 = state_28059__$1;
(statearr_28081_28126[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (12))){
var inst_27991 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28082_28127 = state_28059__$1;
(statearr_28082_28127[(2)] = inst_27991);

(statearr_28082_28127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (2))){
var inst_27978 = (state_28059[(7)]);
var inst_27978__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_28059__$1 = (function (){var statearr_28083 = state_28059;
(statearr_28083[(7)] = inst_27978__$1);

return statearr_28083;
})();
if(cljs.core.truth_(inst_27978__$1)){
var statearr_28084_28128 = state_28059__$1;
(statearr_28084_28128[(1)] = (5));

} else {
var statearr_28085_28129 = state_28059__$1;
(statearr_28085_28129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (23))){
var inst_28021 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28021)){
var statearr_28086_28130 = state_28059__$1;
(statearr_28086_28130[(1)] = (25));

} else {
var statearr_28087_28131 = state_28059__$1;
(statearr_28087_28131[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (35))){
var state_28059__$1 = state_28059;
var statearr_28088_28132 = state_28059__$1;
(statearr_28088_28132[(2)] = null);

(statearr_28088_28132[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (19))){
var inst_28016 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28016)){
var statearr_28089_28133 = state_28059__$1;
(statearr_28089_28133[(1)] = (22));

} else {
var statearr_28090_28134 = state_28059__$1;
(statearr_28090_28134[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (11))){
var inst_27987 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28091_28135 = state_28059__$1;
(statearr_28091_28135[(2)] = inst_27987);

(statearr_28091_28135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (9))){
var inst_27989 = figwheel.client.heads_up.clear.call(null);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(12),inst_27989);
} else {
if((state_val_28060 === (5))){
var inst_27980 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_28059__$1 = state_28059;
var statearr_28092_28136 = state_28059__$1;
(statearr_28092_28136[(2)] = inst_27980);

(statearr_28092_28136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (14))){
var inst_28007 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28007)){
var statearr_28093_28137 = state_28059__$1;
(statearr_28093_28137[(1)] = (18));

} else {
var statearr_28094_28138 = state_28059__$1;
(statearr_28094_28138[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (26))){
var inst_28031 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_28059__$1 = state_28059;
if(cljs.core.truth_(inst_28031)){
var statearr_28095_28139 = state_28059__$1;
(statearr_28095_28139[(1)] = (30));

} else {
var statearr_28096_28140 = state_28059__$1;
(statearr_28096_28140[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (16))){
var inst_27999 = (state_28059[(2)]);
var inst_28000 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28001 = figwheel.client.format_messages.call(null,inst_28000);
var inst_28002 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28003 = figwheel.client.heads_up.display_error.call(null,inst_28001,inst_28002);
var state_28059__$1 = (function (){var statearr_28097 = state_28059;
(statearr_28097[(9)] = inst_27999);

return statearr_28097;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(17),inst_28003);
} else {
if((state_val_28060 === (30))){
var inst_28033 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28034 = figwheel.client.heads_up.display_warning.call(null,inst_28033);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(33),inst_28034);
} else {
if((state_val_28060 === (10))){
var inst_27993 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28098_28141 = state_28059__$1;
(statearr_28098_28141[(2)] = inst_27993);

(statearr_28098_28141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (18))){
var inst_28009 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28010 = figwheel.client.format_messages.call(null,inst_28009);
var inst_28011 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28012 = figwheel.client.heads_up.display_error.call(null,inst_28010,inst_28011);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(21),inst_28012);
} else {
if((state_val_28060 === (37))){
var inst_28042 = (state_28059[(2)]);
var state_28059__$1 = state_28059;
var statearr_28099_28142 = state_28059__$1;
(statearr_28099_28142[(2)] = inst_28042);

(statearr_28099_28142[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28060 === (8))){
var inst_27985 = figwheel.client.heads_up.flash_loaded.call(null);
var state_28059__$1 = state_28059;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28059__$1,(11),inst_27985);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21983__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__21732__auto__,c__21983__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto____0 = (function (){
var statearr_28103 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28103[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto__);

(statearr_28103[(1)] = (1));

return statearr_28103;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto____1 = (function (state_28059){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_28059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e28104){if((e28104 instanceof Object)){
var ex__21736__auto__ = e28104;
var statearr_28105_28143 = state_28059;
(statearr_28105_28143[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28104;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28144 = state_28059;
state_28059 = G__28144;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto__ = function(state_28059){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto____1.call(this,state_28059);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__,msg_hist,msg_names,msg))
})();
var state__21985__auto__ = (function (){var statearr_28106 = f__21984__auto__.call(null);
(statearr_28106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_28106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__,msg_hist,msg_names,msg))
);

return c__21983__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21983__auto___28207 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto___28207,ch){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto___28207,ch){
return (function (state_28190){
var state_val_28191 = (state_28190[(1)]);
if((state_val_28191 === (1))){
var state_28190__$1 = state_28190;
var statearr_28192_28208 = state_28190__$1;
(statearr_28192_28208[(2)] = null);

(statearr_28192_28208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (2))){
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28190__$1,(4),ch);
} else {
if((state_val_28191 === (3))){
var inst_28188 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28190__$1,inst_28188);
} else {
if((state_val_28191 === (4))){
var inst_28178 = (state_28190[(7)]);
var inst_28178__$1 = (state_28190[(2)]);
var state_28190__$1 = (function (){var statearr_28193 = state_28190;
(statearr_28193[(7)] = inst_28178__$1);

return statearr_28193;
})();
if(cljs.core.truth_(inst_28178__$1)){
var statearr_28194_28209 = state_28190__$1;
(statearr_28194_28209[(1)] = (5));

} else {
var statearr_28195_28210 = state_28190__$1;
(statearr_28195_28210[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (5))){
var inst_28178 = (state_28190[(7)]);
var inst_28180 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_28178);
var state_28190__$1 = state_28190;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28190__$1,(8),inst_28180);
} else {
if((state_val_28191 === (6))){
var state_28190__$1 = state_28190;
var statearr_28196_28211 = state_28190__$1;
(statearr_28196_28211[(2)] = null);

(statearr_28196_28211[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (7))){
var inst_28186 = (state_28190[(2)]);
var state_28190__$1 = state_28190;
var statearr_28197_28212 = state_28190__$1;
(statearr_28197_28212[(2)] = inst_28186);

(statearr_28197_28212[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28191 === (8))){
var inst_28182 = (state_28190[(2)]);
var state_28190__$1 = (function (){var statearr_28198 = state_28190;
(statearr_28198[(8)] = inst_28182);

return statearr_28198;
})();
var statearr_28199_28213 = state_28190__$1;
(statearr_28199_28213[(2)] = null);

(statearr_28199_28213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__21983__auto___28207,ch))
;
return ((function (switch__21732__auto__,c__21983__auto___28207,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__21733__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__21733__auto____0 = (function (){
var statearr_28203 = [null,null,null,null,null,null,null,null,null];
(statearr_28203[(0)] = figwheel$client$heads_up_plugin_$_state_machine__21733__auto__);

(statearr_28203[(1)] = (1));

return statearr_28203;
});
var figwheel$client$heads_up_plugin_$_state_machine__21733__auto____1 = (function (state_28190){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_28190);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e28204){if((e28204 instanceof Object)){
var ex__21736__auto__ = e28204;
var statearr_28205_28214 = state_28190;
(statearr_28205_28214[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28190);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28215 = state_28190;
state_28190 = G__28215;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__21733__auto__ = function(state_28190){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__21733__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__21733__auto____1.call(this,state_28190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__21733__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__21733__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto___28207,ch))
})();
var state__21985__auto__ = (function (){var statearr_28206 = f__21984__auto__.call(null);
(statearr_28206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto___28207);

return statearr_28206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto___28207,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21983__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21983__auto__){
return (function (){
var f__21984__auto__ = (function (){var switch__21732__auto__ = ((function (c__21983__auto__){
return (function (state_28236){
var state_val_28237 = (state_28236[(1)]);
if((state_val_28237 === (1))){
var inst_28231 = cljs.core.async.timeout.call(null,(3000));
var state_28236__$1 = state_28236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28236__$1,(2),inst_28231);
} else {
if((state_val_28237 === (2))){
var inst_28233 = (state_28236[(2)]);
var inst_28234 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28236__$1 = (function (){var statearr_28238 = state_28236;
(statearr_28238[(7)] = inst_28233);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28236__$1,inst_28234);
} else {
return null;
}
}
});})(c__21983__auto__))
;
return ((function (switch__21732__auto__,c__21983__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__21733__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__21733__auto____0 = (function (){
var statearr_28242 = [null,null,null,null,null,null,null,null];
(statearr_28242[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__21733__auto__);

(statearr_28242[(1)] = (1));

return statearr_28242;
});
var figwheel$client$enforce_project_plugin_$_state_machine__21733__auto____1 = (function (state_28236){
while(true){
var ret_value__21734__auto__ = (function (){try{while(true){
var result__21735__auto__ = switch__21732__auto__.call(null,state_28236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21735__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21735__auto__;
}
break;
}
}catch (e28243){if((e28243 instanceof Object)){
var ex__21736__auto__ = e28243;
var statearr_28244_28246 = state_28236;
(statearr_28244_28246[(5)] = ex__21736__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21734__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28247 = state_28236;
state_28236 = G__28247;
continue;
} else {
return ret_value__21734__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__21733__auto__ = function(state_28236){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__21733__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__21733__auto____1.call(this,state_28236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__21733__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__21733__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__21733__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__21733__auto__;
})()
;})(switch__21732__auto__,c__21983__auto__))
})();
var state__21985__auto__ = (function (){var statearr_28245 = f__21984__auto__.call(null);
(statearr_28245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21983__auto__);

return statearr_28245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21985__auto__);
});})(c__21983__auto__))
);

return c__21983__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28248){
var map__28255 = p__28248;
var map__28255__$1 = ((((!((map__28255 == null)))?((((map__28255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28255):map__28255);
var ed = map__28255__$1;
var formatted_exception = cljs.core.get.call(null,map__28255__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28255__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28255__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28257_28261 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28258_28262 = null;
var count__28259_28263 = (0);
var i__28260_28264 = (0);
while(true){
if((i__28260_28264 < count__28259_28263)){
var msg_28265 = cljs.core._nth.call(null,chunk__28258_28262,i__28260_28264);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28265);

var G__28266 = seq__28257_28261;
var G__28267 = chunk__28258_28262;
var G__28268 = count__28259_28263;
var G__28269 = (i__28260_28264 + (1));
seq__28257_28261 = G__28266;
chunk__28258_28262 = G__28267;
count__28259_28263 = G__28268;
i__28260_28264 = G__28269;
continue;
} else {
var temp__4657__auto___28270 = cljs.core.seq.call(null,seq__28257_28261);
if(temp__4657__auto___28270){
var seq__28257_28271__$1 = temp__4657__auto___28270;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28257_28271__$1)){
var c__18892__auto___28272 = cljs.core.chunk_first.call(null,seq__28257_28271__$1);
var G__28273 = cljs.core.chunk_rest.call(null,seq__28257_28271__$1);
var G__28274 = c__18892__auto___28272;
var G__28275 = cljs.core.count.call(null,c__18892__auto___28272);
var G__28276 = (0);
seq__28257_28261 = G__28273;
chunk__28258_28262 = G__28274;
count__28259_28263 = G__28275;
i__28260_28264 = G__28276;
continue;
} else {
var msg_28277 = cljs.core.first.call(null,seq__28257_28271__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28277);

var G__28278 = cljs.core.next.call(null,seq__28257_28271__$1);
var G__28279 = null;
var G__28280 = (0);
var G__28281 = (0);
seq__28257_28261 = G__28278;
chunk__28258_28262 = G__28279;
count__28259_28263 = G__28280;
i__28260_28264 = G__28281;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28282){
var map__28285 = p__28282;
var map__28285__$1 = ((((!((map__28285 == null)))?((((map__28285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28285):map__28285);
var w = map__28285__$1;
var message = cljs.core.get.call(null,map__28285__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18077__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18077__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18077__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__28293 = cljs.core.seq.call(null,plugins);
var chunk__28294 = null;
var count__28295 = (0);
var i__28296 = (0);
while(true){
if((i__28296 < count__28295)){
var vec__28297 = cljs.core._nth.call(null,chunk__28294,i__28296);
var k = cljs.core.nth.call(null,vec__28297,(0),null);
var plugin = cljs.core.nth.call(null,vec__28297,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28299 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28293,chunk__28294,count__28295,i__28296,pl_28299,vec__28297,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28299.call(null,msg_hist);
});})(seq__28293,chunk__28294,count__28295,i__28296,pl_28299,vec__28297,k,plugin))
);
} else {
}

var G__28300 = seq__28293;
var G__28301 = chunk__28294;
var G__28302 = count__28295;
var G__28303 = (i__28296 + (1));
seq__28293 = G__28300;
chunk__28294 = G__28301;
count__28295 = G__28302;
i__28296 = G__28303;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28293);
if(temp__4657__auto__){
var seq__28293__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28293__$1)){
var c__18892__auto__ = cljs.core.chunk_first.call(null,seq__28293__$1);
var G__28304 = cljs.core.chunk_rest.call(null,seq__28293__$1);
var G__28305 = c__18892__auto__;
var G__28306 = cljs.core.count.call(null,c__18892__auto__);
var G__28307 = (0);
seq__28293 = G__28304;
chunk__28294 = G__28305;
count__28295 = G__28306;
i__28296 = G__28307;
continue;
} else {
var vec__28298 = cljs.core.first.call(null,seq__28293__$1);
var k = cljs.core.nth.call(null,vec__28298,(0),null);
var plugin = cljs.core.nth.call(null,vec__28298,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28308 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28293,chunk__28294,count__28295,i__28296,pl_28308,vec__28298,k,plugin,seq__28293__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28308.call(null,msg_hist);
});})(seq__28293,chunk__28294,count__28295,i__28296,pl_28308,vec__28298,k,plugin,seq__28293__$1,temp__4657__auto__))
);
} else {
}

var G__28309 = cljs.core.next.call(null,seq__28293__$1);
var G__28310 = null;
var G__28311 = (0);
var G__28312 = (0);
seq__28293 = G__28309;
chunk__28294 = G__28310;
count__28295 = G__28311;
i__28296 = G__28312;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args28313 = [];
var len__19147__auto___28316 = arguments.length;
var i__19148__auto___28317 = (0);
while(true){
if((i__19148__auto___28317 < len__19147__auto___28316)){
args28313.push((arguments[i__19148__auto___28317]));

var G__28318 = (i__19148__auto___28317 + (1));
i__19148__auto___28317 = G__28318;
continue;
} else {
}
break;
}

var G__28315 = args28313.length;
switch (G__28315) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28313.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19154__auto__ = [];
var len__19147__auto___28324 = arguments.length;
var i__19148__auto___28325 = (0);
while(true){
if((i__19148__auto___28325 < len__19147__auto___28324)){
args__19154__auto__.push((arguments[i__19148__auto___28325]));

var G__28326 = (i__19148__auto___28325 + (1));
i__19148__auto___28325 = G__28326;
continue;
} else {
}
break;
}

var argseq__19155__auto__ = ((((0) < args__19154__auto__.length))?(new cljs.core.IndexedSeq(args__19154__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19155__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28321){
var map__28322 = p__28321;
var map__28322__$1 = ((((!((map__28322 == null)))?((((map__28322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28322):map__28322);
var opts = map__28322__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28320){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28320));
});

//# sourceMappingURL=client.js.map