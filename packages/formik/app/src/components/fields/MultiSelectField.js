/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\fields\MultiSelectField.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
class SelectField extends React.Component {
    renderOptions = () => {
        const {
            localProps
        } = this.props;
        const {
            options, 
            blankString
        } = localProps;
        let result = [];
        if (options) {
            let result = [];
            if (!multiple && blankString) {
                // Note: the blankString doesn't make sense when we allow multiple selections
                result.push(
                    <MenuItem value="" key="">
                        <em>
                        {blankString}</em>
                    
                    </MenuItem>
                );
            }
            options.forEach((option) => {
                if (multiple) {
                    const checked = value ? value.indexOf(option.value) !== -1 : false;
                    result.push(
                        <MenuItem value={option.value} key={option.value}>
                            <Checkbox checked={checked}>
                            </Checkbox>
                        
                            <ListItemText primary={option.label}>
                            </ListItemText>
                        
                        </MenuItem>
                    );
                }
                else {
                    result.push(
                        <MenuItem value={option.value} key={option.value}>
                        {option.label}</MenuItem>
                    );
                }
            });
            return result;
        }
    }
    render() {
        const {
            fkFieldProp,
            localProps
        } = this.props;
        const {
            disabled, 
            accessForbidden, 
            fullWidth, 
            options, 
            ...optional
        } = localProps;
        const _disabled = accessForbidden || disabled;
        return  (
                <Select id={ fkFieldProp.name } onChange={fkFieldProp.onChange} onBlur={fkFieldProp.onBlur} value={fkFieldProp.value} disabled={_disabled} fullWidth={fullWidth} {...optional}>
                {
                    renderOptions(options)
                }</Select>
            )
        ;
    }
}
export default SelectField;
