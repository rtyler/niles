smalltalk.addPackage('Niles', {});
smalltalk.addClass('NilesApp', smalltalk.Object, ['list'], 'Niles');
smalltalk.addMethod(
unescape('_clear'),
smalltalk.method({
selector: unescape('clear'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(smalltalk.send(unescape("%23niles-content"), "_asJQuery", []), "_empty", []);
(self['@list']=nil);
return self;},
args: [],
source: unescape('clear%0A%09%27%23niles-content%27%20asJQuery%20empty.%0A%09list%20%3A%3D%20nil.'),
messageSends: ["empty", "asJQuery"],
referencedClasses: []
}),
smalltalk.NilesApp);

smalltalk.addMethod(
unescape('_load_'),
smalltalk.method({
selector: unescape('load%3A'),
category: 'not yet classified',
fn: function (aUrl){
var self=this;
smalltalk.send(self, "_clear", []);
(($receiver = self['@list']) == nil || $receiver == undefined) ? (function(){(self['@list']=smalltalk.send((smalltalk.JQList || JQList), "_new", []));return smalltalk.send(self['@list'], "_appendToJQuery_", [smalltalk.send(unescape("%23niles-content"), "_asJQuery", [])]);})() : $receiver;
smalltalk.send((smalltalk.Jenkins || Jenkins), "_fetchFor_depth_onSuccess_onError_", [aUrl, (1), (function(data){return smalltalk.send(smalltalk.send(data, "_jobs", []), "_do_", [(function(job){var item=nil;
var njob=nil;
(njob=smalltalk.send(smalltalk.send((smalltalk.Job || Job), "_new", []), "_fromDictionary_", [job]));return smalltalk.send(self['@list'], "_addItem_", [smalltalk.send(njob, "_asListItem", [])]);})]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Fucking fuck"]);})]);
return self;},
args: ["aUrl"],
source: unescape('load%3A%20aUrl%0A%09self%20clear.%0A%09list%20ifNil%3A%20%5B%20%0A%09%09list%20%3A%3D%20JQList%20new.%0A%09%09list%20appendToJQuery%3A%20%27%23niles-content%27%20asJQuery%5D.%0A%0A%09Jenkins%20fetchFor%3A%20aUrl%0A%09%09depth%3A%201%0A%09%09onSuccess%3A%20%5B%20%3Adata%20%7C%20data%20jobs%20do%3A%20%5B%20%3Ajob%20%7C%0A%09%09%09%7C%20item%20njob%20%7C%0A%09%09%09njob%20%3A%3D%20Job%20new%20fromDictionary%3A%20job.%0A%09%09%09list%20addItem%3A%20njob%20asListItem.%5D%5D%0A%09%09onError%3A%20%5B%20window%20alert%3A%20%27Fucking%20fuck%27%20%5D.'),
messageSends: ["clear", "ifNil:", "new", "appendToJQuery:", "asJQuery", "fetchFor:depth:onSuccess:onError:", "do:", "jobs", "fromDictionary:", "addItem:", "asListItem", "alert:"],
referencedClasses: ["JQList", "Jenkins", "Job"]
}),
smalltalk.NilesApp);

smalltalk.addMethod(
unescape('_submitForm'),
smalltalk.method({
selector: unescape('submitForm'),
category: 'not yet classified',
fn: function (){
var self=this;
smalltalk.send(self, "_load_", [smalltalk.send(smalltalk.send(unescape("%23url-input"), "_asJQuery", []), "_val", [])]);
return self;},
args: [],
source: unescape('submitForm%0A%09self%20load%3A%20%27%23url-input%27%20asJQuery%20val.'),
messageSends: ["load:", "val", "asJQuery"],
referencedClasses: []
}),
smalltalk.NilesApp);


smalltalk.NilesApp.klass.iVarNames = ['app'];
smalltalk.addMethod(
unescape('_current'),
smalltalk.method({
selector: unescape('current'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@app']) == nil || $receiver == undefined) ? (function(){return (self['@app']=smalltalk.send(self, "_new", [], smalltalk.Object.klass));})() : $receiver;
return self;},
args: [],
source: unescape('current%0A%09%22Return%20the%20current%20instance%20%28singleton%29%20of%20NilesApp%22%0A%09%5E%20app%0A%09%09ifNil%3A%20%5B%20app%20%3A%3D%20super%20new%20%5D.'),
messageSends: ["ifNil:", "new"],
referencedClasses: []
}),
smalltalk.NilesApp.klass);


smalltalk.addClass('Job', smalltalk.Object, ['description', 'url', 'buildable', 'stable', 'myname', 'page'], 'Niles');
smalltalk.addMethod(
unescape('_initialize'),
smalltalk.method({
selector: unescape('initialize'),
category: 'not yet classified',
fn: function (){
var self=this;
(self['@description']="");
(self['@url']="");
(self['@buildable']=false);
(self['@stable']=false);
(self['@myname']="");
return self;},
args: [],
source: unescape('initialize%0A%09description%20%3A%3D%20%27%27.%0A%09url%20%3A%3D%20%27%27.%0A%09buildable%20%3A%3D%20false.%0A%09stable%20%3A%3D%20false.%0A%09myname%20%3A%3D%20%27%27.'),
messageSends: [],
referencedClasses: []
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_fromDictionary_'),
smalltalk.method({
selector: unescape('fromDictionary%3A'),
category: 'not yet classified',
fn: function (aDictionary){
var self=this;
(self['@myname']=smalltalk.send(aDictionary, "_name", []));
(self['@url']=smalltalk.send(aDictionary, "_url", []));
(self['@description']=(($receiver = smalltalk.send(aDictionary, "_at_", ["description"])) == nil || $receiver == undefined) ? (function(){return "";})() : $receiver);
(self['@buildable']=smalltalk.send(aDictionary, "_buildable", []));
((($receiver = smalltalk.send(smalltalk.send(aDictionary, "_color", []), "__eq", ["blue"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return (self['@stable']=true);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return (self['@stable']=true);})]));
return self;},
args: ["aDictionary"],
source: unescape('fromDictionary%3A%20aDictionary%0A%09myname%20%3A%3D%20aDictionary%20name.%0A%09url%20%3A%3D%20aDictionary%20url.%0A%09%22For%20some%20reason%20with%20older%20versions%20of%20Jenkins%2C%20when%20you%20call%20%27aDictionary%20description%27%20a%20DoesNotUnderstandMessage%0A%09%20exception%20is%20raised%2C%20despite%20the%20Inspector%20/showing/%20a%20%27%60description%27%20message%20being%20apparently%20available.%22%0A%09description%20%3A%3D%20%28aDictionary%20at%3A%20%27description%27%29%20ifNil%3A%20%5B%20%27%27%20%5D.%0A%09buildable%20%3A%3D%20aDictionary%20buildable.%0A%09aDictionary%20color%20%3D%20%27blue%27%0A%09%09ifTrue%3A%20%5B%20stable%20%3A%3D%20true%20%5D.'),
messageSends: ["name", "url", "ifNil:", "at:", "buildable", "ifTrue:", unescape("%3D"), "color"],
referencedClasses: []
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_asListItem'),
smalltalk.method({
selector: unescape('asListItem'),
category: 'not yet classified',
fn: function (){
var self=this;
var item=nil;
(item=(function($rec){smalltalk.send($rec, "_withLabel_", [self['@myname']]);return smalltalk.send($rec, "_withOnClick_", [(function(event){var page=nil;
(page=smalltalk.send(self, "_asPage", []));smalltalk.send(page, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);jQuery.mobile.changePage('#' + page._elementId());;return smalltalk.send(event, "_preventDefault", []);})]);})(smalltalk.send((smalltalk.JQListItem || JQListItem), "_new", [])));
((($receiver = self['@stable']).klass === smalltalk.Boolean) ? (! $receiver ? (function(){return smalltalk.send(item, "_turnYellow", []);})() : nil) : smalltalk.send($receiver, "_ifFalse_", [(function(){return smalltalk.send(item, "_turnYellow", []);})]));
((($receiver = ((($receiver = smalltalk.send(self['@description'], "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(item, "_withDescription_", [self['@description']]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(item, "_withDescription_", [self['@description']]);})]));
return item;
return self;},
args: [],
source: unescape('asListItem%0A%09%22Return%20a%20JQListItem%20representing%20this%20Job%20object%22%0A%09%7C%20item%20%7C%0A%09item%20%3A%3D%20JQListItem%20new%0A%09%09%09withLabel%3A%20myname%3B%0A%09%09%09withOnClick%3A%20%5B%20%3Aevent%20%7C%0A%09%09%09%09%7C%20page%20%7C%0A%09%09%09%09page%20%3A%3D%20self%20asPage.%0A%09%09%09%09page%20appendToJQuery%3A%20%27body%27%20asJQuery.%0A%09%09%09%09%3CjQuery.mobile.changePage%28%27%23%27%20+%20page._elementId%28%29%29%3B%3E.%0A%09%09%09%09event%20preventDefault%20%5D.%0A%09stable%20ifFalse%3A%20%5B%20item%20turnYellow%20%5D.%0A%09description%20size%20%3E%200%0A%09%09%09%09ifTrue%3A%20%5B%20item%20withDescription%3A%20description%20%5D.%0A%09%5E%20item.'),
messageSends: ["withLabel:", "withOnClick:", "asPage", "appendToJQuery:", "asJQuery", "preventDefault", "new", "ifFalse:", "turnYellow", "ifTrue:", unescape("%3E"), "size", "withDescription:"],
referencedClasses: ["JQListItem"]
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_asPage'),
smalltalk.method({
selector: unescape('asPage'),
category: 'not yet classified',
fn: function (){
var self=this;
return (($receiver = self['@page']) == nil || $receiver == undefined) ? (function(){smalltalk.send(smalltalk.send((typeof window == 'undefined' ? nil : window), "_console", []), "_log_", ["Creating a new page"]);return (self['@page']=(function($rec){smalltalk.send($rec, "_withContent_", [(function(html){return smalltalk.send(self, "_renderPageOn_", [html]);})]);return smalltalk.send($rec, "_named_", [self['@myname']]);})(smalltalk.send((smalltalk.JQPage || JQPage), "_new", [])));})() : $receiver;
return self;},
args: [],
source: unescape('asPage%0A%09%5E%20page%20ifNil%3A%20%5B%0A%09%09%22%28%3CjQuery%28%27%23page-derp%27%29.size%28%29%3E%29%20%3E%200%20ifTrue%3A%20%5B%20window%20alert%3A%20%27lulz%27%20%5D.%22%0A%09%09window%20console%20log%3A%20%27Creating%20a%20new%20page%27.%0A%09%09page%20%3A%3D%20JQPage%20new%0A%09%09%09%09withContent%3A%20%5B%20%3Ahtml%20%7C%20self%20renderPageOn%3A%20html%20%5D%3B%0A%09%09%09%09named%3A%20myname%5D.'),
messageSends: ["ifNil:", "log:", "console", "withContent:", "renderPageOn:", "named:", "new"],
referencedClasses: ["JQPage"]
}),
smalltalk.Job);

smalltalk.addMethod(
unescape('_renderPageOn_'),
smalltalk.method({
selector: unescape('renderPageOn%3A'),
category: 'not yet classified',
fn: function (html){
var self=this;
smalltalk.send(html, "_with_", [smalltalk.send("I am the renderPageOn method for: ", "__comma", [self['@myname']])]);
return self;},
args: ["html"],
source: unescape('renderPageOn%3A%20html%0A%09html%20with%3A%20%27I%20am%20the%20renderPageOn%20method%20for%3A%20%27%2C%20myname.'),
messageSends: ["with:", unescape("%2C")],
referencedClasses: []
}),
smalltalk.Job);



