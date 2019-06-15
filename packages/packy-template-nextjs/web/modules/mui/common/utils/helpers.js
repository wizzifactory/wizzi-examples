/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\utils\helpers.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
export function kebabCase(string) {
    return string.split(/ |_|-/).join('-').split('').map((a, i) => {
            if (a.toUpperCase() === a && a !== '-') {
                return (i !== 0 ? '-' : '') + a.toLowerCase();
            }
            return a;
        }).join('').toLowerCase()
        
        
        
        
    ;
}
export function titleize(string) {
    return string.split('-').map((word) =>
            word.split('')).map((letters) => {
            const first = letters.shift();
            return [first.toUpperCase(), ...letters].join('');
        }).join(' ')
        
        
    ;
}
