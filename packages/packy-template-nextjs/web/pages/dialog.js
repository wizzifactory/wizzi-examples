/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\pages\dialog.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
const DialogTitle = withStyles((theme) => ({
        root: {
            borderBottom: `1px solid${theme.palette.divider}`, 
            margin: 0, 
            padding: theme.spacing.unit * 2
        }, 
        closeButton: {
            position: 'absolute', 
            right: theme.spacing.unit, 
            top: theme.spacing.unit, 
            color: theme.palette.grey[500]
        }
    }))((props) => {
    const {
        children, 
        classes, 
        onClose
    } = props;
    return  (
            <MuiDialogTitle disableTypography className={classes.root}>
                <Typography variant="h6">
                {children}</Typography>
            
            {
                onClose ?  (
                        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
                            <CloseIcon>
                            </CloseIcon>
                        
                        </IconButton>
                    )
                 : null
            }</MuiDialogTitle>
        )
    ;
})
;
const DialogContent = withStyles((theme) => ({
        root: {
            margin: 0, 
            padding: theme.spacing.unit * 2
        }
    }))(MuiDialogContent)
;
const DialogActions = withStyles((theme) => ({
        root: {
            borderTop: `1px solid${theme.palette.divider}`, 
            margin: 0, 
            padding: theme.spacing.unit
        }
    }))(MuiDialogActions)
;
class CustomizedDialogDemo extends React.Component {
    state = {
        open: false
    };
    handleClickOpen = () => {
        this.setState({
            open: true
        });
    }
    handleClose = () => {
        this.setState({
            open: false
        });
    }
    render() {
        return  (
                <div>
                    <Button variant="outlined" color="secondary" onClick={this.handleClickOpen}>
                    Open dialog</Button>
                
                    <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={this.state.open} fullWidth={true} maxWidth="lg">
                        <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
                        Modal title</DialogTitle>
                    
                        <DialogContent>
                            <iframe id="iframe" src="http://www.occhidellaguerra.it/" width="100%" height="600" frameborder="0" allowfullscreen>
                            </iframe>
                        
                        </DialogContent>
                    
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                            Save changes</Button>
                        
                        </DialogActions>
                    
                    </Dialog>
                
                </div>
            )
        ;
    }
}
export default CustomizedDialogDemo;
