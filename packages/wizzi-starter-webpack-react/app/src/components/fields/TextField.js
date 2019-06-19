/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\fields\TextField.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/fields/text-field.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
import CommonField from './CommonField';
import DisplayValueTypography from './DisplayValueTypography';
// Create a custom TextMask component. This is done once in the constructor so that it is not
// done in each call to render()
const TextMaskCustom = (props) => {
    const {
        inputRef, 
        ...other
    } = props;
    const {
        mask
    } = this.props;
    return  (
            <MaskedInput {...other} ref={(ref) =>
                inputRef(ref ? ref.inputElement : null)} mask={mask}>
            </MaskedInput>
        )
    ;
};
class TextField extends React.Component {
    handleChange = (event) => {
        const {
            input
        } = this.props;
        input.onChange(event.target.value);
    }
    handleBlur = () => {
        // TODO
    }
    handleKeyUp = (event) => {
        // If the user presses enter on the field then mark as touched. This is necessary for when the
        // user is using the keyboard to enter data and there is an error on the last field that needs
        // to be reported when the user presses enter.
        if (event.keyCode === 13) {
            // TODO
        }
    }
    render() {
        const {
            input, 
            label, 
            classes, 
            err, 
            touched, 
            maxLength, 
            disabled, 
            fullWidth, 
            type, 
            editable, 
            accessEditable, 
            multiline, 
            rows, 
            rowsMax, 
            useDisplayValue, 
            mask, 
            displayValue
        } = this.props;
        const dis = accessEditable === false || disabled;
        let fld = null;
        if (editable && !useDisplayValue) {
            const optional = {};
            if (mask) {
                optional.inputComponent = this.TextMaskCustom;
            }
            const uiValue = input.value;
            fld =  (
                <Input id={input.name} error={touched && err ? true : false} inputProps={{
                    maxLength
                }} onChange={this.handleChange} onBlur={this.handleBlur} onKeyUp={this.handleKeyUp} value={uiValue ? uiValue : ''} disabled={dis} fullWidth={fullWidth} type={type} multiline={multiline} rows={rows} rowsMax={rowsMax} {...optional}>
                </Input>
            )
            ;
        }
        else {
            fld =  (
                <DisplayValueTypography>
                {
                    displayValue ? displayValue : input.value
                    
                }</DisplayValueTypography>
            )
            ;
        }
        return  (
                <CommonField input={input} label={label} touched={touched} err={err}>
                {fld}</CommonField>
            )
        ;
    }
}
export default TextField;
