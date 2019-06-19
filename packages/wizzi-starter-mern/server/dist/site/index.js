/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\site\index.js.ittf
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.siteControllers = void 0;

var _home = require("./controllers/home");

var _auth = require("./controllers/auth");

var siteControllers = [new _home.HomeController(), new _auth.AuthController()];
exports.siteControllers = siteControllers;