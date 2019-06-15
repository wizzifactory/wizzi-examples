/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\SampleForm.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Form from '../../common/mui/Form';
import Control from '../../common/mui/Control';
const metaForm = {
    controls: [
        {
            id: "float", 
            type: "select", 
            defaultValue: "right", 
            data: {
                options: [
                    'left', 
                    'right'
                ]
            }
        }, 
        {
            id: "checkbox", 
            type: "checkbox", 
            defaultValue: "false"
        }, 
        {
            id: "color", 
            type: "color", 
            defaultValue: "red"
        }, 
        {
            id: "data", 
            type: "date", 
            defaultValue: "10/3/1957"
        }, 
        {
            id: "datetime", 
            type: "datetime", 
            defaultValue: "10/3/1957"
        }, 
        {
            id: "datetimeLocal", 
            type: "datetime-local", 
            defaultValue: "10/3/1957"
        }, 
        {
            id: "email", 
            type: "email", 
            defaultValue: "sb@gmail.com"
        }, 
        {
            id: "file", 
            type: "file"
        }, 
        {
            id: "hidden", 
            type: "hidden", 
            defaultValue: "30"
        }, 
        {
            id: "month", 
            type: "month", 
            defaultValue: "1"
        }, 
        {
            id: "number", 
            type: "number", 
            defaultValue: "22"
        }, 
        {
            id: "password", 
            type: "password"
        }, 
        {
            id: "radio", 
            type: "radio"
        }, 
        {
            id: "range", 
            type: "range"
        }, 
        {
            id: "search", 
            type: "search"
        }, 
        {
            id: "tel", 
            type: "tel"
        }, 
        {
            id: "text", 
            type: "text"
        }, 
        {
            id: "time", 
            type: "time"
        }, 
        {
            id: "url", 
            type: "url"
        }, 
        {
            id: "week", 
            type: "week"
        }
    ]
};
const styles = theme => (
    {
        styles: {
            border: '1px solid green', 
            padding: '30px'
        }
    });

class SampleForm extends React.Component {
    handleChangeValue = (obj1, obj2) => {
        console.log('handleChangeValue', obj1, obj2);
    }
    render() {
        const {
            classes
        } = this.props;
        return  (
                <div className={classes.styles}>
                    <Typography type="title" color='inherit' noWrap>
                    Sample form with all control types</Typography>
                
                    <div className={classes.margin10}>
                        <Form id="test" caption="Edit controls" meta={metaForm} onChangeValues={this.handleChangeValue}>
                        </Form>
                    
                    </div>
                
                </div>
            )
        ;
    }
}

export default withStyles(styles)(SampleForm)
