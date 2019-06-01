/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\theme\index.js.ittf
*/
'use strict';
// Material helpers
import {createMuiTheme} from '@material-ui/core';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';
const theme = createMuiTheme({
    palette, 
    typography, 
    overrides, 
    zIndex: {
        appBar: 1200, 
        drawer: 1100
    }
});
export default theme;
