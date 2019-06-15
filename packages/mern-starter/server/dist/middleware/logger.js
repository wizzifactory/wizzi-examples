/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\middleware\logger.js.ittf
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoggerMiddleware = void 0;

var LoggerMiddleware = function LoggerMiddleware(app) {
  return app.use(function (request, response, next) {
    console.log("".concat(new Date().toString(), " ").concat(request.method, " ").concat(request.path));
    next();
  });
};

exports.LoggerMiddleware = LoggerMiddleware;