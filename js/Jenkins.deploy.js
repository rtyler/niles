smalltalk.addPackage('Jenkins', {});
smalltalk.addClass('Jenkins', smalltalk.Object, [], 'Jenkins');

smalltalk.addMethod(
unescape('_fetchFor_onSuccess_onError_'),
smalltalk.method({
selector: unescape('fetchFor%3AonSuccess%3AonError%3A'),
fn: function (aURL, successBlock, errorBlock){
var self=this;
return smalltalk.send(self, "_fetchFor_depth_onSuccess_onError_", [aURL, (0), successBlock, errorBlock]);
return self;}
}),
smalltalk.Jenkins.klass);

smalltalk.addMethod(
unescape('_fetchFor_onSuccess_'),
smalltalk.method({
selector: unescape('fetchFor%3AonSuccess%3A'),
fn: function (aURL, successBlock){
var self=this;
return smalltalk.send(self, "_fetchFor_depth_onSuccess_onError_", [aURL, (0), successBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.Jenkins.klass);

smalltalk.addMethod(
unescape('_fetchFor_depth_onSuccess_'),
smalltalk.method({
selector: unescape('fetchFor%3Adepth%3AonSuccess%3A'),
fn: function (aURL, infoDepth, successBlock){
var self=this;
smalltalk.send(self, "_fetchFor_depth_onSuccess_onError_", [aURL, infoDepth, successBlock, (function(){return nil;})]);
return self;}
}),
smalltalk.Jenkins.klass);

smalltalk.addMethod(
unescape('_fetchFor_depth_onSuccess_onError_'),
smalltalk.method({
selector: unescape('fetchFor%3Adepth%3AonSuccess%3AonError%3A'),
fn: function (aURL, infoDepth, successBlock, errorBlock){
var self=this;
smalltalk.send((typeof jQuery == 'undefined' ? nil : jQuery), "_ajax_options_", [smalltalk.send(smalltalk.send(aURL, "__comma", [unescape("/api/json%3Fdepth%3D")]), "__comma", [smalltalk.send(infoDepth, "_asString", [])]), smalltalk.HashedCollection._fromPairs_([smalltalk.send("type", "__minus_gt", ["GET"]),smalltalk.send("jsonp", "__minus_gt", ["jsonp"]),smalltalk.send("dataType", "__minus_gt", ["jsonp"]),smalltalk.send("success", "__minus_gt", [successBlock]),smalltalk.send("error", "__minus_gt", [errorBlock])])]);
return self;}
}),
smalltalk.Jenkins.klass);


