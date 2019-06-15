/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\Control.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputControl from './formcontrols/InputControl';
import ColorControl from './formcontrols/ColorControl';
import SelectControl from './formcontrols/SelectControl';
import RangeControl from './formcontrols/RangeControl';
import Row from './Row';
import Col from './Col';
const inputTypes = [
    'checkbox', 
    'date', 
    'datetime', 
    'datetime-local', 
    'email', 
    'file', 
    'hidden', 
    'month', 
    'number', 
    'password', 
    'radio', 
    'search', 
    'tel', 
    'text', 
    'time', 
    'url', 
    'week'
];
const inputButtons = [
    'button', 
    'reset', 
    'submit', 
    'image'
];
const styles = (theme) => {
    return {
            formcontrol: {
                padding: '1px 1px'
            }, 
            label: {
                fontSize: '0.7em', 
                fontFamily: 'Verdana, Tahoma, Arial'
            }
        };
};
class Control extends React.Component {
    state = {
        value: undefined, 
        origValue: undefined
    };
    componentDidMount() {
        const {
            id,
            value
        } = this.props;
        // log '--- cssbuilder.Control.did-mount.id,value', id, value
        this.setState({
            origValue: value, 
            value: value
        });
    }
    componentWillReceiveProps(nextProps) {
        const {id, value} = nextProps;
        // log '--- cssbuilder.Control.will-receive.props.id,value', id, value
        if (value !== this.state.value) {
            this.setState({
                origValue: value, 
                value: value
            });
        }
    }
    handleChange = (value) => {
        const { id, onChangeValue } = this.props;
        const { origValue } = this.state;
        this.setState({
            value: value
        });
        if (onChangeValue) {
            // log 'cssbuilder.Control.handleChange', id, value
            onChangeValue(id, value, origValue);
        }
    }
    handleInfoRequest = () => {
        const { label, onInfoRequest, info } = this.props;
        onInfoRequest(info.title, info.url);
    }
    render() {
        const {
            classes
        } = this.props;
        const { id, label, type, layout, data, info } = this.props;
        const { value } = this.state;
        const { onChange } = this.props;
        // log '=== cssbuilder.Control.render', id, value
        const ColLabel = Col(3);
        const ColInfo = info  ? Col(3) : null;
        const ColControl = info ? Col(6) : Col(9);
        return  (
                <Row className={classes.formcontrol}>
                    <ColLabel className={classes.label}>
                    {label || id}</ColLabel>
                
                {
                    info &&  (
                        <ColInfo>
                            <Button size="small" onClick={this.handleInfoRequest}>
                            ?</Button>
                        
                        </ColInfo>
                    )
                    
                }<ColControl>
                    {
                        inputTypes.indexOf(type) > -1 &&  (
                            <InputControl id={id} value={value} data={data} onChange={this.handleChange}>
                            </InputControl>
                        )
                        
                    }{
                        type === 'select' &&  (
                            <SelectControl id={id} value={value} data={data} onChange={this.handleChange}>
                            </SelectControl>
                        )
                        
                    }{
                        type === 'color' &&  (
                            <ColorControl id={id} value={value} data={data} onChange={this.handleChange}>
                            </ColorControl>
                        )
                        
                    }{
                        type === 'range' &&  (
                            <RangeControl id={id} value={value} data={data} onChange={this.handleChange}>
                            </RangeControl>
                        )
                        
                    }</ColControl>
                
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
Control.propTypes = {};
Control.defaultProps = {};
export default withStyles(styles)(Control);
