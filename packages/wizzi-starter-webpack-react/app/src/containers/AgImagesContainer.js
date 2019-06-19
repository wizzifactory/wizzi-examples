/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\containers\AgImagesContainer.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {reduxForm, formValueSelector} from 'redux-form';

import AgImages from '../components/AgImages';


class AgIMagesContainer extends React.Component {
    showResults = (values) => {
        alert(JSON.stringify(values, null, 4));
    }
    showChanges = (values) => {
        console.log('changes', JSON.stringify(values, null, 4));
    }
    render() {
        const {
            handleSubmit,
            pristine,
            reset,
            submitting,
            dirty,
            valid,
            fieldList,
            values,
            classes
        } = this.props;
        console.log(dirty, valid, pristine, fieldList);
        return  (
                <div>
                    <AgImages handleSubmit={handleSubmit} pristine={pristine} reset={reset} submitting={submitting} onSubmit={this.showResults} onChange={this.showChanges}>
                    </AgImages>
                
                    <ul>
                        <li>
                        dirty
                            <p>
                            {JSON.stringify(dirty)}
                            </p>
                        
                        </li>
                    
                        <li>
                        fieldList
                            <p>
                            {JSON.stringify(fieldList)}
                            </p>
                        
                        </li>
                    
                        <li>
                        pristine
                            <p>
                            {JSON.stringify(pristine)}
                            </p>
                        
                        </li>
                    
                        <li>
                        valid
                            <p>
                            {JSON.stringify(valid)}
                            </p>
                        
                        </li>
                    
                        <li>
                        values
                            <p>
                            {JSON.stringify(values)}
                            </p>
                        
                        </li>
                    
                    </ul>
                
                </div>
            )
        ;
    }
    }
const reduxFormConfig = {
    form: 'agimages'
};
AgIMagesContainer = reduxForm(reduxFormConfig)(AgIMagesContainer)
;
const selector = formValueSelector('agimages');
AgIMagesContainer = connect((state) => {
    return {};
})(AgIMagesContainer)
;
export default AgIMagesContainer;
