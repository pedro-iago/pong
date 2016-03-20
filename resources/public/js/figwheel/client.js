// Compiled by ClojureScript 1.7.170 {}
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
var pred__26888 = cljs.core._EQ_;
var expr__26889 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26888.call(null,"true",expr__26889))){
return true;
} else {
if(cljs.core.truth_(pred__26888.call(null,"false",expr__26889))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26889)].join('')));
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
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26891__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26891 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26892__i = 0, G__26892__a = new Array(arguments.length -  0);
while (G__26892__i < G__26892__a.length) {G__26892__a[G__26892__i] = arguments[G__26892__i + 0]; ++G__26892__i;}
  args = new cljs.core.IndexedSeq(G__26892__a,0);
} 
return G__26891__delegate.call(this,args);};
G__26891.cljs$lang$maxFixedArity = 0;
G__26891.cljs$lang$applyTo = (function (arglist__26893){
var args = cljs.core.seq(arglist__26893);
return G__26891__delegate(args);
});
G__26891.cljs$core$IFn$_invoke$arity$variadic = G__26891__delegate;
return G__26891;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26894){
var map__26897 = p__26894;
var map__26897__$1 = ((((!((map__26897 == null)))?((((map__26897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26897):map__26897);
var message = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26897__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
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
var c__20821__auto___27059 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___27059,ch){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___27059,ch){
return (function (state_27028){
var state_val_27029 = (state_27028[(1)]);
if((state_val_27029 === (7))){
var inst_27024 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27030_27060 = state_27028__$1;
(statearr_27030_27060[(2)] = inst_27024);

(statearr_27030_27060[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (1))){
var state_27028__$1 = state_27028;
var statearr_27031_27061 = state_27028__$1;
(statearr_27031_27061[(2)] = null);

(statearr_27031_27061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (4))){
var inst_26981 = (state_27028[(7)]);
var inst_26981__$1 = (state_27028[(2)]);
var state_27028__$1 = (function (){var statearr_27032 = state_27028;
(statearr_27032[(7)] = inst_26981__$1);

return statearr_27032;
})();
if(cljs.core.truth_(inst_26981__$1)){
var statearr_27033_27062 = state_27028__$1;
(statearr_27033_27062[(1)] = (5));

} else {
var statearr_27034_27063 = state_27028__$1;
(statearr_27034_27063[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (15))){
var inst_26988 = (state_27028[(8)]);
var inst_27003 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26988);
var inst_27004 = cljs.core.first.call(null,inst_27003);
var inst_27005 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_27004);
var inst_27006 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_27005)].join('');
var inst_27007 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_27006);
var state_27028__$1 = state_27028;
var statearr_27035_27064 = state_27028__$1;
(statearr_27035_27064[(2)] = inst_27007);

(statearr_27035_27064[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (13))){
var inst_27012 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27036_27065 = state_27028__$1;
(statearr_27036_27065[(2)] = inst_27012);

(statearr_27036_27065[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (6))){
var state_27028__$1 = state_27028;
var statearr_27037_27066 = state_27028__$1;
(statearr_27037_27066[(2)] = null);

(statearr_27037_27066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (17))){
var inst_27010 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27038_27067 = state_27028__$1;
(statearr_27038_27067[(2)] = inst_27010);

(statearr_27038_27067[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (3))){
var inst_27026 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27028__$1,inst_27026);
} else {
if((state_val_27029 === (12))){
var inst_26987 = (state_27028[(9)]);
var inst_27001 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26987,opts);
var state_27028__$1 = state_27028;
if(cljs.core.truth_(inst_27001)){
var statearr_27039_27068 = state_27028__$1;
(statearr_27039_27068[(1)] = (15));

} else {
var statearr_27040_27069 = state_27028__$1;
(statearr_27040_27069[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (2))){
var state_27028__$1 = state_27028;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27028__$1,(4),ch);
} else {
if((state_val_27029 === (11))){
var inst_26988 = (state_27028[(8)]);
var inst_26993 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26994 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26988);
var inst_26995 = cljs.core.async.timeout.call(null,(1000));
var inst_26996 = [inst_26994,inst_26995];
var inst_26997 = (new cljs.core.PersistentVector(null,2,(5),inst_26993,inst_26996,null));
var state_27028__$1 = state_27028;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27028__$1,(14),inst_26997);
} else {
if((state_val_27029 === (9))){
var inst_26988 = (state_27028[(8)]);
var inst_27014 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_27015 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26988);
var inst_27016 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27015);
var inst_27017 = [cljs.core.str("Not loading: "),cljs.core.str(inst_27016)].join('');
var inst_27018 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_27017);
var state_27028__$1 = (function (){var statearr_27041 = state_27028;
(statearr_27041[(10)] = inst_27014);

return statearr_27041;
})();
var statearr_27042_27070 = state_27028__$1;
(statearr_27042_27070[(2)] = inst_27018);

(statearr_27042_27070[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (5))){
var inst_26981 = (state_27028[(7)]);
var inst_26983 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26984 = (new cljs.core.PersistentArrayMap(null,2,inst_26983,null));
var inst_26985 = (new cljs.core.PersistentHashSet(null,inst_26984,null));
var inst_26986 = figwheel.client.focus_msgs.call(null,inst_26985,inst_26981);
var inst_26987 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26986);
var inst_26988 = cljs.core.first.call(null,inst_26986);
var inst_26989 = figwheel.client.autoload_QMARK_.call(null);
var state_27028__$1 = (function (){var statearr_27043 = state_27028;
(statearr_27043[(9)] = inst_26987);

(statearr_27043[(8)] = inst_26988);

return statearr_27043;
})();
if(cljs.core.truth_(inst_26989)){
var statearr_27044_27071 = state_27028__$1;
(statearr_27044_27071[(1)] = (8));

} else {
var statearr_27045_27072 = state_27028__$1;
(statearr_27045_27072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (14))){
var inst_26999 = (state_27028[(2)]);
var state_27028__$1 = state_27028;
var statearr_27046_27073 = state_27028__$1;
(statearr_27046_27073[(2)] = inst_26999);

(statearr_27046_27073[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (16))){
var state_27028__$1 = state_27028;
var statearr_27047_27074 = state_27028__$1;
(statearr_27047_27074[(2)] = null);

(statearr_27047_27074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (10))){
var inst_27020 = (state_27028[(2)]);
var state_27028__$1 = (function (){var statearr_27048 = state_27028;
(statearr_27048[(11)] = inst_27020);

return statearr_27048;
})();
var statearr_27049_27075 = state_27028__$1;
(statearr_27049_27075[(2)] = null);

(statearr_27049_27075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27029 === (8))){
var inst_26987 = (state_27028[(9)]);
var inst_26991 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26987,opts);
var state_27028__$1 = state_27028;
if(cljs.core.truth_(inst_26991)){
var statearr_27050_27076 = state_27028__$1;
(statearr_27050_27076[(1)] = (11));

} else {
var statearr_27051_27077 = state_27028__$1;
(statearr_27051_27077[(1)] = (12));

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
});})(c__20821__auto___27059,ch))
;
return ((function (switch__20709__auto__,c__20821__auto___27059,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20710__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20710__auto____0 = (function (){
var statearr_27055 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27055[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20710__auto__);

(statearr_27055[(1)] = (1));

return statearr_27055;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20710__auto____1 = (function (state_27028){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_27028);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e27056){if((e27056 instanceof Object)){
var ex__20713__auto__ = e27056;
var statearr_27057_27078 = state_27028;
(statearr_27057_27078[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27028);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27056;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27079 = state_27028;
state_27028 = G__27079;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20710__auto__ = function(state_27028){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20710__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20710__auto____1.call(this,state_27028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20710__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20710__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___27059,ch))
})();
var state__20823__auto__ = (function (){var statearr_27058 = f__20822__auto__.call(null);
(statearr_27058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___27059);

return statearr_27058;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___27059,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__27080_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__27080_SHARP_));
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
var base_path_27087 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_27087){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_27085 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_27086 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_27085,_STAR_print_newline_STAR_27086,base_path_27087){
return (function() { 
var G__27088__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__27088 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27089__i = 0, G__27089__a = new Array(arguments.length -  0);
while (G__27089__i < G__27089__a.length) {G__27089__a[G__27089__i] = arguments[G__27089__i + 0]; ++G__27089__i;}
  args = new cljs.core.IndexedSeq(G__27089__a,0);
} 
return G__27088__delegate.call(this,args);};
G__27088.cljs$lang$maxFixedArity = 0;
G__27088.cljs$lang$applyTo = (function (arglist__27090){
var args = cljs.core.seq(arglist__27090);
return G__27088__delegate(args);
});
G__27088.cljs$core$IFn$_invoke$arity$variadic = G__27088__delegate;
return G__27088;
})()
;})(_STAR_print_fn_STAR_27085,_STAR_print_newline_STAR_27086,base_path_27087))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_27086;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_27085;
}}catch (e27084){if((e27084 instanceof Error)){
var e = e27084;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_27087], null));
} else {
var e = e27084;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_27087))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__27091){
var map__27098 = p__27091;
var map__27098__$1 = ((((!((map__27098 == null)))?((((map__27098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27098):map__27098);
var opts = map__27098__$1;
var build_id = cljs.core.get.call(null,map__27098__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27098,map__27098__$1,opts,build_id){
return (function (p__27100){
var vec__27101 = p__27100;
var map__27102 = cljs.core.nth.call(null,vec__27101,(0),null);
var map__27102__$1 = ((((!((map__27102 == null)))?((((map__27102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27102):map__27102);
var msg = map__27102__$1;
var msg_name = cljs.core.get.call(null,map__27102__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27101,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27101,map__27102,map__27102__$1,msg,msg_name,_,map__27098,map__27098__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27101,map__27102,map__27102__$1,msg,msg_name,_,map__27098,map__27098__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27098,map__27098__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27108){
var vec__27109 = p__27108;
var map__27110 = cljs.core.nth.call(null,vec__27109,(0),null);
var map__27110__$1 = ((((!((map__27110 == null)))?((((map__27110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27110):map__27110);
var msg = map__27110__$1;
var msg_name = cljs.core.get.call(null,map__27110__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27109,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27112){
var map__27122 = p__27112;
var map__27122__$1 = ((((!((map__27122 == null)))?((((map__27122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27122):map__27122);
var on_compile_warning = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27122__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27122,map__27122__$1,on_compile_warning,on_compile_fail){
return (function (p__27124){
var vec__27125 = p__27124;
var map__27126 = cljs.core.nth.call(null,vec__27125,(0),null);
var map__27126__$1 = ((((!((map__27126 == null)))?((((map__27126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27126):map__27126);
var msg = map__27126__$1;
var msg_name = cljs.core.get.call(null,map__27126__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27125,(1));
var pred__27128 = cljs.core._EQ_;
var expr__27129 = msg_name;
if(cljs.core.truth_(pred__27128.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27129))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27128.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27129))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27122,map__27122__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__,msg_hist,msg_names,msg){
return (function (state_27345){
var state_val_27346 = (state_27345[(1)]);
if((state_val_27346 === (7))){
var inst_27269 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27269)){
var statearr_27347_27393 = state_27345__$1;
(statearr_27347_27393[(1)] = (8));

} else {
var statearr_27348_27394 = state_27345__$1;
(statearr_27348_27394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (20))){
var inst_27339 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27349_27395 = state_27345__$1;
(statearr_27349_27395[(2)] = inst_27339);

(statearr_27349_27395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (27))){
var inst_27335 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27350_27396 = state_27345__$1;
(statearr_27350_27396[(2)] = inst_27335);

(statearr_27350_27396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (1))){
var inst_27262 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27262)){
var statearr_27351_27397 = state_27345__$1;
(statearr_27351_27397[(1)] = (2));

} else {
var statearr_27352_27398 = state_27345__$1;
(statearr_27352_27398[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (24))){
var inst_27337 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27353_27399 = state_27345__$1;
(statearr_27353_27399[(2)] = inst_27337);

(statearr_27353_27399[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (4))){
var inst_27343 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27345__$1,inst_27343);
} else {
if((state_val_27346 === (15))){
var inst_27341 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27354_27400 = state_27345__$1;
(statearr_27354_27400[(2)] = inst_27341);

(statearr_27354_27400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (21))){
var inst_27300 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27355_27401 = state_27345__$1;
(statearr_27355_27401[(2)] = inst_27300);

(statearr_27355_27401[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (31))){
var inst_27324 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27324)){
var statearr_27356_27402 = state_27345__$1;
(statearr_27356_27402[(1)] = (34));

} else {
var statearr_27357_27403 = state_27345__$1;
(statearr_27357_27403[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (32))){
var inst_27333 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27358_27404 = state_27345__$1;
(statearr_27358_27404[(2)] = inst_27333);

(statearr_27358_27404[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (33))){
var inst_27322 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27359_27405 = state_27345__$1;
(statearr_27359_27405[(2)] = inst_27322);

(statearr_27359_27405[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (13))){
var inst_27283 = figwheel.client.heads_up.clear.call(null);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(16),inst_27283);
} else {
if((state_val_27346 === (22))){
var inst_27304 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27305 = figwheel.client.heads_up.append_message.call(null,inst_27304);
var state_27345__$1 = state_27345;
var statearr_27360_27406 = state_27345__$1;
(statearr_27360_27406[(2)] = inst_27305);

(statearr_27360_27406[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (36))){
var inst_27331 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27361_27407 = state_27345__$1;
(statearr_27361_27407[(2)] = inst_27331);

(statearr_27361_27407[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (29))){
var inst_27315 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27362_27408 = state_27345__$1;
(statearr_27362_27408[(2)] = inst_27315);

(statearr_27362_27408[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (6))){
var inst_27264 = (state_27345[(7)]);
var state_27345__$1 = state_27345;
var statearr_27363_27409 = state_27345__$1;
(statearr_27363_27409[(2)] = inst_27264);

(statearr_27363_27409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (28))){
var inst_27311 = (state_27345[(2)]);
var inst_27312 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27313 = figwheel.client.heads_up.display_warning.call(null,inst_27312);
var state_27345__$1 = (function (){var statearr_27364 = state_27345;
(statearr_27364[(8)] = inst_27311);

return statearr_27364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(29),inst_27313);
} else {
if((state_val_27346 === (25))){
var inst_27309 = figwheel.client.heads_up.clear.call(null);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(28),inst_27309);
} else {
if((state_val_27346 === (34))){
var inst_27326 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(37),inst_27326);
} else {
if((state_val_27346 === (17))){
var inst_27291 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27365_27410 = state_27345__$1;
(statearr_27365_27410[(2)] = inst_27291);

(statearr_27365_27410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (3))){
var inst_27281 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27281)){
var statearr_27366_27411 = state_27345__$1;
(statearr_27366_27411[(1)] = (13));

} else {
var statearr_27367_27412 = state_27345__$1;
(statearr_27367_27412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (12))){
var inst_27277 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27368_27413 = state_27345__$1;
(statearr_27368_27413[(2)] = inst_27277);

(statearr_27368_27413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (2))){
var inst_27264 = (state_27345[(7)]);
var inst_27264__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27345__$1 = (function (){var statearr_27369 = state_27345;
(statearr_27369[(7)] = inst_27264__$1);

return statearr_27369;
})();
if(cljs.core.truth_(inst_27264__$1)){
var statearr_27370_27414 = state_27345__$1;
(statearr_27370_27414[(1)] = (5));

} else {
var statearr_27371_27415 = state_27345__$1;
(statearr_27371_27415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (23))){
var inst_27307 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27307)){
var statearr_27372_27416 = state_27345__$1;
(statearr_27372_27416[(1)] = (25));

} else {
var statearr_27373_27417 = state_27345__$1;
(statearr_27373_27417[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (35))){
var state_27345__$1 = state_27345;
var statearr_27374_27418 = state_27345__$1;
(statearr_27374_27418[(2)] = null);

(statearr_27374_27418[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (19))){
var inst_27302 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27302)){
var statearr_27375_27419 = state_27345__$1;
(statearr_27375_27419[(1)] = (22));

} else {
var statearr_27376_27420 = state_27345__$1;
(statearr_27376_27420[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (11))){
var inst_27273 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27377_27421 = state_27345__$1;
(statearr_27377_27421[(2)] = inst_27273);

(statearr_27377_27421[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (9))){
var inst_27275 = figwheel.client.heads_up.clear.call(null);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(12),inst_27275);
} else {
if((state_val_27346 === (5))){
var inst_27266 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27345__$1 = state_27345;
var statearr_27378_27422 = state_27345__$1;
(statearr_27378_27422[(2)] = inst_27266);

(statearr_27378_27422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (14))){
var inst_27293 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27293)){
var statearr_27379_27423 = state_27345__$1;
(statearr_27379_27423[(1)] = (18));

} else {
var statearr_27380_27424 = state_27345__$1;
(statearr_27380_27424[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (26))){
var inst_27317 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27345__$1 = state_27345;
if(cljs.core.truth_(inst_27317)){
var statearr_27381_27425 = state_27345__$1;
(statearr_27381_27425[(1)] = (30));

} else {
var statearr_27382_27426 = state_27345__$1;
(statearr_27382_27426[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (16))){
var inst_27285 = (state_27345[(2)]);
var inst_27286 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27287 = figwheel.client.format_messages.call(null,inst_27286);
var inst_27288 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27289 = figwheel.client.heads_up.display_error.call(null,inst_27287,inst_27288);
var state_27345__$1 = (function (){var statearr_27383 = state_27345;
(statearr_27383[(9)] = inst_27285);

return statearr_27383;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(17),inst_27289);
} else {
if((state_val_27346 === (30))){
var inst_27319 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27320 = figwheel.client.heads_up.display_warning.call(null,inst_27319);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(33),inst_27320);
} else {
if((state_val_27346 === (10))){
var inst_27279 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27384_27427 = state_27345__$1;
(statearr_27384_27427[(2)] = inst_27279);

(statearr_27384_27427[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (18))){
var inst_27295 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27296 = figwheel.client.format_messages.call(null,inst_27295);
var inst_27297 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27298 = figwheel.client.heads_up.display_error.call(null,inst_27296,inst_27297);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(21),inst_27298);
} else {
if((state_val_27346 === (37))){
var inst_27328 = (state_27345[(2)]);
var state_27345__$1 = state_27345;
var statearr_27385_27428 = state_27345__$1;
(statearr_27385_27428[(2)] = inst_27328);

(statearr_27385_27428[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27346 === (8))){
var inst_27271 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27345__$1 = state_27345;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27345__$1,(11),inst_27271);
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
});})(c__20821__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20709__auto__,c__20821__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto____0 = (function (){
var statearr_27389 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27389[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto__);

(statearr_27389[(1)] = (1));

return statearr_27389;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto____1 = (function (state_27345){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_27345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e27390){if((e27390 instanceof Object)){
var ex__20713__auto__ = e27390;
var statearr_27391_27429 = state_27345;
(statearr_27391_27429[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27345;
state_27345 = G__27430;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto__ = function(state_27345){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto____1.call(this,state_27345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__,msg_hist,msg_names,msg))
})();
var state__20823__auto__ = (function (){var statearr_27392 = f__20822__auto__.call(null);
(statearr_27392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_27392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__,msg_hist,msg_names,msg))
);

return c__20821__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20821__auto___27493 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto___27493,ch){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto___27493,ch){
return (function (state_27476){
var state_val_27477 = (state_27476[(1)]);
if((state_val_27477 === (1))){
var state_27476__$1 = state_27476;
var statearr_27478_27494 = state_27476__$1;
(statearr_27478_27494[(2)] = null);

(statearr_27478_27494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (2))){
var state_27476__$1 = state_27476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27476__$1,(4),ch);
} else {
if((state_val_27477 === (3))){
var inst_27474 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27476__$1,inst_27474);
} else {
if((state_val_27477 === (4))){
var inst_27464 = (state_27476[(7)]);
var inst_27464__$1 = (state_27476[(2)]);
var state_27476__$1 = (function (){var statearr_27479 = state_27476;
(statearr_27479[(7)] = inst_27464__$1);

return statearr_27479;
})();
if(cljs.core.truth_(inst_27464__$1)){
var statearr_27480_27495 = state_27476__$1;
(statearr_27480_27495[(1)] = (5));

} else {
var statearr_27481_27496 = state_27476__$1;
(statearr_27481_27496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (5))){
var inst_27464 = (state_27476[(7)]);
var inst_27466 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27464);
var state_27476__$1 = state_27476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27476__$1,(8),inst_27466);
} else {
if((state_val_27477 === (6))){
var state_27476__$1 = state_27476;
var statearr_27482_27497 = state_27476__$1;
(statearr_27482_27497[(2)] = null);

(statearr_27482_27497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (7))){
var inst_27472 = (state_27476[(2)]);
var state_27476__$1 = state_27476;
var statearr_27483_27498 = state_27476__$1;
(statearr_27483_27498[(2)] = inst_27472);

(statearr_27483_27498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27477 === (8))){
var inst_27468 = (state_27476[(2)]);
var state_27476__$1 = (function (){var statearr_27484 = state_27476;
(statearr_27484[(8)] = inst_27468);

return statearr_27484;
})();
var statearr_27485_27499 = state_27476__$1;
(statearr_27485_27499[(2)] = null);

(statearr_27485_27499[(1)] = (2));


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
});})(c__20821__auto___27493,ch))
;
return ((function (switch__20709__auto__,c__20821__auto___27493,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20710__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20710__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null,null,null];
(statearr_27489[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20710__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var figwheel$client$heads_up_plugin_$_state_machine__20710__auto____1 = (function (state_27476){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_27476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__20713__auto__ = e27490;
var statearr_27491_27500 = state_27476;
(statearr_27491_27500[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27501 = state_27476;
state_27476 = G__27501;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20710__auto__ = function(state_27476){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20710__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20710__auto____1.call(this,state_27476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20710__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20710__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto___27493,ch))
})();
var state__20823__auto__ = (function (){var statearr_27492 = f__20822__auto__.call(null);
(statearr_27492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto___27493);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto___27493,ch))
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
var c__20821__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20821__auto__){
return (function (){
var f__20822__auto__ = (function (){var switch__20709__auto__ = ((function (c__20821__auto__){
return (function (state_27522){
var state_val_27523 = (state_27522[(1)]);
if((state_val_27523 === (1))){
var inst_27517 = cljs.core.async.timeout.call(null,(3000));
var state_27522__$1 = state_27522;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27522__$1,(2),inst_27517);
} else {
if((state_val_27523 === (2))){
var inst_27519 = (state_27522[(2)]);
var inst_27520 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27522__$1 = (function (){var statearr_27524 = state_27522;
(statearr_27524[(7)] = inst_27519);

return statearr_27524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27522__$1,inst_27520);
} else {
return null;
}
}
});})(c__20821__auto__))
;
return ((function (switch__20709__auto__,c__20821__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20710__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20710__auto____0 = (function (){
var statearr_27528 = [null,null,null,null,null,null,null,null];
(statearr_27528[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20710__auto__);

(statearr_27528[(1)] = (1));

return statearr_27528;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20710__auto____1 = (function (state_27522){
while(true){
var ret_value__20711__auto__ = (function (){try{while(true){
var result__20712__auto__ = switch__20709__auto__.call(null,state_27522);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20712__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20712__auto__;
}
break;
}
}catch (e27529){if((e27529 instanceof Object)){
var ex__20713__auto__ = e27529;
var statearr_27530_27532 = state_27522;
(statearr_27530_27532[(5)] = ex__20713__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27522);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27529;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20711__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27533 = state_27522;
state_27522 = G__27533;
continue;
} else {
return ret_value__20711__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20710__auto__ = function(state_27522){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20710__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20710__auto____1.call(this,state_27522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20710__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20710__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20710__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20710__auto__;
})()
;})(switch__20709__auto__,c__20821__auto__))
})();
var state__20823__auto__ = (function (){var statearr_27531 = f__20822__auto__.call(null);
(statearr_27531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20821__auto__);

return statearr_27531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20823__auto__);
});})(c__20821__auto__))
);

return c__20821__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27534){
var map__27541 = p__27534;
var map__27541__$1 = ((((!((map__27541 == null)))?((((map__27541.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27541.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27541):map__27541);
var ed = map__27541__$1;
var formatted_exception = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27541__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27543_27547 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27544_27548 = null;
var count__27545_27549 = (0);
var i__27546_27550 = (0);
while(true){
if((i__27546_27550 < count__27545_27549)){
var msg_27551 = cljs.core._nth.call(null,chunk__27544_27548,i__27546_27550);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27551);

var G__27552 = seq__27543_27547;
var G__27553 = chunk__27544_27548;
var G__27554 = count__27545_27549;
var G__27555 = (i__27546_27550 + (1));
seq__27543_27547 = G__27552;
chunk__27544_27548 = G__27553;
count__27545_27549 = G__27554;
i__27546_27550 = G__27555;
continue;
} else {
var temp__4425__auto___27556 = cljs.core.seq.call(null,seq__27543_27547);
if(temp__4425__auto___27556){
var seq__27543_27557__$1 = temp__4425__auto___27556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27543_27557__$1)){
var c__17574__auto___27558 = cljs.core.chunk_first.call(null,seq__27543_27557__$1);
var G__27559 = cljs.core.chunk_rest.call(null,seq__27543_27557__$1);
var G__27560 = c__17574__auto___27558;
var G__27561 = cljs.core.count.call(null,c__17574__auto___27558);
var G__27562 = (0);
seq__27543_27547 = G__27559;
chunk__27544_27548 = G__27560;
count__27545_27549 = G__27561;
i__27546_27550 = G__27562;
continue;
} else {
var msg_27563 = cljs.core.first.call(null,seq__27543_27557__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27563);

var G__27564 = cljs.core.next.call(null,seq__27543_27557__$1);
var G__27565 = null;
var G__27566 = (0);
var G__27567 = (0);
seq__27543_27547 = G__27564;
chunk__27544_27548 = G__27565;
count__27545_27549 = G__27566;
i__27546_27550 = G__27567;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27568){
var map__27571 = p__27568;
var map__27571__$1 = ((((!((map__27571 == null)))?((((map__27571.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27571.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27571):map__27571);
var w = map__27571__$1;
var message = cljs.core.get.call(null,map__27571__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
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
var seq__27579 = cljs.core.seq.call(null,plugins);
var chunk__27580 = null;
var count__27581 = (0);
var i__27582 = (0);
while(true){
if((i__27582 < count__27581)){
var vec__27583 = cljs.core._nth.call(null,chunk__27580,i__27582);
var k = cljs.core.nth.call(null,vec__27583,(0),null);
var plugin = cljs.core.nth.call(null,vec__27583,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27585 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27579,chunk__27580,count__27581,i__27582,pl_27585,vec__27583,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27585.call(null,msg_hist);
});})(seq__27579,chunk__27580,count__27581,i__27582,pl_27585,vec__27583,k,plugin))
);
} else {
}

var G__27586 = seq__27579;
var G__27587 = chunk__27580;
var G__27588 = count__27581;
var G__27589 = (i__27582 + (1));
seq__27579 = G__27586;
chunk__27580 = G__27587;
count__27581 = G__27588;
i__27582 = G__27589;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27579);
if(temp__4425__auto__){
var seq__27579__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27579__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__27579__$1);
var G__27590 = cljs.core.chunk_rest.call(null,seq__27579__$1);
var G__27591 = c__17574__auto__;
var G__27592 = cljs.core.count.call(null,c__17574__auto__);
var G__27593 = (0);
seq__27579 = G__27590;
chunk__27580 = G__27591;
count__27581 = G__27592;
i__27582 = G__27593;
continue;
} else {
var vec__27584 = cljs.core.first.call(null,seq__27579__$1);
var k = cljs.core.nth.call(null,vec__27584,(0),null);
var plugin = cljs.core.nth.call(null,vec__27584,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27594 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27579,chunk__27580,count__27581,i__27582,pl_27594,vec__27584,k,plugin,seq__27579__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27594.call(null,msg_hist);
});})(seq__27579,chunk__27580,count__27581,i__27582,pl_27594,vec__27584,k,plugin,seq__27579__$1,temp__4425__auto__))
);
} else {
}

var G__27595 = cljs.core.next.call(null,seq__27579__$1);
var G__27596 = null;
var G__27597 = (0);
var G__27598 = (0);
seq__27579 = G__27595;
chunk__27580 = G__27596;
count__27581 = G__27597;
i__27582 = G__27598;
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
var args27599 = [];
var len__17829__auto___27602 = arguments.length;
var i__17830__auto___27603 = (0);
while(true){
if((i__17830__auto___27603 < len__17829__auto___27602)){
args27599.push((arguments[i__17830__auto___27603]));

var G__27604 = (i__17830__auto___27603 + (1));
i__17830__auto___27603 = G__27604;
continue;
} else {
}
break;
}

var G__27601 = args27599.length;
switch (G__27601) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27599.length)].join('')));

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
var args__17836__auto__ = [];
var len__17829__auto___27610 = arguments.length;
var i__17830__auto___27611 = (0);
while(true){
if((i__17830__auto___27611 < len__17829__auto___27610)){
args__17836__auto__.push((arguments[i__17830__auto___27611]));

var G__27612 = (i__17830__auto___27611 + (1));
i__17830__auto___27611 = G__27612;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27607){
var map__27608 = p__27607;
var map__27608__$1 = ((((!((map__27608 == null)))?((((map__27608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27608):map__27608);
var opts = map__27608__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27606){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27606));
});

//# sourceMappingURL=client.js.map