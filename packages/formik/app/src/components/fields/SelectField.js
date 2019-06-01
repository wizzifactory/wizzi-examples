/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\fields\SelectField.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Formik, Form, Field, FastField, FieldArray, setFieldValue, setFieldTouched, ErrorMessage} from 'formik';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
class SelectField extends React.Component {
    renderOptions = (options, blankString) => {
        let result = [];
        if (options) {
            // FIXME
            if (blankString) {
                result.push(
                    <MenuItem value="" key="">
                        <em>
                        {blankString}</em>
                    
                    </MenuItem>
                );
            }
            options.forEach((option) =>
                result.push(
                    <MenuItem value={option.value} key={option.value}>
                    {option.label}</MenuItem>
                ));
        }
        return result;
    }
    handleChange = (event) => {
        const {
            fkFieldProp,
            setFieldValue
        } = this.props;
        // log 'Select.handleChange', event.target.value, setFieldValue
        setFieldValue(fkFieldProp.name, event.target.value);
    }
    handleBlur = () => {
        const {
            fkFieldProp,
            setFieldTouched
        } = this.props;
        setFieldTouched(fkFieldProp.name);
    }
    render() {
        const {
            fkFieldProp,
            localProps
        } = this.props;
        const {
            disabled, 
            blankString, 
            accessForbidden, 
            fullWidth, 
            options, 
            ...optional
        } = localProps;
        const _disabled = accessForbidden || disabled;
        // log 'Select.fkFieldProp', fkFieldProp
        return  (
                <Select id={ fkFieldProp.name } onChange={this.handleChange} onBlur={this.handleBlur} value={fkFieldProp.value} disabled={_disabled} fullWidth={fullWidth} {...optional}>
                {
                    this.renderOptions(options, blankString)
                }</Select>
            )
        ;
    }
}
export default SelectField;
