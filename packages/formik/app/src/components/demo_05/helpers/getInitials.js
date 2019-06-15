/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\helpers\getInitials.js.ittf
*/
'use strict';
export default (name = '') =>
        name.replace(/\s+/, ' ').split(' ').slice(0, 2).map((v) => {
            v && v[0].toUpperCase()}).join('')
