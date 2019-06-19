/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\UserList\components\UsersToolbar\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Button, IconButton} from '@material-ui/core';
import {ArrowDownward as ArrowDownwardIcon, ArrowUpward as ArrowUpwardIcon, Delete as DeleteIcon} from '@material-ui/icons';
import DisplayMode from 'components/widgets/DisplayMode';
import SearchInput from 'components/widgets/SearchInput';
const styles = theme => (
    {
        root: {}, 
        row: {
            height: '42px', 
            display: 'flex', 
            alignItems: 'center', 
            marginTop: theme.spacing.unit
        }, 
        spacer: {
            flexGrow: 1
        }, 
        deleteButton: {
            color: theme.palette.danger.main, 
            marginRight: theme.spacing.unit
        }, 
        importButton: {
            marginRight: theme.spacing.unit
        }, 
        importIcon: {
            marginRight: theme.spacing.unit
        }, 
        exportButton: {
            marginRight: theme.spacing.unit
        }, 
        exportIcon: {
            marginRight: theme.spacing.unit
        }, 
        searchInput: {
            marginRight: theme.spacing.unit
        }
    });

class UserToolbars extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes, 
            className, 
            selectedUsers
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <div className={rootClassName}>
                    <div className={classes.row}>
                        <span className={classes.spacer}>
                        </span>
                    
                    {
                        selectedUsers.length > 0 &&  (
                            <IconButton className={classes.deleteButton} onClick={this.handleDeleteUsers}>
                                <DeleteIcon>
                                </DeleteIcon>
                            
                            </IconButton>
                        )
                        
                    }<Button className={classes.importButton} size="small" variant="outlined">
                            <ArrowDownwardIcon className={classes.importIcon}>
                            </ArrowDownwardIcon>
                        
                        Import</Button>
                    
                        <Button className={classes.exportButton} size="small" variant="outlined">
                            <ArrowUpwardIcon className={classes.exportIcon}>
                            </ArrowUpwardIcon>
                        
                        Export</Button>
                    
                        <Button color="primary" size="small" variant="outlined">
                        Add</Button>
                    
                    </div>
                
                    <div className={classes.row}>
                        <SearchInput className={classes.searchInput} placeholder="Search user">
                        </SearchInput>
                    
                        <span className={classes.spacer}>
                        </span>
                    
                        <DisplayMode mode="list">
                        </DisplayMode>
                    
                    </div>
                
                </div>
            )
        ;
    }
}

UserToolbars.propTypes = {
    selectedUsers: PropTypes.array
}

UserToolbars.defaultProps  = {
    selectedUsers: []
}
UserToolbars = compose(withStyles(styles))(UserToolbars)
;
export default UserToolbars;
