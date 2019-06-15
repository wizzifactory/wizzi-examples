/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\root\server.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:10 GMT
*/
'use strict';
const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev
});
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express();
    server.get('/p/:id', (req, res) => {
        const actualPage = '/post';
        const queryParams = {
            title: req.params.id
        };
        app.render(req, res, actualPage, queryParams);
    });
    server.get('*', (req, res) => {
        return handle(req, res);
    });
    server.listen(3000, (err) => {
        if (err) {
            throw err;
        }
        console.log('> Ready on http://localhost:3000');
    });
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})
