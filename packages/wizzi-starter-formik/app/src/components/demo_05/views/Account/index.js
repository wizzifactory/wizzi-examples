/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Account\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Grid} from '@material-ui/core';
import {DefaultLayout} from 'components/demo_05/layouts';
import AccountProfile from './components/AccountProfile';
import AccountDetails from './components/AccountDetails';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 4
        }
    });

class Account extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        tabIndex: 0
    };
    render() {
        const {
            classes
        } = this.props;
        return  (
                <DefaultLayout title="Account">
                    <div className={classes.root}>
                        <Grid container spacing={4}>
                            <Grid item lg={4} md={6} xl={4} xs={12}>
                                <AccountProfile>
                                </AccountProfile>
                            
                            </Grid>
                        
                            <Grid item lg={8} md={6} xl={8} xs={12}>
                                <AccountDetails>
                                </AccountDetails>
                            
                            </Grid>
                        
                        </Grid>
                    
                    </div>
                
                </DefaultLayout>
            )
        ;
    }
}
Account = compose(withStyles(styles))(Account)
;
export default Account;
