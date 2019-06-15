/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\renderField.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const renderField = (props) => {
    const {
        input,
        label,
        type,
        meta,
        children
    } = props;
    const { touched, error, warning, asyncValidating } = meta;
    if (type == 'select') {
        var options, emptyOption;
        console.log('select.props', props);
        if (props.options) {
            options = props.options.map((val) => {
                return  (
                        <option value={val} key={val}>
                        {val}</option>
                    )
                ;
            });
            if (props.emptyOption) {
                emptyOption =  (
                    <option value={''}>
                    {props.emptyOption}</option>
                )
                ;
            }
        }
        else {
            options = children;
        }
        return  (
                <div>
                    <label htmlFor={input.name}>
                    {label}</label>
                
                    <div className={asyncValidating ? 'async-validating' : ''}>
                        <select {...input}>
                        {emptyOption}{options}</select>
                    
                    {
                        touched && error &&  (
                            <span>
                            {error}
                            </span>
                        )
                        
                    }</div>
                
                </div>
            )
        ;
    }
    if (type == 'textarea') {
        return  (
                <div>
                    <label htmlFor={input.name}>
                    {label}</label>
                
                    <div className={asyncValidating ? 'async-validating' : ''}>
                        <textarea {...input}>
                        {children}</textarea>
                    
                    {
                        touched && error &&  (
                            <span>
                            {error}
                            </span>
                        )
                        
                    }</div>
                
                </div>
            )
        ;
    }
    else if (type == 'radio') {
        return  (
                <label>
                    <input {...input} type="radio">
                    </input>
                
                {' ' + label}</label>
            )
        ;
    }
    else {
        return  (
                <div>
                    <label>
                    {label}
                    </label>
                
                    <div className={asyncValidating ? 'async-validating' : ''}>
                        <input {...input} placeholder={label} type={type}>
                        </input>
                    
                    {
                        touched && error &&  (
                            <span>
                            {error}
                            </span>
                        )
                        
                    }</div>
                
                </div>
            )
        ;
    }
}

renderField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    meta: PropTypes.object,
    children: PropTypes.array
}

export default renderField;
