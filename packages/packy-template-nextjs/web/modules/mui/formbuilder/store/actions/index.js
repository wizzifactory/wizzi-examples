/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\store\actions\index.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';

const timers = {};



// load
const INITIAL_LOAD = 'INITIAL_LOAD';
const INITIAL_LOAD_REQUEST = 'INITIAL_LOAD_REQUEST';
const INITIAL_LOAD_SUCCESS = 'INITIAL_LOAD_SUCCESS';
const INITIAL_LOAD_FAILURE = 'INITIAL_LOAD_FAILURE';

const initialLoad = () => {
    return {
            type: INITIAL_LOAD, 
            [HTTP_REQUEST]: {
                types: [
                    INITIAL_LOAD_REQUEST, 
                    INITIAL_LOAD_SUCCESS, 
                    INITIAL_LOAD_FAILURE
                ], 
                url: '/api/cssplay/commons', 
                method: 'get'
            }
        };
};


const TOGGLE_THEME_SHADE = 'TOGGLE_THEME_SHADE';

module.exports = {
    INITIAL_LOAD: INITIAL_LOAD,
    INITIAL_LOAD_REQUEST: INITIAL_LOAD_REQUEST,
    INITIAL_LOAD_SUCCESS: INITIAL_LOAD_SUCCESS,
    INITIAL_LOAD_FAILURE: INITIAL_LOAD_FAILURE,
    initialLoad: initialLoad,
    TOGGLE_THEME_SHADE: TOGGLE_THEME_SHADE
};
