/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\WizardFormController.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import WizardForm from './WizardForm';
const styles = theme => (
    {});

class WizardFormController extends React.Component {
    showResults = (values) => {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
    render() {
        return  (
                <div style={{
                    padding: 15
                }}>
                    <h2>
                    Wizard form
                    </h2>
                
                    <WizardForm onSubmit={this.showResults}>
                    </WizardForm>
                
                </div>
            )
        ;
    }
}

const WizardFormControllerStyled = withStyles(styles)(WizardFormController)
;
export default WizardFormControllerStyled;
