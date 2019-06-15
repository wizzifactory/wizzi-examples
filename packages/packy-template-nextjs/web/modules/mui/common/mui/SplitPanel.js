/*
    artifact generator: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\node_modules\wizzi-js\lib\artifacts\js\module\gen\main.js
    primary source IttfDocument: C:\My\wizzi\wizzi-examples\packages\packy-template-nextjs\.wizzi\ittf\src\modules\mui\common\mui\SplitPanel.js.ittf
    utc time: Mon, 03 Jun 2019 14:53:12 GMT
*/
'use strict';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Prefixer from 'inline-style-prefixer';
import stylePropType from 'react-style-proptype';
var USER_AGENT = 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';
const styles = (theme) => {
    return {};
};
class SplitPane extends React.Component {
    state = {
        size: this.props.size
    };
    render() {
        var {children, className, prefixer, split, style: styleProps} = this.props;
        var {size} = this.state;
        var classes = [
            'Pane', 
            split, 
            className
        ];
        var style = Object.assign({}, (styleProps || {}), {
            flex: 1, 
            position: 'relative', 
            outline: 'none'
        });
        if (size !== undefined) {
            if (split === 'vertical') {
                style.width = size;
            }
            else {
                style.height = size;
                style.display = 'flex';
            }
            style.flex = 'none';
        }
        return  (
                <div className={classes.join(' ')} style={prefixer.prefix(style)}>
                {children}</div>
            )
        ;
    }
}

SplitPane.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    prefixer: PropTypes.instanceOf().isRequired
    ,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
    ,
    split: PropTypes.oneOf([
        'vertical',
        'horizontal'
    ])
    ,
    style stylePropType: PropTypes.string
}

SplitPane.defaultProps  = {
    prefixer: new Prefixer({ userAgent: USER_AGENT })
}
SplitPane.propTypes = {};
SplitPane.defaultProps = {};
export default withStyles(styles)(SplitPane);
