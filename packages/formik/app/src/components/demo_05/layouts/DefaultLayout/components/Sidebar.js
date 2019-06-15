/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\layouts\DefaultLayout\components\Sidebar.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Link, NavLink} from 'react-router-dom';
// Material components
import {Avatar, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography} from '@material-ui/core';
// Material icons
import {DashboardOutlined as DashboardIcon, PeopleOutlined as PeopleIcon, ShoppingBasketOutlined as ShoppingBasketIcon, LockOpenOutlined as LockOpenIcon, TextFields as TextFieldsIcon, ImageOutlined as ImageIcon, InfoOutlined as InfoIcon, AccountBoxOutlined as AccountBoxIcon, SettingsOutlined as SettingsIcon} from '@material-ui/icons';
const styles = theme => (
    {
        root: {
            backgroundColor: theme.palette.common.white, 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%', 
            paddingLeft: theme.spacing.unit, 
            paddingRight: theme.spacing.unit
        }, 
        logoWrapper: {
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '63px', 
            flexShrink: 0
        }, 
        logoLink: {
            fontSize: 0
        }, 
        logoImage: {
            cursor: 'pointer'
        }, 
        logoDivider: {
            marginBottom: theme.spacing.unit * 2
        }, 
        profile: {
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            minHeight: 'fit-content'
        }, 
        avatar: {
            width: '100px', 
            height: '100px'
        }, 
        nameText: {
            marginTop: theme.spacing.unit * 2
        }, 
        bioText: {}, 
        profileDivider: {
            marginBottom: theme.spacing.unit * 2, 
            marginTop: theme.spacing.unit * 2
        }, 
        listSubheader: {
            color: theme.palette.text.secondary
        }, 
        listItem: {
            cursor: 'pointer', 
            '&:hover': {
                backgroundColor: theme.palette.primary.light, 
                borderLeft: `4px solid${theme.palette.primary.main}`, 
                borderRadius: '4px', 
                '& $listItemIcon': {
                    color: theme.palette.primary.main, 
                    marginLeft: '-4px'
                }
            }, 
            '& + &': {
                marginTop: theme.spacing.unit
            }
        }, 
        activeListItem: {
            borderLeft: `4px solid${theme.palette.primary.main}`, 
            borderRadius: '4px', 
            backgroundColor: theme.palette.primary.light, 
            '& $listItemText': {
                color: theme.palette.text.primary
            }, 
            '& $listItemIcon': {
                color: theme.palette.primary.main, 
                marginLeft: '-4px'
            }
        }, 
        listItemIcon: {
            marginRight: 0
        }, 
        listItemText: {
            fontWeight: 500, 
            color: theme.palette.text.secondary
        }, 
        listDivider: {
            marginBottom: theme.spacing.unit * 2, 
            marginTop: theme.spacing.unit * 2
        }
    });

class Sidebar extends React.Component {
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
                <nav className={rootClassName}>
                    <div className={classes.logoWrapper}>
                        <Link className={classes.logoLink} to="/">
                            <img alt="Brainalytica logo" className={classes.logoImage} src="/images/logos/brainalytica_logo.svg">
                            </img>
                        
                        </Link>
                    
                    </div>
                
                    <Divider className={classes.logoDivider}>
                    </Divider>
                
                    <Divider className={classes.profileDivider}>
                    </Divider>
                
                    <List component="div" disablePadding>
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/dashboard">
                            <ListItemIcon className={classes.listItemIcon}>
                                <DashboardIcon>
                                </DashboardIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Dashboard">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/formikform">
                            <ListItemIcon className={classes.listItemIcon}>
                                <DashboardIcon>
                                </DashboardIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="FormikForm">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/settings">
                            <ListItemIcon className={classes.listItemIcon}>
                                <SettingsIcon>
                                </SettingsIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Settings">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/account">
                            <ListItemIcon className={classes.listItemIcon}>
                                <AccountBoxIcon>
                                </AccountBoxIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Account">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/users">
                            <ListItemIcon className={classes.listItemIcon}>
                                <PeopleIcon>
                                </PeopleIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Users">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/products">
                            <ListItemIcon className={classes.listItemIcon}>
                                <ShoppingBasketIcon>
                                </ShoppingBasketIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Products">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/icons">
                            <ListItemIcon className={classes.listItemIcon}>
                                <ImageIcon>
                                </ImageIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Icons">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/colors">
                            <ListItemIcon className={classes.listItemIcon}>
                                <ImageIcon>
                                </ImageIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Colors">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/sign-in">
                            <ListItemIcon className={classes.listItemIcon}>
                                <LockOpenIcon>
                                </LockOpenIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Authentication">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/typography">
                            <ListItemIcon className={classes.listItemIcon}>
                                <TextFieldsIcon>
                                </TextFieldsIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Typography">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/users">
                            <ListItemIcon className={classes.listItemIcon}>
                                <PeopleIcon>
                                </PeopleIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Users">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/products">
                            <ListItemIcon className={classes.listItemIcon}>
                                <ShoppingBasketIcon>
                                </ShoppingBasketIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Products">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/sign-in">
                            <ListItemIcon className={classes.listItemIcon}>
                                <LockOpenIcon>
                                </LockOpenIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Authentication">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/typography">
                            <ListItemIcon className={classes.listItemIcon}>
                                <TextFieldsIcon>
                                </TextFieldsIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Typography">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/icons">
                            <ListItemIcon className={classes.listItemIcon}>
                                <ImageIcon>
                                </ImageIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Icons and Images">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/account">
                            <ListItemIcon className={classes.listItemIcon}>
                                <AccountBoxIcon>
                                </AccountBoxIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Account">
                            </ListItemText>
                        
                        </ListItem>
                    
                        <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink} to="/settings">
                            <ListItemIcon className={classes.listItemIcon}>
                                <SettingsIcon>
                                </SettingsIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Settings">
                            </ListItemText>
                        
                        </ListItem>
                    
                    </List>
                
                    <Divider className={classes.listDivider}>
                    </Divider>
                
                    <List component="div" disablePadding subheader={ (
                        <ListSubheader className={classes.listSubheader}>
                        Support</ListSubheader>
                    )
                    }>
                        <ListItem className={classes.listItem} component="a" href="https://devias.io/contact-us" target="_blank">
                            <ListItemIcon className={classes.listItemIcon}>
                                <InfoIcon>
                                </InfoIcon>
                            
                            </ListItemIcon>
                        
                            <ListItemText classes={{
                                primary: classes.listItemText
                            }} primary="Customer support">
                            </ListItemText>
                        
                        </ListItem>
                    
                    </List>
                
                </nav>
            )
        ;
    }
}
Sidebar = compose(withStyles(styles))(Sidebar)
;
export default Sidebar;
