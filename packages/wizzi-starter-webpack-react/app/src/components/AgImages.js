/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\AgImages.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {Field, FieldArray} from 'redux-form';
const renderField = (props) => {
    const {
        input, 
        label, 
        type, 
        meta: {
            touched, 
            error
        }
    } = props;
    return  (
            <div>
                <label>
                {label}</label>
            
                <div>
                    <input {...input} type={type} placeholder={label}>
                    </input>
                
                {
                    touched && error &&  (
                        <span>
                        {error}</span>
                    )
                    
                }</div>
            
            </div>
        )
    ;
};
const Header = (props) => {
    const {
        fields, 
        meta: {
            error, 
            submitFailed
        }
    } = props;
    return  (
            <li>
                <button type="button" onClick={() =>
                    fields.push({})}>
                Add Member</button>
            
            {
                submitFailed && error &&  (
                    <span>
                    {error}</span>
                )
                
            }</li>
        )
    ;
};
const renderMembers = (props) => {
    const {
        fields
    } = props;
    return  (
            <ul>
                <Header {...props}>
                </Header>
            
            {
                fields.map((member, index) =>  (
                        <li key={index}>
                            <button type="button" title="Remove" onClick={() =>
                                fields.remove(index)}>
                            </button>
                        
                            <h4>
                            Member #{index + 1}</h4>
                        
                            <Field name={`${member}.firstName`} type="text" component={renderField} label="First Name">
                            </Field>
                        
                            <Field name={`${member}.lastName`} type="text" component={renderField} label="Last Name">
                            </Field>
                        
                        </li>
                    )
                )
            }</ul>
        )
    ;
};
const styles = theme => (
    {});

class AgImages extends React.Component {
    render() {
        const {
            handleSubmit,
            onSubmit,
            pristine,
            reset,
            submitting,
            classes
        } = this.props;
        return  (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Field name="clubName" type="text" component={renderField} label="Club Name">
                    </Field>
                
                    <FieldArray name="members" component={renderMembers}>
                    </FieldArray>
                
                    <div>
                        <button type="submit" disabled={submitting}>
                        Submit</button>
                    
                        <button type="button" disabled={pristine || submitting} onClick={reset}>
                        Clear Values</button>
                    
                    </div>
                
                </form>
            )
        ;
    }
}
AgImages = withStyles(styles)(AgImages)
;
export default AgImages;
