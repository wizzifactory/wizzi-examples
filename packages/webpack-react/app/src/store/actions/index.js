/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\store\actions\index.js.ittf
*/
'use strict';

const timers = {};



// app
const LOAD_APP = 'LOAD_APP';
const LOAD_APP_REQUEST = 'LOAD_APP_REQUEST';
const LOAD_APP_SUCCESS = 'LOAD_APP_SUCCESS';
const LOAD_APP_FAILURE = 'LOAD_APP_FAILURE';

// userstate
const CHANGE_USERSTATE = 'CHANGE_USERSTATE';
const CHANGE_USERSTATE_REQUEST = 'CHANGE_USERSTATE_REQUEST';
const CHANGE_USERSTATE_SUCCESS = 'CHANGE_USERSTATE_SUCCESS';
const CHANGE_USERSTATE_FAILURE = 'CHANGE_USERSTATE_FAILURE';

// Redux entry point
// Must be called once, at application start.
function initialLoad(user, options) {
    return function(dispatch, getState, extraArgument) {
            console.log('actions.initialLoad.extraArgument', extraArgument);
            dispatch(requestAppLoad());
            var userState = extraArgument.localStorage.get("userState");
            if (!userState) {
                userState = {
                    themeName: 'dark'
                };
                extraArgument.localStorage.set("userState", userState);
            }
            dispatch(completeAppLoad({
                userState
            }));
        };
}
const requestAppLoad = () => {
    console.log('store.actions.app.requestAppLoad');
    return {
            type: LOAD_APP_REQUEST
        };
};
const failAppLoad = (error) => {
    console.log('store.actions.app.failAppLoad', error);
    return {
            type: LOAD_APP_FAILURE, 
            error: error
        };
};
const completeAppLoad = (initialData) => {
    console.log('store.actions.app.completeAppLoad', initialData);
    return {
            type: LOAD_APP_SUCCESS, 
            initialData: initialData
        };
};
function changeUserState(userState) {
    return function(dispatch, getState, extraArgument) {
            console.log('actions.changeUserState.userState', userState);
            dispatch(requestUserStateChange());
            extraArgument.localStorage.set("userState", userState);
            dispatch(completeUserStateChange(userState));
        };
}
const requestUserStateChange = () => {
    console.log('store.actions.app.requestUserStateChange');
    return {
            type: CHANGE_USERSTATE_REQUEST
        };
};
const completeUserStateChange = (userState) => {
    console.log('store.actions.app.completeUserStateChange', userState);
    return {
            type: CHANGE_USERSTATE_SUCCESS, 
            userState: userState
        };
};

module.exports = {
    LOAD_APP: LOAD_APP,
    LOAD_APP_REQUEST: LOAD_APP_REQUEST,
    LOAD_APP_SUCCESS: LOAD_APP_SUCCESS,
    LOAD_APP_FAILURE: LOAD_APP_FAILURE,
    CHANGE_USERSTATE: CHANGE_USERSTATE,
    CHANGE_USERSTATE_REQUEST: CHANGE_USERSTATE_REQUEST,
    CHANGE_USERSTATE_SUCCESS: CHANGE_USERSTATE_SUCCESS,
    CHANGE_USERSTATE_FAILURE: CHANGE_USERSTATE_FAILURE,
    requestAppLoad: requestAppLoad,
    failAppLoad: failAppLoad,
    completeAppLoad: completeAppLoad,
    requestUserStateChange: requestUserStateChange,
    completeUserStateChange: completeUserStateChange,
    initialLoad: initialLoad,
    changeUserState: changeUserState
};
