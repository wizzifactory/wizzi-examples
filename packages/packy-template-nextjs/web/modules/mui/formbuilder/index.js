/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\index.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { render } from 'react-dom';
import AppContainer from './containers/AppContainer';
// preloadedState param not used
// export const store = configureStore(preloadedState)
export const store = configureStore();
export default function RootComponent() {
        return  (
                <Provider store={store}>
                    <AppContainer>
                    </AppContainer>
                
                </Provider>
            )
        ;
    }
