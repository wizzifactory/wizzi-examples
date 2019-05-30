/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\js\components\presentational\Input.js.ittf
*/
'use strict';
import React from "react";
import PropTypes from "prop-types";
const Input = ({label, text, type, id, value, handleChange}) =>  (
        <div className="form-group">
            <label htmlFor={label}>
            {text}</label>
        
            <input type={type} className="form-control" id={id} value={value} onChange={handleChange} required>
            </input>
        
        </div>
    )
;
Input.propTypes = {
    label: PropTypes.string.isRequired, 
    text: PropTypes.string.isRequired, 
    type: PropTypes.string.isRequired, 
    id: PropTypes.string.isRequired, 
    value: PropTypes.string.isRequired, 
    handleChange: PropTypes.func.isRequired
};
export default Input;
