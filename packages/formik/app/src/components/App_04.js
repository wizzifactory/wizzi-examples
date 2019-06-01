/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\App_04.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Formik, Form, Field, FastField, FieldArray, setFieldValue, setFieldTouched, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Button from "@material-ui/core/Button";
import TextField from "./fields/TextField";
import SwitchField from "./fields/SwitchField";
import SelectField from "./fields/SelectField";
import DateField from "./fields/DateField";
import SliderField from "./fields/SliderField";
import Debug from './Debug';
import FormControl from './FormControl';
import FormLabel from './FormLabel';
import './formik-example.css';
const initialValues = {
    firstName: '', 
    lastName: '', 
    email: '', 
    isMember: false, 
    ageRange: '', 
    memberFrom: null, 
    memberTo: null, 
    englishLevel: 0
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
        name, 
        component, 
        setFieldValue, 
        setFieldTouched, 
        ...localProps
    } = props;
    const Component = component ? component : TextField;
    return  (
            <React.Fragment>
                <FormControl>
                    <FormLabel htmlFor={name}>
                    {label}</FormLabel>
                
                    <Field name={name}>
                    {
                        ({field, form}) => {
                            // log 'Fieldset.field', field
                            return  (
                                    <Component fkFieldProp={field} localProps={localProps} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}>
                                    </Component>
                                )
                            ;
                        }
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
            margin: "50px", 
            padding: "30px"
        }, 
        form: {
            padding: "10px"
        }, 
        formControl: {
            width: "100%"
        }
    });

class App extends React.Component {
    constructor(props) {
        super(props);
    }
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
                        ({ values, errors, touched, handleBlur, handleChange, handleReset, setFieldValue, setFieldTouched, isSubmitting }) =>  (
                                <Form>
                                    <Fieldset name="firstName" label="First Name" type="text" placeholder="jane" component={TextField}>
                                    </Fieldset>
                                
                                    <Fieldset name="lastName" label="Last Name" type="text" placeholder="Doe" component={TextField}>
                                    </Fieldset>
                                
                                    <Fieldset name="email" label="Email" placeholder="jane@acme.com" type="email" component={TextField}>
                                    </Fieldset>
                                
                                    <Fieldset name="isMember" label="Is member" component={SwitchField}>
                                    </Fieldset>
                                
                                    <Fieldset name="ageRange" label="Age range" component={SelectField} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched} options={[
                                        {
                                            value: '0-20', 
                                            label: '0 - 20'
                                        }, 
                                        {
                                            value: '21-60', 
                                            label: '21 - 60'
                                        }, 
                                        {
                                            value: '61-Oltre', 
                                            label: '61 - Oltre'
                                        }
                                    ]}>
                                    </Fieldset>
                                
                                    <br>
                                    </br>
                                
                                    <Fieldset name="memberFrom" label="Member from" component={DateField} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}>
                                    </Fieldset>
                                
                                    <Fieldset name="memberTo" label="Member to" component={DateField} variant="keyboard" setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}>
                                    </Fieldset>
                                
                                    <br>
                                    </br>
                                
                                    <Fieldset name="englishLevel" label="English level" component={SliderField} setFieldValue={setFieldValue} setFieldTouched={setFieldTouched}>
                                    </Fieldset>
                                
                                    <br>
                                    </br>
                                
                                    <button type="reset" disabled={isSubmitting} className="secondary" onClick={handleReset}>
                                    Reset</button>
                                
                                    <button type="submit" disabled={isSubmitting}>
                                    Submit</button>
                                
                                    <Debug>
                                    </Debug>
                                
                                </Form>
                            )
                        
                    }</Formik>
                
                </div>
            )
        ;
    }
}
App = compose(withStyles(styles))(App)
;
export default App;
