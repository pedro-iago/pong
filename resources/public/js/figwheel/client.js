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
var pred__42849 = cljs.core._EQ_;
var expr__42850 = (function (){var or__18726__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__42849.call(null,"true",expr__42850))){
return true;
} else {
if(cljs.core.truth_(pred__42849.call(null,"false",expr__42850))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__42850)].join('')));
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
var len__19784__auto___42853 = arguments.length;
var i__19785__auto___42854 = (0);
while(true){
if((i__19785__auto___42854 < len__19784__auto___42853)){
args__19791__auto__.push((arguments[i__19785__auto___42854]));

var G__42855 = (i__19785__auto___42854 + (1));
i__19785__auto___42854 = G__42855;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq42852){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42852));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42856){
var map__42859 = p__42856;
var map__42859__$1 = ((((!((map__42859 == null)))?((((map__42859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42859):map__42859);
var message = cljs.core.get.call(null,map__42859__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42859__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__37161__auto___43021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___43021,ch){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___43021,ch){
return (function (state_42990){
var state_val_42991 = (state_42990[(1)]);
if((state_val_42991 === (7))){
var inst_42986 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
var statearr_42992_43022 = state_42990__$1;
(statearr_42992_43022[(2)] = inst_42986);

(statearr_42992_43022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (1))){
var state_42990__$1 = state_42990;
var statearr_42993_43023 = state_42990__$1;
(statearr_42993_43023[(2)] = null);

(statearr_42993_43023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (4))){
var inst_42943 = (state_42990[(7)]);
var inst_42943__$1 = (state_42990[(2)]);
var state_42990__$1 = (function (){var statearr_42994 = state_42990;
(statearr_42994[(7)] = inst_42943__$1);

return statearr_42994;
})();
if(cljs.core.truth_(inst_42943__$1)){
var statearr_42995_43024 = state_42990__$1;
(statearr_42995_43024[(1)] = (5));

} else {
var statearr_42996_43025 = state_42990__$1;
(statearr_42996_43025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (15))){
var inst_42950 = (state_42990[(8)]);
var inst_42965 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42950);
var inst_42966 = cljs.core.first.call(null,inst_42965);
var inst_42967 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42966);
var inst_42968 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42967)].join('');
var inst_42969 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42968);
var state_42990__$1 = state_42990;
var statearr_42997_43026 = state_42990__$1;
(statearr_42997_43026[(2)] = inst_42969);

(statearr_42997_43026[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (13))){
var inst_42974 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
var statearr_42998_43027 = state_42990__$1;
(statearr_42998_43027[(2)] = inst_42974);

(statearr_42998_43027[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (6))){
var state_42990__$1 = state_42990;
var statearr_42999_43028 = state_42990__$1;
(statearr_42999_43028[(2)] = null);

(statearr_42999_43028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (17))){
var inst_42972 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
var statearr_43000_43029 = state_42990__$1;
(statearr_43000_43029[(2)] = inst_42972);

(statearr_43000_43029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (3))){
var inst_42988 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42990__$1,inst_42988);
} else {
if((state_val_42991 === (12))){
var inst_42949 = (state_42990[(9)]);
var inst_42963 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42949,opts);
var state_42990__$1 = state_42990;
if(cljs.core.truth_(inst_42963)){
var statearr_43001_43030 = state_42990__$1;
(statearr_43001_43030[(1)] = (15));

} else {
var statearr_43002_43031 = state_42990__$1;
(statearr_43002_43031[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (2))){
var state_42990__$1 = state_42990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42990__$1,(4),ch);
} else {
if((state_val_42991 === (11))){
var inst_42950 = (state_42990[(8)]);
var inst_42955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42956 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42950);
var inst_42957 = cljs.core.async.timeout.call(null,(1000));
var inst_42958 = [inst_42956,inst_42957];
var inst_42959 = (new cljs.core.PersistentVector(null,2,(5),inst_42955,inst_42958,null));
var state_42990__$1 = state_42990;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42990__$1,(14),inst_42959);
} else {
if((state_val_42991 === (9))){
var inst_42950 = (state_42990[(8)]);
var inst_42976 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42977 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42950);
var inst_42978 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42977);
var inst_42979 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42978)].join('');
var inst_42980 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42979);
var state_42990__$1 = (function (){var statearr_43003 = state_42990;
(statearr_43003[(10)] = inst_42976);

return statearr_43003;
})();
var statearr_43004_43032 = state_42990__$1;
(statearr_43004_43032[(2)] = inst_42980);

(statearr_43004_43032[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (5))){
var inst_42943 = (state_42990[(7)]);
var inst_42945 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42946 = (new cljs.core.PersistentArrayMap(null,2,inst_42945,null));
var inst_42947 = (new cljs.core.PersistentHashSet(null,inst_42946,null));
var inst_42948 = figwheel.client.focus_msgs.call(null,inst_42947,inst_42943);
var inst_42949 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42948);
var inst_42950 = cljs.core.first.call(null,inst_42948);
var inst_42951 = figwheel.client.autoload_QMARK_.call(null);
var state_42990__$1 = (function (){var statearr_43005 = state_42990;
(statearr_43005[(9)] = inst_42949);

(statearr_43005[(8)] = inst_42950);

return statearr_43005;
})();
if(cljs.core.truth_(inst_42951)){
var statearr_43006_43033 = state_42990__$1;
(statearr_43006_43033[(1)] = (8));

} else {
var statearr_43007_43034 = state_42990__$1;
(statearr_43007_43034[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (14))){
var inst_42961 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
var statearr_43008_43035 = state_42990__$1;
(statearr_43008_43035[(2)] = inst_42961);

(statearr_43008_43035[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (16))){
var state_42990__$1 = state_42990;
var statearr_43009_43036 = state_42990__$1;
(statearr_43009_43036[(2)] = null);

(statearr_43009_43036[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (10))){
var inst_42982 = (state_42990[(2)]);
var state_42990__$1 = (function (){var statearr_43010 = state_42990;
(statearr_43010[(11)] = inst_42982);

return statearr_43010;
})();
var statearr_43011_43037 = state_42990__$1;
(statearr_43011_43037[(2)] = null);

(statearr_43011_43037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (8))){
var inst_42949 = (state_42990[(9)]);
var inst_42953 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42949,opts);
var state_42990__$1 = state_42990;
if(cljs.core.truth_(inst_42953)){
var statearr_43012_43038 = state_42990__$1;
(statearr_43012_43038[(1)] = (11));

} else {
var statearr_43013_43039 = state_42990__$1;
(statearr_43013_43039[(1)] = (12));

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
});})(c__37161__auto___43021,ch))
;
return ((function (switch__35788__auto__,c__37161__auto___43021,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35789__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35789__auto____0 = (function (){
var statearr_43017 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43017[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35789__auto__);

(statearr_43017[(1)] = (1));

return statearr_43017;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35789__auto____1 = (function (state_42990){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_42990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e43018){if((e43018 instanceof Object)){
var ex__35792__auto__ = e43018;
var statearr_43019_43040 = state_42990;
(statearr_43019_43040[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43041 = state_42990;
state_42990 = G__43041;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35789__auto__ = function(state_42990){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35789__auto____1.call(this,state_42990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35789__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35789__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___43021,ch))
})();
var state__37163__auto__ = (function (){var statearr_43020 = f__37162__auto__.call(null);
(statearr_43020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___43021);

return statearr_43020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___43021,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43042_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43042_SHARP_));
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
var base_path_43049 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43049){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_43047 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_43048 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43048;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43047;
}}catch (e43046){if((e43046 instanceof Error)){
var e = e43046;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43049], null));
} else {
var e = e43046;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43049))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43050){
var map__43057 = p__43050;
var map__43057__$1 = ((((!((map__43057 == null)))?((((map__43057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43057):map__43057);
var opts = map__43057__$1;
var build_id = cljs.core.get.call(null,map__43057__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43057,map__43057__$1,opts,build_id){
return (function (p__43059){
var vec__43060 = p__43059;
var map__43061 = cljs.core.nth.call(null,vec__43060,(0),null);
var map__43061__$1 = ((((!((map__43061 == null)))?((((map__43061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43061):map__43061);
var msg = map__43061__$1;
var msg_name = cljs.core.get.call(null,map__43061__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43060,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43060,map__43061,map__43061__$1,msg,msg_name,_,map__43057,map__43057__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43060,map__43061,map__43061__$1,msg,msg_name,_,map__43057,map__43057__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43057,map__43057__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43067){
var vec__43068 = p__43067;
var map__43069 = cljs.core.nth.call(null,vec__43068,(0),null);
var map__43069__$1 = ((((!((map__43069 == null)))?((((map__43069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43069):map__43069);
var msg = map__43069__$1;
var msg_name = cljs.core.get.call(null,map__43069__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43068,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43071){
var map__43081 = p__43071;
var map__43081__$1 = ((((!((map__43081 == null)))?((((map__43081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43081):map__43081);
var on_compile_warning = cljs.core.get.call(null,map__43081__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43081__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43081,map__43081__$1,on_compile_warning,on_compile_fail){
return (function (p__43083){
var vec__43084 = p__43083;
var map__43085 = cljs.core.nth.call(null,vec__43084,(0),null);
var map__43085__$1 = ((((!((map__43085 == null)))?((((map__43085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43085):map__43085);
var msg = map__43085__$1;
var msg_name = cljs.core.get.call(null,map__43085__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43084,(1));
var pred__43087 = cljs.core._EQ_;
var expr__43088 = msg_name;
if(cljs.core.truth_(pred__43087.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43088))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43087.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43088))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43081,map__43081__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__,msg_hist,msg_names,msg){
return (function (state_43304){
var state_val_43305 = (state_43304[(1)]);
if((state_val_43305 === (7))){
var inst_43228 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43228)){
var statearr_43306_43352 = state_43304__$1;
(statearr_43306_43352[(1)] = (8));

} else {
var statearr_43307_43353 = state_43304__$1;
(statearr_43307_43353[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (20))){
var inst_43298 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43308_43354 = state_43304__$1;
(statearr_43308_43354[(2)] = inst_43298);

(statearr_43308_43354[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (27))){
var inst_43294 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43309_43355 = state_43304__$1;
(statearr_43309_43355[(2)] = inst_43294);

(statearr_43309_43355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (1))){
var inst_43221 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43221)){
var statearr_43310_43356 = state_43304__$1;
(statearr_43310_43356[(1)] = (2));

} else {
var statearr_43311_43357 = state_43304__$1;
(statearr_43311_43357[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (24))){
var inst_43296 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43312_43358 = state_43304__$1;
(statearr_43312_43358[(2)] = inst_43296);

(statearr_43312_43358[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (4))){
var inst_43302 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43304__$1,inst_43302);
} else {
if((state_val_43305 === (15))){
var inst_43300 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43313_43359 = state_43304__$1;
(statearr_43313_43359[(2)] = inst_43300);

(statearr_43313_43359[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (21))){
var inst_43259 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43314_43360 = state_43304__$1;
(statearr_43314_43360[(2)] = inst_43259);

(statearr_43314_43360[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (31))){
var inst_43283 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43283)){
var statearr_43315_43361 = state_43304__$1;
(statearr_43315_43361[(1)] = (34));

} else {
var statearr_43316_43362 = state_43304__$1;
(statearr_43316_43362[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (32))){
var inst_43292 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43317_43363 = state_43304__$1;
(statearr_43317_43363[(2)] = inst_43292);

(statearr_43317_43363[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (33))){
var inst_43281 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43318_43364 = state_43304__$1;
(statearr_43318_43364[(2)] = inst_43281);

(statearr_43318_43364[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (13))){
var inst_43242 = figwheel.client.heads_up.clear.call(null);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(16),inst_43242);
} else {
if((state_val_43305 === (22))){
var inst_43263 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43264 = figwheel.client.heads_up.append_message.call(null,inst_43263);
var state_43304__$1 = state_43304;
var statearr_43319_43365 = state_43304__$1;
(statearr_43319_43365[(2)] = inst_43264);

(statearr_43319_43365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (36))){
var inst_43290 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43320_43366 = state_43304__$1;
(statearr_43320_43366[(2)] = inst_43290);

(statearr_43320_43366[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (29))){
var inst_43274 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43321_43367 = state_43304__$1;
(statearr_43321_43367[(2)] = inst_43274);

(statearr_43321_43367[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (6))){
var inst_43223 = (state_43304[(7)]);
var state_43304__$1 = state_43304;
var statearr_43322_43368 = state_43304__$1;
(statearr_43322_43368[(2)] = inst_43223);

(statearr_43322_43368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (28))){
var inst_43270 = (state_43304[(2)]);
var inst_43271 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43272 = figwheel.client.heads_up.display_warning.call(null,inst_43271);
var state_43304__$1 = (function (){var statearr_43323 = state_43304;
(statearr_43323[(8)] = inst_43270);

return statearr_43323;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(29),inst_43272);
} else {
if((state_val_43305 === (25))){
var inst_43268 = figwheel.client.heads_up.clear.call(null);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(28),inst_43268);
} else {
if((state_val_43305 === (34))){
var inst_43285 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(37),inst_43285);
} else {
if((state_val_43305 === (17))){
var inst_43250 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43324_43369 = state_43304__$1;
(statearr_43324_43369[(2)] = inst_43250);

(statearr_43324_43369[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (3))){
var inst_43240 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43240)){
var statearr_43325_43370 = state_43304__$1;
(statearr_43325_43370[(1)] = (13));

} else {
var statearr_43326_43371 = state_43304__$1;
(statearr_43326_43371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (12))){
var inst_43236 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43327_43372 = state_43304__$1;
(statearr_43327_43372[(2)] = inst_43236);

(statearr_43327_43372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (2))){
var inst_43223 = (state_43304[(7)]);
var inst_43223__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43304__$1 = (function (){var statearr_43328 = state_43304;
(statearr_43328[(7)] = inst_43223__$1);

return statearr_43328;
})();
if(cljs.core.truth_(inst_43223__$1)){
var statearr_43329_43373 = state_43304__$1;
(statearr_43329_43373[(1)] = (5));

} else {
var statearr_43330_43374 = state_43304__$1;
(statearr_43330_43374[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (23))){
var inst_43266 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43266)){
var statearr_43331_43375 = state_43304__$1;
(statearr_43331_43375[(1)] = (25));

} else {
var statearr_43332_43376 = state_43304__$1;
(statearr_43332_43376[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (35))){
var state_43304__$1 = state_43304;
var statearr_43333_43377 = state_43304__$1;
(statearr_43333_43377[(2)] = null);

(statearr_43333_43377[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (19))){
var inst_43261 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43261)){
var statearr_43334_43378 = state_43304__$1;
(statearr_43334_43378[(1)] = (22));

} else {
var statearr_43335_43379 = state_43304__$1;
(statearr_43335_43379[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (11))){
var inst_43232 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43336_43380 = state_43304__$1;
(statearr_43336_43380[(2)] = inst_43232);

(statearr_43336_43380[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (9))){
var inst_43234 = figwheel.client.heads_up.clear.call(null);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(12),inst_43234);
} else {
if((state_val_43305 === (5))){
var inst_43225 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43304__$1 = state_43304;
var statearr_43337_43381 = state_43304__$1;
(statearr_43337_43381[(2)] = inst_43225);

(statearr_43337_43381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (14))){
var inst_43252 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43252)){
var statearr_43338_43382 = state_43304__$1;
(statearr_43338_43382[(1)] = (18));

} else {
var statearr_43339_43383 = state_43304__$1;
(statearr_43339_43383[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (26))){
var inst_43276 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43304__$1 = state_43304;
if(cljs.core.truth_(inst_43276)){
var statearr_43340_43384 = state_43304__$1;
(statearr_43340_43384[(1)] = (30));

} else {
var statearr_43341_43385 = state_43304__$1;
(statearr_43341_43385[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (16))){
var inst_43244 = (state_43304[(2)]);
var inst_43245 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43246 = figwheel.client.format_messages.call(null,inst_43245);
var inst_43247 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43248 = figwheel.client.heads_up.display_error.call(null,inst_43246,inst_43247);
var state_43304__$1 = (function (){var statearr_43342 = state_43304;
(statearr_43342[(9)] = inst_43244);

return statearr_43342;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(17),inst_43248);
} else {
if((state_val_43305 === (30))){
var inst_43278 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43279 = figwheel.client.heads_up.display_warning.call(null,inst_43278);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(33),inst_43279);
} else {
if((state_val_43305 === (10))){
var inst_43238 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43343_43386 = state_43304__$1;
(statearr_43343_43386[(2)] = inst_43238);

(statearr_43343_43386[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (18))){
var inst_43254 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43255 = figwheel.client.format_messages.call(null,inst_43254);
var inst_43256 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43257 = figwheel.client.heads_up.display_error.call(null,inst_43255,inst_43256);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(21),inst_43257);
} else {
if((state_val_43305 === (37))){
var inst_43287 = (state_43304[(2)]);
var state_43304__$1 = state_43304;
var statearr_43344_43387 = state_43304__$1;
(statearr_43344_43387[(2)] = inst_43287);

(statearr_43344_43387[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43305 === (8))){
var inst_43230 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43304__$1 = state_43304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43304__$1,(11),inst_43230);
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
});})(c__37161__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35788__auto__,c__37161__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto____0 = (function (){
var statearr_43348 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43348[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto__);

(statearr_43348[(1)] = (1));

return statearr_43348;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto____1 = (function (state_43304){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_43304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e43349){if((e43349 instanceof Object)){
var ex__35792__auto__ = e43349;
var statearr_43350_43388 = state_43304;
(statearr_43350_43388[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43389 = state_43304;
state_43304 = G__43389;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto__ = function(state_43304){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto____1.call(this,state_43304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__,msg_hist,msg_names,msg))
})();
var state__37163__auto__ = (function (){var statearr_43351 = f__37162__auto__.call(null);
(statearr_43351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_43351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__,msg_hist,msg_names,msg))
);

return c__37161__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37161__auto___43452 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto___43452,ch){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto___43452,ch){
return (function (state_43435){
var state_val_43436 = (state_43435[(1)]);
if((state_val_43436 === (1))){
var state_43435__$1 = state_43435;
var statearr_43437_43453 = state_43435__$1;
(statearr_43437_43453[(2)] = null);

(statearr_43437_43453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43436 === (2))){
var state_43435__$1 = state_43435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43435__$1,(4),ch);
} else {
if((state_val_43436 === (3))){
var inst_43433 = (state_43435[(2)]);
var state_43435__$1 = state_43435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43435__$1,inst_43433);
} else {
if((state_val_43436 === (4))){
var inst_43423 = (state_43435[(7)]);
var inst_43423__$1 = (state_43435[(2)]);
var state_43435__$1 = (function (){var statearr_43438 = state_43435;
(statearr_43438[(7)] = inst_43423__$1);

return statearr_43438;
})();
if(cljs.core.truth_(inst_43423__$1)){
var statearr_43439_43454 = state_43435__$1;
(statearr_43439_43454[(1)] = (5));

} else {
var statearr_43440_43455 = state_43435__$1;
(statearr_43440_43455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43436 === (5))){
var inst_43423 = (state_43435[(7)]);
var inst_43425 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43423);
var state_43435__$1 = state_43435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43435__$1,(8),inst_43425);
} else {
if((state_val_43436 === (6))){
var state_43435__$1 = state_43435;
var statearr_43441_43456 = state_43435__$1;
(statearr_43441_43456[(2)] = null);

(statearr_43441_43456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43436 === (7))){
var inst_43431 = (state_43435[(2)]);
var state_43435__$1 = state_43435;
var statearr_43442_43457 = state_43435__$1;
(statearr_43442_43457[(2)] = inst_43431);

(statearr_43442_43457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43436 === (8))){
var inst_43427 = (state_43435[(2)]);
var state_43435__$1 = (function (){var statearr_43443 = state_43435;
(statearr_43443[(8)] = inst_43427);

return statearr_43443;
})();
var statearr_43444_43458 = state_43435__$1;
(statearr_43444_43458[(2)] = null);

(statearr_43444_43458[(1)] = (2));


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
});})(c__37161__auto___43452,ch))
;
return ((function (switch__35788__auto__,c__37161__auto___43452,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35789__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35789__auto____0 = (function (){
var statearr_43448 = [null,null,null,null,null,null,null,null,null];
(statearr_43448[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35789__auto__);

(statearr_43448[(1)] = (1));

return statearr_43448;
});
var figwheel$client$heads_up_plugin_$_state_machine__35789__auto____1 = (function (state_43435){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_43435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e43449){if((e43449 instanceof Object)){
var ex__35792__auto__ = e43449;
var statearr_43450_43459 = state_43435;
(statearr_43450_43459[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43460 = state_43435;
state_43435 = G__43460;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35789__auto__ = function(state_43435){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35789__auto____1.call(this,state_43435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35789__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35789__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto___43452,ch))
})();
var state__37163__auto__ = (function (){var statearr_43451 = f__37162__auto__.call(null);
(statearr_43451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto___43452);

return statearr_43451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto___43452,ch))
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
var c__37161__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37161__auto__){
return (function (){
var f__37162__auto__ = (function (){var switch__35788__auto__ = ((function (c__37161__auto__){
return (function (state_43481){
var state_val_43482 = (state_43481[(1)]);
if((state_val_43482 === (1))){
var inst_43476 = cljs.core.async.timeout.call(null,(3000));
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(2),inst_43476);
} else {
if((state_val_43482 === (2))){
var inst_43478 = (state_43481[(2)]);
var inst_43479 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43481__$1 = (function (){var statearr_43483 = state_43481;
(statearr_43483[(7)] = inst_43478);

return statearr_43483;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43481__$1,inst_43479);
} else {
return null;
}
}
});})(c__37161__auto__))
;
return ((function (switch__35788__auto__,c__37161__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35789__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35789__auto____0 = (function (){
var statearr_43487 = [null,null,null,null,null,null,null,null];
(statearr_43487[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35789__auto__);

(statearr_43487[(1)] = (1));

return statearr_43487;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35789__auto____1 = (function (state_43481){
while(true){
var ret_value__35790__auto__ = (function (){try{while(true){
var result__35791__auto__ = switch__35788__auto__.call(null,state_43481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35791__auto__;
}
break;
}
}catch (e43488){if((e43488 instanceof Object)){
var ex__35792__auto__ = e43488;
var statearr_43489_43491 = state_43481;
(statearr_43489_43491[(5)] = ex__35792__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43488;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35790__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43492 = state_43481;
state_43481 = G__43492;
continue;
} else {
return ret_value__35790__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35789__auto__ = function(state_43481){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35789__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35789__auto____1.call(this,state_43481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35789__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35789__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35789__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35789__auto__;
})()
;})(switch__35788__auto__,c__37161__auto__))
})();
var state__37163__auto__ = (function (){var statearr_43490 = f__37162__auto__.call(null);
(statearr_43490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37161__auto__);

return statearr_43490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37163__auto__);
});})(c__37161__auto__))
);

return c__37161__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43493){
var map__43500 = p__43493;
var map__43500__$1 = ((((!((map__43500 == null)))?((((map__43500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43500):map__43500);
var ed = map__43500__$1;
var formatted_exception = cljs.core.get.call(null,map__43500__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43500__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43500__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43502_43506 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43503_43507 = null;
var count__43504_43508 = (0);
var i__43505_43509 = (0);
while(true){
if((i__43505_43509 < count__43504_43508)){
var msg_43510 = cljs.core._nth.call(null,chunk__43503_43507,i__43505_43509);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43510);

var G__43511 = seq__43502_43506;
var G__43512 = chunk__43503_43507;
var G__43513 = count__43504_43508;
var G__43514 = (i__43505_43509 + (1));
seq__43502_43506 = G__43511;
chunk__43503_43507 = G__43512;
count__43504_43508 = G__43513;
i__43505_43509 = G__43514;
continue;
} else {
var temp__4657__auto___43515 = cljs.core.seq.call(null,seq__43502_43506);
if(temp__4657__auto___43515){
var seq__43502_43516__$1 = temp__4657__auto___43515;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43502_43516__$1)){
var c__19529__auto___43517 = cljs.core.chunk_first.call(null,seq__43502_43516__$1);
var G__43518 = cljs.core.chunk_rest.call(null,seq__43502_43516__$1);
var G__43519 = c__19529__auto___43517;
var G__43520 = cljs.core.count.call(null,c__19529__auto___43517);
var G__43521 = (0);
seq__43502_43506 = G__43518;
chunk__43503_43507 = G__43519;
count__43504_43508 = G__43520;
i__43505_43509 = G__43521;
continue;
} else {
var msg_43522 = cljs.core.first.call(null,seq__43502_43516__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43522);

var G__43523 = cljs.core.next.call(null,seq__43502_43516__$1);
var G__43524 = null;
var G__43525 = (0);
var G__43526 = (0);
seq__43502_43506 = G__43523;
chunk__43503_43507 = G__43524;
count__43504_43508 = G__43525;
i__43505_43509 = G__43526;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43527){
var map__43530 = p__43527;
var map__43530__$1 = ((((!((map__43530 == null)))?((((map__43530.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43530.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43530):map__43530);
var w = map__43530__$1;
var message = cljs.core.get.call(null,map__43530__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__43538 = cljs.core.seq.call(null,plugins);
var chunk__43539 = null;
var count__43540 = (0);
var i__43541 = (0);
while(true){
if((i__43541 < count__43540)){
var vec__43542 = cljs.core._nth.call(null,chunk__43539,i__43541);
var k = cljs.core.nth.call(null,vec__43542,(0),null);
var plugin = cljs.core.nth.call(null,vec__43542,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43544 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43538,chunk__43539,count__43540,i__43541,pl_43544,vec__43542,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43544.call(null,msg_hist);
});})(seq__43538,chunk__43539,count__43540,i__43541,pl_43544,vec__43542,k,plugin))
);
} else {
}

var G__43545 = seq__43538;
var G__43546 = chunk__43539;
var G__43547 = count__43540;
var G__43548 = (i__43541 + (1));
seq__43538 = G__43545;
chunk__43539 = G__43546;
count__43540 = G__43547;
i__43541 = G__43548;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43538);
if(temp__4657__auto__){
var seq__43538__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43538__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__43538__$1);
var G__43549 = cljs.core.chunk_rest.call(null,seq__43538__$1);
var G__43550 = c__19529__auto__;
var G__43551 = cljs.core.count.call(null,c__19529__auto__);
var G__43552 = (0);
seq__43538 = G__43549;
chunk__43539 = G__43550;
count__43540 = G__43551;
i__43541 = G__43552;
continue;
} else {
var vec__43543 = cljs.core.first.call(null,seq__43538__$1);
var k = cljs.core.nth.call(null,vec__43543,(0),null);
var plugin = cljs.core.nth.call(null,vec__43543,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43553 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43538,chunk__43539,count__43540,i__43541,pl_43553,vec__43543,k,plugin,seq__43538__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43553.call(null,msg_hist);
});})(seq__43538,chunk__43539,count__43540,i__43541,pl_43553,vec__43543,k,plugin,seq__43538__$1,temp__4657__auto__))
);
} else {
}

var G__43554 = cljs.core.next.call(null,seq__43538__$1);
var G__43555 = null;
var G__43556 = (0);
var G__43557 = (0);
seq__43538 = G__43554;
chunk__43539 = G__43555;
count__43540 = G__43556;
i__43541 = G__43557;
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
var args43558 = [];
var len__19784__auto___43561 = arguments.length;
var i__19785__auto___43562 = (0);
while(true){
if((i__19785__auto___43562 < len__19784__auto___43561)){
args43558.push((arguments[i__19785__auto___43562]));

var G__43563 = (i__19785__auto___43562 + (1));
i__19785__auto___43562 = G__43563;
continue;
} else {
}
break;
}

var G__43560 = args43558.length;
switch (G__43560) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43558.length)].join('')));

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
var len__19784__auto___43569 = arguments.length;
var i__19785__auto___43570 = (0);
while(true){
if((i__19785__auto___43570 < len__19784__auto___43569)){
args__19791__auto__.push((arguments[i__19785__auto___43570]));

var G__43571 = (i__19785__auto___43570 + (1));
i__19785__auto___43570 = G__43571;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43566){
var map__43567 = p__43566;
var map__43567__$1 = ((((!((map__43567 == null)))?((((map__43567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43567):map__43567);
var opts = map__43567__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43565){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43565));
});

//# sourceMappingURL=client.js.map