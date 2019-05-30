/*
    artifact generator: C:\My\wizzi\wizzi-examples\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\webpack-react\.wizzi\src\containers\AppContainer.js.ittf
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppRouter from './AppRouter';
import App from '../components/app';
import {changeUserState} from '../store/actions';


class AppContainer extends React.Component {
    handleChangeUserState = (name, value) => {
        this.props.dispatchChangeUserState({
            ...this.props.userState, 
            [name]: value
        });
    }
    render() {
        return  (
                <div>
                    <AppRouter>
                    </AppRouter>
                
                    <App userState={this.props.userState} onChangeUserState={this.handleChangeUserState}>
                    </App>
                
                </div>
            )
        ;
    }
    }
const mapDispatchToProps = (dispatch) => {
    return {
            dispatch: dispatch, 
            dispatchChangeUserState: (userState) => {
                console.log('dispatchChangeTheme', userState);
                dispatch(changeUserState(userState));
            }
        };
};

const mapStateToProps = (state) => {
    return {
            userState: state.app.userState
        };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, stateProps, dispatchProps, {});
};
AppContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(AppContainer)
;
export default AppContainer;
