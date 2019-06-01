/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\FormCard.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/form-card.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormCardButtons from './FormCardButtons';
import Component from './component';
import attach from './attach';
const styles = theme => (
    {
        paper: {
            margin: theme.spacing.unit, 
            padding: theme.spacing.unit * 2
        }, 
        content: {
            flex: 1, 
            cursor: 'pointer'
        }
    });

class FormCardButtons extends React.Component {
    handleClick = (event) => {
        if (this.props.onClick) {
            this.props.onClick(event, this.props.component);
        }
    }
    handleEdit = (event, id) => {
        if (this.props.onEdit) {
            this.props.onEdit(event, this.props.component);
        }
    }
    handleDelete = (event) => {
        // this.handleMoreClose();
        if (this.props.onDelete) {
            this.props.onDelete(this.props.component);
        }
    }
    render() {
        const {
            component, 
            classes, 
            forbidUpdate, 
            forbidDelete, 
            editable, 
            disabled, 
            value
        } = this.props;
        return  (
                <div>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap">
                            <Grid item className={classes.content} onClick={(event) =>
                                this.handleClick(event)}>
                                <Component component={component} formTag={false} mode="read">
                                </Component>
                            
                            </Grid>
                        
                            <FormCardButtons forbidUpdate={forbidUpdate} forbidDelete={forbidDelete} editable={editable} disabled={disabled} archivedAt={value.archivedAt} onEdit={(event) =>
                                this.handleEdit(event)} onDelete={(event) =>
                                this.handleDelete(event)}>
                            </FormCardButtons>
                        
                        </Grid>
                    
                    </Paper>
                
                </div>
            )
        ;
    }
}
FormCardButtons = withStyles(styles)(FormCardButtons)
;
export default FormCardButtons;
export default attach([
        'value'
    ])(FormCard)
