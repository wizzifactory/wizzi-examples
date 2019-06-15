/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\root\next.config.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:10 GMT
*/
'use strict';
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    cssModules: true, 
    webpack: function(config) {
        config.module.rules.push({
            test: /\.md$/, 
            use: 'raw-loader'
        });
        return config;
    }
});
