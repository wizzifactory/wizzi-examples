/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\layouts\DefaultLayout\components\Topbar.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "components/widgets/Link";
function t(text) {
    return text;
}
const styles = theme => (
    {
        grow: {
            flex: '1 1 auto'
        }
    });

class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes,
            className
        } = this.props;
        return  (
                <AppBar position="static" className={className}>
                    <Toolbar>
                        <Tooltip title={t('Menu')} enterDelay={300}>
                            <IconButton aria-label={t('Menu')} component={Link} naked to="/home">
                                <Icon>
                                menu</Icon>
                            
                            </IconButton>
                        
                        </Tooltip>
                    
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
            )
        ;
    }
}
Topbar = compose(withStyles(styles))(Topbar)
;
export default Topbar;
