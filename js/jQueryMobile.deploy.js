smalltalk.addPackage('jQueryMobile', {});
smalltalk.addClass('JQList', smalltalk.Widget, ['elementId'], 'jQueryMobile');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-role"), "listview"]);return smalltalk.send($rec, "_at_put_", [unescape("data-inset"), "true"]);})(smalltalk.send(html, "_ul", []));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_listview", []);
return self;}
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "_asJQuery", []);
return self;}
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
fn: function (){
var self=this;
return self['@elementId'];
return self;}
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_withId_'),
smalltalk.method({
selector: unescape('withId%3A'),
fn: function (aString){
var self=this;
(self['@elementId']=aString);
return self;}
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_add_withCallback_'),
smalltalk.method({
selector: unescape('add%3AwithCallback%3A'),
fn: function (aLabel, aBlock){
var self=this;
smalltalk.send((function(html){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_with_", [aLabel]);return smalltalk.send($rec, "_onClick_", [aBlock]);})(smalltalk.send(html, "_a", []));})]);}), "_appendToJQuery_", [smalltalk.send(self, "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_listview_", ["refresh"]);
return self;}
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
fn: function (aLabel){
var self=this;
return smalltalk.send(self, "_add_withCallback_", [aLabel, (function(){return nil;})]);
return self;}
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_empty'),
smalltalk.method({
selector: unescape('empty'),
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_empty", []);
return self;}
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_addItem_'),
smalltalk.method({
selector: unescape('addItem%3A'),
fn: function (aListItem){
var self=this;
smalltalk.send(aListItem, "_appendToJQuery_", [smalltalk.send(self, "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_listview_", ["refresh"]);
return self;}
}),
smalltalk.JQList);



smalltalk.addClass('JQListItem', smalltalk.Widget, ['elementId', 'href', 'label', 'clickBlock', 'theme', 'iconUrl', 'description'], 'jQueryMobile');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", [unescape("data-theme"), self['@theme']]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [self['@href']]);smalltalk.send($rec, "_onClick_", [self['@clickBlock']]);return smalltalk.send($rec, "_with_", [(function(){(($receiver = self['@iconUrl']) != nil && $receiver != undefined) ? (function(){return (function($rec){smalltalk.send($rec, "_src_", [self['@iconUrl']]);return smalltalk.send($rec, "_class_", [unescape("ui-li-thumb%20ui-corner-tl")]);})(smalltalk.send(html, "_img", []));})() : nil;return (function($rec){(($receiver = $rec) != nil && $receiver != undefined) ? (function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-li-heading")]);return smalltalk.send($rec, "_with_", [self['@label']]);})(smalltalk.send(html, "_h3", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-li-desc")]);return smalltalk.send($rec, "_with_", [self['@description']]);})(smalltalk.send(html, "_p", []));})() : nil;return (($receiver = $rec) == nil || $receiver == undefined) ? (function(){return smalltalk.send(html, "_with_", [self['@label']]);})() : $receiver;})(self['@description']);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_li", []));
return self;}
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
fn: function (){
var self=this;
(self['@href']=unescape("%23"));
(self['@label']="");
(self['@clickBlock']=(function(){return nil;}));
(self['@theme']="");
(self['@iconUrl']=nil);
(self['@description']=nil);
return self;}
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withLabel_'),
smalltalk.method({
selector: unescape('withLabel%3A'),
fn: function (aLabelString){
var self=this;
(self['@label']=smalltalk.send(aLabelString, "_asString", []));
return self;}
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_turnYellow'),
smalltalk.method({
selector: unescape('turnYellow'),
fn: function (){
var self=this;
(self['@theme']="e");
return self;}
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_addIcon_'),
smalltalk.method({
selector: unescape('addIcon%3A'),
fn: function (aUrl){
var self=this;
(self['@iconUrl']=smalltalk.send(aUrl, "_asString", []));
return self;}
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withHref_'),
smalltalk.method({
selector: unescape('withHref%3A'),
fn: function (aUrlString){
var self=this;
(self['@href']=aUrlString);
return self;}
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withOnClick_'),
smalltalk.method({
selector: unescape('withOnClick%3A'),
fn: function (aBlock){
var self=this;
(self['@clickBlock']=aBlock);
return self;}
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withDescription_'),
smalltalk.method({
selector: unescape('withDescription%3A'),
fn: function (aDescriptionString){
var self=this;
(self['@description']=aDescriptionString);
return self;}
}),
smalltalk.JQListItem);



smalltalk.addClass('JQPage', smalltalk.Widget, ['elementId'], 'jQueryMobile');


