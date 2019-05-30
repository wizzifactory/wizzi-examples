/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\formik\.wizzi\src\components\App_01.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MiniFormik from './MiniFormik';
const styles = theme => (
    {
        root: {
            margin: "200px"
        }
    });

class App extends React.Component {
    render() {
        const {
            classes
        } = this.props;
        return  (
                <div className={classes.root}>
                    <MiniFormik initialValues={{
                        isGoing: true, 
                        numberOfGuests: 2
                    }} onSubmit={(values) =>
                        alert(JSON.stringify(values, null, 2))}>
                    {
                        (props) => {
                            const {
                                values, 
                                touched, 
                                errors, 
                                handleChange, 
                                handleBlur, 
                                handleSubmit
                            } = props;
                            return  (
                                    <form onSubmit={handleSubmit}>
                                        <label>
                                        Is going   <input name="isGoing" type="checkbox" value={values.isGoing} checked={values.isGoing} onChange={handleChange} onBlur={handleBlur}>
                                            </input>
                                        
                                        </label>
                                    
                                        <br>
                                        </br>
                                    
                                        <label>
                                        Number of guests   <input name="numberOfGuests" type="number" value={values.numberOfGuests} onChange={handleChange} onBlur={handleBlur}>
                                            </input>
                                        
                                        </label>
                                    
                                        <br>
                                        </br>
                                    
                                        <button type="submit">
                                        Submit</button>
                                    
                                        <pre>
                                        { JSON.stringify(props, null, 2) }</pre>
                                    
                                    </form>
                                )
                            ;
                        }
                    }</MiniFormik>
                
                </div>
            )
        ;
    }
}
App = withStyles(styles)(App)
;
export default App;
