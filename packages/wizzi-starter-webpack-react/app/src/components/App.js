/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\components\App.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
const styles = theme => (
    {
        root: {
            backgroundColor: "#222", 
            color: "#ddd", 
            margin: "50px", 
            padding: "30px"
        }, 
        form: {
            backgroundColor: "#444", 
            padding: "10px"
        }, 
        formControl: {
            
        }
    });

class App extends React.Component {
    handleChangeUserState = (event) => {
        this.props.onChangeUserState(event.target.name, event.target.value);
    }
    render() {
        const {
            classes,
            userState
        } = this.props;
        console.log('components/App.userState', userState, userState.themeName);
        return  (
                <div className={ classes.root }>
                    <h1>
                    {'Theme name: ' + userState.themeName}
                    </h1>
                
                    <div className={ classes.form }>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="themeName">
                            Theme</InputLabel>
                        
                            <Select value={userState.themeName} onChange={this.handleChangeUserState} inputProps={{
                                name: 'themeName', 
                                id: 'themeName'
                            }}>
                                <MenuItem value="dark">
                                    <em>
                                    Dark</em>
                                
                                </MenuItem>
                            
                                <MenuItem value="light">
                                    <em>
                                    Light</em>
                                
                                </MenuItem>
                            
                            </Select>
                        
                        </FormControl>
                    
                    </div>
                
                </div>
            )
        ;
    }
}
App = withStyles(styles)(App)
;
export default App;
