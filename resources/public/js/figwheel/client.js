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
var pred__27375 = cljs.core._EQ_;
var expr__27376 = (function (){var or__17788__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__27375.call(null,"true",expr__27376))){
return true;
} else {
if(cljs.core.truth_(pred__27375.call(null,"false",expr__27376))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__27376)].join('')));
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
var args__18853__auto__ = [];
var len__18846__auto___27379 = arguments.length;
var i__18847__auto___27380 = (0);
while(true){
if((i__18847__auto___27380 < len__18846__auto___27379)){
args__18853__auto__.push((arguments[i__18847__auto___27380]));

var G__27381 = (i__18847__auto___27380 + (1));
i__18847__auto___27380 = G__27381;
continue;
} else {
}
break;
}

var argseq__18854__auto__ = ((((0) < args__18853__auto__.length))?(new cljs.core.IndexedSeq(args__18853__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__18854__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq27378){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27378));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__27382){
var map__27385 = p__27382;
var map__27385__$1 = ((((!((map__27385 == null)))?((((map__27385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27385):map__27385);
var message = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__27385__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__17788__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__17788__auto__)){
return or__17788__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__17776__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__17776__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__17776__auto__;
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
var c__22347__auto___27547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___27547,ch){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___27547,ch){
return (function (state_27516){
var state_val_27517 = (state_27516[(1)]);
if((state_val_27517 === (7))){
var inst_27512 = (state_27516[(2)]);
var state_27516__$1 = state_27516;
var statearr_27518_27548 = state_27516__$1;
(statearr_27518_27548[(2)] = inst_27512);

(statearr_27518_27548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (1))){
var state_27516__$1 = state_27516;
var statearr_27519_27549 = state_27516__$1;
(statearr_27519_27549[(2)] = null);

(statearr_27519_27549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (4))){
var inst_27469 = (state_27516[(7)]);
var inst_27469__$1 = (state_27516[(2)]);
var state_27516__$1 = (function (){var statearr_27520 = state_27516;
(statearr_27520[(7)] = inst_27469__$1);

return statearr_27520;
})();
if(cljs.core.truth_(inst_27469__$1)){
var statearr_27521_27550 = state_27516__$1;
(statearr_27521_27550[(1)] = (5));

} else {
var statearr_27522_27551 = state_27516__$1;
(statearr_27522_27551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (15))){
var inst_27476 = (state_27516[(8)]);
var inst_27491 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27476);
var inst_27492 = cljs.core.first.call(null,inst_27491);
var inst_27493 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27492);
var inst_27494 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27493)].join('');
var inst_27495 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27494);
var state_27516__$1 = state_27516;
var statearr_27523_27552 = state_27516__$1;
(statearr_27523_27552[(2)] = inst_27495);

(statearr_27523_27552[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (13))){
var inst_27500 = (state_27516[(2)]);
var state_27516__$1 = state_27516;
var statearr_27524_27553 = state_27516__$1;
(statearr_27524_27553[(2)] = inst_27500);

(statearr_27524_27553[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (6))){
var state_27516__$1 = state_27516;
var statearr_27525_27554 = state_27516__$1;
(statearr_27525_27554[(2)] = null);

(statearr_27525_27554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (17))){
var inst_27498 = (state_27516[(2)]);
var state_27516__$1 = state_27516;
var statearr_27526_27555 = state_27516__$1;
(statearr_27526_27555[(2)] = inst_27498);

(statearr_27526_27555[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (3))){
var inst_27514 = (state_27516[(2)]);
var state_27516__$1 = state_27516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27516__$1,inst_27514);
} else {
if((state_val_27517 === (12))){
var inst_27475 = (state_27516[(9)]);
var inst_27489 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_27475,opts);
var state_27516__$1 = state_27516;
if(cljs.core.truth_(inst_27489)){
var statearr_27527_27556 = state_27516__$1;
(statearr_27527_27556[(1)] = (15));

} else {
var statearr_27528_27557 = state_27516__$1;
(statearr_27528_27557[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (2))){
var state_27516__$1 = state_27516;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27516__$1,(4),ch);
} else {
if((state_val_27517 === (11))){
var inst_27476 = (state_27516[(8)]);
var inst_27481 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27482 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_27476);
var inst_27483 = cljs.core.async.timeout.call(null,(1000));
var inst_27484 = [inst_27482,inst_27483];
var inst_27485 = (new cljs.core.PersistentVector(null,2,(5),inst_27481,inst_27484,null));
var state_27516__$1 = state_27516;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27516__$1,(14),inst_27485);
} else {
if((state_val_27517 === (9))){
var inst_27476 = (state_27516[(8)]);
var inst_27502 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27503 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_27476);
var inst_27504 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27503);
var inst_27505 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27504)].join('');
var inst_27506 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27505);
var state_27516__$1 = (function (){var statearr_27529 = state_27516;
(statearr_27529[(10)] = inst_27502);

return statearr_27529;
})();
var statearr_27530_27558 = state_27516__$1;
(statearr_27530_27558[(2)] = inst_27506);

(statearr_27530_27558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (5))){
var inst_27469 = (state_27516[(7)]);
var inst_27471 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_27472 = (new cljs.core.PersistentArrayMap(null,2,inst_27471,null));
var inst_27473 = (new cljs.core.PersistentHashSet(null,inst_27472,null));
var inst_27474 = figwheel.client.focus_msgs.call(null,inst_27473,inst_27469);
var inst_27475 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_27474);
var inst_27476 = cljs.core.first.call(null,inst_27474);
var inst_27477 = figwheel.client.autoload_QMARK_.call(null);
var state_27516__$1 = (function (){var statearr_27531 = state_27516;
(statearr_27531[(9)] = inst_27475);

(statearr_27531[(8)] = inst_27476);

return statearr_27531;
})();
if(cljs.core.truth_(inst_27477)){
var statearr_27532_27559 = state_27516__$1;
(statearr_27532_27559[(1)] = (8));

} else {
var statearr_27533_27560 = state_27516__$1;
(statearr_27533_27560[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (14))){
var inst_27487 = (state_27516[(2)]);
var state_27516__$1 = state_27516;
var statearr_27534_27561 = state_27516__$1;
(statearr_27534_27561[(2)] = inst_27487);

(statearr_27534_27561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (16))){
var state_27516__$1 = state_27516;
var statearr_27535_27562 = state_27516__$1;
(statearr_27535_27562[(2)] = null);

(statearr_27535_27562[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (10))){
var inst_27508 = (state_27516[(2)]);
var state_27516__$1 = (function (){var statearr_27536 = state_27516;
(statearr_27536[(11)] = inst_27508);

return statearr_27536;
})();
var statearr_27537_27563 = state_27516__$1;
(statearr_27537_27563[(2)] = null);

(statearr_27537_27563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27517 === (8))){
var inst_27475 = (state_27516[(9)]);
var inst_27479 = figwheel.client.reload_file_state_QMARK_.call(null,inst_27475,opts);
var state_27516__$1 = state_27516;
if(cljs.core.truth_(inst_27479)){
var statearr_27538_27564 = state_27516__$1;
(statearr_27538_27564[(1)] = (11));

} else {
var statearr_27539_27565 = state_27516__$1;
(statearr_27539_27565[(1)] = (12));

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
});})(c__22347__auto___27547,ch))
;
return ((function (switch__22044__auto__,c__22347__auto___27547,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22045__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22045__auto____0 = (function (){
var statearr_27543 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27543[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22045__auto__);

(statearr_27543[(1)] = (1));

return statearr_27543;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22045__auto____1 = (function (state_27516){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_27516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e27544){if((e27544 instanceof Object)){
var ex__22048__auto__ = e27544;
var statearr_27545_27566 = state_27516;
(statearr_27545_27566[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27567 = state_27516;
state_27516 = G__27567;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22045__auto__ = function(state_27516){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22045__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22045__auto____1.call(this,state_27516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22045__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22045__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___27547,ch))
})();
var state__22349__auto__ = (function (){var statearr_27546 = f__22348__auto__.call(null);
(statearr_27546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___27547);

return statearr_27546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___27547,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27568_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27568_SHARP_));
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
var base_path_27575 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27575){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27573 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27574 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27574;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27573;
}}catch (e27572){if((e27572 instanceof Error)){
var e = e27572;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27575], null));
} else {
var e = e27572;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27575))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27576){
var map__27583 = p__27576;
var map__27583__$1 = ((((!((map__27583 == null)))?((((map__27583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27583):map__27583);
var opts = map__27583__$1;
var build_id = cljs.core.get.call(null,map__27583__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27583,map__27583__$1,opts,build_id){
return (function (p__27585){
var vec__27586 = p__27585;
var map__27587 = cljs.core.nth.call(null,vec__27586,(0),null);
var map__27587__$1 = ((((!((map__27587 == null)))?((((map__27587.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27587.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27587):map__27587);
var msg = map__27587__$1;
var msg_name = cljs.core.get.call(null,map__27587__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27586,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27586,map__27587,map__27587__$1,msg,msg_name,_,map__27583,map__27583__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27586,map__27587,map__27587__$1,msg,msg_name,_,map__27583,map__27583__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27583,map__27583__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27593){
var vec__27594 = p__27593;
var map__27595 = cljs.core.nth.call(null,vec__27594,(0),null);
var map__27595__$1 = ((((!((map__27595 == null)))?((((map__27595.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27595.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27595):map__27595);
var msg = map__27595__$1;
var msg_name = cljs.core.get.call(null,map__27595__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27594,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27597){
var map__27607 = p__27597;
var map__27607__$1 = ((((!((map__27607 == null)))?((((map__27607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27607):map__27607);
var on_compile_warning = cljs.core.get.call(null,map__27607__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27607__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27607,map__27607__$1,on_compile_warning,on_compile_fail){
return (function (p__27609){
var vec__27610 = p__27609;
var map__27611 = cljs.core.nth.call(null,vec__27610,(0),null);
var map__27611__$1 = ((((!((map__27611 == null)))?((((map__27611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27611):map__27611);
var msg = map__27611__$1;
var msg_name = cljs.core.get.call(null,map__27611__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27610,(1));
var pred__27613 = cljs.core._EQ_;
var expr__27614 = msg_name;
if(cljs.core.truth_(pred__27613.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27614))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27613.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27614))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27607,map__27607__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__,msg_hist,msg_names,msg){
return (function (state_27830){
var state_val_27831 = (state_27830[(1)]);
if((state_val_27831 === (7))){
var inst_27754 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27754)){
var statearr_27832_27878 = state_27830__$1;
(statearr_27832_27878[(1)] = (8));

} else {
var statearr_27833_27879 = state_27830__$1;
(statearr_27833_27879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (20))){
var inst_27824 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27834_27880 = state_27830__$1;
(statearr_27834_27880[(2)] = inst_27824);

(statearr_27834_27880[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (27))){
var inst_27820 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27835_27881 = state_27830__$1;
(statearr_27835_27881[(2)] = inst_27820);

(statearr_27835_27881[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (1))){
var inst_27747 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27747)){
var statearr_27836_27882 = state_27830__$1;
(statearr_27836_27882[(1)] = (2));

} else {
var statearr_27837_27883 = state_27830__$1;
(statearr_27837_27883[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (24))){
var inst_27822 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27838_27884 = state_27830__$1;
(statearr_27838_27884[(2)] = inst_27822);

(statearr_27838_27884[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (4))){
var inst_27828 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27830__$1,inst_27828);
} else {
if((state_val_27831 === (15))){
var inst_27826 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27839_27885 = state_27830__$1;
(statearr_27839_27885[(2)] = inst_27826);

(statearr_27839_27885[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (21))){
var inst_27785 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27840_27886 = state_27830__$1;
(statearr_27840_27886[(2)] = inst_27785);

(statearr_27840_27886[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (31))){
var inst_27809 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27809)){
var statearr_27841_27887 = state_27830__$1;
(statearr_27841_27887[(1)] = (34));

} else {
var statearr_27842_27888 = state_27830__$1;
(statearr_27842_27888[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (32))){
var inst_27818 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27843_27889 = state_27830__$1;
(statearr_27843_27889[(2)] = inst_27818);

(statearr_27843_27889[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (33))){
var inst_27807 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27844_27890 = state_27830__$1;
(statearr_27844_27890[(2)] = inst_27807);

(statearr_27844_27890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (13))){
var inst_27768 = figwheel.client.heads_up.clear.call(null);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(16),inst_27768);
} else {
if((state_val_27831 === (22))){
var inst_27789 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27790 = figwheel.client.heads_up.append_message.call(null,inst_27789);
var state_27830__$1 = state_27830;
var statearr_27845_27891 = state_27830__$1;
(statearr_27845_27891[(2)] = inst_27790);

(statearr_27845_27891[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (36))){
var inst_27816 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27846_27892 = state_27830__$1;
(statearr_27846_27892[(2)] = inst_27816);

(statearr_27846_27892[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (29))){
var inst_27800 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27847_27893 = state_27830__$1;
(statearr_27847_27893[(2)] = inst_27800);

(statearr_27847_27893[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (6))){
var inst_27749 = (state_27830[(7)]);
var state_27830__$1 = state_27830;
var statearr_27848_27894 = state_27830__$1;
(statearr_27848_27894[(2)] = inst_27749);

(statearr_27848_27894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (28))){
var inst_27796 = (state_27830[(2)]);
var inst_27797 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27798 = figwheel.client.heads_up.display_warning.call(null,inst_27797);
var state_27830__$1 = (function (){var statearr_27849 = state_27830;
(statearr_27849[(8)] = inst_27796);

return statearr_27849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(29),inst_27798);
} else {
if((state_val_27831 === (25))){
var inst_27794 = figwheel.client.heads_up.clear.call(null);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(28),inst_27794);
} else {
if((state_val_27831 === (34))){
var inst_27811 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(37),inst_27811);
} else {
if((state_val_27831 === (17))){
var inst_27776 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27850_27895 = state_27830__$1;
(statearr_27850_27895[(2)] = inst_27776);

(statearr_27850_27895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (3))){
var inst_27766 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27766)){
var statearr_27851_27896 = state_27830__$1;
(statearr_27851_27896[(1)] = (13));

} else {
var statearr_27852_27897 = state_27830__$1;
(statearr_27852_27897[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (12))){
var inst_27762 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27853_27898 = state_27830__$1;
(statearr_27853_27898[(2)] = inst_27762);

(statearr_27853_27898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (2))){
var inst_27749 = (state_27830[(7)]);
var inst_27749__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27830__$1 = (function (){var statearr_27854 = state_27830;
(statearr_27854[(7)] = inst_27749__$1);

return statearr_27854;
})();
if(cljs.core.truth_(inst_27749__$1)){
var statearr_27855_27899 = state_27830__$1;
(statearr_27855_27899[(1)] = (5));

} else {
var statearr_27856_27900 = state_27830__$1;
(statearr_27856_27900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (23))){
var inst_27792 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27792)){
var statearr_27857_27901 = state_27830__$1;
(statearr_27857_27901[(1)] = (25));

} else {
var statearr_27858_27902 = state_27830__$1;
(statearr_27858_27902[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (35))){
var state_27830__$1 = state_27830;
var statearr_27859_27903 = state_27830__$1;
(statearr_27859_27903[(2)] = null);

(statearr_27859_27903[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (19))){
var inst_27787 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27787)){
var statearr_27860_27904 = state_27830__$1;
(statearr_27860_27904[(1)] = (22));

} else {
var statearr_27861_27905 = state_27830__$1;
(statearr_27861_27905[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (11))){
var inst_27758 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27862_27906 = state_27830__$1;
(statearr_27862_27906[(2)] = inst_27758);

(statearr_27862_27906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (9))){
var inst_27760 = figwheel.client.heads_up.clear.call(null);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(12),inst_27760);
} else {
if((state_val_27831 === (5))){
var inst_27751 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27830__$1 = state_27830;
var statearr_27863_27907 = state_27830__$1;
(statearr_27863_27907[(2)] = inst_27751);

(statearr_27863_27907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (14))){
var inst_27778 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27778)){
var statearr_27864_27908 = state_27830__$1;
(statearr_27864_27908[(1)] = (18));

} else {
var statearr_27865_27909 = state_27830__$1;
(statearr_27865_27909[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (26))){
var inst_27802 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27830__$1 = state_27830;
if(cljs.core.truth_(inst_27802)){
var statearr_27866_27910 = state_27830__$1;
(statearr_27866_27910[(1)] = (30));

} else {
var statearr_27867_27911 = state_27830__$1;
(statearr_27867_27911[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (16))){
var inst_27770 = (state_27830[(2)]);
var inst_27771 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27772 = figwheel.client.format_messages.call(null,inst_27771);
var inst_27773 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27774 = figwheel.client.heads_up.display_error.call(null,inst_27772,inst_27773);
var state_27830__$1 = (function (){var statearr_27868 = state_27830;
(statearr_27868[(9)] = inst_27770);

return statearr_27868;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(17),inst_27774);
} else {
if((state_val_27831 === (30))){
var inst_27804 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27805 = figwheel.client.heads_up.display_warning.call(null,inst_27804);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(33),inst_27805);
} else {
if((state_val_27831 === (10))){
var inst_27764 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27869_27912 = state_27830__$1;
(statearr_27869_27912[(2)] = inst_27764);

(statearr_27869_27912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (18))){
var inst_27780 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27781 = figwheel.client.format_messages.call(null,inst_27780);
var inst_27782 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27783 = figwheel.client.heads_up.display_error.call(null,inst_27781,inst_27782);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(21),inst_27783);
} else {
if((state_val_27831 === (37))){
var inst_27813 = (state_27830[(2)]);
var state_27830__$1 = state_27830;
var statearr_27870_27913 = state_27830__$1;
(statearr_27870_27913[(2)] = inst_27813);

(statearr_27870_27913[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27831 === (8))){
var inst_27756 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27830__$1 = state_27830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27830__$1,(11),inst_27756);
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
});})(c__22347__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22044__auto__,c__22347__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto____0 = (function (){
var statearr_27874 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27874[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto__);

(statearr_27874[(1)] = (1));

return statearr_27874;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto____1 = (function (state_27830){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_27830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e27875){if((e27875 instanceof Object)){
var ex__22048__auto__ = e27875;
var statearr_27876_27914 = state_27830;
(statearr_27876_27914[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27875;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27915 = state_27830;
state_27830 = G__27915;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto__ = function(state_27830){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto____1.call(this,state_27830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__,msg_hist,msg_names,msg))
})();
var state__22349__auto__ = (function (){var statearr_27877 = f__22348__auto__.call(null);
(statearr_27877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_27877;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__,msg_hist,msg_names,msg))
);

return c__22347__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22347__auto___27978 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto___27978,ch){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto___27978,ch){
return (function (state_27961){
var state_val_27962 = (state_27961[(1)]);
if((state_val_27962 === (1))){
var state_27961__$1 = state_27961;
var statearr_27963_27979 = state_27961__$1;
(statearr_27963_27979[(2)] = null);

(statearr_27963_27979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (2))){
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27961__$1,(4),ch);
} else {
if((state_val_27962 === (3))){
var inst_27959 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27961__$1,inst_27959);
} else {
if((state_val_27962 === (4))){
var inst_27949 = (state_27961[(7)]);
var inst_27949__$1 = (state_27961[(2)]);
var state_27961__$1 = (function (){var statearr_27964 = state_27961;
(statearr_27964[(7)] = inst_27949__$1);

return statearr_27964;
})();
if(cljs.core.truth_(inst_27949__$1)){
var statearr_27965_27980 = state_27961__$1;
(statearr_27965_27980[(1)] = (5));

} else {
var statearr_27966_27981 = state_27961__$1;
(statearr_27966_27981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (5))){
var inst_27949 = (state_27961[(7)]);
var inst_27951 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27949);
var state_27961__$1 = state_27961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27961__$1,(8),inst_27951);
} else {
if((state_val_27962 === (6))){
var state_27961__$1 = state_27961;
var statearr_27967_27982 = state_27961__$1;
(statearr_27967_27982[(2)] = null);

(statearr_27967_27982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (7))){
var inst_27957 = (state_27961[(2)]);
var state_27961__$1 = state_27961;
var statearr_27968_27983 = state_27961__$1;
(statearr_27968_27983[(2)] = inst_27957);

(statearr_27968_27983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27962 === (8))){
var inst_27953 = (state_27961[(2)]);
var state_27961__$1 = (function (){var statearr_27969 = state_27961;
(statearr_27969[(8)] = inst_27953);

return statearr_27969;
})();
var statearr_27970_27984 = state_27961__$1;
(statearr_27970_27984[(2)] = null);

(statearr_27970_27984[(1)] = (2));


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
});})(c__22347__auto___27978,ch))
;
return ((function (switch__22044__auto__,c__22347__auto___27978,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22045__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22045__auto____0 = (function (){
var statearr_27974 = [null,null,null,null,null,null,null,null,null];
(statearr_27974[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22045__auto__);

(statearr_27974[(1)] = (1));

return statearr_27974;
});
var figwheel$client$heads_up_plugin_$_state_machine__22045__auto____1 = (function (state_27961){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_27961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e27975){if((e27975 instanceof Object)){
var ex__22048__auto__ = e27975;
var statearr_27976_27985 = state_27961;
(statearr_27976_27985[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27961);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27986 = state_27961;
state_27961 = G__27986;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22045__auto__ = function(state_27961){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22045__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22045__auto____1.call(this,state_27961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22045__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22045__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto___27978,ch))
})();
var state__22349__auto__ = (function (){var statearr_27977 = f__22348__auto__.call(null);
(statearr_27977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto___27978);

return statearr_27977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto___27978,ch))
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
var c__22347__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22347__auto__){
return (function (){
var f__22348__auto__ = (function (){var switch__22044__auto__ = ((function (c__22347__auto__){
return (function (state_28007){
var state_val_28008 = (state_28007[(1)]);
if((state_val_28008 === (1))){
var inst_28002 = cljs.core.async.timeout.call(null,(3000));
var state_28007__$1 = state_28007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28007__$1,(2),inst_28002);
} else {
if((state_val_28008 === (2))){
var inst_28004 = (state_28007[(2)]);
var inst_28005 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_28007__$1 = (function (){var statearr_28009 = state_28007;
(statearr_28009[(7)] = inst_28004);

return statearr_28009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28007__$1,inst_28005);
} else {
return null;
}
}
});})(c__22347__auto__))
;
return ((function (switch__22044__auto__,c__22347__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22045__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22045__auto____0 = (function (){
var statearr_28013 = [null,null,null,null,null,null,null,null];
(statearr_28013[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22045__auto__);

(statearr_28013[(1)] = (1));

return statearr_28013;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22045__auto____1 = (function (state_28007){
while(true){
var ret_value__22046__auto__ = (function (){try{while(true){
var result__22047__auto__ = switch__22044__auto__.call(null,state_28007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22047__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22047__auto__;
}
break;
}
}catch (e28014){if((e28014 instanceof Object)){
var ex__22048__auto__ = e28014;
var statearr_28015_28017 = state_28007;
(statearr_28015_28017[(5)] = ex__22048__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22046__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28018 = state_28007;
state_28007 = G__28018;
continue;
} else {
return ret_value__22046__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22045__auto__ = function(state_28007){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22045__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22045__auto____1.call(this,state_28007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22045__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22045__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22045__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22045__auto__;
})()
;})(switch__22044__auto__,c__22347__auto__))
})();
var state__22349__auto__ = (function (){var statearr_28016 = f__22348__auto__.call(null);
(statearr_28016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22347__auto__);

return statearr_28016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22349__auto__);
});})(c__22347__auto__))
);

return c__22347__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__28019){
var map__28026 = p__28019;
var map__28026__$1 = ((((!((map__28026 == null)))?((((map__28026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28026):map__28026);
var ed = map__28026__$1;
var formatted_exception = cljs.core.get.call(null,map__28026__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__28026__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__28026__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__28028_28032 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__28029_28033 = null;
var count__28030_28034 = (0);
var i__28031_28035 = (0);
while(true){
if((i__28031_28035 < count__28030_28034)){
var msg_28036 = cljs.core._nth.call(null,chunk__28029_28033,i__28031_28035);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28036);

var G__28037 = seq__28028_28032;
var G__28038 = chunk__28029_28033;
var G__28039 = count__28030_28034;
var G__28040 = (i__28031_28035 + (1));
seq__28028_28032 = G__28037;
chunk__28029_28033 = G__28038;
count__28030_28034 = G__28039;
i__28031_28035 = G__28040;
continue;
} else {
var temp__4657__auto___28041 = cljs.core.seq.call(null,seq__28028_28032);
if(temp__4657__auto___28041){
var seq__28028_28042__$1 = temp__4657__auto___28041;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28028_28042__$1)){
var c__18591__auto___28043 = cljs.core.chunk_first.call(null,seq__28028_28042__$1);
var G__28044 = cljs.core.chunk_rest.call(null,seq__28028_28042__$1);
var G__28045 = c__18591__auto___28043;
var G__28046 = cljs.core.count.call(null,c__18591__auto___28043);
var G__28047 = (0);
seq__28028_28032 = G__28044;
chunk__28029_28033 = G__28045;
count__28030_28034 = G__28046;
i__28031_28035 = G__28047;
continue;
} else {
var msg_28048 = cljs.core.first.call(null,seq__28028_28042__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_28048);

var G__28049 = cljs.core.next.call(null,seq__28028_28042__$1);
var G__28050 = null;
var G__28051 = (0);
var G__28052 = (0);
seq__28028_28032 = G__28049;
chunk__28029_28033 = G__28050;
count__28030_28034 = G__28051;
i__28031_28035 = G__28052;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__28053){
var map__28056 = p__28053;
var map__28056__$1 = ((((!((map__28056 == null)))?((((map__28056.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28056.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28056):map__28056);
var w = map__28056__$1;
var message = cljs.core.get.call(null,map__28056__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__17776__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__17776__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__17776__auto__;
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
var seq__28064 = cljs.core.seq.call(null,plugins);
var chunk__28065 = null;
var count__28066 = (0);
var i__28067 = (0);
while(true){
if((i__28067 < count__28066)){
var vec__28068 = cljs.core._nth.call(null,chunk__28065,i__28067);
var k = cljs.core.nth.call(null,vec__28068,(0),null);
var plugin = cljs.core.nth.call(null,vec__28068,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28070 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28064,chunk__28065,count__28066,i__28067,pl_28070,vec__28068,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_28070.call(null,msg_hist);
});})(seq__28064,chunk__28065,count__28066,i__28067,pl_28070,vec__28068,k,plugin))
);
} else {
}

var G__28071 = seq__28064;
var G__28072 = chunk__28065;
var G__28073 = count__28066;
var G__28074 = (i__28067 + (1));
seq__28064 = G__28071;
chunk__28065 = G__28072;
count__28066 = G__28073;
i__28067 = G__28074;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28064);
if(temp__4657__auto__){
var seq__28064__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28064__$1)){
var c__18591__auto__ = cljs.core.chunk_first.call(null,seq__28064__$1);
var G__28075 = cljs.core.chunk_rest.call(null,seq__28064__$1);
var G__28076 = c__18591__auto__;
var G__28077 = cljs.core.count.call(null,c__18591__auto__);
var G__28078 = (0);
seq__28064 = G__28075;
chunk__28065 = G__28076;
count__28066 = G__28077;
i__28067 = G__28078;
continue;
} else {
var vec__28069 = cljs.core.first.call(null,seq__28064__$1);
var k = cljs.core.nth.call(null,vec__28069,(0),null);
var plugin = cljs.core.nth.call(null,vec__28069,(1),null);
if(cljs.core.truth_(plugin)){
var pl_28079 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__28064,chunk__28065,count__28066,i__28067,pl_28079,vec__28069,k,plugin,seq__28064__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_28079.call(null,msg_hist);
});})(seq__28064,chunk__28065,count__28066,i__28067,pl_28079,vec__28069,k,plugin,seq__28064__$1,temp__4657__auto__))
);
} else {
}

var G__28080 = cljs.core.next.call(null,seq__28064__$1);
var G__28081 = null;
var G__28082 = (0);
var G__28083 = (0);
seq__28064 = G__28080;
chunk__28065 = G__28081;
count__28066 = G__28082;
i__28067 = G__28083;
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
var args28084 = [];
var len__18846__auto___28087 = arguments.length;
var i__18847__auto___28088 = (0);
while(true){
if((i__18847__auto___28088 < len__18846__auto___28087)){
args28084.push((arguments[i__18847__auto___28088]));

var G__28089 = (i__18847__auto___28088 + (1));
i__18847__auto___28088 = G__28089;
continue;
} else {
}
break;
}

var G__28086 = args28084.length;
switch (G__28086) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28084.length)].join('')));

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
var args__18853__auto__ = [];
var len__18846__auto___28095 = arguments.length;
var i__18847__auto___28096 = (0);
while(true){
if((i__18847__auto___28096 < len__18846__auto___28095)){
args__18853__auto__.push((arguments[i__18847__auto___28096]));

var G__28097 = (i__18847__auto___28096 + (1));
i__18847__auto___28096 = G__28097;
continue;
} else {
}
break;
}

var argseq__18854__auto__ = ((((0) < args__18853__auto__.length))?(new cljs.core.IndexedSeq(args__18853__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__18854__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__28092){
var map__28093 = p__28092;
var map__28093__$1 = ((((!((map__28093 == null)))?((((map__28093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28093):map__28093);
var opts = map__28093__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq28091){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28091));
});

//# sourceMappingURL=client.js.map