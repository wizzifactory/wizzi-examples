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
import Settings from './views/Settings';
import Account from './views/Account';
import UserList from './views/UserList';
import ProductList from './views/ProductList';
import Icons from './views/Icons';
import Colors from './views/Colors';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Typography from './views/Typography';
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
                
                    <Route component={Settings} exact path="/settings">
                    </Route>
                
                    <Route component={Account} exact path="/account">
                    </Route>
                
                    <Route component={UserList} exact path="/users">
                    </Route>
                
                    <Route component={ProductList} exact path="/products">
                    </Route>
                
                    <Route component={Icons} exact path="/icons">
                    </Route>
                
                    <Route component={Colors} exact path="/colors">
                    </Route>
                
                    <Route component={SignIn} exact path="/sign-in">
                    </Route>
                
                    <Route component={SignUp} exact path="/sign-up">
                    </Route>
                
                    <Route component={Typography} exact path="/typography">
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
