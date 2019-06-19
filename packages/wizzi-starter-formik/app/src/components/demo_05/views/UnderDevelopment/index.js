/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\UnderDevelopment\index.js.ittf
*/
'use strict';
import React, {Component} from 'react';
// Externals
import PropTypes from 'prop-types';
// Material helpers
import {withStyles} from '@material-ui/core';
// Material components
import {Grid, Typography} from '@material-ui/core';
// Component styles
const styles = (theme) => ({
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
class UnderDevelopment extends Component {
    constructor() {
        super();
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
                                Page Under Development</Typography>
                            
                                <Typography variant="subtitle2">
                                \n                We are still developing this page, please visit repo at\n                github.com/repo/aesthetic-material\n              </Typography>
                            
                                <img alt="Under development" className={classes.image} src="/images/under_development.png">
                                </img>
                            
                            </div>
                        
                        </Grid>
                    
                    </Grid>
                
                </div>
            )
        ;
    }
}
UnderDevelopment.propTypes = {
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(UnderDevelopment);
