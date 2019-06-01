/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\Button.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/button.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ButtonMui from '@material-ui/core/Button';
import Icon from './Icon';
const styles = theme => (
    {
        leftIcon: {
            marginRight: theme.spacing.unit
        }, 
        marginTop: {
            marginTop: theme.spacing.unit * 3
        }
    });

class Button extends React.Component {
    handleClick = () => {
        if (this.props.onClick) {
            this.props.onClick();
        }
    }
    render() {
        const {
            classes, 
            type, 
            disabled, 
            label, 
            icon, 
            fullWidth, 
            variant, 
            marginTop
        } = this.props;
        const className = marginTop !== false ? classes.marginTop : null;
        return  (
                <ButtonMui className={className} type={type} color="primary" disabled={disabled} onClick={this.handleClick} fullWidth={fullWidth} variant={variant}>
                {
                    icon ?  (
                            <Icon className={classes.leftIcon} icon={icon}>
                            </Icon>
                        )
                     : null
                }{label}</ButtonMui>
            )
        ;
    }
}
Button = withStyles(styles)(Button)
;
export default Button;
