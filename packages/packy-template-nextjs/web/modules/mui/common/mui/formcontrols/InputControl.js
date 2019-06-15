/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\formcontrols\InputControl.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const styles = (theme) => {
    return {
            textField: {
                margin: 0, 
                padding: 0
            }, 
            input: {
                color: 'white', 
                padding: '2px 1px'
            }
        };
};
class InputControl extends React.Component {
    state = {
        value: undefined
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
        if (value !== this.state.value) {
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
            console.log('cssbuilder.inputcontrol.onChange', id, value);
            onChange(value);
        }
    }
    render() {
        const {
            classes,
            id,
            type
        } = this.props;
        return  (
                <TextField id={id} type={type} value={this.state.value} onChange={this.handleChange} className={classes.textField} margin="dense" InputProps={{
                    classes: {
                        input: classes.input
                    }
                }}>
                </TextField>
            )
        ;
    }
}
InputControl.propTypes = {};
InputControl.defaultProps = {};
export default withStyles(styles)(InputControl);
