/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\nextjs-starter\.wizzi\root\next.config.js.ittf
*/
'use strict';
const path = require("path");
module.exports = {
    webpack: function(config) {
        config.module.rules.push({
            resolve: {
                alias: {
                    ...(config.resolve.alias||{}), 
                    'layouts': path.resolve(__dirname, 'layouts')
                }
            }
        });
        return config;
    }
};
