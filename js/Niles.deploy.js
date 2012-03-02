smalltalk.addPackage('Niles', {});
smalltalk.addClass('NilesApp', smalltalk.Object, ['list'], 'Niles');
smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(unescape("%23niles-content"), "_asJQuery", []), "_empty", []);
(self['@list']=nil);
return self;}
}),
smalltalk.NilesApp);

smalltalk.addMethod(
unescape('_load_'),
smalltalk.method({
selector: unescape('load%3A'),
fn: function (aUrl){
var self=this;
smalltalk.send(self, "_clear", []);
(($receiver = self['@list']) == nil || $receiver == undefined) ? (function(){(self['@list']=smalltalk.send((smalltalk.JQList || JQList), "_new", []));return smalltalk.send(self['@list'], "_appendToJQuery_", [smalltalk.send(unescape("%23niles-content"), "_asJQuery", [])]);})() : $receiver;
smalltalk.send((smalltalk.Jenkins || Jenkins), "_fetchFor_depth_onSuccess_onError_", [aUrl, (1), (function(data){return smalltalk.send(smalltalk.send(data, "_jobs", []), "_do_", [(function(job){var item=nil;
(item=(function($rec){smalltalk.send($rec, "_withLabel_", [smalltalk.send(job, "_name", [])]);smalltalk.send($rec, "_withHref_", [smalltalk.send(job, "_url", [])]);return smalltalk.send($rec, "_withOnClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("Navigating to: ", "__comma", [smalltalk.send(job, "_name", [])])]);return smalltalk.send(event, "_preventDefault", []);})]);})(smalltalk.send((smalltalk.JQListItem || JQListItem), "_new", [])));((($receiver = smalltalk.send(smalltalk.send(job, "_color", []), "__eq", ["yellow"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(item, "_turnYellow", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(item, "_turnYellow", []);})]));((($receiver = ((($receiver = smalltalk.send(smalltalk.send(job, "_description", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(item, "_withDescription_", [smalltalk.send(job, "_description", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(item, "_withDescription_", [smalltalk.send(job, "_description", [])]);})]));return smalltalk.send(self['@list'], "_addItem_", [item]);})]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Fucking fuck"]);})]);
return self;}
}),
smalltalk.NilesApp);

smalltalk.addMethod(
unescape('_submitForm'),
smalltalk.method({
selector: unescape('submitForm'),
fn: function (){
var self=this;
smalltalk.send(self, "_load_", [smalltalk.send(smalltalk.send(unescape("%23url-input"), "_asJQuery", []), "_val", [])]);
return self;}
}),
smalltalk.NilesApp);


smalltalk.NilesApp.klass.iVarNames = ['app'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
fn: function (){
var self=this;
return (($receiver = self['@app']) == nil || $receiver == undefined) ? (function(){return (self['@app']=smalltalk.send(self, "_new", [], smalltalk.Object.klass));})() : $receiver;
return self;}
}),
smalltalk.NilesApp.klass);


