/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\utils\prism.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
// eslint-disable import/no-webpack-loader-syntax
import lightTheme from '!raw-loader!prismjs/themes/prism.css';
import darkTheme from '!raw-loader!prismjs/themes/prism-okaidia.css';
// eslint-enable import/no-webpack-loader-syntax
export { lightTheme, darkTheme };
if (typeof window !== 'undefined') {
    const styleNode = window.document.createElement('style');
    styleNode.setAttribute('data-prism', true);
    window.document.head.appendChild(styleNode);
}
export function setPrismTheme(theme = lightTheme) {
    styleNode.textContent = theme;
}
export default prism;
