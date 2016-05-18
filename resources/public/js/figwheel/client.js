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
var pred__43026 = cljs.core._EQ_;
var expr__43027 = (function (){var or__18726__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__18726__auto__)){
return or__18726__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43026.call(null,"true",expr__43027))){
return true;
} else {
if(cljs.core.truth_(pred__43026.call(null,"false",expr__43027))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43027)].join('')));
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
var len__19784__auto___43030 = arguments.length;
var i__19785__auto___43031 = (0);
while(true){
if((i__19785__auto___43031 < len__19784__auto___43030)){
args__19791__auto__.push((arguments[i__19785__auto___43031]));

var G__43032 = (i__19785__auto___43031 + (1));
i__19785__auto___43031 = G__43032;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq43029){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43029));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43033){
var map__43036 = p__43033;
var map__43036__$1 = ((((!((map__43036 == null)))?((((map__43036.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43036.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43036):map__43036);
var message = cljs.core.get.call(null,map__43036__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43036__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__38071__auto___43198 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___43198,ch){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___43198,ch){
return (function (state_43167){
var state_val_43168 = (state_43167[(1)]);
if((state_val_43168 === (7))){
var inst_43163 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43169_43199 = state_43167__$1;
(statearr_43169_43199[(2)] = inst_43163);

(statearr_43169_43199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (1))){
var state_43167__$1 = state_43167;
var statearr_43170_43200 = state_43167__$1;
(statearr_43170_43200[(2)] = null);

(statearr_43170_43200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (4))){
var inst_43120 = (state_43167[(7)]);
var inst_43120__$1 = (state_43167[(2)]);
var state_43167__$1 = (function (){var statearr_43171 = state_43167;
(statearr_43171[(7)] = inst_43120__$1);

return statearr_43171;
})();
if(cljs.core.truth_(inst_43120__$1)){
var statearr_43172_43201 = state_43167__$1;
(statearr_43172_43201[(1)] = (5));

} else {
var statearr_43173_43202 = state_43167__$1;
(statearr_43173_43202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (15))){
var inst_43127 = (state_43167[(8)]);
var inst_43142 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43127);
var inst_43143 = cljs.core.first.call(null,inst_43142);
var inst_43144 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43143);
var inst_43145 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_43144)].join('');
var inst_43146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43145);
var state_43167__$1 = state_43167;
var statearr_43174_43203 = state_43167__$1;
(statearr_43174_43203[(2)] = inst_43146);

(statearr_43174_43203[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (13))){
var inst_43151 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43175_43204 = state_43167__$1;
(statearr_43175_43204[(2)] = inst_43151);

(statearr_43175_43204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (6))){
var state_43167__$1 = state_43167;
var statearr_43176_43205 = state_43167__$1;
(statearr_43176_43205[(2)] = null);

(statearr_43176_43205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (17))){
var inst_43149 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43177_43206 = state_43167__$1;
(statearr_43177_43206[(2)] = inst_43149);

(statearr_43177_43206[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (3))){
var inst_43165 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43167__$1,inst_43165);
} else {
if((state_val_43168 === (12))){
var inst_43126 = (state_43167[(9)]);
var inst_43140 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43126,opts);
var state_43167__$1 = state_43167;
if(cljs.core.truth_(inst_43140)){
var statearr_43178_43207 = state_43167__$1;
(statearr_43178_43207[(1)] = (15));

} else {
var statearr_43179_43208 = state_43167__$1;
(statearr_43179_43208[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (2))){
var state_43167__$1 = state_43167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43167__$1,(4),ch);
} else {
if((state_val_43168 === (11))){
var inst_43127 = (state_43167[(8)]);
var inst_43132 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43133 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43127);
var inst_43134 = cljs.core.async.timeout.call(null,(1000));
var inst_43135 = [inst_43133,inst_43134];
var inst_43136 = (new cljs.core.PersistentVector(null,2,(5),inst_43132,inst_43135,null));
var state_43167__$1 = state_43167;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43167__$1,(14),inst_43136);
} else {
if((state_val_43168 === (9))){
var inst_43127 = (state_43167[(8)]);
var inst_43153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43154 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43127);
var inst_43155 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43154);
var inst_43156 = [cljs.core.str("Not loading: "),cljs.core.str(inst_43155)].join('');
var inst_43157 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43156);
var state_43167__$1 = (function (){var statearr_43180 = state_43167;
(statearr_43180[(10)] = inst_43153);

return statearr_43180;
})();
var statearr_43181_43209 = state_43167__$1;
(statearr_43181_43209[(2)] = inst_43157);

(statearr_43181_43209[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (5))){
var inst_43120 = (state_43167[(7)]);
var inst_43122 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43123 = (new cljs.core.PersistentArrayMap(null,2,inst_43122,null));
var inst_43124 = (new cljs.core.PersistentHashSet(null,inst_43123,null));
var inst_43125 = figwheel.client.focus_msgs.call(null,inst_43124,inst_43120);
var inst_43126 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43125);
var inst_43127 = cljs.core.first.call(null,inst_43125);
var inst_43128 = figwheel.client.autoload_QMARK_.call(null);
var state_43167__$1 = (function (){var statearr_43182 = state_43167;
(statearr_43182[(8)] = inst_43127);

(statearr_43182[(9)] = inst_43126);

return statearr_43182;
})();
if(cljs.core.truth_(inst_43128)){
var statearr_43183_43210 = state_43167__$1;
(statearr_43183_43210[(1)] = (8));

} else {
var statearr_43184_43211 = state_43167__$1;
(statearr_43184_43211[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (14))){
var inst_43138 = (state_43167[(2)]);
var state_43167__$1 = state_43167;
var statearr_43185_43212 = state_43167__$1;
(statearr_43185_43212[(2)] = inst_43138);

(statearr_43185_43212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (16))){
var state_43167__$1 = state_43167;
var statearr_43186_43213 = state_43167__$1;
(statearr_43186_43213[(2)] = null);

(statearr_43186_43213[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (10))){
var inst_43159 = (state_43167[(2)]);
var state_43167__$1 = (function (){var statearr_43187 = state_43167;
(statearr_43187[(11)] = inst_43159);

return statearr_43187;
})();
var statearr_43188_43214 = state_43167__$1;
(statearr_43188_43214[(2)] = null);

(statearr_43188_43214[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43168 === (8))){
var inst_43126 = (state_43167[(9)]);
var inst_43130 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43126,opts);
var state_43167__$1 = state_43167;
if(cljs.core.truth_(inst_43130)){
var statearr_43189_43215 = state_43167__$1;
(statearr_43189_43215[(1)] = (11));

} else {
var statearr_43190_43216 = state_43167__$1;
(statearr_43190_43216[(1)] = (12));

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
});})(c__38071__auto___43198,ch))
;
return ((function (switch__37506__auto__,c__38071__auto___43198,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37508__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37508__auto____0 = (function (){
var statearr_43194 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43194[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37508__auto__);

(statearr_43194[(1)] = (1));

return statearr_43194;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37508__auto____1 = (function (state_43167){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_43167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e43195){if((e43195 instanceof Object)){
var ex__37511__auto__ = e43195;
var statearr_43196_43217 = state_43167;
(statearr_43196_43217[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43195;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43218 = state_43167;
state_43167 = G__43218;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37508__auto__ = function(state_43167){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37508__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37508__auto____1.call(this,state_43167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37508__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37508__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___43198,ch))
})();
var state__38073__auto__ = (function (){var statearr_43197 = f__38072__auto__.call(null);
(statearr_43197[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___43198);

return statearr_43197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___43198,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43219_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43219_SHARP_));
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
var base_path_43226 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43226){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_43224 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_43225 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43225;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43224;
}}catch (e43223){if((e43223 instanceof Error)){
var e = e43223;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43226], null));
} else {
var e = e43223;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43226))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43227){
var map__43234 = p__43227;
var map__43234__$1 = ((((!((map__43234 == null)))?((((map__43234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43234):map__43234);
var opts = map__43234__$1;
var build_id = cljs.core.get.call(null,map__43234__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43234,map__43234__$1,opts,build_id){
return (function (p__43236){
var vec__43237 = p__43236;
var map__43238 = cljs.core.nth.call(null,vec__43237,(0),null);
var map__43238__$1 = ((((!((map__43238 == null)))?((((map__43238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43238):map__43238);
var msg = map__43238__$1;
var msg_name = cljs.core.get.call(null,map__43238__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43237,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43237,map__43238,map__43238__$1,msg,msg_name,_,map__43234,map__43234__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43237,map__43238,map__43238__$1,msg,msg_name,_,map__43234,map__43234__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43234,map__43234__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43244){
var vec__43245 = p__43244;
var map__43246 = cljs.core.nth.call(null,vec__43245,(0),null);
var map__43246__$1 = ((((!((map__43246 == null)))?((((map__43246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43246):map__43246);
var msg = map__43246__$1;
var msg_name = cljs.core.get.call(null,map__43246__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43245,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43248){
var map__43258 = p__43248;
var map__43258__$1 = ((((!((map__43258 == null)))?((((map__43258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43258):map__43258);
var on_compile_warning = cljs.core.get.call(null,map__43258__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43258__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43258,map__43258__$1,on_compile_warning,on_compile_fail){
return (function (p__43260){
var vec__43261 = p__43260;
var map__43262 = cljs.core.nth.call(null,vec__43261,(0),null);
var map__43262__$1 = ((((!((map__43262 == null)))?((((map__43262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43262):map__43262);
var msg = map__43262__$1;
var msg_name = cljs.core.get.call(null,map__43262__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__43261,(1));
var pred__43264 = cljs.core._EQ_;
var expr__43265 = msg_name;
if(cljs.core.truth_(pred__43264.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43265))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43264.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43265))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43258,map__43258__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__,msg_hist,msg_names,msg){
return (function (state_43481){
var state_val_43482 = (state_43481[(1)]);
if((state_val_43482 === (7))){
var inst_43405 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43405)){
var statearr_43483_43529 = state_43481__$1;
(statearr_43483_43529[(1)] = (8));

} else {
var statearr_43484_43530 = state_43481__$1;
(statearr_43484_43530[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (20))){
var inst_43475 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43485_43531 = state_43481__$1;
(statearr_43485_43531[(2)] = inst_43475);

(statearr_43485_43531[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (27))){
var inst_43471 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43486_43532 = state_43481__$1;
(statearr_43486_43532[(2)] = inst_43471);

(statearr_43486_43532[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (1))){
var inst_43398 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43398)){
var statearr_43487_43533 = state_43481__$1;
(statearr_43487_43533[(1)] = (2));

} else {
var statearr_43488_43534 = state_43481__$1;
(statearr_43488_43534[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (24))){
var inst_43473 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43489_43535 = state_43481__$1;
(statearr_43489_43535[(2)] = inst_43473);

(statearr_43489_43535[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (4))){
var inst_43479 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43481__$1,inst_43479);
} else {
if((state_val_43482 === (15))){
var inst_43477 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43490_43536 = state_43481__$1;
(statearr_43490_43536[(2)] = inst_43477);

(statearr_43490_43536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (21))){
var inst_43436 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43491_43537 = state_43481__$1;
(statearr_43491_43537[(2)] = inst_43436);

(statearr_43491_43537[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (31))){
var inst_43460 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43460)){
var statearr_43492_43538 = state_43481__$1;
(statearr_43492_43538[(1)] = (34));

} else {
var statearr_43493_43539 = state_43481__$1;
(statearr_43493_43539[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (32))){
var inst_43469 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43494_43540 = state_43481__$1;
(statearr_43494_43540[(2)] = inst_43469);

(statearr_43494_43540[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (33))){
var inst_43458 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43495_43541 = state_43481__$1;
(statearr_43495_43541[(2)] = inst_43458);

(statearr_43495_43541[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (13))){
var inst_43419 = figwheel.client.heads_up.clear.call(null);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(16),inst_43419);
} else {
if((state_val_43482 === (22))){
var inst_43440 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43441 = figwheel.client.heads_up.append_message.call(null,inst_43440);
var state_43481__$1 = state_43481;
var statearr_43496_43542 = state_43481__$1;
(statearr_43496_43542[(2)] = inst_43441);

(statearr_43496_43542[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (36))){
var inst_43467 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43497_43543 = state_43481__$1;
(statearr_43497_43543[(2)] = inst_43467);

(statearr_43497_43543[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (29))){
var inst_43451 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43498_43544 = state_43481__$1;
(statearr_43498_43544[(2)] = inst_43451);

(statearr_43498_43544[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (6))){
var inst_43400 = (state_43481[(7)]);
var state_43481__$1 = state_43481;
var statearr_43499_43545 = state_43481__$1;
(statearr_43499_43545[(2)] = inst_43400);

(statearr_43499_43545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (28))){
var inst_43447 = (state_43481[(2)]);
var inst_43448 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43449 = figwheel.client.heads_up.display_warning.call(null,inst_43448);
var state_43481__$1 = (function (){var statearr_43500 = state_43481;
(statearr_43500[(8)] = inst_43447);

return statearr_43500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(29),inst_43449);
} else {
if((state_val_43482 === (25))){
var inst_43445 = figwheel.client.heads_up.clear.call(null);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(28),inst_43445);
} else {
if((state_val_43482 === (34))){
var inst_43462 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(37),inst_43462);
} else {
if((state_val_43482 === (17))){
var inst_43427 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43501_43546 = state_43481__$1;
(statearr_43501_43546[(2)] = inst_43427);

(statearr_43501_43546[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (3))){
var inst_43417 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43417)){
var statearr_43502_43547 = state_43481__$1;
(statearr_43502_43547[(1)] = (13));

} else {
var statearr_43503_43548 = state_43481__$1;
(statearr_43503_43548[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (12))){
var inst_43413 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43504_43549 = state_43481__$1;
(statearr_43504_43549[(2)] = inst_43413);

(statearr_43504_43549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (2))){
var inst_43400 = (state_43481[(7)]);
var inst_43400__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43481__$1 = (function (){var statearr_43505 = state_43481;
(statearr_43505[(7)] = inst_43400__$1);

return statearr_43505;
})();
if(cljs.core.truth_(inst_43400__$1)){
var statearr_43506_43550 = state_43481__$1;
(statearr_43506_43550[(1)] = (5));

} else {
var statearr_43507_43551 = state_43481__$1;
(statearr_43507_43551[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (23))){
var inst_43443 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43443)){
var statearr_43508_43552 = state_43481__$1;
(statearr_43508_43552[(1)] = (25));

} else {
var statearr_43509_43553 = state_43481__$1;
(statearr_43509_43553[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (35))){
var state_43481__$1 = state_43481;
var statearr_43510_43554 = state_43481__$1;
(statearr_43510_43554[(2)] = null);

(statearr_43510_43554[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (19))){
var inst_43438 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43438)){
var statearr_43511_43555 = state_43481__$1;
(statearr_43511_43555[(1)] = (22));

} else {
var statearr_43512_43556 = state_43481__$1;
(statearr_43512_43556[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (11))){
var inst_43409 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43513_43557 = state_43481__$1;
(statearr_43513_43557[(2)] = inst_43409);

(statearr_43513_43557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (9))){
var inst_43411 = figwheel.client.heads_up.clear.call(null);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(12),inst_43411);
} else {
if((state_val_43482 === (5))){
var inst_43402 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43481__$1 = state_43481;
var statearr_43514_43558 = state_43481__$1;
(statearr_43514_43558[(2)] = inst_43402);

(statearr_43514_43558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (14))){
var inst_43429 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43429)){
var statearr_43515_43559 = state_43481__$1;
(statearr_43515_43559[(1)] = (18));

} else {
var statearr_43516_43560 = state_43481__$1;
(statearr_43516_43560[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (26))){
var inst_43453 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43481__$1 = state_43481;
if(cljs.core.truth_(inst_43453)){
var statearr_43517_43561 = state_43481__$1;
(statearr_43517_43561[(1)] = (30));

} else {
var statearr_43518_43562 = state_43481__$1;
(statearr_43518_43562[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (16))){
var inst_43421 = (state_43481[(2)]);
var inst_43422 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43423 = figwheel.client.format_messages.call(null,inst_43422);
var inst_43424 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43425 = figwheel.client.heads_up.display_error.call(null,inst_43423,inst_43424);
var state_43481__$1 = (function (){var statearr_43519 = state_43481;
(statearr_43519[(9)] = inst_43421);

return statearr_43519;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(17),inst_43425);
} else {
if((state_val_43482 === (30))){
var inst_43455 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43456 = figwheel.client.heads_up.display_warning.call(null,inst_43455);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(33),inst_43456);
} else {
if((state_val_43482 === (10))){
var inst_43415 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43520_43563 = state_43481__$1;
(statearr_43520_43563[(2)] = inst_43415);

(statearr_43520_43563[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (18))){
var inst_43431 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43432 = figwheel.client.format_messages.call(null,inst_43431);
var inst_43433 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43434 = figwheel.client.heads_up.display_error.call(null,inst_43432,inst_43433);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(21),inst_43434);
} else {
if((state_val_43482 === (37))){
var inst_43464 = (state_43481[(2)]);
var state_43481__$1 = state_43481;
var statearr_43521_43564 = state_43481__$1;
(statearr_43521_43564[(2)] = inst_43464);

(statearr_43521_43564[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43482 === (8))){
var inst_43407 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43481__$1 = state_43481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43481__$1,(11),inst_43407);
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
});})(c__38071__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37506__auto__,c__38071__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto____0 = (function (){
var statearr_43525 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43525[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto__);

(statearr_43525[(1)] = (1));

return statearr_43525;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto____1 = (function (state_43481){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_43481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e43526){if((e43526 instanceof Object)){
var ex__37511__auto__ = e43526;
var statearr_43527_43565 = state_43481;
(statearr_43527_43565[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43566 = state_43481;
state_43481 = G__43566;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto__ = function(state_43481){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto____1.call(this,state_43481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__,msg_hist,msg_names,msg))
})();
var state__38073__auto__ = (function (){var statearr_43528 = f__38072__auto__.call(null);
(statearr_43528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_43528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__,msg_hist,msg_names,msg))
);

return c__38071__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38071__auto___43629 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto___43629,ch){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto___43629,ch){
return (function (state_43612){
var state_val_43613 = (state_43612[(1)]);
if((state_val_43613 === (1))){
var state_43612__$1 = state_43612;
var statearr_43614_43630 = state_43612__$1;
(statearr_43614_43630[(2)] = null);

(statearr_43614_43630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (2))){
var state_43612__$1 = state_43612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43612__$1,(4),ch);
} else {
if((state_val_43613 === (3))){
var inst_43610 = (state_43612[(2)]);
var state_43612__$1 = state_43612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43612__$1,inst_43610);
} else {
if((state_val_43613 === (4))){
var inst_43600 = (state_43612[(7)]);
var inst_43600__$1 = (state_43612[(2)]);
var state_43612__$1 = (function (){var statearr_43615 = state_43612;
(statearr_43615[(7)] = inst_43600__$1);

return statearr_43615;
})();
if(cljs.core.truth_(inst_43600__$1)){
var statearr_43616_43631 = state_43612__$1;
(statearr_43616_43631[(1)] = (5));

} else {
var statearr_43617_43632 = state_43612__$1;
(statearr_43617_43632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (5))){
var inst_43600 = (state_43612[(7)]);
var inst_43602 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43600);
var state_43612__$1 = state_43612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43612__$1,(8),inst_43602);
} else {
if((state_val_43613 === (6))){
var state_43612__$1 = state_43612;
var statearr_43618_43633 = state_43612__$1;
(statearr_43618_43633[(2)] = null);

(statearr_43618_43633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (7))){
var inst_43608 = (state_43612[(2)]);
var state_43612__$1 = state_43612;
var statearr_43619_43634 = state_43612__$1;
(statearr_43619_43634[(2)] = inst_43608);

(statearr_43619_43634[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43613 === (8))){
var inst_43604 = (state_43612[(2)]);
var state_43612__$1 = (function (){var statearr_43620 = state_43612;
(statearr_43620[(8)] = inst_43604);

return statearr_43620;
})();
var statearr_43621_43635 = state_43612__$1;
(statearr_43621_43635[(2)] = null);

(statearr_43621_43635[(1)] = (2));


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
});})(c__38071__auto___43629,ch))
;
return ((function (switch__37506__auto__,c__38071__auto___43629,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37508__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37508__auto____0 = (function (){
var statearr_43625 = [null,null,null,null,null,null,null,null,null];
(statearr_43625[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37508__auto__);

(statearr_43625[(1)] = (1));

return statearr_43625;
});
var figwheel$client$heads_up_plugin_$_state_machine__37508__auto____1 = (function (state_43612){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_43612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e43626){if((e43626 instanceof Object)){
var ex__37511__auto__ = e43626;
var statearr_43627_43636 = state_43612;
(statearr_43627_43636[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43637 = state_43612;
state_43612 = G__43637;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37508__auto__ = function(state_43612){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37508__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37508__auto____1.call(this,state_43612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37508__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37508__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto___43629,ch))
})();
var state__38073__auto__ = (function (){var statearr_43628 = f__38072__auto__.call(null);
(statearr_43628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto___43629);

return statearr_43628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto___43629,ch))
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
var c__38071__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38071__auto__){
return (function (){
var f__38072__auto__ = (function (){var switch__37506__auto__ = ((function (c__38071__auto__){
return (function (state_43658){
var state_val_43659 = (state_43658[(1)]);
if((state_val_43659 === (1))){
var inst_43653 = cljs.core.async.timeout.call(null,(3000));
var state_43658__$1 = state_43658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43658__$1,(2),inst_43653);
} else {
if((state_val_43659 === (2))){
var inst_43655 = (state_43658[(2)]);
var inst_43656 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43658__$1 = (function (){var statearr_43660 = state_43658;
(statearr_43660[(7)] = inst_43655);

return statearr_43660;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43658__$1,inst_43656);
} else {
return null;
}
}
});})(c__38071__auto__))
;
return ((function (switch__37506__auto__,c__38071__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37508__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37508__auto____0 = (function (){
var statearr_43664 = [null,null,null,null,null,null,null,null];
(statearr_43664[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37508__auto__);

(statearr_43664[(1)] = (1));

return statearr_43664;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37508__auto____1 = (function (state_43658){
while(true){
var ret_value__37509__auto__ = (function (){try{while(true){
var result__37510__auto__ = switch__37506__auto__.call(null,state_43658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37510__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37510__auto__;
}
break;
}
}catch (e43665){if((e43665 instanceof Object)){
var ex__37511__auto__ = e43665;
var statearr_43666_43668 = state_43658;
(statearr_43666_43668[(5)] = ex__37511__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43665;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37509__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43669 = state_43658;
state_43658 = G__43669;
continue;
} else {
return ret_value__37509__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37508__auto__ = function(state_43658){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37508__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37508__auto____1.call(this,state_43658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37508__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37508__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37508__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37508__auto__;
})()
;})(switch__37506__auto__,c__38071__auto__))
})();
var state__38073__auto__ = (function (){var statearr_43667 = f__38072__auto__.call(null);
(statearr_43667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38071__auto__);

return statearr_43667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38073__auto__);
});})(c__38071__auto__))
);

return c__38071__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__43670){
var map__43677 = p__43670;
var map__43677__$1 = ((((!((map__43677 == null)))?((((map__43677.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43677.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43677):map__43677);
var ed = map__43677__$1;
var formatted_exception = cljs.core.get.call(null,map__43677__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__43677__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__43677__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__43679_43683 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__43680_43684 = null;
var count__43681_43685 = (0);
var i__43682_43686 = (0);
while(true){
if((i__43682_43686 < count__43681_43685)){
var msg_43687 = cljs.core._nth.call(null,chunk__43680_43684,i__43682_43686);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43687);

var G__43688 = seq__43679_43683;
var G__43689 = chunk__43680_43684;
var G__43690 = count__43681_43685;
var G__43691 = (i__43682_43686 + (1));
seq__43679_43683 = G__43688;
chunk__43680_43684 = G__43689;
count__43681_43685 = G__43690;
i__43682_43686 = G__43691;
continue;
} else {
var temp__4657__auto___43692 = cljs.core.seq.call(null,seq__43679_43683);
if(temp__4657__auto___43692){
var seq__43679_43693__$1 = temp__4657__auto___43692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43679_43693__$1)){
var c__19529__auto___43694 = cljs.core.chunk_first.call(null,seq__43679_43693__$1);
var G__43695 = cljs.core.chunk_rest.call(null,seq__43679_43693__$1);
var G__43696 = c__19529__auto___43694;
var G__43697 = cljs.core.count.call(null,c__19529__auto___43694);
var G__43698 = (0);
seq__43679_43683 = G__43695;
chunk__43680_43684 = G__43696;
count__43681_43685 = G__43697;
i__43682_43686 = G__43698;
continue;
} else {
var msg_43699 = cljs.core.first.call(null,seq__43679_43693__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_43699);

var G__43700 = cljs.core.next.call(null,seq__43679_43693__$1);
var G__43701 = null;
var G__43702 = (0);
var G__43703 = (0);
seq__43679_43683 = G__43700;
chunk__43680_43684 = G__43701;
count__43681_43685 = G__43702;
i__43682_43686 = G__43703;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__43704){
var map__43707 = p__43704;
var map__43707__$1 = ((((!((map__43707 == null)))?((((map__43707.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43707.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43707):map__43707);
var w = map__43707__$1;
var message = cljs.core.get.call(null,map__43707__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__43715 = cljs.core.seq.call(null,plugins);
var chunk__43716 = null;
var count__43717 = (0);
var i__43718 = (0);
while(true){
if((i__43718 < count__43717)){
var vec__43719 = cljs.core._nth.call(null,chunk__43716,i__43718);
var k = cljs.core.nth.call(null,vec__43719,(0),null);
var plugin = cljs.core.nth.call(null,vec__43719,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43721 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43715,chunk__43716,count__43717,i__43718,pl_43721,vec__43719,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_43721.call(null,msg_hist);
});})(seq__43715,chunk__43716,count__43717,i__43718,pl_43721,vec__43719,k,plugin))
);
} else {
}

var G__43722 = seq__43715;
var G__43723 = chunk__43716;
var G__43724 = count__43717;
var G__43725 = (i__43718 + (1));
seq__43715 = G__43722;
chunk__43716 = G__43723;
count__43717 = G__43724;
i__43718 = G__43725;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43715);
if(temp__4657__auto__){
var seq__43715__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43715__$1)){
var c__19529__auto__ = cljs.core.chunk_first.call(null,seq__43715__$1);
var G__43726 = cljs.core.chunk_rest.call(null,seq__43715__$1);
var G__43727 = c__19529__auto__;
var G__43728 = cljs.core.count.call(null,c__19529__auto__);
var G__43729 = (0);
seq__43715 = G__43726;
chunk__43716 = G__43727;
count__43717 = G__43728;
i__43718 = G__43729;
continue;
} else {
var vec__43720 = cljs.core.first.call(null,seq__43715__$1);
var k = cljs.core.nth.call(null,vec__43720,(0),null);
var plugin = cljs.core.nth.call(null,vec__43720,(1),null);
if(cljs.core.truth_(plugin)){
var pl_43730 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__43715,chunk__43716,count__43717,i__43718,pl_43730,vec__43720,k,plugin,seq__43715__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_43730.call(null,msg_hist);
});})(seq__43715,chunk__43716,count__43717,i__43718,pl_43730,vec__43720,k,plugin,seq__43715__$1,temp__4657__auto__))
);
} else {
}

var G__43731 = cljs.core.next.call(null,seq__43715__$1);
var G__43732 = null;
var G__43733 = (0);
var G__43734 = (0);
seq__43715 = G__43731;
chunk__43716 = G__43732;
count__43717 = G__43733;
i__43718 = G__43734;
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
var args43735 = [];
var len__19784__auto___43738 = arguments.length;
var i__19785__auto___43739 = (0);
while(true){
if((i__19785__auto___43739 < len__19784__auto___43738)){
args43735.push((arguments[i__19785__auto___43739]));

var G__43740 = (i__19785__auto___43739 + (1));
i__19785__auto___43739 = G__43740;
continue;
} else {
}
break;
}

var G__43737 = args43735.length;
switch (G__43737) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43735.length)].join('')));

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
var len__19784__auto___43746 = arguments.length;
var i__19785__auto___43747 = (0);
while(true){
if((i__19785__auto___43747 < len__19784__auto___43746)){
args__19791__auto__.push((arguments[i__19785__auto___43747]));

var G__43748 = (i__19785__auto___43747 + (1));
i__19785__auto___43747 = G__43748;
continue;
} else {
}
break;
}

var argseq__19792__auto__ = ((((0) < args__19791__auto__.length))?(new cljs.core.IndexedSeq(args__19791__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19792__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43743){
var map__43744 = p__43743;
var map__43744__$1 = ((((!((map__43744 == null)))?((((map__43744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43744):map__43744);
var opts = map__43744__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43742){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43742));
});

//# sourceMappingURL=client.js.map