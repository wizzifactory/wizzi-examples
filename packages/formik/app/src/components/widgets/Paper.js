/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\Paper.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import PaperMui from '@material-ui/core/Paper';
const styles = theme => (
    {
        root: {
            borderRadius: '4px'
        }, 
        squared: {
            borderRadius: 0
        }, 
        outlined: {
            border: `1px solid${theme.palette.border}`
        }
    });

class Paper extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes, 
            className, 
            outlined, 
            squared, 
            children, 
            ...rest
        } = this.props;
        const rootClassName = classNames({
            [classes.root]: true, 
            [classes.squared]: squared, 
            [classes.outlined]: outlined
        }, className);
        return  (
                <PaperMui {...rest} className={rootClassName}>
                {children}</PaperMui>
            )
        ;
    }
}

Paper.propTypes = {
    elevation: PropTypes.number,
    outlined: PropTypes.bool,
    squared: PropTypes.bool
}

Paper.defaultProps  = {
    elevation: 0,
    outlined: true,
    squared: false
}
Paper = compose(withStyles(styles))(Paper)
;
export default Paper;
