/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\docs\AppDrawer.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import AppDrawerNavItem from './AppDrawerNavItem';
import Link from './Link';
var routesBasepath = '';
function renderNavItems(props, navRoot) {
    // log 'renderNavItems.props.navRoot', props, navRoot
    let navItems = null;
    if (navRoot.childRoutes && navRoot.childRoutes.length) {
        // eslint-disable-next-line no-use-before-define
        navItems = navRoot.childRoutes.reduce(reduceChildRoutes.bind(null, props), []);
    }
    return  (
            <List>
            {navItems}</List>
        )
    ;
}
function reduceChildRoutes(props, items, childRoute, index) {
    // log 'reduceChildRoutes.childRoute' , childRoute , index, props
    if (childRoute.nav) {
        if (childRoute.childRoutes && childRoute.childRoutes.length) {
            const openImmediately = props.routes.indexOf(childRoute) !== -1 || false;
            items.push(
                <AppDrawerNavItem key={index} openImmediately={openImmediately} title={childRoute.title}>
                {renderNavItems(props, childRoute)}</AppDrawerNavItem>
            );
        }
        else {
            items.push(
                <AppDrawerNavItem key={index} title={childRoute.title} to={childRoute.path} onClick={props.onRequestClose}>
                </AppDrawerNavItem>
            );
        }
    }
    return items;
}
const styles = theme => (
    {
        paper: {
            width: 250, 
            backgroundColor: theme.palette.background.paper
        }, 
        title: {
            color: theme.palette.text.secondary, 
            '&:hover': {
                color: theme.palette.primary[500]
            }
        }, 
        toolbar: {
            flexDirection: 'column', 
            alignItems: 'flex-start', 
            justifyContent: 'center'
        }, 
        anchor: {
            color: theme.palette.text.secondary
        }
    });

class AppDrawer extends React.Component {
    render() {
        const {
            classes,
            className,
            open,
            onRequestClose,
            docked,
            routes
        } = this.props;
        console.log('AppDrawer.routes[0]', routes[0]);
        return  (
                <Drawer className={className} classes={{
                    paper: classes.paper
                }} open={open} onRequestClose={onRequestClose} docked={docked}>
                    <div className={classes.nav}>
                        <Toolbar className={classes.toolbar}>
                            <Link className={classes.title} to={routesBasepath + "/"} onClick={onRequestClose}>
                                <Typography type="title" gutterBottom="colorInherit">
                                </Typography>
                            
                            </Link>
                        
                            <Divider absolute>
                            </Divider>
                        
                        </Toolbar>
                    
                    {renderNavItems(this.props, routes[0])}</div>
                
                </Drawer>
            )
        ;
    }
}

AppDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    docked: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    routes: PropTypes.array.isRequired
}

export default AppDrawer
