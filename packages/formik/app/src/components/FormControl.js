/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\FormControl.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/form-control.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FormControlMui from '@material-ui/core/FormControl';
const styles = theme => (
    {
        formControl: {
            margin: theme.spacing.unit
        }, 
        fullWidth: {
            // TODO: bug in material ui?
            width: `calc(100% -${theme.spacing.unit * 2}px)`
        }, 
        noMarginBottom: {
            marginBottom: 0
        }
    });

class FormControl extends React.Component {
    render() {
        const {
            classes,
            fullWidth,
            children,
            marginBottom
        } = this.props;
        const fullWidthClassName = fullWidth ? classes.fullWidth : '';
        const noMarginBottomClassName = marginBottom === false ? classes.noMarginBottom : '';
        return  (
                <FormControlMui fullWidth={fullWidth} className={`${classes.formControl}${fullWidthClassName}${noMarginBottomClassName}`}>
                {children}</FormControlMui>
            )
        ;
    }
}
FormControl = withStyles(styles)(FormControl)
;
export default FormControl;
