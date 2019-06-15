/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\portlet\PortletHeader.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => (
    {
        root: {
            alignItems: 'center', 
            borderBottom: `1px solid${theme.palette.border}`, 
            borderTopLeftRadius: '2px', 
            borderTopRightRadius: '2px', 
            display: 'flex', 
            height: '64px', 
            justifyContent: 'space-between', 
            paddingLeft: theme.spacing.unit * 3, 
            paddingRight: theme.spacing.unit * 3, 
            position: 'relative'
        }, 
        noDivider: {
            borderBottom: 'none'
        }, 
        noPadding: {
            padding: 0
        }
    });

class PortletHeader extends React.Component {
    render() {
        const {
            classes, 
            className, 
            noDivider, 
            noPadding, 
            children, 
            ...rest
        } = this.props;
        const rootClassName = classNames({
            [classes.root]: true, 
            [classes.noDivider]: noDivider, 
            [classes.noPadding]: noPadding
        }, className);
        return  (
                <div {...rest} className={rootClassName}>
                {children}</div>
            )
        ;
    }
}
PortletHeader = withStyles(styles)(PortletHeader)
;
export default PortletHeader;
