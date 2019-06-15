/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\middleware\bodyParser.js.ittf
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BodyParserMiddleware = void 0;

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BodyParserMiddleware = function BodyParserMiddleware(app) {
  app.use(_bodyParser["default"].urlencoded({
    extended: true
  }));
  app.use(_bodyParser["default"].json());
};

exports.BodyParserMiddleware = BodyParserMiddleware;