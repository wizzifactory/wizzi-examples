/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\pages\Home.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Link from 'react-router/lib/Link';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
var routesBasepath = '/app/formbuilder';
const styles = theme => (
    {
        root: {
            flex: '1 0 100%'
        }, 
        hero: {
            minHeight: '100vh', 
            flex: '0 0 auto', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundColor: theme.palette.primary[500], 
            color: theme.palette.getContrastText(theme.palette.primary[500])
        }, 
        content: {
            padding: '60px 30px', 
            textAlign: 'center', 
            [theme.breakpoints.up('sm')]: {
                padding: '120px 30px'
            }
        }, 
        button: {
            marginTop: 20
        }, 
        logo: {
            margin: '20px -40%', 
            width: '100%', 
            height: '40vw', 
            maxHeight: 230
        }
    });

class Home extends React.Component {
    render() {
        const {
            classes
        } = this.props;
        return  (
                <div className={classes.root}>
                    <div className={classes.hero}>
                        <div className={classes.content}>
                            <Typography type="display2" component="h1" color='inherit'>
                            {'Form builder'}</Typography>
                        
                            <Typography type="subheading" component="h2" color='inherit'>
                            {"Building react forms the wizzi way"}</Typography>
                        
                            <Button component={Link} className={classes.button} raised to={routesBasepath + "/getting-started/installation"}>
                            {'Get Started'}</Button>
                        
                        </div>
                    
                    </div>
                
                </div>
            )
        ;
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
