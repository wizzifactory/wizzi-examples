/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\components\mui_stop_see_common\Form.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import buildFormControls from './utils/buildFormControls';
const styles = theme => (
    {});

class Form extends React.Component {
    state = {
        values: {}
    };
    updateValue(controlId, value) {
        const values = this.state.values;
        if (values[controlId] === value) {
            return null;
        }
        values[controlId] = value;
        this.setState({
            ...this.state, 
            values: values
        });
        return values;
    }
    componentWillMount() {
        const {
            meta
        } = this.props;
        var result = buildFormControls(meta, this.handleOnChange);
        this.setState({
            ...this.state, 
            values: result.originalValues, 
            controls: result.controls
        });
    }
    handleOnChange = (controlId, value, origValue) => {
        var newValues = this.updateValue(controlId, value);
        if (newValues) {
            const { id, onChangeValues } = this.props;
            if (onChangeValues) {
                onChangeValues(id, newValues);
            }
        }
    }
    render() {
        const {
            id,
            type,
            caption,
            values,
            layout,
            meta
        } = this.props;
        const {controls} = this.state;
        return  (
                <div className="form-vertical">
                    <h3>
                    {caption}
                    </h3>
                
                {controls}</div>
            )
        ;
    }
}

Form.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    caption: PropTypes.string,
    values: PropTypes.string,
    layout: PropTypes.string,
    meta: PropTypes.string,
    onChangeValues: PropTypes.func
}

const FormStyled = withStyles(styleSheet)(Form)
;
export default FormStyled;
