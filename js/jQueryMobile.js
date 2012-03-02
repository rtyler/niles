smalltalk.addPackage('jQueryMobile', {});
smalltalk.addClass('JQPage', smalltalk.Widget, ['elementId'], 'jQueryMobile');


smalltalk.addClass('JQListItem', smalltalk.Widget, ['elementId', 'href', 'label', 'clickBlock', 'theme', 'iconUrl', 'description'], 'jQueryMobile');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_at_put_", [unescape("data-theme"), self['@theme']]);return smalltalk.send($rec, "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [self['@href']]);smalltalk.send($rec, "_onClick_", [self['@clickBlock']]);return smalltalk.send($rec, "_with_", [(function(){(($receiver = self['@iconUrl']) != nil && $receiver != undefined) ? (function(){return (function($rec){smalltalk.send($rec, "_src_", [self['@iconUrl']]);return smalltalk.send($rec, "_class_", [unescape("ui-li-thumb%20ui-corner-tl")]);})(smalltalk.send(html, "_img", []));})() : nil;return (function($rec){(($receiver = $rec) != nil && $receiver != undefined) ? (function(){(function($rec){smalltalk.send($rec, "_class_", [unescape("ui-li-heading")]);return smalltalk.send($rec, "_with_", [self['@label']]);})(smalltalk.send(html, "_h3", []));return (function($rec){smalltalk.send($rec, "_class_", [unescape("ui-li-desc")]);return smalltalk.send($rec, "_with_", [self['@description']]);})(smalltalk.send(html, "_p", []));})() : nil;return (($receiver = $rec) == nil || $receiver == undefined) ? (function(){return smalltalk.send(html, "_with_", [self['@label']]);})() : $receiver;})(self['@description']);})]);})(smalltalk.send(html, "_a", []));})]);})(smalltalk.send(html, "_li", []));
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20li%20%0A%09%09at%3A%20%27data-theme%27%20put%3A%20theme%3B%0A%09%09with%3A%20%5B%0A%09%09%09html%20a%0A%09%09%09%09href%3A%20href%3B%0A%09%09%09%09onClick%3A%20clickBlock%3B%0A%09%09%09%09with%3A%20%5B%0A%09%09%09%09%09iconUrl%0A%09%09%09%09%09%09ifNotNil%3A%20%5B%20html%20img%20src%3A%20iconUrl%3B%20class%3A%20%27ui-li-thumb%20ui-corner-tl%27%20%5D.%0A%09%09%09%09%09description%0A%09%09%09%09%09%09ifNotNil%3A%20%5B%0A%09%09%09%09%09%09%09html%20h3%20class%3A%20%27ui-li-heading%27%3B%20with%3A%20label.%0A%09%09%09%09%09%09%09html%20p%20class%3A%20%27ui-li-desc%27%3B%20with%3A%20description%5D%3B%0A%09%09%09%09%09%09ifNil%3A%20%5B%20html%20with%3A%20label%20%5D%5D%5D.'),
messageSends: ["at:put:", "with:", "href:", "onClick:", "ifNotNil:", "src:", "class:", "img", "h3", "p", "ifNil:", "a", "li"],
referencedClasses: []
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@href']=unescape("%23"));
(self['@label']="");
(self['@clickBlock']=(function(){return nil;}));
(self['@theme']="");
(self['@iconUrl']=nil);
(self['@description']=nil);
return self;},
args: [],
source: unescape('initialize%0A%09href%20%3A%3D%20%27%23%27.%0A%09label%20%3A%3D%20%27%27.%0A%09clickBlock%20%3A%3D%20%5B%5D.%0A%09theme%20%3A%3D%20%27%27.%0A%09iconUrl%20%3A%3D%20nil.%0A%09description%20%3A%3D%20nil.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withLabel_'),
smalltalk.method({
selector: unescape('withLabel%3A'),
category: 'not yet classified',
fn: function (aLabelString){
var self=this;
(self['@label']=smalltalk.send(aLabelString, "_asString", []));
return self;},
args: ["aLabelString"],
source: unescape('withLabel%3A%20aLabelString%0A%09label%20%3A%3D%20aLabelString%20asString.%0A'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_turnYellow'),
smalltalk.method({
selector: unescape('turnYellow'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@theme']="e");
return self;},
args: [],
source: unescape('turnYellow%0A%09%22%20The%20%27e%27%20theme%20in%20jQuery%20Mobile%20is%20yellowish%20%22%0A%09theme%20%3A%3D%20%27e%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_addIcon_'),
smalltalk.method({
selector: unescape('addIcon%3A'),
category: 'not yet classified',
fn: function (aUrl){
var self=this;
(self['@iconUrl']=smalltalk.send(aUrl, "_asString", []));
return self;},
args: ["aUrl"],
source: unescape('addIcon%3A%20aUrl%0A%09iconUrl%20%3A%3D%20aUrl%20asString.'),
messageSends: ["asString"],
referencedClasses: []
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withHref_'),
smalltalk.method({
selector: unescape('withHref%3A'),
category: 'not yet classified',
fn: function (aUrlString){
var self=this;
(self['@href']=aUrlString);
return self;},
args: ["aUrlString"],
source: unescape('withHref%3A%20aUrlString%0A%09href%20%3A%3D%20aUrlString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withOnClick_'),
smalltalk.method({
selector: unescape('withOnClick%3A'),
category: 'not yet classified',
fn: function (aBlock){
var self=this;
(self['@clickBlock']=aBlock);
return self;},
args: ["aBlock"],
source: unescape('withOnClick%3A%20aBlock%0A%09clickBlock%20%3A%3D%20aBlock.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQListItem);

smalltalk.addMethod(
unescape('_withDescription_'),
smalltalk.method({
selector: unescape('withDescription%3A'),
category: 'not yet classified',
fn: function (aDescriptionString){
var self=this;
(self['@description']=aDescriptionString);
return self;},
args: ["aDescriptionString"],
source: unescape('withDescription%3A%20aDescriptionString%0A%09description%20%3A%3D%20aDescriptionString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQListItem);



smalltalk.addClass('JQList', smalltalk.Widget, ['elementId'], 'jQueryMobile');
smalltalk.addMethod(
unescape('_renderOn_'),
smalltalk.method({
selector: unescape('renderOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
(function($rec){smalltalk.send($rec, "_id_", [smalltalk.send(self, "_elementId", [])]);smalltalk.send($rec, "_at_put_", [unescape("data-role"), "listview"]);return smalltalk.send($rec, "_at_put_", [unescape("data-inset"), "true"]);})(smalltalk.send(html, "_ul", []));
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_listview", []);
return self;},
args: ["html"],
source: unescape('renderOn%3A%20html%0A%09html%20ul%20%0A%09%09id%3A%20self%20elementId%3B%0A%09%09at%3A%20%27data-role%27%20put%3A%20%27listview%27%3B%0A%09%09at%3A%20%27data-inset%27%20put%3A%20%27true%27.%0A%0A%09self%20asJQuery%20listview.'),
messageSends: ["id:", "elementId", "at:put:", "ul", "listview", "asJQuery"],
referencedClasses: []
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_asJQuery'),
smalltalk.method({
selector: unescape('asJQuery'),
category: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.send(smalltalk.send(unescape("%23"), "__comma", [smalltalk.send(self, "_elementId", [])]), "_asJQuery", []);
return self;},
args: [],
source: unescape('asJQuery%0A%09%5E%20%28%27%23%27%2C%20self%20elementId%29%20asJQuery.%0A'),
messageSends: ["asJQuery", unescape("%2C"), "elementId"],
referencedClasses: []
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_elementId'),
smalltalk.method({
selector: unescape('elementId'),
category: 'not yet classified',
fn: function (){
var self=this;
return self['@elementId'];
return self;},
args: [],
source: unescape('elementId%0A%09%5E%20elementId.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_withId_'),
smalltalk.method({
selector: unescape('withId%3A'),
category: 'not yet classified',
fn: function (aString){
var self=this;
(self['@elementId']=aString);
return self;},
args: ["aString"],
source: unescape('withId%3A%20aString%0A%09elementId%20%3A%3D%20aString.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_add_withCallback_'),
smalltalk.method({
selector: unescape('add%3AwithCallback%3A'),
category: 'not yet classified',
fn: function (aLabel, aBlock){
var self=this;
smalltalk.send((function(html){return smalltalk.send(smalltalk.send(html, "_li", []), "_with_", [(function(){return (function($rec){smalltalk.send($rec, "_href_", [unescape("%23")]);smalltalk.send($rec, "_with_", [aLabel]);return smalltalk.send($rec, "_onClick_", [aBlock]);})(smalltalk.send(html, "_a", []));})]);}), "_appendToJQuery_", [smalltalk.send(self, "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_listview_", ["refresh"]);
return self;},
args: ["aLabel", "aBlock"],
source: unescape('add%3A%20aLabel%20withCallback%3A%20aBlock%0A%09%22Add%20a%20list%20item%22%0A%09%5B%20%3Ahtml%20%7C%0A%09%09html%20li%20with%3A%20%5B%20html%20a%20href%3A%20%27%23%27%3B%20with%3A%20aLabel%3B%20onClick%3A%20aBlock%20%5D.%0A%09%5D%20appendToJQuery%3A%20self%20asJQuery.%0A%0A%09self%20asJQuery%20listview%3A%20%27refresh%27.'),
messageSends: ["appendToJQuery:", "with:", "li", "href:", "onClick:", "a", "asJQuery", "listview:"],
referencedClasses: []
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_add_'),
smalltalk.method({
selector: unescape('add%3A'),
category: 'not yet classified',
fn: function (aLabel){
var self=this;
return smalltalk.send(self, "_add_withCallback_", [aLabel, (function(){return nil;})]);
return self;},
args: ["aLabel"],
source: unescape('add%3A%20aLabel%0A%09%22Add%20a%20list%20item%20with%20no%20callback%22%0A%09%5E%20self%20add%3A%20aLabel%20withCallback%3A%20%5B%5D.%0A'),
messageSends: ["add:withCallback:"],
referencedClasses: []
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_empty'),
smalltalk.method({
selector: unescape('empty'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_empty", []);
return self;},
args: [],
source: unescape('empty%0A%09%22Clear%20out%20the%20entire%20list%22%0A%09self%20asJQuery%20empty.'),
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.JQList);

smalltalk.addMethod(
unescape('_addItem_'),
smalltalk.method({
selector: unescape('addItem%3A'),
category: 'not yet classified',
fn: function (aListItem){
var self=this;
smalltalk.send(aListItem, "_appendToJQuery_", [smalltalk.send(self, "_asJQuery", [])]);
smalltalk.send(smalltalk.send(self, "_asJQuery", []), "_listview_", ["refresh"]);
return self;},
args: ["aListItem"],
source: unescape('addItem%3A%20aListItem%0A%09aListItem%20appendToJQuery%3A%20self%20asJQuery.%0A%09self%20asJQuery%20listview%3A%20%27refresh%27.'),
messageSends: ["appendToJQuery:", "asJQuery", "listview:"],
referencedClasses: []
}),
smalltalk.JQList);



