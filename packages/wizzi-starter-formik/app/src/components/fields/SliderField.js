/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\fields\SliderField.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Slider from '@material-ui/lab/Slider';
class SliderField extends React.Component {
    handleChange = (event, value) => {
        const {
            fkFieldProp,
            setFieldValue
        } = this.props;
        console.log('Slider.handleChange', event, value, setFieldValue);
        setFieldValue(fkFieldProp.name, value);
    }
    handleBlur = () => {
        const {
            fkFieldProp,
            setFieldTouched
        } = this.props;
        setFieldTouched(fkFieldProp.name);
    }
    render() {
        const {
            fkFieldProp,
            localProps
        } = this.props;
        const {
            disabled, 
            accessForbidden, 
            ...optional
        } = localProps;
        const _disabled = accessForbidden || disabled;
        return  (
                <Slider id={ fkFieldProp.name } onChange={this.handleChange} onDragEnd={this.handleBlur} value={fkFieldProp.value} disabled={_disabled} {...optional}>
                </Slider>
            )
        ;
    }
}
export default SliderField;
