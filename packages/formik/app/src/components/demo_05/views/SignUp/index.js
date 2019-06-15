/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\SignUp\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import compose from 'recompose/compose';
import validate from 'validate.js';
import _ from 'underscore';
import {Button, Checkbox, CircularProgress, Grid, IconButton, TextField, Typography} from '@material-ui/core';
import {ArrowBack as ArrowBackIcon} from '@material-ui/icons';
import validators from 'components/demo_05/common/validators';
import schema from './schema';
validate.validators.checked = validators.checked;
const signUp = () => {
    return new Promise((resolve) =>
            setTimeout(() =>
                resolve(true), 1500));
};
const styles = theme => (
    {
        root: {
            backgroundColor: theme.palette.background.default, 
            height: '100vh'
        }, 
        grid: {
            height: '100%'
        }, 
        quoteWrapper: {
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        }, 
        quote: {
            backgroundColor: theme.palette.common.neutral, 
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            backgroundImage: 'url(/images/sign_up_1.jpg)', 
            backgroundSize: 'cover', 
            backgroundRepeat: 'no-repeat', 
            backgroundPosition: 'center'
        }, 
        quoteInner: {
            textAlign: 'center', 
            flexBasis: '600px'
        }, 
        quoteText: {
            color: theme.palette.common.white, 
            fontWeight: 300
        }, 
        name: {
            marginTop: theme.spacing.unit * 3, 
            color: theme.palette.common.white
        }, 
        bio: {
            color: theme.palette.common.white
        }, 
        contentWrapper: {}, 
        content: {
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column'
        }, 
        contentHeader: {
            display: 'flex', 
            alignItems: 'center', 
            paddingTop: theme.spacing.unit * 5, 
            paddingBototm: theme.spacing.unit * 2, 
            paddingLeft: theme.spacing.unit * 2, 
            paddingRight: theme.spacing.unit * 2
        }, 
        backButton: {}, 
        logoImage: {
            marginLeft: theme.spacing.unit * 4
        }, 
        contentBody: {
            flexGrow: 1, 
            display: 'flex', 
            alignItems: 'center', 
            [theme.breakpoints.down('md')]: {
                justifyContent: 'center'
            }
        }, 
        form: {
            paddingLeft: '100px', 
            paddingRight: '100px', 
            paddingBottom: '125px', 
            flexBasis: '700px', 
            [theme.breakpoints.down('sm')]: {
                paddingLeft: theme.spacing.unit * 2, 
                paddingRight: theme.spacing.unit * 2
            }
        }, 
        title: {
            marginTop: theme.spacing.unit * 3
        }, 
        subtitle: {
            color: theme.palette.text.secondary, 
            marginTop: theme.spacing.unit * 0.5
        }, 
        fields: {
            marginTop: theme.spacing.unit * 5
        }, 
        textField: {
            width: '100%', 
            '& + & ': {
                marginTop: theme.spacing.unit * 2
            }
        }, 
        policy: {
            display: 'flex', 
            alignItems: 'center'
        }, 
        policyCheckbox: {
            marginLeft: '-14px'
        }, 
        policyText: {
            display: 'inline', 
            color: theme.palette.text.secondary
        }, 
        policyUrl: {
            color: theme.palette.text.primary, 
            '&:hover': {
                cursor: 'pointer', 
                color: theme.palette.primary.main
            }
        }, 
        progress: {
            display: 'block', 
            marginTop: theme.spacing.unit * 2, 
            marginLeft: 'auto', 
            marginRight: 'auto'
        }, 
        signUpButton: {
            marginTop: theme.spacing.unit * 2, 
            width: '100%'
        }, 
        signIn: {
            marginTop: theme.spacing.unit * 2, 
            color: theme.palette.text.secondary
        }, 
        signInUrl: {
            color: theme.palette.primary.main, 
            fontWeight: 'bold', 
            '&:hover': {
                color: theme.palette.primary.main
            }
        }, 
        fieldError: {
            color: theme.palette.danger.main, 
            marginBottom: theme.spacing.unit * 2, 
            marginTop: theme.spacing.unit
        }, 
        submitError: {
            color: theme.palette.danger.main, 
            alignText: 'center', 
            marginBottom: theme.spacing.unit, 
            marginTop: theme.spacing.unit * 2
        }
    });

class SignUp extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        values: {
            firstName: '', 
            lastName: '', 
            email: '', 
            password: '', 
            policy: false
        }, 
        touched: {
            firstName: false, 
            lastName: false, 
            email: false, 
            password: false, 
            policy: null
        }, 
        errors: {
            firstName: null, 
            lastName: null, 
            email: null, 
            password: null, 
            policy: null
        }, 
        isValid: false, 
        isLoading: false, 
        submitError: null
    };
    handleBack = () => {
        const {
            history
        } = this.props;
        history.goBack();
    }
    validateForm = () => {
        _.debounce(() => {
            const {
                values
            } = this.state;
            const newState = {
                ...this.state
            };
            const errors = validate(values, schema);
            newState.errors = errors || {};
            newState.isValid = errors ? false : true;
            this.setState(newState);
        }, 300);
    }
    handleFieldChange = (field, value) => {
        const newState = {
            ...this.state
        };
        newState.submitError = null;
        newState.touched[field] = true;
        newState.values[field] = value;
        this.setState(newState, this.validateForm);
    }
    handleSignUp = async () => {
        try {
            const {
                history
            } = this.props;
            const {
                values
            } = this.state;
            this.setState({
                isLoading: true
            });
            await signUp({
                    firstName: values.firstName, 
                    lastName: values.lastName, 
                    email: values.email, 
                    password: values.password
                });
            history.push('/sign-in');
        } 
        catch (error) {
            this.setState({
                isLoading: false, 
                serviceError: error
            });
        } 
    }
    render() {
        const {
            classes
        } = this.props;
        const {
            values, 
            touched, 
            errors, 
            isValid, 
            submitError, 
            isLoading
        } = this.state;
        const showFirstNameError = touched.firstName && errors.firstName ? errors.firstName[0] : false;
        const showLastNameError = touched.lastName && errors.lastName ? errors.lastName[0] : false;
        const showEmailError = touched.email && errors.email ? errors.email[0] : false;
        const showPasswordError = touched.password && errors.password ? errors.password[0] : false;
        const showPolicyError = touched.policy && errors.policy ? errors.policy[0] : false;
        return  (
                <div className={classes.root}>
                    <Grid className={classes.grid} container>
                        <Grid className={classes.quoteWrapper} item lg={5}>
                            <div className={classes.quote}>
                                <div className={classes.quoteInner}>
                                    <Typography className={classes.quoteText} variant="h1">
                                    Hella narwhal Cosby sweater McSweeney's, salvia kitsch beforethey sold out High Life.</Typography>
                                
                                    <div className={classes.person}>
                                        <Typography className={classes.name} variant="body1">
                                        Takamaru Ayako</Typography>
                                    
                                        <Typography className={classes.bio} variant="body2">
                                        Manager at inVision</Typography>
                                    
                                    </div>
                                
                                </div>
                            
                            </div>
                        
                        </Grid>
                    
                        <Grid className={classes.content} item lg={7} xs={12}>
                            <div className={classes.content}>
                                <div className={classes.contentHeader}>
                                    <IconButton className={classes.backButton} onClick={this.handleBack}>
                                        <ArrowBackIcon>
                                        </ArrowBackIcon>
                                    
                                    </IconButton>
                                
                                </div>
                            
                                <div className={classes.contentBody}>
                                    <form className={classes.form}>
                                        <Typography className={classes.title} variant="h2">
                                        Create new account</Typography>
                                    
                                        <Typography className={classes.subtitle} variant="body1">
                                        Use your work email to create new account... it's free.</Typography>
                                    
                                        <div className={classes.fields}>
                                            <TextField className={classes.textField} label="First name" name="firstName" onChange={(event) =>
                                                this.handleFieldChange('firstName', event.target.value)} value={values.firstName} variant="outlined">
                                            </TextField>
                                        
                                        {
                                            showFirstNameError &&  (
                                                <Typography className={classes.fieldError} variant="body2">
                                                {errors.firstName[0]}</Typography>
                                            )
                                            
                                        }<TextField className={classes.textField} label="Last name" onChange={(event) =>
                                                this.handleFieldChange('lastName', event.target.value)} value={values.lastName} variant="outlined">
                                            </TextField>
                                        
                                        {
                                            showLastNameError &&  (
                                                <Typography className={classes.fieldError} variant="body2">
                                                {errors.lastName[0]}</Typography>
                                            )
                                            
                                        }<TextField className={classes.textField} label="Email address" name="email" onChange={(event) =>
                                                this.handleFieldChange('email', event.target.value)} value={values.email} variant="outlined">
                                            </TextField>
                                        
                                        {
                                            showEmailError &&  (
                                                <Typography className={classes.fieldError} variant="body2">
                                                {errors.email[0]}</Typography>
                                            )
                                            
                                        }<TextField className={classes.textField} label="Password" onChange={(event) =>
                                                this.handleFieldChange('password', event.target.value)} type="password" value={values.password} variant="outlined">
                                            </TextField>
                                        
                                        {
                                            showPasswordError &&  (
                                                <Typography className={classes.fieldError} variant="body2">
                                                {errors.password[0]}</Typography>
                                            )
                                            
                                        }<div className={classes.policy}>
                                                <Checkbox checked={values.policy} className={classes.policyCheckbox} color="primary" name="policy" onChange={() =>
                                                    this.handleFieldChange('policy', !values.policy)}>
                                                </Checkbox>
                                            
                                                <Typography className={classes.policyText} variant="body1">
                                                I have read the<Link className={classes.policyUrl} to="#">
                                                    Terms and Conditions</Link>
                                                
                                                .</Typography>
                                            
                                            </div>
                                        
                                        {
                                            showPolicyError &&  (
                                                <Typography className={classes.fieldError} variant="body2">
                                                {errors.policy[0]}</Typography>
                                            )
                                            
                                        }</div>
                                    
                                    {
                                        submitError &&  (
                                            <Typography className={classes.submitError} variant="body2">
                                            {submitError}</Typography>
                                        )
                                        
                                    }{
                                        isLoading ?  (
                                                <CircularProgress className={classes.progress}>
                                                </CircularProgress>
                                            )
                                         :  (
                                                <Button className={classes.signUpButton} color="primary" disabled={!isValid} onClick={this.handleSignUp} size="large" variant="contained">
                                                Sign up now</Button>
                                            )
                                        
                                    }<Typography className={classes.signIn} variant="body1">
                                        Have an account?{' '}<Link className={classes.signInUrl} to="/sign-in">
                                            Sign In</Link>
                                        
                                        </Typography>
                                    
                                    </form>
                                
                                </div>
                            
                            </div>
                        
                        </Grid>
                    
                    </Grid>
                
                </div>
            )
        ;
    }
}
SignUp = compose(withRouter, withStyles(styles))(SignUp)
;
export default SignUp;
