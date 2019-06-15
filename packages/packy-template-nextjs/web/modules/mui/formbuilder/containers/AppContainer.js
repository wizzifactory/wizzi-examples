/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\formbuilder\containers\AppContainer.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import App from '../components/App';

class AppContainer extends React.Component {
    render() {
        return  (
                <App>
                </App>
            )
        ;
    }
    }
const AppStyled = AppContainer;
const AppContexted = AppStyled;
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
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(AppContexted)
