/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\AsyncValidationForm.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from './renderField';
import SubmitValidationFormSubmit from './SubmitValidationFormSubmit';
const validate = (values) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    return errors;
};
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const asyncValidate = (values /*, dispatch */) => {
    return sleep(1000).then(() => {
            if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
                throw {
                        username: 'That username is taken'
                    };
            }
        })
    ;
};
const AsyncValidationForm = (props) => {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting
    } = props;
    return  (
            <form onSubmit={handleSubmit(SubmitValidationFormSubmit)}>
                <Field name="username" label="Username" component={renderField} type="text">
                </Field>
            
                <Field name="password" label="Password" component={renderField} type="password">
                </Field>
            
                <div>
                    <button type="submit" disabled={pristine || submitting}>
                    Submit</button>
                
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values</button>
                
                </div>
            
            </form>
        )
    ;
}

AsyncValidationForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    submitting: PropTypes.bool
}

export default reduxForm({
    form: 'AsyncValidationForm', 
    validate: validate, 
    asyncValidate: asyncValidate, 
    asyncBlurFields: [
        'username'
    ]
})(AsyncValidationForm)
