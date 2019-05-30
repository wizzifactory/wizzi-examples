/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\fields\FormLabel.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/fields/form-label.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import FormLabelMui from '@material-ui/core/FormLabel';
const styles = theme => (
    {
        shrink: {
            ...Object.assign({}, theme.typography.caption, {
                color: undefined
            })
        }, 
        noShrink: {
            ...Object.assign({}, theme.typography.subtitle1, {
                color: undefined
            })
        }
    });

class FormLabel extends React.Component {
    render() {
        const {
            children,
            classes,
            shrink
        } = this.props;
        const childProps = Object.assign({}, this.props, {
            shrink: undefined, 
            classes: undefined
        });
        const className = shrink ? classes.shrink : classes.noShrink;
        return  (
                <FormLabelMui {...childProps} className={className}>
                {children}</FormLabelMui>
            )
        ;
    }
}
FormLabel = withStyles(styles)(FormLabel)
;
export default FormLabel;
