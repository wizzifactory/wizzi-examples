/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\index.js.ittf
*/
'use strict';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { render } from 'react-dom';
import MuiThemeContainer from './containers/MuiThemeContainer';
// preloadedState param not used
// export const store = configureStore(preloadedState)
export const store = configureStore();
const rootEl = document.querySelector('#root');
render(
    <Provider store={store}>
        <MuiThemeContainer>
        </MuiThemeContainer>
    
    </Provider>
, rootEl);
