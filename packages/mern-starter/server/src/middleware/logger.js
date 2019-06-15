/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\mern-starter\.wizzi\server\src\middleware\logger.js.ittf
*/
'use strict';
export const LoggerMiddleware = (app) =>
    app.use((request, response, next) => {
        console.log(`${new Date().toString()} ${request.method} ${request.path}`);
        next();
    });
