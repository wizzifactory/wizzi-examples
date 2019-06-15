/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\docs\Link.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { Link as LinkRouter } from 'react-router';
const styles = theme => (
    {
        root: {
            color: 'inherit', 
            textDecoration: 'none', 
            '&:hover': {
                textDecoration: 'underline'
            }
        }, 
        primary: {
            color: theme.palette.primary[500]
        }, 
        accent: {
            color: theme.palette.accent.A400
        }
    });

class Link extends React.Component {
    render() {
        const {
            component: ComponentProp,
            classes,
            className,
            variant,
            to,
            ...other
        } = this.props;
        let Component;
        if (ComponentProp) {
            Component = ComponentProp;
        }
        else if (to) {
            Component = LinkRouter;
        }
        else {
            Component = 'a';
        }
        return  (
                <Component to={to} className={classNames(classes.root, {
                    [classes.primary]: variant === 'primary', 
                    [classes.accent]: variant === 'accent'
                }, className)} {...other}>
                </Component>
            )
        ;
    }
}

Link.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ])
    ,
    to: PropTypes.string,
    variant: PropTypes.oneOf([
        'primary',
        'accent'
    ])
    
}

export default Link
