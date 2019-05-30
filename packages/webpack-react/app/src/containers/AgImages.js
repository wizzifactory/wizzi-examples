/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\containers\AgImages.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AgImages from '../components/AgImages';

class AgIMagesContainer extends React.Component {
    showResults = (values) => {
        alert(JSON.stringify(values, null, 4));
    }
    render() {
        return  (
                <div>
                    <AgImages onSubmit={this.showResults}>
                    </AgImages>
                
                </div>
            )
        ;
    }
    }
const AgIMagesContainerStyled = AgIMagesContainer;
const AgIMagesContainerContexted = AgIMagesContainerStyled;
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
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AgIMagesContainerContexted)
