/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Account\components\AccountDetails\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Button, TextField} from '@material-ui/core';
import Portlet from 'components/widgets/portlet/Portlet';
import PortletHeader from 'components/widgets/portlet/PortletHeader';
import PortletLabel from 'components/widgets/portlet/PortletLabel';
import PortletContent from 'components/widgets/portlet/PortletContent';
import PortletFooter from 'components/widgets/portlet/PortletFooter';
const states = [
    {
        value: 'alabama', 
        label: 'Alabama'
    }, 
    {
        value: 'new-york', 
        label: 'New York'
    }, 
    {
        value: 'san-francisco', 
        label: 'San Francisco'
    }
];
const styles = theme => (
    {
        root: {}, 
        field: {
            margin: theme.spacing.unit * 3
        }, 
        textField: {
            width: '420px', 
            maxWidth: '100%', 
            marginRight: theme.spacing.unit * 3
        }, 
        portletFooter: {
            paddingLeft: theme.spacing.unit * 3, 
            paddingRight: theme.spacing.unit * 3, 
            paddingTop: theme.spacing.unit * 2, 
            paddingBottom: theme.spacing.unit * 2
        }
    });

class AccountDetails extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        firstName: 'John', 
        lastName: 'Doe', 
        email: 'contact@devias.io', 
        phone: '', 
        state: 'Alabama', 
        country: 'USA'
    };
    handleChange = (e) => {
        this.setState({
            state: e.target.value
        });
    }
    render() {
        const {
            classes, 
            className, 
            ...rest
        } = this.props;
        const {
            firstName, 
            lastName, 
            phone, 
            state, 
            country, 
            email
        } = this.state;
        const rootClassName = classNames(classes.root, className);
        return  (
                <Portlet {...rest} className={rootClassName}>
                    <PortletHeader>
                        <PortletLabel subtitle="The information can be edited" title="Profile">
                        </PortletLabel>
                    
                    </PortletHeader>
                
                    <PortletContent noPadding>
                        <form autoComplete="off" noValidate>
                            <div className={classes.field}>
                                <TextField className={classes.textField} helperText="Please specify the first name" label="First name" margin="dense" required value={firstName} variant="outlined">
                                </TextField>
                            
                                <TextField className={classes.textField} label="Last name" margin="dense" required value={lastName} variant="outlined">
                                </TextField>
                            
                            </div>
                        
                            <div className={classes.field}>
                                <TextField className={classes.textField} label="Email Address" margin="dense" required value={email} variant="outlined">
                                </TextField>
                            
                                <TextField className={classes.textField} label="Phone Number" margin="dense" type="number" value={phone} variant="outlined">
                                </TextField>
                            
                            </div>
                        
                            <div className={classes.field}>
                                <TextField className={classes.textField} label="Select State" margin="dense" onChange={this.handleChange} required select SelectProps={{
                                    native: true
                                }} value={state} variant="outlined">
                                {
                                    states.map((option) =>  (
                                            <option key={option.value} value={option.value}>
                                            {option.label}</option>
                                        )
                                    )
                                }</TextField>
                            
                                <TextField className={classes.textField} label="Country" margin="dense" required value={country} variant="outlined">
                                </TextField>
                            
                            </div>
                        
                        </form>
                    
                    </PortletContent>
                
                    <PortletFooter className={classes.portletFooter}>
                        <Button color="primary" variant="contained">
                        Save details</Button>
                    
                    </PortletFooter>
                
                </Portlet>
            )
        ;
    }
}
AccountDetails = compose(withStyles(styles))(AccountDetails)
;
export default AccountDetails;
