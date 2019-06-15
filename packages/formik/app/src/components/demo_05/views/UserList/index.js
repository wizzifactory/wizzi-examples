/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\UserList\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {CircularProgress, Typography} from '@material-ui/core';
import {DefaultLayout} from 'components/demo_05/layouts';
import {getUsers} from 'components/demo_05/services/user';
import {UsersToolbar, UsersTable} from './components';
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 3
        }, 
        content: {
            marginTop: theme.spacing.unit * 2
        }, 
        progressWrapper: {
            paddingTop: '48px', 
            paddingBottom: '24px', 
            display: 'flex', 
            justifyContent: 'center'
        }
    });

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.signal = true;
    }
    state = {
        isLoading: false, 
        limit: 10, 
        users: [], 
        selectedUsers: [], 
        error: null
    };
    async getUsers() {
        try {
            this.setState({
                isLoading: true
            });
            const {
                limit
            } = this.state;
            const {
                users
            } = await getUsers(limit);
            if (this.signal) {
                this.setState({
                    isLoading: false, 
                    users
                });
            }
        } 
        catch (error) {
            if (this.signal) {
                this.setState({
                    isLoading: false, 
                    error
                });
            }
        } 
    }
    componentDidMount() {
        this.signal = true;
        this.getUsers();
    }
    componentWillMount() {
        this.signal = false;
    }
    handleSelect = (selectedUsers) => {
        this.setState({
            selectedUsers
        });
    }
    renderUsers() {
        const {
            classes
        } = this.props;
        const {
            isLoading, 
            users, 
            error
        } = this.state;
        if (isLoading) {
            return  (
                    <div className={classes.progressWrapper}>
                        <CircularProgress>
                        </CircularProgress>
                    
                    </div>
                )
            ;
        }
        if (error) {
            return  (
                    <Typography variant="h6">
                    {error}</Typography>
                )
            ;
        }
        if (users.length === 0) {
            return  (
                    <Typography variant="h6">
                    There are no users</Typography>
                )
            ;
        }
        return  (
                <UsersTable onSelect={this.handleSelect} users={users}>
                //
                //
                </UsersTable>
            )
        ;
    }
    render() {
        const {
            classes
        } = this.props;
        const {
            selectedUsers
        } = this.state;
        return  (
                <DefaultLayout title="Users">
                    <div className={classes.root}>
                        <UsersToolbar selectedUsers={selectedUsers}>
                        </UsersToolbar>
                    
                        <div className={classes.content}>
                        {
                            this.renderUsers()
                        }</div>
                    
                    </div>
                
                </DefaultLayout>
            )
        ;
    }
}
UserList = compose(withStyles(styles))(UserList)
;
export default UserList;
