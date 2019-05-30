/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\store\reducers\appReducer.js.ittf
*/
'use strict';

import { LOAD_APP_REQUEST, LOAD_APP_SUCCESS, LOAD_APP_FAILURE } from '../actions';
import { CHANGE_USERSTATE_REQUEST, CHANGE_USERSTATE_SUCCESS, CHANGE_USERSTATE_FAILURE } from '../actions';

const appInitialState = {
    userState: {}, 
    isLoading: false, 
    loadError: null
};

function appReducer(state, action) {
    // log appReducer, state, action
    if (typeof state === 'undefined') {
        return appInitialState;
    }
    switch (action.type) {
        case LOAD_APP_REQUEST: {
            // log 'LOAD_APP_REQUEST', 'initial state:', state
            var temp = {
                ...state, 
                isLoading: true, 
                loadError: null
            };
            // log 'LOAD_APP_REQUEST', 'final state:', temp
            return temp;
        }
        case LOAD_APP_SUCCESS: {
            // log 'LOAD_APP_SUCCESS', 'initial state:', state
            // preprocess code goes here
            var temp = {
                ...state, 
                userState: action.initialData.userState || {}, 
                isLoading: false
            };
            // log 'LOAD_APP_SUCCESS', 'final state:', temp
            return temp;
        }
        case LOAD_APP_FAILURE: {
            // log 'LOAD_APP_FAILURE', 'initial state:', state
            var temp = {
                ...state, 
                isLoading: false, 
                loadError: action.error
            };
            // log 'LOAD_APP_FAILURE', 'final state:', temp
            return temp;
        }
        case CHANGE_USERSTATE_REQUEST: {
            // log 'CHANGE_USERSTATE_REQUEST', 'initial state:', state
            var temp = {
                ...state, 
                isLoading: true, 
                loadError: null
            };
            // log 'CHANGE_USERSTATE_REQUEST', 'final state:', temp
            return temp;
        }
        case CHANGE_USERSTATE_SUCCESS: {
            // log 'CHANGE_USERSTATE_SUCCESS', 'initial state:', state
            var temp = {
                ...state, 
                userState: action.userState, 
                isLoading: false
            };
            // log 'CHANGE_USERSTATE_SUCCESS', 'final state:', temp
            return temp;
        }
        default: {
            return state;
        }
    }
}

export default appReducer;
