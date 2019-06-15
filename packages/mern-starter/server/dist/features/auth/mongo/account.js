/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\features\auth\mongo\account.js.ittf
*/
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAccountModel = GetAccountModel;
exports.AccountModelBuilder = void 0;

var _mongoose = require("mongoose");

var _token = require("./token");

var AccountSchema = new _mongoose.Schema({
  domain: {
    type: String
  },
  uid: {
    type: String
  },
  username: {
    type: String
  },
  displayName: {
    type: String
  },
  avatar_url: {
    type: String
  },
  tokens: [_token.TokenSchema]
});
var accountModel = null;

function GetAccountModel() {
  return accountModel;
}

var AccountModelBuilder = {
  buildModel: function buildModel() {
    return accountModel = (0, _mongoose.model)('Account', AccountSchema);
  }
};
exports.AccountModelBuilder = AccountModelBuilder;