/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\fields\DisplayValueTypography.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/fields/display-value-typography.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TypographyMui from '@material-ui/core/Typography';
const styles = theme => (
    {
        root: {
            display: 'inline-block'
        }
    });

class DisplayValueTypography extends React.Component {
    render() {
        const {
            children,
            classes
        } = this.props;
        // We use a span tag so that the element is inline
        return  (
                <TypographyMui variant="subtitle1" component="span" className={classes.root}>
                {children}</TypographyMui>
            )
        ;
    }
}
DisplayValueTypography = withStyles(styles)(DisplayValueTypography)
;
export default DisplayValueTypography;
