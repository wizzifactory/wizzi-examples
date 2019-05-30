/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\ReduxForm.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => (
    {});

class ReduxForm extends React.Component {
    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting
        } = this.props;
        return  (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                        First Name</label>
                    
                        <div>
                            <Field name="firstName" component="input" type="text" placeholder="First Name">
                            </Field>
                        
                        </div>
                    
                    </div>
                
                    <div>
                        <label>
                        Last Name</label>
                    
                        <div>
                            <Field name="lastName" component="input" type="text" placeholder="Last Name">
                            </Field>
                        
                        </div>
                    
                    </div>
                
                    <div>
                        <label>
                        Email</label>
                    
                        <div>
                            <Field name="email" component="input" type="email" placeholder="Email">
                            </Field>
                        
                        </div>
                    
                    </div>
                
                    <div>
                        <label>
                        Sex</label>
                    
                        <div>
                            <label>
                                <Field name="sex" component="input" type="radio" value="male">
                                </Field>
                            
                            {' '}Male</label>
                        
                            <label>
                                <Field name="sex" component="input" type="radio" value="female">
                                </Field>
                            
                            {' '}Female</label>
                        
                        </div>
                    
                    </div>
                
                    <div>
                        <label>
                        Favorite Color</label>
                    
                        <div>
                            <Field name="favoriteColor" component="select">
                                <option>
                                </option>
                            
                                <option value="ff0000">
                                Red</option>
                            
                                <option value="00ff00">
                                Green</option>
                            
                                <option value="0000ff">
                                Blue</option>
                            
                            </Field>
                        
                        </div>
                    
                    </div>
                
                    <div>
                        <label htmlFor="employed">
                        Employed</label>
                    
                        <div>
                            <Field name="employed" id="employed" component="input" type="checkbox">
                            </Field>
                        
                        </div>
                    
                    </div>
                
                    <div>
                        <label>
                        Notes</label>
                    
                        <div>
                            <Field name="notes" component="textarea">
                            </Field>
                        
                        </div>
                    
                    </div>
                
                    <div>
                        <button type="submit" disabled={pristine || submitting}>
                        Submit</button>
                    
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values</button>
                    
                    </div>
                
                </form>
            )
        ;
    }
}
ReduxForm = withStyles(styles)(ReduxForm)
;
export default ReduxForm;
