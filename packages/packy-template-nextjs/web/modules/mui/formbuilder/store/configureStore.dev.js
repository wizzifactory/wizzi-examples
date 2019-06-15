/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\store\configureStore.dev.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';

// configureStore is called by the app entry point ( index.js )

import { createStore } from 'redux';
import rootReducer from './reducers';

var create = (preloadedState) => {
    
    // TODO Can these stay outside of create() and
    // avoid to initialize firebase at each call when executed server side?
    
    
    var store = createStore(rootReducer, preloadedState);
    
    return store;
};

export default function configureStore(initialState) {
    // Make sure to create a new store for every server-side request so that data
    // isn't shared between connections (which would be bad)
    if (!process.browser) {
        return create(initialState);
    }
    // Reuse store on the client-side
    if (!global.__INIT_REDUX_STORE__) {
        global.__INIT_REDUX_STORE__ = create(initialState);
    }
    return global.__INIT_REDUX_STORE__;
}
