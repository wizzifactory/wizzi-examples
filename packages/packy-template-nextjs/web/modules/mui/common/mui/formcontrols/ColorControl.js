/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\formcontrols\ColorControl.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
const styles = (theme) => {
    return {};
};
class ColorControl extends React.Component {
    state = {
        value: ''
    };
    componentDidMount() {
        const {
            value
        } = this.props;
        this.setState({
            value: value
        });
    }
    componentWillReceiveProps(nextProps) {
        const {value} = nextProps;
        // log 'ColorControl.will-receive-props-1.id.value', nextProps.id, nextProps.value
        if (value !== this.state.value) {
            // log 'ColorControl.will-receive-props-2.id.value', nextProps.id, nextProps.value
            this.setState({
                value: value
            });
        }
    }
    handleChange = (e) => {
        const {
            id,
            onChange
        } = this.props;
        const value = e.target.value;
        this.setState({
            value: value
        });
        if (onChange) {
            console.log('cssbuilder.ColorControl.onChange', id, value);
            onChange(value);
        }
    }
    render() {
        const {
            id
        } = this.props;
        return  (
                <input id={id} type="color" value={this.state.value || '#000000'} onChange={this.handleChange}>
                </input>
            )
        ;
    }
}
ColorControl.propTypes = {};
ColorControl.defaultProps = {};
export default withStyles(styles)(ColorControl);
