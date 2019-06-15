/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\middleware\index.js.ittf
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.appMiddlewares = void 0;

var _logger = require("./logger");

var _cors = require("./cors");

var _bodyParser = require("./bodyParser");

var _session = require("./session");

var _passport = require("./passport");

var _ittf = require("./ittf");

var _wizziViewEngine = require("./wizziViewEngine");

var _errors = require("./errors");

var appMiddlewares = [_logger.LoggerMiddleware, _cors.CorsMiddleware, _bodyParser.BodyParserMiddleware, _session.SessionMiddleware, _passport.PassportMiddleware, _ittf.IttfDocumentsMiddleware, _wizziViewEngine.WizziViewEngineMiddleware];
exports.appMiddlewares = appMiddlewares;