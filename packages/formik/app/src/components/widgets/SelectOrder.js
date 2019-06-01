/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\widgets\SelectOrder.js.ittf
*/
'use strict';
// Credits: https://github.com/redgeoff/mson-react/tree/master/src/select-order.js
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Icon from './Icon';
const styles = theme => (
    {
        formControl: {}, 
        flip: {
            transform: 'scaleY(-1)'
        }
    });

class SelectOrder extends React.Component {
    handleClick = () => {
        const sortOrder = this.props.sortOrder === 'ASC' ? 'DESC' : 'ASC';
        this.props.onChange({
            sortOrder
        });
    }
    handleChange = (event) => {
        this.props.onChange({
            sortBy: event.target.value
        });
    }
    render() {
        const {
            classes, 
            sortBy, 
            sortOrder, 
            options
        } = this.props;
        const flipped = sortOrder !== 'DESC';
        const items = options.map((option) => {
            return  (
                    <MenuItem value={option.value} key={option.value}>
                    {option.label}</MenuItem>
                )
            ;
        });
        return  (
                <div>
                    <FormControl className={classes.formControl}>
                        <Select value={sortBy} onChange={this.handleChange}>
                            <MenuItem value="">
                                <em>
                                None</em>
                            
                            </MenuItem>
                        
                        {items}</Select>
                    
                    </FormControl>
                
                    <IconButton color="primary" aria-label="sort order" onClick={this.handleClick}>
                        <Icon icon="Sort" className={flipped ? classes.flip : null}>
                        </Icon>
                    
                    </IconButton>
                
                </div>
            )
        ;
    }
}
SelectOrder = withStyles(styles)(SelectOrder)
;
export default SelectOrder;
