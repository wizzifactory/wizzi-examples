/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\WizardForm2.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from './renderField';
import WizardFormValidate from './WizardFormValidate';
const renderError = ({ meta: { touched, error } }) => {
    return touched && error ?  (
                <span>
                {error}</span>
            )
         : false;
};
const WizardForm2 = (props) => {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
        previousPage
    } = props;
    return  (
            <form onSubmit={handleSubmit}>
                <Field name="email" label="Email" component={renderField} type="email">
                </Field>
            
                <div>
                    <label>
                    Sex
                    </label>
                
                    <div>
                        <Field name="sex" label="Male" value="male" type="radio" component={renderField}>
                        </Field>
                    
                        <Field name="sex" label="Female" value="female" type="radio" component={renderField}>
                        </Field>
                    
                        <Field name="sex" component={renderError}>
                        </Field>
                    
                    </div>
                
                </div>
            
                <div>
                    <button type="button" className="previous" onClick={previousPage}>
                    </button>
                
                    <button type="submit" className="next">
                    Next</button>
                
                </div>
            
            </form>
        )
    ;
}

WizardForm2.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    submitting: PropTypes.bool,
    previousPage: PropTypes.func
}

export default reduxForm({
    form: 'wizard', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate: WizardFormValidate
})(WizardForm2)
