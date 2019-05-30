/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\store\reducers\index.js.ittf
*/
'use strict';

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import appReducer from './appReducer';

export default combineReducers({
    firebase: firebaseReducer, 
    firestore: firestoreReducer, 
    form: formReducer, 
    app: appReducer
});
