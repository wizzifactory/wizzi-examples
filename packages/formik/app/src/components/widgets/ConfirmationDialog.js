/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\ConfirmationDialog.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/confirmation-dialog.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const styles = theme => (
    {});

class ConfirmationDialog extends React.Component {
    handleClose = (yes) => {
        if (this.props.onClose) {
            this.props.onClose(yes);
        }
    }
    render() {
        const {
            title, 
            text, 
            open, 
            alert
        } = this.props;
        return  (
                <div>
                    <Dialog open={open} onClose={() =>
                        this.handleClose(false)} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                        {title}</DialogTitle>
                    
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            {text}</DialogContentText>
                        
                        </DialogContent>
                    
                        <DialogActions>
                        {
                            alert ? null :  (
                                    <Button onClick={() =>
                                        this.handleClose(false)} color="primary">
                                    No</Button>
                                )
                            
                        }<Button onClick={() =>
                                this.handleClose(true)} color="primary" autoFocus>
                            {
                                alert ? 'OK' : 'Yes'
                            }</Button>
                        
                        </DialogActions>
                    
                    </Dialog>
                
                </div>
            )
        ;
    }
}
ConfirmationDialog = withStyles(styles)(ConfirmationDialog)
;
export default ConfirmationDialog;
