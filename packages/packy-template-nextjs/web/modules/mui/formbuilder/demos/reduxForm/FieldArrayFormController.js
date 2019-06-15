/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\demos\reduxForm\FieldArrayFormController.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, createStyleSheet } from '@material-ui/core/styles';
import FieldArrayForm from './FieldArrayForm';
const styles = theme => (
    {});

class FieldArrayFormController extends React.Component {
    showResults = (values) => {
        window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
    }
    render() {
        return  (
                <div style={{
                    padding: 15
                }}>
                    <h2>
                    FieldArray form
                    </h2>
                
                    <FieldArrayForm onSubmit={this.showResults}>
                    </FieldArrayForm>
                
                </div>
            )
        ;
    }
}

const FieldArrayFormControllerStyled = withStyles(styles)(FieldArrayFormController)
;
export default FieldArrayFormControllerStyled;
