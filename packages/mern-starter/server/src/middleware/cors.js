/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\middleware\cors.js.ittf
*/
'use strict';
import cors from 'cors';
import {config} from '../features/config';
const whitelist = [
    config.corsClientOrigin
];
export const CorsMiddleware = (app) => {
    const options = {
        origin: config.corsClientOrigin, 
        credentials: true
    };
    app.use(cors(options));
};
