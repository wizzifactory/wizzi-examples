/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Account\components\AccountProfile\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Avatar, Typography, Button, LinearProgress} from '@material-ui/core';
import Portlet from 'components/widgets/portlet/Portlet';
import PortletHeader from 'components/widgets/portlet/PortletHeader';
import PortletLabel from 'components/widgets/portlet/PortletLabel';
import PortletContent from 'components/widgets/portlet/PortletContent';
import PortletFooter from 'components/widgets/portlet/PortletFooter';
const styles = theme => (
    {
        root: {}, 
        details: {
            display: 'flex'
        }, 
        info: {}, 
        locationText: {
            marginTop: theme.spacing.unit, 
            color: theme.palette.text.secondary
        }, 
        dateText: {
            color: theme.palette.text.secondary
        }, 
        avatar: {
            marginLeft: 'auto', 
            height: '110px', 
            width: '110px', 
            flexShrink: 0, 
            flexGrow: 0
        }, 
        progressWrapper: {
            marginTop: theme.spacing.unit * 2
        }, 
        uploadButton: {
            marginRight: theme.spacing.unit * 2
        }
    });

class AccountProfile extends React.Component {
    constructor(props) {
        super(props);
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
                    <PortletContent>
                        <div className={classes.details}>
                            <div className={classes.info}>
                                <Typography variant="h2">
                                John Doe</Typography>
                            
                                <Typography className={classes.locationText} variant="body1">
                                Rm. Valcea, Romania</Typography>
                            
                                <Typography className={classes.dateText} variant="body1">
                                4:32PM (GMT-4)</Typography>
                            
                            </div>
                        
                            <Avatar className={classes.avatar} src="/images/avatars/avatar_1.png">
                            </Avatar>
                        
                        </div>
                    
                        <div className={classes.progressWrapper}>
                            <Typography variant="body1">
                            Profile Completeness: 70%</Typography>
                        
                            <LinearProgress value={70} variant="determinate">
                            </LinearProgress>
                        
                        </div>
                    
                    </PortletContent>
                
                    <PortletFooter>
                        <Button className={classes.uploadButton} color="primary" variant="text">
                        Upload picture</Button>
                    
                        <Button variant="text">
                        Remove picture</Button>
                    
                    </PortletFooter>
                
                </Portlet>
            )
        ;
    }
}
AccountProfile = compose(withStyles(styles))(AccountProfile)
;
export default AccountProfile;
