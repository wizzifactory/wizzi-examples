/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\fields\SwitchField.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Switch from '@material-ui/core/Switch';
class SwitchField extends React.Component {
    render() {
        const {
            fkFieldProp,
            localProps
        } = this.props;
        const {
            disabled, 
            accessForbidden, 
            ...optional
        } = localProps;
        const _disabled = accessForbidden || disabled;
        return  (
                <Switch id={ fkFieldProp.name } checked={fkFieldProp.value} onChange={fkFieldProp.onChange} onBlur={fkFieldProp.onBlur} value="true" disabled={_disabled} {...optional}>
                </Switch>
            )
        ;
    }
}
export default SwitchField;
