/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\Link.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
class WrappedLink extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            to, 
            children
        } = this.props;
        return  (
                <Link color="inherit" component={RouterLink} to={to}>
                {children}</Link>
            )
        ;
    }
}
export default WrappedLink;
