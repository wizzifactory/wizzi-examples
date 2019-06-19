const path = require('path');
module.exports = {
    wfjobName: "wizzi-starter-wizzi-plugin.job", 
    wfjobPath: path.join(__dirname, '.wizzi', 'generate.wfjob.ittf'), 
    destPath: path.join(__dirname, 'dist'),
    plugins: [
        'wizzi-core', 
        'wizzi-js', 
        'wizzi-web',
    ], 
    schemas: [
        "sample"
    ],
    globalContext: {
        isPackageDeploy: true,
    },
};