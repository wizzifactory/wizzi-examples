/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\Basic.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Formik, Form, Field, FastField, FieldArray, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Debug from './Debug';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import './formik-example.css';
const initialValues = {
    firstName: '', 
    lastName: '', 
    email: ''
};
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('required')
    , 
    lastName: Yup.string().required('required')
    , 
    email: Yup.string().required('required').email('Invalid email')
    
})
;
const Fieldset = (props) => {
    const {
        label, 
        name
    } = props;
    return  (
            <React.Fragment>
                <FormControl>
                    <FormLabel htmlFor={name}>
                    {label}</FormLabel>
                
                    <Field name={name}>
                    {
                        ({field, form}) =>  (
                                <TextField type="text" {...field}>
                                </TextField>
                            )
                        
                    }</Field>
                
                    <ErrorMessage name={name}>
                    {
                        (msg) => {
                            return  (
                                    <div className="field-error">
                                    {msg}</div>
                                )
                            ;
                        }
                    }</ErrorMessage>
                
                </FormControl>
            
            </React.Fragment>
        )
    ;
};
const styles = theme => (
    {
        root: {
            backgroundColor: "#222", 
            color: "#ddd", 
            margin: "50px", 
            padding: "30px"
        }, 
        form: {
            backgroundColor: "#444", 
            padding: "10px"
        }, 
        formControl: {
            width: "100%"
        }
    });

class Basic extends React.Component {
    render() {
        const {
            classes
        } = this.props;
        return  (
                <div className={classes.form}>
                    <h1>
                    Sign Up
                    </h1>
                
                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(values) =>
                        setTimeout(() =>
                            alert(JSON.stringify(values, null, 2)), 500)}>
                    {
                        ({ values, errors, touched, handleBlur, handleChange, handleReset, setFieldValue, isSubmitting }) =>  (
                                <Form>
                                    <Fieldset name="firstName" label="First Name" type="text" placeholder="jane">
                                    </Fieldset>
                                
                                    <Fieldset name="lastName" label="Last Name" type="text" placeholder="Doe">
                                    </Fieldset>
                                
                                    <Fieldset name="email" label="Email" placeholder="jane@acme.com" type="email">
                                    </Fieldset>
                                
                                    <br>
                                    </br>
                                
                                    <button type="reset" disabled={isSubmitting} className="secondary" onClick={handleReset}>
                                    Reset</button>
                                
                                    <button type="submit" disabled={isSubmitting}>
                                    Submit</button>
                                
                                </Form>
                            )
                        
                    }</Formik>
                
                </div>
            )
        ;
    }
}
Basic = withStyles(styles)(Basic)
;
export default Basic;
