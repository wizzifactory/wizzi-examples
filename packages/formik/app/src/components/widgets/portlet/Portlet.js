/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\portlet\Portlet.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '../Paper';
const styles = theme => (
    {
        root: {
            display: 'flex', 
            flexDirection: 'column'
        }
    });

class Portlet extends React.Component {
    render() {
        const {
            classes,
            className,
            children,
            ...rest
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <Paper {...rest} className={rootClassName} elevation={0} outlined squared={false}>
                {children}</Paper>
            )
        ;
    }
}
Portlet = withStyles(styles)(Portlet)
;
export default Portlet;
