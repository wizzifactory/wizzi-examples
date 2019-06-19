/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\portlet\PortletFooter.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => (
    {
        root: {
            paddingBottom: theme.spacing.unit, 
            paddingTop: theme.spacing.unit, 
            paddingLeft: theme.spacing.unit * 2, 
            paddingRight: theme.spacing.unit * 2, 
            borderTop: `1px solid${theme.palette.border}`, 
            borderBottomLeftRadius: '2px', 
            borderBottomRightRadius: '2px'
        }, 
        noDivider: {
            borderTop: 'none'
        }
    });

class PortletFooter extends React.Component {
    render() {
        const {
            classes, 
            className, 
            noDivider, 
            children, 
            ...rest
        } = this.props;
        const rootClassName = classNames({
            [classes.root]: true, 
            [classes.noDivider]: noDivider
        }, className);
        return  (
                <div {...rest} className={rootClassName}>
                {children}</div>
            )
        ;
    }
}
PortletFooter = withStyles(styles)(PortletFooter)
;
export default PortletFooter;
