/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\components\FormDemos.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import SampleForm from '../demos/SampleForm';
import ReduxSimpleForm from '../demos/reduxForm/SimpleFormController';
import ReduxSyncValidationForm from '../demos/reduxForm/SyncValidationFormController';
import ReduxFieldLevelValidationForm from '../demos/reduxForm/FieldLevelValidationFormController';
import ReduxSubmitValidationForm from '../demos/reduxForm/SubmitValidationFormController';
import ReduxAsyncValidationForm from '../demos/reduxForm/AsyncValidationFormController';
import ReduxFieldArrayForm from '../demos/reduxForm/FieldArrayFormController';
import ReduxWizardForm from '../demos/reduxForm/WizardFormController';
const demoArray = [
    'SampleForm', 
    'ReduxSimpleForm', 
    'ReduxSyncValidationForm', 
    'ReduxFieldLevelValidationForm', 
    'ReduxSubmitValidationForm', 
    'ReduxAsyncValidationForm', 
    'ReduxFieldArrayForm', 
    'ReduxWizardForm'
];
const styles = theme => (
    {
        container: {
            paddingTop: '80px'
        }, 
        demos: {
            display: 'flex', 
            alignItems: 'stretch', 
            minHeight: '100vh', 
            width: '100%'
        }
    });

class FormDemos extends React.Component {
    state = {
        currentDemo: 'SampleForm'
    };
    handleChangeDemo = (e) => {
        this.setState({
            currentDemo: e.target.value
        });
    }
    render() {
        const {
            classes
        } = this.props;
        console.log('render.state', this.state);
        const {currentDemo} = this.state;
        return  (
                <div className={classes.container}>
                    <select value={currentDemo} onChange={this.handleChangeDemo}>
                    {
                        demoArray.map((o, i) => {
                            return  (
                                    <option key={o} value={o}>
                                    {o}
                                    </option>
                                )
                            ;
                        })
                    }</select>
                
                    <div className={classes.demos}>
                    {
                        currentDemo == 'SampleForm' &&  (
                            <SampleForm>
                            </SampleForm>
                        )
                        
                    }{
                        currentDemo == 'ReduxSimpleForm' &&  (
                            <ReduxSimpleForm>
                            </ReduxSimpleForm>
                        )
                        
                    }{
                        currentDemo == 'ReduxSyncValidationForm' &&  (
                            <ReduxSyncValidationForm>
                            </ReduxSyncValidationForm>
                        )
                        
                    }{
                        currentDemo == 'ReduxFieldLevelValidationForm' &&  (
                            <ReduxFieldLevelValidationForm>
                            </ReduxFieldLevelValidationForm>
                        )
                        
                    }{
                        currentDemo == 'ReduxSubmitValidationForm' &&  (
                            <ReduxSubmitValidationForm>
                            </ReduxSubmitValidationForm>
                        )
                        
                    }{
                        currentDemo == 'ReduxAsyncValidationForm' &&  (
                            <ReduxAsyncValidationForm>
                            </ReduxAsyncValidationForm>
                        )
                        
                    }{
                        currentDemo == 'ReduxFieldArrayForm' &&  (
                            <ReduxFieldArrayForm>
                            </ReduxFieldArrayForm>
                        )
                        
                    }{
                        currentDemo == 'ReduxWizardForm' &&  (
                            <ReduxWizardForm>
                            </ReduxWizardForm>
                        )
                        
                    }</div>
                
                </div>
            )
        ;
    }
}

export default withStyles(styles)(FormDemos)
