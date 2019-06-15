/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\containers\MuiThemeContainer.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import green from '@material-ui/core/colors/green';
import AppContainer from '../components/AppRouter';
// A theme with custom primary and secondary color. It's optional.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: orange[300], 
            main: orange[500], 
            dark: orange[700]
        }, 
        secondary: {
            light: green[300], 
            main: green[500], 
            dark: green[700]
        }, 
        type: 'dark'
    }
});
class MuiThemeContainer extends React.Component {
    render() {
        const {
            dark
        } = this.props;
        return  (
                <MuiThemeProvider theme={theme}>
                    <AppContainer>
                    </AppContainer>
                
                </MuiThemeProvider>
            )
        ;
    }
}
export default connect((state) => {
    return {
            dark: state.dark
        };
})(MuiThemeContainer)
