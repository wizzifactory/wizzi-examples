/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\components\mui_stop_see_common\Control.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import { Row, Col } from './grid';
import createControlComponent from './utils/createControlComponent';
const styles = theme => (
    {});

class Control extends React.Component {
    handleChange = (value) => {
        const { id, onChangeValue } = this.props;
        if (onChangeValue) {
            console.log('Control.handleChange', id, value);
            onChangeValue(id, value, this.origValue);
        }
    }
    render() {
        const {
            id,
            label,
            type,
            value,
            layout,
            data,
            onChange = this.props
        } = this.props;
        console.log('createControlComponent', createControlComponent);
        const ControlComponent = createControlComponent(type);
        return  (
                <Row>
                    <Col span={4}>
                    {label || id}</Col>
                
                    <Col span={8}>
                        <ControlComponent id={id} value={value} data={data} onChange={this.handleChange}>
                        </ControlComponent>
                    
                    </Col>
                
                </Row>
            )
        ;
    }
}

Control.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired
}

const ControlStyled = withStyles(styleSheet)(Control)
;
export default ControlStyled;
