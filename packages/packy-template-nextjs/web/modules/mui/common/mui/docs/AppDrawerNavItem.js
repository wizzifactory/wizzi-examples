/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\docs\AppDrawerNavItem.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { ListItem } from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
const styles = theme => (
    {
        button: theme.mixins.gutters({
            borderRadius: 0, 
            justifyContent: 'flex-start', 
            textTransform: 'none', 
            width: '100%', 
            '&:hover': {
                textDecoration: 'none'
            }
        }), 
        navItem: {
            ...theme.typography.body2, 
            display: 'block', 
            paddingTop: 0, 
            paddingBottom: 0
        }, 
        navLink: {
            fontWeight: theme.typography.fontWeightRegular, 
            display: 'flex', 
            paddingTop: 0, 
            paddingBottom: 0
        }, 
        navLinkButton: {
            color: theme.palette.text.secondary, 
            textIndent: 24, 
            fontSize: 13
        }, 
        activeButton: {
            color: theme.palette.text.primary
        }
    });

class AppDrawerNavItem extends React.Component {
    state = {
        open: false
    };
    componentWillMount() {
        if (this.props.openImmediately) {
            this.setState({
                open: true
            });
        }
    }
    handleClick = () => {
        this.setState({
            open: !this.state.open
        });
    }
    render() {
        const {
            classes,
            children,
            title,
            to
        } = this.props;
        if (to) {
            return  (
                    <ListItem className={classes.navLink} disableGutters>
                        <Button component={Link} to={to} className={classNames(classes.button, classes.navLinkButton)} activeClassName={classes.activeButton} ripple={false} onClick={this.props.onClick}>
                        {title}</Button>
                    
                    </ListItem>
                )
            ;
        }
        return  (
                <ListItem className={classes.navItem} disableGutters>
                    <Button className={classes.button} onClick={this.handleClick}>
                    {title}</Button>
                
                    <Collapse in={this.state.open} transitionDuration="auto" unmountOnExit>
                    {children}</Collapse>
                
                </ListItem>
            )
        ;
    }
}

AppDrawerNavItem.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    openImmediately: PropTypes.bool,
    title: PropTypes.string.isRequired,
    to: PropTypes.string
}

AppDrawerNavItem.defaultProps  = {
    openImmediately: false
}

export default AppDrawerNavItem
