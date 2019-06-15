/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\portlet\PortletToolbar.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => (
    {
        root: {
            justifyContent: 'flex-end', 
            alignItems: 'center', 
            display: 'flex'
        }
    });

class PortletToolbar extends React.Component {
    render() {
        const {
            classes, 
            className, 
            children, 
            ...rest
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <div {...rest} className={rootClassName}>
                {children}</div>
            )
        ;
    }
}
PortletToolbar = withStyles(styles)(PortletToolbar)
;
export default PortletToolbar;
