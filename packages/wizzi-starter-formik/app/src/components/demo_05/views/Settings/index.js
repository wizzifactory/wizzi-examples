/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Settings\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Grid} from '@material-ui/core';
import {DefaultLayout} from 'components/demo_05/layouts';
import Password from './components/Password';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 4
        }
    });

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes
        } = this.props;
        return  (
                <DefaultLayout title="Settings">
                    <div className={classes.root}>
                        <Grid container spacing={4}>
                            <Grid item md={5} xs={12}>
                                <Password>
                                </Password>
                            
                            </Grid>
                        
                        </Grid>
                    
                    </div>
                
                </DefaultLayout>
            )
        ;
    }
}
Settings = compose(withStyles(styles))(Settings)
;
export default Settings;
