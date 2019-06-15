/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\formcontrols\SelectControl.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputBase from '@material-ui/core/InputBase';
function normalizeOptions(options, value) {
    // log 'normalizeOptions', options, value
    if (!options) {
        return [];
    }
    function getValue(o) {
        if (o.val) {
            return o.val;
        }
        else if (o.id) {
            return o.id;
        }
        else if (o.key) {
            return o.key;
        }
        return o.value;
    }
    function getText(o) {
        if (o.label) {
            return o.label;
        }
        else if (o.name) {
            return o.name;
        }
        else if (o.key) {
            return o.key;
        }
        return o.text;
    }
    var j = 0;
    return options.map((o, i) => {
            if (o != null && typeof o === 'object' && Array.isArray(o) === false) {
                return {
                        key: 'k' + (++j), 
                        value: getValue(o), 
                        text: getText(o), 
                        selected: getValue(o) === value
                    };
            }
            else {
                return {
                        key: 'k' + (++j), 
                        value: o, 
                        text: o, 
                        selected: o === value
                    };
            }
        });
}
const styles = (theme) => {
    return {
            root: {
                fontSize: '0.7em'
            }, 
            input: {
                padding: '2px 32px 1px 0'
            }, 
            menuitem: {
                padding: '1px 10px', 
                fontSize: '0.7em'
            }
        };
};
class SelectControl extends React.Component {
    state = {
        value: undefined, 
        optionTags: []
    };
    componentDidMount() {
        const {
            id,
            value,
            data
        } = this.props;
        const { options } = data;
        // log 'cssbuilder.SelectControl.did-mount.id,value', id, value
        if (!(options && options.length)) {
            throw new Error('Missing options array on SelectControl ' + id);
        }
        this.setState({
            value: value
        });
    }
    componentWillReceiveProps(nextProps) {
        const {id, value} = nextProps;
        // log '--- cssbuilder.SelectControl.will-receive.props.id,value', id, value
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
            // log 'cssbuilder.SelectControl.onChange', id, value
            onChange(value);
        }
    }
    render() {
        const {
            classes,
            id,
            data
        } = this.props;
        // log '++++ cssbuilder.SelectControl.render.id,value', id, this.state.value
        const { value } = this.state;
        const { options } = data;
        const nroptions = normalizeOptions(options, value);
        const optionTags = nroptions.map((o, i) => {
            return  (
                    <MenuItem value={o.value} key={o.value} className={classes.menuitem}>
                    {o.text}</MenuItem>
                )
            ;
        });
        return  (
                <MuiSelect id={id} value={value || ''} onChange={this.handleChange} classes={{
                    root: classes.root, 
                    select: classes.input
                }}>
                {optionTags}</MuiSelect>
            )
        ;
    }
}
SelectControl.propTypes = {};
SelectControl.defaultProps = {};
export default withStyles(styles)(SelectControl);
