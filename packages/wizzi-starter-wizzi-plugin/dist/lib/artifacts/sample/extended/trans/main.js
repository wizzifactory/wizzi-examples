/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\wizzi-starter-wizzi-plugin\.wizzi\ittf\lib\artifacts\sample\extended\trans\main.js.ittf
*/
'use strict';
var util = require('util');
var async = require('async');
var verify = require('wizzi-utils').verify;
var lineparser = verify.lineParser;

var md = module.exports = {};
var myname = 'sample.sample..trans.main';

md.trans = function(model, ctx, callback) {
    var transformedModel = {};
    if (model.wzElement !== 'sample') {
        console.log('wizzi-core', 'transformer', 'model', model);
        callback(error('InvalidArgument', 'gen', 'Invalid model schema. Expected "sample". Received: ' + model.wzElement, model));
    }
    try {
    } 
    catch (ex) {
        return callback(ex);
    } 
    callback(null, transformedModel);
};
/**
     params
     string errorName
     # the error name or number
     string method
     string message
     # optional
     { model
     # optional
     { innerError
     # optional
*/
function error(errorName, method, message, model, innerError) {
    return new errors.WizziPluginError(message, model, {
            errorName: errorName, 
            method: 'sample/lib/artifacts/sample/extended/trans/main.' + method, 
            sourcePath: __filename, 
            inner: innerError
        });
}
