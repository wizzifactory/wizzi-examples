/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\containers\MuiApp.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MuiThemeProvider, { MUI_SHEET_ORDER } from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import createPalette from '@material-ui/core/styles/palette';
import { orange, red } from '@material-ui/core/styles/colors';
import { lightTheme, darkTheme, setPrismTheme } from '../utils/prism';
import AppContainer from './AppContainer';
let styleManager;
class MuiApp extends React.Component {
    render() {
        const {
            dark
        } = this.props;
        const palette = createPalette({
            primary: orange, 
            accent: red, 
            type: (dark ? 'dark' : 'light')
        });
        const theme = createMuiTheme({
            palette
        });
        if (!styleManager) {
            const themeContext = MuiThemeProvider.createDefaultContext({
                theme
            });
            styleManager = themeContext.styleManager;
        }
        else {
            styleManager.updateTheme(theme);
        }
        styleManager.setSheetOrder(MUI_SHEET_ORDER.concat([]));
        if (dark) {
            setPrismTheme(darkTheme);
        }
        else {
            setPrismTheme(lightTheme);
        }
        return  (
                <MuiThemeProvider theme={theme} styleManager={styleManager}>
                    <div>
                        <AppContainer>
                        </AppContainer>
                    
                    </div>
                
                </MuiThemeProvider>
            )
        ;
    }
}
export default connect((state) => {
    return {
            dark: state.dark
        };
})(MuiApp)
