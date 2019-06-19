/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Colors\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {DefaultLayout} from 'components/demo_05/layouts';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 4
        }, 
        iframe: {
            width: '100%', 
            minHeight: '640px', 
            border: 0
        }
    });

class Icons extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes
        } = this.props;
        return  (
                <DefaultLayout title="Colors">
                    <div className={classes.root}>
                        <iframe className={classes.iframe} src="https://material.io/tools/color/" title="Material Design icons">
                        </iframe>
                    
                    </div>
                
                </DefaultLayout>
            )
        ;
    }
}
Icons = compose(withStyles(styles))(Icons)
;
export default Icons;
