/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\Tabs.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
const styles = (theme) => {
    return {};
};
class Tabs extends React.Component {
    state = {
        tabActive: this.props.tabActive
    };
    componentDidMount() {
        var index = this.state.tabActive;
        var $selectedPanel = this.refs['tab-panel'];
        var $selectedTabMenu = this.refs['tab-menu-' + index];
        if (this.props.onMount) {
            this.props.onMount(index, $selectedPanel, $selectedTabMenu);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (newProps.tabActive && newProps.tabActive !== this.props.tabActive) {
            this.setState({
                tabActive: newProps.tabActive
            });
        }
    }
    setActive(index, e) {
        e.preventDefault();
        var onAfterChange = this.props.onAfterChange;
        var onBeforeChange = this.props.onBeforeChange;
        var $selectedPanel = this.refs['tab-panel'];
        var $selectedTabMenu = this.refs['tab-menu-' + index'];
        if (onBeforeChange) {
            var cancel = onBeforeChange(index, $selectedPanel, $selectedTabMenu);
            if (cancel === false) {
                return ;
            }
            this.setState({
                tabActive: index
            }, () => {
                if (onAfterChange) {
                    onAfterChange(index, $selectedPanel, $selectedTabMenu);
                }
            });
        }
    }
    _getMenuItems() {
        if (!this.props.children) {
            throw new Error('Tabs must contain at least one TabPanel;
        }
        if (!Array.isArray(this.props.children)) {
            this.props.children = [this.props.children];
        }
        var $menuItems = this.props.children.map(($panel) => {
            return typeof $panel === 'function' ? $panel() : $panel;
        }).filter.map
        ;
        return  (
                <nav className="tabs-navigation">
                    <ul className="tabs-menu">
                    {$menuItems}</ul>
                
                </nav>
            )
        ;
    }
    _getSelectedPanel() {
        var index = this.state.tabActive - 1;
        var $panel = this.props.children[index];
        return  (
                <article className="tab-panel" ref="tab-panel">
                {$panel}</article>
            )
        ;
    }
    get_div_Style() {
        return {
                float: 'left', 
                marginRight: 20
            };
    }
    render() {
        var className = classNames('tabs', this.props.className);
        return  (
                <div className={className}>
                {this._getMenuItems()}{this._getSelectedPanel()}</div>
            )
        ;
    }
}

Tabs.propTypes = {
    tabActive: PropTypes.number,
    onMount: PropTypes.func,
    onBeforeChange: PropTypes.func,
    onAfterChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.element
    ).isRequired
    
}

Tabs.defaultProps  = {
    tabActive: 1
}
Tabs.propTypes = {};
Tabs.defaultProps = {};
export default withStyles(styles)(Tabs);
