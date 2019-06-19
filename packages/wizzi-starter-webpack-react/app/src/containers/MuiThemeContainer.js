/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\containers\MuiThemeContainer.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import AppContainer from './AppContainer';
// A theme with custom primary and secondary color. It's optional.
const theme = createMuiTheme({
    palette: {
        primary: {
            light: green[300], 
            main: green[500], 
            dark: green[700]
        }, 
        secondary: {
            light: orange[300], 
            main: orange[500], 
            dark: orange[700]
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
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <AppContainer>
                        </AppContainer>
                    
                    </MuiPickersUtilsProvider>
                
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
