/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\store\reducers\index.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import commonsReducer from './commonsReducer';

export default combineReducers({
    form: formReducer, 
    commons: commonsReducer
});
