/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\SignIn\schema.js.ittf
*/
'use strict';
export default {
        email: {
            presence: {
                allowEmpty: false, 
                message: 'is required'
            }, 
            email: true, 
            length: {
                maximum: 64
            }
        }, 
        password: {
            presence: {
                allowEmpty: false, 
                message: 'is required'
            }, 
            length: {
                maximum: 128
            }
        }
    }
