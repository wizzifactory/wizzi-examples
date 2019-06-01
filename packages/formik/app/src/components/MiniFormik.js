/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\MiniFormik.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
class MiniFormik extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        values: this.props.initialValues, 
        touched: {
            
        }, 
        errors: {
            
        }
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.values);
    }
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        event.persist();
        this.setState((prevState) => {
            return {
                    values: {
                        ...prevState.values, 
                        [name]: value
                    }
                };
        });
    }
    handleBlur = (event) => {
        const target = event.target;
        const name = target.name;
        event.persist();
        this.setState((prevState) => {
            return {
                    touched: {
                        ...prevState.touched, 
                        [name]: true
                    }
                };
        });
    }
    render() {
        return this.props.children({
                ...this.state, 
                handleChange: this.handleChange, 
                handleBlur: this.handleBlur, 
                handleSubmit: this.handleSubmit
            });
    }
}
export default MiniFormik;
