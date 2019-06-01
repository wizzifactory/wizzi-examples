/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\containers\MuiThemeContainer.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import orange from '@material-ui/core/colors/orange';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import AppContainer from './AppContainer';
import customTheme from '../theme';
// A theme with custom primary and secondary color. It's optional.
const theme = createMuiTheme(customTheme);
class MuiThemeContainer extends React.Component {
    render() {
        const dark = false;
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
export default MuiThemeContainer;
