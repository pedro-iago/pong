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
var pred__40559 = cljs.core._EQ_;
var expr__40560 = (function (){var or__18726__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__40559.call(null,"true",expr__40560))){
return true;
} else {
if(cljs.core.truth_(pred__40559.call(null,"false",expr__40560))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__40560)].join('')));
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
var args__19791__auto__ = [];
var len__19784__auto___40568 = arguments.length;
var i__19785__auto___40569 = (0);
while(true){
if((i__19785__auto___40569 < len__19784__auto___40568)){
args__19791__auto__.push((arguments[i__19785__auto___40569]));

var G__40570 = (i__19785__auto___40569 + (1));
i__19785__auto___40569 = G__40570;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq40565){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40565));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__40573){
var map__40576 = p__40573;
var map__40576__$1 = ((((!((map__40576 == null)))?((((map__40576.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40576.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40576):map__40576);
var message = cljs.core.get.call(null,map__40576__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__40576__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18726__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18714__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18714__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18714__auto__;
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
var c__32393__auto___40778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___40778,ch){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___40778,ch){
return (function (state_40745){
var state_val_40746 = (state_40745[(1)]);
if((state_val_40746 === (7))){
var inst_40741 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
var statearr_40747_40779 = state_40745__$1;
(statearr_40747_40779[(2)] = inst_40741);

(statearr_40747_40779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (1))){
var state_40745__$1 = state_40745;
var statearr_40748_40780 = state_40745__$1;
(statearr_40748_40780[(2)] = null);

(statearr_40748_40780[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (4))){
var inst_40698 = (state_40745[(7)]);
var inst_40698__$1 = (state_40745[(2)]);
var state_40745__$1 = (function (){var statearr_40749 = state_40745;
(statearr_40749[(7)] = inst_40698__$1);

return statearr_40749;
})();
if(cljs.core.truth_(inst_40698__$1)){
var statearr_40750_40781 = state_40745__$1;
(statearr_40750_40781[(1)] = (5));

} else {
var statearr_40751_40782 = state_40745__$1;
(statearr_40751_40782[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (15))){
var inst_40705 = (state_40745[(8)]);
var inst_40720 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40705);
var inst_40721 = cljs.core.first.call(null,inst_40720);
var inst_40722 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_40721);
var inst_40723 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_40722)].join('');
var inst_40724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_40723);
var state_40745__$1 = state_40745;
var statearr_40752_40783 = state_40745__$1;
(statearr_40752_40783[(2)] = inst_40724);

(statearr_40752_40783[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (13))){
var inst_40729 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
var statearr_40753_40784 = state_40745__$1;
(statearr_40753_40784[(2)] = inst_40729);

(statearr_40753_40784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (6))){
var state_40745__$1 = state_40745;
var statearr_40754_40785 = state_40745__$1;
(statearr_40754_40785[(2)] = null);

(statearr_40754_40785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (17))){
var inst_40727 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
var statearr_40757_40786 = state_40745__$1;
(statearr_40757_40786[(2)] = inst_40727);

(statearr_40757_40786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (3))){
var inst_40743 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40745__$1,inst_40743);
} else {
if((state_val_40746 === (12))){
var inst_40704 = (state_40745[(9)]);
var inst_40718 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_40704,opts);
var state_40745__$1 = state_40745;
if(cljs.core.truth_(inst_40718)){
var statearr_40758_40787 = state_40745__$1;
(statearr_40758_40787[(1)] = (15));

} else {
var statearr_40759_40788 = state_40745__$1;
(statearr_40759_40788[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (2))){
var state_40745__$1 = state_40745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40745__$1,(4),ch);
} else {
if((state_val_40746 === (11))){
var inst_40705 = (state_40745[(8)]);
var inst_40710 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40711 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_40705);
var inst_40712 = cljs.core.async.timeout.call(null,(1000));
var inst_40713 = [inst_40711,inst_40712];
var inst_40714 = (new cljs.core.PersistentVector(null,2,(5),inst_40710,inst_40713,null));
var state_40745__$1 = state_40745;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40745__$1,(14),inst_40714);
} else {
if((state_val_40746 === (9))){
var inst_40705 = (state_40745[(8)]);
var inst_40731 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_40732 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_40705);
var inst_40733 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40732);
var inst_40734 = [cljs.core.str("Not loading: "),cljs.core.str(inst_40733)].join('');
var inst_40735 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_40734);
var state_40745__$1 = (function (){var statearr_40760 = state_40745;
(statearr_40760[(10)] = inst_40731);

return statearr_40760;
})();
var statearr_40761_40789 = state_40745__$1;
(statearr_40761_40789[(2)] = inst_40735);

(statearr_40761_40789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (5))){
var inst_40698 = (state_40745[(7)]);
var inst_40700 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_40701 = (new cljs.core.PersistentArrayMap(null,2,inst_40700,null));
var inst_40702 = (new cljs.core.PersistentHashSet(null,inst_40701,null));
var inst_40703 = figwheel.client.focus_msgs.call(null,inst_40702,inst_40698);
var inst_40704 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_40703);
var inst_40705 = cljs.core.first.call(null,inst_40703);
var inst_40706 = figwheel.client.autoload_QMARK_.call(null);
var state_40745__$1 = (function (){var statearr_40762 = state_40745;
(statearr_40762[(9)] = inst_40704);

(statearr_40762[(8)] = inst_40705);

return statearr_40762;
})();
if(cljs.core.truth_(inst_40706)){
var statearr_40763_40790 = state_40745__$1;
(statearr_40763_40790[(1)] = (8));

} else {
var statearr_40764_40791 = state_40745__$1;
(statearr_40764_40791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (14))){
var inst_40716 = (state_40745[(2)]);
var state_40745__$1 = state_40745;
var statearr_40765_40792 = state_40745__$1;
(statearr_40765_40792[(2)] = inst_40716);

(statearr_40765_40792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (16))){
var state_40745__$1 = state_40745;
var statearr_40766_40793 = state_40745__$1;
(statearr_40766_40793[(2)] = null);

(statearr_40766_40793[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (10))){
var inst_40737 = (state_40745[(2)]);
var state_40745__$1 = (function (){var statearr_40767 = state_40745;
(statearr_40767[(11)] = inst_40737);

return statearr_40767;
})();
var statearr_40768_40794 = state_40745__$1;
(statearr_40768_40794[(2)] = null);

(statearr_40768_40794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40746 === (8))){
var inst_40704 = (state_40745[(9)]);
var inst_40708 = figwheel.client.reload_file_state_QMARK_.call(null,inst_40704,opts);
var state_40745__$1 = state_40745;
if(cljs.core.truth_(inst_40708)){
var statearr_40769_40795 = state_40745__$1;
(statearr_40769_40795[(1)] = (11));

} else {
var statearr_40770_40796 = state_40745__$1;
(statearr_40770_40796[(1)] = (12));

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
});})(c__32393__auto___40778,ch))
;
return ((function (switch__32005__auto__,c__32393__auto___40778,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32006__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32006__auto____0 = (function (){
var statearr_40774 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40774[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32006__auto__);

(statearr_40774[(1)] = (1));

return statearr_40774;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32006__auto____1 = (function (state_40745){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_40745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e40775){if((e40775 instanceof Object)){
var ex__32009__auto__ = e40775;
var statearr_40776_40797 = state_40745;
(statearr_40776_40797[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40798 = state_40745;
state_40745 = G__40798;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32006__auto__ = function(state_40745){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32006__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32006__auto____1.call(this,state_40745);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32006__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32006__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___40778,ch))
})();
var state__32395__auto__ = (function (){var statearr_40777 = f__32394__auto__.call(null);
(statearr_40777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___40778);

return statearr_40777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___40778,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__40801_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__40801_SHARP_));
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
var base_path_40808 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_40808){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_40806 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_40807 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40807;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_40806;
}}catch (e40805){if((e40805 instanceof Error)){
var e = e40805;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_40808], null));
} else {
var e = e40805;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_40808))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__40810){
var map__40817 = p__40810;
var map__40817__$1 = ((((!((map__40817 == null)))?((((map__40817.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40817.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40817):map__40817);
var opts = map__40817__$1;
var build_id = cljs.core.get.call(null,map__40817__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__40817,map__40817__$1,opts,build_id){
return (function (p__40819){
var vec__40820 = p__40819;
var map__40821 = cljs.core.nth.call(null,vec__40820,(0),null);
var map__40821__$1 = ((((!((map__40821 == null)))?((((map__40821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40821):map__40821);
var msg = map__40821__$1;
var msg_name = cljs.core.get.call(null,map__40821__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40820,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__40820,map__40821,map__40821__$1,msg,msg_name,_,map__40817,map__40817__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__40820,map__40821,map__40821__$1,msg,msg_name,_,map__40817,map__40817__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__40817,map__40817__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__40835){
var vec__40836 = p__40835;
var map__40837 = cljs.core.nth.call(null,vec__40836,(0),null);
var map__40837__$1 = ((((!((map__40837 == null)))?((((map__40837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40837):map__40837);
var msg = map__40837__$1;
var msg_name = cljs.core.get.call(null,map__40837__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40836,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__40839){
var map__40849 = p__40839;
var map__40849__$1 = ((((!((map__40849 == null)))?((((map__40849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40849):map__40849);
var on_compile_warning = cljs.core.get.call(null,map__40849__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__40849__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__40849,map__40849__$1,on_compile_warning,on_compile_fail){
return (function (p__40851){
var vec__40852 = p__40851;
var map__40853 = cljs.core.nth.call(null,vec__40852,(0),null);
var map__40853__$1 = ((((!((map__40853 == null)))?((((map__40853.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40853.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40853):map__40853);
var msg = map__40853__$1;
var msg_name = cljs.core.get.call(null,map__40853__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__40852,(1));
var pred__40855 = cljs.core._EQ_;
var expr__40856 = msg_name;
if(cljs.core.truth_(pred__40855.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__40856))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__40855.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__40856))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__40849,map__40849__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__,msg_hist,msg_names,msg){
return (function (state_41080){
var state_val_41081 = (state_41080[(1)]);
if((state_val_41081 === (7))){
var inst_41004 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41004)){
var statearr_41082_41128 = state_41080__$1;
(statearr_41082_41128[(1)] = (8));

} else {
var statearr_41083_41129 = state_41080__$1;
(statearr_41083_41129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (20))){
var inst_41074 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41084_41130 = state_41080__$1;
(statearr_41084_41130[(2)] = inst_41074);

(statearr_41084_41130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (27))){
var inst_41070 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41085_41131 = state_41080__$1;
(statearr_41085_41131[(2)] = inst_41070);

(statearr_41085_41131[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (1))){
var inst_40997 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_40997)){
var statearr_41086_41132 = state_41080__$1;
(statearr_41086_41132[(1)] = (2));

} else {
var statearr_41087_41133 = state_41080__$1;
(statearr_41087_41133[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (24))){
var inst_41072 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41088_41134 = state_41080__$1;
(statearr_41088_41134[(2)] = inst_41072);

(statearr_41088_41134[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (4))){
var inst_41078 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41080__$1,inst_41078);
} else {
if((state_val_41081 === (15))){
var inst_41076 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41089_41135 = state_41080__$1;
(statearr_41089_41135[(2)] = inst_41076);

(statearr_41089_41135[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (21))){
var inst_41035 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41090_41136 = state_41080__$1;
(statearr_41090_41136[(2)] = inst_41035);

(statearr_41090_41136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (31))){
var inst_41059 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41059)){
var statearr_41091_41137 = state_41080__$1;
(statearr_41091_41137[(1)] = (34));

} else {
var statearr_41092_41138 = state_41080__$1;
(statearr_41092_41138[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (32))){
var inst_41068 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41093_41139 = state_41080__$1;
(statearr_41093_41139[(2)] = inst_41068);

(statearr_41093_41139[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (33))){
var inst_41057 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41094_41140 = state_41080__$1;
(statearr_41094_41140[(2)] = inst_41057);

(statearr_41094_41140[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (13))){
var inst_41018 = figwheel.client.heads_up.clear.call(null);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(16),inst_41018);
} else {
if((state_val_41081 === (22))){
var inst_41039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41040 = figwheel.client.heads_up.append_message.call(null,inst_41039);
var state_41080__$1 = state_41080;
var statearr_41095_41141 = state_41080__$1;
(statearr_41095_41141[(2)] = inst_41040);

(statearr_41095_41141[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (36))){
var inst_41066 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41096_41142 = state_41080__$1;
(statearr_41096_41142[(2)] = inst_41066);

(statearr_41096_41142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (29))){
var inst_41050 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41097_41143 = state_41080__$1;
(statearr_41097_41143[(2)] = inst_41050);

(statearr_41097_41143[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (6))){
var inst_40999 = (state_41080[(7)]);
var state_41080__$1 = state_41080;
var statearr_41098_41144 = state_41080__$1;
(statearr_41098_41144[(2)] = inst_40999);

(statearr_41098_41144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (28))){
var inst_41046 = (state_41080[(2)]);
var inst_41047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41048 = figwheel.client.heads_up.display_warning.call(null,inst_41047);
var state_41080__$1 = (function (){var statearr_41099 = state_41080;
(statearr_41099[(8)] = inst_41046);

return statearr_41099;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(29),inst_41048);
} else {
if((state_val_41081 === (25))){
var inst_41044 = figwheel.client.heads_up.clear.call(null);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(28),inst_41044);
} else {
if((state_val_41081 === (34))){
var inst_41061 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(37),inst_41061);
} else {
if((state_val_41081 === (17))){
var inst_41026 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41100_41145 = state_41080__$1;
(statearr_41100_41145[(2)] = inst_41026);

(statearr_41100_41145[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (3))){
var inst_41016 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41016)){
var statearr_41101_41146 = state_41080__$1;
(statearr_41101_41146[(1)] = (13));

} else {
var statearr_41102_41147 = state_41080__$1;
(statearr_41102_41147[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (12))){
var inst_41012 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41103_41148 = state_41080__$1;
(statearr_41103_41148[(2)] = inst_41012);

(statearr_41103_41148[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (2))){
var inst_40999 = (state_41080[(7)]);
var inst_40999__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_41080__$1 = (function (){var statearr_41104 = state_41080;
(statearr_41104[(7)] = inst_40999__$1);

return statearr_41104;
})();
if(cljs.core.truth_(inst_40999__$1)){
var statearr_41105_41149 = state_41080__$1;
(statearr_41105_41149[(1)] = (5));

} else {
var statearr_41106_41150 = state_41080__$1;
(statearr_41106_41150[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (23))){
var inst_41042 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41042)){
var statearr_41107_41151 = state_41080__$1;
(statearr_41107_41151[(1)] = (25));

} else {
var statearr_41108_41152 = state_41080__$1;
(statearr_41108_41152[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (35))){
var state_41080__$1 = state_41080;
var statearr_41109_41153 = state_41080__$1;
(statearr_41109_41153[(2)] = null);

(statearr_41109_41153[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (19))){
var inst_41037 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41037)){
var statearr_41110_41154 = state_41080__$1;
(statearr_41110_41154[(1)] = (22));

} else {
var statearr_41111_41155 = state_41080__$1;
(statearr_41111_41155[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (11))){
var inst_41008 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41112_41156 = state_41080__$1;
(statearr_41112_41156[(2)] = inst_41008);

(statearr_41112_41156[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (9))){
var inst_41010 = figwheel.client.heads_up.clear.call(null);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(12),inst_41010);
} else {
if((state_val_41081 === (5))){
var inst_41001 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41080__$1 = state_41080;
var statearr_41113_41157 = state_41080__$1;
(statearr_41113_41157[(2)] = inst_41001);

(statearr_41113_41157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (14))){
var inst_41028 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41028)){
var statearr_41114_41158 = state_41080__$1;
(statearr_41114_41158[(1)] = (18));

} else {
var statearr_41115_41159 = state_41080__$1;
(statearr_41115_41159[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (26))){
var inst_41052 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41080__$1 = state_41080;
if(cljs.core.truth_(inst_41052)){
var statearr_41116_41160 = state_41080__$1;
(statearr_41116_41160[(1)] = (30));

} else {
var statearr_41117_41161 = state_41080__$1;
(statearr_41117_41161[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (16))){
var inst_41020 = (state_41080[(2)]);
var inst_41021 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41022 = figwheel.client.format_messages.call(null,inst_41021);
var inst_41023 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41024 = figwheel.client.heads_up.display_error.call(null,inst_41022,inst_41023);
var state_41080__$1 = (function (){var statearr_41118 = state_41080;
(statearr_41118[(9)] = inst_41020);

return statearr_41118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(17),inst_41024);
} else {
if((state_val_41081 === (30))){
var inst_41054 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41055 = figwheel.client.heads_up.display_warning.call(null,inst_41054);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(33),inst_41055);
} else {
if((state_val_41081 === (10))){
var inst_41014 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41119_41162 = state_41080__$1;
(statearr_41119_41162[(2)] = inst_41014);

(statearr_41119_41162[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (18))){
var inst_41030 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41031 = figwheel.client.format_messages.call(null,inst_41030);
var inst_41032 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41033 = figwheel.client.heads_up.display_error.call(null,inst_41031,inst_41032);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(21),inst_41033);
} else {
if((state_val_41081 === (37))){
var inst_41063 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41120_41163 = state_41080__$1;
(statearr_41120_41163[(2)] = inst_41063);

(statearr_41120_41163[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (8))){
var inst_41006 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(11),inst_41006);
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
});})(c__32393__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32005__auto__,c__32393__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto____0 = (function (){
var statearr_41124 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41124[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto__);

(statearr_41124[(1)] = (1));

return statearr_41124;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto____1 = (function (state_41080){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_41080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e41125){if((e41125 instanceof Object)){
var ex__32009__auto__ = e41125;
var statearr_41126_41164 = state_41080;
(statearr_41126_41164[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41165 = state_41080;
state_41080 = G__41165;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto__ = function(state_41080){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto____1.call(this,state_41080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__,msg_hist,msg_names,msg))
})();
var state__32395__auto__ = (function (){var statearr_41127 = f__32394__auto__.call(null);
(statearr_41127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_41127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__,msg_hist,msg_names,msg))
);

return c__32393__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32393__auto___41237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto___41237,ch){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto___41237,ch){
return (function (state_41216){
var state_val_41217 = (state_41216[(1)]);
if((state_val_41217 === (1))){
var state_41216__$1 = state_41216;
var statearr_41218_41238 = state_41216__$1;
(statearr_41218_41238[(2)] = null);

(statearr_41218_41238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41217 === (2))){
var state_41216__$1 = state_41216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41216__$1,(4),ch);
} else {
if((state_val_41217 === (3))){
var inst_41214 = (state_41216[(2)]);
var state_41216__$1 = state_41216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41216__$1,inst_41214);
} else {
if((state_val_41217 === (4))){
var inst_41204 = (state_41216[(7)]);
var inst_41204__$1 = (state_41216[(2)]);
var state_41216__$1 = (function (){var statearr_41219 = state_41216;
(statearr_41219[(7)] = inst_41204__$1);

return statearr_41219;
})();
if(cljs.core.truth_(inst_41204__$1)){
var statearr_41220_41240 = state_41216__$1;
(statearr_41220_41240[(1)] = (5));

} else {
var statearr_41221_41241 = state_41216__$1;
(statearr_41221_41241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41217 === (5))){
var inst_41204 = (state_41216[(7)]);
var inst_41206 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41204);
var state_41216__$1 = state_41216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41216__$1,(8),inst_41206);
} else {
if((state_val_41217 === (6))){
var state_41216__$1 = state_41216;
var statearr_41222_41242 = state_41216__$1;
(statearr_41222_41242[(2)] = null);

(statearr_41222_41242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41217 === (7))){
var inst_41212 = (state_41216[(2)]);
var state_41216__$1 = state_41216;
var statearr_41223_41243 = state_41216__$1;
(statearr_41223_41243[(2)] = inst_41212);

(statearr_41223_41243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41217 === (8))){
var inst_41208 = (state_41216[(2)]);
var state_41216__$1 = (function (){var statearr_41228 = state_41216;
(statearr_41228[(8)] = inst_41208);

return statearr_41228;
})();
var statearr_41229_41246 = state_41216__$1;
(statearr_41229_41246[(2)] = null);

(statearr_41229_41246[(1)] = (2));


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
});})(c__32393__auto___41237,ch))
;
return ((function (switch__32005__auto__,c__32393__auto___41237,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32006__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32006__auto____0 = (function (){
var statearr_41233 = [null,null,null,null,null,null,null,null,null];
(statearr_41233[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32006__auto__);

(statearr_41233[(1)] = (1));

return statearr_41233;
});
var figwheel$client$heads_up_plugin_$_state_machine__32006__auto____1 = (function (state_41216){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_41216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e41234){if((e41234 instanceof Object)){
var ex__32009__auto__ = e41234;
var statearr_41235_41252 = state_41216;
(statearr_41235_41252[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41257 = state_41216;
state_41216 = G__41257;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32006__auto__ = function(state_41216){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32006__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32006__auto____1.call(this,state_41216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32006__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32006__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto___41237,ch))
})();
var state__32395__auto__ = (function (){var statearr_41236 = f__32394__auto__.call(null);
(statearr_41236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto___41237);

return statearr_41236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto___41237,ch))
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
var c__32393__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32393__auto__){
return (function (){
var f__32394__auto__ = (function (){var switch__32005__auto__ = ((function (c__32393__auto__){
return (function (state_41278){
var state_val_41279 = (state_41278[(1)]);
if((state_val_41279 === (1))){
var inst_41273 = cljs.core.async.timeout.call(null,(3000));
var state_41278__$1 = state_41278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41278__$1,(2),inst_41273);
} else {
if((state_val_41279 === (2))){
var inst_41275 = (state_41278[(2)]);
var inst_41276 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41278__$1 = (function (){var statearr_41280 = state_41278;
(statearr_41280[(7)] = inst_41275);

return statearr_41280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41278__$1,inst_41276);
} else {
return null;
}
}
});})(c__32393__auto__))
;
return ((function (switch__32005__auto__,c__32393__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32006__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32006__auto____0 = (function (){
var statearr_41285 = [null,null,null,null,null,null,null,null];
(statearr_41285[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32006__auto__);

(statearr_41285[(1)] = (1));

return statearr_41285;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32006__auto____1 = (function (state_41278){
while(true){
var ret_value__32007__auto__ = (function (){try{while(true){
var result__32008__auto__ = switch__32005__auto__.call(null,state_41278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32008__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32008__auto__;
}
break;
}
}catch (e41286){if((e41286 instanceof Object)){
var ex__32009__auto__ = e41286;
var statearr_41287_41295 = state_41278;
(statearr_41287_41295[(5)] = ex__32009__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41286;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32007__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41296 = state_41278;
state_41278 = G__41296;
continue;
} else {
return ret_value__32007__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32006__auto__ = function(state_41278){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32006__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32006__auto____1.call(this,state_41278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32006__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32006__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32006__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32006__auto__;
})()
;})(switch__32005__auto__,c__32393__auto__))
})();
var state__32395__auto__ = (function (){var statearr_41288 = f__32394__auto__.call(null);
(statearr_41288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32393__auto__);

return statearr_41288;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32395__auto__);
});})(c__32393__auto__))
);

return c__32393__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41298){
var map__41305 = p__41298;
var map__41305__$1 = ((((!((map__41305 == null)))?((((map__41305.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41305.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41305):map__41305);
var ed = map__41305__$1;
var formatted_exception = cljs.core.get.call(null,map__41305__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41305__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__41305__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41313_41327 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41314_41328 = null;
var count__41315_41329 = (0);
var i__41316_41330 = (0);
while(true){
if((i__41316_41330 < count__41315_41329)){
var msg_41334 = cljs.core._nth.call(null,chunk__41314_41328,i__41316_41330);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41334);

var G__41335 = seq__41313_41327;
var G__41336 = chunk__41314_41328;
var G__41337 = count__41315_41329;
var G__41338 = (i__41316_41330 + (1));
seq__41313_41327 = G__41335;
chunk__41314_41328 = G__41336;
count__41315_41329 = G__41337;
i__41316_41330 = G__41338;
continue;
} else {
var temp__4657__auto___41339 = cljs.core.seq.call(null,seq__41313_41327);
if(temp__4657__auto___41339){
var seq__41313_41340__$1 = temp__4657__auto___41339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41313_41340__$1)){
var c__19529__auto___41341 = cljs.core.chunk_first.call(null,seq__41313_41340__$1);
var G__41342 = cljs.core.chunk_rest.call(null,seq__41313_41340__$1);
var G__41343 = c__19529__auto___41341;
var G__41344 = cljs.core.count.call(null,c__19529__auto___41341);
var G__41345 = (0);
seq__41313_41327 = G__41342;
chunk__41314_41328 = G__41343;
count__41315_41329 = G__41344;
i__41316_41330 = G__41345;
continue;
} else {
var msg_41346 = cljs.core.first.call(null,seq__41313_41340__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41346);

var G__41347 = cljs.core.next.call(null,seq__41313_41340__$1);
var G__41348 = null;
var G__41349 = (0);
var G__41350 = (0);
seq__41313_41327 = G__41347;
chunk__41314_41328 = G__41348;
count__41315_41329 = G__41349;
i__41316_41330 = G__41350;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41357){
var map__41360 = p__41357;
var map__41360__$1 = ((((!((map__41360 == null)))?((((map__41360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41360):map__41360);
var w = map__41360__$1;
var message = cljs.core.get.call(null,map__41360__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__18714__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18714__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18714__auto__;
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
var seq__41383 = cljs.core.seq.call(null,plugins);
var chunk__41384 = null;
var count__41385 = (0);
var i__41386 = (0);
while(true){
if((i__41386 < count__41385)){
var vec__41387 = cljs.core._nth.call(null,chunk__41384,i__41386);
var k = cljs.core.nth.call(null,vec__41387,(0),null);
var plugin = cljs.core.nth.call(null,vec__41387,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41389 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41383,chunk__41384,count__41385,i__41386,pl_41389,vec__41387,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41389.call(null,msg_hist);
});})(seq__41383,chunk__41384,count__41385,i__41386,pl_41389,vec__41387,k,plugin))
);
} else {
}

var G__41390 = seq__41383;
var G__41391 = chunk__41384;
var G__41392 = count__41385;
var G__41393 = (i__41386 + (1));
seq__41383 = G__41390;
chunk__41384 = G__41391;
count__41385 = G__41392;
i__41386 = G__41393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__41383);
if(temp__4657__auto__){
var seq__41383__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41383__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__41383__$1);
var G__41394 = cljs.core.chunk_rest.call(null,seq__41383__$1);
var G__41395 = c__19529__auto__;
var G__41396 = cljs.core.count.call(null,c__19529__auto__);
var G__41397 = (0);
seq__41383 = G__41394;
chunk__41384 = G__41395;
count__41385 = G__41396;
i__41386 = G__41397;
continue;
} else {
var vec__41388 = cljs.core.first.call(null,seq__41383__$1);
var k = cljs.core.nth.call(null,vec__41388,(0),null);
var plugin = cljs.core.nth.call(null,vec__41388,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41398 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41383,chunk__41384,count__41385,i__41386,pl_41398,vec__41388,k,plugin,seq__41383__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41398.call(null,msg_hist);
});})(seq__41383,chunk__41384,count__41385,i__41386,pl_41398,vec__41388,k,plugin,seq__41383__$1,temp__4657__auto__))
);
} else {
}

var G__41399 = cljs.core.next.call(null,seq__41383__$1);
var G__41400 = null;
var G__41401 = (0);
var G__41402 = (0);
seq__41383 = G__41399;
chunk__41384 = G__41400;
count__41385 = G__41401;
i__41386 = G__41402;
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
var args41403 = [];
var len__19784__auto___41406 = arguments.length;
var i__19785__auto___41407 = (0);
while(true){
if((i__19785__auto___41407 < len__19784__auto___41406)){
args41403.push((arguments[i__19785__auto___41407]));

var G__41408 = (i__19785__auto___41407 + (1));
i__19785__auto___41407 = G__41408;
continue;
} else {
}
break;
}

var G__41405 = args41403.length;
switch (G__41405) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41403.length)].join('')));

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
var args__19791__auto__ = [];
var len__19784__auto___41420 = arguments.length;
var i__19785__auto___41421 = (0);
while(true){
if((i__19785__auto___41421 < len__19784__auto___41420)){
args__19791__auto__.push((arguments[i__19785__auto___41421]));

var G__41422 = (i__19785__auto___41421 + (1));
i__19785__auto___41421 = G__41422;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41411){
var map__41412 = p__41411;
var map__41412__$1 = ((((!((map__41412 == null)))?((((map__41412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41412):map__41412);
var opts = map__41412__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41410){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41410));
});

//# sourceMappingURL=client.js.map