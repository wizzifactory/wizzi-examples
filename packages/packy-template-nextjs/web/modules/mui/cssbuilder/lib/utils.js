/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\lib\utils.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';

import isString from 'lodash/isString';

function notEmptyString(text) {
    return isString(text) && text.length > 0;
}
function error(source) {
    return function(message, method) {
            return {
                    __is_error: true, 
                    message: message, 
                    source: source + '/' + method
                };
        };
}
function throwError(source) {
    var errorBuilder = error(source);
    return function(message, method) {
            message = errorBuilder(message, method);
            console.log(message);
            throw new Error(message);
        };
}

module.exports = {
    notEmptyString: notEmptyString,
    error: error,
    throwError: throwError
};
