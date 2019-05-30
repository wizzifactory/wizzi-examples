/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\widgets\FormCardButtons.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/form-card-buttons.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Icon from './Icon';
class FormCardButtons extends React.Component {
    render() {
        const {
            forbidUpdate, 
            forbidDelete, 
            editable, 
            disabled, 
            archivedAt, 
            onEdit, 
            onDelete
        } = this.props;
        // NOTE: using Tooltips below when we have 100 more items leads to a significant latency. In the
        // future, if we wish to support tooltips then we'll probably need to lazy load the tooltip on
        // mouse over.
        let updateButton = null;
        if (!forbidUpdate) {
            // <Tooltip title="Edit">
            updateButton =  (
                <IconButton onClick={onEdit}>
                    <Icon icon="Edit">
                    </Icon>
                
                </IconButton>
            )
            ;
            // </Tooltip>
        }
        let deleteButton = null;
        if (!forbidDelete) {
            deleteButton =  (
                <IconButton onClick={onDelete}>
                    <Icon icon={archivedAt ? 'Restore' : 'Delete'}>
                    </Icon>
                
                </IconButton>
            )
            ;
        }
        if (editable && !disabled && !forbidUpdate || !forbidDelete) {
            return  (
                    <Grid item>
                    {updateButton}{deleteButton}</Grid>
                )
            ;
        }
        else {
            return null;
        }
    }
}
export default FormCardButtons;
