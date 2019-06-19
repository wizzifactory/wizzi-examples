/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\store\configureStore.prod.js.ittf
*/
'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const configureStore = (preloadedState) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk));

export default configureStore;
