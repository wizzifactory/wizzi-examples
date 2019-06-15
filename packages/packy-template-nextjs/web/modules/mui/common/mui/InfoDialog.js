/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\InfoDialog.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
const DialogTitleFunction = (props) => {
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
}

const DialogTitleStyles = (theme) => {
    return {
            root: {
                borderBottom: `1px solid ${theme.palette.divider}`, 
                margin: 0, 
                padding: theme.spacing.unit * 2
            }, 
            closeButton: {
                position: 'absolute', 
                right: theme.spacing.unit, 
                top: theme.spacing.unit, 
                color: theme.palette.grey[500]
            }
        };
};

const DialogTitle = withStyles(DialogTitleStyles)(DialogTitleFunction);
const DialogContentFunction = (props) => {
    return  (
            <MuiDialogContent>
            { props.children }</MuiDialogContent>
        )
    ;
}

const DialogContentStyles = (theme) => {
    return {
            root: {
                margin: 0, 
                padding: theme.spacing.unit * 2
            }
        };
};

const DialogContent = withStyles(DialogContentStyles)(DialogContentFunction);
const DialogActionsFunction = (props) => {
    return  (
            <MuiDialogActions>
            { props.children }</MuiDialogActions>
        )
    ;
}

const DialogActionsStyles = (theme) => {
    return {
            root: {
                borderTop: `1px solid${theme.palette.divider}`, 
                margin: 0, 
                padding: theme.spacing.unit
            }
        };
};

const DialogActions = withStyles(DialogActionsStyles)(DialogActionsFunction);
const styles = (theme) => {
    return {};
};
class InfoDialog extends React.Component {
    render() {
        const {
            open,
            title,
            url,
            onClose
        } = this.props;
        console.log('InfoDialog', url);
        return  (
                <Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open} fullWidth={true} maxWidth="lg">
                    <DialogTitle id="customized-dialog-title" onClose={onClose}>
                    {title}</DialogTitle>
                
                    <DialogContent>
                        <iframe id="dialog-iframe" src={url} width="100%" height="600" frameborder="0" allowfullscreen>
                        </iframe>
                    
                    </DialogContent>
                
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                        ... TODO ...</Button>
                    
                    </DialogActions>
                
                </Dialog>
            )
        ;
    }
}
InfoDialog.propTypes = {};
InfoDialog.defaultProps = {};
export default withStyles(styles)(InfoDialog);
