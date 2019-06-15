/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\components\App.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import FormDemos from './FormDemos';
var readme = require('../readme.md');
import MarkdownElement from '../../common/mui/docs/MarkdownElement';
const styles = theme => (
    {
        '@global': {
            html: {
                boxSizing: 'border-box'
            }, 
            '*, *:before, *:after': {
                boxSizing: 'inherit'
            }, 
            body: {
                margin: 0, 
                background: theme.palette.background.default, 
                color: theme.palette.text.primary, 
                lineHeight: '1.2', 
                overflowX: 'hidden', 
                WebkitFontSmoothing: 'antialiased', 
                MozOsxFontSmoothing: 'grayscale'
            }, 
            img: {
                maxWidth: '100%', 
                height: 'auto', 
                width: 'auto'
            }
        }, 
        appFrame: {
            display: 'flex', 
            alignItems: 'stretch', 
            minHeight: '100vh', 
            width: '100%'
        }, 
        container: {
            paddingTop: '80px'
        }
    });

class App extends React.Component {
    state = {
        showReadme: false
    };
    render() {
        const {
            classes
        } = this.props;
        console.log('render.state', this.state);
        return  (
                <div className={classes.appFrame}>
                    <AppBar>
                        <Toolbar>
                            <Typography type="title" color='inherit' noWrap>
                            Form builder</Typography>
                        
                        </Toolbar>
                    
                    </AppBar>
                
                    <div className={classes.container}>
                        <Button onClick={() =>
                            this.setState({
                                ...this.state, 
                                showReadme: !this.state.showReadme
                            })}>
                        Readme</Button>
                    
                        <FormDemos>
                        </FormDemos>
                    
                        <Collapse in={this.state.showReadme} transitionDuration="auto" unmountOnExit>
                            <MarkdownElement text={readme}>
                            </MarkdownElement>
                        
                        </Collapse>
                    
                    </div>
                
                </div>
            )
        ;
    }
}

export default withStyles(styles)(App)
