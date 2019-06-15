/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\demo_05\views\Typography\index.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core';
import compose from 'recompose/compose';
import {Grid, Typography as TypographyMui} from '@material-ui/core';
import {DefaultLayout} from 'components/demo_05/layouts';
const variants = {
    h1: 'Nisi euismod ante senectus consequat phasellus ut', 
    h2: 'Nisi euismod ante senectus consequat phasellus ut', 
    h3: 'Nisi euismod ante senectus consequat phasellus ut', 
    h4: 'Nisi euismod ante senectus consequat phasellus ut', 
    h5: 'Nisi euismod ante senectus consequat phasellus ut', 
    h6: 'Nisi euismod ante senectus consequat phasellus ut', 
    subtitle1: 'Leo varius justo aptent arcu urna felis pede nisl', 
    subtitle2: 'Leo varius justo aptent arcu urna felis pede nisl', 
    body1: 'Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.Laoreet velit a fames commodo tristique hendrerit sociosqu rhoncus vel sapien penatibus facilisis faucibus ad. Mus purus vehicula imperdiet tempor lectus, feugiat Sapien erat viverra netus potenti mattis purus turpis. Interdum curabitur potenti tristique. Porta velit dignissim tristique ultrices primis.', 
    body2: 'Justo proin curabitur dictumst semper auctor, consequat tempor, nostra aenean neque turpis nunc. Leo. Sapien aliquet facilisi turpis, elit facilisi praesent porta metus leo. Dignissim amet dis nec ac integer inceptos erat dis Turpis sodales ad torquent. Dolor, erat convallis.', 
    caption: 'Accumsan leo pretium conubia ullamcorper.', 
    button: 'Vivamus ultrices rutrum fames dictumst'
};
const styles = theme => (
    {
        root: {
            padding: theme.spacing.unit * 4
        }
    });

class Settings extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            classes
        } = this.props;
        return  (
                <DefaultLayout title="Typography">
                    <div className={classes.root}>
                        <Grid container spacing={4}>
                        {
                            Object.keys(variants).map((key, i) =>  (
                                    <React.Fragment key={i}>
                                        <Grid item sm={3} xs={12}>
                                            <TypographyMui variant="caption">
                                            {key}</TypographyMui>
                                        
                                        </Grid>
                                    
                                        <Grid item sm={9} xs={12}>
                                            <TypographyMui variant={key}>
                                            {variants[key]}</TypographyMui>
                                        
                                        </Grid>
                                    
                                    </React.Fragment>
                                )
                            )
                        }</Grid>
                    
                    </div>
                
                </DefaultLayout>
            )
        ;
    }
}
Settings = compose(withStyles(styles))(Settings)
;
export default Settings;
