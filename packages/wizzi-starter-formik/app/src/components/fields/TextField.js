/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\fields\TextField.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from '@material-ui/core/Input';
class TextField extends React.Component {
    render() {
        const {
            fkFieldProp,
            localProps
        } = this.props;
        const {
            type, 
            disabled, 
            accessForbidden, 
            fullWidth, 
            maxLength, 
            multiline, 
            rows, 
            rowsMax, 
            ...optional
        } = localProps;
        const _disabled = accessForbidden || disabled;
        return  (
                <Input id={ fkFieldProp.name } inputProps={{
                    maxLength
                }} onChange={fkFieldProp.onChange} onBlur={fkFieldProp.onBlur} value={fkFieldProp.value} disabled={_disabled} fullWidth={fullWidth} type={type} multiline={multiline} rows={rows} rowsMax={rowsMax} {...optional}>
                </Input>
            )
        ;
    }
}
export default TextField;
