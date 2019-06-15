/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\store\reducers\commonsReducer.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';

import { GET_COMMONS_SUCCESS } from '../actions';

const commonsInitialState = {
    items: []
};

function commonsReducer(state, action) {
    // log commonsReducer, state, action
    if (typeof state === 'undefined') {
        return commonsInitialState;
    }
    switch (action.type) {
        case GET_COMMONS_SUCCESS: {
            // log 'GET_COMMONS_SUCCESS', 'initial state:', state
            var temp = {
                ...state, 
                items: Object.values(action.payload.items)
            };
            console.log('GET_COMMONS_SUCCESS', 'final state:', temp);
            return temp;
        }
        default: {
            return state;
        }
    }
}
export default commonsReducer;
