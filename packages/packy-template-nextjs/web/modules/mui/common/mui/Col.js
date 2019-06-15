/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\Col.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
export default function create(span) {
        const styles = (theme) => {
            return {
                    root: {
                        boxSizing: "border-box", 
                        position: "relative", 
                        width: (span / 12 * 100) + '%', 
                        float: "left", 
                        paddingLeft: '4px', 
                        paddingRight: '4px', 
                        minHeight: 1
                    }
                };
        };
        const Col = (props) => {
            const { classes, className, children } = props;
            return  (
                    <div className={classNames(classes.root, className)}>
                    {children}</div>
                )
            ;
        }
        return withStyles(styles)(Col);
    }
