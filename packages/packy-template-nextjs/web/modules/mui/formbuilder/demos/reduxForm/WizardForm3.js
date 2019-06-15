/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\WizardForm3.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import renderField from './renderField';
import WizardFormValidate from './WizardFormValidate';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet'];
const WizardForm3 = (props) => {
    const {
        handleSubmit,
        pristine,
        reset,
        submitting,
        previousPage
    } = props;
    return  (
            <form onSubmit={handleSubmit}>
                <Field name="favoriteColor" id="favoriteColor" label="Favorite Color" type="select" component={renderField} options={colors} emptyOption={'Select a color...'}>
                </Field>
            
                <Field name="employed" label="Employed" component={renderField} type="checkbox">
                </Field>
            
                <Field name="notes" id="notes" label="Notes" value="bla bla" type="textarea" component={renderField}>
                </Field>
            
                <div>
                    <button type="button" className="previous" onClick={previousPage}>
                    </button>
                
                    <button type="submit" className="next">
                    Submit</button>
                
                </div>
            
            </form>
        )
    ;
}

WizardForm3.propTypes = {
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
})(WizardForm3)
