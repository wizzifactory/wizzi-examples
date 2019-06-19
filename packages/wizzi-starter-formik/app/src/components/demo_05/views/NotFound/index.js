/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\NotFound\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Grid, Typography} from '@material-ui/core';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 4
        }, 
        content: {
            marginTop: '150px', 
            textAlign: 'center'
        }, 
        image: {
            display: 'inline-block', 
            marginTop: '50px', 
            maxWidth: '100%', 
            width: '554px'
        }
    });

class NotFound extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes
        } = this.props;
        return  (
                <div className={classes.root}>
                    <Grid container justify="center" spacing={4}>
                        <Grid item lg={6} xs={12}>
                            <div className={classes.content}>
                                <Typography variant="h1">
                                404: The page you are looking for isn’t here</Typography>
                            
                                <Typography variant="subtitle2">
                                You either tried some shady route or you came here by mistake.Whichever it is, try using the navigation</Typography>
                            
                                <img alt="Under development" className={classes.image} src="/images/not_found.png">
                                </img>
                            
                            </div>
                        
                        </Grid>
                    
                    </Grid>
                
                </div>
            )
        ;
    }
}
NotFound = compose(withStyles(styles))(NotFound)
;
export default NotFound;
