/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\dyn_styles.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {withTheme} from '@material-ui/core/styles';
function WithTheme(props) {
    const {
        theme
    } = props;
    const primaryText = theme.palette.text.primary;
    const primaryColor = theme.palette.primary.main;
    const styles = {
        primaryText: {
            backgroundColor: theme.palette.background.default, 
            padding: `${theme.spacing.unit}pxtheme.spacing.unit * 2px`, 
            color: primaryText
        }, 
        primaryColor: {
            backgroundColor: primaryColor, 
            padding: `${theme.spacing.unit}pxtheme.spacing.unit * 2px`, 
            color: theme.palette.common.white
        }
    };
    return  (
            <div style={{
                width: 300
            }}>
                <Typography style={styles.primaryColor}>
                {
                    `Primary color${primaryColor}`
                }</Typography>
            
                <Typography style={styles.primaryText}>
                {
                    `Primary text${primaryText}`
                }</Typography>
            
            </div>
        )
    ;
}
WithTheme.propTypes = {
    theme: PropTypes.object.isRequired
};
export default withTheme()(WithTheme)
