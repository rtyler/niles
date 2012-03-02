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
(item=(function($rec){smalltalk.send($rec, "_withLabel_", [smalltalk.send(job, "_name", [])]);smalltalk.send($rec, "_withHref_", [smalltalk.send(job, "_url", [])]);return smalltalk.send($rec, "_withOnClick_", [(function(event){smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", [smalltalk.send("Navigating to: ", "__comma", [smalltalk.send(job, "_name", [])])]);return smalltalk.send(event, "_preventDefault", []);})]);})(smalltalk.send((smalltalk.JQListItem || JQListItem), "_new", [])));((($receiver = smalltalk.send(smalltalk.send(job, "_color", []), "__eq", ["yellow"])).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(item, "_turnYellow", []);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(item, "_turnYellow", []);})]));((($receiver = ((($receiver = smalltalk.send(smalltalk.send(job, "_description", []), "_size", [])).klass === smalltalk.Number) ? $receiver >(0) : smalltalk.send($receiver, "__gt", [(0)]))).klass === smalltalk.Boolean) ? ($receiver ? (function(){return smalltalk.send(item, "_withDescription_", [smalltalk.send(job, "_description", [])]);})() : nil) : smalltalk.send($receiver, "_ifTrue_", [(function(){return smalltalk.send(item, "_withDescription_", [smalltalk.send(job, "_description", [])]);})]));return smalltalk.send(self['@list'], "_addItem_", [item]);})]);}), (function(){return smalltalk.send((typeof window == 'undefined' ? nil : window), "_alert_", ["Fucking fuck"]);})]);
return self;},
args: ["aUrl"],
source: unescape('load%3A%20aUrl%0A%09self%20clear.%0A%09list%20ifNil%3A%20%5B%20%0A%09%09list%20%3A%3D%20JQList%20new.%0A%09%09list%20appendToJQuery%3A%20%27%23niles-content%27%20asJQuery%5D.%0A%0A%09Jenkins%20fetchFor%3A%20aUrl%0A%09%09depth%3A%201%0A%09%09onSuccess%3A%20%5B%20%3Adata%20%7C%20data%20jobs%20do%3A%20%5B%20%3Ajob%20%7C%0A%09%09%09%7C%20item%20%7C%0A%09%09%09item%20%3A%3D%20JQListItem%20new%0A%09%09%09%09%09withLabel%3A%20job%20name%3B%0A%09%09%09%09%09withHref%3A%20job%20url%3B%0A%09%09%09%09%09withOnClick%3A%20%5B%20%3Aevent%20%7C%20window%20alert%3A%20%28%27Navigating%20to%3A%20%27%2C%20job%20name%29.%20event%20preventDefault%20%5D.%0A%09%09%09job%20color%20%3D%20%27yellow%27%20ifTrue%3A%20%5B%20item%20turnYellow%20%5D.%0A%09%09%09job%20description%20size%20%3E%200%0A%09%09%09%09ifTrue%3A%20%5B%20item%20withDescription%3A%20job%20description%20%5D.%0A%09%09%09%22%28job%20healthReport%20size%29%20%3E%200%0A%09%09%09%09ifTrue%3A%20%5Bitem%20addIcon%3A%20%27http%3A//ci.jenkins-ci.org/images/48x48/%27%2C%20%28%28job%20healthReport%20at%3A%201%29%20at%3A%20%27iconUrl%27%29%5D.%0A%09%09%09%22list%20addItem%3A%20item.%5D%5D%0A%09%09onError%3A%20%5B%20window%20alert%3A%20%27Fucking%20fuck%27%20%5D.'),
messageSends: ["clear", "ifNil:", "new", "appendToJQuery:", "asJQuery", "fetchFor:depth:onSuccess:onError:", "do:", "jobs", "withLabel:", "name", "withHref:", "url", "withOnClick:", "alert:", unescape("%2C"), "preventDefault", "ifTrue:", unescape("%3D"), "color", "turnYellow", unescape("%3E"), "size", "description", "withDescription:", "addItem:"],
referencedClasses: ["JQList", "Jenkins", "JQListItem"]
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


