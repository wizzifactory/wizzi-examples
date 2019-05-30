/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\App_02.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Formik, Form, Field, FastField, FieldArray, setFieldValue, setFieldTouched, ErrorMessage} from 'formik';
import './formik-example.css';
const initialValues = {
    friends: [
        {
            name: '', 
            email: ''
        }
    ]
};
const styles = theme => (
    {
        root: {
            margin: "200px", 
            width: "400px"
        }
    });

class App extends React.Component {
    render() {
        const {
            classes
        } = this.props;
        return  (
                <div className={classes.root}>
                    <div className="formik-example">
                        <h1>
                        Invite friends
                        </h1>
                    
                        <Formik initialValues={initialValues} onSubmit={(values) =>
                            setTimeout(() =>
                                alert(JSON.stringify(values, null, 2)), 500)}>
                        {
                            (props) => {
                                const {
                                    isSubmitting
                                } = props;
                                return  (
                                        <Form>
                                            <div className="row">
                                                <div className="col">
                                                    <Field name="name">
                                                    {
                                                        (field, form) => {
                                                            return  (
                                                                    <input type="text" {...field} placeholder="Annie Dove">
                                                                    </input>
                                                                )
                                                            ;
                                                        }
                                                    }</Field>
                                                
                                                </div>
                                            
                                                <div className="col">
                                                    <Field name="email">
                                                    {
                                                        (field, form) => {
                                                            return  (
                                                                    <input type="email" {...field} placeholder="Annie@example.com">
                                                                    </input>
                                                                )
                                                            ;
                                                        }
                                                    }</Field>
                                                
                                                </div>
                                            
                                                <div className="col">
                                                    <button type="button">
                                                    X</button>
                                                
                                                </div>
                                            
                                            </div>
                                        
                                            <div className="row">
                                                <button type="button" className="secondary" disabled={isSubmitting}>
                                                Add friend</button>
                                            
                                            </div>
                                        
                                            <div className="row">
                                                <button type="submit" disabled={isSubmitting}>
                                                Submit</button>
                                            
                                            </div>
                                        
                                            <div className="row">
                                                <button type="button">
                                                Cancel</button>
                                            
                                            </div>
                                        
                                            <div className="row">
                                                <pre>
                                                { JSON.stringify(props, null, 2) }</pre>
                                            
                                            </div>
                                        
                                        </Form>
                                    )
                                ;
                            }
                        }</Formik>
                    
                    </div>
                
                </div>
            )
        ;
    }
}
App = withStyles(styles)(App)
;
export default App;
