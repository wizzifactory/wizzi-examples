/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Settings\components\Password\index.js.ittf
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
const styles = theme => (
    {
        root: {}, 
        form: {}, 
        textField: {
            width: '100%', 
            marginBottom: theme.spacing.unit * 2
        }, 
        portletFooter: {
            paddingLeft: theme.spacing.unit * 3, 
            paddingRight: theme.spacing.unit * 3, 
            paddingTop: theme.spacing.unit * 2, 
            paddingBottom: theme.spacing.unit * 2
        }
    });

class Password extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        values: {
            password: '', 
            confirm: ''
        }
    };
    handleFieldChange = (field, value) => {
        const newState = {
            ...this.state
        };
        newState.values[field] = value;
        this.setState(newState, this.validateForm);
    }
    render() {
        const {
            classes, 
            className, 
            ...rest
        } = this.props;
        const {
            values
        } = this.state;
        const rootClassName = classNames(classes.root, className);
        return  (
                <Portlet {...rest} className={rootClassName}>
                    <PortletHeader>
                        <PortletLabel subtitle="Update password" title="Password">
                        </PortletLabel>
                    
                    </PortletHeader>
                
                    <PortletContent>
                        <form className={classes.form}>
                            <TextField className={classes.textField} label="Password" name="password" onChange={(event) =>
                                this.handleFieldChange('password', event.target.value)} type="password" value={values.password} variant="outlined">
                            </TextField>
                        
                            <TextField className={classes.textField} label="Confirm password" name="confirm" onChange={(event) =>
                                this.handleFieldChange('confirm', event.target.value)} type="password" value={values.confirm} variant="outlined">
                            </TextField>
                        
                        </form>
                    
                    </PortletContent>
                
                    <PortletFooter className={classes.portletFooter}>
                        <Button color="primary" variant="outlined">
                        Update</Button>
                    
                    </PortletFooter>
                
                </Portlet>
            )
        ;
    }
}
Password = compose(withStyles(styles))(Password)
;
export default Password;
