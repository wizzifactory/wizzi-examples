/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\WizardForm1.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from './renderField';
import WizardFormValidate from './WizardFormValidate';
const WizardForm1 = (props) => {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting
    } = props;
    return  (
            <form onSubmit={handleSubmit}>
                <Field name="firstName" label="First Name" component={renderField} type="text">
                </Field>
            
                <Field name="lastName" label="Last Name" component={renderField} type="text">
                </Field>
            
                <div>
                    <button type="submit" className="next">
                    Next</button>
                
                </div>
            
            </form>
        )
    ;
}

WizardForm1.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    reset: PropTypes.func,
    submitting: PropTypes.bool
}

export default reduxForm({
    form: 'wizard', 
    destroyOnUnmount: false, 
    forceUnregisterOnUnmount: true, 
    validate: WizardFormValidate
})(WizardForm1)
