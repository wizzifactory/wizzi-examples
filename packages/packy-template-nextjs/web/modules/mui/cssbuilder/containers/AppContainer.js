/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\cssbuilder\containers\AppContainer.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React from 'react';
import PropTypes from 'prop-types';

import dhQuery from 'dom-helpers/query';
import App from '../components/App';
import StylesData from './StylesData';

class AppContainer extends React.Component {
    state = {
        selectedHtmlFragmentId: null, 
        selectedRuleId: null, 
        selectedStyleGroupId: null, 
        htmlFragments: null, 
        cssRules: null, 
        styleGroupIds: [], 
        selectedHtmlFragmentRules: {}, 
        selectedStyleGroupMetaForm: null, 
        styleGroupIds: []
    };
    componentWillMount() {
        this.stylesData = new StylesData();
        console.log('componentWillMount');
        this.refreshStylesState(() =>
            this.updateDimensions());
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    updateDimensions = () => {
        this.setState({
            ...this.state, 
            width: dhQuery.width(window), 
            height: dhQuery.height(window)
        });
    }
    handleSelectedRuleChange = (controlId, controlValue) => {
        console.log('csstyles.AppContainer.handleSelectedRuleChange', controlId, controlValue);
        this.stylesData.selectRule(controlValue);
        this.refreshStylesState();
    }
    handleSelectedStyleGroupChange = (controlId, controlValue) => {
        console.log('csstyles.AppContainer.handleSelectedStyleGroupChange', controlId, controlValue);
        this.stylesData.selectStyleGroup(controlValue);
        this.refreshStylesState();
    }
    handleSelectedHtmlFragmentChange = (controlId, controlValue) => {
        console.log('csstyles.AppContainer.handleSelectedHtmlFragmentChange', controlId, controlValue);
        this.stylesData.selectHtmlFragment(controlValue);
        this.refreshStylesState();
    }
    handleStyleValuesChange = (id, values) => {
        console.log('csstyles.AppContainer.handleStyleValuesChange', id, values);
        this.stylesData.updateStyles(values);
        this.refreshStylesState();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }
    refreshStylesState(callback) {
        console.log('refreshStylesState.stylesData', this.stylesData);
        this.setState({
            ...this.state, 
            htmlFragments: this.stylesData.htmlFragments, 
            cssRules: this.stylesData.cssRules, 
            selectedHtmlFragmentId: this.stylesData.selectedHtmlFragmentId, 
            selectedRuleId: this.stylesData.selectedRuleId, 
            selectedStyleGroupId: this.stylesData.selectedStyleGroupId, 
            selectedHtmlFragmentRules: this.stylesData.selectedHtmlFragmentRules, 
            selectedHtmlFragmentRuleIds: this.stylesData.selectedHtmlFragmentRuleIds, 
            styleGroupIds: this.stylesData.styleGroupIds, 
            selectedStyleGroupMetaForm: this.stylesData.selectedStyleGroupMetaForm
        }, () => {
            console.log('refreshStylesState', this.state);
            if (callback) {
                callback();
            }
        });
    }
    render() {
        const {
            width,
            height
        } = this.props;
        console.log('render.state', this.state);
        return  (
                <div>
                {
                    this.state.selectedStyleGroupMetaForm ?  (
                            <App htmlFragments={this.state.htmlFragments} cssRules={this.state.cssRules} selectedHtmlFragmentId={this.state.selectedHtmlFragmentId} selectedRuleId={this.state.selectedRuleId} selectedStyleGroupId={this.state.selectedStyleGroupId} htmlFragmentsIds={Object.keys(this.state.htmlFragments)} selectedHtmlFragmentRuleIds={this.state.selectedHtmlFragmentRuleIds} styleGroupIds={this.state.styleGroupIds} selectedHtmlFragmentRules={this.state.selectedHtmlFragmentRules} selectedStyleGroupMetaForm={this.state.selectedStyleGroupMetaForm} onSelectedHtmlFragmentChange={this.handleSelectedHtmlFragmentChange} onSelectedRuleChange={this.handleSelectedRuleChange} onSelectedStyleGroupChange={this.handleSelectedStyleGroupChange} onStyleValuesChange={this.handleStyleValuesChange}>
                            </App>
                        )
                     :  (
                            <h1>
                            Loading ...
                            </h1>
                        )
                    
                }</div>
            )
        ;
    }
    }
const AppStyled = AppContainer;
const AppContexted = AppStyled;
export default AppContexted;
