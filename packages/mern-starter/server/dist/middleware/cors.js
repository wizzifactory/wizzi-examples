/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\middleware\cors.js.ittf
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CorsMiddleware = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _config = require("../features/config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var whitelist = [_config.config.corsClientOrigin];

var CorsMiddleware = function CorsMiddleware(app) {
  var options = {
    origin: _config.config.corsClientOrigin,
    credentials: true
  };
  app.use((0, _cors["default"])(options));
};

exports.CorsMiddleware = CorsMiddleware;