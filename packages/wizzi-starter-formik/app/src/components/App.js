/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\App.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Routes from "./demo_05/Routes";
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'assets/css/index.css';
const browserHistory = createBrowserHistory();
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  (
                <Router history={browserHistory}>
                    <Routes>
                    </Routes>
                
                </Router>
            )
        ;
    }
}
export default App;
