/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\layouts\DefaultLayout\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles, withWidth} from '@material-ui/core';
import compose from 'recompose/compose';
import {Drawer} from '@material-ui/core';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
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

class DefaultLayout extends React.Component {
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
        const topbarClassName = classNames(classes.topbar, {
            [classes.topbarShift]: shiftTopbar
        });
        console.log('width,isMobile,isOpen,shiftTopbar,shiftContent', width,isMobile,isOpen,shiftTopbar,shiftContent, topbarClassName);
        return  (
                <React.Fragment>
                    <Topbar className={topbarClassName} isSidebarOpen={isOpen} onToggleSidebar={this.handleToggleOpen} title={title}>
                    </Topbar>
                
                    <Drawer anchor="left" classes={{
                        paper: classes.drawerPaper
                    }} onClose={this.handleClose} open={isOpen} variant={isMobile ? 'temporary' : 'persistent'}>
                        <Sidebar className={classes.sidebar}>
                        </Sidebar>
                    
                    </Drawer>
                
                    <main className={classNames(classes.content, {
                        [classes.contentShift]: shiftContent
                    })}>
                    {children}<Footer>
                        </Footer>
                    
                    </main>
                
                </React.Fragment>
            )
        ;
    }
}
DefaultLayout = compose(withStyles(styles), withWidth())(DefaultLayout)
;
export default DefaultLayout;
