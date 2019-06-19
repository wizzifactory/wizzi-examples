/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\fields\SwitchField.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/fields/boolean-field.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Switch from '@material-ui/core/Switch';
import CommonField from './CommonField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import DisplayValueTypography from './DisplayValueTypography';
class SwitchField extends React.Component {
    handleChange = (event) => {
        const {
            input
        } = this.props;
        input.onChange(event.target.checked);
    }
    render() {
        const {
            input, 
            err, 
            touched, 
            value, 
            disabled, 
            editable, 
            useDisplayValue, 
            label
        } = this.props;
        let hideLabelUI = null;
        let fld = null;
        if (editable && !useDisplayValue) {
            hideLabelUI = true;
            fld =  (
                <FormControlLabel control={ (
                    <Switch checked={input.value} onChange={this.handleChange} value="true" disabled={disabled}>
                    </Switch>
                )
                } label={label}>
                </FormControlLabel>
            )
            ;
        }
        else {
            fld =  (
                <DisplayValueTypography>
                {
                    component.getDisplayValue()
                }</DisplayValueTypography>
            )
            ;
        }
        return  (
                <CommonField input={input} label={label} touched={touched} err={err} hideLabelUI={hideLabelUI}>
                {fld}</CommonField>
            )
        ;
    }
}
export default SwitchField;
