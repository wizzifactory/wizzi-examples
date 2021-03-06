/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\wizzi-studio\.wizzi\ittf\server\routes\test.js.ittf
*/
'use strict';

/**
     Router: Test
*/

// Dependencies
var util = require('util');
var path = require('path');
var wizzi = require('wizzi');
var rest = require('../lib/rest');
var u = require('../lib/utils');

var cp = require("child_process");
var j1 = "c:\\my\\wizzi\\v5\\kernel\\wizzi-utils\\src\\generate_webpack.js";
/**
     Helpers
*/
function sendError(res, err, options) {
    rest.sendError(res, err, options);
}

function sendSuccess(res, result, options) {
    rest.sendSuccess(res, result, options);
}
/**
     Routes
*/
module.exports = function(app, api) {
    var testApi = api.test;
    app.get('/test/:user', function(req, res, next) {
        res.json({
            route: '/test/:user', 
            params: req.params, 
            query: req.query
        });
    });
    app.get('/test/:user/:project', function(req, res, next) {
        res.json({
            route: '/test/:user/:project', 
            params: req.params, 
            query: req.query
        });
    });
    app.get('/test/:user/:project/*', function(req, res, next) {
        res.json({
            route: '/test/:user/:project/*', 
            params: req.params, 
            query: req.query
        });
    });
    app.get('/api/test/processes/stdiostream', function(req, res, next) {
        res.writeHead(200, {
            "Content-Type": "text/event-stream", 
            "Cache-control": "no-cache"
        });
        var spw = cp.spawn('node', [
            path.basename(j1)
        ], {
            cwd: path.dirname(j1), 
            env: {
                
            }, 
            argv0: undefined, 
            stdio: undefined, 
            detached: false, 
            shell: true, 
            windowsVerbatimArguments: false, 
            windowsHide: false
        }),
            str = "";
        console.log("/api/test/processes/stdiostream : spawned");
        spw.stdout.on('data', function(data) {
            str += data.toString();
            // just so we can see the server is doing something
            console.log("data");
            // Flush out line by line.
            var lines = str.split("\n");
            for (var i in lines) {
                if (i == lines.length - 1) {
                    str = lines[i];
                }
                else {
                    // Note: The double-newline is *required*
                    res.write('data: ' + lines[i] + "\n\n");
                }
            }
        });
        spw.on('close', function(code) {
            console.log("/test/processes/stdiostream : close", "code", code);
            res.write('data: ***___CLOSE___***\n\n');
            res.end(str);
        });
        spw.stderr.on('data', function(data) {
            console.log("/test/processes/stdiostream : stderr data", data);
            res.end('stderr: ' + data);
        });
    });
};
