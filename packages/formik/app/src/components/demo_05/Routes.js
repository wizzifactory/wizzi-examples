/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\Routes.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Switch, Route, Redirect} from 'react-router-dom';
// Views
import Dashboard from './views/Dashboard';
import FormikForm from './views/FormikForm';
import NotFound from './views/NotFound';
class Routes extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return  (
                <Switch>
                    <Route component={Dashboard} exact path="/">
                    </Route>
                
                    <Route component={Dashboard} exact path="/dashboard">
                    </Route>
                
                    <Route component={FormikForm} exact path="/formikform">
                    </Route>
                
                    <Route component={NotFound} exact path="/not-found">
                    </Route>
                
                    <Route component={NotFound} path="/">
                    </Route>
                
                    <Redirect to="/not-found">
                    </Redirect>
                
                </Switch>
            )
        ;
    }
}
export default Routes;
