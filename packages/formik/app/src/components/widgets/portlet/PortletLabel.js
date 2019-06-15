/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\portlet\PortletLabel.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
const styles = theme => (
    {
        root: {
            display: 'flex', 
            alignItems: 'center'
        }, 
        icon: {
            fontSize: '1.3rem', 
            marginRight: theme.spacing.unit, 
            color: theme.palette.text.secondary, 
            alignItems: 'center', 
            display: 'flex'
        }, 
        title: {
            fontWeight: 500
        }, 
        subtitle: {
            fontWeight: 400, 
            marginLeft: theme.spacing.unit, 
            color: theme.palette.text.secondary
        }
    });

class PortletHeader extends React.Component {
    render() {
        const {
            classes, 
            className, 
            icon, 
            title, 
            subtitle, 
            ...rest
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <div {...rest} className={rootClassName}>
                {
                    icon &&  (
                        <span className={classes.icon}>
                        {icon}</span>
                    )
                    
                }{
                    title &&  (
                        <Typography className={classes.title} variant="h5">
                        {title}</Typography>
                    )
                    
                }{
                    subtitle &&  (
                        <Typography className={classes.subtitle} variant="subtitle2">
                        {subtitle}</Typography>
                    )
                    
                }</div>
            )
        ;
    }
}
PortletHeader = withStyles(styles)(PortletHeader)
;
export default PortletHeader;
