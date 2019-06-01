/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Dashboard\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Grid} from '@material-ui/core';
import {DefaultLayout} from 'components/demo_05/layouts';
import {Users} from './components';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 4
        }, 
        item: {
            height: '100%'
        }
    });

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes
        } = this.props;
        return  (
                <DefaultLayout title="Dashboard">
                    <div className={classes.root}>
                        <Grid container spacing={4}>
                            <Grid item lg={3} sm={6} xl={3} xs={12}>
                                <Users className={classes.item}>
                                </Users>
                            
                            </Grid>
                        
                        </Grid>
                    
                    </div>
                
                </DefaultLayout>
            )
        ;
    }
}
Dashboard = compose(withStyles(styles))(Dashboard)
;
export default Dashboard;
