smalltalk.addPackage('Jenkins', {});
smalltalk.addClass('Jenkins', smalltalk.Object, [], 'Jenkins');

smalltalk.addMethod(
unescape('_fetchFor_onSuccess_onError_'),
smalltalk.method({
selector: unescape('fetchFor%3AonSuccess%3AonError%3A'),
category: 'not yet classified',
fn: function (aURL, successBlock, errorBlock){
var self=this;
return smalltalk.send(self, "_fetchFor_depth_onSuccess_onError_", [aURL, (0), successBlock, errorBlock]);
return self;},
args: ["aURL", "successBlock", "errorBlock"],
source: unescape('fetchFor%3A%20aURL%20onSuccess%3A%20successBlock%20onError%3A%20errorBlock%0A%09%5E%20self%20fetchFor%3A%20aURL%20depth%3A%200%20onSuccess%3A%20successBlock%20onError%3A%20errorBlock.'),
messageSends: ["fetchFor:depth:onSuccess:onError:"],
referencedClasses: []
}),
smalltalk.Jenkins.klass);

smalltalk.addMethod(
unescape('_fetchFor_onSuccess_'),
smalltalk.method({
selector: unescape('fetchFor%3AonSuccess%3A'),
category: 'not yet classified',
fn: function (aURL, successBlock){
var self=this;
return smalltalk.send(self, "_fetchFor_depth_onSuccess_onError_", [aURL, (0), successBlock, (function(){return nil;})]);
return self;},
args: ["aURL", "successBlock"],
source: unescape('fetchFor%3A%20aURL%20onSuccess%3A%20successBlock%0A%09%5E%20self%20fetchFor%3A%20aURL%20depth%3A%200%20onSuccess%3A%20successBlock%20onError%3A%20%5B%5D.'),
messageSends: ["fetchFor:depth:onSuccess:onError:"],
referencedClasses: []
}),
smalltalk.Jenkins.klass);

smalltalk.addMethod(
unescape('_fetchFor_depth_onSuccess_'),
smalltalk.method({
selector: unescape('fetchFor%3Adepth%3AonSuccess%3A'),
category: 'not yet classified',
fn: function (aURL, infoDepth, successBlock){
var self=this;
smalltalk.send(self, "_fetchFor_depth_onSuccess_onError_", [aURL, infoDepth, successBlock, (function(){return nil;})]);
return self;},
args: ["aURL", "infoDepth", "successBlock"],
source: unescape('fetchFor%3A%20aURL%20depth%3A%20infoDepth%20onSuccess%3A%20successBlock%0A%09%22Fetch%20for%20a%20given%20URL%2C%20this%20is%20assumed%20not%20to%20be%20a%20raw%20URL%2C%20i.e.%20not%20including%20the%20/api/%20portion%20of%20the%20URL%22%0A%09self%20fetchFor%3A%20aURL%20depth%3A%20infoDepth%20onSuccess%3A%20successBlock%20onError%3A%20%5B%5D.'),
messageSends: ["fetchFor:depth:onSuccess:onError:"],
referencedClasses: []
}),
smalltalk.Jenkins.klass);

smalltalk.addMethod(
unescape('_fetchFor_depth_onSuccess_onError_'),
smalltalk.method({
selector: unescape('fetchFor%3Adepth%3AonSuccess%3AonError%3A'),
category: 'not yet classified',
fn: function (aURL, infoDepth, successBlock, errorBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(aURL, "__comma", [unescape("/api/json%3Fdepth%3D")]), "__comma", [smalltalk.send(infoDepth, "_asString", [])]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("jsonp", "__minus_gt", ["jsonp"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [successBlock]),smalltalk.send("error", "__minus_gt", [errorBlock])])]);
return self;},
args: ["aURL", "infoDepth", "successBlock", "errorBlock"],
source: unescape('fetchFor%3A%20aURL%20depth%3A%20infoDepth%20onSuccess%3A%20successBlock%20onError%3A%20errorBlock%0A%09%22Fetch%20for%20a%20given%20URL%2C%20this%20is%20assumed%20not%20to%20be%20a%20raw%20URL%2C%20i.e.%20not%20including%20the%20/api/%20portion%20of%20the%20URL%22%0A%09jQuery%20ajax%3A%20aURL%2C%20%27/api/json%3Fdepth%3D%27%2C%20infoDepth%20asString%0A%09%09options%3A%20%23%7B%27type%27%20-%3E%20%27GET%27.%0A%09%09%09%09%09%27jsonp%27%20-%3E%20%27jsonp%27.%0A%09%09%09%09%09%27dataType%27%20-%3E%20%27jsonp%27.%0A%09%09%09%09%09%27success%27%20-%3E%20successBlock.%0A%09%09%09%09%09%27error%27%20-%3E%20errorBlock%7D.'),
messageSends: ["ajax:options:", unescape("%2C"), "asString", unescape("-%3E")],
referencedClasses: []
}),
smalltalk.Jenkins.klass);


