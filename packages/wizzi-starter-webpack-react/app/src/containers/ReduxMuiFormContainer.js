/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\containers\ReduxMuiFormContainer.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ReduxMuiForm from '../components/ReduxMuiForm';


class ReduxMuiFormContainer extends React.Component {
    showResults = (values) => {
        alert(JSON.stringify(values, null, 4));
    }
    render() {
        return  (
                <div>
                    <ReduxMuiForm onSubmit={this.showResults}>
                    </ReduxMuiForm>
                
                </div>
            )
        ;
    }
    }
const mapDispatchToProps = (dispatch) => {
    return {
            dispatch: dispatch
        };
};

const mapStateToProps = (state) => {
    return {};
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps, {});
};
ReduxMuiFormContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ReduxMuiFormContainer)
;
export default ReduxMuiFormContainer;
