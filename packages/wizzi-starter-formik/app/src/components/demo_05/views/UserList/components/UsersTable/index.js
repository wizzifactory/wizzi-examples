/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\UserList\components\UsersTable\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Link} from 'react-router-dom';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Avatar, Checkbox, Table, TableBody, TableCell, TableHead, TableRow, Typography, TablePagination} from '@material-ui/core';
import {getInitials} from 'components/demo_05/helpers';
import Portlet from 'components/widgets/portlet/Portlet';
import PortletHeader from 'components/widgets/portlet/PortletHeader';
import PortletLabel from 'components/widgets/portlet/PortletLabel';
import PortletContent from 'components/widgets/portlet/PortletContent';
import PortletFooter from 'components/widgets/portlet/PortletFooter';
const styles = theme => (
    {
        root: {}, 
        tableRow: {
            height: '64px'
        }, 
        tableCell: {
            whiteSpace: 'nowrap'
        }, 
        tableCellInner: {
            display: 'flex', 
            alignItems: 'center'
        }, 
        avatar: {
            backgroundColor: theme.palette.primary.main, 
            display: 'inline-flex', 
            fontSize: '14px', 
            fontWeight: 500, 
            height: '36px', 
            width: '36px'
        }, 
        nameText: {
            display: 'inline-block', 
            marginLeft: theme.spacing.unit * 2, 
            fontWeight: 500, 
            cursor: 'pointer'
        }
    });

class UserTable extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        selectedUsers: [], 
        rowsPerPage: 10, 
        page: 0
    };
    handleSelectAll = (event) => {
        const {
            users, 
            onSelect
        } = this.props;
        let selectedUsers;
        if (event.target.checked) {
            selectedUsers = users.map((user) =>
                user.id);
        }
        else {
            selectedUsers = [];
        }
        this.setState({
            selectedUsers
        });
        onSelect(selectedUsers);
    }
    handleSelectOne = (event, id) => {
        const {
            onSelect
        } = this.props;
        const {
            selectedUsers
        } = this.state;
        const selectedIndex = selectedUsers.indexOf(id);
        let newSelectedUsers = [];
        if (selectedIndex === -1) {
            newSelectedUsers = newSelectedUsers.concat(selectedUsers, id);
        }
        else {
            if (selectedIndex === 0) {
                newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(1));
            }
            else {
                if (selectedIndex === selectedUsers.length - 1) {
                    newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, -1));
                }
                else {
                    if (selectedIndex > 0) {
                        newSelectedUsers = newSelectedUsers.concat(selectedUsers.slice(0, selectedIndex), selectedUsers.slice(selectedIndex + 1));
                    }
                }
            }
        }
        this.setState({
            selectedUsers: newSelectedUsers
        });
        onSelect(newSelectedUsers);
    }
    handleChangePage = (event, page) => {
        this.setState({
            page
        });
    }
    handleChangeRowsPerPage = (event) => {
        this.setState({
            rowsPerPage: event.target.value
        });
    }
    render() {
        const {
            classes, 
            className, 
            users
        } = this.props;
        const {
            activeTab, 
            selectedUsers, 
            rowsPerPage, 
            page
        } = this.state;
        const rootClassName = classNames(classes.root, className);
        return  (
                <Portlet className={rootClassName}>
                    <PortletContent noPadding>
                        <PerfectScrollbar>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">
                                            <Checkbox checked={selectedUsers.length === users.length} color="primary" indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length} onChange={this.handleSelectAll}>
                                            </Checkbox>
                                        
                                        Name</TableCell>
                                    
                                        <TableCell align="left">
                                        ID</TableCell>
                                    
                                        <TableCell align="left">
                                        State</TableCell>
                                    
                                        <TableCell align="left">
                                        Phone</TableCell>
                                    
                                        <TableCell align="left">
                                        Registration date</TableCell>
                                    
                                    </TableRow>
                                
                                </TableHead>
                            
                                <TableBody>
                                {
                                    users.filter((user) => {
                                        if (activeTab === 1) {
                                            return !user.returning;
                                        }
                                        if (activeTab === 2) {
                                            return user.returning;
                                        }
                                        return user;
                                    }).slice(0, rowsPerPage).map((user) =>  (
                                            <TableRow className={classes.tableRow} hover key={user.id} selected={selectedUsers.indexOf(user.id) !== -1}>
                                                <TableCell className={classes.tableCell}>
                                                    <div className={classes.tableCellInner}>
                                                        <Checkbox checked={selectedUsers.indexOf(user.id) !== -1} color="primary" onChange={(event) =>
                                                            this.handleSelectOne(event, user.id)} value="true">
                                                        </Checkbox>
                                                    
                                                        <Avatar className={classes.avatar} src={user.avatarUrl}>
                                                        {getInitials(user.name)}</Avatar>
                                                    
                                                        <Link to="#">
                                                            <Typography className={classes.nameText} variant="body1">
                                                            {user.name}</Typography>
                                                        
                                                        </Link>
                                                    
                                                    </div>
                                                
                                                </TableCell>
                                            
                                                <TableCell className={classes.tableCell}>
                                                {user.id}</TableCell>
                                            
                                                <TableCell className={classes.tableCell}>
                                                {user.address.state}</TableCell>
                                            
                                                <TableCell className={classes.tableCell}>
                                                {user.phone}</TableCell>
                                            
                                                <TableCell className={classes.tableCell}>
                                                {moment(user.createdAt).format('DD/MM/YYYY')}</TableCell>
                                            
                                            </TableRow>
                                        )
                                    )
                                    
                                }</TableBody>
                            
                            </Table>
                        
                        </PerfectScrollbar>
                    
                        <TablePagination backIconButtonProps={{
                            'aria-label': 'Previous Page'
                        }} component="div" count={users.length} nextIconButtonProps={{
                            'aria-label': 'Next Page'
                        }} onChangePage={this.handleChangePage} onChangeRowsPerPage={this.handleChangeRowsPerPage} page={page} rowsPerPage={rowsPerPage} rowsPerPageOptions={[
                            5, 
                            10, 
                            25
                        ]}>
                        </TablePagination>
                    
                    </PortletContent>
                
                </Portlet>
            )
        ;
    }
}

UserTable.propTypes = {
    onSelect: PropTypes.func,
    onShowDetails: PropTypes.func,
    users: PropTypes.array
}

UserTable.defaultProps  = {
    onSelect: () => {},
    onShowDetails: () => {},
    users: []
}
UserTable = compose(withStyles(styles))(UserTable)
;
export default UserTable;
