/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\site\index.js.ittf
*/
'use strict';
import {HomeController} from './controllers/home';
import {AuthController} from './controllers/auth';
const siteControllers = [
    new HomeController(), 
    new AuthController()
];
export {siteControllers};
