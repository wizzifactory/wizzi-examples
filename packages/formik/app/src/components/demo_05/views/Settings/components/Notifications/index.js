/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Settings\components\Notifications\index.js.ittf
*/
'use strict';
import React, {Component} from 'react';
// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
// Material helpers
import {withStyles} from '@material-ui/core';
// Material components
import {Checkbox, Typography, Button} from '@material-ui/core';
// Shared components
import {Portlet, PortletHeader, PortletLabel, PortletContent, PortletFooter} from 'components';
// Component styles
import styles from './styles';
class Notifications extends Component {
    constructor() {
        super();
    }
    render() {
        const {
            classes, 
            className, 
            ...rest
        } = this.props;
        const rootClassName = classNames(classes.root, className);
        return  (
                <Portlet {...rest} className={rootClassName}>
                    <PortletHeader>
                        <PortletLabel subtitle="Manage the notifications" title="Notifications">
                        </PortletLabel>
                    
                    </PortletHeader>
                
                    <PortletContent noPadding form={className {classes.form} (
                        <div className={classes.group}>
                            <Typography className={classes.groupLabel} variant="h6">
                            \n                Notifications\n              </Typography>
                        
                            <div className={classes.field}>
                                <Checkbox color="primary">
                                </Checkbox>
                            
                                <div>
                                    <Typography variant="body1">
                                    Email</Typography>
                                
                                </div>
                            
                            </div>
                        
                            <div className={classes.field}>
                                <Checkbox color="primary" defaultChecked>
                                </Checkbox>
                            
                                <div>
                                    <Typography variant="body1">
                                    Push Notifications</Typography>
                                
                                    <Typography variant="caption">
                                    \n                    For your mobile or tablet device\n                  </Typography>
                                
                                </div>
                            
                            </div>
                        
                            <div className={classes.field}>
                                <Checkbox color="primary" defaultChecked>
                                </Checkbox>
                            
                                <div>
                                    <Typography variant="body1">
                                    Text Messages</Typography>
                                
                                </div>
                            
                            </div>
                        
                            <div className={classes.field}>
                                <Checkbox color="primary" defaultChecked>
                                </Checkbox>
                            
                                <div>
                                    <Typography variant="body1">
                                    Phone calls</Typography>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    )
                     (
                        <div className={classes.group}>
                            <Typography className={classes.groupLabel} variant="h6">
                            \n                Messages\n              </Typography>
                        
                            <div className={classes.field}>
                                <Checkbox color="primary">
                                </Checkbox>
                            
                                <div>
                                    <Typography variant="body1">
                                    Email</Typography>
                                
                                </div>
                            
                            </div>
                        
                            <div className={classes.field}>
                                <Checkbox color="primary">
                                </Checkbox>
                            
                                <div>
                                    <Typography variant="body1">
                                    Push Notifications</Typography>
                                
                                </div>
                            
                            </div>
                        
                            <div className={classes.field}>
                                <Checkbox color="primary" defaultChecked>
                                </Checkbox>
                            
                                <div>
                                    <Typography variant="body1">
                                    Phone calls</Typography>
                                
                                </div>
                            
                            </div>
                        
                        </div>
                    )
                    }>
                    </PortletContent>
                
                    <PortletFooter className={classes.portletFooter}>
                        <Button color="primary" variant="outlined">
                        \n            Save\n          </Button>
                    
                    </PortletFooter>
                
                </Portlet>
            )
        ;
    }
}
Notifications.propTypes = {
    className: PropTypes.string, 
    classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Notifications);
