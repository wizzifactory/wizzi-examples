/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\SignIn\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Link, withRouter} from 'react-router-dom';
import validate from 'validate.js';
import _ from 'underscore';
import {Grid, Button, IconButton, CircularProgress, TextField, Typography} from '@material-ui/core';
import {ArrowBack as ArrowBackIcon} from '@material-ui/icons';
import FacebookIcon from 'components/demo_05/icons/Facebook';
import GoogleIcon from 'components/demo_05/icons/Google';
import schema from './schema';
const signIn = () => {
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
        facebookButton: {
            marginTop: theme.spacing.unit * 3, 
            width: '100%'
        }, 
        facebookIcon: {
            marginRight: theme.spacing.unit
        }, 
        googleButton: {
            marginTop: theme.spacing.unit * 2, 
            width: '100%'
        }, 
        googleIcon: {
            marginRight: theme.spacing.unit
        }, 
        sugestion: {
            color: theme.palette.text.secondary, 
            marginTop: theme.spacing.unit * 2, 
            textAlign: 'center'
        }, 
        fields: {
            marginTop: theme.spacing.unit * 2
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
        signInButton: {
            marginTop: theme.spacing.unit * 2, 
            width: '100%'
        }, 
        signUp: {
            marginTop: theme.spacing.unit * 2, 
            color: theme.palette.text.secondary
        }, 
        signUpUrl: {
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

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        values: {
            email: '', 
            password: ''
        }, 
        touched: {
            email: false, 
            password: false
        }, 
        errors: {
            email: null, 
            password: null
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
    handleSignIn = async () => {
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
            await signIn(values.email, values.password);
            localStorage.setItem('isAuthenticated', true);
            history.push('/dashboard');
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
        const showEmailError = touched.email && errors.email;
        const showPasswordError = touched.password && errors.password;
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
                                        Sign in</Typography>
                                    
                                        <Typography className={classes.subtitle} variant="body1">
                                        Sign in with social media</Typography>
                                    
                                        <Button className={classes.facebookButton} color="primary" onClick={this.handleSignIn} size="large" variant="contained">
                                            <FacebookIcon className={classes.facebookIcon}>
                                            </FacebookIcon>
                                        
                                        Login with Facebook</Button>
                                    
                                        <Button className={classes.googleButton} onClick={this.handleSignIn} size="large" variant="contained">
                                            <GoogleIcon className={classes.googleIcon}>
                                            </GoogleIcon>
                                        
                                        Login with Google</Button>
                                    
                                        <Typography className={classes.sugestion} variant="body1">
                                        or login with email address</Typography>
                                    
                                        <div className={classes.fields}>
                                            <TextField className={classes.textField} label="Email address" name="email" onChange={(event) =>
                                                this.handleFieldChange('email', event.target.value)} type="text" value={values.email} variant="outlined">
                                            </TextField>
                                        
                                        {
                                            showEmailError &&  (
                                                <Typography className={classes.fieldError} variant="body2">
                                                {errors.email[0]}</Typography>
                                            )
                                            
                                        }<TextField className={classes.textField} label="Password" name="password" onChange={(event) =>
                                                this.handleFieldChange('password', event.target.value)} type="password" value={values.password} variant="outlined">
                                            </TextField>
                                        
                                        {
                                            showPasswordError &&  (
                                                <Typography className={classes.fieldError} variant="body2">
                                                {errors.password[0]}</Typography>
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
                                                <Button className={classes.signInButton} color="primary" disabled={!isValid} onClick={this.handleSignIn} size="large" variant="contained">
                                                Sign in now</Button>
                                            )
                                        
                                    }<Typography className={classes.signUp} variant="body1">
                                        Don't have an account?{' '}<Link className={classes.signUpUrl} to="/sign-up">
                                            Sign up</Link>
                                        
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
SignIn = compose(withStyles(styles))(SignIn)
;
export default SignIn;
