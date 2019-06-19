/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\layouts\DefaultLayout\components\Footer.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Divider, Typography} from '@material-ui/core';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 4
        }, 
        company: {
            marginTop: theme.spacing.unit * 2, 
            marginBottom: theme.spacing.unit * 0.5
        }
    });

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes,
            className
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <div className={rootClassName}>
                    <Divider>
                    </Divider>
                
                    <Typography className={classes.company} variant="body1">
                    © Wizzi factory. 2019</Typography>
                
                    <Typography variant="caption">
                    Created with love. By designers and developers wholove to work together!</Typography>
                
                </div>
            )
        ;
    }
}
Footer = compose(withStyles(styles))(Footer)
;
export default Footer;
