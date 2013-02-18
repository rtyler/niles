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
var njob=nil;
(njob=smalltalk.send(smalltalk.send((smalltalk.Job || Job), "_new", []), "_fromDictionary_", [job]));return smalltalk.send(self['@list'], "_addItem_", [smalltalk.send(njob, "_asListItem", [])]);})]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Fucking fuck"]);})]);
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


smalltalk.addClass('Job', smalltalk.Object, ['description', 'url', 'buildable', 'stable', 'myname', 'page'], 'Niles');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@description']="");
(self['@url']="");
(self['@buildable']=false);
(self['@stable']=false);
(self['@myname']="");
return self;}
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_fromDictionary_'),
smalltalk.method({
selector: unescape('fromDictionary%3A'),
fn: function (aDictionary){
var self=this;
(self['@myname']=smalltalk.send(aDictionary, "_name", []));
(self['@url']=smalltalk.send(aDictionary, "_url", []));
(self['@description']=(($receiver = smalltalk.send(aDictionary, "_at_", ["description"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver);
(self['@buildable']=smalltalk.send(aDictionary, "_buildable", []));
((($receiver = smalltalk.send(smalltalk.send(aDictionary, "_color", []), "__eq", ["blue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@stable']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@stable']=true);})]));
return self;}
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_asListItem'),
smalltalk.method({
selector: unescape('asListItem'),
fn: function (){
var self=this;
var item=nil;
(item=(function($rec){smalltalk.send($rec, "_withLabel_", [self['@myname']]);return smalltalk.send($rec, "_withOnClick_", [(function(event){var page=nil;
(page=smalltalk.send(self, "_asPage", []));smalltalk.send(page, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);jQuery.mobile.changePage('#' + page._elementId());;return smalltalk.send(event, "_preventDefault", []);})]);})(smalltalk.send((smalltalk.JQListItem || JQListItem), "_new", [])));
((($receiver = self['@stable']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(item, "_turnYellow", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(item, "_turnYellow", []);})]));
((($receiver = ((($receiver = smalltalk.send(self['@description'], "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(item, "_withDescription_", [self['@description']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(item, "_withDescription_", [self['@description']]);})]));
return item;
return self;}
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_asPage'),
smalltalk.method({
selector: unescape('asPage'),
fn: function (){
var self=this;
return (($receiver = self['@page']) == nil || $receiver == undefined) ? (function(){smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_console", []), "_log_", ["Creating a new page"]);return (self['@page']=(function($rec){smalltalk.send($rec, "_withContent_", [(function(html){return smalltalk.send(self, "_renderPageOn_", [html]);})]);return smalltalk.send($rec, "_named_", [self['@myname']]);})(smalltalk.send((smalltalk.JQPage || JQPage), "_new", [])));})() : $receiver;
return self;}
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_renderPageOn_'),
smalltalk.method({
selector: unescape('renderPageOn%3A'),
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send("I am the renderPageOn method for: ", "__comma", [self['@myname']])]);
return self;}
}),
smalltalk.Job);



