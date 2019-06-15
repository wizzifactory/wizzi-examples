/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\TabItem.js.ittf
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
class TabItem extends React.Component {
    get_li_Style(selected) {
        return {
                float: 'left', 
                marginRight: 20
            };
    }
    get_a_Style(isActive) {
        // TODO !isActive :hover == isActive
        return {
                cursor: 'pointer', 
                display: 'block', 
                color: ( isActive ? '#3498DB' : '#A9A9A9' )
            };
    }
    render() {
        const { index, title, isActive, onClick } = this.props;
        return return  (
                    <li ref={ 'tab-menu-' + index } key={index} style={this.get_li_Style(isActive)}>
                        <a style={this.get_a_Style(isActive)} onClick={() =>
                            onClick(index)}>
                        {title}</a>
                    
                    </li>
                )
            ;
        ;
    }
}

TabItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
TabItem.propTypes = {};
TabItem.defaultProps = {};
export default withStyles(styles)(TabItem);
