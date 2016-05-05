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
var pred__42802 = cljs.core._EQ_;
var expr__42803 = (function (){var or__18726__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__42802.call(null,"true",expr__42803))){
return true;
} else {
if(cljs.core.truth_(pred__42802.call(null,"false",expr__42803))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__42803)].join('')));
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
var len__19784__auto___42806 = arguments.length;
var i__19785__auto___42807 = (0);
while(true){
if((i__19785__auto___42807 < len__19784__auto___42806)){
args__19791__auto__.push((arguments[i__19785__auto___42807]));

var G__42808 = (i__19785__auto___42807 + (1));
i__19785__auto___42807 = G__42808;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq42805){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42805));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42809){
var map__42812 = p__42809;
var map__42812__$1 = ((((!((map__42812 == null)))?((((map__42812.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42812.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42812):map__42812);
var message = cljs.core.get.call(null,map__42812__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42812__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__33664__auto___42974 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___42974,ch){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___42974,ch){
return (function (state_42943){
var state_val_42944 = (state_42943[(1)]);
if((state_val_42944 === (7))){
var inst_42939 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
var statearr_42945_42975 = state_42943__$1;
(statearr_42945_42975[(2)] = inst_42939);

(statearr_42945_42975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (1))){
var state_42943__$1 = state_42943;
var statearr_42946_42976 = state_42943__$1;
(statearr_42946_42976[(2)] = null);

(statearr_42946_42976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (4))){
var inst_42896 = (state_42943[(7)]);
var inst_42896__$1 = (state_42943[(2)]);
var state_42943__$1 = (function (){var statearr_42947 = state_42943;
(statearr_42947[(7)] = inst_42896__$1);

return statearr_42947;
})();
if(cljs.core.truth_(inst_42896__$1)){
var statearr_42948_42977 = state_42943__$1;
(statearr_42948_42977[(1)] = (5));

} else {
var statearr_42949_42978 = state_42943__$1;
(statearr_42949_42978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (15))){
var inst_42903 = (state_42943[(8)]);
var inst_42918 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42903);
var inst_42919 = cljs.core.first.call(null,inst_42918);
var inst_42920 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42919);
var inst_42921 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_42920)].join('');
var inst_42922 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42921);
var state_42943__$1 = state_42943;
var statearr_42950_42979 = state_42943__$1;
(statearr_42950_42979[(2)] = inst_42922);

(statearr_42950_42979[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (13))){
var inst_42927 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
var statearr_42951_42980 = state_42943__$1;
(statearr_42951_42980[(2)] = inst_42927);

(statearr_42951_42980[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (6))){
var state_42943__$1 = state_42943;
var statearr_42952_42981 = state_42943__$1;
(statearr_42952_42981[(2)] = null);

(statearr_42952_42981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (17))){
var inst_42925 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
var statearr_42953_42982 = state_42943__$1;
(statearr_42953_42982[(2)] = inst_42925);

(statearr_42953_42982[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (3))){
var inst_42941 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42943__$1,inst_42941);
} else {
if((state_val_42944 === (12))){
var inst_42902 = (state_42943[(9)]);
var inst_42916 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42902,opts);
var state_42943__$1 = state_42943;
if(cljs.core.truth_(inst_42916)){
var statearr_42954_42983 = state_42943__$1;
(statearr_42954_42983[(1)] = (15));

} else {
var statearr_42955_42984 = state_42943__$1;
(statearr_42955_42984[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (2))){
var state_42943__$1 = state_42943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42943__$1,(4),ch);
} else {
if((state_val_42944 === (11))){
var inst_42903 = (state_42943[(8)]);
var inst_42908 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42909 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42903);
var inst_42910 = cljs.core.async.timeout.call(null,(1000));
var inst_42911 = [inst_42909,inst_42910];
var inst_42912 = (new cljs.core.PersistentVector(null,2,(5),inst_42908,inst_42911,null));
var state_42943__$1 = state_42943;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42943__$1,(14),inst_42912);
} else {
if((state_val_42944 === (9))){
var inst_42903 = (state_42943[(8)]);
var inst_42929 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42930 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42903);
var inst_42931 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42930);
var inst_42932 = [cljs.core.str("Not loading: "),cljs.core.str(inst_42931)].join('');
var inst_42933 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42932);
var state_42943__$1 = (function (){var statearr_42956 = state_42943;
(statearr_42956[(10)] = inst_42929);

return statearr_42956;
})();
var statearr_42957_42985 = state_42943__$1;
(statearr_42957_42985[(2)] = inst_42933);

(statearr_42957_42985[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (5))){
var inst_42896 = (state_42943[(7)]);
var inst_42898 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42899 = (new cljs.core.PersistentArrayMap(null,2,inst_42898,null));
var inst_42900 = (new cljs.core.PersistentHashSet(null,inst_42899,null));
var inst_42901 = figwheel.client.focus_msgs.call(null,inst_42900,inst_42896);
var inst_42902 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42901);
var inst_42903 = cljs.core.first.call(null,inst_42901);
var inst_42904 = figwheel.client.autoload_QMARK_.call(null);
var state_42943__$1 = (function (){var statearr_42958 = state_42943;
(statearr_42958[(8)] = inst_42903);

(statearr_42958[(9)] = inst_42902);

return statearr_42958;
})();
if(cljs.core.truth_(inst_42904)){
var statearr_42959_42986 = state_42943__$1;
(statearr_42959_42986[(1)] = (8));

} else {
var statearr_42960_42987 = state_42943__$1;
(statearr_42960_42987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (14))){
var inst_42914 = (state_42943[(2)]);
var state_42943__$1 = state_42943;
var statearr_42961_42988 = state_42943__$1;
(statearr_42961_42988[(2)] = inst_42914);

(statearr_42961_42988[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (16))){
var state_42943__$1 = state_42943;
var statearr_42962_42989 = state_42943__$1;
(statearr_42962_42989[(2)] = null);

(statearr_42962_42989[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (10))){
var inst_42935 = (state_42943[(2)]);
var state_42943__$1 = (function (){var statearr_42963 = state_42943;
(statearr_42963[(11)] = inst_42935);

return statearr_42963;
})();
var statearr_42964_42990 = state_42943__$1;
(statearr_42964_42990[(2)] = null);

(statearr_42964_42990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42944 === (8))){
var inst_42902 = (state_42943[(9)]);
var inst_42906 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42902,opts);
var state_42943__$1 = state_42943;
if(cljs.core.truth_(inst_42906)){
var statearr_42965_42991 = state_42943__$1;
(statearr_42965_42991[(1)] = (11));

} else {
var statearr_42966_42992 = state_42943__$1;
(statearr_42966_42992[(1)] = (12));

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
});})(c__33664__auto___42974,ch))
;
return ((function (switch__33643__auto__,c__33664__auto___42974,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33644__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33644__auto____0 = (function (){
var statearr_42970 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42970[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33644__auto__);

(statearr_42970[(1)] = (1));

return statearr_42970;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33644__auto____1 = (function (state_42943){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_42943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e42971){if((e42971 instanceof Object)){
var ex__33647__auto__ = e42971;
var statearr_42972_42993 = state_42943;
(statearr_42972_42993[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42971;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42994 = state_42943;
state_42943 = G__42994;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33644__auto__ = function(state_42943){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33644__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33644__auto____1.call(this,state_42943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33644__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33644__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___42974,ch))
})();
var state__33666__auto__ = (function (){var statearr_42973 = f__33665__auto__.call(null);
(statearr_42973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___42974);

return statearr_42973;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___42974,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42995_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42995_SHARP_));
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
var base_path_43002 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43002){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_43000 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_43001 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43001;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43000;
}}catch (e42999){if((e42999 instanceof Error)){
var e = e42999;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43002], null));
} else {
var e = e42999;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43002))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43003){
var map__43010 = p__43003;
var map__43010__$1 = ((((!((map__43010 == null)))?((((map__43010.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43010.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43010):map__43010);
var opts = map__43010__$1;
var build_id = cljs.core.get.call(null,map__43010__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43010,map__43010__$1,opts,build_id){
return (function (p__43012){
var vec__43013 = p__43012;
var map__43014 = cljs.core.nth.call(null,vec__43013,(0),null);
var map__43014__$1 = ((((!((map__43014 == null)))?((((map__43014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43014):map__43014);
var msg = map__43014__$1;
var msg_name = cljs.core.get.call(null,map__43014__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43013,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43013,map__43014,map__43014__$1,msg,msg_name,_,map__43010,map__43010__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43013,map__43014,map__43014__$1,msg,msg_name,_,map__43010,map__43010__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43010,map__43010__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43020){
var vec__43021 = p__43020;
var map__43022 = cljs.core.nth.call(null,vec__43021,(0),null);
var map__43022__$1 = ((((!((map__43022 == null)))?((((map__43022.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43022.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43022):map__43022);
var msg = map__43022__$1;
var msg_name = cljs.core.get.call(null,map__43022__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43021,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43024){
var map__43034 = p__43024;
var map__43034__$1 = ((((!((map__43034 == null)))?((((map__43034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43034):map__43034);
var on_compile_warning = cljs.core.get.call(null,map__43034__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43034__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43034,map__43034__$1,on_compile_warning,on_compile_fail){
return (function (p__43036){
var vec__43037 = p__43036;
var map__43038 = cljs.core.nth.call(null,vec__43037,(0),null);
var map__43038__$1 = ((((!((map__43038 == null)))?((((map__43038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43038):map__43038);
var msg = map__43038__$1;
var msg_name = cljs.core.get.call(null,map__43038__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43037,(1));
var pred__43040 = cljs.core._EQ_;
var expr__43041 = msg_name;
if(cljs.core.truth_(pred__43040.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43041))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43040.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43041))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43034,map__43034__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__,msg_hist,msg_names,msg){
return (function (state_43257){
var state_val_43258 = (state_43257[(1)]);
if((state_val_43258 === (7))){
var inst_43181 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43181)){
var statearr_43259_43305 = state_43257__$1;
(statearr_43259_43305[(1)] = (8));

} else {
var statearr_43260_43306 = state_43257__$1;
(statearr_43260_43306[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (20))){
var inst_43251 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43261_43307 = state_43257__$1;
(statearr_43261_43307[(2)] = inst_43251);

(statearr_43261_43307[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (27))){
var inst_43247 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43262_43308 = state_43257__$1;
(statearr_43262_43308[(2)] = inst_43247);

(statearr_43262_43308[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (1))){
var inst_43174 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43174)){
var statearr_43263_43309 = state_43257__$1;
(statearr_43263_43309[(1)] = (2));

} else {
var statearr_43264_43310 = state_43257__$1;
(statearr_43264_43310[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (24))){
var inst_43249 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43265_43311 = state_43257__$1;
(statearr_43265_43311[(2)] = inst_43249);

(statearr_43265_43311[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (4))){
var inst_43255 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43257__$1,inst_43255);
} else {
if((state_val_43258 === (15))){
var inst_43253 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43266_43312 = state_43257__$1;
(statearr_43266_43312[(2)] = inst_43253);

(statearr_43266_43312[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (21))){
var inst_43212 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43267_43313 = state_43257__$1;
(statearr_43267_43313[(2)] = inst_43212);

(statearr_43267_43313[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (31))){
var inst_43236 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43236)){
var statearr_43268_43314 = state_43257__$1;
(statearr_43268_43314[(1)] = (34));

} else {
var statearr_43269_43315 = state_43257__$1;
(statearr_43269_43315[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (32))){
var inst_43245 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43270_43316 = state_43257__$1;
(statearr_43270_43316[(2)] = inst_43245);

(statearr_43270_43316[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (33))){
var inst_43234 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43271_43317 = state_43257__$1;
(statearr_43271_43317[(2)] = inst_43234);

(statearr_43271_43317[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (13))){
var inst_43195 = figwheel.client.heads_up.clear.call(null);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(16),inst_43195);
} else {
if((state_val_43258 === (22))){
var inst_43216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43217 = figwheel.client.heads_up.append_message.call(null,inst_43216);
var state_43257__$1 = state_43257;
var statearr_43272_43318 = state_43257__$1;
(statearr_43272_43318[(2)] = inst_43217);

(statearr_43272_43318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (36))){
var inst_43243 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43273_43319 = state_43257__$1;
(statearr_43273_43319[(2)] = inst_43243);

(statearr_43273_43319[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (29))){
var inst_43227 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43274_43320 = state_43257__$1;
(statearr_43274_43320[(2)] = inst_43227);

(statearr_43274_43320[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (6))){
var inst_43176 = (state_43257[(7)]);
var state_43257__$1 = state_43257;
var statearr_43275_43321 = state_43257__$1;
(statearr_43275_43321[(2)] = inst_43176);

(statearr_43275_43321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (28))){
var inst_43223 = (state_43257[(2)]);
var inst_43224 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43225 = figwheel.client.heads_up.display_warning.call(null,inst_43224);
var state_43257__$1 = (function (){var statearr_43276 = state_43257;
(statearr_43276[(8)] = inst_43223);

return statearr_43276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(29),inst_43225);
} else {
if((state_val_43258 === (25))){
var inst_43221 = figwheel.client.heads_up.clear.call(null);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(28),inst_43221);
} else {
if((state_val_43258 === (34))){
var inst_43238 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(37),inst_43238);
} else {
if((state_val_43258 === (17))){
var inst_43203 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43277_43322 = state_43257__$1;
(statearr_43277_43322[(2)] = inst_43203);

(statearr_43277_43322[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (3))){
var inst_43193 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43193)){
var statearr_43278_43323 = state_43257__$1;
(statearr_43278_43323[(1)] = (13));

} else {
var statearr_43279_43324 = state_43257__$1;
(statearr_43279_43324[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (12))){
var inst_43189 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43280_43325 = state_43257__$1;
(statearr_43280_43325[(2)] = inst_43189);

(statearr_43280_43325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (2))){
var inst_43176 = (state_43257[(7)]);
var inst_43176__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43257__$1 = (function (){var statearr_43281 = state_43257;
(statearr_43281[(7)] = inst_43176__$1);

return statearr_43281;
})();
if(cljs.core.truth_(inst_43176__$1)){
var statearr_43282_43326 = state_43257__$1;
(statearr_43282_43326[(1)] = (5));

} else {
var statearr_43283_43327 = state_43257__$1;
(statearr_43283_43327[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (23))){
var inst_43219 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43219)){
var statearr_43284_43328 = state_43257__$1;
(statearr_43284_43328[(1)] = (25));

} else {
var statearr_43285_43329 = state_43257__$1;
(statearr_43285_43329[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (35))){
var state_43257__$1 = state_43257;
var statearr_43286_43330 = state_43257__$1;
(statearr_43286_43330[(2)] = null);

(statearr_43286_43330[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (19))){
var inst_43214 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43214)){
var statearr_43287_43331 = state_43257__$1;
(statearr_43287_43331[(1)] = (22));

} else {
var statearr_43288_43332 = state_43257__$1;
(statearr_43288_43332[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (11))){
var inst_43185 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43289_43333 = state_43257__$1;
(statearr_43289_43333[(2)] = inst_43185);

(statearr_43289_43333[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (9))){
var inst_43187 = figwheel.client.heads_up.clear.call(null);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(12),inst_43187);
} else {
if((state_val_43258 === (5))){
var inst_43178 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43257__$1 = state_43257;
var statearr_43290_43334 = state_43257__$1;
(statearr_43290_43334[(2)] = inst_43178);

(statearr_43290_43334[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (14))){
var inst_43205 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43205)){
var statearr_43291_43335 = state_43257__$1;
(statearr_43291_43335[(1)] = (18));

} else {
var statearr_43292_43336 = state_43257__$1;
(statearr_43292_43336[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (26))){
var inst_43229 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43257__$1 = state_43257;
if(cljs.core.truth_(inst_43229)){
var statearr_43293_43337 = state_43257__$1;
(statearr_43293_43337[(1)] = (30));

} else {
var statearr_43294_43338 = state_43257__$1;
(statearr_43294_43338[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (16))){
var inst_43197 = (state_43257[(2)]);
var inst_43198 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43199 = figwheel.client.format_messages.call(null,inst_43198);
var inst_43200 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43201 = figwheel.client.heads_up.display_error.call(null,inst_43199,inst_43200);
var state_43257__$1 = (function (){var statearr_43295 = state_43257;
(statearr_43295[(9)] = inst_43197);

return statearr_43295;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(17),inst_43201);
} else {
if((state_val_43258 === (30))){
var inst_43231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43232 = figwheel.client.heads_up.display_warning.call(null,inst_43231);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(33),inst_43232);
} else {
if((state_val_43258 === (10))){
var inst_43191 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43296_43339 = state_43257__$1;
(statearr_43296_43339[(2)] = inst_43191);

(statearr_43296_43339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (18))){
var inst_43207 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43208 = figwheel.client.format_messages.call(null,inst_43207);
var inst_43209 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43210 = figwheel.client.heads_up.display_error.call(null,inst_43208,inst_43209);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(21),inst_43210);
} else {
if((state_val_43258 === (37))){
var inst_43240 = (state_43257[(2)]);
var state_43257__$1 = state_43257;
var statearr_43297_43340 = state_43257__$1;
(statearr_43297_43340[(2)] = inst_43240);

(statearr_43297_43340[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43258 === (8))){
var inst_43183 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43257__$1 = state_43257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43257__$1,(11),inst_43183);
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
});})(c__33664__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33643__auto__,c__33664__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto____0 = (function (){
var statearr_43301 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43301[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto__);

(statearr_43301[(1)] = (1));

return statearr_43301;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto____1 = (function (state_43257){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_43257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e43302){if((e43302 instanceof Object)){
var ex__33647__auto__ = e43302;
var statearr_43303_43341 = state_43257;
(statearr_43303_43341[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43342 = state_43257;
state_43257 = G__43342;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto__ = function(state_43257){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto____1.call(this,state_43257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__,msg_hist,msg_names,msg))
})();
var state__33666__auto__ = (function (){var statearr_43304 = f__33665__auto__.call(null);
(statearr_43304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_43304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__,msg_hist,msg_names,msg))
);

return c__33664__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33664__auto___43405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto___43405,ch){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto___43405,ch){
return (function (state_43388){
var state_val_43389 = (state_43388[(1)]);
if((state_val_43389 === (1))){
var state_43388__$1 = state_43388;
var statearr_43390_43406 = state_43388__$1;
(statearr_43390_43406[(2)] = null);

(statearr_43390_43406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43389 === (2))){
var state_43388__$1 = state_43388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43388__$1,(4),ch);
} else {
if((state_val_43389 === (3))){
var inst_43386 = (state_43388[(2)]);
var state_43388__$1 = state_43388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43388__$1,inst_43386);
} else {
if((state_val_43389 === (4))){
var inst_43376 = (state_43388[(7)]);
var inst_43376__$1 = (state_43388[(2)]);
var state_43388__$1 = (function (){var statearr_43391 = state_43388;
(statearr_43391[(7)] = inst_43376__$1);

return statearr_43391;
})();
if(cljs.core.truth_(inst_43376__$1)){
var statearr_43392_43407 = state_43388__$1;
(statearr_43392_43407[(1)] = (5));

} else {
var statearr_43393_43408 = state_43388__$1;
(statearr_43393_43408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43389 === (5))){
var inst_43376 = (state_43388[(7)]);
var inst_43378 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43376);
var state_43388__$1 = state_43388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43388__$1,(8),inst_43378);
} else {
if((state_val_43389 === (6))){
var state_43388__$1 = state_43388;
var statearr_43394_43409 = state_43388__$1;
(statearr_43394_43409[(2)] = null);

(statearr_43394_43409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43389 === (7))){
var inst_43384 = (state_43388[(2)]);
var state_43388__$1 = state_43388;
var statearr_43395_43410 = state_43388__$1;
(statearr_43395_43410[(2)] = inst_43384);

(statearr_43395_43410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43389 === (8))){
var inst_43380 = (state_43388[(2)]);
var state_43388__$1 = (function (){var statearr_43396 = state_43388;
(statearr_43396[(8)] = inst_43380);

return statearr_43396;
})();
var statearr_43397_43411 = state_43388__$1;
(statearr_43397_43411[(2)] = null);

(statearr_43397_43411[(1)] = (2));


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
});})(c__33664__auto___43405,ch))
;
return ((function (switch__33643__auto__,c__33664__auto___43405,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33644__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33644__auto____0 = (function (){
var statearr_43401 = [null,null,null,null,null,null,null,null,null];
(statearr_43401[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33644__auto__);

(statearr_43401[(1)] = (1));

return statearr_43401;
});
var figwheel$client$heads_up_plugin_$_state_machine__33644__auto____1 = (function (state_43388){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_43388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e43402){if((e43402 instanceof Object)){
var ex__33647__auto__ = e43402;
var statearr_43403_43412 = state_43388;
(statearr_43403_43412[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43402;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43413 = state_43388;
state_43388 = G__43413;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33644__auto__ = function(state_43388){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33644__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33644__auto____1.call(this,state_43388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33644__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33644__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto___43405,ch))
})();
var state__33666__auto__ = (function (){var statearr_43404 = f__33665__auto__.call(null);
(statearr_43404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto___43405);

return statearr_43404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto___43405,ch))
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
var c__33664__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33664__auto__){
return (function (){
var f__33665__auto__ = (function (){var switch__33643__auto__ = ((function (c__33664__auto__){
return (function (state_43434){
var state_val_43435 = (state_43434[(1)]);
if((state_val_43435 === (1))){
var inst_43429 = cljs.core.async.timeout.call(null,(3000));
var state_43434__$1 = state_43434;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43434__$1,(2),inst_43429);
} else {
if((state_val_43435 === (2))){
var inst_43431 = (state_43434[(2)]);
var inst_43432 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43434__$1 = (function (){var statearr_43436 = state_43434;
(statearr_43436[(7)] = inst_43431);

return statearr_43436;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43434__$1,inst_43432);
} else {
return null;
}
}
});})(c__33664__auto__))
;
return ((function (switch__33643__auto__,c__33664__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33644__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33644__auto____0 = (function (){
var statearr_43440 = [null,null,null,null,null,null,null,null];
(statearr_43440[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33644__auto__);

(statearr_43440[(1)] = (1));

return statearr_43440;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33644__auto____1 = (function (state_43434){
while(true){
var ret_value__33645__auto__ = (function (){try{while(true){
var result__33646__auto__ = switch__33643__auto__.call(null,state_43434);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33646__auto__;
}
break;
}
}catch (e43441){if((e43441 instanceof Object)){
var ex__33647__auto__ = e43441;
var statearr_43442_43444 = state_43434;
(statearr_43442_43444[(5)] = ex__33647__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43434);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33645__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43445 = state_43434;
state_43434 = G__43445;
continue;
} else {
return ret_value__33645__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33644__auto__ = function(state_43434){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33644__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33644__auto____1.call(this,state_43434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33644__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33644__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33644__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33644__auto__;
})()
;})(switch__33643__auto__,c__33664__auto__))
})();
var state__33666__auto__ = (function (){var statearr_43443 = f__33665__auto__.call(null);
(statearr_43443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__33664__auto__);

return statearr_43443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33666__auto__);
});})(c__33664__auto__))
);

return c__33664__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43446){
var map__43453 = p__43446;
var map__43453__$1 = ((((!((map__43453 == null)))?((((map__43453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43453):map__43453);
var ed = map__43453__$1;
var formatted_exception = cljs.core.get.call(null,map__43453__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43453__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43453__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43455_43459 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43456_43460 = null;
var count__43457_43461 = (0);
var i__43458_43462 = (0);
while(true){
if((i__43458_43462 < count__43457_43461)){
var msg_43463 = cljs.core._nth.call(null,chunk__43456_43460,i__43458_43462);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43463);

var G__43464 = seq__43455_43459;
var G__43465 = chunk__43456_43460;
var G__43466 = count__43457_43461;
var G__43467 = (i__43458_43462 + (1));
seq__43455_43459 = G__43464;
chunk__43456_43460 = G__43465;
count__43457_43461 = G__43466;
i__43458_43462 = G__43467;
continue;
} else {
var temp__4657__auto___43468 = cljs.core.seq.call(null,seq__43455_43459);
if(temp__4657__auto___43468){
var seq__43455_43469__$1 = temp__4657__auto___43468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43455_43469__$1)){
var c__19529__auto___43470 = cljs.core.chunk_first.call(null,seq__43455_43469__$1);
var G__43471 = cljs.core.chunk_rest.call(null,seq__43455_43469__$1);
var G__43472 = c__19529__auto___43470;
var G__43473 = cljs.core.count.call(null,c__19529__auto___43470);
var G__43474 = (0);
seq__43455_43459 = G__43471;
chunk__43456_43460 = G__43472;
count__43457_43461 = G__43473;
i__43458_43462 = G__43474;
continue;
} else {
var msg_43475 = cljs.core.first.call(null,seq__43455_43469__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43475);

var G__43476 = cljs.core.next.call(null,seq__43455_43469__$1);
var G__43477 = null;
var G__43478 = (0);
var G__43479 = (0);
seq__43455_43459 = G__43476;
chunk__43456_43460 = G__43477;
count__43457_43461 = G__43478;
i__43458_43462 = G__43479;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43480){
var map__43483 = p__43480;
var map__43483__$1 = ((((!((map__43483 == null)))?((((map__43483.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43483.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43483):map__43483);
var w = map__43483__$1;
var message = cljs.core.get.call(null,map__43483__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__43491 = cljs.core.seq.call(null,plugins);
var chunk__43492 = null;
var count__43493 = (0);
var i__43494 = (0);
while(true){
if((i__43494 < count__43493)){
var vec__43495 = cljs.core._nth.call(null,chunk__43492,i__43494);
var k = cljs.core.nth.call(null,vec__43495,(0),null);
var plugin = cljs.core.nth.call(null,vec__43495,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43497 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43491,chunk__43492,count__43493,i__43494,pl_43497,vec__43495,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43497.call(null,msg_hist);
});})(seq__43491,chunk__43492,count__43493,i__43494,pl_43497,vec__43495,k,plugin))
);
} else {
}

var G__43498 = seq__43491;
var G__43499 = chunk__43492;
var G__43500 = count__43493;
var G__43501 = (i__43494 + (1));
seq__43491 = G__43498;
chunk__43492 = G__43499;
count__43493 = G__43500;
i__43494 = G__43501;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43491);
if(temp__4657__auto__){
var seq__43491__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43491__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__43491__$1);
var G__43502 = cljs.core.chunk_rest.call(null,seq__43491__$1);
var G__43503 = c__19529__auto__;
var G__43504 = cljs.core.count.call(null,c__19529__auto__);
var G__43505 = (0);
seq__43491 = G__43502;
chunk__43492 = G__43503;
count__43493 = G__43504;
i__43494 = G__43505;
continue;
} else {
var vec__43496 = cljs.core.first.call(null,seq__43491__$1);
var k = cljs.core.nth.call(null,vec__43496,(0),null);
var plugin = cljs.core.nth.call(null,vec__43496,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43506 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43491,chunk__43492,count__43493,i__43494,pl_43506,vec__43496,k,plugin,seq__43491__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43506.call(null,msg_hist);
});})(seq__43491,chunk__43492,count__43493,i__43494,pl_43506,vec__43496,k,plugin,seq__43491__$1,temp__4657__auto__))
);
} else {
}

var G__43507 = cljs.core.next.call(null,seq__43491__$1);
var G__43508 = null;
var G__43509 = (0);
var G__43510 = (0);
seq__43491 = G__43507;
chunk__43492 = G__43508;
count__43493 = G__43509;
i__43494 = G__43510;
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
var args43511 = [];
var len__19784__auto___43514 = arguments.length;
var i__19785__auto___43515 = (0);
while(true){
if((i__19785__auto___43515 < len__19784__auto___43514)){
args43511.push((arguments[i__19785__auto___43515]));

var G__43516 = (i__19785__auto___43515 + (1));
i__19785__auto___43515 = G__43516;
continue;
} else {
}
break;
}

var G__43513 = args43511.length;
switch (G__43513) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43511.length)].join('')));

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
var len__19784__auto___43522 = arguments.length;
var i__19785__auto___43523 = (0);
while(true){
if((i__19785__auto___43523 < len__19784__auto___43522)){
args__19791__auto__.push((arguments[i__19785__auto___43523]));

var G__43524 = (i__19785__auto___43523 + (1));
i__19785__auto___43523 = G__43524;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43519){
var map__43520 = p__43519;
var map__43520__$1 = ((((!((map__43520 == null)))?((((map__43520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43520):map__43520);
var opts = map__43520__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43518){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43518));
});

//# sourceMappingURL=client.js.map