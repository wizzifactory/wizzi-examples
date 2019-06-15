/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\site\controllers\auth.js.ittf
*/
'use strict';
import {Router} from 'express';
export class AuthController {
    constructor() {
        this.router = Router();
    }
    initialize(initValues) {
        this.router.get('/auth/login', this.login);
        this.router.get('/auth/login2', this.login2);
    }
    login(req, res) {
        res.render('auth/login.html.ittf', {});
    }
    login2(req, res) {
        res.render('auth/login2.html.ittf', {});
    }
}
