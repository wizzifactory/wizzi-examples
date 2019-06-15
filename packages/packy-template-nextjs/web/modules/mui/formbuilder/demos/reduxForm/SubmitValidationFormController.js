/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\SubmitValidationFormController.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import SubmitValidationForm from './SubmitValidationForm';
const styles = theme => (
    {});

class SubmitValidationFormController extends React.Component {
    showResults = (values) => {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
    render() {
        return  (
                <div style={{
                    padding: 15
                }}>
                    <h2>
                    Submit validation form
                    </h2>
                
                    <ul>
                        <li>
                        Usernames that will pass validation:
                        </li>
                    
                    {' '}<code>
                        john
                        </code>
                    
                    ,{' '}<code>
                        paul
                        </code>
                    
                    ,{' '}<code>
                        george
                        </code>
                    
                    , or{' '}<code>
                        ringo
                        </code>
                    
                    .<li>
                        Valid password for all users:
                            <code>
                            redux-form
                            </code>
                        
                        </li>
                    
                    </ul>
                
                    <SubmitValidationForm onSubmit={this.showResults}>
                    </SubmitValidationForm>
                
                </div>
            )
        ;
    }
}

const SubmitValidationFormControllerStyled = withStyles(styles)(SubmitValidationFormController)
;
export default SubmitValidationFormControllerStyled;
