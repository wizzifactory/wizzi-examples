/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\Row.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';

const Row = (props) => {
    const { children } = props;
    const getStyle = (span) => {
        return {
                marginLeft: '5px', 
                marginRight: '5px'
            };
    };
    return  (
            <div style={getStyle()}>
                <div style={{
                    display: "table", 
                    content: " "
                }}>
                </div>
            
            {children}<div style={{
                    clear: "both"
                }}>
                </div>
            
            </div>
        )
    ;
}

const styles = (theme) => {
    return {};
};

export default withStyles(styles)(Row);
