/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\App_05.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles, withWidth} from '@material-ui/core';
import compose from 'recompose/compose';
import {BrowserRouter as Router} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "./widgets/Link";
import Drawer from "@material-ui/core/Drawer";
import Sidebar from "./demo_05/Sidebar";
import Topbar from "./demo_05/Topbar";
function t(text) {
    return text;
}
const styles = theme => (
    {
        topbar: {
            position: 'fixed', 
            width: '100%', 
            top: 0, 
            left: 0, 
            right: 'auto', 
            transition: theme.transitions.create([
                'margin', 
                'width'
            ], {
                easing: theme.transitions.easing.sharp, 
                duration: theme.transitions.duration.leavingScreen
            })
        }, 
        grow: {
            flex: "1 1 auto"
        }, 
        topbarShift: {
            marginLeft: '271px', 
            width: 'calc(-271px + 100vw)'
        }, 
        drawerPaper: {
            zIndex: 1200, 
            width: '271px'
        }, 
        sidebar: {
            width: '270px'
        }, 
        content: {
            marginTop: '64px', 
            backgroundColor: theme.palette.background.default, 
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp, 
                duration: theme.transitions.duration.leavingScreen
            })
        }, 
        contentShift: {
            marginLeft: '270px'
        }
    });

class App extends React.Component {
    constructor(props) {
        super(props);
        const isMobile = [
            'xs', 
            'sm', 
            'md'
        ].includes(props.width);
        this.state = {
            isOpen: !isMobile
        };
    }
    handleClose = () => {
        this.setState({
            isOpen: false
        });
    }
    handleToggleOpen = () => {
        this.setState((prevState) => {
            return {
                    ...prevState, 
                    isOpen: !prevState.isOpen
                };
        });
    }
    render() {
        const {
            classes,
            width,
            title,
            children
        } = this.props;
        const {
            isOpen
        } = this.state;
        const isMobile = [
            'xs', 
            'sm', 
            'md'
        ].includes(width);
        const shiftTopbar = isOpen && !isMobile;
        const shiftContent = isOpen && !isMobile;
        console.log('width,isMobile,isOpen', width,isMobile,isOpen);
        return  (
                <Router>
                    <AppBar position="static">
                        <Toolbar>
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" component={Link} to="/home">
                                <Icon>
                                menu</Icon>
                            
                            </IconButton>
                        
                            <div className={ classes.grow }>
                            </div>
                        
                            <Tooltip title={t('Profile')} enterDelay={300}>
                                <IconButton aria-label={t('Profile')} component={Link} naked to="/profile">
                                    <Icon>
                                    person</Icon>
                                
                                </IconButton>
                            
                            </Tooltip>
                        
                            <Button color="inherit" component={Link} to="/login">
                            Login</Button>
                        
                        </Toolbar>
                    
                    </AppBar>
                
                    <Topbar className={classNames(classes.topbar, {
                        [classes.topbarShift]: shiftTopbar
                    })} isSidebarOpen={isOpen} onToggleSidebar={this.handleToggleOpen} title={title}>
                    </Topbar>
                
                    <Drawer anchor="left" classes={{
                        paper: classes.drawerPaper
                    }} onClose={this.handleClose} open={isOpen} variant={isMobile ? 'temporary' : 'persistent'}>
                        <Sidebar className={classes.sidebar}>
                        </Sidebar>
                    
                    </Drawer>
                
                </Router>
            )
        ;
    }
}
App = compose(withStyles(styles), withWidth())(App)
;
export default App;
