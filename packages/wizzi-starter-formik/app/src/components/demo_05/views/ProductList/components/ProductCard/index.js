/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\ProductList\components\ProductCard\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Typography, Divider} from '@material-ui/core';
import {AccessTime as AccessTimeIcon, GetApp as GetAppIcon} from '@material-ui/icons';
import Paper from 'components/widgets/Paper';
const styles = theme => (
    {
        root: {
            maxWidth: '100%', 
            paddingTop: theme.spacing.unit * 3, 
            paddingBottom: theme.spacing.unit * 2, 
            paddingRight: theme.spacing.unit * 3, 
            paddingLeft: theme.spacing.unit * 3
        }, 
        imageWrapper: {
            height: '64px', 
            width: '64px', 
            margin: '0 auto', 
            border: '1px solid #EDF0F2', 
            borderRadius: '5px', 
            overflow: 'hidden', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        }, 
        image: {
            width: '100%'
        }, 
        details: {}, 
        title: {
            fontSize: '18px', 
            lineHeight: '21px', 
            textAlign: 'center', 
            marginTop: theme.spacing.unit * 2
        }, 
        description: {
            lineHeight: '16px', 
            height: theme.spacing.unit * 4, 
            overflow: 'hidden', 
            whiteSpace: 'nowrap', 
            textOverflow: 'ellipsis', 
            color: theme.palette.text.secondary, 
            textAlign: 'center', 
            marginTop: theme.spacing.unit, 
            marginBottom: theme.spacing.unit * 2
        }, 
        stats: {
            display: 'flex', 
            alignItems: 'center', 
            paddingTop: theme.spacing.unit
        }, 
        updateIcon: {
            color: theme.palette.text.secondary
        }, 
        updateText: {
            marginLeft: theme.spacing.unit, 
            color: theme.palette.text.secondary
        }, 
        downloadsIcon: {
            marginLeft: 'auto', 
            color: theme.palette.text.secondary
        }, 
        downloadsText: {
            marginLeft: theme.spacing.unit, 
            color: theme.palette.text.secondary
        }
    });

class Password extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes, 
            className, 
            product
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <Paper className={rootClassName}>
                    <div className={classes.imageWrapper}>
                        <img alt="Product" className={classes.image} src={product.imageUrl}>
                        </img>
                    
                    </div>
                
                    <div className={classes.details}>
                        <Typography className={classes.title} variant="h4">
                        {product.title}</Typography>
                    
                        <Typography className={classes.description} variant="body1">
                        {product.description}</Typography>
                    
                    </div>
                
                    <Divider>
                    </Divider>
                
                    <div className={classes.stats}>
                        <AccessTimeIcon className={classes.updateIcon}>
                        </AccessTimeIcon>
                    
                        <Typography className={classes.updateText} variant="body2">
                        Updated 2hr ago</Typography>
                    
                        <GetAppIcon className={classes.downloadsIcon}>
                        </GetAppIcon>
                    
                        <Typography className={classes.downloadsText} variant="body2">
                        {product.totalDownloads}Downloads</Typography>
                    
                    </div>
                
                </Paper>
            )
        ;
    }
}
Password = compose(withStyles(styles))(Password)
;
export default Password;
