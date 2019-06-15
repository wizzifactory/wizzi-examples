/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\SignUp\schema.js.ittf
*/
'use strict';
export default {
        firstName: {
            presence: {
                allowEmpty: false, 
                message: 'is required'
            }, 
            length: {
                maximum: 32
            }
        }, 
        lastName: {
            presence: {
                allowEmpty: false, 
                message: 'is required'
            }, 
            length: {
                maximum: 32
            }
        }, 
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
        }, 
        policy: {
            presence: {
                allowEmpty: false, 
                message: 'is required'
            }, 
            checked: true
        }
    }
