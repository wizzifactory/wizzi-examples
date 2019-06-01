/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\fields\DateField.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {DatePicker, KeyboardDatePicker} from "@material-ui/pickers";
class DateField extends React.Component {
    handleChange = (date, value) => {
        const {
            fkFieldProp,
            setFieldValue
        } = this.props;
        console.log('Date.handleChange', date, value, setFieldValue);
        setFieldValue(fkFieldProp.name, date);
    }
    handleBlur = () => {
        const {
            fkFieldProp,
            setFieldTouched
        } = this.props;
        console.log('Date.handleBlur', fkFieldProp);
        setFieldTouched(fkFieldProp.name);
    }
    render() {
        const {
            fkFieldProp,
            localProps
        } = this.props;
        const {
            disabled, 
            accessForbidden, 
            className, 
            variant, 
            format, 
            ...optional
        } = localProps;
        const _disabled = accessForbidden || disabled;
        if (variant === 'keyboard') {
            return  (
                    <KeyboardDatePicker id={ fkFieldProp.name } className={className} onChange={this.handleChange} onClose={this.handleBlur} value={fkFieldProp.value} disabled={_disabled} format={format || "dd/MM/yyyy"} {...optional}>
                    </KeyboardDatePicker>
                )
            ;
        }
        else {
            return  (
                    <DatePicker id={ fkFieldProp.name } className={className} onChange={this.handleChange} onClose={this.handleBlur} value={fkFieldProp.value} disabled={_disabled} format={format || "dd/MM/yyyy"} {...optional}>
                    </DatePicker>
                )
            ;
        }
    }
}
export default DateField;
