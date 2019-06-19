/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\portlet\PortletContent.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => (
    {
        root: {
            paddingLeft: theme.spacing.unit * 3, 
            paddingRight: theme.spacing.unit * 3, 
            paddingTop: theme.spacing.unit * 2, 
            paddingBottom: theme.spacing.unit * 2, 
            flexGrow: 1
        }, 
        noPadding: {
            padding: 0
        }
    });

class PortletContent extends React.Component {
    render() {
        const {
            classes, 
            className, 
            children, 
            noPadding, 
            ...rest
        } = this.props;
        const rootClassName = classNames({
            [classes.root]: true, 
            [classes.noPadding]: noPadding
        }, className);
        return  (
                <div {...rest} className={rootClassName}>
                {children}</div>
            )
        ;
    }
}
PortletContent = withStyles(styles)(PortletContent)
;
export default PortletContent;
