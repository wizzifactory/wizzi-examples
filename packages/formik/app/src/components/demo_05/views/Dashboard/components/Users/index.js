/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Dashboard\components\Users\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Typography} from '@material-ui/core';
import {ArrowUpward as ArrowUpwardIcon, PeopleOutlined as PeopleIcon} from '@material-ui/icons';
import Paper from 'components/widgets/Paper';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 3
        }, 
        content: {
            alignItems: 'center', 
            display: 'flex'
        }, 
        title: {
            color: theme.palette.text.secondary, 
            fontWeight: 700
        }, 
        value: {
            marginTop: theme.spacing.unit
        }, 
        iconWrapper: {
            alignItems: 'center', 
            backgroundColor: theme.palette.success.main, 
            borderRadius: '50%', 
            display: 'inline-flex', 
            height: '4rem', 
            justifyContent: 'center', 
            marginLeft: 'auto', 
            width: '4rem'
        }, 
        icon: {
            color: theme.palette.common.white, 
            fontSize: '2rem', 
            height: '2rem', 
            width: '2rem'
        }, 
        footer: {
            marginTop: theme.spacing.unit * 2, 
            display: 'flex', 
            alignItems: 'center'
        }, 
        difference: {
            alignItems: 'center', 
            color: theme.palette.success.dark, 
            display: 'inline-flex', 
            fontWeight: 700
        }, 
        caption: {
            marginLeft: theme.spacing.unit
        }
    });

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes, 
            className, 
            ...rest
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <Paper {...rest} className={rootClassName}>
                    <div className={classes.content}>
                        <div className={classes.details}>
                            <Typography className={classes.title} variant="body2">
                            TOTAL USERS</Typography>
                        
                            <Typography className={classes.value} variant="h3">
                            1600</Typography>
                        
                        </div>
                    
                        <div className={classes.iconWrapper}>
                            <PeopleIcon className={classes.icon}>
                            </PeopleIcon>
                        
                        </div>
                    
                    </div>
                
                    <div className={classes.footer}>
                        <Typography className={classes.difference} variant="body2">
                            <ArrowUpwardIcon>
                            </ArrowUpwardIcon>
                        
                        16%</Typography>
                    
                        <Typography className={classes.caption} variant="caption">
                        Since last month</Typography>
                    
                    </div>
                
                </Paper>
            )
        ;
    }
}
Users = compose(withStyles(styles))(Users)
;
export default Users;
